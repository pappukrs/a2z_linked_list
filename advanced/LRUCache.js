class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // Stores key-value pairs
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value); // Move to most recent position
        
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key); // Remove old position
        
        this.cache.set(key, value); // Insert as most recent
        
        if (this.cache.size > this.capacity) {
            let oldestKey = this.cache.keys().next().value; // First item is LRU
            this.cache.delete(oldestKey);
        }
    }
}
