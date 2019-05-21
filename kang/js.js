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

//上页
$(".pre").click(function(){
    page_turn(page-1);
});


//下页
$(".next").click(function(){
    page_turn(page+1);
});



$('#c1').ready(function(){

    var dom = document.getElementById("c1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = 'scatter plot';
    
    var hours = ['Degree1', 'D1', 'D1', 'D2', 'D2', 'D2', 'D3',
            'D3', 'D3', 'D4','D4','D4',
            'D5', 'D5', 'D5', 'D6', 'D6', 'D6',
            'D7', 'D7', 'D7', 'D8', 'D8', 'D8'];
    var days = ['YEAR2013', 'YEAR2014', 'YEAR2015',
            'YEAR2016', 'YEAR2017', 'YEAR2018', 'YEAR2019'];
    
    var data = [
                [0,0,1],[0,1,0],[1,2,3],[0,3,1],[0,4,3],[0,5,2],[0,6,6],[0,7,8],[0,8,6],[0,9,7],[0,10,8],[0,11,2],[0,12,4],[0,13,10],[0,14,11],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,14],[0,20,3],[0,21,6],[0,22,2],[0,23,5],
    
                [1,0,2],[1,1,0],[1,2,3],[1,3,6],[1,4,3],[1,5,4],[1,6,8],[1,7,11],[1,8,6],[1,9,7],[1,10,7],[1,11,2],[1,12,1],[1,13,6],[1,14,2],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],
        
                [2,0,1],[2,1,1],[2,2,4],[2,3,0],[2,4,1],[2,5,5],[2,6,8],[2,8,4],[2,9,6],[2,10,13],[2,11,8],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,9],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],
                
                [3,0,3],[3,1,3],[3,2,3],[3,3,0],[3,4,2],[3,5,7],[3,6,0],[3,7,0],[3,8,7],[3,9,2],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],
                
                [4,0,1],[4,1,3],[4,2,0],[4,3,5],[4,4,2],[4,5,1],[4,6,3],[4,7,0],[4,8,8],[4,9,2],[4,10,14],[4,11,4],[4,12,6],[4,13,4],[4,14,14],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,3],[5,0,2],
                
                [5,1,1],[5,2,0],[5,3,8],[5,4,2],[5,5,6],[5,6,2],[5,7,1],[5,8,2],[5,9,8],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],
                
                [6,0,1],[6,1,4],[6,2,1],[6,3,2],[6,4,7],[6,5,0],[6,6,1],[6,7,5],[6,8,9],[6,9,5],[6,10,4],[6,11,7],[6,12,8],[6,13,3],[6,14,13],[6,15,4],[6,16,8],[6,17,4],[6,18,13],[6,19,8],[6,20,1],[6,21,1],[6,22,2],[6,23,2]];
    
    option = {
        tooltip: {
            position: 'top'
        },
        title: [],
        singleAxis: [],
        series: []
    };
    
    echarts.util.each(days, function (day, idx) {
        option.title.push({
            textBaseline: 'middle',
            top: (idx + 0.5) * 100 / 7 + '%',
            text: day
        });
        option.singleAxis.push({
            left: 150,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: (idx * 100 / 7 + 5) + '%',
            height: (100 / 7 - 10) + '%',
            axisLabel: {
                interval: 2
            }
        });
        option.series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            symbolSize: function (dataItem) {
                return dataItem[1] * 4;
            }
        });
    });
    
    echarts.util.each(data, function (dataItem) {
        option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


});











