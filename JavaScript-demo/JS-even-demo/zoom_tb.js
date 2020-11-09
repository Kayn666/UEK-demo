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
            middleImg.src="./imgs/mid_tb"+(i+1)+".jpg"
            bigImg.src="./imgs/big_tb"+(i+1)+".jpg"
        }
    }


    // 中图对大图的控制
    var mask=middleBox.lastElementChild
    var copy=document.querySelector(".copy")
    copy.onmouseover=function(){
        bigBox.style.display="block"
        mask.style.display="block"
    }
    copy.onmouseout=function(){
        bigBox.style.display="none"
        mask.style.display="none"
    }

    // 解决事件流问题
    // 1.mouseover mouseout 一种方式，自己写一个函数   
    // 2.改变html结构的方式  事件流->有层级的关系，改变成平级关系  这种方法应用更普遍

    // 中图对大图的位置控制
    copy.onmousemove=function(ev){
        var ox=ev.offsetX
        var oy=ev.offsetY

        var x=ox-mask.offsetWidth/2
        var y=oy-mask.offsetHeight/2
        if(x<0){
            x=0
        }
        if(y<0){
            y=0
        }
        if(x>middleBox.offsetWidth-mask.offsetWidth){
            x=middleBox.offsetWidth-mask.offsetWidth
        }
        if(y>middleBox.offsetHeight-mask.offsetHeight){
            y=middleBox.offsetHeight-mask.offsetHeight
        }

        mask.style.left=x+"px"
        mask.style.top=y+"px"

        bigImg.style.marginLeft=-x*2+"px"
        bigImg.style.marginTop=-y*2+"px"
    }
});