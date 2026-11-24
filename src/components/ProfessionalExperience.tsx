import { useState } from 'react'
import { ArrowRight, BriefcaseBusiness, Building2, GraduationCap, HeartHandshake, ChevronDown, CheckCircle2 } from 'lucide-react'

const audiences = [
  { id: 'individuals', label: 'Individuals', icon: HeartHandshake, intro: 'Guidance and professional support for personal, educational and career-related needs.', services: [
    { title: 'Psychological support', text: 'Understand the available counselling and psychological support pathways, and how to enquire about a suitable service.', points: ['A confidential first conversation about the service you need', 'Information about available professional support', 'Guidance on appropriate next steps'] },
    { title: 'Career guidance', text: 'Explore interests, strengths, study options and career directions with structured guidance.', points: ['Career exploration and planning', 'Study and work pathway information', 'Practical next-step planning'] },
    { title: 'Medico-legal services', text: 'Make an enquiry about medico-legal services and the process for determining whether the practice can assist.', points: ['Initial service enquiry', 'Information about the required process', 'Referral or next-step guidance where appropriate'] },
  ]},
  { id: 'schools', label: 'Schools', icon: GraduationCap, intro: 'Create supportive environments where learners can explore their futures and access guidance.', services: [
    { title: 'Learner career guidance', text: 'Bring structured career exploration and study-pathway information into the school environment.', points: ['Career awareness activities', 'Subject and study pathway guidance', 'Transition planning for learners'] },
    { title: 'Learner wellbeing support', text: 'Explore age-appropriate wellbeing education and professional support pathways for learners.', points: ['Wellbeing awareness and psychoeducation', 'Guidance for learner support pathways', 'Parent and guardian engagement options'] },
    { title: 'School partnerships', text: 'Discuss a tailored partnership based on your school community and support priorities.', points: ['An initial needs conversation', 'Possible programme formats', 'A clear outline of next steps'] },
  ]},
  { id: 'workplaces', label: 'Workplaces', icon: Building2, intro: 'Support healthier workplace cultures through people-centred wellbeing and development services.', services: [
    { title: 'Corporate wellness & EAP', text: 'Enquire about workplace wellbeing support and employee assistance programme options.', points: ['Workplace wellbeing needs discussion', 'Information about possible support pathways', 'Options for an organisational enquiry'] },
    { title: 'Soft-skills development', text: 'Explore learning opportunities that strengthen communication, collaboration and workplace readiness.', points: ['Communication and teamwork themes', 'Personal and professional development', 'Training needs discussion'] },
    { title: 'Psychometric services', text: 'Discuss assessment-related services and the professional guidance required around their use.', points: ['Initial requirements discussion', 'Information about suitable service options', 'Professional guidance on next steps'] },
  ]},
]

export default function ProfessionalExperience({ onBook }: { onBook: (service: string) => void }) {
  const [audience, setAudience] = useState('individuals')
  const [expanded, setExpanded] = useState<string | null>('Psychological support')
  const selected = audiences.find(item => item.id === audience) ?? audiences[0]
  return <div className="professional-experience">
    <section className="professional-welcome">
      <div className="professional-welcome-copy">
        <span className="professional-kicker"><BriefcaseBusiness size={14}/> PEOPLE-FIRST PROFESSIONAL SERVICES</span>
        <h2>Support that<br/><em>meets you</em><br/>where you are.</h2>
        <p>From individual guidance to school and workplace partnerships, explore professional services designed around people and their needs.</p>
        <button className="primary-button" onClick={() => onBook('Professional services enquiry')}>Talk to our team <ArrowRight size={16}/></button>
      </div>
      <div className="professional-welcome-art"><div className="professional-photo"/><span>LISTEN FIRST.<br/><b>FIND THE RIGHT PATH.</b></span><i>✳</i></div>
    </section>

    <section className="professional-pathways">
      <div className="professional-heading"><span className="professional-kicker">EXPLORE OUR SERVICES</span><h2>Who are you here for?</h2><p>Choose the area that best describes what you need. You can switch at any time.</p></div>
      <div className="professional-audience-tabs" role="tablist" aria-label="Choose who the services are for">
        {audiences.map(item => { const Icon = item.icon; return <button key={item.id} role="tab" aria-selected={audience===item.id} className={audience===item.id?'active':''} onClick={() => {setAudience(item.id);setExpanded(null)}}><Icon size={20}/><span>{item.label}</span><ArrowRight size={15}/></button> })}
      </div>
      <div className="professional-service-intro" aria-live="polite">{selected.intro}</div>
      <div className="professional-service-list">
        {selected.services.map((service,index) => {
          const open = expanded===service.title
          return <article className={open?'professional-service-card expanded':'professional-service-card'} key={service.title}>
            <button className="professional-service-toggle" aria-expanded={open} onClick={() => setExpanded(open?null:service.title)}>
              <span className="professional-service-number">0{index+1}</span><span className="professional-service-title"><b>{service.title}</b><small>{service.text}</small></span><span className="professional-chevron"><ChevronDown size={18}/></span>
            </button>
            {open && <div className="professional-service-details"><ul>{service.points.map(point=><li key={point}><CheckCircle2 size={15}/>{point}</li>)}</ul><button onClick={() => onBook(service.title)}>Enquire about this service <ArrowRight size={15}/></button></div>}
          </article>
        })}
      </div>
    </section>

    <section className="professional-partner-callout">
      <div className="professional-partner-art"><div><Building2 size={43}/></div><span>LET'S WORK TOGETHER</span></div>
      <div><span className="professional-kicker">A CONVERSATION IS A GOOD START</span><h2>Have a specific need or idea?</h2><p>Tell us about the person, school or organisation you are looking to support. The team can help you understand the appropriate enquiry route.</p><button className="primary-button" onClick={() => onBook('Partnership or tailored service enquiry')}>Start a conversation <ArrowRight size={16}/></button></div>
    </section>
    <p className="professional-note">Service availability, suitability and any assessment or clinical process are confirmed by the practice after an enquiry. This website is an information and enquiry prototype, not a clinical or assessment service.</p>
  </div>
}
