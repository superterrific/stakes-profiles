google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 1.8, customTooltip('<h2>1991</h2> <p>$1 Odds: $1.80</p> <p>$2 Payout:  $5.60</p> <h3>Winner</h3><p><b>Tight Spot</b></p>')],
		['1992', 13.9, customTooltip('<h2>1992</h2> <p>$1 Odds: $13.90</p> <p>$2 Payout:  $29.80</p> <h3>Winner</h3><p><b>Dear Doctor (FR)</b></p>')],
		['1993', 0.8, customTooltip('<h2>1993</h2> <p>$1 Odds: $0.80</p> <p>$2 Payout:  $3.60</p> <h3>Winner</h3><p><b>Star of Cozzene</b></p>')],
		['1994', 1.8, customTooltip('<h2>1994</h2> <p>$1 Odds: $1.80</p> <p>$2 Payout:  $5.60</p> <h3>Winner</h3><p><b>Paradise Creek</b></p>')],
		['1995', 5.9, customTooltip('<h2>1995</h2> <p>$1 Odds: $5.90</p> <p>$2 Payout:  $13.80</p> <h3>Winner</h3><p><b>Awad</b></p>')],
		['1996', 15.5, customTooltip('<h2>1996</h2> <p>$1 Odds: $15.50</p> <p>$2 Payout:  $33.00</p> <h3>Winner</h3><p><b>Mecke</b></p>')],
		['1997', 2.9, customTooltip('<h2>1997</h2> <p>$1 Odds: $2.90</p> <p>$2 Payout:  $7.80</p> <h3>Winner</h3><p><b>Marlin</b></p>')],
		['2000', 3.8, customTooltip('<h2>2000</h2> <p>$1 Odds: $3.80</p> <p>$2 Payout:  $9.60</p> <h3>Winner</h3><p><b>Chester House</b></p>')],
		['2001', 6.3, customTooltip('<h2>2001</h2> <p>$1 Odds: $6.30</p> <p>$2 Payout:  $14.60</p> <h3>Winner</h3><p><b>Silvano (GER)</b></p>')],
		['2002', 0.7, customTooltip('<h2>2002</h2> <p>$1 Odds: $0.70</p> <p>$2 Payout:  $3.40</p> <h3>Winner</h3><p><b>Beat Hollow (GB)</b></p>')],
		['2003', 2.8, customTooltip('<h2>2003</h2> <p>$1 Odds: $2.80</p> <p>$2 Payout:  $7.60</p> <h3>Winner</h3><p><b>Sulamani (IRE)</b></p>')],
		['2004', 9.7, customTooltip('<h2>2004</h2> <p>$1 Odds: $9.70</p> <p>$2 Payout:  $21.40</p> <h3>Winner</h3><p><b>Kicken Kris</b></p>')],
		['2005', 5.2, customTooltip('<h2>2005</h2> <p>$1 Odds: $5.20</p> <p>$2 Payout:  $12.40</p> <h3>Winner</h3><p><b>Powerscourt (GB)</b></p>')],
		['2006', 5.5, customTooltip('<h2>2006</h2> <p>$1 Odds: $5.50</p> <p>$2 Payout:  $13.00</p> <h3>Winner</h3><p><b>The Tin Man</b></p>')],
		['2007', 7.6, customTooltip('<h2>2007</h2> <p>$1 Odds: $7.60</p> <p>$2 Payout:  $17.20</p> <h3>Winner</h3><p><b>Jambalaya</b></p>')],
		['2008', 13.7, customTooltip('<h2>2008</h2> <p>$1 Odds: $13.70</p> <p>$2 Payout:  $29.40</p> <h3>Winner</h3><p><b>Spirit One (FR)</b></p>')],
		['2009', 1.5, customTooltip('<h2>2009</h2> <p>$1 Odds: $1.50</p> <p>$2 Payout:  $5.00</p> <h3>Winner</h3><p><b>Gio Ponti</b></p>')],
		['2010', 11, customTooltip('<h2>2010</h2> <p>$1 Odds: $11.00</p> <p>$2 Payout:  $24.00</p> <h3>Winner</h3><p><b>Debussy (IRE)</b></p>')],
		['2011', 2.1, customTooltip('<h2>2011</h2> <p>$1 Odds: $2.10</p> <p>$2 Payout:  $6.20</p> <h3>Winner</h3><p><b>Cape Blanco (IRE)</b></p>')],
		['2012', 3.9, customTooltip('<h2>2012</h2> <p>$1 Odds: $3.90</p> <p>$2 Payout:  $9.80</p> <h3>Winner</h3><p><b>Little Mike</b></p>')],
		['2013', 8.4, customTooltip('<h2>2013</h2> <p>$1 Odds: $8.40</p> <p>$2 Payout:  $18.80</p> <h3>Winner</h3><p><b>Real Solution</b></p>')],
		['2014', 11.5, customTooltip('<h2>2014</h2> <p>$1 Odds: $11.50</p> <p>$2 Payout:  $25.00</p> <h3>Winner</h3><p><b>Hardest Core</b></p>')],
		['2015', 5.9, customTooltip('<h2>2015</h2> <p>$1 Odds: $5.90</p> <p>$2 Payout:  $13.80</p> <h3>Winner</h3><p><b>The Pizza Man</b></p>')],
		['2016', 4.4, customTooltip('<h2>2016</h2> <p>$1 Odds: $4.40</p> <p>$2 Payout:  $10.80</p> <h3>Winner</h3><p><b>Mondialiste (IRE)</b></p>')],
		['2017', 4.9, customTooltip('<h2>2017</h2> <p>$1 Odds: $4.90</p> <p>$2 Payout:  $11.80</p> <h3>Winner</h3><p><b>Beach Patrol</b></p>')],
		['2018', 2.6, customTooltip('<h2>2018</h2> <p>$1 Odds: $2.60</p> <p>$2 Payout:  $7.20</p> <h3>Winner</h3><p><b>Robert Bruce (CHI)</b></p>')],



  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 1, customTooltip2('<h2>1991</h2> <p> 1st Choice</p> <h3>Winner</h3><p><b>Tight Spot</b></p>'), 10, customTooltip2('<h2>1991</h2> <p> Field Size: 10</p>')],
		['1992', 7, customTooltip2('<h2>1992</h2> <p> 7th Choice</p> <h3>Winner</h3><p><b>Dear Doctor (FR)</b></p>'), 12, customTooltip2('<h2>1992</h2> <p> Field Size: 12</p>')],
		['1993', 1, customTooltip2('<h2>1993</h2> <p> 1st Choice</p> <h3>Winner</h3><p><b>Star of Cozzene</b></p>'), 8, customTooltip2('<h2>1993</h2> <p> Field Size: 8</p>')],
		['1994', 1, customTooltip2('<h2>1994</h2> <p> 1st Choice</p> <h3>Winner</h3><p><b>Paradise Creek</b></p>'), 14, customTooltip2('<h2>1994</h2> <p> Field Size: 14</p>')],
		['1995', 4, customTooltip2('<h2>1995</h2> <p> 4th Choice</p> <h3>Winner</h3><p><b>Awad</b></p>'), 11, customTooltip2('<h2>1995</h2> <p> Field Size: 11</p>')],
		['1996', 6, customTooltip2('<h2>1996</h2> <p> 6th Choice</p> <h3>Winner</h3><p><b>Mecke</b></p>'), 9, customTooltip2('<h2>1996</h2> <p> Field Size: 9</p>')],
		['1997', 1, customTooltip2('<h2>1997</h2> <p> 1st Choice</p> <h3>Winner</h3><p><b>Marlin</b></p>'), 8, customTooltip2('<h2>1997</h2> <p> Field Size: 8</p>')],
		['2000', 4, customTooltip2('<h2>2000</h2> <p> 4th Choice</p> <h3>Winner</h3><p><b>Chester House</b></p>'), 7, customTooltip2('<h2>2000</h2> <p> Field Size: 7</p>')],
		['2001', 3, customTooltip2('<h2>2001</h2> <p> 3rd Choice</p> <h3>Winner</h3><p><b>Silvano (GER)</b></p>'), 12, customTooltip2('<h2>2001</h2> <p> Field Size: 12</p>')],
		['2002', 1, customTooltip2('<h2>2002</h2> <p> 1st Choice</p> <h3>Winner</h3><p><b>Beat Hollow (GB)</b></p>'), 9, customTooltip2('<h2>2002</h2> <p> Field Size: 9</p>')],
		['2003', 2, customTooltip2('<h2>2003</h2> <p> 2nd Choice</p> <h3>Winner</h3><p><b>Sulamani (IRE)</b></p>'), 13, customTooltip2('<h2>2003</h2> <p> Field Size: 13</p>')],
		['2004', 6, customTooltip2('<h2>2004</h2> <p> 6th Choice</p> <h3>Winner</h3><p><b>Kicken Kris</b></p>'), 13, customTooltip2('<h2>2004</h2> <p> Field Size: 13</p>')],
		['2005', 2, customTooltip2('<h2>2005</h2> <p> 2nd Choice</p> <h3>Winner</h3><p><b>Powerscourt (GB)</b></p>'), 10, customTooltip2('<h2>2005</h2> <p> Field Size: 10</p>')],
		['2006', 4, customTooltip2('<h2>2006</h2> <p> 4th Choice</p> <h3>Winner</h3><p><b>The Tin Man</b></p>'), 10, customTooltip2('<h2>2006</h2> <p> Field Size: 10</p>')],
		['2007', 5, customTooltip2('<h2>2007</h2> <p> 5th Choice</p> <h3>Winner</h3><p><b>Jambalaya</b></p>'), 7, customTooltip2('<h2>2007</h2> <p> Field Size: 7</p>')],
		['2008', 5, customTooltip2('<h2>2008</h2> <p> 5th Choice</p> <h3>Winner</h3><p><b>Spirit One (FR)</b></p>'), 7, customTooltip2('<h2>2008</h2> <p> Field Size: 7</p>')],
		['2009', 1, customTooltip2('<h2>2009</h2> <p> 1st Choice</p> <h3>Winner</h3><p><b>Gio Ponti</b></p>'), 8, customTooltip2('<h2>2009</h2> <p> Field Size: 8</p>')],
		['2010', 6, customTooltip2('<h2>2010</h2> <p> 6th Choice</p> <h3>Winner</h3><p><b>Debussy (IRE)</b></p>'), 9, customTooltip2('<h2>2010</h2> <p> Field Size: 9</p>')],
		['2011', 1, customTooltip2('<h2>2011</h2> <p> 1st Choice</p> <h3>Winner</h3><p><b>Cape Blanco (IRE)</b></p>'), 10, customTooltip2('<h2>2011</h2> <p> Field Size: 10</p>')],
		['2012', 2, customTooltip2('<h2>2012</h2> <p> 2nd Choice</p> <h3>Winner</h3><p><b>Little Mike</b></p>'), 11, customTooltip2('<h2>2012</h2> <p> Field Size: 11</p>')],
		['2013', 5, customTooltip2('<h2>2013</h2> <p> 5th Choice</p> <h3>Winner</h3><p><b>Real Solution</b></p>'), 13, customTooltip2('<h2>2013</h2> <p> Field Size: 13</p>')],
		['2014', 6, customTooltip2('<h2>2014</h2> <p> 6th Choice</p> <h3>Winner</h3><p><b>Hardest Core</b></p>'), 7, customTooltip2('<h2>2014</h2> <p> Field Size: 7</p>')],
		['2015', 4, customTooltip2('<h2>2015</h2> <p> 4th Choice</p> <h3>Winner</h3><p><b>The Pizza Man</b></p>'), 13, customTooltip2('<h2>2015</h2> <p> Field Size: 13</p>')],
		['2016', 3, customTooltip2('<h2>2016</h2> <p> 3rd Choice</p> <h3>Winner</h3><p><b>Mondialiste (IRE)</b></p>'), 11, customTooltip2('<h2>2016</h2> <p> Field Size: 11</p>')],
		['2017', 2, customTooltip2('<h2>2017</h2> <p> 2nd Choice</p> <h3>Winner</h3><p><b>Beach Patrol</b></p>'), 12, customTooltip2('<h2>2017</h2> <p> Field Size: 12</p>')],
		['2018', 2, customTooltip2('<h2>2018</h2> <p> 2nd Choice</p> <h3>Winner</h3><p><b>Robert Bruce (CHI)</b></p>'), 9, customTooltip2('<h2>2018</h2> <p> Field Size: 9</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Arlington Million Winners $1 Odds 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
				},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Arlington Million Winners Bettors\' Choice & Field Size 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
				},
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
