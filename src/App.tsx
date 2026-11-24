import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Globe2, Compass, Heart, BriefcaseBusiness, GraduationCap, Sparkles, Menu, X, Play, Leaf, Trophy, FileText, Users, School, ChartNoAxesColumnIncreasing } from 'lucide-react'

const paths = [
  { title: 'Career Discovery', subtitle: 'Find your direction and explore what is possible.', image: 'photo-1523240795612-9a054b0db644', icon: Compass, tone: 'mint' },
  { title: 'Psychological Wellness', subtitle: 'Build resilience and take care of your wellbeing.', image: 'photo-1516302752625-fcc3c50ae61f', icon: Heart, tone: 'lilac' },
  { title: 'Professional Support', subtitle: 'Get expert support for your next step.', image: 'photo-1516321318423-f06f85e504b3', icon: BriefcaseBusiness, tone: 'blue' },
]
const journeys = [
  { title: 'Career World', text: 'Explore careers & study pathways', image: 'photo-1516321318423-f06f85e504b3', tag: '01' },
  { title: 'Wellness Space', text: 'Manage stress & build resilience', image: 'photo-1544005313-94ddf0286df2', tag: '02' },
  { title: 'Future Games', text: 'Learn through play', image: 'photo-1493711662062-fa541 jak?auto=format', tag: '03' },
  { title: 'My Future', text: 'Set goals & track your progress', image: 'photo-1521737711867-e3b97375f902', tag: '04' },
]
const experts = [
  { name: 'Dr. N. Mthembu', role: 'Clinical Psychologist', initials: 'NM', color: 'peach' },
  { name: 'Mr. D. Naidoo', role: 'Counselling Psychologist', initials: 'DN', color: 'sand' },
  { name: 'Ms. T. Dlamini', role: 'Career Counsellor', initials: 'TD', color: 'rose' },
]
const services = [
  { title: 'Opportunity Hub', icon: Trophy },
  { title: 'CV Builder', icon: FileText },
  { title: 'Parent & Guardian Support', icon: Users },
  { title: 'School Partnerships', icon: School },
  { title: 'Corporate Wellness (EAP)', icon: BriefcaseBusiness },
]
const interestBubbles = [
  { label: 'MY INTERESTS', icon: Sparkles, className: 'bubble interests' },
  { label: 'MY STRENGTHS', icon: ChartNoAxesColumnIncreasing, className: 'bubble strengths' },
  { label: 'MY WELLBEING', icon: Heart, className: 'bubble wellbeing' },
  { label: 'MY AMBITIONS', icon: GraduationCap, className: 'bubble ambitions' },
]

