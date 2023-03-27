/*for( let i=0; i<=10; i++)
{
    console.log(i);
}
for( let i=20; i<=50; i++)
{
    if(i%2!=0){
        console.log(i);
    }
    
}

myname="Preksha";
for(let c of myname){
    console.log(c);
}

for(let n of [23,45,67,89]){
    console.log(n)
}*/

/* myname="Madan Mohan Malviya";
for(let c of myname){
    if(c=='a' || c=='e'|| c=='i'|| c=='o'|| c=='u'){
        console.log(c);
    }   
}
console.log(myname.includes('Mad'));

for(let v of 'aeiou'){
    if(myname.includes(v))
    {
        console.log(v);
    }
}*/

// Fibonacci series upto 10 terms
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= 8; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//prime number check
let num=23, c=0;
for(let i=1;i<=num; i++)
{
    if(num%i==0)
    {
        c++;
    }
}
if(c==2)
{
    console.log(num+" is Prime number");
}
else{
    console.log(num+ " is not a Prime number");
}

// numbers divisible by 7 and 11
console.log("Numbers divisble by 7 and 11 in the range 20-200 are:");
for(let i=20;i<=200;i++)
{
    if(i%7==0 && i%11==0){
        console.log(i);
    }
}