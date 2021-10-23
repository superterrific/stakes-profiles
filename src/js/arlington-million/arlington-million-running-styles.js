google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Tight Spot');
	data.addColumn('number', '1992 Dear Doctor (FR)');
	data.addColumn('number', '1993 Star of Cozzene');
	data.addColumn('number', '1994 Paradise Creek');
	data.addColumn('number', '1995 Awad');
	data.addColumn('number', '1996 Mecke');
	data.addColumn('number', '1997 Marlin');
	data.addColumn('number', '2000 Chester House');
	data.addColumn('number', '2001 Silvano (GER)');
	data.addColumn('number', '2002 Beat Hollow (GB)');
	data.addColumn('number', '2005 Powerscourt (GB)');
	data.addColumn('number', '2006 The Tin Man');
	data.addColumn('number', '2007 Jambalaya');
	data.addColumn('number', '2008 Spirit One (FR)');
	data.addColumn('number', '2009 Gio Ponti');
	data.addColumn('number', '2010 Debussy (IRE)');
	data.addColumn('number', '2011 Cape Blanco (IRE)');
	data.addColumn('number', '2012 Little Mike');
	data.addColumn('number', '2014 Hardest Core');
	data.addColumn('number', '2015 The Pizza Man');
	data.addColumn('number', '1992 Mondialiste (IRE)');
	data.addColumn('number', '2017 Beach Patrol');
	data.addColumn('number', '2018 Robert Bruce (CHI)');




	
	data.addRows([ 
		['1/4 mile',  	-1, -4.75, -4.5, -3.75, -13, -4.25, 1.5, -6, -2.25, -2, -7, 1, -2.5, 2.5, -13, -3, -4.5, 1, -2.5, -10.25, -4, -0.2, -6.75],
		['1/2 mile',		-1.5, -5.5, -4.5, -6.5, -11, -5.75, 1, -7.5, -1.5, -2.5, -10.5, 1.5, -2, 1.5, -13, -2.25, -4.5, 1.5, -3.5, -13, -5.25, -0.5, -6],
		['3/4 mile',		-2, -3, -3.5, -5.5, -5.75, -4.25, 0.2, -4.5, -1, -1, -4, 1, -2, 1.5, -6, -3.5, -3.5, 1, -2.5, -5.5, -4.75, -0.5, -5],
		['1 mile',		-0.5, -3, -1.5, -6, -3.25, -4.75, 0.5, -1.25, -0.5, -0.5, -1.75, 0.5, -1.5, 0.5, 2, -6.25, -0.5, 1.5, -2, -6, -3.5, -0.2, -3.25],
		['Straight',  	-0.2, -1.5, -1.5, -2, -0.5, -1.25, 2, 1, 2, -0.5, -1, 2, -1, 0.5, 1, -5.5, 2.5, 4.5, -1.5, -0.5, -1.5, -0.2, -5],
		['Finish',  	 	0.2, 0.2, 3.25, 0.75, 2.25, 2, 0.5, 3.25, 3, 0.2, 3, 1, 0.75, 0.75, 1.25, 0.5, 2.5, 1.5, 1, 0.3, 0.3, 0.5, .05]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Tight Spot');
	data2.addColumn('number', '1992 Dear Doctor (FR)');
	data2.addColumn('number', '1993 Star of Cozzene');
	data2.addColumn('number', '1994 Paradise Creek');
	data2.addColumn('number', '1995 Awad');
	data2.addColumn('number', '1996 Mecke');
	data2.addColumn('number', '1997 Marlin');

data2.addRows([ 
		['1/4 mile',  	-1, -4.75, -4.5, -3.75, -13, -4.25, 1.5],
		['1/2 mile',		-1.5, -5.5, -4.5, -6.5, -11, -5.75, 1],
		['3/4 mile',		-2, -3, -3.5, -5.5, -5.75, -4.25, 0.2],
		['1 mile',		-0.5, -3, -1.5, -6, -3.25, -4.75, 0.5],
		['Straight',  	-0.2, -1.5, -1.5, -2, -0.5, -1.25, 2],
		['Finish',  	 	0.2, 0.2, 3.25, 0.75, 2.25, 2, 0.5]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Chester House');
	data3.addColumn('number', '2001 Silvano (GER)');
	data3.addColumn('number', '2002 Beat Hollow (GB)');
	data3.addColumn('number', '2005 Powerscourt (GB)');
	data3.addColumn('number', '2006 The Tin Man');
	data3.addColumn('number', '2007 Jambalaya');
	data3.addColumn('number', '2008 Spirit One (FR)');
	data3.addColumn('number', '2009 Gio Ponti');

	

	
	data3.addRows([ 
		['1/4 mile',  	-6, -2.25, -2, -7, 1, -2.5, 2.5, -13, ],
		['1/2 mile',		-7.5, -1.5, -2.5, -10.5, 1.5, -2, 1.5, -13],
		['3/4 mile',		-4.5, -1, -1, -4, 1, -2, 1.5, -6],
		['1 mile',		-1.25, -0.5, -0.5, -1.75, .5, -1.5, 0.5, 2],
		['Straight',  	1, 2, -0.5, -1, 2, -1, 0.5, 1],
		['Finish',  	 	3.25, 3, 0.2, 3, 1, 0.75, 0.75, 1.25]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Debussy (IRE)');
	data4.addColumn('number', '2011 Cape Blanco (IRE)');
	data4.addColumn('number', '2012 Little Mike');
	data4.addColumn('number', '2014 Hardest Core');
	data4.addColumn('number', '2015 The Pizza Man');
	data4.addColumn('number', '1992 Mondialiste (IRE)');
	data4.addColumn('number', '2017 Beach Patrol');
	data4.addColumn('number', '2018 Robert Bruce (CHI)');


	
	data4.addRows([ 
		['1/4 mile',  	-3, -4.5, 1, -2.5, -10.25, -4, -0.2, -6.75],
		['1/2 mile',		-2.25, -4.5, 1.5, -3.5, -13, -5.25, -0.5, -6],
		['3/4 mile',		-3.5, -3.5, 1, -2.5, -5.5, -4.75, -0.5, -5],
		['1 mile',		-6.25, -0.5, 1.5, -2, -6, -3.5, -0.2, -3.25],
		['Straight',  	-5.5, 2.5, 4.5, -1.5, -0.5, -1.5, -0.2, -5],
		['Finish',  	 	0.5, 2.5, 1.5, 1, 0.3, 0.3, 0.5, .05]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Arlington Million 1991-2018', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Arlington Million 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Arlington Million 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Arlington Million 2010-2018', titleTextStyle: {color: '#666', fontSize: 12}}, 
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
