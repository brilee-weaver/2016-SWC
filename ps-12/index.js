// bar graph, left side

var width = 500;
var height = 500;

var margin = {
  top: 10,
  left: 10,
  right: 10,
  bottom: 10,
};

var svg = d3.select("compare")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var data = [{
    x: "Popular Vote, Trump",
    y: 62.2
  },
  {
    x: "Popular Vote, Clinton",
    y: 64.2
  },
];

var xScale = d3.scaleBand()
  .domain(["Popular Vote, Trump", "Popular Vote, Clinton"])
  .range([height - margin.bottom, margin.top]);

var yScale = d3.scaleLinear()
  .domain([60, 61, 62, 63, 64, 65])
  .range([height - margin.bottom, margin.top]);

var xAxis = svg.append("g")
  .attr("transform", "translate(0," + (height - margin.bottom) + ")")
  .call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
  .attr("transform", "translate(" + margin.left + ", 0)")
  .call(d3.axisLeft().scale(yScale));

var barWidth = 20;
var bars = svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", function(d) {
    return xScale(d.x) + xScale.bandwidth() / 2 - barWidth / 2;
  })
  .attr("y", function(d) {
    return yScale(d.y);
  })
  .attr("width", barWidth)
  .attr("height", function(d) {
    return height - margin.bottom - yScale(d.y);
  });

// not sure how to transition to plot, middle center

var width = 500;
var height = 500;

var margin = {
  top: 20,
  left: 20,
  right: 20,
  bottom: 20,
};

var svg = d3.select("svg")
  .attr("width", width)
  .attr("height", height);

var data = [{
  x: 2000,
  y: 50456
}, {
  x: 2004,
  y: 62041
}, {
  x: 2008,
  y: 69499
}, {
  x: 2012,
  y: 65916
}, {
  x: 2016,
  y: 62896
}, ];

var xScale = d3.scaleBand()
  .domain([1996, 2000, 2004, 2008, 2012, 2016])
  .range([margin.left, width - margin.right]);

var yScale = d3.scaleLinear()
  .domain([50000, 55000, 60000, 65000, 70000])
  .range([height - margin.bottom, margin.top]);

var xAxis = svg.append("g")
  .attr("transform", "translate(0," + (height - margin.bottom) + ")")
  .call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
  .attr("transform", "translate(" + margin.left + ", 0)")
  .call(d3.axisLeft().scale(yScale));

// so far I haven't been able to get the radius size to change according to the y value; would have liked to change color as well

var circles = svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", function(d) {
    return xScale(d.x);
  })
  .attr("cy", function(d) {
    return yScale(d.y);
  })
  .attr("r", 3)
  .attr("fill", "blue")

svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", margin.left / 3)
  .attr("x", 0 - (height / 2))
  .style("text-anchor", "middle")
  .text("popular vote count");

svg.append("text")
  .attr("y", height - margin.bottom / 3)
  .attr("x", width / 2)
  .style("text-anchor", "middle")
  .text("election year");
