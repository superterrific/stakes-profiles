google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// all
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Point of Call');
	data.addColumn('number', '1991 Lite Light');
	data.addColumn('number', '1992 Luv Me Luv Me Not');
	data.addColumn('number', '1993 Dispute');
	data.addColumn('number', '1994 Sardula');
	data.addColumn('number', '1995 Gal in a Ruckus');
	data.addColumn('number', '1996 Pike Place Dancer');
	data.addColumn('number', '1997 Blushing K. D.');
	data.addColumn('number', '1998 Keeper Hill');
	data.addColumn('number', '1999 Silverbulletday');
	data.addColumn('number', '2000 Secret Status');
	data.addColumn('number', '2001 Flute');
	data.addColumn('number', '2002 Farda Amiga');
	data.addColumn('number', '2003 Bird Town');
	data.addColumn('number', '2004 Ashado');
	data.addColumn('number', '2005 Summerly');
	data.addColumn('number', '2006 Lemons Forever');
	data.addColumn('number', '2007 Rags to Riches');
	data.addColumn('number', '2008 Proud Spell');
	data.addColumn('number', '2009 Rachel Alexandra');
	data.addColumn('number', '2010 Blind Luck');
	data.addColumn('number', '2011 Plum Pretty');
	data.addColumn('number', '2012 Believe You Can');
	data.addColumn('number', '2013 Princess of Sylmar');
	data.addColumn('number', '2014 Untapable');
	data.addColumn('number', '2015 Lovely Maria');
	data.addColumn('number', '2016 Cathryn Sophia');
	data.addColumn('number', '2017 Abel Tasman');
	data.addColumn('number', '2018 Monomoy Girl');
	data.addColumn('number', '2019 Serengeti Empress');


	
	data.addRows([ 
		['1/4 mile',  	-8.5, -1.5, -2.5, -2.5, 0.5, -5, -3.5, -4.75, -5.5, -11, -5.75, -5, -7, -3.5, 1.5, -14.25, -1, -1, -1.5, -9.5, -1.5, -0.5, -10.75, -3.5, -2, -4, -14.75, -1.5, .5],
		['1/2 mile',		-9.5, -0.5, -2, -8, 0.2, -9, -2, -2.75, -2.5, -11, -4.5, -5.75, -6, -4.5, 1, -14, -2.5, -1, -1.5, -11, -3.5, -1, -8, -2, -2, -3, -16.5, -.5, 3],
		['3/4 mile',		-0.75, 0.2, 0.5, -4, 1, -6.5, -0.1, -2.75, -0.1, -5.5, -4.75, -1.5, -4, -4, 0.2, -5.75, -2, -1, -0.2, -4.25, -1, -1, -2.5, -0.5, -1, -1.5, -9, 1.5, 2],
		['Straight',  	4, 0.5, -0.2, 0.5, 2, -1.5, 4.25, -3.5, 2.5, 1, 2.5, -1.5, -0.25, -0.2, 1.5, -1.75, 2, 0.5, 10, -3, 3, 0.2, -2.5, 2, 2, 2, 1.5, .2, 1],
		['Finish',  	 	10, 0.5, 1.25, 0.2, 1.25, 0.3, 2.5, 0.3, 2, 6.75, 2.75, 1.25, 3.25, 1.25, 2, 1.5, 4.25, 5, 20.25, 0.1, 0.3, 0.75, 0.5, 4.5, 2.75, 2.75, 1.25, .5, 1.75]
		]);


// 90s
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string', 'Point of Call');	
	data2.addColumn('number', '1991 Lite Light');
	data2.addColumn('number', '1992 Luv Me Luv Me Not');
	data2.addColumn('number', '1993 Dispute');
	data2.addColumn('number', '1994 Sardula');
	data2.addColumn('number', '1995 Gal in a Ruckus');
	data2.addColumn('number', '1996 Pike Place Dancer');
	data2.addColumn('number', '1997 Blushing K. D.');
	data2.addColumn('number', '1998 Keeper Hill');
	data2.addColumn('number', '1999 Silverbulletday');

