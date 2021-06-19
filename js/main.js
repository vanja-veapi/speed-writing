window.addEventListener("load", function()
{
    const arr = ["Agent 45", "Kalibar", "Pedro", "Opasan sam narkoman", "Pegla", "Kafa", "Zika", "Hitboy"];
    let inputText;
    let inputVal;
    inputText = document.getElementById("input-text");
    inputText.addEventListener("input", getValue);
    
    var randomNumber = Math.floor(Math.random()*arr.length);
    console.log(randomNumber);
    var sentence = document.getElementById("sentence").textContent = `${arr[randomNumber]}`;



    let stopwatchSec = 0;
    let stopwatchMin = 0;
    let ms = new Date();
    let test = ms.getMilliseconds();
    var refresh = setInterval(updateStopwatch ,1000);


    function updateStopwatch()
    {
        let stopwatchId = document.getElementById("stopwatch").innerHTML = `${stopwatchMin}:${stopwatchSec += 1}`;
        // if(test === 999)
        // {
        //     test = 0;
        // }
        if(stopwatchSec === 59)
        {
            stopwatchSec = 0;
            stopwatchMin += 1;
        }
    }

    function getValue()
    {
        inputVal = document.getElementById("input-text").value;
        console.log(inputVal);
        if(inputVal.toLowerCase() === sentence.toLowerCase())
        {
            sentence = document.getElementById("sentence").textContent = ``; //Ovo nece da radi ako napisem samo sentence.textContnet... pa sam morao da kopiram ovako
            randomNumber = Math.floor(Math.random()*arr.length);
            sentence = document.getElementById("sentence").textContent += `${arr[randomNumber]}`;
            clearInterval(refresh);
            console.log("Jeste JESTE JESTE JESTE JESTE");
            inputVal = document.getElementById("input-text").value = ""
        }
        else
        {
            console.log("Nije");
        }
    }
    

});