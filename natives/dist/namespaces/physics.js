import { Vector3 } from '@risinglife/fivem-shared';
/**
 * No comment provided
 *
 * Hash: 0x710311ADF0E20730 | Since: 323
 */
export function activate(entity) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    ActivatePhysics(_entity);
}
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
 * Hash: 0xE832D760399EB220 | Since: 323
 */
export function addRope(pos, rot, length, ropeType, maxLength, minLength, windingSpeed, rigid, breakWhenShot) {
    return AddRope(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, length, ropeType, maxLength, minLength, windingSpeed, false, false, rigid, 0, breakWhenShot);
}
/**
 * No comment provided
 *
 * Hash: 0xE37F721824571784 | Since: 323
 */
export function applyImpulseToCloth(pos, vecX, vecY, vecZ, impulse) {
    ApplyImpulseToCloth(pos.x, pos.y, pos.z, vecX, vecY, vecZ, impulse);
}
/**
 * Attaches entity 1 to entity 2.
 *
 * Hash: 0x3D95EC8B6D940AC3 | Since: 323
 */
export function attachEntitiesToRope(ropeId, ent1, ent2, ent1_x, ent1_y, ent1_z, ent2_x, ent2_y, ent2_z, length) {
    const _ent1 = typeof ent1 == 'object' ? ent1.handle() : ent1;
    const _ent2 = typeof ent2 == 'object' ? ent2.handle() : ent2;
    return AttachEntitiesToRope(ropeId, _ent1, _ent2, ent1_x, ent1_y, ent1_z, ent2_x, ent2_y, ent2_z, length, false, false);
}
/**
 * The position supplied can be anywhere, and the entity should anchor relative to that point from it's origin.
 *
 * Hash: 0x4B490A6832559A65 | Since: 323
 */
