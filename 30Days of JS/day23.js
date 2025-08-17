
// 2694. Event Emitter - LeetCode

class EventEmitter {
    constructor() {
        this.events = {}; // store eventName -> array of listeners
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
                // if no callbacks left, cleanup
                if (this.events[eventName].length === 0) {
                    delete this.events[eventName];
                }
                return undefined;
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return [];
        }

        return this.events[eventName].map(cb => cb(...args));
    }
}
const emitter = new EventEmitter();

console.log(emitter.emit("firstEvent")); 
// []

emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });

console.log(emitter.emit("firstEvent")); 
// [5, 6]
