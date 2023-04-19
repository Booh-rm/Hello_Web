function updatehour() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  hour = (hour < 10) ? "0" + hour : hour;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  day = (day < 10) ? "0" + day : day;
  month = (month < 10) ? "0" + month : month;
  var currenDate = day + "/" + month + "/" + year;
  var currenHour = hour + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = currenHour + "<br>" + currenDate;
}
setInterval(updatehour, 1000);
