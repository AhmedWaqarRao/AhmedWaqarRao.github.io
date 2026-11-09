import { FC, ReactNode } from "react";

interface PageHeaderProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}

const PageHeader: FC<PageHeaderProps> = ({ icon, title, subtitle }) => (
  <header className="text-center mb-6 sm:mb-8">
    <span className="mx-auto mb-3 grid place-items-center w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30">
      {icon}
    </span>
    <h1 className="page-title text-3xl sm:text-4xl font-bold text-slate-900">{title}</h1>
    {subtitle && <p className="mt-2 max-w-2xl mx-auto text-slate-600">{subtitle}</p>}
    <div className="mt-4 mx-auto h-1 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
  </header>
);

export default PageHeader;
