// var sort-prompt("choiser un sort");


// switch (boules) {
//     case "feu":
//       console.log("trait de glace et chaine d'eclair");
//       break;
//     case "boule de feu":
//       console.log("40");
//       break;
//     case "trait de glace":
//       console.log("");
//       break;
   
      
//     default: console.log();

do{
function addition (a , b){
    return a + b;
}


function soustraction (a , b){
    return a - b;
}


function multiplication (a , b){
    return a * b;
}
function devision (a , b){
    return a / b;
}
let chiffre1;
let chiffre2;
    // ;
    do {chiffre1=parseInt(prompt("rentre ton premier chiffre "));}
    while(isNaN(chiffre1));
    do {chiffre2=parseInt(prompt("rentre ton deuxieme chiffre "));}
    while(isNaN(chiffre2));


    
    let calcul=prompt(
        "choisissez un fonction parmis les suivant:\n 1 = addition \n 2 = soustraction \n 3 = multiplication \n 4 = division"
        
    );
    while(isNaN(chiffre1,chiffre2)){}
    calcul=+calcul;
    
    switch(calcul){
        case 1:
            alert(addition (chiffre1 , chiffre2));
            
            break;
        case 2:
            alert(soustraction(chiffre1 , chiffre2));
            break;
        case 3:
            alert(multiplication(chiffre1 , chiffre2));
            break;
        case 4:
            alert(devision(chiffre1 , chiffre2));
            break;
            
        default:
            alert ("tes trop nuuuuul comme psg au ldc");
            
              

    }
reco = confirm("allez OM");
}while(reco);
alert("merci a bientot bg");


    

// catch(error){
//     alert(Error)
    



