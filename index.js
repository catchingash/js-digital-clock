function displayTime() {
  var t = new Date();
  var clock = t.toLocaleTimeString();

  var clockDiv = document.getElementById('clock');

  clockDiv.innerText = clock;
}

function displayDate() {
  var t = new Date();
  var date = t.toLocaleDateString();

  var clockDiv = document.getElementById('date');

  clockDiv.innerText = date;
}

window.setInterval(displayTime, 100);
window.setInterval(displayDate, 100);
