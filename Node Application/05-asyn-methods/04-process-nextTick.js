//process.nextTick(function (){
 // console.log('process.nextTick() called')
//});

// callback functioon pattern
function sumAsync(x,y, cb){
    if( typeof x != 'number' || typeof y != 'number' ){
        //return cb(new Error ('both arguments must be numbers'));
        process.nextTick(cb,new Error ('both arguments must be numbers'));// not tied to any event queue 
        // when current function exits, this line is executed
        return ;
    }
    setTimeout(function (){// event loop calls this function
    cb(x + y); // event loop gets the result x + y
    },2000);
}

function doSomething (result){
    console.log('result is ', result);
}

console.log(sumAsync("",13, doSomething));