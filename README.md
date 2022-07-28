
# Web Serial API
The Web Serial API provides websites with the ability to read from and write to serial devices. These devices can be connected via a serial port or be USB or Bluetooth devices that emulate a serial port.

# Goal
Develop this page: [Click here](https://github.com/Deemowe/task1/tree/main/speech%20recognition)\
to allow the device receive the instructions from the speaker using javascript 

# Details
The purpose of the following functions:

```js 
updateOutputText(e)
```

* If the text contains any word related to **يمين**, the arm should move to °0
* If the text contains any word related to **يسار**, the arm should move to °180

```js
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
    
   ```
   
   **And then the word is sent to the Arduino to change the angle using** 
   ```js
   serialWriteTextData(textData) 
   ``` 
   ```js
async function serialWriteTextData(textData) {


       /* for checking purposes!!
       if (textData == "اليمين") {
      
       console.log(0);
      }

      else if (textData == "اليسار")  {
       
        console.log(180);
      } */

     
      if (serial.isOpen()) {
        console.log("Writing to serial: ", textData);
        serial.writeLine(textData);
      }
    
    }
    
   ```
   
   

# Important Notes
* You should apply the code using Google Chrome. 
* Make sure that the browser language is set to Arabic.
* Required to install [Arduino IDE](https://github.com/Deemowe/task1/tree/main/Wasdom%20ESP32%20link%20steps)
* After the text appears, you need to press **Space** to submit the text!
* The serial device is not available so the text in **استجابة الذراع** will not appear!



## Preview 
Watch the video:
[![Watch the video](https://img.youtube.com/vi/vVrs2lXLtu0/maxresdefault.jpg)](https://youtu.be/vVrs2lXLtu0)

# Learning References 
* [Read from and write to a serial port](https://web.dev/serial/#open-port)
* [Web Serial](https://makeabilitylab.github.io/physcomp/communication/web-serial.html#writing-data)
* [How to communicate with Web Serial Port](https://fidisys.com/blog/serial-port-devices/)
* [SerialPort](https://developer.mozilla.org/en-US/docs/Web/API/SerialPort)
