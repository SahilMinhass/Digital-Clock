let hours = document.getElementById('hrs');
let mins = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    hours.innerText = (new Date().getHours()<10?"0":"") + new Date().getHours();
    mins.innerText = (new Date().getMinutes()<10?"0":"") + new Date().getMinutes();
    sec.innerText = (new Date().getSeconds()<10?"0":"") + new Date().getSeconds();
}, 1000);
