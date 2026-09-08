import React from 'react';

/** The logo: a ninja hood on a red tile. Colors are fixed so the mark reads the same in both themes. */
export default function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" aria-hidden="true" focusable="false">
      <defs><clipPath id="mark-tile"><rect width="512" height="512" rx="112"/></clipPath></defs>

  <rect width="512" height="512" rx="112" fill="#e0202a"/>
  <g clipPath="url(#mark-tile)">
    <path d="M256 78 C156 78 100 154 100 254 L100 540 L412 540 L412 254 C412 154 356 78 256 78 Z" fill="#0b0b0b"/>
    <path d="M404 206 Q470 178 518 132 Q492 224 410 252 Z" fill="#0b0b0b"/>
    <path d="M406 232 Q468 240 512 292 Q462 262 408 250 Z" fill="#0b0b0b"/>
    <path d="M118 232 Q256 196 394 232 L394 262 Q256 304 118 262 Z" fill="#f1ede4"/>
    <path d="M152 248 L238 234 L242 270 L166 280 Z" fill="#0b0b0b"/>
    <path d="M360 248 L274 234 L270 270 L346 280 Z" fill="#0b0b0b"/>
  </g>
    </svg>
  );
}
