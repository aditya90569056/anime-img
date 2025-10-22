// import { saveAs } from 'file-saver';
bg = document.getElementById("main");
async  function fetch1(){
data = await  fetch(`https://api.waifu.pics/sfw/waifu`);
data = await data.json();
bg.style.backgroundImage = `url(${data.url})`
img = data.url;
console.log(data.url)

}
function get(){
    saveAs(img, "anime.jpg");
   }



// fetch1()
