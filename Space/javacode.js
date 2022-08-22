/*Fucntion Starts the program, disabling itself from being reactivated until stop has been run*/
function start(){
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML= "[Collecting Data]";
    index = 0;
    timer = setInterval(updateDisplay, timeInterval);
    document.getElementById("BGM").play();
    }
    
    
    function getData(){
        var loadedData = loadData();
        return loadedData;
    }
    /*sets the data given by the usage of the function within index and the data pulled from dataLoader.js, placing it in a format that creates/updates the necessary rows for the table */
    function dataRow(legend,value,units){
        msg = "<td>";
        msg += legend;
        msg += ":</td><td>";
        msg += value;
        msg += " "+units;
        msg += "</td>";
        return msg;
    }
    
    /*Clears the timer, effectively resetting the data within the program to the beginning once again, as well as reenabling the start button so the program may be started again.*/
    function stop(){
        document.getElementById("startButton").disabled = false;
        document.getElementById("stopButton").disabled = true;
        clearInterval(timer);
    }
    
    
    var currTime = 50
    var phrase = " Seconds left"
    //Variable sets total time
    function countDown() {
        /*Countdown function makes use of a "if statement" loop until the condition is met,
        in this case the condition being currTime equalling zero, and waiting five seconds 
        before removing five from currTime */
        document.getElementById("countdown").innerHTML = currTime + phrase;
        if (currTime > 25) {
            setTimeout(function () {
                currTime = currTime - 1
                countDown()
            }, 1000)
        } else if (currTime > 0) {
            setTimeout(function () {
                phrase = " Seconds left" + "<br/>" + "Warning, less than 1/2 time to launch"
                currTime = currTime - 1
                countDown()
            }, 1000)
        } else {
            alert("Blastoff!!")
        };
    };
    
    function play() {
        /*Play function which creates two random variables between 1 and six,
        then adding the two random numbers in a seperate variable, sum, the three variables are then checked, 
        being that if the result was two of the same number you win the game, and if it was seven or eleven you lose the game
        as well as writing the results and variables into the document to show the player their results.*/
        var die1 = Math.ceil(Math.random() * 6);
        var die2 = Math.ceil(Math.random() * 6);
        var sum = die1 + die2
        document.getElementById("diePlusSum").innerHTML = "Die 1 = " + die1 + "<br/>" + "Die 2 = " + die2 + "<br/>" + "Sum = " + sum + "<br/>"
        if (sum == 7 || sum == 11) {
            document.getElementById("winOrLose").innerHTML = "Craps - you lose" + "<br/>"
        }
        else if (die1 == die2 && die1 % 2 == 0) {
            document.getElementById("winOrLose").innerHTML = "Doubles - you win!!" + "<br/>"
        }
    }
    
    /*function checkCredential() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var badgeNumber = document.getElementById("badgeId").value;
        var fullName = firstName + " " + lastName;
    
        //If function checks credentials to ensure the name string is < 20 as well as checking to ensure the badge number is neither above three digits nor below zero
        if (fullName.length > 20 || badgeNumber.length > 3 || badgeNumber < 0) {
            document.getElementById("loginStatus").innerHTML = "Invalid Credentials: Character limit has been surpassed or ID has been entered Incorrectly";
        } else {
            alert("Credentials Accepted: " + fullName + ", welcome to UATSpace")
            location.replace("index.html");
        }
    }*/

    /*Sets the IDs of the rows as classes with a constructor array, and puts them in an order parallel to the data needed from dataLoader.js */
    class InputData{
        constructor(
            seconds,
            latitude,
            longitude,
            gpsAltitude,
            bmpSensorAltitude,
            bmpSensorPressure,
            bmpSensorTemperature,
            digitalSensorTemperature,
            cssSensorTemperature,
            cssSensorEC02,
            cssSensorTVOC,
            UV,
            accelX,
            accelY,
            accelZ,
            magneticX,
            magneticY,
            magneticZ,
            gyroX,
            gyroY,
            gyroZ){
                this.seconds = seconds;
                this.latitude = latitude;
                this.longitude = longitude;
                this.gpsAltitude = gpsAltitude;
                this.bmpSensorAltitude = bmpSensorAltitude;
                this.bmpSensorPressure = bmpSensorPressure;
                this.bmpSensorTemperature = bmpSensorTemperature;
                this.digitalSensorTemperature = digitalSensorTemperature;
                this.cssSensorEC02 = cssSensorEC02;
                this.cssSensorTVOC = cssSensorTVOC;
                this.cssSensorTemperature = cssSensorTemperature;
                this.UV = UV;
                this.accelX = accelX;
                this.accelY = accelY;
                this.accelZ = accelZ;
                this.magneticX = magneticX;
                this.magneticY = magneticY;
                this.magneticZ  = magneticZ;
                this.gyroX = gyroX;
                this.gyroY = gyroY;
                this.gyroZ = gyroZ;
            }
        
    }