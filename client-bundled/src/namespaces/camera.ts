import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 * 
 * Hash: 0x8F57A89D | Since: unknown | API-Set: client
 */
export function getCamMatrix(camera: number | ICamera, rightVector: Vector3, forwardVector: Vector3, upVector: Vector3, position: Vector3): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    GetCamMatrix(_camera, rightVector, forwardVector, upVector, position);
}

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
export function addCamSplineNode(camera: number | ICamera, pos: Vector3, rot: Vector3, length: number, smoothingStyle: number, rotationOrder: number): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    AddCamSplineNode(_camera, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, length, smoothingStyle, rotationOrder);
}

/**
 * p0 is the spline camera to which the node is being added.
 * p1 is the camera used to create the node.
 * p3 is always 3 in scripts. It might be smoothing style or rotation order.
 * 
 * Hash: 0x0FB82563989CF4FB | Since: 323 | API-Set: unknown
 */
export function addCamSplineNodeUsing(cam: number | ICamera, cam2: number | ICamera, length: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    const _cam2 = typeof cam2 == 'object' ? cam2.handle() : cam2;
    AddCamSplineNodeUsingCamera(_cam, _cam2, length, 0);
}

/**
 * p0 is the spline camera to which the node is being added.
 * p1 is the camera used to create the node.
 * p3 is always 3 in scripts. It might be smoothing style or rotation order.
 * 
 * Hash: 0x0A9F2A468B328E74 | Since: 323 | API-Set: unknown
 */
export function addCamSplineNodeUsingFrame(cam: number | ICamera, cam2: number | ICamera, length: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    const _cam2 = typeof cam2 == 'object' ? cam2.handle() : cam2;
    AddCamSplineNodeUsingCameraFrame(_cam, _cam2, length, 0);
}

/**
 * p2 is always 2 in scripts. It might be smoothing style or rotation order.
 * 
 * Hash: 0x609278246A29CA34 | Since: 323 | API-Set: unknown
 */
