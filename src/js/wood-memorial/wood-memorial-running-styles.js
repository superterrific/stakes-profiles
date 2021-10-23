google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Cahill Road');
	data.addColumn('number', '1992 Devil His Due');
	data.addColumn('number', '1993 Storm Tower');
	data.addColumn('number', '1994 Irgun');
	data.addColumn('number', '1995 Talkin Man');
	data.addColumn('number', '1996 Unbridled\'\s Song');
	data.addColumn('number', '1997 Captain Bodgit');
	data.addColumn('number', '1998 Coronado\'\s Quest');
	data.addColumn('number', '1999 Adonis');
	data.addColumn('number', '2000 Fusaichi Pegasus');
	data.addColumn('number', '2001 Congaree');
	data.addColumn('number', '2002 Buddha');
	data.addColumn('number', '2003 Empire Maker');
	data.addColumn('number', '2004 Tapit');
	data.addColumn('number', '2005 Bellamy Road');
	data.addColumn('number', '2006 Bob and John');
	data.addColumn('number', '2007 Nobiz Like Shobiz');
	data.addColumn('number', '2008 Tale of Ekati');
	data.addColumn('number', '2009 I Want Revenge');
	data.addColumn('number', '2010 Eskendereya');
	data.addColumn('number', '2011 Toby\'\s Corner');
	data.addColumn('number', '2012 Gemologist');
	data.addColumn('number', '2013 Verrazano');
	data.addColumn('number', '2014 Wicked Strong');
	data.addColumn('number', '2015 Frosted');
	data.addColumn('number', '2016 Outwork');
	data.addColumn('number', '2017 Irish War Cry');
	data.addColumn('number', '2018 Vino Rosso');
	data.addColumn('number', '2019 Tacitus');

	data.addRows([ 
		['1/4 mile',  	-2, -1, 1, 1, 1, -0.5, -4, 1, -2, -3.5, -2.5, -1, -2.5, -10.75, 1.5, -2, -0.5, -6.5, -7, -2, -5, -2.5, -2, -4.5, -4.5, -1, -1.5, -9, -6],
		['1/2 mile',		-2, -1, 1, 1, 0.5, -0.2, -6, 0.5, -0.75, -0.5, -0.2, -0.2, 2, -9.25, 0.5, -1.5, -0.2, -2, -7.5, -1.5, -4, -2, -2, -4, -3.5, -0.2, -0.5, -9, -8],
		['3/4 mile',		-0.2, -0.5, 0.2, 0.2, 1.5, 0.5, -5, 0.5, -0.75, -2, 0.2, -0.2, -1.5, -4, 2.5, -0.5, 0.2, -2.5, -4, -0.5, -5.5, -2, 1, -4, -2, -0.2, -0.2, -4.5, -7.5],
		['Straight',  	1, 2.5, 2, 1, 7, 3, -0.2, 1.5, 1.5, 0.5, 5, 0.2, 0.2, -1.25, 10, 0.2, 0.5, -1.5, -1.25, 3.5, -4, 1.5, 1, -2, -0.5, 1.5, -0.5, .2, .2],
		['Finish',  	 	3, 1, 2, 1.5, 7.75, 1.5, 2, 2.5, 2, 4.25, 2.75, 0.2, 0.5, 0.5, 17.5, 1.5, 0.5, 0.5, 1.5, 9.75, 0.3, 0.3, 0.75, 3.5, 2, 0.2, 3.5, 3, 1.25]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Cahill Road');
	data2.addColumn('number', '1992 Devil His Due');
	data2.addColumn('number', '1993 Storm Tower');
	data2.addColumn('number', '1994 Irgun');
	data2.addColumn('number', '1995 Talkin Man');
	data2.addColumn('number', '1996 Unbridled\'\s Song');
	data2.addColumn('number', '1997 Captain Bodgit');
	data2.addColumn('number', '1998 Coronado\'\s Quest');
	data2.addColumn('number', '1999 Adonis');

data2.addRows([ 
		['1/4 mile',  	-2, -1, 1, 1, 1, -0.5, -4, 1, -2],
		['1/2 mile',		-2, -1, 1, 1, 0.5, -0.2, -6, 0.5, -0.75],
		['3/4 mile',		-0.2, -0.5, 0.2, 0.2, 1.5, 0.5, -5, 0.5, -0.75],
		['Straight',  	1, 2.5, 2, 1, 7, 3, -0.2, 1.5, 1.5],
		['Finish',  	 	3, 1, 2, 1.5, 7.75, 1.5, 2, 2.5, 2]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Fusaichi Pegasus');
	data3.addColumn('number', '2001 Congaree');
	data3.addColumn('number', '2002 Buddha');
	data3.addColumn('number', '2003 Empire Maker');
	data3.addColumn('number', '2004 Tapit');
	data3.addColumn('number', '2005 Bellamy Road');
	data3.addColumn('number', '2006 Bob and John');
	data3.addColumn('number', '2007 Nobiz Like Shobiz');
	data3.addColumn('number', '2008 Tale of Ekati');
	data3.addColumn('number', '2009 I Want Revenge');

	

	
	data3.addRows([ 
		['1/4 mile',  	-3.5, -2.5, -1, -2.5, -10.75, 1.5, -2, -0.5, -6.5, -7],
		['1/2 mile',		-0.5, -0.2, -0.2, 2, -9.25, 0.5, -1.5, -0.2, -2, -7.5],
		['3/4 mile',		-2, 0.2, -0.2, -1.5, -4, 2.5, -0.5, 0.2, -2.5, -4],
		['Straight',  	0.5, 5, 0.2, 0.2, -1.25, 10, 0.2, 0.5, -1.5, -1.25],
		['Finish',  	 	4.25, 2.75, 0.2, 0.5, 0.5, 17.5, 1.5, 0.5, 0.5, 1.5]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Eskendereya');
	data4.addColumn('number', '2011 Toby\'\s Corner');
	data4.addColumn('number', '2012 Gemologist');
	data4.addColumn('number', '2013 Verrazano');
	data4.addColumn('number', '2014 Wicked Strong');
	data4.addColumn('number', '2015 Frosted');
	data4.addColumn('number', '2016 Outwork');
	data4.addColumn('number', '2017 Irish War Cry');
	data4.addColumn('number', '2018 Vino Rosso');
	data4.addColumn('number', '2019 Tacitus');

	
	data4.addRows([ 
		['1/4 mile',  	-2, -5, -2.5, -2, -4.5, -4.5, -1, -1.5, -9, -6],
		['1/2 mile',		-1.5, -4, -2, -2, -4, -3.5, -0.2, -0.5, -9, -8],
		['3/4 mile',		-0.5, -5.5, -2, 1, -4, -2, -0.2, -0.2, -4.5, -7.5],
		['Straight',  	3.5, -4, 1.5, 1, -2, -0.5, 1.5, -0.5, .2, .2],
		['Finish',  	 	9.75, 0.3, 0.3, 0.75, 3.5, 2, 0.2, 3.5, 3, 1.25]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}},
	hAxis: {title: 'Point of Call - Wood Memorial 1991-2019', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}},
	hAxis: {title: 'Point of Call - Wood Memorial 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}},
	hAxis: {title: 'Point of Call - Wood Memorial 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}},
	hAxis: {title: 'Point of Call - Wood Memorial 2010-2019', titleTextStyle: {color: '#666', fontSize: 12}}, 
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
