import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * Returns entity's archetype name, if available.
 * 
 * Hash: 0x47B870F5 | Since: unknown | API-Set: client
 */
export function getArchetypeName(entity: number | IEntity): string {
    return GetEntityArchetypeName(entity);
}

/**
 * Returns the transient entity index for a specified mapdata/entity pair.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xEE43540D | Since: unknown | API-Set: client
 */
export function getIndexFromMapdata(mapdata: number, entity: number): number {
    return GetEntityIndexFromMapdata(mapdata, entity);
}

/**
 * Retrieves the map data and entity handles from a specific entity.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xF6B815C5 | Since: unknown | API-Set: client
 */
export function getMapdataOwner(entity: number | IEntity): [boolean, number, number] {
    return GetEntityMapdataOwner(entity);
}

/**
 * Resets mapdata entity transform matrix to its original state.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0x8143FA4F | Since: unknown | API-Set: client
 */
export function resetMapdataMatrix(mapDataHash: number, entityInternalIdx: number): boolean {
    return ResetMapdataEntityMatrix(mapDataHash, entityInternalIdx);
}

/**
 * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0x3DD8130F | Since: unknown | API-Set: client
 */
export function selectAtCursor(hitFlags: number, precise: boolean): number {
    return SelectEntityAtCursor(hitFlags, precise);
}

/**
 * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xAFE8D405 | Since: unknown | API-Set: client
 */
export function selectAtPos(fracX: number, fracY: number, hitFlags: number, precise: boolean): number {
    return SelectEntityAtPos(fracX, fracY, hitFlags, precise);
}

/**
 * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
 * 
 * Hash: 0xFB0639B | Since: unknown | API-Set: client
 */
