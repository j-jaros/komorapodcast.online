var border_color_variable = document.querySelector(':root');


async function genRanHex() {

    while (true) {
        const random_hex = [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        console.log(random_hex)
        border_color_variable.style.setProperty("--episode-border-color", `#${random_hex}`)
        await new Promise(r=>setTimeout(r, 1000))
    }
}

genRanHex()