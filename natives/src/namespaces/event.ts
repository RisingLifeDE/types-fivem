import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * Hash: 0xD9F8455409B525E9 | Since: 323
 */
export function addShockingAtPosition(eventType: number, pos: Vector3, duration: number): number {
    return AddShockingEventAtPosition(eventType, pos.x, pos.y, pos.z, duration);
}

/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * Hash: 0x7FD8F3BE76F89422 | Since: 323
 */
export function addShockingForEntity(eventType: number, entity: number | IEntity, duration: number): number {
    return AddShockingEventForEntity(eventType, entity, duration);
}

/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * This is limited to 4 blocked events at a time.
 * 
 * Hash: 0xE42FCDFD0E4196F7 | Since: 323
 */
export function blockDecisionMaker(name: number | string, eventType: number): void {
    if (typeof name === 'string') name = GetHashKey(name)
    BlockDecisionMakerEvent(name, eventType);
}

/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * Hash: 0x4FC9381A7AEE8968 | Since: 323
 */
export function clearDecisionMakerResponse(name: number | string, eventType: number): void {
    if (typeof name === 'string') name = GetHashKey(name)
    ClearDecisionMakerEventResponse(name, eventType);
}

/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * Hash: 0x1374ABB7C15BAB92 | Since: 323
 */
export function isShockingInSphere(eventType: number, pos: Vector3, radius: number): boolean {
    return IsShockingEventInSphere(eventType, pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0xEAABE8FDFA21274C | Since: 323
 */
export function removeAllShockings(): void {
    RemoveAllShockingEvents(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x2CDA538C44C6CCE5 | Since: 323
 */
export function removeShocking(event: number): boolean {
    return RemoveShockingEvent(event);
}

/**
 * No comment provided
 * 
 * Hash: 0x340F1415B68AEADE | Since: 323
 */
export function removeShockingSpawnBlockingAreas(): void {
    RemoveShockingEventSpawnBlockingAreas();
}

/**
 * No comment provided
 * 
 * Hash: 0xB604A2942ADED0EE | Since: 323
 */
export function setDecisionMaker(ped: number | IPed, name: number | string): void {
    if (typeof name === 'string') name = GetHashKey(name)
    SetDecisionMaker(ped, name);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F3B7749C112D552 | Since: 323
 */
export function suppressAgitationsNextFrame(): void {
    SuppressAgitationEventsNextFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x2F9A292AD0A3BD89 | Since: 323
 */
export function suppressShockingsNextFrame(): void {
    SuppressShockingEventsNextFrame();
}

/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * Hash: 0x3FD2EC8BF1F1CF30 | Since: 323
 */
export function suppressShockingTypeNextFrame(eventType: number): void {
    SuppressShockingEventTypeNextFrame(eventType);
}

/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * Hash: 0xD7CD9CF34F2C99E8 | Since: 323
 */
export function unblockDecisionMaker(name: number | string, eventType: number): void {
    if (typeof name === 'string') name = GetHashKey(name)
    UnblockDecisionMakerEvent(name, eventType);
}

