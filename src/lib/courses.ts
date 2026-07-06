import retratos from "@/assets/course-retratos.jpg";
import editorial from "@/assets/course-editorial.jpg";
import edicao from "@/assets/course-edicao.jpg";
import casamento from "@/assets/course-casamento.jpg";

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  image: string;
  forWhom: string[];
  learnings: string[];
  syllabus: { title: string; items: string[] }[];
  faqs: { q: string; a: string }[];
  testimonial: { quote: string; author: string; role: string };
};

export const courses: Course[] = [
  {
    slug: "retrato-autoral",
    title: "Retrato Autoral",
    tagline: "A construção de uma linguagem visual através do retrato.",
    description:
      "Um mergulho sensível na fotografia de retrato — da leitura de luz natural à direção emocional do fotografado. Um método completo para desenvolver um olhar próprio, com resultados que carregam intenção.",
    duration: "8 semanas · 42 aulas",
    image: retratos,
    forWhom: [
      "Fotógrafos iniciantes que buscam desenvolver uma linguagem própria",
      "Profissionais que desejam refinar o retrato autoral",
      "Amadores apaixonados por fotografia sensível",
    ],
    learnings: [
      "Ler e moldar luz natural em qualquer ambiente",
      "Conduzir uma sessão com naturalidade e presença",
      "Compor retratos com intenção e coerência estética",
      "Editar com sutileza para preservar a atmosfera da imagem",
      "Construir um portfólio autoral consistente",
    ],
    syllabus: [
      {
        title: "Fundamentos do Olhar",
        items: ["Referências e história", "Análise de luz", "Composição intencional"],
      },
      {
        title: "A Sessão",
        items: ["Direção humana", "Confiança e escuta", "Ritmo do ensaio"],
      },
      {
        title: "Edição Autoral",
        items: ["Fluxo no Lightroom", "Cor e tonalidade", "Consistência de série"],
      },
      {
        title: "Portfólio",
        items: ["Curadoria", "Sequência narrativa", "Apresentação profissional"],
      },
    ],
    faqs: [
      {
        q: "Preciso de equipamento profissional?",
        a: "Não. O curso ensina a extrair o máximo do equipamento que você já possui — o olhar vem antes da câmera.",
      },
      {
        q: "Por quanto tempo tenho acesso ao curso?",
        a: "O acesso é vitalício, incluindo atualizações futuras.",
      },
      {
        q: "As aulas são ao vivo?",
        a: "As aulas são gravadas, para você estudar no seu ritmo. Há encontros mensais de tira-dúvidas.",
      },
    ],
    testimonial: {
      quote:
        "Voltei a fotografar com propósito. O curso reorganizou minha forma de olhar — e o resultado apareceu em cada ensaio depois disso.",
      author: "Marina Ribeiro",
      role: "Fotógrafa de retrato",
    },
  },
  {
    slug: "fotografia-editorial",
    title: "Fotografia Editorial",
    tagline: "A estética das grandes revistas ao seu alcance.",
    description:
      "Um estudo profundo sobre composição, direção de arte e narrativa visual — o vocabulário editorial aplicado a ensaios de moda, lifestyle e branding.",
    duration: "10 semanas · 56 aulas",
    image: editorial,
    forWhom: [
      "Fotógrafos que desejam entrar no mercado de moda e lifestyle",
      "Diretores de arte e criativos visuais",
      "Profissionais em transição para o autoral",
    ],
    learnings: [
      "Construir moodboards e narrativas visuais",
      "Dirigir equipe e modelo com clareza",
      "Compor cenários com intenção editorial",
      "Aplicar tratamento de cor coerente com a proposta",
      "Apresentar um ensaio de forma profissional",
    ],
    syllabus: [
      { title: "Referências e Conceito", items: ["Cultura visual", "Moodboards", "Storytelling"] },
      { title: "Produção", items: ["Casting", "Styling", "Locação"] },
      { title: "Execução", items: ["Iluminação editorial", "Direção", "Ritmo do ensaio"] },
      { title: "Pós-produção", items: ["Seleção", "Tratamento", "Diagramação"] },
    ],
    faqs: [
      { q: "Preciso trabalhar com moda?", a: "Não. O método se aplica a qualquer ensaio narrativo." },
      { q: "O curso inclui exercícios práticos?", a: "Sim, com feedback individual." },
    ],
    testimonial: {
      quote:
        "Meu trabalho ganhou uma consistência que eu não conseguia enxergar antes. Hoje entrego ensaios com identidade.",
      author: "Camila Duarte",
      role: "Fotógrafa editorial",
    },
  },
  {
    slug: "edicao-lightroom",
    title: "Edição no Lightroom",
    tagline: "Um fluxo de edição elegante, coerente e reproduzível.",
    description:
      "Aprenda a construir um tratamento visual próprio, com controle absoluto sobre cor, tonalidade e atmosfera — sem depender de presets prontos.",
    duration: "6 semanas · 34 aulas",
    image: edicao,
    forWhom: [
      "Fotógrafos que desejam uma edição autoral",
      "Iniciantes no Lightroom",
      "Profissionais em busca de eficiência",
    ],
    learnings: [
      "Organizar catálogo e fluxo profissional",
      "Dominar controles de cor e tonalidade",
      "Criar presets pessoais",
      "Manter consistência entre imagens",
      "Exportar para diferentes finalidades",
    ],
    syllabus: [
      { title: "Fluxo de trabalho", items: ["Importação", "Catálogo", "Backup"] },
      { title: "Revelação", items: ["Exposição", "Cor", "Detalhe"] },
      { title: "Autoria", items: ["Presets", "Consistência", "Retoque local"] },
    ],
    faqs: [
      { q: "Funciona no Lightroom mobile?", a: "Sim, o método se aplica às duas versões." },
    ],
    testimonial: {
      quote: "Finalmente tenho uma edição que se parece comigo.",
      author: "Bruno Alencar",
      role: "Fotógrafo",
    },
  },
  {
    slug: "casamento-autoral",
    title: "Casamento Autoral",
    tagline: "Fotografar a emoção com sensibilidade documental.",
    description:
      "Um curso completo sobre fotografia de casamento em uma abordagem autoral e documental — do primeiro contato com os noivos à entrega final do ensaio.",
    duration: "12 semanas · 68 aulas",
    image: casamento,
    forWhom: [
      "Fotógrafos ingressando no mercado de casamento",
      "Profissionais que buscam abordagem mais autoral",
    ],
    learnings: [
      "Construir uma narrativa visual do dia",
      "Fotografar com sensibilidade documental",
      "Iluminação em ambientes desafiadores",
      "Fluxo de entrega e experiência do cliente",
    ],
    syllabus: [
      { title: "Antes do dia", items: ["Reunião", "Contrato", "Planejamento"] },
      { title: "O dia", items: ["Making of", "Cerimônia", "Recepção"] },
      { title: "Depois", items: ["Seleção", "Tratamento", "Entrega"] },
    ],
    faqs: [
      { q: "Já preciso ter feito casamentos?", a: "Não. O curso acompanha desde o início." },
    ],
    testimonial: {
      quote:
        "Passei a receber clientes que valorizam meu olhar — e não apenas o pacote.",
      author: "Renata Lopes",
      role: "Fotógrafa de casamento",
    },
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
