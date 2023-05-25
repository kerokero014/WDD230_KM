var temp= 75;
var wSpeed= 4;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);

if (temp <= 50 && wSpeed > 3){
    document.getElementById("windChill").innerHTML= windChill;
}
else{ 
    document.getElementById("windChill").textContent =  "N/A"
}


///comments 
////var temp = document.getElementById('temp');
////var wind = document.getElementById('windSpeed');
////var degree = temp.textContent;
////var temperature = Number(degree);
////var windS = wind.textContent;
////var windSpeed = Number(windS); 
////
////  
////if (temperature <= 50 && windSpeed > 3.0) {
////    var windChill = calculateWindChillFactor(temperature, windSpeed);
////    document.getElementById('result').textContent = windChill;
////} else {
////    document.getElementById('result').textContent = 'N/A';
////}
////  
////  function calculateWindChillFactor(temperature, windSpeed) {
////    var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
////    return windChill.toFixed(0);
////  }