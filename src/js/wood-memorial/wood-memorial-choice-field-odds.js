google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 2, customTooltip('<h2>1991</h2><p>$1 Odds: $2.00</p><p>$2 Payout:  $6.00</p> <h3>Winner</h3><p><b>Cahill Road</b></p>')],
		['1992', 2.8, customTooltip('<h2>1992</h2><p>$1 Odds: $2.80</p><p>$2 Payout:  $7.60</p> <h3>Winner</h3><p><b>Devil His Due</b></p>')],
		['1993', 2.6, customTooltip('<h2>1993</h2><p>$1 Odds: $2.60</p><p>$2 Payout:  $7.20</p> <h3>Winner</h3><p><b>Storm Tower</b></p>')],
		['1994', 1.8, customTooltip('<h2>1994</h2><p>$1 Odds: $1.80</p><p>$2 Payout:  $5.60</p> <h3>Winner</h3><p><b>Irgun</b></p>')],
		['1995', 0.45, customTooltip('<h2>1995</h2><p>$1 Odds: $0.45</p><p>$2 Payout:  $2.90</p> <h3>Winner</h3><p><b>Talkin Man</b></p>')],
		['1996', 0.2, customTooltip('<h2>1996</h2><p>$1 Odds: $0.20</p><p>$2 Payout:  $2.40</p> <h3>Winner</h3><p><b>Unbridled\'\s Song</b></p>')],
		['1997', 1.75, customTooltip('<h2>1997</h2><p>$1 Odds: $1.75</p><p>$2 Payout:  $5.50</p> <h3>Winner</h3><p><b>Captain Bodgit</b></p>')],
		['1998', 1.1, customTooltip('<h2>1998</h2><p>$1 Odds: $1.10</p><p>$2 Payout:  $4.20</p> <h3>Winner</h3><p><b>Coronado\'\s Quest</b></p>')],
		['1999', 3.2, customTooltip('<h2>1999</h2><p>$1 Odds: $3.20</p><p>$2 Payout:  $8.40</p> <h3>Winner</h3><p><b>Adonis</b></p>')],
		['2000', 0.9, customTooltip('<h2>2000</h2><p>$1 Odds: $0.90</p><p>$2 Payout:  $3.80</p> <h3>Winner</h3><p><b>Fusaichi Pegasus</b></p>')],
		['2001', 1.7, customTooltip('<h2>2001</h2><p>$1 Odds: $1.70</p><p>$2 Payout:  $5.40</p> <h3>Winner</h3><p><b>Congaree</b></p>')],
		['2002', 1.7, customTooltip('<h2>2002</h2><p>$1 Odds: $3.10</p><p>$2 Payout:  $8.20</p> <h3>Winner</h3><p><b>Buddha</b></p>')],
		['2003', 0.55, customTooltip('<h2>2003</h2><p>$1 Odds: $0.55</p><p>$2 Payout:  $3.10</p> <h3>Winner</h3><p><b>Empire Maker</b></p>')],
		['2004', 5.3, customTooltip('<h2>2004</h2><p>$1 Odds: $5.30</p><p>$2 Payout:  $12.60</p> <h3>Winner</h3><p><b>Tapit</b></p>')],
		['2005', 2.55, customTooltip('<h2>2005</h2><p>$1 Odds: $2.55</p><p>$2 Payout:  $7.10</p> <h3>Winner</h3><p><b>Bellamy Road</b></p>')],
		['2006', 2.2, customTooltip('<h2>2006</h2><p>$1 Odds: $2.20</p><p>$2 Payout:  $6.40</p> <h3>Winner</h3><p><b>Bob and John</b></p>')],
		['2007', 0.7, customTooltip('<h2>2007</h2><p>$1 Odds: $0.70</p><p>$2 Payout:  $3.40</p> <h3>Winner</h3><p><b>Nobiz Like Shobiz</b></p>')],
		['2008', 8.5, customTooltip('<h2>2008</h2><p>$1 Odds: $8.50</p><p>$2 Payout:  $19.00</p> <h3>Winner</h3><p><b>Tale of Ekati</b></p>')],
		['2009', 0.5, customTooltip('<h2>2009</h2><p>$1 Odds: $0.50</p><p>$2 Payout:  $3.00</p> <h3>Winner</h3><p><b>I Want Revenge</b></p>')],
		['2010', 0.5, customTooltip('<h2>2010</h2><p>$1 Odds: $0.50</p><p>$2 Payout:  $3.00</p> <h3>Winner</h3><p><b>Eskendereya</b></p>')],
		['2011', 8.7, customTooltip('<h2>2011</h2><p>$1 Odds: $8.70</p><p>$2 Payout:  $19.40</p> <h3>Winner</h3><p><b>Toby\'\s Corner</b></p>')],
		['2012', 1.2, customTooltip('<h2>2012</h2><p>$1 Odds: $1.20</p><p>$2 Payout:  $4.40</p> <h3>Winner</h3><p><b>Gemologist</b></p>')],
		['2013', 0.8, customTooltip('<h2>2013</h2><p>$1 Odds: $0.80</p><p>$2 Payout:  $3.60</p> <h3>Winner</h3><p><b>Verrazano</b></p>')],
		['2014', 9.2, customTooltip('<h2>2014</h2><p>$1 Odds: $9.20</p><p>$2 Payout:  $20.40</p> <h3>Winner</h3><p><b>Wicked Strong</b></p>')],
		['2015', 2.2, customTooltip('<h2>2015</h2><p>$1 Odds: $2.20</p><p>$2 Payout:  $6.40</p> <h3>Winner</h3><p><b>Frosted</b></p>')],
		['2016', 2.4, customTooltip('<h2>2016</h2><p>$1 Odds: $2.40</p><p>$2 Payout:  $6.80</p> <h3>Winner</h3><p><b>Outwork</b></p>')],
		['2017', 3.5, customTooltip('<h2>2017</h2><p>$1 Odds: $3.50</p><p>$2 Payout:  $9.00</p> <h3>Winner</h3><p><b>Irish War Cry</b></p>')],
		['2018', 4.2, customTooltip('<h2>2018</h2><p>$1 Odds: $4.20</p><p>$2 Payout:  $10.40</p> <h3>Winner</h3><p><b>Vino Rosso</b></p>')],
		['2019', 2.6, customTooltip('<h2>2019</h2><p>$1 Odds: $2.60</p><p>$2 Payout:  $7.20</p> <h3>Winner</h3><p><b>Tacitus</b></p>')],



  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
		dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 1, customTooltip2('<h2>1991</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Cahill Road</b></p>'), 10, customTooltip2('<h2>1991</h2><p> Field Size: 10</p>')],
		['1992', 2, customTooltip2('<h2>1992</h2><p> 2nd Choice</p> <h3>Winner</h3><p><b>Devil His Due</b></p>'), 12, customTooltip2('<h2>1992</h2><p> Field Size: 12</p>')],
		['1993', 3, customTooltip2('<h2>1993</h2><p> 3rd Choice</p> <h3>Winner</h3><p><b>Storm Tower</b></p>'), 12, customTooltip2('<h2>1993</h2><p> Field Size: 12</p>')],
		['1994', 3, customTooltip2('<h2>1994</h2><p> 3rd Choice</p> <h3>Winner</h3><p><b>Irgun</b></p>'), 9, customTooltip2('<h2>1994</h2><p> Field Size: 9</p>')],
		['1995', 1, customTooltip2('<h2>1995</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Talkin Man</b></p>'), 8, customTooltip2('<h2>1995</h2><p> Field Size: 8</p>')],
		['1996', 1, customTooltip2('<h2>1996</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Unbridled\'\s Song</b></p>'), 6, customTooltip2('<h2>1996</h2><p> Field Size: 6</p>')],
		['1997', 1, customTooltip2('<h2>1997</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Captain Bodgit</b></p>'), 10, customTooltip2('<h2>1997</h2><p> Field Size: 10</p>')],
		['1998', 1, customTooltip2('<h2>1998</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Coronado\'\s Quest</b></p>'), 11, customTooltip2('<h2>1998</h2><p> Field Size: 11</p>')],
		['1999', 2, customTooltip2('<h2>1999</h2><p> 2nd Choice</p> <h3>Winner</h3><p><b>Adonis</b></p>'), 11, customTooltip2('<h2>1999</h2><p> Field Size: 11</p>')],
		['2000', 1, customTooltip2('<h2>2000</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Fusaichi Pegasus</b></p>'), 12, customTooltip2('<h2>2000</h2><p> Field Size: 12</p>')],
		['2001', 2, customTooltip2('<h2>2001</h2><p> 2nd Choice</p> <h3>Winner</h3><p><b>Congaree</b></p>'), 6, customTooltip2('<h2>2001</h2><p> Field Size: 6</p>')],
		['2002', 2, customTooltip2('<h2>2002</h2><p> 2nd Choice</p> <h3>Winner</h3><p><b>Buddha</b></p>'), 8, customTooltip2('<h2>2002</h2><p> Field Size: 8</p>')],
		['2003', 1, customTooltip2('<h2>2003</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Empire Maker</b></p>'), 8, customTooltip2('<h2>2003</h2><p> Field Size: 8</p>')],
		['2004', 4, customTooltip2('<h2>2004</h2><p> 4th Choice</p> <h3>Winner</h3><p><b>Tapit</b></p>'), 11, customTooltip2('<h2>2004</h2><p> Field Size: 11</p>')],
		['2005', 1, customTooltip2('<h2>2005</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Bellamy Road</b></p>'), 7, customTooltip2('<h2>2005</h2><p> Field Size: 7</p>')],
		['2006', 2, customTooltip2('<h2>2006</h2><p> 2nd Choice</p> <h3>Winner</h3><p><b>Bob and John</b></p>'), 9, customTooltip2('<h2>2006</h2><p> Field Size: 9</p>')],
		['2007', 1, customTooltip2('<h2>2007</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Nobiz Like Shobiz</b></p>'), 6, customTooltip2('<h2>2007</h2><p> Field Size: 6</p>')],
		['2008', 5, customTooltip2('<h2>2008</h2><p> 5th Choice</p> <h3>Winner</h3><p><b>Tale of Ekati</b></p>'), 9, customTooltip2('<h2>2008</h2><p> Field Size: 9</p>')],
		['2009', 1, customTooltip2('<h2>2009</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>I Want Revenge</b></p>'), 8, customTooltip2('<h2>2009</h2><p> Field Size: 8</p>')],
		['2010', 1, customTooltip2('<h2>2010</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Eskendereya</b></p>'), 6, customTooltip2('<h2>2010</h2><p> Field Size: 6</p>')],
		['2011', 2, customTooltip2('<h2>2011</h2><p> 2nd Choice</p> <h3>Winner</h3><p><b>Toby\'\s Corner</b></p>'), 9, customTooltip2('<h2>2011</h2><p> Field Size: 9</p>')],
		['2012', 1, customTooltip2('<h2>2012</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Gemologist</b></p>'), 8, customTooltip2('<h2>2012</h2><p> Field Size: 8</p>')],
		['2013', 1, customTooltip2('<h2>2013</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Verrazano</b></p>'), 10, customTooltip2('<h2>2013</h2><p> Field Size: 10</p>')],
		['2014', 5, customTooltip2('<h2>2014</h2><p> 5th Choice</p> <h3>Winner</h3><p><b>Wicked Strong</b></p>'), 10, customTooltip2('<h2>2014</h2><p> Field Size: 10</p>')],
		['2015', 2, customTooltip2('<h2>2015</h2><p> 2nd Choice</p> <h3>Winner</h3><p><b>Frosted</b></p>'), 7, customTooltip2('<h2>2015</h2><p> Field Size: 7</p>')],
		['2016', 2, customTooltip2('<h2>2016</h2><p> 2nd Choice</p> <h3>Winner</h3><p><b>Outwork</b></p>'), 8, customTooltip2('<h2>2016</h2><p> Field Size: 8</p>')],
		['2017', 3, customTooltip2('<h2>2017</h2><p> 3rd Choice</p> <h3>Winner</h3><p><b>Irish War Cry</b></p>'), 8, customTooltip2('<h2>2017</h2><p> Field Size: 8</p>')],
		['2018', 3, customTooltip2('<h2>2018</h2><p> 3rd Choice</p> <h3>Winner</h3><p><b>Vino Rosso</b></p>'), 9, customTooltip2('<h2>2018</h2><p> Field Size: 9</p>')],
		['2019', 1, customTooltip2('<h2>2019</h2><p> 1st Choice</p> <h3>Winner</h3><p><b>Tacitus</b></p>'), 11, customTooltip2('<h2>2019</h2><p> Field Size: 11</p>')],


    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Wood Memorial Winners $1 Odds 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 11, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Wood Memorial Winners Bettors\' Choice & Field Size 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 13, color: '#dddddd'}},
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
