export interface Apartamento {
  id: string;
  nome: string;
  descricao: string;
  descricaoCurta: string;
  quartos: number;
  capacidade: number;
  amenidades: string[];
  imagens: string[];
  imagemPrincipal: string;
  preco: string;
}

export const apartamentos: Apartamento[] = [
  {
    id: "apartamento-1",
    nome: "Apartamento 1 — Térreo",
    descricao:
      "Apartamento moderno e completo no térreo do Recanto do Pericó. Com cozinha totalmente equipada, bancada com banquetas, sofá confortável e varanda com vista para a vegetação. Ideal para casais que buscam praticidade e conforto em Guarda do Embaú. A poucos minutos a pé da praia e do centrinho da vila.",
    descricaoCurta: "Moderno e completo, com cozinha equipada e varanda",
    quartos: 1,
    capacidade: 3,
    amenidades: [
      "Wi-Fi de alta velocidade",
      "Ar condicionado",
      "Cozinha completa",
      "Micro-ondas",
      "Fogão",
      "Geladeira",
      "Roupa de cama e banho",
      "TV com Smart TV",
      "Sofá-cama",
      "Varanda",
      "Estacionamento",
      "Piscina compartilhada",
      "Jacuzzi",
      "Churrasqueira compartilhada",
    ],
    imagens: [
      "/images/apartamentos/ap1-exterior.png",
      "/images/apartamentos/ap1-interior.png",
      "/images/apartamentos/ap1-interior2.png",
    ],
    imagemPrincipal: "/images/apartamentos/ap1-interior2.png",
    preco: "Consulte disponibilidade",
  },
  {
    id: "apartamento-2",
    nome: "Apartamento 2 — Superior",
    descricao:
      "Apartamento espaçoso no andar superior com ampla porta de vidro que traz muita luz natural e vista para a vegetação tropical. Conta com sofá confortável, bancada de madeira com banquetas, cozinha americana e varanda com guarda-corpo de madeira. A brisa natural e a iluminação tornam esse apartamento especial.",
    descricaoCurta: "Espaçoso com muita luz natural e varanda tropical",
    quartos: 1,
    capacidade: 3,
    amenidades: [
      "Wi-Fi de alta velocidade",
      "Ar condicionado",
      "Cozinha completa",
      "Micro-ondas",
      "Fogão",
      "Geladeira",
      "Roupa de cama e banho",
      "TV com Smart TV",
      "Sofá-cama",
      "Varanda com vista",
      "Estacionamento",
      "Piscina compartilhada",
      "Jacuzzi",
      "Churrasqueira compartilhada",
    ],
    imagens: [
      "/images/apartamentos/ap2-exterior.png",
      "/images/apartamentos/ap2-interior.png",
    ],
    imagemPrincipal: "/images/apartamentos/ap2-interior.png",
    preco: "Consulte disponibilidade",
  },
  {
    id: "apartamento-3",
    nome: "Apartamento 3 — Brisa",
    descricao:
      "Apartamento aconchegante com excelente ventilação natural e acabamento moderno. Perfeito para quem deseja acordar com a brisa do litoral catarinense e aproveitar ao máximo os dias na praia da Guarda do Embaú. Equipado com tudo que você precisa para uma estadia confortável.",
    descricaoCurta: "Aconchegante com ventilação natural e acabamento moderno",
    quartos: 1,
    capacidade: 2,
    amenidades: [
      "Wi-Fi de alta velocidade",
      "Ar condicionado",
      "Cozinha completa",
      "Micro-ondas",
      "Fogão",
      "Geladeira",
      "Roupa de cama e banho",
      "TV com Smart TV",
      "Varanda",
      "Estacionamento",
      "Piscina compartilhada",
      "Jacuzzi",
      "Churrasqueira compartilhada",
    ],
    imagens: [
      "/images/apartamentos/ap1-exterior.png",
      "/images/apartamentos/ap2-interior.png",
    ],
    imagemPrincipal: "/images/apartamentos/ap2-exterior.png",
    preco: "Consulte disponibilidade",
  },
  {
    id: "apartamento-4",
    nome: "Apartamento 4 — Rio",
    descricao:
      "Inspirado no Rio da Madre que corta a vila, este apartamento combina simplicidade e conforto moderno. Com cozinha completa, ar condicionado e acesso à piscina e jacuzzi, é uma ótima opção para casais que querem explorar as trilhas e praias da região.",
    descricaoCurta: "Simplicidade e conforto com acesso à piscina e jacuzzi",
    quartos: 1,
    capacidade: 2,
    amenidades: [
      "Wi-Fi de alta velocidade",
      "Ar condicionado",
      "Cozinha completa",
      "Micro-ondas",
      "Fogão",
      "Geladeira",
      "Roupa de cama e banho",
      "TV com Smart TV",
      "Varanda",
      "Estacionamento",
      "Piscina compartilhada",
      "Jacuzzi",
      "Churrasqueira compartilhada",
    ],
    imagens: [
      "/images/apartamentos/ap1-exterior.png",
      "/images/apartamentos/ap1-interior.png",
    ],
    imagemPrincipal: "/images/apartamentos/ap1-exterior.png",
    preco: "Consulte disponibilidade",
  },
  {
    id: "apartamento-5",
    nome: "Apartamento 5 — Surf",
    descricao:
      "Para os amantes do surf e da vida ao ar livre. Apartamento moderno e funcional, estrategicamente localizado para facilitar o acesso à praia e aos melhores picos de surf da Guarda do Embaú. Após uma sessão de surf, relaxe na piscina ou jacuzzi do Recanto.",
    descricaoCurta: "Moderno e funcional, ideal para surfistas",
    quartos: 1,
    capacidade: 2,
    amenidades: [
      "Wi-Fi de alta velocidade",
      "Ar condicionado",
      "Cozinha completa",
      "Micro-ondas",
      "Fogão",
      "Geladeira",
      "Roupa de cama e banho",
      "TV com Smart TV",
      "Varanda",
      "Estacionamento",
      "Piscina compartilhada",
      "Jacuzzi",
      "Churrasqueira compartilhada",
    ],
    imagens: [
      "/images/apartamentos/ap2-exterior.png",
      "/images/apartamentos/ap1-interior2.png",
    ],
    imagemPrincipal: "/images/apartamentos/ap2-exterior.png",
    preco: "Consulte disponibilidade",
  },
  {
    id: "apartamento-6",
    nome: "Apartamento 6 — Trilha",
    descricao:
      "Nomeado em homenagem às incríveis trilhas da região, este apartamento é perfeito para os aventureiros. Após um dia de exploração pelas trilhas até a Praia da Guarda, volte para um espaço confortável e moderno, com acesso à piscina e jacuzzi para relaxar.",
    descricaoCurta: "Perfeito para aventureiros, com acesso à piscina",
    quartos: 1,
    capacidade: 3,
    amenidades: [
      "Wi-Fi de alta velocidade",
      "Ar condicionado",
      "Cozinha completa",
      "Micro-ondas",
      "Fogão",
      "Geladeira",
      "Roupa de cama e banho",
      "TV com Smart TV",
      "Sofá-cama",
      "Varanda",
      "Estacionamento",
      "Piscina compartilhada",
      "Jacuzzi",
      "Churrasqueira compartilhada",
    ],
    imagens: [
      "/images/apartamentos/ap1-exterior.png",
      "/images/apartamentos/ap2-interior.png",
    ],
    imagemPrincipal: "/images/apartamentos/ap1-interior.png",
    preco: "Consulte disponibilidade",
  },
];
