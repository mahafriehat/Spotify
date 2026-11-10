document.addEventListener("DOMContentLoaded", () => {

    // Header
    const header = document.getElementById("app-header");

    if (header) {
        header.innerHTML = renderHeader();
    }

    // Bottom Navigation
    const nav = document.getElementById("bottom-nav");

    const page = location.pathname.split("/").pop();

    const active =
        page === "search.html" ? "search" :
        page === "playlist.html" ? "playlist" :
        page === "player.html" ? "player" :
        "home";

    if (nav) {
        nav.innerHTML = renderBottomNav(active);
    }

    // Profile Drawer
    const profileRoot = document.getElementById("profile-root");

    if (profileRoot) {
        profileRoot.innerHTML = renderProfileDrawer();
    }

    document.querySelectorAll(".profile-open").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("profile-overlay")?.classList.add("open");
        });
    });

    document.getElementById("profile-overlay")?.addEventListener("click", e => {
        if (e.target.id === "profile-overlay") {
            e.currentTarget.classList.remove("open");
        }
    });

    // Made For You
    const made = document.getElementById("made-for-you");

    if (made) {
        made.innerHTML = playlists.map(p => `
    < article class="feature-card" >
        <img src="${p.cover}" alt="${p.title}">

            <div>
                <strong>${p.title}</strong>
                <small>${p.description}</small>
            </div>
        </article>
`).join("");
    }

    // Trending Songs
    const trending = document.getElementById("trending");

    if (trending) {
        trending.innerHTML = songs.slice(0, 4).map(songCard).join("");
    }

    // Top Picks
    const picks = document.getElementById("top-picks");

    if (picks) {
        picks.innerHTML = songs.slice(1).map(songCard).join("");
    }

    // Browse Categories
    const browse = document.getElementById("browse-grid");

    if (browse) {
        browse.innerHTML = browseCategories.map((c, i) => `
    < a class="genre-card ${["orange", "pink", "purple", "blue", "teal", "wine"][i]}"
href = "playlist.html" >
    ${ c }
            </a >
    `).join("");
    }

    // Playlist Information
    const playlistCover = document.getElementById("playlist-cover");
    const playlistTitle = document.getElementById("playlist-title");
    const playlistDescription = document.getElementById("playlist-description");

    const currentPlaylist = playlists[0];

    if (currentPlaylist) {

        if (playlistCover) {
            playlistCover.src = currentPlaylist.cover;
            playlistCover.alt = currentPlaylist.title;
        }

        if (playlistTitle) {
            playlistTitle.textContent = currentPlaylist.title;
        }

        if (playlistDescription) {
            playlistDescription.textContent = currentPlaylist.description;
        }
    }

    // Playlist Tracks
    const tracks = document.getElementById("playlist-tracks");

    if (tracks) {
        tracks.innerHTML = songs.map(trackRow).join("");
    }

    // Play Playlist
    const play = document.getElementById("playlist-play");

    if (play) {
        play.addEventListener("click", () => {
            localStorage.setItem("currentSongId", "1");
            navigateTo("player");
        });
    }

    // Media Cards
    document.querySelectorAll(".media-card").forEach(card => {
        card.addEventListener("click", () => {
            localStorage.setItem("currentSongId", card.dataset.song);
            navigateTo("player");
        });
    });

    // Search
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");

    function showResults(query = "") {

        if (!results) {
            return;
        }

        const matches = songs.filter(s =>
            (s.title + " " + s.artist)
                .toLowerCase()
                .includes(query.toLowerCase())
        );

        results.innerHTML = matches.map(s => `
    < a class="result-row"
href = "player.html"
data - song="${s.id}" >

    <img src="${s.cover}" alt="${s.title}">

        <div>
            <strong>${s.title}</strong>
            <small>${s.artist}</small>
        </div>

    </a>
`).join("") || "<p>No results found.</p>";

        results.querySelectorAll("[data-song]").forEach(row => {
            row.addEventListener("click", () => {
                localStorage.setItem("currentSongId", row.dataset.song);
            });
        });
    }

    if (input) {
        showResults();

        input.addEventListener("input", () => {
            showResults(input.value);
        });
    }

});