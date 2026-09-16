// let arr=[10,30,40,60,50]
let val=0
function findmax(a){
    for(let i=0;i<a.length;i++){
        if(a[i]>val){
            val=a[i]

        }
    }
    console.log(val)
}
    findmax([10,30,40,60,50])