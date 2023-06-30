
function timMaxThu3(arr) {
    for (let i = 0; i < arr.length  ; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
               let a = arr[j]
                arr[j] = arr[i]
                arr[i] = a
            }
        }
    } let max3 = arr[arr.length-3]
   document.getElementById('result').innerHTML = 'Điểm cao thứ 3 trong danh sách là: ' + max3
}
let arr = [6,8,9,7,5,3,3,1,4,7]
document.getElementById('arr').innerHTML = arr
timMaxThu3(arr);