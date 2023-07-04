let LIST = [];

class LiveData {

    static dispatchAll() {
        for (let data of LIST) data.dispatch();
    }

    static async runDispatcher(interval = 100) {
        LiveData.dispatchAll();
        await (new Promise(resolve => setTimeout(resolve, interval)));
        LiveData.runDispatcher(interval);
    }

    #active;
    #value;
    #changed;
    #callbacks;

    get active() { return this.#active; }
    get value() { return this.#value; }
    get changed() { return this.#changed; }

    constructor(value = undefined) {
        this.#value = value;
        this.#changed = value != undefined;
        this.#active = false;
        this.#callbacks = {};
    }

    observe(owner, callback) {
        if (owner && callback) {
            let bag = this.#callbacks[owner] ?? (this.#callbacks[owner] = []);
            bag.push(callback);
            if (!this.#active) {
                this.#active = true;
                LIST.push(this);
            }
            return true;
        }
        return false;
    }

    release(owner) {
        if (owner) {
            let bag = this.#callbacks[owner];
            if (bag) {
                delete this.#callbacks[owner];
                if (Object.keys(this.#callbacks).length > 0) {
                    this.#active = false;
                    LIST = LIST.splice(LIST.indexOf(this), 1);
                }
                return true;
            }
        }
        return false;
    }

    post(value) {
        this.#value = value;
        this.#changed = true;
    }

    dispatch() {
        if (this.#changed) {
            for (let owner in this.#callbacks) {
                let bag = this.#callbacks[owner];
                for (let callback of bag) {
                    try {
                        callback(this.#value);
                    } catch { }
                }
            }
            this.#changed = false;
        }
    }

}

export {
    LiveData
};