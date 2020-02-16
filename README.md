# d3-project1
To prevent `npm install -g` requiring sudo and causing permission issues doe hte following:  

1. Install NVM using https://github.com/nvm-sh/nvm  
2. Install node with `nvm install node`  

See https://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo

## learning
 
  // 1. Access the data
  // the data will be an array of days of data
  // each obj in the array consists of a dict of key value pairs
  // 2. Y axis data accessor is max temp this parses are row
  // of the data table, grabbing the column that cont max temp
  // below is the same as
  // yAccessor = function(d) {
  //     return d.temperatureMax 
  //     }
  // 3. create a date parser function
  // 4. X axis
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
  // 90% of the window with
  // now we add two more keys to our dimensions obj
  // called boundedWidth and boundedHeight
  // the width is the total width ie pagewidth-60-15
  // height = 400 - 15 - 40 = 345
  // use 2 spaces if method returns a new selection
  // use 4 spaces for methods that return same selection
  // a selection returns the first matching DOM element
  // this SVG will be the main chart, we set its width
  // and height to the wrapper width
  // any element inside a SVG must be another SVG
  // this inside block will need to respect the margins
  // so we set them here, this will be the bounding box
  // the g element is a group of SVG elements, a wrapper of 
  // elements
  // the translate uses string subn to insert the string
  // dim.margin.left=60 and top = 15. The SVG element
  // is (0,0) ie top left corner, so the translate moves
  // this group across 60 and down 15 ie to sit inside the
  // margin. The below equates to translate(60,15)
  // the backquotes allow string replacement in ES6
  // the domain is 10-100 degrees F, the range will be 
  // in pixels from 345 to the bottom ie 0 pixesl
  // we use the bound box so it sits inside the margins
  // d3.extent returns the min and max of a range
  // it takes a data range and a accesor function that 
  // defaults to function(d) { return d} so in this case
  // use use our accessor function above which will be
  // function(d) { return d.maxTemp} ie the daily max for that 
  // row of the data, extent will work out the max and min
  // of all these values in our dataset for that col of the data
  // this gets the y cord for the 0 degrees C posn
  // append a rec, x=0 ie left corner
  // y=pixes at loc of 32 on y axis
  // width is entire bound box ie width
  // and height will be from 32 y axis to bottom
  // function(d) { return xScale(d.maxTemp) }
  // so it gets the x and y cord based on each 
  // max temp on a row of the data, the y will be 
  // the yaxis temp and the x will be the date position
  // based on the x axis scale
  // its a line chart so we make a path in the bounds box
  // the line generator contains all the x y cords that we 
  // want to plot, and the 'd' is a SVG path of the line that
  // will use the cords to draw a line
  // below is equiv to yAxisGenerator(yAxis)
  // call executes the provided function passing the 
  // current selection as a paramater
  // This allows us to not have to save the current slection
  // as param (after all we need to pass it to the function
  // and keeps the selection available to keep chaining after
  // the call is made ie see xAxis chain
  // without the translate it will draw the axis at the top
  // all the axis bottom method does is setup the axis for
  // display at the bottom ie puts lavels under the axis
  // it wont put the axis at the bottom because it does not
  // know where it goes so it draws it at x=0 which is the
  // top of the SVG box.  So instead of translate (x,y) will be
  // here we use translateY which takes just a y cord in px
  // translateY (ie move in vertical axis down the length
  // of the SVG from 0 to the bottom ie the the height
