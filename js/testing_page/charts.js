// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts(){
  drawUptimeChart('uptimeChart');
  drawFlowRateChart('flowRateChart');
}

// Draw the chart and set the chart values
function drawUptimeChart(chartName) {
  var data = google.visualization.arrayToDataTable([
    ['Time (hours)', 'Up'],
    ['1',  0 ],
    ['2',  0 ],
    ['3',  0 ],
    ['4',  1 ],
    ['5',  1 ],
    ['6',  1 ],
    ['7',  1 ],
    ['8',  1 ],
    ['9',  1 ],
    ['10',  0 ],
    ['11',  1 ],
    ['12',  1 ],
    ['13',  1 ],
    ['14',  0 ],
    ['15',  1 ],
    ['16',  1 ],
  ]);

  var options = {
    //Styling
    backgroundColor: "#262626",
    titleTextStyle: { color: '#FFF' },
    legendTextStyle: { color: '#FFF' },
    height:350,
    //Properties
    title: 'Total Test Uptime',
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
