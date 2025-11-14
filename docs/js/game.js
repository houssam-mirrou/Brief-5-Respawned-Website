const game_informtion = document.querySelector(".game-informtion");


const game = JSON.parse(localStorage.getItem("game") || []);
console.log(game);

const title_div = document.createElement("div");

const game_title = document.createElement("h1");
game_title.textContent = game.name;

const game_rate = document.createElement("h1");
game_rate.textContent = game.rating;

title_div.classList.add("flex", "flex-row", "place-content-between");
title_div.appendChild(game_title);
title_div.appendChild(game_rate);

const image = document.createElement("img");
image.src = game.background_image;
image.classList.add("rounded-3xl");

const plat_genre_div = document.createElement("div");
const left_container = document.createElement("div");
const right_container = document.createElement("div");
left_container.classList.add("flex", "flex-col", "w-1/2");
left_container.classList.add("flex", "flex-col", "w-1/2");
plat_genre_div.classList.add("flex", "flex-row");

const platforms = document.createElement("h1");
platforms.textContent = "Platforms";
platforms.classList.add("text-[#B0B3B8]");
const platforms_text = document.createElement("h1");
let plat = [];
console.log(game.platforms);
for (let platfor of game.platforms) {
    plat.push(platfor.platform.name);
}
platforms_text.textContent = plat.join(", ");
platforms_text.classList.add("ml-4");

const date = document.createElement("h1");
date.textContent = "Date";
date.classList.add("text-[#B0B3B8]");
const date_text = document.createElement("h1");
date_text.textContent = game.released;
date_text.classList.add("ml-4");

const pubs = document.createElement("h1");
pubs.textContent = "Publishers";
pubs.classList.add("text-[#B0B3B8]");
const pubs_text = document.createElement("h1");
let pub = [];
for (let pubs of game.publishers) {
    pub.push(pubs.name);
}
pubs_text.textContent = pub.join(", ");
pubs_text.classList.add("ml-4");

const genres = document.createElement("h1");
genres.textContent = "Genre";
genres.classList.add("text-[#B0B3B8]");
const genres_text = document.createElement("h1");
let genr = [];
for (let genre of game.genres) {
    genr.push(genre.name);
}
genres_text.textContent = genr.join(", ");
genres_text.classList.add("ml-4");

const devs = document.createElement("h1");
devs.textContent = "Developer";
devs.classList.add("text-[#B0B3B8]");
const dev_text = document.createElement("h1");
let devsss = [];
for (let dev of game.developers) {
    devsss.push(dev.name);
}
dev_text.textContent = devsss.join(", ");
dev_text.classList.add("ml-4");

const age = document.createElement("h1");
age.textContent = "Age rating";
age.classList.add("text-[#B0B3B8]");
const age_text = document.createElement("h1");
age_text.textContent = game.esrb_rating.name;
age_text.classList.add("ml-4");

// Platforms + Genres
const plat_div = document.createElement("div");
plat_div.classList.add("w-1/2");
plat_div.appendChild(platforms);
plat_div.appendChild(platforms_text);

const genre_div = document.createElement("div");
genre_div.classList.add("w-1/2");
genre_div.appendChild(genres);
genre_div.appendChild(genres_text);

plat_genre_div.appendChild(plat_div);
plat_genre_div.appendChild(genre_div);

// Date + Developer
const date_dev_div = document.createElement("div");
date_dev_div.classList.add("flex", "flex-row");

const date_div = document.createElement("div");
date_div.classList.add("w-1/2");
date_div.appendChild(date);
date_div.appendChild(date_text);

const dev_div = document.createElement("div");
dev_div.classList.add("w-1/2");
dev_div.appendChild(devs);
dev_div.appendChild(dev_text);

date_dev_div.appendChild(date_div);
date_dev_div.appendChild(dev_div);

// Publishers + Age rating
const pub_age_div = document.createElement("div");
pub_age_div.classList.add("flex", "flex-row");

const pub_div = document.createElement("div");
pub_div.classList.add("w-1/2");
pub_div.appendChild(pubs);
pub_div.appendChild(pubs_text);

const age_div = document.createElement("div");
age_div.classList.add("w-1/2");
age_div.appendChild(age);
age_div.appendChild(age_text);

pub_age_div.appendChild(pub_div);
pub_age_div.appendChild(age_div);



const about = document.createElement("h1");
about.textContent = "About";
about.classList.add("text-[#B0B3B8]");
const about_text = document.createElement("h1");
about_text.textContent = game.description;

const rating = document.createElement("h1");
rating.textContent = "Rate";

const excep_div = document.createElement("div");
const recom_div = document.createElement("div");
const meh_div = document.createElement("div");
const skip_div = document.createElement("div");

let excep_percentage = "";
let recom_percentage = "";
let meh_percentage = "";
let skip_percentage = "";
for (let rates of game.ratings) {
    console.log(rates.title)
    if (rates.title === "exceptional") {
        excep_percentage = rates.percent;
    } else if (rates.title === "recommended") {
        recom_percentage = rates.percent;
    } else if (rates.title === "meh") {
        meh_percentage = rates.percent;
    } else {
        skip_percentage = rates.percent;
    }
}

console.log(excep_percentage);
console.log(recom_percentage);
console.log(meh_percentage);
console.log(skip_percentage);

excep_div.style.width = `${excep_percentage}%`;
recom_div.style.width = `${recom_percentage}%`;
meh_div.style.width = `${meh_percentage}%`;
skip_div.style.width = `${skip_percentage}%`;

const rates_div = document.createElement("div");
rates_div.classList.add("flex", "flex-row", "w-full");
excep_div.classList.add("bg-[#10B981]", "p-3", "overflow-hidden");
recom_div.classList.add("bg-[#3B82F6]", "p-3", "overflow-hidden");
meh_div.classList.add("bg-[#F97316]", "p-3", "overflow-hidden");
skip_div.classList.add("bg-[#EF4444]", "p-3", "overflow-hidden");

excep_div.textContent = "Exceptional";
recom_div.textContent = "Recommended";
meh_div.textContent = "Meh";
skip_div.textContent = "Skip";

rates_div.appendChild(excep_div);
rates_div.appendChild(recom_div);
rates_div.appendChild(meh_div);
rates_div.appendChild(skip_div);

const last_img = document.createElement("img");
last_img.src = game.background_image_additional;
last_img.classList.add("rounded-3xl");



const text_div = document.createElement("div");
text_div.classList.add("flex", "flex-col", "gap-4");
text_div.appendChild(plat_genre_div);
text_div.appendChild(date_dev_div);
text_div.appendChild(pub_age_div);
text_div.appendChild(about);
text_div.appendChild(about_text);

game_informtion.appendChild(title_div);
game_informtion.appendChild(image);
game_informtion.appendChild(text_div);
game_informtion.appendChild(rating);
game_informtion.appendChild(rates_div);
game_informtion.appendChild(last_img);


const nav_home = document.querySelector(".nav-home");
nav_home.classList.add("cursor-pointer");
nav_home.addEventListener("click", () => {
    window.location.href = "index.html";
})


const home = document.querySelector(".home");
home.classList.add("cursor-pointer");
home.addEventListener("click", () => {
    window.location.href = "index.html";

})