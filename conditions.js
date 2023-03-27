/*age=18;


if(age>=18){
    console.log('eligible for DL');
    myvar='global';
    var x='func scoped';
    let y='block scoped';
    const pi=3.14;
    //pi=5.32
}
else{
    console.log('not eligible for DL');
}
console.log(myvar)
console.log(x);
//console.log(y);
console.log(pi);

num=45;
console.log(num%2==0 ? 'even' : 'odd');

//check if a num is perfect square
/*num=36;
//root=math.sqrt(num); 
root=num**(0.5)
console.log(root);
if(root== parseInt(root)){
    console.log('perfect square');
}
else{
    console.log('not a perfect square');
}*/


//div by 7 &11
num= 78;

if(num%7==0 && num%11==0){
    console.log("Divisible by both");
}
else if( num%7==0 && num%11!=0){
    console.log(" Divisible by 7 only");
}
else if( num%7!=0 && num%11==0){
    console.log(" Divisible by 11 only");
}
else{
    console.log("Divisible by none");
}