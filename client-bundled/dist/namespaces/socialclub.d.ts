/**
 * Returns the nickname of the logged-in Rockstar Social Club account.
 *
 * Hash: 0x198D161F458ECC7F | Since: 323 | API-Set: unknown
 */
export declare function scAccountInfoGetNickname(): string;
/**
 * No comment provided
 *
 * Hash: 0x225798743970412B | Since: 323 | API-Set: unknown
 */
export declare function scAchievementInfoStatus(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xBFA0A56A817C6C7D | Since: 323 | API-Set: unknown
 */
export declare function scCacheNewRockstarMsgs(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC2C97EA97711D1AE | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetDisplayName(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x19853B5B17D77BCA | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetDisplayNameById(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x33DF47CC0642061B | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetDisplayNameForType(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x4ED9C8D6DA297639 | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetEventId(): number;
/**
 * No comment provided
 *
 * Hash: 0x4A7D6E727F941747 | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetEventIdForType(): number;
/**
 * No comment provided
 *
 * Hash: 0x50A8A36201DBF83E | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetExtraDataFloat(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xC5A35C73B68F3C49 | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetExtraDataFloatById(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x2570E26BE63964E3 | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetExtraDataFloatForType(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x710BCDA8071EDED1 | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetExtraDataInt(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x8CC469AB4D349B7C | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetExtraDataIntById(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xE75A4A2E5E316D86 | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetExtraDataIntForType(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x9DE5D2F723575ED0 | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetExtraDataString(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x699E4A5C8C893A18 | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetExtraDataStringById(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x1D12A56FC95BE92E | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventGetExtraDataStringForType(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xFF8F3A92B75ED67A | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventIsActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA468E0BE12B12C70 | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventIsActiveById(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x450819D8CF90C416 | Since: 323 | API-Set: unknown
 */
export declare function scCommunityEventIsActiveForType(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x44ACA259D67651DB | Since: 323 | API-Set: unknown
 */
export declare function scEmailDeleteEmails(): any;
/**
 * No comment provided
 *
 * Hash: 0x4737980E8A283806 | Since: 323 | API-Set: unknown
 */
export declare function scEmailGetEmailAtIndex(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x7DB18CA8CAD5B098 | Since: 505 | API-Set: unknown
 */
export declare function scEmailGetNumRetrievedEmails(): number;
/**
 * No comment provided
 *
 * Hash: 0x16DA8172459434AA | Since: 323 | API-Set: unknown
 */
export declare function scEmailGetRetrievalStatus(): number;
/**
 * No comment provided
 *
 * Hash: 0x55DF6DB45179236E | Since: 323 | API-Set: unknown
 */
export declare function scEmailMessageClearRecipList(): void;
/**
 * No comment provided
 *
 * Hash: 0x2330C12A7A605D16 | Since: 323 | API-Set: unknown
 */
export declare function scEmailMessagePushGamerToRecipList(): any;
/**
 * No comment provided
 *
 * Hash: 0x040ADDCBAFA1018A | Since: 323 | API-Set: unknown
 */
export declare function scEmailRetrieveEmails(offset: number, limit: number): void;
/**
 * No comment provided
 *
 * Hash: 0x116FB94DC4B79F17 | Since: 323 | API-Set: unknown
 */
export declare function scEmailSendEmail(): void;
/**
 * No comment provided
 *
 * Hash: 0x07DBD622D9533857 | Since: 505 | API-Set: unknown
 */
export declare function scEmailSetCurrentEmailTag(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2D874D4AE612A65F | Since: 323 | API-Set: unknown
 */
export declare function scGamerdataGetActiveXpBonus(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x8416FE4E4629D7D7 | Since: 323 | API-Set: unknown
 */
export declare function scGamerdataGetBool(name: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA770C8EEC6FB2AC5 | Since: 323 | API-Set: unknown
 */
export declare function scGamerdataGetFloat(name: string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xC85A7127E7AD02AA | Since: 323 | API-Set: unknown
 */
export declare function scGamerdataGetInt(name: string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x7FFCBFEE44ECFABF | Since: 323 | API-Set: unknown
 */
export declare function scGamerdataGetString(name: string): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xDF649C4E9AFDD788 | Since: 323 | API-Set: unknown
 */
export declare function scGetNewRockstarMsg(): string;
/**
 * Same as HAS_ACHIEVEMENT_BEEN_PASSED
 *
 * Hash: 0x418DC16FAE452C1C | Since: 323 | API-Set: unknown
 */
export declare function scHasAchievementBeenPassed(achievementId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBC1CC91205EC8D6E | Since: 323 | API-Set: unknown
 */
export declare function scHasNewRockstarMsg(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x87E0052F08BD64E6 | Since: 323 | API-Set: unknown
 */
export declare function scInboxGetBountyDataAtIndex(index: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x93028F1DB42BFD08 | Since: 323 | API-Set: unknown
 */
export declare function scInboxGetMessageIsReadAtIndex(msgIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBB8EA16ECBC976C4 | Since: 323 | API-Set: unknown
 */
export declare function scInboxGetMessageTypeAtIndex(msgIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x03A93FF1A2CA0864 | Since: 323 | API-Set: unknown
 */
export declare function scInboxGetTotalNumMessages(): number;
/**
 * No comment provided
 *
 * Hash: 0x9A2C8064B6C1E41A | Since: 323 | API-Set: unknown
 */
export declare function scInboxMessageDoApply(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFFE5C16F402D851D | Since: 323 | API-Set: unknown
 */
export declare function scInboxMessageGetDataBool(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA00EFE4082C4056E | Since: 323 | API-Set: unknown
 */
export declare function scInboxMessageGetDataInt(context: string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x7572EF42FC6A9B6D | Since: 323 | API-Set: unknown
 */
export declare function scInboxMessageGetDataString(context: string): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xF3E31D16CBDCB304 | Since: 323 | API-Set: unknown
 */
export declare function scInboxMessageGetRawTypeAtIndex(): string;
/**
 * No comment provided
 *
 * Hash: 0x69D82604A1A5A254 | Since: 323 | API-Set: unknown
 */
export declare function scInboxMessageGetUgcdata(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xDA024BDBD600F44A | Since: 323 | API-Set: unknown
 */
export declare function scInboxMessagePushGamerT0RecipList(): any;
/**
 * No comment provided
 *
 * Hash: 0xA68D3D229F4F3B06 | Since: 323 | API-Set: unknown
 */
export declare function scInboxSendUgcstatupdateToRecipList(): any;
/**
 * No comment provided
 *
 * Hash: 0x2C015348CF19CA1D | Since: 323 | API-Set: unknown
 */
export declare function scInboxSetMessageAsReadAtIndex(msgIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1989C6E6F67E76A8 | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateAdd(plateText: string): [boolean, any, number];
/**
 * No comment provided
 *
 * Hash: 0xF6BAAAF762E1BF40 | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateCheckString(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x07C61676E5BB52CD | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateGetAddIsPending(token: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8147FFF6A718E1AD | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateGetAddStatus(token: number): number;
/**
 * No comment provided
 *
 * Hash: 0x9237E334F6E43156 | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateGetCheckIsPending(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF22CA0FD74B80E7A | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateGetCheckIsValid(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x700569DBA175A77C | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateGetCount(token: number): number;
/**
 * No comment provided
 *
 * Hash: 0xD302E99EDF0449CF | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateGetIsvalidIsPending(token: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5C4EBFFA98BDB41C | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateGetIsvalidStatus(token: number): number;
/**
 * No comment provided
 *
 * Hash: 0x1D4446A62D35B0D0 | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateGetPlate(token: number, plateIndex: number): string;
/**
 * No comment provided
 *
 * Hash: 0x2E89990DDFF670C3 | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateGetPlateData(token: number, plateIndex: number): string;
/**
 * No comment provided
 *
 * Hash: 0x0F73393BAC7E6730 | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateIsvalid(plateText: string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xD0EE05FE193646EA | Since: 323 | API-Set: unknown
 */
export declare function scLicenseplateSetPlateData(oldPlateText: string, newPlateText: string): [boolean, any];
/**
 * Fills some 0x30 sized struct
 *
 * Hash: 0x8A4416C0DB05FA66 | Since: 1290 | API-Set: unknown
 */
export declare function scPauseNewsGetPendingStory(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE4F6E8D07A2F0F51 | Since: 1290 | API-Set: unknown
 */
export declare function scPauseNewsInitStarterPack(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEA95C0853A27888E | Since: 1290 | API-Set: unknown
 */
export declare function scPauseNewsShutdown(): void;
/**
 * No comment provided
 *
 * Hash: 0xC4C4575F62534A24 | Since: 323 | API-Set: unknown
 */
export declare function scPresenceAttrSetFloat(attrHash: number | string, value: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1F1E9682483697C7 | Since: 323 | API-Set: unknown
 */
export declare function scPresenceAttrSetInt(attrHash: number | string, value: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x287F1F75D2803595 | Since: 323 | API-Set: unknown
 */
export declare function scPresenceAttrSetString(attrHash: number | string, value: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x487912FD248EFDDF | Since: 323 | API-Set: unknown
 */
export declare function scPresenceSetActivityRating(): boolean;
/**
 * Starts a task to check an entered string for profanity on the ROS/Social Club services.
 *
 * See also: 1753344C770358AE, 82E4A58BABC15AE7.
 *
 * Hash: 0x75632C5ECD7ED843 | Since: 323 | API-Set: unknown
 */
export declare function scProfanityCheckString(_string: string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xEB2BF817463DFA28 | Since: 678 | API-Set: unknown
 */
export declare function scProfanityCheckStringUgc(_string: string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x82E4A58BABC15AE7 | Since: 323 | API-Set: unknown
 */
export declare function scProfanityGetCheckIsPending(token: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1753344C770358AE | Since: 323 | API-Set: unknown
 */
export declare function scProfanityGetCheckIsValid(token: number): boolean;
/**
 * Retrieves the profane part of the string with max size of 128.
 * Returns true if profane term was retrieved.
 *
 * Hash: 0x75CC8931A11128C9 | Since: 3258 | API-Set: unknown
 */
export declare function scProfanityGetProfaneWord(token: number): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x85535ACF97FC0969 | Since: 323 | API-Set: unknown
 */
export declare function scProfanityGetStringPassed(token: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x930DE22F07B1CCE3 | Since: 323 | API-Set: unknown
 */
export declare function scProfanityGetStringStatus(token: number): number;
/**
 * No comment provided
 *
 * Hash: 0x675721C9F644D161 | Since: 323 | API-Set: unknown
 */
export declare function scTransitionNewsEnd(): void;
/**
 * No comment provided
 *
 * Hash: 0x92DA6E70EF249BD1 | Since: 323 | API-Set: unknown
 */
export declare function scTransitionNewsGetExtraDataIntTu(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x3001BEF2FECA3680 | Since: 323 | API-Set: unknown
 */
export declare function scTransitionNewsHasExtraDataTu(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6BFB12CE158E3DD4 | Since: 323 | API-Set: unknown
 */
export declare function scTransitionNewsShow(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD8122C407663B995 | Since: 323 | API-Set: unknown
 */
export declare function scTransitionNewsShowNextItem(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFE4C1D0D3B9CC17E | Since: 323 | API-Set: unknown
 */
export declare function scTransitionNewsShowTimed(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x69AA35F3F391CDBA | Since: 3258 | API-Set: unknown
 */
export declare function scEmailMarketingEmailOpened(index: number, _type: number | string): void;
