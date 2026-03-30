import { Vector3, IEntity, IPed, IPlayer, IObject } from '@risinglife/fivem-shared';
/**
 * Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#\_0x6F8838D03D1DC226)) and its object handle.
 *
 * The data returned adheres to the following layout:
 *
 * ```
 * [{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]
 * ```
 *
 * Hash: 0xF65BBA4B | Since: unknown | API-Set: client
 */
export function doorSystemGetActive() {
    return DoorSystemGetActive();
}
/**
 * No comment provided
 *
 * Hash: 0x237613B3 | Since: unknown | API-Set: client
 */
export function doorSystemGetSize() {
    return DoorSystemGetSize();
}
/**
 * doorHash has to be unique. scriptDoor false; relies upon getNetworkGameScriptHandler. isLocal On true disables the creation CRequestDoorEvent's in DOOR_SYSTEM_SET_DOOR_STATE.
 * p5 only set to true in single player native scripts.
 * If scriptDoor is true, register the door on the script handler host (note: there's a hardcap on the number of script IDs that can be added to the system at a given time). If scriptDoor and isLocal are both false, the door is considered to be in a "Persists w/o netobj" state.
 *
 * door hashes normally look like PROP_[int]_DOOR_[int] for interior doors and PROP_BUILDING_[int]_DOOR_[int] exterior doors but you can just make up your own hash if you want
 * All doors need to be registered with ADD_DOOR_TO_SYSTEM before they can be manipulated with the door natives and the easiest way to get door models is just find the door in codewalker.
 *
 * Example: AddDoorToSystem("PROP_43_DOOR_0", "hei_v_ilev_fh_heistdoor2", -1456.818, -520.5037, 69.67043, 0, 0, 0)
 *
 * Hash: 0x6F8838D03D1DC226 | Since: 323 | API-Set: unknown
 */
export function addDoorToSystem(doorHash, modelHash, pos, scriptDoor, isLocal) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    AddDoorToSystem(doorHash, modelHash, pos.x, pos.y, pos.z, false, scriptDoor, isLocal, undefined);
}
/**
 * Adds an area that seems to be related to pickup physics behavior.
 * Max amount of areas is 10. Only works in multiplayer.
 *
 * Hash: 0xD4A7A435B3710D05 | Since: 1290 | API-Set: unknown
 */
export function addExtendedPickupProbeArea(pos, radius) {
    Citizen.invokeNative('0xD4A7A435B3710D05', pos.x, pos.y, pos.z, radius);
}
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0xFDC07C58E8AAB715 | Since: 1734 | API-Set: unknown
 */
export function allowAllPlayersToCollectPickupsOfType(pickupHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    Citizen.invokeNative('0xFDC07C58E8AAB715', pickupHash);
}
/**
 * No comment provided
 *
 * Hash: 0xABDABF4E1EDECBFA | Since: 1365 | API-Set: unknown
 */
export function allowDamageEventsForNonNetworkeds(value) {
    SetUnkGlobalBoolRelatedToDamage(value);
}
/**
 * No comment provided
 *
 * Hash: 0x834344A414C7C85D | Since: 2372 | API-Set: unknown
 */
