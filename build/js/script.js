const card_holder = document.querySelector(".card-holder");
const filter = document.querySelector(".filter");
const filter_button = document.querySelector(".filter-button");
const main_body = document.querySelector(".main-body");
const close_filter = document.querySelector(".close-filter");
const results = document.querySelector(".results");
const loading = document.querySelector(".loading");
const search_bar = document.querySelector(".search-bar");
const genre_filter = document.querySelector(".genre-filter");
const genre_items = document.querySelector(".genre-items");
genre_items.classList.add("flex", "flex-col", "text-xl", "gap-2");
const platform_filter = document.querySelector(".platform-filter");
const plat_items = document.querySelector(".patform-items");
plat_items.classList.add("flex", "flex-col", "text-xl", "gap-2");
const home = document.querySelector(".home");
const favorite = document.querySelector(".favorite");
const game_pop_up = document.querySelector(".game-pop-up");
const filter_body_conainer = document.querySelector(".filter-body-conainer");

function create_icons(plateforms) {
    let ps_icon = document.createElement("i");
    let xbox_icon = document.createElement("i");
    let win_icon = document.createElement("i");
    let and_icon = document.createElement("i");
    let app_icon = document.createElement("i");
    let lin_icon = document.createElement("i");
    let mac_icon = document.createElement("i");
    let nin_icon = document.createElement("i");
    ps_icon.classList.add("fa-brands", "fa-playstation", "text-2xl");
    xbox_icon.classList.add("fa-brands", "fa-xbox", "text-2xl");
    win_icon.classList.add("fa-brands", "fa-windows", "text-2xl");
    and_icon.classList.add("fa-brands", "fa-android", "text-2xl");
    app_icon.classList.add("fa-brands", "fa-apple", "text-2xl");
    lin_icon.classList.add("fa-brands", "fa-linux", "text-2xl");
    mac_icon.classList.add("fa-solid", "fa-laptop", "text-2xl");
    nin_icon.innerHTML = `<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6_74)">
                        <path
                            d="M10.5075 9.00562C10.5075 4.07812 10.5188 0.037125 10.5334 0.025875C10.5446 0.01125 11.2905 0 12.1849 0C13.482 0 13.8836 0.01125 14.1458 0.05625C16.092 0.3915 17.5714 1.85625 17.9404 3.798C17.9921 4.07025 18 4.70813 18 8.98425C18 13.5518 18.0056 14.0884 17.8616 14.5822C17.8369 14.6677 17.8076 14.751 17.7716 14.8545C17.4871 15.6834 16.9745 16.4153 16.2927 16.9659C15.611 17.5166 14.7876 17.8637 13.9174 17.9674C13.5608 18.0045 10.6673 18.0191 10.5671 17.982C10.5109 17.9595 10.5075 17.136 10.5075 9.00562ZM15.7669 9.30825C15.6692 9.02677 15.5039 8.77355 15.2856 8.57075C15.0673 8.36795 14.8027 8.22177 14.5148 8.145C14.0659 8.02894 13.5896 8.08943 13.184 8.314C12.7784 8.53856 12.4744 8.91011 12.3345 9.35213C12.2417 9.69596 12.2363 10.0575 12.3188 10.404C12.4556 10.8533 12.7597 11.233 13.1683 11.4647C13.5769 11.6965 14.0589 11.7626 14.5148 11.6494C15.0885 11.4964 15.5363 11.0824 15.7635 10.4929C15.8873 10.1722 15.8906 9.65812 15.7669 9.30825ZM4.17376 3.73162C3.93976 3.77662 3.58201 3.9555 3.39189 4.12313C3.00039 4.46175 2.80689 4.94325 2.83614 5.50912C2.85076 5.80387 2.86989 5.88263 2.98914 6.12113C3.16351 6.48225 3.42789 6.74662 3.79014 6.9255C4.03989 7.04925 4.10289 7.06388 4.42801 7.07513C4.72164 7.08638 4.82626 7.07513 5.02426 7.00763C5.83314 6.73537 6.32139 5.95012 6.18301 5.14462C6.02326 4.18612 5.11426 3.54487 4.17376 3.73162Z"
                            fill="#F5F5F5" />
                        <path
                            d="M3.85302 0.0596831C2.9786 0.214457 2.16664 0.615986 1.51287 1.21694C0.859089 1.8179 0.390739 2.59323 0.163022 3.45156C-0.000102704 4.08156 -0.0113527 4.45056 0.00552229 9.33756C0.0167723 13.8263 0.0212723 13.9298 0.0955223 14.2763C0.509522 16.1438 1.83702 17.4758 3.72252 17.9157C3.97002 17.9719 4.28165 17.9832 6.29877 17.9944C8.38677 18.0079 8.60277 18.0046 8.6579 17.9494C8.71415 17.8932 8.71752 17.1732 8.71752 9.01693C8.71752 2.97118 8.70627 0.122683 8.6804 0.0709331C8.64327 0.00343313 8.57915 5.81308e-05 6.39665 0.00343313C4.6214 0.00793313 4.08815 0.0191831 3.85415 0.0596831H3.85302ZM7.22802 16.5578L5.70927 16.5398C4.31202 16.5252 4.1624 16.5173 3.8834 16.4464C3.30267 16.3031 2.77453 15.9979 2.36033 15.5664C1.94612 15.1349 1.66284 14.5947 1.5434 14.0086C1.46015 13.6317 1.46015 4.35718 1.5389 3.98818C1.64757 3.47522 1.88039 2.99673 2.21695 2.59466C2.55352 2.19258 2.98356 1.87918 3.4694 1.68193C3.96215 1.48393 4.1894 1.46143 5.78465 1.45693L7.2269 1.45356V16.5578H7.22802Z"
                            fill="#F5F5F5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_6_74">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>`;


    let icon_holder = document.createElement("div");
    icon_holder.classList.add("flex", "flex-row");
    let sting = [];
    for (let plat of plateforms) {
        switch (plat.platform.name) {
            case "PlayStation 4":
            case "PlayStation 5":
            case "PlayStation 3":
            case "PS Vita":
                icon_holder.appendChild(ps_icon);
                break;

            case "Xbox One":
            case "Xbox Series S/X":
            case "Xbox 360":
                icon_holder.appendChild(xbox_icon);
                break;

            case "PC":
                icon_holder.appendChild(win_icon);
                break;

            case "Nintendo Switch":
            case "Nintendo 3DS":
            case "Wii U":
                icon_holder.appendChild(nin_icon);
                break;

            case "Android":
                icon_holder.appendChild(and_icon);
                break;

            case "iOS":
                icon_holder.appendChild(app_icon);
                break;

            case "Linux":
                icon_holder.appendChild(lin_icon);
                break;
            case "macOS":
            case " macOS":
                icon_holder.appendChild(mac_icon);
            default:
                console.log("Platform not recognized:", plat.platform.name);
                break;
        }
        sting.push(plat.platform.name);
    }
    return icon_holder;
}

