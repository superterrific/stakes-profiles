google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// data - last track track
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('string', 'Track Last Raced');
	dataTable.addColumn('number', '# of Winners');

	dataTable.addRows([
		['Churchill Downs', 7],
		['Belmont Park', 5],
		['Delaware Park', 5],
		['Monmouth Park', 5],
		['Hollywood Park', 3],
		['Del Mar', 1],
		['Laurel Park', 1],
		['Penn National', 1],
  ]);

// data - age winners
	var dataTable2 = new google.visualization.DataTable();
	dataTable2.addColumn('string', 'Age of Winner');
	dataTable2.addColumn('number', '# of Winners');

	dataTable2.addRows([
		['4-year-olds', 18],
		['5-year-olds', 11],

  ]);


// data - age all starters
	var dataTable3 = new google.visualization.DataTable();
	dataTable3.addColumn('string', 'Age of Runner');
	dataTable3.addColumn('number', '4 yos');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', '5 yos');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', '6 yos');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', '7 yos');
	dataTable3.addRows([
		['',  130, '55.7% 4 yos', 80, '34.3% 5 yos', 21, '9% 6yos', 2],

  ]);


// data - age all starters by age group
	var dataTable4 = new google.visualization.DataTable();
	dataTable4.addColumn('string', 'Age');
	dataTable4.addColumn('number', 'Winners');
	dataTable4.addColumn({type:'string', role:'annotation'});
	dataTable4.addColumn('number', 'Non-Winners');
	dataTable4.addColumn({type:'string', role:'annotation'});
	dataTable4.addRows([

		['4-year-olds',  18, '13.8%', 112, '86.1%'],
		['5-year-olds',  11, '14.1%', 67, '86.2%'],
		['6-year-olds',  0, '', 21, '100%'],
		['7-year-olds',  0, '', 2, '100%'],

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

		['',  12, '41.3% Winning Favs', 'Winning Favorites: 12', 17, '', 'Favorites not Winning: 17'],
		['',  18, '62% Favs ITM', 'Favorites In the Money (ITM): 18',  11, '', 'Favorites not In the Money (ITM): 11'],
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

		['',  2, '13.3% Winning Run Backs', 'Winning Run Backs: 2', 13, '', 'Losing Run Backs: 13'],
		['',  6, '40% ITM Run Backs', 'ITM Run Backs: 6',  9, '', 'Run Back Not ITM: 9'],
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
		['',  5, '17.2% Deep Closer', 4, '13.7% Off the Pace', 10, '34.4% Stalker/Presser', 10, '34.4% Speed'],
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

		['',  11, '37.9% Won Prior Race', 'Won Prior Race: 11', 18, '', 'Lost Prior Race: 18'],
		['',  24, '82.8% In the Money Prior Race', 'In the Money Prior Race: 24',  5, '', 'Out of the Money Prior Race: 5'],
  ]);




// options - last track track
	var options = {
	legend: {position: 'none'},
	colors: ["#01437d"],
	hAxis: {title: 'Delaware Handicap Winners Last Track Raced 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 8, color: '#dddddd'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	chartArea: {top: "0", bottom: "20%"},
 };

// options - age
	var options2 = {
	legend: {position: 'none'},
	colors: ["#01437d"],
	hAxis: {title: 'Delaware Handicap Winners Age 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}, gridlines: {count: 10, color: '#dddddd'}},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	chartArea: {top: "0", bottom: "20%"},
 };


// options - age all starters
	var options3 = {
	legend: {position: 'top', textStyle :{fontSize : 11, fontName: 'verdana'}},
	colors: ["#01437d", "#ed6631", "#00796a", "#ad41bf", "#960151", "#00a0d1", "#bd8a00"],
	hAxis: {title: 'Delaware Handicap All Starters by Age 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 12}},
	chartArea: {width: "90%"},
	isStacked: 'percent'
 };


// options - age starters by age group
	var options4 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {title: 'Delaware Handicap Win Rate by Age 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 11, fontName: 'verdana'}},
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
	hAxis: {title: 'Delaware Handicap Favorites 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
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
	hAxis: {title: 'Delaware Handicap Run Backs 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
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
	hAxis: {title: 'Delaware Handicap Winning Running Styles 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11}},
	chartArea: {width: "90%"},
	isStacked: 'percent'
 };


// options - last out win/ITM
	var options8 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {title: 'Delaware Handicap Winners Finish Prior Race 1991-2019', titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12}, textStyle: {fontSize: 12, fontName: 'verdana'}},
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
