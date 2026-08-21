# UX principles

- Start with the user’s goal and a single obvious primary action. Do not make every action primary.
- Use familiar navigation and control behavior. Reveal advanced filters, bulk actions, and secondary controls progressively.
- Make state durable and local: confirmation must not rely only on a toast; validation stays near the affected field and a summary guides long forms.
- Every changed flow considers default, focus, hover when relevant, active, disabled, loading, empty, error, success, and authorization-denied states in proportion to the feature.
- Loading matches context: use skeletons for data regions and a clear pending state for a submitted action. Preserve safe user input after recoverable errors.
- Empty states explain the situation and the next permitted action. They may be warmer or more illustrative in onboarding, but are never childish or decorative noise.
- Status never relies on color alone; combine meaningful text, iconography, and, when useful, tint.
- Use real evidence, content, and metrics. Never invent social proof, statistics, or dashboard data to fill a layout.
