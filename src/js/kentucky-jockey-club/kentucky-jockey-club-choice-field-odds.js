google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// odds
	function drawChart() {
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('string', 'Year');
	dataTable.addColumn('number', '$1 Odds');
	dataTable.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable.addRows([
		['1991', 1.1, customTooltip('<h2>1991</h2><p>$1 Odds: $1.10</p> <p>$2 Payout: $4.20</p><h3>Winner</h3><p><b>Dance Floor</b></p>')],
		['1992', 8.5, customTooltip('<h2>1992</h2><p>$1 Odds: $8.50</p> <p>$2 Payout: $19.00</p><h3>Winner</h3><p><b>Wild Gale</b></p>')],
		['1993', 8.1, customTooltip('<h2>1993</h2><p>$1 Odds: $8.10</p> <p>$2 Payout: $18.20</p><h3>Winner</h3><p><b>War Deputy</b></p>')],
		['1994', 3.9, customTooltip('<h2>1994</h2><p>$1 Odds: $3.90</p> <p>$2 Payout: $9.80</p><h3>Winner</h3><p><b>Jambalaya Jazz</b></p>')],
		['1995', 1, customTooltip('<h2>1995</h2><p>$1 Odds: $1.00</p> <p>$2 Payout: $4.00</p><h3>Winner</h3><p><b>Ide</b></p>')],
		['1996', 6, customTooltip('<h2>1996</h2><p>$1 Odds: $6.00</p> <p>$2 Payout: $14.00</p><h3>Winner</h3><p><b>Concerto</b></p>')],
		['1997', 5.7, customTooltip('<h2>1997</h2><p>$1 Odds: $5.70</p> <p>$2 Payout: $13.40</p><h3>Winner</h3><p><b>Cape Town</b></p>')],
		['1998', 0.4, customTooltip('<h2>1998</h2><p>$1 Odds: $0.40</p> <p>$2 Payout: $2.80</p><h3>Winner</h3><p><b>Exploit</b></p>')],
		['1999', 4.7, customTooltip('<h2>1999</h2><p>$1 Odds: $4.70</p> <p>$2 Payout: $11.40</p><h3>Winner</h3><p><b>Captain Steve</b></p>')],
		['2000', 2.3, customTooltip('<h2>2000</h2><p>$1 Odds: $2.30</p> <p>$2 Payout: $6.60</p><h3>Winner</h3><p><b>Dollar Bill</b></p>')],
		['2001', 0.8, customTooltip('<h2>2001</h2><p>$1 Odds: $0.80</p> <p>$2 Payout: $3.60</p><h3>Winner</h3><p><b>Repent</b></p>')],
		['2002', 6.3, customTooltip('<h2>2002</h2><p>$1 Odds: $6.30</p> <p>$2 Payout: $14.60</p><h3>Winner</h3><p><b>Soto</b></p>')],
		['2003', 0.9, customTooltip('<h2>2003</h2><p>$1 Odds: $0.90</p> <p>$2 Payout: $3.80</p><h3>Winner</h3><p><b>The Cliff\'\s Edge</b></p>')],
		['2004', 4.4, customTooltip('<h2>2004</h2><p>$1 Odds: $4.40</p> <p>$2 Payout: $10.80</p><h3>Winner</h3><p><b>Greater Good</b></p>')],
		['2005', 0.7, customTooltip('<h2>2005</h2><p>$1 Odds: $0.70</p> <p>$2 Payout: $3.40</p><h3>Winner</h3><p><b>Private Vow</b></p>')],
		['2006', 0.5, customTooltip('<h2>2006</h2><p>$1 Odds: $0.50</p> <p>$2 Payout: $3.00</p><h3>Winner</h3><p><b>Tiz Wonderful</b></p>')],
		['2007', 8.2, customTooltip('<h2>2007</h2><p>$1 Odds: $8.20</p> <p>$2 Payout: $18.40</p><h3>Winner</h3><p><b>Anak Nakal</b></p>')],
		['2008', 6, customTooltip('<h2>2008</h2><p>$1 Odds: $6.00</p> <p>$2 Payout: $14.00</p><h3>Winner</h3><p><b>Beethoven</b></p>')],
		['2009', 2.4, customTooltip('<h2>2009</h2><p>$1 Odds: $2.40</p> <p>$2 Payout: $6.80</p><h3>Winner</h3><p><b>Super Saver</b></p>')],
		['2010', 4.8, customTooltip('<h2>2010</h2><p>$1 Odds: $4.80</p> <p>$2 Payout: $11.60</p><h3>Winner</h3><p><b>Santiva</b></p>')],
		['2011', 3.3, customTooltip('<h2>2011</h2><p>$1 Odds: $3.30</p> <p>$2 Payout: $8.60</p><h3>Winner</h3><p><b>Gemologist</b></p>')],
		['2012', 1.8, customTooltip('<h2>2012</h2><p>$1 Odds: $1.80</p> <p>$2 Payout: $5.60</p><h3>Winner</h3><p><b>Uncaptured</b></p>')],
		['2013', 3.3, customTooltip('<h2>2013</h2><p>$1 Odds: $3.30</p> <p>$2 Payout: $8.60</p><h3>Winner</h3><p><b>Tapiture</b></p>')],
		['2014', 7.3, customTooltip('<h2>2014</h2><p>$1 Odds: $7.30</p> <p>$2 Payout: $16.60</p><h3>Winner</h3><p><b>El Kabeir</b></p>')],
		['2015', 3.5, customTooltip('<h2>2015</h2><p>$1 Odds: $3.50</p> <p>$2 Payout: $9.00</p><h3>Winner</h3><p><b>Airoforce</b></p>')],
		['2016', 0.8, customTooltip('<h2>2016</h2><p>$1 Odds: $0.80</p> <p>$2 Payout: $3.60</p><h3>Winner</h3><p><b>McCraken</b></p>')],
		['2017', 3.4, customTooltip('<h2>2017</h2><p>$1 Odds: $3.40</p> <p>$2 Payout: $8.80</p><h3>Winner</h3><p><b>Enticed</b></p>')],
		['2018', 3.6, customTooltip('<h2>2018</h2><p>$1 Odds: $3.60</p> <p>$2 Payout: $9.20</p><h3>Winner</h3><p><b>Signalman</b></p>')],


  ]);


var dataTable2 = new google.visualization.DataTable();

	dataTable2.addColumn('string', 'Year');
	dataTable2.addColumn('number', 'Bettors\'\ Choice');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});
	dataTable2.addColumn('number', 'Field Size');
	dataTable2.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable2.addRows([
		['1991', 1, customTooltip2('<h2>1991</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Dance Floor</b></p>'), 10, customTooltip2('<h2>1991</h2><p>Field Size: 10</p>')],
		['1992', 4, customTooltip2('<h2>1992</h2><p>4th Choice</p><h3>Winner:</h3><p><b>Wild Gale</b></p>'), 11, customTooltip2('<h2>1992</h2><p>Field Size: 11</p>')],
		['1993', 5, customTooltip2('<h2>1993</h2><p>5th Choice</p><h3>Winner:</h3><p><b>War Deputy</b></p>'), 11, customTooltip2('<h2>1993</h2><p>Field Size: 11</p>')],
		['1994', 3, customTooltip2('<h2>1994</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>Jambalaya Jazz</b></p>'), 7, customTooltip2('<h2>1994</h2><p>Field Size: 7</p>')],
		['1995', 1, customTooltip2('<h2>1995</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Ide</b></p>'), 5, customTooltip2('<h2>1995</h2><p>Field Size: 5</p>')],
		['1996', 4, customTooltip2('<h2>1996</h2><p>4th Choice</p><h3>Winner:</h3><p><b>Concerto</b></p>'), 11, customTooltip2('<h2>1996</h2><p>Field Size: 11</p>')],
		['1997', 5, customTooltip2('<h2>1997</h2><p>5th Choice</p><h3>Winner:</h3><p><b>Cape Town</b></p>'), 11, customTooltip2('<h2>1997</h2><p>Field Size: 11</p>')],
		['1998', 1, customTooltip2('<h2>1998</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Exploit</b></p>'), 11, customTooltip2('<h2>1998</h2><p>Field Size: 11</p>')],
		['1999', 3, customTooltip2('<h2>1999</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>Captain Steve</b></p>'), 12, customTooltip2('<h2>1999</h2><p>Field Size: 12</p>')],
		['2000', 2, customTooltip2('<h2>2000</h2><p>2nd Choice</p><h3>Winner:</h3><p><b>Dollar Bill</b></p>'), 6, customTooltip2('<h2>2000</h2><p>Field Size: 6</p>')],
		['2001', 1, customTooltip2('<h2>2001</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Repent</b></p>'), 6, customTooltip2('<h2>2001</h2><p>Field Size: 6</p>')],
		['2002', 5, customTooltip2('<h2>2002</h2><p>5th Choice</p><h3>Winner:</h3><p><b>Soto</b></p>'), 12, customTooltip2('<h2>2002</h2><p>Field Size: 12</p>')],
		['2003', 1, customTooltip2('<h2>2003</h2><p>1st Choice</p><h3>Winner:</h3><p><b>The Cliff\'\s Edge</b></p>'), 8, customTooltip2('<h2>2003</h2><p>Field Size: 8</p>')],
		['2004', 2, customTooltip2('<h2>2004</h2><p>2nd Choice</p><h3>Winner:</h3><p><b>Greater Good</b></p>'), 9, customTooltip2('<h2>2004</h2><p>Field Size: 9</p>')],
		['2005', 1, customTooltip2('<h2>2005</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Private Vow</b></p>'), 7, customTooltip2('<h2>2005</h2><p>Field Size: 7</p>')],
		['2006', 1, customTooltip2('<h2>2006</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Tiz Wonderful</b></p>'), 9, customTooltip2('<h2>2006</h2><p>Field Size: 9</p>')],
		['2007', 4, customTooltip2('<h2>2007</h2><p>4th Choice</p><h3>Winner:</h3><p><b>Anak Nakal</b></p>'), 7, customTooltip2('<h2>2007</h2><p>Field Size: 7</p>')],
		['2008', 3, customTooltip2('<h2>2008</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>Beethoven</b></p>'), 9, customTooltip2('<h2>2008</h2><p>Field Size: 9</p>')],
		['2009', 2, customTooltip2('<h2>2009</h2><p>2nd Choice</p><h3>Winner:</h3><p><b>Super Saver</b></p>'), 9, customTooltip2('<h2>2009</h2><p>Field Size: 9</p>')],
		['2010', 3, customTooltip2('<h2>2010</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>Santiva</b></p>'), 7, customTooltip2('<h2>2010</h2><p>Field Size: 7</p>')],
		['2011', 2, customTooltip2('<h2>2011</h2><p>2nd Choice</p><h3>Winner:</h3><p><b>Gemologist</b></p>'), 11, customTooltip2('<h2>2011</h2><p>Field Size: 11</p>')],
		['2012', 1, customTooltip2('<h2>2012</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Uncaptured</b></p>'), 13, customTooltip2('<h2>2012</h2><p>Field Size: 13</p>')],
		['2013', 2, customTooltip2('<h2>2013</h2><p>2nd Choice</p><h3>Winner:</h3><p><b>Tapiture</b></p>'), 9, customTooltip2('<h2>2013</h2><p>Field Size: 9</p>')],
		['2014', 3, customTooltip2('<h2>2014</h2><p>3rd Choice</p><h3>Winner:</h3><p><b>El Kabeir</b></p>'), 11, customTooltip2('<h2>2014</h2><p>Field Size: 11</p>')],
		['2015', 2, customTooltip2('<h2>2015</h2><p>2nd Choice</p><h3>Winner:</h3><p><b>Airoforce</b></p>'), 13, customTooltip2('<h2>2015</h2><p>Field Size: 13</p>')],
		['2016', 1, customTooltip2('<h2>2016</h2><p>1st Choice</p><h3>Winner:</h3><p><b>McCraken</b></p>'), 12, customTooltip2('<h2>2016</h2><p>Field Size: 12</p>')],
		['2017', 1, customTooltip2('<h2>2017</h2><p>1st Choice</p><h3>Winner:</h3><p><b>Enticed</b></p>'), 14, customTooltip2('<h2>2017</h2><p>Field Size: 14</p>')],
		['2018', 2, customTooltip2('<h2>2018</h2><p>2nd Choice</p><h3>Winner:</h3><p><b>Signalman</b></p>'), 14, customTooltip2('<h2>2018</h2><p>Field Size: 14</p>')],

    ]);

