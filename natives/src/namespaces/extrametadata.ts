import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0x7796B21B76221BC5 | Since: 2612
 */
export function doesCurrentPedComponentHaveRestrictionTag(ped: number | IPed, componentId: number, restrictionTagHash: number | string): boolean {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    if (typeof restrictionTagHash === 'string') restrictionTagHash = GetHashKey(restrictionTagHash)
    return Citizen.invokeNative('0x7796B21B76221BC5', _ped, componentId, restrictionTagHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xD726BAB4554DA580 | Since: 2612
 */
export function doesCurrentPedPropHaveRestrictionTag(ped: number | IPed, componentId: number, restrictionTagHash: number | string): boolean {
    const _ped = typeof ped == 'object' ? ped.handle() : ped;
    if (typeof restrictionTagHash === 'string') restrictionTagHash = GetHashKey(restrictionTagHash)
    return Citizen.invokeNative('0xD726BAB4554DA580', _ped, componentId, restrictionTagHash);
}

/**
 * Full list of restriction tags by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedApparelRestrictionTags.json
 * 
 * componentId/last parameter seems to be unused.
 * 
 * Hash: 0x341DE7ED1D2A1BFD | Since: 323
 */
export function doesShopPedApparelHaveRestrictionTag(componentHash: number | string, restrictionTagHash: number | string, componentId: number): boolean {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    if (typeof restrictionTagHash === 'string') restrictionTagHash = GetHashKey(restrictionTagHash)
    return DoesShopPedApparelHaveRestrictionTag(componentHash, restrictionTagHash, componentId);
}

/**
 * From fm_deathmatch_creator and fm_race_creator:
 * 
 * `FILES::REVERT_CONTENT_CHANGESET_GROUP_FOR_ALL(joaat("GROUP_MAP_SP"));`
 * `FILES::EXECUTE_CONTENT_CHANGESET_GROUP_FOR_ALL(joaat("GROUP_MAP"));`
 * 
 * Hash: 0x6BEDF5769AC2DC07 | Since: 1604
 */
export function executeContentChangesetGroupForAll(hash: number | string): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    LoadContentChangeSetGroup(hash);
}

/**
 * dlcVehicleIndex takes a number from 0 - GET_NUM_DLC_VEHICLES() - 1.
 * outData is a struct of 3 8-byte items.
 * The Second item in the struct *(Hash *)(outData + 1) is the vehicle hash.
 * 
 * Hash: 0x33468EDC08E371F6 | Since: 323
 */
export function getDlcVehicleData(dlcVehicleIndex: number): [boolean, any] {
    return GetDlcVehicleData(dlcVehicleIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x5549EE11FA22FCF2 | Since: 323
 */
export function getDlcVehicleFlags(dlcVehicleIndex: number): number {
    return GetDlcVehicleFlags(dlcVehicleIndex);
}

/**
 * dlcVehicleIndex is 0 to GET_NUM_DLC_VEHICLS() - 1
 * 
 * Hash: 0xECC01B7C5763333C | Since: 323
 */
export function getDlcVehicleModel(dlcVehicleIndex: number): number {
    return GetDlcVehicleModel(dlcVehicleIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xC098810437312FFF | Since: 323
 */
export function getDlcVehicleModLockHash(hash: number | string): number {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return GetDlcVehicleModLockHash(hash);
}

/**
 * p0 seems to be the weapon index
 * p1 seems to be the weapon component index
 * struct DlcComponentData{
 * int attachBone;
 * int padding1;
 * int bActiveByDefault;
 * int padding2;
 * int unk;
 * int padding3;
 * int componentHash;
 * int padding4;
 * int unk2;
 * int padding5;
 * int componentCost;
 * int padding6;
 * char nameLabel[64];
 * char descLabel[64];
 * };
 * 
 * 
 * Hash: 0x6CF598A2957C2BF8 | Since: 323
 */
export function getDlcWeaponComponentData(dlcWeaponIndex: number, dlcWeapCompIndex: number): [boolean, any] {
    return GetDlcWeaponComponentData(dlcWeaponIndex, dlcWeapCompIndex);
}

/**
 * Same as GET_DLC_WEAPON_COMPONENT_DATA but only works for DLC components that are available in SP.
 * 
 * Hash: 0x31D5E073B6F93CDC | Since: 2060
 */
export function getDlcWeaponComponentDataSp(dlcWeaponIndex: number, dlcWeapCompIndex: number): [boolean, any] {
    return GetDlcWeaponComponentDataSp(dlcWeaponIndex, dlcWeapCompIndex);
}

/**
 * 
 * dlcWeaponIndex takes a number from 0 - GET_NUM_DLC_WEAPONS() - 1.
 * struct DlcWeaponData
 * {
 * `int emptyCheck; //use DLC1::IS_CONTENT_ITEM_LOCKED on this`
 * int padding1;
 * int weaponHash;
 * int padding2;
 * int unk;
 * int padding3;
 * int weaponCost;
 * int padding4;
 * int ammoCost;
 * int padding5;
 * int ammoType;
 * int padding6;
 * int defaultClipSize;
 * int padding7;
 * char nameLabel[64];
 * char descLabel[64];
 * char desc2Label[64]; // usually "the" + name
 * char upperCaseNameLabel[64];
 * };
 * 
 * Hash: 0x79923CD21BECE14E | Since: 323
 */
export function getDlcWeaponData(dlcWeaponIndex: number): [boolean, any] {
    return GetDlcWeaponData(dlcWeaponIndex);
}

/**
 * Same as GET_DLC_WEAPON_DATA but only works for DLC weapons that are available in SP.
 * 
 * Hash: 0x310836EE7129BA33 | Since: 2060
 */
export function getDlcWeaponDataSp(dlcWeaponIndex: number): [boolean, any] {
    return GetDlcWeaponDataSp(dlcWeaponIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C93ED8C2F74859B | Since: 323
 */
export function getForcedComponent(componentHash: number | string, forcedComponentIndex: number): [number, number, number] {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return GetForcedComponent(componentHash, forcedComponentIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xE1CA84EBF72E691D | Since: 323
 */
export function getForcedProp(componentHash: number | string, forcedPropIndex: number): [number, number, number] {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return GetForcedProp(componentHash, forcedPropIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x0368B3A838070348 | Since: 323
 */
export function getHashNameForComponent(entity: number | IEntity, componentId: number, drawableVariant: number, textureVariant: number): number {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return GetHashNameForComponent(_entity, componentId, drawableVariant, textureVariant);
}

/**
 * No comment provided
 * 
 * Hash: 0x5D6160275CAEC8DD | Since: 323
 */
export function getHashNameForProp(entity: number | IEntity, componentId: number, propIndex: number, propTextureIndex: number): number {
    const _entity = typeof entity == 'object' ? entity.handle() : entity;
    return GetHashNameForProp(_entity, componentId, propIndex, propTextureIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7A866D21CD2329B | Since: 323
 */
export function getNumDlcVehicles(): number {
    return GetNumDlcVehicles();
}

/**
 * Returns the total number of DLC weapons.
 * 
 * Hash: 0xEE47635F352DA367 | Since: 323
 */
export function getNumDlcWeapons(): number {
    return GetNumDlcWeapons();
}

/**
 * Returns the total number of DLC weapons that are available in SP (availableInSP field in shop_weapon.meta).
 * 
 * Hash: 0x4160B65AE085B5A9 | Since: 2060
 */
export function getNumDlcWeaponsSp(): number {
    return GetNumDlcWeaponsSp();
}

/**
 * Returns the total number of DLC weapon components.
 * 
 * Hash: 0x405425358A7D61FE | Since: 323
 */
export function getNumDlcWeaponComponents(dlcWeaponIndex: number): number {
    return GetNumDlcWeaponComponents(dlcWeaponIndex);
}

/**
 * Returns the total number of DLC weapon components that are available in SP.
 * 
 * Hash: 0xAD2A7A6DFF55841B | Since: 2060
 */
export function getNumDlcWeaponComponentsSp(dlcWeaponIndex: number): number {
    return GetNumDlcWeaponComponentsSp(dlcWeaponIndex);
}

/**
 * Character types:
 * 0 = Michael,
 * 1 = Franklin,
 * 2 = Trevor,
 * 3 = MPMale,
 * 4 = MPFemale
 * 
 * Hash: 0x278F76C3B0A8F109 | Since: 323
 */
export function getNumTattooShopDlcItems(character: number): number {
    return GetNumTattooShopDlcItems(character);
}

/**
 * Returns number of possible values of the forcedComponentIndex argument of GET_FORCED_COMPONENT.
 * 
 * Hash: 0xC6B9DB42C04DD8C3 | Since: 323
 */
export function getShopPedApparelForcedComponentCount(componentHash: number | string): number {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return GetShopPedApparelForcedComponentCount(componentHash);
}

/**
 * Returns number of possible values of the forcedPropIndex argument of GET_FORCED_PROP.
 * 
 * Hash: 0x017568A8182D98A6 | Since: 323
 */
export function getShopPedApparelForcedPropCount(componentHash: number | string): number {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return GetShopPedApparelForcedPropCount(componentHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xC17AD0E5752BECDA | Since: 323
 */
export function getShopPedApparelVariantComponentCount(componentHash: number | string): number {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return GetShopPedApparelVariantComponentCount(componentHash);
}

/**
 * `propHash`: Ped helmet prop hash?
 * This native returns 1 when the player helmet has a visor (there is another prop index for the same helmet with closed/opened visor variant) that can be toggled. 0 if there's no alternative version with a visor for this helmet prop.
 * 
 * Hash: 0xD40AAC51E8E4C663 | Since: 791
 */
export function getShopPedApparelVariantPropCount(propHash: number | string): number {
    if (typeof propHash === 'string') propHash = GetHashKey(propHash)
    return GetShopPedApparelVariantPropCount(propHash);
}

/**
 * More info here: https://gist.github.com/root-cause/3b80234367b0c856d60bf5cb4b826f86
 * 
 * Hash: 0x74C0E2A57EC66760 | Since: 323
 */
export function getShopPedComponent(componentHash: number | string): any {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return GetShopPedComponent(componentHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xB7952076E444979D | Since: 323
 */
export function getShopPedOutfit(): any {
    return GetShopPedOutfit(undefined);
}

/**
 * See https://git.io/JtcBH for example and structs.
 * 
 * Hash: 0x19F2A026EDF0013F | Since: 323
 */
export function getShopPedOutfitComponentVariant(outfitHash: number | string, variantIndex: number): [boolean, any] {
    if (typeof outfitHash === 'string') outfitHash = GetHashKey(outfitHash)
    return GetShopPedOutfitComponentVariant(outfitHash, variantIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x073CA26B079F956E | Since: 323
 */
export function getShopPedOutfitLocate(): number {
    return GetShopPedOutfitLocate(undefined);
}

/**
 * See https://git.io/JtcBH for example and structs.
 * 
 * Hash: 0xA9F9C2E0FDE11CBB | Since: 323
 */
export function getShopPedOutfitPropVariant(outfitHash: number | string, variantIndex: number): [boolean, any] {
    if (typeof outfitHash === 'string') outfitHash = GetHashKey(outfitHash)
    return GetShopPedOutfitPropVariant(outfitHash, variantIndex);
}

/**
 * More info here: https://gist.github.com/root-cause/3b80234367b0c856d60bf5cb4b826f86
 * 
 * Hash: 0x5D5CAFF661DDF6FC | Since: 323
 */
export function getShopPedProp(componentHash: number | string): any {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return GetShopPedProp(componentHash);
}

/**
 * See https://git.io/JtcRf for example and structs.
 * 
 * Hash: 0x249E310B2D920699 | Since: 323
 */
export function getShopPedQueryComponent(componentId: number): any {
    return GetShopPedQueryComponent(componentId);
}

/**
 * Returns some sort of index/offset for components.
 * Needs _GET_NUM_PROPS_FROM_OUTFIT to be called with p3 = false and componentId with the drawable's component slot first, returns -1 otherwise.
 * 
 * Hash: 0x96E2929292A4DB77 | Since: 2189
 */
export function getShopPedQueryComponentIndex(componentHash: number | string): number {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return Citizen.invokeNative('0x96E2929292A4DB77', componentHash);
}

/**
 * outfitIndex: from 0 to SETUP_SHOP_PED_OUTFIT_QUERY(characterIndex, false) - 1.
 * See https://git.io/JtcB8 for example and outfit struct.
 * 
 * Hash: 0x6D793F03A631FE56 | Since: 323
 */
export function getShopPedQueryOutfit(outfitIndex: number): any {
    return GetShopPedQueryOutfit(outfitIndex);
}

/**
 * See https://git.io/JtcRf for example and structs.
 * 
 * Hash: 0xDE44A00999B2837D | Since: 323
 */
export function getShopPedQueryProp(componentId: number): any {
    return GetShopPedQueryProp(componentId);
}

/**
 * Returns some sort of index/offset for props.
 * Needs _GET_NUM_PROPS_FROM_OUTFIT to be called with p3 = true and componentId = -1 first, returns -1 otherwise.
 * 
 * Hash: 0x6CEBE002E58DEE97 | Since: 2189
 */
export function getShopPedQueryPropIndex(componentHash: number | string): number {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return Citizen.invokeNative('0x6CEBE002E58DEE97', componentHash);
}

/**
 * Character types:
 * 0 = Michael,
 * 1 = Franklin,
 * 2 = Trevor,
 * 3 = MPMale,
 * 4 = MPFemale
 * 
 * 
 * enum TattooZoneData
 * {
 * ZONE_TORSO = 0,
 * ZONE_HEAD = 1,
 * ZONE_LEFT_ARM = 2,
 * ZONE_RIGHT_ARM = 3,
 * ZONE_LEFT_LEG = 4,
 * ZONE_RIGHT_LEG = 5,
 * ZONE_UNKNOWN = 6,
 * ZONE_NONE = 7,
 * };
 * struct outComponent
 * {
 * // these vars are suffixed with 4 bytes of padding each.
 * uint unk;
 * int unk2;
 * uint tattooCollectionHash;
 * uint tattooNameHash;
 * int unk3;
 * TattooZoneData zoneId;
 * uint unk4;
 * uint unk5;
 * // maybe more, not sure exactly, decompiled scripts are very vague around this part.
 * }
 * 
 * Hash: 0xFF56381874F82086 | Since: 323
 */
export function getTattooShopDlcItemData(characterType: number, decorationIndex: number): [boolean, any] {
    return GetTattooShopDlcItemData(characterType, decorationIndex);
}

/**
 * Returns some sort of index/offset for overlays/decorations.
 * 
 * Character types:
 * 0 = Michael,
 * 1 = Franklin,
 * 2 = Trevor,
 * 3 = MPMale,
 * 4 = MPFemale
 * 
 * Hash: 0x10144267DD22866C | Since: 2189
 */
export function getTattooShopDlcItemIndex(overlayHash: number | string, character: number): number {
    if (typeof overlayHash === 'string') overlayHash = GetHashKey(overlayHash)
    return GetTattooShopDlcItemIndex(overlayHash, undefined, character);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E11F282F11863B6 | Since: 323
 */
export function getVariantComponent(componentHash: number | string, variantComponentIndex: number): [number, number, number] {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return GetVariantComponent(componentHash, variantComponentIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xD81B7F27BC773E66 | Since: 791
 */
export function getVariantProp(componentHash: number | string, variantPropIndex: number): [number, number, number] {
    if (typeof componentHash === 'string') componentHash = GetHashKey(componentHash)
    return GetVariantProp(componentHash, variantPropIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x1E8C308FD312C036 | Since: 323
 */
export function initShopPedComponent(): any {
    return InitShopPedComponent();
}

/**
 * No comment provided
 * 
 * Hash: 0xEB0A2B758F7B850F | Since: 323
 */
export function initShopPedProp(): any {
    return InitShopPedProp();
}

/**
 * No comment provided
 * 
 * Hash: 0xD4D7B033C3AA243C | Since: 323
 */
export function isContentItemLocked(itemHash: number | string): boolean {
    if (typeof itemHash === 'string') itemHash = GetHashKey(itemHash)
    return IsContentItemLocked(itemHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x0564B9FF9631B82C | Since: 323
 */
export function isDlcVehicleMod(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return IsDlcVehicleMod(hash);
}

/**
 * From fm_deathmatch_creator and fm_race_creator:
 * 
 * `FILES::REVERT_CONTENT_CHANGESET_GROUP_FOR_ALL(joaat("GROUP_MAP_SP"));`
 * `FILES::EXECUTE_CONTENT_CHANGESET_GROUP_FOR_ALL(joaat("GROUP_MAP"));`
 * 
 * Hash: 0x3C1978285B036B25 | Since: 1604
 */
export function revertContentChangesetGroupForAll(hash: number | string): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    UnloadContentChangeSetGroup(hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x50F457823CE6EB5F | Since: 323
 */
export function setupShopPedApparelQuery(): number {
    return SetupShopPedApparelQuery(0, 0, 0, 0);
}

/**
 * character is 0 for Michael, 1 for Franklin, 2 for Trevor, 3 for freemode male, and 4 for freemode female.
 * 
 * componentId is between 0 and 11 and corresponds to the usual component slots.
 * 
 * p1 could be the outfit number; unsure.
 * 
 * p2 is usually -1; unknown function.
 * 
 * p3 appears to be for selecting between clothes and props; false is used with components/clothes, true is used with props.
 * 
 * p4 is usually -1; unknown function.
 * 
 * componentId is -1 when p3 is true in decompiled scripts.
 * 
 * Hash: 0x9BDF59818B1E38C1 | Since: 323
 */
export function setupShopPedApparelQueryTu(character: number, componentId: number): number {
    return SetupShopPedApparelQueryTu(character, 0, 0, false, 0, componentId);
}

/**
 * characters
 * 
 * 0: Michael
 * 1: Franklin
 * 2: Trevor
 * 3: MPMale
 * 4: MPFemale
 * 
 * Hash: 0xF3FBE2D50A6A8C28 | Since: 323
 */
export function setupShopPedOutfitQuery(character: number): number {
    return SetupShopPedOutfitQuery(character, false);
}

