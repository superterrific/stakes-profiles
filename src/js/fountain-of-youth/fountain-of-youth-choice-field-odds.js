google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 0.5, customTooltip('<h2>1991</h2> <p>$1 Odds: $0.50<br /> $2 Payout:  $3.00</p> <h3>Winner</h3><p><b>Fly So Free</b></p>')],
		['1992', 1.5, customTooltip('<h2>1992</h2> <p>$1 Odds: $1.50<br /> $2 Payout:  $5.00</p> <h3>Winner</h3><p><b>Dance Floor</b></p>')],
		['1993', 4.3, customTooltip('<h2>1993</h2> <p>$1 Odds: $4.30<br /> $2 Payout:  $10.60</p> <h3>Winner</h3><p><b>Duc d\'\Sligovil</b></p>')],
		['1993', 2.3, customTooltip('<h2>1993</h2> <p>$1 Odds: $2.30<br /> $2 Payout:  $6.60</p> <h3>Winner</h3><p><b>Storm Tower</b></p>')],
		['1994', 2.4, customTooltip('<h2>1994</h2> <p>$1 Odds: $2.40<br /> $2 Payout:  $8.60</p> <h3>Winner</h3><p><b>Dehere</b></p>')],
		['1995', 4.7, customTooltip('<h2>1995</h2> <p>$1 Odds: $4.70<br /> $2 Payout:  $11.40</p> <h3>Winner</h3><p><b>Thunder Gulch</b></p>')],
		['1997', 1, customTooltip('<h2>1997</h2> <p>$1 Odds: $1.00<br /> $2 Payout:  $4.00</p> <h3>Winner</h3><p><b>Pulpit</b></p>')],
		['1998', 0.9, customTooltip('<h2>1998</h2> <p>$1 Odds: $0.90<br /> $2 Payout:  $3.80</p> <h3>Winner</h3><p><b>Lil\'\s Lad</b></p>')],
		['1999', 4.6, customTooltip('<h2>1999</h2> <p>$1 Odds: $4.60<br /> $2 Payout:  $11.20</p> <h3>Winner</h3><p><b>Vicar</b></p>')],
		['2000', 2.4, customTooltip('<h2>2000</h2> <p>$1 Odds: $2.40<br /> $2 Payout:  $6.80</p> <h3>Winner</h3><p><b>High Yield</b></p>')],
		['2001', 18, customTooltip('<h2>2001</h2> <p>$1 Odds: $18.00<br /> $2 Payout:  $38.00</p> <h3>Winner</h3><p><b>Songandaprayer</b></p>')],
		['2002', 5.2, customTooltip('<h2>2002</h2> <p>$1 Odds: $5.20<br /> $2 Payout:  $12.40</p> <h3>Winner</h3><p><b>Booklet</b></p>')],
		['2003', 4.9, customTooltip('<h2>2003</h2> <p>$1 Odds: $4.90<br /> $2 Payout:  $11.80</p> <h3>Winner</h3><p><b>Trust N Luck</b></p>')],
		['2004', 2.1, customTooltip('<h2>2004</h2> <p>$1 Odds: $2.10<br /> $2 Payout:  $6.20</p> <h3>Winner</h3><p><b>Read the Footnotes</b></p>')],
		['2005', 1.1, customTooltip('<h2>2005</h2> <p>$1 Odds: $1.10<br /> $2 Payout:  $4.20</p> <h3>Winner</h3><p><b>High Fly</b></p>')],
		['2006', 0.7, customTooltip('<h2>2006</h2> <p>$1 Odds: $0.70<br /> $2 Payout:  $3.40</p> <h3>Winner</h3><p><b>First Samurai</b></p>')],
		['2007', 5.9, customTooltip('<h2>2007</h2> <p>$1 Odds: $5.90<br /> $2 Payout:  $13.80</p> <h3>Winner</h3><p><b>Scat Daddy</b></p>')],
		['2008', 7.3, customTooltip('<h2>2008</h2> <p>$1 Odds: $7.30<br /> $2 Payout:  $16.60</p> <h3>Winner</h3><p><b>Cool Coal Man</b></p>')],
		['2009', 5.5, customTooltip('<h2>2009</h2> <p>$1 Odds: $5.50<br /> $2 Payout:  $13.00</p> <h3>Winner</h3><p><b>Quality Road</b></p>')],
		['2010', 3.9, customTooltip('<h2>2010</h2> <p>$1 Odds: $3.90<br /> $2 Payout:  $9.80</p> <h3>Winner</h3><p><b>Eskendereya</b></p>')],
		['2011', 1.4, customTooltip('<h2>2011</h2> <p>$1 Odds: $1.40<br /> $2 Payout:  $4.80</p> <h3>Winner</h3><p><b>Soldat</b></p>')],
		['2012', 1.2, customTooltip('<h2>2012</h2> <p>$1 Odds: $1.20<br /> $2 Payout:  $4.40</p> <h3>Winner</h3><p><b>Union Rags</b></p>')],
		['2013', 5.4, customTooltip('<h2>2013</h2> <p>$1 Odds: $5.40<br /> $2 Payout:  $12.80</p> <h3>Winner</h3><p><b>Orb</b></p>')],
		['2014', 4.5, customTooltip('<h2>2014</h2> <p>$1 Odds: $4.50<br /> $2 Payout:  $11.00</p> <h3>Winner</h3><p><b>Wildcat Red</b></p>')],
		['2015', 5.4, customTooltip('<h2>2015</h2> <p>$1 Odds: $5.40<br /> $2 Payout:  $12.80</p> <h3>Winner</h3><p><b>Itsaknockout</b></p>')],
		['2016', 0.4, customTooltip('<h2>2016</h2> <p>$1 Odds: $0.40<br /> $2 Payout:  $2.80</p> <h3>Winner</h3><p><b>Mohaymen</b></p>')],
		['2017', 4.2, customTooltip('<h2>2017</h2> <p>$1 Odds: $4.20<br /> $2 Payout:  $10.40</p> <h3>Winner</h3><p><b>Gunnevera</b></p>')],
		['2018', 18.2, customTooltip('<h2>2018</h2> <p>$1 Odds: $18.20<br /> $2 Payout:  $38.40</p> <h3>Winner</h3><p><b>Promises Fullfilled</b></p>')],
		['2019', 9.5, customTooltip('<h2>2019</h2> <p>$1 Odds: $9.50<br /> $2 Payout:  $21.00</p> <h3>Winner</h3><p><b>Code of Honor</b></p>')],

  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
		dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 1, customTooltip2('<h2>1991</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Fly So Free</b></p>'), 10, customTooltip2('<h2>1991</h2> <p>Field Size: 10</p>')],
		['1992', 1, customTooltip2('<h2>1992</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Dance Floor</b></p>'), 11, customTooltip2('<h2>1992</h2> <p>Field Size: 11</p>')],
		['1993', 3, customTooltip2('<h2>1993</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Duc d\'\Sligovil</b></p>'), 9, customTooltip2('<h2>1993</h2> <p>Field Size: 9</p>')],
		['1993', 1, customTooltip2('<h2>1993</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Storm Tower</b></p>'), 9, customTooltip2('<h2>1993</h2> <p>Field Size: 9</p>')],
		['1994', 3, customTooltip2('<h2>1994</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Dehere</b></p>'), 6, customTooltip2('<h2>1994</h2> <p>Field Size: 6</p>')],
		['1995', 4, customTooltip2('<h2>1995</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Thunder Gulch</b></p>'), 12, customTooltip2('<h2>1995</h2> <p>Field Size: 12</p>')],
		['1996', 8, customTooltip2('<h2>1996</h2> <p>8th Choice</p> <h3>Winner</h3><p><b>Built for Pleasure</b></p>'), 9, customTooltip2('<h2>1996</h2> <p>Field Size: 9</p>')],
		['1997', 1, customTooltip2('<h2>1997</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Pulpit</b></p>'), 9, customTooltip2('<h2>1997</h2> <p>Field Size: 9</p>')],
		['1998', 1, customTooltip2('<h2>1998</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Lil\'\s Lad</b></p>'), 4, customTooltip2('<h2>1998</h2> <p>Field Size: 4</p>')],
		['1999', 2, customTooltip2('<h2>1999</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Vicar</b></p>'), 10, customTooltip2('<h2>1999</h2> <p>Field Size: 10</p>')],
		['2000', 1, customTooltip2('<h2>2000</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>High Yield</b></p>'), 11, customTooltip2('<h2>2000</h2> <p>Field Size: 11</p>')],
		['2001', 8, customTooltip2('<h2>2001</h2> <p>8th Choice</p> <h3>Winner</h3><p><b>Songandaprayer</b></p>'), 11, customTooltip2('<h2>2001</h2> <p>Field Size: 11</p>')],
		['2002', 3, customTooltip2('<h2>2002</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Booklet</b></p>'), 8, customTooltip2('<h2>2002</h2> <p>Field Size: 8</p>')],
		['2003', 4, customTooltip2('<h2>2003</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Trust N Luck</b></p>'), 8, customTooltip2('<h2>2003</h2> <p>Field Size: 8</p>')],
		['2004', 2, customTooltip2('<h2>2004</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Read the Footnotes</b></p>'), 8, customTooltip2('<h2>2004</h2> <p>Field Size: 8</p>')],
		['2005', 1, customTooltip2('<h2>2005</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>High Fly</b></p>'), 9, customTooltip2('<h2>2005</h2> <p>Field Size: 9</p>')],
		['2006', 1, customTooltip2('<h2>2006</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>First Samurai</b></p>'), 10, customTooltip2('<h2>2006</h2> <p>Field Size: 10</p>')],
		['2007', 2, customTooltip2('<h2>2007</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Scat Daddy</b></p>'), 9, customTooltip2('<h2>2007</h2> <p>Field Size: 9</p>')],
		['2008', 4, customTooltip2('<h2>2008</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Cool Coal Man</b></p>'), 12, customTooltip2('<h2>2008</h2> <p>Field Size: 12</p>')],
		['2009', 4, customTooltip2('<h2>2009</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Quality Road</b></p>'), 10, customTooltip2('<h2>2009</h2> <p>Field Size: 10</p>')],
		['2010', 3, customTooltip2('<h2>2010</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Eskendereya</b></p>'), 10, customTooltip2('<h2>2010</h2> <p>Field Size: 10</p>')],
		['2011', 1, customTooltip2('<h2>2011</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Soldat</b></p>'), 8, customTooltip2('<h2>2011</h2> <p>Field Size: 8</p>')],
		['2012', 2, customTooltip2('<h2>2012</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Union Rags</b></p>'), 7, customTooltip2('<h2>2012</h2> <p>Field Size: 7</p>')],
		['2013', 2, customTooltip2('<h2>2013</h2> <p>2nd Choice</p> <h3>Winner</h3><p><b>Orb</b></p>'), 9, customTooltip2('<h2>2013</h2> <p>Field Size: 9</p>')],
		['2014', 4, customTooltip2('<h2>2014</h2> <p>4th Choice</p> <h3>Winner</h3><p><b>Wildcat Red</b></p>'), 12, customTooltip2('<h2>2014</h2> <p>Field Size: 12</p>')],
		['2015', 3, customTooltip2('<h2>2015</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Itsaknockout</b></p>'), 8, customTooltip2('<h2>2015</h2> <p>Field Size: 8</p>')],
		['2016', 1, customTooltip2('<h2>2016</h2> <p>1st Choice</p> <h3>Winner</h3><p><b>Mohaymen</b></p>'), 6, customTooltip2('<h2>2016</h2> <p>Field Size: 6</p>')],
		['2017', 3, customTooltip2('<h2>2017</h2> <p>3rd Choice</p> <h3>Winner</h3><p><b>Gunnevera</b></p>'), 10, customTooltip2('<h2>2017</h2> <p>Field Size: 10</p>')],
		['2018', 5, customTooltip2('<h2>2018</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Promises Fullfilled</b></p>'), 9, customTooltip2('<h2>2018</h2> <p>Field Size: 9</p>')],
		['2019', 5, customTooltip2('<h2>2018</h2> <p>5th Choice</p> <h3>Winner</h3><p><b>Code of Honor</b></p>'), 11, customTooltip2('<h2>2019</h2> <p>Field Size: 11</p>')],


    ]);


// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Fountain of Youth Winners $1 Odds 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 20, color: '#dddddd'}},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Fountain of Youth Winners Bettors\' Choice & Field Size 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 13, color: '#dddddd'}},
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
