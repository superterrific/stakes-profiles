google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 5, customTooltip('<h2>1991</h2><p>$1 Odds: $5.00</p><p>$2 Payout: $12.00</p><h3>Winner</h3><p><b>Rubiano</b></p>')],
		['1992', 3.9, customTooltip('<h2>1992</h2><p>$1 Odds: $3.90</p><p>$2 Payout: $9.80</p><h3>Winner</h3><p><b>Ibero (ARG)</b></p>')],
		['1994', 8.9, customTooltip('<h2>1994</h2><p>$1 Odds: $8.90</p><p>$2 Payout: $19.80</p><h3>Winner</h3><p><b>Cigar</b></p>')],
		['1995', 16.1, customTooltip('<h2>1995</h2><p>$1 Odds: $16.10</p><p>$2 Payout: $34.20</p><h3>Winner</h3><p><b>Flying Chevron</b></p>')],
		['1996', 11.4, customTooltip('<h2>1996</h2><p>$1 Odds: $11.40</p><p>$2 Payout: $24.80</p><h3>Winner</h3><p><b>Gold Fever</b></p>')],
		['1997', 9.6, customTooltip('<h2>1997</h2><p>$1 Odds: $9.60</p><p>$2 Payout: $21.20</p><h3>Winner</h3><p><b>Devious Course</b></p>')],
		['1998', 8.5, customTooltip('<h2>1998</h2><p>$1 Odds: $8.50</p><p>$2 Payout: $19.00</p><h3>Winner</h3><p><b>Sir Bear</b></p>')],
		['1999', 2.95, customTooltip('<h2>1999</h2><p>$1 Odds: $2.95</p><p>$2 Payout: $7.90</p><h3>Winner</h3><p><b>Affirmed Success</b></p>')],
		['2000', 2.4, customTooltip('<h2>2000</h2><p>$1 Odds: $2.40</p><p>$2 Payout: $6.80</p><h3>Winner</h3><p><b>El Corredor</b></p>')],
		['2001', 2.45, customTooltip('<h2>2001</h2><p>$1 Odds: $2.45</p><p>$2 Payout: $6.90</p><h3>Winner</h3><p><b>Left Bank</b></p>')],
		['2002', 4.5, customTooltip('<h2>2002</h2><p>$1 Odds: $4.50</p><p>$2 Payout: $11.00</p><h3>Winner</h3><p><b>Congaree</b></p>')],
		['2003', 0.6, customTooltip('<h2>2003</h2><p>$1 Odds: $0.60</p><p>$2 Payout: $3.20</p><h3>Winner</h3><p><b>Congaree</b></p>')],
		['2004', 12, customTooltip('<h2>2004</h2><p>$1 Odds: $12.00</p><p>$2 Payout: $26.00</p><h3>Winner</h3><p><b>Lion Tamer</b></p>')],
		['2006', 0.25, customTooltip('<h2>2006</h2><p>$1 Odds: $0.25</p><p>$2 Payout: $2.50</p><h3>Winner</h3><p><b>Discreet Cat</b></p>')],
		['2007', 2.35, customTooltip('<h2>2007</h2><p>$1 Odds: $2.35</p><p>$2 Payout: $6.70</p><h3>Winner</h3><p><b>Daaher</b></p>')],
		['2008', 8.9, customTooltip('<h2>2008</h2><p>$1 Odds: $8.90</p><p>$2 Payout: $19.80</p><h3>Winner</h3><p><b>Tale of Ekati</b></p>')],
		['2009', 3.35, customTooltip('<h2>2009</h2><p>$1 Odds: $3.35</p><p>$2 Payout: $8.70</p><h3>Winner</h3><p><b>Kodiak Kowboy</b></p>')],
		['2011', 1.05, customTooltip('<h2>011</h2><p>$1 Odds: $1.05</p><p>$2 Payout: $4.10</p><h3>Winner</h3><p><b>To Honor and Serve</b></p>')],
		['2012', 2.75, customTooltip('<h2>2012</h2><p>$1 Odds: $2.75</p><p>$2 Payout: $7.50</p><h3>Winner</h3><p><b>Stay Thirsty</b></p>')],
		['2013', 6.5, customTooltip('<h2>2013</h2><p>$1 Odds: $6.50</p><p>$2 Payout: $15.00</p><h3>Winner</h3><p><b>Flat Out</b></p>')],
		['2014', 4.8, customTooltip('<h2>2014</h2><p>$1 Odds: $4.80</p><p>$2 Payout: $11.60</p><h3>Winner</h3><p><b>Private Zone</b></p>')],
		['2015', 2.2, customTooltip('<h2>2015</h2><p>$1 Odds: $2.20</p><p>$2 Payout: $6.40</p><h3>Winner</h3><p><b>Tonalist</b></p>')],
		['2016', 1.5, customTooltip('<h2>2016</h2><p>$1 Odds: $1.50</p><p>$2 Payout: $5.00</p><h3>Winner</h3><p><b>Connect</b></p>')],
		['2017', 1.75, customTooltip('<h2>2017</h2><p>$1 Odds: $1.75</p><p>$2 Payout: $5.50</p><h3>Winner</h3><p><b>Sharp Azteca</b></p>')],
		['2018', 5.4, customTooltip('<h2>2018</h2><p>$1 Odds: $5.40</p><p>$2 Payout: $12.80</p><h3>Winner</h3><p><b>Patternrecognition</b></p>')],
  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 4, customTooltip2('<h2>1991</h2> <p>4th Choice</p><h3>Winner</h3><p><b>Rubiano</b></p>'), 15, customTooltip2('<h2>1991</h2> <p>Field Size: 15</p>')],
		['1992', 3, customTooltip2('<h2>1992</h2> <p>3rd Choice</p><h3>Winner</h3><p><b>Ibero (ARG)</b></p>'), 7, customTooltip2('<h2>1992</h2> <p>Field Size: 7</p>')],
		['1994', 6, customTooltip2('<h2>1994</h2> <p>6th Choice</p><h3>Winner</h3><p><b>Cigar</b></p>'), 12, customTooltip2('<h2>1994</h2> <p>Field Size: 12</p>')],
		['1995', 6, customTooltip2('<h2>1995</h2> <p>6th Choice</p><h3>Winner</h3><p><b>Flying Chevron</b></p>'), 13, customTooltip2('<h2>1995</h2> <p>Field Size: 13</p>')],
		['1996', 7, customTooltip2('<h2>1996</h2> <p>7th Choice</p><h3>Winner</h3><p><b>Gold Fever</b></p>'), 14, customTooltip2('<h2>1996</h2> <p>Field Size: 14</p>')],
		['1997', 6, customTooltip2('<h2>1997</h2> <p>6th Choice</p><h3>Winner</h3><p><b>Devious Course</b></p>'), 12, customTooltip2('<h2>1997</h2> <p>Field Size: 12</p>')],
		['1998', 4, customTooltip2('<h2>1998</h2> <p>4th Choice</p><h3>Winner</h3><p><b>Sir Bear</b></p>'), 8, customTooltip2('<h2>1998</h2> <p>Field Size: 8</p>')],
		['1999', 2, customTooltip2('<h2>1999</h2> <p>2nd Choice</p><h3>Winner</h3><p><b>Affirmed Success</b></p>'), 9, customTooltip2('<h2>1999</h2> <p>Field Size: 9</p>')],
		['2000', 1, customTooltip2('<h2>2000</h2> <p>1st Choice</p><h3>Winner</h3><p><b>El Corredor</b></p>'), 11, customTooltip2('<h2>2000</h2> <p>Field Size: 11</p>')],
		['2001', 1, customTooltip2('<h2>2001</h2> <p>1st Choice</p><h3>Winner</h3><p><b>Left Bank</b></p>'), 9, customTooltip2('<h2>2001</h2> <p>Field Size: 9</p>')],
		['2002', 4, customTooltip2('<h2>2002</h2> <p>4th Choice</p><h3>Winner</h3><p><b>Congaree</b></p>'), 8, customTooltip2('<h2>2002</h2> <p>Field Size: 8</p>')],
		['2003', 1, customTooltip2('<h2>2003</h2> <p>1st Choice</p><h3>Winner</h3><p><b>Congaree</b></p>'), 7, customTooltip2('<h2>2003</h2> <p>Field Size: 7</p>')],
		['2004', 4, customTooltip2('<h2>2004</h2> <p>4th Choice</p><h3>Winner</h3><p><b>Lion Tamer</b></p>'), 8, customTooltip2('<h2>2004</h2> <p>Field Size: 8</p>')],
		['2005', 8, customTooltip2('<h2>2005</h2> <p>8th Choice</p><h3>Winner</h3><p><b>Purge</b></p>'), 11, customTooltip2('<h2>2005</h2> <p>Field Size: 11</p>')],
		['2006', 1, customTooltip2('<h2>2006</h2> <p>1st Choice</p><h3>Winner</h3><p><b>Discreet Cat</b></p>'), 5, customTooltip2('<h2>2006</h2> <p>Field Size: 5</p>')],
		['2007', 2, customTooltip2('<h2>2007</h2> <p>2nd Choice</p><h3>Winner</h3><p><b>Daaher</b></p>'), 5, customTooltip2('<h2>2007</h2> <p>Field Size: 5</p>')],
		['2008', 7, customTooltip2('<h2>2008</h2> <p>7th Choice</p><h3>Winner</h3><p><b>Tale of Ekati</b></p>'), 9, customTooltip2('<h2>2008</h2> <p>Field Size: 9</p>')],
		['2009', 4, customTooltip2('<h2>2009</h2> <p>4th Choice</p><h3>Winner</h3><p><b>Kodiak Kowboy</b></p>'), 6, customTooltip2('<h2>2009</h2> <p>Field Size: 6</p>')],
		['2010', 9, customTooltip2('<h2>2010</h2> <p>9th Choice</p><h3>Winner</h3><p><b>Jersey Town</b></p>'), 9, customTooltip2('<h2>2010</h2> <p>Field Size: 9</p>')],
		['2011', 1, customTooltip2('<h2>2011</h2> <p>1st Choice</p><h3>Winner</h3><p><b>To Honor and Serve</b></p>'), 6, customTooltip2('<h2>2011</h2> <p>Field Size: 6</p>')],
		['2012', 2, customTooltip2('<h2>2012</h2> <p>2nd Choice</p><h3>Winner</h3><p><b>Stay Thirsty</b></p>'), 5, customTooltip2('<h2>2012</h2> <p>Field Size: 5</p>')],
		['2013', 5, customTooltip2('<h2>2013</h2> <p>5th Choice</p><h3>Winner</h3><p><b>Flat Out</b></p>'), 10, customTooltip2('<h2>2013</h2> <p>Field Size: 10</p>')],
		['2014', 4, customTooltip2('<h2>2014</h2> <p>4th Choice</p><h3>Winner</h3><p><b>Private Zone</b></p>'), 9, customTooltip2('<h2>2014</h2> <p>Field Size: 9</p>')],
		['2015', 2, customTooltip2('<h2>2015</h2> <p>2nd Choice</p><h3>Winner</h3><p><b>Tonalist</b></p>'), 6, customTooltip2('<h2>2015</h2> <p>Field Size: 6</p>')],
		['2016', 1, customTooltip2('<h2>2016</h2> <p>1st Choice</p><h3>Winner</h3><p><b>Connect</b></p>'), 10, customTooltip2('<h2>2016</h2> <p>Field Size: 10</p>')],
		['2017', 1, customTooltip2('<h2>2017</h2> <p>1st Choice</p><h3>Winner</h3><p><b>Sharp Azteca</b></p>'), 10, customTooltip2('<h2>2017</h2> <p>Field Size: 10</p>')],
		['2018', 3, customTooltip2('<h2>2018</h2> <p>3rd Choice</p><h3>Winner</h3><p><b>Patternrecognition</b></p>'), 8, customTooltip2('<h2>2018</h2> <p>Field Size: 8</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Cigar Mile Winners $1 Odds 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
				},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437D"],
	hAxis: {title: 'Cigar Mile Winners Bettors\' Choice & Field Size 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
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
