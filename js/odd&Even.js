const oddVsEvenSectionForm = document.querySelector('#odd-vs-even form');
const oddInputRadio = document.querySelector('#odd-vs-even input#odd');
const evenInputRadio = document.querySelector('#odd-vs-even input#even');
const oddVsEvenSectionFormBtn = document.querySelector('#odd-vs-even form a.my-btn');
const oddVsEvenSectionNumberInputElement = document.querySelector('#odd-vs-even input[name="number"]');


oddVsEvenSectionFormBtn.addEventListener('click' , function(){
    let userChoice = whoIsChecked(oddInputRadio,evenInputRadio);
    let userWord = oddVsEvenSectionNumberInputElement.value;
})





function whoIsChecked(inputRadio1,inputRadio2){
    return (inputRadio1.checked) ? inputRadio1.value :
        (inputRadio2.checked) ? inputRadio2.value :
        alert('Non hai ancora scelto se pari o dispari')
}