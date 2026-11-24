import { useMemo, useState } from 'react'
import { ArrowRight, BookOpen, BriefcaseBusiness, CheckCircle2, Clipboard, Compass, GraduationCap, Lightbulb, RotateCcw, Search, Sparkles, Target } from 'lucide-react'

type Tab = 'discover' | 'careers' | 'study' | 'opportunities' | 'cv'

const interests = [
  { id: 'technology', label: 'Technology & digital worlds', detail: 'Computers, apps, data and new ideas' },
  { id: 'people', label: 'People & helping others', detail: 'Teaching, listening, care and community' },
  { id: 'creative', label: 'Creative expression', detail: 'Design, music, writing and storytelling' },
  { id: 'business', label: 'Business & leadership', detail: 'Entrepreneurship, planning and organising' },
  { id: 'science', label: 'Science & discovery', detail: 'Research, nature, health and how things work' },
  { id: 'practical', label: 'Building & practical work', detail: 'Making, fixing, engineering and hands-on tasks' },
]
const strengths = [
  { id: 'analytical', label: 'Problem-solving', detail: 'I enjoy figuring things out' },
  { id: 'communication', label: 'Communication', detail: 'I explain ideas and connect with people' },
  { id: 'creative', label: 'Creativity', detail: 'I imagine new ways to do things' },
  { id: 'empathy', label: 'Empathy', detail: 'I notice how other people feel' },
  { id: 'organisation', label: 'Organisation', detail: 'I plan, coordinate and follow through' },
  { id: 'practical', label: 'Hands-on ability', detail: 'I learn by making and doing' },
]
const subjects = ['Mathematics', 'Mathematical Literacy', 'Physical Sciences', 'Life Sciences', 'Business Studies', 'Accounting', 'Geography', 'History', 'Languages', 'Computer Applications Technology', 'Visual Arts', 'Agricultural Sciences']
const careers = [
  { title: 'Software Developer', area: 'Technology', interests: ['technology','analytical','creative'], strengths: ['analytical','creative'], subjects: ['Mathematics','Computer Applications Technology','Physical Sciences'], description: 'Design and build websites, applications and digital tools.', route: 'Computer Science, Software Engineering or Information Systems' },
  { title: 'Data Analyst', area: 'Technology & research', interests: ['technology','science','business'], strengths: ['analytical','organisation'], subjects: ['Mathematics','Accounting','Geography','Computer Applications Technology'], description: 'Use information and data to answer questions and guide decisions.', route: 'Statistics, Data Science, Mathematics or Information Systems' },
  { title: 'Psychologist', area: 'People & wellbeing', interests: ['people','science'], strengths: ['empathy','communication','analytical'], subjects: ['Life Sciences','Mathematics','Languages'], description: 'Study behaviour and support people’s psychological wellbeing.', route: 'Psychology undergraduate study followed by the required postgraduate and professional pathway' },
  { title: 'Teacher / Educator', area: 'People & education', interests: ['people','creative'], strengths: ['communication','empathy','organisation'], subjects: ['Languages','Mathematics','History','Life Sciences'], description: 'Help learners develop knowledge, confidence and practical skills.', route: 'Bachelor of Education or an appropriate degree followed by a teaching qualification' },
  { title: 'Graphic / Digital Designer', area: 'Creative industries', interests: ['creative','technology'], strengths: ['creative','communication'], subjects: ['Visual Arts','Computer Applications Technology','Languages'], description: 'Create visual identities, digital experiences and communication materials.', route: 'Graphic Design, Digital Design, Multimedia or Visual Communication' },
  { title: 'Entrepreneur / Business Manager', area: 'Business', interests: ['business','creative','people'], strengths: ['organisation','communication','creative'], subjects: ['Business Studies','Accounting','Mathematics','Mathematical Literacy'], description: 'Develop ideas, manage resources and build products or services.', route: 'Business Management, Entrepreneurship, Commerce or a related diploma' },
  { title: 'Health Sciences Professional', area: 'Health & science', interests: ['science','people'], strengths: ['empathy','analytical','organisation'], subjects: ['Life Sciences','Physical Sciences','Mathematics'], description: 'Contribute to health, prevention, diagnosis or patient care.', route: 'Explore the specific university or college health-sciences programme and its subject requirements' },
  { title: 'Engineer / Technician', area: 'Engineering & technology', interests: ['practical','technology','science'], strengths: ['analytical','practical'], subjects: ['Mathematics','Physical Sciences','Computer Applications Technology'], description: 'Design, build, test or maintain systems, structures and equipment.', route: 'Engineering degree, diploma or accredited technical qualification' },
  { title: 'Environmental / Agricultural Specialist', area: 'Environment & agriculture', interests: ['science','practical'], strengths: ['analytical','practical','organisation'], subjects: ['Agricultural Sciences','Life Sciences','Geography','Mathematics'], description: 'Work with land, natural resources, food systems and sustainability.', route: 'Agriculture, Environmental Science, Ecology or related studies' },
]
const pathways = [
  { title: 'University degree', length: 'Often 3–4+ years', text: 'A deeper academic route for careers that require a degree and, in some fields, postgraduate study.', icon: GraduationCap },
  { title: 'University of Technology', length: 'Diploma and degree routes', text: 'Applied learning that connects theory, projects and industry practice.', icon: BriefcaseBusiness },
  { title: 'TVET college', length: 'Certificate and diploma routes', text: 'Practical and occupational learning across engineering, business, services and other fields.', icon: BookOpen },
  { title: 'Learnerships & apprenticeships', length: 'Programme dependent', text: 'Structured workplace learning that combines practical experience with formal training.', icon: Target },
]
const opportunityTypes = [
  { title: 'Bursaries & scholarships', text: 'Look for eligibility, covered costs, closing dates and required documents.' },
  { title: 'Learnerships & apprenticeships', text: 'Check the qualification level, workplace location, duration and stipend details.' },
  { title: 'Internships & work experience', text: 'Compare the role requirements, application dates and practical learning offered.' },
  { title: 'Career events & open days', text: 'Find campus open days, career expos, information sessions and application workshops.' },
]
const toggle = (items: string[], id: string) => items.includes(id) ? items.filter(item => item !== id) : [...items, id]

