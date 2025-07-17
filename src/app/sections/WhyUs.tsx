import React from 'react';
import './whyUs.css';
import WhyUsCard from '../components/WhyUsCard';
import SectionTitle from '../components/SectionTitle';
import SectionFadeIn from '../components/SectionFadeIn';
async function getWhyUsData() {
  const res = await fetch(`https://repositoryvercel.vercel.app/api/whyus`);
  return res.json();
}

export default async function WhyUs() {
  const items: [] = await getWhyUsData();

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionFadeIn>   <SectionTitle title="por que nós" subtitle="Por que escolher a Glauco Advocacia" />
          <div className="row">
            {items &&
              items.length > 0 &&
              items.map(
                (item: { id: number; title: string; content: string }) => (
                  <WhyUsCard key={item.id} item={item} />
                )
              )}
          </div></SectionFadeIn>
      </div>
    </section>
  );
}