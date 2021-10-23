google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 La Gueriere');
	data.addColumn('number', '1992 Captive Miss');
	data.addColumn('number', '1993 Tribulation');
	data.addColumn('number', '1994 Danish (IRE)');
	data.addColumn('number', '1995 Perfect Arc');
	data.addColumn('number', '1996 Memories of Silver');
	data.addColumn('number', '1997 Ryafan');
	data.addColumn('number', '1998 Tenski');
	data.addColumn('number', '1999 Perfect Sting');
	data.addColumn('number', '2000 Collect the Cash');
	data.addColumn('number', '2001 Affluent');
	data.addColumn('number', '2002 Riskaverse');
	data.addColumn('number', '2003 Film Maker');
	data.addColumn('number', '2004 Ticker Tape (GB)');
	data.addColumn('number', '2005 Sweet Talker');
	data.addColumn('number', '2006 Vacare');
	data.addColumn('number', '2007 Bit of Whimsy');
	data.addColumn('number', '2008 Alwajeeha');
	data.addColumn('number', '2009 Hot Cha Cha');
	data.addColumn('number', '2010 Harmonious');
	data.addColumn('number', '2011 Together (IRE)');
	data.addColumn('number', '2012 Dayatthespa');
	data.addColumn('number', '2013 Kitten\'\s Dumplings');
	data.addColumn('number', '2014 Crown Queen');
	data.addColumn('number', '2015 Her Emmynency');
	data.addColumn('number', '2016 Time and Motion');
	data.addColumn('number', '2017 La Coronel');
	data.addColumn('number', '2018 Rushing Fall');


	
	data.addRows([ 
		['1/4 mile',  	-1, -2.75, -2.25, -2.75, 0.2, -5.5, -1, -0.5, -3.25, -0.6, -0.5, -4, -2, -3, -1.5, -0.2, -4.5, -2.5, -1, -4.5, -4.24, 1, -9.5, -2, -0.5, -3.25, 1, .5],
		['1/2 mile',		-0.5, -5.5, -2.5, -4.75, 0.5, -6.5, -1.5, -1, -1.5, -1.5, -2, -6.75, -3, -4.5, -1.5, -1.5, -6.5, -2, -1.25, -6.5, -4.5, 1.5, -10, -2.5, -0.5, -3, 1.5, 2],
		['3/4 mile',		-1, -3.5, -4, -3, 1.5, -5, -1.5, -0.2, -0.2, -1.5, -1.25, -3.75, -4, -5.5, -2, -2, -7.25, -1.5, -1, -3, -4, 1.5, -6.5, -2, -0.3, -3.5, 1.5, 1],
		['Straight',  	0.2, -2.25, 1.5, -3.5, 2.5, 0.5, -2, 2.5, -1, -0.5, -0.5, -0.3, -1.5, 0.5, 0.5, 0.2, -2.5, -1.5, 2, 2.5, 0.5, 1, -1.5, 0.3, 2, -0.5, 2, 1],
		['Finish',  	 	0.1, 0.3, 2, 2.5, 2, 0.5, 1.5, 2.5, 2, 0.75, 0.3, 0.3, 0.1, 0.5, 0.1, 0.5, 2.25, 1.25, 4.5, 4.25, 1.25, 2, 0.3, 0.75, 0.3, 0.2, 0.5, 1.25]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 La Gueriere');
	data2.addColumn('number', '1992 Captive Miss');
	data2.addColumn('number', '1993 Tribulation');
	data2.addColumn('number', '1994 Danish (IRE)');
	data2.addColumn('number', '1995 Perfect Arc');
	data2.addColumn('number', '1996 Memories of Silver');
	data2.addColumn('number', '1997 Ryafan');
	data2.addColumn('number', '1998 Tenski');
	data2.addColumn('number', '1999 Perfect Sting');

data2.addRows([ 
		['1/4 mile',  	-1, -2.75, -2.25, -2.75, 0.2, -5.5, -1, -0.5, -3.25],
		['1/2 mile',		-0.5, -5.5, -2.5, -4.74, 0.5, -6.5, -1.5, -1, -1.5],
		['3/4 mile',		-1, -3.5, -4, -3, 1.5, -5, -1.5, -0.2, -0.2],
		['Straight',  	0.2, -2.25, 1.5, -3.5, 2.5, 0.5, -2, 2.5, -1],
		['Finish',  	 	0.1, 0.3, 2, 2.5, 2, 0.5, 1.5, 2.5, 2]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Collect the Cash');
	data3.addColumn('number', '2001 Affluent');
	data3.addColumn('number', '2002 Riskaverse');
	data3.addColumn('number', '2003 Film Maker');
	data3.addColumn('number', '2004 Ticker Tape (GB)');
	data3.addColumn('number', '2005 Sweet Talker');
	data3.addColumn('number', '2006 Vacare');
	data3.addColumn('number', '2007 Bit of Whimsy');
	data3.addColumn('number', '2008 Alwajeeha');
	data3.addColumn('number', '2009 Hot Cha Cha');

	

	
	data3.addRows([ 
		['1/4 mile',  	-0.6, -0.5, -4, -2, -3, -1.5, -0.2, -4.5, -2.5, -1],
		['1/2 mile',		-1.5, -2, -6.75, -3, -4.5, -1.5, -1.5, -6.5, -2, -1.25],
		['3/4 mile',		-1.5, -1.25, -3.75, -4, -5.5, -2, -2, -7.25, -1.5, -1],
		['Straight',  	-0.5, -0.5, -0.3, -1.5, 0.5, 0.5, 0.2, -2.5, -1.5, 2],
		['Finish',  	 	0.75, 0.3, 0.3, 0.1, 0.5, 0.1, 0.5, 2.25, 1.25, 4.5]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Harmonious');
	data4.addColumn('number', '2011 Together (IRE)');
	data4.addColumn('number', '2012 Dayatthespa');
	data4.addColumn('number', '2013 Kitten\'\s Dumplings');
	data4.addColumn('number', '2014 Crown Queen');
	data4.addColumn('number', '2015 Her Emmynency');
	data4.addColumn('number', '2016 Time and Motion');
	data4.addColumn('number', '2017 La Coronel');
	data4.addColumn('number', '2018 Rushing Fall');



	
	data4.addRows([ 
		['1/4 mile',  	-4.5, -4.24, 1, -9.5, -2, -0.5, -3.25, 1, .5],
		['1/2 mile',		-6.5, -4.5, 1.5, -10, -2.5, -0.5, -3, 1.5, 2],
		['3/4 mile',		-3, -4, 1.5, -6.5, -2, -0.3, -3.5, 1.5, 1],
		['Straight',  	2.5, 0.5, 1, -1.5, 0.3, 2, -0.5, 2, 1],
		['Finish',  	 	4.25, 1.25, 2, 0.3, 0.75, 0.3, 0.2, 0.5, 1.25]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Queen Elizabeth II 1991-2018', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Queen Elizabeth II 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Queen Elizabeth II 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Queen Elizabeth II 2010-2018', titleTextStyle: {color: '#666', fontSize: 12}}, 
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
