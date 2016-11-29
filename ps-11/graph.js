var width = 600;
var height = 600;

var margin = {top: 40,
							left: 40,
              right: 40,
              bottom: 40,
};

var svg = d3.select("body")
	.append("svg")
  .attr("width", width)
  .attr("height", height);


  var data = [
  	{x: 1, y: 1},
  	{x: 2, y: 2},
  	{x: 3, y: 4},
  	{x: 4, y: 3},
  ];

  var xScale = d3.scaleBand()
    .domain([0,5])
    .range([margin.left, width - margin.right]);

  var yScale = d3.scaleLinear()
    .domain([0,5])
    .range([height - margin.bottom, margin.top]);

  var xAxis = svg.append("g")
    attr.("transform","translate(0,"+ (height - margin.bottom) +")")
    .call(d3.axisBottom().scale(xScale));

  var yAxis = svg.append("g")
    attr.("transform","translate(0,"+ margin.left) +", 0)")
    .call(d3.axisLeft().scale(yScale));

var circles = svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) {return xScale(d.x);})
    .attr("cy", function(d) {return yScale(d.y);})
    .attr("r", 3);
