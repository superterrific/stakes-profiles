google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Fly So Free');
	data.addColumn('number', '1992 Technology');
	data.addColumn('number', '1993 Bull Inthe Heather');
	data.addColumn('number', '1994 Holy Bull');
	data.addColumn('number', '1995 Thunder Gulch');
	data.addColumn('number', '1996 Unbridled\'\s Song');
	data.addColumn('number', '1997 Captain Bodgit');
	data.addColumn('number', '1998 Lil\'\s Lad');
	data.addColumn('number', '1999 Vicar');
	data.addColumn('number', '2000 Hal\'\s Hope');
	data.addColumn('number', '2001 Monarchos');
	data.addColumn('number', '2002 Harlan\'\s Holiday');
	data.addColumn('number', '2003 Empire Maker');
	data.addColumn('number', '2004 Friends Lake');
	data.addColumn('number', '2005 High Fly');
	data.addColumn('number', '2006 Barbaro');
	data.addColumn('number', '2007 Scat Daddy');
	data.addColumn('number', '2008 Big Brown');
	data.addColumn('number', '2009 Quality Road');
	data.addColumn('number', '2010 Ice Box');
	data.addColumn('number', '2011 Dialed In');
	data.addColumn('number', '2012 Take Charge Indy');
	data.addColumn('number', '2013 Orb');
	data.addColumn('number', '2014 Constitution');
	data.addColumn('number', '2015 Materiality');
	data.addColumn('number', '2016 Nyquist');
	data.addColumn('number', '2017 Always Dreaming');
	data.addColumn('number', '2018 Audible');
	data.addColumn('number', '2019 Maximum Security');


	data.addRows([ 
		['1/4 mile',  	-2.5, -2.5, -8.25, 2, -2.5, -0.5, -6.5, 1.5, -3.25, 0.5, -7.75, -5.25, -2.5, -4.5, -1, -1.5, -3, 1, -1.5, -11.75, -9, 0.5, -2.5, -1.5, -0.2, 0.5, -1, -11.5, 1],
		['1/2 mile',		-2, -4, -8.25, 2, -1.5, -2, -8.5, 2, -1.25, 0.2, -7.75, -7.5, -1.5, -8.5, -1.5, -1.5, -1.5, 1, -0.5, -9.5, -10.5, 1, -4, -2, 0.5, 0.5, -1.5, -8.5, .5],
		['3/4 mile',		-1, -0.5, -4.75, 2.5, -0.5, 0.2, -5.5, -0.2, -1.5, 0.5, -1.5, -1.5, -1, -4, -1.5, -0.5, -1, 1.5, 0.2, -7.75, -7, 0.5, -1.5, -2, 0.5, 0.5, -1, -2, 1],
		['Straight',  	2, 1, -0.2, 3, -1.5, 3, -1, 0.2, 0.2, 0.2, 2, 2.5, 0.5, 3, 0.2, -0.2, 0.5, 3, 1, -2.5, -3.5, 1, -1, 0.2, 1, 2.5, 2.5, 2, 3],
		['Finish',  	 	1, 4.5, 2, 5.75, 0.1, 5.75, 2.5, 0.1, 0.1, 0.2, 4.5, 3.5, 9.75, 0.75, 1.5, 0.5, 1.25, 5, 1.75, 0.1, 0.2, 1, 2.75, 0.1, 1.5, 3.25, 5, 3, 3.5] 
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Fly So Free');
	data2.addColumn('number', '1992 Technology');
	data2.addColumn('number', '1993 Bull Inthe Heather');
	data2.addColumn('number', '1994 Holy Bull');
	data2.addColumn('number', '1995 Thunder Gulch');
	data2.addColumn('number', '1996 Unbridled\'\s Song');
	data2.addColumn('number', '1997 Captain Bodgit');
	data2.addColumn('number', '1998 Lil\'\s Lad');
	data2.addColumn('number', '1999 Vicar');

data2.addRows([ 
		['1/4 mile',  	-2.5, -2.5, -8.25, 2, -2.5, -0.5, -6.5, 1.5, -3.25],
		['1/2 mile',		-2, -4, -8.25, 2, -1.5, -2, -8.5, 2, -1.25],
		['3/4 mile',		-1, -0.5, -4.75, 2.5, -0.5, 0.2, -5.5, -0.2, -1.5],
		['Straight',  	2, 1, -0.2, 3, -1.5, 3, -1, 0.2, 0.2],
		['Finish',  	 	1, 4.5, 2, 5.75, 0.1, 5.75, 2.5, 0.1, 0.1]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Hal\'\s Hope');
	data3.addColumn('number', '2001 Monarchos');
	data3.addColumn('number', '2002 Harlan\'\s Holiday');
	data3.addColumn('number', '2003 Empire Maker');
	data3.addColumn('number', '2004 Friends Lake');
	data3.addColumn('number', '2005 High Fly');
	data3.addColumn('number', '2006 Barbaro');
	data3.addColumn('number', '2007 Scat Daddy');
	data3.addColumn('number', '2008 Big Brown');
	data3.addColumn('number', '2009 Quality Road');

	

	
	data3.addRows([ 
		['1/4 mile',  	0.5, -7.75, -5.25, -2.5, -4.5, -1, -1.5, -3, 1, -1.5],
		['1/2 mile',		0.2, -7.75, -7.5, -1.5, -8.5, -1.5, -1.5, -1.5, 1, -0.5],
		['3/4 mile',		0.5, -1.5, -1.5, -1, -4, -1.5, -0.5, -1, 1.5, 0.2],
		['Straight',  	0.2, 2, 2.5, 0.5, 3, 0.2, -0.2, 0.5, 3, 1],
		['Finish',  	 	0.2, 4.5, 3.5, 9.75, 0.75, 1.5, 0.5, 1.25, 5, 1.75]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Ice Box');
	data4.addColumn('number', '2011 Dialed In');
	data4.addColumn('number', '2012 Take Charge Indy');
	data4.addColumn('number', '2013 Orb');
	data4.addColumn('number', '2014 Constitution');
	data4.addColumn('number', '2015 Materiality');
	data4.addColumn('number', '2016 Nyquist');
	data4.addColumn('number', '2017 Always Dreaming');
	data4.addColumn('number', '2018 Audible');
	data4.addColumn('number', '2019 Maximum Security');

	
	data4.addRows([ 
		['1/4 mile',  	-11.75, -9, 0.5, -2.5, -1.5, -0.2, 0.5, -1, -11.5, 1],
		['1/2 mile',		-9.5, -10.5, 1, -4, -2, 0.5, 0.5, -1.5, -8.5, .5],
		['3/4 mile',		-7.75, -7, 0.5, -1.5, -2, 0.5, 0.5, -1, -2, 1],
		['Straight',  	-2.5, -3.5, 1, -1, 0.2, 1, 2.5, 2.5, 2, 3],
		['Finish',  	 	0.1, 0.2, 1, 2.75, 0.1, 1.5, 3.25, 5, 3, 3.5]
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
