// //task1
// var time=Number(prompt("Enter the Time"))
// var period=prompt("Enter AM/PM")
// if(time>0 && time<12 && period=="AM"|| period=="am"){
//     alert("Gud Morning ")
// }
// else if(time <6 && (period=="PM"||period=="pm" )){
//     alert("Gud Afternoon")
// }
// else if (time >=6 && time<12 && (period=="PM"||period=="pm")){
//     alert("Gud Night")
// }



// //task2
// var user=Number(prompt("Enter the Number"))
// if(user>0){
//     alert("Postive")
// }
// else if(user<0){
//     alert("Negative")
// }
// else{
//     alert("Zero")
// }


//task3
// var total=Number(prompt("Enter the total Classes"))
// var attended=Number(prompt("Enter the Attended Classes"))
// var t=attended/total*100

// if(t>=75){
//     alert(t+" Eligible")
// }
// else{
//     alert(t+" Not Eligible")
// }


//task4
// var limit=prompt("Enter the Limt Number")
// var large=0
// for(var i=1;i<=limit;i++){
//     var num=prompt("Enter the Random Number")
//     if(num>large){
       
//         large=num    
//     }
// }
// alert(large)

//task5
// var option=prompt("1. celsius TO Fahrenheit \n"+"2. Fahrenhiet To Celsius ")
// var t=Number(prompt("Enter the Temperature Value :"))
// function CF(t){
//    return(t*9/5)+32 
// }
// function FC(t){
//     return(t-32)*5/9
// }
// switch(option){
//     case "1":
//         alert(CF(t))
//         break;
//     case "2":
//         alert(FC(t))
//         break;
//     default:
//         alert("Invaild")        

//     }



//task6
// var str=prompt("Enter the String")
// var  c=0;
// for(var i=0;i< str.length;i++){
//     var ch=str[i].toLowerCase();
//     if(ch =='a' || ch=='e'||ch=='i'||ch=='o'||ch=='u'){
//         c++;
//     }
// }
// alert(c +" Vowels count")


//task7
// const n=Number(prompt("Enter the number"));
// for(let i=1;i<=n;i++){
// let pat="";
// for(let j=1;j<=i;j++){
//       pat+=j;
// }
// console.log(pat)
// }



//task8
// var a=prompt("Enter the value of A")
// var b=prompt("Enter the value of B")
// var c=prompt("Enter the value of C")
// if(a<b && a<c){
//     alert("A is Smallest")
// }
// else if(b<a && b<c){
//     alert("B is Smallest")
// }
// else{
//     alert("C is Smallest")
// }



//task9
// var item=Number(prompt("Enter the total item"))
// var count=0;
// for(var i=0;i<item;i++){
//       var prod=Number(prompt("Enter the price"))
//       count+=prod
// }
// alert(+item+"Item Total Bill Amount "+ count)




//task10
// var year=Number(prompt("Enter the Year"))
// if(year%400===0 || (year%4===0 && year%100!==0)){
//         alert(year +" is a Leap Year")
// }
// else{
//        alert(year+ " is Not Leap Year")
// }


//task11
// var l=prompt("Enter the Limit")
// let odd=0;
// for(var i=1;i<=l;i++){
//     if(i%2!=0){
//         odd+=i
//     }
// }
// alert(odd)


//task12
// var user=prompt("Enter the Number")
// var str=user.toString();
// var rev="";
// for(var i=str.length-1;i>=0;i--){
//         rev+=str[i];
// }
// if (user === rev) {
//     alert(user + " is a Palindrome");
// }
// else {
//     alert(user + " is NOT a Palindrome");
//}

//task13
// var a=prompt("Enter a Base Value")
// var b=prompt("Enter the EXP  Value")
// var pow=1;
// for(var i=1;i<=b;i++){
//       pow*=a;
// }
// alert(pow)


//task14
// var m1=Number(prompt("Enter the Mark 1"))
// var m2=Number(prompt("Enter the Mark 2"))
// var m3=Number(prompt("Enter the Mark3"))
// var total=m1+m2+m3
// var avg=total/3
// if(avg>=50){
//       alert(avg+" Pass")
// }
// else{
//       alert(avg+" Fail")
// }


//task15


//task16
// var num=prompt("Enter the Number")
// sum=0;
// while(num>0){
//   var s=num%10;
//   sum+=s;
//   num=Math.floor(num/10);
// }
// alert("Sum Of Digits "+sum)


//task17
// do{
//     var c=prompt("1.Addtion \n"+ "2.Subtact \n"+"3.Multiply")
//     var a=Number(prompt("Enter A"))
//     var b=Number(prompt("Enter B"))
//     if(c=="1"){
//            alert(a+b)
//     }
//     else if(c=="2"){
//         alert(a-b)
//     }
//     else if(c=="3"){
//         alert(a*b)
//     }
//     else{
//         alert("Invalid")
//     }
// }   while(c!="3")


//task18
// var n = Number(prompt("How Many Numbers"));
//   var sum = 0;
//   for (let i=0;i<n;i++) {
//     var num = Number(prompt("Enter number " + i));
//     sum += num;
//   }
//   let avg = sum / n;
//   alert("Average is: " + avg);

//task19
// var num=Number(prompt("Enter the Numbert"))
// if(num%3==0 && num%5==0){
//     alert("Divisible by 3 and 5")
// }
// else if(num%3==0){
//     alert("Divisible by 3")
// }
// else if(num%5==0){
//    alert("Divisible by 5")
// }else {
//     alert("NOt Divisibe by 3 and 5")
// }


//task20
// var user="Dharan"
var pass="Dharan@2004"
c=0;
attempt=0;
while(attempt < 3){
    let p=prompt("Enter the Password")
    if(p==pass){
        c=1;
        break;
    }
    attempt++;
}
alert(c?"Sucessfully Login":"TRY AGAIN 3 ATTEMPT FAILED")