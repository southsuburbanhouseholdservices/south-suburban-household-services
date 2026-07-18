import { useState } from "react";
import logoFull from "./assets/logo-full.png";
import logoSimple from "./assets/logo-simple.png";

const programs = [
  {
    icon: "🧺",
    title: "Laundry Club",
    text: "Our flagship recurring service. We pick up, wash, dry, fold, and return your laundry on your assigned Neighborhood Service Day.",
    note: "Plans from $39/month"
  },
  {
    icon: "♻️",
    title: "Trash Bin Service",
    text: "We place enrolled trash, recycling, and yard-waste bins at the curb before collection and return them afterward.",
    note: "Weekly plans from $39/month"
  },
  {
    icon: "🍂",
    title: "Seasonal Home Care",
    text: "Route-based spring, summer, fall, and winter exterior care focused on safe, repeatable seasonal tasks.",
    note: "Visits from $45"
  },
  {
    icon: "🏡",
    title: "Home Watch",
    text: "Scheduled exterior visual checks while you are away, including photos and a digital visit summary.",
    note: "Visits from $39"
  }
];

const reasons = [
  ["Reliable", "We arrive when we say we will and communicate before customers have to ask."],
  ["Professional", "Every service follows clear standards designed to protect your property and privacy."],
  ["Route-based", "Neighborhood Service Days reduce unnecessary driving and help keep service dependable."],
  ["Family-owned", "We build long-term relationships and treat every household with respect."]
];