export function addCamSplineNodeUsingGameplayFrame(cam: number | ICamera, length: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    AddCamSplineNodeUsingGameplayFrame(_cam, length, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x271017B9BA825366 | Since: 323 | API-Set: unknown
 */
export function allowMotionBlurDecay(): void {
    Citizen.invokeNative('0x271017B9BA825366', undefined, false);
}

/**
 * Example from michael2 script.
 * 
 * `CAM::ANIMATED_SHAKE_CAM(l_5069, "shake_cam_all@", "light", "", 1f);`
 * 
 * Hash: 0xA2746EEAE3E577CD | Since: 323 | API-Set: unknown
 */
export function animatedShakeCam(cam: number | ICamera, amplitude: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    AnimatedShakeCam(_cam, undefined, undefined, undefined, amplitude);
}

/**
 * `CAM::ANIMATED_SHAKE_SCRIPT_GLOBAL("SHAKE_CAM_medium", "medium", "", 0.5f);`
 * 
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 * 
 * Hash: 0xC2EAE3FB8CDBED31 | Since: 323 | API-Set: unknown
 */
export function animatedShakeScriptGlobal(): void {
    AnimatedShakeScriptGlobal(undefined, undefined, undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x4879E4FE39074CDF | Since: 372 | API-Set: unknown
 */
export function areWidescreenBordersActive(): boolean {
    return Citizen.invokeNative('0x4879E4FE39074CDF');
}

/**
 * Last param determines if its relative to the Entity
 * 
 * Hash: 0xFEDB7D269E8C60E3 | Since: 323 | API-Set: unknown
 */
export function attachCamToEntity(cam: number | ICamera, entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    AttachCamToEntity(_cam, _entity, xOffset, yOffset, zOffset, isRelative);
}

/**
 * No comment provided
 * 
 * Hash: 0x61A3DBA14AB7F411 | Since: 323 | API-Set: unknown
 */
export function attachCamToPedBone(cam: number | ICamera, ped: number | IPed, boneIndex: number, pos: Vector3, heading: boolean): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    AttachCamToPedBone(_cam, _ped, boneIndex, pos.x, pos.y, pos.z, heading);
}

/**
 * This native works with vehicles only. Bone indexes are usually given by this native GET_ENTITY_BONE_INDEX_BY_NAME.
 * 
 * Hash: 0x8DB3F12A02CAEF72 | Since: 1290 | API-Set: unknown
 */
export function attachCamToVehicleBone(cam: number | ICamera, vehicle: number | IVehicle, boneIndex: number, relativeRotation: boolean, rot: Vector3, offsetX: number, offsetY: number, offsetZ: number, fixedDirection: boolean): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    const _vehicle = typeof vehicle == 'object' ? vehicle.handle() : vehicle;
    AttachCamToVehicleBone(_cam, _vehicle, boneIndex, relativeRotation, rot.x, rot.y, rot.z, offsetX, offsetY, offsetZ, fixedDirection);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F97DA93681F87EA | Since: 1734 | API-Set: unknown
 */
export function blockFirstPersonOrientationResetThisUpdate(): void {
    Citizen.invokeNative('0x9F97DA93681F87EA');
}

/**
 * No comment provided
 * 
 * Hash: 0xA7092AFE81944852 | Since: 2189 | API-Set: unknown
 */
export function bypassCollisionBuoyancyTestThisUpdate(): void {
    Citizen.invokeNative('0xA7092AFE81944852');
}

/**
 * No comment provided
 * 
 * Hash: 0xDB629FFD9285FA06 | Since: 323 | API-Set: unknown
 */
export function bypassCutsceneCamRenderingThisUpdate(): void {
    StopCutsceneCamShaking();
}

/**
 * No comment provided
 * 
 * Hash: 0x62374889A4D59F72 | Since: 877 | API-Set: unknown
 */
export function preventCollisionSettingsForTripleheadInInteriorsThisUpdate(): void {
    Citizen.invokeNative('0x62374889A4D59F72');
}

/**
 * "DEFAULT_SCRIPTED_CAMERA"
 * "DEFAULT_ANIMATED_CAMERA"
 * "DEFAULT_SPLINE_CAMERA"
 * "DEFAULT_SCRIPTED_FLY_CAMERA"
 * "TIMED_SPLINE_CAMERA"
 * 
 * Hash: 0xC3981DCE61D9E13F | Since: 323 | API-Set: unknown
 */
export function createCam(camName: string): number {
    return CreateCam(camName, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5E3CF89C6BCCA67D | Since: 323 | API-Set: unknown
 */
export function create(camHash: number | string): number {
    if (typeof camHash === 'string') camHash = GetHashKey(camHash)
    return CreateCamera(camHash, false);
}

/**
 * p9 uses 2 by default
 * 
 * Hash: 0x6ABFA3E16460F22D | Since: 323 | API-Set: unknown
 */
export function createWithParams(camHash: number | string, pos: Vector3, rot: Vector3, fov: number): number {
    if (typeof camHash === 'string') camHash = GetHashKey(camHash)
    return CreateCameraWithParams(camHash, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, fov, false, undefined);
}

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
export function createCamWithParams(camName: string, pos: Vector3, rot: Vector3, fov: number): number {
    return CreateCamWithParams(camName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, fov, false, 0);
}

/**
 * hash is always JOAAT("CAMERA_MAN_SHOT") in decompiled scripts
 * 
 * Hash: 0x741B0129D4560F31 | Since: 323 | API-Set: unknown
 */
export function createCinematicShot(p0: number | string, time: number, entity: number | IEntity): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    CreateCinematicShot(p0, time, false, _entity);
}

/**
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 * 
 * Hash: 0x8E5FB15663F79120 | Since: 323 | API-Set: unknown
 */
export function destroyAllCams(bScriptHostCam: boolean): void {
    DestroyAllCams(bScriptHostCam);
}

/**
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 * 
 * Hash: 0x865908C81A2C22E9 | Since: 323 | API-Set: unknown
 */
export function destroyCam(cam: number | ICamera, bScriptHostCam: boolean): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    DestroyCam(_cam, bScriptHostCam);
}

/**
 * No comment provided
 * 
 * Hash: 0xA2FABBE87F4BAD82 | Since: 323 | API-Set: unknown
 */
export function detachCam(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    DetachCam(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A31FE0049E542F6 | Since: 323 | API-Set: unknown
 */
export function disableAimCamThisUpdate(): void {
    DisableAimCamThisUpdate();
}

/**
 * No comment provided
 * 
 * Hash: 0x49482F9FCD825AAA | Since: 323 | API-Set: unknown
 */
export function disableCamCollisionForObject(entity: number | IEntity): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    DisableCamCollisionForObject(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xADFF1B2A555F5FBA | Since: 323 | API-Set: unknown
 */
export function disableCinematicBonnetThisUpdate(): void {
    DisableVehicleFirstPersonCamThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x17FCA7199A530203 | Since: 323 | API-Set: unknown
 */
export function disableCinematicSlowMoThisUpdate(): boolean {
    return Citizen.invokeNative('0x17FCA7199A530203');
}

/**
 * No comment provided
 * 
 * Hash: 0x62ECFCFDEE7885D6 | Since: 323 | API-Set: unknown
 */
export function disableCinematicVehicleIdleModeThisUpdate(): void {
    Citizen.invokeNative('0x62ECFCFDEE7885D6');
}

/**
 * Sets some flag on cinematic camera
 * 
 * Hash: 0xB1381B97F70C7B30 | Since: 1180 | API-Set: unknown
 */
export function disableFirstPersonWaterClippingTestThisUpdate(): void {
    Citizen.invokeNative('0xB1381B97F70C7B30');
}

/**
 * No comment provided
 * 
 * Hash: 0x59424BD75174C9B1 | Since: 323 | API-Set: unknown
 */
export function disableFirstPersonFlashEffectThisUpdate(): void {
    Citizen.invokeNative('0x59424BD75174C9B1');
}

/**
 * Shows the crosshair even if it wouldn't show normally. Only works for one frame, so make sure to call it repeatedly.
 * 
 * Hash: 0xEA7F0AD7E9BA676F | Since: 323 | API-Set: unknown
 */
export function disableGameplayCamAltitudeFovScalingThisUpdate(): void {
    EnableCrosshairThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x5A43C76F7FC7BA5F | Since: 323 | API-Set: unknown
 */
export function disableNearClipScanThisUpdate(): void {
    Citizen.invokeNative('0x5A43C76F7FC7BA5F');
}

/**
 * Disables first person camera for the current frame.
 * 
 * Found in decompiled scripts:
 * `GRAPHICS::DRAW_DEBUG_TEXT_2D("Disabling First Person Cam", 0.5, 0.8, 0.0, 0, 0, 255, 255);`
 * `CAM::DISABLE_ON_FOOT_FIRST_PERSON_VIEW_THIS_UPDATE();`
 * 
 * Hash: 0xDE2EF5DA284CC8DF | Since: 323 | API-Set: unknown
 */
export function disableOnFootFirstPersonViewThisUpdate(): void {
    DisableFirstPersonCamThisFrame();
}

/**
 * Returns whether or not the passed camera handle exists.
 * 
 * Hash: 0xA7A932170592B50E | Since: 323 | API-Set: unknown
 */
export function doesCamExist(cam: number | ICamera): boolean {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return DoesCamExist(_cam);
}

/**
 * Fades the screen in.
 * 
 * duration: The time the fade should take, in milliseconds.
 * 
 * Hash: 0xD4E8E24955024033 | Since: 323 | API-Set: unknown
 */
export function doScreenFadeIn(duration: number): void {
    DoScreenFadeIn(duration);
}

/**
 * Fades the screen out.
 * 
 * duration: The time the fade should take, in milliseconds.
 * 
 * Hash: 0x891B5B39AC6302AF | Since: 323 | API-Set: unknown
 */
export function doScreenFadeOut(duration: number): void {
    DoScreenFadeOut(duration);
}

/**
 * No comment provided
 * 
 * Hash: 0x28B022A17B068A3A | Since: 1734 | API-Set: unknown
 */
export function forceBonnetRelativeHeadingAndPitch(): void {
    Citizen.invokeNative('0x28B022A17B068A3A', 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x48608C3464F58AB4 | Since: 505 | API-Set: unknown
 */
export function forceRelativeHeadingAndPitch(roll: number, pitch: number, yaw: number): void {
    SetGameplayCamRelativeRotation(roll, pitch, yaw);
}

/**
 * No comment provided
 * 
 * Hash: 0xAABD62873FFB1A33 | Since: 2189 | API-Set: unknown
 */
export function forceCamFarClip(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    Citizen.invokeNative('0xAABD62873FFB1A33', _cam, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA41BCD7213805AAC | Since: 323 | API-Set: unknown
 */
export function forceCinematicRenderingThisUpdate(toggle: boolean): void {
    ForceCinematicRenderingThisUpdate(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x380B4968D1E09E55 | Since: 1290 | API-Set: unknown
 */
export function forceTightspaceCustomFramingThisUpdate(): void {
    Citizen.invokeNative('0x380B4968D1E09E55');
}

/**
 * No comment provided
 * 
 * Hash: 0x0AA27680A0BD43FA | Since: 1103 | API-Set: unknown
 */
export function forceVehicleCamStuntSettingsThisUpdate(): void {
    Citizen.invokeNative('0x0AA27680A0BD43FA');
}

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
export function getCamActiveViewModeContext(): number {
    return GetCamActiveViewModeContext();
}

/**
 * No comment provided
 * 
 * Hash: 0xA10B2DB49E92A6B0 | Since: 323 | API-Set: unknown
 */
export function getCamAnimCurrentPhase(cam: number | ICamera): number {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return GetCamAnimCurrentPhase(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0xBAC038F7459AE5AE | Since: 323 | API-Set: unknown
 */
export function getCamCoord(cam: number | ICamera): Vector3 {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return new Vector3(GetCamCoord(_cam));
}

/**
 * No comment provided
 * 
 * Hash: 0x06D153C0B99B6128 | Since: 2699 | API-Set: unknown
 */
export function getCamDofStrength(cam: number | ICamera): number {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return GetCamDofStrength(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0xB60A9CFEB21CA6AA | Since: 323 | API-Set: unknown
 */
export function getCamFarClip(cam: number | ICamera): number {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return GetCamFarClip(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0x255F8DAFD540D397 | Since: 323 | API-Set: unknown
 */
export function getCamFarDof(cam: number | ICamera): number {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return GetCamFarDof(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0xC3330A45CCCDB26A | Since: 323 | API-Set: unknown
 */
export function getCamFov(cam: number | ICamera): number {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return GetCamFov(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0xC520A34DAFBF24B1 | Since: 323 | API-Set: unknown
 */
export function getCamNearClip(cam: number | ICamera): number {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return GetCamNearClip(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0xC2612D223D915A1C | Since: 2699 | API-Set: unknown
 */
export function getCamNearDof(cam: number | ICamera): number {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return GetCamNearDof(_cam);
}

/**
 * The last parameter, as in other "ROT" methods, is usually 2.
 * 
 * Hash: 0x7D304C1C955E3E12 | Since: 323 | API-Set: unknown
 */
export function getCamRot(cam: number | ICamera, rotationOrder: number): Vector3 {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return new Vector3(GetCamRot(_cam, rotationOrder));
}

/**
 * No comment provided
 * 
 * Hash: 0xB22B17DF858716A6 | Since: 323 | API-Set: unknown
 */
export function getCamSplineNodeIndex(cam: number | ICamera): number {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return GetCamSplineNodeIndex(_cam);
}

/**
 * I'm pretty sure the parameter is the camera as usual, but I am not certain so I'm going to leave it as is.
 * 
 * Hash: 0xD9D0E694C8282C96 | Since: 323 | API-Set: unknown
 */
export function getCamSplineNodePhase(cam: number | ICamera): number {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return GetCamSplineNodePhase(_cam);
}

/**
 * Can use this with SET_CAM_SPLINE_PHASE to set the float it this native returns.
 * 
 * (returns 1.0f when no nodes has been added, reached end of non existing spline)
 * 
 * Hash: 0xB5349E36C546509A | Since: 323 | API-Set: unknown
 */
export function getCamSplinePhase(cam: number | ICamera): number {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return GetCamSplinePhase(_cam);
}

/**
 * context: see _GET_CAM_ACTIVE_VIEW_MODE_CONTEXT
 * 
 * Hash: 0xEE778F8C7E1142E2 | Since: 323 | API-Set: unknown
 */
export function getCamViewModeForContext(context: number): number {
    return GetCamViewModeForContext(context);
}

/**
 * No comment provided
 * 
 * Hash: 0x77C3CEC46BE286F6 | Since: 2372 | API-Set: unknown
 */
export function getDebugCam(): number {
    return GetDebugCamera();
}

/**
 * No comment provided
 * 
 * Hash: 0xA200EB1EE790F448 | Since: 323 | API-Set: unknown
 */
export function getFinalRenderedCamCoord(): Vector3 {
    return new Vector3(GetFinalRenderedCamCoord());
}

/**
 * No comment provided
 * 
 * Hash: 0xDFC8CBC606FDB0FC | Since: 323 | API-Set: unknown
 */
export function getFinalRenderedCamFarClip(): number {
    return GetFinalRenderedCamFarClip();
}

/**
 * No comment provided
 * 
 * Hash: 0x9780F32BCAF72431 | Since: 323 | API-Set: unknown
 */
export function getFinalRenderedCamFarDof(): number {
    return GetFinalRenderedCamFarDof();
}

/**
 * Gets some camera fov
 * 
 * Hash: 0x80EC114669DAEFF4 | Since: 323 | API-Set: unknown
 */
export function getFinalRenderedCamFov(): number {
    return GetFinalRenderedCamFov();
}

/**
 * No comment provided
 * 
 * Hash: 0x162F9D995753DC19 | Since: 323 | API-Set: unknown
 */
export function getFinalRenderedCamMotionBlurStrength(): number {
    return GetFinalRenderedCamMotionBlurStrength();
}

/**
 * No comment provided
 * 
 * Hash: 0xD0082607100D7193 | Since: 323 | API-Set: unknown
 */
export function getFinalRenderedCamNearClip(): number {
    return GetFinalRenderedCamNearClip();
}

/**
 * No comment provided
 * 
 * Hash: 0xA03502FC581F7D9B | Since: 323 | API-Set: unknown
 */
export function getFinalRenderedCamNearDof(): number {
    return GetFinalRenderedCamNearDof();
}

/**
 * p0 seems to consistently be 2 across scripts
 * 
 * `Function is called faily often by CAM::CREATE_CAM_WITH_PARAMS`
 * 
 * Hash: 0x5B4E4C817FCC2DFB | Since: 323 | API-Set: unknown
 */
export function getFinalRenderedCamRot(rotationOrder: number): Vector3 {
    return new Vector3(GetFinalRenderedCamRot(rotationOrder));
}

/**
 * No comment provided
 * 
 * Hash: 0x5F35F6732C3FBBA0 | Since: 323 | API-Set: unknown
 */
export function getFinalRenderedRemotePlayerCamFov(player: number | string | IPlayer): number {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return GetFinalRenderedInWhenFriendlyFov(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x26903D9CD1175F2C | Since: 323 | API-Set: unknown
 */
export function getFinalRenderedRemotePlayerCamRot(player: number | string | IPlayer, rotationOrder: number): Vector3 {
    const _player = typeof player == 'object' ? player.playerId() : player;
    return new Vector3(GetFinalRenderedInWhenFriendlyRot(_player, rotationOrder));
}

/**
 * No comment provided
 * 
 * Hash: 0x7EC52CC40597D170 | Since: 323 | API-Set: unknown
 */
export function getFirstPersonAimCamZoomFactor(): number {
    return GetFirstPersonAimCamZoomFactor();
}

/**
 * No comment provided
 * 
 * Hash: 0x89215EC747DF244A | Since: 323 | API-Set: unknown
 */
export function getFocusPedOnScreen(): number {
    return GetFocusPedOnScreen(0, 0, 0, 0, 0, 0, 0, 0, 0);
}

/**
 * See viewmode enum in CAM.GET_FOLLOW_VEHICLE_CAM_VIEW_MODE for return value
 * 
 * Hash: 0x8D4D46230B2C353A | Since: 323 | API-Set: unknown
 */
export function getFollowPedCamViewMode(): number {
    return GetFollowPedCamViewMode();
}

/**
 * No comment provided
 * 
 * Hash: 0x33E6C8EFD0CD93E9 | Since: 323 | API-Set: unknown
 */
export function getFollowPedCamZoomLevel(): number {
    return GetFollowPedCamZoomLevel();
}

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
export function getFollowVehicleCamViewMode(): number {
    return GetFollowVehicleCamViewMode();
}

/**
 * No comment provided
 * 
 * Hash: 0xEE82280AB767B690 | Since: 323 | API-Set: unknown
 */
export function getFollowVehicleCamZoomLevel(): number {
    return GetFollowVehicleCamZoomLevel();
}

/**
 * No comment provided
 * 
 * Hash: 0x14D6F5678D8F1B37 | Since: 323 | API-Set: unknown
 */
export function getGameplayCamCoord(): Vector3 {
    return new Vector3(GetGameplayCamCoord());
}

/**
 * No comment provided
 * 
 * Hash: 0x65019750A0324133 | Since: 323 | API-Set: unknown
 */
export function getGameplayCamFov(): number {
    return GetGameplayCamFov();
}

/**
 * No comment provided
 * 
 * Hash: 0x743607648ADD4587 | Since: 323 | API-Set: unknown
 */
export function getGameplayCamRelativeHeading(): number {
    return GetGameplayCamRelativeHeading();
}

/**
 * No comment provided
 * 
 * Hash: 0x3A6867B4845BEDA2 | Since: 323 | API-Set: unknown
 */
export function getGameplayCamRelativePitch(): number {
    return GetGameplayCamRelativePitch();
}

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
export function getGameplayCamRot(rotationOrder: number): Vector3 {
    return new Vector3(GetGameplayCamRot(rotationOrder));
}

/**
 * No comment provided
 * 
 * Hash: 0x5234F9F10919EABA | Since: 323 | API-Set: unknown
 */
export function getRenderingCam(): number {
    return GetRenderingCam();
}

/**
 * Example from am_mp_drone script:
 * 
 * `CAM::HARD_ATTACH_CAM_TO_ENTITY(Local_190.f_169, NETWORK::NET_TO_OBJ(Local_190.f_159), 0f, 0f, 180f, Var0, 1);`
 * 
 * Hash: 0x202A5ED9CE01D6E7 | Since: 2189 | API-Set: unknown
 */
export function hardAttachCamToEntity(cam: number | ICamera, entity: number | IEntity, rot: Vector3, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    HardAttachCamToEntity(_cam, _entity, rot.x, rot.y, rot.z, xOffset, yOffset, zOffset, isRelative);
}

/**
 * No comment provided
 * 
 * Hash: 0x149916F50C34A40D | Since: 1180 | API-Set: unknown
 */
export function hardAttachCamToPedBone(cam: number | ICamera, ped: number | IPed, boneIndex: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    HardAttachCamToPedBone(_cam, _ped, boneIndex, 0, 0, 0, 0, 0, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7B8A361C1813FBEF | Since: 573 | API-Set: unknown
 */
export function ignoreMenuPreferenceForBonnetThisUpdate(): void {
    Citizen.invokeNative('0x7B8A361C1813FBEF');
}

/**
 * No comment provided
 * 
 * Hash: 0xDDA77EE33C005AAF | Since: 3258 | API-Set: unknown
 */
export function interpolateWithParams(camera: number | ICamera, camPosX: number, camPosY: number, camPosZ: number, camRotX: number, camRotY: number, camRotZ: number, fov: number, duration: number, posCurveType: number, rotCurveType: number, rotOrder: number, fovCurveType: number): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    InterpolateCamWithParams(_camera, camPosX, camPosY, camPosZ, camRotX, camRotY, camRotZ, fov, duration, posCurveType, rotCurveType, rotOrder, fovCurveType);
}

/**
 * Resets the vehicle idle camera timer. Calling this in a loop will disable the idle camera.
 * 
 * Hash: 0x9E4CFFF989258472 | Since: 323 | API-Set: unknown
 */
export function invalidateCinematicVehicleIdleMode(): void {
    InvalidateVehicleIdleCam();
}

/**
 * Resets the idle camera timer. Calling that in a loop once every few seconds is enough to disable the idle cinematic camera.
 * 
 * Hash: 0xF4F2C0D4EE209E20 | Since: 323 | API-Set: unknown
 */
export function invalidateIdleCam(): void {
    InvalidateIdleCam();
}

/**
 * No comment provided
 * 
 * Hash: 0x68EDDA28A5976D07 | Since: 323 | API-Set: unknown
 */
export function isAimCamActive(): boolean {
    return IsAimCamActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x74BD83EA840F6BC9 | Since: 323 | API-Set: unknown
 */
export function isAimCamActiveInAccurateMode(): boolean {
    return IsAimCamThirdPersonActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xEAF0FA793D05C592 | Since: 323 | API-Set: unknown
 */
export function isAllowedIndependentModes(): boolean {
    return Citizen.invokeNative('0xEAF0FA793D05C592');
}

/**
 * No comment provided
 * 
 * Hash: 0xD7360051C885628B | Since: 372 | API-Set: unknown
 */
export function isBonnetCinematicCamRendering(): boolean {
    return IsBonnetCinematicCamRendering();
}

/**
 * Returns whether or not the passed camera handle is active.
 * 
 * Hash: 0xDFB2B516207D3534 | Since: 323 | API-Set: unknown
 */
export function isCamActive(cam: number | ICamera): boolean {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return IsCamActive(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0x036F97C908C2B52C | Since: 323 | API-Set: unknown
 */
export function isCamInterpolating(cam: number | ICamera): boolean {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return IsCamInterpolating(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0xC90621D8A0CEECF2 | Since: 323 | API-Set: unknown
 */
export function isCamPlayingAnim(cam: number | ICamera, animName: string, animDictionary: string): boolean {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return IsCamPlayingAnim(_cam, animName, animDictionary);
}

/**
 * No comment provided
 * 
 * Hash: 0x02EC0AF5C5A49B7A | Since: 323 | API-Set: unknown
 */
export function isCamRendering(cam: number | ICamera): boolean {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return IsCamRendering(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B24BFE83A2BE47B | Since: 323 | API-Set: unknown
 */
export function isCamShaking(cam: number | ICamera): boolean {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return IsCamShaking(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0x0290F35C0AD97864 | Since: 323 | API-Set: unknown
 */
export function isCamSplinePaused(cam: number | ICamera): boolean {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return IsCamSplinePaused(_cam);
}

/**
 * Tests some cinematic camera flags
 * 
 * Hash: 0xF5F1E89A970B7796 | Since: 1493 | API-Set: unknown
 */
export function isCinematicCamInputActive(): boolean {
    return IsCinematicCamInputActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xB15162CB5826E9E8 | Since: 323 | API-Set: unknown
 */
export function isCinematicCamRendering(): boolean {
    return IsCinematicCamRendering();
}

/**
 * No comment provided
 * 
 * Hash: 0xBBC08F6B4CB8FF0A | Since: 323 | API-Set: unknown
 */
export function isCinematicCamShaking(): boolean {
    return IsCinematicCamShaking();
}

/**
 * No comment provided
 * 
 * Hash: 0x4F32C0D5A90A9B40 | Since: 323 | API-Set: unknown
 */
export function isCinematicFirstPersonVehicleInteriorCamRendering(): boolean {
    return IsInVehicleCamDisabled();
}

/**
 * No comment provided
 * 
 * Hash: 0xCA9D2AA3E326D720 | Since: 323 | API-Set: unknown
 */
export function isCinematicIdleCamRendering(): boolean {
    return IsCinematicIdleCamRendering();
}

/**
 * Hash is always JOAAT("CAMERA_MAN_SHOT") in decompiled scripts
 * 
 * Hash: 0xCC9F3371A7C28BC9 | Since: 323 | API-Set: unknown
 */
export function isCinematicShotActive(p0: number | string): boolean {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return IsCinematicShotActive(p0);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF72910D0F26F025 | Since: 323 | API-Set: unknown
 */
export function isCodeGameplayHintActive(): boolean {
    return Citizen.invokeNative('0xBF72910D0F26F025');
}

/**
 * No comment provided
 * 
 * Hash: 0x5E346D934122613F | Since: 323 | API-Set: unknown
 */
export function isFirstPersonAimCamActive(): boolean {
    return IsFirstPersonAimCamActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xC6D3D26810C8E0F9 | Since: 323 | API-Set: unknown
 */
export function isFollowPedCamActive(): boolean {
    return IsFollowPedCamActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xCBBDE6D335D6D496 | Since: 323 | API-Set: unknown
 */
export function isFollowVehicleCamActive(): boolean {
    return IsFollowVehicleCamActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x70FDA869F3317EA9 | Since: 323 | API-Set: unknown
 */
export function isGameplayCamLookingBehind(): boolean {
    return IsGameplayCamLookingBehind();
}

/**
 * Examples when this function will return 0 are:
 * - During busted screen.
 * - When player is coming out from a hospital.
 * - When player is coming out from a police station.
 * - When player is buying gun from AmmuNation.
 * 
 * Hash: 0x39B5D1B10383F0C8 | Since: 323 | API-Set: unknown
 */
export function isGameplayCamRendering(): boolean {
    return IsGameplayCamRendering();
}

/**
 * No comment provided
 * 
 * Hash: 0x016C090630DF1F89 | Since: 323 | API-Set: unknown
 */
export function isGameplayCamShaking(): boolean {
    return IsGameplayCamShaking();
}

/**
 * No comment provided
 * 
 * Hash: 0xE520FF1AD2785B40 | Since: 323 | API-Set: unknown
 */
export function isGameplayHintActive(): boolean {
    return IsGameplayHintActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x3044240D2E0FA842 | Since: 323 | API-Set: unknown
 */
export function isInterpolatingFromScriptCams(): boolean {
    return Citizen.invokeNative('0x3044240D2E0FA842');
}

/**
 * No comment provided
 * 
 * Hash: 0x705A276EBFF3133D | Since: 323 | API-Set: unknown
 */
export function isInterpolatingToScriptCams(): boolean {
    return Citizen.invokeNative('0x705A276EBFF3133D');
}

/**
 * No comment provided
 * 
 * Hash: 0x1F2300CB7FA7B7F6 | Since: 323 | API-Set: unknown
 */
export function isInVehicleMobilePhoneRendering(): boolean {
    return Citizen.invokeNative('0x1F2300CB7FA7B7F6');
}

/**
 * No comment provided
 * 
 * Hash: 0x5A859503B0C08678 | Since: 323 | API-Set: unknown
 */
export function isScreenFadedIn(): boolean {
    return IsScreenFadedIn();
}

/**
 * No comment provided
 * 
 * Hash: 0xB16FCE9DDC7BA182 | Since: 323 | API-Set: unknown
 */
export function isScreenFadedOut(): boolean {
    return IsScreenFadedOut();
}

/**
 * No comment provided
 * 
 * Hash: 0x5C544BC6C57AC575 | Since: 323 | API-Set: unknown
 */
export function isScreenFadingIn(): boolean {
    return IsScreenFadingIn();
}

/**
 * No comment provided
 * 
 * Hash: 0x797AC7CB535BA28F | Since: 323 | API-Set: unknown
 */
export function isScreenFadingOut(): boolean {
    return IsScreenFadingOut();
}

/**
 * In drunk_controller.c4, sub_309
 * `if (CAM::IS_SCRIPT_GLOBAL_SHAKING()) {`
 * `CAM::STOP_SCRIPT_GLOBAL_SHAKING(0);`
 * }
 * 
 * Hash: 0xC912AF078AF19212 | Since: 323 | API-Set: unknown
 */
export function isScriptGlobalShaking(): boolean {
    return IsScriptGlobalShaking();
}

/**
 * No comment provided
 * 
 * Hash: 0xE33D59DA70B58FDF | Since: 323 | API-Set: unknown
 */
export function isSphereVisible(pos: Vector3, radius: number): boolean {
    return IsSphereVisible(pos.x, pos.y, pos.z, radius);
}

/**
 * Max value for p1 is 15.
 * 
 * Hash: 0x7DCF7C708D292D55 | Since: 323 | API-Set: unknown
 */
export function overrideCamSplineMotionBlur(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    OverrideCamSplineMotionBlur(_cam, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x40B62FA033EB0346 | Since: 323 | API-Set: unknown
 */
export function overrideCamSplineVelocity(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    OverrideCamSplineVelocity(_cam, 0, 0, 0);
}

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
export function playCamAnim(cam: number | ICamera, animName: string, animDictionary: string, pos: Vector3, rot: Vector3): boolean {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return PlayCamAnim(_cam, animName, animDictionary, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, false, 0);
}

/**
 * Examples:
 * 
 * `CAM::PLAY_SYNCHRONIZED_CAM_ANIM(l_2734, NETWORK::NETWORK_GET_LOCAL_SCENE_FROM_NETWORK_ID(l_2739), "PLAYER_EXIT_L_CAM", "mp_doorbell");`
 * 
 * `CAM::PLAY_SYNCHRONIZED_CAM_ANIM(l_F0D[7\/\*1\*\/], l_F4D[15\/\*1\*\/], "ah3b_attackheli_cam2", "missheistfbi3b_helicrash");`
 * 
 * Hash: 0xE32EFE9AB4A9AA0C | Since: 323 | API-Set: unknown
 */
export function playSynchronizedCamAnim(animName: string, animDictionary: string): boolean {
    return PlaySynchronizedCamAnim(undefined, undefined, animName, animDictionary);
}

/**
 * No comment provided
 * 
 * Hash: 0xF75497BB865F0803 | Since: 323 | API-Set: unknown
 */
export function pointCamAtCoord(cam: number | ICamera, pos: Vector3): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    PointCamAtCoord(_cam, pos.x, pos.y, pos.z);
}

/**
 * p5 always seems to be 1 i.e TRUE
 * 
 * Hash: 0x5640BFF86B16E8DC | Since: 323 | API-Set: unknown
 */
export function pointCamAtEntity(cam: number | ICamera, entity: number | IEntity): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    PointCamAtEntity(_cam, _entity, 0, 0, 0, false);
}

/**
 * Parameters p0-p5 seems correct. The bool p6 is unknown, but through every X360 script it's always 1. Please correct p0-p5 if any prove to be wrong.
 * 
 * Hash: 0x68B2B5F33BA63C41 | Since: 323 | API-Set: unknown
 */
export function pointCamAtPedBone(cam: number | ICamera, ped: number | IPed, boneIndex: number, pos: Vector3): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    PointCamAtPedBone(_cam, _ped, boneIndex, pos.x, pos.y, pos.z, false);
}

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
export function renderScriptCams(render: boolean, ease: boolean, easeTime: number): void {
    RenderScriptCams(render, ease, easeTime, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8BFCEB5EA1B161B6 | Since: 323 | API-Set: unknown
 */
export function replayGetMaxDistanceAllowedFromPlayer(): number {
    return ReplayFreeCamGetMaxRange();
}

/**
 * No comment provided
 * 
 * Hash: 0x7295C203DD659DFE | Since: 2699 | API-Set: unknown
 */
export function resetGameplayCamFullAttachParentTransformTimer(): void {
    Citizen.invokeNative('0x7295C203DD659DFE');
}

/**
 * No comment provided
 * 
 * Hash: 0x4008EDF7D6E48175 | Since: 323 | API-Set: unknown
 */
export function setAllowCustomVehicleDriveByCamThisUpdate(): void {
    Citizen.invokeNative('0x4008EDF7D6E48175', false);
}

/**
 * Set camera as active/inactive.
 * 
 * Hash: 0x026FB97D0A425F84 | Since: 323 | API-Set: unknown
 */
export function setCamActive(cam: number | ICamera, active: boolean): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamActive(_cam, active);
}

/**
 * Previous declaration void SET_CAM_ACTIVE_WITH_INTERP(Cam camTo, Cam camFrom, int duration, BOOL easeLocation, BOOL easeRotation) is completely wrong. The last two params are integers not BOOLs...
 * 
 * 
 * Hash: 0x9FBDA379383A52A4 | Since: 323 | API-Set: unknown
 */
export function setCamActiveWithInterp(camTo: number | ICamera, camFrom: number | ICamera, duration: number, easeLocation: number, easeRotation: number): void {
    const _camTo = typeof camTo == 'object' ? camTo.handle() : camTo;
    const _camFrom = typeof camFrom == 'object' ? camFrom.handle() : camFrom;
    SetCamActiveWithInterp(_camTo, _camFrom, duration, easeLocation, easeRotation);
}

/**
 * Allows you to aim and shoot at the direction the camera is facing.
 * 
 * Hash: 0x8C1DC7770C51DC8D | Since: 323 | API-Set: unknown
 */
export function setCamAffectsAiming(cam: number | ICamera, toggle: boolean): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamAffectsAiming(_cam, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4145A4C44FF3B5A6 | Since: 323 | API-Set: unknown
 */
export function setCamAnimCurrentPhase(cam: number | ICamera, phase: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamAnimCurrentPhase(_cam, phase);
}

/**
 * Rotates the radar to match the camera's Z rotation
 * 
 * Hash: 0x661B5C8654ADD825 | Since: 323 | API-Set: unknown
 */
export function setCamControlsMiniMapHeading(cam: number | ICamera, toggle: boolean): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamControlsMiniMapHeading(_cam, toggle);
}

/**
 * Sets the position of the cam.
 * 
 * Hash: 0x4D41783FB745E42E | Since: 323 | API-Set: unknown
 */
export function setCamCoord(cam: number | ICamera, pos: Vector3): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamCoord(_cam, pos.x, pos.y, pos.z);
}

/**
 * if p0 is 0, effect is cancelled
 * 
 * if p0 is 1, effect zooms in, gradually tilts cam clockwise apx 30 degrees, wobbles slowly. Motion blur is active until cancelled.
 * 
 * if p0 is 2, effect immediately tilts cam clockwise apx 30 degrees, begins to wobble slowly, then gradually tilts cam back to normal. The wobbling will continue until the effect is cancelled.
 * 
 * Hash: 0x80C8B1846639BB19 | Since: 323 | API-Set: unknown
 */
export function setCamDeathFailEffectState(): void {
    SetCamEffect(0);
}

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 * 
 * Hash: 0x1B93E0107865DD40 | Since: 323 | API-Set: unknown
 */
export function setCamDebugName(camera: number | ICamera, name: string): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    SetCamDebugName(_camera, name);
}

/**
 * This native has its name defined inside its codE
 * 
 * 
 * Hash: 0x7DD234D6F3914C5B | Since: 323 | API-Set: unknown
 */
export function setCamDofFnumberOfLens(camera: number | ICamera): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    SetCamDofFnumberOfLens(_camera, 0);
}

/**
 * Native name labeled within its code
 * 
 * Hash: 0x47B595D60664CFFA | Since: 1011 | API-Set: unknown
 */
export function setCamDofFocalLengthMultiplier(camera: number | ICamera, multiplier: number): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    SetCamDofFocalLengthMultiplier(_camera, multiplier);
}

/**
 * This native has a name defined inside its code
 * 
 * Hash: 0xC669EEA5D031B7DE | Since: 323 | API-Set: unknown
 */
export function setCamDofFocusDistanceBias(camera: number | ICamera): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    SetCamDofFocusDistanceBias(_camera, 0);
}

/**
 * This native has a name defined inside its code
 * 
 * Hash: 0xC3654A441402562D | Since: 323 | API-Set: unknown
 */
export function setCamDofMaxNearInFocusDistance(camera: number | ICamera): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    SetCamDofMaxNearInFocusDistance(_camera, 0);
}

/**
 * This native has a name defined inside its code
 * 
 * Hash: 0x2C654B4943BDDF7C | Since: 323 | API-Set: unknown
 */
export function setCamDofMaxNearInFocusDistanceBlendLevel(camera: number | ICamera): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    SetCamDofMaxNearInFocusDistanceBlendLevel(_camera, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xF55E4046F6F831DC | Since: 323 | API-Set: unknown
 */
export function setCamDofOverriddenFocusDistance(camera: number | ICamera): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    Citizen.invokeNative('0xF55E4046F6F831DC', _camera, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE111A7C0D200CBC5 | Since: 323 | API-Set: unknown
 */
export function setCamDofOverriddenFocusDistanceBlendLevel(): void {
    Citizen.invokeNative('0xE111A7C0D200CBC5', undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3CF48F6F96E749DC | Since: 323 | API-Set: unknown
 */
export function setCamDofPlanes(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamDofPlanes(_cam, 0, 0, 0, 0);
}

/**
 * This native has a name defined inside its code
 * 
 * Hash: 0x7CF3AF51DCFE4108 | Since: 2944 | API-Set: unknown
 */
export function setCamDofShouldKeepLookAtTargetInFocus(camera: number | ICamera, state: boolean): void {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    Citizen.invokeNative('0x7CF3AF51DCFE4108', _camera, state);
}

/**
 * No comment provided
 * 
 * Hash: 0x5EE29B4D7D5DF897 | Since: 323 | API-Set: unknown
 */
export function setCamDofStrength(cam: number | ICamera, dofStrength: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamDofStrength(_cam, dofStrength);
}

/**
 * No comment provided
 * 
 * Hash: 0xAE306F2A904BF86E | Since: 323 | API-Set: unknown
 */
export function setCamFarClip(cam: number | ICamera, farClip: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamFarClip(_cam, farClip);
}

/**
 * No comment provided
 * 
 * Hash: 0xEDD91296CD01AEE0 | Since: 323 | API-Set: unknown
 */
export function setCamFarDof(cam: number | ICamera, farDOF: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamFarDof(_cam, farDOF);
}

/**
 * Sets the field of view of the cam.
 * ---------------------------------------------
 * Min: 1.0f
 * Max: 130.0f
 * 
 * Hash: 0xB13C14F66A00D047 | Since: 323 | API-Set: unknown
 */
export function setCamFov(cam: number | ICamera, fieldOfView: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamFov(_cam, fieldOfView);
}

/**
 * The native seems to only be called once.
 * 
 * The native is used as so,
 * `CAM::SET_CAM_INHERIT_ROLL_VEHICLE(l_544, getElem(2, &l_525, 4));`
 * In the exile1 script.
 * 
 * Hash: 0x45F1DE9C34B93AE6 | Since: 323 | API-Set: unknown
 */
export function setCamInheritRollVehicle(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamInheritRollVehicle(_cam, false);
}

/**
 * When set to true shadows appear more smooth but less detailed.
 * Set to false by default.
 * 
 * Hash: 0xA2767257A320FC82 | Since: 323 | API-Set: unknown
 */
export function setCamIsInsideVehicle(cam: number | ICamera, toggle: boolean): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    Citizen.invokeNative('0xA2767257A320FC82', _cam, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6F0F77FBA9A8F2E6 | Since: 323 | API-Set: unknown
 */
export function setCamMotionBlurStrength(cam: number | ICamera, strength: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamMotionBlurStrength(_cam, strength);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7848EFCCC545182 | Since: 323 | API-Set: unknown
 */
export function setCamNearClip(cam: number | ICamera, nearClip: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamNearClip(_cam, nearClip);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FA4BF0A7AB7DE2C | Since: 323 | API-Set: unknown
 */
export function setCamNearDof(cam: number | ICamera, nearDOF: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamNearDof(_cam, nearDOF);
}

/**
 * No comment provided
 * 
 * Hash: 0xBFD8727AEA3CCEBA | Since: 323 | API-Set: unknown
 */
export function setCamParams(cam: number | ICamera, pos: Vector3, rot: Vector3, fieldOfView: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamParams(_cam, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, fieldOfView, undefined, 0, 0, 0);
}

/**
 * Sets the rotation of the cam.
 * Last parameter unknown.
 * 
 * Last parameter seems to always be set to 2.
 * 
 * Hash: 0x85973643155D0B07 | Since: 323 | API-Set: unknown
 */
export function setCamRot(cam: number | ICamera, rot: Vector3, rotationOrder: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamRot(_cam, rot.x, rot.y, rot.z, rotationOrder);
}

/**
 * No comment provided
 * 
 * Hash: 0xD93DB43B82BC0D00 | Since: 323 | API-Set: unknown
 */
export function setCamShakeAmplitude(cam: number | ICamera, amplitude: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamShakeAmplitude(_cam, amplitude);
}

/**
 * I named p1 as timeDuration as it is obvious. I'm assuming tho it is ran in ms(Milliseconds) as usual.
 * 
 * Hash: 0x1381539FEE034CDA | Since: 323 | API-Set: unknown
 */
export function setCamSplineDuration(cam: number | ICamera, timeDuration: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamSplineDuration(_cam, timeDuration);
}

/**
 * No comment provided
 * 
 * Hash: 0x83B8201ED82A9A2D | Since: 323 | API-Set: unknown
 */
export function setCamSplineNodeEase(cam: number | ICamera, easingFunction: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamSplineNodeEase(_cam, easingFunction, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7BF1A54AE67AC070 | Since: 323 | API-Set: unknown
 */
export function setCamSplineNodeExtraFlags(cam: number | ICamera, flags: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamSplineNodeExtraFlags(_cam, 0, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6385DEB180F319F | Since: 323 | API-Set: unknown
 */
export function setCamSplineNodeVelocityScale(cam: number | ICamera, scale: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamSplineNodeVelocityScale(_cam, 0, scale);
}

/**
 * No comment provided
 * 
 * Hash: 0x242B5874F0A4E052 | Since: 323 | API-Set: unknown
 */
export function setCamSplinePhase(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamSplinePhase(_cam, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1B0F412F109EA5D | Since: 323 | API-Set: unknown
 */
export function setCamSplineSmoothingStyle(cam: number | ICamera, smoothingStyle: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamSplineSmoothingStyle(_cam, smoothingStyle);
}

/**
 * No comment provided
 * 
 * Hash: 0x16A96863A17552BB | Since: 323 | API-Set: unknown
 */
export function setCamUseShallowDofMode(cam: number | ICamera, toggle: boolean): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetCamUseShallowDofMode(_cam, toggle);
}

/**
 * context: see _GET_CAM_ACTIVE_VIEW_MODE_CONTEXT, viewmode: see CAM.GET_FOLLOW_VEHICLE_CAM_VIEW_MODE
 * 
 * Hash: 0x2A2173E46DAECD12 | Since: 323 | API-Set: unknown
 */
export function setCamViewModeForContext(context: number, viewMode: number): void {
    SetCamViewModeForContext(context, viewMode);
}

/**
 * No comment provided
 * 
 * Hash: 0x51669F7D1FB53D9F | Since: 323 | API-Set: unknown
 */
export function setCinematicButtonActive(): void {
    SetCinematicButtonActive(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC724C701C30B2FE7 | Since: 323 | API-Set: unknown
 */
export function setCinematicCamShakeAmplitude(): void {
    SetCinematicCamShakeAmplitude(0);
}

/**
 * Toggles the vehicle cinematic cam; requires the player ped to be in a vehicle to work.
 * 
 * Hash: 0xDCF0754AC3D6FD4E | Since: 323 | API-Set: unknown
 */
export function setCinematicModeActive(toggle: boolean): void {
    SetCinematicModeActive(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC9DA9E8789F5246 | Since: 323 | API-Set: unknown
 */
export function setCinematicNewsChannelActiveThisUpdate(): void {
    SetCinematicNewsChannelActiveThisUpdate();
}

/**
 * Hardcoded to only work in multiplayer.
 * 
 * Hash: 0x12DED8CA53D47EA5 | Since: 323 | API-Set: unknown
 */
export function setCutsceneCamFarClipThisUpdate(): void {
    Citizen.invokeNative('0x12DED8CA53D47EA5', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x0AF7B437918103B3 | Since: 323 | API-Set: unknown
 */
export function setFirstPersonAimCamNearClipThisUpdate(): void {
    SetFirstPersonAimCamNearClipThisUpdate(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x2F7F2B26DD3F18EE | Since: 323 | API-Set: unknown
 */
export function setFirstPersonAimCamRelativeHeadingLimitsThisUpdate(): void {
    Citizen.invokeNative('0x2F7F2B26DD3F18EE', 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xBCFC632DB7673BF0 | Since: 323 | API-Set: unknown
 */
export function setFirstPersonAimCamRelativePitchLimitsThisUpdate(): void {
    SetFirstPersonCamPitchRange(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x70894BD0915C5BCA | Since: 323 | API-Set: unknown
 */
export function setFirstPersonAimCamZoomFactor(zoomFactor: number): void {
    SetFirstPersonAimCamZoomFactor(zoomFactor);
}

/**
 * No comment provided
 * 
 * Hash: 0xCED08CBE8EBB97C7 | Since: 323 | API-Set: unknown
 */
export function setFirstPersonAimCamZoomFactorLimitsThisUpdate(): void {
    Citizen.invokeNative('0xCED08CBE8EBB97C7', 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x5C41E6BABC9E2112 | Since: 323 | API-Set: unknown
 */
export function setFirstPersonFlashEffectType(): void {
    Citizen.invokeNative('0x5C41E6BABC9E2112', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x11FA5D3479C7DD47 | Since: 323 | API-Set: unknown
 */
export function setFirstPersonFlashEffectVehicleModelHash(vehicleModel: number | string): void {
    if (typeof vehicleModel === 'string') vehicleModel = GetHashKey(vehicleModel)
    SetGameplayCamVehicleCameraName(vehicleModel);
}

/**
 * From b617 scripts:
 * 
 * `CAM::SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_NAME("DINGHY");`
 * `CAM::SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_NAME("ISSI2");`
 * `CAM::SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_NAME("SPEEDO");`
 * 
 * Hash: 0x21E253A7F8DA5DFB | Since: 323 | API-Set: unknown
 */
export function setFirstPersonFlashEffectVehicleModelName(vehicleName: string): void {
    SetGameplayCamVehicleCamera(vehicleName);
}

/**
 * Does nothing
 * 
 * Hash: 0x103991D4A307D472 | Since: 323 | API-Set: unknown
 */
export function setFirstPersonShooterHeading(yaw: number): void {
    SetGameplayCamRawYaw(yaw);
}

/**
 * No comment provided
 * 
 * Hash: 0x759E13EBC1C15C5A | Since: 323 | API-Set: unknown
 */
export function setFirstPersonShooterPitch(pitch: number): void {
    SetGameplayCamRawPitch(pitch);
}

/**
 * No comment provided
 * 
 * Hash: 0xC91C6C55199308CA | Since: 323 | API-Set: unknown
 */
export function setFlyCamCoordAndConstrain(cam: number | ICamera, pos: Vector3): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetFlyCamCoordAndConstrain(_cam, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x503F5920162365B2 | Since: 323 | API-Set: unknown
 */
export function setFlyCamHorizontalResponse(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetFlyCamHorizontalResponse(_cam, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9D02130ECDD1D77 | Since: 323 | API-Set: unknown
 */
export function setFlyCamMaxHeight(cam: number | ICamera, height: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetFlyCamMaxHeight(_cam, height);
}

/**
 * No comment provided
 * 
 * Hash: 0xC8B5C4A79CC18B94 | Since: 323 | API-Set: unknown
 */
export function setFlyCamVerticalControlsThisUpdate(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    Citizen.invokeNative('0xC8B5C4A79CC18B94', _cam);
}

/**
 * No comment provided
 * 
 * Hash: 0xE827B9382CFB41BA | Since: 791 | API-Set: unknown
 */
export function setFlyCamVerticalResponse(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    SetFlyCamVerticalSpeedMultiplier(_cam, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xDD79DF9F4D26E1C9 | Since: 323 | API-Set: unknown
 */
export function setFollowCamIgnoreAttachParentMovementThisUpdate(): void {
    Citizen.invokeNative('0xDD79DF9F4D26E1C9');
}

/**
 * No comment provided
 * 
 * Hash: 0xC8391C309684595A | Since: 323 | API-Set: unknown
 */
export function setFollowPedCamLadderAlignThisUpdate(): void {
    Citizen.invokeNative('0xC8391C309684595A');
}

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
export function setFollowPedCamThisUpdate(camName: string): boolean {
    return SetFollowPedCamThisUpdate(camName, 0);
}

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
export function setFollowPedCamViewMode(viewMode: number): void {
    SetFollowPedCamViewMode(viewMode);
}

/**
 * No comment provided
 * 
 * Hash: 0x9DFE13ECDC1EC196 | Since: 323 | API-Set: unknown
 */
export function setFollowVehicleCamHighAngleModeEveryUpdate(): void {
    Citizen.invokeNative('0x9DFE13ECDC1EC196', false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x91EF6EE6419E5B97 | Since: 323 | API-Set: unknown
 */
export function setFollowVehicleCamHighAngleModeThisUpdate(): void {
    Citizen.invokeNative('0x91EF6EE6419E5B97', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5C90CAB09951A12F | Since: 1365 | API-Set: unknown
 */
export function setFollowVehicleCamSeatThisUpdate(seatIndex: number): void {
    SetFollowTurretSeatCam(seatIndex);
}

/**
 * Sets the type of Player camera in vehicles:
 * viewmode: see CAM.GET_FOLLOW_VEHICLE_CAM_VIEW_MODE
 * 
 * Hash: 0xAC253D7842768F48 | Since: 323 | API-Set: unknown
 */
export function setFollowVehicleCamViewMode(viewMode: number): void {
    SetFollowVehicleCamViewMode(viewMode);
}

/**
 * No comment provided
 * 
 * Hash: 0x19464CB6E4078C8A | Since: 323 | API-Set: unknown
 */
export function setFollowVehicleCamZoomLevel(zoomLevel: number): void {
    SetFollowVehicleCamZoomLevel(zoomLevel);
}

/**
 * No comment provided
 * 
 * Hash: 0xDB90C6CCA48940F1 | Since: 323 | API-Set: unknown
 */
export function setGameplayCamAltitudeFovScalingState(): void {
    Citizen.invokeNative('0xDB90C6CCA48940F1', false);
}

/**
 * No comment provided
 * 
 * Hash: 0xFD3151CD37EA2245 | Since: 323 | API-Set: unknown
 */
export function setGameplayCamEntityToLimitFocusOverBoundingSphereThisUpdate(entity: number | IEntity): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    Citizen.invokeNative('0xFD3151CD37EA2245', _entity);
}

/**
 * Forces gameplay cam to specified ped as if you were the ped or spectating it
 * 
 * Hash: 0x8BBACBF51DA047A8 | Since: 323 | API-Set: unknown
 */
export function setGameplayCamFollowPedThisUpdate(ped: number | IPed): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    SetGameplayCamFollowPedThisUpdate(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x2AED6301F67007D5 | Since: 323 | API-Set: unknown
 */
export function setGameplayCamIgnoreEntityCollisionThisUpdate(entity: number | IEntity): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    DisableCamCollisionForEntity(_entity);
}

/**
 * some camera effect that is (also) used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled.
 * 
 * Hash: 0x0225778816FDC28C | Since: 323 | API-Set: unknown
 */
export function setGameplayCamMaxMotionBlurStrengthThisUpdate(): void {
    Citizen.invokeNative('0x0225778816FDC28C', 0);
}

/**
 * some camera effect that is used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled.
 * 
 * Hash: 0x487A82C650EB7799 | Since: 323 | API-Set: unknown
 */
export function setGameplayCamMotionBlurScalingThisUpdate(): void {
    CustomMenuCoordinates(0);
}

/**
 * Sets the camera position relative to heading in float from -360 to +360.
 * 
 * Heading is alwyas 0 in aiming camera.
 * 
 * Hash: 0xB4EC2312F4E5B1F1 | Since: 323 | API-Set: unknown
 */
export function setGameplayCamRelativeHeading(heading: number): void {
    SetGameplayCamRelativeHeading(heading);
}

/**
 * This native sets the camera's pitch (rotation on the x-axis).
 * 
 * Hash: 0x6D0858B8EDFD2B7D | Since: 323 | API-Set: unknown
 */
export function setGameplayCamRelativePitch(angle: number, scalingFactor: number): void {
    SetGameplayCamRelativePitch(angle, scalingFactor);
}

/**
 * Sets the amplitude for the gameplay (i.e. 3rd or 1st) camera to shake. Used in script "drunk_controller.ysc.c4" to simulate making the player drunk.
 * 
 * Hash: 0xA87E00932DB4D85D | Since: 323 | API-Set: unknown
 */
export function setGameplayCamShakeAmplitude(amplitude: number): void {
    SetGameplayCamShakeAmplitude(amplitude);
}

/**
 * No comment provided
 * 
 * Hash: 0xD51ADCD2D8BC0FB3 | Since: 323 | API-Set: unknown
 */
export function setGameplayCoordHint(pos: Vector3, duration: number, blendOutDuration: number, blendInDuration: number): void {
    SetGameplayCoordHint(pos.x, pos.y, pos.z, duration, blendOutDuration, blendInDuration, 0);
}

/**
 * p8 could be some sort of flag. Scripts use:
 * -244429742
 * 0
 * 1726668277
 * 1844968929
 * 
 * Hash: 0x189E955A8313E298 | Since: 323 | API-Set: unknown
 */
export function setGameplayEntityHint(entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number, time: number, easeInTime: number, easeOutTime: number): void {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    SetGameplayEntityHint(_entity, xOffset, yOffset, zOffset, false, time, easeInTime, easeOutTime, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1F8363DFAD03848 | Since: 323 | API-Set: unknown
 */
export function setGameplayHintBaseOrbitPitchOffset(value: number): void {
    SetGameplayHintBaseOrbitPitchOffset(value);
}

/**
 * No comment provided
 * 
 * Hash: 0xE3433EADAAF7EE40 | Since: 323 | API-Set: unknown
 */
export function setGameplayHintBlendToFollowPedMediumViewMode(toggle: boolean): void {
    SetGameplayHintAnimCloseup(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5D7B620DAE436138 | Since: 323 | API-Set: unknown
 */
export function setGameplayHintRelativeSideOffset(xOffset: number): void {
    SetGameplayHintAnimOffsetx(xOffset);
}

/**
 * No comment provided
 * 
 * Hash: 0xC92717EF615B6704 | Since: 323 | API-Set: unknown
 */
export function setGameplayHintRelativeVerticalOffset(yOffset: number): void {
    SetGameplayHintAnimOffsety(yOffset);
}

/**
 * No comment provided
 * 
 * Hash: 0xF8BDBF3D573049A1 | Since: 323 | API-Set: unknown
 */
export function setGameplayHintFollowDistanceScalar(value: number): void {
    SetGameplayHintFollowDistanceScalar(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x513403FB9C56211F | Since: 323 | API-Set: unknown
 */
export function setGameplayHintFov(FOV: number): void {
    SetGameplayHintFov(FOV);
}

/**
 * No comment provided
 * 
 * Hash: 0x83E87508A2CA2AC6 | Since: 323 | API-Set: unknown
 */
export function setGameplayObjectHint(_object: number | IObject, xOffset: number, yOffset: number, zOffset: number, time: number, easeInTime: number, easeOutTime: number): void {
    const __object = typeof _object == 'object' ? _object.handle() : _object;
    SetGameplayObjectHint(__object, xOffset, yOffset, zOffset, false, time, easeInTime, easeOutTime);
}

/**
 * No comment provided
 * 
 * Hash: 0x2B486269ACD548D3 | Since: 323 | API-Set: unknown
 */
export function setGameplayPedHint(ped: number | IPed, x1: number, y1: number, z1: number, duration: number, blendOutDuration: number, blendInDuration: number): void {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    SetGameplayPedHint(_ped, x1, y1, z1, false, duration, blendOutDuration, blendInDuration);
}

/**
 * Focuses the camera on the specified vehicle.
 * 
 * Hash: 0xA2297E18F3E71C2E | Since: 323 | API-Set: unknown
 */
export function setGameplayVehicleHint(vehicle: number | IVehicle, offsetX: number, offsetY: number, offsetZ: number, time: number, easeInTime: number, easeOutTime: number): void {
    const _vehicle = typeof vehicle == 'object' ? vehicle.handle() : vehicle;
    SetGameplayVehicleHint(_vehicle, offsetX, offsetY, offsetZ, false, time, easeInTime, easeOutTime);
}

/**
 * Forces gameplay cam to specified vehicle as if you were in it
 * 
 * Hash: 0xE9EA16D6E54CDCA4 | Since: 323 | API-Set: unknown
 */
export function setInVehicleCamStateThisUpdate(p0: number | IVehicle): void {
    const _p0 = typeof p0 == 'object' ? p0.handle() : p0;
    SetInVehicleCamStateThisUpdate(_p0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x469F2ECDEC046337 | Since: 323 | API-Set: unknown
 */
export function setScriptedIsFirstPersonThisFrame(): void {
    Citizen.invokeNative('0x469F2ECDEC046337', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x79C0E43EB9B944E2 | Since: 1734 | API-Set: unknown
 */
export function setTableGamesThisUpdate(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return SetTableGamesCameraThisUpdate(hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x42156508606DE65E | Since: 323 | API-Set: unknown
 */
export function setThirdPersonAimCamNearClipThisUpdate(): void {
    SetThirdPersonAimCamNearClipThisUpdate(0);
}

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
export function setThirdPersonCamOrbitDistanceLimitsThisUpdate(distance: number): void {
    AnimateGameplayCamZoom(0, distance);
}

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
export function setThirdPersonCamRelativeHeadingLimitsThisUpdate(minimum: number, maximum: number): void {
    ClampGameplayCamYaw(minimum, maximum);
}

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
export function setThirdPersonCamRelativePitchLimitsThisUpdate(minimum: number, maximum: number): void {
    ClampGameplayCamPitch(minimum, maximum);
}

/**
 * No comment provided
 * 
 * Hash: 0xA13B0222F3D94A94 | Since: 323 | API-Set: unknown
 */
export function setUseHiDof(): void {
    SetUseHiDof();
}

/**
 * Only used in R* Script fm_mission_controller_2020
 * 
 * Hash: 0x731A880555DA3647 | Since: 2699 | API-Set: unknown
 */
export function setUseHiDofOnSyncedSceneThisUpdate(): void {
    SetUseHiDofInCutscene();
}

/**
 * No comment provided
 * 
 * Hash: 0xDCD4EA924F42D01A | Since: 323 | API-Set: unknown
 */
export function setWidescreenBorders(): void {
    SetWidescreenBorders(false, 0);
}

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
export function shakeCam(cam: number | ICamera, _type: string, amplitude: number): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    ShakeCam(_cam, _type, amplitude);
}

/**
 * p0 argument found in the b617d scripts: "DRUNK_SHAKE"
 * 
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 * 
 * Hash: 0xDCE214D9ED58F3CF | Since: 323 | API-Set: unknown
 */
export function shakeCinematicCam(shakeType: string, amount: number): void {
    ShakeCinematicCam(shakeType, amount);
}

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
export function shakeGameplayCam(shakeName: string, intensity: number): void {
    ShakeGameplayCam(shakeName, intensity);
}

/**
 * `CAM::SHAKE_SCRIPT_GLOBAL("HAND_SHAKE", 0.2);`
 * 
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 * 
 * Hash: 0xF4C8CF9E353AFECA | Since: 323 | API-Set: unknown
 */
export function shakeScriptGlobal(): void {
    ShakeScriptGlobal(undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xF33AB75780BA57DE | Since: 323 | API-Set: unknown
 */
export function stopCamPointing(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    StopCamPointing(_cam);
}

/**
 * No comment provided
 * 
 * Hash: 0xBDECF64367884AC3 | Since: 323 | API-Set: unknown
 */
export function stopCamShaking(cam: number | ICamera): void {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    StopCamShaking(_cam, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x2238E588E588A6D7 | Since: 323 | API-Set: unknown
 */
export function stopCinematicCamShaking(): void {
    StopCinematicCamShaking(false);
}

/**
 * Only used once in carsteal3 with p0 set to -1096069633 (CAMERA_MAN_SHOT)
 * 
 * Hash: 0x7660C6E75D3A078E | Since: 323 | API-Set: unknown
 */
export function stopCinematicShot(p0: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    StopCinematicShot(p0);
}

/**
 * No comment provided
 * 
 * Hash: 0x247ACBC4ABBC9D1C | Since: 323 | API-Set: unknown
 */
export function stopCodeGameplayHint(): void {
    Citizen.invokeNative('0x247ACBC4ABBC9D1C', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x324C5AA411DA7737 | Since: 323 | API-Set: unknown
 */
export function stopCutsceneCamShaking(): void {
    Citizen.invokeNative('0x324C5AA411DA7737', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0EF93E9F3D08C178 | Since: 323 | API-Set: unknown
 */
export function stopGameplayCamShaking(): void {
    StopGameplayCamShaking(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xF46C581C61718916 | Since: 323 | API-Set: unknown
 */
export function stopGameplayHint(): void {
    StopGameplayHint(false);
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * Hash: 0xCCD078C2665D2973 | Since: 323 | API-Set: unknown
 */
export function stopGameplayHintBeingCancelledThisUpdate(): void {
    Citizen.invokeNative('0xCCD078C2665D2973', false);
}

/**
 * This native makes the gameplay camera zoom into first person/third person with a special effect.
 * 
 * Hash: 0xC819F3CBB62BF692 | Since: 323 | API-Set: unknown
 */
export function stopRenderingScriptCamsUsingCatchUp(render: boolean): void {
    StopRenderingScriptCamsUsingCatchUp(render, 0, 0, undefined);
}

/**
 * In drunk_controller.c4, sub_309
 * `if (CAM::IS_SCRIPT_GLOBAL_SHAKING()) {`
 * `CAM::STOP_SCRIPT_GLOBAL_SHAKING(0);`
 * }
 * 
 * Hash: 0x1C9D7949FA533490 | Since: 323 | API-Set: unknown
 */
export function stopScriptGlobalShaking(): void {
    StopScriptGlobalShaking(false);
}

/**
 * p1: 0..16
 * 
 * Hash: 0x5D96CFB59DA076A0 | Since: 2060 | API-Set: unknown
 */
export function triggerVehiclePartBrokenShake(vehicle: number | IVehicle): void {
    const _vehicle = typeof vehicle == 'object' ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x5D96CFB59DA076A0', _vehicle, 0, 0);
}

/**
 * Sets gameplay camera to hash
 * 
 * Hash: 0x425A920FDB9A0DDA | Since: 1180 | API-Set: unknown
 */
export function useDedicatedStuntThisUpdate(camName: string): void {
    SetGameplayCamHash(camName);
}

/**
 * No comment provided
 * 
 * Hash: 0x271401846BD26E92 | Since: 323 | API-Set: unknown
 */
export function useScriptCamForAmbientPopulationOriginThisFrame(): void {
    UseScriptCamForAmbientPopulationOriginThisFrame(false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x6493CF69859B116A | Since: 791 | API-Set: unknown
 */
export function useVehicleCamStuntSettingsThisUpdate(): void {
    UseVehicleCamStuntSettingsThisUpdate();
}

/**
 * No comment provided
 * 
 * Hash: 0x5C48A1D6E3B33179 | Since: 323 | API-Set: unknown
 */
export function wasFlyCamConstrainedOnPreviousUdpate(cam: number | ICamera): boolean {
    const _cam = typeof cam == 'object' ? cam.handle() : cam;
    return Citizen.invokeNative('0x5C48A1D6E3B33179', _cam);
}

/**
 * No comment provided
 * 
 * Hash: 0x34CFC4C2A38E83E3 | Since: 3258 | API-Set: unknown
 */
export function activateCamWithInterpAndFovCurve(camTo: number | ICamera, camFrom: number | ICamera, duration: number, easeLocation: number, easeRotation: number, easeFov: number): void {
    const _camTo = typeof camTo == 'object' ? camTo.handle() : camTo;
    const _camFrom = typeof camFrom == 'object' ? camFrom.handle() : camFrom;
    ActivateCamWithInterpAndFovCurve(_camTo, _camFrom, duration, easeLocation, easeRotation, easeFov);
}

/**
 * No comment provided
 * 
 * Hash: 0xD4592A16D36673ED | Since: 3095 | API-Set: unknown
 */
export function getThirdPersonCamMaxOrbitDistanceSpring(): number {
    return Citizen.invokeNative('0xD4592A16D36673ED');
}

/**
 * No comment provided
 * 
 * Hash: 0xBC456FB703431785 | Since: 3095 | API-Set: unknown
 */
export function getThirdPersonCamMinOrbitDistanceSpring(): number {
    return Citizen.invokeNative('0xBC456FB703431785');
}

