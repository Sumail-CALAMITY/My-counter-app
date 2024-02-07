let cout=0;

document.getElementById("minus").onclick = function(){
    cout-=1;
    document.getElementById("content").innerHTML=cout;
}
document.getElementById("reset").onclick = function(){
    cout= 0;
    document.getElementById("content").innerHTML=cout;
}
document.getElementById("plus").onclick = function(){
    cout+=1;
    document.getElementById("content").innerHTML=cout;
}
