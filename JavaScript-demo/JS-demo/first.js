// 引用js的三种方法：1.嵌入式 2.外部js文件 3.混排式

// 变量  记录一些信息  用来存储数据和信息
// 不同类的数据和信息  数据类型
// JavaScript 数据类型有哪些？ 软  硬  应用  底层
// 初始类型（简单类型）
// 引用类型（复杂类型）

// JavaScript 弱类型 （自由，规则散漫）
// java 强类型  （不自由，开发的过程提供保障）
// 弱类型发展 python  go  node.js




// 初始类型（简单类型）

// 1.undefined  说明没有给变量赋值，如果说没有给变量赋值，变量的值就是undefined，那么他的类型就是undefined
// var a;
// console.log(a);
// console.log(typeof a);

// 2.Number
// var number=1.1;
// console.log(typeof num) ;
    
// 3.string 字符串 只要用单引号或双引号包含的内容全部符串
// var str="'1'";
// console.log(str);
// console.log(typeof str);

// 4.布尔类型
// var bool="false";
// console.log (typeof bool)

// 5.null  对象 定义了一个变量，并且给他分配了空间,即将要存储内容
// var no=null;
// console.log(typeof no);

// 6.symbol  类和对象的时候
// var a=symbol()
// console.log(typeof a);


// 引用类型（复杂类型）

// var arr=[1,2,3,4];
// var obj=new object();
// var json={name:"lky" ,age:20};

// console. log(typeof arr);
// console. log(typeof obj);
// console. log(typeof json);



// 1. JavaScript中严格区分大小写

// 2. 命名是以 字母  _  $  开头，后面可以跟数字

// 3. 不能用关键字或者是保留字命名；

// 4. javascript自己的命名习惯；
//      驼峰命名法：getElementById
//      首字母大写：Object

// 5. 命名要有意义。

// 6. 分号使用的问题  C  java  一段代码结束之 后要用;

// 7. ;和回车是耦合的，一样的，都代表一段代码的结束


// JavaScript中的运算符主要分为:

// 1.算术运算符

// 算术运算符中有加(+)、减(-)、乘(*)、除(/)、取余(%)、自增(++)、自减(--)、求幂(**)

// 2.关系(比较)运算符

// >
// <
// >=
// <=
// == (相等)
// != (不相等)
// === (全等)
// !== (不全等)

// 隐式的类型转换 == 只是比较值，不比较类型
// == js会试图将两个不同的类型进行类型的转换
// === 既比较值，又比较类型 不会进行类型转换的

// 3.赋值运算符

// =、+=、-=、*=、/=、%=、**= 运算符右边的值赋给左边的变量

// 4.逻辑运算符

// 在JavaScript逻辑运算中，0、""、null、false、undefined、NaN都会判为false，其他都为true

// 与 &&
//      只要有一个是假，结果就是假
//      &&左侧是真，结果取右侧； 左侧假，结果取左侧值
// 或 ||
//      只要有一个是真，结果就是真
//      ||左侧是真，结果取左侧； 左侧假，结果取右侧值
// 非 !
//      取反
//      结果是boolean值

// 5.一元运算符

// 只能操作一个值的操作符就叫做一元操作符

// new (创建对象) delete (删除对象上的内容)
// typeof -(负号) +(正号)
// instanceof (判断对象是否由一个构造函数实例化)

// 6.三元运算符

// 基于某些条件对变量进行赋值的条件运算符

// 7.特殊运算符
//      ()  提高程序执行的优先级  让函数执行
//      new  创建对象
//      delete  删除对象属性