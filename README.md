# react-d3-charts

This represents a basic wrapper around d3js in order to provide additional functionality. Currently, a fullscreen and download button are provided to all charts created with this component.

## Usage
```jsx
import { D3Wrapper } from "react-d3-charts";

const renderer = (svg, data, width, height, d3) => {
  const plot = svg.append('g');
  
  // Perform your plot.
};

<D3Wrapper data={data} renderer={renderer} width={550} height={300} />
```

## Future features

I plan on including some default renderers.
