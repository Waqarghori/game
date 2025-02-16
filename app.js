let spider = document.getElementById("spider")
let letfPosition = 50;
let bottomPosition = 50;

window.addEventListener("keydown",function(event){
    console.log(event.keyCode)

if (event.keyCode == 32){
    spider.src = "https://www.fightersgeneration.com/characters3/spidet-webball.gif"
    spider.style.width = `700px`
    setTimeout(function (){
        spider.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif"
        spider.style.width = `200px`
    },2200)
}
if (event.keyCode == 100 && letfPosition  < 1120){
    letfPosition += 10;
    spider.style.left = `${letfPosition}px`
     spider.style.transform = `scaleX(1)`
}
if (event.keyCode == 97 && letfPosition > 0){
    letfPosition -= 10;
    spider.style.left = `${letfPosition}px`
    spider.style.transform = `scaleX(-1)`
}
if(event.keyCode == 119 && bottomPosition < 60){
    bottomPosition += 5;
    spider.style.bottom = `${bottomPosition}px`
}
if(event.keyCode == 115 && bottomPosition > -5){
    bottomPosition -= 5;
    spider.style.bottom = `${bottomPosition}px`
}

})


