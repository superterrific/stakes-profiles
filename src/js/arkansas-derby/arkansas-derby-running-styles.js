google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Olympio');
	data.addColumn('number', '1992 Pine Bluff');
	data.addColumn('number', '1993 Rockamundo');
	data.addColumn('number', '1994 Concern');
	data.addColumn('number', '1995 Dazzling Falls');
	data.addColumn('number', '1996 Zarb\'\s Magic');
	data.addColumn('number', '1997 Crypto Star');
	data.addColumn('number', '1998 Victory Gallop');
	data.addColumn('number', '2000 Graeme Hall');
	data.addColumn('number', '2001 Balto Star');
	data.addColumn('number', '2002 Private Emblem');
	data.addColumn('number', '2003 Sir Cherokee');
	data.addColumn('number', '2004 Smarty Jones');
	data.addColumn('number', '2005 Afleet Alex');
	data.addColumn('number', '2006 Lawyer Ron');
	data.addColumn('number', '2007 Curlin');
	data.addColumn('number', '2008 Gayego');
	data.addColumn('number', '2009 Papa Clem');
	data.addColumn('number', '2010 Line of David');
	data.addColumn('number', '2011 Archarcharch');
	data.addColumn('number', '2012 Bodemeister');
	data.addColumn('number', '2013 Overanalyze');
	data.addColumn('number', '2014 Danza');
	data.addColumn('number', '2015 American Pharoah');
	data.addColumn('number', '2016 Creator');
	data.addColumn('number', '2017 Classic Empire');
	data.addColumn('number', '2018 Magnum Moon');
	data.addColumn('number', '2019 Omaha Beach');





	data.addRows([
		['1/4 mile',  	1, -1.5, -0.5, -15, -7.5, -7, -11.5, -6.25, 1, 1.5, -2, -16.75, -0.5, -4, -2.5, -1, -1.5, -4.5, 2.5, -9.25, 0.5, -4.25, -2.5, -2.5, -15.25, -2.75, 1, -2.25],
		['1/2 mile',		-0.2, -1, -1, -11.5, -5.5, -10, -13.75, -7.75, 1, 1.5, -1.5, -17.25, -0.5, -3.5, 1, -3, -0.5, -3.5, 3.5, -6.25, 1.5, -3.5, -2, -3, -14.25, -2.5, .5, .5],
		['3/4 mile',		-1, -1.5, -1, -8.75, -5, -3.5, -11.25, -3.75, 0.5, 0.5, -0.5, -7.75, 0.2, -0.2, 1.5, -1.5, 0.2, -4, 3, -3.5, 2, -2.75, -1.5, -1, -9.75, -1.75, .2, 1],
		['Straight',  	-0.2, 0.2, -0.5, -4.5, 1.5, 1, -4.5, -1, 3, 4.5, 1.5, -3.5, 3, 5.5, 1.5, 3.5, 0.5, 0.2, 0.2, -2, 3, -0.2, 1.5, 5.5, -0.2, -1.5, 2, 1],
		['Finish',  	 	2.5, 0.3, 1.5, 0.3, 1.25, 0.3, 0.5, 0.2, 3.75, 4.5, 4.5, 1.75, 1.5, 8, 2.75, 10.5, 0.75, 0.5, 0.3, 0.3, 9.5, 4.25, 4.75, 8, 1.25, 0.5, 4, 1]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');
	data2.addColumn('number', '1991 Olympio');
	data2.addColumn('number', '1992 Pine Bluff');
	data2.addColumn('number', '1993 Rockamundo');
	data2.addColumn('number', '1994 Concern');
	data2.addColumn('number', '1995 Dazzling Falls');
	data2.addColumn('number', '1996 Zarb\'\s Magic');
	data2.addColumn('number', '1997 Crypto Star');
	data2.addColumn('number', '1998 Victory Gallop');

data2.addRows([
		['1/4 mile',  	1, -1.5, -0.5, -15, -7.5, -7, -11.5, -6.25],
		['1/2 mile',		-0.2, -1, -1, -11.5, -5.5, -10, -13.75, -7.75],
		['3/4 mile',		-1, -1.5, -1, -8.75, -5, -3.5, -11.25, -3.75],
		['Straight',  	-0.2, 0.2, -0.5, -4.5, 1.5, 1, -4.5, -1],
		['Finish',  	 	2.5, 0.3, 1.5, 0.3, 1.25, 0.3, 0.5, 0.2]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Graeme Hall');
	data3.addColumn('number', '2001 Balto Star');
	data3.addColumn('number', '2002 Private Emblem');
	data3.addColumn('number', '2003 Sir Cherokee');
	data3.addColumn('number', '2004 Smarty Jones');
	data3.addColumn('number', '2005 Afleet Alex');
	data3.addColumn('number', '2006 Lawyer Ron');
	data3.addColumn('number', '2007 Curlin');
	data3.addColumn('number', '2008 Gayego');
	data3.addColumn('number', '2009 Papa Clem');




	data3.addRows([
		['1/4 mile',  	1, 1.5, -2, -16.75, -0.5, -4, -2.5, -1, -1.5, -4.5],
		['1/2 mile',		1, 1.5, -1.5, -17.25, -0.5, -3.5, 1, -3, -0.5, -3.5],
		['3/4 mile',		0.5, 0.5, -0.5, -7.75, 0.2, -0.2, 1.5, -1.5, 0.2, -4],
		['Straight',  	3, 4.5, 1.5, -3.5, 3, 5.5, 1.5, 3.5, 0.5, 0.2],
		['Finish',  	 	3.75, 4.5, 4.5, 1.75, 1.5, 8, 2.75, 10.5, 0.75, 0.5]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');
	data4.addColumn('number', '2010 Line of David');
	data4.addColumn('number', '2011 Archarcharch');
	data4.addColumn('number', '2012 Bodemeister');
	data4.addColumn('number', '2013 Overanalyze');
	data4.addColumn('number', '2014 Danza');
	data4.addColumn('number', '2015 American Pharoah');
	data4.addColumn('number', '2016 Creator');
	data4.addColumn('number', '2017 Classic Empire');
	data4.addColumn('number', '2018 Magnum Moon');
	data4.addColumn('number', '2019 Omaha Beach');



	data4.addRows([
		['1/4 mile',  	2.5, -9.25, 0.5, -4.25, -2.5, -2.5, -15.25, -2.75, 1, -2.25],
		['1/2 mile',		3.5, -6.25, 1.5, -3.5, -2, -3, -14.25, -2.5, .5, .5],
		['3/4 mile',		3, -3.5, 2, -2.75, -1.5, -1, -9.75, -1.75, .2, 1],
		['Straight',  	0.2, -2, 3, -0.2, 1.5, 5.5, -0.2, -1.5, 2, 1],
		['Finish',  	 	0.3, 0.3, 9.5, 4.25, 4.75, 8, 1.25, 0.5, 4, 1]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Arkansas Derby 1991-2019', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Arkansas Derby 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Arkansas Derby 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Arkansas Derby 2010-2019', titleTextStyle: {color: '#666', fontSize: 12}},
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
