const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const christmas = new Date(2023, 11, 25, 0, 0, 0);
    const timeDiff = christmas.getTime() - date.getTime();

    const d = String(Math.floor(timeDiff / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const h = String(Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).padStart(2, "0");
    const m = String(Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60))).padStart(2, "0");
    const s = String(Math.floor(timeDiff % (1000 * 60) / 1000)).padStart(2, "0");
    clock.innerText = `${d}d ${h}h ${m}m ${s}s`;
}

getClock();
setInterval(getClock, 1000);
