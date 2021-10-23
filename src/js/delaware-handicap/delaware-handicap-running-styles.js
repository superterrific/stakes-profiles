google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Crowned');
	data.addColumn('number', '1992 Brilliant Brass');
	data.addColumn('number', '1993 Green Darlin');
	data.addColumn('number', '1994 With a Wink');
	data.addColumn('number', '1995 Night Fax');
	data.addColumn('number', '1996 Urbane');
	data.addColumn('number', '1997 Power Play');
	data.addColumn('number', '1998 Amarillo');
	data.addColumn('number', '1999 Tap to Music');
	data.addColumn('number', '2000 Lu Ravi');
	data.addColumn('number', '2001 Irving\'\s Baby');
	data.addColumn('number', '2002 Summer Colony');
	data.addColumn('number', '2003 Wild Spirit (CHI)');
	data.addColumn('number', '2004 Summer Wind Dancer');
	data.addColumn('number', '2005 Island Sand');
	data.addColumn('number', '2006 Fleet Indian');
	data.addColumn('number', '2007 Unbridled Belle');
	data.addColumn('number', '2008 Hystericalady');
	data.addColumn('number', '2009 Swift Temper');
	data.addColumn('number', '2010 Life At Ten');
	data.addColumn('number', '2011 Blind Luck');
	data.addColumn('number', '2012 Royal Delta');
	data.addColumn('number', '2013 Royal Delta');
	data.addColumn('number', '2014 Belle Gallantey');
	data.addColumn('number', '2015 Sheer Drama');
	data.addColumn('number', '2016 I\'\m a Chatterbox');
	data.addColumn('number', '2017 Songbird');
	data.addColumn('number', '2018 Elate');
	data.addColumn('number', '2019 Elate');


	
	data.addRows([ 
		['1/4 mile',  	-2.5, -0.2, -13.5, 1.5, -2.5, 1.5, -10.25, -5, -1, 0.2, 0.5, -1.5, -1.5, -5, -5, 0.2, -3, -1, 1.5, 0.5, -8.25, -4.5, 1.5, 1.5, -2, -0.2, 2.5, -3.25, -3.5],
		['1/2 mile',		-0.5, -1, -15, 1, -3.5, 2, -14, -10.5, -0.5, 1, 1, -1.5, -1.5, -6.5, -5.5, 1, -1.5, -0.5, 1.5, 1, -7, -4, 5, 1, -2, -1.5, 2.5, -2.25, -4],
		['3/4 mile',		1.5, -1, -7.5, 0.5, -2.5, 1.5, -12, -5, -0.5, 0.2, 0.5, -2, -0.2, -3, -6, 1, -1.5, -0.5, 1, 1.5, -3.5, -3.5, 7, 1, -2, -0.5, 1.5, .5, -3.75],
		['1 mile',  		1.5, -1, -4.5, 1, -2, 1.5, -3, -1, -0.2, 1, 0.3, -1.5, -0.2, -3, -1.5, 2.5, -1.5, 0.5, 0.5, 1, -2, 0.5, 6.5, 0.2, -0.2, -0.2, 0.5, .5, 5],
		['Straight',  	2.5, 0.2, -2, 2, -2, 1.5, 1.5, -0.5, 0.5, 1.5, 1, -2.25, 2, -4, 0.2, 4, 2, 3.5, 2.5, 3.5, 0.2, 1, 8, 1.5, 0.2, 2, 1, 4, 4],
		['Finish',  	 	0.2, 1.75, 1.75, 1.5, 1.5, 3.25, 0.75, 0.75, 1.75, 1, 3.75, 0.3, 8, 1.25, 3.75, 5.5, 7.75, 4, 2.25, 3, 0.1, 0.3, 10.75, 2.75, 2, 2.25, 1, 3.25, 4.5]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Crowned');
	data2.addColumn('number', '1992 Brilliant Brass');
	data2.addColumn('number', '1993 Green Darlin');
	data2.addColumn('number', '1994 With a Wink');
	data2.addColumn('number', '1995 Night Fax');
	data2.addColumn('number', '1996 Urbane');
	data2.addColumn('number', '1997 Power Play');
	data2.addColumn('number', '1998 Amarillo');
	data2.addColumn('number', '1999 Tap to Music');

data2.addRows([ 
		['1/4 mile',  	-2.5, -0.2, -13.5, 1.5, -2.5, 1.5, -10.25, -5, -1],
		['1/2 mile',		-0.5, -1, -15, 1, -3.5, 2, -14, -10.5, -0.5],
		['3/4 mile',		1.5, -1, -7.5, 0.5, -2.5, 1.5, -12, -5, -0.5],
		['1 mile',		1.5, -1, -4.5, 1, -2, 1.5, -3, -1, -0.2],
		['Straight',  	2.5, 0.2, -2, 2, -2, 1.5, 1.5, -0.5, 0.5],
		['Finish',  	 	0.2, 1.75, 1.75, 1.5, 1.5, 3.25, 0.75, 0.75, 1.75]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Lu Ravi');
	data3.addColumn('number', '2001 Irving\'\s Baby');
	data3.addColumn('number', '2002 Summer Colony');
	data3.addColumn('number', '2003 Wild Spirit (CHI)');
	data3.addColumn('number', '2004 Summer Wind Dancer');
	data3.addColumn('number', '2005 Island Sand');
	data3.addColumn('number', '2006 Fleet Indian');
	data3.addColumn('number', '2007 Unbridled Belle');
	data3.addColumn('number', '2008 Hystericalady');
	data3.addColumn('number', '2009 Swift Temper');

	

	
	data3.addRows([ 
		['1/4 mile',  	0.2, 0.5, -1.5, -1.5, -5, -5, 0.2, -3, -1, 1.5],
		['1/2 mile',		1, 1, -1.5, -1.5, -6.5, -5.5, 1, -1.5, -0.5, 1.5],
		['3/4 mile',		0.2, 0.5, -2, -0.2, -3, -6, 1, -1.5, -0.5, 1],
		['1 mile',		1, 0.3, -1.5, -0.2, -3, -1.5, 2.5, -1.5, 0.5, 0.5],
		['Straight',  	1.5, 1, -2.25, 2, -4, 0.2, 4, 2, 3.5, 2.5],
		['Finish',  	 	1, 3.75, 0.3, 8, 1.25, 3.75, 5.5, 7.75, 4, 2.25]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Life At Ten');
	data4.addColumn('number', '2011 Blind Luck');
	data4.addColumn('number', '2012 Royal Delta');
	data4.addColumn('number', '2013 Royal Delta');
	data4.addColumn('number', '2014 Belle Gallantey');
	data4.addColumn('number', '2015 Sheer Drama');
	data4.addColumn('number', '2016 I\'\m a Chatterbox');
	data4.addColumn('number', '2017 Songbird');
	data4.addColumn('number', '2018 Elate');
	data4.addColumn('number', '2019 Elate');


	
	data4.addRows([ 
		['1/4 mile',  	0.5, -8.25, -4.5, 1.5, 1.5, -2, -0.2, 2.5, -3.25, -3.25],
		['1/2 mile',		1, -7, -4, 5, 1, -2, -1.5, 2.5, -2.25, -4],
		['3/4 mile',		1.5, -3.5, -3.5, 7, 1, -2, -0.5, 1.5, .5, -3.75],
		['1 mile',		1, -2, 0.5, 6.5, 0.2, -0.2, -0.2, 0.5, .5, .5],
		['Straight',  	3.5, 0.2, 1, 8, 1.5, 0.2, 2, 1, 4, 4],
		['Finish',  	 	3, 0.1, 0.3, 10.75, 2.75, 2, 2.25, 1, 3.25, 4.5]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Delaware Handicap 1991-2019', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Delaware Handicap 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Delaware Handicap 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Delaware Handicap 2010-2019', titleTextStyle: {color: '#666', fontSize: 12}}, 
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
