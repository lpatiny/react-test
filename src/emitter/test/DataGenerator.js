import EventsEmitter from 'events';
import delay from 'delay';

class DataGenerator extends EventsEmitter {
  constructor() {
    super();
    this.enable = false;
  }
  async start() {
    this.enable = true;
    while (this.enable) {
      this.emit('data', {
        id: window.performance.now(),
        dataTypeID: 11,
        dataTypeFullID: 'uavcan.protocol.param.GetSet',
        bytes: [25, 194, 5, 1, 210, 4, 0, 0, 0, 0, 0, 0],
        priority: 24,
        sourceNodeID: 127,
        isService: true,
        transferID: 5,
        value: {
          id: window.performance.now(),
          status: {
            uptimeSec: 86466,
            health: 0,
            mode: 0,
            subMode: 0,
            vendorSpecificStatusCode: 0
          },
          softwareVersion: {
            major: 1,
            minor: 0,
            optionalFieldFlags: 1,
            vcsCommit: 0,
            imageCrc: 0
          },
          hardwareVersion: {
            major: 0,
            minor: 0,
            uniqueId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            uniqueIdStr:
              '\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f',
            certificateOfAuthenticity: []
          },
          name: [
            99,
            104,
            46,
            111,
            99,
            116,
            97,
            110,
            105,
            115,
            46,
            111,
            105,
            98,
            117,
            115,
            46,
            109,
            105,
            110,
            105,
            46,
            97,
            100,
            99,
            45,
            100,
            97,
            99,
            45,
            109,
            111,
            100,
            117,
            108,
            101,
            50
          ],
          nameStr: 'ch.octanis.oibus.mini.adc-dac-module2'
        },
        destinationNodeID: 12,
        isRequest: true
      });
      await delay(1000);
    }
  }
  stop() {
    this.enable = false;
  }
}

export default DataGenerator;
