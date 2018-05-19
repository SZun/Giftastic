# Giftastic

Link to deployed version: https://szun.github.io/Giftastic/

Problem: Create a website using the Giphy API, buttons linked to Ajax calls, allow user to create new functional buttons and make the Gif source code attribute still on load and animated when clicked. 

Solution: The first step was to go to the Giphy website and get an API key. Secondly, in the app.js file I made it so that when someone clicked a button, it would take the name of that button and pass it to the queryURL. This gave me the resilting gifs. To make the gifs animated from a still state I first added the corresponding animated source code to the images as a data attribute. Then I created an on click function that specified the specific image that was being clicked would switch its source code attribute to the animated source code and then back to the still version when clicked again, which resulted in the intented fashion. 

Technical Approach: Using the education I have garnered from Northwestern University's Full Stack Web Development program, and more specifically with HTML5, CSS3, Bootstrap 4, Javascript ES5, JQuery and Ajax calls within the Javascript/JQuery I was able to complete a quality version of this assigment. 
