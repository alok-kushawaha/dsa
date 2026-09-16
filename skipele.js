let arr =[10,70,30,40,50,60,]
let firstlarg= 0
let secondlarg=0
for(let i=0;i<=arr.length-1;i++){
  if(firstlarg<arr[i]){
    secondlarg=firstlarg
    firstlarg = arr[i]

}
if(arr[i]>firstlarg && arr[i] != secondlarg){
  secondlarg=arr[i]
}
}
console.log(secondlarg)