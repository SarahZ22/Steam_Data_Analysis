// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 100, left: 200},
    width = 900 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("Assets/Data/state_data.csv", function(data) {

// sort data
data.sort(function(b, a) {
  return a.Value - b.Value;
});

// Add X axis
var x = d3.scaleLinear()
  .domain([0, 550000])
  .range([ 0, width]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
// Add X axis label:
svg.append("text")
  .attr("text-anchor", "end")
  .attr("x", width - 250)
  .attr("y", height + margin.top + 60)
  .text("Games Owned");

// Y axis
var y = d3.scaleBand()
  .range([ 0, height ])
  .domain(data.map(function(d) { return d.State; }))
  .padding(1);
svg.append("g")
  .call(d3.axisLeft(y))
svg.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left+100)
    .attr("x", -margin.top-300)
    .text("States")


// Lines
svg.selectAll("myline")
  .data(data)
  .enter()
  .append("line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y1", function(d) { return y(d.State); })
    .attr("y2", function(d) { return y(d.State); })
    .attr("stroke", "grey")

// Circles -> start at X=0
svg.selectAll("mycircle")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", x(0) )
    .attr("cy", function(d) { return y(d.State); })
    .attr("r", "7")
    .style("fill", "#800000")
    .attr("stroke", "black")

// Change the X coordinates of line and circle
svg.selectAll("circle")
  .transition()
  .duration(2000)
  .attr("cx", function(d) { return x(d["Games Owned"]); })

svg.selectAll("line")
  .transition()
  .duration(2000)
  .attr("x1", function(d) { return x(d["Games Owned"]); })

  // tool tip
var toolTip = d3.tip()
  .attr("class", "tooltip")
  .offset([80, -60])
  .style("background-color", "#145385")
  .style("color", "lime")
  .style("border", "solid")
  .style("border-color", "black")
  .html(function(d) {
    return (`${d.State}<br> Games Owned: ${d["Games Owned"]}`);
  });

// Step 7: Create tooltip in the chart
// ==============================
svg.call(toolTip);

// Step 8: Create event listeners to display and hide the tooltip
// ==============================
svg.selectAll("circle").on("mouseover", function(data) {
  toolTip.show(data, this);
})
  // onmouseout event
  .on("mouseout", function(data, index) {
    toolTip.hide(data);
  });

})