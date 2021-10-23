google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Solar Splendor');
	data.addColumn('number', '1992 Sky Classic');
	data.addColumn('number', '1993 Apple Tree (FR)');
	data.addColumn('number', '1994 Tikkanen');
	data.addColumn('number', '1995 Turk Passer');
	data.addColumn('number', '1996 Diplomatic Jet');
	data.addColumn('number', '1997 Val\'\s Prince');
	data.addColumn('number', '1998 Buck\'\s Boy');
	data.addColumn('number', '1999  Val\'\s Prince');
	data.addColumn('number', '2000 John\'\s Call');
	data.addColumn('number', '2001 Timboroa (GB)');
	data.addColumn('number', '2002 Denon');
	data.addColumn('number', '2003 Sulamani (IRE)');
	data.addColumn('number', '2004 Kitten\'\s Joy');
	data.addColumn('number', '2005 Shakespeare');
	data.addColumn('number', '2006 English Channel');
	data.addColumn('number', '2007 English Channel');
	data.addColumn('number', '2008 Grand Couturier (GB)');
	data.addColumn('number', '2009 Interpatation');
	data.addColumn('number', '2010 Winchester');
	data.addColumn('number', '2011 Cape Blanco (IRE)');
	data.addColumn('number', '2012 Point of Entry');
	data.addColumn('number', '2013 Little Mike');
	data.addColumn('number', '2014 Main Sequence');
	data.addColumn('number', '2015 Big Blue Kitten');
	data.addColumn('number', '2016 Ectot (GB)');
	data.addColumn('number', '2017 Beach Patrol');
	data.addColumn('number', '2018 Channel Maker');



	
	data.addRows([ 
		['1/4 mile',  	-1.5, -2, -2.5, -4, 1, -4, -2, 2, -3.5, 0.5, 0.5, -2, -3.25, -2.25, -2.5, -2, -1, -9, 1, -6.5, -1, -1, -3.5, -2.5, -13.5, 0.5, -3.5, 1],
		['1/2 mile',		1, -2.5, -2.5, -5, 1.5, -3.5, -1.5, 3, -3, 2, 0.5, -3.5, -4.25, -2.5, -3, -2, -2, -6.5, 1, -7.5, -1, -2, -3.5, -4.5, -19, 1, -7, .5],
		['1 mile',		1, -2, -2, -4, 1.5, -1.5, -0.5, 2, -0.5, 2.5, 0.5, -2, -2.25, -1.75, -2, -1, -1.5, -3.5, 2, -6, -0.5, -1.5, -2, -3, -12, 0.5, -1, .2],
		['1 1/4 mile',	1.5, -2, -1.75, -1.5, 0.5, 0.5, -0.3, 1.5, -0.5, 2.5, 0.5, -1.5, -2.25, -1.5, -0.2, -0.5, -1.75, -2, 0.5, -3.5, 2, -0.5, 1.5, -1, -1, 2, 1.5, 2],
		['Straight',  	1, 0.2, -0.5, -1, 1, 3, 0.5, 3.5, 0.3, 3.5, 2.5, -0.5, -0.5, 0.2, 0.2, 3.5, -0.5, 2, -0.2, -1, 1.5, 0.5, 0.5, -1, 3, 2.5, 2, 1.5],
		['Finish',  	 	0.3, 1.75, 2.25, 0.3, 0.75, 0.75, 2.5, 3, 1, 0.5, 3, 0.5, 2.75, 2.5, 0.2, 4.5, 2.25, 10.5, 1.75, 1, 0.1, 1.75, 0.1, 0.3, 0.75, 5, 5, 4.5]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');
	data2.addColumn('number', '1991 Solar Splendor');
	data2.addColumn('number', '1992 Sky Classic');
	data2.addColumn('number', '1993 Apple Tree (FR)');
	data2.addColumn('number', '1994 Tikkanen');
	data2.addColumn('number', '1995 Turk Passer');
	data2.addColumn('number', '1996 Diplomatic Jet');
	data2.addColumn('number', '1997 Val\'\s Prince');
	data2.addColumn('number', '1998 Buck\'\s Boy');
	data2.addColumn('number', '1999  Val\'\s Prince');

data2.addRows([ 
		['1/4 mile',  	-1.5, -2, -2.5, -4, 1, -4, -2, 2, -3.5],
		['1/2 mile',		1, -2.5, -2.5, -5, 1.5, -3.5, -1.5, 3, -3],
		['1 mile',		1, -2, -2, -4, 1.5, -1.5, -0.5, 2, -0.5],
		['1 1/4 mile',	1.5, -2, -1.75, -1.5, 0.5, 0.5, -0.3, 1.5, -0.5],
		['Straight',  	1, 0.2, -0.5, -1, 1, 3, 0.5, 3.5, 0.3],
		['Finish',  	 	0.3, 1.75, 2.25, 0.3, 0.75, 0.75, 2.5, 3, 1]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 John\'\s Call');
	data3.addColumn('number', '2001 Timboroa (GB)');
	data3.addColumn('number', '2002 Denon');
	data3.addColumn('number', '2003 Sulamani (IRE)');
	data3.addColumn('number', '2004 Kitten\'\s Joy');
	data3.addColumn('number', '2005 Shakespeare');
	data3.addColumn('number', '2006 English Channel');
	data3.addColumn('number', '2007 English Channel');
	data3.addColumn('number', '2008 Grand Couturier (GB)');
	data3.addColumn('number', '2009 Interpatation');
	

	
	data3.addRows([ 
		['1/4 mile',  	0.5, 0.5, -2, -3.25, -2.25, -2.5, -2, -1, -9, 1],
		['1/2 mile',		2, 0.5, -3.5, -4.25, -2.5, -3, -2, -2, -6.5, 1],
		['1 mile',		2.5, 0.5, -2, -2.25, -1.75, -2, -1, -1.5, -3.5, 2],
		['1 1/4 mile',	2.5, 0.5, -1.5, -2.25, -1.5, -0.2, -0.5, -1.75, -2, 0.5],
		['Straight',  	3.5, 2.5, -0.5, -0.5, 0.2, 0.2, 3.5, -0.5, 2, -0.2],
		['Finish',  	 	0.5, 3, 0.5, 2.75, 2.5, 0.2, 4.5, 2.25, 10.5, 1.75]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');
	data4.addColumn('number', '2010 Winchester');
	data4.addColumn('number', '2011 Cape Blanco (IRE)');
	data4.addColumn('number', '2012 Point of Entry');
	data4.addColumn('number', '2013 Little Mike');
	data4.addColumn('number', '2014 Main Sequence');
	data4.addColumn('number', '2015 Big Blue Kitten');
	data4.addColumn('number', '2016 Ectot (GB)');
	data4.addColumn('number', '2017 Beach Patrol');
	data4.addColumn('number', '2018 Channel Maker');
	
	data4.addRows([ 
		['1/4 mile',  	-6.5, -1, -1, -3.5, -2.5, -13.5, 0.5, -3.5, 1],
		['1/2 mile',		-7.5, -1, -2, -3.5, -4.5, -19, 1, -7, .5],
		['1 mile',		-6, -0.5, -1.5, -2, -3, -12, 0.5, -1, .2],
		['1 1/4 mile',	-3.5, 2, -0.5, 1.5, -1, -1, 2, 1.5, 2],
		['Straight',  	-1, 1.5, 0.5, 0.5, -1, 3, 2.5, 2, 1.5],
		['Finish',  	 	1, 0.1, 1.75, 0.1, 0.3, 0.75, 5, 5, 4.5]
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
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#666'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#666'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#666'}},
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