// src/config/footerData.ts
import { FeaturedBlock, InfoColumn } from '@/types/footer.data';

export const popularProducts: string[] = [
  'Aire Acondicionado',
  'Airpods',
  'Airpods Pro',
  'Apple TV',
  'Apple Watch',
  // … resto
];

export const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const featuredBlocks: FeaturedBlock[] = [
  { title: 'Smartwatch', items: ['Apple watch', 'Reloj inteligente'], moreLabel: 'Ver todo' },
  {
    title: 'Samsung',
    items: [
      'Samsung s23 ultra',
      'Samsung galaxy a54',
      'Samsung s21 ultra',
      'Galaxy s22 ultra',
      'Samsung galaxy s23',
      'Samsung s22 ultra',
      'Samsung a34',
    ],
    moreLabel: 'Ver todo',
  },
  { title: 'Motorola', items: ['Motorola g53', 'Motorola g60'] },
  {
    title: 'Iphone',
    items: [
      'Iphone 11',
      'Iphone 13',
      'Iphone 14',
      'Iphone 12',
      'Iphone 13 pro',
      'Iphone 15',
      'Iphone 16',
    ],
    moreLabel: 'Ver todo',
  },
];

export const infoColumns: InfoColumn[] = [
  {
    title: 'Acerca de',
    links: ['Mercado Libre', 'Investor relations', 'Tendencias', 'Sustentabilidad', 'Blog'],
  },
  {
    title: 'Otros sitios',
    links: ['Developers', 'Mercado Pago', 'Mercado Shops', 'Envíos', 'Mercado Ads'],
  },
  {
    title: 'Ayuda',
    links: ['Comprar', 'Vender', 'Resolución de problemas', 'Centro de seguridad'],
  },
  { title: 'Redes sociales', links: ['X', 'Facebook', 'YouTube'] },
  { title: 'Mi cuenta', links: ['Ingresa', 'Vender'] },
  {
    title: 'Suscripciones',
    links: ['Meli+', 'Disney+', 'HBO Max', 'Paramount+', 'ViX Premium', 'Universal+'],
  },
  { title: 'Temporadas', links: ['Buen Fin', 'Hot Sale', 'Black Friday'] },
];

export const bottomLinks: string[] = [
  'Trabaja con nosotros',
  'Términos y condiciones',
  'Promociones',
  'Cómo cuidamos tu privacidad',
  'Accesibilidad',
  'Ayuda',
  'Hot Sale',
  'Programa de Afiliados',
];
