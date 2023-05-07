const data = [4, 8, 15, 16, 23, 42];

const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");

const x = d3.scaleBand().range([0, width]).padding(0.1);
const y = d3.scaleLinear().range([height, 0]);

const g = svg.append("g")
    .attr("transform", "translate(30,30)");

x.domain(data.map((d, i) => i));
y.domain([0, d3.max(data)]);

g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(() => ""));

g.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("Frequency");

g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d));