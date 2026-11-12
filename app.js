// FreeTV — Legal free channels & services only

const data = [
  // ===== FREE SERVICES (hundreds of channels each) =====
  {
    id: "pluto",
    title: "Pluto TV",
    desc: "250–400+ free live channels + on-demand. News, movies, entertainment, kids. One of the largest legal free lineups.",
    cat: "services",
    source: "Paramount",
    url: "https://pluto.tv",
    icon: "📺",
    badge: "250–400 channels",
    badgeClass: "service"
  },
  {
    id: "tubi",
    title: "Tubi",
    desc: "Huge free library of movies & TV shows plus live channels. Excellent legal free option.",
    cat: "services",
    source: "Fox",
    url: "https://tubitv.com",
    icon: "🎬",
    badge: "Movies + Live",
    badgeClass: "service"
  },
  {
    id: "plex",
    title: "Plex Free",
    desc: "Free live channels and on-demand movies/shows. Available in many countries.",
    cat: "services",
    source: "Plex",
    url: "https://www.plex.tv/watch-free/",
    icon: "📺",
    badge: "Free Live + VOD",
    badgeClass: "service"
  },
  {
    id: "roku",
    title: "The Roku Channel",
    desc: "Free live channels and thousands of free movies & shows. Works in browser on many regions.",
    cat: "services",
    source: "Roku",
    url: "https://therokuchannel.roku.com",
    icon: "📺",
    badge: "Free Channels",
    badgeClass: "service"
  },
  {
    id: "xumo",
    title: "Xumo Play",
    desc: "Free live TV channels and on-demand content. Legal ad-supported service.",
    cat: "services",
    source: "Xumo",
    url: "https://www.xumo.tv",
    icon: "📺",
    badge: "Free Live",
    badgeClass: "service"
  },
  {
    id: "samsung",
    title: "Samsung TV Plus",
    desc: "Free live channels (device dependent). Large international lineup on Samsung TVs and some apps.",
    cat: "services",
    source: "Samsung",
    url: "https://www.samsung.com/us/tvs/tv-plus/",
    icon: "📺",
    badge: "Device Free TV",
    badgeClass: "service"
  },

  // ===== NEWS (official free streams) =====
  {
    id: "aljazeera",
    title: "Al Jazeera English",
    desc: "24/7 international news. Official free stream available worldwide.",
    cat: "news",
    source: "Al Jazeera",
    url: "https://www.aljazeera.com/live",
    icon: "📰",
    badge: "News",
    badgeClass: "news"
  },
  {
    id: "france24",
    title: "France 24 English",
    desc: "French international news channel in English. Free official live stream.",
    cat: "news",
    source: "France 24",
    url: "https://www.france24.com/en/live",
    icon: "📰",
    badge: "News",
    badgeClass: "news"
  },
  {
    id: "dw",
    title: "DW News",
    desc: "Germany’s international broadcaster. Free English news stream.",
    cat: "news",
    source: "Deutsche Welle",
    url: "https://www.dw.com/en/live-tv/s-100825",
    icon: "📰",
    badge: "News",
    badgeClass: "news"
  },
  {
    id: "nhk",
    title: "NHK World Japan",
    desc: "Japan’s public international channel. Free live news and programmes.",
    cat: "news",
    source: "NHK",
    url: "https://www3.nhk.or.jp/nhkworld/en/live/",
    icon: "📰",
    badge: "News",
    badgeClass: "news"
  },
  {
    id: "skynews",
    title: "Sky News",
    desc: "UK news channel. Official free stream available on their site and YouTube.",
    cat: "news",
    source: "Sky",
    url: "https://news.sky.com/watch-live",
    icon: "📰",
    badge: "News",
    badgeClass: "news"
  },
  {
    id: "bbcnews",
    title: "BBC News",
    desc: "BBC’s news channel. Availability depends on region (often free on YouTube or official apps).",
    cat: "news",
    source: "BBC",
    url: "https://www.bbc.com/news",
    icon: "📰",
    badge: "News",
    badgeClass: "news"
  },
  {
    id: "euronews",
    title: "Euronews",
    desc: "European news channel with free streams in multiple languages.",
    cat: "news",
    source: "Euronews",
    url: "https://www.euronews.com/live",
    icon: "📰",
    badge: "News",
    badgeClass: "news"
  },
  {
    id: "cgtn",
    title: "CGTN",
    desc: "China Global Television Network. Free English international stream.",
    cat: "news",
    source: "CGTN",
    url: "https://www.cgtn.com/tv",
    icon: "📰",
    badge: "News",
    badgeClass: "news"
  },
  {
    id: "trt",
    title: "TRT World",
    desc: "Turkish public international news channel in English. Free stream.",
    cat: "news",
    source: "TRT",
    url: "https://www.trtworld.com/video",
    icon: "📰",
    badge: "News",
    badgeClass: "news"
  },
  {
    id: "bloomberg",
    title: "Bloomberg TV",
    desc: "Business and markets news. Free streams available on several platforms.",
    cat: "news",
    source: "Bloomberg",
    url: "https://www.bloomberg.com/live",
    icon: "📈",
    badge: "Business",
    badgeClass: "news"
  },

  // ===== ENTERTAINMENT / MOVIES =====
  {
    id: "archive-movies",
    title: "Internet Archive Movies",
    desc: "Thousands of public domain and freely available films. Classic cinema, documentaries, indie.",
    cat: "movies",
    source: "Archive.org",
    url: "https://archive.org/details/movies",
    icon: "🎬",
    badge: "Public Domain",
    badgeClass: "service"
  },
  {
    id: "archive-tv",
    title: "Internet Archive TV",
    desc: "Classic TV shows, old broadcasts and public domain television content.",
    cat: "entertainment",
    source: "Archive.org",
    url: "https://archive.org/details/television",
    icon: "📼",
    badge: "Classic TV",
    badgeClass: "service"
  },
  {
    id: "crackle",
    title: "Crackle",
    desc: "Free movies and TV episodes from Sony. Legal ad-supported service.",
    cat: "movies",
    source: "Sony",
    url: "https://www.crackle.com",
    icon: "🎬",
    badge: "Free Movies",
    badgeClass: "service"
  },

  // ===== KIDS =====
  {
    id: "pluto-kids",
    title: "Pluto TV Kids",
    desc: "Dedicated free kids channels inside Pluto TV (cartoons, family shows).",
    cat: "kids",
    source: "Pluto TV",
    url: "https://pluto.tv",
    icon: "🧸",
    badge: "Kids",
    badgeClass: "service"
  },
  {
    id: "tubi-kids",
    title: "Tubi Kids",
    desc: "Free kids movies and shows section on Tubi.",
    cat: "kids",
    source: "Tubi",
    url: "https://tubitv.com/category/kids_and_family",
    icon: "🧸",
    badge: "Kids",
    badgeClass: "service"
  }
];

