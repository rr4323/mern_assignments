## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
let count=0;
//declare interval id variable
let intervalid;
//counter function to count and clear interval after count of 1000
function counter(){
    count++;
    console.log("count increment count",count);
    if( count == 1000){
        //clear interval
        clearInterval(intervalid);
    }
    
}

//it return interval id which can be use to clear the interval
intervalid=setInterval(counter,2);