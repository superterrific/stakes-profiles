google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 0.9, customTooltip('<h2>1991</h2> <p>$1 Odds: $0.90<br /> $2 Payout:  $3.80</p> <h3>Winner</h3> <p><b>Lite Light</b></p>')],
		['1992', 11.8, customTooltip('<h2>1992</h2> <p>$1 Odds: $11.80<br /> $2 Payout:  $25.60</p> <h3>Winner</h3> <p><b>Luv Me Luv Me Not</b></p>')],
		['1993', 5.1, customTooltip('<h2>1993</h2> <p>$1 Odds: $5.10<br /> $2 Payout:  $12.20</p> <h3>Winner</h3> <p><b>Dispute</b></p>')],
		['1994', 1.5, customTooltip('<h2>1994</h2> <p>$1 Odds: $1.50<br /> $2 Payout:  $5.00</p> <h3>Winner</h3> <p><b>Sardula</b></p>')],
		['1996', 9.8, customTooltip('<h2>1996</h2> <p>$1 Odds: $9.80<br /> $2 Payout:  $21.60</p> <h3>Winner</h3> <p><b>Pike Place Dancer</b></p>')],
		['1997', 2.7, customTooltip('<h2>1997</h2> <p>$1 Odds: $2.70<br /> $2 Payout:  $7.40</p> <h3>Winner</h3> <p><b>Blushing K. D.</b></p>')],
		['1998', 3.3, customTooltip('<h2>1998</h2> <p>$1 Odds: $3.30<br /> $2 Payout:  $8.60</p> <h3>Winner</h3> <p><b>Keeper Hill</b></p>')],
		['1999', 0.1, customTooltip('<h2>1999</h2> <p>$1 Odds: $0.10<br /> $2 Payout:  $2.20</p> <h3>Winner</h3> <p><b>Silverbulletday</b></p>')],
		['2000', 4.9, customTooltip('<h2>2000</h2> <p>$1 Odds: $4.90<br /> $2 Payout:  $11.80</p> <h3>Winner</h3> <p><b>Secret Status</b></p>')],
		['2001', 3.3, customTooltip('<h2>2001</h2> <p>$1 Odds: $3.30<br /> $2 Payout:  $8.60</p> <h3>Winner</h3> <p><b>Flute</b></p>')],
		['2002', 20, customTooltip('<h2>2002</h2> <p>$1 Odds: $20.00<br /> $2 Payout:  $42.00</p> <h3>Winner</h3> <p><b>Farda Amiga</b></p>')],
		['2003', 18.2, customTooltip('<h2>2003</h2> <p>$1 Odds: $18.20<br /> $2 Payout:  $38.40</p> <h3>Winner</h3> <p><b>Bird Town</b></p>')],
		['2004', 2.3, customTooltip('<h2>2004</h2> <p>$1 Odds: $2.30<br /> $2 Payout:  $6.60</p> <h3>Winner</h3> <p><b>Ashado</b></p>')],
		['2005', 4.6, customTooltip('<h2>2005</h2> <p>$1 Odds: $4.60<br /> $2 Payout:  $11.20</p> <h3>Winner</h3> <p><b>Summerly</b></p>')],
		['2007', 1.5, customTooltip('<h2>2007</h2> <p>$1 Odds: $1.50<br /> $2 Payout:  $5.00</p> <h3>Winner</h3> <p><b>Rags to Riches</b></p>')],
		['2008', 3.4, customTooltip('<h2>2008</h2> <p>$1 Odds: $3.40<br /> $2 Payout:  $8.80</p> <h3>Winner</h3> <p><b>Proud Spell</b></p>')],
		['2009', 0.3, customTooltip('<h2>2009</h2> <p>$1 Odds: $0.30<br /> $2 Payout:  $2.60</p> <h3>Winner</h3> <p><b>Rachel Alexandra</b></p>')],
		['2010', 1.3, customTooltip('<h2>2010</h2> <p>$1 Odds: $1.30<br /> $2 Payout:  $4.60</p> <h3>Winner</h3> <p><b>Blind Luck</b></p>')],
		['2011', 6.3, customTooltip('<h2>2011</h2> <p>$1 Odds: $6.30<br /> $2 Payout:  $14.60</p> <h3>Winner</h3> <p><b>Plum Pretty</b></p>')],
		['2012', 13.8, customTooltip('<h2>2012</h2> <p>$1 Odds: $13.80<br /> $2 Payout:  $29.60</p> <h3>Winner</h3> <p><b>Believe You Can</b></p>')],
		['2014', 1, customTooltip('<h2>2014</h2> <p>$1 Odds: $1.00<br /> $2 Payout:  $4.00</p> <h3>Winner</h3> <p><b>Untapable</b></p>')],
		['2015', 6.3, customTooltip('<h2>2015</h2> <p>$1 Odds: $6.30<br /> $2 Payout:  $14.60</p> <h3>Winner</h3> <p><b>Lovely Maria</b></p>')],
		['2016', 4.7, customTooltip('<h2>2016</h2> <p>$1 Odds: $4.70<br /> $2 Payout:  $11.40</p> <h3>Winner</h3> <p><b>Cathryn Sophia</b></p>')],
		['2017', 9.2, customTooltip('<h2>2017</h2> <p>$1 Odds: $9.20<br /> $2 Payout:  $20.40</p> <h3>Winner</h3> <p><b>Abel Tasman</b></p>')],
		['2018', 2.6, customTooltip('<h2>2018</h2> <p>$1 Odds: $2.60<br /> $2 Payout:  $7.20</p> <h3>Winner</h3> <p><b>Monomoy Girl</b></p>')],
		['2019', 13, customTooltip('<h2>2019</h2> <p>$1 Odds: $13.00<br /> $2 Payout:  $28.00</p> <h3>Winner</h3> <p><b>Serengeti Empress</b></p>')],



  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 1, customTooltip2('<h2>1991</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Lite Light</b></p>'), 10, customTooltip2('<h2>1991</h2> <p>Field Size: 10</p>')],
		['1992', 4, customTooltip2('<h2>1992</h2> <p>4th Choice</p> <h3>Winner</h3> <p><b>Luv Me Luv Me Not</b></p>'), 6, customTooltip2('<h2>1992</h2> <p>Field Size: 6</p>')],
		['1993', 2, customTooltip2('<h2>1993</h2> <p>2nd Choice</p> <h3>Winner</h3> <p><b>Dispute</b></p>'), 11, customTooltip2('<h2>1993</h2> <p>Field Size: 11</p>')],
		['1994', 2, customTooltip2('<h2>1994</h2> <p>2nd Choice</p> <h3>Winner</h3> <p><b>Sardula</b></p>'), 7, customTooltip2('<h2>1994</h2> <p>Field Size: 7</p>')],
		['1995', 7, customTooltip2('<h2>1995</h2> <p>7th Choice</p> <h3>Winner</h3> <p><b>Gal in a Ruckus</b></p>'), 8, customTooltip2('<h2>1995</h2> <p>Field Size: 8</p>')],
		['1996', 4, customTooltip2('<h2>1996</h2> <p>4th Choice</p> <h3>Winner</h3> <p><b>Pike Place Dancer</b></p>'), 6, customTooltip2('<h2>1996</h2> <p>Field Size: 6</p>')],
		['1997', 2, customTooltip2('<h2>1997</h2> <p>2nd Choice</p> <h3>Winner</h3> <p><b>Blushing K. D.</b></p>'), 9, customTooltip2('<h2>1997</h2> <p>Field Size: 9</p>')],
		['1998', 1, customTooltip2('<h2>1998</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Keeper Hill</b></p>'), 13, customTooltip2('<h2>1998</h2> <p>Field Size: 13</p>')],
		['1999', 1, customTooltip2('<h2>1999</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Silverbulletday</b></p>'), 7, customTooltip2('<h2>1999</h2> <p>Field Size: 7</p>')],
		['2000', 2, customTooltip2('<h2>2000</h2> <p>2nd Choice</p> <h3>Winner</h3> <p><b>Secret Status</b></p>'), 14, customTooltip2('<h2>2000</h2> <p>Field Size: 14</p>')],
		['2001', 2, customTooltip2('<h2>2001</h2> <p>2nd Choice</p> <h3>Winner</h3> <p><b>Flute</b></p>'), 13, customTooltip2('<h2>2001</h2> <p>Field Size: 13</p>')],
		['2002', 6, customTooltip2('<h2>2002</h2> <p>6th Choice</p> <h3>Winner</h3> <p><b>Farda Amiga</b></p>'), 9, customTooltip2('<h2>2002</h2> <p>Field Size: 9</p>')],
		['2003', 6, customTooltip2('<h2>2003</h2> <p>6th Choice</p> <h3>Winner</h3> <p><b>Bird Town</b></p>'), 12, customTooltip2('<h2>2003</h2> <p>Field Size: 12</p>')],
		['2004', 1, customTooltip2('<h2>2004</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Ashado</b></p>'), 11, customTooltip2('<h2>2004</h2> <p>Field Size: 11</p>')],
		['2005', 2, customTooltip2('<h2>2005</h2> <p>2nd Choice</p> <h3>Winner</h3> <p><b>Summerly</b></p>'), 7, customTooltip2('<h2>2005</h2> <p>Field Size: 7</p>')],
		['2006', 14, customTooltip2('<h2>2006</h2> <p>14th Choice</p> <h3>Winner</h3> <p><b>Lemons Forever</b></p>'), 14, customTooltip2('<h2>2006</h2> <p>Field Size: 14</p>')],
		['2007', 1, customTooltip2('<h2>2007</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Rags to Riches</b></p>'), 14, customTooltip2('<h2>2007</h2> <p>Field Size: 14</p>')],
		['2008', 1, customTooltip2('<h2>2008</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Proud Spell</b></p>'), 10, customTooltip2('<h2>2008</h2> <p>Field Size: 10</p>')],
		['2009', 1, customTooltip2('<h2>2009</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Rachel Alexandra</b></p>'), 7, customTooltip2('<h2>2009</h2> <p>Field Size: 7</p>')],
		['2010', 1, customTooltip2('<h2>2010</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Blind Luck</b></p>'), 14, customTooltip2('<h2>2010</h2> <p>Field Size: 14</p>')],
		['2011', 4, customTooltip2('<h2>2011</h2> <p>4th Choice</p> <h3>Winner</h3> <p><b>Plum Pretty</b></p>'), 13, customTooltip2('<h2>2011</h2> <p>Field Size: 13</p>')],
		['2012', 6, customTooltip2('<h2>2012</h2> <p>6th Choice</p> <h3>Winner</h3> <p><b>Believe You Can</b></p>'), 14, customTooltip2('<h2>2012</h2> <p>Field Size: 14</p>')],
		['2013', 9, customTooltip2('<h2>2013</h2> <p>9th Choice</p> <h3>Winner</h3> <p><b>Princess of Sylmar</b></p>'), 10, customTooltip2('<h2>2013</h2> <p>Field Size: 10</p>')],
		['2014', 1, customTooltip2('<h2>2014</h2> <p>1st Choice</p> <h3>Winner</h3> <p><b>Untapable</b></p>'), 12, customTooltip2('<h2>2014</h2> <p>Field Size: 12</p>')],
		['2015', 5, customTooltip2('<h2>2015</h2> <p>5th Choice</p> <h3>Winner</h3> <p><b>Lovely Maria</b></p>'), 14, customTooltip2('<h2>2015</h2> <p>Field Size: 14</p>')],
		['2016', 2, customTooltip2('<h2>2016</h2> <p>2nd Choice</p> <h3>Winner</h3> <p><b>Cathryn Sophia</b></p>'), 14, customTooltip2('<h2>2016</h2> <p>Field Size: 14</p>')],
		['2017', 4, customTooltip2('<h2>2017</h2> <p>4th Choice</p> <h3>Winner</h3> <p><b>Abel Tasman</b></p>'), 14, customTooltip2('<h2>2017</h2> <p>Field Size: 14</p>')],
		['2018', 2, customTooltip2('<h2>2018</h2> <p>2nd Choice</p> <h3>Winner</h3> <p><b>Monomoy Girl</b></p>'), 14, customTooltip2('<h2>2018</h2> <p>Field Size: 14</p>')],
		['2019', 6, customTooltip2('<h2>2019</h2> <p>6th Choice</p> <h3>Winner</h3> <p><b>Serengeti Empress</b></p>'), 14, customTooltip2('<h2>2019</h2> <p>Field Size: 14</p>')],

    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Kentucky Oaks Winners $1 Odds 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 12, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Kentucky Oaks Winners Bettors\' Choice & Field Size 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 15, color: '#dddddd'}},
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
