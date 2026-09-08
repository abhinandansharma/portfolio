import React from 'react';
import { novyteTable } from '../data';
import { ArrowUpRight } from './Icons';

export default function Now() {
  return (
    <section id="now" className="section">
      <div className="wrap">
        <div className="grid md:grid-cols-12 gap-6 reveal">
          <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-1">
            <span className="label">Now</span>
            <span className="jp label">現在</span>
          </div>
          <p className="display h-lg red md:col-span-10">
            First engineering hire at Novyte, building <span className="serif" style={{ color: 'var(--fg)' }}>AI for materials discovery</span> from a blank repo.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-x-6 gap-y-10 mt-16">
          <div className="md:col-span-2 md:col-start-3 reveal" style={{ ['--i' as string]: 1 }}>
            <span className="paren">Novyte</span>
          </div>
          <div className="md:col-span-5 reveal" style={{ ['--i' as string]: 2 }}>
            <p className="fg-2 leading-relaxed">
              Materials R&amp;D still runs on intuition and hundred-trial campaigns. Novyte turns literature, retrosynthesis and
              experiment planning into one loop that learns from every result. I own the platform: the FastAPI and PostgreSQL
              backend, the React product surface, and the engineering standards the team grows on. I built for another materials
              informatics company, Polymerize, so the domain is familiar. Building it from a blank repository is the new part.
            </p>
            <table className="w-full mt-6 text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead className="sr-only">
                <tr><th scope="col">Task</th><th scope="col">Before</th><th scope="col">With Novyte</th></tr>
              </thead>
              <tbody>
                {novyteTable.map((r) => (
                  <tr key={r.task} style={{ borderTop: '1px solid var(--line)' }}>
                    <td className="py-2.5 pr-3 fg-2">{r.task}</td>
                    <td className="py-2.5 pr-3 muted line-through whitespace-nowrap">{r.before}</td>
                    <td className="py-2.5 text-right display text-[1.05rem] red whitespace-nowrap">{r.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a href="https://novyte.ai" target="_blank" rel="noopener noreferrer" className="arrow mt-5">novyte.ai <ArrowUpRight /></a>
          </div>

          <div className="md:col-span-2 md:col-start-3 reveal" style={{ ['--i' as string]: 3 }}>
            <span className="paren">Independent, 2024–25</span>
          </div>
          <div className="md:col-span-5 reveal" style={{ ['--i' as string]: 4 }}>
            <p className="fg-2 leading-relaxed">
              Before Novyte I worked independently. I built a patient-records app for doctors that uses Tesseract OCR to turn
              scanned prescriptions and reports into structured, searchable records, and did platform and product engineering
              for MASQ: a privacy browser with a decentralized multi-hop VPN and independent search built on Timpi.
            </p>
            <a href="https://www.masqbrowser.com" target="_blank" rel="noopener noreferrer" className="arrow mt-5">masqbrowser.com <ArrowUpRight /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
