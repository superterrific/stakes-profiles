google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Flawlessly');
	data.addColumn('number', '1992 Golden Treat');
	data.addColumn('number', '1993 Hollywood Wildcat');
	data.addColumn('number', '1994 Work the Crowd');
	data.addColumn('number', '1995 Jewel Princess');
	data.addColumn('number', '1996 True Flare');
	data.addColumn('number', '1997 Famous Digger');
	data.addColumn('number', '1998 Sicy d\'\Alsace (FR)');
	data.addColumn('number', '1999 Sweet Ludy (IRE)');
	data.addColumn('number', '2000 Uncharted Haven (GB)');
	data.addColumn('number', '2001 Reine de Romance (IRE)');
	data.addColumn('number', '2002 Little Treasure (FR)');
	data.addColumn('number', '2003 Katdogawn (GB)');
	data.addColumn('number', '2004 Sweet Win');
	data.addColumn('number', '2005 Shining Energy');
	data.addColumn('number', '2006 Attima (GB)');
	data.addColumn('number', '2007 Passified (GB)');
	data.addColumn('number', '2008 Storm Mesa');
	data.addColumn('number', '2009 Starlarks (IRE)');
	data.addColumn('number', '2010 Evening Jewel');
	data.addColumn('number', '2011 Up In Time (GB)');
	data.addColumn('number', '2012 Eden\'\s Moon');
	data.addColumn('number', '2013 Wishing Gate');
	data.addColumn('number', '2014 Istanford');
	data.addColumn('number', '2015 Prize Exhibit (GB)');
	data.addColumn('number', '2016 Mokat');
	data.addColumn('number', '2017 Madam Dancealot (IRE)');
	data.addColumn('number', '2018 War Heroine');


	
	data.addRows([ 
		['1/4 mile',  	-5, -2, -6.5, -2, -5.75, -6.25, -5, -8.25, -2.25, -14.5, -3.5, -1, -2.5, -3.5, -5.75, 0.5, -4.5, -2.5, -13.5, -2.5, -5, 0.5, -4, 1, -3.75, -3.75, -8.75, .5],
		['1/2 mile',		-4.5, 0.3, -4.5, -1, -5, -7.5, -5, -7.75, -1.5, -13.75, -2, -1, -1.5, -10, -2.25, 0.5, -3, -4.75, -12.5, -1.5, -4, 1, -4.5, 2, -5, -2.75, -11.5, 1.5],
		['3/4 mile',		-0.3, 0.5, -2.75, -0.5, -4.5, -6.5, -1, -5.75, -0.5, -6.5, -2.5, -1.5, -2, -4.5, -4.5, 1, -1.5, -4.5, -6.25, -2.5, -2, 1, -2, 2, -5.25, -0.3, -7.25, 1],
		['Straight',  	1.5, 2, 2, -5, 0.5, -3.5, 0.3, -4, 2.5, -4, -1, -0.5, -1.25, -1, -1, 1, -1.5, -3, -2.75, 1, -2, 2, 0.3, 2, -2, 2.5, -3.5, 1	],
		['Finish',  	 	1.75, 1.75, 4.5, 0.3, 1, 1, 2, 0.1, 2, 1, 1.5, 0.1, 2, 0.3, 1.25, 1.25, 0.5, 1.25, 0.1, 0.75, 1.25, 1.25, 1.75, 2.5, 1.5, 3.75, 1.75, .3]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Flawlessly');
	data2.addColumn('number', '1992 Golden Treat');
	data2.addColumn('number', '1993 Hollywood Wildcat');
	data2.addColumn('number', '1994 Work the Crowd');
	data2.addColumn('number', '1995 Jewel Princess');
	data2.addColumn('number', '1996 True Flare');
	data2.addColumn('number', '1997 Famous Digger');
	data2.addColumn('number', '1998 Sicy d\'\Alsace (FR)');
	data2.addColumn('number', '1999 Sweet Ludy (IRE)');

data2.addRows([ 
		['1/4 mile',  	-5, -2, -6.5, -2, -5.75, -6.25, -5, -8.25, -2.25],
		['1/2 mile',		-4.5, 0.3, -4.5, -1, -5, -7.5, -5, -7.75, -1.5],
		['3/4 mile',		-0.3, 0.5, -2.75, -0.5, -4.5, -6.5, -1, -5.75, -0.5],
		['Straight',  	1.5, 2, 2, -5, 0.5, -3.5, 0.3, -4, 2.5],
		['Finish',  	 	1.75, 1.75, 4.5, 0.3, 1, 1, 2, 0.1, 2]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Uncharted Haven (GB)');
	data3.addColumn('number', '2001 Reine de Romance (IRE)');
	data3.addColumn('number', '2002 Little Treasure (FR)');
	data3.addColumn('number', '2003 Katdogawn (GB)');
	data3.addColumn('number', '2004 Sweet Win');
	data3.addColumn('number', '2005 Shining Energy');
	data3.addColumn('number', '2006 Attima (GB)');
	data3.addColumn('number', '2007 Passified (GB)');
	data3.addColumn('number', '2008 Storm Mesa');
	data3.addColumn('number', '2009 Starlarks (IRE)');

	

	
	data3.addRows([ 
		['1/4 mile',  	-14.5, -3.5, -1, -2.5, -3.5, -5.75, 0.5, -4.5, -2.5, -13.5],
		['1/2 mile',		-13.75, -2, -1, -1.5, -10, -2.25, 0.5, -3, -4.75, -12.5],
		['3/4 mile',		-6.5, -2.5, -1.5, -2, -4.5, -4.5, 1, -1.5, -4.5, -6.25],
		['Straight',  	-4, -1, -0.5, -1.25, -1, -1, 1, -1.5, -3, -2.75],
		['Finish',  	 	1, 1.5, 0.1, 2, 0.3, 1.25, 1.25, 0.5, 1.25, 0.1]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Evening Jewel');
	data4.addColumn('number', '2011 Up In Time (GB)');
	data4.addColumn('number', '2012 Eden\'\s Moon');
	data4.addColumn('number', '2013 Wishing Gate');
	data4.addColumn('number', '2014 Istanford');
	data4.addColumn('number', '2015 Prize Exhibit (GB)');
	data4.addColumn('number', '2016 Mokat');
	data4.addColumn('number', '2017 Madam Dancealot (IRE)');
	data4.addColumn('number', '2018 War Heroine');


	
	data4.addRows([ 
		['1/4 mile',  	-2.5, -5, 0.5, -4, 1, -3.75, -3.75, -8.75, .5],
		['1/2 mile',		-1.5, -4, 1, -4.5, 2, -5, -2.75, -11.5, 1.5],
		['3/4 mile',		-2.5, -2, 1, -2, 2, -5.25, -0.3, -7.25, 1],
		['Straight',  	1, -2, 2, 0.3, 2, -2, 2.5, -3.5, 1],
		['Finish',  	 	0.75, 1.25, 1.25, 1.75, 2.5, 1.5, 3.75, 1.75, .3]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - San Clemente 1991-2018', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - San Clemente 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - San Clemente 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - San Clemente 2010-2018', titleTextStyle: {color: '#666', fontSize: 12}}, 
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
