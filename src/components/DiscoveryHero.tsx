import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, GraduationCap, Heart, Lightbulb, Sparkles, ChartNoAxesColumnIncreasing } from 'lucide-react'

const discoveryItems = [
  { id: 'interests', label: 'MY INTERESTS', hint: 'What energises you?', icon: Sparkles, className: 'orb-interests' },
  { id: 'strengths', label: 'MY STRENGTHS', hint: 'What comes naturally?', icon: ChartNoAxesColumnIncreasing, className: 'orb-strengths' },
  { id: 'wellbeing', label: 'MY WELLBEING', hint: 'How do you want to feel?', icon: Heart, className: 'orb-wellbeing' },
  { id: 'ambitions', label: 'MY AMBITIONS', hint: 'Where could you go?', icon: GraduationCap, className: 'orb-ambitions' },
]

type DiscoveryHeroProps = { onExplore: () => void }

export default function DiscoveryHero({ onExplore }: DiscoveryHeroProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<string[]>([])
  const [active, setActive] = useState('interests')
  const [mixOpen, setMixOpen] = useState(false)

  const toggleItem = (id: string) => {
    setActive(id)
    setSelected(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id])
    setMixOpen(false)
  }

  return <section className="hero-shell" id="home">
    <div className="hero-ambient hero-ambient-a" />
    <div className="hero-ambient hero-ambient-b" />
    <div className="hero-grid-glow" />
    <div className="hero-content">
      <div className="hero-copy">
        <span className="eyebrow"><i /> A BRIGHTER WAY FORWARD</span>
        <h1>DISCOVER<br />WHAT’S<br />POSSIBLE<span className="lime-dot">.</span></h1>
        <h2>Your mind. Your strengths. Your future.</h2>
        <p>Career guidance, psychological wellness<br className="desktop-break" /> and professional support — all in one place.</p>
        <div className="hero-ctas">
          <button className="primary-button" onClick={onExplore}>START EXPLORING <ArrowRight size={17} /></button>
          <button className="text-button" onClick={() => setMixOpen(true)}><span><Lightbulb size={14} /></span> Discover your mix</button>
        </div>
        <div className="hero-trust"><span><i /> Youth-friendly access</span><span><i /> Professional guidance</span></div>
      </div>

      <div className="hero-art" ref={stageRef}>
        <div className="hero-photo" role="img" aria-label="Young people imagining their future" />
        <div className="hero-photo-shade" />
        <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
        <div className="hero-ribbon ribbon-green" /><div className="hero-ribbon ribbon-blue" />
        <div className="hero-center-glow" />
        <motion.button className="chapter-orb" whileHover={{ scale: 1.06 }} whileTap={{ scale: .96 }} onClick={() => setMixOpen(true)}>
          <span>YOUR</span><b>NEXT<br />CHAPTER</b><small>✦</small>
        </motion.button>
        {discoveryItems.map(({id,label,hint,icon:Icon,className}, index) => (
          <motion.button
            key={id}
            className={`discovery-orb ${className} ${selected.includes(id) ? 'is-selected' : ''} ${active === id ? 'is-active' : ''}`}
            drag
            dragConstraints={stageRef}
            dragElastic={0.18}
            dragMomentum={false}
            whileHover={{ scale: 1.08, zIndex: 8 }}
            whileDrag={{ scale: 1.14, zIndex: 10, cursor: 'grabbing' }}
            onClick={() => toggleItem(id)}
            onDragEnd={() => { setActive(id); setSelected(current => current.includes(id) ? current : [...current, id]); setMixOpen(false) }}
            aria-label={`${label}: ${hint}. Drag or select to add to your mix.`}
            style={{ zIndex: active === id ? 6 : 4 }}
            initial={{ opacity: 0, scale: .6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, index % 2 ? -8 : 8, 0] }}
            transition={{ opacity: { duration: .5, delay: index * .12 }, scale: { duration: .5, delay: index * .12 }, y: { duration: 4 + index, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <Icon size={24} strokeWidth={2.4} /><b>{label}</b><small>{hint}</small>
            {selected.includes(id) && <span className="orb-check">✓</span>}
          </motion.button>
        ))}
        <div className="drag-hint"><span>DRAG THE PIECES.</span><b>Discover your possibilities.</b><i>↗</i></div>
        <div className="mix-status"><span className="mix-status-dot" /> {selected.length ? `${selected.length} PART OF YOUR MIX` : 'YOUR STORY STARTS HERE'}</div>
        {mixOpen && <motion.div className="mix-popover" initial={{ opacity: 0, y: 12, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
          <button className="mix-close" onClick={() => setMixOpen(false)} aria-label="Close mix panel">×</button>
          <span className="section-kicker">YOUR FUTURE MIX</span>
          <h3>{selected.length ? 'A little more of you.' : 'Start with what makes you, you.'}</h3>
          <p>{selected.length ? `You’ve added ${selected.length} discovery piece${selected.length === 1 ? '' : 's'}. Keep exploring your interests, strengths, wellbeing and ambitions.` : `Drag or tap the floating pieces to add them to your mix. There is no wrong place to begin.`}</p>
          <div className="mix-chips">{discoveryItems.map(item => <span className={selected.includes(item.id) ? 'filled' : ''} key={item.id}>{item.label.replace('MY ','')}</span>)}</div>
          <button className="mix-action" onClick={() => { setMixOpen(false); onExplore() }}>Explore my possibilities <ArrowRight size={15} /></button>
        </motion.div>}
        <div className="hero-scroll-cue"><ArrowDown size={14} /> SCROLL TO EXPLORE</div>
      </div>
    </div>
  </section>
}
