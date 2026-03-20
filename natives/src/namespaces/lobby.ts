import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0x8AA464D4E0F6ACCD | Since: 323
 */
export function autoMultiplayerEvent(): boolean {
    return LoadingscreenGetLoadFreemodeWithEventName();
}

/**
 * No comment provided
 * 
 * Hash: 0xEF7D17BC6C85264C | Since: 323
 */
export function autoMultiplayerFreemode(): boolean {
    return LoadingscreenGetLoadFreemode();
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0xF2CA003F167E21D2 | Since: 323
 */
export function autoMultiplayerMenu(): boolean {
    return Citizen.invokeNative('0xF2CA003F167E21D2');
}

/**
 * No comment provided
 * 
 * Hash: 0xC6DC823253FBB366 | Since: 323
 */
export function autoMultiplayerRandomJob(): boolean {
    return LoadingscreenIsLoadingFreemode();
}

/**
 * No comment provided
 * 
 * Hash: 0xC7E7181C09F33B69 | Since: 323
 */
export function setAutoMpRandomJob(toggle: boolean): void {
    LoadingscreenSetIsLoadingFreemode(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB0C56BD3D808D863 | Since: 323
 */
export function setAutoMultiplayer(toggle: boolean): void {
    LoadingscreenSetLoadFreemode(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFC309E94546FCDB5 | Since: 323
 */
export function setAutoMultiplayerEvent(toggle: boolean): void {
    LoadingscreenSetLoadFreemodeWithEventName(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA1E0E893D915215 | Since: 323
 */
export function shutdownSessionClearsAutoMultiplayer(toggle: boolean): void {
    Citizen.invokeNative('0xFA1E0E893D915215', toggle);
}

