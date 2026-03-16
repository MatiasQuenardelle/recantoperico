export interface Apartamento {
  id: string;
  nome: string;
  descricao: string;
  descricaoCurta: string;
  quartos: number;
  capacidade: number;
  amenidades: string[];
  imagens: string[];
  preco: string;
}

export const apartamentos: Apartamento[] = [
  {
    id: "apartamento-1",
    nome: "Apartamento Praia",
    descricao:
      "Apartamento aconchegante com vista parcial para o mar, perfeito para casais ou viajantes solo que buscam tranquilidade em Guarda do Embaú. Decorado com carinho pela Niceia, oferece todo o conforto necessário para uma estadia inesquecível.",
    descricaoCurta: "Aconchegante apartamento com vista parcial para o mar",
    quartos: 1,
    capacidade: 2,
    amenidades: [
      "Wi-Fi",
      "Ar condicionado",
      "Cozinha completa",
      "Roupa de cama e banho",
      "Estacionamento",
      "Churrasqueira compartilhada",
    ],
    imagens: ["/images/apartamentos/placeholder.jpg"],
    preco: "Consulte disponibilidade",
  },
  {
    id: "apartamento-2",
    nome: "Apartamento Mata",
    descricao:
      "Cercado pela vegetação nativa da região, este apartamento oferece uma experiência única de contato com a natureza. Ideal para quem quer relaxar ao som dos pássaros e curtir a brisa do litoral catarinense.",
    descricaoCurta: "Refúgio cercado pela mata nativa",
    quartos: 1,
    capacidade: 2,
    amenidades: [
      "Wi-Fi",
      "Ar condicionado",
      "Cozinha completa",
      "Roupa de cama e banho",
      "Estacionamento",
      "Churrasqueira compartilhada",
    ],
    imagens: ["/images/apartamentos/placeholder.jpg"],
    preco: "Consulte disponibilidade",
  },
  {
    id: "apartamento-3",
    nome: "Apartamento Sol",
    descricao:
      "Apartamento iluminado e arejado, com excelente ventilação natural. Perfeito para quem deseja acordar com a luz do sol e aproveitar ao máximo os dias na praia da Guarda do Embaú.",
    descricaoCurta: "Espaço iluminado e arejado para dias de sol",
    quartos: 1,
    capacidade: 2,
    amenidades: [
      "Wi-Fi",
      "Ar condicionado",
      "Cozinha completa",
      "Roupa de cama e banho",
      "Estacionamento",
      "Churrasqueira compartilhada",
    ],
    imagens: ["/images/apartamentos/placeholder.jpg"],
    preco: "Consulte disponibilidade",
  },
  {
    id: "apartamento-4",
    nome: "Apartamento Rio",
    descricao:
      "Inspirado no Rio da Madre que corta a vila, este apartamento combina simplicidade e conforto. Uma ótima opção para casais que querem explorar as trilhas e praias da região.",
    descricaoCurta: "Simplicidade e conforto inspirados no Rio da Madre",
    quartos: 1,
    capacidade: 2,
    amenidades: [
      "Wi-Fi",
      "Ar condicionado",
      "Cozinha completa",
      "Roupa de cama e banho",
      "Estacionamento",
      "Churrasqueira compartilhada",
    ],
    imagens: ["/images/apartamentos/placeholder.jpg"],
    preco: "Consulte disponibilidade",
  },
  {
    id: "apartamento-5",
    nome: "Apartamento Surf",
    descricao:
      "Para os amantes do surf e da vida ao ar livre. Este apartamento fica estrategicamente localizado para facilitar o acesso à praia e aos melhores picos de surf da Guarda do Embaú.",
    descricaoCurta: "Ideal para surfistas e amantes do mar",
    quartos: 1,
    capacidade: 2,
    amenidades: [
      "Wi-Fi",
      "Ar condicionado",
      "Cozinha completa",
      "Roupa de cama e banho",
      "Estacionamento",
      "Churrasqueira compartilhada",
    ],
    imagens: ["/images/apartamentos/placeholder.jpg"],
    preco: "Consulte disponibilidade",
  },
  {
    id: "apartamento-6",
    nome: "Apartamento Trilha",
    descricao:
      "Nomeado em homenagem às incríveis trilhas da região, este apartamento é perfeito para os aventureiros. Após um dia de exploração, volte para um espaço confortável e acolhedor preparado pela Niceia.",
    descricaoCurta: "Perfeito para aventureiros e amantes de trilhas",
    quartos: 1,
    capacidade: 3,
    amenidades: [
      "Wi-Fi",
      "Ar condicionado",
      "Cozinha completa",
      "Roupa de cama e banho",
      "Estacionamento",
      "Churrasqueira compartilhada",
      "Sofá-cama",
    ],
    imagens: ["/images/apartamentos/placeholder.jpg"],
    preco: "Consulte disponibilidade",
  },
];
