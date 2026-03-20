import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0x0F6F1EBBC4E1D5E6 | Since: 323 | API-Set: unknown
 */
export function bgDoesLaunchParamExist(scriptIndex: number): boolean {
    return Citizen.invokeNative('0x0F6F1EBBC4E1D5E6', scriptIndex, undefined);
}

/**
 * Deletes the given context from the background scripts context map.
 * 
 * Hash: 0xDC2BACD920D0A0DD | Since: 323 | API-Set: unknown
 */
export function bgEndContext(contextName: string): void {
    BgEndContext(contextName);
}

/**
 * Hashed version of BG_END_CONTEXT.
 * 
 * Hash: 0x107E5CC7CA942BC1 | Since: 323 | API-Set: unknown
 */
export function bgEndContextHash(contextHash: number | string): void {
    if (typeof contextHash === 'string') contextHash = game.getHashKey(contextHash)
    BgEndContextHash(contextHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x22E21FBCFC88C149 | Since: 323 | API-Set: unknown
 */
export function bgGetLaunchParamValue(scriptIndex: number): number {
    return Citizen.invokeNative('0x22E21FBCFC88C149', scriptIndex, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x829CD22E043A2577 | Since: 323 | API-Set: unknown
 */
export function bgGetIdFromNameHash(p0: number | string): number {
    if (typeof p0 === 'string') p0 = game.getHashKey(p0)
    return Citizen.invokeNative('0x829CD22E043A2577', p0);
}

/**
 * Returns true if bit 0 in GtaThread+0x154 is set.
 * 
 * Hash: 0x836B62713E0534CA | Since: 323 | API-Set: unknown
 */
export function bgIsExitflagSet(): boolean {
    return Citizen.invokeNative('0x836B62713E0534CA');
}

/**
 * Sets bit 1 in GtaThread+0x154
 * 
 * Hash: 0x760910B49D2B98EA | Since: 323 | API-Set: unknown
 */
export function bgSetExitflagResponse(): void {
    Citizen.invokeNative('0x760910B49D2B98EA');
}

/**
 * Inserts the given context into the background scripts context map.
 * 
 * Hash: 0x9D5A25BADB742ACD | Since: 323 | API-Set: unknown
 */
export function bgStartContext(contextName: string): void {
    BgStartContext(contextName);
}

/**
 * Hashed version of BG_START_CONTEXT.
 * 
 * Hash: 0x75B18E49607874C7 | Since: 323 | API-Set: unknown
 */
export function bgStartContextHash(contextHash: number | string): void {
    if (typeof contextHash === 'string') contextHash = game.getHashKey(contextHash)
    BgStartContextHash(contextHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xB1577667C3708F9B | Since: 323 | API-Set: unknown
 */
export function commitToLoadingscreenSelction(): void {
    LockLoadingScreenButtons();
}

/**
 * No comment provided
 * 
 * Hash: 0xFC04745FBE67C19A | Since: 323 | API-Set: unknown
 */
export function doesExist(scriptName: string): boolean {
    return DoesScriptExist(scriptName);
}

/**
 * No comment provided
 * 
 * Hash: 0xF86AA3C56BA31381 | Since: 323 | API-Set: unknown
 */
export function doesWithNameHashExist(scriptHash: number | string): boolean {
    if (typeof scriptHash === 'string') scriptHash = game.getHashKey(scriptHash)
    return DoesScriptWithNameHashExist(scriptHash);
}

/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
 * 
 * Hash: 0xD8F66A3A60C62153 | Since: 323 | API-Set: unknown
 */
export function getEventAtIndex(eventGroup: number, eventIndex: number): number {
    return GetEventAtIndex(eventGroup, eventIndex);
}

/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
 * 
 * Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).
 * 
 * Hash: 0x2902843FCD2B2D79 | Since: 323 | API-Set: unknown
 */
export function getEventData(eventGroup: number, eventIndex: number, eventDataSize: number): [boolean, any] {
    return GetEventData(eventGroup, eventIndex, eventDataSize);
}

/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
 * 
 * Hash: 0x936E6168A9BCEDB5 | Since: 323 | API-Set: unknown
 */
export function getEventExists(eventGroup: number, eventIndex: number): boolean {
    return GetEventExists(eventGroup, eventIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A1C8B1738FFE87E | Since: 323 | API-Set: unknown
 */
export function getHashOfThisName(): number {
    return GetHashOfThisScriptName();
}

/**
 * No comment provided
 * 
 * Hash: 0xC30338E8088E2E21 | Since: 323 | API-Set: unknown
 */
export function getIdOfThisThread(): number {
    return GetIdOfThisThread();
}

/**
 * No comment provided
 * 
 * Hash: 0x05A42BA9FC8DA96B | Since: 323 | API-Set: unknown
 */
export function getNameOfWithThisId(threadId: number): string {
    return GetNameOfThread(threadId);
}

/**
 * No comment provided
 * 
 * Hash: 0x18C1270EA7F199BC | Since: 323 | API-Set: unknown
 */
export function getNoLoadingScreen(): boolean {
    return GetNoLoadingScreen();
}

/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
 * 
 * Hash: 0x5F92A689A06620AA | Since: 323 | API-Set: unknown
 */
export function getNumberOfEvents(eventGroup: number): number {
    return GetNumberOfEvents(eventGroup);
}

/**
 * Gets the number of instances of the specified script is currently running.
 * 
 * Actually returns numRefs - 1.
 * if (program)
 * `v3 = rage::scrProgram::GetNumRefs(program) - 1;`
 * return v3;
 * 
 * Hash: 0x2C83A9DA6BFFC4F9 | Since: 323 | API-Set: unknown
 */
export function getNumberOfThreadsRunningTheWithThisHash(scriptHash: number | string): number {
    if (typeof scriptHash === 'string') scriptHash = game.getHashKey(scriptHash)
    return GetNumberOfReferencesOfScriptWithNameHash(scriptHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x442E0A7EDE4A738A | Since: 323 | API-Set: unknown
 */
export function getThisName(): string {
    return GetThisScriptName();
}

/**
 * Returns if a script has been loaded into the game. Used to see if a script was loaded after requesting.
 * 
 * Hash: 0xE6CC9F3BA0FB9EF1 | Since: 323 | API-Set: unknown
 */
export function hasLoaded(scriptName: string): boolean {
    return HasScriptLoaded(scriptName);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F0F0C783EB16C04 | Since: 323 | API-Set: unknown
 */
export function hasWithNameHashLoaded(scriptHash: number | string): boolean {
    if (typeof scriptHash === 'string') scriptHash = game.getHashKey(scriptHash)
    return HasScriptWithNameHashLoaded(scriptHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x46E9AE36D8FA6417 | Since: 323 | API-Set: unknown
 */
export function isThreadActive(threadId: number): boolean {
    return IsThreadActive(threadId);
}

/**
 * No comment provided
 * 
 * Hash: 0x6EB5F71AA68F2E8E | Since: 323 | API-Set: unknown
 */
export function request(scriptName: string): void {
    RequestScript(scriptName);
}

/**
 * formerly _REQUEST_STREAMED_SCRIPT
 * 
 * Hash: 0xD62A67D26D9653E6 | Since: 323 | API-Set: unknown
 */
export function requestWithNameHash(scriptHash: number | string): void {
    if (typeof scriptHash === 'string') scriptHash = game.getHashKey(scriptHash)
    RequestScriptWithNameHash(scriptHash);
}

/**
 * If the function returns 0, the end of the iteration has been reached.
 * 
 * Hash: 0x30B4FA1C82DD4B9F | Since: 323 | API-Set: unknown
 */
export function threadIteratorGetNextThreadId(): number {
    return ScriptThreadIteratorGetNextThreadId();
}

/**
 * Starts a new iteration of the current threads.
 * Call this first, then SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID (0x30B4FA1C82DD4B9F)
 * 
 * Hash: 0xDADFADA5A20143A8 | Since: 323 | API-Set: unknown
 */
export function threadIteratorReset(): void {
    ScriptThreadIteratorReset();
}

/**
 * No comment provided
 * 
 * Hash: 0x5262CC1995D07E09 | Since: 323 | API-Set: unknown
 */
export function setNoLoadingScreen(toggle: boolean): void {
    SetNoLoadingScreen(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xC90D2DCACD56184C | Since: 323 | API-Set: unknown
 */
export function setAsNoLongerNeeded(scriptName: string): void {
    SetScriptAsNoLongerNeeded(scriptName);
}

/**
 * No comment provided
 * 
 * Hash: 0xC5BC038960E9DB27 | Since: 323 | API-Set: unknown
 */
export function setWithNameHashAsNoLongerNeeded(scriptHash: number | string): void {
    if (typeof scriptHash === 'string') scriptHash = game.getHashKey(scriptHash)
    SetScriptWithNameHashAsNoLongerNeeded(scriptHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x078EBE9809CCD637 | Since: 323 | API-Set: unknown
 */
export function shutdownLoadingScreen(): void {
    ShutdownLoadingScreen();
}

/**
 * No comment provided
 * 
 * Hash: 0x1090044AD1DA76FA | Since: 323 | API-Set: unknown
 */
export function terminateThisThread(): void {
    TerminateThisThread();
}

/**
 * No comment provided
 * 
 * Hash: 0xC8B189ED9138BCD4 | Since: 323 | API-Set: unknown
 */
export function terminateThread(threadId: number): void {
    TerminateThread(threadId);
}

/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
 * 
 * Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).
 * 
 * playerBits (also known as playersToBroadcastTo) is a bitset that indicates which players this event should be sent to. In order to send the event to specific players only, use (1 << playerIndex). Set all bits if it should be broadcast to all players.
 * 
 * Hash: 0x5AE99C571D5BBE5D | Since: 323 | API-Set: unknown
 */
export function triggerEvent(eventGroup: number, eventDataSize: number, playerBits: number): any {
    return TriggerScriptEvent(eventGroup, eventDataSize, playerBits);
}

/**
 * New variant of SEND_TU_SCRIPT_EVENT that automatically initializes the event data header.
 * See TRIGGER_SCRIPT_EVENT for more info.
 * 
 * Hash: 0x71A6F836422FDD2B | Since: 3095 | API-Set: unknown
 */
export function sendTuEventNew(eventGroup: number, eventDataSize: number, playerBits: number, eventType: number | string): any {
    if (typeof eventType === 'string') eventType = game.getHashKey(eventType)
    return Citizen.invokeNative('0x71A6F836422FDD2B', eventGroup, eventDataSize, playerBits, eventType);
}

