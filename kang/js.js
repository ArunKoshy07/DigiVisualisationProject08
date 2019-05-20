var page; //当前页面
var page_total;  //页面总数

//初始化
$('body').ready(function(){
    page = 1;
    page_total = $(".page").length;
    if ( page_total >  1){
        $(".controller .next").show();
    }
});


//翻页控制函数 p
page_turn = function page_turn(p){
    $(".page").hide();
    $("#p"+p).show();
    page = p;

    $(".controller .pre").show();
    $(".controller .next").show();
    if (p == page_total){
        $(".controller .next").hide();
    }
    if (p == 1){
        $(".controller .pre").hide();
    }
}

//上页
$(".pre").click(function(){
    page_turn(page-1);
});


//下页
$(".next").click(function(){
    page_turn(page+1);
});



