import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * Please note that you will need to call DO_SCREEN_FADE_IN after exiting the Rockstar Editor when you call this.
 * 
 * Hash: 0x49DA8145672B2725 | Since: 323
 */
export function activateRockstarEditor(): void {
    ActivateRockstarEditor(0);
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0x7E2BD3EF6C205F09 | Since: 323
 */
export function registerEffectForEditor(): void {
    Citizen.invokeNative('0x7E2BD3EF6C205F09', undefined, false);
}

/**
 * Sets (almost, not sure) all Rockstar Editor values (bIsRecording etc) to 0.
 * 
 * Hash: 0x3353D13F09307691 | Since: 323
 */
export function controlShutdown(): void {
    ResetEditorValues();
}

/**
 * Returns a bool if interior rendering is disabled, if yes, all "normal" rendered interiors are invisible
 * 
 * Hash: 0x95AB8B5C992C7B58 | Since: 323
 */
export function systemHasRequestedAScriptCleanup(): boolean {
    return IsInteriorRenderingDisabled();
}

/**
 * No comment provided
 * 
 * Hash: 0xE058175F8EAFE79A | Since: 323
 */
export function setSystemPausedForSave(): void {
    Citizen.invokeNative('0xE058175F8EAFE79A', false);
}

/**
 * Disables some other rendering (internal)
 * 
 * Hash: 0x5AD3932DAEB1E5D3 | Since: 323
 */
export function setScriptsHaveCleanedUpForSystem(): void {
    Citizen.invokeNative('0x5AD3932DAEB1E5D3');
}

