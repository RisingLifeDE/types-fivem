import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute.
 * 
 * Hash: 0x8AC7AE9 | Since: unknown | API-Set: client
 */
export function addAuthorizedParachuteModel(modelNameHash: number): void {
    AddAuthorizedParachuteModel(modelNameHash);
}

/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
 * 
 * Hash: 0x2E86DEA5 | Since: unknown | API-Set: client
 */
export function addAuthorizedParachutePackModel(modelNameHash: number): void {
    AddAuthorizedParachutePackModel(modelNameHash);
}

/**
 * Adds new health config.
 * 
 * Hash: 0x9CBFD5C1 | Since: unknown | API-Set: client
 */
export function addHealthConfig(configName: string, defaultHealth: number, defaultArmor: number, defaultEndurance: number, fatiguedHealthThreshold: number, injuredHealthThreshold: number, dyingHealthThreshold: number, hurtHealthThreshold: number, dogTakedownThreshold: number, writheFromBulletThreshold: number, meleeCardinalFatalAttack: boolean, invincible: boolean): void {
    AddHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible);
}

/**
 * Disables the editor runtime mode, changing game behavior to not track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xB1622B17 | Since: unknown | API-Set: client
 */
export function disableEditorRuntime(): void {
    DisableEditorRuntime();
}

/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 * 
 * Hash: 0x3D5AB7F0 | Since: unknown | API-Set: client
 */
export function disableIdleCamera(state: boolean): void {
    DisableIdleCamera(state);
}

/**
 * Enables the editor runtime mode, changing game behavior to track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xC383871D | Since: unknown | API-Set: client
 */
export function enableEditorRuntime(): void {
    EnableEditorRuntime();
}

/**
 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
 * SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0x780DA86 | Since: unknown | API-Set: client
 */
export function enterCursorMode(): void {
    EnterCursorMode();
}

/**
 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
 * 
 * Hash: 0xB550232D | Since: unknown | API-Set: client
 */
export function getAmbientPedRangeMultiplier(): number {
    return GetAmbientPedRangeMultiplier();
}

/**
 * This native returns the index of a calming quad if the given point is inside its bounds.
 * 
 * Hash: 0x870E8B40 | Since: unknown | API-Set: client
 */
export function getCalmingQuadAtCoords(x: number, y: number): number {
    return GetCalmingQuadAtCoords(x, y);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF60E63 | Since: unknown | API-Set: client
 */
export function getCalmingQuadBounds(waterQuad: number): [boolean, number, number, number, number] {
    return GetCalmingQuadBounds(waterQuad);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEBFC42 | Since: unknown | API-Set: client
 */
export function getCalmingQuadCount(): number {
    return GetCalmingQuadCount();
}

/**
 * No comment provided
 * 
 * Hash: 0xB0E3A058 | Since: unknown | API-Set: client
 */
export function getCalmingQuadDampening(waterQuad: number): [boolean, number] {
    return GetCalmingQuadDampening(waterQuad);
}

/**
 * No comment provided
 * 
 * Hash: 0x5550BF9F | Since: unknown | API-Set: client
 */
export function getFuelConsumptionRateMultiplier(): number {
    return GetFuelConsumptionRateMultiplier();
}

/**
 * No comment provided
 * 
 * Hash: 0xC66CD90C | Since: unknown | API-Set: client
 */
export function getFuelConsumptionState(): boolean {
    return GetFuelConsumptionState();
}

/**
 * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).
 * 
 * Hash: 0x78951816 | Since: unknown | API-Set: client
 */
export function getGlobalPassengerMassMultiplier(): number {
    return GetGlobalPassengerMassMultiplier();
}

/**
 * Retrieves the map data entity handle.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0x30AA6911 | Since: unknown | API-Set: client
 */
export function getMapdataEntityHandle(mapDataHash: number, entityInternalIdx: number): [boolean, number] {
    return GetMapdataEntityHandle(mapDataHash, entityInternalIdx);
}

/**
 * Returns mapdata's entity matrix. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
 * 
 * Matrix layout is as follows:
 * 
 * *   Element \[0], \[1] and \[2] should represent the right vector.
 * *   Element \[4], \[5] and \[6] should represent the forward vector.
 * *   Element \[8], \[9] and \[10] should represent the up vector.
 * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
 * *   All other elements should be \[0, 0, 0, 1].
 * 
 * Hash: 0x2C3CDA93 | Since: unknown | API-Set: client
 */
export function getMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number, matrixPtr: number): boolean {
    return GetMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr);
}

/**
 * Returns the transient map data index for a specified hash.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xD29D8EDD | Since: unknown | API-Set: client
 */
export function getMapdataFromHashKey(mapdataHandle: number | string): number {
    if (typeof mapdataHandle === 'string') mapdataHandle = GetHashKey(mapdataHandle)
    return GetMapdataFromHashKey(mapdataHandle);
}

/**
 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
 * 
 * Hash: 0xFF72DF84 | Since: unknown | API-Set: client
 */
export function getParkedVehicleDensityMultiplier(): number {
    return GetParkedVehicleDensityMultiplier();
}

/**
 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
 * Same as vehicle density multiplier.
 * 
 * Hash: 0x7B0D00C5 | Since: unknown | API-Set: client
 */
export function getRandomVehicleDensityMultiplier(): number {
    return GetRandomVehicleDensityMultiplier();
}

/**
 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
 * 
 * Hash: 0x77C598B2 | Since: unknown | API-Set: client
 */
