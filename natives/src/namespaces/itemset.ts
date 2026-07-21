import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0xE3945201F14637DD | Since: unknown
 */
export function addTo(item: number, itemset: number): boolean {
    return AddToItemset(item, itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0x41BC0D722FC04221 | Since: unknown
 */
export function clean(itemset: number): void {
    CleanItemset(itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0x35AD299F50D91B24 | Since: unknown
 */
export function create(): number {
    return CreateItemset(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE18220B1C183EDA | Since: unknown
 */
export function destroy(itemset: number): void {
    DestroyItemset(itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A197E2521EE2BAB | Since: unknown
 */
export function getIndexedItemIn(index: number, itemset: number): number {
    return GetIndexedItemInItemset(index, itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0xD9127E83ABF7C631 | Since: unknown
 */
export function getSize(itemset: number): number {
    return GetItemsetSize(itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0x2D0FC594D1E9C107 | Since: unknown
 */
export function isIn(item: number, itemset: number): boolean {
    return IsInItemset(item, itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0xB1B1EA596344DFAB | Since: unknown
 */
export function isValid(itemset: number): boolean {
    return IsItemsetValid(itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0x25E68244B0177686 | Since: unknown
 */
export function removeFrom(item: number, itemset: number): void {
    RemoveFromItemset(item, itemset);
}

