google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// data - last track track
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('string', 'Track Last Raced');
	dataTable.addColumn('number', '# of Winners');

	dataTable.addRows([
		['Aqueduct', 7],
		['Belmont Park', 5],
		['Churchill', 6],
		['Bay Meadows', 2],
		['Lone Star', 2],
		['Santa Anita', 2],
		['Charles Town', 1],
		['Gulfstream', 1],
		['Hialeah', 1],
		['Meydan', 1],
		['Woodbine', 1],
  ]);

// data - age winners
	var dataTable2 = new google.visualization.DataTable();
	dataTable2.addColumn('string', 'Age of Winner');
	dataTable2.addColumn('number', '# of Winners');

	dataTable2.addRows([
		['3-year-olds', 3],
		['4-year-olds', 16],
		['5-year-olds', 6],
		['6-year-olds', 4],

  ]);


// data - age all starters
	var dataTable3 = new google.visualization.DataTable();
	dataTable3.addColumn('string', 'Age of Runner');
	dataTable3.addColumn('number', '3 yos');
	dataTable3.addColumn('number', '4 yos');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', '5 yos');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', '6 yos');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', '7 yos');
	dataTable3.addColumn('number', '8 yos');
	dataTable3.addRows([
		['',  10, 155, '56.3% 4 yos', 73, '26.5% 5 yos', 29, '10.9% 6yos', 7, 1],

  ]);


// data - age all winners by age group
	var dataTable4 = new google.visualization.DataTable();
	dataTable4.addColumn('string', 'Age');
	dataTable4.addColumn('number', 'Winners');
	dataTable4.addColumn({type:'string', role:'annotation'});
	dataTable4.addColumn('number', 'Non-Winners');
	dataTable4.addColumn({type:'string', role:'annotation'});
	dataTable4.addRows([
		['3-year-olds',  3, '30%', 7, '70%'],
		['4-year-olds',  16, '10.3%', 139, '89.7%'],
		['5-year-olds',  6, '8.2%', 67, '91.8%'],
		['6-year-olds',  4, '13.8%', 25, '86.2%'],
		['7-year-olds',  0, '', 7, '100%'],
		['8-year-olds',  0, '', 1, '100%'],

  ]);


// data - winning favs
	var dataTable5 = new google.visualization.DataTable();
	dataTable5.addColumn('string', 'Fav');
	dataTable5.addColumn('number', '');
	dataTable5.addColumn({type:'string', role:'annotation'});
	dataTable5.addColumn({type: 'string', role: 'tooltip'});
	dataTable5.addColumn('number', '');
	dataTable5.addColumn({type:'string', role:'annotation'});
	dataTable5.addColumn({type: 'string', role: 'tooltip'});
	dataTable5.addRows([

		['',  11, '37.9% Winning Favs', 'Winning Favorites: 11', 18, '', 'Favorites not Winning: 18'],
		['',  20, '68.9% Favs ITM', 'Favorites In the Money (ITM): 20',  9, '', 'Favorites not In the Money (ITM): 9'],
  ]);


// data - runbacks
	var dataTable6 = new google.visualization.DataTable();
	dataTable6.addColumn('string', 'Runback');
	dataTable6.addColumn('number', '');
	dataTable6.addColumn({type:'string', role:'annotation'});
	dataTable6.addColumn({type: 'string', role: 'tooltip'});
	dataTable6.addColumn('number', '');
	dataTable6.addColumn({type:'string', role:'annotation'});
	dataTable6.addColumn({type: 'string', role: 'tooltip'});
	dataTable6.addRows([

		['',  2, '9.5% Winning Run Backs', 'Winning Run Backs: 2', 19, '', 'Losing Run Backs: 19'],

  ]);


// data - running styles
	var dataTable7 = new google.visualization.DataTable();
	dataTable7.addColumn('string', 'Running Style');
	dataTable7.addColumn('number', 'Deep Closer');
	dataTable7.addColumn({type:'string', role:'annotation'});
	dataTable7.addColumn('number', 'Off the Pace');
	dataTable7.addColumn({type:'string', role:'annotation'});
	dataTable7.addColumn('number', 'Stalker/Presser');
	dataTable7.addColumn({type:'string', role:'annotation'});
	dataTable7.addColumn('number', 'Speed');
	dataTable7.addColumn({type:'string', role:'annotation'});
	dataTable7.addRows([
		['',  3, '10.3% Deep Closer', 4, '13.7% Off the Pace', 15, '51.7% Stalker/Presser', 7, '24.1% Speed'],
  ]);

