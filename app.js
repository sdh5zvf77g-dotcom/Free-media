// FreeWave v2 — More actually playable content
// Legal free sources only

const mediaData = [
  // ========== PLAYABLE (in-app) ==========
  {
    id: "night-of-living-dead",
    title: "Night of the Living Dead (1968)",
    desc: "Classic public domain horror film. Full movie available to watch.",
    category: "movies",
    source: "Internet Archive",
    url: "https://archive.org/details/night_of_the_living_dead",
    embed: "https://archive.org/embed/night_of_the_living_dead",
    type: "video",
    icon: "🎬",
    badge: "Playable",
    playable: true
  },
  {
    id: "plan-9",
    title: "Plan 9 from Outer Space",
    desc: "Ed Wood's famous public domain sci-fi classic. Full film.",
    category: "movies",
    source: "Internet Archive",
    url: "https://archive.org/details/Plan9FromOuterSpace1959",
    embed: "https://archive.org/embed/Plan9FromOuterSpace1959",
    type: "video",
    icon: "🎬",
    badge: "Playable",
    playable: true
  },
  {
    id: "charade",
    title: "Charade (1963)",
    desc: "Cary Grant & Audrey Hepburn romantic thriller. Public domain in the US.",
    category: "movies",
    source: "Internet Archive",
    url: "https://archive.org/details/charade_201405",
    embed: "https://archive.org/embed/charade_201405",
    type: "video",
    icon: "🎬",
    badge: "Playable",
    playable: true
  },
  {
    id: "his-girl-friday",
    title: "His Girl Friday (1940)",
    desc: "Fast-talking classic comedy with Cary Grant and Rosalind Russell.",
    category: "movies",
    source: "Internet Archive",
    url: "https://archive.org/details/his_girl_friday",
    embed: "https://archive.org/embed/his_girl_friday",
    type: "video",
    icon: "🎬",
    badge: "Playable",
    playable: true
  },
  {
    id: "dnd-librivox",
    title: "Dracula (LibriVox)",
    desc: "Bram Stoker's classic, fully narrated. Free public domain audiobook.",
    category: "audiobooks",
    source: "LibriVox / Archive",
    url: "https://archive.org/details/dracula_librivox",
    audio: "https://archive.org/download/dracula_librivox/dracula_01_stoker.mp3",
    type: "audio",
    icon: "📖",
    badge: "Playable",
    playable: true
  },
  {
    id: "sherlock-librivox",
    title: "The Adventures of Sherlock Holmes",
    desc: "Arthur Conan Doyle. Public domain audiobook, multiple stories.",
    category: "audiobooks",
    source: "LibriVox",
    url: "https://librivox.org/the-adventures-of-sherlock-holmes-by-sir-arthur-conan-doyle/",
    audio: "https://archive.org/download/adventures_holmes/adventure01_doyle.mp3",
    type: "audio",
    icon: "📖",
    badge: "Playable",
    playable: true
  },
  {
    id: "pride-prejudice",
    title: "Pride and Prejudice",
    desc: "Jane Austen classic. Full public domain audiobook.",
    category: "audiobooks",
    source: "LibriVox",
    url: "https://librivox.org/pride-and-prejudice-by-jane-austen/",
    audio: "https://archive.org/download/pride_and_prejudice_1107_librivox/prideandprejudice_01_austen.mp3",
    type: "audio",
    icon: "📖",
    badge: "Playable",
    playable: true
  },
  {
    id: "macleod-impact",
    title: "Impact Moderato (Kevin MacLeod)",
    desc: "Popular free music track. Clear Creative Commons license.",
    category: "music",
    source: "Incompetech",
    url: "https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1300024",
    audio: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Impact%20Moderato.mp3",
    type: "audio",
    icon: "🎵",
    badge: "Playable",
    playable: true
  },
  {
    id: "macleod-carefree",
    title: "Carefree (Kevin MacLeod)",
    desc: "Upbeat free music. Great for background listening.",
    category: "music",
    source: "Incompetech",
    url: "https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1400005",
    audio: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Carefree.mp3",
    type: "audio",
    icon: "🎵",
    badge: "Playable",
    playable: true
  },
  {
    id: "archive-jazz",
    title: "Classic Jazz Collection",
    desc: "Public domain jazz recordings from the Internet Archive.",
    category: "music",
    source: "Internet Archive",
    url: "https://archive.org/details/Jazz",
    type: "link",
    icon: "🎵",
    badge: "Collection",
    playable: false
  },

  // ========== FREE TV (external — they block embedding) ==========
  {
    id: "pluto",
    title: "Pluto TV",
    desc: "Hundreds of free live channels + on-demand. Best free live TV option.",
    category: "freetv",
    source: "Pluto TV",
    url: "https://pluto.tv",
    type: "link",
    icon: "📺",
    badge: "Opens in browser",
    playable: false
  },
  {
    id: "tubi",
    title: "Tubi",
    desc: "Massive free movie & TV library. Excellent selection of films.",
    category: "freetv",
    source: "Tubi",
    url: "https://tubitv.com",
    type: "link",
    icon: "📺",
    badge: "Opens in browser",
    playable: false
  },
  {
    id: "roku-channel",
    title: "The Roku Channel",
    desc: "Free live TV + movies & shows. Works well in browser.",
    category: "freetv",
    source: "Roku",
    url: "https://therokuchannel.roku.com",
    type: "link",
    icon: "📺",
    badge: "Opens in browser",
    playable: false
  },
  {
    id: "plex-free",
    title: "Plex Free",
    desc: "Free movies, shows and live TV channels.",
    category: "freetv",
    source: "Plex",
    url: "https://www.plex.tv/watch-free/",
    type: "link",
    icon: "📺",
    badge: "Opens in browser",
    playable: false
  },
  {
    id: "crackle",
    title: "Crackle",
    desc: "Sony free movies and TV episodes.",
    category: "freetv",
    source: "Crackle",
    url: "https://www.crackle.com",
    type: "link",
    icon: "📺",
    badge: "Opens in browser",
    playable: false
  },
  {
    id: "archive-tv",
    title: "Internet Archive TV",
    desc: "Classic TV shows, old broadcasts and public domain television.",
    category: "freetv",
    source: "Archive.org",
    url: "https://archive.org/details/television",
    type: "link",
    icon: "📼",
    badge: "Collection",
    playable: false
  },

  // ========== MORE MOVIES (mostly external) ==========
  {
    id: "archive-movies",
    title: "Internet Archive Movies",
    desc: "Thousands of public domain and free films. Best place for classic cinema.",
    category: "movies",
    source: "Archive.org",
    url: "https://archive.org/details/movies",
    type: "link",
    icon: "🎬",
    badge: "Huge Library",
    playable: false
  },
  {
    id: "publicdomainmovies",
    title: "Public Domain Movies",
    desc: "Curated public domain feature films.",
    category: "movies",
    source: "Public Domain",
    url: "https://publicdomainmovie.net",
    type: "link",
    icon: "🎬",
    badge: "Free",
    playable: false
  },

  // ========== MUSIC (external collections) ==========
  {
    id: "freemusicarchive",
    title: "Free Music Archive",
    desc: "Independent free music under Creative Commons.",
    category: "music",
    source: "FMA",
    url: "https://freemusicarchive.org",
    type: "link",
    icon: "🎵",
    badge: "CC Music",
    playable: false
  },
  {
    id: "jamendo",
    title: "Jamendo",
    desc: "Indie artists offering free streaming under free licenses.",
    category: "music",
    source: "Jamendo",
    url: "https://www.jamendo.com",
    type: "link",
    icon: "🎵",
    badge: "Indie",
    playable: false
  },
  {
    id: "incompetech",
    title: "Incompetech (Kevin MacLeod)",
    desc: "Huge library of free music with clear licenses.",
    category: "music",
    source: "Incompetech",
    url: "https://incompetech.com/music/",
    type: "link",
    icon: "🎵",
    badge: "Royalty Free",
    playable: false
  },

  // ========== AUDIOBOOKS ==========
  {
    id: "librivox",
    title: "LibriVox",
    desc: "Thousands of free public domain audiobooks read by volunteers.",
    category: "audiobooks",
    source: "LibriVox",
    url: "https://librivox.org",
    type: "link",
    icon: "📖",
    badge: "Public Domain",
    playable: false
  },
  {
    id: "archive-audiobooks",
    title: "Internet Archive Audiobooks",
    desc: "Large free audiobook and spoken word collection.",
    category: "audiobooks",
    source: "Archive.org",
    url: "https://archive.org/details/audio_bookspoetry",
    type: "link",
    icon: "📖",
    badge: "Free",
    playable: false
  },

  // ========== PODCASTS ==========
  {
    id: "podcast-index",
    title: "Podcast Index",
    desc: "Open podcast directory — discover free podcasts.",
    category: "podcasts",
    source: "Podcast Index",
    url: "https://podcastindex.org",
    type: "link",
    icon: "🎙",
    badge: "Open",
    playable: false
  },

  // ========== IMAGES ==========
  {
    id: "unsplash",
    title: "Unsplash",
    desc: "Beautiful free high-resolution photos.",
    category: "images",
    source: "Unsplash",
    url: "https://unsplash.com",
    type: "link",
    icon: "🖼",
    badge: "Free Photos",
    playable: false
  },
  {
    id: "pixabay",
    title: "Pixabay",
    desc: "Free images, illustrations and videos.",
    category: "images",
    source: "Pixabay",
    url: "https://pixabay.com",
    type: "link",
    icon: "🖼",
    badge: "Free",
    playable: false
  },
  {
    id: "wikimedia",
    title: "Wikimedia Commons",
    desc: "Millions of freely usable media files.",
    category: "images",
    source: "Wikimedia",
    url: "https://commons.wikimedia.org",
    type: "link",
    icon: "🖼",
    badge: "Free Media",
    playable: false
  },
  {
    id: "openverse",
    title: "Openverse",
    desc: "Search Creative Commons images, audio and more in one place.",
    category: "images",
    source: "Openverse",
    url: "https://openverse.org",
    type: "link",
    icon: "🖼",
    badge: "CC Search",
    playable: false
  }
];

