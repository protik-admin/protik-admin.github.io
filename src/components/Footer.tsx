export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <span>© {new Date().getFullYear()} Protik</span>
        <span className="footerNote">Built with Vite + React</span>
      </div>
    </footer>
  );
}
