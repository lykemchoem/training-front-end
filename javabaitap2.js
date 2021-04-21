function quadratic() {
    var numberA = parseInt(document.getElementById("a").value);
    var numberB = parseInt(document.getElementById("b").value); 
    var numberC = parseInt(document.getElementById("c").value);
    var result = 0;
    if (a==0)
    delta = numberB*numberB - 4*numberA*numberC;
    switch (true) {
        case delta < 0:
        result = " PT vo nghiem "
        break;
        
        case delta == 0:
        result = " PT co nghiem x1,x2 = " + (-numberB/2*numberA)
        break;

        case delta > 0:
        var x1 = (-numberB + Math.sqrt(delta))/2*numberA
        var x2 = (-numberB - Math.sqrt(delta))/2*numberA
        result = ` Phuong trinh co 2 nghiem x1=${x1}, x2=${x2} `
        break;
    }
   
    document.getElementById("result").value = result;
    
}