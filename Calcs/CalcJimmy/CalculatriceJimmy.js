//Définition des mes Variables//////////////////////////////////////////////////////////////////////////////////////////////
let mesBalisesDOM = {};




//Définition de mes Fonctions du script principal///////////////////////////////////////////////////////////////////////////
/*Mettre écouteurs sur les boutons chiffres et symboles*/
function initBoutonsDisplay(elementTab){
    elementTab.addEventListener("click", function(){
        let strBouton = elementTab.innerText;
        if((strBouton=="+") || (strBouton=="-") || (strBouton=="*") || (strBouton=="/")){
            strBouton = " "+strBouton+" ";
        }
        mesBalisesDOM.displayEcran.append(strBouton);
    });
}




//Définition de mes Actions (Objet)/////////////////////////////////////////////////////////////////////////////////////////
let mesActions = {
//Vider le display
    clearDisplay(){ 
        mesBalisesDOM.displayEcran.innerText = "";
        mesBalisesDOM.calculPrecedent.innerText = "";
        mesBalisesDOM.displayResultat.innerText = "";
    },
    
    
    
//Afficher le résultat et l'opération dans calculPrécédent
    afficherResultat(chaine,chaineCalcul){
        mesBalisesDOM.calculPrecedent.innerText = chaineCalcul;
        mesBalisesDOM.displayEcran.innerText = "";
        mesBalisesDOM.displayResultat.innerText = chaine;
    },
    
    
    
//Effacer un caractère du display
    effacerCaractere(){
        let strEfface = mesBalisesDOM.displayEcran.innerText;
        let indiceDernier = strEfface.length;
        if(strEfface[indiceDernier]==" "){
            strEfface = strEfface.slice(0,-3);
        }
        else{
            strEfface = strEfface.slice(0,-1);
        } 
        mesBalisesDOM.displayEcran.innerText = strEfface;
    },
    
    
    
//Verifier que le calcul à effectuer est correct
    verificationDisplay(){
        let operateurs = [];
        let operandes = [];
        let strCalcul = mesBalisesDOM.displayEcran.innerText;
        
    /*Retirer les opérateurs en trop s'il y en a (au début, au milieu, à la fin)*/
        let spliter1 = strCalcul.split("");
        var i = 0;
        let indiceDernier;
        
    /*Au début et à la fin*/
        while(i<spliter1.length){
            indiceDernier = spliter1.length - 1;
            if(spliter1[indiceDernier]=="+" || spliter1[indiceDernier]=="-" || spliter1[indiceDernier]=="*" || spliter1[indiceDernier]=="/" || spliter1[indiceDernier]==" "){
                spliter1.pop();
            }
            if(spliter1[0]=="+" || spliter1[0]=="-" || spliter1[0]=="*" || spliter1[0]=="/" || spliter1[0]==" "){
                spliter1.shift();
            }
            else{i++;}
        }
        
    /*Au milieu*/
        var j = 0;
        while(j<spliter1.length){
            if(spliter1[j]=="+" || spliter1[j]=="-" || spliter1[j]=="*" || spliter1[j]=="/"){
                if(spliter1[j+2]=="+" || spliter1[j+2]=="-" || spliter1[j+2]=="*" || spliter1[j+2]=="/"){
                    spliter1.splice(j+2,2);
                    j++;
                }
                else{j++;}
            }
            else{j++;}
        }
        strCalcul = spliter1.join("");  
        
    /*Séparer mes opérateurs et mes opérandes en deux tableaux*/
        let spliter2 = strCalcul.split(" ");
        for(var i=0;i<spliter2.length;i++){
            if((spliter2[i]=="+") || (spliter2[i]=="-") || (spliter2[i]=="*") || (spliter2[i]=="/")){
                operateurs.push(spliter2[i]);
            }
            else{
                spliter2[i] = Number(spliter2[i]);
                operandes.push(spliter2[i]);
            }
        }
        
        mesActions.validerCalcul(operateurs,operandes,strCalcul);
    },
    
    
    
//Display validé, calcul de l'opération
    validerCalcul(operateurs,operandes,chaineBase){
        let resultat;
        console.log(operandes);
        console.log(operateurs);
        
    /*Pour les calculs avec un seul opérateur (opérations simples)*/
        if(operateurs.length==1){
            let operande1 = operandes[0];
            let operande2 = operandes[1];
            switch(operateurs[0]){
                case "+":
                    resultat = mesOperations.opAddition(operande1,operande2);
                    mesActions.afficherResultat(resultat,chaineBase);
                    break;
                case "-":
                    resultat = mesOperations.opSoustraction(operande1,operande2);
                    mesActions.afficherResultat(resultat,chaineBase);
                    break;
                case "*":
                    resultat = mesOperations.opMultiplication(operande1,operande2);
                    mesActions.afficherResultat(resultat,chaineBase);
                    break;
                case "/":
                    resultat = mesOperations.opDivision(operande1,operande2);
                    mesActions.afficherResultat(resultat,chaineBase);
                    break;
            }
        }
        
    /*Pour les calculs avec plusieurs opérateurs (gestion des priorités de calculs)*/
        else if(operateurs.length>1){
            for(var i=0;i<operateurs.length;i++){
                if(operateurs.includes("*") || operateurs.includes("/")){
                    let j = 0;
                    while(operateurs.includes("*") || operateurs.includes("/")){
                        if(operateurs[j]=="*" || operateurs[j]=="/"){
                            let operande1 = operandes[j];
                            let operande2 = operandes[j+1];
                            switch(operateurs[j]){
                                case "*":
                                    resultat = mesOperations.opMultiplication(operande1,operande2);
                                    operandes.splice(j,2,resultat);
                                    operateurs.splice(j,1);
                                    console.log(operandes+" j'ai fait un *");
                                    console.log(operateurs);
                                    break;
                                case "/":
                                    resultat = mesOperations.opDivision(operande1,operande2);
                                    operandes.splice(j,2,resultat);
                                    operateurs.splice(j,1);
                                    console.log(operandes+" j'ai fait un /");
                                    console.log(operateurs);
                                    break;
                            }
                        }
                        else{j++;}
                    }
               
                }
                
                let operande1 = operandes[0];
                let operande2 = operandes[1];
                    
                switch(operateurs[i]){
                    case "+":
                        resultat = mesOperations.opAddition(operande1,operande2);
                        operandes.splice(0,2,resultat);
                        console.log(operandes+" j'ai fait un +");
                        break;
                    case "-":
                        resultat = mesOperations.opSoustraction(operande1,operande2);
                        operandes.splice(0,2,resultat);
                        console.log(operandes+" j'ai fait un -");
                        break;
                }
                
            }
            mesActions.afficherResultat(operandes[0],chaineBase);
        }
        else{
            resultat = operandes[0];
            mesActions.afficherResultat(resultat,chaineBase);
        }
    }
};




