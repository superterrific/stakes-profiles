google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 8.9, customTooltip('<h2>1991</h2><p>$1 Odds: $8.90</p> <p>$2 Payout: $19.80</p><h3>Winner</h3><p><b>La Gueriere</p>')],
		['1992', 4.9, customTooltip('<h2>1992</h2><p>$1 Odds: $4.90</p> <p>$2 Payout: $11.80</p><h3>Winner</h3><p><b>Captive Miss</p>')],
		['1993', 21.4, customTooltip('<h2>1993</h2><p>$1 Odds: $21.40</p> <p>$2 Payout: $44.80</p><h3>Winner</h3><p><b>Tribulation</p>')],
		['1994', 11.8, customTooltip('<h2>1994</h2><p>$1 Odds: $11.80</p> <p>$2 Payout: $25.60</p><h3>Winner</h3><p><b>Danish (IRE)</p>')],
		['1995', 0.7, customTooltip('<h2>1995</h2><p>$1 Odds: $0.70</p> <p>$2 Payout: $3.40</p><h3>Winner</h3><p><b>Perfect Arc</p>')],
		['1996', 4.6, customTooltip('<h2>1996</h2><p>$1 Odds: $4.60</p> <p>$2 Payout: $11.20</p><h3>Winner</h3><p><b>Memories of Silver</p>')],
		['1997', 2.8, customTooltip('<h2>1997</h2><p>$1 Odds: $2.80</p> <p>$2 Payout: $7.60</p><h3>Winner</h3><p><b>Ryafan</p>')],
		['1998', 0.8, customTooltip('<h2>1998</h2><p>$1 Odds: $0.80</p> <p>$2 Payout: $3.60</p><h3>Winner</h3><p><b>Tenski</p>')],
		['1999', 1.6, customTooltip('<h2>1999</h2><p>$1 Odds: $1.60</p> <p>$2 Payout: $5.20</p><h3>Winner</h3><p><b>Perfect Sting</p>')],
		['2000', 25.1, customTooltip('<h2>2000</h2><p>$1 Odds: $25.10</p> <p>$2 Payout: $52.20</p><h3>Winner</h3><p><b>Collect the Cash</p>')],
		['2001', 6.1, customTooltip('<h2>2001</h2><p>$1 Odds: $6.10</p> <p>$2 Payout: $14.20</p><h3>Winner</h3><p><b>Affluent</p>')],
		['2002', 7.6, customTooltip('<h2>2002</h2><p>$1 Odds: $7.60</p> <p>$2 Payout: $17.20</p><h3>Winner</h3><p><b>Riskaverse</p>')],
		['2003', 11.6, customTooltip('<h2>2003</h2><p>$1 Odds: $11.60</p> <p>$2 Payout: $25.20</p><h3>Winner</h3><p><b>Film Maker</p>')],
		['2004', 1.7, customTooltip('<h2>2004</h2><p>$1 Odds: $1.70</p> <p>$2 Payout: $5.40</p><h3>Winner</h3><p><b>Ticker Tape (GB)</p>')],
		['2005', 18.7, customTooltip('<h2>2005</h2><p>$1 Odds: $18.70</p> <p>$2 Payout: $39.40</p><h3>Winner</h3><p><b>Sweet Talker</p>')],
		['2006', 6.8, customTooltip('<h2>2006</h2><p>$1 Odds: $6.80</p> <p>$2 Payout: $15.60</p><h3>Winner</h3><p><b>Vacare</p>')],
		['2007', 6.9, customTooltip('<h2>2007</h2><p>$1 Odds: $6.90</p> <p>$2 Payout: $15.80</p><h3>Winner</h3><p><b>Bit of Whimsy</p>')],
		['2008', 11.6, customTooltip('<h2>2008</h2><p>$1 Odds: $11.60</p> <p>$2 Payout: $25.20</p><h3>Winner</h3><p><b>Alwajeeha</p>')],
		['2009', 8.5, customTooltip('<h2>2009</h2><p>$1 Odds: $8.50</p> <p>$2 Payout: $19.00</p><h3>Winner</h3><p><b>Hot Cha Cha</p>')],
		['2010', 2.5, customTooltip('<h2>2010</h2><p>$1 Odds: $2.50</p> <p>$2 Payout: $7.00</p><h3>Winner</h3><p><b>Harmonious</p>')],
		['2011', 4.6, customTooltip('<h2>2011</h2><p>$1 Odds: $4.60</p> <p>$2 Payout: $11.20</p><h3>Winner</h3><p><b>Together (IRE)</p>')],
		['2012', 3.3, customTooltip('<h2>2012</h2><p>$1 Odds: $3.30</p> <p>$2 Payout: $8.60</p><h3>Winner</h3><p><b>Dayatthespa</p>')],
		['2013', 4.9, customTooltip('<h2>2013</h2><p>$1 Odds: $4.90</p> <p>$2 Payout: $11.80</p><h3>Winner</h3><p><b>Kitten\'\s Dumplings</p>')],
		['2014', 2.6, customTooltip('<h2>2014</h2><p>$1 Odds: $2.60</p> <p>$2 Payout: $7.20</p><h3>Winner</h3><p><b>Crown Queen</p>')],
		['2015', 19, customTooltip('<h2>2015</h2><p>$1 Odds: $19.00</p> <p>$2 Payout: $40.00</p><h3>Winner</h3><p><b>Her Emmynency</p>')],
		['2016', 3, customTooltip('<h2>2016</h2><p>$1 Odds: $3.00</p> <p>$2 Payout: $8.00</p><h3>Winner</h3><p><b>Time and Motion</p>')],
		['2017', 5.1, customTooltip('<h2>2017</h2><p>$1 Odds: $5.10</p> <p>$2 Payout: $12.20</p><h3>Winner</h3><p><b>La Coronel</p>')],
		['2018', .4, customTooltip('<h2>2018</h2><p>$1 Odds: $.40</p> <p>$2 Payout: $2.80</p><h3>Winner</h3><p><b>Rushing Fall</p>')],



  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 6, customTooltip2('<h2>1991</h2><p>6th Choice</p><h3>Winner:</h3><p><b>La Gueriere</p>'), 9, customTooltip2('<h2>1991</h2><p>Field Size: 9</p>')],
		['1992', 3, customTooltip2('<h2>1992</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>Captive Miss</p>'), 10, customTooltip2('<h2>1992</h2><p>Field Size: 10</p>')],
		['1993', 9, customTooltip2('<h2>1993</h2><p>9th Choice</p><h3>Winner:</h3><p><b>Tribulation</p>'), 9, customTooltip2('<h2>1993</h2><p>Field Size: 9</p>')],
		['1994', 7, customTooltip2('<h2>1994</h2><p>7th Choice</p><h3>Winner:</h3><p><b>Danish (IRE)</p>'), 10, customTooltip2('<h2>1994</h2><p>Field Size: 10</p>')],
		['1995', 1, customTooltip2('<h2>1995</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Perfect Arc</p>'), 8, customTooltip2('<h2>1995</h2><p>Field Size: 8</p>')],
		['1996', 3, customTooltip2('<h2>1996</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>Memories of Silver</p>'), 10, customTooltip2('<h2>1996</h2><p>Field Size: 10</p>')],
		['1997', 2, customTooltip2('<h2>1997</h2><p>2nd Choice</p><h3>Winner:</h3><p><b>Ryafan</p>'), 8, customTooltip2('<h2>1997</h2><p>Field Size: 8</p>')],
		['1998', 1, customTooltip2('<h2>1998</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Tenski</p>'), 9, customTooltip2('<h2>1998</h2><p>Field Size: 9</p>')],
		['1999', 1, customTooltip2('<h2>1999</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Perfect Sting</p>'), 9, customTooltip2('<h2>1999</h2><p>Field Size: 9</p>')],
		['2000', 8, customTooltip2('<h2>2000</h2><p>8th Choice</p><h3>Winner:</h3><p><b>Collect the Cash</p>'), 9, customTooltip2('<h2>2000</h2><p>Field Size: 9</p>')],
		['2001', 3, customTooltip2('<h2>2001</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>Affluent</p>'), 10, customTooltip2('<h2>2001</h2><p>Field Size: 10</p>')],
		['2002', 5, customTooltip2('<h2>2002</h2><p>5th Choice</p><h3>Winner:</h3><p><b>Riskaverse</p>'), 9, customTooltip2('<h2>2002</h2><p>Field Size: 9</p>')],
		['2003', 8, customTooltip2('<h2>2003</h2><p>8th Choice</p><h3>Winner:</h3><p><b>Film Maker</p>'), 10, customTooltip2('<h2>2003</h2><p>Field Size: 10</p>')],
		['2004', 1, customTooltip2('<h2>2004</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Ticker Tape (GB)</p>'), 7, customTooltip2('<h2>2004</h2><p>Field Size: 7</p>')],
		['2005', 7, customTooltip2('<h2>2005</h2><p>7th Choice</p><h3>Winner:</h3><p><b>Sweet Talker</p>'), 7, customTooltip2('<h2>2005</h2><p>Field Size: 7</p>')],
		['2006', 4, customTooltip2('<h2>2006</h2><p>4th Choice</p><h3>Winner:</h3><p><b>Vacare</p>'), 11, customTooltip2('<h2>2006</h2><p>Field Size: 11</p>')],
		['2007', 5, customTooltip2('<h2>2007</h2><p>5th Choice</p><h3>Winner:</h3><p><b>Bit of Whimsy</p>'), 9, customTooltip2('<h2>2007</h2><p>Field Size: 9</p>')],
		['2008', 6, customTooltip2('<h2>2008</h2><p>6th Choice</p><h3>Winner:</h3><p><b>Alwajeeha</p>'), 11, customTooltip2('<h2>2008</h2><p>Field Size: 11</p>')],
		['2009', 4, customTooltip2('<h2>2009</h2><p>4th Choice</p><h3>Winner:</h3><p><b>Hot Cha Cha</p>'), 7, customTooltip2('<h2>2009</h2><p>Field Size: 7</p>')],
		['2010', 1, customTooltip2('<h2>2010</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Harmonious</p>'), 8, customTooltip2('<h2>2010</h2><p>Field Size: 8</p>')],
		['2011', 3, customTooltip2('<h2>2011</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>Together (IRE)</p>'), 8, customTooltip2('<h2>2011</h2><p>Field Size: 8</p>')],
		['2012', 2, customTooltip2('<h2>2012</h2><p>2nd Choice</p><h3>Winner:</h3><p><b>Dayatthespa</p>'), 8, customTooltip2('<h2>2012</h2><p>Field Size: 8</p>')],
		['2013', 3, customTooltip2('<h2>2013</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>Kitten\'\s Dumplings</p>'), 9, customTooltip2('<h2>2013</h2><p>Field Size: 9</p>')],
		['2014', 1, customTooltip2('<h2>2014</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Crown Queen</p>'), 7, customTooltip2('<h2>2014</h2><p>Field Size: 7</p>')],
		['2015', 7, customTooltip2('<h2>2015</h2><p>7th Choice</p><h3>Winner:</h3><p><b>Her Emmynency</p>'), 9, customTooltip2('<h2>2015</h2><p>Field Size: 9</p>')],
		['2016', 2, customTooltip2('<h2>2016</h2><p>2nd Choice</p><h3>Winner:</h3><p><b>Time and Motion</p>'), 8, customTooltip2('<h2>2016</h2><p>Field Size: 8</p>')],
		['2017', 3, customTooltip2('<h2>2017</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>La Coronel</p>'), 10, customTooltip2('<h2>2017</h2><p>Field Size: 10</p>')],
		['2018', 1, customTooltip2('<h2>2018</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Rushing Fall</p>'), 7, customTooltip2('<h2>2018</h2><p>Field Size: 7</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Queen Elizabeth II Winners $1 Odds 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
		vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [2,4,6,8,10,12,14,16,18,20,22,24,26	]
				},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Queen Elizabeth II Winners Bettors\' Choice & Field Size 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11]
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
