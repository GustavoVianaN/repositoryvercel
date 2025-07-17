'use client';
import React, { useEffect, useState } from 'react';
import './whyUs.css';
import WhyUsCard from '../components/WhyUsCard';
import SectionTitle from '../components/SectionTitle';
import SectionFadeIn from '../components/SectionFadeIn';

export default function WhyUs() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/whyus`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionFadeIn>
          <SectionTitle title="por que nós" subtitle="Por que escolher a Glauco Advocacia" />
          <div className="row">
            {items.map((item: { id: number; title: string; content: string }) => (
              <WhyUsCard key={item.id} item={item} />
            ))}
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}
