#!/usr/bin/env node

const HELP = `Usage: node contrast-check.mjs <foreground> <background>

Check the WCAG contrast ratio between two opaque hexadecimal colors.
Colors may use three or six digits, with or without a leading #.

Example:
  node contrast-check.mjs "#1f2937" "#ffffff"`;

function parseHex(value) {
  const normalized = value.replace(/^#/, "");
  const expanded = normalized.length === 3
    ? normalized.split("").map((character) => character.repeat(2)).join("")
    : normalized;

  if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
    throw new Error(`Invalid hexadecimal color: ${value}`);
  }

  return [0, 2, 4].map((offset) => Number.parseInt(expanded.slice(offset, offset + 2), 16));
}

function relativeLuminance(rgb) {
  const [red, green, blue] = rgb.map((channel) => {
    const value = channel / 255;
    return value <= 0.04045
      ? value / 12.92
      : ((value + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(foreground, background) {
  const first = relativeLuminance(parseHex(foreground));
  const second = relativeLuminance(parseHex(background));
  const lighter = Math.max(first, second);
  const darker = Math.min(first, second);
  return (lighter + 0.05) / (darker + 0.05);
}

function verdict(ratio, threshold) {
  return ratio >= threshold ? "PASS" : "FAIL";
}

const argumentsList = process.argv.slice(2);

if (argumentsList.includes("--help") || argumentsList.includes("-h")) {
  console.log(HELP);
  process.exit(0);
}

if (argumentsList.length !== 2) {
  console.error(HELP);
  process.exit(2);
}

try {
  const ratio = contrastRatio(argumentsList[0], argumentsList[1]);
  console.log(`Contrast ratio: ${ratio.toFixed(2)}:1`);
  console.log(`Normal text (4.5:1): ${verdict(ratio, 4.5)}`);
  console.log(`Large text (3.0:1): ${verdict(ratio, 3)}`);
  console.log(`Non-text UI (3.0:1): ${verdict(ratio, 3)}`);
} catch (error) {
  console.error(error.message);
  process.exit(2);
}
