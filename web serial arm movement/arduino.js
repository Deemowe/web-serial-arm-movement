const inputText = document.querySelector('input');
    const outputText = document.getElementById('output-text');
    const rcvdText = document.getElementById('received-text');
    inputText.addEventListener('input', updateOutputText);

 


     function updateOutputText(e) {
      

      if (e.target.value.includes('اليمين') || e.target.value.includes('يمين') || e.target.value.includes('لليمين'))  {
        outputText.textContent ="0°";
        e.value='اليمين';
      }

      else if (e.target.value.includes('اليسار') || e.target.value.includes('يسار') || e.target.value.includes('لليسار'))  {
        outputText.textContent ="180°";
        e.value='يسار';
      }

  
      serialWriteTextData(e.value);

    }
      
    
    // Setup Web Serial using serial.js
    const serial = new Serial();
    serial.on(SerialEvents.CONNECTION_OPENED, onSerialConnectionOpened);
    serial.on(SerialEvents.CONNECTION_CLOSED, onSerialConnectionClosed);
    serial.on(SerialEvents.DATA_RECEIVED, onSerialDataReceived);
    serial.on(SerialEvents.ERROR_OCCURRED, onSerialErrorOccurred);

      /**
     * Callback function for when the connect button is pressed
     */
       async function onButtonConnectToSerialDevice() {
        console.log("onButtonConnectToSerialDevice");
        if (!serial.isOpen()) {
          await serial.connectAndOpen();
        }
      }
  
      /**

    /**
     * Send data over serial
     */
    async function serialWriteTextData(textData) {


      if (textData == "اليمين") {
      
       console.log(0);
      }

      else if (textData == "اليسار")  {
       
        console.log(180);
      }

      
      if (serial.isOpen()) {
        console.log("Writing to serial: ", textData);
        serial.writeLine(textData);
      }
    
    }

    /**
     * Callback function by serial.js when there is an error on web serial
     * 
     * @param {} eventSender 
     */
    function onSerialErrorOccurred(eventSender, error) {
      console.log("onSerialErrorOccurred", error);
    }

    /**
     * Callback function by serial.js when web serial connection is opened
     * 
     * @param {} eventSender 
     */
    function onSerialConnectionOpened(eventSender) {
      console.log("onSerialConnectionOpened");
      document.getElementById("connect-button").style.display = "none";
      document.getElementById("text-interface").style.display = "block";
    }

    /**
     * Callback function by serial.js when web serial connection is closed
     * 
     * @param {} eventSender 
     */
    function onSerialConnectionClosed(eventSender) {
      console.log("onSerialConnectionClosed");
      document.getElementById("connect-button").style.display = "block";
      document.getElementById("text-interface").style.display = "none";
    }

    /**
     * Callback function serial.js when new web serial data is received
     * 
     * @param {*} eventSender 
     * @param {String} newData new data received over serial
     */
    function onSerialDataReceived(eventSender, newData) {
      console.log("onSerialDataReceived", newData);
      rcvdText.textContent = newData;
    }
