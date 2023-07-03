class Path {

    /**
     * @param {any} object 
     * @param {string} path 
     * @returns {any}
     */
    static getValue(object, path) {
        if (object) {
            path = new Path(path);
            let result = path.get(object);
            return result;
        }
        return undefined;
    }

    /**
     * @param {any} object 
     * @param {string} path 
     * @param {any} value
     * @returns {any}
     */
    static setValue(object, path, value) {
        if (object) {
            path = new Path(path);
            let result = path.set(object, value);
            return result;
        }
        return undefined;
    }

    #path;

    /**
     * @param {string} path 
     */
    constructor(path) {
        if (typeof path !== "string") throw new Error("Invalid argument expected a string value");
        if (path.length == 0) throw new Error("Empty paths are not allowed");
        this.#path = path == "." ? ["."] : path.split(".");
    }

    /**
     * @param {any} object 
     * @returns {any}
     */
    get(object) {
        if (object) {
            if (this.#path[0] == ".") return object;
            let current = object;
            for (let i = 0; i < this.#path.length; i++) {
                let value = current[this.#path[i]];
                if (value) current = value;
                else break;
            }
            return current;
        }
        return undefined;
    }

    set(object, value) {
        if (object) {
            if (this.#path[0] == ".") throw new Error("Self-paths can not set values");
            let current = object;
            for (let i = 0; i < this.#path.length - 1; i++) {
                let value = current[this.#path[i]];
                if (value) current = value;
                else current = (current[this.#path[i]] = {});
            }
            current[this.#path[this.#path.length - 1]] = value;
            return current;
        }
        return undefined;
    }

}

export {
    Path
};