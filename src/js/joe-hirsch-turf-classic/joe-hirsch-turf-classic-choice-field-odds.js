google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 3.1, customTooltip('<h2>1991</h2><p>$1 Odds: $3.10</p> <p>$2 Payout:  $8.20</p><h3>Winner</h3><p><b>Solar Splendor</b></p>')],
		['1992', 1, customTooltip('<h2>1992</h2><p>$1 Odds: $1.00</p> <p>$2 Payout:  $4.00</p><h3>Winner</h3><p><b>Sky Classic</b></p>')],
		['1993', 4.7, customTooltip('<h2>1993</h2><p>$1 Odds: $4.70</p> <p>$2 Payout:  $11.40</p><h3>Winner</h3><p><b>Apple Tree (FR)</b></p>')],
		['1994', 9.5, customTooltip('<h2>1994</h2><p>$1 Odds: $9.50</p> <p>$2 Payout:  $21.00</p><h3>Winner</h3><p><b>Tikkanen</b></p>')],
		['1995', 17.4, customTooltip('<h2>1995</h2><p>$1 Odds: $17.40</p> <p>$2 Payout:  $36.80</p><h3>Winner</h3><p><b>Turk Passer</b></p>')],
		['1996', 5.7, customTooltip('<h2>1996</h2><p>$1 Odds: $5.70</p> <p>$2 Payout:  $13.40</p><h3>Winner</h3><p><b>Diplomatic Jet</b></p>')],
		['1997', 2.65, customTooltip('<h2>1997</h2><p>$1 Odds: $2.65</p> <p>$2 Payout:  $7.30</p><h3>Winner</h3><p><b>Val\'\s Prince</b></p>')],
		['1998', 1.45, customTooltip('<h2>1998</h2><p>$1 Odds: $1.45</p> <p>$2 Payout:  $4.90</p><h3>Winner</h3><p><b>Buck\'\s Boy</b></p>')],
		['1999', 3.05, customTooltip('<h2>1999</h2><p>$1 Odds: $3.05</p> <p>$2 Payout: $8.20</p><h3>Winner</h3><p><b>Val\'\s Prince</b></p>')],
		['2000', 10.4, customTooltip('<h2>2000</h2><p>$1 Odds: $10.40</p> <p>$2 Payout:  $22.80</p><h3>Winner</h3><p><b>John\'\s Call</b></p>')],
		['2001', 3.35, customTooltip('<h2>2001</h2><p>$1 Odds: $3.35</p> <p>$2 Payout:  $8.70</p><h3>Winner</h3><p><b>Timboroa (GB)</b></p>')],
		['2002', 1.55, customTooltip('<h2>2002</h2><p>$1 Odds: $1.5</p> <p>$2 Payout:  $5.10</p><h3>Winner</h3><p><b>Denon</b></p>')],
		['2003', .75, customTooltip('<h2>2003</h2><p>$1 Odds: $.75</p> <p>$2 Payout:  $3.50</p><h3>Winner</h3><p><b>Sulamani (IRE)</b></p>')],
		['2004', 2.4, customTooltip('<h2>2004</h2><p>$1 Odds: $2.40</p> <p>$2 Payout:  $6.80</p><h3>Winner</h3><p><b>Kitten\'\s Joy</b></p>')],
		['2005', .9, customTooltip('<h2>2005</h2><p>$1 Odds: $.90</p> <p>$2 Payout:  $3.80</p><h3>Winner</h3><p><b>Shakespeare</b></p>')],
		['2006', .65, customTooltip('<h2>2006</h2><p>$1 Odds: $.65</p> <p>$2 Payout:  $3.30</p><h3>Winner</h3><p><b>English Channel</b></p>')],
		['2007', .4, customTooltip('<h2>2007</h2><p>$1 Odds: $.40</p> <p>$2 Payout:  $2.80</p><h3>Winner</h3><p><b>English Channel</b></p>')],
		['2008', 2.65, customTooltip('<h2>2008</h2><p>$1 Odds: $2.65</p> <p>$2 Payout:  $7.30</p><h3>Winner</h3><p><b>Grand Couturier (GB)</b></p>')],
		['2010', 3.7, customTooltip('<h2>2010</h2><p>$1 Odds: $3.70</p> <p>$2 Payout:  $9.40</p><h3>Winner</h3><p><b>Winchester</b></p>')],
		['2011', .6, customTooltip('<h2>2011</h2><p>$1 Odds: $.60</p> <p>$2 Payout:  $3.20</p><h3>Winner</h3><p><b>Cape Blanco (IRE)</b></p>')],
		['2012', .75, customTooltip('<h2>2012</h2><p>$1 Odds: $.75</p> <p>$2 Payout:  $3.50</p><h3>Winner</h3><p><b>Point of Entry</b></p>')],
		['2013', 7.4, customTooltip('<h2>2013</h2><p>$1 Odds: $7.40</p> <p>$2 Payout:  $16.80</p><h3>Winner</h3><p><b>Little Mike</b></p>')],
		['2014', 1.95, customTooltip('<h2>2014</h2><p>$1 Odds: $1.95</p> <p>$2 Payout:  $5.90</p><h3>Winner</h3><p><b>Main Sequence</b></p>')],
		['2015', 2.5, customTooltip('<h2>2015</h2><p>$1 Odds: $2.50</p> <p>$2 Payout:  $7.00</p><h3>Winner</h3><p><b>Big Blue Kitten</b></p>')],
		['2016', 9.4, customTooltip('<h2>2016</h2><p>$1 Odds: $9.40</p> <p>$2 Payout:  $20.80</p><h3>Winner</h3><p><b>Ectot (GB)</b></p>')],
		['2017', 5, customTooltip('<h2>2017</h2><p>$1 Odds: $5.00</p> <p>$2 Payout:  $12.00</p><h3>Winner</h3><p><b>Beach Patrol</b></p>')],
		['2018', 5, customTooltip('<h2>2018</h2><p>$1 Odds: $5.00</p> <p>$2 Payout:  $12.00</p><h3>Winner</h3><p><b>Channel Maker</b></p>')],

  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 2, customTooltip2('<h2>1991</h2><p>2nd Choice</p><h3>Winner</h3><p><b>Solar Splendor</b></p>'), 9, customTooltip2('<h2>1991</h2><p>Field Size: 9</b></p>')],
		['1992', 1, customTooltip2('<h2>1992</h2><p>1st Choice</p><h3>Winner</h3><p><b>Sky Classic</b></p>'), 6, customTooltip2('<h2>1992</h2><p>Field Size: 6</b></p>')],
		['1993', 3, customTooltip2('<h2>1993</h2><p>3rd Choice</p><h3>Winner</h3><p><b>Apple Tree (FR)</b></p>'), 5, customTooltip2('<h2>1993</h2><p>Field Size: 5</b></p>')],
		['1994', 6, customTooltip2('<h2>1994</h2><p>6th Choice</p><h3>Winner</h3><p><b>Tikkanen</b></p>'), 6, customTooltip2('<h2>1994</h2><p>Field Size: 6</b></p>')],
		['1995', 7, customTooltip2('<h2>1995</h2><p>7th Choice</p><h3>Winner</h3><p><b>Turk Passer</b></p>'), 8, customTooltip2('<h2>1995</h2><p>Field Size: 8</b></p>')],
		['1996', 5, customTooltip2('<h2>1996</h2><p>5th Choice</p><h3>Winner</h3><p><b>Diplomatic Jet</b></p>'), 10, customTooltip2('<h2>1996</h2><p>Field Size: 10</b></p>')],
		['1997', 4, customTooltip2('<h2>1997</h2><p>4th Choice</p><h3>Winner</h3><p><b>Val\'\s Prince</b></p>'), 5, customTooltip2('<h2>1997</h2><p>Field Size: 5</b></p>')],
		['1998', 1, customTooltip2('<h2>1998</h2><p>1st Choice</p><h3>Winner</h3><p><b>Buck\'\s Boy</b></p>'), 6, customTooltip2('<h2>1998</h2><p>Field Size: 6</b></p>')],
		['1999', 3, customTooltip2('<h2>1999</h2><p>3rd Choice</p><h3>Winner</h3><p><b>Val\'\s Prince</b></p>'), 7, customTooltip2('<h2>1999</h2><p>Field Size: 7</b></p>')],
		['2000', 4, customTooltip2('<h2>2000</h2><p>4th Choice</p><h3>Winner</h3><p><b>John\'\s Call</b></p>'), 12, customTooltip2('<h2>2000</h2><p>Field Size: 12</b></p>')],
		['2001', 2, customTooltip2('<h2>2001</h2><p>2nd Choice</p><h3>Winner</h3><p><b>Timboroa (GB)</b></p>'), 6, customTooltip2('<h2>2001</h2><p>Field Size: 6</b></p>')],
		['2002', 1, customTooltip2('<h2>2002</h2><p>1st Choice</p><h3>Winner</h3><p><b>Denon</b></p>'), 8, customTooltip2('<h2>2002</h2><p>Field Size: 8</b></p>')],
		['2003', 1, customTooltip2('<h2>2003</h2><p>1st Choice</p><h3>Winner</h3><p><b>Sulamani (IRE)</b></p>'), 7, customTooltip2('<h2>2003</h2><p>Field Size: 7</b></p>')],
		['2004', 2, customTooltip2('<h2>2004</h2><p>2nd Choice</p><h3>Winner</h3><p><b>Kitten\'\s Joy</b></p>'), 7, customTooltip2('<h2>2004</h2><p>Field Size: 7</b></p>')],
		['2005', 1, customTooltip2('<h2>2005</h2><p>1st Choice</p><h3>Winner</h3><p><b>Shakespeare</b></p>'), 7, customTooltip2('<h2>2005</h2><p>Field Size: 7</b></p>')],
		['2006', 1, customTooltip2('<h2>2006</h2><p>1st Choice</p><h3>Winner</h3><p><b>English Channel</b></p>'), 7, customTooltip2('<h2>2006</h2><p>Field Size: 7</b></p>')],
		['2007', 1, customTooltip2('<h2>2007</h2><p>1st Choice</p><h3>Winner</h3><p><b>English Channel</b></p>'), 7, customTooltip2('<h2>2007</h2><p>Field Size: 7</b></p>')],
		['2008', 1, customTooltip2('<h2>2008</h2><p>1st Choice</p><h3>Winner</h3><p><b>Grand Couturier (GB)</b></p>'), 8, customTooltip2('<h2>2008</h2><p>Field Size: 8</b></p>')],
		['2009', 6, customTooltip2('<h2>2009</h2><p>6th Choice</p><h3>Winner</h3><p><b>Interpatation</b></p>'), 6, customTooltip2('<h2>2009</h2><p>Field Size: 6</b></p>')],
		['2010', 2, customTooltip2('<h2>2010</h2><p>2nd Choice</p><h3>Winner</h3><p><b>Winchester</b></p>'), 9, customTooltip2('<h2>2010</h2><p>Field Size: 9</b></p>')],
		['2011', 1, customTooltip2('<h2>2011</h2><p>1st Choice</p><h3>Winner</h3><p><b>Cape Blanco (IRE)</b></p>'), 5, customTooltip2('<h2>2011</h2><p>Field Size: 5</b></p>')],
		['2012', 1, customTooltip2('<h2>2012</h2><p>1st Choice</p><h3>Winner</h3><p><b>Point of Entry</b></p>'), 6, customTooltip2('<h2>2012</h2><p>Field Size: 6</b></p>')],
		['2013', 5, customTooltip2('<h2>2013</h2><p>5th Choice</p><h3>Winner</h3><p><b>Little Mike</b></p>'), 9, customTooltip2('<h2>2013</h2><p>Field Size: 9</b></p>')],
		['2014', 3, customTooltip2('<h2>2014</h2><p>3rd Choice</p><h3>Winner</h3><p><b>Main Sequence</b></p>'), 7, customTooltip2('<h2>2014</h2><p>Field Size: 7</b></p>')],
		['2015', 2, customTooltip2('<h2>2015</h2><p>2nd Choice</p><h3>Winner</h3><p><b>Big Blue Kitten</b></p>'), 7, customTooltip2('<h2>2015</h2><p>Field Size: 7</b></p>')],
		['2016', 3, customTooltip2('<h2>2016</h2><p>3rd Choice</p><h3>Winner</h3><p><b>Ectot (GB)</b></p>'), 4, customTooltip2('<h2>2016</h2><p>Field Size: 4</b></p>')],
		['2017', 4, customTooltip2('<h2>2017</h2><p>4th Choice</p><h3>Winner</h3><p><b>Beach Patrol</b></p>'), 11, customTooltip2('<h2>2017</h2><p>Field Size: 11</b></p>')],
		['2018', 3, customTooltip2('<h2>2018</h2><p>3rd Choice</p><h3>Winner</h3><p><b>Channel Maker</b></p>'), 7, customTooltip2('<h2>2018</h2><p>Field Size: 7</b></p>')],


    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {
				title: 'Joe Hirsch Turf Classic Winners $1 Odds 1991-2018',
				titleTextStyle: {color: '#999', italic: 'false', fontName: 'verdana', fontSize: 12},
				textStyle: {fontSize: 12, fontName: 'verdana'},
				slantedText: 'true',
				slantedTextAngle: '90'
				},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
				},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {
				title: 'Joe Hirsch Turf Classic Winners Bettors\' Choice & Field Size 1991-2018',
				titleTextStyle: {color: '#999', italic: 'false', fontName: 'verdana', fontSize: 12},
				textStyle: {fontSize: 12, fontName: 'verdana'},
				slantedText: 'true',
				slantedTextAngle: '90'
				},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11,12]
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
