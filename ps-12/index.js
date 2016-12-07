var width=500;
var height=500;

var margin = {
  top: 10,
  left: 10,
  right: 10,
  bottom: 10,
};

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var data = [{x: "Popular Vote, Trump", y: 62.2}],
            {x: "Popular Vote, Clinton", y: 64.2}],
];

var xScale = d3.scaleBand()
  .domain(["Popular Vote, Trump", "Popular Vote, Clinton"])
  .range([height - margin.bottom, margin.top]);

var yScale = d3.scaleLinear()
  .domain([60,65])
  .range([height-margin.bottom, margin-top]);

var xAxis = svg.append("g")
  .attr("transform", "translate(0,"+ height-margin.bottom)+")")
  .call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
  .attr("transform","translate("+ margin.left +", 0)")
  .call(d3.axisLeft().scale(yScale));

var barWidth = 150;
var bars = svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) {
      return xScale(d.x) + xScale.bandwidth()/2 - barWidth/2;
    })
    .attr("y", function(d) {
      return yScale(d.y);
    })
    .attr("width", barWidth)
    .attr("hieght", function(d) {
      return height - margin.bottom - yScale(d.y);
    });
