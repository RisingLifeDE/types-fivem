/**
 * No comment provided
 *
 * Hash: 0xF30980718C8ED876 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverBasketAddItem(quantity: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xE1A0450ED46A7812 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverBasketApplyServerData(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xFA336E7F40C0A0D0 | Since: 372 | API-Set: unknown
 */
export declare function netGameserverBasketEnd(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA65568121DF2EA26 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverBasketIsActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x27F76CC6C55AD30E | Since: 323 | API-Set: unknown
 */
export declare function netGameserverBasketIsFull(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x279F08B1A4B29B7E | Since: 323 | API-Set: unknown
 */
export declare function netGameserverBasketStart(categoryHash: number | string, actionHash: number | string, flags: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x3C5FD37B5499582E | Since: 323 | API-Set: unknown
 */
export declare function netGameserverBeginService(categoryHash: number | string, itemHash: number | string, actionTypeHash: number | string, value: number, flags: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x3C4487461E9B0DCB | Since: 323 | API-Set: unknown
 */
export declare function netGameserverCatalogIsValid(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBD4D7EAF8A30F637 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverCatalogItemIsValid(name: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x247F0F73A182EA0B | Since: 323 | API-Set: unknown
 */
export declare function netGameserverCatalogItemKeyIsValid(hash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4B64CD6D18474126 | Since: 3570 | API-Set: unknown
 */
export declare function netGameserverCheckoutPending(transactionId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x39BE7CEA8D9CC8E6 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverCheckoutStart(transactionId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x74A0FD0688F1EE45 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverClearSession(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x51F1A8E48C3D2F6D | Since: 323 | API-Set: unknown
 */
export declare function netGameserverDeleteCharacter(slot: number, transfer: boolean, reason: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0A6D923DFFC9BD89 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverDeleteCharacterGetStatus(): number;
/**
 * No comment provided
 *
 * Hash: 0x112CEF1615A1139F | Since: 323 | API-Set: unknown
 */
export declare function netGameserverDeleteSetTelemetryNonceSeed(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE2A99A9B524BEFFF | Since: 323 | API-Set: unknown
 */
export declare function netGameserverEndService(transactionId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x85F6C9ABA1DE2BCF | Since: 323 | API-Set: unknown
 */
export declare function netGameserverGetCatalogCloudCrc(): number;
/**
 * bool is always true in game scripts
 *
 * Hash: 0xC27009422FCCA88D | Since: 323 | API-Set: unknown
 */
export declare function netGameserverGetPrice(itemHash: number | string, categoryHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x897433D292B44130 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverGetSessionStateAndStatus(): [boolean, number, boolean];
/**
 * No comment provided
 *
 * Hash: 0xE3E5A7C64CA2C6ED | Since: 323 | API-Set: unknown
 */
export declare function netGameserverInitSession(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2B949A1E6AEC8F6A | Since: 323 | API-Set: unknown
 */
export declare function netGameserverIsCatalogCurrent(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x810E8431C0614BF9 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverIsSessionRefreshPending(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB24F0944DA203D9E | Since: 323 | API-Set: unknown
 */
export declare function netGameserverIsSessionValid(charSlot: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x357B152EF96C30B6 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverRefreshServerCatalog(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCF38DAFBB49EDE5E | Since: 323 | API-Set: unknown
 */
export declare function netGameserverRetrieveCatalogRefreshStatus(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x0395CB47B022E62C | Since: 323 | API-Set: unknown
 */
export declare function netGameserverRetrieveInitSessionStatus(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xC13C38E47EA5DF31 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverRetrieveSessionErrorCode(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x170910093218C8B9 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverRetrieveStartSessionStatus(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x2F41D51BA3BCD1F1 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverSessionApplyReceivedData(charSlot: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9507D4271988E1AE | Since: 323 | API-Set: unknown
 */
export declare function netGameserverSetTelemetryNonceSeed(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA135AC892A58FC07 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverStartSession(charSlot: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x72EB7BA9B69BF6AB | Since: 323 | API-Set: unknown
 */
export declare function netGameserverStartSessionPending(): boolean;
/**
 * Note: only one of the arguments can be set to true at a time
 *
 * Hash: 0x35A1B3E1D1315CFA | Since: 323 | API-Set: unknown
 */
export declare function netGameserverStartSessionRestart(inventory: boolean, playerbalance: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x613F125BA3BD2EB9 | Since: 372 | API-Set: unknown
 */
export declare function netGameserverTransactionInProgress(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD47A2C1BA117471D | Since: 323 | API-Set: unknown
 */
export declare function netGameserverTransferBankToWallet(charSlot: number, amount: number): boolean;
/**
 * Same as 0x350AA5EBC03D3BD2
 *
 * Hash: 0x23789E777D14CE44 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverTransferBankToWalletGetStatus(): number;
/**
 * Used to be NETWORK_SHOP_CASH_TRANSFER_SET_TELEMETRY_NONCE_SEED
 *
 * Hash: 0x498C1E05CE5F7877 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverTransferCashSetTelemetryNonceSeed(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC2F7FE5309181C7D | Since: 323 | API-Set: unknown
 */
export declare function netGameserverTransferWalletToBank(charSlot: number, amount: number): boolean;
/**
 * Same as 0x23789E777D14CE44
 *
 * Hash: 0x350AA5EBC03D3BD2 | Since: 323 | API-Set: unknown
 */
export declare function netGameserverTransferWalletToBankGetStatus(): number;
/**
 * No comment provided
 *
 * Hash: 0x7D2708796355B20B | Since: 1290 | API-Set: unknown
 */
export declare function netGameserverUseServerTransactions(): boolean;
