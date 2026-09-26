export const es = {
  meta: {
    title: 'Christian de Diego · christian97dd',
    description:
      'Desarrollador web y mobile. De noche hago juegos indie de terror inspirados en leyendas del norte argentino.',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    languageNav: 'Idioma del sitio',
    profilesNav: 'Perfiles',
    footerNav: 'Enlaces',
    playOn: 'jugar en itch.io',
    newTab: '(se abre en una pestaña nueva)',
  },
  hero: {
    handle: 'christian97dd.dev',
    firstName: 'Christian',
    lastNamePrefix: 'de',
    lastName: 'Diego',
    thesisLead: 'De día programo apps y webs.',
    thesisRest: 'De noche hago juegos sobre lo que se esconde en la oscuridad.',
  },
  links: {
    itch: 'itch.io',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    workshop: 'El Yunque 3D',
  },
  work: {
    hour: '09:00',
    hourLabel: 'código',
    title: 'Desarrollo web y mobile',
    intro:
      'Es mi trabajo. Hago apps que se usan de pie, con un escáner en la mano, en un depósito o en la góndola de un súper.',
    apps: {
      title: 'Apps mobile y web',
      body: 'Construyo apps de logística para retail: picking, depósitos y entregas. Me interesa que funcionen rápido en un celular barato y con mala señal.',
    },
    tools: {
      title: 'Herramientas propias',
      campusSync:
        'Baja las clases grabadas del campus de la facultad y las sube a NotebookLM todos los días.',
      jiraQuickOpen:
        'Extensión de Chrome para abrir o copiar el link de un ticket de Jira desde cualquier pestaña.',
      storeLink: 'Chrome Web Store',
      storeLinkLabel: 'Jira Quick Open en la Chrome Web Store',
    },
    stackTitle: 'Con qué trabajo',
    stackGroups: {
      languages: 'Lenguajes',
      webMobile: 'Web y mobile',
      games: 'Juegos',
      daily: 'Día a día',
    },
  },
  games: {
    hour: '23:40',
    hourLabel: 'juegos',
    title: 'Lo que hago cuando nadie me lo pide',
    intro:
      'Juegos chicos, casi todos de terror o de exploración, muchos anclados en leyendas del norte argentino. Algunos nacen en la tecnicatura de la UTN; otros me acompañan hace años.',
    status: {
      live: 'Jugable',
      wip: 'En desarrollo',
    },
    specsLabel: 'Ficha técnica',
    items: {
      olvidaron: {
        title: 'A los que olvidamos',
        description:
          'Bajaste tanto que ya no recordás por qué. Un dungeon crawler sobre buscar a alguien en la oscuridad.',
        specs: ['Unity 6', '2D', 'WebGL', '2026'],
      },
      hide: {
        title: 'Protocol HIDE',
        description: 'Stealth en 3D hecho en equipo. Esquivar conos de visión y escuchar alarmas.',
        specs: ['Unity 6', '3D', 'Grupal', '2026'],
      },
      gravity: {
        title: 'Gravity flip',
        description: 'Acción en el navegador donde arriba y abajo cambian de lugar.',
        specs: ['Unity 6', '2D', 'WebGL'],
      },
      guardian: {
        title: 'El Guardián',
        description:
          'Stealth-horror en la Puna jujeña. La criatura no ve: te encuentra por el ruido que hacés.',
        specs: ['Unity 6', '3D', '4.000 msnm'],
      },
      familiar: {
        title: 'El Familiar',
        description:
          'Terror top-down basado en la leyenda del perro negro de los ingenios azucareros del NOA.',
        specs: ['Phaser', '2D', 'JavaScript'],
      },
    },
  },
  workshop: {
    hour: 'Sábados',
    hourLabel: 'taller',
    title: 'El Yunque 3D',
    intro: 'Mi taller de impresión 3D. Las piezas no salen de un catálogo: las modelo con código.',
    subtitle: 'Del script al filamento',
    body: 'Cada cortante y cada llavero empieza como un script de Python que genera el STL. Cambiar una medida es cambiar un número.',
    products: ['Cortantes de galletitas', 'Llaveros personalizados', 'Piezas a pedido'],
    productsLabel: 'Qué hago en el taller',
    printerCaption: 'capa 12 / 40 · 0.2 mm · PLA',
  },
  footer: {
    signature: 'Christian de Diego · christian97dd',
  },
};

export type Dictionary = typeof es;
