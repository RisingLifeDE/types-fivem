import { Vector3, IEntity } from '@risinglife/fivem-shared';
export function invokeNative(hash, ...args) {
    return Citizen.invokeNative(hash, ...args);
}
export function startProfiling(name) {
    Citizen.startProfiling(name);
}
export function stopProfiling(name) {
    return Citizen.stopProfiling(name);
}
export var events;
(function (events_1) {
    class EventEmitter {
        listeners = new Map();
        on(eventName, callback) {
            if (!this.listeners.has(eventName)) {
                this.listeners.set(eventName, []);
            }
            this.listeners.get(eventName).push(callback);
        }
        once(eventName, callback) {
            const onceWrapper = (...args) => {
                this.off(eventName, onceWrapper);
                callback(...args);
            };
            this.on(eventName, onceWrapper);
        }
        emit(eventName, ...args) {
            const callbacks = this.listeners.get(eventName);
            if (callbacks) {
                callbacks.forEach((callback) => {
                    try {
                        callback(...args);
                    }
                    catch (error) {
                        EventLogger.logError(eventName, error);
                    }
                });
            }
        }
        off(eventName, callback) {
            const callbacks = this.listeners.get(eventName);
            if (callbacks) {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
            }
        }
        removeAllListeners(eventName) {
            if (eventName) {
                this.listeners.delete(eventName);
            }
            else {
                this.listeners.clear();
            }
        }
    }
    class EventParsingUtils {
        static parseArgument(arg) {
            if (typeof arg === 'string') {
                try {
                    return JSON.parse(arg);
                }
                catch {
                    return arg;
                }
            }
            if (Array.isArray(arg)) {
                return arg.map((item) => this.parseArgument(item));
            }
            if (arg && typeof arg === 'object') {
                const result = {};
                for (const [key, value] of Object.entries(arg)) {
                    result[key] = this.parseArgument(value);
                }
                return result;
            }
            return arg;
        }
        static parseAllArguments(args) {
            return args.map((arg) => this.parseArgument(arg));
        }
    }
    class EventRegistry {
        static networkEvents = new Set();
        static localEvents = new Set();
        static networkEmitter = new EventEmitter();
        static localEmitter = new EventEmitter();
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
        static logErrors = true;
        static logEvents = false;
        static logEvent(type, eventName, ...args) {
            if (this.logEvents)
                console.log(`[${type}] ${eventName}`, ...args);
        }
        static logError(eventName, error) {
            if (this.logErrors)
                console.error(`Error in event handler for "${eventName}":`, error);
        }
    }
    class RemoteEventUtils {
        static api = {
            // @ts-ignore
            onNet: (eventName, handler) => onNet(eventName, handler),
            // @ts-ignore
            emitNet: (eventName, ...args) => emitNet(eventName, ...args),
            // @ts-ignore
            on: (eventName, handler) => addEventListener(eventName, handler),
            // @ts-ignore
            emit: (eventName, ...args) => TriggerEvent(eventName, ...args),
        };
        static getNetworkEventName(eventName) {
            return eventName.startsWith('net::') ? eventName : `net::${eventName}`;
        }
        static setupListener(eventName) {
            const { events, emitter } = EventRegistry.getNetworkRegistry();
            const networkEventName = this.getNetworkEventName(eventName);
            if (!events.has(eventName)) {
                events.add(eventName);
                const handler = (...args) => {
                    const parsedArgs = EventParsingUtils.parseAllArguments(args);
                    emitter.emit(eventName, ...parsedArgs);
                    EventLogger.logEvent('NETWORK', eventName, ...args);
                };
                this.api.onNet(networkEventName, handler);
            }
        }
        static registerEvent(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.on(eventName, callback);
        }
        static registerEventOnce(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.once(eventName, callback);
        }
        static removeListener(eventName, callback) {
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.off(eventName, callback);
        }
        static removeAllListeners(eventName) {
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.removeAllListeners(eventName);
        }
        static send(eventName, ...args) {
            const networkEventName = this.getNetworkEventName(eventName);
            const parsedArgs = args.map((arg) => {
                if (arg instanceof IEntity) {
                    return arg.remoteId();
                }
                return arg;
            });
            EventLogger.logEvent('NETWORK', eventName, ...parsedArgs);
            this.api.emitNet(networkEventName, ...parsedArgs);
        }
    }
    class LocalEventUtils {
        static api = {
            // @ts-ignore
            onNet: (eventName, handler) => onNet(eventName, handler),
            // @ts-ignore
            emitNet: (eventName, ...args) => emitNet(eventName, ...args),
            // @ts-ignore
            on: (eventName, handler) => addEventListener(eventName, handler),
            // @ts-ignore
            emit: (eventName, ...args) => TriggerEvent(eventName, ...args),
        };
        static setupListener(eventName) {
            const { events, emitter } = EventRegistry.getLocalRegistry();
            if (!events.has(eventName)) {
                events.add(eventName);
                const handler = (...args) => {
                    const parsedArgs = EventParsingUtils.parseAllArguments(args);
                    emitter.emit(eventName, ...parsedArgs);
                    EventLogger.logEvent('LOCAL', eventName, ...args);
                };
                this.api.on(eventName, handler);
            }
        }
        static registerEvent(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.on(eventName, callback);
        }
        static registerEventOnce(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.once(eventName, callback);
        }
        static removeListener(eventName, callback) {
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.off(eventName, callback);
        }
        static removeAllListeners(eventName) {
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.removeAllListeners(eventName);
        }
        static send(eventName, ...args) {
            const parsedArgs = args.map((arg) => {
                if (arg instanceof IEntity) {
                    return arg.remoteId();
                }
                return arg;
            });
            EventLogger.logEvent('LOCAL', eventName, ...parsedArgs);
            this.api.emit(eventName, ...parsedArgs);
        }
    }
    function removeAllListeners(key) {
        LocalEventUtils.removeAllListeners(key);
        RemoteEventUtils.removeAllListeners(key);
    }
    events_1.removeAllListeners = removeAllListeners;
    /**
     * Enable or disable the error event logging.
     * Default state: true
     *
     * @param value Is the new state
     */
    function setLogEventErrors(value) {
        EventLogger.logErrors = value;
    }
    events_1.setLogEventErrors = setLogEventErrors;
    /**
     * Enable or disable the event logging.
     * This could be helpful when you have to debug some errors.
     *
     * Default state: false
     *
     * @param value Is the new state
     */
    function setLogEvents(value) {
        EventLogger.logEvents = value;
    }
    events_1.setLogEvents = setLogEvents;
    /**
     * Registers a listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function on(key, callback) {
        LocalEventUtils.registerEvent(key, callback);
    }
    events_1.on = on;
    /**
     * Registers a onetime listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function once(key, callback) {
        LocalEventUtils.registerEventOnce(key, callback);
    }
    events_1.once = once;
    /**
     * Removes a listener for a local emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function off(key, callback) {
        LocalEventUtils.removeListener(key, callback);
    }
    events_1.off = off;
    /**
     * Registers a listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onClient(key, callback) {
        RemoteEventUtils.registerEvent(key, callback);
    }
    events_1.onClient = onClient;
    /**
     * Registers a onetime listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onceClient(key, callback) {
        RemoteEventUtils.registerEventOnce(key, callback);
    }
    events_1.onceClient = onceClient;
    /**
     * Removes a listener for a client emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function offClient(key, callback) {
        RemoteEventUtils.removeListener(key, callback);
    }
    events_1.offClient = offClient;
    /**
     * Sends data local, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    function emit(key, ...args) {
        LocalEventUtils.send(key, ...args);
    }
    events_1.emit = emit;
    /**
     * Sends data to a client, which can be listened by any resource
     * @param key The event key
     * @param target The target client
     * @param args All parameters
     */
    function emitClient(key, target, ...args) {
        RemoteEventUtils.send(key, target, ...args);
    }
    events_1.emitClient = emitClient;
    // Implementations
    /**
     * Will be triggered when the resource list was refreshed
     */
    function onResourceListRefresh(callback) {
        on("onResourceListRefresh", () => {
            callback();
        });
    }
    events_1.onResourceListRefresh = onResourceListRefresh;
    /**
     * Will be triggered when a resource is started
     */
    function onResourceStart(callback) {
        on("onResourceStart", (name) => {
            callback(name);
        });
    }
    events_1.onResourceStart = onResourceStart;
    /**
     * Will be triggered when a resource is being starting
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onResourceStarting(callback) {
        on("onResourceStarting", (name) => {
            callback(name);
        });
    }
    events_1.onResourceStarting = onResourceStarting;
    /**
     * Will be triggered when a resource is being stopped
     */
    function onResourceStop(callback) {
        on("onResourceStop", (name) => {
            callback(name);
        });
    }
    events_1.onResourceStop = onResourceStop;
    /**
     * Will be triggered when an entity is being created.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onEntityCreating(callback) {
        on("entityCreating", (handle) => {
            callback(handle);
        });
    }
    events_1.onEntityCreating = onEntityCreating;
    /**
     * Will be triggered when an entity has been created.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onEntityCreated(callback) {
        on("entityCreated", (handle) => {
            callback(handle);
        });
    }
    events_1.onEntityCreated = onEntityCreated;
    /**
     * Will be triggered when an entity is removed on the server.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onEntityRemoved(callback) {
        on("entityRemoved", (handle) => {
            callback(handle);
        });
    }
    events_1.onEntityRemoved = onEntityRemoved;
    /**
     * Will be triggered when a player connects
     */
    function onPlayerConnecting(callback) {
        on("playerConnecting", (playerName, setKickReason, deferrals, source) => {
            callback(playerName, setKickReason, deferrals, source);
        });
    }
    events_1.onPlayerConnecting = onPlayerConnecting;
    /**
     * Will be triggered when a player joins
     */
    function onPlayerJoining(callback) {
        on("playerJoining", (source, oldID) => {
            callback(source, oldID);
        });
    }
    events_1.onPlayerJoining = onPlayerJoining;
    /**
     * Will be triggered when a player enters a scope
     */
    function onPlayerEnteredScope(callback) {
        on('playerEnteredScope', (data) => {
            callback(data);
        });
    }
    events_1.onPlayerEnteredScope = onPlayerEnteredScope;
    /**
     * Will be triggered when a player left a scope
     */
    function onPlayerLeftScope(callback) {
        on("playerLeftScope", (data) => {
            callback(data);
        });
    }
    events_1.onPlayerLeftScope = onPlayerLeftScope;
    /**
     * Will be triggered when a particle fx (ptFx) is created.
     */
    function onPtFxEvent(callback) {
        on("ptFxEvent", (sender, data) => {
            callback(sender, data);
        });
    }
    events_1.onPtFxEvent = onPtFxEvent;
    /**
     * Will be triggered when a player removes all weapons from a ped owned by another player.
     */
    function onRemoveAllWeaponsEvent(callback) {
        on("removeAllWeaponsEvent", (sender, data) => {
            callback(sender, data);
        });
    }
    events_1.onRemoveAllWeaponsEvent = onRemoveAllWeaponsEvent;
    /**
     * Will be triggered when a projectile is created.
     */
    function onStartProjectileEvent(callback) {
        on("startProjectileEvent", (sender, data) => {
            callback(sender, data);
        });
    }
    events_1.onStartProjectileEvent = onStartProjectileEvent;
    /**
     * Will be triggered when a client wants to apply damage to a remotely-owned entity.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onWeaponDamageEvent(callback) {
        on("weaponDamageEvent", (sender, data) => {
            callback(sender, data);
        });
    }
    events_1.onWeaponDamageEvent = onWeaponDamageEvent;
})(events || (events = {}));
// All below is auto-generated code
export var entity;
(function (entity_1) {
    /**
     * No comment provided
     *
     * Hash: 0x91B38FB6
     */
    function getRemoteSyncedScenesAllowed(entity) {
        return GetEntityRemoteSyncedScenesAllowed(entity);
    }
    entity_1.getRemoteSyncedScenesAllowed = getRemoteSyncedScenesAllowed;
    /**
     * Enables or disables the owner check for the specified entity in network-synchronized scenes. When set to `false`, the entity cannot participate in synced scenes initiated by clients that do not own the entity.
     *
     * By default, this is `false` for all entities, meaning only the entity's owner can include it in networked synchronized scenes.
     *
     * Hash: 0xD3FC9D88
     */
    function setRemoteSyncedScenesAllowed(entity, allow) {
        SetEntityRemoteSyncedScenesAllowed(entity, allow);
    }
    entity_1.setRemoteSyncedScenesAllowed = setRemoteSyncedScenesAllowed;
    /**
     * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
     *
     * Hash: 0xEDBE6ADD
     */
    function isPositionFrozen(entity) {
        return IsEntityPositionFrozen(entity);
    }
    entity_1.isPositionFrozen = isPositionFrozen;
    /**
     * ```cpp
     * enum eApplyForceTypes {
     * APPLY_TYPE_FORCE = 0,
     * APPLY_TYPE_IMPULSE = 1,
     * APPLY_TYPE_EXTERNAL_FORCE = 2,
     * APPLY_TYPE_EXTERNAL_IMPULSE = 3,
     * APPLY_TYPE_TORQUE = 4,
     * APPLY_TYPE_ANGULAR_IMPULSE = 5
     * }
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [APPLY_FORCE_TO_ENTITY](?\_0xC5F68BE9613E2D18).</strong>
     *
     * Hash: 0xC1C0855A
     */
    function applyForceTo(entity, forceType, pos, offX, offY, offZ, nComponent, bLocalForce, bLocalOffset, bScaleByMass, bPlayAudio, bScaleByTimeWarp) {
        ApplyForceToEntity(entity, forceType, pos.x, pos.y, pos.z, offX, offY, offZ, nComponent, bLocalForce, bLocalOffset, bScaleByMass, bPlayAudio, bScaleByTimeWarp);
    }
    entity_1.applyForceTo = applyForceTo;
    /**
     * Deletes the specified entity.
     *
     * **NOTE**: For trains this will only work if called on the train engine, it will not work on its carriages.
     *
     * Hash: 0xFAA3D236
     */
    function deleteEntity(entity) {
        DeleteEntity(entity);
    }
    entity_1.deleteEntity = deleteEntity;
    /**
     * No comment provided
     *
     * Hash: 0x3AC90869
     */
    function doesExist(entity) {
        return DoesEntityExist(entity);
    }
    entity_1.doesExist = doesExist;
    /**
     * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [FREEZE_ENTITY_POSITION](?\_0x428CA6DBD1094446).</strong>
     *
     * Hash: 0x65C16D57
     */
    function freezePosition(entity, toggle) {
        FreezeEntityPosition(entity, toggle);
    }
    entity_1.freezePosition = freezePosition;
    /**
     * Gets the entity that this entity is attached to.
     *
     * Hash: 0xFE1589F9
     */
    function getAttachedTo(entity) {
        return GetEntityAttachedTo(entity);
    }
    entity_1.getAttachedTo = getAttachedTo;
    /**
     * No comment provided
     *
     * Hash: 0xE8C0C629
     */
    function getCollisionDisabled(entity) {
        return GetEntityCollisionDisabled(entity);
    }
    entity_1.getCollisionDisabled = getCollisionDisabled;
    /**
     * Gets the current coordinates for a specified entity. This native is used server side when using OneSync.
     *
     * See [GET_ENTITY_COORDS](#\_0x3FEF770D40960D5A) for client side.
     *
     * Hash: 0x1647F1CB
     */
    function getCoords(entity) {
        return new Vector3(GetEntityCoords(entity));
    }
    entity_1.getCoords = getCoords;
    /**
     * No comment provided
     *
     * Hash: 0x972CC383
     */
    function getHeading(entity) {
        return GetEntityHeading(entity);
    }
    entity_1.getHeading = getHeading;
    /**
     * Only works for vehicle and peds
     *
     * Hash: 0x8E3222B7
     */
    function getHealth(entity) {
        return GetEntityHealth(entity);
    }
    entity_1.getHealth = getHealth;
    /**
     * Currently it only works with peds.
     *
     * Hash: 0xC7AE6AA1
     */
    function getMaxHealth(entity) {
        return GetEntityMaxHealth(entity);
    }
    entity_1.getMaxHealth = getMaxHealth;
    /**
     * No comment provided
     *
     * Hash: 0xDAFCB3EC
     */
    function getModel(entity) {
        return GetEntityModel(entity);
    }
    entity_1.getModel = getModel;
    /**
     * No comment provided
     *
     * Hash: 0xD16EA02F
     */
    function getOrphanMode(entity) {
        return GetEntityOrphanMode(entity);
    }
    entity_1.getOrphanMode = getOrphanMode;
    /**
     * This native gets an entity's population type.
     *
     * Hash: 0xFC30DDFF
     */
    function getPopulationType(entity) {
        return GetEntityPopulationType(entity);
    }
    entity_1.getPopulationType = getPopulationType;
    /**
     * No comment provided
     *
     * Hash: 0x8FF45B04
     */
    function getRotation(entity) {
        return new Vector3(GetEntityRotation(entity));
    }
    entity_1.getRotation = getRotation;
    /**
     * No comment provided
     *
     * Hash: 0x9BF8A73F
     */
    function getRotationVelocity(entity) {
        return new Vector3(GetEntityRotationVelocity(entity));
    }
    entity_1.getRotationVelocity = getRotationVelocity;
    /**
     * Gets the routing bucket for the specified entity.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0xED4B0486
     */
    function getRoutingBucket(entity) {
        return GetEntityRoutingBucket(entity);
    }
    entity_1.getRoutingBucket = getRoutingBucket;
    /**
     * No comment provided
     *
     * Hash: 0xB7F70784
     */
    function getScript(entity) {
        return GetEntityScript(entity);
    }
    entity_1.getScript = getScript;
    /**
     * Gets the current speed of the entity in meters per second.
     *
     * ```
     * To convert to MPH: speed * 2.236936
     * To convert to KPH: speed * 3.6
     * ```
     *
     * Hash: 0x9E1E4798
     */
    function getSpeed(entity) {
        return GetEntitySpeed(entity);
    }
    entity_1.getSpeed = getSpeed;
    /**
     * Gets the entity type (as an integer), which can be one of the following defined down below:
     *
     * <strong>The following entities will return type `1`:</strong>
     *
     * *   Ped
     * *   Player
     * *   Animal (Red Dead Redemption 2)
     * *   Horse (Red Dead Redemption 2)
     *
     * <strong>The following entities will return type `2`:</strong>
     *
     * *   Automobile
     * *   Bike
     * *   Boat
     * *   Heli
     * *   Plane
     * *   Submarine
     * *   Trailer
     * *   Train
     * *   DraftVeh (Red Dead Redemption 2)
     *
     * <strong>The following entities will return type `3`:</strong>
     *
     * *   Object
     * *   Door
     * *   Pickup
     *
     * Otherwise, a value of `0` will be returned.
     *
     * Hash: 0xB1BD08D
     */
    function getType(entity) {
        return GetEntityType(entity);
    }
    entity_1.getType = getType;
    /**
     * No comment provided
     *
     * Hash: 0xC14C9B6B
     */
    function getVelocity(entity) {
        return new Vector3(GetEntityVelocity(entity));
    }
    entity_1.getVelocity = getVelocity;
    /**
     * Gets the specific entity type (as an integer), which can be one of the following defined down below:
     *
     * #### FiveM:
     *
     * ```cpp
     * enum eNetObjEntityType
     * {
     * Automobile = 0,
     * Bike = 1,
     * Boat = 2,
     * Door = 3,
     * Heli = 4,
     * Object = 5,
     * Ped = 6,
     * Pickup = 7,
     * PickupPlacement = 8,
     * Plane = 9,
     * Submarine = 10,
     * Player = 11,
     * Trailer = 12,
     * Train = 13
     * };
     * ```
     *
     * #### RedM:
     *
     * ```cpp
     * enum eNetObjEntityType
     * {
     * Animal = 0,
     * Automobile = 1,
     * Bike = 2,
     * Boat = 3,
     * Door = 4,
     * Heli = 5,
     * Object = 6,
     * Ped = 7,
     * Pickup = 8,
     * PickupPlacement = 9,
     * Plane = 10,
     * Submarine = 11,
     * Player = 12,
     * Trailer = 13,
     * Train = 14,
     * DraftVeh = 15,
     * StatsTracker = 16,
     * PropSet = 17,
     * AnimScene = 18,
     * GroupScenario = 19,
     * Herd = 20,
     * Horse = 21,
     * WorldState = 22,
     * WorldProjectile = 23,
     * Incident = 24,
     * Guardzone = 25,
     * PedGroup = 26,
     * CombatDirector = 27,
     * PedSharedTargeting = 28,
     * Persistent = 29
     * };
     * ```
     *
     * Hash: 0x23B2A641
     */
    function getNetTypeFrom(entity) {
        return GetNetTypeFromEntity(entity);
    }
    entity_1.getNetTypeFrom = getNetTypeFrom;
    /**
     * No comment provided
     *
     * Hash: 0x9C9A3BE0
     */
    function hasBeenMarkedAsNoLongerNeeded(vehicle) {
        return HasEntityBeenMarkedAsNoLongerNeeded(vehicle);
    }
    entity_1.hasBeenMarkedAsNoLongerNeeded = hasBeenMarkedAsNoLongerNeeded;
    /**
     * This native checks if the given entity is visible.
     *
     * Hash: 0x120B4ED5
     */
    function isVisible(entity) {
        return IsEntityVisible(entity);
    }
    entity_1.isVisible = isVisible;
    /**
     * Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_COORDS](?\_0x06843DA7060A026B).</strong>
     *
     * Hash: 0xDF70B41B
     */
    function setCoords(entity, pos, alive, deadFlag, ragdollFlag, clearArea) {
        SetEntityCoords(entity, pos.x, pos.y, pos.z, alive, deadFlag, ragdollFlag, clearArea);
    }
    entity_1.setCoords = setCoords;
    /**
     * It overrides the default distance culling radius of an entity. Set to `0.0` to reset.
     * If you want to interact with an entity outside of your players' scopes set the radius to a huge number.
     *
     * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
     *
     * Hash: 0xD3A183A3
     */
    function setDistanceCullingRadius(entity, radius) {
        SetEntityDistanceCullingRadius(entity, radius);
    }
    entity_1.setDistanceCullingRadius = setDistanceCullingRadius;
    /**
     * Set the heading of an entity in degrees also known as "Yaw".
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_HEADING](?\_0x8E2530AA8ADA980E).</strong>
     *
     * Hash: 0xE0FF064D
     */
    function setHeading(entity, heading) {
        SetEntityHeading(entity, heading);
    }
    entity_1.setHeading = setHeading;
    /**
     * It allows to flag an entity to ignore the request control filter policy.
     *
     * Hash: 0x9F7F8D36
     */
    function setIgnoreRequestControlFilter(entity, ignore) {
        SetEntityIgnoreRequestControlFilter(entity, ignore);
    }
    entity_1.setIgnoreRequestControlFilter = setIgnoreRequestControlFilter;
    /**
     * ```cpp
     * enum EntityOrphanMode {
     * // Default, this will delete the entity when it isn't relevant to any players
     * // NOTE: this *doesn't* mean when they're no longer in scope
     * DeleteWhenNotRelevant = 0,
     * // The entity will be deleted whenever its original owner disconnects
     * // NOTE: if this is set when the entities original owner has already left it will be
     * // marked for deletion (similar to just calling DELETE_ENTITY)
     * DeleteOnOwnerDisconnect = 1,
     * // The entity will never be deleted by the server when it does relevancy checks
     * // you should only use this on entities that need to be relatively persistent
     * KeepEntity = 2
     * }
     * ```
     *
     * Sets what the server will do when the entity no longer has its original owner. By default the server will cleanup entities that it considers "no longer relevant".
     *
     * When used on trains, this native will recursively call onto all attached carriages.
     *
     * **NOTE**: When used with `KeepEntity` (2) this native only guarantees that the ***server*** will not delete the entity, client requests to delete the entity will still work perfectly fine.
     *
     * Hash: 0x489E9162
     */
    function setOrphanMode(entity, orphanMode) {
        SetEntityOrphanMode(entity, orphanMode);
    }
    entity_1.setOrphanMode = setOrphanMode;
    /**
     * Sets the rotation of a specified entity in the game world.
     *
     * ```
     * NativeDB Introduced: v323
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_ROTATION](?\_0x8524A8B0171D5E07).</strong>
     *
     * Hash: 0xA345EFE
     */
    function setRotation(entity, pitch, roll, yaw, rotationOrder, bDeadCheck) {
        SetEntityRotation(entity, pitch, roll, yaw, rotationOrder, bDeadCheck);
    }
    entity_1.setRotation = setRotation;
    /**
     * Sets the routing bucket for the specified entity.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0x635E5289
     */
    function setRoutingBucket(entity, bucket) {
        SetEntityRoutingBucket(entity, bucket);
    }
    entity_1.setRoutingBucket = setRoutingBucket;
    /**
     * ```
     * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_VELOCITY](?\_0x1C99BB7B6E96D16F).</strong>
     *
     * Hash: 0xFF5A1988
     */
    function setVelocity(entity, pos) {
        SetEntityVelocity(entity, pos.x, pos.y, pos.z);
    }
    entity_1.setVelocity = setVelocity;
    /**
     * Internal function for ensuring an entity has a state bag.
     *
     * Hash: 0x3BB78F05
     */
    function ensureStateBag(entity) {
        EnsureEntityStateBag(entity);
    }
    entity_1.ensureStateBag = ensureStateBag;
    /**
     * ### Supported types
     *
     * *   \[1] : Peds (including animals) and players.
     * *   \[2] : Vehicles.
     * *   \[3] : Objects (props), doors, and projectiles.
     *
     * ### Coordinates need to be send unpacked (x,y,z)
     *
     * ```lua
     *
     * -- Define the allowed model hashes
     * local allowedModelHashes = { GetHashKey("p_crate03x"), GetHashKey("p_crate22x") }
     *
     * -- Get the player's current coordinates
     * local playerCoords = GetEntityCoords(PlayerPedId())
     *
     * -- Retrieve all entities of type Object (type 3) within a radius of 10.0 units
     * -- that match the allowed model hashes
     * -- and sort output entities by distance
     * local entities = GetEntitiesInRadius(playerCoords.x, playerCoords.y, playerCoords.z, 10.0, 3, true, allowedModelHashes)
     *
     * -- Iterate through the list of entities and print their ids
     * for i = 1, #entities do
     * local entity = entities[i]
     * print(entity)
     * end
     *
     * ```
     *
     * Hash: 0xDFFBA12F
     */
    function getEntitiesInRadius(pos, radius, entityType, sortByDistance, models) {
        return GetEntitiesInRadius(pos.x, pos.y, pos.z, radius, entityType, sortByDistance, models);
    }
    entity_1.getEntitiesInRadius = getEntitiesInRadius;
    /**
     * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
     *
     * Hash: 0x4BDF1867
     */
    function getFromStateBagName(bagName) {
        return GetEntityFromStateBagName(bagName);
    }
    entity_1.getFromStateBagName = getFromStateBagName;
})(entity || (entity = {}));
export var hud;
(function (hud) {
    /**
     * Creates a blip for the specified coordinates. You can use `SET_BLIP_` natives to change the blip.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_COORD](?\_0x5A039BB0BCA604B6).</strong>
     *
     * Hash: 0xC6F43D0E
     */
    function addBlipForCoord(pos) {
        return AddBlipForCoord(pos.x, pos.y, pos.z);
    }
    hud.addBlipForCoord = addBlipForCoord;
    /**
     * Create a blip that by default is red (enemy), you can use [SET_BLIP_AS_FRIENDLY](#\_0xC6F43D0E) to make it blue (friend).\
     * Can be used for objects, vehicles and peds.
     * Example of enemy:
     * ![enemy](https://i.imgur.com/fl78svv.png)
     * Example of friend:
     * ![friend](https://i.imgur.com/Q16ho5d.png)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_ENTITY](?\_0x5CDE92C702A8FCE7).</strong>
     *
     * Hash: 0x30822554
     */
    function addBlipForEntity(entity) {
        return AddBlipForEntity(entity);
    }
    hud.addBlipForEntity = addBlipForEntity;
    /**
     * Create a blip with a radius for the specified coordinates (it doesnt create the blip sprite, so you need to use [AddBlipCoords](#\_0xC6F43D0E))
     * Example image:
     * ![example](https://i.imgur.com/9hQl3DB.png)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_RADIUS](?\_0x46818D79B1F7499A).</strong>
     *
     * Hash: 0x4626756C
     */
    function addBlipForRadius(pos, radius) {
        return AddBlipForRadius(pos.x, pos.y, pos.z, radius);
    }
    hud.addBlipForRadius = addBlipForRadius;
    /**
     * Removes the blip from your map.
     * **Note:** This function only works on the script that created the blip, if you wish to remove blips created by other scripts, see [`SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT`](#\_0x86A652570E5F25DD).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_BLIP](?\_0x86A652570E5F25DD).</strong>
     *
     * Hash: 0xD8C3C1CD
     */
    function removeBlip(blip) {
        RemoveBlip(blip);
    }
    hud.removeBlip = removeBlip;
    /**
     * Sets the displayed sprite for a specific blip.
     * There's a [list of sprites](https://docs.fivem.net/game-references/blips/) on the FiveM documentation site.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_BLIP_SPRITE](?\_0xDF735600A4696DAF).</strong>
     *
     * Hash: 0x8DBBB0B9
     */
    function setBlipSprite(blip, spriteId) {
        SetBlipSprite(blip, spriteId);
    }
    hud.setBlipSprite = setBlipSprite;
    /**
     * Adds a rectangular blip for the specified coordinates/area.
     * It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
     * By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
     * Example image:
     * ![minimap](https://i.imgur.com/qLbXWcQ.png)
     * ![big map](https://i.imgur.com/0j7O7Rh.png)
     * (Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [\_ADD_BLIP_FOR_AREA](?\_0xCE5D0E5E315DB238).</strong>
     *
     * Hash: 0x6228F159
     */
    function addBlipForArea(pos, width, height) {
        return AddBlipForArea(pos.x, pos.y, pos.z, width, height);
    }
    hud.addBlipForArea = addBlipForArea;
})(hud || (hud = {}));
export var misc;
(function (misc) {
    /**
     * No comment provided
     *
     * Hash: 0xF97B1C93
     */
    function enableEnhancedHostSupport(enabled) {
        EnableEnhancedHostSupport(enabled);
    }
    misc.enableEnhancedHostSupport = enableEnhancedHostSupport;
    /**
     * No comment provided
     *
     * Hash: 0x13B6855D
     */
    function flagServerAsPrivate(private_) {
        FlagServerAsPrivate(private_);
    }
    misc.flagServerAsPrivate = flagServerAsPrivate;
    /**
     * Returns the current console output buffer.
     *
     * Hash: 0xE57429FA
     */
    function getConsoleBuffer() {
        return GetConsoleBuffer();
    }
    misc.getConsoleBuffer = getConsoleBuffer;
    /**
     * Gets the current game timer in milliseconds.
     *
     * Hash: 0xA4EA0691
     */
    function getGameTimer() {
        return GetGameTimer();
    }
    misc.getGameTimer = getGameTimer;
    /**
     * This native converts the passed string to a hash.
     *
     * Hash: 0x98EFF6F1
     */
    function getHashKey(model) {
        return GetHashKey(model);
    }
    misc.getHashKey = getHashKey;
    /**
     * No comment provided
     *
     * Hash: 0xF01E2AAB
     */
    function getHeliMainRotorHealth(vehicle) {
        return GetHeliMainRotorHealth(vehicle);
    }
    misc.getHeliMainRotorHealth = getHeliMainRotorHealth;
    /**
     * No comment provided
     *
     * Hash: 0x5F70F5A3
     */
    function getHostId() {
        return GetHostId();
    }
    misc.getHostId = getHostId;
    /**
     * No comment provided
     *
     * Hash: 0x23473EA4
     */
    function getPasswordHash(password) {
        return GetPasswordHash(password);
    }
    misc.getPasswordHash = getPasswordHash;
    /**
     * No comment provided
     *
     * Hash: 0x76876154
     */
    function isFlashLightOn(ped) {
        return IsFlashLightOn(ped);
    }
    misc.isFlashLightOn = isFlashLightOn;
    /**
     * No comment provided
     *
     * Hash: 0x8E8CC653
     */
    function performHttpRequestInternal(requestData, requestDataLength) {
        return PerformHttpRequestInternal(requestData, requestDataLength);
    }
    misc.performHttpRequestInternal = performHttpRequestInternal;
    /**
     * No comment provided
     *
     * Hash: 0x6B171E87
     */
    function performHttpRequestInternalEx(requestData) {
        return PerformHttpRequestInternalEx(requestData);
    }
    misc.performHttpRequestInternalEx = performHttpRequestInternalEx;
    /**
     * Prints 'structured trace' data to the server `file descriptor 3` channel. This is not generally useful outside of
     * server monitoring utilities.
     *
     * Hash: 0x90892DED
     */
    function printStructuredTrace(jsonString) {
        PrintStructuredTrace(jsonString);
    }
    misc.printStructuredTrace = printStructuredTrace;
    /**
     * Registers a listener for console output messages.
     *
     * Hash: 0x281B5448
     */
    function registerConsoleListener(listener) {
        RegisterConsoleListener(listener);
    }
    misc.registerConsoleListener = registerConsoleListener;
    /**
     * No comment provided
     *
     * Hash: 0x341B16D2
     */
    function setConvar(varName, value) {
        SetConvar(varName, value);
    }
    misc.setConvar = setConvar;
    /**
     * Used to replicate a server variable onto clients.
     *
     * Hash: 0xF292858C
     */
    function setConvarReplicated(varName, value) {
        SetConvarReplicated(varName, value);
    }
    misc.setConvarReplicated = setConvarReplicated;
    /**
     * No comment provided
     *
     * Hash: 0x9338D547
     */
    function setConvarServerInfo(varName, value) {
        SetConvarServerInfo(varName, value);
    }
    misc.setConvarServerInfo = setConvarServerInfo;
    /**
     * No comment provided
     *
     * Hash: 0xF90B7469
     */
    function setGameType(gametypeName) {
        SetGameType(gametypeName);
    }
    misc.setGameType = setGameType;
    /**
     * Sets the handler for HTTP requests made to the executing resource.
     *
     * Example request URL: `http://localhost:30120/http-test/ping` - this request will be sent to the `http-test` resource with the `/ping` path.
     *
     * The handler function assumes the following signature:
     *
     * ```ts
     * function HttpHandler(
     * request: {
     * address: string;
     * headers: Record<string, string>;
     * method: string;
     * path: string;
     * setDataHandler(handler: (data: string) => void): void;
     * setDataHandler(handler: (data: ArrayBuffer) => void, binary: 'binary'): void;
     * setCancelHandler(handler: () => void): void;
     * },
     * response: {
     * writeHead(code: number, headers?: Record<string, string | string[]>): void;
     * write(data: string): void;
     * send(data?: string): void;
     * }
     * ): void;
     * ```
     *
     * *   **request**: The request object.
     * *   **address**: The IP address of the request sender.
     * *   **path**: The path to where the request was sent.
     * *   **headers**: The headers sent with the request.
     * *   **method**: The request method.
     * *   **setDataHandler**: Sets the handler for when a data body is passed with the request. Additionally you can pass the `'binary'` argument to receive a `BufferArray` in JavaScript or `System.Byte[]` in C# (has no effect in Lua).
     * *   **setCancelHandler**: Sets the handler for when the request is cancelled.
     * *   **response**: An object to control the response.
     * *   **writeHead**: Sets the status code & headers of the response. Can be only called once and won't work if called after running other response functions.
     * *   **write**: Writes to the response body without sending it. Can be called multiple times.
     * *   **send**: Writes to the response body and then sends it along with the status code & headers, finishing the request.
     *
     * Hash: 0xF5C6330C
     */
    function setHttpHandler(handler) {
        SetHttpHandler(handler);
    }
    misc.setHttpHandler = setHttpHandler;
    /**
     * No comment provided
     *
     * Hash: 0xB7BA82DC
     */
    function setMapName(mapName) {
        SetMapName(mapName);
    }
    misc.setMapName = setMapName;
    /**
     * Sets the entity lockdown mode for a specific routing bucket.
     *
     * Lockdown modes are:
     *
     * | Mode       | Meaning                                                    |
     * | ---------- | ---------------------------------------------------------- |
     * | `strict`   | No entities can be created by clients at all.              |
     * | `relaxed`  | Only script-owned entities created by clients are blocked. |
     * | `inactive` | Clients can create any entity they want.                   |
     *
     * Hash: 0xA0F2201F
     */
    function setRoutingBucketEntityLockdownMode(bucketId, mode) {
        SetRoutingBucketEntityLockdownMode(bucketId, mode);
    }
    misc.setRoutingBucketEntityLockdownMode = setRoutingBucketEntityLockdownMode;
    /**
     * Sets whether or not the specified routing bucket has automatically-created population enabled.
     *
     * Hash: 0xCE51AC2C
     */
    function setRoutingBucketPopulationEnabled(bucketId, mode) {
        SetRoutingBucketPopulationEnabled(bucketId, mode);
    }
    misc.setRoutingBucketPopulationEnabled = setRoutingBucketPopulationEnabled;
    /**
     * The backing function for TriggerClientEvent.
     *
     * Hash: 0x2F7A49E6
     */
    function triggerClientEventInternal(eventName, eventTarget, eventPayload, payloadLength) {
        TriggerClientEventInternal(eventName, eventTarget, eventPayload, payloadLength);
    }
    misc.triggerClientEventInternal = triggerClientEventInternal;
    /**
     * The backing function for TriggerLatentClientEvent.
     *
     * Hash: 0x70B35890
     */
    function triggerLatentClientEventInternal(eventName, eventTarget, eventPayload, payloadLength, bps) {
        TriggerLatentClientEventInternal(eventName, eventTarget, eventPayload, payloadLength, bps);
    }
    misc.triggerLatentClientEventInternal = triggerLatentClientEventInternal;
    /**
     * No comment provided
     *
     * Hash: 0x2E310ACD
     */
    function verifyPasswordHash(password, hash) {
        return VerifyPasswordHash(password, hash);
    }
    misc.verifyPasswordHash = verifyPasswordHash;
    /**
     * Adds a listener for Console Variable changes.
     *
     * The function called expects to match the following signature:
     *
     * ```ts
     * function ConVarChangeListener(conVarName: string, reserved: any);
     * ```
     *
     * *   **conVarName**: The ConVar that changed.
     * *   **reserved**: Currently unused.
     *
     * Hash: 0xAB7F7241
     */
    function addConvarChangeListener(conVarFilter, handler) {
        return AddConvarChangeListener(conVarFilter, handler);
    }
    misc.addConvarChangeListener = addConvarChangeListener;
    /**
     * Adds a handler for changes to a state bag.
     *
     * The function called expects to match the following signature:
     *
     * ```ts
     * function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
     * ```
     *
     * *   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
     * or `localEntity:Handle`.
     * *   **key**: The changed key.
     * *   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
     * *   **reserved**: Currently unused.
     * *   **replicated**: Whether the set is meant to be replicated.
     *
     * At this time, the change handler can't opt to reject changes.
     *
     * If bagName refers to an entity, use [GET_ENTITY_FROM_STATE_BAG_NAME](#\_0x4BDF1867) to get the entity handle
     * If bagName refers to a player, use [GET_PLAYER_FROM_STATE_BAG_NAME](#\_0xA56135E0) to get the player handle
     *
     * Hash: 0x5BA35AAF
     */
    function addStateBagChangeHandler(keyFilter, bagFilter, handler) {
        return AddStateBagChangeHandler(keyFilter, bagFilter, handler);
    }
    misc.addStateBagChangeHandler = addStateBagChangeHandler;
    /**
     * Cancels the currently executing event.
     *
     * Hash: 0xFA29D35D
     */
    function cancelEvent() {
        CancelEvent();
    }
    misc.cancelEvent = cancelEvent;
    /**
     * No comment provided
     *
     * Hash: 0x1E86F206
     */
    function deleteFunctionReference(referenceIdentity) {
        DeleteFunctionReference(referenceIdentity);
    }
    misc.deleteFunctionReference = deleteFunctionReference;
    /**
     * No comment provided
     *
     * Hash: 0xF4E2079D
     */
    function duplicateFunctionReference(referenceIdentity) {
        return DuplicateFunctionReference(referenceIdentity);
    }
    misc.duplicateFunctionReference = duplicateFunctionReference;
    /**
     * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
     *
     * Hash: 0x561C060B
     */
    function executeCommand(commandString) {
        ExecuteCommand(commandString);
    }
    misc.executeCommand = executeCommand;
    /**
     * An internal function for converting a stack trace object to a string.
     *
     * Hash: 0xD70C3BCA
     */
    function formatStackTrace(traceData) {
        return FormatStackTrace(traceData);
    }
    misc.formatStackTrace = formatStackTrace;
    /**
     * Can be used to get a console variable of type `char*`, for example a string.
     *
     * Hash: 0x6CCD2564
     */
    function getConvar(varName, default_) {
        return GetConvar(varName, default_);
    }
    misc.getConvar = getConvar;
    /**
     * Can be used to get a console variable casted back to `bool`.
     *
     * Hash: 0x7E8EBFE5
     */
    function getConvarBool(varName, defaultValue) {
        return GetConvarBool(varName, defaultValue);
    }
    misc.getConvarBool = getConvarBool;
    /**
     * This will have floating point inaccuracy.
     *
     * Hash: 0x9E666D
     */
    function getConvarFloat(varName, defaultValue) {
        return GetConvarFloat(varName, defaultValue);
    }
    misc.getConvarFloat = getConvarFloat;
    /**
     * Can be used to get a console variable casted back to `int` (an integer value).
     *
     * Hash: 0x935C0AB2
     */
    function getConvarInt(varName, default_) {
        return GetConvarInt(varName, default_);
    }
    misc.getConvarInt = getConvarInt;
    /**
     * Returns the internal build number of the current game being executed.
     *
     * Possible values:
     *
     * *   FiveM
     * *   1604
     * *   2060
     * *   2189
     * *   2372
     * *   2545
     * *   2612
     * *   2699
     * *   2802
     * *   2944
     * *   3095
     * *   3258
     * *   3323
     * *   3407
     * *   3570
     * *   RedM
     * *   1311
     * *   1355
     * *   1436
     * *   1491
     * *   LibertyM
     * *   43
     * *   FXServer
     * *   0
     *
     * Hash: 0x804B9F7B
     */
    function getGameBuildNumber() {
        return GetGameBuildNumber();
    }
    misc.getGameBuildNumber = getGameBuildNumber;
    /**
     * Returns the current game being executed.
     *
     * Possible values:
     *
     * | Return value | Meaning                        |
     * | ------------ | ------------------------------ |
     * | `fxserver`   | Server-side code ('Duplicity') |
     * | `fivem`      | FiveM for GTA V                |
     * | `libertym`   | LibertyM for GTA IV            |
     * | `redm`       | RedM for Red Dead Redemption 2 |
     *
     * Hash: 0xE8EAA18B
     */
    function getGameName() {
        return GetGameName();
    }
    misc.getGameName = getGameName;
    /**
     * Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array as
     * follows:
     *
     * ```json
     * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
     * ```
     *
     * ### Supported pools
     *
     * *   `CPed`: Peds (including animals) and players.
     * *   `CObject`: Objects (props), doors, and projectiles.
     * *   `CNetObject`: Networked objects
     * *   `CVehicle`: Vehicles.
     * *   `CPickup`: Pickups.
     *
     * Hash: 0x2B9D4F50
     */
    function getGamePool(poolName) {
        return GetGamePool(poolName);
    }
    misc.getGamePool = getGamePool;
    /**
     * No comment provided
     *
     * Hash: 0x9F1C4383
     */
    function getInstanceId() {
        return GetInstanceId();
    }
    misc.getInstanceId = getInstanceId;
    /**
     * Returns all commands that are registered in the command system.
     * The data returned adheres to the following layout:
     *
     * ```
     * [
     * {
     * "name": "cmdlist",
     * "resource": "resource",
     * "arity" = -1,
     * },
     * {
     * "name": "command1"
     * "resource": "resource_2",
     * "arity" = -1,
     * }
     * ]
     * ```
     *
     * Hash: 0xD4BEF069
     */
    function getRegisteredCommands() {
        return GetRegisteredCommands();
    }
    misc.getRegisteredCommands = getRegisteredCommands;
    /**
     * No comment provided
     *
     * Hash: 0x78D864C7
     */
    function getStateBagKeys(bagName) {
        return GetStateBagKeys(bagName);
    }
    misc.getStateBagKeys = getStateBagKeys;
    /**
     * Returns the value of a state bag key.
     *
     * Hash: 0x637F4C75
     */
    function getStateBagValue(bagName, key) {
        return GetStateBagValue(bagName, key);
    }
    misc.getStateBagValue = getStateBagValue;
    /**
     * No comment provided
     *
     * Hash: 0x7EBB9929
     */
    function isAceAllowed(_object) {
        return IsAceAllowed(_object);
    }
    misc.isAceAllowed = isAceAllowed;
    /**
     * Gets whether or not this is the CitizenFX server.
     *
     * Hash: 0xCF24C52E
     */
    function isDuplicityVersion() {
        return IsDuplicityVersion();
    }
    misc.isDuplicityVersion = isDuplicityVersion;
    /**
     * No comment provided
     *
     * Hash: 0x37CF52CE
     */
    function isPrincipalAceAllowed(principal, _object) {
        return IsPrincipalAceAllowed(principal, _object);
    }
    misc.isPrincipalAceAllowed = isPrincipalAceAllowed;
    /**
     * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
     *
     * Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
     *
     * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
     *
     * **Example result**:
     *
     * ![](https://i.imgur.com/TaCnG09.png)
     *
     * Hash: 0x5FA79B0F
     */
    function registerCommand(commandName, handler, restricted) {
        RegisterCommand(commandName, handler, restricted);
    }
    misc.registerCommand = registerCommand;
    /**
     * No comment provided
     *
     * Hash: 0xEAC49841
     */
    function removeConvarChangeListener(cookie) {
        RemoveConvarChangeListener(cookie);
    }
    misc.removeConvarChangeListener = removeConvarChangeListener;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Removes a handler for changes to a state bag.
     *
     * Hash: 0xD36BE661
     */
    function removeStateBagChangeHandler(cookie) {
        RemoveStateBagChangeHandler(cookie);
    }
    misc.removeStateBagChangeHandler = removeStateBagChangeHandler;
    /**
     * Internal function for setting a state bag value.
     *
     * Hash: 0x8D50E33A
     */
    function setStateBagValue(bagName, keyName, valueData, valueLength, replicated) {
        SetStateBagValue(bagName, keyName, valueData, valueLength, replicated);
    }
    misc.setStateBagValue = setStateBagValue;
    /**
     * No comment provided
     *
     * Hash: 0x12A330
     */
    function stateBagHasKey(bagName, key) {
        return StateBagHasKey(bagName, key);
    }
    misc.stateBagHasKey = stateBagHasKey;
    /**
     * The backing function for TriggerEvent.
     *
     * Hash: 0x91310870
     */
    function triggerEventInternal(eventName, eventPayload, payloadLength) {
        TriggerEventInternal(eventName, eventPayload, payloadLength);
    }
    misc.triggerEventInternal = triggerEventInternal;
    /**
     * Returns whether or not the currently executing event was canceled.
     *
     * Hash: 0x58382A19
     */
    function wasEventCanceled() {
        return WasEventCanceled();
    }
    misc.wasEventCanceled = wasEventCanceled;
})(misc || (misc = {}));
export var ped;
(function (ped_1) {
    /**
     * ```
     * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
     * collection - PedDecorationCollection filename hash
     * overlay - Item name hash
     * Example:
     * Entry inside "mpbeach_overlays.xml" -
     * <Item>
     * <uvPos x="0.500000" y="0.500000" />
     * <scale x="0.600000" y="0.500000" />
     * <rotation value="0.000000" />
     * <nameHash>FM_Hair_Fuzz</nameHash>
     * <txdHash>mp_hair_fuzz</txdHash>
     * <txtHash>mp_hair_fuzz</txtHash>
     * <zone>ZONE_HEAD</zone>
     * <type>TYPE_TATTOO</type>
     * <faction>FM</faction>
     * <garment>All</garment>
     * <gender>GENDER_DONTCARE</gender>
     * <award />
     * <awardLevel />
     * </Item>
     * Code:
     * `PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))`
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_PED_DECORATION_FROM_HASHES](?\_0x5F5D1665E352A839).</strong>
     *
     * Hash: 0x70559AC7
     */
    function addDecorationFromHashes(ped, collection, overlay) {
        if (typeof collection === 'string')
            collection = misc.getHashKey(collection);
        if (typeof overlay === 'string')
            overlay = misc.getHashKey(overlay);
        AddPedDecorationFromHashes(ped, collection, overlay);
    }
    ped_1.addDecorationFromHashes = addDecorationFromHashes;
    /**
     * CLEAR_PED_PROP
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_PROP](?\_0x0943E5B8E078E76E).</strong>
     *
     * Hash: 0x2D23D743
     */
    function clearProp(ped, propId) {
        ClearPedProp(ped, propId);
    }
    ped_1.clearProp = clearProp;
    /**
     * CLEAR_PED_SECONDARY_TASK
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_SECONDARY_TASK](?\_0x176CECF6F920D707).</strong>
     *
     * Hash: 0xA635F451
     */
    function clearSecondaryTask(ped) {
        ClearPedSecondaryTask(ped);
    }
    ped_1.clearSecondaryTask = clearSecondaryTask;
    /**
     * Creates a ped (biped character, pedestrian, actor) with the specified model at the specified position and heading.
     * This ped will initially be owned by the creating script as a mission entity, and the model should be loaded already
     * (e.g. using REQUEST_MODEL).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED](?\_0xD49F9B0955C367DE).</strong>
     *
     * Hash: 0x389EF71
     */
    function create(pedType, modelHash, pos, heading, isNetwork, bScriptHostPed) {
        if (typeof modelHash === 'string')
            modelHash = misc.getHashKey(modelHash);
        return CreatePed(pedType, modelHash, pos.x, pos.y, pos.z, heading, isNetwork, bScriptHostPed);
    }
    ped_1.create = create;
    /**
     * CREATE_PED_INSIDE_VEHICLE
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED_INSIDE_VEHICLE](?\_0x7DD959874C1FD534).</strong>
     *
     * Hash: 0x3000F092
     */
    function createInsideVehicle(vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed) {
        if (typeof modelHash === 'string')
            modelHash = misc.getHashKey(modelHash);
        return CreatePedInsideVehicle(vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed);
    }
    ped_1.createInsideVehicle = createInsideVehicle;
    /**
     * Returns all peds handles known to the server.
     * The data returned adheres to the following layout:
     *
     * ```
     * [127, 42, 13, 37]
     * ```
     *
     * Hash: 0xB8584FEF
     */
    function getAlls() {
        return GetAllPeds();
    }
    ped_1.getAlls = getAlls;
    /**
     * Returns the hash of weapon the Ped is currently using.
     *
     * Hash: 0xB0237302
     */
    function getCurrentWeapon(ped) {
        return GetCurrentPedWeapon(ped);
    }
    ped_1.getCurrentWeapon = getCurrentWeapon;
    /**
     * No comment provided
     *
     * Hash: 0xF7C6792D
     */
    function getLastInVehicleSeat(vehicle, seatIndex) {
        return GetLastPedInVehicleSeat(vehicle, seatIndex);
    }
    ped_1.getLastInVehicleSeat = getLastInVehicleSeat;
    /**
     * No comment provided
     *
     * Hash: 0x2CE311A7
     */
    function getArmour(ped) {
        return GetPedArmour(ped);
    }
    ped_1.getArmour = getArmour;
    /**
     * No comment provided
     *
     * Hash: 0x63458C27
     */
    function getCauseOfDeath(ped) {
        return GetPedCauseOfDeath(ped);
    }
    ped_1.getCauseOfDeath = getCauseOfDeath;
    /**
     * No comment provided
     *
     * Hash: 0xC182F76E
     */
    function getDesiredHeading(ped) {
        return GetPedDesiredHeading(ped);
    }
    ped_1.getDesiredHeading = getDesiredHeading;
    /**
     * No comment provided
     *
     * Hash: 0x388FDE9A
     */
    function getInVehicleSeat(vehicle, seatIndex) {
        return GetPedInVehicleSeat(vehicle, seatIndex);
    }
    ped_1.getInVehicleSeat = getInVehicleSeat;
    /**
     * No comment provided
     *
     * Hash: 0xA45B6C8D
     */
    function getMaxHealth(ped) {
        return GetPedMaxHealth(ped);
    }
    ped_1.getMaxHealth = getMaxHealth;
    /**
     * Gets the current relationship group hash of a ped.
     *
     * Hash: 0x354F283C
     */
    function getRelationshipGroupHash(ped) {
        return GetPedRelationshipGroupHash(ped);
    }
    ped_1.getRelationshipGroupHash = getRelationshipGroupHash;
    /**
     * Gets the script task command currently assigned to the ped.
     *
     * Hash: 0x84FE084
     */
    function getScriptTaskCommand(ped) {
        return GetPedScriptTaskCommand(ped);
    }
    ped_1.getScriptTaskCommand = getScriptTaskCommand;
    /**
     * Gets the stage of the peds scripted task.
     *
     * Hash: 0x44B0E5E2
     */
    function getScriptTaskStage(ped) {
        return GetPedScriptTaskStage(ped);
    }
    ped_1.getScriptTaskStage = getScriptTaskStage;
    /**
     * Get the last entity that damaged the ped. This native is used server side when using OneSync.
     *
     * Hash: 0x535DB43F
     */
    function getSourceOfDamage(ped) {
        return GetPedSourceOfDamage(ped);
    }
    ped_1.getSourceOfDamage = getSourceOfDamage;
    /**
     * Get the entity that killed the ped. This native is used server side when using OneSync.
     *
     * Hash: 0x84ADF9EB
     */
    function getSourceOfDeath(ped) {
        return GetPedSourceOfDeath(ped);
    }
    ped_1.getSourceOfDeath = getSourceOfDeath;
    /**
     * Gets the type of a ped's specific task given an index of the CPedTaskSpecificDataNode nodes.
     * A ped will typically have a task at index 0, if a ped has multiple tasks at once they will be in the order 0, 1, 2, etc.
     *
     * Hash: 0x7F4563D3
     */
    function getSpecificTaskType(ped, index) {
        return GetPedSpecificTaskType(ped, index);
    }
    ped_1.getSpecificTaskType = getSpecificTaskType;
    /**
     * No comment provided
     *
     * Hash: 0x40321B83
     */
    function getStealthMovement(ped) {
        return GetPedStealthMovement(ped);
    }
    ped_1.getStealthMovement = getStealthMovement;
    /**
     * An alias of [GET_CURRENT_PED_WEAPON](#\_0xB0237302).
     *
     * Note, the client-side [GET_SELECTED_PED_WEAPON](#\_0x0A6DB4965674D243) native returns the weapon selected via the HUD (weapon wheel). This data is not available to FXServer.
     *
     * Hash: 0xD240123E
     */
    function getSelectedWeapon(ped) {
        return GetSelectedPedWeapon(ped);
    }
    ped_1.getSelectedWeapon = getSelectedWeapon;
    /**
     * No comment provided
     *
     * Hash: 0x25865633
     */
    function isHandcuffed(ped) {
        return IsPedHandcuffed(ped);
    }
    ped_1.isHandcuffed = isHandcuffed;
    /**
     * No comment provided
     *
     * Hash: 0xC833BBE1
     */
    function isRagdoll(ped) {
        return IsPedRagdoll(ped);
    }
    ped_1.isRagdoll = isRagdoll;
    /**
     * No comment provided
     *
     * Hash: 0xEFEED13C
     */
    function isStrafing(ped) {
        return IsPedStrafing(ped);
    }
    ped_1.isStrafing = isStrafing;
    /**
     * No comment provided
     *
     * Hash: 0x5AE7EDA2
     */
    function isUsingActionMode(ped) {
        return IsPedUsingActionMode(ped);
    }
    ped_1.isUsingActionMode = isUsingActionMode;
    /**
     * SET_CURRENT_PED_WEAPON
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_CURRENT_PED_WEAPON](?\_0xADF692B254977C0C).</strong>
     *
     * Hash: 0xB8278882
     */
    function setCurrentWeapon(ped, weaponHash, bForceInHand) {
        if (typeof weaponHash === 'string')
            weaponHash = misc.getHashKey(weaponHash);
        SetCurrentPedWeapon(ped, weaponHash, bForceInHand);
    }
    ped_1.setCurrentWeapon = setCurrentWeapon;
    /**
     * ```
     * NativeDB Added Parameter 4: BOOL p3
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_AMMO](?\_0x14E56BC5B5DB6A19).</strong>
     *
     * Hash: 0xBF90DF1A
     */
    function setAmmo(ped, weaponHash, ammo) {
        if (typeof weaponHash === 'string')
            weaponHash = misc.getHashKey(weaponHash);
        SetPedAmmo(ped, weaponHash, ammo);
    }
    ped_1.setAmmo = setAmmo;
    /**
     * ```
     * Sets the armor of the specified ped.
     * ped: The Ped to set the armor of.
     * amount: A value between 0 and 100 indicating the value to set the Ped's armor to.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_ARMOUR](?\_0xCEA04D83135264CC).</strong>
     *
     * Hash: 0x4E3A0CC4
     */
    function setArmour(ped, amount) {
        SetPedArmour(ped, amount);
    }
    ped_1.setArmour = setArmour;
    /**
     * SET_PED_CAN_RAGDOLL
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_CAN_RAGDOLL](?\_0xB128377056A54E2A).</strong>
     *
     * Hash: 0xCF1384C4
     */
    function setCanRagdoll(ped, toggle) {
        SetPedCanRagdoll(ped, toggle);
    }
    ped_1.setCanRagdoll = setCanRagdoll;
    /**
     * This native is used to set component variation on a ped. Components, drawables and textures IDs are related to the ped model.
     *
     * ### MP Freemode list of components
     *
     * **0**: Face
     * **1**: Mask
     * **2**: Hair
     * **3**: Torso
     * **4**: Leg
     * **5**: Parachute / bag
     * **6**: Shoes
     * **7**: Accessory
     * **8**: Undershirt
     * **9**: Kevlar
     * **10**: Badge
     * **11**: Torso 2
     * List of Component IDs
     *
     * ```cpp
     * // Components
     * enum ePedVarComp
     * {
     * PV_COMP_INVALID = 0xFFFFFFFF,
     * PV_COMP_HEAD = 0, // "HEAD"
     * PV_COMP_BERD = 1, // "BEARD"
     * PV_COMP_HAIR = 2, // "HAIR"
     * PV_COMP_UPPR = 3, // "UPPER"
     * PV_COMP_LOWR = 4, // "LOWER"
     * PV_COMP_HAND = 5, // "HAND"
     * PV_COMP_FEET = 6, // "FEET"
     * PV_COMP_TEEF = 7, // "TEETH"
     * PV_COMP_ACCS = 8, // "ACCESSORIES"
     * PV_COMP_TASK = 9, // "TASK"
     * PV_COMP_DECL = 10, // "DECL"
     * PV_COMP_JBIB = 11, // "JBIB"
     * PV_COMP_MAX = 12,
     * };
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_COMPONENT_VARIATION](?\_0x262B14F48D29DE80).</strong>
     *
     * Hash: 0xD4F7B05C
     */
    function setComponentVariation(ped, componentId, drawableId, textureId, paletteId) {
        SetPedComponentVariation(ped, componentId, drawableId, textureId, paletteId);
    }
    ped_1.setComponentVariation = setComponentVariation;
    /**
     * ```cpp
     * // Potential names and hash collisions included as comments
     * enum ePedConfigFlags {
     * CPED_CONFIG_FLAG_CreatedByFactory = 0,
     * CPED_CONFIG_FLAG_CanBeShotInVehicle = 1,
     * CPED_CONFIG_FLAG_NoCriticalHits = 2,
     * CPED_CONFIG_FLAG_DrownsInWater = 3,
     * CPED_CONFIG_FLAG_DrownsInSinkingVehicle = 4,
     * CPED_CONFIG_FLAG_DiesInstantlyWhenSwimming = 5,
     * CPED_CONFIG_FLAG_HasBulletProofVest = 6,
     * CPED_CONFIG_FLAG_UpperBodyDamageAnimsOnly = 7,
     * CPED_CONFIG_FLAG_NeverFallOffSkis = 8,
     * CPED_CONFIG_FLAG_NeverEverTargetThisPed = 9,
     * CPED_CONFIG_FLAG_ThisPedIsATargetPriority = 10,
     * CPED_CONFIG_FLAG_TargettableWithNoLos = 11,
     * CPED_CONFIG_FLAG_DoesntListenToPlayerGroupCommands = 12,
     * CPED_CONFIG_FLAG_NeverLeavesGroup = 13,
     * CPED_CONFIG_FLAG_DoesntDropWeaponsWhenDead = 14,
     * CPED_CONFIG_FLAG_SetDelayedWeaponAsCurrent = 15,
     * CPED_CONFIG_FLAG_KeepTasksAfterCleanUp = 16,
     * CPED_CONFIG_FLAG_BlockNonTemporaryEvents = 17,
     * CPED_CONFIG_FLAG_HasAScriptBrain = 18,
     * CPED_CONFIG_FLAG_WaitingForScriptBrainToLoad = 19,
     * CPED_CONFIG_FLAG_AllowMedicsToReviveMe = 20,
     * CPED_CONFIG_FLAG_MoneyHasBeenGivenByScript = 21,
     * CPED_CONFIG_FLAG_NotAllowedToCrouch = 22,
     * CPED_CONFIG_FLAG_DeathPickupsPersist = 23,
     * CPED_CONFIG_FLAG_IgnoreSeenMelee = 24,
     * CPED_CONFIG_FLAG_ForceDieIfInjured = 25,
     * CPED_CONFIG_FLAG_DontDragMeOutCar = 26,
     * CPED_CONFIG_FLAG_StayInCarOnJack = 27,
     * CPED_CONFIG_FLAG_ForceDieInCar = 28,
     * CPED_CONFIG_FLAG_GetOutUndriveableVehicle = 29,
     * CPED_CONFIG_FLAG_WillRemainOnBoatAfterMissionEnds = 30,
     * CPED_CONFIG_FLAG_DontStoreAsPersistent = 31,
     * CPED_CONFIG_FLAG_WillFlyThroughWindscreen = 32,
     * CPED_CONFIG_FLAG_DieWhenRagdoll = 33,
     * CPED_CONFIG_FLAG_HasHelmet = 34,
     * CPED_CONFIG_FLAG_UseHelmet = 35,
     * CPED_CONFIG_FLAG_DontTakeOffHelmet = 36,
     * CPED_CONFIG_FLAG_HideInCutscene = 37,
     * CPED_CONFIG_FLAG_PedIsEnemyToPlayer = 38,
     * CPED_CONFIG_FLAG_DisableEvasiveDives = 39,
     * CPED_CONFIG_FLAG_PedGeneratesDeadBodyEvents = 40,
     * CPED_CONFIG_FLAG_DontAttackPlayerWithoutWantedLevel = 41,
     * CPED_CONFIG_FLAG_DontInfluenceWantedLevel = 42,
     * CPED_CONFIG_FLAG_DisablePlayerLockon = 43,
     * CPED_CONFIG_FLAG_DisableLockonToRandomPeds = 44,
     * CPED_CONFIG_FLAG_AllowLockonToFriendlyPlayers = 45,
     * _0xDB115BFA = 46,
     * CPED_CONFIG_FLAG_PedBeingDeleted = 47,
     * CPED_CONFIG_FLAG_BlockWeaponSwitching = 48,
     * CPED_CONFIG_FLAG_BlockGroupPedAimedAtResponse = 49,
     * CPED_CONFIG_FLAG_WillFollowLeaderAnyMeans = 50,
     * CPED_CONFIG_FLAG_BlippedByScript = 51,
     * CPED_CONFIG_FLAG_DrawRadarVisualField = 52,
     * CPED_CONFIG_FLAG_StopWeaponFiringOnImpact = 53,
     * CPED_CONFIG_FLAG_DissableAutoFallOffTests = 54,
     * CPED_CONFIG_FLAG_SteerAroundDeadBodies = 55,
     * CPED_CONFIG_FLAG_ConstrainToNavMesh = 56,
     * CPED_CONFIG_FLAG_SyncingAnimatedProps = 57,
     * CPED_CONFIG_FLAG_IsFiring = 58,
     * CPED_CONFIG_FLAG_WasFiring = 59,
     * CPED_CONFIG_FLAG_IsStanding = 60,
     * CPED_CONFIG_FLAG_WasStanding = 61,
     * CPED_CONFIG_FLAG_InVehicle = 62,
     * CPED_CONFIG_FLAG_OnMount = 63,
     * CPED_CONFIG_FLAG_AttachedToVehicle = 64,
     * CPED_CONFIG_FLAG_IsSwimming = 65,
     * CPED_CONFIG_FLAG_WasSwimming = 66,
     * CPED_CONFIG_FLAG_IsSkiing = 67,
     * CPED_CONFIG_FLAG_IsSitting = 68,
     * CPED_CONFIG_FLAG_KilledByStealth = 69,
     * CPED_CONFIG_FLAG_KilledByTakedown = 70,
     * CPED_CONFIG_FLAG_Knockedout = 71,
     * CPED_CONFIG_FLAG_ClearRadarBlipOnDeath = 72,
     * CPED_CONFIG_FLAG_JustGotOffTrain = 73,
     * CPED_CONFIG_FLAG_JustGotOnTrain = 74,
     * CPED_CONFIG_FLAG_UsingCoverPoint = 75,
     * CPED_CONFIG_FLAG_IsInTheAir = 76,
     * CPED_CONFIG_FLAG_KnockedUpIntoAir = 77,
     * CPED_CONFIG_FLAG_IsAimingGun = 78,
     * CPED_CONFIG_FLAG_HasJustLeftCar = 79,
     * CPED_CONFIG_FLAG_TargetWhenInjuredAllowed = 80,
     * CPED_CONFIG_FLAG_CurrLeftFootCollNM = 81,
     * CPED_CONFIG_FLAG_PrevLeftFootCollNM = 82,
     * CPED_CONFIG_FLAG_CurrRightFootCollNM = 83,
     * CPED_CONFIG_FLAG_PrevRightFootCollNM = 84,
     * CPED_CONFIG_FLAG_HasBeenBumpedInCar = 85,
     * CPED_CONFIG_FLAG_InWaterTaskQuitToClimbLadder = 86,
     * CPED_CONFIG_FLAG_NMTwoHandedWeaponBothHandsConstrained = 87,
     * CPED_CONFIG_FLAG_CreatedBloodPoolTimer = 88,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromAnyPedImpact = 89,
     * CPED_CONFIG_FLAG_GroupPedFailedToEnterCover = 90,
     * CPED_CONFIG_FLAG_AlreadyChattedOnPhone = 91,
     * CPED_CONFIG_FLAG_AlreadyReactedToPedOnRoof = 92,
     * CPED_CONFIG_FLAG_ForcePedLoadCover = 93,
     * CPED_CONFIG_FLAG_BlockCoweringInCover = 94,
     * CPED_CONFIG_FLAG_BlockPeekingInCover = 95,
     * CPED_CONFIG_FLAG_JustLeftCarNotCheckedForDoors = 96,
     * CPED_CONFIG_FLAG_VaultFromCover = 97,
     * CPED_CONFIG_FLAG_AutoConversationLookAts = 98,
     * CPED_CONFIG_FLAG_UsingCrouchedPedCapsule = 99,
     * CPED_CONFIG_FLAG_HasDeadPedBeenReported = 100,
     * CPED_CONFIG_FLAG_ForcedAim = 101,
     * CPED_CONFIG_FLAG_SteersAroundPeds = 102,
     * CPED_CONFIG_FLAG_SteersAroundObjects = 103,
     * CPED_CONFIG_FLAG_OpenDoorArmIK = 104,
     * CPED_CONFIG_FLAG_ForceReload = 105,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromVehicleImpact = 106,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromBulletImpact = 107,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromExplosions = 108,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromFire = 109,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromElectrocution = 110,
     * CPED_CONFIG_FLAG_IsBeingDraggedToSafety = 111,
     * CPED_CONFIG_FLAG_HasBeenDraggedToSafety = 112,
     * CPED_CONFIG_FLAG_KeepWeaponHolsteredUnlessFired = 113,
     * CPED_CONFIG_FLAG_ForceScriptControlledKnockout = 114,
     * CPED_CONFIG_FLAG_FallOutOfVehicleWhenKilled = 115,
     * CPED_CONFIG_FLAG_GetOutBurningVehicle = 116,
     * CPED_CONFIG_FLAG_BumpedByPlayer = 117,
     * CPED_CONFIG_FLAG_RunFromFiresAndExplosions = 118,
     * CPED_CONFIG_FLAG_TreatAsPlayerDuringTargeting = 119,
     * CPED_CONFIG_FLAG_IsHandCuffed = 120,
     * CPED_CONFIG_FLAG_IsAnkleCuffed = 121,
     * CPED_CONFIG_FLAG_DisableMelee = 122,
     * CPED_CONFIG_FLAG_DisableUnarmedDrivebys = 123,
     * CPED_CONFIG_FLAG_JustGetsPulledOutWhenElectrocuted = 124,
     * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME = 125,
     * CPED_CONFIG_FLAG_WillNotHotwireLawEnforcementVehicle = 126,
     * CPED_CONFIG_FLAG_WillCommandeerRatherThanJack = 127,
     * CPED_CONFIG_FLAG_CanBeAgitated = 128,
     * CPED_CONFIG_FLAG_ForcePedToFaceLeftInCover = 129,
     * CPED_CONFIG_FLAG_ForcePedToFaceRightInCover = 130,
     * CPED_CONFIG_FLAG_BlockPedFromTurningInCover = 131,
     * CPED_CONFIG_FLAG_KeepRelationshipGroupAfterCleanUp = 132,
     * CPED_CONFIG_FLAG_ForcePedToBeDragged = 133,
     * CPED_CONFIG_FLAG_PreventPedFromReactingToBeingJacked = 134,
     * CPED_CONFIG_FLAG_IsScuba = 135,
     * CPED_CONFIG_FLAG_WillArrestRatherThanJack = 136,
     * CPED_CONFIG_FLAG_RemoveDeadExtraFarAway = 137,
     * CPED_CONFIG_FLAG_RidingTrain = 138,
     * CPED_CONFIG_FLAG_ArrestResult = 139,
     * CPED_CONFIG_FLAG_CanAttackFriendly = 140,
     * CPED_CONFIG_FLAG_WillJackAnyPlayer = 141,
     * CPED_CONFIG_FLAG_BumpedByPlayerVehicle = 142,
     * CPED_CONFIG_FLAG_DodgedPlayerVehicle = 143,
     * CPED_CONFIG_FLAG_WillJackWantedPlayersRatherThanStealCar = 144,
     * CPED_CONFIG_FLAG_NoCopWantedAggro = 145,
     * CPED_CONFIG_FLAG_DisableLadderClimbing = 146,
     * CPED_CONFIG_FLAG_StairsDetected = 147,
     * CPED_CONFIG_FLAG_SlopeDetected = 148,
     * CPED_CONFIG_FLAG_HelmetHasBeenShot = 149,
     * CPED_CONFIG_FLAG_CowerInsteadOfFlee = 150,
     * CPED_CONFIG_FLAG_CanActivateRagdollWhenVehicleUpsideDown = 151,
     * CPED_CONFIG_FLAG_AlwaysRespondToCriesForHelp = 152,
     * CPED_CONFIG_FLAG_DisableBloodPoolCreation = 153,
     * CPED_CONFIG_FLAG_ShouldFixIfNoCollision = 154,
     * CPED_CONFIG_FLAG_CanPerformArrest = 155,
     * CPED_CONFIG_FLAG_CanPerformUncuff = 156,
     * CPED_CONFIG_FLAG_CanBeArrested = 157,
     * CPED_CONFIG_FLAG_MoverConstrictedByOpposingCollisions = 158,
     * CPED_CONFIG_FLAG_PlayerPreferFrontSeatMP = 159,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromImpactObject = 160,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromMelee = 161,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromWaterJet = 162,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromDrowning = 163,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromFalling = 164,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromRubberBullet = 165,
     * CPED_CONFIG_FLAG_IsInjured = 166,
     * CPED_CONFIG_FLAG_DontEnterVehiclesInPlayersGroup = 167,
     * CPED_CONFIG_FLAG_SwimmingTasksRunning = 168,
     * CPED_CONFIG_FLAG_PreventAllMeleeTaunts = 169,
     * CPED_CONFIG_FLAG_ForceDirectEntry = 170,
     * CPED_CONFIG_FLAG_AlwaysSeeApproachingVehicles = 171,
     * CPED_CONFIG_FLAG_CanDiveAwayFromApproachingVehicles = 172,
     * CPED_CONFIG_FLAG_AllowPlayerToInterruptVehicleEntryExit = 173,
     * CPED_CONFIG_FLAG_OnlyAttackLawIfPlayerIsWanted = 174,
     * CPED_CONFIG_FLAG_PlayerInContactWithKinematicPed = 175,
     * CPED_CONFIG_FLAG_PlayerInContactWithSomethingOtherThanKinematicPed = 176,
     * CPED_CONFIG_FLAG_PedsJackingMeDontGetIn = 177,
     * CPED_CONFIG_FLAG_AdditionalRappellingPed = 178,
     * CPED_CONFIG_FLAG_PedIgnoresAnimInterruptEvents = 179,
     * CPED_CONFIG_FLAG_IsInCustody = 180,
     * CPED_CONFIG_FLAG_ForceStandardBumpReactionThresholds = 181,
     * CPED_CONFIG_FLAG_LawWillOnlyAttackIfPlayerIsWanted = 182,
     * CPED_CONFIG_FLAG_IsAgitated = 183,
     * CPED_CONFIG_FLAG_PreventAutoShuffleToDriversSeat = 184,
     * CPED_CONFIG_FLAG_UseKinematicModeWhenStationary = 185,
     * CPED_CONFIG_FLAG_EnableWeaponBlocking = 186,
     * CPED_CONFIG_FLAG_HasHurtStarted = 187,
     * CPED_CONFIG_FLAG_DisableHurt = 188,
     * CPED_CONFIG_FLAG_PlayerIsWeird = 189,
     * CPED_CONFIG_FLAG_PedHadPhoneConversation = 190,
     * CPED_CONFIG_FLAG_BeganCrossingRoad = 191,
     * CPED_CONFIG_FLAG_WarpIntoLeadersVehicle = 192,
     * CPED_CONFIG_FLAG_DoNothingWhenOnFootByDefault = 193,
     * CPED_CONFIG_FLAG_UsingScenario = 194,
     * CPED_CONFIG_FLAG_VisibleOnScreen = 195,
     * CPED_CONFIG_FLAG_DontCollideWithKinematic = 196,
     * CPED_CONFIG_FLAG_ActivateOnSwitchFromLowPhysicsLod = 197,
     * CPED_CONFIG_FLAG_DontActivateRagdollOnPedCollisionWhenDead = 198,
     * CPED_CONFIG_FLAG_DontActivateRagdollOnVehicleCollisionWhenDead = 199,
     * CPED_CONFIG_FLAG_HasBeenInArmedCombat = 200,
     * CPED_CONFIG_FLAG_UseDiminishingAmmoRate = 201,
     * CPED_CONFIG_FLAG_Avoidance_Ignore_All = 202,
     * CPED_CONFIG_FLAG_Avoidance_Ignored_by_All = 203,
     * CPED_CONFIG_FLAG_Avoidance_Ignore_Group1 = 204,
     * CPED_CONFIG_FLAG_Avoidance_Member_of_Group1 = 205,
     * CPED_CONFIG_FLAG_ForcedToUseSpecificGroupSeatIndex = 206,
     * CPED_CONFIG_FLAG_LowPhysicsLodMayPlaceOnNavMesh = 207,
     * CPED_CONFIG_FLAG_DisableExplosionReactions = 208,
     * CPED_CONFIG_FLAG_DodgedPlayer = 209,
     * CPED_CONFIG_FLAG_WaitingForPlayerControlInterrupt = 210,
     * CPED_CONFIG_FLAG_ForcedToStayInCover = 211,
     * CPED_CONFIG_FLAG_GeneratesSoundEvents = 212,
     * CPED_CONFIG_FLAG_ListensToSoundEvents = 213,
     * CPED_CONFIG_FLAG_AllowToBeTargetedInAVehicle = 214,
     * CPED_CONFIG_FLAG_WaitForDirectEntryPointToBeFreeWhenExiting = 215,
     * CPED_CONFIG_FLAG_OnlyRequireOnePressToExitVehicle = 216,
     * CPED_CONFIG_FLAG_ForceExitToSkyDive = 217,
     * CPED_CONFIG_FLAG_SteersAroundVehicles = 218,
     * CPED_CONFIG_FLAG_AllowPedInVehiclesOverrideTaskFlags = 219,
     * CPED_CONFIG_FLAG_DontEnterLeadersVehicle = 220,
     * CPED_CONFIG_FLAG_DisableExitToSkyDive = 221,
     * CPED_CONFIG_FLAG_ScriptHasDisabledCollision = 222,
     * CPED_CONFIG_FLAG_UseAmbientModelScaling = 223,
     * CPED_CONFIG_FLAG_DontWatchFirstOnNextHurryAway = 224,
     * CPED_CONFIG_FLAG_DisablePotentialToBeWalkedIntoResponse = 225,
     * CPED_CONFIG_FLAG_DisablePedAvoidance = 226,
     * CPED_CONFIG_FLAG_ForceRagdollUponDeath = 227,
     * CPED_CONFIG_FLAG_CanLosePropsOnDamage = 228,
     * CPED_CONFIG_FLAG_DisablePanicInVehicle = 229,
     * CPED_CONFIG_FLAG_AllowedToDetachTrailer = 230,
     * CPED_CONFIG_FLAG_HasShotBeenReactedToFromFront = 231,
     * CPED_CONFIG_FLAG_HasShotBeenReactedToFromBack = 232,
     * CPED_CONFIG_FLAG_HasShotBeenReactedToFromLeft = 233,
     * CPED_CONFIG_FLAG_HasShotBeenReactedToFromRight = 234,
     * CPED_CONFIG_FLAG_AllowBlockDeadPedRagdollActivation = 235,
     * CPED_CONFIG_FLAG_IsHoldingProp = 236,
     * CPED_CONFIG_FLAG_BlocksPathingWhenDead = 237,
     * CPED_CONFIG_FLAG_ForcePlayNormalScenarioExitOnNextScriptCommand = 238,
     * CPED_CONFIG_FLAG_ForcePlayImmediateScenarioExitOnNextScriptCommand = 239,
     * CPED_CONFIG_FLAG_ForceSkinCharacterCloth = 240,
     * CPED_CONFIG_FLAG_LeaveEngineOnWhenExitingVehicles = 241,
     * CPED_CONFIG_FLAG_PhoneDisableTextingAnimations = 242,
     * CPED_CONFIG_FLAG_PhoneDisableTalkingAnimations = 243,
     * CPED_CONFIG_FLAG_PhoneDisableCameraAnimations = 244,
     * CPED_CONFIG_FLAG_DisableBlindFiringInShotReactions = 245,
     * CPED_CONFIG_FLAG_AllowNearbyCoverUsage = 246,
     * CPED_CONFIG_FLAG_InStrafeTransition = 247,
     * CPED_CONFIG_FLAG_CanPlayInCarIdles = 248,
     * CPED_CONFIG_FLAG_CanAttackNonWantedPlayerAsLaw = 249,
     * CPED_CONFIG_FLAG_WillTakeDamageWhenVehicleCrashes = 250,
     * CPED_CONFIG_FLAG_AICanDrivePlayerAsRearPassenger = 251,
     * CPED_CONFIG_FLAG_PlayerCanJackFriendlyPlayers = 252,
     * CPED_CONFIG_FLAG_OnStairs = 253,
     * CPED_CONFIG_FLAG_SimulatingAiming = 254,
     * CPED_CONFIG_FLAG_AIDriverAllowFriendlyPassengerSeatEntry = 255,
     * CPED_CONFIG_FLAG_ParentCarIsBeingRemoved = 256,
     * CPED_CONFIG_FLAG_AllowMissionPedToUseInjuredMovement = 257,
     * CPED_CONFIG_FLAG_CanLoseHelmetOnDamage = 258,
     * CPED_CONFIG_FLAG_NeverDoScenarioExitProbeChecks = 259,
     * CPED_CONFIG_FLAG_SuppressLowLODRagdollSwitchWhenCorpseSettles = 260,
     * CPED_CONFIG_FLAG_PreventUsingLowerPrioritySeats = 261,
     * CPED_CONFIG_FLAG_JustLeftVehicleNeedsReset = 262,
     * CPED_CONFIG_FLAG_TeleportIfCantReachPlayer = 263,
     * CPED_CONFIG_FLAG_PedsInVehiclePositionNeedsReset = 264,
     * CPED_CONFIG_FLAG_PedsFullyInSeat = 265,
     * CPED_CONFIG_FLAG_AllowPlayerLockOnIfFriendly = 266,
     * CPED_CONFIG_FLAG_UseCameraHeadingForDesiredDirectionLockOnTest = 267,
     * CPED_CONFIG_FLAG_TeleportToLeaderVehicle = 268,
     * CPED_CONFIG_FLAG_Avoidance_Ignore_WeirdPedBuffer = 269,
     * CPED_CONFIG_FLAG_OnStairSlope = 270,
     * CPED_CONFIG_FLAG_HasPlayedNMGetup = 271,
     * CPED_CONFIG_FLAG_DontBlipCop = 272,
     * CPED_CONFIG_FLAG_SpawnedAtExtendedRangeScenario = 273,
     * CPED_CONFIG_FLAG_WalkAlongsideLeaderWhenClose = 274,
     * CPED_CONFIG_FLAG_KillWhenTrapped = 275,
     * CPED_CONFIG_FLAG_EdgeDetected = 276,
     * CPED_CONFIG_FLAG_AlwaysWakeUpPhysicsOfIntersectedPeds = 277,
     * CPED_CONFIG_FLAG_EquippedAmbientLoadOutWeapon = 278,
     * CPED_CONFIG_FLAG_AvoidTearGas = 279,
     * CPED_CONFIG_FLAG_StoppedSpeechUponFreezing = 280,
     * CPED_CONFIG_FLAG_DisableGoToWritheWhenInjured = 281,
     * CPED_CONFIG_FLAG_OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
     * CPED_CONFIG_FLAG_ThrownFromVehicleDueToExhaustion = 283,
     * CPED_CONFIG_FLAG_UpdateEnclosedSearchRegion = 284,
     * CPED_CONFIG_FLAG_DisableWeirdPedEvents = 285,
     * CPED_CONFIG_FLAG_ShouldChargeNow = 286,
     * CPED_CONFIG_FLAG_RagdollingOnBoat = 287,
     * CPED_CONFIG_FLAG_HasBrandishedWeapon = 288,
     * CPED_CONFIG_FLAG_AllowMinorReactionsAsMissionPed = 289,
     * CPED_CONFIG_FLAG_BlockDeadBodyShockingEventsWhenDead = 290,
     * CPED_CONFIG_FLAG_PedHasBeenSeen = 291,
     * CPED_CONFIG_FLAG_PedIsInReusePool = 292,
     * CPED_CONFIG_FLAG_PedWasReused = 293,
     * CPED_CONFIG_FLAG_DisableShockingEvents = 294,
     * CPED_CONFIG_FLAG_MovedUsingLowLodPhysicsSinceLastActive = 295,
     * CPED_CONFIG_FLAG_NeverReactToPedOnRoof = 296,
     * CPED_CONFIG_FLAG_ForcePlayFleeScenarioExitOnNextScriptCommand = 297,
     * CPED_CONFIG_FLAG_JustBumpedIntoVehicle = 298,
     * CPED_CONFIG_FLAG_DisableShockingDrivingOnPavementEvents = 299,
     * CPED_CONFIG_FLAG_ShouldThrowSmokeNow = 300,
     * CPED_CONFIG_FLAG_DisablePedConstraints = 301,
     * CPED_CONFIG_FLAG_ForceInitialPeekInCover = 302,
     * CPED_CONFIG_FLAG_CreatedByDispatch = 303,
     * CPED_CONFIG_FLAG_PointGunLeftHandSupporting = 304,
     * CPED_CONFIG_FLAG_DisableJumpingFromVehiclesAfterLeader = 305,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerPedImpact = 306,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromAiRagdollImpact = 307,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerRagdollImpact = 308,
     * CPED_CONFIG_FLAG_DisableQuadrupedSpring = 309,
     * CPED_CONFIG_FLAG_IsInCluster = 310,
     * CPED_CONFIG_FLAG_ShoutToGroupOnPlayerMelee = 311,
     * CPED_CONFIG_FLAG_IgnoredByAutoOpenDoors = 312,
     * CPED_CONFIG_FLAG_PreferInjuredGetup = 313,
     * CPED_CONFIG_FLAG_ForceIgnoreMeleeActiveCombatant = 314,
     * CPED_CONFIG_FLAG_CheckLoSForSoundEvents = 315,
     * CPED_CONFIG_FLAG_JackedAbandonedCar = 316,
     * CPED_CONFIG_FLAG_CanSayFollowedByPlayerAudio = 317,
     * CPED_CONFIG_FLAG_ActivateRagdollFromMinorPlayerContact = 318,
     * CPED_CONFIG_FLAG_HasPortablePickupAttached = 319,
     * CPED_CONFIG_FLAG_ForcePoseCharacterCloth = 320,
     * CPED_CONFIG_FLAG_HasClothCollisionBounds = 321,
     * CPED_CONFIG_FLAG_HasHighHeels = 322,
     * CPED_CONFIG_FLAG_TreatAsAmbientPedForDriverLockOn = 323,
     * CPED_CONFIG_FLAG_DontBehaveLikeLaw = 324,
     * CPED_CONFIG_FLAG_SpawnedAtScenario = 325,
     * CPED_CONFIG_FLAG_DisablePoliceInvestigatingBody = 326,
     * CPED_CONFIG_FLAG_DisableWritheShootFromGround = 327,
     * CPED_CONFIG_FLAG_LowerPriorityOfWarpSeats = 328,
     * CPED_CONFIG_FLAG_DisableTalkTo = 329,
     * CPED_CONFIG_FLAG_DontBlip = 330,
     * CPED_CONFIG_FLAG_IsSwitchingWeapon = 331,
     * CPED_CONFIG_FLAG_IgnoreLegIkRestrictions = 332,
     * CPED_CONFIG_FLAG_ScriptForceNoTimesliceIntelligenceUpdate = 333,
     * CPED_CONFIG_FLAG_JackedOutOfMyVehicle = 334,
     * CPED_CONFIG_FLAG_WentIntoCombatAfterBeingJacked = 335,
     * CPED_CONFIG_FLAG_DontActivateRagdollForVehicleGrab = 336,
     * CPED_CONFIG_FLAG_ForcePackageCharacterCloth = 337,
     * CPED_CONFIG_FLAG_DontRemoveWithValidOrder = 338,
     * CPED_CONFIG_FLAG_AllowTaskDoNothingTimeslicing = 339,
     * CPED_CONFIG_FLAG_ForcedToStayInCoverDueToPlayerSwitch = 340,
     * CPED_CONFIG_FLAG_ForceProneCharacterCloth = 341,
     * CPED_CONFIG_FLAG_NotAllowedToJackAnyPlayers = 342,
     * CPED_CONFIG_FLAG_InToStrafeTransition = 343,
     * CPED_CONFIG_FLAG_KilledByStandardMelee = 344,
     * CPED_CONFIG_FLAG_AlwaysLeaveTrainUponArrival = 345,
     * CPED_CONFIG_FLAG_ForcePlayDirectedNormalScenarioExitOnNextScriptCommand = 346,
     * CPED_CONFIG_FLAG_OnlyWritheFromWeaponDamage = 347,
     * CPED_CONFIG_FLAG_UseSloMoBloodVfx = 348,
     * CPED_CONFIG_FLAG_EquipJetpack = 349,
     * CPED_CONFIG_FLAG_PreventDraggedOutOfCarThreatResponse = 350,
     * CPED_CONFIG_FLAG_ScriptHasCompletelyDisabledCollision = 351,
     * CPED_CONFIG_FLAG_NeverDoScenarioNavChecks = 352,
     * CPED_CONFIG_FLAG_ForceSynchronousScenarioExitChecking = 353,
     * CPED_CONFIG_FLAG_ThrowingGrenadeWhileAiming = 354,
     * CPED_CONFIG_FLAG_HeadbobToRadioEnabled = 355,
     * CPED_CONFIG_FLAG_ForceDeepSurfaceCheck = 356,
     * CPED_CONFIG_FLAG_DisableDeepSurfaceAnims = 357,
     * CPED_CONFIG_FLAG_DontBlipNotSynced = 358,
     * CPED_CONFIG_FLAG_IsDuckingInVehicle = 359,
     * CPED_CONFIG_FLAG_PreventAutoShuffleToTurretSeat = 360,
     * CPED_CONFIG_FLAG_DisableEventInteriorStatusCheck = 361,
     * CPED_CONFIG_FLAG_HasReserveParachute = 362,
     * CPED_CONFIG_FLAG_UseReserveParachute = 363,
     * CPED_CONFIG_FLAG_TreatDislikeAsHateWhenInCombat = 364,
     * CPED_CONFIG_FLAG_OnlyUpdateTargetWantedIfSeen = 365,
     * CPED_CONFIG_FLAG_AllowAutoShuffleToDriversSeat = 366,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromSmokeGrenade = 367,
     * CPED_CONFIG_FLAG_LinkMBRToOwnerOnChain = 368,
     * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayer = 369,
     * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayerVehicle = 370,
     * CPED_CONFIG_FLAG_InFPSUnholsterTransition = 371,
     * CPED_CONFIG_FLAG_PreventReactingToSilencedCloneBullets = 372,
     * CPED_CONFIG_FLAG_DisableInjuredCryForHelpEvents = 373,
     * CPED_CONFIG_FLAG_NeverLeaveTrain = 374,
     * CPED_CONFIG_FLAG_DontDropJetpackOnDeath = 375,
     * CPED_CONFIG_FLAG_UseFPSUnholsterTransitionDuringCombatRoll = 376,
     * CPED_CONFIG_FLAG_ExitingFPSCombatRoll = 377,
     * CPED_CONFIG_FLAG_ScriptHasControlOfPlayer = 378,
     * CPED_CONFIG_FLAG_PlayFPSIdleFidgetsForProjectile = 379,
     * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInBikes = 380,
     * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInAircraft = 381,
     * CPED_CONFIG_FLAG_WasPlayingFPSGetup = 382,
     * CPED_CONFIG_FLAG_WasPlayingFPSMeleeActionResult = 383,
     * CPED_CONFIG_FLAG_PreferNoPriorityRemoval = 384,
     * CPED_CONFIG_FLAG_FPSFidgetsAbortedOnFire = 385,
     * CPED_CONFIG_FLAG_ForceFPSIKWithUpperBodyAnim = 386,
     * CPED_CONFIG_FLAG_SwitchingCharactersInFirstPerson = 387,
     * CPED_CONFIG_FLAG_IsClimbingLadder = 388,
     * CPED_CONFIG_FLAG_HasBareFeet = 389,
     * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME_2 = 390,
     * CPED_CONFIG_FLAG_GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
     * CPED_CONFIG_FLAG_BlockDroppingHealthSnacksOnDeath = 392,
     * CPED_CONFIG_FLAG_ResetLastVehicleOnVehicleExit = 393,
     * CPED_CONFIG_FLAG_ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
     * CPED_CONFIG_FLAG_DontRespondToRandomPedsDamage = 395,
     * CPED_CONFIG_FLAG_AllowContinuousThreatResponseWantedLevelUpdates = 396,
     * CPED_CONFIG_FLAG_KeepTargetLossResponseOnCleanup = 397,
     * CPED_CONFIG_FLAG_PlayersDontDragMeOutOfCar = 398,
     * CPED_CONFIG_FLAG_BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
     * CPED_CONFIG_FLAG_IgnorePedTypeForIsFriendlyWith = 400,
     * CPED_CONFIG_FLAG_TreatNonFriendlyAsHateWhenInCombat = 401,
     * CPED_CONFIG_FLAG_DontLeaveVehicleIfLeaderNotInVehicle = 402,
     * CPED_CONFIG_FLAG_ChangeFromPermanentToAmbientPopTypeOnMigration = 403,
     * CPED_CONFIG_FLAG_AllowMeleeReactionIfMeleeProofIsOn = 404,
     * CPED_CONFIG_FLAG_UsingLowriderLeans = 405,
     * CPED_CONFIG_FLAG_UsingAlternateLowriderLeans = 406,
     * CPED_CONFIG_FLAG_UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
     * CPED_CONFIG_FLAG_DisableHomingMissileLockForVehiclePedInside = 408,
     * CPED_CONFIG_FLAG_DisableTakeOffScubaGear = 409,
     * CPED_CONFIG_FLAG_IgnoreMeleeFistWeaponDamageMult = 410,
     * CPED_CONFIG_FLAG_LawPedsCanFleeFromNonWantedPlayer = 411,
     * CPED_CONFIG_FLAG_ForceBlipSecurityPedsIfPlayerIsWanted = 412,
     * CPED_CONFIG_FLAG_IsHolsteringWeapon = 413,
     * CPED_CONFIG_FLAG_UseGoToPointForScenarioNavigation = 414,
     * CPED_CONFIG_FLAG_DontClearLocalPassengersWantedLevel = 415,
     * CPED_CONFIG_FLAG_BlockAutoSwapOnWeaponPickups = 416,
     * CPED_CONFIG_FLAG_ThisPedIsATargetPriorityForAI = 417,
     * CPED_CONFIG_FLAG_IsSwitchingHelmetVisor = 418,
     * CPED_CONFIG_FLAG_ForceHelmetVisorSwitch = 419,
     * CPED_CONFIG_FLAG_IsPerformingVehicleMelee = 420,
     * CPED_CONFIG_FLAG_UseOverrideFootstepPtFx = 421,
     * CPED_CONFIG_FLAG_DisableVehicleCombat = 422,
     * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamage = 423,
     * CPED_CONFIG_FLAG_AllowBikeAlternateAnimations = 424,
     * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamageNonSynced = 425,
     * CPED_CONFIG_FLAG_UseLockpickVehicleEntryAnimations = 426,
     * CPED_CONFIG_FLAG_IgnoreInteriorCheckForSprinting = 427,
     * CPED_CONFIG_FLAG_SwatHeliSpawnWithinLastSpottedLocation = 428,
     * CPED_CONFIG_FLAG_DisableStartEngine = 429,
     * CPED_CONFIG_FLAG_IgnoreBeingOnFire = 430,
     * CPED_CONFIG_FLAG_DisableTurretOrRearSeatPreference = 431,
     * CPED_CONFIG_FLAG_DisableWantedHelicopterSpawning = 432,
     * CPED_CONFIG_FLAG_UseTargetPerceptionForCreatingAimedAtEvents = 433,
     * CPED_CONFIG_FLAG_DisableHomingMissileLockon = 434,
     * CPED_CONFIG_FLAG_ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
     * CPED_CONFIG_FLAG_StayInDefensiveAreaWhenInVehicle = 436,
     * CPED_CONFIG_FLAG_DontShoutTargetPosition = 437,
     * CPED_CONFIG_FLAG_DisableHelmetArmor = 438,
     * CPED_CONFIG_FLAG_CreatedByConcealedPlayer = 439,
     * CPED_CONFIG_FLAG_PermanentlyDisablePotentialToBeWalkedIntoResponse = 440,
     * CPED_CONFIG_FLAG_PreventVehExitDueToInvalidWeapon = 441,
     * CPED_CONFIG_FLAG_IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
     * CPED_CONFIG_FLAG_DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
     * CPED_CONFIG_FLAG_CheckLockedBeforeWarp = 444,
     * CPED_CONFIG_FLAG_DontShuffleInVehicleToMakeRoom = 445,
     * CPED_CONFIG_FLAG_GiveWeaponOnGetup = 446,
     * CPED_CONFIG_FLAG_DontHitVehicleWithProjectiles = 447,
     * CPED_CONFIG_FLAG_DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
     * CPED_CONFIG_FLAG_FiresDummyRockets = 449,
     * CPED_CONFIG_FLAG_PedIsArresting = 450,
     * CPED_CONFIG_FLAG_IsDecoyPed = 451,
     * CPED_CONFIG_FLAG_HasEstablishedDecoy = 452,
     * CPED_CONFIG_FLAG_BlockDispatchedHelicoptersFromLanding = 453,
     * CPED_CONFIG_FLAG_DontCryForHelpOnStun = 454,
     * CPED_CONFIG_FLAG_HitByTranqWeapon = 455,
     * CPED_CONFIG_FLAG_CanBeIncapacitated = 456,
     * CPED_CONFIG_FLAG_ForcedAimFromArrest = 457,
     * CPED_CONFIG_FLAG_DontChangeTargetFromMelee = 458,
     * _0x4376ABF2 = 459,
     * CPED_CONFIG_FLAG_RagdollFloatsIndefinitely = 460,
     * CPED_CONFIG_FLAG_BlockElectricWeaponDamage = 461,
     * _0x262A3B8E = 462,
     * _0x1AA79A25 = 463,
     * }
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_CONFIG_FLAG](?\_0x1913FE4CBF41C463).</strong>
     *
     * Hash: 0x9CFBE10D
     */
    function setConfigFlag(ped, flagId, value) {
        SetPedConfigFlag(ped, flagId, value);
    }
    ped_1.setConfigFlag = setConfigFlag;
    /**
     * ```
     * Sets Ped Default Clothes
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_DEFAULT_COMPONENT_VARIATION](?\_0x45EEE61580806D63).</strong>
     *
     * Hash: 0xC866A984
     */
    function setDefaultComponentVariation(ped) {
        SetPedDefaultComponentVariation(ped);
    }
    ped_1.setDefaultComponentVariation = setDefaultComponentVariation;
    /**
     * Sets the tint index for the hair on the specified ped.
     *
     * ```
     * NativeDB Introduced: v323
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HAIR_TINT](?\_0x4CFFC65454C93A49).</strong>
     *
     * Hash: 0xA23FE32C
     */
    function setHairTint(ped, colorID, highlightColorID) {
        SetPedHairTint(ped, colorID, highlightColorID);
    }
    ped_1.setHairTint = setHairTint;
    /**
     * For more info please refer to [this](https://gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained) topic.
     * <strong>Other information:</strong>
     * IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.</br>
     * This native function is often called prior to calling natives such as:
     *
     * *   [`SetPedHairColor`](#\_0xA23FE32C)
     * *   [`SetPedHeadOverlayColor`](#\_0x78935A27)
     * *   [`SetPedHeadOverlay`](#\_0xD28DBA90)
     * *   [`SetPedFaceFeature`](#\_0x6C8D4458)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_BLEND_DATA](?\_0x9414E18B9434C2FE).</strong>
     *
     * Hash: 0x60746B88
     */
    function setHeadBlendData(ped, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent) {
        SetPedHeadBlendData(ped, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent);
    }
    ped_1.setHeadBlendData = setHeadBlendData;
    /**
     * ```
     * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
     * overlayID       Part                  Index, to disable
     * 0               Blemishes             0 - 23, 255
     * 1               Facial Hair           0 - 28, 255
     * 2               Eyebrows              0 - 33, 255
     * 3               Ageing                0 - 14, 255
     * 4               Makeup                0 - 74, 255
     * 5               Blush                 0 - 6, 255
     * 6               Complexion            0 - 11, 255
     * 7               Sun Damage            0 - 10, 255
     * 8               Lipstick              0 - 9, 255
     * 9               Moles/Freckles        0 - 17, 255
     * 10              Chest Hair            0 - 16, 255
     * 11              Body Blemishes        0 - 11, 255
     * 12              Add Body Blemishes    0 - 1, 255
     * ```
     *
     * <strong>Note:</strong>
     * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_OVERLAY](?\_0x48F44967FA05CC1E).</strong>
     *
     * Hash: 0xD28DBA90
     */
    function setHeadOverlay(ped, overlayID, index, opacity) {
        SetPedHeadOverlay(ped, overlayID, index, opacity);
    }
    ped_1.setHeadOverlay = setHeadOverlay;
    /**
     * SET_PED_INTO_VEHICLE
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_INTO_VEHICLE](?\_0xF75B0D629E1C063D).</strong>
     *
     * Hash: 0x7500C79
     */
    function setIntoVehicle(ped, vehicle, seatIndex) {
        SetPedIntoVehicle(ped, vehicle, seatIndex);
    }
    ped_1.setIntoVehicle = setIntoVehicle;
    /**
     * This native is used to set prop variation on a ped. Components, drawables and textures IDs are related to the ped model.
     *
     * ### MP Freemode list of props
     *
     * **0**: Hats
     * **1**: Glasses
     * **2**: Ears
     * **6**: Watches
     * **7**: Bracelets
     * List of Prop IDs
     *
     * ```cpp
     * enum eAnchorPoints
     * {
     * ANCHOR_HEAD = 0, // "p_head"
     * ANCHOR_EYES = 1, // "p_eyes"
     * ANCHOR_EARS = 2, // "p_ears"
     * ANCHOR_MOUTH = 3, // "p_mouth"
     * ANCHOR_LEFT_HAND = 4, // "p_lhand"
     * ANCHOR_RIGHT_HAND = 5, // "p_rhand"
     * ANCHOR_LEFT_WRIST = 6, // "p_lwrist"
     * ANCHOR_RIGHT_WRIST = 7, // "p_rwrist"
     * ANCHOR_HIP = 8, // "p_lhip"
     * ANCHOR_LEFT_FOOT = 9, // "p_lfoot"
     * ANCHOR_RIGHT_FOOT = 10, // "p_rfoot"
     * ANCHOR_PH_L_HAND = 11, // "ph_lhand"
     * ANCHOR_PH_R_HAND = 12, // "ph_rhand"
     * NUM_ANCHORS = 13,
     * };
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_PROP_INDEX](?\_0x93376B65A266EB5F).</strong>
     *
     * Hash: 0x829F2E2
     */
    function setPropIndex(ped, componentId, drawableId, textureId, attach) {
        SetPedPropIndex(ped, componentId, drawableId, textureId, attach);
    }
    ped_1.setPropIndex = setPropIndex;
    /**
     * ```
     * p1 is always 0 in R* scripts; and a quick disassembly seems to indicate that p1 is unused.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_COMPONENT_VARIATION](?\_0xC8A9481A01E63C28).</strong>
     *
     * Hash: 0x4111BA46
     */
    function setRandomComponentVariation(ped) {
        SetPedRandomComponentVariation(ped, 0);
    }
    ped_1.setRandomComponentVariation = setRandomComponentVariation;
    /**
     * SET_PED_RANDOM_PROPS
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_PROPS](?\_0xC44AA05345C992C6).</strong>
     *
     * Hash: 0xE3318E0E
     */
    function setRandomProps(ped) {
        SetPedRandomProps(ped);
    }
    ped_1.setRandomProps = setRandomProps;
    /**
     * `PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);`
     * Known values:
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RESET_FLAG](?\_0xC1E8A365BF3B29F2).</strong>
     *
     * Hash: 0xCFF6FF66
     */
    function setResetFlag(ped, flagId, doReset) {
        SetPedResetFlag(ped, flagId, doReset);
    }
    ped_1.setResetFlag = setResetFlag;
    /**
     * p4/p5: Unusued in TU27
     *
     * ### Ragdoll Types
     *
     * **0**: CTaskNMRelax
     * **1**: CTaskNMScriptControl: Hardcoded not to work in networked environments.
     * **Else**: CTaskNMBalance
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL](?\_0xAE99FB955581844A).</strong>
     *
     * Hash: 0x83CB5052
     */
    function setToRagdoll(ped, minTime, maxTime, ragdollType, bAbortIfInjured, bAbortIfDead, bForceScriptControl) {
        SetPedToRagdoll(ped, minTime, maxTime, ragdollType, bAbortIfInjured, bAbortIfDead, bForceScriptControl);
    }
    ped_1.setToRagdoll = setToRagdoll;
    /**
     * ```cpp
     * enum eNMFallType {
     * TYPE_FROM_HIGH = 0,
     * TYPE_OVER_WALL = 1,
     * TYPE_DOWN_STAIRS = 2,
     * TYPE_DIE_TYPES = 3,
     * TYPE_DIE_FROM_HIGH = 4,
     * TYPE_DIE_OVER_WALL = 5,
     * TYPE_DIE_DOWN_STAIRS = 6
     * }
     * ```
     *
     * ```
     * Return variable is never used in R*'s scripts.
     * Not sure what p2 does. It seems like it would be a time judging by it's usage in R*'s scripts, but didn't seem to affect anything in my testings.
     * x, y, and z are coordinates, most likely to where the ped will fall.
     * p7 is probably the force of the fall, but untested, so I left the variable name the same.
     * p8 to p13 are always 0f in R*'s scripts.
     * (Simplified) Example of the usage of the function from R*'s scripts:
     * `ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);`
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL_WITH_FALL](?\_0xD76632D99E4966C8).</strong>
     *
     * Hash: 0xFA12E286
     */
    function setToRagdollWithFall(ped, minTime, maxTime, nFallType, dirX, dirY, dirZ, fGroundHeight, grab1X, grab1Y, grab1Z, grab2X, grab2Y, grab2Z) {
        SetPedToRagdollWithFall(ped, minTime, maxTime, nFallType, dirX, dirY, dirZ, fGroundHeight, grab1X, grab1Y, grab1Z, grab2X, grab2Y, grab2Z);
    }
    ped_1.setToRagdollWithFall = setToRagdollWithFall;
    /**
     * Used for freemode (online) characters.
     * Indices:
     *
     * 1.  black
     * 2.  very light blue/green
     * 3.  dark blue
     * 4.  brown
     * 5.  darker brown
     * 6.  light brown
     * 7.  blue
     * 8.  light blue
     * 9.  pink
     * 10. yellow
     * 11. purple
     * 12. black
     * 13. dark green
     * 14. light brown
     * 15. yellow/black pattern
     * 16. light colored spiral pattern
     * 17. shiny red
     * 18. shiny half blue/half red
     * 19. half black/half light blue
     * 20. white/red perimter
     * 21. green snake
     * 22. red snake
     * 23. dark blue snake
     * 24. dark yellow
     * 25. bright yellow
     * 26. all black
     * 27. red small pupil
     * 28. devil blue/black
     * 29. white small pupil
     * 30. glossed over
     *
     * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_EYE_COLOR](?\_0x50B56988B170AFDF).</strong>
     *
     * Hash: 0xEC09DB1B
     */
    function setEyeColor(ped, index) {
        SetPedEyeColor(ped, index);
    }
    ped_1.setEyeColor = setEyeColor;
    /**
     * Sets the various freemode face features, e.g. nose length, chin shape.
     * <strong>Indexes (From 0 to 19):</strong>
     * Parentheses indicate morph scale/direction as in (-1.0 to 1.0)
     *
     * *   **0**: Nose Width (Thin/Wide)
     * *   **1**: Nose Peak (Up/Down)
     * *   **2**: Nose Length (Long/Short)
     * *   **3**: Nose Bone Curveness (Crooked/Curved)
     * *   **4**: Nose Tip (Up/Down)
     * *   **5**: Nose Bone Twist (Left/Right)
     * *   **6**: Eyebrow (Up/Down)
     * *   **7**: Eyebrow (In/Out)
     * *   **8**: Cheek Bones (Up/Down)
     * *   **9**: Cheek Sideways Bone Size (In/Out)
     * *   **10**: Cheek Bones Width (Puffed/Gaunt)
     * *   **11**: Eye Opening (Both) (Wide/Squinted)
     * *   **12**: Lip Thickness (Both) (Fat/Thin)
     * *   **13**: Jaw Bone Width (Narrow/Wide)
     * *   **14**: Jaw Bone Shape (Round/Square)
     * *   **15**: Chin Bone (Up/Down)
     * *   **16**: Chin Bone Length (In/Out or Backward/Forward)
     * *   **17**: Chin Bone Shape (Pointed/Square)
     * *   **18**: Chin Hole (Chin Bum)
     * *   **19**: Neck Thickness (Thin/Thick)
     * <strong>Note:</strong>
     * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_FACE_FEATURE](?\_0x71A5C1DBA060049E).</strong>
     *
     * Hash: 0x6C8D4458
     */
    function setFaceFeature(ped, index, scale) {
        SetPedFaceFeature(ped, index, scale);
    }
    ped_1.setFaceFeature = setFaceFeature;
    /**
     * ```
     * Used for freemode (online) characters.
     * Called after SET_PED_HEAD_OVERLAY().
     * ```
     *
     * <strong>Note:</strong>
     * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_HEAD_OVERLAY_COLOR](?\_0x497BF74A7B9CB952).</strong>
     *
     * Hash: 0x78935A27
     */
    function setHeadOverlayColor(ped, overlayID, colorType, colorID, secondColorID) {
        SetPedHeadOverlayColor(ped, overlayID, colorType, colorID, secondColorID);
    }
    ped_1.setHeadOverlayColor = setHeadOverlayColor;
})(ped || (ped = {}));
export var player;
(function (player_1) {
    /**
     * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
     *
     * Hash: 0x8689A825
     */
    function getMeleeWeaponDamageModifier(playerId) {
        return GetPlayerMeleeWeaponDamageModifier(playerId);
    }
    player_1.getMeleeWeaponDamageModifier = getMeleeWeaponDamageModifier;
    /**
     * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
     *
     * Hash: 0x2A3D7CDA
     */
    function getWeaponDamageModifier(playerId) {
        return GetPlayerWeaponDamageModifier(playerId);
    }
    player_1.getWeaponDamageModifier = getWeaponDamageModifier;
    /**
     * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
     *
     * Hash: 0xF1543251
     */
    function getWeaponDefenseModifier(playerId) {
        return GetPlayerWeaponDefenseModifier(playerId);
    }
    player_1.getWeaponDefenseModifier = getWeaponDefenseModifier;
    /**
     * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
     *
     * Hash: 0x986B65FF
     */
    function getWeaponDefenseModifier2(playerId) {
        return GetPlayerWeaponDefenseModifier2(playerId);
    }
    player_1.getWeaponDefenseModifier2 = getWeaponDefenseModifier2;
    /**
     * Returns whether or not the specified player has enough information to start a commerce session for.
     *
     * Hash: 0x429461C3
     */
    function canStartCommerceSession(playerSrc) {
        return CanPlayerStartCommerceSession(playerSrc);
    }
    player_1.canStartCommerceSession = canStartCommerceSession;
    /**
     * ```
     * `This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);`
     * `PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.`
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PLAYER_WANTED_LEVEL](?\_0xB302540597885499).</strong>
     *
     * Hash: 0x54EA5BCC
     */
    function clearWantedLevel(player) {
        ClearPlayerWantedLevel(player);
    }
    player_1.clearWantedLevel = clearWantedLevel;
    /**
     * Returns whether or not the player exists
     *
     * Hash: 0x12038599
     */
    function doesExist(playerSrc) {
        return DoesPlayerExist(playerSrc);
    }
    player_1.doesExist = doesExist;
    /**
     * Requests whether or not the player owns the specified SKU.
     *
     * Hash: 0x167ABA27
     */
    function doesOwnSku(playerSrc, skuId) {
        return DoesPlayerOwnSku(playerSrc, skuId);
    }
    player_1.doesOwnSku = doesOwnSku;
    /**
     * Requests whether or not the player owns the specified package.
     *
     * Hash: 0xDEF0480B
     */
    function doesOwnSkuExt(playerSrc, skuId) {
        return DoesPlayerOwnSkuExt(playerSrc, skuId);
    }
    player_1.doesOwnSkuExt = doesOwnSkuExt;
    /**
     * No comment provided
     *
     * Hash: 0xBA0613E1
     */
    function drop(playerSrc, reason) {
        DropPlayer(playerSrc, reason);
    }
    player_1.drop = drop;
    /**
     * No comment provided
     *
     * Hash: 0x62FC38D0
     */
    function getAirDragMultiplierForsVehicle(playerSrc) {
        return GetAirDragMultiplierForPlayersVehicle(playerSrc);
    }
    player_1.getAirDragMultiplierForsVehicle = getAirDragMultiplierForsVehicle;
    /**
     * No comment provided
     *
     * Hash: 0xFF7F66AB
     */
    function getNumIdentifiers(playerSrc) {
        return GetNumPlayerIdentifiers(playerSrc);
    }
    player_1.getNumIdentifiers = getNumIdentifiers;
    /**
     * No comment provided
     *
     * Hash: 0x63D13184
     */
    function getNumIndices() {
        return GetNumPlayerIndices();
    }
    player_1.getNumIndices = getNumIndices;
    /**
     * No comment provided
     *
     * Hash: 0x619E4A3D
     */
    function getNumTokens(playerSrc) {
        return GetNumPlayerTokens(playerSrc);
    }
    player_1.getNumTokens = getNumTokens;
    /**
     * Gets the current camera rotation for a specified player. This native is used server side when using OneSync.
     *
     * Hash: 0x433C765D
     */
    function getCameraRotation(playerSrc) {
        return new Vector3(GetPlayerCameraRotation(playerSrc));
    }
    player_1.getCameraRotation = getCameraRotation;
    /**
     * No comment provided
     *
     * Hash: 0xFEE404F9
     */
    function getEndpoint(playerSrc) {
        return GetPlayerEndpoint(playerSrc);
    }
    player_1.getEndpoint = getEndpoint;
    /**
     * Gets the current fake wanted level for a specified player. This native is used server side when using OneSync.
     *
     * Hash: 0x98D244
     */
    function getFakeWantedLevel(playerSrc) {
        return GetPlayerFakeWantedLevel(playerSrc);
    }
    player_1.getFakeWantedLevel = getFakeWantedLevel;
    /**
     * Gets the focus position (i.e. the position of the active camera in the game world) of a player.
     *
     * Hash: 0x586F80FF
     */
    function getFocusPos(playerSrc) {
        return new Vector3(GetPlayerFocusPos(playerSrc));
    }
    player_1.getFocusPos = getFocusPos;
    /**
     * No comment provided
     *
     * Hash: 0xC8A9CE08
     */
    function getFromIndex(index) {
        return GetPlayerFromIndex(index);
    }
    player_1.getFromIndex = getFromIndex;
    /**
     * No comment provided
     *
     * Hash: 0xE52D9680
     */
    function getGuid(playerSrc) {
        return GetPlayerGuid(playerSrc);
    }
    player_1.getGuid = getGuid;
    /**
     * To get the number of identifiers, use [GET_NUM_PLAYER_IDENTIFIERS](#\_0xFF7F66AB)
     *
     * To get a specific type of identifier, use [GET_PLAYER_IDENTIFIER_BY_TYPE](#\_0xA61C8FC6)
     *
     * Hash: 0x7302DBCF
     */
    function getIdentifier(playerSrc, identiferIndex) {
        return GetPlayerIdentifier(playerSrc, identiferIndex);
    }
    player_1.getIdentifier = getIdentifier;
    /**
     * Get an identifier from a player by the type of the identifier.
     * Known [Identifiers](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/GetPlayerIdentifiers/#identifier-types)
     *
     * Hash: 0xA61C8FC6
     */
    function getIdentifierByType(playerSrc, identifierType) {
        return GetPlayerIdentifierByType(playerSrc, identifierType);
    }
    player_1.getIdentifierByType = getIdentifierByType;
    /**
     * No comment provided
     *
     * Hash: 0x680C90EE
     */
    function getInvincible(playerSrc) {
        return GetPlayerInvincible(playerSrc);
    }
    player_1.getInvincible = getInvincible;
    /**
     * No comment provided
     *
     * Hash: 0x427E8E6A
     */
    function getLastMsg(playerSrc) {
        return GetPlayerLastMsg(playerSrc);
    }
    player_1.getLastMsg = getLastMsg;
    /**
     * No comment provided
     *
     * Hash: 0x2A50657
     */
    function getMaxArmour(playerSrc) {
        return GetPlayerMaxArmour(playerSrc);
    }
    player_1.getMaxArmour = getMaxArmour;
    /**
     * No comment provided
     *
     * Hash: 0x8154E470
     */
    function getMaxHealth(playerSrc) {
        return GetPlayerMaxHealth(playerSrc);
    }
    player_1.getMaxHealth = getMaxHealth;
    /**
     * No comment provided
     *
     * Hash: 0x406B4B20
     */
    function getName(playerSrc) {
        return GetPlayerName(playerSrc);
    }
    player_1.getName = getName;
    /**
     * Used to get the player's Ped Entity ID when a valid `playerSrc` is passed.
     *
     * Hash: 0x6E31E993
     */
    function getPed(playerSrc) {
        return GetPlayerPed(playerSrc);
    }
    player_1.getPed = getPed;
    /**
     * ```cpp
     * const int ENET_PACKET_LOSS_SCALE = 65536;
     *
     * enum PeerStatistics
     * {
     * // PacketLoss will only update once every 10 seconds, use PacketLossEpoch if you want the time
     * // since the last time the packet loss was updated.
     *
     * // the amount of packet loss the player has, needs to be scaled with PACKET_LOSS_SCALE
     * PacketLoss = 0,
     * // The variance in the packet loss
     * PacketLossVariance = 1,
     * // The time since the last packet update in ms, relative to the peers connection time
     * PacketLossEpoch = 2,
     * // The mean amount of time it takes for a packet to get to the client (ping)
     * RoundTripTime = 3,
     * // The variance in the round trip time
     * RoundTripTimeVariance = 4,
     * // Despite their name, these are only updated once every 5 seconds, you can get the last time this was updated with PacketThrottleEpoch
     * // The last recorded round trip time of a packet
     * LastRoundTripTime = 5,
     * // The last round trip time variance
     * LastRoundTripTimeVariance = 6,
     * // The time since the last packet throttle update, relative to the peers connection time
     * PacketThrottleEpoch = 7,
     * };
     * ```
     *
     * These statistics only update once every 10 seconds.
     *
     * Hash: 0x9A928294
     */
    function getPeerStatistics(playerSrc, peerStatistic) {
        return GetPlayerPeerStatistics(playerSrc, peerStatistic);
    }
    player_1.getPeerStatistics = getPeerStatistics;
    /**
     * See [GET_PLAYER_PEER_STATISTICS](#\_0x9A928294) if you want more detailed information, like packet loss, and packet/rtt variance
     *
     * Hash: 0xFF1290D4
     */
    function getPing(playerSrc) {
        return GetPlayerPing(playerSrc);
    }
    player_1.getPing = getPing;
    /**
     * Gets the routing bucket for the specified player.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0x52441C34
     */
    function getRoutingBucket(playerSrc) {
        return GetPlayerRoutingBucket(playerSrc);
    }
    player_1.getRoutingBucket = getRoutingBucket;
    /**
     * No comment provided
     *
     * Hash: 0x9873E404
     */
    function getTeam(playerSrc) {
        return GetPlayerTeam(playerSrc);
    }
    player_1.getTeam = getTeam;
    /**
     * ```
     * Gets the amount of time player has spent evading the cops.
     * Counter starts and increments only when cops are chasing the player.
     * If the player is evading, the timer will pause.
     * ```
     *
     * Hash: 0x7ADE63E1
     */
    function getTimeInPursuit(playerSrc, lastPursuit) {
        return GetPlayerTimeInPursuit(playerSrc, lastPursuit);
    }
    player_1.getTimeInPursuit = getTimeInPursuit;
    /**
     * Gets the current time online for a specified player.
     *
     * Hash: 0x67D2E605
     */
    function getTimeOnline(playerSrc) {
        return GetPlayerTimeOnline(playerSrc);
    }
    player_1.getTimeOnline = getTimeOnline;
    /**
     * Gets a player's token. Tokens can be used to enhance banning logic, however are specific to a server.
     *
     * Hash: 0x54C06897
     */
    function getToken(playerSrc, index) {
        return GetPlayerToken(playerSrc, index);
    }
    player_1.getToken = getToken;
    /**
     * Gets the current known coordinates for the specified player from cops perspective. This native is used server side when using OneSync.
     *
     * Hash: 0x821F2D2C
     */
    function getWantedCentrePosition(playerSrc) {
        return new Vector3(GetPlayerWantedCentrePosition(playerSrc));
    }
    player_1.getWantedCentrePosition = getWantedCentrePosition;
    /**
     * ```
     * Returns given players wanted level server-side.
     * ```
     *
     * Hash: 0xBDCDD163
     */
    function getWantedLevel(playerSrc) {
        return GetPlayerWantedLevel(playerSrc);
    }
    player_1.getWantedLevel = getWantedLevel;
    /**
     * This native checks if the given ped is a player.
     *
     * Hash: 0x404794CA
     */
    function isPedA(ped) {
        return IsPedAPlayer(ped);
    }
    player_1.isPedA = isPedA;
    /**
     * No comment provided
     *
     * Hash: 0xDEDAE23D
     */
    function isAceAllowed(playerSrc, _object) {
        return IsPlayerAceAllowed(playerSrc, _object);
    }
    player_1.isAceAllowed = isAceAllowed;
    /**
     * Requests whether or not the commerce data for the specified player has loaded.
     *
     * Hash: 0xBEFE93F4
     */
    function isCommerceInfoLoaded(playerSrc) {
        return IsPlayerCommerceInfoLoaded(playerSrc);
    }
    player_1.isCommerceInfoLoaded = isCommerceInfoLoaded;
    /**
     * Requests whether or not the commerce data for the specified player has loaded from Tebex.
     *
     * Hash: 0x1D14F4FE
     */
    function isCommerceInfoLoadedExt(playerSrc) {
        return IsPlayerCommerceInfoLoadedExt(playerSrc);
    }
    player_1.isCommerceInfoLoadedExt = isCommerceInfoLoadedExt;
    /**
     * ```
     * This will return true if the player is evading wanted level, meaning that the wanted level stars are blink.
     * Otherwise will return false.
     *
     * If the player is not wanted, it simply returns false.
     * ```
     *
     * Hash: 0x89A3881A
     */
    function isEvadingWantedLevel(playerSrc) {
        return IsPlayerEvadingWantedLevel(playerSrc);
    }
    player_1.isEvadingWantedLevel = isEvadingWantedLevel;
    /**
     * No comment provided
     *
     * Hash: 0x1F14F2AC
     */
    function isInFreeCamMode(playerSrc) {
        return IsPlayerInFreeCamMode(playerSrc);
    }
    player_1.isInFreeCamMode = isInFreeCamMode;
    /**
     * No comment provided
     *
     * Hash: 0xC7D2C20C
     */
    function isUsingSuperJump(playerSrc) {
        return IsPlayerUsingSuperJump(playerSrc);
    }
    player_1.isUsingSuperJump = isUsingSuperJump;
    /**
     * Requests the commerce data for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.
     *
     * Hash: 0xA8F63EAB
     */
    function loadCommerceData(playerSrc) {
        LoadPlayerCommerceData(playerSrc);
    }
    player_1.loadCommerceData = loadCommerceData;
    /**
     * Requests the commerce data from Tebex for the specified player, including the owned SKUs.
     *
     * Use [`IS_PLAYER_COMMERCE_INFO_LOADED_EXT`](#\_0x1D14F4FE) to check if it has loaded.
     *
     * This will not automatically update whenever a client purchases a package, if you want to fetch new purchases you will need to call this native again.
     *
     * This native will temporarily cache the players commerce data for 10 seconds, a call to this native after 10 seconds will re-fetch the players commerce data.
     *
     * Hash: 0x7995539E
     */
    function loadCommerceDataExt(playerSrc) {
        LoadPlayerCommerceDataExt(playerSrc);
    }
    player_1.loadCommerceDataExt = loadCommerceDataExt;
    /**
     * Requests the specified player to buy the passed SKU. This'll pop up a prompt on the client, which upon acceptance
     * will open the browser prompting further purchase details.
     *
     * Hash: 0x96F93CCE
     */
    function requestCommerceSession(playerSrc, skuId) {
        RequestPlayerCommerceSession(playerSrc, skuId);
    }
    player_1.requestCommerceSession = requestCommerceSession;
    /**
     * ```
     * Flags:
     * SPC_AMBIENT_SCRIPT = (1 << 1),
     * SPC_CLEAR_TASKS = (1 << 2),
     * SPC_REMOVE_FIRES = (1 << 3),
     * SPC_REMOVE_EXPLOSIONS = (1 << 4),
     * SPC_REMOVE_PROJECTILES = (1 << 5),
     * SPC_DEACTIVATE_GADGETS = (1 << 6),
     * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
     * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
     * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
     * SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
     * SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
     * SPC_ALLOW_PAD_SHAKE = (1 << 12)
     * See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_CONTROL](?\_0x8D32347D6D4C40A2).</strong>
     *
     * Hash: 0xD17AFCD8
     */
    function setControl(player, bHasControl, flags) {
        SetPlayerControl(player, bHasControl, flags);
    }
    player_1.setControl = setControl;
    /**
     * Sets the culling radius for the specified player.
     * Set to `0.0` to reset.
     *
     * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
     *
     * Hash: 0x8A2FBAD4
     */
    function setCullingRadius(playerSrc, radius) {
        SetPlayerCullingRadius(playerSrc, radius);
    }
    player_1.setCullingRadius = setCullingRadius;
    /**
     * Make the player impervious to all forms of damage.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_INVINCIBLE](?\_0x239528EACDC3E7DE).</strong>
     *
     * Hash: 0xDFB9A2A2
     */
    function setInvincible(player, bInvincible) {
        SetPlayerInvincible(player, bInvincible);
    }
    player_1.setInvincible = setInvincible;
    /**
     * Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.
     * As per usual, make sure to request the model first and wait until it has loaded.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_MODEL](?\_0x00A1CADD00108836).</strong>
     *
     * Hash: 0x774A4C54
     */
    function setModel(player, model) {
        if (typeof model === 'string')
            model = misc.getHashKey(model);
        SetPlayerModel(player, model);
    }
    player_1.setModel = setModel;
    /**
     * Sets the routing bucket for the specified player.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0x6504EB38
     */
    function setRoutingBucket(playerSrc, bucket) {
        SetPlayerRoutingBucket(playerSrc, bucket);
    }
    player_1.setRoutingBucket = setRoutingBucket;
    /**
     * SET_PLAYER_WANTED_LEVEL
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_WANTED_LEVEL](?\_0x39FF19C64EF7DA5B).</strong>
     *
     * Hash: 0xB7A0914B
     */
    function setWantedLevel(player, wantedLevel, delayedResponse) {
        SetPlayerWantedLevel(player, wantedLevel, delayedResponse);
    }
    player_1.setWantedLevel = setWantedLevel;
    /**
     * No comment provided
     *
     * Hash: 0x1E35DBBA
     */
    function tempBan(playerSrc, reason) {
        TempBanPlayer(playerSrc, reason);
    }
    player_1.tempBan = tempBan;
    /**
     * On the server this will return the players source, on the client it will return the player handle.
     *
     * Hash: 0xA56135E0
     */
    function getFromStateBagName(bagName) {
        return GetPlayerFromStateBagName(bagName);
    }
    player_1.getFromStateBagName = getFromStateBagName;
})(player || (player = {}));
export var vehicle;
(function (vehicle_1) {
    /**
     * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
     *
     * Hash: 0xA886495D
     */
    function getHeliBodyHealth(heli) {
        return GetHeliBodyHealth(heli);
    }
    vehicle_1.getHeliBodyHealth = getHeliBodyHealth;
    /**
     * This is a getter for [SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE](#\_0xEDBC8405B3895CC9)
     *
     * Hash: 0x82AFC0A3
     */
    function getHeliDisableExplodeFromBodyDamage(heli) {
        return GetHeliDisableExplodeFromBodyDamage(heli);
    }
    vehicle_1.getHeliDisableExplodeFromBodyDamage = getHeliDisableExplodeFromBodyDamage;
    /**
     * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
     *
     * Hash: 0xA0FA0354
     */
    function getHeliEngineHealth(heli) {
        return GetHeliEngineHealth(heli);
    }
    vehicle_1.getHeliEngineHealth = getHeliEngineHealth;
    /**
     * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
     *
     * Hash: 0xD4EC7858
     */
    function getHeliGasTankHealth(heli) {
        return GetHeliGasTankHealth(heli);
    }
    vehicle_1.getHeliGasTankHealth = getHeliGasTankHealth;
    /**
     * No comment provided
     *
     * Hash: 0xC37D668
     */
    function getHeliMainRotorDamageScale(heli) {
        return GetHeliMainRotorDamageScale(heli);
    }
    vehicle_1.getHeliMainRotorDamageScale = getHeliMainRotorDamageScale;
    /**
     * No comment provided
     *
     * Hash: 0x1944AC95
     */
    function getHeliPitchControl(heli) {
        return GetHeliPitchControl(heli);
    }
    vehicle_1.getHeliPitchControl = getHeliPitchControl;
    /**
     * No comment provided
     *
     * Hash: 0xC40161E2
     */
    function getHeliRearRotorDamageScale(heli) {
        return GetHeliRearRotorDamageScale(heli);
    }
    vehicle_1.getHeliRearRotorDamageScale = getHeliRearRotorDamageScale;
    /**
     * This native is a getter for [SET_HELI_TAIL_ROTOR_HEALTH](#\_0xFE205F38AAA58E5B)
     *
     * Hash: 0x33EE6E2B
     */
    function getHeliRearRotorHealth(vehicle) {
        return GetHeliRearRotorHealth(vehicle);
    }
    vehicle_1.getHeliRearRotorHealth = getHeliRearRotorHealth;
    /**
     * No comment provided
     *
     * Hash: 0x12948DE9
     */
    function getHeliRollControl(heli) {
        return GetHeliRollControl(heli);
    }
    vehicle_1.getHeliRollControl = getHeliRollControl;
    /**
     * No comment provided
     *
     * Hash: 0x22239130
     */
    function getHeliTailRotorDamageScale(heli) {
        return GetHeliTailRotorDamageScale(heli);
    }
    vehicle_1.getHeliTailRotorDamageScale = getHeliTailRotorDamageScale;
    /**
     * **Note**: This native is deprecated, please use [`GET_HELI_REAR_ROTOR_HEALTH`](#\_0x33EE6E2B) instead.
     *
     * Hash: 0xA41BC13D
     */
    function getHeliTailRotorHealth(vehicle) {
        return GetHeliTailRotorHealth(vehicle);
    }
    vehicle_1.getHeliTailRotorHealth = getHeliTailRotorHealth;
    /**
     * No comment provided
     *
     * Hash: 0x8E86238D
     */
    function getHeliThrottleControl(heli) {
        return GetHeliThrottleControl(heli);
    }
    vehicle_1.getHeliThrottleControl = getHeliThrottleControl;
    /**
     * No comment provided
     *
     * Hash: 0x8FDC0768
     */
    function getHeliYawControl(heli) {
        return GetHeliYawControl(heli);
    }
    vehicle_1.getHeliYawControl = getHeliYawControl;
    /**
     * No comment provided
     *
     * Hash: 0x3EFE38D1
     */
    function getIsHeliEngineRunning(heli) {
        return GetIsHeliEngineRunning(heli);
    }
    vehicle_1.getIsHeliEngineRunning = getIsHeliEngineRunning;
    /**
     * No comment provided
     *
     * Hash: 0x1C939E87
     */
    function getThrusterSideRcsThrottle(jetpack) {
        return GetThrusterSideRcsThrottle(jetpack);
    }
    vehicle_1.getThrusterSideRcsThrottle = getThrusterSideRcsThrottle;
    /**
     * No comment provided
     *
     * Hash: 0x94E24C96
     */
    function getThrusterThrottle(jetpack) {
        return GetThrusterThrottle(jetpack);
    }
    vehicle_1.getThrusterThrottle = getThrusterThrottle;
    /**
     * No comment provided
     *
     * Hash: 0x456E34A
     */
    function getTrainBackwardCarriage(train) {
        return GetTrainBackwardCarriage(train);
    }
    vehicle_1.getTrainBackwardCarriage = getTrainBackwardCarriage;
    /**
     * No comment provided
     *
     * Hash: 0x24DC88D9
     */
    function getTrainForwardCarriage(train) {
        return GetTrainForwardCarriage(train);
    }
    vehicle_1.getTrainForwardCarriage = getTrainForwardCarriage;
    /**
     * This is a getter for the client-side native [`START_VEHICLE_HORN`](#\_0x9C8C6504B5B63D2C), which allows you to return the horn type of the vehicle.
     *
     * **Note**: This native only gets the hash value set with `START_VEHICLE_HORN`. If a wrong hash is passed into `START_VEHICLE_HORN`, it will return this wrong hash.
     *
     * ```cpp
     * enum eHornTypes
     * {
     * NORMAL = 1330140148,
     * HELDDOWN = -2087385909,
     * AGGRESSIVE = -92810745
     * }
     * ```
     *
     * Hash: 0xDEA49773
     */
    function getHornType(vehicle) {
        return GetVehicleHornType(vehicle);
    }
    vehicle_1.getHornType = getHornType;
    /**
     * This is a getter for [SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD](#\_0x3EC8BF18AA453FE9)
     *
     * Hash: 0x23E46BD7
     */
    function isHeliTailBoomBreakable(heli) {
        return IsHeliTailBoomBreakable(heli);
    }
    vehicle_1.isHeliTailBoomBreakable = isHeliTailBoomBreakable;
    /**
     * No comment provided
     *
     * Hash: 0x2C59F987
     */
    function isHeliTailBoomBroken(heli) {
        return IsHeliTailBoomBroken(heli);
    }
    vehicle_1.isHeliTailBoomBroken = isHeliTailBoomBroken;
    /**
     * No comment provided
     *
     * Hash: 0xFA9336E5
     */
    function isTrainCaboose(train) {
        return IsTrainCaboose(train);
    }
    vehicle_1.isTrainCaboose = isTrainCaboose;
    /**
     * No comment provided
     *
     * Hash: 0x77CC80DC
     */
    function doesTrainStopAtStations(train) {
        return DoesTrainStopAtStations(train);
    }
    vehicle_1.doesTrainStopAtStations = doesTrainStopAtStations;
    /**
     * Gets the trains desired speed.
     *
     * Hash: 0xA4921EF5
     */
    function getTrainCruiseSpeed(train) {
        return GetTrainCruiseSpeed(train);
    }
    vehicle_1.getTrainCruiseSpeed = getTrainCruiseSpeed;
    /**
     * Gets the direction the train is facing
     *
     * Hash: 0x8DAF79B6
     */
    function getTrainDirection(train) {
        return GetTrainDirection(train);
    }
    vehicle_1.getTrainDirection = getTrainDirection;
    /**
     * No comment provided
     *
     * Hash: 0x81B50033
     */
    function getTrainState(train) {
        return GetTrainState(train);
    }
    vehicle_1.getTrainState = getTrainState;
    /**
     * No comment provided
     *
     * Hash: 0x9AA339D
     */
    function getTrainTrackIndex(train) {
        return GetTrainTrackIndex(train);
    }
    vehicle_1.getTrainTrackIndex = getTrainTrackIndex;
    /**
     * No comment provided
     *
     * Hash: 0x483B013C
     */
    function getHandbrake(vehicle) {
        return GetVehicleHandbrake(vehicle);
    }
    vehicle_1.getHandbrake = getHandbrake;
    /**
     * No comment provided
     *
     * Hash: 0x1382FCEA
     */
    function getSteeringAngle(vehicle) {
        return GetVehicleSteeringAngle(vehicle);
    }
    vehicle_1.getSteeringAngle = getSteeringAngle;
    /**
     * No comment provided
     *
     * Hash: 0xBB340D04
     */
    function isEngineStarting(vehicle) {
        return IsVehicleEngineStarting(vehicle);
    }
    vehicle_1.isEngineStarting = isEngineStarting;
    /**
     * Creates a vehicle with the specified model at the specified position. This vehicle will initially be owned by the creating
     * script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
     *
     * ```
     * NativeDB Added Parameter 8: BOOL p7
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_VEHICLE](?\_0xAF35D0D2583051B0).</strong>
     *
     * Hash: 0xDD75460A
     */
    function create(modelHash, pos, heading, isNetwork, netMissionEntity) {
        if (typeof modelHash === 'string')
            modelHash = misc.getHashKey(modelHash);
        return CreateVehicle(modelHash, pos.x, pos.y, pos.z, heading, isNetwork, netMissionEntity);
    }
    vehicle_1.create = create;
    /**
     * Equivalent to CREATE_VEHICLE, but it uses 'server setter' logic (like the former CREATE_AUTOMOBILE) as a workaround for
     * reliability concerns regarding entity creation RPC.
     *
     * Unlike CREATE_AUTOMOBILE, this supports other vehicle types as well.
     *
     * Hash: 0x6AE51D4B
     */
    function createServerSetter(modelHash, _type, pos, heading) {
        if (typeof modelHash === 'string')
            modelHash = misc.getHashKey(modelHash);
        return CreateVehicleServerSetter(modelHash, _type, pos.x, pos.y, pos.z, heading);
    }
    vehicle_1.createServerSetter = createServerSetter;
    /**
     * Deletes the specified `entity` and any carriage its attached to, or that is attached to it.
     *
     * Hash: 0x523BA3DA
     */
    function deleteTrain(entity) {
        DeleteTrain(entity);
    }
    vehicle_1.deleteTrain = deleteTrain;
    /**
     * No comment provided
     *
     * Hash: 0x43F15989
     */
    function doesBoatSinkWhenWrecked(vehicle) {
        return DoesBoatSinkWhenWrecked(vehicle);
    }
    vehicle_1.doesBoatSinkWhenWrecked = doesBoatSinkWhenWrecked;
    /**
     * Returns all vehicle handles known to the server.
     * The data returned adheres to the following layout:
     *
     * ```
     * [127, 42, 13, 37]
     * ```
     *
     * Hash: 0x332169F5
     */
    function getAlls() {
        return GetAllVehicles();
    }
    vehicle_1.getAlls = getAlls;
    /**
     * No comment provided
     *
     * Hash: 0x7DC6D022
     */
    function getIsEngineRunning(vehicle) {
        return GetIsVehicleEngineRunning(vehicle);
    }
    vehicle_1.getIsEngineRunning = getIsEngineRunning;
    /**
     * No comment provided
     *
     * Hash: 0xD7EC8760
     */
    function getIsPrimaryColourCustom(vehicle) {
        return GetIsVehiclePrimaryColourCustom(vehicle);
    }
    vehicle_1.getIsPrimaryColourCustom = getIsPrimaryColourCustom;
    /**
     * No comment provided
     *
     * Hash: 0x288AD228
     */
    function getIsSecondaryColourCustom(vehicle) {
        return GetIsVehicleSecondaryColourCustom(vehicle);
    }
    vehicle_1.getIsSecondaryColourCustom = getIsSecondaryColourCustom;
    /**
     * See the client-side [GET_LANDING_GEAR_STATE](#\_0x9B0F3DCA3DB0F4CD) native for a description of landing gear states.
     *
     * Hash: 0xA6F02670
     */
    function getLandingGearState(vehicle) {
        return GetLandingGearState(vehicle);
    }
    vehicle_1.getLandingGearState = getLandingGearState;
    /**
     * No comment provided
     *
     * Hash: 0x95070FA
     */
    function getTrainCarriageEngine(train) {
        return GetTrainCarriageEngine(train);
    }
    vehicle_1.getTrainCarriageEngine = getTrainCarriageEngine;
    /**
     * No comment provided
     *
     * Hash: 0x4B8285CF
     */
    function getTrainCarriageIndex(train) {
        return GetTrainCarriageIndex(train);
    }
    vehicle_1.getTrainCarriageIndex = getTrainCarriageIndex;
    /**
     * No comment provided
     *
     * Hash: 0x2B2FCC28
     */
    function getBodyHealth(vehicle) {
        return GetVehicleBodyHealth(vehicle);
    }
    vehicle_1.getBodyHealth = getBodyHealth;
    /**
     * No comment provided
     *
     * Hash: 0x40D82D88
     */
    function getColours(vehicle) {
        return GetVehicleColours(vehicle);
    }
    vehicle_1.getColours = getColours;
    /**
     * No comment provided
     *
     * Hash: 0x1C2B9FEF
     */
    function getCustomPrimaryColour(vehicle) {
        return GetVehicleCustomPrimaryColour(vehicle);
    }
    vehicle_1.getCustomPrimaryColour = getCustomPrimaryColour;
    /**
     * No comment provided
     *
     * Hash: 0x3FF247A2
     */
    function getCustomSecondaryColour(vehicle) {
        return GetVehicleCustomSecondaryColour(vehicle);
    }
    vehicle_1.getCustomSecondaryColour = getCustomSecondaryColour;
    /**
     * No comment provided
     *
     * Hash: 0xA0DBD08D
     */
    function getDashboardColour(vehicle) {
        return GetVehicleDashboardColour(vehicle);
    }
    vehicle_1.getDashboardColour = getDashboardColour;
    /**
     * No comment provided
     *
     * Hash: 0xFD15C065
     */
    function getDirtLevel(vehicle) {
        return GetVehicleDirtLevel(vehicle);
    }
    vehicle_1.getDirtLevel = getDirtLevel;
    /**
     * Currently it only works when set to "all players".
     *
     * Hash: 0x1DC50247
     */
    function getDoorsLockedForPlayer(vehicle) {
        return GetVehicleDoorsLockedForPlayer(vehicle);
    }
    vehicle_1.getDoorsLockedForPlayer = getDoorsLockedForPlayer;
    /**
     * ```lua
     * enum_VehicleLockStatus = {
     * None = 0,
     * Locked = 2,
     * LockedForPlayer = 3,
     * StickPlayerInside = 4, -- Doesn't allow players to exit the vehicle with the exit vehicle key.
     * CanBeBrokenInto = 7, -- Can be broken into the car. If the glass is broken, the value will be set to 1
     * CanBeBrokenIntoPersist = 8, -- Can be broken into persist
     * CannotBeTriedToEnter = 10, -- Cannot be tried to enter (Nothing happens when you press the vehicle enter key).
     * }
     * ```
     *
     * It should be [noted](https://forum.cfx.re/t/4863241) that while the [client-side command](#\_0x25BC98A59C2EA962) and its
     * setter distinguish between states 0 (unset) and 1 (unlocked), the game will synchronize both as state 0, so the server-side
     * command will return only '0' if unlocked.
     *
     * Hash: 0xD72CEF2
     */
    function getDoorLockStatus(vehicle) {
        return GetVehicleDoorLockStatus(vehicle);
    }
    vehicle_1.getDoorLockStatus = getDoorLockStatus;
    /**
     * Returns the open position of the specified door on the target vehicle.
     *
     * Hash: 0x6E35C49C
     */
    function getDoorStatus(vehicle, doorIndex) {
        return GetVehicleDoorStatus(vehicle, doorIndex);
    }
    vehicle_1.getDoorStatus = getDoorStatus;
    /**
     * No comment provided
     *
     * Hash: 0x8880038A
     */
    function getEngineHealth(vehicle) {
        return GetVehicleEngineHealth(vehicle);
    }
    vehicle_1.getEngineHealth = getEngineHealth;
    /**
     * No comment provided
     *
     * Hash: 0x80E4659B
     */
    function getExtraColours(vehicle) {
        return GetVehicleExtraColours(vehicle);
    }
    vehicle_1.getExtraColours = getExtraColours;
    /**
     * Gets the flight nozzel position for the specified vehicle. See the client-side [\_GET_VEHICLE_FLIGHT_NOZZLE_POSITION](#\_0xDA62027C8BDB326E) native for usage examples.
     *
     * Hash: 0xAD40AD55
     */
    function getFlightNozzlePosition(vehicle) {
        return GetVehicleFlightNozzlePosition(vehicle);
    }
    vehicle_1.getFlightNozzlePosition = getFlightNozzlePosition;
    /**
     * No comment provided
     *
     * Hash: 0xD7147656
     */
    function getHeadlightsColour(vehicle) {
        return GetVehicleHeadlightsColour(vehicle);
    }
    vehicle_1.getHeadlightsColour = getHeadlightsColour;
    /**
     * Gets the lock on state for the specified vehicle. See the client-side [GET_VEHICLE_HOMING_LOCKON_STATE](#\_0xE6B0E8CFC3633BF0) native for a description of lock on states.
     *
     * Hash: 0xFBDE9FD8
     */
    function getHomingLockonState(vehicle) {
        return GetVehicleHomingLockonState(vehicle);
    }
    vehicle_1.getHomingLockonState = getHomingLockonState;
    /**
     * No comment provided
     *
     * Hash: 0xCCFF3B6E
     */
    function getInteriorColour(vehicle) {
        return GetVehicleInteriorColour(vehicle);
    }
    vehicle_1.getInteriorColour = getInteriorColour;
    /**
     * No comment provided
     *
     * Hash: 0x7C278621
     */
    function getLightsState(vehicle) {
        return GetVehicleLightsState(vehicle);
    }
    vehicle_1.getLightsState = getLightsState;
    /**
     * No comment provided
     *
     * Hash: 0xEC82A51D
     */
    function getLivery(vehicle) {
        return GetVehicleLivery(vehicle);
    }
    vehicle_1.getLivery = getLivery;
    /**
     * Gets the vehicle that is locked on to for the specified vehicle.
     *
     * Hash: 0x4A557117
     */
    function getLockOnTarget(vehicle) {
        return GetVehicleLockOnTarget(vehicle);
    }
    vehicle_1.getLockOnTarget = getLockOnTarget;
    /**
     * Getter to check the neon colour of a vehicle. This native is the server side getter of [GET_VEHICLE_NEON_LIGHTS_COLOUR](#\_0x7619EEE8C886757F).
     *
     * Hash: 0xD9319DCB
     */
    function getNeonColour(vehicle) {
        return GetVehicleNeonColour(vehicle);
    }
    vehicle_1.getNeonColour = getNeonColour;
    /**
     * Getter to check if one of the neon lights of a vehicle is enabled. This native is the server side getter of [IS_VEHICLE_NEON_LIGHT_ENABLED](#\_0x8C4B92553E4766A5).
     *
     * ```cpp
     * enum neonIndex
     * {
     * NEON_BACK = 0,   // Back neon
     * NEON_RIGHT = 1,  // Right neon
     * NEON_LEFT = 2,   // Left neon
     * NEON_FRONT = 3   // Front neon
     * };
     * ```
     *
     * Hash: 0x684BDBF2
     */
    function getNeonEnabled(vehicle, neonIndex) {
        return GetVehicleNeonEnabled(vehicle, neonIndex);
    }
    vehicle_1.getNeonEnabled = getNeonEnabled;
    /**
     * No comment provided
     *
     * Hash: 0xE8522D58
     */
    function getNumberPlateText(vehicle) {
        return GetVehicleNumberPlateText(vehicle);
    }
    vehicle_1.getNumberPlateText = getNumberPlateText;
    /**
     * No comment provided
     *
     * Hash: 0x499747B6
     */
    function getNumberPlateTextIndex(vehicle) {
        return GetVehicleNumberPlateTextIndex(vehicle);
    }
    vehicle_1.getNumberPlateTextIndex = getNumberPlateTextIndex;
    /**
     * Gets the vehicle the specified Ped is/was in depending on bool value. This native is used server side when using OneSync.
     *
     * Hash: 0xAFE92319
     */
    function getPedIsIn(ped, lastVehicle) {
        return GetVehiclePedIsIn(ped, lastVehicle);
    }
    vehicle_1.getPedIsIn = getPedIsIn;
    /**
     * No comment provided
     *
     * Hash: 0xE41595CE
     */
    function getPetrolTankHealth(vehicle) {
        return GetVehiclePetrolTankHealth(vehicle);
    }
    vehicle_1.getPetrolTankHealth = getPetrolTankHealth;
    /**
     * No comment provided
     *
     * Hash: 0x57037960
     */
    function getRadioStationIndex(vehicle) {
        return GetVehicleRadioStationIndex(vehicle);
    }
    vehicle_1.getRadioStationIndex = getRadioStationIndex;
    /**
     * No comment provided
     *
     * Hash: 0x872CF42
     */
    function getRoofLivery(vehicle) {
        return GetVehicleRoofLivery(vehicle);
    }
    vehicle_1.getRoofLivery = getRoofLivery;
    /**
     * No comment provided
     *
     * Hash: 0x9963D5F9
     */
    function getTotalRepairs(vehicle) {
        return GetVehicleTotalRepairs(vehicle);
    }
    vehicle_1.getTotalRepairs = getTotalRepairs;
    /**
     * No comment provided
     *
     * Hash: 0x75280015
     */
    function getTyreSmokeColor(vehicle) {
        return GetVehicleTyreSmokeColor(vehicle);
    }
    vehicle_1.getTyreSmokeColor = getTyreSmokeColor;
    /**
     * No comment provided
     *
     * Hash: 0xDA58D7AE
     */
    function getWheelType(vehicle) {
        return GetVehicleWheelType(vehicle);
    }
    vehicle_1.getWheelType = getWheelType;
    /**
     * No comment provided
     *
     * Hash: 0x13D53892
     */
    function getWindowTint(vehicle) {
        return GetVehicleWindowTint(vehicle);
    }
    vehicle_1.getWindowTint = getWindowTint;
    /**
     * No comment provided
     *
     * Hash: 0xB8AF3137
     */
    function hasBeenDamagedByBullets(vehicle) {
        return HasVehicleBeenDamagedByBullets(vehicle);
    }
    vehicle_1.hasBeenDamagedByBullets = hasBeenDamagedByBullets;
    /**
     * No comment provided
     *
     * Hash: 0xE4E83A5B
     */
    function hasBeenOwnedByPlayer(vehicle) {
        return HasVehicleBeenOwnedByPlayer(vehicle);
    }
    vehicle_1.hasBeenOwnedByPlayer = hasBeenOwnedByPlayer;
    /**
     * No comment provided
     *
     * Hash: 0xD5C39EE6
     */
    function isBoatAnchoredAndFrozen(vehicle) {
        return IsBoatAnchoredAndFrozen(vehicle);
    }
    vehicle_1.isBoatAnchoredAndFrozen = isBoatAnchoredAndFrozen;
    /**
     * No comment provided
     *
     * Hash: 0x9049DB44
     */
    function isBoatWrecked(vehicle) {
        return IsBoatWrecked(vehicle);
    }
    vehicle_1.isBoatWrecked = isBoatWrecked;
    /**
     * No comment provided
     *
     * Hash: 0x42098B5
     */
    function isExtraTurnedOn(vehicle, extraId) {
        return IsVehicleExtraTurnedOn(vehicle, extraId);
    }
    vehicle_1.isExtraTurnedOn = isExtraTurnedOn;
    /**
     * No comment provided
     *
     * Hash: 0x25EB5873
     */
    function isSirenOn(vehicle) {
        return IsVehicleSirenOn(vehicle);
    }
    vehicle_1.isSirenOn = isSirenOn;
    /**
     * No comment provided
     *
     * Hash: 0x48C80210
     */
    function isTyreBurst(vehicle, wheelID, completely) {
        return IsVehicleTyreBurst(vehicle, wheelID, completely);
    }
    vehicle_1.isTyreBurst = isTyreBurst;
    /**
     * See the client-side [IS_VEHICLE_WINDOW_INTACT](#\_0x46E571A0E20D01F1) for a window indexes list.
     *
     * Hash: 0xAC4EF23D
     */
    function isWindowIntact(vehicle, windowIndex) {
        return IsVehicleWindowIntact(vehicle, windowIndex);
    }
    vehicle_1.isWindowIntact = isWindowIntact;
    /**
     * SET_VEHICLE_ALARM
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_ALARM](?\_0xCDE5E70C1DDB954C).</strong>
     *
     * Hash: 0x24877D84
     */
    function setAlarm(vehicle, state) {
        SetVehicleAlarm(vehicle, state);
    }
    vehicle_1.setAlarm = setAlarm;
    /**
     * ```
     * p2 often set to 1000.0 in the decompiled scripts.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_BODY_HEALTH](?\_0xB77D05AC8C78AADB).</strong>
     *
     * Hash: 0x920C2517
     */
    function setBodyHealth(vehicle, value) {
        SetVehicleBodyHealth(vehicle, value);
    }
    vehicle_1.setBodyHealth = setBodyHealth;
    /**
     * colorPrimary & colorSecondary are the paint indexes for the vehicle.
     * For a list of valid paint indexes, view: pastebin.com/pwHci0xK
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOURS](?\_0x4F1D4BE3A7F24601).</strong>
     *
     * Hash: 0x57F24253
     */
    function setColours(vehicle, colorPrimary, colorSecondary) {
        SetVehicleColours(vehicle, colorPrimary, colorSecondary);
    }
    vehicle_1.setColours = setColours;
    /**
     * Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
     * Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOUR_COMBINATION](?\_0x33E8CD3322E2FE31).</strong>
     *
     * Hash: 0xA557AEAD
     */
    function setColourCombination(vehicle, colorCombination) {
        SetVehicleColourCombination(vehicle, colorCombination);
    }
    vehicle_1.setColourCombination = setColourCombination;
    /**
     * ```
     * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_PRIMARY_COLOUR](?\_0x7141766F91D15BEA).</strong>
     *
     * Hash: 0x8DF9F9BC
     */
    function setCustomPrimaryColour(vehicle, r, g, b) {
        SetVehicleCustomPrimaryColour(vehicle, r, g, b);
    }
    vehicle_1.setCustomPrimaryColour = setCustomPrimaryColour;
    /**
     * ```
     * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_SECONDARY_COLOUR](?\_0x36CED73BFED89754).</strong>
     *
     * Hash: 0x9D77259E
     */
    function setCustomSecondaryColour(vehicle, r, g, b) {
        SetVehicleCustomSecondaryColour(vehicle, r, g, b);
    }
    vehicle_1.setCustomSecondaryColour = setCustomSecondaryColour;
    /**
     * Sets the dirt level of the passed vehicle.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DIRT_LEVEL](?\_0x79D3B596FE44EE8B).</strong>
     *
     * Hash: 0x2B39128B
     */
    function setDirtLevel(vehicle, dirtLevel) {
        SetVehicleDirtLevel(vehicle, dirtLevel);
    }
    vehicle_1.setDirtLevel = setDirtLevel;
    /**
     * Locks the doors of a specified vehicle to a defined lock state, affecting how players and NPCs can interact with the vehicle.
     *
     * ```
     * NativeDB Introduced: v323
     * ```
     *
     * ```cpp
     * enum eVehicleLockState {
     * // No specific lock state, vehicle behaves according to the game's default settings.
     * VEHICLELOCK_NONE = 0,
     * // Vehicle is fully unlocked, allowing free entry by players and NPCs.
     * VEHICLELOCK_UNLOCKED = 1,
     * // Vehicle is locked, preventing entry by players and NPCs.
     * VEHICLELOCK_LOCKED = 2,
     * // Vehicle locks out only players, allowing NPCs to enter.
     * VEHICLELOCK_LOCKOUT_PLAYER_ONLY = 3,
     * // Vehicle is locked once a player enters, preventing others from entering.
     * VEHICLELOCK_LOCKED_PLAYER_INSIDE = 4,
     * // Vehicle starts in a locked state, but may be unlocked through game events.
     * VEHICLELOCK_LOCKED_INITIALLY = 5,
     * // Forces the vehicle's doors to shut and lock.
     * VEHICLELOCK_FORCE_SHUT_DOORS = 6,
     * // Vehicle is locked but can still be damaged.
     * VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED = 7,
     * // Vehicle is locked, but its trunk/boot remains unlocked.
     * VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED = 8,
     * // Vehicle is locked and does not allow passengers, except for the driver.
     * VEHICLELOCK_LOCKED_NO_PASSENGERS = 9,
     * // Vehicle is completely locked, preventing entry entirely, even if previously inside.
     * VEHICLELOCK_CANNOT_ENTER = 10
     * };
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOORS_LOCKED](?\_0xB664292EAECF7FA6).</strong>
     *
     * Hash: 0x4CDD35D0
     */
    function setDoorsLocked(vehicle, doorLockStatus) {
        SetVehicleDoorsLocked(vehicle, doorLockStatus);
    }
    vehicle_1.setDoorsLocked = setDoorsLocked;
    /**
     * See eDoorId declared in [`SET_VEHICLE_DOOR_SHUT`](#\_0x93D9BD300D7789E5)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOOR_BROKEN](?\_0xD4D4F6A4AB575A33).</strong>
     *
     * Hash: 0x8147FEA7
     */
    function setDoorBroken(vehicle, doorIndex, deleteDoor) {
        SetVehicleDoorBroken(vehicle, doorIndex, deleteDoor);
    }
    vehicle_1.setDoorBroken = setDoorBroken;
    /**
     * SET_VEHICLE_NUMBER_PLATE_TEXT
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_NUMBER_PLATE_TEXT](?\_0x95A88F0B409CDA47).</strong>
     *
     * Hash: 0x400F9556
     */
    function setNumberPlateText(vehicle, plateText) {
        SetVehicleNumberPlateText(vehicle, plateText);
    }
    vehicle_1.setNumberPlateText = setNumberPlateText;
    /**
     * Returns the type of the passed vehicle.
     *
     * For client scripts, reference the more detailed [GET_VEHICLE_TYPE_RAW](#\_0xDE73BC10) native.
     *
     * ### Vehicle types
     *
     * *   automobile
     * *   bike
     * *   boat
     * *   heli
     * *   plane
     * *   submarine
     * *   trailer
     * *   train
     *
     * Hash: 0xA273060E
     */
    function getType(vehicle) {
        return GetVehicleType(vehicle);
    }
    vehicle_1.getType = getType;
})(vehicle || (vehicle = {}));
export var weapon;
(function (weapon) {
    /**
     * GIVE_WEAPON_COMPONENT_TO_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_COMPONENT_TO_PED](?\_0xD966D51AA5B28BB9).</strong>
     *
     * Hash: 0x3E1E286D
     */
    function giveComponentToPed(ped, weaponHash, componentHash) {
        if (typeof weaponHash === 'string')
            weaponHash = misc.getHashKey(weaponHash);
        if (typeof componentHash === 'string')
            componentHash = misc.getHashKey(componentHash);
        GiveWeaponComponentToPed(ped, weaponHash, componentHash);
    }
    weapon.giveComponentToPed = giveComponentToPed;
    /**
     * GIVE_WEAPON_TO_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_TO_PED](?\_0xBF0FD6E56C964FCB).</strong>
     *
     * Hash: 0xC4D88A85
     */
    function giveToPed(ped, weaponHash, ammoCount, isHidden, bForceInHand) {
        if (typeof weaponHash === 'string')
            weaponHash = misc.getHashKey(weaponHash);
        GiveWeaponToPed(ped, weaponHash, ammoCount, isHidden, bForceInHand);
    }
    weapon.giveToPed = giveToPed;
    /**
     * Parameter `p1` does not seem to be used or referenced in game binaries.\
     * **Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_ALL_PED_WEAPONS](?\_0xF25DF915FA38C5F3).</strong>
     *
     * Hash: 0xA44CE817
     */
    function removeAllPeds(ped) {
        RemoveAllPedWeapons(ped, false);
    }
    weapon.removeAllPeds = removeAllPeds;
    /**
     * REMOVE_WEAPON_COMPONENT_FROM_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_COMPONENT_FROM_PED](?\_0x1E8BE90C74FB4C09).</strong>
     *
     * Hash: 0x412AA00D
     */
    function removeComponentFromPed(ped, weaponHash, componentHash) {
        if (typeof weaponHash === 'string')
            weaponHash = misc.getHashKey(weaponHash);
        if (typeof componentHash === 'string')
            componentHash = misc.getHashKey(componentHash);
        RemoveWeaponComponentFromPed(ped, weaponHash, componentHash);
    }
    weapon.removeComponentFromPed = removeComponentFromPed;
    /**
     * ```
     * This native removes a specified weapon from your selected ped.
     * Weapon Hashes: pastebin.com/0wwDZgkF
     * Example:
     * C#:
     * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
     * C++:
     * `WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);`
     * The code above removes the knife from the player.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_FROM_PED](?\_0x4899CB088EDF59B8).</strong>
     *
     * Hash: 0x9C37F220
     */
    function removeFromPed(ped, weaponHash) {
        if (typeof weaponHash === 'string')
            weaponHash = misc.getHashKey(weaponHash);
        RemoveWeaponFromPed(ped, weaponHash);
    }
    weapon.removeFromPed = removeFromPed;
})(weapon || (weapon = {}));
export var network;
(function (network) {
    /**
     * No comment provided
     *
     * Hash: 0x5B912C3F
     */
    function getEntityFromNetworkId(netId) {
        return NetworkGetEntityFromNetworkId(netId);
    }
    network.getEntityFromNetworkId = getEntityFromNetworkId;
    /**
     * Returns the first owner ID of the specified entity.
     *
     * Hash: 0x1E546224
     */
    function getFirstEntityOwner(entity) {
        return NetworkGetFirstEntityOwner(entity);
    }
    network.getFirstEntityOwner = getFirstEntityOwner;
    /**
     * No comment provided
     *
     * Hash: 0x9E35DAB6
     */
    function getNetworkIdFromEntity(entity) {
        return NetworkGetNetworkIdFromEntity(entity);
    }
    network.getNetworkIdFromEntity = getNetworkIdFromEntity;
    /**
     * No comment provided
     *
     * Hash: 0xFFEEF513
     */
    function getVoiceProximityOverrideForPlayer(playerSrc) {
        return new Vector3(NetworkGetVoiceProximityOverrideForPlayer(playerSrc));
    }
    network.getVoiceProximityOverrideForPlayer = getVoiceProximityOverrideForPlayer;
    /**
     * Returns the owner ID of the specified entity.
     *
     * Hash: 0x526FEE31
     */
    function getEntityOwner(entity) {
        return NetworkGetEntityOwner(entity);
    }
    network.getEntityOwner = getEntityOwner;
})(network || (network = {}));
export var mumble;
(function (mumble) {
    /**
     * Create a permanent voice channel.
     *
     * Hash: 0x262663C5
     */
    function createChannel(id) {
        MumbleCreateChannel(id);
    }
    mumble.createChannel = createChannel;
    /**
     * Checks if the player is currently muted
     *
     * Hash: 0x1D5D50C2
     */
    function isPlayerMuted(playerSrc) {
        return MumbleIsPlayerMuted(playerSrc);
    }
    mumble.isPlayerMuted = isPlayerMuted;
    /**
     * Mutes or unmutes the specified player
     *
     * Hash: 0xCC6C2EB1
     */
    function setPlayerMuted(playerSrc, toggle) {
        MumbleSetPlayerMuted(playerSrc, toggle);
    }
    mumble.setPlayerMuted = setPlayerMuted;
})(mumble || (mumble = {}));
export var object;
(function (object) {
    /**
     * Creates an object (prop) with the specified model at the specified position, offset on the Z axis by the radius of the object's model.
     * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT](?\_0x509D5878EB39E842).</strong>
     *
     * Hash: 0x2F7AA05C
     */
    function create(modelHash, pos, isNetwork, netMissionEntity, doorFlag) {
        if (typeof modelHash === 'string')
            modelHash = misc.getHashKey(modelHash);
        return CreateObject(modelHash, pos.x, pos.y, pos.z, isNetwork, netMissionEntity, doorFlag);
    }
    object.create = create;
    /**
     * Creates an object (prop) with the specified model centered at the specified position.
     * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT_NO_OFFSET](?\_0x9A294B2138ABB884).</strong>
     *
     * Hash: 0x58040420
     */
    function createNoOffset(modelHash, pos, isNetwork, netMissionEntity, doorFlag) {
        if (typeof modelHash === 'string')
            modelHash = misc.getHashKey(modelHash);
        return CreateObjectNoOffset(modelHash, pos.x, pos.y, pos.z, isNetwork, netMissionEntity, doorFlag);
    }
    object.createNoOffset = createNoOffset;
    /**
     * Returns all object handles known to the server.
     * The data returned adheres to the following layout:
     *
     * ```
     * [127, 42, 13, 37]
     * ```
     *
     * Hash: 0x6886C3FE
     */
    function getAlls() {
        return GetAllObjects();
    }
    object.getAlls = getAlls;
})(object || (object = {}));
export var resource;
(function (resource_1) {
    /**
     * Nonsynchronous operations will not wait for a disk/filesystem flush before returning from a write or delete call. They will be much faster than their synchronous counterparts (e.g., bulk operations), however, a system crash may lose the data to some recent operations.
     *
     * This native ensures all `_NO_SYNC` operations are synchronized with the disk/filesystem.
     *
     * Hash: 0xE27C97A0
     */
    function flushKvp() {
        FlushResourceKvp();
    }
    resource_1.flushKvp = flushKvp;
    /**
     * Returns the physical on-disk path of the specified resource.
     *
     * Hash: 0x61DCF017
     */
    function getPath(resourceName) {
        return GetResourcePath(resourceName);
    }
    resource_1.getPath = getPath;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a cached resource asset with the resource system, similar to the automatic scanning of the `stream/` folder.
     *
     * Hash: 0x9862B266
     */
    function registerAsset(resourceName, fileName) {
        return RegisterResourceAsset(resourceName, fileName);
    }
    resource_1.registerAsset = registerAsset;
    /**
     * Registers a build task factory for resources.
     * The function should return an object (msgpack map) with the following fields:
     *
     * ```
     * {
     * // returns whether the specific resource should be built
     * shouldBuild = func(resourceName: string): bool,
     *
     * // asynchronously start building the specific resource.
     * // call cb when completed
     * build = func(resourceName: string, cb: func(success: bool, status: string): void): void
     * }
     * ```
     *
     * Hash: 0x285B43CA
     */
    function registerBuildTaskFactory(factoryId, factoryFn) {
        RegisterResourceBuildTaskFactory(factoryId, factoryFn);
    }
    resource_1.registerBuildTaskFactory = registerBuildTaskFactory;
    /**
     * Writes the specified data to a file in the specified resource.
     * Using a length of `-1` will automatically detect the length assuming the data is a C string.
     *
     * Hash: 0xA09E7E7B
     */
    function saveFile(resourceName, fileName, data, dataLength) {
        return SaveResourceFile(resourceName, fileName, data, dataLength);
    }
    resource_1.saveFile = saveFile;
    /**
     * Scans the resources in the specified resource root. This function is only available in the 'monitor mode' process and is
     * not available for user resources.
     *
     * Hash: 0x636F097F
     */
    function scanRoot(rootPath, callback) {
        ScanResourceRoot(rootPath, callback);
    }
    resource_1.scanRoot = scanRoot;
    /**
     * Schedules the specified resource to run a tick as soon as possible, bypassing the server's fixed tick rate.
     *
     * Hash: 0xB88A73AD
     */
    function scheduleTick(resourceName) {
        ScheduleResourceTick(resourceName);
    }
    resource_1.scheduleTick = scheduleTick;
    /**
     * No comment provided
     *
     * Hash: 0x29B440DC
     */
    function start(resourceName) {
        return StartResource(resourceName);
    }
    resource_1.start = start;
    /**
     * No comment provided
     *
     * Hash: 0x21783161
     */
    function stop(resourceName) {
        return StopResource(resourceName);
    }
    resource_1.stop = stop;
    /**
     * No comment provided
     *
     * Hash: 0x7389B5DF
     */
    function deleteKvp(key) {
        DeleteResourceKvp(key);
    }
    resource_1.deleteKvp = deleteKvp;
    /**
     * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x4152C90
     */
    function deleteKvpNoSync(key) {
        DeleteResourceKvpNoSync(key);
    }
    resource_1.deleteKvpNoSync = deleteKvpNoSync;
    /**
     * No comment provided
     *
     * Hash: 0xB3210203
     */
    function endFindKvp(handle) {
        EndFindKvp(handle);
    }
    resource_1.endFindKvp = endFindKvp;
    /**
     * No comment provided
     *
     * Hash: 0xBD7BEBC5
     */
    function findKvp(handle) {
        return FindKvp(handle);
    }
    resource_1.findKvp = findKvp;
    /**
     * Returns the name of the currently executing resource.
     *
     * Hash: 0xE5E9EBBB
     */
    function getCurrentName() {
        return GetCurrentResourceName();
    }
    resource_1.getCurrentName = getCurrentName;
    /**
     * No comment provided
     *
     * Hash: 0x4D52FE5B
     */
    function getInvoking() {
        return GetInvokingResource();
    }
    resource_1.getInvoking = getInvoking;
    /**
     * No comment provided
     *
     * Hash: 0x863F27B
     */
    function getNums() {
        return GetNumResources();
    }
    resource_1.getNums = getNums;
    /**
     * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
     * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
     *
     * Hash: 0x776E864
     */
    function getNumMetadata(resourceName, metadataKey) {
        return GetNumResourceMetadata(resourceName, metadataKey);
    }
    resource_1.getNumMetadata = getNumMetadata;
    /**
     * No comment provided
     *
     * Hash: 0x387246B7
     */
    function getByFindIndex(findIndex) {
        return GetResourceByFindIndex(findIndex);
    }
    resource_1.getByFindIndex = getByFindIndex;
    /**
     * Returns all commands registered by the specified resource.
     * The data returned adheres to the following layout:
     *
     * ```
     * [
     * {
     * "name": "cmdlist",
     * "resource": "example_resource",
     * "arity" = -1,
     * },
     * {
     * "name": "command1"
     * "resource": "example_resource2",
     * "arity" = -1,
     * }
     * ]
     * ```
     *
     * Hash: 0x97628584
     */
    function getCommands(resource) {
        return GetResourceCommands(resource);
    }
    resource_1.getCommands = getCommands;
    /**
     * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
     *
     * Hash: 0x35BDCEEA
     */
    function getKvpFloat(key) {
        return GetResourceKvpFloat(key);
    }
    resource_1.getKvpFloat = getKvpFloat;
    /**
     * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
     *
     * Hash: 0x557B586A
     */
    function getKvpInt(key) {
        return GetResourceKvpInt(key);
    }
    resource_1.getKvpInt = getKvpInt;
    /**
     * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
     *
     * Hash: 0x5240DA5A
     */
    function getKvpString(key) {
        return GetResourceKvpString(key);
    }
    resource_1.getKvpString = getKvpString;
    /**
     * Gets the metadata value at a specified key/index from a resource's manifest.
     * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
     *
     * Hash: 0x964BAB1D
     */
    function getMetadata(resourceName, metadataKey, index) {
        return GetResourceMetadata(resourceName, metadataKey, index);
    }
    resource_1.getMetadata = getMetadata;
    /**
     * Returns the current state of the specified resource.
     *
     * Hash: 0x4039B485
     */
    function getState(resourceName) {
        return GetResourceState(resourceName);
    }
    resource_1.getState = getState;
    /**
     * Reads the contents of a text file in a specified resource.
     * If executed on the client, this file has to be included in `files` in the resource manifest.
     * Example: `local data = LoadResourceFile("devtools", "data.json")`
     *
     * Hash: 0x76A9EE1F
     */
    function loadFile(resourceName, fileName) {
        return LoadResourceFile(resourceName, fileName);
    }
    resource_1.loadFile = loadFile;
    /**
     * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
     *
     * Hash: 0xD233A168
     */
    function registerAsEventHandler(eventName) {
        RegisterResourceAsEventHandler(eventName);
    }
    resource_1.registerAsEventHandler = registerAsEventHandler;
    /**
     * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
     *
     * Hash: 0x21C7A35B
     */
    function setKvp(key, value) {
        SetResourceKvp(key, value);
    }
    resource_1.setKvp = setKvp;
    /**
     * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
     *
     * Hash: 0x9ADD2938
     */
    function setKvpFloat(key, value) {
        SetResourceKvpFloat(key, value);
    }
    resource_1.setKvpFloat = setKvpFloat;
    /**
     * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x3517BFBE
     */
    function setKvpFloatNoSync(key, value) {
        SetResourceKvpFloatNoSync(key, value);
    }
    resource_1.setKvpFloatNoSync = setKvpFloatNoSync;
    /**
     * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
     *
     * Hash: 0x6A2B1E8
     */
    function setKvpInt(key, value) {
        SetResourceKvpInt(key, value);
    }
    resource_1.setKvpInt = setKvpInt;
    /**
     * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x26AEB707
     */
    function setKvpIntNoSync(key, value) {
        SetResourceKvpIntNoSync(key, value);
    }
    resource_1.setKvpIntNoSync = setKvpIntNoSync;
    /**
     * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0xCF9A2FF
     */
    function setKvpNoSync(key, value) {
        SetResourceKvpNoSync(key, value);
    }
    resource_1.setKvpNoSync = setKvpNoSync;
    /**
     * No comment provided
     *
     * Hash: 0xDD379006
     */
    function startFindKvp(prefix) {
        return StartFindKvp(prefix);
    }
    resource_1.startFindKvp = startFindKvp;
})(resource || (resource = {}));
export var task;
(function (task) {
    /**
     * Clear a ped's tasks. Stop animations and other tasks created by scripts.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS](?\_0xE1EF3C1216AFF2CD).</strong>
     *
     * Hash: 0xDE3316AB
     */
    function clearPeds(ped) {
        ClearPedTasks(ped);
    }
    task.clearPeds = clearPeds;
    /**
     * Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS_IMMEDIATELY](?\_0xAAA34F8A7CB32098).</strong>
     *
     * Hash: 0xBC045625
     */
    function clearPedsImmediately(ped) {
        ClearPedTasksImmediately(ped);
    }
    task.clearPedsImmediately = clearPedsImmediately;
    /**
     * ```
     * Makes the specified ped attack the target ped.
     * p2 should be 0
     * p3 should be 16
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_COMBAT_PED](?\_0xF166E48407BAC484).</strong>
     *
     * Hash: 0xCB0D8932
     */
    function combatPed(ped, targetPed) {
        TaskCombatPed(ped, targetPed, 0, 0);
    }
    task.combatPed = combatPed;
    /**
     * ```
     * Example:
     * `TASK::TASK_DRIVE_BY(l_467[1\/\*22\*\/], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});`
     * Needs working example. Doesn't seem to do anything.
     * I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
     * I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
     * I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_DRIVE_BY](?\_0x2F8AF0E82773A171).</strong>
     *
     * Hash: 0x2B84D1C4
     */
    function driveBy(driverPed, targetPed, targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, firingPattern) {
        if (typeof firingPattern === 'string')
            firingPattern = misc.getHashKey(firingPattern);
        TaskDriveBy(driverPed, targetPed, targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, false, firingPattern);
    }
    task.driveBy = driveBy;
    /**
     * ```
     * speed 1.0 = walk, 2.0 = run
     * p5 1 = normal, 3 = teleport to vehicle, 8 = normal/carjack ped from seat, 16 = teleport directly into vehicle
     * p6 is always 0
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_ENTER_VEHICLE](?\_0xC20E50AA46D09CA8).</strong>
     *
     * Hash: 0xB8689B4E
     */
    function enterVehicle(ped, vehicle, timeout, seatIndex, speed, flag) {
        TaskEnterVehicle(ped, vehicle, timeout, seatIndex, speed, flag, undefined);
    }
    task.enterVehicle = enterVehicle;
    /**
     * TASK_EVERYONE_LEAVE_VEHICLE
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_EVERYONE_LEAVE_VEHICLE](?\_0x7F93691AB4B92272).</strong>
     *
     * Hash: 0xC1971F30
     */
    function everyoneLeaveVehicle(vehicle) {
        TaskEveryoneLeaveVehicle(vehicle);
    }
    task.everyoneLeaveVehicle = everyoneLeaveVehicle;
    /**
     * TASK_GO_STRAIGHT_TO_COORD
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_STRAIGHT_TO_COORD](?\_0xD76B57B44F1E6F8B).</strong>
     *
     * Hash: 0x80A9E7A7
     */
    function goStraightToCoord(ped, pos, speed, timeout, targetHeading, distanceToSlide) {
        TaskGoStraightToCoord(ped, pos.x, pos.y, pos.z, speed, timeout, targetHeading, distanceToSlide);
    }
    task.goStraightToCoord = goStraightToCoord;
    /**
     * Tells a ped to go to a coord by any means.
     *
     * ```cpp
     * enum eDrivingMode {
     * DF_StopForCars = 1,
     * DF_StopForPeds = 2,
     * DF_SwerveAroundAllCars = 4,
     * DF_SteerAroundStationaryCars = 8,
     * DF_SteerAroundPeds = 16,
     * DF_SteerAroundObjects = 32,
     * DF_DontSteerAroundPlayerPed = 64,
     * DF_StopAtLights = 128,
     * DF_GoOffRoadWhenAvoiding = 256,
     * DF_DriveIntoOncomingTraffic = 512,
     * DF_DriveInReverse = 1024,
     * // If pathfinding fails, cruise randomly instead of going on a straight line
     * DF_UseWanderFallbackInsteadOfStraightLine = 2048,
     * DF_AvoidRestrictedAreas = 4096,
     * // These only work on MISSION_CRUISE
     * DF_PreventBackgroundPathfinding = 8192,
     * DF_AdjustCruiseSpeedBasedOnRoadSpeed = 16384,
     * DF_UseShortCutLinks =  262144,
     * DF_ChangeLanesAroundObstructions = 524288,
     * // cruise tasks ignore this anyway--only used for goto's
     * DF_UseSwitchedOffNodes =  2097152,
     * // if you're going to be primarily driving off road
     * DF_PreferNavmeshRoute =  4194304,
     * // Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
     * DF_PlaneTaxiMode =  8388608,
     * DF_ForceStraightLine = 16777216,
     * DF_UseStringPullingAtJunctions = 33554432,
     * DF_AvoidHighways = 536870912,
     * DF_ForceJoinInRoadDirection = 1073741824,
     * // Standard driving mode. stops for cars, peds, and lights, goes around stationary obstructions
     * DRIVINGMODE_STOPFORCARS = 786603, // DF_StopForCars|DF_StopForPeds|DF_SteerAroundObjects|DF_SteerAroundStationaryCars|DF_StopAtLights|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,		// Obey lights too
     * // Like the above, but doesn't steer around anything in its way - will only wait instead.
     * DRIVINGMODE_STOPFORCARS_STRICT = 262275, // DF_StopForCars|DF_StopForPeds|DF_StopAtLights|DF_UseShortCutLinks, // Doesn't deviate an inch.
     * // Default "alerted" driving mode. drives around everything, doesn't obey lights
     * DRIVINGMODE_AVOIDCARS = 786469, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars,
     * // Very erratic driving. difference between this and AvoidCars is that it doesn't use the brakes at ALL to help with steering
     * DRIVINGMODE_AVOIDCARS_RECKLESS = 786468, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,
     * // Smashes through everything
     * DRIVINGMODE_PLOUGHTHROUGH = 262144, // DF_UseShortCutLinks
     * // Drives normally except for the fact that it ignores lights
     * DRIVINGMODE_STOPFORCARS_IGNORELIGHTS = 786475, // DF_StopForCars|DF_SteerAroundStationaryCars|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions
     * // Try to swerve around everything, but stop for lights if necessary
     * DRIVINGMODE_AVOIDCARS_OBEYLIGHTS = 786597, // DF_SwerveAroundAllCars|DF_StopAtLights|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
     * // Swerve around cars, be careful around peds, and stop for lights
     * DRIVINGMODE_AVOIDCARS_STOPFORPEDS_OBEYLIGHTS = 786599 // DF_SwerveAroundAllCars|DF_StopAtLights|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
     * };
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_TO_COORD_ANY_MEANS](?\_0x5BC448CB78FA3E88).</strong>
     *
     * Hash: 0xF91DF93B
     */
    function goToCoordAnyMeans(ped, pos, fMoveBlendRatio, vehicle, bUseLongRangeVehiclePathing, drivingFlags, fMaxRangeToShootTargets) {
        TaskGoToCoordAnyMeans(ped, pos.x, pos.y, pos.z, fMoveBlendRatio, vehicle, bUseLongRangeVehiclePathing, drivingFlags, fMaxRangeToShootTargets);
    }
    task.goToCoordAnyMeans = goToCoordAnyMeans;
    /**
     * ```
     * The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
     * Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
     * `Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)`
     * Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_TO_ENTITY](?\_0x6A071245EB0D1882).</strong>
     *
     * Hash: 0x374827C2
     */
    function goToEntity(entity, target, duration, distance, speed) {
        TaskGoToEntity(entity, target, duration, distance, speed, 0, 0);
    }
    task.goToEntity = goToEntity;
    /**
     * ```
     * In the scripts, p3 was always -1.
     * p3 seems to be duration or timeout of turn animation.
     * Also facingPed can be 0 or -1 so ped will just raise hands up.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_HANDS_UP](?\_0xF2EAB31979A7F910).</strong>
     *
     * Hash: 0x8DCC19C5
     */
    function handsUp(ped, duration, facingPed) {
        TaskHandsUp(ped, duration, facingPed, 0, false);
    }
    task.handsUp = handsUp;
    /**
     * Flags are the same flags used in [`TASK_LEAVE_VEHICLE`](#\_0xD3DBCE61A490BE02)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_LEAVE_ANY_VEHICLE](?\_0x504D54DF3F6F2247).</strong>
     *
     * Hash: 0xDBDD79FA
     */
    function leaveAnyVehicle(ped, flags) {
        TaskLeaveAnyVehicle(ped, 0, flags);
    }
    task.leaveAnyVehicle = leaveAnyVehicle;
    /**
     * ```
     * Flags from decompiled scripts:
     * 0 = normal exit and closes door.
     * 1 = normal exit and closes door.
     * 16 = teleports outside, door kept closed.  (This flag does not seem to work for the front seats in buses, NPCs continue to exit normally)
     * 64 = normal exit and closes door, maybe a bit slower animation than 0.
     * 256 = normal exit but does not close the door.
     * 4160 = ped is throwing himself out, even when the vehicle is still.
     * 262144 = ped moves to passenger seat first, then exits normally
     * Others to be tried out: 320, 512, 131072.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_LEAVE_VEHICLE](?\_0xD3DBCE61A490BE02).</strong>
     *
     * Hash: 0x7B1141C6
     */
    function leaveVehicle(ped, vehicle, flags) {
        TaskLeaveVehicle(ped, vehicle, flags);
    }
    task.leaveVehicle = leaveVehicle;
    /**
     * [Animations list](https://alexguirre.github.io/animations-list/)
     *
     * ```cpp
     * enum eScriptedAnimFlags
     * {
     * AF_LOOPING = 1,
     * AF_HOLD_LAST_FRAME = 2,
     * AF_REPOSITION_WHEN_FINISHED = 4,
     * AF_NOT_INTERRUPTABLE = 8,
     * AF_UPPERBODY = 16,
     * AF_SECONDARY = 32,
     * AF_REORIENT_WHEN_FINISHED = 64,
     * AF_ABORT_ON_PED_MOVEMENT = 128,
     * AF_ADDITIVE = 256,
     * AF_TURN_OFF_COLLISION = 512,
     * AF_OVERRIDE_PHYSICS = 1024,
     * AF_IGNORE_GRAVITY = 2048,
     * AF_EXTRACT_INITIAL_OFFSET = 4096,
     * AF_EXIT_AFTER_INTERRUPTED = 8192,
     * AF_TAG_SYNC_IN = 16384,
     * AF_TAG_SYNC_OUT = 32768,
     * AF_TAG_SYNC_CONTINUOUS = 65536,
     * AF_FORCE_START = 131072,
     * AF_USE_KINEMATIC_PHYSICS = 262144,
     * AF_USE_MOVER_EXTRACTION = 524288,
     * AF_HIDE_WEAPON = 1048576,
     * AF_ENDS_IN_DEAD_POSE = 2097152,
     * AF_ACTIVATE_RAGDOLL_ON_COLLISION = 4194304,
     * AF_DONT_EXIT_ON_DEATH = 8388608,
     * AF_ABORT_ON_WEAPON_DAMAGE = 16777216,
     * AF_DISABLE_FORCED_PHYSICS_UPDATE = 33554432,
     * AF_PROCESS_ATTACHMENTS_ON_START = 67108864,
     * AF_EXPAND_PED_CAPSULE_FROM_SKELETON = 134217728,
     * AF_USE_ALTERNATIVE_FP_ANIM = 268435456,
     * AF_BLENDOUT_WRT_LAST_FRAME = 536870912,
     * AF_USE_FULL_BLENDING = 1073741824
     * }
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM](?\_0xEA47FE3719165B94).</strong>
     *
     * Hash: 0x5AB552C6
     */
    function playAnim(ped, animDictionary, animationName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, lockX, lockY, lockZ) {
        TaskPlayAnim(ped, animDictionary, animationName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, lockX, lockY, lockZ);
    }
    task.playAnim = playAnim;
    /**
     * Similar in functionality to [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94), except the position and rotation parameters let you specify the initial position and rotation of the task. The ped is teleported to the position specified.
     * [Animations list](https://alexguirre.github.io/animations-list/)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM_ADVANCED](?\_0x83CDB10EA29B370B).</strong>
     *
     * Hash: 0x3DDEB0E6
     */
    function playAnimAdvanced(ped, animDictionary, animationName, pos, rot, blendInSpeed, blendOutSpeed, duration, flag, animTime) {
        TaskPlayAnimAdvanced(ped, animDictionary, animationName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, blendInSpeed, blendOutSpeed, duration, flag, animTime, undefined, undefined);
    }
    task.playAnimAdvanced = playAnimAdvanced;
    /**
     * TASK_REACT_AND_FLEE_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_REACT_AND_FLEE_PED](?\_0x72C896464915D1B1).</strong>
     *
     * Hash: 0x8A632BD8
     */
    function reactAndFleePed(ped, fleeTarget) {
        TaskReactAndFleePed(ped, fleeTarget);
    }
    task.reactAndFleePed = reactAndFleePed;
    /**
     * ```
     * Firing Pattern Hash Information: https://pastebin.com/Px036isB
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_COORD](?\_0x46A6CC01E0826106).</strong>
     *
     * Hash: 0x601C22E3
     */
    function shootAtCoord(ped, pos, duration, firingPattern) {
        if (typeof firingPattern === 'string')
            firingPattern = misc.getHashKey(firingPattern);
        TaskShootAtCoord(ped, pos.x, pos.y, pos.z, duration, firingPattern);
    }
    task.shootAtCoord = shootAtCoord;
    /**
     * ```
     * //this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
     * Entity aimedentity;
     * `Player player = PLAYER::PLAYER_ID();`
     * `PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);`
     * //bg is an array of peds
     * `TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));`
     * in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
     * Firing Pattern Hash Information: https://pastebin.com/Px036isB
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_ENTITY](?\_0x08DA95E8298AE772).</strong>
     *
     * Hash: 0xAC0631C9
     */
    function shootAtEntity(entity, target, duration, firingPattern) {
        if (typeof firingPattern === 'string')
            firingPattern = misc.getHashKey(firingPattern);
        TaskShootAtEntity(entity, target, duration, firingPattern);
    }
    task.shootAtEntity = shootAtEntity;
    /**
     * ```
     * NativeDB Introduced: v323
     * ```
     *
     * Warp a ped into a vehicle.
     * **Note**: It's better to use [`TASK_ENTER_VEHICLE`](#\_0xC20E50AA46D09CA8) with the flag "warp" flag instead of this native.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_WARP_PED_INTO_VEHICLE](?\_0x9A7D091411C5F684).</strong>
     *
     * Hash: 0x65D4A35D
     */
    function warpPedIntoVehicle(ped, vehicle, seatIndex) {
        TaskWarpPedIntoVehicle(ped, vehicle, seatIndex);
    }
    task.warpPedIntoVehicle = warpPedIntoVehicle;
})(task || (task = {}));
export var profiler;
(function (profiler) {
    /**
     * Scope entry for profiler.
     *
     * Hash: 0xC795A4A9
     */
    function enterScope(scopeName) {
        ProfilerEnterScope(scopeName);
    }
    profiler.enterScope = enterScope;
    /**
     * Scope exit for profiler.
     *
     * Hash: 0xB39CA35C
     */
    function exitScope() {
        ProfilerExitScope();
    }
    profiler.exitScope = exitScope;
    /**
     * Returns true if the profiler is active.
     *
     * Hash: 0xF8B7D7BB
     */
    function isRecording() {
        return ProfilerIsRecording();
    }
    profiler.isRecording = isRecording;
})(profiler || (profiler = {}));
export * from "@risinglife/fivem-shared";
