import { Vector3, IEntity, IPed, IVehicle, IObject } from '@risinglife/fivem-shared';
/**
 * Documented here:
 * gtaforums.com/topic/885669-precisely-define-object-physics/
 * gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/
 *
 * forceFlags:
 * First bit (lowest): Strong force flag, factor 100
 * Second bit: Unkown flag
 * Third bit: Momentum flag=1 (vector (x,y,z) is a momentum, more research needed)
 * If higher bits are unequal 0 the function doesn't applay any forces at all.
 * (As integer possible values are 0-7)
 *
 * 0: weak force
 * 1: strong force
 * 2: same as 0 (2nd bit?)
 * 3: same as 1
 * 4: weak momentum
 * 5: strong momentum
 * 6: same as 4
 * 7: same as 5
 *
 * isLocal: vector defined in local (body-fixed) coordinate frame
 * isMassRel: if true the force gets multiplied with the objects mass (this is why it was known as highForce) and different objects will have the same acceleration.
 *
 * p8 !!! Whenever I set this !=0, my script stopped.
 *
 * Hash: 0xC5F68BE9613E2D18 | Since: 323
 */
export function applyForceTo(entity, forceFlags, pos, offX, offY, offZ, boneIndex, isDirectionRel, ignoreUpVec, isForceRel) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ApplyForceToEntity(_entity, forceFlags, pos.x, pos.y, pos.z, offX, offY, offZ, boneIndex, isDirectionRel, ignoreUpVec, isForceRel, false, false);
}
/**
 * Applies a force to the specified entity.
 *
 * **List of force types (p1)**:
 * public enum ForceType
 * {
 * MinForce = 0,
 * MaxForceRot = 1,
 * MinForce2 = 2,
 * MaxForceRot2 = 3,
 * ForceNoRot = 4,
 * ForceRotPlusForce = 5
 * }
 * Research/documentation on the gtaforums can be found here https://gtaforums.com/topic/885669-precisely-define-object-physics/) and here https://gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/.
 *
 * p6/relative - makes the xyz force not relative to world coords, but to something else
 * p7/highForce - setting false will make the force really low
 *
 * Hash: 0x18FF00FC7EFF559E | Since: 323
 */
export function applyForceToCenterOfMass(entity, forceType, pos, isDirectionRel, isForceRel) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ApplyForceToEntityCenterOfMass(_entity, forceType, pos.x, pos.y, pos.z, false, isDirectionRel, isForceRel, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5C48B75732C8456C | Since: 791
 */
export function attachBoneToEntityBone(entity1, entity2, boneIndex1, boneIndex2) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    AttachEntityBoneToEntityBone(_entity1, _entity2, boneIndex1, boneIndex2, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFD1695C5D3B05439 | Since: 791
 */
export function attachBoneToEntityBoneYForward(entity1, entity2, boneIndex1, boneIndex2) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    AttachEntityBoneToEntityBonePhysically(_entity1, _entity2, boneIndex1, boneIndex2, false, false);
}
/**
 * Attaches entity1 to bone (boneIndex) of entity2.
 *
 * boneIndex - this is different to boneID, use GET_PED_BONE_INDEX to get the index from the ID. use the index for attaching to specific bones. entity1 will be attached to entity2's centre if bone index given doesn't correspond to bone indexes for that entity type.
 *
 * useSoftPinning - if set to false attached entity will not detach when fixed
 * collision - controls collision between the two entities (FALSE disables collision).
 * isPed - pitch doesnt work when false and roll will only work on negative numbers (only peds)
 * vertexIndex - position of vertex
 * fixedRot - if false it ignores entity vector
 *
 *
 * Hash: 0x6B9BBD38AB0796DF | Since: 323
 */
export function attachToEntity(entity1, entity2, boneIndex, pos, rot, useSoftPinning, collision, isPed, vertexIndex, fixedRot) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    AttachEntityToEntity(_entity1, _entity2, boneIndex, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, false, useSoftPinning, collision, isPed, vertexIndex, fixedRot, undefined);
}
/**
 * breakForce is the amount of force required to break the bond.
 * p14 - is always 1 in scripts
 * p15 - is 1 or 0 in scripts - unknoun what it does
 * p16 - controls collision between the two entities (FALSE disables collision).
 * p17 - do not teleport entity to be attached to the position of the bone Index of the target entity (if 1, entity will not be teleported to target bone)
 * p18 - is always 2 in scripts.
 *
 *
 *
 * Hash: 0xC3675780C92F90F9 | Since: 323
 */
