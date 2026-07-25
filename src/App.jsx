import { useMemo, useState } from 'react'
import {
  ArrowRight, CalendarDays, Check, ChevronDown, Clock3, HeartHandshake,
  Home, Mail, MapPin, Menu, MessageCircle, ShieldCheck, Shirt,
  Sparkles, Trash2, X, BadgeDollarSign
} from 'lucide-react'
import logoFull from './assets/logo-full.png'
import logoSimple from './assets/logo-simple.png'
import { siteConfig } from './siteConfig'

const services = [
  {
    id: 'laundry', icon: Shirt, title: 'Laundry Club', kicker: 'Flagship recurring program',
    intro: 'Wash, dry, fold, pickup, and return service organized around your Neighborhood Service Day.',
    highlights: ['Official reusable Laundry Club bag', 'Standard or Free & Clear detergent included', 'Optional fabric softener included', 'Neatly folded clothing and paired socks'],
    plans: [
      ['Monthly Refresh', '1 pickup per month · 1 bag', '$39/mo'],
      ['Every Other Week Club', '2 pickups per month · 1 bag each', '$75/mo'],
      ['Kids Laundry Club', 'Weekly · ages 12 and under · 1 bag', '$119/mo'],
      ['Weekly Laundry Club', 'Weekly · 1 bag', '$129/mo'],
      ['Family Laundry Club', 'Weekly · 2 bags', '$199/mo'],
    ],
    note: 'One-time service: 1 bag $49 · 2 bags $89 · 3 bags $125. Add-ons available for comforters, bedding, delicates, hang dry, extra bags, and off-route pickup.'
  },
  {
    id: 'trash', icon: Trash2, title: 'Trash Bin Service', kicker: 'Never worry about trash day again',
    intro: 'We place eligible bins at the curb before municipal collection and return them afterward.',
    highlights: ['Evening-before curb placement', 'Return after collection', 'Vacation holds at no charge', 'Trash, recycling, and eligible yard-waste bins'],
    plans: [
      ['Standard', 'Up to 2 bins · weekly', '$39/mo'],
      ['Large Household', 'Up to 4 bins · weekly', '$49/mo'],
      ['Additional Bin', 'Each additional eligible bin', '+$5/mo'],
      ['Off-Route Visit', 'Special-request visit', '+$15'],
    ],
    note: 'Service does not include loose-trash handling, hauling, bulk-item removal, dumpsters, or bin cleaning.'
  },
  {
    id: 'home-watch', icon: Home, title: 'Home Watch', kicker: 'Premium add-on for time away',
    intro: 'Scheduled exterior visual checks with photos and a digital summary while you are away.',
    highlights: ['Exterior walk-around', 'Visible check of accessible doors and windows', 'Visible mail or package retrieval when requested', 'Exterior photos and visit summary'],
    plans: [
      ['One-Time Home Watch', 'Single scheduled exterior visit', '$39'],
      ['Vacation Watch', 'Up to 4 visits within 30 days', '$129'],
      ['Monthly Home Watch', '2 visits per month', '$79/mo'],
      ['Off-Route Visit', 'Special-request visit', '+$15'],
    ],
    note: 'Home Watch is not security, property management, emergency response, a home inspection, or a guarantee against damage or crime.'
  },
]


const homePlans = [
  {
    name: 'Home Basics Plan',
    audience: 'A simple monthly routine for individuals and couples.',
    includes: ['Monthly Refresh Laundry Club', 'Standard Trash Bin Service'],
    regular: '$78/mo',
    price: '$69/mo',
    savings: 'Save $9 each month'
  },
  {
    name: 'Routine Relief Plan',
    audience: 'Our recommended option for steady, dependable help.',
    includes: ['Every Other Week Laundry Club', 'Standard Trash Bin Service'],
    regular: '$114/mo',
    price: '$99/mo',
    savings: 'Save $15 each month',
    recommended: true
  },
  {
    name: 'Weekly Household Plan',
    audience: 'Built for active households with weekly laundry needs.',
    includes: ['Weekly Laundry Club', 'Standard Trash Bin Service'],
    regular: '$168/mo',
    price: '$149/mo',
    savings: 'Save $19 each month'
  },
  {
    name: 'Family Routine Plan',
    audience: 'Our strongest recurring plan for larger family routines.',
    includes: ['Family Laundry Club', 'Large Household Trash Bin Service'],
    regular: '$248/mo',
    price: '$229/mo',
    savings: 'Save $19 each month'
  },
]