$('#c2').ready(function(){

    var dom = document.getElementById("c2");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = 'scatter plot';
    
    var hours = ['Degree1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7',
            'D8', 'D9', 'D10','D11','D12',
            'D13', 'D14', 'D15', 'D16', 'D17', 'D18',
            'D19', 'D20', 'D21', 'D22', 'D23', 'D24'];
    var days = ['YEAR2013', 'YEAR2014', 'YEAR2015',
            'YEAR2016', 'YEAR2017', 'YEAR2018', 'YEAR2019'];
    
    var data = [
                [0,0,1],[0,1,2],[1,2,3],[0,13,1],[0,14,3],[0,15,2],[0,16,6],[0,17,8],[0,18,6],[0,19,7],[0,10,8],[0,11,2],[0,12,4],[0,3,7],[0,4,11],[0,5,3],[0,6,4],[0,7,6],[0,8,4],[0,9,10],[0,20,3],[0,21,6],[0,22,2],[0,23,5],
    
                [1,0,2],[1,1,0],[1,2,3],[1,3,6],[1,4,3],[1,15,4],[1,16,8],[1,17,11],[1,18,6],[1,19,7],[1,10,7],[1,11,2],[1,12,1],[1,13,6],[1,14,2],[1,5,11],[1,6,6],[1,7,7],[1,8,8],[1,9,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],
        
                [2,0,1],[2,1,1],[2,2,4],[2,3,0],[2,4,1],[2,15,5],[2,16,8],[2,18,4],[2,19,6],[2,10,13],[2,11,8],[2,12,1],[2,13,9],[2,14,8],[2,5,10],[2,6,6],[2,7,5],[2,8,9],[2,9,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],
                
                [3,0,3],[3,1,3],[3,2,4],[3,3,1],[3,4,2],[3,15,7],[3,16,0],[3,17,0],[3,18,7],[3,19,2],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,5,12],[3,6,9],[3,7,5],[3,8,5],[3,9,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],
                
                [4,0,1],[4,1,3],[4,2,0],[4,3,5],[4,4,2],[4,15,1],[4,16,3],[4,17,0],[4,18,8],[4,19,2],[4,10,14],[4,11,4],[4,12,6],[4,13,4],[4,14,14],[4,5,14],[4,6,12],[4,7,1],[4,8,8],[4,9,5],[4,20,3],[4,21,7],[4,22,3],[4,23,3],[5,0,2],
                
                [5,1,1],[5,2,2],[5,3,8],[5,4,2],[5,15,6],[5,16,2],[5,17,1],[5,18,2],[5,19,8],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,5,7],[5,6,11],[5,7,6],[5,8,0],[5,9,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],
                
                [6,0,1],[6,1,4],[6,2,1],[6,3,2],[6,4,7],[6,15,0],[6,16,1],[6,17,5],[6,18,9],[6,19,5],[6,10,4],[6,11,7],[6,12,8],[6,13,3],[6,14,13],[6,5,4],[6,6,8],[6,7,4],[6,8,13],[6,9,8],[6,20,1],[6,21,1],[6,22,2],[6,23,2]];
    option = {
        tooltip: {
            position: 'top'
        },
        title: [],
        singleAxis: [],
        series: []
    };
    
    echarts.util.each(days, function (day, idx) {
        option.title.push({
            textBaseline: 'middle',
            top: (idx + 0.5) * 100 / 7 + '%',
            text: day
        });
        option.singleAxis.push({
            left: 150,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: (idx * 100 / 7 + 5) + '%',
            height: (100 / 7 - 10) + '%',
            axisLabel: {
                interval: 2
            }
        });
        option.series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            symbolSize: function (dataItem) {
                return dataItem[1] * 4;
            }
        });
    });
    
    echarts.util.each(data, function (dataItem) {
        option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


});











