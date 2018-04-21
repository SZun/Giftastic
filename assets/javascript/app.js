    
var topics = ['christmas','navidad','santa','christmas+tree','rudolph+reindeer','christmas+lights','grinch','christmas+dinner','elfs','mrs+claus','presents','frosty+the+snowman','krampus','fireplace', 'christmas+stocking','candy+cane','scrooge','belsnickel','christmas+movies','christmas+music','ded+moroz']
var words = ['Christmas','Navidad','Santa','Christmas Tree','Rudolph Reindeer','Christmas Lights','Grinch','Christmas Dinner','Elfs','Mrs Claus','Presents','Frosty The Snowman','Krampus','Fireplace', 'Christmas Stocking','Candy Cane','Scrooge','Belsnickel','Christmas Movies','Christmas Music','Ded Moroz']

var queryURL = "http://api.giphy.com/v1/gifs/search?q="+topics[4]+"&api_key=9RsoHb5hiRrXeoIELy3wuORx8T83KmFk&limit=10"

$(document).ready(function(){
for (var i = 0; i < words.length; i++){
    $("#buttons").append("<button>"+words[i]+"</button>")
}
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for (var i = 0; i < 10; i++){
        $("#gifs").append("<img src='"+response.data[i].images.fixed_height.url+"'>")
    console.log(response.data[i].images);
    }
  });
})
  
