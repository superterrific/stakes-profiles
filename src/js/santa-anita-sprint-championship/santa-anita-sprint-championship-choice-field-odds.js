google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 2.4, customTooltip('<h2>1991</h2> <p>$1 Odds: $2.40</p> <p>$2 Payout: $6.80</p> <h3>Winner</h3><p><b>Frost Free</b></p>')],
		['1992', 1.9, customTooltip('<h2>1992</h2> <p>$1 Odds: $1.90</p> <p>$2 Payout: $5.80</p> <h3>Winner</h3><p><b>Gray Slewpy</b></p>')],
		['1993', 6, customTooltip('<h2>1993</h2> <p>$1 Odds: $6.00</p> <p>$2 Payout: $14.00</p> <h3>Winner</h3><p><b>Cardmania</b></p>')],
		['1995', 3.8, customTooltip('<h2>1995</h2> <p>$1 Odds: $3.80</p> <p>$2 Payout: $9.60</p> <h3>Winner</h3><p><b>Track Gal</b></p>')],
		['1996', 3.6, customTooltip('<h2>1996</h2> <p>$1 Odds: $3.60</p> <p>$2 Payout: $9.20</p> <h3>Winner</h3><p><b>Lakota Brave</b></p>')],
		['1997', 5.7, customTooltip('<h2>1997</h2> <p>$1 Odds: $5.70</p> <p>$2 Payout: $13.40</p> <h3>Winner</h3><p><b>Elmhurst</b></p>')],
		['1998', 5, customTooltip('<h2>1998</h2> <p>$1 Odds: $5.00</p> <p>$2 Payout: $12.00</p> <h3>Winner</h3><p><b>Gold Land</b></p>')],
		['1999', 3.2, customTooltip('<h2>1999</h2> <p>$1 Odds: $3.20</p> <p>$2 Payout: $8.40</p> <h3>Winner</h3><p><b>Lexicon</b></p>')],
		['2000', 0.3, customTooltip('<h2>2000</h2> <p>$1 Odds: $0.30</p> <p>$2 Payout: $2.60</p> <h3>Winner</h3><p><b>Kona Gold</b></p>')],
		['2001', 3.6, customTooltip('<h2>2001</h2> <p>$1 Odds: $3.60</p> <p>$2 Payout: $9.20</p> <h3>Winner</h3><p><b>Swept Overboard</b></p>')],
		['2002', 4.5, customTooltip('<h2>2002</h2> <p>$1 Odds: $4.50</p> <p>$2 Payout: $11.00</p> <h3>Winner</h3><p><b>Kalookan Queen</b></p>')],
		['2003', 8.8, customTooltip('<h2>2003</h2> <p>$1 Odds: $8.80</p> <p>$2 Payout: $19.60</p> <h3>Winner</h3><p><b>Avanzado (ARG)</b></p>')],
		['2005', 2.1, customTooltip('<h2>2005</h2> <p>$1 Odds: $2.10</p> <p>$2 Payout: $6.20</p> <h3>Winner</h3><p><b>Captain Squire</b></p>')],
		['2006', 0.4, customTooltip('<h2>2006</h2> <p>$1 Odds: $0.40</p> <p>$2 Payout: $2.80</p> <h3>Winner</h3><p><b>Bordonaro</b></p>')],
		['2007', 2.4, customTooltip('<h2>2007</h2> <p>$1 Odds: $2.40</p> <p>$2 Payout: $6.80</p> <h3>Winner</h3><p><b>Idiot Proof</b></p>')],
		['2008', 5.8, customTooltip('<h2>2008</h2> <p>$1 Odds: $5.80</p> <p>$2 Payout: $13.60</p> <h3>Winner</h3><p><b>Cost of Freedom</b></p>')],
		['2009', 1.2, customTooltip('<h2>2009</h2> <p>$1 Odds: $1.20</p> <p>$2 Payout: $4.40</p> <h3>Winner</h3><p><b>Gayego</b></p>')],
		['2010', 3.6, customTooltip('<h2>2010</h2> <p>$1 Odds: $3.60</p> <p>$2 Payout: $9.20</p> <h3>Winner</h3><p><b>Smiling Tiger</b></p>')],
		['2011', 3.3, customTooltip('<h2>2011</h2> <p>$1 Odds: $3.30</p> <p>$2 Payout: $8.60</p> <h3>Winner</h3><p><b>Amazombie</b></p>')],
		['2012', 7.6, customTooltip('<h2>2012</h2> <p>$1 Odds: $7.60</p> <p>$2 Payout: $17.20</p> <h3>Winner</h3><p><b>Coil</b></p>')],
		['2013', 4.6, customTooltip('<h2>2013</h2> <p>$1 Odds: $4.60</p> <p>$2 Payout: $11.20</p> <h3>Winner</h3><p><b>Points Offthebench</b></p>')],
		['2014', 7.4, customTooltip('<h2>2014</h2> <p>$1 Odds: $7.40</p> <p>$2 Payout: $16.80</p> <h3>Winner</h3><p><b>Rich Tapestry (IRE)</b></p>')],
		['2015', 2.1, customTooltip('<h2>2015</h2> <p>$1 Odds: $2.10</p> <p>$2 Payout: $6.20</p> <h3>Winner</h3><p><b>Wild Dude</b></p>')],
		['2016', 0.5, customTooltip('<h2>2016</h2> <p>$1 Odds: $0.50</p> <p>$2 Payout: $3.00</p> <h3>Winner</h3><p><b>Lord Nelson</b></p>')],
		['2017', 0.9, customTooltip('<h2>2017</h2> <p>$1 Odds: $0.90</p> <p>$2 Payout: $3.80</p> <h3>Winner</h3><p><b>Roy H.</b></p>')],
		['2018', 1, customTooltip('<h2>2018</h2> <p>$1 Odds: $1.00</p> <p>$2 Payout: $4.00</p> <h3>Winner</h3><p><b>Roy H.</b></p>')],

  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 2, customTooltip2('<h2>1991</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Frost Free</b></p>'), 7, customTooltip2('<h2>1991</h2> <p>Field Size: 7</p>')],
		['1992', 1, customTooltip2('<h2>1992</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Gray Slewpy</b></p>'), 9, customTooltip2('<h2>1992</h2> <p>Field Size: 9</p>')],
		['1993', 5, customTooltip2('<h2>1993</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Cardmania</b></p>'), 8, customTooltip2('<h2>1993</h2> <p>Field Size: 8</p>')],
		['1994', 8, customTooltip2('<h2>1994</h2> <p>8th Choice</p> <h3>Winner</h3><p><b>Saratoga Gambler</b></p>'), 8, customTooltip2('<h2>1994</h2> <p>Field Size: 8</p>')],
		['1995', 3, customTooltip2('<h2>1995</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Track Gal</b></p>'), 6, customTooltip2('<h2>1995</h2> <p>Field Size: 6</p>')],
		['1996', 3, customTooltip2('<h2>1996</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Lakota Brave</b></p>'), 5, customTooltip2('<h2>1996</h2> <p>Field Size: 5</p>')],
		['1997', 3, customTooltip2('<h2>1997</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Elmhurst</b></p>'), 7, customTooltip2('<h2>1997</h2> <p>Field Size: 7</p>')],
		['1998', 3, customTooltip2('<h2>1998</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Gold Land</b></p>'), 8, customTooltip2('<h2>1998</h2> <p>Field Size: 8</p>')],
		['1999', 2, customTooltip2('<h2>1999</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Lexicon</b></p>'), 8, customTooltip2('<h2>1999</h2> <p>Field Size: 8</p>')],
		['2000', 1, customTooltip2('<h2>2000</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Kona Gold</b></p>'), 4, customTooltip2('<h2>2000</h2> <p>Field Size: 4</p>')],
		['2001', 2, customTooltip2('<h2>2001</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Swept Overboard</b></p>'), 6, customTooltip2('<h2>2001</h2> <p>Field Size: 6</p>')],
		['2002', 3, customTooltip2('<h2>2002</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Kalookan Queen</b></p>'), 6, customTooltip2('<h2>2002</h2> <p>Field Size: 6</p>')],
		['2003', 5, customTooltip2('<h2>2003</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Avanzado (ARG)</b></p>'), 6, customTooltip2('<h2>2003</h2> <p>Field Size: 6</p>')],
		['2004', 7, customTooltip2('<h2>2004</h2> <p>7th Choice</p> <h3>Winner</h3><p><b>Pt\'\s Grey Eagle</b></p>'), 8, customTooltip2('<h2>2004</h2> <p>Field Size: 8</p>')],
		['2005', 1, customTooltip2('<h2>2005</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Captain Squire</b></p>'), 7, customTooltip2('<h2>2005</h2> <p>Field Size: 7</p>')],
		['2006', 1, customTooltip2('<h2>2006</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Bordonaro</b></p>'), 6, customTooltip2('<h2>2006</h2> <p>Field Size: 6</p>')],
		['2007', 2, customTooltip2('<h2>2007</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Idiot Proof</b></p>'), 5, customTooltip2('<h2>2007</h2> <p>Field Size: 5</p>')],
		['2008', 4, customTooltip2('<h2>2008</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Cost of Freedom</b></p>'), 6, customTooltip2('<h2>2008</h2> <p>Field Size: 6</p>')],
		['2009', 1, customTooltip2('<h2>2009</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Gayego</b></p>'), 10, customTooltip2('<h2>2009</h2> <p>Field Size: 10</p>')],
		['2010', 4, customTooltip2('<h2>2010</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Smiling Tiger</b></p>'), 7, customTooltip2('<h2>2010</h2> <p>Field Size: 7</p>')],
		['2011', 2, customTooltip2('<h2>2011</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Amazombie</b></p>'), 6, customTooltip2('<h2>2011</h2> <p>Field Size: 6</p>')],
		['2012', 5, customTooltip2('<h2>2012</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Coil</b></p>'), 7, customTooltip2('<h2>2012</h2> <p>Field Size: 7</p>')],
		['2013', 3, customTooltip2('<h2>2013</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Points Offthebench</b></p>'), 7, customTooltip2('<h2>2013</h2> <p>Field Size: 7</p>')],
		['2014', 3, customTooltip2('<h2>2014</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Rich Tapestry (IRE)</b></p>'), 5, customTooltip2('<h2>2014</h2> <p>Field Size: 5</p>')],
		['2015', 2, customTooltip2('<h2>2015</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Wild Dude</b></p>'), 5, customTooltip2('<h2>2015</h2> <p>Field Size: 5</p>')],
		['2016', 1, customTooltip2('<h2>2016</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Lord Nelson</b></p>'), 5, customTooltip2('<h2>2016</h2> <p>Field Size: 5</p>')],
		['2017', 1, customTooltip2('<h2>2017</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Roy H.</b></p>'), 6, customTooltip2('<h2>2017</h2> <p>Field Size: 6</p>')],
		['2018', 1, customTooltip2('<h2>2018</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Roy H.</b></p>'), 6, customTooltip2('<h2>2018</h2> <p>Field Size: 5</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {
				title: 'SA Sprint Championship Winners $1 Odds 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false',
				fontName: 'verdana', fontSize: 12},
				textStyle: {fontSize: 12, fontName: 'verdana'},
				slantedText: 'true',
				slantedTextAngle: '90',
				},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10],
				},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {
				title: 'SA Sprint Championship Winners Bettors\' Choice & Field Size 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12},
				 textStyle: {fontSize: 12, fontName: 'verdana'},
				slantedText: 'true',
				slantedTextAngle: '90'
				},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10],
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
