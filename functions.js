function addNums(a,b){
    var c=a+b;
    console.log(c);
}

addNums(4,5);
// console.log(c);

const fact= function(n){
    let f=1;
    for(let i=2; i<=n;i++)
    {
        f=f*i;
    }
    console.log(f);
}

fact(4);
fact(6);

const greet= (name, time) =>{
    if(time>=4 && time<12)
    {
        console.log('Good Morning ' + name);
    }
    else if(time>=12 && time<16)
    {
        console.log('Good Afternoon ' + name);
    }
    else if(time>=16 && time<20)
    {
        console.log('Good Evening ' + name);
    }
    else{
        console.log('Good Night ' + name);
    }
}
greet('perks', 17);
greet('anks', 12);

