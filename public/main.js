      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temper', 80],
        ]);

        var options = {
          width: 150, height: 150,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);


      const socket = io();

      //const temperatureDisplay = document.getElementById('temperature');

      var porciento;
      socket.on('temp', function (serial) {
      console.log(serial);
      //temperature.innerHTML = `${serial}°C`;
      var burbuja = document.getElementById("demo");
   	  porciento=(Math.floor((Math.random() * 100) + 1))/100;
   	  //console.log(porciento)
   	  //console.log((porciento*100).toString());
   	  //console.log((porciento*100).toFixed(2).toString());
      $('#demo').waterbubble({data:porciento,txt: (porciento*100).toFixed(0).toString()+'%',animation:false});
      data.setValue(0, 1, serial);
      chart.draw(data, options);
      console.log(serial);
      });

}
