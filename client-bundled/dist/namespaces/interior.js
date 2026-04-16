import { Vector3 } from '@risinglife/fivem-shared';
/**
 * More info: http://gtaforums.com/topic/836367-adding-props-to-interiors/
 *
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Hash: 0x55E86AF2712B36A1 | Since: 323 | API-Set: unknown
 */
export function activateEntitySet(interior, entitySetName) {
    ActivateInteriorEntitySet(interior, entitySetName);
}
/**
 * No comment provided
 *
 * Hash: 0x483ACA1176CA93F1 | Since: 1103 | API-Set: unknown
 */
export function activateGroupsUsingCamera() {
    Citizen.invokeNative('0x483ACA1176CA93F1');
}
/**
 * No comment provided
 *
 * Hash: 0x3F6167F351168730 | Since: 323 | API-Set: unknown
 */
export function addPickupToRoomByName(pickup, roomName) {
    AddPickupToInteriorRoomByName(pickup, roomName);
}
/**
 * `Does something similar to INTERIOR::DISABLE_INTERIOR`
 *
 * Hash: 0xD9175F941610DB54 | Since: 323 | API-Set: unknown
 */
export function cap(interior, toggle) {
    CapInterior(interior, toggle);
}
/**
 * Immediately removes entity from an interior. Like sets entity to `limbo` room.
 *
 * Hash: 0x85D5422B2039A70D | Since: 2189 | API-Set: unknown
 */
export function clearStateOfEntity(entity) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    ClearInteriorForEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xB365FC0C4E27FFA7 | Since: 323 | API-Set: unknown
 */
export function clearRoomForEntity(entity) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    ClearRoomForEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x23B59D8912F94246 | Since: 323 | API-Set: unknown
 */
export function clearRoomForGameViewport() {
    ClearRoomForGameViewport();
}
/**
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Hash: 0x420BD37289EEE162 | Since: 323 | API-Set: unknown
 */
export function deactivateEntitySet(interior, entitySetName) {
    DeactivateInteriorEntitySet(interior, entitySetName);
}
/**
 * Example:
 * This removes the interior from the strip club and when trying to walk inside the player just falls:
 *
 * `INTERIOR::DISABLE_INTERIOR(118018, true);`
 *
 * Hash: 0x6170941419D7D8EC | Since: 323 | API-Set: unknown
 */
