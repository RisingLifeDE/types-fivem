import { Vector3, IEntity, IPed, IPlayer, IVehicle, IObject, ICamera } from '@risinglife/fivem-shared';
/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 *
 * Hash: 0x8F57A89D | Since: unknown | API-Set: client
 */
export declare function getCamMatrix(camera: number | ICamera, rightVector: Vector3, forwardVector: Vector3, upVector: Vector3, position: Vector3): void;
/**
 * I filled p1-p6 (the floats) as they are as other natives with 6 floats in a row are similar and I see no other method. So if a test from anyone proves them wrong please correct.
 *
 * p7 (length) determines the length of the spline, affects camera path and duration of transition between previous node and this one
 *
 * p8 big values ~100 will slow down the camera movement before reaching this node
 *
 * p9 != 0 seems to override the rotation/pitch (bool?)
 *
 * Hash: 0x8609C75EC438FB3B | Since: 323 | API-Set: unknown
 */
export declare function addCamSplineNode(camera: number | ICamera, pos: Vector3, rot: Vector3, length: number, smoothingStyle: number, rotationOrder: number): void;
/**
 * p0 is the spline camera to which the node is being added.
 * p1 is the camera used to create the node.
 * p3 is always 3 in scripts. It might be smoothing style or rotation order.
 *
 * Hash: 0x0FB82563989CF4FB | Since: 323 | API-Set: unknown
 */
export declare function addCamSplineNodeUsing(cam: number | ICamera, cam2: number | ICamera, length: number): void;
/**
 * p0 is the spline camera to which the node is being added.
 * p1 is the camera used to create the node.
 * p3 is always 3 in scripts. It might be smoothing style or rotation order.
 *
 * Hash: 0x0A9F2A468B328E74 | Since: 323 | API-Set: unknown
 */
export declare function addCamSplineNodeUsingFrame(cam: number | ICamera, cam2: number | ICamera, length: number): void;
/**
 * p2 is always 2 in scripts. It might be smoothing style or rotation order.
 *
 * Hash: 0x609278246A29CA34 | Since: 323 | API-Set: unknown
 */
export declare function addCamSplineNodeUsingGameplayFrame(cam: number | ICamera, length: number): void;
/**
 * No comment provided
 *
 * Hash: 0x271017B9BA825366 | Since: 323 | API-Set: unknown
 */
export declare function allowMotionBlurDecay(): void;
/**
 * Example from michael2 script.
 *
 * `CAM::ANIMATED_SHAKE_CAM(l_5069, "shake_cam_all@", "light", "", 1f);`
 *
 * Hash: 0xA2746EEAE3E577CD | Since: 323 | API-Set: unknown
 */
export declare function animatedShakeCam(cam: number | ICamera, amplitude: number): void;
/**
 * `CAM::ANIMATED_SHAKE_SCRIPT_GLOBAL("SHAKE_CAM_medium", "medium", "", 0.5f);`
 *
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 *
 * Hash: 0xC2EAE3FB8CDBED31 | Since: 323 | API-Set: unknown
 */
export declare function animatedShakeScriptGlobal(): void;
/**
 * No comment provided
 *
 * Hash: 0x4879E4FE39074CDF | Since: 372 | API-Set: unknown
 */
export declare function areWidescreenBordersActive(): boolean;
/**
 * Last param determines if its relative to the Entity
 *
 * Hash: 0xFEDB7D269E8C60E3 | Since: 323 | API-Set: unknown
 */
