window.st = false;
var str = "";

$(document).ready(function(){
  $(".input").focus();
});

var quick = 200;
var slow = 500;

function againClick() {
  window.st = false;
  $(".resdiv").fadeOut(quick);
  $(".btndiv").fadeOut(quick);
  $(".light").fadeOut(quick);
  $(".showtext").fadeOut(quick);
  setTimeout(function(){
    $(".hcon").fadeIn(quick);
    $(".hint").fadeIn(quick);
    $(".input").fadeIn(quick);
    $(".input").focus();
  }, quick + 70);
}

document.onkeydown=function(event){
    var code = event.keyCode;
    if(code == 13){ //enter监听事件
      if (!window.st) {
        str = $(".input").val()
        process();
      } 
    }
    if(code == 32){ //enter监听事件
      if (window.st) {
        againClick()
      } 
    }
}

function process() {
  $(".lc").css("visibility", "visible");
  setTimeout(function(event){
    $(".lc").css("visibility", "hidden");
    res = getRes(str);
    showRes(res)
  }, 3000);
}

function showRes(res) {
  window.st = true;
  $(".hcon").fadeOut(quick);
  $(".hint").fadeOut(quick);
  $(".input").fadeOut(quick);
  setTimeout(function(){
    setPro(res);
    if(res >= 50) {
      $(".resdiv").removeClass("anim-sad");
      $(".resdiv").addClass("anim-swing");
      $(".sad").css("display", "none");
      $(".smile").css("display", "block");
    } else {
      $(".resdiv").removeClass("anim-swing");
      $(".resdiv").addClass("anim-sad");
      $(".smile").css("display", "none");
      $(".sad").css("display", "block");
    }
    $(".btndiv").fadeIn(quick);
    $(".light").toggle();
    $(".resdiv").toggle();
    $(".showtext").text(str);
    $(".showtext").css("display", "block");
    $(".light").css("display", "block");
    $(".showtext").css("display", "block");
  }, quick + 70);
}


function setPro(num) {

}

// This function will block until get return
function getRes(input) {
  return Math.random() * 100;
}