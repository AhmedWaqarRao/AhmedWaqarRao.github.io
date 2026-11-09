import { FC } from "react";
import { Users, Mail, Phone, Globe } from "lucide-react";
import Section from "./Section";

const refAccent: Record<string, { bar: string; name: string }> = {
  blue: { bar: "border-blue-500", name: "text-blue-700" },
  green: { bar: "border-emerald-500", name: "text-emerald-700" },
  indigo: { bar: "border-indigo-500", name: "text-indigo-700" },
};

const references = [
  {
    name: "Yu Zhang",
    title: "Professor",
    affiliation:
      "Department of AI Computing System, School of Computer Science, Northwestern Polytechnical University",
    address: "1 Dongxiang Road, Chang’an District, Xi’an, Shaanxi, 710129, P.R. China",
    email: "zhangyu@nwpu.edu.cn",
    phone: "(+86) 13891997511",
    website: "https://yuzhang-nwpu.github.io/yuzhang/",
    relation: "Academic Mentor",
    color: "blue",
  },
  {
    name: "Umar Shahbaz Khan",
    title: "Tenured Associate Professor / Project Director NCRA",
    affiliation:
      "Department of Mechatronics Engineering, College of Electrical & Mechanical Engineering, NUST",
    address: "Peshawar Road, Rawalpindi 46000, Pakistan",
    email: "u.shahbaz@ceme.nust.edu.pk",
    phone: "(+92) 3005533775",
    website: undefined as string | undefined,
    relation: "Former Teacher & Research Supervisor",
    color: "green",
  },
  {
    name: "Hamid Jabbar",
    title: "Head of Department & Associate Professor",
    affiliation:
      "Mechatronics Engineering Department, College of Electrical & Mechanical Engineering, NUST",
    address: "Peshawar Road, Rawalpindi 46000, Pakistan",
    email: "hamid.jabbar@ceme.nust.edu.pk",
    phone: "(+92) 3005274026",
    website: undefined as string | undefined,
    relation: "Department Head & Mentor",
    color: "indigo",
  },
];

const contactLink = "text-indigo-700 hover:underline break-all";

const References: FC = () => (
      <Section title="References" icon={<Users size={20} />}>
        <ul className="grid lg:grid-cols-3 gap-5">
          {references.map((ref) => {
            const accent = refAccent[ref.color];
            return (
              <li
                key={ref.name}
                className={`border-l-4 ${accent.bar} rounded-xl bg-slate-50/70 p-5 card-hover transition`}
              >
                <h3 className={`text-lg font-semibold ${accent.name}`}>{ref.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{ref.title}</p>
                <p className="text-sm text-slate-600">{ref.affiliation}</p>
                <p className="text-sm text-slate-600">{ref.address}</p>

                <div className="mt-3 space-y-1 text-sm break-words">
                  <p>
                    <span className="inline-flex items-center gap-1.5 font-medium text-slate-800"><Mail size={14} /> Email:</span>{" "}
                    <a href={`mailto:${ref.email}`} className={contactLink}>
                      {ref.email}
                    </a>
                  </p>
                  <p>
                    <span className="inline-flex items-center gap-1.5 font-medium text-slate-800"><Phone size={14} /> Phone:</span>{" "}
                    <a href={`tel:${ref.phone.replace(/[^+\d]/g, "")}`} className={contactLink}>
                      {ref.phone}
                    </a>
                  </p>
                  {ref.website && (
                    <p>
                      <span className="inline-flex items-center gap-1.5 font-medium text-slate-800"><Globe size={14} /> Website:</span>{" "}
                      <a
                        href={ref.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={contactLink}
                      >
                        {ref.website}
                      </a>
                    </p>
                  )}
                </div>

                <p className="mt-3 text-sm font-medium text-slate-800">{ref.relation}</p>
              </li>
            );
          })}
        </ul>
      </Section>
);

export default References;
