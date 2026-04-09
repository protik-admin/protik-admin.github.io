type Project = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="card" href={project.href} target="_blank" rel="noreferrer">
      <div className="cardTitle">{project.title}</div>
      <div className="cardDesc">{project.description}</div>
      {project.tags?.length ? (
        <div className="tagRow">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      ) : null}
    </a>
  );
}
