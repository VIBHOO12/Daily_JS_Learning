var TimeLimitedCache = function() {
    this.cache = new Map(); // key -> { value, expiresAt }
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const expiresAt = now + duration;
    const exists = this.cache.has(key) && this.cache.get(key).expiresAt > now;

    this.cache.set(key, { value, expiresAt });
    return exists;
};

TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    if (!this.cache.has(key)) return -1;

    const entry = this.cache.get(key);
    if (entry.expiresAt <= now) {
        this.cache.delete(key); // clean up expired
        return -1;
    }
    return entry.value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let cnt = 0;

    for (const [key, entry] of this.cache.entries()) {
        if (entry.expiresAt > now) cnt++;
        else this.cache.delete(key); // remove expired
    }

    return cnt;
};


//  * Example usage:
 const timeLimitedCache = new TimeLimitedCache();
 console.log(timeLimitedCache.set(1, 42, 1000)); // false
 console.log(timeLimitedCache.get(1)); // 42
 console.log(timeLimitedCache.count()); // 1