export function attachToEntityPhysically(entity1, entity2, boneIndex1, boneIndex2, xPos1, yPos1, zPos1, xPos2, yPos2, zPos2, rot, breakForce, fixedRot, collision) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    AttachEntityToEntityPhysically(_entity1, _entity2, boneIndex1, boneIndex2, xPos1, yPos1, zPos1, xPos2, yPos2, zPos2, rot.x, rot.y, rot.z, breakForce, fixedRot, false, collision, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x168A09D1B25B0BA4 | Since: 2944
 */
export function attachToEntityPhysicallyOverrideInverseMass(firstEntityIndex, secondEntityIndex, firstEntityBoneIndex, secondEntityBoneIndex, secondEntityOffsetX, secondEntityOffsetY, secondEntityOffsetZ, firstEntityOffsetX, firstEntityOffsetY, firstEntityOffsetZ, vecRotationX, vecRotationY, vecRotationZ, physicalStrength, constrainRotation, doInitialWarp, collideWithEntity, addInitialSeperation, rotOrder, invMassScaleA, invMassScaleB) {
    const _firstEntityIndex = firstEntityIndex instanceof IEntity ? firstEntityIndex.handle() : firstEntityIndex;
    const _secondEntityIndex = secondEntityIndex instanceof IEntity ? secondEntityIndex.handle() : secondEntityIndex;
    Citizen.invokeNative('0x168A09D1B25B0BA4', _firstEntityIndex, _secondEntityIndex, firstEntityBoneIndex, secondEntityBoneIndex, secondEntityOffsetX, secondEntityOffsetY, secondEntityOffsetZ, firstEntityOffsetX, firstEntityOffsetY, firstEntityOffsetZ, vecRotationX, vecRotationY, vecRotationZ, physicalStrength, constrainRotation, doInitialWarp, collideWithEntity, addInitialSeperation, rotOrder, invMassScaleA, invMassScaleB);
}
/**
 * No comment provided
 *
 * Hash: 0xA72CD9CA74A5ECBA | Since: 323
 */
export function clearLastDamageEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ClearEntityLastDamageEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x150E808B375A385A | Since: 323
 */
export function createForcedObject(pos, modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    CreateForcedObject(pos.x, pos.y, pos.z, undefined, modelHash, false);
}
/**
 * p5 = sets as true in scripts
 * Same as the comment for CREATE_MODEL_SWAP unless for some reason p5 affects it this only works with objects as well.
 *
 * Network players do not see changes done with this.
 *
 * Hash: 0x8A97BCA30A0CE478 | Since: 323
 */
export function createModelHide(pos, radius, modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    CreateModelHide(pos.x, pos.y, pos.z, radius, modelHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3A52AE588830BF7F | Since: 323
 */
export function createModelHideExcludingScriptObjects(pos, radius, modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    CreateModelHideExcludingScriptObjects(pos.x, pos.y, pos.z, radius, modelHash, false);
}
/**
 * Only works with objects!
 *
 * Hash: 0x92C47782FDA8B2A3 | Since: 323
 */
export function createModelSwap(pos, radius, originalModel, newModel) {
    if (typeof originalModel === 'string')
        originalModel = GetHashKey(originalModel);
    if (typeof newModel === 'string')
        newModel = GetHashKey(newModel);
    CreateModelSwap(pos.x, pos.y, pos.z, radius, originalModel, newModel, false);
}
/**
 * Deletes the specified entity, then sets the handle pointed to by the pointer to NULL.
 *
 * Hash: 0xAE3CBE5BF394C9C9 | Since: 323
 */
export function deleteEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    DeleteEntity(_entity);
}
/**
 * If `collision` is set to true, both entities won't collide with the other until the distance between them is above 4 meters.
 * Set `dynamic` to true to keep velocity after dettaching
 *
 * Hash: 0x961AC54BF0613F5D | Since: 323
 */
export function detach(entity, dynamic, collision) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    DetachEntity(_entity, dynamic, collision);
}
/**
 * No comment provided
 *
 * Hash: 0xDDE6DF5AE89981D2 | Since: 323
 */
export function doesBelongToThisScript(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityBelongToThisScript(_entity, false);
}
/**
 * Checks whether an entity exists in the game world.
 *
 * Hash: 0x7239B21A38F536BA | Since: 323
 */
export function doesExist(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityExist(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x2158E81A6AF65EA9 | Since: 2699
 */
export function doesHaveAnimDirector(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityHaveAnimDirector(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x060D6E96F8B8E48D | Since: 323
 */
export function doesHaveDrawable(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityHaveDrawable(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xDA95EA3317CC5064 | Since: 323
 */
export function doesHavePhysics(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityHavePhysics(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x764EB96874EFFDC1 | Since: 2699
 */
export function doesHaveSkeleton(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityHaveSkeletonData(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x6CE177D014502E8A | Since: 877
 */
export function enableBulletCollision(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    EnableEntityUnk(_entity);
}
/**
 * In the script "player_scene_t_bbfight.c4":
 * `"if (ENTITY::FIND_ANIM_EVENT_PHASE(&l_16E, &l_19F[v_4\/\*16\*\/], v_9, &v_A, &v_B))"`
 * -- &l_16E (p0) is requested as an anim dictionary earlier in the script.
 * -- &l_19F[v_4\/\*16\*\/] (p1) is used in other natives in the script as the "animation" param.
 * -- v_9 (p2) is instantiated as "victim_fall"; I'm guessing that's another anim
 * --v_A and v_B (p3 & p4) are both set as -1.0, but v_A is used immediately after this native for:
 * `"if (v_A < ENTITY::GET_ENTITY_ANIM_CURRENT_TIME(...))"`
 * Both v_A and v_B are seemingly used to contain both Vector3's and floats, so I can't say what either really is other than that they are both output parameters. p4 looks more like a *Vector3 though
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x07F1BE2BCCAA27A7 | Since: 323
 */
export function findAnimEventPhase(animDictionary, animName) {
    return FindAnimEventPhase(animDictionary, animName, undefined);
}
/**
 * Based on carmod_shop script decompile this takes a vehicle parameter. It is called when repair is done on initial enter.
 *
 * Hash: 0x40FDEDB72F8293B2 | Since: 323
 */
export function forceAiAndAnimationUpdate(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ForceEntityAiAndAnimationUpdate(_entity);
}
/**
 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using SET_ENTITY_COORDS.
 *
 * Hash: 0x428CA6DBD1094446 | Since: 323
 */
export function freezePosition(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    FreezeEntityPosition(_entity, toggle);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0xFEDDF04D62B8D790 | Since: 323
 */
export function getAnimDuration(animDict, animName) {
    return GetAnimDuration(animDict, animName);
}
/**
 * No comment provided
 *
 * Hash: 0xE465D4AB7CA6AE72 | Since: 323
 */
export function getCollisionNormalOfLastHitFor(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetCollisionNormalOfLastHitForEntity(_entity));
}
/**
 * No comment provided
 *
 * Hash: 0x5A47B3B5E63E94C6 | Since: 323
 */
export function getAlpha(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityAlpha(_entity);
}
/**
 * Returns a float value representing animation's current playtime with respect to its total playtime. This value increasing in a range from [0 to 1] and wrap back to 0 when it reach 1.
 *
 * Example:
 * 0.000000 - mark the starting of animation.
 * 0.500000 - mark the midpoint of the animation.
 * 1.000000 - mark the end of animation.
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x346D81500D088F42 | Since: 323
 */
export function getAnimCurrentTime(entity, animDict, animName) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityAnimCurrentTime(_entity, animDict, animName);
}
/**
 * Returns a float value representing animation's total playtime in milliseconds.
 *
 * Example:
 * GET_ENTITY_ANIM_TOTAL_TIME(PLAYER_ID(),"amb@world_human_yoga@female@base","base_b")
 * return 20800.000000
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x50BD2730B191E360 | Since: 323
 */
export function getAnimTotalTime(entity, animDict, animName) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityAnimTotalTime(_entity, animDict, animName);
}
/**
 * No comment provided
 *
 * Hash: 0x48C2BED9180FE123 | Since: 323
 */
export function getAttachedTo(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityAttachedTo(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xB328DCC3A3AA401B | Since: 791
 */
export function getBoneCount(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityBoneCount(_entity);
}
/**
 * Returns the index of the bone. If the bone was not found, -1 will be returned.
 *
 * list:
 * https://pastebin.com/D7JMnX1g
 *
 * BoneNames:
 * chassis,
 * windscreen,
 * seat_pside_r,
 * seat_dside_r,
 * bodyshell,
 * suspension_lm,
 * suspension_lr,
 * platelight,
 * attach_female,
 * attach_male,
 * bonnet,
 * boot,
 * chassis_dummy,  //Center of the dummy
 * chassis_Control,    //Not found yet
 * door_dside_f,   //Door left, front
 * door_dside_r,   //Door left, back
 * door_pside_f,   //Door right, front
 * door_pside_r,   //Door right, back
 * Gun_GripR,
 * windscreen_f,
 * platelight, //Position where the light above the numberplate is located
 * VFX_Emitter,
 * window_lf,  //Window left, front
 * window_lr,  //Window left, back
 * window_rf,  //Window right, front
 * window_rr,  //Window right, back
 * engine, //Position of the engine
 * gun_ammo,
 * ROPE_ATTATCH,   //Not misspelled. In script "finale_heist2b.c4".
 * wheel_lf,   //Wheel left, front
 * wheel_lr,   //Wheel left, back
 * wheel_rf,   //Wheel right, front
 * wheel_rr,   //Wheel right, back
 * exhaust,    //Exhaust. shows only the position of the stock-exhaust
 * overheat,   //A position on the engine(not exactly sure, how to name it)
 * misc_e, //Not a car-bone.
 * seat_dside_f,   //Driver-seat
 * seat_pside_f,   //Seat next to driver
 * Gun_Nuzzle,
 * seat_r
 *
 * I doubt that the function is case-sensitive, since I found a "Chassis" and a "chassis". - Just tested: Definitely not case-sensitive.
 *
 *
 *
 * Hash: 0xFB71170B7E76ACBA | Since: 323
 */
export function getBoneIndexByName(entity, boneName) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityBoneIndexByName(_entity, boneName);
}
/**
 * No comment provided
 *
 * Hash: 0xCF1247CC86961FD6 | Since: 2802
 */
export function getBoneObjectPostion(entity, boneIndex) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(Citizen.invokeNative('0xCF1247CC86961FD6', _entity, boneIndex));
}
/**
 * Gets the local rotation of the specified bone of the specified entity.
 *
 * Hash: 0xBD8D32550E5CEBFE | Since: 1734
 */
export function getBoneObjectRotation(entity, boneIndex) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityBoneRotationLocal(_entity, boneIndex));
}
/**
 * Gets the world position of the specified bone of the specified entity.
 *
 * Hash: 0x46F8696933A63C9B | Since: 877
 */
export function getBonePostion(entity, boneIndex) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityBonePosition2(_entity, boneIndex));
}
/**
 * Gets the world rotation of the specified bone of the specified entity.
 *
 * Hash: 0xCE6294A232D03786 | Since: 791
 */
export function getBoneRotation(entity, boneIndex) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityBoneRotation(_entity, boneIndex));
}
/**
 * No comment provided
 *
 * Hash: 0xD95CC5D2AB15A09F | Since: 757
 */
export function getCanBeDamaged(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityCanBeDamaged(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xCCF1E97BEFDAE480 | Since: 323
 */
export function getCollisionDisabled(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityCollisionDisabled(_entity);
}
/**
 * Gets the current coordinates for a specified entity.
 * `entity` = The entity to get the coordinates from.
 * `alive` = Unused by the game, potentially used by debug builds of GTA in order to assert whether or not an entity was alive.
 *
 * Hash: 0x3FEF770D40960D5A | Since: 323
 */
export function getCoords(entity, alive) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityCoords(_entity, alive));
}
/**
 * Gets the entity's forward vector.
 *
 * Hash: 0x0A794A5A57F8DF91 | Since: 323
 */
export function getForwardVector(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityForwardVector(_entity));
}
/**
 * Gets the X-component of the entity's forward vector.
 *
 * Hash: 0x8BB4EF4214E0E6D5 | Since: 323
 */
export function getForwardX(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityForwardX(_entity);
}
/**
 * Gets the Y-component of the entity's forward vector.
 *
 * Hash: 0x866A4A5FAE349510 | Since: 323
 */
export function getForwardY(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityForwardY(_entity);
}
/**
 * Returns the heading of the entity in degrees. Also know as the "Yaw" of an entity.
 *
 * Hash: 0xE83D4F9BA2A38914 | Since: 323
 */
export function getHeading(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHeading(_entity);
}
/**
 * Gets the heading of the entity physics in degrees, which tends to be more accurate than just "GET_ENTITY_HEADING". This can be clearly seen while, for example, ragdolling a ped/player.
 *
 * NOTE: The name and description of this native are based on independent research. If you find this native to be more suitable under a different name and/or described differently, please feel free to do so.
 *
 * Hash: 0x846BF6291198A71E | Since: 323
 */
export function getHeadingFromEulers(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHeadingFromEulers(_entity);
}
/**
 * Returns an integer value of entity's current health.
 *
 * Example of range for ped:
 * - Player [0 to 200]
 * - Ped [100 to 200]
 * - Vehicle [0 to 1000]
 * - Object [0 to 1000]
 *
 * Health is actually a float value but this native casts it to int.
 * In order to get the actual value, do:
 * float health = *(float *)(entityAddress + 0x280);
 *
 * Hash: 0xEEF059FAD016D209 | Since: 323
 */
export function getHealth(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHealth(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x5A504562485944DD | Since: 323
 */
export function getHeight(entity, pos, atTop, inWorldCoords) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHeight(_entity, pos.x, pos.y, pos.z, atTop, inWorldCoords);
}
/**
 * Return height (z-dimension) above ground.
 * Example: The pilot in a titan plane is 1.844176 above ground.
 *
 * How can i convert it to meters?
 * Everything seems to be in meters, probably this too.
 *
 * Hash: 0x1DD55701034110E5 | Since: 323
 */
export function getHeightAboveGround(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHeightAboveGround(_entity);
}
/**
 * Returns the LOD distance of an entity.
 *
 * Hash: 0x4159C2762B5791D6 | Since: 323
 */
export function getLodDist(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityLodDist(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xECB2FC7235A7D137 | Since: 323
 */
export function getMatrix(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityMatrix(_entity);
}
/**
 * Return an integer value of entity's maximum health.
 *
 * Example:
 * - Player = 200
 * - Ped = 150
 *
 * Hash: 0x15D757606D170C3C | Since: 323
 */
export function getMaxHealth(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityMaxHealth(_entity);
}
/**
 * Returns the model hash from the entity
 *
 * Hash: 0x9F47B058362C84B5 | Since: 323
 */
export function getModel(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityModel(_entity);
}
/**
 * Gets the handle of an entity with a specific model hash attached to another entity, such as an object attached to a ped.
 * This native does not appear to have anything to do with pickups as in scripts it is used with objects.
 *
 * Example from fm_mission_controller_2020.c:
 *
 * `iVar8 = ENTITY::GET_ENTITY_OF_TYPE_ATTACHED_TO_ENTITY(bParam0->f_9, joaat("p_cs_clipboard"));`
 *
 * Hash: 0x1F922734E259BD26 | Since: 1180
 */
export function getOfTypeAttachedToEntity(entity, modelHash) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetEntityPickup(_entity, modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0xD45DC2893621E1FE | Since: 323
 */
export function getPitch(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityPitch(_entity);
}
/**
 * A population type, from the following enum: https://alloc8or.re/gta5/doc/enums/ePopulationType.txt
 *
 * Hash: 0xF6F5161F4534EDFF | Since: 323
 */
export function getPopulationType(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityPopulationType(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xBE8CD9BE829BBEBF | Since: 1604
 */
export function getProofs(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityProofs(_entity);
}
/**
 * w is the correct parameter name!
 *
 * Hash: 0x7B3703D2D32DFA18 | Since: 323
 */
export function getQuaternion(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityQuaternion(_entity);
}
/**
 * Displays the current ROLL axis of the entity [-180.0000/180.0000+]
 * (Sideways Roll) such as a vehicle tipped on its side
 *
 * Hash: 0x831E0242595560DF | Since: 323
 */
export function getRoll(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityRoll(_entity);
}
/**
 * rotationOrder is the order yaw, pitch and roll is applied. Usually 2. Returns a vector where the Z coordinate is the yaw.
 *
 * rotationOrder refers to the order yaw pitch roll is applied; value ranges from 0 to 5 and is usually *2* in scripts.
 * What you use for rotationOrder when getting must be the same as rotationOrder when setting the rotation.
 *
 * What it returns is the yaw on the z part of the vector, which makes sense considering R* considers z as vertical. Here's a picture for those of you who don't understand pitch, yaw, and roll: www.allstar.fiu.edu/aero/images/pic5-1.gif
 *
 * Rotation Orders:
 * 0: ZYX - Rotate around the z-axis, then the y-axis and finally the x-axis.
 * 1: YZX - Rotate around the y-axis, then the z-axis and finally the x-axis.
 * 2: ZXY - Rotate around the z-axis, then the x-axis and finally the y-axis.
 * 3: XZY - Rotate around the x-axis, then the z-axis and finally the y-axis.
 * 4: YXZ - Rotate around the y-axis, then the x-axis and finally the z-axis.
 * 5: XYZ - Rotate around the x-axis, then the y-axis and finally the z-axis.
 *
 * Hash: 0xAFBD61CC738D9EB9 | Since: 323
 */
export function getRotation(entity, rotationOrder) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityRotation(_entity, rotationOrder));
}
/**
 * No comment provided
 *
 * Hash: 0x213B91045D09B983 | Since: 323
 */
export function getRotationVelocity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityRotationVelocity(_entity));
}
/**
 * Returns the name of the script that owns/created the entity or nullptr. Second parameter is unused, can just be a nullptr.
 *
 * Hash: 0xA6E9C38DB51D7748 | Since: 323
 */
export function getScript(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityScript(_entity);
}
/**
 * result is in meters per second
 *
 * ------------------------------------------------------------
 * So would the conversion to mph and km/h, be along the lines of this.
 *
 * float speed = GET_ENTITY_SPEED(veh);
 * float kmh = (speed * 3.6);
 * float mph = (speed * 2.236936);
 * ------------------------------------------------------------
 *
 * Hash: 0xD5037BA82E12416F | Since: 323
 */
export function getSpeed(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntitySpeed(_entity);
}
/**
 * Relative can be used for getting speed relative to the frame of the vehicle, to determine for example, if you are going in reverse (-y speed) or not (+y speed).
 *
 * Hash: 0x9A8D700A51CB7B0D | Since: 323
 */
export function getSpeedVector(entity, relative) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntitySpeedVector(_entity, relative));
}
/**
 * Get how much of the entity is submerged.  1.0f is whole entity.
 *
 * Hash: 0xE81AFC1BC4CC41CE | Since: 323
 */
export function getSubmergedLevel(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntitySubmergedLevel(_entity);
}
/**
 * Returns:
 * 0 = no entity
 * 1 = ped
 * 2 = vehicle
 * 3 = object
 *
 * Hash: 0x8ACD366038D14505 | Since: 323
 */
export function getType(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityType(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x95EED5A694951F9F | Since: 323
 */
export function getUprightValue(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityUprightValue(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x4805D2B1D8CF94A9 | Since: 323
 */
export function getVelocity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityVelocity(_entity));
}
/**
 * No comment provided
 *
 * Hash: 0x5C3D0A935F535C4C | Since: 323
 */
export function getLastMaterialHitBy(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetLastMaterialHitByEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xFFBD7052D65BE0FF | Since: 2944
 */
export function getNearestParticipantTo(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0xFFBD7052D65BE0FF', _entity);
}
/**
 * No comment provided
 *
 * Hash: 0x7196842CB375CDB3 | Since: 323
 */
export function getNearestPlayerTo(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetNearestPlayerToEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x4DC9A62F844D9337 | Since: 323
 */
export function getNearestPlayerToOnTeam(entity, team) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetNearestPlayerToEntityOnTeam(_entity, team);
}
/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 *
 * Hash: 0xD7E3B9735C0F89D6 | Since: 323
 */
export function getObjectIndexFromIndex(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetObjectIndexFromEntityIndex(_entity);
}
/**
 * Converts world coords (posX - Z) to coords relative to the entity
 *
 * Example:
 * posX is given as 50
 * entity's x coord is 40
 * the returned x coord will then be 10 or -10, not sure haven't used this in a while (think it is 10 though).
 *
 * Hash: 0x2274BC1C4885E333 | Since: 323
 */
export function getOffsetFromGivenWorldCoords(entity, pos) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetOffsetFromEntityGivenWorldCoords(_entity, pos.x, pos.y, pos.z));
}
/**
 * Offset values are relative to the entity.
 *
 * x = left/right
 * y = forward/backward
 * z = up/down
 *
 * Hash: 0x1899F328B0E12848 | Since: 323
 */
export function getOffsetFromInWorldCoords(entity, offsetX, offsetY, offsetZ) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetOffsetFromEntityInWorldCoords(_entity, offsetX, offsetY, offsetZ));
}
/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 *
 * Hash: 0x04A2A40C73395041 | Since: 323
 */
export function getPedIndexFromIndex(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetPedIndexFromEntityIndex(_entity);
}
/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 *
 * Hash: 0x4B53F92932ADFAC0 | Since: 323
 */
export function getVehicleIndexFromIndex(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetVehicleIndexFromEntityIndex(_entity);
}
/**
 * Returns the coordinates of an entity-bone.
 *
 * Hash: 0x44A8FCB8ED227738 | Since: 323
 */
export function getWorldPositionOfBone(entity, boneIndex) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetWorldPositionOfEntityBone(_entity, boneIndex));
}
/**
 * `if (ENTITY::HAS_ANIM_EVENT_FIRED(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("CreateObject")))`
 *
 * Hash: 0xEAF4CD9EA3E7E922 | Since: 323
 */
