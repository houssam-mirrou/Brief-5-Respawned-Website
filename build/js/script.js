async function add_cards() {
    try {
        const res = await fetch("https://debuggers-games-api.duckdns.org/api/games");
        games = await res.json();
        console.log(games);


    }
    catch (err) {
        console.log("problem in " + err);
    }
}


async function add_filter() {
    try {
        const genre_res = await fetch("https://debuggers-games-api.duckdns.org/api/genres");
        const palt_res = await fetch("https://debuggers-games-api.duckdns.org/api/platforms");
        const genres = await genre_res.json();
        const platforms = await palt_res.json();
        console.log(genres);
        console.log(platforms);

    } catch (err) {
        console.log("problem in " + err);
    }
}

add_cards();
add_filter();