/**
 * `BRAIN::ADD_SCRIPT_TO_RANDOM_PED("pb_prostitute", ${s_f_y_hooker_01}, 100, 0);`
 *
 * - Nacorpio
 *
 * -----
 *
 * Hardcoded to not work in Multiplayer.
 *
 * Hash: 0x4EE5367468A65CCC | Since: 323 | API-Set: unknown
 */
export function addScriptToRandomPed(name, model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    AddScriptToRandomPed(name, model, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x14D8518E9760F08F | Since: 323 | API-Set: unknown
 */
export function disableScriptSet(brainSet) {
    DisableScriptBrainSet(brainSet);
}
/**
 * No comment provided
 *
 * Hash: 0x67AA4D73F0CFA86B | Since: 323 | API-Set: unknown
 */
export function enableScriptSet(brainSet) {
    EnableScriptBrainSet(brainSet);
}
/**
 * No comment provided
 *
 * Hash: 0xCCBA154209823057 | Since: 323 | API-Set: unknown
 */
export function isObjectWithinActivationRange(_object) {
    return IsObjectWithinBrainActivationRange(_object);
}
/**
 * Gets whether the world point the calling script is registered to is within desired range of the player.
 *
 * Hash: 0xC5042CC6F5E3D450 | Since: 323 | API-Set: unknown
 */
export function isWorldPointWithinActivationRange() {
    return IsWorldPointWithinBrainActivationRange();
}
/**
 * No comment provided
 *
 * Hash: 0x4D953DF78EBF8158 | Since: 323 | API-Set: unknown
 */
export function reactivateAllObjectsThatAreWaitingTillOutOfRange() {
    Citizen.invokeNative('0x4D953DF78EBF8158');
}
/**
 * No comment provided
 *
 * Hash: 0x0B40ED49D7D6FF84 | Since: 323 | API-Set: unknown
 */
export function reactivateAllWorldsThatAreWaitingTillOutOfRange() {
    Citizen.invokeNative('0x0B40ED49D7D6FF84');
}
/**
 * Looks like a cousin of above function _6D6840CEE8845831 as it was found among them. Must be similar
 *
 * Here are possible values of argument -
 *
 * "ob_tv"
 * "launcher_Darts"
 *
 * Hash: 0x6E91B04E08773030 | Since: 323 | API-Set: unknown
 */
export function reactivateNamedObjectsWaitingTillOutOfRange(scriptName) {
    Citizen.invokeNative('0x6E91B04E08773030', scriptName);
}
/**
 * Possible values:
 *
 * act_cinema
 * am_mp_carwash_launch
 * am_mp_carwash_control
 * am_mp_property_ext
 * chop
 * fairgroundHub
 * launcher_BasejumpHeli
 * launcher_BasejumpPack
 * launcher_CarWash
 * launcher_golf
 * launcher_Hunting_Ambient
 * launcher_MrsPhilips
 * launcher_OffroadRacing
 * launcher_pilotschool
 * launcher_Racing
 * launcher_rampage
 * launcher_rampage
 * launcher_range
 * launcher_stunts
 * launcher_stunts
 * launcher_tennis
 * launcher_Tonya
 * launcher_Triathlon
 * launcher_Yoga
 * ob_mp_bed_low
 * ob_mp_bed_med
 *
 * Hash: 0x6D6840CEE8845831 | Since: 323 | API-Set: unknown
 */
export function reactivateNamedWorldsWaitingTillOutOfRange(scriptName) {
    Citizen.invokeNative('0x6D6840CEE8845831', scriptName);
}
/**
 * Registers a script for any object with a specific model hash.
 *
 * `BRAIN::REGISTER_OBJECT_SCRIPT_BRAIN("ob_telescope", ${prop_telescope_01}, 100, 4.0, -1, 9);`
 *
 * - Nacorpio
 *
 * Hash: 0x0BE84C318BA6EC22 | Since: 323 | API-Set: unknown
 */
export function registerObjectScript(scriptName, modelHash, activationRange) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    RegisterObjectScriptBrain(scriptName, modelHash, 0, activationRange, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x3CDC7136613284BD | Since: 323 | API-Set: unknown
 */
export function registerWorldPointScript(scriptName, activationRange) {
    RegisterWorldPointScriptBrain(scriptName, activationRange, 0);
}
