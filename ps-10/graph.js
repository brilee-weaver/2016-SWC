var popVote = [
  {year: 2000, votes: 50},
  {year: 2004, votes: 62},
  {year: 2008, votes: 69},
  {year: 2012, votes: 66},
];

var height = 500;
var width = 500;
var margin = {left: 60, bottom: 60, right: 10, top: 10};

var yearToVote = d3.scaleLinear()
  .domain ([50,70])
  .range ([5,40]);

var scaleYear = d3.scaleLinear()
  .domain([1996,2016])
  .range([20,480]);

var scaleVotes = d3.scaleLinear()
  .domain([50,70])
  .range([480,20]);

function yearToX(datum) {
  return scaleYear(datum.year);
};

function votesToY(datum) {
  return scaleVotes(datum.votes);
};

svg.append('g')
  .attr("transform", "translate(0," + (height - margin.bottom) + ")")
  .call(axisBottom);

svg.append('g')
  .attr("transform", "translate(" + margin.left + ",0)")
  .call(axisLeft);

// text label for the y axis
svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", margin.left/3)
  .attr("x", 0 - (height / 2))
  .style("text-anchor", "middle")
  .text("Popular Votes (1,000)");

// text label for the x axis
svg.append("text")
  .attr("y", height - margin.bottom/3)
  .attr("x", width / 2)
  .style("text-anchor", "middle")
  .text("Year");

var svg = d3.select("#svg");
svg.selectAll("circle")
.data(popVote)
.enter()
.append(circle)
.style("cx", yearToX )
.style("cy", votesToY )
.style("r", function(datum) {return votesToRadius(datum.votes);} );
