import { useState } from 'react'
import { ArrowRight, BookOpen, Check, Compass, Flag, Lightbulb, Sparkles, Target } from 'lucide-react'

type Props = { onExplore: () => void; onHome: () => void }

const steps = [
  { title: 'Discover what interests you', detail: 'Explore the subjects, activities and ideas that energise you.', icon: Compass },
  { title: 'Explore a study route', detail: 'Compare university, university of technology and TVET pathways.', icon: BookOpen },
  { title: 'Choose one small next step', detail: 'Write down one action you can take this month.', icon: Flag },
]

export default function StudentDashboard({ onExplore, onHome }: Props) {
  const [completed, setCompleted] = useState<number[]>([])
  const done = completed.length
  return <main className="student-dashboard">
    <div className="student-dashboard-top"><button onClick={onHome}>Home</button><span>/</span><b>My future</b></div>
    <section className="student-welcome">
      <div className="student-welcome-copy"><span className="section-kicker"><Sparkles size={13}/> YOUR NEXT CHAPTER STARTS HERE</span><h1>Your future is<br/><em>full of possibilities.</em></h1><p>You don’t need every answer today. Start with one small discovery and build from there.</p><button className="primary-button" onClick={onExplore}>Start career discovery <ArrowRight size={16}/></button></div>
      <div className="student-welcome-image" role="img" aria-label="Students exploring their future together"><span>YOUR JOURNEY<br/><b>STARTS WITH YOU</b></span></div>
      <span className="student-spark student-spark-one">✳</span><span className="student-spark student-spark-two">✦</span>
    </section>
    <section className="student-progress-card">
      <div><span className="section-kicker">YOUR FIRST THREE STEPS</span><h2>A little progress goes a long way.</h2><p>Tick off each step as you complete it. Your progress is kept on this page for now.</p></div>
      <div className="student-progress-meter"><strong>{done}<small>/3</small></strong><span>steps explored</span><div><i style={{width:`${done / 3 * 100}%`}}/></div></div>
    </section>
    <section className="student-steps">
      {steps.map((step,index)=>{const Icon=step.icon;const checked=completed.includes(index);return <article className={checked?'student-step completed':'student-step'} key={step.title}><span className="student-step-icon"><Icon size={23}/></span><span className="student-step-number">0{index+1}</span><h3>{step.title}</h3><p>{step.detail}</p><button onClick={()=>setCompleted(current=>checked?current.filter(item=>item!==index):[...current,index])}>{checked?<><Check size={15}/> Completed</>:<>Mark as explored <ArrowRight size={14}/></>}</button></article>})}
    </section>
    <section className="student-discovery-callout"><div className="student-callout-art"><span><Lightbulb size={35}/></span><i>✦</i><b>IDEAS<br/>GROW HERE</b></div><div><span className="section-kicker">NEED A PLACE TO BEGIN?</span><h2>Get to know what makes you, you.</h2><p>A few quick choices about your interests and strengths can help you explore career ideas worth learning more about.</p><button className="primary-button" onClick={onExplore}>Explore my interests <ArrowRight size={16}/></button></div></section>
    <p className="student-dashboard-note"><Target size={14}/> This is your personal planning space. Your checklist is a local prototype and is not saved to an account.</p>
  </main>
}
