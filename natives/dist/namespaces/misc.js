import { Vector3, IEntity, IPed, IPlayer } from '@risinglife/fivem-shared';
/**
 * No comment provided
 *
 * Hash: 0x73D57CFFDD12C355 | Since: 323
 */
export function absf(value) {
    return Absf(value);
}
/**
 * No comment provided
 *
 * Hash: 0xF0D31AD191A74F87 | Since: 323
 */
export function absi(value) {
    return Absi(value);
}
/**
 * No comment provided
 *
 * Hash: 0x1D08B970013C34B6 | Since: 323
 */
export function acos() {
    return Acos(0);
}
/**
 * Appears to remove stealth kill action from memory
 *
 * Hash: 0xA6A12939F16D85BE | Since: 323
 */
export function actionManagerEnableAction(hash, enable) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    RemoveStealthKill(hash, enable);
}
/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 *
 * Hash: 0xEB078CA2B5E82ADD | Since: 323
 */
export function activityFeedActionStartWithCommandLine() {
    Citizen.invokeNative('0xEB078CA2B5E82ADD', undefined, undefined);
}
/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 *
 * Hash: 0x703CC7F60CBB2B57 | Since: 323
 */
export function activityFeedActionStartWithCommandLineAdd() {
    Citizen.invokeNative('0x703CC7F60CBB2B57', undefined);
}
/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 *
 * Hash: 0x97E7E2C04245115B | Since: 323
 */
export function activityFeedAddIntToCaption() {
    Citizen.invokeNative('0x97E7E2C04245115B', undefined);
}
/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 *
 * Hash: 0xEBD3205A207939ED | Since: 323
 */
export function activityFeedAddLiteralSubstringToCaption() {
    Citizen.invokeNative('0xEBD3205A207939ED', undefined);
}
/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 *
 * Hash: 0x31125FD509D9043F | Since: 323
 */
export function activityFeedAddSubstringToCaption() {
    Citizen.invokeNative('0x31125FD509D9043F', undefined);
}
/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 *
 * Hash: 0x4DCDF92BF64236CD | Since: 323
 */
export function activityFeedCreate() {
    ActivityFeedCreate(undefined, undefined);
}
/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 *
 * Hash: 0x916CA67D26FD1E37 | Since: 2060
 */
export function activityFeedLargeImageUrl() {
    Citizen.invokeNative('0x916CA67D26FD1E37', undefined);
}
/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 *
 * Used only once in the scripts (ingamehud) with p0 = "AF_GAMEMODE"
 *
 * Hash: 0xBA4B8D83BDC75551 | Since: 323
 */
export function activityFeedOnlinePlayedWithPost() {
    Citizen.invokeNative('0xBA4B8D83BDC75551', undefined);
}
/**
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 *
 * Hash: 0x8951EB9C6906D3C8 | Since: 323
 */
export function activityFeedPost() {
    Citizen.invokeNative('0x8951EB9C6906D3C8');
}
/**
 * To remove, see: REMOVE_DISPATCH_SPAWN_BLOCKING_AREA
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 *
 * Hash: 0x918C7B2D2FF3928B | Since: 323
 */
export function addDispatchSpawnAngledBlockingArea(x1, y1, z1, x2, y2, z2, width) {
    return AddDispatchSpawnBlockingAngledArea(x1, y1, z1, x2, y2, z2, width);
}
/**
 * No comment provided
 *
 * Hash: 0x2D4259F1FEB81DA9 | Since: 323
 */
export function addDispatchSpawnSphereBlockingArea(x1, y1, x2, y2) {
    return AddDispatchSpawnBlockingArea(x1, y1, x2, y2);
}
/**
 * Returns the index of the newly created hospital spawn point.
 *
 * p3 might be radius?
 *
 * Hash: 0x1F464EF988465A81 | Since: 323
 */
