let a=[80,30,40,60,50,5]

let val1=a[0]
function findmin(a){
  
    for(let i=0;i<a.length;i++){
       if(a[i]<val1){
        val1=a[i]
       }
    }
   console.log(val1)
}
findmin(a)

