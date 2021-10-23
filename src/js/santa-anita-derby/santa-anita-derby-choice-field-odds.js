google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 2.2, customTooltip('<h2>1991</h2> <p>$1 Odds: $2.20</p><p>$2 Payout:  $6.40</p> <h3>Winner</h3><p><b>Dinard</b></p>')],
		['1992', 0.9, customTooltip('<h2>1992</h2> <p>$1 Odds: $0.90</p><p>$2 Payout:  $3.80</p> <h3>Winner</h3><p><b>A.P. Indy</b></p>')],
		['1993', 1.5, customTooltip('<h2>1993</h2> <p>$1 Odds: $1.50</p><p>$2 Payout:  $5.00</p> <h3>Winner</h3><p><b>Personal Hope</b></p>')],
		['1994', 0.7, customTooltip('<h2>1994</h2> <p>$1 Odds: $0.70</p><p>$2 Payout:  $3.40</p> <h3>Winner</h3><p><b>Brocco</b></p>')],
		['1995', 5.8, customTooltip('<h2>1995</h2> <p>$1 Odds: $5.80</p><p>$2 Payout:  $13.60</p> <h3>Winner</h3><p><b>Larry the Legend</b></p>')],
		['1996', 10, customTooltip('<h2>1996</h2> <p>$1 Odds: $10.00</p><p>$2 Payout:  $22.00</p> <h3>Winner</h3><p><b>Cavonnier</b></p>')],
		['1997', 7.3, customTooltip('<h2>1997</h2> <p>$1 Odds: $7.30</p><p>$2 Payout:  $16.60</p> <h3>Winner</h3><p><b>Free House</b></p>')],
		['1998', 1.8, customTooltip('<h2>1998</h2> <p>$1 Odds: $1.80</p><p>$2 Payout:  $5.60</p> <h3>Winner</h3><p><b>Indian Charlie</b></p>')],
		['1999', 2.8, customTooltip('<h2>1999</h2> <p>$1 Odds: $2.80</p><p>$2 Payout:  $7.60</p> <h3>Winner</h3><p><b>General Challenge</b></p>')],
		['2000', 2.4, customTooltip('<h2>2000</h2> <p>$1 Odds: $2.40</p><p>$2 Payout:  $6.80</p> <h3>Winner</h3><p><b>The Deputy (IRE)</b></p>')],
		['2001', 0.7, customTooltip('<h2>2001</h2> <p>$1 Odds: $0.70</p><p>$2 Payout:  $3.40</p> <h3>Winner</h3><p><b>Point Given</b></p>')],
		['2002', 1.1, customTooltip('<h2>2002</h2> <p>$1 Odds: $1.10</p><p>$2 Payout:  $4.20</p> <h3>Winner</h3><p><b>Came Home</b></p>')],
		['2003', 6.3, customTooltip('<h2>2003</h2> <p>$1 Odds: $6.30</p><p>$2 Payout:  $14.60</p> <h3>Winner</h3><p><b>Buddy Gil</b></p>')],
		['2006', 0.5, customTooltip('<h2>2006</h2> <p>$1 Odds: $0.50</p><p>$2 Payout:  $3.00</p> <h3>Winner</h3><p><b>Brother Derek</b></p>')],
		['2008', 2.6, customTooltip('<h2>2008</h2> <p>$1 Odds: $2.60</p><p>$2 Payout:  $7.20</p> <h3>Winner</h3><p><b>Colonel John</b></p>')],
		['2009', 0.8, customTooltip('<h2>2009</h2> <p>$1 Odds: $0.80</p><p>$2 Payout:  $3.60</p> <h3>Winner</h3><p><b>Pioneerof the Nile</b></p>')],
		['2010', 3.8, customTooltip('<h2>2010</h2> <p>$1 Odds: $3.80</p><p>$2 Payout:  $9.60</p> <h3>Winner</h3><p><b>Sidney\'\s Candy</b></p>')],
		['2011', 13.9, customTooltip('<h2>2011</h2> <p>$1 Odds: $13.90</p><p>$2 Payout:  $29.80</p> <h3>Winner</h3><p><b>Midnight Interlude</b></p>')],
		['2012', 4.1, customTooltip('<h2>2012</h2> <p>$1 Odds: $4.10</p><p>$2 Payout:  $10.20</p> <h3>Winner</h3><p><b>I\'\ll Have Another</b></p>')],
		['2013', 6.5, customTooltip('<h2>2013</h2> <p>$1 Odds: $6.50</p><p>$2 Payout:  $15.00</p> <h3>Winner</h3><p><b>Goldencents</b></p>')],
		['2014', 0.7, customTooltip('<h2>2014</h2> <p>$1 Odds: $0.70</p><p>$2 Payout:  $3.40</p> <h3>Winner</h3><p><b>California Chrome</b></p>')],
		['2015', 0.6, customTooltip('<h2>2015</h2> <p>$1 Odds: $0.60</p><p>$2 Payout:  $3.20</p> <h3>Winner</h3><p><b>Dortmund</b></p>')],
		['2016', 3.4, customTooltip('<h2>2016</h2> <p>$1 Odds: $3.40</p><p>$2 Payout:  $8.80</p> <h3>Winner</h3><p><b>Exaggerator</b></p>')],
		['2017', 6.2, customTooltip('<h2>2017</h2> <p>$1 Odds: $6.20</p><p>$2 Payout:  $14.40</p> <h3>Winner</h3><p><b>Gormley</b></p>')],
		['2018', 0.9, customTooltip('<h2>2018</h2> <p>$1 Odds: $.90</p><p>$2 Payout:  $3.80</p> <h3>Winner</h3><p><b>Justify</b></p>')],
		['2019', 3.1, customTooltip('<h2>2018</h2> <p>$1 Odds: $3.10</p><p>$2 Payout:  $8.20</p> <h3>Winner</h3><p><b>Roadster</b></p>')],


  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 2, customTooltip2('<h2>1991</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Dinard</b></p>'), 9, customTooltip2('<h2>1991</h2> <p>Field Size: 9</p>')],
		['1992', 1, customTooltip2('<h2>1992</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>A.P. Indy</b></p>'), 7, customTooltip2('<h2>1992</h2> <p>Field Size: 7</p>')],
		['1993', 1, customTooltip2('<h2>1993</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Personal Hope</b></p>'), 7, customTooltip2('<h2>1993</h2> <p>Field Size: 7</p>')],
		['1994', 1, customTooltip2('<h2>1994</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Brocco</b></p>'), 6, customTooltip2('<h2>1994</h2> <p>Field Size: 6</p>')],
		['1995', 3, customTooltip2('<h2>1995</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Larry the Legend</b></p>'), 8, customTooltip2('<h2>1995</h2> <p>Field Size: 8</p>')],
		['1996', 5, customTooltip2('<h2>1996</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Cavonnier</b></p>'), 8, customTooltip2('<h2>1996</h2> <p>Field Size: 8</p>')],
		['1997', 4, customTooltip2('<h2>1997</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Free House</b></p>'), 10, customTooltip2('<h2>1997</h2> <p>Field Size: 10</p>')],
		['1998', 1, customTooltip2('<h2>1998</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Indian Charlie</b></p>'), 7, customTooltip2('<h2>1998</h2> <p>Field Size: 7</p>')],
		['1999', 3, customTooltip2('<h2>1999</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>General Challenge</b></p>'), 8, customTooltip2('<h2>1999</h2> <p>Field Size: 8</p>')],
		['2000', 2, customTooltip2('<h2>2000</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>The Deputy (IRE)</b></p>'), 6, customTooltip2('<h2>2000</h2> <p>Field Size: 6</p>')],
		['2001', 1, customTooltip2('<h2>2001</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Point Given</b></p>'), 6, customTooltip2('<h2>2001</h2> <p>Field Size: 6</p>')],
		['2002', 1, customTooltip2('<h2>2002</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Came Home</b></p>'), 8, customTooltip2('<h2>2002</h2> <p>Field Size: 8</p>')],
		['2003', 4, customTooltip2('<h2>2003</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Buddy Gil</b></p>'), 9, customTooltip2('<h2>2003</h2> <p>Field Size: 9</p>')],
		['2004', 6, customTooltip2('<h2>2004</h2> <p>6th Choice</p> <h3>Winner</h3><p><b>Castledale (IRE)</b></p>'), 7, customTooltip2('<h2>2004</h2> <p>Field Size: 7</p>')],
		['2005', 7, customTooltip2('<h2>2005</h2> <p>7th Choice</p> <h3>Winner</h3><p><b>Buzzards Bay</b></p>'), 11, customTooltip2('<h2>2005</h2> <p>Field Size: 11</p>')],
		['2006', 1, customTooltip2('<h2>2006</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Brother Derek</b></p>'), 5, customTooltip2('<h2>2006</h2> <p>Field Size: 5</p>')],
		['2007', 9, customTooltip2('<h2>2007</h2> <p>9th Choice</p> <h3>Winner</h3><p><b>Tiago</b></p>'), 10, customTooltip2('<h2>2007</h2> <p>Field Size: 10</p>')],
		['2008', 2, customTooltip2('<h2>2008</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Colonel John</b></p>'), 11, customTooltip2('<h2>2008</h2> <p>Field Size: 11</p>')],
		['2009', 1, customTooltip2('<h2>2009</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Pioneerof the Nile</b></p>'), 7, customTooltip2('<h2>2009</h2> <p>Field Size: 7</p>')],
		['2010', 2, customTooltip2('<h2>2010</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Sidney\'\s Candy</b></p>'), 10, customTooltip2('<h2>2010</h2> <p>Field Size: 10</p>')],
		['2011', 7, customTooltip2('<h2>2011</h2> <p>7th Choice</p> <h3>Winner</h3><p><b>Midnight Interlude</b></p>'), 9, customTooltip2('<h2>2011</h2> <p>Field Size: 9</p>')],
		['2012', 2, customTooltip2('<h2>2012</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>I\'\ll Have Another</b></p>'), 9, customTooltip2('<h2>2012</h2> <p>Field Size: 9</p>')],
		['2013', 5, customTooltip2('<h2>2013</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Goldencents</b></p>'), 8, customTooltip2('<h2>2013</h2> <p>Field Size: 8</p>')],
		['2014', 1, customTooltip2('<h2>2014</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>California Chrome</b></p>'), 8, customTooltip2('<h2>2014</h2> <p>Field Size: 8</p>')],
		['2015', 1, customTooltip2('<h2>2015</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Dortmund</b></p>'), 6, customTooltip2('<h2>2015</h2> <p>Field Size: 6</p>')],
		['2016', 3, customTooltip2('<h2>2016</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Exaggerator</b></p>'), 8, customTooltip2('<h2>2016</h2> <p>Field Size: 8</p>')],
		['2017', 3, customTooltip2('<h2>2017</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Gormley</b></p>'), 13, customTooltip2('<h2>2017</h2> <p>Field Size: 13</p>')],
		['2018', 1, customTooltip2('<h2>2018</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Justify</b></p>'), 7, customTooltip2('<h2>2018</h2> <p>Field Size: 7</p>')],
		['2019', 2, customTooltip2('<h2>2019</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Roadster</b></p>'), 7, customTooltip2('<h2>2019</h2> <p>Field Size: 6</p>')],


    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Santa Anita Derby Winners $1 Odds 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 16, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Santa Anita Derby Winners Bettors\' Choice & Field Size 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, maxValue: 10, gridlines: {count: 14, color: '#dddddd'}},
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
