// Print odd numbers in an array

console.log("Q1.Odd number:");
(function num(odd)
{
    for(var i=0;i<odd.length;i++)
    {
        if(odd[i]%2!=0)
        {
            console.log(odd[i]);
        }
    }
})([3,4,6,7,11,14,21,5,33,4,15]);

//Convert all strings to title caps in the srting array
console.log("Q2.string to titltCaps:");
(function titleCaps(a) {
    a = a.toLowerCase().split(' ');
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    console.log(a.join(' '));
    
})("a good laugh is sunshine in the house.");


// Sum of all numbers in an array
console.log("Q3.Sum of all numbers:");
var sum=0;
(function num(a){
    for(var i=0;i<a.length;i++)
    {
        sum=sum+a[i];       
    }
    console.log(sum);
})([10,20,30]);

//Return all the prime numbers in an array
console.log("Q4.Prime number:");
(function(a){
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
})([1,2,3,4,5,6,7,8,9]);

//Return all the palindromes in an array
console.log("Q5.Palindromes in an array are:");
(function(a){
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
})
(["malayalam","racer","radar","12341","madam","23432"]); 

//Return the median of two sorted arrays of the same size
console.log("Q6.Median of sorted array:");
var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];
(function median(arr1, arr2){
    var sortedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    var mid = Math.floor(sortedArr.length / 2);
  
    return console.log(sortedArr.length % 2 === 0
      ? (sortedArr[mid - 1] + sortedArr[mid]) / 2
      : sortedArr[mid]);
  })
(arr1, arr2);

// Remove duplicates from an array
console.log("Q7.New array is:");
(function(arr)
{
    let A = [];
    for(let i of arr) 
    {
        if(A.indexOf(i) === -1)
        {
            A.push(i);
        }
    }
    console.log(A);
})
([5,6,4,"year",5,3,6,"year","day"]);


//rotate an array by k times
console.log("Q8.Rotate an array by K times:")
var num = [1, 2, 3, 4, 5];
var k =3;
(function(arr, k)
{
  var n = arr.length;
  k = k % n;
  var rotated = [...arr.slice(k), ...arr.slice(0, k)];
 console.log(rotated);
})
(num, k);



