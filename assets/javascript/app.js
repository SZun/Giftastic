const apiKey = "9RsoHb5hiRrXeoIELy3wuORx8T83KmFk";
let topics = [
  "Christmas",
  "Navidad",
  "Santa",
  "Christmas Tree",
  "Rudolph Reindeer",
  "Christmas Lights",
  "Grinch",
  "Christmas Dinner",
  "Elfs",
  "Mrs Claus",
  "Presents",
  "Frosty The Snowman",
  "Krampus",
  "Fireplace",
  "Christmas Stockings",
  "Candy Cane",
  "Scrooge",
  "Belsnickel",
  "Christmas Movies",
  "Christmas Music",
  "Ded Moroz",
];

let audio = [
  "./assets/images/christmas.mp4",
  "./assets/images/white_christmas.mp4",
  "./assets/images/let_it_snow.mp4",
  "./assets/images/holly_jolly.mp4",
  "./assets/images/navidad.mp4",
  "./assets/images/santa.mp4",
];
audio = audio[Math.floor(Math.random() * audio.length)];
audio = new Audio(audio);

function toggleAnimatedGif() {
  if ($(this).attr("data-state") === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
}

const displayGifContent = ({ rating, type, source_tld }) => {
  const gifDiv = $("<div class='gif'>").css("float", "left");
  const ratingPElement = $("<p>").text(`Rating: ${rating}`);
  const typePElement = $("<p>").text(`Type: ${type}`);

  gifDiv.append(ratingPElement);
  gifDiv.append(typePElement);
  gifDiv.append(
    `<div class="moveIt"><a href="https://${source_tld}" target='_blank'>Source Link!!</a></div>`
  );

  return gifDiv;
};

const getGif = (images) => {
  const gifURLStill = images.fixed_height_still.url;
  const gifURLAnimated = images.fixed_height.url;

  const gif = $("<img>")
    .attr("data-still", gifURLStill)
    .addClass("myGifs")
    .attr("data-animate", gifURLAnimated)
    .attr("src", gifURLStill)
    .attr("data-state", "still");

  return gif;
};

async function display() {
  var newGif = $(this).attr("data-name");

  try {
    const response = await $.ajax({
      url: `https://api.giphy.com/v1/gifs/search?q=${newGif}&api_key=${apiKey}&limit=${10}`,
      method: "GET",
    });

    $(".gif").empty();

    response.data.forEach((i) => {
      let gifDiv = displayGifContent(i);
      const gif = getGif(i.images);

      gifDiv.append(gif);
      $("#gifSpace").prepend(gifDiv);
    });

    $(".myGifs").click(toggleAnimatedGif);
  } catch (ex) {
    console.log(ex);
  }
}

const displayButtons = () => {
  $("#btns").empty();

  for (var i = 0; i < topics.length; i++) {
    const btn = $("<button>")
      .addClass("christmasBtn")
      .attr("data-name", topics[i])
      .text(topics[i]);
    $("#btns").append(btn);
  }
};

const loadGif = (event) => {
  event.preventDefault();
  topics.push($("#gifPlaceholder").val().trim());
  displayButtons();
};

const main = () => {
  displayButtons();
  $(document).on("click", ".christmasBtn", display);
  $(document).click(() => audio.play());
  $("#loadGif").click((event) => loadGif(event));
};

main();
