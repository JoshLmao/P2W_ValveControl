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
    ['1',  1 ],
    ['2',  1 ],
    ['3',  1 ],
    ['4',  1 ],
    ['5',  1 ],
    ['6',  0 ],
    ['7',  0 ],
    ['8',  1 ],
    ['9',  1 ],
    ['10',  1 ],
    ['11',  1 ],
    ['12',  1 ],
    ['13',  1 ],
    ['14',  1 ],
    ['15',  1 ],
    ['16',  1 ],
  ]);

  var options = {
    //Styling
    backgroundColor: "#262626",
    titleTextStyle: { color: '#FFF' },
    legendTextStyle: { color: '#FFF' },
    //Properties
    title: 'Total Uptime',
    hAxis:
    {
      title: 'Time (h)',
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
    ['1',  1170 ],
    ['2',  660 ],
    ['3',  1030 ],
    ['4',  1000 ],
    ['5',  1170 ],
    ['6',  660 ],
    ['7',  1030 ],
    ['8',  1000 ],
    ['9',  1170 ],
    ['10',  660 ],
    ['11',  1030 ],
    ['12',  1000 ],
    ['13',  1170 ],
    ['14',  660 ],
    ['15',  1030 ],
  ]);

  var options = {
    //Styling
    backgroundColor: "#262626",
    titleTextStyle: { color: '#FFF' },
    legendTextStyle: { color: '#FFF' },
    //Properties
    title: 'Flow Rate Over Time',
    hAxis:
    {
      title: 'Time (s)',
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
