$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here

     	dayClick: function(date, jsEvent, view) {

			$('#calendar').fullCalendar( 'gotoDate', date );

			$('#calendar').fullCalendar( 'changeView', "basicDay" );

    }

});

});