function create_card(game) {
    //creating card icons

    let fav_icon = document.createElement("i");
    fav_icon.classList.add("ri-heart-3-line", "text-3xl");
    //game title
    let title = document.createElement("h1");
    title.classList.add("text-xl");
    title.textContent = game.name;
    //game image
    let game_img = document.createElement("img");
    game_img.src = game.background_image;
    game_img.classList.add("rounded-t-3xl");
    //game card
    let card = document.createElement("div");
    //icon holder


    let icon_holder = create_icons(game.platforms);

    let fav_holder = document.createElement("div");
    fav_holder.classList.add("flex", "justify-end", "w-11/12");
    fav_holder.appendChild(fav_icon);
    icon_holder.appendChild(fav_holder);
    //adding element to card

    card.classList.add(
        "inline-block", "break-inside-avoid", "mb-6",
        "bg-[#5F6261]", "border-2", "border-[#3D4044]",
        "rounded-3xl", "font-semibold", "overflow-hidden", "shadow-md"
    );
    //card text

    let release = document.createElement("h1");
    release.textContent = "Release Date :";
    release.classList.add("text-[#B0B3B8]");
    let date = document.createElement("h1");
    date.textContent = game.released;

    let release_div = document.createElement("div");
    release_div.classList.add("flex", "flex-row", "place-content-between");
    release_div.appendChild(release);
    release_div.appendChild(date);

    let genre = document.createElement("h1");
    genre.textContent = "Genre :";
    genre.classList.add("text-[#B0B3B8]");
    let type = document.createElement("h1");
    let genre_type = [];
    let i = 0;
    for (let string of game.genres) {
        if (i >= 3) {
            genre_type.push(" More++");
            break;
        }
        i++;
        genre_type.push(string.name);
    }
    type.textContent = genre_type.join(', ');

    let genre_div = document.createElement("div");
    genre_div.classList.add("flex", "flex-row", "place-content-between");
    genre_div.appendChild(genre);
    genre_div.appendChild(type);

    let text_container = document.createElement("div");
    text_container.classList.add("flex", "flex-col", "gap-4", "p-5");
    icon_holder.classList.add("flex", "flex-row", "gap-3", "items-center");
    text_container.appendChild(icon_holder);
    text_container.appendChild(title);
    text_container.appendChild(release_div);
    text_container.appendChild(genre_div);


    card.appendChild(game_img);
    card.classList.add("bg-[#5F6261]");
    card.appendChild(text_container);
    const card_div = document.createElement("div");
    card_div.classList.add("inline-block", "break-inside-avoid", "mb-6");
    let temp_icons = document.createElement("div");
    const copy = icon_holder.cloneNode(true);
    temp_icons.appendChild(copy);
    let temp_list =
    {
        img: game.background_image,
        game_name: game.name,
        plateforms: game.platforms,
        genre: game.genres,
        date: game.released,
        rating: game.rating,
        about: game.description
    }
    card_div.addEventListener("click", () => {
        pop_up = true;
        while (game_pop_up.firstChild) {
            game_pop_up.removeChild(game_pop_up.firstChild);
        }
        game_pop(temp_list);
        game_pop_up.classList.toggle("hidden");
        filter_body_conainer.classList.toggle("hidden");

    });
    card_div.appendChild(card);
    card_holder.appendChild(card_div);

}

