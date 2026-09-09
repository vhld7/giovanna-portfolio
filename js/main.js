// Monta os grids de vídeo a partir de SITE_DATA (js/data.js)
// e troca a miniatura por um player do YouTube só quando a pessoa clica.

function playIcon() {
  return `<span class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>`;
}

function createCard(item) {
  const card = document.createElement("div");
  card.className = "card";

  const frame = document.createElement("div");
  frame.className = "video-frame";

  const thumb = document.createElement("button");
  thumb.className = "video-thumb";
  thumb.type = "button";
  thumb.setAttribute("aria-label", `Assistir: ${item.title}`);
  thumb.style.backgroundImage = `url(https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg)`;
  thumb.innerHTML = `
    ${playIcon()}
    <span class="thumb-caption">
      <span>${item.title}</span>
      <span class="yt">▶ assistir no youtube</span>
    </span>
  `;

  thumb.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`;
    iframe.title = item.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    frame.innerHTML = "";
    frame.appendChild(iframe);
  });

  frame.appendChild(thumb);

  const body = document.createElement("div");
  body.className = "card-body";
  body.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;

  card.appendChild(frame);
  card.appendChild(body);
  return card;
}

function renderGrid(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  items.forEach((item) => el.appendChild(createCard(item)));
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid("reportagens-grid", SITE_DATA.reportagens);
  renderGrid("entradas-grid", SITE_DATA.entradas);

  const heroTitle = document.getElementById("hero-title");
  const heroTagline = document.getElementById("hero-tagline");
  if (heroTitle) heroTitle.textContent = SITE_DATA.name;
  if (heroTagline) heroTagline.textContent = SITE_DATA.heroTagline;

  const quote = document.getElementById("site-quote");
  if (quote) quote.textContent = SITE_DATA.quote;
});
