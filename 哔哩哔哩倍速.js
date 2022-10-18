
//修改速度函数
function changeSpeed(){
    var speedvalue=document.getElementById(InputerId).value
    var changeSpeed = document.querySelector('.bpx-player-ctrl-playbackrate-menu-item');
    changeSpeed.setAttribute('data-value',speedvalue);// 这里设置需要的倍数
    changeSpeed.innerHTML=('0.5x');
    changeSpeed.click();
}
//输入框
var Inputer=document.createElement("input");
Inputer.type="text";Inputer.name="InputerName";Inputer.id="InputerId";Inputer.width="50"
//提交栏
var upload=document.createElement("button")
upload.onclick="changeSpeed()"
//标题下栏
var titleblank=document.getElementsByClassName("video-data")[0]
titleblank.appendChild(Inputer)
titleblank.appendChild(upload)
