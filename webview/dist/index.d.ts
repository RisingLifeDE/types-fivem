export declare class api {
    /**
     * This should be replaced if we send the event to another resource instead of the current.
     */
    static targetResource: string | undefined;
    /**
     * This should be replaced if this web view isn't a framed element.
     *
     * For more details look at the README file.
     */
    static viewId: string | undefined;
    static readonly eventListeners: Map<any, any>;
    static isNui(): boolean;
    static emit(eventName: string, ...args: any[]): void;
    static on(eventName: string, listener: (...args: any[]) => void): void;
    static off(eventName: string, listener: (...args: any[]) => void): void;
    static once(eventName: string, listener: (...args: any[]) => void): void;
    /**
     * This function handles the listener system.
     * Do not use it!
     *
     * @param event
     */
    private static handleMessage;
    private static getViewId;
    private static getTargetResource;
}
