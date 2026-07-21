import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0xD45B1FFCCD52FF19 | Since: unknown
 */
export function activateDamageTrackerOnId(netID: number, toggle: boolean): void {
    ActivateDamageTrackerOnNetworkId(netID, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBEC0816FF5ACBCDA | Since: unknown
 */
export function activateDamageTrackerOnPlayer(player: number | string | IPlayer, toggle: boolean): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    ActivateDamageTrackerOnPlayer(_player, toggle);
}

/**
 * Getter for SET_NETWORK_CUTSCENE_ENTITIES.
 * 
 * Hash: 0x66D6A5E9C511214A | Since: unknown
 */
export function areCutsceneEntitiesed(): boolean {
    return NetworkAreCutsceneEntities();
}

/**
 * No comment provided
 * 
 * Hash: 0xEC5E3AF5289DCA81 | Since: unknown
 */
export function badSportPlayerLeftDetected(event: number, amountReceived: number): [boolean, any] {
    return BadSportPlayerLeftDetected(event, amountReceived);
}

/**
 * No comment provided
 * 
 * Hash: 0xE16AA70CE9BEEDC3 | Since: unknown
 */
export function canRegisterMissionDoors(): boolean {
    return Citizen.invokeNative('0xE16AA70CE9BEEDC3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x69778E7564BADE6D | Since: unknown
 */
export function canRegisterMissionEntities(ped_amt: number, vehicle_amt: number, object_amt: number, pickup_amt: number): boolean {
    return CanRegisterMissionEntities(ped_amt, vehicle_amt, object_amt, pickup_amt);
}

/**
 * No comment provided
 * 
 * Hash: 0x800DD4721A8B008B | Since: unknown
 */
export function canRegisterMissionObjects(amount: number): boolean {
    return CanRegisterMissionObjects(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xBCBF4FEF9FA5D781 | Since: unknown
 */
export function canRegisterMissionPeds(amount: number): boolean {
    return CanRegisterMissionPeds(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A49D1CB6E34AF72 | Since: unknown
 */
export function canRegisterMissionPickups(amount: number): boolean {
    return CanRegisterMissionPickups(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x7277F1F2E085EE74 | Since: unknown
 */
export function canRegisterMissionVehicles(amount: number): boolean {
    return CanRegisterMissionVehicles(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF7B00C05D66667C | Since: unknown
 */
export function checkoutCommerceProduct(productID: string, location: number, launchLandingPageOnClose: boolean): void {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0xBF7B00C05D66667C)'); return;
    Citizen.invokeNative('0xBF7B00C05D66667C', productID, location, launchLandingPageOnClose);
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0x966DD84FB6A46017 | Since: unknown
 */
export function clearServiceEventArguments(): void {
    ClearLaunchParams();
}

/**
 * Downloads prod.cloud.rockstargames.com/titles/gta5/[platform]/check.json
 * 
 * Hash: 0x4F18196C8D38768D | Since: unknown
 */
export function cloudCheckAvailability(): void {
    CloudCheckAvailability();
}

/**
 * No comment provided
 * 
 * Hash: 0xC64DED7EF0D2FE37 | Since: unknown
 */
export function cloudDeleteMemberFile(): number {
    return CloudDeleteMemberFile(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A3D5568AF297CD5 | Since: unknown
 */
export function cloudDidRequestSucceed(requestId: number): boolean {
    return CloudDidRequestSucceed(requestId);
}

/**
 * No comment provided
 * 
 * Hash: 0x0B0CC10720653F3B | Since: unknown
 */
export function cloudGetAvailabilityCheckResult(): boolean {
    return CloudGetAvailabilityCheckResult();
}

/**
 * No comment provided
 * 
 * Hash: 0x4C61B39930D045DA | Since: unknown
 */
export function cloudHasRequestCompleted(requestId: number): boolean {
    return CloudHasRequestCompleted(requestId);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7ABAC5DE675EE3B | Since: unknown
 */
export function cloudIsCheckingAvailability(): boolean {
    return CloudIsCheckingAvailability();
}

/**
 * Takes the specified time and writes it to the structure specified in the second argument.
 * 
 * struct date_time
 * {
 * int year;
 * int PADDING1;
 * int month;
 * int PADDING2;
 * int day;
 * int PADDING3;
 * int hour;
 * int PADDING4;
 * int minute;
 * int PADDING5;
 * int second;
 * int PADDING6;
 * };
 * 
 * Hash: 0xAC97AF97FA68E5D5 | Since: unknown
 */
export function convertPosixTime(posixTime: number): any {
    return ConvertPosixTime(posixTime);
}

/**
 * No comment provided
 * 
 * Hash: 0x265635150FB0D82E | Since: unknown
 */
export function delayMpStoreOpen(): void {
    Citizen.invokeNative('0x265635150FB0D82E');
}

/**
 * No comment provided
 * 
 * Hash: 0x43865688AE10F0D7 | Since: unknown
 */
export function facebookCanPostToFacebook(): boolean {
    return FacebookIsAvailable();
}

/**
 * No comment provided
 * 
 * Hash: 0xA75E2B6733DA5142 | Since: unknown
 */
export function facebookDidPostSucceed(): boolean {
    return FacebookDoUnkCheck();
}

/**
 * No comment provided
 * 
 * Hash: 0x62B9FEC9A11F10EF | Since: unknown
 */
export function facebookHasPostCompleted(): boolean {
    return FacebookIsSendingData();
}

/**
 * No comment provided
 * 
 * Hash: 0x098AB65B9ED9A9EC | Since: unknown
 */
export function facebookPostCompletedHeist(heistName: string, cashEarned: number, xpEarned: number): boolean {
    return FacebookSetHeistComplete(heistName, cashEarned, xpEarned);
}

/**
 * No comment provided
 * 
 * Hash: 0x0AE1F1653B554AB9 | Since: unknown
 */
export function facebookPostCompletedMilestone(milestoneId: number): boolean {
    return FacebookSetMilestoneComplete(milestoneId);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC48473142545431 | Since: unknown
 */
export function facebookPostCreateCharacter(): boolean {
    return FacebookSetCreateCharacterComplete();
}

/**
 * Hardcoded to not work in SP.
 * 
 * Hash: 0x416DBD4CD6ED8DD2 | Since: unknown
 */
export function fadeOutLocalPlayer(): void {
    FadeOutLocalPlayer(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xCBBD7C4991B64809 | Since: unknown
 */
export function filloutPmPlayerList(): [boolean, any] {
    return FilloutPmPlayerList(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x716B6DB9D1886106 | Since: unknown
 */
export function filloutPmPlayerListWithNames(): [boolean, any, any] {
    return FilloutPmPlayerListWithNames(undefined, undefined);
}

/**
 * Returns POSIX timestamp, an int representing the cloud time.
 * 
 * Hash: 0x9A73240B49945C76 | Since: unknown
 */
export function getCloudTimeAsInt(): number {
    return GetCloudTimeAsInt();
}

/**
 * Same as GET_CLOUD_TIME_AS_INT but returns the value as a hex string (%I64X).
 * 
 * Hash: 0xF12E6CD06C73D69E | Since: unknown
 */
export function getCloudTimeAsString(): string {
    return GetCloudTimeAsString();
}

/**
 * index2 is unused
 * 
 * Hash: 0x6F44CBF56D79FAC0 | Since: unknown
 */
export function getCommerceItemCat(index: number, index2: number): string {
    return GetCommerceItemCat(index, index2);
}

/**
 * No comment provided
 * 
 * Hash: 0x662635855957C411 | Since: unknown
 */
export function getCommerceItemId(index: number): string {
    return GetCommerceItemId(index);
}

/**
 * No comment provided
 * 
 * Hash: 0xB4271092CA7EDF48 | Since: unknown
 */
export function getCommerceItemName(index: number): string {
    return GetCommerceItemName(index);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A7776C709904AB0 | Since: unknown
 */
export function getCommerceItemNumCats(index: number): number {
    return GetCommerceItemNumCats(index);
}

/**
 * No comment provided
 * 
 * Hash: 0x722F5D28B61C5EA8 | Since: unknown
 */
export function getCommerceItemTexturename(index: number): string {
    return GetCommerceItemTexturename(index);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA94551B50B4932C | Since: unknown
 */
export function getCommerceProductPrice(index: number): string {
    return GetCommerceProductPrice(index);
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0x8B0C2964BA471961 | Since: unknown
 */
export function getContentToLoadType(): number {
    return Citizen.invokeNative('0x8B0C2964BA471961');
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0x88B588B41FF7868E | Since: unknown
 */
export function getIsLaunchFromLiveArea(): boolean {
    return Citizen.invokeNative('0x88B588B41FF7868E');
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0x67FC09BC554A75E5 | Since: unknown
 */
export function getIsLiveAreaLaunchWithContent(): boolean {
    return Citizen.invokeNative('0x67FC09BC554A75E5');
}

/**
 * No comment provided
 * 
 * Hash: 0xC7BE335216B5EC7C | Since: unknown
 */
export function getMaxNumObjects(): number {
    return GetMaxNumNetworkObjects();
}

/**
 * No comment provided
 * 
 * Hash: 0x0C1F7D49C39D2289 | Since: unknown
 */
export function getMaxNumPeds(): number {
    return GetMaxNumNetworkPeds();
}

/**
 * No comment provided
 * 
 * Hash: 0xA72835064DD63E4C | Since: unknown
 */
export function getMaxNumPickups(): number {
    return GetMaxNumNetworkPickups();
}

/**
 * No comment provided
 * 
 * Hash: 0x0AFCE529F69B21FF | Since: unknown
 */
export function getMaxNumVehicles(): number {
    return GetMaxNumNetworkVehicles();
}

/**
 * No comment provided
 * 
 * Hash: 0x7A5487FE9FAA6B48 | Since: unknown
 */
export function getTime(): number {
    return GetNetworkTime();
}

/**
 * Returns the same value as GET_NETWORK_TIME in freemode, but as opposed to `GET_NETWORK_TIME` it always gets the most recent time, instead of once per tick.
 * Could be used for benchmarking since it can return times in ticks.
 * 
 * Hash: 0x89023FBBF9200E9F | Since: unknown
 */
export function getTimeAccurate(): number {
    return GetNetworkTimeAccurate();
}

/**
 * No comment provided
 * 
 * Hash: 0xF2EAC213D5EA0623 | Since: unknown
 */
export function getNumCommerceItems(): number {
    return GetNumCommerceItems();
}

/**
 * No comment provided
 * 
 * Hash: 0x12B6281B6C6706C0 | Since: unknown
 */
export function getNumCreatedMissionObjects(): number {
    return GetNumCreatedMissionObjects(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xCB215C4B56A7FAE7 | Since: unknown
 */
export function getNumCreatedMissionPeds(): number {
    return GetNumCreatedMissionPeds(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CD9AB83489430EA | Since: unknown
 */
export function getNumCreatedMissionVehicles(): number {
    return GetNumCreatedMissionVehicles(false);
}

/**
 * p0 appears to be for MP
 * 
 * Hash: 0xAA81B5F10BC43AC2 | Since: unknown
 */
export function getNumReservedMissionObjects(): number {
    return GetNumReservedMissionObjects(false, undefined);
}

/**
 * p0 appears to be for MP
 * 
 * Hash: 0x1F13D5AE5CB17E17 | Since: unknown
 */
export function getNumReservedMissionPeds(): number {
    return GetNumReservedMissionPeds(false, undefined);
}

/**
 * p0 appears to be for MP
 * 
 * Hash: 0xCF3A965906452031 | Since: unknown
 */
export function getNumReservedMissionVehicles(): number {
    return GetNumReservedMissionVehicles(false, undefined);
}

/**
 * Online version is defined here: update\update.rpf\common\data\version.txt
 * 
 * Example:
 * 
 * [ONLINE_VERSION_NUMBER]
 * 1.33
 * 
 * _GET_ONLINE_VERSION() will return "1.33"
 * 
 * Hash: 0xFCA9373EF340AC0A | Since: unknown
 */
export function getOnlineVersion(): string {
    return GetOnlineVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0xE42D626EEC94E5D9 | Since: unknown
 */
export function getReservedMissionEntitiesInArea(pos: Vector3): [any, any, any] {
    return Citizen.invokeNative('0xE42D626EEC94E5D9', pos.x, pos.y, pos.z, undefined);
}

/**
 * 0 = succeeded
 * 1 = pending
 * 2 = failed
 * 
 * Hash: 0x8BD6C6DEA20E82C6 | Since: unknown
 */
export function getStatusOfTextureDownload(): number {
    return GetStatusOfTextureDownload(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x9E23B1777A927DAD | Since: unknown
 */
export function getTimeAsString(time: number): string {
    return GetTimeAsString(time);
}

/**
 * Subtracts the second argument from the first.
 * 
 * Hash: 0xA2C6FC031D46FFF0 | Since: unknown
 */
export function getTimeDifference(timeA: number, timeB: number): number {
    return GetTimeDifference(timeA, timeB);
}

/**
 * Adds the first argument to the second.
 * 
 * Hash: 0x017008CCDAD48503 | Since: unknown
 */
export function getTimeOffset(timeA: number, timeB: number): number {
    return GetTimeOffset(timeA, timeB);
}

/**
 * Checks some commerce stuff
 * 
 * Hash: 0x754615490A029508 | Since: unknown
 */
export function getUserPremiumAccess(): number {
    return Citizen.invokeNative('0x754615490A029508');
}

/**
 * Checks some commerce stuff
 * 
 * Hash: 0x155467ACA0F55705 | Since: unknown
 */
export function getUserStarterAccess(): number {
    return Citizen.invokeNative('0x155467ACA0F55705');
}

/**
 * No comment provided
 * 
 * Hash: 0x46718ACEEDEAFC84 | Since: unknown
 */
export function hasTimeStarted(): boolean {
    return HasNetworkTimeStarted();
}

/**
 * No comment provided
 * 
 * Hash: 0x1D4DC17C38FEAFF0 | Since: unknown
 */
export function isCommerceDataFetchInProgress(): boolean {
    return Citizen.invokeNative('0x1D4DC17C38FEAFF0');
}

/**
 * No comment provided
 * 
 * Hash: 0xEA14EEF5B7CD2C30 | Since: unknown
 */
export function isCommerceDataValid(): boolean {
    return IsCommerceDataValid();
}

/**
 * No comment provided
 * 
 * Hash: 0x2EAC52B4019E2782 | Since: unknown
 */
export function isCommerceStoreOpen(): boolean {
    return IsCommerceStoreOpen();
}

/**
 * No comment provided
 * 
 * Hash: 0x6E192E33AD436366 | Since: unknown
 */
export function isDamageTrackerActiveOnId(netID: number): boolean {
    return IsDamageTrackerActiveOnNetworkId(netID);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2092A1EAA7FD45F | Since: unknown
 */
export function isDamageTrackerActiveOnPlayer(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return IsDamageTrackerActiveOnPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x21D04D7BC538C146 | Since: unknown
 */
export function isEntityAGhost(entity: number | IEntity): boolean {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return IsEntityGhostedToLocalPlayer(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x7EF7649B64D7FF10 | Since: unknown
 */
export function isEntityInGhostCollision(entity: number | IEntity): boolean {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return Citizen.invokeNative('0x7EF7649B64D7FF10', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xA1607996431332DF | Since: unknown
 */
export function isIdOwnedByParticipant(netId: number): boolean {
    return IsNetworkIdOwnedByParticipant(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0xDD7CEF5B3A4DA8A6 | Since: unknown
 */
export function isVehicleRunningRespotTimer(networkID: number): boolean {
    return Citizen.invokeNative('0xDD7CEF5B3A4DA8A6', networkID);
}

/**
 * No comment provided
 * 
 * Hash: 0x28123C8B056CC8AA | Since: unknown
 */
export function isObjectReassignmentInProgress(): boolean {
    return Citizen.invokeNative('0x28123C8B056CC8AA');
}

/**
 * No comment provided
 * 
 * Hash: 0xE73092F4157CD126 | Since: unknown
 */
export function isPlayerInCutscene(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return IsPlayerInCutscene(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xD82CF8E64C8729D8 | Since: unknown
 */
export function isSphereVisibleToAnotherMachine(): boolean {
    return IsSphereVisibleToAnotherMachine(0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC3A310219E5DA62 | Since: unknown
 */
export function isSphereVisibleToPlayer(): boolean {
    return IsSphereVisibleToPlayer(undefined, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x883D79C4071E18B3 | Since: unknown
 */
export function isStoreAvailableToUser(): boolean {
    return IsStoreAvailableToUser();
}

/**
 * Returns true if the two times are equal; otherwise returns false.
 * 
 * Hash: 0xF5BC95857BD6D512 | Since: unknown
 */
export function isTimeEqualTo(timeA: number, timeB: number): boolean {
    return IsTimeEqualTo(timeA, timeB);
}

/**
 * Subtracts the second argument from the first, then returns whether the result is negative.
 * 
 * Hash: 0xCB2CF5148012C8D0 | Since: unknown
 */
export function isTimeLessThan(timeA: number, timeB: number): boolean {
    return IsTimeLessThan(timeA, timeB);
}

/**
 * Subtracts the first argument from the second, then returns whether the result is negative.
 * 
 * Hash: 0xDE350F8651E4346C | Since: unknown
 */
export function isTimeMoreThan(timeA: number, timeB: number): boolean {
    return IsTimeMoreThan(timeA, timeB);
}

/**
 * No comment provided
 * 
 * Hash: 0x59328EB08C5CEB2B | Since: unknown
 */
export function isUserOldEnoughToAccessStore(): boolean {
    return Citizen.invokeNative('0x59328EB08C5CEB2B');
}

/**
 * No comment provided
 * 
 * Hash: 0xFA91550DF9318B22 | Since: unknown
 */
export function acceptPresenceInvite(): boolean {
    return NetworkAcceptPresenceInvite(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA6A47A573ABB75A | Since: unknown
 */
export function accessTunableBool(tunableContext: string, tunableName: string): boolean {
    return NetworkAccessTunableBool(tunableContext, tunableName);
}

/**
 * No comment provided
 * 
 * Hash: 0xEA16B69D93D71A45 | Since: unknown
 */
export function accessTunableBoolHash(tunableContext: number | string, tunableName: number | string): boolean {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkAccessTunableBoolHash(tunableContext, tunableName);
}

/**
 * No comment provided
 * 
 * Hash: 0x697F508861875B42 | Since: unknown
 */
export function accessTunableBoolModificationDetectionRegistrationHash(contextHash: number | string, nameHash: number | string): [boolean, boolean] {
    if (typeof contextHash === 'string') contextHash = GetHashKey(contextHash)
    if (typeof nameHash === 'string') nameHash = GetHashKey(nameHash)
    return NetworkRegisterTunableBoolHash(contextHash, nameHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5608CA7BC163A5F | Since: unknown
 */
export function accessTunableFloat(tunableContext: string, tunableName: string): [boolean, number] {
    return NetworkAccessTunableFloat(tunableContext, tunableName);
}

/**
 * No comment provided
 * 
 * Hash: 0x972BC203BBC4C4D5 | Since: unknown
 */
export function accessTunableFloatHash(tunableContext: number | string, tunableName: number | string): [boolean, number] {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkAccessTunableFloatHash(tunableContext, tunableName);
}

/**
 * No comment provided
 * 
 * Hash: 0x1950DAE9848A4739 | Since: unknown
 */
export function accessTunableFloatModificationDetectionRegistrationHash(contextHash: number | string, nameHash: number | string): [boolean, number] {
    if (typeof contextHash === 'string') contextHash = GetHashKey(contextHash)
    if (typeof nameHash === 'string') nameHash = GetHashKey(nameHash)
    return NetworkRegisterTunableFloatHash(contextHash, nameHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x8BE1146DFD5D4468 | Since: unknown
 */
export function accessTunableInt(tunableContext: string, tunableName: string): [boolean, number] {
    return NetworkAccessTunableInt(tunableContext, tunableName);
}

/**
 * No comment provided
 * 
 * Hash: 0x40FCE03E50E8DBE8 | Since: unknown
 */
export function accessTunableIntHash(tunableContext: number | string, tunableName: number | string): [boolean, number] {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkAccessTunableIntHash(tunableContext, tunableName);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A8B55FDA4C8DDEF | Since: unknown
 */
export function accessTunableIntModificationDetectionRegistrationHash(contextHash: number | string, nameHash: number | string): [boolean, number] {
    if (typeof contextHash === 'string') contextHash = GetHashKey(contextHash)
    if (typeof nameHash === 'string') nameHash = GetHashKey(nameHash)
    return NetworkRegisterTunableIntHash(contextHash, nameHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xFAFC23AEE23868DB | Since: unknown
 */
export function accessTunableModificationDetectionClear(): boolean {
    return NetworkAllocateTunablesRegistrationDataMap();
}

/**
 * No comment provided
 * 
 * Hash: 0xC88156EBB786F8D5 | Since: unknown
 */
export function actionFollowInvite(): boolean {
    return NetworkActionFollowInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0x2B1C623823DB0D9D | Since: unknown
 */
export function addClientEntityAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): number {
    return Citizen.invokeNative('0x2B1C623823DB0D9D', x1, y1, z1, x2, y2, z2, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x25B99872D588A101 | Since: unknown
 */
export function addClientEntityArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
    return NetworkAddEntityDisplayedBoundaries(x1, y1, z1, x2, y2, z2);
}

/**
 * To remove, see: NETWORK_REMOVE_ENTITY_AREA
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * 
 * Hash: 0x376C6375BA60293A | Since: unknown
 */
export function addEntityAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): number {
    return NetworkAddEntityAngledArea(x1, y1, z1, x2, y2, z2, width);
}

/**
 * No comment provided
 * 
 * Hash: 0x494C8FB299290269 | Since: unknown
 */
export function addEntityArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
    return NetworkAddEntityArea(x1, y1, z1, x2, y2, z2);
}

/**
 * No comment provided
 * 
 * Hash: 0xF2404D68CBC855FA | Since: unknown
 */
export function addEntityToSynchronisedScene(entity: number | IEntity, netScene: number, animDict: string, animName: string, speed: number, speedMulitiplier: number, flag: number): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkAddEntityToSynchronisedScene(_entity, netScene, animDict, animName, speed, speedMulitiplier, flag);
}

/**
 * ..
 * 
 * Hash: 0x236406F60CF216D6 | Since: unknown
 */
export function addFollowers(): number {
    return NetworkAddFollowers(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x8E02D73914064223 | Since: unknown
 */
export function addFriend(message: string): [boolean, any] {
    return NetworkAddFriend(message);
}

/**
 * No comment provided
 * 
 * Hash: 0x7F562DBC212E81F9 | Since: unknown
 */
export function addInvalidObjectModel(modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    Citizen.invokeNative('0x7F562DBC212E81F9', modelHash, undefined);
}

/**
 * Similar structure as NETWORK_ADD_ENTITY_TO_SYNCHRONISED_SCENE but it includes this time a hash.
 * In casino_slots it is used one time in a synced scene involving a ped and the slot machine?
 * 
 * Hash: 0x45F35C0EDC33B03B | Since: unknown
 */
export function addMapEntityToSynchronisedScene(netScene: number, modelHash: number | string, pos: Vector3, flags: number): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    NetworkAddMapEntityToSynchronisedScene(netScene, modelHash, pos.x, pos.y, pos.z, 0, undefined, 0, 0, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x742A637471BCECD9 | Since: unknown
 */
export function addPedToSynchronisedScene(ped: number | IPed, netScene: number, animDict: string, animnName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    NetworkAddPedToSynchronisedScene(_ped, netScene, animDict, animnName, speed, speedMultiplier, duration, flag, playbackRate, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA5EAFE473E45C442 | Since: unknown
 */
export function addPedToSynchronisedSceneWithIk(): void {
    NetworkAddPedToSynchronisedSceneWithIk(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF8BD3B0BD6D42D7 | Since: unknown
 */
export function addSynchronisedSceneCamera(netScene: number, animDict: string, animName: string): void {
    NetworkAddSynchronisedSceneCamera(netScene, animDict, animName);
}

/**
 * No comment provided
 * 
 * Hash: 0x0F1A4B45B7693B95 | Since: unknown
 */
export function allowCloningWhileInTutorial(): void {
    Citizen.invokeNative('0x0F1A4B45B7693B95', undefined, undefined);
}

/**
 * teamId must be < 3, instanceId must be < 64
 * 
 * Hash: 0xFB680D403909DC70 | Since: unknown
 */
export function allowGangToJoinTutorialSession(teamId: number, instanceId: number): void {
    Citizen.invokeNative('0xFB680D403909DC70', teamId, instanceId);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B07B9CE4D390375 | Since: unknown
 */
export function allowInviteProcessInPlayerSwitch(): void {
    NetworkBlockKickedPlayers(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x267C78C60E806B9A | Since: unknown
 */
export function allowRemoteAttachmentModification(entity: number | IEntity, toggle: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkAllowRemoteAttachmentModification(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x144DA052257AE7D8 | Since: unknown
 */
export function allowRemoteSyncedSceneLocalPlayerRequests(): void {
    Citizen.invokeNative('0x144DA052257AE7D8', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x15337C7C268A27B2 | Since: unknown
 */
export function amIBlockedByGamer(): [boolean, any] {
    return NetworkAmIBlockedByGamer();
}

/**
 * No comment provided
 * 
 * Hash: 0x87F395D957D4353D | Since: unknown
 */
export function amIBlockedByPlayer(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkAmIBlockedByPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xDF02A2C93F1F26DA | Since: unknown
 */
export function amIMutedByGamer(): [boolean, any] {
    return NetworkAmIMutedByGamer();
}

/**
 * No comment provided
 * 
 * Hash: 0x9D6981DFC91A8604 | Since: unknown
 */
export function amIMutedByPlayer(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkAmIMutedByPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x99B72C7ABDE5C910 | Since: unknown
 */
export function applyCachedPlayerHeadBlendData(ped: number | IPed, player: number | string | IPlayer): boolean {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkApplyCachedPlayerHeadBlendData(_ped, _player);
}

/**
 * No comment provided
 * 
 * Hash: 0xE66C690248F11150 | Since: unknown
 */
export function applyPedScarData(ped: number | IPed): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    NetworkApplyPedScarData(_ped, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x521638ADA1BA0D18 | Since: unknown
 */
export function applyTransitionParameter(): void {
    NetworkApplyTransitionParameter(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xEBEFC2E77084F599 | Since: unknown
 */
export function applyTransitionParameterString(_string: string): void {
    NetworkApplyTransitionParameterString(0, _string, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xDBD2056652689917 | Since: unknown
 */
export function applyVoiceProximityOverride(pos: Vector3): void {
    NetworkApplyVoiceProximityOverride(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x57DBA049E110F217 | Since: unknown
 */
export function areHandlesTheSame(): [boolean, any, any] {
    return NetworkAreHandlesTheSame();
}

/**
 * No comment provided
 * 
 * Hash: 0x9DE986FC9A87C474 | Since: unknown
 */
export function arePlayersInSameTutorialSession(player: number | string | IPlayer, index: number): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerEqualToIndex(_player, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA9775570DB788CF | Since: unknown
 */
export function areSocialClubPoliciesCurrent(): boolean {
    return NetworkAreSocialClubPoliciesCurrent();
}

/**
 * No comment provided
 * 
 * Hash: 0x2615AA2A695930C1 | Since: unknown
 */
export function areTransitionDetailsValid(): boolean {
    return NetworkAreTransitionDetailsValid(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x478DCBD2A98B705A | Since: unknown
 */
export function attachSynchronisedSceneToEntity(netScene: number, entity: number | IEntity, bone: number): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkAttachSynchronisedSceneToEntity(netScene, _entity, bone);
}

/**
 * No comment provided
 * 
 * Hash: 0x95914459A87EBA28 | Since: unknown
 */
export function bail(): void {
    NetworkBail(0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xEAA572036990CD1B | Since: unknown
 */
export function bailTransition(): void {
    NetworkBailTransition(0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x34F9E9049454A7A0 | Since: unknown
 */
export function blockInvites(toggle: boolean): void {
    NetworkBlockInvites(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCFEB8AF24FC1D0BB | Since: unknown
 */
export function blockJoinQueueInvites(toggle: boolean): void {
    NetworkBlockJoinQueueInvites(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFEA7A352DDB34D52 | Since: unknown
 */
export function blockProxyMigrationBetweenTutorialSessions(): void {
    Citizen.invokeNative('0xFEA7A352DDB34D52', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBD0BE0BFC927EAC1 | Since: unknown
 */
export function cacheLocalPlayerHeadBlendData(): void {
    NetworkCacheLocalPlayerHeadBlendData();
}

/**
 * No comment provided
 * 
 * Hash: 0xFB8F2A6F3DF08CBE | Since: unknown
 */
export function cancelRespawnSearch(): void {
    NetworkCancelRespawnSearch();
}

/**
 * No comment provided
 * 
 * Hash: 0x023782EFC70585EE | Since: unknown
 */
export function cancelTransitionMatchmaking(): void {
    NetworkBailTransitionQuickmatch();
}

/**
 * 11 - Need to download tunables.
 * 12 - Need to download background script.
 * 
 * Returns 1 if the multiplayer is loaded, otherwhise 0.
 * 
 * Hash: 0xAF50DA1A3F8B1BA4 | Since: unknown
 */
export function canAccessMultiplayer(): [boolean, number] {
    return NetworkCanAccessMultiplayer();
}

/**
 * No comment provided
 * 
 * Hash: 0x580CE4438479CC61 | Since: unknown
 */
export function canBail(): boolean {
    return NetworkCanBail();
}

/**
 * No comment provided
 * 
 * Hash: 0xA150A4F065806B1F | Since: unknown
 */
export function canCommunicateWithGamer(): [boolean, any] {
    return NetworkCanCommunicateWithGamer();
}

/**
 * No comment provided
 * 
 * Hash: 0x7E782A910C362C25 | Since: unknown
 */
export function canEnterMultiplayer(): boolean {
    return NetworkCanEnterMultiplayer();
}

/**
 * No comment provided
 * 
 * Hash: 0x135F9B7B7ADD2185 | Since: unknown
 */
export function canGamerPlayMultiplayerWithMe(): [boolean, any] {
    return NetworkCanGamerPlayMultiplayerWithMe();
}

/**
 * No comment provided
 * 
 * Hash: 0x07DD29D5E22763F1 | Since: unknown
 */
export function canPlayMultiplayerWithGamer(): [boolean, any] {
    return NetworkCanPlayMultiplayerWithGamer();
}

/**
 * No comment provided
 * 
 * Hash: 0x2BF66D2E7414F686 | Since: unknown
 */
export function canQueueForPreviousSessionJoin(): boolean {
    return Citizen.invokeNative('0x2BF66D2E7414F686');
}

/**
 * No comment provided
 * 
 * Hash: 0x421E34C55F125964 | Since: unknown
 */
export function canReceiveLocalInvite(): [boolean, any] {
    return Citizen.invokeNative('0x421E34C55F125964');
}

/**
 * No comment provided
 * 
 * Hash: 0x021ABCBD98EC4320 | Since: unknown
 */
export function canSendLocalInvite(): [boolean, any] {
    return Citizen.invokeNative('0x021ABCBD98EC4320');
}

/**
 * No comment provided
 * 
 * Hash: 0x4EEBC3694E49C572 | Since: unknown
 */
export function canSessionEnd(): boolean {
    return NetworkCanSessionEnd();
}

/**
 * No comment provided
 * 
 * Hash: 0xC927EC229934AF60 | Since: unknown
 */
export function canSetWaypoint(): boolean {
    return NetworkCanSetWaypoint();
}

/**
 * No comment provided
 * 
 * Hash: 0xEEC02C7C0666D990 | Since: unknown
 */
export function canTextChatWithGamer(): [boolean, any] {
    return Citizen.invokeNative('0xEEC02C7C0666D990');
}

/**
 * No comment provided
 * 
 * Hash: 0xB57A49545BA53CE7 | Since: unknown
 */
export function canViewGamerUserContent(): [boolean, any] {
    return NetworkCanViewGamerUserContent();
}

/**
 * No comment provided
 * 
 * Hash: 0xEEEDA5E6D7080987 | Since: unknown
 */
export function changeTransitionSlots(): void {
    NetworkChangeTransitionSlots(undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x6FA9825D0B5A721B | Since: unknown
 */
export function checkCanAccessAndAlert(): boolean {
    return Citizen.invokeNative('0x6FA9825D0B5A721B');
}

/**
 * No comment provided
 * 
 * Hash: 0x83F28CE49FBBFFBA | Since: unknown
 */
export function checkCommunicationPrivileges(): boolean {
    return NetworkCheckCommunicationPrivileges(0, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x4AD490AE1536933B | Since: unknown
 */
export function checkDataManagerForHandle(): [boolean, any] {
    return Citizen.invokeNative('0x4AD490AE1536933B', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x44B37CDCAE765AAE | Since: unknown
 */
export function checkDataManagerSucceededForHandle(): [boolean, any] {
    return NetworkCheckDataManagerSucceededForHandle(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x78321BEA235FD8CD | Since: unknown
 */
export function checkOnlinePrivileges(): boolean {
    return Citizen.invokeNative('0x78321BEA235FD8CD', undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CF6CC51AA18F0F8 | Since: unknown
 */
export function checkPrivileges(): boolean {
    return Citizen.invokeNative('0x0CF6CC51AA18F0F8', undefined, undefined, undefined);
}

/**
 * Returns true if profile setting 901 is set to true and sets it to false.
 * 
 * Hash: 0x60EDD13EB3AC1FF3 | Since: unknown
 */
export function checkRosLinkWentdownNotNet(): boolean {
    return Citizen.invokeNative('0x60EDD13EB3AC1FF3');
}

/**
 * No comment provided
 * 
 * Hash: 0x07EAB372C8841D99 | Since: unknown
 */
export function checkTextCommunicationPrivileges(): boolean {
    return Citizen.invokeNative('0x07EAB372C8841D99', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x595F028698072DD9 | Since: unknown
 */
export function checkUserContentPrivileges(): boolean {
    return NetworkCheckUserContentPrivileges(0, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB3F64A6A91432477 | Since: unknown
 */
export function clanAnyDownloadMembershipPending(): boolean {
    return NetworkClanAnyDownloadMembershipPending();
}

/**
 * No comment provided
 * 
 * Hash: 0x2B51EDBEFC301339 | Since: unknown
 */
export function clanCrewinfoGetCrewranktitle(): boolean {
    return Citizen.invokeNative('0x2B51EDBEFC301339', 0, undefined);
}

/**
 * Only documented...
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0x729E3401F0430686 | Since: unknown
 */
export function clanCrewinfoGetStringValue(animDict: string, animName: string): boolean {
    return NetworkClanAnimation(animDict, animName);
}

/**
 * No comment provided
 * 
 * Hash: 0xA989044E70010ABE | Since: unknown
 */
export function clanDownloadMembership(): [boolean, any] {
    return NetworkClanDownloadMembership();
}

/**
 * No comment provided
 * 
 * Hash: 0x5B9E023DC6EBEDC0 | Since: unknown
 */
export function clanDownloadMembershipPending(): [boolean, any] {
    return NetworkClanDownloadMembershipPending();
}

/**
 * No comment provided
 * 
 * Hash: 0x5835D9CD92E83184 | Since: unknown
 */
export function clanGetEmblemTxdName(): [boolean, any, string] {
    return NetworkClanGetEmblemTxdName();
}

/**
 * No comment provided
 * 
 * Hash: 0x1F471B79ACC90BEF | Since: unknown
 */
export function clanGetLocalMembershipsCount(): number {
    return NetworkClanGetLocalMembershipsCount();
}

/**
 * No comment provided
 * 
 * Hash: 0xC8BC2011F67B3411 | Since: unknown
 */
export function clanGetMembership(): [boolean, number, any] {
    return NetworkClanGetMembership(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xAAB11F6C4ADBC2C1 | Since: unknown
 */
export function clanGetMembershipCount(): [number, number] {
    return NetworkClanGetMembershipCount();
}

/**
 * No comment provided
 * 
 * Hash: 0x48DE78AF2C8885B8 | Since: unknown
 */
export function clanGetMembershipDesc(): [boolean, any] {
    return NetworkClanGetMembershipDesc(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x48A59CF88D43DF0E | Since: unknown
 */
export function clanGetMembershipValid(): [boolean, number] {
    return NetworkClanGetMembershipValid(undefined);
}

/**
 * bufferSize is 35 in the scripts.
 * 
 * Hash: 0xF45352426FF3A4F0 | Since: unknown
 */
export function clanGetUiFormattedTag(bufferSize: number): [any, string] {
    return NetworkClanGetUiFormattedTag(bufferSize);
}

/**
 * No comment provided
 * 
 * Hash: 0xC32EA7A2F6CA7557 | Since: unknown
 */
export function clanHasCrewinfoMetadataBeenReceived(): boolean {
    return Citizen.invokeNative('0xC32EA7A2F6CA7557');
}

/**
 * No comment provided
 * 
 * Hash: 0xA134777FF7F33331 | Since: unknown
 */
export function clanIsEmblemReady(): [boolean, any] {
    return NetworkClanIsEmblemReady(undefined);
}

/**
 * bufferSize is 35 in the scripts.
 * 
 * Hash: 0x7543BB439F63792B | Since: unknown
 */
export function clanIsRockstarClan(bufferSize: number): [boolean, any] {
    return NetworkClanIsRockstarClan(bufferSize);
}

/**
 * No comment provided
 * 
 * Hash: 0x9FAAA4F4FC71F87F | Since: unknown
 */
export function clanJoin(clanDesc: number): boolean {
    return NetworkClanJoin(clanDesc);
}

/**
 * bufferSize is 35 in the scripts.
 * 
 * `bufferSize is the elementCount of p0(desc), sizeof(p0) == 280 == p1*8 == 35 * 8, p2(netHandle) is obtained from NETWORK::NETWORK_HANDLE_FROM_PLAYER.`
 * 
 * https://pastebin.com/cSZniHak
 * 
 * Hash: 0xEEE6EACBE8874FBA | Since: unknown
 */
export function clanPlayerGetDesc(bufferSize: number): [boolean, any, any] {
    return NetworkClanPlayerGetDesc(bufferSize);
}

/**
 * No comment provided
 * 
 * Hash: 0xB124B57F571D8F18 | Since: unknown
 */
export function clanPlayerIsActive(): [boolean, any] {
    return NetworkClanPlayerIsActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x113E6E3E50E286B0 | Since: unknown
 */
export function clanReleaseEmblem(): void {
    NetworkClanReleaseEmblem(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBB6E6FEE99D866B2 | Since: unknown
 */
export function clanRemoteMembershipsAreInCache(): [boolean, number] {
    return NetworkClanRemoteMembershipsAreInCache();
}

/**
 * No comment provided
 * 
 * Hash: 0x13518FF1C6B28938 | Since: unknown
 */
export function clanRequestEmblem(): boolean {
    return NetworkClanRequestEmblem(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x579CCED0265D4896 | Since: unknown
 */
export function clanServiceIsValid(): boolean {
    return NetworkClanServiceIsValid();
}

/**
 * No comment provided
 * 
 * Hash: 0xD972DF67326F966E | Since: unknown
 */
export function clearClockTimeOverride(): void {
    NetworkClearClockTimeOverride();
}

/**
 * No comment provided
 * 
 * Hash: 0x058F43EC59A8631A | Since: unknown
 */
export function clearFollowers(): void {
    NetworkClearFollowers();
}

/**
 * No comment provided
 * 
 * Hash: 0x439BFDE3CD0610F6 | Since: unknown
 */
export function clearFollowInvite(): boolean {
    return NetworkClearFollowInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0x6D14CCEE1B40381A | Since: unknown
 */
export function clearFoundGamers(): void {
    NetworkClearFoundGamers();
}

/**
 * No comment provided
 * 
 * Hash: 0x86E0660E4F5C956D | Since: unknown
 */
export function clearGetGamerStatus(): void {
    NetworkClearGetGamerStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0x1888694923EF4591 | Since: unknown
 */
export function clearGroupActivity(): void {
    NetworkClearGroupActivity();
}

/**
 * No comment provided
 * 
 * Hash: 0x03B2F03A53D85E41 | Since: unknown
 */
export function clearInvalidObjectModels(): void {
    Citizen.invokeNative('0x03B2F03A53D85E41');
}

/**
 * No comment provided
 * 
 * Hash: 0x140E6A44870A11CE | Since: unknown
 */
export function clearOfflineInvitePending(): void {
    Citizen.invokeNative('0x140E6A44870A11CE');
}

/**
 * No comment provided
 * 
 * Hash: 0x6CE50E47F5543D0C | Since: unknown
 */
export function clearQueuedJoinRequest(): void {
    Citizen.invokeNative('0x6CE50E47F5543D0C');
}

/**
 * No comment provided
 * 
 * Hash: 0xFB3272229A82C759 | Since: unknown
 */
export function clearTransitionCreatorHandle(): void {
    NetworkClearTransitionCreatorHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0xE036A705F989E049 | Since: unknown
 */
export function clearVoiceChannel(): void {
    NetworkClearVoiceChannel();
}

/**
 * No comment provided
 * 
 * Hash: 0xF03755696450470C | Since: unknown
 */
export function clearVoiceProximityOverride(): void {
    NetworkClearVoiceProximityOverride();
}

/**
 * No comment provided
 * 
 * Hash: 0x43F4DBA69710E01E | Since: unknown
 */
export function closeTransitionMatchmaking(): void {
    NetworkCloseTransitionMatchmaking();
}

/**
 * No comment provided
 * 
 * Hash: 0x1632BE0AC1E62876 | Since: unknown
 */
export function concealEntity(entity: number | IEntity, toggle: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkConcealEntity(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBBDF066252829606 | Since: unknown
 */
export function concealPlayer(player: number | string | IPlayer, toggle: boolean): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    NetworkConcealPlayer(_player, toggle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7CD6BC4C2BBDD526 | Since: unknown
 */
export function createSynchronisedScene(pos: Vector3, rot: Vector3, rotationOrder: number, useOcclusionPortal: boolean, looped: boolean, animTime: number): number {
    return NetworkCreateSynchronisedScene(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, rotationOrder, useOcclusionPortal, looped, 0, animTime, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9B83B77929D8863 | Since: unknown
 */
export function didFindGamersSucceed(): boolean {
    return NetworkDidFindGamersSucceed();
}

/**
 * No comment provided
 * 
 * Hash: 0x5AE17C6B0134B7F1 | Since: unknown
 */
export function didGetGamerStatusSucceed(): boolean {
    return NetworkDidGetGamerStatusSucceed();
}

/**
 * No comment provided
 * 
 * Hash: 0x9DD368BF06983221 | Since: unknown
 */
export function disableInvincibleFlashing(player: number | string | IPlayer, toggle: boolean): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    NetworkDisableInvincibleFlashing(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xC505036A35AFD01B | Since: unknown
 */
export function disableLeaveRemotePedBehind(toggle: boolean): void {
    NetworkDisableLeaveRemotePedBehind(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x407091CF6037118E | Since: unknown
 */
export function disableProximityMigration(netID: number): void {
    NetworkDisableProximityMigration(netID);
}

/**
 * No comment provided
 * 
 * Hash: 0x236905C700FDB54D | Since: unknown
 */
export function disableRealtimeMultiplayer(): void {
    Citizen.invokeNative('0x236905C700FDB54D');
}

/**
 * No comment provided
 * 
 * Hash: 0xE20BEB3E2B5A8A2B | Since: unknown
 */
export function disableRealtimeMultiplayerSpectator(): void {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0xE20BEB3E2B5A8A2B)'); return;
    Citizen.invokeNative('0xE20BEB3E2B5A8A2B');
}

/**
 * No comment provided
 * 
 * Hash: 0xCA575C391FEA25CC | Since: unknown
 */
export function disableVoiceBandwidthRestriction(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    Citizen.invokeNative('0xCA575C391FEA25CC', _player);
}

/**
 * Hardcoded to return -1.
 * 
 * Hash: 0xD66C9E72B3CC4982 | Since: unknown
 */
export function displaynamesFromHandlesStart(): [number, any] {
    return NetworkDisplaynamesFromHandlesStart(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x18A47D074708FD68 | Since: unknown
 */
export function doesEntityExistWithNetworkId(netId: number): boolean {
    return NetworkDoesEntityExistWithNetworkId(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0x38CE16C96BD11344 | Since: unknown
 */
export function doesNetworkIdExist(netId: number): boolean {
    return NetworkDoesNetworkIdExist(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0x85E5F8B9B898B20A | Since: unknown
 */
export function doesTunableExist(tunableContext: string, tunableName: string): boolean {
    return NetworkDoesTunableExist(tunableContext, tunableName);
}

/**
 * No comment provided
 * 
 * Hash: 0xE4E53E1419D81127 | Since: unknown
 */
export function doesTunableExistHash(tunableContext: number | string, tunableName: number | string): boolean {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkDoesTunableExistHash(tunableContext, tunableName);
}

/**
 * No comment provided
 * 
 * Hash: 0x71FB0EBCD4915D56 | Since: unknown
 */
export function doTransitionQuickmatch(): boolean {
    return NetworkDoTransitionQuickmatch(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA091A5E44F0072E5 | Since: unknown
 */
export function doTransitionQuickmatchAsync(): boolean {
    return NetworkDoTransitionQuickmatchAsync(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9C4AB58491FDC98A | Since: unknown
 */
export function doTransitionQuickmatchWithGroup(): [boolean, any] {
    return NetworkDoTransitionQuickmatchWithGroup(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * p2 is true 3/4 of the occurrences I found.
 * 'players' is the number of players for a session. On PS3/360 it's always 18. On PC it's 32.
 * 
 * Hash: 0x3AAD8B2FCA1E289F | Since: unknown
 */
export function doTransitionToFreemode(players: number): [boolean, any] {
    return NetworkDoTransitionToFreemode(undefined, false, players, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E9BB38102A589B0 | Since: unknown
 */
export function doTransitionToGame(maxPlayers: number): boolean {
    return NetworkDoTransitionToGame(false, maxPlayers);
}

/**
 * No comment provided
 * 
 * Hash: 0x9E80A5BA8109F974 | Since: unknown
 */
export function doTransitionToNewFreemode(players: number): [boolean, any] {
    return NetworkDoTransitionToNewFreemode(undefined, players, false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x4665F51EFED00034 | Since: unknown
 */
export function doTransitionToNewGame(maxPlayers: number): boolean {
    return NetworkDoTransitionToNewGame(false, maxPlayers, false);
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0xAEDF1BC1C133D6E3 | Since: unknown
 */
export function dumpNetIfConfig(): void {
    Citizen.invokeNative('0xAEDF1BC1C133D6E3');
}

/**
 * No comment provided
 * 
 * Hash: 0xE6717E652B8C8D8A | Since: unknown
 */
export function enableExtraVehicleOrientationBlendChecks(netId: number, toggle: boolean): void {
    Citizen.invokeNative('0xE6717E652B8C8D8A', netId, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5E3AA4CA2B6FB0EE | Since: unknown
 */
export function enableVoiceBandwidthRestriction(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    Citizen.invokeNative('0x5E3AA4CA2B6FB0EE', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0xD0AFAFF5A51D72F7 | Since: unknown
 */
export function endTutorialSession(): void {
    NetworkEndTutorialSession();
}

/**
 * No comment provided
 * 
 * Hash: 0xE64A3CA08DFA37A9 | Since: unknown
 */
export function entityAreaDoesExist(areaHandle: number): boolean {
    return NetworkEntityAreaDoesExist(areaHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4DF7CFFF471A7FB1 | Since: unknown
 */
export function entityAreaHaveAllReplied(areaHandle: number): boolean {
    return Citizen.invokeNative('0x4DF7CFFF471A7FB1', areaHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4A2D4E8BF4265B0F | Since: unknown
 */
export function entityAreaIsOccupied(areaHandle: number): boolean {
    return NetworkEntityAreaIsOccupied(areaHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x815F18AD865F057F | Since: unknown
 */
export function entityGetObjectId(entity: number | IEntity): number {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return NetworkGetEntityNetScriptId(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x95BAF97C82464629 | Since: unknown
 */
export function entityUseHighPrecisionRotation(netId: number, toggle: boolean): void {
    Citizen.invokeNative('0x95BAF97C82464629', netId, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A5E0621DD815A9A | Since: unknown
 */
export function explodeHeli(vehicle: number | IVehicle, isAudible: boolean, isInvisible: boolean, netId: number): void {
    const _vehicle = typeof vehicle == 'object' ? vehicle.handle() : vehicle;
    NetworkExplodeHeli(_vehicle, isAudible, isInvisible, netId);
}

/**
 * In the console script dumps, this is only referenced once.
 * `NETWORK::NETWORK_EXPLODE_VEHICLE(vehicle, 1, 0, 0);`
 * 
 * ^^^^^ That must be PC script dumps? In X360 Script Dumps it is reference a few times with 2 differences in the parameters.
 * Which as you see below is 1, 0, 0 + 1, 1, 0 + 1, 0, and a *param?
 * 
 * am_plane_takedown.c
 * network_explode_vehicle(net_to_veh(Local_40.imm_2), 1, 1, 0);
 * 
 * armenian2.c
 * network_explode_vehicle(Local_80[6 <2>], 1, 0, 0);
 * 
 * fm_horde_controler.c
 * network_explode_vehicle(net_to_veh(*uParam0), 1, 0, *uParam0);
 * 
 * fm_mission_controller.c, has 6 hits so not going to list them.
 * 
 * Side note, setting the first parameter to 0 seems to mute sound or so?
 * 
 * Seems it's like ADD_EXPLOSION, etc. the first 2 params. The 3rd atm no need to worry since it always seems to be 0.
 * 
 * 
 * Hash: 0x301A42153C9AD707 | Since: unknown
 */
export function explodeVehicle(vehicle: number | IVehicle, isAudible: boolean, isInvisible: boolean, netId: number): boolean {
    const _vehicle = typeof vehicle == 'object' ? vehicle.handle() : vehicle;
    return NetworkExplodeVehicle(_vehicle, isAudible, isInvisible, netId);
}

/**
 * state - 0 does 5 fades
 * state - 1 does 6 fades
 * 
 * p3: setting to 1 made vehicle fade in slower, probably "slow" as per NETWORK_FADE_OUT_ENTITY
 * 
 * Hash: 0x1F4ED342ACEFE62D | Since: unknown
 */
export function fadeInEntity(entity: number | IEntity, state: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkFadeInEntity(_entity, state, undefined);
}

/**
 * normal - transition like when your coming out of LSC
 * slow - transition like when you walk into a mission
 * 
 * 
 * Hash: 0xDE564951F95E09ED | Since: unknown
 */
export function fadeOutEntity(entity: number | IEntity, normal: boolean, slow: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkFadeOutEntity(_entity, normal, slow);
}

/**
 * No comment provided
 * 
 * Hash: 0xE532D6811B3A4D2A | Since: unknown
 */
export function findGamersInCrew(crewId: number): boolean {
    return NetworkFindGamersInCrew(crewId);
}

/**
 * p0 is always 0. p1 is pointing to a global.
 * 
 * Hash: 0xFB1F9381E80FA13F | Since: unknown
 */
export function findLargestBunchOfPlayers(): boolean {
    return Citizen.invokeNative('0xFB1F9381E80FA13F', 0, undefined);
}

/**
 * Uses attributes to find players with similar stats. Upper/Lower limit must be above zero or the fallback limit +/-0.1 is used.
 * There can be up to 15 attributes, they are as follows:
 * 
 * 0 = Races
 * 1 = Parachuting
 * 2 = Horde
 * 3 = Darts
 * 4 = Arm Wrestling
 * 5 = Tennis
 * 6 = Golf
 * 7 = Shooting Range
 * 8 = Deathmatch
 * 9 = MPPLY_MCMWIN/MPPLY_CRMISSION
 * 
 * Hash: 0xF7B2CFDE5C9F700D | Since: unknown
 */
export function findMatchedGamers(attribute: number, fallbackLimit: number, lowerLimit: number, upperLimit: number): boolean {
    return NetworkFindMatchedGamers(attribute, fallbackLimit, lowerLimit, upperLimit);
}

/**
 * No comment provided
 * 
 * Hash: 0x64F62AFB081E260D | Since: unknown
 */
export function finishBroadcastingData(): void {
    NetworkFinishBroadcastingData();
}

/**
 * NETWORK_F[I-O]
 * 
 * Hash: 0xB7C7F6AD6424304B | Since: unknown
 */
export function forceLocalPlayerScarSync(): void {
    NetworkUpdatePlayerScars();
}

/**
 * No comment provided
 * 
 * Hash: 0xC9B43A33D09CADA7 | Since: unknown
 */
export function forceLocalUseOfSyncedSceneCamera(netScene: number): void {
    NetworkForceLocalUseOfSyncedSceneCamera(netScene);
}

/**
 * No comment provided
 * 
 * Hash: 0xB071E27958EF4CF0 | Since: unknown
 */
export function gamertagFromHandlePending(): boolean {
    return NetworkGamertagFromHandlePending();
}

/**
 * No comment provided
 * 
 * Hash: 0x9F0C0A981D73FA56 | Since: unknown
 */
export function gamertagFromHandleStart(): [boolean, any] {
    return NetworkGamertagFromHandleStart();
}

/**
 * No comment provided
 * 
 * Hash: 0xFD00798DBA7523DD | Since: unknown
 */
export function gamertagFromHandleSucceeded(): boolean {
    return NetworkGamertagFromHandleSucceeded();
}

/**
 * No comment provided
 * 
 * Hash: 0xF2FD55CB574BCC55 | Since: unknown
 */
export function gamerHasHeadset(): [boolean, any] {
    return NetworkGamerHasHeadset();
}

/**
 * No comment provided
 * 
 * Hash: 0x73E2B500410DA5A2 | Since: unknown
 */
export function getActivityPlayerNum(): number {
    return NetworkGetActivityPlayerNum(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9614B71F8ADB982B | Since: unknown
 */
export function getAgeGroup(): number {
    return NetworkGetAgeGroup();
}

/**
 * No comment provided
 * 
 * Hash: 0x4CACA84440FA26F6 | Since: unknown
 */
export function getAssistedDamageOfEntity(player: number | string | IPlayer, entity: number | IEntity): [boolean, number] {
    const _player = typeof player == 'object' ? player.playerId() : player;
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return NetworkGetDestroyerOfEntity(_player, _entity);
}

/**
 * NETWORK_GET_ASSISTED_DAMAGE_OF_ENTITY that ensures the entity is dead (IS_ENTITY_DEAD)
 * 
 * Hash: 0x83660B734994124D | Since: unknown
 */
export function getAssistedKillOfEntity(player: number | string | IPlayer, entity: number | IEntity): [boolean, number] {
    const _player = typeof player == 'object' ? player.playerId() : player;
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return Citizen.invokeNative('0x83660B734994124D', _player, _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xD414BE129BB81B32 | Since: unknown
 */
export function getAverageLatency(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetAverageLatencyForPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x350C23949E43686C | Since: unknown
 */
export function getAveragePacketLoss(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetAveragePacketLossForPlayer(_player);
}

/**
 * Same as NETWORK_GET_AVERAGE_LATENCY
 * 
 * Hash: 0x0E3A041ED6AC2B45 | Since: unknown
 */
export function getAveragePing(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetAverageLatencyForPlayer2(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x7DB53B37A2F211A0 | Since: unknown
 */
export function getBoneIdOfFatalHit(): number {
    return Citizen.invokeNative('0x7DB53B37A2F211A0');
}

/**
 * Return the content modifier id (the tunables context if you want) of a specific content.
 * 
 * It takes the content hash (which is the mission id hash), and return the content modifier id, used as the tunables context.
 * 
 * The mission id can be found on the Social club, for example, 'socialclub.rockstargames.com/games/gtav/jobs/job/A8M6Bz8MLEC5xngvDCzGwA'
 * 
 * 'A8M6Bz8MLEC5xngvDCzGwA' is the mission id, so the game hash this and use it as the parameter for this native.
 * 
 * 
 * Hash: 0x187382F8A3E0A6C3 | Since: unknown
 */
export function getContentModifierListId(contentHash: number | string): number {
    if (typeof contentHash === 'string') contentHash = GetHashKey(contentHash)
    return NetworkGetContentModifierListId(contentHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x74881E6BCAE2327C | Since: unknown
 */
export function getCurrentlySelectedGamerHandleFromInviteMenu(): [boolean, any] {
    return NetworkGetCurrentlySelectedGamerHandleFromInviteMenu();
}

/**
 * No comment provided
 * 
 * Hash: 0xC434133D9BA52777 | Since: unknown
 */
export function getDestroyerOfEntity(entity: number | IEntity): [number | string, number] {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return Citizen.invokeNative('0xC434133D9BA52777', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A1ADEEF01740A24 | Since: unknown
 */
export function getDestroyerOfNetworkId(netId: number): [number | string, number] {
    return NetworkGetDestroyerOfNetworkId(netId);
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0x58CC181719256197 | Since: unknown
 */
export function getDisplaynamesFromHandles(): number {
    return NetworkGetDisplaynamesFromHandles(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCE4E5D9B0A4FF560 | Since: unknown
 */
export function getEntityFromNetworkId(netId: number): number {
    return NetworkGetEntityFromNetworkId(netId);
}

/**
 * I've had this return the player's ped handle sometimes, but also other random entities.
 * Whatever p0 is, it's at least not synced to other players.
 * At least not all the time, some p0 values actually output the same entity, (different handle of course, but same entity).
 * But another p0 value may return an entity for player x, but not for player y (it'll just return -1 even if the entity exists on both clients).
 * 
 * Returns an entity handle or -1, value changes based on p0's value.
 * 
 * Hash: 0x37D5F739FD494675 | Since: unknown
 */
export function getEntityFromObjectId(): number {
    return Citizen.invokeNative('0x37D5F739FD494675', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0991549DE4D64762 | Since: unknown
 */
export function getEntityIsLocal(entity: number | IEntity): boolean {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return NetworkGetEntityIsLocal(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7827959479DCC78 | Since: unknown
 */
export function getEntityIsNetworked(entity: number | IEntity): boolean {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return NetworkGetEntityIsNetworked(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x42B2DAA6B596F5F8 | Since: unknown
 */
export function getEntityKillerOfPlayer(player: number | string | IPlayer): [number, number] {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetEntityKillerOfPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x9DCFF2AFB68B3476 | Since: unknown
 */
export function getFoundGamer(): [boolean, any] {
    return NetworkGetFoundGamer(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x203F1CFD823B27A4 | Since: unknown
 */
export function getFriendCount(): number {
    return NetworkGetFriendCount();
}

/**
 * No comment provided
 * 
 * Hash: 0x4164F227D052E293 | Since: unknown
 */
export function getFriendDisplayName(friendIndex: number): string {
    return NetworkGetFriendNameFromIndex(friendIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xE11EBBB2A783FE8B | Since: unknown
 */
export function getFriendName(friendIndex: number): string {
    return NetworkGetFriendName(friendIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x426141162EBE5CDB | Since: unknown
 */
export function getGamertagFromHandle(): [string, any] {
    return NetworkGetGamertagFromHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0x2CC848A861D01493 | Since: unknown
 */
export function getGamerStatusFromQueue(): boolean {
    return NetworkGetGamerStatusFromQueue();
}

/**
 * No comment provided
 * 
 * Hash: 0x02A8BEC6FD9AF660 | Since: unknown
 */
export function getGamerStatusResult(): [boolean, any] {
    return NetworkGetGamerStatusResult(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C9034162368E206 | Since: unknown
 */
export function getGameMode(): number {
    return Citizen.invokeNative('0x4C9034162368E206');
}

/**
 * No comment provided
 * 
 * Hash: 0x6D03BFBD643B2A02 | Since: unknown
 */
export function getGlobalMultiplayerClock(): [number, number, number] {
    return NetworkGetGlobalMultiplayerClock();
}

/**
 * No comment provided
 * 
 * Hash: 0x52C1EADAF7B10302 | Since: unknown
 */
export function getHighestReliableResendCount(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetOldestResendCountForPlayer(_player);
}

/**
 * scriptName examples:
 * "freemode", "AM_CR_SecurityVan", ...
 * 
 * Most of the time, these values are used:
 * instance_id = -1
 * position_hash = 0
 * 
 * Hash: 0x1D6A14F1F9A736FC | Since: unknown
 */
export function getHostOfScript(scriptName: string, instance_id: number, position_hash: number): number | string {
    return NetworkGetHostOfScript(scriptName, instance_id, position_hash);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7B4D79B01FA7A5C | Since: unknown
 */
export function getHostOfThisScript(): number | string {
    return NetworkGetHostOfThisScript();
}

/**
 * No comment provided
 * 
 * Hash: 0xD3DEBE2991FE8098 | Since: unknown
 */
export function getHostOfThread(threadId: number): number | string {
    return Citizen.invokeNative('0xD3DEBE2991FE8098', threadId);
}

/**
 * No comment provided
 * 
 * Hash: 0x8251FB94DC4FDFC8 | Since: unknown
 */
export function getHostPlayerIndex(): number | string {
    return Citizen.invokeNative('0x8251FB94DC4FDFC8');
}

/**
 * No comment provided
 * 
 * Hash: 0x638A3A81733086DB | Since: unknown
 */
export function getInstanceIdOfThisScript(): number {
    return NetworkGetInstanceIdOfThisScript();
}

/**
 * No comment provided
 * 
 * Hash: 0x3855FB5EB2C5E8B2 | Since: unknown
 */
export function getInviteReplyStatus(): number {
    return Citizen.invokeNative('0x3855FB5EB2C5E8B2', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2DA41ED6E1FCD7A5 | Since: unknown
 */
export function getKillerOfPlayer(player: number | string | IPlayer): [number | string, number] {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return Citizen.invokeNative('0x2DA41ED6E1FCD7A5', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x64D779659BC37B19 | Since: unknown
 */
export function getLastEntityPosReceivedOverNetwork(entity: number | IEntity): Vector3 {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return new Vector3(Citizen.invokeNative('0x64D779659BC37B19', _entity));
}

/**
 * Returns the coordinates of another player.
 * Does not work if you enter your own player id as p0 (will return `(0.0, 0.0, 0.0)` in that case).
 * 
 * Hash: 0x125E6D638B8605D4 | Since: unknown
 */
export function getLastPlayerPosReceivedOverNetwork(player: number | string | IPlayer): Vector3 {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return new Vector3(NetworkGetPlayerCoords(_player));
}

/**
 * Used by NetBlender
 * 
 * Hash: 0x33DE49EDF4DDE77A | Since: unknown
 */
export function getLastVelReceivedOverNetwork(entity: number | IEntity): Vector3 {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return new Vector3(NetworkGetLastVelocityReceived(_entity));
}

/**
 * No comment provided
 * 
 * Hash: 0xE86051786B66CD8E | Since: unknown
 */
export function getLocalHandle(gamerHandleSize: number): any {
    return NetworkGetLocalHandle(gamerHandleSize);
}

/**
 * No comment provided
 * 
 * Hash: 0x02C40BF885C567B6 | Since: unknown
 */
export function getLocalSceneFromNetworkId(netId: number): number {
    return NetworkGetLocalSceneFromNetworkId(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0xAFEBB0D5D8F687D2 | Since: unknown
 */
export function getMaxFriends(): number {
    return NetworkGetMaxFriends();
}

/**
 * No comment provided
 * 
 * Hash: 0xA6C90FBC38E395EE | Since: unknown
 */
export function getMaxNumParticipants(): number {
    return NetworkGetMaxNumParticipants();
}

/**
 * NETWORK_GET_M[A-U]
 * 
 * Hash: 0xADB57E5B663CCA8B | Since: unknown
 */
export function getMuteCountForPlayer(p0: number | string | IPlayer): [number, number] {
    const _p0 = typeof p0 == 'object' ? p0.playerId() : p0;
    return Citizen.invokeNative('0xADB57E5B663CCA8B', _p0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA11700682F3AD45C | Since: unknown
 */
export function getNetworkIdFromEntity(entity: number | IEntity): number {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return NetworkGetNetworkIdFromEntity(_entity);
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0x6FD992C4A1C1B986 | Since: unknown
 */
export function getNetStatisticsInfo(): any {
    return Citizen.invokeNative('0x6FD992C4A1C1B986');
}

/**
 * Hardcoded to return zero.
 * 
 * ==== PS4 specific info ====
 * 
 * Returns some sort of unavailable reason:
 * -1 = REASON_INVALID
 * 0 = REASON_OTHER
 * 1 = REASON_SYSTEM_UPDATE
 * 2 = REASON_GAME_UPDATE
 * 3 = REASON_SIGNED_OUT
 * 4 = REASON_AGE
 * 5 = REASON_CONNECTION
 * 
 * =================================
 * 
 * Hash: 0x74FB3E29E6D10FA9 | Since: unknown
 */
export function getNpUnavailableReason(): number {
    return Citizen.invokeNative('0x74FB3E29E6D10FA9');
}

/**
 * No comment provided
 * 
 * Hash: 0xD38C4A6D047C019D | Since: unknown
 */
export function getNumberBodyTrackerHits(): number {
    return NetworkGetNumBodyTrackers();
}

/**
 * Returns the amount of players connected in the current session. Only works when connected to a session/server.
 * 
 * Hash: 0xA4A79DD2D9600654 | Since: unknown
 */
export function getNumConnectedPlayers(): number {
    return NetworkGetNumConnectedPlayers();
}

/**
 * No comment provided
 * 
 * Hash: 0xA1B043EE79A916FB | Since: unknown
 */
export function getNumFoundGamers(): number {
    return NetworkGetNumFoundGamers();
}

/**
 * No comment provided
 * 
 * Hash: 0x18D0456E86604654 | Since: unknown
 */
export function getNumParticipants(): number {
    return NetworkGetNumParticipants();
}

/**
 * No comment provided
 * 
 * Hash: 0xCEFA968912D0F78D | Since: unknown
 */
export function getNumPresenceInvites(): number {
    return NetworkGetNumPresenceInvites();
}

/**
 * No comment provided
 * 
 * Hash: 0x3658E8CD94FC121A | Since: unknown
 */
export function getNumScriptParticipants(scriptName: string, instance_id: number, position_hash: number): number {
    return NetworkGetNumScriptParticipants(scriptName, instance_id, position_hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x617F49C2668E6155 | Since: unknown
 */
export function getNumTransitionNonAsyncGamers(): number {
    return Citizen.invokeNative('0x617F49C2668E6155');
}

/**
 * No comment provided
 * 
 * Hash: 0xFF8FCF9FFC458A1C | Since: unknown
 */
export function getNumUnackedReliables(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetNumUnackedForPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x1B84DF6AF2A46938 | Since: unknown
 */
export function getParticipantIndex(index: number): number {
    return NetworkGetParticipantIndex(index);
}

/**
 * No comment provided
 * 
 * Hash: 0x120364DE2845DAF8 | Since: unknown
 */
export function getPlatformPartyMembers(dataSize: number): [number, any] {
    return NetworkGetPlatformPartyMembers(dataSize);
}

/**
 * No comment provided
 * 
 * Hash: 0x01ABCE5E7CBDA196 | Since: unknown
 */
export function getPlatformPartyMemberCount(): number {
    return NetworkGetPlatformPartyUnk();
}

/**
 * No comment provided
 * 
 * Hash: 0xDB663CC9FF3407A9 | Since: unknown
 */
export function getPlayerAccountId(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return Citizen.invokeNative('0xDB663CC9FF3407A9', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0xCE5F689CF5A0A49D | Since: unknown
 */
export function getPlayerFromGamerHandle(): [number | string, any] {
    return NetworkGetPlayerFromGamerHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0x24FB80D107371267 | Since: unknown
 */
export function getPlayerIndex(player: number | string | IPlayer): number | string {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetPlayerIndex(_player);
}

/**
 * Returns the Player associated to a given Ped when in an online session.
 * 
 * Hash: 0x6C0E2E0125610278 | Since: unknown
 */
export function getPlayerIndexFromPed(ped: number | IPed): number | string {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return NetworkGetPlayerIndexFromPed(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x21A1684A25C2867F | Since: unknown
 */
export function getPlayerLoudness(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetPlayerLoudness(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x82377B65E943F72D | Since: unknown
 */
export function getPlayerOwnsWaypoint(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetPlayerOwnsWaypoint(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x3B39236746714134 | Since: unknown
 */
export function getPlayerTutorialSessionInstance(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetPlayerTutorialSessionInstance(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x257ED0FADF750BCF | Since: unknown
 */
export function getPositionHashOfThisScript(): number {
    return NetworkGetPositionHashOfThisScript();
}

/**
 * No comment provided
 * 
 * Hash: 0xAA5FAFCD2C5F5E47 | Since: unknown
 */
export function getPredictedVelocity(entity: number | IEntity, maxSpeedToPredict: number): Vector3 {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return new Vector3(Citizen.invokeNative('0xAA5FAFCD2C5F5E47', _entity, maxSpeedToPredict));
}

/**
 * No comment provided
 * 
 * Hash: 0x24409FC4C55CB22D | Since: unknown
 */
export function getPresenceInviteContentId(): string {
    return NetworkGetPresenceInviteContentId(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3DBF2DF0AEB7D289 | Since: unknown
 */
export function getPresenceInviteFromAdmin(): boolean {
    return NetworkGetPresenceInviteFromAdmin(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x38D5B0FEBB086F75 | Since: unknown
 */
export function getPresenceInviteHandle(): [boolean, any] {
    return NetworkGetPresenceInviteHandle(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFF09646E12EC386 | Since: unknown
 */
export function getPresenceInviteId(): number {
    return NetworkGetPresenceInviteId(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x742B58F723233ED9 | Since: unknown
 */
export function getPresenceInviteIndexById(): number {
    return Citizen.invokeNative('0x742B58F723233ED9', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x4962CC4AA2F345B7 | Since: unknown
 */
export function getPresenceInviteInviter(): string {
    return NetworkGetPresenceInviteInviter(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x8806CEBFABD3CE05 | Since: unknown
 */
export function getPresenceInviteIsTournament(): boolean {
    return NetworkGetPresenceInviteIsTournament(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x728C4CC7920CD102 | Since: unknown
 */
export function getPresenceInvitePlaylistCurrent(): number {
    return NetworkGetPresenceInvitePlaylistCurrent(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD39B3FFF8FFDD5BF | Since: unknown
 */
export function getPresenceInvitePlaylistLength(): number {
    return NetworkGetPresenceInvitePlaylistLength(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x26E1CD96B0903D60 | Since: unknown
 */
export function getPresenceInviteSessionId(): number {
    return NetworkGetPresenceInviteSessionId(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x042E4B70B93E6054 | Since: unknown
 */
export function getPrimaryClanDataCancel(): void {
    NetworkGetPrimaryClanDataCancel();
}

/**
 * No comment provided
 * 
 * Hash: 0x9AA46BADAD0E27ED | Since: unknown
 */
export function getPrimaryClanDataClear(): boolean {
    return NetworkGetPrimaryClanDataClear();
}

/**
 * No comment provided
 * 
 * Hash: 0xC080FF658B2E41DA | Since: unknown
 */
export function getPrimaryClanDataNew(): [boolean, any, any] {
    return NetworkGetPrimaryClanDataNew();
}

/**
 * No comment provided
 * 
 * Hash: 0xB5074DB804E28CE7 | Since: unknown
 */
export function getPrimaryClanDataPending(): boolean {
    return NetworkGetPrimaryClanDataPending();
}

/**
 * No comment provided
 * 
 * Hash: 0xCE86D8191B762107 | Since: unknown
 */
export function getPrimaryClanDataStart(): [boolean, any] {
    return NetworkGetPrimaryClanDataStart(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B4F04F19376A0BA | Since: unknown
 */
export function getPrimaryClanDataSuccess(): boolean {
    return NetworkGetPrimaryClanDataSuccess();
}

/**
 * No comment provided
 * 
 * Hash: 0x599E4FA1F87EB5FF | Since: unknown
 */
export function getRandomInt(): number {
    return NetworkGetRandomInt();
}

/**
 * Same as GET_RANDOM_INT_IN_RANGE
 * 
 * Hash: 0xE30CF56F1EFA5F43 | Since: unknown
 */
export function getRandomIntRanged(rangeStart: number, rangeEnd: number): number {
    return NetworkGetRandomIntRanged(rangeStart, rangeEnd);
}

/**
 * Based on scripts such as in freemode.c how they call their vars vVar and fVar the 2nd and 3rd param it a Vector3 and Float, but the first is based on get_random_int_in_range..
 * 
 * Hash: 0x371EA43692861CF1 | Since: unknown
 */
export function getRespawnResult(randomInt: number): [Vector3, number] {
    return NetworkGetRespawnResult(randomInt);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C34F1208B8923FD | Since: unknown
 */
export function getRespawnResultFlags(): number {
    return NetworkGetRespawnResultFlags(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x57D158647A6BFABF | Since: unknown
 */
export function getScriptStatus(): number {
    return NetworkGetScriptStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0x9FA18B5CD8803086 | Since: unknown
 */
export function getScMembershipInfo(): any {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0x9FA18B5CD8803086)'); return;
    return Citizen.invokeNative('0x9FA18B5CD8803086');
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0x2555CF7DA5473794 | Since: unknown
 */
export function getSignallingInfo(): any {
    return Citizen.invokeNative('0x2555CF7DA5473794');
}

/**
 * No comment provided
 * 
 * Hash: 0x84F0F13120B4E098 | Since: unknown
 */
export function getTalkerProximity(): number {
    return NetworkGetTalkerProximity();
}

/**
 * No comment provided
 * 
 * Hash: 0x2910669969E9535E | Since: unknown
 */
export function getThisScriptIsNetworkScript(): boolean {
    return NetworkGetThisScriptIsNetworkScript();
}

/**
 * No comment provided
 * 
 * Hash: 0x5ED0356A0CE3A34F | Since: unknown
 */
export function getTimeoutTime(): number {
    return NetworkGetTimeoutTime();
}

/**
 * No comment provided
 * 
 * Hash: 0xCF61D4B4702EE9EB | Since: unknown
 */
export function getTotalNumPlayers(): number {
    return NetworkGetTotalNumPlayers();
}

/**
 * No comment provided
 * 
 * Hash: 0x65042B9774C4435E | Since: unknown
 */
export function getTransitionHost(): [boolean, any] {
    return NetworkGetTransitionHost();
}

/**
 * Returns count.
 * 
 * Hash: 0x73B000F7FBC55829 | Since: unknown
 */
export function getTransitionMembers(dataCount: number): [number, any] {
    return NetworkGetTransitionMembers(dataCount);
}

/**
 * Actually returns the version (TUNABLE_VERSION)
 * 
 * Hash: 0x10BD227A753B0D84 | Since: unknown
 */
export function getTunableCloudCrc(): number {
    return NetworkGetTunableCloudCrc();
}

/**
 * No comment provided
 * 
 * Hash: 0x3765C3A3E8192E10 | Since: unknown
 */
export function getUnreliableResendCount(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkGetUnreliableResendCountForPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xD45CB817D7E177D2 | Since: unknown
 */
export function handleFromFriend(friendIndex: number, gamerHandleSize: number): any {
    return NetworkHandleFromFriend(friendIndex, gamerHandleSize);
}

/**
 * No comment provided
 * 
 * Hash: 0xA0FD21BED61E5C4C | Since: unknown
 */
export function handleFromMemberId(memberId: string, gamerHandleSize: number): any {
    return NetworkHandleFromMemberId(memberId, gamerHandleSize);
}

/**
 * No comment provided
 * 
 * Hash: 0x388EB2B86C73B6B3 | Since: unknown
 */
export function handleFromPlayer(player: number | string | IPlayer, gamerHandleSize: number): any {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkHandleFromPlayer(_player, gamerHandleSize);
}

/**
 * No comment provided
 * 
 * Hash: 0xDCD51DD8F87AEC5C | Since: unknown
 */
export function handleFromUserId(userId: string, gamerHandleSize: number): any {
    return NetworkHandleFromUserId(userId, gamerHandleSize);
}

/**
 * No comment provided
 * 
 * Hash: 0x58575AC3CF2CA8EC | Since: unknown
 */
export function hashFromGamerHandle(): [number, any] {
    return NetworkHashFromGamerHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0xBC1D768F2F5D6C05 | Since: unknown
 */
export function hashFromPlayerHandle(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkHashFromPlayerHandle(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x1353F87E89946207 | Since: unknown
 */
export function hasAgeRestrictions(): boolean {
    return NetworkHasAgeRestrictedProfile();
}

/**
 * No comment provided
 * 
 * Hash: 0x26F07DD83A5F7F98 | Since: unknown
 */
export function hasAutomuteOverride(): boolean {
    return Citizen.invokeNative('0x26F07DD83A5F7F98');
}

/**
 * No comment provided
 * 
 * Hash: 0x2E0BF682CC778D49 | Since: unknown
 */
export function hasBoneBeenHitByKiller(boneIndex: number): boolean {
    return Citizen.invokeNative('0x2E0BF682CC778D49', boneIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x237D5336A9A54108 | Since: unknown
 */
export function hasCachedPlayerHeadBlendData(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkHasCachedPlayerHeadBlendData(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xC42DD763159F3461 | Since: unknown
 */
export function hasConfirmedInvite(): boolean {
    return Citizen.invokeNative('0xC42DD763159F3461');
}

/**
 * No comment provided
 * 
 * Hash: 0xCB3C68ADB06195DF | Since: unknown
 */
export function hasControlOfDoor(doorHash: number | string): boolean {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    return NetworkHasControlOfDoor(doorHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x01BF60A500E28887 | Since: unknown
 */
export function hasControlOfEntity(entity: number | IEntity): boolean {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return NetworkHasControlOfEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x4D36070FE0215186 | Since: unknown
 */
export function hasControlOfNetworkId(netId: number): boolean {
    return NetworkHasControlOfNetworkId(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0x5BC9495F0B3B6FA6 | Since: unknown
 */
export function hasControlOfPickup(pickup: any): boolean {
    return NetworkHasControlOfPickup(pickup);
}

/**
 * No comment provided
 * 
 * Hash: 0xB07D3185E11657A5 | Since: unknown
 */
export function hasEntityBeenRegisteredWithThisThread(entity: number | IEntity): boolean {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return NetworkHasEntityBeenRegisteredWithThisThread(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x76D9B976C4C09FDE | Since: unknown
 */
export function hasFollowInvite(): boolean {
    return NetworkHasFollowInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0xE870F9F1F7B4F1FA | Since: unknown
 */
export function hasHeadset(): boolean {
    return NetworkHasHeadset();
}

/**
 * No comment provided
 * 
 * Hash: 0x4D86CD31E8976ECE | Since: unknown
 */
export function hasInvitedGamer(): [boolean, any] {
    return NetworkHasInvitedGamer();
}

/**
 * No comment provided
 * 
 * Hash: 0x7284A47B3540E6CF | Since: unknown
 */
export function hasInvitedGamerToTransition(): [boolean, any] {
    return NetworkHasInvitedGamerToTransition();
}

/**
 * No comment provided
 * 
 * Hash: 0x71DC455F5CD1C2B1 | Since: unknown
 */
export function hasMadeInviteDecision(): [boolean, any] {
    return NetworkHasInviteBeenAcked();
}

/**
 * No comment provided
 * 
 * Hash: 0xAC8C7B9B88C4A668 | Since: unknown
 */
export function hasPendingInvite(): boolean {
    return NetworkHasPendingInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0x9AC9CCBFA8C29795 | Since: unknown
 */
export function hasPlayerStartedTransition(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkHasPlayerStartedTransition(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x5D10B3795F3FC886 | Since: unknown
 */
export function hasReceivedHostBroadcastData(): boolean {
    return NetworkHasReceivedHostBroadcastData();
}

/**
 * index is always 18 in scripts
 * 
 * Hash: 0xA699957E60D80214 | Since: unknown
 */
export function hasRosPrivilege(index: number): boolean {
    return NetworkHasRosPrivilege(index);
}

/**
 * No comment provided
 * 
 * Hash: 0xC22912B1D85F26B1 | Since: unknown
 */
export function hasRosPrivilegeEndDate(privilege: number): [boolean, number, any] {
    return NetworkHasRosPrivilegeEndDate(privilege);
}

/**
 * No comment provided
 * 
 * Hash: 0x593570C289A77688 | Since: unknown
 */
export function hasRosPrivilegePlayedLastGen(): boolean {
    return NetworkGetRosPrivilege24();
}

/**
 * No comment provided
 * 
 * Hash: 0x91B87C55093DE351 | Since: unknown
 */
export function hasRosPrivilegeSpecialEditionContent(): boolean {
    return NetworkGetRosPrivilege25();
}

/**
 * No comment provided
 * 
 * Hash: 0xAB286B2192A71E32 | Since: unknown
 */
export function hasScMembership(): boolean {
    return Citizen.invokeNative('0xAB286B2192A71E32');
}

/**
 * No comment provided
 * 
 * Hash: 0x483F6369B8CEE24B | Since: unknown
 */
export function hasScMembershipInfo(): boolean {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0x483F6369B8CEE24B)'); return;
    return Citizen.invokeNative('0x483F6369B8CEE24B');
}

/**
 * No comment provided
 * 
 * Hash: 0x67A5589628E0CFF6 | Since: unknown
 */
export function hasSocialClubAccount(): boolean {
    return NetworkHasSocialClubAccount();
}

/**
 * No comment provided
 * 
 * Hash: 0x76BF03FADBF154F5 | Since: unknown
 */
export function hasSocialNetworkingSharingPriv(): boolean {
    return NetworkHasSocialNetworkingSharingPriv();
}

/**
 * No comment provided
 * 
 * Hash: 0x3F9990BF5F22759C | Since: unknown
 */
export function hasTransitionInviteBeenAcked(): [boolean, any] {
    return NetworkHasTransitionInviteBeenAcked();
}

/**
 * Returns whether the signed-in user has valid Rockstar Online Services (ROS) credentials.
 * 
 * Hash: 0x85443FF4C328F53B | Since: unknown
 */
export function hasValidRosCredentials(): boolean {
    return NetworkHasValidRosCredentials();
}

/**
 * No comment provided
 * 
 * Hash: 0xCCA4318E1AB03F1F | Since: unknown
 */
export function hasViewGamerUserContentResult(): [boolean, any] {
    return NetworkHasViewGamerUserContentResult();
}

/**
 * No comment provided
 * 
 * Hash: 0xAEEF48CDF5B6CE7C | Since: unknown
 */
export function haveCommunicationPrivileges(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkHaveCommunicationPrivileges(0, _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x25CB5A9F37BFD063 | Since: unknown
 */
export function haveOnlinePrivileges(): boolean {
    return NetworkHaveOnlinePrivileges();
}

/**
 * No comment provided
 * 
 * Hash: 0x5EA784D197556507 | Since: unknown
 */
export function havePlatformSubscription(): boolean {
    return NetworkHaveOnlinePrivilege2();
}

/**
 * No comment provided
 * 
 * Hash: 0x8020A73847E0CA7D | Since: unknown
 */
export function haveRosBannedPriv(): boolean {
    return NetworkHaveRosBannedPriv();
}

/**
 * No comment provided
 * 
 * Hash: 0xA0AD7E2AF5349F61 | Since: unknown
 */
export function haveRosCreateTicketPriv(): boolean {
    return NetworkHaveRosCreateTicketPriv();
}

/**
 * No comment provided
 * 
 * Hash: 0x422D396F80A96547 | Since: unknown
 */
export function haveRosLeaderboardWritePriv(): boolean {
    return NetworkHaveRosLeaderboardWritePriv();
}

/**
 * No comment provided
 * 
 * Hash: 0x5F91D5D0B36AA310 | Since: unknown
 */
export function haveRosMultiplayerPriv(): boolean {
    return NetworkHaveRosMultiplayerPriv();
}

/**
 * No comment provided
 * 
 * Hash: 0x606E4D3E3CCCF3EB | Since: unknown
 */
export function haveRosSocialClubPriv(): boolean {
    return NetworkHaveRosSocialClubPriv();
}

/**
 * No comment provided
 * 
 * Hash: 0x66B59CFFD78467AF | Since: unknown
 */
export function haveScsPrivateMsgPriv(): boolean {
    return NetworkGetRosPrivilege9();
}

/**
 * No comment provided
 * 
 * Hash: 0x72D918C99BCACC54 | Since: unknown
 */
export function haveUserContentPrivileges(): boolean {
    return NetworkHaveUserContentPrivileges(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xFAC18E7356BD3210 | Since: unknown
 */
export function hideProjectileInCutscene(): void {
    Citizen.invokeNative('0xFAC18E7356BD3210');
}

/**
 * p0: Unknown int
 * p1: Unknown int
 * p2: Unknown int
 * p3: Unknown int
 * p4: Unknown always 0 in decompiled scripts
 * p5: BOOL purpose unknown, both 0 and 1 are used in decompiled scripts.
 * p6: BOOL purpose unknown, both 0 and 1 are used in decompiled scripts.
 * p7: Unknown int, it's an int according to decompiled scripts, however the value is always 0 or 1.
 * p8: Unknown int, it's an int according to decompiled scripts, however the value is always 0 or 1.
 * p9: Unknown int, sometimes 0, but also 32768 or 16384 appear in decompiled scripst, maybe a flag of some sort?
 * 
 * From what I can tell it looks like it does the following:
 * Creates/hosts a new transition to another online session, using this in FiveM will result in other players being disconencted from the server/preventing them from joining. This is most likely because I entered the wrong session parameters since they're pretty much all unknown right now.
 * You also need to use `NetworkJoinTransition(Player player)` and `NetworkLaunchTransition()`.
 * 
 * Hash: 0xA60BB5CE242BB254 | Since: unknown
 */
export function hostTransition(): boolean {
    return NetworkHostTransition(0, 0, 0, 0, undefined, false, false, 0, undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C2A9FDC22377075 | Since: unknown
 */
export function ignoreRemoteWaypoints(): void {
    Citizen.invokeNative('0x4C2A9FDC22377075');
}

/**
 * No comment provided
 * 
 * Hash: 0x9D80CD1D0E6327DE | Since: unknown
 */
export function inviteGamers(): [boolean, any, any] {
    return NetworkInviteGamers(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4A595C32F77DFF76 | Since: unknown
 */
export function inviteGamersToTransition(): [boolean, any] {
    return NetworkInviteGamersToTransition(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x05095437424397FA | Since: unknown
 */
export function isActivitySession(): boolean {
    return NetworkIsActivitySession();
}

/**
 * No comment provided
 * 
 * Hash: 0x12103B9E0C9F92FB | Since: unknown
 */
export function isActivitySpectator(): boolean {
    return NetworkIsActivitySpectator();
}

/**
 * No comment provided
 * 
 * Hash: 0x2763BBAA72A7BCB9 | Since: unknown
 */
export function isActivitySpectatorFromHandle(): [boolean, any] {
    return NetworkIsActivitySpectatorFromHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0x6EA101606F6E4D81 | Since: unknown
 */
export function isAddingFriend(): boolean {
    return NetworkIsAddingFriend();
}

/**
 * No comment provided
 * 
 * Hash: 0x2E4C123D1C8A710E | Since: unknown
 */
export function isAnyPlayerNear(): boolean {
    return Citizen.invokeNative('0x2E4C123D1C8A710E', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEFFB25453D8600F9 | Since: unknown
 */
export function isCableConnected(): boolean {
    return NetworkIsCableConnected();
}

/**
 * This would be nice to see if someone is in party chat, but 2 sad notes.
 * 1) It only becomes true if said person is speaking in that party at the time.
 * 2) It will never, become true unless you are in that party with said person.
 * 
 * Hash: 0x8DE9945BCC9AEC52 | Since: unknown
 */
export function isChattingInPlatformParty(): [boolean, any] {
    return NetworkIsChattingInPlatformParty();
}

/**
 * No comment provided
 * 
 * Hash: 0xD7C95D322FF57522 | Since: unknown
 */
export function isClockTimeOverridden(): boolean {
    return NetworkIsClockTimeOverridden();
}

/**
 * No comment provided
 * 
 * Hash: 0x9A4CF4F48AD77302 | Since: unknown
 */
export function isCloudAvailable(): boolean {
    return NetworkIsCloudAvailable();
}

/**
 * No comment provided
 * 
 * Hash: 0x8132C0EB8B2B3293 | Since: unknown
 */
export function isCloudBackgroundScriptRequestPending(): boolean {
    return NetworkIsCloudBackgroundScriptRequestPending();
}

/**
 * No comment provided
 * 
 * Hash: 0x16D3D49902F697BB | Since: unknown
 */
export function isConnectedViaRelay(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsConnectionEndpointRelayServer(_player);
}

/**
 * This function is hard-coded to always return 1.
 * 
 * Hash: 0x7808619F31FF22DB | Since: unknown
 */
export function isConnetedToNpPresence(): boolean {
    return Citizen.invokeNative('0x7808619F31FF22DB');
}

/**
 * No comment provided
 * 
 * Hash: 0xC01E93FAC20C3346 | Since: unknown
 */
export function isDoorNetworked(doorHash: number | string): boolean {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    return NetworkIsDoorNetworked(doorHash);
}

/**
 * Note: This only works for vehicles, which appears to be a bug (since the setter _does_ work for every entity type and the name is 99% correct).
 * 
 * Hash: 0x71302EC70689052A | Since: unknown
 */
export function isEntityConcealed(entity: number | IEntity): boolean {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return NetworkIsEntityConcealed(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x422F32CC7E56ABAD | Since: unknown
 */
export function isEntityFading(entity: number | IEntity): boolean {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return NetworkIsEntityFading(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDDF64C91BFCF0AA | Since: unknown
 */
export function isFindingGamers(): boolean {
    return NetworkIsFindingGamers();
}

/**
 * No comment provided
 * 
 * Hash: 0x1A24A179F9B31654 | Since: unknown
 */
export function isFriend(): [boolean, any] {
    return NetworkIsFriend();
}

/**
 * No comment provided
 * 
 * Hash: 0x87EB7A3FFCB314DB | Since: unknown
 */
export function isFriendHandleOnline(): [boolean, any] {
    return NetworkIsFriendHandleOnline();
}

/**
 * No comment provided
 * 
 * Hash: 0xBAD8F2A42B844821 | Since: unknown
 */
export function isFriendIndexOnline(friendIndex: number): boolean {
    return NetworkIsFriendIndexOnline(friendIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x57005C18827F3A28 | Since: unknown
 */
export function isFriendInMultiplayer(friendName: string): boolean {
    return NetworkIsFriendInMultiplayer(friendName);
}

/**
 * In scripts R* calls 'NETWORK_GET_FRIEND_NAME' in this param.
 * 
 * Hash: 0x2EA9A3BEDF3F17B8 | Since: unknown
 */
export function isFriendInSameTitle(friendName: string): boolean {
    return NetworkIsFriendInSameTitle(friendName);
}

/**
 * No comment provided
 * 
 * Hash: 0x425A44533437B64D | Since: unknown
 */
export function isFriendOnline(name: string): boolean {
    return NetworkIsFriendOnline(name);
}

/**
 * No comment provided
 * 
 * Hash: 0xE944C4F5AF1B5883 | Since: unknown
 */
export function isGamerBlockedByMe(): [boolean, any] {
    return NetworkIsGamerBlockedByMe();
}

/**
 * No comment provided
 * 
 * Hash: 0x0F10B05DDF8D16E9 | Since: unknown
 */
export function isGamerInMySession(): [boolean, any] {
    return NetworkIsGamerInMySession();
}

/**
 * No comment provided
 * 
 * Hash: 0xCE60DE011B6C7978 | Since: unknown
 */
export function isGamerMutedByMe(): [boolean, any] {
    return NetworkIsGamerMutedByMe();
}

/**
 * No comment provided
 * 
 * Hash: 0x71C33B22606CD88A | Since: unknown
 */
export function isGamerTalking(): [boolean, any] {
    return NetworkIsGamerTalking();
}

/**
 * No comment provided
 * 
 * Hash: 0x10FAB35428CCC9D7 | Since: unknown
 */
export function isGameInProgress(): boolean {
    return NetworkIsGameInProgress();
}

/**
 * No comment provided
 * 
 * Hash: 0x94A8394D150B013A | Since: unknown
 */
export function isGettingGamerStatus(): boolean {
    return NetworkIsGettingGamerStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0x6F79B93B0A8E4133 | Since: unknown
 */
export function isHandleValid(gamerHandleSize: number): [boolean, any] {
    return NetworkIsHandleValid(gamerHandleSize);
}

/**
 * If you are host, returns true else returns false.
 * 
 * Hash: 0x8DB296B814EDDA07 | Since: unknown
 */
export function isHost(): boolean {
    return NetworkIsHost();
}

/**
 * No comment provided
 * 
 * Hash: 0x83CD99A1E6061AB5 | Since: unknown
 */
export function isHostOfThisScript(): boolean {
    return NetworkIsHostOfThisScript();
}

/**
 * No comment provided
 * 
 * Hash: 0x7E58745504313A2E | Since: unknown
 */
export function isInactiveProfile(): [boolean, any] {
    return NetworkIsInactiveProfile();
}

/**
 * No comment provided
 * 
 * Hash: 0x6CC27C9FA2040220 | Since: unknown
 */
export function isInMpCutscene(): boolean {
    return NetworkIsInMpCutscene();
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0x2FC5650B0271CB57 | Since: unknown
 */
export function isInPlatformParty(): boolean {
    return NetworkIsInPlatformParty();
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0xFD8B834A8BA05048 | Since: unknown
 */
export function isInPlatformPartyChat(): boolean {
    return NetworkIsInPlatformPartyChat();
}

/**
 * No comment provided
 * 
 * Hash: 0xCA97246103B63917 | Since: unknown
 */
export function isInSession(): boolean {
    return NetworkIsInSession();
}

/**
 * No comment provided
 * 
 * Hash: 0x048746E388762E11 | Since: unknown
 */
export function isInSpectatorMode(): boolean {
    return NetworkIsInSpectatorMode();
}

/**
 * No comment provided
 * 
 * Hash: 0x68049AEFF83D8F0A | Since: unknown
 */
export function isInTransition(): boolean {
    return NetworkIsInTransition();
}

/**
 * No comment provided
 * 
 * Hash: 0xADA24309FE08DACF | Since: unknown
 */
export function isInTutorialSession(): boolean {
    return NetworkIsInTutorialSession();
}

/**
 * No comment provided
 * 
 * Hash: 0x8A8694B48715B000 | Since: unknown
 */
export function isLocalPlayerInvincible(): boolean {
    return NetworkIsLocalPlayerInvincible();
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0xA0FA4EC6A05DA44E | Since: unknown
 */
export function isLoggedInToPsn(): boolean {
    return Citizen.invokeNative('0xA0FA4EC6A05DA44E');
}

/**
 * No comment provided
 * 
 * Hash: 0x9747292807126EDA | Since: unknown
 */
export function isMultiplayerDisabled(): boolean {
    return NetworkIsMultiplayerDisabled();
}

/**
 * Returns true if the specified network id is controlled by someone else.
 * 
 * Hash: 0x7242F8B741CE1086 | Since: unknown
 */
export function isNetworkIdRemotelyControlled(netId: number): boolean {
    return NetworkIsNetworkIdAClone(netId);
}

/**
 * This function is hard-coded to always return 1.
 * 
 * Hash: 0xBD545D44CCE70597 | Since: unknown
 */
export function isNpAvailable(): boolean {
    return Citizen.invokeNative('0xBD545D44CCE70597');
}

/**
 * This function is hard-coded to always return 1.
 * 
 * Hash: 0xEBCAB9E5048434F4 | Since: unknown
 */
export function isNpPending(): boolean {
    return Citizen.invokeNative('0xEBCAB9E5048434F4');
}

/**
 * No comment provided
 * 
 * Hash: 0x74698374C45701D2 | Since: unknown
 */
export function isOfflineInvitePending(): boolean {
    return NetworkIsOfflineInvitePending();
}

/**
 * No comment provided
 * 
 * Hash: 0x6FF8FF40B6357D45 | Since: unknown
 */
export function isParticipantActive(): boolean {
    return NetworkIsParticipantActive(0);
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0x0BE73DA6984A6E33 | Since: unknown
 */
export function isPendingFriend(): boolean {
    return NetworkIsPendingFriend(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA8ACB6459542A8C8 | Since: unknown
 */
export function isPlatformSubscriptionCheckPending(): boolean {
    return Citizen.invokeNative('0xA8ACB6459542A8C8');
}

/**
 * No comment provided
 * 
 * Hash: 0xB8DFD30D6973E135 | Since: unknown
 */
export function isPlayerActive(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerActive(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x3CA58F6CB7CBD784 | Since: unknown
 */
export function isPlayerAParticipant(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerAParticipant(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x1AD5B71586B94820 | Since: unknown
 */
export function isPlayerAParticipantOnScript(player: number | string | IPlayer, script: string, instance_id: number): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerAParticipantOnScript(_player, script, instance_id);
}

/**
 * No comment provided
 * 
 * Hash: 0x57AF1F8E27483721 | Since: unknown
 */
export function isPlayerBlockedByMe(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerBlockedByMe(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x919B3C98ED8292F9 | Since: unknown
 */
export function isPlayerConcealed(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerConcealed(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x93DC1BE4E1ABE9D1 | Since: unknown
 */
export function isPlayerConnected(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerConnected(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x631DC5DFF4B110E3 | Since: unknown
 */
export function isPlayerFading(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerFading(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x63F9EE203C3619F2 | Since: unknown
 */
export function isPlayerInMpCutscene(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerInMpCutscene(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x8C71288AE68EDE39 | Since: unknown
 */
export function isPlayerMutedByMe(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerMutedByMe(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xAD4326FCA30D62F8 | Since: unknown
 */
export function isPlayerOnBlocklist(): [boolean, any] {
    return Citizen.invokeNative('0xAD4326FCA30D62F8');
}

/**
 * returns true if someone is screaming or talking in a microphone
 * 
 * Hash: 0x031E11F3D447647E | Since: unknown
 */
export function isPlayerTalking(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkIsPlayerTalking(_player);
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0x64E5C4CC82847B73 | Since: unknown
 */
export function isPrivilegeCheckInProgress(): boolean {
    return Citizen.invokeNative('0x64E5C4CC82847B73');
}

/**
 * No comment provided
 * 
 * Hash: 0xC0D2AF00BCC234CA | Since: unknown
 */
export function isPushToTalkActive(): boolean {
    return NetworkIsLocalTalking();
}

/**
 * No comment provided
 * 
 * Hash: 0x14922ED3E38761F0 | Since: unknown
 */
export function isQueuingForSessionJoin(): boolean {
    return Citizen.invokeNative('0x14922ED3E38761F0');
}

/**
 * No comment provided
 * 
 * Hash: 0x8D11E61A4ABF49CC | Since: unknown
 */
export function isRefreshingRosCredentials(): boolean {
    return NetworkIsPsnAvailable();
}

/**
 * No comment provided
 * 
 * Hash: 0x9D40DF90FAD26098 | Since: unknown
 */
export function isScriptActive(scriptName: string, instance_id: number, position_hash: number): boolean {
    return NetworkIsScriptActive(scriptName, instance_id, false, position_hash);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA7DE67F5FE5EE13 | Since: unknown
 */
export function isScriptActiveByHash(scriptHash: number | string): boolean {
    if (typeof scriptHash === 'string') scriptHash = GetHashKey(scriptHash)
    return NetworkIsScriptActiveByHash(scriptHash, 0, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD83C2B94E7508980 | Since: unknown
 */
export function isSessionActive(): boolean {
    return NetworkIsSessionActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xF4435D66A8E2905E | Since: unknown
 */
export function isSessionBusy(): boolean {
    return NetworkIsSessionBusy();
}

/**
 * This checks if player is playing on gta online or not.
 * Please add an if and block your mod if this is "true".
 * 
 * Hash: 0x9DE624D2FC4B603F | Since: unknown
 */
export function isSessionStarted(): boolean {
    return NetworkIsSessionStarted();
}

/**
 * No comment provided
 * 
 * Hash: 0x7788DFE15016A182 | Since: unknown
 */
export function isShowingSystemUiOrRecentlyRequestedUpsell(): boolean {
    return Citizen.invokeNative('0x7788DFE15016A182');
}

/**
 * Returns whether the player is signed into Social Club.
 * 
 * Hash: 0x054354A99211EB96 | Since: unknown
 */
export function isSignedIn(): boolean {
    return NetworkIsSignedIn();
}

/**
 * Returns whether the game is not in offline mode.
 * 
 * seemed not to work for some ppl
 * 
 * Hash: 0x1077788E268557C2 | Since: unknown
 */
export function isSignedOnline(): boolean {
    return NetworkIsSignedOnline();
}

/**
 * No comment provided
 * 
 * Hash: 0x560B423D73015E77 | Since: unknown
 */
export function isThreadANetworkScript(threadId: number): boolean {
    return Citizen.invokeNative('0x560B423D73015E77', threadId);
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0x6FB7BB3607D27FA2 | Since: unknown
 */
export function isTitleUpdateRequired(): boolean {
    return Citizen.invokeNative('0x6FB7BB3607D27FA2');
}

/**
 * No comment provided
 * 
 * Hash: 0x520F3282A53D26B7 | Since: unknown
 */
export function isTransitionBusy(): boolean {
    return NetworkIsTransitionBusy();
}

/**
 * No comment provided
 * 
 * Hash: 0x0DBD5D7E3C5BEC3B | Since: unknown
 */
export function isTransitionClosedCrew(): boolean {
    return NetworkIsTransitionClosedCrew();
}

/**
 * No comment provided
 * 
 * Hash: 0x6512765E3BE78C50 | Since: unknown
 */
export function isTransitionClosedFriends(): boolean {
    return NetworkIsTransitionClosedFriends();
}

/**
 * No comment provided
 * 
 * Hash: 0x0B824797C9BF2159 | Since: unknown
 */
export function isTransitionHost(): boolean {
    return NetworkIsTransitionHost();
}

/**
 * No comment provided
 * 
 * Hash: 0x6B5C83BA3EFE6A10 | Since: unknown
 */
export function isTransitionHostFromHandle(): [boolean, any] {
    return NetworkIsTransitionHostFromHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0xC571D0E77D8BBC29 | Since: unknown
 */
export function isTransitionLeavePostponed(): boolean {
    return Citizen.invokeNative('0xC571D0E77D8BBC29');
}

/**
 * No comment provided
 * 
 * Hash: 0x292564C735375EDF | Since: unknown
 */
export function isTransitionMatchmaking(): boolean {
    return NetworkIsTransitionMatchmaking();
}

/**
 * No comment provided
 * 
 * Hash: 0x37A4494483B9F5C9 | Since: unknown
 */
export function isTransitionOpenToMatchmaking(): boolean {
    return NetworkIsTransitionOpenToMatchmaking();
}

/**
 * No comment provided
 * 
 * Hash: 0x5A6AA44FF8E931E6 | Since: unknown
 */
export function isTransitionPrivate(): boolean {
    return NetworkIsTransitionPrivate();
}

/**
 * No comment provided
 * 
 * Hash: 0x5DC577201723960A | Since: unknown
 */
export function isTransitionSolo(): boolean {
    return NetworkIsTransitionSolo();
}

/**
 * No comment provided
 * 
 * Hash: 0x53FA83401D9C07FE | Since: unknown
 */
export function isTransitionStarted(): boolean {
    return NetworkIsTransitionStarted();
}

/**
 * No comment provided
 * 
 * Hash: 0x9D7696D8F4FA6CB7 | Since: unknown
 */
export function isTransitionToGame(): boolean {
    return NetworkIsTransitionToGame();
}

/**
 * No comment provided
 * 
 * Hash: 0xD0A484CB2F829FBE | Since: unknown
 */
export function isTransitionVisibilityLocked(): boolean {
    return NetworkIsTransitionVisibilityLocked();
}

/**
 * No comment provided
 * 
 * Hash: 0x0467C11ED88B7D28 | Since: unknown
 */
export function isTunableCloudRequestPending(): boolean {
    return NetworkIsTunableCloudRequestPending();
}

/**
 * No comment provided
 * 
 * Hash: 0x35F0B98A8387274D | Since: unknown
 */
export function isTutorialSessionChangePending(): boolean {
    return NetworkIsTutorialSessionChangePending();
}

/**
 * No comment provided
 * 
 * Hash: 0x906CA41A4B74ECA4 | Since: unknown
 */
export function isUsingOnlinePromotion(): boolean {
    return Citizen.invokeNative('0x906CA41A4B74ECA4');
}

/**
 * No comment provided
 * 
 * Hash: 0xA06509A691D12BE4 | Since: unknown
 */
export function joinGroupActivity(): boolean {
    return NetworkJoinGroupActivity();
}

/**
 * No comment provided
 * 
 * Hash: 0x59DF79317F85A7E0 | Since: unknown
 */
export function joinPreviouslyFailedSession(): boolean {
    return NetworkJoinPreviouslyFailedSession();
}

/**
 * No comment provided
 * 
 * Hash: 0xFFE1E5B792D92B34 | Since: unknown
 */
export function joinPreviouslyFailedTransition(): boolean {
    return NetworkJoinPreviouslyFailedTransition();
}

/**
 * int handle[76];
 * NETWORK_HANDLE_FROM_FRIEND(iSelectedPlayer, &handle[0], 13);
 * Player uVar2 = NETWORK_GET_PLAYER_FROM_GAMER_HANDLE(&handle[0]);
 * NETWORK_JOIN_TRANSITION(uVar2);
 * nothing doin.
 * 
 * Hash: 0x9D060B08CD63321A | Since: unknown
 */
export function joinTransition(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkJoinTransition(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x17C9E241111A674D | Since: unknown
 */
export function keepEntityCollisionDisabledAfterAnimScene(): void {
    Citizen.invokeNative('0x17C9E241111A674D', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2DCF46CB1A4F0884 | Since: unknown
 */
export function launchTransition(): boolean {
    return NetworkLaunchTransition();
}

/**
 * No comment provided
 * 
 * Hash: 0xBF22E0F32968E967 | Since: unknown
 */
export function leavePedBehindBeforeCutscene(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    Citizen.invokeNative('0xBF22E0F32968E967', _player, false);
}

/**
 * p4 and p5 are always 0 in scripts
 * 
 * Hash: 0x9769F811D1785B03 | Since: unknown
 */
export function leavePedBehindBeforeWarp(player: number | string | IPlayer, pos: Vector3): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    NetworkRespawnCoords(_player, pos.x, pos.y, pos.z, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD23A1A815D21DB19 | Since: unknown
 */
export function leaveTransition(): boolean {
    return NetworkLeaveTransition();
}

/**
 * No comment provided
 * 
 * Hash: 0x261E97AD7BCF3D40 | Since: unknown
 */
export function markAsPreferredActivity(): void {
    Citizen.invokeNative('0x261E97AD7BCF3D40', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x39917E1B4CB0F911 | Since: unknown
 */
export function markAsWaitingAsync(): void {
    Citizen.invokeNative('0x39917E1B4CB0F911', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5728BB6D63E3FF1D | Since: unknown
 */
export function markTransitionGamerAsFullyJoined(): [boolean, any] {
    return NetworkMarkTransitionGamerAsFullyJoined();
}

/**
 * No comment provided
 * 
 * Hash: 0xC82630132081BB6F | Since: unknown
 */
export function memberIdFromGamerHandle(): [string, any] {
    return NetworkMemberIdFromGamerHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0x53C10C8BD774F2C9 | Since: unknown
 */
export function needToStartNewGameButBlocked(): boolean {
    return Citizen.invokeNative('0x53C10C8BD774F2C9');
}

/**
 * No comment provided
 * 
 * Hash: 0x283B6062A2C01E9B | Since: unknown
 */
export function onReturnToSinglePlayer(): void {
    Citizen.invokeNative('0x283B6062A2C01E9B');
}

/**
 * No comment provided
 * 
 * Hash: 0x2B3A8F7CA3A38FDE | Since: unknown
 */
export function openTransitionMatchmaking(): void {
    NetworkOpenTransitionMatchmaking();
}

/**
 * Could possibly bypass being muted or automatically muted
 * 
 * Hash: 0x3039AE5AD2C9C0C4 | Since: unknown
 */
export function overrideChatRestrictions(player: number | string | IPlayer, toggle: boolean): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    NetworkOverrideChatRestrictions(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x42BF1D2E723B6D7E | Since: unknown
 */
export function overrideClockRate(ms: number): void {
    NetworkOverrideClockMillisecondsPerGameMinute(ms);
}

/**
 * Works in Singleplayer too.
 * Passing wrong data (e.g. hours above 23) will cause the game to crash.
 * 
 * Hash: 0xE679E3E06E363892 | Since: unknown
 */
export function overrideClockTime(hours: number, minutes: number, seconds: number): void {
    NetworkOverrideClockTime(hours, minutes, seconds);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7E30DE9272B6D49 | Since: unknown
 */
export function overrideCoordsAndHeading(entity: number | IEntity, pos: Vector3, heading: number): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkOverrideCoordsAndHeading(_entity, pos.x, pos.y, pos.z, heading);
}

/**
 * No comment provided
 * 
 * Hash: 0x04D27017A38E747D | Since: unknown
 */
export function overrideRealtimeMultiplayerControlDisable(): void {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0x04D27017A38E747D)'); return;
    Citizen.invokeNative('0x04D27017A38E747D');
}

/**
 * R* uses this to hear all player when spectating.
 * It allows you to hear other online players when their chat is on none, crew and or friends
 * 
 * Hash: 0xDDF73E2B1FEC5AB4 | Since: unknown
 */
export function overrideReceiveRestrictions(player: number | string | IPlayer, toggle: boolean): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    NetworkOverrideReceiveRestrictions(_player, toggle);
}

/**
 * p0 is always false in scripts.
 * 
 * Hash: 0x0FF2862B61A58AF9 | Since: unknown
 */
export function overrideReceiveRestrictionsAll(toggle: boolean): void {
    NetworkOverrideReceiveRestrictionsAll(toggle);
}

/**
 * This is used alongside the native,
 * 'NETWORK_OVERRIDE_RECEIVE_RESTRICTIONS'. Read its description for more info.
 * 
 * Hash: 0x97DD4C5944CC2E6A | Since: unknown
 */
export function overrideSendRestrictions(player: number | string | IPlayer, toggle: boolean): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    NetworkOverrideSendRestrictions(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x57B192B4D4AD23D5 | Since: unknown
 */
export function overrideSendRestrictionsAll(toggle: boolean): void {
    NetworkOverrideSendRestrictionsAll(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6F697A66CE78674E | Since: unknown
 */
export function overrideTeamRestrictions(team: number, toggle: boolean): void {
    NetworkOverrideTeamRestrictions(team, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xAF66059A131AA269 | Since: unknown
 */
export function overrideTransitionChat(): void {
    NetworkOverrideTransitionChat(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xF0BC9BCD24A511D5 | Since: unknown
 */
export function patchPostCutsceneHs4fTunEnt(ped: number | IPed): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    NetworkPedForceGameStateUpdate(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x559EBF901A8C68E0 | Since: unknown
 */
export function permissionsHasGamerRecord(): [boolean, any] {
    return Citizen.invokeNative('0x559EBF901A8C68E0');
}

/**
 * No comment provided
 * 
 * Hash: 0x172F75B6EE2233BA | Since: unknown
 */
export function playerGetCheaterReason(): number {
    return NetworkPlayerGetCheaterReason();
}

/**
 * Returns the name of a given player. Returns "**Invalid**" if rlGamerInfo of the given player cannot be retrieved or the player doesn't exist.
 * 
 * Hash: 0x7718D2E2060837D2 | Since: unknown
 */
export function playerGetName(player: number | string | IPlayer): string {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkPlayerGetName(_player);
}

/**
 * Returns a string of the player's Rockstar Id.
 * Takes a 24 char buffer. Returns the buffer or "**Invalid**" if rlGamerInfo of the given player cannot be retrieved or the player doesn't exist.
 * 
 * Hash: 0x4927FC39CD0869A0 | Since: unknown
 */
export function playerGetUserid(player: number | string | IPlayer): [string, number] {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkPlayerGetUserid(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FB99A8B08D18FD6 | Since: unknown
 */
export function playerHasHeadset(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkPlayerHasHeadset(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x565E430DB3B05BEC | Since: unknown
 */
export function playerIndexIsCheater(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkPlayerIndexIsCheater(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x19D8DA0E5A68045A | Since: unknown
 */
export function playerIsBadsport(): boolean {
    return NetworkPlayerIsBadsport();
}

/**
 * No comment provided
 * 
 * Hash: 0x655B91F1495A9090 | Since: unknown
 */
export function playerIsCheater(): boolean {
    return NetworkPlayerIsCheater();
}

/**
 * Checks if a specific value (BYTE) in CNetGamePlayer is nonzero.
 * Returns always false in Singleplayer.
 * 
 * No longer used for dev checks since first mods were released on PS3 & 360.
 * R* now checks with the IS_DLC_PRESENT native for the dlc hash 2532323046,
 * if that is present it will unlock dev stuff.
 * 
 * Hash: 0x544ABDDA3B409B6D | Since: unknown
 */
export function playerIsRockstarDev(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkPlayerIsRockstarDev(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A50277FD4E75404 | Since: unknown
 */
export function postUdsActivityAvailabilityChange(): any {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0x8A50277FD4E75404)'); return;
    return Citizen.invokeNative('0x8A50277FD4E75404');
}

/**
 * No comment provided
 * 
 * Hash: 0xC78F2FFEECA7EE57 | Since: unknown
 */
export function postUdsActivityEnd(activityId: string, iOutcome: number, iScore: number): void {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0xC78F2FFEECA7EE57)'); return;
    Citizen.invokeNative('0xC78F2FFEECA7EE57', activityId, iOutcome, iScore);
}

/**
 * No comment provided
 * 
 * Hash: 0xB8B3A6B404B1844B | Since: unknown
 */
export function postUdsActivityResume(activityId: string): void {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0xB8B3A6B404B1844B)'); return;
    Citizen.invokeNative('0xB8B3A6B404B1844B', activityId);
}

/**
 * No comment provided
 * 
 * Hash: 0xD06669003AD0DA58 | Since: unknown
 */
export function postUdsActivityResumeWithTasks(activityId: string): any {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0xD06669003AD0DA58)'); return;
    return Citizen.invokeNative('0xD06669003AD0DA58', activityId);
}

/**
 * No comment provided
 * 
 * Hash: 0x06FF3C88FCADEDB0 | Since: unknown
 */
export function postUdsActivityStart(activityId: string): void {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0x06FF3C88FCADEDB0)'); return;
    Citizen.invokeNative('0x06FF3C88FCADEDB0', activityId);
}

/**
 * Does nothing.
 * 
 * Hash: 0xC243F786521F4321 | Since: unknown
 */
export function postUdsActivityTerminate(): void {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0xC243F786521F4321)'); return;
    Citizen.invokeNative('0xC243F786521F4321');
}

/**
 * No comment provided
 * 
 * Hash: 0x2302C0264EA58D31 | Since: unknown
 */
export function preventScriptHostMigration(): void {
    Citizen.invokeNative('0x2302C0264EA58D31');
}

/**
 * No comment provided
 * 
 * Hash: 0x3C891A251567DFCE | Since: unknown
 */
export function queryRespawnResults(): [number, any] {
    return NetworkQueryRespawnResults();
}

/**
 * No comment provided
 * 
 * Hash: 0x85A0EF54A500882C | Since: unknown
 */
export function queueGamerForStatus(): [boolean, any] {
    return NetworkQueueGamerForStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0x45A83257ED02D9BC | Since: unknown
 */
export function quitMpToDesktop(): void {
    NetworkQuitMpToDesktop();
}

/**
 * No comment provided
 * 
 * Hash: 0x06FAACD625D80CAA | Since: unknown
 */
export function registerEntityAsNetworked(entity: number | IEntity): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkRegisterEntityAsNetworked(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xEA8C0DDB10E2822A | Since: unknown
 */
export function registerHighFrequencyHostBroadcastVariables(): void {
    Citizen.invokeNative('0xEA8C0DDB10E2822A', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD6D7478CA62B8D41 | Since: unknown
 */
export function registerHighFrequencyPlayerBroadcastVariables(): void {
    Citizen.invokeNative('0xD6D7478CA62B8D41', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E9B2F01C50DF595 | Since: unknown
 */
export function registerHostBroadcastVariables(numVars: number, debugName: string): number {
    return NetworkRegisterHostBroadcastVariables(numVars, debugName);
}

/**
 * No comment provided
 * 
 * Hash: 0x3364AA97340CA215 | Since: unknown
 */
export function registerPlayerBroadcastVariables(numVars: number, debugName: string): number {
    return NetworkRegisterPlayerBroadcastVariables(numVars, debugName);
}

/**
 * No comment provided
 * 
 * Hash: 0xCFEB46DCD7D8D5EB | Since: unknown
 */
export function remainInGameChat(): void {
    Citizen.invokeNative('0xCFEB46DCD7D8D5EB', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x25D990F8E0E3F13C | Since: unknown
 */
export function removeAllQueuedJoinRequests(): void {
    Citizen.invokeNative('0x25D990F8E0E3F13C');
}

/**
 * No comment provided
 * 
 * Hash: 0x726E0375C7A26368 | Since: unknown
 */
export function removeAllTransitionInvite(): void {
    NetworkRemoveAllTransitionInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0xEBF8284D8CADEB53 | Since: unknown
 */
export function removeAndCancelAllInvites(): void {
    Citizen.invokeNative('0xEBF8284D8CADEB53');
}

/**
 * No comment provided
 * 
 * Hash: 0xF083835B70BA9BFE | Since: unknown
 */
export function removeAndCancelAllTransitionInvites(): void {
    Citizen.invokeNative('0xF083835B70BA9BFE');
}

/**
 * No comment provided
 * 
 * Hash: 0x93CF869BAA0C4874 | Since: unknown
 */
export function removeEntityArea(areaHandle: number): boolean {
    return NetworkRemoveEntityArea(areaHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x791EDB5803B2F468 | Since: unknown
 */
export function removeInvalidObjectModel(modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    Citizen.invokeNative('0x791EDB5803B2F468', modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xF0210268DB0974B1 | Since: unknown
 */
export function removePresenceInvite(): boolean {
    return NetworkRemovePresenceInvite(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7524B431B2E6F7EE | Since: unknown
 */
export function removeTransitionInvite(): any {
    return NetworkRemoveTransitionInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0x5626D9D6810730D5 | Since: unknown
 */
export function reportCodeTamper(): void {
    NetworkReportMyself();
}

/**
 * No comment provided
 * 
 * Hash: 0x924426BFFD82E915 | Since: unknown
 */
export function requestCloudBackgroundScripts(): boolean {
    return NetworkRequestCloudBackgroundScripts();
}

/**
 * No comment provided
 * 
 * Hash: 0x42FB3B532D526E6C | Since: unknown
 */
export function requestCloudTunables(): void {
    NetworkRequestCloudTunables();
}

/**
 * No comment provided
 * 
 * Hash: 0x870DDFD5A4A796E4 | Since: unknown
 */
export function requestControlOfDoor(doorID: number): boolean {
    return NetworkRequestControlOfDoor(doorID);
}

/**
 * No comment provided
 * 
 * Hash: 0xB69317BF5E782347 | Since: unknown
 */
export function requestControlOfEntity(entity: number | IEntity): boolean {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return NetworkRequestControlOfEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xA670B3662FAFFBD0 | Since: unknown
 */
export function requestControlOfNetworkId(netId: number): boolean {
    return NetworkRequestControlOfNetworkId(netId);
}

/**
 * Triggers a CEventNetworkInviteConfirmed event
 * 
 * Hash: 0x62A0296C1BB1CEB3 | Since: unknown
 */
export function requestInviteConfirmedEvent(): boolean {
    return NetworkAcceptInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0x741A3D8380319A81 | Since: unknown
 */
export function requestToBeHostOfThisScript(): void {
    Citizen.invokeNative('0x741A3D8380319A81');
}

/**
 * No comment provided
 * 
 * Hash: 0x72433699B4E6DD64 | Since: unknown
 */
export function resetBodyTracker(): void {
    NetworkResetBodyTracker();
}

/**
 * Hardcoded to return true.
 * 
 * Hash: 0xDE9225854F37BF72 | Since: unknown
 */
export function resolvePrivilegeUserContent(): boolean {
    return Citizen.invokeNative('0xDE9225854F37BF72');
}

/**
 * No comment provided
 * 
 * Hash: 0xEA23C49EAA83ACFB | Since: unknown
 */
export function resurrectLocalPlayer(pos: Vector3, heading: number, changetime: boolean): void {
    NetworkResurrectLocalPlayer(pos.x, pos.y, pos.z, heading, false, changetime, false, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB13E88E655E5A3BC | Since: unknown
 */
export function retainActivityGroup(): void {
    Citizen.invokeNative('0xB13E88E655E5A3BC');
}

/**
 * No comment provided
 * 
 * Hash: 0xF1B84178F8674195 | Since: unknown
 */
export function seedRandomNumberGenerator(seed: number): void {
    NetworkSeedRandomNumberGenerator(seed);
}

/**
 * Contains the string "NETWORK_SEND_PRESENCE_TRANSITION_INVITE" but so does 0xC116FF9B4D488291; seems to fit alphabetically here, tho.
 * 
 * Hash: 0x1171A97A3D3981B6 | Since: unknown
 */
export function sendImportantTransitionInviteViaPresence(dataCount: number): [boolean, any] {
    return Citizen.invokeNative('0x1171A97A3D3981B6', undefined, dataCount, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xC3C7A6AFDB244624 | Since: unknown
 */
export function sendInviteViaPresence(dataCount: number): [boolean, any] {
    return NetworkSendInviteViaPresence(undefined, dataCount, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA2888E3833C8E96 | Since: unknown
 */
export function sendQueuedJoinRequest(): void {
    Citizen.invokeNative('0xFA2888E3833C8E96');
}

/**
 * Message is limited to 64 characters.
 * 
 * Hash: 0x3A214F2EC889B100 | Since: unknown
 */
export function sendTextMessage(message: string): [boolean, any] {
    return NetworkSendTextMessage(message);
}

/**
 * No comment provided
 * 
 * Hash: 0x31D1D2B858D25E6B | Since: unknown
 */
export function sendTransitionGamerInstruction(): [boolean, any] {
    return NetworkSendTransitionGamerInstruction(undefined, 0, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC116FF9B4D488291 | Since: unknown
 */
export function sendTransitionInviteViaPresence(dataCount: number): [boolean, any] {
    return NetworkSendPresenceTransitionInvite(undefined, dataCount, 0);
}

/**
 * groupId range: [0, 4]
 * 
 * Hash: 0xCAE55F48D3D7875C | Since: unknown
 */
export function sessionAddActiveMatchmakingGroup(groupId: number): void {
    NetworkSessionAddActiveMatchmakingGroup(groupId);
}

/**
 * No comment provided
 * 
 * Hash: 0xA73667484D7037C3 | Since: unknown
 */
export function sessionBlockJoinRequests(toggle: boolean): void {
    NetworkSessionBlockJoinRequests(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2FBF47B1B36D36F9 | Since: unknown
 */
export function sessionCancelInvite(): void {
    NetworkSessionCancelInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0xB4AB419E0D86ACAE | Since: unknown
 */
export function sessionChangeSlots(slots: number): void {
    NetworkSessionChangeSlots(slots, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xBE3E347A87ACEB82 | Since: unknown
 */
export function sessionDoActivityQuickmatch(): boolean {
    return NetworkSessionActivityQuickmatch(undefined, undefined, undefined, undefined, undefined);
}

/**
 * p4 seems to be unused in 1.60/build 2628
 * 
 * Hash: 0x94BC51E9449D917F | Since: unknown
 */
export function sessionDoCrewMatchmaking(crewId: number, maxPlayers: number): boolean {
    return NetworkSessionCrewMatchmaking(crewId, 0, 0, maxPlayers);
}

/**
 * No comment provided
 * 
 * Hash: 0x330ED4D05491934F | Since: unknown
 */
export function sessionDoFreeroamQuickmatch(): boolean {
    return NetworkSessionEnter(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2CFC76E0D087C994 | Since: unknown
 */
export function sessionDoFriendMatchmaking(): boolean {
    return NetworkSessionFriendMatchmaking(0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA29177F7703B5644 | Since: unknown
 */
export function sessionForceCancelInvite(): void {
    NetworkSessionForceCancelInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0xDFFA5BE8381C3314 | Since: unknown
 */
export function sessionGetHostAimPreference(): number {
    return NetworkGetTargetingMode();
}

/**
 * No comment provided
 * 
 * Hash: 0xE57397B4A3429DD0 | Since: unknown
 */
export function sessionGetInviter(): any {
    return NetworkSessionGetInviter();
}

/**
 * No comment provided
 * 
 * Hash: 0xD6D09A6F32F49EF1 | Since: unknown
 */
export function sessionGetKickVote(player: number | string | IPlayer): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkSessionGetKickVote(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x56CE820830EF040B | Since: unknown
 */
export function sessionGetMatchmakingGroupFree(): number {
    return NetworkSessionGetMatchmakingGroupFree(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x53AFD64C6758F2F9 | Since: unknown
 */
export function sessionGetPrivateSlots(): number {
    return NetworkSessionGetPrivateSlots();
}

/**
 * No comment provided
 * 
 * Hash: 0xCDC936BF35EDCB73 | Since: unknown
 */
export function sessionGetUniqueCrewLimit(): number {
    return Citizen.invokeNative('0xCDC936BF35EDCB73');
}

/**
 * Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.
 * 
 * Hash: 0x6F3D4ED9BEE4E61D | Since: unknown
 */
export function sessionHost(maxPlayers: number): boolean {
    return NetworkSessionHost(0, maxPlayers, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xED34C0C02C098BB7 | Since: unknown
 */
export function sessionHostClosed(maxPlayers: number): boolean {
    return NetworkSessionHostClosed(0, maxPlayers);
}

/**
 * Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.
 * 
 * Hash: 0xB9CFD27A5D578D83 | Since: unknown
 */
export function sessionHostFriendsOnly(maxPlayers: number): boolean {
    return NetworkSessionHostFriendsOnly(0, maxPlayers);
}

/**
 * Loads up the map that is loaded when beeing in mission creator
 * Player gets placed in a mix between online/offline mode
 * p0 is always 2 in R* scripts.
 * 
 * Appears to be patched in gtav b757 (game gets terminated) alonside with most other network natives to prevent online modding ~ghost30812
 * 
 * Hash: 0xC74C33FCA52856D5 | Since: unknown
 */
export function sessionHostSinglePlayer(): void {
    NetworkSessionHostSinglePlayer(0);
}

/**
 * Seems to be true while "Getting GTA Online session details" shows up.
 * 
 * Hash: 0xD313DE83394AF134 | Since: unknown
 */
export function sessionIsAwaitingInviteResponse(): boolean {
    return Citizen.invokeNative('0xD313DE83394AF134');
}

/**
 * No comment provided
 * 
 * Hash: 0x74732C6CA90DA2B4 | Since: unknown
 */
export function sessionIsClosedCrew(): boolean {
    return NetworkSessionIsClosedCrew();
}

/**
 * No comment provided
 * 
 * Hash: 0xFBCFA2EA2E206890 | Since: unknown
 */
export function sessionIsClosedFriends(): boolean {
    return NetworkSessionIsClosedFriends();
}

/**
 * No comment provided
 * 
 * Hash: 0xBDB6F89C729CF388 | Since: unknown
 */
export function sessionIsDisplayingInviteConfirmation(): boolean {
    return Citizen.invokeNative('0xBDB6F89C729CF388');
}

/**
 * No comment provided
 * 
 * Hash: 0x855BC38818F6F684 | Since: unknown
 */
export function sessionIsInVoiceSession(): boolean {
    return NetworkSessionIsInVoiceSession();
}

/**
 * No comment provided
 * 
 * Hash: 0xCEF70AA5B3F89BA1 | Since: unknown
 */
export function sessionIsPrivate(): boolean {
    return NetworkSessionIsPrivate();
}

/**
 * No comment provided
 * 
 * Hash: 0xF3929C2379B60CCE | Since: unknown
 */
export function sessionIsSolo(): boolean {
    return NetworkSessionIsSolo();
}

/**
 * No comment provided
 * 
 * Hash: 0xBA416D68C631496A | Since: unknown
 */
export function sessionIsVisible(): boolean {
    return NetworkSessionIsVisible();
}

/**
 * No comment provided
 * 
 * Hash: 0xB5D3453C98456528 | Since: unknown
 */
export function sessionIsVoiceSessionActive(): boolean {
    return Citizen.invokeNative('0xB5D3453C98456528');
}

/**
 * No comment provided
 * 
 * Hash: 0xEF0912DDF7C4CB4B | Since: unknown
 */
export function sessionIsVoiceSessionBusy(): boolean {
    return NetworkSessionIsVoiceSessionBusy();
}

/**
 * No comment provided
 * 
 * Hash: 0xC6F8AB8A4189CF3A | Since: unknown
 */
export function sessionJoinInvite(): void {
    NetworkSessionJoinInvite();
}

/**
 * Only works as host.
 * 
 * Hash: 0xFA8904DC5F304220 | Since: unknown
 */
export function sessionKickPlayer(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    NetworkSessionKickPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xB9351A07A0D458B1 | Since: unknown
 */
export function sessionLeave(): boolean {
    return Citizen.invokeNative('0xB9351A07A0D458B1', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3442775428FD2DAA | Since: unknown
 */
export function sessionLeaveSinglePlayer(): void {
    NetworkSessionLeaveSinglePlayer();
}

/**
 * No comment provided
 * 
 * Hash: 0x271CC6AB59EBF9A5 | Since: unknown
 */
export function sessionMarkVisible(toggle: boolean): void {
    NetworkSessionMarkVisible(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x041C7F2A6C9894E6 | Since: unknown
 */
export function sessionReserveSlotsTransition(): boolean {
    return Citizen.invokeNative('0x041C7F2A6C9894E6', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x702BC4D605522539 | Since: unknown
 */
export function sessionSetCrewLimitMaxMembersTransition(): void {
    Citizen.invokeNative('0x702BC4D605522539', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x600F8CB31C7AAB6E | Since: unknown
 */
export function sessionSetGamemode(): void {
    Citizen.invokeNative('0x600F8CB31C7AAB6E', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x49EC8030F5015F8B | Since: unknown
 */
export function sessionSetMatchmakingGroup(matchmakingGroup: number): void {
    NetworkSessionSetMatchmakingGroup(matchmakingGroup);
}

/**
 * playerType is an unsigned int from 0 to 4
 * 0 = regular joiner
 * 4 = spectator
 * 
 * Hash: 0x8B6A4DD0AF9CE215 | Since: unknown
 */
export function sessionSetMatchmakingGroupMax(playerType: number, playerCount: number): void {
    NetworkSessionSetMatchmakingGroupMax(playerType, playerCount);
}

/**
 * p0 in the decompiled scripts is always the stat mesh_texblend * 0.07 to int
 * 
 * Hash: 0xF1EEA2DDA9FFA69D | Since: unknown
 */
export function sessionSetMatchmakingMentalState(): void {
    NetworkSessionSetMatchmakingMentalState(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F52E880AAF6C8CA | Since: unknown
 */
export function sessionSetMatchmakingPropertyId(): void {
    NetworkSessionSetMatchmakingPropertyId(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x59D421683D31835A | Since: unknown
 */
export function sessionSetNumBosses(num: number): void {
    Citizen.invokeNative('0x59D421683D31835A', num);
}

/**
 * No comment provided
 * 
 * Hash: 0x1153FA02A659051C | Since: unknown
 */
export function sessionSetScriptValidateJoin(): void {
    Citizen.invokeNative('0x1153FA02A659051C');
}

/**
 * No comment provided
 * 
 * Hash: 0xF49ABC20D8552257 | Since: unknown
 */
export function sessionSetUniqueCrewLimit(): void {
    Citizen.invokeNative('0xF49ABC20D8552257', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4811BBAC21C5FCD5 | Since: unknown
 */
export function sessionSetUniqueCrewLimitTransition(): void {
    Citizen.invokeNative('0x4811BBAC21C5FCD5', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5539C3EBF104A53A | Since: unknown
 */
export function sessionSetUniqueCrewOnlyCrewsTransition(): void {
    Citizen.invokeNative('0x5539C3EBF104A53A', false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC19F6C8E7865A6FF | Since: unknown
 */
export function sessionValidateJoin(): void {
    NetworkSessionValidateJoin(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xABD5E88B8A2D3DB2 | Since: unknown
 */
export function sessionVoiceConnectToPlayer(): any {
    return NetworkSessionVoiceConnectToPlayer();
}

/**
 * No comment provided
 * 
 * Hash: 0x9C1556705F864230 | Since: unknown
 */
export function sessionVoiceHost(): boolean {
    return NetworkSessionVoiceHost();
}

/**
 * No comment provided
 * 
 * Hash: 0x6793E42BE02B575D | Since: unknown
 */
export function sessionVoiceLeave(): boolean {
    return NetworkSessionVoiceLeave();
}

/**
 * No comment provided
 * 
 * Hash: 0x7F8413B7FC2AA6B9 | Since: unknown
 */
export function sessionVoiceRespondToRequest(): void {
    NetworkSessionVoiceRespondToRequest(false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B8ED3DB018927B1 | Since: unknown
 */
export function sessionVoiceSetTimeout(timeout: number): void {
    NetworkSessionVoiceSetTimeout(timeout);
}

/**
 * No comment provided
 * 
 * Hash: 0x23DFB504655D0CE4 | Since: unknown
 */
export function sessionWasInvited(): boolean {
    return NetworkSessionWasInvited();
}

/**
 * No comment provided
 * 
 * Hash: 0x0E4F77F7B9D74D84 | Since: unknown
 */
export function setActivityPlayerMax(): void {
    NetworkSetActivityPlayerMax(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x75138790B4359A74 | Since: unknown
 */
export function setActivitySpectator(toggle: boolean): void {
    NetworkSetActivitySpectator(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D277B76D1D12222 | Since: unknown
 */
export function setActivitySpectatorMax(maxSpectators: number): void {
    NetworkSetActivitySpectatorMax(maxSpectators);
}

/**
 * No comment provided
 * 
 * Hash: 0x5C707A667DF8B9FA | Since: unknown
 */
export function setAntagonisticToPlayer(toggle: boolean, player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    NetworkSetChoiceMigrateOptions(toggle, _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x0EDE326D47CD0F3E | Since: unknown
 */
export function setAttributeDamageToPlayer(ped: number | IPed, player: number | string | IPlayer): boolean {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    const _player = typeof player == 'object' ? player.playerId() : player;
    return Citizen.invokeNative('0x0EDE326D47CD0F3E', _ped, _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x68980414688F7F9D | Since: unknown
 */
export function setCanReceiveRsInvites(): void {
    Citizen.invokeNative('0x68980414688F7F9D', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7206F674F2A3B1BB | Since: unknown
 */
export function setCurrentlySelectedGamerHandleFromInviteMenu(): [boolean, any] {
    return NetworkSetCurrentlySelectedGamerHandleFromInviteMenu();
}

/**
 * No comment provided
 * 
 * Hash: 0x3DAD00265FBF356B | Since: unknown
 */
export function setCurrentChatOption(newChatOption: number): void {
    Citizen.invokeNative('0x3DAD00265FBF356B', newChatOption);
}

/**
 * No comment provided
 * 
 * Hash: 0x796A87B3B68D1F3D | Since: unknown
 */
export function setCurrentDataManagerHandle(): [boolean, any] {
    return NetworkSetCurrentDataManagerHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0x2C863ACDCD12B3DB | Since: unknown
 */
export function setCurrentPublicContentId(missionId: string): void {
    NetworkSetCurrentMissionId(missionId);
}

/**
 * mpSettingSpawn:
 * 
 * enum eMpSettingSpawn
 * {
 * MP_SETTING_SPAWN_NULL,
 * MP_SETTING_SPAWN_PROPERTY,
 * MP_SETTING_SPAWN_LAST_POSITION,
 * MP_SETTING_SPAWN_GARAGE,
 * MP_SETTING_SPAWN_RANDOM,
 * MP_SETTING_SPAWN_PRIVATE_YACHT,
 * MP_SETTING_SPAWN_OFFICE,
 * MP_SETTING_SPAWN_CLUBHOUSE,
 * MP_SETTING_SPAWN_IE_WAREHOUSE,
 * MP_SETTING_SPAWN_BUNKER,
 * MP_SETTING_SPAWN_HANGAR,
 * MP_SETTING_SPAWN_DEFUNCT_BASE,
 * MP_SETTING_SPAWN_NIGHTCLUB,
 * MP_SETTING_SPAWN_ARENA_GARAGE,
 * MP_SETTING_SPAWN_CASINO_APARTMENT,
 * MP_SETTING_SPAWN_ARCADE,
 * MP_SETTING_SPAWN_SUBMARINE,
 * MP_SETTING_SPAWN_CAR_MEET,
 * MP_SETTING_SPAWN_AUTO_SHOP,
 * MP_SETTING_SPAWN_FIXER_HQ,
 * MP_SETTING_SPAWN_MAX,
 * };
 * 
 * Hash: 0xAA6D5451DC3448B6 | Since: unknown
 */
export function setCurrentSpawnLocationOption(mpSettingSpawn: number | string): void {
    if (typeof mpSettingSpawn === 'string') mpSettingSpawn = GetHashKey(mpSettingSpawn)
    NetworkSetCurrentSpawnSetting(mpSettingSpawn);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6FCECCF4721D679 | Since: unknown
 */
export function setCustomArenaBallParams(netId: number): void {
    Citizen.invokeNative('0xA6FCECCF4721D679', netId);
}

/**
 * Appears to set whether a transition should be started when the session is migrating.
 * 
 * Hash: 0xA2E9C1AB8A92E8CD | Since: unknown
 */
export function setDoNotLaunchFromJoinAsMigratedHost(toggle: boolean): void {
    Citizen.invokeNative('0xA2E9C1AB8A92E8CD', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xD830567D88A1E873 | Since: unknown
 */
export function setEntityCanBlend(entity: number | IEntity, toggle: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkSetEntityCanBlend(_entity, toggle);
}

/**
 * if set to true other network players can't see it
 * if set to false other network player can see it
 * =========================================
 * ^^ I attempted this by grabbing an object with GET_ENTITY_PLAYER_IS_FREE_AIMING_AT and setting this naive no matter the toggle he could still see it.
 * 
 * pc or last gen?
 * 
 * ^^ last-gen
 * 
 * Hash: 0xF1CA12B18AEF5298 | Since: unknown
 */
export function setEntityOnlyExistsForParticipants(entity: number | IEntity, toggle: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkSetEntityInvisibleToNetwork(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF808475FA571D823 | Since: unknown
 */
export function setFriendlyFireOption(toggle: boolean): void {
    NetworkSetFriendlyFireOption(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA2C8073411ECDB6 | Since: unknown
 */
export function setGamerInvitedToTransition(): any {
    return NetworkSetGamerInvitedToTransition();
}

/**
 * No comment provided
 * 
 * Hash: 0x6A5D89D7769A40D8 | Since: unknown
 */
export function setIgnoreSpectatorChatLimitsSameTeam(toggle: boolean): void {
    Citizen.invokeNative('0x6A5D89D7769A40D8', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0D77A82DC2D0DA59 | Since: unknown
 */
export function setInviteFailedMessageForInviteMenu(): [any, any] {
    return Citizen.invokeNative('0x0D77A82DC2D0DA59');
}

/**
 * No comment provided
 * 
 * Hash: 0x66F010A4B031A331 | Since: unknown
 */
export function setInviteOnCallForInviteMenu(): any {
    return NetworkSetInviteOnCallForInviteMenu();
}

/**
 * No comment provided
 * 
 * Hash: 0xFC18DB55AE19E046 | Since: unknown
 */
export function setInFreeCamMode(toggle: boolean): void {
    NetworkSetInFreeCamMode(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9CA5DE655269FEC4 | Since: unknown
 */
export function setInMpCutscene(): void {
    NetworkSetInMpCutscene(false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x2CE9D95E4051AECD | Since: unknown
 */
export function setInProgressFinishTime(): void {
    Citizen.invokeNative('0x2CE9D95E4051AECD', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x423DE3854BB50894 | Since: unknown
 */
export function setInSpectatorMode(toggle: boolean, playerPed: number | IPed): void {
    const _playerPed = typeof playerPed == 'object' ? playerPed.handle() : playerPed;
    NetworkSetInSpectatorMode(toggle, _playerPed);
}

/**
 * No comment provided
 * 
 * Hash: 0x419594E137637120 | Since: unknown
 */
export function setInSpectatorModeExtended(toggle: boolean, playerPed: number | IPed): void {
    const _playerPed = typeof playerPed == 'object' ? playerPed.handle() : playerPed;
    NetworkSetInSpectatorModeExtended(toggle, _playerPed, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x2D95C7E2D7E07307 | Since: unknown
 */
export function setLocalPlayerInvincibleTime(time: number): void {
    NetworkSetLocalPlayerInvincibleTime(time);
}

/**
 * No comment provided
 * 
 * Hash: 0x524FF0AEFF9C3973 | Since: unknown
 */
export function setLocalPlayerSyncLookAt(toggle: boolean): void {
    NetworkSetLocalPlayerSyncLookAt(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D395EA61622E116 | Since: unknown
 */
export function setLookAtTalkers(): void {
    Citizen.invokeNative('0x7D395EA61622E116', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x94538037EE44F5CF | Since: unknown
 */
export function setMinimumRankForMission(): void {
    Citizen.invokeNative('0x94538037EE44F5CF', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x3B3D11CD9FFCDFC9 | Since: unknown
 */
export function setMissionFinished(): void {
    NetworkSetMissionFinished();
}

/**
 * No comment provided
 * 
 * Hash: 0x3FC795691834481D | Since: unknown
 */
export function setNoLongerNeeded(entity: number | IEntity, toggle: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    Citizen.invokeNative('0x3FC795691834481D', _entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF46A1E03E8755980 | Since: unknown
 */
export function setNoSpectatorChat(toggle: boolean): void {
    NetworkSetNoSpectatorChat(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0379DAF89BA09AA5 | Since: unknown
 */
export function setObjectCanBlendWhenFixed(_object: number | IObject, toggle: boolean): void {
    const __object = typeof _object == 'object' ? _object.handle() : _object;
    NetworkSetObjectForceStaticBlend(__object, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA7F0B77D80A4EB7 | Since: unknown
 */
export function setObjectScopeDistance(_object: number | IObject, range: number): void {
    const __object = typeof _object == 'object' ? _object.handle() : _object;
    Citizen.invokeNative('0xBA7F0B77D80A4EB7', __object, range);
}

/**
 * No comment provided
 * 
 * Hash: 0x70DA3BF8DACD3210 | Since: unknown
 */
export function setOverrideSpectatorMode(toggle: boolean): void {
    NetworkSetOverrideSpectatorMode(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3C5C1E2C2FF814B1 | Since: unknown
 */
export function setOverrideTutorialSessionChat(toggle: boolean): void {
    Citizen.invokeNative('0x3C5C1E2C2FF814B1', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1B857666604B1A74 | Since: unknown
 */
export function setPlayerIsPassive(toggle: boolean): void {
    NetworkSetPlayerIsPassive(toggle);
}

/**
 * p0 in the decompiled scripts is always the stat mesh_texblend * 0.07 to int
 * 
 * Hash: 0x367EF5E2F439B4C6 | Since: unknown
 */
export function setPlayerMentalState(): void {
    Citizen.invokeNative('0x367EF5E2F439B4C6', 0);
}

/**
 * Does nothing. It's just a nullsub.
 * 
 * Hash: 0x4A9FDE3A5A6D0437 | Since: unknown
 */
export function setPresenceSessionInvitesBlocked(toggle: boolean): void {
    Citizen.invokeNative('0x4A9FDE3A5A6D0437', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F7BC3539F9E0224 | Since: unknown
 */
export function setPrivilegeCheckResultNotNeeded(): void {
    Citizen.invokeNative('0x1F7BC3539F9E0224');
}

/**
 * No comment provided
 * 
 * Hash: 0x9D7AFCBF21C51712 | Since: unknown
 */
export function setProximityAffectsTeam(toggle: boolean): void {
    Citizen.invokeNative('0x9D7AFCBF21C51712', toggle);
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0x1DCCACDCFC569362 | Since: unknown
 */
export function setRichPresence(): void {
    NetworkSetRichPresence(0, 0, undefined, undefined);
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0x3E200C2BCF4164EB | Since: unknown
 */
export function setRichPresenceString(textLabel: string): void {
    NetworkSetRichPresenceString(0, textLabel);
}

/**
 * No comment provided
 * 
 * Hash: 0x4348BFDA56023A2F | Since: unknown
 */
export function setSameTeamAsLocalPlayer(): boolean {
    return Citizen.invokeNative('0x4348BFDA56023A2F', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB309EBEA797E001F | Since: unknown
 */
export function setScriptAutomuted(): boolean {
    return Citizen.invokeNative('0xB309EBEA797E001F', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x265559DA40B3F327 | Since: unknown
 */
export function setScriptControllingTeams(): void {
    Citizen.invokeNative('0x265559DA40B3F327', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7AC752103856FB20 | Since: unknown
 */
export function setScriptReadyForEvents(toggle: boolean): void {
    NetworkSetScriptReadyForEvents(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8EF52ACAECC51D9C | Since: unknown
 */
export function setSpectatorToNonSpectatorTextChat(toggle: boolean): void {
    Citizen.invokeNative('0x8EF52ACAECC51D9C', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCBF12D65F95AD686 | Since: unknown
 */
export function setTalkerProximity(value: number): void {
    NetworkSetTalkerProximity(value);
}

/**
 * A value between 1.0 and 5.0
 * 
 * Hash: 0xC6FCEE21C6FCEE21 | Since: unknown
 */
export function setTaskCutsceneInscopeMultipler(multiplier: number): void {
    Citizen.invokeNative('0xC6FCEE21C6FCEE21', multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0xD5B4883AC32F24C3 | Since: unknown
 */
export function setTeamOnlyChat(toggle: boolean): void {
    NetworkSetTeamOnlyChat(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1CA59E306ECB80A5 | Since: unknown
 */
export function setThisScriptIsNetworkScript(maxNumMissionParticipants: number, instanceId: number): void {
    NetworkSetThisScriptIsNetworkScript(maxNumMissionParticipants, false, instanceId);
}

/**
 * No comment provided
 * 
 * Hash: 0x30DE938B516F0AD2 | Since: unknown
 */
export function setTransitionActivityId(): void {
    NetworkSetTransitionActivityId(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEF26739BCD9907D5 | Since: unknown
 */
export function setTransitionCreatorHandle(): any {
    return NetworkSetTransitionCreatorHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0x0C978FDA19692C2C | Since: unknown
 */
export function setTransitionVisibilityLock(): void {
    NetworkSetTransitionVisibilityLock(false, false);
}

/**
 * Used by MetricVEHICLE_DIST_DRIVEN
 * 
 * Hash: 0x8C70252FC40F320B | Since: unknown
 */
export function setVehicleDrivenInTestDrive(toggle: boolean): void {
    NetworkSetVehicleTestDrive(toggle);
}

/**
 * Sets 'loc' variable used in MetricVEHICLE_DIST_DRIVEN
 * 
 * Hash: 0xA0CE91E47531D3BB | Since: unknown
 */
export function setVehicleDrivenLocation(location: number | string): void {
    if (typeof location === 'string') location = GetHashKey(location)
    Citizen.invokeNative('0xA0CE91E47531D3BB', location);
}

/**
 * No comment provided
 * 
 * Hash: 0xBABEC9E69A91C57B | Since: unknown
 */
export function setVoiceActive(toggle: boolean): void {
    NetworkSetVoiceActive(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xEF6212C2EFEF1A23 | Since: unknown
 */
export function setVoiceChannel(channel: number): void {
    NetworkSetVoiceChannel(channel);
}

/**
 * No comment provided
 * 
 * Hash: 0x023ACAB2DC9DC4A4 | Since: unknown
 */
export function shouldShowPromotionAlertScreen(): boolean {
    return Citizen.invokeNative('0x023ACAB2DC9DC4A4');
}

/**
 * Returns true if the NAT type is Strict (3) and a certain number of connections have failed.
 * 
 * Hash: 0x82A2B386716608F1 | Since: unknown
 */
export function shouldShowStrictNatWarning(): boolean {
    return NetworkShouldShowConnectivityTroubleshooting();
}

/**
 * No comment provided
 * 
 * Hash: 0x83FE8D7229593017 | Since: unknown
 */
export function showAccountUpgradeUi(): void {
    Citizen.invokeNative('0x83FE8D7229593017');
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0x6BFF5F84102DF80A | Since: unknown
 */
export function showChatRestrictionMsc(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    Citizen.invokeNative('0x6BFF5F84102DF80A', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x859ED1CEA343FCA8 | Since: unknown
 */
export function showProfileUi(): any {
    return NetworkShowProfileUi();
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0x5C497525F803486B | Since: unknown
 */
export function showPsnUgcRestriction(): void {
    Citizen.invokeNative('0x5C497525F803486B');
}

/**
 * No comment provided
 * 
 * Hash: 0x9465E683B12D3F6B | Since: unknown
 */
export function skipRadioResetNextClose(): void {
    Citizen.invokeNative('0x9465E683B12D3F6B');
}

/**
 * No comment provided
 * 
 * Hash: 0xCA59CCAE5D01E4CE | Since: unknown
 */
export function skipRadioResetNextOpen(): void {
    Citizen.invokeNative('0xCA59CCAE5D01E4CE');
}

/**
 * Returns true if dinput8.dll is present in the game directory.
 * You will get following error message if that is true: "You are attempting to access GTA Online servers with an altered version of the game."
 * 
 * Hash: 0x659CF2EF7F550C4F | Since: unknown
 */
export function skipRadioWarning(): boolean {
    return NetworkHasGameBeenAltered();
}

/**
 * One of the first things it does is get the players ped.
 * Then it calls a function that is used in some tasks and ped based functions.
 * p5, p6, p7 is another coordinate (or zero), often related to `GET_BLIP_COORDS, in the decompiled scripts.
 * 
 * Hash: 0x5A6FFA2433E2F14C | Since: unknown
 */
export function startRespawnSearchForPlayer(player: number | string | IPlayer, pos: Vector3, radius: number, flags: number): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkStartRespawnSearchForPlayer(_player, pos.x, pos.y, pos.z, radius, 0, 0, 0, flags);
}

/**
 * p8, p9, p10 is another coordinate, or zero, often related to `GET_BLIP_COORDS in the decompiled scripts.
 * 
 * Hash: 0x4BA92A18502BCA61 | Since: unknown
 */
export function startRespawnSearchInAngledAreaForPlayer(player: number | string | IPlayer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, flags: number): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return NetworkStartRespawnSearchInAngledAreaForPlayer(_player, x1, y1, z1, x2, y2, z2, width, 0, 0, 0, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x17E0198B3882C2CB | Since: unknown
 */
export function startSoloTutorialSession(): void {
    NetworkStartSoloTutorialSession();
}

/**
 * No comment provided
 * 
 * Hash: 0x9A1B3FCDB36C8697 | Since: unknown
 */
export function startSynchronisedScene(netScene: number): void {
    NetworkStartSynchronisedScene(netScene);
}

/**
 * Always returns -1. Seems to be XB1 specific.
 * 
 * Hash: 0xDEB2B99A1AF1A2A6 | Since: unknown
 */
export function startUserContentPermissionsCheck(): [number, any] {
    return NetworkStartUserContentPermissionsCheck();
}

/**
 * No comment provided
 * 
 * Hash: 0xC254481A4574CB2F | Since: unknown
 */
export function stopSynchronisedScene(netScene: number): void {
    NetworkStopSynchronisedScene(netScene);
}

/**
 * No comment provided
 * 
 * Hash: 0xF814FEC6A19FD6E0 | Since: unknown
 */
export function storeInviteThroughRestart(): void {
    Citizen.invokeNative('0xF814FEC6A19FD6E0');
}

/**
 * No comment provided
 * 
 * Hash: 0xA0682D67EF1FBA3D | Since: unknown
 */
export function suppressInvite(toggle: boolean): void {
    NetworkSuppressInvite(toggle);
}

/**
 * Does nothing in final builds.
 * 
 * Hash: 0xCBD02360C5E16871 | Since: unknown
 */
export function syncClockTimeOverride(): void {
    Citizen.invokeNative('0xCBD02360C5E16871');
}

/**
 * Same as _IS_TEXT_CHAT_ACTIVE, except it does not check if the text chat HUD component is initialized, and therefore may crash.
 * 
 * Hash: 0x5FCF4D7069B09026 | Since: unknown
 */
export function textChatIsTyping(): boolean {
    return NetworkIsTextChatActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xC3BFED92026A2AAD | Since: unknown
 */
export function transitionAddStage(hash: number | string, state: number): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return NetworkTransitionTrack(hash, 0, 0, state, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x973D76AA760A6CB6 | Since: unknown
 */
export function transitionBlockJoinRequests(): void {
    Citizen.invokeNative('0x973D76AA760A6CB6', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x04918A41BC9B8157 | Since: unknown
 */
export function transitionFinish(): boolean {
    return Citizen.invokeNative('0x04918A41BC9B8157', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6F4383B7C92F11A | Since: unknown
 */
export function transitionSetActivityIsland(): void {
    Citizen.invokeNative('0xF6F4383B7C92F11A', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F8E00FB18239600 | Since: unknown
 */
export function transitionSetContentCreator(): void {
    Citizen.invokeNative('0x1F8E00FB18239600', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1398582B7F72B3ED | Since: unknown
 */
export function transitionSetInProgress(): void {
    Citizen.invokeNative('0x1398582B7F72B3ED', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8B4FFC790CA131EF | Since: unknown
 */
export function transitionStart(): boolean {
    return Citizen.invokeNative('0x8B4FFC790CA131EF', 0, undefined, undefined, undefined);
}

/**
 * Allows vehicle wheels to be destructible even when the vehicle entity is invincible.
 * 
 * Hash: 0x890E2C5ABED7236D | Since: unknown
 */
export function triggerDamageEventForZeroDamage(entity: number | IEntity, toggle: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkSetVehicleWheelsDestructible(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x38B7C51AB1EDC7D8 | Since: unknown
 */
export function triggerDamageEventForZeroWeaponHash(entity: number | IEntity, toggle: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    Citizen.invokeNative('0x38B7C51AB1EDC7D8', _entity, toggle);
}

/**
 * Returns defaultValue if the tunable doesn't exist.
 * 
 * Hash: 0xC7420099936CE286 | Since: unknown
 */
export function tryAccessTunableBoolHash(tunableContext: number | string, tunableName: number | string, defaultValue: boolean): boolean {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkTryAccessTunableBoolHash(tunableContext, tunableName, defaultValue);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1110739EEADB592 | Since: unknown
 */
export function tryToSetThisScriptIsNetworkScript(): boolean {
    return NetworkIsThisScriptMarked(undefined, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC1447451DDB512F0 | Since: unknown
 */
export function ugcNav(): void {
    NetworkUgcNav(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7368E683BB9038D6 | Since: unknown
 */
export function unregisterNetworkedEntity(entity: number | IEntity): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkUnregisterNetworkedEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x2B1813ABA29016C5 | Since: unknown
 */
export function useHighPrecisionBlending(netID: number, toggle: boolean): void {
    NetworkUseHighPrecisionBlending(netID, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCD71A4ECAB22709E | Since: unknown
 */
export function useLogarithmicBlendingThisFrame(entity: number | IEntity): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkUseLogarithmicBlendingThisFrame(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xB37E4E6A2388CA7B | Since: unknown
 */
export function waitingPopClearTutorialSession(): boolean {
    return Citizen.invokeNative('0xB37E4E6A2388CA7B');
}

/**
 * No comment provided
 * 
 * Hash: 0x4237E822315D8BA9 | Since: unknown
 */
export function wasGameSuspended(): boolean {
    return Citizen.invokeNative('0x4237E822315D8BA9');
}

/**
 * gets the entity id of a network id
 * 
 * Hash: 0xBFFEAB45A9A9094A | Since: unknown
 */
export function netToEnt(netHandle: number): number {
    return NetToEnt(netHandle);
}

/**
 * gets the object id of a network id
 * 
 * Hash: 0xD8515F5FEA14CB3F | Since: unknown
 */
export function netToObj(netHandle: number): number {
    return NetToObj(netHandle);
}

/**
 * gets the ped id of a network id
 * 
 * Hash: 0xBDCD95FC216A8B3E | Since: unknown
 */
export function netToPed(netHandle: number): number {
    return NetToPed(netHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x367B936610BA360C | Since: unknown
 */
export function netToVeh(netHandle: number): number {
    return NetToVeh(netHandle);
}

/**
 * Lets objects spawn online simply do it like this:
 * 
 * int createdObject = OBJ_TO_NET(CREATE_OBJECT_NO_OFFSET(oball, pCoords.x, pCoords.y, pCoords.z, 1, 0, 0));
 * 
 * Hash: 0x99BFDC94A603E541 | Since: unknown
 */
export function objToNet(_object: number | IObject): number {
    const __object = typeof _object == 'object' ? _object.handle() : _object;
    return ObjToNet(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x58C21165F6545892 | Since: unknown
 */
export function openCommerceStore(productID: string, category: string, location: number, launchLandingPageOnClose: boolean): void {
    OpenCommerceStore(productID, category, location, launchLandingPageOnClose);
}

/**
 * Return the local Participant ID
 * 
 * Hash: 0x90986E8876CE0A83 | Since: unknown
 */
export function participantId(): number | string {
    return ParticipantId();
}

/**
 * Return the local Participant ID.
 * 
 * This native is exactly the same as 'PARTICIPANT_ID' native.
 * 
 * Hash: 0x57A3BDDAD8E5AA0A | Since: unknown
 */
export function participantIdToInt(): number {
    return ParticipantIdToInt();
}

/**
 * gets the network id of a ped
 * 
 * Hash: 0x0EDEC3C276198689 | Since: unknown
 */
export function pedToNet(ped: number | IPed): number {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return PedToNet(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xE26CCFF8094D8C74 | Since: unknown
 */
export function refreshPlayerListStats(): boolean {
    return RefreshPlayerListStats(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x72D0706CD6CCDB58 | Since: unknown
 */
export function releaseAllCommerceItemImages(): void {
    ReleaseAllCommerceItemImages();
}

/**
 * No comment provided
 * 
 * Hash: 0x472841A026D26D8B | Since: unknown
 */
export function remoteCheaterPlayerDetected(player: number | string | IPlayer, a: number, b: number): boolean {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return RemoteCheatDetected(_player, a, b);
}

/**
 * entity must be a valid entity; ped can be NULL
 * 
 * Hash: 0x715135F4B82AC90D | Since: unknown
 */
export function removeAllStickyBombsFromEntity(entity: number | IEntity, ped: number | IPed): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    RemoveAllStickyBombsFromEntity(_entity, _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xA2F952104FC6DD4B | Since: unknown
 */
export function requestCommerceItemImage(index: number): boolean {
    return RequestCommerceItemImage(index);
}

/**
 * No comment provided
 * 
 * Hash: 0xD5AEB715D79ADE64 | Since: unknown
 */
export function reserveCommerceStorePurchaseLocation(location: number): void {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0xD5AEB715D79ADE64)'); return;
    Citizen.invokeNative('0xD5AEB715D79ADE64', location);
}

/**
 * No comment provided
 * 
 * Hash: 0x797F9C5E661D920E | Since: unknown
 */
export function reserveLocalMissionObjects(amount: number): void {
    ReserveNetworkLocalObjects(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C8DF5D129595281 | Since: unknown
 */
export function reserveLocalMissionPeds(amount: number): void {
    ReserveNetworkLocalPeds(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x42613035157E4208 | Since: unknown
 */
export function reserveLocalMissionVehicles(amount: number): void {
    ReserveNetworkLocalVehicles(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x4E5C93BD0C32FBF8 | Since: unknown
 */
export function reserveMissionObjects(amount: number): void {
    ReserveNetworkMissionObjects(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xB60FEBA45333D36F | Since: unknown
 */
export function reserveMissionPeds(amount: number): void {
    ReserveNetworkMissionPeds(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x76B02E21ED27A469 | Since: unknown
 */
export function reserveMissionVehicles(amount: number): void {
    ReserveNetworkMissionVehicles(amount);
}

/**
 * Resets the entity ghost alpha to the default value (128)
 * 
 * Hash: 0x17330EBF2F2124A8 | Since: unknown
 */
export function resetGhostAlpha(): void {
    ResetGhostedEntityAlpha();
}

/**
 * No comment provided
 * 
 * Hash: 0x444C4525ECE0A4B9 | Since: unknown
 */
export function resetStoreGameTracking(): void {
    Citizen.invokeNative('0x444C4525ECE0A4B9');
}

/**
 * No comment provided
 * 
 * Hash: 0x4BA166079D658ED4 | Since: unknown
 */
export function setEntityGhostedForGhostPlayers(entity: number | IEntity, toggle: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    NetworkSetEntityGhostedWithOwner(_entity, toggle);
}

/**
 * Makes the provided entity visible for yourself for the current frame.
 * 
 * Hash: 0xE135A9FF3F5D05D8 | Since: unknown
 */
export function setEntityLocallyInvisible(entity: number | IEntity): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    SetEntityLocallyInvisible(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x241E289B5C059EDC | Since: unknown
 */
export function setEntityLocallyVisible(entity: number | IEntity): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    SetEntityLocallyVisible(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0031D3C8F36AB82 | Since: unknown
 */
export function setEntityVisibleInCutscene(): void {
    SetEntityVisibleInCutscene(undefined, false, false);
}

/**
 * Must be a value between 1 and 254
 * 
 * Hash: 0x658500AE6D723A7E | Since: unknown
 */
export function setGhostAlpha(alpha: number): void {
    SetGhostedEntityAlpha(alpha);
}

/**
 * No comment provided
 * 
 * Hash: 0xD7B6C73CAD419BCF | Since: unknown
 */
export function setInvertGhosting(): void {
    Citizen.invokeNative('0xD7B6C73CAD419BCF', false);
}

/**
 * No comment provided
 * 
 * Hash: 0xFAE628F1E9ADB239 | Since: unknown
 */
export function setLastViewedShopItem(p0: number | string, p2: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    if (typeof p2 === 'string') p2 = GetHashKey(p2)
    Citizen.invokeNative('0xFAE628F1E9ADB239', p0, 0, p2);
}

/**
 * No comment provided
 * 
 * Hash: 0x5FFE9B4144F9712F | Since: unknown
 */
export function setLocalPlayerAsGhost(toggle: boolean): void {
    SetLocalPlayerAsGhost(toggle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5F773C1A1D9D168 | Since: unknown
 */
export function setLocalPlayerInvisibleLocally(bIncludePlayersVehicle: boolean): void {
    SetLocalPlayerInvisibleLocally(bIncludePlayersVehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1065D68947E7B6E | Since: unknown
 */
export function setLocalPlayerVisibleInCutscene(): void {
    SetLocalPlayerVisibleInCutscene(false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7619364C82D3BF14 | Since: unknown
 */
export function setLocalPlayerVisibleLocally(bIncludePlayersVehicle: boolean): void {
    SetLocalPlayerVisibleLocally(bIncludePlayersVehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xAAA553E7DD28A457 | Since: unknown
 */
export function setCutsceneEntities(toggle: boolean): void {
    SetNetworkCutsceneEntities(toggle);
}

/**
 * `Enables a periodic ShapeTest within the NetBlender and invokes rage::netBlenderLinInterp::GoStraightToTarget (or some functional wrapper).`
 * 
 * Hash: 0x838DA0936A24ED4D | Since: unknown
 */
export function setEnableHighSpeedEdgeFallDetection(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = typeof vehicle == 'object' ? vehicle.handle() : vehicle;
    SetNetworkEnableVehiclePositionCorrection(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA8A024587329F36A | Since: unknown
 */
export function setIdAlwaysExistsForPlayer(netId: number, player: number | string | IPlayer, toggle: boolean): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetNetworkIdAlwaysExistsForPlayer(netId, _player, toggle);
}

/**
 * "No Reassign" in CPhysicalScriptGameStateDataNode
 * 
 * Hash: 0x9D724B400A7E8FFC | Since: unknown
 */
export function setIdCanBeReassigned(netId: number, toggle: boolean): void {
    Citizen.invokeNative('0x9D724B400A7E8FFC', netId, toggle);
}

/**
 * Whether or not another player is allowed to take control of the entity
 * 
 * Hash: 0x299EEB23175895FC | Since: unknown
 */
export function setIdCanMigrate(netId: number, toggle: boolean): void {
    SetNetworkIdCanMigrate(netId, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE05E81A888FA63C8 | Since: unknown
 */
export function setIdExistsOnAllMachines(netId: number, toggle: boolean): void {
    SetNetworkIdExistsOnAllMachines(netId, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FA36981311FA4FF | Since: unknown
 */
export function setIdPassControlInTutorial(netId: number, state: boolean): void {
    Citizen.invokeNative('0x3FA36981311FA4FF', netId, state);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6928482543022B4 | Since: unknown
 */
export function setIdVisibleInCutscene(netId: number): void {
    SetNetworkIdVisibleInCutscene(netId, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x32EBD154CB6B8B99 | Since: unknown
 */
export function setIdVisibleInCutsceneHack(netId: number): void {
    Citizen.invokeNative('0x32EBD154CB6B8B99', netId, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x76B3F29D3F967692 | Since: unknown
 */
export function setIdVisibleInCutsceneRemainHack(): void {
    Citizen.invokeNative('0x76B3F29D3F967692', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6274C4712850841E | Since: unknown
 */
export function setVehicleAsGhost(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = typeof vehicle == 'object' ? vehicle.handle() : vehicle;
    SetNetworkVehicleAsGhost(_vehicle, toggle);
}

/**
 * `rage::netBlenderLinInterp::GetPositionMaxForUpdateLevel`
 * 
 * Hash: 0xA2A707979FE754DC | Since: unknown
 */
export function setVehicleMaxPositionDeltaMultiplier(vehicle: number | IVehicle, multiplier: number): void {
    const _vehicle = typeof vehicle == 'object' ? vehicle.handle() : vehicle;
    SetNetworkVehiclePositionUpdateMultiplier(_vehicle, multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0xEC51713AB6EC36E8 | Since: unknown
 */
export function setVehicleRespotTimer(netId: number, time: number): void {
    SetNetworkVehicleRespotTimer(netId, time, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x13F1FCB111B820B0 | Since: unknown
 */
export function setNonParticipantsOfThisScriptAsGhosts(): void {
    Citizen.invokeNative('0x13F1FCB111B820B0', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x12B37D54667DB0B8 | Since: unknown
 */
export function setPlayerInvisibleLocally(player: number | string | IPlayer, bIncludePlayersVehicle: boolean): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetPlayerInvisibleLocally(_player, bIncludePlayersVehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFAA10F1FAFB11AF2 | Since: unknown
 */
export function setPlayerVisibleLocally(player: number | string | IPlayer, bIncludePlayersVehicle: boolean): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetPlayerVisibleLocally(_player, bIncludePlayersVehicle);
}

/**
 * Enables ghosting between specific players
 * 
 * Hash: 0xA7C511FA1C5BDA38 | Since: unknown
 */
export function setRemotePlayerAsGhost(player: number | string | IPlayer): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetRelationshipToPlayer(_player, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x96320E6549DAE7B4 | Since: unknown
 */
export function setRemotePlayerVisibleInCutscene(player: number | string | IPlayer, locallyVisible: boolean): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    Citizen.invokeNative('0x96320E6549DAE7B4', _player, locallyVisible);
}

/**
 * Access to the store for shark cards etc...
 * 
 * Hash: 0x9641A9FF718E9C5E | Since: unknown
 */
export function setStoreEnabled(toggle: boolean): void {
    SetStoreEnabled(toggle);
}

/**
 * Starts a new singleplayer game (at the prologue).
 * 
 * Hash: 0x593850C16A36B692 | Since: unknown
 */
export function shutdownAndLaunchSinglePlayerGame(): void {
    ShutdownAndLaunchSinglePlayerGame();
}

/**
 * In singleplayer this will re-load your game.
 * 
 * In FiveM / GTA:Online this disconnects you from the session, and starts loading single player, however you still remain connected to the server (only if you're the host, if you're not then you also (most likely) get disconnected from the server) and other players will not be able to join until you exit the game.
 * 
 * You might need to DoScreenFadeIn and ShutdownLoadingScreen otherwise you probably won't end up loading into SP at all.
 * 
 * Somewhat related note: opening the pause menu after loading into this 'singleplayer' mode crashes the game.
 * 
 * Hash: 0x9ECA15ADFE141431 | Since: unknown
 */
export function shutdownAndLoadMostRecentSave(): boolean {
    return ShutdownAndLoadMostRecentSave();
}

/**
 * No comment provided
 * 
 * Hash: 0x3448505B6E35262D | Since: unknown
 */
export function textureDownloadGetName(): string {
    return TextureDownloadGetName(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x5776ED562C134687 | Since: unknown
 */
export function textureDownloadHasFailed(): boolean {
    return TextureDownloadHasFailed(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x487EB90B98E9FB19 | Since: unknown
 */
export function textureDownloadRelease(): void {
    TextureDownloadRelease(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x16160DA74A8E74A2 | Since: unknown
 */
export function textureDownloadRequest(filePath: string, name: string): [number, any] {
    return TextureDownloadRequest(filePath, name, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0B203B4AFDE53A4F | Since: unknown
 */
export function titleTextureDownloadRequest(filePath: string, name: string): number {
    return TitleTextureDownloadRequest(filePath, name, false);
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0xB606E6CC59664972 | Since: unknown
 */
export function triggerCommerceDataFetch(): void {
    Citizen.invokeNative('0xB606E6CC59664972', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE9B99B6853181409 | Since: unknown
 */
export function ugcCancelQuery(): void {
    UgcCancelQuery();
}

/**
 * No comment provided
 * 
 * Hash: 0x17440AA15D1D3739 | Since: unknown
 */
export function ugcClearCreateResult(): void {
    UgcClearCreateResult();
}

/**
 * No comment provided
 * 
 * Hash: 0xA1E5E0204A6FCC70 | Since: unknown
 */
export function ugcClearModifyResult(): void {
    UgcClearModifyResult();
}

/**
 * No comment provided
 * 
 * Hash: 0x61A885D3F7CFEE9A | Since: unknown
 */
export function ugcClearOfflineQuery(): void {
    UgcClearOfflineQuery();
}

/**
 * No comment provided
 * 
 * Hash: 0xBA96394A0EECFA65 | Since: unknown
 */
export function ugcClearQueryResults(): void {
    UgcClearQueryResults();
}

/**
 * No comment provided
 * 
 * Hash: 0x152D90E4C1B4738A | Since: unknown
 */
export function ugcCopyContent(): [boolean, any, any] {
    return UgcCopyContent();
}

/**
 * No comment provided
 * 
 * Hash: 0x24E4E51FC16305F9 | Since: unknown
 */
export function ugcDidCreateSucceed(): boolean {
    return Citizen.invokeNative('0x24E4E51FC16305F9');
}

/**
 * No comment provided
 * 
 * Hash: 0x162C23CA83ED0A62 | Since: unknown
 */
export function ugcDidDescriptionRequestSucceed(): boolean {
    return Citizen.invokeNative('0x162C23CA83ED0A62', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x941E5306BCD7C2C7 | Since: unknown
 */
export function ugcDidGetSucceed(): boolean {
    return UgcDidGetSucceed();
}

/**
 * No comment provided
 * 
 * Hash: 0x793FF272D5B365F4 | Since: unknown
 */
export function ugcDidModifySucceed(): boolean {
    return Citizen.invokeNative('0x793FF272D5B365F4');
}

/**
 * No comment provided
 * 
 * Hash: 0x4D02279C83BE69FE | Since: unknown
 */
export function ugcDidQueryCreatorsSucceed(): boolean {
    return Citizen.invokeNative('0x4D02279C83BE69FE');
}

/**
 * No comment provided
 * 
 * Hash: 0xD5A4B59980401588 | Since: unknown
 */
export function ugcGetBookmarkedContent(): [boolean, any] {
    return UgcGetBookmarkedContent(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x40F7E66472DF3E5C | Since: unknown
 */
export function ugcGetCachedDescription(): string {
    return UgcGetCachedDescription(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7BAB11E7C9C6C5A | Since: unknown
 */
export function ugcGetContentCategory(): number {
    return UgcGetContentCategory(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x8C8D2739BA44AF0F | Since: unknown
 */
export function ugcGetContentCreatedByLocalPlayer(): boolean {
    return Citizen.invokeNative('0x8C8D2739BA44AF0F', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x584770794D758C18 | Since: unknown
 */
export function ugcGetContentCreatorGamerHandle(): [boolean, any] {
    return Citizen.invokeNative('0x584770794D758C18', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x4A56710BAB5C4DB4 | Since: unknown
 */
export function ugcGetContentDescription(index: number): string {
    return Citizen.invokeNative('0x4A56710BAB5C4DB4', index);
}

/**
 * No comment provided
 * 
 * Hash: 0x7CF0448787B23758 | Since: unknown
 */
export function ugcGetContentDescriptionHash(): number {
    return UgcGetContentDescriptionHash(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x37025B27D9B658B1 | Since: unknown
 */
export function ugcGetContentFileVersion(): number {
    return UgcGetContentFileVersion(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A17A27D75C74887 | Since: unknown
 */
export function ugcGetContentHash(): number {
    return UgcGetContentHash();
}

/**
 * No comment provided
 * 
 * Hash: 0x7FCC39C46C3C03BD | Since: unknown
 */
export function ugcGetContentHasHiResPhoto(): boolean {
    return Citizen.invokeNative('0x7FCC39C46C3C03BD', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x1D610EB0FEA716D9 | Since: unknown
 */
export function ugcGetContentHasLoResPhoto(): boolean {
    return Citizen.invokeNative('0x1D610EB0FEA716D9', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x993CBE59D350D225 | Since: unknown
 */
export function ugcGetContentHasPlayerBookmarked(): boolean {
    return UgcGetContentHasPlayerBookmarked(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x70EA8DA57840F9BE | Since: unknown
 */
export function ugcGetContentHasPlayerRecord(): boolean {
    return UgcGetContentHasPlayerRecord(undefined);
}

/**
 * Return the mission id of a job.
 * 
 * Hash: 0x55AA95F481D694D2 | Since: unknown
 */
export function ugcGetContentId(): string {
    return UgcGetContentId(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3054F114121C21EA | Since: unknown
 */
export function ugcGetContentIsPublished(): boolean {
    return UgcGetContentIsPublished(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAEAB987727C5A8A4 | Since: unknown
 */
export function ugcGetContentIsUsingScNickname(): boolean {
    return Citizen.invokeNative('0xAEAB987727C5A8A4', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9240A96C74CCA13 | Since: unknown
 */
export function ugcGetContentIsVerified(): boolean {
    return UgcGetContentIsVerified(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x32DD916F3F7C9672 | Since: unknown
 */
export function ugcGetContentLanguage(): number {
    return UgcGetContentLanguage(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF09786A7FCAB582 | Since: unknown
 */
export function ugcGetContentName(): string {
    return UgcGetContentName(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0A6138401BCB837 | Since: unknown
 */
export function ugcGetContentNum(): number {
    return UgcGetContentNum();
}

/**
 * No comment provided
 * 
 * Hash: 0xBAF6BABF9E7CCC13 | Since: unknown
 */
export function ugcGetContentPath(): string {
    return UgcGetContentPath(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x1ACCFBA3D8DAB2EE | Since: unknown
 */
export function ugcGetContentRating(): number {
    return UgcGetContentRating(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x759299C5BB31D2A9 | Since: unknown
 */
export function ugcGetContentRatingCount(): number {
    return UgcGetContentRatingCount(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4E548C0D7AE39FF9 | Since: unknown
 */
export function ugcGetContentRatingNegativeCount(): number {
    return UgcGetContentRatingNegativeCount(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x87E5C46C187FE0AE | Since: unknown
 */
export function ugcGetContentRatingPositiveCount(): number {
    return UgcGetContentRatingPositiveCount(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x769951E2455E2EB5 | Since: unknown
 */
export function ugcGetContentTotal(): number {
    return UgcGetContentTotal();
}

/**
 * No comment provided
 * 
 * Hash: 0xCFD115B373C0DF63 | Since: unknown
 */
export function ugcGetContentUpdatedDate(): any {
    return UgcGetContentUpdatedDate(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCD67AD041A394C9C | Since: unknown
 */
export function ugcGetContentUserId(): string {
    return UgcGetContentUserId(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x703F12425ECA8BF5 | Since: unknown
 */
export function ugcGetContentUserName(): string {
    return UgcGetContentUserName(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC55A0B40FFB1ED23 | Since: unknown
 */
export function ugcGetCreateContentId(): string {
    return UgcGetCreateContentId();
}

/**
 * No comment provided
 * 
 * Hash: 0xFBC5E768C7A77A6A | Since: unknown
 */
export function ugcGetCreateResult(): number {
    return UgcGetCreateResult();
}

/**
 * No comment provided
 * 
 * Hash: 0xB746D20B17F2A229 | Since: unknown
 */
export function ugcGetCreatorsByUserId(): [boolean, any, any] {
    return Citizen.invokeNative('0xB746D20B17F2A229');
}

/**
 * No comment provided
 * 
 * Hash: 0x597F8DBA9B206FC7 | Since: unknown
 */
export function ugcGetCreatorNum(): number {
    return UgcGetCreatorNum();
}

/**
 * No comment provided
 * 
 * Hash: 0x9F6E2821885CAEE2 | Since: unknown
 */
export function ugcGetCrewContent(): [boolean, any] {
    return UgcGetCrewContent(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9E1CCAE8BA4C281 | Since: unknown
 */
export function ugcGetFriendContent(): [boolean, any] {
    return UgcGetFriendContent(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x678BB03C1A3BD51E | Since: unknown
 */
export function ugcGetGetByCategory(): [boolean, any] {
    return UgcGetGetByCategory(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x815E5E3073DA1D67 | Since: unknown
 */
export function ugcGetGetByContentId(contentId: string, contentTypeName: string): boolean {
    return SetBalanceAddMachine(contentId, contentTypeName);
}

/**
 * No comment provided
 * 
 * Hash: 0xB8322EEB38BE7C26 | Since: unknown
 */
export function ugcGetGetByContentIds(dataCount: number, contentTypeName: string): [boolean, any] {
    return SetBalanceAddMachines(dataCount, contentTypeName);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A0A3D1A186A5508 | Since: unknown
 */
export function ugcGetModifyResult(): number {
    return UgcGetModifyResult();
}

/**
 * No comment provided
 * 
 * Hash: 0xA7862BC5ED1DFD7E | Since: unknown
 */
export function ugcGetMostRecentlyCreatedContent(): [boolean, any, any] {
    return Citizen.invokeNative('0xA7862BC5ED1DFD7E', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x97A770BEEF227E2B | Since: unknown
 */
export function ugcGetMostRecentlyPlayedContent(): [boolean, any, any] {
    return NetworkGetBackgroundLoadingRecipients(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3195F8DD0D531052 | Since: unknown
 */
export function ugcGetMyContent(): [boolean, any] {
    return UgcGetMyContent(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEDF7F927136C224B | Since: unknown
 */
export function ugcGetQueryResult(): number {
    return UgcGetQueryResult();
}

/**
 * Return the root content id of a job.
 * 
 * Hash: 0xC0173D6BFF4E0348 | Since: unknown
 */
export function ugcGetRootContentId(): string {
    return UgcGetRootContentId(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x5324A0E3E4CE3570 | Since: unknown
 */
export function ugcGetTopRatedContent(): [boolean, any, any] {
    return Citizen.invokeNative('0x5324A0E3E4CE3570', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5E24341A7F92A74B | Since: unknown
 */
export function ugcHasCreateFinished(): boolean {
    return UgcHasCreateFinished();
}

/**
 * No comment provided
 * 
 * Hash: 0xEBFA8D50ADDC54C4 | Since: unknown
 */
export function ugcHasDescriptionRequestFinished(): boolean {
    return Citizen.invokeNative('0xEBFA8D50ADDC54C4', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x02ADA21EA2F6918F | Since: unknown
 */
export function ugcHasGetFinished(): boolean {
    return UgcHasGetFinished();
}

/**
 * No comment provided
 * 
 * Hash: 0x299EF3C576773506 | Since: unknown
 */
export function ugcHasModifyFinished(): boolean {
    return UgcHasModifyFinished();
}

/**
 * No comment provided
 * 
 * Hash: 0xC33E7CBC06EC1A8D | Since: unknown
 */
export function ugcHasPermissionToWrite(): boolean {
    return Citizen.invokeNative('0xC33E7CBC06EC1A8D');
}

/**
 * No comment provided
 * 
 * Hash: 0x63B406D7884BFA95 | Since: unknown
 */
export function ugcHasQueryCreatorsFinished(): boolean {
    return Citizen.invokeNative('0x63B406D7884BFA95');
}

/**
 * No comment provided
 * 
 * Hash: 0x9FEDF86898F100E9 | Since: unknown
 */
export function ugcIsCreating(): boolean {
    return Citizen.invokeNative('0x9FEDF86898F100E9');
}

/**
 * No comment provided
 * 
 * Hash: 0x2D5DC831176D0114 | Since: unknown
 */
export function ugcIsDescriptionRequestInProgress(): boolean {
    return Citizen.invokeNative('0x2D5DC831176D0114', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD53ACDBEF24A46E8 | Since: unknown
 */
export function ugcIsGetting(): boolean {
    return UgcIsGetting();
}

/**
 * No comment provided
 * 
 * Hash: 0xF53E48461B71EECB | Since: unknown
 */
export function ugcIsLanguageSupported(): boolean {
    return UgcIsLanguageSupported(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x45E816772E93A9DB | Since: unknown
 */
export function ugcIsModifying(): boolean {
    return Citizen.invokeNative('0x45E816772E93A9DB');
}

/**
 * No comment provided
 * 
 * Hash: 0x5CAE833B0EE0C500 | Since: unknown
 */
export function ugcLoadOfflineQuery(): boolean {
    return UgcPoliciesMakePrivate(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1DE0F5F50D723CAA | Since: unknown
 */
export function ugcPublish(contentId: string, baseContentId: string, contentTypeName: string): boolean {
    return UgcPublish(contentId, baseContentId, contentTypeName);
}

/**
 * No comment provided
 * 
 * Hash: 0x692D58DF40657E8C | Since: unknown
 */
export function ugcQueryByCategory(): boolean {
    return Citizen.invokeNative('0x692D58DF40657E8C', undefined, undefined, undefined, undefined, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x158EC424F35EC469 | Since: unknown
 */
export function ugcQueryByContentId(contentId: string, latestVersion: boolean, contentTypeName: string): boolean {
    return UgcQueryByContentId(contentId, latestVersion, contentTypeName);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7397A83F7A2A462 | Since: unknown
 */
export function ugcQueryByContentIds(count: number, latestVersion: boolean, contentTypeName: string): [boolean, any] {
    return UgcQueryByContentIds(count, latestVersion, contentTypeName);
}

/**
 * No comment provided
 * 
 * Hash: 0x6D4CB481FAC835E8 | Since: unknown
 */
export function ugcQueryMostRecentlyCreatedContent(offset: number, count: number, contentTypeName: string): boolean {
    return UgcQueryRecentlyCreatedContent(offset, count, contentTypeName, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x9BF438815F5D96EA | Since: unknown
 */
export function ugcQueryMyContent(): [boolean, any] {
    return UgcQueryMyContent(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x68103E2247887242 | Since: unknown
 */
export function ugcReleaseAllCachedDescriptions(): void {
    Citizen.invokeNative('0x68103E2247887242');
}

/**
 * No comment provided
 * 
 * Hash: 0x5A34CD9C3C5BEC44 | Since: unknown
 */
export function ugcReleaseCachedDescription(): boolean {
    return Citizen.invokeNative('0x5A34CD9C3C5BEC44', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5E0165278F6339EE | Since: unknown
 */
export function ugcRequestCachedDescription(): number {
    return UgcRequestCachedDescription(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x171DF6A0C07FB3DC | Since: unknown
 */
export function ugcRequestContentDataFromIndex(): number {
    return UgcRequestContentDataFromIndex(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7FD2990AF016795E | Since: unknown
 */
export function ugcRequestContentDataFromParams(contentTypeName: string, contentId: string): number {
    return UgcRequestContentDataFromParams(contentTypeName, contentId, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x274A1519DFC1094F | Since: unknown
 */
export function ugcSetBookmarked(contentId: string, bookmarked: boolean, contentTypeName: string): boolean {
    return UgcSetBookmarked(contentId, bookmarked, contentTypeName);
}

/**
 * No comment provided
 * 
 * Hash: 0xD05D1A6C74DA3498 | Since: unknown
 */
export function ugcSetDeleted(): [boolean, any] {
    return UgcSetDeleted(false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF98DDE0A8ED09323 | Since: unknown
 */
export function ugcSetQueryDataFromOffline(): void {
    UgcSetQueryDataFromOffline(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xFD75DABC0957BF33 | Since: unknown
 */
export function ugcSetUsingOfflineContent(): void {
    Citizen.invokeNative('0xFD75DABC0957BF33', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x308F96458B7087CC | Since: unknown
 */
export function ugcTextureDownloadRequest(): number {
    return UgcTextureDownloadRequest(undefined, 0, 0, 0, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC87E740D9F3872CC | Since: unknown
 */
export function ugcWasQueryForceCancelled(): boolean {
    return Citizen.invokeNative('0xC87E740D9F3872CC');
}

/**
 * No comment provided
 * 
 * Hash: 0x77758139EC9B66C7 | Since: unknown
 */
export function usePlayerColourInsteadOfTeamColour(toggle: boolean): void {
    UsePlayerColourInsteadOfTeamColour(toggle);
}

/**
 * calls from vehicle to net.
 * 
 * 
 * Hash: 0xB4C94523F023419C | Since: unknown
 */
export function vehToNet(vehicle: number | IVehicle): number {
    const _vehicle = typeof vehicle == 'object' ? vehicle.handle() : vehicle;
    return VehToNet(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE8BA82390622BA13 | Since: unknown
 */
export function allowDeadPedNetworkBlending(netId: number, allow: boolean): void {
    Citizen.invokeNative('0xE8BA82390622BA13', netId, allow);
}

/**
 * NETWORK_CAN_*
 * 
 * Hash: 0x9F633448E4C73207 | Since: unknown
 */
export function canTextFromGamerBeViewed(): [boolean, any] {
    return Citizen.invokeNative('0x9F633448E4C73207');
}

/**
 * No comment provided
 * 
 * Hash: 0x0C1BF187985B15C8 | Since: unknown
 */
export function clearClockSyncTimeOverride(startGlobalTransition: boolean, transitionTime: number): void {
    Citizen.invokeNative('0x0C1BF187985B15C8', startGlobalTransition, transitionTime);
}

/**
 * Clears tunable contexts that were set up using _NETWORK_SET_TUNABLES_REGISTRATION_CONTEXTS
 * 
 * Hash: 0x0C87C83C8950432B | Since: unknown
 */
export function clearTunablesRegistrationContexts(): void {
    Citizen.invokeNative('0x0C87C83C8950432B');
}

/**
 * If the restart reason is 4 (BE_RESTART_EF_DISABLED_WITH_BE), will cause the game to exit with exit code 622011. Otherwise exits with code 622010. Has no effect when a restart hasn't been requested (reason == 0 or reason > 6).
 * 
 * Note that this 'confirmation' itself does not restart the game, a call to QUIT_GAME or similar is required afterwards.
 * 
 * Hash: 0x0A141818CA2311AD | Since: unknown
 */
export function confirmGameRestart(): void {
    Citizen.invokeNative('0x0A141818CA2311AD');
}

/**
 * communicationType: 0 = VOICE; 1 = TEXT_CHAT; 2 = TEXT_MESSAGE; 3 = EMAIL; 4 = USER_CONTENT; 5 = USER_TEXT
 * 
 * Hash: 0xDBDF80673BBA3D65 | Since: unknown
 */
export function doesCommunicationGroupHavePermission(communicationType: number): boolean {
    return Citizen.invokeNative('0xDBDF80673BBA3D65', communicationType);
}

/**
 * No comment provided
 * 
 * Hash: 0x20C12650830A64EC | Since: unknown
 */
export function doesCommunicationGroupHaveSettingsEnabled(communicationType: number): boolean {
    return Citizen.invokeNative('0x20C12650830A64EC', communicationType);
}

/**
 * No comment provided
 * 
 * Hash: 0x214CA1730793EBA8 | Since: unknown
 */
export function getAccessCodeLabelBody(accessCode: number): string {
    return Citizen.invokeNative('0x214CA1730793EBA8', accessCode);
}

/**
 * No comment provided
 * 
 * Hash: 0x967E6FB554E1B6DE | Since: unknown
 */
export function getAccessCodeLabelHeading(accessCode: number): string {
    return Citizen.invokeNative('0x967E6FB554E1B6DE', accessCode);
}

/**
 * 0x20211000 = HUD_BE_ERROR_FAILED_UNKNOWN
 * 0x20212000 = HUD_BE_ERROR_FAILED_CLIENT_INIT
 * 0x20213000 = HUD_BE_ERROR_FAILED_SERVER_INIT
 * 0x20214000 = HUD_BE_ERROR_FAILED_AUTH_ATTEMPTS
 * 0x20215000 = HUD_BE_ERROR_UNTRUSTED_HOST
 * 0x20216000 = HUD_BE_ERROR_KICKED
 * 0x20217000 = HUD_BE_ERROR_BANNED
 * 0x50140000 = HUD_BE_BLOCK_BANNED
 * 
 * Note: an invalid error code returns a null pointer!
 * 
 * Hash: 0xCBA50F371E45B90D | Since: unknown
 */
export function getBattleyeErrorMessageLabel(errorCode: number): string {
    return Citizen.invokeNative('0xCBA50F371E45B90D', errorCode);
}

/**
 * Note: this native was added in build 889.19
 * 
 * Hash: 0xE448693B3EA3B92C | Since: unknown
 */
export function getBroadcastDataHostUpdateSize(scriptNameHash: number | string, instance: number, positionHash: number | string, handlerNum: number): number {
    if (typeof scriptNameHash === 'string') scriptNameHash = GetHashKey(scriptNameHash)
    if (typeof positionHash === 'string') positionHash = GetHashKey(positionHash)
    return Citizen.invokeNative('0xE448693B3EA3B92C', scriptNameHash, instance, positionHash, handlerNum);
}

/**
 * Note: this native was added in build 889.19
 * 
 * Hash: 0xAC3F722321800755 | Since: unknown
 */
export function getBroadcastDataPlayerUpdateSize(scriptNameHash: number | string, instance: number, positionHash: number | string, handlerNum: number): number {
    if (typeof scriptNameHash === 'string') scriptNameHash = GetHashKey(scriptNameHash)
    if (typeof positionHash === 'string') positionHash = GetHashKey(positionHash)
    return Citizen.invokeNative('0xAC3F722321800755', scriptNameHash, instance, positionHash, handlerNum);
}

/**
 * No comment provided
 * 
 * Hash: 0x97F35B898D2D067F | Since: unknown
 */
export function getCommunicationGroupDefaultFlags(communicationType: number): number {
    return Citizen.invokeNative('0x97F35B898D2D067F', communicationType);
}

/**
 * Returns communicationGroupFlag
 * communicationType: see 0xDBDF80673BBA3D65
 * 
 * enum eCommunicationGroupFlag
 * {
 * COMMUNICATION_GROUP_LOCAL_PLAYER = 1 << 0,
 * COMMUNICATION_GROUP_FRIENDS = 1 << 1,
 * COMMUNICATION_GROUP_SMALL_CREW = 1 << 2,
 * COMMUNICATION_GROUP_LARGE_CREW = 1 << 3,
 * COMMUNICATION_GROUP_RECENT_PLAYER = 1 << 4,
 * COMMUNICATION_GROUP_SAME_SESSION = 1 << 5,
 * COMMUNICATION_GROUP_SAME_TEAM = 1 << 6,
 * COMMUNICATION_GROUP_INVALID = 1 << 7,
 * };
 * 
 * Hash: 0x40DF02F371F40883 | Since: unknown
 */
export function getCommunicationGroupFlags(communicationType: number): number {
    return Citizen.invokeNative('0x40DF02F371F40883', communicationType);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF66ACD9AE81A99F | Since: unknown
 */
export function getCommunicationGroupValue(communicationType: number): number {
    return Citizen.invokeNative('0xBF66ACD9AE81A99F', communicationType);
}

/**
 * No comment provided
 * 
 * Hash: 0x69D05E1EAD74B9DD | Since: unknown
 */
export function getDumpOfAssetVerifier(): any {
    return Citizen.invokeNative('0x69D05E1EAD74B9DD');
}

/**
 * enum eNetworkGameRestartReason
 * {
 * BE_RESTART_SERVICE_NOT_RUNNING = 1, 	// BattlEye service not running
 * BE_RESTART_SERVICE_NEEDS_UPDATE, 		// BattlEye service needs an update
 * BE_RESTART_UNKNOWN_REASON,				// Unknown BattlEye reason
 * BE_RESTART_EF_DISABLED_WITH_BE,			// BattlEye Enforcement Flag is disabled, but BattlEye is active
 * BE_RESTART_EF_ENABLED_NO_BE,			// BattlEye Enforcement Flag is enabled, but BattlEye is not active
 * BE_RESTART_BE_MODULES_FAILED_TO_LOAD,	// BattlEye modules failed to load
 * NUM_NETWORK_GAME_RESTART_REASONS
 * };
 * 
 * Hash: 0x7F7E8401F81CB65B | Since: unknown
 */
export function getGameRestartReason(): number {
    return Citizen.invokeNative('0x7F7E8401F81CB65B');
}

/**
 * Returns the restart reason as a string, see _NETWORK_GET_GAME_RESTART_REASON. Returns a null pointer when a restart hasn't been requested (reason == 0 or reason > 6).
 * 
 * Hash: 0x47B11D51FC50A259 | Since: unknown
 */
export function getGameRestartReasonMessageLabel(): string {
    return Citizen.invokeNative('0x47B11D51FC50A259');
}

/**
 * Note: this native was added in build 889.19
 * 
 * Hash: 0x72C8588ABE22C972 | Since: unknown
 */
export function getHostBroadcastDataSizeUnsynced(scriptNameHash: number | string, instance: number, positionHash: number | string, handlerNum: number): number {
    if (typeof scriptNameHash === 'string') scriptNameHash = GetHashKey(scriptNameHash)
    if (typeof positionHash === 'string') positionHash = GetHashKey(positionHash)
    return Citizen.invokeNative('0x72C8588ABE22C972', scriptNameHash, instance, positionHash, handlerNum);
}

/**
 * Note: this native was added in build 889.19
 * 
 * Hash: 0xB99CD664FD4720A1 | Since: unknown
 */
export function getPlayerBroadcastDataSizeUnsynced(scriptNameHash: number | string, instance: number, positionHash: number | string, handlerNum: number): number {
    if (typeof scriptNameHash === 'string') scriptNameHash = GetHashKey(scriptNameHash)
    if (typeof positionHash === 'string') positionHash = GetHashKey(positionHash)
    return Citizen.invokeNative('0xB99CD664FD4720A1', scriptNameHash, instance, positionHash, handlerNum);
}

/**
 * No comment provided
 * 
 * Hash: 0x04BD27B5ACB67067 | Since: unknown
 */
export function getRandomFloatRanged(rangeStart: number, rangeEnd: number): number {
    return Citizen.invokeNative('0x04BD27B5ACB67067', rangeStart, rangeEnd);
}

/**
 * Checks if the given tunable exists and returns its value. Otherwise returns defaultValue.
 * Possible tunable contexts must first be set up using _NETWORK_SET_TUNABLES_REGISTRATION_CONTEXTS.
 * 
 * Hash: 0xB327CF1B8C2C0EA3 | Since: unknown
 */
export function getTunablesRegistrationBool(tunableName: number | string, defaultValue: boolean): boolean {
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return Citizen.invokeNative('0xB327CF1B8C2C0EA3', tunableName, defaultValue);
}

/**
 * Checks if the given tunable exists and returns its value. Otherwise returns defaultValue.
 * Possible tunable contexts must first be set up using _NETWORK_SET_TUNABLES_REGISTRATION_CONTEXTS.
 * 
 * Hash: 0x367E5E33E7F0DD1A | Since: unknown
 */
export function getTunablesRegistrationFloat(tunableName: number | string, defaultValue: number): number {
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return Citizen.invokeNative('0x367E5E33E7F0DD1A', tunableName, defaultValue);
}

/**
 * Checks if the given tunable exists and returns its value. Otherwise returns defaultValue.
 * Possible tunable contexts must first be set up using _NETWORK_SET_TUNABLES_REGISTRATION_CONTEXTS.
 * 
 * Hash: 0x0D94071E55F4C9CE | Since: unknown
 */
export function getTunablesRegistrationInt(tunableName: number | string, defaultValue: number): number {
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return Citizen.invokeNative('0x0D94071E55F4C9CE', tunableName, defaultValue);
}

/**
 * _NETWORK_HAS_P*
 * checkType 3 is similar as using 0x9F633448E4C73207
 * 
 * Hash: 0x62E29CDA11F9C230 | Since: unknown
 */
export function hasPlayerPassedCheckType(checkType: number): [boolean, any] {
    return Citizen.invokeNative('0x62E29CDA11F9C230', checkType);
}

/**
 * Checks for privilege 29
 * 
 * Hash: 0xD9719341663C385F | Since: unknown
 */
export function hasRosPrivilegeMpTextCommunication(): boolean {
    return Citizen.invokeNative('0xD9719341663C385F');
}

/**
 * Checks for privilege 30
 * 
 * Hash: 0x8956A309BE90057C | Since: unknown
 */
export function hasRosPrivilegeMpVoiceCommunication(): boolean {
    return Citizen.invokeNative('0x8956A309BE90057C');
}

/**
 * Checks for privilege 31
 * 
 * Hash: 0x9BA54B3CFB82ADDD | Since: unknown
 */
export function hasRosPrivilegeReporting(): boolean {
    return Citizen.invokeNative('0x9BA54B3CFB82ADDD');
}

/**
 * Appears to be PlayStation-specific. Always returns true on other platforms if signed in with the primary user profile
 * 
 * Hash: 0xE1E02509169C124E | Since: unknown
 */
export function havePlatformCommunicationPrivileges(): boolean {
    return Citizen.invokeNative('0xE1E02509169C124E');
}

/**
 * No comment provided
 * 
 * Hash: 0xCFE359CCCFE359CC | Since: unknown
 */
export function hideEntityInTutorialSession(netHandle: number, hide: boolean): void {
    Citizen.invokeNative('0xCFE359CCCFE359CC', netHandle, hide);
}

/**
 * Clears the failed invite join alert reason
 * 
 * Hash: 0x8EF5F5811A940F82 | Since: unknown
 */
export function inviteClearJoinFailReason(): void {
    Citizen.invokeNative('0x8EF5F5811A940F82');
}

/**
 * Retrieves the failed invite join alert reason
 * 
 * Hash: 0x7B335F84501145BB | Since: unknown
 */
export function inviteGetJoinFailReason(): string {
    return Citizen.invokeNative('0x7B335F84501145BB');
}

/**
 * Hardcoded to return 0.
 * 
 * Hash: 0x0292BD7F3766CEBC | Since: unknown
 */
export function isAmericasVersion(): boolean {
    return Citizen.invokeNative('0x0292BD7F3766CEBC');
}

/**
 * No comment provided
 * 
 * Hash: 0x4666CD7431DE98E2 | Since: unknown
 */
export function isSpecialTutorialSession(): boolean {
    return Citizen.invokeNative('0x4666CD7431DE98E2');
}

/**
 * Returns the name from given friend gamer handle.
 * 
 * Hash: 0x338ECE3637937BC2 | Since: unknown
 */
export function loadGamerDisplayName(): [string, any] {
    return Citizen.invokeNative('0x338ECE3637937BC2');
}

/**
 * For the XboxPC version this returns true if XPRIVILEGE_MULTIPLAYER_SESSIONS is granted but XPRIVILEGE_CROSS_PLAY is NOT granted.
 * For more information, see https://learn.microsoft.com/en-us/gaming/gdk/_content/gc/live/features/identity/privileges/concepts/live-user-privileges-client#privilege-ids-to-check
 * 
 * Always returns false for non-XboxPC versions.
 * 
 * Hash: 0xA6BC0D9BCF9662FA | Since: unknown
 */
export function multiplayerCrossplayNotAllowed(): boolean {
    return Citizen.invokeNative('0xA6BC0D9BCF9662FA');
}

/**
 * No comment provided
 * 
 * Hash: 0xE0128328CF1FD9F4 | Since: unknown
 */
export function sessionLeaveIncludingReason(leaveFlags: number, leaveReason: number): boolean {
    return Citizen.invokeNative('0xE0128328CF1FD9F4', leaveFlags, leaveReason);
}

/**
 * communicationType: see 0xDBDF80673BBA3D65
 * communicationGroupFlag: see 0x40DF02F371F40883
 * 
 * Hash: 0xE549F846DE7D32D5 | Since: unknown
 */
export function setCommunicationGroupFlags(communicationType: number, communicationGroupFlag: number): void {
    Citizen.invokeNative('0xE549F846DE7D32D5', communicationType, communicationGroupFlag);
}

/**
 * No comment provided
 * 
 * Hash: 0x67F7C81C1395672A | Since: unknown
 */
export function setIgnoreVehicleRammedByNonVehicle(toggle: boolean): void {
    Citizen.invokeNative('0x67F7C81C1395672A', toggle);
}

/**
 * Sets up tunable contexts for _NETWORK_GET_TUNABLES_REGISTRATION_{BOOL|INT|FLOAT}
 * 
 * Hash: 0x014A73449675121D | Since: unknown
 */
export function setTunablesRegistrationContexts(): any {
    return Citizen.invokeNative('0x014A73449675121D');
}

/**
 * No comment provided
 * 
 * Hash: 0x35AEB4AC7C73C6E1 | Since: unknown
 */
export function setTutorialSpecialSession(toggle: boolean): void {
    Citizen.invokeNative('0x35AEB4AC7C73C6E1', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE9D0244ACBEE1BC4 | Since: unknown
 */
export function triggerDamageEventForZeroPedDamage(entity: number | IEntity, trigger: boolean): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    Citizen.invokeNative('0xE9D0244ACBEE1BC4', _entity, trigger);
}

/**
 * reportData includes mc, ceo, yacht and licenceplate names
 * 
 * Hash: 0x527803286A8B6C81 | Since: unknown
 */
export function setFreemodeReportData(): [any, any] {
    return Citizen.invokeNative('0x527803286A8B6C81');
}

/**
 * No comment provided
 * 
 * Hash: 0x24B3A7EB827EEDCF | Since: unknown
 */
export function ugcClearNominatedJob(contentTypeName: string): boolean {
    return Citizen.invokeNative('0x24B3A7EB827EEDCF', contentTypeName);
}

/**
 * No comment provided
 * 
 * Hash: 0xB1556B9C1425B727 | Since: unknown
 */
export function ugcGetNominatedContent(offset: number, maxCount: number, contentTypeName: string): [boolean, any] {
    return Citizen.invokeNative('0xB1556B9C1425B727', offset, maxCount, contentTypeName);
}

/**
 * No comment provided
 * 
 * Hash: 0xEA92F1225A53BE3F | Since: unknown
 */
export function ugcSetNominatedJob(contentId: string, nominated: boolean, contentTypeName: string): boolean {
    return Citizen.invokeNative('0xEA92F1225A53BE3F', contentId, nominated, contentTypeName);
}

