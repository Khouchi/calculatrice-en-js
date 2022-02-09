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
try{
    let chiffre1=prompt("rentre ton premier chiffre ");
    let chiffre2=prompt("rentre ton deuxieme chiffre ");

   

    let calcul=prompt(
        "choisissez un fonction parmis les suivant:1 = addition,2 = soustraction ,3 = multiplication, 4 = division"
    );
    calcul=+calcul;
    
    switch(calcul){
        case 1:
            alert(addition (chiffre1 + chiffre2));
             
            break
        case 2:
            alert(soustraction(chiffre1 - chiffre2));
            break
        case 3:
            alert(multiplication(chiffre1 * chiffre2));
            break
        case 4:
            alert(devision(chiffre1 / chiffre2));
        default:
            alert ("felicitation mec tes trop nuuuuul comme psg au lcd");  

    }
}
catch{
    
}

