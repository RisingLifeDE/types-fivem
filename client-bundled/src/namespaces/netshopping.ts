import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0xF30980718C8ED876 | Since: 323 | API-Set: unknown
 */
export function netGameserverBasketAddItem(quantity: number): [boolean, any] {
    return NetGameserverBasketAddItem(quantity);
}

/**
 * No comment provided
 * 
 * Hash: 0xE1A0450ED46A7812 | Since: 323 | API-Set: unknown
 */
export function netGameserverBasketApplyServerData(): [boolean, any] {
    return NetGameserverBasketApplyServerData(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA336E7F40C0A0D0 | Since: 372 | API-Set: unknown
 */
export function netGameserverBasketEnd(): boolean {
    return NetGameserverBasketDelete();
}

/**
 * No comment provided
 * 
 * Hash: 0xA65568121DF2EA26 | Since: 323 | API-Set: unknown
 */
export function netGameserverBasketIsActive(): boolean {
    return NetGameserverBasketEnd();
}

/**
 * No comment provided
 * 
 * Hash: 0x27F76CC6C55AD30E | Since: 323 | API-Set: unknown
 */
export function netGameserverBasketIsFull(): boolean {
    return NetGameserverBasketIsFull();
}

/**
 * No comment provided
 * 
 * Hash: 0x279F08B1A4B29B7E | Since: 323 | API-Set: unknown
 */
export function netGameserverBasketStart(categoryHash: number | string, actionHash: number | string, flags: number): [boolean, number] {
    if (typeof categoryHash === 'string') categoryHash = GetHashKey(categoryHash)
    if (typeof actionHash === 'string') actionHash = GetHashKey(actionHash)
    return NetGameserverBasketStart(categoryHash, actionHash, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x3C5FD37B5499582E | Since: 323 | API-Set: unknown
 */
export function netGameserverBeginService(categoryHash: number | string, itemHash: number | string, actionTypeHash: number | string, value: number, flags: number): [boolean, number] {
    if (typeof categoryHash === 'string') categoryHash = GetHashKey(categoryHash)
    if (typeof itemHash === 'string') itemHash = GetHashKey(itemHash)
    if (typeof actionTypeHash === 'string') actionTypeHash = GetHashKey(actionTypeHash)
    return NetGameserverBeginService(categoryHash, itemHash, actionTypeHash, value, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x3C4487461E9B0DCB | Since: 323 | API-Set: unknown
 */
export function netGameserverCatalogIsValid(): boolean {
    return NetGameserverCatalogIsReady();
}

/**
 * No comment provided
 * 
 * Hash: 0xBD4D7EAF8A30F637 | Since: 323 | API-Set: unknown
 */
export function netGameserverCatalogItemIsValid(name: string): boolean {
    return NetGameserverCatalogItemExists(name);
}

/**
 * No comment provided
 * 
 * Hash: 0x247F0F73A182EA0B | Since: 323 | API-Set: unknown
 */
export function netGameserverCatalogItemKeyIsValid(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return NetGameserverCatalogItemExistsHash(hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x4B64CD6D18474126 | Since: 3570 | API-Set: unknown
 */
export function netGameserverCheckoutPending(transactionId: number): boolean {
    return Citizen.invokeNative('0x4B64CD6D18474126', transactionId);
}

/**
 * No comment provided
 * 
 * Hash: 0x39BE7CEA8D9CC8E6 | Since: 323 | API-Set: unknown
 */
export function netGameserverCheckoutStart(transactionId: number): boolean {
    return NetGameserverCheckoutStart(transactionId);
}

/**
 * No comment provided
 * 
 * Hash: 0x74A0FD0688F1EE45 | Since: 323 | API-Set: unknown
 */
export function netGameserverClearSession(): boolean {
    return Citizen.invokeNative('0x74A0FD0688F1EE45', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x51F1A8E48C3D2F6D | Since: 323 | API-Set: unknown
 */
export function netGameserverDeleteCharacter(slot: number, transfer: boolean, reason: number | string): boolean {
    if (typeof reason === 'string') reason = GetHashKey(reason)
    return NetGameserverDeleteCharacterSlot(slot, transfer, reason);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A6D923DFFC9BD89 | Since: 323 | API-Set: unknown
 */
export function netGameserverDeleteCharacterGetStatus(): number {
    return NetGameserverDeleteCharacterSlotGetStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0x112CEF1615A1139F | Since: 323 | API-Set: unknown
 */
export function netGameserverDeleteSetTelemetryNonceSeed(): boolean {
    return NetGameserverDeleteSetTelemetryNonceSeed();
}

/**
 * No comment provided
 * 
 * Hash: 0xE2A99A9B524BEFFF | Since: 323 | API-Set: unknown
 */
export function netGameserverEndService(transactionId: number): boolean {
    return NetGameserverEndService(transactionId);
}

/**
 * No comment provided
 * 
 * Hash: 0x85F6C9ABA1DE2BCF | Since: 323 | API-Set: unknown
 */
export function netGameserverGetCatalogCloudCrc(): number {
    return Citizen.invokeNative('0x85F6C9ABA1DE2BCF');
}

/**
 * bool is always true in game scripts
 * 
 * Hash: 0xC27009422FCCA88D | Since: 323 | API-Set: unknown
 */
export function netGameserverGetPrice(itemHash: number | string, categoryHash: number | string): number {
    if (typeof itemHash === 'string') itemHash = GetHashKey(itemHash)
    if (typeof categoryHash === 'string') categoryHash = GetHashKey(categoryHash)
    return NetGameserverGetPrice(itemHash, categoryHash, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x897433D292B44130 | Since: 323 | API-Set: unknown
 */
export function netGameserverGetSessionStateAndStatus(): [boolean, number, boolean] {
    return NetGameserverGetTransactionManagerData();
}

/**
 * No comment provided
 * 
 * Hash: 0xE3E5A7C64CA2C6ED | Since: 323 | API-Set: unknown
 */
export function netGameserverInitSession(): boolean {
    return Citizen.invokeNative('0xE3E5A7C64CA2C6ED');
}

/**
 * No comment provided
 * 
 * Hash: 0x2B949A1E6AEC8F6A | Since: 323 | API-Set: unknown
 */
export function netGameserverIsCatalogCurrent(): boolean {
    return NetGameserverIsCatalogValid();
}

/**
 * No comment provided
 * 
 * Hash: 0x810E8431C0614BF9 | Since: 323 | API-Set: unknown
 */
export function netGameserverIsSessionRefreshPending(): boolean {
    return NetGameserverIsSessionRefreshPending();
}

/**
 * No comment provided
 * 
 * Hash: 0xB24F0944DA203D9E | Since: 323 | API-Set: unknown
 */
export function netGameserverIsSessionValid(charSlot: number): boolean {
    return NetGameserverIsSessionValid(charSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x357B152EF96C30B6 | Since: 323 | API-Set: unknown
 */
export function netGameserverRefreshServerCatalog(): boolean {
    return Citizen.invokeNative('0x357B152EF96C30B6');
}

/**
 * No comment provided
 * 
 * Hash: 0xCF38DAFBB49EDE5E | Since: 323 | API-Set: unknown
 */
export function netGameserverRetrieveCatalogRefreshStatus(): [boolean, number] {
    return NetGameserverGetCatalogState();
}

/**
 * No comment provided
 * 
 * Hash: 0x0395CB47B022E62C | Since: 323 | API-Set: unknown
 */
export function netGameserverRetrieveInitSessionStatus(): [boolean, number] {
    return Citizen.invokeNative('0x0395CB47B022E62C');
}

/**
 * No comment provided
 * 
 * Hash: 0xC13C38E47EA5DF31 | Since: 323 | API-Set: unknown
 */
export function netGameserverRetrieveSessionErrorCode(): [boolean, number] {
    return Citizen.invokeNative('0xC13C38E47EA5DF31');
}

/**
 * No comment provided
 * 
 * Hash: 0x170910093218C8B9 | Since: 323 | API-Set: unknown
 */
export function netGameserverRetrieveStartSessionStatus(): [boolean, number] {
    return Citizen.invokeNative('0x170910093218C8B9');
}

/**
 * No comment provided
 * 
 * Hash: 0x2F41D51BA3BCD1F1 | Since: 323 | API-Set: unknown
 */
export function netGameserverSessionApplyReceivedData(charSlot: number): boolean {
    return NetGameserverSessionApplyReceivedData(charSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x9507D4271988E1AE | Since: 323 | API-Set: unknown
 */
export function netGameserverSetTelemetryNonceSeed(): boolean {
    return NetGameserverSetTelemetryNonceSeed(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA135AC892A58FC07 | Since: 323 | API-Set: unknown
 */
export function netGameserverStartSession(charSlot: number): boolean {
    return NetGameserverStartSession(charSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x72EB7BA9B69BF6AB | Since: 323 | API-Set: unknown
 */
export function netGameserverStartSessionPending(): boolean {
    return Citizen.invokeNative('0x72EB7BA9B69BF6AB');
}

/**
 * Note: only one of the arguments can be set to true at a time
 * 
 * Hash: 0x35A1B3E1D1315CFA | Since: 323 | API-Set: unknown
 */
export function netGameserverStartSessionRestart(inventory: boolean, playerbalance: boolean): boolean {
    return NetGameserverGetBalance(inventory, playerbalance);
}

/**
 * No comment provided
 * 
 * Hash: 0x613F125BA3BD2EB9 | Since: 372 | API-Set: unknown
 */
export function netGameserverTransactionInProgress(): boolean {
    return Citizen.invokeNative('0x613F125BA3BD2EB9');
}

/**
 * No comment provided
 * 
 * Hash: 0xD47A2C1BA117471D | Since: 323 | API-Set: unknown
 */
export function netGameserverTransferBankToWallet(charSlot: number, amount: number): boolean {
    return NetGameserverTransferBankToWallet(charSlot, amount);
}

/**
 * Same as 0x350AA5EBC03D3BD2
 * 
 * Hash: 0x23789E777D14CE44 | Since: 323 | API-Set: unknown
 */
export function netGameserverTransferBankToWalletGetStatus(): number {
    return NetGameserverTransferCashGetStatus();
}

/**
 * Used to be NETWORK_SHOP_CASH_TRANSFER_SET_TELEMETRY_NONCE_SEED
 * 
 * Hash: 0x498C1E05CE5F7877 | Since: 323 | API-Set: unknown
 */
export function netGameserverTransferCashSetTelemetryNonceSeed(): boolean {
    return NetGameserverTransferCashSetTelemetryNonceSeed();
}

/**
 * No comment provided
 * 
 * Hash: 0xC2F7FE5309181C7D | Since: 323 | API-Set: unknown
 */
export function netGameserverTransferWalletToBank(charSlot: number, amount: number): boolean {
    return NetGameserverTransferWalletToBank(charSlot, amount);
}

/**
 * Same as 0x23789E777D14CE44
 * 
 * Hash: 0x350AA5EBC03D3BD2 | Since: 323 | API-Set: unknown
 */
export function netGameserverTransferWalletToBankGetStatus(): number {
    return NetGameserverTransferCashGetStatus2();
}

/**
 * No comment provided
 * 
 * Hash: 0x7D2708796355B20B | Since: 1290 | API-Set: unknown
 */
export function netGameserverUseServerTransactions(): boolean {
    return NetGameserverUseServerTransactions();
}

