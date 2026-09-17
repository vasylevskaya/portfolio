export const headerNav = {
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
  SKILLS: 'skills',
  PROJECTS: 'projects'
}

export const experienceTimeline = [
  {
    id: 0,
    openedByDefault: false,
    date: 'Mar 25 - May 26',
    title: 'Medify',
    subtitle: 'Barcelona, Spain',
    img: 'company-4',
    techStack: ['Vue.js 3', 'Composition API', 'Vue Router', 'Pinia', 'Vuex', 'Jest', 'Vitest'],
    projects: [
      {
        title: "Main Platform",
        subtitle: "Software that shows patients interactive 3D visual content and collects their data through questionnaires, with content managed via a CMS",
        description: [
          'Rewrote the entire frontend from legacy ActionScript to Vue.js 3, applying clean architecture principles by separating business logic, infrastructure, and UI layers',
          'Implemented new features: custom navigation, questionnaire progress bar, localization.',
          'Added accessibility support: high-contrast mode and full screen reader compatibility',
          'Rebuilt the UI to be fully responsive across all devices',
          'Adjusted API usage, collaborating with the backend team as they migrated from legacy backend',
          'Covered all complex calculations with Jest tests, cutting down manual testing after new releases.',
        ],
      },
      {
        title: "Dashboard",
        subtitle: "Software for sending digital intakes, viewing statistics, and accessing received patient data ",
        description: [
          'Migrated the codebase from Vue 2 to Vue 3',
          'Refined responsiveness and accessibility across the dashboard',
          'Covered core functionality with Vitest tests',
        ],
      },
    ],
  },
  {
    id: 1,
    openedByDefault: false,
    date: 'Jan 24 - Jun 24',
    title: 'Recovo',
    subtitle: 'Barcelona, Spain',
    img: 'company-3',
    techStack: ["React.js", "Next.js", "TypeScript", "Bootstrap"],
    projects: [
      {
        title: "Fabric Marketplace",
        subtitle: "Company Main Website",
        img: 'project-img-01',
        description: [
          'Developed an Account Page enabling users to manage personal information, products, orders, billing, and shipping, and receive announcements.',
          'Implemented wishlist feature',
          'Developed functionality for collecting and storing user data to provide a more personalized user experience.',
          'Covered over 75% of pages with unit tests and refactored over 80% of legacy code.'
        ],
      },
      {
        title: "Extended CMS Solution",
        subtitle: "Custom Platform",
        img: 'project-img-02',
        description: [
          'Played a key role in migrating the platform from WordPress to a custom CMS, which significantly improved content team efficiency.',
          'Implemented functionality to manage products, users, orders, blog articles, and custom filters. The system offers a strong and flexible content management solution that meets the company\'s unique needs.'
        ]
      },
      {
        title: "Circularity Inventory Management Software",
        subtitle: 'This tool simplifies inventory tracking and enhences material lifecycle management.',
        img: 'project-img-03',
        description: [
          `Developed sign in and sign up pages, password recovery, and user management features.`
        ],
      }
    ]
  },
  {
    id: 2,
    openedByDefault: false,
    date: 'Jun 22 - Jul 23',
    title: 'Vectoriam',
    subtitle: 'Madrid, Spain',
    img: 'company-2',
    techStack: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Shopify"],
    projects: [
      {
        title: "New website for a popular Spanish men's clothing brand",
        img: 'project-img-04',
        description: `
          Developed all the important pages such as home, shop,
          product and about us according to the new design. Additionally,
          implemented a dropdown menu, filters, and search features.
          Provided full responsiveness for all devices. Provided new custom
          settings to expend content management abilities of the client.
        `,
      },
      {
        title: "New website for a health and fitness company",
        img: 'project-img-05',
        description: `
          Created new optimized landing website for a company specializing in
          health and fitness services. Developed sections such as home,
          about us, services and contact pages. Provided full responsiveness
          across various devices and cross-browser compatibility
        `,
      },
      {
        title: "Website renovation for a popular Spanish jewelry brand",
        img: 'project-img-06',
        description: `
          Created and implemented my own design based on client's preferences,
          developed all the key pages such as the homepage, collection, product
          and about us, ensuring full responsiveness. Additionally, I have incorporated
          a dropdown menu, filters, and search features. Developed custom settings
          to expend content management abilities of the client.
        `,
      }
    ]
  },
  {
    id: 3,
    openedByDefault: false,
    date: 'Jan 21 - May 22',
    title: 'Harnosoft',
    subtitle: 'Lviv, Ukraine',
    techStack: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS", "Formik"],
    img: 'company-1',
    projects: [
      {
        title: "Job board website for truck drivers",
        img: 'project-img-07',
        description: `
          Developed login, register, password recovery pages. Implemented settings page.
          Created header and footer. Contributed to developing job board page. Provided
          full responsiveness across various devices and cross-browser compatibility.
          Built varios complex forms with validation. Established efficient communication
          with the server.
        `,
      }
    ]
  },
  {
    id: 4,
    openedByDefault: false,
    date: 'since 2021',
    title: 'Freelance',
    description: `
      During the time when I was not employed by companies,
      I worked independently on projects for various
      businesses. Here are some of them:
    `,
    projects: [
      {
        title: "New website for an industrial company",
        img: 'project-img-08',
        description: `
          A new website for a company that offers a range of industrial processing services,
          including laser engraving, powder coating, glass-blasting, grinding, and more.
          After consulting with the client, I developed a sleek and modern design based on
          their preferences and brand vision. Integrated language switching and a feedback
          form that sends emails to the client, along with smooth animations to create a more
          lively an engaging site.
        `,
      },
      {
        title: "New website for the sushi delivery",
        description: `
          A new website on React.js for a sushi delivery service according to the design.
          I developed home page, menu page, a cart, and contact page. Implemented user
          authentication. Provided full responsiveness across various devices,
          cross-browser compatibility and smooth animations.
        `,
      },
      {
        title: "New website for the yoga studio",
        description: `
          I developed a whole website on React.js. Created home, about us, reviews,
          contact pages. Provided user authentication. Implemented functionality
          to book a class or rent a room. Provided full responsiveness across various
          devices and cross-browser compatibility. Integrated advanced animations and
          interactivity.
        `,
      }
    ]
  }
]

