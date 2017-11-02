$(".datepicker-here").click(function () {
	var	DateIn      = $(".-range-from-").attr('data-date'),
		MonthIn    = $(".-range-from-").attr('data-month'),
		YearIn     = $(".-range-from-").attr('data-year'),
		DateOut    = $(".-range-to-").attr('data-date'),
		MonthOut    = $(".-range-to-").attr('data-month'),
		YearOut    = $(".-range-to-").attr('data-year');
	if (MonthIn == "1") {
		MonthIn = "January";
	}
	if (MonthIn == "2") {
		MonthIn = "February";
	}
	if (MonthIn == "3") {
		MonthIn = "March";
	}
	if (MonthIn == "4") {
		MonthIn = "April";
	}
	if (MonthIn == "5") {
		MonthIn = "May";
	}
	if (MonthIn == "6") {
		MonthIn = "June";
	}
	if (MonthIn == "7") {
		MonthIn = "July";
	}
	if (MonthIn == "8") {
		MonthIn = "August";
	}
	if (MonthIn == "9") {
		MonthIn = "September";
	}
	if (MonthIn == "10") {
		MonthIn = "October";
	}
	if (MonthIn == "11") {
		MonthIn = "November";
	}
	if (MonthIn == "12") {
		MonthIn = "December";
	}
	if (MonthOut == "1") {
		MonthOut = "January";
	}
	if (MonthOut == "2") {
		MonthOut = "February";
	}
	if (MonthOut == "3") {
		MonthOut = "March";
	}
	if (MonthOut == "4") {
		MonthOut = "April";
	}
	if (MonthOut == "5") {
		MonthOut = "May";
	}
	if (MonthOut == "6") {
		MonthOut = "June";
	}
	if (MonthOut == "7") {
		MonthOut = "July";
	}
	if (MonthOut == "8") {
		MonthOut = "August";
	}
	if (MonthOut == "9") {
		MonthOut = "September";
	}
	if (MonthOut == "10") {
		MonthOut = "October";
	}
	if (MonthOut == "11") {
		MonthOut = "November";
	}
	if (MonthOut == "12") {
		MonthOut = "December";
	}
	if (MonthIn == undefined) {
		$("#CheckIn").attr('placeholder', "Choose a date");
	}else{
		$("#CheckIn").attr('placeholder', MonthIn +" "+ DateIn +", "+ YearIn);
	}
	if (MonthOut == undefined) {
		$("#CheckOut").attr('placeholder', "Choose a date");
	}else{
		$("#CheckOut").attr('placeholder', MonthOut +" "+ DateOut +", "+ YearOut);
	}
});

function SearchHotels(){
	var	DateIn      = $(".-range-from-").attr('data-date'),
		MonthIn    = $(".-range-from-").attr('data-month'),
		YearIn     = $(".-range-from-").attr('data-year'),
		DateOut    = $(".-range-to-").attr('data-date'),
		MonthOut    = $(".-range-to-").attr('data-month'),
		YearOut    = $(".-range-to-").attr('data-year');
	if (MonthIn == "1") {
		MonthIn = "January";
	}
	if (MonthIn == "2") {
		MonthIn = "February";
	}
	if (MonthIn == "3") {
		MonthIn = "March";
	}
	if (MonthIn == "4") {
		MonthIn = "April";
	}
	if (MonthIn == "5") {
		MonthIn = "May";
	}
	if (MonthIn == "6") {
		MonthIn = "June";
	}
	if (MonthIn == "7") {
		MonthIn = "July";
	}
	if (MonthIn == "8") {
		MonthIn = "August";
	}
	if (MonthIn == "9") {
		MonthIn = "September";
	}
	if (MonthIn == "10") {
		MonthIn = "October";
	}
	if (MonthIn == "11") {
		MonthIn = "November";
	}
	if (MonthIn == "12") {
		MonthIn = "December";
	}
	if (MonthOut == "1") {
		MonthOut = "January";
	}
	if (MonthOut == "2") {
		MonthOut = "February";
	}
	if (MonthOut == "3") {
		MonthOut = "March";
	}
	if (MonthOut == "4") {
		MonthOut = "April";
	}
	if (MonthOut == "5") {
		MonthOut = "May";
	}
	if (MonthOut == "6") {
		MonthOut = "June";
	}
	if (MonthOut == "7") {
		MonthOut = "July";
	}
	if (MonthOut == "8") {
		MonthOut = "August";
	}
	if (MonthOut == "9") {
		MonthOut = "September";
	}
	if (MonthOut == "10") {
		MonthOut = "October";
	}
	if (MonthOut == "11") {
		MonthOut = "November";
	}
	if (MonthOut == "12") {
		MonthOut = "December";
	}
	if (MonthIn == undefined || MonthOut == undefined) {
		$("#ResultsHotel").removeClass('hide');
		$("#TitleDates").html("Please choose a date");
	}else{
		$("#TitleDates").html("Best choices between "+ MonthIn +" "+ DateIn +", "+ YearIn +" and "+ MonthOut +" "+ DateOut +", "+ YearOut);
    	var url = "hotels.json";
	    $.ajax({
	        type: "GET", 
	        url: url,
	        timeout: 3000,
	        datatype: 'JSON',
	        contentType: "application/json; charset=utf-8",
	        cache: false,
	        beforeSend: function() {
	        	$("#ResultsHotel").removeClass('hide');
	        	$("span.status").toggleClass('hide');
	            $("span.status").html("Carregando...");
	        },
	        error: function() {
	            $("span.status").html("O servidor não conseguiu processar o pedido");
	        },
	        success: function(retorno) {
	                var clientes = retorno;
	                $.each(clientes.hotels,function(i, hotel){
	                    var item = "<li class='DF FW container-100 hotel-container'>\
	                    				<div class='container-30'>\
	                    					<img class='' src="+hotel.image+" />\
	                    				</div>\
	                    				<div class='container-60'>\
	                    					<ul class='"+hotel.rate+ "rating'>\
	                    					</ul>\
	                    					<h4>"+hotel.name+"</h4>\
	                    					<em>"+hotel.description+"</em>\
	                    					<div class='container-100'>\
		                    					<button class='color-2 heebo bold button button-round'>Book now</button>\
		                    					<button class='color-4 heebo bold button button-round'>Price history</button>\
		                    				</div>\
	                    				</div>\
	                    				<div class='container-10'>\
	                    					<span class='price' >"+hotel.price+"</span>\
	                    				</div>\
	                    			</li>";
	                    $("#HotelsList").append(item);
	                }); 
	                $("span.status").toggleClass('hide');
			} 
		});
	}
}
$(document).ready(function() {
	$( "#slider-range" ).slider({
		range: true,
		min: 100,
		max: 600,
		values: [0,600],
		slide: function( event, ui ) {
		  	var min = ui.values[0];//min
		  	var max = ui.values[1];//max
		  	console.log(ui.values[0]);
		  	console.log(ui.values[1]);
		  	$(".price").each(function(){
		  		var HP  = $(this).html();
		  		if (max < HP) {
		  			$(this).closest('.hotel-container').addClass('hide');
			  	}
		  		if (max > HP) {
		  			$(this).closest('.hotel-container').removeClass('hide');
			  	}
		  		if (min > HP) {
		  			$(this).closest('.hotel-container').addClass('hide');
			  	}
		  		if (min < HP) {
		  			$(this).closest('.hotel-container').removeClass('hide');
			  	}
			});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +" - $" + $( "#slider-range" ).slider( "values", 1 ) );		 
		} 
	}); 
});