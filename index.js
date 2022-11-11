let scoreHomeEL = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

let countHome = 0
let countGuest = 0

function freethrowHome(){
    countHome += 1
    scoreHomeEL.textContent = countHome
}
function midrangeHome(){
     countHome += 2
    scoreHomeEL.textContent = countHome
}
function longthreeHome(){
     countHome += 3
    scoreHomeEL.textContent = countHome
}

function freethrowGuest(){
    countGuest += 1
    scoreGuestEl.textContent = countGuest
}
function midrangeGuest(){
     countGuest += 2
    scoreGuestEl.textContent = countGuest
}
function longthreeGuest(){
     countGuest += 3
    scoreGuestEl.textContent = countGuest
}
function reset(){
    scoreGuestEl.textContent = 0
    scoreHomeEL.textContent = 0
    countGuest = 0
    countHome = 0
}