export default function CareerDiscovery() {
  const [tab, setTab] = useState<Tab>('discover')
  const [pickedInterests, setPickedInterests] = useState<string[]>([])
  const [pickedStrengths, setPickedStrengths] = useState<string[]>([])
  const [pickedSubjects, setPickedSubjects] = useState<string[]>([])
  const [resultsReady, setResultsReady] = useState(false)
  const [query, setQuery] = useState('')
  const [cvName, setCvName] = useState('')
  const [cvEmail, setCvEmail] = useState('')
  const [cvEducation, setCvEducation] = useState('')
  const [cvSkills, setCvSkills] = useState('')
  const [cvExperience, setCvExperience] = useState('')
  const [copied, setCopied] = useState(false)

  const rankedCareers = useMemo(() => careers.map(career => {
    const interestScore = career.interests.filter(item => pickedInterests.includes(item)).length
    const strengthScore = career.strengths.filter(item => pickedStrengths.includes(item)).length
    const subjectScore = career.subjects.filter(item => pickedSubjects.includes(item)).length
    return { ...career, score: interestScore * 2 + strengthScore + subjectScore }
  }).sort((a,b) => b.score - a.score || a.title.localeCompare(b.title)), [pickedInterests,pickedStrengths,pickedSubjects])
  const filteredCareers = careers.filter(career => `${career.title} ${career.area} ${career.description}`.toLowerCase().includes(query.toLowerCase()))
  const cvText = [cvName,cvEmail,'PROFILE',cvExperience,'EDUCATION',cvEducation,'SKILLS',cvSkills].filter(Boolean).join('\n\n')

  const reset = () => { setPickedInterests([]); setPickedStrengths([]); setPickedSubjects([]); setResultsReady(false) }
  const showResults = () => { setResultsReady(true); setTab('discover') }
  const copyCv = async () => {
    try { await navigator.clipboard.writeText(cvText); setCopied(true); window.setTimeout(() => setCopied(false), 2200) }
    catch { setCopied(false) }
  }

  return <section className="career-workspace" aria-label="Career discovery workspace">
    <div className="career-workspace-head">
      <div><span className="section-kicker">YOUR CAREER JOURNEY STARTS HERE</span><h2>Discover a direction that feels like you.</h2><p>Explore your interests, notice your strengths and turn your ideas into next steps.</p></div>
      <div className="career-workspace-mark"><Compass size={27}/><span>EXPLORE<br/>YOUR FUTURE</span></div>
    </div>
    <nav className="career-tabs" aria-label="Career discovery tools">
      {([{id:'discover',label:'My discovery',icon:Sparkles},{id:'careers',label:'Explore careers',icon:Search},{id:'study',label:'Study pathways',icon:GraduationCap},{id:'opportunities',label:'Opportunity hub',icon:Target},{id:'cv',label:'CV builder',icon:Clipboard}] as const).map(item => <button key={item.id} className={tab===item.id?'active':''} onClick={()=>setTab(item.id)}><item.icon size={16}/>{item.label}</button>)}
    </nav>

    {tab==='discover' && <div className="career-tab-content">
      <div className="discovery-progress"><span><b>01</b> YOUR INTERESTS</span><i/><span><b>02</b> YOUR STRENGTHS</span><i/><span><b>03</b> YOUR SUBJECTS</span></div>
      <div className="career-question">
        <span className="section-kicker">STEP 1 · WHAT CATCHES YOUR ATTENTION?</span><h3>Which things would you enjoy exploring?</h3><p>Choose as many as feel right. There are no wrong answers.</p>
        <div className="career-choice-grid">{interests.map(item=><button key={item.id} className={pickedInterests.includes(item.id)?'career-choice selected':'career-choice'} onClick={()=>setPickedInterests(current=>toggle(current,item.id))} aria-pressed={pickedInterests.includes(item.id)}><span className="choice-check">{pickedInterests.includes(item.id)?'✓':'+'}</span><b>{item.label}</b><small>{item.detail}</small></button>)}</div>
      </div>
      <div className="career-question">
        <span className="section-kicker">STEP 2 · WHAT DO YOU BRING?</span><h3>Which strengths sound like you?</h3><p>Think about what friends, teachers or teammates might notice about you.</p>
        <div className="career-choice-grid">{strengths.map(item=><button key={item.id} className={pickedStrengths.includes(item.id)?'career-choice selected':'career-choice'} onClick={()=>setPickedStrengths(current=>toggle(current,item.id))} aria-pressed={pickedStrengths.includes(item.id)}><span className="choice-check">{pickedStrengths.includes(item.id)?'✓':'+'}</span><b>{item.label}</b><small>{item.detail}</small></button>)}</div>
      </div>
      <div className="career-question">
        <span className="section-kicker">STEP 3 · YOUR SCHOOL SUBJECTS</span><h3>Which subjects are you taking or enjoying?</h3><p>This helps you investigate possible routes. Requirements differ by institution and programme.</p>
        <div className="subject-chip-list">{subjects.map(subject=><button key={subject} className={pickedSubjects.includes(subject)?'subject-chip selected':'subject-chip'} onClick={()=>setPickedSubjects(current=>toggle(current,subject))} aria-pressed={pickedSubjects.includes(subject)}>{pickedSubjects.includes(subject)&&<CheckCircle2 size={13}/>} {subject}</button>)}</div>
      </div>
      <div className="career-submit-row"><div><b>{pickedInterests.length+pickedStrengths.length+pickedSubjects.length} choices selected</b><small>Your answers stay in this page session only.</small></div><button className="career-reset" onClick={reset}><RotateCcw size={14}/> Reset</button><button className="primary-button" onClick={showResults} disabled={!pickedInterests.length&&!pickedStrengths.length}>See my career ideas <ArrowRight size={16}/></button></div>
      {resultsReady && <div className="career-results" aria-live="polite"><div className="career-results-heading"><span className="section-kicker">YOUR EXPLORATION STARTING POINT</span><h3>Career ideas to explore next.</h3><p>These are conversation starters based on the choices you made — not a psychometric assessment or a final career recommendation.</p></div><div className="career-match-grid">{rankedCareers.slice(0,3).map((career,index)=><article className="career-match-card" key={career.title}><span className="match-number">0{index+1} / IDEA</span><h4>{career.title}</h4><small>{career.area}</small><p>{career.description}</p><div><b>Possible study route</b><span>{career.route}</span></div></article>)}</div><button className="text-button career-more" onClick={()=>setTab('careers')}>Explore all career ideas <ArrowRight size={15}/></button></div>}
    </div>}

    {tab==='careers' && <div className="career-tab-content"><div className="career-section-intro"><span className="section-kicker">CAREER EXPLORER</span><h3>There is more than one way to build a future.</h3><p>Search career areas and read about the work and possible study routes.</p></div><label className="career-search"><Search size={17}/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search careers, fields or activities…"/></label><div className="career-catalogue">{filteredCareers.map(career=><article className="career-catalogue-card" key={career.title}><span>{career.area}</span><h4>{career.title}</h4><p>{career.description}</p><div><b>Explore a study route</b><small>{career.route}</small></div></article>)}{!filteredCareers.length&&<p className="career-empty">No matching career ideas. Try a broader search.</p>}</div></div>}

    {tab==='study' && <div className="career-tab-content"><div className="career-section-intro"><span className="section-kicker">STUDY PATHWAYS · SOUTH AFRICA</span><h3>Different routes can lead to meaningful work.</h3><p>Compare broad learning options, then check entry requirements directly with the institution and programme.</p></div><div className="study-pathway-grid">{pathways.map((item,index)=><article className="study-pathway-card" key={item.title}><span className="study-pathway-number">0{index+1}</span><item.icon size={25}/><h4>{item.title}</h4><b>{item.length}</b><p>{item.text}</p></article>)}</div><div className="study-note"><Lightbulb size={20}/><p><b>Before you apply</b> — check the latest admission requirements, subject combinations, APS or selection criteria, application dates, fees and accreditation with each institution. Requirements can change.</p></div></div>}

    {tab==='opportunities' && <div className="career-tab-content"><div className="career-section-intro"><span className="section-kicker">OPPORTUNITY HUB</span><h3>Make your next opportunity easier to find.</h3><p>A practical checklist for discovering and preparing for opportunities. Live listings and application links are not connected in this prototype.</p></div><div className="opportunity-grid">{opportunityTypes.map((item,index)=><article className="opportunity-card" key={item.title}><span>0{index+1}</span><h4>{item.title}</h4><p>{item.text}</p><ul><li>Confirm eligibility and closing date</li><li>Prepare your supporting documents</li><li>Save the official application details</li></ul></article>)}</div><div className="study-note"><Target size={20}/><p><b>Application ready?</b> Use the CV Builder tab to prepare a simple profile, then tailor it to each opportunity. Always apply through the official provider.</p></div></div>}

    {tab==='cv' && <div className="career-tab-content cv-builder-layout"><div className="career-section-intro"><span className="section-kicker">CV BUILDER · FIRST DRAFT</span><h3>Put your experience into words.</h3><p>Start with your details, education and skills. You can include school projects, volunteering, leadership and informal work experience.</p></div><div className="cv-builder-grid"><form className="cv-form" onSubmit={event=>event.preventDefault()}><label>Full name<input value={cvName} onChange={e=>setCvName(e.target.value)} placeholder="Your full name"/></label><label>Email address<input type="email" value={cvEmail} onChange={e=>setCvEmail(e.target.value)} placeholder="you@example.com"/></label><label>Education<textarea rows={3} value={cvEducation} onChange={e=>setCvEducation(e.target.value)} placeholder="School or institution, qualification, dates…"/></label><label>Skills<textarea rows={3} value={cvSkills} onChange={e=>setCvSkills(e.target.value)} placeholder="Communication, teamwork, digital skills…"/></label><label>Profile / experience<textarea rows={4} value={cvExperience} onChange={e=>setCvExperience(e.target.value)} placeholder="A short introduction, projects, volunteering or work experience…"/></label><button className="primary-button" type="button" onClick={copyCv} disabled={!cvText.trim()}><Clipboard size={15}/>{copied?'Copied to clipboard':'Copy CV draft'}</button><small>Prototype tool: your draft stays in this browser session and is not saved to an account.</small></form><aside className="cv-preview"><span className="section-kicker">LIVE PREVIEW</span><h4>{cvName||'Your Name'}</h4><p>{cvEmail||'your.email@example.com'}</p><hr/><b>PROFILE / EXPERIENCE</b><p>{cvExperience||'Your introduction, projects and experience will appear here.'}</p><b>EDUCATION</b><p>{cvEducation||'Add your education details.'}</p><b>SKILLS</b><p>{cvSkills||'Add your relevant skills.'}</p></aside></div></div>}
  </section>
}