var dataTable3 = new google.visualization.DataTable();

dataTable3.addColumn('string', 'Year');
	dataTable3.addColumn('number', 'Starts');
	dataTable3.addColumn({type: 'string', role: 'tooltip',  'p': {'html': true}});

	dataTable3.addRows([
		['1991', 6, customTooltip('<h2>1991</h2><p>Prior Career Starts: 6</p><h3>Winner:</h3><p><b>Dance Floor</b></p>')],
		['1992', 7, customTooltip('<h2>1992</h2><p>Prior Career Starts: 7</p><h3>Winner:</h3><p><b>Wild Gale</b></p>')],
		['1993', 1, customTooltip('<h2>1993</h2><p>Prior Career Starts: 1</p><h3>Winner:</h3><p><b>War Deputy</b></p>')],
		['1994', 3, customTooltip('<h2>1994</h2><p>Prior Career Starts: 3</p><h3>Winner:</h3><p><b>Jambalaya Jazz</b></p>')],
		['1995', 6, customTooltip('<h2>1995</h2><p>Prior Career Starts: 6</p><h3>Winner:</h3><p><b>Ide</b></p>')],
		['1996', 5, customTooltip('<h2>1996</h2><p>Prior Career Starts: 5</p><h3>Winner:</h3><p><b>Concerto</b></p>')],
		['1997', 5, customTooltip('<h2>1997</h2><p>Prior Career Starts: 5</p><h3>Winner:</h3><p><b>Cape Town</b></p>')],
		['1998', 3, customTooltip('<h2>1998</h2><p>Prior Career Starts: 3</p><h3>Winner:</h3><p><b>Exploit</b></p>')],
		['1999', 6, customTooltip('<h2>1999</h2><p>Prior Career Starts: 6</p><h3>Winner:</h3><p><b>Captain Steve</b></p>')],
		['2000', 4, customTooltip('<h2>2000</h2><p>Prior Career Starts: 4</p><h3>Winner:</h3><p><b>Dollar Bill</b></p>')],
		['2001', 4, customTooltip('<h2>2001</h2><p>Prior Career Starts: 4</p><h3>Winner:</h3><p><b>Repent</b></p>')],
		['2002', 2, customTooltip('<h2>2002</h2><p>Prior Career Starts: 2</p><h3>Winner:</h3><p><b>Soto</b></p>')],
		['2003', 1, customTooltip('<h2>2003</h2><p>Prior Career Starts: 1</p><h3>Winner:</h3><p><b>The Cliff\'\s Edge</b></p>')],
		['2004', 4, customTooltip('<h2>2004</h2><p>Prior Career Starts: 4</p><h3>Winner:</h3><p><b>Greater Good</b></p>')],
		['2005', 5, customTooltip('<h2>2005</h2><p>Prior Career Starts: 5</p><h3>Winner:</h3><p><b>Private Vow</b></p>')],
		['2006', 2, customTooltip('<h2>2006</h2><p>Prior Career Starts: 2</p><h3>Winner:</h3><p><b>Tiz Wonderful</b></p>')],
		['2007', 2, customTooltip('<h2>2007</h2><p>Prior Career Starts: 2</p><h3>Winner:</h3><p><b>Anak Nakal</b></p>')],
		['2008', 4, customTooltip('<h2>2008</h2><p>Prior Career Starts: 4</p><h3>Winner:</h3><p><b>Beethoven</b></p>')],
		['2009', 3, customTooltip('<h2>2009</h2><p>Prior Career Starts: 3</p><h3>Winner:</h3><p><b>Super Saver</b></p>')],
		['2010', 3, customTooltip('<h2>2010</h2><p>Prior Career Starts: 3</p><h3>Winner:</h3><p><b>Santiva</b></p>')],
		['2011', 2, customTooltip('<h2>2011</h2><p>Prior Career Starts: 2</p><h3>Winner:</h3><p><b>Gemologist</b></p>')],
		['2012', 6, customTooltip('<h2>2012</h2><p>Prior Career Starts: 6</p><h3>Winner:</h3><p><b>Uncaptured</b></p>')],
		['2013', 3, customTooltip('<h2>2013</h2><p>Prior Career Starts: 3</p><h3>Winner:</h3><p><b>Tapiture</b></p>')],
		['2014', 4, customTooltip('<h2>2014</h2><p>Prior Career Starts: 4</p><h3>Winner:</h3><p><b>El Kabeir</b></p>')],
		['2015', 3, customTooltip('<h2>2015</h2><p>Prior Career Starts: 3</p><h3>Winner:</h3><p><b>Airoforce</b></p>')],
		['2016', 2, customTooltip('<h2>2016</h2><p>Prior Career Starts: 2</p><h3>Winner:</h3><p><b>McCraken</b></p>')],
		['2017', 2, customTooltip('<h2>2017</h2><p>Prior Career Starts: 2</p><h3>Winner:</h3><p><b>Enticed</b></p>')],
		['2018', 4, customTooltip('<h2>2018</h2><p>Prior Career Starts: 4</p><h3>Winner:</h3><p><b>Signalman</b></p>')],
  ]);



