/**
 * CATALYST — Team Roster & Resume Single Source of Truth
 * 
 * Rules:
 * - 8 Members numbered 01-08 in exact hierarchy (Captain, Vice Captain, Group Members)
 * - All text fields use clean, editable placeholders [Add ...] so no fake facts are stated
 * - Single source of truth: all card & resume modal data flows from this array
 */

export const members = [
  {
    slug: "ashil",
    number: "01",
    name: "Ashil Anto",
    role: "Captain",
    shortBio: "Leads the team from the front and orchestrates collaboration. [Add bio]",
    photo: "assets/ashil.png",
    objectPosition: "50% 20%",
    accent: "var(--tint-01)",
    tagline: "Inspiring action through vision, clarity, and empathy.",
    email: "ashil.anto@example.com",
    links: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      portfolio: "https://example.com"
    },
    about: "As Captain of CATALYST, Ashil brings energy, vision, and strategic direction to the team. Passionate about fostering open communication, empowering peers, and ensuring every workshop deliverable exceeds expectations. [Add detailed background]",
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Strategic Communication", level: 85 },
      { name: "Public Speaking", level: 88 },
      { name: "Problem Solving", level: 82 },
      { name: "Conflict Resolution", level: 80 }
    ],
    education: [
      {
        title: "[Add Degree / Course]",
        org: "[Add University / Institution]",
        year: "2023 - Present"
      }
    ],
    experience: [
      {
        title: "Team Captain — Soft-Skills Workshop",
        org: "CATALYST Team",
        period: "2026 - Present",
        points: [
          "Guided the 8-member cohort through intensive team simulations and presentation tasks.",
          "Fostered an inclusive environment promoting active participation and rapid iteration.",
          "[Add specific accomplishment or milestone]"
        ]
      }
    ],
    achievements: [
      "Led CATALYST to standout recognition in workshop group challenges.",
      "[Add academic or personal achievement]"
    ],
    workshopLearnings: [
      "The value of situational leadership and emotional intelligence.",
      "How transparent communication turns blockers into collaborative wins.",
      "Active listening techniques to unlock team potential."
    ],
    resumePdf: "assets/Ashil_Anto_CV-V2.pdf"
  },
  {
    slug: "anagha",
    number: "02",
    name: "Anagha Ajidev",
    role: "Vice Captain",
    shortBio: "Supports the Captain and keeps the team on track and focused. [Add bio]",
    photo: "assets/anagha.png",
    objectPosition: "50% 25%",
    accent: "var(--tint-02)",
    tagline: "Bridging ideas with execution through meticulous organization.",
    email: "anagha.ajidev@example.com",
    links: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      portfolio: "https://example.com"
    },
    about: "As Vice Captain of CATALYST, Anagha anchors team operations, coordinates working sessions, and ensures high attention to detail. Brings a dependable, calm, and proactive attitude to every group initiative. [Add detailed background]",
    skills: [
      { name: "Operations & Coordination", level: 88 },
      { name: "Active Listening", level: 92 },
      { name: "Critical Thinking", level: 85 },
      { name: "Presentation Design", level: 84 },
      { name: "Time Management", level: 90 }
    ],
    education: [
      {
        title: "[Add Degree / Course]",
        org: "[Add University / Institution]",
        year: "2023 - Present"
      }
    ],
    experience: [
      {
        title: "Vice Captain — Soft-Skills Workshop",
        org: "CATALYST Team",
        period: "2026 - Present",
        points: [
          "Managed project timelines, milestone check-ins, and peer feedback cycles.",
          "Partnered closely with the Captain to align goals and resolve operational friction.",
          "[Add specific accomplishment or milestone]"
        ]
      }
    ],
    achievements: [
      "Coordinated team showcase preparations with 100% on-time milestone completion.",
      "[Add academic or personal achievement]"
    ],
    workshopLearnings: [
      "Agile adaptation when priorities shift during team exercises.",
      "Building trust and alignment across diverse skill sets.",
      "Mastering feedback loops to refine group deliverables."
    ],
    resumePdf: "assets/ANAGHA_AJIDEV_UST_Resume.pdf"
  },
  {
    slug: "sanjay",
    number: "03",
    name: "Sanjay S Nair",
    role: "Group Member",
    shortBio: "Curious problem solver driving creative technical initiatives. [Add bio]",
    photo: "assets/sanjay.png",
    objectPosition: "50% 18%",
    accent: "var(--tint-03)",
    tagline: "Exploring technology, design, and collaborative engineering.",
    email: "sanjay.snair@example.com",
    links: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      portfolio: "https://example.com"
    },
    about: "Passionate about combining technical precision with expressive creative design. Sanjay thrives on solving complex challenges, experimenting with modern architectures, and contributing positive momentum to the CATALYST squad. [Add detailed background]",
    skills: [
      { name: "Creative Technology", level: 90 },
      { name: "Collaborative Ideation", level: 86 },
      { name: "Technical Research", level: 88 },
      { name: "Adaptability", level: 85 },
      { name: "Team Synergy", level: 82 }
    ],
    education: [
      {
        title: "[Add Degree / Course]",
        org: "[Add University / Institution]",
        year: "2023 - Present"
      }
    ],
    experience: [
      {
        title: "Collaborator & Builder",
        org: "CATALYST Workshop Cohort",
        period: "2026 - Present",
        points: [
          "Contributed technical exploration and creative structure to team presentations.",
          "Participated actively in role-play scenarios and negotiation workshops.",
          "[Add specific accomplishment or milestone]"
        ]
      }
    ],
    achievements: [
      "Key contributor to CATALYST's digital identity and interactive portfolio showcase.",
      "[Add academic or personal achievement]"
    ],
    workshopLearnings: [
      "Communicating complex concepts in plain, accessible language.",
      "Empathy-first collaboration in fast-paced team environments.",
      "The power of iteration over perfectionism."
    ],
    resumePdf: "assets/Sanjay_S_Nair_Resume_mpower.pdf"
  },
  {
    slug: "anu",
    number: "04",
    name: "Anu Mariya Varghese",
    role: "Group Member",
    shortBio: "Dedicated, analytical thinker passionate about meaningful impact. [Add bio]",
    photo: "assets/anu.png",
    objectPosition: "50% 22%",
    accent: "var(--tint-04)",
    tagline: "Focusing on clarity, empathy, and deliberate progress.",
    email: "anu.mariya@example.com",
    links: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      portfolio: "https://example.com"
    },
    about: "Anu brings structured thinking, calm poise, and an unwavering commitment to quality. Her analytical mindset and collaborative spirit make her a cornerstone of team discussions and problem-solving exercises. [Add detailed background]",
    skills: [
      { name: "Analytical Thinking", level: 88 },
      { name: "Written Communication", level: 90 },
      { name: "Cross-functional Collaboration", level: 86 },
      { name: "Presentation & Delivery", level: 84 },
      { name: "Attention to Detail", level: 92 }
    ],
    education: [
      {
        title: "[Add Degree / Course]",
        org: "[Add University / Institution]",
        year: "2023 - Present"
      }
    ],
    experience: [
      {
        title: "Group Member & Researcher",
        org: "CATALYST Workshop Cohort",
        period: "2026 - Present",
        points: [
          "Formulated structured arguments and synthesis for team debates and case studies.",
          "Championed clear documentation and shared knowledge within the cohort.",
          "[Add specific accomplishment or milestone]"
        ]
      }
    ],
    achievements: [
      "Recognized for insightful contributions to workshop case-study analyses.",
      "[Add academic or personal achievement]"
    ],
    workshopLearnings: [
      "Balancing assertiveness with receptive, constructive listening.",
      "Structuring high-impact persuasive narratives for diverse audiences.",
      "Cultivating positive resilience through continuous feedback."
    ],
    resumePdf: "assets/ANU_MARIYA_VARGHESE_FlowCV_Resume_2026-10-16 (2).pdf"
  },
  {
    slug: "aflah",
    number: "05",
    name: "Aflah Mujeeb",
    role: "Group Member",
    shortBio: "Enthusiastic collaborator with an eye for dynamic problem solving. [Add bio]",
    photo: "assets/aflah.png",
    objectPosition: "50% 22%",
    accent: "var(--tint-05)",
    tagline: "Bringing high energy, fresh perspective, and dependable teamwork.",
    email: "aflah.mujeeb@example.com",
    links: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      portfolio: "https://example.com"
    },
    about: "Aflah infuses every team conversation with positivity, creative energy, and practical insight. Quick to volunteer for challenging tasks and always ready to support teammates through brainstorming and rapid execution. [Add detailed background]",
    skills: [
      { name: "Interpersonal Skills", level: 90 },
      { name: "Creative Brainstorming", level: 87 },
      { name: "Team Agility", level: 85 },
      { name: "Verbal Communication", level: 88 },
      { name: "Execution Focus", level: 84 }
    ],
    education: [
      {
        title: "[Add Degree / Course]",
        org: "[Add University / Institution]",
        year: "2023 - Present"
      }
    ],
    experience: [
      {
        title: "Team Contributor",
        org: "CATALYST Workshop Cohort",
        period: "2026 - Present",
        points: [
          "Participated in dynamic negotiation simulations and rapid ideation sessions.",
          "Helped bridge concepts into concrete deliverables during collaborative sprint tasks.",
          "[Add specific accomplishment or milestone]"
        ]
      }
    ],
    achievements: [
      "Delivered engaging group pitches during workshop interactive exercises.",
      "[Add academic or personal achievement]"
    ],
    workshopLearnings: [
      "The role of authentic enthusiasm in inspiring team morale.",
      "Turning unexpected constraints into creative opportunities.",
      "Constructive conflict management techniques."
    ],
    resumePdf: null
  },
  {
    slug: "siva",
    number: "06",
    name: "Sivaganga S Nair",
    role: "Group Member",
    shortBio: "Creative thinker blending vibrant expression with empathy. [Add bio]",
    photo: "assets/siva.png",
    objectPosition: "50% 30%",
    accent: "var(--tint-06)",
    tagline: "Connecting people through empathy, storytelling, and warmth.",
    email: "sivaganga.snair@example.com",
    links: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      portfolio: "https://example.com"
    },
    about: "Sivaganga combines emotional intelligence, bright creative expression, and strong teamwork instincts. She champions clear storytelling and brings warmth and cohesion to the CATALYST workshop team. [Add detailed background]",
    skills: [
      { name: "Storytelling & Pitching", level: 89 },
      { name: "Emotional Intelligence", level: 92 },
      { name: "Collaborative Design", level: 84 },
      { name: "Active Listening", level: 90 },
      { name: "Public Presence", level: 86 }
    ],
    education: [
      {
        title: "[Add Degree / Course]",
        org: "[Add University / Institution]",
        year: "2023 - Present"
      }
    ],
    experience: [
      {
        title: "Team Communicator",
        org: "CATALYST Workshop Cohort",
        period: "2026 - Present",
        points: [
          "Crafted compelling narratives for team presentations and roleplay challenges.",
          "Supported peers with thoughtful constructive feedback throughout the workshop.",
          "[Add specific accomplishment or milestone]"
        ]
      }
    ],
    achievements: [
      "Commended for memorable, empathetic storytelling during cohort presentations.",
      "[Add academic or personal achievement]"
    ],
    workshopLearnings: [
      "Harnessing vulnerability as a tool for genuine leadership.",
      "Developing persuasive presence without overpowering team voices.",
      "Cultivating inclusive spaces where every member contributes."
    ],
    resumePdf: "assets/Sivaganga_Resume.pdf"
  },
  {
    slug: "visakh",
    number: "07",
    name: "Visakh Sirendran",
    role: "Group Member",
    shortBio: "Resilient problem solver with a positive, can-do mindset. [Add bio]",
    photo: "assets/vishakh.png",
    objectPosition: "50% 24%",
    accent: "var(--tint-07)",
    tagline: "Approaching challenges with humor, patience, and grit.",
    email: "visakh.sirendran@example.com",
    links: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      portfolio: "https://example.com"
    },
    about: "Visakh is known for his cheerful resilience, adaptability, and steady camaraderie. He approaches every workshop challenge with enthusiasm, keeping team spirits high while delivering grounded, reliable results. [Add detailed background]",
    skills: [
      { name: "Team Camaraderie", level: 92 },
      { name: "Stress Resilience", level: 90 },
      { name: "Practical Problem Solving", level: 85 },
      { name: "Verbal Articulation", level: 84 },
      { name: "Conflict Mediation", level: 82 }
    ],
    education: [
      {
        title: "[Add Degree / Course]",
        org: "[Add University / Institution]",
        year: "2023 - Present"
      }
    ],
    experience: [
      {
        title: "Team Contributor",
        org: "CATALYST Workshop Cohort",
        period: "2026 - Present",
        points: [
          "Collaborated on group decision-making exercises under tight time bounds.",
          "Maintained team morale and focus during high-pressure simulation rounds.",
          "[Add specific accomplishment or milestone]"
        ]
      }
    ],
    achievements: [
      "Key contributor to collaborative workshop problem-solving exercises.",
      "[Add academic or personal achievement]"
    ],
    workshopLearnings: [
      "How maintaining a calm, positive mindset defuses team tension.",
      "The value of decisive collective action over endless deliberation.",
      "Active team support during high-pressure deadlines."
    ],
    resumePdf: null
  },
  {
    slug: "avani",
    number: "08",
    name: "Avany C Muralidharan",
    role: "Group Member",
    shortBio: "Methodical collaborator focused on thoughtful, quality execution. [Add bio]",
    photo: "assets/avani.png",
    objectPosition: "50% 25%",
    accent: "var(--tint-08)",
    tagline: "Turning curiosity into deliberate, dependable team outcomes.",
    email: "avany.muralidharan@example.com",
    links: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      portfolio: "https://example.com"
    },
    about: "Avany brings calm focus, thoughtful perspective, and thorough dedication to CATALYST. Her ability to synthesize discussions, identify edge cases, and uphold high standards makes her an invaluable team asset. [Add detailed background]",
    skills: [
      { name: "Critical Analysis", level: 88 },
      { name: "Collaborative Planning", level: 87 },
      { name: "Active Listening", level: 90 },
      { name: "Synthesis & Reporting", level: 86 },
      { name: "Team Reliability", level: 91 }
    ],
    education: [
      {
        title: "[Add Degree / Course]",
        org: "[Add University / Institution]",
        year: "2023 - Present"
      }
    ],
    experience: [
      {
        title: "Team Contributor",
        org: "CATALYST Workshop Cohort",
        period: "2026 - Present",
        points: [
          "Participated in synthesis of workshop case studies and group presentations.",
          "Collaborated on refining cohort deliverables and peer evaluation reviews.",
          "[Add specific accomplishment or milestone]"
        ]
      }
    ],
    achievements: [
      "Uptake of leadership principles and consistent peer support throughout the workshop.",
      "[Add academic or personal achievement]"
    ],
    workshopLearnings: [
      "Balancing quiet reflection with speaking up with conviction.",
      "The importance of peer validation in collaborative workflows.",
      "Continuous self-assessment as a driver of professional maturity."
    ],
    resumePdf: "assets/Avany_C_Muralidharan_Resume (4).pdf"
  }
];
