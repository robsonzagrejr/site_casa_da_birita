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
}

export interface BenefitData {
    icon: string; // Icon name as string
    title: string;
    text: string;
}

export const heroes: HeroData[] = [
    {
        title: "As Melhores Bebidas Para Seus Melhores Momentos",
        subtitle: "Explore nossa seleção exclusiva de destilados premium, vinhos selecionados e cervejas artesanais entregues na sua porta.",
        primaryAction: { label: 'Explorar Coleções', to: '/explore' },
        secondaryAction: { label: 'Ver Ofertas', to: '/offers' },
    },
    {
        title: "Vinhos para Celebrações",
        subtitle: "Uma seleção rigorosa dos melhores terroirs para marcar suas datas especiais.",
        primaryAction: { label: 'Carta de Vinhos', to: '/collection/vinhos' },
        background: 'linear-gradient(135deg, #4c0519 0%, #881337 100%)',
    },
    {
        title: "Cervejas de Verdade",
        subtitle: "Maltes selecionados, lúpulos aromáticos e a paixão de quem entende do assunto.",
        primaryAction: { label: 'Cervejas Artesanais', to: '/collection/cervejas' },
        background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    }
];

export const banners: BannerData[] = [
    {
        title: "Promoções de Inverno",
        subtitle: "Vinhos e destilados com até 30% de desconto.",
        buttonLabel: "Conferir Agora",
        to: "/promotions",
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
        to: "/collection/destilados",
        title: "Destilados",
        text: "Descubra nossa seleção premium de destilados de todo o mundo.",
        image: "https://placehold.co/400x400/222/FFF?text=Destilados"
    },
    {
        to: "/collection/vinhos",
        title: "Vinhos",
        text: "Explore uma variety de vinhos, dos clássicos aos modernos.",
        image: "https://placehold.co/400x400/222/FFF?text=Vinhos"
    },
    {
        to: "/collection/cervejas",
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
    },
    {
        id: 2,
        name: 'Vinho Tinto Cabernet',
        price: 'R$ 79,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Vinho',
    },
    {
        id: 3,
        name: 'Gin Tônica Premium',
        price: 'R$ 89,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Gin',
    },
    {
        id: 4,
        name: 'Whisky Single Malt 12 Anos',
        price: 'R$ 299,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Whisky',
    },
    {
        id: 5,
        name: 'Licor Fino de Chocolate',
        price: 'R$ 59,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Licor',
    },
    {
        id: 6,
        name: 'Espumante Brut Rosé',
        price: 'R$ 69,90',
        imageUrl: 'https://placehold.co/400x400/222/FFF?text=Espumante',
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
