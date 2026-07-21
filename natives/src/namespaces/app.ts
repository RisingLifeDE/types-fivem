import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0x5FE1DF3342DB7DBA | Since: unknown
 */
export function clearBlock(): void {
    AppClearBlock();
}

/**
 * No comment provided
 * 
 * Hash: 0xE41C65E07A5F05FC | Since: unknown
 */
export function closeApp(): void {
    AppCloseApp();
}

/**
 * No comment provided
 * 
 * Hash: 0xE8E3FCF72EAC0EF8 | Since: unknown
 */
export function closeBlock(): void {
    AppCloseBlock();
}

/**
 * No comment provided
 * 
 * Hash: 0x846AA8E7D55EE5B6 | Since: unknown
 */
export function dataValid(): boolean {
    return AppDataValid();
}

/**
 * No comment provided
 * 
 * Hash: 0x44151AEA95C8A003 | Since: unknown
 */
export function deleteAppData(appName: string): boolean {
    return AppDeleteAppData(appName);
}

/**
 * No comment provided
 * 
 * Hash: 0xC9853A2BE3DED1A6 | Since: unknown
 */
export function getDeletedFileStatus(): number {
    return AppGetDeletedFileStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0x1514FB24C02C2322 | Since: unknown
 */
export function getFloat(property: string): number {
    return AppGetFloat(property);
}

/**
 * No comment provided
 * 
 * Hash: 0xD3A58A12C77D9D4B | Since: unknown
 */
export function getInt(property: string): number {
    return AppGetInt(property);
}

/**
 * No comment provided
 * 
 * Hash: 0x749B023950D2311C | Since: unknown
 */
export function getString(property: string): string {
    return AppGetString(property);
}

/**
 * No comment provided
 * 
 * Hash: 0x71EEE69745088DA0 | Since: unknown
 */
export function hasLinkedSocialClubAccount(): boolean {
    return AppHasLinkedSocialClubAccount();
}

/**
 * No comment provided
 * 
 * Hash: 0xCA52279A7271517F | Since: unknown
 */
export function hasSyncedData(appName: string): boolean {
    return AppHasSyncedData(appName);
}

/**
 * No comment provided
 * 
 * Hash: 0x95C5D356CDA6E85F | Since: unknown
 */
export function saveData(): void {
    AppSaveData();
}

/**
 * Called in the gamescripts like:
 * `APP::APP_SET_APP("car");`
 * `APP::APP_SET_APP("dog");`
 * 
 * Hash: 0xCFD0406ADAF90D2B | Since: unknown
 */
export function setApp(appName: string): void {
    AppSetApp(appName);
}

/**
 * No comment provided
 * 
 * Hash: 0x262AB456A3D21F93 | Since: unknown
 */
export function setBlock(blockName: string): void {
    AppSetBlock(blockName);
}

/**
 * No comment provided
 * 
 * Hash: 0x25D7687C68E0DAA4 | Since: unknown
 */
export function setFloat(property: string, value: number): void {
    AppSetFloat(property, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x607E8E3D3E4F9611 | Since: unknown
 */
export function setInt(property: string, value: number): void {
    AppSetInt(property, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FF2FCEC4B7721B4 | Since: unknown
 */
export function setString(property: string, value: string): void {
    AppSetString(property, value);
}