export declare function attachCamToEntity(cam: number | ICamera, entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x61A3DBA14AB7F411 | Since: 323 | API-Set: unknown
 */
export declare function attachCamToPedBone(cam: number | ICamera, ped: number | IPed, boneIndex: number, pos: Vector3, heading: boolean): void;
/**
 * This native works with vehicles only. Bone indexes are usually given by this native GET_ENTITY_BONE_INDEX_BY_NAME.
 *
 * Hash: 0x8DB3F12A02CAEF72 | Since: 1290 | API-Set: unknown
 */
export declare function attachCamToVehicleBone(cam: number | ICamera, vehicle: number | IVehicle, boneIndex: number, relativeRotation: boolean, rot: Vector3, offsetX: number, offsetY: number, offsetZ: number, fixedDirection: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9F97DA93681F87EA | Since: 1734 | API-Set: unknown
 */
export declare function blockFirstPersonOrientationResetThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0xA7092AFE81944852 | Since: 2189 | API-Set: unknown
 */
export declare function bypassCollisionBuoyancyTestThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0xDB629FFD9285FA06 | Since: 323 | API-Set: unknown
 */
export declare function bypassCutsceneCamRenderingThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x62374889A4D59F72 | Since: 877 | API-Set: unknown
 */
export declare function preventCollisionSettingsForTripleheadInInteriorsThisUpdate(): void;
/**
 * "DEFAULT_SCRIPTED_CAMERA"
 * "DEFAULT_ANIMATED_CAMERA"
 * "DEFAULT_SPLINE_CAMERA"
 * "DEFAULT_SCRIPTED_FLY_CAMERA"
 * "TIMED_SPLINE_CAMERA"
 *
 * Hash: 0xC3981DCE61D9E13F | Since: 323 | API-Set: unknown
 */
export declare function createCam(camName: string): number;
/**
 * No comment provided
 *
 * Hash: 0x5E3CF89C6BCCA67D | Since: 323 | API-Set: unknown
 */
export declare function create(camHash: number | string): number;
/**
 * p9 uses 2 by default
 *
 * Hash: 0x6ABFA3E16460F22D | Since: 323 | API-Set: unknown
 */
export declare function createWithParams(camHash: number | string, pos: Vector3, rot: Vector3, fov: number): number;
/**
 * camName is always set to "DEFAULT_SCRIPTED_CAMERA" in Rockstar's scripts.
 * ------------
 * Camera names found in the b617d scripts:
 * "DEFAULT_ANIMATED_CAMERA"
 * "DEFAULT_SCRIPTED_CAMERA"
 * "DEFAULT_SCRIPTED_FLY_CAMERA"
 * "DEFAULT_SPLINE_CAMERA"
 * ------------
 * Side Note: It seems p8 is basically to represent what would be the bool p1 within CREATE_CAM native. As well as the p9 since it's always 2 in scripts seems to represent what would be the last param within SET_CAM_ROT native which normally would be 2.
 *
 * Hash: 0xB51194800B257161 | Since: 323 | API-Set: unknown
 */
export declare function createCamWithParams(camName: string, pos: Vector3, rot: Vector3, fov: number): number;
/**
 * hash is always JOAAT("CAMERA_MAN_SHOT") in decompiled scripts
 *
 * Hash: 0x741B0129D4560F31 | Since: 323 | API-Set: unknown
 */
export declare function createCinematicShot(p0: number | string, time: number, entity: number | IEntity): void;
/**
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 *
 * Hash: 0x8E5FB15663F79120 | Since: 323 | API-Set: unknown
 */
export declare function destroyAllCams(bScriptHostCam: boolean): void;
/**
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 *
 * Hash: 0x865908C81A2C22E9 | Since: 323 | API-Set: unknown
 */
export declare function destroyCam(cam: number | ICamera, bScriptHostCam: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xA2FABBE87F4BAD82 | Since: 323 | API-Set: unknown
 */
export declare function detachCam(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0x1A31FE0049E542F6 | Since: 323 | API-Set: unknown
 */
export declare function disableAimCamThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x49482F9FCD825AAA | Since: 323 | API-Set: unknown
 */
export declare function disableCamCollisionForObject(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xADFF1B2A555F5FBA | Since: 323 | API-Set: unknown
 */
export declare function disableCinematicBonnetThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x17FCA7199A530203 | Since: 323 | API-Set: unknown
 */
export declare function disableCinematicSlowMoThisUpdate(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x62ECFCFDEE7885D6 | Since: 323 | API-Set: unknown
 */
export declare function disableCinematicVehicleIdleModeThisUpdate(): void;
/**
 * Sets some flag on cinematic camera
 *
 * Hash: 0xB1381B97F70C7B30 | Since: 1180 | API-Set: unknown
 */
export declare function disableFirstPersonWaterClippingTestThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x59424BD75174C9B1 | Since: 323 | API-Set: unknown
 */
export declare function disableFirstPersonFlashEffectThisUpdate(): void;
/**
 * Shows the crosshair even if it wouldn't show normally. Only works for one frame, so make sure to call it repeatedly.
 *
 * Hash: 0xEA7F0AD7E9BA676F | Since: 323 | API-Set: unknown
 */
export declare function disableGameplayCamAltitudeFovScalingThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x5A43C76F7FC7BA5F | Since: 323 | API-Set: unknown
 */
export declare function disableNearClipScanThisUpdate(): void;
/**
 * Disables first person camera for the current frame.
 *
 * Found in decompiled scripts:
 * `GRAPHICS::DRAW_DEBUG_TEXT_2D("Disabling First Person Cam", 0.5, 0.8, 0.0, 0, 0, 255, 255);`
 * `CAM::DISABLE_ON_FOOT_FIRST_PERSON_VIEW_THIS_UPDATE();`
 *
 * Hash: 0xDE2EF5DA284CC8DF | Since: 323 | API-Set: unknown
 */
export declare function disableOnFootFirstPersonViewThisUpdate(): void;
/**
 * Returns whether or not the passed camera handle exists.
 *
 * Hash: 0xA7A932170592B50E | Since: 323 | API-Set: unknown
 */
export declare function doesCamExist(cam: number | ICamera): boolean;
/**
 * Fades the screen in.
 *
 * duration: The time the fade should take, in milliseconds.
 *
 * Hash: 0xD4E8E24955024033 | Since: 323 | API-Set: unknown
 */
export declare function doScreenFadeIn(duration: number): void;
/**
 * Fades the screen out.
 *
 * duration: The time the fade should take, in milliseconds.
 *
 * Hash: 0x891B5B39AC6302AF | Since: 323 | API-Set: unknown
 */
export declare function doScreenFadeOut(duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x28B022A17B068A3A | Since: 1734 | API-Set: unknown
 */
export declare function forceBonnetRelativeHeadingAndPitch(): void;
/**
 * No comment provided
 *
 * Hash: 0x48608C3464F58AB4 | Since: 505 | API-Set: unknown
 */
export declare function forceRelativeHeadingAndPitch(roll: number, pitch: number, yaw: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAABD62873FFB1A33 | Since: 2189 | API-Set: unknown
 */
export declare function forceCamFarClip(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0xA41BCD7213805AAC | Since: 323 | API-Set: unknown
 */
export declare function forceCinematicRenderingThisUpdate(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x380B4968D1E09E55 | Since: 1290 | API-Set: unknown
 */
export declare function forceTightspaceCustomFramingThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x0AA27680A0BD43FA | Since: 1103 | API-Set: unknown
 */
export declare function forceVehicleCamStuntSettingsThisUpdate(): void;
/**
 * enum Context
 * {
 * ON_FOOT,
 * IN_VEHICLE,
 * ON_BIKE,
 * IN_BOAT,
 * IN_AIRCRAFT,
 * IN_SUBMARINE,
 * IN_HELI,
 * IN_TURRET
 * };
 *
 * Hash: 0x19CAFA3C87F7C2FF | Since: 323 | API-Set: unknown
 */
export declare function getCamActiveViewModeContext(): number;
/**
 * No comment provided
 *
 * Hash: 0xA10B2DB49E92A6B0 | Since: 323 | API-Set: unknown
 */
export declare function getCamAnimCurrentPhase(cam: number | ICamera): number;
/**
 * No comment provided
 *
 * Hash: 0xBAC038F7459AE5AE | Since: 323 | API-Set: unknown
 */
export declare function getCamCoord(cam: number | ICamera): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x06D153C0B99B6128 | Since: 2699 | API-Set: unknown
 */
export declare function getCamDofStrength(cam: number | ICamera): number;
/**
 * No comment provided
 *
 * Hash: 0xB60A9CFEB21CA6AA | Since: 323 | API-Set: unknown
 */
export declare function getCamFarClip(cam: number | ICamera): number;
/**
 * No comment provided
 *
 * Hash: 0x255F8DAFD540D397 | Since: 323 | API-Set: unknown
 */
export declare function getCamFarDof(cam: number | ICamera): number;
/**
 * No comment provided
 *
 * Hash: 0xC3330A45CCCDB26A | Since: 323 | API-Set: unknown
 */
export declare function getCamFov(cam: number | ICamera): number;
/**
 * No comment provided
 *
 * Hash: 0xC520A34DAFBF24B1 | Since: 323 | API-Set: unknown
 */
export declare function getCamNearClip(cam: number | ICamera): number;
/**
 * No comment provided
 *
 * Hash: 0xC2612D223D915A1C | Since: 2699 | API-Set: unknown
 */
export declare function getCamNearDof(cam: number | ICamera): number;
/**
 * The last parameter, as in other "ROT" methods, is usually 2.
 *
 * Hash: 0x7D304C1C955E3E12 | Since: 323 | API-Set: unknown
 */
export declare function getCamRot(cam: number | ICamera, rotationOrder: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xB22B17DF858716A6 | Since: 323 | API-Set: unknown
 */
export declare function getCamSplineNodeIndex(cam: number | ICamera): number;
/**
 * I'm pretty sure the parameter is the camera as usual, but I am not certain so I'm going to leave it as is.
 *
 * Hash: 0xD9D0E694C8282C96 | Since: 323 | API-Set: unknown
 */
export declare function getCamSplineNodePhase(cam: number | ICamera): number;
/**
 * Can use this with SET_CAM_SPLINE_PHASE to set the float it this native returns.
 *
 * (returns 1.0f when no nodes has been added, reached end of non existing spline)
 *
 * Hash: 0xB5349E36C546509A | Since: 323 | API-Set: unknown
 */
export declare function getCamSplinePhase(cam: number | ICamera): number;
/**
 * context: see _GET_CAM_ACTIVE_VIEW_MODE_CONTEXT
 *
 * Hash: 0xEE778F8C7E1142E2 | Since: 323 | API-Set: unknown
 */
export declare function getCamViewModeForContext(context: number): number;
/**
 * No comment provided
 *
 * Hash: 0x77C3CEC46BE286F6 | Since: 2372 | API-Set: unknown
 */
export declare function getDebugCam(): number;
/**
 * No comment provided
 *
 * Hash: 0xA200EB1EE790F448 | Since: 323 | API-Set: unknown
 */
export declare function getFinalRenderedCamCoord(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xDFC8CBC606FDB0FC | Since: 323 | API-Set: unknown
 */
export declare function getFinalRenderedCamFarClip(): number;
/**
 * No comment provided
 *
 * Hash: 0x9780F32BCAF72431 | Since: 323 | API-Set: unknown
 */
export declare function getFinalRenderedCamFarDof(): number;
/**
 * Gets some camera fov
 *
 * Hash: 0x80EC114669DAEFF4 | Since: 323 | API-Set: unknown
 */
export declare function getFinalRenderedCamFov(): number;
/**
 * No comment provided
 *
 * Hash: 0x162F9D995753DC19 | Since: 323 | API-Set: unknown
 */
export declare function getFinalRenderedCamMotionBlurStrength(): number;
/**
 * No comment provided
 *
 * Hash: 0xD0082607100D7193 | Since: 323 | API-Set: unknown
 */
export declare function getFinalRenderedCamNearClip(): number;
/**
 * No comment provided
 *
 * Hash: 0xA03502FC581F7D9B | Since: 323 | API-Set: unknown
 */
export declare function getFinalRenderedCamNearDof(): number;
/**
 * p0 seems to consistently be 2 across scripts
 *
 * `Function is called faily often by CAM::CREATE_CAM_WITH_PARAMS`
 *
 * Hash: 0x5B4E4C817FCC2DFB | Since: 323 | API-Set: unknown
 */
export declare function getFinalRenderedCamRot(rotationOrder: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x5F35F6732C3FBBA0 | Since: 323 | API-Set: unknown
 */
export declare function getFinalRenderedRemotePlayerCamFov(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x26903D9CD1175F2C | Since: 323 | API-Set: unknown
 */
export declare function getFinalRenderedRemotePlayerCamRot(player: number | string | IPlayer, rotationOrder: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x7EC52CC40597D170 | Since: 323 | API-Set: unknown
 */
export declare function getFirstPersonAimCamZoomFactor(): number;
/**
 * No comment provided
 *
 * Hash: 0x89215EC747DF244A | Since: 323 | API-Set: unknown
 */
export declare function getFocusPedOnScreen(): number;
/**
 * See viewmode enum in CAM.GET_FOLLOW_VEHICLE_CAM_VIEW_MODE for return value
 *
 * Hash: 0x8D4D46230B2C353A | Since: 323 | API-Set: unknown
 */
export declare function getFollowPedCamViewMode(): number;
/**
 * No comment provided
 *
 * Hash: 0x33E6C8EFD0CD93E9 | Since: 323 | API-Set: unknown
 */
export declare function getFollowPedCamZoomLevel(): number;
/**
 * Returns the type of camera:
 *
 * enum _viewmode //0xA11D7CA8
 * {
 * THIRD_PERSON_NEAR = 0,
 * THIRD_PERSON_MEDIUM = 1,
 * THIRD_PERSON_FAR = 2,
 * CINEMATIC = 3,
 * FIRST_PERSON = 4
 * };
 *
 * Hash: 0xA4FF579AC0E3AAAE | Since: 323 | API-Set: unknown
 */
export declare function getFollowVehicleCamViewMode(): number;
/**
 * No comment provided
 *
 * Hash: 0xEE82280AB767B690 | Since: 323 | API-Set: unknown
 */
export declare function getFollowVehicleCamZoomLevel(): number;
/**
 * No comment provided
 *
 * Hash: 0x14D6F5678D8F1B37 | Since: 323 | API-Set: unknown
 */
export declare function getGameplayCamCoord(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x65019750A0324133 | Since: 323 | API-Set: unknown
 */
export declare function getGameplayCamFov(): number;
/**
 * No comment provided
 *
 * Hash: 0x743607648ADD4587 | Since: 323 | API-Set: unknown
 */
export declare function getGameplayCamRelativeHeading(): number;
/**
 * No comment provided
 *
 * Hash: 0x3A6867B4845BEDA2 | Since: 323 | API-Set: unknown
 */
export declare function getGameplayCamRelativePitch(): number;
/**
 * p0 dosen't seem to change much, I tried it with 0, 1, 2:
 * 0-Pitch(X): -70.000092
 * 0-Roll(Y): -0.000001
 * 0-Yaw(Z): -43.886459
 * 1-Pitch(X): -70.000092
 * 1-Roll(Y): -0.000001
 * 1-Yaw(Z): -43.886463
 * 2-Pitch(X): -70.000092
 * 2-Roll(Y): -0.000002
 * 2-Yaw(Z): -43.886467
 *
 * Hash: 0x837765A25378F0BB | Since: 323 | API-Set: unknown
 */
export declare function getGameplayCamRot(rotationOrder: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x5234F9F10919EABA | Since: 323 | API-Set: unknown
 */
export declare function getRenderingCam(): number;
/**
 * Example from am_mp_drone script:
 *
 * `CAM::HARD_ATTACH_CAM_TO_ENTITY(Local_190.f_169, NETWORK::NET_TO_OBJ(Local_190.f_159), 0f, 0f, 180f, Var0, 1);`
 *
 * Hash: 0x202A5ED9CE01D6E7 | Since: 2189 | API-Set: unknown
 */
export declare function hardAttachCamToEntity(cam: number | ICamera, entity: number | IEntity, rot: Vector3, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x149916F50C34A40D | Since: 1180 | API-Set: unknown
 */
export declare function hardAttachCamToPedBone(cam: number | ICamera, ped: number | IPed, boneIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7B8A361C1813FBEF | Since: 573 | API-Set: unknown
 */
export declare function ignoreMenuPreferenceForBonnetThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0xDDA77EE33C005AAF | Since: 3258 | API-Set: unknown
 */
export declare function interpolateWithParams(camera: number | ICamera, camPosX: number, camPosY: number, camPosZ: number, camRotX: number, camRotY: number, camRotZ: number, fov: number, duration: number, posCurveType: number, rotCurveType: number, rotOrder: number, fovCurveType: number): void;
/**
 * Resets the vehicle idle camera timer. Calling this in a loop will disable the idle camera.
 *
 * Hash: 0x9E4CFFF989258472 | Since: 323 | API-Set: unknown
 */
export declare function invalidateCinematicVehicleIdleMode(): void;
/**
 * Resets the idle camera timer. Calling that in a loop once every few seconds is enough to disable the idle cinematic camera.
 *
 * Hash: 0xF4F2C0D4EE209E20 | Since: 323 | API-Set: unknown
 */
export declare function invalidateIdleCam(): void;
/**
 * No comment provided
 *
 * Hash: 0x68EDDA28A5976D07 | Since: 323 | API-Set: unknown
 */
export declare function isAimCamActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x74BD83EA840F6BC9 | Since: 323 | API-Set: unknown
 */
export declare function isAimCamActiveInAccurateMode(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEAF0FA793D05C592 | Since: 323 | API-Set: unknown
 */
export declare function isAllowedIndependentModes(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD7360051C885628B | Since: 372 | API-Set: unknown
 */
export declare function isBonnetCinematicCamRendering(): boolean;
/**
 * Returns whether or not the passed camera handle is active.
 *
 * Hash: 0xDFB2B516207D3534 | Since: 323 | API-Set: unknown
 */
export declare function isCamActive(cam: number | ICamera): boolean;
/**
 * No comment provided
 *
 * Hash: 0x036F97C908C2B52C | Since: 323 | API-Set: unknown
 */
export declare function isCamInterpolating(cam: number | ICamera): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC90621D8A0CEECF2 | Since: 323 | API-Set: unknown
 */
export declare function isCamPlayingAnim(cam: number | ICamera, animName: string, animDictionary: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x02EC0AF5C5A49B7A | Since: 323 | API-Set: unknown
 */
export declare function isCamRendering(cam: number | ICamera): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6B24BFE83A2BE47B | Since: 323 | API-Set: unknown
 */
export declare function isCamShaking(cam: number | ICamera): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0290F35C0AD97864 | Since: 323 | API-Set: unknown
 */
export declare function isCamSplinePaused(cam: number | ICamera): boolean;
/**
 * Tests some cinematic camera flags
 *
 * Hash: 0xF5F1E89A970B7796 | Since: 1493 | API-Set: unknown
 */
export declare function isCinematicCamInputActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB15162CB5826E9E8 | Since: 323 | API-Set: unknown
 */
export declare function isCinematicCamRendering(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBBC08F6B4CB8FF0A | Since: 323 | API-Set: unknown
 */
export declare function isCinematicCamShaking(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4F32C0D5A90A9B40 | Since: 323 | API-Set: unknown
 */
export declare function isCinematicFirstPersonVehicleInteriorCamRendering(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCA9D2AA3E326D720 | Since: 323 | API-Set: unknown
 */
export declare function isCinematicIdleCamRendering(): boolean;
/**
 * Hash is always JOAAT("CAMERA_MAN_SHOT") in decompiled scripts
 *
 * Hash: 0xCC9F3371A7C28BC9 | Since: 323 | API-Set: unknown
 */
export declare function isCinematicShotActive(p0: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBF72910D0F26F025 | Since: 323 | API-Set: unknown
 */
export declare function isCodeGameplayHintActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5E346D934122613F | Since: 323 | API-Set: unknown
 */
export declare function isFirstPersonAimCamActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC6D3D26810C8E0F9 | Since: 323 | API-Set: unknown
 */
export declare function isFollowPedCamActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCBBDE6D335D6D496 | Since: 323 | API-Set: unknown
 */
export declare function isFollowVehicleCamActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x70FDA869F3317EA9 | Since: 323 | API-Set: unknown
 */
export declare function isGameplayCamLookingBehind(): boolean;
/**
 * Examples when this function will return 0 are:
 * - During busted screen.
 * - When player is coming out from a hospital.
 * - When player is coming out from a police station.
 * - When player is buying gun from AmmuNation.
 *
 * Hash: 0x39B5D1B10383F0C8 | Since: 323 | API-Set: unknown
 */
export declare function isGameplayCamRendering(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x016C090630DF1F89 | Since: 323 | API-Set: unknown
 */
export declare function isGameplayCamShaking(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE520FF1AD2785B40 | Since: 323 | API-Set: unknown
 */
export declare function isGameplayHintActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3044240D2E0FA842 | Since: 323 | API-Set: unknown
 */
export declare function isInterpolatingFromScriptCams(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x705A276EBFF3133D | Since: 323 | API-Set: unknown
 */
export declare function isInterpolatingToScriptCams(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1F2300CB7FA7B7F6 | Since: 323 | API-Set: unknown
 */
export declare function isInVehicleMobilePhoneRendering(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5A859503B0C08678 | Since: 323 | API-Set: unknown
 */
export declare function isScreenFadedIn(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB16FCE9DDC7BA182 | Since: 323 | API-Set: unknown
 */
export declare function isScreenFadedOut(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5C544BC6C57AC575 | Since: 323 | API-Set: unknown
 */
export declare function isScreenFadingIn(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x797AC7CB535BA28F | Since: 323 | API-Set: unknown
 */
export declare function isScreenFadingOut(): boolean;
/**
 * In drunk_controller.c4, sub_309
 * `if (CAM::IS_SCRIPT_GLOBAL_SHAKING()) {`
 * `CAM::STOP_SCRIPT_GLOBAL_SHAKING(0);`
 * }
 *
 * Hash: 0xC912AF078AF19212 | Since: 323 | API-Set: unknown
 */
export declare function isScriptGlobalShaking(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE33D59DA70B58FDF | Since: 323 | API-Set: unknown
 */
export declare function isSphereVisible(pos: Vector3, radius: number): boolean;
/**
 * Max value for p1 is 15.
 *
 * Hash: 0x7DCF7C708D292D55 | Since: 323 | API-Set: unknown
 */
export declare function overrideCamSplineMotionBlur(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0x40B62FA033EB0346 | Since: 323 | API-Set: unknown
 */
export declare function overrideCamSplineVelocity(cam: number | ICamera): void;
/**
 * Atleast one time in a script for the zRot Rockstar uses GET_ENTITY_HEADING to help fill the parameter.
 *
 * p9 is unknown at this time.
 * p10 throughout all the X360 Scripts is always 2.
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x9A2D0FB2E7852392 | Since: 323 | API-Set: unknown
 */
export declare function playCamAnim(cam: number | ICamera, animName: string, animDictionary: string, pos: Vector3, rot: Vector3): boolean;
/**
 * Examples:
 *
 * `CAM::PLAY_SYNCHRONIZED_CAM_ANIM(l_2734, NETWORK::NETWORK_GET_LOCAL_SCENE_FROM_NETWORK_ID(l_2739), "PLAYER_EXIT_L_CAM", "mp_doorbell");`
 *
 * `CAM::PLAY_SYNCHRONIZED_CAM_ANIM(l_F0D[7\/\*1\*\/], l_F4D[15\/\*1\*\/], "ah3b_attackheli_cam2", "missheistfbi3b_helicrash");`
 *
 * Hash: 0xE32EFE9AB4A9AA0C | Since: 323 | API-Set: unknown
 */
export declare function playSynchronizedCamAnim(animName: string, animDictionary: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF75497BB865F0803 | Since: 323 | API-Set: unknown
 */
export declare function pointCamAtCoord(cam: number | ICamera, pos: Vector3): void;
/**
 * p5 always seems to be 1 i.e TRUE
 *
 * Hash: 0x5640BFF86B16E8DC | Since: 323 | API-Set: unknown
 */
export declare function pointCamAtEntity(cam: number | ICamera, entity: number | IEntity): void;
/**
 * Parameters p0-p5 seems correct. The bool p6 is unknown, but through every X360 script it's always 1. Please correct p0-p5 if any prove to be wrong.
 *
 * Hash: 0x68B2B5F33BA63C41 | Since: 323 | API-Set: unknown
 */
export declare function pointCamAtPedBone(cam: number | ICamera, ped: number | IPed, boneIndex: number, pos: Vector3): void;
/**
 * ease - smooth transition between the camera's positions
 * easeTime - Time in milliseconds for the transition to happen
 *
 * If you have created a script (rendering) camera, and want to go back to the
 * character (gameplay) camera, call this native with render set to 0.
 * Setting ease to 1 will smooth the transition.
 *
 * Hash: 0x07E5B515DB0636FC | Since: 323 | API-Set: unknown
 */
export declare function renderScriptCams(render: boolean, ease: boolean, easeTime: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8BFCEB5EA1B161B6 | Since: 323 | API-Set: unknown
 */
export declare function replayGetMaxDistanceAllowedFromPlayer(): number;
/**
 * No comment provided
 *
 * Hash: 0x7295C203DD659DFE | Since: 2699 | API-Set: unknown
 */
export declare function resetGameplayCamFullAttachParentTransformTimer(): void;
/**
 * No comment provided
 *
 * Hash: 0x4008EDF7D6E48175 | Since: 323 | API-Set: unknown
 */
export declare function setAllowCustomVehicleDriveByCamThisUpdate(): void;
/**
 * Set camera as active/inactive.
 *
 * Hash: 0x026FB97D0A425F84 | Since: 323 | API-Set: unknown
 */
export declare function setCamActive(cam: number | ICamera, active: boolean): void;
/**
 * Previous declaration void SET_CAM_ACTIVE_WITH_INTERP(Cam camTo, Cam camFrom, int duration, BOOL easeLocation, BOOL easeRotation) is completely wrong. The last two params are integers not BOOLs...
 *
 *
 * Hash: 0x9FBDA379383A52A4 | Since: 323 | API-Set: unknown
 */
export declare function setCamActiveWithInterp(camTo: number | ICamera, camFrom: number | ICamera, duration: number, easeLocation: number, easeRotation: number): void;
/**
 * Allows you to aim and shoot at the direction the camera is facing.
 *
 * Hash: 0x8C1DC7770C51DC8D | Since: 323 | API-Set: unknown
 */
export declare function setCamAffectsAiming(cam: number | ICamera, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x4145A4C44FF3B5A6 | Since: 323 | API-Set: unknown
 */
export declare function setCamAnimCurrentPhase(cam: number | ICamera, phase: number): void;
/**
 * Rotates the radar to match the camera's Z rotation
 *
 * Hash: 0x661B5C8654ADD825 | Since: 323 | API-Set: unknown
 */
export declare function setCamControlsMiniMapHeading(cam: number | ICamera, toggle: boolean): void;
/**
 * Sets the position of the cam.
 *
 * Hash: 0x4D41783FB745E42E | Since: 323 | API-Set: unknown
 */
export declare function setCamCoord(cam: number | ICamera, pos: Vector3): void;
/**
 * if p0 is 0, effect is cancelled
 *
 * if p0 is 1, effect zooms in, gradually tilts cam clockwise apx 30 degrees, wobbles slowly. Motion blur is active until cancelled.
 *
 * if p0 is 2, effect immediately tilts cam clockwise apx 30 degrees, begins to wobble slowly, then gradually tilts cam back to normal. The wobbling will continue until the effect is cancelled.
 *
 * Hash: 0x80C8B1846639BB19 | Since: 323 | API-Set: unknown
 */
export declare function setCamDeathFailEffectState(): void;
/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 *
 * Hash: 0x1B93E0107865DD40 | Since: 323 | API-Set: unknown
 */
export declare function setCamDebugName(camera: number | ICamera, name: string): void;
/**
 * This native has its name defined inside its codE
 *
 *
 * Hash: 0x7DD234D6F3914C5B | Since: 323 | API-Set: unknown
 */
export declare function setCamDofFnumberOfLens(camera: number | ICamera): void;
/**
 * Native name labeled within its code
 *
 * Hash: 0x47B595D60664CFFA | Since: 1011 | API-Set: unknown
 */
export declare function setCamDofFocalLengthMultiplier(camera: number | ICamera, multiplier: number): void;
/**
 * This native has a name defined inside its code
 *
 * Hash: 0xC669EEA5D031B7DE | Since: 323 | API-Set: unknown
 */
export declare function setCamDofFocusDistanceBias(camera: number | ICamera): void;
/**
 * This native has a name defined inside its code
 *
 * Hash: 0xC3654A441402562D | Since: 323 | API-Set: unknown
 */
export declare function setCamDofMaxNearInFocusDistance(camera: number | ICamera): void;
/**
 * This native has a name defined inside its code
 *
 * Hash: 0x2C654B4943BDDF7C | Since: 323 | API-Set: unknown
 */
export declare function setCamDofMaxNearInFocusDistanceBlendLevel(camera: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0xF55E4046F6F831DC | Since: 323 | API-Set: unknown
 */
export declare function setCamDofOverriddenFocusDistance(camera: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0xE111A7C0D200CBC5 | Since: 323 | API-Set: unknown
 */
export declare function setCamDofOverriddenFocusDistanceBlendLevel(): void;
/**
 * No comment provided
 *
 * Hash: 0x3CF48F6F96E749DC | Since: 323 | API-Set: unknown
 */
export declare function setCamDofPlanes(cam: number | ICamera): void;
/**
 * This native has a name defined inside its code
 *
 * Hash: 0x7CF3AF51DCFE4108 | Since: 2944 | API-Set: unknown
 */
export declare function setCamDofShouldKeepLookAtTargetInFocus(camera: number | ICamera, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5EE29B4D7D5DF897 | Since: 323 | API-Set: unknown
 */
export declare function setCamDofStrength(cam: number | ICamera, dofStrength: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAE306F2A904BF86E | Since: 323 | API-Set: unknown
 */
export declare function setCamFarClip(cam: number | ICamera, farClip: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEDD91296CD01AEE0 | Since: 323 | API-Set: unknown
 */
export declare function setCamFarDof(cam: number | ICamera, farDOF: number): void;
/**
 * Sets the field of view of the cam.
 * ---------------------------------------------
 * Min: 1.0f
 * Max: 130.0f
 *
 * Hash: 0xB13C14F66A00D047 | Since: 323 | API-Set: unknown
 */
export declare function setCamFov(cam: number | ICamera, fieldOfView: number): void;
/**
 * The native seems to only be called once.
 *
 * The native is used as so,
 * `CAM::SET_CAM_INHERIT_ROLL_VEHICLE(l_544, getElem(2, &l_525, 4));`
 * In the exile1 script.
 *
 * Hash: 0x45F1DE9C34B93AE6 | Since: 323 | API-Set: unknown
 */
export declare function setCamInheritRollVehicle(cam: number | ICamera): void;
/**
 * When set to true shadows appear more smooth but less detailed.
 * Set to false by default.
 *
 * Hash: 0xA2767257A320FC82 | Since: 323 | API-Set: unknown
 */
export declare function setCamIsInsideVehicle(cam: number | ICamera, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x6F0F77FBA9A8F2E6 | Since: 323 | API-Set: unknown
 */
export declare function setCamMotionBlurStrength(cam: number | ICamera, strength: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC7848EFCCC545182 | Since: 323 | API-Set: unknown
 */
export declare function setCamNearClip(cam: number | ICamera, nearClip: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3FA4BF0A7AB7DE2C | Since: 323 | API-Set: unknown
 */
export declare function setCamNearDof(cam: number | ICamera, nearDOF: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBFD8727AEA3CCEBA | Since: 323 | API-Set: unknown
 */
export declare function setCamParams(cam: number | ICamera, pos: Vector3, rot: Vector3, fieldOfView: number): void;
/**
 * Sets the rotation of the cam.
 * Last parameter unknown.
 *
 * Last parameter seems to always be set to 2.
 *
 * Hash: 0x85973643155D0B07 | Since: 323 | API-Set: unknown
 */
export declare function setCamRot(cam: number | ICamera, rot: Vector3, rotationOrder: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD93DB43B82BC0D00 | Since: 323 | API-Set: unknown
 */
export declare function setCamShakeAmplitude(cam: number | ICamera, amplitude: number): void;
/**
 * I named p1 as timeDuration as it is obvious. I'm assuming tho it is ran in ms(Milliseconds) as usual.
 *
 * Hash: 0x1381539FEE034CDA | Since: 323 | API-Set: unknown
 */
export declare function setCamSplineDuration(cam: number | ICamera, timeDuration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x83B8201ED82A9A2D | Since: 323 | API-Set: unknown
 */
export declare function setCamSplineNodeEase(cam: number | ICamera, easingFunction: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7BF1A54AE67AC070 | Since: 323 | API-Set: unknown
 */
export declare function setCamSplineNodeExtraFlags(cam: number | ICamera, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA6385DEB180F319F | Since: 323 | API-Set: unknown
 */
export declare function setCamSplineNodeVelocityScale(cam: number | ICamera, scale: number): void;
/**
 * No comment provided
 *
 * Hash: 0x242B5874F0A4E052 | Since: 323 | API-Set: unknown
 */
export declare function setCamSplinePhase(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0xD1B0F412F109EA5D | Since: 323 | API-Set: unknown
 */
export declare function setCamSplineSmoothingStyle(cam: number | ICamera, smoothingStyle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x16A96863A17552BB | Since: 323 | API-Set: unknown
 */
export declare function setCamUseShallowDofMode(cam: number | ICamera, toggle: boolean): void;
/**
 * context: see _GET_CAM_ACTIVE_VIEW_MODE_CONTEXT, viewmode: see CAM.GET_FOLLOW_VEHICLE_CAM_VIEW_MODE
 *
 * Hash: 0x2A2173E46DAECD12 | Since: 323 | API-Set: unknown
 */
export declare function setCamViewModeForContext(context: number, viewMode: number): void;
/**
 * No comment provided
 *
 * Hash: 0x51669F7D1FB53D9F | Since: 323 | API-Set: unknown
 */
export declare function setCinematicButtonActive(): void;
/**
 * No comment provided
 *
 * Hash: 0xC724C701C30B2FE7 | Since: 323 | API-Set: unknown
 */
export declare function setCinematicCamShakeAmplitude(): void;
/**
 * Toggles the vehicle cinematic cam; requires the player ped to be in a vehicle to work.
 *
 * Hash: 0xDCF0754AC3D6FD4E | Since: 323 | API-Set: unknown
 */
export declare function setCinematicModeActive(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDC9DA9E8789F5246 | Since: 323 | API-Set: unknown
 */
export declare function setCinematicNewsChannelActiveThisUpdate(): void;
/**
 * Hardcoded to only work in multiplayer.
 *
 * Hash: 0x12DED8CA53D47EA5 | Since: 323 | API-Set: unknown
 */
export declare function setCutsceneCamFarClipThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x0AF7B437918103B3 | Since: 323 | API-Set: unknown
 */
export declare function setFirstPersonAimCamNearClipThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x2F7F2B26DD3F18EE | Since: 323 | API-Set: unknown
 */
export declare function setFirstPersonAimCamRelativeHeadingLimitsThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0xBCFC632DB7673BF0 | Since: 323 | API-Set: unknown
 */
export declare function setFirstPersonAimCamRelativePitchLimitsThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x70894BD0915C5BCA | Since: 323 | API-Set: unknown
 */
export declare function setFirstPersonAimCamZoomFactor(zoomFactor: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCED08CBE8EBB97C7 | Since: 323 | API-Set: unknown
 */
export declare function setFirstPersonAimCamZoomFactorLimitsThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x5C41E6BABC9E2112 | Since: 323 | API-Set: unknown
 */
export declare function setFirstPersonFlashEffectType(): void;
/**
 * No comment provided
 *
 * Hash: 0x11FA5D3479C7DD47 | Since: 323 | API-Set: unknown
 */
export declare function setFirstPersonFlashEffectVehicleModelHash(vehicleModel: number | string): void;
/**
 * From b617 scripts:
 *
 * `CAM::SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_NAME("DINGHY");`
 * `CAM::SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_NAME("ISSI2");`
 * `CAM::SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_NAME("SPEEDO");`
 *
 * Hash: 0x21E253A7F8DA5DFB | Since: 323 | API-Set: unknown
 */
export declare function setFirstPersonFlashEffectVehicleModelName(vehicleName: string): void;
/**
 * Does nothing
 *
 * Hash: 0x103991D4A307D472 | Since: 323 | API-Set: unknown
 */
export declare function setFirstPersonShooterHeading(yaw: number): void;
/**
 * No comment provided
 *
 * Hash: 0x759E13EBC1C15C5A | Since: 323 | API-Set: unknown
 */
export declare function setFirstPersonShooterPitch(pitch: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC91C6C55199308CA | Since: 323 | API-Set: unknown
 */
export declare function setFlyCamCoordAndConstrain(cam: number | ICamera, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x503F5920162365B2 | Since: 323 | API-Set: unknown
 */
export declare function setFlyCamHorizontalResponse(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0xF9D02130ECDD1D77 | Since: 323 | API-Set: unknown
 */
export declare function setFlyCamMaxHeight(cam: number | ICamera, height: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC8B5C4A79CC18B94 | Since: 323 | API-Set: unknown
 */
export declare function setFlyCamVerticalControlsThisUpdate(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0xE827B9382CFB41BA | Since: 791 | API-Set: unknown
 */
export declare function setFlyCamVerticalResponse(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0xDD79DF9F4D26E1C9 | Since: 323 | API-Set: unknown
 */
export declare function setFollowCamIgnoreAttachParentMovementThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0xC8391C309684595A | Since: 323 | API-Set: unknown
 */
export declare function setFollowPedCamLadderAlignThisUpdate(): void;
/**
 * From the scripts:
 *
 * `CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_ATTACHED_TO_ROPE_CAMERA", 0);`
 * `CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_ON_EXILE1_LADDER_CAMERA", 1500);`
 * `CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_CAMERA", 0);`
 * `CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_CAMERA", 3000);`
 * `CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_FAMILY5_CAMERA", 0);`
 * `CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_CAMERA", 0);`
 *
 * Hash: 0x44A113DD6FFC48D1 | Since: 323 | API-Set: unknown
 */
export declare function setFollowPedCamThisUpdate(camName: string): boolean;
/**
 * Sets the type of Player camera:
 *
 * 0 - Third Person Close
 * 1 - Third Person Mid
 * 2 - Third Person Far
 * 4 - First Person
 *
 * Hash: 0x5A4F9EDF1673F704 | Since: 323 | API-Set: unknown
 */
export declare function setFollowPedCamViewMode(viewMode: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9DFE13ECDC1EC196 | Since: 323 | API-Set: unknown
 */
export declare function setFollowVehicleCamHighAngleModeEveryUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x91EF6EE6419E5B97 | Since: 323 | API-Set: unknown
 */
export declare function setFollowVehicleCamHighAngleModeThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x5C90CAB09951A12F | Since: 1365 | API-Set: unknown
 */
export declare function setFollowVehicleCamSeatThisUpdate(seatIndex: number): void;
/**
 * Sets the type of Player camera in vehicles:
 * viewmode: see CAM.GET_FOLLOW_VEHICLE_CAM_VIEW_MODE
 *
 * Hash: 0xAC253D7842768F48 | Since: 323 | API-Set: unknown
 */
export declare function setFollowVehicleCamViewMode(viewMode: number): void;
/**
 * No comment provided
 *
 * Hash: 0x19464CB6E4078C8A | Since: 323 | API-Set: unknown
 */
export declare function setFollowVehicleCamZoomLevel(zoomLevel: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDB90C6CCA48940F1 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayCamAltitudeFovScalingState(): void;
/**
 * No comment provided
 *
 * Hash: 0xFD3151CD37EA2245 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayCamEntityToLimitFocusOverBoundingSphereThisUpdate(entity: number | IEntity): void;
/**
 * Forces gameplay cam to specified ped as if you were the ped or spectating it
 *
 * Hash: 0x8BBACBF51DA047A8 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayCamFollowPedThisUpdate(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x2AED6301F67007D5 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayCamIgnoreEntityCollisionThisUpdate(entity: number | IEntity): void;
/**
 * some camera effect that is (also) used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled.
 *
 * Hash: 0x0225778816FDC28C | Since: 323 | API-Set: unknown
 */
export declare function setGameplayCamMaxMotionBlurStrengthThisUpdate(): void;
/**
 * some camera effect that is used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled.
 *
 * Hash: 0x487A82C650EB7799 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayCamMotionBlurScalingThisUpdate(): void;
/**
 * Sets the camera position relative to heading in float from -360 to +360.
 *
 * Heading is alwyas 0 in aiming camera.
 *
 * Hash: 0xB4EC2312F4E5B1F1 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayCamRelativeHeading(heading: number): void;
/**
 * This native sets the camera's pitch (rotation on the x-axis).
 *
 * Hash: 0x6D0858B8EDFD2B7D | Since: 323 | API-Set: unknown
 */
export declare function setGameplayCamRelativePitch(angle: number, scalingFactor: number): void;
/**
 * Sets the amplitude for the gameplay (i.e. 3rd or 1st) camera to shake. Used in script "drunk_controller.ysc.c4" to simulate making the player drunk.
 *
 * Hash: 0xA87E00932DB4D85D | Since: 323 | API-Set: unknown
 */
export declare function setGameplayCamShakeAmplitude(amplitude: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD51ADCD2D8BC0FB3 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayCoordHint(pos: Vector3, duration: number, blendOutDuration: number, blendInDuration: number): void;
/**
 * p8 could be some sort of flag. Scripts use:
 * -244429742
 * 0
 * 1726668277
 * 1844968929
 *
 * Hash: 0x189E955A8313E298 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayEntityHint(entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number, time: number, easeInTime: number, easeOutTime: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD1F8363DFAD03848 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayHintBaseOrbitPitchOffset(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE3433EADAAF7EE40 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayHintBlendToFollowPedMediumViewMode(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5D7B620DAE436138 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayHintRelativeSideOffset(xOffset: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC92717EF615B6704 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayHintRelativeVerticalOffset(yOffset: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF8BDBF3D573049A1 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayHintFollowDistanceScalar(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x513403FB9C56211F | Since: 323 | API-Set: unknown
 */
export declare function setGameplayHintFov(FOV: number): void;
/**
 * No comment provided
 *
 * Hash: 0x83E87508A2CA2AC6 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayObjectHint(_object: number | IObject, xOffset: number, yOffset: number, zOffset: number, time: number, easeInTime: number, easeOutTime: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2B486269ACD548D3 | Since: 323 | API-Set: unknown
 */
export declare function setGameplayPedHint(ped: number | IPed, x1: number, y1: number, z1: number, duration: number, blendOutDuration: number, blendInDuration: number): void;
/**
 * Focuses the camera on the specified vehicle.
 *
 * Hash: 0xA2297E18F3E71C2E | Since: 323 | API-Set: unknown
 */
export declare function setGameplayVehicleHint(vehicle: number | IVehicle, offsetX: number, offsetY: number, offsetZ: number, time: number, easeInTime: number, easeOutTime: number): void;
/**
 * Forces gameplay cam to specified vehicle as if you were in it
 *
 * Hash: 0xE9EA16D6E54CDCA4 | Since: 323 | API-Set: unknown
 */
export declare function setInVehicleCamStateThisUpdate(p0: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x469F2ECDEC046337 | Since: 323 | API-Set: unknown
 */
export declare function setScriptedIsFirstPersonThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x79C0E43EB9B944E2 | Since: 1734 | API-Set: unknown
 */
export declare function setTableGamesThisUpdate(hash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x42156508606DE65E | Since: 323 | API-Set: unknown
 */
export declare function setThirdPersonAimCamNearClipThisUpdate(): void;
/**
 * Seems to animate the gameplay camera zoom.
 *
 * Eg. SET_THIRD_PERSON_CAM_ORBIT_DISTANCE_LIMITS_THIS_UPDATE(1f, 1000f);
 * will animate the camera zooming in from 1000 meters away.
 *
 * Game scripts use it like this:
 *
 * // Setting this to 1 prevents V key from changing zoom
 * `PLAYER::SET_PLAYER_FORCED_ZOOM(PLAYER::PLAYER_ID(), 1);`
 *
 * // These restrict how far you can move cam up/down left/right
 * `CAM::SET_THIRD_PERSON_CAM_RELATIVE_HEADING_LIMITS_THIS_UPDATE(-20f, 50f);`
 * `CAM::SET_THIRD_PERSON_CAM_RELATIVE_PITCH_LIMITS_THIS_UPDATE(-60f, 0f);`
 *
 * `CAM::SET_THIRD_PERSON_CAM_ORBIT_DISTANCE_LIMITS_THIS_UPDATE(1f, 1f);`
 *
 * Hash: 0xDF2E1F7742402E81 | Since: 323 | API-Set: unknown
 */
export declare function setThirdPersonCamOrbitDistanceLimitsThisUpdate(distance: number): void;
/**
 * minimum: Degrees between -180f and 180f.
 * maximum: Degrees between -180f and 180f.
 *
 * Clamps the gameplay camera's current yaw.
 *
 * Eg. SET_THIRD_PERSON_CAM_RELATIVE_HEADING_LIMITS_THIS_UPDATE(0.0f, 0.0f) will set the horizontal angle directly behind the player.
 *
 * Hash: 0x8F993D26E0CA5E8E | Since: 323 | API-Set: unknown
 */
export declare function setThirdPersonCamRelativeHeadingLimitsThisUpdate(minimum: number, maximum: number): void;
/**
 * minimum: Degrees between -90f and 90f.
 * maximum: Degrees between -90f and 90f.
 *
 * Clamps the gameplay camera's current pitch.
 *
 * Eg. SET_THIRD_PERSON_CAM_RELATIVE_PITCH_LIMITS_THIS_UPDATE(0.0f, 0.0f) will set the vertical angle directly behind the player.
 *
 * Hash: 0xA516C198B7DCA1E1 | Since: 323 | API-Set: unknown
 */
export declare function setThirdPersonCamRelativePitchLimitsThisUpdate(minimum: number, maximum: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA13B0222F3D94A94 | Since: 323 | API-Set: unknown
 */
export declare function setUseHiDof(): void;
/**
 * Only used in R* Script fm_mission_controller_2020
 *
 * Hash: 0x731A880555DA3647 | Since: 2699 | API-Set: unknown
 */
export declare function setUseHiDofOnSyncedSceneThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0xDCD4EA924F42D01A | Since: 323 | API-Set: unknown
 */
export declare function setWidescreenBorders(): void;
/**
 * Possible shake types (updated b617d):
 *
 * DEATH_FAIL_IN_EFFECT_SHAKE
 * DRUNK_SHAKE
 * FAMILY5_DRUG_TRIP_SHAKE
 * HAND_SHAKE
 * JOLT_SHAKE
 * LARGE_EXPLOSION_SHAKE
 * MEDIUM_EXPLOSION_SHAKE
 * SMALL_EXPLOSION_SHAKE
 * ROAD_VIBRATION_SHAKE
 * SKY_DIVING_SHAKE
 * VIBRATE_SHAKE
 *
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 *
 * Hash: 0x6A25241C340D3822 | Since: 323 | API-Set: unknown
 */
export declare function shakeCam(cam: number | ICamera, _type: string, amplitude: number): void;
/**
 * p0 argument found in the b617d scripts: "DRUNK_SHAKE"
 *
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 *
 * Hash: 0xDCE214D9ED58F3CF | Since: 323 | API-Set: unknown
 */
export declare function shakeCinematicCam(shakeType: string, amount: number): void;
/**
 * Possible shake types (updated b617d):
 *
 * DEATH_FAIL_IN_EFFECT_SHAKE
 * DRUNK_SHAKE
 * FAMILY5_DRUG_TRIP_SHAKE
 * HAND_SHAKE
 * JOLT_SHAKE
 * LARGE_EXPLOSION_SHAKE
 * MEDIUM_EXPLOSION_SHAKE
 * SMALL_EXPLOSION_SHAKE
 * ROAD_VIBRATION_SHAKE
 * SKY_DIVING_SHAKE
 * VIBRATE_SHAKE
 *
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 *
 * Hash: 0xFD55E49555E017CF | Since: 323 | API-Set: unknown
 */
export declare function shakeGameplayCam(shakeName: string, intensity: number): void;
/**
 * `CAM::SHAKE_SCRIPT_GLOBAL("HAND_SHAKE", 0.2);`
 *
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 *
 * Hash: 0xF4C8CF9E353AFECA | Since: 323 | API-Set: unknown
 */
export declare function shakeScriptGlobal(): void;
/**
 * No comment provided
 *
 * Hash: 0xF33AB75780BA57DE | Since: 323 | API-Set: unknown
 */
export declare function stopCamPointing(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0xBDECF64367884AC3 | Since: 323 | API-Set: unknown
 */
export declare function stopCamShaking(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0x2238E588E588A6D7 | Since: 323 | API-Set: unknown
 */
export declare function stopCinematicCamShaking(): void;
/**
 * Only used once in carsteal3 with p0 set to -1096069633 (CAMERA_MAN_SHOT)
 *
 * Hash: 0x7660C6E75D3A078E | Since: 323 | API-Set: unknown
 */
export declare function stopCinematicShot(p0: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x247ACBC4ABBC9D1C | Since: 323 | API-Set: unknown
 */
export declare function stopCodeGameplayHint(): void;
/**
 * No comment provided
 *
 * Hash: 0x324C5AA411DA7737 | Since: 323 | API-Set: unknown
 */
export declare function stopCutsceneCamShaking(): void;
/**
 * No comment provided
 *
 * Hash: 0x0EF93E9F3D08C178 | Since: 323 | API-Set: unknown
 */
export declare function stopGameplayCamShaking(): void;
/**
 * No comment provided
 *
 * Hash: 0xF46C581C61718916 | Since: 323 | API-Set: unknown
 */
export declare function stopGameplayHint(): void;
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0xCCD078C2665D2973 | Since: 323 | API-Set: unknown
 */
export declare function stopGameplayHintBeingCancelledThisUpdate(): void;
/**
 * This native makes the gameplay camera zoom into first person/third person with a special effect.
 *
 * Hash: 0xC819F3CBB62BF692 | Since: 323 | API-Set: unknown
 */
export declare function stopRenderingScriptCamsUsingCatchUp(render: boolean): void;
/**
 * In drunk_controller.c4, sub_309
 * `if (CAM::IS_SCRIPT_GLOBAL_SHAKING()) {`
 * `CAM::STOP_SCRIPT_GLOBAL_SHAKING(0);`
 * }
 *
 * Hash: 0x1C9D7949FA533490 | Since: 323 | API-Set: unknown
 */
export declare function stopScriptGlobalShaking(): void;
/**
 * p1: 0..16
 *
 * Hash: 0x5D96CFB59DA076A0 | Since: 2060 | API-Set: unknown
 */
export declare function triggerVehiclePartBrokenShake(vehicle: number | IVehicle): void;
/**
 * Sets gameplay camera to hash
 *
 * Hash: 0x425A920FDB9A0DDA | Since: 1180 | API-Set: unknown
 */
export declare function useDedicatedStuntThisUpdate(camName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x271401846BD26E92 | Since: 323 | API-Set: unknown
 */
export declare function useScriptCamForAmbientPopulationOriginThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x6493CF69859B116A | Since: 791 | API-Set: unknown
 */
export declare function useVehicleCamStuntSettingsThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x5C48A1D6E3B33179 | Since: 323 | API-Set: unknown
 */
export declare function wasFlyCamConstrainedOnPreviousUdpate(cam: number | ICamera): boolean;
/**
 * No comment provided
 *
 * Hash: 0x34CFC4C2A38E83E3 | Since: 3258 | API-Set: unknown
 */
export declare function activateCamWithInterpAndFovCurve(camTo: number | ICamera, camFrom: number | ICamera, duration: number, easeLocation: number, easeRotation: number, easeFov: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD4592A16D36673ED | Since: 3095 | API-Set: unknown
 */
export declare function getThirdPersonCamMaxOrbitDistanceSpring(): number;
/**
 * No comment provided
 *
 * Hash: 0xBC456FB703431785 | Since: 3095 | API-Set: unknown
 */
export declare function getThirdPersonCamMinOrbitDistanceSpring(): number;
