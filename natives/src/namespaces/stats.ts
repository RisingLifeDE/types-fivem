import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0x44919CC079BB60BF | Since: 573
 */
export function changeGoonLookingForWork(): void {
    Citizen.invokeNative('0x44919CC079BB60BF', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1C9B92BDD3F151D | Since: 573
 */
export function changeUniform(): void {
    Citizen.invokeNative('0xD1C9B92BDD3F151D', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA3C53804BDB68ED2 | Since: 573
 */
export function endBeingBoss(): void {
    Citizen.invokeNative('0xA3C53804BDB68ED2', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6BCCF9948492FD85 | Since: 573
 */
export function endBeingGoon(): void {
    Citizen.invokeNative('0x6BCCF9948492FD85', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6F361B8889A792A3 | Since: 323
 */
export function forceCloudMpDownloadAndOverwriteLocalSave(): void {
    Citizen.invokeNative('0x6F361B8889A792A3');
}

/**
 * No comment provided
 * 
 * Hash: 0x6BC0ACD0673ACEBE | Since: 573
 */
export function getBossGoonUuid(characterSlot: number): void {
    Citizen.invokeNative('0x6BC0ACD0673ACEBE', characterSlot, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x61E111E323419E07 | Since: 323
 */
export function getPackedIntStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number {
    return GetPackedIntStatKey(index, spStat, charStat, character);
}

/**
 * Needs more research. Gets the stat name of a masked int?
 * 
 * section - values used in the decompiled scripts:
 * "_NGPSTAT_INT"
 * "_MP_NGPSTAT_INT"
 * "_MP_LRPSTAT_INT"
 * "_MP_APAPSTAT_INT"
 * "_MP_LR2PSTAT_INT"
 * "_MP_BIKEPSTAT_INT"
 * "_MP_IMPEXPPSTAT_INT"
 * "_MP_GUNRPSTAT_INT"
 * "_NGDLCPSTAT_INT"
 * "_MP_NGDLCPSTAT_INT"
 * "_DLCSMUGCHARPSTAT_INT"
 * "_GANGOPSPSTAT_INT"
 * "_BUSINESSBATPSTAT_INT"
 * "_ARENAWARSPSTAT_INT"
 * "_CASINOPSTAT_INT"
 * "_CASINOHSTPSTAT_INT"
 * 
 * Hash: 0x2B4CDCA6F07FF3DA | Since: 323
 */
export function getPackedNgIntStatKey(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number {
    return GetNgstatIntHash(index, spStat, charStat, character, section);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA7EBFC49AE3F1B0 | Since: 2545
 */
export function getPackedStatBoolCode(index: number, characterSlot: number): boolean {
    return Citizen.invokeNative('0xDA7EBFC49AE3F1B0', index, characterSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x0BC900A6FE73770C | Since: 2545
 */
export function getPackedStatIntCode(index: number, characterSlot: number): number {
    return Citizen.invokeNative('0x0BC900A6FE73770C', index, characterSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0xD16C2AD6B8E32854 | Since: 323
 */
export function getPackedTuIntStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number {
    return GetPackedTuIntStatKey(index, spStat, charStat, character);
}

/**
 * No comment provided
 * 
 * Hash: 0x5EAD2BF6484852E4 | Since: 323
 */
export function getPlayerHasDrivenAllVehicles(): boolean {
    return Citizen.invokeNative('0x5EAD2BF6484852E4');
}

/**
 * No comment provided
 * 
 * Hash: 0x792271AB35C356A4 | Since: 573
 */
export function hiredLimo(): void {
    HiredLimo(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC30713A383BFBF0E | Since: 323
 */
export function leaderboards2ReadByHandle(): [boolean, any, any] {
    return Leaderboards2ReadByHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0xF1AE5DCDBFCA2721 | Since: 323
 */
export function leaderboards2ReadByPlaform(gamerHandleCsv: string, platformName: string): [boolean, any] {
    return Leaderboards2ReadByPlatform(gamerHandleCsv, platformName);
}

/**
 * No comment provided
 * 
 * Hash: 0x5CE587FB5A42C8C4 | Since: 323
 */
export function leaderboards2ReadByRadius(): [boolean, any, any] {
    return Leaderboards2ReadByRadius(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA2C7DB0C129449A | Since: 323
 */
export function leaderboards2ReadByRank(): [boolean, any] {
    return Leaderboards2ReadByRank(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE662C8B759D08F3C | Since: 323
 */
export function leaderboards2ReadByScoreFloat(): [boolean, any] {
    return Leaderboards2ReadByScoreFloat(0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7EEC7E4F6984A16A | Since: 323
 */
export function leaderboards2ReadByScoreInt(): [boolean, any] {
    return Leaderboards2ReadByScoreInt(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x918B101666F9CB83 | Since: 323
 */
export function leaderboards2ReadFriendsByRow(): [boolean, any, any] {
    return Leaderboards2ReadFriendsByRow(undefined, false, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x71B008056E5692D6 | Since: 323
 */
export function leaderboards2ReadGetRowDataEnd(): void {
    Citizen.invokeNative('0x71B008056E5692D6');
}

/**
 * No comment provided
 * 
 * Hash: 0x38491439B6BA7F7D | Since: 323
 */
export function leaderboards2ReadGetRowDataFloat(): number {
    return Citizen.invokeNative('0x38491439B6BA7F7D', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x34770B9CE0E03B91 | Since: 323
 */
export function leaderboards2ReadGetRowDataInfo(): [boolean, any] {
    return Citizen.invokeNative('0x34770B9CE0E03B91', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x88578F6EC36B4A3A | Since: 323
 */
export function leaderboards2ReadGetRowDataInt(): number {
    return Citizen.invokeNative('0x88578F6EC36B4A3A', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA0F93D5465B3094D | Since: 323
 */
export function leaderboards2ReadGetRowDataStart(): [boolean, any] {
    return Citizen.invokeNative('0xA0F93D5465B3094D');
}

/**
 * No comment provided
 * 
 * Hash: 0xC38DC1E90D22547C | Since: 323
 */
export function leaderboards2ReadRankPrediction(): [boolean, any, any, any] {
    return Leaderboards2ReadRankPrediction();
}

/**
 * No comment provided
 * 
 * Hash: 0xAE2206545888AE49 | Since: 323
 */
export function leaderboards2WriteData(): [boolean, any] {
    return Leaderboards2WriteData();
}

/**
 * No comment provided
 * 
 * Hash: 0xC980E62E33DF1D5C | Since: 323
 */
export function leaderboards2WriteDataForEventType(): [boolean, any, any] {
    return Leaderboards2WriteDataForEventType();
}

/**
 * No comment provided
 * 
 * Hash: 0xB9BB18E2C40142ED | Since: 323
 */
export function leaderboardsCacheDataRow(): [boolean, any] {
    return LeaderboardsCacheDataRow();
}

/**
 * No comment provided
 * 
 * Hash: 0xD4B02A6B476E1FDC | Since: 323
 */
export function leaderboardsClearCacheData(): void {
    LeaderboardsClearCacheData();
}

/**
 * No comment provided
 * 
 * Hash: 0x8EC74CEB042E7CFF | Since: 323
 */
export function leaderboardsClearCacheDataId(): void {
    Citizen.invokeNative('0x8EC74CEB042E7CFF', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9120E8DBA3D69273 | Since: 323
 */
export function leaderboardsGetCacheDataRow(): [boolean, any] {
    return LeaderboardsGetCacheDataRow(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9C51349BE6CDFE2C | Since: 323
 */
export function leaderboardsGetCacheExists(): boolean {
    return LeaderboardsGetCacheExists(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x58A651CD201D89AD | Since: 323
 */
export function leaderboardsGetCacheNumberOfRows(): number {
    return LeaderboardsGetCacheNumberOfRows(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF04C1C27DA35F6C8 | Since: 323
 */
export function leaderboardsGetCacheTime(): number {
    return LeaderboardsGetCacheTime(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC4B5467A1886EA7E | Since: 323
 */
export function leaderboardsGetColumnId(): number {
    return LeaderboardsGetColumnId(0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF4FEF46DB7894D3 | Since: 323
 */
export function leaderboardsGetColumnType(): number {
    return LeaderboardsGetColumnType(0, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x117B45156D7EFF2E | Since: 323
 */
export function leaderboardsGetNumberOfColumns(): number {
    return LeaderboardsGetNumberOfColumns(0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA31FD15197B192BD | Since: 323
 */
export function leaderboardsReadAnyPending(): boolean {
    return LeaderboardsReadAnyPending();
}

/**
 * No comment provided
 * 
 * Hash: 0x7CCE5C737A665701 | Since: 323
 */
export function leaderboardsReadClear(): number {
    return LeaderboardsReadClear(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA34CB6E6F0DF4A0B | Since: 323
 */
export function leaderboardsReadClearAll(): number {
    return LeaderboardsReadClearAll();
}

/**
 * No comment provided
 * 
 * Hash: 0xAC392C8483342AC2 | Since: 323
 */
export function leaderboardsReadPending(): boolean {
    return LeaderboardsReadPending(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2FB19228983E832C | Since: 323
 */
export function leaderboardsReadSuccessful(): boolean {
    return LeaderboardsReadSuccessful(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0BCA1D2C47B0D269 | Since: 323
 */
export function leaderboardsWriteAddColumn(): void {
    LeaderboardsWriteAddColumn(undefined, undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x2E65248609523599 | Since: 323
 */
export function leaderboardsWriteAddColumnLong(): void {
    LeaderboardsWriteAddColumnLong(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEA553E35C2246E1 | Since: 573
 */
export function orderBossVehicle(vehicleHash: number | string): void {
    if (typeof vehicleHash === 'string') vehicleHash = GetHashKey(vehicleHash)
    OrderedBossVehicle(undefined, undefined, vehicleHash);
}

/**
 * Needs more research. Possibly used to calculate the "mask" when calling "STAT_SET_MASKED_INT"?
 * 
 * Hash: 0x94F12ABF9C79E339 | Since: 323
 */
export function packedStatGetIntStatIndex(): number {
    return StatGetPackedIntMask(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD558BEC0BBA7E8D2 | Since: 877
 */
export function playAbandonedMc(): void {
    Citizen.invokeNative('0xD558BEC0BBA7E8D2', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x79AB33F0FBFAC40C | Since: 323
 */
export function playAcquiredHiddenPackage(): void {
    PlaystatsAcquiredHiddenPackage(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA071E0ED98F91286 | Since: 323
 */
export function playActivityDone(activityId: number): void {
    PlaystatsActivityDone(0, activityId, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x46326E13DA4E0546 | Since: 323
 */
export function playAppendDirectorMetric(): any {
    return PlaystatsDirectorMode();
}

/**
 * No comment provided
 * 
 * Hash: 0xF9096193DF1F99D4 | Since: 1868
 */
export function playArcadeCabinet(): void {
    Citizen.invokeNative('0xF9096193DF1F99D4', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x533A7D1EA58DF958 | Since: 1734
 */
export function playArcadeGame(): void {
    PlaystatsArcadegame(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4FCDBD3F0A813C25 | Since: 1868
 */
export function playArcadeLoveMatch(): void {
    Citizen.invokeNative('0x4FCDBD3F0A813C25', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB479D9F0D48A1BC5 | Since: 1604
 */
export function playArenaWarsEnded(): any {
    return PlaystatsArenaWarsEnded();
}

/**
 * No comment provided
 * 
 * Hash: 0x6F4F599753F8200A | Since: 1604
 */
export function playArenaWarsSpectator(): void {
    PlaystatsArenaWarSpectator(0, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x47B32F5611E6E483 | Since: 463
 */
export function playAwardBadSport(id: number): void {
    PlaystatsAwardBadsport(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x70F52471E758EBAE | Since: 2545
 */
export function playAwardNav(): void {
    Citizen.invokeNative('0x70F52471E758EBAE', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x46F917F6B4128FE4 | Since: 323
 */
export function playAwardXp(amount: number, _type: number | string, category: number | string): void {
    if (typeof _type === 'string') _type = GetHashKey(_type)
    if (typeof category === 'string') category = GetHashKey(category)
    PlaystatsAwardXp(amount, _type, category);
}

/**
 * No comment provided
 * 
 * Hash: 0x5009DFD741329729 | Since: 323
 */
export function playBackgroundScriptAction(action: string, value: number): void {
    PlaystatsBackgroundScriptAction(action, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x516FC96EB88EEFE5 | Since: 1011
 */
export function playBanAlert(): void {
    PlaystatsBanAlert(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7B18DA61F6BAE9D5 | Since: 573
 */
export function playBcCarJacking(): void {
    Citizen.invokeNative('0x7B18DA61F6BAE9D5', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x53CAE13E9B426993 | Since: 757
 */
export function playBcCashing(): void {
    Citizen.invokeNative('0x53CAE13E9B426993', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE3261D791EB44ACB | Since: 573
 */
export function playBcFindersKeepers(): void {
    Citizen.invokeNative('0xE3261D791EB44ACB', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x930F504203F561C9 | Since: 573
 */
export function playBcMostWanted(): void {
    Citizen.invokeNative('0x930F504203F561C9', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x73001E34F85137F8 | Since: 573
 */
export function playBcPointToPoint(): void {
    Citizen.invokeNative('0x73001E34F85137F8', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x14EDA9EE27BD1626 | Since: 573
 */
export function playBcProtectionRacket(): void {
    Citizen.invokeNative('0x14EDA9EE27BD1626', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D36291161859389 | Since: 757
 */
export function playBcSalvage(): void {
    Citizen.invokeNative('0x7D36291161859389', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x06EAF70AE066441E | Since: 573
 */
export function playBcSmashAndGrab(): void {
    Citizen.invokeNative('0x06EAF70AE066441E', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x316DB59CD14C1774 | Since: 1493
 */
export function playBusinessBattleEnded(): void {
    Citizen.invokeNative('0x316DB59CD14C1774', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD6781E42755531F7 | Since: 757
 */
export function playBuyContrabandMission(): any {
    return PlaystatsBuyContraband();
}

/**
 * No comment provided
 * 
 * Hash: 0xF06A6F41CB445443 | Since: 757
 */
export function playBwAirFreight(): void {
    Citizen.invokeNative('0xF06A6F41CB445443', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x678F86D8FC040BDB | Since: 573
 */
export function playBwAssault(): void {
    Citizen.invokeNative('0x678F86D8FC040BDB', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6F54BB2FFCA35EA | Since: 573
 */
export function playBwBellyOfTheBeast(): void {
    Citizen.invokeNative('0xA6F54BB2FFCA35EA', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D8ADB562F09A245 | Since: 573
 */
export function playBwBossonbossdeathmatch(): void {
    Citizen.invokeNative('0x8D8ADB562F09A245', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x282B6739644F4347 | Since: 757
 */
export function playBwFragileGoods(): void {
    Citizen.invokeNative('0x282B6739644F4347', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5FF2C33B13A02A11 | Since: 757
 */
export function playBwHeadHunter(): void {
    Citizen.invokeNative('0x5FF2C33B13A02A11', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x88087EE1F28024AE | Since: 573
 */
export function playBwHuntTheBoss(): void {
    Citizen.invokeNative('0x88087EE1F28024AE', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFCC228E07217FCAC | Since: 573
 */
export function playBwSightseer(): void {
    Citizen.invokeNative('0xFCC228E07217FCAC', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1A1EE3B4FA8E760 | Since: 573
 */
export function playBwYatchattack(): void {
    Citizen.invokeNative('0xD1A1EE3B4FA8E760', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1187CB58D7F3BED7 | Since: 2372
 */
export function playCarclubChallenge(): void {
    PlaystatsCarclubChallenge(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF14D6FEEC507BBE | Since: 2372
 */
export function playCarclubPoints(): void {
    PlaystatsCarclubPoints(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x69C922B677621428 | Since: 2372
 */
export function playCarclubPrize(vehicleModel: number | string): void {
    if (typeof vehicleModel === 'string') vehicleModel = GetHashKey(vehicleModel)
    PlaystatsCarclubPrize(0, vehicleModel);
}

/**
 * No comment provided
 * 
 * Hash: 0x3EAE97309727E7AD | Since: 1734
 */
export function playCasinoBlackjack(): void {
    PlaystatsCasinoBlackjack(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD5451C7BF151EB6F | Since: 1734
 */
export function playCasinoBlackjackLight(): void {
    PlaystatsCasinoBlackjackLight(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0999F3F090EC5012 | Since: 1734
 */
export function playCasinoChip(): void {
    PlaystatsCasinoChip(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x049F059625058A86 | Since: 1734
 */
export function playCasinoInsideTrack(): void {
    PlaystatsCasinoInsidetrack(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x23A3CBCD50D54E47 | Since: 1734
 */
export function playCasinoInsideTrackLight(): void {
    PlaystatsCasinoInsidetrackLight(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C432C1435F5E4FA | Since: 1734
 */
export function playCasinoLuckySeven(): void {
    PlaystatsCasinoLuckyseven(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x95101C443A84E7F1 | Since: 1734
 */
export function playCasinoRoulette(): void {
    PlaystatsCasinoRoulette(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6572ABA3DE1197FC | Since: 1734
 */
export function playCasinoRouletteLight(): void {
    PlaystatsCasinoRouletteLight(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEF5EC67D392B830A | Since: 1734
 */
export function playCasinoSlotMachine(): void {
    PlaystatsCasinoSlotmachine(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE60054A0FAE8227F | Since: 1734
 */
export function playCasinoSlotMachineLight(): void {
    PlaystatsCasinoSlotmachineLight(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFCCCAC2BD3C1F180 | Since: 1734
 */
export function playCasinoStoryMissionEnded(): void {
    PlaystatsCasinoStoryMissionEnded(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF740FB339D471C35 | Since: 1734
 */
export function playCasinoThreeCardPoker(): void {
    PlaystatsCasinoThreecardpoker(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC9001364B4388F22 | Since: 1734
 */
export function playCasinoThreeCardPokerLight(): void {
    PlaystatsCasinoThreecardpokerLight(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x28ECB8AC2F607DB2 | Since: 877
 */
export function playChangeMcOutfit(): void {
    Citizen.invokeNative('0x28ECB8AC2F607DB2', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0B565B0AAE56A0E8 | Since: 877
 */
export function playChangeMcRole(role: number): void {
    Citizen.invokeNative('0x0B565B0AAE56A0E8', undefined, undefined, undefined, undefined, role, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6058665D72302D3F | Since: 323
 */
export function playCheatApplied(cheat: string): void {
    PlaystatsCheatApplied(cheat);
}

/**
 * No comment provided
 * 
 * Hash: 0x34B973047A2268B9 | Since: 323
 */
export function playClothChange(p0: number | IPed): void {
    const _p0 = p0 instanceof IPed ? p0.handle() : p0;
    PlaystatsClothChange(_p0, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCD0A8A9338681CF2 | Since: 1734
 */
export function playCollectiblePickedUp(objectHash: number | string, moneyAmount: number, rpAmount: number, chipsAmount: number): void {
    if (typeof objectHash === 'string') objectHash = GetHashKey(objectHash)
    PlaystatsCollectible(0, objectHash, undefined, undefined, moneyAmount, rpAmount, chipsAmount, undefined, 0, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB7257BA2550EA10A | Since: 877
 */
export function playCopyRankIntoNewSlot(): void {
    PlaystatsCopyRankIntoNewSlot(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAFC7E5E075A96F46 | Since: 323
 */
export function playCrateCreated(): void {
    PlaystatsCrateCreated(0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x1CAE5D2E3F9A07F0 | Since: 323
 */
export function playCrateDropMissionDone(): void {
    PlaystatsCrateDropMissionDone(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6DEE77AFF8C21BD1 | Since: 323
 */
export function playCreateMatchHistoryId2(): [boolean, number, number] {
    return Citizen.invokeNative('0x6DEE77AFF8C21BD1');
}

/**
 * No comment provided
 * 
 * Hash: 0x0BC254FF3A911501 | Since: 1290
 */
export function playDarCheckpoint(): any {
    return PlaystatsDarMissionEnd();
}

/**
 * No comment provided
 * 
 * Hash: 0x2605663BD4F23B5D | Since: 757
 */
export function playDefendContrabandMission(): any {
    return PlaystatsDefendContraband();
}

/**
 * No comment provided
 * 
 * Hash: 0xD6CA58B3B53A0F22 | Since: 2189
 */
export function playDjMissionEnded(): void {
    Citizen.invokeNative('0xD6CA58B3B53A0F22', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB26F670685631727 | Since: 1493
 */
export function playDjUsage(): void {
    Citizen.invokeNative('0xB26F670685631727', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x66C7BB2416ED3FCE | Since: 1493
 */
export function playDroneUsage(): void {
    PlaystatsDroneUsage(0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x848B66100EE33B05 | Since: 1011
 */
export function playDupeDetected(): any {
    return PlaystatsDupeDetection();
}

/**
 * No comment provided
 * 
 * Hash: 0x501478855A6074CE | Since: 877
 */
export function playEarnedMcPoints(): void {
    PlaystatsEarnedMcPoints(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x878FF156D36E9956 | Since: 1290
 */
export function playEnterSessionPack(): any {
    return PlaystatsEnterSessionPack();
}

/**
 * No comment provided
 * 
 * Hash: 0xFA5B74BAB8A7EF99 | Since: 2372
 */
export function playExtraEvent(): void {
    PlaystatsExtraEvent(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4DC416F246A41FC8 | Since: 2189
 */
export function playFastTrvl(): void {
    Citizen.invokeNative('0x4DC416F246A41FC8', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBAA2F0490E146BE8 | Since: 463
 */
export function playFmEventAtob(): void {
    Citizen.invokeNative('0xBAA2F0490E146BE8', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6A60E43998228229 | Since: 463
 */
export function playFmEventChallenges(): void {
    Citizen.invokeNative('0x6A60E43998228229', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3DE3AA516FB126A4 | Since: 463
 */
export function playFmEventCheckpointcollection(): void {
    Citizen.invokeNative('0x3DE3AA516FB126A4', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6551B1F7F6CD46EA | Since: 463
 */
export function playFmEventCompetitiveurbanwarfare(): void {
    Citizen.invokeNative('0x6551B1F7F6CD46EA', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEDBF6C9B0D2C65C8 | Since: 463
 */
export function playFmEventCriminaldamage(): void {
    Citizen.invokeNative('0xEDBF6C9B0D2C65C8', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A9C7F36E5D7B683 | Since: 463
 */
export function playFmEventDeaddrop(): void {
    Citizen.invokeNative('0x0A9C7F36E5D7B683', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x84DFC579C2FC214C | Since: 463
 */
export function playFmEventHotproperty(): void {
    Citizen.invokeNative('0x84DFC579C2FC214C', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2CD90358F67D0AA8 | Since: 463
 */
export function playFmEventHuntbeast(): void {
    Citizen.invokeNative('0x2CD90358F67D0AA8', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x164C5FF663790845 | Since: 463
 */
export function playFmEventKingofthecastle(): void {
    Citizen.invokeNative('0x164C5FF663790845', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x419615486BBF1956 | Since: 463
 */
export function playFmEventPasstheparcel(): void {
    Citizen.invokeNative('0x419615486BBF1956', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A7CE7CD3E653485 | Since: 463
 */
export function playFmEventPennedin(): void {
    Citizen.invokeNative('0x1A7CE7CD3E653485', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8C9D11605E59D955 | Since: 463
 */
export function playFmEventUrbanwarfare(): void {
    Citizen.invokeNative('0x8C9D11605E59D955', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBFAFDB5FAAA5C5AB | Since: 463
 */
export function playFmEventVehicletarget(): void {
    Citizen.invokeNative('0xBFAFDB5FAAA5C5AB', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD8AFB345A9C5CCBB | Since: 1290
 */
export function playFmHeistPrepEnded(): any {
    return PlaystatsH2FmprepEnd();
}

/**
 * No comment provided
 * 
 * Hash: 0x46A70777BE6CEAB9 | Since: 2545
 */
export function playFmMissionEnd(): void {
    Citizen.invokeNative('0x46A70777BE6CEAB9', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A0D4A6C336B7BC5 | Since: 1734
 */
export function playFreemodeCasinoMissionEnded(): any {
    return PlaystatsCasinoMissionEnded();
}

/**
 * No comment provided
 * 
 * Hash: 0x0F71DE29AB2258F1 | Since: 323
 */
export function playFriendActivity(): void {
    PlaystatsFriendActivity(0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0EACDF8487D5155A | Since: 1103
 */
export function playGunrunningMissionEnded(): any {
    return PlaystatsGunrunMissionEnded();
}

/**
 * No comment provided
 * 
 * Hash: 0xDAF80797FC534BEC | Since: 1103
 */
export function playGunrunningRnd(): void {
    Citizen.invokeNative('0xDAF80797FC534BEC', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFBD93BF2943E29B | Since: 1868
 */
export function playHeist3Drone(): void {
    Citizen.invokeNative('0xDFBD93BF2943E29B', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2E0259BABC27A327 | Since: 1868
 */
export function playHeist3Finale(): void {
    Citizen.invokeNative('0x2E0259BABC27A327', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x92FC0EEDFAC04A14 | Since: 1868
 */
export function playHeist3Hack(): void {
    Citizen.invokeNative('0x92FC0EEDFAC04A14', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x53C31853EC9531FF | Since: 1868
 */
export function playHeist3Prep(): void {
    Citizen.invokeNative('0x53C31853EC9531FF', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC1E963C58664B556 | Since: 2189
 */
export function playHeist4Finale(): void {
    Citizen.invokeNative('0xC1E963C58664B556', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2FA3173480008493 | Since: 2189
 */
export function playHeist4Hack(): void {
    Citizen.invokeNative('0x2FA3173480008493', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFCDB14317A9B361 | Since: 2189
 */
export function playHeist4Prep(): void {
    Citizen.invokeNative('0xDFCDB14317A9B361', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF4FF020A08BC8863 | Since: 323
 */
export function playHeistSaveCheat(hash: number | string): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    PlaystatsHeistSaveCheat(hash, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x60EEDC12AF66E846 | Since: 757
 */
export function playHitContrabandDestroyLimit(): void {
    Citizen.invokeNative('0x60EEDC12AF66E846', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCB00196B31C39EB1 | Since: 323
 */
export function playHoldUpMissionDone(): void {
    PlaystatsHoldUpMissionDone(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2818FF6638CB09DE | Since: 2189
 */
export function playHubEntry(): void {
    Citizen.invokeNative('0x2818FF6638CB09DE', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A46ACE5C4661132 | Since: 2545
 */
export function playHubExit(): void {
    Citizen.invokeNative('0x5A46ACE5C4661132', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5DA3A8DE8CB6226F | Since: 323
 */
export function playIdleKick(msStoodIdle: number): void {
    PlaystatsIdleKick(msStoodIdle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D8BA05688AD64C7 | Since: 944
 */
export function playImpexpMissionEnded(): void {
    Citizen.invokeNative('0x7D8BA05688AD64C7', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2B69F5074C894811 | Since: 323
 */
export function playImportExportMissionDone(): void {
    PlaystatsImportExportMissionDone(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1E1497D0D2108115 | Since: 1290
 */
export function playInstancedHeistEnded(): any {
    return PlaystatsH2InstanceEnd(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFEA3F7E83C0610FA | Since: 2545
 */
export function playInstMissionEnd(): void {
    Citizen.invokeNative('0xFEA3F7E83C0610FA', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x887DAD63CF5B7908 | Since: 2699
 */
export function playInventory(): void {
    PlaystatsInventory(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF8C54A461C3E11DC | Since: 323
 */
export function playJobActivityEnd(): [any, any, any, any] {
    return Citizen.invokeNative('0xF8C54A461C3E11DC');
}

/**
 * No comment provided
 * 
 * Hash: 0xF5BB8DAC426A52C0 | Since: 323
 */
export function playJobBend(): [any, any, any, any] {
    return PlaystatsJobBend();
}

/**
 * No comment provided
 * 
 * Hash: 0xA736CF7FB7C5BFF4 | Since: 323
 */
export function playJobLtsEnd(): [any, any, any, any] {
    return Citizen.invokeNative('0xA736CF7FB7C5BFF4');
}

/**
 * No comment provided
 * 
 * Hash: 0x14E0B2D1AD1044E0 | Since: 323
 */
export function playJobLtsRoundEnd(): [any, any, any, any] {
    return Citizen.invokeNative('0x14E0B2D1AD1044E0');
}

/**
 * No comment provided
 * 
 * Hash: 0xC5BE134EC7BA96A0 | Since: 323
 */
export function playLeaveJobChain(): void {
    PlaystatsLeaveJobChain(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x810B5FCC52EC7FF0 | Since: 1868
 */
export function playMasterControl(): void {
    Citizen.invokeNative('0x810B5FCC52EC7FF0', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBC80E22DED931E3D | Since: 323
 */
export function playMatchStarted(): void {
    PlaystatsMatchStarted(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8989CBD7B4E82534 | Since: 877
 */
export function playMcClubhouseActivity(): void {
    Citizen.invokeNative('0x8989CBD7B4E82534', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x03C2EEBB04B3FB72 | Since: 877
 */
export function playMcFormationEnds(): void {
    Citizen.invokeNative('0x03C2EEBB04B3FB72', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF534D94DFA2EAD26 | Since: 877
 */
export function playMcKilledRivalMcMember(): void {
    Citizen.invokeNative('0xF534D94DFA2EAD26', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCC25A4553DFBF9EA | Since: 877
 */
export function playMcRequestBike(): void {
    Citizen.invokeNative('0xCC25A4553DFBF9EA', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC14BD9F5337219B2 | Since: 1493
 */
export function playMinigameUsage(): void {
    Citizen.invokeNative('0xC14BD9F5337219B2', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC900596A63978C1D | Since: 323
 */
export function playMissionCheckpoint(): void {
    PlaystatsMissionCheckpoint(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF371CD2B64212FD | Since: 877
 */
export function playMissionEnded(): void {
    Citizen.invokeNative('0xBF371CD2B64212FD', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7C4BB33A8CED7324 | Since: 323
 */
export function playMissionOver(): void {
    PlaystatsMissionOver(undefined, undefined, undefined, false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC19A2925C34D2231 | Since: 323
 */
export function playMissionStarted(): void {
    PlaystatsMissionStarted(undefined, undefined, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC03FAB2C2F92289B | Since: 1868
 */
export function playMissionVote(): void {
    Citizen.invokeNative('0xC03FAB2C2F92289B', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x830C3A44EB3F2CF9 | Since: 1493
 */
export function playNightclubMissionEnded(): void {
    Citizen.invokeNative('0x830C3A44EB3F2CF9', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5CDAED54B34B0ED0 | Since: 1868
 */
export function playNjvsVote(): void {
    Citizen.invokeNative('0x5CDAED54B34B0ED0', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x93054C88E6AA7C44 | Since: 323
 */
export function playNpcInvite(): void {
    PlaystatsNpcInvite(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0077F15613D36993 | Since: 1868
 */
export function playNpcPhone(): any {
    return Citizen.invokeNative('0x0077F15613D36993');
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0x69DEA3E9DB727B4C | Since: 323
 */
export function playOddjobDone(totalTimeMs: number): void {
    PlaystatsOddjobDone(totalTimeMs, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9572BD4DD6B72122 | Since: 1180
 */
export function playPegasusAsPersonalAircraft(modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    PlaystatsPegasaircraft(modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x203B381133817079 | Since: 393
 */
export function playPimenuHideOptions(): any {
    return PlaystatsPiMenuHideSettings();
}

/**
 * No comment provided
 * 
 * Hash: 0xBA739D6D5A05D6E7 | Since: 323
 */
export function playPropChange(p0: number | IPed): void {
    const _p0 = p0 instanceof IPed ? p0.handle() : p0;
    PlaystatsPropChange(_p0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x90D0622866E80445 | Since: 323
 */
export function playQuickfixTool(element: number, item: string): void {
    PlaystatsQuickfixTool(element, item);
}

/**
 * No comment provided
 * 
 * Hash: 0x5BF29846C6527C54 | Since: 1868
 */
export function playQuitMode(): void {
    Citizen.invokeNative('0x5BF29846C6527C54', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9C375C315099DDE4 | Since: 323
 */
export function playRaceCheckpoint(p0: number | IVehicle): void {
    const _p0 = p0 instanceof IVehicle ? p0.handle() : p0;
    PlaystatsRaceCheckpoint(_p0, undefined, 0, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xADDD1C754E2E2914 | Since: 323
 */
export function playRaceToPointMissionDone(): void {
    PlaystatsRaceToPointMissionDone(0, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x71862B1D855F32E1 | Since: 323
 */
export function playRandomMissionDone(name: string): void {
    PlaystatsRandomMissionDone(name, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7F2DE41D102BFB4 | Since: 323
 */
export function playRankUp(rank: number): void {
    PlaystatsRankUp(rank);
}

/**
 * No comment provided
 * 
 * Hash: 0x04D90BA8207ADA2D | Since: 757
 */
export function playRecoverContrabandMission(): any {
    return PlaystatsRecoverContraband();
}

/**
 * No comment provided
 * 
 * Hash: 0x27AA1C973CACFE63 | Since: 944
 */
export function playRivalBehavior(): void {
    Citizen.invokeNative('0x27AA1C973CACFE63', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBBA55BE9AAAABF44 | Since: 2372
 */
export function playRobberyFinale(): void {
    PlaystatsRobberyFinale(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A67DFBF1F5C3835 | Since: 2372
 */
export function playRobberyPrep(): void {
    PlaystatsRobberyPrep(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x121FB4DDDC2D5291 | Since: 323
 */
export function playRosBet(amount: number, act: number, player: number | string | IPlayer, cm: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    PlaystatsRosBet(amount, act, _player, cm);
}

/**
 * No comment provided
 * 
 * Hash: 0xC729991A9065376E | Since: 757
 */
export function playSellContrabandMission(): any {
    return PlaystatsSellContraband();
}

/**
 * No comment provided
 * 
 * Hash: 0xD1032E482629049E | Since: 323
 */
export function playSetJoinType(joinType: number): void {
    PlaystatsSetJoinType(joinType);
}

/**
 * No comment provided
 * 
 * Hash: 0x176852ACAAC173D1 | Since: 323
 */
export function playShopItem(): void {
    PlaystatsShopItem(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x320C35147D5B5DDD | Since: 1180
 */
export function playSmugglerMissionEnded(): any {
    return PlaystatsSmugMissionEnded();
}

/**
 * No comment provided
 * 
 * Hash: 0xBE509B0A3693DE8B | Since: 757
 */
export function playSpentPiCustomLoadout(amount: number): void {
    PlaystatsSpentPiCustomLoadout(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x6731DE84A38BFAD0 | Since: 1604
 */
export function playSpinWheel(): void {
    PlaystatsSpectatorWheelSpin(0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x098760C7461724CD | Since: 323
 */
export function playStartedSessionInOfflinemode(): void {
    PlaystatsStartOfflineMode();
}

/**
 * Allows CEventNetworkStuntPerformed to be triggered.
 * 
 * Hash: 0x928DBFB892638EF3 | Since: 791
 */
export function playStartTrackingStunts(): void {
    PlaystatsStartTrackingStunts();
}

/**
 * No comment provided
 * 
 * Hash: 0x35E39E5570358630 | Since: 1493
 */
export function playStoneHatchetEnded(): any {
    return PlaystatsStoneHatchetEnd();
}

/**
 * Disallows CEventNetworkStuntPerformed to be triggered.
 * 
 * Hash: 0x8A800DACCC0DA55D | Since: 791
 */
export function playStopTrackingStunts(): void {
    PlaystatsStopTrackingStunts();
}

/**
 * No comment provided
 * 
 * Hash: 0xD4367D310F079DB0 | Since: 2189
 */
export function playSubWeap(): void {
    Citizen.invokeNative('0xD4367D310F079DB0', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A50D2604E05CB94 | Since: 877
 */
export function playSwitchMcEmblem(): void {
    PlaystatsChangeMcEmblem(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x35EEC6C2BC821A71 | Since: 1734
 */
export function playSwitchPassiveMode(): void {
    PlaystatsPassiveMode(false, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x10A691F5756416D0 | Since: 2944
 */
export function playVehDel(bossId1: number, bossId2: number, bossType: number, vehicleID: number, reason: number): void {
    Citizen.invokeNative('0x10A691F5756416D0', bossId1, bossId2, bossType, vehicleID, reason);
}

/**
 * No comment provided
 * 
 * Hash: 0x2D7A9B577E72385E | Since: 1493
 */
export function playWarehouseMissionEnded(): void {
    Citizen.invokeNative('0x2D7A9B577E72385E', undefined);
}

/**
 * This is a typo made by R*. It's supposed to be called PLAYSTATS_WEAPON_MOD_CHANGE.
 * 
 * Hash: 0xE95C8A1875A02CA4 | Since: 323
 */
export function playWeaponModeChange(weaponHash: number | string, componentHashTo: number | string, componentHashFrom: number | string): void {
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    if (typeof componentHashTo === 'string') componentHashTo = GetHashKey(componentHashTo)
    if (typeof componentHashFrom === 'string') componentHashFrom = GetHashKey(componentHashFrom)
    PlaystatsWeaponModeChange(weaponHash, componentHashTo, componentHashFrom);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDF24D535060F811 | Since: 323
 */
export function playWebsiteVisited(scaleformHash: number | string): void {
    if (typeof scaleformHash === 'string') scaleformHash = GetHashKey(scaleformHash)
    PlaystatsWebsiteVisited(scaleformHash, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x30A6614C1F7799B8 | Since: 323
 */
export function presenceEventUpdatestatFloat(statHash: number | string, value: number): void {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    PresenceEventUpdatestatFloat(statHash, value, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x11FF1C80276097ED | Since: 323
 */
export function presenceEventUpdatestatInt(statHash: number | string, value: number): void {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    PresenceEventUpdatestatInt(statHash, value, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x6483C25849031C4F | Since: 323
 */
export function presenceEventUpdatestatIntWithString(statHash: number | string, value: number, _string: string): void {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    Citizen.invokeNative('0x6483C25849031C4F', statHash, value, 0, _string);
}

/**
 * No comment provided
 * 
 * Hash: 0x7033EEFD9B28088E | Since: 678
 */
export function sendMetricGhostingToPlayer(): void {
    Citizen.invokeNative('0x7033EEFD9B28088E', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x015B03EE1C43E6EC | Since: 757
 */
export function sendMetricPunishBodyguard(): void {
    Citizen.invokeNative('0x015B03EE1C43E6EC', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA525DFF66BB82F5 | Since: 757
 */
export function sendMetricVipPoach(): void {
    Citizen.invokeNative('0xAA525DFF66BB82F5', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0D01D20616FC73FB | Since: 323
 */
export function setFreemodePrologueDone(characterSlot: number): void {
    Citizen.invokeNative('0x0D01D20616FC73FB', undefined, characterSlot);
}

/**
 * Sets profile setting 940 and 941
 * 
 * Hash: 0x79D310A861697CC9 | Since: 2699
 */
export function setFreemodeStrandProgressionStatus(profileSetting: number, settingValue: number): void {
    Citizen.invokeNative('0x79D310A861697CC9', profileSetting, settingValue);
}

/**
 * No comment provided
 * 
 * Hash: 0xC141B8917E0017EC | Since: 323
 */
export function setHasPostedAllVehiclesDriven(): void {
    Citizen.invokeNative('0xC141B8917E0017EC');
}

/**
 * Sets profile setting 866
 * 
 * Hash: 0xDAC073C7901F9E15 | Since: 323
 */
export function setHasSpecialeditionContent(value: number): void {
    SetHasContentUnlocksFlags(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x723C1CE13FBFDB67 | Since: 323
 */
export function setJobActivityIdStarted(characterSlot: number): void {
    Citizen.invokeNative('0x723C1CE13FBFDB67', undefined, characterSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0xDB8A58AEAA67CD07 | Since: 2545
 */
export function setPackedStatBoolCode(index: number, value: boolean, characterSlot: number): void {
    Citizen.invokeNative('0xDB8A58AEAA67CD07', index, value, characterSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x1581503AE529CD2E | Since: 2545
 */
export function setPackedStatIntCode(index: number, value: number, characterSlot: number): void {
    Citizen.invokeNative('0x1581503AE529CD2E', index, value, characterSlot);
}

/**
 * Sets profile setting 935
 * 
 * Hash: 0x55384438FC55AD8E | Since: 323
 */
export function setProfileSettingCreatorCtfDone(value: number): void {
    Citizen.invokeNative('0x55384438FC55AD8E', value);
}

/**
 * Sets profile setting 934
 * 
 * Hash: 0x38BAAA5DD4C9D19F | Since: 323
 */
export function setProfileSettingCreatorDmDone(value: number): void {
    Citizen.invokeNative('0x38BAAA5DD4C9D19F', value);
}

/**
 * Sets profile setting 933
 * 
 * Hash: 0xF1A1803D3476F215 | Since: 323
 */
export function setProfileSettingCreatorRacesDone(value: number): void {
    Citizen.invokeNative('0xF1A1803D3476F215', value);
}

/**
 * No comment provided
 * 
 * Hash: 0xB475F27C6A994D65 | Since: 323
 */
export function setProfileSettingPrologueComplete(): void {
    SetProfileSettingPrologueComplete();
}

/**
 * Sets profile setting 939
 * 
 * Hash: 0xC67E2DA1CBE759E2 | Since: 1734
 */
export function setProfileSettingSpChopMissionComplete(): void {
    Citizen.invokeNative('0xC67E2DA1CBE759E2');
}

/**
 * Sets profile setting 501
 * 
 * Hash: 0xF6792800AC95350D | Since: 323
 */
export function setSaveMigrationTransactionIdWarning(transactionId: number): void {
    SetSaveMigrationTransactionId(transactionId);
}

/**
 * No comment provided
 * 
 * Hash: 0x3EBEAC6C3F81F6BD | Since: 573
 */
export function startBeingBoss(): void {
    Citizen.invokeNative('0x3EBEAC6C3F81F6BD', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x96E6D5150DBF1C09 | Since: 573
 */
export function startBeingGoon(): void {
    Citizen.invokeNative('0x96E6D5150DBF1C09', undefined, undefined, undefined);
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0xC01D2470F22CDE5A | Since: 2372
 */
export function completedCharacterCreation(): void {
    Citizen.invokeNative('0xC01D2470F22CDE5A', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9B4BD21D69B1E609 | Since: 323
 */
export function statClearDirtyReadDetected(): void {
    Citizen.invokeNative('0x9B4BD21D69B1E609');
}

/**
 * No comment provided
 * 
 * Hash: 0xA8733668D1047B51 | Since: 323
 */
export function statClearPendingSaves(): void {
    Citizen.invokeNative('0xA8733668D1047B51', undefined);
}

/**
 * Example:
 * 
 * for (v_2 = 0; v_2 <= 4; v_2 += 1) {
 * `STATS::STAT_CLEAR_SLOT_FOR_RELOAD(v_2);`
 * }
 * 
 * Hash: 0xEB0A72181D4AA4AD | Since: 323
 */
export function statClearSlotForReload(statSlot: number): boolean {
    return StatClearSlotForReload(statSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x7F2C4CDF2E82DF4C | Since: 323
 */
export function statCloudSlotLoadFailed(): boolean {
    return Citizen.invokeNative('0x7F2C4CDF2E82DF4C', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE496A53BA5F50A56 | Since: 323
 */
export function statCloudSlotLoadFailedCode(): number {
    return Citizen.invokeNative('0xE496A53BA5F50A56', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7E6946F68A38B74F | Since: 323
 */
export function statCloudSlotSaveFailed(): boolean {
    return Citizen.invokeNative('0x7E6946F68A38B74F', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBED9F5693F34ED17 | Since: 323
 */
export function statCommunityGetHistory(statName: number | string): [boolean, number] {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return Citizen.invokeNative('0xBED9F5693F34ED17', statName, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A556B229A169402 | Since: 323
 */
export function statCommunityStartSynch(): boolean {
    return Citizen.invokeNative('0x5A556B229A169402');
}

/**
 * No comment provided
 * 
 * Hash: 0xB1D2BB1E1631F5B1 | Since: 323
 */
export function statCommunitySynchIsPending(): boolean {
    return Citizen.invokeNative('0xB1D2BB1E1631F5B1');
}

/**
 * p0 is characterSlot? seems range from 0 to 2
 * 
 * Hash: 0x49A49BED12794D70 | Since: 323
 */
export function statDeleteSlot(): boolean {
    return StatDeleteSlot(0);
}

/**
 * Prevents updates to CStatsMgr (e.g., STAT_SET_* natives)
 * 
 * Hash: 0x629526ABA383BCAA | Since: 323
 */
export function statDisableTracking(): void {
    Citizen.invokeNative('0x629526ABA383BCAA');
}

/**
 * No comment provided
 * 
 * Hash: 0x98E2BC1CA26287C3 | Since: 323
 */
export function statEnableTracking(): void {
    Citizen.invokeNative('0x98E2BC1CA26287C3');
}

/**
 * No comment provided
 * 
 * Hash: 0x6A7F19756F1A9016 | Since: 2060
 */
export function statGetBlockSaves(): boolean {
    return Citizen.invokeNative('0x6A7F19756F1A9016');
}

/**
 * No comment provided
 * 
 * Hash: 0x11B5E6D2AE73F48E | Since: 323
 */
export function statGetBool(statHash: number | string): [boolean, boolean] {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return StatGetBool(statHash, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x567384DFA67029E6 | Since: 323
 */
export function statGetCancelSaveMigrationStatus(): number {
    return StatGetCancelSaveMigrationStatus();
}

/**
 * Fly low to the ground for the longest distance
 * 
 * Hash: 0x6E0A5253375C4584 | Since: 463
 */
export function statGetChallengeFlyingDist(): number {
    return Citizen.invokeNative('0x6E0A5253375C4584');
}

/**
 * Drive the furthest distance in a land vehicle without crashing
 * 
 * Hash: 0xBA9749CC94C1FD85 | Since: 463
 */
export function statGetCurrentDriveNocrashDistance(): number {
    return Citizen.invokeNative('0xBA9749CC94C1FD85');
}

/**
 * Reverse the longest distance without crashing
 * 
 * Hash: 0x32CAC93C9DE73D32 | Since: 463
 */
export function statGetCurrentDrivingReverseDistance(): number {
    return Citizen.invokeNative('0x32CAC93C9DE73D32');
}

/**
 * Perform the longest stoppie on a motorcycle
 * 
 * Hash: 0x84A810B375E69C0E | Since: 463
 */
export function statGetCurrentFrontWheelDistance(): number {
    return Citizen.invokeNative('0x84A810B375E69C0E');
}

/**
 * Perform the longest jump in a land vehicle
 * 
 * Hash: 0x9EC8858184CD253A | Since: 463
 */
export function statGetCurrentJumpDistance(): number {
    return Citizen.invokeNative('0x9EC8858184CD253A');
}

/**
 * Perform the most near misses with other vehicles in a land vehicle without crashing
 * 
 * Hash: 0xE8853FBCE7D8D0D6 | Since: 463
 */
export function statGetCurrentNearMissNocrashPrecise(): number {
    return Citizen.invokeNative('0xE8853FBCE7D8D0D6');
}

/**
 * Perform the longest wheelie on a motorcycle
 * 
 * Hash: 0xA943FD1722E11EFD | Since: 463
 */
export function statGetCurrentRearWheelDistance(): number {
    return Citizen.invokeNative('0xA943FD1722E11EFD');
}

/**
 * Fall the longest distance with a parachute before opening it
 * 
 * Hash: 0xAFF47709F1D5DCCE | Since: 463
 */
export function statGetCurrentSkydivingDistance(): number {
    return Citizen.invokeNative('0xAFF47709F1D5DCCE');
}

/**
 * Achieve the highest speed in a land vehicle
 * 
 * Hash: 0x55A8BECAF28A4EB7 | Since: 463
 */
export function statGetCurrentSpeed(): number {
    return Citizen.invokeNative('0x55A8BECAF28A4EB7');
}

/**
 * p3 is probably characterSlot or BOOL save, always -1
 * 
 * Hash: 0x8B0FACEFC36C824B | Since: 323
 */
export function statGetDate(statHash: number | string, numFields: number): [boolean, any] {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return StatGetDate(statHash, numFields, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD7AE6C9C9C6AC54C | Since: 323
 */
export function statGetFloat(statHash: number | string): [boolean, number] {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return StatGetFloat(statHash, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A8EA222F9C67DBB | Since: 463
 */
export function statGetFlyingAltitude(): [boolean, number] {
    return Citizen.invokeNative('0x1A8EA222F9C67DBB');
}

/**
 * p2 appears to always be -1
 * 
 * 
 * Hash: 0x767FBC2AC802EF3D | Since: 323
 */
export function statGetInt(statHash: number | string): [boolean, number] {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return StatGetInt(statHash, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x5473D4195058B2E4 | Since: 323
 */
export function statGetLicensePlate(statName: number | string): string {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatGetLicensePlate(statName);
}

/**
 * No comment provided
 * 
 * Hash: 0xC0E0D686DDFC6EAE | Since: 323
 */
export function statGetLoadSafeToProgressToMpFromSp(): boolean {
    return Citizen.invokeNative('0xC0E0D686DDFC6EAE');
}

/**
 * p4 is probably characterSlot or BOOL save
 * 
 * Hash: 0x655185A06D9EEAAB | Since: 323
 */
export function statGetMaskedInt(statHash: number | string): [boolean, number] {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return StatGetMaskedInt(statHash, 0, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0E854F5280FB769 | Since: 323
 */
export function statGetNumberOfDays(statName: number | string): number {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatGetNumberOfDays(statName);
}

/**
 * No comment provided
 * 
 * Hash: 0xF2D4B2FE415AAFC3 | Since: 323
 */
export function statGetNumberOfHours(statName: number | string): number {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatGetNumberOfHours(statName);
}

/**
 * No comment provided
 * 
 * Hash: 0x7583B4BE4C5A41B5 | Since: 323
 */
export function statGetNumberOfMinutes(statName: number | string): number {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatGetNumberOfMinutes(statName);
}

/**
 * No comment provided
 * 
 * Hash: 0x2CE056FF3723F00B | Since: 323
 */
export function statGetNumberOfSeconds(statName: number | string): number {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatGetNumberOfSeconds(statName);
}

/**
 * p3 is probably characterSlot or BOOL save, always -1
 * 
 * Hash: 0x350F82CCB186AA1B | Since: 323
 */
export function statGetPos(statName: number | string): [boolean, number, number, number] {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatGetPos(statName, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF11F01D98113536A | Since: 463
 */
export function statGetRecordedValue(): [boolean, number] {
    return Citizen.invokeNative('0xF11F01D98113536A');
}

/**
 * No comment provided
 * 
 * Hash: 0xCE5AA445ABA8DEE0 | Since: 323
 */
export function statGetSaveMigrationConsumeContentStatus(): [number, number] {
    return StatGetSaveMigrationConsumeContentUnlockStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0x886913BBEACA68C1 | Since: 323
 */
export function statGetSaveMigrationStatus(): [number, any] {
    return StatGetSaveMigrationStatus();
}

/**
 * p1 is always -1 in the script files
 * 
 * Hash: 0xE50384ACC2C3DB74 | Since: 323
 */
export function statGetString(statHash: number | string): string {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return StatGetString(statHash, 0);
}

/**
 * Returns the rockstar ID (user id) value of a given stat. Returns "STAT_UNKNOWN" if the statHash is invalid or the stat has no userId
 * 
 * Hash: 0x2365C388E393BBE2 | Since: 323
 */
export function statGetUserId(statHash: number | string): string {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return StatGetUserId(statHash);
}

/**
 * Travel the furthest distance when bailing from a vehicle
 * 
 * Hash: 0x0B8B7F74BF061C6D | Since: 463
 */
export function statGetVehicleBailDistance(): number {
    return Citizen.invokeNative('0x0B8B7F74BF061C6D');
}

/**
 * No comment provided
 * 
 * Hash: 0x9B5A68C6489E9909 | Since: 323
 */
export function statIncrement(statName: number | string, value: number): void {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    StatIncrement(statName, value);
}

/**
 * Or non-flyable area
 * 
 * Hash: 0xF9F2922717B819EC | Since: 505
 */
export function statIsPlayerVehicleAboveOcean(): boolean {
    return Citizen.invokeNative('0xF9F2922717B819EC');
}

/**
 * No comment provided
 * 
 * Hash: 0x8B9CDBD6C566C38C | Since: 944
 */
export function statIsRecordingStat(): boolean {
    return Citizen.invokeNative('0x8B9CDBD6C566C38C');
}

/**
 * No comment provided
 * 
 * Hash: 0xBE3DB208333D9844 | Since: 463
 */
export function statIsTrackingEnabled(): boolean {
    return Citizen.invokeNative('0xBE3DB208333D9844');
}

/**
 * No comment provided
 * 
 * Hash: 0xA651443F437B1CE6 | Since: 323
 */
export function statLoad(statSlot: number): boolean {
    return StatLoad(statSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0xECB41AC6AB754401 | Since: 323
 */
export function statLoadDirtyReadDetected(): boolean {
    return Citizen.invokeNative('0xECB41AC6AB754401');
}

/**
 * No comment provided
 * 
 * Hash: 0xA1750FFAFA181661 | Since: 323
 */
export function statLoadPending(statSlot: number): boolean {
    return StatLoadPending(statSlot);
}

/**
 * p0 seems to range from 0 to 7
 * 
 * Hash: 0xA78B8FA58200DA56 | Since: 323
 */
export function statLocalResetAllOnlineCharacter(): void {
    Citizen.invokeNative('0xA78B8FA58200DA56', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C89FE2BDEB3F169 | Since: 323
 */
export function statMigrateCheckAlreadyDone(): boolean {
    return Citizen.invokeNative('0x4C89FE2BDEB3F169');
}

/**
 * No comment provided
 * 
 * Hash: 0x5BD5F255321C4AAF | Since: 323
 */
export function statMigrateCheckGetIsPlatformAvailable(): number {
    return Citizen.invokeNative('0x5BD5F255321C4AAF', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xDEAAF77EB3687E97 | Since: 323
 */
export function statMigrateCheckGetPlatformStatus(): [number, any] {
    return Citizen.invokeNative('0xDEAAF77EB3687E97', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xC6E0E2616A7576BB | Since: 323
 */
export function statMigrateCheckStart(): boolean {
    return Citizen.invokeNative('0xC6E0E2616A7576BB');
}

/**
 * No comment provided
 * 
 * Hash: 0xC847B43F369AC0B5 | Since: 323
 */
export function statMigrateClearForRestart(): void {
    Citizen.invokeNative('0xC847B43F369AC0B5');
}

/**
 * No comment provided
 * 
 * Hash: 0x9A62EC95AE10E011 | Since: 323
 */
export function statMigrateSavegameGetStatus(): number {
    return Citizen.invokeNative('0x9A62EC95AE10E011');
}

/**
 * platformName must be one of the following: ps3, xbox360, ps4, xboxone
 * 
 * Hash: 0xA5C80D8E768A9E66 | Since: 323
 */
export function statMigrateSavegameStart(platformName: string): boolean {
    return StatMigrateSave(platformName);
}

/**
 * No comment provided
 * 
 * Hash: 0x428EAF89E24F6C36 | Since: 323
 */
export function statNetworkIncrementOnSuicide(): void {
    LeaderboardsDeaths(undefined, 0);
}

/**
 * p0 seems to range from 0 to 7
 * 
 * Hash: 0x26D7399B9587FE89 | Since: 323
 */
export function statResetAllOnlineCharacter(): void {
    Citizen.invokeNative('0x26D7399B9587FE89', 0);
}

/**
 * This function is hard-coded to always return 1.
 * 
 * Hash: 0xB3DA2606774A8E2D | Since: 323
 */
export function statRollbackSaveMigration(): boolean {
    return Citizen.invokeNative('0xB3DA2606774A8E2D');
}

/**
 * No comment provided
 * 
 * Hash: 0xE07BCA305B82D2FD | Since: 323
 */
export function ave(): boolean {
    return StatSave(0, false, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x4FEF53183C3C6414 | Since: 323
 */
export function aveMigrationCancelPendingOperation(): boolean {
    return StatSaveMigrationCancel();
}

/**
 * No comment provided
 * 
 * Hash: 0x3270F67EED31FBC1 | Since: 323
 */
export function aveMigrationConsumeContent(contentId: number | string, srcPlatform: string, srcGamerHandle: string): boolean {
    if (typeof contentId === 'string') contentId = GetHashKey(contentId)
    return StatSaveMigrationConsumeContentUnlock(contentId, srcPlatform, srcGamerHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D3A583856F2C5AC | Since: 323
 */
export function avePending(): boolean {
    return StatSavePending();
}

/**
 * No comment provided
 * 
 * Hash: 0xBBB6AD006F1BBEA3 | Since: 323
 */
export function avePendingOrRequested(): boolean {
    return StatSavePendingOrRequested();
}

/**
 * No comment provided
 * 
 * Hash: 0xF434A10BA01C37D0 | Since: 323
 */
export function etBlockSaves(toggle: boolean): void {
    StatSetBlockSaves(toggle);
}

/**
 * Example:
 * `STATS::STAT_SET_BOOL(MISC::GET_HASH_KEY("MPPLY_MELEECHLENGECOMPLETED"), trur, true);`
 * 
 * Hash: 0x4B33C4243DE0C432 | Since: 323
 */
export function etBool(statName: number | string, value: boolean, save: boolean): boolean {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetBool(statName, value, save);
}

/**
 * No comment provided
 * 
 * Hash: 0x047CBED6F6F8B63C | Since: 323
 */
export function etCheatIsActive(): void {
    StatSetCheatIsActive();
}

/**
 * p1 always true.
 * 
 * Hash: 0xC2F84B7F9C4D0C61 | Since: 323
 */
export function etCurrentPosixTime(statName: number | string): boolean {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetCurrentPosixTime(statName, false);
}

/**
 * 'value' is a structure to a structure, 'numFields' is how many fields there are in said structure (usually 7).
 * 
 * The structure looks like this:
 * 
 * int year
 * int month
 * int day
 * int hour
 * int minute
 * int second
 * int millisecond
 * 
 * `The decompiled scripts use TIME::GET_POSIX_TIME to fill this structure.`
 * 
 * Hash: 0x2C29BFB64F4FCBE4 | Since: 323
 */
export function etDate(statName: number | string, numFields: number, save: boolean): [boolean, any] {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetDate(statName, numFields, save);
}

/**
 * Example:
 * `STATS::STAT_SET_FLOAT(MISC::GET_HASH_KEY("MP0_WEAPON_ACCURACY"), 66.6f, true);`
 * 
 * Hash: 0x4851997F37FE9B3C | Since: 323
 */
export function etFloat(statName: number | string, value: number, save: boolean): boolean {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetFloat(statName, value, save);
}

/**
 * The following values have been found in the decompiled scripts:
 * "RC_ABI1"
 * "RC_ABI2"
 * "RC_BA1"
 * "RC_BA2"
 * "RC_BA3"
 * "RC_BA3A"
 * "RC_BA3C"
 * "RC_BA4"
 * "RC_DRE1"
 * "RC_EPS1"
 * "RC_EPS2"
 * "RC_EPS3"
 * "RC_EPS4"
 * "RC_EPS5"
 * "RC_EPS6"
 * "RC_EPS7"
 * "RC_EPS8"
 * "RC_EXT1"
 * "RC_EXT2"
 * "RC_EXT3"
 * "RC_EXT4"
 * "RC_FAN1"
 * "RC_FAN2"
 * "RC_FAN3"
 * "RC_HAO1"
 * "RC_HUN1"
 * "RC_HUN2"
 * "RC_JOS1"
 * "RC_JOS2"
 * "RC_JOS3"
 * "RC_JOS4"
 * "RC_MAU1"
 * "RC_MIN1"
 * "RC_MIN2"
 * "RC_MIN3"
 * "RC_MRS1"
 * "RC_MRS2"
 * "RC_NI1"
 * "RC_NI1A"
 * "RC_NI1B"
 * "RC_NI1C"
 * "RC_NI1D"
 * "RC_NI2"
 * "RC_NI3"
 * "RC_OME1"
 * "RC_OME2"
 * "RC_PA1"
 * "RC_PA2"
 * "RC_PA3"
 * "RC_PA3A"
 * "RC_PA3B"
 * "RC_PA4"
 * "RC_RAM1"
 * "RC_RAM2"
 * "RC_RAM3"
 * "RC_RAM4"
 * "RC_RAM5"
 * "RC_SAS1"
 * "RC_TON1"
 * "RC_TON2"
 * "RC_TON3"
 * "RC_TON4"
 * "RC_TON5"
 * 
 * Hash: 0x17695002FD8B2AE0 | Since: 323
 */
export function etGxtLabel(statName: number | string, value: string, save: boolean): boolean {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetGxtLabel(statName, value, save);
}

/**
 * Example:
 * `STATS::STAT_SET_INT(MISC::GET_HASH_KEY("MPPLY_KILLS_PLAYERS"), 1337, true);`
 * 
 * Hash: 0xB3271D7AB655B441 | Since: 323
 */
export function etInt(statName: number | string, value: number, save: boolean): boolean {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetInt(statName, value, save);
}

/**
 * No comment provided
 * 
 * Hash: 0x69FF13266D7296DA | Since: 323
 */
export function etLicensePlate(statName: number | string, str: string): boolean {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetLicensePlate(statName, str);
}

/**
 * No comment provided
 * 
 * Hash: 0x7BBB1B54583ED410 | Since: 323
 */
export function etMaskedInt(statName: number | string, save: boolean): boolean {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetMaskedInt(statName, 0, 0, 0, save);
}

/**
 * No comment provided
 * 
 * Hash: 0x5688585E6D563CD8 | Since: 323
 */
export function etOpenSavetypeInJob(): void {
    Citizen.invokeNative('0x5688585E6D563CD8', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xDB283FDE680FE72E | Since: 323
 */
export function etPos(statName: number | string, pos: Vector3, save: boolean): boolean {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetPos(statName, pos.x, pos.y, pos.z, save);
}

/**
 * Does not take effect immediately, unfortunately.
 * 
 * profileSetting seems to only be 936, 937 and 938 in scripts
 * 
 * Hash: 0x68F01422BE1D838F | Since: 323
 */
export function etProfileSettingValue(profileSetting: number, value: number): void {
    StatSetProfileSettingValue(profileSetting, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xA87B2335D12531D7 | Since: 323
 */
export function etString(statName: number | string, value: string, save: boolean): boolean {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetString(statName, value, save);
}

/**
 * No comment provided
 * 
 * Hash: 0x8CDDF1E452BABE11 | Since: 323
 */
export function etUserId(statName: number | string, value: string, save: boolean): boolean {
    if (typeof statName === 'string') statName = GetHashKey(statName)
    return StatSetUserId(statName, value, save);
}

/**
 * No comment provided
 * 
 * Hash: 0x0D0A9F0E7BD91E3C | Since: 323
 */
export function lotIsLoaded(statSlot: number): boolean {
    return StatSlotIsLoaded(statSlot);
}

/**
 * enum StatTrackingType
 * {
 * LongestWheelie = 1,
 * LongestStoppie = 2,
 * NoCrashes = 3,
 * HighestSpeed = 4,
 * _MostFlips = 5,
 * _LongestSpin = 6,
 * _HighestJumpReached = 7,
 * LongestJump = 8,
 * _NearMissesNoCrash = 9,
 * LongestFallSurvived = 10,
 * LowestParachute = 11,
 * ReverseDriving = 12,
 * LongestFreefall = 13,
 * VehiclesStolen = 14,
 * _SomeCFireEventCount = 15,
 * _Unk16 = 16,
 * _LowFlyingTime = 17,
 * LowFlying = 18,
 * _InvertedFlyingTime = 19,
 * InvertedFlying = 20,
 * _PlaneSpinCount = 21,
 * MeleeKills = 22, // Players
 * _LongestSniperKill = 23,
 * SniperSkills = 24, // Players
 * DrivebyKills = 25, // Players
 * HeadshotKills = 26, // Players
 * LongestBail = 27,
 * _TotalRammedByCar = 28,
 * NearMissesPrecise = 29,
 * _FreefallTime = 30,
 * Unk31 = 31,
 * }
 * 
 * enum StatTrackingValueType
 * {
 * Total,
 * Max,
 * Min
 * }
 * 
 * Hash: 0x33D72899E24C3365 | Since: 463
 */
export function tartRecordStat(statType: number, valueType: number): boolean {
    return Citizen.invokeNative('0x33D72899E24C3365', statType, valueType);
}

/**
 * No comment provided
 * 
 * Hash: 0xA761D4AC6115623D | Since: 463
 */
export function topRecordStat(): boolean {
    return Citizen.invokeNative('0xA761D4AC6115623D');
}

/**
 * Returns stat hash based on dataType, statIndex/statId and characterSlot. Related to CStatsMpCharacterMappingData
 * 
 * Hash: 0xD69CE161FE614531 | Since: 2944
 */
export function getStatHashForCharacterStat(dataType: number, statIndex: number, charSlot: number): number {
    return Citizen.invokeNative('0xD69CE161FE614531', dataType, statIndex, charSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A23D1324F6B2BAC | Since: 2802
 */
export function playAcidMissionEnd(): void {
    Citizen.invokeNative('0x8A23D1324F6B2BAC', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEACCF0550FDC5BA | Since: 2802
 */
export function playAcidRnd(): void {
    Citizen.invokeNative('0xCEACCF0550FDC5BA', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5649CA22AF74E019 | Since: 3095
 */
export function playAlert(): any {
    return Citizen.invokeNative('0x5649CA22AF74E019');
}

/**
 * No comment provided
 * 
 * Hash: 0xBD642335A732F1A8 | Since: 2944
 */
export function playAttritionStageEnd(): void {
    Citizen.invokeNative('0xBD642335A732F1A8', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x72289B8C78B02962 | Since: 3717
 */
export function playCreatorEnd(): any {
    return Citizen.invokeNative('0x72289B8C78B02962');
}

/**
 * No comment provided
 * 
 * Hash: 0x01D8B04D02F1217F | Since: 3570
 */
export function playDeathInfo(victimPed: number | IPed, killerPed: number | IPed, mentalState: number, revengeKill: boolean, victimKvK: number, killerKvK: number): void {
    const _victimPed = victimPed instanceof IPed ? victimPed.handle() : victimPed;
    const _killerPed = killerPed instanceof IPed ? killerPed.handle() : killerPed;
    Citizen.invokeNative('0x01D8B04D02F1217F', _victimPed, _killerPed, mentalState, revengeKill, victimKvK, killerKvK);
}

/**
 * No comment provided
 * 
 * Hash: 0xCFB0E9C3456319EA | Since: 3258
 */
export function playFlowHigh(pos: Vector3, action: string): void {
    Citizen.invokeNative('0xCFB0E9C3456319EA', pos.x, pos.y, pos.z, action, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE6A27CDA42887F93 | Since: 2944
 */
export function playFlowLow(pos: Vector3, action: string): void {
    Citizen.invokeNative('0xE6A27CDA42887F93', pos.x, pos.y, pos.z, action, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xC4493521BAA12CCE | Since: 3095
 */
export function playFlowMedium(pos: Vector3, action: string): void {
    Citizen.invokeNative('0xC4493521BAA12CCE', pos.x, pos.y, pos.z, action, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xEC9553A178E8F1D1 | Since: 2802
 */
export function playIdle(): void {
    Citizen.invokeNative('0xEC9553A178E8F1D1', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7E5EED10B11CEDBA | Since: 3407
 */
export function playInitMultiplayer(): void {
    Citizen.invokeNative('0x7E5EED10B11CEDBA', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4649D80CE1A35BA1 | Since: 3717
 */
export function playLobbyExit(): any {
    return Citizen.invokeNative('0x4649D80CE1A35BA1');
}

/**
 * No comment provided
 * 
 * Hash: 0xDC00BB9C27347A8F | Since: 3717
 */
export function playLobbyStarted(): any {
    return Citizen.invokeNative('0xDC00BB9C27347A8F');
}

/**
 * Known text types: NAME_YACHT, NAME_ORG_OFFICE
 * 
 * Hash: 0xAA434D7D0A89A95C | Since: 3258
 */
export function playNamedUserContent(isBoss: boolean, bossType: number, bossId1: number, bossId2: number, textType: number, textString: string, textSource: number): void {
    Citizen.invokeNative('0xAA434D7D0A89A95C', isBoss, bossType, bossId1, bossId2, textType, textString, textSource);
}

/**
 * No comment provided
 * 
 * Hash: 0xE6D323A5E9EFFB76 | Since: 3258
 */
export function playPimenuNav(): any {
    return Citizen.invokeNative('0xE6D323A5E9EFFB76');
}

/**
 * No comment provided
 * 
 * Hash: 0x48FAC5DC7AC6EA99 | Since: 2802
 */
export function playPlayerStyle(): void {
    Citizen.invokeNative('0x48FAC5DC7AC6EA99', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7EA06F970F999394 | Since: 2944
 */
export function playRandomEvent(): void {
    Citizen.invokeNative('0x7EA06F970F999394', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBEB0D930B3CCE4D5 | Since: 3258
 */
export function playRecoverVehicle(): any {
    return Citizen.invokeNative('0xBEB0D930B3CCE4D5');
}

/**
 * No comment provided
 * 
 * Hash: 0x574A7808450E141C | Since: 3570
 */
export function playScriptEventFpom(): any {
    return Citizen.invokeNative('0x574A7808450E141C');
}

/**
 * No comment provided
 * 
 * Hash: 0xF96E9EA876D9DC92 | Since: 2802
 */
export function playShopmenuNav(): void {
    Citizen.invokeNative('0xF96E9EA876D9DC92', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x961D4157B9B428DB | Since: 2944
 */
export function playShowroomNav(entity: number | string): void {
    if (typeof entity === 'string') entity = GetHashKey(entity)
    Citizen.invokeNative('0x961D4157B9B428DB', undefined, undefined, entity);
}

/**
 * Data struct contains various tunables related to test drives at Simeons Showroom or Luxury Showcase.
 * 
 * Hash: 0x151D6C04C9E2742F | Since: 2944
 */
export function playShowroomOverview(): any {
    return Citizen.invokeNative('0x151D6C04C9E2742F');
}

