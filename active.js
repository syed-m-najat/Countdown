let cdNumber  = 10

function countdown () {
    
    cdNumber--;
    
    document.querySelector("#cd").innerHTML = cdNumber

    if (cdNumber == 0) {
        clearInterval(sec)
        document.querySelector("#cd").style.display = "none";
        document.querySelector("#end").style.display = "block";
    }

}

let sec = setInterval(countdown,1000)