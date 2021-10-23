google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 0.4, customTooltip('<h2>1991</h2> <p>$1 Odds: $0.40</p><p>$2 Payout:  $2.80</p> <h3>Winner</h3><p><b>Fly So Free</p>')],
		['1992', 12.1, customTooltip('<h2>1992</h2> <p>$1 Odds: $12.10</p><p>$2 Payout:  $26.20</p> <h3>Winner</h3><p><b>Technology</p>')],
		['1994', 2.7, customTooltip('<h2>1994</h2> <p>$1 Odds: $2.70</p><p>$2 Payout:  $7.40</p> <h3>Winner</h3><p><b>Holy Bull</p>')],
		['1995', 2, customTooltip('<h2>1995</h2> <p>$1 Odds: $2.00</p><p>$2 Payout:  $6.00</p> <h3>Winner</h3><p><b>Thunder Gulch</p>')],
		['1996', 2, customTooltip('<h2>1996</h2> <p>$1 Odds: $2.00</p><p>$2 Payout:  $6.00</p> <h3>Winner</h3><p><b>Unbridled\'\s Song</p>')],
		['1997', 3.9, customTooltip('<h2>1997</h2> <p>$1 Odds: $3.90</p><p>$2 Payout:  $9.80</p> <h3>Winner</h3><p><b>Captain Bodgit</p>')],
		['1998', 0.7, customTooltip('<h2>1998</h2> <p>$1 Odds: $0.70</p><p>$2 Payout:  $27.80</p> <h3>Winner</h3><p><b>Lil\'\s Lad</p>')],
		['1999', 4.6, customTooltip('<h2>1999</h2> <p>$1 Odds: $4.60</p><p>$2 Payout:  $11.20</p> <h3>Winner</h3><p><b>Vicar</p>')],
		['2000', 6.9, customTooltip('<h2>2000</h2> <p>$1 Odds: $6.90</p><p>$2 Payout:  $15.80</p> <h3>Winner</h3><p><b>Hal\'\s Hope</p>')],
		['2001', 1.4, customTooltip('<h2>2001</h2> <p>$1 Odds: $1.40</p><p>$2 Payout:  $4.80</p> <h3>Winner</h3><p><b>Monarchos</p>')],
		['2002', 1.7, customTooltip('<h2>2002</h2> <p>$1 Odds: $1.70</p><p>$2 Payout:  $5.40</p> <h3>Winner</h3><p><b>Harlan\'\s Holiday</p>')],
		['2003', 2.1, customTooltip('<h2>2003</h2> <p>$1 Odds: $2.10</p><p>$2 Payout:  $6.20</p> <h3>Winner</h3><p><b>Empire Maker</p>')],
		['2005', 1.2, customTooltip('<h2>2005</h2> <p>$1 Odds: $1.20</p><p>$2 Payout:  $4.40</p> <h3>Winner</h3><p><b>High Fly</p>')],
		['2006', 1.6, customTooltip('<h2>2006</h2> <p>$1 Odds: $1.60</p><p>$2 Payout:  $5.30</p> <h3>Winner</h3><p><b>Barbaro</p>')],
		['2007', 2.2, customTooltip('<h2>2007</h2> <p>$1 Odds: $2.20</p><p>$2 Payout:  $6.40</p> <h3>Winner</h3><p><b>Scat Daddy</p>')],
		['2008', 1.5, customTooltip('<h2>2008</h2> <p>$1 Odds: $1.50</p><p>$2 Payout:  $5.00</p> <h3>Winner</h3><p><b>Big Brown</p>')],
		['2009', 1.2, customTooltip('<h2>2009</h2> <p>$1 Odds: $1.20</p><p>$2 Payout:  $4.40</p> <h3>Winner</h3><p><b>Quality Road</p>')],
		['2010', 20.7, customTooltip('<h2>2010</h2> <p>$1 Odds: $20.70</p><p>$2 Payout:  $43.40</p> <h3>Winner</h3><p><b>Ice Box</p>')],
		['2011', 2.9, customTooltip('<h2>2011</h2> <p>$1 Odds: $2.90</p><p>$2 Payout:  $7.80</p> <h3>Winner</h3><p><b>Dialed In</p>')],
		['2012', 7.7, customTooltip('<h2>2012</h2> <p>$1 Odds: $7.70</p><p>$2 Payout:  $17.40</p> <h3>Winner</h3><p><b>Take Charge Indy</p>')],
		['2013', 2.9, customTooltip('<h2>2013</h2> <p>$1 Odds: $2.90</p><p>$2 Payout:  $7.80</p> <h3>Winner</h3><p><b>Orb</p>')],
		['2014', 3.3, customTooltip('<h2>2014</h2> <p>$1 Odds: $3.30</p><p>$2 Payout:  $8.60</p> <h3>Winner</h3><p><b>Constitution</p>')],
		['2015', 1.8, customTooltip('<h2>2015</h2> <p>$1 Odds: $1.80</p><p>$2 Payout:  $5.60</p> <h3>Winner</h3><p><b>Materiality</p>')],
		['2016', 1.2, customTooltip('<h2>2016</h2> <p>$1 Odds: $1.20</p><p>$2 Payout:  $4.40</p> <h3>Winner</h3><p><b>Nyquist</p>')],
		['2017', 2.7, customTooltip('<h2>2017</h2> <p>$1 Odds: $2.70</p><p>$2 Payout:  $7.40</p> <h3>Winner</h3><p><b>Always Dreaming</p>')],
		['2018', 1.6, customTooltip('<h2>2018</h2> <p>$1 Odds: $1.60</p><p>$2 Payout:  $5.20</p> <h3>Winner</h3><p><b>Audible</p>')],
		['2019', 4.8, customTooltip('<h2>2019</h2> <p>$1 Odds: $4.80</p><p>$2 Payout:  $11.60</p> <h3>Winner</h3><p><b>Maximum Security</p>')],


  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
		dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 1, customTooltip2('<h2>1991</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Fly So Free</p>'), 8, customTooltip2('<h2>1991</h2> <p>Field Size: 8</p>')],
		['1992', 4, customTooltip2('<h2>1992</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Technology</p>'), 12, customTooltip2('<h2>1992</h2> <p>Field Size: 12</p>')],
		['1993', 9, customTooltip2('<h2>1993</h2> <p>9th Choice</p> <h3>Winner</h3><p><b>Bull Inthe Heather</p>'), 13, customTooltip2('<h2>1993</h2> <p>Field Size: 13</p>')],
		['1994', 3, customTooltip2('<h2>1994</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Holy Bull</p>'), 14, customTooltip2('<h2>1994</h2> <p>Field Size: 14</p>')],
		['1995', 4, customTooltip2('<h2>1995</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Thunder Gulch</p>'), 10, customTooltip2('<h2>1995</h2> <p>Field Size: 10</p>')],
		['1996', 2, customTooltip2('<h2>1996</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Unbridled\'\s Song</p>'), 9, customTooltip2('<h2>1996</h2> <p>Field Size: 9</p>')],
		['1997', 2, customTooltip2('<h2>1997</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Captain Bodgit</p>'), 8, customTooltip2('<h2>1997</h2> <p>Field Size: 8</p>')],
		['1998', 1, customTooltip2('<h2>1998</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Lil\'\s Lad</p>'), 6, customTooltip2('<h2>1998</h2> <p>Field Size: 6</p>')],
		['1999', 2, customTooltip2('<h2>1999</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Vicar</p>'), 10, customTooltip2('<h2>1999</h2> <p>Field Size: 10</p>')],
		['2000', 4, customTooltip2('<h2>2000</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Hal\'\s Hope</p>'), 10, customTooltip2('<h2>2000</h2> <p>Field Size: 10</p>')],
		['2001', 1, customTooltip2('<h2>2001</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Monarchos</p>'), 13, customTooltip2('<h2>2001</h2> <p>Field Size: 13</p>')],
		['2002', 1, customTooltip2('<h2>2002</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Harlan\'\s Holiday</p>'), 11, customTooltip2('<h2>2002</h2> <p>Field Size: 11</p>')],
		['2003', 2, customTooltip2('<h2>2003</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Empire Maker</p>'), 7, customTooltip2('<h2>2003</h2> <p>Field Size: 7</p>')],
		['2004', 6, customTooltip2('<h2>2004</h2> <p>6th Choice</p> <h3>Winner</h3><p><b>Friends Lake</p>'), 10, customTooltip2('<h2>2004</h2> <p>Field Size: 10</p>')],
		['2005', 1, customTooltip2('<h2>2005</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>High Fly</p>'), 9, customTooltip2('<h2>2005</h2> <p>Field Size: 9</p>')],
		['2006', 1, customTooltip2('<h2>2006</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Barbaro</p>'), 11, customTooltip2('<h2>2006</h2> <p>Field Size: 11</p>')],
		['2007', 1, customTooltip2('<h2>2007</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Scat Daddy</p>'), 9, customTooltip2('<h2>2007</h2> <p>Field Size: 9</p>')],
		['2008', 1, customTooltip2('<h2>2008</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Big Brown</p>'), 12, customTooltip2('<h2>2008</h2> <p>Field Size: 12</p>')],
		['2009', 2, customTooltip2('<h2>2009</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Quality Road</p>'), 7, customTooltip2('<h2>2009</h2> <p>Field Size: 7</p>')],
		['2010', 9, customTooltip2('<h2>2010</h2> <p>9th Choice</p> <h3>Winner</h3><p><b>Ice Box</p>'), 11, customTooltip2('<h2>2010</h2> <p>Field Size: 11</p>')],
		['2011', 2, customTooltip2('<h2>2011</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Dialed In</p>'), 8, customTooltip2('<h2>2011</h2> <p>Field Size: 8</p>')],
		['2012', 3, customTooltip2('<h2>2012</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Take Charge Indy</p>'), 8, customTooltip2('<h2>2012</h2> <p>Field Size: 8</p>')],
		['2013', 3, customTooltip2('<h2>2013</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Orb</p>'), 10, customTooltip2('<h2>2013</h2> <p>Field Size: 10</p>')],
		['2014', 2, customTooltip2('<h2>2014</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Constitution</p>'), 8, customTooltip2('<h2>2014</h2> <p>Field Size: 8</p>')],
		['2015', 2, customTooltip2('<h2>2015</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Materiality</p>'), 9, customTooltip2('<h2>2015</h2> <p>Field Size: 9</p>')],
		['2016', 2, customTooltip2('<h2>2016</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Nyquist</p>'), 10, customTooltip2('<h2>2016</h2> <p>Field Size: 10</p>')],
		['2017', 2, customTooltip2('<h2>2017</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Always Dreaming</p>'), 10, customTooltip2('<h2>2017</h2> <p>Field Size: 10</p>')],
		['2018', 1, customTooltip2('<h2>2018</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Audible</p>'), 9, customTooltip2('<h2>2018</h2> <p>Field Size: 9</p>')],
		['2019', 4, customTooltip2('<h2>2019</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Maximum Security</p>'), 11, customTooltip2('<h2>2019</h2> <p>Field Size: 11</p>')],


    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Florida Derby Winners $1 Odds 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 12, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Florida Derby Winners Bettors\' Choice & Field Size 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 15, color: '#dddddd'}},
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
