type Props = { name: string };

export default function Header({ name }: Props) {
  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#top">{name}</a>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
