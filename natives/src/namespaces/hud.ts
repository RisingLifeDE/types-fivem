import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * Does stuff like this:
 * gyazo.com/7fcb78ea3520e3dbc5b2c0c0f3712617
 * 
 * Example:
 * int GetHash = GET_HASH_KEY("fe_menu_version_corona_lobby");
 * ACTIVATE_FRONTEND_MENU(GetHash, 0, -1);
 * 
 * BOOL p1 is a toggle to define the game in pause.
 * int p2 is unknown but -1 always works, not sure why though.
 * 
 * [30/03/2017] ins1de :
 * 
 * the int p2 is actually a component variable. When the pause menu is visible, it opens the tab related to it.
 * 
 * Example : Function.Call(Hash.ACTIVATE_FRONTEND_MENU,-1171018317, 0, 42);
 * Result : Opens the "Online" tab without pausing the menu, with -1 it opens the map.Below is a list of all known Frontend Menu Hashes.
 * - FE_MENU_VERSION_SP_PAUSE
 * - FE_MENU_VERSION_MP_PAUSE
 * - FE_MENU_VERSION_CREATOR_PAUSE
 * - FE_MENU_VERSION_CUTSCENE_PAUSE
 * - FE_MENU_VERSION_SAVEGAME
 * - FE_MENU_VERSION_PRE_LOBBY
 * - FE_MENU_VERSION_LOBBY
 * - FE_MENU_VERSION_MP_CHARACTER_SELECT
 * - FE_MENU_VERSION_MP_CHARACTER_CREATION
 * - FE_MENU_VERSION_EMPTY
 * - FE_MENU_VERSION_EMPTY_NO_BACKGROUND
 * - FE_MENU_VERSION_TEXT_SELECTION
 * - FE_MENU_VERSION_CORONA
 * - FE_MENU_VERSION_CORONA_LOBBY
 * - FE_MENU_VERSION_CORONA_JOINED_PLAYERS
 * - FE_MENU_VERSION_CORONA_INVITE_PLAYERS
 * - FE_MENU_VERSION_CORONA_INVITE_FRIENDS
 * - FE_MENU_VERSION_CORONA_INVITE_CREWS
 * - FE_MENU_VERSION_CORONA_INVITE_MATCHED_PLAYERS
 * - FE_MENU_VERSION_CORONA_INVITE_LAST_JOB_PLAYERS
 * - FE_MENU_VERSION_CORONA_RACE
 * - FE_MENU_VERSION_CORONA_BETTING
 * - FE_MENU_VERSION_JOINING_SCREEN
 * - FE_MENU_VERSION_LANDING_MENU
 * - FE_MENU_VERSION_LANDING_KEYMAPPING_MENU
 * 
 * Hash: 0xEF01D36B9C9D0C7B | Since: 323
 */
export function activateFrontendMenu(menuhash: number | string, togglePause: boolean, component: number): void {
    if (typeof menuhash === 'string') menuhash = GetHashKey(menuhash)
    ActivateFrontendMenu(menuhash, togglePause, component);
}

/**
 * Adds a rectangular blip for the specified coordinates/area.
 * 
 * It is recommended to use SET_BLIP_ROTATION and SET_BLIP_COLOUR to make the blip not rotate along with the camera.
 * 
 * By default, the blip will show as a _regular_ blip with the specified color/sprite if it is outside of the minimap view.
 * 
 * Example image:
 * minimap https://w.wew.wtf/pdcjig.png
 * big map https://w.wew.wtf/zgcjcm.png
 * 
 * (Native name is _likely_ to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
 * 
 * Hash: 0xCE5D0E5E315DB238 | Since: 463
 */
export function addBlipForArea(pos: Vector3, width: number, height: number): number {
    return AddBlipForArea(pos.x, pos.y, pos.z, width, height);
}

/**
 * Creates an orange ( default ) Blip-object. Returns a Blip-object which can then be modified.
 * 
 * Hash: 0x5A039BB0BCA604B6 | Since: 323
 */
export function addBlipForCoord(pos: Vector3): number {
    return AddBlipForCoord(pos.x, pos.y, pos.z);
}

/**
 * Returns red ( default ) blip attached to entity.
 * 
 * Example:
 * Blip blip; //Put this outside your case or option
 * `blip = HUD::ADD_BLIP_FOR_ENTITY(YourPedOrBodyguardName);`
 * `HUD::SET_BLIP_AS_FRIENDLY(blip, true);`
 * 
 * Hash: 0x5CDE92C702A8FCE7 | Since: 323
 */
