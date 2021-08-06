var transButton=document.querySelector("#btn-translate");
var inputText=document.querySelector("#txt-input");
var outputText=document.querySelector("#txt-output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

//function to get url
function transURL(text)
{
    return serverURL + "?" + "text="+ text;
   
}

function clickEventHandler(){
    var input=inputText.value;
    fetch(transURL(input))
    .then(response => response.json())
    .then(json => {
         var transText=json.contents.translated;
         outputText.innerText=transText;
    })
   
}

transButton.addEventListener("click", clickEventHandler)


