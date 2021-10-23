google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 0.5, customTooltip('<h2>1991</h2> <p>$1 Odds: $0.50</p><p>$2 Payout:  $3.00</p> <h3>Winner</h3><p><b>Big Courage</b></p>')],
		['1992', 2.5, customTooltip('<h2>1992</h2> <p>$1 Odds: $2.50</p><p>$2 Payout:  $7.00</p> <h3>Winner</h3><p><b>Line in the Sand</b></p>')],
		['1993', 0.7, customTooltip('<h2>1993</h2> <p>$1 Odds: $0.70</p><p>$2 Payout:  $3.40</p> <h3>Winner</h3><p><b>Dixieland Heat</b></p>')],
		['1993', 6.7, customTooltip('<h2>1993</h2> <p>$1 Odds: $6.70</p><p>$2 Payout:  $15.40</p> <h3>Winner</h3><p><b>Dry Bean</b></p>')],
		['1994', 2.1, customTooltip('<h2>1994</h2> <p>$1 Odds: $2.10</p><p>$2 Payout:  $6.20</p> <h3>Winner</h3><p><b>Fly Cry</b></p>')],
		['1995', 2.4, customTooltip('<h2>1995</h2> <p>$1 Odds: $2.40</p><p>$2 Payout:  $6.80</p> <h3>Winner</h3><p><b>Knockadoon</b></p>')],
		['1995', 13.5, customTooltip('<h2>1995</h2> <p>$1 Odds: $13.50</p><p>$2 Payout:  $29.00</p> <h3>Winner</h3><p><b>Beavers Nose</b></p>')],
		['1996', 15.9, customTooltip('<h2>1996</h2> <p>$1 Odds: $15.90</p><p>$2 Payout:  $33.80</p> <h3>Winner</h3><p><b>Zarb\'\s Magic</b></p>')],
		['1997', 3.2, customTooltip('<h2>1997</h2> <p>$1 Odds: $3.20</p><p>$2 Payout:  $8.40</p> <h3>Winner</h3><p><b>Open Forum</b></p>')],
		['1998', 1.3, customTooltip('<h2>1998</h2> <p>$1 Odds: $1.30</p><p>$2 Payout:  $4.60</p> <h3>Winner</h3><p><b>Comic Strip</b></p>')],
		['1999', 4.9, customTooltip('<h2>1999</h2> <p>$1 Odds: $4.90</p><p>$2 Payout:  $11.80</p> <h3>Winner</h3><p><b>Ecton Park</b></p>')],
		['2000', 1.6, customTooltip('<h2>2000</h2> <p>$1 Odds: $1.60</p><p>$2 Payout:  $5.20</p> <h3>Winner</h3><p><b>Exchange Rate</b></p>')],
		['2001', 0.9, customTooltip('<h2>2001</h2> <p>$1 Odds: $0.90</p><p>$2 Payout:  $3.80</p> <h3>Winner</h3><p><b>Dollar Bill</b></p>')],
		['2002', 0.7, customTooltip('<h2>2002</h2> <p>$1 Odds: $0.70</p><p>$2 Payout:  $3.40</p> <h3>Winner</h3><p><b>Repent</b></p>')],
		['2003', 2.9, customTooltip('<h2>2003</h2> <p>$1 Odds: $2.90</p><p>$2 Payout:  $7.80</p> <h3>Winner</h3><p><b>Badge of Silver</b></p>')],
		['2004', 1.9, customTooltip('<h2>2004</h2> <p>$1 Odds: $1.90</p><p>$2 Payout:  $5.80</p> <h3>Winner</h3><p><b>Gradepoint</b></p>')],
		['2005', 10.1, customTooltip('<h2>2005</h2> <p>$1 Odds: $10.10</p><p>$2 Payout:  $22.20</p> <h3>Winner</h3><p><b>Scipion</b></p>')],
		['2006', 2.7, customTooltip('<h2>2006</h2> <p>$1 Odds: $2.70</p><p>$2 Payout:  $7.40</p> <h3>Winner</h3><p><b>Lawyer Ron</b></p>')],
		['2007', 2.9, customTooltip('<h2>2007</h2> <p>$1 Odds: $2.90</p><p>$2 Payout:  $7.80</p> <h3>Winner</h3><p><b>Notional</b></p>')],
		['2008', 0.9, customTooltip('<h2>2008</h2> <p>$1 Odds: $0.90</p><p>$2 Payout:  $3.80</p> <h3>Winner</h3><p><b>Pyro</b></p>')],
		['2009', 2.8, customTooltip('<h2>2009</h2> <p>$1 Odds: $2.80</p><p>$2 Payout:  $7.60</p> <h3>Winner</h3><p><b>Friesan Fire</b></p>')],
		['2010', 2.5, customTooltip('<h2>2010</h2> <p>$1 Odds: $2.50</p><p>$2 Payout:  $7.00</p> <h3>Winner</h3><p><b>Discreetly Mine</b></p>')],
		['2011', 3.6, customTooltip('<h2>2011</h2> <p>$1 Odds: $3.60</p><p>$2 Payout:  $9.20</p> <h3>Winner</h3><p><b>Mucho Macho Man</b></p>')],
		['2012', 0.8, customTooltip('<h2>2012</h2> <p>$1 Odds: $0.80</p><p>$2 Payout:  $3.60</p> <h3>Winner</h3><p><b>El Padrino</b></p>')],
		['2014', 5, customTooltip('<h2>2014</h2> <p>$1 Odds: $5.00</p><p>$2 Payout:  $9.60</p> <h3>Winner</h3><p><b>Intense Holiday</b></p>')],
		['2015', 3.8, customTooltip('<h2>2015</h2> <p>$1 Odds: $3.80</p><p>$2 Payout:  $9.60</p> <h3>Winner</h3><p><b>International Star</b></p>')],
		['2016', 5.1, customTooltip('<h2>2016</h2> <p>$1 Odds: $5.10</p><p>$2 Payout:  $12.20</p> <h3>Winner</h3><p><b>Gun Runner</b></p>')],
		['2017', 8.1, customTooltip('<h2>2017</h2> <p>$1 Odds: $8.10</p><p>$2 Payout:  $18.20</p> <h3>Winner</h3><p><b>Girvin</b></p>')],
		['2018', 21, customTooltip('<h2>2018</h2> <p>$1 Odds: $21.00</p><p>$2 Payout:  $44.00</p> <h3>Winner</h3><p><b>Bravazo</b></p>')],
		['2019', 1, customTooltip('<h2>2019</h2> <p>$1 Odds: $1.00</p><p>$2 Payout:  $4.00</p> <h3>Winner</h3><p><b>War of Will</b></p>')],


  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
		dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 1, customTooltip2('<h2>1991</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Big Courage</b></p>'), 8, customTooltip2('<h2>1991</h2> <p>Field Size: 8</p>')],
		['1992', 2, customTooltip2('<h2>1992</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Line in the Sand</b></p>'), 11, customTooltip2('<h2>1992</h2> <p>Field Size: 11</p>')],
		['1993', 1, customTooltip2('<h2>1993</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Dixieland Heat</b></p>'), 7, customTooltip2('<h2>1993</h2> <p>Field Size: 7</p>')],
		['1993', 3, customTooltip2('<h2>1993</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Dry Bean</b></p>'), 6, customTooltip2('<h2>1993</h2> <p>Field Size: 6</p>')],
		['1994', 2, customTooltip2('<h2>1994</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Fly Cry</b></p>'), 7, customTooltip2('<h2>1994</h2> <p>Field Size: 7</p>')],
		['1995', 1, customTooltip2('<h2>1995</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Knockadoon</b></p>'), 9, customTooltip2('<h2>1995</h2> <p>Field Size: 9</p>')],
		['1995', 4, customTooltip2('<h2>1995</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Beavers Nose</b></p>'), 8, customTooltip2('<h2>1995</h2> <p>Field Size: 8</p>')],
		['1996', 6, customTooltip2('<h2>1996</h2> <p>6th Choice</p> <h3>Winner</h3><p><b>Zarb\'\s Magic</b></p>'), 9, customTooltip2('<h2>1996</h2> <p>Field Size: 9</p>')],
		['1997', 2, customTooltip2('<h2>1997</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Open Forum</b></p>'), 5, customTooltip2('<h2>1997</h2> <p>Field Size: 5</p>')],
		['1998', 2, customTooltip2('<h2>1998</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Comic Strip</b></p>'), 7, customTooltip2('<h2>1998</h2> <p>Field Size: 7</p>')],
		['1999', 2, customTooltip2('<h2>1999</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Ecton Park</b></p>'), 12, customTooltip2('<h2>1999</h2> <p>Field Size: 12</p>')],
		['2000', 1, customTooltip2('<h2>2000</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Exchange Rate</b></p>'), 8, customTooltip2('<h2>2000</h2> <p>Field Size: 8</p>')],
		['2001', 1, customTooltip2('<h2>2001</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Dollar Bill</b></p>'), 10, customTooltip2('<h2>2001</h2> <p>Field Size: 10</p>')],
		['2002', 1, customTooltip2('<h2>2002</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Repent</b></p>'), 9, customTooltip2('<h2>2002</h2> <p>Field Size: 9</p>')],
		['2003', 2, customTooltip2('<h2>2003</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Badge of Silver</b></p>'), 12, customTooltip2('<h2>2003</h2> <p>Field Size: 12</p>')],
		['2004', 2, customTooltip2('<h2>2004</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Gradepoint</b></p>'), 6, customTooltip2('<h2>2004</h2> <p>Field Size: 6</p>')],
		['2005', 5, customTooltip2('<h2>2005</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Scipion</b></p>'), 11, customTooltip2('<h2>2005</h2> <p>Field Size: 11</p>')],
		['2006', 2, customTooltip2('<h2>2006</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Lawyer Ron</b></p>'), 7, customTooltip2('<h2>2006</h2> <p>Field Size: 7</p>')],
		['2007', 2, customTooltip2('<h2>2007</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Notional</b></p>'), 12, customTooltip2('<h2>2007</h2> <p>Field Size: 12</p>')],
		['2008', 1, customTooltip2('<h2>2008</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Pyro</b></p>'), 11, customTooltip2('<h2>2008</h2> <p>Field Size: 11</p>')],
		['2009', 2, customTooltip2('<h2>2009</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Friesan Fire</b></p>'), 13, customTooltip2('<h2>2009</h2> <p>Field Size: 13</p>')],
		['2010', 2, customTooltip2('<h2>2010</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Discreetly Mine</b></p>'), 12, customTooltip2('<h2>2010</h2> <p>Field Size: 12</p>')],
		['2011', 3, customTooltip2('<h2>2011</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Mucho Macho Man</b></p>'), 10, customTooltip2('<h2>2011</h2> <p>Field Size: 10</p>')],
		['2012', 1, customTooltip2('<h2>2012</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>El Padrino</b></p>'), 11, customTooltip2('<h2>2012</h2> <p>Field Size: 11</p>')],
		['2013', 9, customTooltip2('<h2>2013</h2> <p>9th Choice</p> <h3>Winner</h3><p><b>Ive Struck a Nerve</b></p>'), 12, customTooltip2('<h2>2013</h2> <p>Field Size: 12</p>')],
		['2014', 4, customTooltip2('<h2>2014</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Intense Holiday</b></p>'), 14, customTooltip2('<h2>2014</h2> <p>Field Size: 14</p>')],
		['2015', 3, customTooltip2('<h2>2015</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>International Star</b></p>'), 9, customTooltip2('<h2>2015</h2> <p>Field Size: 9</p>')],
		['2016', 3, customTooltip2('<h2>2016</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Gun Runner</b></p>'), 11, customTooltip2('<h2>2016</h2> <p>Field Size: 11</p>')],
		['2017', 5, customTooltip2('<h2>2017</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Girvin</b></p>'), 11, customTooltip2('<h2>2017</h2> <p>Field Size: 11</p>')],
		['2018', 6, customTooltip2('<h2>2018</h2> <p>6th Choice</p> <h3>Winner</h3><p><b>Bravazo</b></p>'), 9, customTooltip2('<h2>2018</h2> <p>Field Size: 9</p>')],
		['2019', 1, customTooltip2('<h2>2019</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>War of Will</b></p>'), 14, customTooltip2('<h2>2019</h2> <p>Field Size: 14</p>')],



    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Risen Star Winners $1 Odds 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 12, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Risen Star Winners Bettors\' Choice & Field Size 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
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
