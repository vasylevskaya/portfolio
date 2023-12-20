export const aboutPageContent = [
  `My journey into web development began in 2020 while I was still in university.
  It was during this time that I realized my strong interest in the IT industry.
  I started studying on my own and learned the basics of HTML, CSS, and JavaScript.
  Afterward, I decided to take an online course to further develop my skills in
  frontend development, learn best practices, and begin creating my first web projects.`,
  `Shortly after, I found my first job at a Ukrainian company called "Harnosoft,"
  where I mainly worked on a large project based on React.js. The project's main purpose
  was to create a job board for drivers and driving schools. I learned a lot during my
  time at this company, but unfortunately, I had to leave due to the war and my
  relocation to Spain.`,
  `After relocating to Spain, I had a great opportunity to work for a Spanish company
  called "Vectoriam," located in Madrid. My primary focus was on e-commerce projects
  using Shopify, but I also worked on various websites using JavaScript and React.js.
  During this time, I managed to gain a basic understanding of backend development and
  web design, which greatly improved my overall understanding of web development and
  helped me create higher-quality products.`,
  `In addition to my professional work, I also took on independent projects as a freelancer.
  This allowed me to gain experience with new tools and technologies, create products for
  different fields, and improve my communication and client understanding skills.`
]

export const headerNav = {
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects'
}

export const aboutPagePoints = [
  {
    year: '2020',
    points: [
      'Completed FRONTEND DEVELOPMENT course'
    ]
  },
  {
    year: '2021',
    points: [
      'Started working at HARNOSOFT',
      'Graduated at university'
    ]
  },
  {
    year: '2022',
    points: [
      'Successfully implemented my first freelance project',
      'Started working at VECTORIAM',
      'Completed BACKEND DEVELOPMENT course'
    ]
  },
  {
    year: '2023',
    points: [
      `Completed WEB DESIGN BASICS course `
    ]
  }
]

export const techSkillsContent = [
  {
    title: 'JavaScript',
    class: 'js bg-yellow'
  },
  {
    title: 'React.js',
    class: 'react bg-cerulean-blue'
  },
  {
    title: 'HTML',
    class: 'html bg-orange'
  },
  {
    title: 'CSS',
    class: 'css bg-ultramarine-blue'
  },
  {
    title: 'SASS',
    class: 'sass bg-magenta'
  },
  {
    title: 'TypeScript',
    class: 'ts bg-sapphire-blue'
  },
  {
    title: 'Node.js',
    class: 'node bg-forest-green'
  },
  {
    title: 'Design',
    class: 'design bg-red'
  },
  {
    title: 'Testing (jest)',
    class: 'jest bg-burgundy'
  },
  {
    title: 'Shopify',
    class: 'shopify bg-dark-green'
  },
  {
    title: 'Redux',
    class: 'redux bg-dark-purple'
  },
  {
    title: 'Mongo DB',
    class: 'mongo bg-lime-green'
  },
  {
    title: 'Figma',
    class: 'figma bg-medium-blue'
  },
  {
    title: 'ChatGPT',
    class: 'gpt bg-moss-green'
  },
  {
    title: 'Git / Github',
    class: 'git bg-red-orange'
  }
]

export const softSkillsContent = [
  {
    title: 'Time management',
    class: 'time bg-moss-green'
  },
  {
    title: 'Teamwork',
    class: 'team bg-cerulean-blue'
  },
  {
    title: 'Emotional intelligence',
    class: 'emotion bg-dark-purple'
  },
  {
    title: 'Problem solving',
    class: 'problem bg-red'
  },
  {
    title: 'Critical thinking',
    class: 'critical bg-ultramarine-blue'
  }
];

