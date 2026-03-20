/**
 * Returns the nickname of the logged-in Rockstar Social Club account.
 *
 * Hash: 0x198D161F458ECC7F | Since: 323 | API-Set: unknown
 */
export function scAccountInfoGetNickname() {
    return ScGetNickname();
}
/**
 * No comment provided
 *
 * Hash: 0x225798743970412B | Since: 323 | API-Set: unknown
 */
export function scAchievementInfoStatus() {
    return Citizen.invokeNative('0x225798743970412B');
}
/**
 * No comment provided
 *
 * Hash: 0xBFA0A56A817C6C7D | Since: 323 | API-Set: unknown
 */
export function scCacheNewRockstarMsgs(toggle) {
    SetHandleRockstarMessageViaScript(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC2C97EA97711D1AE | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetDisplayName() {
    return Citizen.invokeNative('0xC2C97EA97711D1AE');
}
/**
 * No comment provided
 *
 * Hash: 0x19853B5B17D77BCA | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetDisplayNameById() {
    return Citizen.invokeNative('0x19853B5B17D77BCA', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x33DF47CC0642061B | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetDisplayNameForType() {
    return Citizen.invokeNative('0x33DF47CC0642061B', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4ED9C8D6DA297639 | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetEventId() {
    return Citizen.invokeNative('0x4ED9C8D6DA297639');
}
/**
 * No comment provided
 *
 * Hash: 0x4A7D6E727F941747 | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetEventIdForType() {
    return Citizen.invokeNative('0x4A7D6E727F941747', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x50A8A36201DBF83E | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataFloat() {
    return Citizen.invokeNative('0x50A8A36201DBF83E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC5A35C73B68F3C49 | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataFloatById() {
    return Citizen.invokeNative('0xC5A35C73B68F3C49', 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2570E26BE63964E3 | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataFloatForType() {
    return Citizen.invokeNative('0x2570E26BE63964E3', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x710BCDA8071EDED1 | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataInt() {
    return Citizen.invokeNative('0x710BCDA8071EDED1', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8CC469AB4D349B7C | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataIntById() {
    return Citizen.invokeNative('0x8CC469AB4D349B7C', 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE75A4A2E5E316D86 | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataIntForType() {
    return Citizen.invokeNative('0xE75A4A2E5E316D86', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9DE5D2F723575ED0 | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataString() {
    return Citizen.invokeNative('0x9DE5D2F723575ED0', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x699E4A5C8C893A18 | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataStringById() {
    return Citizen.invokeNative('0x699E4A5C8C893A18', 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1D12A56FC95BE92E | Since: 323 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataStringForType() {
    return Citizen.invokeNative('0x1D12A56FC95BE92E', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFF8F3A92B75ED67A | Since: 323 | API-Set: unknown
 */
export function scCommunityEventIsActive() {
    return Citizen.invokeNative('0xFF8F3A92B75ED67A');
}
/**
 * No comment provided
 *
 * Hash: 0xA468E0BE12B12C70 | Since: 323 | API-Set: unknown
 */
export function scCommunityEventIsActiveById() {
    return Citizen.invokeNative('0xA468E0BE12B12C70', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x450819D8CF90C416 | Since: 323 | API-Set: unknown
 */
export function scCommunityEventIsActiveForType() {
    return Citizen.invokeNative('0x450819D8CF90C416', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x44ACA259D67651DB | Since: 323 | API-Set: unknown
 */
export function scEmailDeleteEmails() {
    return Citizen.invokeNative('0x44ACA259D67651DB', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4737980E8A283806 | Since: 323 | API-Set: unknown
 */
export function scEmailGetEmailAtIndex() {
    return Citizen.invokeNative('0x4737980E8A283806', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x7DB18CA8CAD5B098 | Since: 505 | API-Set: unknown
 */
export function scEmailGetNumRetrievedEmails() {
    return Citizen.invokeNative('0x7DB18CA8CAD5B098');
}
/**
 * No comment provided
 *
 * Hash: 0x16DA8172459434AA | Since: 323 | API-Set: unknown
 */
export function scEmailGetRetrievalStatus() {
    return Citizen.invokeNative('0x16DA8172459434AA');
}
/**
 * No comment provided
 *
 * Hash: 0x55DF6DB45179236E | Since: 323 | API-Set: unknown
 */
export function scEmailMessageClearRecipList() {
    ScEmailMessageClearRecipList();
}
/**
 * No comment provided
 *
 * Hash: 0x2330C12A7A605D16 | Since: 323 | API-Set: unknown
 */
export function scEmailMessagePushGamerToRecipList() {
    return ScEmailMessagePushGamerToRecipList();
}
/**
 * No comment provided
 *
 * Hash: 0x040ADDCBAFA1018A | Since: 323 | API-Set: unknown
 */
export function scEmailRetrieveEmails(offset, limit) {
    ScInboxGetEmails(offset, limit);
}
/**
 * No comment provided
 *
 * Hash: 0x116FB94DC4B79F17 | Since: 323 | API-Set: unknown
 */
export function scEmailSendEmail() {
    Citizen.invokeNative('0x116FB94DC4B79F17', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x07DBD622D9533857 | Since: 505 | API-Set: unknown
 */
export function scEmailSetCurrentEmailTag() {
    return Citizen.invokeNative('0x07DBD622D9533857', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2D874D4AE612A65F | Since: 323 | API-Set: unknown
 */
export function scGamerdataGetActiveXpBonus() {
    return Citizen.invokeNative('0x2D874D4AE612A65F');
}
/**
 * No comment provided
 *
 * Hash: 0x8416FE4E4629D7D7 | Since: 323 | API-Set: unknown
 */
export function scGamerdataGetBool(name) {
    return ScGamerdataGetBool(name);
}
/**
 * No comment provided
 *
 * Hash: 0xA770C8EEC6FB2AC5 | Since: 323 | API-Set: unknown
 */
export function scGamerdataGetFloat(name) {
    return ScGamerdataGetFloat(name);
}
/**
 * No comment provided
 *
 * Hash: 0xC85A7127E7AD02AA | Since: 323 | API-Set: unknown
 */
export function scGamerdataGetInt(name) {
    return ScGamerdataGetInt(name);
}
/**
 * No comment provided
 *
 * Hash: 0x7FFCBFEE44ECFABF | Since: 323 | API-Set: unknown
 */
export function scGamerdataGetString(name) {
    return Citizen.invokeNative('0x7FFCBFEE44ECFABF', name);
}
/**
 * No comment provided
 *
 * Hash: 0xDF649C4E9AFDD788 | Since: 323 | API-Set: unknown
 */
export function scGetNewRockstarMsg() {
    return RockstarMessageGetString();
}
/**
 * Same as HAS_ACHIEVEMENT_BEEN_PASSED
 *
 * Hash: 0x418DC16FAE452C1C | Since: 323 | API-Set: unknown
 */
export function scHasAchievementBeenPassed(achievementId) {
    return ScGetHasAchievementBeenPassed(achievementId);
}
/**
 * No comment provided
 *
 * Hash: 0xBC1CC91205EC8D6E | Since: 323 | API-Set: unknown
 */
export function scHasNewRockstarMsg() {
    return IsRockstarMessageReadyForScript();
}
/**
 * No comment provided
 *
 * Hash: 0x87E0052F08BD64E6 | Since: 323 | API-Set: unknown
 */
export function scInboxGetBountyDataAtIndex(index) {
    return ScInboxMessageGetBountyData(index);
}
/**
 * No comment provided
 *
 * Hash: 0x93028F1DB42BFD08 | Since: 323 | API-Set: unknown
 */
export function scInboxGetMessageIsReadAtIndex(msgIndex) {
    return ScInboxGetMessageIsReadAtIndex(msgIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xBB8EA16ECBC976C4 | Since: 323 | API-Set: unknown
 */
export function scInboxGetMessageTypeAtIndex(msgIndex) {
    return ScInboxGetMessageTypeAtIndex(msgIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x03A93FF1A2CA0864 | Since: 323 | API-Set: unknown
 */
export function scInboxGetTotalNumMessages() {
    return ScInboxGetTotalNumMessages();
}
/**
 * No comment provided
 *
 * Hash: 0x9A2C8064B6C1E41A | Since: 323 | API-Set: unknown
 */
export function scInboxMessageDoApply() {
    return ScInboxMessageDoApply(0);
}
/**
 * No comment provided
 *
 * Hash: 0xFFE5C16F402D851D | Since: 323 | API-Set: unknown
 */
export function scInboxMessageGetDataBool() {
    return ScInboxMessageGetDataBool(0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA00EFE4082C4056E | Since: 323 | API-Set: unknown
 */
export function scInboxMessageGetDataInt(context) {
    return ScInboxMessageGetDataInt(0, context);
}
/**
 * No comment provided
 *
 * Hash: 0x7572EF42FC6A9B6D | Since: 323 | API-Set: unknown
 */
export function scInboxMessageGetDataString(context) {
    return ScInboxMessageGetDataString(0, context);
}
/**
 * No comment provided
 *
 * Hash: 0xF3E31D16CBDCB304 | Since: 323 | API-Set: unknown
 */
export function scInboxMessageGetRawTypeAtIndex() {
    return ScInboxMessageGetString(0);
}
/**
 * No comment provided
 *
 * Hash: 0x69D82604A1A5A254 | Since: 323 | API-Set: unknown
 */
export function scInboxMessageGetUgcdata() {
    return ScInboxMessageGetUgcdata(0);
}
/**
 * No comment provided
 *
 * Hash: 0xDA024BDBD600F44A | Since: 323 | API-Set: unknown
 */
export function scInboxMessagePushGamerT0RecipList() {
    return ScInboxMessagePushGamerToEventRecipList();
}
/**
 * No comment provided
 *
 * Hash: 0xA68D3D229F4F3B06 | Since: 323 | API-Set: unknown
 */
export function scInboxSendUgcstatupdateToRecipList() {
    return ScInboxMessageSendUgcStatUpdateEvent();
}
/**
 * No comment provided
 *
 * Hash: 0x2C015348CF19CA1D | Since: 323 | API-Set: unknown
 */
export function scInboxSetMessageAsReadAtIndex(msgIndex) {
    return ScInboxMessagePop(msgIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x1989C6E6F67E76A8 | Since: 323 | API-Set: unknown
 */
export function scLicenseplateAdd(plateText) {
    return ScLicenseplateAdd(plateText);
}
/**
 * No comment provided
 *
 * Hash: 0xF6BAAAF762E1BF40 | Since: 323 | API-Set: unknown
 */
export function scLicenseplateCheckString() {
    return Citizen.invokeNative('0xF6BAAAF762E1BF40', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x07C61676E5BB52CD | Since: 323 | API-Set: unknown
 */
export function scLicenseplateGetAddIsPending(token) {
    return ScLicenseplateGetAddIsPending(token);
}
/**
 * No comment provided
 *
 * Hash: 0x8147FFF6A718E1AD | Since: 323 | API-Set: unknown
 */
export function scLicenseplateGetAddStatus(token) {
    return ScLicenseplateGetAddStatus(token);
}
/**
 * No comment provided
 *
 * Hash: 0x9237E334F6E43156 | Since: 323 | API-Set: unknown
 */
export function scLicenseplateGetCheckIsPending() {
    return Citizen.invokeNative('0x9237E334F6E43156', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF22CA0FD74B80E7A | Since: 323 | API-Set: unknown
 */
export function scLicenseplateGetCheckIsValid() {
    return Citizen.invokeNative('0xF22CA0FD74B80E7A', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x700569DBA175A77C | Since: 323 | API-Set: unknown
 */
export function scLicenseplateGetCount(token) {
    return ScLicenseplateGetCount(token);
}
/**
 * No comment provided
 *
 * Hash: 0xD302E99EDF0449CF | Since: 323 | API-Set: unknown
 */
export function scLicenseplateGetIsvalidIsPending(token) {
    return ScLicenseplateGetIsvalidIsPending(token);
}
/**
 * No comment provided
 *
 * Hash: 0x5C4EBFFA98BDB41C | Since: 323 | API-Set: unknown
 */
export function scLicenseplateGetIsvalidStatus(token) {
    return ScLicenseplateGetIsvalidStatus(token);
}
/**
 * No comment provided
 *
 * Hash: 0x1D4446A62D35B0D0 | Since: 323 | API-Set: unknown
 */
export function scLicenseplateGetPlate(token, plateIndex) {
    return ScLicenseplateGetPlate(token, plateIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x2E89990DDFF670C3 | Since: 323 | API-Set: unknown
 */
export function scLicenseplateGetPlateData(token, plateIndex) {
    return ScLicenseplateGetPlateData(token, plateIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x0F73393BAC7E6730 | Since: 323 | API-Set: unknown
 */
export function scLicenseplateIsvalid(plateText) {
    return ScLicenseplateIsvalid(plateText);
}
/**
 * No comment provided
 *
 * Hash: 0xD0EE05FE193646EA | Since: 323 | API-Set: unknown
 */
export function scLicenseplateSetPlateData(oldPlateText, newPlateText) {
    return ScLicenseplateSetPlateData(oldPlateText, newPlateText);
}
/**
 * Fills some 0x30 sized struct
 *
 * Hash: 0x8A4416C0DB05FA66 | Since: 1290 | API-Set: unknown
 */
export function scPauseNewsGetPendingStory() {
    return Citizen.invokeNative('0x8A4416C0DB05FA66', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE4F6E8D07A2F0F51 | Since: 1290 | API-Set: unknown
 */
export function scPauseNewsInitStarterPack() {
    return Citizen.invokeNative('0xE4F6E8D07A2F0F51', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEA95C0853A27888E | Since: 1290 | API-Set: unknown
 */
export function scPauseNewsShutdown() {
    Citizen.invokeNative('0xEA95C0853A27888E');
}
/**
 * No comment provided
 *
 * Hash: 0xC4C4575F62534A24 | Since: 323 | API-Set: unknown
 */
export function scPresenceAttrSetFloat(attrHash, value) {
    if (typeof attrHash === 'string')
        attrHash = game.getHashKey(attrHash);
    return ScPresenceAttrSetFloat(attrHash, value);
}
/**
 * No comment provided
 *
 * Hash: 0x1F1E9682483697C7 | Since: 323 | API-Set: unknown
 */
export function scPresenceAttrSetInt(attrHash, value) {
    if (typeof attrHash === 'string')
        attrHash = game.getHashKey(attrHash);
    return ScPresenceAttrSetInt(attrHash, value);
}
/**
 * No comment provided
 *
 * Hash: 0x287F1F75D2803595 | Since: 323 | API-Set: unknown
 */
export function scPresenceAttrSetString(attrHash, value) {
    if (typeof attrHash === 'string')
        attrHash = game.getHashKey(attrHash);
    return ScPresenceAttrSetString(attrHash, value);
}
/**
 * No comment provided
 *
 * Hash: 0x487912FD248EFDDF | Since: 323 | API-Set: unknown
 */
export function scPresenceSetActivityRating() {
    return Citizen.invokeNative('0x487912FD248EFDDF', undefined, 0);
}
/**
 * Starts a task to check an entered string for profanity on the ROS/Social Club services.
 *
 * See also: 1753344C770358AE, 82E4A58BABC15AE7.
 *
 * Hash: 0x75632C5ECD7ED843 | Since: 323 | API-Set: unknown
 */
export function scProfanityCheckString(_string) {
    return ScProfanityCheckString(_string);
}
/**
 * No comment provided
 *
 * Hash: 0xEB2BF817463DFA28 | Since: 678 | API-Set: unknown
 */
export function scProfanityCheckStringUgc(_string) {
    return ScProfanityCheckUgcString(_string);
}
/**
 * No comment provided
 *
 * Hash: 0x82E4A58BABC15AE7 | Since: 323 | API-Set: unknown
 */
export function scProfanityGetCheckIsPending(token) {
    return ScProfanityGetCheckIsPending(token);
}
/**
 * No comment provided
 *
 * Hash: 0x1753344C770358AE | Since: 323 | API-Set: unknown
 */
export function scProfanityGetCheckIsValid(token) {
    return ScProfanityGetCheckIsValid(token);
}
/**
 * Retrieves the profane part of the string with max size of 128.
 * Returns true if profane term was retrieved.
 *
 * Hash: 0x75CC8931A11128C9 | Since: 3258 | API-Set: unknown
 */
export function scProfanityGetProfaneWord(token) {
    return Citizen.invokeNative('0x75CC8931A11128C9', token);
}
/**
 * No comment provided
 *
 * Hash: 0x85535ACF97FC0969 | Since: 323 | API-Set: unknown
 */
export function scProfanityGetStringPassed(token) {
    return ScProfanityGetStringPassed(token);
}
/**
 * No comment provided
 *
 * Hash: 0x930DE22F07B1CCE3 | Since: 323 | API-Set: unknown
 */
export function scProfanityGetStringStatus(token) {
    return ScProfanityGetStringStatus(token);
}
/**
 * No comment provided
 *
 * Hash: 0x675721C9F644D161 | Since: 323 | API-Set: unknown
 */
export function scTransitionNewsEnd() {
    Citizen.invokeNative('0x675721C9F644D161');
}
/**
 * No comment provided
 *
 * Hash: 0x92DA6E70EF249BD1 | Since: 323 | API-Set: unknown
 */
export function scTransitionNewsGetExtraDataIntTu() {
    return Citizen.invokeNative('0x92DA6E70EF249BD1', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3001BEF2FECA3680 | Since: 323 | API-Set: unknown
 */
export function scTransitionNewsHasExtraDataTu() {
    return Citizen.invokeNative('0x3001BEF2FECA3680');
}
/**
 * No comment provided
 *
 * Hash: 0x6BFB12CE158E3DD4 | Since: 323 | API-Set: unknown
 */
export function scTransitionNewsShow() {
    return Citizen.invokeNative('0x6BFB12CE158E3DD4', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD8122C407663B995 | Since: 323 | API-Set: unknown
 */
export function scTransitionNewsShowNextItem() {
    return Citizen.invokeNative('0xD8122C407663B995');
}
/**
 * No comment provided
 *
 * Hash: 0xFE4C1D0D3B9CC17E | Since: 323 | API-Set: unknown
 */
export function scTransitionNewsShowTimed() {
    return Citizen.invokeNative('0xFE4C1D0D3B9CC17E', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x69AA35F3F391CDBA | Since: 3258 | API-Set: unknown
 */
export function scEmailMarketingEmailOpened(index, _type) {
    if (typeof _type === 'string')
        _type = game.getHashKey(_type);
    Citizen.invokeNative('0x69AA35F3F391CDBA', index, _type);
}
