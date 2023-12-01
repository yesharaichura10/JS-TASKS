let timee=[];

const myfunction =()=> {
    const time1 = document.getElementById("time1").value;
    console.log(time1);

    const time2 = document.getElementById("time2").value;
    console.log(time2);

    console.log(parseInt(time1) - parseInt(time2));

    if(parseInt(time1) - parseInt(time2)){
        console.log("true");
    }
    else{
        console.log("false");
    }
}