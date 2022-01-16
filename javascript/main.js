// CopyRightContent ();


// TestCode() ;
// 年份變數
// var Year = "2022" ;
// TimeYear();
function TimeYear(){
    var year = new Date().getFullYear();

    document.getElementById('Year').textContent = year;
    
}

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

SmailNavCON ();
function SmailNavCON (){

    // 新增標籤 ul 與  li
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    // 在 SmailNav 內新增，宣告變數
    let SN = document.getElementById('SmailNav');

    // 建立 ul 框架，給予 id 名稱
    SN.appendChild(ul);

    // 賦予屬性 id or class
    ul.setAttribute("id", "PhoneNav");
    let phoneNav = document.getElementById('PhoneNav');

    let NavClass = ['costom', 'line','business'];
    let NavCon = ['客服專區','|','廠商合作專區'];

    // 新增標籤時，程式的運作方式為:先新增標籤，賦予屬性，在指定新增的外框架(此為一個迴圈)
    // 迴圈內的數字 7 ，是因為陣列而產生，故要隨著陣列值的數量而自動增減
    for (let i = 0; i< NavClass.length; i++) {
        let li = document.createElement('li');
        // 新增屬性
        li.setAttribute("class",NavClass[i]);
        phoneNav.appendChild(li);

        // 新增連結 a
        let A =document.createElement('a');
        // 新增屬性 假連結 jacascript:;
        A.setAttribute("href","javascriptL:;");
        // 內新增 a連結
        li.appendChild(A);
        // 置入陣列內容
        A.innerText = NavCon[i];
    }
    
    
}

// MenuNav();
// 行動選單
function MenuNav() {
    let MenuNav = document.getElementById('MenuNav');
    // 隱藏 手機板選單
    MenuNav.style.dispaly = "none";
}
 
Pageload();
function Pageload() {
    $('header').load("../web/header.html");
}



