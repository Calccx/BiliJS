var para=document.createElement("p");
para.id="我测"
var node=document.createTextNode("文本");
para.appendChild(node);
var element=document.getElementById("idv");
element.appendChild(para);


var Inputer=document.createElement("input");
Inputer.type="text";Inputer.name="InputerName";Inputer.id="InputerId";
var upload=document.createElement("button")
upload.onclick="changeSpeed()"
// var nod=document.createTextNode("文本");
// Inputer.appendChild(node);
// var element=document.getElementById("idv");
// element.appendChild(Inputer);
// var htmlbody=document.getElementsByClassName("harmony-font header-v3 win")
// document.body.appendChild(Inputer)
var title=document.getElementsByClassName("idv")[0]
title.appendChild(Inputer)


function changeSpeed(){
    var changeSpeed = document.querySelector('.bpx-player-ctrl-playbackrate-menu-item');
    changeSpeed.setAttribute('data-value',0.5);// 这里设置需要的倍数
    changeSpeed.innerHTML=('0.5x');
    changeSpeed.click();
}