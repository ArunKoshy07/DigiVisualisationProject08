var page; 
var page_total;  

//initialize
$('body').ready(function(){
    page = 1;
    page_total = $(".page").length;
    if ( page_total >  1){
        $(".controller .next").show();
    }
});


//page turn function
page_turn = function page_turn(p){
    $(".page").hide();
    $(".page").css('opacity',0);
    $(".page").css('z-index',-1);
    $("#p"+p).show();
    $("#p"+p).css('opacity',1);
    $("#p"+p).css('z-index',9);
    page = p;

    $(".controller .pre").show();
    $(".controller .next").show();
    opacity:0.5;
    if (p == page_total){
        $(".controller .next").hide();
    }
    if (p == 1){
        $(".controller .pre").hide();
    }
}

//Previous page
$(".pre").click(function(){
    page_turn(page-1);
});


//Next page
$(".next").click(function(){
    page_turn(page+1);
});



$('#c1').ready(function(){

var dom = document.getElementById("c1");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: 'µg.m-3'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['FR','GB','RO']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'FR',
            type:'line',
            data:[121.5646212,108.2682493,107.1339802,107.9998976,113.3666473,113.4739231,105.4192177,112.9884285,106.715444,112.7737231]
        },
        {
            name:'GB',
            type:'line',
            data:[97.47272727,82.72145,92.35861224,86.61246809,80.73334,87.08264706,83.08510638,89.15313533,84.89276767,83.29068728]
        },
        {
            name:'RO',
            type:'line',
            data:[100.075,110.91075,108.913,106.2491364,87.20146154,78.43847619,91.34139286,74.33443616,73.27331935,88.5951845]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

});





$('#c2').ready(function(){

    var dom = document.getElementById("c2");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    
    var colors = ['#5793f3', '#d14a61', '#675bba'];
    
    option = {
    title: {
        text: 'µg.m-3'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['FR','GB','RO']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'FR',
            type:'line',
            data:[19.92919681,25.42909231,23.22186486,24.98821608,23.78596939,24.3442878,21.81325837,21.7561467,17.7707819,19.19682202]
        },
        {
            name:'GB',
            type:'line',
            data:[24.04671739,22.00716,19.30018056,18.9339375,19.52463636,20.08988889,17.42892308,17.26054095,17.21348496,15.45690258]
        },
        {
            name:'RO',
            type:'line',
            data:[44.8118,39.04881818,32.29153846,29.32517143,25.036875,27.83575,27.93845,24.59518776,23.780755,23.96773039]
        }
    ]
};
;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

});











$('#c3').ready(function(){

    var dom = document.getElementById("c3");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    
    var colors = ['#5793f3', '#d14a61', '#675bba'];
    
    
    option = {
    title: {
        text: 'µg.m-3'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['FR','GB','RO']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2010','2011','2012','2013','2014','2015']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'FR',
            type:'line',
            data:[17.66283333,17.75676923,15.76284722,15.1127251,11.80714834,12.80889211]
        },
        {
            name:'GB',
            type:'line',
            data:[13.09302703,13.66257895,12.54654286,12.06202397,12.10554297,9.780963537]
        },
        {
            name:'RO',
            type:'line',
            data:[15.502,19.98172727,20.69193333,15.34991943,14.84759629,17.1178615]
        }
    ]
};
;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

});



