import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * Returns the result of a shape test: 0 if the handle is invalid, 1 if the shape test is still pending, or 2 if the shape test has completed, and the handle should be invalidated.
 * 
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 * 
 * Hash: 0x3D87450E15D98694 | Since: 323
 */
export function getResult(shapeTestHandle: number): [number, boolean, Vector3, Vector3, number] {
    return GetShapeTestResult(shapeTestHandle);
}

/**
 * Returns the result of a shape test, also returning the material of any touched surface.
 * 
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 * 
 * Unless the return value is 2, the other return values are undefined.
 * 
 * Hash: 0x65287525D951F6BE | Since: 323
 */
export function getResultIncludingMaterial(shapeTestHandle: number): [number, boolean, Vector3, Vector3, number, number] {
    return GetShapeTestResultIncludingMaterial(shapeTestHandle);
}

/**
 * Invalidates the entity handle passed by removing the fwScriptGuid from the entity. This should be used when receiving an ambient entity from shape testing natives, but can also be used for other natives returning an 'irrelevant' entity handle.
 * 
 * Hash: 0x2B3334BCA57CD799 | Since: 323
 */
export function releaseScriptGuidFromEntity(entityHit: number | IEntity): void {
    const _entityHit = entityHit instanceof IEntity ? entityHit.handle() : entityHit;
    ReleaseScriptGuidFromEntity(_entityHit);
}

/**
 * Does the same as 0x7EE9F5D83DD4F90E, except blocking until the shape test completes.
 * 
 * Hash: 0x377906D8A31E5586 | Since: 323
 */
export function startExpensiveSynchronousLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartExpensiveSynchronousShapeTestLosProbe(x1, y1, z1, x2, y2, z2, flags, _entity, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x37181417CE7C8900 | Since: 323
 */
export function startBound(entity: number | IEntity, flags1: number, flags2: number): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartShapeTestBound(_entity, flags1, flags2);
}

/**
 * No comment provided
 * 
 * Hash: 0x052837721A854EC7 | Since: 323
 */
export function startBoundingBox(entity: number | IEntity, flags1: number, flags2: number): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartShapeTestBoundingBox(_entity, flags1, flags2);
}

/**
 * No comment provided
 * 
 * Hash: 0xFE466162C4401D18 | Since: 323
 */
export function startBox(pos: Vector3, dimX: number, dimY: number, dimZ: number, rot: Vector3, flags: number, entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartShapeTestBox(pos.x, pos.y, pos.z, dimX, dimY, dimZ, rot.x, rot.y, rot.z, undefined, flags, _entity, undefined);
}

/**
 * Raycast from point to point, where the ray has a radius.
 * 
 * flags:
 * vehicles=10
 * peds =12
 * 
 * Iterating through flags yields many ped / vehicle/ object combinations
 * 
 * p9 = 7, but no idea what it does
 * 
 * Entity is an entity to ignore
 * 
 * Hash: 0x28579D1B8F8AAC80 | Since: 323
 */
export function startCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartShapeTestCapsule(x1, y1, z1, x2, y2, z2, radius, flags, _entity, 0);
}

/**
 * Asynchronously starts a line-of-sight (raycast) world probe shape test.
 * 
 * Use the handle with 0x3D87450E15D98694 or 0x65287525D951F6BE until it returns 0 or 2.
 * 
 * p8 is a bit mask with bits 1, 2 and/or 4, relating to collider types; 4 should usually be used.
 * 
 * Hash: 0x7EE9F5D83DD4F90E | Since: 323
 */
export function startLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartShapeTestLosProbe(x1, y1, z1, x2, y2, z2, flags, _entity, 0);
}

/**
 * Returns a ShapeTest handle that can be used with GET_SHAPE_TEST_RESULT.
 * 
 * In its only usage in game scripts its called with flag set to 511, entity to player_ped_id and flag2 set to 7
 * 
 * Hash: 0xFF6BE494C7987F34 | Since: 323
 */
export function startMouseCursorLosProbe(flag: number, entity: number | IEntity, flag2: number): [number, Vector3, Vector3] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartShapeTestSurroundingCoords(flag, _entity, flag2);
}

/**
 * No comment provided
 * 
 * Hash: 0xE6AC6C45FBE83004 | Since: 323
 */
export function startSweptSphere(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartShapeTestSweptSphere(x1, y1, z1, x2, y2, z2, radius, flags, _entity, undefined);
}

