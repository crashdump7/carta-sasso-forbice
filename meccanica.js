
      // selezione del computer e immaggine pc

function computerPlay () {
    let SceltaComputer = ["carta","sasso","forbice"]
     SceltaComputer = SceltaComputer[Math.floor(Math.random()* 3 )]

     const computerImage = document.createElement('img'); /// aggiunger classe
     computerImage.src = `./${SceltaComputer}.png `;  //funyiona ok ma non ho capito il significato di ./?
     computerImage.classList.add ('ridimesionaImg');

     immaggine2.innerHTML='';
     immaggine2.appendChild(computerImage);
 
    console.log(SceltaComputer)
    return SceltaComputer
   
}

//immagine  della scelta del giocatore /////////

//const carta = document.querySelector('#carta');
//const sasso = document.querySelector("#sasso") ;      // non ho capito perche ho fatto questo?
//const forbice = document.querySelector("#forbice")  ;

const ImmagineCarta = document.createElement('img');
const ImmagineSasso = document.createElement('img');
const ImmagineForbice = document.createElement('img');

ImmagineCarta.src= 'carta.png'
ImmagineCarta.classList.add ('ridimesionaImg');
ImmagineSasso.src= 'sasso.png'
ImmagineSasso.classList.add ('ridimesionaImg');
ImmagineForbice.src='forbice.png'
ImmagineForbice.classList.add ('ridimesionaImg');



const immaggine1 = document.querySelector ('#sceltaPlayr') ;
const immaggine2 = document.querySelector('#sceltapc') ;

let PunteggioGiocatore = 0 ;
let  PunteggioComputer = 0 ;


  /// avviamento della round tramite click

document.getElementById("carta").addEventListener('click' , function () {
    
    Round('carta')
    immaggine1.innerHTML='';
    immaggine1.appendChild(ImmagineCarta);

    effettoSonoro()
    

})

sasso.addEventListener('click' , function () {    
    Round('sasso')
    //console.log(sasso);
    immaggine1.innerHTML='';
        immaggine1.appendChild(ImmagineSasso)
        effettoSonoro ()

})

forbice.addEventListener('click' , function () {    
    Round('forbice')
    //console.log(forbice);
    immaggine1.innerHTML='';
      immaggine1.appendChild(ImmagineForbice)
      effettoSonoro ()
})

// Meccanica della partita

const risultato = document.querySelector('#risultato') ;
const punteggio = document.querySelector('#punteggio') ;

function Round (tasto) {

    let sg = tasto
    let sc = computerPlay ()
   
if ((PunteggioGiocatore === 5 ) || (PunteggioComputer === 5)) {
       FinePartita()
    }
else if ( (sg === "carta" && sc === "sasso")||
    (sg === "sasso" && sc === "forbice") ||
    (sg === "forbice" && sc === "carta"))   {
        PunteggioGiocatore++;
        risultato.textContent = 'You   win!';
        }
else if ((sc === "carta" && sg === "sasso")||
    (sc === "sasso" && sg === "forbice") ||
    (sc === "forbice" && sg === "carta")) {
        risultato.textContent = "you lose "; 
        PunteggioComputer++ ;    
          }
else  {
     risultato.textContent = "   tie   "; 
          }  
          
punteggio.textContent = AggiornamentoPunteggio() // riga 67
          console.log(PunteggioGiocatore);
          console.log(PunteggioComputer);
                }
function AggiornamentoPunteggio () {
          return `playerName ${PunteggioGiocatore} - ${PunteggioComputer} Computer`;
          }

// fine della partita.

function FinePartita () {
    if(PunteggioGiocatore = 5) {
        effettoSonoroHappy() 
        alert('vittoria , refresh per un altra partita')
       
    }
        else {
            effettoSonoroSad() 
            alert('sconfitta , refresh per un altra partita')
       
        }
    }
    //effetti audio}
  


    function effettoSonoro() {
        const audio = document.querySelector("#suono");
        audio.play();
    }
   
    function effettoSonoroSad() {
        const audio = document.querySelector("#suonoSad");
        audio.play();
    }

    function effettoSonoroHappy() {
        const audio = document.querySelector("#suonohappy");
        audio.play();
    }



