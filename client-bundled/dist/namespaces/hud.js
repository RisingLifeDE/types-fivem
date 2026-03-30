import { Vector3, IEntity, IPed, IPlayer, IBlip } from '@risinglife/fivem-shared';
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xCD949E20 | Since: unknown | API-Set: client
 */
export function getComponentAlign(id) {
    return GetHudComponentAlign(id);
}
/**
 * No comment provided
 *
 * Hash: 0xA91866BC | Since: unknown | API-Set: client
 */
export function getComponentName(id) {
    return GetHudComponentName(id);
}
/**
 * No comment provided
 *
 * Hash: 0x12217D33 | Since: unknown | API-Set: client
 */
export function getComponentSize(id) {
    return new Vector3(GetHudComponentSize(id));
}
/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 *
 * Hash: 0x1363A998 | Since: unknown | API-Set: client
 */
export function getMapZoomDataLevel(index) {
    return GetMapZoomDataLevel(index);
}
/**
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 *
 * Hash: 0xFFF65C63 | Since: unknown | API-Set: client
 */
export function isBigmapActive() {
    return IsBigmapActive();
}
/**
 * No comment provided
 *
 * Hash: 0x66EE14B2 | Since: unknown | API-Set: client
 */
export function isBigmapFull() {
    return IsBigmapFull();
}
/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 *
 * Hash: 0x11A5B7ED | Since: unknown | API-Set: client
 */
export function resetMapZoomDataLevel(index) {
    ResetMapZoomDataLevel(index);
}
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xEED219F2 | Since: unknown | API-Set: client
 */
export function setComponentAlign(id, horizontalAlign, verticalAlign) {
    SetHudComponentAlign(id, horizontalAlign, verticalAlign);
}
/**
 * No comment provided
 *
 * Hash: 0x7644A9FA | Since: unknown | API-Set: client
 */
export function setComponentSize(id, x, y) {
    SetHudComponentSize(id, x, y);
}
/**
 * Sets values to the zoom level data by index.
 *
 * Hash: 0x447C718E | Since: unknown | API-Set: client
 */
export function setMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY) {
    SetMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY);
}
/**
 * Get the minimap type:
 *
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 *
 * Hash: 0xA6FF71C9 | Since: unknown | API-Set: client
 */
export function getMinimapType() {
    return GetMinimapType();
}
/**
 * Possible Types:
 *
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 *
 * Hash: 0x5FB53015 | Since: unknown | API-Set: client
 */
export function setMinimapType(_type) {
    SetMinimapType(_type);
}
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
 * Hash: 0xEF01D36B9C9D0C7B | Since: 323 | API-Set: unknown
 */
