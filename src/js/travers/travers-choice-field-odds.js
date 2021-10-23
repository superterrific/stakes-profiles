google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 7.3, customTooltip('<h2>1991</h2> <p>$1 Odds: $7.30</p> <p>$2 Payout:  $16.60</p> <h3>Winner</h3><p><b>Corporate Report</b></p>')],
		['1992', 7.6, customTooltip('<h2>1992</h2> <p>$1 Odds: $7.60</p> <p>$2 Payout:  $17.20</p> <h3>Winner</h3><p><b>Thunder Rumble</b></p>')],
		['1993', 6.7, customTooltip('<h2>1993</h2> <p>$1 Odds: $6.70</p> <p>$2 Payout:  $15.40</p> <h3>Winner</h3><p><b>Sea Hero</b></p>')],
		['1994', 0.8, customTooltip('<h2>1994</h2> <p>$1 Odds: $.80</p> <p>$2 Payout:  $3.60</p> <h3>Winner</h3><p><b>Holy Bull</b></p>')],
		['1995', 0.75, customTooltip('<h2>1995</h2> <p>$1 Odds: $.75</p> <p>$2 Payout:  $3.50</p> <h3>Winner</h3><p><b>Thunder Gulch</b></p>')],
		['1996', 7.3, customTooltip('<h2>1996</h2> <p>$1 Odds: $7.30</p> <p>$2 Payout:  $16.60</p> <h3>Winner</h3><p><b>Will\'\s Way</b></p>')],
		['1997', 4, customTooltip('<h2>1997</h2> <p>$1 Odds: $4.00</p> <p>$2 Payout:  $10.00</p> <h3>Winner</h3><p><b>Deputy Commander</b></p>')],
		['1998', 1.45, customTooltip('<h2>1998</h2> <p>$1 Odds: $1.45</p> <p>$2 Payout:  $4.90</p> <h3>Winner</h3><p><b>Coronado\'\s Quest</b></p>')],
		['1999', 3.65, customTooltip('<h2>1999</h2> <p>$1 Odds: $3.65</p> <p>$2 Payout:  $9.30</p> <h3>Winner</h3><p><b>Lemon Drop Kid</b></p>')],
		['2000', 3.45, customTooltip('<h2>2000</h2> <p>$1 Odds: $3.45</p> <p>$2 Payout:  $8.90</p> <h3>Winner</h3><p><b>Unshaded</b></p>')],
		['2001', .65, customTooltip('<h2>2001</h2> <p>$1 Odds: $.55</p> <p>$2 Payout:  $3.30</p> <h3>Winner</h3><p><b>Point Given</b></p>')],
		['2002', .75, customTooltip('<h2>2002</h2> <p>$1 Odds: $.75</p> <p>$2 Payout:  $3.50</p> <h3>Winner</h3><p><b>Medaglia d\'\Oro</b></p>')],
		['2003', 2.75, customTooltip('<h2>2003</h2> <p>$1 Odds: $2.75</p> <p>$2 Payout:  $7.50</p> <h3>Winner</h3><p><b>Ten Most Wanted</b></p>')],
		['2004', 4.8, customTooltip('<h2>2004</h2> <p>$1 Odds: $4.80</p> <p>$2 Payout:  $11.60</p> <h3>Winner</h3><p><b>Birdstone</b></p>')],
		['2005', 3, customTooltip('<h2>2005</h2> <p>$1 Odds: $3.00</p> <p>$2 Payout:  $8.00</p> <h3>Winner</h3><p><b>Flower Alley</b></p>')],
		['2006', .35, customTooltip('<h2>2006</h2> <p>$1 Odds: $.35</p> <p>$2 Payout:  $2.70</p> <h3>Winner</h3><p><b>Bernardini</b></p>')],
		['2007', .35, customTooltip('<h2>2007</h2> <p>$1 Odds: $.35</p> <p>$2 Payout:  $2.70</p> <h3>Winner</h3><p><b>Street Sense</b></p>')],
		['2008', 4.2, customTooltip('<h2>2008</h2> <p>$1 Odds: $4.20</p> <p>$2 Payout:  $10.40</p> <h3>Winner</h3><p><b>Colonel John</b></p>')],
		['2009', 2.9, customTooltip('<h2>2009</h2> <p>$1 Odds: $2.90</p> <p>$2 Payout:  $7.80</p> <h3>Winner</h3><p><b>Summer Bird</b></p>')],
		['2010', 7, customTooltip('<h2>2010</h2> <p>$1 Odds: $7.00</p> <p>$2 Payout:  $16.00</p> <h3>Winner</h3><p><b>Afleet Express</b></p>')],
		['2011', 2.4, customTooltip('<h2>2011</h2> <p>$1 Odds: $2.40</p> <p>$2 Payout:  $6.80</p> <h3>Winner</h3><p><b>Stay Thirsty</b></p>')],
		['2012', 2.4, customTooltip('<h2>2012</h2> <p>$1 Odds: $2.40</p> <p>$2 Payout:  $4.10</p> <h3>Winner</h3><p><b>Alpha</b></p>')],
		['2013', 9.6, customTooltip('<h2>2013</h2> <p>$1 Odds: $9.60</p> <p>$2 Payout:  $21.20</p> <h3>Winner</h3><p><b>Will Take Charge</b></p>')],
		['2014', 19.5, customTooltip('<h2>2014</h2> <p>$1 Odds: $19.50</p> <p>$2 Payout:  $41.00</p> <h3>Winner</h3><p><b>V. E. Day</b></p>')],
		['2015', 16, customTooltip('<h2>2015</h2> <p>$1 Odds: $16.00</p> <p>$2 Payout:  $34.00</p> <h3>Winner</h3><p><b>Keen Ice</b></p>')],
		['2016', 11.7, customTooltip('<h2>2016</h2> <p>$1 Odds: $11.70</p> <p>$2 Payout:  $25.40</p> <h3>Winner</h3><p><b>Arrogate</b></p>')],
		['2017', 6.1, customTooltip('<h2>2017</h2> <p>$1 Odds: $6.10</p> <p>$2 Payout:  $14.20</p> <h3>Winner</h3><p><b>West Coast</b></p>')],
		['2018', 7.1, customTooltip('<h2>2018</h2> <p>$1 Odds: $7.10</p> <p>$2 Payout:  $16.20</p> <h3>Winner</h3><p><b>Catholic Boy</b></p>')],

  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 5, customTooltip2('<h2>1991</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Corporate Report</b></p>'), 6, customTooltip2('<h2>1991</h2> <p>Field Size: 6</p>')],
		['1992', 5, customTooltip2('<h2>1992</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Thunder Rumble</b></p>'), 10, customTooltip2('<h2>1992</h2> <p>Field Size: 10</p>')],
		['1993', 4, customTooltip2('<h2>1993</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Sea Hero</b></p>'), 11, customTooltip2('<h2>1993</h2> <p>Field Size: 11</p>')],
		['1994', 1, customTooltip2('<h2>1994</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Holy Bull</b></p>'), 5, customTooltip2('<h2>1994</h2> <p>Field Size: 5</p>')],
		['1995', 1, customTooltip2('<h2>1995</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Thunder Gulch</b></p>'), 7, customTooltip2('<h2>1995</h2> <p>Field Size: 7</p>')],
		['1996', 5, customTooltip2('<h2>1996</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Will\'\s Way</b></p>'), 7, customTooltip2('<h2>1996</h2> <p>Field Size: 7</p>')],
		['1997', 3, customTooltip2('<h2>1997</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Deputy Commander</b></p>'), 8, customTooltip2('<h2>1997</h2> <p>Field Size: 8</p>')],
		['1998', 2, customTooltip2('<h2>1998</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Coronado\'\s Quest</b></p>'), 7, customTooltip2('<h2>1998</h2> <p>Field Size: 7</p>')],
		['1999', 2, customTooltip2('<h2>1999</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Lemon Drop Kid</b></p>'), 8, customTooltip2('<h2>1999</h2> <p>Field Size: 8</p>')],
		['2000', 2, customTooltip2('<h2>2000</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Unshaded</b></p>'), 9, customTooltip2('<h2>2000</h2> <p>Field Size: 9</p>')],
		['2001', 1, customTooltip2('<h2>2001</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Point Given</b></p>'), 9, customTooltip2('<h2>2001</h2> <p>Field Size: 9</p>')],
		['2002', 1, customTooltip2('<h2>2002</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Medaglia d\'\Oro</b></p>'), 9, customTooltip2('<h2>2002</h2> <p>Field Size: 9</p>')],
		['2003', 3, customTooltip2('<h2>2003</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Ten Most Wanted</b></p>'), 6, customTooltip2('<h2>2003</h2> <p>Field Size: 6</p>')],
		['2004', 4, customTooltip2('<h2>2004</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Birdstone</b></p>'), 7, customTooltip2('<h2>2004</h2> <p>Field Size: 7</p>')],
		['2005', 3, customTooltip2('<h2>2005</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Flower Alley</b></p>'), 7, customTooltip2('<h2>2005</h2> <p>Field Size: 7</p>')],
		['2006', 1, customTooltip2('<h2>2006</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Bernardini</b></p>'), 6, customTooltip2('<h2>2006</h2> <p>Field Size: 6</p>')],
		['2007', 1, customTooltip2('<h2>2007</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Street Sense</b></p>'), 7, customTooltip2('<h2>2007</h2> <p>Field Size: 7</p>')],
		['2008', 2, customTooltip2('<h2>2008</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Colonel John</b></p>'), 12, customTooltip2('<h2>2008</h2> <p>Field Size: 12</p>')],
		['2009', 2, customTooltip2('<h2>2009</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Summer Bird</b></p>'), 7, customTooltip2('<h2>2009</h2> <p>Field Size: 7</p>')],
		['2010', 6, customTooltip2('<h2>2010</h2> <p>6th Choice</p> <h3>Winner</h3><p><b>Afleet Express</b></p>'), 11, customTooltip2('<h2>2010</h2> <p>Field Size: 11</p>')],
		['2011', 1, customTooltip2('<h2>2011</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Stay Thirsty</b></p>'), 10, customTooltip2('<h2>2011</h2> <p>Field Size: 10</p>')],
		['2012', 9, customTooltip2('<h2>2012</h2> <p>9th Choice</p> <h3>Winner</h3><p><b>Golden Ticket</b></p>'), 11, customTooltip2('<h2>2012</h2> <p>Field Size: 11</p>')],
		['2012', 1, customTooltip2('<h2>2012</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Alpha</b></p>'), 11, customTooltip2('<h2>2012</h2> <p>Field Size: 11</p>')],
		['2013', 4, customTooltip2('<h2>2013</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Will Take Charge</b></p>'), 9, customTooltip2('<h2>2013</h2> <p>Field Size: 9</p>')],
		['2014', 6, customTooltip2('<h2>2014</h2> <p>6th Choice</p> <h3>Winner</h3><p><b>V. E. Day</b></p>'), 10, customTooltip2('<h2>2014</h2> <p>Field Size: 10</p>')],
		['2015', 5, customTooltip2('<h2>2015</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Keen Ice</b></p>'), 10, customTooltip2('<h2>2015</h2> <p>Field Size: 10</p>')],
		['2016', 8, customTooltip2('<h2>2016</h2> <p>8th Choice</p> <h3>Winner</h3><p><b>Arrogate</b></p>'), 13, customTooltip2('<h2>2016</h2> <p>Field Size: 13</p>')],
		['2017', 5, customTooltip2('<h2>2017</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>West Coast</b></p>'), 13, customTooltip2('<h2>2017</h2> <p>Field Size: 12</p>')],
		['2018', 3, customTooltip2('<h2>2018</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Catholic Boy</b></p>'), 10, customTooltip2('<h2>2018</h2> <p>Field Size: 10</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Travers Winners $1 Odds 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
		vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
				},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Travers Bettors\' Choice & Field Size 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
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
