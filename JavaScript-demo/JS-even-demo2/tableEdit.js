/*
1.能够创建指定表格
2.对表格的内容进行编辑
3.能动态的添加行列
4.能动态的删除
*/ 
function table(){
    this.clientW=document.documentElement.clientWidth
    this.clientH=document.documentElement.clientHeight
    this._init();
    this._optCard();
}
table.prototype={
    _init(){
        this.startBtn=document.createElement("div")
        this.startBtn.style.cssText=`width:100%;
        height:40px;line-height:40px;text-align:center;
        font-size:30px;font-weight:bold;background:blue;
        cursor:pointer;`;
        this.startBtn.innerHTML="创建表格"
        document.body.appendChild(this.startBtn)
    },
    _optCard(){
        var that=this
        this.startBtn.onclick=function(){
            // 创建面板
            that._pannel()
            // 创建表格
            that._createTable();
            
        }
    },
    _pannel(){
        this.pannel=document.createElement("div")
        this.pannel.style.cssText=`width:`+this.clientW/3+
        `px;height:`+this.clientH/2+`px;position:absolute;
        left:0;top:0;right:0;bottom:0;margin:auto;border:1px 
        solid #888`;

        var rowInput=document.createElement("input")
        rowInput.placeholder="请输入行"
        var colInput=document.createElement("input")
        colInput.placeholder="请输入列"
        var submit=document.createElement("input")
        submit.type="button"
        submit.value="确定"
        this.submit=submit
        this.rowInput=rowInput
        this.colInput=colInput

        this.pannel.appendChild(rowInput)
        this.pannel.appendChild(colInput)
        this.pannel.appendChild(submit)

        document.body.appendChild(this.pannel)
    },
    _createTable(){
        var that=this
        this.submit.onclick=function(){
            var rows=that.rowInput.value;
            var cols=that.colInput.value;
            that.rows=rows;
            that.cols=cols;
            that.pannel.style.display="none"
            that._setTableCSS()
            that.table=document.createElement("table")
            for(var i=0;i<rows;i++){
                var tr=document.createElement("tr")
                for(var j=0;j<cols;j++){
                    var td=document.createElement("td")
                    tr.appendChild(td)
                }
                that.table.appendChild(tr)
            }
            document.body.appendChild(that.table)

            that._createAddBtn()
            that._editTable()
            that._addTable()
            that._delTable()
        }
    },
    _createAddBtn(){
        this.addBtn=document.createElement("div")
        this.addBtn.innerHTML="+"
        this.addBtn.style.cssText=`width:20px;
        height:20px;border:1px solid #ccc;
        margin:auto;cursor:pointer;font-size:20px;
        text-align:center`;
        document.body.appendChild(this.addBtn)
    },
    _addTable(){
        var that=this;
        this.addBtn.onclick=function(){
            var tr=that.table.insertRow()
            for(var i=0;i<that.cols;i++){
                tr.insertCell().innerHTML="&nbsp"
            }
        }
    },
    _delTable(){
        var that=this
        that._createMenu();
        document.oncontextmenu=function(ev){
            var target=ev.target
            var cx=ev.clientX
            var cy=ev.clientY
            that.menu.style.left=cx+"px"
            that.menu.style.top=cy+"px"
            that.menu.style.display="block"
            ev.preventDefault()
            that.delMenu.onclick=function(){
                that.table.removeChild(target.parentNode)
            }
        }
        document.onclick=function(){
            that.menu.style.display="none"
        }
    },
    _createMenu(){
        this.menu=document.createElement("ul")
        this.delMenu=document.createElement("li")
        this.delMenu.innerHTML="删除"
        this.selectMenu=document.createElement("li")
        this.selectMenu.innerHTML="查询"
        
        this.menu.appendChild(this.delMenu)
        this.menu.appendChild(this.selectMenu)
        this.menu.style.cssText=`width:100px;
        height:100px;border:1px solid #444;
        box-shadow:0 0 10px #222;
        position:absolute;padding:5px;
        line-height:20px;display:none;background:#fff`;
        document.body.appendChild(this.menu)
    },
    _setTableCSS(){
        var css=`
            table{
                width:80%;
                height:auto;
                border:1px solid #000;
                border-collapse:collapse;
                margin:auto;
            }
            td{
                border:1px solid #000;
                height:30px;
                cursor: pointer;
            }
        `
        var finalcss=this.tableCss?this.tableCss:css;
        var style=document.createElement("style") ;
        style.innerHTML=finalcss;
        document.body.append(style);
    },
    _editTable(){
        var that=this
        that.table.ondblclick=function(ev){
            var target=ev.target
            target.setAttribute("contenteditable",true)
            target.focus()
            target.onblur=function(){
                target.removeAttribute("contenteditable")
            }
        }
    }
}