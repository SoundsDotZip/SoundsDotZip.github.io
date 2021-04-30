
function nevnap_datum(){

    var datum=document.getElementById("bevitel1").value ;

    fetch("https://api.nevnapok.eu/nap/"+datum)
    .then(x => x.json())
    .then(y => megjelenit1(y,datum));
    
}

function nevnap_nev(){

    var nev=document.getElementById("bevitel2").value ;

    fetch("https://api.nevnapok.eu/nev/"+nev)
    .then(x => x.json())
    .then(y => megjelenit2(y,nev));
    
}

function megjelenit1(adatok,datum){
    console.log(adatok[datum]);
    var sz='';
    for (elem of adatok[datum]){
        sz+='<p class="arnyekolt">'+elem+'</p>';
    }
    document.getElementById("nevnap1").innerHTML=sz;
}

function megjelenit2(adatok,nev){
    console.log(adatok[nev]);
    var sz='';
    for (elem of adatok[nev]){
        sz+='<p class="arnyekolt">'+elem+'</p>';
    }
    document.getElementById("nevnap2").innerHTML=sz;
}

function randomvicc()
{
    fetch("https://official-joke-api.appspot.com/jokes/ten")
    .then(x => x.json())
    .then(y => randomvicckiiras(y))
}

function randomvicckiiras(adatok)
{
    var rng = Math.floor(Math.random()*10);
    document.getElementById("vicckerdes").innerHTML = adatok[rng].setup;
    document.getElementById("viccvalasz").innerHTML = adatok[rng].punchline;
}