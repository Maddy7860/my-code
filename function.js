function add(a, b){
    var c = a+b
    console.log(c)
}
add(873, 34);


const getAvg = function(m1, m2, m3){
    const avg = (m1+m2+m3)/3;
    //console.log(avg);
    return avg;
}
const result = getAvg(34, 56, 78);
console.log(result);
const getFact = (n) => {
    let f=1;
for(let i=1; i<=n; i++){
f = f*i;
}
console.log(f);
}
getFact(5);


getAvg function(m1,m2,m3)