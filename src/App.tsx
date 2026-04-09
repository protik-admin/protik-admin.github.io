import { content } from "./content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <div className="page">
      <Header name={content.name} />

      <main className="container">
        <section className="hero" id="top">
          <p className="kicker">{content.tagline}</p>
          <h1>{content.name}</h1>
          <p className="lead">{content.about}</p>

          <div className="heroActions">
            <a className="btn" href="#projects">View projects</a>
            <a className="btn btnGhost" href="#contact">Contact</a>
          </div>

          <SocialLinks contact={content.contact} />
        </section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {content.projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <ul className="list">
            {content.education.map((e) => (
              <li key={e.school} className="listItem">
                <div className="listTitle">{e.school}</div>
                <div className="listMeta">{e.degree}</div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <div className="contactCard">
            <p>
              Email:{" "}
              <a href={`mailto:${content.contact.email}`}>
                {content.contact.email}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href={content.contact.linkedin} target="_blank" rel="noreferrer">
                {content.contact.linkedin}
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href={content.contact.github} target="_blank" rel="noreferrer">
                {content.contact.github}
              </a>
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
