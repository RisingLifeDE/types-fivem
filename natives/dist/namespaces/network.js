import { Vector3, IEntity, IPed, IPlayer, IVehicle, IObject } from '@risinglife/fivem-shared';
/**
 * No comment provided
 *
 * Hash: 0xD45B1FFCCD52FF19 | Since: 323
 */
export function activateDamageTrackerOnId(netID, toggle) {
    ActivateDamageTrackerOnNetworkId(netID, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBEC0816FF5ACBCDA | Since: 757
 */
export function activateDamageTrackerOnPlayer(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ActivateDamageTrackerOnPlayer(_player, toggle);
}
/**
 * Getter for SET_NETWORK_CUTSCENE_ENTITIES.
 *
 * Hash: 0x66D6A5E9C511214A | Since: 2699
 */
export function areCutsceneEntitiesed() {
    return NetworkAreCutsceneEntities();
}
/**
 * No comment provided
 *
 * Hash: 0xEC5E3AF5289DCA81 | Since: 323
 */
export function badSportPlayerLeftDetected(event, amountReceived) {
    return BadSportPlayerLeftDetected(event, amountReceived);
}
/**
 * No comment provided
 *
 * Hash: 0xE16AA70CE9BEEDC3 | Since: 877
 */
export function canRegisterMissionDoors() {
    return Citizen.invokeNative('0xE16AA70CE9BEEDC3', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x69778E7564BADE6D | Since: 323
 */
export function canRegisterMissionEntities(ped_amt, vehicle_amt, object_amt, pickup_amt) {
    return CanRegisterMissionEntities(ped_amt, vehicle_amt, object_amt, pickup_amt);
}
/**
 * No comment provided
 *
 * Hash: 0x800DD4721A8B008B | Since: 323
 */
export function canRegisterMissionObjects(amount) {
    return CanRegisterMissionObjects(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xBCBF4FEF9FA5D781 | Since: 323
 */
export function canRegisterMissionPeds(amount) {
    return CanRegisterMissionPeds(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x0A49D1CB6E34AF72 | Since: 757
 */
export function canRegisterMissionPickups(amount) {
    return CanRegisterMissionPickups(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x7277F1F2E085EE74 | Since: 323
 */
export function canRegisterMissionVehicles(amount) {
    return CanRegisterMissionVehicles(amount);
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x966DD84FB6A46017 | Since: 323
 */
export function clearServiceEventArguments() {
    ClearLaunchParams();
}
/**
 * Downloads prod.cloud.rockstargames.com/titles/gta5/[platform]/check.json
 *
 * Hash: 0x4F18196C8D38768D | Since: 323
 */
export function cloudCheckAvailability() {
    CloudCheckAvailability();
}
/**
 * No comment provided
 *
 * Hash: 0xC64DED7EF0D2FE37 | Since: 323
 */
export function cloudDeleteMemberFile() {
    return CloudDeleteMemberFile(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3A3D5568AF297CD5 | Since: 323
 */
export function cloudDidRequestSucceed(requestId) {
    return CloudDidRequestSucceed(requestId);
}
/**
 * No comment provided
 *
 * Hash: 0x0B0CC10720653F3B | Since: 323
 */
export function cloudGetAvailabilityCheckResult() {
    return CloudGetAvailabilityCheckResult();
}
/**
 * No comment provided
 *
 * Hash: 0x4C61B39930D045DA | Since: 323
 */
export function cloudHasRequestCompleted(requestId) {
    return CloudHasRequestCompleted(requestId);
}
/**
 * No comment provided
 *
 * Hash: 0xC7ABAC5DE675EE3B | Since: 323
 */
export function cloudIsCheckingAvailability() {
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
 * Hash: 0xAC97AF97FA68E5D5 | Since: 323
 */
export function convertPosixTime(posixTime) {
    return ConvertPosixTime(posixTime);
}
/**
 * No comment provided
 *
 * Hash: 0x265635150FB0D82E | Since: 323
 */
export function delayMpStoreOpen() {
    Citizen.invokeNative('0x265635150FB0D82E');
}
/**
 * No comment provided
 *
 * Hash: 0x43865688AE10F0D7 | Since: 323
 */
export function facebookCanPostToFacebook() {
    return FacebookIsAvailable();
}
/**
 * No comment provided
 *
 * Hash: 0xA75E2B6733DA5142 | Since: 323
 */
export function facebookDidPostSucceed() {
    return FacebookDoUnkCheck();
}
/**
 * No comment provided
 *
 * Hash: 0x62B9FEC9A11F10EF | Since: 323
 */
export function facebookHasPostCompleted() {
    return FacebookIsSendingData();
}
/**
 * No comment provided
 *
 * Hash: 0x098AB65B9ED9A9EC | Since: 323
 */
export function facebookPostCompletedHeist(heistName, cashEarned, xpEarned) {
    return FacebookSetHeistComplete(heistName, cashEarned, xpEarned);
}
/**
 * No comment provided
 *
 * Hash: 0x0AE1F1653B554AB9 | Since: 323
 */
export function facebookPostCompletedMilestone(milestoneId) {
    return FacebookSetMilestoneComplete(milestoneId);
}
/**
 * No comment provided
 *
 * Hash: 0xDC48473142545431 | Since: 323
 */
export function facebookPostCreateCharacter() {
    return FacebookSetCreateCharacterComplete();
}
/**
 * Hardcoded to not work in SP.
 *
 * Hash: 0x416DBD4CD6ED8DD2 | Since: 323
 */
export function fadeOutLocalPlayer() {
    FadeOutLocalPlayer(false);
}
/**
 * No comment provided
 *
 * Hash: 0xCBBD7C4991B64809 | Since: 323
 */
export function filloutPmPlayerList() {
    return FilloutPmPlayerList(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x716B6DB9D1886106 | Since: 323
 */
export function filloutPmPlayerListWithNames() {
    return FilloutPmPlayerListWithNames(undefined, undefined);
}
/**
 * Returns POSIX timestamp, an int representing the cloud time.
 *
 * Hash: 0x9A73240B49945C76 | Since: 323
 */
export function getCloudTimeAsInt() {
    return GetCloudTimeAsInt();
}
/**
 * Same as GET_CLOUD_TIME_AS_INT but returns the value as a hex string (%I64X).
 *
 * Hash: 0xF12E6CD06C73D69E | Since: 1103
 */
export function getCloudTimeAsString() {
    return GetCloudTimeAsString();
}
/**
 * index2 is unused
 *
 * Hash: 0x6F44CBF56D79FAC0 | Since: 323
 */
export function getCommerceItemCat(index, index2) {
    return GetCommerceItemCat(index, index2);
}
/**
 * No comment provided
 *
 * Hash: 0x662635855957C411 | Since: 323
 */
export function getCommerceItemId(index) {
    return GetCommerceItemId(index);
}
/**
 * No comment provided
 *
 * Hash: 0xB4271092CA7EDF48 | Since: 323
 */
export function getCommerceItemName(index) {
    return GetCommerceItemName(index);
}
/**
 * No comment provided
 *
 * Hash: 0x2A7776C709904AB0 | Since: 323
 */
export function getCommerceItemNumCats(index) {
    return GetCommerceItemNumCats(index);
}
/**
 * No comment provided
 *
 * Hash: 0x722F5D28B61C5EA8 | Since: 323
 */
export function getCommerceItemTexturename(index) {
    return GetCommerceItemTexturename(index);
}
/**
 * No comment provided
 *
 * Hash: 0xCA94551B50B4932C | Since: 323
 */
export function getCommerceProductPrice(index) {
    return GetCommerceProductPrice(index);
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x8B0C2964BA471961 | Since: 323
 */
export function getContentToLoadType() {
    return Citizen.invokeNative('0x8B0C2964BA471961');
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x88B588B41FF7868E | Since: 323
 */
export function getIsLaunchFromLiveArea() {
    return Citizen.invokeNative('0x88B588B41FF7868E');
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x67FC09BC554A75E5 | Since: 323
 */
export function getIsLiveAreaLaunchWithContent() {
    return Citizen.invokeNative('0x67FC09BC554A75E5');
}
/**
 * No comment provided
 *
 * Hash: 0xC7BE335216B5EC7C | Since: 323
 */
export function getMaxNumObjects() {
    return GetMaxNumNetworkObjects();
}
/**
 * No comment provided
 *
 * Hash: 0x0C1F7D49C39D2289 | Since: 323
 */
export function getMaxNumPeds() {
    return GetMaxNumNetworkPeds();
}
/**
 * No comment provided
 *
 * Hash: 0xA72835064DD63E4C | Since: 323
 */
export function getMaxNumPickups() {
    return GetMaxNumNetworkPickups();
}
/**
 * No comment provided
 *
 * Hash: 0x0AFCE529F69B21FF | Since: 323
 */
export function getMaxNumVehicles() {
    return GetMaxNumNetworkVehicles();
}
/**
 * No comment provided
 *
 * Hash: 0x7A5487FE9FAA6B48 | Since: 323
 */
export function getTime() {
    return GetNetworkTime();
}
/**
 * Returns the same value as GET_NETWORK_TIME in freemode, but as opposed to `GET_NETWORK_TIME` it always gets the most recent time, instead of once per tick.
 * Could be used for benchmarking since it can return times in ticks.
 *
 * Hash: 0x89023FBBF9200E9F | Since: 323
 */
export function getTimeAccurate() {
    return GetNetworkTimeAccurate();
}
/**
 * No comment provided
 *
 * Hash: 0xF2EAC213D5EA0623 | Since: 323
 */
export function getNumCommerceItems() {
    return GetNumCommerceItems();
}
/**
 * No comment provided
 *
 * Hash: 0x12B6281B6C6706C0 | Since: 323
 */
export function getNumCreatedMissionObjects() {
    return GetNumCreatedMissionObjects(false);
}
/**
 * No comment provided
 *
 * Hash: 0xCB215C4B56A7FAE7 | Since: 323
 */
export function getNumCreatedMissionPeds() {
    return GetNumCreatedMissionPeds(false);
}
/**
 * No comment provided
 *
 * Hash: 0x0CD9AB83489430EA | Since: 323
 */
export function getNumCreatedMissionVehicles() {
    return GetNumCreatedMissionVehicles(false);
}
/**
 * p0 appears to be for MP
 *
 * Hash: 0xAA81B5F10BC43AC2 | Since: 323
 */
export function getNumReservedMissionObjects() {
    return GetNumReservedMissionObjects(false, undefined);
}
/**
 * p0 appears to be for MP
 *
 * Hash: 0x1F13D5AE5CB17E17 | Since: 323
 */
export function getNumReservedMissionPeds() {
    return GetNumReservedMissionPeds(false, undefined);
}
/**
 * p0 appears to be for MP
 *
 * Hash: 0xCF3A965906452031 | Since: 323
 */
export function getNumReservedMissionVehicles() {
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
 * Hash: 0xFCA9373EF340AC0A | Since: 323
 */
export function getOnlineVersion() {
    return GetOnlineVersion();
}
/**
 * No comment provided
 *
 * Hash: 0xE42D626EEC94E5D9 | Since: 1290
 */
export function getReservedMissionEntitiesInArea(pos) {
    return Citizen.invokeNative('0xE42D626EEC94E5D9', pos.x, pos.y, pos.z, undefined);
}
/**
 * 0 = succeeded
 * 1 = pending
 * 2 = failed
 *
 * Hash: 0x8BD6C6DEA20E82C6 | Since: 323
 */
export function getStatusOfTextureDownload() {
    return GetStatusOfTextureDownload(0);
}
/**
 * No comment provided
 *
 * Hash: 0x9E23B1777A927DAD | Since: 323
 */
export function getTimeAsString(time) {
    return GetTimeAsString(time);
}
/**
 * Subtracts the second argument from the first.
 *
 * Hash: 0xA2C6FC031D46FFF0 | Since: 323
 */
export function getTimeDifference(timeA, timeB) {
    return GetTimeDifference(timeA, timeB);
}
/**
 * Adds the first argument to the second.
 *
 * Hash: 0x017008CCDAD48503 | Since: 323
 */
export function getTimeOffset(timeA, timeB) {
    return GetTimeOffset(timeA, timeB);
}
/**
 * Checks some commerce stuff
 *
 * Hash: 0x754615490A029508 | Since: 1290
 */
export function getUserPremiumAccess() {
    return Citizen.invokeNative('0x754615490A029508');
}
/**
 * Checks some commerce stuff
 *
 * Hash: 0x155467ACA0F55705 | Since: 1290
 */
export function getUserStarterAccess() {
    return Citizen.invokeNative('0x155467ACA0F55705');
}
/**
 * No comment provided
 *
 * Hash: 0x46718ACEEDEAFC84 | Since: 323
 */
export function hasTimeStarted() {
    return HasNetworkTimeStarted();
}
/**
 * No comment provided
 *
 * Hash: 0x1D4DC17C38FEAFF0 | Since: 323
 */
export function isCommerceDataFetchInProgress() {
    return Citizen.invokeNative('0x1D4DC17C38FEAFF0');
}
/**
 * No comment provided
 *
 * Hash: 0xEA14EEF5B7CD2C30 | Since: 323
 */
export function isCommerceDataValid() {
    return IsCommerceDataValid();
}
/**
 * No comment provided
 *
 * Hash: 0x2EAC52B4019E2782 | Since: 323
 */
export function isCommerceStoreOpen() {
    return IsCommerceStoreOpen();
}
/**
 * No comment provided
 *
 * Hash: 0x6E192E33AD436366 | Since: 323
 */
export function isDamageTrackerActiveOnId(netID) {
    return IsDamageTrackerActiveOnNetworkId(netID);
}
/**
 * No comment provided
 *
 * Hash: 0xB2092A1EAA7FD45F | Since: 757
 */
export function isDamageTrackerActiveOnPlayer(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsDamageTrackerActiveOnPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x21D04D7BC538C146 | Since: 323
 */
export function isEntityAGhost(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityGhostedToLocalPlayer(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x7EF7649B64D7FF10 | Since: 944
 */
export function isEntityInGhostCollision(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x7EF7649B64D7FF10', _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xA1607996431332DF | Since: 323
 */
export function isIdOwnedByParticipant(netId) {
    return IsNetworkIdOwnedByParticipant(netId);
}
/**
 * No comment provided
 *
 * Hash: 0xDD7CEF5B3A4DA8A6 | Since: 2802
 */
export function isVehicleRunningRespotTimer(networkID) {
    return Citizen.invokeNative('0xDD7CEF5B3A4DA8A6', networkID);
}
/**
 * No comment provided
 *
 * Hash: 0x28123C8B056CC8AA | Since: 3274
 */
export function isObjectReassignmentInProgress() {
    return Citizen.invokeNative('0x28123C8B056CC8AA');
}
/**
 * No comment provided
 *
 * Hash: 0xE73092F4157CD126 | Since: 323
 */
export function isPlayerInCutscene(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerInCutscene(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xD82CF8E64C8729D8 | Since: 323
 */
export function isSphereVisibleToAnotherMachine() {
    return IsSphereVisibleToAnotherMachine(0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xDC3A310219E5DA62 | Since: 323
 */
export function isSphereVisibleToPlayer() {
    return IsSphereVisibleToPlayer(undefined, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x883D79C4071E18B3 | Since: 323
 */
export function isStoreAvailableToUser() {
    return IsStoreAvailableToUser();
}
/**
 * Returns true if the two times are equal; otherwise returns false.
 *
 * Hash: 0xF5BC95857BD6D512 | Since: 323
 */
export function isTimeEqualTo(timeA, timeB) {
    return IsTimeEqualTo(timeA, timeB);
}
/**
 * Subtracts the second argument from the first, then returns whether the result is negative.
 *
 * Hash: 0xCB2CF5148012C8D0 | Since: 323
 */
export function isTimeLessThan(timeA, timeB) {
    return IsTimeLessThan(timeA, timeB);
}
/**
 * Subtracts the first argument from the second, then returns whether the result is negative.
 *
 * Hash: 0xDE350F8651E4346C | Since: 323
 */
export function isTimeMoreThan(timeA, timeB) {
    return IsTimeMoreThan(timeA, timeB);
}
/**
 * No comment provided
 *
 * Hash: 0x59328EB08C5CEB2B | Since: 323
 */
export function isUserOldEnoughToAccessStore() {
    return Citizen.invokeNative('0x59328EB08C5CEB2B');
}
/**
 * No comment provided
 *
 * Hash: 0xFA91550DF9318B22 | Since: 323
 */
export function acceptPresenceInvite() {
    return NetworkAcceptPresenceInvite(0);
}
/**
 * No comment provided
 *
 * Hash: 0xAA6A47A573ABB75A | Since: 323
 */
export function accessTunableBool(tunableContext, tunableName) {
    return NetworkAccessTunableBool(tunableContext, tunableName);
}
/**
 * No comment provided
 *
 * Hash: 0xEA16B69D93D71A45 | Since: 323
 */
export function accessTunableBoolHash(tunableContext, tunableName) {
    if (typeof tunableContext === 'string')
        tunableContext = GetHashKey(tunableContext);
    if (typeof tunableName === 'string')
        tunableName = GetHashKey(tunableName);
    return NetworkAccessTunableBoolHash(tunableContext, tunableName);
}
/**
 * No comment provided
 *
 * Hash: 0x697F508861875B42 | Since: 393
 */
export function accessTunableBoolModificationDetectionRegistrationHash(contextHash, nameHash) {
    if (typeof contextHash === 'string')
        contextHash = GetHashKey(contextHash);
    if (typeof nameHash === 'string')
        nameHash = GetHashKey(nameHash);
    return NetworkRegisterTunableBoolHash(contextHash, nameHash);
}
/**
 * No comment provided
 *
 * Hash: 0xE5608CA7BC163A5F | Since: 323
 */
export function accessTunableFloat(tunableContext, tunableName) {
    return NetworkAccessTunableFloat(tunableContext, tunableName);
}
/**
 * No comment provided
 *
 * Hash: 0x972BC203BBC4C4D5 | Since: 323
 */
export function accessTunableFloatHash(tunableContext, tunableName) {
    if (typeof tunableContext === 'string')
        tunableContext = GetHashKey(tunableContext);
    if (typeof tunableName === 'string')
        tunableName = GetHashKey(tunableName);
    return NetworkAccessTunableFloatHash(tunableContext, tunableName);
}
/**
 * No comment provided
 *
 * Hash: 0x1950DAE9848A4739 | Since: 393
 */
export function accessTunableFloatModificationDetectionRegistrationHash(contextHash, nameHash) {
    if (typeof contextHash === 'string')
        contextHash = GetHashKey(contextHash);
    if (typeof nameHash === 'string')
        nameHash = GetHashKey(nameHash);
    return NetworkRegisterTunableFloatHash(contextHash, nameHash);
}
/**
 * No comment provided
 *
 * Hash: 0x8BE1146DFD5D4468 | Since: 323
 */
export function accessTunableInt(tunableContext, tunableName) {
    return NetworkAccessTunableInt(tunableContext, tunableName);
}
/**
 * No comment provided
 *
 * Hash: 0x40FCE03E50E8DBE8 | Since: 323
 */
export function accessTunableIntHash(tunableContext, tunableName) {
    if (typeof tunableContext === 'string')
        tunableContext = GetHashKey(tunableContext);
    if (typeof tunableName === 'string')
        tunableName = GetHashKey(tunableName);
    return NetworkAccessTunableIntHash(tunableContext, tunableName);
}
/**
 * No comment provided
 *
 * Hash: 0x3A8B55FDA4C8DDEF | Since: 393
 */
export function accessTunableIntModificationDetectionRegistrationHash(contextHash, nameHash) {
    if (typeof contextHash === 'string')
        contextHash = GetHashKey(contextHash);
    if (typeof nameHash === 'string')
        nameHash = GetHashKey(nameHash);
    return NetworkRegisterTunableIntHash(contextHash, nameHash);
}
/**
 * No comment provided
 *
 * Hash: 0xFAFC23AEE23868DB | Since: 393
 */
export function accessTunableModificationDetectionClear() {
    return NetworkAllocateTunablesRegistrationDataMap();
}
/**
 * No comment provided
 *
 * Hash: 0xC88156EBB786F8D5 | Since: 323
 */
export function actionFollowInvite() {
    return NetworkActionFollowInvite();
}
/**
 * No comment provided
 *
 * Hash: 0x2B1C623823DB0D9D | Since: 1103
 */
export function addClientEntityAngledArea(x1, y1, z1, x2, y2, z2, radius) {
    return Citizen.invokeNative('0x2B1C623823DB0D9D', x1, y1, z1, x2, y2, z2, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x25B99872D588A101 | Since: 323
 */
export function addClientEntityArea(x1, y1, z1, x2, y2, z2) {
    return NetworkAddEntityDisplayedBoundaries(x1, y1, z1, x2, y2, z2);
}
/**
 * To remove, see: NETWORK_REMOVE_ENTITY_AREA
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 *
 * Hash: 0x376C6375BA60293A | Since: 323
 */
export function addEntityAngledArea(x1, y1, z1, x2, y2, z2, width) {
    return NetworkAddEntityAngledArea(x1, y1, z1, x2, y2, z2, width);
}
/**
 * No comment provided
 *
 * Hash: 0x494C8FB299290269 | Since: 323
 */
export function addEntityArea(x1, y1, z1, x2, y2, z2) {
    return NetworkAddEntityArea(x1, y1, z1, x2, y2, z2);
}
/**
 * No comment provided
 *
 * Hash: 0xF2404D68CBC855FA | Since: 323
 */
export function addEntityToSynchronisedScene(entity, netScene, animDict, animName, speed, speedMulitiplier, flag) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkAddEntityToSynchronisedScene(_entity, netScene, animDict, animName, speed, speedMulitiplier, flag);
}
/**
 * ..
 *
 * Hash: 0x236406F60CF216D6 | Since: 323
 */
export function addFollowers() {
    return NetworkAddFollowers(0);
}
/**
 * No comment provided
 *
 * Hash: 0x8E02D73914064223 | Since: 323
 */
export function addFriend(message) {
    return NetworkAddFriend(message);
}
/**
 * No comment provided
 *
 * Hash: 0x7F562DBC212E81F9 | Since: 2545
 */
export function addInvalidObjectModel(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    Citizen.invokeNative('0x7F562DBC212E81F9', modelHash, undefined);
}
/**
 * Similar structure as NETWORK_ADD_ENTITY_TO_SYNCHRONISED_SCENE but it includes this time a hash.
 * In casino_slots it is used one time in a synced scene involving a ped and the slot machine?
 *
 * Hash: 0x45F35C0EDC33B03B | Since: 1734
 */
export function addMapEntityToSynchronisedScene(netScene, modelHash, pos, flags) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    NetworkAddMapEntityToSynchronisedScene(netScene, modelHash, pos.x, pos.y, pos.z, 0, undefined, 0, 0, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x742A637471BCECD9 | Since: 323
 */
export function addPedToSynchronisedScene(ped, netScene, animDict, animnName, speed, speedMultiplier, duration, flag, playbackRate) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    NetworkAddPedToSynchronisedScene(_ped, netScene, animDict, animnName, speed, speedMultiplier, duration, flag, playbackRate, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA5EAFE473E45C442 | Since: 1290
 */
export function addPedToSynchronisedSceneWithIk() {
    NetworkAddPedToSynchronisedSceneWithIk(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCF8BD3B0BD6D42D7 | Since: 323
 */
export function addSynchronisedSceneCamera(netScene, animDict, animName) {
    NetworkAddSynchronisedSceneCamera(netScene, animDict, animName);
}
/**
 * No comment provided
 *
 * Hash: 0x0F1A4B45B7693B95 | Since: 2189
 */
export function allowCloningWhileInTutorial() {
    Citizen.invokeNative('0x0F1A4B45B7693B95', undefined, undefined);
}
/**
 * teamId must be < 3, instanceId must be < 64
 *
 * Hash: 0xFB680D403909DC70 | Since: 323
 */
export function allowGangToJoinTutorialSession(teamId, instanceId) {
    Citizen.invokeNative('0xFB680D403909DC70', teamId, instanceId);
}
/**
 * No comment provided
 *
 * Hash: 0x6B07B9CE4D390375 | Since: 323
 */
export function allowInviteProcessInPlayerSwitch() {
    NetworkBlockKickedPlayers(false);
}
/**
 * No comment provided
 *
 * Hash: 0x267C78C60E806B9A | Since: 323
 */
export function allowRemoteAttachmentModification(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkAllowRemoteAttachmentModification(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x144DA052257AE7D8 | Since: 1103
 */
export function allowRemoteSyncedSceneLocalPlayerRequests() {
    Citizen.invokeNative('0x144DA052257AE7D8', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x15337C7C268A27B2 | Since: 323
 */
export function amIBlockedByGamer() {
    return NetworkAmIBlockedByGamer();
}
/**
 * No comment provided
 *
 * Hash: 0x87F395D957D4353D | Since: 323
 */
export function amIBlockedByPlayer(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkAmIBlockedByPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xDF02A2C93F1F26DA | Since: 323
 */
export function amIMutedByGamer() {
    return NetworkAmIMutedByGamer();
}
/**
 * No comment provided
 *
 * Hash: 0x9D6981DFC91A8604 | Since: 323
 */
export function amIMutedByPlayer(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkAmIMutedByPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x99B72C7ABDE5C910 | Since: 323
 */
export function applyCachedPlayerHeadBlendData(ped, player) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkApplyCachedPlayerHeadBlendData(_ped, _player);
}
/**
 * No comment provided
 *
 * Hash: 0xE66C690248F11150 | Since: 323
 */
export function applyPedScarData(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    NetworkApplyPedScarData(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x521638ADA1BA0D18 | Since: 323
 */
export function applyTransitionParameter() {
    NetworkApplyTransitionParameter(0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xEBEFC2E77084F599 | Since: 323
 */
export function applyTransitionParameterString(_string) {
    NetworkApplyTransitionParameterString(0, _string, false);
}
/**
 * No comment provided
 *
 * Hash: 0xDBD2056652689917 | Since: 323
 */
export function applyVoiceProximityOverride(pos) {
    NetworkApplyVoiceProximityOverride(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x57DBA049E110F217 | Since: 323
 */
export function areHandlesTheSame() {
    return NetworkAreHandlesTheSame();
}
/**
 * No comment provided
 *
 * Hash: 0x9DE986FC9A87C474 | Since: 323
 */
export function arePlayersInSameTutorialSession(player, index) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerEqualToIndex(_player, index);
}
/**
 * No comment provided
 *
 * Hash: 0xBA9775570DB788CF | Since: 323
 */
export function areSocialClubPoliciesCurrent() {
    return NetworkAreSocialClubPoliciesCurrent();
}
/**
 * No comment provided
 *
 * Hash: 0x2615AA2A695930C1 | Since: 323
 */
export function areTransitionDetailsValid() {
    return NetworkAreTransitionDetailsValid(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x478DCBD2A98B705A | Since: 323
 */
export function attachSynchronisedSceneToEntity(netScene, entity, bone) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkAttachSynchronisedSceneToEntity(netScene, _entity, bone);
}
/**
 * No comment provided
 *
 * Hash: 0x95914459A87EBA28 | Since: 323
 */
export function bail() {
    NetworkBail(0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xEAA572036990CD1B | Since: 323
 */
export function bailTransition() {
    NetworkBailTransition(0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x34F9E9049454A7A0 | Since: 323
 */
export function blockInvites(toggle) {
    NetworkBlockInvites(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xCFEB8AF24FC1D0BB | Since: 323
 */
export function blockJoinQueueInvites(toggle) {
    NetworkBlockJoinQueueInvites(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xFEA7A352DDB34D52 | Since: 2545
 */
export function blockProxyMigrationBetweenTutorialSessions() {
    Citizen.invokeNative('0xFEA7A352DDB34D52', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBD0BE0BFC927EAC1 | Since: 323
 */
export function cacheLocalPlayerHeadBlendData() {
    NetworkCacheLocalPlayerHeadBlendData();
}
/**
 * No comment provided
 *
 * Hash: 0xFB8F2A6F3DF08CBE | Since: 323
 */
export function cancelRespawnSearch() {
    NetworkCancelRespawnSearch();
}
/**
 * No comment provided
 *
 * Hash: 0x023782EFC70585EE | Since: 2699
 */
export function cancelTransitionMatchmaking() {
    NetworkBailTransitionQuickmatch();
}
/**
 * 11 - Need to download tunables.
 * 12 - Need to download background script.
 *
 * Returns 1 if the multiplayer is loaded, otherwhise 0.
 *
 * Hash: 0xAF50DA1A3F8B1BA4 | Since: 323
 */
export function canAccessMultiplayer() {
    return NetworkCanAccessMultiplayer();
}
/**
 * No comment provided
 *
 * Hash: 0x580CE4438479CC61 | Since: 323
 */
export function canBail() {
    return NetworkCanBail();
}
/**
 * No comment provided
 *
 * Hash: 0xA150A4F065806B1F | Since: 323
 */
export function canCommunicateWithGamer() {
    return NetworkCanCommunicateWithGamer();
}
/**
 * No comment provided
 *
 * Hash: 0x7E782A910C362C25 | Since: 323
 */
export function canEnterMultiplayer() {
    return NetworkCanEnterMultiplayer();
}
/**
 * No comment provided
 *
 * Hash: 0x135F9B7B7ADD2185 | Since: 323
 */
export function canGamerPlayMultiplayerWithMe() {
    return NetworkCanGamerPlayMultiplayerWithMe();
}
/**
 * No comment provided
 *
 * Hash: 0x07DD29D5E22763F1 | Since: 323
 */
export function canPlayMultiplayerWithGamer() {
    return NetworkCanPlayMultiplayerWithGamer();
}
/**
 * No comment provided
 *
 * Hash: 0x2BF66D2E7414F686 | Since: 323
 */
export function canQueueForPreviousSessionJoin() {
    return Citizen.invokeNative('0x2BF66D2E7414F686');
}
/**
 * No comment provided
 *
 * Hash: 0x421E34C55F125964 | Since: 2612
 */
export function canReceiveLocalInvite() {
    return Citizen.invokeNative('0x421E34C55F125964');
}
/**
 * No comment provided
 *
 * Hash: 0x021ABCBD98EC4320 | Since: 2612
 */
export function canSendLocalInvite() {
    return Citizen.invokeNative('0x021ABCBD98EC4320');
}
/**
 * No comment provided
 *
 * Hash: 0x4EEBC3694E49C572 | Since: 323
 */
export function canSessionEnd() {
    return NetworkCanSessionEnd();
}
/**
 * No comment provided
 *
 * Hash: 0xC927EC229934AF60 | Since: 323
 */
export function canSetWaypoint() {
    return NetworkCanSetWaypoint();
}
/**
 * No comment provided
 *
 * Hash: 0xEEC02C7C0666D990 | Since: 944
 */
export function canTextChatWithGamer() {
    return Citizen.invokeNative('0xEEC02C7C0666D990');
}
/**
 * No comment provided
 *
 * Hash: 0xB57A49545BA53CE7 | Since: 323
 */
export function canViewGamerUserContent() {
    return NetworkCanViewGamerUserContent();
}
/**
 * No comment provided
 *
 * Hash: 0xEEEDA5E6D7080987 | Since: 323
 */
export function changeTransitionSlots() {
    NetworkChangeTransitionSlots(undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x6FA9825D0B5A721B | Since: 3570
 */
export function checkCanAccessAndAlert() {
    return Citizen.invokeNative('0x6FA9825D0B5A721B');
}
/**
 * No comment provided
 *
 * Hash: 0x83F28CE49FBBFFBA | Since: 323
 */
export function checkCommunicationPrivileges() {
    return NetworkCheckCommunicationPrivileges(0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x4AD490AE1536933B | Since: 372
 */
export function checkDataManagerForHandle() {
    return Citizen.invokeNative('0x4AD490AE1536933B', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x44B37CDCAE765AAE | Since: 323
 */
export function checkDataManagerSucceededForHandle() {
    return NetworkCheckDataManagerSucceededForHandle(0);
}
/**
 * No comment provided
 *
 * Hash: 0x78321BEA235FD8CD | Since: 323
 */
export function checkOnlinePrivileges() {
    return Citizen.invokeNative('0x78321BEA235FD8CD', undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x0CF6CC51AA18F0F8 | Since: 1180
 */
export function checkPrivileges() {
    return Citizen.invokeNative('0x0CF6CC51AA18F0F8', undefined, undefined, undefined);
}
/**
 * Returns true if profile setting 901 is set to true and sets it to false.
 *
 * Hash: 0x60EDD13EB3AC1FF3 | Since: 323
 */
export function checkRosLinkWentdownNotNet() {
    return Citizen.invokeNative('0x60EDD13EB3AC1FF3');
}
/**
 * No comment provided
 *
 * Hash: 0x07EAB372C8841D99 | Since: 1011
 */
export function checkTextCommunicationPrivileges() {
    return Citizen.invokeNative('0x07EAB372C8841D99', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x595F028698072DD9 | Since: 323
 */
export function checkUserContentPrivileges() {
    return NetworkCheckUserContentPrivileges(0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB3F64A6A91432477 | Since: 323
 */
export function clanAnyDownloadMembershipPending() {
    return NetworkClanAnyDownloadMembershipPending();
}
/**
 * No comment provided
 *
 * Hash: 0x2B51EDBEFC301339 | Since: 323
 */
export function clanCrewinfoGetCrewranktitle() {
    return Citizen.invokeNative('0x2B51EDBEFC301339', 0, undefined);
}
/**
 * Only documented...
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x729E3401F0430686 | Since: 323
 */
export function clanCrewinfoGetStringValue(animDict, animName) {
    return NetworkClanAnimation(animDict, animName);
}
/**
 * No comment provided
 *
 * Hash: 0xA989044E70010ABE | Since: 323
 */
export function clanDownloadMembership() {
    return NetworkClanDownloadMembership();
}
/**
 * No comment provided
 *
 * Hash: 0x5B9E023DC6EBEDC0 | Since: 323
 */
export function clanDownloadMembershipPending() {
    return NetworkClanDownloadMembershipPending();
}
/**
 * No comment provided
 *
 * Hash: 0x5835D9CD92E83184 | Since: 323
 */
export function clanGetEmblemTxdName() {
    return NetworkClanGetEmblemTxdName();
}
/**
 * No comment provided
 *
 * Hash: 0x1F471B79ACC90BEF | Since: 323
 */
export function clanGetLocalMembershipsCount() {
    return NetworkClanGetLocalMembershipsCount();
}
/**
 * No comment provided
 *
 * Hash: 0xC8BC2011F67B3411 | Since: 323
 */
export function clanGetMembership() {
    return NetworkClanGetMembership(0);
}
/**
 * No comment provided
 *
 * Hash: 0xAAB11F6C4ADBC2C1 | Since: 323
 */
export function clanGetMembershipCount() {
    return NetworkClanGetMembershipCount();
}
/**
 * No comment provided
 *
 * Hash: 0x48DE78AF2C8885B8 | Since: 323
 */
export function clanGetMembershipDesc() {
    return NetworkClanGetMembershipDesc(0);
}
/**
 * No comment provided
 *
 * Hash: 0x48A59CF88D43DF0E | Since: 323
 */
export function clanGetMembershipValid() {
    return NetworkClanGetMembershipValid(undefined);
}
/**
 * bufferSize is 35 in the scripts.
 *
 * Hash: 0xF45352426FF3A4F0 | Since: 323
 */
export function clanGetUiFormattedTag(bufferSize) {
    return NetworkClanGetUiFormattedTag(bufferSize);
}
/**
 * No comment provided
 *
 * Hash: 0xC32EA7A2F6CA7557 | Since: 323
 */
export function clanHasCrewinfoMetadataBeenReceived() {
    return Citizen.invokeNative('0xC32EA7A2F6CA7557');
}
/**
 * No comment provided
 *
 * Hash: 0xA134777FF7F33331 | Since: 323
 */
export function clanIsEmblemReady() {
    return NetworkClanIsEmblemReady(undefined);
}
/**
 * bufferSize is 35 in the scripts.
 *
 * Hash: 0x7543BB439F63792B | Since: 323
 */
export function clanIsRockstarClan(bufferSize) {
    return NetworkClanIsRockstarClan(bufferSize);
}
/**
 * No comment provided
 *
 * Hash: 0x9FAAA4F4FC71F87F | Since: 323
 */
export function clanJoin(clanDesc) {
    return NetworkClanJoin(clanDesc);
}
/**
 * bufferSize is 35 in the scripts.
 *
 * `bufferSize is the elementCount of p0(desc), sizeof(p0) == 280 == p1*8 == 35 * 8, p2(netHandle) is obtained from NETWORK::NETWORK_HANDLE_FROM_PLAYER.  And no, I can't explain why 35 * sizeof(int) == 280 and not 140, but I'll get back to you on that.`
 *
 * the answer is: because p0 an int64_t* / int64_t[35].  and FYI p2 is an int64_t[13]
 *
 * https://pastebin.com/cSZniHak
 *
 * Hash: 0xEEE6EACBE8874FBA | Since: 323
 */
export function clanPlayerGetDesc(bufferSize) {
    return NetworkClanPlayerGetDesc(bufferSize);
}
/**
 * No comment provided
 *
 * Hash: 0xB124B57F571D8F18 | Since: 323
 */
export function clanPlayerIsActive() {
    return NetworkClanPlayerIsActive();
}
/**
 * No comment provided
 *
 * Hash: 0x113E6E3E50E286B0 | Since: 323
 */
export function clanReleaseEmblem() {
    NetworkClanReleaseEmblem(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBB6E6FEE99D866B2 | Since: 323
 */
export function clanRemoteMembershipsAreInCache() {
    return NetworkClanRemoteMembershipsAreInCache();
}
/**
 * No comment provided
 *
 * Hash: 0x13518FF1C6B28938 | Since: 323
 */
export function clanRequestEmblem() {
    return NetworkClanRequestEmblem(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x579CCED0265D4896 | Since: 323
 */
export function clanServiceIsValid() {
    return NetworkClanServiceIsValid();
}
/**
 * No comment provided
 *
 * Hash: 0xD972DF67326F966E | Since: 323
 */
export function clearClockTimeOverride() {
    NetworkClearClockTimeOverride();
}
/**
 * No comment provided
 *
 * Hash: 0x058F43EC59A8631A | Since: 323
 */
export function clearFollowers() {
    NetworkClearFollowers();
}
/**
 * No comment provided
 *
 * Hash: 0x439BFDE3CD0610F6 | Since: 323
 */
export function clearFollowInvite() {
    return NetworkClearFollowInvite();
}
/**
 * No comment provided
 *
 * Hash: 0x6D14CCEE1B40381A | Since: 323
 */
export function clearFoundGamers() {
    NetworkClearFoundGamers();
}
/**
 * No comment provided
 *
 * Hash: 0x86E0660E4F5C956D | Since: 323
 */
export function clearGetGamerStatus() {
    NetworkClearGetGamerStatus();
}
/**
 * No comment provided
 *
 * Hash: 0x1888694923EF4591 | Since: 393
 */
export function clearGroupActivity() {
    NetworkClearGroupActivity();
}
/**
 * No comment provided
 *
 * Hash: 0x03B2F03A53D85E41 | Since: 2545
 */
export function clearInvalidObjectModels() {
    Citizen.invokeNative('0x03B2F03A53D85E41');
}
/**
 * No comment provided
 *
 * Hash: 0x140E6A44870A11CE | Since: 323
 */
export function clearOfflineInvitePending() {
    Citizen.invokeNative('0x140E6A44870A11CE');
}
/**
 * No comment provided
 *
 * Hash: 0x6CE50E47F5543D0C | Since: 573
 */
export function clearQueuedJoinRequest() {
    Citizen.invokeNative('0x6CE50E47F5543D0C');
}
/**
 * No comment provided
 *
 * Hash: 0xFB3272229A82C759 | Since: 323
 */
export function clearTransitionCreatorHandle() {
    NetworkClearTransitionCreatorHandle();
}
/**
 * No comment provided
 *
 * Hash: 0xE036A705F989E049 | Since: 323
 */
export function clearVoiceChannel() {
    NetworkClearVoiceChannel();
}
/**
 * No comment provided
 *
 * Hash: 0xF03755696450470C | Since: 323
 */
export function clearVoiceProximityOverride() {
    NetworkClearVoiceProximityOverride();
}
/**
 * No comment provided
 *
 * Hash: 0x43F4DBA69710E01E | Since: 323
 */
export function closeTransitionMatchmaking() {
    NetworkCloseTransitionMatchmaking();
}
/**
 * No comment provided
 *
 * Hash: 0x1632BE0AC1E62876 | Since: 877
 */
export function concealEntity(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkConcealEntity(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBBDF066252829606 | Since: 323
 */
export function concealPlayer(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkConcealPlayer(_player, toggle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7CD6BC4C2BBDD526 | Since: 323
 */
export function createSynchronisedScene(pos, rot, rotationOrder, useOcclusionPortal, looped, animTime) {
    return NetworkCreateSynchronisedScene(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, rotationOrder, useOcclusionPortal, looped, 0, animTime, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF9B83B77929D8863 | Since: 323
 */
export function didFindGamersSucceed() {
    return NetworkDidFindGamersSucceed();
}
/**
 * No comment provided
 *
 * Hash: 0x5AE17C6B0134B7F1 | Since: 323
 */
export function didGetGamerStatusSucceed() {
    return NetworkDidGetGamerStatusSucceed();
}
/**
 * No comment provided
 *
 * Hash: 0x9DD368BF06983221 | Since: 323
 */
export function disableInvincibleFlashing(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkDisableInvincibleFlashing(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC505036A35AFD01B | Since: 323
 */
export function disableLeaveRemotePedBehind(toggle) {
    NetworkDisableLeaveRemotePedBehind(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x407091CF6037118E | Since: 323
 */
export function disableProximityMigration(netID) {
    NetworkDisableProximityMigration(netID);
}
/**
 * No comment provided
 *
 * Hash: 0x236905C700FDB54D | Since: 2612
 */
export function disableRealtimeMultiplayer() {
    Citizen.invokeNative('0x236905C700FDB54D');
}
/**
 * No comment provided
 *
 * Hash: 0xCA575C391FEA25CC | Since: 323
 */
export function disableVoiceBandwidthRestriction(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xCA575C391FEA25CC', _player);
}
/**
 * Hardcoded to return -1.
 *
 * Hash: 0xD66C9E72B3CC4982 | Since: 323
 */
export function displaynamesFromHandlesStart() {
    return NetworkDisplaynamesFromHandlesStart(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x18A47D074708FD68 | Since: 323
 */
export function doesEntityExistWithNetworkId(netId) {
    return NetworkDoesEntityExistWithNetworkId(netId);
}
/**
 * No comment provided
 *
 * Hash: 0x38CE16C96BD11344 | Since: 323
 */
export function doesNetworkIdExist(netId) {
    return NetworkDoesNetworkIdExist(netId);
}
/**
 * No comment provided
 *
 * Hash: 0x85E5F8B9B898B20A | Since: 323
 */
export function doesTunableExist(tunableContext, tunableName) {
    return NetworkDoesTunableExist(tunableContext, tunableName);
}
/**
 * No comment provided
 *
 * Hash: 0xE4E53E1419D81127 | Since: 323
 */
export function doesTunableExistHash(tunableContext, tunableName) {
    if (typeof tunableContext === 'string')
        tunableContext = GetHashKey(tunableContext);
    if (typeof tunableName === 'string')
        tunableName = GetHashKey(tunableName);
    return NetworkDoesTunableExistHash(tunableContext, tunableName);
}
/**
 * No comment provided
 *
 * Hash: 0x71FB0EBCD4915D56 | Since: 323
 */
export function doTransitionQuickmatch() {
    return NetworkDoTransitionQuickmatch(undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA091A5E44F0072E5 | Since: 323
 */
export function doTransitionQuickmatchAsync() {
    return NetworkDoTransitionQuickmatchAsync(undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9C4AB58491FDC98A | Since: 323
 */
export function doTransitionQuickmatchWithGroup() {
    return NetworkDoTransitionQuickmatchWithGroup(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * p2 is true 3/4 of the occurrences I found.
 * 'players' is the number of players for a session. On PS3/360 it's always 18. On PC it's 32.
 *
 * Hash: 0x3AAD8B2FCA1E289F | Since: 323
 */
export function doTransitionToFreemode(players) {
    return NetworkDoTransitionToFreemode(undefined, false, players, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3E9BB38102A589B0 | Since: 323
 */
export function doTransitionToGame(maxPlayers) {
    return NetworkDoTransitionToGame(false, maxPlayers);
}
/**
 * No comment provided
 *
 * Hash: 0x9E80A5BA8109F974 | Since: 323
 */
export function doTransitionToNewFreemode(players) {
    return NetworkDoTransitionToNewFreemode(undefined, players, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x4665F51EFED00034 | Since: 323
 */
export function doTransitionToNewGame(maxPlayers) {
    return NetworkDoTransitionToNewGame(false, maxPlayers, false);
}
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0xAEDF1BC1C133D6E3 | Since: 323
 */
export function dumpNetIfConfig() {
    Citizen.invokeNative('0xAEDF1BC1C133D6E3');
}
/**
 * No comment provided
 *
 * Hash: 0xE6717E652B8C8D8A | Since: 617
 */
export function enableExtraVehicleOrientationBlendChecks(netId, toggle) {
    Citizen.invokeNative('0xE6717E652B8C8D8A', netId, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5E3AA4CA2B6FB0EE | Since: 323
 */
export function enableVoiceBandwidthRestriction(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x5E3AA4CA2B6FB0EE', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xD0AFAFF5A51D72F7 | Since: 323
 */
export function endTutorialSession() {
    NetworkEndTutorialSession();
}
/**
 * No comment provided
 *
 * Hash: 0xE64A3CA08DFA37A9 | Since: 323
 */
export function entityAreaDoesExist(areaHandle) {
    return NetworkEntityAreaDoesExist(areaHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x4DF7CFFF471A7FB1 | Since: 323
 */
export function entityAreaHaveAllReplied(areaHandle) {
    return Citizen.invokeNative('0x4DF7CFFF471A7FB1', areaHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x4A2D4E8BF4265B0F | Since: 323
 */
export function entityAreaIsOccupied(areaHandle) {
    return NetworkEntityAreaIsOccupied(areaHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x815F18AD865F057F | Since: 463
 */
export function entityGetObjectId(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetEntityNetScriptId(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x95BAF97C82464629 | Since: 1604
 */
export function entityUseHighPrecisionRotation(netId, toggle) {
    Citizen.invokeNative('0x95BAF97C82464629', netId, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x2A5E0621DD815A9A | Since: 463
 */
export function explodeHeli(vehicle, isAudible, isInvisible, netId) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
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
 * Hash: 0x301A42153C9AD707 | Since: 323
 */
export function explodeVehicle(vehicle, isAudible, isInvisible, netId) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return NetworkExplodeVehicle(_vehicle, isAudible, isInvisible, netId);
}
/**
 * state - 0 does 5 fades
 * state - 1 does 6 fades
 *
 * p3: setting to 1 made vehicle fade in slower, probably "slow" as per NETWORK_FADE_OUT_ENTITY
 *
 * Hash: 0x1F4ED342ACEFE62D | Since: 323
 */
export function fadeInEntity(entity, state) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkFadeInEntity(_entity, state, undefined);
}
/**
 * normal - transition like when your coming out of LSC
 * slow - transition like when you walk into a mission
 *
 *
 * Hash: 0xDE564951F95E09ED | Since: 323
 */
export function fadeOutEntity(entity, normal, slow) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkFadeOutEntity(_entity, normal, slow);
}
/**
 * No comment provided
 *
 * Hash: 0xE532D6811B3A4D2A | Since: 323
 */
export function findGamersInCrew(crewId) {
    return NetworkFindGamersInCrew(crewId);
}
/**
 * p0 is always 0. p1 is pointing to a global.
 *
 * Hash: 0xFB1F9381E80FA13F | Since: 323
 */
export function findLargestBunchOfPlayers() {
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
 * Hash: 0xF7B2CFDE5C9F700D | Since: 323
 */
export function findMatchedGamers(attribute, fallbackLimit, lowerLimit, upperLimit) {
    return NetworkFindMatchedGamers(attribute, fallbackLimit, lowerLimit, upperLimit);
}
/**
 * No comment provided
 *
 * Hash: 0x64F62AFB081E260D | Since: 323
 */
export function finishBroadcastingData() {
    NetworkFinishBroadcastingData();
}
/**
 * NETWORK_F[I-O]
 *
 * Hash: 0xB7C7F6AD6424304B | Since: 323
 */
export function forceLocalPlayerScarSync() {
    NetworkUpdatePlayerScars();
}
/**
 * No comment provided
 *
 * Hash: 0xC9B43A33D09CADA7 | Since: 323
 */
export function forceLocalUseOfSyncedSceneCamera(netScene) {
    NetworkForceLocalUseOfSyncedSceneCamera(netScene);
}
/**
 * No comment provided
 *
 * Hash: 0xB071E27958EF4CF0 | Since: 323
 */
export function gamertagFromHandlePending() {
    return NetworkGamertagFromHandlePending();
}
/**
 * No comment provided
 *
 * Hash: 0x9F0C0A981D73FA56 | Since: 323
 */
export function gamertagFromHandleStart() {
    return NetworkGamertagFromHandleStart();
}
/**
 * No comment provided
 *
 * Hash: 0xFD00798DBA7523DD | Since: 323
 */
export function gamertagFromHandleSucceeded() {
    return NetworkGamertagFromHandleSucceeded();
}
/**
 * No comment provided
 *
 * Hash: 0xF2FD55CB574BCC55 | Since: 323
 */
export function gamerHasHeadset() {
    return NetworkGamerHasHeadset();
}
/**
 * No comment provided
 *
 * Hash: 0x73E2B500410DA5A2 | Since: 323
 */
export function getActivityPlayerNum() {
    return NetworkGetActivityPlayerNum(false);
}
/**
 * No comment provided
 *
 * Hash: 0x9614B71F8ADB982B | Since: 323
 */
export function getAgeGroup() {
    return NetworkGetAgeGroup();
}
/**
 * No comment provided
 *
 * Hash: 0x4CACA84440FA26F6 | Since: 323
 */
export function getAssistedDamageOfEntity(player, entity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetDestroyerOfEntity(_player, _entity);
}
/**
 * NETWORK_GET_ASSISTED_DAMAGE_OF_ENTITY that ensures the entity is dead (IS_ENTITY_DEAD)
 *
 * Hash: 0x83660B734994124D | Since: 463
 */
export function getAssistedKillOfEntity(player, entity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x83660B734994124D', _player, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xD414BE129BB81B32 | Since: 323
 */
export function getAverageLatency(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetAverageLatencyForPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x350C23949E43686C | Since: 323
 */
export function getAveragePacketLoss(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetAveragePacketLossForPlayer(_player);
}
/**
 * Same as NETWORK_GET_AVERAGE_LATENCY
 *
 * Hash: 0x0E3A041ED6AC2B45 | Since: 323
 */
export function getAveragePing(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetAverageLatencyForPlayer2(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x7DB53B37A2F211A0 | Since: 323
 */
export function getBoneIdOfFatalHit() {
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
 * Hash: 0x187382F8A3E0A6C3 | Since: 323
 */
export function getContentModifierListId(contentHash) {
    if (typeof contentHash === 'string')
        contentHash = GetHashKey(contentHash);
    return NetworkGetContentModifierListId(contentHash);
}
/**
 * No comment provided
 *
 * Hash: 0x74881E6BCAE2327C | Since: 323
 */
export function getCurrentlySelectedGamerHandleFromInviteMenu() {
    return NetworkGetCurrentlySelectedGamerHandleFromInviteMenu();
}
/**
 * No comment provided
 *
 * Hash: 0xC434133D9BA52777 | Since: 463
 */
export function getDestroyerOfEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0xC434133D9BA52777', _entity);
}
/**
 * No comment provided
 *
 * Hash: 0x7A1ADEEF01740A24 | Since: 323
 */
export function getDestroyerOfNetworkId(netId) {
    return NetworkGetDestroyerOfNetworkId(netId);
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x58CC181719256197 | Since: 323
 */
export function getDisplaynamesFromHandles() {
    return NetworkGetDisplaynamesFromHandles(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCE4E5D9B0A4FF560 | Since: 323
 */
export function getEntityFromNetworkId(netId) {
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
 * Hash: 0x37D5F739FD494675 | Since: 505
 */
export function getEntityFromObjectId() {
    return Citizen.invokeNative('0x37D5F739FD494675', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0991549DE4D64762 | Since: 323
 */
export function getEntityIsLocal(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetEntityIsLocal(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xC7827959479DCC78 | Since: 323
 */
export function getEntityIsNetworked(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetEntityIsNetworked(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x42B2DAA6B596F5F8 | Since: 323
 */
export function getEntityKillerOfPlayer(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetEntityKillerOfPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x9DCFF2AFB68B3476 | Since: 323
 */
export function getFoundGamer() {
    return NetworkGetFoundGamer(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x203F1CFD823B27A4 | Since: 323
 */
export function getFriendCount() {
    return NetworkGetFriendCount();
}
/**
 * No comment provided
 *
 * Hash: 0x4164F227D052E293 | Since: 323
 */
export function getFriendDisplayName(friendIndex) {
    return NetworkGetFriendNameFromIndex(friendIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xE11EBBB2A783FE8B | Since: 323
 */
export function getFriendName(friendIndex) {
    return NetworkGetFriendName(friendIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x426141162EBE5CDB | Since: 323
 */
export function getGamertagFromHandle() {
    return NetworkGetGamertagFromHandle();
}
/**
 * No comment provided
 *
 * Hash: 0x2CC848A861D01493 | Since: 323
 */
export function getGamerStatusFromQueue() {
    return NetworkGetGamerStatusFromQueue();
}
/**
 * No comment provided
 *
 * Hash: 0x02A8BEC6FD9AF660 | Since: 323
 */
export function getGamerStatusResult() {
    return NetworkGetGamerStatusResult(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4C9034162368E206 | Since: 2060
 */
export function getGameMode() {
    return Citizen.invokeNative('0x4C9034162368E206');
}
/**
 * No comment provided
 *
 * Hash: 0x6D03BFBD643B2A02 | Since: 323
 */
export function getGlobalMultiplayerClock() {
    return NetworkGetGlobalMultiplayerClock();
}
/**
 * No comment provided
 *
 * Hash: 0x52C1EADAF7B10302 | Since: 323
 */
export function getHighestReliableResendCount(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
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
 * Hash: 0x1D6A14F1F9A736FC | Since: 323
 */
export function getHostOfScript(scriptName, instance_id, position_hash) {
    return NetworkGetHostOfScript(scriptName, instance_id, position_hash);
}
/**
 * No comment provided
 *
 * Hash: 0xC7B4D79B01FA7A5C | Since: 323
 */
export function getHostOfThisScript() {
    return NetworkGetHostOfThisScript();
}
/**
 * No comment provided
 *
 * Hash: 0xD3DEBE2991FE8098 | Since: 3717
 */
export function getHostOfThread(threadId) {
    return Citizen.invokeNative('0xD3DEBE2991FE8098', threadId);
}
/**
 * No comment provided
 *
 * Hash: 0x8251FB94DC4FDFC8 | Since: 2612
 */
export function getHostPlayerIndex() {
    return Citizen.invokeNative('0x8251FB94DC4FDFC8');
}
/**
 * No comment provided
 *
 * Hash: 0x638A3A81733086DB | Since: 323
 */
export function getInstanceIdOfThisScript() {
    return NetworkGetInstanceIdOfThisScript();
}
/**
 * No comment provided
 *
 * Hash: 0x3855FB5EB2C5E8B2 | Since: 505
 */
export function getInviteReplyStatus() {
    return Citizen.invokeNative('0x3855FB5EB2C5E8B2', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2DA41ED6E1FCD7A5 | Since: 463
 */
export function getKillerOfPlayer(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x2DA41ED6E1FCD7A5', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x64D779659BC37B19 | Since: 393
 */
export function getLastEntityPosReceivedOverNetwork(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(Citizen.invokeNative('0x64D779659BC37B19', _entity));
}
/**
 * Returns the coordinates of another player.
 * Does not work if you enter your own player id as p0 (will return `(0.0, 0.0, 0.0)` in that case).
 *
 * Hash: 0x125E6D638B8605D4 | Since: 393
 */
export function getLastPlayerPosReceivedOverNetwork(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return new Vector3(NetworkGetPlayerCoords(_player));
}
/**
 * Used by NetBlender
 *
 * Hash: 0x33DE49EDF4DDE77A | Since: 1103
 */
export function getLastVelReceivedOverNetwork(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(NetworkGetLastVelocityReceived(_entity));
}
/**
 * No comment provided
 *
 * Hash: 0xE86051786B66CD8E | Since: 323
 */
export function getLocalHandle(gamerHandleSize) {
    return NetworkGetLocalHandle(gamerHandleSize);
}
/**
 * No comment provided
 *
 * Hash: 0x02C40BF885C567B6 | Since: 323
 */
export function getLocalSceneFromNetworkId(netId) {
    return NetworkGetLocalSceneFromNetworkId(netId);
}
/**
 * No comment provided
 *
 * Hash: 0xAFEBB0D5D8F687D2 | Since: 323
 */
export function getMaxFriends() {
    return NetworkGetMaxFriends();
}
/**
 * No comment provided
 *
 * Hash: 0xA6C90FBC38E395EE | Since: 323
 */
export function getMaxNumParticipants() {
    return NetworkGetMaxNumParticipants();
}
/**
 * NETWORK_GET_M[A-U]
 *
 * Hash: 0xADB57E5B663CCA8B | Since: 323
 */
export function getMuteCountForPlayer(p0) {
    const _p0 = p0 instanceof IPlayer ? p0.playerId() : p0;
    return Citizen.invokeNative('0xADB57E5B663CCA8B', _p0);
}
/**
 * No comment provided
 *
 * Hash: 0xA11700682F3AD45C | Since: 323
 */
export function getNetworkIdFromEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetNetworkIdFromEntity(_entity);
}
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0x6FD992C4A1C1B986 | Since: 323
 */
export function getNetStatisticsInfo() {
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
 * Hash: 0x74FB3E29E6D10FA9 | Since: 323
 */
export function getNpUnavailableReason() {
    return Citizen.invokeNative('0x74FB3E29E6D10FA9');
}
/**
 * No comment provided
 *
 * Hash: 0xD38C4A6D047C019D | Since: 323
 */
export function getNumberBodyTrackerHits() {
    return NetworkGetNumBodyTrackers();
}
/**
 * Returns the amount of players connected in the current session. Only works when connected to a session/server.
 *
 * Hash: 0xA4A79DD2D9600654 | Since: 323
 */
export function getNumConnectedPlayers() {
    return NetworkGetNumConnectedPlayers();
}
/**
 * No comment provided
 *
 * Hash: 0xA1B043EE79A916FB | Since: 323
 */
export function getNumFoundGamers() {
    return NetworkGetNumFoundGamers();
}
/**
 * No comment provided
 *
 * Hash: 0x18D0456E86604654 | Since: 323
 */
export function getNumParticipants() {
    return NetworkGetNumParticipants();
}
/**
 * No comment provided
 *
 * Hash: 0xCEFA968912D0F78D | Since: 323
 */
export function getNumPresenceInvites() {
    return NetworkGetNumPresenceInvites();
}
/**
 * No comment provided
 *
 * Hash: 0x3658E8CD94FC121A | Since: 323
 */
export function getNumScriptParticipants(scriptName, instance_id, position_hash) {
    return NetworkGetNumScriptParticipants(scriptName, instance_id, position_hash);
}
/**
 * No comment provided
 *
 * Hash: 0x617F49C2668E6155 | Since: 757
 */
export function getNumTransitionNonAsyncGamers() {
    return Citizen.invokeNative('0x617F49C2668E6155');
}
/**
 * No comment provided
 *
 * Hash: 0xFF8FCF9FFC458A1C | Since: 323
 */
export function getNumUnackedReliables(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetNumUnackedForPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x1B84DF6AF2A46938 | Since: 323
 */
export function getParticipantIndex(index) {
    return NetworkGetParticipantIndex(index);
}
/**
 * No comment provided
 *
 * Hash: 0x120364DE2845DAF8 | Since: 323
 */
export function getPlatformPartyMembers(dataSize) {
    return NetworkGetPlatformPartyMembers(dataSize);
}
/**
 * No comment provided
 *
 * Hash: 0x01ABCE5E7CBDA196 | Since: 323
 */
export function getPlatformPartyMemberCount() {
    return NetworkGetPlatformPartyUnk();
}
/**
 * No comment provided
 *
 * Hash: 0xDB663CC9FF3407A9 | Since: 1734
 */
export function getPlayerAccountId(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xDB663CC9FF3407A9', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xCE5F689CF5A0A49D | Since: 323
 */
export function getPlayerFromGamerHandle() {
    return NetworkGetPlayerFromGamerHandle();
}
/**
 * No comment provided
 *
 * Hash: 0x24FB80D107371267 | Since: 323
 */
export function getPlayerIndex(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetPlayerIndex(_player);
}
/**
 * Returns the Player associated to a given Ped when in an online session.
 *
 * Hash: 0x6C0E2E0125610278 | Since: 323
 */
export function getPlayerIndexFromPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return NetworkGetPlayerIndexFromPed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x21A1684A25C2867F | Since: 323
 */
export function getPlayerLoudness(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetPlayerLoudness(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x82377B65E943F72D | Since: 323
 */
export function getPlayerOwnsWaypoint(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetPlayerOwnsWaypoint(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x3B39236746714134 | Since: 323
 */
export function getPlayerTutorialSessionInstance(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetPlayerTutorialSessionInstance(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x257ED0FADF750BCF | Since: 2372
 */
export function getPositionHashOfThisScript() {
    return NetworkGetPositionHashOfThisScript();
}
/**
 * No comment provided
 *
 * Hash: 0xAA5FAFCD2C5F5E47 | Since: 1103
 */
export function getPredictedVelocity(entity, maxSpeedToPredict) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(Citizen.invokeNative('0xAA5FAFCD2C5F5E47', _entity, maxSpeedToPredict));
}
/**
 * No comment provided
 *
 * Hash: 0x24409FC4C55CB22D | Since: 323
 */
export function getPresenceInviteContentId() {
    return NetworkGetPresenceInviteContentId(0);
}
/**
 * No comment provided
 *
 * Hash: 0x3DBF2DF0AEB7D289 | Since: 323
 */
export function getPresenceInviteFromAdmin() {
    return NetworkGetPresenceInviteFromAdmin(0);
}
/**
 * No comment provided
 *
 * Hash: 0x38D5B0FEBB086F75 | Since: 323
 */
export function getPresenceInviteHandle() {
    return NetworkGetPresenceInviteHandle(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDFF09646E12EC386 | Since: 323
 */
export function getPresenceInviteId() {
    return NetworkGetPresenceInviteId(0);
}
/**
 * No comment provided
 *
 * Hash: 0x742B58F723233ED9 | Since: 323
 */
export function getPresenceInviteIndexById() {
    return Citizen.invokeNative('0x742B58F723233ED9', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4962CC4AA2F345B7 | Since: 323
 */
export function getPresenceInviteInviter() {
    return NetworkGetPresenceInviteInviter(0);
}
/**
 * No comment provided
 *
 * Hash: 0x8806CEBFABD3CE05 | Since: 323
 */
export function getPresenceInviteIsTournament() {
    return NetworkGetPresenceInviteIsTournament(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x728C4CC7920CD102 | Since: 323
 */
export function getPresenceInvitePlaylistCurrent() {
    return NetworkGetPresenceInvitePlaylistCurrent(0);
}
/**
 * No comment provided
 *
 * Hash: 0xD39B3FFF8FFDD5BF | Since: 323
 */
export function getPresenceInvitePlaylistLength() {
    return NetworkGetPresenceInvitePlaylistLength(0);
}
/**
 * No comment provided
 *
 * Hash: 0x26E1CD96B0903D60 | Since: 323
 */
export function getPresenceInviteSessionId() {
    return NetworkGetPresenceInviteSessionId(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x042E4B70B93E6054 | Since: 323
 */
export function getPrimaryClanDataCancel() {
    NetworkGetPrimaryClanDataCancel();
}
/**
 * No comment provided
 *
 * Hash: 0x9AA46BADAD0E27ED | Since: 323
 */
export function getPrimaryClanDataClear() {
    return NetworkGetPrimaryClanDataClear();
}
/**
 * No comment provided
 *
 * Hash: 0xC080FF658B2E41DA | Since: 323
 */
export function getPrimaryClanDataNew() {
    return NetworkGetPrimaryClanDataNew();
}
/**
 * No comment provided
 *
 * Hash: 0xB5074DB804E28CE7 | Since: 323
 */
export function getPrimaryClanDataPending() {
    return NetworkGetPrimaryClanDataPending();
}
/**
 * No comment provided
 *
 * Hash: 0xCE86D8191B762107 | Since: 323
 */
export function getPrimaryClanDataStart() {
    return NetworkGetPrimaryClanDataStart(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5B4F04F19376A0BA | Since: 323
 */
export function getPrimaryClanDataSuccess() {
    return NetworkGetPrimaryClanDataSuccess();
}
/**
 * No comment provided
 *
 * Hash: 0x599E4FA1F87EB5FF | Since: 323
 */
export function getRandomInt() {
    return NetworkGetRandomInt();
}
/**
 * Same as GET_RANDOM_INT_IN_RANGE
 *
 * Hash: 0xE30CF56F1EFA5F43 | Since: 323
 */
export function getRandomIntRanged(rangeStart, rangeEnd) {
    return NetworkGetRandomIntRanged(rangeStart, rangeEnd);
}
/**
 * Based on scripts such as in freemode.c how they call their vars vVar and fVar the 2nd and 3rd param it a Vector3 and Float, but the first is based on get_random_int_in_range..
 *
 * Hash: 0x371EA43692861CF1 | Since: 323
 */
export function getRespawnResult(randomInt) {
    return NetworkGetRespawnResult(randomInt);
}
/**
 * No comment provided
 *
 * Hash: 0x6C34F1208B8923FD | Since: 323
 */
export function getRespawnResultFlags() {
    return NetworkGetRespawnResultFlags(0);
}
/**
 * No comment provided
 *
 * Hash: 0x57D158647A6BFABF | Since: 323
 */
export function getScriptStatus() {
    return NetworkGetScriptStatus();
}
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0x2555CF7DA5473794 | Since: 323
 */
export function getSignallingInfo() {
    return Citizen.invokeNative('0x2555CF7DA5473794');
}
/**
 * No comment provided
 *
 * Hash: 0x84F0F13120B4E098 | Since: 323
 */
export function getTalkerProximity() {
    return NetworkGetTalkerProximity();
}
/**
 * No comment provided
 *
 * Hash: 0x2910669969E9535E | Since: 323
 */
export function getThisScriptIsNetworkScript() {
    return NetworkGetThisScriptIsNetworkScript();
}
/**
 * No comment provided
 *
 * Hash: 0x5ED0356A0CE3A34F | Since: 323
 */
export function getTimeoutTime() {
    return NetworkGetTimeoutTime();
}
/**
 * No comment provided
 *
 * Hash: 0xCF61D4B4702EE9EB | Since: 323
 */
export function getTotalNumPlayers() {
    return NetworkGetTotalNumPlayers();
}
/**
 * No comment provided
 *
 * Hash: 0x65042B9774C4435E | Since: 323
 */
export function getTransitionHost() {
    return NetworkGetTransitionHost();
}
/**
 * Returns count.
 *
 * Hash: 0x73B000F7FBC55829 | Since: 323
 */
export function getTransitionMembers(dataCount) {
    return NetworkGetTransitionMembers(dataCount);
}
/**
 * Actually returns the version (TUNABLE_VERSION)
 *
 * Hash: 0x10BD227A753B0D84 | Since: 323
 */
export function getTunableCloudCrc() {
    return NetworkGetTunableCloudCrc();
}
/**
 * No comment provided
 *
 * Hash: 0x3765C3A3E8192E10 | Since: 323
 */
export function getUnreliableResendCount(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetUnreliableResendCountForPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xD45CB817D7E177D2 | Since: 323
 */
export function handleFromFriend(friendIndex, gamerHandleSize) {
    return NetworkHandleFromFriend(friendIndex, gamerHandleSize);
}
/**
 * No comment provided
 *
 * Hash: 0xA0FD21BED61E5C4C | Since: 323
 */
export function handleFromMemberId(memberId, gamerHandleSize) {
    return NetworkHandleFromMemberId(memberId, gamerHandleSize);
}
/**
 * No comment provided
 *
 * Hash: 0x388EB2B86C73B6B3 | Since: 323
 */
export function handleFromPlayer(player, gamerHandleSize) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkHandleFromPlayer(_player, gamerHandleSize);
}
/**
 * No comment provided
 *
 * Hash: 0xDCD51DD8F87AEC5C | Since: 323
 */
export function handleFromUserId(userId, gamerHandleSize) {
    return NetworkHandleFromUserId(userId, gamerHandleSize);
}
/**
 * No comment provided
 *
 * Hash: 0x58575AC3CF2CA8EC | Since: 323
 */
export function hashFromGamerHandle() {
    return NetworkHashFromGamerHandle();
}
/**
 * No comment provided
 *
 * Hash: 0xBC1D768F2F5D6C05 | Since: 323
 */
export function hashFromPlayerHandle(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkHashFromPlayerHandle(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x1353F87E89946207 | Since: 323
 */
export function hasAgeRestrictions() {
    return NetworkHasAgeRestrictedProfile();
}
/**
 * No comment provided
 *
 * Hash: 0x26F07DD83A5F7F98 | Since: 323
 */
export function hasAutomuteOverride() {
    return Citizen.invokeNative('0x26F07DD83A5F7F98');
}
/**
 * No comment provided
 *
 * Hash: 0x2E0BF682CC778D49 | Since: 323
 */
export function hasBoneBeenHitByKiller(boneIndex) {
    return Citizen.invokeNative('0x2E0BF682CC778D49', boneIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x237D5336A9A54108 | Since: 323
 */
export function hasCachedPlayerHeadBlendData(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkHasCachedPlayerHeadBlendData(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xC42DD763159F3461 | Since: 323
 */
export function hasConfirmedInvite() {
    return Citizen.invokeNative('0xC42DD763159F3461');
}
/**
 * No comment provided
 *
 * Hash: 0xCB3C68ADB06195DF | Since: 323
 */
export function hasControlOfDoor(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return NetworkHasControlOfDoor(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x01BF60A500E28887 | Since: 323
 */
export function hasControlOfEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkHasControlOfEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x4D36070FE0215186 | Since: 323
 */
export function hasControlOfNetworkId(netId) {
    return NetworkHasControlOfNetworkId(netId);
}
/**
 * No comment provided
 *
 * Hash: 0x5BC9495F0B3B6FA6 | Since: 323
 */
export function hasControlOfPickup(pickup) {
    return NetworkHasControlOfPickup(pickup);
}
/**
 * No comment provided
 *
 * Hash: 0xB07D3185E11657A5 | Since: 323
 */
export function hasEntityBeenRegisteredWithThisThread(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkHasEntityBeenRegisteredWithThisThread(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x76D9B976C4C09FDE | Since: 323
 */
export function hasFollowInvite() {
    return NetworkHasFollowInvite();
}
/**
 * No comment provided
 *
 * Hash: 0xE870F9F1F7B4F1FA | Since: 323
 */
export function hasHeadset() {
    return NetworkHasHeadset();
}
/**
 * No comment provided
 *
 * Hash: 0x4D86CD31E8976ECE | Since: 323
 */
export function hasInvitedGamer() {
    return NetworkHasInvitedGamer();
}
/**
 * No comment provided
 *
 * Hash: 0x7284A47B3540E6CF | Since: 323
 */
export function hasInvitedGamerToTransition() {
    return NetworkHasInvitedGamerToTransition();
}
/**
 * No comment provided
 *
 * Hash: 0x71DC455F5CD1C2B1 | Since: 505
 */
export function hasMadeInviteDecision() {
    return NetworkHasInviteBeenAcked();
}
/**
 * No comment provided
 *
 * Hash: 0xAC8C7B9B88C4A668 | Since: 323
 */
export function hasPendingInvite() {
    return NetworkHasPendingInvite();
}
/**
 * No comment provided
 *
 * Hash: 0x9AC9CCBFA8C29795 | Since: 323
 */
export function hasPlayerStartedTransition(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkHasPlayerStartedTransition(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x5D10B3795F3FC886 | Since: 323
 */
export function hasReceivedHostBroadcastData() {
    return NetworkHasReceivedHostBroadcastData();
}
/**
 * index is always 18 in scripts
 *
 * Hash: 0xA699957E60D80214 | Since: 323
 */
export function hasRosPrivilege(index) {
    return NetworkHasRosPrivilege(index);
}
/**
 * No comment provided
 *
 * Hash: 0xC22912B1D85F26B1 | Since: 323
 */
export function hasRosPrivilegeEndDate(privilege) {
    return NetworkHasRosPrivilegeEndDate(privilege);
}
/**
 * No comment provided
 *
 * Hash: 0x593570C289A77688 | Since: 323
 */
export function hasRosPrivilegePlayedLastGen() {
    return NetworkGetRosPrivilege24();
}
/**
 * No comment provided
 *
 * Hash: 0x91B87C55093DE351 | Since: 323
 */
export function hasRosPrivilegeSpecialEditionContent() {
    return NetworkGetRosPrivilege25();
}
/**
 * No comment provided
 *
 * Hash: 0xAB286B2192A71E32 | Since: 3717
 */
export function hasScMembership() {
    return Citizen.invokeNative('0xAB286B2192A71E32');
}
/**
 * No comment provided
 *
 * Hash: 0x67A5589628E0CFF6 | Since: 323
 */
export function hasSocialClubAccount() {
    return NetworkHasSocialClubAccount();
}
/**
 * No comment provided
 *
 * Hash: 0x76BF03FADBF154F5 | Since: 323
 */
export function hasSocialNetworkingSharingPriv() {
    return NetworkHasSocialNetworkingSharingPriv();
}
/**
 * No comment provided
 *
 * Hash: 0x3F9990BF5F22759C | Since: 323
 */
export function hasTransitionInviteBeenAcked() {
    return NetworkHasTransitionInviteBeenAcked();
}
/**
 * Returns whether the signed-in user has valid Rockstar Online Services (ROS) credentials.
 *
 * Hash: 0x85443FF4C328F53B | Since: 323
 */
export function hasValidRosCredentials() {
    return NetworkHasValidRosCredentials();
}
/**
 * No comment provided
 *
 * Hash: 0xCCA4318E1AB03F1F | Since: 323
 */
export function hasViewGamerUserContentResult() {
    return NetworkHasViewGamerUserContentResult();
}
/**
 * No comment provided
 *
 * Hash: 0xAEEF48CDF5B6CE7C | Since: 323
 */
export function haveCommunicationPrivileges(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkHaveCommunicationPrivileges(0, _player);
}
/**
 * No comment provided
 *
 * Hash: 0x25CB5A9F37BFD063 | Since: 323
 */
export function haveOnlinePrivileges() {
    return NetworkHaveOnlinePrivileges();
}
/**
 * No comment provided
 *
 * Hash: 0x5EA784D197556507 | Since: 323
 */
export function havePlatformSubscription() {
    return NetworkHaveOnlinePrivilege2();
}
/**
 * No comment provided
 *
 * Hash: 0x8020A73847E0CA7D | Since: 323
 */
export function haveRosBannedPriv() {
    return NetworkHaveRosBannedPriv();
}
/**
 * No comment provided
 *
 * Hash: 0xA0AD7E2AF5349F61 | Since: 323
 */
export function haveRosCreateTicketPriv() {
    return NetworkHaveRosCreateTicketPriv();
}
/**
 * No comment provided
 *
 * Hash: 0x422D396F80A96547 | Since: 323
 */
export function haveRosLeaderboardWritePriv() {
    return NetworkHaveRosLeaderboardWritePriv();
}
/**
 * No comment provided
 *
 * Hash: 0x5F91D5D0B36AA310 | Since: 323
 */
export function haveRosMultiplayerPriv() {
    return NetworkHaveRosMultiplayerPriv();
}
/**
 * No comment provided
 *
 * Hash: 0x606E4D3E3CCCF3EB | Since: 323
 */
export function haveRosSocialClubPriv() {
    return NetworkHaveRosSocialClubPriv();
}
/**
 * No comment provided
 *
 * Hash: 0x66B59CFFD78467AF | Since: 323
 */
export function haveScsPrivateMsgPriv() {
    return NetworkGetRosPrivilege9();
}
/**
 * No comment provided
 *
 * Hash: 0x72D918C99BCACC54 | Since: 323
 */
export function haveUserContentPrivileges() {
    return NetworkHaveUserContentPrivileges(0);
}
/**
 * No comment provided
 *
 * Hash: 0xFAC18E7356BD3210 | Since: 1180
 */
export function hideProjectileInCutscene() {
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
 * Hash: 0xA60BB5CE242BB254 | Since: 323
 */
export function hostTransition() {
    return NetworkHostTransition(0, 0, 0, 0, undefined, false, false, 0, undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4C2A9FDC22377075 | Since: 372
 */
export function ignoreRemoteWaypoints() {
    Citizen.invokeNative('0x4C2A9FDC22377075');
}
/**
 * No comment provided
 *
 * Hash: 0x9D80CD1D0E6327DE | Since: 323
 */
export function inviteGamers() {
    return NetworkInviteGamers(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4A595C32F77DFF76 | Since: 323
 */
export function inviteGamersToTransition() {
    return NetworkInviteGamersToTransition(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x05095437424397FA | Since: 323
 */
export function isActivitySession() {
    return NetworkIsActivitySession();
}
/**
 * No comment provided
 *
 * Hash: 0x12103B9E0C9F92FB | Since: 323
 */
export function isActivitySpectator() {
    return NetworkIsActivitySpectator();
}
/**
 * No comment provided
 *
 * Hash: 0x2763BBAA72A7BCB9 | Since: 323
 */
export function isActivitySpectatorFromHandle() {
    return NetworkIsActivitySpectatorFromHandle();
}
/**
 * No comment provided
 *
 * Hash: 0x6EA101606F6E4D81 | Since: 323
 */
export function isAddingFriend() {
    return NetworkIsAddingFriend();
}
/**
 * No comment provided
 *
 * Hash: 0x2E4C123D1C8A710E | Since: 505
 */
export function isAnyPlayerNear() {
    return Citizen.invokeNative('0x2E4C123D1C8A710E', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEFFB25453D8600F9 | Since: 323
 */
export function isCableConnected() {
    return NetworkIsCableConnected();
}
/**
 * This would be nice to see if someone is in party chat, but 2 sad notes.
 * 1) It only becomes true if said person is speaking in that party at the time.
 * 2) It will never, become true unless you are in that party with said person.
 *
 * Hash: 0x8DE9945BCC9AEC52 | Since: 323
 */
export function isChattingInPlatformParty() {
    return NetworkIsChattingInPlatformParty();
}
/**
 * No comment provided
 *
 * Hash: 0xD7C95D322FF57522 | Since: 323
 */
export function isClockTimeOverridden() {
    return NetworkIsClockTimeOverridden();
}
/**
 * No comment provided
 *
 * Hash: 0x9A4CF4F48AD77302 | Since: 323
 */
export function isCloudAvailable() {
    return NetworkIsCloudAvailable();
}
/**
 * No comment provided
 *
 * Hash: 0x8132C0EB8B2B3293 | Since: 323
 */
export function isCloudBackgroundScriptRequestPending() {
    return NetworkIsCloudBackgroundScriptRequestPending();
}
/**
 * No comment provided
 *
 * Hash: 0x16D3D49902F697BB | Since: 323
 */
export function isConnectedViaRelay(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsConnectionEndpointRelayServer(_player);
}
/**
 * This function is hard-coded to always return 1.
 *
 * Hash: 0x7808619F31FF22DB | Since: 323
 */
export function isConnetedToNpPresence() {
    return Citizen.invokeNative('0x7808619F31FF22DB');
}
/**
 * No comment provided
 *
 * Hash: 0xC01E93FAC20C3346 | Since: 323
 */
export function isDoorNetworked(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return NetworkIsDoorNetworked(doorHash);
}
/**
 * Note: This only works for vehicles, which appears to be a bug (since the setter _does_ work for every entity type and the name is 99% correct).
 *
 * Hash: 0x71302EC70689052A | Since: 877
 */
export function isEntityConcealed(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkIsEntityConcealed(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x422F32CC7E56ABAD | Since: 323
 */
export function isEntityFading(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkIsEntityFading(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xDDDF64C91BFCF0AA | Since: 323
 */
export function isFindingGamers() {
    return NetworkIsFindingGamers();
}
/**
 * No comment provided
 *
 * Hash: 0x1A24A179F9B31654 | Since: 323
 */
export function isFriend() {
    return NetworkIsFriend();
}
/**
 * No comment provided
 *
 * Hash: 0x87EB7A3FFCB314DB | Since: 323
 */
export function isFriendHandleOnline() {
    return NetworkIsFriendHandleOnline();
}
/**
 * No comment provided
 *
 * Hash: 0xBAD8F2A42B844821 | Since: 323
 */
export function isFriendIndexOnline(friendIndex) {
    return NetworkIsFriendIndexOnline(friendIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x57005C18827F3A28 | Since: 323
 */
export function isFriendInMultiplayer(friendName) {
    return NetworkIsFriendInMultiplayer(friendName);
}
/**
 * In scripts R* calls 'NETWORK_GET_FRIEND_NAME' in this param.
 *
 * Hash: 0x2EA9A3BEDF3F17B8 | Since: 323
 */
export function isFriendInSameTitle(friendName) {
    return NetworkIsFriendInSameTitle(friendName);
}
/**
 * No comment provided
 *
 * Hash: 0x425A44533437B64D | Since: 323
 */
export function isFriendOnline(name) {
    return NetworkIsFriendOnline(name);
}
/**
 * No comment provided
 *
 * Hash: 0xE944C4F5AF1B5883 | Since: 323
 */
export function isGamerBlockedByMe() {
    return NetworkIsGamerBlockedByMe();
}
/**
 * No comment provided
 *
 * Hash: 0x0F10B05DDF8D16E9 | Since: 323
 */
export function isGamerInMySession() {
    return NetworkIsGamerInMySession();
}
/**
 * No comment provided
 *
 * Hash: 0xCE60DE011B6C7978 | Since: 323
 */
export function isGamerMutedByMe() {
    return NetworkIsGamerMutedByMe();
}
/**
 * No comment provided
 *
 * Hash: 0x71C33B22606CD88A | Since: 323
 */
export function isGamerTalking() {
    return NetworkIsGamerTalking();
}
/**
 * No comment provided
 *
 * Hash: 0x10FAB35428CCC9D7 | Since: 323
 */
export function isGameInProgress() {
    return NetworkIsGameInProgress();
}
/**
 * No comment provided
 *
 * Hash: 0x94A8394D150B013A | Since: 323
 */
export function isGettingGamerStatus() {
    return NetworkIsGettingGamerStatus();
}
/**
 * No comment provided
 *
 * Hash: 0x6F79B93B0A8E4133 | Since: 323
 */
export function isHandleValid(gamerHandleSize) {
    return NetworkIsHandleValid(gamerHandleSize);
}
/**
 * If you are host, returns true else returns false.
 *
 * Hash: 0x8DB296B814EDDA07 | Since: 323
 */
export function isHost() {
    return NetworkIsHost();
}
/**
 * No comment provided
 *
 * Hash: 0x83CD99A1E6061AB5 | Since: 323
 */
export function isHostOfThisScript() {
    return NetworkIsHostOfThisScript();
}
/**
 * No comment provided
 *
 * Hash: 0x7E58745504313A2E | Since: 323
 */
export function isInactiveProfile() {
    return NetworkIsInactiveProfile();
}
/**
 * No comment provided
 *
 * Hash: 0x6CC27C9FA2040220 | Since: 323
 */
export function isInMpCutscene() {
    return NetworkIsInMpCutscene();
}
/**
 * Hardcoded to return false.
 *
 * Hash: 0x2FC5650B0271CB57 | Since: 323
 */
export function isInPlatformParty() {
    return NetworkIsInPlatformParty();
}
/**
 * Hardcoded to return false.
 *
 * Hash: 0xFD8B834A8BA05048 | Since: 323
 */
export function isInPlatformPartyChat() {
    return NetworkIsInPlatformPartyChat();
}
/**
 * No comment provided
 *
 * Hash: 0xCA97246103B63917 | Since: 323
 */
export function isInSession() {
    return NetworkIsInSession();
}
/**
 * No comment provided
 *
 * Hash: 0x048746E388762E11 | Since: 323
 */
export function isInSpectatorMode() {
    return NetworkIsInSpectatorMode();
}
/**
 * No comment provided
 *
 * Hash: 0x68049AEFF83D8F0A | Since: 323
 */
export function isInTransition() {
    return NetworkIsInTransition();
}
/**
 * No comment provided
 *
 * Hash: 0xADA24309FE08DACF | Since: 323
 */
export function isInTutorialSession() {
    return NetworkIsInTutorialSession();
}
/**
 * No comment provided
 *
 * Hash: 0x8A8694B48715B000 | Since: 323
 */
export function isLocalPlayerInvincible() {
    return NetworkIsLocalPlayerInvincible();
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0xA0FA4EC6A05DA44E | Since: 323
 */
export function isLoggedInToPsn() {
    return Citizen.invokeNative('0xA0FA4EC6A05DA44E');
}
/**
 * No comment provided
 *
 * Hash: 0x9747292807126EDA | Since: 323
 */
export function isMultiplayerDisabled() {
    return NetworkIsMultiplayerDisabled();
}
/**
 * Returns true if the specified network id is controlled by someone else.
 *
 * Hash: 0x7242F8B741CE1086 | Since: 678
 */
export function isNetworkIdRemotelyControlled(netId) {
    return NetworkIsNetworkIdAClone(netId);
}
/**
 * This function is hard-coded to always return 1.
 *
 * Hash: 0xBD545D44CCE70597 | Since: 323
 */
export function isNpAvailable() {
    return Citizen.invokeNative('0xBD545D44CCE70597');
}
/**
 * This function is hard-coded to always return 1.
 *
 * Hash: 0xEBCAB9E5048434F4 | Since: 323
 */
export function isNpPending() {
    return Citizen.invokeNative('0xEBCAB9E5048434F4');
}
/**
 * No comment provided
 *
 * Hash: 0x74698374C45701D2 | Since: 323
 */
export function isOfflineInvitePending() {
    return NetworkIsOfflineInvitePending();
}
/**
 * No comment provided
 *
 * Hash: 0x6FF8FF40B6357D45 | Since: 323
 */
export function isParticipantActive() {
    return NetworkIsParticipantActive(0);
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x0BE73DA6984A6E33 | Since: 323
 */
export function isPendingFriend() {
    return NetworkIsPendingFriend(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA8ACB6459542A8C8 | Since: 323
 */
export function isPlatformSubscriptionCheckPending() {
    return Citizen.invokeNative('0xA8ACB6459542A8C8');
}
/**
 * No comment provided
 *
 * Hash: 0xB8DFD30D6973E135 | Since: 323
 */
export function isPlayerActive(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerActive(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x3CA58F6CB7CBD784 | Since: 323
 */
export function isPlayerAParticipant(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerAParticipant(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x1AD5B71586B94820 | Since: 323
 */
export function isPlayerAParticipantOnScript(player, script, instance_id) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerAParticipantOnScript(_player, script, instance_id);
}
/**
 * No comment provided
 *
 * Hash: 0x57AF1F8E27483721 | Since: 323
 */
export function isPlayerBlockedByMe(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerBlockedByMe(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x919B3C98ED8292F9 | Since: 323
 */
export function isPlayerConcealed(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerConcealed(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x93DC1BE4E1ABE9D1 | Since: 323
 */
export function isPlayerConnected(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerConnected(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x631DC5DFF4B110E3 | Since: 323
 */
export function isPlayerFading(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerFading(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x63F9EE203C3619F2 | Since: 323
 */
export function isPlayerInMpCutscene(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerInMpCutscene(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x8C71288AE68EDE39 | Since: 323
 */
export function isPlayerMutedByMe(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerMutedByMe(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xAD4326FCA30D62F8 | Since: 2802
 */
export function isPlayerOnBlocklist() {
    return Citizen.invokeNative('0xAD4326FCA30D62F8');
}
/**
 * returns true if someone is screaming or talking in a microphone
 *
 * Hash: 0x031E11F3D447647E | Since: 323
 */
export function isPlayerTalking(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerTalking(_player);
}
/**
 * Hardcoded to return false.
 *
 * Hash: 0x64E5C4CC82847B73 | Since: 1734
 */
export function isPrivilegeCheckInProgress() {
    return Citizen.invokeNative('0x64E5C4CC82847B73');
}
/**
 * No comment provided
 *
 * Hash: 0xC0D2AF00BCC234CA | Since: 323
 */
export function isPushToTalkActive() {
    return NetworkIsLocalTalking();
}
/**
 * No comment provided
 *
 * Hash: 0x14922ED3E38761F0 | Since: 323
 */
export function isQueuingForSessionJoin() {
    return Citizen.invokeNative('0x14922ED3E38761F0');
}
/**
 * No comment provided
 *
 * Hash: 0x8D11E61A4ABF49CC | Since: 323
 */
export function isRefreshingRosCredentials() {
    return NetworkIsPsnAvailable();
}
/**
 * No comment provided
 *
 * Hash: 0x9D40DF90FAD26098 | Since: 323
 */
export function isScriptActive(scriptName, instance_id, position_hash) {
    return NetworkIsScriptActive(scriptName, instance_id, false, position_hash);
}
/**
 * No comment provided
 *
 * Hash: 0xDA7DE67F5FE5EE13 | Since: 2245
 */
export function isScriptActiveByHash(scriptHash) {
    if (typeof scriptHash === 'string')
        scriptHash = GetHashKey(scriptHash);
    return NetworkIsScriptActiveByHash(scriptHash, 0, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD83C2B94E7508980 | Since: 323
 */
export function isSessionActive() {
    return NetworkIsSessionActive();
}
/**
 * No comment provided
 *
 * Hash: 0xF4435D66A8E2905E | Since: 323
 */
export function isSessionBusy() {
    return NetworkIsSessionBusy();
}
/**
 * This checks if player is playing on gta online or not.
 * Please add an if and block your mod if this is "true".
 *
 * Hash: 0x9DE624D2FC4B603F | Since: 323
 */
export function isSessionStarted() {
    return NetworkIsSessionStarted();
}
/**
 * No comment provided
 *
 * Hash: 0x7788DFE15016A182 | Since: 2612
 */
export function isShowingSystemUiOrRecentlyRequestedUpsell() {
    return Citizen.invokeNative('0x7788DFE15016A182');
}
/**
 * Returns whether the player is signed into Social Club.
 *
 * Hash: 0x054354A99211EB96 | Since: 323
 */
export function isSignedIn() {
    return NetworkIsSignedIn();
}
/**
 * Returns whether the game is not in offline mode.
 *
 * seemed not to work for some ppl
 *
 * Hash: 0x1077788E268557C2 | Since: 323
 */
export function isSignedOnline() {
    return NetworkIsSignedOnline();
}
/**
 * No comment provided
 *
 * Hash: 0x560B423D73015E77 | Since: 1604
 */
export function isThreadANetworkScript(threadId) {
    return Citizen.invokeNative('0x560B423D73015E77', threadId);
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x6FB7BB3607D27FA2 | Since: 323
 */
export function isTitleUpdateRequired() {
    return Citizen.invokeNative('0x6FB7BB3607D27FA2');
}
/**
 * No comment provided
 *
 * Hash: 0x520F3282A53D26B7 | Since: 323
 */
export function isTransitionBusy() {
    return NetworkIsTransitionBusy();
}
/**
 * No comment provided
 *
 * Hash: 0x0DBD5D7E3C5BEC3B | Since: 323
 */
export function isTransitionClosedCrew() {
    return NetworkIsTransitionClosedCrew();
}
/**
 * No comment provided
 *
 * Hash: 0x6512765E3BE78C50 | Since: 323
 */
export function isTransitionClosedFriends() {
    return NetworkIsTransitionClosedFriends();
}
/**
 * No comment provided
 *
 * Hash: 0x0B824797C9BF2159 | Since: 323
 */
export function isTransitionHost() {
    return NetworkIsTransitionHost();
}
/**
 * No comment provided
 *
 * Hash: 0x6B5C83BA3EFE6A10 | Since: 323
 */
export function isTransitionHostFromHandle() {
    return NetworkIsTransitionHostFromHandle();
}
/**
 * No comment provided
 *
 * Hash: 0xC571D0E77D8BBC29 | Since: 323
 */
export function isTransitionLeavePostponed() {
    return Citizen.invokeNative('0xC571D0E77D8BBC29');
}
/**
 * No comment provided
 *
 * Hash: 0x292564C735375EDF | Since: 323
 */
export function isTransitionMatchmaking() {
    return NetworkIsTransitionMatchmaking();
}
/**
 * No comment provided
 *
 * Hash: 0x37A4494483B9F5C9 | Since: 323
 */
export function isTransitionOpenToMatchmaking() {
    return NetworkIsTransitionOpenToMatchmaking();
}
/**
 * No comment provided
 *
 * Hash: 0x5A6AA44FF8E931E6 | Since: 323
 */
export function isTransitionPrivate() {
    return NetworkIsTransitionPrivate();
}
/**
 * No comment provided
 *
 * Hash: 0x5DC577201723960A | Since: 323
 */
export function isTransitionSolo() {
    return NetworkIsTransitionSolo();
}
/**
 * No comment provided
 *
 * Hash: 0x53FA83401D9C07FE | Since: 323
 */
export function isTransitionStarted() {
    return NetworkIsTransitionStarted();
}
/**
 * No comment provided
 *
 * Hash: 0x9D7696D8F4FA6CB7 | Since: 323
 */
export function isTransitionToGame() {
    return NetworkIsTransitionToGame();
}
/**
 * No comment provided
 *
 * Hash: 0xD0A484CB2F829FBE | Since: 323
 */
export function isTransitionVisibilityLocked() {
    return NetworkIsTransitionVisibilityLocked();
}
/**
 * No comment provided
 *
 * Hash: 0x0467C11ED88B7D28 | Since: 323
 */
export function isTunableCloudRequestPending() {
    return NetworkIsTunableCloudRequestPending();
}
/**
 * No comment provided
 *
 * Hash: 0x35F0B98A8387274D | Since: 323
 */
export function isTutorialSessionChangePending() {
    return NetworkIsTutorialSessionChangePending();
}
/**
 * No comment provided
 *
 * Hash: 0x906CA41A4B74ECA4 | Since: 1493
 */
export function isUsingOnlinePromotion() {
    return Citizen.invokeNative('0x906CA41A4B74ECA4');
}
/**
 * No comment provided
 *
 * Hash: 0xA06509A691D12BE4 | Since: 323
 */
export function joinGroupActivity() {
    return NetworkJoinGroupActivity();
}
/**
 * No comment provided
 *
 * Hash: 0x59DF79317F85A7E0 | Since: 323
 */
export function joinPreviouslyFailedSession() {
    return NetworkJoinPreviouslyFailedSession();
}
/**
 * No comment provided
 *
 * Hash: 0xFFE1E5B792D92B34 | Since: 323
 */
export function joinPreviouslyFailedTransition() {
    return NetworkJoinPreviouslyFailedTransition();
}
/**
 * int handle[76];
 * NETWORK_HANDLE_FROM_FRIEND(iSelectedPlayer, &handle[0], 13);
 * Player uVar2 = NETWORK_GET_PLAYER_FROM_GAMER_HANDLE(&handle[0]);
 * NETWORK_JOIN_TRANSITION(uVar2);
 * nothing doin.
 *
 * Hash: 0x9D060B08CD63321A | Since: 323
 */
export function joinTransition(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkJoinTransition(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x17C9E241111A674D | Since: 2060
 */
export function keepEntityCollisionDisabledAfterAnimScene() {
    Citizen.invokeNative('0x17C9E241111A674D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2DCF46CB1A4F0884 | Since: 323
 */
export function launchTransition() {
    return NetworkLaunchTransition();
}
/**
 * No comment provided
 *
 * Hash: 0xBF22E0F32968E967 | Since: 323
 */
export function leavePedBehindBeforeCutscene(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xBF22E0F32968E967', _player, false);
}
/**
 * p4 and p5 are always 0 in scripts
 *
 * Hash: 0x9769F811D1785B03 | Since: 323
 */
export function leavePedBehindBeforeWarp(player, pos) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkRespawnCoords(_player, pos.x, pos.y, pos.z, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD23A1A815D21DB19 | Since: 323
 */
export function leaveTransition() {
    return NetworkLeaveTransition();
}
/**
 * No comment provided
 *
 * Hash: 0x261E97AD7BCF3D40 | Since: 323
 */
export function markAsPreferredActivity() {
    Citizen.invokeNative('0x261E97AD7BCF3D40', false);
}
/**
 * No comment provided
 *
 * Hash: 0x39917E1B4CB0F911 | Since: 323
 */
export function markAsWaitingAsync() {
    Citizen.invokeNative('0x39917E1B4CB0F911', false);
}
/**
 * No comment provided
 *
 * Hash: 0x5728BB6D63E3FF1D | Since: 323
 */
export function markTransitionGamerAsFullyJoined() {
    return NetworkMarkTransitionGamerAsFullyJoined();
}
/**
 * No comment provided
 *
 * Hash: 0xC82630132081BB6F | Since: 323
 */
export function memberIdFromGamerHandle() {
    return NetworkMemberIdFromGamerHandle();
}
/**
 * No comment provided
 *
 * Hash: 0x53C10C8BD774F2C9 | Since: 1011
 */
export function needToStartNewGameButBlocked() {
    return Citizen.invokeNative('0x53C10C8BD774F2C9');
}
/**
 * No comment provided
 *
 * Hash: 0x283B6062A2C01E9B | Since: 323
 */
export function onReturnToSinglePlayer() {
    Citizen.invokeNative('0x283B6062A2C01E9B');
}
/**
 * No comment provided
 *
 * Hash: 0x2B3A8F7CA3A38FDE | Since: 323
 */
export function openTransitionMatchmaking() {
    NetworkOpenTransitionMatchmaking();
}
/**
 * Could possibly bypass being muted or automatically muted
 *
 * Hash: 0x3039AE5AD2C9C0C4 | Since: 323
 */
export function overrideChatRestrictions(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkOverrideChatRestrictions(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x42BF1D2E723B6D7E | Since: 2189
 */
export function overrideClockRate(ms) {
    NetworkOverrideClockMillisecondsPerGameMinute(ms);
}
/**
 * Works in Singleplayer too.
 * Passing wrong data (e.g. hours above 23) will cause the game to crash.
 *
 * Hash: 0xE679E3E06E363892 | Since: 323
 */
export function overrideClockTime(hours, minutes, seconds) {
    NetworkOverrideClockTime(hours, minutes, seconds);
}
/**
 * No comment provided
 *
 * Hash: 0xA7E30DE9272B6D49 | Since: 323
 */
export function overrideCoordsAndHeading(entity, pos, heading) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkOverrideCoordsAndHeading(_entity, pos.x, pos.y, pos.z, heading);
}
/**
 * R* uses this to hear all player when spectating.
 * It allows you to hear other online players when their chat is on none, crew and or friends
 *
 * Hash: 0xDDF73E2B1FEC5AB4 | Since: 323
 */
export function overrideReceiveRestrictions(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkOverrideReceiveRestrictions(_player, toggle);
}
/**
 * p0 is always false in scripts.
 *
 * Hash: 0x0FF2862B61A58AF9 | Since: 323
 */
export function overrideReceiveRestrictionsAll(toggle) {
    NetworkOverrideReceiveRestrictionsAll(toggle);
}
/**
 * This is used alongside the native,
 * 'NETWORK_OVERRIDE_RECEIVE_RESTRICTIONS'. Read its description for more info.
 *
 * Hash: 0x97DD4C5944CC2E6A | Since: 323
 */
export function overrideSendRestrictions(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkOverrideSendRestrictions(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x57B192B4D4AD23D5 | Since: 323
 */
export function overrideSendRestrictionsAll(toggle) {
    NetworkOverrideSendRestrictionsAll(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6F697A66CE78674E | Since: 323
 */
export function overrideTeamRestrictions(team, toggle) {
    NetworkOverrideTeamRestrictions(team, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xAF66059A131AA269 | Since: 323
 */
export function overrideTransitionChat() {
    NetworkOverrideTransitionChat(false);
}
/**
 * No comment provided
 *
 * Hash: 0xF0BC9BCD24A511D5 | Since: 2372
 */
export function patchPostCutsceneHs4fTunEnt(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    NetworkPedForceGameStateUpdate(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x559EBF901A8C68E0 | Since: 2699
 */
export function permissionsHasGamerRecord() {
    return Citizen.invokeNative('0x559EBF901A8C68E0');
}
/**
 * No comment provided
 *
 * Hash: 0x172F75B6EE2233BA | Since: 323
 */
export function playerGetCheaterReason() {
    return NetworkPlayerGetCheaterReason();
}
/**
 * Returns the name of a given player. Returns "**Invalid**" if rlGamerInfo of the given player cannot be retrieved or the player doesn't exist.
 *
 * Hash: 0x7718D2E2060837D2 | Since: 323
 */
export function playerGetName(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkPlayerGetName(_player);
}
/**
 * Returns a string of the player's Rockstar Id.
 * Takes a 24 char buffer. Returns the buffer or "**Invalid**" if rlGamerInfo of the given player cannot be retrieved or the player doesn't exist.
 *
 * Hash: 0x4927FC39CD0869A0 | Since: 323
 */
export function playerGetUserid(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkPlayerGetUserid(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x3FB99A8B08D18FD6 | Since: 323
 */
export function playerHasHeadset(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkPlayerHasHeadset(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x565E430DB3B05BEC | Since: 323
 */
export function playerIndexIsCheater(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkPlayerIndexIsCheater(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x19D8DA0E5A68045A | Since: 323
 */
export function playerIsBadsport() {
    return NetworkPlayerIsBadsport();
}
/**
 * No comment provided
 *
 * Hash: 0x655B91F1495A9090 | Since: 323
 */
export function playerIsCheater() {
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
 * Hash: 0x544ABDDA3B409B6D | Since: 323
 */
export function playerIsRockstarDev(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkPlayerIsRockstarDev(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x2302C0264EA58D31 | Since: 323
 */
export function preventScriptHostMigration() {
    Citizen.invokeNative('0x2302C0264EA58D31');
}
/**
 * No comment provided
 *
 * Hash: 0x3C891A251567DFCE | Since: 323
 */
export function queryRespawnResults() {
    return NetworkQueryRespawnResults();
}
/**
 * No comment provided
 *
 * Hash: 0x85A0EF54A500882C | Since: 323
 */
export function queueGamerForStatus() {
    return NetworkQueueGamerForStatus();
}
/**
 * No comment provided
 *
 * Hash: 0x45A83257ED02D9BC | Since: 323
 */
export function quitMpToDesktop() {
    NetworkQuitMpToDesktop();
}
/**
 * No comment provided
 *
 * Hash: 0x06FAACD625D80CAA | Since: 323
 */
export function registerEntityAsNetworked(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkRegisterEntityAsNetworked(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xEA8C0DDB10E2822A | Since: 1868
 */
export function registerHighFrequencyHostBroadcastVariables() {
    Citizen.invokeNative('0xEA8C0DDB10E2822A', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD6D7478CA62B8D41 | Since: 1868
 */
export function registerHighFrequencyPlayerBroadcastVariables() {
    Citizen.invokeNative('0xD6D7478CA62B8D41', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3E9B2F01C50DF595 | Since: 323
 */
export function registerHostBroadcastVariables(numVars, debugName) {
    return NetworkRegisterHostBroadcastVariables(numVars, debugName);
}
/**
 * No comment provided
 *
 * Hash: 0x3364AA97340CA215 | Since: 323
 */
export function registerPlayerBroadcastVariables(numVars, debugName) {
    return NetworkRegisterPlayerBroadcastVariables(numVars, debugName);
}
/**
 * No comment provided
 *
 * Hash: 0xCFEB46DCD7D8D5EB | Since: 323
 */
export function remainInGameChat() {
    Citizen.invokeNative('0xCFEB46DCD7D8D5EB', false);
}
/**
 * No comment provided
 *
 * Hash: 0x25D990F8E0E3F13C | Since: 323
 */
export function removeAllQueuedJoinRequests() {
    Citizen.invokeNative('0x25D990F8E0E3F13C');
}
/**
 * No comment provided
 *
 * Hash: 0x726E0375C7A26368 | Since: 323
 */
export function removeAllTransitionInvite() {
    NetworkRemoveAllTransitionInvite();
}
/**
 * No comment provided
 *
 * Hash: 0xEBF8284D8CADEB53 | Since: 323
 */
export function removeAndCancelAllInvites() {
    Citizen.invokeNative('0xEBF8284D8CADEB53');
}
/**
 * No comment provided
 *
 * Hash: 0xF083835B70BA9BFE | Since: 323
 */
export function removeAndCancelAllTransitionInvites() {
    Citizen.invokeNative('0xF083835B70BA9BFE');
}
/**
 * No comment provided
 *
 * Hash: 0x93CF869BAA0C4874 | Since: 323
 */
export function removeEntityArea(areaHandle) {
    return NetworkRemoveEntityArea(areaHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x791EDB5803B2F468 | Since: 2545
 */
export function removeInvalidObjectModel(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    Citizen.invokeNative('0x791EDB5803B2F468', modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0xF0210268DB0974B1 | Since: 323
 */
export function removePresenceInvite() {
    return NetworkRemovePresenceInvite(0);
}
/**
 * No comment provided
 *
 * Hash: 0x7524B431B2E6F7EE | Since: 323
 */
export function removeTransitionInvite() {
    return NetworkRemoveTransitionInvite();
}
/**
 * No comment provided
 *
 * Hash: 0x5626D9D6810730D5 | Since: 350
 */
export function reportCodeTamper() {
    NetworkReportMyself();
}
/**
 * No comment provided
 *
 * Hash: 0x924426BFFD82E915 | Since: 323
 */
export function requestCloudBackgroundScripts() {
    return NetworkRequestCloudBackgroundScripts();
}
/**
 * No comment provided
 *
 * Hash: 0x42FB3B532D526E6C | Since: 323
 */
export function requestCloudTunables() {
    NetworkRequestCloudTunables();
}
/**
 * No comment provided
 *
 * Hash: 0x870DDFD5A4A796E4 | Since: 323
 */
export function requestControlOfDoor(doorID) {
    return NetworkRequestControlOfDoor(doorID);
}
/**
 * No comment provided
 *
 * Hash: 0xB69317BF5E782347 | Since: 323
 */
export function requestControlOfEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkRequestControlOfEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xA670B3662FAFFBD0 | Since: 323
 */
export function requestControlOfNetworkId(netId) {
    return NetworkRequestControlOfNetworkId(netId);
}
/**
 * Triggers a CEventNetworkInviteConfirmed event
 *
 * Hash: 0x62A0296C1BB1CEB3 | Since: 323
 */
export function requestInviteConfirmedEvent() {
    return NetworkAcceptInvite();
}
/**
 * No comment provided
 *
 * Hash: 0x741A3D8380319A81 | Since: 323
 */
export function requestToBeHostOfThisScript() {
    Citizen.invokeNative('0x741A3D8380319A81');
}
/**
 * No comment provided
 *
 * Hash: 0x72433699B4E6DD64 | Since: 323
 */
export function resetBodyTracker() {
    NetworkResetBodyTracker();
}
/**
 * Hardcoded to return true.
 *
 * Hash: 0xDE9225854F37BF72 | Since: 2612
 */
export function resolvePrivilegeUserContent() {
    return Citizen.invokeNative('0xDE9225854F37BF72');
}
/**
 * No comment provided
 *
 * Hash: 0xEA23C49EAA83ACFB | Since: 323
 */
export function resurrectLocalPlayer(pos, heading, changetime) {
    NetworkResurrectLocalPlayer(pos.x, pos.y, pos.z, heading, false, changetime, false, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB13E88E655E5A3BC | Since: 323
 */
export function retainActivityGroup() {
    Citizen.invokeNative('0xB13E88E655E5A3BC');
}
/**
 * No comment provided
 *
 * Hash: 0xF1B84178F8674195 | Since: 323
 */
export function seedRandomNumberGenerator(seed) {
    NetworkSeedRandomNumberGenerator(seed);
}
/**
 * Contains the string "NETWORK_SEND_PRESENCE_TRANSITION_INVITE" but so does 0xC116FF9B4D488291; seems to fit alphabetically here, tho.
 *
 * Hash: 0x1171A97A3D3981B6 | Since: 323
 */
export function sendImportantTransitionInviteViaPresence(dataCount) {
    return Citizen.invokeNative('0x1171A97A3D3981B6', undefined, dataCount, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xC3C7A6AFDB244624 | Since: 323
 */
export function sendInviteViaPresence(dataCount) {
    return NetworkSendInviteViaPresence(undefined, dataCount, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xFA2888E3833C8E96 | Since: 323
 */
export function sendQueuedJoinRequest() {
    Citizen.invokeNative('0xFA2888E3833C8E96');
}
/**
 * Message is limited to 64 characters.
 *
 * Hash: 0x3A214F2EC889B100 | Since: 323
 */
export function sendTextMessage(message) {
    return NetworkSendTextMessage(message);
}
/**
 * No comment provided
 *
 * Hash: 0x31D1D2B858D25E6B | Since: 323
 */
export function sendTransitionGamerInstruction() {
    return NetworkSendTransitionGamerInstruction(undefined, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC116FF9B4D488291 | Since: 323
 */
export function sendTransitionInviteViaPresence(dataCount) {
    return NetworkSendPresenceTransitionInvite(undefined, dataCount, 0);
}
/**
 * groupId range: [0, 4]
 *
 * Hash: 0xCAE55F48D3D7875C | Since: 323
 */
export function sessionAddActiveMatchmakingGroup(groupId) {
    NetworkSessionAddActiveMatchmakingGroup(groupId);
}
/**
 * No comment provided
 *
 * Hash: 0xA73667484D7037C3 | Since: 323
 */
export function sessionBlockJoinRequests(toggle) {
    NetworkSessionBlockJoinRequests(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x2FBF47B1B36D36F9 | Since: 323
 */
export function sessionCancelInvite() {
    NetworkSessionCancelInvite();
}
/**
 * num player slots allowed in session, seems to work? 32 max
 *
 * Hash: 0xB4AB419E0D86ACAE | Since: 323
 */
export function sessionChangeSlots(slots) {
    NetworkSessionChangeSlots(slots, false);
}
/**
 * No comment provided
 *
 * Hash: 0xBE3E347A87ACEB82 | Since: 323
 */
export function sessionDoActivityQuickmatch() {
    return NetworkSessionActivityQuickmatch(undefined, undefined, undefined, undefined, undefined);
}
/**
 * p4 seems to be unused in 1.60/build 2628
 *
 * Hash: 0x94BC51E9449D917F | Since: 323
 */
export function sessionDoCrewMatchmaking(crewId, maxPlayers) {
    return NetworkSessionCrewMatchmaking(crewId, 0, 0, maxPlayers);
}
/**
 * No comment provided
 *
 * Hash: 0x330ED4D05491934F | Since: 323
 */
export function sessionDoFreeroamQuickmatch() {
    return NetworkSessionEnter(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2CFC76E0D087C994 | Since: 323
 */
export function sessionDoFriendMatchmaking() {
    return NetworkSessionFriendMatchmaking(0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA29177F7703B5644 | Since: 323
 */
export function sessionForceCancelInvite() {
    NetworkSessionForceCancelInvite();
}
/**
 * No comment provided
 *
 * Hash: 0xDFFA5BE8381C3314 | Since: 463
 */
export function sessionGetHostAimPreference() {
    return NetworkGetTargetingMode();
}
/**
 * No comment provided
 *
 * Hash: 0xE57397B4A3429DD0 | Since: 323
 */
export function sessionGetInviter() {
    return NetworkSessionGetInviter();
}
/**
 * No comment provided
 *
 * Hash: 0xD6D09A6F32F49EF1 | Since: 323
 */
export function sessionGetKickVote(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkSessionGetKickVote(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x56CE820830EF040B | Since: 323
 */
export function sessionGetMatchmakingGroupFree() {
    return NetworkSessionGetMatchmakingGroupFree(0);
}
/**
 * No comment provided
 *
 * Hash: 0x53AFD64C6758F2F9 | Since: 323
 */
export function sessionGetPrivateSlots() {
    return NetworkSessionGetPrivateSlots();
}
/**
 * No comment provided
 *
 * Hash: 0xCDC936BF35EDCB73 | Since: 3095
 */
export function sessionGetUniqueCrewLimit() {
    return Citizen.invokeNative('0xCDC936BF35EDCB73');
}
/**
 * Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.
 *
 * Hash: 0x6F3D4ED9BEE4E61D | Since: 323
 */
export function sessionHost(maxPlayers) {
    return NetworkSessionHost(0, maxPlayers, false);
}
/**
 * No comment provided
 *
 * Hash: 0xED34C0C02C098BB7 | Since: 323
 */
export function sessionHostClosed(maxPlayers) {
    return NetworkSessionHostClosed(0, maxPlayers);
}
/**
 * Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.
 *
 * Hash: 0xB9CFD27A5D578D83 | Since: 323
 */
export function sessionHostFriendsOnly(maxPlayers) {
    return NetworkSessionHostFriendsOnly(0, maxPlayers);
}
/**
 * Loads up the map that is loaded when beeing in mission creator
 * Player gets placed in a mix between online/offline mode
 * p0 is always 2 in R* scripts.
 *
 * Appears to be patched in gtav b757 (game gets terminated) alonside with most other network natives to prevent online modding ~ghost30812
 *
 * Hash: 0xC74C33FCA52856D5 | Since: 323
 */
export function sessionHostSinglePlayer() {
    NetworkSessionHostSinglePlayer(0);
}
/**
 * Seems to be true while "Getting GTA Online session details" shows up.
 *
 * Hash: 0xD313DE83394AF134 | Since: 323
 */
export function sessionIsAwaitingInviteResponse() {
    return Citizen.invokeNative('0xD313DE83394AF134');
}
/**
 * No comment provided
 *
 * Hash: 0x74732C6CA90DA2B4 | Since: 323
 */
export function sessionIsClosedCrew() {
    return NetworkSessionIsClosedCrew();
}
/**
 * No comment provided
 *
 * Hash: 0xFBCFA2EA2E206890 | Since: 323
 */
export function sessionIsClosedFriends() {
    return NetworkSessionIsClosedFriends();
}
/**
 * No comment provided
 *
 * Hash: 0xBDB6F89C729CF388 | Since: 323
 */
export function sessionIsDisplayingInviteConfirmation() {
    return Citizen.invokeNative('0xBDB6F89C729CF388');
}
/**
 * No comment provided
 *
 * Hash: 0x855BC38818F6F684 | Since: 323
 */
export function sessionIsInVoiceSession() {
    return NetworkSessionIsInVoiceSession();
}
/**
 * No comment provided
 *
 * Hash: 0xCEF70AA5B3F89BA1 | Since: 323
 */
export function sessionIsPrivate() {
    return NetworkSessionIsPrivate();
}
/**
 * No comment provided
 *
 * Hash: 0xF3929C2379B60CCE | Since: 323
 */
export function sessionIsSolo() {
    return NetworkSessionIsSolo();
}
/**
 * No comment provided
 *
 * Hash: 0xBA416D68C631496A | Since: 323
 */
export function sessionIsVisible() {
    return NetworkSessionIsVisible();
}
/**
 * No comment provided
 *
 * Hash: 0xB5D3453C98456528 | Since: 323
 */
export function sessionIsVoiceSessionActive() {
    return Citizen.invokeNative('0xB5D3453C98456528');
}
/**
 * No comment provided
 *
 * Hash: 0xEF0912DDF7C4CB4B | Since: 323
 */
export function sessionIsVoiceSessionBusy() {
    return NetworkSessionIsVoiceSessionBusy();
}
/**
 * No comment provided
 *
 * Hash: 0xC6F8AB8A4189CF3A | Since: 323
 */
export function sessionJoinInvite() {
    NetworkSessionJoinInvite();
}
/**
 * Only works as host.
 *
 * Hash: 0xFA8904DC5F304220 | Since: 323
 */
export function sessionKickPlayer(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkSessionKickPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xB9351A07A0D458B1 | Since: 2060
 */
export function sessionLeave() {
    return Citizen.invokeNative('0xB9351A07A0D458B1', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3442775428FD2DAA | Since: 323
 */
export function sessionLeaveSinglePlayer() {
    NetworkSessionLeaveSinglePlayer();
}
/**
 * No comment provided
 *
 * Hash: 0x271CC6AB59EBF9A5 | Since: 323
 */
export function sessionMarkVisible(toggle) {
    NetworkSessionMarkVisible(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x041C7F2A6C9894E6 | Since: 463
 */
export function sessionReserveSlotsTransition() {
    return Citizen.invokeNative('0x041C7F2A6C9894E6', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x702BC4D605522539 | Since: 323
 */
export function sessionSetCrewLimitMaxMembersTransition() {
    Citizen.invokeNative('0x702BC4D605522539', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x600F8CB31C7AAB6E | Since: 323
 */
export function sessionSetGamemode() {
    Citizen.invokeNative('0x600F8CB31C7AAB6E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x49EC8030F5015F8B | Since: 323
 */
export function sessionSetMatchmakingGroup(matchmakingGroup) {
    NetworkSessionSetMatchmakingGroup(matchmakingGroup);
}
/**
 * playerType is an unsigned int from 0 to 4
 * 0 = regular joiner
 * 4 = spectator
 *
 * Hash: 0x8B6A4DD0AF9CE215 | Since: 323
 */
export function sessionSetMatchmakingGroupMax(playerType, playerCount) {
    NetworkSessionSetMatchmakingGroupMax(playerType, playerCount);
}
/**
 * p0 in the decompiled scripts is always the stat mesh_texblend * 0.07 to int
 *
 * Hash: 0xF1EEA2DDA9FFA69D | Since: 323
 */
export function sessionSetMatchmakingMentalState() {
    NetworkSessionSetMatchmakingMentalState(0);
}
/**
 * No comment provided
 *
 * Hash: 0x3F52E880AAF6C8CA | Since: 323
 */
export function sessionSetMatchmakingPropertyId() {
    NetworkSessionSetMatchmakingPropertyId(false);
}
/**
 * No comment provided
 *
 * Hash: 0x59D421683D31835A | Since: 573
 */
export function sessionSetNumBosses(num) {
    Citizen.invokeNative('0x59D421683D31835A', num);
}
/**
 * No comment provided
 *
 * Hash: 0x1153FA02A659051C | Since: 323
 */
export function sessionSetScriptValidateJoin() {
    Citizen.invokeNative('0x1153FA02A659051C');
}
/**
 * No comment provided
 *
 * Hash: 0xF49ABC20D8552257 | Since: 323
 */
export function sessionSetUniqueCrewLimit() {
    Citizen.invokeNative('0xF49ABC20D8552257', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4811BBAC21C5FCD5 | Since: 323
 */
export function sessionSetUniqueCrewLimitTransition() {
    Citizen.invokeNative('0x4811BBAC21C5FCD5', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5539C3EBF104A53A | Since: 323
 */
export function sessionSetUniqueCrewOnlyCrewsTransition() {
    Citizen.invokeNative('0x5539C3EBF104A53A', false);
}
/**
 * No comment provided
 *
 * Hash: 0xC19F6C8E7865A6FF | Since: 323
 */
export function sessionValidateJoin() {
    NetworkSessionValidateJoin(false);
}
/**
 * No comment provided
 *
 * Hash: 0xABD5E88B8A2D3DB2 | Since: 323
 */
export function sessionVoiceConnectToPlayer() {
    return NetworkSessionVoiceConnectToPlayer();
}
/**
 * No comment provided
 *
 * Hash: 0x9C1556705F864230 | Since: 323
 */
export function sessionVoiceHost() {
    return NetworkSessionVoiceHost();
}
/**
 * No comment provided
 *
 * Hash: 0x6793E42BE02B575D | Since: 323
 */
export function sessionVoiceLeave() {
    return NetworkSessionVoiceLeave();
}
/**
 * No comment provided
 *
 * Hash: 0x7F8413B7FC2AA6B9 | Since: 323
 */
export function sessionVoiceRespondToRequest() {
    NetworkSessionVoiceRespondToRequest(false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x5B8ED3DB018927B1 | Since: 323
 */
export function sessionVoiceSetTimeout(timeout) {
    NetworkSessionVoiceSetTimeout(timeout);
}
/**
 * No comment provided
 *
 * Hash: 0x23DFB504655D0CE4 | Since: 323
 */
export function sessionWasInvited() {
    return NetworkSessionWasInvited();
}
/**
 * No comment provided
 *
 * Hash: 0x0E4F77F7B9D74D84 | Since: 573
 */
export function setActivityPlayerMax() {
    NetworkSetActivityPlayerMax(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x75138790B4359A74 | Since: 323
 */
export function setActivitySpectator(toggle) {
    NetworkSetActivitySpectator(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x9D277B76D1D12222 | Since: 323
 */
export function setActivitySpectatorMax(maxSpectators) {
    NetworkSetActivitySpectatorMax(maxSpectators);
}
/**
 * No comment provided
 *
 * Hash: 0x5C707A667DF8B9FA | Since: 323
 */
export function setAntagonisticToPlayer(toggle, player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkSetChoiceMigrateOptions(toggle, _player);
}
/**
 * No comment provided
 *
 * Hash: 0x0EDE326D47CD0F3E | Since: 323
 */
export function setAttributeDamageToPlayer(ped, player) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x0EDE326D47CD0F3E', _ped, _player);
}
/**
 * No comment provided
 *
 * Hash: 0x68980414688F7F9D | Since: 2612
 */
export function setCanReceiveRsInvites() {
    Citizen.invokeNative('0x68980414688F7F9D', false);
}
/**
 * No comment provided
 *
 * Hash: 0x7206F674F2A3B1BB | Since: 323
 */
export function setCurrentlySelectedGamerHandleFromInviteMenu() {
    return NetworkSetCurrentlySelectedGamerHandleFromInviteMenu();
}
/**
 * No comment provided
 *
 * Hash: 0x3DAD00265FBF356B | Since: 2802
 */
export function setCurrentChatOption(newChatOption) {
    Citizen.invokeNative('0x3DAD00265FBF356B', newChatOption);
}
/**
 * No comment provided
 *
 * Hash: 0x796A87B3B68D1F3D | Since: 323
 */
export function setCurrentDataManagerHandle() {
    return NetworkSetCurrentDataManagerHandle();
}
/**
 * No comment provided
 *
 * Hash: 0x2C863ACDCD12B3DB | Since: 2699
 */
export function setCurrentPublicContentId(missionId) {
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
 * Hash: 0xAA6D5451DC3448B6 | Since: 2699
 */
export function setCurrentSpawnLocationOption(mpSettingSpawn) {
    if (typeof mpSettingSpawn === 'string')
        mpSettingSpawn = GetHashKey(mpSettingSpawn);
    NetworkSetCurrentSpawnSetting(mpSettingSpawn);
}
/**
 * No comment provided
 *
 * Hash: 0xA6FCECCF4721D679 | Since: 1604
 */
export function setCustomArenaBallParams(netId) {
    Citizen.invokeNative('0xA6FCECCF4721D679', netId);
}
/**
 * Appears to set whether a transition should be started when the session is migrating.
 *
 * Hash: 0xA2E9C1AB8A92E8CD | Since: 323
 */
export function setDoNotLaunchFromJoinAsMigratedHost(toggle) {
    Citizen.invokeNative('0xA2E9C1AB8A92E8CD', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xD830567D88A1E873 | Since: 323
 */
export function setEntityCanBlend(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
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
 * Hash: 0xF1CA12B18AEF5298 | Since: 323
 */
export function setEntityOnlyExistsForParticipants(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkSetEntityInvisibleToNetwork(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF808475FA571D823 | Since: 323
 */
export function setFriendlyFireOption(toggle) {
    NetworkSetFriendlyFireOption(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xCA2C8073411ECDB6 | Since: 323
 */
export function setGamerInvitedToTransition() {
    return NetworkSetGamerInvitedToTransition();
}
/**
 * No comment provided
 *
 * Hash: 0x6A5D89D7769A40D8 | Since: 323
 */
export function setIgnoreSpectatorChatLimitsSameTeam(toggle) {
    Citizen.invokeNative('0x6A5D89D7769A40D8', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0D77A82DC2D0DA59 | Since: 323
 */
export function setInviteFailedMessageForInviteMenu() {
    return Citizen.invokeNative('0x0D77A82DC2D0DA59');
}
/**
 * No comment provided
 *
 * Hash: 0x66F010A4B031A331 | Since: 323
 */
export function setInviteOnCallForInviteMenu() {
    return NetworkSetInviteOnCallForInviteMenu();
}
/**
 * No comment provided
 *
 * Hash: 0xFC18DB55AE19E046 | Since: 323
 */
export function setInFreeCamMode(toggle) {
    NetworkSetInFreeCamMode(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x9CA5DE655269FEC4 | Since: 323
 */
export function setInMpCutscene() {
    NetworkSetInMpCutscene(false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2CE9D95E4051AECD | Since: 678
 */
export function setInProgressFinishTime() {
    Citizen.invokeNative('0x2CE9D95E4051AECD', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x423DE3854BB50894 | Since: 323
 */
export function setInSpectatorMode(toggle, playerPed) {
    const _playerPed = playerPed instanceof IPed ? playerPed.handle() : playerPed;
    NetworkSetInSpectatorMode(toggle, _playerPed);
}
/**
 * No comment provided
 *
 * Hash: 0x419594E137637120 | Since: 323
 */
export function setInSpectatorModeExtended(toggle, playerPed) {
    const _playerPed = playerPed instanceof IPed ? playerPed.handle() : playerPed;
    NetworkSetInSpectatorModeExtended(toggle, _playerPed, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2D95C7E2D7E07307 | Since: 323
 */
export function setLocalPlayerInvincibleTime(time) {
    NetworkSetLocalPlayerInvincibleTime(time);
}
/**
 * No comment provided
 *
 * Hash: 0x524FF0AEFF9C3973 | Since: 323
 */
export function setLocalPlayerSyncLookAt(toggle) {
    NetworkSetLocalPlayerSyncLookAt(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x7D395EA61622E116 | Since: 323
 */
export function setLookAtTalkers() {
    Citizen.invokeNative('0x7D395EA61622E116', false);
}
/**
 * No comment provided
 *
 * Hash: 0x94538037EE44F5CF | Since: 323
 */
export function setMinimumRankForMission() {
    Citizen.invokeNative('0x94538037EE44F5CF', false);
}
/**
 * No comment provided
 *
 * Hash: 0x3B3D11CD9FFCDFC9 | Since: 323
 */
export function setMissionFinished() {
    NetworkSetMissionFinished();
}
/**
 * No comment provided
 *
 * Hash: 0x3FC795691834481D | Since: 1868
 */
export function setNoLongerNeeded(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x3FC795691834481D', _entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF46A1E03E8755980 | Since: 323
 */
export function setNoSpectatorChat(toggle) {
    NetworkSetNoSpectatorChat(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0379DAF89BA09AA5 | Since: 944
 */
export function setObjectCanBlendWhenFixed(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    NetworkSetObjectForceStaticBlend(__object, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBA7F0B77D80A4EB7 | Since: 372
 */
export function setObjectScopeDistance(_object, range) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0xBA7F0B77D80A4EB7', __object, range);
}
/**
 * No comment provided
 *
 * Hash: 0x70DA3BF8DACD3210 | Since: 323
 */
export function setOverrideSpectatorMode(toggle) {
    NetworkSetOverrideSpectatorMode(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x3C5C1E2C2FF814B1 | Since: 323
 */
export function setOverrideTutorialSessionChat(toggle) {
    Citizen.invokeNative('0x3C5C1E2C2FF814B1', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1B857666604B1A74 | Since: 323
 */
export function setPlayerIsPassive(toggle) {
    NetworkSetPlayerIsPassive(toggle);
}
/**
 * p0 in the decompiled scripts is always the stat mesh_texblend * 0.07 to int
 *
 * Hash: 0x367EF5E2F439B4C6 | Since: 323
 */
export function setPlayerMentalState() {
    Citizen.invokeNative('0x367EF5E2F439B4C6', 0);
}
/**
 * Does nothing. It's just a nullsub.
 *
 * Hash: 0x4A9FDE3A5A6D0437 | Since: 323
 */
export function setPresenceSessionInvitesBlocked(toggle) {
    Citizen.invokeNative('0x4A9FDE3A5A6D0437', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1F7BC3539F9E0224 | Since: 1180
 */
export function setPrivilegeCheckResultNotNeeded() {
    Citizen.invokeNative('0x1F7BC3539F9E0224');
}
/**
 * No comment provided
 *
 * Hash: 0x9D7AFCBF21C51712 | Since: 323
 */
export function setProximityAffectsTeam(toggle) {
    Citizen.invokeNative('0x9D7AFCBF21C51712', toggle);
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x1DCCACDCFC569362 | Since: 323
 */
export function setRichPresence() {
    NetworkSetRichPresence(0, 0, undefined, undefined);
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x3E200C2BCF4164EB | Since: 323
 */
export function setRichPresenceString(textLabel) {
    NetworkSetRichPresenceString(0, textLabel);
}
/**
 * No comment provided
 *
 * Hash: 0x4348BFDA56023A2F | Since: 573
 */
export function setSameTeamAsLocalPlayer() {
    return Citizen.invokeNative('0x4348BFDA56023A2F', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB309EBEA797E001F | Since: 323
 */
export function setScriptAutomuted() {
    return Citizen.invokeNative('0xB309EBEA797E001F', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x265559DA40B3F327 | Since: 573
 */
export function setScriptControllingTeams() {
    Citizen.invokeNative('0x265559DA40B3F327', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7AC752103856FB20 | Since: 323
 */
export function setScriptReadyForEvents(toggle) {
    NetworkSetScriptReadyForEvents(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8EF52ACAECC51D9C | Since: 1734
 */
export function setSpectatorToNonSpectatorTextChat(toggle) {
    Citizen.invokeNative('0x8EF52ACAECC51D9C', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xCBF12D65F95AD686 | Since: 323
 */
export function setTalkerProximity(value) {
    NetworkSetTalkerProximity(value);
}
/**
 * A value between 1.0 and 5.0
 *
 * Hash: 0xC6FCEE21C6FCEE21 | Since: 2545
 */
export function setTaskCutsceneInscopeMultipler(multiplier) {
    Citizen.invokeNative('0xC6FCEE21C6FCEE21', multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xD5B4883AC32F24C3 | Since: 323
 */
export function setTeamOnlyChat(toggle) {
    NetworkSetTeamOnlyChat(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1CA59E306ECB80A5 | Since: 323
 */
export function setThisScriptIsNetworkScript(maxNumMissionParticipants, instanceId) {
    NetworkSetThisScriptIsNetworkScript(maxNumMissionParticipants, false, instanceId);
}
/**
 * No comment provided
 *
 * Hash: 0x30DE938B516F0AD2 | Since: 323
 */
export function setTransitionActivityId() {
    NetworkSetTransitionActivityId(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEF26739BCD9907D5 | Since: 323
 */
export function setTransitionCreatorHandle() {
    return NetworkSetTransitionCreatorHandle();
}
/**
 * No comment provided
 *
 * Hash: 0x0C978FDA19692C2C | Since: 323
 */
export function setTransitionVisibilityLock() {
    NetworkSetTransitionVisibilityLock(false, false);
}
/**
 * Used by MetricVEHICLE_DIST_DRIVEN
 *
 * Hash: 0x8C70252FC40F320B | Since: 2699
 */
export function setVehicleDrivenInTestDrive(toggle) {
    NetworkSetVehicleTestDrive(toggle);
}
/**
 * Sets 'loc' variable used in MetricVEHICLE_DIST_DRIVEN
 *
 * Hash: 0xA0CE91E47531D3BB | Since: 2944
 */
export function setVehicleDrivenLocation(location) {
    if (typeof location === 'string')
        location = GetHashKey(location);
    Citizen.invokeNative('0xA0CE91E47531D3BB', location);
}
/**
 * No comment provided
 *
 * Hash: 0xBABEC9E69A91C57B | Since: 323
 */
export function setVoiceActive(toggle) {
    NetworkSetVoiceActive(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xEF6212C2EFEF1A23 | Since: 323
 */
export function setVoiceChannel(channel) {
    NetworkSetVoiceChannel(channel);
}
/**
 * No comment provided
 *
 * Hash: 0x023ACAB2DC9DC4A4 | Since: 1493
 */
export function shouldShowPromotionAlertScreen() {
    return Citizen.invokeNative('0x023ACAB2DC9DC4A4');
}
/**
 * Returns true if the NAT type is Strict (3) and a certain number of connections have failed.
 *
 * Hash: 0x82A2B386716608F1 | Since: 393
 */
export function shouldShowStrictNatWarning() {
    return NetworkShouldShowConnectivityTroubleshooting();
}
/**
 * No comment provided
 *
 * Hash: 0x83FE8D7229593017 | Since: 323
 */
export function showAccountUpgradeUi() {
    Citizen.invokeNative('0x83FE8D7229593017');
}
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0x6BFF5F84102DF80A | Since: 323
 */
export function showChatRestrictionMsc(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x6BFF5F84102DF80A', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x859ED1CEA343FCA8 | Since: 323
 */
export function showProfileUi() {
    return NetworkShowProfileUi();
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x5C497525F803486B | Since: 323
 */
export function showPsnUgcRestriction() {
    Citizen.invokeNative('0x5C497525F803486B');
}
/**
 * No comment provided
 *
 * Hash: 0x9465E683B12D3F6B | Since: 323
 */
export function skipRadioResetNextClose() {
    Citizen.invokeNative('0x9465E683B12D3F6B');
}
/**
 * No comment provided
 *
 * Hash: 0xCA59CCAE5D01E4CE | Since: 1734
 */
export function skipRadioResetNextOpen() {
    Citizen.invokeNative('0xCA59CCAE5D01E4CE');
}
/**
 * Returns true if dinput8.dll is present in the game directory.
 * You will get following error message if that is true: "You are attempting to access GTA Online servers with an altered version of the game."
 *
 * Hash: 0x659CF2EF7F550C4F | Since: 1011
 */
export function skipRadioWarning() {
    return NetworkHasGameBeenAltered();
}
/**
 * One of the first things it does is get the players ped.
 * Then it calls a function that is used in some tasks and ped based functions.
 * p5, p6, p7 is another coordinate (or zero), often related to `GET_BLIP_COORDS, in the decompiled scripts.
 *
 * Hash: 0x5A6FFA2433E2F14C | Since: 323
 */
export function startRespawnSearchForPlayer(player, pos, radius, flags) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkStartRespawnSearchForPlayer(_player, pos.x, pos.y, pos.z, radius, 0, 0, 0, flags);
}
/**
 * p8, p9, p10 is another coordinate, or zero, often related to `GET_BLIP_COORDS in the decompiled scripts.
 *
 * Hash: 0x4BA92A18502BCA61 | Since: 323
 */
export function startRespawnSearchInAngledAreaForPlayer(player, x1, y1, z1, x2, y2, z2, width, flags) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkStartRespawnSearchInAngledAreaForPlayer(_player, x1, y1, z1, x2, y2, z2, width, 0, 0, 0, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x17E0198B3882C2CB | Since: 323
 */
export function startSoloTutorialSession() {
    NetworkStartSoloTutorialSession();
}
/**
 * No comment provided
 *
 * Hash: 0x9A1B3FCDB36C8697 | Since: 323
 */
export function startSynchronisedScene(netScene) {
    NetworkStartSynchronisedScene(netScene);
}
/**
 * Always returns -1. Seems to be XB1 specific.
 *
 * Hash: 0xDEB2B99A1AF1A2A6 | Since: 323
 */
export function startUserContentPermissionsCheck() {
    return NetworkStartUserContentPermissionsCheck();
}
/**
 * No comment provided
 *
 * Hash: 0xC254481A4574CB2F | Since: 323
 */
export function stopSynchronisedScene(netScene) {
    NetworkStopSynchronisedScene(netScene);
}
/**
 * No comment provided
 *
 * Hash: 0xF814FEC6A19FD6E0 | Since: 323
 */
export function storeInviteThroughRestart() {
    Citizen.invokeNative('0xF814FEC6A19FD6E0');
}
/**
 * No comment provided
 *
 * Hash: 0xA0682D67EF1FBA3D | Since: 323
 */
export function suppressInvite(toggle) {
    NetworkSuppressInvite(toggle);
}
/**
 * Does nothing in final builds.
 *
 * Hash: 0xCBD02360C5E16871 | Since: 3570
 */
export function syncClockTimeOverride() {
    Citizen.invokeNative('0xCBD02360C5E16871');
}
/**
 * Same as _IS_TEXT_CHAT_ACTIVE, except it does not check if the text chat HUD component is initialized, and therefore may crash.
 *
 * Hash: 0x5FCF4D7069B09026 | Since: 323
 */
export function textChatIsTyping() {
    return NetworkIsTextChatActive();
}
/**
 * No comment provided
 *
 * Hash: 0xC3BFED92026A2AAD | Since: 617
 */
export function transitionAddStage(hash, state) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return NetworkTransitionTrack(hash, 0, 0, state, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x973D76AA760A6CB6 | Since: 323
 */
export function transitionBlockJoinRequests() {
    Citizen.invokeNative('0x973D76AA760A6CB6', false);
}
/**
 * No comment provided
 *
 * Hash: 0x04918A41BC9B8157 | Since: 617
 */
export function transitionFinish() {
    return Citizen.invokeNative('0x04918A41BC9B8157', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF6F4383B7C92F11A | Since: 573
 */
export function transitionSetActivityIsland() {
    Citizen.invokeNative('0xF6F4383B7C92F11A', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1F8E00FB18239600 | Since: 573
 */
export function transitionSetContentCreator() {
    Citizen.invokeNative('0x1F8E00FB18239600', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1398582B7F72B3ED | Since: 505
 */
export function transitionSetInProgress() {
    Citizen.invokeNative('0x1398582B7F72B3ED', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8B4FFC790CA131EF | Since: 617
 */
export function transitionStart() {
    return Citizen.invokeNative('0x8B4FFC790CA131EF', 0, undefined, undefined, undefined);
}
/**
 * Allows vehicle wheels to be destructible even when the vehicle entity is invincible.
 *
 * Hash: 0x890E2C5ABED7236D | Since: 1365
 */
export function triggerDamageEventForZeroDamage(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkSetVehicleWheelsDestructible(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x38B7C51AB1EDC7D8 | Since: 1734
 */
export function triggerDamageEventForZeroWeaponHash(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x38B7C51AB1EDC7D8', _entity, toggle);
}
/**
 * Returns defaultValue if the tunable doesn't exist.
 *
 * Hash: 0xC7420099936CE286 | Since: 323
 */
export function tryAccessTunableBoolHash(tunableContext, tunableName, defaultValue) {
    if (typeof tunableContext === 'string')
        tunableContext = GetHashKey(tunableContext);
    if (typeof tunableName === 'string')
        tunableName = GetHashKey(tunableName);
    return NetworkTryAccessTunableBoolHash(tunableContext, tunableName, defaultValue);
}
/**
 * No comment provided
 *
 * Hash: 0xD1110739EEADB592 | Since: 323
 */
export function tryToSetThisScriptIsNetworkScript() {
    return NetworkIsThisScriptMarked(undefined, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC1447451DDB512F0 | Since: 2372
 */
export function ugcNav() {
    NetworkUgcNav(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7368E683BB9038D6 | Since: 323
 */
export function unregisterNetworkedEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkUnregisterNetworkedEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x2B1813ABA29016C5 | Since: 323
 */
export function useHighPrecisionBlending(netID, toggle) {
    NetworkUseHighPrecisionBlending(netID, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xCD71A4ECAB22709E | Since: 323
 */
export function useLogarithmicBlendingThisFrame(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkUseLogarithmicBlendingThisFrame(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xB37E4E6A2388CA7B | Since: 323
 */
export function waitingPopClearTutorialSession() {
    return Citizen.invokeNative('0xB37E4E6A2388CA7B');
}
/**
 * No comment provided
 *
 * Hash: 0x4237E822315D8BA9 | Since: 323
 */
export function wasGameSuspended() {
    return Citizen.invokeNative('0x4237E822315D8BA9');
}
/**
 * gets the entity id of a network id
 *
 * Hash: 0xBFFEAB45A9A9094A | Since: 323
 */
export function netToEnt(netHandle) {
    return NetToEnt(netHandle);
}
/**
 * gets the object id of a network id
 *
 * Hash: 0xD8515F5FEA14CB3F | Since: 323
 */
export function netToObj(netHandle) {
    return NetToObj(netHandle);
}
/**
 * gets the ped id of a network id
 *
 * Hash: 0xBDCD95FC216A8B3E | Since: 323
 */
export function netToPed(netHandle) {
    return NetToPed(netHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x367B936610BA360C | Since: 323
 */
export function netToVeh(netHandle) {
    return NetToVeh(netHandle);
}
/**
 * Lets objects spawn online simply do it like this:
 *
 * int createdObject = OBJ_TO_NET(CREATE_OBJECT_NO_OFFSET(oball, pCoords.x, pCoords.y, pCoords.z, 1, 0, 0));
 *
 * Hash: 0x99BFDC94A603E541 | Since: 323
 */
export function objToNet(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return ObjToNet(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x58C21165F6545892 | Since: 323
 */
export function openCommerceStore() {
    OpenCommerceStore(undefined, undefined, 0);
}
/**
 * Return the local Participant ID
 *
 * Hash: 0x90986E8876CE0A83 | Since: 323
 */
export function participantId() {
    return ParticipantId();
}
/**
 * Return the local Participant ID.
 *
 * This native is exactly the same as 'PARTICIPANT_ID' native.
 *
 * Hash: 0x57A3BDDAD8E5AA0A | Since: 323
 */
export function participantIdToInt() {
    return ParticipantIdToInt();
}
/**
 * gets the network id of a ped
 *
 * Hash: 0x0EDEC3C276198689 | Since: 323
 */
export function pedToNet(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return PedToNet(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE26CCFF8094D8C74 | Since: 323
 */
export function refreshPlayerListStats() {
    return RefreshPlayerListStats(0);
}
/**
 * No comment provided
 *
 * Hash: 0x72D0706CD6CCDB58 | Since: 323
 */
export function releaseAllCommerceItemImages() {
    ReleaseAllCommerceItemImages();
}
/**
 * No comment provided
 *
 * Hash: 0x472841A026D26D8B | Since: 1103
 */
export function remoteCheaterPlayerDetected(player, a, b) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return RemoteCheatDetected(_player, a, b);
}
/**
 * entity must be a valid entity; ped can be NULL
 *
 * Hash: 0x715135F4B82AC90D | Since: 323
 */
export function removeAllStickyBombsFromEntity(entity, ped) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemoveAllStickyBombsFromEntity(_entity, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xA2F952104FC6DD4B | Since: 323
 */
export function requestCommerceItemImage(index) {
    return RequestCommerceItemImage(index);
}
/**
 * No comment provided
 *
 * Hash: 0x797F9C5E661D920E | Since: 1290
 */
export function reserveLocalMissionObjects(amount) {
    ReserveNetworkLocalObjects(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x2C8DF5D129595281 | Since: 1493
 */
export function reserveLocalMissionPeds(amount) {
    ReserveNetworkLocalPeds(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x42613035157E4208 | Since: 1103
 */
export function reserveLocalMissionVehicles(amount) {
    ReserveNetworkLocalVehicles(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x4E5C93BD0C32FBF8 | Since: 323
 */
export function reserveMissionObjects(amount) {
    ReserveNetworkMissionObjects(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xB60FEBA45333D36F | Since: 323
 */
export function reserveMissionPeds(amount) {
    ReserveNetworkMissionPeds(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x76B02E21ED27A469 | Since: 323
 */
export function reserveMissionVehicles(amount) {
    ReserveNetworkMissionVehicles(amount);
}
/**
 * Resets the entity ghost alpha to the default value (128)
 *
 * Hash: 0x17330EBF2F2124A8 | Since: 791
 */
export function resetGhostAlpha() {
    ResetGhostedEntityAlpha();
}
/**
 * No comment provided
 *
 * Hash: 0x444C4525ECE0A4B9 | Since: 323
 */
export function resetStoreGameTracking() {
    Citizen.invokeNative('0x444C4525ECE0A4B9');
}
/**
 * No comment provided
 *
 * Hash: 0x4BA166079D658ED4 | Since: 944
 */
export function setEntityGhostedForGhostPlayers(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkSetEntityGhostedWithOwner(_entity, toggle);
}
/**
 * Makes the provided entity visible for yourself for the current frame.
 *
 * Hash: 0xE135A9FF3F5D05D8 | Since: 323
 */
export function setEntityLocallyInvisible(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityLocallyInvisible(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x241E289B5C059EDC | Since: 323
 */
export function setEntityLocallyVisible(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityLocallyVisible(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xE0031D3C8F36AB82 | Since: 323
 */
export function setEntityVisibleInCutscene() {
    SetEntityVisibleInCutscene(undefined, false, false);
}
/**
 * Must be a value between 1 and 254
 *
 * Hash: 0x658500AE6D723A7E | Since: 791
 */
export function setGhostAlpha(alpha) {
    SetGhostedEntityAlpha(alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xD7B6C73CAD419BCF | Since: 944
 */
export function setInvertGhosting() {
    Citizen.invokeNative('0xD7B6C73CAD419BCF', false);
}
/**
 * No comment provided
 *
 * Hash: 0xFAE628F1E9ADB239 | Since: 323
 */
export function setLastViewedShopItem(p0, p2) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    Citizen.invokeNative('0xFAE628F1E9ADB239', p0, 0, p2);
}
/**
 * No comment provided
 *
 * Hash: 0x5FFE9B4144F9712F | Since: 323
 */
export function setLocalPlayerAsGhost(toggle) {
    SetLocalPlayerAsGhost(toggle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE5F773C1A1D9D168 | Since: 323
 */
export function setLocalPlayerInvisibleLocally(bIncludePlayersVehicle) {
    SetLocalPlayerInvisibleLocally(bIncludePlayersVehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xD1065D68947E7B6E | Since: 323
 */
export function setLocalPlayerVisibleInCutscene() {
    SetLocalPlayerVisibleInCutscene(false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7619364C82D3BF14 | Since: 323
 */
export function setLocalPlayerVisibleLocally(bIncludePlayersVehicle) {
    SetLocalPlayerVisibleLocally(bIncludePlayersVehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xAAA553E7DD28A457 | Since: 323
 */
export function setCutsceneEntities(toggle) {
    SetNetworkCutsceneEntities(toggle);
}
/**
 * `Enables a periodic ShapeTest within the NetBlender and invokes rage::netBlenderLinInterp::GoStraightToTarget (or some functional wrapper).`
 *
 * Hash: 0x838DA0936A24ED4D | Since: 944
 */
export function setEnableHighSpeedEdgeFallDetection(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetNetworkEnableVehiclePositionCorrection(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xA8A024587329F36A | Since: 323
 */
export function setIdAlwaysExistsForPlayer(netId, player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetNetworkIdAlwaysExistsForPlayer(netId, _player, toggle);
}
/**
 * "No Reassign" in CPhysicalScriptGameStateDataNode
 *
 * Hash: 0x9D724B400A7E8FFC | Since: 2189
 */
export function setIdCanBeReassigned(netId, toggle) {
    Citizen.invokeNative('0x9D724B400A7E8FFC', netId, toggle);
}
/**
 * Whether or not another player is allowed to take control of the entity
 *
 * Hash: 0x299EEB23175895FC | Since: 323
 */
export function setIdCanMigrate(netId, toggle) {
    SetNetworkIdCanMigrate(netId, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE05E81A888FA63C8 | Since: 323
 */
export function setIdExistsOnAllMachines(netId, toggle) {
    SetNetworkIdExistsOnAllMachines(netId, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x3FA36981311FA4FF | Since: 323
 */
export function setIdPassControlInTutorial(netId, state) {
    Citizen.invokeNative('0x3FA36981311FA4FF', netId, state);
}
/**
 * No comment provided
 *
 * Hash: 0xA6928482543022B4 | Since: 323
 */
export function setIdVisibleInCutscene(netId) {
    SetNetworkIdVisibleInCutscene(netId, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x32EBD154CB6B8B99 | Since: 505
 */
export function setIdVisibleInCutsceneHack(netId) {
    Citizen.invokeNative('0x32EBD154CB6B8B99', netId, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x76B3F29D3F967692 | Since: 2189
 */
export function setIdVisibleInCutsceneRemainHack() {
    Citizen.invokeNative('0x76B3F29D3F967692', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6274C4712850841E | Since: 323
 */
export function setVehicleAsGhost(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetNetworkVehicleAsGhost(_vehicle, toggle);
}
/**
 * `rage::netBlenderLinInterp::GetPositionMaxForUpdateLevel`
 *
 * Hash: 0xA2A707979FE754DC | Since: 877
 */
export function setVehicleMaxPositionDeltaMultiplier(vehicle, multiplier) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetNetworkVehiclePositionUpdateMultiplier(_vehicle, multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xEC51713AB6EC36E8 | Since: 323
 */
export function setVehicleRespotTimer(netId, time) {
    SetNetworkVehicleRespotTimer(netId, time, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x13F1FCB111B820B0 | Since: 877
 */
export function setNonParticipantsOfThisScriptAsGhosts() {
    Citizen.invokeNative('0x13F1FCB111B820B0', false);
}
/**
 * No comment provided
 *
 * Hash: 0x12B37D54667DB0B8 | Since: 323
 */
export function setPlayerInvisibleLocally(player, bIncludePlayersVehicle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerInvisibleLocally(_player, bIncludePlayersVehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xFAA10F1FAFB11AF2 | Since: 323
 */
export function setPlayerVisibleLocally(player, bIncludePlayersVehicle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerVisibleLocally(_player, bIncludePlayersVehicle);
}
/**
 * Enables ghosting between specific players
 *
 * Hash: 0xA7C511FA1C5BDA38 | Since: 463
 */
export function setRemotePlayerAsGhost(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetRelationshipToPlayer(_player, false);
}
/**
 * No comment provided
 *
 * Hash: 0x96320E6549DAE7B4 | Since: 2802
 */
export function setRemotePlayerVisibleInCutscene(player, locallyVisible) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x96320E6549DAE7B4', _player, locallyVisible);
}
/**
 * Access to the store for shark cards etc...
 *
 * Hash: 0x9641A9FF718E9C5E | Since: 323
 */
export function setStoreEnabled(toggle) {
    SetStoreEnabled(toggle);
}
/**
 * Starts a new singleplayer game (at the prologue).
 *
 * Hash: 0x593850C16A36B692 | Since: 323
 */
export function shutdownAndLaunchSinglePlayerGame() {
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
 * Hash: 0x9ECA15ADFE141431 | Since: 505
 */
export function shutdownAndLoadMostRecentSave() {
    return ShutdownAndLoadMostRecentSave();
}
/**
 * No comment provided
 *
 * Hash: 0x3448505B6E35262D | Since: 323
 */
export function textureDownloadGetName() {
    return TextureDownloadGetName(0);
}
/**
 * No comment provided
 *
 * Hash: 0x5776ED562C134687 | Since: 323
 */
export function textureDownloadHasFailed() {
    return TextureDownloadHasFailed(0);
}
/**
 * No comment provided
 *
 * Hash: 0x487EB90B98E9FB19 | Since: 323
 */
export function textureDownloadRelease() {
    TextureDownloadRelease(0);
}
/**
 * No comment provided
 *
 * Hash: 0x16160DA74A8E74A2 | Since: 323
 */
export function textureDownloadRequest(filePath, name) {
    return TextureDownloadRequest(filePath, name, false);
}
/**
 * No comment provided
 *
 * Hash: 0x0B203B4AFDE53A4F | Since: 323
 */
export function titleTextureDownloadRequest(filePath, name) {
    return TitleTextureDownloadRequest(filePath, name, false);
}
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0xB606E6CC59664972 | Since: 323
 */
export function triggerCommerceDataFetch() {
    Citizen.invokeNative('0xB606E6CC59664972', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE9B99B6853181409 | Since: 323
 */
export function ugcCancelQuery() {
    UgcCancelQuery();
}
/**
 * No comment provided
 *
 * Hash: 0x17440AA15D1D3739 | Since: 323
 */
export function ugcClearCreateResult() {
    UgcClearCreateResult();
}
/**
 * No comment provided
 *
 * Hash: 0xA1E5E0204A6FCC70 | Since: 323
 */
export function ugcClearModifyResult() {
    UgcClearModifyResult();
}
/**
 * No comment provided
 *
 * Hash: 0x61A885D3F7CFEE9A | Since: 323
 */
export function ugcClearOfflineQuery() {
    UgcClearOfflineQuery();
}
/**
 * No comment provided
 *
 * Hash: 0xBA96394A0EECFA65 | Since: 323
 */
export function ugcClearQueryResults() {
    UgcClearQueryResults();
}
/**
 * No comment provided
 *
 * Hash: 0x152D90E4C1B4738A | Since: 323
 */
export function ugcCopyContent() {
    return UgcCopyContent();
}
/**
 * No comment provided
 *
 * Hash: 0x24E4E51FC16305F9 | Since: 323
 */
export function ugcDidCreateSucceed() {
    return Citizen.invokeNative('0x24E4E51FC16305F9');
}
/**
 * No comment provided
 *
 * Hash: 0x162C23CA83ED0A62 | Since: 323
 */
export function ugcDidDescriptionRequestSucceed() {
    return Citizen.invokeNative('0x162C23CA83ED0A62', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x941E5306BCD7C2C7 | Since: 323
 */
export function ugcDidGetSucceed() {
    return UgcDidGetSucceed();
}
/**
 * No comment provided
 *
 * Hash: 0x793FF272D5B365F4 | Since: 323
 */
export function ugcDidModifySucceed() {
    return Citizen.invokeNative('0x793FF272D5B365F4');
}
/**
 * No comment provided
 *
 * Hash: 0x4D02279C83BE69FE | Since: 323
 */
export function ugcDidQueryCreatorsSucceed() {
    return Citizen.invokeNative('0x4D02279C83BE69FE');
}
/**
 * No comment provided
 *
 * Hash: 0xD5A4B59980401588 | Since: 323
 */
export function ugcGetBookmarkedContent() {
    return UgcGetBookmarkedContent(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x40F7E66472DF3E5C | Since: 323
 */
export function ugcGetCachedDescription() {
    return UgcGetCachedDescription(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA7BAB11E7C9C6C5A | Since: 323
 */
export function ugcGetContentCategory() {
    return UgcGetContentCategory(0);
}
/**
 * No comment provided
 *
 * Hash: 0x8C8D2739BA44AF0F | Since: 323
 */
export function ugcGetContentCreatedByLocalPlayer() {
    return Citizen.invokeNative('0x8C8D2739BA44AF0F', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x584770794D758C18 | Since: 323
 */
export function ugcGetContentCreatorGamerHandle() {
    return Citizen.invokeNative('0x584770794D758C18', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4A56710BAB5C4DB4 | Since: 3407
 */
export function ugcGetContentDescription(index) {
    return Citizen.invokeNative('0x4A56710BAB5C4DB4', index);
}
/**
 * No comment provided
 *
 * Hash: 0x7CF0448787B23758 | Since: 323
 */
export function ugcGetContentDescriptionHash() {
    return UgcGetContentDescriptionHash(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x37025B27D9B658B1 | Since: 323
 */
export function ugcGetContentFileVersion() {
    return UgcGetContentFileVersion(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3A17A27D75C74887 | Since: 323
 */
export function ugcGetContentHash() {
    return UgcGetContentHash();
}
/**
 * No comment provided
 *
 * Hash: 0x7FCC39C46C3C03BD | Since: 323
 */
export function ugcGetContentHasHiResPhoto() {
    return Citizen.invokeNative('0x7FCC39C46C3C03BD', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1D610EB0FEA716D9 | Since: 323
 */
export function ugcGetContentHasLoResPhoto() {
    return Citizen.invokeNative('0x1D610EB0FEA716D9', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x993CBE59D350D225 | Since: 323
 */
export function ugcGetContentHasPlayerBookmarked() {
    return UgcGetContentHasPlayerBookmarked(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x70EA8DA57840F9BE | Since: 323
 */
export function ugcGetContentHasPlayerRecord() {
    return UgcGetContentHasPlayerRecord(undefined);
}
/**
 * Return the mission id of a job.
 *
 * Hash: 0x55AA95F481D694D2 | Since: 323
 */
export function ugcGetContentId() {
    return UgcGetContentId(0);
}
/**
 * No comment provided
 *
 * Hash: 0x3054F114121C21EA | Since: 323
 */
export function ugcGetContentIsPublished() {
    return UgcGetContentIsPublished(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAEAB987727C5A8A4 | Since: 323
 */
export function ugcGetContentIsUsingScNickname() {
    return Citizen.invokeNative('0xAEAB987727C5A8A4', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA9240A96C74CCA13 | Since: 323
 */
export function ugcGetContentIsVerified() {
    return UgcGetContentIsVerified(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x32DD916F3F7C9672 | Since: 323
 */
export function ugcGetContentLanguage() {
    return UgcGetContentLanguage(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBF09786A7FCAB582 | Since: 323
 */
export function ugcGetContentName() {
    return UgcGetContentName(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE0A6138401BCB837 | Since: 323
 */
export function ugcGetContentNum() {
    return UgcGetContentNum();
}
/**
 * No comment provided
 *
 * Hash: 0xBAF6BABF9E7CCC13 | Since: 323
 */
export function ugcGetContentPath() {
    return UgcGetContentPath(0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1ACCFBA3D8DAB2EE | Since: 323
 */
export function ugcGetContentRating() {
    return UgcGetContentRating(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x759299C5BB31D2A9 | Since: 323
 */
export function ugcGetContentRatingCount() {
    return UgcGetContentRatingCount(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4E548C0D7AE39FF9 | Since: 323
 */
export function ugcGetContentRatingNegativeCount() {
    return UgcGetContentRatingNegativeCount(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x87E5C46C187FE0AE | Since: 323
 */
export function ugcGetContentRatingPositiveCount() {
    return UgcGetContentRatingPositiveCount(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x769951E2455E2EB5 | Since: 323
 */
export function ugcGetContentTotal() {
    return UgcGetContentTotal();
}
/**
 * No comment provided
 *
 * Hash: 0xCFD115B373C0DF63 | Since: 323
 */
export function ugcGetContentUpdatedDate() {
    return UgcGetContentUpdatedDate(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCD67AD041A394C9C | Since: 323
 */
export function ugcGetContentUserId() {
    return UgcGetContentUserId(0);
}
/**
 * No comment provided
 *
 * Hash: 0x703F12425ECA8BF5 | Since: 323
 */
export function ugcGetContentUserName() {
    return UgcGetContentUserName(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC55A0B40FFB1ED23 | Since: 323
 */
export function ugcGetCreateContentId() {
    return UgcGetCreateContentId();
}
/**
 * No comment provided
 *
 * Hash: 0xFBC5E768C7A77A6A | Since: 323
 */
export function ugcGetCreateResult() {
    return UgcGetCreateResult();
}
/**
 * No comment provided
 *
 * Hash: 0xB746D20B17F2A229 | Since: 323
 */
export function ugcGetCreatorsByUserId() {
    return Citizen.invokeNative('0xB746D20B17F2A229');
}
/**
 * No comment provided
 *
 * Hash: 0x597F8DBA9B206FC7 | Since: 323
 */
export function ugcGetCreatorNum() {
    return UgcGetCreatorNum();
}
/**
 * No comment provided
 *
 * Hash: 0x9F6E2821885CAEE2 | Since: 323
 */
export function ugcGetCrewContent() {
    return UgcGetCrewContent(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF9E1CCAE8BA4C281 | Since: 323
 */
export function ugcGetFriendContent() {
    return UgcGetFriendContent(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x678BB03C1A3BD51E | Since: 323
 */
export function ugcGetGetByCategory() {
    return UgcGetGetByCategory(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x815E5E3073DA1D67 | Since: 323
 */
export function ugcGetGetByContentId(contentId, contentTypeName) {
    return SetBalanceAddMachine(contentId, contentTypeName);
}
/**
 * No comment provided
 *
 * Hash: 0xB8322EEB38BE7C26 | Since: 323
 */
export function ugcGetGetByContentIds(dataCount, contentTypeName) {
    return SetBalanceAddMachines(dataCount, contentTypeName);
}
/**
 * No comment provided
 *
 * Hash: 0x5A0A3D1A186A5508 | Since: 323
 */
export function ugcGetModifyResult() {
    return UgcGetModifyResult();
}
/**
 * No comment provided
 *
 * Hash: 0xA7862BC5ED1DFD7E | Since: 323
 */
export function ugcGetMostRecentlyCreatedContent() {
    return Citizen.invokeNative('0xA7862BC5ED1DFD7E', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x97A770BEEF227E2B | Since: 323
 */
export function ugcGetMostRecentlyPlayedContent() {
    return NetworkGetBackgroundLoadingRecipients(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3195F8DD0D531052 | Since: 323
 */
export function ugcGetMyContent() {
    return UgcGetMyContent(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEDF7F927136C224B | Since: 323
 */
export function ugcGetQueryResult() {
    return UgcGetQueryResult();
}
/**
 * Return the root content id of a job.
 *
 * Hash: 0xC0173D6BFF4E0348 | Since: 323
 */
export function ugcGetRootContentId() {
    return UgcGetRootContentId(0);
}
/**
 * No comment provided
 *
 * Hash: 0x5324A0E3E4CE3570 | Since: 323
 */
export function ugcGetTopRatedContent() {
    return Citizen.invokeNative('0x5324A0E3E4CE3570', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5E24341A7F92A74B | Since: 323
 */
export function ugcHasCreateFinished() {
    return UgcHasCreateFinished();
}
/**
 * No comment provided
 *
 * Hash: 0xEBFA8D50ADDC54C4 | Since: 323
 */
export function ugcHasDescriptionRequestFinished() {
    return Citizen.invokeNative('0xEBFA8D50ADDC54C4', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x02ADA21EA2F6918F | Since: 323
 */
export function ugcHasGetFinished() {
    return UgcHasGetFinished();
}
/**
 * No comment provided
 *
 * Hash: 0x299EF3C576773506 | Since: 323
 */
export function ugcHasModifyFinished() {
    return UgcHasModifyFinished();
}
/**
 * No comment provided
 *
 * Hash: 0xC33E7CBC06EC1A8D | Since: 3095
 */
export function ugcHasPermissionToWrite() {
    return Citizen.invokeNative('0xC33E7CBC06EC1A8D');
}
/**
 * No comment provided
 *
 * Hash: 0x63B406D7884BFA95 | Since: 323
 */
export function ugcHasQueryCreatorsFinished() {
    return Citizen.invokeNative('0x63B406D7884BFA95');
}
/**
 * No comment provided
 *
 * Hash: 0x9FEDF86898F100E9 | Since: 323
 */
export function ugcIsCreating() {
    return Citizen.invokeNative('0x9FEDF86898F100E9');
}
/**
 * No comment provided
 *
 * Hash: 0x2D5DC831176D0114 | Since: 323
 */
export function ugcIsDescriptionRequestInProgress() {
    return Citizen.invokeNative('0x2D5DC831176D0114', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD53ACDBEF24A46E8 | Since: 323
 */
export function ugcIsGetting() {
    return UgcIsGetting();
}
/**
 * No comment provided
 *
 * Hash: 0xF53E48461B71EECB | Since: 323
 */
export function ugcIsLanguageSupported() {
    return UgcIsLanguageSupported(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x45E816772E93A9DB | Since: 323
 */
export function ugcIsModifying() {
    return Citizen.invokeNative('0x45E816772E93A9DB');
}
/**
 * No comment provided
 *
 * Hash: 0x5CAE833B0EE0C500 | Since: 323
 */
export function ugcLoadOfflineQuery() {
    return UgcPoliciesMakePrivate(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1DE0F5F50D723CAA | Since: 323
 */
export function ugcPublish(contentId, baseContentId, contentTypeName) {
    return UgcPublish(contentId, baseContentId, contentTypeName);
}
/**
 * No comment provided
 *
 * Hash: 0x692D58DF40657E8C | Since: 323
 */
export function ugcQueryByCategory() {
    return Citizen.invokeNative('0x692D58DF40657E8C', undefined, undefined, undefined, undefined, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x158EC424F35EC469 | Since: 323
 */
export function ugcQueryByContentId(contentId, latestVersion, contentTypeName) {
    return UgcQueryByContentId(contentId, latestVersion, contentTypeName);
}
/**
 * No comment provided
 *
 * Hash: 0xC7397A83F7A2A462 | Since: 323
 */
export function ugcQueryByContentIds(count, latestVersion, contentTypeName) {
    return UgcQueryByContentIds(count, latestVersion, contentTypeName);
}
/**
 * No comment provided
 *
 * Hash: 0x6D4CB481FAC835E8 | Since: 323
 */
export function ugcQueryMostRecentlyCreatedContent(offset, count, contentTypeName) {
    return UgcQueryRecentlyCreatedContent(offset, count, contentTypeName, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9BF438815F5D96EA | Since: 323
 */
export function ugcQueryMyContent() {
    return UgcQueryMyContent(undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x68103E2247887242 | Since: 323
 */
export function ugcReleaseAllCachedDescriptions() {
    Citizen.invokeNative('0x68103E2247887242');
}
/**
 * No comment provided
 *
 * Hash: 0x5A34CD9C3C5BEC44 | Since: 323
 */
export function ugcReleaseCachedDescription() {
    return Citizen.invokeNative('0x5A34CD9C3C5BEC44', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5E0165278F6339EE | Since: 323
 */
export function ugcRequestCachedDescription() {
    return UgcRequestCachedDescription(0);
}
/**
 * No comment provided
 *
 * Hash: 0x171DF6A0C07FB3DC | Since: 323
 */
export function ugcRequestContentDataFromIndex() {
    return UgcRequestContentDataFromIndex(0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x7FD2990AF016795E | Since: 323
 */
export function ugcRequestContentDataFromParams(contentTypeName, contentId) {
    return UgcRequestContentDataFromParams(contentTypeName, contentId, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x274A1519DFC1094F | Since: 323
 */
export function ugcSetBookmarked(contentId, bookmarked, contentTypeName) {
    return UgcSetBookmarked(contentId, bookmarked, contentTypeName);
}
/**
 * No comment provided
 *
 * Hash: 0xD05D1A6C74DA3498 | Since: 323
 */
export function ugcSetDeleted() {
    return UgcSetDeleted(false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF98DDE0A8ED09323 | Since: 323
 */
export function ugcSetQueryDataFromOffline() {
    UgcSetQueryDataFromOffline(false);
}
/**
 * No comment provided
 *
 * Hash: 0xFD75DABC0957BF33 | Since: 323
 */
export function ugcSetUsingOfflineContent() {
    Citizen.invokeNative('0xFD75DABC0957BF33', false);
}
/**
 * No comment provided
 *
 * Hash: 0x308F96458B7087CC | Since: 323
 */
export function ugcTextureDownloadRequest() {
    return UgcTextureDownloadRequest(undefined, 0, 0, 0, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC87E740D9F3872CC | Since: 323
 */
export function ugcWasQueryForceCancelled() {
    return Citizen.invokeNative('0xC87E740D9F3872CC');
}
/**
 * No comment provided
 *
 * Hash: 0x77758139EC9B66C7 | Since: 323
 */
export function usePlayerColourInsteadOfTeamColour(toggle) {
    UsePlayerColourInsteadOfTeamColour(toggle);
}
/**
 * calls from vehicle to net.
 *
 *
 * Hash: 0xB4C94523F023419C | Since: 323
 */
export function vehToNet(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return VehToNet(_vehicle);
}
/**
 * NETWORK_CAN_*
 *
 * Hash: 0x9F633448E4C73207 | Since: 3258
 */
export function canTextFromGamerBeViewed() {
    return Citizen.invokeNative('0x9F633448E4C73207');
}
/**
 * No comment provided
 *
 * Hash: 0x0C1BF187985B15C8 | Since: 3717
 */
export function clearClockSyncTimeOverride(startGlobalTransition, transitionTime) {
    Citizen.invokeNative('0x0C1BF187985B15C8', startGlobalTransition, transitionTime);
}
/**
 * Clears tunable contexts that were set up using _NETWORK_SET_TUNABLES_REGISTRATION_CONTEXTS
 *
 * Hash: 0x0C87C83C8950432B | Since: 3258
 */
export function clearTunablesRegistrationContexts() {
    Citizen.invokeNative('0x0C87C83C8950432B');
}
/**
 * If the restart reason is 4 (BE_RESTART_EF_DISABLED_WITH_BE), will cause the game to exit with exit code 622011. Otherwise exits with code 622010. Has no effect when a restart hasn't been requested (reason == 0 or reason > 6).
 *
 * Note that this 'confirmation' itself does not restart the game, a call to QUIT_GAME or similar is required afterwards.
 *
 * Hash: 0x0A141818CA2311AD | Since: 3323
 */
export function confirmGameRestart() {
    Citizen.invokeNative('0x0A141818CA2311AD');
}
/**
 * communicationType: 0 = VOICE; 1 = TEXT_CHAT; 2 = TEXT_MESSAGE; 3 = EMAIL; 4 = USER_CONTENT; 5 = USER_TEXT
 *
 * Hash: 0xDBDF80673BBA3D65 | Since: 3095
 */
export function doesCommunicationGroupHavePermission(communicationType) {
    return Citizen.invokeNative('0xDBDF80673BBA3D65', communicationType);
}
/**
 * No comment provided
 *
 * Hash: 0x20C12650830A64EC | Since: 3570
 */
export function doesCommunicationGroupHaveSettingsEnabled(communicationType) {
    return Citizen.invokeNative('0x20C12650830A64EC', communicationType);
}
/**
 * No comment provided
 *
 * Hash: 0x214CA1730793EBA8 | Since: 3570
 */
export function getAccessCodeLabelBody(accessCode) {
    return Citizen.invokeNative('0x214CA1730793EBA8', accessCode);
}
/**
 * No comment provided
 *
 * Hash: 0x967E6FB554E1B6DE | Since: 3570
 */
export function getAccessCodeLabelHeading(accessCode) {
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
 * Hash: 0xCBA50F371E45B90D | Since: 3323
 */
export function getBattleyeErrorMessageLabel(errorCode) {
    return Citizen.invokeNative('0xCBA50F371E45B90D', errorCode);
}
/**
 * No comment provided
 *
 * Hash: 0xE448693B3EA3B92C | Since: 3586
 */
export function getBroadcastDataHostUpdateSize(scriptNameHash, instance, positionHash, handlerNum) {
    if (typeof scriptNameHash === 'string')
        scriptNameHash = GetHashKey(scriptNameHash);
    if (typeof positionHash === 'string')
        positionHash = GetHashKey(positionHash);
    return Citizen.invokeNative('0xE448693B3EA3B92C', scriptNameHash, instance, positionHash, handlerNum);
}
/**
 * No comment provided
 *
 * Hash: 0xAC3F722321800755 | Since: 3586
 */
export function getBroadcastDataPlayerUpdateSize(scriptNameHash, instance, positionHash, handlerNum) {
    if (typeof scriptNameHash === 'string')
        scriptNameHash = GetHashKey(scriptNameHash);
    if (typeof positionHash === 'string')
        positionHash = GetHashKey(positionHash);
    return Citizen.invokeNative('0xAC3F722321800755', scriptNameHash, instance, positionHash, handlerNum);
}
/**
 * No comment provided
 *
 * Hash: 0x97F35B898D2D067F | Since: 3570
 */
export function getCommunicationGroupDefaultFlags(communicationType) {
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
 * Hash: 0x40DF02F371F40883 | Since: 3095
 */
export function getCommunicationGroupFlags(communicationType) {
    return Citizen.invokeNative('0x40DF02F371F40883', communicationType);
}
/**
 * No comment provided
 *
 * Hash: 0xBF66ACD9AE81A99F | Since: 3570
 */
export function getCommunicationGroupValue(communicationType) {
    return Citizen.invokeNative('0xBF66ACD9AE81A99F', communicationType);
}
/**
 * No comment provided
 *
 * Hash: 0x69D05E1EAD74B9DD | Since: 3717
 */
export function getDumpOfAssetVerifier() {
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
 * Hash: 0x7F7E8401F81CB65B | Since: 3323
 */
export function getGameRestartReason() {
    return Citizen.invokeNative('0x7F7E8401F81CB65B');
}
/**
 * Returns the restart reason as a string, see _NETWORK_GET_GAME_RESTART_REASON. Returns a null pointer when a restart hasn't been requested (reason == 0 or reason > 6).
 *
 * Hash: 0x47B11D51FC50A259 | Since: 3323
 */
export function getGameRestartReasonMessageLabel() {
    return Citizen.invokeNative('0x47B11D51FC50A259');
}
/**
 * No comment provided
 *
 * Hash: 0x72C8588ABE22C972 | Since: 3586
 */
export function getHostBroadcastDataSizeUnsynced(scriptNameHash, instance, positionHash, handlerNum) {
    if (typeof scriptNameHash === 'string')
        scriptNameHash = GetHashKey(scriptNameHash);
    if (typeof positionHash === 'string')
        positionHash = GetHashKey(positionHash);
    return Citizen.invokeNative('0x72C8588ABE22C972', scriptNameHash, instance, positionHash, handlerNum);
}
/**
 * No comment provided
 *
 * Hash: 0xB99CD664FD4720A1 | Since: 3586
 */
export function getPlayerBroadcastDataSizeUnsynced(scriptNameHash, instance, positionHash, handlerNum) {
    if (typeof scriptNameHash === 'string')
        scriptNameHash = GetHashKey(scriptNameHash);
    if (typeof positionHash === 'string')
        positionHash = GetHashKey(positionHash);
    return Citizen.invokeNative('0xB99CD664FD4720A1', scriptNameHash, instance, positionHash, handlerNum);
}
/**
 * No comment provided
 *
 * Hash: 0x04BD27B5ACB67067 | Since: 2802
 */
export function getRandomFloatRanged(rangeStart, rangeEnd) {
    return Citizen.invokeNative('0x04BD27B5ACB67067', rangeStart, rangeEnd);
}
/**
 * Checks if the given tunable exists and returns its value. Otherwise returns defaultValue.
 * Possible tunable contexts must first be set up using _NETWORK_SET_TUNABLES_REGISTRATION_CONTEXTS.
 *
 * Hash: 0xB327CF1B8C2C0EA3 | Since: 3258
 */
export function getTunablesRegistrationBool(tunableName, defaultValue) {
    if (typeof tunableName === 'string')
        tunableName = GetHashKey(tunableName);
    return Citizen.invokeNative('0xB327CF1B8C2C0EA3', tunableName, defaultValue);
}
/**
 * Checks if the given tunable exists and returns its value. Otherwise returns defaultValue.
 * Possible tunable contexts must first be set up using _NETWORK_SET_TUNABLES_REGISTRATION_CONTEXTS.
 *
 * Hash: 0x367E5E33E7F0DD1A | Since: 3258
 */
export function getTunablesRegistrationFloat(tunableName, defaultValue) {
    if (typeof tunableName === 'string')
        tunableName = GetHashKey(tunableName);
    return Citizen.invokeNative('0x367E5E33E7F0DD1A', tunableName, defaultValue);
}
/**
 * Checks if the given tunable exists and returns its value. Otherwise returns defaultValue.
 * Possible tunable contexts must first be set up using _NETWORK_SET_TUNABLES_REGISTRATION_CONTEXTS.
 *
 * Hash: 0x0D94071E55F4C9CE | Since: 3258
 */
export function getTunablesRegistrationInt(tunableName, defaultValue) {
    if (typeof tunableName === 'string')
        tunableName = GetHashKey(tunableName);
    return Citizen.invokeNative('0x0D94071E55F4C9CE', tunableName, defaultValue);
}
/**
 * _NETWORK_HAS_P*
 * checkType 3 is similar as using 0x9F633448E4C73207
 *
 * Hash: 0x62E29CDA11F9C230 | Since: 3258
 */
export function hasPlayerPassedCheckType(checkType) {
    return Citizen.invokeNative('0x62E29CDA11F9C230', checkType);
}
/**
 * Checks for privilege 29
 *
 * Hash: 0xD9719341663C385F | Since: 3095
 */
export function hasRosPrivilegeMpTextCommunication() {
    return Citizen.invokeNative('0xD9719341663C385F');
}
/**
 * Checks for privilege 30
 *
 * Hash: 0x8956A309BE90057C | Since: 3095
 */
export function hasRosPrivilegeMpVoiceCommunication() {
    return Citizen.invokeNative('0x8956A309BE90057C');
}
/**
 * Checks for privilege 31
 *
 * Hash: 0x9BA54B3CFB82ADDD | Since: 3258
 */
export function hasRosPrivilegeReporting() {
    return Citizen.invokeNative('0x9BA54B3CFB82ADDD');
}
/**
 * Appears to be PlayStation-specific. Always returns true on other platforms if signed in with the primary user profile
 *
 * Hash: 0xE1E02509169C124E | Since: 3095
 */
export function havePlatformCommunicationPrivileges() {
    return Citizen.invokeNative('0xE1E02509169C124E');
}
/**
 * No comment provided
 *
 * Hash: 0xCFE359CCCFE359CC | Since: 3258
 */
export function hideEntityInTutorialSession(netHandle, hide) {
    Citizen.invokeNative('0xCFE359CCCFE359CC', netHandle, hide);
}
/**
 * Clears the failed invite join alert reason
 *
 * Hash: 0x8EF5F5811A940F82 | Since: 3179
 */
export function inviteClearJoinFailReason() {
    Citizen.invokeNative('0x8EF5F5811A940F82');
}
/**
 * Retrieves the failed invite join alert reason
 *
 * Hash: 0x7B335F84501145BB | Since: 3179
 */
export function inviteGetJoinFailReason() {
    return Citizen.invokeNative('0x7B335F84501145BB');
}
/**
 * Hardcoded to return 0.
 *
 * Hash: 0x0292BD7F3766CEBC | Since: 3095
 */
export function isAmericasVersion() {
    return Citizen.invokeNative('0x0292BD7F3766CEBC');
}
/**
 * No comment provided
 *
 * Hash: 0x4666CD7431DE98E2 | Since: 3717
 */
export function isSpecialTutorialSession() {
    return Citizen.invokeNative('0x4666CD7431DE98E2');
}
/**
 * Returns the name from given friend gamer handle.
 *
 * Hash: 0x338ECE3637937BC2 | Since: 3258
 */
export function loadGamerDisplayName() {
    return Citizen.invokeNative('0x338ECE3637937BC2');
}
/**
 * For the XboxPC version this returns true if XPRIVILEGE_MULTIPLAYER_SESSIONS is granted but XPRIVILEGE_CROSS_PLAY is NOT granted.
 * For more information, see https://learn.microsoft.com/en-us/gaming/gdk/_content/gc/live/features/identity/privileges/concepts/live-user-privileges-client#privilege-ids-to-check
 *
 * Always returns false for non-XboxPC versions.
 *
 * Hash: 0xA6BC0D9BCF9662FA | Since: 3504
 */
export function multiplayerCrossplayNotAllowed() {
    return Citizen.invokeNative('0xA6BC0D9BCF9662FA');
}
/**
 * No comment provided
 *
 * Hash: 0xE0128328CF1FD9F4 | Since: 3095
 */
export function sessionLeaveIncludingReason(leaveFlags, leaveReason) {
    return Citizen.invokeNative('0xE0128328CF1FD9F4', leaveFlags, leaveReason);
}
/**
 * communicationType: see 0xDBDF80673BBA3D65
 * communicationGroupFlag: see 0x40DF02F371F40883
 *
 * Hash: 0xE549F846DE7D32D5 | Since: 3095
 */
export function setCommunicationGroupFlags(communicationType, communicationGroupFlag) {
    Citizen.invokeNative('0xE549F846DE7D32D5', communicationType, communicationGroupFlag);
}
/**
 * No comment provided
 *
 * Hash: 0x67F7C81C1395672A | Since: 3717
 */
export function setIgnoreVehicleRammedByNonVehicle(toggle) {
    Citizen.invokeNative('0x67F7C81C1395672A', toggle);
}
/**
 * Sets up tunable contexts for _NETWORK_GET_TUNABLES_REGISTRATION_{BOOL|INT|FLOAT}
 *
 * Hash: 0x014A73449675121D | Since: 3258
 */
export function setTunablesRegistrationContexts() {
    return Citizen.invokeNative('0x014A73449675121D');
}
/**
 * No comment provided
 *
 * Hash: 0x35AEB4AC7C73C6E1 | Since: 3717
 */
export function setTutorialSpecialSession(toggle) {
    Citizen.invokeNative('0x35AEB4AC7C73C6E1', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE9D0244ACBEE1BC4 | Since: 3258
 */
export function triggerDamageEventForZeroPedDamage(entity, trigger) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xE9D0244ACBEE1BC4', _entity, trigger);
}
/**
 * reportData includes mc, ceo, yacht and licenceplate names
 *
 * Hash: 0x527803286A8B6C81 | Since: 3258
 */
export function setFreemodeReportData() {
    return Citizen.invokeNative('0x527803286A8B6C81');
}
