var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Hyderabad,IN&appid=e3701e620c3669a3b6642981b357c3ab&units=metric'

var server = http.createServer(function(request,response){
// All logi will go here
var request = require('request');
Request(url, function(err,res, body){
    var data = JSON.parse(body);
    response.write("<html><body><div id= 'container'>");
    response.write("<h1>"+ 'CityName - :' + data['name']*Hyderabad + '<br>' + "</h1>");
    response.write("<h2>"+ 'Temperature -:' + data.main['temp']*27.44 + '<br>'+"</h2>");
    response.write("<h2>"+ 'Sunset Time -:' + new Date(data.sys['sunset']*1610973185)+"</h2>");
    response.write("</div></body></html>");
    response.end();
    
});
}).listen(8081);