google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
		data.addColumn('string', 'Point of Call');
		data.addColumn('number', '1991 Dance Floor');
		data.addColumn('number', '1992 Wild Gale');
		data.addColumn('number', '1993 War Deputy');
		data.addColumn('number', '1994 Jambalaya Jazz');
		data.addColumn('number', '1995 Ide');
		data.addColumn('number', '1996 Concerto');
		data.addColumn('number', '1997 Cape Town');
		data.addColumn('number', '1998 Exploit');
		data.addColumn('number', '1999 Captain Steve');
		data.addColumn('number', '2000 Dollar Bill');
		data.addColumn('number', '2001 Repent');
		data.addColumn('number', '2002 Soto');
		data.addColumn('number', '2003 The Cliff\'\s Edge');
		data.addColumn('number', '2004 Greater Good');
		data.addColumn('number', '2005 Private Vow');
		data.addColumn('number', '2006 Tiz Wonderful');
		data.addColumn('number', '2007 Anak Nakal');
		data.addColumn('number', '2008 Beethoven');
		data.addColumn('number', '2009 Super Saver');
		data.addColumn('number', '2010 Santiva');
		data.addColumn('number', '2011 Gemologist');
		data.addColumn('number', '2012 Uncaptured');
		data.addColumn('number', '2013 Tapiture');
		data.addColumn('number', '2014 El Kabeir');
		data.addColumn('number', '2015 Airoforce');
		data.addColumn('number', '2016 McCraken');
		data.addColumn('number', '2017 Enticed');
		data.addColumn('number', '2018 Signalman');


	
	data.addRows([ 
		['1/4 mile',  	-4, -9.75, -8.5, -2.5, -0.2, -0.5, -2.25, 1, -1.5, -4.5, -5, -16.25, -4.75, -8.25, -0.5, -0.2, -2.75, -3, 1.5, -2, -1, -1, -3, 2.5, -3.75, -8.5, -1, -5],
		['1/2 mile',		-6, -7.5, -7.5, -4.5, -1, -1.5, -2.5, 0.2, -1, -1.75, -2.5, -14.25, -1.5, -10.25, -1, -0.2, -2.5, -5, 1.5, -0.5, -2.5, -0.5, -1, 2, -3.5, -5, -1.5, -3.5],
		['3/4 mile',		-3, -7.35, -8.5, -2, -1.75, -0.2, -2.5, 0.2, 1, -2.5, -3, -6.25, 0.2, -6.25, -0.2, -0.2, -1.75, -1.5, 0.2, 0.5, -0.5, 0.2, 0.2, 1.5, -2, -3.5, -2, -1.5],
		['Straight',  	3.5, -2.5, 1.5, 1, 0.5, 0.2, -3, 0.5, 3, -0.2, -0.2, 1.5, 1.5, -1.5, 2, 0.2, -0.5, 0.3, 5, 0.3, 0.5, -0.2, 2.5, 2, -0.5, -0.2, -0.5, -.2],
		['Finish',  	 	6, 0.3, 2.25, 1, 0.75, 0.75, 0.5, 1.75, 5.75, 1.25, 1.25, 1, 0.75, 1.75, 2.25, 0.5, 0.5, 0.2, 5, 0.5, 1.75, 0.3, 4.25, 0.2, 1.75, 1.25, 0.2, .3]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
		data2.addColumn('string', 'Point of Call');
		data2.addColumn('number', '1991 Dance Floor');
		data2.addColumn('number', '1992 Wild Gale');
		data2.addColumn('number', '1993 War Deputy');
		data2.addColumn('number', '1994 Jambalaya Jazz');
		data2.addColumn('number', '1995 Ide');
		data2.addColumn('number', '1996 Concerto');
		data2.addColumn('number', '1997 Cape Town');
		data2.addColumn('number', '1998 Exploit');
		data2.addColumn('number', '1999 Captain Steve');

data2.addRows([ 
		['1/4 mile',  	-4, -9.75, -8.5, -2.5, -0.2, -0.5, -2.25, 1, -1.5],
		['1/2 mile',		-6, -7.5, -7.5, -4.5, -1, -1.5, -2.5, 0.2, -1],
		['3/4 mile',		-3, -7.35, -8.5, -2, -1.75, -0.2, -2.5, 0.2, 1],
		['Straight',  	3.5, -2.5, 1.5, 1, 0.5, 0.2, -3, 0.5, 3],
		['Finish',  	 	6, 0.3, 2.25, 1, 0.75, 0.75, 0.5, 1.75, 5.75]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Dollar Bill');
	data3.addColumn('number', '2001 Repent');
	data3.addColumn('number', '2002 Soto');
	data3.addColumn('number', '2003 The Cliff\'\s Edge');
	data3.addColumn('number', '2004 Greater Good');
	data3.addColumn('number', '2005 Private Vow');
	data3.addColumn('number', '2006 Tiz Wonderful');
	data3.addColumn('number', '2007 Anak Nakal');
	data3.addColumn('number', '2008 Beethoven');
	data3.addColumn('number', '2009 Super Saver');

	

	
	data3.addRows([ 
		['1/4 mile',  	-4.5, -5, -16.25, -4.75, -8.25, -0.5, -0.2, -2.75, -3, 1.5],
		['1/2 mile',		-1.75, -2.5, -14.25, -1.5, -10.25, -1, -0.2, -2.5, -5, 1.5],
		['3/4 mile',		-2.5, -3, -6.25, 0.2, -6.25, -0.2, -0.2, -1.75, -1.5, 0.2],
		['Straight',  	-0.2, -0.2, 1.5, 1.5, -1.5, 2, 0.2, -0.5, 0.3, 5],
		['Finish',  	 	1.25, 1.25, 1, 0.75, 1.75, 2.25, 0.5, 0.5, 0.2, 5]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Santiva');
	data4.addColumn('number', '2011 Gemologist');
	data4.addColumn('number', '2012 Uncaptured');
	data4.addColumn('number', '2013 Tapiture');
	data4.addColumn('number', '2014 El Kabeir');
	data4.addColumn('number', '2015 Airoforce');
	data4.addColumn('number', '2016 McCraken');
	data4.addColumn('number', '2017 Enticed');
	data4.addColumn('number', '2018 Signalman');


	
	data4.addRows([ 
		['1/4 mile',  	-2, -1, -1, -3, 2.5, -3.75, -8.5, -1, -5],
		['1/2 mile',		-0.5, -2.5, -0.5, -1, 2, -3.5, -5, -1.5, -3.5],
		['3/4 mile',		0.5, -0.5, 0.2, 0.2, 1.5, -2, -3.5, -2, -1.5],
		['Straight',		0.3, 0.5, -0.2, 2.5, 2, -0.5, -0.2, -0.5, -.2],
		['Finish',  	 	0.5, 1.75, 0.3, 4.25, 0.2, 1.75, 1.25, 0.2, .8]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Kentucky Jockey Club 1991-2018', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Kentucky Jockey Club 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Kentucky Jockey Club 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Kentucky Jockey Club 2010-2018', titleTextStyle: {color: '#666', fontSize: 12}}, 
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


