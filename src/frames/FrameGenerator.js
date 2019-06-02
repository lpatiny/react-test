import EventsEmitter from 'events';
import delay from 'delay';

class FrameGenerator extends EventsEmitter {
  constructor() {
    super();
    this.enable = false;
  }
  async start() {
    this.enable = true;
    while (this.enable) {
      this.emit('frame', {
        id: window.performance.now(),
        timeStamp: Date.now(),
        priority: 24,
        isService: false,
        sourceNodeID: 12,
        frameID: 402740492,
        dataTypeID: 341,
        bytes: [241, 95, 1, 0, 0, 0, 0],
        payload: [241, 95, 1, 0, 0, 0, 0, 223],
        startTransfer: true,
        endTransfer: true,
        tailByte: 223,
        toggleBit: 0,
        transferID: 31
      });
      await delay(1000);
    }
  }
  stop() {
    this.enable = false;
  }
}

export default FrameGenerator;
