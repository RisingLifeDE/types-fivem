import { Vector3 } from '@risinglife/fivem-shared';
/**
 * Creates a volume where water effects do not apply.
 * Useful for preventing water collisions from flooding areas underneath them.
 * This has no effect on waterquads, only water created from drawables and collisions.
 * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
 *
 * Hash: 0xEB1C6DD | Since: unknown | API-Set: client
 */
export declare function createDryVolume(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): number;
/**
 * No comment provided
 *
 * Hash: 0x14088095 | Since: unknown | API-Set: client
 */
export declare function getQuadAlpha(waterQuad: number): [boolean, number, number, number, number];
/**
 * This native returns the index of a water quad if the given point is inside its bounds.
 *
 * *If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*
 *
 * Hash: 0x17321452 | Since: unknown | API-Set: client
 */
export declare function getQuadAtCoords(x: number, y: number): number;
/**
 * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
 *
 * Hash: 0xF8E03DB8 | Since: unknown | API-Set: client
 */
export declare function getQuadAtCoords3d(pos: Vector3): number;
/**
 * No comment provided
 *
 * Hash: 0x42E9A06A | Since: unknown | API-Set: client
 */
export declare function getQuadBounds(waterQuad: number): [boolean, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xB1884159 | Since: unknown | API-Set: client
 */
export declare function getQuadCount(): number;
/**
 * No comment provided
 *
 * Hash: 0x22EA3BD8 | Since: unknown | API-Set: client
 */
export declare function getQuadHasLimitedDepth(waterQuad: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x1DEDBD77 | Since: unknown | API-Set: client
 */
export declare function getQuadIsInvisible(waterQuad: number): [boolean, number];
/**
 * *level is defined as "z" in water.xml*
 *
 * Hash: 0x6523816B | Since: unknown | API-Set: client
 */
export declare function getQuadLevel(waterQuad: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x6F4ACBA | Since: unknown | API-Set: client
 */
export declare function getQuadNoStencil(waterQuad: number): [boolean, number];
/**
 * Valid type definitions:
 *
 * *   **0** Square
 * *   **1** Right triangle where the 90 degree angle is at maxX, minY
 * *   **2** Right triangle where the 90 degree angle is at minX, minY
 * *   **3** Right triangle where the 90 degree angle is at minX, maxY
 * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
 *
 * Hash: 0xE2501B8B | Since: unknown | API-Set: client
 */
export declare function getQuadType(waterQuad: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x865139A3 | Since: unknown | API-Set: client
 */
export declare function getWaveQuadAmplitude(waveQuad: number): [boolean, number];
/**
 * This native returns the index of a wave quad if the given point is inside its bounds.
 *
 * Hash: 0x3F5A61A7 | Since: unknown | API-Set: client
 */
export declare function getWaveQuadAtCoords(x: number, y: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF86136DB | Since: unknown | API-Set: client
 */
export declare function getWaveQuadBounds(waveQuad: number): [boolean, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x9250C76 | Since: unknown | API-Set: client
 */
export declare function getWaveQuadCount(): number;
/**
 * No comment provided
 *
 * Hash: 0xCCE49A1C | Since: unknown | API-Set: client
 */
export declare function getWaveQuadDirection(waveQuad: number): [boolean, number, number];
/**
 * Define the xml in a resources fxmanifest, under the file(s) section.
 *
 * Hash: 0xF5102568 | Since: unknown | API-Set: client
 */
export declare function loadFromPath(resourceName: string, fileName: string): boolean;
/**
 * Removes a dry volume from the game session.
 * See CREATE_DRY_VOLUME for more info
 *
 * Hash: 0x7BCAA6E7 | Since: unknown | API-Set: client
 */
export declare function removeDryVolume(handle: number): void;
/**
 * Resets the water to the games default water.xml.
 *
 * Hash: 0x1DA4791 | Since: unknown | API-Set: client
 */
export declare function reset(): void;
/**
 * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
 * Used internally by LOAD_GLOBAL_WATER_FILE
 *
 * Hash: 0x9FCD2EE6 | Since: unknown | API-Set: client
 */
export declare function setAreaClipRect(minX: number, minY: number, maxX: number, maxY: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF49797EB | Since: unknown | API-Set: client
 */
export declare function setQuadAlpha(waterQuad: number, a0: number, a1: number, a2: number, a3: number): boolean;
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x80AD144C | Since: unknown | API-Set: client
 */
export declare function setQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD1FDCFC1 | Since: unknown | API-Set: client
 */
export declare function setQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA387D917 | Since: unknown | API-Set: client
 */
export declare function setQuadIsInvisible(waterQuad: number, isInvisible: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6292F7A8 | Since: unknown | API-Set: client
 */
export declare function setQuadLevel(waterQuad: number, level: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC3FF42FF | Since: unknown | API-Set: client
 */
export declare function setQuadNoStencil(waterQuad: number, noStencil: boolean): boolean;
/**
 * This native allows you to update the water quad type.
 *
 * Valid type definitions:
 *
 * *   **0** Square
 * *   **1** Right triangle where the 90 degree angle is at maxX, minY
 * *   **2** Right triangle where the 90 degree angle is at minX, minY
 * *   **3** Right triangle where the 90 degree angle is at minX, maxY
 * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
 *
 * Hash: 0x50131EB2 | Since: unknown | API-Set: client
 */
export declare function setQuadType(waterQuad: number, _type: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE4174B7B | Since: unknown | API-Set: client
 */
export declare function setWaveQuadAmplitude(waveQuad: number, amplitude: number): boolean;
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x1FCC1FAF | Since: unknown | API-Set: client
 */
export declare function setWaveQuadBounds(waveQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * directionX/Y should be constrained between -1.0 and 1.0
 * A positive value will create the wave starting at min and rolling towards max
 * A negative value will create the wave starting at max and rolling towards min
 * Applying both values allows you to make diagonal waves
 *
 * Hash: 0xFC9341A3 | Since: unknown | API-Set: client
 */
export declare function setWaveQuadDirection(waveQuad: number, directionX: number, directionY: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFDBF4CDBC07E1706 | Since: 323 | API-Set: unknown
 */
export declare function addExtraCalmingQuad(xLow: number, yLow: number, xHigh: number, yHigh: number, height: number): number;
/**
 * Gets the aggressiveness factor of the ocean waves.
 *
 * Hash: 0x2B2A2CC86778B619 | Since: 323 | API-Set: unknown
 */
export declare function getDeepOceanScaler(): number;
/**
 * This function set height to the value of z-axis of the water surface.
 *
 * This function works with sea and lake. However it does not work with shallow rivers (e.g. raton canyon will return -100000.0f)
 *
 * note: seems to return true when you are in water
 *
 * Hash: 0xF6829842C06AE524 | Since: 323 | API-Set: unknown
 */
export declare function getHeight(pos: Vector3): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x8EE6B53CE13A9794 | Since: 323 | API-Set: unknown
 */
export declare function getHeightNoWaves(pos: Vector3): [boolean, number];
/**
 * Sets the water height for a given position and radius.
 *
 *
 * Hash: 0xC443FD757C3BA637 | Since: 323 | API-Set: unknown
 */
export declare function modify(x: number, y: number, radius: number, height: number): void;
/**
 * p0 is the handle returned from ADD_EXTRA_CALMING_QUAD
 *
 * Hash: 0xB1252E3E59A82AAF | Since: 323 | API-Set: unknown
 */
export declare function removeExtraCalmingQuad(calmingQuad: number): void;
/**
 * Sets the waves intensity back to original (1.0 in most cases).
 *
 * Hash: 0x5E5E99285AE812DB | Since: 323 | API-Set: unknown
 */
export declare function resetDeepOceanScaler(): void;
/**
 * No comment provided
 *
 * Hash: 0x547237AA71AB44DE | Since: 573 | API-Set: unknown
 */
export declare function setCalmedWaveHeightScaler(height: number): void;
/**
 * Sets a value that determines how aggressive the ocean waves will be. Values of 2.0 or more make for very aggressive waves like you see during a thunderstorm.
 *
 * Works only ~200 meters around the player.
 *
 * Hash: 0xB96B00E976BE977F | Since: 323 | API-Set: unknown
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
 * Hash: 0x8974647ED222EA5F | Since: 323 | API-Set: unknown
 */
export declare function testProbeAgainstAll(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number): [number, number];
/**
 * No comment provided
 *
 * Hash: 0xFFA5D878809819DB | Since: 323 | API-Set: unknown
 */
export declare function testProbeAgainst(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): [boolean, Vector3];
/**
 * See TEST_PROBE_AGAINST_ALL_WATER.
 *
 * Hash: 0x2B3451FA1E3142E2 | Since: 323 | API-Set: unknown
 */
export declare function testVerticalProbeAgainstAll(pos: Vector3, flags: number): [number, number];