// options odds
	var options = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#01437d"],
	hAxis: {title: 'Kentucky Jockey Club Winners $1 Odds 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11,12]
				},
	chartArea: {width: "90%"},
 };


// choice and field size
	var options2 = {
	legend: {position: 'top', textStyle :{fontSize : 14, fontName: 'verdana'}},
	tooltip: {isHtml: true},
	colors: ["#3f91e1", "#01437d"],
	hAxis: {title: 'Kentucky Jockey Club Winners Bettors\' Choice & Field Size 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
				},
	chartArea: {width: "90%"},
 };


// prior career starts
	var options3 = {
	legend: {position: 'none'},
	tooltip: {isHtml: true},
	colors: ["#01437d", "#bd8a00"],
	hAxis: {title: 'Kentucky Jockey Club Winners Prior Career Starts 1991-2018', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, slantedText: 'true', slantedTextAngle: '90'},
	vAxis: {
				textStyle: {fontSize: 12, fontName: 'verdana'},
				gridlines: {color: '#dddddd'},
				ticks: [1,2,3,4,5,6,7,8]
				},
	chartArea: {top: "10%", width: "90%"},
 };



// draw charts
	var chart = new google.visualization.ColumnChart(document.getElementById('odds'));
	chart.draw(dataTable, options);

	var chart2 = new google.visualization.ColumnChart(document.getElementById('choice-field'));
	chart2.draw(dataTable2, options2);

	var chart3 = new google.visualization.ColumnChart(document.getElementById('career-starts'));
	chart3.draw(dataTable3, options3);




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
	chart3.draw(dataTable3, options3);

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
