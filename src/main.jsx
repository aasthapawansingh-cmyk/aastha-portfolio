import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check, Code2, Database,
  Github, Globe2, Layers3, Mail, Menu, MessageCircle, ShieldCheck, Sparkles,
  Terminal, X, Zap, Bot, Workflow, Server, Send, ExternalLink
} from 'lucide-react';
import './styles.css';

const careSyncUrl = 'https://hospital-frontend-beta-six.vercel.app/';
const githubUrl = 'https://github.com/aasthapawansingh-cmyk/Hospital_Management_Project';
const githubProfile = 'https://github.com/aasthapawansingh-cmyk';
const socialBackendUrl = 'https://lnkd.in/dT4fK9hX';
const email = 'aasthapawansingh@gmail.com';

const services = [
  { n: '01', icon: Bot, title: 'AI Integration', tag: 'AI APIs · Chat interfaces', desc: 'Add useful AI capabilities to an existing website or application using suitable AI APIs and services.' },
  { n: '02', icon: Globe2, title: 'Website Development', tag: 'Responsive · React', desc: 'Build modern, responsive business websites, landing pages, and portfolio experiences designed around your goals.' },
  { n: '03', icon: Server, title: 'Backend Development', tag: 'Java · Spring Boot', desc: 'Develop structured REST APIs, authentication flows, database-backed features, and backend improvements.' },
  { n: '04', icon: Workflow, title: 'API & Database Integration', tag: 'REST · SQL · Integration', desc: 'Connect frontend experiences to backend services, databases, and third-party APIs, with practical debugging support.' },
];

