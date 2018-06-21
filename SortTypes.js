//Bubble Sort

funtion bubbleSort (arr) {
    for (var i=0, i<arr.length-1, ++i) {
        for (var j=i+1, j<arr.length, ++j) {
            if(arr[i]>arr[j]) {
                arr[i]=arr[i]+arr[j];
                arr[j]=arr[i]-arr[j];
                arr[i]=arr[i]-arr[j];
            }
        }
    }
    return arr;
}



// Quick Sort

funtion quickSort (arr) {

}