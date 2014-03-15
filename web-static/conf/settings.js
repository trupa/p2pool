var siteTitle = "P2Pool Pool";
var contactAddress = "pool-contact@emailaddy.com";
var ip = location.hostname;
var port = location.port;

window.onload = function() {
       //when the document is finished loading, replace everything
       //between the <span ...> </span> tags with the value of splitText
   document.getElementById("ip").innerHTML=ip;
   document.getElementById("port").innerHTML=port;
   document.getElementById("ip2").innerHTML=ip;
   document.getElementById("port2").innerHTML=port;
   
} 