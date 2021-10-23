google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Richman');
	data.addColumn('number', '1993 Dixieland Heat');
	data.addColumn('number', '1994 Kandaly');
	data.addColumn('number', '1995 Petionville');
	data.addColumn('number', '1996 Grindstone');
	data.addColumn('number', '1997 Crypto Star');
	data.addColumn('number', '1998 Comic Strip');
	data.addColumn('number', '1999 Kimberlite Pipe');
	data.addColumn('number', '2000 Mighty');
	data.addColumn('number', '2001 Fifty Stars');
	data.addColumn('number', '2002 Repent');
	data.addColumn('number', '2003 Peace Rules');
	data.addColumn('number', '2004 Wimbledon');
	data.addColumn('number', '2005 High Limit');
	data.addColumn('number', '2007 Circular Quay');
	data.addColumn('number', '2008 Pyro');
	data.addColumn('number', '2009 Friesan Fire');
	data.addColumn('number', '2010 Mission Impazible');
	data.addColumn('number', '2011 Pants On Fire');
	data.addColumn('number', '2012 Hero of Order');
	data.addColumn('number', '2013 Revolutionary');
	data.addColumn('number', '2014 Vicar\'\s in Trouble');
	data.addColumn('number', '2015 International Star');
	data.addColumn('number', '2016 Gun Runner');
	data.addColumn('number', '2017 Girvin');
	data.addColumn('number', '2018 Noble Indy');
	data.addColumn('number', '2019 By My Standards');

	data.addRows([ 
		['1/4 mile',  	0.2, -4.75, -14.75, -0.5, -3, -13.5, -13, -3, -9.75, -11.25, -3.5, -1, -12, 1, -10.5, -4, -1.5, -1, -1, -2, -11.25, 0.5, -5.25, -1.5, -6, -1, -3.5],
		['1/2 mile',		0.2, -4.25, -14.75, -0.2, -3, -11.5, -12.25, -2, -7.5, -9.5, -2.25, -1.5, -10, 1, -12, -4.5, -1.5, -1.75, -1, -1.5, -12.25, 0.5, -7, -2, -6.5, -1, -3.5],
		['3/4 mile',		0.5, -1.5, -2.75, -0.5, -1.75, -8.25, -5.75, -1.5, -5, -8, -3, -0.5, -6, 1, -7, -1.25, -0.5, -2.75, -0.5, 0.2, -2.75, 1, -4.25, -0.5, -5, 2, -1],
		['Straight',  	0.2, -0.2, -0.3, 1, 0.2, -2.5, -1, -1.5, -4.5, -1.25, 0.2, 1, -1.5, 2, -0.5, -0.5, 2, -2, 0.2, 1.5, 0.2, 3.5, -0.2, 2.5, 0.2, -1, -1],
		['Finish',  	 	0.5, 2.5, 1.5, 0.2, 3.5, 0.2, 0.1, 0.2, 2, 2, 0.1, 2.25, 2.25, 4, 2.25, 3, 7.25, 0.75, 0.3, 0.5, 0.3, 3.5, 0.3, 4.5, 1.25, 0.3, .75]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Richman');
	data2.addColumn('number', '1993 Dixieland Heat');
	data2.addColumn('number', '1994 Kandaly');
	data2.addColumn('number', '1995 Petionville');
	data2.addColumn('number', '1996 Grindstone');
	data2.addColumn('number', '1997 Crypto Star');
	data2.addColumn('number', '1998 Comic Strip');
	data2.addColumn('number', '1999 Kimberlite Pipe');

data2.addRows([ 
		['1/4 mile',  	0.2, -4.75, -14.75, -0.5, -3, -13.5, -13, -3],
		['1/2 mile',		0.2, -4.25, -14.75, -0.2, -3, -11.5, -12.25, -2],
		['3/4 mile',		0.5, -1.5, -2.75, -0.5, -1.75, -8.25, -5.75, -1.5],
		['Straight',  	0.2, -0.2, -0.3, 1, 0.2, -2.5, -1, -1.5],
		['Finish',  	 	0.5, 2.5, 1.5, 0.2, 3.5, 0.2, 0.1, 0.2]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Mighty');
	data3.addColumn('number', '2001 Fifty Stars');
	data3.addColumn('number', '2002 Repent');
	data3.addColumn('number', '2003 Peace Rules');
	data3.addColumn('number', '2004 Wimbledon');
	data3.addColumn('number', '2005 High Limit');
	data3.addColumn('number', '2007 Circular Quay');
	data3.addColumn('number', '2008 Pyro');
	data3.addColumn('number', '2009 Friesan Fire');
	
	data3.addRows([ 
		['1/4 mile',  	-9.75, -11.25, -3.5, -1, -12, 1, -10.5, -4, -1.5],
		['1/2 mile',		-7.5, -9.5, -2.25, -1.5, -10, 1, -12, -4.5, -1.5],
		['3/4 mile',		-5, -8, -3, -0.5, -6, 1, -7, -1.25, -0.5],
		['Straight',  	-4.5, -1.25, 0.2, 1, -1.5, 2, -0.5, -0.5, 2],
		['Finish',  	 	2, 2, 0.1, 2.25, 2.25, 4, 2.25, 3, 7.25]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Mission Impazible');
	data4.addColumn('number', '2011 Pants On Fire');
	data4.addColumn('number', '2012 Hero of Order');
	data4.addColumn('number', '2013 Revolutionary');
	data4.addColumn('number', '2014 Vicar\'\s in Trouble');
	data4.addColumn('number', '2015 International Star');
	data4.addColumn('number', '2016 Gun Runner');
	data4.addColumn('number', '2017 Girvin');
	data4.addColumn('number', '2018 Noble Indy');
	data4.addColumn('number', '2019 By My Standards');

	
	data4.addRows([ 
		['1/4 mile',  	-1, -1, -2, -11.25, 0.5, -5.25, -1.5, -6, -1, -3.5],
		['1/2 mile',		-1.75, -1, -1.5, -12.25, 0.5, -7, -2, -6.5, -1, -3.5],
		['3/4 mile',		-2.75, -0.5, 0.2, -2.75, 1, -4.25, -0.5, -5, 2, -1],
		['Straight',  	-2, 0.2, 1.5, 0.2, 3.5, -0.2, 2.5, 0.2, -1, -1],
		['Finish',  	 	0.75, 0.3, 0.5, 0.3, 3.5, 0.3, 4.5, 1.25, .03, .75]
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

