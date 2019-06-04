import React, { useEffect } from 'react';
import Dygraph from 'dygraphs';
import uniqueId from 'lodash/uniqueId';
import 'dygraphs/dist/dygraph.min.css';

function ChartEventsPerMinute(props) {
  const elementID = React.useRef(uniqueId('chart-'));
  const dygraph = React.useRef(undefined);
  const [height, setHeight] = React.useState(320);
  useEffect(() => {
    dygraph.current = new Dygraph(elementID.current, [], {
      title: props.title,
      titleHeight: 24,
      ylabel: 'Nb events',
      xlabel: 'Time (min)',
      gridLineWidth: '0.3',
      connectSeparatedPoints: true,
      axes: { x: { axisLabelFontSize: 16 }, y: { axisLabelFontSize: 16 } },
      labels: ['Last x min', 'Nb events']
    });
    return () => {};
  }, [props.title, height]);

  React.useLayoutEffect(() => {
    const resizer = () => {
      const element = document.getElementById(elementID.current);
      setHeight(element.clientWidth * 0.75);
    };
    window.addEventListener('resize', resizer);
    resizer();
    return () => window.removeEventListener('resize', resizer);
  }, []);

  useEffect(() => {
    dygraph.current.updateOptions({ file: props.data });
  }, [props.data, height]);

  return (
    <div id={elementID.current} style={{ width: '100%', height: height }} />
  );
}

export default ChartEventsPerMinute;
