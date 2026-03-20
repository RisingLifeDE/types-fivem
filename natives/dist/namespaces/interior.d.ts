import { Vector3, IEntity } from '@risinglife/fivem-shared';
/**
 * More info: http://gtaforums.com/topic/836367-adding-props-to-interiors/
 *
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Hash: 0x55E86AF2712B36A1 | Since: 323
 */
export declare function activateEntitySet(interior: number, entitySetName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x483ACA1176CA93F1 | Since: 1103
 */
export declare function activateGroupsUsingCamera(): void;
/**
 * No comment provided
 *
 * Hash: 0x3F6167F351168730 | Since: 323
 */
export declare function addPickupToRoomByName(pickup: any, roomName: string): void;
/**
 * `Does something similar to INTERIOR::DISABLE_INTERIOR`
 *
 * Hash: 0xD9175F941610DB54 | Since: 323
 */
export declare function cap(interior: number, toggle: boolean): void;
/**
 * Immediately removes entity from an interior. Like sets entity to `limbo` room.
 *
 * Hash: 0x85D5422B2039A70D | Since: 2189
 */
export declare function clearStateOfEntity(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xB365FC0C4E27FFA7 | Since: 323
 */
export declare function clearRoomForEntity(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x23B59D8912F94246 | Since: 323
 */
export declare function clearRoomForGameViewport(): void;
/**
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Hash: 0x420BD37289EEE162 | Since: 323
 */
export declare function deactivateEntitySet(interior: number, entitySetName: string): void;
/**
 * Example:
 * This removes the interior from the strip club and when trying to walk inside the player just falls:
 *
 * `INTERIOR::DISABLE_INTERIOR(118018, true);`
 *
 * Hash: 0x6170941419D7D8EC | Since: 323
 */
export declare function disable(interior: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9E6542F0CE8E70A3 | Since: 323
 */
export declare function disableMetroSystem(toggle: boolean): void;
/**
 * This is the native that is used to hide the exterior of GTA Online apartment buildings when you are inside an apartment.
 *
 * More info: http://gtaforums.com/topic/836301-hiding-gta-online-apartment-exteriors/
 *
 * Hash: 0xA97F257D0151A6AB | Since: 323
 */
export declare function enableExteriorCullModelThisFrame(mapObjectHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x50C375537449F369 | Since: 757
 */
export declare function enableShadowCullModelThisFrame(mapObjectHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x7ECDF98587E92DEC | Since: 1604
 */
export declare function enableStadiumProbesThisFrame(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x38C1CB1CB119A016 | Since: 1493
 */
export declare function forceActivatingTrackingOnEntity(): void;
/**
 * No comment provided
 *
 * Hash: 0x52923C4710DD9907 | Since: 323
 */
export declare function forceRoomForEntity(entity: number | IEntity, interior: number, roomHashKey: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x920D853F3E17F1DA | Since: 323
 */
export declare function forceRoomForGameViewport(interiorID: number, roomHashKey: number | string): void;
/**
 * Returns interior ID from specified coordinates. If coordinates are outside, then it returns 0.
 *
 * Example for VB.NET
 * Dim interiorID As Integer = Native.Function.Call(Of Integer)(Hash.GET_INTERIOR_AT_COORDS, X, Y, Z)
 *
 * Hash: 0xB0F7F8663821D9C3 | Since: 323
 */
export declare function getAtCoords(pos: Vector3): number;
/**
 * Returns the interior ID representing the requested interior at that location (if found?). The supplied interior string is not the same as the one used to load the interior.
 *
 * `Use: INTERIOR::UNPIN_INTERIOR(INTERIOR::GET_INTERIOR_AT_COORDS_WITH_TYPE(x, y, z, interior))`
 *
 * Interior types include: "V_Michael", "V_Franklins", "V_Franklinshouse", etc.. you can find them in the scripts.
 *
 * Not a very useful native as you could just use GET_INTERIOR_AT_COORDS instead and get the same result, without even having to specify the interior type.
 *
 * Hash: 0x05B7A89BD78797FC | Since: 323
 */
export declare function getAtCoordsWithType(pos: Vector3, interiorType: string): number;
/**
 * Hashed version of GET_INTERIOR_AT_COORDS_WITH_TYPE
 *
 * Hash: 0xF0F77ADB9F67E79D | Since: 323
 */
export declare function getAtCoordsWithTypehash(pos: Vector3, typeHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xEC4CF9FCB29A4424 | Since: 323
 */
export declare function getFromCollision(pos: Vector3): number;
/**
 * Returns the handle of the interior that the entity is in. Returns 0 if outside.
 *
 * Hash: 0x2107BA504071A6BB | Since: 323
 */
export declare function getFromEntity(entity: number | IEntity): number;
/**
 * Returns the current interior id from gameplay camera
 *
 * Hash: 0xE7D267EC6CA966C3 | Since: 1604
 */
export declare function getFromPrimaryView(): number;
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
 * Hash: 0xE4A84ABF135EF91A | Since: 323
 */
export declare function getGroupId(interior: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF49B58631D9E22D9 | Since: 1493
 */
export declare function getHeading(interior: number): number;
/**
 * No comment provided
 *
 * Hash: 0x252BDC06B73FA6EA | Since: 1290
 */
export declare function getLocationAndNamehash(interior: number): [Vector3, number];
/**
 * `Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY`
 *
 * Hash: 0x399685DB942336BC | Since: 323
 */
export declare function getKeyForEntityInRoom(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0x9E3B3E6D66F6E22F | Since: 323
 */
export declare function getOffsetFromInWorldCoords(interior: number, pos: Vector3): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xA6575914D2A0B450 | Since: 323
 */
export declare function getRoomKeyForGameViewport(): number;
/**
 * Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.
 *
 * Hash: 0x47C2A06D4F5F424B | Since: 323
 */
export declare function getRoomKeyFromEntity(entity: number | IEntity): number;
/**
 * Returns true if the collision at the specified coords is marked as being outside (false if there's an interior)
 *
 * Hash: 0xEEA5AC2EDA7C33E8 | Since: 323
 */
export declare function isCollisionMarkedOutside(pos: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0x92BAC8ACF88CEC26 | Since: 323
 */
export declare function isCapped(interior: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBC5115A5A939DD15 | Since: 323
 */
export declare function isDisabled(interior: number): boolean;
/**
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Hash: 0x35F7DD45E8C0A16D | Since: 323
 */
export declare function isEntitySetActive(interior: number, entitySetName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6726BDCCC1932F0E | Since: 323
 */
export declare function isReady(interior: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBC72B5D7A1CBD54D | Since: 323
 */
export declare function isScene(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x26B0E73D7EAAF4D3 | Since: 323
 */
export declare function isValid(interior: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2CA429C029CCF247 | Since: 323
 */
export declare function pinInMemory(interior: number): void;
/**
 * No comment provided
 *
 * Hash: 0x41F37C3427C75AE0 | Since: 323
 */
export declare function refresh(interior: number): void;
/**
 * No comment provided
 *
 * Hash: 0x82EBB79E258FA2B7 | Since: 323
 */
export declare function retainEntityIn(entity: number | IEntity, interior: number): void;
/**
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Hash: 0xC1F1920BAF281317 | Since: 877
 */
export declare function setEntitySetTintIndex(interior: number, entitySetName: string, color: number): void;
/**
 * Only used once in the entire game scripts.
 * Does not actually return anything.
 *
 * Hash: 0x4C2330E61D3DEB56 | Since: 323
 */
export declare function setInUse(interior: number): boolean;
/**
 * Jenkins hash _might_ be 0xFC227584.
 *
 * Hash: 0x7241CCB7D020DB69 | Since: 791
 */
export declare function setIsExteriorOnly(entity: number | IEntity, toggle: boolean): void;
/**
 * `Usage: INTERIOR::SET_ROOM_FOR_GAME_VIEWPORT_BY_KEY(INTERIOR::GET_KEY_FOR_ENTITY_IN_ROOM(PLAYER::PLAYER_PED_ID()));`
 *
 * Hash: 0x405DC2AEF6AF95B9 | Since: 323
 */
export declare function setRoomForGameViewportByKey(roomHashKey: number | string): void;
/**
 * Example of use (carmod_shop)
 * `INTERIOR::SET_ROOM_FOR_GAME_VIEWPORT_BY_NAME("V_CarModRoom");`
 *
 * Hash: 0xAF348AFCB575A441 | Since: 323
 */
export declare function setRoomForGameViewportByName(roomName: string): void;
/**
 * `Does something similar to INTERIOR::DISABLE_INTERIOR.`
 *
 * `You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside.`
 *
 * Hash: 0x261CCE7EED010641 | Since: 323
 */
export declare function unpin(interior: number): void;