let pop_up = false;

function game_pop(game) {
    const temp_pop = document.createElement("div");
    temp_pop.classList.add("flex", "flex-col", "text-white", "text-2xl", "rounded-3xl", "bg-[#5F6261]", "w-full");
    const head_div = document.createElement("div");
    head_div.classList.add("flex", "flex-row");
    const img_div = document.createElement("div");
    img_div.classList.add("h-4/6", "w-4/6");
    const img = document.createElement("img");
    img.src = game.img;
    img.classList.add(
        "rounded-tl-3xl",
        "w-3/5",
        "h-96",
        "object-cover",
        "object-center",
        "shadow-md"
    );
    img_div.appendChild(img);
    head_div.appendChild(img);
    const right_container = document.createElement("div");
    right_container.classList.add("flex", "flex-col", "w-1/2", "p-8", "gap-3");
    const title_div = document.createElement("div");
    title_div.classList.add("flex", "flex-row", "place-content-between");
    const tem_title = document.createElement("h1");
    tem_title.textContent = game.game_name;
    const fav_icon = document.createElement("i");
    fav_icon.classList.add("ri-heart-3-line", "text-3xl");
    title_div.appendChild(tem_title);
    title_div.appendChild(fav_icon);
    const icons_div = create_icons(game.plateforms);
    icons_div.classList.add("gap-3");
    let genre_type = [];
    for (let string of game.genre) {
        genre_type.push(string.name);
    }
    const genre = document.createElement("h2");
    genre.textContent = "Genre :";
    genre.classList.add("text-[#B0B3B8]");
    const type = document.createElement("h2");
    type.textContent = genre_type.join(', ');
    type.classList.add("text-end");
    const rel_date = document.createElement("h2");
    rel_date.textContent = "Release Date :";
    rel_date.classList.add("text-[#B0B3B8]");
    const rating = document.createElement("h2");
    rating.textContent = "Rating :";
    rating.classList.add("text-[#B0B3B8]");
    const date = document.createElement("h2");
    date.textContent = game.date;
    date.classList.add("text-end");
    const rank = document.createElement("h2");
    rank.textContent = game.rating;
    rank.classList.add("text-end");
    right_container.appendChild(title_div);
    right_container.appendChild(icons_div);
    right_container.appendChild(rel_date);
    right_container.appendChild(date);
    right_container.appendChild(genre);
    right_container.appendChild(type);
    right_container.appendChild(rating);
    right_container.appendChild(rank);
    head_div.appendChild(right_container);
    const about_div = document.createElement("div");
    about_div.classList.add("flex", "flex-col", "gap-3","pl-10","pr-10","pb-10","pt-5");
    const about = document.createElement("h1");
    about.textContent = "About";
    const description = document.createElement("p");
    description.textContent = game.about;
    description.classList.add("text-[#B0B3B8]");
    const words = game.about.split(/\s+/);     // split by any spaces
    const first30 = words.slice(0, 30).join(" ");
    about_div.appendChild(about);
    about_div.appendChild(description);
    temp_pop.appendChild(head_div);
    temp_pop.appendChild(about_div);
    game_pop_up.appendChild(temp_pop);
    game_pop_up.addEventListener("click", (event) => {

        console.log(pop_up);
        if (event.target === game_pop_up) {
            game_pop_up.classList.add("hidden");
            filter_body_conainer.classList.remove("hidden");
        }
        pop_up = false;
        console.log(pop_up);
    })

}


