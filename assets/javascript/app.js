$(document).ready(function(){

    var audio = ['../Giftastic/assets/images/christmas.mp4','../Giftastic/assets/images/white_christmas.mp4','../Giftastic/assets/images/let_it_snow.mp4','../Giftastic/assets/images/holly_jolly.mp4','../Giftastic/assets/images/navidad.mp4']
    audio = audio[Math.floor(Math.random() * audio.length)]
    audio = new Audio(audio)
    audio.play();

var theGifs = ['Christmas','Navidad','Santa','Christmas Tree','Rudolph Reindeer','Christmas Lights','Grinch','Christmas Dinner','Elfs','Mrs Claus','Presents','Frosty The Snowman','Krampus','Fireplace', 'Christmas Stockings','Candy Cane','Scrooge','Belsnickel','Christmas Movies','Christmas Music','Ded Moroz'];

function display() {
  
  var newGif = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+newGif+"&api_key=9RsoHb5hiRrXeoIELy3wuORx8T83KmFk&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

  $(".gif").empty();

for (var i = 0; i < queryURL.length; i++){
    var gifDiv = $("<div class='gif'>").css('float','left');
    var rating = response.data[i].rating;
    var pOne = $("<p>").text("Rating: "+rating);
    gifDiv.append(pOne);
    let gifURL = response.data[i].images.fixed_height_still.url;
    let gif = $("<img>").attr("src", gifURL);
    gifDiv.append(gif);
    // document.getElementsByTagName('<img>').onclick = function(){
    //   $("<img>").empty();
    //   let gifURL = response.data.gifs.fixed_height.url;
    //   let gif = $("<img>").attr("src", gifURL);
    //   gifDiv.append(gif)
    // }
    // Putting the entire newGif above the previous theGifs
    $("#theGifs").prepend(gifDiv);
}
gif.getElementsByTagName('<img>').onclick = function(){
console.log("you clicked me!")
let gifURL = response.data[i].images.fixed_height.url;
$("<img>").attr("src",gifURL)
}
  });

}

function makeButton() {
  $("#btns").empty();

  for (var i = 0; i < theGifs.length; i++) {
    var adder = $("<button>");
    adder.addClass("christmasBtn");
    adder.attr("data-name", theGifs[i]);
    adder.text(theGifs[i]);
    $("#btns").append(adder);
  }
}

$("#loadGif").on("click", function(event) {
  event.preventDefault();
  var newGif = $("#gifPlaceholder").val().trim();
  theGifs.push(newGif);
  makeButton();
});

// $("<input>").html('input:none')

$(document).on("click", ".christmasBtn", display);
makeButton();
})
