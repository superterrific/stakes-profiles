google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Big Courage');
	data.addColumn('number', '1992 Line in the Sand');
	data.addColumn('number', '1993 Dixieland Heat');
	data.addColumn('number', '1993 Dry Bean');
	data.addColumn('number', '1994 Fly Cry');
	data.addColumn('number', '1995 Knockadoon');
	data.addColumn('number', '1995 Beavers Nose');
	data.addColumn('number', '1996 Zarb\'\s Magic');
	data.addColumn('number', '1997 Open Forum');
	data.addColumn('number', '1998 Comic Strip');
	data.addColumn('number', '1999 Ecton Park');
	data.addColumn('number', '2000 Exchange Rate');
	data.addColumn('number', '2001 Dollar Bill');
	data.addColumn('number', '2002 Repent');
	data.addColumn('number', '2003 Badge of Silver');
	data.addColumn('number', '2004 Gradepoint');
	data.addColumn('number', '2005 Scipion');
	data.addColumn('number', '2006 Lawyer Ron');
	data.addColumn('number', '2007 Notional');
	data.addColumn('number', '2008 Pyro');
	data.addColumn('number', '2009 Friesan Fire');
	data.addColumn('number', '2010 Discreetly Mine');
	data.addColumn('number', '2011 Mucho Macho Man');
	data.addColumn('number', '2012 El Padrino');
	data.addColumn('number', '2013 Ive Struck a Nerve');
	data.addColumn('number', '2014 Intense Holiday');
	data.addColumn('number', '2015 International Star');
	data.addColumn('number', '2016 Gun Runner');
	data.addColumn('number', '2017 Girvin');
	data.addColumn('number', '2018 Bravazo');
	data.addColumn('number', '2019 War of Will');


	
	data.addRows([ 
		['1/4 mile',  	-8.75, -3.25, -2, 1, -5, -4, -9.25, 1, 1, -1, -7, -1, -4, -8.25, -1, -6, -10.75, -1.5, -7.75, -5.5, -1.5, 1.5, -1, -2.5, -8.75, -5.5, -6, -4, -6, -.5, -2],
		['1/2 mile',		-8, -3.25, -2, 2, -3.25, -5, -4.25, 1, 0.5, -2.5, -3.75, -1.5, -4.5, -7.5, -0.3, -10, -9.75, 0.3, -3.25, -5.75, -1.5, 1, -1.5, -3, -7, -6, -6.5, -4.5, -9.5, -.2, -2.5],
		['3/4 mile',		-6.75, -1.5, -1, 1, -1.5, -3.75, -4.75, 0.3, 0.5, -2.5, -5.25, -0.3, -5, -6, 0.3, -9, -8, 1, -2, -8.75, -2, 0.5, 0.3, -2, -6.75, -3.25, -4.5, -1.5, -5.5, -.2, .5],
		['Straight',  	0.2, -1, 0.3, 0.3, -0.5, -0.5, -2.5, 4, 0.5, -3, -2.5, 0.3, -2.5, -1.5, 3, -2.5, -5.25, 2.5, -1, -4.25, 0.5, 2, 1, -0.2, -2.25, -2, 0.5, 1, 0.5, -.2, 2.5],
		['Finish',  	 	0.1, 2.25, 3.25, 0.5, 5, 1.5, 4, 5, 1, 1, 0.1, 1.25, 2.5, 2.25, 10, 0.5, 1.25, 8.25, 2.25, 2, 2, 1.5, 1.5, 0.1, 0.1, 0.1, 1, 0.5, 2, .1, 2.25]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');
	data2.addColumn('number', '1991 Big Courage');
	data2.addColumn('number', '1992 Line in the Sand');
	data2.addColumn('number', '1993 Dixieland Heat');
	data2.addColumn('number', '1993 Dry Bean');
	data2.addColumn('number', '1994 Fly Cry');
	data2.addColumn('number', '1995 Knockadoon');
	data2.addColumn('number', '1995 Beavers Nose');
	data2.addColumn('number', '1996 Zarb\'\s Magic');
	data2.addColumn('number', '1997 Open Forum');
	data2.addColumn('number', '1998 Comic Strip');
	data2.addColumn('number', '1999 Ecton Park');

data2.addRows([ 
		['1/4 mile',  	-8.75, -3.25, -2, 1, -5, -4, -9.25, 1, 1, -1, -7],
		['1/2 mile',		-8, -3.25, -2, 2, -3.25, -5, -4.25, 1, 0.5, -2.5, -3.75],
		['3/4 mile',		-6.75, -1.5, -1, 1, -1.5, -3.75, -4.75, 0.3, 0.5, -2.5, -5.25],
		['Straight',  	0.2, -1, 0.3, 0.3, -0.5, -0.5, -2.5, 4, 0.5, -3, -2.5],
		['Finish',  	 	0.1, 2.25, 3.25, 0.5, 5, 1.5, 4, 5, 1, 1, 0.1]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Exchange Rate');
	data3.addColumn('number', '2001 Dollar Bill');
	data3.addColumn('number', '2002 Repent');
	data3.addColumn('number', '2003 Badge of Silver');
	data3.addColumn('number', '2004 Gradepoint');
	data3.addColumn('number', '2005 Scipion');
	data3.addColumn('number', '2006 Lawyer Ron');
	data3.addColumn('number', '2007 Notional');
	data3.addColumn('number', '2008 Pyro');
	data3.addColumn('number', '2009 Friesan Fire');

	

	
	data3.addRows([ 
		['1/4 mile',  	-1, -4, -8.25, -1, -6, -10.75, -1.5, -7.75, -5.5, -1.5],
		['1/2 mile',		-1.5, -4.5, -7.5, -0.3, -10, -9.75, 0.3, -3.25, -5.75, -1.5],
		['3/4 mile',		-0.3, -5, -6, 0.3, -9, -8, 1, -2, -8.75, -2],
		['Straight',  	0.3, -2.5, -1.5, 3, -2.5, -5.25, 2.5, -1, -4.25, 0.5],
		['Finish',  	 	1.25, 2.5, 2.25, 10, 0.5, 1.25, 8.25, 2.25, 2, 2]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Discreetly Mine');
	data4.addColumn('number', '2011 Mucho Macho Man');
	data4.addColumn('number', '2012 El Padrino');
	data4.addColumn('number', '2013 Ive Struck a Nerve');
	data4.addColumn('number', '2014 Intense Holiday');
	data4.addColumn('number', '2015 International Star');
	data4.addColumn('number', '2016 Gun Runner');
	data4.addColumn('number', '2017 Girvin');
	data4.addColumn('number', '2018 Bravazo');
	data4.addColumn('number', '2019 War of Will');
	
	data4.addRows([ 
		['1/4 mile',  	1.5, -1, -2.5, -8.75, -5.5, -6, -4, -6, -.5, -2],
		['1/2 mile',		1, -1.5, -3, -7, -6, -6.5, -4.5, -9.5, -.2, -2.5],
		['3/4 mile',		0.5, 0.3, -2, -6.75, -3.25, -4.5, -1.5, -5.5, -.2, .5],
		['Straight',  	2, 1, -0.2, -2.25, -2, 0.5, 1, 0.5, -.2, 2.5],
		['Finish',  	 	1.5, 1.5, 0.1, 0.1, 0.1, 1, 0.5, 2, .1, 2.25]
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


// make responsive	
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

