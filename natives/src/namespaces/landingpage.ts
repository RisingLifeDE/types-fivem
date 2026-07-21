import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0x770CB76ED0895B5B | Since: unknown
 */
export function getSelectedCharacterSlot(): number {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0x770CB76ED0895B5B)'); return;
    return Citizen.invokeNative('0x770CB76ED0895B5B');
}

/**
 * No comment provided
 * 
 * Hash: 0xB37FC2FB7418367C | Since: unknown
 */
export function isActive(): boolean {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0xB37FC2FB7418367C)'); return;
    return Citizen.invokeNative('0xB37FC2FB7418367C');
}

/**
 * No comment provided
 * 
 * Hash: 0x237D6F6D474FC93C | Since: unknown
 */
export function setShouldDismiss(): void {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0x237D6F6D474FC93C)'); return;
    Citizen.invokeNative('0x237D6F6D474FC93C');
}

/**
 * No comment provided
 * 
 * Hash: 0xFD1B81BDD7FBCB41 | Since: unknown
 */
export function setShouldLaunch(entrypointId: number): void {
    if (!IsGameEnhancedVersion()) console.error('This native is not supported on legacy (0xFD1B81BDD7FBCB41)'); return;
    Citizen.invokeNative('0xFD1B81BDD7FBCB41', entrypointId);
}

