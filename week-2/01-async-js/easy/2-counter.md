## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// setInterval : funtion to execute function as interval
let count=0;
let timeouts=[]
function counter(time){
    count++;
    console.log("count increment count",count,time);
    let t=setTimeout(counter,time,time);
    //push timeout id to array
    timeouts.push(t);
    if( count == 1000){
        //clear time out
        timeouts.forEach(clearTimeout,t);
    }

}
function setinterval(fun,time)
{
    fun(time);
}

setinterval(counter,5);








































































(Hint: setTimeout)