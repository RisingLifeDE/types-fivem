import { Vector3, IEntity, IObject } from '@risinglife/fivem-shared';
/**
 * Returns all rope handles. The data returned adheres to the following layout:
 *
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 *
 * Hash: 0x760A2D67 | Since: unknown | API-Set: client
 */
export declare function getAllRopes(): number;
/**
 * ```cpp
 * enum eRopeFlags
 * {
 * DrawShadowEnabled = 2,
 * Breakable = 4,
 * RopeUnwindingFront = 8,
 * RopeWinding = 32
 * }
 * ```
 *
 * Hash: 0xA80FFE99 | Since: unknown | API-Set: client
 */
export declare function getRopeFlags(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0x66D70EA3 | Since: unknown | API-Set: client
 */
export declare function getRopeLengthChangeRate(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF341E6CA | Since: unknown | API-Set: client
 */
export declare function getRopeTimeMultiplier(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0x2AB2E0F6 | Since: unknown | API-Set: client
 */
export declare function getRopeUpdateOrder(rope: number): number;
/**
 * Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.
 * Returns a rope type which can be passed into [ADD_ROPE](#\_0xE832D760399EB220) to use a custom rope design.
 * Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.
 *
 * Hash: 0xF213AE8D | Since: unknown | API-Set: client
 */
export declare function registerRopeData(numSections: number, radius: number, diffuseTextureName: string, normalMapName: string, distanceMappingScale: number, uvScaleX: number, uvScaleY: number, specularFresnel: number, specularFalloff: number, specularIntensity: number, bumpiness: number, color: number): number;
/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 *
 * Hash: 0x6D712937 | Since: unknown | API-Set: client
 */
export declare function resetFlyThroughWindscreenParams(): void;
/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 *
 * Hash: 0x4D3118ED | Since: unknown | API-Set: client
 */
export declare function setFlyThroughWindscreenParams(vehMinSpeed: number, unkMinSpeed: number, unkModifier: number, minDamage: number): boolean;
/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 *
 * Hash: 0xE62FC73 | Since: unknown | API-Set: client
 */
export declare function setRopesCreateNetworkWorldState(shouldCreate: boolean): void;
/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 *
 * Hash: 0x69B680A7 | Since: unknown | API-Set: client
 */
export declare function setRopeLengthChangeRate(rope: number, lengthChangeRate: number): void;
/**
 * No comment provided
 *
 * Hash: 0x710311ADF0E20730 | Since: 323 | API-Set: unknown
 */
export declare function activate(entity: number | IEntity): void;
/**
 * Creates a rope at the specific position, that extends in the specified direction when not attached to any entities.
 * __
 *
 * Add_Rope(pos.x,pos.y,pos.z,0.0,0.0,0.0,20.0,4,20.0,1.0,0.0,false,false,false,5.0,false,NULL)
 *
 * When attached, Position<vector> does not matter
 * When attached, Angle<vector> does not matter
 *
 * Rope Type:
 * 4 and bellow is a thick rope
 * 5 and up are small metal wires
 * 0 crashes the game
 *
 * Max_length - Rope is forced to this length, generally best to keep this the same as your rope length.
 *
 * windingSpeed - Speed the Rope is being winded, using native START_ROPE_WINDING. Set positive for winding and negative for unwinding.
 *
 * Rigid - If max length is zero, and this is set to false the rope will become rigid (it will force a specific distance, what ever length is, between the objects).
 *
 * breakable - Whether or not shooting the rope will break it.
 *
 * unkPtr - unknown ptr, always 0 in orig scripts
 * __
 *
 * Lengths can be calculated like so:
 *
 * float distance = abs(x1 - x2) + abs(y1 - y2) + abs(z1 - z2); // Rope length
 *
 *
 * NOTES:
 *
 * Rope does NOT interact with anything you attach it to, in some cases it make interact with the world AFTER it breaks (seems to occur if you set the type to -1).
 *
 * Rope will sometimes contract and fall to the ground like you'd expect it to, but since it doesn't interact with the world the effect is just jaring.
 *
 * Hash: 0xE832D760399EB220 | Since: 323 | API-Set: unknown
 */
export declare function addRope(pos: Vector3, rot: Vector3, length: number, ropeType: number, maxLength: number, minLength: number, windingSpeed: number, rigid: boolean, breakWhenShot: boolean): [number, any];
/**
 * No comment provided
 *
 * Hash: 0xE37F721824571784 | Since: 323 | API-Set: unknown
 */
export declare function applyImpulseToCloth(pos: Vector3, vecX: number, vecY: number, vecZ: number, impulse: number): void;
/**
 * Attaches entity 1 to entity 2.
 *
 * Hash: 0x3D95EC8B6D940AC3 | Since: 323 | API-Set: unknown
 */
export declare function attachEntitiesToRope(ropeId: number, ent1: number | IEntity, ent2: number | IEntity, ent1_x: number, ent1_y: number, ent1_z: number, ent2_x: number, ent2_y: number, ent2_z: number, length: number): [any, any];
/**
 * The position supplied can be anywhere, and the entity should anchor relative to that point from it's origin.
 *
 * Hash: 0x4B490A6832559A65 | Since: 323 | API-Set: unknown
 */
export declare function attachRopeToEntity(ropeId: number, entity: number | IEntity, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x2E648D16F6E308F3 | Since: 323 | API-Set: unknown
 */
export declare function breakEntityGlass(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xAA5D6B1888E4DB20 | Since: 323 | API-Set: unknown
 */
export declare function deleteChildRope(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x52B4829281364649 | Since: 323 | API-Set: unknown
 */
export declare function deleteRope(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBCF3026912A8647D | Since: 323 | API-Set: unknown
 */
export declare function detachRopeFromEntity(ropeId: number, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xFD5448BE3111ED96 | Since: 323 | API-Set: unknown
 */
export declare function doesRopeExist(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x271C9D3ACA5D6409 | Since: 323 | API-Set: unknown
 */
export declare function doesScriptOwnRope(ropeId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8214A4B5A7A33612 | Since: 323 | API-Set: unknown
 */
export declare function getCgoffset(entity: number | IEntity): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x8C520A929415BCD2 | Since: 3407 | API-Set: unknown
 */
export declare function getDamping(entity: number | IEntity, _type: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x0C112765300C7E1E | Since: 505 | API-Set: unknown
 */
export declare function getIsEntityAFrag(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x21BB0FBD3E217C2D | Since: 323 | API-Set: unknown
 */
export declare function getRopeLastVertexCoord(ropeId: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xEA61CA8E80F09E4D | Since: 323 | API-Set: unknown
 */
export declare function getRopeVertexCoord(ropeId: number, vertex: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x3655F544CD30F0B5 | Since: 323 | API-Set: unknown
 */
export declare function getRopeVertexCount(ropeId: number): number;
/**
 * No comment provided
 *
 * Hash: 0x84DE3B5FB3E666F0 | Since: 323 | API-Set: unknown
 */
export declare function isRopeAttachedAtBothEnds(): [boolean, number];
/**
 * Rope presets can be found in the gamefiles. One example is "ropeFamily3", it is NOT a hash but rather a string.
 *
 * Hash: 0xCBB203C04D1ABD27 | Since: 323 | API-Set: unknown
 */
export declare function loadRopeData(ropeId: number, rope_preset: string): void;
/**
 * No comment provided
 *
 * Hash: 0x2B320CF14146B69A | Since: 323 | API-Set: unknown
 */
export declare function pinRopeVertex(ropeId: number, vertex: number, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xCC6E963682533882 | Since: 323 | API-Set: unknown
 */
export declare function resetDisableBreaking(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xF2D0E6A75CC05597 | Since: 323 | API-Set: unknown
 */
export declare function ropeAreTexturesLoaded(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBC0CE682D4D05650 | Since: 323 | API-Set: unknown
 */
export declare function ropeAttachVirtualBoundGeom(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB1B6216CA2E7B55E | Since: 323 | API-Set: unknown
 */
export declare function ropeChangeScriptOwner(): void;
/**
 * No comment provided
 *
 * Hash: 0x5389D48EFA2F079A | Since: 323 | API-Set: unknown
 */
export declare function ropeConvertToSimple(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA1AE736541B0FCA3 | Since: 1868 | API-Set: unknown
 */
export declare function ropeDrawEnabled(): number;
/**
 * No comment provided
 *
 * Hash: 0xF159A63806BB5BA8 | Since: 323 | API-Set: unknown
 */
export declare function ropeDrawShadowEnabled(toggle: boolean): number;
/**
 * Forces a rope to a certain length.
 *
 * Hash: 0xD009F759A723DB1B | Since: 323 | API-Set: unknown
 */
export declare function ropeForceLength(ropeId: number, length: number): void;
/**
 * No comment provided
 *
 * Hash: 0x73040398DFF9A4A6 | Since: 323 | API-Set: unknown
 */
export declare function ropeGetDistanceBetweenEnds(ropeId: number): number;
/**
 * Loads rope textures for all ropes in the current scene.
 *
 * Hash: 0x9B9039DBF2D258C1 | Since: 323 | API-Set: unknown
 */
export declare function ropeLoadTextures(): void;
/**
 * Reset a rope to a certain length.
 *
 * Hash: 0xC16DE94D9BEA14A0 | Since: 323 | API-Set: unknown
 */
export declare function ropeResetLength(ropeId: number, length: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB743F735C03D7810 | Since: 323 | API-Set: unknown
 */
export declare function ropeSetRefframevelocityColliderorder(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x36CCB9BE67B970FD | Since: 323 | API-Set: unknown
 */
export declare function ropeSetSmoothReelin(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDC57A637A20006ED | Since: 323 | API-Set: unknown
 */
export declare function ropeSetUpdateOrder(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC8D667EE52114ABA | Since: 323 | API-Set: unknown
 */
export declare function ropeSetUpdatePinverts(ropeId: number): void;
/**
 * Unloads rope textures for all ropes in the current scene.
 *
 * Hash: 0x6CE36C35C1AC8163 | Since: 323 | API-Set: unknown
 */
export declare function ropeUnloadTextures(): void;
/**
 * No comment provided
 *
 * Hash: 0xD8FA3908D7B86904 | Since: 323 | API-Set: unknown
 */
export declare function setCgoffset(entity: number | IEntity, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xBE520D9761FF811F | Since: 323 | API-Set: unknown
 */
export declare function setCgAtBoundcenter(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xEEA3B200A6FEB65B | Since: 323 | API-Set: unknown
 */
export declare function setDamping(entity: number | IEntity, vertex: number, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5CEC1A84620E7D5B | Since: 323 | API-Set: unknown
 */
export declare function setDisableBreaking(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x01BA3AED21C16CFB | Since: 323 | API-Set: unknown
 */
export declare function setDisableFragDamage(_object: number | IObject, toggle: boolean): void;
/**
 * Related to the lower-end of a vehicles fTractionCurve, e.g., from standing starts and acceleration from low/zero speeds.
 *
 * Hash: 0xAA6A6098851C396F | Since: 1604 | API-Set: unknown
 */
export declare function setInArenaMode(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9EBD751E5787BAF2 | Since: 791 | API-Set: unknown
 */
export declare function setInStuntMode(): void;
/**
 * No comment provided
 *
 * Hash: 0x15F944730C832252 | Since: 463 | API-Set: unknown
 */
export declare function setUseKinematic(entity: number | IEntity, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x538D1179EC1AA9A9 | Since: 323 | API-Set: unknown
 */
export declare function startRopeUnwindingFront(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1461C72C889E343E | Since: 323 | API-Set: unknown
 */
export declare function startRopeWinding(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFFF3A50779EFBBB3 | Since: 323 | API-Set: unknown
 */
export declare function stopRopeUnwindingFront(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCB2D4AB84A19AA7C | Since: 323 | API-Set: unknown
 */
export declare function stopRopeWinding(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4B5AE2EEE4A8F180 | Since: 323 | API-Set: unknown
 */
export declare function unpinRopeVertex(ropeId: number, vertex: number): void;
