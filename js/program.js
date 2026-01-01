//task1
// let user=prompt("Enter a Username");
// let str=user.toLowerCase()
// alert(str.trim())


//task2
// var email=prompt("Enter a Mail ID")
// if(email.includes("@pkdhr")&&email.includes(".")){
//     alert("Vaild Mail")
// }
// else{
//     alert("Not Valid Mail")
// }

//task3
// var sen=prompt("Enter a Sentences")
// let spac=0
// let count=0;
// for(let i=0;i<sen.length;i++){
//     if(sen[i]!=" "){
//         count++;
//     }
//     else{
//         spac++;
//     }
// }
// alert(count)
// alert(spac)


//task4
// var para=prompt("Write a Paragraph : ");
// let s=para.trim().split(" ");
// let c=s.length;
// alert("TOTAL  WORDS "+c );

//task5
// var str=prompt("Enter a String :")
// let n=str.length
// if(n>0){
// let first=str[0];
// let last=str[n-1]
// alert("First : "+first+" Last : "+last)
// }
// else{
//     alert("String Empty")
// }

//task6
// let sen=prompt("Enter a sentence:");
// let old=prompt("Enter the word to replace:");
// let ne=prompt("Enter the new word:");
// let n=sen.replace(old,ne);
// alert("Updated sentence:"+n);

//task7
// let t = prompt("Enter text:");
// if (t.length<5 || t.length>20) {
//   alert("Error: Text length must be between 5 and 20 characters");
// } else {
//   alert("Accepted:"+t);
// }

//task8
// let str = prompt("Enter a string:");
// let c = 0;
// for (let i=0;i<str.length;i++) {
//   let ch = str.charAt(i);
//   if (ch>="A" && ch<="Z") {
//     c++;
//   }
// }
// alert("Uppercase count:"+c);


//task9
// var str=prompt("Enter a String")
// let sen="";
// for(let i=0;i<str.length;i++){
//     let n=str[i]
//      if( n>='a' && n<='z'|| n>='A' && n<='Z' || n>="0" && n<="9"|| n==" "){
//         sen+=n;
//      }
// }
// alert("Without Special Characters : "+sen);


// //task10
// var str=prompt("Enter a string:");
// var start=prompt("Enter starting word:");
// var end =prompt("Enter ending word:");
// if (str.startsWith(start)&&str.endsWith(end)) {
//   console.log("Starts and ends correctly");
// } else {
//   console.log("Condition not satisfied");
// }
