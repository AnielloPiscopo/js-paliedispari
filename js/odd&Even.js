const oddVsEvenSectionForm = document.querySelector('#odd-vs-even form');
const oddInputRadio = document.querySelector('#odd-vs-even input#odd');
const evenInputRadio = document.querySelector('#odd-vs-even input#even');
const oddVsEvenSectionFormBtn = document.querySelector('#odd-vs-even form a.my-btn');
const oddVsEvenSectionNumberInputElement = document.querySelector('#odd-vs-even input[name="number"]');


oddVsEvenSectionFormBtn.addEventListener('click' , function(){
    let userChoice = whoIsChecked(oddInputRadio,evenInputRadio);
    let userNumber = oddVsEvenSectionNumberInputElement.value;
    const pElement = document.createElement('p');


    let controlResult = isValid(userNumber);


    if(controlResult){
        userNumber = parseFloat(userNumber , 10);

        let pcNumber = getARandomNumber(1 , 5);
        let sum = getSumOfNumbers(userNumber,pcNumber);
        let finalResult = isOddOrEven(sum);


        pElement.innerHTML = (userChoice === finalResult) ? 'Hai vinto!' : 'Hai perso!';
        console.log(pcNumber);


        oddVsEvenSectionForm.after(pElement);
    }
})





function whoIsChecked(inputRadio1,inputRadio2){
    return (inputRadio1.checked) ? inputRadio1.value :
        (inputRadio2.checked) ? inputRadio2.value :
           alert('Non hai ancora scelto se pari o dispari');
}


function isValid(value){
    value = value.replace(/\s/g,'');

    if(value === ''){
        return alert('Non hai inserito alcun valore');
    }else if(!isFinite(value)){
        return alert('ATTENZIONE!\nPuoi digitare solo valori numerici');
    }

    value = parseFloat(value,10);

    return ((value - Math.floor(value)) !== 0) ? alert('ATTENZIONE!\nNon puoi inserire numeri decimali') : 
        (value<1 || value>5) ? alert('Non hai inserito un valore valido') : true
}


function getARandomNumber(minValue , maxValue){
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}


function getSumOfNumbers(num1 , num2){
    return num1+num2;
}


function isOddOrEven(num){
    return (num%2 === 0) ? 'odd' : 'even';
}