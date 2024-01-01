const btn1=document.getElementById('getlocation')

function getlocation(position){
    console.log(position);
}
function failed()
{
    console.log("there was some issue");
}

btn1.addEventListener('click',async()=>{
    const result=navigator.geolocation.getCurrentPosition(getlocation,failed);
})
