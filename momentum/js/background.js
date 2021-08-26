const bg = document.querySelector("body")
const img =["aa.jpeg","bb.jpeg","cc.jpeg","dd.jpeg","ee.jpeg"];

const todayImg = img[Math.floor(Math.random()*img.length)];

console.log(todayImg);

bg.style.backgroundImage=`url(img/${todayImg})`;
// const imgs = document.createElement("img");
// imgs.src = `img/${todayImg}`;
// document.body.appendChild(imgs);