data2.addRows([ 
		['1/4 mile',  	-8.5, -1.5, -2.5, -2.5, 0.5, -5, -3.5, -4.75, -5.5],
		['1/2 mile',		-9.5, -0.5, -2, -8, 0.2, -9, -2, -2.75, -2.5],
		['3/4 mile',		-0.75, 0.2, 0.5, -4, 1, -6.5, -0.1, -2.75, -0.1],
		['Straight',  	4, 0.5, -0.2, 0.5, 2, -1.5, 4.25, -3.5, 2.5],
		['Finish',  	 	10, 0.5, 1.25, 0.2, 1.25, 0.3, 2.5, 0.3, 2]
		]);


// 00s
	var data3 = new google.visualization.DataTable();
	data3.addColumn('string', 'Point of Call');
	data3.addColumn('number', '2000 Secret Status');
	data3.addColumn('number', '2001 Flute');
	data3.addColumn('number', '2002 Farda Amiga');
	data3.addColumn('number', '2003 Bird Town');
	data3.addColumn('number', '2004 Ashado');
	data3.addColumn('number', '2005 Summerly');
	data3.addColumn('number', '2006 Lemons Forever');
	data3.addColumn('number', '2007 Rags to Riches');
	data3.addColumn('number', '2008 Proud Spell');
	data3.addColumn('number', '2009 Rachel Alexandra');

	

	
	data3.addRows([ 
		['1/4 mile',  	-11, -5.75, -5, -7, -3.5, 1.5, -14.25, -1, -1, -1.5],
		['1/2 mile',		-11, -4.5, -5.75, -6, -4.5, 1, -14, -2.5, -1, -1.5],
		['3/4 mile',		-5.5, -4.75, -1.5, -4, -4, 0.2, -5.75, -2, -1, -0.2],
		['Straight',  	1, 2.5, -1.5, -0.25, -0.2, 1.5, -1.75, 2, 0.5, 10],
		['Finish',  	 	6.75, 2.75, 1.25, 3.25, 1.25, 2, 1.5, 4.25, 5, 20.25]
		]);


// 10s
	var data4 = new google.visualization.DataTable();
	data4.addColumn('string', 'Point of Call');	
	data4.addColumn('number', '2010 Blind Luck');
	data4.addColumn('number', '2011 Plum Pretty');
	data4.addColumn('number', '2012 Believe You Can');
	data4.addColumn('number', '2013 Princess of Sylmar');
	data4.addColumn('number', '2014 Untapable');
	data4.addColumn('number', '2015 Lovely Maria');
	data4.addColumn('number', '2016 Cathryn Sophia');
	data4.addColumn('number', '2017 Abel Tasman');
	data4.addColumn('number', '2018 Monomoy Girl');
	data4.addColumn('number', '2019 Serengeti Empress');


	
	data4.addRows([ 
		['1/4 mile',  	-9.5, -1.5, -0.5, -10.75, -3.5, -2, -4, -14.75, -1.5, .5],
		['1/2 mile',		-11, -3.5, -1, -8, -2, -2, -3, -16.5, -.5, 3],
		['3/4 mile',		-4.25, -1, -1, -2.5, -0.5, -1, -1.5, -9, 1.5, 2],
		['Straight',  	-3, 3, 0.2, -2.5, 2, 2, 2, 1.5, .2, 1],
		['Finish',  	 	0.1, 0.3, 0.75, 0.5, 4.5, 2.75, 2.75, 1.25, .5, 1.75]
		]);




// all
	var options = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Kentucky Oaks 1991-2019', titleTextStyle: {color: '#666', fontSize: 12}},
	legend: {position: 'none'},
	};

// 90s
	var options2 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Kentucky Oaks 1991-1999', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};

// 00s
	var options3 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Kentucky Oaks 2000-2009', titleTextStyle: {color: '#666', fontSize: 12}}, 
	legend: {position: 'right', textStyle: {fontSize: 11, color: '#333'}},
	};


// 10s
	var options4 = {
	vAxis: {title: 'Lengths ahead of field or behind the leader', titleTextStyle: {color: '#666', fontSize: 12}, format: 'decimal'},
	hAxis: {title: 'Point of Call - Kentucky Oaks 2010-2019', titleTextStyle: {color: '#666', fontSize: 12}}, 
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


