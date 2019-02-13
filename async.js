async function f1(a,b){
     return a+b;
}

async function f2(a,b){
    return a-b;
}

 function test(){
     var a=f1(2,3);
     var b=f2(2,1);
     a.then(d =>{ 
        console.log(d);}
        );
    b.then(d =>{ 
        console.log(d);}
        );
     
     
}

test();