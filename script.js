const divTabella = document.getElementById("div_tabella");

function tabella(){
    let nCasella = 0;
    const altezzaLunghezza = document.getElementById("diff").value;
    let stampFinale = "";
    let numBombe = [];

    for(let i = 0; 16 > i; i++){
        numBombe[i] = randomMaxMin(1, altezzaLunghezza*altezzaLunghezza);
    }
    
    let numDiversi = 0;
    do {
        for (let i = 0; i < 16; i++) {
            let k = 0;
            let x = 0;
            for (let j = 0; i > j; j++) {
                if (numBombe[i] == numBombe[j]) {
                    x++;
                }
            }

            if (x != 0 || x != 1){
                numBombe[i] = randomMaxMin(1, altezzaLunghezza*altezzaLunghezza);
                numDiversi++;
            }
        }
            
    } while (numDiversi == 0);
    console.log(numBombe);



    for(let i = 0; altezzaLunghezza > i; i++){
        stampFinale += `<div class="riga">`;
        for(let j = 0; altezzaLunghezza > j; j++){
            nC = nCasella + j + 1;
            stampFinale += `<span class="casella" id="casella${nC}" onclick="casella(${nC})">${nC}</span>`;
        }
        stampFinale += `</div>`;
        nCasella += 10;
    }
    divTabella.innerHTML = stampFinale;
}

function casella(numeroCasella){
    document.getElementById(`casella${numeroCasella}`).className += " evidenziato";
    console.log(numeroCasella);
}

function randomMaxMin(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}