//修改速度函数
function changeSpeeder(){
var speedvalue=document.getElementById("InputerId").value
alert(speedvalue)
var changeSpeed = document.querySelector('.bpx-player-ctrl-playbackrate-menu-item');
changeSpeed.setAttribute('data-value',speedvalue);
changeSpeed.innerHTML=(speedvalue+'x');
changeSpeed.click();}
//输入框
var Inputer=document.createElement("input");
Inputer.type="text";Inputer.name="InputerName";Inputer.id="InputerId";Inputer.size="1"
//提交栏
var upload=document.createElement("input")
upload.onclick=changeSpeeder;upload.type="submit";upload.value="修改速度"
//标题下栏
var titleblank=document.getElementsByClassName("video-data")[0]
titleblank.appendChild(Inputer)
titleblank.appendChild(upload)