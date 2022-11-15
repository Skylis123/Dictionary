var dictionaryList = []
function searchWord() {
    var textFieldWord = document.getElementById("textField").value;
    if (dictionaryList.includes(textFieldWord)) {
        document.getElementById("messageOnScreen_WordValidation").innerHTML = "This word is in the dictionary";   
    } else {
        document.getElementById("messageOnScreen_WordValidation").innerHTML = "This word is not in the dictionary";
    }
}

function addWord() {
    var textFielWord = document.getElementById("textField").value;
    dictionaryList.push(textFielWord);
    document.getElementById("messageOnScreen_WordValidation").innerHTML = "This word was added to the dictionary";
}