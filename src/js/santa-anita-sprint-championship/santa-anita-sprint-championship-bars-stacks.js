google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

// data - last track track
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn('string', 'Track Last Raced');
	dataTable.addColumn('number', '# of Winners');

	dataTable.addRows([
		['Del Mar', 19],
		['Bay Meadows', 3],
		['Arapaho', 1],
		['Fairplex', 1],
		['Golden Gate Fields', 1],
		['Santa Anita', 1],
		['Saratoga', 1],
		['Sha Tin', 1],
  ]);

// data - age winners
	var dataTable2 = new google.visualization.DataTable();
	dataTable2.addColumn('string', 'Age of Winner');
	dataTable2.addColumn('number', '# of Winners');

	dataTable2.addRows([
		['3-year-olds', 3],
		['4-year-olds', 7],
		['5-year-olds', 5],
		['6-year-olds', 8],
		['7-year-olds', 4],
  ]);


// data - age all starters
	var dataTable3 = new google.visualization.DataTable();
	dataTable3.addColumn('string', 'Age of Runner');
	dataTable3.addColumn('number', '3 yos');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', '4 yos');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', '5 yos');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', '6 yos');
	dataTable3.addColumn({type:'string', role:'annotation'});
	dataTable3.addColumn('number', '7 yos');
	dataTable3.addColumn('number', '8 yos');

	dataTable3.addRows([
		['',  29, '15.8% 3 yos', 63, '34.4% 4 yos', 47, '25.6% 5 yos', 27, '14.7% 6yos', 13, 4],

  ]);


// data - age all starters by age group
	var dataTable4 = new google.visualization.DataTable();
	dataTable4.addColumn('string', 'Age');
	dataTable4.addColumn('number', 'Winners');
	dataTable4.addColumn({type:'string', role:'annotation'});
	dataTable4.addColumn('number', 'Non-Winners');
	dataTable4.addColumn({type:'string', role:'annotation'});
	dataTable4.addRows([
		['3-year-olds',  4, '13.8', 25, '86.2%'],
		['4-year-olds',  7, '11.1%', 56, '88.8%'],
		['5-year-olds',  5, '10.4%', 42, '89.3%'],
		['6-year-olds',  8, '29.6%', 19, '70.3%'],
		['7-year-olds',  4, '30.7%', 9, '69.2%'],
		['8-year-olds',  0, '', 4, '100%'],
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

		['',  8, '28.5% Winning Favs', 'Winning Favorites: 8', 20, '', 'Favorites not Winning: 20'],
		['',  19, '67.8% Favs ITM', 'Favorites In the Money (ITM): 19',  9, '', 'Favorites not In the Money (ITM): 9'],
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

		['',  5, '16.1% Winning Run Backs', 'Winning Run Backs: 5', 26, '', 'Losing Run Backs: 26'],
		['',  13, '41.9% ITM Run Backs', 'ITM Run Backs: 13',  18, '', 'Run Backs Not ITM: 18'],
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
		['',  3, '10.7% Deep Closer', 7, '25.% Off the Pace', 12, '42.8% Stalker/Presser', 6, '21.4% Speed'],
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

		['',  8, '28.6% Won Prior Race', 'Won Prior Race: 8', 20, '', 'Lost Prior Race: 20'],
		['',  23, '82.1% In the Money Prior Race', 'In the Money Prior Race: 23',  5, '', 'Out of the Money Prior Race: 5'],
  ]);


// data - fillies mares in open company
	var dataTable9 = new google.visualization.DataTable();
	dataTable9.addColumn('string', 'Fav');
	dataTable9.addColumn('number', '');
	dataTable9.addColumn({type:'string', role:'annotation'});
	dataTable9.addColumn({type: 'string', role: 'tooltip'});
	dataTable9.addColumn('number', '');
	dataTable9.addColumn({type:'string', role:'annotation'});
	dataTable9.addColumn({type: 'string', role: 'tooltip'});
	dataTable9.addRows([

		['',  2, '40% Winning Fillies/Mares', 'Winning Fillies/Mares: 2', 3, '', 'Fillies/Mares not Winning: 3'],
		['',  3, '60% Fillies/Mares ITM', 'Fillies/Mares In the Money (ITM): 3',  2, '', 'Fillies/Mares not In the Money (ITM): 2'],
  ]);




// options - last track track
	var options = {
	legend: {position: 'none'},
	colors: ["#01437d"],
	hAxis: {
				title: 'Santa Anita Sprint Championship Winners Last Track Raced 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false',
				fontName: 'verdana', fontSize: 12},
				textStyle: {fontSize: 12, fontName: 'verdana'},
				ticks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, 19]
				},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	chartArea: {top: "0", bottom: "20%"},
 };

// options - age
	var options2 = {
	legend: {position: 'none'},
	colors: ["#01437d"],
	hAxis: {
				title: 'Santa Anita Sprint Championship Winners Age 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12},
				textStyle: {fontSize: 12, fontName: 'verdana'},
				ticks: [1,2,3,4,5,6,7, 8]
				},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	chartArea: {top: "0", bottom: "20%"},
 };


// options - age all starters
	var options3 = {
	legend: {position: 'top', textStyle :{fontSize : 11, fontName: 'verdana'}},
	colors: ["#01437d", "#ed6631", "#00796a", "#ad41bf", "#960151", "#00a0d1", "#bd8a00"],
	hAxis: {
				title: 'Santa Anita Sprint Championship All Starters by Age 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12},
				textStyle: {color: '#888', fontSize: 12, fontName: 'verdana'},
				minValue: 0,
            	ticks: [0, .2, .4, .6, .8, 1]
				},
	bar: {groupWidth: "45%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 12}},
	chartArea: {width: "90%"},
	isStacked: 'percent'
 };


// options - age starters by age group
	var options4 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {
				title: 'Santa Anita Sprint Championship Win Rate by Age 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12},
				textStyle: {fontSize: 11, fontName: 'verdana'}
				},
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
	hAxis: {
				title: 'Santa Anita Sprint Championship Favorites 1991-2018',
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


// options - runbacks
	var options6 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {
				title: 'Santa Anita Sprint Championship Run Backs 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12},
				textStyle: {color: '#888', fontSize: 12, fontName: 'verdana'},
				minValue: 0,
            	ticks: [0, .2, .4, .6, .8, 1]
				},
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
	hAxis: {
				title: 'Santa Anita Sprint Championship Winning Running Styles 1991-2018',
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
	var options8 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {
				title: 'Santa Anita Sprint Championship Winners Finish Prior Race 1991-2018',
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



// options - fillies mares in open company
	var options9 = {
	legend: {position: 'none'},
	colors: ["#3a702e","#cccccc"],
	hAxis: {
				title: 'Santa Anita Sprint Championship Fillies and Mares 1991-2018',
				titleTextStyle: {color: '#666', italic: 'false', fontName: 'verdana', fontSize: 12},
				textStyle: {color: '#888', fontSize: 12, fontName: 'verdana'},
				minValue: 0,
            	ticks: [0, .2, .4, .6, .8, 1]
				},
	vAxis: {textStyle: {fontSize: 12, fontName: 'verdana'}},
	bar: {groupWidth: "50%"},
	annotations: {textStyle: {fontName: 'verdana', fontSize: 11, color: '#000'}},
	chartArea: {top: "5%", width: "90%"},
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

	var chart9 = new google.visualization.BarChart(document.getElementById('fillies-mares'));
	chart9.draw(dataTable9, options9);




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
	chart9.draw(dataTable9, options9);


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
