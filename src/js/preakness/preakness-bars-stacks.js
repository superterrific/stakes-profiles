google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// data - last track track
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('string', 'Track Last Raced');
	dataTable.addColumn('number', '# of Winners');

	dataTable.addRows([
		['Churchill Downs', 26],
		['Aqueduct', 3],
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

		['',  13, '44.8% Winning Favs', 'Winning Favorites: 13', 16, '', 'Favorites not Winning: 16'],
		['',  22, '75.8% Favs ITM', 'Favorites In the Money (ITM): 22',  7, '', 'Favorites not In the Money (ITM): 7'],
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
		['',  9, '31% Deep Closer', 5, '17.2% Off the Pace', 10, '34.4% Stalker/Presser', 5, '17.2% Speed'],
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

		['',  13, '44.8% Won Prior Race', 'Won Prior Race: 13', 16, '', 'Lost Prior Race: 16'],
		['',  20, '69% In the Money Prior Race', 'In the Money Prior Race: 20',  9, '', 'Out of the Money Prior Race: 9'],
  ]);




// options - last track track
	var options = {
	legend: {position: 'none'},
	colors: ["#01437d"],
	hAxis: {title: 'Preakness Winners Last Track Raced 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 8, color: '#dddddd'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	chartArea: {top: "0", bottom: "20%"},
 };



// options - favs
	var options2 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {title: 'Preakness Favorites 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "70%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11, color: '#000'}},
	chartArea: {top: "0", bottom: "20%", width: "85%"},
	isStacked: 'percent'
 };



// options - running styles
	var options3 = {
	legend: {position: 'top', textStyle :{fontSize : 11, fontName: 'verdana'}},
	colors: ["#01437d", "#ed6631", "#00796a", "#ad41bf",  "#960151", "#bd8a00"],
	hAxis: {title: 'Preakness Winning Running Styles 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11}},
	chartArea: {width: "90%"},
	isStacked: 'percent'
 };


// options - last out win/ITM
	var options4 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {title: 'Preakness Winners Finish Prior Race 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
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
