document.writeln('Ciao mondo');

document.getElementById('name').innerHTML = "Ugo";
document.getElementById('address').innerHTML = "Via dei platani";

//alert('ciao come stai?');

console.log(document.getElementById('name'));


function miaFunzione() {
  
  let firstNumber = 0; //questa variabile si vede solo qui dentro
   
  // anche se non è errore di sintassi non bisogna farlo!
  secondNumber = 10; //ma se dichiaro una variabile senza 
           //var let o const...
   
 }
 
 miaFunzione();

 //console.log(firstNumber); //ReferenceError: i is not defined

 console.log(secondNumber); //...si vede anche fuori


// MOSTRO ORRENDO Da NON FARE MAI !!!!!!
a = 0;
b = "buongiorno"
var c = "ciao";

saluta();

//console.log("a is " + a);	
//console.log("b is " + b);

	
function saluta() {
 var d = "asd";
 //console.log("a is " + a);
 var b = a + 1;	
 //console.log("b is " + b);
 //console.log(c);
}
///////////////////////////////
	
 
miaFunzioneThis();
function miaFunzioneThis() {
  // this è l'ambiente globale
  console.log('this',this);
}


const bottoni = document.getElementById('bottoni');
for(let i = 0; i < 10; i++){

  const btn = document.createElement('button');

  btn.innerHTML = 'clccami';
  bottoni.append(btn);

  btn.addEventListener('click',function(){
    // this è il bottone che è stato cliccato
    this.innerHTML = "sono stato cliccato";
  })

}
/// Arrow function
console.log(miaNormaleFunzione());
function miaNormaleFunzione(){
  return 1 + 1;
}

// l'arrow funct in assenza di graffe ha i return di default
//console.log(miaArrowFucnt());  non posso invocarla prima della dichiarazione
const miaArrowFucnt = () => 1 + 1;
console.log(miaArrowFucnt());

const btnBis = document.getElementById('btnBis');
btnBis.addEventListener('click', () => {
  // con this ottengo Window
  console.log('this',this);
})



 