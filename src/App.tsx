import { useState, type FormEvent } from 'react'
import { ArrowRight, BriefcaseBusiness, CalendarDays, ChevronDown, Compass, FileText, Globe2, Heart, Menu, School, Trophy, Users, X } from 'lucide-react'
import DiscoveryHero from './components/DiscoveryHero'
import ServiceExperience from './components/ServiceExperience'
import type { PortalKey } from './data/portalContent'

const pathways = [
  { key: 'career' as const, title: 'Career Discovery', text: 'Explore your interests, strengths and study pathways.', image: 'photo-1523240795612-9a054b0db644', icon: Compass, className: 'career' },
  { key: 'wellness' as const, title: 'Psychological Wellness', text: 'Build resilience and find the support you need.', image: 'photo-1516302752625-fcc3c50ae61f', icon: Heart, className: 'wellness' },
  { key: 'professional' as const, title: 'Professional Support', text: 'Connect with services for people, schools and workplaces.', image: 'photo-1521737711867-e3b97375f902', icon: BriefcaseBusiness, className: 'professional' },
]

const journeys = [
  { title: 'Career World', text: 'Explore careers & study pathways', image: 'photo-1523240795612-9a054b0db644', tag: '01', key: 'career' as const },
  { title: 'Wellness Space', text: 'Manage stress & build resilience', image: 'photo-1544005313-94ddf0286df2', tag: '02', key: 'wellness' as const },
  { title: 'Future Games', text: 'Learn through play', image: 'photo-1493711662062-fa541f8b4e5a', tag: '03', key: 'career' as const },
  { title: 'My Future', text: 'Set goals & track your progress', image: 'photo-1521737711867-e3b97375f902', tag: '04', key: 'career' as const },
]

const shortcuts = [
  { title: 'Opportunity Hub', description: 'Career events, bursaries & opportunities', icon: Trophy, key: 'career' as const },
  { title: 'CV & Cover Letter Builder', description: 'Create your next application', icon: FileText, key: 'career' as const },
  { title: 'Parent & Guardian Support', description: 'Guidance for the people behind you', icon: Users, key: 'wellness' as const },
  { title: 'School Partnerships', description: 'Bring guidance to your school', icon: School, key: 'professional' as const },
  { title: 'Corporate Wellness (EAP)', description: 'Support a healthier workplace', icon: BriefcaseBusiness, key: 'professional' as const },
]

const languages = ['English', 'isiZulu', 'Sesotho', 'Setswana', 'isiXhosa']

function Brand() {
  return <a className="brand" href="#home" aria-label="Letta Consulting home"><span className="brand-mark" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/></span><span className="brand-copy"><b>LETTA<br/>CONSULTING</b><small>psychological, health & medico-legal services</small></span></a>
}