$('#c3').ready(function(){

    var dom = document.getElementById("c3");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = 'scatter plot';
    
    var hours = ['Degree1', 'D1', 'D1', 'D2', 'D2', 'D2', 'D3',
            'D3', 'D3', 'D4','D4','D4',
            'D5', 'D5', 'D5', 'D6', 'D6', 'D6',
            'D7', 'D7', 'D7', 'D8', 'D8', 'D8'];
    var days = ['YEAR2013', 'YEAR2014', 'YEAR2015',
            'YEAR2016', 'YEAR2017', 'YEAR2018', 'YEAR2019'];

            var data = [
                [0,0,1],[0,1,0],[1,2,3],[0,13,7],[0,14,2],[0,15,6],[0,16,6],[0,17,8],[0,18,6],[0,19,7],[0,10,8],[0,11,2],[0,12,4],[0,3,10],[0,4,11],[0,5,3],[0,6,4],[0,7,6],[0,8,4],[0,9,7],[0,20,3],[0,21,6],[0,22,2],[0,23,5],
    
                [1,0,2],[1,1,0],[1,2,3],[1,3,6],[1,4,3],[1,15,4],[1,16,8],[1,17,6],[1,18,6],[1,19,7],[1,10,7],[1,11,2],[1,12,1],[1,13,13],[1,14,2],[1,5,11],[1,6,6],[1,7,8],[1,8,8],[1,9,12],[1,20,5],[1,21,5],[1,22,1],[1,23,2],
        
                [2,0,1],[2,1,1],[2,2,4],[2,3,0],[2,4,1],[2,15,5],[2,16,8],[2,18,4],[2,19,6],[2,10,13],[2,11,8],[2,12,1],[2,13,9],[2,14,8],[2,5,10],[2,6,6],[2,7,5],[2,8,9],[2,9,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],
                
                [3,0,3],[3,1,3],[3,2,3],[3,3,0],[3,4,2],[3,15,7],[3,16,1],[3,17,3],[3,18,7],[3,19,2],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,8],[3,5,12],[3,6,6],[3,7,5],[3,8,5],[3,9,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],
                
                [4,0,1],[4,1,3],[4,2,0],[4,3,5],[4,4,2],[4,15,1],[4,16,3],[4,17,0],[4,18,8],[4,19,2],[4,10,1],[4,11,7],[4,12,3],[4,13,4],[4,14,7],[4,5,14],[4,6,11],[4,7,1],[4,8,8],[4,9,5],[4,20,3],[4,21,2],[4,22,3],[4,23,2],[5,0,4],
                
                [5,1,1],[5,2,0],[5,3,8],[5,4,2],[5,15,6],[5,16,2],[5,17,9],[5,18,2],[5,19,8],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,5,7],[5,6,8],[5,7,6],[5,8,0],[5,9,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],
                
                [6,0,1],[6,1,4],[6,2,1],[6,3,2],[6,4,7],[6,15,0],[6,16,1],[6,17,5],[6,18,9],[6,19,5],[6,10,4],[6,11,7],[6,12,11],[6,13,3],[6,14,7],[6,5,4],[6,6,8],[6,7,4],[6,8,13],[6,9,8],[6,20,1],[6,21,1],[6,22,2],[6,23,2]];
    
    
    option = {
        tooltip: {
            position: 'top'
        },
        title: [],
        singleAxis: [],
        series: []
    };
    
    echarts.util.each(days, function (day, idx) {
        option.title.push({
            textBaseline: 'middle',
            top: (idx + 0.5) * 100 / 7 + '%',
            text: day
        });
        option.singleAxis.push({
            left: 150,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: (idx * 100 / 7 + 5) + '%',
            height: (100 / 7 - 10) + '%',
            axisLabel: {
                interval: 2
            }
        });
        option.series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            symbolSize: function (dataItem) {
                return dataItem[1] * 4;
            }
        });
    });
    
    echarts.util.each(data, function (dataItem) {
        option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


});








