import { Vector3, IEntity, IPed, IVehicle, IObject } from '@risinglife/fivem-shared';
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).
 *
 * Hash: 0x4AFD2499 | Since: unknown | API-Set: client
 */
export function addMinimapOverlay(name) {
    return AddMinimapOverlay(name);
}
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * Hash: 0xED0935B5 | Since: unknown | API-Set: client
 */
export function addMinimapOverlayWithDepth(name, depth) {
    return AddMinimapOverlayWithDepth(name, depth);
}
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA66F8F75 | Since: unknown | API-Set: client
 */
export function addReplaceTexture(origTxd, origTxn, newTxd, newTxn) {
    AddReplaceTexture(origTxd, origTxn, newTxd, newTxn);
}
/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 *
 * Hash: 0x4C89C0ED | Since: unknown | API-Set: client
 */
export function callMinimapScaleformFunction(miniMap, fnName) {
    return CallMinimapScaleformFunction(miniMap, fnName);
}
/**
 * Commits the backing pixels to the specified runtime texture.
 *
 * Hash: 0x19D81F4E | Since: unknown | API-Set: client
 */
export function commitRuntimeTexture(tex) {
    CommitRuntimeTexture(tex);
}
/**
 * Creates a blank runtime texture.
 *
 * Hash: 0xFEC3766D | Since: unknown | API-Set: client
 */
export function createRuntimeTexture(txd, txn, width, height) {
    return CreateRuntimeTexture(txd, txn, width, height);
}
/**
 * Creates a runtime texture from a DUI handle.
 *
 * Hash: 0xB135472B | Since: unknown | API-Set: client
 */
export function createRuntimeTextureFromDuiHandle(txd, txn, duiHandle) {
    return CreateRuntimeTextureFromDuiHandle(txd, txn, duiHandle);
}
/**
 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 *
 * Hash: 0x786D8BC3 | Since: unknown | API-Set: client
 */
export function createRuntimeTextureFromImage(txd, txn, fileName) {
    return CreateRuntimeTextureFromImage(txd, txn, fileName);
}
/**
 * Creates a runtime texture dictionary with the specified name.
 * Example:
 *
 * ```lua
 * local txd = CreateRuntimeTxd('meow')
 * ```
 *
 * Hash: 0x1F3AC778 | Since: unknown | API-Set: client
 */
export function createRuntimeTxd(name) {
    return CreateRuntimeTxd(name);
}
/**
 * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
 *
 * Hash: 0xFF44780E | Since: unknown | API-Set: client
 */
export function drawCorona(pos, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags) {
    DrawCorona(pos.x, pos.y, pos.z, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags);
}
/**
 * Draws a gizmo. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
 *
 * Matrix layout is as follows:
 *
 * *   Element \[0], \[1] and \[2] should represent the right vector.
 * *   Element \[4], \[5] and \[6] should represent the forward vector.
 * *   Element \[8], \[9] and \[10] should represent the up vector.
 * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
 * *   All other elements should be \[0, 0, 0, 1].
 *
 * Hash: 0xEB2EDCA2 | Since: unknown | API-Set: client
 */
export function drawGizmo(matrixPtr, id) {
    return DrawGizmo(matrixPtr, id);
}
/**
 * Draw a glow sphere this frame. Up to 256 per single frame.
 *
 * Hash: 0xBD25EC89 | Since: unknown | API-Set: client
 */
export function drawGlowSphere(pos, radius, colorR, colorG, colorB, intensity, invert, marker) {
    DrawGlowSphere(pos.x, pos.y, pos.z, radius, colorR, colorG, colorB, intensity, invert, marker);
}
/**
 * Like DRAW_RECT, but it's a line.
 *
 * Hash: 0xB856A90 | Since: unknown | API-Set: client
 */
export function drawLine2d(x1, y1, x2, y2, width, r, g, b, a) {
    DrawLine2d(x1, y1, x2, y2, width, r, g, b, a);
}
/**
 * DRAW_RECT, but with a rotation. Seems to be broken.
 *
 * Hash: 0xEC37C168 | Since: unknown | API-Set: client
 */
export function drawRectRotated(x, y, width, height, rotation, r, g, b, a) {
    DrawRectRotated(x, y, width, height, rotation, r, g, b, a);
}
/**
 * Forces the game snow pass to render.
 *
 * Hash: 0xE6E16170 | Since: unknown | API-Set: client
 */
export function forceSnowPass(enabled) {
    ForceSnowPass(enabled);
}
/**
 * Returns the world position the pointer is hovering on the pause map.
 *
 * Hash: 0xE5AF7A82 | Since: unknown | API-Set: client
 */
export function getPauseMapPointerWorldPosition() {
    return new Vector3(GetPauseMapPointerWorldPosition());
}
/**
 * Gets the height of the specified runtime texture.
 *
 * Hash: 0x3574AACE | Since: unknown | API-Set: client
 */
export function getRuntimeTextureHeight(tex) {
    return GetRuntimeTextureHeight(tex);
}
/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 *
 * Hash: 0xCA0A085F | Since: unknown | API-Set: client
 */
export function getRuntimeTexturePitch(tex) {
    return GetRuntimeTexturePitch(tex);
}
/**
 * Gets the width of the specified runtime texture.
 *
 * Hash: 0xC9F55558 | Since: unknown | API-Set: client
 */
export function getRuntimeTextureWidth(tex) {
    return GetRuntimeTextureWidth(tex);
}
/**
 * Returns whether or not the specific minimap overlay has loaded.
 *
 * Hash: 0xF7535F32 | Since: unknown | API-Set: client
 */
export function hasMinimapOverlayLoaded(id) {
    return HasMinimapOverlayLoaded(id);
}
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA896B20A | Since: unknown | API-Set: client
 */
export function removeReplaceTexture(origTxd, origTxn) {
    RemoveReplaceTexture(origTxd, origTxn);
}
/**
 * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
 *
 * Hash: 0x8EB6EC38 | Since: unknown | API-Set: client
 */
export function resetEntityDrawOutlineRenderTechnique() {
    ResetEntityDrawOutlineRenderTechnique();
}
/**
 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x76180407 | Since: unknown | API-Set: client
 */
export function setEntityDrawOutline(entity, enabled) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityDrawOutline(_entity, enabled);
}
/**
 * Sets color for entity outline. `255, 0, 255, 255` by default.
 *
 * Hash: 0xB41A56C2 | Since: unknown | API-Set: client
 */
export function setEntityDrawOutlineColor(red, green, blue, alpha) {
    SetEntityDrawOutlineColor(red, green, blue, alpha);
}
/**
 * Sets the render technique for drawing an entity's outline. This function allows you to specify a technique group name to control how the entity's outline is rendered in the game.
 *
 * List of known technique group's:
 *
 * ```
 * alt0
 * alt1
 * alt2
 * alt3
 * alt4
 * alt5
 * alt6
 * alt7
 * alt8
 * blit
 * cube
 * default
 * geometry
 * imposter
 * imposterdeferred
 * lightweight0
 * lightweight0CutOut
 * lightweight0CutOutTint
 * lightweight0WaterRefractionAlpha
 * lightweight4
 * lightweight4CutOut
 * lightweight4CutOutTint
 * lightweight4WaterRefractionAlpha
 * lightweight8
 * lightweight8CutOut
 * lightweight8CutOutTint
 * lightweight8WaterRefractionAlpha
 * lightweightHighQuality0
 * lightweightHighQuality0CutOut
 * lightweightHighQuality0WaterRefractionAlpha
 * lightweightHighQuality4
 * lightweightHighQuality4CutOut
 * lightweightHighQuality4WaterRefractionAlpha
 * lightweightHighQuality8
 * lightweightHighQuality8CutOut
 * lightweightHighQuality8WaterRefractionAlpha
 * lightweightNoCapsule4
 * lightweightNoCapsule8
 * multilight
 * tessellate
 * ui
 * unlit
 * waterreflection
 * waterreflectionalphaclip
 * waterreflectionalphacliptint
 * wdcascade
 * ```
 *
 * Hash: 0x68DFF2DD | Since: unknown | API-Set: client
 */
export function setEntityDrawOutlineRenderTechnique(techniqueGroup) {
    SetEntityDrawOutlineRenderTechnique(techniqueGroup);
}
/**
 * Sets variant of shader that will be used to draw entity outline.
 *
 * Variants are:
 *
 * *   **0**: Default value, gauss shader.
 * *   **1**: 2px wide solid color outline.
 * *   **2**: Fullscreen solid color except for entity.
 *
 * Hash: 0x5261A01A | Since: unknown | API-Set: client
 */
export function setEntityDrawOutlineShader(shader) {
    SetEntityDrawOutlineShader(shader);
}
/**
 * This completely disables rendering of fog volumes (vfxfogvolumeinfo.ymt).
 *
 * Hash: 0xFBC64DA3 | Since: unknown | API-Set: client
 */
export function setFogVolumeRenderDisabled(state) {
    SetFogVolumeRenderDisabled(state);
}
/**
 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 *
 * Hash: 0xB8B4490C | Since: unknown | API-Set: client
 */
export function setMinimapClipType(_type) {
    SetMinimapClipType(_type);
}
/**
 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 *
 * Hash: 0x3E882B23 | Since: unknown | API-Set: client
 */
export function setMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY) {
    SetMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY);
}
/**
 * Sets the display info for a minimap overlay.
 *
 * Hash: 0x6A48B3CA | Since: unknown | API-Set: client
 */
export function setMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha) {
    SetMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0x3963D527 | Since: unknown | API-Set: client
 */
export function setRuntimeTextureArgbData(tex, buffer, length) {
    return SetRuntimeTextureArgbData(tex, buffer, length);
}
/**
 * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.
 *
 * If the bitmap is a different size compared to the existing texture, it will be resampled.
 *
 * This command may end up executed asynchronously, and only update the texture data at a later time.
 *
 * Hash: 0x28FC4ECB | Since: unknown | API-Set: client
 */
export function setRuntimeTextureImage(tex, fileName) {
    return SetRuntimeTextureImage(tex, fileName);
}
/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 *
 * Hash: 0xAB65ACEE | Since: unknown | API-Set: client
 */
export function setRuntimeTexturePixel(tex, x, y, r, g, b, a) {
    SetRuntimeTexturePixel(tex, x, y, r, g, b, a);
}
/**
 * Modifies the radius scale used in the simulation of wet cloth physics.
 * This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
 *
 * Hash: 0xF1BD2CEF | Since: unknown | API-Set: client
 */
export function setWetClothPinRadiusScale(scale) {
    SetWetClothPinRadiusScale(scale);
}
/**
 * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
 *
 * Hash: 0xDD76B263 | Since: unknown | API-Set: client
 */
export function clearDrawOrigin() {
    ClearDrawOrigin();
}
/**
 * In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range
 *
 * Hash: 0x8B25BC20 | Since: unknown | API-Set: client
 */
export function doesTextureExist(textureId) {
    return DoesTextureExist(textureId);
}
/**
 * No comment provided
 *
 * Hash: 0xCD4D9DD5 | Since: unknown | API-Set: client
 */
export function drawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
    DrawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xB3426BCC | Since: unknown | API-Set: client
 */
export function drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
    DrawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xABD19253 | Since: unknown | API-Set: client
 */
export function drawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha) {
    DrawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha);
}
/**
 * Gets the current aspect ratio
 *
 * ```lua
 * local ratio = GetAspectRatio()
 * print(string.format("%.2f", ratio))
 * ```
 *
 * Hash: 0x2CA8F641 | Since: unknown | API-Set: client
 */
export function getAspectRatio() {
    return GetAspectRatio();
}
/**
 * Gets the current screen resolution.
 *
 * ```lua
 * local  width, height = GetCurrentScreenResolution()
 * print(string.format("Current screen resolution: %dx%d", width, height))
 *
 * ```
 *
 * Hash: 0x337F0116 | Since: unknown | API-Set: client
 */
export function getCurrentScreenResolution() {
    return GetCurrentScreenResolution();
}
/**
 * Removes the specified texture and remove it from the ped.
 * Unlike `0x6BEFAA907B076859` which only marks the texture as "can be reused" (and keeps it until will be reused), this function deletes it right away. Can fix some sync issues. `DOES_TEXTURE_EXIST` can be use to wait until fully unloaded by game
 *
 * ```lua
 * RemoveTexture(textureId)
 * while DoesTextureExist(textureId) do
 * Wait(0)
 * end
 * ```
 *
 * Hash: 0x1582C7F2 | Since: unknown | API-Set: client
 */
export function removeTexture(textureId) {
    RemoveTexture(textureId);
}
/**
 * Sets the on-screen drawing origin for draw-functions in world coordinates.
 *
 * The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.
 *
 * Hash: 0xE10198D5 | Since: unknown | API-Set: client
 */
export function setDrawOrigin(pos, is2d) {
    SetDrawOrigin(pos.x, pos.y, pos.z, is2d);
}
/**
 * Sets the text font for the current text drawing command.
 *
 * Hash: 0xADA9255D | Since: unknown | API-Set: client
 */
export function setTextFontForCurrentCommand(fontId) {
    SetTextFontForCurrentCommand(fontId);
}
/**
 * No comment provided
 *
 * Hash: 0x68CDFA60 | Since: unknown | API-Set: client
 */
export function setTextJustification(justifyType) {
    SetTextJustification(justifyType);
}
/**
 * No comment provided
 *
 * Hash: 0x6F60AB54 | Since: unknown | API-Set: client
 */
export function setTextWrap(start, end) {
    SetTextWrap(start, end);
}
/**
 * A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).
 *
 * Hash: 0x15346B4D | Since: unknown | API-Set: client
 */
export function getVisualSettingFloat(name) {
    return GetVisualSettingFloat(name);
}
/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 *
 * Hash: 0xD1D31681 | Since: unknown | API-Set: client
 */
export function setVisualSettingFloat(name, value) {
    SetVisualSettingFloat(name, value);
}
/**
 * No comment provided
 *
 * Hash: 0x82ACC484FFA3B05F | Since: 372 | API-Set: unknown
 */
export function abortVehicleCrewEmblemRequest() {
    return Citizen.invokeNative('0x82ACC484FFA3B05F');
}
/**
 * decal types:
 *
 * public enum DecalTypes
 * {
 * splatters_blood = 1010,
 * splatters_blood_dir = 1015,
 * splatters_blood_mist = 1017,
 * splatters_mud = 1020,
 * splatters_paint = 1030,
 * splatters_water = 1040,
 * splatters_water_hydrant = 1050,
 * splatters_blood2 = 1110,
 * weapImpact_metal = 4010,
 * weapImpact_concrete = 4020,
 * weapImpact_mattress = 4030,
 * weapImpact_mud = 4032,
 * weapImpact_wood = 4050,
 * weapImpact_sand = 4053,
 * weapImpact_cardboard = 4040,
 * weapImpact_melee_glass = 4100,
 * weapImpact_glass_blood = 4102,
 * weapImpact_glass_blood2 = 4104,
 * weapImpact_shotgun_paper = 4200,
 * weapImpact_shotgun_mattress,
 * weapImpact_shotgun_metal,
 * weapImpact_shotgun_wood,
 * weapImpact_shotgun_dirt,
 * weapImpact_shotgun_tvscreen,
 * weapImpact_shotgun_tvscreen2,
 * weapImpact_shotgun_tvscreen3,
 * weapImpact_melee_concrete = 4310,
 * weapImpact_melee_wood = 4312,
 * weapImpact_melee_metal = 4314,
 * burn1 = 4421,
 * burn2,
 * burn3,
 * burn4,
 * burn5,
 * bang_concrete_bang = 5000,
 * bang_concrete_bang2,
 * bang_bullet_bang,
 * bang_bullet_bang2 = 5004,
 * bang_glass = 5031,
 * bang_glass2,
 * solidPool_water = 9000,
 * solidPool_blood,
 * solidPool_oil,
 * solidPool_petrol,
 * solidPool_mud,
 * porousPool_water,
 * porousPool_blood,
 * porousPool_oil,
 * porousPool_petrol,
 * porousPool_mud,
 * porousPool_water_ped_drip,
 * liquidTrail_water = 9050
 * }
 *
 * Hash: 0xB302244A1839BDAD | Since: 323 | API-Set: unknown
 */
export function addDecal(decalType, pos, width, height, rCoef, gCoef, bCoef, opacity, timeout) {
    return AddDecal(decalType, pos.x, pos.y, pos.z, 0, 0, 0, 0, 0, 0, width, height, rCoef, gCoef, bCoef, opacity, timeout, false, false, false);
}
/**
 * Example:
 * `GRAPHICS::ADD_ENTITY_ICON(a_0, "MP_Arrow");`
 *
 * I tried this and nothing happened...
 *
 * Hash: 0x9CD43EEE12BF4DD0 | Since: 323 | API-Set: unknown
 */
export function addEntityIcon(entity, icon) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return AddEntityIcon(_entity, icon);
}
/**
 * No comment provided
 *
 * Hash: 0x126D7F89FE859A5E | Since: 2699 | API-Set: unknown
 */
export function addOilDecal(pos, groundLvl, width, transparency) {
    return AddOilDecal(pos.x, pos.y, pos.z, groundLvl, width, transparency);
}
/**
 * No comment provided
 *
 * Hash: 0x4F5212C7AD880DF8 | Since: 323 | API-Set: unknown
 */
export function addPetrolDecal(pos, groundLvl, width, transparency) {
    return AddPetrolDecal(pos.x, pos.y, pos.z, groundLvl, width, transparency);
}
/**
 * No comment provided
 *
 * Hash: 0x967278682CB6967A | Since: 323 | API-Set: unknown
 */