function add_genre(genres) {
    genre_items.innerHTML = "";
    const temp_but = document.createElement("button");
    temp_but.classList.add("text-left", "flex");
    temp_but.textContent = genres.length - 8 + " More";
    for (let i = 0; i < Math.min(8, genres.length); i++) {
        const item_div = createGenreItem(genres[i]);
        genre_items.appendChild(item_div);
    }

    if (genres.length > 8) {
        genre_items.appendChild(temp_but);
    }

    temp_but.addEventListener("click", () => {
        showMoreGenres(genre_items, genres, temp_but);
    });

    genre_filter.addEventListener("input", (event) => {
        if (event.target.value === "") {
            add_genre(genres);
            return;
        }
        filter_genre(genres, event);
    });

}

let genre_array = [];

function filter_genre(genres, event) {
    genre_array = [];
    while (genre_items.firstChild) {
        genre_items.removeChild(genre_items.firstChild);
    }
    for (let genre_names of genres) {
        let temp = genre_names.trim().toLowerCase();
        if (isSubsequence(temp, event.target.value) === true) {
            const item_div = createGenreItem(genre_names);
            genre_array.push(item_div);
        }
        if (genre_array.length > 0) {
            for (let genre of genre_array) {
                genre_items.appendChild(genre);
            }
        }
    }
}


function createGenreItem(genreName) {
    const item_div = document.createElement("div");
    item_div.classList.add("flex", "flex-row", "gap-2");
    const item = document.createElement("input");
    item.type = "checkbox";
    item.id = genreName;
    item.addEventListener("click", (event) => {
        if (event.target.checked) {
            genre_selected.push(genreName);
        }
        else {
            let newArr = [];
            for (let g of genre_selected) {
                if (g !== genreName) {
                    newArr.push(g);
                }
            }
            genre_selected = newArr;

        }
        apply_filters();
    })

    const label = document.createElement("label");
    label.htmlFor = genreName;
    label.textContent = genreName;

    item_div.appendChild(item);
    item_div.appendChild(label);
    return item_div;
}

function showMoreGenres(container, genres, moreButton) {

    for (let i = 8; i < genres.length; i++) {
        const item_div = createGenreItem(genres[i]);
        container.appendChild(item_div);
    }

    moreButton.style.display = "none";

    const lessButton = document.createElement("button");
    lessButton.classList.add("text-left", "flex");
    lessButton.textContent = "Less";
    container.appendChild(lessButton);

    lessButton.addEventListener("click", () => {
        container.innerHTML = "";
        add_genre(genres);
    });
}

function add_plateforms(plat) {
    plat_items.innerHTML = "";
    const temp_but = document.createElement("button");
    temp_but.classList.add("text-left", "flex");
    temp_but.textContent = plat.length - 8 + " More";

    for (let i = 0; i < Math.min(8, plat.length); i++) {
        const item_div = createPlatItem(plat[i]);
        plat_items.appendChild(item_div);
    }

    if (plat.length > 8) {
        plat_items.appendChild(temp_but);
    }

    temp_but.addEventListener("click", () => {
        showMorePlatforms(plat_items, plat, temp_but);
    });

    platform_filter.addEventListener("input", (event) => {
        if (event.target.value === "") {
            add_plateforms(plat);
            return;
        }
        filter_plats(plat, event);
    });

}


let plat_array = [];

