import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.
 * 
 * This native allows you to extend the probe range up to 150.0 units.
 * 
 * Hash: 0x8AA1F3C2 | Since: unknown | API-Set: client
 */
export function setEmitterProbeLength(probeLength: number): void {
    SetEmitterProbeLength(probeLength);
}

/**
 * Adds an output for the specified audio submix.
 * 
 * Hash: 0xAC6E290D | Since: unknown | API-Set: client
 */
export function addSubmixOutput(submixId: number, outputSubmixId: number): void {
    AddAudioSubmixOutput(submixId, outputSubmixId);
}

/**
 * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
 * 
 * Hash: 0x658D2BC8 | Since: unknown | API-Set: client
 */
export function createSubmix(name: string): number {
    return CreateAudioSubmix(name);
}

/**
 * Sets a floating-point parameter for a submix effect.
 * 
 * Hash: 0x9A209B3C | Since: unknown | API-Set: client
 */
export function setSubmixEffectParamFloat(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void {
    SetAudioSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue);
}

/**
 * Sets an integer parameter for a submix effect.
 * 
 * Hash: 0x77FAE2B8 | Since: unknown | API-Set: client
 */
export function setSubmixEffectParamInt(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void {
    SetAudioSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue);
}

/**
 * Assigns a RadioFX effect to a submix effect slot.
 * 
 * The parameter values for this effect are as follows (backticks are used to represent hashes):
 * 
 * | Index | Type | Description |
 * |-|-|-|
 * | \`enabled\` | int | Enables or disables RadioFX on this DSP. |
 * | \`default\` | int | Sets default parameters for the RadioFX DSP and enables it. |
 * | \`freq_low\` | float |  |
 * | \`freq_hi\` | float |  |
 * | \`fudge\` | float |  |
 * | \`rm_mod_freq\` | float |  |
 * | \`rm_mix\` | float |  |
 * | \`o_freq_lo\` | float |  |
 * | \`o_freq_hi\` | float |  |
 * 
 * Hash: 0xAAA94D53 | Since: unknown | API-Set: client
 */
export function setSubmixEffectRadioFx(submixId: number, effectSlot: number): void {
    SetAudioSubmixEffectRadioFx(submixId, effectSlot);
}

/**
 * Sets the volumes for the sound channels in a submix effect.
 * Values can be between 0.0 and 1.0.
 * Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.
 * Output slot starts at 0 for the first ADD_AUDIO_SUBMIX_OUTPUT call then incremented by 1 on each subsequent call.
 * 
 * Hash: 0x825DC0D1 | Since: unknown | API-Set: client
 */
export function setSubmixOutputVolumes(submixId: number, outputSlot: number, frontLeftVolume: number, frontRightVolume: number, rearLeftVolume: number, rearRightVolume: number, channel5Volume: number, channel6Volume: number): void {
    SetAudioSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume);
}

/**
 * mode can be any of these:
 * SLOWMO_T1_TRAILER_SMASH
 * SLOWMO_T1_RAYFIRE_EXPLOSION
 * SLOWMO_PROLOGUE_VAULT
 * NIGEL_02_SLOWMO_SETTING
 * JSH_EXIT_TUNNEL_SLOWMO
 * SLOWMO_BIG_SCORE_JUMP
 * SLOWMO_FIB4_TRUCK_SMASH
 * SLOWMO_EXTREME_04
 * SLOW_MO_METH_HOUSE_RAYFIRE
 * BARRY_02_SLOWMO
 * BARRY_01_SLOWMO
 * 
 * Hash: 0xD01005D2BA2EB778 | Since: 323 | API-Set: unknown
 */
export function activateSlowmoMode(mode: string): void {
    ActivateAudioSlowmoMode(mode);
}

/**
 * All found occurrences in b678d:
 * https://pastebin.com/ceu67jz8
 * 
 * Hash: 0x153973AB99FE8980 | Since: 323 | API-Set: unknown
 */
export function addEntityToMixGroup(entity: number | IEntity, groupName: string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    AddEntityToAudioMixGroup(_entity, groupName, 0);
}

/**
 * NOTE: ones that are -1, 0 - 35 are determined by a function where it gets a TextLabel from a global then runs,
 * GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME and depending on what the result is it goes in check order of 0 - 9 then A - Z then z (lowercase). So it will then return 0 - 35 or -1 if it's 'z'. The func to handle that ^^ is func_67 in dialog_handler.c atleast in TU27 Xbox360 scripts.
 * 
 * p0 is -1, 0 - 35
 * p1 is a char or string (whatever you wanna call it)
 * p2 is Global 10597 + i * 6. 'i' is a while(i < 70) loop
 * p3 is again -1, 0 - 35
 * p4 is again -1, 0 - 35
 * p5 is either 0 or 1 (bool ?)
 * p6 is either 0 or 1 (The func to determine this is bool)
 * p7 is either 0 or 1 (The func to determine this is bool)
 * p8 is either 0 or 1 (The func to determine this is bool)
 * p9 is 0 - 3 (Determined by func_60 in dialogue_handler.c)
 * p10 is either 0 or 1 (The func to determine this is bool)
 * p11 is either 0 or 1 (The func to determine this is bool)
 * p12 is unknown as in TU27 X360 scripts it only goes to p11.
 * 
 * Hash: 0xC5EF963405593646 | Since: 323 | API-Set: unknown
 */
export function addLineToConversation(index: number): void {
    AddLineToConversation(index, undefined, undefined, 0, 0, false, false, false, false, 0, false, false, false);
}

/**
 * 4 calls in the b617d scripts. The only one with p0 and p2 in clear text:
 * 
 * `AUDIO::ADD_PED_TO_CONVERSATION(5, l_AF, "DINAPOLI");`
 * 
 * =================================================
 * One of the 2 calls in dialogue_handler.c p0 is in a while-loop, and so is determined to also possibly be 0 - 15.
 * 
 * Hash: 0x95D9F4BC443956E7 | Since: 323 | API-Set: unknown
 */
