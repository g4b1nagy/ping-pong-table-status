/* ========================================================================
 * Section
 * ======================================================================== */

function checkStatus() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      var data = JSON.parse(req.responseText);
      if (data['table_status'] == 'available') {
        document.body.style.backgroundColor = '#41c04b';
        document.getElementById('yay').style.opacity = 1;
        document.getElementById('yay').style.display = 'block';
        document.getElementById('nay').style.opacity = 0;
        document.getElementById('nay').style.display = 'none';
      } else {
        document.body.style.backgroundColor = '#f85d00';
        document.getElementById('nay').style.opacity = 1;
        document.getElementById('nay').style.display = 'block';
        document.getElementById('yay').style.opacity = 0;
        document.getElementById('yay').style.display = 'none';
      }
      document.getElementsByTagName('img')[0].style.opacity = 1;
    }
  }
  req.open('GET', 'status.json?rand=' + new Date().getTime(), true);
  req.send();
}

setInterval(checkStatus, 1000);

/* ========================================================================
 * Section
 * ======================================================================== */



/* ========================================================================
 * Section
 * ======================================================================== */



/* ========================================================================
 * Section
 * ======================================================================== */



/* ========================================================================
 * Section
 * ======================================================================== */
