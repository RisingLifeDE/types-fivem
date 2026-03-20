/**
 * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x8BCF0014 | Since: unknown | API-Set: client
 */
export declare function disableRawKeyThisFrame(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36366EC3 | Since: unknown | API-Set: client
 */
export declare function isDisabledRawKeyDown(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x1F7CBBAA | Since: unknown | API-Set: client
 */
export declare function isDisabledRawKeyPressed(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x72B66C09 | Since: unknown | API-Set: client
 */
export declare function isDisabledRawKeyReleased(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x2C033875 | Since: unknown | API-Set: client
 */
export declare function isDisabledRawKeyUp(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xD95A7387 | Since: unknown | API-Set: client
 */
export declare function isRawKeyDown(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x69F7C29E | Since: unknown | API-Set: client
 */
export declare function isRawKeyPressed(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` was just released on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xEAA50861 | Since: unknown | API-Set: client
 */
export declare function isRawKeyReleased(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is up  on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36F4E505 | Since: unknown | API-Set: client
 */
export declare function isRawKeyUp(rawKeyIndex: number): boolean;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x7F4724035FDCA1DD | Since: 323 | API-Set: unknown
 */
export declare function allowAlternativeScriptControlsLayout(control: number): void;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xCB0360EFEFB2580D | Since: 323 | API-Set: unknown
 */
export declare function clearControlLightEffect(control: number): void;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xA0CEFCEA390AAB9B | Since: 323 | API-Set: unknown
 */
export declare function clearControlShakeSuppressedId(control: number): void;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x5F4B6931816E599B | Since: 323 | API-Set: unknown
 */
export declare function disableAllControlActions(control: number): void;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xFE99B66D079CF6BC | Since: 323 | API-Set: unknown
 */
export declare function disableControlAction(control: number, action: number, disableRelatedActions: boolean): void;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xA5FFE9B05F199DE7 | Since: 323 | API-Set: unknown
 */
export declare function enableAllControlActions(control: number): void;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x351220255D64C155 | Since: 323 | API-Set: unknown
 */
export declare function enableControlAction(control: number, action: number, enableRelatedActions: boolean): void;
/**
 * Returns profile setting 17.
 *
 * Hash: 0xFC859E2374407556 | Since: 323 | API-Set: unknown
 */
export declare function getAllowMovementWhileZoomed(): boolean;
/**
 * control: unused parameter
 *
 * Hash: 0x80C2FD58D720C801 | Since: 323 | API-Set: unknown
 */
export declare function getControlGroupInstructionalButtonsString(control: number, controlGroup: number, allowXOSwap: boolean): string;
/**
 * Returns time in ms since last input.
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xD7D22F5592AED8BA | Since: 323 | API-Set: unknown
 */
export declare function getControlHowLongAgo(control: number): number;
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
export declare function getControlInstructionalButtonsString(control: number, action: number, allowXOSwap: boolean): string;
/**
 * Returns the value of GET_CONTROL_VALUE normalized (i.e. a real number value between -1 and 1)
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xEC3C9B8D5327B563 | Since: 323 | API-Set: unknown
 */
export declare function getControlNormal(control: number, action: number): number;
/**
 * Seems to return values between -1 and 1 for controls like gas and steering.
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x5B84D09CEC5209C5 | Since: 323 | API-Set: unknown
 */
export declare function getControlUnboundNormal(control: number, action: number): number;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xD95E79E8686D2C27 | Since: 323 | API-Set: unknown
 */
export declare function getControlValue(control: number, action: number): number;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x11E65974A982637C | Since: 323 | API-Set: unknown
 */
export declare function getDisabledControlNormal(control: number, action: number): number;
/**
 * The "disabled" variant of GET_CONTROL_UNBOUND_NORMAL.
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x4F8A26A890FD62FB | Since: 323 | API-Set: unknown
 */
export declare function getDisabledControlUnboundNormal(control: number, action: number): number;
/**
 * Returns profile setting 225.
 *
 * Hash: 0x0F70731BACCFBB96 | Since: 323 | API-Set: unknown
 */
export declare function getIsUsingAlternateDriveby(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x25AAA32BDC98F2A3 | Since: 1365 | API-Set: unknown
 */
export declare function getIsUsingAlternateHandbrake(): boolean;
/**
 * Hard-coded to return 3 if using KBM, otherwise same behavior as GET_LOCAL_PLAYER_GAMEPAD_AIM_STATE.
 *
 * Hash: 0xBB41AFBBBC0A0287 | Since: 323 | API-Set: unknown
 */
export declare function getLocalPlayerAimState(): number;
/**
 * `Returns the local player's targeting mode. See PLAYER::SET_PLAYER_TARGETING_MODE.`
 *
 * Hash: 0x59B9A7AF4C95133C | Since: 323 | API-Set: unknown
 */
export declare function getLocalPlayerGameAimState(): number;
/**
 * control: unused parameter
 *
 * Hash: 0x6CD79468A1E595C6 | Since: 323 | API-Set: unknown
 */
export declare function haveControlsChanged(control: number): boolean;
/**
 * Used in carsteal3 script with schemeName = "Carsteal4_spycar".
 *
 * Hash: 0x3D42B92563939375 | Since: 323 | API-Set: unknown
 */
export declare function initPcScriptedControls(schemeName: string): boolean;
/**
 * control: 0: PLAYER_CONTROL, 1: CAMERA_CONTROL, 2: FRONTEND_CONTROL
 * For more info, see https://docs.fivem.net/docs/game-references/controls/
 *
 * Hash: 0x1CEA6BFDF248E5D9 | Since: 323 | API-Set: unknown
 */
export declare function isControlEnabled(control: number, action: number): boolean;
/**
 * Returns whether a control was newly pressed since the last check.
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x580417101DDB492F | Since: 323 | API-Set: unknown
 */
export declare function isControlJustPressed(control: number, action: number): boolean;
/**
 * Returns whether a control was newly released since the last check.
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x50F940259D3841E6 | Since: 323 | API-Set: unknown
 */
export declare function isControlJustReleased(control: number, action: number): boolean;
/**
 * Returns whether a control is currently pressed.
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xF3A21BCD95725A4A | Since: 323 | API-Set: unknown
 */
export declare function isControlPressed(control: number, action: number): boolean;
/**
 * Returns whether a control is currently _not_ pressed.
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x648EE3E7F38877DD | Since: 323 | API-Set: unknown
 */
export declare function isControlReleased(control: number, action: number): boolean;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x91AEF906BCA88877 | Since: 323 | API-Set: unknown
 */
export declare function isDisabledControlJustPressed(control: number, action: number): boolean;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x305C8DCD79DA8B0F | Since: 323 | API-Set: unknown
 */
export declare function isDisabledControlJustReleased(control: number, action: number): boolean;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xE2587F8CBBD87B1D | Since: 323 | API-Set: unknown
 */
export declare function isDisabledControlPressed(control: number, action: number): boolean;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xFB6C4072E9A32E92 | Since: 757 | API-Set: unknown
 */
export declare function isDisabledControlReleased(control: number, action: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x77B612531280010D | Since: 323 | API-Set: unknown
 */
export declare function isLookInverted(): boolean;
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
export declare function isMouseLookInverted(): boolean;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x13337B38DB572509 | Since: 323 | API-Set: unknown
 */
export declare function isUsingCursor(control: number): boolean;
/**
 * control: unused parameter
 *
 * Hash: 0xA571D46727E2B718 | Since: 323 | API-Set: unknown
 */
export declare function isUsingKeyboardAndMouse(control: number): boolean;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hardcoded to return false.
 *
 * Hash: 0x23F09EADC01449D6 | Since: 323 | API-Set: unknown
 */
export declare function isUsingRemotePlay(control: number): boolean;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x8290252FFF36ACB5 | Since: 323 | API-Set: unknown
 */
export declare function setControlLightEffectColor(control: number, red: number, green: number, blue: number): void;
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
export declare function setControlShake(control: number, duration: number, frequency: number): void;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xF239400E16C23E08 | Since: 323 | API-Set: unknown
 */
export declare function setControlShakeSuppressedId(control: number, uniqueId: number): void;
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0x14D29BB12D47F68C | Since: 323 | API-Set: unknown
 */
export declare function setControlTriggerShake(control: number, leftDuration: number, leftFrequency: number, rightDuration: number, rightFrequency: number): void;
/**
 * This is for simulating player input.
 * value is a float value from 0 - 1
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xE8A25867FBA3B05E | Since: 323 | API-Set: unknown
 */
export declare function setControlValueNextFrame(control: number, action: number, value: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFC695459D4D0E219 | Since: 323 | API-Set: unknown
 */
export declare function setCursorPosition(x: number, y: number): boolean;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0xEDE476E5EE29EDB1 | Since: 323 | API-Set: unknown
 */
export declare function setInputExclusive(control: number, action: number): void;
/**
 * No comment provided
 *
 * Hash: 0x798FDEB5B1575088 | Since: 323 | API-Set: unknown
 */
export declare function setPlayerShakesWhenControllerDisabled(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5B73C77D9EB66E24 | Since: 323 | API-Set: unknown
 */
export declare function setUseAdjustedMouseCoords(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x643ED62D5EA3BEBD | Since: 323 | API-Set: unknown
 */
export declare function shutdownPcScriptedControls(): void;
/**
 * control: see IS_CONTROL_ENABLED
 *
 * Hash: 0x38C16A305E8CDC8D | Since: 323 | API-Set: unknown
 */
export declare function stopControlShake(control: number): void;
/**
 * Same as INIT_PC_SCRIPTED_CONTROLS
 *
 * Hash: 0x4683149ED1DDE7A1 | Since: 323 | API-Set: unknown
 */
export declare function switchPcScriptedControls(schemeName: string): boolean;
/**
 * Always returns zero.
 *
 * Hash: 0x18E474F40EF05F10 | Since: 3570 | API-Set: unknown
 */
export declare function getGameType(): number;
/**
 * No comment provided
 *
 * Hash: 0xE9CB8C56E90D5079 | Since: 3407 | API-Set: unknown
 */
export declare function isControlHeldDown(control: number, action: number, duration: number): boolean;
