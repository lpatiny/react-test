import EventsEmitter from 'events';
import delay from 'delay';

const nBNodes = 4;

class FrameGenerator extends EventsEmitter {
  constructor() {
    super();
    this.nodes = [];
    for (let i = 0; i < nBNodes; i++) {
      this.nodes.push(Math.floor(Math.random() * 125) + 1);
    }

    this.enable = false;
  }
  async start() {
    this.enable = true;
    while (this.enable) {
      this.emit('frame', {
        id: window.performance.now(),
        epoch: Date.now(),
        priority: 24,
        isService: false,
        sourceNodeID: this.nodes[Math.floor(Math.random() * nBNodes)],
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
      await delay(200);
    }
  }
  stop() {
    this.enable = false;
  }
}

export default FrameGenerator;
