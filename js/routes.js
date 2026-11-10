const ROUTES = {
 startup:"startup.html", welcome:"welcome.html", login:"login.html",
 signup:"signup.html", home:"Home.html", search:"search.html",
 playlist:"playlist.html", player:"player.html"
};
function navigateTo(page) {
 const path = ROUTES[page];
 if (!path) { console.error("Unknown route:", page); return; }
 window.location.href = path;
}
