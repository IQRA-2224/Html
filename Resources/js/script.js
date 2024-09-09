
// Vanilla JavaScript Code.

//         var height =prompt("enter the height in feet:");
//         console.log(height);
//         var age =prompt("enter the age in numbers:");
//         console.log(age);
//         var education =prompt("enter the education in numbers:");
//         console.log(education);

// if ((height >=5&&age >=18) ||(height >=5&&education >=14) ||(age >=18&& education >=14)) {
//     console.log("Qualified");
// }
//     else{
//         console.log("Unqualified");
//     }

// // Ecma JavaScript Code.

//     // ((height >=5&&age >=18) ||(height >=5&&education >=14) ||(age >=18&& education >=14)) ? console.log("Qualified"):console.log("Unqualified");



// var arr=["Lahore","Karachi","Islamabad","Peshawar","Quetta"]
// console.log(arr)
//     var a =prompt("Enter your birth city:")
//      console.log(a)

//     if( a==arr[0]||a==arr[1] || a==arr[2]||a==arr[3] || a==arr[4]||a==arr[5])
//         {
//         console.log("your city is clean");
//     }
//     else{
//         console.log("your city is not clean");
    // }

   



// var arr=["Lahore","Karachi","Islamabad","Peshawar","Quetta"]
// console.log(arr)
//     var a =prompt("Enter your birth city :")
//      console.log(a)

//     if( a==arr[0]||a==arr[1] || a==arr[2]||a==arr[3] || a==arr[4]||a==arr[5])
//         {
//         console.log("your city is clean");
//     }
//     else{
//         console.log("your city is not clean");
//     }
 

// Array Sorting:(Ascending order)through double loop

// var arr=[1,5,7,9,2,3,6,8];

// for(var i=0; i<arr.length; i++) {
//     for(var j=0; j<arr.length; j++) {
//         // console.log(arr)
//         // Swap elements if current element is greater than next one.
//         if(arr[j]>arr[j+1]){
//             var temp =arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log("Sorted array:"+arr)





// // Array Reversing:(Decending order)through double loop

// var arr=[1,5,7,9,2,3,6,8];

// for(var i=0; i<arr.length; i++) {
//     for(var j=0; j<arr.length; j++) {
//         if(arr[j]<arr[j+1]){
//             var temp =arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log("Reversed array:"+arr)



// var arr=[1,5,7,9,2,3,6,8];
// for(var i=0; i<arr.length; i++){
//     if(arr[i]>arr[i+1]){
//         var temp=arr[i]
//         arr[i]=arr[i+1]  
//         arr[i+1]=temp
//         i=-1  // resetting the index to start from the beginning of the array in the next iteration.
//     }
// }
// console.log("sorted elements:" +arr)


// var arr=[1,5,7,9,2,3,6,8];
// for(var i=0; i<arr.length; i++){
//     if(arr[i]<arr[i+1]){
//         var temp=arr[i]
//         arr[i]=arr[i+1]  
//         arr[i+1]=temp
//         i=-1  // resetting the index to start from the beginning of the array in the next iteration.
//     }
// }
// console.log("reversed elements:" +arr)


//  // Sort array through Function


// function sort(){
//     var arr=[1,5,7,9,2,3,6,8];
    
//     for(var i=0; i<arr.length; i++) {
//         for(var j=0; j<arr.length; j++) {
//             if(arr[j]>arr[j+1]){
//                 var temp =arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     console.log(arr)
//     }
    
//     console.log("Sorted array:")
//     sort()
    
//     // Reverse array through Function

// function reverse(){
// var arr=[1,5,7,9,2,3,6,8];

// for(var i=0; i<arr.length; i++) {
//     for(var j=0; j<arr.length; j++) {
//         if(arr[j]<arr[j+1]){
//             var temp =arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr)
// }

// console.log("Reversed array:")
// reverse()


    
//   var First_name=["Iqra","Kahdija","Khansa"]
//   var Last_name=["Mubarak","Naveed","Ehsan"]
  
//   for(var i=0; i<First_name.length; i++){
//     for(var j=0; j<Last_name.length;j++){
//         if(i==j){
        
//         console.log(First_name[i]+" "+Last_name[j]);
//         }
    
//     }
//     }






// var a=(Math.round(Math.random()*10));
// console.log(a)
// var input =parseInt(prompt("Enter your number:"))
// console.log(input);
// if(input==a){
//     console.log("Passed!");
//     var res=document.getElementById("demo");
//     res.innerHTML='Hello you are passed!'
//     res.style.color='green';
//     res.style.backgroundColor ='grey';
// }
// else{
//     console.log("Failed!");
//      var res=document.getElementById("demo");
//     res.innerHTML='Hello you are Failed!'
//     res.style.color='red';
//     res.style.backgroundColor ='grey';
// }






// // var obj1={Name:"Iqra",Age:20 };
// // var obj2={id:732,class:"BSCS"};
// // var obj3={Sem:4,grade:"cgpa"};
// // // Concatenation

// // console.log(Object.assign(obj1,obj2,obj3));
// // obj4=Object.assign(obj1,obj2,obj3);
// // console.log(obj4);
// // obj5=  obj4;
// // obj5.Name="khadija"
// // console.log(obj4,obj5)


// var a = "hello world"


// setTimeout(() => {
//     console.log(a)},0)
//     console.log("hello pakistan")



// var arr = [1,2,3,4,5,6,7,8,9]
// // var e=[]
// // var o=[]
// // // for(var i=0; i<arr.length; i++)
// // //     if (arr[i]/2){
// // //         e.push(arr[i]);
// // //         console.log(e);
// // //         }
// // //         else{
// // //         o.push(arr[i]);
// // //         console.log(o);
// //         }

//  for(let i=0; i<arr.length; i++){
//      if(arr[i]%2==0){
//          console.log(arr[i]);

//      }
//      }
//  for(let i=0; i<arr.length; i++){
//      if(arr[i]%2!=0){
//          console.log(arr[i]);
//      }
//  }

































































































        





