google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Hansel');
	data.addColumn('number', '1992 Pine Bluff');
	data.addColumn('number', '1993 Prairie Bayou');
	data.addColumn('number', '1994 Tabasco Cat');
	data.addColumn('number', '1995 Timber Country');
	data.addColumn('number', '1996 Louis Quatorze');
	data.addColumn('number', '1997 Silver Charm');
	data.addColumn('number', '1998 Real Quiet');
	data.addColumn('number', '1999 Charismatic');
	data.addColumn('number', '2000 Red Bullet');
	data.addColumn('number', '2001 Point Given');
	data.addColumn('number', '2002 War Emblem');
	data.addColumn('number', '2003 Funny Cide');
	data.addColumn('number', '2004 Smarty Jones');
	data.addColumn('number', '2005 Afleet Alex');
	data.addColumn('number', '2006 Bernardini');
	data.addColumn('number', '2007 Curlin');
	data.addColumn('number', '2008 Big Brown');
	data.addColumn('number', '2009 Rachel Alexandra');
	data.addColumn('number', '2010 Lookin At Lucky');
	data.addColumn('number', '2011 Shackleford');
	data.addColumn('number', '2012 I\'\ll Have Another');
	data.addColumn('number', '2013 Oxbow');
	data.addColumn('number', '2014 California Chrome');
	data.addColumn('number', '2015 American Pharoah');
	data.addColumn('number', '2016 Exaggerator');
	data.addColumn('number', '2017 Cloud Computing');
	data.addColumn('number', '2018 Justify');
	data.addColumn('number', '2019 War of Will');




	
	data.addRows([ 
		['1/4 mile',  	-2, -5.25, -9.75, -3, -6, 1, -4.5, -5.5, -6, -6.5, -10, -0.2, -2, -1.5, -9.25, -2, -8.5, -3, 0.2, -3.25, -0.5, -2.5, 1.5, -2.5, 1, -11.5, -2, .2, -3],
		['1/2 mile',		-1.5, -12.5, -7.75, -3, -5.5, 3, -1.5, -9, -7.75, -7, -7.5, -0.2, -1, -2.5, -7.25, -1.5, -13, -4, 0.2, -5, -0.5, -3.5, 2, -2, 2.5, -6.5, -3, .2, -3.5],
		['3/4 mile',		-0.2, -3.5, -5.25, -1.75, -7.5, 2, -1, -1.75, -3.75, -2.25, -0.2, -0.2, -0.5, -1, -4, -4, -6.5, -1, .5, -2.5, -0.5, -4, 1.5, -1, 1.5, -2.25, -3, .2, -2],
		['Straight',  	4, -3, 0.2, -0.2, -0.5, 1, -1, 0.5, 3, 1, 0.5, 1.5, 5, 5, 0.2, 3.5, -1.5, 5.5, 4, 0.5, 1, -3, 3, 3, 4, 1.5, -3, .5, 1],
		['Finish',  	 	7, 0.75, 0.5, 0.75, 0.5, 3.25, 0.2, 2.25, 1.5, 3.75, 2.25, 0.75, 9.75, 11.5, 4.75, 5.25, 0.2, 5.25, 1, 0.75, 0.5, 0.3, 1.75, 1.5, 7, 3.5, 0.2, .5, 1.25]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Hansel');
	data2.addColumn('number', '1992 Pine Bluff');
	data2.addColumn('number', '1993 Prairie Bayou');
	data2.addColumn('number', '1994 Tabasco Cat');
	data2.addColumn('number', '1995 Timber Country');
	data2.addColumn('number', '1996 Louis Quatorze');
	data2.addColumn('number', '1997 Silver Charm');
	data2.addColumn('number', '1998 Real Quiet');
	data2.addColumn('number', '1999 Charismatic');

data2.addRows([ 
		['1/4 mile',  	-2, -5.25, -9.75, -3, -6, 1, -4.5, -5.5, -6],
		['1/2 mile',		-1.5, -12.5, -7.75, -3, -5.5, 3, -1.5, -9, -7.75],
		['3/4 mile',		-0.2, -3.5, -5.25, -1.75, -7.5, 2, -1, -1.75, -3.75],
		['Straight',  	4, -3, 0.2, -0.2, -0.5, 1, -1, 0.5, 3],
		['Finish',  	 	7, 0.75, 0.5, 0.75, 0.5, 3.25, 0.2, 2.25, 1.5]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Red Bullet');
	data3.addColumn('number', '2001 Point Given');
	data3.addColumn('number', '2002 War Emblem');
	data3.addColumn('number', '2003 Funny Cide');
	data3.addColumn('number', '2004 Smarty Jones');
	data3.addColumn('number', '2005 Afleet Alex');
	data3.addColumn('number', '2006 Bernardini');
	data3.addColumn('number', '2007 Curlin');
	data3.addColumn('number', '2008 Big Brown');
	data3.addColumn('number', '2009 Rachel Alexandra');

	

	
	data3.addRows([ 
		['1/4 mile',  	-6.5, -10, -0.2, -2, -1.5, -9.25, -2, -8.5, -3, 0.2],
		['1/2 mile',		-7, -7.5, -0.2, -1, -2.5, -7.25, -1.5, -13, -4, 0.2],
		['3/4 mile',		-2.25, -0.2, -0.2, -0.5, -1, -4, -4, -6.5, -1, .5],
		['Straight',  	1, 0.5, 1.5, 5, 5, 0.2, 3.5, -1.5, 5.5, 4],
		['Finish',  	 	3.75, 2.25, 0.75, 9.75, 11.5, 4.75, 5.25, 0.2, 5.25, 1]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Lookin At Lucky');
	data4.addColumn('number', '2011 Shackleford');
	data4.addColumn('number', '2012 I\'\ll Have Another');
	data4.addColumn('number', '2013 Oxbow');
	data4.addColumn('number', '2014 California Chrome');
	data4.addColumn('number', '2015 American Pharoah');
	data4.addColumn('number', '2016 Exaggerator');
	data4.addColumn('number', '2017 Cloud Computing');
	data4.addColumn('number', '2018 Justify');
	data4.addColumn('number', '2019 War of Will');

	
	data4.addRows([ 
		['1/4 mile',  	-3.25, -0.5, -2.5, 1.5, -2.5, 1, -11.5, -2, .2, -3],
		['1/2 mile',		-5, -0.5, -3.5, 2, -2, 2.5, -6.5, -3, .2, -3.5],
		['3/4 mile',		-2.5, -0.5, -4, 1.5, -1, 1.5, -2.25, -3, .2, -2],
		['Straight',  	0.5, 1, -3, 3, 3, 4, 1.5, -3, .5, 1],
		['Finish',  	 	0.75, 0.5, 0.3, 1.75, 1.5, 7, 3.5, 0.2, .5, 1.25]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Preakness 1991-2019', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Preakness 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Preakness 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Preakness 2010-2019', titleTextStyle: {color: '#666', fontSize: 12}}, 
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