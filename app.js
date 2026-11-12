// FreeWave — Free Media & TV Prototype
// Legal free sources only

const mediaData = [
  // ========== FREE TV ==========
  {
    id: "pluto",
    title: "Pluto TV",
    desc: "Hundreds of free live TV channels + on-demand movies & shows. No account needed.",
    category: "freetv",
    source: "Pluto TV",
    url: "https://pluto.tv",
    icon: "📺",
    badge: "Live TV"
  },
  {
    id: "tubi",
    title: "Tubi",
    desc: "Huge library of free movies and TV shows with ads. Excellent selection.",
    category: "freetv",
    source: "Tubi",
    url: "https://tubitv.com",
    icon: "📺",
    badge: "On Demand"
  },
  {
    id: "freevee",
    title: "Amazon Freevee",
    desc: "Free movies, series and live channels from Amazon. Watch in browser or app.",
    category: "freetv",
    source: "Freevee",
    url: "https://www.amazon.com/gp/video/storefront/ref=atv_hm_hom_c_c2a96b04_smh_1_0?contentType=home&contentId=home&pageTypeId=home",
    icon: "📺",
    badge: "Free"
  },
  {
    id: "roku-channel",
    title: "The Roku Channel",
    desc: "Free live channels, movies and TV shows. Available on web and many devices.",
    category: "freetv",
    source: "Roku",
    url: "https://therokuchannel.roku.com",
    icon: "📺",
    badge: "Live + VOD"
  },
  {
    id: "plex-free",
    title: "Plex Free Movies & TV",
    desc: "Free ad-supported movies, shows and live TV. Great interface.",
    category: "freetv",
    source: "Plex",
    url: "https://www.plex.tv/watch-free/",
    icon: "📺",
    badge: "Free"
  },
  {
    id: "archive-tv",
    title: "Internet Archive TV",
    desc: "Classic TV shows, news broadcasts and public domain television content.",
    category: "freetv",
    source: "Archive.org",
    url: "https://archive.org/details/television",
    icon: "📼",
    badge: "Classic"
  },
  {
    id: "crackle",
    title: "Crackle",
    desc: "Free movies and TV episodes. Sony-backed free streaming service.",
    category: "freetv",
    source: "Crackle",
    url: "https://www.crackle.com",
    icon: "📺",
    badge: "Free"
  },

  // ========== MOVIES ==========
  {
    id: "archive-movies",
    title: "Internet Archive Movies",
    desc: "Thousands of public domain and freely available films. Classics, documentaries, indie.",
    category: "movies",
    source: "Archive.org",
    url: "https://archive.org/details/movies",
    icon: "🎬",
    badge: "Public Domain"
  },
  {
    id: "publicdomainmovies",
    title: "Public Domain Movies",
    desc: "Curated public domain feature films you can watch and download freely.",
    category: "movies",
    source: "Public Domain",
    url: "https://publicdomainmovie.net",
    icon: "🎬",
    badge: "Free Download"
  },
  {
    id: "youtube-movies",
    title: "YouTube Free Movies",
    desc: "Official free full-length movies on YouTube (search 'free movies' or use Movie channel).",
    category: "movies",
    source: "YouTube",
    url: "https://www.youtube.com/results?search_query=full+free+movies",
    icon: "🎬",
    badge: "Free"
  },
  {
    id: "vimeo-free",
    title: "Vimeo Staff Picks & Free",
    desc: "High quality free and Creative Commons films and short films.",
    category: "movies",
    source: "Vimeo",
    url: "https://vimeo.com/channels/staffpicks",
    icon: "🎬",
    badge: "Creative"
  },

  // ========== MUSIC ==========
  {
    id: "freemusicarchive",
    title: "Free Music Archive",
    desc: "High-quality free music from independent artists. Many Creative Commons tracks.",
    category: "music",
    source: "FMA",
    url: "https://freemusicarchive.org",
    icon: "🎵",
    badge: "CC Music"
  },
  {
    id: "ccmixter",
    title: "ccMixter",
    desc: "Remixable Creative Commons music. Great for creators and listening.",
    category: "music",
    source: "ccMixter",
    url: "http://ccmixter.org",
    icon: "🎵",
    badge: "Remix"
  },
  {
    id: "incompetech",
    title: "Incompetech",
    desc: "Kevin MacLeod’s famous free music library. Huge variety, clear licenses.",
    category: "music",
    source: "Incompetech",
    url: "https://incompetech.com/music/",
    icon: "🎵",
    badge: "Royalty Free"
  },
  {
    id: "archive-audio",
    title: "Internet Archive Audio",
    desc: "Live concerts, old radio, classical, spoken word and free music collections.",
    category: "music",
    source: "Archive.org",
    url: "https://archive.org/details/audio",
    icon: "🎵",
    badge: "Vast"
  },
  {
    id: "jamendo",
    title: "Jamendo",
    desc: "Independent artists offering free streaming and free downloads under CC licenses.",
    category: "music",
    source: "Jamendo",
    url: "https://www.jamendo.com",
    icon: "🎵",
    badge: "Indie"
  },

  // ========== PODCASTS ==========
  {
    id: "podcast-index",
    title: "Podcast Index",
    desc: "Open podcast directory. Discover free podcasts from across the open ecosystem.",
    category: "podcasts",
    source: "Podcast Index",
    url: "https://podcastindex.org",
    icon: "🎙",
    badge: "Open"
  },
  {
    id: "internet-archive-podcasts",
    title: "Archive.org Podcasts & Radio",
    desc: "Historic radio shows, lectures and free podcast-style content.",
    category: "podcasts",
    source: "Archive.org",
    url: "https://archive.org/details/radio",
    icon: "🎙",
    badge: "Historic"
  },
  {
    id: "spotify-free",
    title: "Spotify Free Podcasts",
    desc: "Huge free podcast catalogue (with free account). Excellent discovery.",
    category: "podcasts",
    source: "Spotify",
    url: "https://open.spotify.com/genre/podcasts-web",
    icon: "🎙",
    badge: "Free Tier"
  },

  // ========== AUDIOBOOKS ==========
  {
    id: "librivox",
    title: "LibriVox",
    desc: "Free public domain audiobooks read by volunteers. Thousands of classics.",
    category: "audiobooks",
    source: "LibriVox",
    url: "https://librivox.org",
    icon: "📖",
    badge: "Public Domain"
  },
  {
    id: "archive-audiobooks",
    title: "Internet Archive Audiobooks",
    desc: "Large collection of free audiobooks and spoken word recordings.",
    category: "audiobooks",
    source: "Archive.org",
    url: "https://archive.org/details/audio_bookspoetry",
    icon: "📖",
    badge: "Free"
  },
  {
    id: "loyalbooks",
    title: "Loyal Books",
    desc: "Free public domain audiobooks and ebooks. Clean interface.",
    category: "audiobooks",
    source: "Loyal Books",
    url: "https://www.loyalbooks.com",
    icon: "📖",
    badge: "Classics"
  },

  // ========== IMAGES ==========
  {
    id: "unsplash",
    title: "Unsplash",
    desc: "Beautiful free high-resolution photos. Free for almost any use.",
    category: "images",
    source: "Unsplash",
    url: "https://unsplash.com",
    icon: "🖼",
    badge: "Free Photos"
  },
  {
    id: "pixabay",
    title: "Pixabay",
    desc: "Free images, illustrations, vectors and videos. No attribution required on most.",
    category: "images",
    source: "Pixabay",
    url: "https://pixabay.com",
    icon: "🖼",
    badge: "Free"
  },
  {
    id: "pexels",
    title: "Pexels",
    desc: "High quality free stock photos and videos from talented creators.",
    category: "images",
    source: "Pexels",
    url: "https://www.pexels.com",
    icon: "🖼",
    badge: "Free"
  },
  {
    id: "wikimedia",
    title: "Wikimedia Commons",
    desc: "Millions of freely usable media files. Images, video, audio — all free licenses.",
    category: "images",
    source: "Wikimedia",
    url: "https://commons.wikimedia.org",
    icon: "🖼",
    badge: "Free Media"
  },
  {
    id: "openverse",
    title: "Openverse",
    desc: "Search Creative Commons and public domain images, audio and more in one place.",
    category: "images",
    source: "Openverse",
    url: "https://openverse.org",
    icon: "🖼",
    badge: "CC Search"
  }
];

