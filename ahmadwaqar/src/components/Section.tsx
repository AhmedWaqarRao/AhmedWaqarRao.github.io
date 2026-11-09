import { FC, ReactNode } from "react";

const Section: FC<{ title: string; icon: ReactNode; children: ReactNode }> = ({
  title,
  icon,
  children,
}) => (
  <section className="card p-6 sm:p-8 reveal">
    <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
      <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/30">
        {icon}
      </span>
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
