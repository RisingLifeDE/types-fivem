/**
 * Stops recording and discards the recorded clip.
 *
 * Hash: 0x88BB3507ED41A240 | Since: 323
 */
export declare function cancelReplay(): void;
/**
 * No comment provided
 *
 * Hash: 0x4282E08174868BE3 | Since: 323
 */
export declare function isReplayAvailable(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDF4B952F7D381B95 | Since: 323
 */
export declare function isReplayInitialized(): boolean;
/**
 * Checks if you're recording, returns TRUE when you start recording (F1) or turn on action replay (F2)
 *
 * mov al, cs:g_bIsRecordingGameplay // byte_141DD0CD0 in b944
 * retn
 *
 * Hash: 0x1897CA71995A90B4 | Since: 323
 */
export declare function isReplay(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x33D47E85B476ABCD | Since: 323
 */
export declare function isReplayRecordSpaceAvailable(): boolean;
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0x66972397E0757E7A | Since: 323
 */
export declare function recordGreatestMoment(): void;
/**
 * No comment provided
 *
 * Hash: 0x13B350B8AD0EEE10 | Since: 323
 */
export declare function replayCancelEvent(): void;
/**
 * -This function appears to be deprecated/ unused. Tracing the call internally leads to a _nullsub -
 *
 * first one seems to be a string of a mission name, second one seems to be a bool/toggle
 *
 * p1 was always 0.
 *
 *
 * Hash: 0x208784099002BC30 | Since: 323
 */
export declare function replayCheckForEventThisFrame(missionNameLabel: string): void;
/**
 * This will disable the ability to make camera changes in R* Editor.
 *
 * Hash: 0xAF66DCEE6609B148 | Since: 323
 */
export declare function replayDisableCameraMovementThisFrame(): void;
/**
 * This disable the recording feature and has to be called every frame.
 *
 * Hash: 0xEB2D525B57F42B40 | Since: 323
 */
export declare function replayPreventThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x293220DA1B46CEBC | Since: 323
 */
export declare function replayRecordBackForTime(): void;
/**
 * No comment provided
 *
 * Hash: 0xF854439EFBB3B583 | Since: 323
 */
export declare function replayResetEventInfo(): void;
/**
 * No comment provided
 *
 * Hash: 0x48621C9FCA3EBD28 | Since: 323
 */
export declare function replayStartEvent(): void;
/**
 * No comment provided
 *
 * Hash: 0x81CBAE94390F9F89 | Since: 323
 */
export declare function replayStopEvent(): void;
/**
 * No comment provided
 *
 * Hash: 0x644546EC5287471B | Since: 323
 */
export declare function saveReplay(): boolean;
/**
 * Starts recording a replay.
 * If mode is 0, turns on action replay.
 * If mode is 1, starts recording.
 * If already recording a replay, does nothing.
 *
 * Hash: 0xC3AC2FFF9612AC81 | Since: 323
 */
export declare function startReplay(mode: number): void;
/**
 * Stops recording and saves the recorded clip.
 *
 * Hash: 0x071A5197D6AFC8B3 | Since: 323
 */
export declare function stopReplay(): void;