export function allowPickupArrowMarkerWhenUncollectable(pickup, toggle) {
    Citizen.invokeNative('0x834344A414C7C85D', pickup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xAA059C615DE9DD03 | Since: 1180 | API-Set: unknown
 */
export function allowPickupByNoneParticipant(pickup, toggle) {
    Citizen.invokeNative('0xAA059C615DE9DD03', pickup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x641F272B52E2F0F8 | Since: 877 | API-Set: unknown
 */
export function allowPortablePickupToMigrateToNonParticipants(pickup, toggle) {
    Citizen.invokeNative('0x641F272B52E2F0F8', pickup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x85B6C850546FDDE2 | Since: 323 | API-Set: unknown
 */
export function areEntitiesEntirelyInsideGarage(garageHash) {
    if (typeof garageHash === 'string')
        garageHash = GetHashKey(garageHash);
    return AreEntitiesEntirelyInsideGarage(garageHash, false, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8DC39368BDD57755 | Since: 323 | API-Set: unknown
 */
export function attachPortablePickupToPed(pickupObject, ped) {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AttachPortablePickupToPed(_pickupObject, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x1E3F1B1B891A2AAA | Since: 573 | API-Set: unknown
 */
export function blockPlayersForAmbientPickup() {
    Citizen.invokeNative('0x1E3F1B1B891A2AAA', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE7E4C198B0185900 | Since: 323 | API-Set: unknown
 */
export function breakFragmentChild(p0) {
    const _p0 = p0 instanceof IObject ? p0.handle() : p0;
    BreakObjectFragmentChild(_p0, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA2C1F5E92AFE49ED | Since: 323 | API-Set: unknown
 */
export function clearAllPickupRewardTypeSuppression() {
    Citizen.invokeNative('0xA2C1F5E92AFE49ED');
}
/**
 * Clears all areas created by ADD_EXTENDED_PICKUP_PROBE_AREA
 *
 * Hash: 0xB7C6D80FB371659A | Since: 1290 | API-Set: unknown
 */
export function clearExtendedPickupProbeAreas() {
    Citizen.invokeNative('0xB7C6D80FB371659A');
}
/**
 * No comment provided
 *
 * Hash: 0xDA05194260CDCDF9 | Since: 678 | API-Set: unknown
 */
export function clearGarage(garageHash, isNetwork) {
    if (typeof garageHash === 'string')
        garageHash = GetHashKey(garageHash);
    ClearGarageArea(garageHash, isNetwork);
}
/**
 * No comment provided
 *
 * Hash: 0x190428512B240692 | Since: 323 | API-Set: unknown
 */
export function clearsInsideGarage(garageHash, vehicles, peds, objects, isNetwork) {
    if (typeof garageHash === 'string')
        garageHash = GetHashKey(garageHash);
    ClearObjectsInsideGarage(garageHash, vehicles, peds, objects, isNetwork);
}
/**
 * No comment provided
 *
 * Hash: 0x762DB2D380B48D04 | Since: 323 | API-Set: unknown
 */
export function clearPickupRewardTypeSuppression(rewardType) {
    Citizen.invokeNative('0x762DB2D380B48D04', rewardType);
}
/**
 * Clears the fields sets by 0xC7F29CA00F46350E (1604 retail: 0x1424A7A10, 0x1424A7A11) and iterates over the global CDoor's bucket-list.
 * Related to its "Pre-networked state"?
 *
 * Hash: 0x701FDA1E82076BA4 | Since: 323 | API-Set: unknown
 */
export function closeAllBarriersForRace() {
    Citizen.invokeNative('0x701FDA1E82076BA4');
}
/**
 * No comment provided
 *
 * Hash: 0x66A49D021870FE88 | Since: 323 | API-Set: unknown
 */
export function closeSafehouseGarages() {
    Citizen.invokeNative('0x66A49D021870FE88');
}
/**
 * returns pickup hash.
 *
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x5EAAD83F8CFB4575 | Since: 323 | API-Set: unknown
 */
export function convertOldPickupTypeToNew(pickupHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    return GetPickupHash(pickupHash);
}
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x673966A0C0FD7171 | Since: 323 | API-Set: unknown
 */
export function createAmbientPickup(pickupHash, pos, flags, value, modelHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateAmbientPickup(pickupHash, pos.x, pos.y, pos.z, flags, value, modelHash, false, false);
}
/**
 * Spawns one or more money pickups.
 *
 * x: The X-component of the world position to spawn the money pickups at.
 * y: The Y-component of the world position to spawn the money pickups at.
 * z: The Z-component of the world position to spawn the money pickups at.
 * value: The combined value of the pickups (in dollars).
 * amount: The number of pickups to spawn.
 * model: The model to use, or 0 for default money model.
 *
 * Example:
 * CREATE_MONEY_PICKUPS(x, y, z, 1000, 3, 0x684a97ae);
 *
 * Spawns 3 spray cans that'll collectively give $1000 when picked up. (Three spray cans, each giving $334, $334, $332 = $1000).
 *
 * ==============================================
 *
 * Max is 2000 in MP. So if you put the amount to 20, but the value to $400,000 eg. They will only be able to pickup 20 - $2,000 bags. So, $40,000
 *
 * Hash: 0x0589B5E791CE9B2B | Since: 323 | API-Set: unknown
 */
export function createMoneyPickups(pos, value, amount, model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    CreateMoneyPickups(pos.x, pos.y, pos.z, value, amount, model);
}
/**
 * No comment provided
 *
 * Hash: 0x9C93764223E29C50 | Since: 2372 | API-Set: unknown
 */
export function createNonNetworkedAmbientPickup(pickupHash, pos, flags, value, modelHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateNonNetworkedAmbientPickup(pickupHash, pos.x, pos.y, pos.z, flags, value, modelHash, false, false);
}
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x125494B98A21AAF7 | Since: 323 | API-Set: unknown
 */
export function createNonNetworkedPortablePickup(pickupHash, pos, placeOnGround, modelHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateNonNetworkedPortablePickup(pickupHash, pos.x, pos.y, pos.z, placeOnGround, modelHash);
}
/**
 * List of object models that can be created without any additional effort like making sure ytyp is loaded etc: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ObjectList.ini
 *
 * Hash: 0x509D5878EB39E842 | Since: 323 | API-Set: unknown
 */
export function create(modelHash, pos, isNetwork, bScriptHostObj, dynamic) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateObject(modelHash, pos.x, pos.y, pos.z, isNetwork, bScriptHostObj, dynamic);
}
/**
 * List of object models that can be created without any additional effort like making sure ytyp is loaded etc: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ObjectList.ini
 *
 * Hash: 0x9A294B2138ABB884 | Since: 323 | API-Set: unknown
 */
export function createNoOffset(modelHash, pos, isNetwork, bScriptHostObj, dynamic) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateObjectNoOffset(modelHash, pos.x, pos.y, pos.z, isNetwork, bScriptHostObj, dynamic, undefined);
}
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0xFBA08C503DD5FA58 | Since: 323 | API-Set: unknown
 */
export function createPickup(pickupHash, pos, value, modelHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePickup(pickupHash, pos.x, pos.y, pos.z, 0, value, false, modelHash);
}
/**
 * flags:
 * 8 (1 << 3): place on ground
 * 512 (1 << 9): spin around
 *
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x891804727E0A98B7 | Since: 323 | API-Set: unknown
 */
export function createPickupRotate(pickupHash, pos, rot, flag, amount, modelHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePickupRotate(pickupHash, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, flag, amount, undefined, false, modelHash);
}
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x2EAF1FDB2FB55698 | Since: 323 | API-Set: unknown
 */
export function createPortablePickup(pickupHash, pos, placeOnGround, modelHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePortablePickup(pickupHash, pos.x, pos.y, pos.z, placeOnGround, modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0xE05F6AEEFEB0BB02 | Since: 1180 | API-Set: unknown
 */
export function damageFragmentChild() {
    Citizen.invokeNative('0xE05F6AEEFEB0BB02', undefined, undefined, undefined);
}
/**
 * Deletes the specified object, then sets the handle pointed to by the pointer to NULL.
 *
 * Hash: 0x539E0AE3E6634B9F | Since: 323 | API-Set: unknown
 */
export function deleteObject(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    DeleteObject(__object);
}
/**
 * No comment provided
 *
 * Hash: 0xCF463D1E9A0AECB1 | Since: 323 | API-Set: unknown
 */
export function detachPortablePickupFromPed(pickupObject) {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    DetachPortablePickupFromPed(_pickupObject);
}
/**
 * Sets a flag. A valid id is 0x157DC10D
 *
 * Hash: 0x659F9D71F52843F8 | Since: 1290 | API-Set: unknown
 */
export function disableTidyingUpInGarage(id, toggle) {
    Citizen.invokeNative('0x659F9D71F52843F8', id, toggle);
}
/**
 * p5 is usually 0.
 *
 * Hash: 0xBFA48E2FF417213F | Since: 323 | API-Set: unknown
 */
export function doesOfTypeExistAtCoords(pos, radius, hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return DoesObjectOfTypeExistAtCoords(pos.x, pos.y, pos.z, radius, hash, false);
}
/**
 * No comment provided
 *
 * Hash: 0xAFC1CA75AD4074D1 | Since: 323 | API-Set: unknown
 */
export function doesPickupExist(pickup) {
    return DoesPickupExist(pickup);
}
/**
 * No comment provided
 *
 * Hash: 0xD9EFB6DBF7DAAEA3 | Since: 323 | API-Set: unknown
 */
export function doesPickupObjectExist(pickupObject) {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    return DoesPickupObjectExist(_pickupObject);
}
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0xF9C36251F6E48E33 | Since: 323 | API-Set: unknown
 */
export function doesPickupOfTypeExistInArea(pickupHash, pos, radius) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    return DoesPickupOfTypeExistInArea(pickupHash, pos.x, pos.y, pos.z, radius);
}
/**
 * Returns true if a destructible object with this handle exists, false otherwise.
 *
 * Hash: 0x52AF537A0C5B8AAD | Since: 323 | API-Set: unknown
 */
export function doesRayfireMapExist(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return DoesRayfireMapObjectExist(__object);
}
/**
 * Search radius: 0.5
 *
 * Hash: 0x589F80B325CC82C5 | Since: 323 | API-Set: unknown
 */
export function doorSystemFindExistingDoor(pos, modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return DoorSystemFindExistingDoor(pos.x, pos.y, pos.z, modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0xE851471AEFC3374F | Since: 1868 | API-Set: unknown
 */
export function doorSystemGetAutomaticDistance(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return DoorSystemGetAutomaticDistance(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x4BC2854478F3A749 | Since: 323 | API-Set: unknown
 */
export function doorSystemGetDoorPendingState(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return DoorSystemGetDoorPendingState(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x160AA1B32F6139B8 | Since: 323 | API-Set: unknown
 */
export function doorSystemGetDoorState(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return DoorSystemGetDoorState(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0xDF97CDD4FC08FD34 | Since: 323 | API-Set: unknown
 */
export function doorSystemGetIsPhysicsLoaded() {
    return DoorSystemGetIsPhysicsLoaded(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8562FD8AB1E94D39 | Since: 3407 | API-Set: unknown
 */
export function doorSystemGetIsSpringRemoved(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return Citizen.invokeNative('0x8562FD8AB1E94D39', doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x65499865FCA6E5EC | Since: 323 | API-Set: unknown
 */
export function doorSystemGetOpenRatio(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return DoorSystemGetOpenRatio(doorHash);
}
/**
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 *
 * Hash: 0x9BA001CB45CBF627 | Since: 323 | API-Set: unknown
 */
export function doorSystemSetAutomaticDistance(doorHash, distance, requestDoor, forceUpdate) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetAutomaticDistance(doorHash, distance, requestDoor, forceUpdate);
}
/**
 * Includes networking check: ownership vs. or the door itself **isn't** networked.
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 *
 * Hash: 0x03C27E13B42A0E82 | Since: 323 | API-Set: unknown
 */
export function doorSystemSetAutomaticRate(doorHash, rate, requestDoor, forceUpdate) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetAutomaticRate(doorHash, rate, requestDoor, forceUpdate);
}
/**
 * Some property related to gates. Native name between ``DOOR_SYSTEM_SET_AUTOMATIC_RATE`` and ``DOOR_SYSTEM_SET_DOOR_STATE``.
 *
 * Hash: 0xA85A21582451E951 | Since: 323 | API-Set: unknown
 */
export function doorSystemSetDoorOpenForRaces(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    Citizen.invokeNative('0xA85A21582451E951', doorHash, false);
}
/**
 * Lockstates not applied and CNetObjDoor's not created until DOOR_SYSTEM_GET_IS_PHYSICS_LOADED returns true.
 * `requestDoor` on true, and when door system is configured to, i.e., "persists w/o netobj", generate a CRequestDoorEvent.
 * `forceUpdate` on true, forces an update on the door system (same path as netObjDoor_applyDoorStuff)
 * Door lock states:
 * 0: UNLOCKED
 * 1: LOCKED
 * 2: DOORSTATE_FORCE_LOCKED_UNTIL_OUT_OF_AREA
 * 3: DOORSTATE_FORCE_UNLOCKED_THIS_FRAME
 * 4: DOORSTATE_FORCE_LOCKED_THIS_FRAME
 * 5: DOORSTATE_FORCE_OPEN_THIS_FRAME
 * 6: DOORSTATE_FORCE_CLOSED_THIS_FRAME
 *
 * Hash: 0x6BAB9442830C7F53 | Since: 323 | API-Set: unknown
 */
export function doorSystemSetDoorState(doorHash, state, requestDoor, forceUpdate) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetDoorState(doorHash, state, requestDoor, forceUpdate);
}
/**
 * Includes networking check: ownership vs. or the door itself **isn't** networked.
 *
 * Hash: 0xD9B71952F78A2640 | Since: 323 | API-Set: unknown
 */
export function doorSystemSetHoldOpen(doorHash, toggle) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetHoldOpen(doorHash, toggle);
}
/**
 * Sets the ajar angle of a door.
 * Ranges from -1.0 to 1.0, and 0.0 is closed / default.
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 *
 * Hash: 0xB6E6FBA95C7324AC | Since: 323 | API-Set: unknown
 */
export function doorSystemSetOpenRatio(doorHash, ajar, requestDoor, forceUpdate) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetOpenRatio(doorHash, ajar, requestDoor, forceUpdate);
}
/**
 * Includes networking check: ownership vs. or the door itself **isn't** networked.
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 *
 * Hash: 0xC485E07E4F0B7958 | Since: 323 | API-Set: unknown
 */
export function doorSystemSetSpringRemoved(doorHash, removed, requestDoor, forceUpdate) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetSpringRemoved(doorHash, removed, requestDoor, forceUpdate);
}
/**
 * No comment provided
 *
 * Hash: 0xF2E1A7133DD356A6 | Since: 323 | API-Set: unknown
 */
export function enableSavingInGarage(garageHash, toggle) {
    if (typeof garageHash === 'string')
        garageHash = GetHashKey(garageHash);
    EnableSavingInGarage(garageHash, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF9C1681347C8BD15 | Since: 323 | API-Set: unknown
 */
export function fixFragment(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    FixObjectFragment(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x4C134B4DF76025D0 | Since: 1180 | API-Set: unknown
 */
export function forceActivatePhysicsOnUnfixedPickup(pickup, toggle) {
    Citizen.invokeNative('0x4C134B4DF76025D0', pickup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x758A5C1B3B1E1990 | Since: 1011 | API-Set: unknown
 */
export function forcePickupRegenerate() {
    ForcePickupRegenerate(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x394CD08E31313C28 | Since: 944 | API-Set: unknown
 */
export function forcePickupRotateFaceUp() {
    Citizen.invokeNative('0x394CD08E31313C28');
}
/**
 * No comment provided
 *
 * Hash: 0x5CE2E45A5CE2E45A | Since: 2545 | API-Set: unknown
 */
export function forcePortablePickupLastAccessiblePositionSetting(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0x5CE2E45A5CE2E45A', __object);
}
/**
 * Has 8 params in the latest patches.
 *
 * isMission - if true doesn't return mission objects
 *
 * Hash: 0xE143FA2249364369 | Since: 323 | API-Set: unknown
 */
export function getClosestOfType(pos, radius, modelHash, isMission) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetClosestObjectOfType(pos.x, pos.y, pos.z, radius, modelHash, isMission, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x163F8B586BC95F2A | Since: 323 | API-Set: unknown
 */
export function getCoordsAndRotationOfClosestOfType(pos, radius, modelHash, rotationOrder) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetCoordsAndRotationOfClosestObjectOfType(pos.x, pos.y, pos.z, radius, modelHash, rotationOrder);
}
/**
 * No comment provided
 *
 * Hash: 0xDB41D07A45A6D4B7 | Since: 323 | API-Set: unknown
 */
export function getDefaultAmmoForWeaponPickup(pickupHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    return Citizen.invokeNative('0xDB41D07A45A6D4B7', pickupHash);
}
/**
 * No comment provided
 *
 * Hash: 0x2542269291C6AC84 | Since: 1180 | API-Set: unknown
 */
export function getHasBeenCompletelyDestroyed() {
    return Citizen.invokeNative('0x2542269291C6AC84', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3BD770D281982DB5 | Since: 1604 | API-Set: unknown
 */
export function getIsArticulatedJointAtMaxAngle() {
    return Citizen.invokeNative('0x3BD770D281982DB5', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x43C677F1E1158005 | Since: 1604 | API-Set: unknown
 */
export function getIsArticulatedJointAtMinAngle(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetIsArenaPropPhysicsDisabled(__object, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB6FBFD079B8D0596 | Since: 323 | API-Set: unknown
 */
export function getFragmentDamageHealth() {
    return GetObjectFragmentDamageHealth(undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE84EB93729C5F36A | Since: 757 | API-Set: unknown
 */
export function getTintIndex(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetObjectTextureVariation(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x163E252DE035A133 | Since: 323 | API-Set: unknown
 */
export function getOffsetFromCoordAndHeadingInWorldCoords(pos, heading, xOffset, yOffset, zOffset) {
    return new Vector3(GetOffsetFromCoordAndHeadingInWorldCoords(pos.x, pos.y, pos.z, heading, xOffset, yOffset, zOffset));
}
/**
 * No comment provided
 *
 * Hash: 0x225B8B35C88029B3 | Since: 323 | API-Set: unknown
 */
export function getPickupCoords(pickup) {
    return new Vector3(GetPickupCoords(pickup));
}
/**
 * No comment provided
 *
 * Hash: 0xB3ECA65C7317F174 | Since: 944 | API-Set: unknown
 */
export function getPickupGenerationRangeMultiplier() {
    return GetPickupGenerationRangeMultiplier();
}
/**
 * No comment provided
 *
 * Hash: 0x5099BC55630B25AE | Since: 323 | API-Set: unknown
 */
export function getPickup(pickup) {
    return GetPickupObject(pickup);
}
/**
 * Returns the pickup hash for the given weapon hash
 *
 * Hash: 0xD6429A016084F1A5 | Since: 1290 | API-Set: unknown
 */
export function getPickupTypeFromWeaponHash(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetPickupHashFromWeapon(weaponHash);
}
/**
 * Example:
 * `OBJECT::GET_RAYFIRE_MAP_OBJECT(-809.9619750976562, 170.919, 75.7406997680664, 3.0, "des_tvsmash");`
 *
 * Hash: 0xB48FCED898292E52 | Since: 323 | API-Set: unknown
 */
export function getRayfireMap(pos, radius, name) {
    return GetRayfireMapObject(pos.x, pos.y, pos.z, radius, name);
}
/**
 * `object`: The des-object handle to get the animation progress from.
 * Return value is a float between 0.0 and 1.0, 0.0 is the beginning of the animation, 1.0 is the end. Value resets to 0.0 instantly after reaching 1.0.
 *
 * Hash: 0x260EE4FDBDF4DB01 | Since: 323 | API-Set: unknown
 */
export function getRayfireMapAnimPhase(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetRayfireMapObjectAnimPhase(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x6E16BC2503FF1FF0 | Since: 323 | API-Set: unknown
 */
export function getSafePickupCoords(pos) {
    return new Vector3(GetSafePickupCoords(pos.x, pos.y, pos.z, 0, 0));
}
/**
 * locked is 0 if no door is found
 * locked is 0 if door is unlocked
 * locked is 1 if door is found and unlocked.
 *
 * -------------
 * the locked bool is either 0(unlocked)(false) or 1(locked)(true)
 *
 * Hash: 0xEDC1A5B84AEF33FF | Since: 323 | API-Set: unknown
 */
export function getStateOfClosestDoorOfType(_type, pos) {
    if (typeof _type === 'string')
        _type = GetHashKey(_type);
    return GetStateOfClosestDoorOfType(_type, pos.x, pos.y, pos.z);
}
/**
 * Get a destructible object's state.
 * Substract 1 to get the real state.
 * See SET_STATE_OF_RAYFIRE_MAP_OBJECT to see the different states
 * For example, if the object just spawned (state 2), the native will return 3.
 *
 * Hash: 0x899BA936634A322E | Since: 323 | API-Set: unknown
 */
export function getStateOfRayfireMap(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetStateOfRayfireMapObject(__object);
}
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x08F96CA6C551AD51 | Since: 323 | API-Set: unknown
 */
export function getWeaponTypeFromPickupType(pickupHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    return GetWeaponTypeFromPickupType(pickupHash);
}
/**
 * No comment provided
 *
 * Hash: 0x761B0E69AC4D007E | Since: 323 | API-Set: unknown
 */
export function hasClosestOfTypeBeenBroken(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return HasClosestObjectOfTypeBeenBroken(0, 0, 0, 0, modelHash, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x46494A2475701343 | Since: 323 | API-Set: unknown
 */
export function hasClosestOfTypeBeenCompletelyDestroyed(pos, radius, modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return HasClosestObjectOfTypeBeenCompletelyDestroyed(pos.x, pos.y, pos.z, radius, modelHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8ABFB70C49CC43E2 | Since: 323 | API-Set: unknown
 */
export function hasBeenBroken(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return HasObjectBeenBroken(__object, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x80EC48E6679313F9 | Since: 323 | API-Set: unknown
 */
export function hasPickupBeenCollected(pickup) {
    return HasPickupBeenCollected(pickup);
}
/**
 * No comment provided
 *
 * Hash: 0x867458251D47CCB2 | Since: 463 | API-Set: unknown
 */
export function hidePortablePickupWhenDetached(pickupObject, toggle) {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    HidePortablePickupWhenDetached(_pickupObject, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x673ED815D6E323B7 | Since: 323 | API-Set: unknown
 */
export function isAnyEntityEntirelyInsideGarage(garageHash) {
    if (typeof garageHash === 'string')
        garageHash = GetHashKey(garageHash);
    return IsAnyEntityEntirelyInsideGarage(garageHash, false, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x397DC58FF00298D1 | Since: 323 | API-Set: unknown
 */
export function isAnyNearPoint(pos, range) {
    return IsAnyObjectNearPoint(pos.x, pos.y, pos.z, range, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC531EE8A1145A149 | Since: 323 | API-Set: unknown
 */
export function isDoorClosed(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return IsDoorClosed(doorHash);
}
/**
 * `if (OBJECT::IS_DOOR_REGISTERED_WITH_SYSTEM(doorHash))`
 * {
 * `OBJECT::REMOVE_DOOR_FROM_SYSTEM(doorHash);`
 * }
 *
 * Hash: 0xC153C43EA202C8C1 | Since: 323 | API-Set: unknown
 */
export function isDoorRegisteredWithSystem(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return IsDoorRegisteredWithSystem(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x90E47239EA1980B8 | Since: 323 | API-Set: unknown
 */
export function isGarageEmpty(garageHash) {
    if (typeof garageHash === 'string')
        garageHash = GetHashKey(garageHash);
    return IsGarageEmpty(garageHash, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xFC481C641EBBD27D | Since: 1365 | API-Set: unknown
 */
export function isAPickup(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return IsObjectAPickup(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x0378C08504160D0D | Since: 323 | API-Set: unknown
 */
export function isAPortablePickup(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return IsObjectAPortablePickup(__object);
}
/**
 * Despite the name, it does work for any entity type.
 *
 * Hash: 0x372EF6699146A1E4 | Since: 323 | API-Set: unknown
 */
export function isEntirelyInsideGarage(garageHash, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof garageHash === 'string')
        garageHash = GetHashKey(garageHash);
    return IsObjectEntirelyInsideGarage(garageHash, _entity, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8C90FE4B381BA60A | Since: 323 | API-Set: unknown
 */
export function isNearPoint(objectHash, pos, range) {
    if (typeof objectHash === 'string')
        objectHash = GetHashKey(objectHash);
    return IsObjectNearPoint(objectHash, pos.x, pos.y, pos.z, range);
}
/**
 * Despite the name, it does work for any entity type.
 *
 * Hash: 0xF0EED5A6BC7B237A | Since: 323 | API-Set: unknown
 */
export function isPartiallyInsideGarage(garageHash, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof garageHash === 'string')
        garageHash = GetHashKey(garageHash);
    return IsObjectPartiallyInsideGarage(garageHash, _entity, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8B32ACE6326A7546 | Since: 323 | API-Set: unknown
 */
export function isVisible(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return IsObjectVisible(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x11D1E53A726891FE | Since: 323 | API-Set: unknown
 */
export function isPickupWeaponValid(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return IsPickupWeaponObjectValid(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x024A60DEB0EA69F0 | Since: 323 | API-Set: unknown
 */
export function isPlayerEntirelyInsideGarage(garageHash, player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof garageHash === 'string')
        garageHash = GetHashKey(garageHash);
    return IsPlayerEntirelyInsideGarage(garageHash, _player, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1761DC5D8471CBAA | Since: 323 | API-Set: unknown
 */
export function isPlayerPartiallyInsideGarage(garageHash, player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof garageHash === 'string')
        garageHash = GetHashKey(garageHash);
    return IsPlayerPartiallyInsideGarage(garageHash, _player, 0);
}
/**
 * An angled area is an X-Z oriented rectangle with three parameters:
 * 1. origin: the mid-point along a base edge of the rectangle;
 * 2. extent: the mid-point of opposite base edge on the other Z;
 * 3. width: the length of the base edge; (named derived from logging strings ``CNetworkRoadNodeWorldStateData``).
 *
 * The oriented rectangle can then be derived from the direction of the two points (``norm(origin - extent)``), its orthonormal, and the width, e.g:
 * 1. golf_mp https://i.imgur.com/JhsQAK9.png
 * 2. am_taxi https://i.imgur.com/TJWCZaT.jpg
 *
 * Hash: 0x2A70BAE8883E4C81 | Since: 323 | API-Set: unknown
 */
export function isPointInAngledArea(pos, x1, y1, z1, x2, y2, z2, width, debug, includeZ) {
    return IsPointInAngledArea(pos.x, pos.y, pos.z, x1, y1, z1, x2, y2, z2, width, debug, includeZ);
}
/**
 * No comment provided
 *
 * Hash: 0xADF084FB8F075D06 | Since: 1604 | API-Set: unknown
 */
export function isPropLightOverriden(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return Citizen.invokeNative('0xADF084FB8F075D06', __object);
}
/**
 * No comment provided
 *
 * Hash: 0xADBE4809F19F927A | Since: 323 | API-Set: unknown
 */
export function onlyCleanUpWhenOutOfRange(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    MarkObjectForDeletion(__object);
}
/**
 * No comment provided
 *
 * Hash: 0xC7F29CA00F46350E | Since: 323 | API-Set: unknown
 */
export function openAllBarriersForRace() {
    Citizen.invokeNative('0xC7F29CA00F46350E', false);
}
/**
 * No comment provided
 *
 * Hash: 0xD76EEEF746057FD6 | Since: 505 | API-Set: unknown
 */
export function placeOnGroundOrObjectProperly(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return PlaceObjectOnGroundProperly2(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x58A850EAEE20FAA3 | Since: 323 | API-Set: unknown
 */
export function placeOnGroundProperly(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return PlaceObjectOnGroundProperly(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x006E4B040ED37EC3 | Since: 1868 | API-Set: unknown
 */
export function playAutoStartAnim() {
    Citizen.invokeNative('0x006E4B040ED37EC3', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x92AEFB5F6E294023 | Since: 323 | API-Set: unknown
 */
export function preventCollectionOfPortablePickup(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    PreventCollectionOfPortablePickup(__object, false, false);
}
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x27F9D613092159CF | Since: 323 | API-Set: unknown
 */
export function removeAllPickupsOfType(pickupHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    RemoveAllPickupsOfType(pickupHash);
}
/**
 * CDoor and CDoorSystemData still internally allocated (and their associations between doorHash, modelHash, and coordinates).
 * Only its NetObj removed and flag ``*(v2 + 192) |= 8u`` (1604 retail) toggled.
 *
 * Hash: 0x464D8E1427156FE4 | Since: 323 | API-Set: unknown
 */
export function removeDoorFromSystem(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    RemoveDoorFromSystem(doorHash, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4A39DB43E47CF3AA | Since: 323 | API-Set: unknown
 */
export function removeHighDetailModel(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    RemoveObjectHighDetailModel(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x3288D8ACAECD2AB2 | Since: 323 | API-Set: unknown
 */
export function removePickup(pickup) {
    RemovePickup(pickup);
}
/**
 * draws circular marker at pos
 * -1 = none
 * 0 = red
 * 1 = green
 * 2 = blue
 * 3 = green larger
 * 4 = nothing
 * 5 = green small
 *
 * Hash: 0x3430676B11CDF21D | Since: 323 | API-Set: unknown
 */
export function renderFakePickupGlow(pos, colorIndex) {
    RenderFakePickupGlow(pos.x, pos.y, pos.z, colorIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xAFE24E4D29249E4A | Since: 1734 | API-Set: unknown
 */
export function rotate(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return Citizen.invokeNative('0xAFE24E4D29249E4A', __object, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x406137F8EF90EAF5 | Since: 323 | API-Set: unknown
 */
export function setActivatePhysicsAsSoonAsItIsUnfrozen(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(__object, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x826D1EE4D1CAFC78 | Since: 505 | API-Set: unknown
 */
export function setCustomPickupWeaponHash(pickupHash, pickup) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    Citizen.invokeNative('0x826D1EE4D1CAFC78', pickupHash, pickup);
}
/**
 * Requires a component_at_*_flsh to be attached to the weapon object
 *
 * Hash: 0xBCE595371A5FBAAF | Since: 323 | API-Set: unknown
 */
export function setCutscenesWeaponFlashlightOnThisFrame(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetCreateWeaponObjectLightSource(__object, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8CAAB2BD3EA58BD4 | Since: 1011 | API-Set: unknown
 */
export function setDisableCollisionsBetweenCarsAndCarParachute() {
    Citizen.invokeNative('0x8CAAB2BD3EA58BD4', undefined);
}
/**
 * Activate the physics to: "xs_prop_arena_{flipper,wall,bollard,turntable,pit}"
 *
 * Hash: 0x911024442F4898F0 | Since: 1604 | API-Set: unknown
 */
export function setDriveArticulatedJoint(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetEnableArenaPropPhysics(__object, toggle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB20834A7DD3D8896 | Since: 1604 | API-Set: unknown
 */
export function setDriveArticulatedJointWithInflictor(_object, toggle, ped) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetEnableArenaPropPhysicsOnPed(__object, toggle, 0, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB2D0BDE54F0E8E5A | Since: 323 | API-Set: unknown
 */
export function setEntityFlagRenderSmallShadow(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0xB2D0BDE54F0E8E5A', __object, toggle);
}
/**
 * Sets entity+38 to C (when false) or 0xFF3f (when true)
 *
 * Hash: 0xD05A3241B9A86F19 | Since: 1180 | API-Set: unknown
 */
export function setEntityFlagSuppressShadow(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xD05A3241B9A86F19', _entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF538081986E49E9D | Since: 323 | API-Set: unknown
 */
export function setForceThisFrame(pos) {
    SetForceObjectThisFrame(pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1C57C94A6446492A | Since: 1604 | API-Set: unknown
 */
export function setIsArticulated(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0x1C57C94A6446492A', __object, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB5B7742424BD4445 | Since: 1604 | API-Set: unknown
 */
export function setIsBall(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0xB5B7742424BD4445', __object, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x78857FC65CADB909 | Since: 323 | API-Set: unknown
 */
export function setLocalPlayerCanCollectPortablePickups(toggle) {
    SetLocalPlayerCanCollectPortablePickups(toggle);
}
/**
 * Maximum amount of pickup models that can be disallowed is 30.
 *
 * Hash: 0x88EAEC617CD26926 | Since: 323 | API-Set: unknown
 */
export function setLocalPlayerPermittedToCollectPickupsWithModel(modelHash, toggle) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    SetLocalPlayerCanUsePickupsWithThisModel(modelHash, toggle);
}
/**
 * Hardcoded not to work in multiplayer environments.
 * When you set locked to 0 the door open and to 1 the door close
 * `OBJECT::SET_LOCKED_UNSTREAMED_IN_DOOR_OF_TYPE(${prop_gate_prison_01}, 1845.0, 2605.0, 45.0, 0, 0.0, 50.0, 0);  //door open`
 *
 * `OBJECT::SET_LOCKED_UNSTREAMED_IN_DOOR_OF_TYPE(${prop_gate_prison_01}, 1845.0, 2605.0, 45.0, 1, 0.0, 50.0, 0);  //door close`
 *
 * Hash: 0x9B12F9A24FABEDB0 | Since: 323 | API-Set: unknown
 */
export function setLockedUnstreamedInDoorOfType(modelHash, pos, locked, xRotMult, yRotMult, zRotMult) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    DoorControl(modelHash, pos.x, pos.y, pos.z, locked, xRotMult, yRotMult, zRotMult);
}
/**
 * No comment provided
 *
 * Hash: 0x0BF3B3BD47D79C08 | Since: 323 | API-Set: unknown
 */
export function setMaxNumPortablePickupsCarriedByPlayer(modelHash, _number) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    SetMaxNumPortablePickupsCarriedByPlayer(modelHash, _number);
}
/**
 * Overrides the climbing/blocking flags of the object, used in the native scripts mostly for "prop_dock_bouy_*"
 *
 * Hash: 0x4D89D607CB3DD1D2 | Since: 323 | API-Set: unknown
 */
export function setAllowLowLodBuoyancy(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectAllowLowLodBuoyancy(__object, toggle);
}
/**
 * Overrides a flag on the object which determines if the object should be avoided by a vehicle in task CTaskVehicleGoToPointWithAvoidanceAutomobile.
 *
 * Hash: 0x77F33F2CCF64B3AA | Since: 323 | API-Set: unknown
 */
export function setForceVehiclesToAvoid(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectForceVehiclesToAvoid(__object, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x62454A641B41F3C5 | Since: 678 | API-Set: unknown
 */
export function setGlowInSameTeam(pickup) {
    Citizen.invokeNative('0x62454A641B41F3C5', pickup);
}
/**
 * No comment provided
 *
 * Hash: 0x734E1714D077DA9A | Since: 1604 | API-Set: unknown
 */
export function setIsAPressurePlate(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0x734E1714D077DA9A', __object, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC6033D32241F6FB5 | Since: 323 | API-Set: unknown
 */
export function setIsSpecialGolfball(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0xC6033D32241F6FB5', __object, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x3B2FD68DB5F8331C | Since: 757 | API-Set: unknown
 */
export function setIsVisibleInMirrors(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0x3B2FD68DB5F8331C', __object, toggle);
}
/**
 * Adjust the physics parameters of a prop, or otherwise known as "object". This is useful for simulated gravity.
 *
 * Other parameters seem to be unknown.
 *
 * p2: seems to be weight and gravity related. Higher value makes the obj fall faster. Very sensitive?
 * p3: seems similar to p2
 * p4: makes obj fall slower the higher the value
 * p5: similar to p4
 *
 * Hash: 0xF6DF6E90DE7DF90F | Since: 323 | API-Set: unknown
 */
export function setPhysicsParams(_object, weight, gravity, buoyancy) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectPhysicsParams(__object, weight, 0, 0, 0, 0, gravity, 0, 0, 0, 0, buoyancy);
}
/**
 * No comment provided
 *
 * Hash: 0x96EE0EBA0163DF80 | Since: 791 | API-Set: unknown
 */
export function setSpeedBoostAmount(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectStuntPropSpeedup(__object, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDF6CA0330F2E737B | Since: 791 | API-Set: unknown
 */
export function setSpeedBoostDuration(_object, duration) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectStuntPropDuration(__object, duration);
}
/**
 * No comment provided
 *
 * Hash: 0xEB6F1A9B5510A5D2 | Since: 323 | API-Set: unknown
 */
export function setTakesDamageFromCollidingWithBuildings() {
    Citizen.invokeNative('0xEB6F1A9B5510A5D2', undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8A7391690F5AFD81 | Since: 323 | API-Set: unknown
 */
export function setTargettable(_object, targettable) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTargettable(__object, targettable, undefined);
}
/**
 * enum ObjectPaintVariants
 * {
 * Pacific = 0,
 * Azure = 1,
 * Nautical = 2,
 * Continental = 3,
 * Battleship = 4,
 * Intrepid = 5,
 * Uniform = 6,
 * Classico = 7,
 * Mediterranean = 8,
 * Command = 9,
 * Mariner = 10,
 * Ruby = 11,
 * Vintage = 12,
 * Pristine = 13,
 * Merchant = 14,
 * Voyager = 15
 * };
 *
 * Hash: 0x971DA0055324D033 | Since: 323 | API-Set: unknown
 */
export function setTintIndex(_object, textureVariation) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTextureVariation(__object, textureVariation);
}
/**
 * No comment provided
 *
 * Hash: 0x31F924B53EADDF65 | Since: 323 | API-Set: unknown
 */
export function setOnlyAllowAmmoCollectionWhenLow() {
    Citizen.invokeNative('0x31F924B53EADDF65', false);
}
/**
 * No comment provided
 *
 * Hash: 0x318516E02DE3ECE2 | Since: 323 | API-Set: unknown
 */
export function setPickupGenerationRangeMultiplier(multiplier) {
    SetPickupGenerationRangeMultiplier(multiplier);
}
/**
 * p1 is always 0.51. This native is called before SET_PICKUP_REGENERATION_TIME in all occurances.
 *
 * Hash: 0x0596843B34B95CE5 | Since: 505 | API-Set: unknown
 */
export function setPickupGlowOffset(pickup) {
    Citizen.invokeNative('0x0596843B34B95CE5', pickup, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x3ED2B83AB2E82799 | Since: 757 | API-Set: unknown
 */
export function setPickupHiddenWhenUncollectable(pickup, toggle) {
    SetPickupHiddenWhenUncollectable(pickup, toggle);
}
/**
 * p0 is either 0 or 50 in scripts.
 *
 * Hash: 0x8CFF648FBD7330F1 | Since: 757 | API-Set: unknown
 */
export function setPickupAlphaWhenTransparent() {
    Citizen.invokeNative('0x8CFF648FBD7330F1', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x39A5FB7EAF150840 | Since: 678 | API-Set: unknown
 */
export function setPickupArrowMarker(pickup, toggle) {
    Citizen.invokeNative('0x39A5FB7EAF150840', pickup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x7813E8B8C4AE4799 | Since: 1734 | API-Set: unknown
 */
export function setPickupCollectableInVehicle(pickup) {
    Citizen.invokeNative('0x7813E8B8C4AE4799', pickup);
}
/**
 * p1 is always -0.2 in scripts and p2 is always true in scripts.
 *
 * Hash: 0xA08FE5E49BDC39DD | Since: 323 | API-Set: unknown
 */
export function setPickupObjectGlowOffset(pickup) {
    Citizen.invokeNative('0xA08FE5E49BDC39DD', pickup, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x27F248C3FEBFAAD3 | Since: 2372 | API-Set: unknown
 */
export function setPickupGlowWhenUncollectable(pickup, toggle) {
    Citizen.invokeNative('0x27F248C3FEBFAAD3', pickup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8881C98A31117998 | Since: 678 | API-Set: unknown
 */
export function setPickupObjectTransparentWhenUncollectable(pickup, toggle) {
    Citizen.invokeNative('0x8881C98A31117998', pickup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x78015C9B4B3ECC9D | Since: 323 | API-Set: unknown
 */
export function setPickupRegenerationTime(pickup, duration) {
    SetPickupRegenerationTime(pickup, duration);
}
/**
 * No comment provided
 *
 * Hash: 0xBFFE53AE7E67FCDC | Since: 1290 | API-Set: unknown
 */
export function setPickupTrackDamageEvents(pickup, toggle) {
    Citizen.invokeNative('0xBFFE53AE7E67FCDC', pickup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x858EC9FD25DE04AA | Since: 757 | API-Set: unknown
 */
export function setPickupTransparentWhenUncollectable(pickup, toggle) {
    Citizen.invokeNative('0x858EC9FD25DE04AA', pickup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1C1B69FAE509BA97 | Since: 757 | API-Set: unknown
 */
export function setPickupUncollectable(pickup, toggle) {
    SetPickupUncollectable(pickup, toggle);
}
/**
 * Disabling/enabling a player from getting pickups. From the scripts:
 *
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);`
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);`
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 1);`
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);`
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_armour_standard}, 0);`
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_armour_standard}, 1);`
 *
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x616093EC6B139DD9 | Since: 323 | API-Set: unknown
 */
export function setPlayerPermittedToCollectPickupsOfType(player, pickupHash, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    ToggleUsePickupsForPlayer(_player, pickupHash, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x46F3ADD1E2D5BAF2 | Since: 877 | API-Set: unknown
 */
export function setPortablePickupPersist(pickup, toggle) {
    Citizen.invokeNative('0x46F3ADD1E2D5BAF2', pickup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x63ECF581BC70E363 | Since: 1365 | API-Set: unknown
 */
export function setProjectilesShouldExplodeOnContact(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x63ECF581BC70E363', _entity, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5F048334B4A4E774 | Since: 1493 | API-Set: unknown
 */
export function setPropLightColor(_object, r, g, b) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return SetObjectLightColor(__object, false, r, g, b);
}
/**
 * No comment provided
 *
 * Hash: 0x31574B1B41268673 | Since: 2189 | API-Set: unknown
 */
export function setPropTintIndex() {
    Citizen.invokeNative('0x31574B1B41268673', undefined, undefined);
}
/**
 * Hardcoded to not work in multiplayer.
 *
 *
 * Used to lock/unlock doors to interior areas of the game.
 *
 * (Possible) Door Types:
 *
 * https://pastebin.com/9S2m3qA4
 *
 * Heading is either 1, 0 or -1 in the scripts. Means default closed(0) or opened either into(1) or out(-1) of the interior.
 * Locked means that the heading is locked.
 * p6 is always 0.
 *
 * 225 door types, model names and coords found in stripclub.c4:
 * https://pastebin.com/gywnbzsH
 *
 * get door info: https://pastebin.com/i14rbekD
 *
 * Hash: 0xF82D8F1926A02C3D | Since: 323 | API-Set: unknown
 */
export function setStateOfClosestDoorOfType(_type, pos, locked, heading) {
    if (typeof _type === 'string')
        _type = GetHashKey(_type);
    SetStateOfClosestDoorOfType(_type, pos.x, pos.y, pos.z, locked, heading, false);
}
/**
 * Defines the state of a destructible object.
 * Use the GET_RAYFIRE_MAP_OBJECT native to find an object's handle with its name / coords.
 * State 2 == object just spawned
 * State 4 == Beginning of the animation
 * State 6 == Start animation
 * State 9 == End of the animation
 *
 * Hash: 0x5C29F698D404C5E1 | Since: 323 | API-Set: unknown
 */
export function setStateOfRayfireMap(_object, state) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetStateOfRayfireMapObject(__object, state);
}
/**
 * No comment provided
 *
 * Hash: 0x53E0DF1A2A3CF0CA | Since: 323 | API-Set: unknown
 */
export function setTeamPickup(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetTeamPickupObject(__object, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF12E33034D887F66 | Since: 1103 | API-Set: unknown
 */
export function setTintIndexClosestBuildingOfType(pos, radius, modelHash, textureVariation) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return SetTextureVariationOfClosestObjectOfType(pos.x, pos.y, pos.z, radius, modelHash, textureVariation);
}
/**
 * No comment provided
 *
 * Hash: 0x1A6CBB06E2D0D79D | Since: 1604 | API-Set: unknown
 */
export function setWeaponImpactsApplyGreaterForce(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0x1A6CBB06E2D0D79D', __object, false);
}
/**
 * Returns true if the object has finished moving.
 *
 * If false, moves the object towards the specified X, Y and Z coordinates with the specified X, Y and Z speed.
 *
 * See also: https://gtagmodding.com/opcode-database/opcode/034E/
 * Has to be looped until it returns true.
 *
 * Hash: 0x2FDFF4107B8C1147 | Since: 323 | API-Set: unknown
 */
export function slide(_object, toX, toY, toZ, speedX, speedY, speedZ, collision) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return SlideObject(__object, toX, toY, toZ, speedX, speedY, speedZ, collision);
}
/**
 * enum ePickupRewardType
 * {
 * PICKUP_REWARD_TYPE_AMMO = (1 << 0),
 * PICKUP_REWARD_TYPE_BULLET_MP = (1 << 1),
 * PICKUP_REWARD_TYPE_MISSILE_MP = (1 << 2),
 * PICKUP_REWARD_TYPE_GRENADE_LAUNCHER_MP = (1 << 3),
 * PICKUP_REWARD_TYPE_ARMOUR = (1 << 4),
 * PICKUP_REWARD_TYPE_HEALTH = (1 << 5),
 * PICKUP_REWARD_TYPE_HEALTH_VARIABLE = PICKUP_REWARD_TYPE_HEALTH,
 * PICKUP_REWARD_TYPE_MONEY_FIXED = (1 << 6),
 * PICKUP_REWARD_TYPE_MONEY_VARIABLE = PICKUP_REWARD_TYPE_MONEY_FIXED,
 * PICKUP_REWARD_TYPE_WEAPON = (1 << 7),
 * PICKUP_REWARD_TYPE_STAT = (1 << 8),
 * PICKUP_REWARD_TYPE_STAT_VARIABLE = PICKUP_REWARD_TYPE_STAT,
 * PICKUP_REWARD_TYPE_VEHICLE_FIX = (1 << 9),
 * PICKUP_REWARD_TYPE_FIREWORK_MP = (1 << 10),
 * };
 *
 * Hash: 0xF92099527DB8E2A7 | Since: 323 | API-Set: unknown
 */
export function suppressPickupRewardType(rewardType, suppress) {
    Citizen.invokeNative('0xF92099527DB8E2A7', rewardType, suppress);
}
/**
 * No comment provided
 *
 * Hash: 0x8DCA505A5C196F05 | Since: 1180 | API-Set: unknown
 */
export function suppressPickupSoundForPickup() {
    Citizen.invokeNative('0x8DCA505A5C196F05', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB252BC036B525623 | Since: 323 | API-Set: unknown
 */
export function trackVisibility(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    TrackObjectVisibility(__object);
}
/**
 * Sets the 34th and 35th object flags related to player peds.
 *
 * Hash: 0xB39F03368DB0CAA2 | Since: 3258 | API-Set: unknown
 */
export function setTargettableByPlayer(_object, setFlag34, setFlag35) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTargettableByPlayer(__object, setFlag34, setFlag35);
}
/**
 * No comment provided
 *
 * Hash: 0x08BD8BA5BDE2C2FA | Since: 3407 | API-Set: unknown
 */
export function setPickupGlowDisabled(pickup, toggle) {
    Citizen.invokeNative('0x08BD8BA5BDE2C2FA', pickup, toggle);
}
