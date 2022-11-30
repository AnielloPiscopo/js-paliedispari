const palindromeSectionTextInputElement = document.querySelector('#palindrome-word-analyser input');
const palindromeSectionFormElement = document.querySelector('#palindrome-word-analyser form');
const palindromeSectionFormBtn = document.querySelector('#palindrome-word-analyser form a.my-btn');
const palindromeSectionFormResetBtn = document.querySelector('#palindrome-word-analyser form input[type = "reset"]');


palindromeSectionFormBtn.addEventListener('click', function(){
    let userWord = palindromeSectionTextInputElement.value;
    const pElement = document.createElement('p');
    

    pElement.innerHTML = isPalindrome(userWord);

    palindromeSectionFormElement.after(pElement);



    palindromeSectionFormResetBtn.addEventListener('click' , function(){
        pElement.remove();
    })
})



function isPalindrome(word){
    word = word.replace(/\s/g,'');


    if(word === ''){
        alert('Non hai inserito alcun valore');
        return null;
    }


    let reversedWord = '';
    let convertedWordToLowerCase = String(word).toLowerCase();


    for(let i=convertedWordToLowerCase.length-1 ; i>=0 ; i--){
        reversedWord += convertedWordToLowerCase[i];    
    }

    
    let finalComment = ((convertedWordToLowerCase == reversedWord) && (word != '')) ? 'La parola è palindroma' : 'La parola non è palindroma';

    console.log(reversedWord);
    return finalComment;
}