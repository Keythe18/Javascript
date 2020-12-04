const arr = [4, 5, -1, 6, 10, -4, 0];
var actu = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) < actu && arr[i] != 0) {
        actu = arr[i]);
    }
}
console.log(actu);