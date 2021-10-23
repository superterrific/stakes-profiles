google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 0.4, customTooltip('<h2>1991</h2> <p>$1 Odds: $0.40</p><p>$2 Payout:  $2.80<p> <h3>Winner</h3><p><b>Richman</b></p>')],
		['1992', 0.9, customTooltip('<h2>1992</h2> <p>$1 Odds: $0.90</p><p>$2 Payout:  $3.80<p> <h3>Winner</h3><p><b>Line in the Sand</b></p>')],
		['1993', 1.4, customTooltip('<h2>1993</h2> <p>$1 Odds: $1.40</p><p>$2 Payout:  $4.80<p> <h3>Winner</h3><p><b>Dixieland Heat</b></p>')],
		['1994', 8.3, customTooltip('<h2>1994</h2> <p>$1 Odds: $8.30</p><p>$2 Payout:  $18.60<p> <h3>Winner</h3><p><b>Kandaly</b></p>')],
		['1995', 1.9, customTooltip('<h2>1995</h2> <p>$1 Odds: $1.90</p><p>$2 Payout:  $5.80<p> <h3>Winner</h3><p><b>Petionville</b></p>')],
		['1996', 2.4, customTooltip('<h2>1996</h2> <p>$1 Odds: $2.40</p><p>$2 Payout:  $6.80<p> <h3>Winner</h3><p><b>Grindstone</b></p>')],
		['1997', 4.4, customTooltip('<h2>1997</h2> <p>$1 Odds: $4.40</p><p>$2 Payout:  $10.80<p> <h3>Winner</h3><p><b>Crypto Star</b></p>')],
		['1998', 1.8, customTooltip('<h2>1998</h2> <p>$1 Odds: $1.80</p><p>$2 Payout:  $5.60<p> <h3>Winner</h3><p><b>Comic Strip</b></p>')],
		['1999', 21.7, customTooltip('<h2>1999</h2> <p>$1 Odds: $21.70</p><p>$2 Payout:  $45.40<p> <h3>Winner</h3><p><b>Kimberlite Pipe</b></p>')],
		['2000', 6, customTooltip('<h2>2000</h2> <p>$1 Odds: $6.00</p><p>$2 Payout:  $14.00<p> <h3>Winner</h3><p><b>Mighty</b></p>')],
		['2001', 20.5, customTooltip('<h2>2001</h2> <p>$1 Odds: $20.50</p><p>$2 Payout:  $43.00<p> <h3>Winner</h3><p><b>Fifty Stars</b></p>')],
		['2002', 0.4, customTooltip('<h2>2002</h2> <p>$1 Odds: $0.40</p><p>$2 Payout:  $2.80<p> <h3>Winner</h3><p><b>Repent</b></p>')],
		['2003', 9.4, customTooltip('<h2>2003</h2> <p>$1 Odds: $9.40</p><p>$2 Payout:  $20.80<p> <h3>Winner</h3><p><b>Peace Rules</b></p>')],
		['2004', 7.2, customTooltip('<h2>2004</h2> <p>$1 Odds: $7.20</p><p>$2 Payout:  $16.40<p> <h3>Winner</h3><p><b>Wimbledon</b></p>')],
		['2005', 2.6, customTooltip('<h2>2005</h2> <p>$1 Odds: $2.60</p><p>$2 Payout:  $7.20<p> <h3>Winner</h3><p><b>High Limit</b></p>')],
		['2007', 1.6, customTooltip('<h2>2007</h2> <p>$1 Odds: $1.60</p><p>$2 Payout:  $5.20<p> <h3>Winner</h3><p><b>Circular Quay</b></p>')],
		['2008', .8, customTooltip('<h2>2008</h2> <p>$1 Odds: $0.80</p><p>$2 Payout:  $3.60<p> <h3>Winner</h3><p><b>Pyro</b></p>')],
		['2009', 2.2, customTooltip('<h2>2009</h2> <p>$1 Odds: $2.20</p><p>$2 Payout:  $6.40<p> <h3>Winner</h3><p><b>Friesan Fire</b></p>')],
		['2010', 7.1, customTooltip('<h2>2010</h2> <p>$1 Odds: $7.10</p><p>$2 Payout:  $16.20<p> <h3>Winner</h3><p><b>Mission Impazible</b></p>')],
		['2011', 6.3, customTooltip('<h2>2011</h2> <p>$1 Odds: $6.30</p><p>$2 Payout:  $14.60<p> <h3>Winner</h3><p><b>Pants on Fire</b></p>')],
		['2013', 2.4, customTooltip('<h2>2013</h2> <p>$1 Odds: $2.40</p><p>$2 Payout:  $6.80<p> <h3>Winner</h3><p><b>Revolutionary</b></p>')],
		['2014', 3.3, customTooltip('<h2>2014</h2> <p>$1 Odds: $3.30</p><p>$2 Payout:  $8.60<p> <h3>Winner</h3><p><b>Vicar\'\s in Trouble</b></p>')],
		['2015', 2.3, customTooltip('<h2>2015</h2> <p>$1 Odds: $2.30</p><p>$2 Payout:  $6.60<p> <h3>Winner</h3><p><b>International Star</b></p>')],
		['2016', 3.9, customTooltip('<h2>2016</h2> <p>$1 Odds: $3.90</p><p>$2 Payout:  $9.80<p> <h3>Winner</h3><p><b>Gun Runner</b></p>')],
		['2017', 1.3, customTooltip('<h2>2017</h2> <p>$1 Odds: $1.30</p><p>$2 Payout:  $4.60<p> <h3>Winner</h3><p><b>Girvin</b></p>')],
		['2018', 2.7, customTooltip('<h2>2018</h2> <p>$1 Odds: $2.70</p><p>$2 Payout:  $7.40<p> <h3>Winner</h3><p><b>Noble Indy</b></p>')],
		['2019', 22.5, customTooltip('<h2>2019</h2> <p>$1 Odds: $22.50</p><p>$2 Payout:  $47.00<p> <h3>Winner</h3><p><b>By My Standards</b></p>')],



  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 1, customTooltip2('<h2>1991</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Richman</b></p>'), 11, customTooltip2('<h2>1991</h2> <p> Field Size: 11</p>')],
		['1992', 1, customTooltip2('<h2>1992</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Line in the Sand</b></p>'), 9, customTooltip2('<h2>1992</h2> <p> Field Size: 9</p>')],
		['1993', 1, customTooltip2('<h2>1993</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Dixieland Heat</b></p>'), 13, customTooltip2('<h2>1993</h2> <p> Field Size: 13</p>')],
		['1994', 4, customTooltip2('<h2>1994</h2> <p> 4th Choice<p> <h3>Winner</h3><p><b>Kandaly</b></p>'), 10, customTooltip2('<h2>1994</h2> <p> Field Size: 10</p>')],
		['1995', 1, customTooltip2('<h2>1995</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Petionville</b></p>'), 11, customTooltip2('<h2>1995</h2> <p> Field Size: 11</p>')],
		['1996', 2, customTooltip2('<h2>1996</h2> <p> 2nd Choice<p> <h3>Winner</h3><p><b>Grindstone</b></p>'), 8, customTooltip2('<h2>1996</h2> <p> Field Size: 8</p>')],
		['1997', 2, customTooltip2('<h2>1997</h2> <p> 2nd Choice<p> <h3>Winner</h3><p><b>Crypto Star</b></p>'), 9, customTooltip2('<h2>1997</h2> <p> Field Size: 9</p>')],
		['1998', 1, customTooltip2('<h2>1998</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Comic Strip</b></p>'), 10, customTooltip2('<h2>1998</h2> <p> Field Size: 10</p>')],
		['1999', 5, customTooltip2('<h2>1999</h2> <p> 5th Choice<p> <h3>Winner</h3><p><b>Kimberlite Pipe</b></p>'), 8, customTooltip2('<h2>1999</h2> <p> Field Size: 8</p>')],
		['2000', 4, customTooltip2('<h2>2000</h2> <p> 4th Choice<p> <h3>Winner</h3><p><b>Mighty</b></p>'), 10, customTooltip2('<h2>2000</h2> <p> Field Size: 10</p>')],
		['2001', 5, customTooltip2('<h2>2001</h2> <p> 5th Choice<p> <h3>Winner</h3><p><b>Fifty Stars</b></p>'), 9, customTooltip2('<h2>2001</h2> <p> Field Size: 9</p>')],
		['2002', 1, customTooltip2('<h2>2002</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Repent</b></p>'), 7, customTooltip2('<h2>2002</h2> <p> Field Size: 7</p>')],
		['2003', 4, customTooltip2('<h2>2003</h2> <p> 4th Choice<p> <h3>Winner</h3><p><b>Peace Rules</b></p>'), 10, customTooltip2('<h2>2003</h2> <p> Field Size: 10</p>')],
		['2004', 6, customTooltip2('<h2>2004</h2> <p> 6th Choice<p> <h3>Winner</h3><p><b>Wimbledon</b></p>'), 11, customTooltip2('<h2>2004</h2> <p> Field Size: 11</p>')],
		['2005', 1, customTooltip2('<h2>2005</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>High Limit</b></p>'), 9, customTooltip2('<h2>2005</h2> <p> Field Size: 9</p>')],
		['2007', 1, customTooltip2('<h2>2007</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Circular Quay</b></p>'), 8, customTooltip2('<h2>2007</h2> <p> Field Size: 8</p>')],
		['2008', 1, customTooltip2('<h2>2008</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Pyro</b></p>'), 9, customTooltip2('<h2>2008</h2> <p> Field Size: 9</p>')],
		['2009', 1, customTooltip2('<h2>2009</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Friesan Fire</b></p>'), 9, customTooltip2('<h2>2009</h2> <p> Field Size: 9</p>')],
		['2010', 6, customTooltip2('<h2>2010</h2> <p> 6th Choice<p> <h3>Winner</h3><p><b>Mission Impazible</b></p>'), 12, customTooltip2('<h2>2010</h2> <p> Field Size: 12</p>')],
		['2011', 4, customTooltip2('<h2>2011</h2> <p> 4th Choice<p> <h3>Winner</h3><p><b>Pants On Fire</b></p>'), 12, customTooltip2('<h2>2011</h2> <p> Field Size: 12</p>')],
		['2012', 13, customTooltip2('<h2>2012</h2> <p> 13th Choice<p> <h3>Winner</h3><p><b>Hero of Order</b></p>'), 13, customTooltip2('<h2>2012</h2> <p> Field Size: 13</p>')],
		['2013', 1, customTooltip2('<h2>2013</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Revolutionary</b></p>'), 14, customTooltip2('<h2>2013</h2> <p> Field Size: 14</p>')],
		['2014', 3, customTooltip2('<h2>2014</h2> <p> 3rd Choice<p> <h3>Winner</h3><p><b>Vicar\'\s in Trouble</b></p>'), 10, customTooltip2('<h2>2014</h2> <p> Field Size: 10</p>')],
		['2015', 1, customTooltip2('<h2>2015</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>International Star</b></p>'), 9, customTooltip2('<h2>2015</h2> <p> Field Size: 9</p>')],
		['2016', 3, customTooltip2('<h2>2016</h2> <p> 3rd Choice<p> <h3>Winner</h3><p><b>Gun Runner</b></p>'), 10, customTooltip2('<h2>2016</h2> <p> Field Size: 10</p>')],
		['2017', 1, customTooltip2('<h2>2017</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Girvin</b></p>'), 9, customTooltip2('<h2>2017</h2> <p> Field Size: 9</p>')],
		['2018', 1, customTooltip2('<h2>2018</h2> <p> 1st Choice<p> <h3>Winner</h3><p><b>Noble Indy</b></p>'), 10, customTooltip2('<h2>2018</h2> <p> Field Size: 10</p>')],
		['2019', 6, customTooltip2('<h2>2019</h2> <p> 6th Choice<p> <h3>Winner</h3><p><b>By My Standards</b></p>'), 11, customTooltip2('<h2>2019</h2> <p> Field Size: 11</p>')],



    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Louisiana Derby Winners $1 Odds 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 12, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Louisiana Derby Winners Bettors\' Choice & Field Size 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
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
