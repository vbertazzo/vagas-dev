<h1 align="center">
    Vagas Dev
</h1>

<h2 align="center">
  Central de vagas para desenvolvedores 💻
</h2>

<p align="center">
<img src="https://res.cloudinary.com/voss/image/upload/v1619239499/readme_logos/vagasdev-desktop_qr3yot.png" alt="Vagas Dev Desktop" width="50%" />
    &nbsp; &nbsp; &nbsp; &nbsp;
    <img src="https://res.cloudinary.com/voss/image/upload/v1619239499/readme_logos/vagasdev-mobile_wqxbbc.png" alt="Vagas Dev Mobile" width="38%" />
</p>

Veja o resultado final em:

#### [Link](https://vagasdev.netlify.app)

## 🎯 O que é?

Vagas Dev é um agregador de vagas de emprego para desenvolvedores reunidas de diversos repositórios no GitHub.

Pensei que seria uma boa ideia reunir tudo em um lugar só e usar a oportunidade para por em prática o que venho aprendendo em desenvolvimento frontend. 😊

Seguem os links dos repositórios, que são excelentes fontes de vagas e muito bem organizados pelo pessoal.

Repositórios incluídos:

- [FrontendBR](https://github.com/frontendbr/vagas)
- [Backend-BR](https://github.com/backend-br/vagas)
- [UXBrasil](https://github.com/uxbrasil/vagas)
- [QA-Brasil](https://github.com/qa-brasil/vagas)
- [AndroidDevBR](https://github.com/androiddevbr/vagas)
- [CocoaHeadsBrasil](https://github.com/CocoaHeadsBrasil/vagas)
- [PHPDevBR](https://github.com/phpdevbr/vagas)
- [Vuejs-BR](https://github.com/vuejs-br/vagas)
- [Gommunity](https://github.com/Gommunity/vagas)
- [Flutter-Brazil](https://github.com/flutter-brazil/vagas)
- [React-Brasil](https://github.com/react-brasil/vagas)
- [DotNetBR](https://github.com/dotnetdevbr/vagas)

## ⚖️ Decisões e Pontos Relevantes

### Paginação

Foi um dos pontos que tive mais dificuldade na implementação. Minha ideia, foi fazer chamadas de 100 itens por requisição, que é a limitação máxima do GitHub, no lugar de 10 itens por requisição, que seria realizada a cada troca de página. Devido ao limite de 5000 requisições por hora, decidi que seria mais interessante realizar o menor número possível de chamadas à API. Havia a opção de requisitar todos os dados no carregamente inicial, mas me pareceu um desperdício de recursos, sendo que não há garantia que o usuário vai acessar todas as vagas.

### Proxy Backend / API

Para aumentar o limite de requisições da API do padrão de 60 para 5000 por hora, foi necessário utilizar autenticação com um token fornecido pelo GitHub, que é enviado no cabeçalho de cada requisição. Por ser um projeto frontend, se essas requisições fossem feitas da maneira convencional, não haveria como evitar que qualquer usuário tivesse o acesso a esse token. Por isso foi utilizadas as Functions do Netlify, que são funções serverless. Elas funcionam como um meio campo (proxy) que faz as requisições à API do Github utilizando a chave de autenticação e retorna a resposta, portanto as requisições são feitas no servidor da Netlify e não no frontend.

### Menu como Floating Action Button (Mobile)

Uma decisão importante do ponto de vista de UX, pois se falando em mobile, a área confortável de ação ao segurar o dispositivo com uma ou duas mãos, é a parte inferior do aparelho. Por isso, visando oferecer uma melhor experiência ao usuário, escolhi colocar o menu como um floating action button. Para evitar atrapalhar a visualização do conteúdo, o botão desaparece quando ocorre um evento de toque na tela e também há a opção do usuário escolher a posição do botão, dentro do menu.

Sobre a opção de utilizar o ícone de "hamburguer" no lugar da palavra menu, em ambiente mobile, foi feita por 2 motivos, o primeiro é que o público-alvo do site são desenvolvedores, que estão mais familiarizados com o significado do ícone e o segundo é a recomendação do [Material Design](https://material.io/components/buttons-floating-action-button#anatomy) sobre não se utilizar textos em Floating Action Buttons. Em ambiente desktop, foi utilizada a palavra menu no lugar do ícone de "hamburguer".

### Acessibilidade

Um dos objetivos iniciais do projeto, era aprender e implementar componentes acessíveis, portanto fiz o possível para garantir que todo o site fosse navegável utilizando somente o teclado e também que os componentes fossem os mais amigáveis para leitores de tela. Esse é um ponto que pretendo seguir melhorando em minha jornada como desenvolvedor, para garantir que os projetos em que eu participe incluam todas as pessoas, sem distinções.

## 🚀 Tecnologia, Ferramentas e Conceitos

Esse projeto utiliza:

- [Vue.js](https://vuejs.org/)
- [GitHub API](https://docs.github.com/en/rest)
- [Vuex](https://vuex.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- Local Storage
- Mobile First
- [VS Code](https://code.visualstudio.com/) / [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## 📝 Licença

Esse projeto usa a licença [MIT](https://github.com/vbertazzo/vagas-dev/blob/main/LICENSE).
