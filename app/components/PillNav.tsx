'use client';

import React from 'react';
import { gsap } from 'gsap';

export type PillNavItem = {
  label: string;
};

export default function PillNav({ logo, items }: { logo: string; items: PillNavItem[] }) {
  return (
    <nav className="pill-nav">
      <div className="logo-wrap">
        <img src={logo} alt="logo" />
      </div>

      <div className="pill-items">
        {items.map((item, i) => (
          <div
            key={i}
            className="pill-item cursor-default select-none"
          >
            {item.label}
          </div>
        ))}
      </div>
    </nav>
  );
}