// data - prior race
	var dataTable8 = new google.visualization.DataTable();
	dataTable8.addColumn('string', 'Last Out');
	dataTable8.addColumn('number', '');
	dataTable8.addColumn({type:'string', role:'annotation'});
	dataTable8.addColumn({type: 'string', role: 'tooltip'});
	dataTable8.addColumn('number', '');
	dataTable8.addColumn({type:'string', role:'annotation'});
	dataTable8.addColumn({type: 'string', role: 'tooltip'});
	dataTable8.addRows([

		['',  16, '55.2% Won Prior Race', 'Won Prior Race: 16', 13, '', 'Lost Prior Race: 13'],
		['',  23, '79.3% In the Money Prior Race', 'In the Money Prior Race: 23',  6, '', 'Out of the Money Prior Race: 6'],
  ]);




// options - last track track
	var options = {
	legend: {position: 'none'},
	colors: ["#01437d"],
	hAxis: {title: 'Met Mile Winners Last Track Raced 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 8, color: '#dddddd'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	chartArea: {top: "0", bottom: "20%"},
 };

// options - age
	var options2 = {
	legend: {position: 'none'},
	colors: ["#01437d"],
	hAxis: {title: 'Met Mile Winners Age 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 16, color: '#dddddd'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	chartArea: {top: "0", bottom: "20%"},
 };


// options - age all starters
	var options3 = {
	legend: {position: 'top', textStyle :{fontSize : 11, fontName: 'verdana'}},
	colors: ["#01437d", "#ed6631", "#00796a", "#ad41bf", "#960151", "#00a0d1", "#bd8a00"],
	hAxis: {title: 'Met Mile All Starters by Age 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 12}},
	chartArea: {width: "90%"},
	isStacked: 'percent'
 };


// options - age starters by age group
	var options4 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {title: 'Met Mile Win % by Age 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 11, fontName: 'verdana'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "60%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11, color: '#000'}},
	chartArea: {top: "5%", bottom: "20%", width: "80%"},
	isStacked: 'percent'
 };

// options - favs
	var options5 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {title: 'Met Mile Favorites 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "70%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 12, color: '#000'}},
	chartArea: {top: "0", bottom: "20%", width: "85%"},
	isStacked: 'percent'
 };


// options - runbacks
	var options6 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {title: 'Met Mile Run Backs 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "50%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11, color: '#000'}},
	chartArea: {top: "5%", width: "90%"},
	isStacked: 'percent'
 };

// options - running styles
	var options7 = {
	legend: {position: 'top', textStyle :{fontSize : 11, fontName: 'verdana'}},
	colors: ["#01437d", "#ed6631", "#00796a", "#ad41bf",  "#960151", "#bd8a00"],
	hAxis: {title: 'Met Mile Winning Running Styles 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11}},
	chartArea: {width: "90%"},
	isStacked: 'percent'
 };


// options - last out win/ITM
	var options8 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {title: 'Met Mile Winners Finish Prior Race 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontSize: 11}},
	chartArea: {top: "0", left: "0", bottom: "20%", width: "100%"},
	isStacked: 'percent'
 };


// draw chart
	var chart = new google.visualization.BarChart(document.getElementById('last-track'));
	chart.draw(dataTable, options);

	var chart2 = new google.visualization.BarChart(document.getElementById('age'));
	chart2.draw(dataTable2, options2);

	var chart3 = new google.visualization.BarChart(document.getElementById('age-all-starters'));
	chart3.draw(dataTable3, options3);

	var chart4 = new google.visualization.ColumnChart(document.getElementById('age-starters-by-group'));
	chart4.draw(dataTable4, options4);

	var chart5 = new google.visualization.BarChart(document.getElementById('favs-bar'));
	chart5.draw(dataTable5, options5);

	var chart6 = new google.visualization.BarChart(document.getElementById('runbacks'));
	chart6.draw(dataTable6, options6);

	var chart7 = new google.visualization.BarChart(document.getElementById('running-styles-stack'));
	chart7.draw(dataTable7, options7);

	var chart8 = new google.visualization.BarChart(document.getElementById('last-out-stack'));
	chart8.draw(dataTable8, options8);




// make responsive
	function resizeChart () {
	chart.draw(dataTable, options);
	chart2.draw(dataTable2, options2);
	chart3.draw(dataTable3, options3);
	chart4.draw(dataTable4, options4);
	chart5.draw(dataTable5, options5);
	chart6.draw(dataTable6, options6);
	chart7.draw(dataTable7, options7);
	chart8.draw(dataTable8, options8);


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
