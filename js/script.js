window.onload = function() {
  document.getElementById('main').style.display = 'none';

  function showDomElements() {
    document.getElementById('main').style.display = 'block'
  };

};

function showTags() {
  var c = document.getElementById('main').childNodes;
  var txt = " ";
  var i;
  for (i = 0; i < c.length; i++) {
    txt = txt + c[i].nodeName + ", ";
  }

  document.getElementById("display").innerHTML = txt;
};

function showDomElements() {
  document.getElementById('main').style.display = 'block'
};

function reset() {
  location.reload();
}
