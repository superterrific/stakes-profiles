google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 1.5, customTooltip('<h2>1991</h2> <p>$1 Odds: $1.50</p> <p>$2 Payout:  $5.00</p> <h3>Winner</h3><p><b>Flawlessly</p>')],
		['1992', 2, customTooltip('<h2>1992</h2> <p>$1 Odds: $2.00</p> <p>$2 Payout:  $6.00</p> <h3>Winner</h3><p><b>Golden Treat</p>')],
		['1993', 2.1, customTooltip('<h2>1993</h2> <p>$1 Odds: $2.10</p> <p>$2 Payout:  $6.20</p> <h3>Winner</h3><p><b>Hollywood Wildcat</p>')],
		['1994', 2.5, customTooltip('<h2>1994</h2> <p>$1 Odds: $2.50</p> <p>$2 Payout:  $7.00</p> <h3>Winner</h3><p><b>Work the Crowd</p>')],
		['1995', 10.4, customTooltip('<h2>1995</h2> <p>$1 Odds: $10.40</p> <p>$2 Payout:  $22.80</p> <h3>Winner</h3><p><b>Jewel Princess</p>')],
		['1996', 2.9, customTooltip('<h2>1996</h2> <p>$1 Odds: $2.90</p> <p>$2 Payout:  $7.80</p> <h3>Winner</h3><p><b>True Flare</p>')],
		['1997', 1.7, customTooltip('<h2>1997</h2> <p>$1 Odds: $1.70</p> <p>$2 Payout:  $5.40</p> <h3>Winner</h3><p><b>Famous Digger</p>')],
		['1999', 2.5, customTooltip('<h2>1999</h2> <p>$1 Odds: $2.50</p> <p>$2 Payout:  $7.00</p> <h3>Winner</h3><p><b>Sweet Ludy (IRE)</p>')],
		['2000', 6.5, customTooltip('<h2>2000</h2> <p>$1 Odds: $6.50</p> <p>$2 Payout:  $15.00</p> <h3>Winner</h3><p><b>Uncharted Haven (GB)</p>')],
		['2001', 5.6, customTooltip('<h2>2001</h2> <p>$1 Odds: $5.60</p> <p>$2 Payout:  $13.20</p> <h3>Winner</h3><p><b>Reine de Romance (IRE)</p>')],
		['2002', 2.6, customTooltip('<h2>2002</h2> <p>$1 Odds: $2.60</p> <p>$2 Payout:  $7.20</p> <h3>Winner</h3><p><b>Little Treasure (FR)</p>')],
		['2003', 5.1, customTooltip('<h2>2003</h2> <p>$1 Odds: $5.10</p> <p>$2 Payout:  $12.20</p> <h3>Winner</h3><p><b>Katdogawn (GB)</p>')],
		['2004', 8.3, customTooltip('<h2>2004</h2> <p>$1 Odds: $8.30</p> <p>$2 Payout:  $18.60</p> <h3>Winner</h3><p><b>Sweet Win</p>')],
		['2005', 8.5, customTooltip('<h2>2005</h2> <p>$1 Odds: $8.50</p> <p>$2 Payout:  $19.00</p> <h3>Winner</h3><p><b>Shining Energy</p>')],
		['2006', 1.1, customTooltip('<h2>2006</h2> <p>$1 Odds: $1.10</p> <p>$2 Payout:  $4.20</p> <h3>Winner</h3><p><b>Attima (GB)</p>')],
		['2007', 6.5, customTooltip('<h2>2007</h2> <p>$1 Odds: $6.50</p> <p>$2 Payout:  $15.00</p> <h3>Winner</h3><p><b>Passified (GB)</p>')],
		['2008', 7.8, customTooltip('<h2>2008</h2> <p>$1 Odds: $7.80</p> <p>$2 Payout:  $17.60</p> <h3>Winner</h3><p><b>Storm Mesa</p>')],
		['2009', 11.3, customTooltip('<h2>2009</h2> <p>$1 Odds: $11.30</p> <p>$2 Payout:  $24.60</p> <h3>Winner</h3><p><b>Starlarks (IRE)</p>')],
		['2010', 1.7, customTooltip('<h2>2010</h2> <p>$1 Odds: $1.70</p> <p>$2 Payout:  $5.40</p> <h3>Winner</h3><p><b>Evening Jewel</p>')],
		['2011', 11.7, customTooltip('<h2>2011</h2> <p>$1 Odds: $11.70</p> <p>$2 Payout:  $25.40</p> <h3>Winner</h3><p><b>Up In Time (GB)</p>')],
		['2012', 0.9, customTooltip('<h2>2012</h2> <p>$1 Odds: $0.90</p> <p>$2 Payout:  $3.80</p> <h3>Winner</h3><p><b>Eden\'\s Moon</p>')],
		['2013', 5, customTooltip('<h2>2013</h2> <p>$1 Odds: $5.00</p> <p>$2 Payout:  $12.00</p> <h3>Winner</h3><p><b>Wishing Gate</p>')],
		['2014', 10.4, customTooltip('<h2>2014</h2> <p>$1 Odds: $10.40</p> <p>$2 Payout:  $22.80</p> <h3>Winner</h3><p><b>Istanford</p>')],
		['2015', 3.6, customTooltip('<h2>2015</h2> <p>$1 Odds: $3.60</p> <p>$2 Payout:  $9.20</p> <h3>Winner</h3><p><b>Prize Exhibit (GB)</p>')],
		['2016', 7.2, customTooltip('<h2>2016</h2> <p>$1 Odds: $7.20</p> <p>$2 Payout:  $16.40</p> <h3>Winner</h3><p><b>Mokat</p>')],
		['2017', 21.2, customTooltip('<h2>2017</h2> <p>$1 Odds: $21.20</p> <p>$2 Payout:  $44.40</p> <h3>Winner</h3><p><b>Madam Dancealot (IRE)</p>')],
		['2018', 5.9, customTooltip('<h2>2018</h2> <p>$1 Odds: $5.90</p> <p>$2 Payout:  $13.80</p> <h3>Winner</h3><p><b>War Heroine</p>')],


  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 1, customTooltip2('<h2>1991</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Flawlessly</p>'), 9, customTooltip2('<h2>1991</h2> <p>Field Size: 9</p>')],
		['1992', 1, customTooltip2('<h2>1992</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Golden Treat</p>'), 8, customTooltip2('<h2>1992</h2> <p>Field Size: 8</p>')],
		['1993', 1, customTooltip2('<h2>1993</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Hollywood Wildcat</p>'), 10, customTooltip2('<h2>1993</h2> <p>Field Size: 10</p>')],
		['1994', 2, customTooltip2('<h2>1994</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Work the Crowd</p>'), 8, customTooltip2('<h2>1994</h2> <p>Field Size: 8</p>')],
		['1995', 5, customTooltip2('<h2>1995</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Jewel Princess</p>'), 6, customTooltip2('<h2>1995</h2> <p>Field Size: 6</p>')],
		['1996', 2, customTooltip2('<h2>1996</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>True Flare</p>'), 10, customTooltip2('<h2>1996</h2> <p>Field Size: 10</p>')],
		['1997', 1, customTooltip2('<h2>1997</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Famous Digger</p>'), 10, customTooltip2('<h2>1997</h2> <p>Field Size: 10</p>')],
		['1998', 10, customTooltip2('<h2>1998</h2> <p>10th Choice</p> <h3>Winner</h3><p><b>Sicy d\'\Alsace (FR)</p>'), 10, customTooltip2('<h2>1998</h2> <p>Field Size: 10</p>')],
		['1999', 1, customTooltip2('<h2>1999</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Sweet Ludy (IRE)</p>'), 10, customTooltip2('<h2>1999</h2> <p>Field Size: 10</p>')],
		['2000', 4, customTooltip2('<h2>2000</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Uncharted Haven (GB)</p>'), 10, customTooltip2('<h2>2000</h2> <p>Field Size: 10</p>')],
		['2001', 4, customTooltip2('<h2>2001</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Reine de Romance (IRE)</p>'), 8, customTooltip2('<h2>2001</h2> <p>Field Size: 8</p>')],
		['2002', 1, customTooltip2('<h2>2002</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Little Treasure (FR)</p>'), 9, customTooltip2('<h2>2002</h2> <p>Field Size: 9</p>')],
		['2003', 3, customTooltip2('<h2>2003</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Katdogawn (GB)</p>'), 9, customTooltip2('<h2>2003</h2> <p>Field Size: 9</p>')],
		['2004', 4, customTooltip2('<h2>2004</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Sweet Win</p>'), 5, customTooltip2('<h2>2004</h2> <p>Field Size: 5</p>')],
		['2005', 5, customTooltip2('<h2>2005</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Shining Energy</p>'), 10, customTooltip2('<h2>2005</h2> <p>Field Size: 10</p>')],
		['2006', 1, customTooltip2('<h2>2006</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Attima (GB)</p>'), 8, customTooltip2('<h2>2006</h2> <p>Field Size: 8</p>')],
		['2007', 3, customTooltip2('<h2>2007</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Passified (GB)</p>'), 10, customTooltip2('<h2>2007</h2> <p>Field Size: 10</p>')],
		['2008', 5, customTooltip2('<h2>2008</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Storm Mesa</p>'), 10, customTooltip2('<h2>2008</h2> <p>Field Size: 10</p>')],
		['2009', 5, customTooltip2('<h2>2009</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Starlarks (IRE)</p>'), 10, customTooltip2('<h2>2009</h2> <p>Field Size: 10</p>')],
		['2010', 1, customTooltip2('<h2>2010</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Evening Jewel</p>'), 10, customTooltip2('<h2>2010</h2> <p>Field Size: 10</p>')],
		['2011', 5, customTooltip2('<h2>2011</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Up In Time (GB)</p>'), 10, customTooltip2('<h2>2011</h2> <p>Field Size: 10</p>')],
		['2012', 1, customTooltip2('<h2>2012</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Eden\'\s Moon</p>'), 7, customTooltip2('<h2>2012</h2> <p>Field Size: 7</p>')],
		['2013', 3, customTooltip2('<h2>2013</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Wishing Gate</p>'), 9, customTooltip2('<h2>2013</h2> <p>Field Size: 9</p>')],
		['2014', 5, customTooltip2('<h2>2014</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Istanford</p>'), 12, customTooltip2('<h2>2014</h2> <p>Field Size: 12</p>')],
		['2015', 3, customTooltip2('<h2>2015</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Prize Exhibit (GB)</p>'), 6, customTooltip2('<h2>2015</h2> <p>Field Size: 6</p>')],
		['2016', 5, customTooltip2('<h2>2016</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Mokat</p>'), 10, customTooltip2('<h2>2016</h2> <p>Field Size: 10</p>')],
		['2017', 7, customTooltip2('<h2>2017</h2> <p>7th Choice</p> <h3>Winner</h3><p><b>Madam Dancealot (IRE)</p>'), 8, customTooltip2('<h2>2017</h2> <p>Field Size: 8</p>')],
		['2018', 3, customTooltip2('<h2>2018</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>War Herione</p>'), 13, customTooltip2('<h2>2018</h2> <p>Field Size: 13</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'San Clemente Winners $1 Odds 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 12, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'San Clemente Winners Bettors\' Choice & Field Size 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 14, color: '#dddddd'}},
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
