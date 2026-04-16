import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * BOOL isAudible = If explosion makes a sound.
 * BOOL isInvisible = If the explosion is invisible or not.
 * 
 * explosionType: https://alloc8or.re/gta5/doc/enums/eExplosionTag.txt
 * 
 * Hash: 0xE3AD2BDBAEE269AC | Since: 323 | API-Set: unknown
 */
export function addExplosion(pos: Vector3, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number, noDamage: boolean): void {
    AddExplosion(pos.x, pos.y, pos.z, explosionType, damageScale, isAudible, isInvisible, cameraShake, noDamage);
}

/**
 * isAudible: If explosion makes a sound.
 * isInvisible: If the explosion is invisible or not.
 * explosionType: See ADD_EXPLOSION.
 * 
 * Hash: 0x36DD3FE58B5E5212 | Since: 323 | API-Set: unknown
 */
export function addExplosionWithUserVfx(pos: Vector3, explosionType: number, explosionFx: number | string, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void {
    if (typeof explosionFx === 'string') explosionFx = GetHashKey(explosionFx)
    AddExplosionWithUserVfx(pos.x, pos.y, pos.z, explosionType, explosionFx, damageScale, isAudible, isInvisible, cameraShake);
}

/**
 * isAudible: If explosion makes a sound.
 * isInvisible: If the explosion is invisible or not.
 * explosionType: See ADD_EXPLOSION.
 * 
 * Hash: 0x172AA1B624FA1013 | Since: 323 | API-Set: unknown
 */
export function addOwnedExplosion(ped: number | IPed, pos: Vector3, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    AddOwnedExplosion(_ped, pos.x, pos.y, pos.z, explosionType, damageScale, isAudible, isInvisible, cameraShake);
}

/**
 * Returns TRUE if it found something. FALSE if not.
 * 
 * Hash: 0x352A9F6BCF90081F | Since: 323 | API-Set: unknown
 */
export function getClosestPos(pos: Vector3): [boolean, Vector3] {
    return GetClosestFirePos(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x50CAD495A460B305 | Since: 323 | API-Set: unknown
 */
export function getNumberOfsInRange(pos: Vector3, radius: number): number {
    return GetNumberOfFiresInRange(pos.x, pos.y, pos.z, radius);
}

/**
 * Returns a handle to the first entity within the a circle spawned inside the 2 points from a radius.
 * 
 * explosionType: See ADD_EXPLOSION.
 * 
 * Hash: 0x14BA4BA137AF6CEC | Since: 323 | API-Set: unknown
 */
export function getOwnerOfExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): number {
    return GetEntityInsideExplosionArea(explosionType, x1, y1, z1, x2, y2, z2, radius);
}

/**
 * explosionType: See ADD_EXPLOSION.
 * 
 * Hash: 0xB3CD51E3DB86F176 | Since: 1290 | API-Set: unknown
 */
export function getOwnerOfExplosionInSphere(explosionType: number, pos: Vector3, radius: number): number {
    return GetEntityInsideExplosionSphere(explosionType, pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x28D3FED7190D3A0B | Since: 323 | API-Set: unknown
 */
export function isEntityOn(entity: number | IEntity): boolean {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return IsEntityOnFire(_entity);
}

/**
 * explosionType: See ADD_EXPLOSION.
 * 
 * Hash: 0x6070104B699B2EF4 | Since: 323 | API-Set: unknown
 */
export function isExplosionActiveInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean {
    return IsExplosionActiveInArea(explosionType, x1, y1, z1, x2, y2, z2);
}

/**
 * explosionType: See ADD_EXPLOSION, -1 for any explosion type
 * 
 * 
 * Hash: 0xA079A6C51525DC4B | Since: 323 | API-Set: unknown
 */
export function isExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): boolean {
    return IsExplosionInAngledArea(explosionType, x1, y1, z1, x2, y2, z2, width);
}

/**
 * explosionType: See ADD_EXPLOSION.
 * 
 * Hash: 0x2E2EBA0EE7CED0E0 | Since: 323 | API-Set: unknown
 */
export function isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean {
    return IsExplosionInArea(explosionType, x1, y1, z1, x2, y2, z2);
}

/**
 * explosionType: See ADD_EXPLOSION.
 * 
 * Hash: 0xAB0F816885B0E483 | Since: 323 | API-Set: unknown
 */
export function isExplosionInSphere(explosionType: number, pos: Vector3, radius: number): boolean {
    return IsExplosionInSphere(explosionType, pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x7FF548385680673F | Since: 323 | API-Set: unknown
 */
export function removeScript(fireHandle: number): void {
    RemoveScriptFire(fireHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8F390AC4155099BA | Since: 1734 | API-Set: unknown
 */
export function setFlammabilityMultiplier(): void {
    SetFireSpreadRate(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6A9D9708F6F23DF | Since: 323 | API-Set: unknown
 */
export function startEntity(entity: number | IEntity): number {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return StartEntityFire(_entity);
}

/**
 * Starts a fire:
 * 
 * xyz: Location of fire
 * maxChildren: The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.
 * isGasFire: Whether or not the fire is powered by gasoline.
 * 
 * Hash: 0x6B83617E04503888 | Since: 323 | API-Set: unknown
 */
export function startScript(pos: Vector3, maxChildren: number, isGasFire: boolean): number {
    return StartScriptFire(pos.x, pos.y, pos.z, maxChildren, isGasFire);
}

/**
 * No comment provided
 * 
 * Hash: 0x7F0DD2EBBB651AFF | Since: 323 | API-Set: unknown
 */
export function stopEntity(entity: number | IEntity): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    StopEntityFire(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x056A8A219B8E829F | Since: 323 | API-Set: unknown
 */
export function stopInRange(pos: Vector3, radius: number): void {
    StopFireInRange(pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x56581E7E219D6263 | Since: 3717 | API-Set: unknown
 */
export function getMaximumNumberOfWaterCannons(): number {
    return Citizen.invokeNative('0x56581E7E219D6263');
}

/**
 * No comment provided
 * 
 * Hash: 0xE61CBD3ED80E7327 | Since: 3717 | API-Set: unknown
 */
export function getWaterCannonCoords(index: number): Vector3 {
    return new Vector3(Citizen.invokeNative('0xE61CBD3ED80E7327', index));
}

/**
 * No comment provided
 * 
 * Hash: 0x5241DB47A8B8AD54 | Since: 3570 | API-Set: unknown
 */
export function networkExpectExplosionEventsForPlayer(expect: boolean, player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    Citizen.invokeNative('0x5241DB47A8B8AD54', expect, _player);
}

