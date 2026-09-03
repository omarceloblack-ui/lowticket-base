export type MediaItem = { src: string; alt: string; label: string; ratio: '1:1' | '2:3' | '3:2' | '3:4' }
export type ProductItem = MediaItem & { eyebrow: string; title: string; description: string }

export const pageContent = {
  urgencyBar: {
    enabled: true,
    text: 'Oferta especial com acesso vitalício disponível por tempo limitado.',
  },
  hero: {
    image: '',
    imageAlt: 'Imagem da Hero',
    headline: 'Tenha um Instagram profissional que atrai pacientes usando mais de 400 templates estratégicos em poucos minutos.',
    body: 'Criado para nutricionistas com a rotina corrida, mesmo que você não tenha nenhuma experiência com design, o Pack Posts Nutri ajuda a transmitir mais autoridade por meio de artes 100% editáveis no Canva gratuito.',
    ctaLabel: 'Quero transformar meu perfil',
    securityImage: '/images/selos-seguranca-compra.svg',
    securityImageAlt: 'Selos de compra segura, satisfação garantida e privacidade protegida',
  },
  results: {
    title: 'Veja o antes e depois do seu feed',
    items: Array.from({ length: 6 }, (_, index) => ({
      src: '',
      alt: `Placeholder: Depoimento ${String(index + 1).padStart(2, '0')}`,
      label: `Depoimento ${String(index + 1).padStart(2, '0')}`,
      ratio: '2:3' as const,
    })),
  },
  modulesSection: { title: 'Tudo que está incluso no Pack' },
  modules: [
    { src: '', alt: 'Imagem do módulo 01', label: 'Imagem do módulo 01', ratio: '1:1' as const, eyebrow: 'Módulo 01', title: '+400 Templates de Feed', description: 'Modelos prontos e editáveis com ideias de legendas. Escolha o seu, adapte para a sua realidade em poucos minutos e nunca mais trave na hora de criar conteúdo.' },
    { src: '', alt: 'Imagem do módulo 02', label: 'Imagem do módulo 02', ratio: '1:1' as const, eyebrow: 'Módulo 02', title: 'Carrosséis Estratégicos', description: 'Sequências estruturadas para educar seus seguidores e levar o paciente direto para a consulta, aumentando a percepção de valor do seu trabalho sem precisar começar do zero.' },
    { src: '', alt: 'Imagem do módulo 03', label: 'Imagem do módulo 03', ratio: '1:1' as const, eyebrow: 'Módulo 03', title: 'Perfil e Consultório', description: 'Dezenas de capas elegantes para organizar seus destaques no Instagram, além de modelos de fichas de atendimento práticas para usar com seus pacientes.' },
  ],
  bonusesSection: { title: '3 bônus exclusivos para o seu perfil' },
  bonuses: [
    { src: '', alt: 'Imagem do bônus 01', label: 'Imagem do bônus 01', ratio: '1:1' as const, eyebrow: 'Bônus 01', title: 'Calendário Mensal', description: 'Trinta ideias de posts organizadas por objetivo de comunicação para você nunca mais abrir o aplicativo sem saber exatamente o que publicar.', value: 'R$ 39,00' },
    { src: '', alt: 'Imagem do bônus 02', label: 'Imagem do bônus 02', ratio: '1:1' as const, eyebrow: 'Bônus 02', title: 'Guia de Identidade Visual', description: 'Combinações prontas de paletas de cores e fontes para garantir que o seu feed tenha um padrão estético profissional e único.', value: 'R$ 29,00' },
    { src: '', alt: 'Imagem do bônus 03', label: 'Imagem do bônus 03', ratio: '1:1' as const, eyebrow: 'Bônus 03', title: '30 Ganchos Validados', description: 'Frases de abertura testadas na prática para reter a atenção logo nos primeiros segundos, gerar identificação imediata e converter visitantes.', value: 'R$ 29,00' },
  ],
  offersSection: {
    title: 'Escolha a sua oferta',
    paymentSecurityImage: '/images/metodos-pagamento-seguranca.svg',
    paymentSecurityAlt: 'Métodos de pagamento e selos de compra segura, satisfação garantida e privacidade protegida',
  },
  offers: {
    simple: {
      title: 'Oferta simples',
      items: ['Pack Posts Nutri', 'Acesso vitalício imediato', 'Todos os templates e fichas'],
      previousPrice: 'R$ 97,00', installmentCount: 4, installmentValue: 'R$ 4,98', cashValue: 'R$ 19,90', ctaLabel: 'Quero a oferta simples',
    },
    complete: {
      badge: 'Mais vendido', title: 'Oferta completa',
      items: [
        { label: 'Pack Posts Nutri' },
        { label: 'Acesso vitalício imediato' },
        { label: 'Calendário Mensal', value: 'R$ 39,00' },
        { label: 'Guia de Identidade Visual', value: 'R$ 29,00' },
        { label: '30 Ganchos Validados', value: 'R$ 29,00' },
      ],
      previousPrice: 'R$ 194,00', installmentCount: 6, installmentValue: 'R$ 4,98', cashValue: 'R$ 29,90', ctaLabel: 'Quero a oferta completa',
    },
    popup: {
      eyebrow: 'Espere!',
      message: 'Já que você quer a Oferta Simples, vou te dar de presente a Oferta Completa com desconto especial, somente desta vez.',
      title: 'OFERTA ESPECIAL', previousPrice: 'R$ 194,00', installmentCount: 3, installmentValue: 'R$ 4,97', cashValue: 'R$ 14,90',
      ctaLabel: 'Quero a oferta especial', secondaryLabel: 'Continuar com a Oferta Simples',
    },
  },
  guarantee: {
    image: '/images/selo-garantia-7-dias.svg',
    imageAlt: 'Selo de garantia de 7 dias',
    days: 7,
    title: '7 dias de garantia',
    body: 'Você tem uma semana inteira para abrir os arquivos e testar a edição. Se achar que os materiais não facilitam a sua rotina, basta pedir o reembolso e devolverei todo o seu dinheiro.',
  },
  faqSection: { title: 'Perguntas frequentes' },
  faq: [
    { question: 'Os templates funcionam no Canva gratuito?', answer: 'Sim. Todos os modelos foram desenhados para funcionar perfeitamente na versão gratuita do Canva, sem que você precise pagar assinaturas extras.' },
    { question: 'Não tenho tempo para criar posts, isso serve para mim?', answer: 'Sim, o pack foi feito justamente para rotinas corridas. Como as artes estão prontas, você só precisa alterar os textos e as fotos, publicando seu conteúdo em poucos minutos.' },
    { question: 'Preciso saber mexer com design?', answer: 'Não é necessário ter experiência prévia. O material é intuitivo e você recebe instruções claras de como acessar e personalizar os modelos de forma muito simples.' },
    { question: 'O pagamento é uma mensalidade?', answer: 'Não. É um pagamento único que garante acesso vitalício a todos os templates e atualizações futuras, sem nenhuma cobrança recorrente.' },
    { question: 'Como recebo o meu acesso após a compra?', answer: 'Assim que o pagamento for confirmado, você receberá um e-mail automático com os dados de login para acessar a área de membros imediatamente.' },
  ],
  footer: { brand: 'Marcelo Black', copyright: '© 2026 Marcelo Black' },
}
