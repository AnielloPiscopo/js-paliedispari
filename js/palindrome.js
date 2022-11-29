const palindromeSectionTextInputElement = document.querySelector('#palindrome-word-analyser input');
const palindromeSectionFormElement = document.querySelector('#palindrome-word-analyser form');
const palindromeSectionFormBtnElement = document.querySelector('#palindrome-word-analyser form a.my-btn');


palindromeSectionFormBtnElement.addEventListener('click', function(){
    let userWord = palindromeSectionTextInputElement.value;
    const pElement = document.createElement('p');
    

    pElement.innerHTML = isPalindrome(userWord);

    palindromeSectionFormElement.after(pElement);
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