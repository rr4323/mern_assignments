Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function dateTimeFormat(){
    const date=new Date();
    console.log(`${date.getHours()%12 || 12}::${date.getMinutes()}::${date.getSeconds()}`)
}

function dateTimeFormatAMPM(){
    const date=new Date();
    console.log(`${date.getHours()%12 || 12}::${date.getMinutes()}::${date.getSeconds()} ${date.getHours() >= 12 ? 'PM' : 'AM'}`)
}

setInterval(dateTimeFormat,1000);
setInterval(dateTimeFormatAMPM,1000);