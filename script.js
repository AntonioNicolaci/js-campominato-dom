const divTabella = document.getElementById("div_tabella");

function tabella(){
    let nCasella = 0;
    const altezzaLunghezza = document.getElementById("diff").value;
    let stampFinale = "";

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