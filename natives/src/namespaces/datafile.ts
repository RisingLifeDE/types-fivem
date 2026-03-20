import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0xF8B0F5A43E928C76 | Since: 323
 */
export function dataarrayAddBool(value: boolean): any {
    return DataarrayAddBool(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x6889498B3E19C797 | Since: 323
 */
export function dataarrayAddDict(): [any, any] {
    return DataarrayAddDict();
}

/**
 * No comment provided
 * 
 * Hash: 0x57A995FD75D37F56 | Since: 323
 */
export function dataarrayAddFloat(value: number): any {
    return DataarrayAddFloat(value);
}

/**
 * No comment provided
 * 
 * Hash: 0xCABDB751D86FE93B | Since: 323
 */
export function dataarrayAddInt(value: number): any {
    return DataarrayAddInt(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x2F0661C155AEEEAA | Since: 323
 */
export function dataarrayAddString(value: string): any {
    return DataarrayAddString(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x407F8D034F70F0C2 | Since: 323
 */
export function dataarrayAddVector(valueX: number, valueY: number, valueZ: number): any {
    return DataarrayAddVector(valueX, valueY, valueZ);
}

/**
 * No comment provided
 * 
 * Hash: 0x50C1B2874E50C114 | Since: 323
 */
export function dataarrayGetBool(arrayIndex: number): [boolean, any] {
    return DataarrayGetBool(arrayIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x065DB281590CEA2D | Since: 323
 */
export function dataarrayGetCount(): [number, any] {
    return DataarrayGetCount();
}

/**
 * No comment provided
 * 
 * Hash: 0x8B5FADCC4E3A145F | Since: 323
 */
export function dataarrayGetDict(arrayIndex: number): [any, any] {
    return DataarrayGetDict(arrayIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xC0C527B525D7CFB5 | Since: 323
 */
export function dataarrayGetFloat(arrayIndex: number): [number, any] {
    return DataarrayGetFloat(arrayIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E5AE19425CD74BE | Since: 323
 */
export function dataarrayGetInt(arrayIndex: number): [number, any] {
    return DataarrayGetInt(arrayIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xD3F2FFEB8D836F52 | Since: 323
 */
export function dataarrayGetString(arrayIndex: number): [string, any] {
    return DataarrayGetString(arrayIndex);
}

/**
 * Types:
 * 1 = Boolean
 * 2 = Integer
 * 3 = Float
 * 4 = String
 * 5 = Vector3
 * 6 = Object
 * 7 = Array
 * 
 * Hash: 0x3A0014ADB172A3C5 | Since: 323
 */
export function dataarrayGetType(arrayIndex: number): [number, any] {
    return DataarrayGetType(arrayIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D2064E5B64A628A | Since: 323
 */
export function dataarrayGetVector(arrayIndex: number): [Vector3, any] {
    return new Vector3(DataarrayGetVector(arrayIndex));
}

/**
 * No comment provided
 * 
 * Hash: 0x5B11728527CA6E5F | Since: 323
 */
export function datadictCreateArray(key: string): [any, any] {
    return DatadictCreateArray(key);
}

/**
 * No comment provided
 * 
 * Hash: 0xA358F56F10732EE1 | Since: 323
 */
export function datadictCreateDict(key: string): [any, any] {
    return DatadictCreateDict(key);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A983AA9DA2659ED | Since: 323
 */
export function datadictGetArray(key: string): [any, any] {
    return DatadictGetArray(key);
}

/**
 * No comment provided
 * 
 * Hash: 0x1186940ED72FFEEC | Since: 323
 */
export function datadictGetBool(key: string): [boolean, any] {
    return DatadictGetBool(key);
}

/**
 * No comment provided
 * 
 * Hash: 0xB6B9DDC412FCEEE2 | Since: 323
 */
export function datadictGetDict(key: string): [any, any] {
    return DatadictGetDict(key);
}

/**
 * No comment provided
 * 
 * Hash: 0x06610343E73B9727 | Since: 323
 */
export function datadictGetFloat(key: string): [number, any] {
    return DatadictGetFloat(key);
}

/**
 * No comment provided
 * 
 * Hash: 0x78F06F6B1FB5A80C | Since: 323
 */
export function datadictGetInt(key: string): [number, any] {
    return DatadictGetInt(key);
}

/**
 * No comment provided
 * 
 * Hash: 0x3D2FD9E763B24472 | Since: 323
 */
export function datadictGetString(key: string): [string, any] {
    return DatadictGetString(key);
}

/**
 * Types:
 * 1 = Boolean
 * 2 = Integer
 * 3 = Float
 * 4 = String
 * 5 = Vector3
 * 6 = Object
 * 7 = Array
 * 
 * Hash: 0x031C55ED33227371 | Since: 323
 */
export function datadictGetType(key: string): [number, any] {
    return DatadictGetType(key);
}

/**
 * No comment provided
 * 
 * Hash: 0x46CD3CB66E0825CC | Since: 323
 */
export function datadictGetVector(key: string): [Vector3, any] {
    return new Vector3(DatadictGetVector(key));
}

/**
 * No comment provided
 * 
 * Hash: 0x35124302A556A325 | Since: 323
 */
export function datadictSetBool(key: string, value: boolean): any {
    return DatadictSetBool(key, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xC27E1CC2D795105E | Since: 323
 */
export function datadictSetFloat(key: string, value: number): any {
    return DatadictSetFloat(key, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xE7E035450A7948D5 | Since: 323
 */
export function datadictSetInt(key: string, value: number): any {
    return DatadictSetInt(key, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x8FF3847DADD8E30C | Since: 323
 */
export function datadictSetString(key: string, value: string): any {
    return DatadictSetString(key, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x4CD49B76338C7DEE | Since: 323
 */
export function datadictSetVector(key: string, valueX: number, valueY: number, valueZ: number): any {
    return DatadictSetVector(key, valueX, valueY, valueZ);
}

/**
 * No comment provided
 * 
 * Hash: 0x6CC86E78358D5119 | Since: 323
 */
export function clearWatchList(): void {
    DatafileClearWatchList();
}

/**
 * No comment provided
 * 
 * Hash: 0xD27058A1CA2B13EE | Since: 323
 */
export function create(): void {
    DatafileCreate(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x9AB9C1CFC8862DFB | Since: 323
 */
export function datafileDelete(): void {
    DatafileDelete(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x6AD0BD5E087866CB | Since: 2189
 */
export function deleteForAdditionalDataFile(): void {
    Citizen.invokeNative('0x6AD0BD5E087866CB', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8F5EA1C01D65A100 | Since: 323
 */
export function deleteRequestedFile(requestId: number): boolean {
    return DatafileDeleteRequestedFile(requestId);
}

/**
 * No comment provided
 * 
 * Hash: 0xC55854C7D7274882 | Since: 323
 */
export function flushMissionHeader(): void {
    DatafileFlushMissionHeader();
}

/**
 * No comment provided
 * 
 * Hash: 0x906B778CA1DC72B6 | Since: 323
 */
export function getFileDict(): any {
    return DatafileGetFileDict(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xDBF860CF1DB8E599 | Since: 2189
 */
export function getFileDictForAdditionalDataFile(): any {
    return Citizen.invokeNative('0xDBF860CF1DB8E599', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x15FF52B809DB2353 | Since: 323
 */
export function hasLoadedFileData(requestId: number): boolean {
    return DatafileHasLoadedFileData(requestId);
}

/**
 * No comment provided
 * 
 * Hash: 0xF8CC1EBE0B62E29F | Since: 323
 */
export function hasValidFileData(requestId: number): boolean {
    return DatafileHasValidFileData(requestId);
}

/**
 * No comment provided
 * 
 * Hash: 0xBEDB96A7584AA8CF | Since: 323
 */
export function isSavePending(): boolean {
    return DatafileIsSavePending();
}

/**
 * No comment provided
 * 
 * Hash: 0xFCCAE5B92A830878 | Since: 323
 */
export function isValidRequestId(index: number): boolean {
    return DatafileIsValidRequestId(index);
}

/**
 * Loads a User-Generated Content (UGC) file. These files can be found in "[GTA5]\data\ugc" and "[GTA5]\common\patch\ugc". They seem to follow a naming convention, most likely of "[name]_[part].ugc". See example below for usage.
 * 
 * Returns whether or not the file was successfully loaded.
 * 
 * Example:
 * `DATAFILE::DATAFILE_LOAD_OFFLINE_UGC("RockstarPlaylists") // loads "rockstarplaylists_00.ugc"`
 * 
 * Hash: 0xC5238C011AF405E4 | Since: 323
 */
export function loadOfflineUgc(filename: string): boolean {
    return DatafileLoadOfflineUgc(filename, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6EEF01087181EDD | Since: 2189
 */
export function loadOfflineUgcForAdditionalDataFile(): boolean {
    return Citizen.invokeNative('0xA6EEF01087181EDD', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x22DA66936E0FFF37 | Since: 323
 */
export function selectActiveFile(requestId: number): boolean {
    return DatafileSelectActiveFile(requestId, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x01095C95CD46B624 | Since: 323
 */
export function selectCreatorStats(): boolean {
    return DatafileSelectCreatorStats(0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA69AC4ADE82B57A4 | Since: 323
 */
export function selectUgcData(): boolean {
    return DatafileSelectUgcData(0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x52818819057F2B40 | Since: 323
 */
export function selectUgcPlayerData(): boolean {
    return DatafileSelectUgcPlayerData(0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9CB0BFA7A9342C3D | Since: 323
 */
export function selectUgcStats(): boolean {
    return DatafileSelectUgcStats(0, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x83BCCE3224735F05 | Since: 323
 */
export function startSaveToCloud(filename: string): boolean {
    return DatafileStartSaveToCloud(filename, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2ED61456317B8178 | Since: 323
 */
export function storeMissionHeader(): void {
    DatafileStoreMissionHeader(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x4DFDD9EB705F8140 | Since: 323
 */
export function updateSaveToCloud(): [boolean, boolean] {
    return DatafileUpdateSaveToCloud();
}

/**
 * Adds the given requestID to the watch list.
 * 
 * Hash: 0xAD6875BBC0FC899C | Since: 323
 */
export function watchRequestId(requestId: number): void {
    DatafileWatchRequestId(requestId);
}

/**
 * No comment provided
 * 
 * Hash: 0xC84527E235FCA219 | Since: 323
 */
export function ugcCreateContent(dataCount: number, contentName: string, description: string, tagsCsv: string, contentTypeName: string, publish: boolean): [boolean, any] {
    return UgcCreateContent(dataCount, contentName, description, tagsCsv, contentTypeName, publish, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA5EFC3E847D60507 | Since: 323
 */
export function ugcCreateMission(contentName: string, description: string, tagsCsv: string, contentTypeName: string, publish: boolean): boolean {
    return UgcCreateMission(contentName, description, tagsCsv, contentTypeName, publish, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x692D808C34A82143 | Since: 323
 */
export function ugcSetPlayerData(contentId: string, rating: number, contentTypeName: string): boolean {
    return UgcSetPlayerData(contentId, rating, contentTypeName, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x648E7A5434AF7969 | Since: 323
 */
export function ugcUpdateContent(contentId: string, dataCount: number, contentName: string, description: string, tagsCsv: string, contentTypeName: string): [boolean, any] {
    return UgcUpdateContent(contentId, dataCount, contentName, description, tagsCsv, contentTypeName, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4645DE9980999E93 | Since: 323
 */
export function ugcUpdateMission(contentId: string, contentName: string, description: string, tagsCsv: string, contentTypeName: string): boolean {
    return UgcUpdateMission(contentId, contentName, description, tagsCsv, contentTypeName, undefined);
}

