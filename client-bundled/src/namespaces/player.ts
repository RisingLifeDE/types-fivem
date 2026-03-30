import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 * 
 * Hash: 0xF2E3912B | Since: unknown | API-Set: client
 */
export function getInvincible2(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerInvincible2(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xD014AB79 | Since: unknown | API-Set: client
 */
export function getMaxStamina(playerId: number | string | IPlayer): number {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerMaxStamina(_playerId);
}

/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
 * 
 * Hash: 0x27E94EF8 | Since: unknown | API-Set: client
 */
export function getMeleeWeaponDefenseModifier(playerId: number | string | IPlayer): number {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerMeleeWeaponDefenseModifier(_playerId);
}

/**
 * No comment provided
 * 
 * Hash: 0xE415EC5C | Since: unknown | API-Set: client
 */
export function getStamina(playerId: number | string | IPlayer): number {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerStamina(_playerId);
}

/**
 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
 * 
 * Hash: 0x78F27B1F | Since: unknown | API-Set: client
 */
export function getVehicleDamageModifier(playerId: number | string | IPlayer): number {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerVehicleDamageModifier(_playerId);
}

/**
 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
 * 
 * Hash: 0x8326E7CD | Since: unknown | API-Set: client
 */
export function getVehicleDefenseModifier(playerId: number | string | IPlayer): number {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerVehicleDefenseModifier(_playerId);
}

/**
 * No comment provided
 * 
 * Hash: 0x35594F67 | Since: unknown | API-Set: client
 */
export function setMaxStamina(playerId: number | string | IPlayer, maxStamina: number): boolean {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return SetPlayerMaxStamina(_playerId, maxStamina);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9EC16C7 | Since: unknown | API-Set: client
 */
export function setStamina(playerId: number | string | IPlayer, stamina: number): boolean {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return SetPlayerStamina(_playerId, stamina);
}

/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 * 
 * Hash: 0x8689A825 | Since: unknown | API-Set: shared
 */
export function getMeleeWeaponDamageModifier(playerId: number | string | IPlayer): number {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerMeleeWeaponDamageModifier(_playerId);
}

/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 * 
 * Hash: 0x2A3D7CDA | Since: unknown | API-Set: shared
 */
export function getWeaponDamageModifier(playerId: number | string | IPlayer): number {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerWeaponDamageModifier(_playerId);
}

/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 * 
 * Hash: 0xF1543251 | Since: unknown | API-Set: shared
 */
export function getWeaponDefenseModifier(playerId: number | string | IPlayer): number {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerWeaponDefenseModifier(_playerId);
}

/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 * 
 * Hash: 0x986B65FF | Since: unknown | API-Set: shared
 */
export function getWeaponDefenseModifier2(playerId: number | string | IPlayer): number {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerWeaponDefenseModifier2(_playerId);
}

/**
 * Returns all player indices for 'active' physical players known to the client.
 * The data returned adheres to the following layout:
 * 
 * ```
 * [127, 42, 13, 37]
 * ```
 * 
 * Hash: 0xCF143FB9 | Since: unknown | API-Set: client
 */
export function getActives(): number[] {
    return GetActivePlayers();
}

/**
 * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.
 * 
 * If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.
 * 
 * It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
 * 
 * Hash: 0x344EA166 | Since: unknown | API-Set: client
 */
export function getFromServerId(serverId: number): number | string {
    return GetPlayerFromServerId(serverId);
}

/**
 * No comment provided
 * 
 * Hash: 0x4D97BCC7 | Since: unknown | API-Set: client
 */
export function getServerId(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerServerId(_player);
}

/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 * 
 * Hash: 0xFC02CAF6 | Since: unknown | API-Set: client
 */
export function setTalkingOverride(player: number | string | IPlayer, state: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerTalkingOverride(_player, state);
}

/**
 * On the server this will return the players source, on the client it will return the player handle.
 * 
 * Hash: 0xA56135E0 | Since: unknown | API-Set: shared
 */
export function getFromStateBagName(bagName: string): number {
    return GetPlayerFromStateBagName(bagName);
}

/**
 * No comment provided
 * 
 * Hash: 0x9097EB6D4BB9A12A | Since: 1868 | API-Set: unknown
 */
export function addTargetableEntity(player: number | string | IPlayer, entity: number | IEntity): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x9097EB6D4BB9A12A', _player, _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x2F41A3BAE005E5FA | Since: 372 | API-Set: unknown
 */
export function allowEvasionHudIfDisablingHiddenEvasionThisFrame(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x2F41A3BAE005E5FA', _player, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAFAF86043E5874E9 | Since: 323 | API-Set: unknown
 */
export function areFlashingStarsAboutToDrop(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return ArePlayerFlashingStarsAboutToDrop(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A6EB355EE14A2DB | Since: 323 | API-Set: unknown
 */
export function areStarsGreyedOut(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return ArePlayerStarsGreyedOut(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xAEBF081FFC0A0E5E | Since: 323 | API-Set: unknown
 */
export function assistedMovementCloseRoute(): void {
    AssistedMovementCloseRoute();
}

/**
 * No comment provided
 * 
 * Hash: 0x8621390F0CDCFE1F | Since: 323 | API-Set: unknown
 */
export function assistedMovementFlushRoute(): void {
    AssistedMovementFlushRoute();
}

/**
 * No comment provided
 * 
 * Hash: 0xF297383AA91DCA29 | Since: 323 | API-Set: unknown
 */
export function canPedHear(player: number | string | IPlayer, ped: number | IPed): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CanPedHearPlayer(_player, _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE7465A27D403C06 | Since: 323 | API-Set: unknown
 */
export function canStartMission(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return CanPlayerStartMission(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x048189FAC643DEEE | Since: 323 | API-Set: unknown
 */
export function changePed(player: number | string | IPlayer, ped: number | IPed, resetDamage: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ChangePlayerPed(_player, _ped, false, resetDamage);
}

/**
 * No comment provided
 * 
 * Hash: 0x4AACB96203D11A31 | Since: 323 | API-Set: unknown
 */
export function clearHasDamagedAtLeastOneNonAnimalPed(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerHasDamagedAtLeastOneNonAnimalPed(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xF0B67A4DE6AB5F98 | Since: 323 | API-Set: unknown
 */
export function clearHasDamagedAtLeastOnePed(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerHasDamagedAtLeastOnePed(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x8753997EB5F6EE3F | Since: 323 | API-Set: unknown
 */
export function clearParachuteModelOverride(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerParachuteModelOverride(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x10C54E4389C12B42 | Since: 323 | API-Set: unknown
 */
export function clearParachutePackModelOverride(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerParachutePackModelOverride(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x0F4CC924CF8C7B21 | Since: 323 | API-Set: unknown
 */
export function clearParachuteVariationOverride(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerParachuteVariationOverride(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x290D248E25815AE8 | Since: 2372 | API-Set: unknown
 */
export function clearReserveParachuteModelOverride(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerReserveParachuteModelOverride(_player);
}

/**
 * `This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);`
 * 
 * `PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.`
 * 
 * Hash: 0xB302540597885499 | Since: 323 | API-Set: unknown
 */
export function clearWantedLevel(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerWantedLevel(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x5501B7A5CDB79D37 | Since: 323 | API-Set: unknown
 */
export function disableCameraViewModeCycle(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x5501B7A5CDB79D37', _player);
}

/**
 * Inhibits the player from using any method of combat including melee and firearms.
 * 
 * NOTE: Only disables the firing for one frame
 * 
 * Hash: 0x5E6CC07646BBEAB8 | Since: 323 | API-Set: unknown
 */
export function disableFiring(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    DisablePlayerFiring(_player, toggle);
}

/**
 * Needs to be called every frame.
 * 
 * Hash: 0xBCB06442F7E52666 | Since: 2802 | API-Set: unknown
 */
export function disableHealthRecharge(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xBCB06442F7E52666', _player);
}

/**
 * Used only once in R* scripts (freemode.ysc).
 * 
 * Hash: 0xB885852C39CC265D | Since: 323 | API-Set: unknown
 */
export function disableThrowGrenadeWhileUsingGun(): void {
    Citizen.invokeNative('0xB885852C39CC265D');
}

/**
 * No comment provided
 * 
 * Hash: 0xC142BE3BB9CE125F | Since: 323 | API-Set: unknown
 */
export function disableVehicleRewards(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    DisablePlayerVehicleRewards(_player);
}

/**
 * Purpose of the BOOL currently unknown.
 * Both, true and false, work
 * 
 * Hash: 0x94DD7888C10A979E | Since: 323 | API-Set: unknown
 */
export function displaySystemSigninUi(): void {
    DisplaySystemSigninUi(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x181EC197DAEFE121 | Since: 323 | API-Set: unknown
 */
export function enableSpecialAbility(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    EnableSpecialAbility(_player, toggle, undefined);
}

/**
 * Appears only 3 times in the scripts, more specifically in michael1.ysc
 * 
 * -
 * This can be used to prevent dying if you are "out of the world"
 * 
 * Hash: 0x5006D96C995A5827 | Since: 323 | API-Set: unknown
 */
export function extendWorldBoundaryFor(pos: Vector3): void {
    ExtendWorldBoundaryForPlayer(pos.x, pos.y, pos.z);
}

/**
 * used with 1,2,8,64,128 in the scripts
 * 
 * Hash: 0xBC8983F38F78ED51 | Since: 323 | API-Set: unknown
 */
export function forceCleanup(cleanupFlags: number): void {
    ForceCleanup(cleanupFlags);
}

/**
 * `PLAYER::FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME("pb_prostitute", 1); // Found in decompilation`
 * 
 * Hash: 0x4C68DDDDF0097317 | Since: 323 | API-Set: unknown
 */
export function forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void {
    ForceCleanupForAllThreadsWithThisName(name, cleanupFlags);
}

/**
 * No comment provided
 * 
 * Hash: 0xF745B37630DF176B | Since: 323 | API-Set: unknown
 */
export function forceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void {
    ForceCleanupForThreadWithThisId(id, cleanupFlags);
}

/**
 * This has been found in use in the decompiled files.
 * 
 * Hash: 0xAD73CE5A09E42D12 | Since: 323 | API-Set: unknown
 */
export function forceStartHiddenEvasion(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xAD73CE5A09E42D12', _player);
}

/**
 * For Steam.
 * Always returns 0 in retail version of the game.
 * 
 * Hash: 0x1C186837D0619335 | Since: 323 | API-Set: unknown
 */
export function getAchievementProgress(achievementId: number): number {
    return GetAchievementProgress(achievementId);
}

/**
 * Returns true when the player is not able to control the cam i.e. when running a benchmark test, switching the player or viewing a cutscene.
 * 
 * Note: I am not 100% sure if the native actually checks if the cam control is disabled but it seems promising.
 * 
 * Hash: 0x7C814D2FB49F40C0 | Since: 323 | API-Set: unknown
 */
export function getAreCameraControlsDisabled(): boolean {
    return IsPlayerCamControlDisabled();
}

/**
 * No comment provided
 * 
 * Hash: 0x9A41CF4674A12272 | Since: 323 | API-Set: unknown
 */
export function getCauseOfMostRecentForceCleanup(): number {
    return GetCauseOfMostRecentForceCleanup();
}

/**
 * Returns TRUE if it found an entity in your crosshair within range of your weapon. Assigns the handle of the target to the *entity that you pass it.
 * Returns false if no entity found.
 * 
 * Hash: 0x2975C866E6713290 | Since: 323 | API-Set: unknown
 */
export function getEntityIsFreeAimingAt(player: number | string | IPlayer): [boolean, number] {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetEntityPlayerIsFreeAimingAt(_player);
}

/**
 * 2 occurrences in agency_heist3a. p1 was 0.7f then 0.4f.
 * 
 * Hash: 0xDD2620B7B9D16FF1 | Since: 323 | API-Set: unknown
 */
export function getIsMoppingAreaFreeInFrontOf(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xDD2620B7B9D16FF1', _player, 0);
}

/**
 * Appears once in "re_dealgonewrong"
 * 
 * Hash: 0x5FC472C501CCADB3 | Since: 323 | API-Set: unknown
 */
export function getIsDrivingOnHighway(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetIsPlayerDrivingOnHighway(_player);
}

/**
 * Only 1 occurrence. p1 was 2.
 * 
 * Hash: 0xF10B44FD479D69F3 | Since: 323 | API-Set: unknown
 */
export function getIsDrivingWreckless(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerDrivingDangerously(_player, 0);
}

/**
 * Returns profile setting 237.
 * 
 * Hash: 0xB9CF1F793A9F1BF1 | Since: 323 | API-Set: unknown
 */
export function getIsUsingFpsThirdPersonCover(): boolean {
    return Citizen.invokeNative('0xB9CF1F793A9F1BF1');
}

/**
 * Returns profile setting 243.
 * 
 * Hash: 0xCB645E85E97EA48B | Since: 372 | API-Set: unknown
 */
export function getIsUsingHoodCamera(): boolean {
    return Citizen.invokeNative('0xCB645E85E97EA48B');
}

/**
 * Gets the maximum wanted level the player can get.
 * Ranges from 0 to 5.
 * 
 * Hash: 0x462E0DB9B137DC5F | Since: 323 | API-Set: unknown
 */
export function getMaxWantedLevel(): number {
    return GetMaxWantedLevel();
}

/**
 * Gets the number of players in the current session.
 * If not multiplayer, always returns 1.
 * 
 * Hash: 0x407C7F91DDB46C16 | Since: 323 | API-Set: unknown
 */
export function getNumberOfs(): number {
    return GetNumberOfPlayers();
}

/**
 * No comment provided
 * 
 * Hash: 0x1FC200409F10E6F1 | Since: 1180 | API-Set: unknown
 */
export function getNumberOfsInTeam(team: number): number {
    return GetNumberOfPlayersInTeam(team);
}

/**
 * Alternative: GET_VEHICLE_PED_IS_IN(PLAYER_PED_ID(), 1);
 * 
 * Hash: 0xB6997A7EB3F5C8C0 | Since: 323 | API-Set: unknown
 */
export function getsLastVehicle(): number {
    return GetPlayersLastVehicle();
}

/**
 * No comment provided
 * 
 * Hash: 0x2F395D61F3A1F877 | Since: 323 | API-Set: unknown
 */
export function getCurrentStealthNoise(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerCurrentStealthNoise(_player);
}

/**
 * Always returns false.
 * 
 * Hash: 0xDCC07526B8EC45AF | Since: 1868 | API-Set: unknown
 */
export function getDebugInvincible(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xDCC07526B8EC45AF', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x56105E599CAB0EFA | Since: 323 | API-Set: unknown
 */
export function getFakeWantedLevel(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerFakeWantedLevel(_player);
}

/**
 * Returns the group ID the player is member of.
 * 
 * Hash: 0x0D127585F77030AF | Since: 323 | API-Set: unknown
 */
export function getGroup(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerGroup(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x5DDFE2FF727F3CA3 | Since: 323 | API-Set: unknown
 */
export function getHasReserveParachute(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerHasReserveParachute(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x8BC515BAE4AAF8FF | Since: 617 | API-Set: unknown
 */
export function getHealthRechargeMaxPercent(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerHealthRechargeLimit(_player);
}

/**
 * Returns the same as PLAYER_ID and NETWORK_PLAYER_ID_TO_INT
 * 
 * Hash: 0xA5EDC40EF369B48D | Since: 323 | API-Set: unknown
 */
export function getIndex(): number | string {
    return GetPlayerIndex();
}

/**
 * Returns the Player's Invincible status.
 * 
 * This function will always return false if 0x733A643B5B0C53C1 is used to set the invincibility status. To always get the correct result, use this:
 * 
 * bool IsPlayerInvincible(Player player)
 * {
 * auto addr = getScriptHandleBaseAddress(GET_PLAYER_PED(player));
 * 
 * if (addr)
 * {
 * DWORD flag = *(DWORD *)(addr + 0x188);
 * return ((flag & (1 << 8)) != 0) || ((flag & (1 << 9)) != 0);
 * }
 * 
 * return false;
 * }
 * 
 * 
 * 
 * Hash: 0xB721981B2B939E07 | Since: 323 | API-Set: unknown
 */
export function getInvincible(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerInvincible(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x92659B4CE1863CB3 | Since: 323 | API-Set: unknown
 */
export function getMaxArmour(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerMaxArmour(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x6D0DE6A7B5DA71F8 | Since: 323 | API-Set: unknown
 */
export function getName(player: number | string | IPlayer): string {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerName(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xC219887CA3E65C41 | Since: 2372 | API-Set: unknown
 */
export function getParachuteModelOverride(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerParachuteModelOverride(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E9C742F340CE5A2 | Since: 323 | API-Set: unknown
 */
export function getParachutePackTintIndex(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerParachutePackTintIndex(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xEF56DBABD3CD4887 | Since: 323 | API-Set: unknown
 */
export function getParachuteSmokeTrailColor(player: number | string | IPlayer): [number, number, number] {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerParachuteSmokeTrailColor(_player);
}

/**
 * Tints:
 * None = -1,
 * Rainbow = 0,
 * Red = 1,
 * SeasideStripes = 2,
 * WidowMaker = 3,
 * Patriot = 4,
 * Blue = 5,
 * Black = 6,
 * Hornet = 7,
 * AirFocce = 8,
 * Desert = 9,
 * Shadow = 10,
 * HighAltitude = 11,
 * Airbone = 12,
 * Sunrise = 13,
 * 
 * Hash: 0x75D3F7A1B0D9B145 | Since: 323 | API-Set: unknown
 */
export function getParachuteTintIndex(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerParachuteTintIndex(_player);
}

/**
 * Gets the ped for a specified player index.
 * 
 * Hash: 0x43A66C31C68491C0 | Since: 323 | API-Set: unknown
 */
export function getPed(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerPed(_player);
}

/**
 * `Does the same like PLAYER::GET_PLAYER_PED`
 * 
 * Hash: 0x50FAC3A3E030A6E1 | Since: 323 | API-Set: unknown
 */
export function getPedScriptIndex(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerPedScriptIndex(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xBC0753C9CA14B506 | Since: 323 | API-Set: unknown
 */
export function getReceivedBattleEventRecently(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return HasPlayerBeenShotByCop(_player, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x37FAAA68DCA9D08D | Since: 2372 | API-Set: unknown
 */
export function getReserveParachuteModelOverride(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerReserveParachuteModelOverride(_player);
}

/**
 * Tints:
 * None = -1,
 * Rainbow = 0,
 * Red = 1,
 * SeasideStripes = 2,
 * WidowMaker = 3,
 * Patriot = 4,
 * Blue = 5,
 * Black = 6,
 * Hornet = 7,
 * AirFocce = 8,
 * Desert = 9,
 * Shadow = 10,
 * HighAltitude = 11,
 * Airbone = 12,
 * Sunrise = 13,
 * 
 * Hash: 0xD5A016BC3C09CF40 | Since: 323 | API-Set: unknown
 */
export function getReserveParachuteTintIndex(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerReserveParachuteTintIndex(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xE902EF951DCE178F | Since: 323 | API-Set: unknown
 */
export function getRgbColour(player: number | string | IPlayer): [number, number, number] {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerRgbColour(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F9F16F8E65A7ED7 | Since: 323 | API-Set: unknown
 */
export function getSprintStaminaRemaining(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerSprintStaminaRemaining(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x1885BC9B108B4C99 | Since: 323 | API-Set: unknown
 */
export function getSprintTimeRemaining(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerSprintTimeRemaining(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x875BDD898B99C8CE | Since: 3570 | API-Set: unknown
 */
export function getTargetingMode(): number {
    return Citizen.invokeNative('0x875BDD898B99C8CE');
}

/**
 * Assigns the handle of locked-on melee target to *entity that you pass it.
 * Returns false if no entity found.
 * 
 * Hash: 0x13EDE1A5DBF797C9 | Since: 323 | API-Set: unknown
 */
export function getTargetEntity(player: number | string | IPlayer): [boolean, number] {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerTargetEntity(_player);
}

/**
 * Gets the player's team.
 * Does nothing in singleplayer.
 * 
 * Hash: 0x37039302F4E0A008 | Since: 323 | API-Set: unknown
 */
export function getTeam(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerTeam(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xA1FCF8E6AF40B731 | Since: 323 | API-Set: unknown
 */
export function getUnderwaterTimeRemaining(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerUnderwaterTimeRemaining(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C92BA89F1AF26F8 | Since: 323 | API-Set: unknown
 */
export function getWantedCentrePosition(player: number | string | IPlayer): Vector3 {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return new Vector3(GetPlayerWantedCentrePosition(_player));
}

/**
 * No comment provided
 * 
 * Hash: 0xE28E54788CE8F12D | Since: 323 | API-Set: unknown
 */
export function getWantedLevel(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerWantedLevel(_player);
}

/**
 * Returns the time since the character was arrested in (ms) milliseconds.
 * 
 * example
 * 
 * var time = Function.call<int>(Hash.GET_TIME_SINCE_LAST_ARREST();
 * 
 * UI.DrawSubtitle(time.ToString());
 * 
 * if player has not been arrested, the int returned will be -1.
 * 
 * Hash: 0x5063F92F07C2A316 | Since: 323 | API-Set: unknown
 */
export function getTimeSinceLastArrest(): number {
    return GetTimeSinceLastArrest();
}

/**
 * Returns the time since the character died in (ms) milliseconds.
 * 
 * example
 * 
 * var time = Function.call<int>(Hash.GET_TIME_SINCE_LAST_DEATH();
 * 
 * UI.DrawSubtitle(time.ToString());
 * 
 * if player has not died, the int returned will be -1.
 * 
 * Hash: 0xC7034807558DDFCA | Since: 323 | API-Set: unknown
 */
export function getTimeSinceLastDeath(): number {
    return GetTimeSinceLastDeath();
}

/**
 * No comment provided
 * 
 * Hash: 0xDB89591E290D9182 | Since: 323 | API-Set: unknown
 */
export function getTimeSinceDroveAgainstTraffic(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetTimeSincePlayerDroveAgainstTraffic(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xD559D2BE9E37853B | Since: 323 | API-Set: unknown
 */
export function getTimeSinceDroveOnPavement(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetTimeSincePlayerDroveOnPavement(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xE36A25322DC35F42 | Since: 323 | API-Set: unknown
 */
export function getTimeSinceHitPed(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetTimeSincePlayerHitPed(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x5D35ECF3A81A0EE0 | Since: 323 | API-Set: unknown
 */
export function getTimeSinceHitVehicle(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetTimeSincePlayerHitVehicle(_player);
}

/**
 * Remnant from GTA IV. Does nothing in GTA V.
 * 
 * Hash: 0x085DEB493BE80812 | Since: 323 | API-Set: unknown
 */
export function getWantedLevelRadius(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetWantedLevelRadius(_player);
}

/**
 * Drft
 * 
 * Hash: 0xFDD179EAF45B556C | Since: 323 | API-Set: unknown
 */
export function getWantedLevelThreshold(wantedLevel: number): number {
    return GetWantedLevelThreshold(wantedLevel);
}

/**
 * No comment provided
 * 
 * Hash: 0xA72200F51875FEA4 | Since: 2372 | API-Set: unknown
 */
export function getWantedLevelTimeToEscape(): number {
    return GetWantedLevelParoleDuration();
}

/**
 * 1 - Welcome to Los Santos
 * 2 - A Friendship Resurrected
 * 3 - A Fair Day's Pay
 * 4 - The Moment of Truth
 * 5 - To Live or Die in Los Santos
 * 6 - Diamond Hard
 * 7 - Subversive
 * 8 - Blitzed
 * 9 - Small Town, Big Job
 * 10 - The Government Gimps
 * 11 - The Big One!
 * 12 - Solid Gold, Baby!
 * 13 - Career Criminal
 * 14 - San Andreas Sightseer
 * 15 - All's Fare in Love and War
 * 16 - TP Industries Arms Race
 * 17 - Multi-Disciplined
 * 18 - From Beyond the Stars
 * 19 - A Mystery, Solved
 * 20 - Waste Management
 * 21 - Red Mist
 * 22 - Show Off
 * 23 - Kifflom!
 * 24 - Three Man Army
 * 25 - Out of Your Depth
 * 26 - Altruist Acolyte
 * 27 - A Lot of Cheddar
 * 28 - Trading Pure Alpha
 * 29 - Pimp My Sidearm
 * 30 - Wanted: Alive Or Alive
 * 31 - Los Santos Customs
 * 32 - Close Shave
 * 33 - Off the Plane
 * 34 - Three-Bit Gangster
 * 35 - Making Moves
 * 36 - Above the Law
 * 37 - Numero Uno
 * 38 - The Midnight Club
 * 39 - Unnatural Selection
 * 40 - Backseat Driver
 * 41 - Run Like The Wind
 * 42 - Clean Sweep
 * 43 - Decorated
 * 44 - Stick Up Kid
 * 45 - Enjoy Your Stay
 * 46 - Crew Cut
 * 47 - Full Refund
 * 48 - Dialling Digits
 * 49 - American Dream
 * 50 - A New Perspective
 * 51 - Be Prepared
 * 52 - In the Name of Science
 * 53 - Dead Presidents
 * 54 - Parole Day
 * 55 - Shot Caller
 * 56 - Four Way
 * 57 - Live a Little
 * 58 - Can't Touch This
 * 59 - Mastermind
 * 60 - Vinewood Visionary
 * 61 - Majestic
 * 62 - Humans of Los Santos
 * 63 - First Time Director
 * 64 - Animal Lover
 * 65 - Ensemble Piece
 * 66 - Cult Movie
 * 67 - Location Scout
 * 68 - Method Actor
 * 69 - Cryptozoologist
 * 70 - Getting Started
 * 71 - The Data Breaches
 * 72 - The Bogdan Problem
 * 73 - The Doomsday Scenario
 * 74 - A World Worth Saving
 * 75 - Orbital Obliteration
 * 76 - Elitist
 * 77 - Masterminds
 * 
 * Hash: 0xBEC7076D64130195 | Since: 323 | API-Set: unknown
 */
export function giveAchievementTo(achievementId: number): boolean {
    return GiveAchievementToPlayer(achievementId);
}

/**
 * No comment provided
 * 
 * Hash: 0x3C49C870E66F0A28 | Since: 323 | API-Set: unknown
 */
export function giveRagdollControl(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    GivePlayerRagdollControl(_player, toggle);
}

/**
 * See GIVE_ACHIEVEMENT_TO_PLAYER
 * 
 * Hash: 0x867365E111A3B6EB | Since: 323 | API-Set: unknown
 */
export function hasAchievementBeenPassed(achievementId: number): boolean {
    return HasAchievementBeenPassed(achievementId);
}

/**
 * No comment provided
 * 
 * Hash: 0xC968670BFACE42D9 | Since: 323 | API-Set: unknown
 */
export function hasForceCleanupOccurred(cleanupFlags: number): boolean {
    return HasForceCleanupOccurred(cleanupFlags);
}

/**
 * No comment provided
 * 
 * Hash: 0xD705740BB0A1CF4C | Since: 323 | API-Set: unknown
 */
export function hasBeenSpottedInStolenVehicle(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return HasPlayerBeenSpottedInStolenVehicle(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xE4B90F367BD81752 | Since: 323 | API-Set: unknown
 */
export function hasDamagedAtLeastOneNonAnimalPed(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return HasPlayerDamagedAtLeastOneNonAnimalPed(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x20CE80B0C2BF4ACC | Since: 323 | API-Set: unknown
 */
export function hasDamagedAtLeastOnePed(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return HasPlayerDamagedAtLeastOnePed(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xD55DDFB47991A294 | Since: 323 | API-Set: unknown
 */
export function hasLeftTheWorld(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return HasPlayerLeftTheWorld(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x9EDD76E87D5D51BA | Since: 323 | API-Set: unknown
 */
export function increaseJumpSuppressionRange(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x9EDD76E87D5D51BA', _player);
}

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * --------------------------------------------------------
 * `if (NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE(PLAYER::INT_TO_PARTICIPANTINDEX(i)))`
 * 
 * 
 * Hash: 0x9EC6603812C24710 | Since: 323 | API-Set: unknown
 */
export function intToParticipantindex(value: number): number {
    return IntToParticipantindex(value);
}

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * Hash: 0x41BD2A6B006AF756 | Since: 323 | API-Set: unknown
 */
export function intToindex(value: number): number | string {
    return IntToPlayerindex(value);
}

/**
 * Returns true if an unk value is greater than 0.0f
 * 
 * Hash: 0x38D28DA81E4E9BF9 | Since: 323 | API-Set: unknown
 */
export function isBattleAware(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerBattleAware(_player);
}

/**
 * Return true while player is being arrested / busted.
 * 
 * If atArresting is set to 1, this function will return 1 when player is being arrested (while player is putting his hand up, but still have control)
 * 
 * If atArresting is set to 0, this function will return 1 only when the busted screen is shown.
 * 
 * Hash: 0x388A47C51ABDAC8E | Since: 323 | API-Set: unknown
 */
export function isBeingArrested(player: number | string | IPlayer, atArresting: boolean): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerBeingArrested(_player, atArresting);
}

/**
 * No comment provided
 * 
 * Hash: 0x65FAEE425DE637B0 | Since: 323 | API-Set: unknown
 */
export function isBluetoothEnable(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerBluetoothEnable(_player);
}

/**
 * Returns TRUE if the player ('s ped) is climbing at the moment.
 * 
 * Hash: 0x95E8F73DC65EFB9C | Since: 323 | API-Set: unknown
 */
export function isClimbing(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerClimbing(_player);
}

/**
 * Can the player control himself, used to disable controls for player for things like a cutscene.
 * 
 * ---
 * 
 * You can't disable controls with this, use SET_PLAYER_CONTROL(...) for this.
 * 
 * Hash: 0x49C32D60007AFA47 | Since: 323 | API-Set: unknown
 */
export function isControlOn(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerControlOn(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x424D4687FA1E5652 | Since: 323 | API-Set: unknown
 */
export function isDead(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerDead(_player);
}

/**
 * Gets a value indicating whether the specified player is currently aiming freely.
 * 
 * Hash: 0x2E397FD2ECD37C87 | Since: 323 | API-Set: unknown
 */
export function isFreeAiming(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerFreeAiming(_player);
}

/**
 * Gets a value indicating whether the specified player is currently aiming freely at the specified entity.
 * 
 * Hash: 0x3C06B5C839B38F7B | Since: 323 | API-Set: unknown
 */
export function isFreeAimingAtEntity(player: number | string | IPlayer, entity: number | IEntity): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsPlayerFreeAimingAtEntity(_player, _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xDCCFD3F106C36AB4 | Since: 323 | API-Set: unknown
 */
export function isFreeForAmbientTask(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerFreeForAmbientTask(_player);
}

/**
 * this function is hard-coded to always return 0.
 * 
 * Hash: 0x74556E1420867ECA | Since: 323 | API-Set: unknown
 */
export function isLoggingInNp(): boolean {
    return IsPlayerLoggingInNp();
}

/**
 * Returns TRUE if the game is in online mode and FALSE if in offline mode.
 * 
 * This is an alias for NETWORK_IS_SIGNED_ONLINE.
 * 
 * Hash: 0xF25D331DC2627BBC | Since: 323 | API-Set: unknown
 */
export function isOnline(): boolean {
    return IsPlayerOnline();
}

/**
 * Checks whether the specified player has a Ped, the Ped is not dead, is not injured and is not arrested.
 * 
 * Hash: 0x5E9564D8246B909A | Since: 323 | API-Set: unknown
 */
export function isPlaying(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerPlaying(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA1E2BF8B10598F9 | Since: 323 | API-Set: unknown
 */
export function isPressingHorn(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerPressingHorn(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x908CBECC2CAA3690 | Since: 323 | API-Set: unknown
 */
export function isReadyForCutscene(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerReadyForCutscene(_player);
}

/**
 * Returns true if the player is riding a train.
 * 
 * Hash: 0x4EC12697209F2196 | Since: 323 | API-Set: unknown
 */
export function isRidingTrain(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerRidingTrain(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A876A65283DD7D7 | Since: 323 | API-Set: unknown
 */
export function isScriptControlOn(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerScriptControlOn(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x78CFE51896B6B8A4 | Since: 323 | API-Set: unknown
 */
export function isTargettingAnything(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerTargettingAnything(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x7912F7FC4F6264B6 | Since: 323 | API-Set: unknown
 */
export function isTargettingEntity(player: number | string | IPlayer, entity: number | IEntity): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsPlayerTargettingEntity(_player, _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x02B15662D7F8886F | Since: 323 | API-Set: unknown
 */
export function isTeleportActive(): boolean {
    return IsPlayerTeleportActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x6E4361FF3E8CD7CA | Since: 1011 | API-Set: unknown
 */
export function isVehicleWeaponToggledToNonHoming(): boolean {
    return Citizen.invokeNative('0x6E4361FF3E8CD7CA', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x238DB2A2C23EE9EF | Since: 323 | API-Set: unknown
 */
export function isWantedLevelGreater(player: number | string | IPlayer, wantedLevel: number): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerWantedLevelGreater(_player, wantedLevel);
}

/**
 * No comment provided
 * 
 * Hash: 0x690A61A6D13583F6 | Since: 323 | API-Set: unknown
 */
export function isRemoteInNonClonedVehicle(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x690A61A6D13583F6', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E5F7FC85D854E15 | Since: 323 | API-Set: unknown
 */
export function isSpecialAbilityActive(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsSpecialAbilityActive(_player, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB1D200FE26AEF3CB | Since: 323 | API-Set: unknown
 */
export function isSpecialAbilityEnabled(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsSpecialAbilityEnabled(_player, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x05A1FE504B7F2587 | Since: 323 | API-Set: unknown
 */
export function isSpecialAbilityMeterFull(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsSpecialAbilityMeterFull(_player, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC6017F6A6CDFA694 | Since: 323 | API-Set: unknown
 */
export function isSpecialAbilityUnlocked(playerModel: number | string): boolean {
    if (typeof playerModel === 'string') playerModel = GetHashKey(playerModel)
    return IsSpecialAbilityUnlocked(playerModel);
}

/**
 * No comment provided
 * 
 * Hash: 0x5D511E3867C87139 | Since: 323 | API-Set: unknown
 */
export function isSystemUiBeingDisplayed(): boolean {
    return IsSystemUiBeingDisplayed();
}

/**
 * No comment provided
 * 
 * Hash: 0x7E07C78925D5FD96 | Since: 372 | API-Set: unknown
 */
export function isWantedAndHasBeenSeenByCops(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x7E07C78925D5FD96', _player);
}

/**
 * Does exactly the same thing as PLAYER_ID()
 * 
 * Hash: 0xEE68096F9F37341E | Since: 323 | API-Set: unknown
 */
export function networkIdToInt(): number {
    return NetworkPlayerIdToInt();
}

/**
 * Only 1 match. ob_sofa_michael.
 * 
 * `PLAYER::PLAYER_ATTACH_VIRTUAL_BOUND(-804.5928f, 173.1801f, 71.68436f, 0f, 0f, 0.590625f, 1f, 0.7f);1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;`
 * 
 * Hash: 0xED51733DC73AED51 | Since: 323 | API-Set: unknown
 */
export function attachVirtualBound(): void {
    PlayerAttachVirtualBound(0, 0, 0, 0, 0, 0, 0, 0);
}

/**
 * 1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;
 * 
 * Hash: 0x1DD5897E2FA6E7C9 | Since: 323 | API-Set: unknown
 */
export function detachVirtualBound(): void {
    PlayerDetachVirtualBound();
}

/**
 * This returns YOUR 'identity' as a Player type.
 * 
 * Always returns 0 in story mode.
 * 
 * Hash: 0x4F8644AF03D0E0D6 | Since: 323 | API-Set: unknown
 */
export function id(): number | string {
    return PlayerId();
}

/**
 * Returns current player ped
 * 
 * Hash: 0xD80958FC74E988A6 | Since: 323 | API-Set: unknown
 */
export function pedId(): number {
    return PlayerPedId();
}

/**
 * No comment provided
 * 
 * Hash: 0xF3AC26D3CC576528 | Since: 323 | API-Set: unknown
 */
export function removeHelmet(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    RemovePlayerHelmet(_player, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F260BFB59ADBCA3 | Since: 1868 | API-Set: unknown
 */
export function removeTargetableEntity(player: number | string | IPlayer, entity: number | IEntity): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x9F260BFB59ADBCA3', _player, _entity);
}

/**
 * Resets values set by SET_SCRIPT_FIRE_POSITION
 * 
 * Hash: 0x7148E0F43D11F0D9 | Since: 1604 | API-Set: unknown
 */
export function removeScriptFirePosition(): void {
    Citizen.invokeNative('0x7148E0F43D11F0D9');
}

/**
 * `PLAYER::REPORT_CRIME(PLAYER::PLAYER_ID(), 37, PLAYER::GET_WANTED_LEVEL_THRESHOLD(1));`
 * 
 * From am_armybase.ysc.c4:
 * 
 * `PLAYER::REPORT_CRIME(PLAYER::PLAYER_ID(4), 36, PLAYER::GET_WANTED_LEVEL_THRESHOLD(4));`
 * 
 * -----
 * 
 * This was taken from the GTAV.exe v1.334. The function is called sub_140592CE8. For a full decompilation of the function, see here: https://pastebin.com/09qSMsN7
 * 
 * -----
 * crimeType:
 * 1: Firearms possession
 * 2: Person running a red light ("5-0-5")
 * 3: Reckless driver
 * 4: Speeding vehicle (a "5-10")
 * 5: Traffic violation (a "5-0-5")
 * 6: Motorcycle rider without a helmet
 * 7: Vehicle theft (a "5-0-3")
 * 8: Grand Theft Auto
 * 9: ???
 * 10: ???
 * 11: Assault on a civilian (a "2-40")
 * 12: Assault on an officer
 * 13: Assault with a deadly weapon (a "2-45")
 * 14: Officer shot (a "2-45")
 * 15: Pedestrian struck by a vehicle
 * 16: Officer struck by a vehicle
 * 17: Helicopter down (an "AC"?)
 * 18: Civilian on fire (a "2-40")
 * 19: Officer set on fire (a "10-99")
 * 20: Car on fire
 * 21: Air unit down (an "AC"?)
 * 22: An explosion (a "9-96")
 * 23: A stabbing (a "2-45") (also something else I couldn't understand)
 * 24: Officer stabbed (also something else I couldn't understand)
 * 25: Attack on a vehicle ("MDV"?)
 * 26: Damage to property
 * 27: Suspect threatening officer with a firearm
 * 28: Shots fired
 * 29: ???
 * 30: ???
 * 31: ???
 * 32: ???
 * 33: ???
 * 34: A "2-45"
 * 35: ???
 * 36: A "9-25"
 * 37: ???
 * 38: ???
 * 39: ???
 * 40: ???
 * 41: ???
 * 42: ???
 * 43: Possible disturbance
 * 44: Civilian in need of assistance
 * 45: ???
 * 46: ???
 * 
 * Hash: 0xE9B09589827545E7 | Since: 323 | API-Set: unknown
 */
export function reportCrime(player: number | string | IPlayer, crimeType: number, wantedLvlThresh: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ReportCrime(_player, crimeType, wantedLvlThresh);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC64D2C53493ED12 | Since: 323 | API-Set: unknown
 */
export function reportPoliceSpotted(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ReportPoliceSpottedPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x0032A6DBA562C518 | Since: 323 | API-Set: unknown
 */
export function resetLawResponseDelayOverride(): void {
    Citizen.invokeNative('0x0032A6DBA562C518');
}

/**
 * No comment provided
 * 
 * Hash: 0x2D03E13C460760D6 | Since: 323 | API-Set: unknown
 */
export function resetArrestState(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ResetPlayerArrestState(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x19531C47A2ABD691 | Since: 323 | API-Set: unknown
 */
export function resetInputGait(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ResetPlayerInputGait(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6F312FCCE9C1DFE | Since: 323 | API-Set: unknown
 */
export function resetStamina(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ResetPlayerStamina(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xB9D0DD990DC141DD | Since: 323 | API-Set: unknown
 */
export function resetWantedLevelDifficulty(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ResetWantedLevelDifficulty(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x823EC8E82BA45986 | Since: 2060 | API-Set: unknown
 */
export function resetWantedLevelHiddenEscapeTime(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x823EC8E82BA45986', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA1DF03D5A315F4E | Since: 323 | API-Set: unknown
 */
export function resetWorldBoundaryFor(): void {
    ResetWorldBoundaryForPlayer();
}

/**
 * No comment provided
 * 
 * Hash: 0xA352C1B864CAFD33 | Since: 323 | API-Set: unknown
 */
export function restoreStamina(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    RestorePlayerStamina(_player, 0);
}

/**
 * For Steam.
 * Does nothing and always returns false in the retail version of the game.
 * 
 * Hash: 0xC2AFFFDABBDC2C5C | Since: 323 | API-Set: unknown
 */
export function setAchievementProgress(achievementId: number, progress: number): boolean {
    return SetAchievementProgress(achievementId, progress);
}

/**
 * This can be between 1.0f - 14.9f
 * 
 * You can change the max in IDA from 15.0. I say 15.0 as the function blrs if what you input is greater than or equal to 15.0 hence why it's 14.9 max default.
 * 
 * 
 * 
 * Hash: 0xCA7DC8329F0A1E9E | Since: 323 | API-Set: unknown
 */
export function setAirDragMultiplierForsVehicle(player: number | string | IPlayer, multiplier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetAirDragMultiplierForPlayersVehicle(_player, multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE45D1A1EF45EE61 | Since: 323 | API-Set: unknown
 */
export function setAllNeutralRandomPedsFlee(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xDE45D1A1EF45EE61', _player, toggle);
}

/**
 * - This is called after SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME
 * 
 * 
 * Hash: 0xC3376F42B1FACCC6 | Since: 323 | API-Set: unknown
 */
export function setAllNeutralRandomPedsFleeThisFrame(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xC3376F42B1FACCC6', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x056E0FE8534C2949 | Since: 323 | API-Set: unknown
 */
export function setAllRandomPedsFlee(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetAllRandomPedsFlee(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x471D2FF42A94B4F2 | Since: 323 | API-Set: unknown
 */
export function setAllRandomPedsFleeThisFrame(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetAllRandomPedsFleeThisFrame(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x2382AB11450AE7BA | Since: 877 | API-Set: unknown
 */
export function setApplyWaypointOf(player: number | string | IPlayer, hudColor: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x2382AB11450AE7BA', _player, hudColor);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F343285A00B4BB6 | Since: 323 | API-Set: unknown
 */
export function setAutoGiveParachuteWhenEnterPlane(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetAutoGiveParachuteWhenEnterPlane(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xD2B315B6689D537D | Since: 323 | API-Set: unknown
 */
export function setAutoGiveScubaGearWhenExitVehicle(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetAutoGiveScubaGearWhenExitVehicle(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2E8AABFA40A84F8C | Since: 323 | API-Set: unknown
 */
export function setDisableAmbientMeleeMove(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDisableAmbientMeleeMove(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xDB172424876553F4 | Since: 323 | API-Set: unknown
 */
export function setDispatchCopsFor(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDispatchCopsForPlayer(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8EEDA153AD141BA4 | Since: 323 | API-Set: unknown
 */
export function setEveryoneIgnore(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetEveryoneIgnorePlayer(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x596976B02B6B5700 | Since: 323 | API-Set: unknown
 */
export function setIgnoreLowPriorityShockingEvents(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetIgnoreLowPriorityShockingEvents(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFAC75988A7D078D3 | Since: 463 | API-Set: unknown
 */
export function setLawPedsCanAttackNonWantedThisFrame(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xFAC75988A7D078D3', _player);
}

/**
 * `PLAYER::SET_LAW_RESPONSE_DELAY_OVERRIDE(rPtr((&l_122) + 71)); // Found in decompilation`
 * 
 * <strong></strong>
 * 
 * In "am_hold_up.ysc" used once:
 * 
 * `l_8d._f47 = MISC::GET_RANDOM_FLOAT_IN_RANGE(18.0, 28.0);`
 * `PLAYER::SET_LAW_RESPONSE_DELAY_OVERRIDE((l_8d._f47));`
 * 
 * Hash: 0xB45EFF719D8427A6 | Since: 323 | API-Set: unknown
 */
export function setLawResponseDelayOverride(): void {
    Citizen.invokeNative('0xB45EFF719D8427A6', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA5F02DB48D704B9 | Since: 323 | API-Set: unknown
 */
export function setMaxWantedLevel(maxWantedLevel: number): void {
    SetMaxWantedLevel(maxWantedLevel);
}

/**
 * No comment provided
 * 
 * Hash: 0x5DC40A8869C22141 | Since: 323 | API-Set: unknown
 */
export function setBluetoothState(player: number | string | IPlayer, state: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerBluetoothState(_player, state);
}

/**
 * Sets whether this player can be hassled by gangs.
 * 
 * Hash: 0xD5E460AD7020A246 | Since: 323 | API-Set: unknown
 */
export function setCanBeHassledByGangs(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerCanBeHassledByGangs(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCAC57395B151135F | Since: 323 | API-Set: unknown
 */
export function setCanCollectDroppedMoney(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xCAC57395B151135F', _player, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x55FCC0C390620314 | Since: 573 | API-Set: unknown
 */
export function setCanDamagePlayer(player1: number | string | IPlayer, player2: number | string | IPlayer, toggle: boolean): void {
    const _player1 = player1 instanceof IPlayer ? player1.playerId() : player1;
    const _player2 = player2 instanceof IPlayer ? player2.playerId() : player2;
    Citizen.invokeNative('0x55FCC0C390620314', _player1, _player2, toggle);
}

/**
 * Set whether this player should be able to do drive-bys.
 * 
 * "A drive-by is when a ped is aiming/shooting from vehicle. This includes middle finger taunts. By setting this value to false I confirm the player is unable to do all that. Tested on tick."
 * 
 * 
 * Hash: 0x6E8834B52EC20C77 | Since: 323 | API-Set: unknown
 */
export function setCanDoDriveBy(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerCanDoDriveBy(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF401B182DBA8AF53 | Since: 323 | API-Set: unknown
 */
export function setCanLeaveParachuteSmokeTrail(player: number | string | IPlayer, enabled: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerCanLeaveParachuteSmokeTrail(_player, enabled);
}

/**
 * Sets whether this player can take cover.
 * 
 * Hash: 0xD465A8599DFF6814 | Since: 323 | API-Set: unknown
 */
export function setCanUseCover(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerCanUseCover(_player, toggle);
}

/**
 * 6 matches across 4 scripts. 5 occurrences were 240. The other was 255.
 * 
 * Hash: 0x14D913B777DFF5DA | Since: 323 | API-Set: unknown
 */
export function setClothLockCounter(value: number): void {
    SetPlayerClothLockCounter(value);
}

/**
 * Every occurrence was either 0 or 2.
 * 
 * Hash: 0x9F7BBA2EA6372500 | Since: 323 | API-Set: unknown
 */
export function setClothPackageIndex(index: number): void {
    SetPlayerClothPackageIndex(index);
}

/**
 * No comment provided
 * 
 * Hash: 0x749FADDF97DFE930 | Since: 323 | API-Set: unknown
 */
export function setClothPinFrames(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerClothPinFrames(_player, 0);
}

/**
 * Flags:
 * SPC_AMBIENT_SCRIPT = (1 << 1),
 * SPC_CLEAR_TASKS = (1 << 2),
 * SPC_REMOVE_FIRES = (1 << 3),
 * SPC_REMOVE_EXPLOSIONS = (1 << 4),
 * SPC_REMOVE_PROJECTILES = (1 << 5),
 * SPC_DEACTIVATE_GADGETS = (1 << 6),
 * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
 * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
 * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
 * SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
 * SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
 * SPC_ALLOW_PAD_SHAKE = (1 << 12)
 * 
 * See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
 * 
 * Hash: 0x8D32347D6D4C40A2 | Since: 323 | API-Set: unknown
 */
export function setControl(player: number | string | IPlayer, bHasControl: boolean, flags: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerControl(_player, bHasControl, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0xD821056B9ACF8052 | Since: 1011 | API-Set: unknown
 */
export function setExplosiveDamageModifier(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xD821056B9ACF8052', _player, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEFD79FA81DFBA9CB | Since: 573 | API-Set: unknown
 */
export function setFallDistanceToTriggerRagdollOverride(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerFallDistance(_player, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x0FEE4F80AC44A726 | Since: 323 | API-Set: unknown
 */
export function setForcedAim(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerForcedAim(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x75E7D505F2B15902 | Since: 323 | API-Set: unknown
 */
export function setForcedZoom(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerForcedZoom(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7651BC64AE59E128 | Since: 323 | API-Set: unknown
 */
export function setForceSkipAimIntro(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerForceSkipAimIntro(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7DDAB28D31FAC363 | Since: 323 | API-Set: unknown
 */
export function setHasReserveParachute(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerHasReserveParachute(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xC388A0F065F5BC34 | Since: 573 | API-Set: unknown
 */
export function setHealthRechargeMaxPercent(player: number | string | IPlayer, limit: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerHealthRechargeLimit(_player, limit);
}

/**
 * `regenRate`: The recharge multiplier, a value between 0.0 and 1.0.
 * Use 1.0 to reset it back to normal
 * 
 * Hash: 0x5DB660B38DD98A31 | Since: 323 | API-Set: unknown
 */
export function setHealthRechargeMultiplier(player: number | string | IPlayer, regenRate: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerHealthRechargeMultiplier(_player, regenRate);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE4EBDD2593BA844 | Since: 1180 | API-Set: unknown
 */
export function setHomingDisabledForAllVehicleWeapons(): void {
    SetPlayerHomingRocketDisabled(undefined, undefined);
}

/**
 * Simply sets you as invincible (Health will not deplete).
 * 
 * Use 0x733A643B5B0C53C1 instead if you want Ragdoll enabled, which is equal to:
 * *(DWORD *)(playerPedAddress + 0x188) |= (1 << 9);
 * 
 * Hash: 0x239528EACDC3E7DE | Since: 323 | API-Set: unknown
 */
export function setInvincible(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerInvincible(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6BC97F4F4BB3C04B | Since: 463 | API-Set: unknown
 */
export function setInvincibleButHasReactions(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerInvincibleKeepRagdollEnabled(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF300C7649724A0B | Since: 323 | API-Set: unknown
 */
export function setLeavePedBehind(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerLeavePedBehind(_player, toggle);
}

/**
 * Example from fm_mission_controler.ysc.c4:
 * 
 * `PLAYER::SET_PLAYER_LOCKON(PLAYER::PLAYER_ID(), 1);`
 * 
 * All other decompiled scripts using this seem to be using the player id as the first parameter, so I feel the need to confirm it as so.
 * 
 * No need to confirm it says PLAYER_ID() so it uses PLAYER_ID() lol.
 * 
 * Hash: 0x5C8B2F450EE4328E | Since: 323 | API-Set: unknown
 */
export function setLockon(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerLockon(_player, toggle);
}

/**
 * Affects the range of auto aim target.
 * 
 * Hash: 0x29961D490E5814FD | Since: 323 | API-Set: unknown
 */
export function setLockonRangeOverride(player: number | string | IPlayer, range: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerLockonRangeOverride(_player, range);
}

/**
 * `Default is 100. Use player id and not ped id. For instance: PLAYER::SET_PLAYER_MAX_ARMOUR(PLAYER::PLAYER_ID(), 100); // main_persistent.ct4`
 * 
 * Hash: 0x77DFCCF5948B8C71 | Since: 323 | API-Set: unknown
 */
export function setMaxArmour(player: number | string | IPlayer, value: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerMaxArmour(_player, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D768602ADEF2245 | Since: 463 | API-Set: unknown
 */
export function setMaxExplosiveDamage(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x8D768602ADEF2245', _player, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x1DE37BBF9E9CC14A | Since: 323 | API-Set: unknown
 */
export function setMayNotEnterAnyVehicle(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerMayNotEnterAnyVehicle(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x8026FF78F208978A | Since: 323 | API-Set: unknown
 */
export function setMayOnlyEnterThisVehicle(player: number | string | IPlayer, vehicle: number | IVehicle): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
    SetPlayerMayOnlyEnterThisVehicle(_player, _vehicle);
}

/**
 * modifier's min value is 0.1
 * 
 * Hash: 0x4A3DC7ECCC321032 | Since: 323 | API-Set: unknown
 */
export function setMeleeWeaponDamageModifier(player: number | string | IPlayer, modifier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerMeleeWeaponDamageModifier(_player, modifier, false);
}

/**
 * modifier's min value is 0.1
 * 
 * Hash: 0xAE540335B4ABC4E2 | Since: 323 | API-Set: unknown
 */
export function setMeleeWeaponDefenseModifier(player: number | string | IPlayer, modifier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerMeleeWeaponDefenseModifier(_player, modifier);
}

/**
 * Set the model for a specific Player. Be aware that this will destroy the current Ped for the Player and create a new one, any reference to the old ped should be reset
 * Make sure to request the model first and wait until it has loaded.
 * 
 * Hash: 0x00A1CADD00108836 | Since: 323 | API-Set: unknown
 */
export function setModel(player: number | string | IPlayer, model: number | string): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof model === 'string') model = GetHashKey(model)
    SetPlayerModel(_player, model);
}

/**
 * No comment provided
 * 
 * Hash: 0xDB89EF50FF25FCE9 | Since: 323 | API-Set: unknown
 */
export function setNoiseMultiplier(player: number | string | IPlayer, multiplier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerNoiseMultiplier(_player, multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0x977DB4641F6FC3DB | Since: 323 | API-Set: unknown
 */
export function setParachuteModelOverride(player: number | string | IPlayer, model: number | string): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof model === 'string') model = GetHashKey(model)
    SetPlayerParachuteModelOverride(_player, model);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC80A4C2F18A2B64 | Since: 323 | API-Set: unknown
 */
export function setParachutePackModelOverride(player: number | string | IPlayer, model: number | string): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof model === 'string') model = GetHashKey(model)
    SetPlayerParachutePackModelOverride(_player, model);
}

/**
 * tints 0- 13
 * 0 - unkown
 * 1 - unkown
 * 2 - unkown
 * 3 - unkown
 * 4 - unkown
 * 
 * Hash: 0x93B0FB27C9A04060 | Since: 323 | API-Set: unknown
 */
export function setParachutePackTintIndex(player: number | string | IPlayer, tintIndex: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerParachutePackTintIndex(_player, tintIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x8217FD371A4625CF | Since: 323 | API-Set: unknown
 */
export function setParachuteSmokeTrailColor(player: number | string | IPlayer, r: number, g: number, b: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerParachuteSmokeTrailColor(_player, r, g, b);
}

/**
 * Tints:
 * None = -1,
 * Rainbow = 0,
 * Red = 1,
 * SeasideStripes = 2,
 * WidowMaker = 3,
 * Patriot = 4,
 * Blue = 5,
 * Black = 6,
 * Hornet = 7,
 * AirFocce = 8,
 * Desert = 9,
 * Shadow = 10,
 * HighAltitude = 11,
 * Airbone = 12,
 * Sunrise = 13,
 * 
 * 
 * Hash: 0xA3D0E54541D9A5E5 | Since: 323 | API-Set: unknown
 */
export function setParachuteTintIndex(player: number | string | IPlayer, tintIndex: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerParachuteTintIndex(_player, tintIndex);
}

/**
 * p1 was always 5.
 * p4 was always false.
 * 
 * Hash: 0xD9284A8C0D48352C | Since: 323 | API-Set: unknown
 */
export function setParachuteVariationOverride(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerParachuteVariationOverride(_player, 0, undefined, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x11D5F725F0E780E0 | Since: 323 | API-Set: unknown
 */
export function setPhonePaletteIdx(player: number | string | IPlayer, idx: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerResetFlagPreferRearSeats(_player, idx);
}

/**
 * No comment provided
 * 
 * Hash: 0x7BAE68775557AE0B | Since: 1290 | API-Set: unknown
 */
export function setPreviousVariationData(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x7BAE68775557AE0B', _player, 0, 0, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0764486AEDE748DB | Since: 2372 | API-Set: unknown
 */
export function setReserveParachuteModelOverride(player: number | string | IPlayer, model: number | string): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof model === 'string') model = GetHashKey(model)
    SetPlayerReserveParachuteModelOverride(_player, model);
}

/**
 * Tints:
 * None = -1,
 * Rainbow = 0,
 * Red = 1,
 * SeasideStripes = 2,
 * WidowMaker = 3,
 * Patriot = 4,
 * Blue = 5,
 * Black = 6,
 * Hornet = 7,
 * AirFocce = 8,
 * Desert = 9,
 * Shadow = 10,
 * HighAltitude = 11,
 * Airbone = 12,
 * Sunrise = 13,
 * 
 * Hash: 0xAF04C87F5DC1DF38 | Since: 323 | API-Set: unknown
 */
export function setReserveParachuteTintIndex(player: number | string | IPlayer, index: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerReserveParachuteTintIndex(_player, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xC54C95DA968EC5B5 | Since: 323 | API-Set: unknown
 */
export function setSimulateAiming(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerSimulateAiming(_player, toggle);
}

/**
 * Values around 1.0f to 2.0f used in game scripts.
 * 
 * Hash: 0xB2C1A29588A9F47C | Since: 323 | API-Set: unknown
 */
export function setSneakingNoiseMultiplier(player: number | string | IPlayer, multiplier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerSneakingNoiseMultiplier(_player, multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0x2F7CEB6520288061 | Since: 323 | API-Set: unknown
 */
export function setSpectatedVehicleRadioOverride(): void {
    Citizen.invokeNative('0x2F7CEB6520288061', false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA01B8075D8B92DF4 | Since: 323 | API-Set: unknown
 */
export function setSprint(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerSprint(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4E9021C1FCDD507A | Since: 323 | API-Set: unknown
 */
export function setStealthPerceptionModifier(player: number | string | IPlayer, value: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerStealthPerceptionModifier(_player, value);
}

/**
 * Sets your targeting mode.
 * 0 = Assisted Aim - Full
 * 1 = Assisted Aim - Partial
 * 2 = Free Aim - Assisted
 * 3 = Free Aim
 * 
 * Hash: 0xB1906895227793F3 | Since: 323 | API-Set: unknown
 */
export function setTargetingMode(targetMode: number): void {
    SetPlayerTargetingMode(targetMode);
}

/**
 * No comment provided
 * 
 * Hash: 0x5702B917B99DB1CD | Since: 323 | API-Set: unknown
 */
export function setTargetLevel(targetLevel: number): void {
    SetPlayerTargetLevel(targetLevel);
}

/**
 * Set player team on deathmatch and last team standing..
 * 
 * Hash: 0x0299FA38396A4940 | Since: 323 | API-Set: unknown
 */
export function setTeam(player: number | string | IPlayer, team: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerTeam(_player, team);
}

/**
 * No comment provided
 * 
 * Hash: 0xA0D3E4F7AAFB7E78 | Since: 757 | API-Set: unknown
 */
export function setUnderwaterBreathPercentRemaining(player: number | string | IPlayer, time: number): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return SetPlayerUnderwaterTimeRemaining(_player, time);
}

/**
 * modifier's min value is 0.1
 * 
 * Hash: 0xA50E117CDDF82F0C | Since: 323 | API-Set: unknown
 */
export function setVehicleDamageModifier(player: number | string | IPlayer, modifier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerVehicleDamageModifier(_player, modifier);
}

/**
 * modifier's min value is 0.1
 * 
 * Hash: 0x4C60E6EFDAFF2462 | Since: 323 | API-Set: unknown
 */
export function setVehicleDefenseModifier(player: number | string | IPlayer, modifier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerVehicleDefenseModifier(_player, modifier);
}

/**
 * Unsets playerPed+330 if the current weapon has certain flags.
 * 
 * Hash: 0x237440E46D918649 | Since: 1290 | API-Set: unknown
 */
export function setVehicleWeaponToNonHoming(): void {
    Citizen.invokeNative('0x237440E46D918649', undefined);
}

/**
 * # Predominant call signatures
 * `PLAYER::SET_PLAYER_WANTED_CENTRE_POSITION(PLAYER::PLAYER_ID(), ENTITY::GET_ENTITY_COORDS(PLAYER::PLAYER_PED_ID(), 1));`
 * 
 * # Parameter value ranges
 * `P0: PLAYER::PLAYER_ID()`
 * `P1: ENTITY::GET_ENTITY_COORDS(PLAYER::PLAYER_PED_ID(), 1)`
 * P2: Not set by any call
 * 
 * Hash: 0x520E541A97A13354 | Since: 323 | API-Set: unknown
 */
export function setWantedCentrePosition(player: number | string | IPlayer): Vector3 {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return SetPlayerWantedCentrePosition(_player, false, false);
}

/**
 * Call SET_PLAYER_WANTED_LEVEL_NOW for immediate effect
 * 
 * wantedLevel is an integer value representing 0 to 5 stars even though the game supports the 6th wanted level but no police will appear since no definitions are present for it in the game files
 * 
 * disableNoMission-  Disables When Off Mission- appears to always be false
 * 
 * 
 * Hash: 0x39FF19C64EF7DA5B | Since: 323 | API-Set: unknown
 */
export function setWantedLevel(player: number | string | IPlayer, wantedLevel: number, disableNoMission: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerWantedLevel(_player, wantedLevel, disableNoMission);
}

/**
 * Forces any pending wanted level to be applied to the specified player immediately.
 * 
 * Call SET_PLAYER_WANTED_LEVEL with the desired wanted level, followed by SET_PLAYER_WANTED_LEVEL_NOW.
 * 
 * Second parameter is unknown (always false).
 * 
 * Hash: 0xE0A7D1E497FFCD6F | Since: 323 | API-Set: unknown
 */
export function setWantedLevelNow(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerWantedLevelNow(_player, false);
}

/**
 * p2 is always false in R* scripts
 * 
 * Hash: 0x340E61DE7F471565 | Since: 323 | API-Set: unknown
 */
export function setWantedLevelNoDrop(player: number | string | IPlayer, wantedLevel: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerWantedLevelNoDrop(_player, wantedLevel, false);
}

/**
 * This modifies the damage value of your weapon. Whether it is a multiplier or base damage is unknown.
 * 
 * Based on tests, it is unlikely to be a multiplier.
 * 
 * modifier's min value is 0.1
 * 
 * Hash: 0xCE07B9F7817AADA3 | Since: 323 | API-Set: unknown
 */
export function setWeaponDamageModifier(player: number | string | IPlayer, modifier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerWeaponDamageModifier(_player, modifier);
}

/**
 * modifier's min value is 0.1
 * 
 * Hash: 0x2D83BC011CA14A3C | Since: 323 | API-Set: unknown
 */
export function setWeaponDefenseModifier(player: number | string | IPlayer, modifier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerWeaponDefenseModifier(_player, modifier);
}

/**
 * modifier's min value is 0.1
 * 
 * Hash: 0xBCFDE9EDE4CF27DC | Since: 944 | API-Set: unknown
 */
export function setWeaponMinigunDefenseModifier(player: number | string | IPlayer, modifier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerWeaponDefenseModifier2(_player, modifier);
}

/**
 * No comment provided
 * 
 * Hash: 0x31E90B8873A4CD3B | Since: 617 | API-Set: unknown
 */
export function setWeaponTakedownDefenseModifier(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x31E90B8873A4CD3B', _player, 0);
}

/**
 * The player will be ignored by the police if toggle is set to true
 * 
 * Hash: 0x32C62AA929C2DA6A | Since: 323 | API-Set: unknown
 */
export function setPoliceIgnore(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPoliceIgnorePlayer(_player, toggle);
}

/**
 * If toggle is set to false:
 * The police won't be shown on the (mini)map
 * 
 * If toggle is set to true:
 * The police will be shown on the (mini)map
 * 
 * Hash: 0x43286D561B72B8BF | Since: 323 | API-Set: unknown
 */
export function setPoliceRadarBlips(toggle: boolean): void {
    SetPoliceRadarBlips(toggle);
}

/**
 * Multiplier goes up to 1.49 any value above will be completely overruled by the game and the multiplier will not take effect, this can be edited in memory however.
 * 
 * Just call it one time, it is not required to be called once every tick.
 * 
 * Note: At least the IDA method if you change the max float multiplier from 1.5 it will change it for both this and SWIM above. I say 1.5 as the function blrs if what you input is greater than or equal to 1.5 hence why it's 1.49 max default.
 * 
 * Hash: 0x6DB47AA77FD94E09 | Since: 323 | API-Set: unknown
 */
export function setRunSprintMultiplierFor(player: number | string | IPlayer, multiplier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetRunSprintMultiplierForPlayer(_player, multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0x70A382ADEC069DD3 | Since: 1604 | API-Set: unknown
 */
export function setScriptFirePosition(coordX: number, coordY: number, coordZ: number): void {
    Citizen.invokeNative('0x70A382ADEC069DD3', coordX, coordY, coordZ);
}

/**
 * No comment provided
 * 
 * Hash: 0xB214D570EAD7F81A | Since: 678 | API-Set: unknown
 */
export function setSpecialAbilityMp(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSpecialAbility(_player, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA49C426ED0CA4AB7 | Since: 323 | API-Set: unknown
 */
export function setSpecialAbilityMultiplier(multiplier: number): void {
    SetSpecialAbilityMultiplier(multiplier);
}

/**
 * Swim speed multiplier.
 * Multiplier goes up to 1.49
 * 
 * Just call it one time, it is not required to be called once every tick. - Note copied from below native.
 * 
 * Note: At least the IDA method if you change the max float multiplier from 1.5 it will change it for both this and RUN_SPRINT below. I say 1.5 as the function blrs if what you input is greater than or equal to 1.5 hence why it's 1.49 max default.
 * 
 * Hash: 0xA91C6F0FF7D16A13 | Since: 323 | API-Set: unknown
 */
export function setSwimMultiplierFor(player: number | string | IPlayer, multiplier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSwimMultiplierForPlayer(_player, multiplier);
}

/**
 * Max value is 1.0
 * 
 * Hash: 0x9B0BB33B04405E7A | Since: 323 | API-Set: unknown
 */
export function setWantedLevelDifficulty(player: number | string | IPlayer, difficulty: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetWantedLevelDifficulty(_player, difficulty);
}

/**
 * No comment provided
 * 
 * Hash: 0x49B856B1360C47C7 | Since: 2060 | API-Set: unknown
 */
export function setWantedLevelHiddenEscapeTime(player: number | string | IPlayer, wantedLevel: number, lossTime: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetWantedLevelHiddenEvasionTime(_player, wantedLevel, lossTime);
}

/**
 * No comment provided
 * 
 * Hash: 0x020E5F00CDA207BA | Since: 323 | API-Set: unknown
 */
export function setWantedLevelMultiplier(multiplier: number): void {
    SetWantedLevelMultiplier(multiplier);
}

/**
 * This is to make the player walk without accepting input from INPUT.
 * 
 * gaitType is in increments of 100s. 2000, 500, 300, 200, etc.
 * 
 * p4 is always 1 and p5 is always 0.
 * 
 * C# Example :
 * 
 * Function.Call(Hash.SIMULATE_PLAYER_INPUT_GAIT, Game.Player, 1.0f, 100, 1.0f, 1, 0); //Player will go forward for 100ms
 * 
 * Hash: 0x477D5D63E63ECA5D | Since: 323 | API-Set: unknown
 */
export function simulateInputGait(player: number | string | IPlayer, amount: number, gaitType: number, speed: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SimulatePlayerInputGait(_player, amount, gaitType, speed, false, false, undefined);
}

/**
 * p1 is always 0 in the scripts
 * 
 * Hash: 0x821FDC827D6F4090 | Since: 678 | API-Set: unknown
 */
export function specialAbilityActivate(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityActivate(_player, 0);
}

/**
 * p1 appears as 5, 10, 15, 25, or 30. p2 is always true.
 * 
 * Hash: 0xB7B0870EB531D08D | Since: 323 | API-Set: unknown
 */
export function specialAbilityChargeAbsolute(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityChargeAbsolute(_player, 0, false, undefined);
}

/**
 * p1 appears to always be 1 (only comes up twice)
 * 
 * Hash: 0xED481732DFF7E997 | Since: 323 | API-Set: unknown
 */
export function specialAbilityChargeContinuous(player: number | string | IPlayer, p1: number | IPed): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _p1 = p1 instanceof IPed ? p1.handle() : p1;
    SpecialAbilityChargeContinuous(_player, _p1, undefined);
}

/**
 * 2 matches. p1 was always true.
 * 
 * Hash: 0xF733F45FA4497D93 | Since: 323 | API-Set: unknown
 */
export function specialAbilityChargeLarge(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityChargeLarge(_player, false, false, undefined);
}

/**
 * Only 1 match. Both p1 & p2 were true.
 * 
 * Hash: 0xF113E3AA9BC54613 | Since: 323 | API-Set: unknown
 */
export function specialAbilityChargeMedium(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityChargeMedium(_player, false, false, undefined);
}

/**
 * 
 * normalizedValue is from 0.0 - 1.0
 * p2 is always 1
 * 
 * Hash: 0xA0696A65F009EE18 | Since: 323 | API-Set: unknown
 */
export function specialAbilityChargeNormalized(player: number | string | IPlayer, normalizedValue: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityChargeNormalized(_player, normalizedValue, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC9A763D8FE87436A | Since: 323 | API-Set: unknown
 */
export function specialAbilityChargeOnMissionFailed(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityChargeOnMissionFailed(_player, undefined);
}

/**
 * Every occurrence of p1 & p2 were both true.
 * 
 * Hash: 0x2E7B9B683481687D | Since: 323 | API-Set: unknown
 */
export function specialAbilityChargeSmall(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityChargeSmall(_player, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD6A953C6D1492057 | Since: 323 | API-Set: unknown
 */
export function specialAbilityDeactivate(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityDeactivate(_player, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9CB5CE07A3968D5A | Since: 323 | API-Set: unknown
 */
export function specialAbilityDeactivateFast(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityDeactivateFast(_player, undefined);
}

/**
 * p1 is always 0 in the scripts
 * 
 * Hash: 0x17F7471EACA78290 | Since: 678 | API-Set: unknown
 */
export function specialAbilityDeactivateMp(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityDeplete(_player, 0);
}

/**
 * p1 was always true.
 * 
 * Hash: 0x1D506DBBBC51E64B | Since: 323 | API-Set: unknown
 */
export function specialAbilityDepleteMeter(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityDepleteMeter(_player, false, undefined);
}

/**
 * Also known as _RECHARGE_SPECIAL_ABILITY
 * 
 * Hash: 0x3DACA8DDC6FD4980 | Since: 323 | API-Set: unknown
 */
export function specialAbilityFillMeter(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityFillMeter(_player, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6A09D0D590A47D13 | Since: 323 | API-Set: unknown
 */
export function specialAbilityLock(playerModel: number | string): void {
    if (typeof playerModel === 'string') playerModel = GetHashKey(playerModel)
    SpecialAbilityLock(playerModel, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x375F0E738F861A94 | Since: 323 | API-Set: unknown
 */
export function specialAbilityReset(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityReset(_player, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF145F3BE2EFA9A3B | Since: 323 | API-Set: unknown
 */
export function specialAbilityUnlock(playerModel: number | string): void {
    if (typeof playerModel === 'string') playerModel = GetHashKey(playerModel)
    SpecialAbilityUnlock(playerModel, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF9BD71691857E48 | Since: 323 | API-Set: unknown
 */
export function startFiringAmnesty(duration: number): void {
    StartFiringAmnesty(duration);
}

/**
 * `findCollisionLand`: This teleports the player to land when set to true and will not consider the Z coordinate parameter provided by you. It will automatically put the Z coordinate so that you don't fall from sky.
 * 
 * Hash: 0xAD15F075A4DA0FDE | Since: 323 | API-Set: unknown
 */
export function startTeleport(player: number | string | IPlayer, pos: Vector3, heading: number, findCollisionLand: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    StartPlayerTeleport(_player, pos.x, pos.y, pos.z, heading, false, findCollisionLand, false);
}

/**
 * Disables the player's teleportation
 * 
 * Hash: 0xC449EDED9D73009C | Since: 323 | API-Set: unknown
 */
export function stopTeleport(): void {
    StopPlayerTeleport();
}

/**
 * crimeType: see REPORT_CRIME
 * 
 * Hash: 0x9A987297ED8BD838 | Since: 323 | API-Set: unknown
 */
export function suppressCrimeThisFrame(player: number | string | IPlayer, crimeType: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SuppressCrimeThisFrame(_player, crimeType);
}

/**
 * This has been found in use in the decompiled files.
 * 
 * Hash: 0x4669B3ED80F24B4E | Since: 323 | API-Set: unknown
 */
export function suppressLosingWantedLevelIfHiddenThisFrame(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x4669B3ED80F24B4E', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x36F1B38855F2A8DF | Since: 323 | API-Set: unknown
 */
export function suppressWitnessesCallingPoliceThisFrame(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x36F1B38855F2A8DF', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0xE23D5873C2394C61 | Since: 323 | API-Set: unknown
 */
export function updateTeleport(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return UpdatePlayerTeleport(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFEE8FA29AB9A18E | Since: 323 | API-Set: unknown
 */
export function updateSpecialAbilityFromStat(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xFFEE8FA29AB9A18E', _player, undefined);
}

/**
 * This native is used in both singleplayer and multiplayer scripts.
 * 
 * Always used like this in scripts
 * `PLAYER::UPDATE_WANTED_POSITION_THIS_FRAME(PLAYER::PLAYER_ID());`
 * 
 * Hash: 0xBC9490CA15AEA8FB | Since: 323 | API-Set: unknown
 */
export function updateWantedPositionThisFrame(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xBC9490CA15AEA8FB', _player);
}

