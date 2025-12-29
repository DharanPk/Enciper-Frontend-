// task1
var user=prompt("Enter the Name")
function target(){
    alert("Welcome to User's page")
}
target()



//task2
var num=prompt("enter the number")
function oddeven(){
    let n=(num%2==0)?"Even":"odd"
    alert(n)
}
oddeven()



//task3
var a=Number(prompt("Enter the A Value"))
var b=Number(prompt("Enter the B Value"))
var c=prompt("Type the Operator (+,-*,/)")
switch(c){
    case "+":
        alert(a+b)
        break;
    case "-":
        alert(a-b)
        break;
    case "*":
        alert(a*b)
        break; 
    case "/":
        alert(a/b)
        break;           
    default:
        alert("Invalid Operator")
        break;
}



// task4
var a=prompt("Enter the User's Age")
function age(){
    if(a>=18){
        alert("Eligible to Vote")
    }
    else{
        alert("Not Eligible to Vote")
    }
}
age()



// task5
var number=prompt("Enter the Number")
for(var i=1;i<=10;i++){
    console.log(i+"*"+ number+" = " +(number*i))
}




// task6
var n=prompt("Enter the Limit Numberfor sum of Number")
var sum=0;
for(var i=1;i<=n;i++){
    sum+=i
}
alert(sum)



//task7
var pass=prompt("Enter the Password")
if(pass.length >=10){
    alert("PASSWORD VALID")
}
else{
    alert("INVALID [Above 10 character]")
}



// task8
var mark=prompt("Enter the OVERALL MARK")
if(mark>90){
    alert("Grade A")
}
else if(mark>80){
    alert("Grade B")
}
else if(mark>60){
    alert("Grade C")
}
else if(mark>50){
   alert("Grade D")
}
else{
    alert("Fail")
}



// task9
var a=prompt("Enter the value of A")
var b=prompt("Enter the value of B")
var c=prompt("Enter the value of C")
if(a>b && a>c){
    alert("A is Larger")
}
else if(b>a && b>c){
    alert("B is Larger")
}
else{
    alert("C is larger")
}



// task10
var user="Dharaneesh"
var pass="Dharan@2004"
let nam=prompt("USERNAME")
let key=prompt("PASSWORD")
if(user.length==nam.length && user==nam && pass.length ==key.length && pass==key ){
    alert("Sucessfully Login")
}
else{
    alert("Unsucessfull")
}



// task11
var n=prompt("Enter the Limit for Even Count")
var c=0;
  for(var i=1;i<=n;i++){
    if(i%2==0){
     c+=i;
 }
}
 alert(c)



//  task12
var n=prompt("Enter the number for Reverse a Number")
var rev=" "
for(var i=n;i>0;i--){
      rev+=i+"  "
}
alert(rev)


// task13
var amt=Number(prompt("Enter the Principal Amount"))
var rate=Number(prompt("Enter the  Rate of Amount"))
var time=Number(prompt("Enter the Time"))
const simple=(amt,rate,time)=>{ let ans=amt*rate*time/100
alert(ans)
}
simple(amt,rate,time)



// task14
var fix=18
var user=prompt("Enter The Correct Number")
if(user>fix){
    alert("TO Hight")
}
else if(user<fix){
    alert("Too Low")
}
else{
    alert("FINDED")
}

// // task15
var n=prompt("Enter the Number")
const prime= n =>{
f=0
if(n<=1) {  
let f=1;
}
for(let i=2;i<n;i++){
    if(n%i==0){
        f=1;
    }
}

if(f==0){
    alert(n +" Prime Number")
}
else{
    alert(n +" Not a Prime")
}
}
prime(n)



// task16
var n=prompt("Enter the Number")
function factorial(n){
var fact=1
for(let i=1;i<=n;i++){
    fact*=i
}
alert(fact)
}
factorial(n)



// task17
var n=prompt("Enter the Number to Count Digits")
function count(n){
    let c=0
    while(n!=0){
        let x=n%10
        c++;
        n=Math.floor(n/10);
    }
    alert(c)
}
count(n)



// task18 
const menu = prompt("MENU\n"+"1.Add\n"+"2.Subract\n"+"3.Multiply\n"+"4.Divide\n"+"Enter the Option (1-4) :    ")      
const a = Number(prompt("Enter the A number"));
const b = Number(prompt("Enter the B number"));

const add=(a, b)=>  a + b;

const sub=(a, b)=> a - b;

const mul=(a, b)=> a * b;

const div=(a, b) => a / b;

switch (menu) {
case "1":
alert(add(a,b));
break;
case "2":
alert(sub(a,b));
break;
case "3":
alert(mul(a,b));
break;
case "4":
alert(div(a,b));
break;
default:
alert("Inavlid Operation Choose 1 to 4");
}



// task19
var l=prompt("Enter the Limit")
let even=0
let odd=0
for(var i=1;i<=l;i++){
    if(i%2==0){
        even+=i
    }
    else{
        odd+=i
    }
}
// alert(even)
// alert(odd)
alert(even+" = Event "+ odd+ " = odd ")

// task20
var user=confirm("Do you want to Exit?");
if(user){
    alert("Exit successfully");
}else{
    alert("Continue to work");
}



