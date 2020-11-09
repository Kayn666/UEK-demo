// onload  当整个页面都加载完成会执行函数   加载速度慢
// DOMContentLoaded  DOM加载完执行，相对较快
document.addEventListener("DOMContentLoaded",function(){
    var middleBox=document.querySelector(".middle-box")
    var middleImg=middleBox.firstElementChild
    var smallBox=document.querySelector(".small-box")
    var bigBox=document.querySelector(".big-box")
    var bigImg=bigBox.firstElementChild
    var smallList=smallBox.children

    for(let i=0;i<smallList.length;i++){
        smallList[i].onmouseover=function(){
            for(let j=0;j<smallList.length;j++){
                smallList[j].style.border="2px solid #fff"
            }
            this.style.border="2px solid red"
            middleImg.src="./imgs/mid"+(i+1)+".jpg"
            bigImg.src="./imgs/big"+(i+1)+".jpg"
        }
    }


    // 中图对大图的控制
    middleBox.onmouseover=function(){
        bigBox.style.display="block"
    }
    middleBox.onmouseout=function(){
        bigBox.style.display="none"
    }

    // 中图对大图的位置控制
    middleBox.onmousemove=function(ev){
        var ox=ev.offsetX
        var oy=ev.offsetY
        var bilix=(bigImg.offsetWidth-bigBox.offsetWidth)/middleImg.offsetWidth
        var biliy=(bigImg.offsetHeight-bigBox.offsetHeight)/middleImg.offsetHeight
        bigImg.style.marginLeft=-ox*bilix+"px"
        bigImg.style.marginTop=-oy*biliy+"px"
    }
});