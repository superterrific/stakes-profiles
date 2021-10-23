google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// data - last track track
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('string', 'Track Last Raced');
	dataTable.addColumn('number', '# of Winners');

	dataTable.addRows([
		['Fair Grounds', 14],
		['Gulfstream', 7],
		['Churchill Downs', 3],
		['Santa Anita', 3],
		['Oaklawn', 2],
		['Evangeline', 1],
		['Monmouth', 1],

  ]);


// data - winning favs
	var dataTable2 = new google.visualization.DataTable();
	dataTable2.addColumn('string', 'Fav');
	dataTable2.addColumn('number', '');
	dataTable2.addColumn({type:'string', role:'annotation'});
	dataTable2.addColumn({type: 'string', role: 'tooltip'});
	dataTable2.addColumn('number', '');
	dataTable2.addColumn({type:'string', role:'annotation'});
	dataTable2.addColumn({type: 'string', role: 'tooltip'});

	dataTable2.addRows([
		['',  9, '29% Winning Favs', 'Winning Favorites: 9', 22, '', 'Favorites not Winning: 22'],
		['',  17, '54.8% Favs ITM', 'Favorites In the Money (ITM): 17',  14, '', 'Favorites not In the Money (ITM): 14'],
  ]);




// data - running styles
	var dataTable3 = new google.visualization.DataTable();
	dataTable3.addColumn('string', 'Running Style');
	dataTable3.addColumn('number', 'Deep Closer');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', 'Off the Pace');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', 'Stalker/Presser');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', 'Speed');
	dataTable3.addColumn({type:'string', role:'annotation'});

	dataTable3.addRows([
		['',  7, '22.5% Deep Closer', 10, '32.2% Off the Pace', 9, '29% Stalker/Presser', 5, '16.3% Speed'],
  ]);

// data - prior race
	var dataTable4 = new google.visualization.DataTable();
	dataTable4.addColumn('string', 'Last Out');
	dataTable4.addColumn('number', '');
	dataTable4.addColumn({type:'string', role:'annotation'});
	dataTable4.addColumn({type: 'string', role: 'tooltip'});
	dataTable4.addColumn('number', '');
	dataTable4.addColumn({type:'string', role:'annotation'});
	dataTable4.addColumn({type: 'string', role: 'tooltip'});

	dataTable4.addRows([
		['',  20, '64.5% Won Prior Race', 'Won Prior Race: 20', 11, '', 'Lost Prior Race: 11'],
		['',  27, '87.1% In the Money Prior Race', 'In the Money Prior Race: 27',  4, '', 'Out of the Money Prior Race: 4'],
  ]);




// options - last track track
	var options = {
	legend: {position: 'none'},
	colors: ["#01437d"],
	hAxis: {title: 'Risen Star Winners Last Track Raced 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 14, color: '#dddddd'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	chartArea: {top: "0", bottom: "20%"},
 };


// options - favs
	var options2 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {title: 'Risen Star Favorites 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "70%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11}},
	chartArea: {top: "0", bottom: "20%", width: "85%"},
	isStacked: 'percent'
 };



// options - running styles
	var options3 = {
	legend: {position: 'top', textStyle :{fontSize : 11, fontName: 'verdana'}},
	colors: ["#01437d", "#ed6631", "#00796a", "#ad41bf",  "#960151", "#bd8a00"],
	hAxis: {title: 'Risen Star Winning Running Styles 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11}},
	chartArea: {width: "90%"},
	isStacked: 'percent'
 };


// options - last out win/ITM
	var options4 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {title: 'Risen Star Winners Finish Prior Race 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11}},
	chartArea: {top: "0", left: "0", bottom: "20%", width: "100%"},
	isStacked: 'percent'
 };


// draw chart
	var chart = new google.visualization.BarChart(document.getElementById('last-track'));
	chart.draw(dataTable, options);

	var chart2 = new google.visualization.BarChart(document.getElementById('favs-bar'));
	chart2.draw(dataTable2, options2);

	var chart3 = new google.visualization.BarChart(document.getElementById('running-styles-stack'));
	chart3.draw(dataTable3, options3);

	var chart4 = new google.visualization.BarChart(document.getElementById('last-out-stack'));
	chart4.draw(dataTable4, options4);




// make responsive
	function resizeChart () {
	chart.draw(dataTable, options);
	chart2.draw(dataTable2, options2);
	chart3.draw(dataTable3, options3);
	chart4.draw(dataTable4, options4);


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