export const projectsContent = [
  {
    id: '001',
    title: 'Job board website',
    description: `One of my first big commercial projects was a job board tailored for drivers and
      driving schools. In collaboration with another frontend developer, I played a key role in
      completing critical tasks, such as crafting a user interface according to provided design,
      implementing responsiveness across various devices, building complex forms with comprehensive
      validation, establishing efficient communication with the server.`,
    isPrivate: true,
    techStack: [
      {
        class: 'bg-cerulean-blue',
        title: 'React.js'
      },
      {
        class: 'bg-forest-green',
        title: 'Node.js'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-magenta',
        title: 'SASS'
      },
      {
        class: 'bg-medium-blue',
        title: 'Formik'
      },
      {
        class: 'bg-yellow',
        title: 'Recoil'
      },
      {
        class: 'bg-orange',
        title: 'Yup'
      }
    ],
    className: 'bg-seafoam-green'
  },
  {
    id: '006',
    title: 'New website for an industrial company',
    description: `
      A new website for a company that offers a range of industrial processing services,
      including laser engraving, powder coating, glass-blasting, grinding, and more.
      After consulting with the client, I developed a sleek and modern design based on
      their preferences and brand vision. I integrated language switching and a feedback
      form that sends emails to the client, along with smooth animations to create a more
      lively an engaging site.
    `,
    techStack: [
      {
        class: 'bg-cerulean-blue',
        title: 'React.js'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-magenta',
        title: 'SASS'
      },
      {
        class: 'bg-yellow',
        title: 'Recoil'
      },
      {
        class: 'bg-medium-blue',
        title: 'Formik'
      },
      {
        class: 'bg-orange',
        title: 'Yup'
      },
      {
        class: 'bg-red',
        title: 'Design'
      }
    ],
    className: 'bg-dark-purple'
  },
  {
    id: '008',
    title: 'New website for chocolate brand',
    description: `
      I have developed a new, fast, and optimized website on the Shopify platform,
      adhering to the design selected by the client. The website is fully responsive
      and incorporates best practices. It includes several key pages, including the
      home page, product collection page, search function, cart, and an announcement bar.
    `,
    techStack: [
      {
        class: 'bg-dark-green',
        title: 'Shopify'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-ultramarine-blue',
        title: 'CSS'
      }
    ],
    className: 'bg-raspberry'
  },
  {
    id: '010',
    title: 'Code Editor with user collaboration',
    description: `
      I have created code editor that allows users to collaborate in file editing, sharing and broadcasting.
      I've built a server and connected it to database. It has authorization and validation. Frontend part has
      user-friendly interface and simple design. I provided full responsiveness for desktop devices, mobile version
      is absent.
    `,
    techStack: [
      {
        class: 'bg-cerulean-blue',
        title: 'React.js'
      },
      {
        class: 'bg-forest-green',
        title: 'Node.js'
      },
      {
        class: 'bg-burgundy',
        title: 'WebSocket'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-ultramarine-blue',
        title: 'CSS'
      },
      {
        class: 'bg-yellow',
        title: 'Recoil'
      },
      {
        class: 'bg-red',
        title: 'Design'
      }
    ],
    className: 'bg-deep-blue'
  },
  {
    id: '004',
    title: 'New website for a health and fitness company',
    description: `I've created new optimized website based on React.js for a company specializing
    in delivering a wide range of health and fitness services. This websites serves as a hub for the clients,
    offering them the convenience of authorization, a comprehensive understanding of the company
    and access to the diverse array of their services.`,
    techStack: [
      {
        class: 'bg-cerulean-blue',
        title: 'React.js'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-ultramarine-blue',
        title: 'CSS'
      },
      {
        class: 'bg-medium-blue',
        title: 'Formik'
      },
      {
        class: 'bg-orange',
        title: 'Yup'
      }
    ],
    className: 'bg-lime-green'
  },
  {
    id: '005',
    title: 'Redesign for women\'s clothing brand',
    description: `
      Website redesign for a Spanish women's clothing brand. I created and implemented
      my own design, drawing inspiration from the old design and the client's preferences.
      The renovated platform now boasts a modern and minimalist look, with a more user-friendly
      interface and significantly enhanced optimization.
    `,
    techStack: [
      {
        class: 'bg-dark-green',
        title: 'Shopify'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-ultramarine-blue',
        title: 'CSS'
      },
      {
        class: 'bg-red',
        title: 'Design'
      }
    ],
    className: 'bg-raspberry'
  },
  {
    id: '007',
    title: 'New website for an eyewear brand',
    description: `
      New website for an eyewear brand. I have implemented design chosen by client using
      best practices, providing full responsiveness, for all devices. Additionally, I've
      provided customization settings for the client to modify text and images, toggle
      component visibility, adjust content alignment and more.
    `,
    techStack: [
      {
        class: 'bg-dark-green',
        title: 'Shopify'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-ultramarine-blue',
        title: 'CSS'
      }
    ],
    className: 'bg-coral'
  },
  {
    id: '003',
    title: 'Website renovation for a jewelry brand',
    description: `
      Full website renovation for a Spanish jewelry brand. I have created and applied
      my own design based on client's preferences, developed all the key pages
      such as the homepage, collection, product, and about us, ensuring full responsiveness.
      Additionally, I have incorporated a dropdown menu, filters, and a search function.
      Also I've provided customization settings for the client to modify text and images,
      toggle component visibility, adjust content alignment and more.
    `,
    techStack: [
      {
        class: 'bg-dark-green',
        title: 'Shopify'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-royal-blue',
        title: 'CSS'
      },
      {
        class: 'bg-red',
        title: 'Design'
      }
    ],
    className: 'bg-cerulean-blue'
  },
  {
    id: '002',
    title: 'Website redesign for a clothing brand',
    description: `
      Full website renovation for a popular Spanish men's clothing brand. I was
      responsible for the incorporating a new minimalistic design. I've developed
      all the important pages such as home, collection, product, about us,
      provided full responsiveness, implemented filters, search etc.
    `,
    techStack: [
      {
        class: 'bg-dark-green',
        title: 'Shopify'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-ultramarine-blue',
        title: 'CSS'
      }
    ],
    className: 'bg-red'
  },
  {
    id: '009',
    title: 'Website update for a jewelry brand',
    description: `
      I have updated the website for a jewelry brand, incorporating filters,
      implementing specific design changes as requested by the client, and
      resolving various bugs.
    `,
    techStack: [
      {
        class: 'bg-dark-green',
        title: 'Shopify'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-ultramarine-blue',
        title: 'CSS'
      },
      {
        class: 'bg-red',
        title: 'Design'
      }
    ],
    className: 'bg-rose-pink'
  },
  {
    id: '011',
    title: 'Personal website for a psychologist',
    description: `
      New personal website for a psychologist. I have implemented design chosen by client using
      best practices, providing full responsiveness for all devices and cross-browser compitability.
      Additionally, I've provided customization settings for the client to modify text
      and images, toggle component visibility, adjust content alignment and more.
    `,
    techStack: [
      {
        class: 'bg-dark-green',
        title: 'Shopify'
      },
      {
        class: 'bg-orange',
        title: 'HTML'
      },
      {
        class: 'bg-ultramarine-blue',
        title: 'CSS'
      }
    ],
    className: 'bg-lime-green'
  }
]
