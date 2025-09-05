declare const global: {
    source: any;
};

interface api {
    onNet: (eventName: string, handler: Function) => void;
    emitNet: (eventName: string, ...args: any[]) => void;
    on: (eventName: string, handler: Function) => void;
    emit: (eventName: string, ...args: any[]) => void;
}
export class EventEmitter {
    private listeners: Map<string, Array<(...args: any[]) => void>> = new Map();

    on(eventName: string, callback: (...args: any[]) => void): void {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, []);
        }
        this.listeners.get(eventName)!.push(callback);
    }

    once(eventName: string, callback: (...args: any[]) => void): void {
        const onceWrapper = (...args: any[]) => {
            this.off(eventName, onceWrapper);
            callback(...args);
        };
        this.on(eventName, onceWrapper);
    }

    emit(eventName: string, ...args: any[]): void {
        const callbacks = this.listeners.get(eventName);
        if (callbacks) {
            callbacks.forEach((callback) => {
                try {
                    callback(...args);
                } catch (error) {
                    EventLogger.logError(eventName, error);
                }
            });
        }
    }

    off(eventName: string, callback: (...args: any[]) => void): void {
        const callbacks = this.listeners.get(eventName);
        if (callbacks) {
            const index = callbacks.indexOf(callback);
            if (index !== -1) {
                callbacks.splice(index, 1);
            }
        }
    }

    removeAllListeners(eventName?: string): void {
        if (eventName) {
            this.listeners.delete(eventName);
        } else {
            this.listeners.clear();
        }
    }
}

class EventParsingUtils {
    static parseArgument(arg: any): any {
        if (typeof arg === 'string') {
            try {
                return JSON.parse(arg);
            } catch {
                return arg;
            }
        }

        if (Array.isArray(arg)) {
            return arg.map((item) => this.parseArgument(item));
        }

        if (arg && typeof arg === 'object') {
            const result: any = {};
            for (const [key, value] of Object.entries(arg)) {
                result[key] = this.parseArgument(value);
            }
            return result;
        }

        return arg;
    }

    static parseAllArguments(args: any[]): any[] {
        return args.map((arg) => this.parseArgument(arg));
    }

    static assignFields(target: any, source: any): any {
        if (typeof target === 'object' && target !== null && typeof source === 'object' && source !== null) {
            return Object.assign(target, source);
        }
        return source;
    }
}

class EventRegistry {
    private static networkEvents = new Set<string>();
    private static localEvents = new Set<string>();
    private static networkEmitter = new EventEmitter();
    private static localEmitter = new EventEmitter();

    static getNetworkRegistry() {
        return {
            events: this.networkEvents,
            emitter: this.networkEmitter
        };
    }

    static getLocalRegistry() {
        return {
            events: this.localEvents,
            emitter: this.localEmitter
        };
    }
}

class EventLogger {

    static logErrors: boolean = true;
    static logEvents: boolean = false;

    static logEvent(type: 'NETWORK' | 'LOCAL', eventName: string, ...args: any[]): void {
        if (this.logEvents) console.log(`[${type}] ${eventName}`, ...args);
    }

    static logError(eventName: string, error: any): void {
        if (this.logErrors) console.error(`Error in event handler for "${eventName}":`, error);
    }
}

export class NetworkEventUtils {
    private static api: api = {
        onNet: (eventName: string, handler: Function) => onNet(eventName, handler),
        emitNet: (eventName: string, ...args: any[]) => emitNet(eventName, ...args),
        on: (eventName: string, handler: Function) => on(eventName, handler),
        emit: (eventName: string, ...args: any[]) => emit(eventName, ...args),
    };

    private static getNetworkEventName(eventName: string): string {
        return eventName.startsWith('net::') ? eventName : `net::${eventName}`;
    }

    private static setupListener(eventName: string): void {
        const {events, emitter} = EventRegistry.getNetworkRegistry();
        const networkEventName = this.getNetworkEventName(eventName);

        if (!events.has(eventName)) {
            events.add(eventName);

            const handler = (...args: any[]) => {
                const parsedArgs = EventParsingUtils.parseAllArguments(args);
                emitter.emit(eventName, ...parsedArgs);
                EventLogger.logEvent('NETWORK', eventName, ...args);
            };

            this.api.onNet(networkEventName, handler);
        }
    }

    static registerEvent<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
        this.setupListener(eventName);
        const {emitter} = EventRegistry.getNetworkRegistry();
        emitter.on(eventName, callback);
    }

    static registerEventOnce<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
        this.setupListener(eventName);
        const {emitter} = EventRegistry.getNetworkRegistry();
        emitter.once(eventName, callback);
    }

    static removeListener<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
        const {emitter} = EventRegistry.getNetworkRegistry();
        emitter.off(eventName, callback);
    }

    static removeAllListeners(eventName?: string): void {
        const {emitter} = EventRegistry.getNetworkRegistry();
        emitter.removeAllListeners(eventName);
    }

    static send(eventName: string, ...args: any[]): void {
        const networkEventName = this.getNetworkEventName(eventName);
        const parsedArgs = args.map((arg) => {
            if (arg instanceof Entity) {
                return arg.remoteId();
            }
            return arg;
        });

        EventLogger.logEvent('NETWORK', eventName, ...parsedArgs);
        this.api.emitNet(networkEventName, ...parsedArgs);
    }
}

export class LocalEventUtils {
    private static api: api = {
        onNet: (eventName: string, handler: Function) => onNet(eventName, handler),
        emitNet: (eventName: string, ...args: any[]) => emitNet(eventName, ...args),
        on: (eventName: string, handler: Function) => on(eventName, handler),
        emit: (eventName: string, ...args: any[]) => emit(eventName, ...args),
    };

    private static setupListener(eventName: string): void {
        const {events, emitter} = EventRegistry.getLocalRegistry();

        if (!events.has(eventName)) {
            events.add(eventName);

            const handler = (...args: any[]) => {
                const parsedArgs = EventParsingUtils.parseAllArguments(args);
                emitter.emit(eventName, ...parsedArgs);
                EventLogger.logEvent('LOCAL', eventName, ...args);
            };

            this.api.on(eventName, handler);
        }
    }

    static registerEvent<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
        this.setupListener(eventName);
        const {emitter} = EventRegistry.getLocalRegistry();
        emitter.on(eventName, callback);
    }

    static registerEventOnce<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
        this.setupListener(eventName);
        const {emitter} = EventRegistry.getLocalRegistry();
        emitter.once(eventName, callback);
    }

    static removeListener<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
        const {emitter} = EventRegistry.getLocalRegistry();
        emitter.off(eventName, callback);
    }

    static removeAllListeners(eventName?: string): void {
        const {emitter} = EventRegistry.getLocalRegistry();
        emitter.removeAllListeners(eventName);
    }

    static send(eventName: string, ...args: any[]): void {
        EventLogger.logEvent('LOCAL', eventName, ...args);
        this.api.emit(eventName, ...args);
    }
}