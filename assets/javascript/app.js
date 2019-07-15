// Empty array to store our topic buttons in
var topics = ["Homer Simpson", "Marge Simpson", "Bart Simpson", "Lisa Simpson", "Maggie Simpson", "Mr. Burns", "Groundskeeper Willie", "Comic Book Guy", "Grandpa Simpson", "Steamed Hams", "Ned Flanders", "Milhouse", "Kang and Kodos"];

$(document).ready(function () {

    createTopicButtons();

    // Attach event listener to topic submit button on page
    $("#submitTopic").on("click", function () {
        console.log("submitTopicButton called...");

        // Get value of topic input box using the id
        var searchTerm = $('#topic-text').val().trim();

        // Add to topics array (Javascript)
        // (The push() method adds new items to the end of an array, and returns the new length)
        topics.push(searchTerm);
        console.log("topics: " + topics);

        // Create HTML and display it on the page for each topic 
        createTopicButtons();
    });

    function displayGiphy() {

        // Before we display giphy data clear out any old data
        document.getElementById("giphy-container").innerHTML = "";

        var giphyTopic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ZY8tJH2YGXWTQiTm3hhFf7T0cl9vLMyE&q=" + giphyTopic + "&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Goal: Display giphy response on the page for the particular topic that was clicked on
            var results = response.data;

            // Step 1) Create a div element that will contain all the giphy data 
            for (var i = 0; i < results.length; i++) {
                var topicDiv = $("<div>");
                topicDiv.addClass('topicDiv float-left p-2');

                // Step 2) Wrap giphy elements around <img> tag and <p> tag for ratings to display on screen 
                var giphyElement = $("<img>");
                var p = $("<p>");

                p.text(results[i].rating);

                giphyElement.addClass("giphyElement");
                giphyElement.attr("src", results[i].images.fixed_height.url);

                //  Step 3) Attach giphy and rating elements to parent div created in step 1
                topicDiv.append(giphyElement);
                topicDiv.prepend(p);

                // Step 4) Attach to parent container
                $("#giphy-container").append(topicDiv);
            }
        });
    }

    function createTopicButtons() {
        // Create topic buttons and add to html page
        // Step 1) Iterate through the topics
        console.log("createTopicButtons..."); //Second command
        $(".topic-buttons").empty(); //Third...
        for (i = 0; i < topics.length; i++) {

            // Step 2) Create button element for each topic 
            var topicsDiv = $("<button>");
            topicsDiv.text(topics[i]);

            // Adds a class of movie to our button
            topicsDiv.addClass("topic_button p-2 m-1");

            // Added a data-attribute
            topicsDiv.attr("data-name", topics[i]);

            // Step 3) Attach button element to page/div
            $(".topic-buttons").append(topicsDiv);
        } $(document).on("click", ".topic_button", displayGiphy);
    }
});