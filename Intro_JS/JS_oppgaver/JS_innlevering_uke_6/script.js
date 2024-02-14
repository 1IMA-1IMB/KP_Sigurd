




function convertButton()
{
     
    let input = document.getElementById("conversionUnits").value;
    //const inputvalue = input.value;
    console.log(input);

//documen.getElementById.value for å hente informasjonen til convert input boksen.
    let number = document.getElementById("convert").value;  

    let result;
// start av oppgave 2 med palindrom sjekker. 
    let stringnumber = number.toString();
    
    let reversenumber = stringnumber.split('').reverse().join('');
    if(number == reversenumber)
    {
        document.getElementById("Palindrome").innerHTML = "This number is a palindrome :)";
        //console.log("This is a Palindrome");
    }else
    {
    document.getElementById("Palindrome").innerHTML = "This number is not a palindrome :(";
    //console.log("This number is not a palindrome")
    
    }
//disse if funksjonene her sjekker om en av de option value-ene fra menyen min er valg. og vis de er valgt så gjør det "result" om til "number" ganger verdien inne i en av if-ene.

    if(input === "Gallons")
    {
    result = number * 3.785;
    }

    if(input === "Ounces")
    {
    result = number * 0.0295;
    }

    if(input === "Cups")
{
    result = number * 0.236;
}
if(input === "Spiseskjeer")
{
    result = number * 0.0147;
}


//jeg bruker toFixed() funskjon til å endre maksimum antall desimaler som resultatet kan ha. 
let resultString = result.toFixed(3);
document.getElementById("convertedvalue").innerHTML = "= " + resultString + " L";
}




