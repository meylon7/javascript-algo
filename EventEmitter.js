const l = console.log
const log = l

class EventEmitter {
    constructor() {
        this.listeners = {}
    }
    on(str, fn) {
        this.listeners[str] = fn
    }
    emit(str, ...data) {
        this.listeners[str](...data)
    }
    once(str, fn) {
        const self = this

        function onceFn(data) {
            fn(data)
            self.removeEventListener(str)
        }
        this.on(str, onceFn)
            //this.listeners[str] = oncefn
    }
    addEventListener(str, fn) {
        this.on(str, fn)
    }
    removeEventListener(str) {
        delete this.listeners[str]
    }
}

function run(distance) {
    console.log("I'm Runner", distance);
}

function fastRun(distance, speed) {
    console.log("I'm Fast Runner", distance, speed);
}

function builder() {
    console.log("I'm Builder");
}

const emitter = new EventEmitter();
emitter.on("running", run);
emitter.on("running", fastRun);
emitter.emit("running", 50, 100);