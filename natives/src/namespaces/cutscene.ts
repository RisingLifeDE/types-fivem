import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0xB56BBBCC2955D9CB | Since: 323
 */
export function canRequestAssetsForEntity(): boolean {
    return CanRequestAssetsForCutsceneEntity();
}

/**
 * modelHash (p1) was always 0 in R* scripts
 * 
 * Hash: 0x645D0B458D8E17B5 | Since: 323
 */
export function canSetEnterStateForRegisteredEntity(cutsceneEntName: string, modelHash: number | string): boolean {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CanSetEnterStateForRegisteredEntity(cutsceneEntName, modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2CBCD0930DFB420 | Since: 323
 */
export function canSetExitStateForCamera(): boolean {
    return CanSetExitStateForCamera(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C6A6451C79E4662 | Since: 323
 */
export function canSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: number | string): boolean {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CanSetExitStateForRegisteredEntity(cutsceneEntName, modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x5EDEF0CF8C1DAB3C | Since: 323
 */
export function canUseMobilePhoneDuring(): boolean {
    return Citizen.invokeNative('0x5EDEF0CF8C1DAB3C');
}

/**
 * No comment provided
 * 
 * Hash: 0x499EF20C5DB25C59 | Since: 323
 */
export function doesEntityExist(cutsceneEntName: string, modelHash: number | string): boolean {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return DoesCutsceneEntityExist(cutsceneEntName, modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x4FCD976DA686580C | Since: 1290
 */
export function doesHandleExist(cutsceneHandle: number): number {
    return Citizen.invokeNative('0x4FCD976DA686580C', cutsceneHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x583DF8E3D4AFBD98 | Since: 323
 */
export function getConcatSectionPlaying(): number {
    return Citizen.invokeNative('0x583DF8E3D4AFBD98');
}

/**
 * No comment provided
 * 
 * Hash: 0x971D7B15BCDBEF99 | Since: 1734
 */
export function getEndTime(): number {
    return Citizen.invokeNative('0x971D7B15BCDBEF99');
}

/**
 * No comment provided
 * 
 * Hash: 0x5D583F71C901F2A3 | Since: 2802
 */
export function getPlayDuration(): number {
    return Citizen.invokeNative('0x5D583F71C901F2A3');
}

/**
 * No comment provided
 * 
 * Hash: 0x710286BC5EF4D6E1 | Since: 3258
 */
export function getPlayTime(): number {
    return GetCutscenePlayTime();
}

/**
 * No comment provided
 * 
 * Hash: 0x49010A6A396553D8 | Since: 323
 */
export function getSectionPlaying(): number {
    return GetCutsceneSectionPlaying();
}

/**
 * No comment provided
 * 
 * Hash: 0xE625BEABBAFFDAB9 | Since: 323
 */
export function getTime(): number {
    return GetCutsceneTime();
}

/**
 * No comment provided
 * 
 * Hash: 0xEE53B14A19E480D4 | Since: 323
 */
export function getTotalDuration(): number {
    return GetCutsceneTotalDuration();
}

/**
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * Hash: 0x0ABC54DE641DC0FC | Since: 323
 */
export function getCutFileConcatCount(cutsceneName: string): number {
    return GetCutFileNumSections(cutsceneName);
}

/**
 * No comment provided
 * 
 * Hash: 0x1FA904B60E492336 | Since: 3570
 */
export function getCutFileOffset(cutsceneName: string, index: number): Vector3 {
    return new Vector3(Citizen.invokeNative('0x1FA904B60E492336', cutsceneName, index));
}

/**
 * No comment provided
 * 
 * Hash: 0x0A2E9FDB9A8C62F6 | Since: 323
 */
export function getEntityIndexOfEntity(cutsceneEntName: string, modelHash: number | string): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return GetEntityIndexOfCutsceneEntity(cutsceneEntName, modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xC0741A26499654CD | Since: 323
 */
export function getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: number | string): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return GetEntityIndexOfRegisteredEntity(cutsceneEntName, modelHash);
}

/**
 * Possibly HAS_CUTSCENE_CUT_THIS_FRAME, needs more research.
 * 
 * Hash: 0x708BDD8CD795B043 | Since: 323
 */
export function hasCutThisFrame(): boolean {
    return HasCutsceneCutThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x7C0A893088881D57 | Since: 323
 */
export function hasFinished(): boolean {
    return HasCutsceneFinished();
}

/**
 * No comment provided
 * 
 * Hash: 0xC59F528E9AB9F339 | Since: 323
 */
export function hasLoaded(): boolean {
    return HasCutsceneLoaded();
}

/**
 * Simply checks if the cutscene has loaded and doesn't check via CutSceneManager as opposed to HAS_[THIS]_CUTSCENE_LOADED.
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * Hash: 0xA1C996C2A744262E | Since: 323
 */
export function hasCutFileLoaded(cutsceneName: string): boolean {
    return HasCutFileLoaded(cutsceneName);
}

/**
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * Hash: 0x228D3D94F8A11C3C | Since: 323
 */
export function hasThisLoaded(cutsceneName: string): boolean {
    return HasThisCutsceneLoaded(cutsceneName);
}

/**
 * No comment provided
 * 
 * Hash: 0x991251AFC3981F84 | Since: 323
 */
export function isActive(): boolean {
    return IsCutsceneActive();
}

/**
 * This function is hard-coded to always return 1.
 * 
 * Hash: 0x4CEBC1ED31E8925E | Since: 323
 */
export function isAuthorized(cutsceneName: string): boolean {
    return Citizen.invokeNative('0x4CEBC1ED31E8925E', cutsceneName);
}

/**
 * No comment provided
 * 
 * Hash: 0x71B74D2AE19338D0 | Since: 323
 */
export function isPlaybackFlagSet(flag: number): boolean {
    return IsCutscenePlaybackFlagSet(flag);
}

/**
 * No comment provided
 * 
 * Hash: 0xD3C2E180A40F031E | Since: 323
 */
export function isPlaying(): boolean {
    return IsCutscenePlaying();
}

/**
 * No comment provided
 * 
 * Hash: 0xA0FE76168A189DDB | Since: 323
 */
export function isMultiheadFadeUp(): boolean {
    return Citizen.invokeNative('0xA0FE76168A189DDB');
}

/**
 * No comment provided
 * 
 * Hash: 0x2F137B508DE238F2 | Since: 323
 */
export function networkSetMocapCanBeSkipped(toggle: boolean): void {
    Citizen.invokeNative('0x2F137B508DE238F2', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE40C1C56DF95C2E8 | Since: 323
 */
export function registerEntityFor(cutscenePed: number | IPed, cutsceneEntName: string, modelHash: number | string): void {
    const _cutscenePed = cutscenePed instanceof IPed ? cutscenePed.handle() : cutscenePed;
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    RegisterEntityForCutscene(_cutscenePed, cutsceneEntName, 0, modelHash, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x440AF51A3462B86F | Since: 323
 */
export function remove(): void {
    RemoveCutscene();
}

/**
 * Simply unloads the cutscene and doesn't do extra stuff that REMOVE_CUTSCENE does.
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * Hash: 0xD00D76A7DFC9D852 | Since: 323
 */
export function removeCutFile(cutsceneName: string): void {
    RemoveCutFile(cutsceneName);
}

/**
 * flags: Usually 8
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * Hash: 0x7A86743F475D9E09 | Since: 323
 */
export function request(cutsceneName: string, flags: number): void {
    RequestCutscene(cutsceneName, flags);
}

/**
 * flags: Usually 8
 * 
 * playbackFlags: Which scenes should be played.
 * Example: 0x105 (bit 0, 2 and 8 set) will enable scene 1, 3 and 9.
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * Hash: 0xC23DE0E91C30B58C | Since: 323
 */
export function requestWithPlaybackList(cutsceneName: string, playbackFlags: number, flags: number): void {
    RequestCutsceneWithPlaybackList(cutsceneName, playbackFlags, flags);
}

/**
 * Simply loads the cutscene and doesn't do extra stuff that REQUEST_CUTSCENE does.
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * Hash: 0x06A3524161C502BA | Since: 323
 */
export function requestCutFile(cutsceneName: string): void {
    RequestCutFile(cutsceneName);
}

/**
 * No comment provided
 * 
 * Hash: 0x2131046957F31B04 | Since: 323
 */
export function setCanDisplayMinimapDuringThisUpdate(): void {
    RegisterSynchronisedScriptSpeech();
}

/**
 * No comment provided
 * 
 * Hash: 0xE36A98D8AB3D3C66 | Since: 323
 */
export function setCarGeneratorsCanUpdateDuring(): void {
    Citizen.invokeNative('0xE36A98D8AB3D3C66', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x41FAA8FB2ECE8720 | Since: 323
 */
export function setCanBeSkipped(): void {
    SetCutsceneCanBeSkipped(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C61C75BEE8184C2 | Since: 323
 */
export function setEntityStreamingFlags(cutsceneEntName: string): void {
    SetCutsceneEntityStreamingFlags(cutsceneEntName, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x8093F23ABACCC7D4 | Since: 323
 */
export function setFadeValues(): void {
    SetCutsceneFadeValues(false, false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x20746F7B1032A3C7 | Since: 323
 */
export function setMultiheadFade(): void {
    Citizen.invokeNative('0x20746F7B1032A3C7', false, false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x06EE9048FD080382 | Since: 323
 */
export function setMultiheadFadeManual(): void {
    Citizen.invokeNative('0x06EE9048FD080382', false);
}

/**
 * p3 could be heading. Needs more research.
 * 
 * Hash: 0xB812B3FD1C01CF27 | Since: 323
 */
export function setOrigin(pos: Vector3): void {
    SetCutsceneOrigin(pos.x, pos.y, pos.z, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x011883F41211432A | Since: 323
 */
export function setOriginAndOrientation(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void {
    Citizen.invokeNative('0x011883F41211432A', x1, y1, z1, x2, y2, z2, 0);
}

/**
 * Full list of ped components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedComponentVariations.json
 * 
 * Hash: 0xBA01E7B6DEEFBBC9 | Since: 323
 */
export function setPedComponentVariation(cutsceneEntName: string, componentId: number, drawableId: number, textureId: number, modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    SetCutscenePedComponentVariation(cutsceneEntName, componentId, drawableId, textureId, modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A56C06EBEF2B0D9 | Since: 323
 */
export function setPedComponentVariationFromPed(cutsceneEntName: string, ped: number | IPed, modelHash: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    SetCutscenePedComponentVariationFromPed(cutsceneEntName, _ped, modelHash);
}

/**
 * Thanks R*! ;)
 * 
 * if ((l_161 == 0) || (l_161 == 2)) {
 * sub_2ea27("Trying to set Jimmy prop variation");
 * `CUTSCENE::SET_CUTSCENE_PED_PROP_VARIATION("Jimmy_Boston", 1, 0, 0, 0);`
 * }
 * 
 * Full list of ped components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedComponentVariations.json
 * 
 * Hash: 0x0546524ADE2E9723 | Since: 323
 */
export function setPedPropVariation(cutsceneEntName: string, componentId: number, drawableId: number, textureId: number, modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    SetCutscenePedPropVariation(cutsceneEntName, componentId, drawableId, textureId, modelHash);
}

/**
 * Only used twice in R* scripts
 * 
 * Hash: 0x9896CE4721BE84BA | Since: 323
 */
export function setTriggerArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void {
    SetCutsceneTriggerArea(x1, y1, z1, x2, y2, z2);
}

/**
 * Toggles a value (bool) for cutscenes.
 * 
 * Hash: 0xC61B86C9F61EB404 | Since: 323
 */
export function setPadCanShakeDuring(toggle: boolean): void {
    Citizen.invokeNative('0xC61B86C9F61EB404', toggle);
}

/**
 * Sets the cutscene's owning thread ID.
 * 
 * Hash: 0x8D9DF6ECA8768583 | Since: 323
 */
export function setScriptCanStart(threadId: number): void {
    Citizen.invokeNative('0x8D9DF6ECA8768583', threadId);
}

/**
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 * 
 * Hash: 0x7F96F23FA9B73327 | Since: 323
 */
export function setVehicleModelPlayerWillExitScene(modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    Citizen.invokeNative('0x7F96F23FA9B73327', modelHash);
}

/**
 * flags: Usually 0.
 * 
 * Hash: 0x186D5CB5E7B0FF7B | Since: 323
 */
export function start(flags: number): void {
    StartCutscene(flags);
}

/**
 * flags: Usually 0.
 * 
 * Hash: 0x1C9ADDA3244A1FBF | Since: 323
 */
export function startAtCoords(pos: Vector3, flags: number): void {
    StartCutsceneAtCoords(pos.x, pos.y, pos.z, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7272775B4DC786E | Since: 323
 */
export function stop(): void {
    StopCutscene(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD220BDD222AC4A1E | Since: 323
 */
export function stopImmediately(): void {
    StopCutsceneImmediately();
}

/**
 * No comment provided
 * 
 * Hash: 0x40C8656EDAEDD569 | Since: 323
 */
export function wasSkipped(): boolean {
    return WasCutsceneSkipped();
}

