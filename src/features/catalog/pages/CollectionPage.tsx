import React from 'react';
import { useParams } from 'react-router-dom';

export function CollectionPage() {
  const { slug } = useParams();

  return (
    <section>
      <h1>Coleção: {slug}</h1>
      <p>Aqui vamos listar os produtos desta coleção (promoções, mais vendidos, etc.).</p>
    </section>
  );
}

