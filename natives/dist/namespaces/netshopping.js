/**
 * No comment provided
 *
 * Hash: 0xF30980718C8ED876 | Since: 323
 */
export function netGameserverBasketAddItem(quantity) {
    return NetGameserverBasketAddItem(quantity);
}
/**
 * No comment provided
 *
 * Hash: 0xE1A0450ED46A7812 | Since: 323
 */
export function netGameserverBasketApplyServerData() {
    return NetGameserverBasketApplyServerData(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFA336E7F40C0A0D0 | Since: 372
 */
export function netGameserverBasketEnd() {
    return NetGameserverBasketDelete();
}
/**
 * No comment provided
 *
 * Hash: 0xA65568121DF2EA26 | Since: 323
 */
export function netGameserverBasketIsActive() {
    return NetGameserverBasketEnd();
}
/**
 * No comment provided
 *
 * Hash: 0x27F76CC6C55AD30E | Since: 323
 */
export function netGameserverBasketIsFull() {
    return NetGameserverBasketIsFull();
}
/**
 * No comment provided
 *
 * Hash: 0x279F08B1A4B29B7E | Since: 323
 */
export function netGameserverBasketStart(categoryHash, actionHash, flags) {
    if (typeof categoryHash === 'string')
        categoryHash = misc.getHashKey(categoryHash);
    if (typeof actionHash === 'string')
        actionHash = misc.getHashKey(actionHash);
    return NetGameserverBasketStart(categoryHash, actionHash, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x3C5FD37B5499582E | Since: 323
 */
export function netGameserverBeginService(categoryHash, itemHash, actionTypeHash, value, flags) {
    if (typeof categoryHash === 'string')
        categoryHash = misc.getHashKey(categoryHash);
    if (typeof itemHash === 'string')
        itemHash = misc.getHashKey(itemHash);
    if (typeof actionTypeHash === 'string')
        actionTypeHash = misc.getHashKey(actionTypeHash);
    return NetGameserverBeginService(categoryHash, itemHash, actionTypeHash, value, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x3C4487461E9B0DCB | Since: 323
 */
export function netGameserverCatalogIsValid() {
    return NetGameserverCatalogIsReady();
}
/**
 * No comment provided
 *
 * Hash: 0xBD4D7EAF8A30F637 | Since: 323
 */
export function netGameserverCatalogItemIsValid(name) {
    return NetGameserverCatalogItemExists(name);
}
/**
 * No comment provided
 *
 * Hash: 0x247F0F73A182EA0B | Since: 323
 */
export function netGameserverCatalogItemKeyIsValid(hash) {
    if (typeof hash === 'string')
        hash = misc.getHashKey(hash);
    return NetGameserverCatalogItemExistsHash(hash);
}
/**
 * No comment provided
 *
 * Hash: 0x4B64CD6D18474126 | Since: 3570
 */
export function netGameserverCheckoutPending(transactionId) {
    return Citizen.invokeNative('0x4B64CD6D18474126', transactionId);
}
/**
 * No comment provided
 *
 * Hash: 0x39BE7CEA8D9CC8E6 | Since: 323
 */
export function netGameserverCheckoutStart(transactionId) {
    return NetGameserverCheckoutStart(transactionId);
}
/**
 * No comment provided
 *
 * Hash: 0x74A0FD0688F1EE45 | Since: 323
 */
export function netGameserverClearSession() {
    return Citizen.invokeNative('0x74A0FD0688F1EE45', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x51F1A8E48C3D2F6D | Since: 323
 */
export function netGameserverDeleteCharacter(slot, transfer, reason) {
    if (typeof reason === 'string')
        reason = misc.getHashKey(reason);
    return NetGameserverDeleteCharacterSlot(slot, transfer, reason);
}
/**
 * No comment provided
 *
 * Hash: 0x0A6D923DFFC9BD89 | Since: 323
 */
export function netGameserverDeleteCharacterGetStatus() {
    return NetGameserverDeleteCharacterSlotGetStatus();
}
/**
 * No comment provided
 *
 * Hash: 0x112CEF1615A1139F | Since: 323
 */
export function netGameserverDeleteSetTelemetryNonceSeed() {
    return NetGameserverDeleteSetTelemetryNonceSeed();
}
/**
 * No comment provided
 *
 * Hash: 0xE2A99A9B524BEFFF | Since: 323
 */
export function netGameserverEndService(transactionId) {
    return NetGameserverEndService(transactionId);
}
/**
 * No comment provided
 *
 * Hash: 0x85F6C9ABA1DE2BCF | Since: 323
 */
export function netGameserverGetCatalogCloudCrc() {
    return Citizen.invokeNative('0x85F6C9ABA1DE2BCF');
}
/**
 * bool is always true in game scripts
 *
 * Hash: 0xC27009422FCCA88D | Since: 323
 */
export function netGameserverGetPrice(itemHash, categoryHash) {
    if (typeof itemHash === 'string')
        itemHash = misc.getHashKey(itemHash);
    if (typeof categoryHash === 'string')
        categoryHash = misc.getHashKey(categoryHash);
    return NetGameserverGetPrice(itemHash, categoryHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x897433D292B44130 | Since: 323
 */
export function netGameserverGetSessionStateAndStatus() {
    return NetGameserverGetTransactionManagerData();
}
/**
 * No comment provided
 *
 * Hash: 0xE3E5A7C64CA2C6ED | Since: 323
 */
export function netGameserverInitSession() {
    return Citizen.invokeNative('0xE3E5A7C64CA2C6ED');
}
/**
 * No comment provided
 *
 * Hash: 0x2B949A1E6AEC8F6A | Since: 323
 */
export function netGameserverIsCatalogCurrent() {
    return NetGameserverIsCatalogValid();
}
/**
 * No comment provided
 *
 * Hash: 0x810E8431C0614BF9 | Since: 323
 */
export function netGameserverIsSessionRefreshPending() {
    return NetGameserverIsSessionRefreshPending();
}
/**
 * No comment provided
 *
 * Hash: 0xB24F0944DA203D9E | Since: 323
 */
export function netGameserverIsSessionValid(charSlot) {
    return NetGameserverIsSessionValid(charSlot);
}
/**
 * No comment provided
 *
 * Hash: 0x357B152EF96C30B6 | Since: 323
 */
export function netGameserverRefreshServerCatalog() {
    return Citizen.invokeNative('0x357B152EF96C30B6');
}
/**
 * No comment provided
 *
 * Hash: 0xCF38DAFBB49EDE5E | Since: 323
 */
export function netGameserverRetrieveCatalogRefreshStatus() {
    return NetGameserverGetCatalogState();
}
/**
 * No comment provided
 *
 * Hash: 0x0395CB47B022E62C | Since: 323
 */
export function netGameserverRetrieveInitSessionStatus() {
    return Citizen.invokeNative('0x0395CB47B022E62C');
}
/**
 * No comment provided
 *
 * Hash: 0xC13C38E47EA5DF31 | Since: 323
 */
export function netGameserverRetrieveSessionErrorCode() {
    return Citizen.invokeNative('0xC13C38E47EA5DF31');
}
/**
 * No comment provided
 *
 * Hash: 0x170910093218C8B9 | Since: 323
 */
export function netGameserverRetrieveStartSessionStatus() {
    return Citizen.invokeNative('0x170910093218C8B9');
}
/**
 * No comment provided
 *
 * Hash: 0x2F41D51BA3BCD1F1 | Since: 323
 */
export function netGameserverSessionApplyReceivedData(charSlot) {
    return NetGameserverSessionApplyReceivedData(charSlot);
}
/**
 * No comment provided
 *
 * Hash: 0x9507D4271988E1AE | Since: 323
 */
export function netGameserverSetTelemetryNonceSeed() {
    return NetGameserverSetTelemetryNonceSeed(0);
}
/**
 * No comment provided
 *
 * Hash: 0xA135AC892A58FC07 | Since: 323
 */
export function netGameserverStartSession(charSlot) {
    return NetGameserverStartSession(charSlot);
}
/**
 * No comment provided
 *
 * Hash: 0x72EB7BA9B69BF6AB | Since: 323
 */
export function netGameserverStartSessionPending() {
    return Citizen.invokeNative('0x72EB7BA9B69BF6AB');
}
/**
 * Note: only one of the arguments can be set to true at a time
 *
 * Hash: 0x35A1B3E1D1315CFA | Since: 323
 */
export function netGameserverStartSessionRestart(inventory, playerbalance) {
    return NetGameserverGetBalance(inventory, playerbalance);
}
/**
 * No comment provided
 *
 * Hash: 0x613F125BA3BD2EB9 | Since: 372
 */
export function netGameserverTransactionInProgress() {
    return Citizen.invokeNative('0x613F125BA3BD2EB9');
}
/**
 * No comment provided
 *
 * Hash: 0xD47A2C1BA117471D | Since: 323
 */
export function netGameserverTransferBankToWallet(charSlot, amount) {
    return NetGameserverTransferBankToWallet(charSlot, amount);
}
/**
 * Same as 0x350AA5EBC03D3BD2
 *
 * Hash: 0x23789E777D14CE44 | Since: 323
 */
export function netGameserverTransferBankToWalletGetStatus() {
    return NetGameserverTransferCashGetStatus();
}
/**
 * Used to be NETWORK_SHOP_CASH_TRANSFER_SET_TELEMETRY_NONCE_SEED
 *
 * Hash: 0x498C1E05CE5F7877 | Since: 323
 */
export function netGameserverTransferCashSetTelemetryNonceSeed() {
    return NetGameserverTransferCashSetTelemetryNonceSeed();
}
/**
 * No comment provided
 *
 * Hash: 0xC2F7FE5309181C7D | Since: 323
 */
export function netGameserverTransferWalletToBank(charSlot, amount) {
    return NetGameserverTransferWalletToBank(charSlot, amount);
}
/**
 * Same as 0x23789E777D14CE44
 *
 * Hash: 0x350AA5EBC03D3BD2 | Since: 323
 */
export function netGameserverTransferWalletToBankGetStatus() {
    return NetGameserverTransferCashGetStatus2();
}
/**
 * No comment provided
 *
 * Hash: 0x7D2708796355B20B | Since: 1290
 */
export function netGameserverUseServerTransactions() {
    return NetGameserverUseServerTransactions();
}
