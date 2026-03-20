/**
 * No comment provided
 *
 * Hash: 0x0BC3144DEB678666 | Since: 323
 */
export function addModelToCreatorBudget(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return AddModelToCreatorBudget(modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x8E2A065ABDAE6994 | Since: 323
 */
export function allowPlayerSwitchAscent() {
    AllowPlayerSwitchAscent();
}
/**
 * No comment provided
 *
 * Hash: 0xAD5FDF34B81BFE79 | Since: 323
 */
export function allowPlayerSwitchDescent() {
    AllowPlayerSwitchDescent();
}
/**
 * No comment provided
 *
 * Hash: 0x74DE2E8739086740 | Since: 323
 */
export function allowPlayerSwitchOutro() {
    AllowPlayerSwitchOutro();
}
/**
 * No comment provided
 *
 * Hash: 0x43D1680C6D19A8E9 | Since: 323
 */
export function allowPlayerSwitchPan() {
    AllowPlayerSwitchPan();
}
/**
 * No comment provided
 *
 * Hash: 0x9BADDC94EF83B823 | Since: 323
 */
export function beginSrl() {
    BeginSrl();
}
/**
 * No comment provided
 *
 * Hash: 0x31B73D1EA9F01DA2 | Since: 323
 */
export function clearFocus() {
    ClearFocus();
}
/**
 * No comment provided
 *
 * Hash: 0xCE58B1CFB9290813 | Since: 323
 */
export function clearHdArea() {
    ClearHdArea();
}
/**
 * No comment provided
 *
 * Hash: 0xBD605B8E0E18B3BB | Since: 323
 */
export function disableSwitchOutroFx() {
    DisableSwitchOutroFx();
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x2DA49C3B79856961 | Since: 323
 */
export function doesAnimDictExist(animDict) {
    return DoesAnimDictExist(animDict);
}
/**
 * No comment provided
 *
 * Hash: 0xD4793DFF3AF2ABCD | Since: 323
 */
export function enableSwitchPauseBeforeDescent() {
    EnableSwitchPauseBeforeDescent();
}
/**
 * Clear the current srl and stop rendering the area selected by PREFETCH_SRL and started with BEGIN_SRL.
 *
 * Hash: 0x0A41540E63C9EE17 | Since: 323
 */
export function endSrl() {
    EndSrl();
}
/**
 * No comment provided
 *
 * Hash: 0x03F1A106BDA7DD3E | Since: 323
 */
export function forceAllowTimeBasedFadingThisFrame() {
    Citizen.invokeNative('0x03F1A106BDA7DD3E');
}
/**
 * No comment provided
 *
 * Hash: 0xF741BD853611592D | Since: 2189
 */
export function getGlobalWaterFile() {
    return GetGlobalWaterType();
}
/**
 * x1, y1, z1 -- Coords of your ped model
 * x2, y2, z2 -- Coords of the ped you want to switch to
 *
 * Hash: 0xB5D7B26B45720E05 | Since: 323
 */
export function getIdealPlayerSwitchType(x1, y1, z1, x2, y2, z2) {
    return GetIdealPlayerSwitchType(x1, y1, z1, x2, y2, z2);
}
/**
 * No comment provided
 *
 * Hash: 0x0C15B0E443B2349D | Since: 323
 */
export function getLodscale() {
    return GetLodscale();
}
/**
 * No comment provided
 *
 * Hash: 0x4060057271CEBC89 | Since: 323
 */
export function getNumberOfRequests() {
    return GetNumberOfStreamingRequests();
}
/**
 * No comment provided
 *
 * Hash: 0x20F898A5D9782800 | Since: 323
 */
export function getPlayerShortSwitchState() {
    return GetPlayerShortSwitchState();
}
/**
 * No comment provided
 *
 * Hash: 0x5B48A06DD0E792A5 | Since: 323
 */
export function getPlayerSwitchInterpOutCurrentTime() {
    return GetPlayerSwitchInterpOutCurrentTime();
}
/**
 * No comment provided
 *
 * Hash: 0x08C2D6C52A3104BB | Since: 323
 */
export function getPlayerSwitchInterpOutDuration() {
    return GetPlayerSwitchInterpOutDuration();
}
/**
 * No comment provided
 *
 * Hash: 0x78C0D93253149435 | Since: 323
 */
export function getPlayerSwitchJumpCutIndex() {
    return GetPlayerSwitchJumpCutIndex();
}
/**
 * No comment provided
 *
 * Hash: 0x470555300D10B2A5 | Since: 323
 */
export function getPlayerSwitchState() {
    return GetPlayerSwitchState();
}
/**
 * No comment provided
 *
 * Hash: 0xB3C94A90D9FC9E62 | Since: 323
 */
export function getPlayerSwitchType() {
    return GetPlayerSwitchType();
}
/**
 * 0.0 = no memory used
 * 1.0 = all memory used
 *
 * Maximum model memory (as defined in common\data\missioncreatordata.meta) is 100 MiB
 *
 * Hash: 0x3D3D8B3BE5A83D35 | Since: 323
 */
export function getUsedCreatorBudget() {
    return GetUsedCreatorModelMemoryPercentage();
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0xD031A9162D01088C | Since: 323
 */
export function hasAnimDictLoaded(animDict) {
    return HasAnimDictLoaded(animDict);
}
/**
 * Gets whether the specified animation set has finished loading. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
 *
 * Animation set and clip set are synonymous.
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 *
 * Hash: 0xC4EA073D86FB29B0 | Since: 323
 */
export function hasAnimSetLoaded(animSet) {
    return HasAnimSetLoaded(animSet);
}
/**
 * Alias for HAS_ANIM_SET_LOADED.
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 *
 * Hash: 0x318234F4F3738AF3 | Since: 323
 */
export function hasClipSetLoaded(clipSet) {
    return HasClipSetLoaded(clipSet);
}
/**
 * No comment provided
 *
 * Hash: 0x22CCA434E368F03A | Since: 323
 */
export function hasCollisionForModelLoaded(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return HasCollisionForModelLoaded(model);
}
/**
 * Checks if the specified model has loaded into memory.
 *
 * Hash: 0x98A4EB5D89A0C952 | Since: 323
 */
export function hasModelLoaded(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return HasModelLoaded(model);
}
/**
 * No comment provided
 *
 * Hash: 0x8702416E512EC454 | Since: 323
 */
export function hasNamedPtfxAssetLoaded(fxName) {
    return HasNamedPtfxAssetLoaded(fxName);
}
/**
 * No comment provided
 *
 * Hash: 0xCA7D9B86ECA7481B | Since: 323
 */
export function hasPtfxAssetLoaded() {
    return HasPtfxAssetLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0xB5A4DB34FE89B88A | Since: 323
 */
export function initCreatorBudget() {
    InitCreatorBudget();
}
/**
 * No comment provided
 *
 * Hash: 0x63EB2B972A218CAC | Since: 323
 */
export function iplGroupSwapCancel() {
    Citizen.invokeNative('0x63EB2B972A218CAC');
}
/**
 * No comment provided
 *
 * Hash: 0xF4A0DADB70F57FA6 | Since: 323
 */
export function iplGroupSwapFinish() {
    Citizen.invokeNative('0xF4A0DADB70F57FA6');
}
/**
 * No comment provided
 *
 * Hash: 0x5068F488DDB54DD8 | Since: 323
 */
export function iplGroupSwapIsActive() {
    return Citizen.invokeNative('0x5068F488DDB54DD8');
}
/**
 * No comment provided
 *
 * Hash: 0xFB199266061F820A | Since: 323
 */
export function iplGroupSwapIsReady() {
    return Citizen.invokeNative('0xFB199266061F820A');
}
/**
 * No comment provided
 *
 * Hash: 0x95A7DABDDBB78AE7 | Since: 323
 */
export function iplGroupSwapStart(iplName1, iplName2) {
    Citizen.invokeNative('0x95A7DABDDBB78AE7', iplName1, iplName2);
}
/**
 * No comment provided
 *
 * Hash: 0x2DDFF3FB9075D747 | Since: 323
 */
export function isEntityFocus(entity) {
    return IsEntityFocus(entity);
}
/**
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Hash: 0x88A741E44A2B3495 | Since: 323
 */
export function isIplActive(iplName) {
    return IsIplActive(iplName);
}
/**
 * No comment provided
 *
 * Hash: 0x75816577FEA6DAD5 | Since: 1103
 */
export function isModelAPed(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsModelAPed(model);
}
/**
 * Returns whether the specified model represents a vehicle.
 *
 * Hash: 0x19AAC8F07BFEC53E | Since: 323
 */
export function isModelAVehicle(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsModelAVehicle(model);
}
/**
 * Check if model is in cdimage(rpf)
 *
 * Hash: 0x35B9E0803292B641 | Since: 323
 */
export function isModelInCdimage(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsModelInCdimage(model);
}
/**
 * Returns whether the specified model exists in the game.
 *
 * Hash: 0xC0296A2EDF545E92 | Since: 323
 */
export function isModelValid(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsModelValid(model);
}
/**
 * No comment provided
 *
 * Hash: 0x41CA5A33160EA4AB | Since: 323
 */
export function isNetworkLoadingScene() {
    return IsNetworkLoadingScene();
}
/**
 * No comment provided
 *
 * Hash: 0xA41A05B6CB741B85 | Since: 323
 */
export function isNewLoadSceneActive() {
    return IsNewLoadSceneActive();
}
/**
 * No comment provided
 *
 * Hash: 0x01B8247A7A8B9AD1 | Since: 323
 */
export function isNewLoadSceneLoaded() {
    return IsNewLoadSceneLoaded();
}
/**
 * Returns true if the player is currently switching, false otherwise.
 * (When the camera is in the sky moving from Trevor to Franklin for example)
 *
 * Hash: 0xD9D2CFFF49FAB35F | Since: 323
 */
export function isPlayerSwitchInProgress() {
    return IsPlayerSwitchInProgress();
}
/**
 * No comment provided
 *
 * Hash: 0x71E7B2E657449AAD | Since: 323
 */
export function isSafeToStartPlayerSwitch() {
    return Citizen.invokeNative('0x71E7B2E657449AAD');
}
/**
 * Returns true when the srl from BEGIN_SRL is loaded.
 *
 * Hash: 0xD0263801A4C5B0BB | Since: 323
 */
export function isSrlLoaded() {
    return IsSrlLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0xBC9823AB80A3DCAC | Since: 323
 */
export function isStreamvolActive() {
    return IsStreamvolActive();
}
/**
 * No comment provided
 *
 * Hash: 0xDFA80CB25D0A19B3 | Since: 323
 */
export function isSwitchReadyForDescent() {
    return IsSwitchReadyForDescent();
}
/**
 * No comment provided
 *
 * Hash: 0x5B74EA8CFD5E3E7E | Since: 323
 */
export function isSwitchSkippingDescent() {
    return IsSwitchSkippingDescent();
}
/**
 * No comment provided
 *
 * Hash: 0x933BBEEB8C61B5F4 | Since: 323
 */
export function isSwitchToMultiFirstpartFinished() {
    return Citizen.invokeNative('0x933BBEEB8C61B5F4');
}
/**
 * No comment provided
 *
 * Hash: 0xBD6E84632DD4CB3F | Since: 323
 */
export function loadAllObjectsNow() {
    LoadAllObjectsNow();
}
/**
 * 0 - default
 * 1 - HeistIsland
 *
 * Hash: 0x7E3F55ED251B76D3 | Since: 2189
 */
export function loadGlobalWaterFile(waterType) {
    LoadGlobalWaterType(waterType);
}
/**
 * No comment provided
 *
 * Hash: 0x4448EB75B4904BDB | Since: 323
 */
export function loadScene(pos) {
    LoadScene(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xC4582015556D1C46 | Since: 323
 */
export function networkUpdateLoadScene() {
    return NetworkUpdateLoadScene();
}
/**
 * `radius` value is usually between `3f` and `7000f` in original 1868 scripts.
 * `p7` is 0, 1, 2, 3 or 4 used in decompiled scripts, 0 is by far the most common.
 * Returns True if success, used only 7 times in decompiled scripts of 1868
 *
 * Hash: 0x212A8D0D2BABFAC2 | Since: 323
 */
export function newLoadSceneStart(pos, offsetX, offsetY, offsetZ, radius) {
    return NewLoadSceneStart(pos.x, pos.y, pos.z, offsetX, offsetY, offsetZ, radius, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xACCFB4ACF53551B0 | Since: 323
 */
export function newLoadSceneStartSphere(pos, radius) {
    return NewLoadSceneStartSphere(pos.x, pos.y, pos.z, radius, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC197616D221FF4A4 | Since: 323
 */
export function newLoadSceneStop() {
    NewLoadSceneStop();
}
/**
 * This allows you to override "extended distance scaling" setting. Needs to be called each frame.
 * Max scaling seems to be 200.0, normal is 1.0
 * See https://gfycat.com/DetailedHauntingIncatern
 *
 * Hash: 0xA76359FC80B2438E | Since: 323
 */
export function overrideLodscaleThisFrame(scaling) {
    OverrideLodscaleThisFrame(scaling);
}
/**
 * This native is used to attribute the SRL that BEGIN_SRL is going to load. This is usually used for 'in-game' cinematics (not cutscenes but camera stuff) instead of SET_FOCUS_POS_AND_VEL because it loads a specific area of the map which is pretty useful when the camera moves from distant areas.
 * For instance, GTA:O opening cutscene.
 * https://pastebin.com/2EeKVeLA : a list of SRL found in srllist.meta
 * https://pastebin.com/zd9XYUWY here is the content of a SRL file opened with codewalker.
 *
 * Hash: 0x3D245789CE12982C | Since: 323
 */
export function prefetchSrl(srl) {
    PrefetchSrl(srl);
}
/**
 * No comment provided
 *
 * Hash: 0xBED8CA5FF5E04113 | Since: 323
 */
export function remapLodscaleRangeThisFrame() {
    Citizen.invokeNative('0xBED8CA5FF5E04113', 0, 0, 0, 0);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0xF66A602F829E2A06 | Since: 323
 */
export function removeAnimDict(animDict) {
    RemoveAnimDict(animDict);
}
/**
 * Unloads the specified animation set. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
 *
 * Animation set and clip set are synonymous.
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 *
 * Hash: 0x16350528F93024B3 | Since: 323
 */
export function removeAnimSet(animSet) {
    RemoveAnimSet(animSet);
}
/**
 * Alias for REMOVE_ANIM_SET.
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 *
 * Hash: 0x01F73A131C18CD94 | Since: 323
 */
export function removeClipSet(clipSet) {
    RemoveClipSet(clipSet);
}
/**
 * Removes an IPL from the map.
 *
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_IPL, "trevorstrailertidy");
 *
 * C++:
 * `STREAMING::REMOVE_IPL("trevorstrailertidy");`
 *
 * iplName = Name of IPL you want to remove.
 *
 * Hash: 0xEE6C5AD3ECE0A82D | Since: 323
 */
export function removeIpl(iplName) {
    RemoveIpl(iplName);
}
/**
 * No comment provided
 *
 * Hash: 0xF086AD9354FAC3A3 | Since: 323
 */
export function removeModelFromCreatorBudget(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    RemoveModelFromCreatorBudget(modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x5F61EBBE1A00F96D | Since: 323
 */
export function removeNamedPtfxAsset(fxName) {
    RemoveNamedPtfxAsset(fxName);
}
/**
 * No comment provided
 *
 * Hash: 0x88C6814073DD4A73 | Since: 323
 */
export function removePtfxAsset() {
    RemovePtfxAsset();
}
/**
 * Alias of REQUEST_COLLISION_AT_COORD.
 *
 * Hash: 0xC9156DC11411A9EA | Since: 323
 */
export function requestAdditionalCollisionAtCoord(pos) {
    RequestAdditionalCollisionAtCoord(pos.x, pos.y, pos.z);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0xD3BD40951412FEF6 | Since: 323
 */
export function requestAnimDict(animDict) {
    RequestAnimDict(animDict);
}
/**
 * Starts loading the specified animation set. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 *
 * Hash: 0x6EA47DAE7FAD0EED | Since: 323
 */
export function requestAnimSet(animSet) {
    RequestAnimSet(animSet);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 *
 * Hash: 0xD2A71E1A77418A49 | Since: 323
 */
export function requestClipSet(clipSet) {
    RequestClipSet(clipSet);
}
/**
 * No comment provided
 *
 * Hash: 0x07503F7948F491A7 | Since: 323
 */
export function requestCollisionAtCoord(pos) {
    RequestCollisionAtCoord(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x923CB32A3B874FCB | Since: 323
 */
export function requestCollisionForModel(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    RequestCollisionForModel(model);
}
/**
 * Exemple: REQUEST_IPL("TrevorsTrailerTrash");
 *
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 *
 * Hash: 0x41B4893843BBDB74 | Since: 323
 */
export function requestIpl(iplName) {
    RequestIpl(iplName);
}
/**
 * No comment provided
 *
 * Hash: 0xA0261AEF7ACFC51E | Since: 323
 */
export function requestMenuPedModel(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    RequestMenuPedModel(model);
}
/**
 * Request a model to be loaded into memory.
 *
 *
 * Hash: 0x963D27A58DF860AC | Since: 323
 */
export function requestModel(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    RequestModel(model);
}
/**
 * `STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "V_FIB01_cur_elev");`
 * `STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "limbo");`
 * `STREAMING::REQUEST_MODELS_IN_ROOM(l_13BB, "V_Office_gnd_lifts");`
 * `STREAMING::REQUEST_MODELS_IN_ROOM(l_13BB, "limbo");`
 * `STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "v_fib01_jan_elev");`
 * `STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "limbo");`
 *
 * Hash: 0x8A7A40100EDFEC58 | Since: 323
 */
export function requestModelsInRoom(interior, roomName) {
    RequestModelsInRoom(interior, roomName);
}
/**
 * From the b678d decompiled scripts:
 *
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("core_snow");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("fm_mission_controler");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("proj_xmas_firework");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_apartment_mp");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_biolab_heist");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_fireworks");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_parachute");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_wheelsmoke");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_mp_cig_plane");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_mp_creator");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_mp_tankbattle");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_ornate_heist");`
 * `STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_prison_break_heist_station");`
 *
 * Hash: 0xB80D8756B4668AB6 | Since: 323
 */
export function requestNamedPtfxAsset(fxName) {
    RequestNamedPtfxAsset(fxName);
}
/**
 * maps script name (thread + 0xD0) by lookup via scriptfx.dat - does nothing when script name is empty
 *
 * Hash: 0x944955FB2A3935C8 | Since: 323
 */
export function requestPtfxAsset() {
    RequestPtfxAsset();
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x4E52E752C76E7E7A | Since: 323
 */
export function setAllMapdataCulled() {
    Citizen.invokeNative('0x4E52E752C76E7E7A', undefined);
}
/**
 * This is a NOP function. It does nothing at all.
 *
 * Hash: 0x42CBE54462D92634 | Since: 323
 */
export function setDitchPoliceModels(toggle) {
    SetDitchPoliceModels(toggle);
}
/**
 * It seems to make the entity's coords mark the point from which LOD-distances are measured. In my testing, setting a vehicle as the focus entity and moving that vehicle more than 300 distance units away from the player will make the level of detail around the player go down drastically (shadows disappear, textures go extremely low res, etc). The player seems to be the default focus entity.
 *
 * Hash: 0x198F77705FA0931D | Since: 323
 */
export function setFocusEntity(entity) {
    SetFocusEntity(entity);
}
/**
 * Override the area where the camera will render the terrain.
 * p3, p4 and p5 are usually set to 0.0
 *
 *
 * Hash: 0xBB7454BAFF08FE25 | Since: 323
 */
export function setFocusPosAndVel(pos, offsetX, offsetY, offsetZ) {
    SetFocusPosAndVel(pos.x, pos.y, pos.z, offsetX, offsetY, offsetZ);
}
/**
 * No comment provided
 *
 * Hash: 0x717CD6E6FAEBBEDC | Since: 323
 */
export function setGamePausesFor(toggle) {
    SetGamePausesForStreaming(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB85F26619073E775 | Since: 323
 */
export function setHdArea(pos, radius) {
    SetHdArea(pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0xE37B76C387BE28ED | Since: 323
 */
export function setInteriorActive(interiorID, toggle) {
    SetInteriorActive(interiorID, toggle);
}
/**
 * Enables the specified island. For more information, see islandhopper.meta
 *
 * Hash: 0x9A9D1BA639675CF1 | Since: 2189
 */
export function setIslandEnabled(name, toggle) {
    SetIslandEnabled(name, toggle);
}
/**
 * Possible p0 values:
 *
 * "prologue"
 * "Prologue_Main"
 *
 * Hash: 0xAF12610C644A35C9 | Since: 323
 */
export function setMapdatacullboxEnabled(name, toggle) {
    SetMapdatacullboxEnabled(name, toggle);
}
/**
 * Unloads model from memory
 *
 * Hash: 0xE532F5D78798DAAB | Since: 323
 */
export function setModelAsNoLongerNeeded(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    SetModelAsNoLongerNeeded(model);
}
/**
 * Control how many new (ambient?) peds will spawn in the game world.
 * Range for p0 seems to be 0-3, where 0 is none and 3 is the normal level.
 *
 * Hash: 0x8C95333CFC3340F3 | Since: 323
 */
export function setPedPopulationBudget() {
    SetPedPopulationBudget(0);
}
/**
 * No comment provided
 *
 * Hash: 0x5F2013F8BC24EE69 | Since: 323
 */
export function setPlayerShortSwitchStyle() {
    SetPlayerShortSwitchStyle(0);
}
/**
 * All names can be found in playerswitchestablishingshots.meta
 *
 * Hash: 0x0FDE9DBFC0A6BC65 | Since: 323
 */
export function setPlayerSwitchEstablishingShot(name) {
    SetPlayerSwitchEstablishingShot(name);
}
/**
 * No comment provided
 *
 * Hash: 0xC208B673CE446B61 | Since: 323
 */
export function setPlayerSwitchOutro(cameraCoordX, cameraCoordY, cameraCoordZ, camRotationX, camRotationY, camRotationZ, camFov, camFarClip, rotationOrder) {
    SetPlayerSwitchOutro(cameraCoordX, cameraCoordY, cameraCoordZ, camRotationX, camRotationY, camRotationZ, camFov, camFarClip, rotationOrder);
}
/**
 * No comment provided
 *
 * Hash: 0x77B5F9A36BF96710 | Since: 323
 */
export function setReducePedModelBudget(toggle) {
    SetReducePedModelBudget(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x80C527893080CCF3 | Since: 323
 */
export function setReduceVehicleModelBudget(toggle) {
    SetReduceVehicleModelBudget(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x40AEFD1A244741F2 | Since: 323
 */
export function setRenderHdOnly(toggle) {
    SetRenderHdOnly(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0811381EF5062FEC | Since: 323
 */
export function setRestoreFocusEntity(p0) {
    Citizen.invokeNative('0x0811381EF5062FEC', p0);
}
/**
 * No comment provided
 *
 * Hash: 0x1E9057A74FD73E23 | Since: 323
 */
export function setSceneTracksCamPosThisFrame() {
    Citizen.invokeNative('0x1E9057A74FD73E23');
}
/**
 * No comment provided
 *
 * Hash: 0xF8155A7F03DDFC8E | Since: 323
 */
export function setSrlForcePrestream() {
    Citizen.invokeNative('0xF8155A7F03DDFC8E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x20C6C7E4EB082A7F | Since: 323
 */
export function setSrlLongJumpMode() {
    Citizen.invokeNative('0x20C6C7E4EB082A7F', false);
}
/**
 * No comment provided
 *
 * Hash: 0xEF39EE20C537E98C | Since: 323
 */
export function setSrlPostCutsceneCamera() {
    Citizen.invokeNative('0xEF39EE20C537E98C', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBEB2D9A1D9A8F55A | Since: 323
 */
export function setSrlReadaheadTimes() {
    Citizen.invokeNative('0xBEB2D9A1D9A8F55A', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA74A541C6884E7B8 | Since: 323
 */
export function setSrlTime() {
    SetSrlTime(0);
}
/**
 * No comment provided
 *
 * Hash: 0x6E0C692677008888 | Since: 323
 */
export function setStreaming(toggle) {
    SetStreaming(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xCB9E1EB3BE2AF4E9 | Since: 323
 */
export function setVehiclePopulationBudget() {
    SetVehiclePopulationBudget(0);
}
/**
 * No comment provided
 *
 * Hash: 0xCCE26000E9A6FAD7 | Since: 323
 */
export function shutdownCreatorBudget() {
    ShutdownCreatorBudget();
}
/**
 * // this enum comes directly from R* so don't edit this
 * enum ePlayerSwitchTypes
 * {
 * SWITCH_TYPE_AUTO,
 * SWITCH_TYPE_LONG,
 * SWITCH_TYPE_MEDIUM,
 * SWITCH_TYPE_SHORT
 * };
 *
 * Use GET_IDEAL_PLAYER_SWITCH_TYPE for the best switch type.
 *
 * ----------------------------------------------------
 *
 * Examples from the decompiled scripts:
 *
 * `STREAMING::START_PLAYER_SWITCH(l_832._f3, PLAYER::PLAYER_PED_ID(), 0, 3);`
 * `STREAMING::START_PLAYER_SWITCH(l_832._f3, PLAYER::PLAYER_PED_ID(), 2050, 3);`
 * `STREAMING::START_PLAYER_SWITCH(PLAYER::PLAYER_PED_ID(), l_832._f3, 1024, 3);`
 * `STREAMING::START_PLAYER_SWITCH(g_141F27, PLAYER::PLAYER_PED_ID(), 513, v_14);`
 *
 * Note: DO NOT, use SWITCH_TYPE_LONG with flag 513. It leaves you stuck in the clouds. You'll have to call STOP_PLAYER_SWITCH() to return to your ped.
 *
 * Flag 8 w/ SWITCH_TYPE_LONG will zoom out 3 steps, then zoom in 2/3 steps and stop on the 3rd and just hang there.
 * Flag 8 w/ SWITCH_TYPE_MEDIUM will zoom out 1 step, and just hang there.
 *
 * Hash: 0xFAA23F2CBA159D67 | Since: 323
 */
export function startPlayerSwitch(_from, to, flags, switchType) {
    StartPlayerSwitch(_from, to, flags, switchType);
}
/**
 * No comment provided
 *
 * Hash: 0x95C0A5BBDC189AA1 | Since: 323
 */
export function stopPlayerSwitch() {
    StopPlayerSwitch();
}
/**
 * Always returns zero.
 *
 * Hash: 0x1F3F018BC3AFA77C | Since: 323
 */
export function streamvolCreateFrustum() {
    return StreamvolCreateFrustum(0, 0, 0, 0, 0, 0, 0, undefined, undefined);
}
/**
 * Always returns zero.
 *
 * Hash: 0x0AD9710CEE2F590F | Since: 323
 */
export function streamvolCreateLine() {
    return StreamvolCreateLine(0, 0, 0, 0, 0, 0, undefined);
}
/**
 * Always returns zero.
 *
 * Hash: 0x219C7B8D53E429FD | Since: 323
 */
export function streamvolCreateSphere(pos, rad) {
    return StreamvolCreateSphere(pos.x, pos.y, pos.z, rad, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1EE7D8DF4425F053 | Since: 323
 */
export function streamvolDelete(unused) {
    StreamvolDelete(unused);
}
/**
 * No comment provided
 *
 * Hash: 0x7D41E9D2D17C5B2D | Since: 323
 */
export function streamvolHasLoaded(unused) {
    return StreamvolHasLoaded(unused);
}
/**
 * No comment provided
 *
 * Hash: 0x07C313F94746702C | Since: 323
 */
export function streamvolIsValid(unused) {
    return StreamvolIsValid(unused);
}
/**
 * No comment provided
 *
 * Hash: 0x472397322E92A856 | Since: 323
 */
export function suppressHdMapThisFrame() {
    Citizen.invokeNative('0x472397322E92A856');
}
/**
 * doesn't act normally when used on mount chilliad
 * Flags is a bitflag:
 * 2^n - Enabled Functionality:
 * 0 - Skip camera rotate up
 * 3 - Wait for SET_PLAYER_SWITCH_ESTABLISHING_SHOT / hang at last step. You will still need to run 0x74DE2E8739086740 to exit "properly" and then STOP_PLAYER_SWITCH
 * 6 - Invert Switch Direction (false = out, true = in)
 * 8 - Hang above ped
 *
 * switchType: 0 - 3
 * 0: 1 step towards ped
 * 1: 3 steps out from ped
 * 2: 1 step out from ped
 * 3: 1 step towards ped
 *
 * Hash: 0xAAB3200ED59016BC | Since: 323
 */
export function switchToMultiFirstpart(ped, flags, switchType) {
    SwitchToMultiFirstpart(ped, flags, switchType);
}
/**
 * No comment provided
 *
 * Hash: 0xD8295AF639FD9CB8 | Since: 323
 */
export function switchToMultiSecondpart(ped) {
    SwitchToMultiSecondpart(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0F7082C60FB479EF | Since: 3717
 */
export function getModelAdditionalCost(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return Citizen.invokeNative('0x0F7082C60FB479EF', modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x4A91423C04BAADA1 | Since: 3717
 */
export function getTotalModelCost(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return Citizen.invokeNative('0x4A91423C04BAADA1', modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x68F1C25420D5F6AA | Since: 3717
 */
export function setSphericalStreamDistantHilodsThisFrame() {
    Citizen.invokeNative('0x68F1C25420D5F6AA');
}