function filter_plats(plats, event) {
    plat_array = [];
    while (plat_items.firstChild) {
        plat_items.removeChild(plat_items.firstChild);
    }
    for (let plat of plats) {
        let temp = plat.trim().toLowerCase();
        if (isSubsequence(temp, event.target.value) === true) {
            const item_div = createPlatItem(plat);
            plat_array.push(item_div);
        }
        if (plat_array.length > 0) {
            for (let genre of plat_array) {
                plat_items.appendChild(genre);
            }
        }
    }


}


let lastChecked = null;


function createPlatItem(genreName) {
    const item_div = document.createElement("div");
    item_div.classList.add("flex", "flex-row", "gap-2");

    const item = document.createElement("input");
    item.type = "radio";
    item.id = genreName;
    item.name = "genre";

    item.addEventListener("click", function () {
        if (lastChecked === this) {
            this.checked = false;
            lastChecked = null;
            paltfom_selected = "";
        } else {
            lastChecked = this;
            paltfom_selected = genreName;
        }
        apply_filters();
    });

    const label = document.createElement("label");
    label.htmlFor = genreName;
    label.textContent = genreName;

    item_div.appendChild(item);
    item_div.appendChild(label);
    return item_div;
}

function filter_by_rate(game_filtred, limit) {
    let sorted_games = [...game_filtred];

    sorted_games.sort((a, b) => b.rating - a.rating);

    if (limit && limit > 0) {
        sorted_games = sorted_games.slice(0, limit);
    }

    return sorted_games;
}
function best_rate(game_filtred, rate) {
    if (rate === "Top 100" || rate === 100) {
        return filter_by_rate(game_filtred, 100);
    } else if (rate === "Top 200" || rate === 200) {
        return filter_by_rate(game_filtred, 200);
    } else if (rate === "Top 300" || rate === 300) {
        return filter_by_rate(game_filtred, 300);
    } else {
        return game_filtred; // no filter applied
    }
}

function showMorePlatforms(container, plat, moreButton) {
    for (let i = 8; i < plat.length; i++) {
        const item_div = createPlatItem(plat[i]);
        container.appendChild(item_div);
    }

    moreButton.style.display = "none";

    const lessButton = document.createElement("button");
    lessButton.classList.add("text-left", "flex");
    lessButton.textContent = "Less";
    container.appendChild(lessButton);

    lessButton.addEventListener("click", () => {
        container.innerHTML = "";
        add_plateforms(plat);
    });
}



function add_rating() {
    const rating = document.querySelector(".rating-items");
    const rat_arr = ["100", "200", "300"]
    rating.classList.add("flex", "flex-col", "text-xl", "gap-2");
    let lastChecked = null;
    for (let i = 0; i < 3; i++) {
        const item_div = document.createElement("div");
        item_div.classList.add("flex", "flex-row", "gap-2");
        const item = document.createElement("input");
        item.type = "radio";
        item.id = rat_arr[i];
        item.name = "plat";
        const label = document.createElement("label");
        label.htmlFor = rat_arr[i];
        label.textContent = "Top " + rat_arr[i];
        item_div.appendChild(item);
        item_div.appendChild(label);
        rating.appendChild(item_div);
        item.addEventListener("click", function () {
            if (lastChecked === this) {
                this.checked = false;
                lastChecked = null;
                apply_filters();
            } else {
                lastChecked = this;
                const topLimit = rat_arr[i];
                console.log("Filtering by top:", topLimit);
                apply_filters(current_games_array, topLimit);
            }
        });
    }
}



let paltfom_selected = "";
let genre_selected = [];
let game_filtred = [];

