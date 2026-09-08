import React from 'react';

export default function SectionHeader({ label, jp, title, side }: { label: string; jp: string; title: React.ReactNode; side?: React.ReactNode }) {
  return (
    <div className="reveal grid md:grid-cols-12 gap-6 items-end mb-12">
      <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-1">
        <span className="label">{label}</span>
        <span className="jp label">{jp}</span>
      </div>
      <h2 className="display h-lg md:col-span-7">{title}</h2>
      {side && <div className="md:col-span-3 md:text-right">{side}</div>}
    </div>
  );
}
