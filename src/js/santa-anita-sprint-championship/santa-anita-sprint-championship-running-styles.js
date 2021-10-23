google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Frost Free');
	data.addColumn('number', '1992 Gray Slewpy');
	data.addColumn('number', '1993 Cardmania');
	data.addColumn('number', '1994 Saratoga Gambler');
	data.addColumn('number', '1995 Track Gal');
	data.addColumn('number', '1996 Lakota Brave');
	data.addColumn('number', '1997 Elmhurst');
	data.addColumn('number', '1998 Gold Land');
	data.addColumn('number', '1999 Lexicon');
	data.addColumn('number', '2000 Kona Gold');
	data.addColumn('number', '2001 Swept Overboard');
	data.addColumn('number', '2002 Kalookan Queen');
	data.addColumn('number', '2003 Avanzado (ARG)');
	data.addColumn('number', '2004 Pt\'\s Grey Eagle');
	data.addColumn('number', '2005 Captain Squire');
	data.addColumn('number', '2006 Bordonaro');
	data.addColumn('number', '2007 Idiot Proof');
	data.addColumn('number', '2008 Cost of Freedom');
	data.addColumn('number', '2009 Gayego');
	data.addColumn('number', '2010 Smiling Tiger');
	data.addColumn('number', '2011 Amazombie');
	data.addColumn('number', '2012 Coil');
	data.addColumn('number', '2013 Points Offthebench');
	data.addColumn('number', '2014 Rich Tapestry (IRE)');
	data.addColumn('number', '2015 Wild Dude');
	data.addColumn('number', '2016 Lord Nelson');
	data.addColumn('number', '2017 Roy H.');
	data.addColumn('number', '2018 Roy H.');


	
	data.addRows([ 
		['1/4 mile',  	0.5, -5, -2.25, -5.25, 0.5, -4.5, -7.75, -7.75, 2, -2.5, -10, -1.25, 0.2, -4, 0.2, 1, -1, -0.75, -9.25, -0.5, -5, -7, -3, -0.75, -15, -2, -1.5, -1.5],
		['1/2 mile',		0.3, -3, -3, -4.75, 0.2, -5.5, -6.25, -5.25, 1.5, -0.2, -8.5, -1.25, 0.5, -3.75, 0.5, 0.5, -1, -1.5, -5, -0.2, -3.5, -3, -4.5, -1.75, -13, -1.5, -1, -.5],
		['Straight',  	0.3, -2, 1, -0.2, 1, -2, -2, -3.25, 0.2, 1.5, -3, -1, 1, 2, 1, 1.5, -0.2, 1.5, -4.75, -0.2, -0.2, 0.5, -1, -1.5, -5, -1.5, .2, 1.5],
		['Finish',  	 	0.3, 0.1, 2.5, 3, 0.5, 1.25, 0.2, 0.75, 2, 3, 2.5, 0.5, 1.5, 0.5, 0.5, 1, 0.75, 0.5, 1.25, 0.5, 0.75, 0.2, 0.5, 0.1, 0.3, 2.5, 1, 2.75]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');
	data2.addColumn('number', '1991 Frost Free');
	data2.addColumn('number', '1992 Gray Slewpy');
	data2.addColumn('number', '1993 Cardmania');
	data2.addColumn('number', '1994 Saratoga Gambler');
	data2.addColumn('number', '1995 Track Gal');
	data2.addColumn('number', '1996 Lakota Brave');
	data2.addColumn('number', '1997 Elmhurst');
	data2.addColumn('number', '1998 Gold Land');
	data2.addColumn('number', '1999 Lexicon');

data2.addRows([ 
		['1/4 mile',  	0.5, -5, -2.25, -5.25, 0.5, -4.5, -7.75, -7.75, 2],
		['1/2 mile',		0.3, -3, -3, -4.75, 0.2, -5.5, -6.25, -5.25, 1.5],
		['Straight',  	0.3, -2, 1, -0.2, 1, -2, -2, -3.25, 0.2],
		['Finish',  	 	0.3, 0.1, 2.5, 3, 0.5, 1.25, 0.2, 0.75, 2]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Kona Gold');
	data3.addColumn('number', '2001 Swept Overboard');
	data3.addColumn('number', '2002 Kalookan Queen');
	data3.addColumn('number', '2003 Avanzado (ARG)');
	data3.addColumn('number', '2004 Pt\'\s Grey Eagle');
	data3.addColumn('number', '2005 Captain Squire');
	data3.addColumn('number', '2006 Bordonaro');
	data3.addColumn('number', '2007 Idiot Proof');
	data3.addColumn('number', '2008 Cost of Freedom');
	data3.addColumn('number', '2009 Gayego');

	

	
	data3.addRows([ 
		['1/4 mile',  	 -2.5, -10, -1.25, 0.2, -4, 0.2, 1, -1, -0.75, -9.25],
		['1/2 mile',		-0.2, -8.5, -1.25, 0.5, -3.75, 0.5, 0.5, -1, -1.5, -5],
		['Straight',  	1.5, -3, -1, 1, 2, 1, 1.5, -0.2, 1.5, -4.75],
		['Finish',  	 	3, 2.5, 0.5, 1.5, 0.5, 0.5, 1, 0.75, 0.5, 1.25]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Smiling Tiger');
	data4.addColumn('number', '2011 Amazombie');
	data4.addColumn('number', '2012 Coil');
	data4.addColumn('number', '2013 Points Offthebench');
	data4.addColumn('number', '2014 Rich Tapestry (IRE)');
	data4.addColumn('number', '2015 Wild Dude');
	data4.addColumn('number', '2016 Lord Nelson');
	data4.addColumn('number', '2017 Roy H.');
	data4.addColumn('number', '2018 Roy H.');
	

	
	data4.addRows([ 
		['1/4 mile',  	 -0.5, -5, -7, -3, -0.75, -15, -2, -1.5, -1.5],
		['1/2 mile',		-0.2, -3.5, -3, -4.5, -1.75, -13, -1.5, -1, -.5],
		['Straight',  	-0.2, -0.2, 0.5, -1, -1.5, -5, -1.5, .2, 1.5],
		['Finish',  	 	0.5, 0.75, 0.2, 0.5, 0.1, 0.3, 2.5, 1, 2.75]
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

