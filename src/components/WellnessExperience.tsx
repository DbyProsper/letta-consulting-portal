import { useState } from 'react'
import { ArrowRight, Heart, Wind, BookOpen, HandHeart, Sparkles, RotateCcw } from 'lucide-react'

const feelings = [
  { label: 'Calm', emoji: '🌿', message: 'Notice what is helping you feel steady today. Is there one small thing you can make time for again?' },
  { label: 'Okay', emoji: '☀️', message: 'You do not need to feel amazing every day. What is one manageable thing you would like to get done?' },
  { label: 'Stressed', emoji: '🌧️', message: 'Pause and name one thing that feels most pressing. What could wait, or be shared with someone you trust?' },
  { label: 'Low', emoji: '🌱', message: 'Be gentle with yourself. Consider reaching out to someone you trust rather than carrying everything alone.' },
]
const resources = [
  { title: 'When stress builds up', category: 'Stress', text: 'Break a big task into one small next step. Take a short pause, stretch, drink some water and return when you feel ready.' },
  { title: 'Make room for rest', category: 'Rest', text: 'A steady wind-down routine can help. Try putting your screen aside, lowering the lights and choosing a calming activity before bed.' },
  { title: 'Stay connected', category: 'Connection', text: 'A simple message to someone you trust can be a good first step. You do not need perfect words to ask for company or support.' },
]
const breathingSteps = ['Breathe in gently through your nose.', 'Breathe out slowly, without forcing it.', 'Let your shoulders soften. Notice how your body feels.', 'When you are ready, return to your natural breathing.']

export default function WellnessExperience({ onBook }: { onBook: (service: string) => void }) {
  const [feeling, setFeeling] = useState<string | null>(null)
  const [resource, setResource] = useState('Stress')
  const [breathStep, setBreathStep] = useState(0)
  const selected = feelings.find(item => item.label === feeling)
  const activeResource = resources.find(item => item.category === resource) ?? resources[0]
  return <div className="wellness-experience">
    <section className="wellness-welcome">
      <div className="wellness-welcome-copy"><span className="wellness-kicker"><Heart size={14}/> A SPACE TO PAUSE</span><h2>Take care of<br/><em>the person</em><br/>behind the plans.</h2><p>Your wellbeing matters at every stage of your journey. Explore small, practical ways to care for yourself, at your own pace.</p><button className="primary-button" onClick={() => document.getElementById('wellness-checkin')?.scrollIntoView({behavior:'smooth'})}>Start with a check-in <ArrowRight size={16}/></button></div>
      <div className="wellness-welcome-art"><div className="wellness-photo"/><span className="wellness-art-note">YOU CAN TAKE<br/><b>ONE STEP AT A TIME</b></span><i>✳</i></div>
    </section>

    <section className="wellness-checkin" id="wellness-checkin">
      <div className="wellness-section-heading"><span className="wellness-kicker">01 / CHECK IN WITH YOURSELF</span><h2>How are you feeling today?</h2><p>There is no right answer. Choose what feels closest, or simply skip this activity.</p></div>
      <div className="wellness-feeling-grid">{feelings.map(item=><button key={item.label} className={feeling===item.label?'wellness-feeling selected':'wellness-feeling'} onClick={()=>setFeeling(item.label)} aria-pressed={feeling===item.label}><span>{item.emoji}</span><b>{item.label}</b></button>)}</div>
      {selected && <div className="wellness-reflection" aria-live="polite"><Sparkles size={19}/><div><b>A gentle thought for today</b><p>{selected.message}</p></div><button onClick={()=>setFeeling(null)} aria-label="Reset check-in"><RotateCcw size={16}/></button></div>}
      <p className="wellness-privacy">Your choice stays on this page only. It is not saved or sent anywhere.</p>
    </section>

    <section className="wellness-toolkit">
      <div className="wellness-toolkit-intro"><span className="wellness-kicker">02 / SMALL MOMENTS OF CARE</span><h2>Find a little breathing room.</h2><p>Try a short guided pause. You can stop or move on whenever you like.</p></div>
      <div className="wellness-breath-card"><div className="wellness-breath-visual"><span><Wind size={34}/></span><i/><i/><i/></div><div className="wellness-breath-copy"><span className="wellness-kicker">A MINDFUL PAUSE · STEP {breathStep+1} OF 4</span><h3>{breathingSteps[breathStep]}</h3><p>Keep this comfortable. There is no need to hold your breath or follow a strict count.</p><div className="wellness-step-dots">{breathingSteps.map((_,i)=><span key={i} className={i===breathStep?'active':''}/>)}</div><div className="wellness-breath-actions"><button className="wellness-quiet-button" onClick={()=>setBreathStep(0)}>Start again</button><button className="primary-button" onClick={()=>setBreathStep((breathStep+1)%4)}>{breathStep===3?'Finish pause':'Next step'} <ArrowRight size={15}/></button></div></div></div>
    </section>

    <section className="wellness-learn">
      <div className="wellness-section-heading"><span className="wellness-kicker">03 / EVERYDAY WELLBEING</span><h2>Little things that can help.</h2><p>Choose a topic for a short, practical reminder.</p></div>
      <div className="wellness-topic-tabs">{resources.map(item=><button key={item.category} className={resource===item.category?'active':''} onClick={()=>setResource(item.category)}>{item.category}</button>)}</div>
      <article className="wellness-resource-card"><span><BookOpen size={23}/></span><div><small>WELLNESS NOTE</small><h3>{activeResource.title}</h3><p>{activeResource.text}</p></div><HandHeart size={28}/></article>
    </section>

    <section className="wellness-support">
      <div><span className="wellness-kicker">04 / YOU DON'T HAVE TO FIGURE IT OUT ALONE</span><h2>Sometimes, talking helps.</h2><p>If you would like professional support, the Letta Consulting team can help you understand the available service pathways and next steps.</p><button className="primary-button" onClick={()=>onBook('Psychological Wellness enquiry')}>Enquire about support <ArrowRight size={16}/></button></div>
      <div className="wellness-support-art"><div className="wellness-support-circle"><HandHeart size={46}/></div><span>LISTEN · SUPPORT · GUIDE</span></div>
    </section>
    <p className="wellness-disclaimer">These activities are general educational resources, not a diagnosis or a substitute for care from a qualified professional. If you or someone else is in immediate danger, contact local emergency services or go to the nearest emergency department.</p>
  </div>
}
