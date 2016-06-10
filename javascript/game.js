 $(document).ready(function() {
var gifThings=[];

    $('#thingSubmit').on('click', function() {
        var thing = $('#thing-input').val();
          console.log(thing);
          
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=dc6zaTOxFJmzC&limit=10";

 $.ajax({url: queryURL, method: 'GET'})         
    .done(function(response) {
         var results = response.data;
         for(var i=0; i < results.length; i++){
            if (results[i].rating == "r" || results[i].rating == "pg-13"){
            }
            else {
            var gifDiv = $('<div class="item">');
             var rating = results[i].rating;
             var p = $('<p>').text( "Rating: " + rating);
             var personImage = $('<img>');
             var gifId = results[i].id;
              gifThings.push(gifId);
              console.log(gifId); 
personImage.attr('src', results[i].images.fixed_height.url);
//personImage.attr('src', results[i].images.original_still.url);
    console.log(results[i].images.original_still.url);

             gifDiv.append(p)
             gifDiv.append(personImage) 
             $('#gifsAppearHere').prepend(gifDiv);    
        
            }
         }
    }); 
    return false;
});

});

/*

        // Going to the URL and getting the data; 
        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
                // Setting the variable of image_url to the specific object 
            var results = response.data;                
            var gifDiv = $('<div class="item">')
            var rating = results.rating;
            var p = $('<p>').text( "Rating: " + rating);
            var personImage = $('<img>');
             personImage.attr('src', results.images.fixed_height.url);
             gifDiv.append(p)
             gifDiv.append(personImage)
             $('#videoContainer').prepend(gifDiv);               




                //$('#videoContainer').prepend(thingImage);
            });
    });
*/

//http://api.giphy.com/v1/gifs/search?q=matthew%20goode&api_key=dc6zaTOxFJmzC&limit=10

//<td>http://api.giphy.com/v1/gifs/search?q=waterfalls&amp;api_key=dc6zaTOxFJmzC&amp;limit=10</td>