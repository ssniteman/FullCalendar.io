$(document).ready(function() {

    // page is now ready, initialize the calendar...

$('#calendar').fullCalendar({
    dayClick: function(date, jsEvent, view) {


    	$('#calendar').fullCalendar( 'gotoDate', date );

    



    	// var view = $('#calendar').fullCalendar('getView');

    	$('#calendar').fullCalendar( 'changeView', 'basicDay' );

        // change the day's background color just for fun
        // $(this).css('background-color', 'red');

    }
});


});

/// Turns day red... would be called when a hold is in place


