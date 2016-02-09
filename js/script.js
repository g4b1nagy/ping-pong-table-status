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
        document.getElementsByTagName('img')[0].src = 'img/yay.svg';
      } else {
        document.body.style.backgroundColor = '#f85d00';
        document.getElementsByTagName('img')[0].src = 'img/nay.svg';
      }
      document.getElementsByTagName('img')[0].style.opacity = 1;
    }
  }
  req.open('GET', 'status.json', true);
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
