import React from 'react';

export interface HeroAction {
    label: string;
    to?: string;
    onClick?: () => void;
    variant?: 'contained' | 'outlined';
}

export interface HeroData {
    title: string;
    subtitle: string;
    primaryAction: HeroAction;
    secondaryAction?: HeroAction;
    background?: string;
}

export interface BannerData {
    title: string;
    subtitle: string;
    buttonLabel: string;
    to?: string;
    background?: string;
}

export interface CategoryData {
    to: string;
    title: string;
    text: string;
    image: string;
}

export interface ProductData {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    collection: string;
    bestSeller?: boolean;
    onSale?: boolean;
}

export interface BenefitData {
    icon: string; // Icon name as string
    title: string;
    text: string;
}

export interface CollectionData {
    slug: string;
    label: string;
}

export const collections: CollectionData[] = [
    { slug: 'todas', label: 'Todas' },
    { slug: 'destilados', label: 'Destilados' },
    { slug: 'vinhos', label: 'Vinhos' },
    { slug: 'cervejas', label: 'Cervejas Artesanais' },
    { slug: 'mais-vendidos', label: 'Mais Vendidos' },
    { slug: 'promocoes', label: 'Promoções' },
];

export const heroes: HeroData[] = [
    {
        title: "As Melhores Bebidas Para Seus Melhores Momentos",
        subtitle: "Explore nossa seleção exclusiva de destilados premium, vinhos selecionados e cervejas artesanais entregues na sua porta.",
        primaryAction: { label: 'Explorar Coleções', to: '/collections/todas' },
        secondaryAction: { label: 'Ver Ofertas', to: '/collections/promocoes' },
    },
    {
        title: "Vinhos para Celebrações",
        subtitle: "Uma seleção rigorosa dos melhores terroirs para marcar suas datas especiais.",
        primaryAction: { label: 'Carta de Vinhos', to: '/collections/vinhos' },
        background: 'linear-gradient(135deg, #4c0519 0%, #881337 100%)',
    },
    {
        title: "Cervejas de Verdade",
        subtitle: "Maltes selecionados, lúpulos aromáticos e a paixão de quem entende do assunto.",
        primaryAction: { label: 'Cervejas Artesanais', to: '/collections/cervejas' },
        background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    }
];

export const banners: BannerData[] = [
    {
        title: "Promoções de Inverno",
        subtitle: "Vinhos e destilados com até 30% de desconto.",
        buttonLabel: "Conferir Agora",
        to: "/collections/promocoes",
    },
    {
        title: "Clube Casa da Birita",
        subtitle: "Assine e ganhe frete grátis em todas as compras acima de R$ 100.",
        buttonLabel: "Saiba Mais",
        to: "/clube",
        background: 'linear-gradient(45deg, #1D4ED8 30%, #1E40AF 90%)',
    }
];

export const categories: CategoryData[] = [
    {
        to: "/collections/destilados",
        title: "Destilados",
        text: "Descubra nossa seleção premium de destilados de todo o mundo.",
        image: "https://placehold.co/400x400/222/FFF?text=Destilados"
    },
    {
        to: "/collections/vinhos",
        title: "Vinhos",
        text: "Explore uma variety de vinhos, dos clássicos aos modernos.",
        image: "https://placehold.co/400x400/222/FFF?text=Vinhos"
    },
    {
        to: "/collections/cervejas",
        title: "Cervejas Artesanais",
        text: "Conheça os sabores únicos das melhores cervejas artesanais.",
        image: "https://placehold.co/400x400/222/FFF?text=Cervejas"
    }
];

export const products: ProductData[] = [
    {
        id: 1,
        name: 'Cerveja Artesanal IPA',
        price: 'R$ 24,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=IPA',
        collection: 'cervejas',
        bestSeller: true,
    },
    {
        id: 2,
        name: 'Vinho Tinto Cabernet',
        price: 'R$ 79,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Cabernet',
        collection: 'vinhos',
        bestSeller: true,
    },
    {
        id: 3,
        name: 'Gin Tônica Premium',
        price: 'R$ 89,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Gin',
        collection: 'destilados',
        bestSeller: true,
    },
    {
        id: 4,
        name: 'Whisky Single Malt 12 Anos',
        price: 'R$ 299,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Whisky',
        collection: 'destilados',
        bestSeller: true,
    },
    {
        id: 5,
        name: 'Licor Fino de Chocolate',
        price: 'R$ 59,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Licor',
        collection: 'destilados',
        onSale: true,
    },
    {
        id: 6,
        name: 'Espumante Brut Rosé',
        price: 'R$ 69,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Espumante',
        collection: 'vinhos',
        onSale: true,
    },
    {
        id: 7,
        name: 'Cerveja Weiss Artesanal',
        price: 'R$ 19,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Weiss',
        collection: 'cervejas',
        onSale: true,
    },
    {
        id: 8,
        name: 'Vinho Branco Chardonnay',
        price: 'R$ 64,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Chardonnay',
        collection: 'vinhos',
        bestSeller: true,
    },
    {
        id: 9,
        name: 'Rum Envelhecido 8 Anos',
        price: 'R$ 129,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Rum',
        collection: 'destilados',
    },
    {
        id: 10,
        name: 'Cerveja Stout Imperial',
        price: 'R$ 34,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Stout',
        collection: 'cervejas',
    },
    {
        id: 11,
        name: 'Vodka Premium Filtrada',
        price: 'R$ 74,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Vodka',
        collection: 'destilados',
        onSale: true,
    },
    {
        id: 12,
        name: 'Vinho Rosé Provence',
        price: 'R$ 89,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Rosé',
        collection: 'vinhos',
    },
];

export const benefitsData: BenefitData[] = [
    {
        icon: 'LocalShipping',
        title: 'Entrega Rápida',
        text: 'Receba seus pedidos em até 2 horas na região metropolitana.',
    },
    {
        icon: 'VerifiedUser',
        title: 'Compra Segura',
        text: 'Seus dados protegidos com a melhor tecnologia de segurança.',
    },
    {
        icon: 'SupportAgent',
        title: 'Suporte 24/7',
        text: 'Nossa equipe está sempre pronta para tirar suas dúvidas.',
    },
    {
        icon: 'CardGiftcard',
        title: 'Clube Casa',
        text: 'Participe do nosso clube e ganhe brindes e descontos exclusivos.',
    },
];
