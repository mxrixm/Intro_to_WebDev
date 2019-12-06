var img = document.createElement("img");
var myDes = document.createElement("p");
var $playvid=$('.playvid');


$playvid.on('mouseenter',function(){
  var myParent=$(this).parent();
  myParent.find('.playvid').get(0).play();

});


$playvid.on('mouseout', function(){
  var myParent=$(this).parent();
  myParent.find('.playvid').get(0).pause();

}).css({'cursor': 'pointer'});


//https://www.youtube.com/watch?v=KTkkXphS0f4 I used this video for the Jquery code


function closeModal(){
  document.getElementById('my_modal').style.display="none";
  document.getElementById('my_modal').removeChild(img);
}

function loadImg(imagePth,myTxt){
  document.getElementById('my_modal').style.display="block";

  document.getElementById('my_modal').appendChild(img);
  document.getElementById('my_modal').appendChild(myDes);


  myDes.text(myTxt);


  myDes.style.position="relative";
  myDes.style.maxHeight="90vh";
  myDes.style.left="50%";
  myDes.style.top="50%";
  myDes.style.transform="translate(-50%,-50%)";
  myDes.style.color="white"
  myDes.style.fontSize = "35px";


  img.src=imagePth;
  img.style.position="relative";
  img.style.maxHeight="90vh";
  img.style.left="50%";
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