export const educationTimeline = [
  {
    id: 1,
    openedByDefault: false,
    date: '2017-2021',
    title: 'Marketing',
    subtitle: 'Taras Shevchenko National University of Kyiv',
    img: 'knu'
  },
  {
    id: 2,
    openedByDefault: false,
    date: '2020',
    title: 'Frontend Development Basics',
    subtitle: 'Mate Academy',
    img: 'ma'
  },
  {
    id: 3,
    openedByDefault: false,
    date: '2021',
    title: 'Frontend Development Advanced',
    subtitle: 'Mate Academy',
    img: 'ma'
  },
  {
    id: 4,
    openedByDefault: false,
    date: '2022',
    title: 'Backend Development Basics',
    subtitle: 'Mate Academy',
    img: 'ma'
  },
  {
    id: 5,
    openedByDefault: false,
    date: '2023',
    title: 'UX/UI Design Basics',
    subtitle: 'Mate Academy',
    img: 'ma'
  },
]

export const skills = [
  {
    title: 'Languages and Frameworks',
    list: [
      'JavaScript',
      'TypeScript', 
      'React.js + Redux/Recoil',
      'Next.js',
      'Vue.js + Composition API + Pinia/Vuex',
    ]
  },
  {
    title: 'Styling',
    list: [
      'Figma',
      'HTML',
      'CSS',
      'Sass (SCSS)',
      'BEM',
      'Bootstrap',
      'Bulma',
      'Tailwind'
    ]
  },
  {
    title: 'Backend and APIs',
    list: [
      'Node.js',
      'Express', 
      'Fetch',
      'REST API',
      'GraphQl API',
      'Web sockets'
    ]
  },
  {
    title: 'AI Tools',
    list: [
      'Cursor',
      'ChatGPT',
      'Claude Code',
    ]
  },
  {
    title: 'Tools & Testing',
    list: [
      'Git',
      'Github',
      'Gitlab',
      'Docker',
      'AWS',
      'Jest'
    ]
  },
  {
    title: 'Practices',
    list: [
      'OOP',
      'SOLID',
      'Algorithms',
      'SDLC (Waterfall, Agile - Scrum, Kanban)'
    ]
  }
]

export const petProjects = [
  {
    imgClass: 'pet-img-04',
    title: 'CRM Pilates',
    description: `
      Portfolio CRM for a Pilates instructor - an app for managing clients, weekly schedule, class pricing, and revenue statistics.
      Built with React, TypeScript, Vite, and IndexedDB (Dexie).
      Layered architecture (domain → application → infrastructure → UI) with unit tests on core business logic.
      Architecture decisions documented in ADRs.
    `,
    techStack: ['React.js', 'HTML', 'CSS', 'TypeScript', 'Vite', 'IndexedDB (Dexie)', 'Cursor'],
    link: 'https://github.com/vasylevskaya/crm-pilates',

  },
  {
    imgClass: 'pet-img-03',
    title: 'Weather app',
    description: `
      By default, it shows the weather for the user's current location.
      If the user doesn't allow access to their location, they can use a search input to retrieve weather data for a specific location.
      It fetches real data from an API and provides information about the current temperature, UV index, wind, humidity, cloud cover, precipitation, visibility, and pressure.
      It displays the location on a map.
      The background changes according to whether it's day or night, as well as the intensity of cloud cover.
    `,
    techStack: ['Vue.js', 'HTML', 'CSS', 'Leaflet Library', 'Rapid API'],
    link: 'https://github.com/vasylevskaya/vue-todo-list',

  },
  {
    imgClass: 'pet-img-01',
    title: 'Todo app',
    description: `
      A simple Todo app that helps users manage their tasks: to add, to edit, and to delete,
      as well as to track whether tasks are completed or not. I also implemented a
      filter feature, letting users view only completed or uncompleted tasks,
      making it easier to stay organized and focused. This app is user-friendly
      and boosts productivity by keeping tasks clear and manageable.
    `,
    techStack: ['Vue.js', 'SASS'],
    link: 'https://github.com/vasylevskaya/vue-todo-list',

  },
  {
    imgClass: 'pet-img-02',
    title: 'Rick and Morty',
    description: `
      Just a funny little project I built back in 2022 :)
      A Rick and Morty themed website with a Watch List page, where users can
      add and manage shows they want to watch later. And the Characters Page, where
      users can filter by species, status, and gender,
      and navigate through the list with pagination.
    `,
    techStack: ['React.js', 'React Router', 'Recoil', 'SASS'],
    link: 'https://github.com/vasylevskaya/rick-and-morty',
  }
]