$('#c4').ready(function(){

    var dom = document.getElementById("c4");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = 'scatter plot';

    var hours = ['Degree1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7',
            'D8', 'D9', 'D10','D11','D12',
            'D13', 'D14', 'D15', 'D16', 'D17', 'D18',
            'D19', 'D20', 'D21', 'D22', 'D23', 'D24'];
    var days = ['YEAR2013', 'YEAR2014', 'YEAR2015',
            'YEAR2016', 'YEAR2017', 'YEAR2018', 'YEAR2019'];

    var data = [
                [0,0,1],[0,1,3],[1,2,3],[0,13,1],[0,14,3],[0,15,5],[0,16,6],[0,17,8],[0,18,6],[0,19,7],[0,10,8],[0,11,9],[0,12,8],[0,3,7],[0,4,8],[0,5,2],[0,6,4],[0,7,3],[0,8,4],[0,9,10],[0,20,3],[0,21,3],[0,22,2],[0,23,5],

                [1,0,2],[1,1,1],[1,2,1],[1,3,4],[1,4,3],[1,15,4],[1,16,8],[1,17,11],[1,18,6],[1,19,7],[1,10,7],[1,11,2],[1,12,5],[1,13,8],[1,14,5],[1,5,7],[1,6,6],[1,7,10],[1,8,8],[1,9,12],[1,20,5],[1,21,5],[1,22,3],[1,23,2],
        
                [2,0,1],[2,1,1],[2,2,4],[2,3,0],[2,4,1],[2,15,5],[2,16,8],[2,18,4],[2,19,3],[2,10,8],[2,11,8],[2,12,1],[2,13,9],[2,14,9],[2,5,10],[2,6,2],[2,7,5],[2,8,11],[2,9,8],[2,20,7],[2,21,4],[2,22,2],[2,23,4],
                
                [3,0,3],[3,1,3],[3,2,4],[3,3,1],[3,4,2],[3,15,7],[3,16,0],[3,17,0],[3,18,7],[3,19,1],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,7],[3,5,6],[3,6,11],[3,7,5],[3,8,9],[3,9,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],
                
                [4,0,1],[4,1,3],[4,2,0],[4,3,5],[4,4,2],[4,15,1],[4,16,3],[4,17,0],[4,18,8],[4,19,2],[4,10,14],[4,11,4],[4,12,6],[4,13,4],[4,14,14],[4,5,8],[4,6,11],[4,7,9],[4,8,8],[4,9,11],[4,20,3],[4,21,7],[4,22,3],[4,23,2],[5,0,2],
                
                [5,1,1],[5,2,2],[5,3,6],[5,4,2],[5,15,6],[5,16,2],[5,17,1],[5,18,2],[5,19,8],[5,10,11],[5,11,1],[5,12,5],[5,13,10],[5,14,9],[5,5,7],[5,6,11],[5,7,4],[5,8,9],[5,9,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],
                
                [6,0,1],[6,1,4],[6,2,1],[6,3,2],[6,4,7],[6,15,0],[6,16,10],[6,17,2],[6,18,9],[6,19,7],[6,10,4],[6,11,7],[6,12,8],[6,13,3],[6,14,13],[6,5,2],[6,6,10],[6,7,3],[6,8,9],[6,9,3],[6,20,1],[6,21,1],[6,22,2],[6,23,2]];

    option = {
        tooltip: {
            position: 'top'
        },
        title: [],
        singleAxis: [],
        series: []
    };

    echarts.util.each(days, function (day, idx) {
        option.title.push({
            textBaseline: 'middle',
            top: (idx + 0.5) * 100 / 7 + '%',
            text: day
        });
        option.singleAxis.push({
            left: 150,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: (idx * 100 / 7 + 5) + '%',
            height: (100 / 7 - 10) + '%',
            axisLabel: {
                interval: 2
            }
        });
        option.series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            symbolSize: function (dataItem) {
                return dataItem[1] * 4;
            }
        });
    });

    echarts.util.each(data, function (dataItem) {
        option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

});











$('#c5').ready(function(){

    var dom = document.getElementById("c5");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title : {
            text: 'Energy consumption changes ',
            subtext: 'Wembley and Heathrow; year 2013 - 2019'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['Wembley','Heathrow']
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['2013','2014','2015','2016','2017','2018','2019']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'Wembley',
                type:'bar',
                data:[8, 10, 15, 18, 23, 23, 25],
                markPoint : {
                    data : [
                        {type : 'max', name: 'ymax'},
                        {type : 'min', name: 'ymin'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: 'Average'}
                    ]
                }
            },
            {
                name:'Heathrow',
                type:'bar',
                data:[10, 12, 14, 16, 18, 22, 23],
                markPoint : {
                    data : [
                        {name : 'ymax', value : 20.2, xAxis: 7, yAxis: 183},
                        {name : 'yman', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : 'Average'}
                    ]
                }
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

});