export function disable(interior, toggle) {
    DisableInterior(interior, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x9E6542F0CE8E70A3 | Since: 323 | API-Set: unknown
 */
export function disableMetroSystem(toggle) {
    Citizen.invokeNative('0x9E6542F0CE8E70A3', toggle);
}
/**
 * This is the native that is used to hide the exterior of GTA Online apartment buildings when you are inside an apartment.
 *
 * More info: http://gtaforums.com/topic/836301-hiding-gta-online-apartment-exteriors/
 *
 * Hash: 0xA97F257D0151A6AB | Since: 323 | API-Set: unknown
 */
export function enableExteriorCullModelThisFrame(mapObjectHash) {
    if (typeof mapObjectHash === 'string')
        mapObjectHash = GetHashKey(mapObjectHash);
    EnableExteriorCullModelThisFrame(mapObjectHash);
}
/**
 * No comment provided
 *
 * Hash: 0x50C375537449F369 | Since: 757 | API-Set: unknown
 */
export function enableShadowCullModelThisFrame(mapObjectHash) {
    if (typeof mapObjectHash === 'string')
        mapObjectHash = GetHashKey(mapObjectHash);
    EnableScriptCullModelThisFrame(mapObjectHash);
}
/**
 * No comment provided
 *
 * Hash: 0x7ECDF98587E92DEC | Since: 1604 | API-Set: unknown
 */
export function enableStadiumProbesThisFrame(toggle) {
    Citizen.invokeNative('0x7ECDF98587E92DEC', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x38C1CB1CB119A016 | Since: 1493 | API-Set: unknown
 */
export function forceActivatingTrackingOnEntity() {
    Citizen.invokeNative('0x38C1CB1CB119A016', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x52923C4710DD9907 | Since: 323 | API-Set: unknown
 */
export function forceRoomForEntity(entity, interior, roomHashKey) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    if (typeof roomHashKey === 'string')
        roomHashKey = GetHashKey(roomHashKey);
    ForceRoomForEntity(_entity, interior, roomHashKey);
}
/**
 * No comment provided
 *
 * Hash: 0x920D853F3E17F1DA | Since: 323 | API-Set: unknown
 */
export function forceRoomForGameViewport(interiorID, roomHashKey) {
    if (typeof roomHashKey === 'string')
        roomHashKey = GetHashKey(roomHashKey);
    ForceRoomForGameViewport(interiorID, roomHashKey);
}
/**
 * Returns interior ID from specified coordinates. If coordinates are outside, then it returns 0.
 *
 * Example for VB.NET
 * Dim interiorID As Integer = Native.Function.Call(Of Integer)(Hash.GET_INTERIOR_AT_COORDS, X, Y, Z)
 *
 * Hash: 0xB0F7F8663821D9C3 | Since: 323 | API-Set: unknown
 */
export function getAtCoords(pos) {
    return GetInteriorAtCoords(pos.x, pos.y, pos.z);
}
/**
 * Returns the interior ID representing the requested interior at that location (if found?). The supplied interior string is not the same as the one used to load the interior.
 *
 * `Use: INTERIOR::UNPIN_INTERIOR(INTERIOR::GET_INTERIOR_AT_COORDS_WITH_TYPE(x, y, z, interior))`
 *
 * Interior types include: "V_Michael", "V_Franklins", "V_Franklinshouse", etc.. you can find them in the scripts.
 *
 * Not a very useful native as you could just use GET_INTERIOR_AT_COORDS instead and get the same result, without even having to specify the interior type.
 *
 * Hash: 0x05B7A89BD78797FC | Since: 323 | API-Set: unknown
 */
export function getAtCoordsWithType(pos, interiorType) {
    return GetInteriorAtCoordsWithType(pos.x, pos.y, pos.z, interiorType);
}
/**
 * Hashed version of GET_INTERIOR_AT_COORDS_WITH_TYPE
 *
 * Hash: 0xF0F77ADB9F67E79D | Since: 323 | API-Set: unknown
 */
export function getAtCoordsWithTypehash(pos, typeHash) {
    if (typeof typeHash === 'string')
        typeHash = GetHashKey(typeHash);
    return GetInteriorAtCoordsWithTypehash(pos.x, pos.y, pos.z, typeHash);
}
/**
 * No comment provided
 *
 * Hash: 0xEC4CF9FCB29A4424 | Since: 323 | API-Set: unknown
 */
export function getFromCollision(pos) {
    return GetInteriorFromCollision(pos.x, pos.y, pos.z);
}
/**
 * Returns the handle of the interior that the entity is in. Returns 0 if outside.
 *
 * Hash: 0x2107BA504071A6BB | Since: 323 | API-Set: unknown
 */
export function getFromEntity(entity) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return GetInteriorFromEntity(_entity);
}
/**
 * Returns the current interior id from gameplay camera
 *
 * Hash: 0xE7D267EC6CA966C3 | Since: 1604 | API-Set: unknown
 */
export function getFromPrimaryView() {
    return GetInteriorFromPrimaryView();
}
/**
 * Returns the group ID of the specified interior.
 * 0 = default
 * 1 = subway station, subway tracks, sewers
 * 3 = train tunnel under mirror park
 * 5 = tunnel near del perro
 * 6 = train tunnel near chilliad
 * 7 = train tunnel near josiah
 * 8 = train tunnel in sandy shores
 * 9 = braddock tunnel (near chilliad)
 * 12 = tunnel under fort zancudo
 * 14 = train tunnel under cypress flats
 * 18 = rockford plaza parking garage
 * 19 = arcadius parking garage
 * 20 = union depository parking garage
 * 21 = fib parking garage
 *
 * Hash: 0xE4A84ABF135EF91A | Since: 323 | API-Set: unknown
 */
export function getGroupId(interior) {
    return GetInteriorGroupId(interior);
}
/**
 * No comment provided
 *
 * Hash: 0xF49B58631D9E22D9 | Since: 1493 | API-Set: unknown
 */
export function getHeading(interior) {
    return GetInteriorHeading(interior);
}
/**
 * No comment provided
 *
 * Hash: 0x252BDC06B73FA6EA | Since: 1290 | API-Set: unknown
 */
export function getLocationAndNamehash(interior) {
    return GetInteriorLocationAndNamehash(interior);
}
/**
 * `Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY`
 *
 * Hash: 0x399685DB942336BC | Since: 323 | API-Set: unknown
 */
export function getKeyForEntityInRoom(entity) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return GetKeyForEntityInRoom(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x9E3B3E6D66F6E22F | Since: 323 | API-Set: unknown
 */
export function getOffsetFromInWorldCoords(interior, pos) {
    return new Vector3(GetOffsetFromInteriorInWorldCoords(interior, pos.x, pos.y, pos.z));
}
/**
 * No comment provided
 *
 * Hash: 0xA6575914D2A0B450 | Since: 323 | API-Set: unknown
 */
export function getRoomKeyForGameViewport() {
    return GetRoomKeyForGameViewport();
}
/**
 * Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.
 *
 * Hash: 0x47C2A06D4F5F424B | Since: 323 | API-Set: unknown
 */
export function getRoomKeyFromEntity(entity) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return GetRoomKeyFromEntity(_entity);
}
/**
 * Returns true if the collision at the specified coords is marked as being outside (false if there's an interior)
 *
 * Hash: 0xEEA5AC2EDA7C33E8 | Since: 323 | API-Set: unknown
 */
export function isCollisionMarkedOutside(pos) {
    return IsCollisionMarkedOutside(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x92BAC8ACF88CEC26 | Since: 323 | API-Set: unknown
 */
export function isCapped(interior) {
    return IsInteriorCapped(interior);
}
/**
 * No comment provided
 *
 * Hash: 0xBC5115A5A939DD15 | Since: 323 | API-Set: unknown
 */
export function isDisabled(interior) {
    return IsInteriorDisabled(interior);
}
/**
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Hash: 0x35F7DD45E8C0A16D | Since: 323 | API-Set: unknown
 */
export function isEntitySetActive(interior, entitySetName) {
    return IsInteriorEntitySetActive(interior, entitySetName);
}
/**
 * No comment provided
 *
 * Hash: 0x6726BDCCC1932F0E | Since: 323 | API-Set: unknown
 */
export function isReady(interior) {
    return IsInteriorReady(interior);
}
/**
 * No comment provided
 *
 * Hash: 0xBC72B5D7A1CBD54D | Since: 323 | API-Set: unknown
 */
export function isScene() {
    return IsInteriorScene();
}
/**
 * No comment provided
 *
 * Hash: 0x26B0E73D7EAAF4D3 | Since: 323 | API-Set: unknown
 */
export function isValid(interior) {
    return IsValidInterior(interior);
}
/**
 * No comment provided
 *
 * Hash: 0x2CA429C029CCF247 | Since: 323 | API-Set: unknown
 */
export function pinInMemory(interior) {
    PinInteriorInMemory(interior);
}
/**
 * No comment provided
 *
 * Hash: 0x41F37C3427C75AE0 | Since: 323 | API-Set: unknown
 */
export function refresh(interior) {
    RefreshInterior(interior);
}
/**
 * No comment provided
 *
 * Hash: 0x82EBB79E258FA2B7 | Since: 323 | API-Set: unknown
 */
export function retainEntityIn(entity, interior) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    Citizen.invokeNative('0x82EBB79E258FA2B7', _entity, interior);
}
/**
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Hash: 0xC1F1920BAF281317 | Since: 877 | API-Set: unknown
 */
export function setEntitySetTintIndex(interior, entitySetName, color) {
    SetInteriorEntitySetColor(interior, entitySetName, color);
}
/**
 * Only used once in the entire game scripts.
 * Does not actually return anything.
 *
 * Hash: 0x4C2330E61D3DEB56 | Since: 323 | API-Set: unknown
 */
export function setInUse(interior) {
    return Citizen.invokeNative('0x4C2330E61D3DEB56', interior);
}
/**
 * Jenkins hash _might_ be 0xFC227584.
 *
 * Hash: 0x7241CCB7D020DB69 | Since: 791 | API-Set: unknown
 */
export function setIsExteriorOnly(entity, toggle) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    Citizen.invokeNative('0x7241CCB7D020DB69', _entity, toggle);
}
/**
 * `Usage: INTERIOR::SET_ROOM_FOR_GAME_VIEWPORT_BY_KEY(INTERIOR::GET_KEY_FOR_ENTITY_IN_ROOM(PLAYER::PLAYER_PED_ID()));`
 *
 * Hash: 0x405DC2AEF6AF95B9 | Since: 323 | API-Set: unknown
 */
export function setRoomForGameViewportByKey(roomHashKey) {
    if (typeof roomHashKey === 'string')
        roomHashKey = GetHashKey(roomHashKey);
    Citizen.invokeNative('0x405DC2AEF6AF95B9', roomHashKey);
}
/**
 * Example of use (carmod_shop)
 * `INTERIOR::SET_ROOM_FOR_GAME_VIEWPORT_BY_NAME("V_CarModRoom");`
 *
 * Hash: 0xAF348AFCB575A441 | Since: 323 | API-Set: unknown
 */
export function setRoomForGameViewportByName(roomName) {
    Citizen.invokeNative('0xAF348AFCB575A441', roomName);
}
/**
 * `Does something similar to INTERIOR::DISABLE_INTERIOR.`
 *
 * `You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside.`
 *
 * Hash: 0x261CCE7EED010641 | Since: 323 | API-Set: unknown
 */
export function unpin(interior) {
    UnpinInterior(interior);
}
