function spiral(mat) {
    var s="";
    var n=mat.length;
    for(var step=0; step<mat.length/2; ++step) {
        for (var r1=0; r1<mat[step].length; ++r1) {
            s+=mat[step][r1];
        }
        for (var c1=0; c1<n-step; ++c1) {
            s+=mat[c1][n-step];
        }
        for (var r2=mat[step.])
    }
}