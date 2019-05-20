function preload() {
  console.log(noiseJsonDat);

}


function setup() {
  var dom = document.getElementById("graph");
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  app.title = 'Population Impacted';

  var colors = ['#5793f3', '#d14a61', '#675bba'];

  option = {
      color: colors,
      title: {
        text: 'Population Impacted by Noise',
        textAlign: 'left'
      },

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        textStyle:{
          fontSize:10
        }
      },
      legend: {
        data: ['Population ', 'Noise Source'],
        show: true,
        align: 'left'

      },
      xAxis: [{
        type: 'category',
        name: 'Noise Range in Decibel(dB)',
        nameLocation: 'center',
        nameTextStyle: {
          padding: 5,
        },
        axisTick: {
          alignWithLabel: true
        },
        data: ['>50', '>55', '>60', '>65', '>70', '>75']
      }],
      yAxis: [{
          type: 'value',
          name: 'Population',
          min: 0,
          max: 2500000,
          padding:25,
          position: 'left',
          axisLine: {
            lineStyle: {
              color: colors[2]
            }
          },
          axisLabel: {
            formatter: '{value}'
          },
        data: {
          textStyle: {
            fontSize:5
          }
        }
      }],
    series: [{
        name: 'Day Road Noise',
        type: 'line',
        data: [2387200, 2387200, 1426100, 1027200, 597800, 99200]
      },
      {
        name: 'Night Road Noise',
        type: 'line',
        data: [1665400, 1106500, 649400, 114500, 900, 0]
      },
      {
        name: 'Day Rail Noise',
        type: 'line',
        data: [525200, 525200, 308500, 158100, 59800, 15200]
      },
      {
        name: 'Night Rail Noise',
        type: 'line',
        data: [388700, 214200, 95100, 29700, 6400, 0]
      },
      {
        name: 'Day Aircraft Noise',
        type: 'line',
        data: [266700, 266700, 120500, 13400, 3600, 200, 0]
      },
      {
        name: 'Night Aircraft Noise',
        type: 'line',
        data: [364400, 76200, 10500, 200, 100, 0]
      }

    ]
};;
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}


}


function draw() {

}

var noiseJsonDat = {
  "Road": [{
      "daynight": "day",
      "decibal": 55,
      "population": 2387200
    },
    {
      "daynight": "day",
      "decibal": 60,
      "population": 1426100
    },
    {
      "daynight": "day",
      "decibal": 65,
      "population": 1027200
    },
    {
      "daynight": "day",
      "decibal": 70,
      "population": 597800
    },
    {
      "daynight": "day",
      "decibal": 75,
      "population": 99200,
    },
    {
      "daynight": "night",
      "decibal": 50,
      "population": 1665400
    },
    {
      "daynight": "night",
      "decibal": 55,
      "population": 1106500
    },
    {
      "daynight": "night",
      "decibal": 60,
      "population": 649400
    },
    {
      "daynight": "night",
      "decibal": 65,
      "population": 114500
    },
    {
      "daynight": "night",
      "decibal": 70,
      "population": 900
    }
  ],
  "Rail": [{
      "daynight": "day",
      "decibal": 55,
      "population": 525200
    },
    {
      "daynight": "day",
      "decibal": 60,
      "population": 308500
    },
    {
      "daynight": "day",
      "decibal": 65,
      "population": 158100
    },
    {
      "daynight": "day",
      "decibal": 70,
      "population": 59800
    },
    {
      "daynight": "day",
      "decibal": 75,
      "population": 15200
    },
    {
      "daynight": "night",
      "decibal": 50,
      "population": 388700
    },
    {
      "daynight": "night",
      "decibal": 55,
      "population": 214200
    },
    {
      "daynight": "night",
      "decibal": 60,
      "population": 95100
    },
    {
      "daynight": "night",
      "decibal": 65,
      "population": 29700
    },
    {
      "daynight": "night",
      "decibal": 70,
      "population": 6400
    }
  ],
  "Air": [{
      "daynight": "day",
      "decibal": 57,
      "population": 266700
    },
    {
      "daynight": "day",
      "decibal": 60,
      "population": 120500
    },
    {
      "daynight": "day",
      "decibal": 63,
      "population": 46000
    },
    {
      "daynight": "day",
      "decibal": 66,
      "population": 13400
    },
    {
      "daynight": "day",
      "decibal": 69,
      "population": 3600
    },
    {
      "daynight": "day",
      "decibal": 72,
      "population": 200
    },
    {
      "daynight": "night",
      "decibal": 48,
      "population": 364400
    },
    {
      "daynight": "night",
      "decibal": 51,
      "population": 179700
    },
    {
      "daynight": "night",
      "decibal": 54,
      "population": 76200
    },
    {
      "daynight": "night",
      "decibal": 57,
      "population": 34800
    },
    {
      "daynight": "night",
      "decibal": 60,
      "population": 10500
    },
    {
      "daynight": "night",
      "decibal": 63,
      "population": 2200
    },
    {
      "daynight": "night",
      "decibal": 66,
      "population": 200
    },
    {
      "daynight": "night",
      "decibal": 69,
      "population": 100
    },
    {
      "daynight": "night",
      "decibal": 72,
      "population": 0
    }
  ]
};