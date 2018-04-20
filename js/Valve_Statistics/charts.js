// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts()
{
  var data = google.visualization.arrayToDataTable([
    ['Time (hours)', 'Up'],
    ['1',  10 ],
    ['2',  12 ],
    ['3',  11 ],
    ['4',  12 ],
    ['5',  13 ],
    ['6',  11 ],
    ['7',  12 ],
    ['8',  10 ],
    ['9',  10 ],
    ['10',  14 ],
    ['11',  12 ],
    ['12',  11 ],
  ]);
  drawLineChart(data, 'valve1WaterPassedChart', 'Total water passed L/sec', 'Time (h)');
  drawLineChart(data, 'valve2WaterPassedChart', 'Total water passed L/sec', 'Time (h)');
  drawLineChart(data, 'valve3WaterPassedChart', 'Total water passed L/sec', 'Time (h)');
  drawLineChart(data, 'valve4WaterPassedChart', 'Total water passed L/sec', 'Time (h)');
  drawLineChart(data, 'valve5WaterPassedChart', 'Total water passed L/sec', 'Time (h)');
  drawLineChart(data, 'valve6WaterPassedChart', 'Total water passed L/sec', 'Time (h)');
}

// Draw the chart and set the chart values
function drawLineChart(data, chartName, chartTitle, chartHorizontalAxisTitle = '', chartVerticalAxisTitle = '')
{
  var options = {
    //Styling
    backgroundColor: "#262626",
    titleTextStyle: { color: '#FFF' },
    legendTextStyle: { color: '#FFF' },
    height: 150,
    //width:  250,
    //Properties
    title: chartTitle,
    hAxis:
    {
      title: chartHorizontalAxisTitle,
      titleTextStyle: { color: '#FFF' },
      textStyle: { color: '#FFF' }
    },
    vAxis:
    {
      title: chartVerticalAxisTitle,
      minValue: 0,
      titleTextStyle: { color: '#FFF' },
      textStyle: { color: '#FFF' }
    }
  };

  var chart = new google.visualization.AreaChart(document.getElementById(chartName));
  chart.draw(data, options);
}
