const Storage = require('dom-storage');
const { EventEmitter } = require('events');

global.localStorage = new Storage(null, { strict: false });

global.sessionStorage = new Storage(null, { strict: true });

global.BroadcastChannel = class BroadcastChannel {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.emitter = new EventEmitter();
    this.name = name;
  }

  /**
   * @param {any} data
   */
  postMessage(data) {
    this.emitter.emit('message', { data });
  }

  /**
   * @param {string | symbol} name
   * @param {(...args: any[]) => void} listener
   */
  addEventListener(name, listener) {
    this.emitter.on(name, listener);
  }

  /**
   * @param {string | symbol} name
   * @param {(...args: any[]) => void} listener
   */
  removeEventListener(name, listener) {
    this.emitter.removeListener(name, listener);
  }

  close() {
    this.emitter.removeAllListeners();
  }
};
