
fetch("https://freegeoip.app/json/")
.then(x => x.json())
.then(y => foldrajzi(y));

function foldrajzi(adatok){
    //console.log(adatok);
    document.getElementById("felirat1").innerHTML= '<p class="kek">Földrajzi szélesség: ' + adatok.latitude+'</p>';
    document.getElementById("felirat3").innerHTML= '<p class="kek">Földrajzi hosszúság: ' + adatok.longitude+'</p>';
}


//--------------------------------------------------------

fetch("https://api.exchangerate-api.com/v4/latest/USD")
.then(x => x.json())
.then(y => arfolyam(y,"felirat2"));

fetch("https://api.exchangerate-api.com/v4/latest/EUR")
.then(x => x.json())
.then(y => arfolyam(y,"felirat4"));

function arfolyam(adatok,felirat){
    console.log(adatok);
    document.getElementById(felirat).innerHTML='<p class="kek">1 '+adatok.base+' = ' + adatok.rates.HUF+' HUF (Ft)</p>';
}