function TestCode(){
    // 變數 命名 英文開頭，英文與數字，底線 javascript的關鍵字不能設定
    // es5版本 var ; es6版本 let (變數) const (常數)
    // 宣告變數 全域變數
        var one;
        var ONE;
        var One;
        var O_ne;
        var O_01ne;
        
        // 賦予 值
        one = 1 ;
        ONE = "01";
        console.log(one);
        console.log(ONE);
        console.log("02"); 
        // 條件判斷 if.....else 單一條件
    var Number = 12;
    // 顯示條件成立 執行資料
    if ( Number < 5) {
        console.log("數字小於 5 ");
    }
    
    if (Number > 10 ) console.log("數字大於 10") ;
        console.log("數字為:" + Number );
    // 顯示條件成立，執行的資料，或是部成立時，執行的資料
    var Num = 8;
    if ( Number < Num )
        console.log("Number < Num ");
    else 
        console.log("Number < Num 不成立" );
    
        // 多條件判斷是 if(條件)(程式) else if (條件二) {程式} else {程式}
        // 全愈變數
        let Num_One = 1;
        let Num_Two = 2;
        // ==等於(比較)
        if (Num_One == Num_Two){
            console.log("兩個變數相等")
        } else if(Num_Two > Num_One ) {
            console.log(Num_Two + "大於" + Num_One);
        } else{
            console.log("不成立");
        };
    }

//     TimeYear();
// function TimeYear(){
//     var year = new Date().getFullYear();
//     document.getElementById('Year').textContent = year;
// }
    

//  CopyRightContent ();
function CopyRightContent () {
    // 宣告變數 在 html 內新增 div 標籤
    let div = document.createElement('div');

    // 宣告變數 在哪裡 html 標籤之內新增 div
    let Footer = document.getElementById('Footer');

    //  在 footer 內 ,新增 div 子元素
    Footer.appenChild(div);
     
    // 純文字
    // div.textContTENT = 

    // html語法
    div.innerHTML = "Jamejuice版權宣告&COPY;2020- <span >2021</span>"; 
    // 調整 框架 位置
    // 1. 再被選取的元素開頭插入內容 prepend() 置入被選取元素之中
    // 呼叫要選取的標籤
    let Address = document.getElementById('Address');
    // Address.prepend(div);
    
    // 2.在被選取的元素結尾插入內容 append() 置入被選取元素之中
    // Address.append(div);
    // 3.在被選取的元素之前插入內容 before() 置入被選取的元素標籤之前
    Address.before(div);

    // 4.在被選取的元素之後進入內容 after() 置入被選取元素標籤之後
    // Address.after(div);
};

    // 全域變數
    var a = 1;
    var b = 2 ;
    
    // var 與 的差別
    function var_LetCode(){
        // 區域變數
        var a = 3;
        let b = 4;
    
        console.log( a + b);
    }
    
    // Var_LetCode();
    function Var_LetCode(){
    
        // var 與 let 的差別 ; 暗藍色表示找不到變數，var 的作用域會在 function
    // let 的作用域包含了全部，例:function {...} if() {...} 等等
    // 全域變數
    
    var A = 4, C = 1;
    let x = 5, y = 6;
    {
        var d = A + C;
        let z = x + y;
    }
    console.log(d);
    // 呼叫不到 z
    console.log(z);
    
    function NumCal(){
    var d = A + C;
    let z = x + y;
    }
    }
    
    // 迴圈 for(宣告變數起始值; 條件; 執行後增加或減少的次數){程式}
    let i;
    for ( i =0; i <= 10; i = i + 1){
        console.log(i);
    }
    
    whileCode ()
    // 迴圈 while (條件) {程式} 與 for 的差別，在於無法指定執行圈數
        
        //  console.log(attack);
    function whileCode () {
    
    // 總數
    let Number = 200;
    // 亂數 (系統產生介於 0 ~ 1之間) ，再將小數變為整數 (數值要介於無條件捨去法)
    
    
    let attack;
    let count = 1;
    
    while ( Number > 0) {
        console.log("第" + count + "次" );
        count = count + 1;
    
        attack = Math.floor(Math.random() * 31);
        // 將計算的值，在指定值 Number
        Number =    Number - attack;
    
        console.log("計算結果:" + Number);
    
    }
        
    }
    
    login()
    
    function login() {
        // 變數: 承受使用者輸入的資料
        // 帳號
        let User;
        // 密碼
        let Number;
    
        // 可輸入訊息的對話視窗
        User = window.prompt('請輸入帳號');
    
        // 假設，網站有連接資料庫，帳號與密碼由資料庫帶出
        let UserName = 'shan';
        let UserNum = '123456';
    
        if ( User == UserName) {
            Number == window.prompt('請輸入密碼');
    
            if ( Number == UserNum ) {
                console.log("歡迎登入!");
            } else{
                console.log("帳號與密碼有誤!");
            }
        }else{
            console.log("帳號與密碼有誤!");
        }
    }