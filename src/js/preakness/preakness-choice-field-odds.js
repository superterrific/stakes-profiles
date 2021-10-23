google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 9.1, customTooltip('<h2>1991</h2> <p>$1 Odds: $9.10<br /> $2 Payout:  $20.00</p> <h3>Winner</h3><p><b>Hansel</b></p>')],
		['1992', 3.5, customTooltip('<h2>1992</h2> <p>$1 Odds: $3.50<br /> $2 Payout:  $9.00</p> <h3>Winner</h3><p><b>Pine Bluff</b></p>')],
		['1993', 2.2, customTooltip('<h2>1993</h2> <p>$1 Odds: $2.20<br /> $2 Payout:  $6.40</p> <h3>Winner</h3><p><b>Prairie Bayou</b></p>')],
		['1994', 3.6, customTooltip('<h2>1994</h2> <p>$1 Odds: $3.60<br /> $2 Payout:  $9.20</p> <h3>Winner</h3><p><b>Tabasco Cat</b></p>')],
		['1995', 1.9, customTooltip('<h2>1995</h2> <p>$1 Odds: $1.90<br /> $2 Payout:  $5.80</p> <h3>Winner</h3><p><b>Timber Country</b></p>')],
		['1996', 8.5, customTooltip('<h2>1996</h2> <p>$1 Odds: $8.50<br /> $2 Payout:  $19.00</p> <h3>Winner</h3><p><b>Louis Quatorze</b></p>')],
		['1997', 3.1, customTooltip('<h2>1997</h2> <p>$1 Odds: $3.10<br /> $2 Payout:  $8.20</p> <h3>Winner</h3><p><b>Silver Charm</b></p>')],
		['1998', 2.5, customTooltip('<h2>1998</h2> <p>$1 Odds: $2.50<br /> $2 Payout:  $7.00</p> <h3>Winner</h3><p><b>Real Quiet</b></p>')],
		['1999', 8.4, customTooltip('<h2>1999</h2> <p>$1 Odds: $8.40<br /> $2 Payout:  $18.80</p> <h3>Winner</h3><p><b>Charismatic</b></p>')],
		['2000', 6.2, customTooltip('<h2>2000</h2> <p>$1 Odds: $6.20<br /> $2 Payout:  $14.40</p> <h3>Winner</h3><p><b>Red Bullet</b></p>')],
		['2001', 2.3, customTooltip('<h2>2001</h2> <p>$1 Odds: $2.30<br /> $2 Payout:  $6.60</p> <h3>Winner</h3><p><b>Point Given</b></p>')],
		['2002', 2.8, customTooltip('<h2>2002</h2> <p>$1 Odds: $2.80<br /> $2 Payout:  $7.60</p> <h3>Winner</h3><p><b>War Emblem</b></p>')],
		['2003', 1.9, customTooltip('<h2>2003</h2> <p>$1 Odds: $1.90<br /> $2 Payout:  $5.80</p> <h3>Winner</h3><p><b>Funny Cide</b></p>')],
		['2004', 0.7, customTooltip('<h2>2004</h2> <p>$1 Odds: $0.70<br /> $2 Payout:  $3.40</p> <h3>Winner</h3><p><b>Smarty Jones</b></p>')],
		['2005', 3.3, customTooltip('<h2>2005</h2> <p>$1 Odds: $3.30<br /> $2 Payout:  $8.60</p> <h3>Winner</h3><p><b>Afleet Alex</b></p>')],
		['2006', 12.9, customTooltip('<h2>2006</h2> <p>$1 Odds: $12.90<br /> $2 Payout:  $27.80</p> <h3>Winner</h3><p><b>Bernardini</b></p>')],
		['2007', 3.4, customTooltip('<h2>2007</h2> <p>$1 Odds: $3.40<br /> $2 Payout:  $8.80</p> <h3>Winner</h3><p><b>Curlin</b></p>')],
		['2008', 0.2, customTooltip('<h2>2008</h2> <p>$1 Odds: $0.20<br /> $2 Payout:  $2.40</p> <h3>Winner</h3><p><b>Big Brown</b></p>')],
		['2009', 1.8, customTooltip('<h2>2009</h2> <p>$1 Odds: $1.80<br /> $2 Payout:  $5.60</p> <h3>Winner</h3><p><b>Rachel Alexandra</b></p>')],
		['2010', 2.4, customTooltip('<h2>2010</h2> <p>$1 Odds: $2.40<br /> $2 Payout:  $6.80</p> <h3>Winner</h3><p><b>Lookin At Lucky</b></p>')],
		['2011', 12.6, customTooltip('<h2>2011</h2> <p>$1 Odds: $12.60<br /> $2 Payout:  $27.20</p> <h3>Winner</h3><p><b>Shackleford</b></p>')],
		['2012', 3.2, customTooltip('<h2>2012</h2> <p>$1 Odds: $3.20<br /> $2 Payout:  $8.40</p> <h3>Winner</h3><p><b>I\'\ll Have Another</b></p>')],
		['2013', 15.4, customTooltip('<h2>2013</h2> <p>$1 Odds: $15.40<br /> $2 Payout:  $32.80</p> <h3>Winner</h3><p><b>Oxbow</b></p>')],
		['2014', 0.5, customTooltip('<h2>2014</h2> <p>$1 Odds: $0.50<br /> $2 Payout:  $3.00</p> <h3>Winner</h3><p><b>California Chrome</b></p>')],
		['2015', 0.9, customTooltip('<h2>2015</h2> <p>$1 Odds: $0.90<br /> $2 Payout:  $3.80</p> <h3>Winner</h3><p><b>American Pharoah</b></p>')],
		['2016', 2.6, customTooltip('<h2>2016</h2> <p>$1 Odds: $2.60<br /> $2 Payout:  $7.20</p> <h3>Winner</h3><p><b>Exaggerator</b></p>')],
		['2017', 13.4, customTooltip('<h2>2017</h2> <p>$1 Odds: $13.40<br /> $2 Payout:  $28.80</p> <h3>Winner</h3><p><b>Cloud Computing</b></p>')],
		['2018', .4, customTooltip('<h2>2018</h2> <p>$1 Odds: $.40<br /> $2 Payout:  $2.80</p> <h3>Winner</h3><p><b>Justify</b></p>')],
		['2019', 6.1, customTooltip('<h2>2019</h2> <p>$1 Odds: $6.10<br /> $2 Payout:  $14.20</p> <h3>Winner</h3><p><b>War of Will</b></p>')],



  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 4, customTooltip2('<h2>1991</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Hansel</b></p>'), 8, customTooltip2('<h2>1991</h2> <p>Field Size: 8</p>')],
		['1992', 1, customTooltip2('<h2>1992</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Pine Bluff</b></p>'), 14, customTooltip2('<h2>1992</h2> <p>Field Size: 14</p>')],
		['1993', 1, customTooltip2('<h2>1993</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Prairie Bayou</b></p>'), 12, customTooltip2('<h2>1993</h2> <p>Field Size: 12</p>')],
		['1994', 3, customTooltip2('<h2>1994</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Tabasco Cat</b></p>'), 10, customTooltip2('<h2>1994</h2> <p>Field Size: 10</p>')],
		['1995', 1, customTooltip2('<h2>1995</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Timber Country</b></p>'), 11, customTooltip2('<h2>1995</h2> <p>Field Size: 11</p>')],
		['1996', 5, customTooltip2('<h2>1996</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Louis Quatorze</b></p>'), 12, customTooltip2('<h2>1996</h2> <p>Field Size: 12</p>')],
		['1997', 3, customTooltip2('<h2>1997</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Silver Charm</b></p>'), 10, customTooltip2('<h2>1997</h2> <p>Field Size: 10</p>')],
		['1998', 2, customTooltip2('<h2>1998</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Real Quiet</b></p>'), 10, customTooltip2('<h2>1998</h2> <p>Field Size: 10</p>')],
		['1999', 5, customTooltip2('<h2>1999</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Charismatic</b></p>'), 13, customTooltip2('<h2>1999</h2> <p>Field Size: 13</p>')],
		['2000', 2, customTooltip2('<h2>2000</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Red Bullet</b></p>'), 8, customTooltip2('<h2>2000</h2> <p>Field Size: 8</p>')],
		['2001', 1, customTooltip2('<h2>2001</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Point Given</b></p>'), 11, customTooltip2('<h2>2001</h2> <p>Field Size: 11</p>')],
		['2002', 1, customTooltip2('<h2>2002</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>War Emblem</b></p>'), 13, customTooltip2('<h2>2002</h2> <p>Field Size: 13</p>')],
		['2003', 1, customTooltip2('<h2>2003</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Funny Cide</b></p>'), 10, customTooltip2('<h2>2003</h2> <p>Field Size: 10</p>')],
		['2004', 1, customTooltip2('<h2>2004</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Smarty Jones</b></p>'), 10, customTooltip2('<h2>2004</h2> <p>Field Size: 10</p>')],
		['2005', 1, customTooltip2('<h2>2005</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Afleet Alex</b></p>'), 14, customTooltip2('<h2>2005</h2> <p>Field Size: 14</p>')],
		['2006', 4, customTooltip2('<h2>2006</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Bernardini</b></p>'), 9, customTooltip2('<h2>2006</h2> <p>Field Size: 9</p>')],
		['2007', 2, customTooltip2('<h2>2007</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Curlin</b></p>'), 9, customTooltip2('<h2>2007</h2> <p>Field Size: 9</p>')],
		['2008', 1, customTooltip2('<h2>2008</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Big Brown</b></p>'), 12, customTooltip2('<h2>2008</h2> <p>Field Size: 12</p>')],
		['2009', 1, customTooltip2('<h2>2009</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Rachel Alexandra</b></p>'), 13, customTooltip2('<h2>2009</h2> <p>Field Size: 13</p>')],
		['2010', 2, customTooltip2('<h2>2010</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Lookin At Lucky</b></p>'), 12, customTooltip2('<h2>2010</h2> <p>Field Size: 12</p>')],
		['2011', 6, customTooltip2('<h2>2011</h2> <p>6th Choice</p> <h3>Winner</h3><p><b>Shackleford</b></p>'), 14, customTooltip2('<h2>2011</h2> <p>Field Size: 14</p>')],
		['2012', 2, customTooltip2('<h2>2012</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>I\'\ll Have Another</b></p>'), 11, customTooltip2('<h2>2012</h2> <p>Field Size: 11</p>')],
		['2013', 8, customTooltip2('<h2>2013</h2> <p>8th Choice</p> <h3>Winner</h3><p><b>Oxbow</b></p>'), 9, customTooltip2('<h2>2013</h2> <p>Field Size: 9</p>')],
		['2014', 1, customTooltip2('<h2>2014</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>California Chrome</b></p>'), 10, customTooltip2('<h2>2014</h2> <p>Field Size: 10</p>')],
		['2015', 1, customTooltip2('<h2>2015</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>American Pharoah</b></p>'), 8, customTooltip2('<h2>2015</h2> <p>Field Size: 8</p>')],
		['2016', 2, customTooltip2('<h2>2016</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Exaggerator</b></p>'), 11, customTooltip2('<h2>2016</h2> <p>Field Size: 11</p>')],
		['2017', 6, customTooltip2('<h2>2017</h2> <p>6th Choice</p> <h3>Winner</h3><p><b>Cloud Computing</b></p>'), 10, customTooltip2('<h2>2017</h2> <p>Field Size: 10</p>')],
		['2018', 1, customTooltip2('<h2>2018</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Justify</b></p>'), 8, customTooltip2('<h2>2018</h2> <p>Field Size: 8</p>')],
		['2019', 3, customTooltip2('<h2>2019</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>War of Will</b></p>'), 8, customTooltip2('<h2>2019</h2> <p>Field Size: 13</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Preakness Winners $1 Odds 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 10, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Preakness Winners Bettors\' Choice & Field Size 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
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
