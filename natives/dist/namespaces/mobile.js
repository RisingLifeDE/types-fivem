import { IEntity, IVehicle } from '@risinglife/fivem-shared';
/**
 * This one is weird and seems to return a TRUE state regardless of whether the phone is visible on screen or tucked away.
 *
 *
 * I can confirm the above. This function is hard-coded to always return 1.
 *
 * Hash: 0xC4E2813898C97A4B | Since: 323
 */
export function canPhoneBeSeenOnScreen() {
    return CanPhoneBeSeenOnScreen();
}
/**
 * No comment provided
 *
 * Hash: 0xFDE8F069C542D126 | Since: 323
 */
export function cellCamActivate() {
    CellCamActivate(false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x015C49A93E3E086E | Since: 323
 */
export function cellCamActivateSelfieMode(toggle) {
    CellCamActivateSelfieMode(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xA2CCBE62CD4C91A4 | Since: 323
 */
export function cellCamActivateShallowDofMode(toggle) {
    Citizen.invokeNative('0xA2CCBE62CD4C91A4', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x439E9BC95B7E7FBE | Since: 323
 */
export function cellCamIsCharVisibleNoFaceCheck(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return CellCamIsCharVisibleNoFaceCheck(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xAC2890471901861C | Since: 323
 */
export function cellCamSetSelfieModeDistanceScaling(distanceScaling) {
    Citizen.invokeNative('0xAC2890471901861C', distanceScaling);
}
/**
 * No comment provided
 *
 * Hash: 0x466DA42C89865553 | Since: 323
 */
export function cellCamSetSelfieModeHeadPitchOffset(pitch) {
    CellCamSetHeadHeight(pitch);
}
/**
 * No comment provided
 *
 * Hash: 0xF1E22DC13F5EEBAD | Since: 323
 */
export function cellCamSetSelfieModeHeadRollOffset(roll) {
    CellCamSetHeadRoll(roll);
}
/**
 * No comment provided
 *
 * Hash: 0xD6ADE981781FCA09 | Since: 323
 */
export function cellCamSetSelfieModeHeadYawOffset(yaw) {
    CellCamSetHeadPitch(yaw);
}
/**
 * No comment provided
 *
 * Hash: 0x53F4892D18EC90A4 | Since: 323
 */
export function cellCamSetSelfieModeHorzPanOffset(horizontalPan) {
    CellCamSetDistance(horizontalPan);
}
/**
 * No comment provided
 *
 * Hash: 0x15E69E2802C24B8D | Since: 323
 */
export function cellCamSetSelfieModeRollOffset(roll) {
    CellCamSetRoll(roll);
}
/**
 * No comment provided
 *
 * Hash: 0x1B0B4AEED5B9B41C | Since: 323
 */
export function cellCamSetSelfieModeSideOffsetScaling() {
    CellCamSetHorizontalOffset(0);
}
/**
 * No comment provided
 *
 * Hash: 0x3117D84EFA60F77B | Since: 323
 */
export function cellCamSetSelfieModeVertPanOffset(vertPan) {
    CellCamSetVerticalOffset(vertPan);
}
/**
 * if the bool "Toggle" is "true" so the phone is lean.
 * if the bool "Toggle" is "false" so the phone is not lean.
 *
 * Hash: 0x44E44169EF70138E | Since: 323
 */
export function cellHorizontalModeToggle(toggle) {
    CellCamSetLean(toggle);
}
/**
 * For move the finger of player, the value of int goes 1 at 5.
 *
 * Hash: 0x95C9E72F3D7DEC9B | Since: 323
 */
export function cellSetInput(direction) {
    CellCamMoveFinger(direction);
}
/**
 * Creates a mobile phone of the specified type.
 *
 * Possible phone types:
 *
 * 0 - Default phone / Michael's phone
 * 1 - Trevor's phone
 * 2 - Franklin's phone
 * 3 - Unused police phone
 * 4 - Prologue phone
 *
 * Higher values may crash your game.
 *
 * Hash: 0xA4E8E696C532FBC7 | Since: 323
 */
export function createPhone(phoneType) {
    CreateMobilePhone(phoneType);
}
/**
 * Destroys the currently active mobile phone.
 *
 * Hash: 0x3BC861DF703E5097 | Since: 323
 */
export function destroyPhone() {
    DestroyMobilePhone();
}
/**
 * No comment provided
 *
 * Hash: 0x584FDFDA48805B86 | Since: 323
 */
export function getPhonePosition() {
    return GetMobilePhonePosition();
}
/**
 * No comment provided
 *
 * Hash: 0xB4A53E05F68B6FA1 | Since: 323
 */
export function getPhoneRenderId() {
    return GetMobilePhoneRenderId();
}
/**
 * No comment provided
 *
 * Hash: 0x1CEFB61F193070AE | Since: 323
 */
export function getPhoneRotation(p1) {
    const _p1 = p1 instanceof IVehicle ? p1.localId() : p1;
    return GetMobilePhoneRotation(_p1);
}
/**
 * If bool Toggle = true so the mobile is hide to screen.
 * If bool Toggle = false so the mobile is show to screen.
 *
 * Hash: 0xF511F759238A5122 | Since: 323
 */
export function scriptIsMovingPhoneOffscreen(toggle) {
    ScriptIsMovingMobilePhoneOffscreen(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x375A706A5C2FD084 | Since: 372
 */
export function setPhoneDofState(toggle) {
    SetMobilePhoneDofState(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x693A5C6D6734085B | Since: 323
 */
export function setPhonePosition(pos) {
    SetMobilePhonePosition(pos.x, pos.y, pos.z);
}
/**
 * Last parameter is unknown and always zero.
 *
 * Hash: 0xBB779C0CA917E865 | Since: 323
 */
export function setPhoneRotation(rot) {
    SetMobilePhoneRotation(rot.x, rot.y, rot.z, undefined);
}
/**
 * The minimum/default is 500.0f. If you plan to make it bigger set it's position as well. Also this seems to need to be called in a loop as when you close the phone the scale is reset. If not in a loop you'd need to call it everytime before you re-open the phone.
 *
 * Hash: 0xCBDD322A73D6D932 | Since: 323
 */
export function setPhoneScale(scale) {
    SetMobilePhoneScale(scale);
}
