// Initialize Parse app
Parse.initialize("gYHVlOok2M66fC7h22A4ZHSHrY4KD27uge97a2Qb", "t3bGc7lqL1fZI3zQCtvSJV5tdSaGvQMXlX1uzBPq");


// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');


// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	// For each input element, set a property of your new instance equal to the input's value
	// After setting each property, save your new instance back to your database

	// Create a new instance of your Music class 
	var sweetTune = new Music();

    $(this).find('input').each(function(){
        sweetTune.set($(this).attr('id'), $(this).val());
        $(this).val('');
    });
	
    sweetTune.save(null, {
        success:getData();
    });

 //    or this:
	// // Set a property 'band' equal to a band name
	// sweetTune.set('band', $('#band').val()); 
	// // Set a property 'website' equal to the band's website
	// sweetTune.set('website', $('#site').val()); 
 // 	// Set a property 'song' equal to a song
	// sweetTune.set('song', $('#song').val()); 
	// // Save your instance of your song -- and go see it on parse.com!
	// sweetTune.save();

	// // clear the form
	// $('#band').val('');
	// $('#site').val('');
	// $('#song').val('');

	return false // prevents a new page from loading
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class
    var query = new Parse.Query(Music);

	// Set a parameter for your query -- where the website property isn't missing
    query.notEqualTo('site', '');

	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
    query.find({
        success:function(results) {
            buildList(results);
        };

        // or success;buildList

    });




}

// A function to build your list
var buildList = function(data) {
	// Empty out your ordered list
    $('ol').empty();
	// Loop through your data, and pass each element to the addItem function
    data.forEach(function(a) {
        addItem(a);
    });

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function
    var band = item.get('band');
    var site = item.get('site');
    var song = item.song('song');


	// Append li that includes text from the data item
    var li = $('<li>' + band + ' ' + song + '</li>');
    var button = $('<button class="btn-danger btn-xs"><span clss="glyphicon glyphicon-remove">Remove</button')
    button.click(function() {
        item.destroy({
            success: getData
        })
    })
    $('ol').append
	
	// Time pending, create a button that removes the data item on click

});
	
}

// Call your getData function when the page loads

getData()
