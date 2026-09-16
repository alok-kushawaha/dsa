let arr=[250,645,300,900,50]
let temp=[]
for(let i=0;i<arr.length;i++){
temp[i]=arr[i]/10
arr[i]-=temp[i]
}
console.log(arr)