// Print odd numbers in an array
console.log("Q1.Odd number:");
var arr = (a) => {
    for(var i=0;i<a.length;i++)
    {
        if(a[i]%2 !=0)
        {
            console.log(a[i]);
        }
    }
};
arr([5,8,9,13,15,16,19,22,25]);

//Convert all strings to title caps in the string array
console.log("Q2.string to titltCaps:");
var titleCaps=(a)=> {
    a = a.toLowerCase().split(' ');
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    console.log(a.join(' '));
    
};
titleCaps("have a nice day");


// Sum of all numbers in an array
console.log("Q3.Sum of all numbers:");
var sum=0;
var num=(a) =>{
    for(var i=0;i<a.length;i++)
    {
      sum=sum+a[i];
    }
    console.log(sum);

};
num([4,6,8,12]);

//Return all the prime numbers in an array
console.log("Q4.Prime number:");
var num =(a)=>{
    for(var i=0;i<=a.length;i++)
    {
       var count=0;
    for(var j=2;j<=a[i];j++)
    {
      if(a[i]%j==0)
       {
           count++;
       }
    }
       if(count==1)
       {
         console.log(a[i]);
       }     
    }        
};
num([3,4,5,7,8,9,11,15,17,19,21]);

//Return all the palindromes in an array
console.log("Q5.Palindromes in an array are:");
var pal=(a)=>{
    for(i=0;i<a.length;i++)
    {
      var b="";
      for(j=a[i].length-1;j>=0;j--)
     {
      b = a[i].split('').reverse().join('');
     } 
      if(b==a[i]){
        console.log(a[i]);
        b="";
      }
    } return b;
};
pal(["malayalam","racer","radar","12341","madam","23432"]); 
