import { useState } from "react";

const services = [
  {
    icon: "🧺",
    title: "Laundry Pickup & Drop-Off",
    text: "We pick up, wash, dry, fold, and return your laundry—fresh, organized, and ready to put away.",
    note: "Convenient pickup and return"
  },
  {
    icon: "♻️",
    title: "Trash Bin Service",
    text: "Never miss collection day. We bring your bins to the curb and return them after pickup.",
    note: "One-time or recurring service"
  },
  {
    icon: "🏡",
    title: "Property Checks",
    text: "Dependable exterior or interior checks for travelers, seniors, busy families, and homeowners.",
    note: "Clear updates and peace of mind"
  },
  {
    icon: "✨",
    title: "Light Household Help",
    text: "Package retrieval, porch checks, light tidying, small errands, seasonal help, and everyday support.",
    note: "Flexible help when you need it"
  }
];

const reasons = [
  ["Family-owned", "Local service from people who care about your household."],
  ["Simple scheduling", "Tell us what you need and we’ll help create a practical plan."],
  ["Reliable communication", "Clear expectations, timely updates, and respectful service."],
  ["Built for real life", "Flexible support for busy families, seniors, and homeowners."]
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
ZIP code: ${data.get("zip")}
Service: ${data.get("service")}
Preferred timing: ${data.get("timing")}

Details:
${data.get("details")}`
    );

    setSubmitted(true);
    window.location.href =
      `mailto:southsuburbanhouseholdservices@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="South Suburban Household Services home">
            <span className="brand-mark">SS</span>
            <span className="brand-copy">
              <strong>South Suburban</strong>
              <small>Household Services</small>
            </span>
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
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#service-area" onClick={() => setMenuOpen(false)}>Service Area</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a className="button button-small" href="#request" onClick={() => setMenuOpen(false)}>
              Request Service
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-shape hero-shape-one" />
          <div className="hero-shape hero-shape-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Local • Family-Owned • South Suburbs</div>
              <h1>Everyday household help that gives you time back.</h1>
              <p className="hero-lead">
                Reliable laundry pickup, trash bin service, property checks,
                and practical home support for busy families, seniors, and homeowners.
              </p>
              <div className="hero-actions">
                <a className="button" href="#request">Request Service</a>
                <a className="button button-secondary" href="#services">Explore Services</a>
              </div>
              <div className="trust-row">
                <span>✓ Friendly local service</span>
                <span>✓ Flexible scheduling</span>
                <span>✓ Clear communication</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-label">How can we help?</div>
              <div className="quick-service"><span>🧺</span><div><strong>Laundry</strong><small>Pickup, wash, dry, fold & return</small></div></div>
              <div className="quick-service"><span>♻️</span><div><strong>Trash bins</strong><small>Curb placement & return</small></div></div>
              <div className="quick-service"><span>🏡</span><div><strong>Property checks</strong><small>Dependable home updates</small></div></div>
              <div className="quick-service"><span>✨</span><div><strong>Everyday help</strong><small>Small tasks made easier</small></div></div>
              <a href="#request" className="text-link">Tell us what you need →</a>
            </div>
          </div>
        </section>

        <section className="section intro-strip">
          <div className="container intro-grid">
            <div>
              <span className="section-kicker">Help that fits your life</span>
              <h2>One trusted local service for the tasks that keep piling up.</h2>
            </div>
            <p>
              Whether you need weekly support or occasional help, we make it easier
              to keep your household moving without adding another complicated service
              to manage.
            </p>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Our services</span>
              <h2>Practical support, clearly explained.</h2>
              <p>Start with one service or combine several into a household support plan.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-note">{service.note}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-badge">Serving our neighbors with care</div>
              <div className="about-panel">
                <span className="large-initials">SS</span>
                <p>Reliable help for the households that make the south suburbs home.</p>
              </div>
            </div>
            <div>
              <span className="section-kicker">About us</span>
              <h2>Family-owned service built around trust and follow-through.</h2>
              <p>
                South Suburban Household Services was created to help local families,
                seniors, and homeowners handle important everyday tasks with less stress.
                We believe good service should feel personal, dependable, and easy to arrange.
              </p>
              <p>
                Our goal is simple: show up, communicate clearly, treat every home with
                respect, and make life a little easier for the people we serve.
              </p>
              <a className="text-link" href="#request">Start a conversation →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">Why choose us</span>
              <h2>Professional enough to trust. Personal enough to care.</h2>
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
                Our initial service area is centered around Blue Island and nearby
                south-suburban communities. Availability may vary by service and schedule.
              </p>
              <p className="area-note">
                Not sure whether your address is covered? Send a request and include your ZIP code.
              </p>
            </div>
            <div className="area-card">
              <strong>Initial service area</strong>
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
              <h2>Simple answers before you schedule.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>Can I request more than one service?</summary>
                <p>Yes. Tell us everything you need and we can discuss the most practical way to combine services.</p>
              </details>
              <details>
                <summary>Do you offer recurring service?</summary>
                <p>Recurring availability will depend on your location, service type, and preferred schedule.</p>
              </details>
              <details>
                <summary>How do I receive a price?</summary>
                <p>Complete the request form with your service details. We’ll review the request and follow up before anything is scheduled.</p>
              </details>
              <details>
                <summary>Is the business phone available yet?</summary>
                <p>Our phone line is being finalized. Email and the website request form are currently the best ways to reach us.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="section request-section" id="request">
          <div className="container request-grid">
            <div className="request-copy">
              <span className="section-kicker light">Request service</span>
              <h2>Tell us what would make your week easier.</h2>
              <p>
                Share a few details below. Submitting the form does not confirm an
                appointment—we’ll review your request and follow up.
              </p>
              <div className="contact-card">
                <span>Email</span>
                <a href="mailto:southsuburbanhouseholdservices@gmail.com">
                  southsuburbanhouseholdservices@gmail.com
                </a>
                <small>Business phone coming soon</small>
              </div>
            </div>

            <form className="request-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Full name
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  Phone
                  <input name="phone" type="tel" autoComplete="tel" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  ZIP code
                  <input name="zip" type="text" inputMode="numeric" maxLength="10" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Service needed
                  <select name="service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Laundry Pickup & Drop-Off</option>
                    <option>Trash Bin Service</option>
                    <option>Property Check</option>
                    <option>Light Household Help</option>
                    <option>Multiple Services</option>
                    <option>Not Sure Yet</option>
                  </select>
                </label>
                <label>
                  Preferred timing
                  <select name="timing" required defaultValue="">
                    <option value="" disabled>Select timing</option>
                    <option>As soon as possible</option>
                    <option>Within one week</option>
                    <option>Within two weeks</option>
                    <option>Planning ahead</option>
                  </select>
                </label>
              </div>
              <label>
                Tell us what you need
                <textarea
                  name="details"
                  rows="5"
                  placeholder="Include the type of help, frequency, preferred days, and any important details."
                  required
                />
              </label>
              <label className="consent">
                <input type="checkbox" required />
                <span>I agree to be contacted about this service request.</span>
              </label>
              <button className="button form-button" type="submit">Prepare My Request</button>
              <p className="form-note">
                This starter form opens your email app with the request pre-filled.
                Secure direct website submission will be added next.
              </p>
              {submitted && (
                <p className="success-message" role="status">
                  Your email app should now open with the request prepared.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">SS</span>
              <span className="brand-copy">
                <strong>South Suburban</strong>
                <small>Household Services</small>
              </span>
            </div>
            <p>Laundry, trash bin service, property checks, and everyday home help.</p>
          </div>
          <div className="footer-links">
            <strong>Explore</strong>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#service-area">Service Area</a>
            <a href="#request">Request Service</a>
          </div>
          <div className="footer-links">
            <strong>Contact</strong>
            <a href="mailto:southsuburbanhouseholdservices@gmail.com">Email us</a>
            <span>Blue Island, Illinois</span>
            <span>Phone coming soon</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} South Suburban Household Services</span>
          <span>Family-owned in Chicago’s south suburbs</span>
        </div>
      </footer>
    </>
  );
}

export default App;
