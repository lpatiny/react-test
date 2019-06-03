import React, { useEffect } from 'react';
import Dygraph from 'dygraphs';
import uniqueId from 'lodash/uniqueId';
import 'dygraphs/dist/dygraph.min.css';

function ChartEventsPerMinute(props) {
  const elementID = React.useRef(uniqueId('chart-'));
  const dygraph = React.useRef(undefined);

  useEffect(() => {
    dygraph.current = new Dygraph(elementID.current, [], {
      title: props.title,
      titleHeight: 32,
      ylabel: 'Nb events',
      xlabel: 'Time (min)',
      gridLineWidth: '0.1',
      connectSeparatedPoints: true,
      axes: { x: { axisLabelFontSize: 9 }, y: { axisLabelFontSize: 9 } },
      labels: ['Date', 'Tampines Ave10 (Stn 40)']
    });
    return () => {};
  }, [props.title]);

  useEffect(() => {
    dygraph.current.updateOptions({ file: props.data });
  }, [props.data]);

  return <div id={elementID.current} />;
}

export default ChartEventsPerMinute;