export function activateFrontendMenu(menuhash, togglePause, component) {
    if (typeof menuhash === 'string')
        menuhash = GetHashKey(menuhash);
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
 * Hash: 0xCE5D0E5E315DB238 | Since: 463 | API-Set: unknown
 */
export function addBlipForArea(pos, width, height) {
    return AddBlipForArea(pos.x, pos.y, pos.z, width, height);
}
/**
 * Creates an orange ( default ) Blip-object. Returns a Blip-object which can then be modified.
 *
 * Hash: 0x5A039BB0BCA604B6 | Since: 323 | API-Set: unknown
 */
export function addBlipForCoord(pos) {
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
 * Hash: 0x5CDE92C702A8FCE7 | Since: 323 | API-Set: unknown
 */
export function addBlipForEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return AddBlipForEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xBE339365C863BD36 | Since: 323 | API-Set: unknown
 */
export function addBlipForPickup(pickup) {
    return AddBlipForPickup(pickup);
}
/**
 * No comment provided
 *
 * Hash: 0x46818D79B1F7499A | Since: 323 | API-Set: unknown
 */
export function addBlipForRadius(pos, radius) {
    return AddBlipForRadius(pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x60296AF4BA14ABC5 | Since: 323 | API-Set: unknown
 */
export function addNextMessageToPreviousBriefs() {
    AddNextMessageToPreviousBriefs(false);
}
/**
 * No comment provided
 *
 * Hash: 0x311438A071DD9B1A | Since: 323 | API-Set: unknown
 */
export function addPointToGpsCustomRoute(pos) {
    AddPointToGpsCustomRoute(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xA905192A6781C41B | Since: 323 | API-Set: unknown
 */
export function addPointToGpsMultiRoute(pos) {
    AddPointToGpsMultiRoute(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xE7DCB5B874BCD96E | Since: 323 | API-Set: unknown
 */
export function addTextComponentFloat(value, decimalPlaces) {
    AddTextComponentFloat(value, decimalPlaces);
}
/**
 * No comment provided
 *
 * Hash: 0x0E4C749FF9DE9CC4 | Since: 323 | API-Set: unknown
 */
export function addTextComponentFormattedInteger(value, commaSeparated) {
    AddTextComponentFormattedInteger(value, commaSeparated);
}
/**
 * No comment provided
 *
 * Hash: 0x03B504CF259931BC | Since: 323 | API-Set: unknown
 */
export function addTextComponentInteger(value) {
    AddTextComponentInteger(value);
}
/**
 * No comment provided
 *
 * Hash: 0x80EAD8E2E1D5D52E | Since: 323 | API-Set: unknown
 */
export function addTextComponentSubstringBlipName(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    AddTextComponentSubstringBlipName(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0x5F68520888E69014 | Since: 323 | API-Set: unknown
 */
export function addTextComponentSubstringKeyboardDisplay(_string) {
    AddTextComponentSubstringKeyboardDisplay(_string);
}
/**
 * p1 was always -1
 *
 * Hash: 0x761B77454205A61D | Since: 323 | API-Set: unknown
 */
export function addTextComponentSubstringPhoneNumber() {
    AddTextComponentSubstringPhoneNumber(undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x6C188BE134E074AA | Since: 323 | API-Set: unknown
 */
export function addTextComponentSubstringPlayerName(text) {
    AddTextComponentSubstringPlayerName(text);
}
/**
 * No comment provided
 *
 * Hash: 0xC63CD5D2920ACBE7 | Since: 323 | API-Set: unknown
 */
export function addTextComponentSubstringTextLabel(labelName) {
    AddTextComponentSubstringTextLabel(labelName);
}
/**
 * It adds the localized text of the specified GXT entry name. Eg. if the argument is GET_HASH_KEY("ES_HELP"), adds "Continue". Just uses a text labels hash key
 *
 * Hash: 0x17299B63C7683A2B | Since: 323 | API-Set: unknown
 */
export function addTextComponentSubstringTextLabelHashKey(gxtEntryHash) {
    if (typeof gxtEntryHash === 'string')
        gxtEntryHash = GetHashKey(gxtEntryHash);
    AddTextComponentSubstringTextLabelHashKey(gxtEntryHash);
}
/**
 * Adds a timer (e.g. "00:00:00:000"). The appearance of the timer depends on the flags, which needs more research.
 *
 * Hash: 0x1115F16B8AB9E8BF | Since: 323 | API-Set: unknown
 */
export function addTextComponentSubstringTime(timestamp, flags) {
    AddTextComponentSubstringTime(timestamp, flags);
}
/**
 * This native (along with ADD_TEXT_COMPONENT_SUBSTRING_KEYBOARD_DISPLAY and ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME) do not actually filter anything. They simply add the provided text (as of 944)
 *
 * Hash: 0x94CF4AC034C9C986 | Since: 323 | API-Set: unknown
 */
export function addTextComponentSubstringWebsite(website) {
    AddTextComponentSubstringWebsite(website);
}
/**
 * No comment provided
 *
 * Hash: 0xE4C3B169876D33D7 | Since: 1290 | API-Set: unknown
 */
export function addValidVehicleHitHash() {
    Citizen.invokeNative('0xE4C3B169876D33D7', undefined);
}
/**
 * Controls whether to display 'Cash'/'Bank' next to the money balance HUD in Multiplayer (https://i.imgur.com/MiYUtNl.png)
 *
 * Hash: 0xE67C6DFD386EA5E7 | Since: 323 | API-Set: unknown
 */
export function allowDisplayOfMultiplayerCashText(allow) {
    Citizen.invokeNative('0xE67C6DFD386EA5E7', allow);
}
/**
 * Allows opening the pause menu this frame, when the player is dead.
 *
 * Hash: 0xCC3FDDED67BCFC63 | Since: 323 | API-Set: unknown
 */
export function allowPauseWhenNotInStateOfPlayThisFrame() {
    AllowPauseMenuWhenDeadThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x60734CC207C9833C | Since: 323 | API-Set: unknown
 */
export function allowSonarBlips(toggle) {
    AllowSonarBlips(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF13FE2A80C05C561 | Since: 323 | API-Set: unknown
 */
export function areOnlinePoliciesUpToDate() {
    return Citizen.invokeNative('0xF13FE2A80C05C561');
}
/**
 * No comment provided
 *
 * Hash: 0x23D69E0465570028 | Since: 323 | API-Set: unknown
 */
export function beginTextCommandAddDirectlyToPreviousBriefs() {
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
 * Hash: 0xABA17D7CE615ADBF | Since: 323 | API-Set: unknown
 */
export function beginTextCommandBusyspinnerOn(_string) {
    BeginTextCommandBusyspinnerOn(_string);
}
/**
 * clears a print text command with this text
 *
 * Hash: 0xE124FA80A759019C | Since: 323 | API-Set: unknown
 */
export function beginTextCommandClearPrint(text) {
    BeginTextCommandClearPrint(text);
}
/**
 * Used to be known as _SET_TEXT_COMPONENT_FORMAT
 *
 * Hash: 0x8509B634FBE7DA11 | Since: 323 | API-Set: unknown
 */
export function beginTextCommandDisplayHelp(inputType) {
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
 * Hash: 0x25FBB336DF1804CB | Since: 323 | API-Set: unknown
 */
export function beginTextCommandDisplayText(text) {
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
 * Hash: 0x521FB041D93DD0E4 | Since: 323 | API-Set: unknown
 */
export function beginTextCommandGetNumberOfLinesForString(entry) {
    BeginTextCommandLineCount(entry);
}
/**
 * No comment provided
 *
 * Hash: 0x54CE8AC98E120CAB | Since: 323 | API-Set: unknown
 */
export function beginTextCommandGetScreenWidthOfDisplayText(text) {
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
 * Hash: 0x853648FD1063A213 | Since: 323 | API-Set: unknown
 */
export function beginTextCommandIsMessageDisplayed(text) {
    BeginTextCommandIsMessageDisplayed(text);
}
/**
 * BOOL IsContextActive(char *ctx)
 * {
 * BEGIN_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(ctx);
 * return END_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(0);
 * }
 *
 * Hash: 0x0A24DA3A41B718F5 | Since: 323 | API-Set: unknown
 */
export function beginTextCommandIsThisHelpMessageBeingDisplayed(labelName) {
    BeginTextCommandIsThisHelpMessageBeingDisplayed(labelName);
}
/**
 * No comment provided
 *
 * Hash: 0x8F9EE5687F8EECCD | Since: 323 | API-Set: unknown
 */
export function beginTextCommandOverrideButtonText(gxtEntry) {
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
 * Hash: 0xB87A37EEB7FAA67D | Since: 323 | API-Set: unknown
 */
export function beginTextCommandPrint(GxtEntry) {
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
 * Hash: 0xF9113A30DE5C6670 | Since: 323 | API-Set: unknown
 */
export function beginTextCommandSetBlipName(textLabel) {
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
 * Hash: 0x202709F4C58A0424 | Since: 323 | API-Set: unknown
 */
export function beginTextCommandThefeedPost(text) {
    BeginTextCommandThefeedPost(text);
}
/**
 * No comment provided
 *
 * Hash: 0xB2A592B04648A9CB | Since: 323 | API-Set: unknown
 */
export function busyspinnerIsDisplaying() {
    return BusyspinnerIsDisplaying();
}
/**
 * No comment provided
 *
 * Hash: 0xD422FCC5F239A915 | Since: 323 | API-Set: unknown
 */
export function busyspinnerIsOn() {
    return BusyspinnerIsOn();
}
/**
 * Removes the loading prompt at the bottom right of the screen.
 *
 * Hash: 0x10D373323E5B9C0D | Since: 323 | API-Set: unknown
 */
export function busyspinnerOff() {
    BusyspinnerOff();
}
/**
 * Displays cash change notifications on HUD.
 *
 * Hash: 0x0772DF77852C2E30 | Since: 323 | API-Set: unknown
 */
export function changeFakeMpCash(cash, bank) {
    ChangeFakeMpCash(cash, bank);
}
/**
 * No comment provided
 *
 * Hash: 0x2A179DF17CCF04CD | Since: 323 | API-Set: unknown
 */
export function clearAdditionalText() {
    ClearAdditionalText(0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD12882D3FF82BF11 | Since: 877 | API-Set: unknown
 */
export function clearAllBlipRoutes() {
    ClearAllBlipRoutes();
}
/**
 * No comment provided
 *
 * Hash: 0x6178F68A87A4D3A0 | Since: 323 | API-Set: unknown
 */
export function clearAllHelpMessages() {
    ClearAllHelpMessages();
}
/**
 * No comment provided
 *
 * Hash: 0x9D292F73ADBD9313 | Since: 323 | API-Set: unknown
 */
export function clearBrief() {
    ClearBrief();
}
/**
 * No comment provided
 *
 * Hash: 0x7792424AA0EAC32E | Since: 323 | API-Set: unknown
 */
export function clearDynamicPauseMenuErrorMessage() {
    ClearDynamicPauseMenuErrorMessage();
}
/**
 * No comment provided
 *
 * Hash: 0x8410C5E0CD847B9D | Since: 1290 | API-Set: unknown
 */
export function clearFakeConeArray() {
    Citizen.invokeNative('0x8410C5E0CD847B9D');
}
/**
 * No comment provided
 *
 * Hash: 0x50085246ABD3FEFA | Since: 323 | API-Set: unknown
 */
export function clearFloatingHelp(hudIndex) {
    ClearFloatingHelp(hudIndex, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE6DE0561D9232A64 | Since: 323 | API-Set: unknown
 */
export function clearGpsCustomRoute() {
    ClearGpsCustomRoute();
}
/**
 * Clears the GPS flags. Only the script that originally called SET_GPS_FLAGS can clear them.
 *
 * Doesn't seem like the flags are actually read by the game at all.
 *
 * Hash: 0x21986729D6A3A830 | Since: 323 | API-Set: unknown
 */
export function clearGpsFlags() {
    ClearGpsFlags();
}
/**
 * Does the same as SET_GPS_MULTI_ROUTE_RENDER(false);
 *
 * Hash: 0x67EEDEA1B9BAFD94 | Since: 323 | API-Set: unknown
 */
export function clearGpsMultiRoute() {
    ClearGpsMultiRoute();
}
/**
 * No comment provided
 *
 * Hash: 0xFF4FB7C8CDFA3DA7 | Since: 323 | API-Set: unknown
 */
export function clearGpsPlayerWaypoint() {
    ClearGpsPlayerWaypoint();
}
/**
 * Does the same as SET_RACE_TRACK_RENDER(false);
 *
 * Hash: 0x7AA5B4CE533C858B | Since: 323 | API-Set: unknown
 */
export function clearGpsRaceTrack() {
    ClearGpsRaceTrack();
}
/**
 * No comment provided
 *
 * Hash: 0x8DFCED7A656F8802 | Since: 323 | API-Set: unknown
 */
export function clearHelp(toggle) {
    ClearHelp(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5E62BE5DC58E9E06 | Since: 323 | API-Set: unknown
 */
export function clearPedInPauseMenu() {
    ClearPedInPauseMenu();
}
/**
 * No comment provided
 *
 * Hash: 0xCC33FA791322B9D9 | Since: 323 | API-Set: unknown
 */
export function clearPrints() {
    ClearPrints();
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0xB57D8DD645CFA2CF | Since: 323 | API-Set: unknown
 */
export function clearReminderMessage() {
    ClearReminderMessage();
}
/**
 * No comment provided
 *
 * Hash: 0x2CEA2839313C09AC | Since: 323 | API-Set: unknown
 */
export function clearSmallPrints() {
    ClearSmallPrints();
}
/**
 * p0: found arguments in the b617d scripts: https://pastebin.com/X5akCN7z
 *
 * Hash: 0xCF708001E1E536DD | Since: 323 | API-Set: unknown
 */
export function clearThisPrint() {
    ClearThisPrint(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEB81A3DADD503187 | Since: 1290 | API-Set: unknown
 */
export function clearValidVehicleHitHashes() {
    Citizen.invokeNative('0xEB81A3DADD503187');
}
/**
 * No comment provided
 *
 * Hash: 0x1AC8F4AD40E22127 | Since: 323 | API-Set: unknown
 */
export function closeMpTextChat() {
    CloseMultiplayerChat();
}
/**
 * No comment provided
 *
 * Hash: 0xD2B32BE3FC1626C6 | Since: 323 | API-Set: unknown
 */
export function closeSocialClubMenu() {
    CloseSocialClubMenu();
}
/**
 * No comment provided
 *
 * Hash: 0x66E7CB63C97B7D20 | Since: 323 | API-Set: unknown
 */
export function codeWantsScriptToTakeControl() {
    return Citizen.invokeNative('0x66E7CB63C97B7D20');
}
/**
 * clanFlag: takes a number 0-5
 *
 * Hash: 0xBFEFE3321A3F5015 | Since: 323 | API-Set: unknown
 */
export function createFakeMpGamerTag(ped, username, pointedClanTag, isRockstarClan, clanTag, clanFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CreateFakeMpGamerTag(_ped, username, pointedClanTag, isRockstarClan, clanTag, clanFlag);
}
/**
 * clanFlag: takes a number 0-5
 *
 * Hash: 0x6DD05E9D83EFA4C9 | Since: 323 | API-Set: unknown
 */
export function createMpGamerTagWithCrewColor(player, username, pointedClanTag, isRockstarClan, clanTag, clanFlag, r, g, b) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    CreateMpGamerTagWithCrewColor(_player, username, pointedClanTag, isRockstarClan, clanTag, clanFlag, r, g, b);
}
/**
 * No comment provided
 *
 * Hash: 0x2708FC083123F9FF | Since: 323 | API-Set: unknown
 */
export function customMinimapClearBlips() {
    ClearRaceGalleryBlips();
}
/**
 * Add a BLIP_GALLERY at the specific coordinate. Used in fm_maintain_transition_players to display race track points.
 *
 * Hash: 0x551DF99658DB6EE8 | Since: 323 | API-Set: unknown
 */
export function customMinimapCreateBlip(pos) {
    return RaceGalleryAddBlip(pos.x, pos.y, pos.z);
}
/**
 * If toggle is true, the map is shown in full screen
 * If toggle is false, the map is shown in normal mode
 *
 * Hash: 0x5354C5BA2EA868A4 | Since: 323 | API-Set: unknown
 */
export function customMinimapSetActive(toggle) {
    RaceGalleryFullscreen(toggle);
}
/**
 * Sets the sprite of the next BLIP_GALLERY blip, values used in the native scripts: 143 (ObjectiveBlue), 144 (ObjectiveGreen), 145 (ObjectiveRed), 146 (ObjectiveYellow).
 *
 * Hash: 0x1EAE6DD17B7A5EFA | Since: 323 | API-Set: unknown
 */
export function customMinimapSetBlipObject(spriteId) {
    RaceGalleryNextBlipSprite(spriteId);
}
/**
 * No comment provided
 *
 * Hash: 0xD8E694757BCEA8E9 | Since: 323 | API-Set: unknown
 */
export function deleteWaypointsFromThisPlayer() {
    DeleteWaypoint();
}
/**
 * No comment provided
 *
 * Hash: 0x6D3465A73092F0E6 | Since: 323 | API-Set: unknown
 */
export function disableFrontendThisFrame() {
    DisableFrontendThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x9245E81072704B8A | Since: 323 | API-Set: unknown
 */
export function disablePausemenuSpinner() {
    PauseMenuDisableBusyspinner(false);
}
/**
 * No comment provided
 *
 * Hash: 0xA5E78BA2B1331C55 | Since: 323 | API-Set: unknown
 */
export function displayAmmoThisFrame(display) {
    DisplayAmmoThisFrame(display);
}
/**
 * No comment provided
 *
 * Hash: 0x276B6CE369C33678 | Since: 323 | API-Set: unknown
 */
export function displayAreaName(toggle) {
    DisplayAreaName(toggle);
}
/**
 * "DISPLAY_CASH(false);" makes the cash amount render on the screen when appropriate
 * "DISPLAY_CASH(true);" disables cash amount rendering
 *
 * Hash: 0x96DEC8D5430208B7 | Since: 323 | API-Set: unknown
 */
export function displayCash(toggle) {
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
 * Hash: 0x960C9FF8F616E41C | Since: 323 | API-Set: unknown
 */
export function displayHelpTextThisFrame(message) {
    DisplayHelpTextThisFrame(message, false);
}
/**
 * If Hud should be displayed
 *
 * Hash: 0xA6294919E56FF02A | Since: 323 | API-Set: unknown
 */
export function display(toggle) {
    DisplayHud(toggle);
}
/**
 * Enables drawing some hud components, such as help labels, this frame, when the player is dead.
 *
 * Hash: 0x7669F9E39DC17063 | Since: 323 | API-Set: unknown
 */
export function displayWhenNotInStateOfPlayThisFrame() {
    DisplayHudWhenDeadThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x402F9ED62087E898 | Since: 323 | API-Set: unknown
 */
export function displayWhenPausedThisFrame() {
    DisplayHudWhenPausedThisFrame();
}
/**
 * Toggles whether or not name labels are shown on the expanded minimap next to player blips, like in GTA:O.
 * Doesn't need to be called every frame.
 * Preview: https://i.imgur.com/DfqKWfJ.png
 *
 * Make sure to call SET_BLIP_CATEGORY with index 7 for this to work on the desired blip.
 *
 * Hash: 0x82CEDC33687E1F50 | Since: 323 | API-Set: unknown
 */
export function displayPlayerNameTagsOnBlips(toggle) {
    DisplayPlayerNameTagsOnBlips(toggle);
}
/**
 * If Minimap / Radar should be displayed.
 *
 * Hash: 0xA0EBB943C300E693 | Since: 323 | API-Set: unknown
 */
export function displayRadar(toggle) {
    DisplayRadar(toggle);
}
/**
 * Displays the crosshair for this frame.
 *
 * Hash: 0x73115226F4814E62 | Since: 323 | API-Set: unknown
 */
export function displaySniperScopeThisFrame() {
    DisplaySniperScopeThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0xA6DB27D19ECBB7DA | Since: 323 | API-Set: unknown
 */
export function doesBlipExist(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return DoesBlipExist(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0xDD2238F57B977751 | Since: 323 | API-Set: unknown
 */
export function doesBlipHaveGpsRoute(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return DoesBlipHaveGpsRoute(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0x15B8ECF844EE67ED | Since: 323 | API-Set: unknown
 */
export function doesPedHaveAiBlip(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return DoesPedHaveAiBlip(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x1C7302E725259789 | Since: 323 | API-Set: unknown
 */
export function doesTextBlockExist(gxt) {
    return DoesTextBlockExist(gxt);
}
/**
 * Checks if the passed gxt name exists in the game files.
 *
 * Hash: 0xAC09CA973C564252 | Since: 323 | API-Set: unknown
 */
export function doesTextLabelExist(gxt) {
    return DoesTextLabelExist(gxt);
}
/**
 * When calling this, the current frame will have the players "arrow icon" be focused on the dead center of the radar.
 *
 * Hash: 0x6D14BFDC33B34F55 | Since: 323 | API-Set: unknown
 */
export function dontTiltMinimapThisFrame() {
    DontTiltMinimapThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x89DA85D949CE57A0 | Since: 2802 | API-Set: unknown
 */
export function dontZoomMinimapWhenRunningThisFrame() {
    Citizen.invokeNative('0x89DA85D949CE57A0');
}
/**
 * No comment provided
 *
 * Hash: 0x55F5A5F07134DE60 | Since: 1180 | API-Set: unknown
 */
export function dontZoomMinimapWhenSnipingThisFrame() {
    Citizen.invokeNative('0x55F5A5F07134DE60');
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x211C4EF450086857 | Since: 323 | API-Set: unknown
 */
export function drawFrontendBackgroundThisFrame() {
    Citizen.invokeNative('0x211C4EF450086857');
}
/**
 * No comment provided
 *
 * Hash: 0xBF4F34A85CA2970C | Since: 323 | API-Set: unknown
 */
export function drawOverFadeThisFrame() {
    Citizen.invokeNative('0xBF4F34A85CA2970C');
}
/**
 * No comment provided
 *
 * Hash: 0xCFDBDF5AE59BA0F4 | Since: 323 | API-Set: unknown
 */
export function endTextCommandAddDirectlyToPreviousBriefs() {
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
 * Hash: 0xBD12F8228410D9B4 | Since: 323 | API-Set: unknown
 */
export function endTextCommandBusyspinnerOn(busySpinnerType) {
    EndTextCommandBusyspinnerOn(busySpinnerType);
}
/**
 * No comment provided
 *
 * Hash: 0xFCC75460ABA29378 | Since: 323 | API-Set: unknown
 */
export function endTextCommandClearPrint() {
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
 * Hash: 0x238FFE5C7B0498A6 | Since: 323 | API-Set: unknown
 */
export function endTextCommandDisplayHelp(loop, beep, shape) {
    EndTextCommandDisplayHelp(0, loop, beep, shape);
}
/**
 * `After applying the properties to the text (See HUD::SET_TEXT_), this will draw the text in the applied position. Also 0.0f < x, y < 1.0f, percentage of the axis.`
 *
 * Used to be known as _DRAW_TEXT
 *
 * Hash: 0xCD015E5BB0D96A57 | Since: 323 | API-Set: unknown
 */
export function endTextCommandDisplayText(x, y) {
    EndTextCommandDisplayText(x, y, 0);
}
/**
 * Determines how many lines the text string will use when drawn on screen.
 * Must use 0x521FB041D93DD0E4 for setting up
 *
 * Hash: 0x9040DFB09BE75706 | Since: 323 | API-Set: unknown
 */
export function endTextCommandGetNumberOfLinesForString(x, y) {
    return EndTextCommandLineCount(x, y);
}
/**
 * No comment provided
 *
 * Hash: 0x85F061DA64ED2F67 | Since: 323 | API-Set: unknown
 */
export function endTextCommandGetScreenWidthOfDisplayText() {
    return EndTextCommandGetWidth(false);
}
/**
 * No comment provided
 *
 * Hash: 0x8A9BA1AB3E237613 | Since: 323 | API-Set: unknown
 */
export function endTextCommandIsMessageDisplayed() {
    return EndTextCommandIsMessageDisplayed();
}
/**
 * No comment provided
 *
 * Hash: 0x10BDDBFC529428DD | Since: 323 | API-Set: unknown
 */
export function endTextCommandIsThisHelpMessageBeingDisplayed() {
    return EndTextCommandIsThisHelpMessageBeingDisplayed(0);
}
/**
 * No comment provided
 *
 * Hash: 0xA86911979638106F | Since: 323 | API-Set: unknown
 */
export function endTextCommandOverrideButtonText() {
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
 * Hash: 0x9D77056A530643F6 | Since: 323 | API-Set: unknown
 */
export function endTextCommandPrint(duration, drawImmediately) {
    EndTextCommandPrint(duration, drawImmediately);
}
/**
 * Finalizes a text command started with BEGIN_TEXT_COMMAND_SET_BLIP_NAME, setting the name of the specified blip.
 *
 * Hash: 0xBC38B49BCB83BC9B | Since: 323 | API-Set: unknown
 */
export function endTextCommandSetBlipName(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    EndTextCommandSetBlipName(_blip);
}
/**
 * Shows an "award" notification above the minimap, example: https://i.imgur.com/e2DNaKX.png
 * Example:
 *
 * `HUD::BEGIN_TEXT_COMMAND_THEFEED_POST("HUNT");`
 * `HUD::END_TEXT_COMMAND_THEFEED_POST_AWARD("Hunting", "Hunting_Gold_128", 0, 109, "HUD_MED_UNLKED");`
 *
 * Hash: 0xAA295B6F28BD587D | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostAward(textureDict, textureName, rpBonus, colorOverlay, titleLabel) {
    return EndTextCommandThefeedPostAward(textureDict, textureName, rpBonus, colorOverlay, titleLabel);
}
/**
 * No comment provided
 *
 * Hash: 0x97C9E4E7024A8F2C | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostCrewtag(isLeader, unk0, clanDesc, R, G, B) {
    return EndTextCommandThefeedPostCrewtag(false, false, 0, isLeader, unk0, clanDesc, R, G, B);
}
/**
 * No comment provided
 *
 * Hash: 0x137BC35589E34E1E | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostCrewtagWithGameName(isLeader, unk0, clanDesc, playerName, R, G, B) {
    return EndTextCommandThefeedPostCrewtagWithGameName(false, false, 0, isLeader, unk0, clanDesc, playerName, R, G, B);
}
/**
 * No comment provided
 *
 * Hash: 0x8EFCCF6EC66D85E4 | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostCrewRankupWithLiteralFlag() {
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
 * Hash: 0x1CCD9A37359072CF | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostMessagetext(txdName, textureName, flash, iconType, sender, subject) {
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
 * Hash: 0xC6F580E4C94926AC | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostMessagetextSubtitleLabel(txdName, textureName, flash, iconType, sender, subject) {
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
 * Hash: 0x1E6611149DB3DB6B | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostMessagetextTu(txdName, textureName, flash, iconType, sender, subject, duration) {
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
 * Hash: 0x5CBF7BADE20DB93E | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostMessagetextWithCrewTag(txdName, textureName, flash, iconType, sender, subject, duration, clanTag) {
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
 * Hash: 0x531B84E7DA981FB6 | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(txdName, textureName, flash, iconType1, sender, subject, duration, clanTag, iconType2) {
    return EndTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(txdName, textureName, flash, iconType1, sender, subject, duration, clanTag, iconType2, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF020C96915705B3A | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostMpticker(blink) {
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
 * Hash: 0xD202B92CBF1D816F | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostReplay(_type, image, text) {
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
 * Hash: 0xDD6CB2CCE7C2735C | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostReplayInput(_type, button, text) {
    return EndTextCommandThefeedPostReplayInput(_type, button, text);
}
/**
 * List of picture names: https://pastebin.com/XdpJVbHz
 * Example result: https://i.imgur.com/SdEZ22m.png
 *
 * Hash: 0x2B7E9A4EAAA93C89 | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostStats(statTitle, iconEnum, stepVal, barValue, isImportant, pictureTextureDict, pictureTextureName) {
    return EndTextCommandThefeedPostStats(statTitle, iconEnum, stepVal, barValue, isImportant, pictureTextureDict, pictureTextureName);
}
/**
 * No comment provided
 *
 * Hash: 0x2ED7843F8F801023 | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostTicker(blink) {
    return EndTextCommandThefeedPostTicker(blink, false);
}
/**
 * No comment provided
 *
 * Hash: 0x44FA03975424A0EE | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostTickerForced(blink) {
    return EndTextCommandThefeedPostTickerForced(blink, false);
}
/**
 * No comment provided
 *
 * Hash: 0x378E809BF61EC840 | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostTickerWithTokens(blink) {
    return EndTextCommandThefeedPostTickerWithTokens(blink, false);
}
/**
 * No comment provided
 *
 * Hash: 0x33EE12743CCD6343 | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostUnlock(gxtLabel1, gxtLabel2) {
    return EndTextCommandThefeedPostUnlock(gxtLabel1, 0, gxtLabel2);
}
/**
 * No comment provided
 *
 * Hash: 0xC8F3AAF93D0600BF | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostUnlockTu(gxtLabel1, gxtLabel2) {
    return EndTextCommandThefeedPostUnlockTu(gxtLabel1, 0, gxtLabel2, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x7AE0589093A2E088 | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostUnlockTuWithColor() {
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
 * Hash: 0xB6871B0555B02996 | Since: 323 | API-Set: unknown
 */
export function endTextCommandThefeedPostVersusTu(txdName1, textureName1, count1, txdName2, textureName2, count2, hudColor1, hudColor2) {
    return EndTextCommandThefeedPostVersusTu(txdName1, textureName1, count1, txdName2, textureName2, count2, hudColor1, hudColor2);
}
/**
 * No comment provided
 *
 * Hash: 0xCEF214315D276FD1 | Since: 323 | API-Set: unknown
 */
export function flagPlayerContextInTournament(toggle) {
    FlagPlayerContextInTournament(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x02CFBA0C9E9275CE | Since: 323 | API-Set: unknown
 */
export function flashAbilityBar(millisecondsToFlash) {
    FlashAbilityBar(millisecondsToFlash);
}
/**
 * adds a short flash to the Radar/Minimap
 * Usage: UI.FLASH_MINIMAP_DISPLAY
 *
 * Hash: 0xF2DD778C22B15BDA | Since: 323 | API-Set: unknown
 */
export function flashMinimapDisplay() {
    FlashMinimapDisplay();
}
/**
 * No comment provided
 *
 * Hash: 0x6B1DE27EE78E6A19 | Since: 323 | API-Set: unknown
 */
export function flashMinimapDisplayWithColor(hudColorIndex) {
    FlashMinimapDisplayWithColor(hudColorIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xA18AFB39081B6A1F | Since: 323 | API-Set: unknown
 */
export function flashWantedDisplay() {
    FlashWantedDisplay(false);
}
/**
 * No comment provided
 *
 * Hash: 0xEE4C0E6DBC6F2C6F | Since: 323 | API-Set: unknown
 */
export function forceCloseReportugcMenu() {
    ForceCloseReportugcMenu();
}
/**
 * No comment provided
 *
 * Hash: 0x8817605C2BA76200 | Since: 323 | API-Set: unknown
 */
export function forceCloseTextInputBox() {
    ForceCloseTextInputBox();
}
/**
 * No comment provided
 *
 * Hash: 0x57D760D55F54E071 | Since: 323 | API-Set: unknown
 */
export function forceNextMessageToPreviousBriefsList() {
    Citizen.invokeNative('0x57D760D55F54E071', 0);
}
/**
 * No comment provided
 *
 * Hash: 0xBA8D65C1C65702E5 | Since: 323 | API-Set: unknown
 */
export function forceOffWantedStarFlash(toggle) {
    Citizen.invokeNative('0xBA8D65C1C65702E5', toggle);
}
/**
 * Not present in retail version of the game, actual definiton seems to be
 * _LOG_DEBUG_INFO(const char* category, const char* debugText);
 *
 * Hash: 0x2162C446DFDF38FD | Since: 323 | API-Set: unknown
 */
export function forceScriptedGfxWhenFrontendActive() {
    LogDebugInfo(undefined);
}
/**
 * Doesn't actually return anything.
 *
 * Hash: 0x1121BFA1A1A522A8 | Since: 323 | API-Set: unknown
 */
export function forceSonarBlipsThisFrame() {
    return ForceSonarBlipsThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x7CD934010E115C2C | Since: 323 | API-Set: unknown
 */
export function getAiPedPedBlipIndex(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAiBlip2(_ped);
}
/**
 * Returns the current AI BLIP for the specified ped
 *
 * Hash: 0x56176892826A4FE8 | Since: 323 | API-Set: unknown
 */
export function getAiPedVehicleBlipIndex(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAiBlip(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x970F608F0EE6C885 | Since: 323 | API-Set: unknown
 */
export function getBlipAlpha(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return GetBlipAlpha(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0xDF729E8D20CF7327 | Since: 323 | API-Set: unknown
 */
export function getBlipColour(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return GetBlipColour(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0x586AFE3FF72D996E | Since: 323 | API-Set: unknown
 */
export function getBlipCoords(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return new Vector3(GetBlipCoords(_blip));
}
/**
 * Returns -1, 0, +1, depending on if the blip is fading out, doing nothing, or fading in respectively.
 *
 * Hash: 0x2C173AE2BDB9385E | Since: 463 | API-Set: unknown
 */
export function getBlipFadeDirection(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return Citizen.invokeNative('0x2C173AE2BDB9385E', _blip);
}
/**
 * Returns the Blip handle of given Entity.
 *
 * Hash: 0xBC8DBDCA2436F7E8 | Since: 323 | API-Set: unknown
 */
export function getBlipFromEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetBlipFromEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x729B5F1EFBC0AAEE | Since: 323 | API-Set: unknown
 */
export function getBlipHudColour(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return GetBlipHudColour(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0xFA7C7F0AADF25D09 | Since: 323 | API-Set: unknown
 */
export function getBlipInfoIdCoord(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return new Vector3(GetBlipInfoIdCoord(_blip));
}
/**
 * No comment provided
 *
 * Hash: 0x1E314167F701DC3B | Since: 323 | API-Set: unknown
 */
export function getBlipInfoIdDisplay(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return GetBlipInfoIdDisplay(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0x4BA4E2553AFEDC2C | Since: 323 | API-Set: unknown
 */
export function getBlipInfoIdEntityIndex(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return GetBlipInfoIdEntityIndex(_blip);
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x9B6786E4C03DD382 | Since: 323 | API-Set: unknown
 */
export function getBlipInfoIdPickupIndex(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
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
 * Hash: 0xBE9B0959FFD0779B | Since: 323 | API-Set: unknown
 */
export function getBlipInfoIdType(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return GetBlipInfoIdType(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0x003E92BA477F9D7F | Since: 2060 | API-Set: unknown
 */
export function getBlipRotation(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return GetBlipRotation(_blip);
}
/**
 * Blips Images + IDs:
 * gtaxscripting.blogspot.com/2016/05/gta-v-blips-id-and-image.html
 *
 * Hash: 0x1FC877464A04FC4F | Since: 323 | API-Set: unknown
 */
export function getBlipSprite(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return GetBlipSprite(_blip);
}
/**
 * Returns a substring of a specified length starting at a specified position.
 *
 * Example:
 * // Get "STRING" text from "MY_STRING"
 * `subStr = HUD::GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME("MY_STRING", 3, 6);`
 *
 * Hash: 0x169BD9382084C8C0 | Since: 323 | API-Set: unknown
 */
export function getCharacterFromAudioConversationFilename(text, position, length) {
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
 * Hash: 0xCE94AEBA5D82908A | Since: 323 | API-Set: unknown
 */
export function getCharacterFromAudioConversationFilenameBytes(text, startPosition, endPosition) {
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
 * Hash: 0xB2798643312205C5 | Since: 323 | API-Set: unknown
 */
export function getCharacterFromAudioConversationFilenameWithByteLimit(text, position, length, maxLength) {
    return GetTextSubstringSafe(text, position, length, maxLength);
}
/**
 * No comment provided
 *
 * Hash: 0x8F08017F9D7C47BD | Since: 323 | API-Set: unknown
 */
export function getCharacterMenuPedFloatStat(statHash) {
    return Citizen.invokeNative('0x8F08017F9D7C47BD', statHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0xCA6B2F7CE32AB653 | Since: 323 | API-Set: unknown
 */
export function getCharacterMenuPedIntStat() {
    return Citizen.invokeNative('0xCA6B2F7CE32AB653', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x24A49BEAF468DC90 | Since: 323 | API-Set: unknown
 */
export function getCharacterMenuPedMaskedIntStat(statHash, mask) {
    if (typeof statHash === 'string')
        statHash = GetHashKey(statHash);
    return Citizen.invokeNative('0x24A49BEAF468DC90', statHash, 0, mask, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD484BF71050CA1EE | Since: 1180 | API-Set: unknown
 */
export function getClosestBlipInfoId(blipSprite) {
    return GetClosestBlipOfType(blipSprite);
}
/**
 * `if (HUD::GET_CURRENT_FRONTEND_MENU_VERSION() == joaat("fe_menu_version_empty_no_background"))`
 *
 * Hash: 0x2309595AD6145265 | Since: 323 | API-Set: unknown
 */
export function getCurrentFrontendMenuVersion() {
    return GetCurrentFrontendMenuVersion();
}
/**
 * No comment provided
 *
 * Hash: 0x01A358D9128B7A86 | Since: 323 | API-Set: unknown
 */
export function getCurrentWebpageId() {
    return GetCurrentWebpageId();
}
/**
 * No comment provided
 *
 * Hash: 0x97D47996FC48CBAD | Since: 323 | API-Set: unknown
 */
export function getCurrentWebsiteId() {
    return GetCurrentWebsiteId();
}
/**
 * This function is hard-coded to always return 1.
 *
 * Hash: 0x52F0982D7FD156B6 | Since: 323 | API-Set: unknown
 */
export function getDefaultScriptRendertargetRenderId() {
    return GetDefaultScriptRendertargetRenderId();
}
/**
 * Getter for SET_FAKE_SPECTATOR_MODE
 *
 * Hash: 0xC2D2AD9EAAE265B8 | Since: 505 | API-Set: unknown
 */
export function getFakeSpectatorMode() {
    return Citizen.invokeNative('0xC2D2AD9EAAE265B8');
}
/**
 * `Gets a localized string literal from a label name. Can be used for output of e.g. VEHICLE::GET_LIVERY_NAME. To check if a GXT label can be localized with this, HUD::DOES_TEXT_LABEL_EXIST can be used.`
 *
 * Hash: 0x7B5280EBA9840C72 | Since: 323 | API-Set: unknown
 */
export function getFilenameForAudioConversation(labelName) {
    return GetFilenameForAudioConversation(labelName);
}
/**
 * No comment provided
 *
 * Hash: 0x1BEDE233E6CD2A1F | Since: 323 | API-Set: unknown
 */
export function getFirstBlipInfoId(blipSprite) {
    return GetFirstBlipInfoId(blipSprite);
}
/**
 * No comment provided
 *
 * Hash: 0x98C3CF913D895111 | Since: 505 | API-Set: unknown
 */
export function getFirstNCharactersOfLiteralString(_string, length) {
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
 * Hash: 0xE3B05614DCE1D014 | Since: 323 | API-Set: unknown
 */
export function getGlobalActionscriptFlag(flagIndex) {
    return GetGlobalActionscriptFlag(flagIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x7C9C91AB74A0360F | Since: 323 | API-Set: unknown
 */
export function getColour(hudColorIndex) {
    return GetHudColour(hudColorIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x223CA69A8C4417FD | Since: 323 | API-Set: unknown
 */
export function getComponentPosition(id) {
    return new Vector3(GetHudComponentPosition(id));
}
/**
 * World to relative screen coords, this world to screen will keep the text on screen. Was named _GET_SCREEN_COORD_FROM_WORLD_COORD, but this conflicts with 0x34E82F05DF2974F5. As that hash actually matches GET_SCREEN_COORD_FROM_WORLD_COORD that one supercedes and this one was renamed to _GET_2D_COORD_FROM_3D_COORD
 *
 * Hash: 0xF9904D11F1ACBEC3 | Since: 323 | API-Set: unknown
 */
export function getScreenPositionFromWorldPosition(worldPos) {
    return GetHudScreenPositionFromWorldPosition(worldPos.x, worldPos.y, worldPos.z);
}
/**
 * Returns the length of the string passed (much like strlen).
 *
 * Hash: 0xF030907CCBB8A9FD | Since: 323 | API-Set: unknown
 */
export function getLengthOfLiteralString(_string) {
    return GetLengthOfLiteralString(_string);
}
/**
 * No comment provided
 *
 * Hash: 0x43E4111189E54F0E | Since: 323 | API-Set: unknown
 */
export function getLengthOfLiteralStringInBytes(_string) {
    return GetLengthOfLiteralStringInBytes(_string);
}
/**
 * Returns the string length of the string from the gxt string .
 *
 * Hash: 0x801BD273D3A23F74 | Since: 323 | API-Set: unknown
 */
export function getLengthOfStringWithThisTextLabel(gxt) {
    return GetLengthOfStringWithThisTextLabel(gxt);
}
/**
 * No comment provided
 *
 * Hash: 0xDCD4EC3F419D02FA | Since: 323 | API-Set: unknown
 */
export function getMainPlayerBlipId() {
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
 * Hash: 0x7E17BE53E1AAABAF | Since: 323 | API-Set: unknown
 */
export function getMenuLayoutChangedEventDetails() {
    return GetPauseMenuSelectionData();
}
/**
 * p0 was always 0xAE2602A3.
 *
 * Hash: 0x052991E59076E4E4 | Since: 323 | API-Set: unknown
 */
export function getMenuPedBoolStat(statHash) {
    if (typeof statHash === 'string')
        statHash = GetHashKey(statHash);
    return GetMenuPedBoolStat(statHash);
}
/**
 * No comment provided
 *
 * Hash: 0x5FBD7095FE7AE57F | Since: 323 | API-Set: unknown
 */
export function getMenuPedFloatStat(statHash) {
    if (typeof statHash === 'string')
        statHash = GetHashKey(statHash);
    return GetMenuPedFloatStat(statHash);
}
/**
 * No comment provided
 *
 * Hash: 0xEF4CED81CEBEDC6D | Since: 323 | API-Set: unknown
 */
export function getMenuPedIntStat() {
    return GetMenuPedIntStat(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x90A6526CF0381030 | Since: 323 | API-Set: unknown
 */
export function getMenuPedMaskedIntStat(statHash, mask) {
    if (typeof statHash === 'string')
        statHash = GetHashKey(statHash);
    return GetMenuPedMaskedIntStat(statHash, mask, false);
}
/**
 * No comment provided
 *
 * Hash: 0x36C1451A88A09630 | Since: 323 | API-Set: unknown
 */
export function getMenuTriggerEventDetails() {
    return GetPauseMenuSelection();
}
/**
 * No comment provided
 *
 * Hash: 0x6E31B91145873922 | Since: 323 | API-Set: unknown
 */
export function getMinimapFowCoordinateIsRevealed(pos) {
    return GetMinimapFowCoordinateIsRevealed(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xE0130B41D3CF4574 | Since: 323 | API-Set: unknown
 */
export function getMinimapFowDiscoveryRatio() {
    return GetMinimapFowDiscoveryRatio();
}
/**
 * No comment provided
 *
 * Hash: 0x632B2940C67F4EA9 | Since: 323 | API-Set: unknown
 */
export function getMouseEvent(scaleformHandle) {
    return GetScaleformMovieCursorSelection(scaleformHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x1A6478B61C6BDC3B | Since: 323 | API-Set: unknown
 */
export function getNamedRendertargetRenderId(name) {
    return GetNamedRendertargetRenderId(name);
}
/**
 * No comment provided
 *
 * Hash: 0x5C90988E7C8E1AF4 | Since: 323 | API-Set: unknown
 */
export function getNewSelectedMissionCreatorBlip() {
    return GetNewSelectedMissionCreatorBlip();
}
/**
 * No comment provided
 *
 * Hash: 0x14F96AA50D6FBEA7 | Since: 323 | API-Set: unknown
 */
export function getNextBlipInfoId(blipSprite) {
    return GetNextBlipInfoId(blipSprite);
}
/**
 * No comment provided
 *
 * Hash: 0x3F0CF9CB7E589B88 | Since: 463 | API-Set: unknown
 */
export function getNorthBlidIndex() {
    return GetNorthRadarBlip();
}
/**
 * No comment provided
 *
 * Hash: 0x9A3FF3DE163034E8 | Since: 323 | API-Set: unknown
 */
export function getNumberOfActiveBlips() {
    return GetNumberOfActiveBlips();
}
/**
 * No comment provided
 *
 * Hash: 0x5BFF36D6ED83E0AE | Since: 323 | API-Set: unknown
 */
export function getPauseMenuPosition() {
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
 * Hash: 0x272ACD84970869C5 | Since: 323 | API-Set: unknown
 */
export function getPauseMenuState() {
    return GetPauseMenuState();
}
/**
 * No comment provided
 *
 * Hash: 0xA238192F33110615 | Since: 323 | API-Set: unknown
 */
export function getPmPlayerCrewColor() {
    return Citizen.invokeNative('0xA238192F33110615');
}
/**
 * This gets the height of the FONT and not the total text. You need to get the number of lines your text uses, and get the height of a newline (I'm using a smaller value) to get the total text height.
 *
 * Hash: 0xDB88A37483346780 | Since: 323 | API-Set: unknown
 */
export function getRenderedCharacterHeight(size, font) {
    return GetRenderedCharacterHeight(size, font);
}
/**
 * No comment provided
 *
 * Hash: 0x593FEAE1F73392D4 | Since: 323 | API-Set: unknown
 */
export function getScreenCodeWantsScriptToControl() {
    return Citizen.invokeNative('0x593FEAE1F73392D4');
}
/**
 * No comment provided
 *
 * Hash: 0x4A9923385BDB9DAD | Since: 323 | API-Set: unknown
 */
export function getStandardBlipEnumId() {
    return GetStandardBlipEnumId();
}
/**
 * This functions converts the hash of a street name into a readable string.
 *
 * `For how to get the hashes, see PATHFIND::GET_STREET_NAME_AT_COORD.`
 *
 * Hash: 0xD0EF8A959B8A4CB9 | Since: 323 | API-Set: unknown
 */
export function getStreetNameFromHashKey(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return GetStreetNameFromHashKey(hash);
}
/**
 * Has to do with the confirmation overlay (E.g. confirm exit)
 *
 * Hash: 0x81DF9ABA6C83DFF9 | Since: 1290 | API-Set: unknown
 */
export function getWarningScreenMessageHash() {
    return GetWarningMessageTitleHash();
}
/**
 * No comment provided
 *
 * Hash: 0x186E5D252FA50E7D | Since: 323 | API-Set: unknown
 */
export function getWaypointBlipEnumId() {
    return GetWaypointBlipEnumId();
}
/**
 * No comment provided
 *
 * Hash: 0xF46851AB8B02EF40 | Since: 3717 | API-Set: unknown
 */
export function getWaypointClearOnArrivalMode() {
    return Citizen.invokeNative('0xF46851AB8B02EF40');
}
/**
 * p1 is either 1 or 2 in the PC scripts.
 *
 * Hash: 0xAC0BFBDC3BE00E14 | Since: 323 | API-Set: unknown
 */
export function givePedToPauseMenu(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    GivePedToPauseMenu(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x02245FE4BED318B8 | Since: 323 | API-Set: unknown
 */
export function hasAdditionalTextLoaded(slot) {
    return HasAdditionalTextLoaded(slot);
}
/**
 * No comment provided
 *
 * Hash: 0xA277800A9EAE340E | Since: 323 | API-Set: unknown
 */
export function hasDirectorModeBeenLaunchedByCode() {
    return HasDirectorModeBeenTriggered();
}
/**
 * No comment provided
 *
 * Hash: 0x2E22FEFA0100275E | Since: 323 | API-Set: unknown
 */
export function hasMenuLayoutChangedEventOccurred() {
    return Citizen.invokeNative('0x2E22FEFA0100275E');
}
/**
 * No comment provided
 *
 * Hash: 0xF284AC67940C6812 | Since: 323 | API-Set: unknown
 */
export function hasMenuTriggerEventOccurred() {
    return Citizen.invokeNative('0xF284AC67940C6812');
}
/**
 * No comment provided
 *
 * Hash: 0x214CD562A939246A | Since: 323 | API-Set: unknown
 */
export function hasScriptHiddenHelpThisFrame() {
    return Citizen.invokeNative('0x214CD562A939246A');
}
/**
 * Checks if the specified gxt has loaded into the passed slot.
 *
 * Hash: 0xADBF060E2B30C5BC | Since: 323 | API-Set: unknown
 */
export function hasThisAdditionalTextLoaded(gxt, slot) {
    return HasThisAdditionalTextLoaded(gxt, slot);
}
/**
 * No comment provided
 *
 * Hash: 0xD46923FC481CA285 | Since: 323 | API-Set: unknown
 */
export function hideHelpTextThisFrame() {
    HideHelpTextThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x243296A510B562B6 | Since: 2060 | API-Set: unknown
 */
export function hidemarkersThisFrame() {
    Citizen.invokeNative('0x243296A510B562B6');
}
/**
 * Hides HUD and radar this frame and prohibits switching to other weapons (or accessing the weapon wheel)
 *
 * Hash: 0x719FF505F097FD20 | Since: 323 | API-Set: unknown
 */
export function hideAndRadarThisFrame() {
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
 * Hash: 0x6806C51AD12B83B8 | Since: 323 | API-Set: unknown
 */
export function hideComponentThisFrame(id) {
    HideHudComponentThisFrame(id);
}
/**
 * No comment provided
 *
 * Hash: 0x4B0311D3CDC4648F | Since: 323 | API-Set: unknown
 */
export function hideLoadingOnFadeThisFrame() {
    HideLoadingOnFadeThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x5FBAE526203990C9 | Since: 323 | API-Set: unknown
 */
export function hideMinimapExteriorMapThisFrame() {
    HideMinimapExteriorMapThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x20FE7FDFEEAD38C0 | Since: 323 | API-Set: unknown
 */
export function hideMinimapInteriorMapThisFrame() {
    HideMinimapInteriorMapThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x532CFF637EF80148 | Since: 323 | API-Set: unknown
 */
export function hideNumberOnBlip(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    HideNumberOnBlip(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0xE374C498D8BADC14 | Since: 323 | API-Set: unknown
 */
export function hideScriptedComponentThisFrame(id) {
    HideScriptedHudComponentThisFrame(id);
}
/**
 * Hides area and vehicle name HUD components for one frame.
 *
 * Hash: 0xA4DEDE28B1814289 | Since: 323 | API-Set: unknown
 */
export function hideStreetAndCarNamesThisFrame() {
    HideAreaAndVehicleNameThisFrame();
}
/**
 * Displays "blazer_wheels_up" and "blazer_wheels_down" "weapon" icons when switching between jetski and quadbike modes. Works only on vehicles using "VEHICLE_TYPE_AMPHIBIOUS_QUADBIKE" vehicle type. Needs to be called every time prior to switching modes, otherwise the icon will only appear when switching modes once.
 *
 * Hash: 0x488043841BBE156F | Since: 1011 | API-Set: unknown
 */
export function forceSpecialVehicleWeaponWheel() {
    HudDisplayLoadingScreenTips();
}
/**
 * Forces the weapon wheel to show/hide.
 *
 * Hash: 0xEB354E5376BC81A7 | Since: 323 | API-Set: unknown
 */
export function forceWeaponWheel(show) {
    HudForceWeaponWheel(show);
}
/**
 * Returns the weapon hash to the selected/highlighted weapon in the wheel
 *
 * Hash: 0xA48931185F0536FE | Since: 323 | API-Set: unknown
 */
export function getWeaponWheelCurrentlyHighlighted() {
    return HudWeaponWheelGetSelectedHash();
}
/**
 * Returns the weapon hash active in a specific weapon wheel slotList
 *
 * Hash: 0xA13E93403F26C812 | Since: 323 | API-Set: unknown
 */
export function getWeaponWheelTopSlot(weaponTypeIndex) {
    return HudWeaponWheelGetSlotHash(weaponTypeIndex);
}
/**
 * Set the active slotIndex in the wheel weapon to the slot associated with the provided Weapon hash
 *
 * Hash: 0x72C1056D678BB7D8 | Since: 323 | API-Set: unknown
 */
export function setWeaponWheelTopSlot(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    HudSetWeaponWheelTopSlot(weaponHash);
}
/**
 * Sets a global that disables many weapon input tasks (shooting, aiming, etc.). Does not work with vehicle weapons, only used in selector.ysc
 *
 * Hash: 0x14C9FDCC41F81F63 | Since: 323 | API-Set: unknown
 */
export function showingCharacterSwitchSelection(toggle) {
    HudWeaponWheelIgnoreControlInput(toggle);
}
/**
 * Calling this each frame, stops the player from receiving a weapon via the weapon wheel.
 *
 * Hash: 0x0AFC4AF510774B47 | Since: 323 | API-Set: unknown
 */
export function suppressWeaponWheelResultsThisFrame() {
    HudWeaponWheelIgnoreSelection();
}
/**
 * No comment provided
 *
 * Hash: 0xA5E41FD83AD6CEF0 | Since: 323 | API-Set: unknown
 */
export function isBlipFlashing(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return IsBlipFlashing(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0xE41CA53051197A27 | Since: 323 | API-Set: unknown
 */
export function isBlipOnMinimap(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return IsBlipOnMinimap(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0xDA5F8727EB75B926 | Since: 323 | API-Set: unknown
 */
export function isBlipShortRange(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return IsBlipShortRange(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0x2432784ACA090DA4 | Since: 323 | API-Set: unknown
 */
export function isFloatingHelpTextOnScreen(hudIndex) {
    return IsFloatingHelpTextOnScreen(hudIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x3BAB9A4E4F2FF5C7 | Since: 323 | API-Set: unknown
 */
export function isFrontendReadyForControl() {
    return IsFrontendReadyForControl();
}
/**
 * No comment provided
 *
 * Hash: 0x4D79439A6B55AC67 | Since: 323 | API-Set: unknown
 */
export function isHelpMessageBeingDisplayed() {
    return IsHelpMessageBeingDisplayed();
}
/**
 * No comment provided
 *
 * Hash: 0x327EDEEEAC55C369 | Since: 323 | API-Set: unknown
 */
export function isHelpMessageFadingOut() {
    return IsHelpMessageFadingOut();
}
/**
 * No comment provided
 *
 * Hash: 0xDAD37F45428801AE | Since: 323 | API-Set: unknown
 */
export function isHelpMessageOnScreen() {
    return IsHelpMessageOnScreen();
}
/**
 * No comment provided
 *
 * Hash: 0x4167EFE0527D706E | Since: 323 | API-Set: unknown
 */
export function isHoveringOverMissionCreatorBlip() {
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
 * Hash: 0xBC4C9EA5391ECC0D | Since: 323 | API-Set: unknown
 */
export function isComponentActive(id) {
    return IsHudComponentActive(id);
}
/**
 * No comment provided
 *
 * Hash: 0x8EDC335C943465C8 | Since: 3717 | API-Set: unknown
 */
export function isComponentHiddenThisFrame(id) {
    return Citizen.invokeNative('0x8EDC335C943465C8', id);
}
/**
 * No comment provided
 *
 * Hash: 0xA86478C6958735C5 | Since: 323 | API-Set: unknown
 */
export function isHidden() {
    return IsHudHidden();
}
/**
 * No comment provided
 *
 * Hash: 0x1930DFA731813EC4 | Since: 323 | API-Set: unknown
 */
export function isPreferenceSwitchedOn() {
    return IsHudPreferenceSwitchedOn();
}
/**
 * No comment provided
 *
 * Hash: 0x801879A9B4F4B2FB | Since: 372 | API-Set: unknown
 */
export function isImeInProgress() {
    return Citizen.invokeNative('0x801879A9B4F4B2FB');
}
/**
 * No comment provided
 *
 * Hash: 0x7984C03AA5CC2F41 | Since: 323 | API-Set: unknown
 */
export function isMessageBeingDisplayed() {
    return IsMessageBeingDisplayed();
}
/**
 * No comment provided
 *
 * Hash: 0xAF754F20EB5CD51A | Since: 323 | API-Set: unknown
 */
export function isMinimapRendering() {
    return IsMinimapRendering();
}
/**
 * No comment provided
 *
 * Hash: 0x26F49BF3381D933D | Since: 323 | API-Set: unknown
 */
export function isMissionCreatorBlip(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return IsMissionCreatorBlip(_blip);
}
/**
 * Returns TRUE if mouse is hovering above instructional buttons. Works with all buttons gfx, such as popup_warning, pause_menu_instructional_buttons, instructional_buttons, etc. Note: You have to call TOGGLE_MOUSE_BUTTONS on the scaleform if you want this native to work.
 *
 * Hash: 0x3D9ACB1EB139E702 | Since: 323 | API-Set: unknown
 */
export function isMouseRolledOverInstructionalButtons() {
    return IsMouseRolledOverInstructionalButtons();
}
/**
 * No comment provided
 *
 * Hash: 0x4E929E7A5796FD26 | Since: 323 | API-Set: unknown
 */
export function isMpGamerTagActive(gamerTagId) {
    return IsMpGamerTagActive(gamerTagId);
}
/**
 * No comment provided
 *
 * Hash: 0x595B5178E412E199 | Since: 323 | API-Set: unknown
 */
export function isMpGamerTagFree(gamerTagId) {
    return IsMpGamerTagFree(gamerTagId);
}
/**
 * No comment provided
 *
 * Hash: 0x6E0EB3EB47C8D7AA | Since: 323 | API-Set: unknown
 */
export function isMpGamerTagMovieActive() {
    return IsMpGamerTagMovieActive();
}
/**
 * Returns whether or not the text chat (MULTIPLAYER_CHAT Scaleform component) is active.
 *
 * Hash: 0xB118AF58B5F332A1 | Since: 323 | API-Set: unknown
 */
export function isMpTextChatTyping() {
    return IsMultiplayerChatActive();
}
/**
 * No comment provided
 *
 * Hash: 0x113750538FA31298 | Since: 323 | API-Set: unknown
 */
export function isNamedRendertargetLinked(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return IsNamedRendertargetLinked(modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x78DCDC15C9F116B4 | Since: 323 | API-Set: unknown
 */
export function isNamedRendertargetRegistered(name) {
    return IsNamedRendertargetRegistered(name);
}
/**
 * No comment provided
 *
 * Hash: 0x4E3CD0EF8A489541 | Since: 323 | API-Set: unknown
 */
export function isNavigatingMenuContent() {
    return IsNavigatingMenuContent();
}
/**
 * Returns the same as IS_SOCIAL_CLUB_ACTIVE
 *
 * Hash: 0x6F72CD94F7B5B68C | Since: 323 | API-Set: unknown
 */
export function isOnlinePoliciesMenuActive() {
    return IsOnlinePoliciesMenuActive();
}
/**
 * No comment provided
 *
 * Hash: 0x9049FE339D5F6F6F | Since: 323 | API-Set: unknown
 */
export function isPausemapInInteriorMode() {
    return IsPausemapInInteriorMode();
}
/**
 * No comment provided
 *
 * Hash: 0xB0034A223497FFCB | Since: 323 | API-Set: unknown
 */
export function isPauseMenuActive() {
    return IsPauseMenuActive();
}
/**
 * No comment provided
 *
 * Hash: 0x1C491717107431C7 | Since: 323 | API-Set: unknown
 */
export function isPauseMenuRestarting() {
    return IsPauseMenuRestarting();
}
/**
 * No comment provided
 *
 * Hash: 0x157F93B036700462 | Since: 323 | API-Set: unknown
 */
export function isRadarHidden() {
    return IsRadarHidden();
}
/**
 * No comment provided
 *
 * Hash: 0x9EB6522EA68F22FE | Since: 323 | API-Set: unknown
 */
export function isRadarPreferenceSwitchedOn() {
    return IsRadarPreferenceSwitchedOn();
}
/**
 * No comment provided
 *
 * Hash: 0x9135584D09A3437E | Since: 323 | API-Set: unknown
 */
export function isReportugcMenuOpen() {
    return IsReportugcMenuOpen();
}
/**
 * No comment provided
 *
 * Hash: 0xDD100EB17A94FF65 | Since: 323 | API-Set: unknown
 */
export function isScriptedComponentActive(id) {
    return IsScriptedHudComponentActive(id);
}
/**
 * No comment provided
 *
 * Hash: 0x09C0403ED9A751C2 | Since: 323 | API-Set: unknown
 */
export function isScriptedComponentHiddenThisFrame(id) {
    return IsScriptedHudComponentHiddenThisFrame(id);
}
/**
 * No comment provided
 *
 * Hash: 0xC406BE343FC4B9AF | Since: 323 | API-Set: unknown
 */
export function isSocialClubActive() {
    return IsSocialClubActive();
}
/**
 * No comment provided
 *
 * Hash: 0x2F057596F2BD0061 | Since: 323 | API-Set: unknown
 */
export function isStorePendingNetworkShutdownToOpen() {
    return Citizen.invokeNative('0x2F057596F2BD0061');
}
/**
 * No comment provided
 *
 * Hash: 0x8B6817B71B85EBF0 | Since: 323 | API-Set: unknown
 */
export function isStreamingAdditionalText() {
    return IsStreamingAdditionalText(0);
}
/**
 * No comment provided
 *
 * Hash: 0xAD6DACA4BA53E0A4 | Since: 323 | API-Set: unknown
 */
export function isSubtitlePreferenceSwitchedOn() {
    return IsSubtitlePreferenceSwitchedOn();
}
/**
 * No comment provided
 *
 * Hash: 0xEB709A36958ABE0D | Since: 323 | API-Set: unknown
 */
export function isUpdatingMpGamerTagNameAndCrewDetails(gamerTagId) {
    return IsValidMpGamerTagMovie(gamerTagId);
}
/**
 * No comment provided
 *
 * Hash: 0xE18B138FABC53103 | Since: 323 | API-Set: unknown
 */
export function isWarningMessageActive() {
    return IsWarningMessageActive();
}
/**
 * No comment provided
 *
 * Hash: 0xAF42195A42C63BBA | Since: 323 | API-Set: unknown
 */
export function isWarningMessageReadyForControl() {
    return IsWarningMessageActive2();
}
/**
 * No comment provided
 *
 * Hash: 0x1DD1F58F493F1DA5 | Since: 323 | API-Set: unknown
 */
export function isWaypointActive() {
    return IsWaypointActive();
}
/**
 * No comment provided
 *
 * Hash: 0xF6C09E276AEB3F2D | Since: 323 | API-Set: unknown
 */
export function linkNamedRendertarget(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    LinkNamedRendertarget(modelHash);
}
/**
 * Locks the minimap to the specified angle in integer degrees.
 *
 * angle: The angle in whole degrees. If less than 0 or greater than 360, unlocks the angle.
 *
 * Hash: 0x299FAEBB108AE05B | Since: 323 | API-Set: unknown
 */
export function lockMinimapAngle(angle) {
    LockMinimapAngle(angle);
}
/**
 * Locks the minimap to the specified world position.
 *
 * Hash: 0x1279E861A329E73F | Since: 323 | API-Set: unknown
 */
export function lockMinimapPosition(x, y) {
    LockMinimapPosition(x, y);
}
/**
 * Hides the chat history, closes the input box and makes it unable to be opened unless called again with FALSE.
 *
 * Hash: 0x1DB21A44B09E8BA3 | Since: 323 | API-Set: unknown
 */
export function mpTextChatDisable(toggle) {
    DisableMultiplayerChat(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x7C226D5346D4D10A | Since: 372 | API-Set: unknown
 */
export function mpTextChatIsTeamJob() {
    Citizen.invokeNative('0x7C226D5346D4D10A', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x805D7CBB36FD6C4C | Since: 323 | API-Set: unknown
 */
export function openOnlinePoliciesMenu() {
    OpenOnlinePoliciesMenu();
}
/**
 * Shows a menu for reporting UGC content.
 *
 * Hash: 0x523A590C1A3CC0D3 | Since: 323 | API-Set: unknown
 */
export function openReportugcMenu() {
    OpenReportugcMenu();
}
/**
 * Uses the `SOCIAL_CLUB2` scaleform.
 * menu: GALLERY, MISSIONS, CREWS, MIGRATE, PLAYLISTS, JOBS
 *
 * Hash: 0x75D3691713C3B05A | Since: 323 | API-Set: unknown
 */
export function openSocialClubMenu(menu) {
    if (typeof menu === 'string')
        menu = GetHashKey(menu);
    OpenSocialClubMenu(menu);
}
/**
 * No comment provided
 *
 * Hash: 0xF47E567B3630DD12 | Since: 678 | API-Set: unknown
 */
export function overrideMpTextChatColor(hudColor) {
    OverrideMultiplayerChatColour(0, hudColor);
}
/**
 * No comment provided
 *
 * Hash: 0x6A1738B4323FE2D9 | Since: 573 | API-Set: unknown
 */
export function overrideMpTextChatTeamString(gxtEntryHash) {
    if (typeof gxtEntryHash === 'string')
        gxtEntryHash = GetHashKey(gxtEntryHash);
    OverrideMultiplayerChatPrefix(gxtEntryHash);
}
/**
 * No comment provided
 *
 * Hash: 0x77F16B447824DA6C | Since: 323 | API-Set: unknown
 */
export function pauseMenuceptionGoDeeper(page) {
    PauseMenuceptionGoDeeper(page);
}
/**
 * No comment provided
 *
 * Hash: 0xCDCA26E80FAECB8F | Since: 323 | API-Set: unknown
 */
export function pauseMenuceptionTheKick() {
    PauseMenuceptionTheKick();
}
/**
 * Activates the specified frontend menu context.
 * pausemenu.xml defines some specific menu options using 'context'. Context is basically a 'condition'.
 * The `*ALL*` part of the context means that whatever is being defined, will be active when any or all of those conditions after `*ALL*` are met.
 * The `*NONE*` part of the context section means that whatever is being defined, will NOT be active if any or all of the conditions after `*NONE*` are met.
 * This basically allows you to hide certain menu sections, or things like instructional buttons.
 *
 * Hash: 0xDD564BDD0472C936 | Since: 323 | API-Set: unknown
 */
export function pauseMenuActivateContext(contextHash) {
    if (typeof contextHash === 'string')
        contextHash = GetHashKey(contextHash);
    PauseMenuActivateContext(contextHash);
}
/**
 * No comment provided
 *
 * Hash: 0x444D8CF241EC25C5 | Since: 323 | API-Set: unknown
 */
export function pauseMenuDeactivateContext(contextHash) {
    if (typeof contextHash === 'string')
        contextHash = GetHashKey(contextHash);
    PauseMenuDeactivateContext(contextHash);
}
/**
 * No comment provided
 *
 * Hash: 0xDE03620F8703A9DF | Since: 323 | API-Set: unknown
 */
export function pauseMenuGetHairColourIndex() {
    return Citizen.invokeNative('0xDE03620F8703A9DF');
}
/**
 * No comment provided
 *
 * Hash: 0xC8E1071177A23BE5 | Since: 323 | API-Set: unknown
 */
export function pauseMenuGetMouseClickEvent() {
    return Citizen.invokeNative('0xC8E1071177A23BE5');
}
/**
 * No comment provided
 *
 * Hash: 0x359AF31A4B52F5ED | Since: 323 | API-Set: unknown
 */
export function pauseMenuGetMouseHoverIndex() {
    return PauseMenuGetIndexOfMouseHoveredSlot();
}
/**
 * No comment provided
 *
 * Hash: 0x13C4B962653A5280 | Since: 323 | API-Set: unknown
 */
export function pauseMenuGetMouseHoverUniqueId() {
    return PauseMenuGetUniqueIdOfMouseHoveredSlot();
}
/**
 * No comment provided
 *
 * Hash: 0x84698AB38D0C6636 | Since: 323 | API-Set: unknown
 */
export function pauseMenuIsContextActive(contextHash) {
    if (typeof contextHash === 'string')
        contextHash = GetHashKey(contextHash);
    return PauseMenuIsContextActive(contextHash);
}
/**
 * No comment provided
 *
 * Hash: 0x2A25ADC48F87841F | Since: 323 | API-Set: unknown
 */
export function pauseMenuIsContextMenuActive() {
    return PauseMenuIsContextMenuActive();
}
/**
 * No comment provided
 *
 * Hash: 0x4895BDEA16E7C080 | Since: 323 | API-Set: unknown
 */
export function pauseMenuRedrawInstructionalButtons() {
    PauseMenuRedrawInstructionalButtons(0);
}
/**
 * No comment provided
 *
 * Hash: 0xC78E239AC5B2DDB9 | Since: 323 | API-Set: unknown
 */
export function pauseMenuSetBusySpinner(position, spinnerIndex) {
    PauseMenuSetBusySpinner(false, position, spinnerIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xF06EBB91A81E09E3 | Since: 323 | API-Set: unknown
 */
export function pauseMenuSetWarnOnTabChange() {
    PauseMenuSetWarnOnTabChange(false);
}
/**
 * No comment provided
 *
 * Hash: 0x2DE6C5E2E996F178 | Since: 372 | API-Set: unknown
 */
export function pauseToggleFullscreenMap() {
    PauseToggleFullscreenMap(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC65AB383CD91DF98 | Since: 323 | API-Set: unknown
 */
export function preloadBusyspinner() {
    PreloadBusyspinner();
}
/**
 * No comment provided
 *
 * Hash: 0x742D6FD43115AF73 | Since: 323 | API-Set: unknown
 */
export function pulseBlip(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    PulseBlip(_blip);
}
/**
 * No comment provided
 *
 * Hash: 0x81FA173F170560D1 | Since: 323 | API-Set: unknown
 */
export function refreshWaypoint() {
    RefreshWaypoint();
}
/**
 * No comment provided
 *
 * Hash: 0x57D9C12635E25CE3 | Since: 323 | API-Set: unknown
 */
export function registerNamedRendertarget(name) {
    return RegisterNamedRendertarget(name, false);
}
/**
 * Enables frontend (works in custom frontends, not sure about regular pause menu) navigation keys on keyboard if they were disabled using the native below.
 * To disable the keys, use `0xEC9264727EEC0F28`
 *
 * Hash: 0x14621BB1DF14E2B2 | Since: 323 | API-Set: unknown
 */
export function releaseControlOfFrontend() {
    ReleaseControlOfFrontend();
}
/**
 * No comment provided
 *
 * Hash: 0xE9F6FFE837354DD4 | Since: 323 | API-Set: unknown
 */
export function releaseNamedRendertarget(name) {
    return ReleaseNamedRendertarget(name);
}
/**
 * No comment provided
 *
 * Hash: 0x2916A928514C9827 | Since: 573 | API-Set: unknown
 */
export function reloadMapMenu() {
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
 * Hash: 0x86A652570E5F25DD | Since: 323 | API-Set: unknown
 */
export function removeBlip(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    RemoveBlip(_blip);
}
/**
 * Interesting fact: A hash collision for this is RESET_JETPACK_MODEL_SETTINGS
 *
 * Hash: 0xC594B315EDF2D4AF | Since: 323 | API-Set: unknown
 */
export function removeCopBlipFromPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xC594B315EDF2D4AF', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x35A3CD97B2C0A6D2 | Since: 1290 | API-Set: unknown
 */
export function removeFakeConeData(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    Citizen.invokeNative('0x35A3CD97B2C0A6D2', _blip);
}
/**
 * No comment provided
 *
 * Hash: 0x31698AA80E0223F8 | Since: 323 | API-Set: unknown
 */
export function removeMpGamerTag(gamerTagId) {
    RemoveMpGamerTag(gamerTagId);
}
/**
 * No comment provided
 *
 * Hash: 0xC7C6789AA1CFEDD0 | Since: 323 | API-Set: unknown
 */
export function removeMultiplayerBankCash() {
    RemoveMultiplayerBankCash();
}
/**
 * Removes multiplayer cash hud each frame
 *
 * Hash: 0x968F270E39141ECA | Since: 323 | API-Set: unknown
 */
export function removeMultiplayerCash() {
    RemoveMultiplayerHudCash();
}
/**
 * No comment provided
 *
 * Hash: 0x95CF81BD06EE1887 | Since: 323 | API-Set: unknown
 */
export function removeMultiplayerWalletCash() {
    RemoveMultiplayerWalletCash();
}
/**
 * No comment provided
 *
 * Hash: 0x6EF54AB721DC6242 | Since: 323 | API-Set: unknown
 */
export function removeWarningMessageOptionItems() {
    RemoveWarningMessageListItems();
}
/**
 * makes hudColorIndex2 color into hudColorIndex color
 *
 * Hash: 0x1CCC708F0F850613 | Since: 323 | API-Set: unknown
 */
export function replaceColour(hudColorIndex, hudColorIndex2) {
    ReplaceHudColour(hudColorIndex, hudColorIndex2);
}
/**
 * No comment provided
 *
 * Hash: 0xF314CF4F0211894E | Since: 323 | API-Set: unknown
 */
export function replaceColourWithRgba(hudColorIndex, r, g, b, a) {
    ReplaceHudColourWithRgba(hudColorIndex, r, g, b, a);
}
/**
 * Request a gxt into the passed slot.
 *
 * Hash: 0x71A78003C8E71424 | Since: 323 | API-Set: unknown
 */
export function requestAdditionalText(gxt, slot) {
    RequestAdditionalText(gxt, slot);
}
/**
 * No comment provided
 *
 * Hash: 0x6009F9F1AE90D8A6 | Since: 323 | API-Set: unknown
 */
export function requestAdditionalTextForDlc(gxt, slot) {
    RequestAdditionalTextForDlc(gxt, slot);
}
/**
 * No comment provided
 *
 * Hash: 0xB99C4E4D9499DF29 | Since: 323 | API-Set: unknown
 */
export function resetGlobalActionscriptFlag(flagIndex) {
    ResetGlobalActionscriptFlag(flagIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x450930E616475D0D | Since: 323 | API-Set: unknown
 */
export function resetComponentValues(id) {
    ResetHudComponentValues(id);
}
/**
 * No comment provided
 *
 * Hash: 0x12782CE0A636E9F0 | Since: 323 | API-Set: unknown
 */
export function resetReticuleValues() {
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
 * Hash: 0x10706DC6AD2D49C0 | Since: 323 | API-Set: unknown
 */
export function restartFrontendMenu(menuHash) {
    if (typeof menuHash === 'string')
        menuHash = GetHashKey(menuHash);
    RestartFrontendMenu(menuHash, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF83D0FEBE75E62C9 | Since: 1290 | API-Set: unknown
 */
export function setupFakeConeData(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    Citizen.invokeNative('0xF83D0FEBE75E62C9', _blip, 0, 0, 0, 0, 0, 0, undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9969599CCFF5D85E | Since: 323 | API-Set: unknown
 */
export function setAbilityBarValue() {
    SetAbilityBarValue(0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1DFEDD15019315A9 | Since: 1493 | API-Set: unknown
 */
export function setAbilityBarVisibility(visible) {
    SetAbilityBarVisibilityInMultiplayer(visible);
}
/**
 * No comment provided
 *
 * Hash: 0x889329C80FE5963C | Since: 1868 | API-Set: unknown
 */
export function setAllowAbilityBar(toggle) {
    SetAllowAbilityBarInMultiplayer(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x577599CCED639CA2 | Since: 505 | API-Set: unknown
 */
export function setAllowCommaOnTextInput() {
    SetAllowCommaOnTextInput(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEE76FF7E6A0166B0 | Since: 323 | API-Set: unknown
 */
export function setAllMpGamerTagsVisibility(gamerTagId, toggle) {
    SetMpGamerTagVisibilityAll(gamerTagId, toggle);
}
/**
 * Toggles the big minimap state like in GTA:Online.
 *
 * Hash: 0x231C8F89D0539D8F | Since: 323 | API-Set: unknown
 */
export function setBigmapActive(toggleBigMap, showFullMap) {
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
 * Hash: 0x45FF974EEE1C8734 | Since: 323 | API-Set: unknown
 */
export function setBlipAlpha(blip, alpha) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipAlpha(_blip, alpha);
}
/**
 * false for enemy
 * true for friendly
 *
 * Hash: 0x6F6F290102C02AB4 | Since: 323 | API-Set: unknown
 */
export function setBlipAsFriendly(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipAsFriendly(_blip, toggle);
}
/**
 * Makes a blip go small when off the minimap.
 *
 * Hash: 0x2B6D467DAB714E8D | Since: 323 | API-Set: unknown
 */
export function setBlipAsMinimalOnEdge(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipShrink(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x24AC0137444F9FD5 | Since: 323 | API-Set: unknown
 */
export function setBlipAsMissionCreatorBlip(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipAsMissionCreatorBlip(_blip, toggle);
}
/**
 * Sets whether or not the specified blip should only be displayed when nearby, or on the minimap.
 *
 * Hash: 0xBE8BE4FE60E27B72 | Since: 323 | API-Set: unknown
 */
export function setBlipAsShortRange(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipAsShortRange(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB203913733F27884 | Since: 323 | API-Set: unknown
 */
export function setBlipBright(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
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
 * Hash: 0x234CDD44D996FD9A | Since: 323 | API-Set: unknown
 */
export function setBlipCategory(blip, index) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipCategory(_blip, index);
}
/**
 * https://gtaforums.com/topic/864881-all-blip-color-ids-pictured/
 *
 * Hash: 0x03D7FB09E75D6B7E | Since: 323 | API-Set: unknown
 */
export function setBlipColour(blip, color) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipColour(_blip, color);
}
/**
 * No comment provided
 *
 * Hash: 0xAE2AF67E9D9AF65D | Since: 323 | API-Set: unknown
 */
export function setBlipCoords(blip, pos) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
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
 * Hash: 0x9029B2F3DA924928 | Since: 323 | API-Set: unknown
 */
export function setBlipDisplay(blip, displayId) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipDisplay(_blip, displayId);
}
/**
 * Must be toggled before being queued for animation
 *
 * Hash: 0xC4278F70131BAA6D | Since: 323 | API-Set: unknown
 */
export function setBlipExtendedHeightThreshold(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipDisplayIndicatorOnBlip(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x2AEE8F8390D2298C | Since: 323 | API-Set: unknown
 */
export function setBlipFade(blip, opacity, duration) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipFade(_blip, opacity, duration);
}
/**
 * No comment provided
 *
 * Hash: 0xB14552383D39CE3E | Since: 323 | API-Set: unknown
 */
export function setBlipFlashes(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipFlashes(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x2E8D9498C56DD0D1 | Since: 323 | API-Set: unknown
 */
export function setBlipFlashesAlternate(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipFlashesAlternate(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xAA51DB313C010A7E | Since: 323 | API-Set: unknown
 */
export function setBlipFlashInterval(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipFlashInterval(_blip, undefined);
}
/**
 * Adds up after viewing multiple R* scripts. I believe that the duration is in miliseconds.
 *
 * Hash: 0xD3CD6FD297AE87CC | Since: 323 | API-Set: unknown
 */
export function setBlipFlashTimer(blip, duration) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipFlashTimer(_blip, duration);
}
/**
 * No comment provided
 *
 * Hash: 0x54318C915D27E4CE | Since: 323 | API-Set: unknown
 */
export function setBlipHiddenOnLegend(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipHiddenOnLegend(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE2590BC29220CEBB | Since: 323 | API-Set: unknown
 */
export function setBlipHighDetail(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipHighDetail(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB552929B85FC27EC | Since: 573 | API-Set: unknown
 */
export function setBlipMarkerLongDistance() {
    Citizen.invokeNative('0xB552929B85FC27EC', undefined, undefined);
}
/**
 * Doesn't work if the label text of gxtEntry is >= 80.
 *
 * Hash: 0xEAA0FFE120D92784 | Since: 323 | API-Set: unknown
 */
export function setBlipNameFromTextFile(blip, gxtEntry) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipNameFromTextFile(_blip, gxtEntry);
}
/**
 * No comment provided
 *
 * Hash: 0x127DE7B20C60A6A3 | Since: 323 | API-Set: unknown
 */
export function setBlipNameToPlayerName(blip, player) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetBlipNameToPlayerName(_blip, _player);
}
/**
 * See this topic for more details : gtaforums.com/topic/717612-v-scriptnative-documentation-and-research/page-35?p=1069477935
 *
 * Hash: 0xAE9FC9EF6A9FAC79 | Since: 323 | API-Set: unknown
 */
export function setBlipPriority(blip, priority) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipPriority(_blip, priority);
}
/**
 * After some testing, looks like you need to use CEIL() on the rotation (vehicle/ped heading) before using it there.
 *
 * Hash: 0xF87683CDF73C3F6E | Since: 323 | API-Set: unknown
 */
export function setBlipRotation(blip, rotation) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipRotation(_blip, rotation);
}
/**
 * Does not require whole number/integer rotations.
 *
 * Hash: 0xA8B6AFDAC320AC87 | Since: 877 | API-Set: unknown
 */
export function setBlipRotationWithFloat(blip, heading) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipSquaredRotation(_blip, heading);
}
/**
 * Enable / disable showing route for the Blip-object.
 *
 * Hash: 0x4F7D8A9BFB0B43E9 | Since: 323 | API-Set: unknown
 */
export function setBlipRoute(blip, enabled) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipRoute(_blip, enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x837155CD2F63DA09 | Since: 323 | API-Set: unknown
 */
export function setBlipRouteColour(blip, colour) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipRouteColour(_blip, colour);
}
/**
 * No comment provided
 *
 * Hash: 0xD38744167B2FA257 | Since: 323 | API-Set: unknown
 */
export function setBlipScale(blip, scale) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipScale(_blip, scale);
}
/**
 * See https://imgur.com/a/lLkEsMN
 *
 * Hash: 0xCD6524439909C979 | Since: 1734 | API-Set: unknown
 */
export function setBlipScale2d(blip, xScale, yScale) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipScaleTransformation(_blip, xScale, yScale);
}
/**
 * Can be used to give blips any RGB colour with SET_BLIP_COLOUR(blip, 84).
 *
 * Hash: 0x14892474891E09EB | Since: 323 | API-Set: unknown
 */
export function setBlipSecondaryColour(blip, r, g, b) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipSecondaryColour(_blip, r, g, b);
}
/**
 * No comment provided
 *
 * Hash: 0x4B5B620C9B59ED34 | Since: 678 | API-Set: unknown
 */
export function setBlipShortHeightThreshold() {
    Citizen.invokeNative('0x4B5B620C9B59ED34', undefined, undefined);
}
/**
 * As of b2189, the third parameter sets the color of the cone (before b2189 it was ignored). Note that it uses HUD colors, not blip colors.
 *
 * Hash: 0x13127EC3665E8EE1 | Since: 323 | API-Set: unknown
 */
export function setBlipShowCone(blip, toggle, hudColorIndex) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
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
 * Hash: 0xDF735600A4696DAF | Since: 323 | API-Set: unknown
 */
export function setBlipSprite(blip, spriteId) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipSprite(_blip, spriteId);
}
/**
 * No comment provided
 *
 * Hash: 0x2C9F302398E13141 | Since: 1103 | API-Set: unknown
 */
export function setBlipUseHeightIndicatorOnEdge(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    Citizen.invokeNative('0x2C9F302398E13141', _blip, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD1942374085C8469 | Since: 505 | API-Set: unknown
 */
export function setBlockWantedFlash(disabled) {
    Citizen.invokeNative('0xD1942374085C8469', disabled);
}
/**
 * No comment provided
 *
 * Hash: 0x39BBF623FC803EAC | Since: 323 | API-Set: unknown
 */
export function setColourOfNextTextComponent(hudColor) {
    SetColourOfNextTextComponent(hudColor);
}
/**
 * No comment provided
 *
 * Hash: 0x9FCB3CBFB3EAD69A | Since: 1734 | API-Set: unknown
 */
export function setCopBlipSprite() {
    Citizen.invokeNative('0x9FCB3CBFB3EAD69A', 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB7B873520C84C118 | Since: 1734 | API-Set: unknown
 */
export function setCopBlipSpriteAsStandard() {
    Citizen.invokeNative('0xB7B873520C84C118');
}
/**
 * No comment provided
 *
 * Hash: 0x2ACCB195F3CCD9DE | Since: 2545 | API-Set: unknown
 */
export function setCustomMpColor(hudColorId) {
    SetCustomMpHudColor(hudColorId);
}
/**
 * No comment provided
 *
 * Hash: 0x817B86108EB94E51 | Since: 323 | API-Set: unknown
 */
export function setDescriptionForUgcMissionEightStrings() {
    Citizen.invokeNative('0x817B86108EB94E51', false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x04655F9D075D0AE5 | Since: 323 | API-Set: unknown
 */
export function setDirectorModeAvailable(toggle) {
    Citizen.invokeNative('0x04655F9D075D0AE5', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x2632482FD6B9AB87 | Since: 323 | API-Set: unknown
 */
export function setDirectorModeLaunchedByScript() {
    SetDirectorModeClearTriggeredFlag();
}
/**
 * No comment provided
 *
 * Hash: 0xA17784FCA9548D15 | Since: 877 | API-Set: unknown
 */
export function setFakeGpsPlayerPositionThisFrame(pos) {
    Citizen.invokeNative('0xA17784FCA9548D15', pos.x, pos.y, pos.z);
}
/**
 * Argument must be 0.0f or above 38.0f, or it will be ignored.
 *
 * Hash: 0xD201F3FF917A506D | Since: 323 | API-Set: unknown
 */
export function setFakeMinimapMaxAltimeterHeight(altitude) {
    SetMinimapAltitudeIndicatorLevel(altitude, false, undefined);
}
/**
 * Sets the position of the arrow icon representing the player on both the minimap and world map.
 *
 * Too bad this wouldn't work over the network (obviously not). Could spoof where we would be.
 *
 * Hash: 0x77E2DD177910E1CF | Since: 323 | API-Set: unknown
 */
export function setFakePausemapPlayerPositionThisFrame(x, y) {
    SetFakePausemapPlayerPositionThisFrame(x, y);
}
/**
 * Setter for GET_FAKE_SPECTATOR_MODE
 *
 * Hash: 0xCD74233600C4EA6B | Since: 505 | API-Set: unknown
 */
export function setFakeSpectatorMode(toggle) {
    Citizen.invokeNative('0xCD74233600C4EA6B', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x7679CC1BCEBE3D4C | Since: 323 | API-Set: unknown
 */
export function setFloatingHelpTextScreenPosition(hudIndex, x, y) {
    SetFloatingHelpTextScreenPosition(hudIndex, x, y);
}
/**
 * No comment provided
 *
 * Hash: 0x788E7FD431BD67F1 | Since: 323 | API-Set: unknown
 */
export function setFloatingHelpTextStyle(hudIndex) {
    SetFloatingHelpTextStyle(hudIndex, 0, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB094BC1DB4018240 | Since: 323 | API-Set: unknown
 */
export function setFloatingHelpTextToEntity(hudIndex, entity, offsetX, offsetY) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetFloatingHelpTextToEntity(hudIndex, _entity, offsetX, offsetY);
}
/**
 * No comment provided
 *
 * Hash: 0x784BA7E0ECEB4178 | Since: 323 | API-Set: unknown
 */
export function setFloatingHelpTextWorldPosition(hudIndex, pos) {
    SetFloatingHelpTextWorldPosition(hudIndex, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x2790F4B17D098E26 | Since: 573 | API-Set: unknown
 */
export function setForceShowGps(toggle) {
    Citizen.invokeNative('0x2790F4B17D098E26', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x745711A75AB09277 | Since: 323 | API-Set: unknown
 */
export function setFrontendActive(active) {
    SetFrontendActive(active);
}
/**
 * radarThickness: The width of the GPS route on the radar
 * mapThickness: The width of the GPS route on the map
 *
 * Hash: 0x900086F371220B6F | Since: 323 | API-Set: unknown
 */
export function setGpsCustomRouteRender(toggle, radarThickness, mapThickness) {
    SetGpsCustomRouteRender(toggle, radarThickness, mapThickness);
}
/**
 * Only the script that originally called SET_GPS_FLAGS can set them again. Another script cannot set the flags, until the first script that called it has called CLEAR_GPS_FLAGS.
 *
 * Doesn't seem like the flags are actually read by the game at all.
 *
 * Hash: 0x5B440763A4C8D15B | Since: 323 | API-Set: unknown
 */
export function setGpsFlags() {
    SetGpsFlags(0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x320D0E0D936A0E9B | Since: 323 | API-Set: unknown
 */
export function setGpsFlashes(toggle) {
    SetGpsFlashes(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x3DDA37128DD1ACA8 | Since: 323 | API-Set: unknown
 */
export function setGpsMultiRouteRender(toggle) {
    SetGpsMultiRouteRender(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x3F5CC444DCAAA8F2 | Since: 323 | API-Set: unknown
 */
export function setHealthDisplayValues(health, capacity, wasAdded) {
    SetHealthHudDisplayValues(health, capacity, wasAdded);
}
/**
 * No comment provided
 *
 * Hash: 0xB9C362BABECDDC7A | Since: 463 | API-Set: unknown
 */
export function setHelpMessageStyle(style, hudColor, alpha) {
    SetHelpMessageTextStyle(style, hudColor, alpha, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xAABB1F56E2A17CED | Since: 323 | API-Set: unknown
 */
export function setComponentPosition(id, x, y) {
    SetHudComponentPosition(id, x, y);
}
/**
 * No comment provided
 *
 * Hash: 0x7EC8ABA5E74B3D7A | Since: 2372 | API-Set: unknown
 */
export function setInsideVeryLargeInterior(toggle) {
    SetInteriorZoomLevelDecreased(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x504DFE62A1692296 | Since: 1493 | API-Set: unknown
 */
export function setInsideVerySmallInterior(toggle) {
    SetInteriorZoomLevelIncreased(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x06A320535F5F0248 | Since: 323 | API-Set: unknown
 */
export function setMaxArmourDisplay(maximumValue) {
    SetMaxArmourHudDisplay(maximumValue);
}
/**
 * No comment provided
 *
 * Hash: 0x975D66A0BC17064C | Since: 323 | API-Set: unknown
 */
export function setMaxHealthDisplay(maximumValue) {
    SetMaxHealthHudDisplay(maximumValue);
}
/**
 * This native does absolutely nothing on PC master builds, just a nullsub.
 *
 * Hash: 0xB09D42557C45EBA1 | Since: 3258 | API-Set: unknown
 */
export function setMinimapBackgroundHidden(toggle) {
    Citizen.invokeNative('0xB09D42557C45EBA1', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x58FADDED207897DC | Since: 323 | API-Set: unknown
 */
export function setMinimapBlockWaypoint(toggle) {
    SetMinimapBlockWaypoint(toggle);
}
/**
 * This native is used to colorize certain map components like the army base at the top of the map.
 * p2 appears to be always -1. If p2 is -1 then native wouldn't change the color. See https://gfycat.com/SkinnyPinkChupacabra
 *
 * Hash: 0x75A9A10948D1DEA6 | Since: 323 | API-Set: unknown
 */
export function setMinimapComponent(componentId, toggle, overrideColor) {
    return SetMinimapComponent(componentId, toggle, overrideColor);
}
/**
 * No comment provided
 *
 * Hash: 0x62E849B7EB28E770 | Since: 323 | API-Set: unknown
 */
export function setMinimapFowDoNotUpdate() {
    Citizen.invokeNative('0x62E849B7EB28E770', false);
}
/**
 * Up to eight coordinates may be revealed per frame
 *
 * Hash: 0x0923DBF87DFF735E | Since: 323 | API-Set: unknown
 */
export function setMinimapFowRevealCoordinate(pos) {
    SetMinimapFowRevealCoordinate(pos.x, pos.y, pos.z);
}
/**
 * Not much is known so far on what it does _exactly_.
 * All I know for sure is that it draws the specified hole ID on the pause menu map as well as on the mini-map/radar. This native also seems to change some other things related to the pause menu map's behaviour, for example: you can no longer set waypoints, the pause menu map starts up in a 'zoomed in' state. This native does not need to be executed every tick.
 * You need to center the minimap manually as well as change/lock it's zoom and angle in order for it to appear correctly on the minimap.
 * You'll also need to use the `GOLF` scaleform in order to get the correct minmap border to show up.
 * Use `0x35edd5b2e3ff01c0` to reset the map when you no longer want to display any golf holes (you still need to unlock zoom, position and angle of the radar manually after calling this).
 *
 * Hash: 0x71BDB63DBAF8DA59 | Since: 323 | API-Set: unknown
 */
export function setMinimapGolfCourse(hole) {
    SetMinimapGolfCourse(hole);
}
/**
 * No comment provided
 *
 * Hash: 0x35EDD5B2E3FF01C0 | Since: 323 | API-Set: unknown
 */
export function setMinimapGolfCourseOff() {
    SetMinimapGolfCourseOff();
}
/**
 * If true, the entire map will be revealed.
 *
 * FOW = Fog of War
 *
 * Hash: 0xF8DEE0A5600CBB93 | Since: 323 | API-Set: unknown
 */
export function setMinimapHideFow(toggle) {
    SetMinimapHideFow(toggle);
}
/**
 * Toggles the North Yankton map
 *
 * Hash: 0x9133955F1A2DA957 | Since: 323 | API-Set: unknown
 */
export function setMinimapInPrologue(toggle) {
    SetMinimapInPrologue(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1A5CD7752DD28CD3 | Since: 323 | API-Set: unknown
 */
export function setMinimapInSpectatorMode(toggle, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetMinimapInSpectatorMode(toggle, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6B50FC8749632EC1 | Since: 2189 | API-Set: unknown
 */
export function setMinimapSonarSweep(toggle) {
    SetMinimapSonarSweep(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5F28ECF5FC84772F | Since: 323 | API-Set: unknown
 */
export function setMissionName(name) {
    SetMissionName(false, name);
}
/**
 * No comment provided
 *
 * Hash: 0xE45087D85F468BC2 | Since: 323 | API-Set: unknown
 */
export function setMissionNameForUgcMission(name) {
    SetMissionName2(false, name);
}
/**
 * Changes the mouse cursor's sprite.
 * 1 = Normal
 * 6 = Left Arrow
 * 7 = Right Arrow
 *
 * Hash: 0x8DB8CFFD58B62552 | Since: 323 | API-Set: unknown
 */
export function setMouseCursorStyle(spriteId) {
    SetMouseCursorStyle(spriteId);
}
/**
 * Shows the cursor on screen for one frame.
 *
 * Hash: 0xAAE7CE1D63167423 | Since: 323 | API-Set: unknown
 */
export function setMouseCursorThisFrame() {
    SetMouseCursorThisFrame();
}
/**
 * Shows/hides the frontend cursor on the pause menu or similar menus.
 * Clicking off and then on the game window will show it again.
 *
 * Hash: 0x98215325A695E78A | Since: 323 | API-Set: unknown
 */
export function setMouseCursorVisible(toggle) {
    SetMouseCursorVisible(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1563FE35E9928E67 | Since: 1365 | API-Set: unknown
 */
export function setMpGamerTagsPointHealth(gamerTagId, value, maximumValue) {
    SetMpGamerTagOverridePlayerHealth(gamerTagId, value, maximumValue);
}
/**
 * No comment provided
 *
 * Hash: 0xD29EC58C2F6B5014 | Since: 1365 | API-Set: unknown
 */
export function setMpGamerTagsShouldUsePointsHealth(gamerTagId, toggle) {
    SetMpGamerTagDisablePlayerHealthSync(gamerTagId, toggle);
}
/**
 * Displays a bunch of icons above the players name, and level, and their name twice
 *
 * Hash: 0xA67F9C46D612B6F1 | Since: 323 | API-Set: unknown
 */
export function setMpGamerTagsShouldUseVehicleHealth(gamerTagId, toggle) {
    SetMpGamerTagUseVehicleHealth(gamerTagId, toggle);
}
/**
 * Sets flag's sprite transparency. 0-255.
 *
 * Hash: 0xD48FE545CD46F857 | Since: 323 | API-Set: unknown
 */
export function setMpGamerTagAlpha(gamerTagId, component, alpha) {
    SetMpGamerTagAlpha(gamerTagId, component, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0x7B7723747CCB55B6 | Since: 323 | API-Set: unknown
 */
export function setMpGamerTagBigText(gamerTagId, _string) {
    SetMpGamerTagBigText(gamerTagId, _string);
}
/**
 * Sets a gamer tag's component colour
 *
 * gamerTagId is obtained using for example CREATE_FAKE_MP_GAMER_TAG
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 *
 * Hash: 0x613ED644950626AE | Since: 323 | API-Set: unknown
 */
export function setMpGamerTagColour(gamerTagId, component, hudColorIndex) {
    SetMpGamerTagColour(gamerTagId, component, hudColorIndex);
}
/**
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 * Should be enabled as flag (2). Has 0 opacity by default.
 *
 * - This was _SET_MP_GAMER_TAG_HEALTH_BAR_COLOR,
 * -> Rockstar use the EU spelling of 'color' so I hashed the same name with COLOUR and it came back as the correct hash, so it has been corrected above.
 *
 * Hash: 0x3158C77A7E888AB4 | Since: 323 | API-Set: unknown
 */
export function setMpGamerTagHealthBarColour(gamerTagId, hudColorIndex) {
    SetMpGamerTagHealthBarColour(gamerTagId, hudColorIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xDEA2B8283BAA3944 | Since: 323 | API-Set: unknown
 */
export function setMpGamerTagName(gamerTagId, _string) {
    SetMpGamerTagName(gamerTagId, _string);
}
/**
 * No comment provided
 *
 * Hash: 0x9C16459B2324B2CF | Since: 877 | API-Set: unknown
 */
export function setMpGamerTagNumPackages(gamerTagId) {
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
 * Hash: 0x63BB75ABEDC1F6A0 | Since: 323 | API-Set: unknown
 */
export function setMpGamerTagVisibility(gamerTagId, component, toggle) {
    SetMpGamerTagVisibility(gamerTagId, component, toggle, undefined);
}
/**
 * displays wanted star above head
 *
 * Hash: 0xCF228E2AA03099C3 | Since: 323 | API-Set: unknown
 */
export function setMpGamerTagWantedLevel(gamerTagId, wantedlvl) {
    SetMpGamerTagWantedLevel(gamerTagId, wantedlvl);
}
/**
 * No comment provided
 *
 * Hash: 0xDD21B55DF695CD0A | Since: 323 | API-Set: unknown
 */
export function setMultiplayerBankCash() {
    SetMultiplayerBankCash();
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0xFD1D220394BCB824 | Since: 323 | API-Set: unknown
 */
export function setMultiplayerCash() {
    SetMultiplayerHudCash(0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC2D15BEF167E27BC | Since: 323 | API-Set: unknown
 */
export function setMultiplayerWalletCash() {
    SetMultiplayerWalletCash();
}
/**
 * No comment provided
 *
 * Hash: 0xFE43368D2AA4F2FC | Since: 323 | API-Set: unknown
 */
export function setNewWaypoint(x, y) {
    SetNewWaypoint(x, y);
}
/**
 * No comment provided
 *
 * Hash: 0xDF47FC56C71569CF | Since: 323 | API-Set: unknown
 */
export function setPauseMenuActive(toggle) {
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
 * Hash: 0x3CA6050692BC61B0 | Since: 323 | API-Set: unknown
 */
export function setPauseMenuPedLighting(state) {
    SetPauseMenuPedLighting(state);
}
/**
 * Toggles the pause menu ped sleep state for frontend menus.
 *
 * Example: https://vespura.com/hi/i/2019-04-01_15-51_8ed38_1014.gif
 *
 * `state` 0 will make the ped slowly fall asleep, 1 will slowly wake the ped up.
 *
 * Hash: 0xECF128344E9FF9F1 | Since: 323 | API-Set: unknown
 */
export function setPauseMenuPedSleepState(state) {
    SetPauseMenuPedSleepState(state);
}
/**
 * No comment provided
 *
 * Hash: 0x0C4BBF625CA98C4E | Since: 323 | API-Set: unknown
 */
export function setPedAiBlipForcedOn(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAiBlipForcedOn(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE52B8E7F85D39A08 | Since: 323 | API-Set: unknown
 */
export function setPedAiBlipGangId(ped, gangId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAiBlipGangId(_ped, gangId);
}
/**
 * No comment provided
 *
 * Hash: 0x3EED80DFF7325CAA | Since: 323 | API-Set: unknown
 */
export function setPedAiBlipHasCone(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAiBlipHasCone(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x97C65887D4B37FA9 | Since: 323 | API-Set: unknown
 */
export function setPedAiBlipNoticeRange(ped, range) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAiBlipNoticeRange(_ped, range);
}
/**
 * No comment provided
 *
 * Hash: 0xFCFACD0DB9D7A57D | Since: 877 | API-Set: unknown
 */
export function setPedAiBlipSprite(ped, spriteId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAiBlipSprite(_ped, spriteId);
}
/**
 * This native turns on the AI blip on the specified ped. It also disappears automatically when the ped is too far or if the ped is dead. You don't need to control it with other natives.
 *
 * See gtaforums.com/topic/884370-native-research-ai-blips for further information.
 *
 * Hash: 0xD30C50DF888D58B5 | Since: 323 | API-Set: unknown
 */
export function setPedHasAiBlip(ped, hasCone) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedHasAiBlip(_ped, hasCone);
}
/**
 * color: see SET_BLIP_COLOUR
 *
 * Hash: 0xB13DCB4C6FAAD238 | Since: 505 | API-Set: unknown
 */
export function setPedHasAiBlipWithColour(ped, hasCone, color) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedHasAiBlipWithColor(_ped, hasCone, color);
}
/**
 * No comment provided
 *
 * Hash: 0x7B21E0BB01E8224A | Since: 323 | API-Set: unknown
 */
export function setPlayerIconColour(color) {
    SetMainPlayerBlipColour(color);
}
/**
 * If toggle is true, hides special ability bar / character name in the pause menu
 * If toggle is false, shows special ability bar / character name in the pause menu
 *
 * Hash: 0x808519373FD336A3 | Since: 323 | API-Set: unknown
 */
export function setPlayerIsInDirectorMode(toggle) {
    SetPlayerIsInDirectorMode(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x41350B4FC28E3941 | Since: 323 | API-Set: unknown
 */
export function setPmWarningscreenActive() {
    Citizen.invokeNative('0x41350B4FC28E3941', false);
}
/**
 * No comment provided
 *
 * Hash: 0x1EAC5F91BCBC5073 | Since: 323 | API-Set: unknown
 */
export function setRaceTrackRender(toggle) {
    SetRaceTrackRender(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE81B7D2A3DAB2D81 | Since: 323 | API-Set: unknown
 */
export function setRadarAsExteriorThisFrame() {
    SetRadarAsExteriorThisFrame();
}
/**
 * List of interior hashes: https://pastebin.com/1FUyXNqY
 * Not for every interior zoom > 0 available.
 *
 * Hash: 0x59E727A1C9D3E31A | Since: 323 | API-Set: unknown
 */
export function setRadarAsInteriorThisFrame(interior, pos, zoom) {
    if (typeof interior === 'string')
        interior = GetHashKey(interior);
    SetRadarAsInteriorThisFrame(interior, pos.x, pos.y, pos.z, zoom);
}
/**
 * zoomLevel ranges from 0 to 1400 in R* Scripts
 *
 * Hash: 0x096EF57A0C999BBA | Since: 323 | API-Set: unknown
 */
export function setRadarZoom(zoomLevel) {
    SetRadarZoom(zoomLevel);
}
/**
 * zoom ranges from 0 to 90f in R* Scripts
 *
 * Hash: 0xBD12C5EEE184C337 | Since: 323 | API-Set: unknown
 */
export function setRadarZoomPrecise(zoom) {
    SetRadarZoomPrecise(zoom);
}
/**
 * No comment provided
 *
 * Hash: 0xF98E4B3E56AFC7B1 | Since: 323 | API-Set: unknown
 */
export function setRadarZoomToBlip(blip, zoom) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetRadarZoomToBlip(_blip, zoom);
}
/**
 * No comment provided
 *
 * Hash: 0xCB7CC0D58405AD41 | Since: 323 | API-Set: unknown
 */
export function setRadarZoomToDistance(zoom) {
    SetRadarZoomToDistance(zoom);
}
/**
 * Enabling this on a radius blip will make it outline only. See https://cdn.discordapp.com/attachments/553235301632573459/575132227935928330/unknown.png
 *
 * Hash: 0x25615540D894B814 | Since: 323 | API-Set: unknown
 */
export function setRadiusBlipEdge(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetRadiusBlipEdge(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0CF54F20DE43879C | Since: 323 | API-Set: unknown
 */
export function setSavegameListUniqueId() {
    Citizen.invokeNative('0x0CF54F20DE43879C', undefined);
}
/**
 * Sets the color of HUD_COLOUR_SCRIPT_VARIABLE
 *
 * Hash: 0xD68A5FF8A3A89874 | Since: 323 | API-Set: unknown
 */
export function setScriptVariableColour(r, g, b, a) {
    SetScriptVariableHudColour(r, g, b, a);
}
/**
 * Sets the color of HUD_COLOUR_SCRIPT_VARIABLE_2
 *
 * Hash: 0x16A304E6CB2BFAB9 | Since: 323 | API-Set: unknown
 */
export function setSecondScriptVariableColour(r, g, b, a) {
    SetScriptVariable2HudColour(r, g, b, a);
}
/**
 * `HUD::SET_SOCIAL_CLUB_TOUR("Gallery");`
 * `HUD::SET_SOCIAL_CLUB_TOUR("Missions");`
 * `HUD::SET_SOCIAL_CLUB_TOUR("General");`
 * `HUD::SET_SOCIAL_CLUB_TOUR("Playlists");`
 *
 * Hash: 0x9E778248D6685FE0 | Since: 323 | API-Set: unknown
 */
export function setSocialClubTour(name) {
    SetSocialClubTour(name);
}
/**
 * No comment provided
 *
 * Hash: 0xC02F4DBFB51D988B | Since: 323 | API-Set: unknown
 */
export function setTextCentre(align) {
    SetTextCentre(align);
}
/**
 * colors you input not same as you think?
 * A: for some reason its R B G A
 *
 * Hash: 0xBE6B23FFA53FB442 | Since: 323 | API-Set: unknown
 */
export function setTextColour(red, green, blue, alpha) {
    SetTextColour(red, green, blue, alpha);
}
/**
 * distance - shadow distance in pixels, both horizontal and vertical
 * r, g, b, a - color
 *
 * Hash: 0x465C84BC39F1C351 | Since: 323 | API-Set: unknown
 */
export function setTextDropshadow(distance, r, g, b, a) {
    SetTextDropshadow(distance, r, g, b, a);
}
/**
 * No comment provided
 *
 * Hash: 0x1CA3E9EAC9D93E5E | Since: 323 | API-Set: unknown
 */
export function setTextDropShadow() {
    SetTextDropShadow();
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x441603240D202FA6 | Since: 323 | API-Set: unknown
 */
export function setTextEdge(r, g, b, a) {
    SetTextEdge(0, r, g, b, a);
}
/**
 * fonts that mess up your text where made for number values/misc stuff
 *
 * Hash: 0x66E0276CC5F6B9DA | Since: 323 | API-Set: unknown
 */
export function setTextFont(fontType) {
    SetTextFont(fontType);
}
/**
 * No comment provided
 *
 * Hash: 0x1185A8087587322C | Since: 323 | API-Set: unknown
 */
export function setTextInputBoxEnabled() {
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
 * Hash: 0x4E096588B13FFECA | Since: 323 | API-Set: unknown
 */
export function setTextJustification(justifyType) {
    SetTextJustification(justifyType);
}
/**
 * No comment provided
 *
 * Hash: 0xA50ABC31E3CDFAFF | Since: 323 | API-Set: unknown
 */
export function setTextLeading() {
    SetTextLeading(0);
}
/**
 * No comment provided
 *
 * Hash: 0x9F4624F76E6953D1 | Since: 3095 | API-Set: unknown
 */
export function setTextLineHeightMult(lineHeightMult) {
    Citizen.invokeNative('0x9F4624F76E6953D1', lineHeightMult);
}
/**
 * No comment provided
 *
 * Hash: 0x2513DFB0FB8400FE | Since: 323 | API-Set: unknown
 */
export function setTextOutline() {
    SetTextOutline();
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x038C1F517D7FDCF8 | Since: 323 | API-Set: unknown
 */
export function setTextProportional() {
    SetTextProportional(false);
}
/**
 * No comment provided
 *
 * Hash: 0x5F15302936E07111 | Since: 323 | API-Set: unknown
 */
export function setTextRenderId(renderId) {
    SetTextRenderId(renderId);
}
/**
 * No comment provided
 *
 * Hash: 0x6B3C4650BC8BEE47 | Since: 323 | API-Set: unknown
 */
export function setTextRightJustify(toggle) {
    SetTextRightJustify(toggle);
}
/**
 * Size range : 0F to 1.0F
 * p0 is unknown and doesn't seem to have an effect, yet in the game scripts it changes to 1.0F sometimes.
 *
 * Hash: 0x07C837F9A01C34C9 | Since: 323 | API-Set: unknown
 */
export function setTextScale(scale, size) {
    SetTextScale(scale, size);
}
/**
 * It sets the text in a specified box and wraps the text if it exceeds the boundries. Both values are for X axis. Useful when positioning text set to center or aligned to the right.
 *
 * start - left boundry on screen position (0.0 - 1.0)
 * end - right boundry on screen position (0.0 - 1.0)
 *
 * Hash: 0x63145D9C883A1A70 | Since: 323 | API-Set: unknown
 */
export function setTextWrap(start, end) {
    SetTextWrap(start, end);
}
/**
 * Toggles the Cayo Perico map.
 *
 * Hash: 0x5E1460624D194A38 | Since: 2189 | API-Set: unknown
 */
export function setUseIslandMap(toggle) {
    SetUseIslandMap(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6CDD58146A436083 | Since: 573 | API-Set: unknown
 */
export function setUseSetDestinationInPauseMap(toggle) {
    SetUseWaypointAsDestination(toggle);
}
/**
 * You can only use text entries. No custom text.
 *
 * Example: SET_WARNING_MESSAGE("t20", 3, "adder", false, -1, 0, 0, true);
 * errorCode: shows an error code at the bottom left if nonzero
 *
 * Hash: 0x7B1776B3B53F8D74 | Since: 323 | API-Set: unknown
 */
export function setWarningMessage(titleMsg, flags, promptMsg, showBackground, errorCode) {
    SetWarningMessage(titleMsg, flags, promptMsg, false, 0, undefined, undefined, showBackground, errorCode);
}
/**
 * No comment provided
 *
 * Hash: 0xDAF87174BE7454FF | Since: 323 | API-Set: unknown
 */
export function setWarningMessageOptionHighlight() {
    return Citizen.invokeNative('0xDAF87174BE7454FF', undefined);
}
/**
 * Some sort of list displayed in a warning message. Yet unknown how to prevent repeating.
 * Param names copied from the corresponding scaleform function "SET_LIST_ROW".
 * Example: https://i.imgur.com/arKvOYx.png
 *
 * Hash: 0x0C5A80A9E096D529 | Since: 323 | API-Set: unknown
 */
export function setWarningMessageOptionItems(index, name, cash, rp, lvl, colour) {
    return SetWarningMessageListRow(index, name, cash, rp, lvl, colour);
}
/**
 * Shows a warning message on screen with a header.
 * Note: You can only use text entries. No custom text. You can recreate this easily with scaleforms.
 * Example: https://i.imgur.com/ITJt8bJ.png
 *
 * Hash: 0xDC38CC1E35B6A5D7 | Since: 323 | API-Set: unknown
 */
export function setWarningMessageWithHeader(entryHeader, entryLine1, instructionalKey, entryLine2) {
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
 * Hash: 0x701919482C74B5AB | Since: 323 | API-Set: unknown
 */
export function setWarningMessageWithHeaderAndSubstringFlags(entryHeader, entryLine1, instructionalKey, entryLine2, additionalIntInfo, additionalTextInfoLine1, additionalTextInfoLine2, showBackground, errorCode) {
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
 * Hash: 0x15803FEC3B9A872B | Since: 573 | API-Set: unknown
 */
export function setWarningMessageWithHeaderAndSubstringFlagsExtended(labelTitle, labelMessage, labelMessage2, background, errorCode) {
    SetWarningMessageWithAlert(labelTitle, labelMessage, 0, 0, labelMessage2, false, 0, 0, undefined, undefined, background, errorCode);
}
/**
 * No comment provided
 *
 * Hash: 0x38B55259C2E078ED | Since: 1493 | API-Set: unknown
 */
export function setWarningMessageWithHeaderExtended(entryHeader, entryLine1, flags, entryLine2, showBg) {
    return SetWarningMessageWithHeaderExtended(entryHeader, entryLine1, flags, entryLine2, false, undefined, showBg, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3FFC556B62146F75 | Since: 3717 | API-Set: unknown
 */
export function setWaypointClearOnArrivalMode(mode) {
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
 * Hash: 0xA7E4E2D361C2627F | Since: 323 | API-Set: unknown
 */
export function setWaypointOff() {
    SetWaypointOff();
}
/**
 * No comment provided
 *
 * Hash: 0xC3B07BA00A83B0F1 | Since: 323 | API-Set: unknown
 */
export function setWidescreenFormat() {
    SetWidescreenFormat(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x60E892BA4F5BDCA4 | Since: 323 | API-Set: unknown
 */
export function showAccountPicker() {
    ShowSigninUi();
}
/**
 * No comment provided
 *
 * Hash: 0xC772A904CDE1186F | Since: 2545 | API-Set: unknown
 */
export function showContactInstructionalButton(toggle) {
    ShowContactInstructionalButton(toggle);
}
/**
 * Enables or disables the blue half circle https://i.imgur.com/iZes9Ec.png around the specified blip on the left side of the blip. This is used to indicate that the player is in your crew in GTA:O. Color is changeable by using `SET_BLIP_SECONDARY_COLOUR`.
 *
 * Hash: 0xDCFB5D4DB8BF367E | Since: 323 | API-Set: unknown
 */
export function showCrewIndicatorOnBlip(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    ShowCrewIndicatorOnBlip(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x19BD6E3C0E16A8FA | Since: 2802 | API-Set: unknown
 */
export function showForSaleIconOnBlip(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    Citizen.invokeNative('0x19BD6E3C0E16A8FA', _blip, toggle);
}
/**
 * Highlights a blip by a half cyan circle on the right side of the blip. https://i.imgur.com/FrV9M4e.png
 * .Indicating that that player is a friend (in GTA:O). This color can not be changed.
 * To toggle the left side (crew member indicator) of the half circle around the blip, use: `SHOW_CREW_INDICATOR_ON_BLIP`
 *
 * Hash: 0x23C3EB807312F01A | Since: 323 | API-Set: unknown
 */
export function showFriendIndicatorOnBlip(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    ShowFriendIndicatorOnBlip(_blip, toggle);
}
/**
 * Adds a orange checkmark on top of a given blip handle: https://imgur.com/a/aw5OTMF
 * _SHOW_FRIEND_INDICATOR_ON_BLIP* - _SHOW_HEADING_INDICATOR_ON_BLIP*
 *
 * Hash: 0xCAC2031EBF79B1A8 | Since: 2699 | API-Set: unknown
 */
export function showGoldTickOnBlip(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    ShowHasCompletedIndicatorOnBlip(_blip, toggle);
}
/**
 * Adds the GTA: Online player heading indicator to a blip.
 *
 * Hash: 0x5FBCA48327B914DF | Since: 323 | API-Set: unknown
 */
export function showHeadingIndicatorOnBlip(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    ShowHeadingIndicatorOnBlip(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x75A16C3DA34F1245 | Since: 323 | API-Set: unknown
 */
export function showHeightOnBlip(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
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
 * Hash: 0x0B4DF1FA60C0E664 | Since: 323 | API-Set: unknown
 */
export function showComponentThisFrame(id) {
    ShowHudComponentThisFrame(id);
}
/**
 * No comment provided
 *
 * Hash: 0xA3C0B359DCB848B6 | Since: 323 | API-Set: unknown
 */
export function showNumberOnBlip(blip, _number) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    ShowNumberOnBlip(_blip, _number);
}
/**
 * Highlights a blip by a cyan color circle.
 *
 * Color can be changed with SET_BLIP_SECONDARY_COLOUR
 *
 * Hash: 0xB81656BC81FE24D1 | Since: 323 | API-Set: unknown
 */
export function showOutlineIndicatorOnBlip(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    ShowOutlineIndicatorOnBlip(_blip, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x4F38DCA127DAAEA2 | Since: 1734 | API-Set: unknown
 */
export function showScriptedComponentThisFrame(id) {
    ShowScriptedHudComponentThisFrame(id);
}
/**
 * No comment provided
 *
 * Hash: 0xF1A6C18B35BCADE6 | Since: 323 | API-Set: unknown
 */
export function showStartMissionInstructionalButton(toggle) {
    ShowStartMissionInstructionalButton(toggle);
}
/**
 * Adds a green checkmark on top of a blip.
 *
 * Hash: 0x74513EA3E505181E | Since: 323 | API-Set: unknown
 */
export function showTickOnBlip(blip, toggle) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
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
 * Hash: 0xDB34E8D56FC13B08 | Since: 323 | API-Set: unknown
 */
export function startGpsCustomRoute(hudColor, displayOnFoot, followPlayer) {
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
 * Hash: 0x3D3D15AF7BCAAF83 | Since: 323 | API-Set: unknown
 */
export function startGpsMultiRoute(hudColor, routeFromPlayer, displayOnFoot) {
    StartGpsMultiRoute(hudColor, routeFromPlayer, displayOnFoot);
}
/**
 * No comment provided
 *
 * Hash: 0xBA751764F0821256 | Since: 323 | API-Set: unknown
 */
export function suppressFrontendRenderingThisFrame() {
    SuppressFrontendRenderingThisFrame();
}
/**
 * Disables frontend (works in custom frontends, not sure about regular pause menu) navigation keys on keyboard. Not sure about controller. Does not disable mouse controls. No need to call this every tick.
 *
 * To enable the keys again, use `0x14621BB1DF14E2B2`.
 *
 * Hash: 0xEC9264727EEC0F28 | Since: 323 | API-Set: unknown
 */
export function takeControlOfFrontend() {
    TakeControlOfFrontend();
}
/**
 * Displays "normal" notifications again after calling `THEFEED_AUTO_POST_GAMETIPS_ON` (those that were drawn before calling this native too), though those will have a weird offset and stay on screen forever (tested with notifications created from same script).
 *
 * Hash: 0xADED7F5748ACAFE6 | Since: 323 | API-Set: unknown
 */
export function thefeedAutoPostGametipsOff() {
    ThefeedCommentTeleportPoolOff();
}
/**
 * Enables loading screen tips to be be shown (`THEFEED_SHOW`), blocks other kinds of notifications from being displayed (at least from current script). Call `THEFEED_AUTO_POST_GAMETIPS_OFF` to display those again.
 *
 * Hash: 0x56C8B608CFD49854 | Since: 323 | API-Set: unknown
 */
export function thefeedAutoPostGametipsOn() {
    ThefeedCommentTeleportPoolOn();
}
/**
 * No comment provided
 *
 * Hash: 0x80FE4F3AB4E1B62A | Since: 323 | API-Set: unknown
 */
export function thefeedClearFrozenPost() {
    ThefeedClearFrozenPost();
}
/**
 * No comment provided
 *
 * Hash: 0xA8FDB297A8D25FBA | Since: 323 | API-Set: unknown
 */
export function thefeedFlushQueue() {
    ThefeedFlushQueue();
}
/**
 * Enables loading screen tips to be be shown (`THEFEED_SHOW`), blocks other kinds of notifications from being displayed (at least from current script). Call `0xADED7F5748ACAFE6` to display those again.
 *
 * Hash: 0x583049884A2EEE3C | Since: 323 | API-Set: unknown
 */
export function thefeedForceRenderOff() {
    ThefeedForceRenderOff();
}
/**
 * No comment provided
 *
 * Hash: 0xA13C11E1B5C06BFC | Since: 323 | API-Set: unknown
 */
export function thefeedForceRenderOn() {
    ThefeedForceRenderOn();
}
/**
 * Requires manual management of game stream handles (i.e., 0xBE4390CB40B3E627).
 *
 * Hash: 0xFDEC055AB549E328 | Since: 323 | API-Set: unknown
 */
export function thefeedFreezeNextPost() {
    ThefeedFreezeNextPost();
}
/**
 * Returns the handle for the notification currently displayed on the screen. Name may be a hash collision, but describes the function accurately.
 *
 * Hash: 0x82352748437638CA | Since: 323 | API-Set: unknown
 */
export function thefeedGetLastShownPhoneActivatableFeedId() {
    return ThefeedGetFirstVisibleDeleteRemaining();
}
/**
 * Stops loading screen tips shown by invoking `THEFEED_SHOW`
 *
 * Hash: 0x32888337579A5970 | Since: 463 | API-Set: unknown
 */
export function thefeedHide() {
    ThefeedDisableLoadingScreenTips();
}
/**
 * Once called each frame hides all above radar notifications.
 *
 * Hash: 0x25F87B30C382FCA7 | Since: 323 | API-Set: unknown
 */
export function thefeedHideThisFrame() {
    ThefeedHideThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0xA9CBFD40B3FA3010 | Since: 323 | API-Set: unknown
 */
export function thefeedIsPaused() {
    return ThefeedIsPaused();
}
/**
 * No comment provided
 *
 * Hash: 0x6F1554B0CC2089FA | Since: 323 | API-Set: unknown
 */
export function thefeedOnlyShowTooltips(toggle) {
    ThefeedOnlyShowTooltips(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xFDB423997FA30340 | Since: 323 | API-Set: unknown
 */
export function thefeedPause() {
    ThefeedPause();
}
/**
 * Removes a notification instantly instead of waiting for it to disappear
 *
 * Hash: 0xBE4390CB40B3E627 | Since: 323 | API-Set: unknown
 */
export function thefeedRemoveItem(notificationId) {
    ThefeedRemoveItem(notificationId);
}
/**
 * No comment provided
 *
 * Hash: 0xB695E2CD0A2DA9EE | Since: 323 | API-Set: unknown
 */
export function thefeedReportLogoOff() {
    ThefeedSpsExtendWidescreenOff();
}
/**
 * No comment provided
 *
 * Hash: 0xD4438C0564490E63 | Since: 323 | API-Set: unknown
 */
export function thefeedReportLogoOn() {
    ThefeedSpsExtendWidescreenOn();
}
/**
 * No comment provided
 *
 * Hash: 0xFDD85225B2DEA55E | Since: 323 | API-Set: unknown
 */
export function thefeedResetAllParameters() {
    ThefeedResetAllParameters();
}
/**
 * No comment provided
 *
 * Hash: 0xE1CD1E48E025E661 | Since: 323 | API-Set: unknown
 */
export function thefeedResume() {
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
 * Hash: 0x92F0DA1E27DB96DC | Since: 323 | API-Set: unknown
 */
export function thefeedSetBackgroundColorForNextPost(hudColorIndex) {
    ThefeedSetNextPostBackgroundColor(hudColorIndex);
}
/**
 * Related to notification color flashing, setting count to 0 invalidates a `THEFEED_SET_RGBA_PARAMETER_FOR_NEXT_MESSAGE` call for the target notification.
 *
 * Hash: 0x17AD8C9706BDD88A | Since: 323 | API-Set: unknown
 */
export function thefeedSetFlashDurationParameterForNextMessage(count) {
    ThefeedSetAnimpostfxCount(count);
}
/**
 * No comment provided
 *
 * Hash: 0x17430B918701C342 | Since: 323 | API-Set: unknown
 */
export function thefeedSetRgbaParameterForNextMessage(red, green, blue, alpha) {
    ThefeedSetAnimpostfxColor(red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0x55598D21339CB998 | Since: 323 | API-Set: unknown
 */
export function thefeedSetScriptedMenuHeight(pos) {
    ThefeedSetScriptedMenuHeight(pos);
}
/**
 * No comment provided
 *
 * Hash: 0xBAE4F9B97CD43B30 | Since: 323 | API-Set: unknown
 */
export function thefeedSetSnapFeedItemPositions() {
    ThefeedSetFlushAnimpostfx(false);
}
/**
 * No comment provided
 *
 * Hash: 0x4A0C7C9BB10ABB36 | Since: 323 | API-Set: unknown
 */
export function thefeedSetVibrateParameterForNextMessage(toggle) {
    ThefeedSetAnimpostfxSound(toggle);
}
/**
 * Displays loading screen tips, requires `THEFEED_AUTO_POST_GAMETIPS_ON` to be called beforehand.
 *
 * Hash: 0x15CFA549788D35EF | Since: 463 | API-Set: unknown
 */
export function thefeedShow() {
    ThefeedDisplayLoadingScreenTips();
}
/**
 * Used in the native scripts to reference "GET_PEDHEADSHOT_TXD_STRING" and "CHAR_DEFAULT".
 *
 * Hash: 0x317EBA71D7543F52 | Since: 323 | API-Set: unknown
 */
export function thefeedUpdateItemTexture(txdString1, txnString1, txdString2, txnString2) {
    ThefeedUpdateItemTexture(txdString1, txnString1, txdString2, txnString2);
}
/**
 * No comment provided
 *
 * Hash: 0x6AFDFB93754950C7 | Since: 323 | API-Set: unknown
 */
export function toggleStealthRadar(toggle) {
    ToggleStealthRadar(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x72DD432F3CDFC0EE | Since: 323 | API-Set: unknown
 */
export function triggerSonarBlip(pos, radius) {
    TriggerSonarBlip(pos.x, pos.y, pos.z, radius, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8183455E16C42E3A | Since: 323 | API-Set: unknown
 */
export function unlockMinimapAngle() {
    UnlockMinimapAngle();
}
/**
 * No comment provided
 *
 * Hash: 0x3E93E06DB8EF1F30 | Since: 323 | API-Set: unknown
 */
export function unlockMinimapPosition() {
    UnlockMinimapPosition();
}
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0xD2049635DEB9C375 | Since: 323 | API-Set: unknown
 */
export function updateRadarZoomToBlip() {
    Citizen.invokeNative('0xD2049635DEB9C375');
}
/**
 * Related to displaying cash on the HUD
 * `Always called before HUD::CHANGE_FAKE_MP_CASH in decompiled scripts`
 *
 * Hash: 0x170F541E1CADD1DE | Since: 323 | API-Set: unknown
 */
export function useFakeMpCash(toggle) {
    UseFakeMpCash(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0C698D8F099174C7 | Since: 1180 | API-Set: unknown
 */
export function useVehicleTargetingReticule() {
    Citizen.invokeNative('0x0C698D8F099174C7', undefined);
}
/**
 * Applies to new eBlipParams _BLIP_CHANGE_46* and _BLIP_CHANGE_47*
 *
 * Hash: 0x25D984CFB64ED6DE | Since: 3095 | API-Set: unknown
 */
export function setBlipGpsRouteDisplayDistance(blip, blipChangeParam46, blipChangeParam47) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    Citizen.invokeNative('0x25D984CFB64ED6DE', _blip, blipChangeParam46, blipChangeParam47);
}
/**
 * No comment provided
 *
 * Hash: 0x35CCE12EAECB4A51 | Since: 2944 | API-Set: unknown
 */
export function setPauseExteriorRenderingWhileInInterior() {
    Citizen.invokeNative('0x35CCE12EAECB4A51');
}
/**
 * No comment provided
 *
 * Hash: 0xF6865E26067B708C | Since: 3407 | API-Set: unknown
 */
export function showPurchaseInstructionalButton(toggle) {
    Citizen.invokeNative('0xF6865E26067B708C', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1BC0EA2912708625 | Since: 3095 | API-Set: unknown
 */
export function useVehicleTargetingReticuleOnVehicles(enable) {
    Citizen.invokeNative('0x1BC0EA2912708625', enable);
}
