import React from 'react';
import { useParams } from 'react-router-dom';

export function ProductPage() {
  const { id } = useParams();

  return (
    <section>
      <h1>Produto #{id}</h1>
      <p>Página de detalhes do produto. Aqui vamos mostrar fotos, descrição, preço e botão de adicionar ao carrinho.</p>
    </section>
  );
}

