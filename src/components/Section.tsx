import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id: string;
  title: string;
}>;

export default function Section({ id, title, children }: Props) {
  return (
    <section className="section" id={id}>
      <div className="sectionHeader">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
