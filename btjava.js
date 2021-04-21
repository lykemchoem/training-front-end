handleNumbers = () => {
    let listNumbers = document.getElementById('list-numbers').value;
    let newArrayNumbers = listNumbers.split(' ');
    let firstNegativeNumber = 0;
    let minNumber = ' ';
    let result = '';
    let increase = listNumbers.split(' ');
    // Số âm đầu tiên   
    for (x of newArrayNumbers) {
        if (parseInt(x) < 0) {
          firstNegativeNumber = x;
          break;
        }
    }
    if (firstNegativeNumber == 0) {
        result = ' dãy số không có số âm'
    } else {
        result = firstNegativeNumber;
    }
    // Số nhỏ nhất
    minNumber = parseInt(Math.min(...newArrayNumbers));
    // Trung bình cộng các số dương
    // for ( i = 0; i < newArrayNumbers.length; i++ ) {
    //     tong = tong + newArrayNumbers[i];

    // let ketQua = tong / newArrayNumbers.length;
    // return ketQua;
    // }
    // Sắp xếp tăng dần
    increase.sort(function xxx (a, b){
        return a - b
    })
    //result
    document.getElementById('min-number').value = minNumber;
    // document.getElementById('average-positive-numbers').value = 
    document.getElementById('first-negative-number').value = result;
    document.getElementById('Sort-increase').value = increase;
}