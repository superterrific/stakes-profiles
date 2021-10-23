google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 4.3, customTooltip('<h2>1991</h2> <p>$1 Odds: $4.30</p> <p>$2 Payout:  $10.60</p> <h3>Winner<p><b>Crowned</b></p>')],
		['1992', 1.4, customTooltip('<h2>1992</h2> <p>$1 Odds: $1.40</p> <p>$2 Payout:  $4.80</p> <h3>Winner<p><b>Brilliant Brass</b></p>')],
		['1993', 4.4, customTooltip('<h2>1993</h2> <p>$1 Odds: $4.40</p> <p>$2 Payout:  $10.80</p> <h3>Winner<p><b>Green Darlin</b></p>')],
		['1994', 6.7, customTooltip('<h2>1994</h2> <p>$1 Odds: $6.70</p> <p>$2 Payout:  $15.40</p> <h3>Winner<p><b>With a Wink</b></p>')],
		['1996', 1.7, customTooltip('<h2>1996</h2> <p>$1 Odds: $1.70</p> <p>$2 Payout:  $5.40</p> <h3>Winner<p><b>Urbane</b></p>')],
		['1999', 4.6, customTooltip('<h2>1999</h2> <p>$1 Odds: $4.60</p> <p>$2 Payout:  $11.20</p> <h3>Winner<p><b>Tap to Music</b></p>')],
		['2000', 2.2, customTooltip('<strong>2000</h2> <p>$1 Odds: $2.20</p> <p>$2 Payout:  $6.40</p> <h3>Winner<p><b>Lu Ravi</b></p>')],
		['2001', 18, customTooltip('<strong>2001</h2> <p>$1 Odds: $18.00</p> <p>$2 Payout:  $38.00</p> <h3>Winner<p><b>Irving\'\s Baby</b></p>')],
		['2002', 1, customTooltip('<strong>2002</h2> <p>$1 Odds: $1.00</p> <p>$2 Payout:  $4.00</p> <h3>Winner<p><b>Summer Colony</b></p>')],
		['2003', 0.8, customTooltip('<strong>2003</h2> <p>$1 Odds: $0.80</p> <p>$2 Payout:  $3.60</p> <h3>Winner<p><b>Wild Spirit (CHI)</b></p>')],
		['2004', 1, customTooltip('<strong>2004</h2> <p>$1 Odds: $1.00</p> <p>$2 Payout:  $4.00</p> <h3>Winner<p><b>Summer Wind Dancer</b></p>')],
		['2005', 5.6, customTooltip('<strong>2005</h2> <p>$1 Odds: $5.60</p> <p>$2 Payout:  $13.20</p> <h3>Winner<p><b>Island Sand</b></p>')],
		['2006', 0.4, customTooltip('<strong>2006</h2> <p>$1 Odds: $0.40</p> <p>$2 Payout:  $2.80</p> <h3>Winner<p><b>Fleet Indian</b></p>')],
		['2007', 8.3, customTooltip('<strong>2007</h2> <p>$1 Odds: $8.30</p> <p>$2 Payout:  $18.60</p> <h3>Winner<p><b>Unbridled Belle</b></p>')],
		['2008', 2.5, customTooltip('<strong>2008</h2> <p>$1 Odds: $2.50</p> <p>$2 Payout:  $7.00</p> <h3>Winner<p><b>Hystericalady</b></p>')],
		['2009', 7.5, customTooltip('<strong>2009</h2> <p>$1 Odds: $7.50</p> <p>$2 Payout:  $17.00</p> <h3>Winner<p><b>Swift Temper</b></p>')],
		['2010', 0.6, customTooltip('<strong>2010</h2> <p>$1 Odds: $0.60</p> <p>$2 Payout:  $3.20</p> <h3>Winner<p><b>Life At Ten</b></p>')],
		['2011', 1.1, customTooltip('<strong>2011</h2> <p>$1 Odds: $1.10</p> <p>$2 Payout:  $4.20</p> <h3>Winner<p><b>Blind Luck</b></p>')],
		['2012', 0.5, customTooltip('<strong>2012</h2> <p>$1 Odds: $0.50</p> <p>$2 Payout:  $3.00</p> <h3>Winner<p><b>Royal Delta</b></p>')],
		['2013', 0.4, customTooltip('<strong>2013</h2> <p>$1 Odds: $0.40</p> <p>$2 Payout:  $2.80</p> <h3>Winner<p><b>Royal Delta</b></p>')],
		['2014', 6.8, customTooltip('<strong>2014</h2> <p>$1 Odds: $6.80</p> <p>$2 Payout:  $15.60</p> <h3>Winner<p><b>Belle Gallantey</b></p>')],
		['2015', 2.5, customTooltip('<strong>2015</h2> <p>$1 Odds: $2.50</p> <p>$2 Payout:  $7.00</p> <h3>Winner<p><b>Sheer Drama</b></p>')],
		['2016', 0.6, customTooltip('<strong>2016</h2> <p>$1 Odds: $0.60</p> <p>$2 Payout:  $3.20</p> <h3>Winner<p><b>I\'\m a Chatterbox</b></p>')],
		['2017', 0.05, customTooltip('<strong>2017</h2> <p>$1 Odds: $0.05</p> <p>$2 Payout:  $2.10</p> <h3>Winner<p><b>Songbird</b></p>')],
		['2018', 0.60, customTooltip('<strong>2018</h2> <p>$1 Odds: $0.60</p> <p>$2 Payout:  $3.20</p> <h3>Winner<p><b>Elate</b></p>')],
		['2019', 0.30, customTooltip('<strong>2019</h2> <p>$1 Odds: $0.30</p> <p>$2 Payout:  $2.60</p> <h3>Winner<p><b>Elate</b></p>')],
  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 2, customTooltip2('<h2>1991</h2> <p>2nd Choice</p> <h3>Winner<p><b>Crowned</b></p>'), 8, customTooltip2('<h2>1991</h2> <p>Field Size: 8</p>')],
		['1992', 2, customTooltip2('<h2>1992</h2> <p>2nd Choice</p> <h3>Winner<p><b>Brilliant Brass</b></p>'), 6, customTooltip2('<h2>1992</h2> <p>Field Size: 6</p>')],
		['1993', 2, customTooltip2('<h2>1993</h2> <p>2nd Choice</p> <h3>Winner<p><b>Green Darlin</b></p>'), 11, customTooltip2('<h2>1993</h2> <p>Field Size: 11</p>')],
		['1994', 5, customTooltip2('<h2>1994</h2> <p>5th Choice</p> <h3>Winner<p><b>With a Wink</b></p>'), 9, customTooltip2('<h2>1994</h2> <p>Field Size: 9</p>')],
		['1995', 8, customTooltip2('<h2>1995</h2> <p>8th Choice</p> <h3>Winner<p><b>Night Fax</b></p>'), 8, customTooltip2('<h2>1995</h2> <p>Field Size: 8</p>')],
		['1996', 1, customTooltip2('<h2>1996</h2> <p>1st Choice</p> <h3>Winner<p><b>Urbane</b></p>'), 13, customTooltip2('<h2>1996</h2> <p>Field Size: 13</p>')],
		['1997', 7, customTooltip2('<h2>1997</h2> <p>7th Choice</p> <h3>Winner<p><b>Power Play</b></p>'), 11, customTooltip2('<h2>1997</h2> <p>Field Size: 11</p>')],
		['1998', 6, customTooltip2('<h2>1998</h2> <p>6th Choice</p> <h3>Winner<p><b>Amarillo</b></p>'), 9, customTooltip2('<h2>1998</h2> <p>Field Size: 9</p>')],
		['1999', 3, customTooltip2('<h2>1999</h2> <p>3rd Choice</p> <h3>Winner<p><b>Tap to Music</b></p>'), 13, customTooltip2('<h2>1999</h2> <p>Field Size: 13</p>')],
		['2000', 2, customTooltip2('<strong>2000</h2> <p>2nd Choice</p> <h3>Winner<p><b>Lu Ravi</b></p>'), 8, customTooltip2('<strong>2000</h2> <p>Field Size: 8</p>')],
		['2001', 5, customTooltip2('<strong>2001</h2> <p>5th Choice</p> <h3>Winner<p><b>Irving\'\s Baby</b></p>'), 6, customTooltip2('<strong>2001</h2> <p>Field Size: 6</p>')],
		['2002', 1, customTooltip2('<strong>2002</h2> <p>1st Choice</p> <h3>Winner<p><b>Summer Colony</b></p>'), 9, customTooltip2('<strong>2002</h2> <p>Field Size: 9</p>')],
		['2003', 1, customTooltip2('<strong>2003</h2> <p>1st Choice</p> <h3>Winner<p><b>Wild Spirit (CHI)</b></p>'), 8, customTooltip2('<strong>2003</h2> <p>Field Size: 8</p>')],
		['2004', 1, customTooltip2('<strong>2004</h2> <p>1st Choice</p> <h3>Winner<p><b>Summer Wind Dancer</b></p>'), 8, customTooltip2('<strong>2004</h2> <p>Field Size: 8</p>')],
		['2005', 3, customTooltip2('<strong>2005</h2> <p>3rd Choice</p> <h3>Winner<p><b>Island Sand</b></p>'), 11, customTooltip2('<strong>2005</h2> <p>Field Size: 11</p>')],
		['2006', 1, customTooltip2('<strong>2006</h2> <p>1st Choice</p> <h3>Winner<p><b>Fleet Indian</b></p>'), 9, customTooltip2('<strong>2006</h2> <p>Field Size: 9</p>')],
		['2007', 4, customTooltip2('<strong>2007</h2> <p>4th Choice</p> <h3>Winner<p><b>Unbridled Belle</b></p>'), 8, customTooltip2('<strong>2007</h2> <p>Field Size: 8</p>')],
		['2008', 3, customTooltip2('<strong>2008</h2> <p>3rd Choice</p> <h3>Winner<p><b>Hystericalady</b></p>'), 8, customTooltip2('<strong>2008</h2> <p>Field Size: 8</p>')],
		['2009', 4, customTooltip2('<strong>2009</h2> <p>4th Choice</p> <h3>Winner<p><b>Swift Temper</b></p>'), 6, customTooltip2('<strong>2009</h2> <p>Field Size: 6</p>')],
		['2010', 1, customTooltip2('<strong>2010</h2> <p>1st Choice</p> <h3>Winner<p><b>Life At Ten</b></p>'), 6, customTooltip2('<strong>2010</h2> <p>Field Size: 6</p>')],
		['2011', 2, customTooltip2('<strong>2011</h2> <p>2nd Choice</p> <h3>Winner<p><b>Blind Luck</b></p>'), 5, customTooltip2('<strong>2011</h2> <p>Field Size: 5</p>')],
		['2012', 1, customTooltip2('<strong>2012</h2> <p>1st Choice</p> <h3>Winner<p><b>Royal Delta</b></p>'), 7, customTooltip2('<strong>2012</h2> <p>Field Size: 7</p>')],
		['2013', 1, customTooltip2('<strong>2013</h2> <p>1st Choice</p> <h3>Winner<p><b>Royal Delta</b></p>'), 5, customTooltip2('<strong>2013</h2> <p>Field Size: 5</p>')],
		['2014', 2, customTooltip2('<strong>2014</h2> <p>2nd Choice</p> <h3>Winner<p><b>Belle Gallantey</b></p>'), 6, customTooltip2('<strong>2014</h2> <p>Field Size: 6</p>')],
		['2015', 2, customTooltip2('<strong>2015</h2> <p>2nd Choice</p> <h3>Winner<p><b>Sheer Drama</b></p>'), 7, customTooltip2('<strong>2015</h2> <p>Field Size: 7</p>')],
		['2016', 1, customTooltip2('<strong>2016</h2> <p>1st Choice</p> <h3>Winner<p><b>I\'\m a Chatterbox</b></p>'), 6, customTooltip2('<strong>2016</h2> <p>Field Size: 6</p>')],
		['2017', 1, customTooltip2('<strong>2017</h2> <p>1st Choice</p> <h3>Winner<p><b>Songbird</b></p>'), 5, customTooltip2('<strong>2017</h2> <p>Field Size: 5</p>')],
		['2018', 1, customTooltip2('<strong>2018</h2> <p>1st Choice</p> <h3>Winner<p><b>Elate</b></p>'), 8, customTooltip2('<strong>2018</h2> <p>Field Size: 8</p>')],
		['2019', 1, customTooltip2('<strong>2019</h2> <p>1st Choice</p> <h3>Winner<p><b>Elate</b></p>'), 9, customTooltip2('<strong>2019</h2> <p>Field Size: 9</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Delaware Handicap Winners $1 Odds 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 10, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Delaware Handicap Winners Bettors\' Choice & Field Size 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 8, color: '#dddddd'}},
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
