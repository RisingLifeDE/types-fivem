/**
 * No comment provided
 *
 * Hash: 0x241FCA5B1AA14F75 | Since: 323 | API-Set: unknown
 */
export function areAnyCcsPending() {
    return Citizen.invokeNative('0x241FCA5B1AA14F75');
}
/**
 * This function is hard-coded to always return 1.
 *
 * Hash: 0xF2E07819EF1A5289 | Since: 323 | API-Set: unknown
 */
export function checkCloudDataCorrect() {
    return Citizen.invokeNative('0xF2E07819EF1A5289');
}
/**
 * This function is hard-coded to always return 1.
 *
 * Hash: 0xA213B11DFF526300 | Since: 323 | API-Set: unknown
 */
export function checkCompatPackConfiguration() {
    return Citizen.invokeNative('0xA213B11DFF526300');
}
/**
 * No comment provided
 *
 * Hash: 0x8D30F648014A92B5 | Since: 323 | API-Set: unknown
 */
export function getEverHadBadPackOrder() {
    return GetExtraContentPackHasBeenInstalled();
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x9489659372A81585 | Since: 323 | API-Set: unknown
 */
export function getExtracontentCloudResult() {
    return Citizen.invokeNative('0x9489659372A81585');
}
/**
 * No comment provided
 *
 * Hash: 0xC4637A6D03C24CC3 | Since: 1734 | API-Set: unknown
 */
export function getIsInitialLoadingScreenActive() {
    return Citizen.invokeNative('0xC4637A6D03C24CC3');
}
/**
 * No comment provided
 *
 * Hash: 0x10D0A8F259E93EC9 | Since: 323 | API-Set: unknown
 */
export function getIsLoadingScreenActive() {
    return GetIsLoadingScreenActive();
}
/**
 * Sets the value of the specified variable to 0.
 * Always returns true.
 *
 * Hash: 0x46E2B844905BC5F0 | Since: 323 | API-Set: unknown
 */
export function hasCloudRequestsFinished(unused) {
    return HasCloudRequestsFinished(unused);
}
/**
 * Returns true if the given DLC pack is present.
 *
 * Hash: 0x812595A0644CE1DE | Since: 323 | API-Set: unknown
 */
export function isPresent(dlcHash) {
    if (typeof dlcHash === 'string')
        dlcHash = game.getHashKey(dlcHash);
    return IsDlcPresent(dlcHash);
}
/**
 * This loads the GTA:O dlc map parts (high end garages, apartments).
 * Works in singleplayer.
 * In order to use GTA:O heist IPL's you have to call this native with the following params: SET_INSTANCE_PRIORITY_MODE(1);
 *
 * Hash: 0x0888C3502DBBEEF5 | Since: 323 | API-Set: unknown
 */
export function onEnterMp() {
    OnEnterMp();
}
/**
 * Unloads GROUP_MAP (GTAO/MP) DLC data and loads GROUP_MAP_SP DLC. Neither are loaded by default, ON_ENTER_MP is a cognate to this function and loads MP DLC (and unloads SP DLC by extension).
 * Works in singleplayer.
 *
 * Hash: 0xD7C10C4A637992C9 | Since: 323 | API-Set: unknown
 */
export function onEnterSp() {
    OnEnterSp();
}
