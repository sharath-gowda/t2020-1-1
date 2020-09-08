function count(arr){
    let counter={}
    let dict=[1,2,3,4,5,6,7,8,9]
    for (const i of dict) {
        for(let j=0;j<arr.length;j++){
            arr[j]%i===0? counter[i]=++counter[i]||0:null;   
        }
        
    }
   return counter
}
console.log(count([0,1,2,8,9,12,46,76,82,15,20,30]))