type BookingModalProps = { service: string; onClose: () => void }
function BookingModal({ service, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }
  return <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
    <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <button className="modal-close" onClick={onClose} aria-label="Close enquiry form"><X size={19}/></button>
      {submitted ? <div className="booking-success"><span><CalendarDays size={28}/></span><span className="section-kicker">ENQUIRY PREPARED</span><h2>Thank you, {name.split(' ')[0]}.</h2><p>Your enquiry details are ready. Online submission and appointment confirmation will be connected when the booking service is integrated.</p><button className="primary-button" onClick={onClose}>Back to Letta <ArrowRight size={16}/></button></div> :
      <><span className="section-kicker">LET'S TAKE THE NEXT STEP</span><h2 id="booking-title">Make an enquiry</h2><p>Tell us a little about what you’re looking for and the team you’d like to reach.</p>
        <form onSubmit={submit} className="booking-form">
          <label>Your name<input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" required/></label>
          <label>Email address<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" required/></label>
          <label>I'm interested in<select value={service} onChange={()=>{}} disabled><option>{service}</option></select></label>
          <label>How can we help?<textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Share a little about the support you need…" rows={3}/></label>
          <button className="primary-button" type="submit">Continue <ArrowRight size={16}/></button>
          <small>This is a prototype enquiry form. It does not send or store personal information yet.</small>
        </form>
      </>}
    </section>
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState('English')
  const [languageOpen, setLanguageOpen] = useState(false)
  const [activePage, setActivePage] = useState<PortalKey | null>(null)
  const [bookingService, setBookingService] = useState<string | null>(null)

  const openPage = (page: PortalKey) => {
    setActivePage(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const openBooking = (service: string) => setBookingService(service)
  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  if (activePage) return <><header className="topbar service-topbar"><Brand/><button className="service-home-link" onClick={() => {setActivePage(null);window.scrollTo({top:0,behavior:'smooth'})}}>Home <ArrowRight size={15}/></button></header><ServiceExperience page={activePage} onBack={() => {setActivePage(null);window.scrollTo({top:0,behavior:'smooth'})}} onBook={openBooking}/>{bookingService && <BookingModal service={bookingService} onClose={()=>setBookingService(null)}/>}</>

  return <main>
    <header className="topbar home-topbar">
      <Brand/>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        <a className="active" href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
        <button onClick={()=>scrollTo('paths')}>Services <ChevronDown size={13}/></button>
        <button onClick={()=>scrollTo('journeys')}>Discover <ChevronDown size={13}/></button>
        <button onClick={()=>scrollTo('resources')}>Resources <ChevronDown size={13}/></button>
        <button onClick={()=>scrollTo('team')}>About <ChevronDown size={13}/></button>
        <button onClick={()=>scrollTo('footer')}>Contact</button>
      </nav>
      <div className="top-actions">
        <div className="language-wrap"><button className="language" onClick={()=>setLanguageOpen(!languageOpen)} aria-expanded={languageOpen}><Globe2 size={15}/>{language}<ChevronDown size={13}/></button>
          {languageOpen && <div className="language-menu">{languages.map(item=><button key={item} onClick={()=>{setLanguage(item);setLanguageOpen(false)}}>{item}</button>)}</div>}
        </div>
        <button className="book-button" onClick={()=>openBooking('General enquiry')}>Book a Session <ArrowRight size={16}/></button>
      </div>
      <button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen?<X/>:<Menu/>}</button>
    </header>
    <DiscoveryHero onExplore={() => scrollTo('paths')}/>

    <section className="path-panel panel" id="paths">
      <div className="panel-intro"><span className="section-kicker">FIND YOUR STARTING POINT</span><h2>Choose<br/>your path</h2><p>Explore. Learn. Plan.</p><span className="intro-decoration">✳</span></div>
      <div className="path-cards">{pathways.map((path,index)=><button className={`path-card path-${path.className}`} key={path.key} onClick={()=>openPage(path.key)} style={{backgroundImage:`linear-gradient(0deg,rgba(2,35,43,.88),transparent 72%),url(https://images.unsplash.com/${path.image}?auto=format&fit=crop&w=900&q=85)`}}><span className="path-caption"><path.icon size={23}/><b>{path.title}</b><small>{path.text}</small></span><span className="round-arrow"><ArrowRight size={18}/></span><span className="path-index">0{index+1}</span></button>)}</div>
      <div className="panel-dots"><span className="active-dot"/><span/><span/></div>
    </section>

    <section className="journey-panel panel" id="journeys">
      <div className="journey-intro"><span className="section-kicker">YOUR WORLD, YOUR WAY</span><h2>One place.<br/>Many ways<br/>forward.</h2><p>Small steps can open up<br/>a world of possibility.</p><span className="journey-doodle">〰</span></div>
      <div className="journey-grid">{journeys.map((item,index)=><button className={`journey-card journey-${index}`} key={item.title} onClick={()=>openPage(item.key)}><div className="journey-image" style={{backgroundImage:`url(https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=700&q=85)`}}/><div className="journey-text"><span>{item.tag} / DISCOVER</span><b>{item.title}</b><small>{item.text}</small></div><span className="journey-arrow"><ArrowRight size={15}/></span></button>)}</div>
    </section>

    <section className="resource-section" id="resources">
      <div className="resource-heading"><div><span className="section-kicker">TOOLS FOR YOUR NEXT CHAPTER</span><h2>More support.<br/><em>More possibilities.</em></h2></div><p>Practical tools and helpful connections for every step of the journey.</p></div>
      <div className="shortcut-grid">{shortcuts.map(({title,description,icon:Icon,key},index)=><button className="shortcut-card" key={title} onClick={()=>openPage(key)}><span className="shortcut-icon"><Icon size={22}/></span><span className="shortcut-number">0{index+1}</span><b>{title}</b><small>{description}</small><span className="shortcut-arrow"><ArrowRight size={16}/></span></button>)}</div>
    </section>

    <section className="support-panel panel" id="team">
      <div className="support-intro"><span className="section-kicker">HERE WHEN YOU NEED US</span><h2>Support that<br/>grows with you</h2><p>Expert guidance. A brighter future.</p><button className="primary-button compact" onClick={()=>openBooking('Professional consultation')}>Book a Session <ArrowRight size={16}/></button></div>
      <div className="team-feature"><div className="team-photo" role="img" aria-label="Professional consultant ready to support you"/><div><span className="section-kicker">A COLLABORATIVE PRACTICE</span><h3>People-first support, backed by professionals.</h3><p>Connect with the right service pathway, from career guidance to psychological and workplace support.</p><button className="outline-button" onClick={()=>openPage('professional')}>Explore our team <ArrowRight size={14}/></button></div></div>
      <div className="service-strip">{[{title:'Opportunity Hub',icon:Trophy,key:'career' as const},{title:'CV Builder',icon:FileText,key:'career' as const},{title:'Parent & Guardian',icon:Users,key:'wellness' as const},{title:'School Partnerships',icon:School,key:'professional' as const},{title:'Corporate Wellness',icon:BriefcaseBusiness,key:'professional' as const}].map(({title,icon:Icon,key})=><button key={title} onClick={()=>openPage(key)}><span><Icon size={22}/></span><small>{title}</small></button>)}</div>
    </section>

    <section className="languages-band"><div><Globe2 size={20}/><span>Guidance that speaks your language.</span></div><p>English · isiZulu · Sesotho · Setswana · isiXhosa</p><span className="language-note">Language selection preview: {language}</span></section>
    <footer id="footer"><Brand/><div className="footer-links"><button onClick={()=>openPage('career')}>Career Guidance</button><i/><button onClick={()=>openPage('wellness')}>Psychological Wellness</button><i/><button onClick={()=>openPage('professional')}>Professional Support</button></div><div className="footer-languages">{languages.map(item=><button key={item} onClick={()=>setLanguage(item)} className={language===item?'chosen':''}>{item}</button>)}</div><p className="footer-tagline">Real Support. Brighter Futures.<span/></p><small className="footer-legal">© {new Date().getFullYear()} Letta Consulting</small></footer>
    {bookingService && <BookingModal service={bookingService} onClose={()=>setBookingService(null)}/>}
  </main>
}

export default App
