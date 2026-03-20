import { Vector3 } from '@risinglife/fivem-shared';
/**
 * No comment provided
 *
 * Hash: 0xFDBF4CDBC07E1706 | Since: 323
 */
export declare function addExtraCalmingQuad(xLow: number, yLow: number, xHigh: number, yHigh: number, height: number): number;
/**
 * Gets the aggressiveness factor of the ocean waves.
 *
 * Hash: 0x2B2A2CC86778B619 | Since: 323
 */
export declare function getDeepOceanScaler(): number;
/**
 * This function set height to the value of z-axis of the water surface.
 *
 * This function works with sea and lake. However it does not work with shallow rivers (e.g. raton canyon will return -100000.0f)
 *
 * note: seems to return true when you are in water
 *
 * Hash: 0xF6829842C06AE524 | Since: 323
 */
export declare function getHeight(pos: Vector3): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x8EE6B53CE13A9794 | Since: 323
 */
export declare function getHeightNoWaves(pos: Vector3): [boolean, number];
/**
 * Sets the water height for a given position and radius.
 *
 *
 * Hash: 0xC443FD757C3BA637 | Since: 323
 */
export declare function modify(x: number, y: number, radius: number, height: number): void;
/**
 * p0 is the handle returned from ADD_EXTRA_CALMING_QUAD
 *
 * Hash: 0xB1252E3E59A82AAF | Since: 323
 */
export declare function removeExtraCalmingQuad(calmingQuad: number): void;
/**
 * Sets the waves intensity back to original (1.0 in most cases).
 *
 * Hash: 0x5E5E99285AE812DB | Since: 323
 */
export declare function resetDeepOceanScaler(): void;
/**
 * No comment provided
 *
 * Hash: 0x547237AA71AB44DE | Since: 573
 */
export declare function setCalmedWaveHeightScaler(height: number): void;
/**
 * Sets a value that determines how aggressive the ocean waves will be. Values of 2.0 or more make for very aggressive waves like you see during a thunderstorm.
 *
 * Works only ~200 meters around the player.
 *
 * Hash: 0xB96B00E976BE977F | Since: 323
 */
export declare function setDeepOceanScaler(intensity: number): void;
/**
 * enum eScriptWaterTestResult
 * {
 * SCRIPT_WATER_TEST_RESULT_NONE,
 * SCRIPT_WATER_TEST_RESULT_WATER,
 * SCRIPT_WATER_TEST_RESULT_BLOCKED,
 * };
 *
 * Hash: 0x8974647ED222EA5F | Since: 323
 */
export declare function testProbeAgainstAll(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number): [number, number];
/**
 * No comment provided
 *
 * Hash: 0xFFA5D878809819DB | Since: 323
 */
export declare function testProbeAgainst(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): [boolean, Vector3];
/**
 * See TEST_PROBE_AGAINST_ALL_WATER.
 *
 * Hash: 0x2B3451FA1E3142E2 | Since: 323
 */
export declare function testVerticalProbeAgainstAll(pos: Vector3, flags: number): [number, number];
