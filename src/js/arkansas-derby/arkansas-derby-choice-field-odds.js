google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 2.1, customTooltip('<h2>1991</h2> <p>$1 Odds: $2.10</p><p>$2 Payout:  $6.20</p> <h3>Winner</h3> <p><b>Olympio</b></p>')],
		['1992', 0.8, customTooltip('<h2>1992</h2> <p>$1 Odds: $0.80</p><p>$2 Payout:  $3.60</p> <h3>Winner</h3> <p><b>Pine Bluff</b></p>')],
		['1994', 20.7, customTooltip('<h2>1994</h2> <p>$1 Odds: $20.70</p><p>$2 Payout:  $43.40</p> <h3>Winner</h3> <p><b>Concern</b></p>')],
		['1995', 3, customTooltip('<h2>1995</h2> <p>$1 Odds: $3.00</p><p>$2 Payout:  $8.00</p> <h3>Winner</h3> <p><b>Dazzling Falls</b></p>')],
		['1996', 11.2, customTooltip('<h2>1996</h2> <p>$1 Odds: $11.20</p><p>$2 Payout:  $24.40</p> <h3>Winner</h3> <p><b>Zarb\'\s Magic</b></p>')],
		['1997', 2.5, customTooltip('<h2>1997</h2> <p>$1 Odds: $2.50</p><p>$2 Payout:  $7.00</p> <h3>Winner</h3> <p><b>Crypto Star</b></p>')],
		['1998', 7.8, customTooltip('<h2>1998</h2> <p>$1 Odds: $7.80</p><p>$2 Payout:  $17.60</p> <h3>Winner</h3> <p><b>Victory Gallop</b></p>')],
		['1999', 2.9, customTooltip('<h2>1999</h2> <p>$1 Odds: $2.90</p><p>$2 Payout:  $5.20</p> <h3>Winner</h3> <p><b>Certain</b></p>')],
		['2000', 18.2, customTooltip('<h2>2000</h2> <p>$1 Odds: $18.20</p><p>$2 Payout:  $38.40</p> <h3>Winner</h3> <p><b>Graeme Hall</b></p>')],
		['2001', 1.6, customTooltip('<h2>2001</h2> <p>$1 Odds: $1.60</p><p>$2 Payout:  $5.20</p> <h3>Winner</h3> <p><b>Balto Star</b></p>')],
		['2002', 4.2, customTooltip('<h2>2002</h2> <p>$1 Odds: $4.20</p><p>$2 Payout:  $10.40</p> <h3>Winner</h3> <p><b>Private Emblem</b></p>')],
		['2004', 1, customTooltip('<h2>2004</h2> <p>$1 Odds: $1.00</p><p>$2 Payout:  $4.00</p> <h3>Winner</h3> <p><b>Smarty Jones</b></p>')],
		['2005', 2.4, customTooltip('<h2>2005</h2> <p>$1 Odds: $2.40</p><p>$2 Payout:  $6.80</p> <h3>Winner</h3> <p><b>Afleet Alex</b></p>')],
		['2006', 0.5, customTooltip('<h2>2006</h2> <p>$1 Odds: $0.50</p><p>$2 Payout:  $3.00</p> <h3>Winner</h3> <p><b>Lawyer Ron</b></p>')],
		['2007', 0.8, customTooltip('<h2>2007</h2> <p>$1 Odds: $0.80</p><p>$2 Payout:  $3.60</p> <h3>Winner</h3> <p><b>Curlin</b></p>')],
		['2008', 2.2, customTooltip('<h2>2008</h2> <p>$1 Odds: $2.20</p><p>$2 Payout:  $6.40</p> <h3>Winner</h3> <p><b>Gayego</b></p>')],
		['2009', 4, customTooltip('<h2>2009</h2> <p>$1 Odds: $4.00</p><p>$2 Payout:  $10.00</p> <h3>Winner</h3> <p><b>Papa Clem</b></p>')],
		['2010', 17.3, customTooltip('<h2>2010</h2> <p>$1 Odds: $17.30</p><p>$2 Payout:  $36.60</p> <h3>Winner</h3> <p><b>Line of David</b></p>')],
		['2012', 2.4, customTooltip('<h2>2012</h2> <p>$1 Odds: $2.40</p><p>$2 Payout:  $6.80</p> <h3>Winner</h3> <p><b>Bodemeister</b></p>')],
		['2013', 3.7, customTooltip('<h2>2013</h2> <p>$1 Odds: $3.70</p><p>$2 Payout:  $9.40</p> <h3>Winner</h3> <p><b>Overanalyze</b></p>')],
		['2015', 0.1, customTooltip('<h2>2015</h2> <p>$1 Odds: $0.10</p><p>$2 Payout:  $2.20</p> <h3>Winner</h3> <p><b>American Pharoah</b></p>')],
		['2016', 11.6, customTooltip('<h2>2016</h2> <p>$1 Odds: $11.60</p><p>$2 Payout:  $25.20</p> <h3>Winner</h3> <p><b>Creator</b></p>')],
		['2017', 1.9, customTooltip('<h2>2017</h2> <p>$1 Odds: $1.90</p><p>$2 Payout:  $5.80</p> <h3>Winner</h3> <p><b>Classic Empire</b></p>')],
		['2018', 0.8, customTooltip('<h2>2018</h2> <p>$1 Odds: $.80</p><p>$2 Payout:  $3.60</p> <h3>Winner</h3> <p><b>Magnum Moon</b></p>')],
		['2019', 1.7, customTooltip('<h2>2019</h2> <p>$1 Odds: $1.70</p><p>$2 Payout:  $5.40</p> <h3>Winner</h3> <p><b>Omaha Beach</b></p>')],


  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 2, customTooltip2('<h2>1991</h2> <p>2nd Choice</p> <h3>Winner</h3> <p><b>Olympio</b></p>'), 11, customTooltip2('<h2>1991</h2> <p>Field Size: 11</p>')],
		['1992', 1, customTooltip2('<h2>1992</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Pine Bluff</b></p>'), 6, customTooltip2('<h2>1992</h2> <p>Field Size: 6</p>')],
		['1993', 10, customTooltip2('<h2>1993</h2> <p>10th Choice</p> <h3>Winner</h3> <p><b>Rockamundo</b></p>'), 10, customTooltip2('<h2>1993</h2> <p>Field Size: 10</p>')],
		['1994', 6, customTooltip2('<h2>1994</h2> <p>6th Choice</p> <h3>Winner</h3> <p><b>Concern</b></p>'), 9, customTooltip2('<h2>1994</h2> <p>Field Size: 9</p>')],
		['1995', 3, customTooltip2('<h2>1995</h2> <p>3rd Choice</p> <h3>Winner</h3> <p><b>Dazzling Falls</b></p>'), 8, customTooltip2('<h2>1995</h2> <p>Field Size: 8</p>')],
		['1996', 5, customTooltip2('<h2>1996</h2> <p>5th Choice</p> <h3>Winner</h3> <p><b>Zarb\'\s Magic</b></p>'), 12, customTooltip2('<h2>1996</h2> <p>Field Size: 12</p>')],
		['1997', 1, customTooltip2('<h2>1997</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Crypto Star</b></p>'), 11, customTooltip2('<h2>1997</h2> <p>Field Size: 11</p>')],
		['1998', 3, customTooltip2('<h2>1998</h2> <p>3rd Choice</p> <h3>Winner</h3> <p><b>Victory Gallop</b></p>'), 9, customTooltip2('<h2>1998</h2> <p>Field Size: 9</p>')],
		['1999', 6, customTooltip2('<h2>1999</h2> <p>6th Choice</p> <h3>Winner</h3> <p><b>Certain</b></p>'), 7, customTooltip2('<h2>1999</h2> <p>Field Size: 7</p>')],
		['2000', 8, customTooltip2('<h2>2000</h2> <p>8th Choice</p> <h3>Winner</h3> <p><b>Graeme Hall</b></p>'), 14, customTooltip2('<h2>2000</h2> <p>Field Size: 14</p>')],
		['2001', 1, customTooltip2('<h2>2001</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Balto Star</b></p>'), 11, customTooltip2('<h2>2001</h2> <p>Field Size: 11</p>')],
		['2002', 3, customTooltip2('<h2>2002</h2> <p>3rd Choice</p> <h3>Winner</h3> <p><b>Balto Star</b></p>'), 11, customTooltip2('<h2>2002</h2> <p>Field Size: 11</p>')],
		['2003', 10, customTooltip2('<h2>2003</h2> <p>10th Choice</p> <h3>Winner</h3> <p><b>Sir Cherokee</b></p>'), 12, customTooltip2('<h2>2003</h2> <p>Field Size: 12</p>')],
		['2004', 1, customTooltip2('<h2>2004</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Smarty Jones</b></p>'), 11, customTooltip2('<h2>2004</h2> <p>Field Size: 11</p>')],
		['2005', 1, customTooltip2('<h2>2005</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Afleet Alex</b></p>'), 10, customTooltip2('<h2>2005</h2> <p>Field Size: 10</p>')],
		['2006', 1, customTooltip2('<h2>2006</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Lawyer Ron</b></p>'), 13, customTooltip2('<h2>2006</h2> <p>Field Size: 13</p>')],
		['2007', 1, customTooltip2('<h2>2007</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Curlin</b></p>'), 9, customTooltip2('<h2>2007</h2> <p>Field Size: 9</p>')],
		['2008', 1, customTooltip2('<h2>2008</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Gayego</b></p>'), 12, customTooltip2('<h2>2008</h2> <p>Field Size: 12</p>')],
		['2009', 2, customTooltip2('<h2>2009</h2> <p>2nd Choice</p> <h3>Winner</h3> <p><b>Papa Clem</b></p>'), 10, customTooltip2('<h2>2009</h2> <p>Field Size: 10</p>')],
		['2010', 7, customTooltip2('<h2>2010</h2> <p>7th Choice</p> <h3>Winner</h3> <p><b>Line of David</b></p>'), 9, customTooltip2('<h2>2010</h2> <p>Field Size: 9</p>')],
		['2011', 8, customTooltip2('<h2>2011</h2> <p>8th Choice</p> <h3>Winner</h3> <p><b>Archarcharch</b></p>'), 13, customTooltip2('<h2>2011</h2> <p>Field Size: 13</p>')],
		['2012', 1, customTooltip2('<h2>2012</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Bodemeister</b></p>'), 11, customTooltip2('<h2>2012</h2> <p>Field Size: 11</p>')],
		['2013', 3, customTooltip2('<h2>2013</h2> <p>3rd Choice</p> <h3>Winner</h3> <p><b>Overanalyze</b></p>'), 10, customTooltip2('<h2>2013</h2> <p>Field Size: 10</p>')],
		['2014', 7, customTooltip2('<h2>2014</h2> <p>7th Choice</p> <h3>Winner</h3> <p><b>Danza</b></p>'), 9, customTooltip2('<h2>2014</h2> <p>Field Size: 8</p>')],
		['2015', 1, customTooltip2('<h2>2015</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>American Pharoah</b></p>'), 9, customTooltip2('<h2>2015</h2> <p>Field Size: 8</p>')],
		['2016', 4, customTooltip2('<h2>2016</h2> <p>4th Choice</p> <h3>Winner</h3> <p><b>Creator</b></p>'), 12, customTooltip2('<h2>2016</h2> <p>Field Size: 12</p>')],
		['2017', 1, customTooltip2('<h2>2017</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Classic Empire</b></p>'), 12, customTooltip2('<h2>2017</h2> <p>Field Size: 12</p>')],
		['2018', 1, customTooltip2('<h2>2018</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Magnum Moon</b></p>'), 9, customTooltip2('<h2>2018</h2> <p>Field Size: 9</p>')],
		['2019', 1, customTooltip2('<h2>2019</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Omaha Beach</b></p>'), 11, customTooltip2('<h2>2019</h2> <p>Field Size: 11</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Arkansas Derby Winners $1 Odds 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 12, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Arkansas Derby Winners Bettors\' Choice & Field Size 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 16, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };



// draw charts
	var chart = new google.visualization.ColumnChart(document.getElementById('odds'));
	chart.draw(dataTable, options);

	var chart2 = new google.visualization.ColumnChart(document.getElementById('choice-field'));
	chart2.draw(dataTable2, options2);




// style tooltip odds
	function customTooltip(text) {
    return '<div class="tooltip">' + text + '</div>';
	}

// style tooltip choice and field size
	function customTooltip2(text) {
    return '<div class="tooltip">' + text + '</div>';
	}



// make responsive
	function resizeChart () {
	chart.draw(dataTable, options);
	chart2.draw(dataTable2, options2);

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
