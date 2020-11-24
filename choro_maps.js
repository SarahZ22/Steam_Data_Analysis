// US Choropleth Map
Plotly.d3.csv('Assets/Data/state_data.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'USA-states',
        locations: unpack(rows, 'Abbreviation'),
        z: unpack(rows, 'Games Owned'),
        text: 'games sold',
        colorscale: 'Electric',
        colorbar: {
            title: 'Number Games Sold'
        }, }];

    var layout = {
      title: 'Number of Steam Games Sold per US State',
      geo:{
        scope: 'usa',
        showlakes: true,
        lakecolor: '#e6ffff',
        }, };

        var config = {responsive: true}

    Plotly.newPlot("usmap", data, layout, config, {showLink: false});
});

// World Choropleth Map
Plotly.d3.csv('Assets/Data/steam_sales_by_country.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

  var data = [{
      type: 'choropleth',
      locationmode: 'country names',
      locations: unpack(rows, 'Country'),
      z: unpack(rows, 'Games Owned'),
      text: 'games sold',
      colorscale: 'Electric',
      colorbar: {
          title: 'Number Games Sold'
      }, }];

  var layout = {
    title: 'Number of Steam Games Sold Worldwide',
    geo:{
      scope: 'worldwide',
      showocean: true,
      oceancolor: '#e6ffff',
      projection: {
        type: 'robinson'}
      }, };

      var config = {responsive: true}

  Plotly.newPlot("worldmap", data, layout, config, {showLink: false});
});