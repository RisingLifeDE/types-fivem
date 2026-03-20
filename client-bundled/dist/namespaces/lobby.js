/**
 * No comment provided
 *
 * Hash: 0x8AA464D4E0F6ACCD | Since: 323 | API-Set: unknown
 */
export function autoMultiplayerEvent() {
    return LoadingscreenGetLoadFreemodeWithEventName();
}
/**
 * No comment provided
 *
 * Hash: 0xEF7D17BC6C85264C | Since: 323 | API-Set: unknown
 */
export function autoMultiplayerFreemode() {
    return LoadingscreenGetLoadFreemode();
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0xF2CA003F167E21D2 | Since: 323 | API-Set: unknown
 */
export function autoMultiplayerMenu() {
    return Citizen.invokeNative('0xF2CA003F167E21D2');
}
/**
 * No comment provided
 *
 * Hash: 0xC6DC823253FBB366 | Since: 323 | API-Set: unknown
 */
export function autoMultiplayerRandomJob() {
    return LoadingscreenIsLoadingFreemode();
}
/**
 * No comment provided
 *
 * Hash: 0xC7E7181C09F33B69 | Since: 323 | API-Set: unknown
 */
export function setAutoMpRandomJob(toggle) {
    LoadingscreenSetIsLoadingFreemode(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB0C56BD3D808D863 | Since: 323 | API-Set: unknown
 */
export function setAutoMultiplayer(toggle) {
    LoadingscreenSetLoadFreemode(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xFC309E94546FCDB5 | Since: 323 | API-Set: unknown
 */
export function setAutoMultiplayerEvent(toggle) {
    LoadingscreenSetLoadFreemodeWithEventName(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xFA1E0E893D915215 | Since: 323 | API-Set: unknown
 */
export function shutdownSessionClearsAutoMultiplayer(toggle) {
    Citizen.invokeNative('0xFA1E0E893D915215', toggle);
}
