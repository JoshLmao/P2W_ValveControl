// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts(){
  drawPressureChart('pressureChart');
  drawFlowRateChart('flowRateChart');
}

// Draw the chart and set the chart values
function drawPressureChart(chartName) {
  var data = google.visualization.arrayToDataTable([
    ['Time (hours)', 'Pres sure (Pa/m)'],
    ['1',  0 ],
    ['2',  0 ],
    ['3',  10 ],
    ['4',  10 ],
    ['5',  20 ],
    ['6',  20 ],
    ['7',  20 ],
    ['8',  20 ],
    ['9',  30 ],
    ['10',  40 ],
    ['11',  20 ],
    ['12',  10 ],
    ['13',  10 ],
    ['14',  0 ],
    ['15',  0 ],
    ['16',  10 ],
  ]);

  var options = {
    //Styling
    backgroundColor: "#262626",
    titleTextStyle: { color: '#FFF' },
    legendTextStyle: { color: '#FFF' },
    height:350,
    //Properties
    title: 'Pressure Over Time',
    hAxis:
    {
      title: 'Time (m)',
      titleTextStyle: { color: '#FFF' },
      textStyle: { color: '#FFF' }
    },
    vAxis:
    {
      minValue: 0,
      titleTextStyle: { color: '#FFF' },
      textStyle: { color: '#FFF' }
    }
  };

  var chart = new google.visualization.AreaChart(document.getElementById(chartName));
  chart.draw(data, options);
}

function drawFlowRateChart(chartName) {
  var data = google.visualization.arrayToDataTable([
    ['Time', 'Flow Rate (ml/s)'],
    ['0',  1000 ],
    ['1',  1200 ],
    ['2',  750 ],
    ['3',  1030 ],
    ['4',  1000 ],
    ['5',  1200 ],
    ['6',  750 ],
    ['7',  1030 ],
    ['8',  1000 ],
    ['9',  1100 ],
    ['10',  600 ],
    ['11',  1030 ],
    ['12',  1000 ],
    ['13',  1000 ],
    ['14',  500 ],
    ['15',  950 ],
  ]);

  var options = {
    //Styling
    backgroundColor: "#262626",
    titleTextStyle: { color: '#FFF' },
    legendTextStyle: { color: '#FFF' },
    height:350,
    //Properties
    title: 'Flow Rate Over Time',
    hAxis:
    {
      title: 'Time (m)',
      titleTextStyle: { color: '#FFF' },
      textStyle: { color: '#FFF' }
    },
    vAxis:
    {
      minValue: 0,
      titleTextStyle: { color: '#FFF' },
      textStyle: { color: '#FFF' }
     }
  };

  var chart = new google.visualization.AreaChart(document.getElementById(chartName));
  chart.draw(data, options);
}
