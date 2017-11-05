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
		$("#Filters").removeClass('hide')
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
	                var ret = retorno;
	                $.each(ret.hotels,function(i, hotel){
	                    var item = "<li class='DF FW container-100 hotel-container'>\
	                    				<div class='cont-img-hotel container-30 tb-container-100'>\
	                    					<img src="+hotel.image+" />\
	                    				</div>\
	                    				<div id='Description-"+i+"' class='container-70 DF FW tb-container-100'>\
	                    					<div class='container-80 tb-container-100'>\
		                    					<ul class='star-rank container-100' data-rank="+hotel.rate+">\
		                    					</ul>\
		                    					<h4 class='hotel-name heebo color-2 bold font-size-2 container-100'>"+hotel.name+"</h4>\
		                    					<em class='hotel-desc heebo color-3 font-size-1 container-100'>"+hotel.description+"</em>\
		                    					<div class='container-100'>\
			                    					<button class='color-2 heebo bold button button-round tb-container-80 tb-text-center tb-button-hotel'>Book now</button>\
			                    					<button class='color-4 heebo bold button button-round PH tb-container-80 tb-text-center tb-button-hotel' data-PH="+i+">Price history</button>\
			                    				</div>\
			                    			</div>\
		                    				<div class='DF TotalPrice'>\
		                    					<span class='text-right tb-text-center tb-container-100 heebo font-size-2 color-6'>Total<br><b class='price montserrat color-4' data-price="+hotel.price+">$"+hotel.price+"</b></span>\
		                    				</div>\
	                    				</div>\
	                    				<div id="+i+" class='container-70 hide DF FW tb-container-100'>\
	                    					<div class='container-50 text-left'>\
	                    						<span class='Heebo bold color-2 font-size-2'>Price history for 2017</span>\
	                    					</div>\
	                    					<div class='container-50 text-right' style='cursor:pointer;'>\
	                    						<img class='BD' src='images/back-description.svg'/>\
	                    						<span class='font-size-5 back-desc heebo color-5' data-PH="+i+">Back to description</span>\
	                    					</div>\
	                    					<canvas id='bar-chart-"+i+"' width='400' height='100' data-hasChart='0'></canvas>\
	                    				</div>\
	                    			</li>";
	                    $("#HotelsList").append(item);
	                }); 
	                $(".star-rank").each(function() {
	                	var Stars = $(this).attr('data-rank');
	                	var i;
	                	for (i = 1; i <= Stars; i++) {
	                		$(this).append("<li class='stars'></li>");
	                	}
	                });
	                $(".back-desc").click(function() {
	                	var Pos = $(this).attr('data-PH');
	                	console.log(Pos)
	                	$('#Description-'+Pos).toggleClass('hide');
	                	$('#'+Pos).toggleClass('hide');
	                });
	                $(".PH").click(function() {
	                	var Pos = $(this).attr('data-PH');
	                	console.log(Pos)
	                	$('#Description-'+Pos).toggleClass('hide');
	                	$('#'+Pos).toggleClass('hide');
	                	var HC = $('#bar-chart-'+Pos).attr('data-hasChart');
	                	if (HC == 0) {
	                		var bar_ctx = document.getElementById('bar-chart-'+Pos).getContext('2d');
	                		var purple_orange_gradient = bar_ctx.createLinearGradient(10, 0, 0, 170);
							purple_orange_gradient.addColorStop(0, '#F98100');
							purple_orange_gradient.addColorStop(1, '#F3997D');
							var chart = new Chart(bar_ctx, {
							    // The type of chart we want to create
							    type: 'bar',
							    // The data for our dataset
							    data: {
							        labels: [
							        	ret.hotels[Pos].price_history[0].month, 
							        	ret.hotels[Pos].price_history[1].month, 
							        	ret.hotels[Pos].price_history[2].month, 
							        	ret.hotels[Pos].price_history[3].month, 
							        	ret.hotels[Pos].price_history[4].month, 
										ret.hotels[Pos].price_history[5].month, 
										ret.hotels[Pos].price_history[6].month
									],
							        datasets: [{
							            label: "Price",
										backgroundColor: purple_orange_gradient,
										hoverBackgroundColor: purple_orange_gradient,
										hoverBorderWidth: 2,
										hoverBorderColor: '#F3997D',
							            data: [
							            	ret.hotels[Pos].price_history[0].value,
							            	ret.hotels[Pos].price_history[1].value,
							            	ret.hotels[Pos].price_history[2].value,
							            	ret.hotels[Pos].price_history[3].value,
							            	ret.hotels[Pos].price_history[4].value,
							            	ret.hotels[Pos].price_history[5].value,
							            	ret.hotels[Pos].price_history[6].value
							            ],
							        }]
							    },
							    // Configuration options go here
								options: {
									responsive: true,
								     scales: {
								       xAxes: [{
								         display: true,
								         barPercentage: 0.4,
								       }],
								       yAxes: [{
								         display: false,
								         ticks: {
								                beginAtZero: true
								            }
								       }],
								     }
			    				  }
							});
	                		$('#bar-chart-'+Pos).attr('data-hasChart', '1');
	                	}
	                });
	                $("span.status").toggleClass('hide');
			} 
		});
	}
}
$(document).ready(function() {
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$("ul.menu").toggleClass('tb-hide');
	});
	$("#slider-range").slider({
		range: true,
		min: 100,
		max: 601,
		values: [0,601],
		slide: function( event, ui ) {
		  	var min = ui.values[0];//min
		  	var max = ui.values[1];//max
		  	$("#Min").html("$"+min);
		  	$("#Max").html("$"+max);
		  	$(".price").each(function(){
		  		var HP  = $(this).attr('data-price');
		  		if (min >= HP || max <= HP) {
		  			$(this).closest('.hotel-container').addClass('hide-slide');
			  	}else{
			  		$(this).closest('.hotel-container').removeClass('hide-slide');
			  	}
			});
		} 
	});
	$(".ratings_stars").click(function(event) {
		var qntstars = $(this).attr('data-stars');
		$(".star-rank").each(function() {
			var Stars = $(this).attr('data-rank');
			if (Stars <= qntstars) {
				$(this).closest('.hotel-container').removeClass('hide-star');
			}else{
				$(this).closest('.hotel-container').addClass('hide-star');
			}
		});
	}); 
});
