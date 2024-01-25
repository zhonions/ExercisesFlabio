let count=0;
document.getElementById("sub").addEventListener("click",()=>{
    count--;
    document.getElementById("resultado").innerHTML=count;
});

document.getElementById("add").addEventListener("click",()=>{
    count++;
    document.getElementById("resultado").innerHTML=count;
});