// Tombol buka hadiah
const openBtn = document.getElementById("openBtn");
const gift = document.getElementById("gift");

// Tombol musik
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

// Saat tombol "Buka Hadiah" ditekan
openBtn.addEventListener("click", () => {

    gift.classList.remove("hidden");

    gift.scrollIntoView({
        behavior: "smooth"
    });

    openBtn.innerHTML = "❤️ Selamat Ulang Tahun ❤️";

    // Efek muncul perlahan
    gift.style.opacity = "0";

    setTimeout(() => {
        gift.style.transition = "1s";
        gift.style.opacity = "1";
    }, 100);

});

// Tombol musik
musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "⏸ Pause Lagu";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Putar Lagu";

    }

});

// Efek hati berjatuhan
function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "💙";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.opacity = Math.random();
    heart.style.zIndex = "999";
    heart.style.pointerEvents = "none";
    heart.style.transition = "6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.top = "110vh";

    },100);

    setTimeout(() => {

        heart.remove();

    },6000);

}

setInterval(createHeart,500);

// Efek judul berkedip
setInterval(()=>{

    document.title =
    document.title === "Happy Birthday Hafidz ❤️"
    ? "🎂 Happy Birthday Hafidz 🎂"
    : "Happy Birthday Hafidz ❤️";

},1500);
const startBtn = document.getElementById("startBtn");

const loading = document.getElementById("loading");

startBtn.addEventListener("click",()=>{

loading.style.display="none";

});
// =======================
// Efek Mengetik
// =======================

const text =
"Selamat ulang tahun Hafidz. Semoga semua doa dan impianmu tercapai. Terima kasih sudah menjadi bagian terindah dalam hidupku. ❤️";

const typing = document.getElementById("typing");

let i = 0;

function typeText(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(typeText,45);

}

}

typeText();


// =======================
// Fireworks
// =======================

function firework(){

const emoji=["🎆","✨","💙","🎉","🎇"];

const fw=document.createElement("div");

fw.className="firework";

fw.innerHTML=emoji[Math.floor(Math.random()*emoji.length)];

fw.style.left=Math.random()*100+"vw";

fw.style.top=Math.random()*100+"vh";

document.body.appendChild(fw);

setTimeout(()=>{

fw.remove();

},1500);

}

setInterval(firework,700);


// =======================
// Klik Foto
// =======================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src);

});

});
// =======================
// Slider Foto
// =======================

const photos = [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg",
    "images/foto4.jpg",
    "images/foto5.jpg"
];

let currentPhoto = 0;

const slide = document.getElementById("slide");

setInterval(() => {

    currentPhoto++;

    if(currentPhoto >= photos.length){
        currentPhoto = 0;
    }

    slide.style.opacity = 0;

    setTimeout(() => {

        slide.src = photos[currentPhoto];
        slide.style.opacity = 1;

    },300);

},3000);
// =======================
// Countdown
// =======================

const countdown = document.getElementById("countdown");

function updateCountdown(){

const today = new Date();

let target = new Date(today.getFullYear(),0,21);

if(today > target){
target = new Date(today.getFullYear()+1,0,21);
}

const diff = target - today;

const days = Math.floor(diff/(1000*60*60*24));

countdown.innerHTML =
"🎂 " + days + " hari lagi menuju ulang tahun berikutnya";

}

updateCountdown();

setInterval(updateCountdown,60000);


// =======================
// Confetti
// =======================

function confetti(){

const colors=[
"#60a5fa",
"#3b82f6",
"#ffffff",
"#93c5fd"
];

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=colors[Math.floor(Math.random()*colors.length)];

c.style.animationDelay=Math.random()+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},4000);

}

}

openBtn.addEventListener("click",confetti);
// =======================
// Love Letter
// =======================

const envelope =
document.getElementById("envelope");

const secret =
document.getElementById("secret");

envelope.addEventListener("click",()=>{

secret.style.display="block";

envelope.innerHTML="❤️";

});