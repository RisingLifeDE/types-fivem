/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x7F4724035FDCA1DD | Since: 323
 */
export function allowAlternativeScriptControlsLayout(control) {
    DisableInputGroup(control);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xCB0360EFEFB2580D | Since: 323
 */
export function clearControlLightEffect(control) {
    Citizen.invokeNative('0xCB0360EFEFB2580D', control);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xA0CEFCEA390AAB9B | Since: 323
 */
export function clearControlShakeSuppressedId(control) {
    Citizen.invokeNative('0xA0CEFCEA390AAB9B', control);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x5F4B6931816E599B | Since: 323
 */
export function disableAllControlActions(control) {
    DisableAllControlActions(control);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xFE99B66D079CF6BC | Since: 323
 */
export function disableControlAction(control, action, disableRelatedActions) {
    DisableControlAction(control, action, disableRelatedActions);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xA5FFE9B05F199DE7 | Since: 323
 */
export function enableAllControlActions(control) {
    EnableAllControlActions(control);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x351220255D64C155 | Since: 323
 */
export function enableControlAction(control, action, enableRelatedActions) {
    EnableControlAction(control, action, enableRelatedActions);
}
/**
 * Returns profile setting 17.
 *
 * Hash: 0xFC859E2374407556 | Since: 323
 */
export function getAllowMovementWhileZoomed() {
    return GetAllowMovementWhileZoomed();
}
/**
 * control: unused parameter
 *
 * Hash: 0x80C2FD58D720C801 | Since: 323
 */
export function getControlGroupInstructionalButtonsString(control, controlGroup, allowXOSwap) {
    return GetControlGroupInstructionalButton(control, controlGroup, allowXOSwap);
}
/**
 * Returns time in ms since last input.
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xD7D22F5592AED8BA | Since: 323
 */
export function getControlHowLongAgo(control) {
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
 * Hash: 0x0499D7B09FC9B407 | Since: 323
 */
export function getControlInstructionalButtonsString(control, action, allowXOSwap) {
    return GetControlInstructionalButton(control, action, allowXOSwap);
}
/**
 * Returns the value of GET_CONTROL_VALUE normalized (i.e. a real number value between -1 and 1)
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xEC3C9B8D5327B563 | Since: 323
 */
export function getControlNormal(control, action) {
    return GetControlNormal(control, action);
}
/**
 * Seems to return values between -1 and 1 for controls like gas and steering.
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x5B84D09CEC5209C5 | Since: 323
 */
export function getControlUnboundNormal(control, action) {
    return GetControlUnboundNormal(control, action);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xD95E79E8686D2C27 | Since: 323
 */
export function getControlValue(control, action) {
    return GetControlValue(control, action);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x11E65974A982637C | Since: 323
 */
export function getDisabledControlNormal(control, action) {
    return GetDisabledControlNormal(control, action);
}
/**
 * The "disabled" variant of GET_CONTROL_UNBOUND_NORMAL.
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x4F8A26A890FD62FB | Since: 323
 */
export function getDisabledControlUnboundNormal(control, action) {
    return GetDisabledControlUnboundNormal(control, action);
}
/**
 * Returns profile setting 225.
 *
 * Hash: 0x0F70731BACCFBB96 | Since: 323
 */
export function getIsUsingAlternateDriveby() {
    return GetIsUsingAlternateDriveby();
}
/**
 * No comment provided
 *
 * Hash: 0x25AAA32BDC98F2A3 | Since: 1365
 */
export function getIsUsingAlternateHandbrake() {
    return Citizen.invokeNative('0x25AAA32BDC98F2A3');
}
/**
 * Hard-coded to return 3 if using KBM, otherwise same behavior as GET_LOCAL_PLAYER_GAMEPAD_AIM_STATE.
 *
 * Hash: 0xBB41AFBBBC0A0287 | Since: 323
 */
export function getLocalPlayerAimState() {
    return GetLocalPlayerAimState();
}
/**
 * `Returns the local player's targeting mode. See PLAYER::SET_PLAYER_TARGETING_MODE.`
 *
 * Hash: 0x59B9A7AF4C95133C | Since: 323
 */
export function getLocalPlayerGameAimState() {
    return GetLocalPlayerAimState2();
}
/**
 * control: unused parameter
 *
 * Hash: 0x6CD79468A1E595C6 | Since: 323
 */
export function haveControlsChanged(control) {
    return Citizen.invokeNative('0x6CD79468A1E595C6', control);
}
/**
 * Used in carsteal3 script with schemeName = "Carsteal4_spycar".
 *
 * Hash: 0x3D42B92563939375 | Since: 323
 */
export function initPcScriptedControls(schemeName) {
    return SwitchToInputMappingScheme(schemeName);
}
/**
 * control: 0: PLAYER_CONTROL, 1: CAMERA_CONTROL, 2: FRONTEND_CONTROL
 * For more info, see https://docs.fivem.net/docs/game-references/controls/
 *
 * Hash: 0x1CEA6BFDF248E5D9 | Since: 323
 */
export function isControlEnabled(control, action) {
    return IsControlEnabled(control, action);
}
/**
 * Returns whether a control was newly pressed since the last check.
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x580417101DDB492F | Since: 323
 */
export function isControlJustPressed(control, action) {
    return IsControlJustPressed(control, action);
}
/**
 * Returns whether a control was newly released since the last check.
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x50F940259D3841E6 | Since: 323
 */
export function isControlJustReleased(control, action) {
    return IsControlJustReleased(control, action);
}
/**
 * Returns whether a control is currently pressed.
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xF3A21BCD95725A4A | Since: 323
 */
export function isControlPressed(control, action) {
    return IsControlPressed(control, action);
}
/**
 * Returns whether a control is currently _not_ pressed.
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x648EE3E7F38877DD | Since: 323
 */
export function isControlReleased(control, action) {
    return IsControlReleased(control, action);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x91AEF906BCA88877 | Since: 323
 */
export function isDisabledControlJustPressed(control, action) {
    return IsDisabledControlJustPressed(control, action);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x305C8DCD79DA8B0F | Since: 323
 */
export function isDisabledControlJustReleased(control, action) {
    return IsDisabledControlJustReleased(control, action);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xE2587F8CBBD87B1D | Since: 323
 */
export function isDisabledControlPressed(control, action) {
    return IsDisabledControlPressed(control, action);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xFB6C4072E9A32E92 | Since: 757
 */
export function isDisabledControlReleased(control, action) {
    return IsDisabledControlReleased(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x77B612531280010D | Since: 323
 */
export function isLookInverted() {
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
 * Hash: 0xE1615EC03B3BB4FD | Since: 323
 */
export function isMouseLookInverted() {
    return Citizen.invokeNative('0xE1615EC03B3BB4FD');
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x13337B38DB572509 | Since: 323
 */
export function isUsingCursor(control) {
    return IsUsingKeyboard2(control);
}
/**
 * control: unused parameter
 *
 * Hash: 0xA571D46727E2B718 | Since: 323
 */
export function isUsingKeyboardAndMouse(control) {
    return IsUsingKeyboard(control);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hardcoded to return false.
 *
 * Hash: 0x23F09EADC01449D6 | Since: 323
 */
export function isUsingRemotePlay(control) {
    return Citizen.invokeNative('0x23F09EADC01449D6', control);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x8290252FFF36ACB5 | Since: 323
 */
export function setControlLightEffectColor(control, red, green, blue) {
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
 * Hash: 0x48B3886C1358D0D5 | Since: 323
 */
export function setControlShake(control, duration, frequency) {
    SetPadShake(control, duration, frequency);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xF239400E16C23E08 | Since: 323
 */
export function setControlShakeSuppressedId(control, uniqueId) {
    Citizen.invokeNative('0xF239400E16C23E08', control, uniqueId);
}
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0x14D29BB12D47F68C | Since: 323
 */
export function setControlTriggerShake(control, leftDuration, leftFrequency, rightDuration, rightFrequency) {
    Citizen.invokeNative('0x14D29BB12D47F68C', control, leftDuration, leftFrequency, rightDuration, rightFrequency);
}
/**
 * This is for simulating player input.
 * value is a float value from 0 - 1
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xE8A25867FBA3B05E | Since: 323
 */
export function setControlValueNextFrame(control, action, value) {
    return SetControlNormal(control, action, value);
}
/**
 * No comment provided
 *
 * Hash: 0xFC695459D4D0E219 | Since: 323
 */
export function setCursorPosition(x, y) {
    return SetCursorLocation(x, y);
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xEDE476E5EE29EDB1 | Since: 323
 */
export function setInputExclusive(control, action) {
    SetInputExclusive(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x798FDEB5B1575088 | Since: 323
 */
export function setPlayerShakesWhenControllerDisabled(toggle) {
    SetPlayerpadShakesWhenControllerDisabled(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5B73C77D9EB66E24 | Since: 323
 */
export function setUseAdjustedMouseCoords(toggle) {
    Citizen.invokeNative('0x5B73C77D9EB66E24', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x643ED62D5EA3BEBD | Since: 323
 */
export function shutdownPcScriptedControls() {
    ResetInputMappingScheme();
}
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x38C16A305E8CDC8D | Since: 323
 */
export function stopControlShake(control) {
    StopPadShake(control);
}
/**
 * Same as INIT_PC_SCRIPTED_CONTROLS
 *
 * Hash: 0x4683149ED1DDE7A1 | Since: 323
 */
export function switchPcScriptedControls(schemeName) {
    return SwitchToInputMappingScheme2(schemeName);
}
/**
 * Always returns zero.
 *
 * Hash: 0x18E474F40EF05F10 | Since: 3570
 */
export function getGameType() {
    return Citizen.invokeNative('0x18E474F40EF05F10');
}
/**
 * No comment provided
 *
 * Hash: 0xE9CB8C56E90D5079 | Since: 3407
 */
export function isControlHeldDown(control, action, duration) {
    return Citizen.invokeNative('0xE9CB8C56E90D5079', control, action, duration);
}
