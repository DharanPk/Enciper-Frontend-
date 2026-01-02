//task1
// let user=prompt("Enter a Username");
// let str=user.toLowerCase()
// alert(str.trim())


//task2
// var email=prompt("Enter a Mail ID")
// if(email.includes("@")&&email.includes(".")){
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
// let s=para.split(" ");
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

//task11
// var p=prompt("Enter the sentences")
// var large="";
// var ch=p.split(" ")
// for(let i=0;i<ch.length;i++){
//     if(ch[i].length>large.length){
//         large+=ch[i]
//     }
// }
// alert("Largest Word "+ large)


//task12




//task13
// var mobile=(prompt("Enter the Number : "))
// var mark="*".repeat(mobile.length-4) + mobile.slice(-4);
// alert(mark)


//task14
var str=prompt("Enter a String")
var rep="";
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++){
        if(str[i]==str[j]){
            rep+=str[i]
        }
    }
}
alert(rep)

//task15
// var str=prompt("Enter a Words")
// var v=0;
// var c=0;
// for(let i=0;i<str.length;i++){
//     if("AEIOUaeiou".includes(str[i])){
//         v++;
//     }
//     else{
//         c++
//     }
// }
// alert("vowels "+ v +" Consonants "+c)


//task16
let w1=prompt("Enter first string");
let w2=prompt("Enter second string");
let s1 = w1.toLowerCase().split("").sort().join("");
let s2 = w2.toLowerCase().split("").sort().join("");
if (s1.match(s2)) {
  alert("Anagram");
} else {
  alert("Not an Anagram");
}
