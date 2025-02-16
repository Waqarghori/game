let spider = document.getElementById("spider")
let letfPosition = 50;
let bottomPosition = 50;


window.addEventListener("keydown", function (event) {
    if (event.keyCode == 32) {
        spider.src = "https://www.fightersgeneration.com/characters3/spidet-webball.gif"
        spider.style.width = `700px`
        setTimeout(function () {
            spider.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif"
            spider.style.width = `200px`
        }, 2200)
    }
    if (event.keyCode == 68 && letfPosition < 1120) {
        letfPosition += 10;
        spider.style.left = `${letfPosition}px`
        spider.style.transform = `scaleX(1)`
    }
    if (event.keyCode == 65 && letfPosition > 0) {
        letfPosition -= 10;
        spider.style.left = `${letfPosition}px`
        spider.style.transform = `scaleX(-1)`
    }
    if (event.keyCode == 87 && bottomPosition < 60) {
        bottomPosition += 5;
        spider.style.bottom = `${bottomPosition}px`
    }
    if (event.keyCode == 83 && bottomPosition > -5) {
        bottomPosition -= 5;
        spider.style.bottom = `${bottomPosition}px`
    }
})


 let ryo = document.getElementById("ryo")
let ryoX = 50;
let ryoY = 50;
window.addEventListener("keydown", function (event) {
    if (event.keyCode == 37 && ryoX < 1120) {
        ryoX += 10;
        ryo.style.right = `${ryoX}px`
        ryo.src = "https://www.fightersgeneration.com/characters3/ryo-ng-run.gif"
        ryo.style.transform = `scaleX(-1)`
        setTimeout(function(){
            ryo.src = "https://www.fightersgeneration.com/characters3/ryo-ng-tnt.gif"
        },2000)
    }
    if (event.keyCode == 39 && ryoX > 0) {
        ryoX -= 10;
        ryo.style.right = `${ryoX}px`
        ryo.src = "https://www.fightersgeneration.com/characters3/ryo-ng-run.gif"
        ryo.style.transform = `scaleX(1)`
        setTimeout(function(){
            ryo.src = "https://www.fightersgeneration.com/characters3/ryo-ng-tnt.gif"
        },2000)
    }
    if (event.keyCode == 38 && ryoY < 60) {
        ryoY += 5;
        ryo.style.bottom = `${ryoY}px`
    }
    if (event.keyCode == 40 && ryoY > -5) {
        ryoY -= 5;
        ryo.style.bottom = `${ryoY}px`
    }
})
