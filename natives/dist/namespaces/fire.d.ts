import { Vector3, IEntity, IPed, IPlayer } from '@risinglife/fivem-shared';
/**
 * BOOL isAudible = If explosion makes a sound.
 * BOOL isInvisible = If the explosion is invisible or not.
 *
 * explosionType: https://alloc8or.re/gta5/doc/enums/eExplosionTag.txt
 *
 * Hash: 0xE3AD2BDBAEE269AC | Since: 323
 */
export declare function addExplosion(pos: Vector3, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number, noDamage: boolean): void;
/**
 * isAudible: If explosion makes a sound.
 * isInvisible: If the explosion is invisible or not.
 * explosionType: See ADD_EXPLOSION.
 *
 * Hash: 0x36DD3FE58B5E5212 | Since: 323
 */
export declare function addExplosionWithUserVfx(pos: Vector3, explosionType: number, explosionFx: number | string, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
/**
 * isAudible: If explosion makes a sound.
 * isInvisible: If the explosion is invisible or not.
 * explosionType: See ADD_EXPLOSION.
 *
 * Hash: 0x172AA1B624FA1013 | Since: 323
 */
export declare function addOwnedExplosion(ped: number | IPed, pos: Vector3, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
/**
 * Returns TRUE if it found something. FALSE if not.
 *
 * Hash: 0x352A9F6BCF90081F | Since: 323
 */
export declare function getClosestPos(pos: Vector3): [boolean, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x50CAD495A460B305 | Since: 323
 */
export declare function getNumberOfsInRange(pos: Vector3, radius: number): number;
/**
 * Returns a handle to the first entity within the a circle spawned inside the 2 points from a radius.
 *
 * explosionType: See ADD_EXPLOSION.
 *
 * Hash: 0x14BA4BA137AF6CEC | Since: 323
 */
export declare function getOwnerOfExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): number;
/**
 * explosionType: See ADD_EXPLOSION.
 *
 * Hash: 0xB3CD51E3DB86F176 | Since: 1290
 */
export declare function getOwnerOfExplosionInSphere(explosionType: number, pos: Vector3, radius: number): number;
/**
 * No comment provided
 *
 * Hash: 0x28D3FED7190D3A0B | Since: 323
 */
export declare function isEntityOn(entity: number | IEntity): boolean;
/**
 * explosionType: See ADD_EXPLOSION.
 *
 * Hash: 0x6070104B699B2EF4 | Since: 323
 */
export declare function isExplosionActiveInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
/**
 * explosionType: See ADD_EXPLOSION, -1 for any explosion type
 *
 *
 * Hash: 0xA079A6C51525DC4B | Since: 323
 */
export declare function isExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): boolean;
/**
 * explosionType: See ADD_EXPLOSION.
 *
 * Hash: 0x2E2EBA0EE7CED0E0 | Since: 323
 */
export declare function isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
/**
 * explosionType: See ADD_EXPLOSION.
 *
 * Hash: 0xAB0F816885B0E483 | Since: 323
 */
export declare function isExplosionInSphere(explosionType: number, pos: Vector3, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7FF548385680673F | Since: 323
 */
export declare function removeScript(fireHandle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8F390AC4155099BA | Since: 1734
 */
export declare function setFlammabilityMultiplier(): void;
/**
 * No comment provided
 *
 * Hash: 0xF6A9D9708F6F23DF | Since: 323
 */
export declare function startEntity(entity: number | IEntity): number;
/**
 * Starts a fire:
 *
 * xyz: Location of fire
 * maxChildren: The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.
 * isGasFire: Whether or not the fire is powered by gasoline.
 *
 * Hash: 0x6B83617E04503888 | Since: 323
 */
export declare function startScript(pos: Vector3, maxChildren: number, isGasFire: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x7F0DD2EBBB651AFF | Since: 323
 */
export declare function stopEntity(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x056A8A219B8E829F | Since: 323
 */
export declare function stopInRange(pos: Vector3, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0x56581E7E219D6263 | Since: 3717
 */
export declare function getMaximumNumberOfWaterCannons(): number;
/**
 * No comment provided
 *
 * Hash: 0xE61CBD3ED80E7327 | Since: 3717
 */
export declare function getWaterCannonCoords(index: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x5241DB47A8B8AD54 | Since: 3570
 */
export declare function networkExpectExplosionEventsForPlayer(expect: boolean, player: number | string | IPlayer): void;
