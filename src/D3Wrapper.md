# Test

```jsx
const renderer = (element, data, d3) => {
  const svg = d3.select(data);

  const plot = svg.append("g");
  plot
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 5);
};
<D3Wrapper
  data={[{ x: 1, y: 0 }, { x: 2 }, { y: 1 }]}
  renderer={renderer}
  width={100}
  height={100}
/>;
```
