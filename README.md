# unslopovich

**Your app looks AI-generated. Dr. Unslopovich noticed.**

Users don't hate your purple gradient. They hate what you did to the back button.

![Before: a purple gradient dashboard full of sparkles and fake stats. After: a clean native list of zones and quick actions](docs/before-after.png)

<sub>Dramatization. Your app may be worse.</sub>

```bash
npx unslopovich
```

Then tell your agent:

```text
/unslopovich review my app
```

## The doctor did the reading

Dr. Unslopovich scanned 105,027 App Store reviews from 299 top apps. Exactly one mentioned a purple gradient. It was asking for one.

Here's what made people furious instead, in the 46,742 reviews rated 3 stars or lower:

- **You made it slow.** 4,326 reviews about lag, glitches, and crashes.
- **You moved the button.** 1,751. Telegram's Contacts tab. Chrome's back arrow. Instagram's hold to pause.
- **You interrupted them.** 1,148. Popups in the middle of ordering food.
- **You hid everything.** 859 said it was hard to find or use.
- **You put AI where the feature was.** 705. Gemini in the toolbar. Alexa in the search box.
- **You never tried it on their phone.** 345 about broken layouts.

<sub>Most recent reviews from the US and UK App Stores. Keyword matches, so treat them as rough. Themes can overlap.</sub>

So the doctor checks what users actually scream about first, and your gradient second.

## Symptoms

- Controls that moved, vanished, or do nothing
- AI features blocking the thing people came to do
- Numbers and labels that lie
- Website in a phone: hamburger menus, hero sections, fake tab bars
- Cards inside cards inside cards
- Emoji pretending to be icons
- Stat tiles with numbers nobody measured
- The keyboard sitting on top of the input
- "Oops! Something went wrong"
- "Unlock your potential"

## Bedside manner

> Three gradients, two hamburgers, no back button. I have questions.

> This card contains a card. That card contains a sparkle. Remove all three.

> "Seamless" is not a feature.

Sample verdicts. Yours may be worse.

## Treats

SwiftUI, UIKit, Jetpack Compose, React Native, Expo, Flutter, Ionic, Capacitor, Angular Native, and NativeScript.

It reads your theme, finds the problems, fixes the shared components first, and uses your platform's native building blocks. It won't move your users' favorite button without asking.

Only want the bad news? Ask for a review and it stops at the diagnosis.

## Other agents

Installs for Claude Code by default. For any other agent that reads `SKILL.md`, point it at that agent's skills folder:

```bash
npx unslopovich --dir ~/path/to/skills
```

## License

MIT