export function getScenarioPedDensityMultiplier(): number {
    return GetScenarioPedDensityMultiplier();
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Returns whether an asynchronous streaming file registration completed.
 * 
 * Hash: 0xA194934D | Since: unknown | API-Set: client
 */
export function isStreamingFileReady(registerAs: string): boolean {
    return IsStreamingFileReady(registerAs);
}

/**
 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xADECF19E | Since: unknown | API-Set: client
 */
export function leaveCursorMode(): void {
    LeaveCursorMode();
}

/**
 * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
 * 
 * Hash: 0x30CE39D8 | Since: unknown | API-Set: client
 */
export function onesyncEnableRemoteAttachmentSanitization(enable: boolean): void {
    OnesyncEnableRemoteAttachmentSanitization(enable);
}

/**
 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 * 
 * Hash: 0xD3BC438F | Since: unknown | API-Set: client
 */
export function overridePopGroups(path: string): void {
    OverridePopGroups(path);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 * 
 * Hash: 0x3C2F9037 | Since: unknown | API-Set: client
 */
export function registerArchetypes(factory: Function): void {
    RegisterArchetypes(factory);
}

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * 
 * Hash: 0x1B3A363 | Since: unknown | API-Set: client
 */
export function registerFontFile(fileName: string): void {
    RegisterFontFile(fileName);
}

/**
 * Registers a specified font name for use with text draw commands.
 * 
 * Hash: 0xACF6D8EE | Since: unknown | API-Set: client
 */
export function registerFontId(fontName: string): number {
    return RegisterFontId(fontName);
}

/**
 * Registers a key mapping for the current resource.
 * 
 * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
 * 
 * Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.
 * 
 * Hash: 0xD7664FD1 | Since: unknown | API-Set: client
 */
export function registerKeyMapping(commandString: string, description: string, defaultMapper: string, defaultParameter: string): void {
    RegisterKeyMapping(commandString, description, defaultMapper, defaultParameter);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 * 
 * Hash: 0xCEAD2D4B | Since: unknown | API-Set: client
 */
export function registerStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void {
    RegisterStreamingFileFromCache(resourceName, fileName, cacheString);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 * 
 * Hash: 0x1493DCC1 | Since: unknown | API-Set: client
 */
export function registerStreamingFileFromKvs(kvsKey: string): void {
    RegisterStreamingFileFromKvs(kvsKey);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 * 
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 * 
 * Hash: 0xF44BFB95 | Since: unknown | API-Set: client
 */
export function registerStreamingFileFromUrl(registerAs: string, url: string): void {
    RegisterStreamingFileFromUrl(registerAs, url);
}

/**
 * Removes health config.
 * 
 * Hash: 0xE0ED5FB | Since: unknown | API-Set: client
 */
export function removeHealthConfig(configName: string): void {
    RemoveHealthConfig(configName);
}

/**
 * Adds a cooldown between instances of moving and then aiming.
 * Can be optionally used to hinder 'speedboosting'
 * To turn off, set value to 0
 * 
 * Hash: 0xA42A3DBF | Since: unknown | API-Set: client
 */
export function setAimCooldown(value: number): void {
    SetAimCooldown(value);
}

/**
 * No comment provided
 * 
 * Hash: 0xC5945BD9 | Since: unknown | API-Set: client
 */
export function setCalmingQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
    return SetCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY);
}

/**
 * No comment provided
 * 
 * Hash: 0x67977501 | Since: unknown | API-Set: client
 */
export function setCalmingQuadDampening(calmingQuad: number, dampening: number): boolean {
    return SetCalmingQuadDampening(calmingQuad, dampening);
}

/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 * 
 * Hash: 0x7635B349 | Since: unknown | API-Set: client
 */
export function setFlashLightKeepOnWhileMoving(state: boolean): void {
    SetFlashLightKeepOnWhileMoving(state);
}

/**
 * Sets fuel consumption rate multiplier for all vehicles operated by a player. This is a way to slow down or speed up fuel consumption for all vehicles at a time. If 0 - it practically means that fuel will not be consumed. By default is set to 1.
 * 
 * When the multiplier is set to 1 a default 65 litre gas tank car with average fuel consumption can stay idle for ~16.67 hours or run with max RPM for ~2.5 hours.
 * 
 * To customize fuel consumption per vehicle / vehicle class use [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolConsumptionRate`. By default it is set to 0.5 for all vehicles.
 * 
 * Hash: 0x845F3E5C | Since: unknown | API-Set: client
 */
export function setFuelConsumptionRateMultiplier(multiplier: number): void {
    SetFuelConsumptionRateMultiplier(multiplier);
}

/**
 * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.
 * 
 * The default Gta5 behaviour is fuel consumption turned off.
 * 
 * Hash: 0x81DAD03E | Since: unknown | API-Set: client
 */
export function setFuelConsumptionState(state: boolean): void {
    SetFuelConsumptionState(state);
}

/**
 * No comment provided
 * 
 * Hash: 0x1C47F6AC | Since: unknown | API-Set: client
 */
export function setGlobalPassengerMassMultiplier(massMul: number): void {
    SetGlobalPassengerMassMultiplier(massMul);
}

/**
 * Sets default armor value for specific health config.
 * 
 * Hash: 0x20A1E6A2 | Since: unknown | API-Set: client
 */
export function setHealthConfigDefaultArmor(configName: string, newValue: number): void {
    SetHealthConfigDefaultArmor(configName, newValue);
}

/**
 * Sets default endurance value for specific health config.
 * 
 * Hash: 0x60F20B81 | Since: unknown | API-Set: client
 */
export function setHealthConfigDefaultEndurance(configName: string, newValue: number): void {
    SetHealthConfigDefaultEndurance(configName, newValue);
}

/**
 * Sets default health value for specific health config.
 * 
 * Hash: 0xC705C778 | Since: unknown | API-Set: client
 */
export function setHealthConfigDefaultHealth(configName: string, newValue: number): void {
    SetHealthConfigDefaultHealth(configName, newValue);
}

/**
 * Sets default dog takedown threshold value for specific health config.
 * 
 * Hash: 0x9A995E96 | Since: unknown | API-Set: client
 */
export function setHealthConfigDogTakedownThreshold(configName: string, newValue: number): void {
    SetHealthConfigDogTakedownThreshold(configName, newValue);
}

/**
 * Sets default dying health threshold value for specific health config.
 * 
 * Hash: 0x9B00FD77 | Since: unknown | API-Set: client
 */
export function setHealthConfigDyingThreshold(configName: string, newValue: number): void {
    SetHealthConfigDyingThreshold(configName, newValue);
}

/**
 * Sets default fatigued health threshold value for specific health config.
 * 
 * Hash: 0xC58953FD | Since: unknown | API-Set: client
 */
export function setHealthConfigFatiguedThreshold(configName: string, newValue: number): void {
    SetHealthConfigFatiguedThreshold(configName, newValue);
}

/**
 * Sets default hurt health threshold value for specific health config.
 * 
 * Hash: 0x98DF1A83 | Since: unknown | API-Set: client
 */
export function setHealthConfigHurtThreshold(configName: string, newValue: number): void {
    SetHealthConfigHurtThreshold(configName, newValue);
}

/**
 * Sets default injured health threshold value for specific health config.
 * 
 * Hash: 0xF9D9B647 | Since: unknown | API-Set: client
 */
export function setHealthConfigInjuredThreshold(configName: string, newValue: number): void {
    SetHealthConfigInjuredThreshold(configName, newValue);
}

/**
 * Sets default invincible value for specific health config.
 * 
 * Hash: 0x4A9EEDE6 | Since: unknown | API-Set: client
 */
export function setHealthConfigInvincible(configName: string, newValue: boolean): void {
    SetHealthConfigInvincible(configName, newValue);
}

/**
 * Sets default melee cardinal fatal attack value for specific health config.
 * 
 * Hash: 0xDD443E53 | Since: unknown | API-Set: client
 */
export function setHealthConfigMeleeFatalAttack(configName: string, newValue: boolean): void {
    SetHealthConfigMeleeFatalAttack(configName, newValue);
}

/**
 * Sets default writhe from bullet threshold value for specific health config.
 * 
 * Hash: 0xE97633CB | Since: unknown | API-Set: client
 */
export function setHealthConfigWritheFromBulletThreshold(configName: string, newValue: number): void {
    SetHealthConfigWritheFromBulletThreshold(configName, newValue);
}

/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 * 
 * Hash: 0x36CA2554 | Since: unknown | API-Set: client
 */
export function setMillisecondsPerGameMinute(value: number): void {
    SetMillisecondsPerGameMinute(value);
}

/**
 * <strong>This native is deprecated and does nothing!</strong>
 * 
 * Hash: 0x7F6B8D75 | Since: unknown | API-Set: client
 */
export function setModelHeadlightConfiguration(modelHash: number | string, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    SetModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation);
}

/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 * 
 * Hash: 0x7A27BC93 | Since: unknown | API-Set: client
 */
export function setMpGamerTagsUseVehicleBehavior(enabled: boolean): void {
    SetMpGamerTagsUseVehicleBehavior(enabled);
}

/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 * 
 * Hash: 0xD61676B3 | Since: unknown | API-Set: client
 */
export function setMpGamerTagsVisibleDistance(distance: number): void {
    SetMpGamerTagsVisibleDistance(distance);
}

/**
 * Registers a keymap that will be triggered whenever `rawKeyIndex` is pressed or released.
 * 
 * `onKeyUp` and `onKeyDown` will not provide any arguments.
 * 
 * ```ts
 * function onStateChange();
 * ```
 * 
 * Hash: 0x49C1F6DC | Since: unknown | API-Set: client
 */
export function registerRawKeymap(keymapName: string, onKeyDown: Function, onKeyUp: Function, rawKeyIndex: number, canBeDisabled: boolean): void {
    RegisterRawKeymap(keymapName, onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled);
}

/**
 * Remaps the keymap bound to `keymapName` to `newRawKeyIndex`
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x6E38C1B9 | Since: unknown | API-Set: client
 */
export function remapRawKeymap(keymapName: string, newRawKeyIndex: number): void {
    RemapRawKeymap(keymapName, newRawKeyIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xC44C2F44 | Since: unknown | API-Set: client
 */
export function setBackfaceculling(toggle: boolean): void {
    SetBackfaceculling(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A7A8DAC | Since: unknown | API-Set: client
 */
export function setCursorLocation(x: number, y: number): boolean {
    return SetCursorLocation(x, y);
}

/**
 * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
 * 
 * Hash: 0x85A10FFD | Since: unknown | API-Set: client
 */
export function setIgnoreVehicleOwnershipForStowing(ignore: boolean): void {
    SetIgnoreVehicleOwnershipForStowing(ignore);
}

/**
 * Activates built-in timecycle editing tool.
 * 
 * Hash: 0xEEB9B76A | Since: unknown | API-Set: client
 */
export function activateTimecycleEditor(): void {
    ActivateTimecycleEditor();
}

/**
 * No comment provided
 * 
 * Hash: 0x3422291C | Since: unknown | API-Set: client
 */
export function applyWeatherCycles(numEntries: number, msPerCycle: number): boolean {
    return ApplyWeatherCycles(numEntries, msPerCycle);
}

/**
 * No comment provided
 * 
 * Hash: 0x54D636B3 | Since: unknown | API-Set: client
 */
export function cloneTimecycleModifier(sourceModifierName: string, clonedModifierName: string): number {
    return CloneTimecycleModifier(sourceModifierName, clonedModifierName);
}

/**
 * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
 * 
 * Hash: 0x70FA2AFA | Since: unknown | API-Set: client
 */
export function createTimecycleModifier(modifierName: string): number {
    return CreateTimecycleModifier(modifierName);
}

/**
 * Disables the game's world horizon lods rendering (see `farlods.#dd`).
 * Using the island hopper natives might also affect this state.
 * 
 * Hash: 0xA9C92CDC | Since: unknown | API-Set: client
 */
export function disableWorldhorizonRendering(state: boolean): void {
    DisableWorldhorizonRendering(state);
}

/**
 * No comment provided
 * 
 * Hash: 0xC53BB6D3 | Since: unknown | API-Set: client
 */
export function doesTimecycleModifierHasVar(modifierName: string, varName: string): boolean {
    return DoesTimecycleModifierHasVar(modifierName, varName);
}

/**
 * No comment provided
 * 
 * Hash: 0xDEDA4E50 | Since: unknown | API-Set: client
 */
export function endFindObject(findHandle: number): void {
    EndFindObject(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9615C2AD | Since: unknown | API-Set: client
 */
export function endFindPed(findHandle: number): void {
    EndFindPed(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3C407D53 | Since: unknown | API-Set: client
 */
export function endFindPickup(findHandle: number): void {
    EndFindPickup(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9227415A | Since: unknown | API-Set: client
 */
export function endFindVehicle(findHandle: number): void {
    EndFindVehicle(findHandle);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0xD2CB95A3 | Since: unknown | API-Set: client
 */
export function experimentalLoadCloneCreate(data: string, objectId: number, tree: string): number {
    return ExperimentalLoadCloneCreate(data, objectId, tree);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0x6BC189AC | Since: unknown | API-Set: client
 */
export function experimentalLoadCloneSync(entity: number | IEntity, data: string): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    ExperimentalLoadCloneSync(_entity, data);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0x9D65CAD2 | Since: unknown | API-Set: client
 */
export function experimentalSaveCloneCreate(entity: number | IEntity): string {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return ExperimentalSaveCloneCreate(_entity);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0x38D19210 | Since: unknown | API-Set: client
 */
export function experimentalSaveCloneSync(entity: number | IEntity): string {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return ExperimentalSaveCloneSync(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xFAA6CB5D | Since: unknown | API-Set: client
 */
export function findFirstObject(): [number, number] {
    return FindFirstObject();
}

/**
 * No comment provided
 * 
 * Hash: 0xFB012961 | Since: unknown | API-Set: client
 */
export function findFirstPed(): [number, number] {
    return FindFirstPed();
}

/**
 * No comment provided
 * 
 * Hash: 0x3FF9D340 | Since: unknown | API-Set: client
 */
export function findFirstPickup(): [number, number] {
    return FindFirstPickup();
}

/**
 * No comment provided
 * 
 * Hash: 0x15E55694 | Since: unknown | API-Set: client
 */
export function findFirstVehicle(): [number, number] {
    return FindFirstVehicle();
}

/**
 * No comment provided
 * 
 * Hash: 0x4E129DBF | Since: unknown | API-Set: client
 */
export function findNextObject(findHandle: number): [boolean, number] {
    return FindNextObject(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0xAB09B548 | Since: unknown | API-Set: client
 */
export function findNextPed(findHandle: number): [boolean, number] {
    return FindNextPed(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4107EF0F | Since: unknown | API-Set: client
 */
export function findNextPickup(findHandle: number): [boolean, number] {
    return FindNextPickup(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8839120D | Since: unknown | API-Set: client
 */
export function findNextVehicle(findHandle: number): [boolean, number] {
    return FindNextVehicle(findHandle);
}

/**
 * This native returns the currently used game's name.
 * 
 * Hash: 0xACA18ECD | Since: unknown | API-Set: client
 */
export function getCurrentGameName(): string {
    return GetCurrentGameName();
}

/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 * 
 * Hash: 0xEA11BFBA | Since: unknown | API-Set: client
 */
export function getCurrentServerEndpoint(): string {
    return GetCurrentServerEndpoint();
}

/**
 * No comment provided
 * 
 * Hash: 0xFE2A1D4D | Since: unknown | API-Set: client
 */
export function getTimecycleModifierCount(): number {
    return GetTimecycleModifierCount();
}

/**
 * No comment provided
 * 
 * Hash: 0x5F4CD0E2 | Since: unknown | API-Set: client
 */
export function getTimecycleModifierIndexByName(modifierName: string): number {
    return GetTimecycleModifierIndexByName(modifierName);
}

/**
 * No comment provided
 * 
 * Hash: 0x28CB8608 | Since: unknown | API-Set: client
 */
export function getTimecycleModifierNameByIndex(modifierIndex: number): string {
    return GetTimecycleModifierNameByIndex(modifierIndex);
}

/**
 * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
 * 
 * Hash: 0xBE54124A | Since: unknown | API-Set: client
 */
export function getTimecycleModifierStrength(): number {
    return GetTimecycleModifierStrength();
}

/**
 * No comment provided
 * 
 * Hash: 0xA7109E12 | Since: unknown | API-Set: client
 */
export function getTimecycleModifierVar(modifierName: string, varName: string): [boolean, number, number] {
    return GetTimecycleModifierVar(modifierName, varName);
}

/**
 * No comment provided
 * 
 * Hash: 0x60FB60FE | Since: unknown | API-Set: client
 */
export function getTimecycleModifierVarCount(modifierName: string): number {
    return GetTimecycleModifierVarCount(modifierName);
}

/**
 * No comment provided
 * 
 * Hash: 0xE874AB1D | Since: unknown | API-Set: client
 */
export function getTimecycleModifierVarNameByIndex(modifierName: string, modifierVarIndex: number): string {
    return GetTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex);
}

/**
 * Returns the amount of variables available to be applied on timecycle modifiers.
 * 
 * Hash: 0x838B34D8 | Since: unknown | API-Set: client
 */
export function getTimecycleVarCount(): number {
    return GetTimecycleVarCount();
}

/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 * 
 * Hash: 0x3B90238 | Since: unknown | API-Set: client
 */
export function getTimecycleVarDefaultValueByIndex(varIndex: number): number {
    return GetTimecycleVarDefaultValueByIndex(varIndex);
}

/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 * 
 * Hash: 0xC6C55AAF | Since: unknown | API-Set: client
 */
export function getTimecycleVarNameByIndex(varIndex: number): string {
    return GetTimecycleVarNameByIndex(varIndex);
}

/**
 * Converts a screen coordinate into its relative world coordinate.
 * 
 * Hash: 0xC81D0659 | Since: unknown | API-Set: client
 */
export function getWorldCoordFromScreenCoord(screenSize: Vector2): [Vector3, Vector3] {
    return GetWorldCoordFromScreenCoord(screenSize.x, screenSize.y);
}

/**
 * No comment provided
 * 
 * Hash: 0x36DF8612 | Since: unknown | API-Set: client
 */
export function removeTimecycleModifier(modifierName: string): void {
    RemoveTimecycleModifier(modifierName);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A5E0D05 | Since: unknown | API-Set: client
 */
export function removeTimecycleModifierVar(modifierName: string, varName: string): void {
    RemoveTimecycleModifierVar(modifierName, varName);
}

/**
 * Requests a resource file set with the specified name to be downloaded and mounted on top of the current resource.
 * 
 * Resource file sets are specified in `fxmanifest.lua` with the following syntax:
 * 
 * ```lua
 * file_set 'addon_ui' {
 * 'ui/addon/index.html',
 * 'ui/addon\/\**.js',
 * }
 * ```
 * 
 * This command will trigger a script error if the request failed.
 * 
 * Hash: 0xE7490533 | Since: unknown | API-Set: client
 */
export function requestResourceFileSet(setName: string): boolean {
    return RequestResourceFileSet(setName);
}

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * 
 * Hash: 0x8BBE6CC0 | Since: unknown | API-Set: client
 */
export function sendLoadingScreenMessage(jsonString: string): boolean {
    return SendLoadingScreenMessage(jsonString);
}

/**
 * Toggles the visibility of resource names in the FiveM key mapping page.
 * 
 * Hash: 0xCB0241B5 | Since: unknown | API-Set: client
 */
export function setKeyMappingHideResources(hide: boolean): void {
    SetKeyMappingHideResources(hide);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7DD3209 | Since: unknown | API-Set: client
 */
export function setSnakeoilForEntry(name: string, path: string, data: string): void {
    SetSnakeoilForEntry(name, path, data);
}

/**
 * No comment provided
 * 
 * Hash: 0x97B2F9F8 | Since: unknown | API-Set: client
 */
export function setTextChatEnabled(enabled: boolean): boolean {
    return SetTextChatEnabled(enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E0A422B | Since: unknown | API-Set: client
 */
export function setTimecycleModifierVar(modifierName: string, varName: string, value1: number, value2: number): void {
    SetTimecycleModifierVar(modifierName, varName, value1, value2);
}

/**
 * No comment provided
 * 
 * Hash: 0xD264D4E1 | Since: unknown | API-Set: client
 */
export function setWeatherCycleEntry(index: number, typeName: string, timeMult: number): boolean {
    return SetWeatherCycleEntry(index, typeName, timeMult);
}

/**
 * Sets whether or not the weather should be owned by the network subsystem.
 * 
 * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
 * 
 * Hash: 0x2703D582 | Since: unknown | API-Set: client
 */
export function setWeatherOwnedByNetwork(network: boolean): void {
    SetWeatherOwnedByNetwork(network);
}

/**
 * The backing function for TriggerLatentServerEvent.
 * 
 * Hash: 0x128737EA | Since: unknown | API-Set: client
 */
export function triggerLatentServerEventInternal(eventName: string, eventPayload: string, payloadLength: number, bps: number): void {
    TriggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps);
}

/**
 * The backing function for TriggerServerEvent.
 * 
 * Hash: 0x7FDD1128 | Since: unknown | API-Set: client
 */
export function triggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
    TriggerServerEventInternal(eventName, eventPayload, payloadLength);
}

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
 * Hash: 0xAB7F7241 | Since: unknown | API-Set: shared
 */
export function addConvarChangeListener(conVarFilter: string, handler: Function): number {
    return AddConvarChangeListener(conVarFilter, handler);
}

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
 * Hash: 0x5BA35AAF | Since: unknown | API-Set: shared
 */
export function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number {
    return AddStateBagChangeHandler(keyFilter, bagFilter, handler);
}

/**
 * Cancels the currently executing event.
 * 
 * Hash: 0xFA29D35D | Since: unknown | API-Set: shared
 */
export function cancelEvent(): void {
    CancelEvent();
}

/**
 * No comment provided
 * 
 * Hash: 0x1E86F206 | Since: unknown | API-Set: shared
 */
export function deleteFunctionReference(referenceIdentity: string): void {
    DeleteFunctionReference(referenceIdentity);
}

/**
 * No comment provided
 * 
 * Hash: 0xF4E2079D | Since: unknown | API-Set: shared
 */
export function duplicateFunctionReference(referenceIdentity: string): string {
    return DuplicateFunctionReference(referenceIdentity);
}

/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 * 
 * Hash: 0x561C060B | Since: unknown | API-Set: shared
 */
export function executeCommand(commandString: string): void {
    ExecuteCommand(commandString);
}

/**
 * An internal function for converting a stack trace object to a string.
 * 
 * Hash: 0xD70C3BCA | Since: unknown | API-Set: shared
 */
export function formatStackTrace(traceData: number | IObject): string {
    const _traceData = typeof traceData == 'object' ? traceData.handle() : traceData;
    return FormatStackTrace(_traceData);
}

/**
 * Can be used to get a console variable of type `char*`, for example a string.
 * 
 * Hash: 0x6CCD2564 | Since: unknown | API-Set: shared
 */
export function getConvar(varName: string, default_: string): string {
    return GetConvar(varName, default_);
}

/**
 * Can be used to get a console variable casted back to `bool`.
 * 
 * Hash: 0x7E8EBFE5 | Since: unknown | API-Set: shared
 */
export function getConvarBool(varName: string, defaultValue: boolean): boolean {
    return GetConvarBool(varName, defaultValue);
}

/**
 * This will have floating point inaccuracy.
 * 
 * Hash: 0x9E666D | Since: unknown | API-Set: shared
 */
export function getConvarFloat(varName: string, defaultValue: number): number {
    return GetConvarFloat(varName, defaultValue);
}

/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 * 
 * Hash: 0x935C0AB2 | Since: unknown | API-Set: shared
 */
export function getConvarInt(varName: string, default_: number): number {
    return GetConvarInt(varName, default_);
}

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
 * Hash: 0x804B9F7B | Since: unknown | API-Set: shared
 */
export function getGameBuildNumber(): number {
    return GetGameBuildNumber();
}

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
 * Hash: 0xE8EAA18B | Since: unknown | API-Set: shared
 */
export function getGameName(): string {
    return GetGameName();
}

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
 * Hash: 0x2B9D4F50 | Since: unknown | API-Set: shared
 */
export function getGamePool(poolName: string): number {
    return GetGamePool(poolName);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F1C4383 | Since: unknown | API-Set: shared
 */
export function getInstanceId(): number {
    return GetInstanceId();
}

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
 * Hash: 0xD4BEF069 | Since: unknown | API-Set: shared
 */
export function getRegisteredCommands(): number {
    return GetRegisteredCommands();
}

/**
 * No comment provided
 * 
 * Hash: 0x78D864C7 | Since: unknown | API-Set: shared
 */
export function getStateBagKeys(bagName: string): number {
    return GetStateBagKeys(bagName);
}

/**
 * Returns the value of a state bag key.
 * 
 * Hash: 0x637F4C75 | Since: unknown | API-Set: shared
 */
export function getStateBagValue(bagName: string, key: string): number {
    return GetStateBagValue(bagName, key);
}

/**
 * No comment provided
 * 
 * Hash: 0x7EBB9929 | Since: unknown | API-Set: shared
 */
export function isAceAllowed(_object: string): boolean {
    return IsAceAllowed(_object);
}

/**
 * Gets whether or not this is the CitizenFX server.
 * 
 * Hash: 0xCF24C52E | Since: unknown | API-Set: shared
 */
export function isDuplicityVersion(): boolean {
    return IsDuplicityVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0x37CF52CE | Since: unknown | API-Set: shared
 */
export function isPrincipalAceAllowed(principal: string, _object: string): boolean {
    return IsPrincipalAceAllowed(principal, _object);
}

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
 * Hash: 0x5FA79B0F | Since: unknown | API-Set: shared
 */
export function registerCommand(commandName: string, handler: Function, restricted: boolean): void {
    RegisterCommand(commandName, handler, restricted);
}

/**
 * No comment provided
 * 
 * Hash: 0xEAC49841 | Since: unknown | API-Set: shared
 */
export function removeConvarChangeListener(cookie: number): void {
    RemoveConvarChangeListener(cookie);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Removes a handler for changes to a state bag.
 * 
 * Hash: 0xD36BE661 | Since: unknown | API-Set: shared
 */
export function removeStateBagChangeHandler(cookie: number): void {
    RemoveStateBagChangeHandler(cookie);
}

/**
 * Internal function for setting a state bag value.
 * 
 * Hash: 0x8D50E33A | Since: unknown | API-Set: shared
 */
export function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void {
    SetStateBagValue(bagName, keyName, valueData, valueLength, replicated);
}

/**
 * No comment provided
 * 
 * Hash: 0x12A330 | Since: unknown | API-Set: shared
 */
export function stateBagHasKey(bagName: string, key: string): boolean {
    return StateBagHasKey(bagName, key);
}

/**
 * The backing function for TriggerEvent.
 * 
 * Hash: 0x91310870 | Since: unknown | API-Set: shared
 */
export function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
    TriggerEventInternal(eventName, eventPayload, payloadLength);
}

/**
 * Returns whether or not the currently executing event was canceled.
 * 
 * Hash: 0x58382A19 | Since: unknown | API-Set: shared
 */
export function wasEventCanceled(): boolean {
    return WasEventCanceled();
}

/**
 * No comment provided
 * 
 * Hash: 0x73D57CFFDD12C355 | Since: 323 | API-Set: unknown
 */
export function absf(value: number): number {
    return Absf(value);
}

/**
 * No comment provided
 * 
 * Hash: 0xF0D31AD191A74F87 | Since: 323 | API-Set: unknown
 */
export function absi(value: number): number {
    return Absi(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x1D08B970013C34B6 | Since: 323 | API-Set: unknown
 */
export function acos(): number {
    return Acos(0);
}

/**
 * Appears to remove stealth kill action from memory
 * 
 * Hash: 0xA6A12939F16D85BE | Since: 323 | API-Set: unknown
 */
export function actionManagerEnableAction(hash: number | string, enable: boolean): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    RemoveStealthKill(hash, enable);
}

/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * Hash: 0xEB078CA2B5E82ADD | Since: 323 | API-Set: unknown
 */
export function activityFeedActionStartWithCommandLine(): void {
    Citizen.invokeNative('0xEB078CA2B5E82ADD', undefined, undefined);
}

/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * Hash: 0x703CC7F60CBB2B57 | Since: 323 | API-Set: unknown
 */
export function activityFeedActionStartWithCommandLineAdd(): void {
    Citizen.invokeNative('0x703CC7F60CBB2B57', undefined);
}

/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * Hash: 0x97E7E2C04245115B | Since: 323 | API-Set: unknown
 */
export function activityFeedAddIntToCaption(): void {
    Citizen.invokeNative('0x97E7E2C04245115B', undefined);
}

/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * Hash: 0xEBD3205A207939ED | Since: 323 | API-Set: unknown
 */
export function activityFeedAddLiteralSubstringToCaption(): void {
    Citizen.invokeNative('0xEBD3205A207939ED', undefined);
}

/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * Hash: 0x31125FD509D9043F | Since: 323 | API-Set: unknown
 */
export function activityFeedAddSubstringToCaption(): void {
    Citizen.invokeNative('0x31125FD509D9043F', undefined);
}

/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * Hash: 0x4DCDF92BF64236CD | Since: 323 | API-Set: unknown
 */
export function activityFeedCreate(): void {
    ActivityFeedCreate(undefined, undefined);
}

/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * Hash: 0x916CA67D26FD1E37 | Since: 2060 | API-Set: unknown
 */
export function activityFeedLargeImageUrl(): void {
    Citizen.invokeNative('0x916CA67D26FD1E37', undefined);
}

/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * Used only once in the scripts (ingamehud) with p0 = "AF_GAMEMODE"
 * 
 * Hash: 0xBA4B8D83BDC75551 | Since: 323 | API-Set: unknown
 */
export function activityFeedOnlinePlayedWithPost(): void {
    Citizen.invokeNative('0xBA4B8D83BDC75551', undefined);
}

/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * Hash: 0x8951EB9C6906D3C8 | Since: 323 | API-Set: unknown
 */
export function activityFeedPost(): void {
    Citizen.invokeNative('0x8951EB9C6906D3C8');
}

/**
 * To remove, see: REMOVE_DISPATCH_SPAWN_BLOCKING_AREA
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * 
 * Hash: 0x918C7B2D2FF3928B | Since: 323 | API-Set: unknown
 */
export function addDispatchSpawnAngledBlockingArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): number {
    return AddDispatchSpawnBlockingAngledArea(x1, y1, z1, x2, y2, z2, width);
}

/**
 * No comment provided
 * 
 * Hash: 0x2D4259F1FEB81DA9 | Since: 323 | API-Set: unknown
 */
export function addDispatchSpawnSphereBlockingArea(x1: number, y1: number, x2: number, y2: number): number {
    return AddDispatchSpawnBlockingArea(x1, y1, x2, y2);
}

/**
 * Returns the index of the newly created hospital spawn point.
 * 
 * p3 might be radius?
 * 
 * Hash: 0x1F464EF988465A81 | Since: 323 | API-Set: unknown
 */
export function addHospitalRestart(pos: Vector3): number {
    return AddHospitalRestart(pos.x, pos.y, pos.z, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x452736765B31FC4B | Since: 323 | API-Set: unknown
 */
export function addPoliceRestart(): number {
    return AddPoliceRestart(0, 0, 0, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x67F6413D3220E18D | Since: 323 | API-Set: unknown
 */
export function addPopMultiplierArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
    return AddPopMultiplierArea(x1, y1, z1, x2, y2, z2, 0, 0, false, false);
}

/**
 * This native is adding a zone, where you can change density settings. For example, you can add a zone on 0.0, 0.0, 0.0 with radius 900.0 and vehicleMultiplier 0.0, and you will not see any new population vehicle spawned in a radius of 900.0 from 0.0, 0.0, 0.0. Returns the id. You can have only 15 zones at the same time. You can remove zone using REMOVE_POP_MULTIPLIER_SPHERE
 * 
 * Hash: 0x32C7A7E8C43A1F80 | Since: 323 | API-Set: unknown
 */
export function addPopMultiplierSphere(pos: Vector3, radius: number, pedMultiplier: number, vehicleMultiplier: number): number {
    return AddPopMultiplierSphere(pos.x, pos.y, pos.z, radius, pedMultiplier, vehicleMultiplier, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x69FE6DC87BD2A5E9 | Since: 323 | API-Set: unknown
 */
export function addReplayStatValue(value: any): void {
    AddReplayStatValue(value);
}

/**
 * See description of `ADD_STUNT_JUMP_ANGLED` for detailed info. The only difference really is this one does not have the radius (or angle, not sure) floats parameters for entry and landing zones.
 * 
 * Hash: 0x1A992DA297A4630C | Since: 323 | API-Set: unknown
 */
export function addStuntJump(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number, camX: number, camY: number, camZ: number): number {
    return AddStuntJump(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, camX, camY, camZ, 0, 0, 0);
}

/**
 * Creates a new stunt jump.
 * 
 * The radius1 and radius2 might actually not be a radius at all, but that's what it seems to me testing them in-game. But they may be 'angle' floats instead, considering this native is named ADD_STUNT_JUMP_**ANGLED**.
 * 
 * Info about the specific 'parameter sections':
 * 
 * 
 * <strong>x1, y1, z1, x2, y2, z2 and radius1:</strong>
 * 
 * First coordinates are for the jump entry area, and the radius that will be checked around that area. So if you're not exactly within the coordinates, but you are within the outter radius limit then it will still register as entering the stunt jump. Note as mentioned above, the radius is just a guess, I'm not really sure about it's exact purpose.
 * 
 * 
 * <strong>x3, y3, z3, x4, y4, z4 and radius2:</strong>
 * 
 * Next part is the landing area, again starting with the left bottom (nearest to the stunt jump entry zone) coordinate, and the second one being the top right furthest away part of the landing area. Followed by another (most likely) radius float, this is usually slightly larger than the entry zone 'radius' float value, just because you have quite a lot of places where you can land (I'm guessing).
 * 
 * 
 * <strong>camX, camY and camZ:</strong>
 * 
 * The final coordinate in this native is the Camera position. Rotation and zoom/FOV is managed by the game itself, you just need to provide the camera location.
 * 
 * 
 * <strong>unk1, unk2 and unk3:</strong>
 * 
 * Not sure what these are for, but they're always `150, 0, 0` in decompiled scripts.
 * 
 * Here is a list of almost all of the stunt jumps from GTA V (taken from decompiled scripts): https://pastebin.com/EW1jBPkY
 * 
 * Hash: 0xBBE5D803A5360CBF | Since: 323 | API-Set: unknown
 */
export function addStuntJumpAngled(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius1: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number, radius2: number, camX: number, camY: number, camZ: number): number {
    return AddStuntJumpAngled(x1, y1, z1, x2, y2, z2, radius1, x3, y3, z3, x4, y4, z4, radius2, camX, camY, camZ, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB8721407EE9C3FF6 | Since: 323 | API-Set: unknown
 */
export function addTacticalNavMeshPoint(pos: Vector3): void {
    AddTacticalAnalysisPoint(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xDEA36202FC3382DF | Since: 323 | API-Set: unknown
 */
export function allowMissionCreatorWarp(toggle: boolean): void {
    AllowMissionCreatorWarp(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xD19C0826DC20CF1C | Since: 2802 | API-Set: unknown
 */
export function areCreditsRunning(): boolean {
    return Citizen.invokeNative('0xD19C0826DC20CF1C');
}

/**
 * No comment provided
 * 
 * Hash: 0x5AA3BEFA29F03AD4 | Since: 323 | API-Set: unknown
 */
export function areProfileSettingsValid(): boolean {
    return AreProfileSettingsValid();
}

/**
 * No comment provided
 * 
 * Hash: 0x0C515FAB3FF9EA92 | Since: 323 | API-Set: unknown
 */
export function areStringsEqual(string1: string, string2: string): boolean {
    return AreStringsEqual(string1, string2);
}

/**
 * No comment provided
 * 
 * Hash: 0xC843060B5765DCE7 | Since: 323 | API-Set: unknown
 */
export function asin(): number {
    return Asin(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9D1795CD5043663 | Since: 323 | API-Set: unknown
 */
export function atan(): number {
    return Atan(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x8927CBF9D22261A4 | Since: 323 | API-Set: unknown
 */
export function atan2(): number {
    return Atan2(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0E500246FF73D66 | Since: 323 | API-Set: unknown
 */
export function beginReplayStats(): void {
    BeginReplayStats(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9B2BD3773123EA2F | Since: 323 | API-Set: unknown
 */
export function blockDispatchServiceResourceCreation(dispatchService: number, toggle: boolean): void {
    BlockDispatchServiceResourceCreation(dispatchService, toggle);
}

/**
 * DO NOT use this as it doesn't clean up the text input box properly and your script will get stuck in the UPDATE_ONSCREEN_KEYBOARD() loop.
 * Use FORCE_CLOSE_TEXT_INPUT_BOX instead.
 * 
 * Hash: 0x58A39BE597CE99CD | Since: 757 | API-Set: unknown
 */
export function cancelOnscreenKeyboard(): void {
    CancelOnscreenKeyboard();
}

/**
 * No comment provided
 * 
 * Hash: 0xE6B7B0ACD4E4B75E | Since: 323 | API-Set: unknown
 */
export function cancelStuntJump(): void {
    CancelStuntJump();
}

/**
 * No comment provided
 * 
 * Hash: 0xC79AE21974B01FB2 | Since: 323 | API-Set: unknown
 */
export function cleanupAsyncInstall(): void {
    CleanupAsyncInstall();
}

/**
 * No comment provided
 * 
 * Hash: 0x11DB3500F042A8AA | Since: 323 | API-Set: unknown
 */
export function clearAngledAreaOfVehicles(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): void {
    ClearAngledAreaOfVehicles(x1, y1, z1, x2, y2, z2, width, false, false, false, false, false, undefined, undefined);
}

/**
 * Example: CLEAR_AREA(0, 0, 0, 30, true, false, false, false);
 * 
 * Hash: 0xA56F01F3765B93A0 | Since: 323 | API-Set: unknown
 */
export function clearArea(pos: Vector3, radius: number, ignoreCopCars: boolean, ignoreObjects: boolean): void {
    ClearArea(pos.x, pos.y, pos.z, radius, false, ignoreCopCars, ignoreObjects, false);
}

/**
 * `MISC::CLEAR_AREA_LEAVE_VEHICLE_HEALTH(x, y, z, radius, false, false, false, false); seem to make all objects go away, peds, vehicles etc. All booleans set to true doesn't seem to change anything.`
 * 
 * Hash: 0x957838AAF91BD12D | Since: 323 | API-Set: unknown
 */
export function clearAreaLeaveVehicleHealth(pos: Vector3, radius: number): void {
    ClearAreaLeaveVehicleHealth(pos.x, pos.y, pos.z, radius, false, false, false, false);
}

/**
 * flags appears to always be 0
 * 
 * Hash: 0x04F8FC8FCF58F88D | Since: 323 | API-Set: unknown
 */
export function clearAreaOfCops(pos: Vector3, radius: number, flags: number): void {
    ClearAreaOfCops(pos.x, pos.y, pos.z, radius, flags);
}

/**
 * I looked through the PC scripts that this site provides you with a link to find. It shows the last param mainly uses, (0, 2, 6, 16, and 17) so I am going to assume it is a type of flag.
 * 
 * Hash: 0xDD9B9B385AAC7F5B | Since: 323 | API-Set: unknown
 */
export function clearAreaOfObjects(pos: Vector3, radius: number, flags: number): void {
    ClearAreaOfObjects(pos.x, pos.y, pos.z, radius, flags);
}

/**
 * Example:       CLEAR_AREA_OF_PEDS(0, 0, 0, 10000, 1);
 * 
 * Hash: 0xBE31FD6CE464AC59 | Since: 323 | API-Set: unknown
 */
export function clearAreaOfPeds(pos: Vector3, radius: number, flags: number): void {
    ClearAreaOfPeds(pos.x, pos.y, pos.z, radius, flags);
}

/**
 * flags is usually 0 in the scripts.
 * 
 * Hash: 0x0A1CB9094635D1A6 | Since: 323 | API-Set: unknown
 */
export function clearAreaOfProjectiles(pos: Vector3, radius: number, flags: number): void {
    ClearAreaOfProjectiles(pos.x, pos.y, pos.z, radius, flags);
}

/**
 * Example:
 * CLEAR_AREA_OF_VEHICLES(0.0f, 0.0f, 0.0f, 10000.0f, false, false, false, false, false, false);
 * 
 * Hash: 0x01C7B9B38428AEB6 | Since: 323 | API-Set: unknown
 */
export function clearAreaOfVehicles(pos: Vector3, radius: number): void {
    ClearAreaOfVehicles(pos.x, pos.y, pos.z, radius, false, false, false, false, false, false, undefined);
}

/**
 * This sets bit [offset] of [address] to off.
 * 
 * Example:
 * `MISC::CLEAR_BIT(&bitAddress, 1);`
 * 
 * To check if this bit has been enabled:
 * `MISC::IS_BIT_SET(bitAddress, 1); // will return 0 afterwards`
 * 
 * Hash: 0xE80492A9AC099A93 | Since: 323 | API-Set: unknown
 */
export function clearBit(offset: number): number {
    return ClearBit(offset);
}

/**
 * No comment provided
 * 
 * Hash: 0x06462A961E94B67C | Since: 323 | API-Set: unknown
 */
export function clearCodeRequestedAutosave(): void {
    Citizen.invokeNative('0x06462A961E94B67C');
}

/**
 * No comment provided
 * 
 * Hash: 0x338D2E3477711050 | Since: 323 | API-Set: unknown
 */
export function clearOverrideWeather(): void {
    ClearOverrideWeather();
}

/**
 * No comment provided
 * 
 * Hash: 0x1B1AB132A16FDA55 | Since: 323 | API-Set: unknown
 */
export function clearReplayStats(): void {
    ClearReplayStats();
}

/**
 * No comment provided
 * 
 * Hash: 0xA2716D40842EAF79 | Since: 323 | API-Set: unknown
 */
export function clearRestartCoordOverride(): void {
    ClearRestartCustomPosition();
}

/**
 * Possibly used to clear scenario points.
 * 
 * Hash: 0x7EC6F9A478A6A512 | Since: 323 | API-Set: unknown
 */
export function clearScenarioSpawnHistory(): void {
    Citizen.invokeNative('0x7EC6F9A478A6A512');
}

/**
 * No comment provided
 * 
 * Hash: 0xB3CD58CCA6CDA852 | Since: 323 | API-Set: unknown
 */
export function clearTacticalNavMeshPoints(): void {
    ClearTacticalAnalysisPoints();
}

/**
 * No comment provided
 * 
 * Hash: 0x0CF97F497FE7D048 | Since: 1103 | API-Set: unknown
 */
export function clearWeatherTypeNowPersistNetwork(milliseconds: number): void {
    ClearWeatherTypeNowPersistNetwork(milliseconds);
}

/**
 * No comment provided
 * 
 * Hash: 0xCCC39339BEF76CF5 | Since: 323 | API-Set: unknown
 */
export function clearWeatherTypePersist(): void {
    ClearWeatherTypePersist();
}

/**
 * Compares two strings up to a specified number of characters.
 * 
 * Parameters:
 * str1 - String to be compared.
 * str2 - String to be compared.
 * matchCase - Comparison will be case-sensitive.
 * maxLength - Maximum number of characters to compare. A value of -1 indicates an infinite length.
 * 
 * Returns:
 * A value indicating the relationship between the strings:
 * <0 - The first non-matching character in 'str1' is less than the one in 'str2'. (e.g. 'A' < 'B', so result = -1)
 * 0 - The contents of both strings are equal.
 * >0 - The first non-matching character in 'str1' is less than the one in 'str2'. (e.g. 'B' > 'A', so result = 1)
 * 
 * Examples:
 * `MISC::COMPARE_STRINGS("STRING", "string", false, -1); // 0; equal`
 * `MISC::COMPARE_STRINGS("TESTING", "test", false, 4); // 0; equal`
 * `MISC::COMPARE_STRINGS("R2D2", "R2xx", false, 2); // 0; equal`
 * `MISC::COMPARE_STRINGS("foo", "bar", false, -1); // 4; 'f' > 'b'`
 * `MISC::COMPARE_STRINGS("A", "A", true, 1); // 0; equal`
 * 
 * When comparing case-sensitive strings, lower-case characters are greater than upper-case characters:
 * `MISC::COMPARE_STRINGS("A", "a", true, 1); // -1; 'A' < 'a'`
 * `MISC::COMPARE_STRINGS("a", "A", true, 1); // 1; 'a' > 'A'`
 * 
 * Hash: 0x1E34710ECD4AB0EB | Since: 323 | API-Set: unknown
 */
export function compareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number {
    return CompareStrings(str1, str2, matchCase, maxLength);
}

/**
 * No comment provided
 * 
 * Hash: 0x213AEB2B90CBA7AC | Since: 877 | API-Set: unknown
 */
export function copyScriptStruct(size: number): [any, any] {
    return CopyMemory(size);
}

/**
 * As for the 'police' incident, it will call police cars to you, but unlike PedsInCavalcades & Merryweather they won't start shooting at you unless you shoot first or shoot at them. The top 2 however seem to cancel theirselves if there is noone dead around you or a fire. I only figured them out as I found out the 3rd param is definately the amountOfPeople and they called incident 3 in scripts with 4 people (which the firetruck has) and incident 5 with 2 people (which the ambulence has). The 4 param I cant say is radius, but for the pedsInCavalcades and Merryweather R* uses 0.0f and for the top 3 (Emergency Services) they use 3.0f.
 * 
 * Side Note: It seems calling the pedsInCavalcades or Merryweather then removing it seems to break you from calling the EmergencyEvents and I also believe pedsInCavalcades. (The V cavalcades of course not IV).
 * 
 * Side Note 2: I say it breaks as if you call this proper,
 * if(CREATE_INCIDENT) etc it will return false if you do as I said above.
 * =====================================================
 * 
 * Hash: 0x3F892CAF67444AE7 | Since: 323 | API-Set: unknown
 */
export function createIncident(dispatchService: number, pos: Vector3, numUnits: number, radius: number): [boolean, number] {
    return CreateIncident(dispatchService, pos.x, pos.y, pos.z, numUnits, radius, undefined, undefined);
}

/**
 * As for the 'police' incident, it will call police cars to you, but unlike PedsInCavalcades & Merryweather they won't start shooting at you unless you shoot first or shoot at them. The top 2 however seem to cancel theirselves if there is noone dead around you or a fire. I only figured them out as I found out the 3rd param is definately the amountOfPeople and they called incident 3 in scripts with 4 people (which the firetruck has) and incident 5 with 2 people (which the ambulence has). The 4 param I cant say is radius, but for the pedsInCavalcades and Merryweather R* uses 0.0f and for the top 3 (Emergency Services) they use 3.0f.
 * 
 * Side Note: It seems calling the pedsInCavalcades or Merryweather then removing it seems to break you from calling the EmergencyEvents and I also believe pedsInCavalcades. (The V cavalcades of course not IV).
 * 
 * Side Note 2: I say it breaks as if you call this proper,
 * if(CREATE_INCIDENT) etc it will return false if you do as I said above.
 * =====================================================
 * 
 * Hash: 0x05983472F0494E60 | Since: 323 | API-Set: unknown
 */
export function createIncidentWithEntity(dispatchService: number, ped: number | IPed, numUnits: number, radius: number): [boolean, number] {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return CreateIncidentWithEntity(dispatchService, _ped, numUnits, radius, undefined, undefined);
}

/**
 * Delete an incident with a given id.
 * 
 * =======================================================
 * Correction, I have change this to int, instead of int*
 * as it doesn't use a pointer to the createdIncident.
 * If you try it you will crash (or) freeze.
 * =======================================================
 * 
 * Hash: 0x556C1AA270D5A207 | Since: 323 | API-Set: unknown
 */
export function deleteIncident(incidentId: number): void {
    DeleteIncident(incidentId);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC518000E39DAE1F | Since: 323 | API-Set: unknown
 */
export function deleteStuntJump(): void {
    DeleteStuntJump(0);
}

/**
 * The game by default has 5 hospital respawn points. Disabling them all will cause the player to respawn at the last position they were.
 * 
 * Hash: 0xC8535819C450EBA8 | Since: 323 | API-Set: unknown
 */
export function disableHospitalRestart(hospitalIndex: number, toggle: boolean): void {
    DisableHospitalRestart(hospitalIndex, toggle);
}

/**
 * Disables the spawn point at the police house on the specified index.
 * 
 * policeIndex: The police house index.
 * toggle: true to enable the spawn point, false to disable.
 * 
 * - Nacorpio
 * 
 * Hash: 0x23285DED6EBD7EA3 | Since: 323 | API-Set: unknown
 */
export function disablePoliceRestart(policeIndex: number, toggle: boolean): void {
    DisablePoliceRestart(policeIndex, toggle);
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0x23227DF0B2115469 | Since: 323 | API-Set: unknown
 */
export function disableScreenDimmingThisFrame(): void {
    Citizen.invokeNative('0x23227DF0B2115469');
}

/**
 * No comment provided
 * 
 * Hash: 0xA5272EBEDD4747F6 | Since: 323 | API-Set: unknown
 */
export function disableStuntJumpSet(): void {
    DisableStuntJumpSet(0);
}

/**
 * `sfink: note, p0 is set to 6 for PC platform in at least 1 script, or to `unk::_get_ui_language_id() == 0` otherwise.`
 * 
 * NOTE: windowTitle uses text labels, and an invalid value will display nothing.
 * 
 * www.gtaforums.com/topic/788343-vrel-script-hook-v/?p=1067380474
 * 
 * windowTitle's
 * -----------------
 * CELL_EMAIL_BOD  =   "Enter your Eyefind message"
 * CELL_EMAIL_BODE =   "Message too long. Try again"
 * CELL_EMAIL_BODF    =   "Forbidden message. Try again"
 * CELL_EMAIL_SOD    =   "Enter your Eyefind subject"
 * CELL_EMAIL_SODE =   "Subject too long. Try again"
 * CELL_EMAIL_SODF    =   "Forbidden text. Try again"
 * CELL_EMASH_BOD   =   "Enter your Eyefind message"
 * CELL_EMASH_BODE =   "Message too long. Try again"
 * CELL_EMASH_BODF    =   "Forbidden message. Try again"
 * CELL_EMASH_SOD    =   "Enter your Eyefind subject"
 * CELL_EMASH_SODE =   "Subject too long. Try again"
 * CELL_EMASH_SODF    =   "Forbidden Text. Try again"
 * FMMC_KEY_TIP10   =   "Enter Synopsis"
 * FMMC_KEY_TIP12  =   "Enter Custom Team Name"
 * FMMC_KEY_TIP12F =   "Forbidden Text. Try again"
 * FMMC_KEY_TIP12N  =   "Custom Team Name"
 * FMMC_KEY_TIP8 =   "Enter Message"
 * FMMC_KEY_TIP8F   =   "Forbidden Text. Try again"
 * FMMC_KEY_TIP8FS  =   "Invalid Message. Try again"
 * FMMC_KEY_TIP8S  =   "Enter Message"
 * FMMC_KEY_TIP9    =   "Enter Outfit Name"
 * FMMC_KEY_TIP9F   =   "Invalid Outfit Name. Try again"
 * FMMC_KEY_TIP9N  =   "Outfit Name"
 * PM_NAME_CHALL  =   "Enter Challenge Name"
 * 
 * Hash: 0x00DC833F2568DBF6 | Since: 323 | API-Set: unknown
 */
export function displayOnscreenKeyboard(windowTitle: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, maxInputLength: number): void {
    DisplayOnscreenKeyboard(0, windowTitle, undefined, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, maxInputLength);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA78CFA0366592FE | Since: 323 | API-Set: unknown
 */
export function displayOnscreenKeyboardWithLongerInitialString(windowTitle: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, defaultConcat4: string, defaultConcat5: string, defaultConcat6: string, defaultConcat7: string, maxInputLength: number): any {
    return DisplayOnscreenKeyboardWithLongerInitialString(0, windowTitle, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, defaultConcat4, defaultConcat5, defaultConcat6, defaultConcat7, maxInputLength);
}

/**
 * No comment provided
 * 
 * Hash: 0x1327E2FE9746BAEE | Since: 323 | API-Set: unknown
 */
export function doesPopMultiplierAreaExist(id: number): boolean {
    return DoesPopMultiplierAreaExist(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x171BAFB3C60389F4 | Since: 791 | API-Set: unknown
 */
export function doesPopMultiplierSphereExist(id: number): boolean {
    return DoesPopMultiplierSphereExist(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x50EEAAD86232EE55 | Since: 323 | API-Set: unknown
 */
export function doAutoSave(): void {
    DoAutoSave();
}

/**
 * https://alloc8or.re/gta5/doc/enums/DispatchType.txt
 * 
 * Hash: 0xDC0F817884CDD856 | Since: 323 | API-Set: unknown
 */
export function enableDispatchService(dispatchService: number, toggle: boolean): void {
    EnableDispatchService(dispatchService, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE369A5783B866016 | Since: 323 | API-Set: unknown
 */
export function enableStuntJumpSet(): void {
    EnableStuntJumpSet(0);
}

/**
 * Makes the ped jump around like they're in a tennis match
 * 
 * Hash: 0x28A04B411933F8A6 | Since: 323 | API-Set: unknown
 */
export function enableTennisMode(ped: number | IPed, toggle: boolean): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    EnableTennisMode(_ped, toggle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA23E821FBDF8A5F2 | Since: 323 | API-Set: unknown
 */
export function endReplayStats(): void {
    EndReplayStats();
}

/**
 * Finds a position ahead of the player by predicting the players next actions.
 * The positions match path finding node positions.
 * When roads diverge, the position may rapidly change between two or more positions. This is due to the engine not being certain of which path the player will take.
 * 
 * Hash: 0x6874E2190B0C1972 | Since: 323 | API-Set: unknown
 */
export function findSpawnPointInDirection(pos: Vector3, fwdVecX: number, fwdVecY: number, fwdVecZ: number, distance: number): [boolean, Vector3] {
    return FindSpawnPointInDirection(pos.x, pos.y, pos.z, fwdVecX, fwdVecY, fwdVecZ, distance);
}

/**
 * Sets the localplayer playerinfo state back to playing (State 0)
 * 
 * States are:
 * -1: "Invalid"
 * 0: "Playing"
 * 1: "Died"
 * 2: "Arrested"
 * 3: "Failed Mission"
 * 4: "Left Game"
 * 5: "Respawn"
 * 6: "In MP Cutscene"
 * 
 * Hash: 0xC0AA53F866B3134D | Since: 323 | API-Set: unknown
 */
export function forceGameStatePlaying(): void {
    ForceGameStatePlaying();
}

/**
 * creates single lightning+thunder at random position
 * 
 * Hash: 0xF6062E089251C898 | Since: 323 | API-Set: unknown
 */
export function forceLightningFlash(): void {
    ForceLightningFlash();
}

/**
 * No comment provided
 * 
 * Hash: 0x8B3CA62B1EF19B62 | Since: 323 | API-Set: unknown
 */
export function getAllocatedStackSize(): number {
    return GetAllocatedStackSize();
}

/**
 * No comment provided
 * 
 * Hash: 0x186FC4BE848E1C92 | Since: 323 | API-Set: unknown
 */
export function getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number {
    return GetAngleBetween2dVectors(x1, y1, x2, y2);
}

/**
 * No comment provided
 * 
 * Hash: 0xB335F761606DB47C | Since: 323 | API-Set: unknown
 */
export function getBaseElementLocationFromMetadataBlock(): [boolean, any, any] {
    return GetBaseElementMetadata(undefined, false);
}

/**
 * Returns value of the '-benchmarkIterations' command line option.
 * 
 * Hash: 0x4750FC27570311EC | Since: 323 | API-Set: unknown
 */
export function getBenchmarkIterations(): number {
    return GetBenchmarkIterationsFromCommandLine();
}

/**
 * Returns value of the '-benchmarkPass' command line option.
 * 
 * Hash: 0x1B2366C3F2A5C8DF | Since: 323 | API-Set: unknown
 */
export function getBenchmarkPass(): number {
    return GetBenchmarkPassFromCommandLine();
}

/**
 * No comment provided
 * 
 * Hash: 0x53158863FCC0893A | Since: 323 | API-Set: unknown
 */
export function getBitsInRange(_var: number, rangeStart: number, rangeEnd: number): number {
    return GetBitsInRange(_var, rangeStart, rangeEnd);
}

/**
 * No comment provided
 * 
 * Hash: 0xD10282B6E3751BA0 | Since: 323 | API-Set: unknown
 */
export function getCityDensity(): number {
    return Citizen.invokeNative('0xD10282B6E3751BA0');
}

/**
 * clamp: sets whether the product should be clamped between the given coordinates
 * 
 * Hash: 0x21C235BC64831E5A | Since: 323 | API-Set: unknown
 */
export function getClosestPointOnLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, clamp: boolean): Vector3 {
    return new Vector3(Citizen.invokeNative('0x21C235BC64831E5A', x1, y1, z1, x2, y2, z2, x3, y3, z3, clamp));
}

/**
 * No comment provided
 * 
 * Hash: 0x20AC25E781AE4A84 | Since: 323 | API-Set: unknown
 */
export function getCloudsAlpha(): number {
    return GetCloudHatOpacity();
}

/**
 * No comment provided
 * 
 * Hash: 0xECF041186C5A94DC | Since: 2612 | API-Set: unknown
 */
export function getContentIdIndex(contentId: number | string): number {
    if (typeof contentId === 'string') contentId = GetHashKey(contentId)
    return Citizen.invokeNative('0xECF041186C5A94DC', contentId);
}

/**
 * Returns pointer to an empty string.
 * 
 * Hash: 0x24DA7D7667FD7B09 | Since: 323 | API-Set: unknown
 */
export function getContentToLoad(): string {
    return GetGlobalCharBuffer();
}

/**
 * No comment provided
 * 
 * Hash: 0x3DA8C28346B62CED | Since: 2802 | API-Set: unknown
 */
export function getCoordsOfProjectileTypeInAngledArea(vecAngledAreaPoint1X: number, vecAngledAreaPoint1Y: number, vecAngledAreaPoint1Z: number, vecAngledAreaPoint2X: number, vecAngledAreaPoint2Y: number, vecAngledAreaPoint2Z: number, distanceOfOppositeFace: number, weaponType: number | string, bIsPlayer: boolean): [boolean, Vector3] {
    if (typeof weaponType === 'string') weaponType = GetHashKey(weaponType)
    return Citizen.invokeNative('0x3DA8C28346B62CED', vecAngledAreaPoint1X, vecAngledAreaPoint1Y, vecAngledAreaPoint1Z, vecAngledAreaPoint2X, vecAngledAreaPoint2Y, vecAngledAreaPoint2Z, distanceOfOppositeFace, weaponType, bIsPlayer);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D7A43EC6A5FEA45 | Since: 323 | API-Set: unknown
 */
export function getCoordsOfProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, projectileHash: number | string, ownedByPlayer: boolean): [boolean, Vector3] {
    if (typeof projectileHash === 'string') projectileHash = GetHashKey(projectileHash)
    return GetCoordsOfProjectileTypeInArea(x1, y1, z1, x2, y2, z2, projectileHash, ownedByPlayer);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFB4138EEFED7B81 | Since: 323 | API-Set: unknown
 */
export function getCoordsOfProjectileTypeWithinDistance(ped: number | IPed, weaponHash: number | string, distance: number): [boolean, Vector3] {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    return GetCoordsOfProjectileTypeWithinDistance(_ped, weaponHash, distance, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xF3BBE884A14BB413 | Since: 323 | API-Set: unknown
 */
export function getCurrWeatherState(): [number, number, number] {
    return GetWeatherTypeTransition();
}

/**
 * Returns the distance between two three-dimensional points, optionally ignoring the Z values.
 * If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.
 * 
 * `Consider using this faster native instead: SYSTEM::VDIST - DVIST always takes in consideration the 3D coordinates.`
 * 
 * Hash: 0xF1B760881820C952 | Since: 323 | API-Set: unknown
 */
export function getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number {
    return GetDistanceBetweenCoords(x1, y1, z1, x2, y2, z2, useZ);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C9296CBCD1B971E | Since: 323 | API-Set: unknown
 */
export function getFakeWantedLevel(): number {
    return GetFakeWantedLevel();
}

/**
 * No comment provided
 * 
 * Hash: 0xFC8202EFC642E6F2 | Since: 323 | API-Set: unknown
 */
export function getFrameCount(): number {
    return GetFrameCount();
}

/**
 * No comment provided
 * 
 * Hash: 0x15C40837039FFAF7 | Since: 323 | API-Set: unknown
 */
export function getFrameTime(): number {
    return GetFrameTime();
}

/**
 * No comment provided
 * 
 * Hash: 0x9CD27B0045628463 | Since: 323 | API-Set: unknown
 */
export function getGameTimer(): number {
    return GetGameTimer();
}

/**
 * No comment provided
 * 
 * Hash: 0x8BDC7BFC57A81E76 | Since: 323 | API-Set: unknown
 */
export function getGroundZAndNormalFor3dCoord(pos: Vector3): [boolean, number, Vector3] {
    return GetGroundZAndNormalFor3dCoord(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x9E82F0F362881B29 | Since: 505 | API-Set: unknown
 */
export function getGroundZExcludingObjectsFor3dCoord(pos: Vector3): [boolean, number] {
    return GetGroundZExcludingObjectsFor3dCoord(pos.x, pos.y, pos.z, false, false);
}

/**
 * Gets the ground elevation at the specified position. Note that if the specified position is below ground level, the function will output zero!
 * 
 * x: Position on the X-axis to get ground elevation at.
 * y: Position on the Y-axis to get ground elevation at.
 * z: Position on the Z-axis to get ground elevation at.
 * groundZ: The ground elevation at the specified position.
 * ignoreWater: Nearly always 0, very rarely 1 in the scripts: https://gfycat.com/NiftyTatteredCricket
 * 
 * Bear in mind this native can only calculate the elevation when the coordinates are within the client's render distance.
 * 
 * Hash: 0xC906A7DAB05C8D2B | Since: 323 | API-Set: unknown
 */
export function getGroundZFor3dCoord(pos: Vector3, ignoreWater: boolean): [boolean, number] {
    return GetGroundZFor_3dCoord(pos.x, pos.y, pos.z, ignoreWater, false);
}

/**
 * This native converts its past string to hash. It is hashed using jenkins one at a time method.
 * 
 * Hash: 0xD24D37CC275948CC | Since: 323 | API-Set: unknown
 */
export function getHashKey(_string: string): number {
    return GetHashKey(_string);
}

/**
 * dx = x1 - x2
 * dy = y1 - y2
 * 
 * Hash: 0x2FFB6B224F4B2926 | Since: 323 | API-Set: unknown
 */
export function getHeadingFromVector2d(dx: number, dy: number): number {
    return GetHeadingFromVector2d(dx, dy);
}

/**
 * No comment provided
 * 
 * Hash: 0xCBAD6729F7B1F4FC | Since: 323 | API-Set: unknown
 */
export function getIndexOfCurrentLevel(): number {
    return GetIndexOfCurrentLevel();
}

/**
 * Returns true if profile setting 208 is equal to 0.
 * 
 * Hash: 0x6E04F06094C87047 | Since: 323 | API-Set: unknown
 */
export function getIsAutoSaveOff(): boolean {
    return GetIsAutoSaveOff();
}

/**
 * Although we don't have a jenkins hash for this one, the name is 100% confirmed.
 * 
 * Hash: 0x9689123E3F213AA5 | Since: 323 | API-Set: unknown
 */
export function getIsPlayerInAnimalForm(): boolean {
    return GetIsPlayerInAnimalForm();
}

/**
 * No comment provided
 * 
 * Hash: 0xF56DFB7B61BE7276 | Since: 323 | API-Set: unknown
 */
export function getLinePlaneIntersection(): [boolean, number] {
    return GetLinePlaneIntersection(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA33CDCCDA663159E | Since: 323 | API-Set: unknown
 */
export function getMissionFlag(): boolean {
    return GetMissionFlag();
}

/**
 * Gets the dimensions of a model.
 * 
 * Calculate (maximum - minimum) to get the size, in which case, Y will be how long the model is.
 * 
 * `Example from the scripts: MISC::GET_MODEL_DIMENSIONS(ENTITY::GET_ENTITY_MODEL(PLAYER::PLAYER_PED_ID()), &v_1A, &v_17);`
 * 
 * Hash: 0x03E8D3D5F549087A | Since: 323 | API-Set: unknown
 */
export function getModelDimensions(modelHash: number | string): [Vector3, Vector3] {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return GetModelDimensions(modelHash);
}

/**
 * Returns weather name hash
 * 
 * Hash: 0x711327CD09C8F162 | Since: 323 | API-Set: unknown
 */
export function getNextWeatherTypeHashName(): number {
    return GetNextWeatherTypeHashName();
}

/**
 * No comment provided
 * 
 * Hash: 0xFEAD16FC8F9DFC0F | Since: 323 | API-Set: unknown
 */
export function getNumberOfFreeStacksOfThisSize(stackSize: number): number {
    return GetNumberOfFreeStacksOfThisSize(stackSize);
}

/**
 * No comment provided
 * 
 * Hash: 0xEB4A0C2D56441717 | Since: 323 | API-Set: unknown
 */
export function getNumberResourcesAllocatedToWantedLevel(dispatchService: number): number {
    return GetNumDispatchedUnitsForPlayer(dispatchService);
}

/**
 * No comment provided
 * 
 * Hash: 0x996DD1E1E02F1008 | Since: 323 | API-Set: unknown
 */
export function getNumSuccessfulStuntJumps(): number {
    return GetNumSuccessfulStuntJumps();
}

/**
 * Returns NULL unless UPDATE_ONSCREEN_KEYBOARD() returns 1 in the same tick.
 * 
 * Hash: 0x8362B09B91893647 | Since: 323 | API-Set: unknown
 */
export function getOnscreenKeyboardResult(): string {
    return GetOnscreenKeyboardResult();
}

/**
 * No comment provided
 * 
 * Hash: 0xA0AD167E4B39D9A2 | Since: 2189 | API-Set: unknown
 */
export function getPointAreaOverlap(): boolean {
    return Citizen.invokeNative('0xA0AD167E4B39D9A2', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * Returns current weather name hash
 * 
 * Hash: 0x564B884A05EC45A3 | Since: 323 | API-Set: unknown
 */
export function getPrevWeatherTypeHashName(): number {
    return GetPrevWeatherTypeHashName();
}

/**
 * No comment provided
 * 
 * Hash: 0xC488FF2356EA7791 | Since: 323 | API-Set: unknown
 */
export function getProfileSetting(profileSetting: number): number {
    return GetProfileSetting(profileSetting);
}

/**
 * No comment provided
 * 
 * Hash: 0x82FDE6A57EE4EE44 | Since: 323 | API-Set: unknown
 */
export function getProjectileOfProjectileTypeWithinDistance(ped: number | IPed, weaponHash: number | string, distance: number): [boolean, Vector3, number] {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    return GetProjectileNearPed(_ped, weaponHash, distance, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x96695E368AD855F3 | Since: 323 | API-Set: unknown
 */
export function getRainLevel(): number {
    return GetRainLevel();
}

/**
 * No comment provided
 * 
 * Hash: 0xD2D57F1D764117B1 | Since: 323 | API-Set: unknown
 */
export function getRandomEventFlag(): boolean {
    return GetRandomEventFlag();
}

/**
 * No comment provided
 * 
 * Hash: 0x313CE5879CEB6FCD | Since: 323 | API-Set: unknown
 */
export function getRandomFloatInRange(startRange: number, endRange: number): number {
    return GetRandomFloatInRange(startRange, endRange);
}

/**
 * No comment provided
 * 
 * Hash: 0xD53343AA4FB7DD28 | Since: 323 | API-Set: unknown
 */
export function getRandomIntInRange(startRange: number, endRange: number): number {
    return GetRandomIntInRange(startRange, endRange);
}

/**
 * No comment provided
 * 
 * Hash: 0xF2D49816A804D134 | Since: 1734 | API-Set: unknown
 */
export function getRandomMwcIntInRange(startRange: number, endRange: number): number {
    return GetRandomIntInRange2(startRange, endRange);
}

/**
 * returns a float between 0.0 and 1.0, clamp: sets whether the product should be clamped between the given coordinates
 * 
 * Hash: 0x7F8F6405F4777AF6 | Since: 323 | API-Set: unknown
 */
export function getRatioOfClosestPointOnLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, clamp: boolean): number {
    return Citizen.invokeNative('0x7F8F6405F4777AF6', x1, y1, z1, x2, y2, z2, x3, y3, z3, clamp);
}

/**
 * GET_GAME_TIMER() / 1000
 * 
 * Hash: 0x3F60413F5DF65748 | Since: 2612 | API-Set: unknown
 */
export function getRealWorldTime(): number {
    return Citizen.invokeNative('0x3F60413F5DF65748');
}

/**
 * No comment provided
 * 
 * Hash: 0x8098C8D6597AAE18 | Since: 323 | API-Set: unknown
 */
export function getReplayStatAtIndex(index: number): number {
    return GetReplayStatAtIndex(index);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC9274A7EF6B2867 | Since: 323 | API-Set: unknown
 */
export function getReplayStatCount(): number {
    return GetReplayStatCount();
}

/**
 * No comment provided
 * 
 * Hash: 0x5B1F2E327B6B6FE1 | Since: 323 | API-Set: unknown
 */
export function getReplayStatMissionId(): number {
    return Citizen.invokeNative('0x5B1F2E327B6B6FE1');
}

/**
 * No comment provided
 * 
 * Hash: 0x2B626A0150E4D449 | Since: 323 | API-Set: unknown
 */
export function getReplayStatMissionType(): number {
    return GetReplayStatMissionType();
}

/**
 * No comment provided
 * 
 * Hash: 0xA4A0065E39C9F25C | Since: 323 | API-Set: unknown
 */
export function getSaveHouseDetailsAfterSuccessfulLoad(): [boolean, Vector3, number, boolean, boolean] {
    return Citizen.invokeNative('0xA4A0065E39C9F25C');
}

/**
 * No comment provided
 * 
 * Hash: 0xA09F896CE912481F | Since: 323 | API-Set: unknown
 */
export function getSizeOfSaveData(): number {
    return GetSizeOfSaveData(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC5868A966E5BE3AE | Since: 323 | API-Set: unknown
 */
export function getSnowLevel(): number {
    return GetSnowLevel();
}

/**
 * No comment provided
 * 
 * Hash: 0x397BAA01068BAA96 | Since: 323 | API-Set: unknown
 */
export function getStatusOfManualSave(): number {
    return Citizen.invokeNative('0x397BAA01068BAA96');
}

/**
 * No comment provided
 * 
 * Hash: 0x2B5E102E4A42F2BF | Since: 323 | API-Set: unknown
 */
export function getStatusOfMissionRepeatSave(): number {
    return GetStatusOfMissionRepeatSave();
}

/**
 * No comment provided
 * 
 * Hash: 0xE599A503B3837E1B | Since: 323 | API-Set: unknown
 */
export function getSystemTimeStep(): number {
    return GetBenchmarkTime();
}

/**
 * No comment provided
 * 
 * Hash: 0x19BFED045C647C49 | Since: 323 | API-Set: unknown
 */
export function getTennisSwingAnimCanBeInterrupted(ped: number | IPed): boolean {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return Citizen.invokeNative('0x19BFED045C647C49', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x17DF68D720AA77F8 | Since: 323 | API-Set: unknown
 */
export function getTennisSwingAnimComplete(ped: number | IPed): boolean {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return GetTennisSwingAnimComplete(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xE95B0C7D5BA3B96B | Since: 323 | API-Set: unknown
 */
export function getTennisSwingAnimSwung(ped: number | IPed): boolean {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return Citizen.invokeNative('0xE95B0C7D5BA3B96B', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x6856EC3D35C81EA4 | Since: 323 | API-Set: unknown
 */
export function getTotalSuccessfulStuntJumps(): number {
    return GetTotalSuccessfulStuntJumps();
}

/**
 * No comment provided
 * 
 * Hash: 0x1F400FEF721170DA | Since: 323 | API-Set: unknown
 */
export function getWindDirection(): Vector3 {
    return new Vector3(GetWindDirection());
}

/**
 * No comment provided
 * 
 * Hash: 0xA8CF1CC0AFCD3F12 | Since: 323 | API-Set: unknown
 */
export function getWindSpeed(): number {
    return GetWindSpeed();
}

/**
 * Hardcoded to always return true.
 * 
 * Hash: 0x14832BF2ABA53FC5 | Since: 323 | API-Set: unknown
 */
export function hasAsyncInstallFinished(): boolean {
    return HasAsyncInstallFinished();
}

/**
 * p3 - possibly radius?
 * 
 * Hash: 0x9870ACFB89A90995 | Since: 323 | API-Set: unknown
 */
export function hasBulletImpactedInArea(pos: Vector3): boolean {
    return HasBulletImpactedInArea(pos.x, pos.y, pos.z, 0, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC8C5D7CFEAB8394 | Since: 323 | API-Set: unknown
 */
export function hasBulletImpactedInBox(): boolean {
    return HasBulletImpactedInBox(0, 0, 0, 0, 0, 0, false, false);
}

/**
 * This native appears on the cheat_controller script and tracks a combination of buttons, which may be used to toggle cheats in-game. Credits to ThreeSocks for the info. The hash contains the combination, while the "amount" represents the amount of buttons used in a combination. The following page can be used to make a button combination: gta5offset.com/ts/hash/
 * 
 * INT_SCORES_SCORTED was a hash collision
 * 
 * Hash: 0x071E2A839DE82D90 | Since: 323 | API-Set: unknown
 */
export function hasCheatWithHashBeenActivated(hash: number | string, amount: number): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return HasButtonCombinationJustBeenEntered(hash, amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x2107A3773771186D | Since: 323 | API-Set: unknown
 */
export function hasCodeRequestedAutosave(): boolean {
    return Citizen.invokeNative('0x2107A3773771186D');
}

/**
 * No comment provided
 * 
 * Hash: 0x6FDDF453C0C756EC | Since: 323 | API-Set: unknown
 */
export function hasGameInstalledThisSession(): boolean {
    return Citizen.invokeNative('0x6FDDF453C0C756EC');
}

/**
 * Get inputted "Cheat code", for example:
 * 
 * while (TRUE)
 * {
 * `if (MISC::HAS_PC_CHEAT_WITH_HASH_BEEN_ACTIVATED(${fugitive}))`
 * {
 * // Do something.
 * }
 * `SYSTEM::WAIT(0);`
 * }
 * 
 * Calling this will also set the last saved string hash to zero.
 * 
 * 
 * Hash: 0x557E43C447E700A8 | Since: 323 | API-Set: unknown
 */
export function hasPcCheatWithHashBeenActivated(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return HasCheatStringJustBeenEntered(hash);
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0xE8B9C0EC9E183F35 | Since: 323 | API-Set: unknown
 */
export function hasResumedFromSuspend(): boolean {
    return HasResumedFromSuspend();
}

/**
 * No comment provided
 * 
 * Hash: 0x075F1D57402C93BA | Since: 323 | API-Set: unknown
 */
export function haveCreditsReachedEnd(): boolean {
    return HaveCreditsReachedEnd();
}

/**
 * No comment provided
 * 
 * Hash: 0xD642319C54AADEB6 | Since: 323 | API-Set: unknown
 */
export function haveReplayStatsBeenStored(): boolean {
    return Citizen.invokeNative('0xD642319C54AADEB6');
}

/**
 * No comment provided
 * 
 * Hash: 0x21FFB63D8C615361 | Since: 323 | API-Set: unknown
 */
export function ignoreNextRestart(toggle: boolean): void {
    IgnoreNextRestart(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D74E26F54B4E5C3 | Since: 323 | API-Set: unknown
 */
export function informCodeOfContentIdOfCurrentUgcMission(): void {
    Citizen.invokeNative('0x8D74E26F54B4E5C3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA61B4DF533DCB56E | Since: 323 | API-Set: unknown
 */
export function isAreaOccupied(): boolean {
    return IsAreaOccupied(0, 0, 0, 0, 0, 0, false, false, false, false, false, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x39455BF4F4F55186 | Since: 1868 | API-Set: unknown
 */
export function isAreaOccupiedSlow(): boolean {
    return Citizen.invokeNative('0x39455BF4F4F55186', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * Used to block some of the prostitute stuff due to laws in Australia.
 * 
 * Hash: 0x9F1935CA1F724008 | Since: 323 | API-Set: unknown
 */
export function isAussieVersion(): boolean {
    return IsAussieVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0x69240733738C19A0 | Since: 323 | API-Set: unknown
 */
export function isAutoSaveInProgress(): boolean {
    return IsAutoSaveInProgress();
}

/**
 * For projectiles, see: IS_PROJECTILE_TYPE_IN_ANGLED_AREA
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * Returns True if a bullet, as maintained by a pool within CWeaponManager, has been fired into the defined angled area.
 * 
 * Hash: 0x1A8B5F3C01E2B477 | Since: 323 | API-Set: unknown
 */
export function isBulletInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, ownedByPlayer: boolean): boolean {
    return IsBulletInAngledArea(x1, y1, z1, x2, y2, z2, width, ownedByPlayer);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F2023999AD51C1F | Since: 323 | API-Set: unknown
 */
export function isBulletInArea(pos: Vector3, radius: number, ownedByPlayer: boolean): boolean {
    return IsBulletInArea(pos.x, pos.y, pos.z, radius, ownedByPlayer);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE0F6D7450D37351 | Since: 323 | API-Set: unknown
 */
export function isBulletInBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean {
    return IsBulletInBox(x1, y1, z1, x2, y2, z2, ownedByPlayer);
}

/**
 * Returns true if command line option '-benchmark' is set.
 * 
 * Hash: 0xA049A5BE0F04F2F8 | Since: 323 | API-Set: unknown
 */
export function isCommandlineEndUserBenchmark(): boolean {
    return IsCommandLineBenchmarkValueSet();
}

/**
 * XBOX ONE
 * 
 * Hash: 0x4D982ADB1978442D | Since: 323 | API-Set: unknown
 */
export function isDurangoVersion(): boolean {
    return IsDurangoVersion();
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0x7EA2B6AF97ECA6ED | Since: 323 | API-Set: unknown
 */
export function isFrontendFading(): boolean {
    return IsFrontendFading();
}

/**
 * =======================================================
 * Correction, I have change this to int, instead of int*
 * as it doesn't use a pointer to the createdIncident.
 * If you try it you will crash (or) freeze.
 * =======================================================
 * 
 * Hash: 0xC8BC6461E629BEAA | Since: 323 | API-Set: unknown
 */
export function isIncidentValid(incidentId: number): boolean {
    return IsIncidentValid(incidentId);
}

/**
 * No comment provided
 * 
 * Hash: 0xB8C0BB75D8A77DB3 | Since: 2545 | API-Set: unknown
 */
export function isJapaneseVersion(): boolean {
    return IsJapaneseVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0x8A75CE2956274ADD | Since: 323 | API-Set: unknown
 */
export function isMemoryCardInUse(): boolean {
    return IsMemoryCardInUse();
}

/**
 * No comment provided
 * 
 * Hash: 0x2B4A15E44DE0F478 | Since: 323 | API-Set: unknown
 */
export function isMinigameInProgress(): boolean {
    return IsMinigameInProgress();
}

/**
 * No comment provided
 * 
 * Hash: 0x2FAA3A30BEC0F25D | Since: 323 | API-Set: unknown
 */
export function isNextWeatherType(weatherType: string): boolean {
    return IsNextWeatherType(weatherType);
}

/**
 * PS4
 * 
 * Hash: 0xA72BC0B675B1519E | Since: 323 | API-Set: unknown
 */
export function isOrbisVersion(): boolean {
    return IsOrbisVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0x48AF36444B965238 | Since: 323 | API-Set: unknown
 */
export function isPcVersion(): boolean {
    return IsPcVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0xE54E209C35FFA18D | Since: 323 | API-Set: unknown
 */
export function isPointObscuredByAMissionEntity(): boolean {
    return IsPointObscuredByAMissionEntity(0, 0, 0, 0, 0, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1312F4B242609CE3 | Since: 1290 | API-Set: unknown
 */
export function isPopMultiplierAreaNetworked(id: number): boolean {
    return IsPopMultiplierAreaUnk(id);
}

/**
 * `range`: The range, seems to not be very accurate during testing.
 * `p4`: Unknown, when set to true it seems to always return true no matter what I try.
 * `checkVehicle`: Check for any vehicles in that area.
 * `checkPeds`: Check for any peds in that area.
 * `ignoreEntity`: This entity will be ignored if it's in the area. Set to 0 if you don't want to exclude any entities.
 * The BOOL parameters that are documented have not been confirmed. They are just documented from what I've found during testing. They may not work as expected in all cases.
 * 
 * Returns true if there is anything in that location matching the provided parameters.
 * 
 * Hash: 0xADCDE75E1C60F32D | Since: 323 | API-Set: unknown
 */
export function isPositionOccupied(pos: Vector3, range: number, checkVehicles: boolean, checkPeds: boolean, ignoreEntity: number | IEntity): boolean {
    const _ignoreEntity = typeof ignoreEntity == 'object' ? ignoreEntity.handle() : ignoreEntity;
    return IsPositionOccupied(pos.x, pos.y, pos.z, range, false, checkVehicles, checkPeds, false, false, _ignoreEntity, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x44F28F86433B10A9 | Since: 323 | API-Set: unknown
 */
export function isPrevWeatherType(weatherType: string): boolean {
    return IsPrevWeatherType(weatherType);
}

/**
 * Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.
 * 
 * - Nacorpio
 * 
 * 
 * ownedByPlayer = only projectiles fired by the player will be detected.
 * 
 * Hash: 0x5270A8FBC098C3F8 | Since: 323 | API-Set: unknown
 */
export function isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean {
    return IsProjectileInArea(x1, y1, z1, x2, y2, z2, ownedByPlayer);
}

/**
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * 
 * Hash: 0xF0BC12401061DEA0 | Since: 323 | API-Set: unknown
 */
export function isProjectileTypeInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, ownedByPlayer: boolean): boolean {
    return IsProjectileTypeInAngledArea(x1, y1, z1, x2, y2, z2, width, undefined, ownedByPlayer);
}

/**
 * Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a axis-aligned bounding box.
 * 
 * Hash: 0x2E0DC353342C4A6D | Since: 323 | API-Set: unknown
 */
export function isProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, _type: number, ownedByPlayer: boolean): boolean {
    return IsProjectileTypeInArea(x1, y1, z1, x2, y2, z2, _type, ownedByPlayer);
}

/**
 * No comment provided
 * 
 * Hash: 0x34318593248C8FB2 | Since: 323 | API-Set: unknown
 */
export function isProjectileTypeWithinDistance(pos: Vector3, projectileHash: number | string, radius: number, ownedByPlayer: boolean): boolean {
    if (typeof projectileHash === 'string') projectileHash = GetHashKey(projectileHash)
    return IsProjectileTypeWithinDistance(pos.x, pos.y, pos.z, projectileHash, radius, ownedByPlayer);
}

/**
 * PS5 (Prospero) version...
 * 
 * Hash: 0x807ABE1AB65C24D2 | Since: 2612 | API-Set: unknown
 */
export function isProsperoVersion(): boolean {
    return Citizen.invokeNative('0x807ABE1AB65C24D2');
}

/**
 * No comment provided
 * 
 * Hash: 0xCCA1072C29D096C2 | Since: 323 | API-Set: unknown
 */
export function isPs3Version(): boolean {
    return IsPs3Version();
}

/**
 * Xbox Series (Scarlett) version...
 * 
 * Hash: 0xC545AB1CF97ABB34 | Since: 2612 | API-Set: unknown
 */
export function isScarlettVersion(): boolean {
    return Citizen.invokeNative('0xC545AB1CF97ABB34');
}

/**
 * No comment provided
 * 
 * Hash: 0xF911E695C1EB8518 | Since: 2612 | API-Set: unknown
 */
export function isScePlatform(): boolean {
    return Citizen.invokeNative('0xF911E695C1EB8518');
}

/**
 * Determines whether there is a sniper bullet within the specified coordinates. The coordinates form an axis-aligned bounding box.
 * 
 * Hash: 0xFEFCF11B01287125 | Since: 323 | API-Set: unknown
 */
export function isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean {
    return IsSniperBulletInArea(x1, y1, z1, x2, y2, z2);
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0x61A23B7EDA9BDA24 | Since: 323 | API-Set: unknown
 */
export function isSniperInverted(): boolean {
    return IsSniperInverted();
}

/**
 * No comment provided
 * 
 * Hash: 0x0A27B2B6282F7169 | Since: 2545 | API-Set: unknown
 */
export function isSteamVersion(): boolean {
    return IsSteamVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0xF22B6C47C6EAB066 | Since: 323 | API-Set: unknown
 */
export function isStringNull(_string: string): boolean {
    return IsStringNull(_string);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA042B6957743895 | Since: 323 | API-Set: unknown
 */
export function isStringNullOrEmpty(_string: string): boolean {
    return IsStringNullOrEmpty(_string);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A3F19700A4D0525 | Since: 323 | API-Set: unknown
 */
export function isStuntJumpInProgress(): boolean {
    return IsStuntJumpInProgress();
}

/**
 * No comment provided
 * 
 * Hash: 0x2272B0A1343129F4 | Since: 323 | API-Set: unknown
 */
export function isStuntJumpMessageShowing(): boolean {
    return IsStuntJumpMessageShowing();
}

/**
 * No comment provided
 * 
 * Hash: 0x5D5479D115290C3F | Since: 323 | API-Set: unknown
 */
export function isTennisMode(ped: number | IPed): boolean {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return IsTennisMode(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x7B30F65D7B710098 | Since: 323 | API-Set: unknown
 */
export function isThisAMinigameScript(): boolean {
    return IsThisAMinigameScript();
}

/**
 * No comment provided
 * 
 * Hash: 0xF6201B4DAF662A9D | Since: 323 | API-Set: unknown
 */
export function isXbox360Version(): boolean {
    return IsXbox360Version();
}

/**
 * No comment provided
 * 
 * Hash: 0x138679CA01E21F53 | Since: 2612 | API-Set: unknown
 */
export function isXboxPlatform(): boolean {
    return Citizen.invokeNative('0x138679CA01E21F53');
}

/**
 * Returns true if the current frontend menu is FE_MENU_VERSION_LANDING_MENU
 * 
 * Hash: 0x3BBBD13E5041A79E | Since: 323 | API-Set: unknown
 */
export function landingScreenStartedEndUserBenchmark(): boolean {
    return LandingMenuIsActive();
}

/**
 * The following cloudhats are useable:
 * altostratus
 * Cirrus
 * cirrocumulus
 * Clear 01
 * Cloudy 01
 * Contrails
 * Horizon
 * horizonband1
 * horizonband2
 * horizonband3
 * horsey
 * Nimbus
 * Puffs
 * RAIN
 * Snowy 01
 * Stormy 01
 * stratoscumulus
 * Stripey
 * shower
 * Wispy
 * 
 * 
 * Hash: 0xFC4842A34657BFCB | Since: 323 | API-Set: unknown
 */
export function loadCloudHat(name: string, transitionTime: number): void {
    LoadCloudHat(name, transitionTime);
}

/**
 * No comment provided
 * 
 * Hash: 0x9243BAC96D64C050 | Since: 323 | API-Set: unknown
 */
export function networkSetScriptIsSafeForNetworkGame(): void {
    NetworkSetScriptIsSafeForNetworkGame();
}

/**
 * p0 was always 2 in R* scripts.
 * Called before calling DISPLAY_ONSCREEN_KEYBOARD if the input needs to be saved.
 * 
 * Hash: 0x3ED1438C1F5C6612 | Since: 323 | API-Set: unknown
 */
export function nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(): void {
    NextOnscreenKeyboardResultWillDisplayUsingTheseFonts(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA3FFB0EEBC288A3 | Since: 2060 | API-Set: unknown
 */
export function overrideFreezeFlags(): void {
    Citizen.invokeNative('0xFA3FFB0EEBC288A3', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x1162EA8AE9D24EEA | Since: 323 | API-Set: unknown
 */
export function overrideSaveHouse(): boolean {
    return OverrideSaveHouse(false, 0, 0, 0, 0, false, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C2B3493FBF51C71 | Since: 323 | API-Set: unknown
 */
export function pauseDeathArrestRestart(toggle: boolean): void {
    PauseDeathArrestRestart(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8FA9C42FC5D7C64B | Since: 323 | API-Set: unknown
 */
export function playTennisDiveAnim(ped: number | IPed): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    PlayTennisDiveAnim(_ped, 0, 0, 0, 0, false);
}

/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0xE266ED23311F24D4 | Since: 323 | API-Set: unknown
 */
export function playTennisSwingAnim(ped: number | IPed, animDict: string, animName: string): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    PlayTennisSwingAnim(_ped, animDict, animName, 0, 0, false);
}

/**
 * Returns duration of how long the game has been in power-saving mode (aka "constrained") in milliseconds.
 * 
 * Hash: 0xABB2FA71C83A1B72 | Since: 323 | API-Set: unknown
 */
export function plmGetConstrainedDurationMs(): number {
    return GetPowerSavingModeDuration();
}

/**
 * aka "constrained"
 * 
 * Hash: 0x684A41975F077262 | Since: 323 | API-Set: unknown
 */
export function plmIsInConstrainedMode(): boolean {
    return IsInPowerSavingMode();
}

/**
 * spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called
 * 
 * Hash: 0x7472BB270D7B4F3E | Since: 323 | API-Set: unknown
 */
export function populateNow(): void {
    PopulateNow();
}

/**
 * No comment provided
 * 
 * Hash: 0x11B56FBBF7224868 | Since: 323 | API-Set: unknown
 */
export function preloadCloudHat(name: string): void {
    PreloadCloudHat(name);
}

/**
 * No comment provided
 * 
 * Hash: 0xE3D969D2785FFB5E | Since: 323 | API-Set: unknown
 */
export function preventArrestStateThisFrame(): void {
    Citizen.invokeNative('0xE3D969D2785FFB5E');
}

/**
 * No comment provided
 * 
 * Hash: 0x72DE52178C291CB5 | Since: 323 | API-Set: unknown
 */
export function queueMissionRepeatLoad(): boolean {
    return QueueMissionRepeatLoad();
}

/**
 * Shows the screen which is visible before you redo a mission? The game will make a restoration point where you will cameback when the mission is over.
 * Returns 1 if the message isn't currently on screen
 * 
 * Hash: 0x44A0BDC559B35F6E | Since: 323 | API-Set: unknown
 */
export function queueMissionRepeatSave(): boolean {
    return QueueMissionRepeatSave();
}

/**
 * No comment provided
 * 
 * Hash: 0xEB2104E905C6F2E9 | Since: 323 | API-Set: unknown
 */
export function queueMissionRepeatSaveForBenchmarkTest(): boolean {
    return Citizen.invokeNative('0xEB2104E905C6F2E9');
}

/**
 * Exits the game and downloads a fresh social club update on next restart.
 * 
 * Hash: 0xEB6891F03362FB12 | Since: 323 | API-Set: unknown
 */
export function quitGame(): void {
    QuitGame();
}

/**
 * No comment provided
 * 
 * Hash: 0xC8F4131414C835A1 | Since: 323 | API-Set: unknown
 */
export function registerBoolToSave(name: string): any {
    return RegisterBoolToSave(name);
}

/**
 * No comment provided
 * 
 * Hash: 0x10C2FA78D0E128A1 | Since: 323 | API-Set: unknown
 */
export function registerEnumToSave(name: string): any {
    return RegisterEnumToSave(name);
}

/**
 * No comment provided
 * 
 * Hash: 0x7CAEC29ECB5DFEBB | Since: 323 | API-Set: unknown
 */
export function registerFloatToSave(name: string): any {
    return RegisterFloatToSave(name);
}

/**
 * No comment provided
 * 
 * Hash: 0xA735353C77334EA0 | Since: 323 | API-Set: unknown
 */
export function registerInt64ToSave(name: string): any {
    return RegisterInt64ToSave(name);
}

/**
 * No comment provided
 * 
 * Hash: 0x34C9EE5986258415 | Since: 323 | API-Set: unknown
 */
export function registerIntToSave(name: string): any {
    return RegisterIntToSave(name);
}

/**
 * returns savehouseHandle
 * 
 * Hash: 0xC0714D0A7EEECA54 | Since: 323 | API-Set: unknown
 */
export function registerSaveHouse(pos: Vector3): number {
    return RegisterSaveHouse(pos.x, pos.y, pos.z, 0, undefined, undefined, undefined);
}

/**
 * `MISC::REGISTER_TEXT_LABEL_15_TO_SAVE(&a_0._f1, "tlPlateText");`
 * `MISC::REGISTER_TEXT_LABEL_15_TO_SAVE(&a_0._f1C, "tlPlateText_pending");`
 * `MISC::REGISTER_TEXT_LABEL_15_TO_SAVE(&a_0._f10B, "tlCarAppPlateText");`
 * 
 * Hash: 0x6F7794F28C6B2535 | Since: 323 | API-Set: unknown
 */
export function registerTextLabel15ToSave(name: string): any {
    return RegisterTextLabelToSave2(name);
}

/**
 * Only found 3 times in decompiled scripts.
 * 
 * `MISC::REGISTER_TEXT_LABEL_23_TO_SAVE(a_0, "Movie_Name_For_This_Player");`
 * `MISC::REGISTER_TEXT_LABEL_23_TO_SAVE(&a_0._fB, "Ringtone_For_This_Player");`
 * `MISC::REGISTER_TEXT_LABEL_23_TO_SAVE(&a_0._f1EC4._f12[v_A\/\*6\*\/], &v_13); // where v_13 is "MPATMLOGSCRS0" thru "MPATMLOGSCRS15"`
 * 
 * Hash: 0x48F069265A0E4BEC | Since: 323 | API-Set: unknown
 */
export function registerTextLabel23ToSave(name: string): any {
    return Citizen.invokeNative('0x48F069265A0E4BEC', name);
}

/**
 * Only found 2 times in decompiled scripts.
 * 
 * `MISC::REGISTER_TEXT_LABEL_31_TO_SAVE(&a_0._f1F5A._f6[0\/\*8\*\/], "TEMPSTAT_LABEL"); // gets saved in a struct called "g_SaveData_STRING_ScriptSaves"`
 * `MISC::REGISTER_TEXT_LABEL_31_TO_SAVE(&a_0._f4B4[v_1A\/\*8\*\/], &v_5); // where v_5 is "Name0" thru "Name9", gets saved in a struct called "OUTFIT_Name"`
 * 
 * Hash: 0x8269816F6CFD40F8 | Since: 323 | API-Set: unknown
 */
export function registerTextLabel31ToSave(name: string): any {
    return Citizen.invokeNative('0x8269816F6CFD40F8', name);
}

/**
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(a_0, "Thumb_label");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f10, "Photo_label");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(a_0, "GXTlabel");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f21, "StringComp");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f43, "SecondStringComp");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f53, "ThirdStringComp");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f32, "SenderStringComp");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f726[v_1A\/\*16\*\/], &v_20); // where v_20 is "LastJobTL_0_1" thru "LastJobTL_2_1", gets saved in a struct called "LAST_JobGamer_TL"`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f4B, "PAID_PLAYER");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f5B, "RADIO_STATION");`
 * 
 * Hash: 0xFAA457EF263E8763 | Since: 323 | API-Set: unknown
 */
export function registerTextLabel63ToSave(name: string): any {
    return Citizen.invokeNative('0xFAA457EF263E8763', name);
}

/**
 * No comment provided
 * 
 * Hash: 0xEDB1232C5BEAE62F | Since: 323 | API-Set: unknown
 */
export function registerTextLabelToSave(name: string): any {
    return RegisterTextLabelToSave(name);
}

/**
 * No comment provided
 * 
 * Hash: 0x264AC28B01B353A5 | Since: 323 | API-Set: unknown
 */
export function removeDispatchSpawnBlockingArea(): void {
    RemoveDispatchSpawnBlockingArea(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB129E447A2EDA4BF | Since: 323 | API-Set: unknown
 */
export function removePopMultiplierArea(id: number): void {
    RemovePopMultiplierArea(id, false);
}

/**
 * Removes population multiplier sphere
 * 
 * Hash: 0xE6869BECDD8F2403 | Since: 323 | API-Set: unknown
 */
export function removePopMultiplierSphere(id: number): void {
    RemovePopMultiplierSphere(id, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x77A84429DD9F0A15 | Since: 323 | API-Set: unknown
 */
export function resetDispatchIdealSpawnDistance(): void {
    ResetDispatchIdealSpawnDistance();
}

/**
 * No comment provided
 * 
 * Hash: 0xAC7BFD5C1D83EA75 | Since: 323 | API-Set: unknown
 */
export function resetDispatchSpawnBlockingAreas(): void {
    ResetDispatchSpawnBlockingAreas();
}

/**
 * No comment provided
 * 
 * Hash: 0x5896F2BD5683A4E1 | Since: 1868 | API-Set: unknown
 */
export function resetDispatchSpawnLocation(): void {
    ResetDispatchSpawnLocation();
}

/**
 * No comment provided
 * 
 * Hash: 0xEB2DB0CAD13154B3 | Since: 323 | API-Set: unknown
 */
export function resetDispatchTimeBetweenSpawnAttempts(): void {
    ResetDispatchTimeBetweenSpawnAttempts(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x437138B6A830166A | Since: 323 | API-Set: unknown
 */
export function resetEndUserBenchmark(): void {
    ResetBenchmarkRecording();
}

/**
 * No comment provided
 * 
 * Hash: 0xD9F692D349249528 | Since: 323 | API-Set: unknown
 */
export function resetWantedResponseNumPedsToSpawn(): void {
    Citizen.invokeNative('0xD9F692D349249528');
}

/**
 * In singleplayer it does exactly what the name implies. In FiveM / GTA:Online it shows `Disconnecting from GTA Online` HUD and then quits the game.
 * 
 * Hash: 0xE574A662ACAEFBB1 | Since: 372 | API-Set: unknown
 */
export function restartGame(): void {
    RestartGame();
}

/**
 * Saves the benchmark recording to %USERPROFILE%\Documents\Rockstar Games\GTA V\Benchmarks and submits some metrics.
 * 
 * Hash: 0x37DEB0AA183FB6D8 | Since: 323 | API-Set: unknown
 */
export function saveEndUserBenchmark(): void {
    SaveBenchmarkRecording();
}

/**
 * No comment provided
 * 
 * Hash: 0x8EF5573A1F801A5C | Since: 323 | API-Set: unknown
 */
export function scriptRaceGetPlayerSplitTime(player: number | string | IPlayer): [boolean, number, number] {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return ScriptRaceGetPlayerSplitTime(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A60017F841A54F2 | Since: 323 | API-Set: unknown
 */
export function scriptRaceInit(): void {
    ScriptRaceInit(0, 0, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1BB299305C3E8C13 | Since: 323 | API-Set: unknown
 */
export function scriptRacePlayerHitCheckpoint(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    ScriptRacePlayerHitCheckpoint(_player, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1FF6BF9A63E5757F | Since: 323 | API-Set: unknown
 */
export function scriptRaceShutdown(): void {
    ScriptRaceShutdown();
}

/**
 * No comment provided
 * 
 * Hash: 0x438822C279B73B93 | Since: 573 | API-Set: unknown
 */
export function setBeastJumpThisFrame(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetBeastModeActive(_player);
}

/**
 * This sets bit [offset] of [address] to on.
 * 
 * The offsets used are different bits to be toggled on and off, typically there is only one address used in a script.
 * 
 * Example:
 * `MISC::SET_BIT(&bitAddress, 1);`
 * 
 * To check if this bit has been enabled:
 * `MISC::IS_BIT_SET(bitAddress, 1); // will return 1 afterwards`
 * 
 * Please note, this method may assign a value to [address] when used.
 * 
 * Hash: 0x933D6A9EEC1BACD0 | Since: 323 | API-Set: unknown
 */
export function setBit(offset: number): number {
    return SetBit(offset);
}

/**
 * No comment provided
 * 
 * Hash: 0x8EF07E15701D61ED | Since: 323 | API-Set: unknown
 */
export function setBitsInRange(rangeStart: number, rangeEnd: number): number {
    return SetBitsInRange(rangeStart, rangeEnd, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xF36199225D6D8C86 | Since: 323 | API-Set: unknown
 */
export function setCloudsAlpha(opacity: number): void {
    SetCloudsAlpha(opacity);
}

/**
 * No comment provided
 * 
 * Hash: 0x02DEAAC8F8EA7FE7 | Since: 323 | API-Set: unknown
 */
export function setCloudSettingsOverride(): void {
    SetCloudSettingsOverride(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4B82FA6F2D624634 | Since: 2612 | API-Set: unknown
 */
export function setContentIdIndex(contentId: number | string, index: number): void {
    if (typeof contentId === 'string') contentId = GetHashKey(contentId)
    Citizen.invokeNative('0x4B82FA6F2D624634', contentId, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xB938B7E6D3C0620C | Since: 323 | API-Set: unknown
 */
export function setCreditsActive(toggle: boolean): void {
    SetCreditsActive(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB51B9AB9EF81868C | Since: 323 | API-Set: unknown
 */
export function setCreditsFadeOutWithScreen(toggle: boolean): void {
    Citizen.invokeNative('0xB51B9AB9EF81868C', toggle);
}

/**
 * Mixes two weather types. If percentWeather2 is set to 0.0f, then the weather will be entirely of weatherType1, if it is set to 1.0f it will be entirely of weatherType2. If it's set somewhere in between, there will be a mixture of weather behaviors. To test, try this in the RPH console, and change the float to different values between 0 and 1:
 * 
 * execute "NativeFunction.Natives.x578C752848ECFA0C(Game.GetHashKey(""RAIN""), Game.GetHashKey(""SMOG""), 0.50f);
 * 
 * Note that unlike most of the other weather natives, this native takes the hash of the weather name, not the plain string. These are the weather names and their hashes:
 * 
 * CLEAR  0x36A83D84
 * EXTRASUNNY  0x97AA0A79
 * CLOUDS  0x30FDAF5C
 * OVERCAST    0xBB898D2D
 * RAIN    0x54A69840
 * CLEARING    0x6DB1A50D
 * THUNDER 0xB677829F
 * SMOG    0x10DCF4B5
 * FOGGY   0xAE737644
 * XMAS    0xAAC9C895
 * SNOWLIGHT   0x23FB812B
 * BLIZZARD    0x27EA2814
 * 
 * 
 * 
 * 
 * 
 * \/\* OLD INVALID INFO BELOW \*\/
 * Not tested. Based purely on disassembly. Instantly sets the weather to sourceWeather, then transitions to targetWeather over the specified transitionTime in seconds.
 * 
 * If an invalid hash is specified for sourceWeather, the current weather type will be used.
 * If an invalid hash is specified for targetWeather, the next weather type will be used.
 * If an invalid hash is specified for both sourceWeather and targetWeather, the function just changes the transition time of the current transition.
 * 
 * Hash: 0x578C752848ECFA0C | Since: 323 | API-Set: unknown
 */
export function setCurrWeatherState(weatherType1: number | string, weatherType2: number | string, percentWeather2: number): void {
    if (typeof weatherType1 === 'string') weatherType1 = GetHashKey(weatherType1)
    if (typeof weatherType2 === 'string') weatherType2 = GetHashKey(weatherType2)
    SetWeatherTypeTransition(weatherType1, weatherType2, percentWeather2);
}

/**
 * No comment provided
 * 
 * Hash: 0x6FE601A64180D423 | Since: 323 | API-Set: unknown
 */
export function setDispatchIdealSpawnDistance(distance: number): void {
    SetDispatchIdealSpawnDistance(distance);
}

/**
 * No comment provided
 * 
 * Hash: 0xD10F442036302D50 | Since: 323 | API-Set: unknown
 */
export function setDispatchSpawnLocation(pos: Vector3): void {
    SetDispatchSpawnLocation(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x44F7CBC1BEB3327D | Since: 323 | API-Set: unknown
 */
export function setDispatchTimeBetweenSpawnAttempts(): void {
    SetDispatchTimeBetweenSpawnAttempts(undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x48838ED9937A15D1 | Since: 323 | API-Set: unknown
 */
export function setDispatchTimeBetweenSpawnAttemptsMultiplier(): void {
    SetDispatchTimeBetweenSpawnAttemptsMultiplier(undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA66C71C98D5F2CFB | Since: 323 | API-Set: unknown
 */
export function setExplosiveAmmoThisFrame(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetExplosiveAmmoThisFrame(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF1BED81BFDC0FE0 | Since: 323 | API-Set: unknown
 */
export function setExplosiveMeleeThisFrame(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetExplosiveMeleeThisFrame(_player);
}

/**
 * Sets whether the game should fade in after the player dies or is arrested.
 * 
 * Hash: 0xDA66D2796BA33F12 | Since: 323 | API-Set: unknown
 */
export function setFadeInAfterDeathArrest(toggle: boolean): void {
    SetFadeInAfterDeathArrest(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF3D78F59DFE18D79 | Since: 323 | API-Set: unknown
 */
export function setFadeInAfterLoad(toggle: boolean): void {
    SetFadeInAfterLoad(toggle);
}

/**
 * Sets whether the game should fade out after the player is arrested.
 * 
 * Hash: 0x1E0B4DC0D990A4E7 | Since: 323 | API-Set: unknown
 */
export function setFadeOutAfterArrest(toggle: boolean): void {
    SetFadeOutAfterArrest(toggle);
}

/**
 * Sets whether the game should fade out after the player dies.
 * 
 * Hash: 0x4A18E01DF2C87B86 | Since: 323 | API-Set: unknown
 */
export function setFadeOutAfterDeath(toggle: boolean): void {
    SetFadeOutAfterDeath(toggle);
}

/**
 * Sets a visually fake wanted level on the user interface. Used by Rockstar's scripts to "override" regular wanted levels and make custom ones while the real wanted level and multipliers are still in effect.
 * 
 * Max is 6, anything above this makes it just 6. Also the mini-map gets the red & blue flashing effect.
 * 
 * Hash: 0x1454F2448DE30163 | Since: 323 | API-Set: unknown
 */
export function setFakeWantedLevel(fakeWantedLevel: number): void {
    SetFakeWantedLevel(fakeWantedLevel);
}

/**
 * No comment provided
 * 
 * Hash: 0x11879CDD803D30F4 | Since: 323 | API-Set: unknown
 */
export function setFireAmmoThisFrame(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetFireAmmoThisFrame(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xA1183BCFEE0F93D1 | Since: 1180 | API-Set: unknown
 */
export function setForcedJumpThisFrame(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetForcePlayerToJump(_player);
}

/**
 * Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused which means you will lose control and the game remains in paused mode until you exit GTA5.exe
 * 
 * Hash: 0x577D1284D6873711 | Since: 323 | API-Set: unknown
 */
export function setGamePaused(toggle: boolean): void {
    SetGamePaused(toggle);
}

/**
 * level can be from 0 to 3
 * 0: 9.8 - normal
 * 1: 2.4 - low
 * 2: 0.1 - very low
 * 3: 0.0 - off
 * 
 * Hash: 0x740E14FAD5842351 | Since: 323 | API-Set: unknown
 */
export function setGravityLevel(level: number): void {
    SetGravityLevel(level);
}

/**
 * No comment provided
 * 
 * Hash: 0xD261BA3E7E998072 | Since: 323 | API-Set: unknown
 */
export function setIdealSpawnDistanceForIncident(incidentId: number): void {
    SetIncidentUnk(incidentId, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB08B85D860E7BA3C | Since: 323 | API-Set: unknown
 */
export function setIncidentRequestedUnits(incidentId: number, dispatchService: number, numUnits: number): void {
    SetIncidentRequestedUnits(incidentId, dispatchService, numUnits);
}

/**
 * Sets an unknown flag used by CScene in determining which entities from CMapData scene nodes to draw, similar to SET_INSTANCE_PRIORITY_MODE.
 * 
 * Hash: 0xC5F0A8EBD3F361CE | Since: 323 | API-Set: unknown
 */
export function setInstancePriorityHint(flag: number): void {
    SetInstancePriorityHint(flag);
}

/**
 * Formerly known as _LOWER_MAP_PROP_DENSITY and wrongly due to idiots as _ENABLE_MP_DLC_MAPS.
 * Sets the maximum prop density and changes a loading screen flag from 'loading story mode' to 'loading GTA Online'. Does not touch DLC map data at all.
 * 
 * In fact, I doubt this changes the flag whatsoever, that's the OTHER native idiots use together with this that does so, this one only causes a loading screen to show as it reloads map data.
 * 
 * Hash: 0x9BAE5AD2508DF078 | Since: 323 | API-Set: unknown
 */
export function setInstancePriorityMode(): void {
    SetInstancePriorityMode(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x19E00D7322C6F85B | Since: 323 | API-Set: unknown
 */
export function setMinigameInProgress(toggle: boolean): void {
    SetMinigameInProgress(toggle);
}

/**
 * If true, the player can't save the game.
 * 
 * 
 * If the parameter is true, sets the mission flag to true, if the parameter is false, the function does nothing at all.
 * 
 * ^ also, if the mission flag is already set, the function does nothing at all
 * 
 * Hash: 0xC4301E5121A0ED73 | Since: 323 | API-Set: unknown
 */
export function setMissionFlag(toggle: boolean): void {
    SetMissionFlag(toggle);
}

/**
 * Appears to have an optional bool parameter that is unused in the scripts.
 * 
 * If you pass true, something will be set to zero.
 * 
 * Hash: 0xA43D5C6FE51ADBEF | Since: 323 | API-Set: unknown
 */
export function setOverrideWeather(weatherType: string): void {
    SetOverrideWeather(weatherType);
}

/**
 * Identical to SET_OVERRIDE_WEATHER but has an additional BOOL param that sets some weather var to 0 if true
 * 
 * Hash: 0x1178E104409FE58C | Since: 2189 | API-Set: unknown
 */
export function setOverrideWeatherex(weatherType: string): void {
    Citizen.invokeNative('0x1178E104409FE58C', weatherType, false);
}

/**
 * If toggle is true, the ped's head is shown in the pause menu
 * If toggle is false, the ped's head is not shown in the pause menu
 * 
 * Hash: 0x4EBB7E87AA0DBED4 | Since: 323 | API-Set: unknown
 */
export function setPlayerIsInAnimalForm(toggle: boolean): void {
    SetPlayerIsInAnimalForm(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D8D44ADBBA61EF2 | Since: 323 | API-Set: unknown
 */
export function setPlayerIsRepeatingAMission(toggle: boolean): void {
    SetPlayerRockstarEditorDisabled(toggle);
}

/**
 * With an `intensity` higher than `0.5f`, only the creation of puddles gets faster, rain and rain sound won't increase after that.
 * With an `intensity` of `0.0f` rain and rain sounds are disabled and there won't be any new puddles.
 * To use the rain intensity of the current weather, call this native with `-1f` as `intensity`.
 * 
 * Hash: 0x643E26EA6E024D92 | Since: 323 | API-Set: unknown
 */
export function setRain(intensity: number): void {
    SetRainLevel(intensity);
}

/**
 * If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
 * Does nothing if the mission flag is set.
 * 
 * Hash: 0x971927086CFD2158 | Since: 323 | API-Set: unknown
 */
export function setRandomEventFlag(toggle: boolean): void {
    SetRandomEventFlag(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x444D98F98C11F3EC | Since: 323 | API-Set: unknown
 */
export function setRandomSeed(seed: number): void {
    SetRandomSeed(seed);
}

/**
 * No comment provided
 * 
 * Hash: 0x8B05F884CF7E8020 | Since: 323 | API-Set: unknown
 */
export function setRandomWeatherType(): void {
    SetRandomWeatherType();
}

/**
 * No comment provided
 * 
 * Hash: 0x706B5EDCAA7FA663 | Since: 323 | API-Set: unknown
 */
export function setRestartCoordOverride(pos: Vector3, heading: number): void {
    SetRestartCustomPosition(pos.x, pos.y, pos.z, heading);
}

/**
 * Activates (usused?) riot mode. All NPCs are being hostile to each other (including player). Also the game will give weapons (pistols, smgs) to random NPCs.
 * 
 * Hash: 0x2587A48BC88DFADF | Since: 323 | API-Set: unknown
 */
export function setRiotModeEnabled(toggle: boolean): void {
    SetRiotModeEnabled(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4F548CABEAE553BC | Since: 323 | API-Set: unknown
 */
export function setSaveHouse(savehouseHandle: number): void {
    SetSaveHouse(savehouseHandle, false, false);
}

/**
 * ignoreVehicle - bypasses vehicle check of the local player (it will not open if you are in a vehicle and this is set to false)
 * 
 * Hash: 0xC9BF75D28165FF77 | Since: 323 | API-Set: unknown
 */
export function setSaveMenuActive(ignoreVehicle: boolean): void {
    SetSaveMenuActive(ignoreVehicle);
}

/**
 * Sets GtaThread+0x14A
 * 
 * Hash: 0x65D2EBB47E1CEC21 | Since: 323 | API-Set: unknown
 */
export function setScriptHighPrio(toggle: boolean): void {
    Citizen.invokeNative('0x65D2EBB47E1CEC21', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7F06937B0CDCBC1A | Since: 1868 | API-Set: unknown
 */
export function setSnow(level: number): void {
    SetSnowLevel(level);
}

/**
 * No comment provided
 * 
 * Hash: 0xD79185689F8FD5DF | Since: 323 | API-Set: unknown
 */
export function setStuntJumpsCanTrigger(toggle: boolean): void {
    SetStuntJumpsCanTrigger(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x57FFF03E423A4C0B | Since: 323 | API-Set: unknown
 */
export function setSuperJumpThisFrame(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetSuperJumpThisFrame(_player);
}

/**
 * From the scripts:
 * 
 * `MISC::SET_TENNIS_MOVE_NETWORK_SIGNAL_FLOAT(sub_aa49(a_0), "ForcedStopDirection", v_E);`
 * 
 * Related to tennis mode.
 * 
 * Hash: 0x54F157E0336A3822 | Since: 323 | API-Set: unknown
 */
export function setTennisMoveNetworkSignalFloat(ped: number | IPed): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    Citizen.invokeNative('0x54F157E0336A3822', _ped, undefined, 0);
}

/**
 * Sets bit 3 in GtaThread+0x150
 * 
 * Hash: 0x6F2135B6129620C1 | Since: 323 | API-Set: unknown
 */
export function setThisIsATriggerScript(toggle: boolean): void {
    Citizen.invokeNative('0x6F2135B6129620C1', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA391C728106F7AF | Since: 323 | API-Set: unknown
 */
export function setThisScriptCanBePaused(toggle: boolean): void {
    SetThisScriptCanBePaused(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB98236CAAECEF897 | Since: 323 | API-Set: unknown
 */
export function setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void {
    SetThisScriptCanRemoveBlipsCreatedByAnyScript(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFB00CA71DA386228 | Since: 323 | API-Set: unknown
 */
export function setTickerJohnmarstonIsDone(): void {
    Citizen.invokeNative('0xFB00CA71DA386228');
}

/**
 * Maximum value is 1.
 * At a value of 0 the game will still run at a minimum time scale.
 * 
 * Slow Motion 1: 0.6
 * Slow Motion 2: 0.4
 * Slow Motion 3: 0.2
 * 
 * Hash: 0x1D408577D440E81E | Since: 323 | API-Set: unknown
 */
export function setTimeScale(timeScale: number): void {
    SetTimeScale(timeScale);
}

/**
 * No comment provided
 * 
 * Hash: 0xE532EC1A63231B4F | Since: 323 | API-Set: unknown
 */
export function setWantedResponseNumPedsToSpawn(): void {
    Citizen.invokeNative('0xE532EC1A63231B4F', 0, 0);
}

/**
 * The following weatherTypes are used in the scripts:
 * "CLEAR"
 * "EXTRASUNNY"
 * "CLOUDS"
 * "OVERCAST"
 * "RAIN"
 * "CLEARING"
 * "THUNDER"
 * "SMOG"
 * "FOGGY"
 * "XMAS"
 * "SNOW"
 * "SNOWLIGHT"
 * "BLIZZARD"
 * "HALLOWEEN"
 * "NEUTRAL"
 * 
 * Hash: 0x29B487C359E19889 | Since: 323 | API-Set: unknown
 */
export function setWeatherTypeNow(weatherType: string): void {
    SetWeatherTypeNow(weatherType);
}

/**
 * The following weatherTypes are used in the scripts:
 * "CLEAR"
 * "EXTRASUNNY"
 * "CLOUDS"
 * "OVERCAST"
 * "RAIN"
 * "CLEARING"
 * "THUNDER"
 * "SMOG"
 * "FOGGY"
 * "XMAS"
 * "SNOW"
 * "SNOWLIGHT"
 * "BLIZZARD"
 * "HALLOWEEN"
 * "NEUTRAL"
 * 
 * Hash: 0xED712CA327900C8A | Since: 323 | API-Set: unknown
 */
export function setWeatherTypeNowPersist(weatherType: string): void {
    SetWeatherTypeNowPersist(weatherType);
}

/**
 * No comment provided
 * 
 * Hash: 0xFB5045B7C42B75BF | Since: 323 | API-Set: unknown
 */
export function setWeatherTypeOvertimePersist(weatherType: string, time: number): void {
    SetWeatherTypeOvertimePersist(weatherType, time);
}

/**
 * The following weatherTypes are used in the scripts:
 * "CLEAR"
 * "EXTRASUNNY"
 * "CLOUDS"
 * "OVERCAST"
 * "RAIN"
 * "CLEARING"
 * "THUNDER"
 * "SMOG"
 * "FOGGY"
 * "XMAS"
 * "SNOW"
 * "SNOWLIGHT"
 * "BLIZZARD"
 * "HALLOWEEN"
 * "NEUTRAL"
 * 
 * Hash: 0x704983DF373B198F | Since: 323 | API-Set: unknown
 */
export function setWeatherTypePersist(weatherType: string): void {
    SetWeatherTypePersist(weatherType);
}

/**
 * Sets the the normalized wind speed value. The wind speed clamps always at 12.0, SET_WIND sets the wind in a percentage, 0.0 is 0 and 1.0 is 12.0. Setting this value to a negative number resumes the random wind speed changes provided by the game.
 * 
 * Hash: 0xAC3A74E8384A9919 | Since: 323 | API-Set: unknown
 */
export function setWind(speed: number): void {
    SetWind(speed);
}

/**
 * The wind direction in radians
 * 180 degrees (PI), wind will blow from the south. Setting this value to a negative number resumes the random wind direction changes provided by the game.
 * 
 * Hash: 0xEB0F4468467B4528 | Since: 323 | API-Set: unknown
 */
export function setWindDirection(direction: number): void {
    SetWindDirection(direction);
}

/**
 * Using this native will set the absolute wind speed value. The wind speed clamps to a range of 0.0- 12.0. Setting this value to a negative number resumes the random wind speed changes provided by the game.
 * 
 * Hash: 0xEE09ECEDBABE47FC | Since: 323 | API-Set: unknown
 */
export function setWindSpeed(speed: number): void {
    SetWindSpeed(speed);
}

/**
 * No comment provided
 * 
 * Hash: 0x867654CBC7606F2C | Since: 323 | API-Set: unknown
 */
export function shootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, weaponHash: number | string, ownerPed: number | IPed, isAudible: boolean, isInvisible: boolean, speed: number): void {
    const _ownerPed = typeof ownerPed == 'object' ? ownerPed.handle() : ownerPed;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    ShootSingleBulletBetweenCoords(x1, y1, z1, x2, y2, z2, damage, false, weaponHash, _ownerPed, isAudible, isInvisible, speed);
}

/**
 * entity - entity to ignore
 * 
 * Hash: 0xE3A7742E0B7A2F8B | Since: 323 | API-Set: unknown
 */
export function shootSingleBulletBetweenCoordsIgnoreEntity(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, weaponHash: number | string, ownerPed: number | IPed, isAudible: boolean, isInvisible: boolean, speed: number, entity: number | IEntity): void {
    const _ownerPed = typeof ownerPed == 'object' ? ownerPed.handle() : ownerPed;
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    ShootSingleBulletBetweenCoordsIgnoreEntity(x1, y1, z1, x2, y2, z2, damage, false, weaponHash, _ownerPed, isAudible, isInvisible, speed, _entity, undefined);
}

/**
 * entity - entity to ignore
 * targetEntity - entity to home in on, if the weapon hash provided supports homing
 * 
 * Hash: 0xBFE5756E7407064A | Since: 323 | API-Set: unknown
 */
export function shootSingleBulletBetweenCoordsIgnoreEntityNew(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, weaponHash: number | string, ownerPed: number | IPed, isAudible: boolean, isInvisible: boolean, speed: number, entity: number | IEntity, targetEntity: number | IEntity): void {
    const _ownerPed = typeof ownerPed == 'object' ? ownerPed.handle() : ownerPed;
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    const _targetEntity = typeof targetEntity == 'object' ? targetEntity.handle() : targetEntity;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    ShootSingleBulletBetweenCoordsIgnoreEntityNew(x1, y1, z1, x2, y2, z2, damage, false, weaponHash, _ownerPed, isAudible, isInvisible, speed, _entity, false, false, _targetEntity, false, undefined, undefined, undefined);
}

/**
 * Returns true if the game is using the metric measurement system (profile setting 227), false if imperial is used.
 * 
 * Hash: 0xD3D15555431AB793 | Since: 323 | API-Set: unknown
 */
export function shouldUseMetricMeasurements(): boolean {
    return ShouldUseMetricMeasurements();
}

/**
 * This native always come right before SET_ENTITY_QUATERNION where its final 4 parameters are SLERP_NEAR_QUATERNION p9 to p12
 * 
 * Hash: 0xF2F6A2FA49278625 | Since: 323 | API-Set: unknown
 */
export function slerpNearQuaternion(t: number, pos: Vector3, w: number, x1: number, y1: number, z1: number, w1: number): [number, number, number, number] {
    return SlerpNearQuaternion(t, pos.x, pos.y, pos.z, w, x1, y1, z1, w1);
}

/**
 * No comment provided
 * 
 * Hash: 0x92790862E36C2ADA | Since: 323 | API-Set: unknown
 */
export function startEndUserBenchmark(): void {
    StartBenchmarkRecording();
}

/**
 * No comment provided
 * 
 * Hash: 0x60FE567DF1B1AF9D | Since: 323 | API-Set: unknown
 */
export function startSaveArrayWithSize(size: number, arrayName: string): any {
    return StartSaveArrayWithSize(size, arrayName);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9575F812C6A7997 | Since: 323 | API-Set: unknown
 */
export function startSaveData(): any {
    return StartSaveData(undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF737600CDDBEADD | Since: 323 | API-Set: unknown
 */
export function startSaveStructWithSize(size: number, structName: string): any {
    return StartSaveStructWithSize(size, structName);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7DB36C24634F52B | Since: 323 | API-Set: unknown
 */
export function stopEndUserBenchmark(): void {
    StopBenchmarkRecording();
}

/**
 * No comment provided
 * 
 * Hash: 0x04456F95153C6BE4 | Since: 323 | API-Set: unknown
 */
export function stopSaveArray(): void {
    StopSaveArray();
}

/**
 * No comment provided
 * 
 * Hash: 0x74E20C9145FB66FD | Since: 323 | API-Set: unknown
 */
export function stopSaveData(): void {
    StopSaveData();
}

/**
 * No comment provided
 * 
 * Hash: 0xEB1774DF12BB9F12 | Since: 323 | API-Set: unknown
 */
export function stopSaveStruct(): void {
    StopSaveStruct();
}

/**
 * Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.
 * 
 * If all checks have passed successfully, the return value will be set to whatever strtol(string, 0i64, 10); returns.
 * 
 * Hash: 0x5A5F40FE637EB584 | Since: 323 | API-Set: unknown
 */
export function stringToInt(_string: string): [boolean, number] {
    return StringToInt(_string);
}

/**
 * No comment provided
 * 
 * Hash: 0x1EAE0A6E978894A2 | Since: 323 | API-Set: unknown
 */
export function supressRandomEventThisFrame(eventType: number, suppress: boolean): void {
    SupressRandomEventThisFrame(eventType, suppress);
}

/**
 * No comment provided
 * 
 * Hash: 0x632106CC96E82E91 | Since: 323 | API-Set: unknown
 */
export function tan(): number {
    return Tan(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x9DC711BC69C548DF | Since: 323 | API-Set: unknown
 */
export function terminateAllScriptsWithThisName(scriptName: string): void {
    TerminateAllScriptsWithThisName(scriptName);
}

/**
 * Toggles some stunt jump stuff.
 * 
 * Hash: 0xFB80AB299D2EE1BD | Since: 757 | API-Set: unknown
 */
export function toggleShowOptionalStuntJumpCamera(toggle: boolean): void {
    ToggleShowOptionalStuntJumpCamera(toggle);
}

/**
 * Returns true if the current frontend menu is FE_MENU_VERSION_SP_PAUSE
 * 
 * Hash: 0xEA2F2061875EED90 | Since: 323 | API-Set: unknown
 */
export function uiStartedEndUserBenchmark(): boolean {
    return UiStartedEndUserBenchmark();
}

/**
 * No comment provided
 * 
 * Hash: 0x957E790EA1727B64 | Since: 323 | API-Set: unknown
 */
export function unloadAllCloudHats(): void {
    ClearCloudHat();
}

/**
 * No comment provided
 * 
 * Hash: 0xA74802FB8D0B7814 | Since: 323 | API-Set: unknown
 */
export function unloadCloudHat(name: string): void {
    UnloadCloudHat(name, 0);
}

/**
 * Returns the current status of the onscreen keyboard, and updates the output.
 * 
 * Status Codes:
 * 
 * -1: Keyboard isn't active
 * 0: User still editing
 * 1: User has finished editing
 * 2: User has canceled editing
 * 
 * Hash: 0x0CF2B696BBF945AE | Since: 323 | API-Set: unknown
 */
export function updateOnscreenKeyboard(): number {
    return UpdateOnscreenKeyboard();
}

/**
 * No comment provided
 * 
 * Hash: 0x693478ACBD7F18E7 | Since: 1103 | API-Set: unknown
 */
export function useActiveCameraForTimeslicingCentre(): void {
    Citizen.invokeNative('0x693478ACBD7F18E7');
}

/**
 * No comment provided
 * 
 * Hash: 0xF14878FC50BEC6EE | Since: 323 | API-Set: unknown
 */
export function usingMissionCreator(toggle: boolean): void {
    UsingMissionCreator(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA8434F1DFF41D6E7 | Since: 323 | API-Set: unknown
 */
export function waterOverrideFadeIn(): void {
    WaterOverrideFadeIn(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xC3C221ADDDE31A11 | Since: 323 | API-Set: unknown
 */
export function waterOverrideFadeOut(): void {
    WaterOverrideFadeOut(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x31727907B2C43C55 | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetOceannoiseminamplitude(minAmplitude: number): void {
    WaterOverrideSetOceannoiseminamplitude(minAmplitude);
}

/**
 * No comment provided
 * 
 * Hash: 0x405591EC8FD9096D | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetOceanwaveamplitude(amplitude: number): void {
    WaterOverrideSetOceanwaveamplitude(amplitude);
}

/**
 * No comment provided
 * 
 * Hash: 0xB3E6360DDE733E82 | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetOceanwavemaxamplitude(maxAmplitude: number): void {
    WaterOverrideSetOceanwavemaxamplitude(maxAmplitude);
}

/**
 * No comment provided
 * 
 * Hash: 0xF751B16FB32ABC1D | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetOceanwaveminamplitude(minAmplitude: number): void {
    WaterOverrideSetOceanwaveminamplitude(minAmplitude);
}

/**
 * No comment provided
 * 
 * Hash: 0x7C9C0B1EEB1F9072 | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetRipplebumpiness(bumpiness: number): void {
    WaterOverrideSetRipplebumpiness(bumpiness);
}

/**
 * No comment provided
 * 
 * Hash: 0xB9854DFDE0D833D6 | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetRippledisturb(disturb: number): void {
    WaterOverrideSetRippledisturb(disturb);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F5E6BB6B34540DA | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetRipplemaxbumpiness(maxBumpiness: number): void {
    WaterOverrideSetRipplemaxbumpiness(maxBumpiness);
}

/**
 * No comment provided
 * 
 * Hash: 0x6216B116083A7CB4 | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetRippleminbumpiness(minBumpiness: number): void {
    WaterOverrideSetRippleminbumpiness(minBumpiness);
}

/**
 * No comment provided
 * 
 * Hash: 0xB8F87EAD7533B176 | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetShorewaveamplitude(amplitude: number): void {
    WaterOverrideSetShorewaveamplitude(amplitude);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7A1127490312C36 | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetShorewavemaxamplitude(maxAmplitude: number): void {
    WaterOverrideSetShorewavemaxamplitude(maxAmplitude);
}

/**
 * No comment provided
 * 
 * Hash: 0xC3EAD29AB273ECE8 | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetShorewaveminamplitude(minAmplitude: number): void {
    WaterOverrideSetShorewaveminamplitude(minAmplitude);
}

/**
 * This seems to edit the water wave, intensity around your current location.
 * 
 * 0.0f = Normal
 * 1.0f = So Calm and Smooth, a boat will stay still.
 * 3.0f = Really Intense.
 * 
 * Hash: 0xC54A08C85AE4D410 | Since: 323 | API-Set: unknown
 */
export function waterOverrideSetStrength(strength: number): void {
    WaterOverrideSetStrength(strength);
}

/**
 * Returns prop type for given model hash
 * 
 * Hash: 0x8BAF8AD59F47AAFC | Since: 3095 | API-Set: unknown
 */
export function getContentPropType(model: number | string): number {
    if (typeof model === 'string') model = GetHashKey(model)
    return Citizen.invokeNative('0x8BAF8AD59F47AAFC', model);
}

/**
 * No comment provided
 * 
 * Hash: 0xE2BCD0EFAE90D1F4 | Since: 3504 | API-Set: unknown
 */
export function isXboxpcVersion(): boolean {
    return Citizen.invokeNative('0xE2BCD0EFAE90D1F4');
}

/**
 * No comment provided
 * 
 * Hash: 0xBA4583AF4C678A9B | Since: 3095 | API-Set: unknown
 */
export function setContentPropType(model: number | string, _type: number): void {
    if (typeof model === 'string') model = GetHashKey(model)
    Citizen.invokeNative('0xBA4583AF4C678A9B', model, _type);
}