export function addHospitalRestart(pos) {
    return AddHospitalRestart(pos.x, pos.y, pos.z, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x452736765B31FC4B | Since: 323
 */
export function addPoliceRestart() {
    return AddPoliceRestart(0, 0, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x67F6413D3220E18D | Since: 323
 */
export function addPopMultiplierArea(x1, y1, z1, x2, y2, z2) {
    return AddPopMultiplierArea(x1, y1, z1, x2, y2, z2, 0, 0, false, false);
}
/**
 * This native is adding a zone, where you can change density settings. For example, you can add a zone on 0.0, 0.0, 0.0 with radius 900.0 and vehicleMultiplier 0.0, and you will not see any new population vehicle spawned in a radius of 900.0 from 0.0, 0.0, 0.0. Returns the id. You can have only 15 zones at the same time. You can remove zone using REMOVE_POP_MULTIPLIER_SPHERE
 *
 * Hash: 0x32C7A7E8C43A1F80 | Since: 323
 */
export function addPopMultiplierSphere(pos, radius, pedMultiplier, vehicleMultiplier) {
    return AddPopMultiplierSphere(pos.x, pos.y, pos.z, radius, pedMultiplier, vehicleMultiplier, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x69FE6DC87BD2A5E9 | Since: 323
 */
export function addReplayStatValue(value) {
    AddReplayStatValue(value);
}
/**
 * See description of `ADD_STUNT_JUMP_ANGLED` for detailed info. The only difference really is this one does not have the radius (or angle, not sure) floats parameters for entry and landing zones.
 *
 * Hash: 0x1A992DA297A4630C | Since: 323
 */
export function addStuntJump(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, camX, camY, camZ) {
    return AddStuntJump(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, camX, camY, camZ, 0, 0, 0);
}
/**
 * Creates a new stunt jump.
 *
 * The radius1 and radius2 might actually not be a radius at all, but that's what it seems to me testing them in-game. But they may be 'angle' floats instead, considering this native is named ADD_STUNT_JUMP_**ANGLED**.
 *
 * Info about the specific 'parameter sections':
 *
 *
 * <strong>x1, y1, z1, x2, y2, z2 and radius1:</strong>
 *
 * First coordinates are for the jump entry area, and the radius that will be checked around that area. So if you're not exactly within the coordinates, but you are within the outter radius limit then it will still register as entering the stunt jump. Note as mentioned above, the radius is just a guess, I'm not really sure about it's exact purpose.
 *
 *
 * <strong>x3, y3, z3, x4, y4, z4 and radius2:</strong>
 *
 * Next part is the landing area, again starting with the left bottom (nearest to the stunt jump entry zone) coordinate, and the second one being the top right furthest away part of the landing area. Followed by another (most likely) radius float, this is usually slightly larger than the entry zone 'radius' float value, just because you have quite a lot of places where you can land (I'm guessing).
 *
 *
 * <strong>camX, camY and camZ:</strong>
 *
 * The final coordinate in this native is the Camera position. Rotation and zoom/FOV is managed by the game itself, you just need to provide the camera location.
 *
 *
 * <strong>unk1, unk2 and unk3:</strong>
 *
 * Not sure what these are for, but they're always `150, 0, 0` in decompiled scripts.
 *
 * Here is a list of almost all of the stunt jumps from GTA V (taken from decompiled scripts): https://pastebin.com/EW1jBPkY
 *
 * Hash: 0xBBE5D803A5360CBF | Since: 323
 */
export function addStuntJumpAngled(x1, y1, z1, x2, y2, z2, radius1, x3, y3, z3, x4, y4, z4, radius2, camX, camY, camZ) {
    return AddStuntJumpAngled(x1, y1, z1, x2, y2, z2, radius1, x3, y3, z3, x4, y4, z4, radius2, camX, camY, camZ, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB8721407EE9C3FF6 | Since: 323
 */
export function addTacticalNavMeshPoint(pos) {
    AddTacticalAnalysisPoint(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xDEA36202FC3382DF | Since: 323
 */
export function allowMissionCreatorWarp(toggle) {
    AllowMissionCreatorWarp(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xD19C0826DC20CF1C | Since: 2802
 */
export function areCreditsRunning() {
    return Citizen.invokeNative('0xD19C0826DC20CF1C');
}
/**
 * No comment provided
 *
 * Hash: 0x5AA3BEFA29F03AD4 | Since: 323
 */
export function areProfileSettingsValid() {
    return AreProfileSettingsValid();
}
/**
 * No comment provided
 *
 * Hash: 0x0C515FAB3FF9EA92 | Since: 323
 */
export function areStringsEqual(string1, string2) {
    return AreStringsEqual(string1, string2);
}
/**
 * No comment provided
 *
 * Hash: 0xC843060B5765DCE7 | Since: 323
 */
export function asin() {
    return Asin(0);
}
/**
 * No comment provided
 *
 * Hash: 0xA9D1795CD5043663 | Since: 323
 */
export function atan() {
    return Atan(0);
}
/**
 * No comment provided
 *
 * Hash: 0x8927CBF9D22261A4 | Since: 323
 */
export function atan2() {
    return Atan2(0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xE0E500246FF73D66 | Since: 323
 */
export function beginReplayStats() {
    BeginReplayStats(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9B2BD3773123EA2F | Since: 323
 */
export function blockDispatchServiceResourceCreation(dispatchService, toggle) {
    BlockDispatchServiceResourceCreation(dispatchService, toggle);
}
/**
 * DO NOT use this as it doesn't clean up the text input box properly and your script will get stuck in the UPDATE_ONSCREEN_KEYBOARD() loop.
 * Use FORCE_CLOSE_TEXT_INPUT_BOX instead.
 *
 * Hash: 0x58A39BE597CE99CD | Since: 757
 */
export function cancelOnscreenKeyboard() {
    CancelOnscreenKeyboard();
}
/**
 * No comment provided
 *
 * Hash: 0xE6B7B0ACD4E4B75E | Since: 323
 */
export function cancelStuntJump() {
    CancelStuntJump();
}
/**
 * No comment provided
 *
 * Hash: 0xC79AE21974B01FB2 | Since: 323
 */
export function cleanupAsyncInstall() {
    CleanupAsyncInstall();
}
/**
 * No comment provided
 *
 * Hash: 0x11DB3500F042A8AA | Since: 323
 */
export function clearAngledAreaOfVehicles(x1, y1, z1, x2, y2, z2, width) {
    ClearAngledAreaOfVehicles(x1, y1, z1, x2, y2, z2, width, false, false, false, false, false, undefined, undefined);
}
/**
 * Example: CLEAR_AREA(0, 0, 0, 30, true, false, false, false);
 *
 * Hash: 0xA56F01F3765B93A0 | Since: 323
 */
export function clearArea(pos, radius, ignoreCopCars, ignoreObjects) {
    ClearArea(pos.x, pos.y, pos.z, radius, false, ignoreCopCars, ignoreObjects, false);
}
/**
 * `MISC::CLEAR_AREA_LEAVE_VEHICLE_HEALTH(x, y, z, radius, false, false, false, false); seem to make all objects go away, peds, vehicles etc. All booleans set to true doesn't seem to change anything.`
 *
 * Hash: 0x957838AAF91BD12D | Since: 323
 */
export function clearAreaLeaveVehicleHealth(pos, radius) {
    ClearAreaLeaveVehicleHealth(pos.x, pos.y, pos.z, radius, false, false, false, false);
}
/**
 * flags appears to always be 0
 *
 * Hash: 0x04F8FC8FCF58F88D | Since: 323
 */
export function clearAreaOfCops(pos, radius, flags) {
    ClearAreaOfCops(pos.x, pos.y, pos.z, radius, flags);
}
/**
 * I looked through the PC scripts that this site provides you with a link to find. It shows the last param mainly uses, (0, 2, 6, 16, and 17) so I am going to assume it is a type of flag.
 *
 * Hash: 0xDD9B9B385AAC7F5B | Since: 323
 */
export function clearAreaOfObjects(pos, radius, flags) {
    ClearAreaOfObjects(pos.x, pos.y, pos.z, radius, flags);
}
/**
 * Example:       CLEAR_AREA_OF_PEDS(0, 0, 0, 10000, 1);
 *
 * Hash: 0xBE31FD6CE464AC59 | Since: 323
 */
export function clearAreaOfPeds(pos, radius, flags) {
    ClearAreaOfPeds(pos.x, pos.y, pos.z, radius, flags);
}
/**
 * flags is usually 0 in the scripts.
 *
 * Hash: 0x0A1CB9094635D1A6 | Since: 323
 */
export function clearAreaOfProjectiles(pos, radius, flags) {
    ClearAreaOfProjectiles(pos.x, pos.y, pos.z, radius, flags);
}
/**
 * Example:
 * CLEAR_AREA_OF_VEHICLES(0.0f, 0.0f, 0.0f, 10000.0f, false, false, false, false, false, false);
 *
 * Hash: 0x01C7B9B38428AEB6 | Since: 323
 */
export function clearAreaOfVehicles(pos, radius) {
    ClearAreaOfVehicles(pos.x, pos.y, pos.z, radius, false, false, false, false, false, false, undefined);
}
/**
 * This sets bit [offset] of [address] to off.
 *
 * Example:
 * `MISC::CLEAR_BIT(&bitAddress, 1);`
 *
 * To check if this bit has been enabled:
 * `MISC::IS_BIT_SET(bitAddress, 1); // will return 0 afterwards`
 *
 * Hash: 0xE80492A9AC099A93 | Since: 323
 */
export function clearBit(offset) {
    return ClearBit(offset);
}
/**
 * No comment provided
 *
 * Hash: 0x06462A961E94B67C | Since: 323
 */
export function clearCodeRequestedAutosave() {
    Citizen.invokeNative('0x06462A961E94B67C');
}
/**
 * No comment provided
 *
 * Hash: 0x338D2E3477711050 | Since: 323
 */
export function clearOverrideWeather() {
    ClearOverrideWeather();
}
/**
 * No comment provided
 *
 * Hash: 0x1B1AB132A16FDA55 | Since: 323
 */
export function clearReplayStats() {
    ClearReplayStats();
}
/**
 * No comment provided
 *
 * Hash: 0xA2716D40842EAF79 | Since: 323
 */
export function clearRestartCoordOverride() {
    ClearRestartCustomPosition();
}
/**
 * Possibly used to clear scenario points.
 *
 * Hash: 0x7EC6F9A478A6A512 | Since: 323
 */
export function clearScenarioSpawnHistory() {
    Citizen.invokeNative('0x7EC6F9A478A6A512');
}
/**
 * No comment provided
 *
 * Hash: 0xB3CD58CCA6CDA852 | Since: 323
 */
export function clearTacticalNavMeshPoints() {
    ClearTacticalAnalysisPoints();
}
/**
 * No comment provided
 *
 * Hash: 0x0CF97F497FE7D048 | Since: 1103
 */
export function clearWeatherTypeNowPersistNetwork(milliseconds) {
    ClearWeatherTypeNowPersistNetwork(milliseconds);
}
/**
 * No comment provided
 *
 * Hash: 0xCCC39339BEF76CF5 | Since: 323
 */
export function clearWeatherTypePersist() {
    ClearWeatherTypePersist();
}
/**
 * Compares two strings up to a specified number of characters.
 *
 * Parameters:
 * str1 - String to be compared.
 * str2 - String to be compared.
 * matchCase - Comparison will be case-sensitive.
 * maxLength - Maximum number of characters to compare. A value of -1 indicates an infinite length.
 *
 * Returns:
 * A value indicating the relationship between the strings:
 * <0 - The first non-matching character in 'str1' is less than the one in 'str2'. (e.g. 'A' < 'B', so result = -1)
 * 0 - The contents of both strings are equal.
 * >0 - The first non-matching character in 'str1' is less than the one in 'str2'. (e.g. 'B' > 'A', so result = 1)
 *
 * Examples:
 * `MISC::COMPARE_STRINGS("STRING", "string", false, -1); // 0; equal`
 * `MISC::COMPARE_STRINGS("TESTING", "test", false, 4); // 0; equal`
 * `MISC::COMPARE_STRINGS("R2D2", "R2xx", false, 2); // 0; equal`
 * `MISC::COMPARE_STRINGS("foo", "bar", false, -1); // 4; 'f' > 'b'`
 * `MISC::COMPARE_STRINGS("A", "A", true, 1); // 0; equal`
 *
 * When comparing case-sensitive strings, lower-case characters are greater than upper-case characters:
 * `MISC::COMPARE_STRINGS("A", "a", true, 1); // -1; 'A' < 'a'`
 * `MISC::COMPARE_STRINGS("a", "A", true, 1); // 1; 'a' > 'A'`
 *
 * Hash: 0x1E34710ECD4AB0EB | Since: 323
 */
export function compareStrings(str1, str2, matchCase, maxLength) {
    return CompareStrings(str1, str2, matchCase, maxLength);
}
/**
 * No comment provided
 *
 * Hash: 0x213AEB2B90CBA7AC | Since: 877
 */
export function copyScriptStruct(size) {
    return CopyMemory(size);
}
/**
 * As for the 'police' incident, it will call police cars to you, but unlike PedsInCavalcades & Merryweather they won't start shooting at you unless you shoot first or shoot at them. The top 2 however seem to cancel theirselves if there is noone dead around you or a fire. I only figured them out as I found out the 3rd param is definately the amountOfPeople and they called incident 3 in scripts with 4 people (which the firetruck has) and incident 5 with 2 people (which the ambulence has). The 4 param I cant say is radius, but for the pedsInCavalcades and Merryweather R* uses 0.0f and for the top 3 (Emergency Services) they use 3.0f.
 *
 * Side Note: It seems calling the pedsInCavalcades or Merryweather then removing it seems to break you from calling the EmergencyEvents and I also believe pedsInCavalcades. (The V cavalcades of course not IV).
 *
 * Side Note 2: I say it breaks as if you call this proper,
 * if(CREATE_INCIDENT) etc it will return false if you do as I said above.
 * =====================================================
 *
 * Hash: 0x3F892CAF67444AE7 | Since: 323
 */
export function createIncident(dispatchService, pos, numUnits, radius) {
    return CreateIncident(dispatchService, pos.x, pos.y, pos.z, numUnits, radius, undefined, undefined);
}
/**
 * As for the 'police' incident, it will call police cars to you, but unlike PedsInCavalcades & Merryweather they won't start shooting at you unless you shoot first or shoot at them. The top 2 however seem to cancel theirselves if there is noone dead around you or a fire. I only figured them out as I found out the 3rd param is definately the amountOfPeople and they called incident 3 in scripts with 4 people (which the firetruck has) and incident 5 with 2 people (which the ambulence has). The 4 param I cant say is radius, but for the pedsInCavalcades and Merryweather R* uses 0.0f and for the top 3 (Emergency Services) they use 3.0f.
 *
 * Side Note: It seems calling the pedsInCavalcades or Merryweather then removing it seems to break you from calling the EmergencyEvents and I also believe pedsInCavalcades. (The V cavalcades of course not IV).
 *
 * Side Note 2: I say it breaks as if you call this proper,
 * if(CREATE_INCIDENT) etc it will return false if you do as I said above.
 * =====================================================
 *
 * Hash: 0x05983472F0494E60 | Since: 323
 */
export function createIncidentWithEntity(dispatchService, ped, numUnits, radius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CreateIncidentWithEntity(dispatchService, _ped, numUnits, radius, undefined, undefined);
}
/**
 * Delete an incident with a given id.
 *
 * =======================================================
 * Correction, I have change this to int, instead of int*
 * as it doesn't use a pointer to the createdIncident.
 * If you try it you will crash (or) freeze.
 * =======================================================
 *
 * Hash: 0x556C1AA270D5A207 | Since: 323
 */
export function deleteIncident(incidentId) {
    DeleteIncident(incidentId);
}
/**
 * No comment provided
 *
 * Hash: 0xDC518000E39DAE1F | Since: 323
 */
export function deleteStuntJump() {
    DeleteStuntJump(0);
}
/**
 * The game by default has 5 hospital respawn points. Disabling them all will cause the player to respawn at the last position they were.
 *
 * Hash: 0xC8535819C450EBA8 | Since: 323
 */
export function disableHospitalRestart(hospitalIndex, toggle) {
    DisableHospitalRestart(hospitalIndex, toggle);
}
/**
 * Disables the spawn point at the police house on the specified index.
 *
 * policeIndex: The police house index.
 * toggle: true to enable the spawn point, false to disable.
 *
 * - Nacorpio
 *
 * Hash: 0x23285DED6EBD7EA3 | Since: 323
 */
export function disablePoliceRestart(policeIndex, toggle) {
    DisablePoliceRestart(policeIndex, toggle);
}
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0x23227DF0B2115469 | Since: 323
 */
export function disableScreenDimmingThisFrame() {
    Citizen.invokeNative('0x23227DF0B2115469');
}
/**
 * No comment provided
 *
 * Hash: 0xA5272EBEDD4747F6 | Since: 323
 */
export function disableStuntJumpSet() {
    DisableStuntJumpSet(0);
}
/**
 * `sfink: note, p0 is set to 6 for PC platform in at least 1 script, or to `unk::_get_ui_language_id() == 0` otherwise.`
 *
 * NOTE: windowTitle uses text labels, and an invalid value will display nothing.
 *
 * www.gtaforums.com/topic/788343-vrel-script-hook-v/?p=1067380474
 *
 * windowTitle's
 * -----------------
 * CELL_EMAIL_BOD  =   "Enter your Eyefind message"
 * CELL_EMAIL_BODE =   "Message too long. Try again"
 * CELL_EMAIL_BODF    =   "Forbidden message. Try again"
 * CELL_EMAIL_SOD    =   "Enter your Eyefind subject"
 * CELL_EMAIL_SODE =   "Subject too long. Try again"
 * CELL_EMAIL_SODF    =   "Forbidden text. Try again"
 * CELL_EMASH_BOD   =   "Enter your Eyefind message"
 * CELL_EMASH_BODE =   "Message too long. Try again"
 * CELL_EMASH_BODF    =   "Forbidden message. Try again"
 * CELL_EMASH_SOD    =   "Enter your Eyefind subject"
 * CELL_EMASH_SODE =   "Subject too long. Try again"
 * CELL_EMASH_SODF    =   "Forbidden Text. Try again"
 * FMMC_KEY_TIP10   =   "Enter Synopsis"
 * FMMC_KEY_TIP12  =   "Enter Custom Team Name"
 * FMMC_KEY_TIP12F =   "Forbidden Text. Try again"
 * FMMC_KEY_TIP12N  =   "Custom Team Name"
 * FMMC_KEY_TIP8 =   "Enter Message"
 * FMMC_KEY_TIP8F   =   "Forbidden Text. Try again"
 * FMMC_KEY_TIP8FS  =   "Invalid Message. Try again"
 * FMMC_KEY_TIP8S  =   "Enter Message"
 * FMMC_KEY_TIP9    =   "Enter Outfit Name"
 * FMMC_KEY_TIP9F   =   "Invalid Outfit Name. Try again"
 * FMMC_KEY_TIP9N  =   "Outfit Name"
 * PM_NAME_CHALL  =   "Enter Challenge Name"
 *
 * Hash: 0x00DC833F2568DBF6 | Since: 323
 */
export function displayOnscreenKeyboard(windowTitle, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, maxInputLength) {
    DisplayOnscreenKeyboard(0, windowTitle, undefined, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, maxInputLength);
}
/**
 * No comment provided
 *
 * Hash: 0xCA78CFA0366592FE | Since: 323
 */
export function displayOnscreenKeyboardWithLongerInitialString(windowTitle, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, defaultConcat4, defaultConcat5, defaultConcat6, defaultConcat7, maxInputLength) {
    return DisplayOnscreenKeyboardWithLongerInitialString(0, windowTitle, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, defaultConcat4, defaultConcat5, defaultConcat6, defaultConcat7, maxInputLength);
}
/**
 * No comment provided
 *
 * Hash: 0x1327E2FE9746BAEE | Since: 323
 */
export function doesPopMultiplierAreaExist(id) {
    return DoesPopMultiplierAreaExist(id);
}
/**
 * No comment provided
 *
 * Hash: 0x171BAFB3C60389F4 | Since: 791
 */
export function doesPopMultiplierSphereExist(id) {
    return DoesPopMultiplierSphereExist(id);
}
/**
 * No comment provided
 *
 * Hash: 0x50EEAAD86232EE55 | Since: 323
 */
export function doAutoSave() {
    DoAutoSave();
}
/**
 * https://alloc8or.re/gta5/doc/enums/DispatchType.txt
 *
 * Hash: 0xDC0F817884CDD856 | Since: 323
 */
export function enableDispatchService(dispatchService, toggle) {
    EnableDispatchService(dispatchService, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE369A5783B866016 | Since: 323
 */
export function enableStuntJumpSet() {
    EnableStuntJumpSet(0);
}
/**
 * Makes the ped jump around like they're in a tennis match
 *
 * Hash: 0x28A04B411933F8A6 | Since: 323
 */
export function enableTennisMode(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    EnableTennisMode(_ped, toggle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA23E821FBDF8A5F2 | Since: 323
 */
export function endReplayStats() {
    EndReplayStats();
}
/**
 * Finds a position ahead of the player by predicting the players next actions.
 * The positions match path finding node positions.
 * When roads diverge, the position may rapidly change between two or more positions. This is due to the engine not being certain of which path the player will take.
 *
 * Hash: 0x6874E2190B0C1972 | Since: 323
 */
export function findSpawnPointInDirection(pos, fwdVecX, fwdVecY, fwdVecZ, distance) {
    return FindSpawnPointInDirection(pos.x, pos.y, pos.z, fwdVecX, fwdVecY, fwdVecZ, distance);
}
/**
 * Sets the localplayer playerinfo state back to playing (State 0)
 *
 * States are:
 * -1: "Invalid"
 * 0: "Playing"
 * 1: "Died"
 * 2: "Arrested"
 * 3: "Failed Mission"
 * 4: "Left Game"
 * 5: "Respawn"
 * 6: "In MP Cutscene"
 *
 * Hash: 0xC0AA53F866B3134D | Since: 323
 */
export function forceGameStatePlaying() {
    ForceGameStatePlaying();
}
/**
 * creates single lightning+thunder at random position
 *
 * Hash: 0xF6062E089251C898 | Since: 323
 */
export function forceLightningFlash() {
    ForceLightningFlash();
}
/**
 * No comment provided
 *
 * Hash: 0x8B3CA62B1EF19B62 | Since: 323
 */
export function getAllocatedStackSize() {
    return GetAllocatedStackSize();
}
/**
 * No comment provided
 *
 * Hash: 0x186FC4BE848E1C92 | Since: 323
 */
export function getAngleBetween2dVectors(x1, y1, x2, y2) {
    return GetAngleBetween2dVectors(x1, y1, x2, y2);
}
/**
 * No comment provided
 *
 * Hash: 0xB335F761606DB47C | Since: 323
 */
export function getBaseElementLocationFromMetadataBlock() {
    return GetBaseElementMetadata(undefined, false);
}
/**
 * Returns value of the '-benchmarkIterations' command line option.
 *
 * Hash: 0x4750FC27570311EC | Since: 323
 */
export function getBenchmarkIterations() {
    return GetBenchmarkIterationsFromCommandLine();
}
/**
 * Returns value of the '-benchmarkPass' command line option.
 *
 * Hash: 0x1B2366C3F2A5C8DF | Since: 323
 */
export function getBenchmarkPass() {
    return GetBenchmarkPassFromCommandLine();
}
/**
 * No comment provided
 *
 * Hash: 0x53158863FCC0893A | Since: 323
 */
export function getBitsInRange(_var, rangeStart, rangeEnd) {
    return GetBitsInRange(_var, rangeStart, rangeEnd);
}
/**
 * No comment provided
 *
 * Hash: 0xD10282B6E3751BA0 | Since: 323
 */
export function getCityDensity() {
    return Citizen.invokeNative('0xD10282B6E3751BA0');
}
/**
 * clamp: sets whether the product should be clamped between the given coordinates
 *
 * Hash: 0x21C235BC64831E5A | Since: 323
 */
export function getClosestPointOnLine(x1, y1, z1, x2, y2, z2, x3, y3, z3, clamp) {
    return new Vector3(Citizen.invokeNative('0x21C235BC64831E5A', x1, y1, z1, x2, y2, z2, x3, y3, z3, clamp));
}
/**
 * No comment provided
 *
 * Hash: 0x20AC25E781AE4A84 | Since: 323
 */
export function getCloudsAlpha() {
    return GetCloudHatOpacity();
}
/**
 * No comment provided
 *
 * Hash: 0xECF041186C5A94DC | Since: 2612
 */
export function getContentIdIndex(contentId) {
    if (typeof contentId === 'string')
        contentId = GetHashKey(contentId);
    return Citizen.invokeNative('0xECF041186C5A94DC', contentId);
}
/**
 * Returns pointer to an empty string.
 *
 * Hash: 0x24DA7D7667FD7B09 | Since: 323
 */
export function getContentToLoad() {
    return GetGlobalCharBuffer();
}
/**
 * No comment provided
 *
 * Hash: 0x3DA8C28346B62CED | Since: 2802
 */
export function getCoordsOfProjectileTypeInAngledArea(vecAngledAreaPoint1X, vecAngledAreaPoint1Y, vecAngledAreaPoint1Z, vecAngledAreaPoint2X, vecAngledAreaPoint2Y, vecAngledAreaPoint2Z, distanceOfOppositeFace, weaponType, bIsPlayer) {
    if (typeof weaponType === 'string')
        weaponType = GetHashKey(weaponType);
    return Citizen.invokeNative('0x3DA8C28346B62CED', vecAngledAreaPoint1X, vecAngledAreaPoint1Y, vecAngledAreaPoint1Z, vecAngledAreaPoint2X, vecAngledAreaPoint2Y, vecAngledAreaPoint2Z, distanceOfOppositeFace, weaponType, bIsPlayer);
}
/**
 * No comment provided
 *
 * Hash: 0x8D7A43EC6A5FEA45 | Since: 323
 */
export function getCoordsOfProjectileTypeInArea(x1, y1, z1, x2, y2, z2, projectileHash, ownedByPlayer) {
    if (typeof projectileHash === 'string')
        projectileHash = GetHashKey(projectileHash);
    return GetCoordsOfProjectileTypeInArea(x1, y1, z1, x2, y2, z2, projectileHash, ownedByPlayer);
}
/**
 * No comment provided
 *
 * Hash: 0xDFB4138EEFED7B81 | Since: 323
 */
export function getCoordsOfProjectileTypeWithinDistance(ped, weaponHash, distance) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetCoordsOfProjectileTypeWithinDistance(_ped, weaponHash, distance, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF3BBE884A14BB413 | Since: 323
 */
export function getCurrWeatherState() {
    return GetWeatherTypeTransition();
}
/**
 * Returns the distance between two three-dimensional points, optionally ignoring the Z values.
 * If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.
 *
 * `Consider using this faster native instead: SYSTEM::VDIST - DVIST always takes in consideration the 3D coordinates.`
 *
 * Hash: 0xF1B760881820C952 | Since: 323
 */
export function getDistanceBetweenCoords(x1, y1, z1, x2, y2, z2, useZ) {
    return GetDistanceBetweenCoords(x1, y1, z1, x2, y2, z2, useZ);
}
/**
 * No comment provided
 *
 * Hash: 0x4C9296CBCD1B971E | Since: 323
 */
export function getFakeWantedLevel() {
    return GetFakeWantedLevel();
}
/**
 * No comment provided
 *
 * Hash: 0xFC8202EFC642E6F2 | Since: 323
 */
export function getFrameCount() {
    return GetFrameCount();
}
/**
 * No comment provided
 *
 * Hash: 0x15C40837039FFAF7 | Since: 323
 */
export function getFrameTime() {
    return GetFrameTime();
}
/**
 * No comment provided
 *
 * Hash: 0x9CD27B0045628463 | Since: 323
 */
export function getGameTimer() {
    return GetGameTimer();
}
/**
 * No comment provided
 *
 * Hash: 0x8BDC7BFC57A81E76 | Since: 323
 */
export function getGroundZAndNormalFor3dCoord(pos) {
    return GetGroundZAndNormalFor3dCoord(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x9E82F0F362881B29 | Since: 505
 */
export function getGroundZExcludingObjectsFor3dCoord(pos) {
    return GetGroundZExcludingObjectsFor3dCoord(pos.x, pos.y, pos.z, false, false);
}
/**
 * Gets the ground elevation at the specified position. Note that if the specified position is below ground level, the function will output zero!
 *
 * x: Position on the X-axis to get ground elevation at.
 * y: Position on the Y-axis to get ground elevation at.
 * z: Position on the Z-axis to get ground elevation at.
 * groundZ: The ground elevation at the specified position.
 * ignoreWater: Nearly always 0, very rarely 1 in the scripts: https://gfycat.com/NiftyTatteredCricket
 *
 * Bear in mind this native can only calculate the elevation when the coordinates are within the client's render distance.
 *
 * Hash: 0xC906A7DAB05C8D2B | Since: 323
 */
export function getGroundZFor3dCoord(pos, ignoreWater) {
    return GetGroundZFor_3dCoord(pos.x, pos.y, pos.z, ignoreWater, false);
}
/**
 * This native converts its past string to hash. It is hashed using jenkins one at a time method.
 *
 * Hash: 0xD24D37CC275948CC | Since: 323
 */
export function getHashKey(_string) {
    return GetHashKey(_string);
}
/**
 * dx = x1 - x2
 * dy = y1 - y2
 *
 * Hash: 0x2FFB6B224F4B2926 | Since: 323
 */
export function getHeadingFromVector2d(dx, dy) {
    return GetHeadingFromVector2d(dx, dy);
}
/**
 * No comment provided
 *
 * Hash: 0xCBAD6729F7B1F4FC | Since: 323
 */
export function getIndexOfCurrentLevel() {
    return GetIndexOfCurrentLevel();
}
/**
 * Returns true if profile setting 208 is equal to 0.
 *
 * Hash: 0x6E04F06094C87047 | Since: 323
 */
export function getIsAutoSaveOff() {
    return GetIsAutoSaveOff();
}
/**
 * Although we don't have a jenkins hash for this one, the name is 100% confirmed.
 *
 * Hash: 0x9689123E3F213AA5 | Since: 323
 */
export function getIsPlayerInAnimalForm() {
    return GetIsPlayerInAnimalForm();
}
/**
 * No comment provided
 *
 * Hash: 0xF56DFB7B61BE7276 | Since: 323
 */
export function getLinePlaneIntersection() {
    return GetLinePlaneIntersection(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA33CDCCDA663159E | Since: 323
 */
export function getMissionFlag() {
    return GetMissionFlag();
}
/**
 * Gets the dimensions of a model.
 *
 * Calculate (maximum - minimum) to get the size, in which case, Y will be how long the model is.
 *
 * `Example from the scripts: MISC::GET_MODEL_DIMENSIONS(ENTITY::GET_ENTITY_MODEL(PLAYER::PLAYER_PED_ID()), &v_1A, &v_17);`
 *
 * Hash: 0x03E8D3D5F549087A | Since: 323
 */
export function getModelDimensions(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetModelDimensions(modelHash);
}
/**
 * Returns weather name hash
 *
 * Hash: 0x711327CD09C8F162 | Since: 323
 */
export function getNextWeatherTypeHashName() {
    return GetNextWeatherTypeHashName();
}
/**
 * No comment provided
 *
 * Hash: 0xFEAD16FC8F9DFC0F | Since: 323
 */
export function getNumberOfFreeStacksOfThisSize(stackSize) {
    return GetNumberOfFreeStacksOfThisSize(stackSize);
}
/**
 * No comment provided
 *
 * Hash: 0xEB4A0C2D56441717 | Since: 323
 */
export function getNumberResourcesAllocatedToWantedLevel(dispatchService) {
    return GetNumDispatchedUnitsForPlayer(dispatchService);
}
/**
 * No comment provided
 *
 * Hash: 0x996DD1E1E02F1008 | Since: 323
 */
export function getNumSuccessfulStuntJumps() {
    return GetNumSuccessfulStuntJumps();
}
/**
 * Returns NULL unless UPDATE_ONSCREEN_KEYBOARD() returns 1 in the same tick.
 *
 * Hash: 0x8362B09B91893647 | Since: 323
 */
export function getOnscreenKeyboardResult() {
    return GetOnscreenKeyboardResult();
}
/**
 * No comment provided
 *
 * Hash: 0xA0AD167E4B39D9A2 | Since: 2189
 */
export function getPointAreaOverlap() {
    return Citizen.invokeNative('0xA0AD167E4B39D9A2', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Returns current weather name hash
 *
 * Hash: 0x564B884A05EC45A3 | Since: 323
 */
export function getPrevWeatherTypeHashName() {
    return GetPrevWeatherTypeHashName();
}
/**
 * No comment provided
 *
 * Hash: 0xC488FF2356EA7791 | Since: 323
 */
export function getProfileSetting(profileSetting) {
    return GetProfileSetting(profileSetting);
}
/**
 * No comment provided
 *
 * Hash: 0x82FDE6A57EE4EE44 | Since: 323
 */
export function getProjectileOfProjectileTypeWithinDistance(ped, weaponHash, distance) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetProjectileNearPed(_ped, weaponHash, distance, false);
}
/**
 * No comment provided
 *
 * Hash: 0x96695E368AD855F3 | Since: 323
 */
export function getRainLevel() {
    return GetRainLevel();
}
/**
 * No comment provided
 *
 * Hash: 0xD2D57F1D764117B1 | Since: 323
 */
export function getRandomEventFlag() {
    return GetRandomEventFlag();
}
/**
 * No comment provided
 *
 * Hash: 0x313CE5879CEB6FCD | Since: 323
 */
export function getRandomFloatInRange(startRange, endRange) {
    return GetRandomFloatInRange(startRange, endRange);
}
/**
 * No comment provided
 *
 * Hash: 0xD53343AA4FB7DD28 | Since: 323
 */
export function getRandomIntInRange(startRange, endRange) {
    return GetRandomIntInRange(startRange, endRange);
}
/**
 * No comment provided
 *
 * Hash: 0xF2D49816A804D134 | Since: 1734
 */
export function getRandomMwcIntInRange(startRange, endRange) {
    return GetRandomIntInRange2(startRange, endRange);
}
/**
 * returns a float between 0.0 and 1.0, clamp: sets whether the product should be clamped between the given coordinates
 *
 * Hash: 0x7F8F6405F4777AF6 | Since: 323
 */
export function getRatioOfClosestPointOnLine(x1, y1, z1, x2, y2, z2, x3, y3, z3, clamp) {
    return Citizen.invokeNative('0x7F8F6405F4777AF6', x1, y1, z1, x2, y2, z2, x3, y3, z3, clamp);
}
/**
 * GET_GAME_TIMER() / 1000
 *
 * Hash: 0x3F60413F5DF65748 | Since: 2612
 */
export function getRealWorldTime() {
    return Citizen.invokeNative('0x3F60413F5DF65748');
}
/**
 * No comment provided
 *
 * Hash: 0x8098C8D6597AAE18 | Since: 323
 */
export function getReplayStatAtIndex(index) {
    return GetReplayStatAtIndex(index);
}
/**
 * No comment provided
 *
 * Hash: 0xDC9274A7EF6B2867 | Since: 323
 */
export function getReplayStatCount() {
    return GetReplayStatCount();
}
/**
 * No comment provided
 *
 * Hash: 0x5B1F2E327B6B6FE1 | Since: 323
 */
export function getReplayStatMissionId() {
    return Citizen.invokeNative('0x5B1F2E327B6B6FE1');
}
/**
 * No comment provided
 *
 * Hash: 0x2B626A0150E4D449 | Since: 323
 */
export function getReplayStatMissionType() {
    return GetReplayStatMissionType();
}
/**
 * No comment provided
 *
 * Hash: 0xA4A0065E39C9F25C | Since: 323
 */
export function getSaveHouseDetailsAfterSuccessfulLoad() {
    return Citizen.invokeNative('0xA4A0065E39C9F25C');
}
/**
 * No comment provided
 *
 * Hash: 0xA09F896CE912481F | Since: 323
 */
export function getSizeOfSaveData() {
    return GetSizeOfSaveData(false);
}
/**
 * No comment provided
 *
 * Hash: 0xC5868A966E5BE3AE | Since: 323
 */
export function getSnowLevel() {
    return GetSnowLevel();
}
/**
 * No comment provided
 *
 * Hash: 0x397BAA01068BAA96 | Since: 323
 */
export function getStatusOfManualSave() {
    return Citizen.invokeNative('0x397BAA01068BAA96');
}
/**
 * No comment provided
 *
 * Hash: 0x2B5E102E4A42F2BF | Since: 323
 */
export function getStatusOfMissionRepeatSave() {
    return GetStatusOfMissionRepeatSave();
}
/**
 * No comment provided
 *
 * Hash: 0xE599A503B3837E1B | Since: 323
 */
export function getSystemTimeStep() {
    return GetBenchmarkTime();
}
/**
 * No comment provided
 *
 * Hash: 0x19BFED045C647C49 | Since: 323
 */
export function getTennisSwingAnimCanBeInterrupted(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x19BFED045C647C49', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x17DF68D720AA77F8 | Since: 323
 */
export function getTennisSwingAnimComplete(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTennisSwingAnimComplete(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE95B0C7D5BA3B96B | Since: 323
 */
export function getTennisSwingAnimSwung(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xE95B0C7D5BA3B96B', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6856EC3D35C81EA4 | Since: 323
 */
export function getTotalSuccessfulStuntJumps() {
    return GetTotalSuccessfulStuntJumps();
}
/**
 * No comment provided
 *
 * Hash: 0x1F400FEF721170DA | Since: 323
 */
export function getWindDirection() {
    return new Vector3(GetWindDirection());
}
/**
 * No comment provided
 *
 * Hash: 0xA8CF1CC0AFCD3F12 | Since: 323
 */
export function getWindSpeed() {
    return GetWindSpeed();
}
/**
 * Hardcoded to always return true.
 *
 * Hash: 0x14832BF2ABA53FC5 | Since: 323
 */
export function hasAsyncInstallFinished() {
    return HasAsyncInstallFinished();
}
/**
 * p3 - possibly radius?
 *
 * Hash: 0x9870ACFB89A90995 | Since: 323
 */
export function hasBulletImpactedInArea(pos) {
    return HasBulletImpactedInArea(pos.x, pos.y, pos.z, 0, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xDC8C5D7CFEAB8394 | Since: 323
 */
export function hasBulletImpactedInBox() {
    return HasBulletImpactedInBox(0, 0, 0, 0, 0, 0, false, false);
}
/**
 * This native appears on the cheat_controller script and tracks a combination of buttons, which may be used to toggle cheats in-game. Credits to ThreeSocks for the info. The hash contains the combination, while the "amount" represents the amount of buttons used in a combination. The following page can be used to make a button combination: gta5offset.com/ts/hash/
 *
 * INT_SCORES_SCORTED was a hash collision
 *
 * Hash: 0x071E2A839DE82D90 | Since: 323
 */
export function hasCheatWithHashBeenActivated(hash, amount) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return HasButtonCombinationJustBeenEntered(hash, amount);
}
/**
 * No comment provided
 *
 * Hash: 0x2107A3773771186D | Since: 323
 */
export function hasCodeRequestedAutosave() {
    return Citizen.invokeNative('0x2107A3773771186D');
}
/**
 * No comment provided
 *
 * Hash: 0x6FDDF453C0C756EC | Since: 323
 */
export function hasGameInstalledThisSession() {
    return Citizen.invokeNative('0x6FDDF453C0C756EC');
}
/**
 * Get inputted "Cheat code", for example:
 *
 * while (TRUE)
 * {
 * `if (MISC::HAS_PC_CHEAT_WITH_HASH_BEEN_ACTIVATED(${fugitive}))`
 * {
 * // Do something.
 * }
 * `SYSTEM::WAIT(0);`
 * }
 *
 * Calling this will also set the last saved string hash to zero.
 *
 *
 * Hash: 0x557E43C447E700A8 | Since: 323
 */
export function hasPcCheatWithHashBeenActivated(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return HasCheatStringJustBeenEntered(hash);
}
/**
 * Hardcoded to return false.
 *
 * Hash: 0xE8B9C0EC9E183F35 | Since: 323
 */
export function hasResumedFromSuspend() {
    return HasResumedFromSuspend();
}
/**
 * No comment provided
 *
 * Hash: 0x075F1D57402C93BA | Since: 323
 */
export function haveCreditsReachedEnd() {
    return HaveCreditsReachedEnd();
}
/**
 * No comment provided
 *
 * Hash: 0xD642319C54AADEB6 | Since: 323
 */
export function haveReplayStatsBeenStored() {
    return Citizen.invokeNative('0xD642319C54AADEB6');
}
/**
 * No comment provided
 *
 * Hash: 0x21FFB63D8C615361 | Since: 323
 */
export function ignoreNextRestart(toggle) {
    IgnoreNextRestart(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8D74E26F54B4E5C3 | Since: 323
 */
export function informCodeOfContentIdOfCurrentUgcMission() {
    Citizen.invokeNative('0x8D74E26F54B4E5C3', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA61B4DF533DCB56E | Since: 323
 */
export function isAreaOccupied() {
    return IsAreaOccupied(0, 0, 0, 0, 0, 0, false, false, false, false, false, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x39455BF4F4F55186 | Since: 1868
 */
export function isAreaOccupiedSlow() {
    return Citizen.invokeNative('0x39455BF4F4F55186', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Used to block some of the prostitute stuff due to laws in Australia.
 *
 * Hash: 0x9F1935CA1F724008 | Since: 323
 */
export function isAussieVersion() {
    return IsAussieVersion();
}
/**
 * No comment provided
 *
 * Hash: 0x69240733738C19A0 | Since: 323
 */
export function isAutoSaveInProgress() {
    return IsAutoSaveInProgress();
}
/**
 * For projectiles, see: IS_PROJECTILE_TYPE_IN_ANGLED_AREA
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * Returns True if a bullet, as maintained by a pool within CWeaponManager, has been fired into the defined angled area.
 *
 * Hash: 0x1A8B5F3C01E2B477 | Since: 323
 */
export function isBulletInAngledArea(x1, y1, z1, x2, y2, z2, width, ownedByPlayer) {
    return IsBulletInAngledArea(x1, y1, z1, x2, y2, z2, width, ownedByPlayer);
}
/**
 * No comment provided
 *
 * Hash: 0x3F2023999AD51C1F | Since: 323
 */
export function isBulletInArea(pos, radius, ownedByPlayer) {
    return IsBulletInArea(pos.x, pos.y, pos.z, radius, ownedByPlayer);
}
/**
 * No comment provided
 *
 * Hash: 0xDE0F6D7450D37351 | Since: 323
 */
export function isBulletInBox(x1, y1, z1, x2, y2, z2, ownedByPlayer) {
    return IsBulletInBox(x1, y1, z1, x2, y2, z2, ownedByPlayer);
}
/**
 * Returns true if command line option '-benchmark' is set.
 *
 * Hash: 0xA049A5BE0F04F2F8 | Since: 323
 */
export function isCommandlineEndUserBenchmark() {
    return IsCommandLineBenchmarkValueSet();
}
/**
 * XBOX ONE
 *
 * Hash: 0x4D982ADB1978442D | Since: 323
 */
export function isDurangoVersion() {
    return IsDurangoVersion();
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x7EA2B6AF97ECA6ED | Since: 323
 */
export function isFrontendFading() {
    return IsFrontendFading();
}
/**
 * =======================================================
 * Correction, I have change this to int, instead of int*
 * as it doesn't use a pointer to the createdIncident.
 * If you try it you will crash (or) freeze.
 * =======================================================
 *
 * Hash: 0xC8BC6461E629BEAA | Since: 323
 */
export function isIncidentValid(incidentId) {
    return IsIncidentValid(incidentId);
}
/**
 * No comment provided
 *
 * Hash: 0xB8C0BB75D8A77DB3 | Since: 2545
 */
export function isJapaneseVersion() {
    return IsJapaneseVersion();
}
/**
 * No comment provided
 *
 * Hash: 0x8A75CE2956274ADD | Since: 323
 */
export function isMemoryCardInUse() {
    return IsMemoryCardInUse();
}
/**
 * No comment provided
 *
 * Hash: 0x2B4A15E44DE0F478 | Since: 323
 */
export function isMinigameInProgress() {
    return IsMinigameInProgress();
}
/**
 * No comment provided
 *
 * Hash: 0x2FAA3A30BEC0F25D | Since: 323
 */
export function isNextWeatherType(weatherType) {
    return IsNextWeatherType(weatherType);
}
/**
 * PS4
 *
 * Hash: 0xA72BC0B675B1519E | Since: 323
 */
export function isOrbisVersion() {
    return IsOrbisVersion();
}
/**
 * No comment provided
 *
 * Hash: 0x48AF36444B965238 | Since: 323
 */
export function isPcVersion() {
    return IsPcVersion();
}
/**
 * No comment provided
 *
 * Hash: 0xE54E209C35FFA18D | Since: 323
 */
export function isPointObscuredByAMissionEntity() {
    return IsPointObscuredByAMissionEntity(0, 0, 0, 0, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1312F4B242609CE3 | Since: 1290
 */
export function isPopMultiplierAreaNetworked(id) {
    return IsPopMultiplierAreaUnk(id);
}
/**
 * `range`: The range, seems to not be very accurate during testing.
 * `p4`: Unknown, when set to true it seems to always return true no matter what I try.
 * `checkVehicle`: Check for any vehicles in that area.
 * `checkPeds`: Check for any peds in that area.
 * `ignoreEntity`: This entity will be ignored if it's in the area. Set to 0 if you don't want to exclude any entities.
 * The BOOL parameters that are documented have not been confirmed. They are just documented from what I've found during testing. They may not work as expected in all cases.
 *
 * Returns true if there is anything in that location matching the provided parameters.
 *
 * Hash: 0xADCDE75E1C60F32D | Since: 323
 */
export function isPositionOccupied(pos, range, checkVehicles, checkPeds, ignoreEntity) {
    const _ignoreEntity = ignoreEntity instanceof IEntity ? ignoreEntity.handle() : ignoreEntity;
    return IsPositionOccupied(pos.x, pos.y, pos.z, range, false, checkVehicles, checkPeds, false, false, _ignoreEntity, false);
}
/**
 * No comment provided
 *
 * Hash: 0x44F28F86433B10A9 | Since: 323
 */
export function isPrevWeatherType(weatherType) {
    return IsPrevWeatherType(weatherType);
}
/**
 * Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.
 *
 * - Nacorpio
 *
 *
 * ownedByPlayer = only projectiles fired by the player will be detected.
 *
 * Hash: 0x5270A8FBC098C3F8 | Since: 323
 */
export function isProjectileInArea(x1, y1, z1, x2, y2, z2, ownedByPlayer) {
    return IsProjectileInArea(x1, y1, z1, x2, y2, z2, ownedByPlayer);
}
/**
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 *
 * Hash: 0xF0BC12401061DEA0 | Since: 323
 */
export function isProjectileTypeInAngledArea(x1, y1, z1, x2, y2, z2, width, ownedByPlayer) {
    return IsProjectileTypeInAngledArea(x1, y1, z1, x2, y2, z2, width, undefined, ownedByPlayer);
}
/**
 * Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a axis-aligned bounding box.
 *
 * Hash: 0x2E0DC353342C4A6D | Since: 323
 */
export function isProjectileTypeInArea(x1, y1, z1, x2, y2, z2, _type, ownedByPlayer) {
    return IsProjectileTypeInArea(x1, y1, z1, x2, y2, z2, _type, ownedByPlayer);
}
/**
 * No comment provided
 *
 * Hash: 0x34318593248C8FB2 | Since: 323
 */
export function isProjectileTypeWithinDistance(pos, projectileHash, radius, ownedByPlayer) {
    if (typeof projectileHash === 'string')
        projectileHash = GetHashKey(projectileHash);
    return IsProjectileTypeWithinDistance(pos.x, pos.y, pos.z, projectileHash, radius, ownedByPlayer);
}
/**
 * PS5 (Prospero) version...
 *
 * Hash: 0x807ABE1AB65C24D2 | Since: 2612
 */
export function isProsperoVersion() {
    return Citizen.invokeNative('0x807ABE1AB65C24D2');
}
/**
 * No comment provided
 *
 * Hash: 0xCCA1072C29D096C2 | Since: 323
 */
export function isPs3Version() {
    return IsPs3Version();
}
/**
 * Xbox Series (Scarlett) version...
 *
 * Hash: 0xC545AB1CF97ABB34 | Since: 2612
 */
export function isScarlettVersion() {
    return Citizen.invokeNative('0xC545AB1CF97ABB34');
}
/**
 * No comment provided
 *
 * Hash: 0xF911E695C1EB8518 | Since: 2612
 */
export function isScePlatform() {
    return Citizen.invokeNative('0xF911E695C1EB8518');
}
/**
 * Determines whether there is a sniper bullet within the specified coordinates. The coordinates form an axis-aligned bounding box.
 *
 * Hash: 0xFEFCF11B01287125 | Since: 323
 */
export function isSniperBulletInArea(x1, y1, z1, x2, y2, z2) {
    return IsSniperBulletInArea(x1, y1, z1, x2, y2, z2);
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x61A23B7EDA9BDA24 | Since: 323
 */
export function isSniperInverted() {
    return IsSniperInverted();
}
/**
 * No comment provided
 *
 * Hash: 0x0A27B2B6282F7169 | Since: 2545
 */
export function isSteamVersion() {
    return IsSteamVersion();
}
/**
 * No comment provided
 *
 * Hash: 0xF22B6C47C6EAB066 | Since: 323
 */
export function isStringNull(_string) {
    return IsStringNull(_string);
}
/**
 * No comment provided
 *
 * Hash: 0xCA042B6957743895 | Since: 323
 */
export function isStringNullOrEmpty(_string) {
    return IsStringNullOrEmpty(_string);
}
/**
 * No comment provided
 *
 * Hash: 0x7A3F19700A4D0525 | Since: 323
 */
export function isStuntJumpInProgress() {
    return IsStuntJumpInProgress();
}
/**
 * No comment provided
 *
 * Hash: 0x2272B0A1343129F4 | Since: 323
 */
export function isStuntJumpMessageShowing() {
    return IsStuntJumpMessageShowing();
}
/**
 * No comment provided
 *
 * Hash: 0x5D5479D115290C3F | Since: 323
 */
export function isTennisMode(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsTennisMode(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7B30F65D7B710098 | Since: 323
 */
export function isThisAMinigameScript() {
    return IsThisAMinigameScript();
}
/**
 * No comment provided
 *
 * Hash: 0xF6201B4DAF662A9D | Since: 323
 */
export function isXbox360Version() {
    return IsXbox360Version();
}
/**
 * No comment provided
 *
 * Hash: 0x138679CA01E21F53 | Since: 2612
 */
export function isXboxPlatform() {
    return Citizen.invokeNative('0x138679CA01E21F53');
}
/**
 * Returns true if the current frontend menu is FE_MENU_VERSION_LANDING_MENU
 *
 * Hash: 0x3BBBD13E5041A79E | Since: 323
 */
export function landingScreenStartedEndUserBenchmark() {
    return LandingMenuIsActive();
}
/**
 * The following cloudhats are useable:
 * altostratus
 * Cirrus
 * cirrocumulus
 * Clear 01
 * Cloudy 01
 * Contrails
 * Horizon
 * horizonband1
 * horizonband2
 * horizonband3
 * horsey
 * Nimbus
 * Puffs
 * RAIN
 * Snowy 01
 * Stormy 01
 * stratoscumulus
 * Stripey
 * shower
 * Wispy
 *
 *
 * Hash: 0xFC4842A34657BFCB | Since: 323
 */
export function loadCloudHat(name, transitionTime) {
    LoadCloudHat(name, transitionTime);
}
/**
 * No comment provided
 *
 * Hash: 0x9243BAC96D64C050 | Since: 323
 */
export function networkSetScriptIsSafeForNetworkGame() {
    NetworkSetScriptIsSafeForNetworkGame();
}
/**
 * p0 was always 2 in R* scripts.
 * Called before calling DISPLAY_ONSCREEN_KEYBOARD if the input needs to be saved.
 *
 * Hash: 0x3ED1438C1F5C6612 | Since: 323
 */
export function nextOnscreenKeyboardResultWillDisplayUsingTheseFonts() {
    NextOnscreenKeyboardResultWillDisplayUsingTheseFonts(0);
}
/**
 * No comment provided
 *
 * Hash: 0xFA3FFB0EEBC288A3 | Since: 2060
 */
export function overrideFreezeFlags() {
    Citizen.invokeNative('0xFA3FFB0EEBC288A3', false);
}
/**
 * No comment provided
 *
 * Hash: 0x1162EA8AE9D24EEA | Since: 323
 */
export function overrideSaveHouse() {
    return OverrideSaveHouse(false, 0, 0, 0, 0, false, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2C2B3493FBF51C71 | Since: 323
 */
export function pauseDeathArrestRestart(toggle) {
    PauseDeathArrestRestart(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8FA9C42FC5D7C64B | Since: 323
 */
export function playTennisDiveAnim(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayTennisDiveAnim(_ped, 0, 0, 0, 0, false);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0xE266ED23311F24D4 | Since: 323
 */
export function playTennisSwingAnim(ped, animDict, animName) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayTennisSwingAnim(_ped, animDict, animName, 0, 0, false);
}
/**
 * Returns duration of how long the game has been in power-saving mode (aka "constrained") in milliseconds.
 *
 * Hash: 0xABB2FA71C83A1B72 | Since: 323
 */
export function plmGetConstrainedDurationMs() {
    return GetPowerSavingModeDuration();
}
/**
 * aka "constrained"
 *
 * Hash: 0x684A41975F077262 | Since: 323
 */
export function plmIsInConstrainedMode() {
    return IsInPowerSavingMode();
}
/**
 * spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called
 *
 * Hash: 0x7472BB270D7B4F3E | Since: 323
 */
export function populateNow() {
    PopulateNow();
}
/**
 * No comment provided
 *
 * Hash: 0x11B56FBBF7224868 | Since: 323
 */
export function preloadCloudHat(name) {
    PreloadCloudHat(name);
}
/**
 * No comment provided
 *
 * Hash: 0xE3D969D2785FFB5E | Since: 323
 */
export function preventArrestStateThisFrame() {
    Citizen.invokeNative('0xE3D969D2785FFB5E');
}
/**
 * No comment provided
 *
 * Hash: 0x72DE52178C291CB5 | Since: 323
 */
export function queueMissionRepeatLoad() {
    return QueueMissionRepeatLoad();
}
/**
 * Shows the screen which is visible before you redo a mission? The game will make a restoration point where you will cameback when the mission is over.
 * Returns 1 if the message isn't currently on screen
 *
 * Hash: 0x44A0BDC559B35F6E | Since: 323
 */
export function queueMissionRepeatSave() {
    return QueueMissionRepeatSave();
}
/**
 * No comment provided
 *
 * Hash: 0xEB2104E905C6F2E9 | Since: 323
 */
export function queueMissionRepeatSaveForBenchmarkTest() {
    return Citizen.invokeNative('0xEB2104E905C6F2E9');
}
/**
 * Exits the game and downloads a fresh social club update on next restart.
 *
 * Hash: 0xEB6891F03362FB12 | Since: 323
 */
export function quitGame() {
    QuitGame();
}
/**
 * No comment provided
 *
 * Hash: 0xC8F4131414C835A1 | Since: 323
 */
export function registerBoolToSave(name) {
    return RegisterBoolToSave(name);
}
/**
 * No comment provided
 *
 * Hash: 0x10C2FA78D0E128A1 | Since: 323
 */
export function registerEnumToSave(name) {
    return RegisterEnumToSave(name);
}
/**
 * No comment provided
 *
 * Hash: 0x7CAEC29ECB5DFEBB | Since: 323
 */
export function registerFloatToSave(name) {
    return RegisterFloatToSave(name);
}
/**
 * No comment provided
 *
 * Hash: 0xA735353C77334EA0 | Since: 323
 */
export function registerInt64ToSave(name) {
    return RegisterInt64ToSave(name);
}
/**
 * No comment provided
 *
 * Hash: 0x34C9EE5986258415 | Since: 323
 */
export function registerIntToSave(name) {
    return RegisterIntToSave(name);
}
/**
 * returns savehouseHandle
 *
 * Hash: 0xC0714D0A7EEECA54 | Since: 323
 */
export function registerSaveHouse(pos) {
    return RegisterSaveHouse(pos.x, pos.y, pos.z, 0, undefined, undefined, undefined);
}
/**
 * `MISC::REGISTER_TEXT_LABEL_15_TO_SAVE(&a_0._f1, "tlPlateText");`
 * `MISC::REGISTER_TEXT_LABEL_15_TO_SAVE(&a_0._f1C, "tlPlateText_pending");`
 * `MISC::REGISTER_TEXT_LABEL_15_TO_SAVE(&a_0._f10B, "tlCarAppPlateText");`
 *
 * Hash: 0x6F7794F28C6B2535 | Since: 323
 */
export function registerTextLabel15ToSave(name) {
    return RegisterTextLabelToSave2(name);
}
/**
 * Only found 3 times in decompiled scripts.
 *
 * `MISC::REGISTER_TEXT_LABEL_23_TO_SAVE(a_0, "Movie_Name_For_This_Player");`
 * `MISC::REGISTER_TEXT_LABEL_23_TO_SAVE(&a_0._fB, "Ringtone_For_This_Player");`
 * `MISC::REGISTER_TEXT_LABEL_23_TO_SAVE(&a_0._f1EC4._f12[v_A\/\*6\*\/], &v_13); // where v_13 is "MPATMLOGSCRS0" thru "MPATMLOGSCRS15"`
 *
 * Hash: 0x48F069265A0E4BEC | Since: 323
 */
export function registerTextLabel23ToSave(name) {
    return Citizen.invokeNative('0x48F069265A0E4BEC', name);
}
/**
 * Only found 2 times in decompiled scripts.
 *
 * `MISC::REGISTER_TEXT_LABEL_31_TO_SAVE(&a_0._f1F5A._f6[0\/\*8\*\/], "TEMPSTAT_LABEL"); // gets saved in a struct called "g_SaveData_STRING_ScriptSaves"`
 * `MISC::REGISTER_TEXT_LABEL_31_TO_SAVE(&a_0._f4B4[v_1A\/\*8\*\/], &v_5); // where v_5 is "Name0" thru "Name9", gets saved in a struct called "OUTFIT_Name"`
 *
 * Hash: 0x8269816F6CFD40F8 | Since: 323
 */
export function registerTextLabel31ToSave(name) {
    return Citizen.invokeNative('0x8269816F6CFD40F8', name);
}
/**
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(a_0, "Thumb_label");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f10, "Photo_label");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(a_0, "GXTlabel");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f21, "StringComp");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f43, "SecondStringComp");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f53, "ThirdStringComp");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f32, "SenderStringComp");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f726[v_1A\/\*16\*\/], &v_20); // where v_20 is "LastJobTL_0_1" thru "LastJobTL_2_1", gets saved in a struct called "LAST_JobGamer_TL"`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f4B, "PAID_PLAYER");`
 * `MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f5B, "RADIO_STATION");`
 *
 * Hash: 0xFAA457EF263E8763 | Since: 323
 */
export function registerTextLabel63ToSave(name) {
    return Citizen.invokeNative('0xFAA457EF263E8763', name);
}
/**
 * No comment provided
 *
 * Hash: 0xEDB1232C5BEAE62F | Since: 323
 */
export function registerTextLabelToSave(name) {
    return RegisterTextLabelToSave(name);
}
/**
 * No comment provided
 *
 * Hash: 0x264AC28B01B353A5 | Since: 323
 */
export function removeDispatchSpawnBlockingArea() {
    RemoveDispatchSpawnBlockingArea(0);
}
/**
 * No comment provided
 *
 * Hash: 0xB129E447A2EDA4BF | Since: 323
 */
export function removePopMultiplierArea(id) {
    RemovePopMultiplierArea(id, false);
}
/**
 * Removes population multiplier sphere
 *
 * Hash: 0xE6869BECDD8F2403 | Since: 323
 */
export function removePopMultiplierSphere(id) {
    RemovePopMultiplierSphere(id, false);
}
/**
 * No comment provided
 *
 * Hash: 0x77A84429DD9F0A15 | Since: 323
 */
export function resetDispatchIdealSpawnDistance() {
    ResetDispatchIdealSpawnDistance();
}
/**
 * No comment provided
 *
 * Hash: 0xAC7BFD5C1D83EA75 | Since: 323
 */
export function resetDispatchSpawnBlockingAreas() {
    ResetDispatchSpawnBlockingAreas();
}
/**
 * No comment provided
 *
 * Hash: 0x5896F2BD5683A4E1 | Since: 1868
 */
export function resetDispatchSpawnLocation() {
    ResetDispatchSpawnLocation();
}
/**
 * No comment provided
 *
 * Hash: 0xEB2DB0CAD13154B3 | Since: 323
 */
export function resetDispatchTimeBetweenSpawnAttempts() {
    ResetDispatchTimeBetweenSpawnAttempts(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x437138B6A830166A | Since: 323
 */
export function resetEndUserBenchmark() {
    ResetBenchmarkRecording();
}
/**
 * No comment provided
 *
 * Hash: 0xD9F692D349249528 | Since: 323
 */
export function resetWantedResponseNumPedsToSpawn() {
    Citizen.invokeNative('0xD9F692D349249528');
}
/**
 * In singleplayer it does exactly what the name implies. In FiveM / GTA:Online it shows `Disconnecting from GTA Online` HUD and then quits the game.
 *
 * Hash: 0xE574A662ACAEFBB1 | Since: 372
 */
export function restartGame() {
    RestartGame();
}
/**
 * Saves the benchmark recording to %USERPROFILE%\Documents\Rockstar Games\GTA V\Benchmarks and submits some metrics.
 *
 * Hash: 0x37DEB0AA183FB6D8 | Since: 323
 */
export function saveEndUserBenchmark() {
    SaveBenchmarkRecording();
}
/**
 * No comment provided
 *
 * Hash: 0x8EF5573A1F801A5C | Since: 323
 */
export function scriptRaceGetPlayerSplitTime(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return ScriptRaceGetPlayerSplitTime(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x0A60017F841A54F2 | Since: 323
 */
export function scriptRaceInit() {
    ScriptRaceInit(0, 0, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1BB299305C3E8C13 | Since: 323
 */
export function scriptRacePlayerHitCheckpoint(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ScriptRacePlayerHitCheckpoint(_player, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1FF6BF9A63E5757F | Since: 323
 */
export function scriptRaceShutdown() {
    ScriptRaceShutdown();
}
/**
 * No comment provided
 *
 * Hash: 0x438822C279B73B93 | Since: 573
 */
export function setBeastJumpThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetBeastModeActive(_player);
}
/**
 * This sets bit [offset] of [address] to on.
 *
 * The offsets used are different bits to be toggled on and off, typically there is only one address used in a script.
 *
 * Example:
 * `MISC::SET_BIT(&bitAddress, 1);`
 *
 * To check if this bit has been enabled:
 * `MISC::IS_BIT_SET(bitAddress, 1); // will return 1 afterwards`
 *
 * Please note, this method may assign a value to [address] when used.
 *
 * Hash: 0x933D6A9EEC1BACD0 | Since: 323
 */
export function setBit(offset) {
    return SetBit(offset);
}
/**
 * No comment provided
 *
 * Hash: 0x8EF07E15701D61ED | Since: 323
 */
export function setBitsInRange(rangeStart, rangeEnd) {
    return SetBitsInRange(rangeStart, rangeEnd, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF36199225D6D8C86 | Since: 323
 */
export function setCloudsAlpha(opacity) {
    SetCloudsAlpha(opacity);
}
/**
 * No comment provided
 *
 * Hash: 0x02DEAAC8F8EA7FE7 | Since: 323
 */
export function setCloudSettingsOverride() {
    SetCloudSettingsOverride(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4B82FA6F2D624634 | Since: 2612
 */
export function setContentIdIndex(contentId, index) {
    if (typeof contentId === 'string')
        contentId = GetHashKey(contentId);
    Citizen.invokeNative('0x4B82FA6F2D624634', contentId, index);
}
/**
 * No comment provided
 *
 * Hash: 0xB938B7E6D3C0620C | Since: 323
 */
export function setCreditsActive(toggle) {
    SetCreditsActive(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB51B9AB9EF81868C | Since: 323
 */
export function setCreditsFadeOutWithScreen(toggle) {
    Citizen.invokeNative('0xB51B9AB9EF81868C', toggle);
}
/**
 * Mixes two weather types. If percentWeather2 is set to 0.0f, then the weather will be entirely of weatherType1, if it is set to 1.0f it will be entirely of weatherType2. If it's set somewhere in between, there will be a mixture of weather behaviors. To test, try this in the RPH console, and change the float to different values between 0 and 1:
 *
 * execute "NativeFunction.Natives.x578C752848ECFA0C(Game.GetHashKey(""RAIN""), Game.GetHashKey(""SMOG""), 0.50f);
 *
 * Note that unlike most of the other weather natives, this native takes the hash of the weather name, not the plain string. These are the weather names and their hashes:
 *
 * CLEAR  0x36A83D84
 * EXTRASUNNY  0x97AA0A79
 * CLOUDS  0x30FDAF5C
 * OVERCAST    0xBB898D2D
 * RAIN    0x54A69840
 * CLEARING    0x6DB1A50D
 * THUNDER 0xB677829F
 * SMOG    0x10DCF4B5
 * FOGGY   0xAE737644
 * XMAS    0xAAC9C895
 * SNOWLIGHT   0x23FB812B
 * BLIZZARD    0x27EA2814
 *
 *
 *
 *
 *
 * \/\* OLD INVALID INFO BELOW \*\/
 * Not tested. Based purely on disassembly. Instantly sets the weather to sourceWeather, then transitions to targetWeather over the specified transitionTime in seconds.
 *
 * If an invalid hash is specified for sourceWeather, the current weather type will be used.
 * If an invalid hash is specified for targetWeather, the next weather type will be used.
 * If an invalid hash is specified for both sourceWeather and targetWeather, the function just changes the transition time of the current transition.
 *
 * Hash: 0x578C752848ECFA0C | Since: 323
 */
export function setCurrWeatherState(weatherType1, weatherType2, percentWeather2) {
    if (typeof weatherType1 === 'string')
        weatherType1 = GetHashKey(weatherType1);
    if (typeof weatherType2 === 'string')
        weatherType2 = GetHashKey(weatherType2);
    SetWeatherTypeTransition(weatherType1, weatherType2, percentWeather2);
}
/**
 * No comment provided
 *
 * Hash: 0x6FE601A64180D423 | Since: 323
 */
export function setDispatchIdealSpawnDistance(distance) {
    SetDispatchIdealSpawnDistance(distance);
}
/**
 * No comment provided
 *
 * Hash: 0xD10F442036302D50 | Since: 323
 */
export function setDispatchSpawnLocation(pos) {
    SetDispatchSpawnLocation(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x44F7CBC1BEB3327D | Since: 323
 */
export function setDispatchTimeBetweenSpawnAttempts() {
    SetDispatchTimeBetweenSpawnAttempts(undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x48838ED9937A15D1 | Since: 323
 */
export function setDispatchTimeBetweenSpawnAttemptsMultiplier() {
    SetDispatchTimeBetweenSpawnAttemptsMultiplier(undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA66C71C98D5F2CFB | Since: 323
 */
export function setExplosiveAmmoThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetExplosiveAmmoThisFrame(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xFF1BED81BFDC0FE0 | Since: 323
 */
export function setExplosiveMeleeThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetExplosiveMeleeThisFrame(_player);
}
/**
 * Sets whether the game should fade in after the player dies or is arrested.
 *
 * Hash: 0xDA66D2796BA33F12 | Since: 323
 */
export function setFadeInAfterDeathArrest(toggle) {
    SetFadeInAfterDeathArrest(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF3D78F59DFE18D79 | Since: 323
 */
export function setFadeInAfterLoad(toggle) {
    SetFadeInAfterLoad(toggle);
}
/**
 * Sets whether the game should fade out after the player is arrested.
 *
 * Hash: 0x1E0B4DC0D990A4E7 | Since: 323
 */
export function setFadeOutAfterArrest(toggle) {
    SetFadeOutAfterArrest(toggle);
}
/**
 * Sets whether the game should fade out after the player dies.
 *
 * Hash: 0x4A18E01DF2C87B86 | Since: 323
 */
export function setFadeOutAfterDeath(toggle) {
    SetFadeOutAfterDeath(toggle);
}
/**
 * Sets a visually fake wanted level on the user interface. Used by Rockstar's scripts to "override" regular wanted levels and make custom ones while the real wanted level and multipliers are still in effect.
 *
 * Max is 6, anything above this makes it just 6. Also the mini-map gets the red & blue flashing effect.
 *
 * Hash: 0x1454F2448DE30163 | Since: 323
 */
export function setFakeWantedLevel(fakeWantedLevel) {
    SetFakeWantedLevel(fakeWantedLevel);
}
/**
 * No comment provided
 *
 * Hash: 0x11879CDD803D30F4 | Since: 323
 */
export function setFireAmmoThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetFireAmmoThisFrame(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xA1183BCFEE0F93D1 | Since: 1180
 */
export function setForcedJumpThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetForcePlayerToJump(_player);
}
/**
 * Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused which means you will lose control and the game remains in paused mode until you exit GTA5.exe
 *
 * Hash: 0x577D1284D6873711 | Since: 323
 */
export function setGamePaused(toggle) {
    SetGamePaused(toggle);
}
/**
 * level can be from 0 to 3
 * 0: 9.8 - normal
 * 1: 2.4 - low
 * 2: 0.1 - very low
 * 3: 0.0 - off
 *
 * Hash: 0x740E14FAD5842351 | Since: 323
 */
export function setGravityLevel(level) {
    SetGravityLevel(level);
}
/**
 * No comment provided
 *
 * Hash: 0xD261BA3E7E998072 | Since: 323
 */
export function setIdealSpawnDistanceForIncident(incidentId) {
    SetIncidentUnk(incidentId, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB08B85D860E7BA3C | Since: 323
 */
export function setIncidentRequestedUnits(incidentId, dispatchService, numUnits) {
    SetIncidentRequestedUnits(incidentId, dispatchService, numUnits);
}
/**
 * Sets an unknown flag used by CScene in determining which entities from CMapData scene nodes to draw, similar to SET_INSTANCE_PRIORITY_MODE.
 *
 * Hash: 0xC5F0A8EBD3F361CE | Since: 323
 */
export function setInstancePriorityHint(flag) {
    SetInstancePriorityHint(flag);
}
/**
 * Formerly known as _LOWER_MAP_PROP_DENSITY and wrongly due to idiots as _ENABLE_MP_DLC_MAPS.
 * Sets the maximum prop density and changes a loading screen flag from 'loading story mode' to 'loading GTA Online'. Does not touch DLC map data at all.
 *
 * In fact, I doubt this changes the flag whatsoever, that's the OTHER native idiots use together with this that does so, this one only causes a loading screen to show as it reloads map data.
 *
 * Hash: 0x9BAE5AD2508DF078 | Since: 323
 */
export function setInstancePriorityMode() {
    SetInstancePriorityMode(0);
}
/**
 * No comment provided
 *
 * Hash: 0x19E00D7322C6F85B | Since: 323
 */
export function setMinigameInProgress(toggle) {
    SetMinigameInProgress(toggle);
}
/**
 * If true, the player can't save the game.
 *
 *
 * If the parameter is true, sets the mission flag to true, if the parameter is false, the function does nothing at all.
 *
 * ^ also, if the mission flag is already set, the function does nothing at all
 *
 * Hash: 0xC4301E5121A0ED73 | Since: 323
 */
export function setMissionFlag(toggle) {
    SetMissionFlag(toggle);
}
/**
 * Appears to have an optional bool parameter that is unused in the scripts.
 *
 * If you pass true, something will be set to zero.
 *
 * Hash: 0xA43D5C6FE51ADBEF | Since: 323
 */
export function setOverrideWeather(weatherType) {
    SetOverrideWeather(weatherType);
}
/**
 * Identical to SET_OVERRIDE_WEATHER but has an additional BOOL param that sets some weather var to 0 if true
 *
 * Hash: 0x1178E104409FE58C | Since: 2189
 */
export function setOverrideWeatherex(weatherType) {
    Citizen.invokeNative('0x1178E104409FE58C', weatherType, false);
}
/**
 * If toggle is true, the ped's head is shown in the pause menu
 * If toggle is false, the ped's head is not shown in the pause menu
 *
 * Hash: 0x4EBB7E87AA0DBED4 | Since: 323
 */
export function setPlayerIsInAnimalForm(toggle) {
    SetPlayerIsInAnimalForm(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x9D8D44ADBBA61EF2 | Since: 323
 */
export function setPlayerIsRepeatingAMission(toggle) {
    SetPlayerRockstarEditorDisabled(toggle);
}
/**
 * With an `intensity` higher than `0.5f`, only the creation of puddles gets faster, rain and rain sound won't increase after that.
 * With an `intensity` of `0.0f` rain and rain sounds are disabled and there won't be any new puddles.
 * To use the rain intensity of the current weather, call this native with `-1f` as `intensity`.
 *
 * Hash: 0x643E26EA6E024D92 | Since: 323
 */
export function setRain(intensity) {
    SetRainLevel(intensity);
}
/**
 * If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
 * Does nothing if the mission flag is set.
 *
 * Hash: 0x971927086CFD2158 | Since: 323
 */
export function setRandomEventFlag(toggle) {
    SetRandomEventFlag(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x444D98F98C11F3EC | Since: 323
 */
export function setRandomSeed(seed) {
    SetRandomSeed(seed);
}
/**
 * No comment provided
 *
 * Hash: 0x8B05F884CF7E8020 | Since: 323
 */
export function setRandomWeatherType() {
    SetRandomWeatherType();
}
/**
 * No comment provided
 *
 * Hash: 0x706B5EDCAA7FA663 | Since: 323
 */
export function setRestartCoordOverride(pos, heading) {
    SetRestartCustomPosition(pos.x, pos.y, pos.z, heading);
}
/**
 * Activates (usused?) riot mode. All NPCs are being hostile to each other (including player). Also the game will give weapons (pistols, smgs) to random NPCs.
 *
 * Hash: 0x2587A48BC88DFADF | Since: 323
 */
export function setRiotModeEnabled(toggle) {
    SetRiotModeEnabled(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x4F548CABEAE553BC | Since: 323
 */
export function setSaveHouse(savehouseHandle) {
    SetSaveHouse(savehouseHandle, false, false);
}
/**
 * ignoreVehicle - bypasses vehicle check of the local player (it will not open if you are in a vehicle and this is set to false)
 *
 * Hash: 0xC9BF75D28165FF77 | Since: 323
 */
export function setSaveMenuActive(ignoreVehicle) {
    SetSaveMenuActive(ignoreVehicle);
}
/**
 * Sets GtaThread+0x14A
 *
 * Hash: 0x65D2EBB47E1CEC21 | Since: 323
 */
export function setScriptHighPrio(toggle) {
    Citizen.invokeNative('0x65D2EBB47E1CEC21', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x7F06937B0CDCBC1A | Since: 1868
 */
export function setSnow(level) {
    SetSnowLevel(level);
}
/**
 * No comment provided
 *
 * Hash: 0xD79185689F8FD5DF | Since: 323
 */
export function setStuntJumpsCanTrigger(toggle) {
    SetStuntJumpsCanTrigger(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x57FFF03E423A4C0B | Since: 323
 */
export function setSuperJumpThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSuperJumpThisFrame(_player);
}
/**
 * From the scripts:
 *
 * `MISC::SET_TENNIS_MOVE_NETWORK_SIGNAL_FLOAT(sub_aa49(a_0), "ForcedStopDirection", v_E);`
 *
 * Related to tennis mode.
 *
 * Hash: 0x54F157E0336A3822 | Since: 323
 */
export function setTennisMoveNetworkSignalFloat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x54F157E0336A3822', _ped, undefined, 0);
}
/**
 * Sets bit 3 in GtaThread+0x150
 *
 * Hash: 0x6F2135B6129620C1 | Since: 323
 */
export function setThisIsATriggerScript(toggle) {
    Citizen.invokeNative('0x6F2135B6129620C1', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xAA391C728106F7AF | Since: 323
 */
export function setThisScriptCanBePaused(toggle) {
    SetThisScriptCanBePaused(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB98236CAAECEF897 | Since: 323
 */
export function setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle) {
    SetThisScriptCanRemoveBlipsCreatedByAnyScript(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xFB00CA71DA386228 | Since: 323
 */
export function setTickerJohnmarstonIsDone() {
    Citizen.invokeNative('0xFB00CA71DA386228');
}
/**
 * Maximum value is 1.
 * At a value of 0 the game will still run at a minimum time scale.
 *
 * Slow Motion 1: 0.6
 * Slow Motion 2: 0.4
 * Slow Motion 3: 0.2
 *
 * Hash: 0x1D408577D440E81E | Since: 323
 */
export function setTimeScale(timeScale) {
    SetTimeScale(timeScale);
}
/**
 * No comment provided
 *
 * Hash: 0xE532EC1A63231B4F | Since: 323
 */
export function setWantedResponseNumPedsToSpawn() {
    Citizen.invokeNative('0xE532EC1A63231B4F', 0, 0);
}
/**
 * The following weatherTypes are used in the scripts:
 * "CLEAR"
 * "EXTRASUNNY"
 * "CLOUDS"
 * "OVERCAST"
 * "RAIN"
 * "CLEARING"
 * "THUNDER"
 * "SMOG"
 * "FOGGY"
 * "XMAS"
 * "SNOW"
 * "SNOWLIGHT"
 * "BLIZZARD"
 * "HALLOWEEN"
 * "NEUTRAL"
 *
 * Hash: 0x29B487C359E19889 | Since: 323
 */
export function setWeatherTypeNow(weatherType) {
    SetWeatherTypeNow(weatherType);
}
/**
 * The following weatherTypes are used in the scripts:
 * "CLEAR"
 * "EXTRASUNNY"
 * "CLOUDS"
 * "OVERCAST"
 * "RAIN"
 * "CLEARING"
 * "THUNDER"
 * "SMOG"
 * "FOGGY"
 * "XMAS"
 * "SNOW"
 * "SNOWLIGHT"
 * "BLIZZARD"
 * "HALLOWEEN"
 * "NEUTRAL"
 *
 * Hash: 0xED712CA327900C8A | Since: 323
 */
export function setWeatherTypeNowPersist(weatherType) {
    SetWeatherTypeNowPersist(weatherType);
}
/**
 * No comment provided
 *
 * Hash: 0xFB5045B7C42B75BF | Since: 323
 */
export function setWeatherTypeOvertimePersist(weatherType, time) {
    SetWeatherTypeOvertimePersist(weatherType, time);
}
/**
 * The following weatherTypes are used in the scripts:
 * "CLEAR"
 * "EXTRASUNNY"
 * "CLOUDS"
 * "OVERCAST"
 * "RAIN"
 * "CLEARING"
 * "THUNDER"
 * "SMOG"
 * "FOGGY"
 * "XMAS"
 * "SNOW"
 * "SNOWLIGHT"
 * "BLIZZARD"
 * "HALLOWEEN"
 * "NEUTRAL"
 *
 * Hash: 0x704983DF373B198F | Since: 323
 */
export function setWeatherTypePersist(weatherType) {
    SetWeatherTypePersist(weatherType);
}
/**
 * Sets the the normalized wind speed value. The wind speed clamps always at 12.0, SET_WIND sets the wind in a percentage, 0.0 is 0 and 1.0 is 12.0. Setting this value to a negative number resumes the random wind speed changes provided by the game.
 *
 * Hash: 0xAC3A74E8384A9919 | Since: 323
 */
export function setWind(speed) {
    SetWind(speed);
}
/**
 * The wind direction in radians
 * 180 degrees (PI), wind will blow from the south. Setting this value to a negative number resumes the random wind direction changes provided by the game.
 *
 * Hash: 0xEB0F4468467B4528 | Since: 323
 */
export function setWindDirection(direction) {
    SetWindDirection(direction);
}
/**
 * Using this native will set the absolute wind speed value. The wind speed clamps to a range of 0.0- 12.0. Setting this value to a negative number resumes the random wind speed changes provided by the game.
 *
 * Hash: 0xEE09ECEDBABE47FC | Since: 323
 */
export function setWindSpeed(speed) {
    SetWindSpeed(speed);
}
/**
 * No comment provided
 *
 * Hash: 0x867654CBC7606F2C | Since: 323
 */
export function shootSingleBulletBetweenCoords(x1, y1, z1, x2, y2, z2, damage, weaponHash, ownerPed, isAudible, isInvisible, speed) {
    const _ownerPed = ownerPed instanceof IPed ? ownerPed.handle() : ownerPed;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    ShootSingleBulletBetweenCoords(x1, y1, z1, x2, y2, z2, damage, false, weaponHash, _ownerPed, isAudible, isInvisible, speed);
}
/**
 * entity - entity to ignore
 *
 * Hash: 0xE3A7742E0B7A2F8B | Since: 323
 */
export function shootSingleBulletBetweenCoordsIgnoreEntity(x1, y1, z1, x2, y2, z2, damage, weaponHash, ownerPed, isAudible, isInvisible, speed, entity) {
    const _ownerPed = ownerPed instanceof IPed ? ownerPed.handle() : ownerPed;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    ShootSingleBulletBetweenCoordsIgnoreEntity(x1, y1, z1, x2, y2, z2, damage, false, weaponHash, _ownerPed, isAudible, isInvisible, speed, _entity, undefined);
}
/**
 * entity - entity to ignore
 * targetEntity - entity to home in on, if the weapon hash provided supports homing
 *
 * Hash: 0xBFE5756E7407064A | Since: 323
 */
export function shootSingleBulletBetweenCoordsIgnoreEntityNew(x1, y1, z1, x2, y2, z2, damage, weaponHash, ownerPed, isAudible, isInvisible, speed, entity, targetEntity) {
    const _ownerPed = ownerPed instanceof IPed ? ownerPed.handle() : ownerPed;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    ShootSingleBulletBetweenCoordsIgnoreEntityNew(x1, y1, z1, x2, y2, z2, damage, false, weaponHash, _ownerPed, isAudible, isInvisible, speed, _entity, false, false, _targetEntity, false, undefined, undefined, undefined);
}
/**
 * Returns true if the game is using the metric measurement system (profile setting 227), false if imperial is used.
 *
 * Hash: 0xD3D15555431AB793 | Since: 323
 */
export function shouldUseMetricMeasurements() {
    return ShouldUseMetricMeasurements();
}
/**
 * This native always come right before SET_ENTITY_QUATERNION where its final 4 parameters are SLERP_NEAR_QUATERNION p9 to p12
 *
 * Hash: 0xF2F6A2FA49278625 | Since: 323
 */
export function slerpNearQuaternion(t, pos, w, x1, y1, z1, w1) {
    return SlerpNearQuaternion(t, pos.x, pos.y, pos.z, w, x1, y1, z1, w1);
}
/**
 * No comment provided
 *
 * Hash: 0x92790862E36C2ADA | Since: 323
 */
export function startEndUserBenchmark() {
    StartBenchmarkRecording();
}
/**
 * No comment provided
 *
 * Hash: 0x60FE567DF1B1AF9D | Since: 323
 */
export function startSaveArrayWithSize(size, arrayName) {
    return StartSaveArrayWithSize(size, arrayName);
}
/**
 * No comment provided
 *
 * Hash: 0xA9575F812C6A7997 | Since: 323
 */
export function startSaveData() {
    return StartSaveData(undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xBF737600CDDBEADD | Since: 323
 */
export function startSaveStructWithSize(size, structName) {
    return StartSaveStructWithSize(size, structName);
}
/**
 * No comment provided
 *
 * Hash: 0xC7DB36C24634F52B | Since: 323
 */
export function stopEndUserBenchmark() {
    StopBenchmarkRecording();
}
/**
 * No comment provided
 *
 * Hash: 0x04456F95153C6BE4 | Since: 323
 */
export function stopSaveArray() {
    StopSaveArray();
}
/**
 * No comment provided
 *
 * Hash: 0x74E20C9145FB66FD | Since: 323
 */
export function stopSaveData() {
    StopSaveData();
}
/**
 * No comment provided
 *
 * Hash: 0xEB1774DF12BB9F12 | Since: 323
 */
export function stopSaveStruct() {
    StopSaveStruct();
}
/**
 * Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.
 *
 * If all checks have passed successfully, the return value will be set to whatever strtol(string, 0i64, 10); returns.
 *
 * Hash: 0x5A5F40FE637EB584 | Since: 323
 */
export function stringToInt(_string) {
    return StringToInt(_string);
}
/**
 * No comment provided
 *
 * Hash: 0x1EAE0A6E978894A2 | Since: 323
 */
export function supressRandomEventThisFrame(eventType, suppress) {
    SupressRandomEventThisFrame(eventType, suppress);
}
/**
 * No comment provided
 *
 * Hash: 0x632106CC96E82E91 | Since: 323
 */
export function tan() {
    return Tan(0);
}
/**
 * No comment provided
 *
 * Hash: 0x9DC711BC69C548DF | Since: 323
 */
export function terminateAllScriptsWithThisName(scriptName) {
    TerminateAllScriptsWithThisName(scriptName);
}
/**
 * Toggles some stunt jump stuff.
 *
 * Hash: 0xFB80AB299D2EE1BD | Since: 757
 */
export function toggleShowOptionalStuntJumpCamera(toggle) {
    ToggleShowOptionalStuntJumpCamera(toggle);
}
/**
 * Returns true if the current frontend menu is FE_MENU_VERSION_SP_PAUSE
 *
 * Hash: 0xEA2F2061875EED90 | Since: 323
 */
export function uiStartedEndUserBenchmark() {
    return UiStartedEndUserBenchmark();
}
/**
 * No comment provided
 *
 * Hash: 0x957E790EA1727B64 | Since: 323
 */
export function unloadAllCloudHats() {
    ClearCloudHat();
}
/**
 * No comment provided
 *
 * Hash: 0xA74802FB8D0B7814 | Since: 323
 */
export function unloadCloudHat(name) {
    UnloadCloudHat(name, 0);
}
/**
 * Returns the current status of the onscreen keyboard, and updates the output.
 *
 * Status Codes:
 *
 * -1: Keyboard isn't active
 * 0: User still editing
 * 1: User has finished editing
 * 2: User has canceled editing
 *
 * Hash: 0x0CF2B696BBF945AE | Since: 323
 */
export function updateOnscreenKeyboard() {
    return UpdateOnscreenKeyboard();
}
/**
 * No comment provided
 *
 * Hash: 0x693478ACBD7F18E7 | Since: 1103
 */
export function useActiveCameraForTimeslicingCentre() {
    Citizen.invokeNative('0x693478ACBD7F18E7');
}
/**
 * No comment provided
 *
 * Hash: 0xF14878FC50BEC6EE | Since: 323
 */
export function usingMissionCreator(toggle) {
    UsingMissionCreator(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xA8434F1DFF41D6E7 | Since: 323
 */
export function waterOverrideFadeIn() {
    WaterOverrideFadeIn(0);
}
/**
 * No comment provided
 *
 * Hash: 0xC3C221ADDDE31A11 | Since: 323
 */
export function waterOverrideFadeOut() {
    WaterOverrideFadeOut(0);
}
/**
 * No comment provided
 *
 * Hash: 0x31727907B2C43C55 | Since: 323
 */
export function waterOverrideSetOceannoiseminamplitude(minAmplitude) {
    WaterOverrideSetOceannoiseminamplitude(minAmplitude);
}
/**
 * No comment provided
 *
 * Hash: 0x405591EC8FD9096D | Since: 323
 */
export function waterOverrideSetOceanwaveamplitude(amplitude) {
    WaterOverrideSetOceanwaveamplitude(amplitude);
}
/**
 * No comment provided
 *
 * Hash: 0xB3E6360DDE733E82 | Since: 323
 */
export function waterOverrideSetOceanwavemaxamplitude(maxAmplitude) {
    WaterOverrideSetOceanwavemaxamplitude(maxAmplitude);
}
/**
 * No comment provided
 *
 * Hash: 0xF751B16FB32ABC1D | Since: 323
 */
export function waterOverrideSetOceanwaveminamplitude(minAmplitude) {
    WaterOverrideSetOceanwaveminamplitude(minAmplitude);
}
/**
 * No comment provided
 *
 * Hash: 0x7C9C0B1EEB1F9072 | Since: 323
 */
export function waterOverrideSetRipplebumpiness(bumpiness) {
    WaterOverrideSetRipplebumpiness(bumpiness);
}
/**
 * No comment provided
 *
 * Hash: 0xB9854DFDE0D833D6 | Since: 323
 */
export function waterOverrideSetRippledisturb(disturb) {
    WaterOverrideSetRippledisturb(disturb);
}
/**
 * No comment provided
 *
 * Hash: 0x9F5E6BB6B34540DA | Since: 323
 */
export function waterOverrideSetRipplemaxbumpiness(maxBumpiness) {
    WaterOverrideSetRipplemaxbumpiness(maxBumpiness);
}
/**
 * No comment provided
 *
 * Hash: 0x6216B116083A7CB4 | Since: 323
 */
export function waterOverrideSetRippleminbumpiness(minBumpiness) {
    WaterOverrideSetRippleminbumpiness(minBumpiness);
}
/**
 * No comment provided
 *
 * Hash: 0xB8F87EAD7533B176 | Since: 323
 */
export function waterOverrideSetShorewaveamplitude(amplitude) {
    WaterOverrideSetShorewaveamplitude(amplitude);
}
/**
 * No comment provided
 *
 * Hash: 0xA7A1127490312C36 | Since: 323
 */
export function waterOverrideSetShorewavemaxamplitude(maxAmplitude) {
    WaterOverrideSetShorewavemaxamplitude(maxAmplitude);
}
/**
 * No comment provided
 *
 * Hash: 0xC3EAD29AB273ECE8 | Since: 323
 */
export function waterOverrideSetShorewaveminamplitude(minAmplitude) {
    WaterOverrideSetShorewaveminamplitude(minAmplitude);
}
/**
 * This seems to edit the water wave, intensity around your current location.
 *
 * 0.0f = Normal
 * 1.0f = So Calm and Smooth, a boat will stay still.
 * 3.0f = Really Intense.
 *
 * Hash: 0xC54A08C85AE4D410 | Since: 323
 */
export function waterOverrideSetStrength(strength) {
    WaterOverrideSetStrength(strength);
}
/**
 * Returns prop type for given model hash
 *
 * Hash: 0x8BAF8AD59F47AAFC | Since: 3095
 */
export function getContentPropType(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return Citizen.invokeNative('0x8BAF8AD59F47AAFC', model);
}
/**
 * No comment provided
 *
 * Hash: 0xE2BCD0EFAE90D1F4 | Since: 3504
 */
export function isXboxpcVersion() {
    return Citizen.invokeNative('0xE2BCD0EFAE90D1F4');
}
/**
 * No comment provided
 *
 * Hash: 0xBA4583AF4C678A9B | Since: 3095
 */
export function setContentPropType(model, _type) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    Citizen.invokeNative('0xBA4583AF4C678A9B', model, _type);
}