function apply_filters(game_list = current_games_array, topLimit = null) {
    game_filtred = [];

    isFiltering = paltfom_selected !== "" || (genre_selected && genre_selected.length > 0) || topLimit != 0;

    for (let game of game_list) {
        let platform_match = false;
        let genre_match = false;

        if (paltfom_selected === "" || paltfom_selected === undefined) {
            platform_match = true;
        } else {
            for (let plat of game.platforms) {
                if (paltfom_selected === plat.platform.name) {
                    platform_match = true;
                    break;
                }
            }
        }

        if (genre_selected.length === 0) {
            genre_match = true;
        } else {
            let i = 1;
            for (let selected of genre_selected) {
                let found = false;
                for (let genr of game.genres) {
                    if (selected === genr.name) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    i = 0;
                    break;
                }
            }
            if (i == 1) {
                genre_match = true;
            }
        }


        if (platform_match && genre_match) {
            game_filtred.push(game);
        }
    }

    if (topLimit) {
        game_filtred = filter_by_rate(game_filtred, topLimit);
    }

    while (card_holder.firstChild) {
        card_holder.removeChild(card_holder.firstChild);
    }

    console.log(game_filtred);

    if (game_filtred.length === 0) {
        add_all_cards_unclick_filter(game_list);
        results.textContent = "No games were found with your filter";
    } else {
        for (let game of game_filtred) {
            create_card(game);
        }
        results.textContent = "Results found: " + game_filtred.length;
    }

    if (!paltfom_selected && (!genre_selected || genre_selected.length === 0) && !topLimit) {
        isFiltering = false;
    }

}



let games;

function add_all_cards_unclick_filter() {
    while (card_holder.firstChild) {
        card_holder.removeChild(card_holder.firstChild);
    }
    for (let game of current_games_array) {
        create_card(game);
    }
}

function add_all_card(games) {
    for (let game of games) {
        create_card(game);
    }
    results.textContent = "Results found: " + games.length;

}

let page_tracker = 1;

async function add_rest_card(next_pointer) {
    try {
        let loading_holder = document.createElement("div");
        let loading_icon = document.createElement("i");
        loading_holder.classList.add("flex", "items-center", "w-full");
        loading_icon.classList.add("fa-solid", "fa-circle-notch", "fa-spin", "text-4xl");
        loading_holder.appendChild(loading_icon);
        card_holder.appendChild(loading_holder);
        const next_re = await fetch(next_pointer);
        const next = await next_re.json();
        console.log(next);
        for (let next_game of next.results) {
            current_games_array.push(next_game);
            create_card(next_game);
        }
        games = next;
        console.log(card_holder);
        card_holder.removeChild(loading_holder);
        results.textContent = "Results found: " + current_games_array.length;
        isLoading = false;

    } catch (err) {
        console.log("Problem in : " + err);
    }
}

let current_games_array = [];

function isSubsequence(gameName, searchString) {
    return gameName.toLowerCase().includes(searchString.toLowerCase());
}

function search_bar_page_filter(string) {
    let array_list_temp = [];
    for (let game of current_games_array) {
        let temp = game.name.trim().toLowerCase();
        if (isSubsequence(temp, string) === true) {
            array_list_temp.push(game);
        }
    }
    while (card_holder.firstChild) {
        card_holder.removeChild(card_holder.firstChild);
    }
    for (let game of array_list_temp) {
        create_card(game);
    }
    results.textContent = "Game were found : " + array_list_temp.length;

}


let isSearching = false;
let isFiltering = false;
let isLoading = false;
async function add_cards() {
    try {
        const res = await fetch("https://debuggers-games-api.duckdns.org/api/games");
        games = await res.json();
        console.log(games);
        current_games_array = games.results;
        add_all_card(current_games_array);
        loading.style.display = "none";
        filter_button.addEventListener("click", function () {
            filter.classList.toggle("hidden");
            main_body.classList.toggle("hidden");
        });
        close_filter.addEventListener("click", () => {
            filter.classList.add("hidden");
            main_body.classList.remove("hidden");
        });


        isLoading = false;

        window.addEventListener('scroll', () => {
            if (isSearching === true || isFiltering === true || pop_up === true) {
                return;
            }

            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            const documentHeight = document.documentElement.scrollHeight;

            const windowHeight = window.innerHeight;



            const offset = 100;

            if (scrollTop + windowHeight >= documentHeight - offset && !isLoading && games.next) {
                isLoading = true;
                isEnd = true;
                add_rest_card(games.next);

                setTimeout(() => {

                }, 800);
            }
        });

        search_bar.addEventListener("input", (event) => {
            isSearching = true;
            search_bar_page_filter(event.target.value);
            if (event.target.value === "") {
                isSearching = false;
            }
        })



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
        add_genre(genres.genres);
        add_plateforms(platforms.platforms);
        add_rating();

    } catch (err) {
        console.log("problem in " + err);
    }
}

add_cards();
add_filter();
