function fizzBuzz1 () {
    var a=[];
    for (var i=1; i<=100; i++) {
        if ((i%3==0)&&(i%5==0)) { a.push("Fizz Buzz"); }
        else {
            if (i%3==0) { a.push("Fizz") }
            else {
                if (i%5==0) { a.push("Buzz"); }
                else { a.push(i); }
            }
        }
    }
    console.log(a);
}

function fizzBuzz2 () {
    var x="";
    for (var i=1; i<=100; i++) {
        if ((i%3!=0)&&(i%5!=0)&&(i%7!=0)&&(i%13!=0)) { x+=i; }
        else {
            if (i%3==0) { x+="Fizz"; }
            if (i%5==0) { x+="Buzz"; }
            if (i%7==0) { x+="Rizz"; }
            if (i%13==0) { x+="Bizz"; }
        }
        if (i<100) { x+=", "; }
    }
    console.log(x);
}

function cB (arr, x) {
    let len=arr.length;
    let arr1=arr.slice(0,parseInt(len/2));
    let arr2=arr.slice(parseInt(len/2),len);
    if (arr2[0]==x) { return true; }
    else {
        if (x>arr2[0]) {
            return cB(arr2,x);
        }
        else {
            return cB(arr1,x);
        }
    }
    return false;
}