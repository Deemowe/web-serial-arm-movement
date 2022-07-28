// #include <SPI.h> // Comment out when using i2c
#include <Wire.h>
#include <Servo.h>
Servo base;
double base_angle=90;
const int DELAY_MS = 5;


void setup() {
 Serial.begin(9600);
   base.attach(8);
  base.write(base_angle);

}



String getValue(String data, char separator, int index)
{
  int found = 0;
  int strIndex[] = {0, -1};
  int maxIndex = data.length()-1;

  for(int i=0; i<=maxIndex && found<=index; i++){
    if(data.charAt(i)==separator || i==maxIndex){
        found++;
        strIndex[0] = strIndex[1]+1;
        strIndex[1] = (i == maxIndex) ? i+1 : i;
    }
  }

  return found>index ? data.substring(strIndex[0], strIndex[1]) : "";
}

void loop() {
  
  // Check to see if there is any incoming serial data
  if(Serial.available() > 0){
    // If we're here, then serial data has been received
    // Read data off the serial port until we get to the endline delimiter ('\n')
    // Store all of this data into a string
    String rcvdSerialData = Serial.readStringUntil('\n'); 
    
  rcvdSerialData.trim();
  if (rcvdSerialData.length() == 0) {
    return;
  }
  // 92-0-130
  String command = getValue(rcvdSerialData, ' ',0);

    if (command == "يمين" ) {
      base.write(base_angle  = 0);
    }
    if (command == "يسار") {
     base.write(base_angle =180);
    }

       // Echo the data back on serial (for debugging purposes)
    // This is not necessary but helpful. Then the webpage can
    // display this debug output (if necessary)
    Serial.print("Arduino received: '");
    Serial.print(rcvdSerialData);
    Serial.println("'");
    }
 
  delay(DELAY_MS);

}