//Définition des mes Opérations (Objet)/////////////////////////////////////////////////////////////////////////////////////
let mesOperations = {
    opAddition(x,y){
        return x + y;
    },
    opSoustraction(x,y){
        return x - y;
    },
    opMultiplication(x,y){
        return x * y;
    },
    opDivision(x,y){
        return x / y;
    }
};




//Script trame principale///////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function(){
    
/*Récupération des différents éléments du DOM*/
    mesBalisesDOM.mesBoutonsChiffre = document.querySelectorAll("#boutonsChiffres span");
    mesBalisesDOM.mesBoutonsSymbole = document.querySelectorAll("#boutonsSymboles span");
    mesBalisesDOM.boutonVider = document.getElementById("vider");
    mesBalisesDOM.boutonEffacer = document.getElementById("effacer");
    mesBalisesDOM.boutonValider = document.getElementById("valider");
    mesBalisesDOM.displayEcran = document.getElementById("display");
    mesBalisesDOM.calculPrecedent = document.getElementById("precedent");
    mesBalisesDOM.displayResultat = document.getElementById("resultatCalculs");
     
    
/*Application des écouteurs d'événement*/
    for(var i=0;i<mesBalisesDOM.mesBoutonsChiffre.length;i++){
        initBoutonsDisplay(mesBalisesDOM.mesBoutonsChiffre[i]);
    }
    for(var i=0;i<mesBalisesDOM.mesBoutonsSymbole.length;i++){
        initBoutonsDisplay(mesBalisesDOM.mesBoutonsSymbole[i]);
    }
    mesBalisesDOM.boutonVider.addEventListener("click", mesActions.clearDisplay);
    mesBalisesDOM.boutonEffacer.addEventListener("click", mesActions.effacerCaractere);
    mesBalisesDOM.boutonValider.addEventListener("click", mesActions.verificationDisplay);
    
});