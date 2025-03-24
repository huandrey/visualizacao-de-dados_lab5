const dadosChuva = [
  {
    "ano": 2014,
    "total_chuva_mm": 404.6,
    "dias_chuva_mais_5mm": 18,
    "dias_chuva_mais_10mm": 15
  },
  {
    "ano": 2015,
    "total_chuva_mm": 386.7,
    "dias_chuva_mais_5mm": 16,
    "dias_chuva_mais_10mm": 9
  },
  {
    "ano": 2016,
    "total_chuva_mm": 295,
    "dias_chuva_mais_5mm": 17,
    "dias_chuva_mais_10mm": 10
  },
  {
    "ano": 2017,
    "total_chuva_mm": 211.5,
    "dias_chuva_mais_5mm": 11,
    "dias_chuva_mais_10mm": 5
  },
  {
    "ano": 2018,
    "total_chuva_mm": 764.8,
    "dias_chuva_mais_5mm": 28,
    "dias_chuva_mais_10mm": 21
  },
  {
    "ano": 2019,
    "total_chuva_mm": 497.9,
    "dias_chuva_mais_5mm": 25,
    "dias_chuva_mais_10mm": 16
  },
  {
    "ano": 2020,
    "total_chuva_mm": 591.3,
    "dias_chuva_mais_5mm": 19,
    "dias_chuva_mais_10mm": 11
  },
  {
    "ano": 2021,
    "total_chuva_mm": 388.5,
    "dias_chuva_mais_5mm": 19,
    "dias_chuva_mais_10mm": 11
  },
  {
    "ano": 2022,
    "total_chuva_mm": 938.6,
    "dias_chuva_mais_5mm": 37,
    "dias_chuva_mais_10mm": 24
  },
  {
    "ano": 2023,
    "total_chuva_mm": 376.6,
    "dias_chuva_mais_5mm": 15,
    "dias_chuva_mais_10mm": 13
  }
];

 var myChart = echarts.init(document.getElementById('main'));
 var option;

 option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: dadosChuva.map(medicao => medicao.ano)
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: dadosChuva.map(medicao => medicao.total_chuva_mm),
      type: 'line',
      areaStyle: {},
       markLine: {
         data: [{ type: 'average', name: 'Avg' }]
       }
    }
  ]
};

 option && myChart.setOption(option);