let cat = "all";
let q = "";
let favs = JSON.parse(localStorage.getItem("freetv-favs") || "[]");

const grid = document.getElementById("grid");
const title = document.getElementById("title");
const countEl = document.getElementById("count");
const empty = document.getElementById("empty");
const search = document.getElementById("search");
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const toast = document.getElementById("toast");

const titles = {
  all: "All Sources",
  news: "Free News Channels",
  services: "Free Streaming Services",
  entertainment: "Entertainment",
  movies: "Free Movies",
  kids: "Kids",
  favourites: "Your Favourites"
};

function render() {
  let items = data;
  if (cat === "favourites") items = data.filter(d => favs.includes(d.id));
  else if (cat !== "all") items = data.filter(d => d.cat === cat);

  if (q.trim()) {
    const s = q.toLowerCase();
    items = items.filter(d =>
      d.title.toLowerCase().includes(s) ||
      d.desc.toLowerCase().includes(s) ||
      d.source.toLowerCase().includes(s)
    );
  }

  title.textContent = titles[cat] || "Results";
  countEl.textContent = items.length ? `${items.length} source${items.length > 1 ? "s" : ""}` : "";

  if (!items.length) {
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  grid.innerHTML = items.map(d => {
    const isFav = favs.includes(d.id);
    return `
      <article class="card" data-url="${d.url}">
        <div class="card-top">
          <span class="card-badge ${d.badgeClass || ""}">${d.badge}</span>
          ${d.icon}
        </div>
        <div class="card-body">
          <h3 class="card-title">${d.title}</h3>
          <p class="card-desc">${d.desc}</p>
          <div class="card-footer">
            <span class="card-source">${d.source}</span>
            <button class="fav ${isFav ? "active" : ""}" data-id="${d.id}">${isFav ? "♥" : "♡"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", e => {
      if (e.target.closest(".fav")) return;
      window.open(card.dataset.url, "_blank", "noopener,noreferrer");
    });
  });

  document.querySelectorAll(".fav").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleFav(btn.dataset.id);
    });
  });
}

function toggleFav(id) {
  const i = favs.indexOf(id);
  if (i === -1) {
    favs.push(id);
    showToast("Added to favourites");
  } else {
    favs.splice(i, 1);
    showToast("Removed from favourites");
  }
  localStorage.setItem("freetv-favs", JSON.stringify(favs));
  render();
}

function showToast(msg) {
  toast.textContent = msg;
  toast.hidden = false;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.hidden = true, 250);
  }, 2000);
}

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    cat = btn.dataset.cat;
    render();
    sidebar.classList.remove("open");
    document.querySelector(".overlay")?.classList.remove("visible");
  });
});

search.addEventListener("input", () => {
  q = search.value;
  render();
});

document.getElementById("reset").addEventListener("click", () => {
  search.value = "";
  q = "";
  cat = "all";
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
  document.querySelector('[data-cat="all"]').classList.add("active");
  render();
});

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  let ov = document.querySelector(".overlay");
  if (!ov) {
    ov = document.createElement("div");
    ov.className = "overlay";
    document.body.appendChild(ov);
    ov.addEventListener("click", () => {
      sidebar.classList.remove("open");
      ov.classList.remove("visible");
    });
  }
  ov.classList.toggle("visible", sidebar.classList.contains("open"));
});

render();
console.log("FreeTV ready — legal free sources only");