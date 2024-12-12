//function for sum of 2 Number
function sum(a,b){
  return a+b;
}
console.log(sum(2,3));

//2.product of 2 Number
function product(a,b){
  return a*b;
}
console.log(product(2,3));

//3.write a function to check odd or even
function checkOddEven(n){
  if(n%2==0){
    return "even";
  }
  else{
    return "odd";
  }
}
console.log(checkOddEven(5));

//4.write a function to calculate square of Number
function square(n){
  return n*n;
}
console.log(square(5));

//5.write a function to calculate cube of Number
function cube(n){
  return n*n*n;
}
console.log(cube(5));

//6.write a function to find factorail of a Number

function fact(n){
  let fact=1;
  for(let i=1;i<=n;i++){
    fact=fact*i;
  }
  return fact;
}
console.log(fact(5));

//7.write a function to check a prime Number

function prime(n){
  if(n<2){
    return "not prime";
  }
  for(let i=2;i<n;i++){
    if(n%i==0){
      return "not Prime";
    }
  }
  return "prime";
}
console.log(prime(9));

//8.write a function to find gcd of two Number

function gcd(a,b){
  if(b==0){
    return a;
  }
  return gcd(b,a%b);
}
console.log(gcd(10,20));

//9.write a function to find lcm of two Number
function gcd(a,b){
  if(b==0){
    return a;
  }
  return gcd(b,a%b);
}
function lcm(a,b){
  return a*b/gcd(a,b);
}
console.log(lcm(3,5));

//find nth fobonacci number

function nthFibo(n){
  if(n==0 || n==1){
    return n;
  }
  return nthFibo(n-1)+nthFibo(n-2);
}
console.log(nthFibo(6));
