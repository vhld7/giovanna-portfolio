// Conteúdo do portfólio — edite aqui para atualizar reportagens, textos e vídeos.
// Cada item precisa apenas do "youtubeId" (o código depois de "v=" ou "/embed/" no link do YouTube).

const SITE_DATA = {
  name: "Giovanna Dauzacker",
  role: "Jornalista",
  heroTagline:
    "Jornalista, formada em 2020 pela Universidade Católica Dom Bosco, atualmente conta histórias em reportagens para os telejornais da afiliada da Rede Globo em Mato Grosso do Sul, mas também já narrou diversos fatos pelas ondas do rádio e em sites. É pós-graduada em Economia e Comunicação Global.",
  aboutBio: [
    "Giovanna Lozano Dauzacker nasceu no interior de Mato Grosso do Sul, em Antônio João, cidade com pouco mais de 10 mil habitantes. Cursou Comunicação Social - Jornalismo na Universidade Católica Dom Bosco (UCDB), em Campo Grande. Formada desde 2020, tem experiência com rádio, site e tv. Já passou por veículos como Rádio CBN, Campo Grande News e, atualmente, é repórter na afiliada da Rede Globo TV Morena, onde já produziu e fez inúmeras reportagens para o local e também para o nacional.",
    "Também já atuou na editoria de agronegócios, levando informação do agro pelas ondas do rádio. Com pouco tempo de atuação no mercado já tem uma vasta experiência em diversos assuntos e está sempre em busca de novos aprendizados. É pós-graduada em economia pela Faculdade Metropolitana e em Comunicação Global - Jornalismo, Comunicação e a Nova Ordem Informacional, pela Faap. Também carrega na bagagem cursos de escrita criativa, conhecimentos que a permitem sempre ampliar horizontes e aprimorar textos no dia a dia. Independentemente do tema, procura sempre levar a informação de qualidade pensando fora da caixa.",
  ],
  email: "giildauzacker@gmail.com",
  linkedin: "https://www.linkedin.com/in/giovanna-dauzacker-6503871b5/",
  reportagens: [
    {
      title: "Canonização de Carlo Acutis",
      youtubeId: "MZWCaw66hv0",
      desc: "Reportagem produzida para o principal jornal do país. Foi minha primeira no JN e sobre um assunto muito especial: a canonização do santo milenial que tem uma forte ligação com Campo Grande: foi aqui o primeiro milagre reconhecido pelo papa. São Carlo Acutis ganhou muitos devotos em todo o mundo.",
    },
    {
      title: "Dia do Rim: ações de prevenção no país",
      youtubeId: "zzp3ABRUJP8",
      desc: "Esta matéria foi produzida para o Jornal Hoje, da rede Globo. Meu primeiro VT emplacado neste jornal. No dia do rim, a matéria levou a história de quem convive com as consequências e o tratamento de uma doença renal crônica e também as ações de prevenção não só em Campo Grande, mas em outras cidades do país. Foi muito legal trabalhar com essa parceria com outras praças.",
    },
    {
      title: "Catadoras de sementes",
      youtubeId: "OULsmSTMsWc",
      desc: "Talvez este tenha sido meu trabalho mais gostoso de fazer. Conheci a história em uma reportagem do G1 MS e logo imaginei como seria contar por meio das imagens. Colocar essa ideia em prática e ver o resultado foi muito gratificante. Mergulhei na força do lugar e das personagens e transcrever isso foi demais! O grupo de mulheres da comunidade quilombola Furnas do Boa Sorte, em Corguinho, interior de MS, veem na venda de sementes nativas uma forma de gerar renda e ajudar a natureza a se desenvolver em áreas degradadas.",
    },
    {
      title: "Corrida do agro",
      youtubeId: "azG3bsbW8cU",
      desc: "Reportagem que foi ao ar no Hora 1, primeiro telejornal do dia da Rede Globo. Uma mistura entre dois mundos completamente diferentes: agronegócio e esporte. Atletas disputam 'corrida na roça' com prêmio no valor do preço do gado. Competição agrícola foi em Campo Grande, MS.",
    },
    {
      title: "Ciclo sustentável: reuso da água",
      youtubeId: "gEb2mmxML1U",
      desc: "Reportagem vencedora do prêmio Águas Guariroba de Jornalismo na categoria TV em 2023. Aborda iniciativas que visam a sustentabilidade da água em Campo Grande MS. A ideia, inicialmente, surgiu da curiosidade de saber como algumas marcas da cidade conseguiam produzir com um certo cuidado, carinho com o planeta, economizando água. O desafio foi justamente esse, encontrar essas histórias. Matéria produzida inteiramente por mim.",
    },
    {
      title: "Especial 60 anos emissora",
      youtubeId: "G5wps_j6rDw",
      desc: "Esta foi a primeira de uma série de três reportagens especiais sobre a história da programação da TV Morena. O mais desafiador, além de coletar materiais catalogados em arquivos de fita, foi contar sobre os que não tinham registros. Tive a ideia de usar a tecnologia a meu favor, o resultado ficou bem criativo!",
    },
    {
      title: "Obras na avenida",
      youtubeId: "UtaJ4XFDJLA",
      desc: "É um assunto que assola os moradores de Campo Grande há anos. Pela falta de solução, é sempre muito difícil conseguir pessoas dispostas a falar. Por isso, saímos para a rua com a missão de encontrar personagens para construir a reportagem, além de unir as histórias com o histórico das obras.",
    },
  ],

  entradas: [
    {
      title: "Ex-prefeito de CG é preso",
      youtubeId: "I8WsPdP_YEs",
      desc: "Entrada ao vivo no Bom Dia MS da TV Morena, em março de 2026, em um desdobramento sobre o caso do ex-prefeito de Campo Grande, Alcides Bernal, preso, suspeito de atirar e matar um servidor público.",
    },
    {
      title: "COP 15 em Campo Grande MS",
      youtubeId: "ncJmS2-tMm8",
      desc: "Entrada ao vivo para o jornal Bom Dia Sábado, da Rede Globo, para falar sobre a conferência Conservação de Espécies Migratórias de Animais Silvestres, que trouxe representantes de diversos países para a Capital de MS.",
    },
    {
      title: "Inflação de CG em março",
      youtubeId: "MDvrpFMiNkw",
      desc: "Entrada ao vivo no Bom Dia MS para explicar os impactos de produtos na inflação de Campo Grande.",
    },
    {
      title: "Preparo para Guns N' Roses em CG",
      youtubeId: "sqLySQONJtU",
      desc: "Na expectativa pelo show do Guns N' Roses em Campo Grande, o primeiro grande evento internacional deste porte, o município organizou espaços para o embarque dos transportes para translado até o local. Acompanhamos as primeiras horas deste dia.",
    },
    {
      title: "Carona no transporte coletivo",
      youtubeId: "Rak6DKm4B_g",
      desc: "Este ao vivo foi um grande desafio. A proposta era que a equipe embarcasse dentro de uma linha lotada no horário de pico, justamente para mostrar os problemas enfrentados por passageiros na Capital de MS. Fizemos com um celular e, entre movimentos bruscos, frenadas, aglomeração, uma mão segurando o microfone e a outra garantindo o equilíbrio — sem contar na instabilidade do sinal de internet — consegui contar a história de algumas pessoas e como elas lidam com a situação crítica.",
    },
    {
      title: "Campanha Fique Antenado",
      youtubeId: "s_4s0GP1KAQ",
      desc: "Neste ao vivo, mostramos a entrega de antenas digitais para a população de baixa renda em Campo Grande, como parte da campanha da Rede Globo. Como o jornal é mais leve e solto, conseguimos fazer o link da mesma forma, com um assunto que nos permitia.",
    },
    {
      title: "Patinetes elétricos",
      youtubeId: "OtZ5gvqbtag",
      desc: "Acompanhamos o início da implementação deste novo modelo de mobilidade urbana. O diferencial foi encontrar essa personagem quando já estávamos prontos para entrar ao vivo. O improviso e a conversa solta ajudaram a passar a informação com qualidade.",
    },
  ],
};
