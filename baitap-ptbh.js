factorial = () => {
    var numberOne = parseInt(document.getElementById('input-1').value);
    var a = 1;
    for ( var i = 1; i <= numberOne; i++) {
        a = a * i;
    }
    document.getElementById('input-2').value = a;
}

even = () => {
    var numberOne = parseInt(document.getElementById('input-1').value);
    if (numberOne % 2 == 0) {
        document.getElementById('input-3').value = 'là số chẳn';
    } else {
        document.getElementById('input-3').value = 'là số lẻ';
    }
}

sumOdd = () => {
    var numberOne = parseInt(document.getElementById('input-1').value);
    var sum = 0;
    var n = 0;
    while ( n <= numberOne ) {
        if ( n % 2 != 0 ) {
           sum = sum + n;                      
        } n++;
    } 
    document.getElementById('input-4').value = sum;
}
        
squarenumber = () => {
    var numberOne = parseInt( document.getElementById('input-1').value);
    var sq = Math.sqrt(numberOne);
    if( sq - Math.floor(sq) == 0 ){
        document.getElementById('input-5').value ='là số chính phương';
    } else{
        document.getElementById('input-5').value ='không là số chính phương';
    }
}
    