  // Load the Visualization API and the piechart package.
  google.load('visualization', '1.0', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 2],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2],
      ['chuleta', 1]
    ]);

    // Set chart options
    var options = {'title':'Diagramita tipo pizza'};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    }
    //Agregando charts tipo tabla
    google.load("visualization", "1.1", {packages:["table"]});
    google.setOnLoadCallback(drawTable);

     function drawTable() {
       var data_table = new google.visualization.DataTable();
       data_table.addColumn('string', 'Name');
       data_table.addColumn('number', 'Salary');
       data_table.addColumn('boolean', 'Full Time Employee');
       data_table.addColumn('string', 'Game');
       data_table.addRows([
         ['Mike',  {v: 10000, f: '$10,000'}, true,'LOL'],
         ['Jim',   {v:8000,   f: '$8,000'},  false,'LOL'],
         ['Alice', {v: 12500, f: '$12,500'}, true,'FFF'],
         ['Bob',   {v: 7000,  f: '$7,000'},  true,'TBBT'],
         ['Bob',   {v: 65,  f: '$65'},  true,'SCII']
       ]);

       var table = new google.visualization.Table(document.getElementById('table_div'));

       table.draw(data_table, {showRowNumber: true, width: '100%', height: '100%'});
     }

    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawVisualization);

       function drawVisualization() {
         // Some raw data (not necessarily accurate)
         var data_combo = google.visualization.arrayToDataTable([
          ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Rwanda', 'Average'],
          ['2004/05',  165,      938,         522,         450,      614.6],
          ['2005/06',  135,      1120,        599,         288,      682],
          ['2006/07',  157,      1167,        587,         397,      623]
       ]);

     var options = {
       title : 'Monthly Coffee Production by Country',
       vAxis: {title: 'Cups'},
       hAxis: {title: 'Month'},
       seriesType: 'bars',
       series: {4: {type: 'line'}}
     };

     var chart = new google.visualization.ComboChart(document.getElementById('combo_div'));
     chart.draw(data_combo, options);
   }

   //Mapita
    google.load("visualization", "1", {packages:["geochart"]});
    google.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var datamap = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
          ['PE', 1700]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(datamap, options);
      }



  