// State
let currentCategory = "all";
let searchQuery = "";
let favourites = JSON.parse(localStorage.getItem("freewave-favs") || "[]");
let currentPlaying = null;

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
const player = document.getElementById("player");
const audioEl = document.getElementById("audioEl");
const playPauseBtn = document.getElementById("playPauseBtn");
const stopBtn = document.getElementById("stopBtn");
const playerTitle = document.getElementById("playerTitle");
const playerSource = document.getElementById("playerSource");
const playerIcon = document.getElementById("playerIcon");
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");

const titles = {
  all: "All Free Media",
  playable: "Play Now (in-app)",
  freetv: "Free TV (opens in browser)",
  movies: "Movies",
  music: "Music",
  podcasts: "Podcasts",
  audiobooks: "Audiobooks",
  images: "Images & Photos",
  favourites: "Your Favourites"
};

function render() {
  let items = mediaData;

  if (currentCategory === "favourites") {
    items = mediaData.filter(item => favourites.includes(item.id));
  } else if (currentCategory === "playable") {
    items = mediaData.filter(item => item.playable);
  } else if (currentCategory !== "all") {
    items = mediaData.filter(item => item.category === currentCategory);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    items = items.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.source.toLowerCase().includes(q) ||
      (item.badge && item.badge.toLowerCase().includes(q))
    );
  }

  sectionTitle.textContent = titles[currentCategory] || "Results";
  resultCount.textContent = items.length ? `${items.length} item${items.length !== 1 ? "s" : ""}` : "";

  if (items.length === 0) {
    grid.innerHTML = "";
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  grid.innerHTML = items.map(item => {
    const isFav = favourites.includes(item.id);
    const cardClass = item.playable ? "card playable" : "card external";
    return `
      <article class="${cardClass}" data-id="${item.id}">
        <div class="card-image">
          <span class="card-badge">${item.badge}</span>
          ${item.icon}
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.desc}</p>
          <div class="card-footer">
            <span class="card-source">${item.source}</span>
            <button class="fav-btn ${isFav ? "active" : ""}" data-id="${item.id}" title="Favourite">
              ${isFav ? "♥" : "♡"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".fav-btn")) return;
      const id = card.dataset.id;
      const item = mediaData.find(m => m.id === id);
      if (!item) return;

      if (item.playable) {
        if (item.type === "video" && item.embed) {
          openVideo(item);
        } else if (item.type === "audio" && item.audio) {
          playAudio(item);
        } else {
          window.open(item.url, "_blank", "noopener,noreferrer");
        }
      } else {
        window.open(item.url, "_blank", "noopener,noreferrer");
      }
    });
  });

  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFav(btn.dataset.id);
    });
  });
}

function playAudio(item) {
  currentPlaying = item;
  audioEl.src = item.audio;
  audioEl.play().catch(() => showToast("Could not play — try another track"));
  player.hidden = false;
  document.body.classList.add("has-player");
  playerTitle.textContent = item.title;
  playerSource.textContent = item.source;
  playerIcon.textContent = item.icon;
  playPauseBtn.textContent = "⏸";
  showToast("Playing: " + item.title);
}

function openVideo(item) {
  modalTitle.textContent = item.title;
  videoFrame.src = item.embed;
  videoModal.hidden = false;
  // Pause any audio
  audioEl.pause();
  playPauseBtn.textContent = "▶";
}

function closeVideo() {
  videoFrame.src = "";
  videoModal.hidden = true;
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

// Player controls
playPauseBtn.addEventListener("click", () => {
  if (audioEl.paused) {
    audioEl.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audioEl.pause();
    playPauseBtn.textContent = "▶";
  }
});

stopBtn.addEventListener("click", () => {
  audioEl.pause();
  audioEl.currentTime = 0;
  audioEl.removeAttribute("src");
  player.hidden = true;
  document.body.classList.remove("has-player");
  playPauseBtn.textContent = "▶";
  currentPlaying = null;
});

audioEl.addEventListener("ended", () => {
  playPauseBtn.textContent = "▶";
});

modalClose.addEventListener("click", closeVideo);
modalBackdrop.addEventListener("click", closeVideo);

// Navigation
document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    render();
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

// Init
render();
console.log("FreeWave v2 ready — more playable content");