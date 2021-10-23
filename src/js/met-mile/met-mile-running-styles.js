google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 In Excess (IRE)');
	data.addColumn('number', '1992 Dixie Brass');
	data.addColumn('number', '1993 Ibero (ARG)');
	data.addColumn('number', '1994 Holy Bull');
	data.addColumn('number', '1995 You and I');
	data.addColumn('number', '1996 Honour and Glory');
	data.addColumn('number', '1997 Langfuhr');
	data.addColumn('number', '1998 Wild Rush');
	data.addColumn('number', '1999 Sir Bear');
	data.addColumn('number', '2000 Yankee Victor');
	data.addColumn('number', '2001 Exciting Story');
	data.addColumn('number', '2002 Swept Overboard');
	data.addColumn('number', '2003 Aldebaran');
	data.addColumn('number', '2004 Pico Central (BRZ)');
	data.addColumn('number', '2005 Ghostzapper');
	data.addColumn('number', '2006 Silver Train');
	data.addColumn('number', '2007 Corinthian');
	data.addColumn('number', '2008 Divine Park');
	data.addColumn('number', '2009 Bribon (FR)');
	data.addColumn('number', '2010 Quality Road');
	data.addColumn('number', '2011 Tizway');
	data.addColumn('number', '2012 Shackleford');
	data.addColumn('number', '2013 Sahara Sky');
	data.addColumn('number', '2014 Palace Malice');
	data.addColumn('number', '2015 Honor Code');
	data.addColumn('number', '2016 Frosted');
	data.addColumn('number', '2017 Mor Spirit');
	data.addColumn('number', '2018 Bee Jersey');
	data.addColumn('number', '2019 Mitole');



	
	data.addRows([ 
		['1/4 mile',  	-1.25, 1, -2.5, 1, -0.5, -0.2, -5.75, -0.5, -2.75, -1, -7.25, -1.25, -11.25, -0.5, -2, -0.5, -0.3, -5, -6, 0.5, -0.5, 0.5, -12, -3, -14, -3.75, -1, 1, -2],
		['1/2 mile',		-1.5, 0.5, -2.25, 1, 0.2, -0.2, -2.75, -0.2, -1.75, 0.2, -5, -1.25, -9, -0.5, -1.5, -0.5, -0.75, -5.5, -5, 0.5, -0.5, 1.5, -11.25, -3, -11.25, -3.5, -0.5, 1, -.2],
		['3/4 mile',		0.5, 0.5, -0.75, 0.5, 0.2, -0.2, -2.5, 1, -0.75, 0.5, -1, 1.25, -1.75, -0.2, 2.5, -0.2, -0.2, -3, -2, 1, 1, 1, -4.5, -2, -8, -0.5, 0.5, 1, .2],
		['Straight',  	1, 1.5, -0.2, 2, 2, -0.2, -1, 2, -0.2, 3.5, -0.75, 5.5, 1.5, 0.2, 8, 0.2, 0.5, -2, -2, 2, 4, 2, -2.5, -1, -0.5, 6.5, 2, 1, 1],
		['Finish',  	 	2.25, 2.25, 1.5, 5.5, 1, 1, 0.3, 2, 1.75, 4.75, 0.75, 4.75, 0.3, 0.75, 6.25, 0.2, 0.75, 2, 0.5, 1.5, 2.75, 0.1, 0.1, 1, 3.75, 14.5, 6.25, .1, .75]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 In Excess (IRE)');
	data2.addColumn('number', '1992 Dixie Brass');
	data2.addColumn('number', '1993 Ibero (ARG)');
	data2.addColumn('number', '1994 Holy Bull');
	data2.addColumn('number', '1995 You and I');
	data2.addColumn('number', '1996 Honour and Glory');
	data2.addColumn('number', '1997 Langfuhr');
	data2.addColumn('number', '1998 Wild Rush');
	data2.addColumn('number', '1999 Sir Bear');

data2.addRows([ 
		['1/4 mile',  	-1.25, 1, -2.5, 1, -0.5, -0.2, -5.75, -0.5, -2.75],
		['1/2 mile',		-1.5, 0.5, -2.25, 1, 0.2, -0.2, -2.75, -0.2, -1.75],
		['3/4 mile',		0.5, 0.5, -0.75, 0.5, 0.2, -0.2, -2.5, 1, -0.75],
		['Straight',  	1, 1.5, -0.2, 2, 2, -0.2, -1, 2, -0.2],
		['Finish',  	 	2.25, 2.25, 1.5, 5.5, 1, 1, 0.3, 2, 1.75]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Yankee Victor');
	data3.addColumn('number', '2001 Exciting Story');
	data3.addColumn('number', '2002 Swept Overboard');
	data3.addColumn('number', '2003 Aldebaran');
	data3.addColumn('number', '2004 Pico Central (BRZ)');
	data3.addColumn('number', '2005 Ghostzapper');
	data3.addColumn('number', '2006 Silver Train');
	data3.addColumn('number', '2007 Corinthian');
	data3.addColumn('number', '2008 Divine Park');
	data3.addColumn('number', '2009 Bribon (FR)');

	

	
	data3.addRows([ 
		['1/4 mile',  	-1, -7.25, -1.25, -11.25, -0.5, -2, -0.5, -0.3, -5, -6],
		['1/2 mile',		0.2, -5, -1.25, -9, -0.5, -1.5, -0.5, -0.75, -5.5, -5],
		['3/4 mile',		0.5, -1, 1.25, -1.75, -0.2, 2.5, -0.2, -0.2, -3, -2],
		['Straight',  	3.5, -0.75, 5.5, 1.5, 0.2, 8, 0.2, 0.5, -2, -2],
		['Finish',  	 	4.75, 0.75, 4.75, 0.3, 0.75, 6.25, 0.2, 0.75, 2, 0.5]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Quality Road');
	data4.addColumn('number', '2011 Tizway');
	data4.addColumn('number', '2012 Shackleford');
	data4.addColumn('number', '2013 Sahara Sky');
	data4.addColumn('number', '2014 Palace Malice');
	data4.addColumn('number', '2015 Honor Code');
	data4.addColumn('number', '2016 Frosted');
	data4.addColumn('number', '2017 Mor Spirit');
	data4.addColumn('number', '2018 Bee Jersey');
	data4.addColumn('number', '2019 Mitole');


	
	data4.addRows([ 
		['1/4 mile',  	0.5, -0.5, 0.5, -12, -3, -14, -3.75, -1, 1, -2],
		['1/2 mile',		0.5, -0.5, 1.5, -11.25, -3, -11.25, -3.5, -0.5, 1, -.2],
		['3/4 mile',		1, 1, 1, -4.5, -2, -8, -0.5, 0.5, 1, .2],
		['Straight',  	2, 4, 2, -2.5, -1, -0.5, 6.5, 2, 1, 1],
		['Finish',  	 	1.5, 2.75, 0.1, 0.1, 1, 3.75, 14.5, 6.25, .1, .75]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Met Mile 1991-2018', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Met Mile 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Met Mile 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Met Mile 2010-2018', titleTextStyle: {color: '#666', fontSize: 12}}, 
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
