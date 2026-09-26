import type { Dictionary } from './es';

export const en: Dictionary = {
  meta: {
    title: 'Christian de Diego · christian97dd',
    description:
      'Web and mobile developer. At night I make indie horror games inspired by legends from northern Argentina.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    languageNav: 'Site language',
    profilesNav: 'Profiles',
    footerNav: 'Links',
    playOn: 'play on itch.io',
    newTab: '(opens in a new tab)',
  },
  hero: {
    handle: 'christian97dd.dev',
    firstName: 'Christian',
    lastNamePrefix: 'de',
    lastName: 'Diego',
    thesisLead: 'By day I build apps and websites.',
    thesisRest: 'By night I make games about what hides in the dark.',
  },
  links: {
    itch: 'itch.io',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    workshop: 'El Yunque 3D',
  },
  work: {
    hour: '09:00',
    hourLabel: 'code',
    title: 'Web and mobile development',
    intro:
      "It's my job. I build apps people use standing up, scanner in hand, in a warehouse or down a supermarket aisle.",
    apps: {
      title: 'Mobile and web apps',
      body: 'I build logistics apps for retail: picking, warehouses and deliveries. I care about them running fast on a cheap phone with a bad signal.',
    },
    tools: {
      title: 'Tools I made',
      campusSync:
        "Downloads recorded lectures from my university's campus and uploads them to NotebookLM every day.",
      jiraQuickOpen:
        'Chrome extension to open or copy a Jira ticket link from any tab.',
      storeLink: 'Chrome Web Store',
      storeLinkLabel: 'Jira Quick Open on the Chrome Web Store',
    },
    stackTitle: 'What I work with',
    stackGroups: {
      languages: 'Languages',
      webMobile: 'Web and mobile',
      games: 'Games',
      daily: 'Day to day',
    },
  },
  games: {
    hour: '23:40',
    hourLabel: 'games',
    title: 'What I make when nobody asks',
    intro:
      "Small games, mostly horror or exploration, many rooted in legends from northern Argentina. Some start as coursework at UTN; others have been with me for years.",
    status: {
      live: 'Playable',
      wip: 'In progress',
    },
    specsLabel: 'Specs',
    items: {
      olvidaron: {
        title: 'A los que olvidamos',
        description:
          "You went down so far you no longer remember why. A dungeon crawler about searching for someone in the dark.",
        specs: ['Unity 6', '2D', 'WebGL', '2026'],
      },
      hide: {
        title: 'Protocol HIDE',
        description: 'Team-made 3D stealth. Dodge vision cones and listen for alarms.',
        specs: ['Unity 6', '3D', 'Team project', '2026'],
      },
      gravity: {
        title: 'Gravity flip',
        description: 'Browser action game where up and down trade places.',
        specs: ['Unity 6', '2D', 'WebGL'],
      },
      guardian: {
        title: 'El Guardián',
        description:
          "Stealth horror in the Puna of Jujuy. The creature can't see: it finds you by the noise you make.",
        specs: ['Unity 6', '3D', '4,000 m altitude'],
      },
      familiar: {
        title: 'El Familiar',
        description:
          "Top-down horror based on the legend of the black dog of northwestern Argentina's sugar mills.",
        specs: ['Phaser', '2D', 'JavaScript'],
      },
    },
  },
  workshop: {
    hour: 'Saturdays',
    hourLabel: 'workshop',
    title: 'El Yunque 3D',
    intro: "My 3D printing workshop. The pieces don't come from a catalog: I model them with code.",
    subtitle: 'From script to filament',
    body: 'Every cookie cutter and keychain starts as a Python script that generates the STL. Changing a size means changing a number.',
    products: ['Cookie cutters', 'Custom keychains', 'Made-to-order parts'],
    productsLabel: 'What I make in the workshop',
    printerCaption: 'layer 12 / 40 · 0.2 mm · PLA',
  },
  footer: {
    signature: 'Christian de Diego · christian97dd',
  },
};
