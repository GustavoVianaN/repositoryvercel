"use client";

import React, { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import ChefsItem from "../components/ChefsItem";
import SectionFadeIn from "../components/SectionFadeIn";

export default function Chefs() {
  const [items, setItems] = useState<
    {
      id: number;
      name: string;
      photo: string;
      position: string;
      delay: string;
    }[]
  >([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chefs`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.error("Failed to fetch chefs:", e));
  }, []);

  return (
    <section id="chefs" className="chefs">
      <div className="container" data-aos="fade-up">
        <SectionFadeIn>
          <SectionTitle title="Advogados" subtitle="Nossos profissionais" />
          <div className="row">
            {items.length > 0 ? (
              items.map((item) => <ChefsItem key={item.id} item={item} />)
            ) : (
              <p>Loading chefs...</p>
            )}
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}
