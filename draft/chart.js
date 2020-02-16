async function drawLineChart() {
  // 1. Access the data
  // the data will be an array of days of data
  // each obj in the array consists of a dict of key value pairs
  const dataset = await d3.json("../../my_weather_data.json")
  console.table(dataset[0]);
  // 2. Y axis data accessor is max temp this parses are row
  // of the data table, grabbing the column that cont max temp
  // below is the same as
  // yAccessor = function(d) {
  //     return d.temperatureMax 
  //     }
  const yAccessor = d => d.temperatureMax
  // 3. create a date parser function
  const dateParser = d3.timeParse("%Y-%m-%d")
  // 4. X axis
  const xAccessor = d => dateParser(d.date)
  // Why use accessor functions?
  // a. easy changes to the data col that you want to plot
  // b. They act as documentation, obv to see your variables
  // c. helps you think through the plot

  // 5. define wrapper
  // the wrapper contains the container that holds the entire
  // chart area. This inc axes labels every SVG element
  // the bounds cont data elements in this the line
  // Sep out allows us to not worry about space for lebels etc 
  // these margins are impt so sep out the two containers helps
  // us organise the page, the axis labels will go in the
  // margin between the wrapper and the bounds box
  // the  margins at the left and bottom are bigger for labels
  let dimensions = {
  // 90% of the window with
    width: window.innerWidth * 0.9,
    height: 400,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60,
    },
  }
  dimensions.boundedWidth = dimensions.width
      - dimensions.margin.left
      - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height
      - dimensions.margin.top
      - dimensions.margin.bottom

  // use 2 spaces if method returns a new selection
  // use 4 spaces for methods that return same selection
  const wrapper = d3.select("#wrapper")
    .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)

  const bounds = wrapper.append("g")
      .style("transform", `translate(${
        dimensions.margin.left
      }px, ${
        dimensions.margin.top
      }px)`)
  console.log(d3.extent(dataset, yAccessor))
  const yScale = d3.scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .range([dimensions.boundedHeight, 0])
  const freezingTemperaturePlacement = yScale(32)
  const freezingTemperatures = bounds.append("rect")
      .attr("x", 0)
      .attr("width", dimensions.boundedWidth)
      .attr("y", freezingTemperaturePlacement)
      .attr("height", dimensions.boundedHeight
        - freezingTemperaturePlacement)
      .attr("fill", "#e0f3f3")
  const xScale = d3.scaleTime()
      .domain(d3.extent(dataset, xAccessor))
      .range([0, dimensions.boundedWidth])
  const lineGenerator = d3.line()
    .x(d => xScale(xAccessor(d)))
    .y(d => yScale(yAccessor(d)))
  const line = bounds.append("path")
      .attr("d", lineGenerator(dataset))
      .attr("fill", "none")
      .attr("stroke", "#af9358")
      .attr("stroke-width", 2)
  const yAxisGenerator = d3.axisLeft()
    .scale(yScale)
  const yAxis = bounds.append("g")
    .call(yAxisGenerator)
  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)
  const xAxis = bounds.append("g")
    .call(xAxisGenerator)
      .style("transform", `translateY(${
        dimensions.boundedHeight
      }px)`)

}

drawLineChart()
