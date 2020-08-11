var request = new XMLHttpRequest();
request.open("GET", "https://app.domainsdb.info/v1/domains/search?domain=facebook&zone=com");
request.send();
request.onerror = function(){
console.log("Sorry for the inconvenience, Please try again later.");
}
request.onload = function() {
if(this.response){
  var data = JSON.parse(this.response)
  console.log(data);
 }
}