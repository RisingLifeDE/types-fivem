import { Vector3, IEntity, IPed } from '@risinglife/fivem-shared';
/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 *
 * Hash: 0xD9F8455409B525E9 | Since: 323 | API-Set: unknown
 */
export declare function addShockingAtPosition(eventType: number, pos: Vector3, duration: number): number;
/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 *
 * Hash: 0x7FD8F3BE76F89422 | Since: 323 | API-Set: unknown
 */
export declare function addShockingForEntity(eventType: number, entity: number | IEntity, duration: number): number;
/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 *
 * This is limited to 4 blocked events at a time.
 *
 * Hash: 0xE42FCDFD0E4196F7 | Since: 323 | API-Set: unknown
 */
export declare function blockDecisionMaker(name: number | string, eventType: number): void;
/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 *
 * Hash: 0x4FC9381A7AEE8968 | Since: 323 | API-Set: unknown
 */
export declare function clearDecisionMakerResponse(name: number | string, eventType: number): void;
/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 *
 * Hash: 0x1374ABB7C15BAB92 | Since: 323 | API-Set: unknown
 */
export declare function isShockingInSphere(eventType: number, pos: Vector3, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEAABE8FDFA21274C | Since: 323 | API-Set: unknown
 */
export declare function removeAllShockings(): void;
/**
 * No comment provided
 *
 * Hash: 0x2CDA538C44C6CCE5 | Since: 323 | API-Set: unknown
 */
export declare function removeShocking(event: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x340F1415B68AEADE | Since: 323 | API-Set: unknown
 */
export declare function removeShockingSpawnBlockingAreas(): void;
/**
 * No comment provided
 *
 * Hash: 0xB604A2942ADED0EE | Since: 323 | API-Set: unknown
 */
export declare function setDecisionMaker(ped: number | IPed, name: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x5F3B7749C112D552 | Since: 323 | API-Set: unknown
 */
export declare function suppressAgitationsNextFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x2F9A292AD0A3BD89 | Since: 323 | API-Set: unknown
 */
export declare function suppressShockingsNextFrame(): void;
/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 *
 * Hash: 0x3FD2EC8BF1F1CF30 | Since: 323 | API-Set: unknown
 */
export declare function suppressShockingTypeNextFrame(eventType: number): void;
/**
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 *
 * Hash: 0xD7CD9CF34F2C99E8 | Since: 323 | API-Set: unknown
 */
export declare function unblockDecisionMaker(name: number | string, eventType: number): void;
