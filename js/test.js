//task1
// let na=prompt("Enter a Namjwefkmfdkjee : ")
// let age=prompt("Enter a Age :")
// let city=prompt("Enter a city : ")
// const obj={na,age,city}

// function sh(obj){
//     alert(`name :${obj.na}\n age:${obj.age}\n city:${obj.city}`)
// }
// sh(obj);


//task2
// let username=prompt("Enter a Name")
// let len=username.length
// if(username.includes(" ")){
//     alert("Contain Spaces")
// }
// else{
//     alert("Not spaces")
// }


//task3
// var a=[100,200,300]
// let total=0;
// for(let i=0;i<a.length;i++){
//     total+=a[i]
// }
// alert("Total : "+total)


//task4
//  let sen=prompt("Enter your sentence here: ")
//  let res =""
//  let dup=""
//  let word=sen.split(" ")
//  for (i=0; i<word.length; i++){
//      if(!res.includes(word[i])){
//          res+=word[i] + " "
//  }
//  else{
//     dup=word[i]
//  }
//  }
// alert("Without Dup sentence: "+ res.trim())
// alert("Dup Sentence : "+dup)

 
//task5
// var s=("Enter the String");
// var em="";
// var c=1;
// for(let i=0;i<s.length;i++){
//     if(s[i]==s[i+1]){
//         c++;
//     }
//     else{
//         em+=s[i]+c;
//         c=1;
//     }
// }
// alert(em)


//task6
// var mark=[90,70,80,95]
// var high=Math.max(...mark)
// console.log(high)
// var low=Math.min(...mark)
// var avg=mark.reduce((a,b)=>(a+b))/mark.length;
// console.log(`Highest = ${high}\n  lowest = ${low}\n  avg = ${avg}` )


//task7
// var sen=prompt("Enter a sentences")
// var word=prompt("Enter a word")
// var check=sen.includes(word) ? "Exists":"Not Exists"
// alert(check)



//task8
// const value = ["Dharan", 21, "tirupur"];
// const key = ["Name", "age", "City"];
// function ob(key, value){
//     let obj = {};
//     for (let i=0;i<key.length;i++) {
//         obj[key[i]] = value[i];
//     }
//     return obj;
// }
// let r=ob(key, value);
// console.log(r);


//task9
var s="aabbb";
var em="";
var a="";
var b="";
var c=1;
for(let i=0;i<s.length;i++){
    if(s[i]==s[i+1]){
        c++;
    }
    else{
        em+=s[i]+c;
        a+=s[i];
        b+=c;
        c=1;
    }
}
const obj={}
var key=a.split("")
var value=b.split("")
for(let i=0;i<key.length;i++){
    obj[key[i]]=value[i];

}
console.log(obj)







// task10
// let i=prompt("Enter the name");
// let n=i.split(",");
// n.sort();
// console.log(n);


//task11
// let ne=prompt("Enter the New Password");
// let pre=["Dharan@2004"] 

// if(ne.includes(pre)){
//     alert("PASSWORD ALREADY EXISTS")
// }
// else{
//     alert("REGISTERD NEW PASS")
// }

//task12
// const obj={
//     ravi:2000,
//     Dharan:10000,
//     akash:20000
// }
// let key=Object.keys(obj)
// let value=Object.values(obj)
// let t=0;
// for(let i=0;i<key.length;i++){
//     t+=value[i]
// }
// console.log(t)


//task13
// let arr=[0, 1, false, "", "Hello", null, undefined, NaN, 25];
// let c=arr.filter(false);
// console.log(c);

// task14
// let mail="Dharan@2004";
// let d = mail.slice(mail.indexOf("@") + 1);
// console.log("Domain :" + d);


let input = "2,3,3,4,4,4";
let nums = input.split(",");
console.log(nums);
let freq = {};
for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  if (freq[num] === undefined) {
    freq[num] = 1;
  }else {
       freq[num] = freq[num] + 1;
}
}
console.log(freq);