const pricingGroups = [
  {
    title: "Laundry Club",
    rows: [
      ["Monthly Refresh", "1 pickup/month • 1 bag", "$39/mo"],
      ["Every Other Week Club", "2 pickups/month • 1 bag each", "$75/mo"],
      ["Kids Laundry Club", "Weekly • ages 12 & under • 1 bag", "$119/mo"],
      ["Weekly Laundry Club", "Weekly • 1 bag", "$129/mo"],
      ["Family Laundry Club", "Weekly • 2 bags", "$199/mo"]
    ]
  },
  {
    title: "Trash Bin Service",
    rows: [
      ["Standard", "Up to 2 bins • weekly", "$39/mo"],
      ["Large Household", "Up to 4 bins • weekly", "$49/mo"],
      ["Additional Bin", "+1 enrolled bin", "+$5/mo"],
      ["Off-Route Visit", "Special request, when available", "+$15"]
    ]
  },
  {
    title: "Seasonal Home Care",
    rows: [
      ["Spring Visit", "Routine exterior seasonal tasks", "$59"],
      ["Summer Visit", "Light exterior upkeep", "$49"],
      ["Fall Visit", "Front-yard leaf cleanup and prep", "$89"],
      ["Winter Visit", "Qualifying snow service at 2+ inches", "$45"],
      ["Seasonal Essentials", "1 visit each season", "$229/year"]
    ]
  },
  {
    title: "Home Watch",
    rows: [
      ["One-Time Home Watch", "Single scheduled exterior visit", "$39"],
      ["Vacation Watch", "Up to 4 visits within 30 days", "$129"],
      ["Monthly Home Watch", "2 scheduled visits per month", "$79/mo"],
      ["Off-Route Visit", "Outside Neighborhood Service Day", "+$20"]
    ]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`New service request: ${data.get("service")}`);
    const body = encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Service address / ZIP: ${data.get("address")}
Municipal trash day: ${data.get("trashDay")}
Program: ${data.get("service")}
Preferred timing: ${data.get("timing")}

Details:
${data.get("details")}`
    );

    setSubmitted(true);
    window.location.href =
      `mailto:southsuburbanhouseholdservices@gmail.com?subject=${subject}&body=${body}`;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="South Suburban Household Services home">
            <img className="header-logo" src={logoSimple} alt="South Suburban Household Services" />
          </a>

          <button
            className="menu-button"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#programs" onClick={closeMenu}>Programs</a>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="button button-small" href="#request" onClick={closeMenu}>Request Service</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Local • Family-Owned • Chicago South Suburbs</div>
              <h1>Reliable help for everyday home life.</h1>
              <p className="hero-lead">
                Dependable recurring household services that give busy families, seniors,
                travelers, and homeowners more time for what matters most.
              </p>
              <div className="hero-actions">
                <a className="button" href="#request">Request Service</a>
                <a className="button button-secondary" href="#programs">Explore Programs</a>
              </div>
              <div className="trust-row">
                <span>✓ Clear communication</span>
                <span>✓ Predictable service days</span>
                <span>✓ Respectful local service</span>
              </div>
            </div>

            <div className="hero-card">
              <img className="hero-logo" src={logoFull} alt="South Suburban Household Services — Reliable help for everyday home life" />
              <div className="hero-card-label">Our approved launch programs</div>
              {programs.map((program) => (
                <div className="quick-service" key={program.title}>
                  <span>{program.icon}</span>
                  <div><strong>{program.title}</strong><small>{program.note}</small></div>
                </div>
              ))}
              <a href="#request" className="text-link">Check availability for your address →</a>
            </div>
          </div>
        </section>

        <section className="section intro-strip">
          <div className="container intro-grid">
            <div>
              <span className="section-kicker light">The Neighborhood Service Day</span>
              <h2>One neighborhood. One service day. Multiple programs.</h2>
            </div>
            <p>
              Whenever practical, we organize service around each community’s municipal trash
              collection schedule. This route-based approach reduces unnecessary driving,
              improves reliability, and helps keep pricing affordable.
            </p>
          </div>
        </section>

        <section className="section" id="programs">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Our programs</span>
              <h2>Focused household support designed to be dependable.</h2>
              <p>We intentionally stay within a clear service scope so every program can be delivered safely and consistently.</p>
            </div>
            <div className="service-grid">
              {programs.map((program) => (
                <article className="service-card" key={program.title}>
                  <div className="service-icon">{program.icon}</div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                  <span className="service-note">{program.note}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section how-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">How it works</span>
              <h2>Simple from the first request.</h2>
            </div>
            <div className="steps-grid">
              <article><span>01</span><h3>Choose a program</h3><p>Tell us which approved program fits your household.</p></article>
              <article><span>02</span><h3>We check your address</h3><p>We confirm service-area fit, municipal trash day, and route capacity.</p></article>
              <article><span>03</span><h3>Your service day is assigned</h3><p>You receive clear written instructions before the first visit.</p></article>
              <article><span>04</span><h3>We handle the recurring task</h3><p>We complete the work, document it when required, and communicate clearly.</p></article>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Launch pricing</span>
              <h2>Clear starting prices with no complicated sales process.</h2>
              <p>Final availability depends on service area, route capacity, property access, and approved scope.</p>
            </div>
            <div className="pricing-grid">
              {pricingGroups.map((group) => (
                <article className="pricing-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="price-list">
                    {group.rows.map(([name, details, price]) => (
                      <div className="price-row" key={`${group.title}-${name}`}>
                        <div><strong>{name}</strong><small>{details}</small></div>
                        <span>{price}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <p className="pricing-note">One-time Laundry Club service and approved add-ons are also available. Request service for a complete recommendation.</p>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-badge">Serving our neighbors with care</div>
              <div className="about-panel logo-panel">
                <img className="about-logo" src={logoFull} alt="South Suburban Household Services logo" />
                <p>We leave every customer with one less thing to worry about.</p>
              </div>
            </div>
            <div>
              <span className="section-kicker">About us</span>
              <h2>Built to give local households more time for what matters.</h2>
              <p>
                South Suburban Household Services was founded on one simple belief: busy families
                deserve more time together. We focus on recurring household tasks that quietly consume
                evenings and weekends.
              </p>
              <p>
                Our promise is to be reliable, friendly, professional, honest, consistent, respectful,
                and easy to work with. We grow carefully and only add services that are safe, repeatable,
                trainable, profitable, and consistent with our mission.
              </p>
              <a className="text-link" href="#request">Check availability →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">The South Suburban Standard</span>
              <h2>Dependability is the service.</h2>
            </div>
            <div className="reason-grid">
              {reasons.map(([title, text], index) => (
                <div className="reason-card" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section service-area-section" id="service-area">
          <div className="container service-area-grid">
            <div>
              <span className="section-kicker light">Service area</span>
              <h2>Proudly serving Chicago’s south suburbs.</h2>
              <p>
                Our launch routes are centered around Blue Island and nearby south-suburban
                communities. Availability varies by program, municipal collection schedule, and route capacity.
              </p>
              <p className="area-note">Send your address and municipal trash day so we can confirm the best Neighborhood Service Day.</p>
            </div>
            <div className="area-card">
              <strong>Initial route focus</strong>
              <div className="area-list">
                <span>Blue Island</span>
                <span>Alsip</span>
                <span>Calumet Park</span>
                <span>Posen</span>
                <span>Robbins</span>
                <span>Nearby communities</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-grid">
            <div>
              <span className="section-kicker">Frequently asked</span>
              <h2>Important details before you enroll.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>What is a Neighborhood Service Day?</summary>
                <p>It is your assigned recurring route day. Whenever practical, it is organized around your municipality’s trash collection schedule.</p>
              </details>
              <details>
                <summary>Can I combine programs?</summary>
                <p>Yes. Laundry Club, Trash Bin Service, Seasonal Home Care, and Home Watch can be coordinated on the same route when capacity allows.</p>
              </details>
              <details>
                <summary>Does Home Watch include entering my home?</summary>
                <p>No. The approved launch service is an exterior visual check with photographs and a factual digital summary. It is not a home inspection or security service.</p>
              </details>
              <details>
                <summary>What work is not included in Seasonal Home Care?</summary>
                <p>We do not perform landscaping, mowing, tree removal, roof or gutter work, pressure washing, driveway plowing, heavy debris hauling, exterior repairs, or home inspections.</p>
              </details>
              <details>
                <summary>Can recurring service be paused?</summary>
                <p>Laundry Club and Trash Bin Service may be placed on a vacation hold at no charge when notice is provided.</p>
              </details>
              <details>
                <summary>Does submitting a request guarantee a time slot?</summary>
                <p>No. We first confirm service-area eligibility, approved scope, municipal trash day, and route capacity before promising a service date.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="section request-section" id="request">
          <div className="container request-grid">
            <div className="request-copy">
              <span className="section-kicker light">Request service</span>
              <h2>Let us check availability for your household.</h2>
              <p>
                Share your address, municipal trash day, and the program you are interested in.
                We will review route capacity and respond with the next step.
              </p>
              <div className="contact-card">
                <span>Email</span>
                <a href="mailto:southsuburbanhouseholdservices@gmail.com">southsuburbanhouseholdservices@gmail.com</a>
                <small>Business phone coming soon</small>
              </div>
            </div>

            <form className="request-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Full name<input name="name" type="text" autoComplete="name" required /></label>
                <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
              </div>
              <div className="form-row">
                <label>Email<input name="email" type="email" autoComplete="email" required /></label>
                <label>Service address / ZIP<input name="address" type="text" autoComplete="street-address" required /></label>
              </div>
              <div className="form-row">
                <label>
                  Program
                  <select name="service" required defaultValue="">
                    <option value="" disabled>Select a program</option>
                    <option>Laundry Club</option>
                    <option>Trash Bin Service</option>
                    <option>Seasonal Home Care</option>
                    <option>Home Watch</option>
                    <option>Multiple Programs</option>
                    <option>Not Sure Yet</option>
                  </select>
                </label>
                <label>
                  Municipal trash day
                  <select name="trashDay" required defaultValue="">
                    <option value="" disabled>Select a day</option>
                    <option>Monday</option><option>Tuesday</option><option>Wednesday</option>
                    <option>Thursday</option><option>Friday</option><option>Saturday</option>
                    <option>Not sure</option>
                  </select>
                </label>
              </div>
              <label>
                Preferred timing
                <select name="timing" required defaultValue="">
                  <option value="" disabled>Select timing</option>
                  <option>As soon as route capacity allows</option>
                  <option>Within the next two weeks</option>
                  <option>Next month</option>
                  <option>Planning ahead</option>
                </select>
              </label>
              <label>
                Tell us what you need
                <textarea name="details" rows="5" placeholder="Include frequency, number of laundry bags or bins, travel dates, seasonal needs, access notes, or questions." required />
              </label>
              <label className="consent">
                <input type="checkbox" required />
                <span>I agree to be contacted about this service request.</span>
              </label>
              <button className="button form-button" type="submit">Prepare My Request</button>
              <p className="form-note">For this launch version, the form opens your email app with the request filled in.</p>
              {submitted && <p className="success-message" role="status">Your email app should now open with the request prepared.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand"><img className="footer-logo" src={logoSimple} alt="South Suburban Household Services" /></div>
            <p>Laundry Club, Trash Bin Service, Seasonal Home Care, and Home Watch.</p>
          </div>
          <div className="footer-links">
            <strong>Explore</strong>
            <a href="#programs">Programs</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-links">
            <strong>Contact</strong>
            <a href="mailto:southsuburbanhouseholdservices@gmail.com">Email us</a>
            <span>Blue Island, Illinois</span>
            <a href="#request">Request Service</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} South Suburban Household Services</span>
          <span>Reliable help for everyday home life.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
