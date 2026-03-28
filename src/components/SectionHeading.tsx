type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`space-y-4 ${alignment}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title text-3xl text-white">{title}</h2>
      {description ? <p className="text-slate-300">{description}</p> : null}
    </div>
  );
}
