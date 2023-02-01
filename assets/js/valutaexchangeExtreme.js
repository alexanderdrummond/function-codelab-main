const calculateButton = document.getElementById('calculateButt');


calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    gatherInputData();
});

function gatherInputData() {
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;

    const myDanishAmount = document.getElementById('danishAmount').value;


    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}


function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}

  function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {

            let myDollars = calculateExchange(myDanishAmount, myDollarRate);
            let myEuros = calculateExchange(myDanishAmount, myEuroRate);

            showResult(myEuros, myDollars, myDanishAmount);
        }

    function calculateExchange (myDanishAmount, myRate) {
    return myDanishAmount / myRate; }

    

