$(".datepicker-here").click(function() {
	var DateIn      = $(".-range-from-").attr('data-date'),
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

	