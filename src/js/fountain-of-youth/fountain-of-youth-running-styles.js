google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Fly So Free');
	data.addColumn('number', '1992 Dance Floor');
	data.addColumn('number', '1993 Duc d\'\Sligovil');
	data.addColumn('number', '1993 Storm Tower');
	data.addColumn('number', '1994 Dehere');
	data.addColumn('number', '1995 Thunder Gulch');
	data.addColumn('number', '1996 Built for Pleasure');
	data.addColumn('number', '1997 Pulpit');
	data.addColumn('number', '1998 Lil\'\s Lad');
	data.addColumn('number', '1999 Vicar');
	data.addColumn('number', '2000 High Yield');
	data.addColumn('number', '2001 Songandaprayer');
	data.addColumn('number', '2002 Booklet');
	data.addColumn('number', '2003 Trust N Luck');
	data.addColumn('number', '2004 Read the Footnotes');
	data.addColumn('number', '2005 High Fly');
	data.addColumn('number', '2007 Scat Daddy');
	data.addColumn('number', '2008 Cool Coal Man');
	data.addColumn('number', '2009 Quality Road');
	data.addColumn('number', '2010 Eskendereya');
	data.addColumn('number', '2011 Soldat');
	data.addColumn('number', '2012 Union Rags');
	data.addColumn('number', '2013 Orb');
	data.addColumn('number', '2014 Wildcat Red');
	data.addColumn('number', '2016 Mohaymen');
	data.addColumn('number', '2017 Gunnevera');
	data.addColumn('number', '2018 Promises Fulfilled');
	data.addColumn('number', '2019 Code of Honor');



	
	data.addRows([ 
		['1/4 mile',  	-1.5, -4.5, -1, -2, -7.5, -2, -2.25, -2, 1.5, 0.2, 1, 1.5, 2.5, 2, -2.5, 2, -5, -2.5, -1.5, -2, 1, -1, -8, 0.2, -3.5, -13, 1, -7.5],
		['1/2 mile',		-1, -2, -0.5, -1, -8.5, -2, -4, -4, 3, 0.5, 1.5, 4, 1.5, 1.5, -1, 1.5, -4.5, -4, -1, -1, 0.2, -2, -8, -0.2, -1.5, -9, 1, -8.5],
		['3/4 mile',		0.5, 1, 0.5, -0.2, -3, -0.2, -0.5, -1.5, 1, 0.2, 0.2, 2.5, 0.5, 1.5, -1, 1, -3, -2, -0.5, 1, 0.2, -2.5, -5.5, 0.2, -0.5, -4, 1, -4],
		['Straight',  	1, 3, 3, 0.5, 0.2, 0.2, -0.2, 0.2, 1.5, 0.2, 1, 3, 2, 4, -0.5, 0.5, -4, 1.5, 1.5, 4, 3, 2, -1.5, 0.2, 1, 0.5, 1, -.5],
		['Finish',  	 	6, 4.5, 2.25, 3, 0.75, 0.3, 0.3, 1.5, 2.25, 0.3, 3.25, 2.5, 0.1, 5.25, 0.3, 0.75, 0.1, 0.5, 4.25, 8.5, 2, 4, 0.5, 0.2, 2.25, 5.75, 2.25, .75]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Fly So Free');
	data2.addColumn('number', '1992 Dance Floor');
	data2.addColumn('number', '1993 Duc d\'\Sligovil');
	data2.addColumn('number', '1993 Storm Tower');
	data2.addColumn('number', '1994 Dehere');
	data2.addColumn('number', '1995 Thunder Gulch');
	data2.addColumn('number', '1996 Built for Pleasure');
	data2.addColumn('number', '1997 Pulpit');
	data2.addColumn('number', '1998 Lil\'\s Lad');
	data2.addColumn('number', '1999 Vicar');

data2.addRows([ 
		['1/4 mile',  	-1.5, -4.5, -1, -2, -7.5, -2, -2.25, -2, 1.5, 0.2],
		['1/2 mile',		-1, -2, -0.5, -1, -8.5, -2, -4, -4, 3, 0.5],
		['3/4 mile',		0.5, 1, 0.5, -0.2, -3, -0.2, -0.5, -1.5, 1, 0.2],
		['Straight',  	1, 3, 3, 0.5, 0.2, 0.2, -0.2, 0.2, 1.5, 0.2],
		['Finish',  	 	6, 4.5, 2.25, 3, 0.75, 0.3, 0.3, 1.5, 2.25, 0.3]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 High Yield');
	data3.addColumn('number', '2001 Songandaprayer');
	data3.addColumn('number', '2002 Booklet');
	data3.addColumn('number', '2003 Trust N Luck');
	data3.addColumn('number', '2004 Read the Footnotes');
	data3.addColumn('number', '2005 High Fly');
	data3.addColumn('number', '2007 Scat Daddy');
	data3.addColumn('number', '2008 Cool Coal Man');
	data3.addColumn('number', '2009 Quality Road');

	

	
	data3.addRows([ 
		['1/4 mile',  	1, 1.5, 2.5, 2, -2.5, 2, -5, -2.5, -1.5 ],
		['1/2 mile',		1.5, 4, 1.5, 1.5, -1, 1.5, -4.5, -4, -1],
		['3/4 mile',		0.2, 2.5, 0.5, 1.5, -1, 1, -3, -2, -0.5],
		['Straight',  	1, 3, 2, 4, -0.5, 0.5, -4, 1.5, 1.5],
		['Finish',  	 	3.25, 2.5, 0.1, 5.25, 0.3, 0.75, 0.1, 0.5, 4.25]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Eskendereya');
	data4.addColumn('number', '2011 Soldat');
	data4.addColumn('number', '2012 Union Rags');
	data4.addColumn('number', '2013 Orb');
	data4.addColumn('number', '2014 Wildcat Red');
	data4.addColumn('number', '2016 Mohaymen');
	data4.addColumn('number', '2017 Gunnevera');
	data4.addColumn('number', '2018 Promises Fulfilled');
	data4.addColumn('number', '2019 Code of Honor');

	
	data4.addRows([ 
		['1/4 mile',  	-2, 1, -1, -8, 0.2, -3.5, -13, 1, -7.5],
		['1/2 mile',		-1, 0.2, -2, -8, -0.2, -1.5, -9, 1, -8.5],
		['3/4 mile',		1, 0.2, -2.5, -5.5, 0.2, -0.5, -4, 1, -4],
		['Straight',  	4, 3, 2, -1.5, 0.2, 1, 0.5, 1, -.5],
		['Finish',  	 	8.5, 2, 4, 0.5, 0.2, 2.25, 5.75, 2.25, .75]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call', titleTextStyle: {color: '#666', fontSize: 12}}, 
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
