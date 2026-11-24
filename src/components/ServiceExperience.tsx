import { ArrowLeft, ArrowRight, CheckCircle2, Compass, Heart, BriefcaseBusiness } from 'lucide-react'
import { portalContent, type PortalKey } from '../data/portalContent'
import CareerDiscovery from './CareerDiscovery'

const icons = { career: Compass, wellness: Heart, professional: BriefcaseBusiness }

type Props = { page: PortalKey; onBack: () => void; onBook: (service: string) => void }

export default function ServiceExperience({ page, onBack, onBook }: Props) {
  const content = portalContent[page]
  const Icon = icons[page]
  return <main className="service-experience">
    <div className="service-experience-top">
      <button className="back-link" onClick={onBack}><ArrowLeft size={16} /> Back to home</button>
      <span className="service-breadcrumb">LETTA CONSULTING <i>/</i> {content.eyebrow}</span>
    </div>
    <section className={`service-hero service-hero-${page}`}>
      <div className="service-hero-copy">
        <span className="eyebrow"><i /> {content.eyebrow}</span>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
        <button className="primary-button" onClick={() => onBook(content.eyebrow)}>Make an enquiry <ArrowRight size={16} /></button>
      </div>
      <div className="service-hero-art"><span className="service-icon-orb"><Icon size={58} /></span><span className="service-art-ring ring-one"/><span className="service-art-ring ring-two"/><span className="service-art-spark">✦</span></div>
    </section>
    <section className="service-feature-section">
      <div className="service-section-heading"><span className="section-kicker">EXPLORE THE POSSIBILITIES</span><h2>Find the support that<br/>moves you forward.</h2><p>Choose a starting point. You can explore at your own pace.</p></div>
      <div className="service-feature-grid">{content.features.map((feature,index)=><article className="service-feature-card" key={feature.title}><span className="feature-number">0{index+1}</span><CheckCircle2 size={20}/><h3>{feature.title}</h3><p>{feature.text}</p><button onClick={() => onBook(feature.title)}>Learn more <ArrowRight size={14}/></button></article>)}</div>
    </section>
    {page === 'career' && <CareerDiscovery/>}
    <section className="service-bottom-cta"><div><span className="section-kicker">A REAL PERSON. A CLEAR NEXT STEP.</span><h2>Not sure where to begin?</h2><p>Talk to the Letta Consulting team about the support or service that fits your needs.</p></div><button className="primary-button" onClick={() => onBook(content.eyebrow)}>Talk to our team <ArrowRight size={16}/></button></section>
  </main>
}