export function hasAnimEventFired(entity, actionHash) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof actionHash === 'string')
        actionHash = GetHashKey(actionHash);
    return HasAnimEventFired(_entity, actionHash);
}
/**
 * No comment provided
 *
 * Hash: 0xE9676F61BC0B3321 | Since: 323
 */
export function hasCollisionLoadedAround(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasCollisionLoadedAroundEntity(_entity);
}
/**
 * P3 is always 3 as far as i cant tell
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x20B711662962B472 | Since: 323
 */
export function hasAnimFinished(entity, animDict, animName) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityAnimFinished(_entity, animDict, animName, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x95EB9964FF5C5C65 | Since: 323
 */
export function hasBeenDamagedByAnyObject(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityBeenDamagedByAnyObject(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x605F5A140F202491 | Since: 323
 */
export function hasBeenDamagedByAnyPed(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityBeenDamagedByAnyPed(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xDFD5033FDBA0A9C8 | Since: 323
 */
export function hasBeenDamagedByAnyVehicle(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityBeenDamagedByAnyVehicle(_entity);
}
/**
 * Entity 1 = Victim
 * Entity 2 = Attacker
 *
 * p2 seems to always be 1
 *
 * Hash: 0xC86D67D52A707CF8 | Since: 323
 */
export function hasBeenDamagedByEntity(entity1, entity2) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    return HasEntityBeenDamagedByEntity(_entity1, _entity2, false);
}
/**
 * traceType is always 17 in the scripts.
 *
 * There is other codes used for traceType:
 * 19 - in jewelry_prep1a
 * 126 - in am_hunt_the_beast
 * 256 & 287 - in fm_mission_controller
 *
 * Hash: 0xFCDFF7B72D23A1AC | Since: 323
 */
export function hasClearLosToEntity(entity1, entity2, traceType) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    return HasEntityClearLosToEntity(_entity1, _entity2, traceType);
}
/**
 * No comment provided
 *
 * Hash: 0x394BDE2A7BBA031E | Since: 1868
 */
export function hasClearLosToEntityAdjustForCover(entity1, entity2, traceType) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    return HasEntityClearLosToEntity2(_entity1, _entity2, traceType);
}
/**
 * Has the entity1 got a clear line of sight to the other entity2 from the direction entity1 is facing.
 * This is one of the most CPU demanding BOOL natives in the game; avoid calling this in things like nested for-loops
 *
 * Hash: 0x0267D00AF114F17A | Since: 323
 */
export function hasClearLosToEntityInFront(entity1, entity2) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    return HasEntityClearLosToEntityInFront(_entity1, _entity2);
}
/**
 * Called on tick.
 * Tested with vehicles, returns true whenever the vehicle is touching any entity.
 *
 * Note: for vehicles, the wheels can touch the ground and it will still return false, but if the body of the vehicle touches the ground, it will return true.
 *
 * Hash: 0x8BAD02F0368D9E14 | Since: 323
 */
export function hasCollidedWithAnything(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityCollidedWithAnything(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x731EC8A916BD11A1 | Since: 323
 */
export function isAn(handle) {
    return IsAnEntity(handle);
}
/**
 * No comment provided
 *
 * Hash: 0x8D68C8FD0FACA94E | Since: 323
 */
export function isAnObject(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAnObject(_entity);
}
/**
 * Whether the entity is attached to any other entity.
 *
 * Hash: 0xB346476EF1A64897 | Since: 323
 */
export function isAttached(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAttached(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xCF511840CEEDE0CC | Since: 323
 */
export function isAttachedToAnyObject(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAttachedToAnyObject(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xB1632E9A5F988D11 | Since: 323
 */
export function isAttachedToAnyPed(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAttachedToAnyPed(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x26AA915AD89BFB4B | Since: 323
 */
export function isAttachedToAnyVehicle(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAttachedToAnyVehicle(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xEFBE71898A993728 | Since: 323
 */
export function isAttachedToEntity(_from, to) {
    const __from = _from instanceof IEntity ? _from.handle() : _from;
    const _to = to instanceof IEntity ? to.handle() : to;
    return IsEntityAttachedToEntity(__from, _to);
}
/**
 * Checks if entity is within x/y/zSize distance of x/y/z.
 *
 * Last three are unknown ints, almost always p7 = 0, p8 = 1, p9 = 0
 *
 * Hash: 0x20B60995556D004F | Since: 323
 */
export function isAtCoord(entity, pos, xSize, ySize, zSize) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAtCoord(_entity, pos.x, pos.y, pos.z, xSize, ySize, zSize, false, false, 0);
}
/**
 * Checks if entity1 is within the box defined by x/y/zSize of entity2.
 *
 * Last three parameters are almost alwasy p5 = 0, p6 = 1, p7 = 0
 *
 * Hash: 0x751B70C3D034E187 | Since: 323
 */
export function isAtEntity(entity1, entity2, xSize, ySize, zSize) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    return IsEntityAtEntity(_entity1, _entity2, xSize, ySize, zSize, false, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x0A7B270912999B3C | Since: 323
 */
export function isAMissionEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAMissionEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x524AC5ECEA15343E | Since: 323
 */
export function isAPed(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAPed(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x6AC7003FA6E5575E | Since: 323
 */
export function isAVehicle(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAVehicle(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x5F9532F3B5CC2551 | Since: 323
 */
export function isDead(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityDead(_entity, false);
}
/**
 * No comment provided
 *
 * Hash: 0x886E37EC497200B6 | Since: 323
 */
export function isInAir(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityInAir(_entity);
}
/**
 * `p8` is a debug flag invoking functions in the same path as ``DRAW_MARKER``
 * `p10` is some entity flag check, also used in `IS_ENTITY_AT_ENTITY`, `IS_ENTITY_IN_AREA`, and `IS_ENTITY_AT_COORD`.
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 *
 * Hash: 0x51210CED3DA1C78A | Since: 323
 */
export function isInAngledArea(entity, x1, y1, z1, x2, y2, z2, width, debug, includeZ) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityInAngledArea(_entity, x1, y1, z1, x2, y2, z2, width, debug, includeZ, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x54736AA40E271165 | Since: 323
 */
export function isInArea(entity, x1, y1, z1, x2, y2, z2) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityInArea(_entity, x1, y1, z1, x2, y2, z2, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCFB0A0D8EDD145A3 | Since: 323
 */
export function isInWater(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityInWater(_entity);
}
/**
 * Full list of zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/zones.json
 *
 * Hash: 0xB6463CF6AF527071 | Since: 323
 */
export function isInZone(entity, zone) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityInZone(_entity, zone);
}
/**
 * No comment provided
 *
 * Hash: 0xE31C2C72B8692B64 | Since: 323
 */
export function isOccluded(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityOccluded(_entity);
}
/**
 * Returns true if the entity is in between the minimum and maximum values for the 2d screen coords.
 * This means that it will return true even if the entity is behind a wall for example, as long as you're looking at their location.
 * Chipping
 *
 * Hash: 0xE659E47AF827484B | Since: 323
 */
export function isOnScreen(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityOnScreen(_entity);
}
/**
 * `See also PED::IS_SCRIPTED_SCENARIO_PED_USING_CONDITIONAL_ANIM 0x6EC47A344923E1ED 0x3C30B447`
 *
 * `Taken from ENTITY::IS_ENTITY_PLAYING_ANIM(PLAYER::PLAYER_PED_ID(), "creatures@shark@move", "attack_player", 3)`
 *
 * p4 is always 3 in the scripts.
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x1F0B79228E461EC9 | Since: 323
 */
export function isPlayingAnim(entity, animDict, animName, taskFlag) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityPlayingAnim(_entity, animDict, animName, taskFlag);
}
/**
 * `a static ped will not react to natives like "APPLY_FORCE_TO_ENTITY" or "SET_ENTITY_VELOCITY" and oftentimes will not react to task-natives like "TASK::TASK_COMBAT_PED". The only way I know of to make one of these peds react is to ragdoll them (or sometimes to use CLEAR_PED_TASKS_IMMEDIATELY(). Static peds include almost all far-away peds, beach-combers, peds in certain scenarios, peds crossing a crosswalk, peds walking to get back into their cars, and others. If anyone knows how to make a ped non-static without ragdolling them, please edit this with the solution.`
 *
 * Hash: 0x1218E6886D3D8327 | Since: 323
 */
export function isStatic(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityStatic(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x17FFC1B2BA35A494 | Since: 323
 */
export function isTouchingEntity(entity, targetEntity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    return IsEntityTouchingEntity(_entity, _targetEntity);
}
/**
 * No comment provided
 *
 * Hash: 0x0F42323798A58C8C | Since: 323
 */
export function isTouchingModel(entity, modelHash) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return IsEntityTouchingModel(_entity, modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x5333F526F6AB19AA | Since: 323
 */
export function isUpright(entity, angle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityUpright(_entity, angle);
}
/**
 * No comment provided
 *
 * Hash: 0x1DBD58820FA61D71 | Since: 323
 */
export function isUpsidedown(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityUpsidedown(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x47D6F43D77935C75 | Since: 323
 */
export function isVisible(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityVisible(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xD796CB5BA8F20E32 | Since: 323
 */
export function isVisibleToScript(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityVisibleToScript(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xD05BFF0C0A12C68F | Since: 323
 */
export function isWaitingForWorldCollision(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityWaitingForWorldCollision(_entity);
}
/**
 * delta and bitset are guessed fields. They are based on the fact that most of the calls have 0 or nil field types passed in.
 *
 * The only time bitset has a value is 0x4000 and the only time delta has a value is during stealth with usually <1.0f values.
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x7FB218262B810701 | Since: 323
 */
export function playAnim(entity, animName, animDict, loop, stayInAnim, delta, bitset) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return PlayEntityAnim(_entity, animName, animDict, 0, loop, stayInAnim, false, delta, bitset);
}
/**
 * p4 and p7 are usually 1000.0f.
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0xC77720A12FE14A86 | Since: 323
 */
export function playSynchronizedAnim(entity, syncedScene, animation, propName) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return PlaySynchronizedEntityAnim(_entity, syncedScene, animation, propName, 0, 0, undefined, 0);
}
/**
 * p6,p7 probably animname and animdict
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0xB9C54555ED30FBC4 | Since: 323
 */
export function playSynchronizedMapAnim(x1, y1, z1, x2, y2, z2) {
    return PlaySynchronizedMapEntityAnim(x1, y1, z1, x2, y2, z2, undefined, undefined, 0, 0, undefined, 0);
}
/**
 * Called to update entity attachments.
 *
 * Hash: 0xF4080490ADC51C6F | Since: 323
 */
export function processAttachments(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ProcessEntityAttachments(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x61B6775E83C0DB6F | Since: 323
 */
export function removeForcedObject(pos, modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    RemoveForcedObject(pos.x, pos.y, pos.z, 0, modelHash);
}
/**
 * This native makes entities visible that are hidden by the native CREATE_MODEL_HIDE.
 * p5 should be false, true does nothing
 *
 * Hash: 0xD9E3006FB3CBD765 | Since: 323
 */
export function removeModelHide(pos, radius, modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    RemoveModelHide(pos.x, pos.y, pos.z, radius, modelHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x033C0F9A64E229AE | Since: 323
 */
export function removeModelSwap(pos, radius, originalModel, newModel) {
    if (typeof originalModel === 'string')
        originalModel = GetHashKey(originalModel);
    if (typeof newModel === 'string')
        newModel = GetHashKey(newModel);
    RemoveModelSwap(pos.x, pos.y, pos.z, radius, originalModel, newModel, false);
}
/**
 * No comment provided
 *
 * Hash: 0x9B1E824FFBB7027A | Since: 323
 */
export function resetAlpha(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ResetEntityAlpha(_entity);
}
/**
 * Similar to RESET_ENTITY_ALPHA
 *
 * Hash: 0x490861B88F4FD846 | Since: 944
 */
export function resetPickupGlow(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x490861B88F4FD846', _entity);
}
/**
 * p1 is always set to 1
 *
 * Hash: 0x36F32DE87082343E | Since: 1011
 */
export function setAllowMigrateToSpectator(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x36F32DE87082343E', _entity, undefined);
}
/**
 * p1 always false.
 *
 * Hash: 0xE12ABE5E3A389A6C | Since: 323
 */
export function setCanAutoVaultOn(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetCanAutoVaultOnEntity(_entity, toggle);
}
/**
 * p1 always false.
 *
 * Hash: 0xA80AE305E0A3044F | Since: 323
 */
export function setCanClimbOn(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetCanClimbOnEntity(_entity, toggle);
}
/**
 * skin - everything alpha except skin
 * Set entity alpha level. Ranging from 0 to 255 but chnages occur after every 20 percent (after every 51).
 *
 * Hash: 0x44A0870B7E92D7C0 | Since: 323
 */
export function setAlpha(entity, alphaLevel, skin) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityAlpha(_entity, alphaLevel, skin);
}
/**
 * No comment provided
 *
 * Hash: 0xACAD101E1FB66689 | Since: 323
 */
export function setAlwaysPrerender(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityAlwaysPrerender(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8339643499D1222E | Since: 2372
 */
export function setAngularVelocity(entity, pos) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityAngularVelocity(_entity, pos.x, pos.y, pos.z);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x4487C259F0F70977 | Since: 323
 */
export function setAnimCurrentTime(entity, animDictionary, animName, time) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityAnimCurrentTime(_entity, animDictionary, animName, time);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x28D1A16553C51776 | Since: 323
 */
export function setAnimSpeed(entity, animDictionary, animName, speedMultiplier) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityAnimSpeed(_entity, animDictionary, animName, speedMultiplier);
}
/**
 * Makes the specified entity (ped, vehicle or object) persistent. Persistent entities will not automatically be removed by the engine.
 *
 * p1 has no effect when either its on or off
 * maybe a quick disassembly will tell us what it does
 *
 * p2 has no effect when either its on or off
 * maybe a quick disassembly will tell us what it does
 *
 * Hash: 0xAD738C3085FE7E11 | Since: 323
 */
export function setAsMissionEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityAsMissionEntity(_entity, false, false);
}
/**
 * Marks the specified entity (ped, vehicle or object) as no longer needed if its population type is set to the mission type.
 * If the entity is ped, it will also clear their tasks immediately just like when CLEAR_PED_TASKS_IMMEDIATELY is called.
 * Entities marked as no longer needed, will be deleted as the engine sees fit.
 * Use this if you just want to just let the game delete the ped:
 * void MarkPedAsAmbientPed(Ped ped) {
 * auto addr = getScriptHandleBaseAddress(ped);
 *
 * if (!addr) {
 * return;
 * }
 *
 * //the game uses only lower 4 bits as entity population type
 * BYTE origValue = *(BYTE *)(addr + 0xDA);
 * `*(BYTE *)(addr + 0xDA) = ((origValue & 0xF0) | ePopulationType::POPTYPE_RANDOM_AMBIENT);`
 * }
 *
 * Hash: 0xB736A491E64A32CF | Since: 323
 */
export function setAsNoLongerNeeded(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityAsNoLongerNeeded(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x68B562E124CC0AEF | Since: 1180
 */
export function setCantCauseCollisionDamagedEntity(entity1, entity2) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    Citizen.invokeNative('0x68B562E124CC0AEF', _entity1, _entity2);
}
/**
 * No comment provided
 *
 * Hash: 0x1760FFA8AB074D66 | Since: 323
 */
export function setCanBeDamaged(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCanBeDamaged(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE22D8FDE858B8119 | Since: 323
 */
export function setCanBeDamagedByRelationshipGroup(entity, bCanBeDamaged, relGroup) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCanBeDamagedByRelationshipGroup(_entity, bCanBeDamaged, relGroup);
}
/**
 * Sets whether the entity can be targeted without being in line-of-sight.
 *
 * Hash: 0xD3997889736FD899 | Since: 323
 */
export function setCanBeTargetedWithoutLos(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCanBeTargetedWithoutLos(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB17BC6453F6CF5AC | Since: 944
 */
export function setCanOnlyBeDamagedByEntity(entity1, entity2) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    Citizen.invokeNative('0xB17BC6453F6CF5AC', _entity1, _entity2);
}
/**
 * No comment provided
 *
 * Hash: 0x352E2B5CF420BF3B | Since: 573
 */
export function setCanOnlyBeDamagedByScriptParticipants(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x352E2B5CF420BF3B', _entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1A9205C1B9EE827F | Since: 323
 */
export function setCollision(entity, toggle, keepPhysics) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCollision(_entity, toggle, keepPhysics);
}
/**
 * No comment provided
 *
 * Hash: 0x9EBC85ED0FFFE51C | Since: 323
 */
export function setCompletelyDisableCollision(entity, toggle, keepPhysics) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCompletelyDisableCollision(_entity, toggle, keepPhysics);
}
/**
 * p7 is always 1 in the scripts. Set to 1, an area around the destination coords for the moved entity is cleared from other entities.
 *
 * Often ends with 1, 0, 0, 1); in the scripts. It works.
 *
 * Axis - Invert Axis Flags
 *
 * Hash: 0x06843DA7060A026B | Since: 323
 */
export function setCoords(entity, pos, xAxis, yAxis, zAxis, clearArea) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCoords(_entity, pos.x, pos.y, pos.z, xAxis, yAxis, zAxis, clearArea);
}
/**
 * Axis - Invert Axis Flags
 *
 * Hash: 0x239A3351AC1DA385 | Since: 323
 */
export function setCoordsNoOffset(entity, pos, xAxis, yAxis, zAxis) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCoordsNoOffset(_entity, pos.x, pos.y, pos.z, xAxis, yAxis, zAxis);
}
/**
 * No comment provided
 *
 * Hash: 0x621873ECE1178967 | Since: 323
 */
export function setCoordsWithoutPlantsReset(entity, pos, alive, deadFlag, ragdollFlag, clearArea) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCoordsWithoutPlantsReset(_entity, pos.x, pos.y, pos.z, alive, deadFlag, ragdollFlag, clearArea);
}
/**
 * No comment provided
 *
 * Hash: 0x1718DE8E3F2823CA | Since: 323
 */
export function setDynamic(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityDynamic(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x4A4722448F18EEF5 | Since: 323
 */
export function setHasGravity(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityHasGravity(_entity, toggle);
}
/**
 * Set the heading of an entity in degrees also known as "Yaw".
 *
 * Hash: 0x8E2530AA8ADA980E | Since: 323
 */
export function setHeading(entity, heading) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityHeading(_entity, heading);
}
/**
 * health >= 0
 * male ped ~= 100 - 200
 * female ped ~= 0 - 100
 *
 * Hash: 0x6B76DC1F3AE6E6A3 | Since: 323
 */
export function setHealth(entity, health, instigator, weaponType) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _instigator = instigator instanceof IEntity ? instigator.handle() : instigator;
    if (typeof weaponType === 'string')
        weaponType = GetHashKey(weaponType);
    SetEntityHealth(_entity, health, _instigator, weaponType);
}
/**
 * Sets a ped or an object totally invincible. It doesn't take any kind of damage. Peds will not ragdoll on explosions and the tazer animation won't apply either.
 *
 * If you use this for a ped and you want Ragdoll to stay enabled, then do:
 * *(DWORD *)(pedAddress + 0x188) |= (1 << 9);
 *
 * Use this if you want to get the invincibility status:
 * bool IsPedInvincible(Ped ped)
 * {
 * auto addr = getScriptHandleBaseAddress(ped);
 *
 * if (addr)
 * {
 * DWORD flag = *(DWORD *)(addr + 0x188);
 * return ((flag & (1 << 8)) != 0) || ((flag & (1 << 9)) != 0);
 * }
 *
 * return false;
 * }
 *
 * Hash: 0x3882114BDE571AD4 | Since: 323
 */
export function setInvincible(entity, toggle, dontResetOnCleanup) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityInvincible(_entity, toggle, dontResetOnCleanup);
}
/**
 * No comment provided
 *
 * Hash: 0x78E8E3A640178255 | Since: 323
 */
export function setIsInVehicle(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x78E8E3A640178255', _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xEA02E132F5C68722 | Since: 323
 */
export function setIsTargetPriority(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityIsTargetPriority(_entity, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x7CFBA6A80BDF3874 | Since: 323
 */
export function setLights(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityLights(_entity, toggle);
}
/**
 * Loads collision grid for an entity spawned outside of a player's loaded area. This allows peds to execute tasks rather than sit dormant because of a lack of a physics grid.
 * Certainly not the main usage of this native but when set to true for a Vehicle, it will prevent the vehicle to explode if it is spawned far away from the player.
 *
 * Hash: 0x0DC7CABAB1E9B67E | Since: 323
 */
export function setLoadCollisionFlag(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityLoadCollisionFlag(_entity, toggle, undefined);
}
/**
 * LOD distance can be 0 to 0xFFFF (higher values will result in 0xFFFF) as it is actually stored as a 16-bit value (aka uint16_t).
 *
 * Hash: 0x5927F96A78577363 | Since: 323
 */
export function setLodDist(entity, value) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityLodDist(_entity, value);
}
/**
 * `For instance: ENTITY::SET_ENTITY_MAX_HEALTH(PLAYER::PLAYER_PED_ID(), 200); // director_mode.c4: 67849`
 *
 * Hash: 0x166E7CF68597D8B5 | Since: 323
 */
export function setMaxHealth(entity, value) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityMaxHealth(_entity, value);
}
/**
 * No comment provided
 *
 * Hash: 0x0E46A3FCBDE2A1B1 | Since: 323
 */
export function setMaxSpeed(entity, speed) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityMaxSpeed(_entity, speed);
}
/**
 * No comment provided
 *
 * Hash: 0xE66377CDDADA4810 | Since: 1734
 */
export function setMirrorReflectionFlag(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xE66377CDDADA4810', _entity, false);
}
/**
 * No comment provided
 *
 * Hash: 0x295D82A8559F9150 | Since: 323
 */
export function setMotionBlur(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityMotionBlur(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x2C2E3DC128F44309 | Since: 323
 */
export function setNoweapondecals(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityDecalsDisabled(_entity, false);
}
/**
 * Calling this function disables collision between two entities.
 * The importance of the order for entity1 and entity2 is unclear.
 * The third parameter, `thisFrame`, decides whether the collision is to be disabled until it is turned back on, or if it's just this frame.
 *
 * Hash: 0xA53ED5520C07654A | Since: 323
 */
export function setNoCollisionEntity(entity1, entity2, thisFrameOnly) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    SetEntityNoCollisionEntity(_entity1, _entity2, thisFrameOnly);
}
/**
 * No comment provided
 *
 * Hash: 0x79F020FF9EDC0748 | Since: 323
 */
export function setOnlyDamagedByPlayer(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityOnlyDamagedByPlayer(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x7022BD828FA0B082 | Since: 323
 */
export function setOnlyDamagedByRelationshipGroup(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityOnlyDamagedByRelationshipGroup(_entity, false, undefined);
}
/**
 * Enable / disable each type of damage.
 *
 * waterProof is damage related to water not drowning
 * --------------
 * `p7 is to to '1' in am_mp_property_ext/int: ENTITY::SET_ENTITY_PROOFS(uParam0->f_19, true, true, true, true, true, true, 1, true);`
 *
 *
 * Hash: 0xFAEE099C6F890BB8 | Since: 323
 */
export function setProofs(entity, bulletProof, fireProof, explosionProof, collisionProof, meleeProof, steamProof, dontResetOnCleanup, waterProof) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityProofs(_entity, bulletProof, fireProof, explosionProof, collisionProof, meleeProof, steamProof, dontResetOnCleanup, waterProof);
}
/**
 * w is the correct parameter name!
 *
 * Hash: 0x77B21BE7AC540F07 | Since: 323
 */
export function setQuaternion(entity, pos, w) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityQuaternion(_entity, pos.x, pos.y, pos.z, w);
}
/**
 * No comment provided
 *
 * Hash: 0x0A50A1EEDAD01E65 | Since: 323
 */
export function setRecordsCollisions(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityRecordsCollisions(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x730F5F8D3F0F2050 | Since: 323
 */
export function setRenderScorched(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityRenderScorched(_entity, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x694E00132F2823ED | Since: 323
 */
export function setRequiresMoreExpensiveRiverCheck(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityRequiresMoreExpensiveRiverCheck(_entity, toggle);
}
/**
 * rotationOrder refers to the order yaw pitch roll is applied
 * value ranges from 0 to 5. What you use for rotationOrder when setting must be the same as rotationOrder when getting the rotation.
 * Unsure what value corresponds to what rotation order, more testing will be needed for that.
 * For the most part R* uses 1 or 2 as the order.
 * p5 is usually set as true
 *
 *
 * Hash: 0x8524A8B0171D5E07 | Since: 323
 */
export function setRotation(entity, pitch, roll, yaw, rotationOrder) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityRotation(_entity, pitch, roll, yaw, rotationOrder, false);
}
/**
 * True means it can be deleted by the engine when switching lobbies/missions/etc, false means the script is expected to clean it up.
 *
 * "Allow Freeze If No Collision"
 *
 * Hash: 0x3910051CCECDB00C | Since: 323
 */
export function setShouldFreezeWaitingOnCollision(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCleanupByEngine(_entity, toggle);
}
/**
 * Only called once in the scripts.
 *
 * Related to weapon objects.
 *
 *
 * Hash: 0x5C3B791D580E0BC2 | Since: 323
 */
export function setSortBias(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x5C3B791D580E0BC2', _entity, 0);
}
/**
 * Example here: www.gtaforums.com/topic/830463-help-with-turning-lights-green-and-causing-peds-to-crash-into-each-other/#entry1068211340
 *
 * 0 = green
 * 1 = red
 * 2 = yellow
 * 3 = reset changes
 * changing lights may not change the behavior of vehicles
 *
 * Hash: 0x57C5DB656185EAC4 | Since: 323
 */
export function setTrafficlightOverride(entity, state) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityTrafficlightOverride(_entity, state);
}
/**
 * No comment provided
 *
 * Hash: 0x1A092BB0C3808B96 | Since: 323
 */
export function setUseMaxDistanceForWaterReflection(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x1A092BB0C3808B96', _entity, false);
}
/**
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 *
 * Hash: 0x1C99BB7B6E96D16F | Since: 323
 */
export function setVelocity(entity, pos) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityVelocity(_entity, pos.x, pos.y, pos.z);
}
/**
 * p2 is always 0.
 *
 * Hash: 0xEA1C610A04DB6BBB | Since: 323
 */
export function setVisible(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityVisible(_entity, toggle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC34BC448DA29F5E9 | Since: 573
 */
export function setWaterReflectionFlag(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xC34BC448DA29F5E9', _entity, toggle);
}
/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 *
 * Hash: 0x3AE22DEB5BA5A3E6 | Since: 323
 */
export function setObjectAsNoLongerNeeded(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectAsNoLongerNeeded(__object);
}
/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 *
 * Hash: 0x2595DD4236549CE3 | Since: 323
 */
export function setPedAsNoLongerNeeded(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAsNoLongerNeeded(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCEA7C8E1B48FF68C | Since: 678
 */
export function setPickupCollidesWithProjectiles() {
    Citizen.invokeNative('0xCEA7C8E1B48FF68C', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD7B80E7C3BEFC396 | Since: 1180
 */
export function setPickUpByCargobobDisabled(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetPickUpByCargobobDisabled(_entity, toggle);
}
/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 *
 * Hash: 0x629BFA74418D6239 | Since: 323
 */
export function setVehicleAsNoLongerNeeded(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
    SetVehicleAsNoLongerNeeded(_vehicle);
}
/**
 * Only called within 1 script for x360. 'fm_mission_controller' and it used on an object.
 *
 * Ran after these 2 natives,
 * set_object_targettable(uParam0, 0);
 * set_entity_invincible(uParam0, 1);
 *
 * Hash: 0xDC6F8601FAF2E893 | Since: 323
 */
export function setWaitForCollisionsBeforeProbe(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetWaitForCollisionsBeforeProbe(_entity, toggle);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * RAGEPluginHook list: docs.ragepluginhook.net/html/62951c37-a440-478c-b389-c471230ddfc5.htm
 *
 * Hash: 0x28004F88151E03E0 | Since: 323
 */
export function stopAnim(entity, animation, animGroup) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StopEntityAnim(_entity, animation, animGroup, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x43D3807C077261E3 | Since: 323
 */
export function stopSynchronizedAnim(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StopSynchronizedEntityAnim(_entity, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x11E79CAB7183B6F5 | Since: 323
 */
export function stopSynchronizedMapAnim(x1, y1, z1, x2, y2, z2) {
    return StopSynchronizedMapEntityAnim(x1, y1, z1, x2, y2, z2);
}
/**
 * No comment provided
 *
 * Hash: 0xEE5D2A122E09EC42 | Since: 323
 */
export function wouldBeOccluded(entityModelHash, pos) {
    if (typeof entityModelHash === 'string')
        entityModelHash = GetHashKey(entityModelHash);
    return WouldEntityBeOccluded(entityModelHash, pos.x, pos.y, pos.z, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA75EE4F689B85391 | Since: 2802
 */
export function getLastHitByEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0xA75EE4F689B85391', _entity);
}
/**
 * No comment provided
 *
 * Hash: 0x0A27A7827347B3B1 | Since: 3407
 */
export function setNoCollisionWithNetworkedEntity(entity1, entity2) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    Citizen.invokeNative('0x0A27A7827347B3B1', _entity1, _entity2);
}
