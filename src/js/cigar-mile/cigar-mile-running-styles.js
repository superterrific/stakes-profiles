google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Rubiano');
	data.addColumn('number', '1992 Ibero (ARG)');
	data.addColumn('number', '1994 Cigar');
	data.addColumn('number', '1995 Flying Chevron');
	data.addColumn('number', '1996 Gold Fever');
	data.addColumn('number', '1997 Devious Course');
	data.addColumn('number', '1998 Sir Bear');
	data.addColumn('number', '1999 Affirmed Success');
	data.addColumn('number', '2000 El Corredor');
	data.addColumn('number', '2001 Left Bank');
	data.addColumn('number', '2002 Congaree');
	data.addColumn('number', '2003 Congaree');
	data.addColumn('number', '2004 Lion Tamer');
	data.addColumn('number', '2005 Purge');
	data.addColumn('number', '2006 Discreet Cat');
	data.addColumn('number', '2007 Daaher');
	data.addColumn('number', '2008 Tale of Ekati');
	data.addColumn('number', '2009 Kodiak Kowboy');
	data.addColumn('number', '2010 Jersey Town');
	data.addColumn('number', '2011 To Honor and Serve');
	data.addColumn('number', '2012 Stay Thirsty');
	data.addColumn('number', '2013 Flat Out');
	data.addColumn('number', '2014 Private Zone');
	data.addColumn('number', '2015 Tonalist');
	data.addColumn('number', '2016 Connect');
	data.addColumn('number', '2017 Sharp Azteca');
	data.addColumn('number', '2018 Patternrecognition');


	
	data.addRows([ 
		['1/4 mile',  	-3.25, -1, -1.25, 0.2, -11.5, -13.75, -1.25, -1, -2.25, -0.1, -0.5, -0.5, -7, -9.5, -4.5, 0.2, -7.5, -2.5, -1.5, 0.5, -2, -4, 2, -6, -4.5, -2, 1],
		['1/2 mile',		-4.5, -1.5, -1, -1.5, -9.25, -11, -1.25, -2, -1, -0.2, -0.5, -0.5, -4, -9.25, 0.2, 2.5, -6.5, -2, -2, -0.5, -2.5, -4.75, 1.5, -4, -2.5, -2.5, 1],
		['3/4 mile',		-3, -1.5, 2, -0.2, -5.25, -5, -1.25, 1, -0.5, 0.5, 0.2, -0.2, -0.2, -8, -0.2, 1.5, -2.5, -1.5, -1, -0.5, -1.75, -2.5, 2, -4.5, -1, -0.2, 1],
		['Straight',  	-1.5, 0.5, 5, -0.5, -1.5, -2.5, -0.5, 5, 1, 2.5, 1.5, 1.5, 0.2, -0.5, 0.2, 2.5, -2, -1.5, 0.2, 0.5, -1, -0.5, 2.5, -3, -1.5, 3, 1.5],
		['Finish',  	 	0.2, 3, 7, 0.5, 2, 0.2, 0.5, 5, 1.75, 3.25, 5.5, 5.25, 1.25, 3.75, 3.25, 2.5, 0.1, 0.75, 0.2, 1.75, 0.1, 1.25, 5, 0.3, 0.2, 5.25, .75]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Rubiano');
	data2.addColumn('number', '1992 Ibero (ARG)');
	data2.addColumn('number', '1994 Cigar');
	data2.addColumn('number', '1995 Flying Chevron');
	data2.addColumn('number', '1996 Gold Fever');
	data2.addColumn('number', '1997 Devious Course');
	data2.addColumn('number', '1998 Sir Bear');
	data2.addColumn('number', '1999 Affirmed Success');

data2.addRows([ 
		['1/4 mile',  	-3.25, -1, -1.25, 0.2, -11.5, -13.75, -1.25, -1],
		['1/2 mile',		-4.5, -1.5, -1, -1.5, -9.25, -11, -1.25, -2],
		['3/4 mile',		-3, -1.5, 2, -0.2, -5.25, -5, -1.25, 1],
		['Straight',  	-1.5, 0.5, 5, -0.5, -1.5, -2.5, -0.5, 5],
		['Finish',  	 	0.2, 3, 7, 0.5, 2, 0.2, 0.5, 5]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 El Corredor');
	data3.addColumn('number', '2001 Left Bank');
	data3.addColumn('number', '2002 Congaree');
	data3.addColumn('number', '2003 Congaree');
	data3.addColumn('number', '2004 Lion Tamer');
	data3.addColumn('number', '2005 Purge');
	data3.addColumn('number', '2006 Discreet Cat');
	data3.addColumn('number', '2007 Daaher');
	data3.addColumn('number', '2008 Tale of Ekati');
	data3.addColumn('number', '2009 Kodiak Kowboy');

	

	
	data3.addRows([ 
		['1/4 mile',  	-2.25, -0.1, -0.5, -0.5, -7, -9.5, -4.5, 0.2, -7.5, -2.5],
		['1/2 mile',		-1, -0.2, -0.5, -0.5, -4, -9.25, 0.2, 2.5, -6.5, -2],
		['3/4 mile',		-0.5, 0.5, 0.2, -0.2, -0.2, -8, -0.2, 1.5, -2.5, -1.5],
		['Straight',  	1, 2.5, 1.5, 1.5, 0.2, -0.5, 0.2, 2.5, -2, -1.5],
		['Finish',  	 	1.75, 3.25, 5.5, 5.25, 1.25, 3.75, 3.25, 2.5, 0.1, 0.75]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Jersey Town');
	data4.addColumn('number', '2011 To Honor and Serve');
	data4.addColumn('number', '2012 Stay Thirsty');
	data4.addColumn('number', '2013 Flat Out');
	data4.addColumn('number', '2014 Private Zone');
	data4.addColumn('number', '2015 Tonalist');
	data4.addColumn('number', '2016 Connect');
	data4.addColumn('number', '2017 Sharp Azteca');
	data4.addColumn('number', '2018 Patternrecognition');


	
	data4.addRows([ 
		['1/4 mile',  	-1.5, 0.5, -2, -4, 2, -6, -4.5, -2, 1],
		['1/2 mile',		-2, -0.5, -2.5, -4.75, 1.5, -4, -2.5, -2.5, 1],
		['3/4 mile',		-1, -0.5, -1.75, -2.5, 2, -4.5, -1, -0.2, 1],
		['Straight',  	0.2, 0.5, -1, -0.5, 2.5, -3, -1.5, 3, 1.5],
		['Finish',  	 	0.2, 1.75, 0.1, 1.25, 5, 0.3, 0.2, 5.25, .75]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Cigar Mile 1991-2018', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Cigar Mile 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Cigar Mile 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Cigar Mile 2010-2018', titleTextStyle: {color: '#666', fontSize: 12}}, 
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