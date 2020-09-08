function series(a){
    let res=[]
    a==0?console.log('enter the valid input'):null
    let series=1
    let n=a
    if(a%2==0) n=a-1;

    for(let i=0;i<n;i++){
     res.push(series);

     series+=2;
    }
    return res.join(',');
}
console.log(series(6))