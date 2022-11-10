var dictionaryList = ["apple", "beer", "color" ,"flower", "orange"]
function searchWord() {
    var textFieldWord = document.getElementById("textField").value;
    if (dictionaryList.includes(textFieldWord)) {
        document.getElementById("messageOnScreen_WordValidation").innerHTML = "This word is in the dictionary";
        document.getElementById("messageOnScreen_Question").innerHTML = "";
        document.getElementById("buttonsYesNo").innerHTML = "";
    } else {
        document.getElementById("messageOnScreen_WordValidation").innerHTML = "This word is not in the dictionary";
        document.getElementById("messageOnScreen_Question").innerHTML = "Do you wish to add it to the dictionary?";
        button_yes = document.createElement("Button");
        button_no = document.createElement("Button");
        Object.assign(button_yes, {
            id : "yes",
            textContent : "yes",
            onclick : () => addWord("yes")
        })
        Object.assign(button_no, {
            id : "no",
            textContent : "no",
            onclick : () => addWord("no")
        })
        document.getElementById("buttonsYesNo").appendChild(button_yes);
        document.getElementById("buttonsYesNo").appendChild(button_no);
    }
}

function addWord(selectedButton) {
    if(selectedButton == "yes") {
        var textFieldWord = document.getElementById("textField").value; 
        dictionaryList.push(textFieldWord);
        document.getElementById("messageOnScreen_WordValidation").innerHTML = "";
        document.getElementById("messageOnScreen_Question").innerHTML = "";
        document.getElementById("buttonsYesNo").innerHTML = "";
    } else if(selectedButton == "no") {
        document.getElementById("messageOnScreen_WordValidation").innerHTML = "";
        document.getElementById("messageOnScreen_Question").innerHTML = "";
        document.getElementById("buttonsYesNo").innerHTML = "";
    }
}