export function setMatrix(entity: number | IEntity, forwardX: number, forwardY: number, forwardZ: number, rightX: number, rightY: number, rightZ: number, upX: number, upY: number, upZ: number, atX: number, atY: number, atZ: number): void {
    SetEntityMatrix(entity, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
}

/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 * 
 * Hash: 0xEDBE6ADD | Since: unknown | API-Set: shared
 */
export function isPositionFrozen(entity: number | IEntity): boolean {
    return IsEntityPositionFrozen(entity);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Returns the memory address of an entity.
 * 
 * This native is intended for singleplayer debugging, and may not be available during multiplayer.
 * 
 * Hash: 0x9A3144BC | Since: unknown | API-Set: client
 */
export function getAddress(entity: number | IEntity): any {
    return GetEntityAddress(entity);
}

/**
 * Internal function for ensuring an entity has a state bag.
 * 
 * Hash: 0x3BB78F05 | Since: unknown | API-Set: shared
 */
export function ensureStateBag(entity: number | IEntity): void {
    EnsureEntityStateBag(entity);
}

/**
 * ### Supported types
 * 
 * *   \[1] : Peds (including animals) and players.
 * *   \[2] : Vehicles.
 * *   \[3] : Objects (props), doors, and projectiles.
 * 
 * ### Coordinates need to be send unpacked (x,y,z)
 * 
 * ```lua
 * 
 * -- Define the allowed model hashes
 * local allowedModelHashes = { GetHashKey("p_crate03x"), GetHashKey("p_crate22x") }
 * 
 * -- Get the player's current coordinates
 * local playerCoords = GetEntityCoords(PlayerPedId())
 * 
 * -- Retrieve all entities of type Object (type 3) within a radius of 10.0 units
 * -- that match the allowed model hashes
 * -- and sort output entities by distance
 * local entities = GetEntitiesInRadius(playerCoords.x, playerCoords.y, playerCoords.z, 10.0, 3, true, allowedModelHashes)
 * 
 * -- Iterate through the list of entities and print their ids
 * for i = 1, #entities do
 * local entity = entities[i]
 * print(entity)
 * end
 * 
 * ```
 * 
 * Hash: 0xDFFBA12F | Since: unknown | API-Set: shared
 */
export function getEntitiesInRadius(pos: Vector3, radius: number, entityType: number, sortByDistance: boolean, models: number | IObject): number {
    return GetEntitiesInRadius(pos.x, pos.y, pos.z, radius, entityType, sortByDistance, models);
}

/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
 * 
 * Hash: 0x4BDF1867 | Since: unknown | API-Set: shared
 */
export function getFromStateBagName(bagName: string): number {
    return GetEntityFromStateBagName(bagName);
}

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
 * Hash: 0xC5F68BE9613E2D18 | Since: 323 | API-Set: unknown
 */
export function applyForceTo(entity: number | IEntity, forceFlags: number, pos: Vector3, offX: number, offY: number, offZ: number, boneIndex: number, isDirectionRel: boolean, ignoreUpVec: boolean, isForceRel: boolean): void {
    ApplyForceToEntity(entity, forceFlags, pos.x, pos.y, pos.z, offX, offY, offZ, boneIndex, isDirectionRel, ignoreUpVec, isForceRel, false, false);
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
 * Hash: 0x18FF00FC7EFF559E | Since: 323 | API-Set: unknown
 */
export function applyForceToCenterOfMass(entity: number | IEntity, forceType: number, pos: Vector3, isDirectionRel: boolean, isForceRel: boolean): void {
    ApplyForceToEntityCenterOfMass(entity, forceType, pos.x, pos.y, pos.z, false, isDirectionRel, isForceRel, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5C48B75732C8456C | Since: 791 | API-Set: unknown
 */
export function attachBoneToEntityBone(entity1: number | IEntity, entity2: number | IEntity, boneIndex1: number, boneIndex2: number): void {
    AttachEntityBoneToEntityBone(entity1, entity2, boneIndex1, boneIndex2, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xFD1695C5D3B05439 | Since: 791 | API-Set: unknown
 */
export function attachBoneToEntityBoneYForward(entity1: number | IEntity, entity2: number | IEntity, boneIndex1: number, boneIndex2: number): void {
    AttachEntityBoneToEntityBonePhysically(entity1, entity2, boneIndex1, boneIndex2, false, false);
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
 * Hash: 0x6B9BBD38AB0796DF | Since: 323 | API-Set: unknown
 */
export function attachToEntity(entity1: number | IEntity, entity2: number | IEntity, boneIndex: number, pos: Vector3, rot: Vector3, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: number, fixedRot: boolean): void {
    AttachEntityToEntity(entity1, entity2, boneIndex, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, false, useSoftPinning, collision, isPed, vertexIndex, fixedRot, undefined);
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
 * Hash: 0xC3675780C92F90F9 | Since: 323 | API-Set: unknown
 */
export function attachToEntityPhysically(entity1: number | IEntity, entity2: number | IEntity, boneIndex1: number, boneIndex2: number, xPos1: number, yPos1: number, zPos1: number, xPos2: number, yPos2: number, zPos2: number, rot: Vector3, breakForce: number, fixedRot: boolean, collision: boolean): void {
    AttachEntityToEntityPhysically(entity1, entity2, boneIndex1, boneIndex2, xPos1, yPos1, zPos1, xPos2, yPos2, zPos2, rot.x, rot.y, rot.z, breakForce, fixedRot, false, collision, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x168A09D1B25B0BA4 | Since: 2944 | API-Set: unknown
 */
export function attachToEntityPhysicallyOverrideInverseMass(firstEntityIndex: number | IEntity, secondEntityIndex: number | IEntity, firstEntityBoneIndex: number, secondEntityBoneIndex: number, secondEntityOffsetX: number, secondEntityOffsetY: number, secondEntityOffsetZ: number, firstEntityOffsetX: number, firstEntityOffsetY: number, firstEntityOffsetZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, physicalStrength: number, constrainRotation: boolean, doInitialWarp: boolean, collideWithEntity: boolean, addInitialSeperation: boolean, rotOrder: number, invMassScaleA: number, invMassScaleB: number): void {
    Citizen.invokeNative('0x168A09D1B25B0BA4', firstEntityIndex, secondEntityIndex, firstEntityBoneIndex, secondEntityBoneIndex, secondEntityOffsetX, secondEntityOffsetY, secondEntityOffsetZ, firstEntityOffsetX, firstEntityOffsetY, firstEntityOffsetZ, vecRotationX, vecRotationY, vecRotationZ, physicalStrength, constrainRotation, doInitialWarp, collideWithEntity, addInitialSeperation, rotOrder, invMassScaleA, invMassScaleB);
}

/**
 * No comment provided
 * 
 * Hash: 0xA72CD9CA74A5ECBA | Since: 323 | API-Set: unknown
 */
export function clearLastDamageEntity(entity: number | IEntity): void {
    ClearEntityLastDamageEntity(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x150E808B375A385A | Since: 323 | API-Set: unknown
 */
export function createForcedObject(pos: Vector3, modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    CreateForcedObject(pos.x, pos.y, pos.z, undefined, modelHash, false);
}

/**
 * p5 = sets as true in scripts
 * Same as the comment for CREATE_MODEL_SWAP unless for some reason p5 affects it this only works with objects as well.
 * 
 * Network players do not see changes done with this.
 * 
 * Hash: 0x8A97BCA30A0CE478 | Since: 323 | API-Set: unknown
 */
export function createModelHide(pos: Vector3, radius: number, modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    CreateModelHide(pos.x, pos.y, pos.z, radius, modelHash, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A52AE588830BF7F | Since: 323 | API-Set: unknown
 */
export function createModelHideExcludingScriptObjects(pos: Vector3, radius: number, modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    CreateModelHideExcludingScriptObjects(pos.x, pos.y, pos.z, radius, modelHash, false);
}

/**
 * Only works with objects!
 * 
 * Hash: 0x92C47782FDA8B2A3 | Since: 323 | API-Set: unknown
 */
export function createModelSwap(pos: Vector3, radius: number, originalModel: number | string, newModel: number | string): void {
    if (typeof originalModel === 'string') originalModel = GetHashKey(originalModel)
    if (typeof newModel === 'string') newModel = GetHashKey(newModel)
    CreateModelSwap(pos.x, pos.y, pos.z, radius, originalModel, newModel, false);
}

/**
 * Deletes the specified entity, then sets the handle pointed to by the pointer to NULL.
 * 
 * Hash: 0xAE3CBE5BF394C9C9 | Since: 323 | API-Set: unknown
 */
export function deleteEntity(entity: number | IEntity): void {
    DeleteEntity(entity);
}

/**
 * If `collision` is set to true, both entities won't collide with the other until the distance between them is above 4 meters.
 * Set `dynamic` to true to keep velocity after dettaching
 * 
 * Hash: 0x961AC54BF0613F5D | Since: 323 | API-Set: unknown
 */
export function detach(entity: number | IEntity, dynamic: boolean, collision: boolean): void {
    DetachEntity(entity, dynamic, collision);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDE6DF5AE89981D2 | Since: 323 | API-Set: unknown
 */
export function doesBelongToThisScript(entity: number | IEntity): boolean {
    return DoesEntityBelongToThisScript(entity, false);
}

/**
 * Checks whether an entity exists in the game world.
 * 
 * Hash: 0x7239B21A38F536BA | Since: 323 | API-Set: unknown
 */
export function doesExist(entity: number | IEntity): boolean {
    return DoesEntityExist(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x2158E81A6AF65EA9 | Since: 2699 | API-Set: unknown
 */
export function doesHaveAnimDirector(entity: number | IEntity): boolean {
    return DoesEntityHaveAnimDirector(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x060D6E96F8B8E48D | Since: 323 | API-Set: unknown
 */
export function doesHaveDrawable(entity: number | IEntity): boolean {
    return DoesEntityHaveDrawable(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA95EA3317CC5064 | Since: 323 | API-Set: unknown
 */
export function doesHavePhysics(entity: number | IEntity): boolean {
    return DoesEntityHavePhysics(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x764EB96874EFFDC1 | Since: 2699 | API-Set: unknown
 */
export function doesHaveSkeleton(entity: number | IEntity): boolean {
    return DoesEntityHaveSkeletonData(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x6CE177D014502E8A | Since: 877 | API-Set: unknown
 */
export function enableBulletCollision(entity: number | IEntity): void {
    EnableEntityUnk(entity);
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
 * Hash: 0x07F1BE2BCCAA27A7 | Since: 323 | API-Set: unknown
 */
export function findAnimEventPhase(animDictionary: string, animName: string): [boolean, any, any] {
    return FindAnimEventPhase(animDictionary, animName, undefined);
}

/**
 * Based on carmod_shop script decompile this takes a vehicle parameter. It is called when repair is done on initial enter.
 * 
 * Hash: 0x40FDEDB72F8293B2 | Since: 323 | API-Set: unknown
 */
export function forceAiAndAnimationUpdate(entity: number | IEntity): void {
    ForceEntityAiAndAnimationUpdate(entity);
}

/**
 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using SET_ENTITY_COORDS.
 * 
 * Hash: 0x428CA6DBD1094446 | Since: 323 | API-Set: unknown
 */
export function freezePosition(entity: number | IEntity, toggle: boolean): void {
    FreezeEntityPosition(entity, toggle);
}

/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0xFEDDF04D62B8D790 | Since: 323 | API-Set: unknown
 */
export function getAnimDuration(animDict: string, animName: string): number {
    return GetAnimDuration(animDict, animName);
}

/**
 * No comment provided
 * 
 * Hash: 0xE465D4AB7CA6AE72 | Since: 323 | API-Set: unknown
 */
export function getCollisionNormalOfLastHitFor(entity: number | IEntity): Vector3 {
    return new Vector3(GetCollisionNormalOfLastHitForEntity(entity));
}

/**
 * No comment provided
 * 
 * Hash: 0x5A47B3B5E63E94C6 | Since: 323 | API-Set: unknown
 */
export function getAlpha(entity: number | IEntity): number {
    return GetEntityAlpha(entity);
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
 * Hash: 0x346D81500D088F42 | Since: 323 | API-Set: unknown
 */
export function getAnimCurrentTime(entity: number | IEntity, animDict: string, animName: string): number {
    return GetEntityAnimCurrentTime(entity, animDict, animName);
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
 * Hash: 0x50BD2730B191E360 | Since: 323 | API-Set: unknown
 */
export function getAnimTotalTime(entity: number | IEntity, animDict: string, animName: string): number {
    return GetEntityAnimTotalTime(entity, animDict, animName);
}

/**
 * No comment provided
 * 
 * Hash: 0x48C2BED9180FE123 | Since: 323 | API-Set: unknown
 */
export function getAttachedTo(entity: number | IEntity): number {
    return GetEntityAttachedTo(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xB328DCC3A3AA401B | Since: 791 | API-Set: unknown
 */
export function getBoneCount(entity: number | IEntity): number {
    return GetEntityBoneCount(entity);
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
 * Hash: 0xFB71170B7E76ACBA | Since: 323 | API-Set: unknown
 */
export function getBoneIndexByName(entity: number | IEntity, boneName: string): number {
    return GetEntityBoneIndexByName(entity, boneName);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF1247CC86961FD6 | Since: 2802 | API-Set: unknown
 */
export function getBoneObjectPostion(entity: number | IEntity, boneIndex: number): Vector3 {
    return new Vector3(Citizen.invokeNative('0xCF1247CC86961FD6', entity, boneIndex));
}

/**
 * Gets the local rotation of the specified bone of the specified entity.
 * 
 * Hash: 0xBD8D32550E5CEBFE | Since: 1734 | API-Set: unknown
 */
export function getBoneObjectRotation(entity: number | IEntity, boneIndex: number): Vector3 {
    return new Vector3(GetEntityBoneRotationLocal(entity, boneIndex));
}

/**
 * Gets the world position of the specified bone of the specified entity.
 * 
 * Hash: 0x46F8696933A63C9B | Since: 877 | API-Set: unknown
 */
export function getBonePostion(entity: number | IEntity, boneIndex: number): Vector3 {
    return new Vector3(GetEntityBonePosition2(entity, boneIndex));
}

/**
 * Gets the world rotation of the specified bone of the specified entity.
 * 
 * Hash: 0xCE6294A232D03786 | Since: 791 | API-Set: unknown
 */
export function getBoneRotation(entity: number | IEntity, boneIndex: number): Vector3 {
    return new Vector3(GetEntityBoneRotation(entity, boneIndex));
}

/**
 * No comment provided
 * 
 * Hash: 0xD95CC5D2AB15A09F | Since: 757 | API-Set: unknown
 */
export function getCanBeDamaged(entity: number | IEntity): boolean {
    return GetEntityCanBeDamaged(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xCCF1E97BEFDAE480 | Since: 323 | API-Set: unknown
 */
export function getCollisionDisabled(entity: number | IEntity): boolean {
    return GetEntityCollisionDisabled(entity);
}

/**
 * Gets the current coordinates for a specified entity.
 * `entity` = The entity to get the coordinates from.
 * `alive` = Unused by the game, potentially used by debug builds of GTA in order to assert whether or not an entity was alive.
 * 
 * Hash: 0x3FEF770D40960D5A | Since: 323 | API-Set: unknown
 */
export function getCoords(entity: number | IEntity, alive: boolean): Vector3 {
    return new Vector3(GetEntityCoords(entity, alive));
}

/**
 * Gets the entity's forward vector.
 * 
 * Hash: 0x0A794A5A57F8DF91 | Since: 323 | API-Set: unknown
 */
export function getForwardVector(entity: number | IEntity): Vector3 {
    return new Vector3(GetEntityForwardVector(entity));
}

/**
 * Gets the X-component of the entity's forward vector.
 * 
 * Hash: 0x8BB4EF4214E0E6D5 | Since: 323 | API-Set: unknown
 */
export function getForwardX(entity: number | IEntity): number {
    return GetEntityForwardX(entity);
}

/**
 * Gets the Y-component of the entity's forward vector.
 * 
 * Hash: 0x866A4A5FAE349510 | Since: 323 | API-Set: unknown
 */
export function getForwardY(entity: number | IEntity): number {
    return GetEntityForwardY(entity);
}

/**
 * Returns the heading of the entity in degrees. Also know as the "Yaw" of an entity.
 * 
 * Hash: 0xE83D4F9BA2A38914 | Since: 323 | API-Set: unknown
 */
export function getHeading(entity: number | IEntity): number {
    return GetEntityHeading(entity);
}

/**
 * Gets the heading of the entity physics in degrees, which tends to be more accurate than just "GET_ENTITY_HEADING". This can be clearly seen while, for example, ragdolling a ped/player.
 * 
 * NOTE: The name and description of this native are based on independent research. If you find this native to be more suitable under a different name and/or described differently, please feel free to do so.
 * 
 * Hash: 0x846BF6291198A71E | Since: 323 | API-Set: unknown
 */
export function getHeadingFromEulers(entity: number | IEntity): number {
    return GetEntityHeadingFromEulers(entity);
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
 * Hash: 0xEEF059FAD016D209 | Since: 323 | API-Set: unknown
 */
export function getHealth(entity: number | IEntity): number {
    return GetEntityHealth(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A504562485944DD | Since: 323 | API-Set: unknown
 */
export function getHeight(entity: number | IEntity, pos: Vector3, atTop: boolean, inWorldCoords: boolean): number {
    return GetEntityHeight(entity, pos.x, pos.y, pos.z, atTop, inWorldCoords);
}

/**
 * Return height (z-dimension) above ground.
 * Example: The pilot in a titan plane is 1.844176 above ground.
 * 
 * How can i convert it to meters?
 * Everything seems to be in meters, probably this too.
 * 
 * Hash: 0x1DD55701034110E5 | Since: 323 | API-Set: unknown
 */
export function getHeightAboveGround(entity: number | IEntity): number {
    return GetEntityHeightAboveGround(entity);
}

/**
 * Returns the LOD distance of an entity.
 * 
 * Hash: 0x4159C2762B5791D6 | Since: 323 | API-Set: unknown
 */
export function getLodDist(entity: number | IEntity): number {
    return GetEntityLodDist(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xECB2FC7235A7D137 | Since: 323 | API-Set: unknown
 */
export function getMatrix(entity: number | IEntity): [Vector3, Vector3, Vector3, Vector3] {
    return GetEntityMatrix(entity);
}

/**
 * Return an integer value of entity's maximum health.
 * 
 * Example:
 * - Player = 200
 * - Ped = 150
 * 
 * Hash: 0x15D757606D170C3C | Since: 323 | API-Set: unknown
 */
export function getMaxHealth(entity: number | IEntity): number {
    return GetEntityMaxHealth(entity);
}

/**
 * Returns the model hash from the entity
 * 
 * Hash: 0x9F47B058362C84B5 | Since: 323 | API-Set: unknown
 */
export function getModel(entity: number | IEntity): number {
    return GetEntityModel(entity);
}

/**
 * Gets the handle of an entity with a specific model hash attached to another entity, such as an object attached to a ped.
 * This native does not appear to have anything to do with pickups as in scripts it is used with objects.
 * 
 * Example from fm_mission_controller_2020.c:
 * 
 * `iVar8 = ENTITY::GET_ENTITY_OF_TYPE_ATTACHED_TO_ENTITY(bParam0->f_9, joaat("p_cs_clipboard"));`
 * 
 * Hash: 0x1F922734E259BD26 | Since: 1180 | API-Set: unknown
 */
export function getOfTypeAttachedToEntity(entity: number | IEntity, modelHash: number | string): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return GetEntityPickup(entity, modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xD45DC2893621E1FE | Since: 323 | API-Set: unknown
 */
export function getPitch(entity: number | IEntity): number {
    return GetEntityPitch(entity);
}

/**
 * A population type, from the following enum: https://alloc8or.re/gta5/doc/enums/ePopulationType.txt
 * 
 * Hash: 0xF6F5161F4534EDFF | Since: 323 | API-Set: unknown
 */
export function getPopulationType(entity: number | IEntity): number {
    return GetEntityPopulationType(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xBE8CD9BE829BBEBF | Since: 1604 | API-Set: unknown
 */
export function getProofs(entity: number | IEntity): [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean] {
    return GetEntityProofs(entity);
}

/**
 * w is the correct parameter name!
 * 
 * Hash: 0x7B3703D2D32DFA18 | Since: 323 | API-Set: unknown
 */
export function getQuaternion(entity: number | IEntity): [number, number, number, number] {
    return GetEntityQuaternion(entity);
}

/**
 * Displays the current ROLL axis of the entity [-180.0000/180.0000+]
 * (Sideways Roll) such as a vehicle tipped on its side
 * 
 * Hash: 0x831E0242595560DF | Since: 323 | API-Set: unknown
 */
export function getRoll(entity: number | IEntity): number {
    return GetEntityRoll(entity);
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
 * Hash: 0xAFBD61CC738D9EB9 | Since: 323 | API-Set: unknown
 */
export function getRotation(entity: number | IEntity, rotationOrder: number): Vector3 {
    return new Vector3(GetEntityRotation(entity, rotationOrder));
}

/**
 * No comment provided
 * 
 * Hash: 0x213B91045D09B983 | Since: 323 | API-Set: unknown
 */
export function getRotationVelocity(entity: number | IEntity): Vector3 {
    return new Vector3(GetEntityRotationVelocity(entity));
}

/**
 * Returns the name of the script that owns/created the entity or nullptr. Second parameter is unused, can just be a nullptr.
 * 
 * Hash: 0xA6E9C38DB51D7748 | Since: 323 | API-Set: unknown
 */
export function getScript(entity: number | IEntity): [string, number] {
    return GetEntityScript(entity);
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
 * Hash: 0xD5037BA82E12416F | Since: 323 | API-Set: unknown
 */
export function getSpeed(entity: number | IEntity): number {
    return GetEntitySpeed(entity);
}

/**
 * Relative can be used for getting speed relative to the frame of the vehicle, to determine for example, if you are going in reverse (-y speed) or not (+y speed).
 * 
 * Hash: 0x9A8D700A51CB7B0D | Since: 323 | API-Set: unknown
 */
export function getSpeedVector(entity: number | IEntity, relative: boolean): Vector3 {
    return new Vector3(GetEntitySpeedVector(entity, relative));
}

/**
 * Get how much of the entity is submerged.  1.0f is whole entity.
 * 
 * Hash: 0xE81AFC1BC4CC41CE | Since: 323 | API-Set: unknown
 */
export function getSubmergedLevel(entity: number | IEntity): number {
    return GetEntitySubmergedLevel(entity);
}

/**
 * Returns:
 * 0 = no entity
 * 1 = ped
 * 2 = vehicle
 * 3 = object
 * 
 * Hash: 0x8ACD366038D14505 | Since: 323 | API-Set: unknown
 */
export function getType(entity: number | IEntity): number {
    return GetEntityType(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x95EED5A694951F9F | Since: 323 | API-Set: unknown
 */
export function getUprightValue(entity: number | IEntity): number {
    return GetEntityUprightValue(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x4805D2B1D8CF94A9 | Since: 323 | API-Set: unknown
 */
export function getVelocity(entity: number | IEntity): Vector3 {
    return new Vector3(GetEntityVelocity(entity));
}

/**
 * No comment provided
 * 
 * Hash: 0x5C3D0A935F535C4C | Since: 323 | API-Set: unknown
 */
export function getLastMaterialHitBy(entity: number | IEntity): number {
    return GetLastMaterialHitByEntity(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFBD7052D65BE0FF | Since: 2944 | API-Set: unknown
 */
export function getNearestParticipantTo(entity: number | IEntity): number {
    return Citizen.invokeNative('0xFFBD7052D65BE0FF', entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x7196842CB375CDB3 | Since: 323 | API-Set: unknown
 */
export function getNearestPlayerTo(entity: number | IEntity): number | string {
    return GetNearestPlayerToEntity(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x4DC9A62F844D9337 | Since: 323 | API-Set: unknown
 */
export function getNearestPlayerToOnTeam(entity: number | IEntity, team: number): number | string {
    return GetNearestPlayerToEntityOnTeam(entity, team);
}

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * Hash: 0xD7E3B9735C0F89D6 | Since: 323 | API-Set: unknown
 */
export function getObjectIndexFromIndex(entity: number | IEntity): number {
    return GetObjectIndexFromEntityIndex(entity);
}

/**
 * Converts world coords (posX - Z) to coords relative to the entity
 * 
 * Example:
 * posX is given as 50
 * entity's x coord is 40
 * the returned x coord will then be 10 or -10, not sure haven't used this in a while (think it is 10 though).
 * 
 * Hash: 0x2274BC1C4885E333 | Since: 323 | API-Set: unknown
 */
export function getOffsetFromGivenWorldCoords(entity: number | IEntity, pos: Vector3): Vector3 {
    return new Vector3(GetOffsetFromEntityGivenWorldCoords(entity, pos.x, pos.y, pos.z));
}

/**
 * Offset values are relative to the entity.
 * 
 * x = left/right
 * y = forward/backward
 * z = up/down
 * 
 * Hash: 0x1899F328B0E12848 | Since: 323 | API-Set: unknown
 */
export function getOffsetFromInWorldCoords(entity: number | IEntity, offsetX: number, offsetY: number, offsetZ: number): Vector3 {
    return new Vector3(GetOffsetFromEntityInWorldCoords(entity, offsetX, offsetY, offsetZ));
}

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * Hash: 0x04A2A40C73395041 | Since: 323 | API-Set: unknown
 */
export function getPedIndexFromIndex(entity: number | IEntity): number {
    return GetPedIndexFromEntityIndex(entity);
}

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * Hash: 0x4B53F92932ADFAC0 | Since: 323 | API-Set: unknown
 */
export function getVehicleIndexFromIndex(entity: number | IEntity): number {
    return GetVehicleIndexFromEntityIndex(entity);
}

/**
 * Returns the coordinates of an entity-bone.
 * 
 * Hash: 0x44A8FCB8ED227738 | Since: 323 | API-Set: unknown
 */
export function getWorldPositionOfBone(entity: number | IEntity, boneIndex: number): Vector3 {
    return new Vector3(GetWorldPositionOfEntityBone(entity, boneIndex));
}

/**
 * `if (ENTITY::HAS_ANIM_EVENT_FIRED(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("CreateObject")))`
 * 
 * Hash: 0xEAF4CD9EA3E7E922 | Since: 323 | API-Set: unknown
 */
export function hasAnimEventFired(entity: number | IEntity, actionHash: number | string): boolean {
    if (typeof actionHash === 'string') actionHash = GetHashKey(actionHash)
    return HasAnimEventFired(entity, actionHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xE9676F61BC0B3321 | Since: 323 | API-Set: unknown
 */
export function hasCollisionLoadedAround(entity: number | IEntity): boolean {
    return HasCollisionLoadedAroundEntity(entity);
}

/**
 * P3 is always 3 as far as i cant tell
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0x20B711662962B472 | Since: 323 | API-Set: unknown
 */
export function hasAnimFinished(entity: number | IEntity, animDict: string, animName: string): boolean {
    return HasEntityAnimFinished(entity, animDict, animName, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x95EB9964FF5C5C65 | Since: 323 | API-Set: unknown
 */
export function hasBeenDamagedByAnyObject(entity: number | IEntity): boolean {
    return HasEntityBeenDamagedByAnyObject(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x605F5A140F202491 | Since: 323 | API-Set: unknown
 */
export function hasBeenDamagedByAnyPed(entity: number | IEntity): boolean {
    return HasEntityBeenDamagedByAnyPed(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFD5033FDBA0A9C8 | Since: 323 | API-Set: unknown
 */
export function hasBeenDamagedByAnyVehicle(entity: number | IEntity): boolean {
    return HasEntityBeenDamagedByAnyVehicle(entity);
}

/**
 * Entity 1 = Victim
 * Entity 2 = Attacker
 * 
 * p2 seems to always be 1
 * 
 * Hash: 0xC86D67D52A707CF8 | Since: 323 | API-Set: unknown
 */
export function hasBeenDamagedByEntity(entity1: number | IEntity, entity2: number | IEntity): boolean {
    return HasEntityBeenDamagedByEntity(entity1, entity2, false);
}

/**
 * traceType is always 17 in the scripts.
 * 
 * There is other codes used for traceType:
 * 19 - in jewelry_prep1a
 * 126 - in am_hunt_the_beast
 * 256 & 287 - in fm_mission_controller
 * 
 * Hash: 0xFCDFF7B72D23A1AC | Since: 323 | API-Set: unknown
 */
export function hasClearLosToEntity(entity1: number | IEntity, entity2: number | IEntity, traceType: number): boolean {
    return HasEntityClearLosToEntity(entity1, entity2, traceType);
}

/**
 * No comment provided
 * 
 * Hash: 0x394BDE2A7BBA031E | Since: 1868 | API-Set: unknown
 */
export function hasClearLosToEntityAdjustForCover(entity1: number | IEntity, entity2: number | IEntity, traceType: number): boolean {
    return HasEntityClearLosToEntity2(entity1, entity2, traceType);
}

/**
 * Has the entity1 got a clear line of sight to the other entity2 from the direction entity1 is facing.
 * This is one of the most CPU demanding BOOL natives in the game; avoid calling this in things like nested for-loops
 * 
 * Hash: 0x0267D00AF114F17A | Since: 323 | API-Set: unknown
 */
export function hasClearLosToEntityInFront(entity1: number | IEntity, entity2: number | IEntity): boolean {
    return HasEntityClearLosToEntityInFront(entity1, entity2);
}

/**
 * Called on tick.
 * Tested with vehicles, returns true whenever the vehicle is touching any entity.
 * 
 * Note: for vehicles, the wheels can touch the ground and it will still return false, but if the body of the vehicle touches the ground, it will return true.
 * 
 * Hash: 0x8BAD02F0368D9E14 | Since: 323 | API-Set: unknown
 */
export function hasCollidedWithAnything(entity: number | IEntity): boolean {
    return HasEntityCollidedWithAnything(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x731EC8A916BD11A1 | Since: 323 | API-Set: unknown
 */
export function isAn(handle: number): boolean {
    return IsAnEntity(handle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D68C8FD0FACA94E | Since: 323 | API-Set: unknown
 */
export function isAnObject(entity: number | IEntity): boolean {
    return IsEntityAnObject(entity);
}

/**
 * Whether the entity is attached to any other entity.
 * 
 * Hash: 0xB346476EF1A64897 | Since: 323 | API-Set: unknown
 */
export function isAttached(entity: number | IEntity): boolean {
    return IsEntityAttached(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF511840CEEDE0CC | Since: 323 | API-Set: unknown
 */
export function isAttachedToAnyObject(entity: number | IEntity): boolean {
    return IsEntityAttachedToAnyObject(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xB1632E9A5F988D11 | Since: 323 | API-Set: unknown
 */
export function isAttachedToAnyPed(entity: number | IEntity): boolean {
    return IsEntityAttachedToAnyPed(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x26AA915AD89BFB4B | Since: 323 | API-Set: unknown
 */
export function isAttachedToAnyVehicle(entity: number | IEntity): boolean {
    return IsEntityAttachedToAnyVehicle(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xEFBE71898A993728 | Since: 323 | API-Set: unknown
 */
export function isAttachedToEntity(_from: number | IEntity, to: number | IEntity): boolean {
    return IsEntityAttachedToEntity(_from, to);
}

/**
 * Checks if entity is within x/y/zSize distance of x/y/z.
 * 
 * Last three are unknown ints, almost always p7 = 0, p8 = 1, p9 = 0
 * 
 * Hash: 0x20B60995556D004F | Since: 323 | API-Set: unknown
 */
export function isAtCoord(entity: number | IEntity, pos: Vector3, xSize: number, ySize: number, zSize: number): boolean {
    return IsEntityAtCoord(entity, pos.x, pos.y, pos.z, xSize, ySize, zSize, false, false, 0);
}

/**
 * Checks if entity1 is within the box defined by x/y/zSize of entity2.
 * 
 * Last three parameters are almost alwasy p5 = 0, p6 = 1, p7 = 0
 * 
 * Hash: 0x751B70C3D034E187 | Since: 323 | API-Set: unknown
 */
export function isAtEntity(entity1: number | IEntity, entity2: number | IEntity, xSize: number, ySize: number, zSize: number): boolean {
    return IsEntityAtEntity(entity1, entity2, xSize, ySize, zSize, false, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A7B270912999B3C | Since: 323 | API-Set: unknown
 */
export function isAMissionEntity(entity: number | IEntity): boolean {
    return IsEntityAMissionEntity(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x524AC5ECEA15343E | Since: 323 | API-Set: unknown
 */
export function isAPed(entity: number | IEntity): boolean {
    return IsEntityAPed(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x6AC7003FA6E5575E | Since: 323 | API-Set: unknown
 */
export function isAVehicle(entity: number | IEntity): boolean {
    return IsEntityAVehicle(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F9532F3B5CC2551 | Since: 323 | API-Set: unknown
 */
export function isDead(entity: number | IEntity): boolean {
    return IsEntityDead(entity, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x886E37EC497200B6 | Since: 323 | API-Set: unknown
 */
export function isInAir(entity: number | IEntity): boolean {
    return IsEntityInAir(entity);
}

/**
 * `p8` is a debug flag invoking functions in the same path as ``DRAW_MARKER``
 * `p10` is some entity flag check, also used in `IS_ENTITY_AT_ENTITY`, `IS_ENTITY_IN_AREA`, and `IS_ENTITY_AT_COORD`.
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * 
 * Hash: 0x51210CED3DA1C78A | Since: 323 | API-Set: unknown
 */
export function isInAngledArea(entity: number | IEntity, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, debug: boolean, includeZ: boolean): boolean {
    return IsEntityInAngledArea(entity, x1, y1, z1, x2, y2, z2, width, debug, includeZ, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x54736AA40E271165 | Since: 323 | API-Set: unknown
 */
export function isInArea(entity: number | IEntity, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean {
    return IsEntityInArea(entity, x1, y1, z1, x2, y2, z2, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCFB0A0D8EDD145A3 | Since: 323 | API-Set: unknown
 */
export function isInWater(entity: number | IEntity): boolean {
    return IsEntityInWater(entity);
}

/**
 * Full list of zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/zones.json
 * 
 * Hash: 0xB6463CF6AF527071 | Since: 323 | API-Set: unknown
 */
export function isInZone(entity: number | IEntity, zone: string): boolean {
    return IsEntityInZone(entity, zone);
}

/**
 * No comment provided
 * 
 * Hash: 0xE31C2C72B8692B64 | Since: 323 | API-Set: unknown
 */
export function isOccluded(entity: number | IEntity): boolean {
    return IsEntityOccluded(entity);
}

/**
 * Returns true if the entity is in between the minimum and maximum values for the 2d screen coords.
 * This means that it will return true even if the entity is behind a wall for example, as long as you're looking at their location.
 * Chipping
 * 
 * Hash: 0xE659E47AF827484B | Since: 323 | API-Set: unknown
 */
export function isOnScreen(entity: number | IEntity): boolean {
    return IsEntityOnScreen(entity);
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
 * Hash: 0x1F0B79228E461EC9 | Since: 323 | API-Set: unknown
 */
export function isPlayingAnim(entity: number | IEntity, animDict: string, animName: string, taskFlag: number): boolean {
    return IsEntityPlayingAnim(entity, animDict, animName, taskFlag);
}

/**
 * `a static ped will not react to natives like "APPLY_FORCE_TO_ENTITY" or "SET_ENTITY_VELOCITY" and oftentimes will not react to task-natives like "TASK::TASK_COMBAT_PED". The only way I know of to make one of these peds react is to ragdoll them (or sometimes to use CLEAR_PED_TASKS_IMMEDIATELY(). Static peds include almost all far-away peds, beach-combers, peds in certain scenarios, peds crossing a crosswalk, peds walking to get back into their cars, and others. If anyone knows how to make a ped non-static without ragdolling them, please edit this with the solution.`
 * 
 * Hash: 0x1218E6886D3D8327 | Since: 323 | API-Set: unknown
 */
export function isStatic(entity: number | IEntity): boolean {
    return IsEntityStatic(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x17FFC1B2BA35A494 | Since: 323 | API-Set: unknown
 */
export function isTouchingEntity(entity: number | IEntity, targetEntity: number | IEntity): boolean {
    return IsEntityTouchingEntity(entity, targetEntity);
}

/**
 * No comment provided
 * 
 * Hash: 0x0F42323798A58C8C | Since: 323 | API-Set: unknown
 */
export function isTouchingModel(entity: number | IEntity, modelHash: number | string): boolean {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return IsEntityTouchingModel(entity, modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x5333F526F6AB19AA | Since: 323 | API-Set: unknown
 */
export function isUpright(entity: number | IEntity, angle: number): boolean {
    return IsEntityUpright(entity, angle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1DBD58820FA61D71 | Since: 323 | API-Set: unknown
 */
export function isUpsidedown(entity: number | IEntity): boolean {
    return IsEntityUpsidedown(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x47D6F43D77935C75 | Since: 323 | API-Set: unknown
 */
export function isVisible(entity: number | IEntity): boolean {
    return IsEntityVisible(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xD796CB5BA8F20E32 | Since: 323 | API-Set: unknown
 */
export function isVisibleToScript(entity: number | IEntity): boolean {
    return IsEntityVisibleToScript(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xD05BFF0C0A12C68F | Since: 323 | API-Set: unknown
 */
export function isWaitingForWorldCollision(entity: number | IEntity): boolean {
    return IsEntityWaitingForWorldCollision(entity);
}

/**
 * delta and bitset are guessed fields. They are based on the fact that most of the calls have 0 or nil field types passed in.
 * 
 * The only time bitset has a value is 0x4000 and the only time delta has a value is during stealth with usually <1.0f values.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0x7FB218262B810701 | Since: 323 | API-Set: unknown
 */
export function playAnim(entity: number | IEntity, animName: string, animDict: string, loop: boolean, stayInAnim: boolean, delta: number, bitset: any): boolean {
    return PlayEntityAnim(entity, animName, animDict, 0, loop, stayInAnim, false, delta, bitset);
}

/**
 * p4 and p7 are usually 1000.0f.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0xC77720A12FE14A86 | Since: 323 | API-Set: unknown
 */
export function playSynchronizedAnim(entity: number | IEntity, syncedScene: number, animation: string, propName: string): boolean {
    return PlaySynchronizedEntityAnim(entity, syncedScene, animation, propName, 0, 0, undefined, 0);
}

/**
 * p6,p7 probably animname and animdict
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0xB9C54555ED30FBC4 | Since: 323 | API-Set: unknown
 */
export function playSynchronizedMapAnim(x1: number, y1: number, z1: number, x2: number, y2: any, z2: number): boolean {
    return PlaySynchronizedMapEntityAnim(x1, y1, z1, x2, y2, z2, undefined, undefined, 0, 0, undefined, 0);
}

/**
 * Called to update entity attachments.
 * 
 * Hash: 0xF4080490ADC51C6F | Since: 323 | API-Set: unknown
 */
export function processAttachments(entity: number | IEntity): void {
    ProcessEntityAttachments(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x61B6775E83C0DB6F | Since: 323 | API-Set: unknown
 */
export function removeForcedObject(pos: Vector3, modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    RemoveForcedObject(pos.x, pos.y, pos.z, 0, modelHash);
}

/**
 * This native makes entities visible that are hidden by the native CREATE_MODEL_HIDE.
 * p5 should be false, true does nothing
 * 
 * Hash: 0xD9E3006FB3CBD765 | Since: 323 | API-Set: unknown
 */
export function removeModelHide(pos: Vector3, radius: number, modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    RemoveModelHide(pos.x, pos.y, pos.z, radius, modelHash, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x033C0F9A64E229AE | Since: 323 | API-Set: unknown
 */
export function removeModelSwap(pos: Vector3, radius: number, originalModel: number | string, newModel: number | string): void {
    if (typeof originalModel === 'string') originalModel = GetHashKey(originalModel)
    if (typeof newModel === 'string') newModel = GetHashKey(newModel)
    RemoveModelSwap(pos.x, pos.y, pos.z, radius, originalModel, newModel, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9B1E824FFBB7027A | Since: 323 | API-Set: unknown
 */
export function resetAlpha(entity: number | IEntity): void {
    ResetEntityAlpha(entity);
}

/**
 * Similar to RESET_ENTITY_ALPHA
 * 
 * Hash: 0x490861B88F4FD846 | Since: 944 | API-Set: unknown
 */
export function resetPickupGlow(entity: number | IEntity): void {
    Citizen.invokeNative('0x490861B88F4FD846', entity);
}

/**
 * p1 is always set to 1
 * 
 * Hash: 0x36F32DE87082343E | Since: 1011 | API-Set: unknown
 */
export function setAllowMigrateToSpectator(entity: number | IEntity): void {
    Citizen.invokeNative('0x36F32DE87082343E', entity, undefined);
}

/**
 * p1 always false.
 * 
 * Hash: 0xE12ABE5E3A389A6C | Since: 323 | API-Set: unknown
 */
export function setCanAutoVaultOn(entity: number | IEntity, toggle: boolean): void {
    SetCanAutoVaultOnEntity(entity, toggle);
}

/**
 * p1 always false.
 * 
 * Hash: 0xA80AE305E0A3044F | Since: 323 | API-Set: unknown
 */
export function setCanClimbOn(entity: number | IEntity, toggle: boolean): void {
    SetCanClimbOnEntity(entity, toggle);
}

/**
 * skin - everything alpha except skin
 * Set entity alpha level. Ranging from 0 to 255 but chnages occur after every 20 percent (after every 51).
 * 
 * Hash: 0x44A0870B7E92D7C0 | Since: 323 | API-Set: unknown
 */
export function setAlpha(entity: number | IEntity, alphaLevel: number, skin: boolean): void {
    SetEntityAlpha(entity, alphaLevel, skin);
}

/**
 * No comment provided
 * 
 * Hash: 0xACAD101E1FB66689 | Since: 323 | API-Set: unknown
 */
export function setAlwaysPrerender(entity: number | IEntity, toggle: boolean): void {
    SetEntityAlwaysPrerender(entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8339643499D1222E | Since: 2372 | API-Set: unknown
 */
export function setAngularVelocity(entity: number | IEntity, pos: Vector3): void {
    SetEntityAngularVelocity(entity, pos.x, pos.y, pos.z);
}

/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0x4487C259F0F70977 | Since: 323 | API-Set: unknown
 */
export function setAnimCurrentTime(entity: number | IEntity, animDictionary: string, animName: string, time: number): void {
    SetEntityAnimCurrentTime(entity, animDictionary, animName, time);
}

/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0x28D1A16553C51776 | Since: 323 | API-Set: unknown
 */
export function setAnimSpeed(entity: number | IEntity, animDictionary: string, animName: string, speedMultiplier: number): void {
    SetEntityAnimSpeed(entity, animDictionary, animName, speedMultiplier);
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
 * Hash: 0xAD738C3085FE7E11 | Since: 323 | API-Set: unknown
 */
export function setAsMissionEntity(entity: number | IEntity): void {
    SetEntityAsMissionEntity(entity, false, false);
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
 * Hash: 0xB736A491E64A32CF | Since: 323 | API-Set: unknown
 */
export function setAsNoLongerNeeded(entity: number | IEntity): void {
    SetEntityAsNoLongerNeeded(entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x68B562E124CC0AEF | Since: 1180 | API-Set: unknown
 */
export function setCantCauseCollisionDamagedEntity(entity1: number | IEntity, entity2: number | IEntity): void {
    Citizen.invokeNative('0x68B562E124CC0AEF', entity1, entity2);
}

/**
 * No comment provided
 * 
 * Hash: 0x1760FFA8AB074D66 | Since: 323 | API-Set: unknown
 */
export function setCanBeDamaged(entity: number | IEntity, toggle: boolean): void {
    SetEntityCanBeDamaged(entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE22D8FDE858B8119 | Since: 323 | API-Set: unknown
 */
export function setCanBeDamagedByRelationshipGroup(entity: number | IEntity, bCanBeDamaged: boolean, relGroup: number): void {
    SetEntityCanBeDamagedByRelationshipGroup(entity, bCanBeDamaged, relGroup);
}

/**
 * Sets whether the entity can be targeted without being in line-of-sight.
 * 
 * Hash: 0xD3997889736FD899 | Since: 323 | API-Set: unknown
 */
export function setCanBeTargetedWithoutLos(entity: number | IEntity, toggle: boolean): void {
    SetEntityCanBeTargetedWithoutLos(entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB17BC6453F6CF5AC | Since: 944 | API-Set: unknown
 */
export function setCanOnlyBeDamagedByEntity(entity1: number | IEntity, entity2: number | IEntity): void {
    Citizen.invokeNative('0xB17BC6453F6CF5AC', entity1, entity2);
}

/**
 * No comment provided
 * 
 * Hash: 0x352E2B5CF420BF3B | Since: 573 | API-Set: unknown
 */
export function setCanOnlyBeDamagedByScriptParticipants(entity: number | IEntity, toggle: boolean): void {
    Citizen.invokeNative('0x352E2B5CF420BF3B', entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A9205C1B9EE827F | Since: 323 | API-Set: unknown
 */
export function setCollision(entity: number | IEntity, toggle: boolean, keepPhysics: boolean): void {
    SetEntityCollision(entity, toggle, keepPhysics);
}

/**
 * No comment provided
 * 
 * Hash: 0x9EBC85ED0FFFE51C | Since: 323 | API-Set: unknown
 */
export function setCompletelyDisableCollision(entity: number | IEntity, toggle: boolean, keepPhysics: boolean): void {
    SetEntityCompletelyDisableCollision(entity, toggle, keepPhysics);
}

/**
 * p7 is always 1 in the scripts. Set to 1, an area around the destination coords for the moved entity is cleared from other entities.
 * 
 * Often ends with 1, 0, 0, 1); in the scripts. It works.
 * 
 * Axis - Invert Axis Flags
 * 
 * Hash: 0x06843DA7060A026B | Since: 323 | API-Set: unknown
 */
export function setCoords(entity: number | IEntity, pos: Vector3, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void {
    SetEntityCoords(entity, pos.x, pos.y, pos.z, xAxis, yAxis, zAxis, clearArea);
}

/**
 * Axis - Invert Axis Flags
 * 
 * Hash: 0x239A3351AC1DA385 | Since: 323 | API-Set: unknown
 */
export function setCoordsNoOffset(entity: number | IEntity, pos: Vector3, xAxis: boolean, yAxis: boolean, zAxis: boolean): void {
    SetEntityCoordsNoOffset(entity, pos.x, pos.y, pos.z, xAxis, yAxis, zAxis);
}

/**
 * No comment provided
 * 
 * Hash: 0x621873ECE1178967 | Since: 323 | API-Set: unknown
 */
export function setCoordsWithoutPlantsReset(entity: number | IEntity, pos: Vector3, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void {
    SetEntityCoordsWithoutPlantsReset(entity, pos.x, pos.y, pos.z, alive, deadFlag, ragdollFlag, clearArea);
}

/**
 * No comment provided
 * 
 * Hash: 0x1718DE8E3F2823CA | Since: 323 | API-Set: unknown
 */
export function setDynamic(entity: number | IEntity, toggle: boolean): void {
    SetEntityDynamic(entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4A4722448F18EEF5 | Since: 323 | API-Set: unknown
 */
export function setHasGravity(entity: number | IEntity, toggle: boolean): void {
    SetEntityHasGravity(entity, toggle);
}

/**
 * Set the heading of an entity in degrees also known as "Yaw".
 * 
 * Hash: 0x8E2530AA8ADA980E | Since: 323 | API-Set: unknown
 */
export function setHeading(entity: number | IEntity, heading: number): void {
    SetEntityHeading(entity, heading);
}

/**
 * health >= 0
 * male ped ~= 100 - 200
 * female ped ~= 0 - 100
 * 
 * Hash: 0x6B76DC1F3AE6E6A3 | Since: 323 | API-Set: unknown
 */
export function setHealth(entity: number | IEntity, health: number, instigator: number | IEntity, weaponType: number | string): void {
    if (typeof weaponType === 'string') weaponType = GetHashKey(weaponType)
    SetEntityHealth(entity, health, instigator, weaponType);
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
 * Hash: 0x3882114BDE571AD4 | Since: 323 | API-Set: unknown
 */
export function setInvincible(entity: number | IEntity, toggle: boolean, dontResetOnCleanup: boolean): void {
    SetEntityInvincible(entity, toggle, dontResetOnCleanup);
}

/**
 * No comment provided
 * 
 * Hash: 0x78E8E3A640178255 | Since: 323 | API-Set: unknown
 */
export function setIsInVehicle(entity: number | IEntity): void {
    Citizen.invokeNative('0x78E8E3A640178255', entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xEA02E132F5C68722 | Since: 323 | API-Set: unknown
 */
export function setIsTargetPriority(entity: number | IEntity): void {
    SetEntityIsTargetPriority(entity, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7CFBA6A80BDF3874 | Since: 323 | API-Set: unknown
 */
export function setLights(entity: number | IEntity, toggle: boolean): void {
    SetEntityLights(entity, toggle);
}

/**
 * Loads collision grid for an entity spawned outside of a player's loaded area. This allows peds to execute tasks rather than sit dormant because of a lack of a physics grid.
 * Certainly not the main usage of this native but when set to true for a Vehicle, it will prevent the vehicle to explode if it is spawned far away from the player.
 * 
 * Hash: 0x0DC7CABAB1E9B67E | Since: 323 | API-Set: unknown
 */
export function setLoadCollisionFlag(entity: number | IEntity, toggle: boolean): void {
    SetEntityLoadCollisionFlag(entity, toggle, undefined);
}

/**
 * LOD distance can be 0 to 0xFFFF (higher values will result in 0xFFFF) as it is actually stored as a 16-bit value (aka uint16_t).
 * 
 * Hash: 0x5927F96A78577363 | Since: 323 | API-Set: unknown
 */
export function setLodDist(entity: number | IEntity, value: number): void {
    SetEntityLodDist(entity, value);
}

/**
 * `For instance: ENTITY::SET_ENTITY_MAX_HEALTH(PLAYER::PLAYER_PED_ID(), 200); // director_mode.c4: 67849`
 * 
 * Hash: 0x166E7CF68597D8B5 | Since: 323 | API-Set: unknown
 */
export function setMaxHealth(entity: number | IEntity, value: number): void {
    SetEntityMaxHealth(entity, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x0E46A3FCBDE2A1B1 | Since: 323 | API-Set: unknown
 */
export function setMaxSpeed(entity: number | IEntity, speed: number): void {
    SetEntityMaxSpeed(entity, speed);
}

/**
 * No comment provided
 * 
 * Hash: 0xE66377CDDADA4810 | Since: 1734 | API-Set: unknown
 */
export function setMirrorReflectionFlag(entity: number | IEntity): void {
    Citizen.invokeNative('0xE66377CDDADA4810', entity, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x295D82A8559F9150 | Since: 323 | API-Set: unknown
 */
export function setMotionBlur(entity: number | IEntity, toggle: boolean): void {
    SetEntityMotionBlur(entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C2E3DC128F44309 | Since: 323 | API-Set: unknown
 */
export function setNoweapondecals(entity: number | IEntity): void {
    SetEntityDecalsDisabled(entity, false);
}

/**
 * Calling this function disables collision between two entities.
 * The importance of the order for entity1 and entity2 is unclear.
 * The third parameter, `thisFrame`, decides whether the collision is to be disabled until it is turned back on, or if it's just this frame.
 * 
 * Hash: 0xA53ED5520C07654A | Since: 323 | API-Set: unknown
 */
export function setNoCollisionEntity(entity1: number | IEntity, entity2: number | IEntity, thisFrameOnly: boolean): void {
    SetEntityNoCollisionEntity(entity1, entity2, thisFrameOnly);
}

/**
 * No comment provided
 * 
 * Hash: 0x79F020FF9EDC0748 | Since: 323 | API-Set: unknown
 */
export function setOnlyDamagedByPlayer(entity: number | IEntity, toggle: boolean): void {
    SetEntityOnlyDamagedByPlayer(entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7022BD828FA0B082 | Since: 323 | API-Set: unknown
 */
export function setOnlyDamagedByRelationshipGroup(entity: number | IEntity): void {
    SetEntityOnlyDamagedByRelationshipGroup(entity, false, undefined);
}

/**
 * Enable / disable each type of damage.
 * 
 * waterProof is damage related to water not drowning
 * --------------
 * `p7 is to to '1' in am_mp_property_ext/int: ENTITY::SET_ENTITY_PROOFS(uParam0->f_19, true, true, true, true, true, true, 1, true);`
 * 
 * 
 * Hash: 0xFAEE099C6F890BB8 | Since: 323 | API-Set: unknown
 */
export function setProofs(entity: number | IEntity, bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean, steamProof: boolean, dontResetOnCleanup: boolean, waterProof: boolean): void {
    SetEntityProofs(entity, bulletProof, fireProof, explosionProof, collisionProof, meleeProof, steamProof, dontResetOnCleanup, waterProof);
}

/**
 * w is the correct parameter name!
 * 
 * Hash: 0x77B21BE7AC540F07 | Since: 323 | API-Set: unknown
 */
export function setQuaternion(entity: number | IEntity, pos: Vector3, w: number): void {
    SetEntityQuaternion(entity, pos.x, pos.y, pos.z, w);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A50A1EEDAD01E65 | Since: 323 | API-Set: unknown
 */
export function setRecordsCollisions(entity: number | IEntity, toggle: boolean): void {
    SetEntityRecordsCollisions(entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x730F5F8D3F0F2050 | Since: 323 | API-Set: unknown
 */
export function setRenderScorched(entity: number | IEntity, toggle: boolean): void {
    SetEntityRenderScorched(entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x694E00132F2823ED | Since: 323 | API-Set: unknown
 */
export function setRequiresMoreExpensiveRiverCheck(entity: number | IEntity, toggle: boolean): void {
    SetEntityRequiresMoreExpensiveRiverCheck(entity, toggle);
}

/**
 * rotationOrder refers to the order yaw pitch roll is applied
 * value ranges from 0 to 5. What you use for rotationOrder when setting must be the same as rotationOrder when getting the rotation.
 * Unsure what value corresponds to what rotation order, more testing will be needed for that.
 * For the most part R* uses 1 or 2 as the order.
 * p5 is usually set as true
 * 
 * 
 * Hash: 0x8524A8B0171D5E07 | Since: 323 | API-Set: unknown
 */
export function setRotation(entity: number | IEntity, pitch: number, roll: number, yaw: number, rotationOrder: number): void {
    SetEntityRotation(entity, pitch, roll, yaw, rotationOrder, false);
}

/**
 * True means it can be deleted by the engine when switching lobbies/missions/etc, false means the script is expected to clean it up.
 * 
 * "Allow Freeze If No Collision"
 * 
 * Hash: 0x3910051CCECDB00C | Since: 323 | API-Set: unknown
 */
export function setShouldFreezeWaitingOnCollision(entity: number | IEntity, toggle: boolean): void {
    SetEntityCleanupByEngine(entity, toggle);
}

/**
 * Only called once in the scripts.
 * 
 * Related to weapon objects.
 * 
 * 
 * Hash: 0x5C3B791D580E0BC2 | Since: 323 | API-Set: unknown
 */
export function setSortBias(entity: number | IEntity): void {
    Citizen.invokeNative('0x5C3B791D580E0BC2', entity, 0);
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
 * Hash: 0x57C5DB656185EAC4 | Since: 323 | API-Set: unknown
 */
export function setTrafficlightOverride(entity: number | IEntity, state: number): void {
    SetEntityTrafficlightOverride(entity, state);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A092BB0C3808B96 | Since: 323 | API-Set: unknown
 */
export function setUseMaxDistanceForWaterReflection(entity: number | IEntity): void {
    Citizen.invokeNative('0x1A092BB0C3808B96', entity, false);
}

/**
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 * 
 * Hash: 0x1C99BB7B6E96D16F | Since: 323 | API-Set: unknown
 */
export function setVelocity(entity: number | IEntity, pos: Vector3): void {
    SetEntityVelocity(entity, pos.x, pos.y, pos.z);
}

/**
 * p2 is always 0.
 * 
 * Hash: 0xEA1C610A04DB6BBB | Since: 323 | API-Set: unknown
 */
export function setVisible(entity: number | IEntity, toggle: boolean): void {
    SetEntityVisible(entity, toggle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC34BC448DA29F5E9 | Since: 573 | API-Set: unknown
 */
export function setWaterReflectionFlag(entity: number | IEntity, toggle: boolean): void {
    Citizen.invokeNative('0xC34BC448DA29F5E9', entity, toggle);
}

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 * 
 * Hash: 0x3AE22DEB5BA5A3E6 | Since: 323 | API-Set: unknown
 */
export function setObjectAsNoLongerNeeded(_object: number | IObject): void {
    SetObjectAsNoLongerNeeded(_object);
}

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 * 
 * Hash: 0x2595DD4236549CE3 | Since: 323 | API-Set: unknown
 */
export function setPedAsNoLongerNeeded(ped: number | IPed): void {
    SetPedAsNoLongerNeeded(ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEA7C8E1B48FF68C | Since: 678 | API-Set: unknown
 */
export function setPickupCollidesWithProjectiles(): void {
    Citizen.invokeNative('0xCEA7C8E1B48FF68C', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD7B80E7C3BEFC396 | Since: 1180 | API-Set: unknown
 */
export function setPickUpByCargobobDisabled(entity: number | IEntity, toggle: boolean): void {
    SetPickUpByCargobobDisabled(entity, toggle);
}

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 * 
 * Hash: 0x629BFA74418D6239 | Since: 323 | API-Set: unknown
 */
export function setVehicleAsNoLongerNeeded(vehicle: number | IVehicle): void {
    SetVehicleAsNoLongerNeeded(vehicle);
}

/**
 * Only called within 1 script for x360. 'fm_mission_controller' and it used on an object.
 * 
 * Ran after these 2 natives,
 * set_object_targettable(uParam0, 0);
 * set_entity_invincible(uParam0, 1);
 * 
 * Hash: 0xDC6F8601FAF2E893 | Since: 323 | API-Set: unknown
 */
export function setWaitForCollisionsBeforeProbe(entity: number | IEntity, toggle: boolean): void {
    SetWaitForCollisionsBeforeProbe(entity, toggle);
}

/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * RAGEPluginHook list: docs.ragepluginhook.net/html/62951c37-a440-478c-b389-c471230ddfc5.htm
 * 
 * Hash: 0x28004F88151E03E0 | Since: 323 | API-Set: unknown
 */
export function stopAnim(entity: number | IEntity, animation: string, animGroup: string): boolean {
    return StopEntityAnim(entity, animation, animGroup, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x43D3807C077261E3 | Since: 323 | API-Set: unknown
 */
export function stopSynchronizedAnim(entity: number | IEntity): boolean {
    return StopSynchronizedEntityAnim(entity, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x11E79CAB7183B6F5 | Since: 323 | API-Set: unknown
 */
export function stopSynchronizedMapAnim(x1: number, y1: number, z1: number, x2: number, y2: any, z2: number): boolean {
    return StopSynchronizedMapEntityAnim(x1, y1, z1, x2, y2, z2);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE5D2A122E09EC42 | Since: 323 | API-Set: unknown
 */
export function wouldBeOccluded(entityModelHash: number | string, pos: Vector3): boolean {
    if (typeof entityModelHash === 'string') entityModelHash = GetHashKey(entityModelHash)
    return WouldEntityBeOccluded(entityModelHash, pos.x, pos.y, pos.z, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA75EE4F689B85391 | Since: 2802 | API-Set: unknown
 */
export function getLastHitByEntity(entity: number | IEntity): number {
    return Citizen.invokeNative('0xA75EE4F689B85391', entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A27A7827347B3B1 | Since: 3407 | API-Set: unknown
 */
export function setNoCollisionWithNetworkedEntity(entity1: number | IEntity, entity2: number | IEntity): void {
    Citizen.invokeNative('0x0A27A7827347B3B1', entity1, entity2);
}

