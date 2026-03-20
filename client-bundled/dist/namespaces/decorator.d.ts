import { IEntity } from '@risinglife/fivem-shared';
/**
 * Returns whether or not the specified property is set for the entity.
 *
 * Hash: 0x05661B80A8C9165F | Since: 323 | API-Set: unknown
 */
export declare function decorExistOn(entity: number | IEntity, propertyName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDACE671663F2F5DB | Since: 323 | API-Set: unknown
 */
export declare function decorGetBool(entity: number | IEntity, propertyName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6524A2F114706F43 | Since: 323 | API-Set: unknown
 */
export declare function decorGetFloat(entity: number | IEntity, propertyName: string): number;
/**
 * No comment provided
 *
 * Hash: 0xA06C969B02A97298 | Since: 323 | API-Set: unknown
 */
export declare function decorGetInt(entity: number | IEntity, propertyName: string): number;
/**
 * type: see DECOR_REGISTER
 *
 * Hash: 0x4F14F9F870D6FBC8 | Since: 323 | API-Set: unknown
 */
export declare function decorIsRegisteredAsType(propertyName: string, _type: number): boolean;
/**
 * https://alloc8or.re/gta5/doc/enums/eDecorType.txt
 *
 * Hash: 0x9FD90732F56403CE | Since: 323 | API-Set: unknown
 */
export declare function decorRegister(propertyName: string, _type: number): void;
/**
 * Called after all decorator type initializations.
 *
 * Hash: 0xA9D14EEA259F9248 | Since: 323 | API-Set: unknown
 */
export declare function decorRegisterLock(): void;
/**
 * No comment provided
 *
 * Hash: 0x00EE9F297C738720 | Since: 323 | API-Set: unknown
 */
export declare function decorRemove(entity: number | IEntity, propertyName: string): boolean;
/**
 * This function sets metadata of type bool to specified entity.
 *
 *
 * Hash: 0x6B1E8E2ED1335B71 | Since: 323 | API-Set: unknown
 */
export declare function decorSetBool(entity: number | IEntity, propertyName: string, value: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x211AB1DD8D0F363A | Since: 323 | API-Set: unknown
 */
export declare function decorSetFloat(entity: number | IEntity, propertyName: string, value: number): boolean;
/**
 * Sets property to int.
 *
 * Hash: 0x0CE3AA5E1CA19E10 | Since: 323 | API-Set: unknown
 */
export declare function decorSetInt(entity: number | IEntity, propertyName: string, value: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x95AED7B8E39ECAA4 | Since: 323 | API-Set: unknown
 */
export declare function decorSetTime(entity: number | IEntity, propertyName: string, timestamp: number): boolean;
