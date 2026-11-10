
// Header
function renderHeader() {

    return `
    < div class="app-header" >

            <a class="app-brand" href="Home.html">
                ♫ <span>Spotify</span>
            </a>

            <div class="icon-actions">

                <button class="icon-btn" aria-label="Notifications">
                    ♧
                </button>

                <button class="icon-btn" aria-label="Recently played">
                    ◷
                </button>

                <button class="icon-btn profile-open" aria-label="Open profile">
                    ☰
                </button>

            </div>

        </div >
    `;
}


// Bottom Navigation
function renderBottomNav(active) {

    const links = [
        {
            id: "home",
            href: "Home.html",
            icon: "⌂",
            label: "Home"
        },
        {
            id: "search",
            href: "search.html",
            icon: "⌕",
            label: "Search"
        },
        {
            id: "playlist",
            href: "playlist.html",
            icon: "▣",
            label: "Your Library"
        },
        {
            id: "player",
            href: "player.html",
            icon: "◉",
            label: "Now Playing"
        }
    ];

    return `
    < nav class="bottom-nav" >

        ${
            links.map(x => `
                <a
                    class="${active === x.id ? "active" : ""}"
                    href="${x.href}"
                >
                    <span>${x.icon}</span>
                    ${x.label}
                </a>
            `).join("")
}

        </nav >
    `;
}


// Profile Drawer
function renderProfileDrawer() {

    return `
    < div class="profile-overlay" id = "profile-overlay" >

        <aside class="profile-drawer">

            <div class="profile-user">

                <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120"
                    alt="Profile picture"
                >

                    <strong>Sophia Rose</strong>

            </div>

            <nav class="profile-links">

                <a href="Home.html">
                    ⌂ &nbsp; Home
                </a>

                <a href="#">
                    ✉ &nbsp; Messages
                </a>

                <a href="#">
                    ♧ &nbsp; Notifications
                </a>

                <a href="#">
                    ♧ &nbsp; Bookmarks
                </a>

                <a href="#">
                    ♙ &nbsp; Profile
                </a>

            </nav>

            <a
                class="profile-logout"
                href="welcome.html"
                onclick="
                        localStorage.removeItem('isLoggedIn');
                        localStorage.removeItem('userEmail');
                    "
            >
                ↪ &nbsp; Log Out
            </a>

        </aside>

        </div >
    `;
}


// Song Card
function songCard(song) {

    return `
    < article
class="media-card"
data - song="${song.id}"
    >

    <img
        src="${song.cover}"
        alt="${song.title} album artwork"
    >

        <strong>${song.title}</strong>

        <small>${song.artist}</small>

    </article>
`;
}


// Playlist Track Row
function trackRow(song, index) {

    return `
    < div class="track-row" >

            <span>
                ${index + 1}
            </span>

            <div class="track-title">

                <img
                    src="${song.cover}"
                    alt="${song.title} album artwork"
                >

                <div>

                    <strong>
                        ${song.title}
                    </strong>

                    <small>
                        ${song.artist}
                    </small>

                </div>

            </div>

            <span class="track-album">
                ${song.album}
            </span>

            <span class="track-duration">
                ${song.duration}
            </span>

        </div >
    `;
}