// Initialize Parse app
Parse.initialize("gYHVlOok2M66fC7h22A4ZHSHrY4KD27uge97a2Qb", "t3bGc7lqL1fZI3zQCtvSJV5tdSaGvQMXlX1uzBPq");


// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');


// // Create a new instance of your Music class 
// var sweetTune = new Music();

// // Set a property 'band' equal to a band name
// sweetTune.set('band', $('#band').val()); 

// // Set a property 'website' equal to the band's website
// sweetTune.set('website', $('#site').val()); 
    
// // Set a property 'song' equal to a song
// sweetTune.set('song', $('#song').val()); 

// // Save your instance of your song -- and go see it on parse.com!
// sweetTune.save()

// sweetTune.save(null, {
//   success: function(music) {
//     // Execute any logic after the object is saved.
//     alert('New object created with objectId: ' + music.id);
//   },
//   error: function(music, error) {
//     // Execute any logic that should take place if the save fails.
//     alert('Failed, with error code: ' + error.message);
//   }
// });

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	// For each input element, set a property of your new instance equal to the input's value
	// After setting each property, save your new instance back to your database

	// Create a new instance of your Music class 
	var sweetTune = new Music();

	$(this).find('input').each(function() {
		instance.set($(this).attr('id'), $(this).val()
			$(this).val(''))
	});
	
	// Set a property 'band' equal to a band name
	sweetTune.set('band', $('#band').val()); 
	// Set a property 'website' equal to the band's website
	sweetTune.set('website', $('#site').val()); 
 	// Set a property 'song' equal to a song
	sweetTune.set('song', $('#song').val()); 
	// Save your instance of your song -- and go see it on parse.com!
	sweetTune.save();

	// clear the form
	$('#band').val(''));
	$('#site').val(''));
	$('#song').val(''));
	return false // prevents a new page from loading
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


