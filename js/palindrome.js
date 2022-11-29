const textInputElement = document.querySelector('#palindrome-word-analyser input');
const formElement = document.querySelector('#palindrome-word-analyser form');
const formBtnElement = document.querySelector('form a.my-btn');


formBtnElement.addEventListener('click', function(){
    let userWord = textInputElement.value;
    const pElement = document.createElement('p');
    

    pElement.innerHTML = isPalindrome(userWord);

    formElement.after(pElement);
})



function isPalindrome(word){
    word = word.replace(/\s/g,'');
    let reversedWord = '';


    for(let i=word.length-1 ; i>=0 ; i--){
        reversedWord += word[i];    
    }

    
    let finalComment = ((word == reversedWord) && (word != '')) ? 'La parola è palindroma' : 'La parola non è palindroma';

    console.log(reversedWord)
    return finalComment;
}