// State
let currentCategory = "all";
let searchQuery = "";
let favourites = JSON.parse(localStorage.getItem("freewave-favs") || "[]");

// Elements
const grid = document.getElementById("mediaGrid");
const sectionTitle = document.getElementById("sectionTitle");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const toast = document.getElementById("toast");

// Titles map
const titles = {
  all: "All Free Media",
  freetv: "Free TV Channels & Shows",
  movies: "Free Movies",
  music: "Free Music",
  podcasts: "Free Podcasts",
  audiobooks: "Free Audiobooks",
  images: "Free Images & Photos",
  favourites: "Your Favourites"
};

// Render
function render() {
  let items = mediaData;

  if (currentCategory === "favourites") {
    items = mediaData.filter(item => favourites.includes(item.id));
  } else if (currentCategory !== "all") {
    items = mediaData.filter(item => item.category === currentCategory);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    items = items.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.source.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q)
    );
  }

  sectionTitle.textContent = titles[currentCategory] || "Results";
  resultCount.textContent = items.length ? `${items.length} source${items.length !== 1 ? "s" : ""}` : "";

  if (items.length === 0) {
    grid.innerHTML = "";
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  grid.innerHTML = items.map(item => {
    const isFav = favourites.includes(item.id);
    return `
      <article class="card" data-id="${item.id}" data-url="${item.url}">
        <div class="card-image">
          <span class="card-badge">${item.badge}</span>
          ${item.icon}
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.desc}</p>
          <div class="card-footer">
            <span class="card-source">${item.source}</span>
            <button class="fav-btn ${isFav ? "active" : ""}" data-id="${item.id}" title="${isFav ? "Remove from favourites" : "Add to favourites"}">
              ${isFav ? "♥" : "♡"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Card click → open source
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".fav-btn")) return;
      const url = card.dataset.url;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  });

  // Fav buttons
  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFav(btn.dataset.id);
    });
  });
}

function toggleFav(id) {
  const idx = favourites.indexOf(id);
  if (idx === -1) {
    favourites.push(id);
    showToast("Added to favourites");
  } else {
    favourites.splice(idx, 1);
    showToast("Removed from favourites");
  }
  localStorage.setItem("freewave-favs", JSON.stringify(favourites));
  render();
}

function showToast(msg) {
  toast.textContent = msg;
  toast.hidden = false;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.hidden = true, 300);
  }, 2200);
}

// Navigation
document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    render();
    // Close mobile sidebar
    sidebar.classList.remove("open");
    document.querySelector(".sidebar-overlay")?.classList.remove("visible");
  });
});

// Search
searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  searchClear.classList.toggle("visible", searchQuery.length > 0);
  render();
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  searchClear.classList.remove("visible");
  render();
  searchInput.focus();
});

document.getElementById("resetSearch").addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  searchClear.classList.remove("visible");
  currentCategory = "all";
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
  document.querySelector('[data-category="all"]').classList.add("active");
  render();
});

// Mobile menu
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  let overlay = document.querySelector(".sidebar-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    document.body.appendChild(overlay);
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("visible");
    });
  }
  overlay.classList.toggle("visible", sidebar.classList.contains("open"));
});

// Theme toggle (simple dark only for now — keeps the purple vibe)
document.getElementById("themeToggle").addEventListener("click", () => {
  showToast("Dark theme locked in for the best vibe ✨");
});

// Init
render();
console.log("FreeWave ready — legal free media only");