export function addPetrolTrailDecalInfo(pos) {
    AddPetrolTrailDecalInfo(pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1A8E2C8B9CF4549C | Since: 323 | API-Set: unknown
 */
export function addTcmodifierOverride(modifierName1, modifierName2) {
    AddTcmodifierOverride(modifierName1, modifierName2);
}
/**
 * boneIndex is always chassis_dummy in the scripts. The x/y/z params are location relative to the chassis bone.
 *
 * Hash: 0x428BDCB9DA58DA53 | Since: 323 | API-Set: unknown
 */
export function addVehicleCrewEmblem(vehicle, ped, boneIndex, x1, x2, x3, y1, y2, y3, z1, z2, z3, scale, alpha) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return AddVehicleCrewEmblem(_vehicle, _ped, boneIndex, x1, x2, x3, y1, y2, y3, z1, z2, z3, scale, undefined, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xEFABC7722293DA7C | Since: 323 | API-Set: unknown
 */
export function adjustNextPosSizeAsNormalized169() {
    Citizen.invokeNative('0xEFABC7722293DA7C');
}
/**
 * See ANIMPOSTFX_PLAY
 *
 * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
 *
 * Hash: 0xE35B38A27E8E7179 | Since: 877 | API-Set: unknown
 */
export function animpostfxGetCurrentTime(effectName) {
    return AnimpostfxGetUnk(effectName);
}
/**
 * Returns whether the specified effect is active.
 * See ANIMPOSTFX_PLAY
 *
 * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
 *
 * Hash: 0x36AD3E690DA5ACEB | Since: 323 | API-Set: unknown
 */
export function animpostfxIsRunning(effectName) {
    return AnimpostfxIsRunning(effectName);
}
/**
 * duration - is how long to play the effect for in milliseconds. If 0, it plays the default length
 * if loop is true, the effect won't stop until you call ANIMPOSTFX_STOP on it. (only loopable effects)
 *
 * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
 *
 * Hash: 0x2206BF9A37B7F724 | Since: 323 | API-Set: unknown
 */
export function animpostfxPlay(effectName, duration, looped) {
    AnimpostfxPlay(effectName, duration, looped);
}
/**
 * See ANIMPOSTFX_PLAY
 *
 * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
 *
 * Hash: 0x068E835A1D0DC0E3 | Since: 323 | API-Set: unknown
 */
export function animpostfxStop(effectName) {
    AnimpostfxStop(effectName);
}
/**
 * Stops ALL currently playing effects.
 *
 * Hash: 0xB4EDDC19532BFB85 | Since: 323 | API-Set: unknown
 */
export function animpostfxStopAll() {
    AnimpostfxStopAll();
}
/**
 * Stops the effect and sets a value (bool) in its data (+0x199) to false.
 * See ANIMPOSTFX_PLAY
 *
 * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
 *
 * Hash: 0xD2209BE128B5418C | Since: 323 | API-Set: unknown
 */
export function animpostfxStopAndFlushRequests(effectName) {
    AnimpostfxStopAndDoUnk(effectName);
}
/**
 * No comment provided
 *
 * Hash: 0x845BAD77CC770633 | Since: 323 | API-Set: unknown
 */
export function attachTvAudioToEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    AttachTvAudioToEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x759650634F07B6B4 | Since: 323 | API-Set: unknown
 */
export function beginCreateLowQualityCopyOfPhoto() {
    return Citizen.invokeNative('0x759650634F07B6B4', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7FA5D82B8F58EC06 | Since: 323 | API-Set: unknown
 */
export function beginCreateMissionCreatorPhotoPreview() {
    return Citizen.invokeNative('0x7FA5D82B8F58EC06');
}
/**
 * Push a function from the Scaleform onto the stack
 *
 *
 * Hash: 0xF6E48914C7A8694E | Since: 323 | API-Set: unknown
 */
export function beginScaleformMovieMethod(scaleform, methodName) {
    return BeginScaleformMovieMethod(scaleform, methodName);
}
/**
 * Starts frontend (pause menu) scaleform movie methods.
 * This can be used when you want to make custom frontend menus, and customize things like images or text in the menus etc.
 * Use `BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND_HEADER` for header scaleform functions.
 *
 * Hash: 0xAB58C27C2E6123C6 | Since: 323 | API-Set: unknown
 */
export function beginScaleformMovieMethodOnFrontend(methodName) {
    return BeginScaleformMovieMethodOnFrontend(methodName);
}
/**
 * Starts frontend (pause menu) scaleform movie methods for header options.
 * Use `BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND` to customize the content inside the frontend menus.
 *
 * Hash: 0xB9449845F73F5E9C | Since: 323 | API-Set: unknown
 */
export function beginScaleformMovieMethodOnFrontendHeader(methodName) {
    return BeginScaleformMovieMethodOnFrontendHeader(methodName);
}
/**
 * `Pushes a function from the Hud component Scaleform onto the stack. Same behavior as GRAPHICS::BEGIN_SCALEFORM_MOVIE_METHOD, just a hud component id instead of a Scaleform.`
 *
 * Known components:
 * 19 - MP_RANK_BAR
 * 20 - HUD_DIRECTOR_MODE
 *
 * This native requires more research - all information can be found inside of 'hud.gfx'. Using a decompiler, the different components are located under "scripts\__Packages\com\rockstargames\gtav\hud\hudComponents" and "scripts\__Packages\com\rockstargames\gtav\Multiplayer".
 *
 * Hash: 0x98C494FD5BDFBFD5 | Since: 323 | API-Set: unknown
 */
export function beginScaleformScriptHudMovieMethod(hudComponent, methodName) {
    return BeginScaleformScriptHudMovieMethod(hudComponent, methodName);
}
/**
 * No comment provided
 *
 * Hash: 0xA67C35C56EB1BD9D | Since: 323 | API-Set: unknown
 */
export function beginTakeHighQualityPhoto() {
    return BeginTakeHighQualityPhoto();
}
/**
 * No comment provided
 *
 * Hash: 0x1DD2139A9A20DCE8 | Since: 323 | API-Set: unknown
 */
export function beginTakeMissionCreatorPhoto() {
    return BeginTakeMissionCreatorPhoto();
}
/**
 * `Called prior to adding a text component to the UI. After doing so, GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING is called.`
 *
 * Examples:
 * `GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("NUMBER");`
 * `HUD::ADD_TEXT_COMPONENT_INTEGER(MISC::ABSI(a_1));`
 * `GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();`
 *
 * `GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRING");`
 * `HUD::ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(a_2);`
 * `GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();`
 *
 * `GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM2");`
 * `HUD::ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL_HASH_KEY(v_3);`
 * `HUD::ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL_HASH_KEY(v_4);`
 * `GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();`
 *
 * `GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM1");`
 * `HUD::ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL_HASH_KEY(v_3);`
 * `GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();`
 *
 * Hash: 0x80338406F3475E55 | Since: 323 | API-Set: unknown
 */
export function beginTextCommandScaleformString(componentType) {
    BeginTextCommandScaleformString(componentType);
}
/**
 * Calls the Scaleform function.
 *
 * Hash: 0xFBD96D87AC96D533 | Since: 323 | API-Set: unknown
 */
export function callScaleformMovieMethod(scaleform, method) {
    CallScaleformMovieMethod(scaleform, method);
}
/**
 * Calls the Scaleform function and passes the parameters as floats.
 *
 * The number of parameters passed to the function varies, so the end of the parameter list is represented by -1.0.
 *
 * Hash: 0xD0837058AE2E4BEE | Since: 323 | API-Set: unknown
 */
export function callScaleformMovieMethodWithNumber(scaleform, methodName, param1, param2, param3, param4, param5) {
    CallScaleformMovieMethodWithNumber(scaleform, methodName, param1, param2, param3, param4, param5);
}
/**
 * Calls the Scaleform function and passes both float and string parameters (in their respective order).
 *
 * The number of parameters passed to the function varies, so the end of the float parameters is represented by -1.0, and the end of the string parameters is represented by 0 (NULL).
 *
 * NOTE: The order of parameters in the function prototype is important! All float parameters must come first, followed by the string parameters.
 *
 * Examples:
 * // function MY_FUNCTION(floatParam1, floatParam2, stringParam)
 * `GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER_AND_STRING(scaleform, "MY_FUNCTION", 10.0, 20.0, -1.0, -1.0, -1.0, "String param", 0, 0, 0, 0);`
 *
 * // function MY_FUNCTION_2(floatParam, stringParam1, stringParam2)
 * `GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER_AND_STRING(scaleform, "MY_FUNCTION_2", 10.0, -1.0, -1.0, -1.0, -1.0, "String param #1", "String param #2", 0, 0, 0);`
 *
 * Hash: 0xEF662D8D57E290B1 | Since: 323 | API-Set: unknown
 */
export function callScaleformMovieMethodWithNumberAndString(scaleform, methodName, floatParam1, floatParam2, floatParam3, floatParam4, floatParam5, stringParam1, stringParam2, stringParam3, stringParam4, stringParam5) {
    CallScaleformMovieMethodWithNumberAndString(scaleform, methodName, floatParam1, floatParam2, floatParam3, floatParam4, floatParam5, stringParam1, stringParam2, stringParam3, stringParam4, stringParam5);
}
/**
 * Calls the Scaleform function and passes the parameters as strings.
 *
 * The number of parameters passed to the function varies, so the end of the parameter list is represented by 0 (NULL).
 *
 * Hash: 0x51BC1ED3CC44E8F7 | Since: 323 | API-Set: unknown
 */
export function callScaleformMovieMethodWithString(scaleform, methodName, param1, param2, param3, param4, param5) {
    CallScaleformMovieMethodWithString(scaleform, methodName, param1, param2, param3, param4, param5);
}
/**
 * No comment provided
 *
 * Hash: 0x27CB772218215325 | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsClearShadowSampleType() {
    CascadeShadowsClearShadowSampleType();
}
/**
 * When this is set to ON, shadows only draw as you get nearer.
 *
 * When OFF, they draw from a further distance.
 *
 * Hash: 0x80ECBC0C856D3B0B | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsEnableEntityTracker(toggle) {
    CascadeShadowsEnableEntityTracker(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0AE73D8DF3A762B2 | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsEnableFreezer() {
    Citizen.invokeNative('0x0AE73D8DF3A762B2', false);
}
/**
 * No comment provided
 *
 * Hash: 0x03FC694AE06C5A20 | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsInitSession() {
    CascadeShadowsInitSession();
}
/**
 * No comment provided
 *
 * Hash: 0x6DDBF9DFFC4AC080 | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsSetAircraftMode() {
    CascadeShadowsSetAircraftMode(false);
}
/**
 * No comment provided
 *
 * Hash: 0x259BA6D4E6F808F1 | Since: 1011 | API-Set: unknown
 */
export function cascadeShadowsSetBoundPosition() {
    Citizen.invokeNative('0x259BA6D4E6F808F1', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD2936CAB8B58FCBD | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsSetCascadeBounds() {
    CascadeShadowsSetCascadeBounds(undefined, false, 0, 0, 0, 0, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x5F0F3F56635809EF | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsSetCascadeBoundsScale() {
    CascadeShadowsSetCascadeBoundsScale(0);
}
/**
 * No comment provided
 *
 * Hash: 0xD39D13C9FEBF0511 | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsSetDynamicDepthMode() {
    CascadeShadowsSetDynamicDepthMode(false);
}
/**
 * No comment provided
 *
 * Hash: 0x02AC28F3A01FA04A | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsSetDynamicDepthValue() {
    CascadeShadowsSetDynamicDepthValue(0);
}
/**
 * No comment provided
 *
 * Hash: 0x5E9DAF5A20F15908 | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsSetEntityTrackerScale() {
    CascadeShadowsSetEntityTrackerScale(0);
}
/**
 * No comment provided
 *
 * Hash: 0x25FC3E33A31AD0C9 | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsSetScreenSizeCheckEnabled() {
    Citizen.invokeNative('0x25FC3E33A31AD0C9', false);
}
/**
 * Possible values:
 * "CSM_ST_POINT"
 * "CSM_ST_LINEAR"
 * "CSM_ST_TWOTAP"
 * "CSM_ST_BOX3x3"
 * "CSM_ST_BOX4x4"
 * "CSM_ST_DITHER2_LINEAR"
 * "CSM_ST_CUBIC"
 * "CSM_ST_DITHER4"
 * "CSM_ST_DITHER16"
 * "CSM_ST_SOFT16"
 * "CSM_ST_DITHER16_RPDB"
 * "CSM_ST_POISSON16_RPDB_GNORM"
 * "CSM_ST_HIGHRES_BOX4x4"
 * "CSM_ST_CLOUDS_SIMPLE"
 * "CSM_ST_CLOUDS_LINEAR"
 * "CSM_ST_CLOUDS_TWOTAP"
 * "CSM_ST_CLOUDS_BOX3x3"
 * "CSM_ST_CLOUDS_BOX4x4"
 * "CSM_ST_CLOUDS_DITHER2_LINEAR"
 * "CSM_ST_CLOUDS_SOFT16"
 * "CSM_ST_CLOUDS_DITHER16_RPDB"
 * "CSM_ST_CLOUDS_POISSON16_RPDB_GNORM"
 *
 * Hash: 0xB11D94BC55F41932 | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsSetShadowSampleType(_type) {
    CascadeShadowsSetShadowSampleType(_type);
}
/**
 * No comment provided
 *
 * Hash: 0x36F6626459D91457 | Since: 323 | API-Set: unknown
 */
export function cascadeShadowsSetSplitZExpWeight() {
    Citizen.invokeNative('0x36F6626459D91457', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x15E33297C3E8DC60 | Since: 323 | API-Set: unknown
 */
export function clearAllTcmodifierOverrides() {
    RemoveTcmodifierOverride(undefined);
}
/**
 * Clears the secondary timecycle modifier usually set with _SET_EXTRA_TIMECYCLE_MODIFIER
 *
 * Hash: 0x92CCC17A7A2285DA | Since: 323 | API-Set: unknown
 */
export function clearExtraTcmodifier() {
    ClearExtraTimecycleModifier();
}
/**
 * No comment provided
 *
 * Hash: 0x2A251AA48B2B46DB | Since: 323 | API-Set: unknown
 */
export function clearParticleFxShootoutBoat() {
    Citizen.invokeNative('0x2A251AA48B2B46DB');
}
/**
 * No comment provided
 *
 * Hash: 0x4AF92ACD3141D96C | Since: 323 | API-Set: unknown
 */
export function clearStatusOfSortedListOperation() {
    Citizen.invokeNative('0x4AF92ACD3141D96C');
}
/**
 * No comment provided
 *
 * Hash: 0x0F07E7745A236711 | Since: 323 | API-Set: unknown
 */
export function clearTimecycleModifier() {
    ClearTimecycleModifier();
}
/**
 * No comment provided
 *
 * Hash: 0xBEB3D46BB7F043C0 | Since: 323 | API-Set: unknown
 */
export function clearTvChannelPlaylist(tvChannel) {
    ClearTvChannelPlaylist(tvChannel);
}
/**
 * Creates a checkpoint. Returns the handle of the checkpoint.
 *
 * 20/03/17 : Attention, checkpoints are already handled by the game itself, so you must not loop it like markers.
 *
 * Parameters:
 * * type - The type of checkpoint to create. See below for a list of checkpoint types.
 * * pos1 - The position of the checkpoint.
 * * pos2 - The position of the next checkpoint to point to.
 * * radius - The radius of the checkpoint.
 * * color - The color of the checkpoint.
 * * reserved - Special parameter, see below for details. Usually set to 0 in the scripts.
 *
 * Checkpoint types:
 * 0-4---------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 5-9---------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 10-14-------Ring: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 15-19-------1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 20-24-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 25-29-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 30-34-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 35-38-------Ring: Airplane Up, Left, Right, UpsideDown
 * 39----------?
 * 40----------Ring: just a ring
 * 41----------?
 * 42-44-------Cylinder w/ number (uses 'reserved' parameter)
 * 45-47-------Cylinder no arrow or number
 *
 * If using type 42-44, reserved sets number / number and shape to display
 *
 * 0-99------------Just numbers (0-99)
 * 100-109-----------------Arrow (0-9)
 * 110-119------------Two arrows (0-9)
 * 120-129----------Three arrows (0-9)
 * 130-139----------------Circle (0-9)
 * 140-149------------CycleArrow (0-9)
 * 150-159----------------Circle (0-9)
 * 160-169----Circle  w/ pointer (0-9)
 * 170-179-------Perforated ring (0-9)
 * 180-189----------------Sphere (0-9)
 *
 * Hash: 0x0134F0835AB6BFCB | Since: 323 | API-Set: unknown
 */
export function createCheckpoint(_type, posX1, posY1, posZ1, posX2, posY2, posZ2, diameter, red, green, blue, alpha, reserved) {
    return CreateCheckpoint(_type, posX1, posY1, posZ1, posX2, posY2, posZ2, diameter, red, green, blue, alpha, reserved);
}
/**
 * Creates a tracked point, useful for checking the visibility of a 3D point on screen.
 *
 * Hash: 0xE2C9439ED45DEA60 | Since: 323 | API-Set: unknown
 */
export function createTrackedPoint() {
    return CreateTrackedPoint();
}
/**
 * No comment provided
 *
 * Hash: 0xF5ED37F54CD4D52E | Since: 323 | API-Set: unknown
 */
export function deleteCheckpoint(checkpoint) {
    DeleteCheckpoint(checkpoint);
}
/**
 * No comment provided
 *
 * Hash: 0xB25DC90BAD56CA42 | Since: 323 | API-Set: unknown
 */
export function destroyTrackedPoint(point) {
    DestroyTrackedPoint(point);
}
/**
 * No comment provided
 *
 * Hash: 0x0E4299C549F0D1F1 | Since: 323 | API-Set: unknown
 */
export function disableCompositeShotgunDecals(toggle) {
    Citizen.invokeNative('0x0E4299C549F0D1F1', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5F6DF3D92271E8A1 | Since: 323 | API-Set: unknown
 */
export function disableDownwashPtfx(toggle) {
    Citizen.invokeNative('0x5F6DF3D92271E8A1', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC35A6D07C93802B2 | Since: 323 | API-Set: unknown
 */
export function disableHdtexThisFrame() {
    Citizen.invokeNative('0xC35A6D07C93802B2');
}
/**
 * No comment provided
 *
 * Hash: 0xCFD16F0DB5A3535C | Since: 2060 | API-Set: unknown
 */
export function disableInWaterPtfx(toggle) {
    Citizen.invokeNative('0xCFD16F0DB5A3535C', toggle);
}
/**
 * Resets the extra timecycle modifier strength normally set with 0x2C328AF17210F009
 *
 * Hash: 0x2BF72AD5B41AA739 | Since: 323 | API-Set: unknown
 */
export function disableMoonCycleOverride() {
    DisableMoonCycleOverride();
}
/**
 * No comment provided
 *
 * Hash: 0x3669F1B198DCAA4F | Since: 323 | API-Set: unknown
 */
export function disableOcclusionThisFrame() {
    DisableOcclusionThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x1612C45F9E3E0D44 | Since: 323 | API-Set: unknown
 */
export function disableProcobjCreation() {
    Citizen.invokeNative('0x1612C45F9E3E0D44');
}
/**
 * No comment provided
 *
 * Hash: 0xEFD97FF47B745B8D | Since: 791 | API-Set: unknown
 */
export function disableRegionVfx() {
    DisableScriptAmbientEffects(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDE81239437E8C5A8 | Since: 323 | API-Set: unknown
 */
export function disableScreenblurFade() {
    DisableScreenblurFade();
}
/**
 * No comment provided
 *
 * Hash: 0x02369D5C8A51FDCF | Since: 323 | API-Set: unknown
 */
export function disableScuffDecals(toggle) {
    Citizen.invokeNative('0x02369D5C8A51FDCF', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC9F98AC1884E73A2 | Since: 323 | API-Set: unknown
 */
export function disableVehicleDistantlights(toggle) {
    DisableVehicleDistantlights(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5E657EF1099EDD65 | Since: 323 | API-Set: unknown
 */
export function doesLatestBriefStringExist() {
    return DoesLatestBriefStringExist(0);
}
/**
 * No comment provided
 *
 * Hash: 0x74AFEF0D2E1E409B | Since: 323 | API-Set: unknown
 */
export function doesParticleFxLoopedExist(ptfxHandle) {
    return DoesParticleFxLoopedExist(ptfxHandle);
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0xE791DF1F73ED2C8B | Since: 323 | API-Set: unknown
 */
export function doesThisPhotoSlotContainAValidPhoto() {
    return Citizen.invokeNative('0xE791DF1F73ED2C8B', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x060D935D3981A275 | Since: 323 | API-Set: unknown
 */
export function doesVehicleHaveCrewEmblem(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return DoesVehicleHaveCrewEmblem(_vehicle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x22A249A53034450A | Since: 323 | API-Set: unknown
 */
export function dontRenderInGameUi() {
    DontRenderInGameUi(false);
}
/**
 * No comment provided
 *
 * Hash: 0x7118E83EEB9F7238 | Since: 1290 | API-Set: unknown
 */
export function drawBinkMovie(binkMovie, r, g, b, a) {
    DrawBinkMovie(binkMovie, 0, 0, 0, 0, 0, r, g, b, a);
}
/**
 * No comment provided
 *
 * Hash: 0x083A2CA4F2E573BD | Since: 323 | API-Set: unknown
 */
export function drawDebugBox(x1, y1, z1, x2, y2, z2, r, g, b, alpha) {
    DrawDebugBox(x1, y1, z1, x2, y2, z2, r, g, b, alpha);
}
/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 *
 * Hash: 0x73B1189623049839 | Since: 323 | API-Set: unknown
 */
export function drawDebugCross(pos, size, red, green, blue, alpha) {
    DrawDebugCross(pos.x, pos.y, pos.z, size, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0x7FDFADE676AA3CB0 | Since: 323 | API-Set: unknown
 */
export function drawDebugLine(x1, y1, z1, x2, y2, z2, r, g, b, alpha) {
    DrawDebugLine(x1, y1, z1, x2, y2, z2, r, g, b, alpha);
}
/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 *
 * Hash: 0xD8B9A8AC5608FF94 | Since: 323 | API-Set: unknown
 */
export function drawDebugLineWithTwoColours(x1, y1, z1, x2, y2, z2, r1, g1, b1, r2, g2, b2, alpha1, alpha2) {
    DrawDebugLineWithTwoColours(x1, y1, z1, x2, y2, z2, r1, g1, b1, r2, g2, b2, alpha1, alpha2);
}
/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 *
 * Hash: 0xAAD68E1AB39DA632 | Since: 323 | API-Set: unknown
 */
export function drawDebugSphere(pos, radius, red, green, blue, alpha) {
    DrawDebugSphere(pos.x, pos.y, pos.z, radius, red, green, blue, alpha);
}
/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 *
 * Hash: 0x3903E216620488E8 | Since: 323 | API-Set: unknown
 */
export function drawDebugText(text, pos, red, green, blue, alpha) {
    DrawDebugText(text, pos.x, pos.y, pos.z, red, green, blue, alpha);
}
/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 *
 * Hash: 0xA3BB2E9555C05A8F | Since: 323 | API-Set: unknown
 */
export function drawDebugText2d(text, pos, red, green, blue, alpha) {
    DrawDebugText2d(text, pos.x, pos.y, pos.z, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xF2A1B2771A01DBD4 | Since: 323 | API-Set: unknown
 */
export function drawLightWithRange(pos, colorR, colorG, colorB, range, intensity) {
    DrawLightWithRange(pos.x, pos.y, pos.z, colorR, colorG, colorB, range, intensity);
}
/**
 * No comment provided
 *
 * Hash: 0xF49E9A9716A04595 | Since: 323 | API-Set: unknown
 */
export function drawLightWithRangeex(pos, r, g, b, range, intensity, shadow) {
    DrawLightWithRangeAndShadow(pos.x, pos.y, pos.z, r, g, b, range, intensity, shadow);
}
/**
 * No comment provided
 *
 * Hash: 0x1072F115DAB0717E | Since: 323 | API-Set: unknown
 */
export function drawLowQualityPhotoToPhone() {
    DrawLowQualityPhotoToPhone(false, false);
}
/**
 * enum MarkerTypes
 * {
 * MarkerTypeUpsideDownCone = 0,
 * MarkerTypeVerticalCylinder = 1,
 * MarkerTypeThickChevronUp = 2,
 * MarkerTypeThinChevronUp = 3,
 * MarkerTypeCheckeredFlagRect = 4,
 * MarkerTypeCheckeredFlagCircle = 5,
 * MarkerTypeVerticleCircle = 6,
 * MarkerTypePlaneModel = 7,
 * MarkerTypeLostMCDark = 8,
 * MarkerTypeLostMCLight = 9,
 * MarkerTypeNumber0 = 10,
 * MarkerTypeNumber1 = 11,
 * MarkerTypeNumber2 = 12,
 * MarkerTypeNumber3 = 13,
 * MarkerTypeNumber4 = 14,
 * MarkerTypeNumber5 = 15,
 * MarkerTypeNumber6 = 16,
 * MarkerTypeNumber7 = 17,
 * MarkerTypeNumber8 = 18,
 * MarkerTypeNumber9 = 19,
 * MarkerTypeChevronUpx1 = 20,
 * MarkerTypeChevronUpx2 = 21,
 * MarkerTypeChevronUpx3 = 22,
 * MarkerTypeHorizontalCircleFat = 23,
 * MarkerTypeReplayIcon = 24,
 * MarkerTypeHorizontalCircleSkinny = 25,
 * MarkerTypeHorizontalCircleSkinny_Arrow = 26,
 * MarkerTypeHorizontalSplitArrowCircle = 27,
 * MarkerTypeDebugSphere = 28,
 * MarkerTypeDallorSign = 29,
 * MarkerTypeHorizontalBars = 30,
 * MarkerTypeWolfHead = 31
 * };
 *
 * dirX/Y/Z represent a heading on each axis in which the marker should face, alternatively you can rotate each axis independently with rotX/Y/Z (and set dirX/Y/Z all to 0).
 *
 * faceCamera - Rotates only the y-axis (the heading) towards the camera
 *
 * p19 - no effect, default value in script is 2
 *
 * rotate - Rotates only on the y-axis (the heading)
 *
 * textureDict - Name of texture dictionary to load texture from (e.g. "GolfPutting")
 *
 * textureName - Name of texture inside dictionary to load (e.g. "PuttingMarker")
 *
 * drawOnEnts - Draws the marker onto any entities that intersect it
 *
 * basically what he said, except textureDict and textureName are totally not const char*, or if so, then they are always set to 0/NULL/nullptr in every script I checked, eg:
 *
 * `bj.c: graphics::draw_marker(6, vParam0, 0f, 0f, 1f, 0f, 0f, 0f, 4f, 4f, 4f, 240, 200, 80, iVar1, 0, 0, 2, 0, 0, 0, false);`
 *
 * his is what I used to draw an amber downward pointing chevron "V", has to be redrawn every frame.  The 180 is for 180 degrees rotation around the Y axis, the 50 is alpha, assuming max is 100, but it will accept 255.
 *
 * `GRAPHICS::DRAW_MARKER(2, v.x, v.y, v.z + 2, 0, 0, 0, 0, 180, 0, 2, 2, 2, 255, 128, 0, 50, 0, 1, 1, 0, 0, 0, 0);`
 *
 *
 *
 * Hash: 0x28477EC23D892089 | Since: 323 | API-Set: unknown
 */
export function drawMarker(_type, pos, dirX, dirY, dirZ, rot, scale, red, green, blue, alpha, bobUpAndDown, faceCamera, rotate, textureDict, textureName, drawOnEnts) {
    DrawMarker(_type, pos.x, pos.y, pos.z, dirX, dirY, dirZ, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z, red, green, blue, alpha, bobUpAndDown, faceCamera, 0, rotate, textureDict, textureName, drawOnEnts);
}
/**
 * No comment provided
 *
 * Hash: 0xE82728F0DE75D13A | Since: 573 | API-Set: unknown
 */
export function drawMarkerEx(_type, pos, dirX, dirY, dirZ, rot, scale, red, green, blue, alpha, bobUpAndDown, faceCamera, rotate, textureDict, textureName, drawOnEnts) {
    DrawMarker2(_type, pos.x, pos.y, pos.z, dirX, dirY, dirZ, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z, red, green, blue, alpha, bobUpAndDown, faceCamera, undefined, rotate, textureDict, textureName, drawOnEnts, false, false);
}
/**
 * Draws a 3D sphere, typically seen in the GTA:O freemode event "Penned In".
 * Example https://imgur.com/nCbtS4H
 *
 * alpha - The alpha for the sphere. Goes from 0.0 to 1.0.
 *
 * Hash: 0x799017F9E3B10112 | Since: 463 | API-Set: unknown
 */
export function drawMarkerSphere(pos, radius, red, green, blue, alpha) {
    DrawSphere(pos.x, pos.y, pos.z, radius, red, green, blue, alpha);
}
/**
 * Draws a rectangle on the screen.
 *
 * -x: The relative X point of the center of the rectangle. (0.0-1.0, 0.0 is the left edge of the screen, 1.0 is the right edge of the screen)
 *
 * -y: The relative Y point of the center of the rectangle. (0.0-1.0, 0.0 is the top edge of the screen, 1.0 is the bottom edge of the screen)
 *
 * -width: The relative width of the rectangle. (0.0-1.0, 1.0 means the whole screen width)
 *
 * -height: The relative height of the rectangle. (0.0-1.0, 1.0 means the whole screen height)
 *
 * -R: Red part of the color. (0-255)
 *
 * -G: Green part of the color. (0-255)
 *
 * -B: Blue part of the color. (0-255)
 *
 * -A: Alpha part of the color. (0-255, 0 means totally transparent, 255 means totally opaque)
 *
 * The total number of rectangles to be drawn in one frame is apparently limited to 399.
 *
 *
 * Hash: 0x3A618A217E5154F0 | Since: 323 | API-Set: unknown
 */
export function drawRect(x, y, width, height, r, g, b, a) {
    DrawRect(x, y, width, height, r, g, b, a, false);
}
/**
 * No comment provided
 *
 * Hash: 0x54972ADAF0294A93 | Since: 323 | API-Set: unknown
 */
export function drawScaleformMovie(scaleformHandle, x, y, width, height, red, green, blue, alpha) {
    DrawScaleformMovie(scaleformHandle, x, y, width, height, red, green, blue, alpha, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x87D51D72255D4E78 | Since: 323 | API-Set: unknown
 */
export function drawScaleformMovie3d(scaleform, pos, rot, scale, rotationOrder) {
    DrawScaleformMovie3d(scaleform, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, 0, 0, 0, scale.x, scale.y, scale.z, rotationOrder);
}
/**
 * No comment provided
 *
 * Hash: 0x1CE592FDC749D6F5 | Since: 323 | API-Set: unknown
 */
export function drawScaleformMovie3dSolid(scaleform, pos, rot, scale, rotationOrder) {
    DrawScaleformMovie3dSolid(scaleform, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, 0, 0, 0, scale.x, scale.y, scale.z, rotationOrder);
}
/**
 * unk is not used so no need
 *
 * Hash: 0x0DF606929C105BE1 | Since: 323 | API-Set: unknown
 */
export function drawScaleformMovieFullscreen(scaleform, red, green, blue, alpha) {
    DrawScaleformMovieFullscreen(scaleform, red, green, blue, alpha, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xCF537FDE4FBD4CE5 | Since: 323 | API-Set: unknown
 */
export function drawScaleformMovieFullscreenMasked(scaleform1, scaleform2, red, green, blue, alpha) {
    DrawScaleformMovieFullscreenMasked(scaleform1, scaleform2, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0x5BCA583A583194DB | Since: 323 | API-Set: unknown
 */
export function drawShadowedSpotLight(pos, dirX, dirY, dirZ, colorR, colorG, colorB, distance, brightness, roundness, radius, falloff, shadowId) {
    DrawSpotLightWithShadow(pos.x, pos.y, pos.z, dirX, dirY, dirZ, colorR, colorG, colorB, distance, brightness, roundness, radius, falloff, shadowId);
}
/**
 * Parameters:
 * * pos - coordinate where the spotlight is located
 * * dir - the direction vector the spotlight should aim at from its current position
 * * r,g,b - color of the spotlight
 * * distance - the maximum distance the light can reach
 * * brightness - the brightness of the light
 * * roundness - "smoothness" of the circle edge
 * * radius - the radius size of the spotlight
 * * falloff - the falloff size of the light's edge (example: www.i.imgur.com/DemAWeO.jpg)
 *
 * Example in C# (spotlight aims at the closest vehicle):
 * Vector3 myPos = Game.Player.Character.Position;
 * Vehicle nearest = World.GetClosestVehicle(myPos , 1000f);
 * Vector3 destinationCoords = nearest.Position;
 * Vector3 dirVector = destinationCoords - myPos;
 * dirVector.Normalize();
 * Function.Call(Hash.DRAW_SPOT_LIGHT, pos.X, pos.Y, pos.Z, dirVector.X, dirVector.Y, dirVector.Z, 255, 255, 255, 100.0f, 1f, 0.0f, 13.0f, 1f);
 *
 * Hash: 0xD0F64B265C8C8B33 | Since: 323 | API-Set: unknown
 */
export function drawSpotLight(pos, dirX, dirY, dirZ, colorR, colorG, colorB, distance, brightness, hardness, radius, falloff) {
    DrawSpotLight(pos.x, pos.y, pos.z, dirX, dirY, dirZ, colorR, colorG, colorB, distance, brightness, hardness, radius, falloff);
}
/**
 * Draws a 2D sprite on the screen.
 *
 * Parameters:
 * textureDict - Name of texture dictionary to load texture from (e.g. "CommonMenu", "MPWeaponsCommon", etc.)
 *
 * textureName - Name of texture to load from texture dictionary (e.g. "last_team_standing_icon", "tennis_icon", etc.)
 *
 * screenX/Y - Screen offset (0.5 = center)
 * scaleX/Y - Texture scaling. Negative values can be used to flip the texture on that axis. (0.5 = half)
 *
 * heading - Texture rotation in degrees (default = 0.0) positive is clockwise, measured in degrees
 *
 * red,green,blue - Sprite color (default = 255/255/255)
 *
 * alpha - opacity level
 *
 * Hash: 0xE7FFAE5EBF23D890 | Since: 323 | API-Set: unknown
 */
export function drawSprite(textureDict, textureName, screenSize, width, height, heading, red, green, blue, alpha) {
    DrawSprite(textureDict, textureName, screenSize.x, screenSize.y, width, height, heading, red, green, blue, alpha, false, undefined);
}
/**
 * Used in arcade games and Beam hack minigame in Doomsday Heist. I will most certainly dive into this to try replicate arcade games.
 * x position must be between 0.0 and 1.0 (1.0 being the most right side of the screen)
 * y position must be between 0.0 and 1.0 (1.0 being the most bottom side of the screen)
 * width 0.0 - 1.0 is the reasonable amount generally
 * height 0.0 - 1.0 is the reasonable amount generally
 * p6 almost always 0.0
 * p11 seems to be unknown but almost always 0 int
 *
 * Hash: 0x2D3B147AFAD49DE0 | Since: 1290 | API-Set: unknown
 */
export function drawSpriteArx(textureDict, textureName, x, y, width, height, red, green, blue, alpha) {
    Citizen.invokeNative('0x2D3B147AFAD49DE0', textureDict, textureName, x, y, width, height, 0, red, green, blue, alpha, undefined, undefined);
}
/**
 * Similar to DRAW_SPRITE, but allows to specify the texture coordinates used to draw the sprite.
 *
 * u1, v1 - texture coordinates for the top-left corner
 * u2, v2 - texture coordinates for the bottom-right corner
 *
 * Hash: 0x95812F9B26074726 | Since: 1868 | API-Set: unknown
 */
export function drawSpriteArxWithUv(textureDict, textureName, x, y, width, height, u1, v1, u2, v2, heading, red, green, blue, alpha) {
    DrawSpriteUv(textureDict, textureName, x, y, width, height, u1, v1, u2, v2, heading, red, green, blue, alpha, undefined);
}
/**
 * Similar to _DRAW_SPRITE, but seems to be some kind of "interactive" sprite, at least used by render targets.
 * These seem to be the only dicts ever requested by this native:
 *
 * prop_screen_biker_laptop
 * Prop_Screen_GR_Disruption
 * Prop_Screen_TaleOfUs
 * prop_screen_nightclub
 * Prop_Screen_IE_Adhawk
 * prop_screen_sm_free_trade_shipping
 * prop_screen_hacker_truck
 * MPDesktop
 * Prop_Screen_Nightclub
 * And a few others
 *
 *
 * Hash: 0x2BC54A8188768488 | Since: 877 | API-Set: unknown
 */
export function drawSpriteNamedRendertarget(textureDict, textureName, screenSize, width, height, heading, red, green, blue, alpha) {
    DrawInteractiveSprite(textureDict, textureName, screenSize.x, screenSize.y, width, height, heading, red, green, blue, alpha, undefined);
}
/**
 * Used for drawling Deadline trailing lights, see deadline.ytd
 *
 * p15 through p23 are values that appear to be related to illiumation, scaling, and rotation; more testing required.
 * For UVW mapping (u,v,w parameters), reference your favourite internet resource for more details.
 *
 * Hash: 0x29280002282F1928 | Since: 877 | API-Set: unknown
 */
export function drawTexturedPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha, textureDict, textureName, u1, v1, w1, u2, v2, w2, u3, v3, w3) {
    DrawTexturedPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha, textureDict, textureName, u1, v1, w1, u2, v2, w2, u3, v3, w3);
}
/**
 * Used for drawling Deadline trailing lights, see deadline.ytd
 *
 * Each vertex has its own colour that is blended/illuminated on the texture. Additionally, the R, G, and B components are floats that are int-casted internally.
 * For UVW mapping (u,v,w parameters), reference your favourite internet resource for more details.
 *
 * Hash: 0x736D7AA1B750856B | Since: 877 | API-Set: unknown
 */
export function drawTexturedPolyWithThreeColours(x1, y1, z1, x2, y2, z2, x3, y3, z3, red1, green1, blue1, alpha1, red2, green2, blue2, alpha2, red3, green3, blue3, alpha3, textureDict, textureName, u1, v1, w1, u2, v2, w2, u3, v3, w3) {
    DrawSpritePoly2(x1, y1, z1, x2, y2, z2, x3, y3, z3, red1, green1, blue1, alpha1, red2, green2, blue2, alpha2, red3, green3, blue3, alpha3, textureDict, textureName, u1, v1, w1, u2, v2, w2, u3, v3, w3);
}
/**
 * `All calls to this native are preceded by calls to GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER and GRAPHICS::SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU, respectively.`
 *
 * "act_cinema.ysc", line 1483:
 * `HUD::SET_HUD_COMPONENT_POSITION(15, 0.0, -0.0375);`
 * `HUD::SET_TEXT_RENDER_ID(l_AE);`
 * `GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(4);`
 * `GRAPHICS::SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU(1);`
 * `if (GRAPHICS::IS_TVSHOW_CURRENTLY_PLAYING(${movie_arthouse})) {`
 * `GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 0.7375, 1.0, 0.0, 255, 255, 255, 255);`
 * } else {
 * `GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);`
 * }
 *
 * "am_mp_property_int.ysc", line 102545:
 * `if (ENTITY::DOES_ENTITY_EXIST(a_2._f3)) {`
 * `if (HUD::IS_NAMED_RENDERTARGET_LINKED(ENTITY::GET_ENTITY_MODEL(a_2._f3))) {`
 * `HUD::SET_TEXT_RENDER_ID(a_2._f1);`
 * `GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(4);`
 * `GRAPHICS::SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU(1);`
 * `GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);`
 * `if (GRAPHICS::GET_TV_CHANNEL() == -1) {`
 * sub_a8fa5(a_2, 1);
 * } else {
 * sub_a8fa5(a_2, 1);
 * `GRAPHICS::ATTACH_TV_AUDIO_TO_ENTITY(a_2._f3);`
 * }
 * `HUD::SET_TEXT_RENDER_ID(HUD::GET_DEFAULT_SCRIPT_RENDERTARGET_RENDER_ID());`
 * }
 * }
 *
 *
 * Hash: 0xFDDC2B4ED3C69DF0 | Since: 323 | API-Set: unknown
 */
export function drawTvChannel(xPos, yPos, xScale, yScale, rotation, red, green, blue, alpha) {
    DrawTvChannel(xPos, yPos, xScale, yScale, rotation, red, green, blue, alpha);
}
/**
 * Creates a motion-blur sort of effect, this native does not seem to work, however by using the `START_SCREEN_EFFECT` native with `DrugsMichaelAliensFight` as the effect parameter, you should be able to get the effect.
 *
 * Hash: 0x9DCE1F0F78260875 | Since: 323 | API-Set: unknown
 */
export function enableAlienBloodVfx(toggle) {
    EnableAlienBloodVfx(toggle);
}
/**
 * Creates cartoon effect when Michel smokes the weed
 *
 * Hash: 0xD821490579791273 | Since: 323 | API-Set: unknown
 */
export function enableClownBloodVfx(toggle) {
    EnableClownBloodVfx(toggle);
}
/**
 * The same as SET_TIMECYCLE_MODIFIER_STRENGTH but for the secondary timecycle modifier.
 *
 * Hash: 0x2C328AF17210F009 | Since: 323 | API-Set: unknown
 */
export function enableMoonCycleOverride(strength) {
    EnableMoonCycleOverride(strength);
}
/**
 * No comment provided
 *
 * Hash: 0x74C180030FDE4B69 | Since: 323 | API-Set: unknown
 */
export function enableMovieKeyframeWait(toggle) {
    EnableMovieKeyframeWait(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x873FA65C778AD970 | Since: 323 | API-Set: unknown
 */
export function enableMovieSubtitles(toggle) {
    EnableMovieSubtitles(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5DEBD9C4DC995692 | Since: 323 | API-Set: unknown
 */
export function enableProcobjCreation() {
    Citizen.invokeNative('0x5DEBD9C4DC995692');
}
/**
 * No comment provided
 *
 * Hash: 0x0A123435A26C36CD | Since: 323 | API-Set: unknown
 */
export function endPetrolTrailDecals() {
    EndPetrolTrailDecals();
}
/**
 * Pops and calls the Scaleform function on the stack
 *
 * Hash: 0xC6796A8FFA375E53 | Since: 323 | API-Set: unknown
 */
export function endScaleformMovieMethod() {
    EndScaleformMovieMethod();
}
/**
 * No comment provided
 *
 * Hash: 0xC50AA39A577AF886 | Since: 323 | API-Set: unknown
 */
export function endScaleformMovieMethodReturnValue() {
    return EndScaleformMovieMethodReturnValue();
}
/**
 * No comment provided
 *
 * Hash: 0x362E2D3FE93A9959 | Since: 323 | API-Set: unknown
 */
export function endTextCommandScaleformString() {
    EndTextCommandScaleformString();
}
/**
 * Same as END_TEXT_COMMAND_SCALEFORM_STRING but does not perform HTML conversion for text tokens.
 *
 * Hash: 0xAE4E8157D9ECF087 | Since: 323 | API-Set: unknown
 */
export function endTextCommandUnparsedScaleformString() {
    EndTextCommandUnparsedScaleformString();
}
/**
 * Fades nearby decals within the range specified
 *
 * Hash: 0xD77EDADB0420E6E0 | Since: 323 | API-Set: unknown
 */
export function fadeDecalsInRange(pos) {
    FadeDecalsInRange(pos.x, pos.y, pos.z, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xC9B18B4619F48F7B | Since: 323 | API-Set: unknown
 */
export function fadeUpPedLight() {
    FadeUpPedLight(0);
}
/**
 * No comment provided
 *
 * Hash: 0x814AF7DCAACC597B | Since: 372 | API-Set: unknown
 */
export function forceExposureReadback(toggle) {
    Citizen.invokeNative('0x814AF7DCAACC597B', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBA0127DA25FD54C9 | Since: 372 | API-Set: unknown
 */
export function forceParticleFxInVehicleInterior() {
    Citizen.invokeNative('0xBA0127DA25FD54C9', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9B079E5221D984D3 | Since: 323 | API-Set: unknown
 */
export function forcePostfxBulletImpactsAfterHud() {
    Citizen.invokeNative('0x9B079E5221D984D3', false);
}
/**
 * No comment provided
 *
 * Hash: 0xDC459CFA0CCE245B | Since: 323 | API-Set: unknown
 */
export function forceRenderInGameUi(toggle) {
    ForceRenderInGameUi(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xD801CC02177FA3F1 | Since: 323 | API-Set: unknown
 */
export function freeMemoryForHighQualityPhoto() {
    FreeMemoryForHighQualityPhoto();
}
/**
 * No comment provided
 *
 * Hash: 0x6A12D88881435DCA | Since: 323 | API-Set: unknown
 */
export function freeMemoryForLowQualityPhoto() {
    FreeMemoryForLowQualityPhoto();
}
/**
 * No comment provided
 *
 * Hash: 0x0A46AF8A78DC5E0A | Since: 323 | API-Set: unknown
 */
export function freeMemoryForMissionCreatorPhoto() {
    FreeMemoryForMissionCreatorPhoto();
}
/**
 * No comment provided
 *
 * Hash: 0x346EF3ECAAAB149E | Since: 323 | API-Set: unknown
 */
export function freeMemoryForMissionCreatorPhotoPreview() {
    Citizen.invokeNative('0x346EF3ECAAAB149E');
}
/**
 * Returns current screen resolution.
 *
 * Hash: 0x873C9F3104101DD3 | Since: 323 | API-Set: unknown
 */
export function getActualScreenResolution() {
    return GetActualScreenResolution();
}
/**
 * In percentage: 0.0 - 100.0
 *
 * Hash: 0x8E17DDD6B9D5BF29 | Since: 1734 | API-Set: unknown
 */
export function getBinkMovieTime(binkMovie) {
    return GetBinkMovieTime(binkMovie);
}
/**
 * No comment provided
 *
 * Hash: 0x473151EBC762C6DA | Since: 323 | API-Set: unknown
 */
export function getCurrentNumberOfCloudPhotos() {
    return GetCurrentNumberOfCloudPhotos();
}
/**
 * No comment provided
 *
 * Hash: 0x30432A0118736E00 | Since: 1493 | API-Set: unknown
 */
export function getCurrentTvClipNamehash() {
    return Citizen.invokeNative('0x30432A0118736E00');
}
/**
 * No comment provided
 *
 * Hash: 0x323F647679A09103 | Since: 323 | API-Set: unknown
 */
export function getDecalWashLevel(decal) {
    return GetDecalWashLevel(decal);
}
/**
 * See GET_TIMECYCLE_MODIFIER_INDEX for use, works the same just for the secondary timecycle modifier.
 * Returns an integer representing the Timecycle modifier
 *
 * Hash: 0xBB0527EC6341496D | Since: 323 | API-Set: unknown
 */
export function getExtraTcmodifier() {
    return GetExtraTimecycleModifierIndex();
}
/**
 * false = Any resolution < 1280x720
 * true = Any resolution >= 1280x720
 *
 * Hash: 0x84ED31191CC5D2C9 | Since: 323 | API-Set: unknown
 */
export function getIsHidef() {
    return GetIsHidef();
}
/**
 * No comment provided
 *
 * Hash: 0x2F09F7976C512404 | Since: 323 | API-Set: unknown
 */
export function getIsPetrolDecalInRange(xCoord, yCoord, zCoord, radius) {
    return GetIsPetrolDecalInRange(xCoord, yCoord, zCoord, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x98D18905BF723B99 | Since: 1493 | API-Set: unknown
 */
export function getIsTimecycleTransitioningOut() {
    return Citizen.invokeNative('0x98D18905BF723B99');
}
/**
 * Setting Aspect Ratio Manually in game will return:
 *
 * false - for Narrow format Aspect Ratios (3:2, 4:3, 5:4, etc. )
 * true - for Wide format Aspect Ratios (5:3, 16:9, 16:10, etc. )
 *
 * Setting Aspect Ratio to "Auto" in game will return "false" or "true" based on the actual set Resolution Ratio.
 *
 * Hash: 0x30CF4BDA4FCB1905 | Since: 323 | API-Set: unknown
 */
export function getIsWidescreen() {
    return GetIsWidescreen();
}
/**
 * No comment provided
 *
 * Hash: 0x393BD2275CEB7793 | Since: 1103 | API-Set: unknown
 */
export function getLightOverrideMaxIntensityScale() {
    return Citizen.invokeNative('0x393BD2275CEB7793');
}
/**
 * Hardcoded to always return 2.
 *
 * Hash: 0x40AFB081F8ADD4EE | Since: 323 | API-Set: unknown
 */
export function getLoadHighQualityPhotoStatus() {
    return ReturnTwo(0);
}
/**
 * This function is hard-coded to always return 96.
 *
 * Hash: 0xDC54A7AF8B3A14EF | Since: 323 | API-Set: unknown
 */
export function getMaximumNumberOfCloudPhotos() {
    return GetMaximumNumberOfCloudPhotos();
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0x34D23450F028B0BF | Since: 323 | API-Set: unknown
 */
export function getMaximumNumberOfPhotos() {
    return GetMaximumNumberOfPhotos();
}
/**
 * Getter for SET_MOTIONBLUR_MAX_VEL_SCALER
 *
 * Hash: 0xE59343E9E96529E7 | Since: 323 | API-Set: unknown
 */
export function getMotionblurMaxVelScaler() {
    return Citizen.invokeNative('0xE59343E9E96529E7');
}
/**
 * No comment provided
 *
 * Hash: 0x35FB78DC42B7BD21 | Since: 323 | API-Set: unknown
 */
export function getRequestingnightvision() {
    return GetRequestingnightvision();
}
/**
 * Gets the scale of safe zone. if the safe zone size scale is max, it will return 1.0.
 *
 * Hash: 0xBAF107B6BB2C97F0 | Since: 323 | API-Set: unknown
 */
export function getSafeZoneSize() {
    return GetSafeZoneSize();
}
/**
 * methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
 *
 * Hash: 0xD80A80346A45D761 | Since: 757 | API-Set: unknown
 */
export function getScaleformMovieMethodReturnValueBool(methodReturn) {
    return GetScaleformMovieMethodReturnValueBool(methodReturn);
}
/**
 * methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
 * Used to get a return value from a scaleform function. Returns an int in the same way GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING returns a string.
 *
 * Hash: 0x2DE7EFA66B906036 | Since: 323 | API-Set: unknown
 */
export function getScaleformMovieMethodReturnValueInt(methodReturn) {
    return GetScaleformMovieMethodReturnValueInt(methodReturn);
}
/**
 * methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
 * Used to get a return value from a scaleform function. Returns a string in the same way GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT returns an int.
 *
 * Hash: 0xE1E258829A885245 | Since: 323 | API-Set: unknown
 */
export function getScaleformMovieMethodReturnValueString(methodReturn) {
    return GetScaleformMovieMethodReturnValueString(methodReturn);
}
/**
 * No comment provided
 *
 * Hash: 0x5CCABFFCA31DDE33 | Since: 323 | API-Set: unknown
 */
export function getScreenblurFadeCurrentTime() {
    return GetScreenblurFadeCurrentTime();
}
/**
 * No comment provided
 *
 * Hash: 0xB2EBE8CBC58B90E9 | Since: 323 | API-Set: unknown
 */
export function getScreenAspectRatio() {
    return Citizen.invokeNative('0xB2EBE8CBC58B90E9');
}
/**
 * Convert a world coordinate into its relative screen coordinate.  (WorldToScreen)
 *
 * Returns a boolean; whether or not the operation was successful. It will return false if the coordinates given are not visible to the rendering camera.
 *
 *
 * For .NET users...
 *
 * VB:
 * Public Shared Function World3DToScreen2d(pos as vector3) As Vector2
 *
 * Dim x2dp, y2dp As New Native.OutputArgument
 *
 * Native.Function.Call(Of Boolean)(Native.Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.x, pos.y, pos.z, x2dp, y2dp)
 * Return New Vector2(x2dp.GetResult(Of Single), y2dp.GetResult(Of Single))
 *
 * End Function
 *
 * C#:
 * Vector2 World3DToScreen2d(Vector3 pos)
 * {
 * var x2dp = new OutputArgument();
 * var y2dp = new OutputArgument();
 *
 * Function.Call<bool>(Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.X, pos.Y, pos.Z, x2dp, y2dp);
 * return new Vector2(x2dp.GetResult<float>(), y2dp.GetResult<float>());
 * }
 * //USE VERY SMALL VALUES FOR THE SCALE OF RECTS/TEXT because it is dramatically larger on screen than in 3D, e.g '0.05' small.
 *
 * Used to be called _WORLD3D_TO_SCREEN2D
 *
 * I thought we lost you from the scene forever. It does seem however that calling SET_DRAW_ORIGIN then your natives, then ending it. Seems to work better for certain things such as keeping boxes around people for a predator missile e.g.
 *
 * Hash: 0x34E82F05DF2974F5 | Since: 323 | API-Set: unknown
 */
export function getScreenCoordFromWorldCoord(worldPos) {
    return GetScreenCoordFromWorldCoord(worldPos.x, worldPos.y, worldPos.z);
}
/**
 * int screenresx,screenresy;
 * GET_SCREEN_RESOLUTION(&screenresx,&screenresy);
 *
 * Hash: 0x888D57E407E63624 | Since: 323 | API-Set: unknown
 */
export function getScreenResolution() {
    return GetScreenResolution();
}
/**
 * Calculates the effective X/Y fractions when applying the values set by SET_SCRIPT_GFX_ALIGN and SET_SCRIPT_GFX_ALIGN_PARAMS
 *
 * Hash: 0x6DD8F5AA635EB4B2 | Since: 323 | API-Set: unknown
 */
export function getScriptGfxAlignPosition(x, y) {
    return GetScriptGfxPosition(x, y);
}
/**
 * No comment provided
 *
 * Hash: 0xCB82A0BF0E3E3265 | Since: 323 | API-Set: unknown
 */
export function getStatusOfCreateLowQualityCopyOfPhoto() {
    return Citizen.invokeNative('0xCB82A0BF0E3E3265', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x5B0316762AFD4A64 | Since: 323 | API-Set: unknown
 */
export function getStatusOfCreateMissionCreatorPhotoPreview() {
    return Citizen.invokeNative('0x5B0316762AFD4A64');
}
/**
 * No comment provided
 *
 * Hash: 0x1670F8D05056F257 | Since: 323 | API-Set: unknown
 */
export function getStatusOfLoadMissionCreatorPhoto() {
    return GetStatusOfLoadMissionCreatorPhoto();
}
/**
 * No comment provided
 *
 * Hash: 0x0C0C4E81E1AC60A0 | Since: 323 | API-Set: unknown
 */
export function getStatusOfSaveHighQualityPhoto() {
    return GetStatusOfSaveHighQualityPhoto();
}
/**
 * 3 matches across 3 scripts. First 2 were 0, 3rd was 1. Possibly a bool.
 * appcamera, appmedia, and cellphone_controller.
 *
 * Hash: 0xF5BED327CEA362B1 | Since: 323 | API-Set: unknown
 */
export function getStatusOfSortedListOperation() {
    return GetStatusOfSortedListOperation(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0D6CA79EEEBD8CA3 | Since: 323 | API-Set: unknown
 */
export function getStatusOfTakeHighQualityPhoto() {
    return GetStatusOfTakeHighQualityPhoto();
}
/**
 * No comment provided
 *
 * Hash: 0x90A78ECAA4E78453 | Since: 323 | API-Set: unknown
 */
export function getStatusOfTakeMissionCreatorPhoto() {
    return GetStatusOfTakeMissionCreatorPhoto();
}
/**
 * Returns the texture resolution of the passed texture dict+name.
 *
 * Note: Most texture resolutions are doubled compared to the console version of the game.
 *
 * Hash: 0x35736EE65BD00C11 | Since: 323 | API-Set: unknown
 */
export function getTextureResolution(textureDict, textureName) {
    return new Vector3(GetTextureResolution(textureDict, textureName));
}
/**
 * Only use for this in the PC scripts is:
 *
 * `if (GRAPHICS::GET_TIMECYCLE_MODIFIER_INDEX() != -1)`
 *
 * Hash: 0xFDF3D97C674AFB66 | Since: 323 | API-Set: unknown
 */
export function getTimecycleModifierIndex() {
    return GetTimecycleModifierIndex();
}
/**
 * No comment provided
 *
 * Hash: 0x459FD2C8D0AB78BC | Since: 323 | API-Set: unknown
 */
export function getTimecycleTransitionModifierIndex() {
    return GetTimecycleTransitionModifierIndex();
}
/**
 * No comment provided
 *
 * Hash: 0xEB3DAC2C86001E5E | Since: 323 | API-Set: unknown
 */
export function getTogglePausedRenderphasesStatus() {
    return GetTogglePausedRenderphasesStatus();
}
/**
 * No comment provided
 *
 * Hash: 0xFC1E275A90D39995 | Since: 323 | API-Set: unknown
 */
export function getTvChannel() {
    return GetTvChannel();
}
/**
 * No comment provided
 *
 * Hash: 0x2170813D3DD8661B | Since: 323 | API-Set: unknown
 */
export function getTvVolume() {
    return GetTvVolume();
}
/**
 * No comment provided
 *
 * Hash: 0x2202A3F42C8E5F79 | Since: 323 | API-Set: unknown
 */
export function getUsingnightvision() {
    return GetUsingnightvision();
}
/**
 * No comment provided
 *
 * Hash: 0x44B80ABAB9D80BD3 | Since: 323 | API-Set: unknown
 */
export function getUsingseethrough() {
    return GetUsingseethrough();
}
/**
 * No comment provided
 *
 * Hash: 0xFE26117A5841B2FF | Since: 323 | API-Set: unknown
 */
export function getVehicleCrewEmblemRequestState(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleCrewEmblemRequestState(_vehicle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA4819F5E23E2FFAD | Since: 323 | API-Set: unknown
 */
export function golfTrailGetMaxHeight() {
    return GolfTrailGetMaxHeight();
}
/**
 * No comment provided
 *
 * Hash: 0xA4664972A9B8F8BA | Since: 323 | API-Set: unknown
 */
export function golfTrailGetVisualControlPoint() {
    return new Vector3(GolfTrailGetVisualControlPoint(0));
}
/**
 * No comment provided
 *
 * Hash: 0x12995F2E53FFA601 | Since: 323 | API-Set: unknown
 */
export function golfTrailSetColour() {
    GolfTrailSetColour(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA51C4B86B71652AE | Since: 323 | API-Set: unknown
 */
export function golfTrailSetEnabled(toggle) {
    GolfTrailSetEnabled(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x06F761EA47C1D3ED | Since: 323 | API-Set: unknown
 */
export function golfTrailSetFacing() {
    GolfTrailSetFacing(false);
}
/**
 * 12 matches across 4 scripts. All 4 scripts were job creators.
 *
 * type ranged from 0 - 2.
 * p4 was always 0.2f. Likely scale.
 * assuming p5 - p8 is RGBA, the graphic is always yellow (255, 255, 0, 255).
 *
 * Tested but noticed nothing.
 *
 * Hash: 0xB1BB03742917A5D6 | Since: 323 | API-Set: unknown
 */
export function golfTrailSetFixedControlPoint(_type, pos, red, green, blue, alpha) {
    GolfTrailSetFixedControlPoint(_type, pos.x, pos.y, pos.z, 0, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xC0416B061F2B7E5E | Since: 323 | API-Set: unknown
 */
export function golfTrailSetFixedControlPointEnable() {
    Citizen.invokeNative('0xC0416B061F2B7E5E', false);
}
/**
 * p8 seems to always be false.
 *
 * Hash: 0x312342E1A4874F3F | Since: 323 | API-Set: unknown
 */
export function golfTrailSetPath() {
    GolfTrailSetPath(0, 0, 0, 0, 0, 0, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2485D34E50A22E84 | Since: 323 | API-Set: unknown
 */
export function golfTrailSetRadius() {
    GolfTrailSetRadius(0, 0, 0);
}
/**
 * Only appeared in Golf & Golf_mp. Parameters were all ptrs
 *
 * Hash: 0x9CFDD90B2B844BF7 | Since: 323 | API-Set: unknown
 */
export function golfTrailSetShaderParams() {
    GolfTrailSetShaderParams(0, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xDBAA5EC848BA2D46 | Since: 323 | API-Set: unknown
 */
export function golfTrailSetTessellation() {
    GolfTrailSetTessellation(0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x851CD923176EBA7C | Since: 323 | API-Set: unknown
 */
export function grabPausemenuOwnership() {
    Citizen.invokeNative('0x851CD923176EBA7C');
}
/**
 * No comment provided
 *
 * Hash: 0x302C91AB2D477F7E | Since: 323 | API-Set: unknown
 */
export function grassbatchDisableFlattening() {
    GrassLodResetScriptAreas();
}
/**
 * No comment provided
 *
 * Hash: 0xAAE9BE70EC7C69AB | Since: 1290 | API-Set: unknown
 */
export function grassbatchEnableFlatteningExtInSphere(pos, scale) {
    Citizen.invokeNative('0xAAE9BE70EC7C69AB', pos.x, pos.y, pos.z, undefined, 0, 0, 0, scale);
}
/**
 * Wraps 0xAAE9BE70EC7C69AB with FLT_MAX as p7
 *
 * Hash: 0x6D955F6A9E0295B1 | Since: 323 | API-Set: unknown
 */
export function grassbatchEnableFlatteningInSphere(pos, radius) {
    GrassLodShrinkScriptAreas(pos.x, pos.y, pos.z, radius, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8217150E1217EBFD | Since: 323 | API-Set: unknown
 */
export function hasScaleformContainerMovieLoadedIntoParent(scaleformHandle) {
    return HasScaleformContainerMovieLoadedIntoParent(scaleformHandle);
}
/**
 * Only values used in the scripts are:
 *
 * "heist_mp"
 * "heistmap_mp"
 * "instructional_buttons"
 * "heist_pre"
 *
 * Hash: 0x0C1C5D756FB5F337 | Since: 323 | API-Set: unknown
 */
export function hasScaleformMovieFilenameLoaded(scaleformName) {
    return HasScaleformMovieFilenameLoaded(scaleformName);
}
/**
 * No comment provided
 *
 * Hash: 0x85F01B8D5B90570E | Since: 323 | API-Set: unknown
 */
export function hasScaleformMovieLoaded(scaleformHandle) {
    return HasScaleformMovieLoaded(scaleformHandle);
}
/**
 * No comment provided
 *
 * Hash: 0xDF6E5987D2B4D140 | Since: 323 | API-Set: unknown
 */
export function hasScaleformScriptHudMovieLoaded(hudComponent) {
    return HasScaleformScriptHudMovieLoaded(hudComponent);
}
/**
 * No comment provided
 *
 * Hash: 0x0145F696AAAAD2E4 | Since: 323 | API-Set: unknown
 */
export function hasStreamedTextureDictLoaded(textureDict) {
    return HasStreamedTextureDictLoaded(textureDict);
}
/**
 * val is 1-20 (0 will return false)
 *
 * Hash: 0x2FCB133CA50A49EB | Since: 1290 | API-Set: unknown
 */
export function isActiveScaleformMovieDeleting(val) {
    return Citizen.invokeNative('0x2FCB133CA50A49EB', val);
}
/**
 * No comment provided
 *
 * Hash: 0xC694D74949CAFD0C | Since: 323 | API-Set: unknown
 */
export function isDecalAlive(decal) {
    return IsDecalAlive(decal);
}
/**
 * No comment provided
 *
 * Hash: 0x1F710BFF7DAE6261 | Since: 1604 | API-Set: unknown
 */
export function isPlaylistOnChannel(tvChannel) {
    return IsPlaylistUnk(tvChannel, undefined);
}
/**
 * val is 1-20. Return is related to INSTRUCTIONAL_BUTTONS, COLOUR_SWITCHER_02, etc?
 *
 * Hash: 0x86255B1FC929E33E | Since: 1290 | API-Set: unknown
 */
export function isScaleformMovieDeleting(val) {
    return IsScaleformMovieDeleting(val);
}
/**
 * methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
 * Returns true if the return value of a scaleform function is ready to be collected (using GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING or GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT).
 *
 * Hash: 0x768FF8961BA904D6 | Since: 323 | API-Set: unknown
 */
export function isScaleformMovieMethodReturnValueReady(methodReturn) {
    return IsScaleformMovieMethodReturnValueReady(methodReturn);
}
/**
 * Returns whether screen transition to blur/from blur is running.
 *
 * Hash: 0x7B226C785A52A0A9 | Since: 323 | API-Set: unknown
 */
export function isScreenblurFadeRunning() {
    return IsScreenblurFadeRunning();
}
/**
 * No comment provided
 *
 * Hash: 0xC45CCDAAC9221CA8 | Since: 323 | API-Set: unknown
 */
export function isTrackedPointVisible(point) {
    return IsTrackedPointVisible(point);
}
/**
 * No comment provided
 *
 * Hash: 0x0AD973CA1E077B60 | Since: 323 | API-Set: unknown
 */
export function isTvshowCurrentlyPlaying(videoCliphash) {
    if (typeof videoCliphash === 'string')
        videoCliphash = GetHashKey(videoCliphash);
    return IsTvPlaylistItemPlaying(videoCliphash);
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0xEC72C258667BE5EA | Since: 323 | API-Set: unknown
 */
export function loadHighQualityPhoto() {
    return Citizen.invokeNative('0xEC72C258667BE5EA', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4862437A486F91B0 | Since: 323 | API-Set: unknown
 */
export function loadMissionCreatorPhoto() {
    return LoadMissionCreatorPhoto(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB66064452270E8F1 | Since: 323 | API-Set: unknown
 */
export function loadMovieMeshSet(movieMeshSetName) {
    return LoadMovieMeshSet(movieMeshSetName);
}
/**
 * No comment provided
 *
 * Hash: 0x84C8D7C2D30D3280 | Since: 323 | API-Set: unknown
 */
export function moveVehicleDecals() {
    MoveVehicleDecals(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEFB55E7C25D3B3BE | Since: 323 | API-Set: unknown
 */
export function overrideInteriorSmokeEnd() {
    OverrideInteriorSmokeEnd();
}
/**
 * No comment provided
 *
 * Hash: 0x1600FD8CF72EBC12 | Since: 323 | API-Set: unknown
 */
export function overrideInteriorSmokeLevel(level) {
    OverrideInteriorSmokeLevel(level);
}
/**
 * No comment provided
 *
 * Hash: 0x2A2A52824DB96700 | Since: 323 | API-Set: unknown
 */
export function overrideInteriorSmokeName(name) {
    OverrideInteriorSmokeName(name);
}
/**
 * No comment provided
 *
 * Hash: 0x43FA7CBE20DAB219 | Since: 1290 | API-Set: unknown
 */
export function overrideNightvisionLightRange() {
    Citizen.invokeNative('0x43FA7CBE20DAB219', 0);
}
/**
 * Overriding ped badge texture to a passed texture. It's synced between players (even custom textures!), don't forget to request used dict on *all* clients to make it sync properly. Can be removed by passing empty strings.
 *
 * Hash: 0x95EB5E34F821BABE | Since: 877 | API-Set: unknown
 */
export function overridePedCrewLogoTexture(ped, txd, txn) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return OverridePedBadgeTexture(_ped, txd, txn);
}
/**
 * No comment provided
 *
 * Hash: 0xD1C7CB175E012964 | Since: 323 | API-Set: unknown
 */
export function passKeyboardInputToScaleform(scaleformHandle) {
    return PassKeyboardInputToScaleform(scaleformHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x8A35C742130C6080 | Since: 323 | API-Set: unknown
 */
export function patchDecalDiffuseMap(decalType, textureDict, textureName) {
    PatchDecalDiffuseMap(decalType, textureDict, textureName);
}
/**
 * No comment provided
 *
 * Hash: 0xBCEDB009461DA156 | Since: 323 | API-Set: unknown
 */
export function phonephotoeditorIsActive() {
    return Citizen.invokeNative('0xBCEDB009461DA156');
}
/**
 * No comment provided
 *
 * Hash: 0x27FEB5254759CDE3 | Since: 323 | API-Set: unknown
 */
export function phonephotoeditorSetFrameTxd(textureDict) {
    return Citizen.invokeNative('0x27FEB5254759CDE3', textureDict, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7AC24EAB6D74118D | Since: 323 | API-Set: unknown
 */
export function phonephotoeditorToggle() {
    return Citizen.invokeNative('0x7AC24EAB6D74118D', false);
}
/**
 * No comment provided
 *
 * Hash: 0x70D2CC8A542A973C | Since: 1290 | API-Set: unknown
 */
export function playBinkMovie(binkMovie) {
    PlayBinkMovie(binkMovie);
}
/**
 * No comment provided
 *
 * Hash: 0x3C8938D7D872211E | Since: 323 | API-Set: unknown
 */
export function popTimecycleModifier() {
    PopTimecycleModifier();
}
/**
 * Only one match in the scripts:
 *
 * `GRAPHICS::PRESET_INTERIOR_AMBIENT_CACHE("int_carrier_hanger");`
 *
 * Hash: 0xD7021272EB0A451E | Since: 323 | API-Set: unknown
 */
export function presetInteriorAmbientCache(timecycleModifierName) {
    PresetInteriorAmbientCache(timecycleModifierName);
}
/**
 * No comment provided
 *
 * Hash: 0x0218BA067D249DEA | Since: 323 | API-Set: unknown
 */
export function procgrassDisableAmbscalescan() {
    Citizen.invokeNative('0x0218BA067D249DEA');
}
/**
 * No comment provided
 *
 * Hash: 0x649C97D52332341A | Since: 323 | API-Set: unknown
 */
export function procgrassDisableCullsphere(handle) {
    Citizen.invokeNative('0x649C97D52332341A', handle);
}
/**
 * No comment provided
 *
 * Hash: 0x14FC5833464340A8 | Since: 323 | API-Set: unknown
 */
export function procgrassEnableAmbscalescan() {
    Citizen.invokeNative('0x14FC5833464340A8');
}
/**
 * No comment provided
 *
 * Hash: 0xAE51BC858F32BA66 | Since: 323 | API-Set: unknown
 */
export function procgrassEnableCullsphere(handle, pos, scale) {
    Citizen.invokeNative('0xAE51BC858F32BA66', handle, pos.x, pos.y, pos.z, scale);
}
/**
 * No comment provided
 *
 * Hash: 0x2C42340F916C5930 | Since: 323 | API-Set: unknown
 */
export function procgrassIsCullsphereEnabled(handle) {
    return Citizen.invokeNative('0x2C42340F916C5930', handle);
}
/**
 * No comment provided
 *
 * Hash: 0x58F735290861E6B4 | Since: 323 | API-Set: unknown
 */
export function pushTimecycleModifier() {
    PushTimecycleModifier();
}
/**
 * No comment provided
 *
 * Hash: 0x9B6E70C5CEEF4EEB | Since: 323 | API-Set: unknown
 */
export function queryMovieMeshSetState() {
    return QueryMovieMeshSetState(undefined);
}
/**
 * 2 matches across 2 scripts. Only showed in appcamera & appmedia. Both were 0.
 *
 * Hash: 0x2A893980E96B659A | Since: 323 | API-Set: unknown
 */
export function queueOperationToCreateSortedListOfPhotos() {
    return QueueOperationToCreateSortedListOfPhotos(undefined);
}
/**
 * Used with 'NG_filmnoir_BW{01,02}' timecycles and the "NOIR_FILTER_SOUNDS" audioref.
 *
 * Hash: 0xA44FF770DFBC5DAE | Since: 323 | API-Set: unknown
 */
export function registerNoirLensEffect() {
    RegisterNoirScreenEffectThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x170911F37F646F29 | Since: 2802 | API-Set: unknown
 */
export function registerPostfxBulletImpact(weaponWorldPosX, weaponWorldPosY, weaponWorldPosZ, intensity) {
    Citizen.invokeNative('0x170911F37F646F29', weaponWorldPosX, weaponWorldPosY, weaponWorldPosZ, intensity);
}
/**
 * No comment provided
 *
 * Hash: 0x04D950EEFA4EED8C | Since: 1290 | API-Set: unknown
 */
export function releaseBinkMovie(binkMovie) {
    ReleaseBinkMovie(binkMovie);
}
/**
 * No comment provided
 *
 * Hash: 0xEB119AA014E89183 | Since: 323 | API-Set: unknown
 */
export function releaseMovieMeshSet(movieMeshSet) {
    ReleaseMovieMeshSet(movieMeshSet);
}
/**
 * No comment provided
 *
 * Hash: 0xED3F346429CCD659 | Since: 323 | API-Set: unknown
 */
export function removeDecal(decal) {
    RemoveDecal(decal);
}
/**
 * No comment provided
 *
 * Hash: 0xCCF71CBDDF5B6CB9 | Since: 323 | API-Set: unknown
 */
export function removeDecalsFromObject(obj) {
    const _obj = obj instanceof IObject ? obj.handle() : obj;
    RemoveDecalsFromObject(_obj);
}
/**
 * No comment provided
 *
 * Hash: 0xA6F6F70FDC6D144C | Since: 323 | API-Set: unknown
 */
export function removeDecalsFromObjectFacing(obj, pos) {
    const _obj = obj instanceof IObject ? obj.handle() : obj;
    RemoveDecalsFromObjectFacing(_obj, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xE91F1B65F2B48D57 | Since: 323 | API-Set: unknown
 */
export function removeDecalsFromVehicle(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    RemoveDecalsFromVehicle(_vehicle);
}
/**
 * Removes all decals in range from a position, it includes the bullet holes, blood pools, petrol...
 *
 * Hash: 0x5D6B2D4830A67C62 | Since: 323 | API-Set: unknown
 */
export function removeDecalsInRange(pos, range) {
    RemoveDecalsInRange(pos.x, pos.y, pos.z, range);
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x61F95E5BB3E0A8C6 | Since: 323 | API-Set: unknown
 */
export function removeGrassCullSphere(handle) {
    Citizen.invokeNative('0x61F95E5BB3E0A8C6', handle);
}
/**
 * No comment provided
 *
 * Hash: 0xC401503DFE8D53CF | Since: 323 | API-Set: unknown
 */
export function removeParticleFx(ptfxHandle) {
    RemoveParticleFx(ptfxHandle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB8FEAEEBCC127425 | Since: 323 | API-Set: unknown
 */
export function removeParticleFxFromEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    RemoveParticleFxFromEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xDD19FA1C6D657305 | Since: 323 | API-Set: unknown
 */
export function removeParticleFxInRange(pos, radius) {
    RemoveParticleFxInRange(pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0xF44A5456AC3F4F97 | Since: 323 | API-Set: unknown
 */
export function removeScaleformScriptHudMovie(hudComponent) {
    RemoveScaleformScriptHudMovie(hudComponent);
}
/**
 * No comment provided
 *
 * Hash: 0xD2300034310557E4 | Since: 323 | API-Set: unknown
 */
export function removeVehicleCrewEmblem(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    RemoveVehicleCrewEmblem(_vehicle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x03300B57FCAC6DDB | Since: 323 | API-Set: unknown
 */
export function renderShadowedLightsWithNoShadows() {
    Citizen.invokeNative('0x03300B57FCAC6DDB', false);
}
/**
 * No comment provided
 *
 * Hash: 0x98EDF76A7271E4F2 | Since: 323 | API-Set: unknown
 */
export function requestEarlyLightCheck() {
    Citizen.invokeNative('0x98EDF76A7271E4F2');
}
/**
 * No comment provided
 *
 * Hash: 0x11FE353CF9733E6F | Since: 323 | API-Set: unknown
 */
export function requestScaleformMovie(scaleformName) {
    return RequestScaleformMovie(scaleformName);
}
/**
 * No comment provided
 *
 * Hash: 0xC514489CFB8AF806 | Since: 323 | API-Set: unknown
 */
export function requestScaleformMovieInstance(scaleformName) {
    return RequestScaleformMovieInstance(scaleformName);
}
/**
 * Similar to REQUEST_SCALEFORM_MOVIE, but seems to be some kind of "interactive" scaleform movie?
 *
 * These seem to be the only scaleforms ever requested by this native:
 * "breaking_news"
 * "desktop_pc"
 * "ECG_MONITOR"
 * "Hacking_PC"
 * "TEETH_PULLING"
 *
 * Note: Unless this hash is out-of-order, this native is next-gen only.
 *
 *
 * Hash: 0xBD06C611BB9048C2 | Since: 323 | API-Set: unknown
 */
export function requestScaleformMovieSkipRenderWhilePaused(scaleformName) {
    return RequestScaleformMovieSkipRenderWhilePaused(scaleformName);
}
/**
 * Another REQUEST_SCALEFORM_MOVIE equivalent.
 *
 * Hash: 0x65E7E78842E74CDB | Since: 372 | API-Set: unknown
 */
export function requestScaleformMovieWithIgnoreSuperWidescreen(scaleformName) {
    return RequestScaleformMovieWithIgnoreSuperWidescreen(scaleformName);
}
/**
 * No comment provided
 *
 * Hash: 0x9304881D6F6537EA | Since: 323 | API-Set: unknown
 */
export function requestScaleformScriptHudMovie(hudComponent) {
    RequestScaleformScriptHudMovie(hudComponent);
}
/**
 * This function can requests texture dictonaries from following RPFs:
 * scaleform_generic.rpf
 * scaleform_minigames.rpf
 * scaleform_minimap.rpf
 * scaleform_web.rpf
 *
 * last param isnt a toggle
 *
 * Hash: 0xDFA2EF8E04127DD5 | Since: 323 | API-Set: unknown
 */
export function requestStreamedTextureDict(textureDict) {
    RequestStreamedTextureDict(textureDict, false);
}
/**
 * Sets an value related to timecycles.
 *
 * Hash: 0xE3E2C1B4C59DBC77 | Since: 323 | API-Set: unknown
 */
export function resetAdaptation() {
    Citizen.invokeNative('0xE3E2C1B4C59DBC77', 0);
}
/**
 * Resets the effect of SET_PARTICLE_FX_OVERRIDE
 *
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0x89C8553DD3274AAE | Since: 323 | API-Set: unknown
 */
export function resetParticleFxOverride(name) {
    ResetParticleFxOverride(name);
}
/**
 * No comment provided
 *
 * Hash: 0xE1C8709406F2C41C | Since: 323 | API-Set: unknown
 */
export function resetPausedRenderphases() {
    ResetPausedRenderphases();
}
/**
 * This function resets the alignment set using SET_SCRIPT_GFX_ALIGN and SET_SCRIPT_GFX_ALIGN_PARAMS to the default values ('I', 'I'; 0, 0, 0, 0).
 * This should be used after having used the aforementioned functions in order to not affect any other scripts attempting to draw.
 *
 * Hash: 0xE3A3DB414A373DAB | Since: 323 | API-Set: unknown
 */
export function resetScriptGfxAlign() {
    ResetScriptGfxAlign();
}
/**
 * 1 match in 1 script. cellphone_controller.
 * p0 is -1 in scripts.
 *
 * Hash: 0x3DEC726C25A11BAC | Since: 323 | API-Set: unknown
 */
export function saveHighQualityPhoto(unused) {
    return SaveHighQualityPhoto(unused);
}
/**
 * Pushes a boolean for the Scaleform function onto the stack.
 *
 * Hash: 0xC58424BA936EB458 | Since: 323 | API-Set: unknown
 */
export function scaleformMovieMethodAddParamBool(value) {
    ScaleformMovieMethodAddParamBool(value);
}
/**
 * Pushes a float for the Scaleform function onto the stack.
 *
 * Hash: 0xD69736AAE04DB51A | Since: 323 | API-Set: unknown
 */
export function scaleformMovieMethodAddParamFloat(value) {
    ScaleformMovieMethodAddParamFloat(value);
}
/**
 * Pushes an integer for the Scaleform function onto the stack.
 *
 * Hash: 0xC3D0841A0CC546A6 | Since: 323 | API-Set: unknown
 */
export function scaleformMovieMethodAddParamInt(value) {
    ScaleformMovieMethodAddParamInt(value);
}
/**
 * No comment provided
 *
 * Hash: 0xEC52C631A1831C03 | Since: 323 | API-Set: unknown
 */
export function scaleformMovieMethodAddParamLatestBriefString(value) {
    ScaleformMovieMethodAddParamLatestBriefString(value);
}
/**
 * Same as SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING
 * Both SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING / _SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING_2 works, but _SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING_2 is usually used for "name" (organisation, players..).
 *
 * Hash: 0x77FE3402004CD1B0 | Since: 573 | API-Set: unknown
 */
export function scaleformMovieMethodAddParamLiteralString(_string) {
    ScaleformMovieMethodAddParamLiteralString(_string);
}
/**
 * No comment provided
 *
 * Hash: 0xE83A3E3557A56640 | Since: 323 | API-Set: unknown
 */
export function scaleformMovieMethodAddParamPlayerNameString(_string) {
    ScaleformMovieMethodAddParamPlayerNameString(_string);
}
/**
 * No comment provided
 *
 * Hash: 0xBA7148484BD90365 | Since: 323 | API-Set: unknown
 */
export function scaleformMovieMethodAddParamTextureNameString(_string) {
    ScaleformMovieMethodAddParamTextureNameString(_string);
}
/**
 * No comment provided
 *
 * Hash: 0x43DBAE39626CE83F | Since: 1290 | API-Set: unknown
 */
export function seethroughGetMaxThickness() {
    return SeethroughGetMaxThickness();
}
/**
 * No comment provided
 *
 * Hash: 0x70A64C0234EF522C | Since: 323 | API-Set: unknown
 */
export function seethroughReset() {
    SeethroughReset();
}
/**
 * No comment provided
 *
 * Hash: 0x1086127B3A63505E | Since: 573 | API-Set: unknown
 */
export function seethroughSetColorNear(red, green, blue) {
    SeethroughSetColorNear(red, green, blue);
}
/**
 * No comment provided
 *
 * Hash: 0x9D75795B9DC6EBBF | Since: 573 | API-Set: unknown
 */
export function seethroughSetFadeEnddistance(distance) {
    SeethroughSetFadeEndDistance(distance);
}
/**
 * No comment provided
 *
 * Hash: 0xA78DE25577300BA1 | Since: 573 | API-Set: unknown
 */
export function seethroughSetFadeStartdistance(distance) {
    SeethroughSetFadeStartDistance(distance);
}
/**
 * min: 0.0
 * max: 0.75
 *
 * Hash: 0xD7D0B00177485411 | Since: 323 | API-Set: unknown
 */
export function seethroughSetHeatscale(index, heatScale) {
    SeethroughSetHeatscale(index, heatScale);
}
/**
 * No comment provided
 *
 * Hash: 0x1636D7FC127B10D2 | Since: 573 | API-Set: unknown
 */
export function seethroughSetHighlightNoise(noise) {
    SeethroughSetHiLightNoise(noise);
}
/**
 * No comment provided
 *
 * Hash: 0x19E50EB6E33E1D28 | Since: 573 | API-Set: unknown
 */
export function seethroughSetHilightIntensity(intensity) {
    SeethroughSetHiLightIntensity(intensity);
}
/**
 * 0.0 = you will not be able to see people behind the walls. 50.0 and more = you will see everyone through the walls. More value is "better" view. See https://gfycat.com/FirmFlippantGourami
 * min: 1.0
 * max: 10000.0
 *
 * Hash: 0x0C8FAC83902A62DF | Since: 573 | API-Set: unknown
 */
export function seethroughSetMaxThickness(thickness) {
    SeethroughSetMaxThickness(thickness);
}
/**
 * No comment provided
 *
 * Hash: 0xFEBFBFDFB66039DE | Since: 573 | API-Set: unknown
 */
export function seethroughSetNoiseMax(amount) {
    SeethroughSetNoiseAmountMax(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xFF5992E1C9E65D05 | Since: 573 | API-Set: unknown
 */
export function seethroughSetNoiseMin(amount) {
    SeethroughSetNoiseAmountMin(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xF3F776ADA161E47D | Since: 1604 | API-Set: unknown
 */
export function setArenaThemeAndVariationForTakenPhoto() {
    Citizen.invokeNative('0xF3F776ADA161E47D', undefined, 0);
}
/**
 * Does not affect weapons, particles, fire/explosions, flashlights or the sun.
 * When set to true, all emissive textures (including ped components that have light effects), street lights, building lights, vehicle lights, etc will all be turned off.
 *
 * Used in Humane Labs Heist for EMP.
 *
 * state: True turns off all artificial light sources in the map: buildings, street lights, car lights, etc. False turns them back on.
 *
 * Hash: 0x1268615ACE24D504 | Since: 323 | API-Set: unknown
 */
export function setArtificialLightsState(state) {
    SetArtificialLightsState(state);
}
/**
 * If "blackout" is enabled, this native allows you to ignore "blackout" for vehicles.
 *
 * Hash: 0xE2B187C0939B3D32 | Since: 2060 | API-Set: unknown
 */
export function setArtificialVehicleLightsState(toggle) {
    SetArtificialLightsStateAffectsVehicles(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x23BA6B0C2AD7B0D3 | Since: 323 | API-Set: unknown
 */
export function setBackfaceculling(toggle) {
    SetBackfaceculling(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x338D9F609FD632DB | Since: 1290 | API-Set: unknown
 */
export function setBinkMovie(name) {
    return SetBinkMovie(name);
}
/**
 * No comment provided
 *
 * Hash: 0xF816F2933752322D | Since: 1868 | API-Set: unknown
 */
export function setBinkMovieAudioFrontend(binkMovie) {
    SetBinkMovieUnk2(binkMovie, false);
}
/**
 * In percentage: 0.0 - 100.0
 *
 * Hash: 0x0CB6B3446855B57A | Since: 1290 | API-Set: unknown
 */
export function setBinkMovieTime(binkMovie, progress) {
    SetBinkMovieTime(binkMovie, progress);
}
/**
 * `binkMovie: Is return value from _SET_BINK_MOVIE. Has something to do with bink volume? (audRequestedSettings::SetVolumeCurveScale)`
 *
 * Hash: 0xAFF33B1178172223 | Since: 1290 | API-Set: unknown
 */
export function setBinkMovieVolume(binkMovie, value) {
    SetBinkMovieVolume(binkMovie, value);
}
/**
 * No comment provided
 *
 * Hash: 0x6805D58CAA427B72 | Since: 1290 | API-Set: unknown
 */
export function setBinkShouldSkip(binkMovie, bShouldSkip) {
    SetBinkShouldSkip(binkMovie, bShouldSkip);
}
/**
 * This does not move an existing checkpoint... so wtf.
 *
 * Hash: 0xF51D36185993515D | Since: 323 | API-Set: unknown
 */
export function setCheckpointClipplaneWithPosNorm(checkpoint, pos, unkX, unkY, unkZ) {
    Citizen.invokeNative('0xF51D36185993515D', checkpoint, pos.x, pos.y, pos.z, unkX, unkY, unkZ);
}
/**
 * Sets the cylinder height of the checkpoint.
 *
 * Parameters:
 * * nearHeight - The height of the checkpoint when inside of the radius.
 * * farHeight - The height of the checkpoint when outside of the radius.
 * * radius - The radius of the checkpoint.
 *
 * Hash: 0x2707AAE9D9297D89 | Since: 323 | API-Set: unknown
 */
export function setCheckpointCylinderHeight(checkpoint, nearHeight, farHeight, radius) {
    SetCheckpointCylinderHeight(checkpoint, nearHeight, farHeight, radius);
}
/**
 * Unknown. Called after creating a checkpoint (type: 51) in the creators.
 *
 * Hash: 0x615D3925E87A3B26 | Since: 323 | API-Set: unknown
 */
export function setCheckpointDecalRotAlignedToCameraRot(checkpoint) {
    Citizen.invokeNative('0x615D3925E87A3B26', checkpoint);
}
/**
 * No comment provided
 *
 * Hash: 0x3C788E7F6438754D | Since: 1180 | API-Set: unknown
 */
export function setCheckpointDirection(checkpoint, pos) {
    Citizen.invokeNative('0x3C788E7F6438754D', checkpoint, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xDB1EA9411C8911EC | Since: 1180 | API-Set: unknown
 */
export function setCheckpointForceDirection(checkpoint) {
    Citizen.invokeNative('0xDB1EA9411C8911EC', checkpoint);
}
/**
 * No comment provided
 *
 * Hash: 0xFCF6788FC4860CD4 | Since: 1734 | API-Set: unknown
 */
export function setCheckpointForceOldArrowPointing(checkpoint) {
    Citizen.invokeNative('0xFCF6788FC4860CD4', checkpoint);
}
/**
 * No comment provided
 *
 * Hash: 0x4B5B4DA5D79F1943 | Since: 323 | API-Set: unknown
 */
export function setCheckpointInsideCylinderHeightScale(checkpoint, scale) {
    SetCheckpointIconHeight(checkpoint, scale);
}
/**
 * No comment provided
 *
 * Hash: 0x44621483FF966526 | Since: 877 | API-Set: unknown
 */
export function setCheckpointInsideCylinderScale(checkpoint, scale) {
    SetCheckpointIconScale(checkpoint, scale);
}
/**
 * Sets the checkpoint color.
 *
 * Hash: 0x7167371E8AD747F7 | Since: 323 | API-Set: unknown
 */
export function setCheckpointRgba(checkpoint, red, green, blue, alpha) {
    SetCheckpointRgba(checkpoint, red, green, blue, alpha);
}
/**
 * Sets the checkpoint icon color.
 *
 * Hash: 0xB9EA40907C680580 | Since: 323 | API-Set: unknown
 */
export function setCheckpointRgba2(checkpoint, red, green, blue, alpha) {
    SetCheckpointRgba2(checkpoint, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xBBF327DED94E4DEB | Since: 323 | API-Set: unknown
 */
export function setCurrentPlayerTcmodifier(modifierName) {
    SetCurrentPlayerTcmodifier(modifierName);
}
/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 *
 * Hash: 0x175B6BFC15CDD0C5 | Since: 323 | API-Set: unknown
 */
export function setDebugLinesAndSpheresDrawingActive(enabled) {
    SetDebugLinesAndSpheresDrawingActive(enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x46D1A61A21F566FC | Since: 323 | API-Set: unknown
 */
export function setDecalBulletImpactRangeScale() {
    Citizen.invokeNative('0x46D1A61A21F566FC', 0);
}
/**
 * No comment provided
 *
 * Hash: 0xC5C8F970D4EDFF71 | Since: 877 | API-Set: unknown
 */
export function setDepthwriting(toggle) {
    Citizen.invokeNative('0xC5C8F970D4EDFF71', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x4B5CFC83122DF602 | Since: 323 | API-Set: unknown
 */
export function setDisableDecalRenderingThisFrame() {
    SetDisableDecalRenderingThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0xD9454B5752C857DC | Since: 323 | API-Set: unknown
 */
export function setDisablePetrolDecalsIgnitingThisFrame() {
    SetDisablePetrolDecalsIgnitingThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x27CFB1B1E078CB2D | Since: 323 | API-Set: unknown
 */
export function setDisablePetrolDecalsRecyclingThisFrame() {
    Citizen.invokeNative('0x27CFB1B1E078CB2D');
}
/**
 * No comment provided
 *
 * Hash: 0xE2892E7E55D7073A | Since: 323 | API-Set: unknown
 */
export function setDistanceBlurStrengthOverride() {
    Citizen.invokeNative('0xE2892E7E55D7073A', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1D5F595CCAE2E238 | Since: 323 | API-Set: unknown
 */
export function setEntityIconColor(entity, red, green, blue, alpha) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityIconColor(_entity, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xE0E8BEECCA96BA31 | Since: 323 | API-Set: unknown
 */
export function setEntityIconVisibility(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityIconVisibility(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xEF398BEEE4EF45F9 | Since: 323 | API-Set: unknown
 */
export function setExposuretweak(toggle) {
    Citizen.invokeNative('0xEF398BEEE4EF45F9', toggle);
}
/**
 * Full list of timecycle modifiers by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/timecycleModifiers.json
 *
 * Hash: 0x5096FD9CCB49056D | Since: 323 | API-Set: unknown
 */
export function setExtraTcmodifier(modifierName) {
    SetExtraTimecycleModifier(modifierName);
}
/**
 * Purpose of p0 and p1 unknown.
 *
 * Hash: 0x0AB84296FED9CFC6 | Since: 323 | API-Set: unknown
 */
export function setFlash(fadeIn, duration, fadeOut) {
    SetFlash(0, 0, fadeIn, duration, fadeOut);
}
/**
 * No comment provided
 *
 * Hash: 0x6A51F78772175A51 | Since: 1011 | API-Set: unknown
 */
export function setForceMotionblur(toggle) {
    Citizen.invokeNative('0x6A51F78772175A51', toggle);
}
/**
 * This function is hard-coded to always return 0.
 *
 * Hash: 0xBE197EAA669238F4 | Since: 323 | API-Set: unknown
 */
export function setGrassCullSphere() {
    return Citizen.invokeNative('0xBE197EAA669238F4', 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xBA3D65906822BED5 | Since: 323 | API-Set: unknown
 */
export function setHidofOverride(nearplaneOut, nearplaneIn, farplaneOut, farplaneIn) {
    SetHidofOverride(false, false, nearplaneOut, nearplaneIn, farplaneOut, farplaneIn);
}
/**
 * No comment provided
 *
 * Hash: 0x9641588DAB93B4B5 | Since: 877 | API-Set: unknown
 */
export function setLightOverrideMaxIntensityScale() {
    Citizen.invokeNative('0x9641588DAB93B4B5', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB569F41F3E7E83A4 | Since: 1103 | API-Set: unknown
 */
export function setLockAdaptiveDofDistance() {
    Citizen.invokeNative('0xB569F41F3E7E83A4', false);
}
/**
 * Setter for GET_MOTIONBLUR_MAX_VEL_SCALER
 *
 * Hash: 0xB3C641F3630BF6DA | Since: 323 | API-Set: unknown
 */
export function setMotionblurMaxVelScaler() {
    Citizen.invokeNative('0xB3C641F3630BF6DA', 0);
}
/**
 * No comment provided
 *
 * Hash: 0xBF59707B3E5ED531 | Since: 323 | API-Set: unknown
 */
export function setNextPlayerTcmodifier(modifierName) {
    SetNextPlayerTcmodifier(modifierName);
}
/**
 * Enables Night Vision.
 *
 * Example:
 * C#: Function.Call(Hash.SET_NIGHTVISION, true);
 * `C++: GRAPHICS::SET_NIGHTVISION(true);`
 *
 * BOOL toggle:
 * true = turns night vision on for your player.
 * false = turns night vision off for your player.
 *
 * Hash: 0x18F621F7A5B1F85D | Since: 323 | API-Set: unknown
 */
export function setNightvision(toggle) {
    SetNightvision(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE787BF1C5CF823C9 | Since: 323 | API-Set: unknown
 */
export function setNoiseoveride(toggle) {
    SetNoiseoveride(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xCB6A7C3BB17A0C67 | Since: 323 | API-Set: unknown
 */
export function setNoisinessoveride(value) {
    SetNoisinessoveride(value);
}
/**
 * No comment provided
 *
 * Hash: 0xADD6627C4D325458 | Since: 2189 | API-Set: unknown
 */
export function setOnIslandXForTakenPhoto() {
    Citizen.invokeNative('0xADD6627C4D325458', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x54E22EA2C1956A8D | Since: 323 | API-Set: unknown
 */
export function setParticleFxBangScrapeLodrangeScale() {
    Citizen.invokeNative('0x54E22EA2C1956A8D', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x908311265D42A820 | Since: 323 | API-Set: unknown
 */
export function setParticleFxBloodScale() {
    Citizen.invokeNative('0x908311265D42A820', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBB90E12CAC1DAB25 | Since: 323 | API-Set: unknown
 */
export function setParticleFxBulletImpactLodrangeScale() {
    Citizen.invokeNative('0xBB90E12CAC1DAB25', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x27E32866E9A5C416 | Since: 323 | API-Set: unknown
 */
export function setParticleFxBulletImpactScale(scale) {
    SetParticleFxBulletImpactScale(scale);
}
/**
 * No comment provided
 *
 * Hash: 0xCA4AE345A153D573 | Since: 323 | API-Set: unknown
 */
export function setParticleFxBulletTraceNoAngleReject() {
    Citizen.invokeNative('0xCA4AE345A153D573', false);
}
/**
 * No comment provided
 *
 * Hash: 0xACEE6F360FC1F6B6 | Since: 323 | API-Set: unknown
 */
export function setParticleFxCamInsideNonplayerVehicle(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetParticleFxCamInsideNonplayerVehicle(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xEEC4047028426510 | Since: 323 | API-Set: unknown
 */
export function setParticleFxCamInsideVehicle() {
    SetParticleFxCamInsideVehicle(false);
}
/**
 * No comment provided
 *
 * Hash: 0x949F397A288B28B3 | Since: 323 | API-Set: unknown
 */
export function setParticleFxFootLodrangeScale() {
    Citizen.invokeNative('0x949F397A288B28B3', 0);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0xBA3D194057C79A7B | Since: 877 | API-Set: unknown
 */
export function setParticleFxFootOverrideName() {
    Citizen.invokeNative('0xBA3D194057C79A7B', undefined);
}
/**
 * Used only once in the scripts (taxi_clowncar)
 *
 * Hash: 0x8CDE909A0370BB3A | Since: 323 | API-Set: unknown
 */
export function setParticleFxForceVehicleInterior(toggle) {
    Citizen.invokeNative('0x8CDE909A0370BB3A', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x726845132380142E | Since: 323 | API-Set: unknown
 */
export function setParticleFxLoopedAlpha(ptfxHandle, alpha) {
    SetParticleFxLoopedAlpha(ptfxHandle, alpha);
}
/**
 * only works on some fx's
 *
 * p4 = 0
 *
 * Hash: 0x7F8F65877F88783B | Since: 323 | API-Set: unknown
 */
export function setParticleFxLoopedColour(ptfxHandle, r, g, b) {
    SetParticleFxLoopedColour(ptfxHandle, r, g, b, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5F0C4B5B1C393BE2 | Since: 323 | API-Set: unknown
 */
export function setParticleFxLoopedEvolution(ptfxHandle, propertyName, amount, noNetwork) {
    SetParticleFxLoopedEvolution(ptfxHandle, propertyName, amount, noNetwork);
}
/**
 * No comment provided
 *
 * Hash: 0xDCB194B85EF7B541 | Since: 323 | API-Set: unknown
 */
export function setParticleFxLoopedFarClipDist(ptfxHandle, range) {
    SetParticleFxLoopedFarClipDist(ptfxHandle, range);
}
/**
 * No comment provided
 *
 * Hash: 0xF7DDEBEC43483C43 | Since: 323 | API-Set: unknown
 */
export function setParticleFxLoopedOffsets(ptfxHandle, pos, rot) {
    SetParticleFxLoopedOffsets(ptfxHandle, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z);
}
/**
 * No comment provided
 *
 * Hash: 0xB44250AAA456492D | Since: 323 | API-Set: unknown
 */
export function setParticleFxLoopedScale(ptfxHandle, scale) {
    SetParticleFxLoopedScale(ptfxHandle, scale);
}
/**
 * Usage example for C#:
 *
 * Function.Call(Hash.SET_PARTICLE_FX_NON_LOOPED_ALPHA, new InputArgument[] { 0.1f });
 *
 * Note: the argument alpha ranges from 0.0f-1.0f !
 *
 * Hash: 0x77168D722C58B2FC | Since: 323 | API-Set: unknown
 */
export function setParticleFxNonLoopedAlpha(alpha) {
    SetParticleFxNonLoopedAlpha(alpha);
}
/**
 * only works on some fx's, not networked
 *
 * Hash: 0x26143A59EF48B262 | Since: 323 | API-Set: unknown
 */
export function setParticleFxNonLoopedColour(r, g, b) {
    SetParticleFxNonLoopedColour(r, g, b);
}
/**
 * No comment provided
 *
 * Hash: 0x1E2E01C00837D26E | Since: 2699 | API-Set: unknown
 */
export function setParticleFxNonLoopedEmitterSize(scale) {
    SetParticleFxNonLoopedEmitterScale(0, 0, scale);
}
/**
 * No comment provided
 *
 * Hash: 0xB7EF5850C39FABCA | Since: 2802 | API-Set: unknown
 */
export function setParticleFxNonLoopedScale(scale) {
    Citizen.invokeNative('0xB7EF5850C39FABCA', scale);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0xEA1E2D93F6F75ED9 | Since: 323 | API-Set: unknown
 */
export function setParticleFxOverride(oldAsset, newAsset) {
    SetParticleFxOverride(oldAsset, newAsset);
}
/**
 * No comment provided
 *
 * Hash: 0x96EF97DAEB89BEF5 | Since: 323 | API-Set: unknown
 */
export function setParticleFxShootoutBoat() {
    SetParticleFxShootoutBoat(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2B40A97646381508 | Since: 1011 | API-Set: unknown
 */
export function setParticleFxSlipstreamLodrangeScale(scale) {
    Citizen.invokeNative('0x2B40A97646381508', scale);
}
/**
 * No comment provided
 *
 * Hash: 0xBDEB86F4D5809204 | Since: 323 | API-Set: unknown
 */
export function setPlayerTcmodifierTransition(value) {
    SetPlayerTcmodifierTransition(value);
}
/**
 * No comment provided
 *
 * Hash: 0xC6730E0D14E50703 | Since: 2545 | API-Set: unknown
 */
export function setPtfxForceVehicleInteriorFlag() {
    Citizen.invokeNative('0xC6730E0D14E50703', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1D132D614DD86811 | Since: 323 | API-Set: unknown
 */
export function setScaleformMovieAsNoLongerNeeded(scaleformHandle) {
    SetScaleformMovieAsNoLongerNeeded(scaleformHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x32F34FF7F617643B | Since: 573 | API-Set: unknown
 */
export function setScaleformMovieToUseLargeRt(scaleformHandle, toggle) {
    SetScaleformMovieToUseLargeRt(scaleformHandle, toggle);
}
/**
 * This native is used in some casino scripts to fit the scaleform in the rendertarget.
 *
 * Hash: 0xE6A9F00D4240B519 | Since: 877 | API-Set: unknown
 */
export function setScaleformMovieToUseSuperLargeRt(scaleformHandle, toggle) {
    SetScaleformMovieToUseSuperLargeRt(scaleformHandle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6D8EB211944DCE08 | Since: 323 | API-Set: unknown
 */
export function setScaleformMovieToUseSystemTime(scaleform, toggle) {
    SetScaleformMovieToUseSystemTime(scaleform, toggle);
}
/**
 * horizontalAlign: The horizontal alignment. This can be 67 ('C'), 76 ('L'), or 82 ('R').
 * verticalAlign: The vertical alignment. This can be 67 ('C'), 66 ('B'), or 84 ('T').
 *
 * This function anchors script draws to a side of the safe zone. This needs to be called to make the interface independent of the player's safe zone configuration.
 *
 * These values are equivalent to alignX and alignY in common:/data/ui/frontend.xml, which can be used as a baseline for default alignment.
 *
 * Using any other value (including 0) will result in the safe zone not being taken into account for this draw. The canonical value for this is 'I' (73).
 *
 * For example, you can use SET_SCRIPT_GFX_ALIGN(0, 84) to only scale on the Y axis (to the top), but not change the X axis.
 *
 * To reset the value, use RESET_SCRIPT_GFX_ALIGN.
 *
 * Hash: 0xB8A850F20A067EB6 | Since: 323 | API-Set: unknown
 */
export function setScriptGfxAlign(horizontalAlign, verticalAlign) {
    SetScriptGfxAlign(horizontalAlign, verticalAlign);
}
/**
 * Sets the draw offset/calculated size for SET_SCRIPT_GFX_ALIGN. If using any alignment other than left/top, the game expects the width/height to be configured using this native in order to get a proper starting position for the draw command.
 *
 * Hash: 0xF5A2C681787E579D | Since: 323 | API-Set: unknown
 */
export function setScriptGfxAlignParams(x, y, w, h) {
    SetScriptGfxAlignParams(x, y, w, h);
}
/**
 * Sets a flag defining whether or not script draw commands should continue being drawn behind the pause menu. This is usually used for TV channels and other draw commands that are used with a world render target.
 *
 * Hash: 0xC6372ECD45D73BCD | Since: 323 | API-Set: unknown
 */
export function setScriptGfxDrawBehindPausemenu(toggle) {
    SetScriptGfxDrawBehindPausemenu(toggle);
}
/**
 * Sets the draw order for script draw commands.
 *
 * Examples from decompiled scripts:
 * `GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(7);`
 * `GRAPHICS::DRAW_RECT(0.5, 0.5, 3.0, 3.0, v_4, v_5, v_6, a_0._f172, 0);`
 *
 * `GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(1);`
 * `GRAPHICS::DRAW_RECT(0.5, 0.5, 1.5, 1.5, 0, 0, 0, 255, 0);`
 *
 * Hash: 0x61BB1D9B3A95D802 | Since: 323 | API-Set: unknown
 */
export function setScriptGfxDrawOrder(drawOrder) {
    SetScriptGfxDrawOrder(drawOrder);
}
/**
 * Toggles Heatvision on/off.
 *
 * Hash: 0x7E08924259E08CE0 | Since: 323 | API-Set: unknown
 */
export function setSeethrough(toggle) {
    SetSeethrough(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5DBF05DB5926D089 | Since: 1011 | API-Set: unknown
 */
export function setSkidmarkRangeScale(scale) {
    Citizen.invokeNative('0x5DBF05DB5926D089', scale);
}
/**
 * No comment provided
 *
 * Hash: 0xBE2CACCF5A8AA805 | Since: 323 | API-Set: unknown
 */
export function setStreamedTextureDictAsNoLongerNeeded(textureDict) {
    SetStreamedTextureDictAsNoLongerNeeded(textureDict);
}
/**
 * No comment provided
 *
 * Hash: 0x1BBC135A4D25EDDE | Since: 323 | API-Set: unknown
 */
export function setTakenPhotoIsMugshot(toggle) {
    Citizen.invokeNative('0x1BBC135A4D25EDDE', toggle);
}
/**
 * Loads the specified timecycle modifier. Modifiers are defined separately in another file (e.g. "timecycle_mods_1.xml")
 *
 * Parameters:
 * modifierName - The modifier to load (e.g. "V_FIB_IT3", "scanline_cam", etc.)
 *
 * Full list of timecycle modifiers by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/timecycleModifiers.json
 *
 * Hash: 0x2C933ABF17A1DF41 | Since: 323 | API-Set: unknown
 */
export function setTimecycleModifier(modifierName) {
    SetTimecycleModifier(modifierName);
}
/**
 * No comment provided
 *
 * Hash: 0x82E7FFCD5B2326B3 | Since: 323 | API-Set: unknown
 */
export function setTimecycleModifierStrength(strength) {
    SetTimecycleModifierStrength(strength);
}
/**
 * No comment provided
 *
 * Hash: 0x164ECBB3CF750CB0 | Since: 323 | API-Set: unknown
 */
export function setTrackedPointInfo(point, pos, radius) {
    SetTrackedPointInfo(point, pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x1CBA05AE7BD7EE05 | Since: 323 | API-Set: unknown
 */
export function setTransitionOutOfTimecycleModifier(strength) {
    Citizen.invokeNative('0x1CBA05AE7BD7EE05', strength);
}
/**
 * Full list of timecycle modifiers by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/timecycleModifiers.json
 *
 * Hash: 0x3BCF567485E1971C | Since: 323 | API-Set: unknown
 */
export function setTransitionTimecycleModifier(modifierName, transition) {
    SetTransitionTimecycleModifier(modifierName, transition);
}
/**
 * Probably changes tvs from being a 3d audio to being "global" audio
 *
 * Hash: 0x113D2C5DC57E1774 | Since: 323 | API-Set: unknown
 */
export function setTvAudioFrontend(toggle) {
    SetTvAudioFrontend(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBAABBB23EB6E484E | Since: 323 | API-Set: unknown
 */
export function setTvChannel(channel) {
    SetTvChannel(channel);
}
/**
 * Loads specified video sequence into the TV Channel
 * TV_Channel ranges from 0-2
 * VideoSequence can be any of the following:
 * "PL_STD_CNT" CNT Standard Channel
 * "PL_STD_WZL" Weazel Standard Channel
 * "PL_LO_CNT"
 * "PL_LO_WZL"
 * "PL_SP_WORKOUT"
 * "PL_SP_INV" - Jay Norris Assassination Mission Fail
 * "PL_SP_INV_EXP" - Jay Norris Assassination Mission Success
 * "PL_LO_RS" - Righteous Slaughter Ad
 * "PL_LO_RS_CUTSCENE" - Righteous Slaughter Cut-scene
 * "PL_SP_PLSH1_INTRO"
 * "PL_LES1_FAME_OR_SHAME"
 * "PL_STD_WZL_FOS_EP2"
 * "PL_MP_WEAZEL" - Weazel Logo on loop
 * "PL_MP_CCTV" - Generic CCTV loop
 *
 * Restart:
 * 0=video sequence continues as normal
 * 1=sequence restarts from beginning every time that channel is selected
 *
 *
 * The above playlists work as intended, and are commonly used, but there are many more playlists, as seen in `tvplaylists.xml`. A pastebin below outlines all playlists, they will be surronded by the name tag I.E. (<Name>PL_STD_CNT</Name> = PL_STD_CNT).
 * https://pastebin.com/zUzGB6h7
 *
 * Hash: 0xF7B38B8305F1FE8B | Since: 323 | API-Set: unknown
 */
export function setTvChannelPlaylist(tvChannel, playlistName, restart) {
    SetTvChannelPlaylist(tvChannel, playlistName, restart);
}
/**
 * No comment provided
 *
 * Hash: 0x2201C576FACAEBE8 | Since: 323 | API-Set: unknown
 */
export function setTvChannelPlaylistAtHour(tvChannel, playlistName, hour) {
    SetTvChannelPlaylistAtHour(tvChannel, playlistName, hour);
}
/**
 * No comment provided
 *
 * Hash: 0xD1C55B110E4DF534 | Since: 323 | API-Set: unknown
 */
export function setTvPlayerWatchingThisFrame() {
    Citizen.invokeNative('0xD1C55B110E4DF534', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2982BF73F66E9DDC | Since: 323 | API-Set: unknown
 */
export function setTvVolume(volume) {
    SetTvVolume(volume);
}
/**
 * No comment provided
 *
 * Hash: 0xF78B803082D4386F | Since: 323 | API-Set: unknown
 */
export function setWeatherPtfxOverrideCurrLevel() {
    Citizen.invokeNative('0xF78B803082D4386F', 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA46B73FAA3460AE1 | Since: 323 | API-Set: unknown
 */
export function setWeatherPtfxUseOverrideSettings() {
    Citizen.invokeNative('0xA46B73FAA3460AE1', false);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0x6F60E89A7B64EE1D | Since: 323 | API-Set: unknown
 */
export function startNetworkedParticleFxLoopedOnEntity(effectName, entity, xOffset, yOffset, zOffset, rot, scale, xAxis, yAxis, zAxis, r, g, b, a) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartNetworkedParticleFxLoopedOnEntity(effectName, _entity, xOffset, yOffset, zOffset, rot.x, rot.y, rot.z, scale, xAxis, yAxis, zAxis, r, g, b, a);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0xDDE23F30CC5A0F03 | Since: 323 | API-Set: unknown
 */
export function startNetworkedParticleFxLoopedOnEntityBone(effectName, entity, xOffset, yOffset, zOffset, rot, boneIndex, scale, xAxis, yAxis, zAxis, r, g, b, a) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartNetworkedParticleFxLoopedOnEntityBone(effectName, _entity, xOffset, yOffset, zOffset, rot.x, rot.y, rot.z, boneIndex, scale, xAxis, yAxis, zAxis, r, g, b, a);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0xF56B8137DF10135D | Since: 323 | API-Set: unknown
 */
export function startNetworkedParticleFxNonLoopedAtCoord(effectName, pos, rot, scale, xAxis, yAxis, zAxis) {
    return StartNetworkedParticleFxNonLoopedAtCoord(effectName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale, xAxis, yAxis, zAxis, false);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0xC95EB1DB6E92113D | Since: 323 | API-Set: unknown
 */
export function startNetworkedParticleFxNonLoopedOnEntity(effectName, entity, offsetX, offsetY, offsetZ, rot, scale, axisX, axisY, axisZ) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartNetworkedParticleFxNonLoopedOnEntity(effectName, _entity, offsetX, offsetY, offsetZ, rot.x, rot.y, rot.z, scale, axisX, axisY, axisZ);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0xA41B6A43642AC2CF | Since: 323 | API-Set: unknown
 */
export function startNetworkedParticleFxNonLoopedOnPedBone(effectName, ped, offsetX, offsetY, offsetZ, rot, boneIndex, scale, axisX, axisY, axisZ) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return StartNetworkedParticleFxNonLoopedOnPedBone(effectName, _ped, offsetX, offsetY, offsetZ, rot.x, rot.y, rot.z, boneIndex, scale, axisX, axisY, axisZ);
}
/**
 * `GRAPHICS::START_PARTICLE_FX_LOOPED_AT_COORD("scr_fbi_falling_debris", 93.7743f, -749.4572f, 70.86904f, 0f, 0f, 0f, 0x3F800000, 0, 0, 0, 0)`
 *
 *
 * p11 seems to be always 0
 *
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0xE184F4F0DC5910E7 | Since: 323 | API-Set: unknown
 */
export function startParticleFxLoopedAtCoord(effectName, pos, rot, scale, xAxis, yAxis, zAxis) {
    return StartParticleFxLoopedAtCoord(effectName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale, xAxis, yAxis, zAxis, false);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0x1AE42C1660FD6517 | Since: 323 | API-Set: unknown
 */
export function startParticleFxLoopedOnEntity(effectName, entity, xOffset, yOffset, zOffset, rot, scale, xAxis, yAxis, zAxis) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartParticleFxLoopedOnEntity(effectName, _entity, xOffset, yOffset, zOffset, rot.x, rot.y, rot.z, scale, xAxis, yAxis, zAxis);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0xC6EB449E33977F0B | Since: 323 | API-Set: unknown
 */
export function startParticleFxLoopedOnEntityBone(effectName, entity, xOffset, yOffset, zOffset, rot, boneIndex, scale, xAxis, yAxis, zAxis) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartParticleFxLoopedOnEntityBone(effectName, _entity, xOffset, yOffset, zOffset, rot.x, rot.y, rot.z, boneIndex, scale, xAxis, yAxis, zAxis);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0xF28DA9F38CD1787C | Since: 323 | API-Set: unknown
 */
export function startParticleFxLoopedOnPedBone(effectName, ped, xOffset, yOffset, zOffset, rot, boneIndex, scale, xAxis, yAxis, zAxis) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return StartParticleFxLoopedOnPedBone(effectName, _ped, xOffset, yOffset, zOffset, rot.x, rot.y, rot.z, boneIndex, scale, xAxis, yAxis, zAxis);
}
/**
 * `GRAPHICS::START_PARTICLE_FX_NON_LOOPED_AT_COORD("scr_paleto_roof_impact", -140.8576f, 6420.789f, 41.1391f, 0f, 0f, 267.3957f, 0x3F800000, 0, 0, 0);`
 *
 * Axis - Invert Axis Flags
 *
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 *
 * -------------------------------------------------------------------
 * C#
 *
 * Function.Call<int>(Hash.START_PARTICLE_FX_NON_LOOPED_AT_COORD, = you are calling this function.
 *
 * char *effectname = This is an in-game effect name, for e.g. "scr_fbi4_trucks_crash" is used to give the effects when truck crashes etc
 *
 * float x, y, z pos = this one is Simple, you just have to declare, where do you want this effect to take place at, so declare the ordinates
 *
 * float xrot, yrot, zrot = Again simple? just mention the value in case if you want the effect to rotate.
 *
 * float scale = is declare the scale of the effect, this may vary as per the effects for e.g 1.0f
 *
 * bool xaxis, yaxis, zaxis = To bool the axis values.
 *
 * example:
 * Function.Call<int>(Hash.START_PARTICLE_FX_NON_LOOPED_AT_COORD, "scr_fbi4_trucks_crash", GTA.Game.Player.Character.Position.X, GTA.Game.Player.Character.Position.Y, GTA.Game.Player.Character.Position.Z + 4f, 0, 0, 0, 5.5f, 0, 0, 0);
 *
 * Hash: 0x25129531F77B9ED3 | Since: 323 | API-Set: unknown
 */
export function startParticleFxNonLoopedAtCoord(effectName, pos, rot, scale, xAxis, yAxis, zAxis) {
    return StartParticleFxNonLoopedAtCoord(effectName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale, xAxis, yAxis, zAxis);
}
/**
 * Starts a particle effect on an entity for example your player.
 *
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Example:
 * C#:
 * Function.Call(Hash.REQUEST_NAMED_PTFX_ASSET, "scr_rcbarry2");                     Function.Call(Hash.USE_PARTICLE_FX_ASSET, "scr_rcbarry2");                             Function.Call(Hash.START_PARTICLE_FX_NON_LOOPED_ON_ENTITY, "scr_clown_appears", Game.Player.Character, 0.0, 0.0, -0.5, 0.0, 0.0, 0.0, 1.0, false, false, false);
 *
 * `Internally this calls the same function as GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE`
 * however it uses -1 for the specified bone index, so it should be possible to start a non looped fx on an entity bone using that native
 *
 * -can confirm START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE does NOT work on vehicle bones.
 *
 * Hash: 0x0D53A3B8DA0809D2 | Since: 323 | API-Set: unknown
 */
export function startParticleFxNonLoopedOnEntity(effectName, entity, offsetX, offsetY, offsetZ, rot, scale, axisX, axisY, axisZ) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartParticleFxNonLoopedOnEntity(effectName, _entity, offsetX, offsetY, offsetZ, rot.x, rot.y, rot.z, scale, axisX, axisY, axisZ);
}
/**
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0x02B1F2A72E0F5325 | Since: 2189 | API-Set: unknown
 */
export function startParticleFxNonLoopedOnEntityBone(effectName, entity, offsetX, offsetY, offsetZ, rot, boneIndex, scale, axisX, axisY, axisZ) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartNetworkedParticleFxNonLoopedOnEntityBone(effectName, _entity, offsetX, offsetY, offsetZ, rot.x, rot.y, rot.z, boneIndex, scale, axisX, axisY, axisZ);
}
/**
 * `GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE("scr_sh_bong_smoke", PLAYER::PLAYER_PED_ID(), -0.025f, 0.13f, 0f, 0f, 0f, 0f, 31086, 0x3F800000, 0, 0, 0);`
 *
 * Axis - Invert Axis Flags
 *
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0x0E7E72961BA18619 | Since: 323 | API-Set: unknown
 */
export function startParticleFxNonLoopedOnPedBone(effectName, ped, offsetX, offsetY, offsetZ, rot, boneIndex, scale, axisX, axisY, axisZ) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return StartParticleFxNonLoopedOnPedBone(effectName, _ped, offsetX, offsetY, offsetZ, rot.x, rot.y, rot.z, boneIndex, scale, axisX, axisY, axisZ);
}
/**
 * No comment provided
 *
 * Hash: 0x99AC7F0D8B9C893D | Since: 323 | API-Set: unknown
 */
export function startPetrolTrailDecals() {
    StartPetrolTrailDecals(0);
}
/**
 * No comment provided
 *
 * Hash: 0x63606A61DE68898A | Since: 1290 | API-Set: unknown
 */
export function stopBinkMovie(binkMovie) {
    StopBinkMovie(binkMovie);
}
/**
 * p1 is always 0 in the native scripts
 *
 * Hash: 0x8F75998877616996 | Since: 323 | API-Set: unknown
 */
export function stopParticleFxLooped(ptfxHandle) {
    StopParticleFxLooped(ptfxHandle, false);
}
/**
 * This native enables/disables the gold putting grid display (https://i.imgur.com/TC6cku6.png).
 * This requires these two natives to be called as well to configure the grid: `TERRAINGRID_SET_PARAMS` and `TERRAINGRID_SET_COLOURS`.
 *
 * Hash: 0xA356990E161C9E65 | Since: 323 | API-Set: unknown
 */
export function terraingridActivate(toggle) {
    TerraingridActivate(toggle);
}
/**
 * This native is used along with these two natives: `TERRAINGRID_ACTIVATE` and `TERRAINGRID_SET_PARAMS`.
 * This native sets the colors for the golf putting grid. the 'min...' values are for the lower areas that the grid covers, the 'max...' values are for the higher areas that the grid covers, all remaining values are for the 'normal' ground height.
 * All those natives combined they will output something like this: https://i.imgur.com/TC6cku6.png
 *
 * Hash: 0x5CE62918F8D703C7 | Since: 323 | API-Set: unknown
 */
export function terraingridSetColours(lowR, lowG, lowB, lowAlpha, r, g, b, alpha, highR, highG, highB, highAlpha) {
    TerraingridSetColours(lowR, lowG, lowB, lowAlpha, r, g, b, alpha, highR, highG, highB, highAlpha);
}
/**
 * This native is used along with these two natives: `TERRAINGRID_ACTIVATE` and `TERRAINGRID_SET_COLOURS`.
 * This native configures the location, size, rotation, normal height, and the difference ratio between min, normal and max.
 *
 * All those natives combined they will output something like this: https://i.imgur.com/TC6cku6.png
 *
 * This native renders a box at the given position, with a special shader that renders a grid on world geometry behind it. This box does not have backface culling.
 * The forward args here are a direction vector, something similar to what's returned by GET_ENTITY_FORWARD_VECTOR.
 * normalHeight and heightDiff are used for positioning the color gradient of the grid, colors specified via TERRAINGRID_SET_COLOURS.
 *
 * Example with box superimposed on the image to demonstrate: https://i.imgur.com/wdqskxd.jpg
 *
 * Hash: 0x1C4FC5752BCD8E48 | Since: 323 | API-Set: unknown
 */
export function terraingridSetParams(pos, forwardX, forwardY, forwardZ, sizeX, sizeY, sizeZ, gridScale, glowIntensity, normalHeight, heightDiff) {
    TerraingridSetParams(pos.x, pos.y, pos.z, forwardX, forwardY, forwardZ, sizeX, sizeY, sizeZ, gridScale, glowIntensity, normalHeight, heightDiff);
}
/**
 * No comment provided
 *
 * Hash: 0xDFC252D8A3E15AB7 | Since: 323 | API-Set: unknown
 */
export function togglePausedRenderphases(toggle) {
    TogglePausedRenderphases(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE63D7C6EECECB66B | Since: 323 | API-Set: unknown
 */
export function togglePlayerDamageOverlay(toggle) {
    Citizen.invokeNative('0xE63D7C6EECECB66B', toggle);
}
/**
 * time in ms to transition to fully blurred screen
 *
 * Hash: 0xA328A24AAA6B7FDC | Since: 323 | API-Set: unknown
 */
export function triggerScreenblurFadeIn(transitionTime) {
    return TriggerScreenblurFadeIn(transitionTime);
}
/**
 * time in ms to transition from fully blurred to normal
 *
 * Hash: 0xEFACC8AEF94430D5 | Since: 323 | API-Set: unknown
 */
export function triggerScreenblurFadeOut(transitionTime) {
    return TriggerScreenblurFadeOut(transitionTime);
}
/**
 * It's called after UI3DSCENE_IS_AVAILABLE and UI3DSCENE_PUSH_PRESET
 *
 * presetName was always "CELEBRATION_WINNER"
 * All presets can be found in common\data\ui\uiscenes.meta
 *
 * Hash: 0x98C4FE6EC34154CA | Since: 323 | API-Set: unknown
 */
export function ui3dsceneAssignPedToSlot(presetName, ped, slot, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return DrawShowroom(presetName, _ped, slot, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x7A42B2E236E71415 | Since: 323 | API-Set: unknown
 */
export function ui3dsceneClearPatchedData() {
    Citizen.invokeNative('0x7A42B2E236E71415');
}
/**
 * No comment provided
 *
 * Hash: 0xD3A10FC7FD8D98CD | Since: 323 | API-Set: unknown
 */
export function ui3dsceneIsAvailable() {
    return Ui3dsceneIsAvailable();
}
/**
 * No comment provided
 *
 * Hash: 0x108BE26959A9D9BB | Since: 323 | API-Set: unknown
 */
export function ui3dsceneMakePushedPresetPersistent(toggle) {
    Citizen.invokeNative('0x108BE26959A9D9BB', toggle);
}
/**
 * All presets can be found in common\data\ui\uiscenes.meta
 *
 * Hash: 0xF1CEA8A4198D8E9A | Since: 323 | API-Set: unknown
 */
export function ui3dscenePushPreset(presetName) {
    return Ui3dscenePushPreset(presetName);
}
/**
 * No comment provided
 *
 * Hash: 0xB7ED70C49521A61D | Since: 323 | API-Set: unknown
 */
export function unpatchDecalDiffuseMap(decalType) {
    UnpatchDecalDiffuseMap(decalType);
}
/**
 * No comment provided
 *
 * Hash: 0xDEADC0DEDEADC0DE | Since: 323 | API-Set: unknown
 */
export function updateLightsOnEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    UpdateLightsOnEntity(_entity);
}
/**
 * From the b678d decompiled scripts:
 *
 * `GRAPHICS::USE_PARTICLE_FX_ASSET("FM_Mission_Controler");`
 * `GRAPHICS::USE_PARTICLE_FX_ASSET("scr_apartment_mp");`
 * `GRAPHICS::USE_PARTICLE_FX_ASSET("scr_indep_fireworks");`
 * `GRAPHICS::USE_PARTICLE_FX_ASSET("scr_mp_cig_plane");`
 * `GRAPHICS::USE_PARTICLE_FX_ASSET("scr_mp_creator");`
 * `GRAPHICS::USE_PARTICLE_FX_ASSET("scr_ornate_heist");`
 * `GRAPHICS::USE_PARTICLE_FX_ASSET("scr_prison_break_heist_station");`
 *
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 *
 * Hash: 0x6C38AF3693A69A91 | Since: 323 | API-Set: unknown
 */
export function useParticleFxAsset(name) {
    UseParticleFxAsset(name);
}
/**
 * Forces footstep tracks on all surfaces.
 *
 * Hash: 0xAEEDAD1420C65CC0 | Since: 323 | API-Set: unknown
 */
export function useSnowFootVfxWhenUnsheltered(toggle) {
    SetForcePedFootstepsTracks(toggle);
}
/**
 * Forces vehicle trails on all surfaces.
 *
 * Hash: 0x4CC7F0FEA5283FE0 | Since: 323 | API-Set: unknown
 */
export function useSnowWheelVfxWhenUnsheltered(toggle) {
    SetForceVehicleTrails(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5B712761429DBC14 | Since: 323 | API-Set: unknown
 */
export function washDecalsFromVehicle(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    WashDecalsFromVehicle(_vehicle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9C30613D50A6ADEF | Since: 323 | API-Set: unknown
 */
export function washDecalsInRange(pos, range) {
    WashDecalsInRange(pos.x, pos.y, pos.z, range, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xCA465D9CC0D231BA | Since: 1011 | API-Set: unknown
 */
export function waterReflectionSetScriptObjectVisibility() {
    Citizen.invokeNative('0xCA465D9CC0D231BA', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA342A3763B3AFB6C | Since: 3095 | API-Set: unknown
 */
export function forceAllowSnowFootVfxOnIce(toggle) {
    Citizen.invokeNative('0xA342A3763B3AFB6C', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6E9EF3A33C8899F8 | Since: 3095 | API-Set: unknown
 */
export function forceGroundSnowPass(toggle) {
    Citizen.invokeNative('0x6E9EF3A33C8899F8', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x9743BCCF7CD6E1F6 | Since: 3407 | API-Set: unknown
 */
export function hasScaleformMovieNamedLoaded(scaleformName) {
    return Citizen.invokeNative('0x9743BCCF7CD6E1F6', scaleformName);
}
/**
 * No comment provided
 *
 * Hash: 0x4100BF0346A8D2C3 | Since: 3095 | API-Set: unknown
 */
export function setParticleFxLoopedCameraBias(ptfxHandle) {
    Citizen.invokeNative('0x4100BF0346A8D2C3', ptfxHandle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2FDFB1B04C76E9C3 | Since: 3407 | API-Set: unknown
 */
export function setScaleformMovieNamedAsNoLongerNeeded(scaleformHandle, scaleformName) {
    Citizen.invokeNative('0x2FDFB1B04C76E9C3', scaleformHandle, scaleformName);
}
/**
 * Does not actually return anything.
 *
 * Hash: 0xEE831F15A8D0D94A | Since: 3095 | API-Set: unknown
 */
export function setTvChannelPlaylistDirty(tvChannel) {
    return Citizen.invokeNative('0xEE831F15A8D0D94A', tvChannel, false);
}
/**
 * Returns ptfxHandle
 * effectName: scr_sv_drag_burnout
 *
 * Hash: 0xDF269BE2909E181A | Since: 3095 | API-Set: unknown
 */
export function startVehicleParticleFxLooped(vehicle, effectName, frontBack, leftRight, localOnly) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0xDF269BE2909E181A', _vehicle, effectName, frontBack, leftRight, localOnly);
}
