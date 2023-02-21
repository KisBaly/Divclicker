var divek=new Array();
var leptet=1;
var start, end;
var db;
var aktido=0;
var idozito;


function veletlenszam(also, felso) {
    return Math.floor(Math.random()*(felso-also+1)+also);
}

function tulajdonsag(div, ujTop, ujLeft) {
    if (div.left<=ujLeft &&div.left+75>=ujLeft &&
        div.top<=ujTop && div.top+75>=ujTop ||
        
        div.left<=ujLeft+75 &&div.left+75>=ujLeft+75 &&
        div.top<=ujTop && div.top+75>=ujTop ||
        
        div.left<=ujLeft+75 &&div.left+75>=ujLeft+75 &&
        div.top<=ujTop+75 && div.top+75>=ujTop+75 ||
        
        div.left<=ujLeft &&div.left+75>=ujLeft &&
        div.top<=ujTop+75 && div.top+75>=ujTop+75||
        
        ujTop<=150 && ujLeft<= 400
        ) {
        return true;
    }
    return false;
}

function eldontes(ujTop, ujLeft) {
    //igaz - ha nincs metszés, hamis - van metszés
    let i=0;
    while (i<divek.length && !tulajdonsag(divek[i],ujTop, ujLeft)) {
        i++;
    }
    return !(i<divek.length);
}

function eltuntet(div) {
    if (div.innerHTML==leptet) {
        div.style.display="none";
        if (leptet==db) {
            end=Date.now();
            document.getElementById("ido").innerHTML=(end-start)/1000;
            document.getElementById("gomb").disabled=false;
            clearInterval(idozito);
        }
        leptet++;
    }
}

function aktidonovel()
{
    aktido+=100;
    document.getElementById("ido").innerHTML=aktido/1000;
}
function Kesleltetes()
{

    idozito = setInterval(aktidonovel,100);
    let divek = document.getElementById("jatekter").getElementsByTagName("div");
    for(let i = 0; i < divek.length; i++)
    {
        divek[i].setAttribute("onmouseover","eltuntet(this)");

    }
    start=Date.now();
}



function jatekGeneralas() {
    divek=new Array();
    leptet=1;
    aktido = 0;
    db=document.getElementById("db").value;
    if(db<1 || db>50 || db == undefined)
    {
        db=100


    }
    let jatekter=document.getElementById("jatekter");
    setTimeout(Kesleltetes,5000);
    jatekter.innerHTML="";
    document.getElementById("gomb").disabled=true;
    for (let i = 0; i < db; i++) {
        let div=document.createElement("div");
        let ujTop, ujLeft;
        do {
            ujTop=veletlenszam(0,window.innerHeight-125);
            ujLeft=veletlenszam(0,window.innerWidth-275);
        } while (!eldontes(ujTop,ujLeft));


        div.style.top=ujTop+"px";
        div.style.left=ujLeft+"px";

        div.top=ujTop;
        div.left=ujLeft;

        

        div.innerHTML=(i+1);
        jatekter.appendChild(div);
        divek.push(div);
    }


}