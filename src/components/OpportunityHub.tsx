import { useMemo, useState } from 'react'
import { ArrowRight, Award, BriefcaseBusiness, CalendarDays, CheckCircle2, GraduationCap, Search, Target } from 'lucide-react'

const categories = [
  { id: 'bursaries', title: 'Bursaries & scholarships', eyebrow: 'FUND YOUR STUDIES', icon: Award, image: 'photo-1523050854058-8df90110c9f1', intro: 'Explore funding routes that may help with tuition, accommodation, books and other study costs.', checks: ['Check citizenship, residency and academic requirements', 'Confirm which study fields and institutions are supported', 'Prepare results, proof of registration or acceptance, and a motivation', 'Record the closing date and application method'] },
  { id: 'learnerships', title: 'Learnerships & apprenticeships', eyebrow: 'LEARN WHILE YOU WORK', icon: GraduationCap, image: 'photo-1523240795612-9a054b0db644', intro: 'Understand structured learning opportunities that combine practical workplace experience with formal training.', checks: ['Check the qualification level and entry requirements', 'Confirm location, duration, stipend and working arrangements', 'Prepare a CV and certified documents if requested', 'Understand the training provider and workplace expectations'] },
  { id: 'internships', title: 'Internships & work experience', eyebrow: 'BUILD EXPERIENCE', icon: BriefcaseBusiness, image: 'photo-1521737711867-e3b97375f902', intro: 'Find ways to build practical experience, develop workplace skills and learn more about an industry.', checks: ['Compare role responsibilities with your interests and skills', 'Check whether applicants must be students or recent graduates', 'Tailor your CV and short motivation to the role', 'Prepare examples from projects, volunteering or part-time work'] },
  { id: 'events', title: 'Career events & open days', eyebrow: 'MEET YOUR NEXT POSSIBILITY', icon: CalendarDays, image: 'photo-1517486808906-6ca8b3f04846', intro: 'Use open days, career expos and information sessions to ask questions and compare your options.', checks: ['Check event dates, venue and registration requirements', 'Prepare questions about courses, careers and admission criteria', 'Bring a way to record contact details and useful links', 'Follow up on information and application dates after the event'] },
]
const levels = ['All opportunities', 'School learners', 'Undergraduate students', 'Graduates']

export default function OpportunityHub({ onBook }: { onBook: (service: string) => void }) {
  const [category, setCategory] = useState('bursaries')
  const [level, setLevel] = useState('All opportunities')
  const [query, setQuery] = useState('')
  const [checked, setChecked] = useState<string[]>([])
  const active = categories.find(item => item.id === category) ?? categories[0]
  const filtered = useMemo(() => categories.filter(item => `${item.title} ${item.intro}`.toLowerCase().includes(query.toLowerCase())), [query])
  const toggle = (item: string) => setChecked(current => current.includes(item) ? current.filter(value => value !== item) : [...current, item])
  const Icon = active.icon
  return <main className="opportunity-hub">
    <div className="opportunity-hub-top"><span className="opportunity-kicker"><Target size={14}/> YOUR NEXT CHAPTER STARTS HERE</span><span className="opportunity-context">LETTA CONSULTING / OPPORTUNITY HUB</span></div>
    <section className="opportunity-hero">
      <div className="opportunity-hero-copy"><span className="opportunity-kicker">FIND IT. PREPARE. TAKE THE NEXT STEP.</span><h1>Good things<br/>start with <em>one opportunity.</em></h1><p>Explore funding, workplace experience and career events. Start with the opportunity that fits the stage you are at.</p><button className="primary-button" onClick={()=>document.getElementById('opportunity-explorer')?.scrollIntoView({behavior:'smooth'})}>Explore opportunities <ArrowRight size={16}/></button></div>
      <div className="opportunity-hero-image"><span>YOUR FUTURE<br/><b>IS WORTH INVESTING IN</b></span></div>
    </section>
    <section className="opportunity-explorer" id="opportunity-explorer">
      <div className="opportunity-heading"><span className="opportunity-kicker">EXPLORE THE POSSIBILITIES</span><h2>What are you looking for?</h2><p>Choose a category to see what to look out for and how to get ready.</p></div>
      <label className="opportunity-search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search opportunity types…"/></label>
      <div className="opportunity-category-grid">{filtered.map(item=>{const ItemIcon=item.icon;return <button key={item.id} className={category===item.id?'opportunity-category active':'opportunity-category'} onClick={()=>{setCategory(item.id);setChecked([])}}><span><ItemIcon size={20}/></span><small>{item.eyebrow}</small><b>{item.title}</b><i><ArrowRight size={16}/></i></button>})}</div>
      {filtered.length===0&&<p className="opportunity-empty">No matching category. Try searching for funding, work or events.</p>}
      {filtered.some(item=>item.id===category)&&<article className="opportunity-detail">
        <div className="opportunity-detail-image" style={{backgroundImage:`linear-gradient(0deg,#143d3e66,transparent),url(https://images.unsplash.com/${active.image}?auto=format&fit=crop&w=900&q=85)`}}><span><Icon size={28}/></span></div>
        <div className="opportunity-detail-copy"><span className="opportunity-kicker">{active.eyebrow}</span><h3>{active.title}</h3><p>{active.intro}</p><div className="opportunity-level"><label htmlFor="opportunity-level">Who is this for?</label><select id="opportunity-level" value={level} onChange={e=>setLevel(e.target.value)}>{levels.map(item=><option key={item}>{item}</option>)}</select></div><h4>Your preparation checklist</h4><div className="opportunity-checklist">{active.checks.map(item=><label key={item} className={checked.includes(item)?'done':''}><input type="checkbox" checked={checked.includes(item)} onChange={()=>toggle(item)}/><span><CheckCircle2 size={16}/></span>{item}</label>)}</div><small className="opportunity-progress">{checked.length} of {active.checks.length} preparation steps completed · this checklist is not saved.</small></div>
      </article>}
    </section>
    <section className="opportunity-guidance"><div><span className="opportunity-kicker">A SMART APPLICATION STARTS WITH GOOD INFORMATION</span><h2>Pause before you apply.</h2><p>Always verify the opportunity on the official funder, employer, institution or event organiser's website. Check the closing date, eligibility and required documents before sharing personal information.</p></div><div className="opportunity-guidance-mark"><Award size={42}/><b>BE PREPARED.<br/>STAY CURIOUS.</b></div></section>
    <section className="opportunity-bottom"><div><span className="opportunity-kicker">NEED HELP GETTING READY?</span><h2>Let's prepare your next step.</h2><p>Explore the CV builder in Career Discovery or make an enquiry about career guidance.</p></div><button className="primary-button" onClick={()=>onBook('Career guidance and opportunity preparation')}>Enquire about guidance <ArrowRight size={16}/></button></section>
    <p className="opportunity-disclaimer">This is a preparation and guidance hub, not a live opportunity listing service. No funding, placement or application is guaranteed. Availability and deadlines must be confirmed with the official provider.</p>
  </main>
}
