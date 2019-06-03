function eventReducer(data, options = {}) {
  const {
    numberOfSlots = 10,
    secondsPerSlot = 60,
    propertyName = 'epoch'
  } = options;

  // need first to filter the data
  let startEpoch = Date.now() - numberOfSlots * secondsPerSlot * 1000;

  let dataSlot = [];
  for (let i = 0; i < numberOfSlots; i++) {
    dataSlot[i] = [i - numberOfSlots + 1, 0];
  }
  for (let datum of data) {
    let index = Math.floor(
      (datum.epoch - startEpoch - 1) / (secondsPerSlot * 1000)
    );
    if (index >= 0 && index < dataSlot.length) dataSlot[index][1]++;
  }

  return dataSlot;
}

export default eventReducer;
