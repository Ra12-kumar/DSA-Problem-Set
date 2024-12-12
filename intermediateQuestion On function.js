//1.write a function to determine number is palindrome or not
function checkPalindrome(n){
  let rev=0,temp=n;
  while(n>0){
    rev=rev*10+n%10;
    n=Math.floor(n/10);
  }
  if(rev==temp){
    return "palindrome";
  }
  else{
    return "not palindrome";
  }
}
console.log(checkPalindrome(121));


//2.reverse the degit of a number
function reverseDigit(n){
  let rev=0;
  while(n>0){
  rev=rev*10+n%10;
  n=Math.floor(n/10);
  }
  return rev;
}
console.log(reverseDigit(532));

//3.write a function to find power(a,b)

//4.write a function find sum of digit of a number
 function sumOfDigits(n){
   let sum=0;
   while(n>0){
     sum=sum+n%10;
     n=Math.floor(n/10);
   }
   return sum;
 }
console.log(sumOfDigits(125));

//5.product of digit of number
function productOfDigit(n){
  let prod=1;
  while(n>0){
    prod=prod*(n%10);
    n=Math.floor(n/10);
  }
  return prod;
}
console.log(productOfDigit(425));

//find largest digit in a number
function findLargestDigit(n){
  let temp,ans=1;
  while(n>0){
    temp=n%10;
    if(temp>ans){
      ans=temp;
    }
    n=Math.floor(n/10);
  }
  return ans;
}
console.log(findLargestDigit(985));

//find smallest digit in anumber

function findSmallestDigit(n){
  let temp,ans=Math.floor(n%10);
  while(n>0){
    temp=n%10;
    if(temp<ans){
      ans=temp;
    }
    n=Math.floor(n/10);
  }
  return ans;
}
console.log(findSmallestDigit(782));

//perfect number

function checkPerfectNumber(n){
  let sum=0;
  for(let i=1;i<n;i++){
    if(n%i==0){
      sum=sum+i;
    }
  }
  if(sum==n){
    return "perfect number";
  }
  else{
    return "not a perfect number";
  }
}
console.log(checkPerfectNumber(10));

//check for armstrong number or not

function length(n){
  let count=0;
  while(n>0){
    n=Math.floor(n/10);
    count++;
  }
return count;
}
function armstrong(n){
  let sum=0;
  let temp=n;
  let count=length(temp);
  while(n>0){
    let lastDigit=n%10;
    sum=Math.pow(lastDigit,count)+sum;
    n=Math.floor(n/10);
  }
  if(sum===temp){
    return "armstrong"
  }
  else{
    return "not armstrong";
  }

}
console.log(armstrong(153));




















