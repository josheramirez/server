
      const socket = io();

      //const temperatureDisplay = document.getElementById('temperature');

      var porciento;
      socket.on('temp', function (serial) {
      //console.log(serial);
      //temperature.innerHTML = `${serial}°C`;
      var burbuja = document.getElementById("demo");
   	  porciento=(Math.floor((Math.random() * 100) + 1))/100;
   	  //console.log(porciento)
   	  //console.log((porciento*100).toString());
   	  //console.log((porciento*100).toFixed(2).toString());
      $('#demo').waterbubble({data:porciento,txt: (porciento*100).toFixed(0).toString()+'%',animation:false});


      //data.setValue(0, 1, serial);
      //chart.draw(data, options);
      });