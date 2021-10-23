google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// data - last track track
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('string', 'Track Last Raced');
	dataTable.addColumn('number', '# of Winners');

	dataTable.addRows([
		['Belmont Park', 8],
		['Saratoga', 7],
		['Del Mar', 4],
		['Arlington Park', 3],
		['Keeneland', 2],
		['Laurel Park', 2],
		['Goodwood', 1],
		['Meadowlands', 1],
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

		['',  7, '25% Winning Favs', 'Winning Favorites: 7', 21, '', 'Favorites not Winning: 21'],
		['',  14, '50% Favs ITM', 'Favorites In the Money (ITM): 14',  14, '', 'Favorites not In the Money (ITM): 14'],
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
		['',  5, '17.8% Deep Closer', 4, '14.2% Off the Pace', 15, '53.5% Stalker/Presser', 4, '14.2% Speed'],
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

		['',  15, '53.6% Won Prior Race', 'Won Prior Race: 15', 13, '', 'Lost Prior Race: 13'],
		['',  25, '89.3% In the Money Prior Race', 'In the Money Prior Race: 25',  3, '', 'Out of the Money Prior Race: 3'],
  ]);




// options - last track track
	var options = {
	legend: {position: 'none'},
	colors: ["#01437d"],
	hAxis: {
				title: 'Queen Elizabeth II Winners Last Track Raced 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false',
				fontName: 'verdana', fontSize: 12},
				textStyle: {fontSize: 12, fontName: 'verdana'},
				ticks: [1,2,3,4,5,6,7,8]
				},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	chartArea: {top: "0", bottom: "20%"},
 };



// options - favs
	var options2 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {
				title: 'Queen Elizabeth II Favorites 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12},
				textStyle: {color: '#888', fontSize: 12, fontName: 'verdana'},
				minValue: 0,
            	ticks: [0, .2, .4, .6, .8, 1]
				},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "70%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 12, color: '#000'}},
	chartArea: {top: "0", bottom: "20%", width: "85%"},
	isStacked: 'percent'
 };



// options - running styles
	var options3 = {
	legend: {position: 'top', textStyle :{fontSize : 11, fontName: 'verdana'}},
	colors: ["#01437d", "#ed6631", "#00796a", "#ad41bf",  "#960151", "#bd8a00"],
	hAxis: {
				title: 'Queen Elizabeth II Winning Running Styles 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12},
				textStyle: {color: '#888', fontSize: 12, fontName: 'verdana'},
				minValue: 0,
            	ticks: [0, .2, .4, .6, .8, 1]
				},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11}},
	chartArea: {width: "90%"},
	isStacked: 'percent'
 };


// options - last out win/ITM
	var options4 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {
				title: 'Queen Elizabeth II Winners Finish Prior Race 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12},
				textStyle: {color: '#888', fontSize: 12, fontName: 'verdana'},
				minValue: 0,
            	ticks: [0, .2, .4, .6, .8, 1]
				},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontSize: 11}},
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
