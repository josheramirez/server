      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data1 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['', 80],
        ]);

        var options = {
          width: 150, height: 150,
          /*
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
        */
          minorTicks: 5
        };

        var chart1 = new google.visualization.Gauge(document.getElementById('chart_div'));
        global_1=data1;
        global_2=chart1;
        chart1.draw(data1, options);
      }

      google.charts.setOnLoadCallback(drawChart2);

      // Callback that draws the pie chart for Anthony's pizza.
      function drawChart2() {

        // Create the data table for Anthony's pizza.
     var data2 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['', 5],
        ]);
        // Set options for Anthony's pie chart.
        var options = {
                       width:150,
                       height:150,
                       min:0,
                       max:14,
                       redFrom:0, redTo:5,
                       yellowFrom:5, yellowTo:9,
                       greenFrom:9, greenTo:14
                     };

        // Instantiate and draw the chart for Anthony's pizza.
        var chart2 = new google.visualization.Gauge(document.getElementById('chart_div2'));

        global_3=data2;
        global_4=chart2;

        chart2.draw(data2, options);
            //const socket = io();

      //const temperatureDisplay = document.getElementById('temperature');

      //var porciento;
      //socket.on('temp', function (serial) {
      //console.log(serial);


      //data.setValue(0, 1, serial);
      //chart.draw(data, options);
      //});
      }


      const socket = io();

      //const temperatureDisplay = document.getElementById('temperature');

      var porciento;
      socket.on('temp', function (serial) {
     // console.log(serial);
      var burbuja = document.getElementById("demo");
      porciento=(Math.floor((Math.random() * 100) + 1))/100;
      var burbuja2=Math.floor(Math.random() * (100 - 0 + 1) + 0)/100;
      

     // console.log(porciento)
     // console.log((porciento*100).toString());
     // console.log((porciento*100).toFixed(2).toString());
      $('#demo').waterbubble({radius: 72,lineWidth: 5,data:porciento, waterColor: 'rgba(25, 139, 201, 1)',animation:false});
      $('#demo2').waterbubble({ radius: 72,
                                lineWidth: 5,
                                data: burbuja2,
                                waterColor: 'rgba(62, 167, 43, 1)',
                                textColor: 'rgba(06, 85, 128, 0.8)',
                                font: 'bold 30px "Microsoft YaHei"',
                                wave: true,
                                animation: false});

      //data1.setValue(0, 1, serial);
      //chart1.draw(data1, options);

      cambiar(serial);

      global_1.setValue(0, 1, serial);
      global_2.draw(global_1, {width: 150, height: 150,minorTicks: 5});

      global_3.setValue(0, 1, Math.floor(Math.random() * (14 - 0 + 1) + 0).toFixed(0));
      global_4.draw(global_3, {
                       width:150,
                       height:150,
                       min:0,
                       max:14,
                       redFrom:0, redTo:5,
                       yellowFrom:5, yellowTo:9,
                       greenFrom:9, greenTo:14});
      });

function cambiar(valor) {
    document.getElementById('temperatura').innerHTML=valor;
    document.getElementById('humedad').innerHTML=(Math.floor((Math.random() * 100) + 1))/100;
    document.getElementById('co2').innerHTML=Math.floor(Math.random() * (100 - 0 + 1) + 0)/100;
    document.getElementById('ph').innerHTML=(Math.floor(Math.random() * (14 - 0 + 1) + 0).toFixed(0));
}