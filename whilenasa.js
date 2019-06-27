Your output should look like the following:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!var count=60;

while(count>=0){
    if(count===50){
        console.log("Orbiter transfers from ground to internal power")
    }else if(count===31){
        console.log("Ground launch sequencer is go for auto sequence start")
    }else if(count===16){
        console.log("Activate launch pad sound suppression system")
    }else if(count===10){
        console.log("Activate main engine hydrogen burnoff system")
    }else if(count===6){
        console.log("Main engine start")
    }else if(count===0){
        console.log("Solid rocket booster ignition and liftoff! ")
    }else{
    console.log("T-"+count+" seconds");
    }
    count=count-1;
}
