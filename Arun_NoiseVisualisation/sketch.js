// var option;


function preload() {
  // console.log(noiseJsonDat);

}


function setup() {
  var dom = document.getElementById("graph");
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  // app.title = 'Population Impacted';

  var colors = ['#dc0404', '#dc9104', '#105610', '#103f56', '#6c05a8', '#a8053c'];

  option = {
    color: colors,
    title: {
      text: '      Population Impacted',
      // textStyle: {
      //   fontStyle: 'italic',
      // },
      textAlign: 'left'
    },
    // grid{left:'10%'},

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      textStyle: {
        fontSize: 10
      }
    },
    legend: {
      data: ['Population ', 'Noise Source'],
      show: true,
      align: 'center'

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
      data: ['50-55', '55-60', '60-65', '65-70', '70-75', '>75']
    }],
    yAxis: [{
      type: 'value',
      name: 'Population',
      min: 0,
      max: 2500000,
      splitNumber: 8,
      padding: 0,
      position: 'left',
      axisLine: {
        lineStyle: {
          color: '#0f100f'
        }
      },
      margin: 30,
      axisLabel: {
        formatter: '{value}',
        padding: [0, -5]
      },
      data: {
        textStyle: {
          fontSize: 5
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
  };
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

function getdB(layer, daynight) {

  if (daynight == 'd') {
    switch (layer.substring(0, 2)) {
      case "x1": return '';break;
      case "x2": return '';break;  
      case "x3": return '';break;
      case "x4": return '';break;
      case "x5": return '';break;
      case "x6": return '';break;          
      default: return'na';
    }
    } else {
    switch (layer.substring(0, 2)) {
      case "x1": return '< 48';break;
      case "x2": return '48-51';break;  
      case "x3": return '51-54';break;
      case "x4": return '54-57';break;
      case "x5": return '57-60';break;
      case "x6": return '60-63';break;
      case "x7": return '63-66';break;
      case "x8": return '66-69';break;
      case "x9": return '>72';   
      default: return'na';

    }
  }

}
