google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 4.2, customTooltip('<h2>1991</strong></h2> <p>$1 Odds: $4.20</p> <p>$2 Payout:  $10.40</p> <h3>Winner</h3><p><b>In Excess (IRE)</b></p>')],
		['1992', 4.5, customTooltip('<h2>1992</strong></h2> <p>$1 Odds: $4.50</p> <p>$2 Payout:  $11.00</p> <h3>Winner</h3><p><b>Dixie Brass</b></p>')],
		['1993', 3.1, customTooltip('<h2>1993</strong></h2> <p>$1 Odds: $3.10</p> <p>$2 Payout:  $8.20</p> <h3>Winner</h3><p><b>Ibero (ARG)</b></p>')],
		['1994', 1, customTooltip('<h2>1994</strong></h2> <p>$1 Odds: $1.00</p> <p>$2 Payout:  $4.00</p> <h3>Winner</h3><p><b>Holy Bull</b></p>')],
		['1995', 6.7, customTooltip('<h2>1995</strong></h2> <p>$1 Odds: $6.70</p> <p>$2 Payout:  $15.40</p> <h3>Winner</h3><p><b>You and I</b></p>')],
		['1996', 12.3, customTooltip('<h2>1996</strong></h2> <p>$1 Odds: $12.30</p> <p>$2 Payout:  $26.60</p> <h3>Winner</h3><p><b>Honour and Glory</b></p>')],
		['1997', 4.9, customTooltip('<h2>1997</strong></h2> <p>$1 Odds: $4.90</p> <p>$2 Payout:  $11.80</p> <h3>Winner</h3><p><b>Langfuhr</b></p>')],
		['1998', 4.7, customTooltip('<h2>1998</strong></h2> <p>$1 Odds: $4.70</p> <p>$2 Payout:  $11.40</p> <h3>Winner</h3><p><b>Wild Rush</b></p>')],
		['1999', 6.3, customTooltip('<h2>1999</strong></h2> <p>$1 Odds: $6.30</p> <p>$2 Payout:  $14.60</p> <h3>Winner</h3><p><b>Sir Bear</b></p>')],
		['2000', 4.3, customTooltip('<h2>2000</strong></h2> <p>$1 Odds: $4.30</p> <p>$2 Payout:  $10.60</p> <h3>Winner</h3><p><b>Yankee Victor</b></p>')],
		['2002', 11.3, customTooltip('<h2>2002</strong></h2> <p>$1 Odds: $11.30</p> <p>$2 Payout:  $24.60</p> <h3>Winner</h3><p><b>Swept Overboard</b></p>')],
		['2003', 4.4, customTooltip('<h2>2003</strong></h2> <p>$1 Odds: $4.40</p> <p>$2 Payout:  $10.80</p> <h3>Winner</h3><p><b>Aldebaran</b></p>')],
		['2004', 3.45, customTooltip('<h2>2004</strong></h2> <p>$1 Odds: $3.45</p> <p>$2 Payout:  $8.90</p> <h3>Winner</h3><p><b>Pico Central (BRZ)</b></p>')],
		['2005', 0.65, customTooltip('<h2>2005</strong></h2> <p>$1 Odds: $0.65</p> <p>$2 Payout:  $3.30</p> <h3>Winner</h3><p><b>Ghostzapper</b></p>')],
		['2006', 2.3, customTooltip('<h2>2006</strong></h2> <p>$1 Odds: $2.30</p> <p>$2 Payout:  $6.60</p> <h3>Winner</h3><p><b>Silver Train</b></p>')],
		['2007', 9.8, customTooltip('<h2>2007</strong></h2> <p>$1 Odds: $9.80</p> <p>$2 Payout:  $21.60</p> <h3>Winner</h3><p><b>Corinthian</b></p>')],
		['2008', 2.25, customTooltip('<h2>2008</strong></h2> <p>$1 Odds: $2.25</p> <p>$2 Payout:  $6.50</p> <h3>Winner</h3><p><b>Divine Park</b></p>')],
		['2009', 3.15, customTooltip('<h2>2009</strong></h2> <p>$1 Odds: $3.15</p> <p>$2 Payout:  $8.30</p> <h3>Winner</h3><p><b>Bribon (FR)</b></p>')],
		['2010', 0.25, customTooltip('<h2>2010</strong></h2> <p>$1 Odds: $0.25</p> <p>$2 Payout:  $2.50</p> <h3>Winner</h3><p><b>Quality Road</b></p>')],
		['2011', 3.1, customTooltip('<h2>2011</strong></h2> <p>$1 Odds: $3.10</p> <p>$2 Payout:  $8.20</p> <h3>Winner</h3><p><b>Tizway</b></p>')],
		['2012', 3.4, customTooltip('<h2>2012</strong></h2> <p>$1 Odds: $3.40</p> <p>$2 Payout:  $8.80</p> <h3>Winner</h3><p><b>Shackleford</b></p>')],
		['2013', 4.8, customTooltip('<h2>2013</strong></h2> <p>$1 Odds: $4.80</p> <p>$2 Payout:  $11.60</p> <h3>Winner</h3><p><b>Sahara Sky</b></p>')],
		['2014', 1.35, customTooltip('<h2>2014</strong></h2> <p>$1 Odds: $1.35</p> <p>$2 Payout:  $4.70</p> <h3>Winner</h3><p><b>Palace Malice</b></p>')],
		['2015', 7.1, customTooltip('<h2>2015</strong></h2> <p>$1 Odds: $7.10</p> <p>$2 Payout:  $16.20</p> <h3>Winner</h3><p><b>Honor Code</b></p>')],
		['2016', 2.35, customTooltip('<h2>2016</strong></h2> <p>$1 Odds: $2.35</p> <p>$2 Payout:  $6.70</p> <h3>Winner</h3><p><b>Frosted</b></p>')],
		['2017', 2.55, customTooltip('<h2>2017</strong></h2> <p>$1 Odds: $2.55</p> <p>$2 Payout:  $7.10</p> <h3>Winner</h3><p><b>Mor Spirit</b></p>')],
		['2018', 3.25, customTooltip('<h2>2018</strong></h2> <p>$1 Odds: $3.25</p> <p>$2 Payout:  $8.50</p> <h3>Winner</h3><p><b>Bee Jersey</b></p>')],
		['2018', 3.25, customTooltip('<h2>2018</strong></h2> <p>$1 Odds: $3.25</p> <p>$2 Payout:  $8.50</p> <h3>Winner</h3><p><b>Bee Jersey</b></p>')],
		['2019', 3.5, customTooltip('<h2>2019</strong></h2> <p>$1 Odds: $3.50</p> <p>$2 Payout:  $9.00</p> <h3>Winner</h3><p><b>Mitole</b></p>')],



  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 2, customTooltip2('<h2>1991</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>In Excess (IRE)</b></p>'), 14, customTooltip2('<h2>1991</h2> <p>Field Size: 14</p>')],
		['1992', 4, customTooltip2('<h2>1992</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Dixie Brass</b></p>'), 11, customTooltip2('<h2>1992</h2> <p>Field Size: 11</p>')],
		['1993', 1, customTooltip2('<h2>1993</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Ibero (ARG)</b></p>'), 9, customTooltip2('<h2>1993</h2> <p>Field Size: 9</p>')],
		['1994', 1, customTooltip2('<h2>1994</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Holy Bull</b></p>'), 10, customTooltip2('<h2>1994</h2> <p>Field Size: 10</p>')],
		['1995', 5, customTooltip2('<h2>1995</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>You and I</b></p>'), 9, customTooltip2('<h2>1995</h2> <p>Field Size: 9</p>')],
		['1996', 7, customTooltip2('<h2>1996</h2> <p>7th Choice</p> <h3>Winner</h3><p><b>Honour and Glory</b></p>'), 9, customTooltip2('<h2>1996</h2> <p>Field Size: 9</p>')],
		['1997', 4, customTooltip2('<h2>1997</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Langfuhr</b></p>'), 10, customTooltip2('<h2>1997</h2> <p>Field Size: 10</p>')],
		['1998', 2, customTooltip2('<h2>1998</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Wild Rush</b></p>'), 9, customTooltip2('<h2>1998</h2> <p>Field Size: 9</p>')],
		['1999', 3, customTooltip2('<h2>1999</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Sir Bear</b></p>'), 8, customTooltip2('<h2>1999</h2> <p>Field Size: 8</p>')],
		['2000', 3, customTooltip2('<h2>2000</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Yankee Victor</b></p>'), 8, customTooltip2('<h2>2000</h2> <p>Field Size: 8</p>')],
		['2001', 10, customTooltip2('<h2>2001</h2> <p>10th Choice</p> <h3>Winner</h3><p><b>Exciting Story</b></p>'), 10, customTooltip2('<h2>2001</h2> <p>Field Size: 10</p>')],
		['2002', 6, customTooltip2('<h2>2002</h2> <p>6th Choice</p> <h3>Winner</h3><p><b>Swept Overboard</b></p>'), 10, customTooltip2('<h2>2002</h2> <p>Field Size: 10</p>')],
		['2003', 3, customTooltip2('<h2>2003</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Aldebaran</b></p>'), 8, customTooltip2('<h2>2003</h2> <p>Field Size: 8</p>')],
		['2004', 2, customTooltip2('<h2>2004</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Pico Central (BRZ)</b></p>'), 9, customTooltip2('<h2>2004</h2> <p>Field Size: 9</p>')],
		['2005', 1, customTooltip2('<h2>2005</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Ghostzapper</b></p>'), 6, customTooltip2('<h2>2005</h2> <p>Field Size: 6</p>')],
		['2006', 1, customTooltip2('<h2>2006</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Silver Train</b></p>'), 7, customTooltip2('<h2>2006</h2> <p>Field Size: 7</p>')],
		['2007', 7, customTooltip2('<h2>2007</h2> <p>7th Choice</p> <h3>Winner</h3><p><b>Corinthian</b></p>'), 9, customTooltip2('<h2>2007</h2> <p>Field Size: 9</p>')],
		['2008', 2, customTooltip2('<h2>2008</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Divine Park</b></p>'), 9, customTooltip2('<h2>2008</h2> <p>Field Size: 9</p>')],
		['2009', 1, customTooltip2('<h2>2009</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Bribon (FR)</b></p>'), 12, customTooltip2('<h2>2009</h2> <p>Field Size: 12</p>')],
		['2010', 1, customTooltip2('<h2>2010</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Quality Road</b></p>'), 8, customTooltip2('<h2>2010</h2> <p>Field Size: 8</p>')],
		['2011', 1, customTooltip2('<h2>2011</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Tizway</b></p>'), 8, customTooltip2('<h2>2011</h2> <p>Field Size: 11</p>')],
		['2012', 3, customTooltip2('<h2>2012</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Shackleford</b></p>'), 11, customTooltip2('<h2>2012</h2> <p>Field Size: 6</p>')],
		['2013', 3, customTooltip2('<h2>2013</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Sahara Sky</b></p>'), 9, customTooltip2('<h2>2013</h2> <p>Field Size: 9</p>')],
		['2014', 1, customTooltip2('<h2>2014</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Palace Malice</b></p>'), 12, customTooltip2('<h2>2014</h2> <p>Field Size: 12</p>')],
		['2015', 5, customTooltip2('<h2>2015</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Honor Code</b></p>'), 10, customTooltip2('<h2>2015</h2> <p>Field Size: 10</p>')],
		['2016', 1, customTooltip2('<h2>2016</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Frosted</b></p>'), 10, customTooltip2('<h2>2016</h2> <p>Field Size: 10</p>')],
		['2017', 1, customTooltip2('<h2>2017</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Mor Spirit</b></p>'), 12, customTooltip2('<h2>2017</h2> <p>Field Size: 12</p>')],
		['2018', 1, customTooltip2('<h2>2018</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Bee Jersey</b></p>'), 11, customTooltip2('<h2>2018</h2> <p>Field Size: 11</p>')],
		['2019', 2, customTooltip2('<h2>2019</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Mitole</b></p>'), 9, customTooltip2('<h2>2019</h2> <p>Field Size: 9</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Met Mile Winners $1 Odds 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 14, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Met Mile Winners Bettors\' Choice & Field Size 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 16, color: '#dddddd'}},
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
