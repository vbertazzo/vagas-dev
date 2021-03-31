<template>
  <section class="mt-4 flex justify-center">
    <ul class="max-w-3xl space-y-2 flex flex-col items-center md:space-y-3">
      <job-item v-for="job in jobs" :key="job.id" :job="job"></job-item>
    </ul>
  </section>
</template>

<script setup>
import JobItem from './JobItem.vue'

const jobs = [
  {
    url: 'https://api.github.com/repos/frontendbr/vagas/issues/4555',
    repository_url: 'https://api.github.com/repos/frontendbr/vagas',
    labels_url:
      'https://api.github.com/repos/frontendbr/vagas/issues/4555/labels{/name}',
    comments_url:
      'https://api.github.com/repos/frontendbr/vagas/issues/4555/comments',
    events_url:
      'https://api.github.com/repos/frontendbr/vagas/issues/4555/events',
    html_url: 'https://github.com/frontendbr/vagas/issues/4555',
    id: 842522809,
    node_id: 'MDU6SXNzdWU4NDI1MjI4MDk=',
    number: 4555,
    title:
      '[São Paulo / Remoto ] Full Stack Developer (Foco Front-end) NodeJS - Vórtx',
    user: {
      login: 'jhomarolo-vortx',
      id: 51677836,
      node_id: 'MDQ6VXNlcjUxNjc3ODM2',
      avatar_url: 'https://avatars.githubusercontent.com/u/51677836?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/jhomarolo-vortx',
      html_url: 'https://github.com/jhomarolo-vortx',
      followers_url: 'https://api.github.com/users/jhomarolo-vortx/followers',
      following_url:
        'https://api.github.com/users/jhomarolo-vortx/following{/other_user}',
      gists_url: 'https://api.github.com/users/jhomarolo-vortx/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/jhomarolo-vortx/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/jhomarolo-vortx/subscriptions',
      organizations_url: 'https://api.github.com/users/jhomarolo-vortx/orgs',
      repos_url: 'https://api.github.com/users/jhomarolo-vortx/repos',
      events_url:
        'https://api.github.com/users/jhomarolo-vortx/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/jhomarolo-vortx/received_events',
      type: 'User',
      site_admin: false
    },
    labels: [
      {
        id: 324087046,
        node_id: 'MDU6TGFiZWwzMjQwODcwNDY=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/Alocado',
        name: 'Alocado',
        color: '6befe6',
        default: false,
        description: ''
      },
      {
        id: 321622629,
        node_id: 'MDU6TGFiZWwzMjE2MjI2Mjk=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/CLT',
        name: 'CLT',
        color: '7fe266',
        default: false,
        description: ''
      },
      {
        id: 321622469,
        node_id: 'MDU6TGFiZWwzMjE2MjI0Njk=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/J%C3%BAnior',
        name: 'Júnior',
        color: '6c46ea',
        default: false,
        description: ''
      },
      {
        id: 321622540,
        node_id: 'MDU6TGFiZWwzMjE2MjI1NDA=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/Pleno',
        name: 'Pleno',
        color: '6c46ea',
        default: false,
        description: ''
      },
      {
        id: 324086912,
        node_id: 'MDU6TGFiZWwzMjQwODY5MTI=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/Remoto',
        name: 'Remoto',
        color: '6befe6',
        default: false,
        description: ''
      },
      {
        id: 1178245525,
        node_id: 'MDU6TGFiZWwxMTc4MjQ1NTI1',
        url:
          'https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo',
        name: 'São Paulo',
        color: 'f9745c',
        default: false,
        description: ''
      },
      {
        id: 321622600,
        node_id: 'MDU6TGFiZWwzMjE2MjI2MDA=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior',
        name: 'Sênior',
        color: '6c46ea',
        default: false,
        description: ''
      }
    ],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2021-03-27T15:05:01Z',
    updated_at: '2021-03-27T15:05:44Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body:
      "## Nossa empresa\r\n\r\nSomos um time de tecnologia com foco no cliente (interno e externo) e em inovação constante, sempre voltado para resultados de negócio e entregas.\r\n\r\nTambém somos agilistas, portanto XP/SCRUM/Kanban/Pair Programming fazem parte do nosso dia a dia. Inclusive trabalhamos em Squads.\r\n\r\n\r\n## Descrição da vaga\r\n\r\nDesenvolvimento de novos sistemas, implantação, manutenção de sistemas e suas API's – REST e GraphQL;\r\n\r\nNossa Stack é principalmente feita em C# e NodeJS (que está crescendo muito por aqui), porém possuímos minoritariamente sistemas em PHP;\r\n\r\nPossuímos inúmeros bancos de dados, mas os predominantes são SQL Server, MongoDB e PostgreSQL. Assim, seria legal você saber sobre SQL / Big Data / NoSQL;\r\n\r\nPropor novas tecnologias e formas diferentes de programar, afinal nada é escrito na pedra 😉.\r\n\r\nGostamos muito de DDD/ BDD / TDD / Clean Architecture, estes conceitos precisam estar claros para você pois irá colocá-los em prática aqui.\r\n\r\nNosso site: https://vortx.com.br/\r\n## Local\r\n\r\nRemoto ou Escritório (estamos remoto durante a pandemia) , São Paulo - em frente ao metrô Pinheiros\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n\r\n· Conhecimento sólido em arquitetura web;\r\n· Conhecimento sólido em pelo menos uma linguagem de programação;\r\n· Sede por aprender coisas novas;\r\n· Boa comunicação e gostar de trabalhar em equipe;\r\n· Inglês intermediário/avançado.\r\n· Gostar de contribuir para projetos open-source, temos uma biblioteca própria, o herbsJS e estamos em constante evolução nesta frente.\r\n\r\n**Desejáveis:**\r\n· Node.js;\r\n· SQL;\r\n· AWS;\r\n· Angular / React\r\n\r\n**Diferenciais:**\r\n- projetos opensource (@herbsjs)\r\n- meetups\r\n- participação em comunidades e eventos\r\n- treinamentos técnicos\r\n- auxilio para certificações\r\n\r\n## Benefícios\r\n\r\n- Plano de saúde\r\n- VR/VA de R$ 1.150 por mês\r\n- Auxílio creche\r\n- Bônus (PLR)\r\n- Auxílio educação\r\n- Oportunidade de compra de ações \r\n\r\n## Contratação\r\n\r\nCLT Full\r\n\r\n## Como se candidatar\r\n\r\nSe cadastre pelo [Kenoby](https://jobs.kenoby.com/vortx/job/desenvolvedor-full-stack/5e50139600d72114f5ac396b)\r\n\r\n## Tempo médio de feedbacks\r\n\r\nNosso processo é bem rápido e costumamos não ser burocráticos.\r\nCostumamos enviar feedbacks em até 2 dias após cada processo. E o processo no total costuma levar de 1 a duas semanas.\r\n\r\n## Labels\r\n\r\n#### Alocação\r\n- Alocado\r\n- Remoto\r\n\r\n#### Regime\r\n- CLT\r\n\r\n#### Nível\r\n- Júnior\r\n- Pleno\r\n- Sênior\r\n",
    performed_via_github_app: null
  },
  {
    url: 'https://api.github.com/repos/frontendbr/vagas/issues/4554',
    repository_url: 'https://api.github.com/repos/frontendbr/vagas',
    labels_url:
      'https://api.github.com/repos/frontendbr/vagas/issues/4554/labels{/name}',
    comments_url:
      'https://api.github.com/repos/frontendbr/vagas/issues/4554/comments',
    events_url:
      'https://api.github.com/repos/frontendbr/vagas/issues/4554/events',
    html_url: 'https://github.com/frontendbr/vagas/issues/4554',
    id: 842349948,
    node_id: 'MDU6SXNzdWU4NDIzNDk5NDg=',
    number: 4554,
    title: '[Uberaba] Full-Stack Developer na Grão Direto ',
    user: {
      login: 'felpshn',
      id: 68015575,
      node_id: 'MDQ6VXNlcjY4MDE1NTc1',
      avatar_url: 'https://avatars.githubusercontent.com/u/68015575?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/felpshn',
      html_url: 'https://github.com/felpshn',
      followers_url: 'https://api.github.com/users/felpshn/followers',
      following_url:
        'https://api.github.com/users/felpshn/following{/other_user}',
      gists_url: 'https://api.github.com/users/felpshn/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/felpshn/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/felpshn/subscriptions',
      organizations_url: 'https://api.github.com/users/felpshn/orgs',
      repos_url: 'https://api.github.com/users/felpshn/repos',
      events_url: 'https://api.github.com/users/felpshn/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/felpshn/received_events',
      type: 'User',
      site_admin: false
    },
    labels: [
      {
        id: 321622629,
        node_id: 'MDU6TGFiZWwzMjE2MjI2Mjk=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/CLT',
        name: 'CLT',
        color: '7fe266',
        default: false,
        description: ''
      },
      {
        id: 1504140182,
        node_id: 'MDU6TGFiZWwxNTA0MTQwMTgy',
        url:
          'https://api.github.com/repos/frontendbr/vagas/labels/Especialista',
        name: 'Especialista',
        color: 'd114bb',
        default: false,
        description: ''
      },
      {
        id: 1178249004,
        node_id: 'MDU6TGFiZWwxMTc4MjQ5MDA0',
        url:
          'https://api.github.com/repos/frontendbr/vagas/labels/Minas%20Gerais',
        name: 'Minas Gerais',
        color: 'f9745c',
        default: false,
        description: ''
      },
      {
        id: 321622540,
        node_id: 'MDU6TGFiZWwzMjE2MjI1NDA=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/Pleno',
        name: 'Pleno',
        color: '6c46ea',
        default: false,
        description: ''
      },
      {
        id: 321622600,
        node_id: 'MDU6TGFiZWwzMjE2MjI2MDA=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior',
        name: 'Sênior',
        color: '6c46ea',
        default: false,
        description: ''
      }
    ],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2021-03-26T23:08:38Z',
    updated_at: '2021-03-26T23:09:19Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body:
      '## Grão Direto\r\n\r\nAssim como a Uber revolucionou o mercado de transporte, o Nubank o mercado bancário e várias outras startups mudaram seus respectivos mercados, a Grão Direto revoluciona o agronegócio conectando toda a cadeia de comercialização. Através da tecnologia, vendedores e compradores podem negociar grãos de forma muito mais rápida e eficiente, tornando a compra e venda de milho, soja, sorgo e outros grãos muito mais moderna e segura!\r\n\r\n## Descrição da vaga\r\n\r\nVocê irá integrar a equipe de engenharia da Grão Direto, que utiliza metodologia ágil de desenvolvimento na entrega de produtos de alta tecnologia. Nossos engenheiros atuam tanto em frontend quanto backend durante todo o ciclo de vida da solução, e encaram desafios complexos na computação em larga escala, utilizando habilidades em estruturas de dados, algoritmos e programação orientada a objetos. Nosso time é colaborativo por natureza, e você terá voz ativa durante todo o processo, sempre com o objetivo de construir produtos que promovam excelentes experiências para nossos clientes.\r\n\r\n## Local\r\n\r\n[PRESENCIAL] UBERABA, MINAS GERAIS\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- Conhecimento de conceitos básicos como estrutura de dados, algoritmos, orientação a objetos, etc;\r\n- Conhecimento em estrutura e consulta em Bancos de Dados relacionais.\r\n- Experiência em desenvolvimento de aplicações WEB, seja frontend ou backend.\r\n- Linguagens de desenvolvimento web HTML/CSS/JavaScript.\r\n- Habilidade para comunicação e escuta ativa.\r\n\r\n**Desejáveis:**\r\n- Experiência em boas práticas de desenvolvimento de software, como TDD, Clean Code, Padrões de Projeto e SOLID;\r\n- Experiência nas linguagens Angular, Node.js e Ionic.\r\n- Experiência em banco de dados MySQL (criação de views, procedures, functions, etc).\r\n- Contato com ambiente em nuvem Amazon AWS.\r\n- Vivência de cultura DevOps e automação de tarefas de integração e entrega.\r\n- Conceitos de metodologias ágeis (Scrum/Kanban).\r\n- Inglês intermediário.\r\n\r\n## Benefícios\r\n\r\n- Existe sim ALMOÇO GRÁTIS! ;) (Dois restaurantes conveniados para você escolher seu almoço todos os dias).\r\n- Sua SAÚDE em primeiro lugar! (Plano de saúde - a mensalidade do seu plano você deixa com a gente).\r\n- Com SORRISO tudo fica melhor! (Plano Odontológico - esta mensalidade também é nossa).\r\n- Apoiamos ainda mais seu DESENVOLVIMENTO PESSOAL! (Terapia, academia, cursos, livros além de outros itens que podem ajudar no seu desenvolvimento mental e físico, nós te incentivamos com um valor mensal).\r\n- Não é de Uberaba e está de MUDANÇA pra cá? (Auxílio Mudança - Apoio financeiro para te ajudar com as despesas da mudança + nosso apoio para você conhecer a nova cidade, encontrar um ótimo lugar para morar e realocar a família.).\r\n\r\n**Diferenciais:**\r\n- Ambiente descontraído\r\n- Horário flexível\r\n- Sala de jogos\r\n- Time jovem e engajado\r\n\r\n## Contratação\r\n\r\nCLT Período Integral (8hrs/dia)\r\n\r\n## Como se candidatar para essa vaga\r\n\r\nhttps://graodiretovagas.gupy.io/candidates/jobs/621308/apply\r\n\r\n## Também temos vagas para outros setores relacionados a tecnologia!!!\r\n\r\nhttps://www.graodireto.com.br/vagas/vagas-disponiveis.php\r\n\r\n## Tempo médio de feedbacks\r\n\r\nCostumamos enviar feedbacks em até 07 dias após cada processo.\r\nE-mail para contato em caso de não haver resposta: ursula@graodireto.com.br\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior\r\n- Especialista',
    performed_via_github_app: null
  },
  {
    url: 'https://api.github.com/repos/frontendbr/vagas/issues/4553',
    repository_url: 'https://api.github.com/repos/frontendbr/vagas',
    labels_url:
      'https://api.github.com/repos/frontendbr/vagas/issues/4553/labels{/name}',
    comments_url:
      'https://api.github.com/repos/frontendbr/vagas/issues/4553/comments',
    events_url:
      'https://api.github.com/repos/frontendbr/vagas/issues/4553/events',
    html_url: 'https://github.com/frontendbr/vagas/issues/4553',
    id: 842332581,
    node_id: 'MDU6SXNzdWU4NDIzMzI1ODE=',
    number: 4553,
    title: '[REMOTO] Front-end Developer na Studos/Arco Educação',
    user: {
      login: 'keitoliveira',
      id: 3808430,
      node_id: 'MDQ6VXNlcjM4MDg0MzA=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3808430?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/keitoliveira',
      html_url: 'https://github.com/keitoliveira',
      followers_url: 'https://api.github.com/users/keitoliveira/followers',
      following_url:
        'https://api.github.com/users/keitoliveira/following{/other_user}',
      gists_url: 'https://api.github.com/users/keitoliveira/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/keitoliveira/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/keitoliveira/subscriptions',
      organizations_url: 'https://api.github.com/users/keitoliveira/orgs',
      repos_url: 'https://api.github.com/users/keitoliveira/repos',
      events_url: 'https://api.github.com/users/keitoliveira/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/keitoliveira/received_events',
      type: 'User',
      site_admin: false
    },
    labels: [
      {
        id: 324087046,
        node_id: 'MDU6TGFiZWwzMjQwODcwNDY=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/Alocado',
        name: 'Alocado',
        color: '6befe6',
        default: false,
        description: ''
      },
      {
        id: 321622629,
        node_id: 'MDU6TGFiZWwzMjE2MjI2Mjk=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/CLT',
        name: 'CLT',
        color: '7fe266',
        default: false,
        description: ''
      },
      {
        id: 321622540,
        node_id: 'MDU6TGFiZWwzMjE2MjI1NDA=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/Pleno',
        name: 'Pleno',
        color: '6c46ea',
        default: false,
        description: ''
      },
      {
        id: 324086912,
        node_id: 'MDU6TGFiZWwzMjQwODY5MTI=',
        url: 'https://api.github.com/repos/frontendbr/vagas/labels/Remoto',
        name: 'Remoto',
        color: '6befe6',
        default: false,
        description: ''
      },
      {
        id: 1178245525,
        node_id: 'MDU6TGFiZWwxMTc4MjQ1NTI1',
        url:
          'https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo',
        name: 'São Paulo',
        color: 'f9745c',
        default: false,
        description: ''
      }
    ],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2021-03-26T22:21:31Z',
    updated_at: '2021-03-26T22:42:21Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body:
      '<!-- \r\n==================================================\r\nPOR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!\r\n\r\nNão faça distinção de gênero no título da vaga.\r\n\r\nUse: "Front-End Developer" ao invés de \r\n"Desenvolvedor Front-End" \\o/\r\n\r\nExemplo: `[São Paulo] Front-End Developer na NOME DA EMPRESA`\r\n==================================================\r\n-->\r\n\r\n<!--\r\n==================================================\r\nCaso a vaga for remoto durante a pandemia deixar a linha abaixo\r\n==================================================\r\n-->\r\n\r\n## Nossa empresa\r\n\r\nNós somos uma plataforma educacional focada em facilitar a vida dos professores e coordenadores, criando ferramentas de apoio para otimizar os processos pedagógicos e, também, na melhora do desempenho dos alunos.\r\n\r\nEntendemos que todos devem ter acesso a novas formas de estudar, sendo assim, desenvolvemos uma plataforma que potencializa o ensino na sala da aula e também fora dela. \r\n\r\nAtuamos nos segmentos de Pré-Vestibular e ENEM, Concursos Públicos, Concursos Militares, OAB e Ensino Superior. \r\n\r\nHoje, já contamos com mais de 1 milhão usuários em todo Brasil.\r\n\r\n## Descrição da vaga\r\n\r\n- Participar de planejamentos junto aos demais times, do desenvolvimento do nosso design system, refactoring de nossas plataformas e das integrações com sistemas parceiros\r\n- Participar da documentação técnica e de processos dentro do time\r\n- Ter comunicação clara e descomplicada, disseminar conhecimento através de pair-programming, code review ou treinamento, ajudando os desenvolvedores a avançar em suas carreiras\r\n\r\n## Local\r\n\r\nCaso você seja de SC, há opção de ir para o escritório se desejar. Nosso escritório está localizado no bairro João Paulo, em  Florianópolis. Remoto para outras localidades.\r\n\r\n## Requisitos\r\nPedimos conhecimento naquilo que realmente usamos 🚀\r\n\r\n**Obrigatórios:**\r\n- 3+ anos de experiência com desenvolvimento Front-End\r\n- Conhecimento sólido em HTML e CSS\r\n- Conhecimento em JavaScript\r\n- Conhecimento em React\r\n- Conhecimento em práticas de acessibilidade\r\n- Boa comunicação\r\n\r\n**Desejáveis:**\r\n- Conhecimento em práticas de performance\r\n\r\n**Diferenciais:**\r\n- Conhecimento em testes unitários e de integração com Jest e/ou Cypress\r\n- Conhecimento em module bundler Webpack e/ou Rollup\r\n- Participação anterior em desenvolvimento de design system\r\n- CSS-in-JS\r\n- Lerna\r\n- Conhecimento em criação e manutenção de CI/CD para projetos Front-End e publicação de pacotes através do NPM ou GitHub\r\n- Conhecimentos em Graphql\r\n\r\n## Benefícios\r\n\r\n- Vale Refeição ou Vale Alimentação\r\n- Plano de saúde\r\n- [Zenklub](https://zenklub.com.br/) com direito a 2 consultas grátis e 2 sessões com custo reduzido\r\n- Vale Transporte (Alocado)\r\n- Gympass\r\n- Ajuda de custo para Home Office (Remoto)\r\n- Se precisarmos que vá em nossa sede, arcamos com todos os custos (Remoto)\r\n- Folga de aniversário\r\n\r\n## Contratação\r\n\r\nCLT\r\n\r\n## Como se candidatar\r\n\r\nEnviar um e-mail para keit@arcotech.io com assunto "Vaga Front-End Developer" com pretensão salarial atual, o link do Github caso tenha projetos open source que deseje apresentar e link do LinkedIn.\r\n\r\n## Tempo médio de feedbacks\r\n\r\nCostumamos enviar feedbacks em até 4 dias úteis após cada processo.\r\n\r\n## Labels\r\n<!-- retire os labels que não fazem sentido à vaga -->\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- CLT\r\n\r\n#### Nível\r\n- Pleno\r\n\r\n\r\n',
    performed_via_github_app: null
  }
]
</script>
