google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
	['1991', 26.7, customTooltip('<h2>1991</h2><p>$1 Odds: $26.70</p><p>$2 Payout: $55.40</p><h3>Winner</h3><p><b>Opening Verse</b></p>')],
	['1992', 5.4, customTooltip('<h2>1992</h2><p>$1 Odds: $5.40</p><p>$2 Payout: $12.80</p><h3>Winner</h3><p><b>Lure</b></p>')],
	['1993', 1.3, customTooltip('<h2>1993</h2><p>$1 Odds: $1.30</p><p>$2 Payout: $4.60</p><h3>Winner</h3><p><b>Lure</b></p>')],
	['1994', 10.4, customTooltip('<h2>1994</h2><p>$1 Odds: $10.40</p><p>$2 Payout: $22.80</p><h3>Winner</h3><p><b>Barathea (IRE)</b></p>')],
	['1995', 2.55, customTooltip('<h2>1995</h2><p>$1 Odds: $2.55</p><p>$2 Payout: $7.10</p><h3>Winner</h3><p><b>Ridgewood Pearl (GB)</b></p>')],
	['1996', 8.45, customTooltip('<h2>1996</h2><p>$1 Odds: $8.45</p><p>$2 Payout: $18.90</p><h3>Winner</h3><p><b>Da Hoss</b></p>')],
	['1997', 2.1, customTooltip('<h2>1997</h2><p>$1 Odds: $2.10</p><p>$2 Payout: $6.20</p><h3>Winner</h3><p><b>Spinning World</b></p>')],
	['1998', 11.6, customTooltip('<h2>1998</h2><p>$1 Odds: $11.60</p><p>$2 Payout: $25.20</p><h3>Winner</h3><p><b>Da Hoss</b></p>')],
	['1999', 7.2, customTooltip('<h2>1999</h2><p>$1 Odds: $7.20</p><p>$2 Payout: $16.40</p><h3>Winner</h3><p><b>Silic (FR)</b></p>')],
	['2000', 3.5, customTooltip('<h2>2000</h2><p>$1 Odds: $3.50</p><p>$2 Payout: $9.00</p><h3>Winner</h3><p><b>War Chant</b></p>')],
	['2001', 5.1, customTooltip('<h2>2001</h2><p>$1 Odds: $5.10</p><p>$2 Payout: $12.20</p><h3>Winner</h3><p><b>Val Royal (FR)</b></p>')],
	['2002', 26, customTooltip('<h2>2002</h2><p>$1 Odds: $26.00</p><p>$2 Payout: $54.00</p><h3>Winner</h3><p><b>Domedriver (IRE)</b></p>')],
	['2003', 5.3, customTooltip('<h2>2003</h2><p>$1 Odds: $5.30</p><p>$2 Payout: $12.60</p><h3>Winner</h3><p><b>Six Perfections (FR)</b></p>')],
	['2004', 16.5, customTooltip('<h2>2004</h2><p>$1 Odds: $16.50</p><p>$2 Payout: $35.00</p><h3>Winner</h3><p><b>Singletary</b></p>')],
	['2005', 5.6, customTooltip('<h2>2005</h2><p>$1 Odds: $5.60</p><p>$2 Payout: $13.20</p><h3>Winner</h3><p><b>Artie Schiller</b></p>')],
	['2006', 24.3, customTooltip('<h2>2006</h2><p>$1 Odds: $24.30</p><p>$2 Payout: $50.60</p><h3>Winner</h3><p><b>Miesque\'\s Approval</b></p>')],
	['2007', 8.2, customTooltip('<h2>2007</h2><p>$1 Odds: $8.20</p><p>$2 Payout: $18.40</p><h3>Winner</h3><p><b>Kip Deville</b></p>')],
	['2008', 1.8, customTooltip('<h2>2008</h2><p>$1 Odds: $1.80</p><p>$2 Payout: $5.60</p><h3>Winner</h3><p><b>Goldikova (IRE)</b></p>')],
	['2009', 1.4, customTooltip('<h2>2009</h2><p>$1 Odds: $1.40</p><p>$2 Payout: $4.80</p><h3>Winner</h3><p><b>Goldikova (IRE)</b></p>')],
	['2010', 1.3, customTooltip('<h2>2010</h2><p>$1 Odds: $1.30</p><p>$2 Payout: $4.60</p><h3>Winner</h3><p><b>Goldikova (IRE)</b></p>')],
	['2012', 1.8, customTooltip('<h2>2012</h2><p>$1 Odds: $1.80</p><p>$2 Payout: $5.60</p><h3>Winner</h3><p><b>Wise Dan</b></p>')],
	['2013', 0.8, customTooltip('<h2>2013</h2><p>$1 Odds: $0.80</p><p>$2 Payout: $3.60</p><h3>Winner</h3><p><b>Wise Dan</b></p>')],
	['2014', 30, customTooltip('<h2>2014</h2><p>$1 Odds: $30.00</p><p>$2 Payout: $62.00</p><h3>Winner</h3><p><b>Karakontie (JPN)</b></p>')],
	['2015', 4.9, customTooltip('<h2>2015</h2><p>$1 Odds: $4.90</p><p>$2 Payout: $11.80</p><h3>Winner</h3><p><b>Tepin</b></p>')],
	['2016', 12.4, customTooltip('<h2>2016</h2><p>$1 Odds: $12.40</p><p>$2 Payout: $26.80</p><h3>Winner</h3><p><b>Tourist</b></p>')],
	['2017', 2.7, customTooltip('<h2>2017</h2><p>$1 Odds: $2.70</p><p>$2 Payout: $7.40</p><h3>Winner</h3><p><b>World Approval</b></p>')],
	['2018', 5.9, customTooltip('<h2>2018</h2><p>$1 Odds: $5.90</p><p>$2 Payout: $13.80</p><h3>Winner</h3><p><b>Expert Eye (GB)</b></p>')],



  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
	['1991', 12, customTooltip2('<h2>1991</h2></p>12th Choice</p><h3>Winner</h3><p><b>Opening Verse</b></p>'), 14, customTooltip2('<h2>1991</h2><p>Field Size: 14</p>')],
	['1992', 3, customTooltip2('<h2>1992</h2></p>3rd Choice</p><h3>Winner</h3><p><b>Lure</b></p>'), 14, customTooltip2('<h2>1992</h2><p>Field Size: 14</p>')],
	['1993', 1, customTooltip2('<h2>1993</h2></p>1st Choice</p><h3>Winner</h3><p><b>Lure</b></p>'), 13, customTooltip2('<h2>1993</h2><p>Field Size: 13</p>')],
	['1994', 4, customTooltip2('<h2>1994</h2></p>4th Choice</p><h3>Winner</h3><p><b>Barathea (IRE)</b></p>'), 14, customTooltip2('<h2>1994</h2><p>Field Size: 14</p>')],
	['1995', 1, customTooltip2('<h2>1995</h2></p>1st Choice</p><h3>Winner</h3><p><b>Ridgewood Pearl (GB)</b></p>'), 13, customTooltip2('<h2>1995</h2><p>Field Size: 13</p>')],
	['1996', 4, customTooltip2('<h2>1996</h2></p>4th Choice</p><h3>Winner</h3><p><b>Da Hoss</b></p>'), 14, customTooltip2('<h2>1996</h2><p>Field Size: 14</p>')],
	['1997', 1, customTooltip2('<h2>1997</h2></p>1st Choice</p><h3>Winner</h3><p><b>Spinning World</b></p>'), 12, customTooltip2('<h2>1997</h2><p>Field Size: 12</p>')],
	['1998', 5, customTooltip2('<h2>1998</h2></p>5th Choice</p><h3>Winner</h3><p><b>Da Hoss</b></p>'), 14, customTooltip2('<h2>1998</h2><p>Field Size: 14</p>')],
	['1999', 4, customTooltip2('<h2>1999</h2></p>4th Choice</p><h3>Winner</h3><p><b>Silic (FR)</b></p>'), 14, customTooltip2('<h2>1999</h2><p>Field Size: 14</p>')],
	['2000', 1, customTooltip2('<h2>2000</h2></p>1st Choice</p><h3>Winner</h3><p><b>War Chant</b></p>'), 14, customTooltip2('<h2>2000</h2><p>Field Size: 14</p>')],
	['2001', 3, customTooltip2('<h2>2001</h2></p>3rd Choice</p><h3>Winner</h3><p><b>Val Royal (FR)</b></p>'), 12, customTooltip2('<h2>2001</h2><p>Field Size: 12</p>')],
	['2002', 7, customTooltip2('<h2>2002</h2></p>7th Choice</p><h3>Winner</h3><p><b>Domedriver (IRE)</b></p>'), 14, customTooltip2('<h2>2002</h2><p>Field Size: 14</p>')],
	['2003', 3, customTooltip2('<h2>2003</h2></p>3rd Choice</p><h3>Winner</h3><p><b>Six Perfections (FR)</b></p>'), 13, customTooltip2('<h2>2003</h2><p>Field Size: 13</p>')],
	['2004', 8, customTooltip2('<h2>2004</h2></p>8th Choice</p><h3>Winner</h3><p><b>Singletary</b></p>'), 14, customTooltip2('<h2>2004</h2><p>Field Size: 14</p>')],
	['2005', 2, customTooltip2('<h2>2005</h2></p>2nd Choice</p><h3>Winner</h3><p><b>Artie Schiller</b></p>'), 12, customTooltip2('<h2>2005</h2><p>Field Size: 12</p>')],
	['2006', 10, customTooltip2('<h2>2006</h2></p>10th Choice</p><h3>Winner</h3><p><b>Miesque\'\s Approval</b></p>'), 14, customTooltip2('<h2>2006</h2><p>Field Size: 14</p>')],
	['2007', 4, customTooltip2('<h2>2007</h2></p>4th Choice</p><h3>Winner</h3><p><b>Kip Deville</b></p>'), 13, customTooltip2('<h2>2007</h2><p>Field Size: 13</p>')],
	['2008', 1, customTooltip2('<h2>2008</h2></p>1st Choice</p><h3>Winner</h3><p><b>Goldikova (IRE)</b></p>'), 11, customTooltip2('<h2>2008</h2><p>Field Size: 11</p>')],
	['2009', 1, customTooltip2('<h2>2009</h2></p>1st Choice</p><h3>Winner</h3><p><b>Goldikova (IRE)</b></p>'), 11, customTooltip2('<h2>2009</h2><p>Field Size: 11</p>')],
	['2010', 1, customTooltip2('<h2>2010</h2></p>1st Choice</p><h3>Winner</h3><p><b>Goldikova (IRE)</b></p>'), 11, customTooltip2('<h2>2010</h2><p>Field Size: 11</p>')],
	['2011', 13, customTooltip2('<h2>2011</h2></p>13th Choice</p><h3>Winner</h3><p><b>Court Vision</b></p>'), 13, customTooltip2('<h2>2011</h2><p>Field Size: 13</p>')],
	['2012', 1, customTooltip2('<h2>2012</h2></p>1st Choice</p><h3>Winner</h3><p><b>Wise Dan</b></p>'), 9, customTooltip2('<h2>2012</h2><p>Field Size: 9</p>')],
	['2013', 1, customTooltip2('<h2>2013</h2></p>1st Choice</p><h3>Winner</h3><p><b>Wise Dan</b></p>'), 10, customTooltip2('<h2>2013</h2><p>Field Size: 10</p>')],
	['2014', 12, customTooltip2('<h2>2014</h2></p>12th Choice</p><h3>Winner</h3><p><b>Karakontie (JPN)</b></p>'), 14, customTooltip2('<h2>2014</h2><p>Field Size: 14</p>')],
	['2015', 3, customTooltip2('<h2>2015</h2></p>3rd Choice</p><h3>Winner</h3><p><b>Tepin</b></p>'), 12, customTooltip2('<h2>2015</h2><p>Field Size: 12</p>')],
	['2016', 5, customTooltip2('<h2>2016</h2></p>5th Choice</p><h3>Winner</h3><p><b>Tourist</b></p>'), 14, customTooltip2('<h2>2016</h2><p>Field Size: 14</p>')],
	['2017', 1, customTooltip2('<h2>2017</h2></p>1st Choice</p><h3>Winner</h3><p><b>World Approval</b></p>'), 14, customTooltip2('<h2>2017</h2><p>Field Size: 14</p>')],
	['2018', 2, customTooltip2('<h2>2018</h2></p>2nd Choice</p><h3>Winner</h3><p><b>Expert Eye (GB)</b></p>'), 14, customTooltip2('<h2>2018</h2><p>Field Size: 14</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Breeders\'\ Cup Mile Winners $1 Odds 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 10, color: '#dddddd'}},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [2,4,6,8,10,12,14,16,18,20,22,24,26,28, 30]
				},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Breeders\'\ Cup Mile Winners Bettors\' Choice & Field Size 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
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
