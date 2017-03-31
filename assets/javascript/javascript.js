function window_onload() {
  window.addEventListener("scroll",navbar_reset_top,false);
}

var navbar_top = 921;

function navbar_reset_top() {
  var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
  if(scrollTop >= navbar_top&&navbar.className==="navbar_absolute") {
    document.getElementById("navbar").className="navbar_fixed",
    document.getElementById("content").className="content_2";
  }
  else if(scrollTop < navbar_top&&navbar.className==="navbar_fixed") {
    document.getElementById("navbar").className="navbar_absolute",
    document.getElementById("content").className="content_1";
  }
}

var navbar2_top = 0;

function navbar2_reset_top() {
  var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
  if(scrollTop >= navbar2_top&&navbar2.className==="navbar2_absolute") {
    document.getElementById("navbar2").className="navbar2_fixed";
    // document.getElementById("content").className="content_2";
  }
  else if(scrollTop < navbar2_top&&navbar2.className==="navbar2_fixed") {
    document.getElementById("navbar2").className="navbar2_absolute";
    // document.getElementById("content").className="content_1";
  }
}