var img = document.createElement("img");
var myDes = document.createElement("span");
var myTitle=document.createElement("span2");
var $playvid=$('.playvid');

mybutton = document.getElementById("myBtn");


// User scrolls down 30px from the top of the document, show button that scrolls back to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// scroll to the top when the user clicks
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$playvid.on('mouseenter',function(){
  var myParent=$(this).parent();
  myParent.find('.playvid').get(0).play();

});


$playvid.on('mouseout', function(){
  var myParent=$(this).parent();
  myParent.find('.playvid').get(0).pause();

}).css({'cursor': 'pointer'});


//https://www.youtube.com/watch?v=KTkkXphS0f4 I used this video for the Jquery code above



function loadImg(imagePth,myTxt,myTtle){
  document.getElementById('my_modal').style.display="block";

  document.getElementById('my_modal').appendChild(img);
  document.getElementById('my_modal').appendChild(myDes);
  document.getElementById('my_modal').appendChild(myTitle);


  $("#my_modal span").text(myTxt);
  $("#my_modal span").addClass('my_modal_description');
  $("#my_modal span2").text(myTtle);
  $("#my_modal span2").addClass('my_modal_title');



  img.src=imagePth;
  img.style.position="relative";
  img.style.maxHeight="90vh";
  img.style.left="40%";
  img.style.top="50%";
  img.style.transform="translate(-50%,-50%)";


}

document.getElementById("my_modal").onclick = doStuff;

function doStuff() {


  if(event.target == img){
    console.log("dont close it!");
  }else{
    console.log("now you can close it!");
    document.getElementById("my_modal").style.display="none";
  }

}
