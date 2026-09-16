let str='hello'
let fre={}
for(let i=0;i<str.length;i++){
    let key=str[i]
    if(!fre[key]){
        fre[key]=0

    }
    fre[key]++;
}
console.log(fre)