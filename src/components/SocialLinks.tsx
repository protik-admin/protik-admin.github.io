type Contact = {
  email: string;
  linkedin: string;
  github: string;
};

export default function SocialLinks({ contact }: { contact: Contact }) {
  return (
    <div className="social">
      <a href={`mailto:${contact.email}`}>Email</a>
      <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
    </div>
  );
}
