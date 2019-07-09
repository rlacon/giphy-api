var topics = [];

// Attach event listener to topic submit button on page
$("#submitTopic").on("click", function () {
    // Get value of topic input box using the id
    var searchTerm = $('#topic-text').val();

    // Step 1) Add to topics array (Javascript)
    // arr.push("Hola"); --> part1.push(part2);
    topics.push(searchTerm);
    console.log("topics: " + topics);
    // Step 2) Create HTML and display it on the page for each topic 
    createTopicButtons();

    
    // Step 3) 
    // Adding click event listeners to all elements with a class of "topic_button"
    // Attach event listeners to buttons that we just created
    $(document).on("click", ".topic_button", displayGiphy);
});

function createTopicButtons() {
    // Create topic buttons and add to html page
    // Step 1) Iterate through the topics
    $(".topic_buttons").empty();
    for (i = 0; i < topics.length; i++) {
        // Step 2) Create button element for each topic 
        var topicsDiv = $("<button>");
        topicsDiv.text(topics[i]);
        // Adds a class of movie to our button
        topicsDiv.addClass("topic_button");
        // Added a data-attribute
        topicsDiv.attr("data-name", topics[i]);
        // Step 3) Attach button element to page/div
        $(".topic_buttons").append(topicsDiv);
    }


}

function displayGiphy(){


    

    var giphy_topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=ZY8tJH2YGXWTQiTm3hhFf7T0cl9vLMyE&tag=" + giphy_topic;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      // Goal: Display giphy response on the page for the particular topic that was clicked on
      // Step 1) Create a div element that will contain all the giphy data 
      var newDiv = $("<div>"); 
      newDiv.attr("class", "myNewDiv");
      //   Step 2) Create a giphy element
      var giphyElement = $("<img>"); 
      giphyElement.attr("class", "giphyElement");
    //   giphyElement.attr("src", response.data.embed_url);
      giphyElement.attr("src", "https://cinephiliabeyond.org/wp-content/uploads/2019/03/b61104_458cdbb399ae4271a5952cd4651ad8f6mv2-1050x525.jpg?x13370");
      

      //  Step 3) Attach giphy element to parent div created in step 1
      newDiv.append(giphyElement);

     // Step 4) Append to parent container
     $("#topics_container").append(newDiv);
     
    //   // Retrieves the Rating Data
    //   console.log(response.Ratings[0].Value);

    //   // Creates an element to have the rating displayed
    //   var movieRating = response.Ratings[0].Value;

    //   var ratingDiv = $("<p>");
    //   ratingDiv.text(movieRating);


    //   // Displays the rating
    //   newDiv.append(ratingDiv);

    //   // Retrieves the release year
    //   console.log(response.Year);

    //   // Creates an element to hold the release year
    //   var yearDiv = $("<p>");
    //   yearDiv.text(response.Year);

    //   // Displays the release year
    //   newDiv.append(yearDiv);

    //   // Retrieves the plot
    //   console.log(response.Plot);

    //   // Creates an element to hold the plot
    //   var plotDiv = $("<p>");
    //   plotDiv.text("Plot: " + response.Plot);

    //   // Appends the plot
    //   newDiv.append(plotDiv);

    //   // Creates an element to hold the image
    //   var moviePoster = $("<img>");
    //   moviePoster.attr("src", response.Poster);

    //   // Appends the image
    //   newDiv.append(moviePoster);

    //   // Puts the entire Movie above the previous movies.
    //   $("#movies-view").prepend(newDiv);
      
    });





} // End of displayGiphy