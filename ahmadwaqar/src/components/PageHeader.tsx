import { FC, ReactNode } from "react";

interface PageHeaderProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}

const PageHeader: FC<PageHeaderProps> = ({ icon, title, subtitle }) => (
  <header className="text-center mb-10 sm:mb-12">
    <span className="mx-auto mb-4 grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30">
      {icon}
    </span>
    <h1 className="page-title text-3xl sm:text-4xl font-bold text-slate-900">{title}</h1>
    {subtitle && <p className="mt-3 max-w-2xl mx-auto text-slate-600">{subtitle}</p>}
    <div className="mt-5 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
  </header>
);

export default PageHeader;
