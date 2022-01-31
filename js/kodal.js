(() => {
    const refs = {
        openKodalBtn: document.querySelector("[data-kodal-open]"),
        closeKodalBtn: document.querySelector("[data-kodal-close]"),
        kodal: document.querySelector("[data-kodal]"),
    };

    refs.openKodalBtn.addEventListener("click", toggleKodal);
    refs.closeKodalBtn.addEventListener("click", toggleKodal);

    function toggleKodal() {
        refs.kodal.classList.toggle("is-hidden");
    }
})();