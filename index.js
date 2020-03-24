const data = [
  {'width': 200, 'height': 100, 'fill': 'purple'},
  {'width': 100, 'height': 60, 'fill': 'pink'},
  {'width': 30, 'height': 100, 'fill': 'green'}
];

const svg = d3.select('svg');

// add attrs to rect already in the DOM
const rects = svg.selectAll('rect')
  .data(data)
  .attr('width', (d, i, n) => d.width)
  .attr('height', (d, i, n) => d.height)
  .attr('fill', (d, i, n) => d.fill);


// append the enter selection to DOM
rects.enter()
  .append('rect')
  .attr('width', (d, i, n) => d.width)
  .attr('height', (d, i, n) => d.height)
  .attr('fill', (d, i, n) => d.fill);

  console.log(rects)