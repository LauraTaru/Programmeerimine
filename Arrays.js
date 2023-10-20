let wordsArray=["apple"];
let userWord=prompt("Please enter a word:");

if(wordsArray.includes(userWord)){
    alert("Word is already in the array");
}
else{wordsArray.push(userWord);
    }
