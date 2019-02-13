function myFunction(val, callback){
    if(val == 1){
        callback(true);
    }else{
        callback(false);
    }
}

myFunction(0, function (bool){
    if(bool){
        console.log("true");
    }else {
        //this condition is satisfied as 0 passed
        console.log(" false");
    }
});


console.log("modular approach");

function test(data) {
  return data?true:false;
}

function myFunction1(val, callback){
        callback(test(val));
}
myFunction1(1,function(d){
    console.log(d)
});

