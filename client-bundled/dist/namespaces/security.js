/**
 * No comment provided
 *
 * Hash: 0x8E580AB902917360 | Since: 2545 | API-Set: unknown
 */
export function forceCheckScriptVariables() {
    Citizen.invokeNative('0x8E580AB902917360');
}
/**
 * Registers a protected variable that will be checked for modifications by the anticheat
 *
 * Hash: 0x40EB1EFD921822BC | Since: 2545 | API-Set: unknown
 */
export function registerScriptVariable() {
    return Citizen.invokeNative('0x40EB1EFD921822BC');
}
/**
 * No comment provided
 *
 * Hash: 0x340A36A700E99699 | Since: 2545 | API-Set: unknown
 */
export function unregisterScriptVariable() {
    return Citizen.invokeNative('0x340A36A700E99699');
}
