var big=document.getElementById('big');
var box2=document.getElementById('box2');
var close=document.getElementById('close');
big.onclick=function(){
    box2.style="display:block";
}

close.onclick=function(){
    box2.style="display:none";
}