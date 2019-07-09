var topics = [];

// Attach event listener to topic submit button on page
$("#submitTopic").on("click", function () {
    // Get value of topic input box using the id
    var searchTerm = $('#topic-text').val();
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=ZY8tJH2YGXWTQiTm3hhFf7T0cl9vLMyE&tag=" + searchTerm;

    // Step 1) Add to topics array (Javascript)
    // arr.push("Hola"); --> part1.push(part2);
    topics.push(searchTerm);
    console.log("topics: " + topics);
    // Step 2) Create HTML and display it on the page for each topic 
    createTopicButtons();

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     // We got a response back from the API!

    // })

});

function createTopicButtons() {
    // Create topic buttons and add to html page
    // Step 1) Iterate through the topics
    console.log("createTopicButtons");
    $(".topic_buttons").empty();
    for (i = 0; i < topics.length; i++) {
        // Step 2) Create button element for each topic 
        console.log("iterating...");
        var topicsDiv = $("<button>");
        topicsDiv.text(topics[i]);
        console.log("Added a new button");
        // Step 3) Attach button element to page/div
        $(".topic_buttons").append(topicsDiv);
    }
}