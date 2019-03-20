export default [
  {
    label: "Twitter",
    value: "twitter",
    action: { type: "site", url: "https://twitter.com/guy_livni" }
  },
  {
    label: "GitHub",
    value: "github",
    action: { type: "site", url: "https://github.com/GuyLivni" }
  },
  {
    label: "LinkedIn",
    value: "linkedin",
    action: { type: "site", url: "https://www.linkedin.com/in/guylivni/" }
  },
  {
    label: "Website",
    value: "website",
    action: { type: "site", url: "https://guylivni.github.io/" }
  },
  {
    label: "Quit",
    value: "quit",
    action: { type: "action", fnc: () => process.exit() }
  }
];
