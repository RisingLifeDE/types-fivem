/**
 * I'm guessing this rounds a float value up to the next whole number, and FLOOR rounds it down
 *
 * Hash: 0x11E019C8F43ACC8A | Since: 323 | API-Set: unknown
 */
export function ceil(value) {
    return Ceil(value);
}
/**
 * No comment provided
 *
 * Hash: 0xD0FFB162F40A139C | Since: 323 | API-Set: unknown
 */
export function cos(value) {
    return Cos(value);
}
/**
 * No comment provided
 *
 * Hash: 0xF34EE736CF047844 | Since: 323 | API-Set: unknown
 */
export function floor(value) {
    return Floor(value);
}
/**
 * No comment provided
 *
 * Hash: 0xE816E655DE37FE20 | Since: 1493 | API-Set: unknown
 */
export function log10(value) {
    return Log10(value);
}
/**
 * No comment provided
 *
 * Hash: 0xE3621CC40F31FE2E | Since: 323 | API-Set: unknown
 */
export function pow(base, exponent) {
    return Pow(base, exponent);
}
/**
 * No comment provided
 *
 * Hash: 0xF2DB717A73826179 | Since: 323 | API-Set: unknown
 */
export function round(value) {
    return Round(value);
}
/**
 * No comment provided
 *
 * Hash: 0xC1B1E9A034A63A62 | Since: 323 | API-Set: unknown
 */
export function settimera(value) {
    Settimera(value);
}
/**
 * No comment provided
 *
 * Hash: 0x5AE11BC36633DE4E | Since: 323 | API-Set: unknown
 */
export function settimerb(value) {
    Settimerb(value);
}
/**
 * THREAD_PRIO_HIGHEST = 0
 * THREAD_PRIO_NORMAL = 1
 * THREAD_PRIO_LOWEST = 2
 * THREAD_PRIO_MANUAL_UPDATE = 100
 *
 * Hash: 0x42B65DEEF2EDF2A1 | Since: 877 | API-Set: unknown
 */
export function setThisThreadPriority(priority) {
    SetThreadPriority(priority);
}
/**
 * No comment provided
 *
 * Hash: 0xEDD95A39E5544DE8 | Since: 323 | API-Set: unknown
 */
export function shiftLeft(value, bitShift) {
    return ShiftLeft(value, bitShift);
}
/**
 * No comment provided
 *
 * Hash: 0x97EF1E5BCE9DC075 | Since: 323 | API-Set: unknown
 */
export function shiftRight(value, bitShift) {
    return ShiftRight(value, bitShift);
}
/**
 * No comment provided
 *
 * Hash: 0x0BADBFA3B172435F | Since: 323 | API-Set: unknown
 */
export function sin(value) {
    return Sin(value);
}
/**
 * No comment provided
 *
 * Hash: 0x71D93B57D07F9804 | Since: 323 | API-Set: unknown
 */
export function sqrt(value) {
    return Sqrt(value);
}
/**
 * Examples:
 * `g_384A = SYSTEM::START_NEW_SCRIPT("cellphone_flashhand", 1424);`
 * `l_10D = SYSTEM::START_NEW_SCRIPT("taxiService", 1828);`
 * `SYSTEM::START_NEW_SCRIPT("AM_MP_YACHT", 5000);`
 * `SYSTEM::START_NEW_SCRIPT("emergencycall", 512);`
 * `SYSTEM::START_NEW_SCRIPT("emergencycall", 512);`
 * `SYSTEM::START_NEW_SCRIPT("FM_maintain_cloud_header_data", 1424);`
 * `SYSTEM::START_NEW_SCRIPT("FM_Mission_Controller", 31000);`
 * `SYSTEM::START_NEW_SCRIPT("tennis_family", 3650);`
 * `SYSTEM::START_NEW_SCRIPT("Celebrations", 3650);`
 *
 * Decompiled examples of usage when starting a script:
 *
 * `SCRIPT::REQUEST_SCRIPT(a_0);`
 * `if (SCRIPT::HAS_SCRIPT_LOADED(a_0)) {`
 * `SYSTEM::START_NEW_SCRIPT(a_0, v_3);`
 * `SCRIPT::SET_SCRIPT_AS_NO_LONGER_NEEDED(a_0);`
 * return 1;
 * }
 *
 * or:
 *
 * v_2 = "MrsPhilips2";
 * `SCRIPT::REQUEST_SCRIPT(v_2);`
 * `while (!SCRIPT::HAS_SCRIPT_LOADED(v_2)) {`
 * `SCRIPT::REQUEST_SCRIPT(v_2);`
 * `SYSTEM::WAIT(0);`
 * }
 * sub_8792(36);
 * `SYSTEM::START_NEW_SCRIPT(v_2, 17000);`
 * `SCRIPT::SET_SCRIPT_AS_NO_LONGER_NEEDED(v_2);`
 *
 * Hash: 0xE81651AD79516E48 | Since: 323 | API-Set: unknown
 */
