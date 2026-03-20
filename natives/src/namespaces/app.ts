import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0x5FE1DF3342DB7DBA | Since: 323
 */
export function clearBlock(): void {
    AppClearBlock();
}

/**
 * No comment provided
 * 
 * Hash: 0xE41C65E07A5F05FC | Since: 323
 */
export function closeApp(): void {
    AppCloseApp();
}

/**
 * No comment provided
 * 
 * Hash: 0xE8E3FCF72EAC0EF8 | Since: 323
 */
export function closeBlock(): void {
    AppCloseBlock();
}

/**
 * No comment provided
 * 
 * Hash: 0x846AA8E7D55EE5B6 | Since: 323
 */
export function dataValid(): boolean {
    return AppDataValid();
}

/**
 * No comment provided
 * 
 * Hash: 0x44151AEA95C8A003 | Since: 323
 */
export function deleteAppData(appName: string): boolean {
    return AppDeleteAppData(appName);
}

/**
 * No comment provided
 * 
 * Hash: 0xC9853A2BE3DED1A6 | Since: 323
 */
export function getDeletedFileStatus(): number {
    return AppGetDeletedFileStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0x1514FB24C02C2322 | Since: 323
 */
export function getFloat(property: string): number {
    return AppGetFloat(property);
}

/**
 * No comment provided
 * 
 * Hash: 0xD3A58A12C77D9D4B | Since: 323
 */
export function getInt(property: string): number {
    return AppGetInt(property);
}

/**
 * No comment provided
 * 
 * Hash: 0x749B023950D2311C | Since: 323
 */
export function getString(property: string): string {
    return AppGetString(property);
}

/**
 * No comment provided
 * 
 * Hash: 0x71EEE69745088DA0 | Since: 323
 */
export function hasLinkedSocialClubAccount(): boolean {
    return AppHasLinkedSocialClubAccount();
}

/**
 * No comment provided
 * 
 * Hash: 0xCA52279A7271517F | Since: 323
 */
export function hasSyncedData(appName: string): boolean {
    return AppHasSyncedData(appName);
}

/**
 * No comment provided
 * 
 * Hash: 0x95C5D356CDA6E85F | Since: 323
 */
export function saveData(): void {
    AppSaveData();
}

/**
 * Called in the gamescripts like:
 * `APP::APP_SET_APP("car");`
 * `APP::APP_SET_APP("dog");`
 * 
 * Hash: 0xCFD0406ADAF90D2B | Since: 323
 */
export function setApp(appName: string): void {
    AppSetApp(appName);
}

/**
 * No comment provided
 * 
 * Hash: 0x262AB456A3D21F93 | Since: 323
 */
export function setBlock(blockName: string): void {
    AppSetBlock(blockName);
}

/**
 * No comment provided
 * 
 * Hash: 0x25D7687C68E0DAA4 | Since: 323
 */
export function setFloat(property: string, value: number): void {
    AppSetFloat(property, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x607E8E3D3E4F9611 | Since: 323
 */
export function setInt(property: string, value: number): void {
    AppSetInt(property, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FF2FCEC4B7721B4 | Since: 323
 */
export function setString(property: string, value: string): void {
    AppSetString(property, value);
}

