import { FC } from "react";
import { Languages } from "lucide-react";
import Section from "./Section";

const LanguageProficiency: FC = () => (
      <Section title="Language Proficiency" icon={<Languages size={20} />}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 card-hover transition">
            <h3 className="font-semibold text-lg text-slate-900">🇬🇧 English</h3>
            <p className="mt-2 text-sm text-slate-600">
              Fluent – Academic, Professional, and Public Speaking
            </p>
          </div>
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 card-hover transition">
            <h3 className="font-semibold text-lg flex items-center gap-2 text-red-600">
              🇨🇳 Chinese{" "}
              <span className="text-xs bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-semibold">
                HSK-3
              </span>
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Proficient in daily communication and academic interaction. Actively improving towards advanced HSK levels.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 card-hover transition">
            <h3 className="font-semibold text-lg text-slate-900">🇵🇰 Urdu</h3>
            <p className="mt-2 text-sm text-slate-600">
              Native – Strong cultural and professional communication
            </p>
          </div>
        </div>
      </Section>
);

export default LanguageProficiency;
