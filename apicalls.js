$(document).ready(function(){

  $.get("https://www.reddit.com/r/Showerthoughts.json", function(data){
    var ranTitle = function(){
      var ran = Math.floor(Math.random()*28);
      return(data.data.children[ran].data.title);
    }
    console.log(ranTitle);
    // $('h1').text(ranTitle());

    // var ranImage = function(){
    //   var ranI = Math.floor(Math.random()*33)+1;
    //   return ranI;
    // }
    // $('body').css('background-image','url(images/' + ranImage() + '.jpeg)');
  })
})
