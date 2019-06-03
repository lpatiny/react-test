import eventReducer from '../eventReducer';

it('eventReducer', () => {
  let now = Date.now();
  let data = [
    {
      epoch: now
    },
    {
      epoch: now - 100
    },
    {
      epoch: now - 1100
    },
    {
      epoch: now - 10000000
    }
  ];

  let result = eventReducer(data, {
    numberOfSlots: 10,
    secondsPerSlot: 1,
    propertyName: 'epoch'
  });
  expect(result).toEqual([
    [-9, 0],
    [-8, 0],
    [-7, 0],
    [-6, 0],
    [-5, 0],
    [-4, 0],
    [-3, 0],
    [-2, 0],
    [-1, 1],
    [0, 2]
  ]);
});