const skills = {
  'Backend': ['Java', 'Spring Boot', 'Spring Security', 'Spring MVC', 'Hibernate ORM', 'REST APIs', 'AOP'],
  'Frontend': ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  'Databases': ['PostgreSQL', 'MySQL', 'Redis', 'JDBC'],
  'Security & Tools': ['JWT', 'RBAC', 'BCrypt', 'Docker', 'Git', 'Postman', 'Swagger', 'Vercel', 'Railway'],
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: 'AI integration', details: '' });
  const [formError, setFormError] = useState('');
  const [formReady, setFormReady] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const submitContact = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      setFormError('Please complete your name, email, and project details.');
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry: ${form.service}`);
    const body = encodeURIComponent(`Hi Aastha,\n\nI'm ${form.name} (${form.email}).\nService: ${form.service}\n\nProject details:\n${form.details}`);
    setFormError('');
    setFormReady(true);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return <>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">A<span>.</span></span><span>Aastha Singh<small>DEVELOPER PORTFOLIO</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Services', 'Projects', 'Skills', 'About', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </div>
      </nav>
    </header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO FREELANCE PROJECTS</div>
          <h1>Building digital<br/>experiences with <span className="gradient-text">code & AI.</span></h1>
          <p className="hero-subtitle">Java Backend Developer <span>·</span> AI Integration <span>·</span> Web Development</p>
          <p className="hero-description">I build responsive websites, reliable backend systems, and practical integrations that turn ideas into working digital products.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Discuss your project <ArrowUpRight size={17}/></a>
            <a className="button button-quiet" href="#projects">Explore my work <ArrowDownRight size={17}/></a>
          </div>
          <div className="hero-proof"><div className="proof-icon"><Code2 size={17}/></div><div><strong>Built with care, from UI to API</strong><span>Thoughtful interfaces. Structured backends.</span></div></div>
        </div>
        <div className="hero-art" aria-label="Abstract developer illustration">
          <div className="art-orbit orbit-a"></div><div className="art-orbit orbit-b"></div>
          <div className="art-core"><div className="core-glow"></div><div className="core-symbol"><Braces size={62} strokeWidth={1.25}/></div><span className="core-caption">BUILD · INTEGRATE · IMPROVE</span></div>
          <div className="float-card float-java"><span className="mini-icon java">J</span><div><strong>Java + Spring</strong><small>Backend systems</small></div><Check size={15} className="float-check"/></div>
          <div className="float-card float-ai"><span className="mini-icon ai"><Sparkles size={17}/></span><div><strong>AI Integration</strong><small>Ideas into features</small></div></div>
          <div className="float-card float-react"><span className="mini-icon react"><Code2 size={18}/></span><div><strong>React.js</strong><small>Responsive UI</small></div></div>
          <div className="art-label"><span>01</span> FULL-STACK THINKING</div>
        </div>
        <a className="scroll-cue" href="#services"><span className="scroll-line"></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="section container" id="services">
        <div className="section-head"><div><div className="eyebrow">WHAT I CAN HELP WITH</div><h2>Useful solutions.<br/><span className="muted-heading">Built for real needs.</span></h2></div><p>From the first interface to the API behind it, I focus on making digital products clear, functional, and maintainable.</p></div>
        <div className="service-grid">{services.map(({n, icon: Icon, title, tag, desc}) => <article className="service-card" key={n}><div className="service-top"><span className="service-icon"><Icon size={21}/></span><span className="service-number">{n}</span></div><h3>{title}</h3><p>{desc}</p><div className="service-bottom"><span>{tag}</span><a href="#contact" aria-label={`Discuss ${title}`}><ArrowUpRight size={18}/></a></div></article>)}</div>
      </section>

      <section className="section projects-section" id="projects"><div className="container">
        <div className="section-head"><div><div className="eyebrow">SELECTED WORK</div><h2>Projects that show<br/><span className="muted-heading">how I build.</span></h2></div><p>A selection of personal development projects demonstrating backend architecture, API design, and application integration.</p></div>
        <article className="project-card project-featured">
          <div className="project-visual caresync-visual"><div className="visual-top"><span className="visual-brand"><span className="visual-brand-icon"><ShieldCheck size={17}/></span> CareSync</span><span className="visual-pill"><span className="status-dot"/> PROJECT EVOLUTION</span></div><div className="mock-dashboard"><aside><span className="dash-logo">C</span><i></i><i></i><i></i><i></i></aside><div className="dash-main"><div className="dash-greeting">Healthcare management <span>✦</span></div><div className="dash-stats"><div><small>Patients</small><b>Management</b><span className="dash-bar"></span></div><div><small>Appointments</small><b>Scheduling</b><span className="dash-bar short"></span></div></div><div className="dash-list"><span></span><span></span><span></span></div></div></div><div className="visual-caption"><span>SPRING BOOT</span><span>REACT</span><span>JWT SECURITY</span><span>POSTGRESQL</span></div></div>
          <div className="project-content"><div className="project-label"><span className="project-index">01 / FULL-STACK APPLICATION</span><span className="project-status">Deployed</span></div><h3>CareSync</h3><p>A deployed hospital management system built with Java, Spring Boot, React.js, and PostgreSQL. Its appointments page includes AI-assisted clinical visit summary drafting from clinician-provided notes using the Groq API.</p><div className="feature-list"><span><Check size={15}/> JWT access & refresh tokens</span><span><Check size={15}/> Role-based access for Admin, Doctor & Patient</span><span><Check size={15}/> Appointment management & double-booking checks</span><span><Check size={15}/> Pagination, validation & audit logging</span><span><Check size={15}/> AI-assisted visit summary drafts from clinician-provided notes using the Groq API.</span></div><div className="ai-note"><Sparkles size={17}/><span><strong>AI Visit Summary Draft</strong><small>Generated drafts require clinician review and do not replace clinical judgment.</small></span><span className="in-progress">TESTING</span></div><div className="tag-row"><span>Java</span><span>Spring Boot</span><span>React.js</span><span>JWT</span><span>PostgreSQL</span></div><div className="project-actions"><a className="text-link" href={careSyncUrl} target="_blank" rel="noreferrer">Live application <ExternalLink size={15}/></a><a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">Source code <Github size={15}/></a></div></div>
        </article>
        <article className="project-card project-secondary">
          <div className="social-visual"><div className="social-window"><div className="window-dots"><i></i><i></i><i></i><span>social-api.java</span></div><pre><code><span className="code-purple">@RestController</span>{'\n'}<span className="code-blue">public class</span> PostController {'{\n'}  <span className="code-purple">@GetMapping</span>(<span className="code-green">"/posts"</span>){'\n'}  <span className="code-blue">public</span> Page&lt;Post&gt; getPosts() {'{\n'}    <span className="code-blue">return</span> postService.findAll();{'\n'}  {'}\n}'}</code></pre></div><div className="redis-chip"><Database size={15}/> Redis-backed features</div></div>
          <div className="project-content"><div className="project-label"><span className="project-index">02 / BACKEND PROJECT</span><span className="project-status status-neutral">API ENGINEERING</span></div><h3>Social Media Backend</h3><p>A Spring Boot backend for social features, focused on structured APIs, nested discussions, engagement-based ranking, and abuse prevention.</p><div className="feature-list"><span><Check size={15}/> REST APIs for posts and nested comments</span><span><Check size={15}/> Multi-level comment threading</span><span><Check size={15}/> Redis-based ranking and request cooldowns</span></div><div className="tag-row"><span>Java</span><span>Spring Boot</span><span>Redis</span><span>MySQL</span></div><div className="project-actions"><a className="text-link" href={socialBackendUrl} target="_blank" rel="noreferrer">Project link <ExternalLink size={15}/></a></div></div>
        </article>
      </div></section>

      <section className="section container" id="skills"><div className="section-head"><div><div className="eyebrow">TOOLS OF THE TRADE</div><h2>A practical<br/><span className="muted-heading">technical toolkit.</span></h2></div><p>I use these technologies to build application features, connect systems, and troubleshoot development issues.</p></div><div className="skills-layout"><div className="skills-intro"><div className="skills-emblem"><Terminal size={29}/></div><h3>From interface<br/>to infrastructure.</h3><p>My core strength is backend-focused development, supported by frontend and database skills to help deliver more complete solutions.</p><div className="skill-highlight"><Zap size={17}/><span>Backend-first. Product-minded.</span></div></div><div className="skill-groups">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h4>{group}</h4><div className="skill-pills">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

      <section className="about-section" id="about"><div className="container about-layout"><div className="about-visual"><div className="portrait-placeholder"><div className="portrait-monogram">AS<span>.</span></div><span className="portrait-caption">DEVELOPER · BUILDER · LEARNER</span><div className="portrait-corner corner-tl"></div><div className="portrait-corner corner-br"></div></div><div className="about-floating"><span className="about-floating-icon"><Layers3 size={18}/></span><span><strong>Built with intention</strong><small>Clean, maintainable solutions</small></span></div></div><div className="about-copy"><div className="eyebrow">A LITTLE ABOUT ME</div><h2>Curious by nature.<br/><span className="muted-heading">Focused on building.</span></h2><p>I'm Aastha Singh, a Computer Science engineering student focused on Java backend development, full-stack applications, and AI integration.</p><p>I enjoy building practical applications with Spring Boot, REST APIs, databases, authentication systems, and React. I'm expanding my capabilities to help businesses integrate AI into their digital products and build reliable websites.</p><div className="about-facts"><div><small>EDUCATION</small><strong>B.Tech, Computer Science</strong><span>SIRT, Bhopal · Pursuing</span></div><div><small>CERTIFICATION</small><strong>NPTEL Programming in Java</strong><span>86% · IIT Kharagpur</span></div></div><a className="text-link" href={githubProfile} target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16}/></a></div></div></section>

      <section className="contact-section section container" id="contact"><div className="contact-panel"><div className="contact-copy"><div className="eyebrow"><span className="status-dot"/> LET'S MAKE SOMETHING USEFUL</div><h2>Have an idea?<br/><span className="gradient-text">Let's build it.</span></h2><p>Tell me what you're working on. Whether it's a website, backend API, or AI integration, let's talk through the next step.</p><a className="contact-email" href={`mailto:${email}`}><Mail size={18}/>{email}<ArrowUpRight size={16}/></a><div className="contact-socials"><a href={githubProfile} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><span className="social-divider"></span><span className="availability"><span className="status-dot"/> Available for enquiries</span></div></div>
        <form className="contact-form" onSubmit={submitContact} noValidate><div className="form-heading"><span>START A CONVERSATION</span><MessageCircle size={18}/></div><label>Your name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="How should I address you?" autoComplete="name"/></label><label>Email address<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@company.com" autoComplete="email"/></label><label>What do you need?<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option>AI integration</option><option>Website development</option><option>Java / Spring Boot backend</option><option>API or database integration</option><option>Something else</option></select></label><label>Project details<textarea rows="3" value={form.details} onChange={e=>setForm({...form,details:e.target.value})} placeholder="A few details about your project..."/></label>{formError && <p className="form-message error">{formError}</p>}{formReady && <p className="form-message">Your email app should open with your message prepared. Send it to complete the enquiry.</p>}<button className="button button-primary submit-button" type="submit">Prepare enquiry <Send size={16}/></button><small className="form-footnote">This form opens your email app; it does not store your information.</small></form>
      </div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>Aastha Singh<small>DEVELOPER PORTFOLIO</small></span></a><p>Building thoughtful digital experiences, one feature at a time.</p><div className="footer-right"><a href="#home">Back to top <ArrowUpRight size={14}/></a><span>© {new Date().getFullYear()} Aastha Singh</span></div></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);