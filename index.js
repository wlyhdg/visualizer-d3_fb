const canvas = d3.select(".canvas")

const svg = canvas.append("svg")
  .attr("height", 600)
  .attr("width", 600);

const group = svg.append("g") // create a group 
  .attr('transform', 'translate(50, 100)')

// append shaped to svg container
group.append("rect")
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "blue")
  .attr("x", 20)
  .attr("y", 20)
  .attr("id", "block");

group.append("circle")
  .attr("r", 50)
  .attr("cx", 300)
  .attr("cy", 70)
  .attr("fill", "pink")
  .attr("id", "bubble-gum");

group.append("line")
  .attr("x1", 370)
  .attr("x2", 400)
  .attr("y1", 20)
  .attr("y2", 120)
  .attr("stroke", "red")
  .attr("stroke-width", 20)
  .attr("id", "slugger");

svg.append('text')
  .attr("x", 20)
  .attr("y", 200)
  .attr("fill", "grey")
  .text("hllowrld")
  .attr("id", "text")
  .style("font-family", "Arial");

  let t1 = new TimelineMax({repeat: -1})
  t1.to('#slugger', 1, {rotate: 30})
  t1.to('#bubble-gum', 1, {x: -30}, '<0.6')
  t1.to('#block', 0.2, {x: -30})
  t1.to('#block', 0.2, {x: 30, ease: 'Bounce.easeOut'})
  t1.to('#text', 0.5, {rotation: -45}, '<')
  t1.to('#bubble-gum', 1, {x: 30}, '<')
  t1.to('#slugger', 1, {rotate: -720}, '<0.3')
