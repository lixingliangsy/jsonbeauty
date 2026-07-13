export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "JSONBeauty",
  slug: "jsonbeauty",
  tagline: "Pretty-print and validate any JSON",
  description: "Paste raw or minified JSON and get a clean, indented version plus a clear error if it is malformed. For developers and API wranglers.",
  toolTitle: "Format your JSON",
  resultLabel: "Formatted JSON",
  ctaLabel: "Format JSON",
  features: [
  "Indent 2 spaces",
  "Error location",
  "Safe (no upload)",
  "Copy-ready"
],
  inputs: [
  {
    "key": "json",
    "label": "Paste JSON",
    "type": "textarea",
    "placeholder": "{\"name\":\"TaskNinja\",\"users\":12}"
  }
] as InputField[],
  systemPrompt: "You are a JSON formatter. Pretty-print the given JSON at 2-space indent. If invalid, return the exact parse error.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Unlimited"
  },
  {
    "tier": "Pro",
    "price": "$9/mo",
    "desc": "Batch, schema lint"
  },
  {
    "tier": "Team",
    "price": "$29/mo",
    "desc": "API, history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const raw = inputs['json'] || '{}'
  try {
    const obj = JSON.parse(raw)
    return 'VALID JSON\n\n' + JSON.stringify(obj, null, 2) + '\n\n--- (Mock formatter. Add OPENAI_API_KEY for schema hints.)'
  } catch (e) {
    return 'INVALID JSON\n\nError: ' + e.message + '\n\n--- (Mock check. Paste valid JSON to pretty-print.)'
  }
}
}
