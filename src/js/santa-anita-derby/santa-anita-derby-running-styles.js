google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Dinard');
	data.addColumn('number', '1992 A.P. Indy');
	data.addColumn('number', '1993 Personal Hope');
	data.addColumn('number', '1994 Brocco');
	data.addColumn('number', '1995 Larry the Legend');
	data.addColumn('number', '1996 Cavonnier');
	data.addColumn('number', '1997 Free House');
	data.addColumn('number', '1998 Indian Charlie');
	data.addColumn('number', '1999 General Challenge');
	data.addColumn('number', '2000 The Deputy (IRE)');
	data.addColumn('number', '2001 Point Given');
	data.addColumn('number', '2002 Came Home');
	data.addColumn('number', '2003 Buddy Gil');
	data.addColumn('number', '2004 Buddy Gil');
	data.addColumn('number', '2005 Buzzards Bay');
	data.addColumn('number', '2006 Brother Derek');
	data.addColumn('number', '2007 Tiago');
	data.addColumn('number', '2008 Colonel John');
	data.addColumn('number', '2009 Pioneerof the Nile');
	data.addColumn('number', '2010 Sidney\'\s Candy');
	data.addColumn('number', '2011 Midnight Interlude');
	data.addColumn('number', '2012 I\'\ll Have Another');
	data.addColumn('number', '2013 Goldencents');
	data.addColumn('number', '2014 California Chrome');
	data.addColumn('number', '2015 Dortmund');
	data.addColumn('number', '2016 Exaggerator');
	data.addColumn('number', '2017 Gormley');
	data.addColumn('number', '2018 Justify');
	data.addColumn('number', '2019 Roadster');

	data.addRows([ 
		['1/4 mile',  	-3.75, -4, 1.5, -7, -1, -3, -1, -2.5, -1.5, -2.5, -1, -1, -3.25, -4.5, -0.5, 1.5, -10.75, -4.5, -1.5, 1, -2, -2.5, -0.5, -0.5, 0.5, -13, -3.25, 1.5, -2],
		['1/2 mile',		-4.75, -2, 0.5, -10.5, -1, -1.75, -2.5, -2, -0.2, -1.5, -1, -1.5, -5, -4.75, 0.2, 3.5, -11.25, -4, 0.5, 1.5, -1.25, -2.5, -0.5, -0.2, 1, -16.5, -5.25, 3, -2],
		['3/4 mile',		-3.25, -3, -0.5, -3, -1, -1.25, -2.5, -1, 0.5, -1.5, 1, -2, -2.75, -2.75, 0.2, 1, -6.25, -6.25, -0.5, 1, -2, -2, -0.5, -0.2, 1, -9.5, -2.75, 1.5, -4.75],
		['Straight',  	-0.5, -0.5, 0.2, 0.2, -1.5, 0.5, -0.2, 3, 2.5, 0.5, 2.5, 0.2, 0.5, -1, 0.2, 2.5, -2.25, -3, 1, 4, -1.5, -0.5, 1, 5, 4, 4.5, -0.5, 1.5, -1],
		['Finish',  	 	0.5, 1.75, 0.75, 0.75, 0.2, 1.75, 0.2, 2.25, 3.5, 1, 5.5, 2.25, 0.2, 0.2, 0.5, 3.25, 0.5, 0.5, 1, 4.5, 0.2, 0.1, 1.25, 5.25, 4.25, 6.25, 0.5, 3, .5]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Dinard');
	data2.addColumn('number', '1992 A.P. Indy');
	data2.addColumn('number', '1993 Personal Hope');
	data2.addColumn('number', '1994 Brocco');
	data2.addColumn('number', '1995 Larry the Legend');
	data2.addColumn('number', '1996 Cavonnier');
	data2.addColumn('number', '1997 Free House');
	data2.addColumn('number', '1998 Indian Charlie');
	data2.addColumn('number', '1999 General Challenge');

data2.addRows([ 
		['1/4 mile',  	-3.75, -4, 1.5, -7, -1, -3, -1, -2.5, -1.5],
		['1/2 mile',		-4.75, -2, 0.5, -10.5, -1, -1.75, -2.5, -2, -0.2],
		['3/4 mile',		-3.25, -3, -0.5, -3, -1, -1.25, -2.5, -1, 0.5],
		['Straight',  	-0.5, -0.5, 0.2, 0.2, -1.5, 0.5, -0.2, 3, 2.5],
		['Finish',  	 	0.5, 1.75, 0.75, 0.75, 0.2, 1.75, 0.2, 2.25, 3.5]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 The Deputy (IRE)');
	data3.addColumn('number', '2001 Point Given');
	data3.addColumn('number', '2002 Came Home');
	data3.addColumn('number', '2003 Buddy Gil');
	data3.addColumn('number', '2004 Castledale (IRE)');
	data3.addColumn('number', '2005 Buzzards Bay');
	data3.addColumn('number', '2006 Brother Derek');
	data3.addColumn('number', '2007 Tiago');
	data3.addColumn('number', '2008 Colonel John');
	data3.addColumn('number', '2009 Pioneerof the Nile');

	

	
	data3.addRows([ 
		['1/4 mile',  	-2.5, -1, -1, -3.25, -4.5, -0.5, 1.5, -10.75, -4.5, -1.5],
		['1/2 mile',		-1.5, -1, -1.5, -5, -4.75, 0.2, 3.5, -11.25, -4, 0.5],
		['3/4 mile',		-1.5, 1, -2, -2.75, -2.75, 0.2, 1, -6.25, -6.25, -0.5],
		['Straight',  	0.5, 2.5, 0.2, 0.5, -1, 0.2, 2.5, -2.25, -3, 1],
		['Finish',  	 	1, 5.5, 2.25, 0.2, 0.2, 0.5, 3.25, 0.5, 0.5, 1]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Sidney\'\s Candy');
	data4.addColumn('number', '2011 Midnight Interlude');
	data4.addColumn('number', '2012 I\'\ll Have Another');
	data4.addColumn('number', '2013 Goldencents');
	data4.addColumn('number', '2014 California Chrome');
	data4.addColumn('number', '2015 Dortmund');
	data4.addColumn('number', '2016 Exaggerator');
	data4.addColumn('number', '2017 Gormley');
	data4.addColumn('number', '2018 Justify');
	data4.addColumn('number', '2019 Roadster');
	
	data4.addRows([ 
		['1/4 mile',  	1, -2, -2.5, -0.5, -0.5, 0.5, -13, -3.25, 1.5, -2],
		['1/2 mile',		1.5, -1.25, -2.5, -0.5, -0.2, 1, -16.5, -5.25, 3, -2],
		['3/4 mile',		1, -2, -2, -0.5, -0.2, 1, -9.5, -2.75, 1.5, -4.75],
		['Straight',  	4, -1.5, -0.5, 1, 5, 4, 4.5, -0.5, 1.5, -1],
		['Finish',  	 	4.5, 0.2, 0.1, 1.25, 5.25, 4.25, 6.25, 0.5, 3, .5]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Santa Anita Derby 1991-2018', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Santa Anita Derby 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Santa Anita Derby 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Santa Anita Derby 2010-2019', titleTextStyle: {color: '#666', fontSize: 12}}, 
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