const faqs = [
  ['What is a Neighborhood Service Day?', 'Whenever practical, we organize service around your municipality’s trash collection schedule. Efficient neighborhood routing reduces travel, improves consistency, and helps keep pricing affordable.'],
  ['Which communities do you serve?', 'We are launching in selected communities throughout Chicago’s south suburbs. Submit your address and we will confirm whether your neighborhood is currently on a route.'],
  ['Do I need a long-term contract?', 'No long-term contract is required for standard recurring plans. Billing follows the selected plan, and vacation holds are available with advance notice.'],
  ['How quickly is laundry returned?', 'Laundry is returned on the next scheduled Neighborhood Service Day or within one business day, depending on the assigned route.'],
  ['What laundry items are not accepted?', 'We cannot accept dry-clean-only garments, leather, biohazards, mold-remediation items, or hazardous materials. Care-label and special-item restrictions may also apply.'],
  ['Does Home Watch include entering my home?', 'No. The launch version is an exterior visual check only. We do not enter the home or provide security, emergency response, or inspection services.'],
  ['What happens during bad weather or holidays?', 'Safety comes first. Routes may shift when weather or holidays affect normal operations. Customers receive clear notice and the next available service date.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [selectedService, setSelectedService] = useState('')

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Service request${selectedService ? `: ${selectedService}` : ''}`)
    return `mailto:${siteConfig.email}?subject=${subject}`
  }, [selectedService])

  const submitRequest = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Service request: ${data.get('service')}`)
    const body = encodeURIComponent([
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Community / Address: ${data.get('location')}`,
      `Service: ${data.get('service')}`,
      `Preferred contact: ${data.get('contact')}`,
      '', 'Request details:', data.get('details') || 'No additional details provided.'
    ].join('\n'))
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${siteConfig.businessName} home`}>
          <img src={logoSimple} alt="" />
          <span>South Suburban<br /><b>Household Services</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
          <a href="#services">Programs</a><a href="#home-plans">Home Plans</a><a href="#how">How It Works</a><a href="#pricing">Pricing</a><a href="#about">About</a><a href="#faq">FAQ</a>
          <a className="nav-cta" href="#request">Request Service <ArrowRight size={16} /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-content">
            <p className="eyebrow"><Sparkles size={15} /> Family-owned · Serving Chicago's south suburbs</p>
            <h1>More time for what matters most.</h1>
            <p className="hero-lead">Reliable household support focused on Laundry Club, Trash Bin Service, and Home Watch across Chicago's south suburbs.</p>
            <div className="hero-actions"><a className="button primary" href="#request">Request Service <ArrowRight size={18} /></a><a className="button secondary" href="#services">Explore Programs</a></div>
            <div className="trust-strip"><span><Check /> Clear communication</span><span><Check /> Consistent service</span><span><Check /> Respect for your home</span></div>
          </div>
          <div className="hero-visual">
            <div className="logo-card clean"><img src={logoFull} alt="South Suburban Household Services" /></div>
            <div className="hero-logo-note"><CalendarDays /><span><b>One neighborhood. One service day.</b> Multiple ways to reclaim your time.</span></div>
          </div>
        </section>

        <section className="service-preview section" id="services">
          <div className="section-heading"><p className="eyebrow">Three focused services</p><h2>Simple services. Dependable routines.</h2><p>Our launch is built around three dependable services: Laundry Club, Trash Bin Service, and Home Watch.</p></div>
          <div className="service-grid">{services.map(({ id, icon: Icon, title, intro, plans }) => <a className="service-card" href={`#${id}`} key={id}><div className="icon-wrap"><Icon /></div><h3>{title}</h3><p>{intro}</p><div><b>{plans[0][2]}</b><span>View program <ArrowRight size={16} /></span></div></a>)}</div>
        </section>

        <section className="home-plans section" id="home-plans">
          <div className="section-heading"><p className="eyebrow">South Suburban Home Plans</p><h2>Bundle recurring services and save.</h2><p>Laundry Club and Trash Bin Service are naturally coordinated around the same Neighborhood Service Day whenever practical. Home Plans make that routine simpler and more affordable.</p></div>
          <div className="home-plan-grid">
            {homePlans.map(plan => (
              <article className={`home-plan-card ${plan.recommended ? 'recommended' : ''}`} key={plan.name}>
                {plan.recommended && <div className="recommended-badge">Recommended</div>}
                <div className="plan-icon"><BadgeDollarSign /></div>
                <h3>{plan.name}</h3>
                <p className="plan-audience">{plan.audience}</p>
                <ul>{plan.includes.map(item => <li key={item}><Check />{item}</li>)}</ul>
                <div className="plan-pricing"><span>Regularly {plan.regular}</span><strong>{plan.price}</strong><b>{plan.savings}</b></div>
                <button className="button primary full" onClick={() => { setSelectedService(plan.name); document.querySelector('#request')?.scrollIntoView({ behavior: 'smooth' }) }}>Choose this plan <ArrowRight size={17} /></button>
              </article>
            ))}
          </div>
          <p className="home-plan-note"><ShieldCheck size={18} /> Home Plan pricing applies to recurring monthly Laundry Club and Trash Bin Service and depends on route capacity. Home Watch is available separately when you travel or need an exterior property check.</p>
        </section>

        <section className="how-section" id="how">
          <div className="how-copy"><p className="eyebrow light">The South Suburban difference</p><h2>Neighborhood Service Days make recurring help easier.</h2><p>Whenever practical, services are aligned with municipal trash schedules. That means less unnecessary driving, more predictable service windows, and a better customer experience.</p><a href="#request" className="text-link">Check route availability <ArrowRight size={17} /></a></div>
          <div className="steps"><article><b>01</b><div><h3>Choose a program</h3><p>Select the recurring household support that fits your needs.</p></div></article><article><b>02</b><div><h3>Confirm your route</h3><p>We match your address to a practical Neighborhood Service Day.</p></div></article><article><b>03</b><div><h3>Enjoy one less worry</h3><p>We communicate clearly, complete the work carefully, and keep your routine simple.</p></div></article></div>
        </section>

        <section className="program-details section" id="pricing">
          <div className="section-heading"><p className="eyebrow">Approved launch programs and pricing</p><h2>Clear options without confusing fine print.</h2><p>Recurring plans are the heart of the business. One-time and off-route options are available where noted.</p></div>
          {services.map(({ id, icon: Icon, title, kicker, intro, highlights, plans, note }, index) => (
            <article className={`program-detail ${index % 2 ? 'reverse' : ''}`} id={id} key={id}>
              <div className="program-copy"><div className="large-icon"><Icon /></div><p className="eyebrow">{kicker}</p><h3>{title}</h3><p className="program-intro">{intro}</p><ul>{highlights.map(item => <li key={item}><Check />{item}</li>)}</ul><button className="inline-request" onClick={() => { setSelectedService(title); document.querySelector('#request')?.scrollIntoView({ behavior: 'smooth' }) }}>Request {title} <ArrowRight size={17} /></button></div>
              <div className="pricing-card">{plans.map(([name, desc, price]) => <div className="price-row" key={name}><div><b>{name}</b><span>{desc}</span></div><strong>{price}</strong></div>)}<p className="pricing-note"><ShieldCheck size={18} />{note}</p></div>
            </article>
          ))}
        </section>

        <section className="about-section" id="about">
          <div className="about-copy"><p className="eyebrow">Why we exist</p><h2>Busy families deserve more time together.</h2><p>South Suburban Household Services focuses on the recurring tasks that quietly consume evenings and weekends. Our goal is to make dependable help affordable, reliable, and easy to use.</p><blockquote>“We build relationships, not transactions—and leave every customer with one less thing to worry about.”</blockquote></div>
          <div className="standards"><article><Clock3 /><h3>Reliability</h3><p>We arrive when we say we will and communicate when conditions change.</p></article><article><MessageCircle /><h3>Communication</h3><p>Clear, friendly updates before, during, and after service.</p></article><article><ShieldCheck /><h3>Respect & Safety</h3><p>Focused service limits protect customers, employees, and property.</p></article><article><HeartHandshake /><h3>Consistency</h3><p>Repeatable standards create trust over the long term.</p></article></div>
        </section>

        <section className="service-area section">
          <div><p className="eyebrow">Launch service area</p><h2>Proudly serving Chicago's south suburbs.</h2><p>Routes will open community by community. Send your address to confirm current availability and your likely Neighborhood Service Day.</p></div><div className="area-card"><MapPin /><div><b>Route availability is expanding</b><span>Join the launch list for your neighborhood.</span></div><a href="#request">Check my address <ArrowRight size={16} /></a></div>
        </section>

        <section className="faq-section section" id="faq">
          <div className="section-heading"><p className="eyebrow">Frequently asked questions</p><h2>Know what to expect before service begins.</h2></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => <article className="faq-item" key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown className={openFaq === index ? 'rotate' : ''} /></button>{openFaq === index && <p>{answer}</p>}</article>)}</div>
        </section>

        <section className="request-section" id="request">
          <div className="request-copy"><p className="eyebrow light">Request service</p><h2>Let us take one recurring chore off your list.</h2><p>Tell us what you need and where you live. We will confirm route availability, answer questions, and explain the next step.</p><div className="contact-box"><Mail /><div><span>Email</span><a href={mailto}>{siteConfig.email}</a></div></div><div className="phone-placeholder"><MessageCircle /><div><span>Business phone</span><a href={`tel:${siteConfig.phoneLink}`}><b>{siteConfig.phone}</b></a><small>Call or text to ask about service availability.</small></div></div></div>
          <form onSubmit={submitRequest}>
            <div className="form-row"><label>Full name<input name="name" autoComplete="name" required /></label><label>Email address<input name="email" type="email" autoComplete="email" required /></label></div>
            <div className="form-row"><label>Phone number <small>(optional)</small><input name="phone" type="tel" autoComplete="tel" /></label><label>Community or service address<input name="location" autoComplete="street-address" required /></label></div>
            <div className="form-row"><label>Program<select name="service" value={selectedService} onChange={e => setSelectedService(e.target.value)} required><option value="">Select a program</option>{homePlans.map(p => <option key={p.name}>{p.name}</option>)}{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label><label>Preferred contact<select name="contact"><option>Email</option><option>Phone call</option><option>Text message</option></select></label></div>
            <label>How can we help?<textarea name="details" rows="5" placeholder="Tell us about the service, schedule, household, or questions you have." /></label>
            <button className="button primary full" type="submit">Prepare Service Request <ArrowRight size={18} /></button>
            <p className="form-note">For the initial launch, this button opens your email application with the request pre-filled. A direct online submission system can be connected later.</p>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-main"><div className="footer-brand"><img src={logoSimple} alt="" /><div><b>{siteConfig.businessName}</b><span>{siteConfig.tagline}</span></div></div><div className="footer-nav"><a href="#services">Programs</a><a href="#home-plans">Home Plans</a><a href="#pricing">Pricing</a><a href="#how">How It Works</a><a href="#faq">FAQ</a><a href="#request">Request Service</a></div></div>
        <div className="footer-bottom"><span>© 2026 {siteConfig.businessName}. All rights reserved.</span><span>Serving {siteConfig.serviceArea}.</span></div>
      </footer>
    </>
  )
}

export default App
