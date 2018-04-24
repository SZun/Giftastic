
$(document).ready(function(){

  var audio = ['../Giftastic/assets/images/christmas.mp4','../Giftastic/assets/images/white_christmas.mp4','../Giftastic/assets/images/let_it_snow.mp4','../Giftastic/assets/images/holly_jolly.mp4','../Giftastic/assets/images/navidad.mp4','../Giftastic/assets/images/santa.mp4']
  audio = audio[Math.floor(Math.random() * audio.length)]
  audio = new Audio(audio)
  audio.play();
  var limit = 10

var theGifs = ['Christmas','Navidad','Santa','Christmas Tree','Rudolph Reindeer','Christmas Lights','Grinch','Christmas Dinner','Elfs','Mrs Claus','Presents','Frosty The Snowman','Krampus','Fireplace', 'Christmas Stockings','Candy Cane','Scrooge','Belsnickel','Christmas Movies','Christmas Music','Ded Moroz'];

function display() {
var apiKey = '9RsoHb5hiRrXeoIELy3wuORx8T83KmFk';
var newGif = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+newGif+"&api_key="+apiKey+"&limit=10"+limit+"" ;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
$(".gif").empty();
for (var i = 0; i < limit; i++){
  var gifDiv = $("<div class='gif'>").css('float','left');
  var rating = response.data[i].rating;
  var ratingPElement = $("<p>").text("Rating: "+rating);
  gifDiv.append(ratingPElement);
  var type = response.data[i].type;
  var typePElement = $("<p>").text("Type: "+type);
  gifDiv.append(typePElement);
  var source = response.data[i].source_tld;
  var sourceElement = $("<div>").addClass('moveIt').html("<a href="+"https://"+source+" target='_blank'>Source Link!!</a>");
  gifDiv.append(sourceElement);

  var gifURLStill = response.data[i].images.fixed_height_still.url;
  var gifURLAnimated = response.data[i].images.fixed_height.url;

  var gif = $("<img>").attr("data-still", gifURLStill).addClass('myGifs').attr("data-animate",gifURLAnimated).attr("src",gifURLStill).attr("data-state","still");

  gifDiv.append(gif);

  $("#gifSpace").prepend(gifDiv);
  }

  $(".myGifs").on("click", function() {

    var state = $(this).attr('data-state');
   
    if (state === 'still') {
      $(this).attr('src', $(this).attr('data-animate'));
      $(this).attr('data-state', 'animate');
    } else {
      $(this).attr('src', $(this).attr('data-still'));
      $(this).attr('data-state', 'still');
    }   
    })

    
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

$(document).on("click", ".christmasBtn", display);
makeButton();
})