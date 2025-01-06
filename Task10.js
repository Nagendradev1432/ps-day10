let rows=prompt("enter number of rows :")
for(i=1;i<=rows*2-1;i++){
   let  spaces=(i<=rows)?rows-i:i-rows;
   let  cols=(i<=rows)?i:2*rows-i;
    console.log(" ".repeat(spaces)+"* ".repeat(cols));
}

let str1=prompt("enter a name :").toUpperCase().split("").join("")
let str2=str1.split("").reverse().join("")
if(str1==str2){
    console.log("palindrome")
}
else{
    console.log("not a palindrome")
}


let num=+prompt("enter a number :")
let c=0
if(num>1){
    for(i=2;i<num;i++){
        if(num%i==0){
            console.log("not a palindrome")
            c++
            break;
        }
    }
    if(c==0){
        console.log("palindrome")
    }
}

let num = +prompt("enter a number : ");
let sum=0
if (num > 1) {
    for (i = 2; i < num; i++) {
        let c=0
        for(j=2;j<i;j++){
            if (i % j == 0) {
                c++
            } 
        }
         if(c==0){
          console.log(i)  
 }
}

}

let num=+prompt("enter a number : ")
for(i=1;i<num;i++){
    if(i%2==0){
        console.log(i+" "+"even numbers")
    }
    else if(i%2==1){
        console.log(i+" "+"odd numbers")
    }
}


let num=+prompt("enter a number : ")
for(i=1;i<=num;i++){
    for(j=1;j<=10;j++){
        console.log(i+"X"+j+"="+i*j)
    }
}


let num = +prompt("enter a number : ");
 
if (num > 1) {
    for (i = 2; i < num; i++) {
         let c=0
        for(j=2;j<i;j++){
            if (i % j == 0) {
                c++
            } 
        }
         if(c==0){
            console.log(i)
     }
    }
   
}

let str1=prompt("enter a name :").toUpperCase().split("").join("")
let str2=str1.split("").reverse().join("")
if(str1==str2){
    console.log("palindrome")
}
else{
    console.log("not a palindrome")
}


let num=+prompt("enter a number :")
let c=0
if(num>1){
    for(i=2;i<num;i++){
        if(num%i==0){
            console.log("not a palindrome")
            c++
            break;
        }
    }
    if(c==0){
        console.log("palindrome")
    }
}

let num = +prompt("enter a number : ");
let sum=0
if (num > 1) {
    for (i = 2; i < num; i++) {
        let c=0
        for(j=2;j<i;j++){
            if (i % j == 0) {
                c++
            } 
        }
         if(c==0){
          console.log(i)  
 }
}

}

let num=+prompt("enter a number : ")
for(i=1;i<num;i++){
    if(i%2==0){
        console.log(i+" "+"even numbers")
    }
    else if(i%2==1){
        console.log(i+" "+"odd numbers")
    }
}


let num=+prompt("enter a number : ")
for(i=1;i<=num;i++){
    for(j=1;j<=10;j++){
        console.log(i+"X"+j+"="+i*j)
    }
}


let num = +prompt("enter a number : ");
 
if (num > 1) {
    for (i = 2; i < num; i++) {
         let c=0
        for(j=2;j<i;j++){
            if (i % j == 0) {
                c++
            } 
        }
         if(c==0){
            console.log(i)
     }
    }
   
}


let num=10;
let c=0
if(num>1){
    for(i=2;i<=num;i++){
        if(num%i==0){
            c++
        }
    }
    if(c==0){
        console.log(i)
    }
}


let num = +prompt("Enter a number: ");
if(num>1){
    for(i=2;i<num;i++){
        let c=0
        for(j=2;j<i;j++){
            if(i%j==0){
                c++
            }
        }
        if(c==0){
            console.log()
        }
    }
}


let str1=prompt("enter a name : ")
let str2=""
for(i of str1){
    str2=i+str2
  
}
 if(str1==str2){
     console.log("palindrome")
 }
 else{
     console.log("not a palindrome")
 }



let num=+prompt("enter number : ")
if(num>1){
for(i=2;i<=num;i++){
    if(i%2==0 && i%3==0){
        console.log(i+" "+"Fizz Buzz")
    }
    else if(i%2==0){
        console.log(i+" "+"Fizz")
    }
    else if(i%3==0){
        console.log(i+" "+"Buzz")
    }
    else{
        console.log(i+" "+"not valid number")
    }
}
}



let num=+prompt("enter number : ")
let mul=1
let str1=""
for(i=1;i<=num;i++){
    if(i!=num){
    str1=str1+i+"*"
    }
    else{
        str1=str1+i+""
    }
   
   mul=mul*i 
}
console.log(str1+" "+"="+mul)
