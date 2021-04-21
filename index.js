function factorial () {
    var numberA= parseInt( document.getElementById('input-1').value);
    var result = 1;
    for (var i = 1; i <= numberA ; i++) {
        // result = result * i;
        result *= i;

    }
    console.log('>>> result: ', result);
    console.log(result);
    document.getElementById('input-2').value = result;

}
function even (){
    var numberA = parseInt( document.getElementById('input-1').value);
    
    if (numberA % 2 == 0) {
        document.getElementById('input-3').value ='là số chẳn';
     } else{
        document.getElementById('input-3').value ='là số lẻ';
     }
}

function sum () {
    var numberA = parseInt( document.getElementById('input-1').value);
    var sum = 0;
    var index = 0;
    
    while( index <= numberA ){
        if( index % 2 != 0){
            sum += index;
        } index ++ ;
    }
    document.getElementById('input-4').value = sum;
}

function SquareNumber () {
    var numberA = parseInt( document.getElementById('input-1').value);
    var sq = Math.sqrt(numberA);
    if( sq - Math.floor(sq) == 0 ){
        document.getElementById('input-5').value = numberA + ':là số chính phương';
    } else{
        document.getElementById('input-5').value = numberA + ':không phải số chính phương';

    }

}

