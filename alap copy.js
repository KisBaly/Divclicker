// id-k : gomb,adat

    
    // function LetrehozDiv()
    // {
    // var div = document.getElementById("adat");
    // var gomb = document.createElement("button");
    // gomb.class = gomb;
    // gomb.id = gomb;
    // div.appendChild(gomb)
    // }



    // function RandomHely()
    // {



    // }

    var i = 0;
    while(i = 10)
    {
    const container = document.getElementById("div");
    const button = document.createElement("div");
    button.id = i;
    button.innerHTML = "Nyomj meg";
    button.style.position = "absolute";
    button.style.left = "10px";
    button.style.top = "10px";
    container.appendChild(button);
    button.addEventListener("mouseenter", function() {
    let x = Math.floor(Math.random() * (window.innerWidth-50));
    let y = Math.floor(Math.random() * (window.innerWidth-50));
    button.style.left = x + "px";
    button.style.top = y + "px";
    button.style.backgroundColor = randomColor();
    i++;
    });
    }
    function randomColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    }

function rajta()
{

    var div = document.getElementById("div");
    var ujx = veletlen(0,window.innerWidth-100);
    var ujy = veletlen(0,window.innerHeight-100);
    div.style.left = ujx + "px";
    div.style.top = ujy + "px";
    var rj =(0,255);
    var gj =(0,255);
    var bj =(0,255);
    div.style.backgroundColor="rgb("+rj+","+gj+","+bj+")";
  }


//szorg hetfore  megadsz egy szamot ebbol 10 div generálunk, divek nem metszhetik egymást, mindegyikbe egy szam 0,megadottik es jo sorrenbe

