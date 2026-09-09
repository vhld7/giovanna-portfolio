# Portfólio — Giovanna Dauzacker

Site estático (HTML + CSS + JS puro, sem dependências) recriando o portfólio
que estava no Readymag.

## Estrutura

```
index.html        página inicial (Work): reportagens + entradas ao vivo
about.html         página "About": bio, foto, e-mail e LinkedIn
css/style.css       todo o estilo (tema escuro, tipografia, grid)
js/data.js          todo o conteúdo (títulos, textos, IDs dos vídeos do YouTube)
js/main.js          monta os cards de vídeo automaticamente a partir de data.js
assets/             pasta para a foto de perfil e outras imagens
```

## Como editar o conteúdo

Quase tudo (títulos, textos das reportagens, vídeos) fica em `js/data.js`.
Não precisa mexer no HTML: adicionar, remover ou reordenar uma reportagem é
só editar esse arquivo. Para trocar o vídeo de um card, troque o
`youtubeId` (o código que aparece depois de `v=` ou `/embed/` no link do
YouTube).

## Foto de perfil

O `about.html` está com um placeholder ("G · D") no lugar da foto, porque a
foto original não pôde ser copiada em boa qualidade do site antigo. Para
colocar a foto de verdade:

1. Salve o arquivo de imagem em `assets/` (ex: `assets/foto.jpg`).
2. Em `about.html`, troque:
   ```html
   <div class="placeholder">G · D</div>
   ```
   por:
   ```html
   <img src="assets/foto.jpg" alt="Giovanna Dauzacker" />
   ```

## Como ver localmente

Basta abrir `index.html` no navegador, ou (recomendado, evita problemas de
cache) rodar um servidor simples na pasta:

```bash
python3 -m http.server 8000
```

e acessar `http://localhost:8000`.

## Como publicar (tirar do localhost)

É um site 100% estático, então qualquer um destes serve, de graça:

- **Vercel** ou **Netlify**: arraste a pasta do projeto no painel deles, ou
  conecte um repositório do GitHub — o deploy é automático a cada mudança.
- **GitHub Pages**: suba os arquivos para um repositório no GitHub e ative
  o Pages nas configurações do repositório.
- **Cloudflare Pages**: mesma ideia, também gratuito.

Todos esses serviços já entregam HTTPS e uma URL gratuita
(`algumacoisa.vercel.app`, por exemplo). Domínio próprio é opcional e pode
ser adicionado depois em qualquer um deles.

## Observações sobre a recriação

- A fonte do título grande no site original ("Austin") é paga; foi
  substituída aqui por **Fraunces** (Google Fonts), que tem uma pegada
  parecida (serifada, editorial). Título/menu usam **Inter** e o texto do
  corpo usa **Montserrat** — as mesmas fontes do site original, ambas
  gratuitas.
- Os vídeos usam o player oficial do YouTube (`youtube-nocookie.com`),
  carregado só quando a pessoa clica em play — deixa a página mais rápida
  que carregar os 14 vídeos de uma vez.
