google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Opening Verse');
	data.addColumn('number', '1992 Lure');
	data.addColumn('number', '1993 Lure');
	data.addColumn('number', '1994 Barathea (IRE)');
	data.addColumn('number', '1995 Ridgewood Pearl (GB)');
	data.addColumn('number', '1996 Da Hoss');
	data.addColumn('number', '1997 Spinning World');
	data.addColumn('number', '1998 Da Hoss');
	data.addColumn('number', '1999 Silic (FR)');
	data.addColumn('number', '2000 War Chant');
	data.addColumn('number', '2001 Val Royal (FR)');
	data.addColumn('number', '2002 Domedriver (IRE)');
	data.addColumn('number', '2003 Six Perfections (FR)');
	data.addColumn('number', '2004 Singletary');
	data.addColumn('number', '2005 Artie Schiller');
	data.addColumn('number', '2006 Miesque\'\s Approval');
	data.addColumn('number', '2007 Kip Deville');
	data.addColumn('number', '2008 Goldikova (IRE)');
	data.addColumn('number', '2009 Goldikova (IRE)');
	data.addColumn('number', '2010 Goldikova (IRE)');
	data.addColumn('number', '2011 Court Vision');
	data.addColumn('number', '2012 Wise Dan');
	data.addColumn('number', '2013 Wise Dan');
	data.addColumn('number', '2014 Karakontie (JPN)');
	data.addColumn('number', '2015 Tepin');
	data.addColumn('number', '2016 Tourist');
	data.addColumn('number', '2017 World Approval');
	data.addColumn('number', '2018 Expert Eye (GB)');



	
	data.addRows([ 
		['1/4 mile',  	-2, 1.5, -0.2, -2, -1.5, -10.5, -3, -4.5, -6.25, -7, -11, -4, -6.25, -3.25, -3.25, -14, -1, -1.5, -8.75, -5.5, -10.25, -1.5, -5.75, -7.5, -1, -8.5, -2.5, -5.75],
		['1/2 mile',		-1.75, 2, 1, -2.75, -1.5, -1.5, -2, -2.75, -3, -7.5, -8, -2.75, -4.5, -2.5, -3.5, -7.25, -2, -1.5, -10, -4.75, -7.25, -1.5, -6, -6, -1, -9.5, -2, -4.75],
		['3/4 mile',		-3.75, 1, 0.5, -1.5, -1, -1.5, -1.5, -2.25, -0.5, -6.25, -6.25, -2, -3.5, -0.75, -1.5, -5.25, -1, -1.5, -6.5, -4, -4.25, -1.5, -3.25, -5.5, 0.2, -2.75, -2, -2],
		['Straight',  	0.2, 3, 2, 0.2, 0.2, 1.5, -0.2, 0.5, -0.2, -5.25, -2, -1, -2.25, 1, -0.5, -0.5, -0.5, -1.5, -1.75, -1.5, -1.5, -0.5, -2, -5, 3, -0.5, -1, -3.5],
		['Finish',  	 	1.25, 3, 2.25, 3, 2, 1.5, 2, 0.2, 0.3, 0.3, 1.75, 0.75, 0.75, 0.5, 0.75, 4, 1, 1.25, 0.5, 1.75, 0.1, 1.5, 0, 1, 2.25, 0.5, 1.25, .5]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Opening Verse');
	data2.addColumn('number', '1992 Lure');
	data2.addColumn('number', '1993 Lure');
	data2.addColumn('number', '1994 Barathea (IRE)');
	data2.addColumn('number', '1995 Ridgewood Pearl (GB)');
	data2.addColumn('number', '1996 Da Hoss');
	data2.addColumn('number', '1997 Spinning World');
	data2.addColumn('number', '1998 Da Hoss');
	data2.addColumn('number', '1999 Silic (FR)');

data2.addRows([ 
		['1/4 mile',  	-2, 1.5, -0.2, -2, -1.5, -10.5, -3, -4.5, -6.25],
		['1/2 mile',		-1.75, 2, 1, -2.75, -1.5, -1.5, -2, -2.75, -3],
		['3/4 mile',		-3.75, 1, 0.5, -1.5, -1, -1.5, -1.5, -2.25, -0.5],
		['Straight',  	0.2, 3, 2, 0.2, 0.2, 1.5, -0.2, 0.5, -0.2],
		['Finish',  	 	1.25, 3, 2.25, 3, 2, 1.5, 2, 0.2, 0.3]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 War Chant');
	data3.addColumn('number', '2001 Val Royal (FR)');
	data3.addColumn('number', '2002 Domedriver (IRE)');
	data3.addColumn('number', '2003 Six Perfections (FR)');
	data3.addColumn('number', '2004 Singletary');
	data3.addColumn('number', '2005 Artie Schiller');
	data3.addColumn('number', '2006 Miesque\'\s Approval');
	data3.addColumn('number', '2007 Kip Deville');
	data3.addColumn('number', '2008 Goldikova (IRE)');
	data3.addColumn('number', '2009 Goldikova (IRE)');

	

	
	data3.addRows([ 
		['1/4 mile',  	-7, -11, -4, -6.25, -3.25, -3.25, -14, -1, -1.5, -8.75],
		['1/2 mile',		-7.5, -8, -2.75, -4.5, -2.5, -3.5, -7.25, -2, -1.5, -10],
		['3/4 mile',		-6.25, -6.25, -2, -3.5, -0.75, -1.5, -5.25, -1, -1.5, -6.5],
		['Straight',  	5.25, -2, -1, -2.25, 1, -0.5, -0.5, -0.5, -1.5, -1.75],
		['Finish',  	 	0.3, 1.75, 0.75, 0.75, 0.5, 0.75, 4, 1, 1.25, 0.5]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Goldikova (IRE)');
	data4.addColumn('number', '2011 Court Vision');
	data4.addColumn('number', '2012 Wise Dan');
	data4.addColumn('number', '2013 Wise Dan');
	data4.addColumn('number', '2014 Karakontie (JPN)');
	data4.addColumn('number', '2015 Tepin');
	data4.addColumn('number', '2016 Tourist');
	data4.addColumn('number', '2017 World Approval');
	data4.addColumn('number', '2018 Expert Eye (GB)');


	
	data4.addRows([ 
		['1/4 mile',  	-5.5, -10.25, -1.5, -5.75, -7.5, -1, -8.5, -2.5, -5.75],
		['1/2 mile',		-4.75, -7.25, -1.5, -6, -6, -1, -9.5, -2, -4.75],
		['3/4 mile',		-4, -4.25, -1.5, -3.25, -5.5, 0.2, -2.75, -2, -2],
		['Straight',  	-1.5, -1.5, -0.5, -2, -5, 3, -0.5, -1, -3.5],
		['Finish',  	 	1.75, 0.1, 1.5, 0, 1, 2.25, 0.5, 1.25, .5]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Breeders\'\ Cup Mile 1991-2018', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Breeders\'\ Cup Mile 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Breeders\'\ Cup Mile 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Breeders\'\ Cup Mile 2010-2018', titleTextStyle: {color: '#666', fontSize: 12}}, 
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