export function startNewScript(scriptName, stackSize) {
    return StartNewScript(scriptName, stackSize);
}
/**
 * return : script thread id, 0 if failed
 * Pass pointer to struct of args in p1, size of struct goes into p2
 *
 * Hash: 0xB8BA7F44DF1575E1 | Since: 323 | API-Set: unknown
 */
export function startNewScriptWithArgs(scriptName, argCount, stackSize) {
    return StartNewScriptWithArgs(scriptName, argCount, stackSize);
}
/**
 * No comment provided
 *
 * Hash: 0xEB1C67C3A5333A92 | Since: 323 | API-Set: unknown
 */
export function startNewScriptWithNameHash(scriptHash, stackSize) {
    if (typeof scriptHash === 'string')
        scriptHash = game.getHashKey(scriptHash);
    return StartNewScriptWithNameHash(scriptHash, stackSize);
}
/**
 * No comment provided
 *
 * Hash: 0xC4BB298BD441BE78 | Since: 323 | API-Set: unknown
 */
export function startNewScriptWithNameHashAndArgs(scriptHash, argCount, stackSize) {
    if (typeof scriptHash === 'string')
        scriptHash = game.getHashKey(scriptHash);
    return StartNewScriptWithNameHashAndArgs(scriptHash, argCount, stackSize);
}
/**
 * Counts up. Every 1000 is 1 real-time second. Use SETTIMERA(int value) to set the timer (e.g.: SETTIMERA(0)).
 *
 * Hash: 0x83666F9FB8FEBD4B | Since: 323 | API-Set: unknown
 */
export function timera() {
    return Timera();
}
/**
 * No comment provided
 *
 * Hash: 0xC9D9444186B5A374 | Since: 323 | API-Set: unknown
 */
export function timerb() {
    return Timerb();
}
/**
 * Gets the current frame time.
 *
 * Hash: 0x0000000050597EE2 | Since: 323 | API-Set: unknown
 */
export function timestep() {
    return Timestep();
}
/**
 * No comment provided
 *
 * Hash: 0xBBDA792448DB5A89 | Since: 323 | API-Set: unknown
 */
export function toFloat(value) {
    return ToFloat(value);
}
/**
 * Calculates distance between vectors.
 *
 * Hash: 0x2A488C176D52CCA5 | Since: 323 | API-Set: unknown
 */
export function vdist(x1, y1, z1, x2, y2, z2) {
    return Vdist(x1, y1, z1, x2, y2, z2);
}
/**
 * Calculates distance between vectors but does not perform Sqrt operations. (Its way faster)
 *
 * Hash: 0xB7A628320EFF8E47 | Since: 323 | API-Set: unknown
 */
export function vdist2(x1, y1, z1, x2, y2, z2) {
    return Vdist2(x1, y1, z1, x2, y2, z2);
}
/**
 * Calculates the magnitude of a vector.
 *
 * Hash: 0x652D2EEEF1D3E62C | Since: 323 | API-Set: unknown
 */
export function vmag(pos) {
    return Vmag(pos.x, pos.y, pos.z);
}
/**
 * Calculates the magnitude of a vector but does not perform Sqrt operations. (Its way faster)
 *
 * Hash: 0xA8CEACB4F35AE058 | Since: 323 | API-Set: unknown
 */
export function vmag2(pos) {
    return Vmag2(pos.x, pos.y, pos.z);
}
/**
 * Pauses execution of the current script, please note this behavior is only seen when called from one of the game script files(ysc). In order to wait an asi script use "static void WAIT(DWORD time);" found in main.h
 *
 * Hash: 0x4EDE34FBADD967A6 | Since: 323 | API-Set: unknown
 */
export function wait(ms) {
    Wait(ms);
}
