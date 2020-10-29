const sleep = (time_ms) => (
  new Promise(resolve => setTimeout(resolve, time_ms))
);

exports.sleep = sleep;