export function addBlipForEntity(entity: number | IEntity): number {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return AddBlipForEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xBE339365C863BD36 | Since: 323
 */
export function addBlipForPickup(pickup: any): number {
    return AddBlipForPickup(pickup);
}

/**
 * No comment provided
 * 
 * Hash: 0x46818D79B1F7499A | Since: 323
 */
export function addBlipForRadius(pos: Vector3, radius: number): number {
    return AddBlipForRadius(pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x60296AF4BA14ABC5 | Since: 323
 */
export function addNextMessageToPreviousBriefs(): void {
    AddNextMessageToPreviousBriefs(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x311438A071DD9B1A | Since: 323
 */
export function addPointToGpsCustomRoute(pos: Vector3): void {
    AddPointToGpsCustomRoute(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xA905192A6781C41B | Since: 323
 */
export function addPointToGpsMultiRoute(pos: Vector3): void {
    AddPointToGpsMultiRoute(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xE7DCB5B874BCD96E | Since: 323
 */
export function addTextComponentFloat(value: number, decimalPlaces: number): void {
    AddTextComponentFloat(value, decimalPlaces);
}

/**
 * No comment provided
 * 
 * Hash: 0x0E4C749FF9DE9CC4 | Since: 323
 */
export function addTextComponentFormattedInteger(value: number, commaSeparated: boolean): void {
    AddTextComponentFormattedInteger(value, commaSeparated);
}

/**
 * No comment provided
 * 
 * Hash: 0x03B504CF259931BC | Since: 323
 */
export function addTextComponentInteger(value: number): void {
    AddTextComponentInteger(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x80EAD8E2E1D5D52E | Since: 323
 */
export function addTextComponentSubstringBlipName(blip: number | IBlip): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    AddTextComponentSubstringBlipName(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F68520888E69014 | Since: 323
 */
export function addTextComponentSubstringKeyboardDisplay(_string: string): void {
    AddTextComponentSubstringKeyboardDisplay(_string);
}

/**
 * p1 was always -1
 * 
 * Hash: 0x761B77454205A61D | Since: 323
 */
export function addTextComponentSubstringPhoneNumber(): void {
    AddTextComponentSubstringPhoneNumber(undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C188BE134E074AA | Since: 323
 */
export function addTextComponentSubstringPlayerName(text: string): void {
    AddTextComponentSubstringPlayerName(text);
}

/**
 * No comment provided
 * 
 * Hash: 0xC63CD5D2920ACBE7 | Since: 323
 */
export function addTextComponentSubstringTextLabel(labelName: string): void {
    AddTextComponentSubstringTextLabel(labelName);
}

/**
 * It adds the localized text of the specified GXT entry name. Eg. if the argument is GET_HASH_KEY("ES_HELP"), adds "Continue". Just uses a text labels hash key
 * 
 * Hash: 0x17299B63C7683A2B | Since: 323
 */
export function addTextComponentSubstringTextLabelHashKey(gxtEntryHash: number | string): void {
    if (typeof gxtEntryHash === 'string') gxtEntryHash = GetHashKey(gxtEntryHash)
    AddTextComponentSubstringTextLabelHashKey(gxtEntryHash);
}

/**
 * Adds a timer (e.g. "00:00:00:000"). The appearance of the timer depends on the flags, which needs more research.
 * 
 * Hash: 0x1115F16B8AB9E8BF | Since: 323
 */
export function addTextComponentSubstringTime(timestamp: number, flags: number): void {
    AddTextComponentSubstringTime(timestamp, flags);
}

/**
 * This native (along with ADD_TEXT_COMPONENT_SUBSTRING_KEYBOARD_DISPLAY and ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME) do not actually filter anything. They simply add the provided text (as of 944)
 * 
 * Hash: 0x94CF4AC034C9C986 | Since: 323
 */
export function addTextComponentSubstringWebsite(website: string): void {
    AddTextComponentSubstringWebsite(website);
}

/**
 * No comment provided
 * 
 * Hash: 0xE4C3B169876D33D7 | Since: 1290
 */
export function addValidVehicleHitHash(): void {
    Citizen.invokeNative('0xE4C3B169876D33D7', undefined);
}

/**
 * Controls whether to display 'Cash'/'Bank' next to the money balance HUD in Multiplayer (https://i.imgur.com/MiYUtNl.png)
 * 
 * Hash: 0xE67C6DFD386EA5E7 | Since: 323
 */
export function allowDisplayOfMultiplayerCashText(allow: boolean): void {
    Citizen.invokeNative('0xE67C6DFD386EA5E7', allow);
}

/**
 * Allows opening the pause menu this frame, when the player is dead.
 * 
 * Hash: 0xCC3FDDED67BCFC63 | Since: 323
 */
export function allowPauseWhenNotInStateOfPlayThisFrame(): void {
    AllowPauseMenuWhenDeadThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x60734CC207C9833C | Since: 323
 */
export function allowSonarBlips(toggle: boolean): void {
    AllowSonarBlips(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF13FE2A80C05C561 | Since: 323
 */
export function areOnlinePoliciesUpToDate(): boolean {
    return Citizen.invokeNative('0xF13FE2A80C05C561');
}

/**
 * No comment provided
 * 
 * Hash: 0x23D69E0465570028 | Since: 323
 */
export function beginTextCommandAddDirectlyToPreviousBriefs(): void {
    BeginTextCommandObjective(undefined);
}

/**
 * Initializes the text entry for the the text next to a loading prompt. All natives for building UI texts can be used here
 * 
 * 
 * e.g
 * void StartLoadingMessage(char *text, int spinnerType = 3)
 * {
 * BEGIN_TEXT_COMMAND_BUSYSPINNER_ON("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * END_TEXT_COMMAND_BUSYSPINNER_ON(spinnerType);
 * }
 * \/\*OR\*\/
 * void ShowLoadingMessage(char *text, int spinnerType = 3, int timeMs = 10000)
 * {
 * BEGIN_TEXT_COMMAND_BUSYSPINNER_ON("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * END_TEXT_COMMAND_BUSYSPINNER_ON(spinnerType);
 * WAIT(timeMs);
 * BUSYSPINNER_OFF();
 * }
 * 
 * 
 * These are some localized strings used in the loading spinner.
 * "PM_WAIT"                   = Please Wait
 * "CELEB_WPLYRS"              = Waiting For Players.
 * "CELL_SPINNER2"             = Scanning storage.
 * "ERROR_CHECKYACHTNAME" = Registering your yacht's name. Please wait.
 * "ERROR_CHECKPROFANITY"   = Checking your text for profanity. Please wait.
 * "FM_COR_AUTOD"                        = Just spinner no text
 * "FM_IHELP_WAT2"                        = Waiting for other players
 * "FM_JIP_WAITO"                            = Game options are being set
 * "FMMC_DOWNLOAD"                    = Downloading
 * "FMMC_PLYLOAD"                         = Loading
 * "FMMC_STARTTRAN"                    = Launching session
 * "HUD_QUITTING"                           =  Quiting session
 * "KILL_STRIP_IDM"                         = Waiting for to accept
 * "MP_SPINLOADING"                      = Loading
 * 
 * Hash: 0xABA17D7CE615ADBF | Since: 323
 */
export function beginTextCommandBusyspinnerOn(_string: string): void {
    BeginTextCommandBusyspinnerOn(_string);
}

/**
 * clears a print text command with this text
 * 
 * Hash: 0xE124FA80A759019C | Since: 323
 */
export function beginTextCommandClearPrint(text: string): void {
    BeginTextCommandClearPrint(text);
}

/**
 * Used to be known as _SET_TEXT_COMPONENT_FORMAT
 * 
 * Hash: 0x8509B634FBE7DA11 | Since: 323
 */
export function beginTextCommandDisplayHelp(inputType: string): void {
    BeginTextCommandDisplayHelp(inputType);
}

/**
 * The following were found in the decompiled script files:
 * STRING, TWOSTRINGS, NUMBER, PERCENTAGE, FO_TWO_NUM, ESMINDOLLA, ESDOLLA, MTPHPER_XPNO, AHD_DIST, CMOD_STAT_0, CMOD_STAT_1, CMOD_STAT_2, CMOD_STAT_3, DFLT_MNU_OPT, F3A_TRAFDEST, ES_HELP_SOC3
 * 
 * ESDOLLA - cash
 * ESMINDOLLA - cash (negative)
 * 
 * Used to be known as _SET_TEXT_ENTRY
 * 
 * Hash: 0x25FBB336DF1804CB | Since: 323
 */
export function beginTextCommandDisplayText(text: string): void {
    BeginTextCommandDisplayText(text);
}

/**
 * int GetLineCount(char *text, float x, float y)
 * {
 * BEGIN_TEXT_COMMAND_GET_NUMBER_OF_LINES_FOR_STRING("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * return BEGIN_TEXT_COMMAND_GET_NUMBER_OF_LINES_FOR_STRING(x, y);
 * }
 * 
 * Hash: 0x521FB041D93DD0E4 | Since: 323
 */
export function beginTextCommandGetNumberOfLinesForString(entry: string): void {
    BeginTextCommandLineCount(entry);
}

/**
 * No comment provided
 * 
 * Hash: 0x54CE8AC98E120CAB | Since: 323
 */
export function beginTextCommandGetScreenWidthOfDisplayText(text: string): void {
    BeginTextCommandGetWidth(text);
}

/**
 * nothin doin.
 * 
 * BOOL Message(const char* text)
 * {
 * BEGIN_TEXT_COMMAND_IS_MESSAGE_DISPLAYED("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * return END_TEXT_COMMAND_IS_MESSAGE_DISPLAYED();
 * }
 * 
 * Hash: 0x853648FD1063A213 | Since: 323
 */
export function beginTextCommandIsMessageDisplayed(text: string): void {
    BeginTextCommandIsMessageDisplayed(text);
}

/**
 * BOOL IsContextActive(char *ctx)
 * {
 * BEGIN_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(ctx);
 * return END_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(0);
 * }
 * 
 * Hash: 0x0A24DA3A41B718F5 | Since: 323
 */
export function beginTextCommandIsThisHelpMessageBeingDisplayed(labelName: string): void {
    BeginTextCommandIsThisHelpMessageBeingDisplayed(labelName);
}

/**
 * No comment provided
 * 
 * Hash: 0x8F9EE5687F8EECCD | Since: 323
 */
export function beginTextCommandOverrideButtonText(gxtEntry: string): void {
    BeginTextCommandOverrideButtonText(gxtEntry);
}

/**
 * void ShowSubtitle(const char *text)
 * {
 * BEGIN_TEXT_COMMAND_PRINT("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * END_TEXT_COMMAND_PRINT(2000, true);
 * }
 * 
 * Hash: 0xB87A37EEB7FAA67D | Since: 323
 */
export function beginTextCommandPrint(GxtEntry: string): void {
    BeginTextCommandPrint(GxtEntry);
}

/**
 * Starts a text command to change the name of a blip displayed in the pause menu.
 * This should be paired with `END_TEXT_COMMAND_SET_BLIP_NAME`, once adding all required text components.
 * Example:
 * 
 * `HUD::BEGIN_TEXT_COMMAND_SET_BLIP_NAME("STRING");`
 * `HUD::ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME("Name");`
 * `HUD::END_TEXT_COMMAND_SET_BLIP_NAME(blip);`
 * 
 * Hash: 0xF9113A30DE5C6670 | Since: 323
 */
export function beginTextCommandSetBlipName(textLabel: string): void {
    BeginTextCommandSetBlipName(textLabel);
}

/**
 * Declares the entry type of a notification, for example "STRING".
 * 
 * int ShowNotification(char *text)
 * {
 * BEGIN_TEXT_COMMAND_THEFEED_POST("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * return END_TEXT_COMMAND_THEFEED_POST_TICKER(1, 1);
 * }
 * 
 * Hash: 0x202709F4C58A0424 | Since: 323
 */
export function beginTextCommandThefeedPost(text: string): void {
    BeginTextCommandThefeedPost(text);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2A592B04648A9CB | Since: 323
 */
export function busyspinnerIsDisplaying(): boolean {
    return BusyspinnerIsDisplaying();
}

/**
 * No comment provided
 * 
 * Hash: 0xD422FCC5F239A915 | Since: 323
 */
export function busyspinnerIsOn(): boolean {
    return BusyspinnerIsOn();
}

/**
 * Removes the loading prompt at the bottom right of the screen.
 * 
 * Hash: 0x10D373323E5B9C0D | Since: 323
 */
export function busyspinnerOff(): void {
    BusyspinnerOff();
}

/**
 * Displays cash change notifications on HUD.
 * 
 * Hash: 0x0772DF77852C2E30 | Since: 323
 */
export function changeFakeMpCash(cash: number, bank: number): void {
    ChangeFakeMpCash(cash, bank);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A179DF17CCF04CD | Since: 323
 */
export function clearAdditionalText(): void {
    ClearAdditionalText(0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD12882D3FF82BF11 | Since: 877
 */
export function clearAllBlipRoutes(): void {
    ClearAllBlipRoutes();
}

/**
 * No comment provided
 * 
 * Hash: 0x6178F68A87A4D3A0 | Since: 323
 */
export function clearAllHelpMessages(): void {
    ClearAllHelpMessages();
}

/**
 * No comment provided
 * 
 * Hash: 0x9D292F73ADBD9313 | Since: 323
 */
export function clearBrief(): void {
    ClearBrief();
}

/**
 * No comment provided
 * 
 * Hash: 0x7792424AA0EAC32E | Since: 323
 */
export function clearDynamicPauseMenuErrorMessage(): void {
    ClearDynamicPauseMenuErrorMessage();
}

/**
 * No comment provided
 * 
 * Hash: 0x8410C5E0CD847B9D | Since: 1290
 */
export function clearFakeConeArray(): void {
    Citizen.invokeNative('0x8410C5E0CD847B9D');
}

/**
 * No comment provided
 * 
 * Hash: 0x50085246ABD3FEFA | Since: 323
 */
export function clearFloatingHelp(hudIndex: number): void {
    ClearFloatingHelp(hudIndex, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xE6DE0561D9232A64 | Since: 323
 */
export function clearGpsCustomRoute(): void {
    ClearGpsCustomRoute();
}

/**
 * Clears the GPS flags. Only the script that originally called SET_GPS_FLAGS can clear them.
 * 
 * Doesn't seem like the flags are actually read by the game at all.
 * 
 * Hash: 0x21986729D6A3A830 | Since: 323
 */
export function clearGpsFlags(): void {
    ClearGpsFlags();
}

/**
 * Does the same as SET_GPS_MULTI_ROUTE_RENDER(false);
 * 
 * Hash: 0x67EEDEA1B9BAFD94 | Since: 323
 */
export function clearGpsMultiRoute(): void {
    ClearGpsMultiRoute();
}

/**
 * No comment provided
 * 
 * Hash: 0xFF4FB7C8CDFA3DA7 | Since: 323
 */
export function clearGpsPlayerWaypoint(): void {
    ClearGpsPlayerWaypoint();
}

/**
 * Does the same as SET_RACE_TRACK_RENDER(false);
 * 
 * Hash: 0x7AA5B4CE533C858B | Since: 323
 */
export function clearGpsRaceTrack(): void {
    ClearGpsRaceTrack();
}

/**
 * No comment provided
 * 
 * Hash: 0x8DFCED7A656F8802 | Since: 323
 */
export function clearHelp(toggle: boolean): void {
    ClearHelp(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5E62BE5DC58E9E06 | Since: 323
 */
export function clearPedInPauseMenu(): void {
    ClearPedInPauseMenu();
}

/**
 * No comment provided
 * 
 * Hash: 0xCC33FA791322B9D9 | Since: 323
 */
export function clearPrints(): void {
    ClearPrints();
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0xB57D8DD645CFA2CF | Since: 323
 */
export function clearReminderMessage(): void {
    ClearReminderMessage();
}

/**
 * No comment provided
 * 
 * Hash: 0x2CEA2839313C09AC | Since: 323
 */
export function clearSmallPrints(): void {
    ClearSmallPrints();
}

/**
 * p0: found arguments in the b617d scripts: https://pastebin.com/X5akCN7z
 * 
 * Hash: 0xCF708001E1E536DD | Since: 323
 */
export function clearThisPrint(): void {
    ClearThisPrint(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEB81A3DADD503187 | Since: 1290
 */
export function clearValidVehicleHitHashes(): void {
    Citizen.invokeNative('0xEB81A3DADD503187');
}

/**
 * No comment provided
 * 
 * Hash: 0x1AC8F4AD40E22127 | Since: 323
 */
export function closeMpTextChat(): void {
    CloseMultiplayerChat();
}

/**
 * No comment provided
 * 
 * Hash: 0xD2B32BE3FC1626C6 | Since: 323
 */
export function closeSocialClubMenu(): void {
    CloseSocialClubMenu();
}

/**
 * No comment provided
 * 
 * Hash: 0x66E7CB63C97B7D20 | Since: 323
 */
export function codeWantsScriptToTakeControl(): boolean {
    return Citizen.invokeNative('0x66E7CB63C97B7D20');
}

/**
 * clanFlag: takes a number 0-5
 * 
 * Hash: 0xBFEFE3321A3F5015 | Since: 323
 */
export function createFakeMpGamerTag(ped: number | IPed, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, clanFlag: number): number {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return CreateFakeMpGamerTag(_ped, username, pointedClanTag, isRockstarClan, clanTag, clanFlag);
}

/**
 * clanFlag: takes a number 0-5
 * 
 * Hash: 0x6DD05E9D83EFA4C9 | Since: 323
 */
export function createMpGamerTagWithCrewColor(player: number | string | IPlayer, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, clanFlag: number, r: number, g: number, b: number): void {
    const _player = typeof player == 'object' ? player.playerId() : player;
    CreateMpGamerTagWithCrewColor(_player, username, pointedClanTag, isRockstarClan, clanTag, clanFlag, r, g, b);
}

/**
 * No comment provided
 * 
 * Hash: 0x2708FC083123F9FF | Since: 323
 */
export function customMinimapClearBlips(): void {
    ClearRaceGalleryBlips();
}

/**
 * Add a BLIP_GALLERY at the specific coordinate. Used in fm_maintain_transition_players to display race track points.
 * 
 * Hash: 0x551DF99658DB6EE8 | Since: 323
 */
export function customMinimapCreateBlip(pos: Vector3): number {
    return RaceGalleryAddBlip(pos.x, pos.y, pos.z);
}

/**
 * If toggle is true, the map is shown in full screen
 * If toggle is false, the map is shown in normal mode
 * 
 * Hash: 0x5354C5BA2EA868A4 | Since: 323
 */
export function customMinimapSetActive(toggle: boolean): void {
    RaceGalleryFullscreen(toggle);
}

/**
 * Sets the sprite of the next BLIP_GALLERY blip, values used in the native scripts: 143 (ObjectiveBlue), 144 (ObjectiveGreen), 145 (ObjectiveRed), 146 (ObjectiveYellow).
 * 
 * Hash: 0x1EAE6DD17B7A5EFA | Since: 323
 */
export function customMinimapSetBlipObject(spriteId: number): void {
    RaceGalleryNextBlipSprite(spriteId);
}

/**
 * No comment provided
 * 
 * Hash: 0xD8E694757BCEA8E9 | Since: 323
 */
export function deleteWaypointsFromThisPlayer(): void {
    DeleteWaypoint();
}

/**
 * No comment provided
 * 
 * Hash: 0x6D3465A73092F0E6 | Since: 323
 */
export function disableFrontendThisFrame(): void {
    DisableFrontendThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x9245E81072704B8A | Since: 323
 */
export function disablePausemenuSpinner(): void {
    PauseMenuDisableBusyspinner(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA5E78BA2B1331C55 | Since: 323
 */
export function displayAmmoThisFrame(display: boolean): void {
    DisplayAmmoThisFrame(display);
}

/**
 * No comment provided
 * 
 * Hash: 0x276B6CE369C33678 | Since: 323
 */
export function displayAreaName(toggle: boolean): void {
    DisplayAreaName(toggle);
}

/**
 * "DISPLAY_CASH(false);" makes the cash amount render on the screen when appropriate
 * "DISPLAY_CASH(true);" disables cash amount rendering
 * 
 * Hash: 0x96DEC8D5430208B7 | Since: 323
 */
export function displayCash(toggle: boolean): void {
    DisplayCash(toggle);
}

/**
 * The messages are localized strings.
 * Examples:
 * "No_bus_money"
 * "Enter_bus"
 * "Tour_help"
 * "LETTERS_HELP2"
 * "Dummy"
 * 
 * <strong>The bool appears to always be false (if it even is a bool, as it's represented by a zero)</strong>
 * --------
 * p1 doesn't seem to make a difference, regardless of the state it's in.
 * 
 * 
 * picture of where on the screen this is displayed?
 * 
 * Hash: 0x960C9FF8F616E41C | Since: 323
 */
export function displayHelpTextThisFrame(message: string): void {
    DisplayHelpTextThisFrame(message, false);
}

/**
 * If Hud should be displayed
 * 
 * Hash: 0xA6294919E56FF02A | Since: 323
 */
export function display(toggle: boolean): void {
    DisplayHud(toggle);
}

/**
 * Enables drawing some hud components, such as help labels, this frame, when the player is dead.
 * 
 * Hash: 0x7669F9E39DC17063 | Since: 323
 */
export function displayWhenNotInStateOfPlayThisFrame(): void {
    DisplayHudWhenDeadThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x402F9ED62087E898 | Since: 323
 */
export function displayWhenPausedThisFrame(): void {
    DisplayHudWhenPausedThisFrame();
}

/**
 * Toggles whether or not name labels are shown on the expanded minimap next to player blips, like in GTA:O.
 * Doesn't need to be called every frame.
 * Preview: https://i.imgur.com/DfqKWfJ.png
 * 
 * Make sure to call SET_BLIP_CATEGORY with index 7 for this to work on the desired blip.
 * 
 * Hash: 0x82CEDC33687E1F50 | Since: 323
 */
export function displayPlayerNameTagsOnBlips(toggle: boolean): void {
    DisplayPlayerNameTagsOnBlips(toggle);
}

/**
 * If Minimap / Radar should be displayed.
 * 
 * Hash: 0xA0EBB943C300E693 | Since: 323
 */
export function displayRadar(toggle: boolean): void {
    DisplayRadar(toggle);
}

/**
 * Displays the crosshair for this frame.
 * 
 * Hash: 0x73115226F4814E62 | Since: 323
 */
export function displaySniperScopeThisFrame(): void {
    DisplaySniperScopeThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0xA6DB27D19ECBB7DA | Since: 323
 */
export function doesBlipExist(blip: number | IBlip): boolean {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return DoesBlipExist(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0xDD2238F57B977751 | Since: 323
 */
export function doesBlipHaveGpsRoute(blip: number | IBlip): boolean {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return DoesBlipHaveGpsRoute(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x15B8ECF844EE67ED | Since: 323
 */
export function doesPedHaveAiBlip(ped: number | IPed): boolean {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return DoesPedHaveAiBlip(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x1C7302E725259789 | Since: 323
 */
export function doesTextBlockExist(gxt: string): boolean {
    return DoesTextBlockExist(gxt);
}

/**
 * Checks if the passed gxt name exists in the game files.
 * 
 * Hash: 0xAC09CA973C564252 | Since: 323
 */
export function doesTextLabelExist(gxt: string): boolean {
    return DoesTextLabelExist(gxt);
}

/**
 * When calling this, the current frame will have the players "arrow icon" be focused on the dead center of the radar.
 * 
 * Hash: 0x6D14BFDC33B34F55 | Since: 323
 */
export function dontTiltMinimapThisFrame(): void {
    DontTiltMinimapThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x89DA85D949CE57A0 | Since: 2802
 */
export function dontZoomMinimapWhenRunningThisFrame(): void {
    Citizen.invokeNative('0x89DA85D949CE57A0');
}

/**
 * No comment provided
 * 
 * Hash: 0x55F5A5F07134DE60 | Since: 1180
 */
export function dontZoomMinimapWhenSnipingThisFrame(): void {
    Citizen.invokeNative('0x55F5A5F07134DE60');
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0x211C4EF450086857 | Since: 323
 */
export function drawFrontendBackgroundThisFrame(): void {
    Citizen.invokeNative('0x211C4EF450086857');
}

/**
 * No comment provided
 * 
 * Hash: 0xBF4F34A85CA2970C | Since: 323
 */
export function drawOverFadeThisFrame(): void {
    Citizen.invokeNative('0xBF4F34A85CA2970C');
}

/**
 * No comment provided
 * 
 * Hash: 0xCFDBDF5AE59BA0F4 | Since: 323
 */
export function endTextCommandAddDirectlyToPreviousBriefs(): void {
    EndTextCommandObjective(false);
}

/**
 * enum eBusySpinnerType
 * {
 * BUSY_SPINNER_LEFT,
 * BUSY_SPINNER_LEFT_2,
 * BUSY_SPINNER_LEFT_3,
 * BUSY_SPINNER_SAVE,
 * BUSY_SPINNER_RIGHT,
 * };
 * 
 * Hash: 0xBD12F8228410D9B4 | Since: 323
 */
export function endTextCommandBusyspinnerOn(busySpinnerType: number): void {
    EndTextCommandBusyspinnerOn(busySpinnerType);
}

/**
 * No comment provided
 * 
 * Hash: 0xFCC75460ABA29378 | Since: 323
 */
export function endTextCommandClearPrint(): void {
    EndTextCommandClearPrint();
}

/**
 * shape goes from -1 to 50 (may be more).
 * p0 is always 0.
 * 
 * Example:
 * void FloatingHelpText(const char* text)
 * {
 * BEGIN_TEXT_COMMAND_DISPLAY_HELP("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * END_TEXT_COMMAND_DISPLAY_HELP (0, 0, 1, -1);
 * }
 * 
 * Image:
 * - imgbin.org/images/26209.jpg
 * 
 * more inputs/icons:
 * - https://pastebin.com/nqNYWMSB
 * 
 * Used to be known as _DISPLAY_HELP_TEXT_FROM_STRING_LABEL
 * 
 * Hash: 0x238FFE5C7B0498A6 | Since: 323
 */
export function endTextCommandDisplayHelp(loop: boolean, beep: boolean, shape: number): void {
    EndTextCommandDisplayHelp(0, loop, beep, shape);
}

/**
 * `After applying the properties to the text (See HUD::SET_TEXT_), this will draw the text in the applied position. Also 0.0f < x, y < 1.0f, percentage of the axis.`
 * 
 * Used to be known as _DRAW_TEXT
 * 
 * Hash: 0xCD015E5BB0D96A57 | Since: 323
 */
export function endTextCommandDisplayText(x: number, y: number): void {
    EndTextCommandDisplayText(x, y, 0);
}

/**
 * Determines how many lines the text string will use when drawn on screen.
 * Must use 0x521FB041D93DD0E4 for setting up
 * 
 * Hash: 0x9040DFB09BE75706 | Since: 323
 */
export function endTextCommandGetNumberOfLinesForString(x: number, y: number): number {
    return EndTextCommandLineCount(x, y);
}

/**
 * No comment provided
 * 
 * Hash: 0x85F061DA64ED2F67 | Since: 323
 */
export function endTextCommandGetScreenWidthOfDisplayText(): number {
    return EndTextCommandGetWidth(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A9BA1AB3E237613 | Since: 323
 */
export function endTextCommandIsMessageDisplayed(): boolean {
    return EndTextCommandIsMessageDisplayed();
}

/**
 * No comment provided
 * 
 * Hash: 0x10BDDBFC529428DD | Since: 323
 */
export function endTextCommandIsThisHelpMessageBeingDisplayed(): boolean {
    return EndTextCommandIsThisHelpMessageBeingDisplayed(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA86911979638106F | Since: 323
 */
export function endTextCommandOverrideButtonText(): void {
    EndTextCommandOverrideButtonText(0);
}

/**
 * Draws the subtitle at middle center of the screen.
 * 
 * int duration = time in milliseconds to show text on screen before disappearing
 * 
 * drawImmediately = If true, the text will be drawn immediately, if false, the text will be drawn after the previous subtitle has finished
 * 
 * Used to be known as _DRAW_SUBTITLE_TIMED
 * 
 * Hash: 0x9D77056A530643F6 | Since: 323
 */
export function endTextCommandPrint(duration: number, drawImmediately: boolean): void {
    EndTextCommandPrint(duration, drawImmediately);
}

/**
 * Finalizes a text command started with BEGIN_TEXT_COMMAND_SET_BLIP_NAME, setting the name of the specified blip.
 * 
 * Hash: 0xBC38B49BCB83BC9B | Since: 323
 */
export function endTextCommandSetBlipName(blip: number | IBlip): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    EndTextCommandSetBlipName(_blip);
}

/**
 * Shows an "award" notification above the minimap, example: https://i.imgur.com/e2DNaKX.png
 * Example:
 * 
 * `HUD::BEGIN_TEXT_COMMAND_THEFEED_POST("HUNT");`
 * `HUD::END_TEXT_COMMAND_THEFEED_POST_AWARD("Hunting", "Hunting_Gold_128", 0, 109, "HUD_MED_UNLKED");`
 * 
 * Hash: 0xAA295B6F28BD587D | Since: 323
 */
export function endTextCommandThefeedPostAward(textureDict: string, textureName: string, rpBonus: number, colorOverlay: number, titleLabel: string): number {
    return EndTextCommandThefeedPostAward(textureDict, textureName, rpBonus, colorOverlay, titleLabel);
}

/**
 * No comment provided
 * 
 * Hash: 0x97C9E4E7024A8F2C | Since: 323
 */
export function endTextCommandThefeedPostCrewtag(isLeader: boolean, unk0: boolean, clanDesc: number, R: number, G: number, B: number): [number, number] {
    return EndTextCommandThefeedPostCrewtag(false, false, 0, isLeader, unk0, clanDesc, R, G, B);
}

/**
 * No comment provided
 * 
 * Hash: 0x137BC35589E34E1E | Since: 323
 */
export function endTextCommandThefeedPostCrewtagWithGameName(isLeader: boolean, unk0: boolean, clanDesc: number, playerName: string, R: number, G: number, B: number): [number, number] {
    return EndTextCommandThefeedPostCrewtagWithGameName(false, false, 0, isLeader, unk0, clanDesc, playerName, R, G, B);
}

/**
 * No comment provided
 * 
 * Hash: 0x8EFCCF6EC66D85E4 | Since: 323
 */
export function endTextCommandThefeedPostCrewRankupWithLiteralFlag(): number {
    return EndTextCommandThefeedPostCrewRankup(undefined, undefined, undefined, false, false);
}

/**
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * List of picNames: https://pastebin.com/XdpJVbHz
 * 
 * 
 * flash is a bool for fading in.
 * iconTypes:
 * 1 : Chat Box
 * 2 : Email
 * 3 : Add Friend Request
 * 4 : Nothing
 * 5 : Nothing
 * 6 : Nothing
 * 7 : Right Jumping Arrow
 * 8 : RP Icon
 * 9 : $ Icon
 * 
 * "sender" is the very top header. This can be any old string.
 * "subject" is the header under the sender.
 * 
 * Hash: 0x1CCD9A37359072CF | Since: 323
 */
export function endTextCommandThefeedPostMessagetext(txdName: string, textureName: string, flash: boolean, iconType: number, sender: string, subject: string): number {
    return EndTextCommandThefeedPostMessagetext(txdName, textureName, flash, iconType, sender, subject);
}

/**
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * Needs more research.
 * 
 * Only one type of usage in the scripts:
 * 
 * `HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_SUBTITLE_LABEL("CHAR_ACTING_UP", "CHAR_ACTING_UP", 0, 0, "DI_FEED_CHAR", a_0);`
 * 
 * Hash: 0xC6F580E4C94926AC | Since: 323
 */
export function endTextCommandThefeedPostMessagetextSubtitleLabel(txdName: string, textureName: string, flash: boolean, iconType: number, sender: string, subject: string): number {
    return EndTextCommandThefeedPostMessagetextGxtEntry(txdName, textureName, flash, iconType, sender, subject);
}

/**
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * NOTE: 'duration' is a multiplier, so 1.0 is normal, 2.0 is twice as long (very slow), and 0.5 is half as long.
 * 
 * Example, only occurrence in the scripts:
 * `v_8 = HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_TU("CHAR_SOCIAL_CLUB", "CHAR_SOCIAL_CLUB", 0, 0, &v_9, "", a_5);`
 * 
 * Hash: 0x1E6611149DB3DB6B | Since: 323
 */
export function endTextCommandThefeedPostMessagetextTu(txdName: string, textureName: string, flash: boolean, iconType: number, sender: string, subject: string, duration: number): number {
    return EndTextCommandThefeedPostMessagetextTu(txdName, textureName, flash, iconType, sender, subject, duration);
}

/**
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * List of picNames https://pastebin.com/XdpJVbHz
 * 
 * flash is a bool for fading in.
 * iconTypes:
 * 1 : Chat Box
 * 2 : Email
 * 3 : Add Friend Request
 * 4 : Nothing
 * 5 : Nothing
 * 6 : Nothing
 * 7 : Right Jumping Arrow
 * 8 : RP Icon
 * 9 : $ Icon
 * 
 * "sender" is the very top header. This can be any old string.
 * "subject" is the header under the sender.
 * "duration" is a multiplier, so 1.0 is normal, 2.0 is twice as long (very slow), and 0.5 is half as long.
 * "clanTag" shows a crew tag in the "sender" header, after the text. You need to use 3 underscores as padding. Maximum length of this field seems to be 7. (e.g. "MK" becomes "___MK", "ACE" becomes "___ACE", etc.)
 * 
 * Hash: 0x5CBF7BADE20DB93E | Since: 323
 */
export function endTextCommandThefeedPostMessagetextWithCrewTag(txdName: string, textureName: string, flash: boolean, iconType: number, sender: string, subject: string, duration: number, clanTag: string): number {
    return EndTextCommandThefeedPostMessagetextWithCrewTag(txdName, textureName, flash, iconType, sender, subject, duration, clanTag);
}

/**
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * List of picNames:  https://pastebin.com/XdpJVbHz
 * 
 * flash is a bool for fading in.
 * iconTypes:
 * 1 : Chat Box
 * 2 : Email
 * 3 : Add Friend Request
 * 4 : Nothing
 * 5 : Nothing
 * 6 : Nothing
 * 7 : Right Jumping Arrow
 * 8 : RP Icon
 * 9 : $ Icon
 * 
 * "sender" is the very top header. This can be any old string.
 * "subject" is the header under the sender.
 * "duration" is a multiplier, so 1.0 is normal, 2.0 is twice as long (very slow), and 0.5 is half as long.
 * "clanTag" shows a crew tag in the "sender" header, after the text. You need to use 3 underscores as padding. Maximum length of this field seems to be 7. (e.g. "MK" becomes "___MK", "ACE" becomes "___ACE", etc.)
 * iconType2 is a mirror of iconType. It shows in the "subject" line, right under the original iconType.
 * 
 * 
 * int IconNotification(char *text, char *text2, char *Subject)
 * {
 * BEGIN_TEXT_COMMAND_THEFEED_POST("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * _SET_NOTIFICATION_MESSAGE_CLAN_TAG_2("CHAR_SOCIAL_CLUB", "CHAR_SOCIAL_CLUB", 1, 7, text2, Subject, 1.0f, "__EXAMPLE", 7);
 * return END_TEXT_COMMAND_THEFEED_POST_TICKER(1, 1);
 * }
 * 
 * Hash: 0x531B84E7DA981FB6 | Since: 323
 */
export function endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(txdName: string, textureName: string, flash: boolean, iconType1: number, sender: string, subject: string, duration: number, clanTag: string, iconType2: number): number {
    return EndTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(txdName, textureName, flash, iconType1, sender, subject, duration, clanTag, iconType2, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xF020C96915705B3A | Since: 323
 */
export function endTextCommandThefeedPostMpticker(blink: boolean): number {
    return EndTextCommandThefeedPostMpticker(blink, false);
}

/**
 * returns a notification handle, prints out a notification like below:
 * type range: 0 - 2
 * if you set type to 1, image goes from 0 - 39 - Xbox you can add text to
 * 
 * example:
 * `HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1, 20, "Who you trynna get crazy with, ese? Don't you know I'm LOCO?!");`
 * - https://imgur.com/lGBPCz3
 * 
 * Hash: 0xD202B92CBF1D816F | Since: 323
 */
export function endTextCommandThefeedPostReplay(_type: number, image: number, text: string): number {
    return EndTextCommandThefeedPostReplayIcon(_type, image, text);
}

/**
 * returns a notification handle, prints out a notification like below:
 * type range: 0 - 2
 * if you set type to 1, button accepts "~INPUT_SOMETHING~"
 * 
 * example:
 * `HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1, "~INPUT_TALK~", "Who you trynna get crazy with, ese? Don't you know I'm LOCO?!");`
 * - https://imgur.com/UPy0Ial
 * 
 * 
 * Examples from the scripts:
 * `l_D1[1\/\*1\*\/]=HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1,"~INPUT_REPLAY_START_STOP_RECORDING~","");`
 * `l_D1[2\/\*1\*\/]=HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1,"~INPUT_SAVE_REPLAY_CLIP~","");`
 * `l_D1[1\/\*1\*\/]=HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1,"~INPUT_REPLAY_START_STOP_RECORDING~","");`
 * `l_D1[2\/\*1\*\/]=HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1,"~INPUT_REPLAY_START_STOP_RECORDING_SECONDARY~","");`
 * 
 * 
 * Hash: 0xDD6CB2CCE7C2735C | Since: 323
 */
export function endTextCommandThefeedPostReplayInput(_type: number, button: string, text: string): number {
    return EndTextCommandThefeedPostReplayInput(_type, button, text);
}

/**
 * List of picture names: https://pastebin.com/XdpJVbHz
 * Example result: https://i.imgur.com/SdEZ22m.png
 * 
 * Hash: 0x2B7E9A4EAAA93C89 | Since: 323
 */
export function endTextCommandThefeedPostStats(statTitle: string, iconEnum: number, stepVal: boolean, barValue: number, isImportant: boolean, pictureTextureDict: string, pictureTextureName: string): number {
    return EndTextCommandThefeedPostStats(statTitle, iconEnum, stepVal, barValue, isImportant, pictureTextureDict, pictureTextureName);
}

/**
 * No comment provided
 * 
 * Hash: 0x2ED7843F8F801023 | Since: 323
 */
export function endTextCommandThefeedPostTicker(blink: boolean): number {
    return EndTextCommandThefeedPostTicker(blink, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x44FA03975424A0EE | Since: 323
 */
export function endTextCommandThefeedPostTickerForced(blink: boolean): number {
    return EndTextCommandThefeedPostTickerForced(blink, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x378E809BF61EC840 | Since: 323
 */
export function endTextCommandThefeedPostTickerWithTokens(blink: boolean): number {
    return EndTextCommandThefeedPostTickerWithTokens(blink, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x33EE12743CCD6343 | Since: 323
 */
export function endTextCommandThefeedPostUnlock(gxtLabel1: string, gxtLabel2: string): number {
    return EndTextCommandThefeedPostUnlock(gxtLabel1, 0, gxtLabel2);
}

/**
 * No comment provided
 * 
 * Hash: 0xC8F3AAF93D0600BF | Since: 323
 */
export function endTextCommandThefeedPostUnlockTu(gxtLabel1: string, gxtLabel2: string): number {
    return EndTextCommandThefeedPostUnlockTu(gxtLabel1, 0, gxtLabel2, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7AE0589093A2E088 | Since: 323
 */
export function endTextCommandThefeedPostUnlockTuWithColor(): number {
    return EndTextCommandThefeedPostUnlockTuWithColor(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * List of picNames: https://pastebin.com/XdpJVbHz
 * HUD colors and their values: https://pastebin.com/d9aHPbXN
 * 
 * Shows a deathmatch score above the minimap, example: https://i.imgur.com/YmoMklG.png
 * 
 * Hash: 0xB6871B0555B02996 | Since: 323
 */
export function endTextCommandThefeedPostVersusTu(txdName1: string, textureName1: string, count1: number, txdName2: string, textureName2: string, count2: number, hudColor1: number, hudColor2: number): number {
    return EndTextCommandThefeedPostVersusTu(txdName1, textureName1, count1, txdName2, textureName2, count2, hudColor1, hudColor2);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEF214315D276FD1 | Since: 323
 */
export function flagPlayerContextInTournament(toggle: boolean): void {
    FlagPlayerContextInTournament(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x02CFBA0C9E9275CE | Since: 323
 */
export function flashAbilityBar(millisecondsToFlash: number): void {
    FlashAbilityBar(millisecondsToFlash);
}

/**
 * adds a short flash to the Radar/Minimap
 * Usage: UI.FLASH_MINIMAP_DISPLAY
 * 
 * Hash: 0xF2DD778C22B15BDA | Since: 323
 */
export function flashMinimapDisplay(): void {
    FlashMinimapDisplay();
}

/**
 * No comment provided
 * 
 * Hash: 0x6B1DE27EE78E6A19 | Since: 323
 */
export function flashMinimapDisplayWithColor(hudColorIndex: number): void {
    FlashMinimapDisplayWithColor(hudColorIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xA18AFB39081B6A1F | Since: 323
 */
export function flashWantedDisplay(): void {
    FlashWantedDisplay(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE4C0E6DBC6F2C6F | Since: 323
 */
export function forceCloseReportugcMenu(): void {
    ForceCloseReportugcMenu();
}

/**
 * No comment provided
 * 
 * Hash: 0x8817605C2BA76200 | Since: 323
 */
export function forceCloseTextInputBox(): void {
    ForceCloseTextInputBox();
}

/**
 * No comment provided
 * 
 * Hash: 0x57D760D55F54E071 | Since: 323
 */
export function forceNextMessageToPreviousBriefsList(): void {
    Citizen.invokeNative('0x57D760D55F54E071', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA8D65C1C65702E5 | Since: 323
 */
export function forceOffWantedStarFlash(toggle: boolean): void {
    Citizen.invokeNative('0xBA8D65C1C65702E5', toggle);
}

/**
 * Not present in retail version of the game, actual definiton seems to be
 * _LOG_DEBUG_INFO(const char* category, const char* debugText);
 * 
 * Hash: 0x2162C446DFDF38FD | Since: 323
 */
export function forceScriptedGfxWhenFrontendActive(): void {
    LogDebugInfo(undefined);
}

/**
 * Doesn't actually return anything.
 * 
 * Hash: 0x1121BFA1A1A522A8 | Since: 323
 */
export function forceSonarBlipsThisFrame(): boolean {
    return ForceSonarBlipsThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x7CD934010E115C2C | Since: 323
 */
export function getAiPedPedBlipIndex(ped: number | IPed): number {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return GetAiBlip2(_ped);
}

/**
 * Returns the current AI BLIP for the specified ped
 * 
 * Hash: 0x56176892826A4FE8 | Since: 323
 */
export function getAiPedVehicleBlipIndex(ped: number | IPed): number {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    return GetAiBlip(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x970F608F0EE6C885 | Since: 323
 */
export function getBlipAlpha(blip: number | IBlip): number {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return GetBlipAlpha(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0xDF729E8D20CF7327 | Since: 323
 */
export function getBlipColour(blip: number | IBlip): number {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return GetBlipColour(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x586AFE3FF72D996E | Since: 323
 */
export function getBlipCoords(blip: number | IBlip): Vector3 {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return new Vector3(GetBlipCoords(_blip));
}

/**
 * Returns -1, 0, +1, depending on if the blip is fading out, doing nothing, or fading in respectively.
 * 
 * Hash: 0x2C173AE2BDB9385E | Since: 463
 */
export function getBlipFadeDirection(blip: number | IBlip): number {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return Citizen.invokeNative('0x2C173AE2BDB9385E', _blip);
}

/**
 * Returns the Blip handle of given Entity.
 * 
 * Hash: 0xBC8DBDCA2436F7E8 | Since: 323
 */
export function getBlipFromEntity(entity: number | IEntity): number {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return GetBlipFromEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x729B5F1EFBC0AAEE | Since: 323
 */
export function getBlipHudColour(blip: number | IBlip): number {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return GetBlipHudColour(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA7C7F0AADF25D09 | Since: 323
 */
export function getBlipInfoIdCoord(blip: number | IBlip): Vector3 {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return new Vector3(GetBlipInfoIdCoord(_blip));
}

/**
 * No comment provided
 * 
 * Hash: 0x1E314167F701DC3B | Since: 323
 */
export function getBlipInfoIdDisplay(blip: number | IBlip): number {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return GetBlipInfoIdDisplay(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x4BA4E2553AFEDC2C | Since: 323
 */
export function getBlipInfoIdEntityIndex(blip: number | IBlip): number {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return GetBlipInfoIdEntityIndex(_blip);
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0x9B6786E4C03DD382 | Since: 323
 */
export function getBlipInfoIdPickupIndex(blip: number | IBlip): any {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return GetBlipInfoIdPickupIndex(_blip);
}

/**
 * Returns a value based on what the blip is attached to
 * 1 - Vehicle
 * 2 - Ped
 * 3 - Object
 * 4 - Coord
 * 5 - unk
 * 6 - Pickup
 * 7 - Radius
 * 
 * Hash: 0xBE9B0959FFD0779B | Since: 323
 */
export function getBlipInfoIdType(blip: number | IBlip): number {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return GetBlipInfoIdType(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x003E92BA477F9D7F | Since: 2060
 */
export function getBlipRotation(blip: number | IBlip): number {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return GetBlipRotation(_blip);
}

/**
 * Blips Images + IDs:
 * gtaxscripting.blogspot.com/2016/05/gta-v-blips-id-and-image.html
 * 
 * Hash: 0x1FC877464A04FC4F | Since: 323
 */
export function getBlipSprite(blip: number | IBlip): number {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return GetBlipSprite(_blip);
}

/**
 * Returns a substring of a specified length starting at a specified position.
 * 
 * Example:
 * // Get "STRING" text from "MY_STRING"
 * `subStr = HUD::GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME("MY_STRING", 3, 6);`
 * 
 * Hash: 0x169BD9382084C8C0 | Since: 323
 */
export function getCharacterFromAudioConversationFilename(text: string, position: number, length: number): string {
    return GetTextSubstring(text, position, length);
}

/**
 * Returns a substring that is between two specified positions. The length of the string will be calculated using (endPosition - startPosition).
 * 
 * Example:
 * // Get "STRING" text from "MY_STRING"
 * `subStr = HUD::GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME_BYTES("MY_STRING", 3, 9);`
 * // Overflows are possibly replaced with underscores (needs verification)
 * `subStr = HUD::GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME_BYTES("MY_STRING", 3, 10); // "STRING_"?`
 * 
 * Hash: 0xCE94AEBA5D82908A | Since: 323
 */
export function getCharacterFromAudioConversationFilenameBytes(text: string, startPosition: number, endPosition: number): string {
    return GetTextSubstringSlice(text, startPosition, endPosition);
}

/**
 * Returns a substring of a specified length starting at a specified position. The result is guaranteed not to exceed the specified max length.
 * 
 * NOTE: The 'maxLength' parameter might actually be the size of the buffer that is returned. More research is needed. -CL69
 * 
 * Example:
 * // Condensed example of how Rockstar uses this function
 * `strLen = HUD::GET_LENGTH_OF_LITERAL_STRING(MISC::GET_ONSCREEN_KEYBOARD_RESULT());`
 * `subStr = HUD::GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME_WITH_BYTE_LIMIT(MISC::GET_ONSCREEN_KEYBOARD_RESULT(), 0, strLen, 63);`
 * 
 * --
 * 
 * "fm_race_creator.ysc", line 85115:
 * // parameters modified for clarity
 * BOOL sub_8e5aa(char *text, int length) {
 * for (i = 0; i <= (length - 2); i += 1) {
 * `if (!MISC::ARE_STRINGS_EQUAL(HUD::GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME_WITH_BYTE_LIMIT(text, i, i + 1, 1), " ")) {`
 * return FALSE;
 * }
 * }
 * return TRUE;
 * }
 * 
 * Hash: 0xB2798643312205C5 | Since: 323
 */
export function getCharacterFromAudioConversationFilenameWithByteLimit(text: string, position: number, length: number, maxLength: number): string {
    return GetTextSubstringSafe(text, position, length, maxLength);
}

/**
 * No comment provided
 * 
 * Hash: 0x8F08017F9D7C47BD | Since: 323
 */
export function getCharacterMenuPedFloatStat(statHash: number): [boolean, number] {
    return Citizen.invokeNative('0x8F08017F9D7C47BD', statHash, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA6B2F7CE32AB653 | Since: 323
 */
export function getCharacterMenuPedIntStat(): [boolean, any] {
    return Citizen.invokeNative('0xCA6B2F7CE32AB653', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x24A49BEAF468DC90 | Since: 323
 */
export function getCharacterMenuPedMaskedIntStat(statHash: number | string, mask: number): [boolean, any] {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return Citizen.invokeNative('0x24A49BEAF468DC90', statHash, 0, mask, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD484BF71050CA1EE | Since: 1180
 */
export function getClosestBlipInfoId(blipSprite: number): number {
    return GetClosestBlipOfType(blipSprite);
}

/**
 * `if (HUD::GET_CURRENT_FRONTEND_MENU_VERSION() == joaat("fe_menu_version_empty_no_background"))`
 * 
 * Hash: 0x2309595AD6145265 | Since: 323
 */
export function getCurrentFrontendMenuVersion(): number {
    return GetCurrentFrontendMenuVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0x01A358D9128B7A86 | Since: 323
 */
export function getCurrentWebpageId(): number {
    return GetCurrentWebpageId();
}

/**
 * No comment provided
 * 
 * Hash: 0x97D47996FC48CBAD | Since: 323
 */
export function getCurrentWebsiteId(): number {
    return GetCurrentWebsiteId();
}

/**
 * This function is hard-coded to always return 1.
 * 
 * Hash: 0x52F0982D7FD156B6 | Since: 323
 */
export function getDefaultScriptRendertargetRenderId(): number {
    return GetDefaultScriptRendertargetRenderId();
}

/**
 * Getter for SET_FAKE_SPECTATOR_MODE
 * 
 * Hash: 0xC2D2AD9EAAE265B8 | Since: 505
 */
export function getFakeSpectatorMode(): boolean {
    return Citizen.invokeNative('0xC2D2AD9EAAE265B8');
}

/**
 * `Gets a localized string literal from a label name. Can be used for output of e.g. VEHICLE::GET_LIVERY_NAME. To check if a GXT label can be localized with this, HUD::DOES_TEXT_LABEL_EXIST can be used.`
 * 
 * Hash: 0x7B5280EBA9840C72 | Since: 323
 */
export function getFilenameForAudioConversation(labelName: string): string {
    return GetFilenameForAudioConversation(labelName);
}

/**
 * No comment provided
 * 
 * Hash: 0x1BEDE233E6CD2A1F | Since: 323
 */
export function getFirstBlipInfoId(blipSprite: number): number {
    return GetFirstBlipInfoId(blipSprite);
}

/**
 * No comment provided
 * 
 * Hash: 0x98C3CF913D895111 | Since: 505
 */
export function getFirstNCharactersOfLiteralString(_string: string, length: number): string {
    return Citizen.invokeNative('0x98C3CF913D895111', _string, length);
}

/**
 * Returns the ActionScript flagValue.
 * ActionScript flags are global flags that scaleforms use
 * Flags found during testing
 * 0: Returns 1 if the web_browser keyboard is open, otherwise 0
 * 1: Returns 1 if the player has clicked back twice on the opening page, otherwise 0 (web_browser)
 * 2: Returns how many links the player has clicked in the web_browser scaleform, returns 0 when the browser gets closed
 * 9: Returns the current selection on the mobile phone scaleform
 * 
 * There are 20 flags in total.
 * 
 * Hash: 0xE3B05614DCE1D014 | Since: 323
 */
export function getGlobalActionscriptFlag(flagIndex: number): number {
    return GetGlobalActionscriptFlag(flagIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x7C9C91AB74A0360F | Since: 323
 */
export function getColour(hudColorIndex: number): [number, number, number, number] {
    return GetHudColour(hudColorIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x223CA69A8C4417FD | Since: 323
 */
export function getComponentPosition(id: number): Vector3 {
    return new Vector3(GetHudComponentPosition(id));
}

/**
 * World to relative screen coords, this world to screen will keep the text on screen. Was named _GET_SCREEN_COORD_FROM_WORLD_COORD, but this conflicts with 0x34E82F05DF2974F5. As that hash actually matches GET_SCREEN_COORD_FROM_WORLD_COORD that one supercedes and this one was renamed to _GET_2D_COORD_FROM_3D_COORD
 * 
 * Hash: 0xF9904D11F1ACBEC3 | Since: 323
 */
export function getScreenPositionFromWorldPosition(worldPos: Vector3): [number, number, number] {
    return GetHudScreenPositionFromWorldPosition(worldPos.x, worldPos.y, worldPos.z);
}

/**
 * Returns the length of the string passed (much like strlen).
 * 
 * Hash: 0xF030907CCBB8A9FD | Since: 323
 */
export function getLengthOfLiteralString(_string: string): number {
    return GetLengthOfLiteralString(_string);
}

/**
 * No comment provided
 * 
 * Hash: 0x43E4111189E54F0E | Since: 323
 */
export function getLengthOfLiteralStringInBytes(_string: string): number {
    return GetLengthOfLiteralStringInBytes(_string);
}

/**
 * Returns the string length of the string from the gxt string .
 * 
 * Hash: 0x801BD273D3A23F74 | Since: 323
 */
export function getLengthOfStringWithThisTextLabel(gxt: string): number {
    return GetLengthOfStringWithThisTextLabel(gxt);
}

/**
 * No comment provided
 * 
 * Hash: 0xDCD4EC3F419D02FA | Since: 323
 */
export function getMainPlayerBlipId(): number {
    return GetMainPlayerBlipId();
}

/**
 * lastItemMenuId: this is the menuID of the last selected item minus 1000 (lastItem.menuID - 1000)
 * selectedItemMenuId: same as lastItemMenuId except for the currently selected menu item
 * selectedItemUniqueId: this is uniqueID of the currently selected menu item
 * 
 * when the pausemenu is closed:
 * lastItemMenuId = -1
 * selectedItemMenuId = -1
 * selectedItemUniqueId = 0
 * 
 * when the header gains focus:
 * lastItemMenuId updates as normal or 0 if the pausemenu was just opened
 * selectedItemMenuId becomes a unique id for the pausemenu page that focus was taken from (?) or 0 if the pausemenu was just opened
 * selectedItemUniqueId = -1
 * 
 * when focus is moved from the header to a pausemenu page:
 * lastItemMenuId becomes a unique id for the pausemenu page that focus was moved to (?)
 * selectedItemMenuId = -1
 * selectedItemUniqueId updates as normal
 * 
 * Hash: 0x7E17BE53E1AAABAF | Since: 323
 */
export function getMenuLayoutChangedEventDetails(): [number, number, number] {
    return GetPauseMenuSelectionData();
}

/**
 * p0 was always 0xAE2602A3.
 * 
 * Hash: 0x052991E59076E4E4 | Since: 323
 */
export function getMenuPedBoolStat(statHash: number | string): [boolean, boolean] {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return GetMenuPedBoolStat(statHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x5FBD7095FE7AE57F | Since: 323
 */
export function getMenuPedFloatStat(statHash: number | string): [boolean, number] {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return GetMenuPedFloatStat(statHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xEF4CED81CEBEDC6D | Since: 323
 */
export function getMenuPedIntStat(): [boolean, any] {
    return GetMenuPedIntStat(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x90A6526CF0381030 | Since: 323
 */
export function getMenuPedMaskedIntStat(statHash: number | string, mask: number): [boolean, number] {
    if (typeof statHash === 'string') statHash = GetHashKey(statHash)
    return GetMenuPedMaskedIntStat(statHash, mask, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x36C1451A88A09630 | Since: 323
 */
export function getMenuTriggerEventDetails(): [number, number] {
    return GetPauseMenuSelection();
}

/**
 * No comment provided
 * 
 * Hash: 0x6E31B91145873922 | Since: 323
 */
export function getMinimapFowCoordinateIsRevealed(pos: Vector3): boolean {
    return GetMinimapFowCoordinateIsRevealed(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0130B41D3CF4574 | Since: 323
 */
export function getMinimapFowDiscoveryRatio(): number {
    return GetMinimapFowDiscoveryRatio();
}

/**
 * No comment provided
 * 
 * Hash: 0x632B2940C67F4EA9 | Since: 323
 */
export function getMouseEvent(scaleformHandle: number): [boolean, any, any, any] {
    return GetScaleformMovieCursorSelection(scaleformHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A6478B61C6BDC3B | Since: 323
 */
export function getNamedRendertargetRenderId(name: string): number {
    return GetNamedRendertargetRenderId(name);
}

/**
 * No comment provided
 * 
 * Hash: 0x5C90988E7C8E1AF4 | Since: 323
 */
export function getNewSelectedMissionCreatorBlip(): number {
    return GetNewSelectedMissionCreatorBlip();
}

/**
 * No comment provided
 * 
 * Hash: 0x14F96AA50D6FBEA7 | Since: 323
 */
export function getNextBlipInfoId(blipSprite: number): number {
    return GetNextBlipInfoId(blipSprite);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F0CF9CB7E589B88 | Since: 463
 */
export function getNorthBlidIndex(): number {
    return GetNorthRadarBlip();
}

/**
 * No comment provided
 * 
 * Hash: 0x9A3FF3DE163034E8 | Since: 323
 */
export function getNumberOfActiveBlips(): number {
    return GetNumberOfActiveBlips();
}

/**
 * No comment provided
 * 
 * Hash: 0x5BFF36D6ED83E0AE | Since: 323
 */
export function getPauseMenuPosition(): Vector3 {
    return new Vector3(GetPauseMenuCursorPosition());
}

/**
 * Returns:
 * 
 * 0
 * 5
 * 10
 * 15
 * 20
 * 25
 * 30
 * 35
 * 
 * 
 * Hash: 0x272ACD84970869C5 | Since: 323
 */
export function getPauseMenuState(): number {
    return GetPauseMenuState();
}

/**
 * No comment provided
 * 
 * Hash: 0xA238192F33110615 | Since: 323
 */
export function getPmPlayerCrewColor(): [boolean, number, number, number] {
    return Citizen.invokeNative('0xA238192F33110615');
}

/**
 * This gets the height of the FONT and not the total text. You need to get the number of lines your text uses, and get the height of a newline (I'm using a smaller value) to get the total text height.
 * 
 * Hash: 0xDB88A37483346780 | Since: 323
 */
export function getRenderedCharacterHeight(size: number, font: number): number {
    return GetRenderedCharacterHeight(size, font);
}

/**
 * No comment provided
 * 
 * Hash: 0x593FEAE1F73392D4 | Since: 323
 */
export function getScreenCodeWantsScriptToControl(): number {
    return Citizen.invokeNative('0x593FEAE1F73392D4');
}

/**
 * No comment provided
 * 
 * Hash: 0x4A9923385BDB9DAD | Since: 323
 */
export function getStandardBlipEnumId(): number {
    return GetStandardBlipEnumId();
}

/**
 * This functions converts the hash of a street name into a readable string.
 * 
 * `For how to get the hashes, see PATHFIND::GET_STREET_NAME_AT_COORD.`
 * 
 * Hash: 0xD0EF8A959B8A4CB9 | Since: 323
 */
export function getStreetNameFromHashKey(hash: number | string): string {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return GetStreetNameFromHashKey(hash);
}

/**
 * Has to do with the confirmation overlay (E.g. confirm exit)
 * 
 * Hash: 0x81DF9ABA6C83DFF9 | Since: 1290
 */
export function getWarningScreenMessageHash(): number {
    return GetWarningMessageTitleHash();
}

/**
 * No comment provided
 * 
 * Hash: 0x186E5D252FA50E7D | Since: 323
 */
export function getWaypointBlipEnumId(): number {
    return GetWaypointBlipEnumId();
}

/**
 * No comment provided
 * 
 * Hash: 0xF46851AB8B02EF40 | Since: 3717
 */
export function getWaypointClearOnArrivalMode(): number {
    return Citizen.invokeNative('0xF46851AB8B02EF40');
}

/**
 * p1 is either 1 or 2 in the PC scripts.
 * 
 * Hash: 0xAC0BFBDC3BE00E14 | Since: 323
 */
export function givePedToPauseMenu(ped: number | IPed): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    GivePedToPauseMenu(_ped, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x02245FE4BED318B8 | Since: 323
 */
export function hasAdditionalTextLoaded(slot: number): boolean {
    return HasAdditionalTextLoaded(slot);
}

/**
 * No comment provided
 * 
 * Hash: 0xA277800A9EAE340E | Since: 323
 */
export function hasDirectorModeBeenLaunchedByCode(): boolean {
    return HasDirectorModeBeenTriggered();
}

/**
 * No comment provided
 * 
 * Hash: 0x2E22FEFA0100275E | Since: 323
 */
export function hasMenuLayoutChangedEventOccurred(): boolean {
    return Citizen.invokeNative('0x2E22FEFA0100275E');
}

/**
 * No comment provided
 * 
 * Hash: 0xF284AC67940C6812 | Since: 323
 */
export function hasMenuTriggerEventOccurred(): boolean {
    return Citizen.invokeNative('0xF284AC67940C6812');
}

/**
 * No comment provided
 * 
 * Hash: 0x214CD562A939246A | Since: 323
 */
export function hasScriptHiddenHelpThisFrame(): boolean {
    return Citizen.invokeNative('0x214CD562A939246A');
}

/**
 * Checks if the specified gxt has loaded into the passed slot.
 * 
 * Hash: 0xADBF060E2B30C5BC | Since: 323
 */
export function hasThisAdditionalTextLoaded(gxt: string, slot: number): boolean {
    return HasThisAdditionalTextLoaded(gxt, slot);
}

/**
 * No comment provided
 * 
 * Hash: 0xD46923FC481CA285 | Since: 323
 */
export function hideHelpTextThisFrame(): void {
    HideHelpTextThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x243296A510B562B6 | Since: 2060
 */
export function hidemarkersThisFrame(): void {
    Citizen.invokeNative('0x243296A510B562B6');
}

/**
 * Hides HUD and radar this frame and prohibits switching to other weapons (or accessing the weapon wheel)
 * 
 * Hash: 0x719FF505F097FD20 | Since: 323
 */
export function hideAndRadarThisFrame(): void {
    HideHudAndRadarThisFrame();
}

/**
 * This function hides various HUD (Heads-up Display) components.
 * Listed below are the integers and the corresponding HUD component.
 * - 1 : WANTED_STARS
 * - 2 : WEAPON_ICON
 * - 3 : CASH
 * - 4 : MP_CASH
 * - 5 : MP_MESSAGE
 * - 6 : VEHICLE_NAME
 * - 7 : AREA_NAME
 * - 8 : VEHICLE_CLASS
 * - 9 : STREET_NAME
 * - 10 : HELP_TEXT
 * - 11 : FLOATING_HELP_TEXT_1
 * - 12 : FLOATING_HELP_TEXT_2
 * - 13 : CASH_CHANGE
 * - 14 : RETICLE
 * - 15 : SUBTITLE_TEXT
 * - 16 : RADIO_STATIONS
 * - 17 : SAVING_GAME
 * - 18 : GAME_STREAM
 * - 19 : WEAPON_WHEEL
 * - 20 : WEAPON_WHEEL_STATS
 * - 21 : HUD_COMPONENTS
 * - 22 : HUD_WEAPONS
 * 
 * These integers also work for the `SHOW_HUD_COMPONENT_THIS_FRAME` native, but instead shows the HUD Component.
 * 
 * Hash: 0x6806C51AD12B83B8 | Since: 323
 */
export function hideComponentThisFrame(id: number): void {
    HideHudComponentThisFrame(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x4B0311D3CDC4648F | Since: 323
 */
export function hideLoadingOnFadeThisFrame(): void {
    HideLoadingOnFadeThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x5FBAE526203990C9 | Since: 323
 */
export function hideMinimapExteriorMapThisFrame(): void {
    HideMinimapExteriorMapThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x20FE7FDFEEAD38C0 | Since: 323
 */
export function hideMinimapInteriorMapThisFrame(): void {
    HideMinimapInteriorMapThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x532CFF637EF80148 | Since: 323
 */
export function hideNumberOnBlip(blip: number | IBlip): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    HideNumberOnBlip(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0xE374C498D8BADC14 | Since: 323
 */
export function hideScriptedComponentThisFrame(id: number): void {
    HideScriptedHudComponentThisFrame(id);
}

/**
 * Hides area and vehicle name HUD components for one frame.
 * 
 * Hash: 0xA4DEDE28B1814289 | Since: 323
 */
export function hideStreetAndCarNamesThisFrame(): void {
    HideAreaAndVehicleNameThisFrame();
}

/**
 * Displays "blazer_wheels_up" and "blazer_wheels_down" "weapon" icons when switching between jetski and quadbike modes. Works only on vehicles using "VEHICLE_TYPE_AMPHIBIOUS_QUADBIKE" vehicle type. Needs to be called every time prior to switching modes, otherwise the icon will only appear when switching modes once.
 * 
 * Hash: 0x488043841BBE156F | Since: 1011
 */
export function forceSpecialVehicleWeaponWheel(): void {
    HudDisplayLoadingScreenTips();
}

/**
 * Forces the weapon wheel to show/hide.
 * 
 * Hash: 0xEB354E5376BC81A7 | Since: 323
 */
export function forceWeaponWheel(show: boolean): void {
    HudForceWeaponWheel(show);
}

/**
 * Returns the weapon hash to the selected/highlighted weapon in the wheel
 * 
 * Hash: 0xA48931185F0536FE | Since: 323
 */
export function getWeaponWheelCurrentlyHighlighted(): number {
    return HudWeaponWheelGetSelectedHash();
}

/**
 * Returns the weapon hash active in a specific weapon wheel slotList
 * 
 * Hash: 0xA13E93403F26C812 | Since: 323
 */
export function getWeaponWheelTopSlot(weaponTypeIndex: number): number {
    return HudWeaponWheelGetSlotHash(weaponTypeIndex);
}

/**
 * Set the active slotIndex in the wheel weapon to the slot associated with the provided Weapon hash
 * 
 * Hash: 0x72C1056D678BB7D8 | Since: 323
 */
export function setWeaponWheelTopSlot(weaponHash: number | string): void {
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    HudSetWeaponWheelTopSlot(weaponHash);
}

/**
 * Sets a global that disables many weapon input tasks (shooting, aiming, etc.). Does not work with vehicle weapons, only used in selector.ysc
 * 
 * Hash: 0x14C9FDCC41F81F63 | Since: 323
 */
export function showingCharacterSwitchSelection(toggle: boolean): void {
    HudWeaponWheelIgnoreControlInput(toggle);
}

/**
 * Calling this each frame, stops the player from receiving a weapon via the weapon wheel.
 * 
 * Hash: 0x0AFC4AF510774B47 | Since: 323
 */
export function suppressWeaponWheelResultsThisFrame(): void {
    HudWeaponWheelIgnoreSelection();
}

/**
 * No comment provided
 * 
 * Hash: 0xA5E41FD83AD6CEF0 | Since: 323
 */
export function isBlipFlashing(blip: number | IBlip): boolean {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return IsBlipFlashing(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0xE41CA53051197A27 | Since: 323
 */
export function isBlipOnMinimap(blip: number | IBlip): boolean {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return IsBlipOnMinimap(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA5F8727EB75B926 | Since: 323
 */
export function isBlipShortRange(blip: number | IBlip): boolean {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return IsBlipShortRange(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x2432784ACA090DA4 | Since: 323
 */
export function isFloatingHelpTextOnScreen(hudIndex: number): boolean {
    return IsFloatingHelpTextOnScreen(hudIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x3BAB9A4E4F2FF5C7 | Since: 323
 */
export function isFrontendReadyForControl(): boolean {
    return IsFrontendReadyForControl();
}

/**
 * No comment provided
 * 
 * Hash: 0x4D79439A6B55AC67 | Since: 323
 */
export function isHelpMessageBeingDisplayed(): boolean {
    return IsHelpMessageBeingDisplayed();
}

/**
 * No comment provided
 * 
 * Hash: 0x327EDEEEAC55C369 | Since: 323
 */
export function isHelpMessageFadingOut(): boolean {
    return IsHelpMessageFadingOut();
}

/**
 * No comment provided
 * 
 * Hash: 0xDAD37F45428801AE | Since: 323
 */
export function isHelpMessageOnScreen(): boolean {
    return IsHelpMessageOnScreen();
}

/**
 * No comment provided
 * 
 * Hash: 0x4167EFE0527D706E | Since: 323
 */
export function isHoveringOverMissionCreatorBlip(): boolean {
    return IsHoveringOverMissionCreatorBlip();
}

/**
 * Full list of components below
 * 
 * HUD = 0;
 * HUD_WANTED_STARS = 1;
 * HUD_WEAPON_ICON = 2;
 * HUD_CASH = 3;
 * HUD_MP_CASH = 4;
 * HUD_MP_MESSAGE = 5;
 * HUD_VEHICLE_NAME = 6;
 * HUD_AREA_NAME = 7;
 * HUD_VEHICLE_CLASS = 8;
 * HUD_STREET_NAME = 9;
 * HUD_HELP_TEXT = 10;
 * HUD_FLOATING_HELP_TEXT_1 = 11;
 * HUD_FLOATING_HELP_TEXT_2 = 12;
 * HUD_CASH_CHANGE = 13;
 * HUD_RETICLE = 14;
 * HUD_SUBTITLE_TEXT = 15;
 * HUD_RADIO_STATIONS = 16;
 * HUD_SAVING_GAME = 17;
 * HUD_GAME_STREAM = 18;
 * HUD_WEAPON_WHEEL = 19;
 * HUD_WEAPON_WHEEL_STATS = 20;
 * MAX_HUD_COMPONENTS = 21;
 * MAX_HUD_WEAPONS = 22;
 * MAX_SCRIPTED_HUD_COMPONENTS = 141;
 * 
 * Hash: 0xBC4C9EA5391ECC0D | Since: 323
 */
export function isComponentActive(id: number): boolean {
    return IsHudComponentActive(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x8EDC335C943465C8 | Since: 3717
 */
export function isComponentHiddenThisFrame(id: number): boolean {
    return Citizen.invokeNative('0x8EDC335C943465C8', id);
}

/**
 * No comment provided
 * 
 * Hash: 0xA86478C6958735C5 | Since: 323
 */
export function isHidden(): boolean {
    return IsHudHidden();
}

/**
 * No comment provided
 * 
 * Hash: 0x1930DFA731813EC4 | Since: 323
 */
export function isPreferenceSwitchedOn(): boolean {
    return IsHudPreferenceSwitchedOn();
}

/**
 * No comment provided
 * 
 * Hash: 0x801879A9B4F4B2FB | Since: 372
 */
export function isImeInProgress(): boolean {
    return Citizen.invokeNative('0x801879A9B4F4B2FB');
}

/**
 * No comment provided
 * 
 * Hash: 0x7984C03AA5CC2F41 | Since: 323
 */
export function isMessageBeingDisplayed(): boolean {
    return IsMessageBeingDisplayed();
}

/**
 * No comment provided
 * 
 * Hash: 0xAF754F20EB5CD51A | Since: 323
 */
export function isMinimapRendering(): boolean {
    return IsMinimapRendering();
}

/**
 * No comment provided
 * 
 * Hash: 0x26F49BF3381D933D | Since: 323
 */
export function isMissionCreatorBlip(blip: number | IBlip): boolean {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    return IsMissionCreatorBlip(_blip);
}

/**
 * Returns TRUE if mouse is hovering above instructional buttons. Works with all buttons gfx, such as popup_warning, pause_menu_instructional_buttons, instructional_buttons, etc. Note: You have to call TOGGLE_MOUSE_BUTTONS on the scaleform if you want this native to work.
 * 
 * Hash: 0x3D9ACB1EB139E702 | Since: 323
 */
export function isMouseRolledOverInstructionalButtons(): boolean {
    return IsMouseRolledOverInstructionalButtons();
}

/**
 * No comment provided
 * 
 * Hash: 0x4E929E7A5796FD26 | Since: 323
 */
export function isMpGamerTagActive(gamerTagId: number): boolean {
    return IsMpGamerTagActive(gamerTagId);
}

/**
 * No comment provided
 * 
 * Hash: 0x595B5178E412E199 | Since: 323
 */
export function isMpGamerTagFree(gamerTagId: number): boolean {
    return IsMpGamerTagFree(gamerTagId);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E0EB3EB47C8D7AA | Since: 323
 */
export function isMpGamerTagMovieActive(): boolean {
    return IsMpGamerTagMovieActive();
}

/**
 * Returns whether or not the text chat (MULTIPLAYER_CHAT Scaleform component) is active.
 * 
 * Hash: 0xB118AF58B5F332A1 | Since: 323
 */
export function isMpTextChatTyping(): boolean {
    return IsMultiplayerChatActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x113750538FA31298 | Since: 323
 */
export function isNamedRendertargetLinked(modelHash: number | string): boolean {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return IsNamedRendertargetLinked(modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x78DCDC15C9F116B4 | Since: 323
 */
export function isNamedRendertargetRegistered(name: string): boolean {
    return IsNamedRendertargetRegistered(name);
}

/**
 * No comment provided
 * 
 * Hash: 0x4E3CD0EF8A489541 | Since: 323
 */
export function isNavigatingMenuContent(): boolean {
    return IsNavigatingMenuContent();
}

/**
 * Returns the same as IS_SOCIAL_CLUB_ACTIVE
 * 
 * Hash: 0x6F72CD94F7B5B68C | Since: 323
 */
export function isOnlinePoliciesMenuActive(): boolean {
    return IsOnlinePoliciesMenuActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x9049FE339D5F6F6F | Since: 323
 */
export function isPausemapInInteriorMode(): boolean {
    return IsPausemapInInteriorMode();
}

/**
 * No comment provided
 * 
 * Hash: 0xB0034A223497FFCB | Since: 323
 */
export function isPauseMenuActive(): boolean {
    return IsPauseMenuActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x1C491717107431C7 | Since: 323
 */
export function isPauseMenuRestarting(): boolean {
    return IsPauseMenuRestarting();
}

/**
 * No comment provided
 * 
 * Hash: 0x157F93B036700462 | Since: 323
 */
export function isRadarHidden(): boolean {
    return IsRadarHidden();
}

/**
 * No comment provided
 * 
 * Hash: 0x9EB6522EA68F22FE | Since: 323
 */
export function isRadarPreferenceSwitchedOn(): boolean {
    return IsRadarPreferenceSwitchedOn();
}

/**
 * No comment provided
 * 
 * Hash: 0x9135584D09A3437E | Since: 323
 */
export function isReportugcMenuOpen(): boolean {
    return IsReportugcMenuOpen();
}

/**
 * No comment provided
 * 
 * Hash: 0xDD100EB17A94FF65 | Since: 323
 */
export function isScriptedComponentActive(id: number): boolean {
    return IsScriptedHudComponentActive(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x09C0403ED9A751C2 | Since: 323
 */
export function isScriptedComponentHiddenThisFrame(id: number): boolean {
    return IsScriptedHudComponentHiddenThisFrame(id);
}

/**
 * No comment provided
 * 
 * Hash: 0xC406BE343FC4B9AF | Since: 323
 */
export function isSocialClubActive(): boolean {
    return IsSocialClubActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x2F057596F2BD0061 | Since: 323
 */
export function isStorePendingNetworkShutdownToOpen(): boolean {
    return Citizen.invokeNative('0x2F057596F2BD0061');
}

/**
 * No comment provided
 * 
 * Hash: 0x8B6817B71B85EBF0 | Since: 323
 */
export function isStreamingAdditionalText(): boolean {
    return IsStreamingAdditionalText(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xAD6DACA4BA53E0A4 | Since: 323
 */
export function isSubtitlePreferenceSwitchedOn(): boolean {
    return IsSubtitlePreferenceSwitchedOn();
}

/**
 * No comment provided
 * 
 * Hash: 0xEB709A36958ABE0D | Since: 323
 */
export function isUpdatingMpGamerTagNameAndCrewDetails(gamerTagId: number): boolean {
    return IsValidMpGamerTagMovie(gamerTagId);
}

/**
 * No comment provided
 * 
 * Hash: 0xE18B138FABC53103 | Since: 323
 */
export function isWarningMessageActive(): boolean {
    return IsWarningMessageActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xAF42195A42C63BBA | Since: 323
 */
export function isWarningMessageReadyForControl(): boolean {
    return IsWarningMessageActive2();
}

/**
 * No comment provided
 * 
 * Hash: 0x1DD1F58F493F1DA5 | Since: 323
 */
export function isWaypointActive(): boolean {
    return IsWaypointActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xF6C09E276AEB3F2D | Since: 323
 */
export function linkNamedRendertarget(modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    LinkNamedRendertarget(modelHash);
}

/**
 * Locks the minimap to the specified angle in integer degrees.
 * 
 * angle: The angle in whole degrees. If less than 0 or greater than 360, unlocks the angle.
 * 
 * Hash: 0x299FAEBB108AE05B | Since: 323
 */
export function lockMinimapAngle(angle: number): void {
    LockMinimapAngle(angle);
}

/**
 * Locks the minimap to the specified world position.
 * 
 * Hash: 0x1279E861A329E73F | Since: 323
 */
export function lockMinimapPosition(x: number, y: number): void {
    LockMinimapPosition(x, y);
}

/**
 * Hides the chat history, closes the input box and makes it unable to be opened unless called again with FALSE.
 * 
 * Hash: 0x1DB21A44B09E8BA3 | Since: 323
 */
export function mpTextChatDisable(toggle: boolean): void {
    DisableMultiplayerChat(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7C226D5346D4D10A | Since: 372
 */
export function mpTextChatIsTeamJob(): void {
    Citizen.invokeNative('0x7C226D5346D4D10A', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x805D7CBB36FD6C4C | Since: 323
 */
export function openOnlinePoliciesMenu(): void {
    OpenOnlinePoliciesMenu();
}

/**
 * Shows a menu for reporting UGC content.
 * 
 * Hash: 0x523A590C1A3CC0D3 | Since: 323
 */
export function openReportugcMenu(): void {
    OpenReportugcMenu();
}

/**
 * Uses the `SOCIAL_CLUB2` scaleform.
 * menu: GALLERY, MISSIONS, CREWS, MIGRATE, PLAYLISTS, JOBS
 * 
 * Hash: 0x75D3691713C3B05A | Since: 323
 */
export function openSocialClubMenu(menu: number | string): void {
    if (typeof menu === 'string') menu = GetHashKey(menu)
    OpenSocialClubMenu(menu);
}

/**
 * No comment provided
 * 
 * Hash: 0xF47E567B3630DD12 | Since: 678
 */
export function overrideMpTextChatColor(hudColor: number): void {
    OverrideMultiplayerChatColour(0, hudColor);
}

/**
 * No comment provided
 * 
 * Hash: 0x6A1738B4323FE2D9 | Since: 573
 */
export function overrideMpTextChatTeamString(gxtEntryHash: number | string): void {
    if (typeof gxtEntryHash === 'string') gxtEntryHash = GetHashKey(gxtEntryHash)
    OverrideMultiplayerChatPrefix(gxtEntryHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x77F16B447824DA6C | Since: 323
 */
export function pauseMenuceptionGoDeeper(page: number): void {
    PauseMenuceptionGoDeeper(page);
}

/**
 * No comment provided
 * 
 * Hash: 0xCDCA26E80FAECB8F | Since: 323
 */
export function pauseMenuceptionTheKick(): void {
    PauseMenuceptionTheKick();
}

/**
 * Activates the specified frontend menu context.
 * pausemenu.xml defines some specific menu options using 'context'. Context is basically a 'condition'.
 * The `*ALL*` part of the context means that whatever is being defined, will be active when any or all of those conditions after `*ALL*` are met.
 * The `*NONE*` part of the context section means that whatever is being defined, will NOT be active if any or all of the conditions after `*NONE*` are met.
 * This basically allows you to hide certain menu sections, or things like instructional buttons.
 * 
 * Hash: 0xDD564BDD0472C936 | Since: 323
 */
export function pauseMenuActivateContext(contextHash: number | string): void {
    if (typeof contextHash === 'string') contextHash = GetHashKey(contextHash)
    PauseMenuActivateContext(contextHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x444D8CF241EC25C5 | Since: 323
 */
export function pauseMenuDeactivateContext(contextHash: number | string): void {
    if (typeof contextHash === 'string') contextHash = GetHashKey(contextHash)
    PauseMenuDeactivateContext(contextHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE03620F8703A9DF | Since: 323
 */
export function pauseMenuGetHairColourIndex(): number {
    return Citizen.invokeNative('0xDE03620F8703A9DF');
}

/**
 * No comment provided
 * 
 * Hash: 0xC8E1071177A23BE5 | Since: 323
 */
export function pauseMenuGetMouseClickEvent(): [boolean, any, any, any] {
    return Citizen.invokeNative('0xC8E1071177A23BE5');
}

/**
 * No comment provided
 * 
 * Hash: 0x359AF31A4B52F5ED | Since: 323
 */
export function pauseMenuGetMouseHoverIndex(): number {
    return PauseMenuGetIndexOfMouseHoveredSlot();
}

/**
 * No comment provided
 * 
 * Hash: 0x13C4B962653A5280 | Since: 323
 */
export function pauseMenuGetMouseHoverUniqueId(): number {
    return PauseMenuGetUniqueIdOfMouseHoveredSlot();
}

/**
 * No comment provided
 * 
 * Hash: 0x84698AB38D0C6636 | Since: 323
 */
export function pauseMenuIsContextActive(contextHash: number | string): boolean {
    if (typeof contextHash === 'string') contextHash = GetHashKey(contextHash)
    return PauseMenuIsContextActive(contextHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A25ADC48F87841F | Since: 323
 */
export function pauseMenuIsContextMenuActive(): boolean {
    return PauseMenuIsContextMenuActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x4895BDEA16E7C080 | Since: 323
 */
export function pauseMenuRedrawInstructionalButtons(): void {
    PauseMenuRedrawInstructionalButtons(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xC78E239AC5B2DDB9 | Since: 323
 */
export function pauseMenuSetBusySpinner(position: number, spinnerIndex: number): void {
    PauseMenuSetBusySpinner(false, position, spinnerIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xF06EBB91A81E09E3 | Since: 323
 */
export function pauseMenuSetWarnOnTabChange(): void {
    PauseMenuSetWarnOnTabChange(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x2DE6C5E2E996F178 | Since: 372
 */
export function pauseToggleFullscreenMap(): void {
    PauseToggleFullscreenMap(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC65AB383CD91DF98 | Since: 323
 */
export function preloadBusyspinner(): void {
    PreloadBusyspinner();
}

/**
 * No comment provided
 * 
 * Hash: 0x742D6FD43115AF73 | Since: 323
 */
export function pulseBlip(blip: number | IBlip): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    PulseBlip(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x81FA173F170560D1 | Since: 323
 */
export function refreshWaypoint(): void {
    RefreshWaypoint();
}

/**
 * No comment provided
 * 
 * Hash: 0x57D9C12635E25CE3 | Since: 323
 */
export function registerNamedRendertarget(name: string): boolean {
    return RegisterNamedRendertarget(name, false);
}

/**
 * Enables frontend (works in custom frontends, not sure about regular pause menu) navigation keys on keyboard if they were disabled using the native below.
 * To disable the keys, use `0xEC9264727EEC0F28`
 * 
 * Hash: 0x14621BB1DF14E2B2 | Since: 323
 */
export function releaseControlOfFrontend(): void {
    ReleaseControlOfFrontend();
}

/**
 * No comment provided
 * 
 * Hash: 0xE9F6FFE837354DD4 | Since: 323
 */
export function releaseNamedRendertarget(name: string): boolean {
    return ReleaseNamedRendertarget(name);
}

/**
 * No comment provided
 * 
 * Hash: 0x2916A928514C9827 | Since: 573
 */
export function reloadMapMenu(): void {
    ReloadMapMenu();
}

/**
 * In the C++ SDK, this seems not to work-- the blip isn't removed immediately. I use it for saving cars.
 * 
 * E.g.:
 * 
 * `Ped pped = PLAYER::PLAYER_PED_ID();`
 * `Vehicle v = PED::GET_VEHICLE_PED_IS_USING(pped);`
 * `Blip b = HUD::ADD_BLIP_FOR_ENTITY(v);`
 * 
 * works fine.
 * But later attempting to delete it with:
 * 
 * `Blip b = HUD::GET_BLIP_FROM_ENTITY(v);`
 * `if (HUD::DOES_BLIP_EXIST(b)) HUD::REMOVE_BLIP(&b);`
 * 
 * doesn't work. And yes, doesn't work without the DOES_BLIP_EXIST check either. Also, if you attach multiple blips to the same thing (say, a vehicle), and that thing disappears, the blips randomly attach to other things (in my case, a vehicle).
 * 
 * `Thus for me, HUD::REMOVE_BLIP(&b) only works if there's one blip, (in my case) the vehicle is marked as no longer needed, you drive away from it and it eventually despawns, AND there is only one blip attached to it. I never intentionally attach multiple blips but if the user saves the car, this adds a blip. Then if they delete it, it is supposed to remove the blip, but it doesn't. Then they can immediately save it again, causing another blip to re-appear.`
 * -------------
 * 
 * Passing the address of the variable instead of the value works for me.
 * e.g.
 * `int blip = HUD::ADD_BLIP_FOR_ENTITY(ped);`
 * `HUD::REMOVE_BLIP(&blip);`
 * 
 * 
 * Remove blip will currently crash your game, just artificially remove the blip by setting the sprite to a id that is 'invisible'.
 * 
 * Hash: 0x86A652570E5F25DD | Since: 323
 */
export function removeBlip(blip: number | IBlip): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    RemoveBlip(_blip);
}

/**
 * Interesting fact: A hash collision for this is RESET_JETPACK_MODEL_SETTINGS
 * 
 * Hash: 0xC594B315EDF2D4AF | Since: 323
 */
export function removeCopBlipFromPed(ped: number | IPed): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    Citizen.invokeNative('0xC594B315EDF2D4AF', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x35A3CD97B2C0A6D2 | Since: 1290
 */
export function removeFakeConeData(blip: number | IBlip): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    Citizen.invokeNative('0x35A3CD97B2C0A6D2', _blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x31698AA80E0223F8 | Since: 323
 */
export function removeMpGamerTag(gamerTagId: number): void {
    RemoveMpGamerTag(gamerTagId);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7C6789AA1CFEDD0 | Since: 323
 */
export function removeMultiplayerBankCash(): void {
    RemoveMultiplayerBankCash();
}

/**
 * Removes multiplayer cash hud each frame
 * 
 * Hash: 0x968F270E39141ECA | Since: 323
 */
export function removeMultiplayerCash(): void {
    RemoveMultiplayerHudCash();
}

/**
 * No comment provided
 * 
 * Hash: 0x95CF81BD06EE1887 | Since: 323
 */
export function removeMultiplayerWalletCash(): void {
    RemoveMultiplayerWalletCash();
}

/**
 * No comment provided
 * 
 * Hash: 0x6EF54AB721DC6242 | Since: 323
 */
export function removeWarningMessageOptionItems(): void {
    RemoveWarningMessageListItems();
}

/**
 * makes hudColorIndex2 color into hudColorIndex color
 * 
 * Hash: 0x1CCC708F0F850613 | Since: 323
 */
export function replaceColour(hudColorIndex: number, hudColorIndex2: number): void {
    ReplaceHudColour(hudColorIndex, hudColorIndex2);
}

/**
 * No comment provided
 * 
 * Hash: 0xF314CF4F0211894E | Since: 323
 */
export function replaceColourWithRgba(hudColorIndex: number, r: number, g: number, b: number, a: number): void {
    ReplaceHudColourWithRgba(hudColorIndex, r, g, b, a);
}

/**
 * Request a gxt into the passed slot.
 * 
 * Hash: 0x71A78003C8E71424 | Since: 323
 */
export function requestAdditionalText(gxt: string, slot: number): void {
    RequestAdditionalText(gxt, slot);
}

/**
 * No comment provided
 * 
 * Hash: 0x6009F9F1AE90D8A6 | Since: 323
 */
export function requestAdditionalTextForDlc(gxt: string, slot: number): void {
    RequestAdditionalTextForDlc(gxt, slot);
}

/**
 * No comment provided
 * 
 * Hash: 0xB99C4E4D9499DF29 | Since: 323
 */
export function resetGlobalActionscriptFlag(flagIndex: number): void {
    ResetGlobalActionscriptFlag(flagIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x450930E616475D0D | Since: 323
 */
export function resetComponentValues(id: number): void {
    ResetHudComponentValues(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x12782CE0A636E9F0 | Since: 323
 */
export function resetReticuleValues(): void {
    ResetReticuleValues();
}

/**
 * Before using this native click the native above and look at the decription.
 * 
 * Example:
 * int GetHash = Function.Call<int>(Hash.GET_HASH_KEY, "fe_menu_version_corona_lobby");
 * Function.Call(Hash.ACTIVATE_FRONTEND_MENU, GetHash, 0, -1);
 * Function.Call(Hash.RESTART_FRONTEND_MENU(GetHash, -1);
 * 
 * This native refreshes the frontend menu.
 * 
 * p1 = Hash of Menu
 * p2 = Unknown but always works with -1.
 * 
 * Hash: 0x10706DC6AD2D49C0 | Since: 323
 */
export function restartFrontendMenu(menuHash: number | string): void {
    if (typeof menuHash === 'string') menuHash = GetHashKey(menuHash)
    RestartFrontendMenu(menuHash, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xF83D0FEBE75E62C9 | Since: 1290
 */
export function setupFakeConeData(blip: number | IBlip): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    Citizen.invokeNative('0xF83D0FEBE75E62C9', _blip, 0, 0, 0, 0, 0, 0, undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x9969599CCFF5D85E | Since: 323
 */
export function setAbilityBarValue(): void {
    SetAbilityBarValue(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x1DFEDD15019315A9 | Since: 1493
 */
export function setAbilityBarVisibility(visible: boolean): void {
    SetAbilityBarVisibilityInMultiplayer(visible);
}

/**
 * No comment provided
 * 
 * Hash: 0x889329C80FE5963C | Since: 1868
 */
export function setAllowAbilityBar(toggle: boolean): void {
    SetAllowAbilityBarInMultiplayer(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x577599CCED639CA2 | Since: 505
 */
export function setAllowCommaOnTextInput(): void {
    SetAllowCommaOnTextInput(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE76FF7E6A0166B0 | Since: 323
 */
export function setAllMpGamerTagsVisibility(gamerTagId: number, toggle: boolean): void {
    SetMpGamerTagVisibilityAll(gamerTagId, toggle);
}

/**
 * Toggles the big minimap state like in GTA:Online.
 * 
 * Hash: 0x231C8F89D0539D8F | Since: 323
 */
export function setBigmapActive(toggleBigMap: boolean, showFullMap: boolean): void {
    SetBigmapActive(toggleBigMap, showFullMap);
}

/**
 * Sets alpha-channel for blip color.
 * 
 * Example:
 * 
 * `Blip blip = HUD::ADD_BLIP_FOR_ENTITY(entity);`
 * `HUD::SET_BLIP_COLOUR(blip , 3);`
 * `HUD::SET_BLIP_ALPHA(blip , 64);`
 * 
 * 
 * Hash: 0x45FF974EEE1C8734 | Since: 323
 */
export function setBlipAlpha(blip: number | IBlip, alpha: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipAlpha(_blip, alpha);
}

/**
 * false for enemy
 * true for friendly
 * 
 * Hash: 0x6F6F290102C02AB4 | Since: 323
 */
export function setBlipAsFriendly(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipAsFriendly(_blip, toggle);
}

/**
 * Makes a blip go small when off the minimap.
 * 
 * Hash: 0x2B6D467DAB714E8D | Since: 323
 */
export function setBlipAsMinimalOnEdge(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipShrink(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x24AC0137444F9FD5 | Since: 323
 */
export function setBlipAsMissionCreatorBlip(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipAsMissionCreatorBlip(_blip, toggle);
}

/**
 * Sets whether or not the specified blip should only be displayed when nearby, or on the minimap.
 * 
 * Hash: 0xBE8BE4FE60E27B72 | Since: 323
 */
export function setBlipAsShortRange(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipAsShortRange(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB203913733F27884 | Since: 323
 */
export function setBlipBright(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipBright(_blip, toggle);
}

/**
 * Example: https://i.imgur.com/skY6vAJ.png
 * 
 * Index:
 * 1 = No distance shown in legend
 * 2 = Distance shown in legend
 * 7 = "Other Players" category, also shows distance in legend
 * 10 = "Property" category
 * 11 = "Owned Property" category
 * 
 * Any other value behaves like index = 1, index wraps around after 255
 * Blips with categories 7, 10 or 11 will all show under the specific categories listing in the map legend, regardless of sprite or name.
 * Legend entries:
 * 7 = Other Players (BLIP_OTHPLYR)
 * 10 = Property (BLIP_PROPCAT)
 * 11 = Owned Property (BLIP_APARTCAT)
 * 
 * Category needs to be `7` in order for blip names to show on the expanded minimap when using DISPLAY_PLAYER_NAME_TAGS_ON_BLIPS.
 * 
 * Hash: 0x234CDD44D996FD9A | Since: 323
 */
export function setBlipCategory(blip: number | IBlip, index: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipCategory(_blip, index);
}

/**
 * https://gtaforums.com/topic/864881-all-blip-color-ids-pictured/
 * 
 * Hash: 0x03D7FB09E75D6B7E | Since: 323
 */
export function setBlipColour(blip: number | IBlip, color: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipColour(_blip, color);
}

/**
 * No comment provided
 * 
 * Hash: 0xAE2AF67E9D9AF65D | Since: 323
 */
export function setBlipCoords(blip: number | IBlip, pos: Vector3): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipCoords(_blip, pos.x, pos.y, pos.z);
}

/**
 * Display Id behaviours:
 * 0 = Doesn't show up, ever, anywhere.
 * 1 = Doesn't show up, ever, anywhere.
 * 2 = Shows on both main map and minimap. (Selectable on map)
 * 3 = Shows on main map only. (Selectable on map)
 * 4 = Shows on main map only. (Selectable on map)
 * 5 = Shows on minimap only.
 * 6 = Shows on both main map and minimap. (Selectable on map)
 * 7 = Doesn't show up, ever, anywhere.
 * 8 = Shows on both main map and minimap. (Not selectable on map)
 * 9 = Shows on minimap only.
 * 10 = Shows on both main map and minimap. (Not selectable on map)
 * 
 * Anything higher than 10 seems to be exactly the same as 10.
 * 
 * Hash: 0x9029B2F3DA924928 | Since: 323
 */
export function setBlipDisplay(blip: number | IBlip, displayId: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipDisplay(_blip, displayId);
}

/**
 * Must be toggled before being queued for animation
 * 
 * Hash: 0xC4278F70131BAA6D | Since: 323
 */
export function setBlipExtendedHeightThreshold(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipDisplayIndicatorOnBlip(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2AEE8F8390D2298C | Since: 323
 */
export function setBlipFade(blip: number | IBlip, opacity: number, duration: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipFade(_blip, opacity, duration);
}

/**
 * No comment provided
 * 
 * Hash: 0xB14552383D39CE3E | Since: 323
 */
export function setBlipFlashes(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipFlashes(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2E8D9498C56DD0D1 | Since: 323
 */
export function setBlipFlashesAlternate(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipFlashesAlternate(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA51DB313C010A7E | Since: 323
 */
export function setBlipFlashInterval(blip: number | IBlip): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipFlashInterval(_blip, undefined);
}

/**
 * Adds up after viewing multiple R* scripts. I believe that the duration is in miliseconds.
 * 
 * Hash: 0xD3CD6FD297AE87CC | Since: 323
 */
export function setBlipFlashTimer(blip: number | IBlip, duration: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipFlashTimer(_blip, duration);
}

/**
 * No comment provided
 * 
 * Hash: 0x54318C915D27E4CE | Since: 323
 */
export function setBlipHiddenOnLegend(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipHiddenOnLegend(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE2590BC29220CEBB | Since: 323
 */
export function setBlipHighDetail(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipHighDetail(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB552929B85FC27EC | Since: 573
 */
export function setBlipMarkerLongDistance(): void {
    Citizen.invokeNative('0xB552929B85FC27EC', undefined, undefined);
}

/**
 * Doesn't work if the label text of gxtEntry is >= 80.
 * 
 * Hash: 0xEAA0FFE120D92784 | Since: 323
 */
export function setBlipNameFromTextFile(blip: number | IBlip, gxtEntry: string): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipNameFromTextFile(_blip, gxtEntry);
}

/**
 * No comment provided
 * 
 * Hash: 0x127DE7B20C60A6A3 | Since: 323
 */
export function setBlipNameToPlayerName(blip: number | IBlip, player: number | string | IPlayer): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    const _player = typeof player == 'object' ? player.playerId() : player;
    SetBlipNameToPlayerName(_blip, _player);
}

/**
 * See this topic for more details : gtaforums.com/topic/717612-v-scriptnative-documentation-and-research/page-35?p=1069477935
 * 
 * Hash: 0xAE9FC9EF6A9FAC79 | Since: 323
 */
export function setBlipPriority(blip: number | IBlip, priority: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipPriority(_blip, priority);
}

/**
 * After some testing, looks like you need to use CEIL() on the rotation (vehicle/ped heading) before using it there.
 * 
 * Hash: 0xF87683CDF73C3F6E | Since: 323
 */
export function setBlipRotation(blip: number | IBlip, rotation: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipRotation(_blip, rotation);
}

/**
 * Does not require whole number/integer rotations.
 * 
 * Hash: 0xA8B6AFDAC320AC87 | Since: 877
 */
export function setBlipRotationWithFloat(blip: number | IBlip, heading: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipSquaredRotation(_blip, heading);
}

/**
 * Enable / disable showing route for the Blip-object.
 * 
 * Hash: 0x4F7D8A9BFB0B43E9 | Since: 323
 */
export function setBlipRoute(blip: number | IBlip, enabled: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipRoute(_blip, enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x837155CD2F63DA09 | Since: 323
 */
export function setBlipRouteColour(blip: number | IBlip, colour: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipRouteColour(_blip, colour);
}

/**
 * No comment provided
 * 
 * Hash: 0xD38744167B2FA257 | Since: 323
 */
export function setBlipScale(blip: number | IBlip, scale: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipScale(_blip, scale);
}

/**
 * See https://imgur.com/a/lLkEsMN
 * 
 * Hash: 0xCD6524439909C979 | Since: 1734
 */
export function setBlipScale2d(blip: number | IBlip, xScale: number, yScale: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipScaleTransformation(_blip, xScale, yScale);
}

/**
 * Can be used to give blips any RGB colour with SET_BLIP_COLOUR(blip, 84).
 * 
 * Hash: 0x14892474891E09EB | Since: 323
 */
export function setBlipSecondaryColour(blip: number | IBlip, r: number, g: number, b: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipSecondaryColour(_blip, r, g, b);
}

/**
 * No comment provided
 * 
 * Hash: 0x4B5B620C9B59ED34 | Since: 678
 */
export function setBlipShortHeightThreshold(): void {
    Citizen.invokeNative('0x4B5B620C9B59ED34', undefined, undefined);
}

/**
 * As of b2189, the third parameter sets the color of the cone (before b2189 it was ignored). Note that it uses HUD colors, not blip colors.
 * 
 * Hash: 0x13127EC3665E8EE1 | Since: 323
 */
export function setBlipShowCone(blip: number | IBlip, toggle: boolean, hudColorIndex: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipShowCone(_blip, toggle, hudColorIndex);
}

/**
 * Sets the displayed sprite for a specific blip..
 * 
 * You may have your own list, but since dev-c didn't show it I was bored and started looking through scripts and functions to get a presumable almost positive list of a majority of blip IDs
 * https://pastebin.com/Bpj9Sfft
 * 
 * Blips Images + IDs:
 * https://gtaxscripting.blogspot.com/2016/05/gta-v-blips-id-and-image.html
 * 
 * Hash: 0xDF735600A4696DAF | Since: 323
 */
export function setBlipSprite(blip: number | IBlip, spriteId: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetBlipSprite(_blip, spriteId);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C9F302398E13141 | Since: 1103
 */
export function setBlipUseHeightIndicatorOnEdge(blip: number | IBlip): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    Citizen.invokeNative('0x2C9F302398E13141', _blip, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1942374085C8469 | Since: 505
 */
export function setBlockWantedFlash(disabled: boolean): void {
    Citizen.invokeNative('0xD1942374085C8469', disabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x39BBF623FC803EAC | Since: 323
 */
export function setColourOfNextTextComponent(hudColor: number): void {
    SetColourOfNextTextComponent(hudColor);
}

/**
 * No comment provided
 * 
 * Hash: 0x9FCB3CBFB3EAD69A | Since: 1734
 */
export function setCopBlipSprite(): void {
    Citizen.invokeNative('0x9FCB3CBFB3EAD69A', 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB7B873520C84C118 | Since: 1734
 */
export function setCopBlipSpriteAsStandard(): void {
    Citizen.invokeNative('0xB7B873520C84C118');
}

/**
 * No comment provided
 * 
 * Hash: 0x2ACCB195F3CCD9DE | Since: 2545
 */
export function setCustomMpColor(hudColorId: number): void {
    SetCustomMpHudColor(hudColorId);
}

/**
 * No comment provided
 * 
 * Hash: 0x817B86108EB94E51 | Since: 323
 */
export function setDescriptionForUgcMissionEightStrings(): void {
    Citizen.invokeNative('0x817B86108EB94E51', false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x04655F9D075D0AE5 | Since: 323
 */
export function setDirectorModeAvailable(toggle: boolean): void {
    Citizen.invokeNative('0x04655F9D075D0AE5', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2632482FD6B9AB87 | Since: 323
 */
export function setDirectorModeLaunchedByScript(): void {
    SetDirectorModeClearTriggeredFlag();
}

/**
 * No comment provided
 * 
 * Hash: 0xA17784FCA9548D15 | Since: 877
 */
export function setFakeGpsPlayerPositionThisFrame(pos: Vector3): void {
    Citizen.invokeNative('0xA17784FCA9548D15', pos.x, pos.y, pos.z);
}

/**
 * Argument must be 0.0f or above 38.0f, or it will be ignored.
 * 
 * Hash: 0xD201F3FF917A506D | Since: 323
 */
export function setFakeMinimapMaxAltimeterHeight(altitude: number): void {
    SetMinimapAltitudeIndicatorLevel(altitude, false, undefined);
}

/**
 * Sets the position of the arrow icon representing the player on both the minimap and world map.
 * 
 * Too bad this wouldn't work over the network (obviously not). Could spoof where we would be.
 * 
 * Hash: 0x77E2DD177910E1CF | Since: 323
 */
export function setFakePausemapPlayerPositionThisFrame(x: number, y: number): void {
    SetFakePausemapPlayerPositionThisFrame(x, y);
}

/**
 * Setter for GET_FAKE_SPECTATOR_MODE
 * 
 * Hash: 0xCD74233600C4EA6B | Since: 505
 */
export function setFakeSpectatorMode(toggle: boolean): void {
    Citizen.invokeNative('0xCD74233600C4EA6B', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7679CC1BCEBE3D4C | Since: 323
 */
export function setFloatingHelpTextScreenPosition(hudIndex: number, x: number, y: number): void {
    SetFloatingHelpTextScreenPosition(hudIndex, x, y);
}

/**
 * No comment provided
 * 
 * Hash: 0x788E7FD431BD67F1 | Since: 323
 */
export function setFloatingHelpTextStyle(hudIndex: number): void {
    SetFloatingHelpTextStyle(hudIndex, 0, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB094BC1DB4018240 | Since: 323
 */
export function setFloatingHelpTextToEntity(hudIndex: number, entity: number | IEntity, offsetX: number, offsetY: number): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    SetFloatingHelpTextToEntity(hudIndex, _entity, offsetX, offsetY);
}

/**
 * No comment provided
 * 
 * Hash: 0x784BA7E0ECEB4178 | Since: 323
 */
export function setFloatingHelpTextWorldPosition(hudIndex: number, pos: Vector3): void {
    SetFloatingHelpTextWorldPosition(hudIndex, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x2790F4B17D098E26 | Since: 573
 */
export function setForceShowGps(toggle: boolean): void {
    Citizen.invokeNative('0x2790F4B17D098E26', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x745711A75AB09277 | Since: 323
 */
export function setFrontendActive(active: boolean): void {
    SetFrontendActive(active);
}

/**
 * radarThickness: The width of the GPS route on the radar
 * mapThickness: The width of the GPS route on the map
 * 
 * Hash: 0x900086F371220B6F | Since: 323
 */
export function setGpsCustomRouteRender(toggle: boolean, radarThickness: number, mapThickness: number): void {
    SetGpsCustomRouteRender(toggle, radarThickness, mapThickness);
}

/**
 * Only the script that originally called SET_GPS_FLAGS can set them again. Another script cannot set the flags, until the first script that called it has called CLEAR_GPS_FLAGS.
 * 
 * Doesn't seem like the flags are actually read by the game at all.
 * 
 * Hash: 0x5B440763A4C8D15B | Since: 323
 */
export function setGpsFlags(): void {
    SetGpsFlags(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x320D0E0D936A0E9B | Since: 323
 */
export function setGpsFlashes(toggle: boolean): void {
    SetGpsFlashes(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3DDA37128DD1ACA8 | Since: 323
 */
export function setGpsMultiRouteRender(toggle: boolean): void {
    SetGpsMultiRouteRender(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F5CC444DCAAA8F2 | Since: 323
 */
export function setHealthDisplayValues(health: number, capacity: number, wasAdded: boolean): void {
    SetHealthHudDisplayValues(health, capacity, wasAdded);
}

/**
 * No comment provided
 * 
 * Hash: 0xB9C362BABECDDC7A | Since: 463
 */
export function setHelpMessageStyle(style: number, hudColor: number, alpha: number): void {
    SetHelpMessageTextStyle(style, hudColor, alpha, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xAABB1F56E2A17CED | Since: 323
 */
export function setComponentPosition(id: number, x: number, y: number): void {
    SetHudComponentPosition(id, x, y);
}

/**
 * No comment provided
 * 
 * Hash: 0x7EC8ABA5E74B3D7A | Since: 2372
 */
export function setInsideVeryLargeInterior(toggle: boolean): void {
    SetInteriorZoomLevelDecreased(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x504DFE62A1692296 | Since: 1493
 */
export function setInsideVerySmallInterior(toggle: boolean): void {
    SetInteriorZoomLevelIncreased(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x06A320535F5F0248 | Since: 323
 */
export function setMaxArmourDisplay(maximumValue: number): void {
    SetMaxArmourHudDisplay(maximumValue);
}

/**
 * No comment provided
 * 
 * Hash: 0x975D66A0BC17064C | Since: 323
 */
export function setMaxHealthDisplay(maximumValue: number): void {
    SetMaxHealthHudDisplay(maximumValue);
}

/**
 * This native does absolutely nothing on PC master builds, just a nullsub.
 * 
 * Hash: 0xB09D42557C45EBA1 | Since: 3258
 */
export function setMinimapBackgroundHidden(toggle: boolean): void {
    Citizen.invokeNative('0xB09D42557C45EBA1', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x58FADDED207897DC | Since: 323
 */
export function setMinimapBlockWaypoint(toggle: boolean): void {
    SetMinimapBlockWaypoint(toggle);
}

/**
 * This native is used to colorize certain map components like the army base at the top of the map.
 * p2 appears to be always -1. If p2 is -1 then native wouldn't change the color. See https://gfycat.com/SkinnyPinkChupacabra
 * 
 * Hash: 0x75A9A10948D1DEA6 | Since: 323
 */
export function setMinimapComponent(componentId: number, toggle: boolean, overrideColor: number): boolean {
    return SetMinimapComponent(componentId, toggle, overrideColor);
}

/**
 * No comment provided
 * 
 * Hash: 0x62E849B7EB28E770 | Since: 323
 */
export function setMinimapFowDoNotUpdate(): void {
    Citizen.invokeNative('0x62E849B7EB28E770', false);
}

/**
 * Up to eight coordinates may be revealed per frame
 * 
 * Hash: 0x0923DBF87DFF735E | Since: 323
 */
export function setMinimapFowRevealCoordinate(pos: Vector3): void {
    SetMinimapFowRevealCoordinate(pos.x, pos.y, pos.z);
}

/**
 * Not much is known so far on what it does _exactly_.
 * All I know for sure is that it draws the specified hole ID on the pause menu map as well as on the mini-map/radar. This native also seems to change some other things related to the pause menu map's behaviour, for example: you can no longer set waypoints, the pause menu map starts up in a 'zoomed in' state. This native does not need to be executed every tick.
 * You need to center the minimap manually as well as change/lock it's zoom and angle in order for it to appear correctly on the minimap.
 * You'll also need to use the `GOLF` scaleform in order to get the correct minmap border to show up.
 * Use `0x35edd5b2e3ff01c0` to reset the map when you no longer want to display any golf holes (you still need to unlock zoom, position and angle of the radar manually after calling this).
 * 
 * Hash: 0x71BDB63DBAF8DA59 | Since: 323
 */
export function setMinimapGolfCourse(hole: number): void {
    SetMinimapGolfCourse(hole);
}

/**
 * No comment provided
 * 
 * Hash: 0x35EDD5B2E3FF01C0 | Since: 323
 */
export function setMinimapGolfCourseOff(): void {
    SetMinimapGolfCourseOff();
}

/**
 * If true, the entire map will be revealed.
 * 
 * FOW = Fog of War
 * 
 * Hash: 0xF8DEE0A5600CBB93 | Since: 323
 */
export function setMinimapHideFow(toggle: boolean): void {
    SetMinimapHideFow(toggle);
}

/**
 * Toggles the North Yankton map
 * 
 * Hash: 0x9133955F1A2DA957 | Since: 323
 */
export function setMinimapInPrologue(toggle: boolean): void {
    SetMinimapInPrologue(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A5CD7752DD28CD3 | Since: 323
 */
export function setMinimapInSpectatorMode(toggle: boolean, ped: number | IPed): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    SetMinimapInSpectatorMode(toggle, _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B50FC8749632EC1 | Since: 2189
 */
export function setMinimapSonarSweep(toggle: boolean): void {
    SetMinimapSonarSweep(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F28ECF5FC84772F | Since: 323
 */
export function setMissionName(name: string): void {
    SetMissionName(false, name);
}

/**
 * No comment provided
 * 
 * Hash: 0xE45087D85F468BC2 | Since: 323
 */
export function setMissionNameForUgcMission(name: string): void {
    SetMissionName2(false, name);
}

/**
 * Changes the mouse cursor's sprite.
 * 1 = Normal
 * 6 = Left Arrow
 * 7 = Right Arrow
 * 
 * Hash: 0x8DB8CFFD58B62552 | Since: 323
 */
export function setMouseCursorStyle(spriteId: number): void {
    SetMouseCursorStyle(spriteId);
}

/**
 * Shows the cursor on screen for one frame.
 * 
 * Hash: 0xAAE7CE1D63167423 | Since: 323
 */
export function setMouseCursorThisFrame(): void {
    SetMouseCursorThisFrame();
}

/**
 * Shows/hides the frontend cursor on the pause menu or similar menus.
 * Clicking off and then on the game window will show it again.
 * 
 * Hash: 0x98215325A695E78A | Since: 323
 */
export function setMouseCursorVisible(toggle: boolean): void {
    SetMouseCursorVisible(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1563FE35E9928E67 | Since: 1365
 */
export function setMpGamerTagsPointHealth(gamerTagId: number, value: number, maximumValue: number): void {
    SetMpGamerTagOverridePlayerHealth(gamerTagId, value, maximumValue);
}

/**
 * No comment provided
 * 
 * Hash: 0xD29EC58C2F6B5014 | Since: 1365
 */
export function setMpGamerTagsShouldUsePointsHealth(gamerTagId: number, toggle: boolean): void {
    SetMpGamerTagDisablePlayerHealthSync(gamerTagId, toggle);
}

/**
 * Displays a bunch of icons above the players name, and level, and their name twice
 * 
 * Hash: 0xA67F9C46D612B6F1 | Since: 323
 */
export function setMpGamerTagsShouldUseVehicleHealth(gamerTagId: number, toggle: boolean): void {
    SetMpGamerTagUseVehicleHealth(gamerTagId, toggle);
}

/**
 * Sets flag's sprite transparency. 0-255.
 * 
 * Hash: 0xD48FE545CD46F857 | Since: 323
 */
export function setMpGamerTagAlpha(gamerTagId: number, component: number, alpha: number): void {
    SetMpGamerTagAlpha(gamerTagId, component, alpha);
}

/**
 * No comment provided
 * 
 * Hash: 0x7B7723747CCB55B6 | Since: 323
 */
export function setMpGamerTagBigText(gamerTagId: number, _string: string): void {
    SetMpGamerTagBigText(gamerTagId, _string);
}

/**
 * Sets a gamer tag's component colour
 * 
 * gamerTagId is obtained using for example CREATE_FAKE_MP_GAMER_TAG
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 * 
 * Hash: 0x613ED644950626AE | Since: 323
 */
export function setMpGamerTagColour(gamerTagId: number, component: number, hudColorIndex: number): void {
    SetMpGamerTagColour(gamerTagId, component, hudColorIndex);
}

/**
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 * Should be enabled as flag (2). Has 0 opacity by default.
 * 
 * - This was _SET_MP_GAMER_TAG_HEALTH_BAR_COLOR,
 * -> Rockstar use the EU spelling of 'color' so I hashed the same name with COLOUR and it came back as the correct hash, so it has been corrected above.
 * 
 * Hash: 0x3158C77A7E888AB4 | Since: 323
 */
export function setMpGamerTagHealthBarColour(gamerTagId: number, hudColorIndex: number): void {
    SetMpGamerTagHealthBarColour(gamerTagId, hudColorIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xDEA2B8283BAA3944 | Since: 323
 */
export function setMpGamerTagName(gamerTagId: number, _string: string): void {
    SetMpGamerTagName(gamerTagId, _string);
}

/**
 * No comment provided
 * 
 * Hash: 0x9C16459B2324B2CF | Since: 877
 */
export function setMpGamerTagNumPackages(gamerTagId: number): void {
    SetMpGamerTagMpBagLargeCount(gamerTagId, 0);
}

/**
 * enum eMpGamerTagComponent
 * {
 * MP_TAG_GAMER_NAME,
 * MP_TAG_CREW_TAG,
 * MP_TAG_HEALTH_ARMOUR,
 * MP_TAG_BIG_TEXT,
 * MP_TAG_AUDIO_ICON,
 * MP_TAG_USING_MENU,
 * MP_TAG_PASSIVE_MODE,
 * MP_TAG_WANTED_STARS,
 * MP_TAG_DRIVER,
 * MP_TAG_CO_DRIVER,
 * MP_TAG_TAGGED,
 * MP_TAG_GAMER_NAME_NEARBY,
 * MP_TAG_ARROW,
 * MP_TAG_PACKAGES,
 * MP_TAG_INV_IF_PED_FOLLOWING,
 * MP_TAG_RANK_TEXT,
 * MP_TAG_TYPING,
 * MP_TAG_BAG_LARGE,
 * MP_TAG_ARROW,
 * MP_TAG_GANG_CEO,
 * MP_TAG_GANG_BIKER,
 * MP_TAG_BIKER_ARROW,
 * MP_TAG_MC_ROLE_PRESIDENT,
 * MP_TAG_MC_ROLE_VICE_PRESIDENT,
 * MP_TAG_MC_ROLE_ROAD_CAPTAIN,
 * MP_TAG_MC_ROLE_SARGEANT,
 * MP_TAG_MC_ROLE_ENFORCER,
 * MP_TAG_MC_ROLE_PROSPECT,
 * MP_TAG_TRANSMITTER,
 * MP_TAG_BOMB
 * };
 * 
 * Hash: 0x63BB75ABEDC1F6A0 | Since: 323
 */
export function setMpGamerTagVisibility(gamerTagId: number, component: number, toggle: boolean): void {
    SetMpGamerTagVisibility(gamerTagId, component, toggle, undefined);
}

/**
 * displays wanted star above head
 * 
 * Hash: 0xCF228E2AA03099C3 | Since: 323
 */
export function setMpGamerTagWantedLevel(gamerTagId: number, wantedlvl: number): void {
    SetMpGamerTagWantedLevel(gamerTagId, wantedlvl);
}

/**
 * No comment provided
 * 
 * Hash: 0xDD21B55DF695CD0A | Since: 323
 */
export function setMultiplayerBankCash(): void {
    SetMultiplayerBankCash();
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0xFD1D220394BCB824 | Since: 323
 */
export function setMultiplayerCash(): void {
    SetMultiplayerHudCash(0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC2D15BEF167E27BC | Since: 323
 */
export function setMultiplayerWalletCash(): void {
    SetMultiplayerWalletCash();
}

/**
 * No comment provided
 * 
 * Hash: 0xFE43368D2AA4F2FC | Since: 323
 */
export function setNewWaypoint(x: number, y: number): void {
    SetNewWaypoint(x, y);
}

/**
 * No comment provided
 * 
 * Hash: 0xDF47FC56C71569CF | Since: 323
 */
export function setPauseMenuActive(toggle: boolean): void {
    SetPauseMenuActive(toggle);
}

/**
 * Toggles the light state for the pause menu ped in frontend menus.
 * 
 * This is used by R* in combination with `SET_PAUSE_MENU_PED_SLEEP_STATE` to toggle the "offline" or "online" state in the "friends" tab of the pause menu in GTA Online.
 * 
 * 
 * Example:
 * Lights On: https://vespura.com/hi/i/2019-04-01_16-09_540ee_1015.png
 * Lights Off: https://vespura.com/hi/i/2019-04-01_16-10_8b5e7_1016.png
 * 
 * Hash: 0x3CA6050692BC61B0 | Since: 323
 */
export function setPauseMenuPedLighting(state: boolean): void {
    SetPauseMenuPedLighting(state);
}

/**
 * Toggles the pause menu ped sleep state for frontend menus.
 * 
 * Example: https://vespura.com/hi/i/2019-04-01_15-51_8ed38_1014.gif
 * 
 * `state` 0 will make the ped slowly fall asleep, 1 will slowly wake the ped up.
 * 
 * Hash: 0xECF128344E9FF9F1 | Since: 323
 */
export function setPauseMenuPedSleepState(state: boolean): void {
    SetPauseMenuPedSleepState(state);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C4BBF625CA98C4E | Since: 323
 */
export function setPedAiBlipForcedOn(ped: number | IPed, toggle: boolean): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    SetPedAiBlipForcedOn(_ped, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE52B8E7F85D39A08 | Since: 323
 */
export function setPedAiBlipGangId(ped: number | IPed, gangId: number): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    SetPedAiBlipGangId(_ped, gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0x3EED80DFF7325CAA | Since: 323
 */
export function setPedAiBlipHasCone(ped: number | IPed, toggle: boolean): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    SetPedAiBlipHasCone(_ped, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x97C65887D4B37FA9 | Since: 323
 */
export function setPedAiBlipNoticeRange(ped: number | IPed, range: number): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    SetPedAiBlipNoticeRange(_ped, range);
}

/**
 * No comment provided
 * 
 * Hash: 0xFCFACD0DB9D7A57D | Since: 877
 */
export function setPedAiBlipSprite(ped: number | IPed, spriteId: number): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    SetPedAiBlipSprite(_ped, spriteId);
}

/**
 * This native turns on the AI blip on the specified ped. It also disappears automatically when the ped is too far or if the ped is dead. You don't need to control it with other natives.
 * 
 * See gtaforums.com/topic/884370-native-research-ai-blips for further information.
 * 
 * Hash: 0xD30C50DF888D58B5 | Since: 323
 */
export function setPedHasAiBlip(ped: number | IPed, hasCone: boolean): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    SetPedHasAiBlip(_ped, hasCone);
}

/**
 * color: see SET_BLIP_COLOUR
 * 
 * Hash: 0xB13DCB4C6FAAD238 | Since: 505
 */
export function setPedHasAiBlipWithColour(ped: number | IPed, hasCone: boolean, color: number): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    SetPedHasAiBlipWithColor(_ped, hasCone, color);
}

/**
 * No comment provided
 * 
 * Hash: 0x7B21E0BB01E8224A | Since: 323
 */
export function setPlayerIconColour(color: number): void {
    SetMainPlayerBlipColour(color);
}

/**
 * If toggle is true, hides special ability bar / character name in the pause menu
 * If toggle is false, shows special ability bar / character name in the pause menu
 * 
 * Hash: 0x808519373FD336A3 | Since: 323
 */
export function setPlayerIsInDirectorMode(toggle: boolean): void {
    SetPlayerIsInDirectorMode(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x41350B4FC28E3941 | Since: 323
 */
export function setPmWarningscreenActive(): void {
    Citizen.invokeNative('0x41350B4FC28E3941', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x1EAC5F91BCBC5073 | Since: 323
 */
export function setRaceTrackRender(toggle: boolean): void {
    SetRaceTrackRender(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE81B7D2A3DAB2D81 | Since: 323
 */
export function setRadarAsExteriorThisFrame(): void {
    SetRadarAsExteriorThisFrame();
}

/**
 * List of interior hashes: https://pastebin.com/1FUyXNqY
 * Not for every interior zoom > 0 available.
 * 
 * Hash: 0x59E727A1C9D3E31A | Since: 323
 */
export function setRadarAsInteriorThisFrame(interior: number | string, pos: Vector3, zoom: number): void {
    if (typeof interior === 'string') interior = GetHashKey(interior)
    SetRadarAsInteriorThisFrame(interior, pos.x, pos.y, pos.z, zoom);
}

/**
 * zoomLevel ranges from 0 to 1400 in R* Scripts
 * 
 * Hash: 0x096EF57A0C999BBA | Since: 323
 */
export function setRadarZoom(zoomLevel: number): void {
    SetRadarZoom(zoomLevel);
}

/**
 * zoom ranges from 0 to 90f in R* Scripts
 * 
 * Hash: 0xBD12C5EEE184C337 | Since: 323
 */
export function setRadarZoomPrecise(zoom: number): void {
    SetRadarZoomPrecise(zoom);
}

/**
 * No comment provided
 * 
 * Hash: 0xF98E4B3E56AFC7B1 | Since: 323
 */
export function setRadarZoomToBlip(blip: number | IBlip, zoom: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetRadarZoomToBlip(_blip, zoom);
}

/**
 * No comment provided
 * 
 * Hash: 0xCB7CC0D58405AD41 | Since: 323
 */
export function setRadarZoomToDistance(zoom: number): void {
    SetRadarZoomToDistance(zoom);
}

/**
 * Enabling this on a radius blip will make it outline only. See https://cdn.discordapp.com/attachments/553235301632573459/575132227935928330/unknown.png
 * 
 * Hash: 0x25615540D894B814 | Since: 323
 */
export function setRadiusBlipEdge(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    SetRadiusBlipEdge(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CF54F20DE43879C | Since: 323
 */
export function setSavegameListUniqueId(): void {
    Citizen.invokeNative('0x0CF54F20DE43879C', undefined);
}

/**
 * Sets the color of HUD_COLOUR_SCRIPT_VARIABLE
 * 
 * Hash: 0xD68A5FF8A3A89874 | Since: 323
 */
export function setScriptVariableColour(r: number, g: number, b: number, a: number): void {
    SetScriptVariableHudColour(r, g, b, a);
}

/**
 * Sets the color of HUD_COLOUR_SCRIPT_VARIABLE_2
 * 
 * Hash: 0x16A304E6CB2BFAB9 | Since: 323
 */
export function setSecondScriptVariableColour(r: number, g: number, b: number, a: number): void {
    SetScriptVariable2HudColour(r, g, b, a);
}

/**
 * `HUD::SET_SOCIAL_CLUB_TOUR("Gallery");`
 * `HUD::SET_SOCIAL_CLUB_TOUR("Missions");`
 * `HUD::SET_SOCIAL_CLUB_TOUR("General");`
 * `HUD::SET_SOCIAL_CLUB_TOUR("Playlists");`
 * 
 * Hash: 0x9E778248D6685FE0 | Since: 323
 */
export function setSocialClubTour(name: string): void {
    SetSocialClubTour(name);
}

/**
 * No comment provided
 * 
 * Hash: 0xC02F4DBFB51D988B | Since: 323
 */
export function setTextCentre(align: boolean): void {
    SetTextCentre(align);
}

/**
 * colors you input not same as you think?
 * A: for some reason its R B G A
 * 
 * Hash: 0xBE6B23FFA53FB442 | Since: 323
 */
export function setTextColour(red: number, green: number, blue: number, alpha: number): void {
    SetTextColour(red, green, blue, alpha);
}

/**
 * distance - shadow distance in pixels, both horizontal and vertical
 * r, g, b, a - color
 * 
 * Hash: 0x465C84BC39F1C351 | Since: 323
 */
export function setTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void {
    SetTextDropshadow(distance, r, g, b, a);
}

/**
 * No comment provided
 * 
 * Hash: 0x1CA3E9EAC9D93E5E | Since: 323
 */
export function setTextDropShadow(): void {
    SetTextDropShadow();
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0x441603240D202FA6 | Since: 323
 */
export function setTextEdge(r: number, g: number, b: number, a: number): void {
    SetTextEdge(0, r, g, b, a);
}

/**
 * fonts that mess up your text where made for number values/misc stuff
 * 
 * Hash: 0x66E0276CC5F6B9DA | Since: 323
 */
export function setTextFont(fontType: number): void {
    SetTextFont(fontType);
}

/**
 * No comment provided
 * 
 * Hash: 0x1185A8087587322C | Since: 323
 */
export function setTextInputBoxEnabled(): void {
    SetTextInputBoxEnabled(false);
}

/**
 * Types -
 * 0: Center-Justify
 * 1: Left-Justify
 * 2: Right-Justify
 * 
 * Right-Justify requires SET_TEXT_WRAP, otherwise it will draw to the far right of the screen
 * 
 * Hash: 0x4E096588B13FFECA | Since: 323
 */
export function setTextJustification(justifyType: number): void {
    SetTextJustification(justifyType);
}

/**
 * No comment provided
 * 
 * Hash: 0xA50ABC31E3CDFAFF | Since: 323
 */
export function setTextLeading(): void {
    SetTextLeading(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F4624F76E6953D1 | Since: 3095
 */
export function setTextLineHeightMult(lineHeightMult: number): void {
    Citizen.invokeNative('0x9F4624F76E6953D1', lineHeightMult);
}

/**
 * No comment provided
 * 
 * Hash: 0x2513DFB0FB8400FE | Since: 323
 */
export function setTextOutline(): void {
    SetTextOutline();
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0x038C1F517D7FDCF8 | Since: 323
 */
export function setTextProportional(): void {
    SetTextProportional(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F15302936E07111 | Since: 323
 */
export function setTextRenderId(renderId: number): void {
    SetTextRenderId(renderId);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B3C4650BC8BEE47 | Since: 323
 */
export function setTextRightJustify(toggle: boolean): void {
    SetTextRightJustify(toggle);
}

/**
 * Size range : 0F to 1.0F
 * p0 is unknown and doesn't seem to have an effect, yet in the game scripts it changes to 1.0F sometimes.
 * 
 * Hash: 0x07C837F9A01C34C9 | Since: 323
 */
export function setTextScale(scale: number, size: number): void {
    SetTextScale(scale, size);
}

/**
 * It sets the text in a specified box and wraps the text if it exceeds the boundries. Both values are for X axis. Useful when positioning text set to center or aligned to the right.
 * 
 * start - left boundry on screen position (0.0 - 1.0)
 * end - right boundry on screen position (0.0 - 1.0)
 * 
 * Hash: 0x63145D9C883A1A70 | Since: 323
 */
export function setTextWrap(start: number, end: number): void {
    SetTextWrap(start, end);
}

/**
 * Toggles the Cayo Perico map.
 * 
 * Hash: 0x5E1460624D194A38 | Since: 2189
 */
export function setUseIslandMap(toggle: boolean): void {
    SetUseIslandMap(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6CDD58146A436083 | Since: 573
 */
export function setUseSetDestinationInPauseMap(toggle: boolean): void {
    SetUseWaypointAsDestination(toggle);
}

/**
 * You can only use text entries. No custom text.
 * 
 * Example: SET_WARNING_MESSAGE("t20", 3, "adder", false, -1, 0, 0, true);
 * errorCode: shows an error code at the bottom left if nonzero
 * 
 * Hash: 0x7B1776B3B53F8D74 | Since: 323
 */
export function setWarningMessage(titleMsg: string, flags: number, promptMsg: string, showBackground: boolean, errorCode: number): void {
    SetWarningMessage(titleMsg, flags, promptMsg, false, 0, undefined, undefined, showBackground, errorCode);
}

/**
 * No comment provided
 * 
 * Hash: 0xDAF87174BE7454FF | Since: 323
 */
export function setWarningMessageOptionHighlight(): boolean {
    return Citizen.invokeNative('0xDAF87174BE7454FF', undefined);
}

/**
 * Some sort of list displayed in a warning message. Yet unknown how to prevent repeating.
 * Param names copied from the corresponding scaleform function "SET_LIST_ROW".
 * Example: https://i.imgur.com/arKvOYx.png
 * 
 * Hash: 0x0C5A80A9E096D529 | Since: 323
 */
export function setWarningMessageOptionItems(index: number, name: string, cash: number, rp: number, lvl: number, colour: number): boolean {
    return SetWarningMessageListRow(index, name, cash, rp, lvl, colour);
}

/**
 * Shows a warning message on screen with a header.
 * Note: You can only use text entries. No custom text. You can recreate this easily with scaleforms.
 * Example: https://i.imgur.com/ITJt8bJ.png
 * 
 * Hash: 0xDC38CC1E35B6A5D7 | Since: 323
 */
export function setWarningMessageWithHeader(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string): [any, any] {
    return SetWarningMessageWithHeader(entryHeader, entryLine1, instructionalKey, entryLine2, false, undefined, false, undefined);
}

/**
 * You can use this native for custom input, without having to use any scaleform-related natives.
 * The native must be called on tick.
 * The entryHeader must be a valid label.
 * For Single lines use JL_INVITE_N as entryLine1, JL_INVITE_ND for multiple.
 * Notes:
 * - additionalIntInfo: replaces first occurrence of ~1~ in provided label with an integer
 * - additionalTextInfoLine1: replaces first occurrence of ~a~ in provided label, with your custom text
 * - additionalTextInfoLine2: replaces second occurrence of ~a~ in provided label, with your custom text
 * - showBackground: shows black background of the warning screen
 * - errorCode: shows an error code at the bottom left if nonzero
 * Example of usage:
 * SET_WARNING_MESSAGE_WITH_HEADER_AND_SUBSTRING_FLAGS("ALERT", "JL_INVITE_ND", 66, "", true, -1, -1, "Testing line 1", "Testing line 2", true, 0);
 * Screenshot:
 * https://imgur.com/a/IYA7vJ8
 * 
 * Hash: 0x701919482C74B5AB | Since: 323
 */
export function setWarningMessageWithHeaderAndSubstringFlags(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string, additionalIntInfo: any, additionalTextInfoLine1: string, additionalTextInfoLine2: string, showBackground: boolean, errorCode: number): void {
    SetWarningMessageWithHeaderAndSubstringFlags(entryHeader, entryLine1, instructionalKey, entryLine2, false, undefined, additionalIntInfo, additionalTextInfoLine1, additionalTextInfoLine2, showBackground, errorCode);
}

/**
 * labelTitle: Label of the alert's title.
 * labelMsg: Label of the alert's message.
 * p2: This is an enum, check the description for a list.
 * p3: This is an enum, check the description for a list.
 * labelMsg2: Label of another message line
 * p5: usually 0
 * p6: usually -1
 * p7: usually 0
 * p8: unknown label
 * p9: unknown label
 * background: Set to anything other than 0 or false (even any string) and it will draw a background. Setting it to 0 or false will draw no background.
 * errorCode: Error code, shown at the bottom left if set to value other than 0.
 * 
 * instructionalKey enum list:
 * Buttons = {
 * Empty = 0,
 * Select = 1, -- (RETURN)
 * Ok = 2, -- (RETURN)
 * Yes = 4, -- (RETURN)
 * Back = 8, -- (ESC)
 * Cancel = 16, -- (ESC)
 * No = 32, -- (ESC)
 * RetrySpace = 64, -- (SPACE)
 * Restart = 128, -- (SPACE)
 * Skip = 256, -- (SPACE)
 * Quit = 512, -- (ESC)
 * Adjust = 1024, -- (ARROWS)
 * SpaceKey = 2048, -- (SPACE)
 * Share = 4096, -- (SPACE)
 * SignIn = 8192, -- (SPACE)
 * Continue = 16384, -- (RETURN)
 * AdjustLeftRight = 32768, -- (SCROLL L/R)
 * AdjustUpDown = 65536, -- (SCROLL U/D)
 * Overwrite = 131072, -- (SPACE)
 * SocialClubSignup = 262144, -- (RETURN)
 * Confirm = 524288, -- (RETURN)
 * Queue = 1048576, -- (RETURN)
 * RetryReturn = 2097152, -- (RETURN)
 * BackEsc = 4194304, -- (ESC)
 * SocialClub = 8388608, -- (RETURN)
 * Spectate = 16777216, -- (SPACE)
 * OkEsc = 33554432, -- (ESC)
 * CancelTransfer = 67108864, -- (ESC)
 * LoadingSpinner = 134217728,
 * NoReturnToGTA = 268435456, -- (ESC)
 * CancelEsc = 536870912, -- (ESC)
 * }
 * 
 * Alt = {
 * Empty = 0,
 * No = 1, -- (SPACE)
 * Host = 2, -- (ESC)
 * SearchForJob = 4, -- (RETURN)
 * ReturnKey = 8, -- (TURN)
 * Freemode = 16, -- (ESC)
 * }
 * 
 * Example: https://i.imgur.com/TvmNF4k.png
 * 
 * Hash: 0x15803FEC3B9A872B | Since: 573
 */
export function setWarningMessageWithHeaderAndSubstringFlagsExtended(labelTitle: string, labelMessage: string, labelMessage2: string, background: boolean, errorCode: number): void {
    SetWarningMessageWithAlert(labelTitle, labelMessage, 0, 0, labelMessage2, false, 0, 0, undefined, undefined, background, errorCode);
}

/**
 * No comment provided
 * 
 * Hash: 0x38B55259C2E078ED | Since: 1493
 */
export function setWarningMessageWithHeaderExtended(entryHeader: string, entryLine1: string, flags: number, entryLine2: string, showBg: boolean): [any, any] {
    return SetWarningMessageWithHeaderExtended(entryHeader, entryLine1, flags, entryLine2, false, undefined, showBg, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FFC556B62146F75 | Since: 3717
 */
export function setWaypointClearOnArrivalMode(mode: number): void {
    Citizen.invokeNative('0x3FFC556B62146F75', mode);
}

/**
 * This native removes the current waypoint from the map.
 * 
 * Example:
 * C#:
 * Function.Call(Hash.SET_WAYPOINT_OFF);
 * 
 * C++:
 * `HUD::SET_WAYPOINT_OFF();`
 * 
 * Hash: 0xA7E4E2D361C2627F | Since: 323
 */
export function setWaypointOff(): void {
    SetWaypointOff();
}

/**
 * No comment provided
 * 
 * Hash: 0xC3B07BA00A83B0F1 | Since: 323
 */
export function setWidescreenFormat(): void {
    SetWidescreenFormat(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x60E892BA4F5BDCA4 | Since: 323
 */
export function showAccountPicker(): void {
    ShowSigninUi();
}

/**
 * No comment provided
 * 
 * Hash: 0xC772A904CDE1186F | Since: 2545
 */
export function showContactInstructionalButton(toggle: boolean): void {
    ShowContactInstructionalButton(toggle);
}

/**
 * Enables or disables the blue half circle https://i.imgur.com/iZes9Ec.png around the specified blip on the left side of the blip. This is used to indicate that the player is in your crew in GTA:O. Color is changeable by using `SET_BLIP_SECONDARY_COLOUR`.
 * 
 * Hash: 0xDCFB5D4DB8BF367E | Since: 323
 */
export function showCrewIndicatorOnBlip(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    ShowCrewIndicatorOnBlip(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x19BD6E3C0E16A8FA | Since: 2802
 */
export function showForSaleIconOnBlip(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    Citizen.invokeNative('0x19BD6E3C0E16A8FA', _blip, toggle);
}

/**
 * Highlights a blip by a half cyan circle on the right side of the blip. https://i.imgur.com/FrV9M4e.png
 * .Indicating that that player is a friend (in GTA:O). This color can not be changed.
 * To toggle the left side (crew member indicator) of the half circle around the blip, use: `SHOW_CREW_INDICATOR_ON_BLIP`
 * 
 * Hash: 0x23C3EB807312F01A | Since: 323
 */
export function showFriendIndicatorOnBlip(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    ShowFriendIndicatorOnBlip(_blip, toggle);
}

/**
 * Adds a orange checkmark on top of a given blip handle: https://imgur.com/a/aw5OTMF
 * _SHOW_FRIEND_INDICATOR_ON_BLIP* - _SHOW_HEADING_INDICATOR_ON_BLIP*
 * 
 * Hash: 0xCAC2031EBF79B1A8 | Since: 2699
 */
export function showGoldTickOnBlip(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    ShowHasCompletedIndicatorOnBlip(_blip, toggle);
}

/**
 * Adds the GTA: Online player heading indicator to a blip.
 * 
 * Hash: 0x5FBCA48327B914DF | Since: 323
 */
export function showHeadingIndicatorOnBlip(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    ShowHeadingIndicatorOnBlip(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x75A16C3DA34F1245 | Since: 323
 */
export function showHeightOnBlip(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    ShowHeightOnBlip(_blip, toggle);
}

/**
 * This function hides various HUD (Heads-up Display) components.
 * Listed below are the integers and the corresponding HUD component.
 * - 1 : WANTED_STARS
 * - 2 : WEAPON_ICON
 * - 3 : CASH
 * - 4 : MP_CASH
 * - 5 : MP_MESSAGE
 * - 6 : VEHICLE_NAME
 * - 7 : AREA_NAME
 * - 8 : VEHICLE_CLASS
 * - 9 : STREET_NAME
 * - 10 : HELP_TEXT
 * - 11 : FLOATING_HELP_TEXT_1
 * - 12 : FLOATING_HELP_TEXT_2
 * - 13 : CASH_CHANGE
 * - 14 : RETICLE
 * - 15 : SUBTITLE_TEXT
 * - 16 : RADIO_STATIONS
 * - 17 : SAVING_GAME
 * - 18 : GAME_STREAM
 * - 19 : WEAPON_WHEEL
 * - 20 : WEAPON_WHEEL_STATS
 * - 21 : HUD_COMPONENTS
 * - 22 : HUD_WEAPONS
 * 
 * These integers also work for the `HIDE_HUD_COMPONENT_THIS_FRAME` native, but instead hides the HUD Component.
 * 
 * Hash: 0x0B4DF1FA60C0E664 | Since: 323
 */
export function showComponentThisFrame(id: number): void {
    ShowHudComponentThisFrame(id);
}

/**
 * No comment provided
 * 
 * Hash: 0xA3C0B359DCB848B6 | Since: 323
 */
export function showNumberOnBlip(blip: number | IBlip, _number: number): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    ShowNumberOnBlip(_blip, _number);
}

/**
 * Highlights a blip by a cyan color circle.
 * 
 * Color can be changed with SET_BLIP_SECONDARY_COLOUR
 * 
 * Hash: 0xB81656BC81FE24D1 | Since: 323
 */
export function showOutlineIndicatorOnBlip(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    ShowOutlineIndicatorOnBlip(_blip, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4F38DCA127DAAEA2 | Since: 1734
 */
export function showScriptedComponentThisFrame(id: number): void {
    ShowScriptedHudComponentThisFrame(id);
}

/**
 * No comment provided
 * 
 * Hash: 0xF1A6C18B35BCADE6 | Since: 323
 */
export function showStartMissionInstructionalButton(toggle: boolean): void {
    ShowStartMissionInstructionalButton(toggle);
}

/**
 * Adds a green checkmark on top of a blip.
 * 
 * Hash: 0x74513EA3E505181E | Since: 323
 */
export function showTickOnBlip(blip: number | IBlip, toggle: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    ShowTickOnBlip(_blip, toggle);
}

/**
 * Starts a new GPS custom-route, allowing you to plot lines on the map.
 * Lines are drawn directly between points.
 * The GPS custom route works like the GPS multi route, except it does not follow roads.
 * Example result: https://i.imgur.com/BDm5pzt.png
 * hudColor: The HUD color of the GPS path.
 * displayOnFoot: Draws the path regardless if the player is in a vehicle or not.
 * followPlayer: Draw the path partially between the previous and next point based on the players position between them. When false, the GPS appears to not disappear after the last leg is completed.
 * 
 * Hash: 0xDB34E8D56FC13B08 | Since: 323
 */
export function startGpsCustomRoute(hudColor: number, displayOnFoot: boolean, followPlayer: boolean): void {
    StartGpsCustomRoute(hudColor, displayOnFoot, followPlayer);
}

/**
 * Starts a new GPS multi-route, allowing you to create custom GPS paths.
 * GPS functions like the waypoint, except it can contain multiple points it's forced to go through.
 * Once the player has passed a point, the GPS will no longer force its path through it.
 * 
 * Works independently from the player-placed waypoint and blip routes.
 * Example result: https://i.imgur.com/ZZHQatX.png
 * hudColor: The HUD color of the GPS path.
 * routeFromPlayer: Makes the GPS draw a path from the player to the next point, rather than the original path from the previous point.
 * displayOnFoot: Draws the GPS path regardless if the player is in a vehicle or not.
 * 
 * Hash: 0x3D3D15AF7BCAAF83 | Since: 323
 */
export function startGpsMultiRoute(hudColor: number, routeFromPlayer: boolean, displayOnFoot: boolean): void {
    StartGpsMultiRoute(hudColor, routeFromPlayer, displayOnFoot);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA751764F0821256 | Since: 323
 */
export function suppressFrontendRenderingThisFrame(): void {
    SuppressFrontendRenderingThisFrame();
}

/**
 * Disables frontend (works in custom frontends, not sure about regular pause menu) navigation keys on keyboard. Not sure about controller. Does not disable mouse controls. No need to call this every tick.
 * 
 * To enable the keys again, use `0x14621BB1DF14E2B2`.
 * 
 * Hash: 0xEC9264727EEC0F28 | Since: 323
 */
export function takeControlOfFrontend(): void {
    TakeControlOfFrontend();
}

/**
 * Displays "normal" notifications again after calling `THEFEED_AUTO_POST_GAMETIPS_ON` (those that were drawn before calling this native too), though those will have a weird offset and stay on screen forever (tested with notifications created from same script).
 * 
 * Hash: 0xADED7F5748ACAFE6 | Since: 323
 */
export function thefeedAutoPostGametipsOff(): void {
    ThefeedCommentTeleportPoolOff();
}

/**
 * Enables loading screen tips to be be shown (`THEFEED_SHOW`), blocks other kinds of notifications from being displayed (at least from current script). Call `THEFEED_AUTO_POST_GAMETIPS_OFF` to display those again.
 * 
 * Hash: 0x56C8B608CFD49854 | Since: 323
 */
export function thefeedAutoPostGametipsOn(): void {
    ThefeedCommentTeleportPoolOn();
}

/**
 * No comment provided
 * 
 * Hash: 0x80FE4F3AB4E1B62A | Since: 323
 */
export function thefeedClearFrozenPost(): void {
    ThefeedClearFrozenPost();
}

/**
 * No comment provided
 * 
 * Hash: 0xA8FDB297A8D25FBA | Since: 323
 */
export function thefeedFlushQueue(): void {
    ThefeedFlushQueue();
}

/**
 * Enables loading screen tips to be be shown (`THEFEED_SHOW`), blocks other kinds of notifications from being displayed (at least from current script). Call `0xADED7F5748ACAFE6` to display those again.
 * 
 * Hash: 0x583049884A2EEE3C | Since: 323
 */
export function thefeedForceRenderOff(): void {
    ThefeedForceRenderOff();
}

/**
 * No comment provided
 * 
 * Hash: 0xA13C11E1B5C06BFC | Since: 323
 */
export function thefeedForceRenderOn(): void {
    ThefeedForceRenderOn();
}

/**
 * Requires manual management of game stream handles (i.e., 0xBE4390CB40B3E627).
 * 
 * Hash: 0xFDEC055AB549E328 | Since: 323
 */
export function thefeedFreezeNextPost(): void {
    ThefeedFreezeNextPost();
}

/**
 * Returns the handle for the notification currently displayed on the screen. Name may be a hash collision, but describes the function accurately.
 * 
 * Hash: 0x82352748437638CA | Since: 323
 */
export function thefeedGetLastShownPhoneActivatableFeedId(): number {
    return ThefeedGetFirstVisibleDeleteRemaining();
}

/**
 * Stops loading screen tips shown by invoking `THEFEED_SHOW`
 * 
 * Hash: 0x32888337579A5970 | Since: 463
 */
export function thefeedHide(): void {
    ThefeedDisableLoadingScreenTips();
}

/**
 * Once called each frame hides all above radar notifications.
 * 
 * Hash: 0x25F87B30C382FCA7 | Since: 323
 */
export function thefeedHideThisFrame(): void {
    ThefeedHideThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0xA9CBFD40B3FA3010 | Since: 323
 */
export function thefeedIsPaused(): boolean {
    return ThefeedIsPaused();
}

/**
 * No comment provided
 * 
 * Hash: 0x6F1554B0CC2089FA | Since: 323
 */
export function thefeedOnlyShowTooltips(toggle: boolean): void {
    ThefeedOnlyShowTooltips(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFDB423997FA30340 | Since: 323
 */
export function thefeedPause(): void {
    ThefeedPause();
}

/**
 * Removes a notification instantly instead of waiting for it to disappear
 * 
 * Hash: 0xBE4390CB40B3E627 | Since: 323
 */
export function thefeedRemoveItem(notificationId: number): void {
    ThefeedRemoveItem(notificationId);
}

/**
 * No comment provided
 * 
 * Hash: 0xB695E2CD0A2DA9EE | Since: 323
 */
export function thefeedReportLogoOff(): void {
    ThefeedSpsExtendWidescreenOff();
}

/**
 * No comment provided
 * 
 * Hash: 0xD4438C0564490E63 | Since: 323
 */
export function thefeedReportLogoOn(): void {
    ThefeedSpsExtendWidescreenOn();
}

/**
 * No comment provided
 * 
 * Hash: 0xFDD85225B2DEA55E | Since: 323
 */
export function thefeedResetAllParameters(): void {
    ThefeedResetAllParameters();
}

/**
 * No comment provided
 * 
 * Hash: 0xE1CD1E48E025E661 | Since: 323
 */
export function thefeedResume(): void {
    ThefeedResume();
}

/**
 * From the decompiled scripts:
 * `HUD::THEFEED_SET_BACKGROUND_COLOR_FOR_NEXT_POST(6);`
 * `HUD::THEFEED_SET_BACKGROUND_COLOR_FOR_NEXT_POST(184);`
 * `HUD::THEFEED_SET_BACKGROUND_COLOR_FOR_NEXT_POST(190);`
 * 
 * sets background color for the next notification
 * 6 = red
 * 184 = green
 * 190 = yellow
 * 
 * Here is a list of some colors that can be used: https://gyazo.com/68bd384455fceb0a85a8729e48216e15
 * 
 * Hash: 0x92F0DA1E27DB96DC | Since: 323
 */
export function thefeedSetBackgroundColorForNextPost(hudColorIndex: number): void {
    ThefeedSetNextPostBackgroundColor(hudColorIndex);
}

/**
 * Related to notification color flashing, setting count to 0 invalidates a `THEFEED_SET_RGBA_PARAMETER_FOR_NEXT_MESSAGE` call for the target notification.
 * 
 * Hash: 0x17AD8C9706BDD88A | Since: 323
 */
export function thefeedSetFlashDurationParameterForNextMessage(count: number): void {
    ThefeedSetAnimpostfxCount(count);
}

/**
 * No comment provided
 * 
 * Hash: 0x17430B918701C342 | Since: 323
 */
export function thefeedSetRgbaParameterForNextMessage(red: number, green: number, blue: number, alpha: number): void {
    ThefeedSetAnimpostfxColor(red, green, blue, alpha);
}

/**
 * No comment provided
 * 
 * Hash: 0x55598D21339CB998 | Since: 323
 */
export function thefeedSetScriptedMenuHeight(pos: number): void {
    ThefeedSetScriptedMenuHeight(pos);
}

/**
 * No comment provided
 * 
 * Hash: 0xBAE4F9B97CD43B30 | Since: 323
 */
export function thefeedSetSnapFeedItemPositions(): void {
    ThefeedSetFlushAnimpostfx(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x4A0C7C9BB10ABB36 | Since: 323
 */
export function thefeedSetVibrateParameterForNextMessage(toggle: boolean): void {
    ThefeedSetAnimpostfxSound(toggle);
}

/**
 * Displays loading screen tips, requires `THEFEED_AUTO_POST_GAMETIPS_ON` to be called beforehand.
 * 
 * Hash: 0x15CFA549788D35EF | Since: 463
 */
export function thefeedShow(): void {
    ThefeedDisplayLoadingScreenTips();
}

/**
 * Used in the native scripts to reference "GET_PEDHEADSHOT_TXD_STRING" and "CHAR_DEFAULT".
 * 
 * Hash: 0x317EBA71D7543F52 | Since: 323
 */
export function thefeedUpdateItemTexture(txdString1: string, txnString1: string, txdString2: string, txnString2: string): void {
    ThefeedUpdateItemTexture(txdString1, txnString1, txdString2, txnString2);
}

/**
 * No comment provided
 * 
 * Hash: 0x6AFDFB93754950C7 | Since: 323
 */
export function toggleStealthRadar(toggle: boolean): void {
    ToggleStealthRadar(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x72DD432F3CDFC0EE | Since: 323
 */
export function triggerSonarBlip(pos: Vector3, radius: number): void {
    TriggerSonarBlip(pos.x, pos.y, pos.z, radius, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x8183455E16C42E3A | Since: 323
 */
export function unlockMinimapAngle(): void {
    UnlockMinimapAngle();
}

/**
 * No comment provided
 * 
 * Hash: 0x3E93E06DB8EF1F30 | Since: 323
 */
export function unlockMinimapPosition(): void {
    UnlockMinimapPosition();
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0xD2049635DEB9C375 | Since: 323
 */
export function updateRadarZoomToBlip(): void {
    Citizen.invokeNative('0xD2049635DEB9C375');
}

/**
 * Related to displaying cash on the HUD
 * `Always called before HUD::CHANGE_FAKE_MP_CASH in decompiled scripts`
 * 
 * Hash: 0x170F541E1CADD1DE | Since: 323
 */
export function useFakeMpCash(toggle: boolean): void {
    UseFakeMpCash(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C698D8F099174C7 | Since: 1180
 */
export function useVehicleTargetingReticule(): void {
    Citizen.invokeNative('0x0C698D8F099174C7', undefined);
}

/**
 * Applies to new eBlipParams _BLIP_CHANGE_46* and _BLIP_CHANGE_47*
 * 
 * Hash: 0x25D984CFB64ED6DE | Since: 3095
 */
export function setBlipGpsRouteDisplayDistance(blip: number | IBlip, blipChangeParam46: number, blipChangeParam47: boolean): void {
    const _blip = typeof blip == 'object' ? blip.handle() : blip;
    Citizen.invokeNative('0x25D984CFB64ED6DE', _blip, blipChangeParam46, blipChangeParam47);
}

/**
 * No comment provided
 * 
 * Hash: 0x35CCE12EAECB4A51 | Since: 2944
 */
export function setPauseExteriorRenderingWhileInInterior(): void {
    Citizen.invokeNative('0x35CCE12EAECB4A51');
}

/**
 * No comment provided
 * 
 * Hash: 0xF6865E26067B708C | Since: 3407
 */
export function showPurchaseInstructionalButton(toggle: boolean): void {
    Citizen.invokeNative('0xF6865E26067B708C', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1BC0EA2912708625 | Since: 3095
 */
export function useVehicleTargetingReticuleOnVehicles(enable: boolean): void {
    Citizen.invokeNative('0x1BC0EA2912708625', enable);
}

