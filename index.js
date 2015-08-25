function displayTime() {
  var t = new Date();
  var clock = getPadded(t.getHours()) + ':' + getPadded(t.getMinutes()) + ':' + getPadded(t.getSeconds());

  var clockDiv = document.getElementById('clock');

  clockDiv.innerText = clock;
}

function getPadded(n) {
  var str = n.toString();
  while(str.length < 2) {
    str = '0' + str;
  }
  return str;
}

function displayDate() {
  var t = new Date();
  var date = t.getMonth() + '-' + t.getDay() + '-' + t.getFullYear();

  var clockDiv = document.getElementById('date');

  clockDiv.innerText = date;
}

window.setInterval(displayTime, 100);
window.setInterval(displayDate, 100);
