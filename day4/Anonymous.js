// Print odd numbers in an array

console.log("Q1.Odd number:");
var num = function(a)
{ 
    for(var i=0;i<a.length;i++)
    {
        if(a[i]%2 !=0)
        {
           console.log(a[i]); 
        } 
    }
};
num([100,101,111,124,155,164,173]);

//Convert all strings to title caps in the string array
console.log("Q2.string to titltCaps:");
var titleCaps=function (arr) {
    arr = arr.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');   
};
console.log(titleCaps("don't wait for opportunity, create it."));


// Sum of all numbers in an array
console.log("Q3.Sum of all numbers:");
var a =0;
var num=function(arr){
 for(var i=0;i<arr.length;i++)
 {
    a=a+arr[i];
 }
 return a;
};
console.log(num([25,4,19,2]));

//Return all the prime numbers in an array
console.log("Q4.Prime number:");
var num =function(a){
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
num([11,12,13,15,16,17,19,21,23,25,29]);

//Return all the palindromes in an array
console.log("Q5.Palindromes in an array are:");
var pal=function(a){
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

//Return the median of two sorted arrays of the same size
console.log("Q6.Median of sorted array of same size:")
var Median = function(arr1, arr2){
    var sortedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    var mid = Math.floor(sortedArr.length / 2);
  
    return sortedArr.length % 2 === 0
      ? (sortedArr[mid - 1] + sortedArr[mid]) / 2
      : sortedArr[mid];
  };
  var arr1 = [1, 3, 5];
  var arr2 = [2, 4, 6];
  
  var result=Median(arr1, arr2);
  console.log("Median:",+result);


// Remove duplicates from an array
console.log("Q7.New array is:");
var array=function(arr)
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
};
array([1,2,1,4,6,1,4,"hi","hello","hi"]);

//rotate an array by k times
console.log("Q8.Rotate an array by K times:")
var rotated =[];
var rotate = function(arr, k)
{
  var n = arr.length;
  k = k % n;
  rotated= [...arr.slice(k), ...arr.slice(0, k)];
 
  return rotated;
};
var Array = [1, 2, 3, 4, 5];
var k =3;

rotated = rotate(Array, k);
console.log("Array:", Array);
console.log("Rotated Array:",rotated);



