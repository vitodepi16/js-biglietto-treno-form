/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65. L'output del prezzo finale va messo fuori in forma umana

    variabile km da percorrere
    variabile età
    variabile prezzo/Km = 0.21 al km
    variabile prezzo totale
    variabile sconto minorenni < 18 = 0.20
    variabile sconto over 65 =  0.40
*/


// const ageUser = prompt('Inserisci la tua Età');
// const travelKm = prompt('Per quanti km intendi viaggiare?');
// const priceKm = 0.21;
// let totalPrice = (travelKm * priceKm).toFixed(2);
// const discountYoung = ((totalPrice) * 0.20).toFixed(2);
// const discountOld =  ((totalPrice) * 0.40).toFixed(2);
// let priceDiscountYoung = (totalPrice - discountYoung ).toFixed(2);
// let priceDiscountold = (totalPrice - discountOld).toFixed(2);

const ageBox = document.querySelector('input=[name="age"]');
const kmBox = document.querySelector('input=[name="km"]');

const button = document.querySelector('button');
console.log(button);


button.addEventListener('click', function () {
    let ageUser = ageBox.value;
    let travelKm = kmBox.value;
    const priceKm = 0.21;
    let totalPrice = (travelKm * priceKm).toFixed(2);
    // const discountYoung = ((totalPrice) * 0.20).toFixed(2);
    // const discountOld =  ((totalPrice) * 0.40).toFixed(2);
    // let priceDiscountYoung = (totalPrice - discountYoung ).toFixed(2);
    // let priceDiscountold = (totalPrice - discountOld).toFixed(2);
    totalPrice.innerHTML =  `
    <h1>Il Prezzo del tuo biglietto é:  ${totalPrice}&euro; </h1>
    `;
    



    console.log(ageUser);
    console.log(travelKm);
})

document.getElementById('priceticket').innerHTML=`
<h1>Il Prezzo del tuo biglietto é:  ${totalPrice}&euro; </h1>
`;










// if(isNaN(ageUser), isNaN(travelKm)){
//     document.getElementById('priceticket').innerHTML = `
//     <h1>Inserisci correttamente i tuoi dati</h1>
//     `;
  
// }

//     else  if (ageUser < 18){
//     totalPrice = discountYoung, 
//     document.getElementById('discountTicket').innerHTML = `
//     <h2>Lo sconto del biglietto é: ${totalPrice}&euro; </h2>
//     `;
//     document.getElementById('priceDiscountYoung').innerHTML = ` 
//     <h1>Totale da pagare:${priceDiscountYoung}&euro;</h1>
//     `;
// }
//     else if(ageUser > 64){
//         totalPrice = discountOld,
//         document.getElementById('discountTicket').innerHTML = `
//         <h2>Lo sconto del biglietto é di: ${totalPrice}&euro; </h2>
//         `;
//         document.getElementById('priceDiscountOld').innerHTML = ` 
//         <h1>Totale da pagare:${priceDiscountold}&euro;</h1>
//         `;
//     } 
//     else {
//         document.getElementById('priceticket').innerHTML = `
// <h1>Il Prezzo del tuo biglietto:   ${totalPrice}&euro; </h1>
// `;
//     }
    
