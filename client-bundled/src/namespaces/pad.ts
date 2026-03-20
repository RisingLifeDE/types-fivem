import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x8BCF0014 | Since: unknown | API-Set: client
 */
export function disableRawKeyThisFrame(rawKeyIndex: number): boolean {
    return DisableRawKeyThisFrame(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x36366EC3 | Since: unknown | API-Set: client
 */
export function isDisabledRawKeyDown(rawKeyIndex: number): boolean {
    return IsDisabledRawKeyDown(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x1F7CBBAA | Since: unknown | API-Set: client
 */
export function isDisabledRawKeyPressed(rawKeyIndex: number): boolean {
    return IsDisabledRawKeyPressed(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x72B66C09 | Since: unknown | API-Set: client
 */
export function isDisabledRawKeyReleased(rawKeyIndex: number): boolean {
    return IsDisabledRawKeyReleased(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x2C033875 | Since: unknown | API-Set: client
 */
export function isDisabledRawKeyUp(rawKeyIndex: number): boolean {
    return IsDisabledRawKeyUp(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.
 * 
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0xD95A7387 | Since: unknown | API-Set: client
 */
export function isRawKeyDown(rawKeyIndex: number): boolean {
    return IsRawKeyDown(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed on the keyboard.
 * 
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x69F7C29E | Since: unknown | API-Set: client
 */
export function isRawKeyPressed(rawKeyIndex: number): boolean {
    return IsRawKeyPressed(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` was just released on the keyboard.
 * 
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0xEAA50861 | Since: unknown | API-Set: client
 */
export function isRawKeyReleased(rawKeyIndex: number): boolean {
    return IsRawKeyReleased(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is up  on the keyboard.
 * 
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x36F4E505 | Since: unknown | API-Set: client
 */
export function isRawKeyUp(rawKeyIndex: number): boolean {
    return IsRawKeyUp(rawKeyIndex);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x7F4724035FDCA1DD | Since: 323 | API-Set: unknown
 */
export function allowAlternativeScriptControlsLayout(control: number): void {
    DisableInputGroup(control);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xCB0360EFEFB2580D | Since: 323 | API-Set: unknown
 */
export function clearControlLightEffect(control: number): void {
    Citizen.invokeNative('0xCB0360EFEFB2580D', control);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xA0CEFCEA390AAB9B | Since: 323 | API-Set: unknown
 */
export function clearControlShakeSuppressedId(control: number): void {
    Citizen.invokeNative('0xA0CEFCEA390AAB9B', control);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x5F4B6931816E599B | Since: 323 | API-Set: unknown
 */
export function disableAllControlActions(control: number): void {
    DisableAllControlActions(control);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xFE99B66D079CF6BC | Since: 323 | API-Set: unknown
 */
export function disableControlAction(control: number, action: number, disableRelatedActions: boolean): void {
    DisableControlAction(control, action, disableRelatedActions);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xA5FFE9B05F199DE7 | Since: 323 | API-Set: unknown
 */
export function enableAllControlActions(control: number): void {
    EnableAllControlActions(control);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x351220255D64C155 | Since: 323 | API-Set: unknown
 */
export function enableControlAction(control: number, action: number, enableRelatedActions: boolean): void {
    EnableControlAction(control, action, enableRelatedActions);
}

/**
 * Returns profile setting 17.
 * 
 * Hash: 0xFC859E2374407556 | Since: 323 | API-Set: unknown
 */
export function getAllowMovementWhileZoomed(): boolean {
    return GetAllowMovementWhileZoomed();
}

/**
 * control: unused parameter
 * 
 * Hash: 0x80C2FD58D720C801 | Since: 323 | API-Set: unknown
 */
export function getControlGroupInstructionalButtonsString(control: number, controlGroup: number, allowXOSwap: boolean): string {
    return GetControlGroupInstructionalButton(control, controlGroup, allowXOSwap);
}

/**
 * Returns time in ms since last input.
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xD7D22F5592AED8BA | Since: 323 | API-Set: unknown
 */
export function getControlHowLongAgo(control: number): number {
    return GetTimeSinceLastInput(control);
}

/**
 * allowXOSwap appears to always be true.
 * 
 * EG:
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 201, 1) \/\*INPUT_FRONTEND_ACCEPT (e.g. Enter button)\*\/
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 202, 1) \/\*INPUT_FRONTEND_CANCEL (e.g. ESC button)\*\/
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 51, 1) \/\*INPUT_CONTEXT (e.g. E button)\*\/
 * 
 * gtaforums.com/topic/819070-c-draw-instructional-buttons-scaleform-movie/#entry1068197378
 * 
 * control: unused parameter
 * 
 * Hash: 0x0499D7B09FC9B407 | Since: 323 | API-Set: unknown
 */
export function getControlInstructionalButtonsString(control: number, action: number, allowXOSwap: boolean): string {
    return GetControlInstructionalButton(control, action, allowXOSwap);
}

/**
 * Returns the value of GET_CONTROL_VALUE normalized (i.e. a real number value between -1 and 1)
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xEC3C9B8D5327B563 | Since: 323 | API-Set: unknown
 */
export function getControlNormal(control: number, action: number): number {
    return GetControlNormal(control, action);
}

/**
 * Seems to return values between -1 and 1 for controls like gas and steering.
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x5B84D09CEC5209C5 | Since: 323 | API-Set: unknown
 */
export function getControlUnboundNormal(control: number, action: number): number {
    return GetControlUnboundNormal(control, action);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xD95E79E8686D2C27 | Since: 323 | API-Set: unknown
 */
export function getControlValue(control: number, action: number): number {
    return GetControlValue(control, action);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x11E65974A982637C | Since: 323 | API-Set: unknown
 */
export function getDisabledControlNormal(control: number, action: number): number {
    return GetDisabledControlNormal(control, action);
}

/**
 * The "disabled" variant of GET_CONTROL_UNBOUND_NORMAL.
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x4F8A26A890FD62FB | Since: 323 | API-Set: unknown
 */
export function getDisabledControlUnboundNormal(control: number, action: number): number {
    return GetDisabledControlUnboundNormal(control, action);
}

/**
 * Returns profile setting 225.
 * 
 * Hash: 0x0F70731BACCFBB96 | Since: 323 | API-Set: unknown
 */
export function getIsUsingAlternateDriveby(): boolean {
    return GetIsUsingAlternateDriveby();
}

/**
 * No comment provided
 * 
 * Hash: 0x25AAA32BDC98F2A3 | Since: 1365 | API-Set: unknown
 */
export function getIsUsingAlternateHandbrake(): boolean {
    return Citizen.invokeNative('0x25AAA32BDC98F2A3');
}

/**
 * Hard-coded to return 3 if using KBM, otherwise same behavior as GET_LOCAL_PLAYER_GAMEPAD_AIM_STATE.
 * 
 * Hash: 0xBB41AFBBBC0A0287 | Since: 323 | API-Set: unknown
 */
export function getLocalPlayerAimState(): number {
    return GetLocalPlayerAimState();
}

/**
 * `Returns the local player's targeting mode. See PLAYER::SET_PLAYER_TARGETING_MODE.`
 * 
 * Hash: 0x59B9A7AF4C95133C | Since: 323 | API-Set: unknown
 */
export function getLocalPlayerGameAimState(): number {
    return GetLocalPlayerAimState2();
}

/**
 * control: unused parameter
 * 
 * Hash: 0x6CD79468A1E595C6 | Since: 323 | API-Set: unknown
 */
export function haveControlsChanged(control: number): boolean {
    return Citizen.invokeNative('0x6CD79468A1E595C6', control);
}

/**
 * Used in carsteal3 script with schemeName = "Carsteal4_spycar".
 * 
 * Hash: 0x3D42B92563939375 | Since: 323 | API-Set: unknown
 */
export function initPcScriptedControls(schemeName: string): boolean {
    return SwitchToInputMappingScheme(schemeName);
}

/**
 * control: 0: PLAYER_CONTROL, 1: CAMERA_CONTROL, 2: FRONTEND_CONTROL
 * For more info, see https://docs.fivem.net/docs/game-references/controls/
 * 
 * Hash: 0x1CEA6BFDF248E5D9 | Since: 323 | API-Set: unknown
 */
export function isControlEnabled(control: number, action: number): boolean {
    return IsControlEnabled(control, action);
}

/**
 * Returns whether a control was newly pressed since the last check.
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x580417101DDB492F | Since: 323 | API-Set: unknown
 */
export function isControlJustPressed(control: number, action: number): boolean {
    return IsControlJustPressed(control, action);
}

/**
 * Returns whether a control was newly released since the last check.
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x50F940259D3841E6 | Since: 323 | API-Set: unknown
 */
export function isControlJustReleased(control: number, action: number): boolean {
    return IsControlJustReleased(control, action);
}

/**
 * Returns whether a control is currently pressed.
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xF3A21BCD95725A4A | Since: 323 | API-Set: unknown
 */
export function isControlPressed(control: number, action: number): boolean {
    return IsControlPressed(control, action);
}

/**
 * Returns whether a control is currently _not_ pressed.
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x648EE3E7F38877DD | Since: 323 | API-Set: unknown
 */
export function isControlReleased(control: number, action: number): boolean {
    return IsControlReleased(control, action);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x91AEF906BCA88877 | Since: 323 | API-Set: unknown
 */
export function isDisabledControlJustPressed(control: number, action: number): boolean {
    return IsDisabledControlJustPressed(control, action);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x305C8DCD79DA8B0F | Since: 323 | API-Set: unknown
 */
export function isDisabledControlJustReleased(control: number, action: number): boolean {
    return IsDisabledControlJustReleased(control, action);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xE2587F8CBBD87B1D | Since: 323 | API-Set: unknown
 */
export function isDisabledControlPressed(control: number, action: number): boolean {
    return IsDisabledControlPressed(control, action);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xFB6C4072E9A32E92 | Since: 757 | API-Set: unknown
 */
export function isDisabledControlReleased(control: number, action: number): boolean {
    return IsDisabledControlReleased(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x77B612531280010D | Since: 323 | API-Set: unknown
 */
export function isLookInverted(): boolean {
    return IsLookInverted();
}

/**
 * Used with IS_LOOK_INVERTED() and negates its affect.
 * 
 * --
 * 
 * Not sure how the person above got that description, but here's an actual example:
 * 
 * `if (PAD::IS_USING_KEYBOARD_AND_MOUSE(2)) {`
 * if (a_5) {
 * `if (PAD::IS_LOOK_INVERTED()) {`
 * a_3 *= -1;
 * }
 * `if (PAD::IS_MOUSE_LOOK_INVERTED()) {`
 * a_3 *= -1;
 * }
 * }
 * }
 * 
 * Hash: 0xE1615EC03B3BB4FD | Since: 323 | API-Set: unknown
 */
export function isMouseLookInverted(): boolean {
    return Citizen.invokeNative('0xE1615EC03B3BB4FD');
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x13337B38DB572509 | Since: 323 | API-Set: unknown
 */
export function isUsingCursor(control: number): boolean {
    return IsUsingKeyboard2(control);
}

/**
 * control: unused parameter
 * 
 * Hash: 0xA571D46727E2B718 | Since: 323 | API-Set: unknown
 */
export function isUsingKeyboardAndMouse(control: number): boolean {
    return IsUsingKeyboard(control);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hardcoded to return false.
 * 
 * Hash: 0x23F09EADC01449D6 | Since: 323 | API-Set: unknown
 */
export function isUsingRemotePlay(control: number): boolean {
    return Citizen.invokeNative('0x23F09EADC01449D6', control);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x8290252FFF36ACB5 | Since: 323 | API-Set: unknown
 */
export function setControlLightEffectColor(control: number, red: number, green: number, blue: number): void {
    SetControlLightEffectColor(control, red, green, blue);
}

/**
 * control: see IS_CONTROL_ENABLED
 * duration in milliseconds
 * frequency should range from about 10 (slow vibration) to 255 (very fast)
 * 
 * example:
 * SET_CONTROL_SHAKE(PLAYER_CONTROL, 100, 200);
 * 
 * Hash: 0x48B3886C1358D0D5 | Since: 323 | API-Set: unknown
 */
export function setControlShake(control: number, duration: number, frequency: number): void {
    SetPadShake(control, duration, frequency);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xF239400E16C23E08 | Since: 323 | API-Set: unknown
 */
export function setControlShakeSuppressedId(control: number, uniqueId: number): void {
    Citizen.invokeNative('0xF239400E16C23E08', control, uniqueId);
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0x14D29BB12D47F68C | Since: 323 | API-Set: unknown
 */
export function setControlTriggerShake(control: number, leftDuration: number, leftFrequency: number, rightDuration: number, rightFrequency: number): void {
    Citizen.invokeNative('0x14D29BB12D47F68C', control, leftDuration, leftFrequency, rightDuration, rightFrequency);
}

/**
 * This is for simulating player input.
 * value is a float value from 0 - 1
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xE8A25867FBA3B05E | Since: 323 | API-Set: unknown
 */
export function setControlValueNextFrame(control: number, action: number, value: number): boolean {
    return SetControlNormal(control, action, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xFC695459D4D0E219 | Since: 323 | API-Set: unknown
 */
export function setCursorPosition(x: number, y: number): boolean {
    return SetCursorLocation(x, y);
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0xEDE476E5EE29EDB1 | Since: 323 | API-Set: unknown
 */
export function setInputExclusive(control: number, action: number): void {
    SetInputExclusive(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x798FDEB5B1575088 | Since: 323 | API-Set: unknown
 */
export function setPlayerShakesWhenControllerDisabled(toggle: boolean): void {
    SetPlayerpadShakesWhenControllerDisabled(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B73C77D9EB66E24 | Since: 323 | API-Set: unknown
 */
export function setUseAdjustedMouseCoords(toggle: boolean): void {
    Citizen.invokeNative('0x5B73C77D9EB66E24', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x643ED62D5EA3BEBD | Since: 323 | API-Set: unknown
 */
export function shutdownPcScriptedControls(): void {
    ResetInputMappingScheme();
}

/**
 * control: see IS_CONTROL_ENABLED
 * 
 * Hash: 0x38C16A305E8CDC8D | Since: 323 | API-Set: unknown
 */
export function stopControlShake(control: number): void {
    StopPadShake(control);
}

/**
 * Same as INIT_PC_SCRIPTED_CONTROLS
 * 
 * Hash: 0x4683149ED1DDE7A1 | Since: 323 | API-Set: unknown
 */
export function switchPcScriptedControls(schemeName: string): boolean {
    return SwitchToInputMappingScheme2(schemeName);
}

/**
 * Always returns zero.
 * 
 * Hash: 0x18E474F40EF05F10 | Since: 3570 | API-Set: unknown
 */
export function getGameType(): number {
    return Citizen.invokeNative('0x18E474F40EF05F10');
}

/**
 * No comment provided
 * 
 * Hash: 0xE9CB8C56E90D5079 | Since: 3407 | API-Set: unknown
 */
export function isControlHeldDown(control: number, action: number, duration: number): boolean {
    return Citizen.invokeNative('0xE9CB8C56E90D5079', control, action, duration);
}

