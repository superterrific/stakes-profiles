google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Corporate Report');
	data.addColumn('number', '1992 Thunder Rumble');
	data.addColumn('number', '1993 Sea Hero');
	data.addColumn('number', '1994 Holy Bull');
	data.addColumn('number', '1995 Thunder Gulch');
	data.addColumn('number', '1996 Will\'\s Way');
	data.addColumn('number', '1997 Deputy Commander');
	data.addColumn('number', '1998 Coronado\'\s Quest');
	data.addColumn('number', '1999 Lemon Drop Kid');
	data.addColumn('number', '2000 Unshaded');
	data.addColumn('number', '2001 Point Given');
	data.addColumn('number', '2002 Medaglia d\'\Oro');
	data.addColumn('number', '2003 Ten Most Wanted');
	data.addColumn('number', '2004 Birdstone');
	data.addColumn('number', '2005 Flower Alley');
	data.addColumn('number', '2006 Bernardini');
	data.addColumn('number', '2007 Street Sense');
	data.addColumn('number', '2008 Colonel John');
	data.addColumn('number', '2009 Summer Bird');
	data.addColumn('number', '2010 Afleet Express');
	data.addColumn('number', '2011 Stay Thirsty');
	data.addColumn('number', '2012 Golden Ticket');
	data.addColumn('number', '2012 Alpha');
	data.addColumn('number', '2013 Will Take Charge');
	data.addColumn('number', '2014 V. E. Day');
	data.addColumn('number', '2015 Keen Ice');
	data.addColumn('number', '2016 Arrogate');
	data.addColumn('number', '2017 West Coast');
	data.addColumn('number', '2018 Catholic Boy');


	
	data.addRows([ 
		['1/4 mile',  	1, -2, -4.25, -0.5, -1.5, -1.75, -2.5, -0.5, -1.25, -6, -1.5, -0.5, -3, -4, -2.5, 1.5, -2.75, -2, -3.5, -3.25, 0.5, -2.5, -2.5, -4, -8.5, -3, 0.5, 1, -.5],
		['1/2 mile',		1, -3, -6.75, -0.1, -1.5, -2, -0.1, -1, -1, -5, -1.5, -0.1, -5, -5.5, -0.5, 0.5, -1.5, -2, -1.5, -5, -1, -3, -2, -4.25, -14.5, -5, 1, 1, -.5],
		['3/4 mile',		1, -2, -3.25, 3, -2, -0.5, -0.5, -0.5, -0.5, -3.25, -0.5, 0.5, -2, -1.25, -2.5, 0.5, -1, -2, -1.5, -4, -1, -2.5, -2, -4, -10, -4.5, 0.5, 0.5, -.5],
		['1 mile',		0.1, -0.5, -0.5, 4, 0.5, 0.1, 1, 1.5, -0.1, 0.3, -0.5, 1.5, 0.3, -0.1, -0.5, 1, -0.1, -2, 1, 1, 1.5, 0.1, -0.1, -3.5, -5.5, -4.5, 2, 0.5, -.3],
		['Straight',  	0.1, 2, -0.1, 1, 0.5, 0.1, 0.3, 1.5, 0.1, -0.5, 0.3, 1, 0.5, 1.5, 0.5, 4.5, 0.3, -0.5, 2, 0.5, 1.5, 1, -1, -1, -3, -2.5, 7.5, 0.5, 2.5],
		['Finish',  	 	0.1, 4.5, 2, 0.1, 4.5, 0.75, 0.1, 0.1, 0.75, 0.3, 3.5, 0.5, 4.5, 2.5, 2.5, 7.5, 0.5, 0.1, 3.5, 0.1, 1.25, 0.3, 0.3, 0.1, 0.1, 0.75, 13.5, 3.25, 4]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');
	data2.addColumn('number', '1991 Corporate Report');
	data2.addColumn('number', '1992 Thunder Rumble');
	data2.addColumn('number', '1993 Sea Hero');
	data2.addColumn('number', '1994 Holy Bull');
	data2.addColumn('number', '1995 Thunder Gulch');
	data2.addColumn('number', '1996 Will\'\s Way');
	data2.addColumn('number', '1997 Deputy Commander');
	data2.addColumn('number', '1998 Coronado\'\s Quest');
	data2.addColumn('number', '1999 Lemon Drop Kid');

data2.addRows([ 
		['1/4 mile',  	1, -2, -4.25, -0.5, -1.5, -1.75, -2.5, -0.5, -1.25],
		['1/2 mile',		1, -3, -6.75, -0.1, -1.5, -2, -0.1, -1, -1],
		['3/4 mile',		1, -2, -3.25, 3, -2, -0.5, -0.5, -0.5, -0.5],
		['1 mile',		0.1, -0.5, -0.5, 4, 0.5, 0.1, 1, 1.5, -0.1],
		['Straight',  	0.1, 2, -0.1, 1, 0.5, 0.1, 0.3, 1.5, 0.1],
		['Finish',  	 	0.1, 4.5, 2, 0.1, 4.5, 0.75, 0.1, 0.1, 0.75]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Unshaded');
	data3.addColumn('number', '2001 Point Given');
	data3.addColumn('number', '2002 Medaglia d\'\Oro');
	data3.addColumn('number', '2003 Ten Most Wanted');
	data3.addColumn('number', '2004 Birdstone');
	data3.addColumn('number', '2005 Flower Alley');
	data3.addColumn('number', '2006 Bernardini');
	data3.addColumn('number', '2007 Street Sense');
	data3.addColumn('number', '2008 Colonel John');
	data3.addColumn('number', '2009 Summer Bird');
	

	
	data3.addRows([ 
		['1/4 mile',  	-6, -1.5, -0.5, -3, -4, -2.5, 1.5, -2.75, -2, -3.5],
		['1/2 mile',		-5, -1.5, -0.1, -5, -5.5, -0.5, 0.5, -1.5, -2, -1.5],
		['3/4 mile',		-3.25, -0.5, 0.5, -2, -1.25, -.5, 0.5, -1, -2, -1.5],
		['1 mile',		0.3, -0.5, 1.5, 0.3, -0.1, -0.5, 1, -0.1, -2, 1],
		['Straight',  	-0.5, 0.3, 1, 0.5, 1.5, 0.5, 4.5, 0.3, -0.5, 2],
		['Finish',  	 	0.3, 3.5, 0.5, 4.5, 2.5, 2.5, 7.5, 0.5, 0.1, 3.5]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');
	data4.addColumn('number', '2010 Afleet Express');
	data4.addColumn('number', '2011 Stay Thirsty');
	data4.addColumn('number', '2012 Golden Ticket');
	data4.addColumn('number', '2012 Alpha');
	data4.addColumn('number', '2013 Will Take Charge');
	data4.addColumn('number', '2014 V. E. Day');
	data4.addColumn('number', '2015 Keen Ice');
	data4.addColumn('number', '2016 Arrogate');
	data4.addColumn('number', '2017 West Coast');
	data4.addColumn('number', '2018 Catholic Boy');

	
	data4.addRows([ 
		['1/4 mile',  	-3.25, 0.5, -2.5, -2.5, -4, -8.5, -3, 0.5, 1, -.5],
		['1/2 mile',		-5, -1, -3, -2, -4.25, -14.5, -5, 1, 1, -.5],
		['3/4 mile',		-4, -1, -2.5, -2, -4, -10, -4.5, 0.5, 0.5, -.5],
		['1 mile',		1, 1.5, 0.1, -0.1, -3.5, -5.5, -4.5, 2, 0.5, -.3],
		['Straight',  	0.5, 1.5, 1, -1, -1, -3, -2.5, 7.5, 1, 2.5],
		['Finish',  	 	0.1, 1.25, 0.3, 0.3, 0.1, 0.1, 0.75, 13.5, 3.25, 4]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Travers 1991-2018', titleTextStyle: { fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Travers 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Travers 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Travers 2010-2018', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};





// draw charts
	var chart = new google.charts.Line(document.getElementById('all'));
	chart.draw(data, google.charts.Line.convertOptions(options));

	var chart2 = new google.charts.Line(document.getElementById('nineties'));
	chart2.draw(data2, google.charts.Line.convertOptions(options2));

	var chart3 = new google.charts.Line(document.getElementById('aughts'));
	chart3.draw(data3, google.charts.Line.convertOptions(options3));

	var chart4 = new google.charts.Line(document.getElementById('teens'));
	chart4.draw(data4, google.charts.Line.convertOptions(options4));

	
function resizeChart () {
	chart.draw(data, options);
	chart2.draw(data2, options2);
	chart3.draw(data3, options3);
	chart4.draw(data4, options4);

}
if (document.addEventListener) {
    window.addEventListener('resize', resizeChart);
}
else if (document.attachEvent) {
    window.attachEvent('onresize', resizeChart);
}
else {
    window.resize = resizeChart;
}
      }