function Brand() {
  return <a className="brand" href="#" aria-label="Letta Consulting home"><span className="brand-mark"><i/><i/><i/><i/><i/><i/><i/><i/></span><span className="brand-copy"><b>LETTA<br/>CONSULTING</b><small>psychological, health & medico-legal services</small></span></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePath, setActivePath] = useState(0)
  const [language, setLanguage] = useState('English')
  const [showLanguages, setShowLanguages] = useState(false)
  const [selectedBubble, setSelectedBubble] = useState('YOUR NEXT CHAPTER')
  const [notice, setNotice] = useState('')
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const book = () => { setNotice('Booking enquiries will be enabled in the next implementation phase.'); scrollTo('experts') }

  return <main>
    <section className="hero-shell" id="home">
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
      <header className="topbar">
        <Brand/>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a className="active" href="#home">Home</a>
          <a href="#paths">Services <ChevronDown size={13}/></a>
          <a href="#journeys">Discover <ChevronDown size={13}/></a>
          <a href="#support">Resources <ChevronDown size={13}/></a>
          <a href="#experts">About <ChevronDown size={13}/></a>
          <a href="#footer">Contact</a>
        </nav>
        <div className="top-actions">
          <div className="language-wrap"><button className="language" onClick={() => setShowLanguages(!showLanguages)}><Globe2 size={15}/>{language}<ChevronDown size={13}/></button>{showLanguages && <div className="language-menu">{['English','isiZulu','Sesotho','Setswana','isiXhosa'].map(l => <button key={l} onClick={() => {setLanguage(l);setShowLanguages(false)}}>{l}</button>)}</div>}</div>
          <button className="book-button" onClick={book}>Book a Session <ArrowRight size={16}/></button>
        </div>
        <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow"><span/> A brighter way forward</span>
          <h1>DISCOVER<br/>WHAT’S<br/>POSSIBLE<span className="lime-dot">.</span></h1>
          <h2>Your mind. Your strengths. Your future.</h2>
          <p>Career guidance, psychological wellness<br className="desktop-break"/> and professional support — all in one place.</p>
          <div className="hero-ctas"><button className="primary-button" onClick={() => scrollTo('paths')}>START EXPLORING <ArrowRight size={17}/></button><button className="text-button" onClick={() => scrollTo('paths')}><span><Play size={12} fill="currentColor"/></span> Explore our services</button></div>
        </div>
        <div className="hero-art">
          <div className="hero-photo photo-main" role="img" aria-label="A diverse group of young people looking confidently toward their future"/>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="chapter-orb" onClick={() => setSelectedBubble('YOUR NEXT CHAPTER')}><span>YOUR</span><b>NEXT<br/>CHAPTER</b><small>✦</small></div>
          {interestBubbles.map(({label,icon:Icon,className}) => <button key={label} className={className} onClick={() => setSelectedBubble(label)}><Icon size={23}/><b>{label}</b></button>)}
          <div className="drag-hint">Drag the pieces.<br/>Discover your possibilities. <span>↗</span></div>
          <div className="hero-shape shape-green"/><div className="hero-shape shape-blue"/>
          <div className="selected-hint">Exploring: <b>{selectedBubble}</b></div>
        </div>
      </div>
      <div className="hero-bottom-glow"/>
    </section>

    <section className="path-panel panel" id="paths">
      <div className="panel-intro"><span className="section-kicker">FIND YOUR STARTING POINT</span><h2>Choose<br/>your path</h2><p>Explore. Learn. Plan.</p><div className="path-arrows"><button aria-label="Previous path" onClick={() => setActivePath((activePath + 2) % 3)}>←</button><button aria-label="Next path" onClick={() => setActivePath((activePath + 1) % 3)}>→</button></div></div>
      <div className="path-cards">{paths.map((p,i) => <motion.button whileHover={{y:-5}} className={'path-card '+p.tone+(activePath===i?' chosen':'')} key={p.title} onClick={() => {setActivePath(i);setNotice(p.subtitle)}} style={{backgroundImage:`linear-gradient(0deg,rgba(2,35,43,.84),transparent 65%),url(https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=900&q=85)`}}><span className="path-caption"><p><p.icon size={23}/></p><b>{p.title}</b><small>{p.subtitle}</small></span><span className="round-arrow"><ArrowRight size={18}/></span></motion.button>)}</div>
      <div className="panel-dots">{paths.map((p,i)=><button aria-label={'Show '+p.title} className={activePath===i?'selected':''} key={p.title} onClick={()=>setActivePath(i)}/>)}</div>
    </section>

    <section className="journey-panel panel" id="journeys">
      <div className="journey-intro"><span className="section-kicker">YOUR WORLD, YOUR WAY</span><h2>One place.<br/>Many ways<br/>forward.</h2><p>Small steps can open up<br/>a world of possibility.</p><div className="scribble">〰</div></div>
      <div className="journey-grid">{journeys.map((j,i)=><button className={'journey-card journey-'+i} key={j.title} onClick={()=>setNotice(j.title+' will be part of the interactive discovery experience.')}><div className="journey-image" style={{backgroundImage:`url(https://images.unsplash.com/${j.image.replace(' jak','')}?auto=format&fit=crop&w=700&q=85)`}}/><div className="journey-text"><span>{j.tag} / DISCOVER</span><b>{j.title}</b><small>{j.text}</small></div><span className="journey-arrow"><ArrowRight size={15}/></span></button>)}</div>
    </section>

    <section className="support-panel panel" id="support">
      <div className="support-intro"><span className="section-kicker">HERE WHEN YOU NEED US</span><h2>Support that<br/>grows with you</h2><p>Expert guidance. A brighter future.</p><button className="primary-button compact" onClick={book}>Book a Session <ArrowRight size={16}/></button></div>
      <div className="expert-list" id="experts">{experts.map(e=><article className="expert" key={e.name}><div className={'expert-avatar '+e.color}>{e.initials}</div><div className="expert-info"><b>{e.name}</b><small>{e.role}</small><button onClick={book}>Book Now <ArrowRight size={13}/></button></div></article>)}</div>
      <div className="service-strip">{services.map(({title,icon:Icon})=><button key={title} onClick={()=>setNotice(title+' information will be added in the next phase.')}><span><Icon size={22}/></span><small>{title}</small></button>)}</div>
    </section>

    <footer id="footer"><Brand/><div className="footer-links"><a href="#paths">Career Guidance</a><i/><a href="#paths">Psychological Wellness</a><i/><a href="#support">Professional Support</a></div><div className="footer-languages"><Globe2 size={17}/>{['English','isiZulu','Sesotho','Setswana','isiXhosa'].map(l=><button key={l} onClick={()=>setLanguage(l)}>{l}</button>)}</div><p className="footer-tagline">Real Support. Brighter Futures.<span/></p></footer>
    {notice && <div className="notice" role="status"><span>{notice}</span><button onClick={()=>setNotice('')} aria-label="Dismiss"><X size={16}/></button></div>}
  </main>
}

export default App