export function attachRopeToEntity(ropeId, entity, pos) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    AttachRopeToEntity(ropeId, _entity, pos.x, pos.y, pos.z, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2E648D16F6E308F3 | Since: 323
 */
export function breakEntityGlass(entity) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    BreakEntityGlass(_entity, 0, 0, 0, 0, 0, 0, 0, 0, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xAA5D6B1888E4DB20 | Since: 323
 */
export function deleteChildRope(ropeId) {
    DeleteChildRope(ropeId);
}
/**
 * No comment provided
 *
 * Hash: 0x52B4829281364649 | Since: 323
 */
export function deleteRope(ropeId) {
    DeleteRope(ropeId);
}
/**
 * No comment provided
 *
 * Hash: 0xBCF3026912A8647D | Since: 323
 */
export function detachRopeFromEntity(ropeId, entity) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    DetachRopeFromEntity(ropeId, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xFD5448BE3111ED96 | Since: 323
 */
export function doesRopeExist() {
    return DoesRopeExist();
}
/**
 * No comment provided
 *
 * Hash: 0x271C9D3ACA5D6409 | Since: 323
 */
export function doesScriptOwnRope(ropeId) {
    return DoesRopeBelongToThisScript(ropeId);
}
/**
 * No comment provided
 *
 * Hash: 0x8214A4B5A7A33612 | Since: 323
 */
export function getCgoffset(entity) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return new Vector3(GetCgoffset(_entity));
}
/**
 * No comment provided
 *
 * Hash: 0x8C520A929415BCD2 | Since: 3407
 */
export function getDamping(entity, _type) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return new Vector3(Citizen.invokeNative('0x8C520A929415BCD2', _entity, _type));
}
/**
 * No comment provided
 *
 * Hash: 0x0C112765300C7E1E | Since: 505
 */
export function getIsEntityAFrag(_object) {
    const __object = typeof _object == 'object' ? _object.handle() : _object;
    return GetHasObjectFragInst(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x21BB0FBD3E217C2D | Since: 323
 */
export function getRopeLastVertexCoord(ropeId) {
    return new Vector3(GetRopeLastVertexCoord(ropeId));
}
/**
 * No comment provided
 *
 * Hash: 0xEA61CA8E80F09E4D | Since: 323
 */
export function getRopeVertexCoord(ropeId, vertex) {
    return new Vector3(GetRopeVertexCoord(ropeId, vertex));
}
/**
 * No comment provided
 *
 * Hash: 0x3655F544CD30F0B5 | Since: 323
 */
export function getRopeVertexCount(ropeId) {
    return GetRopeVertexCount(ropeId);
}
/**
 * No comment provided
 *
 * Hash: 0x84DE3B5FB3E666F0 | Since: 323
 */
export function isRopeAttachedAtBothEnds() {
    return Citizen.invokeNative('0x84DE3B5FB3E666F0');
}
/**
 * Rope presets can be found in the gamefiles. One example is "ropeFamily3", it is NOT a hash but rather a string.
 *
 * Hash: 0xCBB203C04D1ABD27 | Since: 323
 */
export function loadRopeData(ropeId, rope_preset) {
    LoadRopeData(ropeId, rope_preset);
}
/**
 * No comment provided
 *
 * Hash: 0x2B320CF14146B69A | Since: 323
 */
export function pinRopeVertex(ropeId, vertex, pos) {
    PinRopeVertex(ropeId, vertex, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xCC6E963682533882 | Since: 323
 */
export function resetDisableBreaking(_object) {
    const __object = typeof _object == 'object' ? _object.handle() : _object;
    Citizen.invokeNative('0xCC6E963682533882', __object);
}
/**
 * No comment provided
 *
 * Hash: 0xF2D0E6A75CC05597 | Since: 323
 */
export function ropeAreTexturesLoaded() {
    return RopeAreTexturesLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0xBC0CE682D4D05650 | Since: 323
 */
export function ropeAttachVirtualBoundGeom(ropeId) {
    Citizen.invokeNative('0xBC0CE682D4D05650', ropeId, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB1B6216CA2E7B55E | Since: 323
 */
export function ropeChangeScriptOwner() {
    Citizen.invokeNative('0xB1B6216CA2E7B55E', undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5389D48EFA2F079A | Since: 323
 */
export function ropeConvertToSimple(ropeId) {
    RopeConvertToSimple(ropeId);
}
/**
 * No comment provided
 *
 * Hash: 0xA1AE736541B0FCA3 | Since: 1868
 */
export function ropeDrawEnabled() {
    return Citizen.invokeNative('0xA1AE736541B0FCA3', false);
}
/**
 * No comment provided
 *
 * Hash: 0xF159A63806BB5BA8 | Since: 323
 */
export function ropeDrawShadowEnabled(toggle) {
    return RopeDrawShadowEnabled(toggle);
}
/**
 * Forces a rope to a certain length.
 *
 * Hash: 0xD009F759A723DB1B | Since: 323
 */
export function ropeForceLength(ropeId, length) {
    RopeForceLength(ropeId, length);
}
/**
 * No comment provided
 *
 * Hash: 0x73040398DFF9A4A6 | Since: 323
 */
export function ropeGetDistanceBetweenEnds(ropeId) {
    return RopeGetDistanceBetweenEnds(ropeId);
}
/**
 * Loads rope textures for all ropes in the current scene.
 *
 * Hash: 0x9B9039DBF2D258C1 | Since: 323
 */
export function ropeLoadTextures() {
    RopeLoadTextures();
}
/**
 * Reset a rope to a certain length.
 *
 * Hash: 0xC16DE94D9BEA14A0 | Since: 323
 */
export function ropeResetLength(ropeId, length) {
    RopeResetLength(ropeId, length);
}
/**
 * No comment provided
 *
 * Hash: 0xB743F735C03D7810 | Since: 323
 */
export function ropeSetRefframevelocityColliderorder(ropeId) {
    Citizen.invokeNative('0xB743F735C03D7810', ropeId, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x36CCB9BE67B970FD | Since: 323
 */
export function ropeSetSmoothReelin(ropeId) {
    Citizen.invokeNative('0x36CCB9BE67B970FD', ropeId, false);
}
/**
 * No comment provided
 *
 * Hash: 0xDC57A637A20006ED | Since: 323
 */
export function ropeSetUpdateOrder(ropeId) {
    RopeSetUpdateOrder(ropeId, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC8D667EE52114ABA | Since: 323
 */
export function ropeSetUpdatePinverts(ropeId) {
    RopeSetUpdatePinverts(ropeId);
}
/**
 * Unloads rope textures for all ropes in the current scene.
 *
 * Hash: 0x6CE36C35C1AC8163 | Since: 323
 */
export function ropeUnloadTextures() {
    RopeUnloadTextures();
}
/**
 * No comment provided
 *
 * Hash: 0xD8FA3908D7B86904 | Since: 323
 */
export function setCgoffset(entity, pos) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    SetCgoffset(_entity, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xBE520D9761FF811F | Since: 323
 */
export function setCgAtBoundcenter(entity) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    SetCgAtBoundcenter(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xEEA3B200A6FEB65B | Since: 323
 */
export function setDamping(entity, vertex, value) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    SetDamping(_entity, vertex, value);
}
/**
 * No comment provided
 *
 * Hash: 0x5CEC1A84620E7D5B | Since: 323
 */
export function setDisableBreaking(_object, toggle) {
    const __object = typeof _object == 'object' ? _object.handle() : _object;
    SetDisableBreaking(__object, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x01BA3AED21C16CFB | Since: 323
 */
export function setDisableFragDamage(_object, toggle) {
    const __object = typeof _object == 'object' ? _object.handle() : _object;
    SetDisableFragDamage(__object, toggle);
}
/**
 * Related to the lower-end of a vehicles fTractionCurve, e.g., from standing starts and acceleration from low/zero speeds.
 *
 * Hash: 0xAA6A6098851C396F | Since: 1604
 */
export function setInArenaMode(toggle) {
    SetLaunchControlEnabled(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x9EBD751E5787BAF2 | Since: 791
 */
export function setInStuntMode() {
    Citizen.invokeNative('0x9EBD751E5787BAF2', false);
}
/**
 * No comment provided
 *
 * Hash: 0x15F944730C832252 | Since: 463
 */
export function setUseKinematic(entity, toggle) {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    SetEntityProofUnk(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x538D1179EC1AA9A9 | Since: 323
 */
export function startRopeUnwindingFront(ropeId) {
    StartRopeUnwindingFront(ropeId);
}
/**
 * No comment provided
 *
 * Hash: 0x1461C72C889E343E | Since: 323
 */
export function startRopeWinding(ropeId) {
    StartRopeWinding(ropeId);
}
/**
 * No comment provided
 *
 * Hash: 0xFFF3A50779EFBBB3 | Since: 323
 */
export function stopRopeUnwindingFront(ropeId) {
    StopRopeUnwindingFront(ropeId);
}
/**
 * No comment provided
 *
 * Hash: 0xCB2D4AB84A19AA7C | Since: 323
 */
export function stopRopeWinding(ropeId) {
    StopRopeWinding(ropeId);
}
/**
 * No comment provided
 *
 * Hash: 0x4B5AE2EEE4A8F180 | Since: 323
 */
export function unpinRopeVertex(ropeId, vertex) {
    UnpinRopeVertex(ropeId, vertex);
}
