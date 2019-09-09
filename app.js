//map info 
const width = 850
const height = 600
let clicks = 0
let $map = document.getElementById("map")
//rivendell
const rivendellWidthDistance = 427
const rivendellHeightDistance = 82
//orodruin
const orodruinWidthDistance = 606
const orodruinHeightDistance = 321

let fZoneQuest = {
    x: orodruinWidthDistance,
    y: orodruinHeightDistance
}
let sZoneQuest = {
    x: rivendellWidthDistance,
    y: rivendellHeightDistance,
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x
    let diffY = e.offsetY - target.y
    return Math.sqrt((diffX * diffX) + (diffY * diffY))
}
let getDistanceHint = (distance) => {
    clicks++
    if (distance < 10) {
        alert("Ganaste! y te costó " + clicks + " vidas (clicks)")
        location.reload()
    } else if (distance < 25) {
        return "Muy caliente!"
    } else if (distance < 50) {
        return "Caliente"
    } else if (distance < 70) {
        return "Algo caliente"
    } else if (distance < 100) {
        return "Algo algo caliente"
    } else if (distance < 260) {
        return "Ni frio ni caliente"
    } else if (distance < 300) {
        return "Frío"
    } else if (distance < 350) {
        return "Muy frío"
    } else {
        return "Demasiado frío!"
    }
}

let firstQuest = document.getElementById("questOne")
firstQuest.addEventListener("click", function () {
    $map.addEventListener("click", function (e) {
        let distance = getDistance(e, fZoneQuest)
        let textDistance = getDistanceHint(distance)
        document.getElementById("distance").innerText = textDistance
    })
})

let secondQuest = document.getElementById("questTwo")
secondQuest.addEventListener("click", function () {
    $map.addEventListener("click", function (e) {
        let distance = getDistance(e, sZoneQuest)
        let textDistance = getDistanceHint(distance)
        document.getElementById("distance").innerText = textDistance
    })
})