export function addPedToConversation(index: number, ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AddPedToConversation(index, _ped, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x845FFC3A4FEEFA3E | Since: 323 | API-Set: unknown
 */
export function isMusicPlaying(): boolean {
    return AudioIsScriptedMusicPlaying();
}

/**
 * This is an alias of AUDIO_IS_MUSIC_PLAYING.
 * 
 * Hash: 0x2DD39BF3E2F9C47F | Since: 463 | API-Set: unknown
 */
export function isScriptedMusicPlaying(): boolean {
    return Citizen.invokeNative('0x2DD39BF3E2F9C47F');
}

/**
 * Plays the siren sound of a vehicle which is otherwise activated when fastly double-pressing the horn key.
 * Only works on vehicles with a police siren.
 * 
 * Hash: 0x1B9025BDA76822B6 | Since: 323 | API-Set: unknown
 */
export function blipSiren(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    BlipSiren(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF8AD2EED7C47E8FE | Since: 1734 | API-Set: unknown
 */
export function blockAllSpeechFromPed(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    BlockAllSpeechFromPed(_ped, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xF154B8D1775B2DEC | Since: 323 | API-Set: unknown
 */
export function blockDeathJingle(toggle: boolean): void {
    BlockDeathJingle(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA8A7D434AFB4B97B | Since: 1493 | API-Set: unknown
 */
export function blockSpeechContextGroup(): void {
    BlockSpeechContextGroup(undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB4F90FAF7670B16F | Since: 323 | API-Set: unknown
 */
export function cancelAllPoliceReports(): void {
    CancelAllPoliceReports();
}

/**
 * All music event names found in the b617d scripts: https://pastebin.com/GnYt0R3P
 * Full list of music event names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/musicEventNames.json
 * 
 * Hash: 0x5B17A90291133DA5 | Since: 323 | API-Set: unknown
 */
export function cancelMusicEvent(eventName: string): boolean {
    return CancelMusicEvent(eventName);
}

/**
 * No comment provided
 * 
 * Hash: 0x032A116663A4D5AC | Since: 323 | API-Set: unknown
 */
export function canVehicleReceiveCbRadio(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return CanVehicleReceiveCbRadio(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB32209EFFDC04913 | Since: 323 | API-Set: unknown
 */
export function clearAllBrokenGlass(): void {
    ClearAllBrokenGlass();
}

/**
 * No comment provided
 * 
 * Hash: 0x120C48C614909FA4 | Since: 323 | API-Set: unknown
 */
export function clearAmbientZoneListState(ambientZone: string): void {
    ClearAmbientZoneListState(ambientZone, false);
}

/**
 * `This function also has a p2, unknown. Signature AUDIO::CLEAR_AMBIENT_ZONE_STATE(const char* zoneName, bool p1, Any p2);`
 * 
 * Still needs more research.
 * 
 * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
 * 
 * Hash: 0x218DD44AAAC964FF | Since: 323 | API-Set: unknown
 */
export function clearAmbientZoneState(zoneName: string): void {
    ClearAmbientZoneState(zoneName, false);
}

/**
 * 3 calls in the b617d scripts, removed duplicate.
 * 
 * `AUDIO::CLEAR_CUSTOM_RADIO_TRACK_LIST("RADIO_16_SILVERLAKE");`
 * `AUDIO::CLEAR_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK");`
 * 
 * Hash: 0x1654F24A88A8E3FE | Since: 323 | API-Set: unknown
 */
export function clearCustomRadioTrackList(radioStation: string): void {
    ClearCustomRadioTrackList(radioStation);
}

/**
 * No comment provided
 * 
 * Hash: 0xD2C91A0B572AAE56 | Since: 323 | API-Set: unknown
 */
export function createNewScriptedConversation(): void {
    CreateNewScriptedConversation();
}

/**
 * see ACTIVATE_AUDIO_SLOWMO_MODE for modes
 * 
 * Hash: 0xDDC635D5B3262C56 | Since: 323 | API-Set: unknown
 */
export function deactivateSlowmoMode(mode: string): void {
    DeactivateAudioSlowmoMode(mode);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9A41C1E940FB0E8 | Since: 323 | API-Set: unknown
 */
export function disablePedPain(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    DisablePedPainAudio(_ped, toggle);
}

/**
 * If value is set to true, and ambient siren sound will be played.
 * Appears to enable/disable an audio flag.
 * 
 * Hash: 0x552369F549563AD5 | Since: 323 | API-Set: unknown
 */
export function distantCopCarSirens(value: boolean): void {
    DistantCopCarSirens(value);
}

/**
 * Checks if the ped can play the speech or has the speech file, p2 is usually false.
 * 
 * Hash: 0x49B99BF3FDA89A7A | Since: 323 | API-Set: unknown
 */
export function doesContextExistForThisPed(ped: number | IPed, speechName: string): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return DoesContextExistForThisPed(_ped, speechName, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x109697E2FFBAC8A1 | Since: 323 | API-Set: unknown
 */
export function doesPlayerVehHaveRadio(): boolean {
    return DoesPlayerVehHaveRadio();
}

/**
 * Works for planes only.
 * 
 * Hash: 0xC15907D667F7CFB2 | Since: 323 | API-Set: unknown
 */
export function enableStallWarningSounds(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    EnableStallWarningSounds(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB81CF134AEB56FFB | Since: 791 | API-Set: unknown
 */
export function enableStuntJump(): void {
    EnableStuntJumpAudio();
}

/**
 * No comment provided
 * 
 * Hash: 0x2BE4BC731D039D5A | Since: 323 | API-Set: unknown
 */
export function enableVehicleExhaustPops(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    EnableVehicleExhaustPops(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1C073274E065C6D2 | Since: 323 | API-Set: unknown
 */
export function enableVehicleFanbeltDamage(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    EnableVehicleFanbeltDamage(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D67489793FF428B | Since: 323 | API-Set: unknown
 */
export function findRadioStationIndex(stationNameHash: number | string): number {
    if (typeof stationNameHash === 'string') stationNameHash = GetHashKey(stationNameHash)
    return FindRadioStationIndex(stationNameHash);
}

/**
 * Changes start time of a tracklist (milliseconds)
 * `R* uses a random int: MISC::GET_RANDOM_INT_IN_RANGE(0, 13) * 60000)`
 * 
 * Hash: 0x4E0AF9114608257C | Since: 2372 | API-Set: unknown
 */
export function forceMusicTrackList(radioStation: string, trackListName: string, milliseconds: number): void {
    ForceMusicTrackList(radioStation, trackListName, milliseconds);
}

/**
 * No comment provided
 * 
 * Hash: 0x062D5EAD4DA2FA6A | Since: 323 | API-Set: unknown
 */
export function forcePedPanicWalla(): void {
    ForcePedPanicWalla();
}

/**
 * This native sets the audio of the specified vehicle to the audioName (p1).
 * 
 * Use the audioNameHash found in vehicles.meta
 * 
 * Example:
 * _SET_VEHICLE_AUDIO(veh, "ADDER");
 * The selected vehicle will now have the audio of the Adder.
 * 
 * Hash: 0x4F0C413926060B38 | Since: 323 | API-Set: unknown
 */
export function forceUseGameObject(vehicle: number | IVehicle, audioName: string): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ForceUseAudioGameObject(_vehicle, audioName);
}

/**
 * No comment provided
 * 
 * Hash: 0xD57AAAE0E2214D11 | Since: 323 | API-Set: unknown
 */
export function freezeMicrophone(): void {
    FreezeMicrophone();
}

/**
 * No comment provided
 * 
 * Hash: 0x344F393B027E38C3 | Since: 323 | API-Set: unknown
 */
export function freezeRadioStation(radioStation: string): void {
    FreezeRadioStation(radioStation);
}

/**
 * No comment provided
 * 
 * Hash: 0x5E203DA2BA15D436 | Since: 463 | API-Set: unknown
 */
export function getAmbientVoiceNameHash(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAmbientVoiceNameHash(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x50B196FC9ED6545B | Since: 323 | API-Set: unknown
 */
export function getAudibleMusicTrackTextId(): number {
    return GetAudibleMusicTrackTextId();
}

/**
 * No comment provided
 * 
 * Hash: 0x480357EE890C295A | Since: 323 | API-Set: unknown
 */
export function getCurrentScriptedConversationLine(): number {
    return GetCurrentScriptedConversationLine();
}

/**
 * No comment provided
 * 
 * Hash: 0x3E65CDE5215832C1 | Since: 1493 | API-Set: unknown
 */
export function getCurrentTrackPlayTime(radioStationName: string): number {
    return GetCurrentRadioTrackPlaybackTime(radioStationName);
}

/**
 * No comment provided
 * 
 * Hash: 0x34D66BC058019CE0 | Since: 1493 | API-Set: unknown
 */
export function getCurrentTrackSoundName(radioStationName: string): number {
    return GetCurrentTrackSoundName(radioStationName);
}

/**
 * No comment provided
 * 
 * Hash: 0xDD3AA743AB7D4D75 | Since: 3095 | API-Set: unknown
 */
export function getCurrentTvShowPlayTime(): number {
    return Citizen.invokeNative('0xDD3AA743AB7D4D75');
}

/**
 * No comment provided
 * 
 * Hash: 0xE73364DB90778FFA | Since: 323 | API-Set: unknown
 */
export function getIsPreloadedConversationReady(): boolean {
    return GetIsPreloadedConversationReady();
}

/**
 * No comment provided
 * 
 * Hash: 0xE7A0D23DC414507B | Since: 323 | API-Set: unknown
 */
export function getMusicPlaytime(): number {
    return GetMusicPlaytime();
}

/**
 * No comment provided
 * 
 * Hash: 0x3A48AB4445D499BE | Since: 323 | API-Set: unknown
 */
export function getMusicVolSlider(): number {
    return GetMusicVolSlider();
}

/**
 * Could this be used alongside either,
 * SET_NETWORK_ID_EXISTS_ON_ALL_MACHINES or _SET_NETWORK_ID_SYNC_TO_PLAYER to make it so other players can hear the sound while online? It'd be a bit troll-fun to be able to play the Zancudo UFO creepy sounds globally.
 * 
 * Hash: 0x2DE3F0A134FFBC0D | Since: 323 | API-Set: unknown
 */
export function getNetworkIdFromSoundId(soundId: number): number {
    return GetNetworkIdFromSoundId(soundId);
}

/**
 * No comment provided
 * 
 * Hash: 0xC64A06D939F826F5 | Since: 1493 | API-Set: unknown
 */
export function getNextAudibleBeat(): [boolean, number, number, number] {
    return GetNextAudibleBeat();
}

/**
 * No comment provided
 * 
 * Hash: 0xF1620ECB50E01DE7 | Since: 323 | API-Set: unknown
 */
export function getNumUnlockedRadioStations(): number {
    return GetNumUnlockedRadioStations();
}

/**
 * No comment provided
 * 
 * Hash: 0xA571991A7FE6CCEB | Since: 323 | API-Set: unknown
 */
export function getPlayerRadioStationGenre(): number {
    return GetPlayerRadioStationGenre();
}

/**
 * Returns 255 (radio off index) if the function fails.
 * 
 * Hash: 0xE8AF77C4C06ADC93 | Since: 323 | API-Set: unknown
 */
export function getPlayerRadioStationIndex(): number {
    return GetPlayerRadioStationIndex();
}

/**
 * Returns active radio station name
 * 
 * Hash: 0xF6D733C32076AD03 | Since: 323 | API-Set: unknown
 */
export function getPlayerRadioStationName(): string {
    return GetPlayerRadioStationName();
}

/**
 * `Converts radio station index to string. Use HUD::GET_FILENAME_FOR_AUDIO_CONVERSATION to get the user-readable text.`
 * 
 * Hash: 0xB28ECA15046CA8B9 | Since: 323 | API-Set: unknown
 */
export function getRadioStationName(radioStation: number): string {
    return GetRadioStationName(radioStation);
}

/**
 * No comment provided
 * 
 * Hash: 0x430386FE9BF80B45 | Since: 323 | API-Set: unknown
 */
export function getSoundId(): number {
    return GetSoundId();
}

/**
 * No comment provided
 * 
 * Hash: 0x75262FD12D0A1C84 | Since: 323 | API-Set: unknown
 */
export function getSoundIdFromNetworkId(netId: number): number {
    return GetSoundIdFromNetworkId(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0x4E72BBDBCA58A3DB | Since: 323 | API-Set: unknown
 */
export function getStreamPlayTime(): number {
    return GetStreamPlayTime();
}

/**
 * No comment provided
 * 
 * Hash: 0xAA19F5572C38B564 | Since: 323 | API-Set: unknown
 */
export function getVariationChosenForScriptedLine(): [number, any] {
    return GetVariationChosenForScriptedLine();
}

/**
 * Returns hash of default vehicle horn
 * 
 * Hash is stored in audVehicleAudioEntity
 * 
 * Hash: 0x02165D55000219AC | Since: 323 | API-Set: unknown
 */
export function getVehicleDefaultHorn(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleDefaultHorn(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xACB5DCCA1EC76840 | Since: 323 | API-Set: unknown
 */
export function getVehicleDefaultHornIgnoreMods(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleDefaultHornIgnoreMods(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xD53F3A29BCE2580E | Since: 1365 | API-Set: unknown
 */
export function getVehicleHornSoundIndex(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleHornSoundIndex(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x544810ED9DB6BBE6 | Since: 323 | API-Set: unknown
 */
export function hasLoadedMpDataSet(): boolean {
    return HasLoadedMpDataSet();
}

/**
 * No comment provided
 * 
 * Hash: 0x5B50ABB1FE3746F4 | Since: 323 | API-Set: unknown
 */
export function hasLoadedSpDataSet(): boolean {
    return HasLoadedSpDataSet();
}

/**
 * No comment provided
 * 
 * Hash: 0xFCBDCE714A7C88E5 | Since: 323 | API-Set: unknown
 */
export function hasSoundFinished(soundId: number): boolean {
    return HasSoundFinished(soundId);
}

/**
 * p2 is always -1
 * 
 * Hash: 0x8F8C0E370AE62F5C | Since: 323 | API-Set: unknown
 */
export function hintAmbientBank(audioBank: string): boolean {
    return HintAmbientAudioBank(audioBank, false, undefined);
}

/**
 * p2 is always -1
 * 
 * Hash: 0x40763EA7B9B783E7 | Since: 573 | API-Set: unknown
 */
export function hintMissionBank(audioBank: string): boolean {
    return HintMissionAudioBank(audioBank, false, undefined);
}

/**
 * p2 is always -1
 * 
 * Hash: 0xFB380A29641EC31A | Since: 323 | API-Set: unknown
 */
export function hintScriptBank(audioBank: string): boolean {
    return HintScriptAudioBank(audioBank, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x950A154B8DAB6185 | Since: 323 | API-Set: unknown
 */
export function initSynchSceneWithEntity(audioEvent: string, entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    InitSynchSceneAudioWithEntity(audioEvent, _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xC8EDE9BDBCCBA6D4 | Since: 323 | API-Set: unknown
 */
export function initSynchSceneWithPosition(audioEvent: string, pos: Vector3): void {
    InitSynchSceneAudioWithPosition(audioEvent, pos.x, pos.y, pos.z);
}

/**
 * `Example from carsteal3.c: AUDIO::INTERRUPT_CONVERSATION(PLAYER::PLAYER_PED_ID(), "CST4_CFAA", "FRANKLIN");`
 * Voicelines can be found in GTAV\x64\audio\sfx in files starting with "SS_" which seems to mean scripted speech.
 * 
 * Hash: 0xA018A12E5C5C2FA6 | Since: 323 | API-Set: unknown
 */
export function interruptConversation(ped: number | IPed, voiceline: string, speaker: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    InterruptConversation(_ped, voiceline, speaker);
}

/**
 * One call found in the b617d scripts:
 * 
 * `AUDIO::INTERRUPT_CONVERSATION_AND_PAUSE(NETWORK::NET_TO_PED(l_3989._f26F[0\/\*1\*\/]), "CONV_INTERRUPT_QUIT_IT", "LESTER");`
 * 
 * Hash: 0x8A694D7A68F8DC38 | Since: 323 | API-Set: unknown
 */
export function interruptConversationAndPause(ped: number | IPed, speaker: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    InterruptConversationAndPause(_ped, undefined, speaker);
}

/**
 * Example:
 * 
 * `bool playing = AUDIO::IS_ALARM_PLAYING("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS");`
 * Full list of alarm names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/alarmSounds.json
 * 
 * Hash: 0x226435CB96CCFC8C | Since: 323 | API-Set: unknown
 */
export function isAlarmPlaying(alarmName: string): boolean {
    return IsAlarmPlaying(alarmName);
}

/**
 * Common in the scripts:
 * `AUDIO::IS_AMBIENT_SPEECH_DISABLED(PLAYER::PLAYER_PED_ID());`
 * 
 * Hash: 0x932C2D096A2C3FFF | Since: 323 | API-Set: unknown
 */
export function isAmbientSpeechDisabled(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAmbientSpeechDisabled(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x9072C8B49907BFAD | Since: 323 | API-Set: unknown
 */
export function isAmbientSpeechPlaying(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAmbientSpeechPlaying(_ped);
}

/**
 * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
 * 
 * Hash: 0x01E2817A479A7F9B | Since: 323 | API-Set: unknown
 */
export function isAmbientZoneEnabled(ambientZone: string): boolean {
    return IsAmbientZoneEnabled(ambientZone);
}

/**
 * No comment provided
 * 
 * Hash: 0xC265DF9FB44A9FBD | Since: 323 | API-Set: unknown
 */
export function isAnimalVocalizationPlaying(pedHandle: number | IPed): boolean {
    const _pedHandle = pedHandle instanceof IPed ? pedHandle.handle() : pedHandle;
    return IsAnimalVocalizationPlaying(_pedHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x30CA2EF91D15ADF8 | Since: 2189 | API-Set: unknown
 */
export function isAnyPositionalSpeechPlaying(): boolean {
    return IsAnyPositionalSpeechPlaying();
}

/**
 * No comment provided
 * 
 * Hash: 0x729072355FA39EC9 | Since: 323 | API-Set: unknown
 */
export function isAnySpeechPlaying(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAnySpeechPlaying(_ped);
}

/**
 * Full list of audio scene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/audioSceneNames.json
 * 
 * Hash: 0xB65B60556E2A9225 | Since: 323 | API-Set: unknown
 */
export function isSceneActive(scene: string): boolean {
    return IsAudioSceneActive(scene);
}

/**
 * Hardcoded to return 1
 * 
 * Hash: 0x6D28DC1671E334FD | Since: 323 | API-Set: unknown
 */
export function isGameInControlOfMusic(): boolean {
    return IsGameInControlOfMusic();
}

/**
 * Checks whether the horn of a vehicle is currently played.
 * 
 * Hash: 0x9D6BFC12B05C6121 | Since: 323 | API-Set: unknown
 */
export function isHornActive(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsHornActive(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x19A30C23F5827F8A | Since: 323 | API-Set: unknown
 */
export function isMissionCompletePlaying(): boolean {
    return IsMissionCompletePlaying();
}

/**
 * No comment provided
 * 
 * Hash: 0x6F259F82D873B8B8 | Since: 323 | API-Set: unknown
 */
export function isMissionCompleteReadyForUi(): boolean {
    return IsMissionCompleteReadyForUi();
}

/**
 * No comment provided
 * 
 * Hash: 0x66E49BF55B4B1874 | Since: 323 | API-Set: unknown
 */
export function isMissionNewsStoryUnlocked(newsStory: number): boolean {
    return IsMissionNewsStoryUnlocked(newsStory);
}

/**
 * No comment provided
 * 
 * Hash: 0xC8B1B2425604CDD0 | Since: 323 | API-Set: unknown
 */
export function isMobileInterferenceActive(): boolean {
    return IsMobileInterferenceActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x7497D2CE2C30D24C | Since: 323 | API-Set: unknown
 */
export function isMobilePhoneCallOngoing(): boolean {
    return IsMobilePhoneCallOngoing();
}

/**
 * No comment provided
 * 
 * Hash: 0xB35CE999E8EF317E | Since: 323 | API-Set: unknown
 */
export function isMobilePhoneRadioActive(): boolean {
    return IsMobilePhoneRadioActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xA097AB275061FB21 | Since: 323 | API-Set: unknown
 */
export function isMusicOneshotPlaying(): boolean {
    return IsMusicOneshotPlaying();
}

/**
 * No comment provided
 * 
 * Hash: 0x049E937F18F4020C | Since: 323 | API-Set: unknown
 */
export function isPedInCurrentConversation(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInCurrentConversation(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x1E8E5E20937E3137 | Since: 323 | API-Set: unknown
 */
export function isPedRingtonePlaying(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRingtonePlaying(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F43D83FD6738741 | Since: 323 | API-Set: unknown
 */
export function isPlayerVehRadioEnable(): boolean {
    return IsPlayerVehRadioEnable();
}

/**
 * No comment provided
 * 
 * Hash: 0x0626A247D2405330 | Since: 323 | API-Set: unknown
 */
export function isRadioFadedOut(): boolean {
    return IsRadioFadedOut();
}

/**
 * No comment provided
 * 
 * Hash: 0xA151A7394A214E65 | Since: 323 | API-Set: unknown
 */
export function isRadioRetuning(): boolean {
    return IsRadioRetuning();
}

/**
 * No comment provided
 * 
 * Hash: 0x2B1784DB08AFEA79 | Since: 2699 | API-Set: unknown
 */
export function isRadioStationFavourited(radioStation: string): boolean {
    return IsRadioStationFavourited(radioStation);
}

/**
 * No comment provided
 * 
 * Hash: 0xDF0D54BE7A776737 | Since: 323 | API-Set: unknown
 */
export function isScriptedConversationLoaded(): boolean {
    return IsScriptedConversationLoaded();
}

/**
 * No comment provided
 * 
 * Hash: 0x16754C556D2EDE3D | Since: 323 | API-Set: unknown
 */
export function isScriptedConversationOngoing(): boolean {
    return IsScriptedConversationOngoing();
}

/**
 * No comment provided
 * 
 * Hash: 0xCC9AA18DCC7084F4 | Since: 323 | API-Set: unknown
 */
export function isScriptedSpeechPlaying(p0: number | IPed): boolean {
    const _p0 = p0 instanceof IPed ? p0.handle() : p0;
    return IsScriptedSpeechPlaying(_p0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD11FA52EB849D978 | Since: 323 | API-Set: unknown
 */
export function isStreamPlaying(): boolean {
    return IsStreamPlaying();
}

/**
 * No comment provided
 * 
 * Hash: 0x5DB8010EE71FDEF2 | Since: 323 | API-Set: unknown
 */
export function isVehicleAudiblyDamaged(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleAudiblyDamaged(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0BE4BE946463F917 | Since: 505 | API-Set: unknown
 */
export function isVehicleRadioOn(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleRadioOn(_vehicle);
}

/**
 * Full list of static emitters by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/staticEmitters.json
 * 
 * Hash: 0x651D3228960D08AF | Since: 505 | API-Set: unknown
 */
export function linkStaticEmitterToEntity(emitterName: string, entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    LinkStaticEmitterToEntity(emitterName, _entity);
}

/**
 * Example:
 * `AUDIO::LOAD_STREAM("CAR_STEAL_1_PASSBY", "CAR_STEAL_1_SOUNDSET");`
 * 
 * All found occurrences in the b678d decompiled scripts: https://pastebin.com/3rma6w5w
 * 
 * Stream names often ends with "_MASTER", "_SMALL" or "_STREAM". Also "_IN", "_OUT" and numbers.
 * 
 * soundSet is often set to 0 in the scripts. These are common to end the soundSets: "_SOUNDS", "_SOUNDSET" and numbers.
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * Hash: 0x1F1F957154EC51DF | Since: 323 | API-Set: unknown
 */
export function loadStream(streamName: string, soundSet: string): boolean {
    return LoadStream(streamName, soundSet);
}

/**
 * Example:
 * `AUDIO::LOAD_STREAM_WITH_START_OFFSET("STASH_TOXIN_STREAM", 2400, "FBI_05_SOUNDS");`
 * 
 * Only called a few times in the scripts.
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * Hash: 0x59C16B79F53B3712 | Since: 323 | API-Set: unknown
 */
export function loadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): boolean {
    return LoadStreamWithStartOffset(streamName, startOffset, soundSet);
}

/**
 * Disables the radio station (hides it from the radio wheel).
 * 
 * Hash: 0x477D9DB48F889591 | Since: 1493 | API-Set: unknown
 */
export function lockRadioStation(radioStationName: string, toggle: boolean): void {
    LockRadioStation(radioStationName, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF5E5EA2DCEEACF3 | Since: 2372 | API-Set: unknown
 */
export function lockRadioStationTrackList(radioStation: string, trackListName: string): void {
    LockRadioStationTrackList(radioStation, trackListName);
}

/**
 * Sets audio flag "OverrideMicrophoneSettings"
 * 
 * Hash: 0x75773E11BA459E90 | Since: 323 | API-Set: unknown
 */
export function overrideMicrophoneSettings(hash: number | string, toggle: boolean): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    OverrideMicrophoneSettings(hash, toggle);
}

/**
 * Sets audio flag "OverridePlayerGroundMaterial"
 * 
 * Hash: 0xD2CC78CD3D0B50F9 | Since: 323 | API-Set: unknown
 */
export function overridePlayerGroundMaterial(hash: number | string, toggle: boolean): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    OverridePlayerGroundMaterial(hash, toggle);
}

/**
 * This native enables the audio flag "TrevorRageIsOverridden" and sets the voice effect to `voiceEffect`
 * 
 * Hash: 0x13AD665062541A7E | Since: 323 | API-Set: unknown
 */
export function overrideTrevorRage(voiceEffect: string): void {
    OverrideTrevorRage(voiceEffect);
}

/**
 * No comment provided
 * 
 * Hash: 0xF2A9CDABCEA04BD6 | Since: 323 | API-Set: unknown
 */
export function overrideUnderwaterStream(): void {
    OverrideUnderwaterStream(undefined, false);
}

/**
 * Overrides the vehicle's horn hash.
 * When changing this hash on a vehicle, it will not return the 'overwritten' hash. It will still always return the default horn hash (same as GET_VEHICLE_DEFAULT_HORN)
 * 
 * vehicle - the vehicle whose horn should be overwritten
 * 
 * Hash: 0x3CDC1E622CCE0356 | Since: 323 | API-Set: unknown
 */
export function overrideVehHorn(vehicle: number | IVehicle, override: boolean, hornHash: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    OverrideVehHorn(_vehicle, override, hornHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x8530AD776CD72B12 | Since: 323 | API-Set: unknown
 */
export function pauseScriptedConversation(): void {
    PauseScriptedConversation(false);
}

/**
 * Full list of speeches and voices names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json
 * 
 * Hash: 0xED640017ED337E45 | Since: 323 | API-Set: unknown
 */
export function playAmbientSpeechFromPositionNative(speechName: string, voiceName: string, pos: Vector3, speechParam: string): void {
    PlayAmbientSpeechFromPositionNative(speechName, voiceName, pos.x, pos.y, pos.z, speechParam);
}

/**
 * Plays sounds from a ped with chop model. For example it used to play bark or sniff sounds. p1 is always 3 or 4294967295 in decompiled scripts. By a quick disassembling I can assume that this arg is unused.
 * This native is works only when you call it on the ped with right model (ac_chop only ?)
 * Speech Name can be: CHOP_SNIFF_SEQ CHOP_WHINE CHOP_LICKS_MOUTH CHOP_PANT bark GROWL SNARL BARK_SEQ
 * 
 * Hash: 0xEE066C7006C49C0A | Since: 323 | API-Set: unknown
 */
export function playAnimalVocalization(pedHandle: number | IPed, speechName: string): void {
    const _pedHandle = pedHandle instanceof IPed ? pedHandle.handle() : pedHandle;
    PlayAnimalVocalization(_pedHandle, 0, speechName);
}

/**
 * Only call found in the b617d scripts:
 * 
 * `AUDIO::PLAY_DEFERRED_SOUND_FRONTEND("BACK", "HUD_FREEMODE_SOUNDSET");`
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * Hash: 0xCADA5A0D0702381E | Since: 323 | API-Set: unknown
 */
export function playDeferredSoundFrontend(soundName: string, soundsetName: string): void {
    PlayDeferredSoundFrontend(soundName, soundsetName);
}

/**
 * No comment provided
 * 
 * Hash: 0xCD536C4D33DCC900 | Since: 323 | API-Set: unknown
 */
export function playEndCreditsMusic(play: boolean): void {
    PlayEndCreditsMusic(play);
}

/**
 * Called 38 times in the scripts. There are 5 different audioNames used.
 * One unknown removed below.
 * 
 * `AUDIO::PLAY_MISSION_COMPLETE_AUDIO("DEAD");`
 * `AUDIO::PLAY_MISSION_COMPLETE_AUDIO("FRANKLIN_BIG_01");`
 * `AUDIO::PLAY_MISSION_COMPLETE_AUDIO("GENERIC_FAILED");`
 * `AUDIO::PLAY_MISSION_COMPLETE_AUDIO("TREVOR_SMALL_01");`
 * 
 * Hash: 0xB138AAB8A70D3C69 | Since: 323 | API-Set: unknown
 */
export function playMissionComplete(audioName: string): void {
    PlayMissionCompleteAudio(audioName);
}

/**
 * `Needs another parameter [int p2]. The signature is PED::PLAY_PAIN(Ped ped, int painID, int p1, int p2);`
 * 
 * Last 2 parameters always seem to be 0.
 * 
 * EX: Function.Call(Hash.PLAY_PAIN, TestPed, 6, 0, 0);
 * 
 * Known Pain IDs
 * ________________________
 * 
 * 1 - Doesn't seem to do anything. Does NOT crash the game like previously said. (Latest patch)
 * 6 - Scream (Short)
 * 7 - Scared Scream (Kinda Long)
 * 8 - On Fire
 * 
 * 
 * Hash: 0xBC9AE166038A5CEC | Since: 323 | API-Set: unknown
 */
export function playPain(ped: number | IPed, painID: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayPain(_ped, painID, 0, undefined);
}

/**
 * Plays ambient speech. See also _0x5C57B85D.
 * 
 * See PLAY_PED_AMBIENT_SPEECH_NATIVE for parameter specifications.
 * 
 * Full list of speeches and voices names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json
 * 
 * Hash: 0xC6941B4A3A8FBBB9 | Since: 323 | API-Set: unknown
 */
export function playPedAmbientSpeechAndCloneNative(ped: number | IPed, speechName: string, speechParam: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayPedAmbientSpeechAndCloneNative(_ped, speechName, speechParam, undefined);
}

/**
 * Plays ambient speech. See also _0x444180DB.
 * 
 * ped: The ped to play the ambient speech.
 * speechName: Name of the speech to play, eg. "GENERIC_HI".
 * speechParam: Can be one of the following:
 * SPEECH_PARAMS_STANDARD
 * SPEECH_PARAMS_ALLOW_REPEAT
 * SPEECH_PARAMS_BEAT
 * SPEECH_PARAMS_FORCE
 * SPEECH_PARAMS_FORCE_FRONTEND
 * SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND
 * SPEECH_PARAMS_FORCE_NORMAL
 * SPEECH_PARAMS_FORCE_NORMAL_CLEAR
 * SPEECH_PARAMS_FORCE_NORMAL_CRITICAL
 * SPEECH_PARAMS_FORCE_SHOUTED
 * SPEECH_PARAMS_FORCE_SHOUTED_CLEAR
 * SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY
 * SPEECH_PARAMS_MEGAPHONE
 * SPEECH_PARAMS_HELI
 * SPEECH_PARAMS_FORCE_MEGAPHONE
 * SPEECH_PARAMS_FORCE_HELI
 * SPEECH_PARAMS_INTERRUPT
 * SPEECH_PARAMS_INTERRUPT_SHOUTED
 * SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR
 * SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL
 * SPEECH_PARAMS_INTERRUPT_NO_FORCE
 * SPEECH_PARAMS_INTERRUPT_FRONTEND
 * SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND
 * SPEECH_PARAMS_ADD_BLIP
 * SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT
 * SPEECH_PARAMS_ADD_BLIP_FORCE
 * SPEECH_PARAMS_ADD_BLIP_SHOUTED
 * SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE
 * SPEECH_PARAMS_ADD_BLIP_INTERRUPT
 * SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL
 * SPEECH_PARAMS_SHOUTED
 * SPEECH_PARAMS_SHOUTED_CLEAR
 * SPEECH_PARAMS_SHOUTED_CRITICAL
 * 
 * Note: A list of Name and Parameters can be found here https://pastebin.com/1GZS5dCL
 * 
 * Full list of speeches and voices names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json
 * 
 * Hash: 0x8E04FEDD28D42462 | Since: 323 | API-Set: unknown
 */
export function playPedAmbientSpeechNative(ped: number | IPed, speechName: string, speechParam: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayPedAmbientSpeechNative(_ped, speechName, speechParam, undefined);
}

/**
 * This is the same as PLAY_PED_AMBIENT_SPEECH_NATIVE and PLAY_PED_AMBIENT_SPEECH_AND_CLONE_NATIVE but it will allow you to play a speech file from a specific voice file. It works on players and all peds, even animals.
 * 
 * EX (C#):
 * GTA.Native.Function.Call(Hash.PLAY_PED_AMBIENT_SPEECH_WITH_VOICE_NATIVE, Game.Player.Character, "GENERIC_INSULT_HIGH", "s_m_y_sheriff_01_white_full_01", "SPEECH_PARAMS_FORCE_SHOUTED", 0);
 * 
 * The first param is the ped you want to play it on, the second is the speech name, the third is the voice name, the fourth is the speech param, and the last param is usually always 0.
 * 
 * Full list of speeches and voices names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json
 * 
 * Hash: 0x3523634255FC3318 | Since: 323 | API-Set: unknown
 */
export function playPedAmbientSpeechWithVoiceNative(ped: number | IPed, speechName: string, voiceName: string, speechParam: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayPedAmbientSpeechWithVoiceNative(_ped, speechName, voiceName, speechParam, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xAD2191A6E3543189 | Since: 3717 | API-Set: unknown
 */
export function playPedEventAnim(pedHandle: number | IPed, audioEvent: string): void {
    const _pedHandle = pedHandle instanceof IPed ? pedHandle.handle() : pedHandle;
    Citizen.invokeNative('0xAD2191A6E3543189', _pedHandle, audioEvent);
}

/**
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/RFb4GTny
 * 
 * `AUDIO::PLAY_PED_RINGTONE("Remote_Ring", PLAYER::PLAYER_PED_ID(), 1);`
 * `AUDIO::PLAY_PED_RINGTONE("Dial_and_Remote_Ring", PLAYER::PLAYER_PED_ID(), 1);`
 * 
 * 
 * Hash: 0xF9E56683CA8E11A5 | Since: 323 | API-Set: unknown
 */
export function playPedRingtone(ringtoneName: string, ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayPedRingtone(ringtoneName, _ped, false);
}

/**
 * Plays the given police radio message.
 * 
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/GBnsQ5hr
 * Full list of police report names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/policeReportNames.json
 * 
 * Hash: 0xDFEBD56D9BD1EB16 | Since: 323 | API-Set: unknown
 */
export function playPoliceReport(name: string): number {
    return PlayPoliceReport(name, 0);
}

/**
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/A8Ny8AHZ
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * Hash: 0x7FF4944CC209192D | Since: 323 | API-Set: unknown
 */
export function playSound(soundId: number, audioName: string, audioRef: string): void {
    PlaySound(soundId, audioName, audioRef, false, undefined, false);
}

/**
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/eeFc5DiW
 * 
 * gtaforums.com/topic/795622-audio-for-mods
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * Hash: 0x8D8686B622B88120 | Since: 323 | API-Set: unknown
 */
export function playSoundFromCoord(soundId: number, audioName: string, pos: Vector3, audioRef: string, isNetwork: boolean, range: number): void {
    PlaySoundFromCoord(soundId, audioName, pos.x, pos.y, pos.z, audioRef, isNetwork, range, false);
}

/**
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/f2A7vTj0
 * No changes made in b678d.
 * 
 * gtaforums.com/topic/795622-audio-for-mods
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * Hash: 0xE65F427EB70AB1ED | Since: 323 | API-Set: unknown
 */
export function playSoundFromEntity(soundId: number, audioName: string, entity: number | IEntity, audioRef: string, isNetwork: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    PlaySoundFromEntity(soundId, audioName, _entity, audioRef, isNetwork, undefined);
}

/**
 * Only used with "formation_flying_blips_soundset" and "biker_formation_blips_soundset".
 * p1 is always the model of p2
 * 
 * Hash: 0x5B9853296731E88D | Since: 877 | API-Set: unknown
 */
export function playSoundFromEntityHash(soundId: number, model: number | string, entity: number | IEntity, soundSetHash: number | string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof model === 'string') model = GetHashKey(model)
    if (typeof soundSetHash === 'string') soundSetHash = GetHashKey(soundSetHash)
    Citizen.invokeNative('0x5B9853296731E88D', soundId, model, _entity, soundSetHash, undefined, undefined);
}

/**
 * List: https://pastebin.com/DCeRiaLJ
 * 
 * All occurrences as of Cayo Perico Heist DLC (b2189), sorted alphabetically and identical lines removed: https://git.io/JtLxM
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * Hash: 0x67C540AA08E4A6F5 | Since: 323 | API-Set: unknown
 */
export function playSoundFrontend(soundId: number, audioName: string, audioRef: string): void {
    PlaySoundFrontend(soundId, audioName, audioRef, false);
}

/**
 * `Used with AUDIO::LOAD_STREAM`
 * 
 * Example from finale_heist2b.c4:
 * `TASK::TASK_SYNCHRONIZED_SCENE(l_4C8[2\/\*14\*\/], l_4C8[2\/\*14\*\/]._f7, l_30A, "push_out_vault_l", 4.0, -1.5, 5, 713, 4.0, 0);`
 * `PED::SET_SYNCHRONIZED_SCENE_PHASE(l_4C8[2\/\*14\*\/]._f7, 0.0);`
 * `PED::FORCE_PED_AI_AND_ANIMATION_UPDATE(l_4C8[2\/\*14\*\/], 0, 0);`
 * `PED::SET_PED_COMBAT_ATTRIBUTES(l_4C8[2\/\*14\*\/], 38, 1);`
 * `PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS(l_4C8[2\/\*14\*\/], 1);`
 * `if (AUDIO::LOAD_STREAM("Gold_Cart_Push_Anim_01", "BIG_SCORE_3B_SOUNDS")) {`
 * `AUDIO::PLAY_STREAM_FROM_OBJECT(l_36F[0\/\*1\*\/]);`
 * }
 * 
 * Hash: 0xEBAA9B64D76356FD | Since: 323 | API-Set: unknown
 */
export function playStreamFromObject(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    PlayStreamFromObject(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x89049DD63C08B5D1 | Since: 323 | API-Set: unknown
 */
export function playStreamFromPed(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayStreamFromPed(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x21442F412E8DE56B | Since: 323 | API-Set: unknown
 */
export function playStreamFromPosition(pos: Vector3): void {
    PlayStreamFromPosition(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xB70374A758007DFA | Since: 323 | API-Set: unknown
 */
export function playStreamFromVehicle(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    PlayStreamFromVehicle(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x58FCE43488F9F5F4 | Since: 323 | API-Set: unknown
 */
export function playStreamFrontend(): void {
    PlayStreamFrontend();
}

/**
 * No comment provided
 * 
 * Hash: 0x8B2FD4560E55DD2D | Since: 323 | API-Set: unknown
 */
export function playSynchronizedEvent(sceneID: number): boolean {
    return PlaySynchronizedAudioEvent(sceneID);
}

/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * Hash: 0x62A456AA4769EF34 | Since: 323 | API-Set: unknown
 */
export function playVehicleDoorCloseSound(vehicle: number | IVehicle, doorId: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    PlayVehicleDoorCloseSound(_vehicle, doorId);
}

/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * Hash: 0x3A539D52857EA82D | Since: 323 | API-Set: unknown
 */
export function playVehicleDoorOpenSound(vehicle: number | IVehicle, doorId: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    PlayVehicleDoorOpenSound(_vehicle, doorId);
}

/**
 * No comment provided
 * 
 * Hash: 0x3B3CAD6166916D87 | Since: 323 | API-Set: unknown
 */
export function preloadScriptConversation(): void {
    PreloadScriptConversation(false, false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x6004BCB0E226AAEA | Since: 323 | API-Set: unknown
 */
export function preloadScriptPhoneConversation(): void {
    PreloadScriptPhoneConversation(false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA4CEA6AE0000A7E | Since: 1180 | API-Set: unknown
 */
export function preloadVehicleBank(vehicleModel: number | string): void {
    if (typeof vehicleModel === 'string') vehicleModel = GetHashKey(vehicleModel)
    PreloadVehicleAudioBank(vehicleModel);
}

/**
 * Example:
 * 
 * `bool prepareAlarm = AUDIO::PREPARE_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS");`
 * Full list of alarm names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/alarmSounds.json
 * 
 * Hash: 0x9D74AE343DB65533 | Since: 323 | API-Set: unknown
 */
export function prepareAlarm(alarmName: string): boolean {
    return PrepareAlarm(alarmName);
}

/**
 * All music event names found in the b617d scripts: https://pastebin.com/GnYt0R3P
 * Full list of music event names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/musicEventNames.json
 * 
 * Hash: 0x1E5185B72EF5158A | Since: 323 | API-Set: unknown
 */
export function prepareMusicEvent(eventName: string): boolean {
    return PrepareMusicEvent(eventName);
}

/**
 * p1 is always 0 in the scripts
 * 
 * Hash: 0xC7ABCACA4985A766 | Since: 323 | API-Set: unknown
 */
export function prepareSynchronizedEvent(audioEvent: string): boolean {
    return PrepareSynchronizedAudioEvent(audioEvent, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x029FE7CD1B7E2E75 | Since: 323 | API-Set: unknown
 */
export function prepareSynchronizedEventForScene(sceneID: number, audioEvent: string): boolean {
    return PrepareSynchronizedAudioEventForScene(sceneID, audioEvent);
}

/**
 * No comment provided
 * 
 * Hash: 0xFBE20329593DEC9D | Since: 323 | API-Set: unknown
 */
export function recordBrokenGlass(pos: Vector3, radius: number): void {
    RecordBrokenGlass(pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x5D2BFAAB8D956E0E | Since: 573 | API-Set: unknown
 */
export function refreshClosestOceanShoreline(): void {
    RefreshClosestOceanShoreline();
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0xC6ED9D5092438D91 | Since: 323 | API-Set: unknown
 */
export function registerScriptWith(): void {
    RegisterScriptWithAudio(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x65475A218FFAA93D | Since: 323 | API-Set: unknown
 */
export function releaseAmbientBank(): void {
    ReleaseAmbientAudioBank();
}

/**
 * No comment provided
 * 
 * Hash: 0x0EC92A1BF0857187 | Since: 323 | API-Set: unknown
 */
export function releaseMissionBank(): void {
    ReleaseMissionAudioBank();
}

/**
 * Full list of script audio bank names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scriptAudioBankNames.json
 * 
 * Hash: 0x77ED170667F50170 | Since: 323 | API-Set: unknown
 */
export function releaseNamedScriptBank(audioBank: string): void {
    ReleaseNamedScriptAudioBank(audioBank);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A2D8AD0A9EB9C3F | Since: 323 | API-Set: unknown
 */
export function releaseScriptBank(): void {
    ReleaseScriptAudioBank();
}

/**
 * No comment provided
 * 
 * Hash: 0x353FC880830B88FA | Since: 323 | API-Set: unknown
 */
export function releaseSoundId(soundId: number): void {
    ReleaseSoundId(soundId);
}

/**
 * No comment provided
 * 
 * Hash: 0xCE4AC0439F607045 | Since: 323 | API-Set: unknown
 */
export function releaseWeapon(): void {
    ReleaseWeaponAudio();
}

/**
 * No comment provided
 * 
 * Hash: 0x18EB48CFC41F2EA0 | Since: 323 | API-Set: unknown
 */
export function removeEntityFromMixGroup(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    RemoveEntityFromAudioMixGroup(_entity, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x8EF105736194F80C | Since: 3570 | API-Set: unknown
 */
export function removeIndividualPortalSettingsOverride(interiorNameHash: number | string, roomIndex: number, doorIndex: number): void {
    if (typeof interiorNameHash === 'string') interiorNameHash = GetHashKey(interiorNameHash)
    Citizen.invokeNative('0x8EF105736194F80C', interiorNameHash, roomIndex, doorIndex);
}

/**
 * Found in the b617d scripts, duplicates removed:
 * 
 * `AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE("V_CARSHOWROOM_PS_WINDOW_UNBROKEN");`
 * `AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE("V_CIA_PS_WINDOW_UNBROKEN");`
 * `AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE("V_DLC_HEIST_APARTMENT_DOOR_CLOSED");`
 * `AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE("V_FINALEBANK_PS_VAULT_INTACT");`
 * `AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE("V_MICHAEL_PS_BATHROOM_WITH_WINDOW");`
 * 
 * Hash: 0xB4BBFD9CD8B3922B | Since: 323 | API-Set: unknown
 */
export function removePortalSettingsOverride(): void {
    RemovePortalSettingsOverride(undefined);
}

/**
 * All occurrences and usages found in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/XZ1tmGEz
 * Full list of ambient audio bank names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientAudioBankNames.json
 * p2 is always -1
 * 
 * Hash: 0xFE02FFBED8CA9D99 | Since: 323 | API-Set: unknown
 */
export function requestAmbientBank(audioBank: string): boolean {
    return RequestAmbientAudioBank(audioBank, false, undefined);
}

/**
 * All occurrences and usages found in b617d: https://pastebin.com/NzZZ2Tmm
 * Full list of mission audio bank names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/missionAudioBankNames.json
 * p2 is always -1
 * 
 * Hash: 0x7345BDD95E62E0F2 | Since: 323 | API-Set: unknown
 */
export function requestMissionBank(audioBank: string): boolean {
    return RequestMissionAudioBank(audioBank, false, undefined);
}

/**
 * All occurrences and usages found in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/AkmDAVn6
 * Full list of script audio bank names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scriptAudioBankNames.json
 * p2 is always -1
 * 
 * Hash: 0x2F844A8B08D76685 | Since: 323 | API-Set: unknown
 */
export function requestScriptBank(audioBank: string): boolean {
    return RequestScriptAudioBank(audioBank, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4ADA3F19BE4A6047 | Since: 323 | API-Set: unknown
 */
export function requestTennisBanks(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RequestTennisBanks(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xF54BB7B61036F335 | Since: 323 | API-Set: unknown
 */
export function resetPedFlags(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ResetPedAudioFlags(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xE78503B10C4314E0 | Since: 323 | API-Set: unknown
 */
export function resetTrevorRage(): void {
    ResetTrevorRage();
}

/**
 * No comment provided
 * 
 * Hash: 0xD2DCCD8E16E20997 | Since: 323 | API-Set: unknown
 */
export function resetVehicleStartupRevSound(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ResetVehicleStartupRevSound(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9AEB285D1818C9AC | Since: 323 | API-Set: unknown
 */
export function restartScriptedConversation(): void {
    RestartScriptedConversation();
}

/**
 * No comment provided
 * 
 * Hash: 0x70B8EC8FC108A634 | Since: 323 | API-Set: unknown
 */
export function scriptOverridesWindElevation(): void {
    ScriptOverridesWindElevation(false, undefined);
}

/**
 * Makes pedestrians sound their horn longer, faster and more agressive when they use their horn.
 * 
 * Hash: 0x395BF71085D1B1D9 | Since: 323 | API-Set: unknown
 */
export function setAggressiveHorns(toggle: boolean): void {
    SetAggressiveHorns(toggle);
}

/**
 * Audio List
 * gtaforums.com/topic/795622-audio-for-mods/
 * 
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/FTeAj4yZ
 * 
 * Hash: 0x6C8065A3B780185B | Since: 323 | API-Set: unknown
 */
export function setAmbientVoiceName(ped: number | IPed, name: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetAmbientVoiceName(_ped, name);
}

/**
 * No comment provided
 * 
 * Hash: 0x9A53DED9921DE990 | Since: 463 | API-Set: unknown
 */
export function setAmbientVoiceNameHash(ped: number | IPed, hash: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof hash === 'string') hash = GetHashKey(hash)
    SetAmbientVoiceNameHash(_ped, hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x9748FA4DE50CCE3E | Since: 323 | API-Set: unknown
 */
export function setAmbientZoneListState(ambientZone: string, enabled: boolean, forceUpdate: boolean): void {
    SetAmbientZoneListState(ambientZone, enabled, forceUpdate);
}

/**
 * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
 * 
 * Hash: 0xF3638DAE8C4045E1 | Since: 323 | API-Set: unknown
 */
export function setAmbientZoneListStatePersistent(ambientZone: string, enabled: boolean, forceUpdate: boolean): void {
    SetAmbientZoneListStatePersistent(ambientZone, enabled, forceUpdate);
}

/**
 * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
 * 
 * Hash: 0xBDA07E5950085E46 | Since: 323 | API-Set: unknown
 */
export function setAmbientZoneState(zoneName: string, enabled: boolean, forceUpdate: boolean): void {
    SetAmbientZoneState(zoneName, enabled, forceUpdate);
}

/**
 * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
 * 
 * Hash: 0x1D6650420CEC9D3B | Since: 323 | API-Set: unknown
 */
export function setAmbientZoneStatePersistent(ambientZone: string, enabled: boolean, forceUpdate: boolean): void {
    SetAmbientZoneStatePersistent(ambientZone, enabled, forceUpdate);
}

/**
 * mood can be 0 or 1 (it's not a boolean value!). Effects audio of the animal.
 * 
 * Hash: 0xCC97B29285B1DC3B | Since: 323 | API-Set: unknown
 */
export function setAnimalMood(animal: number | IPed, mood: number): void {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    SetAnimalMood(_animal, mood);
}

/**
 * Possible flag names:
 * "ActivateSwitchWheelAudio"
 * "AllowAmbientSpeechInSlowMo"
 * "AllowCutsceneOverScreenFade"
 * "AllowForceRadioAfterRetune"
 * "AllowPainAndAmbientSpeechToPlayDuringCutscene"
 * "AllowPlayerAIOnMission"
 * "AllowPoliceScannerWhenPlayerHasNoControl"
 * "AllowRadioDuringSwitch"
 * "AllowRadioOverScreenFade"
 * "AllowScoreAndRadio"
 * "AllowScriptedSpeechInSlowMo"
 * "AvoidMissionCompleteDelay"
 * "DisableAbortConversationForDeathAndInjury"
 * "DisableAbortConversationForRagdoll"
 * "DisableBarks"
 * "DisableFlightMusic"
 * "DisableReplayScriptStreamRecording"
 * "EnableHeadsetBeep"
 * "ForceConversationInterrupt"
 * "ForceSeamlessRadioSwitch"
 * "ForceSniperAudio"
 * "FrontendRadioDisabled"
 * "HoldMissionCompleteWhenPrepared"
 * "IsDirectorModeActive"
 * "IsPlayerOnMissionForSpeech"
 * "ListenerReverbDisabled"
 * "LoadMPData"
 * "MobileRadioInGame"
 * "OnlyAllowScriptTriggerPoliceScanner"
 * "PlayMenuMusic"
 * "PoliceScannerDisabled"
 * "ScriptedConvListenerMaySpeak"
 * "SpeechDucksScore"
 * "SuppressPlayerScubaBreathing"
 * "WantedMusicDisabled"
 * "WantedMusicOnMission"
 * 
 * -------------------------------
 * No added flag names between b393d and b573d, including b573d.
 * 
 * #######################################################################
 * 
 * "IsDirectorModeActive" is an audio flag which will allow you to play speech infinitely without any pauses like in Director Mode.
 * 
 * -----------------------------------------------------------------------
 * 
 * All flag IDs and hashes:
 * 
 * ID: 00 | Hash: 0x0FED7A7F
 * ID: 01 | Hash: 0x20A7858F
 * ID: 02 | Hash: 0xA11C2259
 * ID: 03 | Hash: 0x08DE4700
 * ID: 04 | Hash: 0x989F652F
 * ID: 05 | Hash: 0x3C9E76BA
 * ID: 06 | Hash: 0xA805FEB0
 * ID: 07 | Hash: 0x4B94EA26
 * ID: 08 | Hash: 0x803ACD34
 * ID: 09 | Hash: 0x7C741226
 * ID: 10 | Hash: 0x31DB9EBD
 * ID: 11 | Hash: 0xDF386F18
 * ID: 12 | Hash: 0x669CED42
 * ID: 13 | Hash: 0x51F22743
 * ID: 14 | Hash: 0x2052B35C
 * ID: 15 | Hash: 0x071472DC
 * ID: 16 | Hash: 0xF9928BCC
 * ID: 17 | Hash: 0x7ADBDD48
 * ID: 18 | Hash: 0xA959BA1A
 * ID: 19 | Hash: 0xBBE89B60
 * ID: 20 | Hash: 0x87A08871
 * ID: 21 | Hash: 0xED1057CE
 * ID: 22 | Hash: 0x1584AD7A
 * ID: 23 | Hash: 0x8582CFCB
 * ID: 24 | Hash: 0x7E5E2FB0
 * ID: 25 | Hash: 0xAE4F72DB
 * ID: 26 | Hash: 0x5D16D1FA
 * ID: 27 | Hash: 0x06B2F4B8
 * ID: 28 | Hash: 0x5D4CDC96
 * ID: 29 | Hash: 0x8B5A48BA
 * ID: 30 | Hash: 0x98FBD539
 * ID: 31 | Hash: 0xD8CB0473
 * ID: 32 | Hash: 0x5CBB4874
 * ID: 33 | Hash: 0x2E9F93A9
 * ID: 34 | Hash: 0xD93BEA86
 * ID: 35 | Hash: 0x92109B7D
 * ID: 36 | Hash: 0xB7EC9E4D
 * ID: 37 | Hash: 0xCABDBB1D
 * ID: 38 | Hash: 0xB3FD4A52
 * ID: 39 | Hash: 0x370D94E5
 * ID: 40 | Hash: 0xA0F7938F
 * ID: 41 | Hash: 0xCBE1CE81
 * ID: 42 | Hash: 0xC27F1271
 * ID: 43 | Hash: 0x9E3258EB
 * ID: 44 | Hash: 0x551CDA5B
 * ID: 45 | Hash: 0xCB6D663C
 * ID: 46 | Hash: 0x7DACE87F
 * ID: 47 | Hash: 0xF9DE416F
 * ID: 48 | Hash: 0x882E6E9E
 * ID: 49 | Hash: 0x16B447E7
 * ID: 50 | Hash: 0xBD867739
 * ID: 51 | Hash: 0xA3A58604
 * ID: 52 | Hash: 0x7E046BBC
 * ID: 53 | Hash: 0xD95FDB98
 * ID: 54 | Hash: 0x5842C0ED
 * ID: 55 | Hash: 0x285FECC6
 * ID: 56 | Hash: 0x9351AC43
 * ID: 57 | Hash: 0x50032E75
 * ID: 58 | Hash: 0xAE6D0D59
 * ID: 59 | Hash: 0xD6351785
 * ID: 60 | Hash: 0xD25D71BC
 * ID: 61 | Hash: 0x1F7F6423
 * ID: 62 | Hash: 0xE24C3AA6
 * ID: 63 | Hash: 0xBFFDD2B7
 * 
 * Hash: 0xB9EFD5C25018725A | Since: 323 | API-Set: unknown
 */
export function setFlag(flagName: string, toggle: boolean): void {
    SetAudioFlag(flagName, toggle);
}

/**
 * Full list of audio scene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/audioSceneNames.json
 * 
 * Hash: 0xEF21A9EF089A2668 | Since: 323 | API-Set: unknown
 */
export function setSceneVariable(scene: string, variable: string, value: number): void {
    SetAudioSceneVariable(scene, variable, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xA5F377B175A699C5 | Since: 323 | API-Set: unknown
 */
export function setScriptCleanupTime(time: number): void {
    SetAudioScriptCleanupTime(time);
}

/**
 * Needs to be called every frame.
 * Audio mode to apply this frame: https://alloc8or.re/gta5/doc/enums/audSpecialEffectMode.txt
 * 
 * Hash: 0x12561FCBB62D5B9C | Since: 323 | API-Set: unknown
 */
export function setSpecialEffectMode(mode: number): void {
    SetAudioSpecialEffectMode(mode);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5564483E407F914 | Since: 323 | API-Set: unknown
 */
export function setVehiclePriority(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetAudioVehiclePriority(_vehicle, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0B568201DD99F0EB | Since: 323 | API-Set: unknown
 */
export function setConversationControlledByAnim(): void {
    SetConversationAudioControlledByAnim(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x61631F5DF50D1C34 | Since: 323 | API-Set: unknown
 */
export function setConversationPlaceholder(): void {
    SetConversationAudioPlaceholder(false);
}

/**
 * Examples:
 * 
 * `AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_MICHAEL", 1);`
 * `AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_MICHAEL", 1);`
 * `AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_TREVOR", 1);`
 * `AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_SAVE_MICHAEL_TREVOR", 1);`
 * `AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "OFF_ROAD_RADIO_ROCK_LIST", 1);`
 * `AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_06_COUNTRY", "MAGDEMO2_RADIO_DINGHY", 1);`
 * `AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_16_SILVERLAKE", "SEA_RACE_RADIO_PLAYLIST", 1);`
 * `AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "OFF_ROAD_RADIO_ROCK_LIST", 1);`
 * 
 * Hash: 0x4E404A9361F75BB2 | Since: 323 | API-Set: unknown
 */
export function setCustomRadioTrackList(radioStation: string, trackListName: string): void {
    SetCustomRadioTrackList(radioStation, trackListName, false);
}

/**
 * All occurrences found in b617d, sorted alphabetically and identical lines removed:
 * 
 * `AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_AK");`
 * `AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_CUSTOM");`
 * `AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_TOOTHLESS");`
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * Hash: 0x3B4BF5F0859204D9 | Since: 323 | API-Set: unknown
 */
export function setCutsceneOverride(name: string): void {
    SetCutsceneAudioOverride(name);
}

/**
 * Full list of static emitters by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/staticEmitters.json
 * 
 * Hash: 0xACF57305B12AF907 | Since: 323 | API-Set: unknown
 */
export function setEmitterRadioStation(emitterName: string, radioStation: string): void {
    SetEmitterRadioStation(emitterName, radioStation, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x892B6AB8F33606F5 | Since: 323 | API-Set: unknown
 */
export function setEntityForNullConvPed(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityForNullConvPed(0, _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xF7F26C6E9CC9EBB8 | Since: 323 | API-Set: unknown
 */
export function setFrontendRadioActive(active: boolean): void {
    SetFrontendRadioActive(active);
}

/**
 * No comment provided
 * 
 * Hash: 0x159B7318403A1CD8 | Since: 1103 | API-Set: unknown
 */
export function setGlobalRadioSignalLevel(): void {
    SetGlobalRadioSignalLevel(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3BD3F52BA9B1E4E8 | Since: 323 | API-Set: unknown
 */
export function setGpsActive(active: boolean): void {
    SetGpsActive(active);
}

/**
 * No comment provided
 * 
 * Hash: 0x76D683C108594D0E | Since: 323 | API-Set: unknown
 */
export function setHornEnabled(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetHornEnabled(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9C11908013EA4715 | Since: 323 | API-Set: unknown
 */
export function setHornPermanentlyOn(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SoundVehicleHornThisFrame(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D3AF56E94C9AE98 | Since: 323 | API-Set: unknown
 */
export function setHornPermanentlyOnTime(vehicle: number | IVehicle, time: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x9D3AF56E94C9AE98', _vehicle, time);
}

/**
 * No comment provided
 * 
 * Hash: 0xC9D623C5A3D8FD5D | Since: 3570 | API-Set: unknown
 */
export function setIndividualPortalSettingsOverride(interiorNameHash: number | string, roomIndex: number, doorIndex: number, newPortalSettingsName: string): void {
    if (typeof interiorNameHash === 'string') interiorNameHash = GetHashKey(interiorNameHash)
    Citizen.invokeNative('0xC9D623C5A3D8FD5D', interiorNameHash, roomIndex, doorIndex, newPortalSettingsName);
}

/**
 * No comment provided
 * 
 * Hash: 0x88795F13FACDA88D | Since: 323 | API-Set: unknown
 */
export function setInitialPlayerStation(radioStation: string): void {
    SetInitialPlayerStation(radioStation);
}

/**
 * This native controls where the game plays audio from. By default the microphone is positioned on the player.
 * When p0 is true the game will play audio from the 3 positions inputted.
 * It is recommended to set all 3 positions to the same value as mixing different positions doesn't seem to work well.
 * The scripts mostly use it with only one position such as in fbi3.c:
 * `AUDIO::SET_MICROPHONE_POSITION(true, ENTITY::GET_ENTITY_COORDS(iLocal_3091, true), ENTITY::GET_ENTITY_COORDS(iLocal_3091, true), ENTITY::GET_ENTITY_COORDS(iLocal_3091, true));`
 * 
 * Hash: 0xB6AE90EDDE95C762 | Since: 323 | API-Set: unknown
 */
export function setMicrophonePosition(toggle: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): void {
    SetMicrophonePosition(toggle, x1, y1, z1, x2, y2, z2, x3, y3, z3);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF286C554784F3DF | Since: 323 | API-Set: unknown
 */
export function setMobilePhoneRadioState(state: boolean): void {
    SetMobilePhoneRadioState(state);
}

/**
 * No comment provided
 * 
 * Hash: 0x1098355A16064BB3 | Since: 323 | API-Set: unknown
 */
export function setMobileRadioEnabledDuringGameplay(toggle: boolean): void {
    SetMobileRadioEnabledDuringGameplay(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x55ECF4D13D9903B0 | Since: 1868 | API-Set: unknown
 */
export function setNextRadioTrack(radioName: string, radioTrack: string): void {
    Citizen.invokeNative('0x55ECF4D13D9903B0', radioName, radioTrack, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB542DE8C3D1CB210 | Since: 323 | API-Set: unknown
 */
export function setNoDuckingForConversation(): void {
    Citizen.invokeNative('0xB542DE8C3D1CB210', false);
}

/**
 * Enables/disables ped's "quiet" footstep sound.
 * 
 * Hash: 0x29DA3CA8D8B2692D | Since: 1493 | API-Set: unknown
 */
export function setPedClothEventsEnabled(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedClothEventsEnabled(_ped, toggle);
}

/**
 * Enables/disables ped's "loud" footstep sound.
 * 
 * Hash: 0x0653B735BFBDFE87 | Since: 1493 | API-Set: unknown
 */
export function setPedFootstepsEventsEnabled(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAudioFootstepLoud(_ped, toggle);
}

/**
 * BOOL p1: 0 = Female; 1 = Male
 * 
 * Hash: 0xA5342D390CDA41D6 | Since: 323 | API-Set: unknown
 */
export function setPedGender(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAudioGender(_ped, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x8BF907833BE275DE | Since: 323 | API-Set: unknown
 */
export function setPedInteriorWallaDensity(): void {
    Citizen.invokeNative('0x8BF907833BE275DE', 0, 0);
}

/**
 * Sets the ped drunk sounds.  Only works with PLAYER_PED_ID
 * 
 * ====================================================
 * 
 * As mentioned above, this only sets the drunk sound to ped/player.
 * 
 * To give the Ped a drunk effect with drunk walking animation try using SET_PED_MOVEMENT_CLIPSET
 * 
 * Below is an example
 * 
 * if (!Function.Call<bool>(Hash.HAS_ANIM_SET_LOADED, "move_m@drunk@verydrunk"))
 * {
 * Function.Call(Hash.REQUEST_ANIM_SET, "move_m@drunk@verydrunk");
 * }
 * Function.Call(Hash.SET_PED_MOVEMENT_CLIPSET, Ped.Handle, "move_m@drunk@verydrunk", 0x3E800000);
 * 
 * 
 * 
 * And to stop the effect use
 * RESET_PED_MOVEMENT_CLIPSET
 * 
 * Hash: 0x95D2D383D5396B8A | Since: 323 | API-Set: unknown
 */
export function setPedIsDrunk(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedIsDrunk(_ped, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1B7ABE26CBCBF8C7 | Since: 372 | API-Set: unknown
 */
export function setPedRaceAndVoiceGroup(ped: number | IPed, voiceGroup: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof voiceGroup === 'string') voiceGroup = GetHashKey(voiceGroup)
    SetPedRaceAndVoiceGroup(_ped, 0, voiceGroup);
}

/**
 * Assigns some ambient voice to the ped.
 * 
 * Hash: 0x40CF0D12D142A9E8 | Since: 323 | API-Set: unknown
 */
export function setPedVoiceFull(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedVoiceFull(_ped);
}

/**
 * From the scripts:
 * 
 * `AUDIO::SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("PAIGE_PVG"));`
 * `AUDIO::SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("TALINA_PVG"));`
 * `AUDIO::SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("FEMALE_LOST_BLACK_PVG"));`
 * `AUDIO::SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("FEMALE_LOST_WHITE_PVG"));`
 * 
 * Hash: 0x7CDC8C3B89F661B3 | Since: 323 | API-Set: unknown
 */
export function setPedVoiceGroup(ped: number | IPed, voiceGroupHash: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof voiceGroupHash === 'string') voiceGroupHash = GetHashKey(voiceGroupHash)
    SetPedVoiceGroup(_ped, voiceGroupHash);
}

/**
 * Dat151RelType == 29
 * 
 * Hash: 0x0BABC1345ABBFB16 | Since: 2699 | API-Set: unknown
 */
export function setPedVoiceGroupFromRaceToPvg(ped: number | IPed, voiceGroupHash: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof voiceGroupHash === 'string') voiceGroupHash = GetHashKey(voiceGroupHash)
    SetPedVoiceGroupRace(_ped, voiceGroupHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x149AEE66F0CB3A99 | Since: 323 | API-Set: unknown
 */
export function setPedWallaDensity(): void {
    SetPedWallaDensity(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xEA241BB04110F091 | Since: 323 | API-Set: unknown
 */
export function setPlayerAngry(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPlayerAngry(_ped, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6FDDAD856E36988A | Since: 323 | API-Set: unknown
 */
export function setPlayerVehicleAlarmActive(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetPlayerVehicleAlarmAudioActive(_vehicle, toggle);
}

/**
 * Found in the b617d scripts, duplicates removed:
 * 
 * `AUDIO::SET_PORTAL_SETTINGS_OVERRIDE("V_CARSHOWROOM_PS_WINDOW_UNBROKEN", "V_CARSHOWROOM_PS_WINDOW_BROKEN");`
 * 
 * `AUDIO::SET_PORTAL_SETTINGS_OVERRIDE("V_CIA_PS_WINDOW_UNBROKEN", "V_CIA_PS_WINDOW_BROKEN");`
 * 
 * `AUDIO::SET_PORTAL_SETTINGS_OVERRIDE("V_DLC_HEIST_APARTMENT_DOOR_CLOSED", "V_DLC_HEIST_APARTMENT_DOOR_OPEN");`
 * 
 * `AUDIO::SET_PORTAL_SETTINGS_OVERRIDE("V_FINALEBANK_PS_VAULT_INTACT", "V_FINALEBANK_PS_VAULT_BLOWN");`
 * 
 * `AUDIO::SET_PORTAL_SETTINGS_OVERRIDE("V_MICHAEL_PS_BATHROOM_WITH_WINDOW", "V_MICHAEL_PS_BATHROOM_WITHOUT_WINDOW");`
 * 
 * Hash: 0x044DBAD7A7FA2BE5 | Since: 323 | API-Set: unknown
 */
export function setPortalSettingsOverride(): void {
    SetPortalSettingsOverride(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA07819E452FFE8F | Since: 505 | API-Set: unknown
 */
export function setPositionedPlayerVehicleRadioEmitterEnabled(): void {
    SetPositionedPlayerVehicleRadioEmitterEnabled(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x33E3C6C6F2F0B506 | Since: 323 | API-Set: unknown
 */
export function setPositionForNullConvPed(): void {
    SetPositionForNullConvPed(undefined, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xC1AA9F53CE982990 | Since: 323 | API-Set: unknown
 */
export function setRadioAutoUnfreeze(toggle: boolean): void {
    SetRadioAutoUnfreeze(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C96CDB04FCA358E | Since: 323 | API-Set: unknown
 */
export function setRadioFrontendFadeTime(fadeTime: number): void {
    SetRadioFrontendFadeTime(fadeTime);
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0x02E93C796ABD3A97 | Since: 323 | API-Set: unknown
 */
export function setRadioPositionMute(): void {
    Citizen.invokeNative('0x02E93C796ABD3A97', false);
}

/**
 * Tune Backwards...
 * 
 * Hash: 0xDD6BCF9E94425DF9 | Since: 323 | API-Set: unknown
 */
export function setRadioRetuneDown(): void {
    Citizen.invokeNative('0xDD6BCF9E94425DF9');
}

/**
 * Tune Forward...
 * 
 * Hash: 0xFF266D1D0EB1195D | Since: 323 | API-Set: unknown
 */
export function setRadioRetuneUp(): void {
    Citizen.invokeNative('0xFF266D1D0EB1195D');
}

/**
 * Doesn't have an effect in Story Mode.
 * 
 * Hash: 0x4CAFEBFA21EC188D | Since: 2372 | API-Set: unknown
 */
export function setRadioStationAsFavourite(radioStation: string, toggle: boolean): void {
    SetRadioStationIsVisible(radioStation, toggle);
}

/**
 * 6 calls in the b617d scripts, removed identical lines:
 * 
 * `AUDIO::SET_RADIO_STATION_MUSIC_ONLY("RADIO_01_CLASS_ROCK", 1);`
 * `AUDIO::SET_RADIO_STATION_MUSIC_ONLY(AUDIO::GET_RADIO_STATION_NAME(10), 0);`
 * `AUDIO::SET_RADIO_STATION_MUSIC_ONLY(AUDIO::GET_RADIO_STATION_NAME(10), 1);`
 * 
 * Hash: 0x774BD811F656A122 | Since: 323 | API-Set: unknown
 */
export function setRadioStationMusicOnly(radioStation: string, toggle: boolean): void {
    SetRadioStationMusicOnly(radioStation, toggle);
}

/**
 * Sets radio station by index.
 * 
 * Hash: 0xA619B168B8A8570F | Since: 323 | API-Set: unknown
 */
export function setRadioToStationIndex(radioStation: number): void {
    SetRadioToStationIndex(radioStation);
}

/**
 * List of radio stations that are in the wheel, in clockwise order, as of LS Tuners DLC: https://git.io/J8a3k
 * An older list including hidden radio stations: https://pastebin.com/Kj9t38KF
 * 
 * Hash: 0xC69EDA28699D5107 | Since: 323 | API-Set: unknown
 */
export function setRadioToStationName(stationName: string): void {
    SetRadioToStationName(stationName);
}

/**
 * Only found this one in the decompiled scripts:
 * 
 * `AUDIO::SET_RADIO_TRACK("RADIO_03_HIPHOP_NEW", "ARM1_RADIO_STARTS");`
 * 
 * 
 * Hash: 0xB39786F201FEE30B | Since: 323 | API-Set: unknown
 */
export function setRadioTrack(radioStation: string, radioTrack: string): void {
    SetRadioTrack(radioStation, radioTrack);
}

/**
 * No comment provided
 * 
 * Hash: 0x2CB0075110BE1E56 | Since: 1493 | API-Set: unknown
 */
export function setRadioTrackWithStartOffset(radioStationName: string, mixName: string): void {
    SetRadioTrackMix(radioStationName, mixName, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x06C0023BED16DD6B | Since: 323 | API-Set: unknown
 */
export function setScriptUpdateDoor(doorHash: number | string, toggle: boolean): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    SetScriptUpdateDoorAudio(doorHash, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF584CF8529B51434 | Since: 2372 | API-Set: unknown
 */
export function setSirenBypassMpDriverCheck(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetSirenKeepOn(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x43FA0DFC5DF87815 | Since: 323 | API-Set: unknown
 */
export function setSirenCanBeControlledBy(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x43FA0DFC5DF87815', _vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x1FEF0683B96EBCF2 | Since: 323 | API-Set: unknown
 */
export function setSirenWithNoDriver(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetSirenWithNoDriver(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBEF34B1D9624D5DD | Since: 323 | API-Set: unknown
 */
export function setSkipMinigunSpinUp(): void {
    Citizen.invokeNative('0xBEF34B1D9624D5DD', false);
}

/**
 * Example:
 * `AUDIO::SET_STATIC_EMITTER_ENABLED((Any*)"LOS_SANTOS_VANILLA_UNICORN_01_STAGE", false);    AUDIO::SET_STATIC_EMITTER_ENABLED((Any*)"LOS_SANTOS_VANILLA_UNICORN_02_MAIN_ROOM", false);    AUDIO::SET_STATIC_EMITTER_ENABLED((Any*)"LOS_SANTOS_VANILLA_UNICORN_03_BACK_ROOM", false);`
 * 
 * This turns off surrounding sounds not connected directly to peds.
 * 
 * Full list of static emitters by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/staticEmitters.json
 * 
 * Hash: 0x399D2D3B33F1B8EB | Since: 323 | API-Set: unknown
 */
export function setStaticEmitterEnabled(emitterName: string, toggle: boolean): void {
    SetStaticEmitterEnabled(emitterName, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x19F21E63AE6EAE4E | Since: 323 | API-Set: unknown
 */
export function setUserRadioControlEnabled(toggle: boolean): void {
    SetUserRadioControlEnabled(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xAD6B3148A78AE9B6 | Since: 323 | API-Set: unknown
 */
export function setVariableOnSound(soundId: number, variable: string): void {
    SetVariableOnSound(soundId, variable, 0);
}

/**
 * From the scripts, p0:
 * 
 * "ArmWrestlingIntensity",
 * "INOUT",
 * "Monkey_Stream",
 * "ZoomLevel"
 * 
 * Hash: 0x2F9D3834AEB9EF79 | Since: 323 | API-Set: unknown
 */
export function setVariableOnStream(variable: string): void {
    SetVariableOnStream(variable, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xBCC29F935ED07688 | Since: 323 | API-Set: unknown
 */
export function setVariableOnSynchScene(variableName: string, value: number): void {
    SetVariableOnCutsceneAudio(variableName, value);
}

/**
 * `AUDIO::SET_VARIABLE_ON_UNDER_WATER_STREAM("inTunnel", 1.0);`
 * `AUDIO::SET_VARIABLE_ON_UNDER_WATER_STREAM("inTunnel", 0.0);`
 * 
 * Hash: 0x733ADF241531E5C2 | Since: 323 | API-Set: unknown
 */
export function setVariableOnUnderWaterStream(variableName: string, value: number): void {
    SetVariableOnUnderWaterStream(variableName, value);
}

/**
 * intensity: 0.0f - 1.0f, only used once with 1.0f in R* Scripts (nigel2)
 * Makes an engine rattling noise when you decelerate, you need to be going faster to hear lower values
 * 
 * Hash: 0x01BB4D577D38BD9E | Since: 323 | API-Set: unknown
 */
export function setVehicleBodyDamageFactor(vehicle: number | IVehicle, intensity: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAudioBodyDamageFactor(_vehicle, intensity);
}

/**
 * No comment provided
 * 
 * Hash: 0x59E7B488451F4D3A | Since: 323 | API-Set: unknown
 */
export function setVehicleEngineDamageFactor(vehicle: number | IVehicle, damageFactor: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAudioEngineDamageFactor(_vehicle, damageFactor);
}

/**
 * SET_VEHICLE_BOOST_ACTIVE(vehicle, 1, 0);
 * SET_VEHICLE_BOOST_ACTIVE(vehicle, 0, 0);
 * 
 * Will give a boost-soundeffect.
 * 
 * Hash: 0x4A04DE7CAB2739A1 | Since: 323 | API-Set: unknown
 */
export function setVehicleBoostActive(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleBoostActive(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x58BB377BEC7CD5F4 | Since: 323 | API-Set: unknown
 */
export function setVehicleConversationsPersist(): void {
    Citizen.invokeNative('0x58BB377BEC7CD5F4', false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9BD7BD55E4533183 | Since: 1290 | API-Set: unknown
 */
export function setVehicleConversationsPersistNew(): void {
    Citizen.invokeNative('0x9BD7BD55E4533183', false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x97FFB4ADEED08066 | Since: 2372 | API-Set: unknown
 */
export function setVehicleForceReverseWarning(): void {
    Citizen.invokeNative('0x97FFB4ADEED08066', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0350E7E17BA767D0 | Since: 1365 | API-Set: unknown
 */
export function setVehicleHornSoundIndex(vehicle: number | IVehicle, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHornVariation(_vehicle, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xF3365489E0DD50F9 | Since: 323 | API-Set: unknown
 */
export function setVehicleMissileWarningEnabled(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xF3365489E0DD50F9', _vehicle, toggle);
}

/**
 * can't seem to enable radio on cop cars etc
 * 
 * Hash: 0x3B988190C0AA6C0B | Since: 323 | API-Set: unknown
 */
export function setVehicleRadioEnabled(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleRadioEnabled(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBB6F1CAEC68B0BCE | Since: 323 | API-Set: unknown
 */
export function setVehicleRadioLoud(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleRadioLoud(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF1F8157B8C3F171C | Since: 323 | API-Set: unknown
 */
export function setVehicleStartupRevSound(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleStartupRevSound(_vehicle, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC1805D05E6D4FE10 | Since: 323 | API-Set: unknown
 */
export function setVehForcedRadioThisFrame(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xC1805D05E6D4FE10', _vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E45765F3FBB582F | Since: 2372 | API-Set: unknown
 */
export function setVehHasNormalRadio(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehHasRadioOverride(_vehicle);
}

/**
 * List of radio stations that are in the wheel, in clockwise order, as of LS Tuners DLC: https://git.io/J8a3k
 * An older list including hidden radio stations: https://pastebin.com/Kj9t38KF
 * 
 * Hash: 0x1B9C0099CB942AC6 | Since: 323 | API-Set: unknown
 */
export function setVehRadioStation(vehicle: number | IVehicle, radioStation: string): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehRadioStation(_vehicle, radioStation);
}

/**
 * No comment provided
 * 
 * Hash: 0x6DDBBDD98E2E9C25 | Since: 323 | API-Set: unknown
 */
export function skipRadioForward(): void {
    SkipRadioForward();
}

/**
 * No comment provided
 * 
 * Hash: 0x9663FE6B7A61EB00 | Since: 323 | API-Set: unknown
 */
export function skipToNextScriptedConversationLine(): void {
    SkipToNextScriptedConversationLine();
}

/**
 * Example:
 * 
 * This will start the alarm at Fort Zancudo.
 * 
 * `AUDIO::START_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);`
 * 
 * First parameter (char) is the name of the alarm.
 * Second parameter (bool) is unknown, it does not seem to make a difference if this one is 0 or 1.
 * 
 * ----------
 * 
 * It DOES make a difference but it has to do with the duration or something I dunno yet
 * 
 * ----------
 * 
 * Found in the b617d scripts:
 * 
 * `AUDIO::START_ALARM("AGENCY_HEIST_FIB_TOWER_ALARMS", 0);`
 * `AUDIO::START_ALARM("AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER", 1);`
 * `AUDIO::START_ALARM("AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER_B", 0);`
 * `AUDIO::START_ALARM("BIG_SCORE_HEIST_VAULT_ALARMS", a_0);`
 * `AUDIO::START_ALARM("FBI_01_MORGUE_ALARMS", 1);`
 * `AUDIO::START_ALARM("FIB_05_BIOTECH_LAB_ALARMS", 0);`
 * `AUDIO::START_ALARM("JEWEL_STORE_HEIST_ALARMS", 0);`
 * `AUDIO::START_ALARM("PALETO_BAY_SCORE_ALARM", 1);`
 * `AUDIO::START_ALARM("PALETO_BAY_SCORE_CHICKEN_FACTORY_ALARM", 0);`
 * `AUDIO::START_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);`
 * `AUDIO::START_ALARM("PORT_OF_LS_HEIST_SHIP_ALARMS", 0);`
 * `AUDIO::START_ALARM("PRISON_ALARMS", 0);`
 * `AUDIO::START_ALARM("PROLOGUE_VAULT_ALARMS", 0);`
 * Full list of alarm names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/alarmSounds.json
 * 
 * Hash: 0x0355EF116C4C97B2 | Since: 323 | API-Set: unknown
 */
export function startAlarm(alarmName: string): void {
    StartAlarm(alarmName, false);
}

/**
 * Used to prepare a scene where the surrounding sound is muted or a bit changed. This does not play any sound.
 * 
 * List of all usable scene names found in b617d. Sorted alphabetically and identical names removed: https://pastebin.com/MtM9N9CC
 * Full list of audio scene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/audioSceneNames.json
 * 
 * Hash: 0x013A80FC08F6E4F2 | Since: 323 | API-Set: unknown
 */
export function startScene(scene: string): boolean {
    return StartAudioScene(scene);
}

/**
 * No comment provided
 * 
 * Hash: 0x23641AFE870AF385 | Since: 323 | API-Set: unknown
 */
export function startPreloadedConversation(): void {
    StartPreloadedConversation();
}

/**
 * No comment provided
 * 
 * Hash: 0x6B17C62C9635D2DC | Since: 323 | API-Set: unknown
 */
export function startScriptConversation(): void {
    StartScriptConversation(false, false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x252E5F915EABB675 | Since: 323 | API-Set: unknown
 */
export function startScriptPhoneConversation(): void {
    StartScriptPhoneConversation(false, false);
}

/**
 * Example:
 * 
 * This will stop the alarm at Fort Zancudo.
 * 
 * `AUDIO::STOP_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);`
 * 
 * First parameter (char) is the name of the alarm.
 * Second parameter (bool) has to be true (1) to have any effect.
 * Full list of alarm names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/alarmSounds.json
 * 
 * Hash: 0xA1CADDCD98415A41 | Since: 323 | API-Set: unknown
 */
export function stopAlarm(alarmName: string, toggle: boolean): void {
    StopAlarm(alarmName, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2F794A877ADD4C92 | Since: 323 | API-Set: unknown
 */
export function stopAllAlarms(stop: boolean): void {
    StopAllAlarms(stop);
}

/**
 * Full list of audio scene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/audioSceneNames.json
 * 
 * Hash: 0xDFE8422B3B94E688 | Since: 323 | API-Set: unknown
 */
export function stopScene(scene: string): void {
    StopAudioScene(scene);
}

/**
 * No comment provided
 * 
 * Hash: 0xBAC7FC81A75EC1A1 | Since: 323 | API-Set: unknown
 */
export function stopScenes(): void {
    StopAudioScenes();
}

/**
 * No comment provided
 * 
 * Hash: 0xB8BEC0CA6F0EDB0F | Since: 323 | API-Set: unknown
 */
export function stopCurrentPlayingAmbientSpeech(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StopCurrentPlayingAmbientSpeech(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A73D05A607734C7 | Since: 323 | API-Set: unknown
 */
export function stopCurrentPlayingSpeech(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StopCurrentPlayingSpeech(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x806058BBDC136E06 | Since: 323 | API-Set: unknown
 */
export function stopCutscene(): void {
    StopCutsceneAudio();
}

/**
 * No comment provided
 * 
 * Hash: 0x6C5AE23EFA885092 | Since: 323 | API-Set: unknown
 */
export function stopPedRingtone(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StopPedRingtone(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D64D7405520E3D3 | Since: 323 | API-Set: unknown
 */
export function stopPedSpeaking(ped: number | IPed, shaking: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StopPedSpeaking(_ped, shaking);
}

/**
 * No comment provided
 * 
 * Hash: 0xAB6781A5F3101470 | Since: 1868 | API-Set: unknown
 */
export function stopPedSpeakingSynced(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StopPedSpeakingSynced(_ped, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD79DEEFB53455EBA | Since: 323 | API-Set: unknown
 */
export function stopScriptedConversation(): number {
    return StopScriptedConversation(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xE4E6DD5566D28C82 | Since: 323 | API-Set: unknown
 */
export function stopSmokeGrenadeExplosionSounds(): void {
    StopSmokeGrenadeExplosionSounds();
}

/**
 * No comment provided
 * 
 * Hash: 0xA3B0C41BA5CC0BB5 | Since: 323 | API-Set: unknown
 */
export function stopSound(soundId: number): void {
    StopSound(soundId);
}

/**
 * No comment provided
 * 
 * Hash: 0xA4718A1419D18151 | Since: 323 | API-Set: unknown
 */
export function stopStream(): void {
    StopStream();
}

/**
 * No comment provided
 * 
 * Hash: 0x92D6A88E64A94430 | Since: 323 | API-Set: unknown
 */
export function stopSynchronizedEvent(sceneID: number): boolean {
    return StopSynchronizedAudioEvent(sceneID);
}

/**
 * List of all usable event names found in b617d used with this native. Sorted alphabetically and identical names removed: https://pastebin.com/RzDFmB1W
 * 
 * All music event names found in the b617d scripts: https://pastebin.com/GnYt0R3P
 * Full list of music event names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/musicEventNames.json
 * 
 * Hash: 0x706D57B0F50DA710 | Since: 323 | API-Set: unknown
 */
export function triggerMusicEvent(eventName: string): boolean {
    return TriggerMusicEvent(eventName);
}

/**
 * No comment provided
 * 
 * Hash: 0x66C3FB05206041BA | Since: 1290 | API-Set: unknown
 */
export function triggerSiren(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TriggerSiren(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2ACABED337622DF2 | Since: 1493 | API-Set: unknown
 */
export function unblockSpeechContextGroup(): void {
    UnblockSpeechContextGroup(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFC00454CF60B91DD | Since: 323 | API-Set: unknown
 */
export function unfreezeRadioStation(radioStation: string): void {
    UnfreezeRadioStation(radioStation);
}

/**
 * No comment provided
 * 
 * Hash: 0x19AF7ED9B9D23058 | Since: 323 | API-Set: unknown
 */
export function unhintAmbientBank(): void {
    Citizen.invokeNative('0x19AF7ED9B9D23058');
}

/**
 * No comment provided
 * 
 * Hash: 0x11579D940949C49E | Since: 678 | API-Set: unknown
 */
export function unhintNamedScriptBank(audioBank: string): void {
    Citizen.invokeNative('0x11579D940949C49E', audioBank);
}

/**
 * No comment provided
 * 
 * Hash: 0x9AC92EED5E4793AB | Since: 323 | API-Set: unknown
 */
export function unhintScriptBank(): void {
    Citizen.invokeNative('0x9AC92EED5E4793AB');
}

/**
 * "news" that play on the radio after you've done something in story mode(?)
 * 
 * Hash: 0xB165AB7C248B2DC1 | Since: 323 | API-Set: unknown
 */
export function unlockMissionNewsStory(newsStory: number): void {
    UnlockMissionNewsStory(newsStory);
}

/**
 * `AUDIO::UNLOCK_RADIO_STATION_TRACK_LIST("RADIO_16_SILVERLAKE", "MIRRORPARK_LOCKED");`
 * 
 * Hash: 0x031ACB6ABA18C729 | Since: 323 | API-Set: unknown
 */
export function unlockRadioStationTrackList(radioStation: string, trackListName: string): void {
    UnlockRadioStationTrackList(radioStation, trackListName);
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0xA8638BE228D4751A | Since: 323 | API-Set: unknown
 */
export function unregisterScriptWith(): void {
    UnregisterScriptWithAudio();
}

/**
 * No comment provided
 * 
 * Hash: 0x0150B6FF25A9E2E5 | Since: 323 | API-Set: unknown
 */
export function unrequestTennisBanks(): void {
    UnrequestTennisBanks();
}

/**
 * No comment provided
 * 
 * Hash: 0x7EC3C679D0E7E46B | Since: 678 | API-Set: unknown
 */
export function updateSoundCoord(soundId: number, pos: Vector3): void {
    UpdateSoundCoord(soundId, pos.x, pos.y, pos.z);
}

/**
 * Just a nullsub (i.e. does absolutely nothing) since build 1604.
 * 
 * Hash: 0x47AED84213A47510 | Since: 1493 | API-Set: unknown
 */
export function updateUnlockableDjRadioTracks(enableMixes: boolean): void {
    UpdateUnlockableDjRadioTracks(enableMixes);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF4DC1784BE94DFA | Since: 323 | API-Set: unknown
 */
export function useFootstepScriptSweeteners(ped: number | IPed, hash: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof hash === 'string') hash = GetHashKey(hash)
    UseFootstepScriptSweeteners(_ped, false, hash);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA932DE350266EF8 | Since: 323 | API-Set: unknown
 */
export function useSirenAsHorn(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    UseSirenAsHorn(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBEFB80290414FD4F | Since: 3095 | API-Set: unknown
 */
export function enableDragRaceStationaryWarningSounds(vehicle: number | IVehicle, enable: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xBEFB80290414FD4F', _vehicle, enable);
}

/**
 * Called together with SET_VEHICLE_TYRES_CAN_BURST
 * 
 * Hash: 0xEB7D0E1FCC8FE17A | Since: 3258 | API-Set: unknown
 */
export function forceVehicleEngineSynth(vehicle: number | IVehicle, force: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ForceVehicleEngineSynth(_vehicle, force);
}

