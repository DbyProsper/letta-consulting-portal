export type PortalKey = 'career' | 'wellness' | 'professional'

export const portalContent = {
  career: {
    eyebrow: 'CAREER DISCOVERY',
    title: 'Make your next move with confidence.',
    intro: 'Explore your interests, understand your strengths and discover study and career pathways that fit the future you want.',
    features: [
      { title: 'Interest & strengths discovery', text: 'Reflect on what motivates you and where your strengths can take you.' },
      { title: 'Career and study pathways', text: 'Explore occupations, subject choices, qualifications and routes into work.' },
      { title: 'Assessments & guidance', text: 'Access formal and digital assessment pathways with professional guidance where needed.' },
      { title: 'Opportunities & bursaries', text: 'Find career events, scholarships, bursaries and opportunities to take your next step.' },
      { title: 'CV & cover-letter builder', text: 'Turn your experience, skills and goals into clear application documents.' },
      { title: 'Future planning', text: 'Set goals, save ideas and create a practical plan for your next chapter.' },
    ],
    action: 'Start discovering',
  },
  wellness: {
    eyebrow: 'PSYCHOLOGICAL WELLNESS',
    title: 'Your wellbeing belongs in the plan.',
    intro: 'Find a supportive space to learn about emotional wellbeing, build resilience and connect with qualified practitioners.',
    features: [
      { title: 'Wellness resources', text: 'Explore practical, accessible guidance for everyday mental and emotional wellbeing.' },
      { title: 'Psychological support', text: 'Learn about therapy and counselling options delivered by a professional team.' },
      { title: 'Build resilience', text: 'Discover tools and learning activities for stress management and healthy coping.' },
      { title: 'Youth-friendly access', text: 'Explore information and support pathways in a welcoming, easy-to-understand space.' },
      { title: 'Parent & guardian guidance', text: 'Find information to help families support young people through important transitions.' },
      { title: 'Professional referrals', text: 'Understand how to enquire about suitable support and professional services.' },
    ],
    action: 'Explore wellness',
  },
  professional: {
    eyebrow: 'PROFESSIONAL SUPPORT',
    title: 'Support people and organisations can rely on.',
    intro: 'Discover Letta Consulting’s professional services for individuals, schools and organisations, supported by a collaborative practice.',
    features: [
      { title: 'Psychological & medico-legal', text: 'Explore psychological services and medico-legal support offered by the practice.' },
      { title: 'Corporate wellness & EAP', text: 'Support employee wellbeing through workplace-focused services and assistance programmes.' },
      { title: 'School partnerships', text: 'Connect schools with career guidance, learner support and wellbeing initiatives.' },
      { title: 'Soft-skills training', text: 'Build communication, workplace readiness and personal development skills.' },
      { title: 'Psychometric solutions', text: 'Learn about assessment services and the professional support around them.' },
      { title: 'Team practice', text: 'Connect with a multidisciplinary team and enquire about the right service pathway.' },
    ],
    action: 'View professional services',
  },
} satisfies Record<PortalKey, { eyebrow: string; title: string; intro: string; features: {title:string;text:string}[]; action:string }>
