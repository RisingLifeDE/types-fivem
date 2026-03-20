import { Vector3 } from '@risinglife/fivem-shared';
/**
 * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x310D0271 | Since: unknown | API-Set: client
 */
export function getNumberOfCollectionDrawableVariations(ped, componentId, collection) {
    return GetNumberOfPedCollectionDrawableVariations(ped, componentId, collection);
}
/**
 * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x3B6A13E1 | Since: unknown | API-Set: client
 */
export function getNumberOfCollectionPropDrawableVariations(ped, anchorPoint, collection) {
    return GetNumberOfPedCollectionPropDrawableVariations(ped, anchorPoint, collection);
}
/**
 * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
 *
 * Hash: 0x75CAF9CC | Since: unknown | API-Set: client
 */
export function getNumberOfCollectionPropTextureVariations(ped, anchorPoint, collection, propIndex) {
    return GetNumberOfPedCollectionPropTextureVariations(ped, anchorPoint, collection, propIndex);
}
/**
 * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
 *
 * Hash: 0xD2C15D7 | Since: unknown | API-Set: client
 */
export function getNumberOfCollectionTextureVariations(ped, componentId, collection, drawableId) {
    return GetNumberOfPedCollectionTextureVariations(ped, componentId, collection, drawableId);
}
/**
 * Returns number of variation collections available for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.
 *
 * Hash: 0x45946359 | Since: unknown | API-Set: client
 */
export function getCollectionsCount(ped) {
    return GetPedCollectionsCount(ped);
}
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0x94EB1FE4 | Since: unknown | API-Set: client
 */
export function getCollectionLocalIndexFromDrawable(ped, componentId, drawableId) {
    return GetPedCollectionLocalIndexFromDrawable(ped, componentId, drawableId);
}
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0xFBDB885F | Since: unknown | API-Set: client
 */
export function getCollectionLocalIndexFromProp(ped, anchorPoint, propIndex) {
    return GetPedCollectionLocalIndexFromProp(ped, anchorPoint, propIndex);
}
/**
 * Returns name of collection under given index for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.
 *
 * Hash: 0xFED5D83A | Since: unknown | API-Set: client
 */
export function getCollectionName(ped, index) {
    return GetPedCollectionName(ped, index);
}
/**
 * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0xD6BBA48B | Since: unknown | API-Set: client
 */
export function getCollectionNameFromDrawable(ped, componentId, drawableId) {
    return GetPedCollectionNameFromDrawable(ped, componentId, drawableId);
}
/**
 * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0x8ED0C17 | Since: unknown | API-Set: client
 */
export function getCollectionNameFromProp(ped, anchorPoint, propIndex) {
    return GetPedCollectionNameFromProp(ped, anchorPoint, propIndex);
}
/**
 * Returns a list of decorations applied to a ped.
 *
 * The data returned adheres to the following layout:
 *
 * ```
 * [ [ collectionHash1, overlayHash1 ], ..., [c ollectionHashN, overlayHashN ] ]
 * ```
 *
 * This command will return undefined data if invoked on a remote player ped.
 *
 * Hash: 0x7CCE1163 | Since: unknown | API-Set: client
 */
export function getDecorations(ped) {
    return GetPedDecorations(ped);
}
/**
 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
 *
 * Hash: 0xF5A904F9 | Since: unknown | API-Set: client
 */
export function getDensityMultiplier() {
    return GetPedDensityMultiplier();
}
/**
 * Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.
 *
 * Hash: 0x280F1FC3 | Since: unknown | API-Set: client
 */
export function getDrawableGlobalIndexFromCollection(ped, componentId, collection, drawableId) {
    return GetPedDrawableGlobalIndexFromCollection(ped, componentId, collection, drawableId);
}
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
 *
 * Hash: 0x9970386F | Since: unknown | API-Set: client
 */
export function getDrawableVariationCollectionLocalIndex(ped, componentId) {
    return GetPedDrawableVariationCollectionLocalIndex(ped, componentId);
}
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).
 *
 * Hash: 0xBCE0AB63 | Since: unknown | API-Set: client
 */
export function getDrawableVariationCollectionName(ped, componentId) {
    return GetPedDrawableVariationCollectionName(ped, componentId);
}
/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 *
 * Hash: 0xA47B860F | Since: unknown | API-Set: client
 */
export function getEyeColor(ped) {
    return GetPedEyeColor(ped);
}
/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 *
 * Hash: 0xBA352ADD | Since: unknown | API-Set: client
 */
export function getFaceFeature(ped, index) {
    return GetPedFaceFeature(ped, index);
}
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0xA3EA2893 | Since: unknown | API-Set: client
 */
export function getHairColor(ped) {
    return GetPedHairColor(ped);
}
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0x4B087305 | Since: unknown | API-Set: client
 */
export function getHairHighlightColor(ped) {
    return GetPedHairHighlightColor(ped);
}
/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 *
 * Hash: 0xC46EE605 | Since: unknown | API-Set: client
 */
export function getHeadOverlayData(ped, index) {
    return GetPedHeadOverlayData(ped, index);
}
/**
 * Gets a ped model's health config.
 *
 * Hash: 0xF71542F7 | Since: unknown | API-Set: client
 */
export function getModelHealthConfig(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetPedModelHealthConfig(modelHash);
}
/**
 * Gets a ped model's personality type.
 *
 * Hash: 0xFE08CAD6 | Since: unknown | API-Set: client
 */
export function getModelPersonality(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetPedModelPersonality(modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x69E81E3D | Since: unknown | API-Set: client
 */
export function getMovementClipset(ped) {
    return GetPedMovementClipset(ped);
}
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
 *
 * Hash: 0xCD420AD1 | Since: unknown | API-Set: client
 */
export function getPropCollectionLocalIndex(ped, anchorPoint) {
    return GetPedPropCollectionLocalIndex(ped, anchorPoint);
}
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).
 *
 * Hash: 0x6B5653E4 | Since: unknown | API-Set: client
 */
export function getPropCollectionName(ped, anchorPoint) {
    return GetPedPropCollectionName(ped, anchorPoint);
}
/**
 * Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.
 *
 * Hash: 0x2CB45CDC | Since: unknown | API-Set: client
 */
export function getPropGlobalIndexFromCollection(ped, anchorPoint, collection, propIndex) {
    return GetPedPropGlobalIndexFromCollection(ped, anchorPoint, collection, propIndex);
}
/**
 * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
 *
 * Hash: 0x44B91E94 | Since: unknown | API-Set: client
 */
export function getSweat(ped) {
    return GetPedSweat(ped);
}
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x33B2AFA2 | Since: unknown | API-Set: client
 */
export function isCollectionComponentVariationGen9Exclusive(ped, componentId, collection, drawableId) {
    return IsPedCollectionComponentVariationGen9Exclusive(ped, componentId, collection, drawableId);
}
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0xCA63A52A | Since: unknown | API-Set: client
 */
export function isCollectionComponentVariationValid(ped, componentId, collection, drawableId, textureId) {
    return IsPedCollectionComponentVariationValid(ped, componentId, collection, drawableId, textureId);
}
/**
 * No comment provided
 *
 * Hash: 0xC767B581 | Since: unknown | API-Set: client
 */
export function isComponentVariationGen9Exclusive(ped, componentId, drawableId) {
    return IsPedComponentVariationGen9Exclusive(ped, componentId, drawableId);
}
/**
 * Sets whether peds can stand on top of *all* vehicles without falling off.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x90A9E0B2 | Since: unknown | API-Set: client
 */
export function overridesCanStandOnTopFlag(flag) {
    OverridePedsCanStandOnTopFlag(flag);
}
/**
 * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).
 *
 * Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
 *
 * Hash: 0xB14F8EAD | Since: unknown | API-Set: client
 */
export function overridesUseDefaultDriveByClipset(flag) {
    OverridePedsUseDefaultDriveByClipset(flag);
}
/**
 * Restores an overridden ped model personality type to the default value.
 *
 * Hash: 0x79A12861 | Since: unknown | API-Set: client
 */
export function resetModelPersonality(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    ResetPedModelPersonality(modelHash);
}
/**
 * An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x88711BBA | Since: unknown | API-Set: client
 */
export function setCollectionComponentVariation(ped, componentId, collection, drawableId, textureId, paletteId) {
    SetPedCollectionComponentVariation(ped, componentId, collection, drawableId, textureId, paletteId);
}
/**
 * An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x14B5BBE0 | Since: unknown | API-Set: client
 */
export function setCollectionPreloadPropData(ped, anchorPoint, collection, propIndex, textureId) {
    SetPedCollectionPreloadPropData(ped, anchorPoint, collection, propIndex, textureId);
}
/**
 * An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x3EC75558 | Since: unknown | API-Set: client
 */
export function setCollectionPreloadVariationData(ped, componentId, collection, drawableId, textureId) {
    SetPedCollectionPreloadVariationData(ped, componentId, collection, drawableId, textureId);
}
/**
 * An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x75240BCB | Since: unknown | API-Set: client
 */
export function setCollectionPropIndex(ped, anchorPoint, collection, propIndex, textureId, attach) {
    SetPedCollectionPropIndex(ped, anchorPoint, collection, propIndex, textureId, attach);
}
/**
 * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.
 *
 * This native infers the number of observers based on the primary and secondary counts.
 *
 * Hash: 0x8E51EC29 | Since: unknown | API-Set: client
 */
export function setMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount) {
    SetPedMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount);
}
/**
 * Sets a ped model's health config.
 * Takes effect only after setting player model with `SET_PLAYER_MODEL`.
 *
 * Hash: 0xAF12A05D | Since: unknown | API-Set: client
 */
export function setModelHealthConfig(modelHash, configName) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    SetPedModelHealthConfig(modelHash, configName);
}
/**
 * Overrides a ped model personality type.
 *
 * Hash: 0x46F6B38B | Since: unknown | API-Set: client
 */
export function setModelPersonality(modelHash, personalityHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    if (typeof personalityHash === 'string')
        personalityHash = GetHashKey(personalityHash);
    SetPedModelPersonality(modelHash, personalityHash);
}
/**
 * Purpose: The game's default values for these make shooting while traveling Left quite a bit slower than shooting while traveling right (This could be a game-balance thing?)
 *
 * Default Min: -45 Degrees
 * Default Max: 135 Degrees
 *
 * ```
 * \ ,- ~ ||~ - ,
 * , ' \    x   x    ' ,
 * ```
 *
 * ,      \    x    x   x  ,
 * ,         \  x     x      ,
 * ,            \     x    x  ,
 * ,              \      x    ,
 * ,                \   x     ,
 * ,                 \   x x ,
 * ,                  \  x ,
 * ,                 , '
 * ' - , \_ \_ \_ ,  '  \\
 *
 * If the transition angle is within the shaded portion (x), there will be no transition(Quicker)
 * The angle corresponds to where you are looking(North on the circle) vs. the heading of your Ped.
 * Note: For some reason,
 *
 * You can set these values to whatever you'd like with this native, but keep in mind that the transitional spin is only clockwise for some reason.
 *
 * I'd personally recommend something like -135/135
 *
 * Hash: 0xB300F03 | Since: unknown | API-Set: client
 */
export function setTurningThresholds(min, max) {
    SetPedTurningThresholds(min, max);
}
/**
 * Returns the bone matrix of the specified bone id. usefull for entity attachment
 *
 * Hash: 0x9C5E7C9C | Since: unknown | API-Set: client
 */
export function getBoneMatrix(ped, boneId) {
    return GetPedBoneMatrix(ped, boneId);
}
/**
 * Same as SET_PED_ARMOUR, but ADDS 'amount' to the armor the Ped already has.
 *
 * Hash: 0x5BA652A0CD14DF2F | Since: 323 | API-Set: unknown
 */
export function addArmourTo(ped, amount) {
    AddArmourToPed(ped, amount);
}
/**
 * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
 *
 * collection - PedDecorationCollection filename hash
 * overlay - Item name hash
 *
 * Example:
 * Entry inside "mpbeach_overlays.xml" -
 * <Item>
 * <uvPos x="0.500000" y="0.500000" />
 * <scale x="0.600000" y="0.500000" />
 * <rotation value="0.000000" />
 * <nameHash>FM_Hair_Fuzz</nameHash>
 * <txdHash>mp_hair_fuzz</txdHash>
 * <txtHash>mp_hair_fuzz</txtHash>
 * <zone>ZONE_HEAD</zone>
 * <type>TYPE_TATTOO</type>
 * <faction>FM</faction>
 * <garment>All</garment>
 * <gender>GENDER_DONTCARE</gender>
 * <award />
 * <awardLevel />
 * </Item>
 *
 * Code:
 * `PED::ADD_PED_DECORATION_FROM_HASHES(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))`
 *
 * Full list of ped overlays / decorations by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedOverlayCollections.json
 *
 * Hash: 0x5F5D1665E352A839 | Since: 323 | API-Set: unknown
 */
export function addDecorationFromHashes(ped, collection, overlay) {
    if (typeof collection === 'string')
        collection = GetHashKey(collection);
    if (typeof overlay === 'string')
        overlay = GetHashKey(overlay);
    AddPedDecorationFromHashes(ped, collection, overlay);
}
/**
 * Full list of ped overlays / decorations by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedOverlayCollections.json
 *
 * Hash: 0x5619BFA07CFD7833 | Since: 323 | API-Set: unknown
 */
export function addDecorationFromHashesInCorona(ped, collection, overlay) {
    if (typeof collection === 'string')
        collection = GetHashKey(collection);
    if (typeof overlay === 'string')
        overlay = GetHashKey(overlay);
    AddPedDecorationFromHashesInCorona(ped, collection, overlay);
}
/**
 * Can't select void. This function returns nothing. The hash of the created relationship group is output in the second parameter.
 *
 * Hash: 0xF372BC22FCB88606 | Since: 323 | API-Set: unknown
 */
export function addRelationshipGroup(name) {
    return AddRelationshipGroup(name);
}
/**
 * No comment provided
 *
 * Hash: 0x1B5C85C612E5256E | Since: 323 | API-Set: unknown
 */
export function addScenarioBlockingArea(x1, y1, z1, x2, y2, z2) {
    return AddScenarioBlockingArea(x1, y1, z1, x2, y2, z2, false, false, false, false, undefined);
}
/**
 * damages a ped with the given amount
 *
 * Hash: 0x697157CED63F18D4 | Since: 323 | API-Set: unknown
 */
export function applyDamageTo(ped, damageAmount, weaponType) {
    if (typeof weaponType === 'string')
        weaponType = GetHashKey(weaponType);
    ApplyDamageToPed(ped, damageAmount, false, undefined, weaponType);
}
/**
 * woundTypes:
 * - soak_splat
 * - wound_sheet
 * - BulletSmall
 * - BulletLarge
 * - ShotgunSmall
 * - ShotgunSmallMonolithic
 * - ShotgunLarge
 * - ShotgunLargeMonolithic
 * - NonFatalHeadshot
 * - stab
 * - BasicSlash
 * - Scripted_Ped_Splash_Back
 * - BackSplash
 *
 * Hash: 0x83F7E01C7B769A26 | Since: 323 | API-Set: unknown
 */
export function applyBlood(ped, boneIndex, rot, woundType) {
    ApplyPedBlood(ped, boneIndex, rot.x, rot.y, rot.z, woundType);
}
/**
 * No comment provided
 *
 * Hash: 0x3311E47B91EDCBBC | Since: 323 | API-Set: unknown
 */
export function applyBloodByZone(ped) {
    ApplyPedBloodByZone(ped, 0, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x816F6981C60BF53B | Since: 323 | API-Set: unknown
 */
export function applyBloodDamageByZone(ped) {
    ApplyPedBloodDamageByZone(ped, undefined, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEF0D582CBF2D9B0F | Since: 323 | API-Set: unknown
 */
export function applyBloodSpecific(ped) {
    ApplyPedBloodSpecific(ped, 0, 0, 0, 0, 0, 0, 0, undefined);
}
/**
 * enum eDamageZone
 * {
 * DZ_Torso = 0,
 * DZ_Head,
 * DZ_LeftArm,
 * DZ_RightArm,
 * DZ_LeftLeg,
 * DZ_RightLeg,
 * };
 *
 * Decal Names:
 * scar
 * blushing
 * cs_flush_anger
 * cs_flush_anger_face
 * bruise
 * bruise_large
 * herpes
 * ArmorBullet
 * basic_dirt_cloth
 * basic_dirt_skin
 * cs_trev1_dirt
 *
 * APPLY_PED_DAMAGE_DECAL(ped, 1, 0.5f, 0.513f, 0f, 1f, unk, 0, 0, "blushing");
 *
 * Hash: 0x397C38AA7B4A5F83 | Since: 323 | API-Set: unknown
 */
export function applyDamageDecal(ped, damageZone, xOffset, yOffset, heading, scale, alpha, variation, fadeIn, decalName) {
    ApplyPedDamageDecal(ped, damageZone, xOffset, yOffset, heading, scale, alpha, variation, fadeIn, decalName);
}
/**
 * Damage Packs:
 *
 * "SCR_TrevorTreeBang"
 * "HOSPITAL_0"
 * "HOSPITAL_1"
 * "HOSPITAL_2"
 * "HOSPITAL_3"
 * "HOSPITAL_4"
 * "HOSPITAL_5"
 * "HOSPITAL_6"
 * "HOSPITAL_7"
 * "HOSPITAL_8"
 * "HOSPITAL_9"
 * "SCR_Dumpster"
 * "BigHitByVehicle"
 * "SCR_Finale_Michael_Face"
 * "SCR_Franklin_finb"
 * "SCR_Finale_Michael"
 * "SCR_Franklin_finb2"
 * "Explosion_Med"
 * "SCR_Torture"
 * "SCR_TracySplash"
 * "Skin_Melee_0"
 *
 * Additional damage packs:
 *
 * gist.github.com/alexguirre/f3f47f75ddcf617f416f3c8a55ae2227
 * Full list of ped damage packs by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedDamagePacks.json
 *
 * Hash: 0x46DF918788CB093F | Since: 323 | API-Set: unknown
 */
export function applyDamagePack(ped, damagePack, damage, mult) {
    ApplyPedDamagePack(ped, damagePack, damage, mult);
}
/**
 * No comment provided
 *
 * Hash: 0x272E4723B56A3B96 | Since: 323 | API-Set: unknown
 */
export function attachSynchronizedSceneToEntity(sceneID, entity, boneIndex) {
    AttachSynchronizedSceneToEntity(sceneID, entity, boneIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xE43A13C9E4CCCBCF | Since: 323 | API-Set: unknown
 */
export function blockFromGeneratingDeadBodyEventsWhenDead(ped, toggle) {
    BlockPedDeadBodyShockingEvents(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xEACEEDA81751915C | Since: 323 | API-Set: unknown
 */
export function canCreateRandomBikeRider() {
    return CanCreateRandomBikeRider();
}
/**
 * No comment provided
 *
 * Hash: 0x5EE2CAFF7F17770D | Since: 323 | API-Set: unknown
 */
export function canCreateRandomCops() {
    return CanCreateRandomCops();
}
/**
 * No comment provided
 *
 * Hash: 0xB8EB95E5B4E56978 | Since: 323 | API-Set: unknown
 */
export function canCreateRandomDriver() {
    return CanCreateRandomDriver();
}
/**
 * No comment provided
 *
 * Hash: 0x3E8349C08E4B82E4 | Since: 323 | API-Set: unknown
 */
export function canCreateRandom() {
    return CanCreateRandomPed(false);
}
/**
 * No comment provided
 *
 * Hash: 0x51AC07A44D4F5B8A | Since: 323 | API-Set: unknown
 */
export function canKnockOffVehicle(ped) {
    return CanKnockPedOffVehicle(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEAD42DE3610D0721 | Since: 323 | API-Set: unknown
 */
export function canInCombatSeeTarget(ped, target) {
    return CanPedInCombatSeeTarget(ped, target);
}
/**
 * Prevents the ped from going limp.
 *
 * [Example: Can prevent peds from falling when standing on moving vehicles.]
 *
 * Hash: 0x128F79EDCECE4FD5 | Since: 323 | API-Set: unknown
 */
export function canRagdoll(ped) {
    return CanPedRagdoll(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6CD5A433374D4CFB | Since: 323 | API-Set: unknown
 */
export function canSeeHatedPed(ped1, ped2) {
    return CanPedSeeHatedPed(ped1, ped2);
}
/**
 * No comment provided
 *
 * Hash: 0x2DFC81C9B9608549 | Since: 944 | API-Set: unknown
 */
export function canShuffleToOrFromExtraSeat(ped) {
    return Citizen.invokeNative('0x2DFC81C9B9608549', ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9C6A6C19B6C0C496 | Since: 323 | API-Set: unknown
 */
export function canShuffleToOrFromTurretSeat(ped) {
    return Citizen.invokeNative('0x9C6A6C19B6C0C496', ped);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0xCD8A7537A9B52F06 | Since: 323 | API-Set: unknown
 */
export function clearAllProps(ped) {
    ClearAllPedProps(ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE6CA85E7259CE16B | Since: 323 | API-Set: unknown
 */
export function clearAllVehicleForcedSeatUsage(ped) {
    ClearAllPedVehicleForcedSeatUsage(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x637822DC2AFEEBF8 | Since: 1493 | API-Set: unknown
 */
export function clearCoverPointFor(ped) {
    ClearFacialClipsetOverride(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x726256CC1EEB182F | Since: 323 | API-Set: unknown
 */
export function clearFacialIdleAnimOverride(ped) {
    ClearFacialIdleAnimOverride(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD8D19675ED5FBDCE | Since: 323 | API-Set: unknown
 */
export function clearAlternateMovementAnim(ped, stance) {
    ClearPedAlternateMovementAnim(ped, stance, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8844BBFCE30AA9E9 | Since: 323 | API-Set: unknown
 */
export function clearAlternateWalkAnim(ped) {
    ClearPedAlternateWalkAnim(ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8FE22675A5A45817 | Since: 323 | API-Set: unknown
 */
export function clearBloodDamage(ped) {
    ClearPedBloodDamage(ped);
}
/**
 * Somehow related to changing ped's clothes.
 *
 * Hash: 0x56E3B78C5408D9F4 | Since: 323 | API-Set: unknown
 */
export function clearBloodDamageByZone(ped) {
    ClearPedBloodDamageByZone(ped, 0);
}
/**
 * p1: from 0 to 5 in the b617d scripts.
 * p2: "blushing" and "ALL" found in the b617d scripts.
 *
 * Hash: 0x523C79AEEFCC4A2A | Since: 323 | API-Set: unknown
 */
export function clearDamageDecalByZone(ped) {
    ClearPedDamageDecalByZone(ped, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0E5173C163976E38 | Since: 323 | API-Set: unknown
 */
export function clearDecorations(ped) {
    ClearPedDecorations(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE3B27E70CEAB9F0C | Since: 323 | API-Set: unknown
 */
export function clearDecorationsLeaveScars(ped) {
    ClearPedDecorationsLeaveScars(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4AFE3690D7E0B5AC | Since: 323 | API-Set: unknown
 */
export function clearDriveByClipsetOverride(ped) {
    ClearPedDriveByClipsetOverride(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6585D955A68452A5 | Since: 323 | API-Set: unknown
 */
export function clearEnvDirt(ped) {
    ClearPedEnvDirt(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x80054D7FCC70EEC6 | Since: 323 | API-Set: unknown
 */
export function clearFallUpperBodyClipsetOverride(ped) {
    Citizen.invokeNative('0x80054D7FCC70EEC6', ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8EF6B7AC68E2F01B | Since: 323 | API-Set: unknown
 */
export function clearLastDamageBone(ped) {
    ClearPedLastDamageBone(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC79196DCB36F6121 | Since: 323 | API-Set: unknown
 */
export function clearMotionInCoverClipsetOverride(ped) {
    ClearPedCoverClipsetOverride(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2E05208086BA0651 | Since: 323 | API-Set: unknown
 */
export function clearNonCreationArea() {
    ClearPedNonCreationArea();
}
/**
 * No comment provided
 *
 * Hash: 0x1280804F7CFD2D6C | Since: 323 | API-Set: unknown
 */
export function clearParachutePackVariation(ped) {
    ClearPedParachutePackVariation(ped);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0x0943E5B8E078E76E | Since: 323 | API-Set: unknown
 */
export function clearProp(ped, propId) {
    ClearPedProp(ped, propId, undefined);
}
/**
 * Removes the scubagear (for mp male: component id: 8, drawableId: 123, textureId: any) from peds. Does not play the 'remove scuba gear' animation, but instantly removes it.
 *
 * Hash: 0xB50EB4CCB29704AC | Since: 323 | API-Set: unknown
 */
export function clearScubaGearVariation(ped) {
    ClearPedScubaGearVariation(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x687C0B594907D2E8 | Since: 323 | API-Set: unknown
 */
export function clearStoredHatProp(ped) {
    ClearPedStoredHatProp(ped);
}
/**
 * It clears the wetness of the selected Ped/Player. Clothes have to be wet to notice the difference.
 *
 * Hash: 0x9C720776DAA43E7E | Since: 323 | API-Set: unknown
 */
export function clearWetness(ped) {
    ClearPedWetness(ped);
}
/**
 * See SET_RAGDOLL_BLOCKING_FLAGS for flags
 *
 * Hash: 0xD86D101FCFD00A4B | Since: 323 | API-Set: unknown
 */
export function clearRagdollBlockingFlags(ped, blockingFlag) {
    ClearRagdollBlockingFlags(ped, blockingFlag);
}
/**
 * Clears the relationship between two groups. This should be called twice (once for each group).
 *
 * Relationship types:
 * 0 = Companion
 * 1 = Respect
 * 2 = Like
 * 3 = Neutral
 * 4 = Dislike
 * 5 = Hate
 * 255 = Pedestrians
 * (Credits: Inco)
 *
 * Example:
 * `PED::CLEAR_RELATIONSHIP_BETWEEN_GROUPS(2, l_1017, 0xA49E591C);`
 * `PED::CLEAR_RELATIONSHIP_BETWEEN_GROUPS(2, 0xA49E591C, l_1017);`
 *
 * Hash: 0x5E29243FB56FC6D4 | Since: 323 | API-Set: unknown
 */
export function clearRelationshipBetweenGroups(relationship, group1, group2) {
    if (typeof group1 === 'string')
        group1 = GetHashKey(group1);
    if (typeof group2 === 'string')
        group2 = GetHashKey(group2);
    ClearRelationshipBetweenGroups(relationship, group1, group2);
}
/**
 * No comment provided
 *
 * Hash: 0xEF29A16337FACADB | Since: 323 | API-Set: unknown
 */
export function clone(ped, isNetwork, bScriptHostPed, copyHeadBlendFlag) {
    return ClonePed(ped, isNetwork, bScriptHostPed, copyHeadBlendFlag);
}
/**
 * No comment provided
 *
 * Hash: 0x668FD40BCBA5DE48 | Since: 463 | API-Set: unknown
 */
export function cloneAlt(ped, isNetwork, bScriptHostPed, copyHeadBlendFlag) {
    return ClonePedEx(ped, isNetwork, bScriptHostPed, copyHeadBlendFlag, false);
}
/**
 * Copies ped's components and props to targetPed.
 *
 * Hash: 0xE952D6431689AD9A | Since: 323 | API-Set: unknown
 */
export function cloneToTarget(ped, targetPed) {
    ClonePedToTarget(ped, targetPed);
}
/**
 * No comment provided
 *
 * Hash: 0x148B08C2D2ACB884 | Since: 463 | API-Set: unknown
 */
export function cloneToTargetAlt(ped, targetPed) {
    ClonePedToTargetEx(ped, targetPed, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5407B7288D0478B7 | Since: 323 | API-Set: unknown
 */
export function countsInCombatWithTarget(ped) {
    return Citizen.invokeNative('0x5407B7288D0478B7', ped);
}
/**
 * No comment provided
 *
 * Hash: 0x336B3D200AB007CB | Since: 323 | API-Set: unknown
 */
export function countsInCombatWithTargetWithinRadius(ped, pos, radius) {
    return Citizen.invokeNative('0x336B3D200AB007CB', ped, pos.x, pos.y, pos.z, radius);
}
/**
 * Creates a new ped group.
 * Groups can contain up to 8 peds.
 *
 * The parameter is unused.
 *
 * Returns a handle to the created group, or 0 if a group couldn't be created.
 *
 * Hash: 0x90370EBE0FEE1A3D | Since: 323 | API-Set: unknown
 */
export function createGroup(unused) {
    return CreateGroup(unused);
}
/**
 * Creates a new NaturalMotion message.
 *
 * startImmediately: If set to true, the character will perform the message the moment it receives it by GIVE_PED_NM_MESSAGE. If false, the Ped will get the message but won't perform it yet. While it's a boolean value, if negative, the message will not be initialized.
 * messageId: The ID of the NaturalMotion message.
 *
 * If a message already exists, this function does nothing. A message exists until the point it has been successfully dispatched by GIVE_PED_NM_MESSAGE.
 *
 * Hash: 0x418EF2A1BCE56685 | Since: 323 | API-Set: unknown
 */
export function createNmMessage(startImmediately, messageId) {
    CreateNmMessage(startImmediately, messageId);
}
/**
 * No comment provided
 *
 * Hash: 0x8C4F3BF23B6237DB | Since: 323 | API-Set: unknown
 */
export function createParachuteBagObject(ped) {
    return CreateParachuteBagObject(ped, false, false);
}
/**
 * https://alloc8or.re/gta5/doc/enums/ePedType.txt
 *
 * Full list of peds by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/peds.json
 *
 * Hash: 0xD49F9B0955C367DE | Since: 323 | API-Set: unknown
 */
export function create(pedType, modelHash, pos, heading, isNetwork, bScriptHostPed) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePed(pedType, modelHash, pos.x, pos.y, pos.z, heading, isNetwork, bScriptHostPed);
}
/**
 * pedType: see CREATE_PED
 *
 * Full list of peds by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/peds.json
 *
 * Hash: 0x7DD959874C1FD534 | Since: 323 | API-Set: unknown
 */
export function createInsideVehicle(vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePedInsideVehicle(vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed);
}
/**
 * vb.net
 * Dim ped_handle As Integer
 * With Game.Player.Character
 * Dim pos As Vector3 = .Position + .ForwardVector * 3
 * ped_handle = Native.Function.Call(Of Integer)(Hash.CREATE_RANDOM_PED, pos.X, pos.Y, pos.Z)
 * End With
 *
 * Creates a Ped at the specified location, returns the Ped Handle.
 * Ped will not act until SET_PED_AS_NO_LONGER_NEEDED is called.
 *
 * Hash: 0xB4AC7D0CF06BFE8F | Since: 323 | API-Set: unknown
 */
export function createRandom(pos) {
    return CreateRandomPed(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x9B62392B474F44A0 | Since: 323 | API-Set: unknown
 */
export function createRandomAsDriver(vehicle, returnHandle) {
    return CreateRandomPedAsDriver(vehicle, returnHandle);
}
/**
 * p6 always 2 (but it doesnt seem to matter...)
 *
 * roll and pitch 0
 * yaw to Ped.rotation
 *
 * Hash: 0x8C18E0F9080ADD73 | Since: 323 | API-Set: unknown
 */
export function createSynchronizedScene(pos, roll, pitch, yaw) {
    return CreateSynchronizedScene(pos.x, pos.y, pos.z, roll, pitch, yaw, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x62EC273D00187DCA | Since: 323 | API-Set: unknown
 */
export function createSynchronizedSceneAtMapObject(pos, radius, _object) {
    if (typeof _object === 'string')
        _object = GetHashKey(_object);
    return CreateSynchronizedScene2(pos.x, pos.y, pos.z, radius, _object);
}
/**
 * Deletes the specified ped, then sets the handle pointed to by the pointer to NULL.
 *
 * Hash: 0x9614299DCB53E54B | Since: 323 | API-Set: unknown
 */
export function deletePed(ped) {
    DeletePed(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6D38F1F04CBB37EA | Since: 323 | API-Set: unknown
 */
export function detachSynchronizedScene(sceneID) {
    DetachSynchronizedScene(sceneID);
}
/**
 * No comment provided
 *
 * Hash: 0xA21C118553BBDF02 | Since: 323 | API-Set: unknown
 */
export function disableHeadBlendPaletteColor(ped) {
    DisableHeadBlendPaletteColor(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x600048C60D5C2C51 | Since: 323 | API-Set: unknown
 */
export function disableHeatscaleOverride(ped) {
    DisablePedHeatscaleOverride(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x733C87D4CE22BEA2 | Since: 323 | API-Set: unknown
 */
export function disableInjuredOnGroundBehaviour(ped) {
    Citizen.invokeNative('0x733C87D4CE22BEA2', ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7C6B0C22F9F40BBE | Since: 323 | API-Set: unknown
 */
export function doesGroupExist(groupId) {
    return DoesGroupExist(groupId);
}
/**
 * No comment provided
 *
 * Hash: 0xCC6E3B6BB69501F1 | Since: 505 | API-Set: unknown
 */
export function doesRelationshipGroupExist(groupHash) {
    if (typeof groupHash === 'string')
        groupHash = GetHashKey(groupHash);
    return DoesRelationshipGroupExist(groupHash);
}
/**
 * No comment provided
 *
 * Hash: 0x8A24B067D175A7BD | Since: 678 | API-Set: unknown
 */
export function doesScenarioBlockingAreaExists(x1, y1, z1, x2, y2, z2) {
    return DoesScenarioBlockingAreaExist(x1, y1, z1, x2, y2, z2);
}
/**
 * No comment provided
 *
 * Hash: 0xAFF4710E2A0A6C12 | Since: 323 | API-Set: unknown
 */
export function dropAmbientProp(ped) {
    DropAmbientProp(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEE2476B9EE4A094F | Since: 1493 | API-Set: unknown
 */
export function enableMpLight(ped, toggle) {
    SetEnableScubaGearLight(ped, toggle);
}
/**
 * Forces the ped to fall back and kills it.
 *
 * It doesn't really explode the ped's head but it kills the ped
 *
 * Hash: 0x2D05CED3A38D0F3A | Since: 323 | API-Set: unknown
 */
export function explodeHead(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    ExplodePedHead(ped, weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0x4668D80430D6C299 | Since: 323 | API-Set: unknown
 */
export function finalizeHeadBlend(ped) {
    FinalizeHeadBlend(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xFF287323B0E2C69A | Since: 323 | API-Set: unknown
 */
export function forceAllHeadingValuesToAlign(ped) {
    FreezePedCameraRotation(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xED3C76ADFA6D07C4 | Since: 323 | API-Set: unknown
 */
export function forceInstantLegIkSetup(ped) {
    Citizen.invokeNative('0xED3C76ADFA6D07C4', ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2208438012482A1A | Since: 323 | API-Set: unknown
 */
export function forceAiAndAnimationUpdate(ped) {
    ForcePedAiAndAnimationUpdate(ped, false, false);
}
/**
 * Regarding p2, p3 and p4: Most common is 0, 0, 0); followed by 0, 1, 0); and 1, 1, 0); in R* scripts. p4 is very rarely something other than 0.
 *
 * enum eMotionState // 0x92A659FE
 * {
 * MotionState_None = 0xEE717723,
 * MotionState_Idle = 0x9072A713,
 * MotionState_Walk = 0xD827C3DB,
 * MotionState_Run = 0xFFF7E7A4,
 * MotionState_Sprint = 0xBD8817DB,
 * MotionState_Crouch_Idle = 0x43FB099E,
 * MotionState_Crouch_Walk = 0x08C31A98,
 * MotionState_Crouch_Run = 0x3593CF09,
 * MotionState_DoNothing = 0x0EC17E58,
 * MotionState_AnimatedVelocity = 0x551AAC43,
 * MotionState_InVehicle = 0x94D9D58D,
 * MotionState_Aiming = 0x3F67C6AF,
 * MotionState_Diving_Idle = 0x4848CDED,
 * MotionState_Diving_Swim = 0x916E828C,
 * MotionState_Swimming_TreadWater = 0xD1BF11C7,
 * MotionState_Dead = 0x0DBB071C,
 * MotionState_Stealth_Idle = 0x422D7A25,
 * MotionState_Stealth_Walk = 0x042AB6A2,
 * MotionState_Stealth_Run = 0xFB0B79E1,
 * MotionState_Parachuting = 0xBAC0F10B,
 * MotionState_ActionMode_Idle = 0xDA40A0DC,
 * MotionState_ActionMode_Walk = 0xD2905EA7,
 * MotionState_ActionMode_Run = 0x31BADE14,
 * MotionState_Jetpack = 0x535E6A5E
 * };
 *
 * Hash: 0xF28965D04F570DCA | Since: 323 | API-Set: unknown
 */
export function forceMotionState(ped, motionStateHash) {
    if (typeof motionStateHash === 'string')
        motionStateHash = GetHashKey(motionStateHash);
    return ForcePedMotionState(ped, motionStateHash, false, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x16E42E800B472221 | Since: 323 | API-Set: unknown
 */
export function forceToOpenParachute(ped) {
    ForcePedToOpenParachute(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD33DAA36272177C4 | Since: 323 | API-Set: unknown
 */
export function forceZeroMassInCollisions(ped) {
    Citizen.invokeNative('0xD33DAA36272177C4', ped);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0xBE22B26DD764C040 | Since: 323 | API-Set: unknown
 */
export function getAnimInitialOffsetPosition(animDict, animName, pos, rot) {
    return new Vector3(GetAnimInitialOffsetPosition(animDict, animName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, 0, 0));
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x4B805E6046EE9E47 | Since: 323 | API-Set: unknown
 */
export function getAnimInitialOffsetRotation(animDict, animName, pos, rot) {
    return new Vector3(GetAnimInitialOffsetRotation(animDict, animName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, 0, 0));
}
/**
 * No comment provided
 *
 * Hash: 0x03EA03AF85A85CB7 | Since: 323 | API-Set: unknown
 */
export function getCanBeGrabbedByScript(ped) {
    return Citizen.invokeNative('0x03EA03AF85A85CB7', ped, false, false, false, false, false, false, false, undefined);
}
/**
 * Gets the closest ped in a radius.
 *
 * Ped Types:
 * Any ped = -1
 * Player = 1
 * Male = 4
 * Female = 5
 * Cop = 6
 * Human = 26
 * SWAT = 27
 * Animal = 28
 * Army = 29
 *
 * ------------------
 * P4 P5 P7 P8
 * 1  0  x  x  = return nearest walking Ped
 * 1  x  0  x  = return nearest walking Ped
 * x  1  1  x  = return Ped you are using
 * 0  0  x  x  = no effect
 * 0  x  0  x  = no effect
 *
 * x = can be 1 or 0. Does not have any obvious changes.
 *
 * This function does not return ped who is:
 * 1. Standing still
 * 2. Driving
 * 3. Fleeing
 * 4. Attacking
 *
 * This function only work if the ped is:
 * 1. walking normally.
 * 2. waiting to cross a road.
 *
 * `Note: PED::GET_PED_NEARBY_PEDS works for more peds.`
 *
 * Hash: 0xC33AB876A77F8164 | Since: 323 | API-Set: unknown
 */
export function getClosest(pos, radius, pedType) {
    return GetClosestPed(pos.x, pos.y, pos.z, radius, false, false, false, false, pedType);
}
/**
 * p0: Ped Handle
 * p1: int i | 0 <= i <= 27
 *
 * p1 probably refers to the attributes configured in combatbehavior.meta. There are 13. Example:
 *
 * <BlindFireChance value="0.1"/>
 * <WeaponShootRateModifier value="1.0"/>
 * <TimeBetweenBurstsInCover value="1.25"/>
 * <BurstDurationInCover value="2.0"/>
 * <TimeBetweenPeeks value="10.0"/>
 * <WeaponAccuracy value="0.18"/>
 * <FightProficiency value="0.8"/>
 * <StrafeWhenMovingChance value="1.0"/>
 * <WalkWhenStrafingChance value="0.0"/>
 * <AttackWindowDistanceForCover value="55.0"/>
 * <TimeToInvalidateInjuredTarget value="9.0"/>
 * <TriggerChargeTime_Near value="4.0"/>
 * <TriggerChargeTime_Far value="10.0"/>
 *
 * -------------Confirmed by editing combatbehavior.meta:
 * p1:
 * 0=BlindFireChance
 * 1=BurstDurationInCover
 * 3=TimeBetweenBurstsInCover
 * 4=TimeBetweenPeeks
 * 5=StrafeWhenMovingChance
 * 8=WalkWhenStrafingChance
 * 11=AttackWindowDistanceForCover
 * 12=TimeToInvalidateInjuredTarget
 * 16=OptimalCoverDistance
 *
 *
 * Hash: 0x52DFF8A10508090A | Since: 323 | API-Set: unknown
 */
export function getCombatFloat(ped) {
    return GetCombatFloat(ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xCD5003B097200F36 | Since: 323 | API-Set: unknown
 */
export function getDeadPickupCoords(ped) {
    return new Vector3(GetDeadPedPickupCoords(ped, 0, 0));
}
/**
 * No comment provided
 *
 * Hash: 0xAAA6A3698A69E048 | Since: 323 | API-Set: unknown
 */
export function getDefaultSecondaryTintForBarber(colorID) {
    return Citizen.invokeNative('0xAAA6A3698A69E048', colorID);
}
/**
 * No comment provided
 *
 * Hash: 0xEA9960D07DADCF10 | Since: 323 | API-Set: unknown
 */
export function getDefaultSecondaryTintForCreator(colorId) {
    return Citizen.invokeNative('0xEA9960D07DADCF10', colorId);
}
/**
 * No comment provided
 *
 * Hash: 0xF033419D1B81FAE8 | Since: 323 | API-Set: unknown
 */
export function getFmFemaleShopApparelItemIndex() {
    return Citizen.invokeNative('0xF033419D1B81FAE8', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1E77FA7A62EE6C4C | Since: 323 | API-Set: unknown
 */
export function getFmMaleShopApparelItemIndex() {
    return Citizen.invokeNative('0x1E77FA7A62EE6C4C', 0);
}
/**
 * p1 may be a BOOL representing whether or not the group even exists
 *
 * Hash: 0x8DE69FE35CA09A45 | Since: 323 | API-Set: unknown
 */
export function getGroupSize(groupID) {
    return GetGroupSize(groupID);
}
/**
 * A getter for _SET_PED_EYE_COLOR. Returns -1 if fails to get.
 *
 * Hash: 0x76BBA2CEE66D47E9 | Since: 1011 | API-Set: unknown
 */
export function getHeadBlendEyeColor(ped) {
    return GetPedEyeColor(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5486A79D9FBD342D | Since: 323 | API-Set: unknown
 */
export function getJackTarget(ped) {
    return GetJackTarget(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x18A3E9EE1297FD39 | Since: 323 | API-Set: unknown
 */
export function getMeleeTargetFor(ped) {
    return GetMeleeTargetForPed(ped);
}
/**
 *
 * Function just returns 0
 * void __fastcall ped__get_mount(NativeContext *a1)
 * {
 * NativeContext *v1; // rbx@1
 *
 * v1 = a1;
 * GetAddressOfPedFromScriptHandle(a1->Args->Arg1);
 * v1->Returns->Item1= 0;
 * }
 *
 * Hash: 0xE7E11B8DCBED1058 | Since: 323 | API-Set: unknown
 */
export function getMount(ped) {
    return GetMount(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x88274C11CF0D866D | Since: 1493 | API-Set: unknown
 */
export function getMpLightEnabled(ped) {
    return IsScubaGearLightEnabled(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9E30E91FB03A2CAF | Since: 323 | API-Set: unknown
 */
export function getMpOutfitDataFromMetadata() {
    return Citizen.invokeNative('0x9E30E91FB03A2CAF');
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0x27561561732A7842 | Since: 323 | API-Set: unknown
 */
export function getNumberOfDrawableVariations(ped, componentId) {
    return GetNumberOfPedDrawableVariations(ped, componentId);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0x5FAF9754E789FB47 | Since: 323 | API-Set: unknown
 */
export function getNumberOfPropDrawableVariations(ped, propId) {
    return GetNumberOfPedPropDrawableVariations(ped, propId);
}
/**
 * Need to check behavior when drawableId = -1
 *
 * - Doofy.Ass
 * Why this function doesn't work and return nill value?
 * GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS(PLAYER.PLAYER_PED_ID(), 0, 5)
 *
 * tick: scripts/addins/menu_execute.lua:51: attempt to call field 'GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS' (a nil value)
 *
 *
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0xA6E7F1CEB523E171 | Since: 323 | API-Set: unknown
 */
export function getNumberOfPropTextureVariations(ped, propId, drawableId) {
    return GetNumberOfPedPropTextureVariations(ped, propId, drawableId);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0x8F7156A3142A6BAD | Since: 323 | API-Set: unknown
 */
export function getNumberOfTextureVariations(ped, componentId, drawableId) {
    return GetNumberOfPedTextureVariations(ped, componentId, drawableId);
}
/**
 * No comment provided
 *
 * Hash: 0xE5C0CF872C2AD150 | Since: 323 | API-Set: unknown
 */
export function getNumHairTints() {
    return GetNumHairColors();
}
/**
 * No comment provided
 *
 * Hash: 0xD1F7CA1535D22818 | Since: 323 | API-Set: unknown
 */
export function getNumMakeupTints() {
    return GetNumMakeupColors();
}
/**
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 *
 * Hash: 0xDB4EACD4AD0A5D6B | Since: 323 | API-Set: unknown
 */
export function getheadshotTxdString(id) {
    return GetPedheadshotTxdString(id);
}
/**
 * No comment provided
 *
 * Hash: 0x9B128DC36C1E04CF | Since: 323 | API-Set: unknown
 */
export function getsJacker(ped) {
    return GetPedsJacker(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x37F4AD56ECBC0CD6 | Since: 323 | API-Set: unknown
 */
export function getAccuracy(ped) {
    return GetPedAccuracy(ped);
}
/**
 * Returns the ped's alertness (0-3).
 *
 * Values :
 *
 * 0 : Neutral
 * 1 : Heard something (gun shot, hit, etc)
 * 2 : Knows (the origin of the event)
 * 3 : Fully alerted (is facing the event?)
 *
 * If the Ped does not exist, returns -1.
 *
 * Hash: 0xF6AA118530443FD2 | Since: 323 | API-Set: unknown
 */
export function getAlertness(ped) {
    return GetPedAlertness(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9483AF821605B1D8 | Since: 323 | API-Set: unknown
 */
export function getArmour(ped) {
    return GetPedArmour(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5CCE68DBD5FE93EC | Since: 323 | API-Set: unknown
 */
export function getAsGroupLeader(groupID) {
    return GetPedAsGroupLeader(groupID);
}
/**
 * from fm_mission_controller.c4 (variable names changed for clarity):
 *
 * `int groupID = PLAYER::GET_PLAYER_GROUP(PLAYER::PLAYER_ID());`
 * `PED::GET_GROUP_SIZE(group, &unused, &groupSize);`
 * if (groupSize >= 1) {
 * . . . . for (int memberNumber = 0; memberNumber < groupSize; memberNumber++) {
 * `. . . . . . . . Ped ped1 = PED::GET_PED_AS_GROUP_MEMBER(groupID, memberNumber);`
 * . . . . . . . . //and so on
 *
 * Hash: 0x51455483CF23ED97 | Since: 323 | API-Set: unknown
 */
export function getAsGroupMember(groupID, memberNumber) {
    return GetPedAsGroupMember(groupID, memberNumber);
}
/**
 * Gets the position of the specified bone of the specified ped.
 *
 * ped: The ped to get the position of a bone from.
 * boneId: The ID of the bone to get the position from. This is NOT the index.
 * offsetX: The X-component of the offset to add to the position relative to the bone's rotation.
 * offsetY: The Y-component of the offset to add to the position relative to the bone's rotation.
 * offsetZ: The Z-component of the offset to add to the position relative to the bone's rotation.
 *
 * Hash: 0x17C07FC640E86B4E | Since: 323 | API-Set: unknown
 */
export function getBoneCoords(ped, boneId, offsetX, offsetY, offsetZ) {
    return new Vector3(GetPedBoneCoords(ped, boneId, offsetX, offsetY, offsetZ));
}
/**
 * no bone= -1
 *
 * boneIds:
 * SKEL_ROOT = 0x0,
 * SKEL_Pelvis = 0x2e28,
 * SKEL_L_Thigh = 0xe39f,
 * SKEL_L_Calf = 0xf9bb,
 * SKEL_L_Foot = 0x3779,
 * SKEL_L_Toe0 = 0x83c,
 * IK_L_Foot = 0xfedd,
 * PH_L_Foot = 0xe175,
 * MH_L_Knee = 0xb3fe,
 * SKEL_R_Thigh = 0xca72,
 * SKEL_R_Calf = 0x9000,
 * SKEL_R_Foot = 0xcc4d,
 * SKEL_R_Toe0 = 0x512d,
 * IK_R_Foot = 0x8aae,
 * PH_R_Foot = 0x60e6,
 * MH_R_Knee = 0x3fcf,
 * RB_L_ThighRoll = 0x5c57,
 * RB_R_ThighRoll = 0x192a,
 * SKEL_Spine_Root = 0xe0fd,
 * SKEL_Spine0 = 0x5c01,
 * SKEL_Spine1 = 0x60f0,
 * SKEL_Spine2 = 0x60f1,
 * SKEL_Spine3 = 0x60f2,
 * SKEL_L_Clavicle = 0xfcd9,
 * SKEL_L_UpperArm = 0xb1c5,
 * SKEL_L_Forearm = 0xeeeb,
 * SKEL_L_Hand = 0x49d9,
 * SKEL_L_Finger00 = 0x67f2,
 * SKEL_L_Finger01 = 0xff9,
 * SKEL_L_Finger02 = 0xffa,
 * SKEL_L_Finger10 = 0x67f3,
 * SKEL_L_Finger11 = 0x1049,
 * SKEL_L_Finger12 = 0x104a,
 * SKEL_L_Finger20 = 0x67f4,
 * SKEL_L_Finger21 = 0x1059,
 * SKEL_L_Finger22 = 0x105a,
 * SKEL_L_Finger30 = 0x67f5,
 * SKEL_L_Finger31 = 0x1029,
 * SKEL_L_Finger32 = 0x102a,
 * SKEL_L_Finger40 = 0x67f6,
 * SKEL_L_Finger41 = 0x1039,
 * SKEL_L_Finger42 = 0x103a,
 * PH_L_Hand = 0xeb95,
 * IK_L_Hand = 0x8cbd,
 * RB_L_ForeArmRoll = 0xee4f,
 * RB_L_ArmRoll = 0x1470,
 * MH_L_Elbow = 0x58b7,
 * SKEL_R_Clavicle = 0x29d2,
 * SKEL_R_UpperArm = 0x9d4d,
 * SKEL_R_Forearm = 0x6e5c,
 * SKEL_R_Hand = 0xdead,
 * SKEL_R_Finger00 = 0xe5f2,
 * SKEL_R_Finger01 = 0xfa10,
 * SKEL_R_Finger02 = 0xfa11,
 * SKEL_R_Finger10 = 0xe5f3,
 * SKEL_R_Finger11 = 0xfa60,
 * SKEL_R_Finger12 = 0xfa61,
 * SKEL_R_Finger20 = 0xe5f4,
 * SKEL_R_Finger21 = 0xfa70,
 * SKEL_R_Finger22 = 0xfa71,
 * SKEL_R_Finger30 = 0xe5f5,
 * SKEL_R_Finger31 = 0xfa40,
 * SKEL_R_Finger32 = 0xfa41,
 * SKEL_R_Finger40 = 0xe5f6,
 * SKEL_R_Finger41 = 0xfa50,
 * SKEL_R_Finger42 = 0xfa51,
 * PH_R_Hand = 0x6f06,
 * IK_R_Hand = 0x188e,
 * RB_R_ForeArmRoll = 0xab22,
 * RB_R_ArmRoll = 0x90ff,
 * MH_R_Elbow = 0xbb0,
 * SKEL_Neck_1 = 0x9995,
 * SKEL_Head = 0x796e,
 * IK_Head = 0x322c,
 * FACIAL_facialRoot = 0xfe2c,
 * FB_L_Brow_Out_000 = 0xe3db,
 * FB_L_Lid_Upper_000 = 0xb2b6,
 * FB_L_Eye_000 = 0x62ac,
 * FB_L_CheekBone_000 = 0x542e,
 * FB_L_Lip_Corner_000 = 0x74ac,
 * FB_R_Lid_Upper_000 = 0xaa10,
 * FB_R_Eye_000 = 0x6b52,
 * FB_R_CheekBone_000 = 0x4b88,
 * FB_R_Brow_Out_000 = 0x54c,
 * FB_R_Lip_Corner_000 = 0x2ba6,
 * FB_Brow_Centre_000 = 0x9149,
 * FB_UpperLipRoot_000 = 0x4ed2,
 * FB_UpperLip_000 = 0xf18f,
 * FB_L_Lip_Top_000 = 0x4f37,
 * FB_R_Lip_Top_000 = 0x4537,
 * FB_Jaw_000 = 0xb4a0,
 * FB_LowerLipRoot_000 = 0x4324,
 * FB_LowerLip_000 = 0x508f,
 * FB_L_Lip_Bot_000 = 0xb93b,
 * FB_R_Lip_Bot_000 = 0xc33b,
 * FB_Tongue_000 = 0xb987,
 * RB_Neck_1 = 0x8b93,
 * IK_Root = 0xdd1c
 *
 * Hash: 0x3F428D08BE5AAE31 | Since: 323 | API-Set: unknown
 */
export function getBoneIndex(ped, boneId) {
    return GetPedBoneIndex(ped, boneId);
}
/**
 * Returns the hash of the weapon/model/object that killed the ped.
 *
 * Hash: 0x16FFE42AB2D2DC59 | Since: 323 | API-Set: unknown
 */
export function getCauseOfDeath(ped) {
    return GetPedCauseOfDeath(ped);
}
/**
 * See SET_PED_COMBAT_MOVEMENT
 *
 * Hash: 0xDEA92412FCAEB3F5 | Since: 323 | API-Set: unknown
 */
export function getCombatMovement(ped) {
    return GetPedCombatMovement(ped);
}
/**
 * See SET_PED_COMBAT_RANGE
 *
 * Hash: 0xF9D9F7F2DB8E2FA0 | Since: 323 | API-Set: unknown
 */
export function getCombatRange(ped) {
    return GetPedCombatRange(ped);
}
/**
 * See SET_PED_CONFIG_FLAG
 *
 * Hash: 0x7EE53118C892B513 | Since: 323 | API-Set: unknown
 */
export function getConfigFlag(ped, flagId) {
    return GetPedConfigFlag(ped, flagId, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF60165E1D2C5370B | Since: 323 | API-Set: unknown
 */
export function getCurrentMoveBlendRatio(ped) {
    return GetPedCurrentMovementSpeed(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x71EAB450D86954A1 | Since: 323 | API-Set: unknown
 */
export function getDecorationsState(ped) {
    return GetPedDecorationsState(ped);
}
/**
 * Returns the zoneID for the overlay if it is a member of collection.
 * enum ePedDecorationZone
 * {
 * ZONE_TORSO = 0,
 * ZONE_HEAD = 1,
 * ZONE_LEFT_ARM = 2,
 * ZONE_RIGHT_ARM = 3,
 * ZONE_LEFT_LEG = 4,
 * ZONE_RIGHT_LEG = 5,
 * ZONE_MEDALS = 6,
 * ZONE_INVALID = 7
 * };
 *
 * Full list of ped overlays / decorations by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedOverlayCollections.json
 *
 * Hash: 0x9FD452BFBE7A7A8B | Since: 323 | API-Set: unknown
 */
export function getDecorationZoneFromHashes(collection, overlay) {
    if (typeof collection === 'string')
        collection = GetHashKey(collection);
    if (typeof overlay === 'string')
        overlay = GetHashKey(overlay);
    return GetPedDecorationZoneFromHashes(collection, overlay);
}
/**
 * No comment provided
 *
 * Hash: 0x3C06B8786DD94CD1 | Since: 323 | API-Set: unknown
 */
export function getDefensiveAreaPosition(ped) {
    return new Vector3(GetPedDefensiveAreaPosition(ped, false));
}
/**
 * No comment provided
 *
 * Hash: 0x65671A4FB8218930 | Since: 2699 | API-Set: unknown
 */
export function getDiesInWater(ped) {
    return GetPedDiesInWater(ped);
}
/**
 * Ids
 * 0 - Head
 * 1 - Beard
 * 2 - Hair
 * 3 - Torso
 * 4 - Legs
 * 5 - Hands
 * 6 - Foot
 * 7 - ------
 * 8 - Accessories 1
 * 9 - Accessories 2
 * 10- Decals
 * 11 - Auxiliary parts for torso
 *
 * Hash: 0x67F3780DD425D4FC | Since: 323 | API-Set: unknown
 */
export function getDrawableVariation(ped, componentId) {
    return GetPedDrawableVariation(ped, componentId);
}
/**
 * Use 0x4E90D746056E273D to set the illuminated clothing glow intensity for a specific ped.
 * Returns a float between 0.0 and 1.0 representing the current illuminated clothing glow intensity.
 *
 * Hash: 0x1461B28A06717D68 | Since: 944 | API-Set: unknown
 */
export function getEmissiveScale(ped) {
    return GetPedEmissiveIntensity(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9C14D30395A51A3C | Since: 323 | API-Set: unknown
 */
export function getEnveffScale(ped) {
    return GetPedEnveffScale(ped);
}
/**
 * Gets the offset the specified ped has moved since the previous tick.
 *
 * If worldSpace is false, the returned offset is relative to the ped. That is, if the ped has moved 1 meter right and 5 meters forward, it'll return 1,5,0.
 *
 * If worldSpace is true, the returned offset is relative to the world. That is, if the ped has moved 1 meter on the X axis and 5 meters on the Y axis, it'll return 1,5,0.
 *
 * Hash: 0xE0AF41401ADF87E3 | Since: 323 | API-Set: unknown
 */
export function getExtractedDisplacement(ped, worldSpace) {
    return new Vector3(GetPedExtractedDisplacement(ped, worldSpace));
}
/**
 * Returns the group id of which the specified ped is a member of.
 *
 * Hash: 0xF162E133B4E7A675 | Since: 323 | API-Set: unknown
 */
export function getGroupIndex(ped) {
    return GetPedGroupIndex(ped);
}
/**
 * Input: Haircolor index, value between 0 and 63 (inclusive).
 * Output: RGB values for the haircolor specified in the input.
 *
 * This is used with the hair color swatches scaleform.
 * Use `GET_PED_MAKEUP_TINT_COLOR` to get the makeup colors.
 *
 * Hash: 0x4852FC386E2E1BB5 | Since: 323 | API-Set: unknown
 */
export function getHairTintColor(hairColorIndex) {
    return GetPedHairRgbColor(hairColorIndex);
}
/**
 * The pointer is to a padded struct that matches the arguments to SET_PED_HEAD_BLEND_DATA(...). There are 4 bytes of padding after each field.
 * pass this struct in the second parameter
 * struct headBlendData
 * {
 * int shapeFirst;
 * int padding1;
 * int shapeSecond;
 * int padding2;
 * int shapeThird;
 * int padding3;
 * int skinFirst;
 * int padding4;
 * int skinSecond;
 * int padding5;
 * int skinThird;
 * int padding6;
 * float shapeMix;
 * int padding7;
 * float skinMix;
 * int padding8;
 * float thirdMix;
 * int padding9;
 * bool isParent;
 * };
 *
 * Hash: 0x2746BD9D88C5C5D0 | Since: 323 | API-Set: unknown
 */
export function getHeadBlendData(ped) {
    return GetPedHeadBlendData(ped);
}
/**
 * Type equals 0 for male non-dlc, 1 for female non-dlc, 2 for male dlc, and 3 for female dlc.
 *
 * Used when calling SET_PED_HEAD_BLEND_DATA.
 *
 * Hash: 0x68D353AB88B97E0C | Since: 323 | API-Set: unknown
 */
export function getHeadBlendFirstIndex(_type) {
    return GetPedHeadBlendFirstIndex(_type);
}
/**
 * Type equals 0 for male non-dlc, 1 for female non-dlc, 2 for male dlc, and 3 for female dlc.
 *
 * Hash: 0x5EF37013A6539C9D | Since: 323 | API-Set: unknown
 */
export function getHeadBlendNumHeads(_type) {
    return GetPedHeadBlendNumHeads(_type);
}
/**
 * Likely a char, if that overlay is not set, e.i. "None" option, returns 255;
 *
 * This might be the once removed native GET_PED_HEAD_OVERLAY.
 *
 * Hash: 0xA60EF3B6461A4D43 | Since: 323 | API-Set: unknown
 */
export function getHeadOverlay(ped, overlayID) {
    return GetPedHeadOverlayValue(ped, overlayID);
}
/**
 * No comment provided
 *
 * Hash: 0xCF1CE768BB43480E | Since: 323 | API-Set: unknown
 */
export function getHeadOverlayNum(overlayID) {
    return GetPedHeadOverlayNum(overlayID);
}
/**
 * No comment provided
 *
 * Hash: 0x451294E859ECC018 | Since: 323 | API-Set: unknown
 */
export function getHelmetStoredHatPropIndex(ped) {
    return GetPedHelmetStoredHatPropIndex(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9D728C1E12BF5518 | Since: 323 | API-Set: unknown
 */
export function getHelmetStoredHatTexIndex(ped) {
    return GetPedHelmetStoredHatTexIndex(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD75960F6BD9EA49C | Since: 323 | API-Set: unknown
 */
export function getLastDamageBone(ped) {
    return GetPedLastDamageBone(ped);
}
/**
 * Input: Makeup color index, value between 0 and 63 (inclusive).
 * Output: RGB values for the makeup color specified in the input.
 *
 * This is used with the makeup color swatches scaleform.
 * Use `GET_PED_HAIR_TINT_COLOR` to get the hair colors.
 *
 * Hash: 0x013E5CFC38CD5387 | Since: 323 | API-Set: unknown
 */
export function getMakeupTintColor(makeupColorIndex) {
    return GetPedMakeupRgbColor(makeupColorIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x4700A416E8324EF3 | Since: 323 | API-Set: unknown
 */
export function getMaxHealth(ped) {
    return GetPedMaxHealth(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3F69145BBA87BAE7 | Since: 323 | API-Set: unknown
 */
export function getMoney(ped) {
    return GetPedMoney(ped);
}
/**
 * sizeAndPeds - is a pointer to an array. The array is filled with peds found nearby the ped supplied to the first argument.
 * ignore - ped type to ignore
 *
 * Return value is the number of peds found and added to the array passed.
 *
 * -----------------------------------
 *
 * To make this work in most menu bases at least in C++ do it like so,
 *
 * Formatted Example: https://pastebin.com/D8an9wwp
 *
 * -----------------------------------
 *
 * Example: gtaforums.com/topic/789788-function-args-to-pedget-ped-nearby-peds/?p=1067386687
 *
 * Hash: 0x23F8F5FC7E8C4A6B | Since: 323 | API-Set: unknown
 */
export function getNearbyPeds(ped, ignore) {
    return GetPedNearbyPeds(ped, ignore);
}
/**
 * Returns size of array, passed into the second variable.
 *
 * See below for usage information.
 *
 * This function actually requires a struct, where the first value is the maximum number of elements to return.  Here is a sample of how I was able to get it to work correctly, without yet knowing the struct format.
 *
 * //Setup the array
 * const int numElements = 10;
 * const int arrSize = numElements * 2 + 2;
 * Any veh[arrSize];
 * //0 index is the size of the array
 * veh[0] = numElements;
 *
 * `int count = PED::GET_PED_NEARBY_VEHICLES(PLAYER::PLAYER_PED_ID(), veh);`
 *
 * if (veh != NULL)
 * {
 * //Simple loop to go through results
 * for (int i = 0; i < count; i++)
 * {
 * int offsettedID = i * 2 + 2;
 * //Make sure it exists
 * `if (veh[offsettedID] != NULL && ENTITY::DOES_ENTITY_EXIST(veh[offsettedID]))`
 * {
 * //Do something
 * }
 * }
 * }
 *
 * Hash: 0xCFF869CBFA210D82 | Since: 323 | API-Set: unknown
 */
export function getNearbyVehicles(ped) {
    return GetPedNearbyVehicles(ped);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0xE3DD5F2A84B42281 | Since: 323 | API-Set: unknown
 */
export function getPaletteVariation(ped, componentId) {
    return GetPedPaletteVariation(ped, componentId);
}
/**
 * -1: no landing
 * 0: landing on both feet
 * 1: stumbling
 * 2: rolling
 * 3: ragdoll
 *
 * Hash: 0x8B9F1FC6AE8166C0 | Since: 323 | API-Set: unknown
 */
export function getParachuteLandingType(ped) {
    return GetPedParachuteLandingType(ped);
}
/**
 * Returns:
 *
 * -1: Normal
 * 0: Wearing parachute on back
 * 1: Parachute opening
 * 2: Parachute open
 * 3: Falling to doom (e.g. after exiting parachute)
 *
 * Normal means no parachute?
 *
 * Hash: 0x79CFD9827CC979B6 | Since: 323 | API-Set: unknown
 */
export function getParachuteState(ped) {
    return GetPedParachuteState(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEAF5F7E5AE7C6C9D | Since: 323 | API-Set: unknown
 */
export function getParachuteTintIndex(ped) {
    return GetPedParachuteTintIndex(ped);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0x898CC20EA75BACD8 | Since: 323 | API-Set: unknown
 */
export function getPropIndex(ped, componentId) {
    return GetPedPropIndex(ped, componentId, undefined);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0xE131A28626F81AB2 | Since: 323 | API-Set: unknown
 */
export function getPropTextureIndex(ped, componentId) {
    return GetPedPropTextureIndex(ped, componentId);
}
/**
 * No comment provided
 *
 * Hash: 0x2057EF813397A772 | Since: 323 | API-Set: unknown
 */
export function getRagdollBoneIndex(ped, bone) {
    return GetPedRagdollBoneIndex(ped, bone);
}
/**
 * No comment provided
 *
 * Hash: 0x42FDD0F017B1E38E | Since: 323 | API-Set: unknown
 */
export function getRelationshipGroupDefaultHash(ped) {
    return GetPedRelationshipGroupDefaultHash(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7DBDD04862D95F04 | Since: 323 | API-Set: unknown
 */
export function getRelationshipGroupHash(ped) {
    return GetPedRelationshipGroupHash(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xAF9E59B1B1FBF2A0 | Since: 323 | API-Set: unknown
 */
export function getResetFlag(ped, flagId) {
    return GetPedResetFlag(ped, flagId);
}
/**
 * Returns the Entity (Ped, Vehicle, or ?Object?) that killed the 'ped'
 *
 * Is best to check if the Ped is dead before asking for its killer.
 *
 * Hash: 0x93C8B64DEB84728C | Since: 323 | API-Set: unknown
 */
export function getSourceOfDeath(ped) {
    return GetPedSourceOfDeath(ped);
}
/**
 * Returns whether the entity is in stealth mode
 *
 * Hash: 0x7C2AC9CA66575FBF | Since: 323 | API-Set: unknown
 */
export function getStealthMovement(ped) {
    return GetPedStealthMovement(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x32C27A11307B01CC | Since: 2372 | API-Set: unknown
 */
export function getTargetFromCombatPed(ped) {
    return GetPedTaskCombatTarget(ped, undefined);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0x04A355E041E004E6 | Since: 323 | API-Set: unknown
 */
export function getTextureVariation(ped, componentId) {
    return GetPedTextureVariation(ped, componentId);
}
/**
 * No comment provided
 *
 * Hash: 0x1E98817B311AE98A | Since: 323 | API-Set: unknown
 */
export function getTimeOfDeath(ped) {
    return GetPedTimeOfDeath(ped);
}
/**
 * https://alloc8or.re/gta5/doc/enums/ePedType.txt
 *
 * Hash: 0xFF059E1E4C01E63C | Since: 323 | API-Set: unknown
 */
export function getType(ped) {
    return GetPedType(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEF2C71A32CAD5FBD | Since: 1493 | API-Set: unknown
 */
export function getVisualFieldCenterAngle(ped) {
    return GetPedVisualFieldCenterAngle(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6A3975DEA89F9A17 | Since: 323 | API-Set: unknown
 */
export function getPlayerIsFollowing(ped) {
    return GetPlayerPedIsFollowing(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xBA656A3BB01BDEA3 | Since: 2189 | API-Set: unknown
 */
export function getPosFromFiredEvent(ped, eventType) {
    return GetPedEventData(ped, eventType);
}
/**
 * Gets a random ped in the x/y/zRadius near the x/y/z coordinates passed.
 *
 * Ped Types:
 * Any = -1
 * Player = 1
 * Male = 4
 * Female = 5
 * Cop = 6
 * Human = 26
 * SWAT = 27
 * Animal = 28
 * Army = 29
 *
 * Hash: 0x876046A8E3A4B71C | Since: 323 | API-Set: unknown
 */
export function getRandomAtCoord(pos, xRadius, yRadius, zRadius, pedType) {
    return GetRandomPedAtCoord(pos.x, pos.y, pos.z, xRadius, yRadius, zRadius, pedType);
}
/**
 * Gets the relationship between two groups. This should be called twice (once for each group).
 *
 * Relationship types:
 * 0 = Companion
 * 1 = Respect
 * 2 = Like
 * 3 = Neutral
 * 4 = Dislike
 * 5 = Hate
 * 255 = Pedestrians
 *
 * Example:
 * `PED::GET_RELATIONSHIP_BETWEEN_GROUPS(l_1017, 0xA49E591C);`
 * `PED::GET_RELATIONSHIP_BETWEEN_GROUPS(0xA49E591C, l_1017);`
 *
 * Hash: 0x9E6B70061662AE5C | Since: 323 | API-Set: unknown
 */
export function getRelationshipBetweenGroups(group1, group2) {
    if (typeof group1 === 'string')
        group1 = GetHashKey(group1);
    if (typeof group2 === 'string')
        group2 = GetHashKey(group2);
    return GetRelationshipBetweenGroups(group1, group2);
}
/**
 * Gets the relationship between two peds. This should be called twice (once for each ped).
 *
 * Relationship types:
 * 0 = Companion
 * 1 = Respect
 * 2 = Like
 * 3 = Neutral
 * 4 = Dislike
 * 5 = Hate
 * 255 = Pedestrians
 * (Credits: Inco)
 *
 * Example:
 * `PED::GET_RELATIONSHIP_BETWEEN_PEDS(2, l_1017, 0xA49E591C);`
 * `PED::GET_RELATIONSHIP_BETWEEN_PEDS(2, 0xA49E591C, l_1017);`
 *
 * Hash: 0xEBA5AD3A0EAF7121 | Since: 323 | API-Set: unknown
 */
export function getRelationshipBetweens(ped1, ped2) {
    return GetRelationshipBetweenPeds(ped1, ped2);
}
/**
 * No comment provided
 *
 * Hash: 0x6F4C85ACD641BCD2 | Since: 323 | API-Set: unknown
 */
export function getSeatIsTryingToEnter(ped) {
    return GetSeatPedIsTryingToEnter(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE4A310B1D7FA73CC | Since: 323 | API-Set: unknown
 */
export function getSynchronizedScenePhase(sceneID) {
    return GetSynchronizedScenePhase(sceneID);
}
/**
 * No comment provided
 *
 * Hash: 0xD80932D577274D40 | Since: 323 | API-Set: unknown
 */
export function getSynchronizedSceneRate(sceneID) {
    return GetSynchronizedSceneRate(sceneID);
}
/**
 * No comment provided
 *
 * Hash: 0x36B77BB84687C318 | Since: 323 | API-Set: unknown
 */
export function getTimeDamagedByWeapon(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetTimeOfLastPedWeaponDamage(ped, weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0xC56FBF2F228E1DAC | Since: 323 | API-Set: unknown
 */
export function getTintIndexForLastGenHairTexture(modelHash, drawableId, textureId) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return Citizen.invokeNative('0xC56FBF2F228E1DAC', modelHash, drawableId, textureId);
}
/**
 * No comment provided
 *
 * Hash: 0x511F1A683387C7E2 | Since: 323 | API-Set: unknown
 */
export function getTrackedPixelcount(ped) {
    return Citizen.invokeNative('0x511F1A683387C7E2', ped);
}
/**
 * No comment provided
 *
 * Hash: 0xF92691AED837A5FC | Since: 323 | API-Set: unknown
 */
export function getVehicleIsEntering(ped) {
    return GetVehiclePedIsEntering(ped);
}
/**
 * Gets the vehicle the specified Ped is in. Returns 0 if the ped is/was not in a vehicle.
 *
 * Hash: 0x9A9112A0FE9A4713 | Since: 323 | API-Set: unknown
 */
export function getVehicleIsIn(ped, includeEntering) {
    return GetVehiclePedIsIn(ped, includeEntering);
}
/**
 * No comment provided
 *
 * Hash: 0x814FA8BE5449445D | Since: 323 | API-Set: unknown
 */
export function getVehicleIsTryingToEnter(ped) {
    return GetVehiclePedIsTryingToEnter(ped);
}
/**
 * Gets ID of vehicle player using. It means it can get ID at any interaction with vehicle. Enter\exit for example. And that means it is faster than GET_VEHICLE_PED_IS_IN but less safe.
 *
 * Hash: 0x6094AD011A2EA87D | Since: 323 | API-Set: unknown
 */
export function getVehicleIsUsing(ped) {
    return GetVehiclePedIsUsing(ped);
}
/**
 * PoliceMotorcycleHelmet   1024
 * RegularMotorcycleHelmet   4096
 * FiremanHelmet 16384
 * PilotHeadset  32768
 * PilotHelmet   65536
 * --
 * p2 is generally 4096 or 16384 in the scripts. p1 varies between 1 and 0.
 *
 * Hash: 0x54C7C4A94367717E | Since: 323 | API-Set: unknown
 */
export function giveHelmet(ped, cannotRemove, helmetFlag, textureIndex) {
    GivePedHelmet(ped, cannotRemove, helmetFlag, textureIndex);
}
/**
 * Sends the message that was created by a call to CREATE_NM_MESSAGE to the specified Ped.
 *
 * If a message hasn't been created already, this function does nothing.
 * If the Ped is not ragdolled with Euphoria enabled, this function does nothing.
 * The following call can be used to ragdoll the Ped with Euphoria enabled: SET_PED_TO_RAGDOLL(ped, 4000, 5000, 1, 1, 1, 0);
 *
 * Call order:
 * SET_PED_TO_RAGDOLL
 * CREATE_NM_MESSAGE
 * GIVE_PED_NM_MESSAGE
 *
 * Multiple messages can be chained. Eg. to make the ped stagger and swing his arms around, the following calls can be made:
 * SET_PED_TO_RAGDOLL(ped, 4000, 5000, 1, 1, 1, 0);
 * CREATE_NM_MESSAGE(true, 0); // stopAllBehaviours - Stop all other behaviours, in case the Ped is already doing some Euphoria stuff.
 * GIVE_PED_NM_MESSAGE(ped); // Dispatch message to Ped.
 * CREATE_NM_MESSAGE(true, 1151); // staggerFall - Attempt to walk while falling.
 * GIVE_PED_NM_MESSAGE(ped); // Dispatch message to Ped.
 * CREATE_NM_MESSAGE(true, 372); // armsWindmill - Swing arms around.
 * GIVE_PED_NM_MESSAGE(ped); // Dispatch message to Ped.
 *
 * Hash: 0xB158DFCCC56E5C5B | Since: 323 | API-Set: unknown
 */
export function giveNmMessage(ped) {
    GivePedNmMessage(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE4B5F4BF2CB24E65 | Since: 323 | API-Set: unknown
 */
export function hasActionModeAssetLoaded(asset) {
    return HasActionModeAssetLoaded(asset);
}
/**
 * No comment provided
 *
 * Hash: 0x876928DDDFCCC9CD | Since: 323 | API-Set: unknown
 */
export function hasheadshotImgUploadFailed() {
    return HasPedheadshotImgUploadFailed();
}
/**
 * No comment provided
 *
 * Hash: 0xE8A169E666CBC541 | Since: 323 | API-Set: unknown
 */
export function hasheadshotImgUploadSucceeded() {
    return HasPedheadshotImgUploadSucceeded();
}
/**
 * No comment provided
 *
 * Hash: 0x654CD0A825161131 | Since: 323 | API-Set: unknown
 */
export function hasHeadBlendFinished(ped) {
    return HasPedHeadBlendFinished(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x784002A632822099 | Since: 323 | API-Set: unknown
 */
export function hasPreloadPropDataFinished(ped) {
    return HasPedPreloadPropDataFinished(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x66680A92700F43DF | Since: 323 | API-Set: unknown
 */
export function hasPreloadVariationDataFinished(ped) {
    return HasPedPreloadVariationDataFinished(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8507BCB710FA6DC0 | Since: 323 | API-Set: unknown
 */
export function hasReceivedEvent(ped, eventId) {
    return HasPedReceivedEvent(ped, eventId);
}
/**
 * No comment provided
 *
 * Hash: 0xE977FC5B08AF3441 | Since: 323 | API-Set: unknown
 */
export function hasStealthModeAssetLoaded(asset) {
    return HasStealthModeAssetLoaded(asset);
}
/**
 * No comment provided
 *
 * Hash: 0x7350823473013C02 | Since: 323 | API-Set: unknown
 */
export function haveAllStreamingRequestsCompleted(ped) {
    return HaveAllStreamingRequestsCompleted(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x62AB793144DE75DC | Since: 323 | API-Set: unknown
 */
export function hideBloodDamageByZone(ped) {
    HidePedBloodDamageByZone(ped, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x4759CC730F947C81 | Since: 323 | API-Set: unknown
 */
export function instantlyFillPopulation() {
    InstantlyFillPedPopulation();
}
/**
 * No comment provided
 *
 * Hash: 0x68772DB2B2526F9F | Since: 323 | API-Set: unknown
 */
export function isAnyHostileNearPoint(ped, pos, radius) {
    return IsAnyHostilePedNearPoint(ped, pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x083961498679DC9F | Since: 323 | API-Set: unknown
 */
export function isAnyNearPoint(pos, radius) {
    return IsAnyPedNearPoint(pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0xA0D3D71EA1086C55 | Since: 323 | API-Set: unknown
 */
export function isAnyShootingInArea(x1, y1, z1, x2, y2, z2) {
    return IsAnyPedShootingInArea(x1, y1, z1, x2, y2, z2, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE0A0AEC214B1FABA | Since: 323 | API-Set: unknown
 */
export function isConversationDead(ped) {
    return IsConversationPedDead(ped);
}
/**
 * xyz - relative to the world origin.
 *
 * Hash: 0x16EC4839969F9F5E | Since: 323 | API-Set: unknown
 */
export function isCopInArea3d(x1, y1, z1, x2, y2, z2) {
    return IsCopPedInArea3d(x1, y1, z1, x2, y2, z2);
}
/**
 * No comment provided
 *
 * Hash: 0xF2385935BFFD4D92 | Since: 323 | API-Set: unknown
 */
export function isCurrentHeadPropAHelmet() {
    return Citizen.invokeNative('0xF2385935BFFD4D92', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA3F3564A5B3646C0 | Since: 323 | API-Set: unknown
 */
export function isMobilePhoneToEar(ped) {
    return Citizen.invokeNative('0xA3F3564A5B3646C0', ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEBB376779A760AA8 | Since: 323 | API-Set: unknown
 */
export function isheadshotImgUploadAvailable() {
    return IsPedheadshotImgUploadAvailable();
}
/**
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 *
 * Hash: 0x7085228842B13A67 | Since: 323 | API-Set: unknown
 */
export function isheadshotReady(id) {
    return IsPedheadshotReady(id);
}
/**
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 *
 * Hash: 0xA0A9668F158129A2 | Since: 323 | API-Set: unknown
 */
export function isheadshotValid(id) {
    return IsPedheadshotValid(id);
}
/**
 * No comment provided
 *
 * Hash: 0x3998B1276A3300E5 | Since: 323 | API-Set: unknown
 */
export function isAimingFromCover(ped) {
    return IsPedAimingFromCover(ped);
}
/**
 * Returns true if the given ped has a valid pointer to CPlayerInfo in its CPed class. That's all.
 *
 * Hash: 0x12534C348C6CB68B | Since: 323 | API-Set: unknown
 */
export function isAPlayer(ped) {
    return IsPedAPlayer(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9A497FE2DF198913 | Since: 323 | API-Set: unknown
 */
export function isBeingJacked(ped) {
    return IsPedBeingJacked(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x863B23EFDE9C5DF2 | Since: 323 | API-Set: unknown
 */
export function isBeingStealthKilled(ped) {
    return IsPedBeingStealthKilled(ped);
}
/**
 * p1 is always 0
 *
 * Hash: 0x4FBACCE3B4138EE8 | Since: 323 | API-Set: unknown
 */
export function isBeingStunned(ped) {
    return IsPedBeingStunned(ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x09E7ECA981D9B210 | Since: 1290 | API-Set: unknown
 */
export function isBlushFacepaintTintForBarber(colorId) {
    return IsPedBodyBlemishValid(colorId);
}
/**
 * No comment provided
 *
 * Hash: 0x604E810189EE3A59 | Since: 323 | API-Set: unknown
 */
export function isBlushTintForBarber(colorID) {
    return IsPedBlushColorValid(colorID);
}
/**
 * No comment provided
 *
 * Hash: 0xF41B5D290C99A3D6 | Since: 323 | API-Set: unknown
 */
export function isBlushTintForCreator(colorId) {
    return IsPedBlushColorValid2(colorId);
}
/**
 * No comment provided
 *
 * Hash: 0x53E8CB4F48BFE623 | Since: 323 | API-Set: unknown
 */
export function isClimbing(ped) {
    return IsPedClimbing(ped);
}
/**
 * Checks if the component variation is valid, this works great for randomizing components using loops.
 *
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Full list of ped components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedComponentVariations.json
 *
 * Hash: 0xE825F6B6CEA7671D | Since: 323 | API-Set: unknown
 */
export function isComponentVariationValid(ped, componentId, drawableId, textureId) {
    return IsPedComponentVariationValid(ped, componentId, drawableId, textureId);
}
/**
 * Seems to consistently return true if the ped is dead.
 *
 * p1 is always passed 1 in the scripts.
 *
 * I suggest to remove "OR_DYING" part, because it does not detect dying phase.
 *
 * That's what the devs call it, cry about it.
 *
 * lol
 *
 * Hash: 0x3317DEDB88C95038 | Since: 323 | API-Set: unknown
 */
export function isDeadOrDying(ped) {
    return IsPedDeadOrDying(ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xBA63D9FE45412247 | Since: 323 | API-Set: unknown
 */
export function isDefensiveAreaActive(ped) {
    return IsPedDefensiveAreaActive(ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5527B8246FEF9B11 | Since: 323 | API-Set: unknown
 */
export function isDiving(ped) {
    return IsPedDiving(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x451D05012CCEC234 | Since: 573 | API-Set: unknown
 */
export function isDoingABeastJump() {
    return IsPedDoingBeastJump(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB2C086CC1BF8F2BF | Since: 323 | API-Set: unknown
 */
export function isDoingDriveby(ped) {
    return IsPedDoingDriveby(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD125AE748725C6BC | Since: 323 | API-Set: unknown
 */
export function isDucking(ped) {
    return IsPedDucking(ped);
}
/**
 * Presumably returns the Entity that the Ped is currently diving out of the way of.
 *
 * var num3;
 * `if (PED::IS_PED_EVASIVE_DIVING(A_0, &num3) != 0)`
 * `if (ENTITY::IS_ENTITY_A_VEHICLE(num3) != 0)`
 *
 * Hash: 0x414641C26E105898 | Since: 323 | API-Set: unknown
 */
export function isEvasiveDiving(ped) {
    return IsPedEvasiveDiving(ped);
}
/**
 * angle is ped's view cone
 *
 * Hash: 0xD71649DB0A545AA3 | Since: 323 | API-Set: unknown
 */
export function isFacingPed(ped, otherPed, angle) {
    return IsPedFacingPed(ped, otherPed, angle);
}
/**
 * No comment provided
 *
 * Hash: 0xFB92A102F1C4DFA3 | Since: 323 | API-Set: unknown
 */
export function isFalling(ped) {
    return IsPedFalling(ped);
}
/**
 * Gets a value indicating whether this ped's health is below its fatally injured threshold. The default threshold is 100.
 * If the handle is invalid, the function returns true.
 *
 * Hash: 0xD839450756ED5A80 | Since: 323 | API-Set: unknown
 */
export function isFatallyInjured(ped) {
    return IsPedFatallyInjured(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xBBCCE00B381F8482 | Since: 323 | API-Set: unknown
 */
export function isFleeing(ped) {
    return IsPedFleeing(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC30BDAEE47256C13 | Since: 1868 | API-Set: unknown
 */
export function isGesturing() {
    return Citizen.invokeNative('0xC30BDAEE47256C13', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBB062B2B5722478E | Since: 323 | API-Set: unknown
 */
export function isGettingIntoAVehicle(ped) {
    return IsPedGettingIntoAVehicle(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9F65DBC537E59AD5 | Since: 323 | API-Set: unknown
 */
export function isGoingIntoCover(ped) {
    return IsPedGoingIntoCover(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9BB01E3834671191 | Since: 323 | API-Set: unknown
 */
export function isGroupMember(ped, groupId) {
    return IsPedGroupMember(ped, groupId);
}
/**
 * No comment provided
 *
 * Hash: 0xE0D36E5D9E99CC21 | Since: 323 | API-Set: unknown
 */
export function isHairTintForBarber(colorID) {
    return IsPedHairColorValid(colorID);
}
/**
 * No comment provided
 *
 * Hash: 0xED6D8E27A43B8CDE | Since: 323 | API-Set: unknown
 */
export function isHairTintForCreator(colorId) {
    return IsPedHairColorValid2(colorId);
}
/**
 * No comment provided
 *
 * Hash: 0x1C86D8AEF8254B78 | Since: 323 | API-Set: unknown
 */
export function isHangingOnToVehicle(ped) {
    return IsPedHangingOnToVehicle(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xFCF37A457CB96DC0 | Since: 323 | API-Set: unknown
 */
export function isHeadingTowardsPosition(ped, pos) {
    return IsPedHeadingTowardsPosition(ped, pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x813A0A7C9D2E831F | Since: 323 | API-Set: unknown
 */
export function isHeadtrackingEntity(ped, entity) {
    return IsPedHeadtrackingEntity(ped, entity);
}
/**
 * No comment provided
 *
 * Hash: 0x5CD3CB88A7F8850D | Since: 323 | API-Set: unknown
 */
export function isHeadtrackingPed(ped1, ped2) {
    return IsPedHeadtrackingPed(ped1, ped2);
}
/**
 * No comment provided
 *
 * Hash: 0xB9496CE47546DB2C | Since: 791 | API-Set: unknown
 */
export function isHelmetVisorUp(ped) {
    return IsPedHelmetUnk(ped);
}
/**
 * Returns true/false if the ped is/isn't humanoid.
 *
 * Hash: 0xB980061DA992779D | Since: 323 | API-Set: unknown
 */
export function isHuman(ped) {
    return IsPedHuman(ped);
}
/**
 * Returns whether the specified ped is hurt.
 *
 * Hash: 0x5983BB449D7FDB12 | Since: 323 | API-Set: unknown
 */
export function isHurt(ped) {
    return IsPedHurt(ped);
}
/**
 * Gets a value indicating whether this ped's health is below its injured threshold.
 *
 * The default threshold is 100.
 *
 * Hash: 0x84A2DD9AC37C35C1 | Since: 323 | API-Set: unknown
 */
export function isInjured(ped) {
    return IsPedInjured(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2E0E1C2B4F6CB339 | Since: 323 | API-Set: unknown
 */
export function isInAnyBoat(ped) {
    return IsPedInAnyBoat(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x298B91AE825E5705 | Since: 323 | API-Set: unknown
 */
export function isInAnyHeli(ped) {
    return IsPedInAnyHeli(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5FFF4CFC74D8FB80 | Since: 323 | API-Set: unknown
 */
export function isInAnyPlane(ped) {
    return IsPedInAnyPlane(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0BD04E29640C9C12 | Since: 323 | API-Set: unknown
 */
export function isInAnyPoliceVehicle(ped) {
    return IsPedInAnyPoliceVehicle(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xFBFC01CCFB35D99E | Since: 323 | API-Set: unknown
 */
export function isInAnySub(ped) {
    return IsPedInAnySub(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6E575D6A898AB852 | Since: 323 | API-Set: unknown
 */
export function isInAnyTaxi(ped) {
    return IsPedInAnyTaxi(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6F972C1AB75A1ED0 | Since: 323 | API-Set: unknown
 */
export function isInAnyTrain(ped) {
    return IsPedInAnyTrain(ped);
}
/**
 * Gets a value indicating whether the specified ped is in any vehicle.
 *
 * If 'atGetIn' is false, the function will not return true until the ped is sitting in the vehicle and is about to close the door. If it's true, the function returns true the moment the ped starts to get onto the seat (after opening the door). Eg. if false, and the ped is getting into a submersible, the function will not return true until the ped has descended down into the submersible and gotten into the seat, while if it's true, it'll return true the moment the hatch has been opened and the ped is about to descend into the submersible.
 *
 * Hash: 0x997ABD671D25CA0B | Since: 323 | API-Set: unknown
 */
export function isInAnyVehicle(ped, atGetIn) {
    return IsPedInAnyVehicle(ped, atGetIn);
}
/**
 * Checks to see if ped and target are in combat with eachother. Only goes one-way: if target is engaged in combat with ped but ped has not yet reacted, the function will return false until ped starts fighting back.
 *
 * `p1 is usually 0 in the scripts because it gets the ped id during the task sequence. For instance: PED::IS_PED_IN_COMBAT(l_42E[4\/\*14\*\/], PLAYER::PLAYER_PED_ID()) // armenian2.ct4: 43794`
 *
 * Hash: 0x4859F1FC66A6278E | Since: 323 | API-Set: unknown
 */
export function isInCombat(ped, target) {
    return IsPedInCombat(ped, target);
}
/**
 * p1 is nearly always 0 in the scripts.
 *
 * Hash: 0x60DFD0691A170B88 | Since: 323 | API-Set: unknown
 */
export function isInCover(ped, exceptUseWeapon) {
    return IsPedInCover(ped, exceptUseWeapon);
}
/**
 * No comment provided
 *
 * Hash: 0x845333B3150583AB | Since: 323 | API-Set: unknown
 */
export function isInCoverFacingLeft(ped) {
    return IsPedInCoverFacingLeft(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9134873537FA419C | Since: 323 | API-Set: unknown
 */
export function isInFlyingVehicle(ped) {
    return IsPedInFlyingVehicle(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5891CAC5D4ACFF74 | Since: 323 | API-Set: unknown
 */
export function isInGroup(ped) {
    return IsPedInGroup(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6A03BF943D767C93 | Since: 323 | API-Set: unknown
 */
export function isInHighCover(ped) {
    return IsPedInHighCover(ped);
}
/**
 * Notes: The function only returns true while the ped is:
 * A.) Swinging a random melee attack (including pistol-whipping)
 *
 * B.) Reacting to being hit by a melee attack (including pistol-whipping)
 *
 * C.) Is locked-on to an enemy (arms up, strafing/skipping in the default fighting-stance, ready to dodge+counter).
 *
 * You don't have to be holding the melee-targetting button to be in this stance; you stay in it by default for a few seconds after swinging at someone. If you do a sprinting punch, it returns true for the duration of the punch animation and then returns false again, even if you've punched and made-angry many peds
 *
 * Hash: 0x4E209B2C1EAD5159 | Since: 323 | API-Set: unknown
 */
export function isInMeleeCombat(ped) {
    return IsPedInMeleeCombat(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x796D90EFB19AA332 | Since: 323 | API-Set: unknown
 */
export function isInModel(ped, modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return IsPedInModel(ped, modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x7DCE8BDA0F1C1200 | Since: 323 | API-Set: unknown
 */
export function isInParachuteFreeFall(ped) {
    return IsPedInParachuteFreeFall(ped);
}
/**
 * Gets a value indicating whether the specified ped is in the specified vehicle.
 *
 * If 'atGetIn' is false, the function will not return true until the ped is sitting in the vehicle and is about to close the door. If it's true, the function returns true the moment the ped starts to get onto the seat (after opening the door). Eg. if false, and the ped is getting into a submersible, the function will not return true until the ped has descended down into the submersible and gotten into the seat, while if it's true, it'll return true the moment the hatch has been opened and the ped is about to descend into the submersible.
 *
 * Hash: 0xA3EE4A07279BB9DB | Since: 323 | API-Set: unknown
 */
export function isInVehicle(ped, vehicle, atGetIn) {
    return IsPedInVehicle(ped, vehicle, atGetIn);
}
/**
 * No comment provided
 *
 * Hash: 0x4AE4FF911DFB61DA | Since: 323 | API-Set: unknown
 */
export function isJacking(ped) {
    return IsPedJacking(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCEDABC5900A0BF97 | Since: 323 | API-Set: unknown
 */
export function isJumping(ped) {
    return IsPedJumping(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x433DDFFE2044B636 | Since: 323 | API-Set: unknown
 */
export function isJumpingOutOfVehicle(ped) {
    return IsPedJumpingOutOfVehicle(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x412F1364FA066CFB | Since: 573 | API-Set: unknown
 */
export function isLanding() {
    return Citizen.invokeNative('0x412F1364FA066CFB', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0525A2C2562F3CD4 | Since: 323 | API-Set: unknown
 */
export function isLipstickTintForBarber(colorID) {
    return IsPedLipstickColorValid(colorID);
}
/**
 * No comment provided
 *
 * Hash: 0x3E802F11FBE27674 | Since: 323 | API-Set: unknown
 */
export function isLipstickTintForCreator(colorId) {
    return IsPedLipstickColorValid2(colorId);
}
/**
 * Returns true/false if the ped is/isn't male.
 *
 * Hash: 0x6D9F5FAA7488BA46 | Since: 323 | API-Set: unknown
 */
export function isMale(ped) {
    return IsPedMale(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC9D55B1A358A5BF7 | Since: 323 | API-Set: unknown
 */
export function isModel(ped, modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return IsPedModel(ped, modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x94495889E22C6479 | Since: 323 | API-Set: unknown
 */
export function isOnAnyBike(ped) {
    return IsPedOnAnyBike(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x01FEE67DB37F59B2 | Since: 323 | API-Set: unknown
 */
export function isOnFoot(ped) {
    return IsPedOnFoot(ped);
}
/**
 * `Same function call as PED::GET_MOUNT, aka just returns 0`
 *
 * Hash: 0x460BC76A0E10655E | Since: 323 | API-Set: unknown
 */
export function isOnMount(ped) {
    return IsPedOnMount(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEC5F66E459AF3BB2 | Since: 323 | API-Set: unknown
 */
export function isOnSpecificVehicle(ped, vehicle) {
    return IsPedOnSpecificVehicle(ped, vehicle);
}
/**
 * Gets a value indicating whether the specified ped is on top of any vehicle.
 *
 * Return 1 when ped is on vehicle.
 * Return 0 when ped is not on a vehicle.
 *
 *
 * Hash: 0x67722AEB798E5FAB | Since: 323 | API-Set: unknown
 */
export function isOnVehicle(ped) {
    return IsPedOnVehicle(ped);
}
/**
 * Returns true if the ped is currently opening a door (CTaskOpenDoor).
 *
 * Hash: 0x26AF0E8E30BD2A2C | Since: 323 | API-Set: unknown
 */
export function isOpeningDoor(ped) {
    return IsPedOpeningADoor(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEBD0EDBA5BE957CF | Since: 323 | API-Set: unknown
 */
export function isPerformingACounterAttack(ped) {
    return IsPedPerformingDependentComboLimit(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xDCCA191DF9980FD7 | Since: 323 | API-Set: unknown
 */
export function isPerformingMeleeAction(ped) {
    return IsPedPerformingMeleeAction(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xFD4CCDBCC59941B7 | Since: 323 | API-Set: unknown
 */
export function isPerformingStealthKill(ped) {
    return IsPedPerformingStealthKill(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC70B5FAE151982D8 | Since: 323 | API-Set: unknown
 */
export function isPlantingBomb(ped) {
    return IsPedPlantingBomb(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD6A86331A537A7B9 | Since: 323 | API-Set: unknown
 */
export function isProne(ped) {
    return IsPedProne(ped);
}
/**
 * If the ped handle passed through the parenthesis is in a ragdoll state this will return true.
 *
 * Hash: 0x47E4E977581C5B55 | Since: 323 | API-Set: unknown
 */
export function isRagdoll(ped) {
    return IsPedRagdoll(ped);
}
/**
 * Returns whether the specified ped is reloading.
 *
 * Hash: 0x24B100C68C645951 | Since: 323 | API-Set: unknown
 */
export function isReloading(ped) {
    return IsPedReloading(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x625B774D75C87068 | Since: 323 | API-Set: unknown
 */
export function isRespondingToEvent(ped, event) {
    return IsPedRespondingToEvent(ped, event);
}
/**
 * No comment provided
 *
 * Hash: 0xD1871251F3B5ACD7 | Since: 323 | API-Set: unknown
 */
export function isRunningMeleeTask(ped) {
    return IsPedRunningMeleeTask(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2AFE52F782F25775 | Since: 323 | API-Set: unknown
 */
export function isRunningMobilePhoneTask(ped) {
    return IsPedRunningMobilePhoneTask(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE3B6097CC25AA69E | Since: 323 | API-Set: unknown
 */
export function isRunningRagdollTask(ped) {
    return IsPedRunningRagdollTask(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x81AA517FBBA05D39 | Since: 944 | API-Set: unknown
 */
export function isShaderReady(ped) {
    return IsPedShaderEffectValid(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB8B52E498014F5B0 | Since: 323 | API-Set: unknown
 */
export function isSheltered(ped) {
    return Citizen.invokeNative('0xB8B52E498014F5B0', ped);
}
/**
 * Returns whether the specified ped is shooting.
 *
 * Hash: 0x34616828CD07F1A1 | Since: 323 | API-Set: unknown
 */
export function isShooting(ped) {
    return IsPedShooting(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7E9DFE24AC1E58EF | Since: 323 | API-Set: unknown
 */
export function isShootingInArea(ped, x1, y1, z1, x2, y2, z2) {
    return IsPedShootingInArea(ped, x1, y1, z1, x2, y2, z2, false, false);
}
/**
 * Detect if ped is in any vehicle
 * [True/False]
 *
 * Hash: 0x826AA586EDB9FEF8 | Since: 323 | API-Set: unknown
 */
export function isSittingInAnyVehicle(ped) {
    return IsPedSittingInAnyVehicle(ped);
}
/**
 * Detect if ped is sitting in the specified vehicle
 * [True/False]
 *
 * Hash: 0xA808AA1D79230FC2 | Since: 323 | API-Set: unknown
 */
export function isSittingInVehicle(ped, vehicle) {
    return IsPedSittingInVehicle(ped, vehicle);
}
/**
 * Returns true if the ped doesn't do any movement. If the ped is being pushed forwards by using APPLY_FORCE_TO_ENTITY for example, the function returns false.
 *
 * Hash: 0x530944F6F4B8A214 | Since: 323 | API-Set: unknown
 */
export function isStopped(ped) {
    return IsPedStopped(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9DE327631295B4C2 | Since: 323 | API-Set: unknown
 */
export function isSwimming(ped) {
    return IsPedSwimming(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC024869A53992F34 | Since: 323 | API-Set: unknown
 */
export function isSwimmingUnderWater(ped) {
    return IsPedSwimmingUnderWater(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3795688A307E1EB6 | Since: 505 | API-Set: unknown
 */
export function isSwitchingWeapon(Ped) {
    return IsPedSwappingWeapon(Ped);
}
/**
 * No comment provided
 *
 * Hash: 0x14590DDBEDB1EC85 | Since: 323 | API-Set: unknown
 */
export function isTakingOffHelmet(ped) {
    return IsPedTakingOffHelmet(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4C5E1F087CD10BB7 | Since: 323 | API-Set: unknown
 */
export function isTracked(ped) {
    return IsPedTracked(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x44D28D5DDFE5F68C | Since: 323 | API-Set: unknown
 */
export function isTryingToEnterALockedVehicle(ped) {
    return IsPedTryingToEnterALockedVehicle(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x00E73468D085F745 | Since: 323 | API-Set: unknown
 */
export function isUsingActionMode(ped) {
    return IsPedUsingActionMode(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x57AB4A3080F85143 | Since: 323 | API-Set: unknown
 */
export function isUsingAnyScenario(ped) {
    return IsPedUsingAnyScenario(ped);
}
/**
 * Full list of ped scenarios by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
 *
 * Hash: 0x1BF094736DD62C2E | Since: 323 | API-Set: unknown
 */
export function isUsingScenario(ped, scenario) {
    return IsPedUsingScenario(ped, scenario);
}
/**
 * No comment provided
 *
 * Hash: 0x117C70D1F5730B5E | Since: 323 | API-Set: unknown
 */
export function isVaulting(ped) {
    return IsPedVaulting(ped);
}
/**
 * Returns true if the ped passed through the parenthesis is wearing a helmet.
 *
 * Hash: 0xF33BDFE19B309B19 | Since: 323 | API-Set: unknown
 */
export function isWearingHelmet(ped) {
    return IsPedWearingHelmet(ped);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0x6EC47A344923E1ED | Since: 323 | API-Set: unknown
 */
export function isScriptedScenarioUsingConditionalAnim(ped, animDict, anim) {
    return IsScriptedScenarioPedUsingConditionalAnim(ped, animDict, anim);
}
/**
 * No comment provided
 *
 * Hash: 0x7F2F4F13AC5257EF | Since: 323 | API-Set: unknown
 */
export function isSynchronizedSceneHoldLastFrame(sceneID) {
    return IsSynchronizedSceneHoldLastFrame(sceneID);
}
/**
 * No comment provided
 *
 * Hash: 0x62522002E0C391BA | Since: 323 | API-Set: unknown
 */
export function isSynchronizedSceneLoo(sceneID) {
    return IsSynchronizedSceneLooped(sceneID);
}
/**
 * Returns true if a synchronized scene is running
 *
 * Hash: 0x25D39B935A038A26 | Since: 323 | API-Set: unknown
 */
export function isSynchronizedSceneRunning(sceneId) {
    return IsSynchronizedSceneRunning(sceneId);
}
/**
 * No comment provided
 *
 * Hash: 0x06087579E7AA85A9 | Since: 323 | API-Set: unknown
 */
export function isTargetInPerceptionArea(ped, targetPed) {
    return Citizen.invokeNative('0x06087579E7AA85A9', ped, targetPed, 0, 0, 0, 0);
}
/**
 * returns whether or not a ped is visible within your FOV, not this check auto's to false after a certain distance.
 *
 *
 * Target needs to be tracked.. won't work otherwise.
 *
 * Hash: 0x91C8E617F64188AC | Since: 323 | API-Set: unknown
 */
export function isTrackedVisible(ped) {
    return IsTrackedPedVisible(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xFEC9A3B1820F3331 | Since: 323 | API-Set: unknown
 */
export function isUsingScubaGearVariation() {
    return Citizen.invokeNative('0xFEC9A3B1820F3331', undefined);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0x6FD7816A36615F48 | Since: 323 | API-Set: unknown
 */
export function knockOffProp(ped) {
    KnockOffPedProp(ped, false, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x45BBCBA77C29A841 | Since: 323 | API-Set: unknown
 */
export function knockOffVehicle(ped) {
    KnockPedOffVehicle(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2B694AFCF64E6994 | Since: 323 | API-Set: unknown
 */
export function markDecorationsAsClonedFromLocalPlayer(ped) {
    Citizen.invokeNative('0x2B694AFCF64E6994', ped, false);
}
/**
 * Checks if the specified sexiness flag is set
 *
 * enum eSexinessFlags
 * {
 * SF_JEER_AT_HOT_PED = 0,
 * SF_HURRIEDFEMALES_SEXY = 1,
 * SF_HOT_PERSON = 2,
 * };
 *
 * Hash: 0x46B05BCAE43856B0 | Since: 323 | API-Set: unknown
 */
export function hasSexinessFlagSet(ped, sexinessFlag) {
    return Citizen.invokeNative('0x46B05BCAE43856B0', ped, sexinessFlag);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0xE1E65CA8AC9C00ED | Since: 323 | API-Set: unknown
 */
export function playFacialAnim(ped, animName, animDict) {
    PlayFacialAnim(ped, animName, animDict);
}
/**
 * Based on TASK_COMBAT_HATED_TARGETS_AROUND_PED, the parameters are likely similar (PedHandle, and area to attack in).
 *
 * Hash: 0x9222F300BF8354FE | Since: 323 | API-Set: unknown
 */
export function registerHatedTargetsAround(ped, radius) {
    RegisterHatedTargetsAroundPed(ped, radius);
}
/**
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 *
 * Hash: 0x4462658788425076 | Since: 323 | API-Set: unknown
 */
export function registerheadshot(ped) {
    return RegisterPedheadshot(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xBA8805A1108A2515 | Since: 877 | API-Set: unknown
 */
export function registerheadshotHires(ped) {
    return RegisterPedheadshot3(ped);
}
/**
 * Similar to REGISTER_PEDHEADSHOT but creates a transparent background instead of black. Example: https://i.imgur.com/iHz8ztn.png
 *
 * Hash: 0x953563CE563143AF | Since: 323 | API-Set: unknown
 */
export function registerheadshotTransparent(ped) {
    return RegisterPedheadshotTransparent(ped);
}
/**
 * `PED::REGISTER_TARGET(l_216, PLAYER::PLAYER_PED_ID()); from re_prisonbreak.txt.`
 *
 * l_216 = RECSBRobber1
 *
 * Hash: 0x2F25D9AEFA34FBA2 | Since: 323 | API-Set: unknown
 */
export function registerTarget(ped, target) {
    RegisterTarget(ped, target);
}
/**
 * No comment provided
 *
 * Hash: 0x5D517B27CF6ECD04 | Since: 323 | API-Set: unknown
 */
export function releaseheadshotImgUpload(id) {
    ReleasePedheadshotImgUpload(id);
}
/**
 * No comment provided
 *
 * Hash: 0xF79F9DEF0AADE61A | Since: 323 | API-Set: unknown
 */
export function releasePreloadPropData(ped) {
    ReleasePedPreloadPropData(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5AAB586FFEC0FD96 | Since: 323 | API-Set: unknown
 */
export function releasePreloadVariationData(ped) {
    ReleasePedPreloadVariationData(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x13E940F88470FA51 | Since: 323 | API-Set: unknown
 */
export function removeActionModeAsset(asset) {
    RemoveActionModeAsset(asset);
}
/**
 * No comment provided
 *
 * Hash: 0x8EB2F69076AF7053 | Since: 323 | API-Set: unknown
 */
export function removeGroup(groupId) {
    RemoveGroup(groupId);
}
/**
 * Ped will no longer get angry when you stay near him.
 *
 * Hash: 0x74D4E028107450A9 | Since: 323 | API-Set: unknown
 */
export function removeDefensiveArea(ped, toggle) {
    RemovePedDefensiveArea(ped, toggle);
}
/**
 * Judging purely from a quick disassembly, if the ped is in a vehicle, the ped will be deleted immediately. If not, it'll be marked as no longer needed. - very elegant..
 *
 * Hash: 0xAC6D445B994DF95E | Since: 323 | API-Set: unknown
 */
export function removeElegantly(ped) {
    RemovePedElegantly(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xED74007FFB146BC2 | Since: 323 | API-Set: unknown
 */
export function removeFromGroup(ped) {
    RemovePedFromGroup(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xA7B2458D0AD6DED8 | Since: 323 | API-Set: unknown
 */
export function removeHelmet(ped, instantly) {
    RemovePedHelmet(ped, instantly);
}
/**
 * No comment provided
 *
 * Hash: 0xFDDB234CF74073D9 | Since: 323 | API-Set: unknown
 */
export function removePreferredCoverSet(ped) {
    RemovePedPreferredCoverSet(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB6BA2444AB393DA2 | Since: 323 | API-Set: unknown
 */
export function removeRelationshipGroup(groupHash) {
    if (typeof groupHash === 'string')
        groupHash = GetHashKey(groupHash);
    RemoveRelationshipGroup(groupHash);
}
/**
 * No comment provided
 *
 * Hash: 0x31D16B74C6E29D66 | Since: 323 | API-Set: unknown
 */
export function removeScenarioBlockingArea() {
    RemoveScenarioBlockingArea(undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD37401D78A929A49 | Since: 323 | API-Set: unknown
 */
export function removeScenarioBlockingAreas() {
    RemoveScenarioBlockingAreas();
}
/**
 * No comment provided
 *
 * Hash: 0x9219857D21F0E842 | Since: 323 | API-Set: unknown
 */
export function removeStealthModeAsset(asset) {
    RemoveStealthModeAsset(asset);
}
/**
 * No comment provided
 *
 * Hash: 0x290E2780BB7AA598 | Since: 323 | API-Set: unknown
 */
export function requestActionModeAsset(asset) {
    RequestActionModeAsset(asset);
}
/**
 * No comment provided
 *
 * Hash: 0xF0DAEF2F545BEE25 | Since: 323 | API-Set: unknown
 */
export function requestheadshotImgUpload(id) {
    return RequestPedheadshotImgUpload(id);
}
/**
 * No comment provided
 *
 * Hash: 0xCD018C591F94CB43 | Since: 323 | API-Set: unknown
 */
export function requestRestrictedVehicleVisibilityTracking(ped) {
    Citizen.invokeNative('0xCD018C591F94CB43', ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x75BA1CB3B7D40CAF | Since: 323 | API-Set: unknown
 */
export function requestUseSmallBboxVisibilityTracking(ped) {
    Citizen.invokeNative('0x75BA1CB3B7D40CAF', ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2BC338A7B21F4608 | Since: 323 | API-Set: unknown
 */
export function requestVehicleVisibilityTracking(ped) {
    RequestPedVehicleVisibilityTracking(ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7D7A2E43E74E2EB8 | Since: 323 | API-Set: unknown
 */
export function requestVisibilityTracking(ped) {
    RequestPedVisibilityTracking(ped);
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x1216E0BFA72CC703 | Since: 323 | API-Set: unknown
 */
export function requestRagdollBoundsUpdate() {
    Citizen.invokeNative('0x1216E0BFA72CC703', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2A0A62FCDEE16D4F | Since: 323 | API-Set: unknown
 */
export function requestStealthModeAsset(asset) {
    RequestStealthModeAsset(asset);
}
/**
 * No comment provided
 *
 * Hash: 0x46E56A7CD1D63C3F | Since: 323 | API-Set: unknown
 */
export function resetAiMeleeWeaponDamageModifier() {
    ResetAiMeleeWeaponDamageModifier();
}
/**
 * No comment provided
 *
 * Hash: 0xEA16670E7BA4743C | Since: 323 | API-Set: unknown
 */
export function resetAiWeaponDamageModifier() {
    ResetAiWeaponDamageModifier();
}
/**
 * No comment provided
 *
 * Hash: 0x007FDE5A7897E426 | Since: 2802 | API-Set: unknown
 */
export function resetFacialIdleAnim(ped) {
    Citizen.invokeNative('0x007FDE5A7897E426', ped);
}
/**
 * No comment provided
 *
 * Hash: 0x63DAB4CCB3273205 | Since: 323 | API-Set: unknown
 */
export function resetGroupFormationDefaultSpacing(groupHandle) {
    ResetGroupFormationDefaultSpacing(groupHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x22EF8FF8778030EB | Since: 323 | API-Set: unknown
 */
export function resetInVehicleContext(ped) {
    ResetPedInVehicleContext(ped);
}
/**
 * Resets the value for the last vehicle driven by the Ped.
 *
 * Hash: 0xBB8DE8CF6A8DD8BB | Since: 323 | API-Set: unknown
 */
export function resetLastVehicle(ped) {
    ResetPedLastVehicle(ped);
}
/**
 * If p1 is 0.0, I believe you are back to normal.
 * If p1 is 1.0, it looks like you can only rotate the ped, not walk.
 *
 * Using the following code to reset back to normal
 * `PED::RESET_PED_MOVEMENT_CLIPSET(PLAYER::PLAYER_PED_ID(), 0.0);`
 *
 * Hash: 0xAA74EC0CB0AAEA2C | Since: 323 | API-Set: unknown
 */
export function resetMovementClipset(ped) {
    ResetPedMovementClipset(ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9FA4664CF62E47E8 | Since: 323 | API-Set: unknown
 */
export function resetRagdollTimer(ped) {
    ResetPedRagdollTimer(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x20510814175EA477 | Since: 323 | API-Set: unknown
 */
export function resetStrafeClipset(ped) {
    ResetPedStrafeClipset(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3AC1F7B898F30C05 | Since: 323 | API-Set: unknown
 */
export function resetVisibleDamage(ped) {
    ResetPedVisibleDamage(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x97B0DB5B4AA74E77 | Since: 323 | API-Set: unknown
 */
export function resetWeaponMovementClipset(ped) {
    ResetPedWeaponMovementClipset(ped);
}
/**
 * This function will simply bring the dead person back to life.
 *
 * Try not to use it alone, since using this function alone, will make peds fall through ground in hell(well for the most of the times).
 *
 * Instead, before calling this function, you may want to declare the position, where your Resurrected ped to be spawn at.(For instance, Around 2 floats of Player's current position.)
 *
 * Also, disabling any assigned task immediately helped in the number of scenarios, where If you want peds to perform certain decided tasks.
 *
 * Hash: 0x71BC8E838B9C6035 | Since: 323 | API-Set: unknown
 */
export function resurrect(ped) {
    ResurrectPed(ped);
}
/**
 * It will revive/cure the injured ped. The condition is ped must not be dead.
 *
 * Upon setting and converting the health int, found, if health falls below 5, the ped will lay on the ground in pain(Maximum default health is 100).
 *
 * This function is well suited there.
 *
 * Hash: 0x8D8ACD8388CD99CE | Since: 323 | API-Set: unknown
 */
export function reviveInjured(ped) {
    ReviveInjuredPed(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x66460DEDDD417254 | Since: 323 | API-Set: unknown
 */
export function setAiMeleeWeaponDamageModifier(modifier) {
    SetAiMeleeWeaponDamageModifier(modifier);
}
/**
 * No comment provided
 *
 * Hash: 0x1B1E2A40A65B8521 | Since: 323 | API-Set: unknown
 */
export function setAiWeaponDamageModifier(value) {
    SetAiWeaponDamageModifier(value);
}
/**
 * No comment provided
 *
 * Hash: 0x061CB768363D6424 | Since: 323 | API-Set: unknown
 */
export function setAllowLockonToIfFriendly(ped, toggle) {
    Citizen.invokeNative('0x061CB768363D6424', ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xFAB944D4D481ACCB | Since: 1734 | API-Set: unknown
 */
export function setAllowStuntJumpCamera(ped, toggle) {
    Citizen.invokeNative('0xFAB944D4D481ACCB', ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x87DDEB611B329A9C | Since: 1103 | API-Set: unknown
 */
export function setAmbientLawAccuracyModifier(multiplier) {
    Citizen.invokeNative('0x87DDEB611B329A9C', multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x6B0E6172C9A4D902 | Since: 323 | API-Set: unknown
 */
export function setAmbientsDropMoney() {
    SetAmbientPedsDropMoney(false);
}
/**
 * `works with TASK::TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS to make a ped completely oblivious to all events going on around him`
 *
 * Hash: 0x9F8AA94D6D97DBF4 | Since: 323 | API-Set: unknown
 */
export function setBlockingOfNonTemporaryEvents(ped, toggle) {
    SetBlockingOfNonTemporaryEvents(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x9911F4A24485F653 | Since: 323 | API-Set: unknown
 */
export function setBlockingOfNonTemporaryEventsForAmbientsThisFrame() {
    Citizen.invokeNative('0x9911F4A24485F653', false);
}
/**
 * Setting ped to true allows the ped to shoot "friendlies".
 *
 * p2 set to true when toggle is also true seams to make peds permanently unable to aim at, even if you set p2 back to false.
 *
 * p1 = false & p2 = false for unable to aim at.
 * p1 = true & p2 = false for able to aim at.
 *
 * Hash: 0xB3B1CB349FF9C75D | Since: 323 | API-Set: unknown
 */
export function setCanAttackFriendly(ped, toggle) {
    SetCanAttackFriendly(ped, toggle, false);
}
/**
 * combatType can be between 0-14. See GET_COMBAT_FLOAT below for a list of possible parameters.
 *
 * Hash: 0xFF41B4B141ED981C | Since: 323 | API-Set: unknown
 */
export function setCombatFloat(ped, combatType) {
    SetCombatFloat(ped, combatType, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2F074C904D85129E | Since: 393 | API-Set: unknown
 */
export function setCopPerceptionOverrides(seeingRange, seeingRangePeripheral, hearingRange, visualFieldMinAzimuthAngle, visualFieldMaxAzimuthAngle, fieldOfGazeMaxAngle) {
    Citizen.invokeNative('0x2F074C904D85129E', seeingRange, seeingRangePeripheral, hearingRange, visualFieldMinAzimuthAngle, visualFieldMaxAzimuthAngle, fieldOfGazeMaxAngle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2735233A786B1BEF | Since: 323 | API-Set: unknown
 */
export function setCorpseRagdollFriction(ped) {
    Citizen.invokeNative('0x2735233A786B1BEF', ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x102E68B2024D536D | Since: 323 | API-Set: unknown
 */
export function setCreateRandomCops(toggle) {
    SetCreateRandomCops(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8A4986851C4EF6E7 | Since: 323 | API-Set: unknown
 */
export function setCreateRandomCopsNotOnScenarios(toggle) {
    SetCreateRandomCopsNotOnScenarios(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x444CB7D7DBE6973D | Since: 323 | API-Set: unknown
 */
export function setCreateRandomCopsOnScenarios(toggle) {
    SetCreateRandomCopsOnScenarios(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x711794453CFD692B | Since: 463 | API-Set: unknown
 */
export function setDisableHighFallDeath(ped, toggle) {
    Citizen.invokeNative('0x711794453CFD692B', ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xDFE68C4B787E1BFB | Since: 1180 | API-Set: unknown
 */
export function setDisableMapCollision(ped) {
    Citizen.invokeNative('0xDFE68C4B787E1BFB', ped);
}
/**
 * The function specifically verifies the value is equal to, or less than 1.0f. If it is greater than 1.0f, the function does nothing at all.
 *
 * Hash: 0xB195FFA8042FC5C3 | Since: 323 | API-Set: unknown
 */
export function setDriverAbility(driver, ability) {
    SetDriverAbility(driver, ability);
}
/**
 * range 0.0f - 1.0f
 *
 * Hash: 0xA731F608CA104E3C | Since: 323 | API-Set: unknown
 */
export function setDriverAggressiveness(driver, aggressiveness) {
    SetDriverAggressiveness(driver, aggressiveness);
}
/**
 * Scripts use 0.2, 0.5 and 1.0. Value must be >= 0.0 && <= 1.0
 *
 * Hash: 0xDED5AF5A0EA4B297 | Since: 323 | API-Set: unknown
 */
export function setDriverRacingModifier(driver, modifier) {
    SetDriverRacingModifier(driver, modifier);
}
/**
 * Used with SET_ENABLE_HANDCUFFS in decompiled scripts. From my observations, I have noticed that while being ragdolled you are not able to get up but you can still run. Your legs can also bend.
 *
 * Hash: 0xC52E0F855C58FC2E | Since: 323 | API-Set: unknown
 */
export function setEnableBoundAnkles(ped, toggle) {
    SetEnableBoundAnkles(ped, toggle);
}
/**
 * ped can not pull out a weapon when true
 *
 * Hash: 0xDF1AF8B5D56542FA | Since: 323 | API-Set: unknown
 */
export function setEnableHandcuffs(ped, toggle) {
    SetEnableHandcuffs(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xD2C5AA0C0E8D0F1E | Since: 323 | API-Set: unknown
 */
export function setEnableEnveffScale(ped, toggle) {
    SetEnablePedEnveffScale(ped, toggle);
}
/**
 * Enables diving motion when underwater.
 *
 * Hash: 0xF99F62004024D506 | Since: 323 | API-Set: unknown
 */
export function setEnableScuba(ped, toggle) {
    SetEnableScuba(ped, toggle);
}
/**
 * Clipsets:
 * facials@gen_female@base
 * facials@gen_male@base
 * facials@p_m_zero@base
 *
 * Typically followed with SET_FACIAL_IDLE_ANIM_OVERRIDE:
 * mood_drunk_1
 * mood_stressed_1
 * mood_happy_1
 * mood_talking_1
 *
 *
 * Hash: 0x5687C7F05B39E401 | Since: 1493 | API-Set: unknown
 */
export function setFacialClipset(ped, animDict) {
    SetFacialClipsetOverride(ped, animDict);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Hash: 0xFFC24B988B938B38 | Since: 323 | API-Set: unknown
 */
export function setFacialIdleAnimOverride(ped, animName, animDict) {
    SetFacialIdleAnimOverride(ped, animName, animDict);
}
/**
 * No comment provided
 *
 * Hash: 0x129466ED55140F8D | Since: 323 | API-Set: unknown
 */
export function setForceFootstepUpdate(ped, toggle) {
    SetForceFootstepUpdate(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xCB968B53FC7F916D | Since: 323 | API-Set: unknown
 */
export function setForceStepType(ped, _type) {
    SetForceStepType(ped, false, _type, 0);
}
/**
 * 0: Default
 * 1: Circle Around Leader
 * 2: Alternative Circle Around Leader
 * 3: Line, with Leader at center
 *
 * Hash: 0xCE2F5FC3AF7E8C1E | Since: 323 | API-Set: unknown
 */
export function setGroupFormation(groupId, formationType) {
    SetGroupFormation(groupId, formationType);
}
/**
 * No comment provided
 *
 * Hash: 0x1D9D45004C28C916 | Since: 323 | API-Set: unknown
 */
export function setGroupFormationSpacing(groupId, pos) {
    SetGroupFormationSpacing(groupId, pos.x, pos.y, pos.z);
}
/**
 * Sets the range at which members will automatically leave the group.
 *
 * Hash: 0x4102C7858CFEE4E4 | Since: 323 | API-Set: unknown
 */
export function setGroupSeparationRange(groupHandle, separationRange) {
    SetGroupSeparationRange(groupHandle, separationRange);
}
/**
 * Used for freemode (online) characters.
 *
 * For some reason, the scripts use a rounded float for the index.
 * Indexes:
 * 1. black
 * 2. very light blue/green
 * 3. dark blue
 * 4. brown
 * 5. darker brown
 * 6. light brown
 * 7. blue
 * 8. light blue
 * 9. pink
 * 10. yellow
 * 11. purple
 * 12. black
 * 13. dark green
 * 14. light brown
 * 15. yellow/black pattern
 * 16. light colored spiral pattern
 * 17. shiny red
 * 18. shiny half blue/half red
 * 19. half black/half light blue
 * 20. white/red perimter
 * 21. green snake
 * 22. red snake
 * 23. dark blue snake
 * 24. dark yellow
 * 25. bright yellow
 * 26. all black
 * 28. red small pupil
 * 29. devil blue/black
 * 30. white small pupil
 * 31. glossed over
 *
 * Hash: 0x50B56988B170AFDF | Since: 323 | API-Set: unknown
 */
export function setHeadBlendEyeColor(ped, index) {
    SetPedEyeColor(ped, index);
}
/**
 * p4 seems to vary from 0 to 3.
 * Preview: https://gfycat.com/MaleRareAmazonparrot
 *
 * Hash: 0xCC9682B8951C5229 | Since: 323 | API-Set: unknown
 */
export function setHeadBlendPaletteColor(ped, r, g, b, id) {
    SetHeadBlendPaletteColor(ped, r, g, b, id);
}
/**
 * Related to Peds dropping pickup_health_snack; p0 is a value between [0.0, 1.0] that corresponds to drop rate
 *
 * Hash: 0xFF4803BC019852D9 | Since: 323 | API-Set: unknown
 */
export function setHealthSnacksCarriedByAllNews() {
    Citizen.invokeNative('0xFF4803BC019852D9', 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC32779C16FCEECD9 | Since: 323 | API-Set: unknown
 */
export function setIkTarget(ped, ikIndex, entityLookAt, boneLookAt, offsetX, offsetY, offsetZ, blendInDuration, blendOutDuration) {
    SetIkTarget(ped, ikIndex, entityLookAt, boneLookAt, offsetX, offsetY, offsetZ, undefined, blendInDuration, blendOutDuration);
}
/**
 * Only appears in lamar1 script.
 *
 * Hash: 0x1A330D297AAC6BC1 | Since: 323 | API-Set: unknown
 */
export function setLadderClimbInputState(ped) {
    Citizen.invokeNative('0x1A330D297AAC6BC1', ped, 0);
}
/**
 * name: "MP_FEMALE_ACTION" found multiple times in the b617d scripts.
 *
 * Hash: 0x781DE8FA214E87D2 | Since: 323 | API-Set: unknown
 */
export function setMovementModeOverride(ped, name) {
    SetMovementModeOverride(ped, name);
}
/**
 * accuracy = 0-100, 100 being perfectly accurate
 *
 * Hash: 0x7AEFB85C1D49DEB6 | Since: 323 | API-Set: unknown
 */
export function setAccuracy(ped, accuracy) {
    SetPedAccuracy(ped, accuracy);
}
/**
 * value ranges from 0 to 3.
 *
 * Hash: 0xDBA71115ED9941A6 | Since: 323 | API-Set: unknown
 */
export function setAlertness(ped, value) {
    SetPedAlertness(ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0xDA1F1B7BE1A8766F | Since: 323 | API-Set: unknown
 */
export function setAllowedToDuck(ped, toggle) {
    SetPedAllowedToDuck(ped, toggle);
}
/**
 * ntoggle was always false except in one instance (b678).
 *
 * The one time this is set to true seems to do with when you fail the mission.
 *
 * Hash: 0xF2BEBCDFAFDAA19E | Since: 323 | API-Set: unknown
 */
export function setAllowHurtCombatForAllMissionPeds(toggle) {
    Citizen.invokeNative('0xF2BEBCDFAFDAA19E', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x49E50BDB8BA4DAB2 | Since: 323 | API-Set: unknown
 */
export function setAllowMinorReactionsAsMissionPed(ped, toggle) {
    Citizen.invokeNative('0x49E50BDB8BA4DAB2', ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x3C028C636A414ED9 | Since: 323 | API-Set: unknown
 */
export function setAllowVehiclesOverride(ped, toggle) {
    SetPedAllowVehiclesOverride(ped, toggle);
}
/**
 * stance:
 * 0 = idle
 * 1 = walk
 * 2 = running
 *
 * p5 = usually set to true
 *
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 *
 * Hash: 0x90A43CC281FFAB46 | Since: 323 | API-Set: unknown
 */
export function setAlternateMovementAnim(ped, stance, animDictionary, animationName) {
    SetPedAlternateMovementAnim(ped, stance, animDictionary, animationName, 0, false);
}
/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 *
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 *
 * Hash: 0x6C60394CB4F75E9A | Since: 323 | API-Set: unknown
 */
export function setAlternateWalkAnim(ped, animDict, animName) {
    SetPedAlternateWalkAnim(ped, animDict, animName, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC7F76DF27A5045A1 | Since: 323 | API-Set: unknown
 */
export function setAngledDefensiveArea(ped) {
    SetPedAngledDefensiveArea(ped, 0, 0, 0, 0, 0, 0, 0, false, false);
}
/**
 * Enable/disable ped shadow (ambient occlusion). https://gfycat.com/thankfulesteemedgecko
 *
 * Hash: 0x2B5AA717A181FB4C | Since: 323 | API-Set: unknown
 */
export function setAoBlobRendering(ped, toggle) {
    SetPedAoBlobRendering(ped, toggle);
}
/**
 * Sets the armor of the specified ped.
 *
 * ped: The Ped to set the armor of.
 * amount: A value between 0 and 100 indicating the value to set the Ped's armor to.
 *
 * Hash: 0xCEA04D83135264CC | Since: 323 | API-Set: unknown
 */
export function setArmour(ped, amount) {
    SetPedArmour(ped, amount);
}
/**
 * Turns the desired ped into a cop. If you use this on the player ped, you will become almost invisible to cops dispatched for you. You will also report your own crimes, get a generic cop voice, get a cop-vision-cone on the radar, and you will be unable to shoot at other cops. SWAT and Army will still shoot at you. Toggling ped as "false" has no effect; you must change p0's ped model to disable the effect.
 *
 * Hash: 0xBB03C38DD3FB7FFD | Since: 323 | API-Set: unknown
 */
export function setAsCop(ped, toggle) {
    SetPedAsCop(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x02A0C9720B854BFA | Since: 323 | API-Set: unknown
 */
export function setAsEnemy(ped, toggle) {
    SetPedAsEnemy(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x2A7819605465FBCE | Since: 323 | API-Set: unknown
 */
export function setAsGroupLeader(ped, groupId) {
    SetPedAsGroupLeader(ped, groupId);
}
/**
 * No comment provided
 *
 * Hash: 0x9F3480FE65DB31B5 | Since: 323 | API-Set: unknown
 */
export function setAsGroupMember(ped, groupId) {
    SetPedAsGroupMember(ped, groupId);
}
/**
 * No comment provided
 *
 * Hash: 0x137BBD05230DB22D | Since: 323 | API-Set: unknown
 */
export function setBlendFromParents(ped) {
    SetPedBlendFromParents(ped, undefined, undefined, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x576594E8D64375E2 | Since: 323 | API-Set: unknown
 */
export function setBlocksPathingWhenDead(ped, toggle) {
    SetPedBlocksPathingWhenDead(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x4F5F651ACCC9C4CF | Since: 323 | API-Set: unknown
 */
export function setBoundsOrientation(ped, pos) {
    SetPedBoundsOrientation(ped, 0, 0, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x6C3B4D6D13B4C841 | Since: 323 | API-Set: unknown
 */
export function setCanArmIk(ped, toggle) {
    SetPedCanArmIk(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC1670E958EEE24E5 | Since: 323 | API-Set: unknown
 */
export function setCanBeDraggedOut(ped, toggle) {
    SetPedCanBeDraggedOut(ped, toggle);
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0xB282749D5E028163 | Since: 877 | API-Set: unknown
 */
export function setCanBeKnockedOffBike() {
    Citizen.invokeNative('0xB282749D5E028163', undefined, undefined);
}
/**
 * state: https://alloc8or.re/gta5/doc/enums/eKnockOffVehicle.txt
 *
 * Hash: 0x7A6535691B477C48 | Since: 323 | API-Set: unknown
 */
export function setCanBeKnockedOffVehicle(ped, state) {
    SetPedCanBeKnockedOffVehicle(ped, state);
}
/**
 * No comment provided
 *
 * Hash: 0xC7EF1BA83230BA07 | Since: 323 | API-Set: unknown
 */
export function setCanBeShotInVehicle(ped, toggle) {
    SetPedCanBeShotInVehicle(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x638C03B0F9878F57 | Since: 323 | API-Set: unknown
 */
export function setCanBeTargetedWhenInjured(ped, toggle) {
    SetPedCanBeTargetedWhenInjured(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x4328652AE5769C71 | Since: 323 | API-Set: unknown
 */
export function setCanBeTargetedWithoutLos(ped, toggle) {
    SetPedCanBeTargetedWithoutLos(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x63F58F7C80513AAD | Since: 323 | API-Set: unknown
 */
export function setCanBeTargetted(ped, toggle) {
    SetPedCanBeTargetted(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x66B57B72E0836A76 | Since: 323 | API-Set: unknown
 */
export function setCanBeTargettedByPlayer(ped, player, toggle) {
    SetPedCanBeTargettedByPlayer(ped, player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBF1CA77833E58F2C | Since: 323 | API-Set: unknown
 */
export function setCanBeTargettedByTeam(ped, team, toggle) {
    SetPedCanBeTargettedByTeam(ped, team, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE84EC1735FB39663 | Since: 3717 | API-Set: unknown
 */
export function setCanBodyRecoilIk(ped, toggle) {
    Citizen.invokeNative('0xE84EC1735FB39663', ped, toggle);
}
/**
 * It simply makes the said ped to cower behind cover object(wall, desk, car)
 *
 * Peds flee attributes must be set to not to flee, first. Else, most of the peds, will just flee from gunshot sounds or any other panic situations.
 *
 * Hash: 0xCB7553CDCEF4A735 | Since: 323 | API-Set: unknown
 */
export function setCanCowerInCover(ped, toggle) {
    SetPedCanCowerInCover(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6B7A646C242A7059 | Since: 323 | API-Set: unknown
 */
export function setCanEvasiveDive(ped, toggle) {
    SetPedCanEvasiveDive(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC11C18092C5530DC | Since: 323 | API-Set: unknown
 */
export function setCanHeadIk(ped, toggle) {
    SetPedCanHeadIk(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x73518ECE2485412B | Since: 323 | API-Set: unknown
 */
export function setCanLegIk(ped, toggle) {
    SetPedCanLegIk(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE861D0B05C7662B8 | Since: 323 | API-Set: unknown
 */
export function setCanLosePropsOnDamage(ped, toggle) {
    SetPedCanLosePropsOnDamage(ped, toggle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xC514825C507E3736 | Since: 323 | API-Set: unknown
 */
export function setCanPeekInCover(ped, toggle) {
    SetPedCanPeekInCover(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6373D1349925A70E | Since: 323 | API-Set: unknown
 */
export function setCanPlayAmbientAnims(ped, toggle) {
    SetPedCanPlayAmbientAnims(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0EB0585D15254740 | Since: 323 | API-Set: unknown
 */
export function setCanPlayAmbientBaseAnims(ped, toggle) {
    SetPedCanPlayAmbientBaseAnims(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBAF20C5432058024 | Since: 323 | API-Set: unknown
 */
export function setCanPlayGestureAnims(ped, toggle) {
    SetPedCanPlayGestureAnims(ped, toggle);
}
/**
 * Toggles config flag CPED_CONFIG_FLAG_CanPlayInCarIdles.
 *
 * Hash: 0x820E9892A77E97CD | Since: 877 | API-Set: unknown
 */
export function setCanPlayInCarIdles(ped, toggle) {
    Citizen.invokeNative('0x820E9892A77E97CD', ped, toggle);
}
/**
 * p2 usually 0
 *
 * Hash: 0xF833DDBA3B104D43 | Since: 323 | API-Set: unknown
 */
export function setCanPlayVisemeAnims(ped, toggle) {
    SetPedCanPlayVisemeAnims(ped, toggle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB128377056A54E2A | Since: 323 | API-Set: unknown
 */
export function setCanRagdoll(ped, toggle) {
    SetPedCanRagdoll(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xDF993EE5E90ABA25 | Since: 323 | API-Set: unknown
 */
export function setCanRagdollFromPlayerImpact(ped, toggle) {
    SetPedCanRagdollFromPlayerImpact(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1CCE141467FF42A2 | Since: 323 | API-Set: unknown
 */
export function setCanSmashGlass(ped) {
    SetPedCanSmashGlass(ped, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xED7F7EFE9FABF340 | Since: 323 | API-Set: unknown
 */
export function setCanSwitchWeapon(ped, toggle) {
    SetPedCanSwitchWeapon(ped, toggle);
}
/**
 * This only will teleport the ped to the group leader if the group leader teleports (sets coords).
 *
 * Only works in singleplayer
 *
 * Hash: 0x2E2F4240B3F24647 | Since: 323 | API-Set: unknown
 */
export function setCanTeleportToGroupLeader(pedHandle, groupHandle, toggle) {
    SetPedCanTeleportToGroupLeader(pedHandle, groupHandle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF2B7106D37947CE0 | Since: 323 | API-Set: unknown
 */
export function setCanTorsoIk(ped, toggle) {
    SetPedCanTorsoIk(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF5846EDB26A98A24 | Since: 323 | API-Set: unknown
 */
export function setCanTorsoReactIk(ped) {
    SetPedCanTorsoReactIk(ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x6647C5F6F5792496 | Since: 323 | API-Set: unknown
 */
export function setCanTorsoVehicleIk(ped) {
    SetPedCanTorsoVehicleIk(ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xEC4686EC06434678 | Since: 323 | API-Set: unknown
 */
export function setCanUseAutoConversationLookat(ped, toggle) {
    SetPedCanUseAutoConversationLookat(ped, toggle);
}
/**
 * Overrides the ped's collision capsule radius for the current tick.
 * Must be called every tick to be effective.
 *
 * Setting this to 0.001 will allow warping through some objects.
 *
 * Hash: 0x364DF566EC833DE2 | Since: 323 | API-Set: unknown
 */
export function setCapsule(ped, value) {
    SetPedCapsule(ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x82A3D6D9CC2CB8E3 | Since: 323 | API-Set: unknown
 */
export function setClothPackageIndex() {
    SetPedClothProne(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x78C4E9961DB3EB5B | Since: 323 | API-Set: unknown
 */
export function setClothPinFrames() {
    SetPedClothPackageIndex(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA660FAF550EB37E5 | Since: 323 | API-Set: unknown
 */
export function setClothProne() {
    Citizen.invokeNative('0xA660FAF550EB37E5', undefined, false);
}
/**
 * enum eCombatAbility // 0xE793438C
 * {
 * CA_Poor,
 * CA_Average,
 * CA_Professional,
 * CA_NumTypes
 * };
 *
 * Hash: 0xC7622C0D36B2FDA8 | Since: 323 | API-Set: unknown
 */
export function setCombatAbility(ped, abilityLevel) {
    SetPedCombatAbility(ped, abilityLevel);
}
/**
 * enum eCombatAttributes // 0x0E8E7201
 * {
 * BF_CanUseCover = 0,
 * BF_CanUseVehicles = 1,
 * BF_CanDoDrivebys = 2,
 * BF_CanLeaveVehicle = 3,
 * BF_CanUseDynamicStrafeDecisions = 4,
 * BF_AlwaysFight = 5,
 * BF_0x66BB9FCC = 6,
 * BF_0x6837DA41 = 7,
 * BF_0xB4A13A5A = 8,
 * BF_0xEE326AAD = 9,
 * BF_0x7DF2CCFA = 10,
 * BF_0x0036D422 = 11,
 * BF_BlindFireWhenInCover = 12,
 * BF_Aggressive = 13,
 * BF_CanInvestigate = 14,
 * BF_HasRadio = 15,
 * BF_0x6BDE28D1 = 16,
 * BF_AlwaysFlee = 17,
 * BF_0x7852797D = 18,
 * BF_0x33497B95 = 19,
 * BF_CanTauntInVehicle = 20,
 * BF_CanChaseTargetOnFoot = 21,
 * BF_WillDragInjuredPedsToSafety = 22,
 * BF_0xCD7168B8 = 23,
 * BF_UseProximityFiringRate = 24,
 * BF_0x48F914F8 = 25,
 * BF_0x2EA543D0 = 26,
 * BF_PerfectAccuracy = 27,
 * BF_CanUseFrustratedAdvance = 28,
 * BF_0x3D131AC1 = 29,
 * BF_0x3AD95F27 = 30,
 * BF_MaintainMinDistanceToTarget = 31,
 * BF_0xEAD68AD2 = 32,
 * BF_0xA206C2E0 = 33,
 * BF_CanUsePeekingVariations = 34,
 * BF_0xA5715184 = 35,
 * BF_0xD5265533 = 36,
 * BF_0x2B84C2BF = 37,
 * BF_DisableBulletReactions = 38,
 * BF_CanBust = 39,
 * BF_0xAA525726 = 40,
 * BF_CanCommandeerVehicles = 41,
 * BF_CanFlank = 42,
 * BF_SwitchToAdvanceIfCantFindCover = 43,
 * BF_SwitchToDefensiveIfInCover = 44,
 * BF_0xEB4786A0 = 45,
 * BF_CanFightArmedPedsWhenNotArmed = 46,
 * BF_0xA08E9402 = 47,
 * BF_0x952EAD7D = 48,
 * BF_UseEnemyAccuracyScaling = 49,
 * BF_CanCharge = 50,
 * BF_0xDA8C2BD3 = 51,
 * BF_0x6562F017 = 52,
 * BF_0xA2C3D53B = 53,
 * BF_AlwaysEquipBestWeapon = 54,
 * BF_CanSeeUnderwaterPeds = 55,
 * BF_0xF619486B = 56,
 * BF_0x61EB63A3 = 57,
 * BF_DisableFleeFromCombat = 58,
 * BF_0x8976D12B = 59,
 * BF_CanThrowSmokeGrenade = 60,
 * BF_NonMissionPedsFleeFromThisPedUnlessArmed = 61,
 * BF_0x5452A10C = 62,
 * BF_FleesFromInvincibleOpponents = 63,
 * BF_DisableBlockFromPursueDuringVehicleChase = 64,
 * BF_DisableSpinOutDuringVehicleChase = 65,
 * BF_DisableCruiseInFrontDuringBlockDuringVehicleChase = 66,
 * BF_0x0B404731 = 67,
 * BF_DisableReactToBuddyShot = 68,
 * BF_0x7FFD6AEB = 69,
 * BF_0x51F4AEF8 = 70,
 * BF_PermitChargeBeyondDefensiveArea = 71,
 * BF_0x63E0A8E2 = 72,
 * BF_0xDF974436 = 73,
 * BF_0x556C080B = 74,
 * BF_0xA4D50035 = 75,
 * BF_SetDisableShoutTargetPositionOnCombatStart = 76,
 * BF_DisableRespondedToThreatBroadcast = 77,
 * BF_0xCBB01765 = 78,
 * BF_0x4F862ED4 = 79,
 * BF_0xEF9C7C40 = 80,
 * BF_0xE51B494F = 81,
 * BF_0x054D0199 = 82,
 * BF_0xD36BCE94 = 83,
 * BF_0xFB11F690 = 84,
 * BF_0xD208A9AD = 85,
 * BF_AllowDogFighting = 86,
 * BF_0x07A6E531 = 87,
 * BF_0x34F9317B = 88,
 * BF_0x4240F5A9 = 89,
 * BF_0xEE129DBD = 90,
 * BF_0x053AEAD9 = 91
 * };
 *
 * Hash: 0x9F7794730795E019 | Since: 323 | API-Set: unknown
 */
export function setCombatAttributes(ped, attributeId, enabled) {
    SetPedCombatAttributes(ped, attributeId, enabled);
}
/**
 * enum eCombatMovement // 0x4F456B61
 * {
 * CM_Stationary,
 * CM_Defensive,
 * CM_WillAdvance,
 * CM_WillRetreat
 * };
 *
 * Hash: 0x4D9CA1009AFBD057 | Since: 323 | API-Set: unknown
 */
export function setCombatMovement(ped, combatMovement) {
    SetPedCombatMovement(ped, combatMovement);
}
/**
 * enum eCombatRange // 0xB69160F5
 * {
 * CR_Near,
 * CR_Medium,
 * CR_Far,
 * CR_VeryFar,
 * CR_NumRanges
 * };
 *
 * Hash: 0x3C606747B23E497B | Since: 323 | API-Set: unknown
 */
export function setCombatRange(ped, combatRange) {
    SetPedCombatRange(ped, combatRange);
}
/**
 * paletteId: 0 to 3.
 *
 * componentId:
 * enum ePedVarComp
 * {
 * PV_COMP_INVALID = -1,
 * PV_COMP_HEAD,
 * PV_COMP_BERD,
 * PV_COMP_HAIR,
 * PV_COMP_UPPR,
 * PV_COMP_LOWR,
 * PV_COMP_HAND,
 * PV_COMP_FEET,
 * PV_COMP_TEEF,
 * PV_COMP_ACCS,
 * PV_COMP_TASK,
 * PV_COMP_DECL,
 * PV_COMP_JBIB,
 * PV_COMP_MAX
 * };
 *
 * Examples: https://gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Full list of ped components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedComponentVariations.json
 *
 * Hash: 0x262B14F48D29DE80 | Since: 323 | API-Set: unknown
 */
export function setComponentVariation(ped, componentId, drawableId, textureId, paletteId) {
    SetPedComponentVariation(ped, componentId, drawableId, textureId, paletteId);
}
/**
 * enum ePedConfigFlags
 * {
 * _CPED_CONFIG_FLAG_0xC63DE95E = 1,
 * CPED_CONFIG_FLAG_NoCriticalHits = 2,
 * CPED_CONFIG_FLAG_DrownsInWater = 3,
 * CPED_CONFIG_FLAG_DisableReticuleFixedLockon = 4,
 * _CPED_CONFIG_FLAG_0x37D196F4 = 5,
 * _CPED_CONFIG_FLAG_0xE2462399 = 6,
 * CPED_CONFIG_FLAG_UpperBodyDamageAnimsOnly = 7,
 * _CPED_CONFIG_FLAG_0xEDDEB838 = 8,
 * _CPED_CONFIG_FLAG_0xB398B6FD = 9,
 * _CPED_CONFIG_FLAG_0xF6664E68 = 10,
 * _CPED_CONFIG_FLAG_0xA05E7CA3 = 11,
 * _CPED_CONFIG_FLAG_0xCE394045 = 12,
 * CPED_CONFIG_FLAG_NeverLeavesGroup = 13,
 * _CPED_CONFIG_FLAG_0xCD8D1411 = 14,
 * _CPED_CONFIG_FLAG_0xB031F1A9 = 15,
 * _CPED_CONFIG_FLAG_0xFE65BEE3 = 16,
 * CPED_CONFIG_FLAG_BlockNonTemporaryEvents = 17,
 * _CPED_CONFIG_FLAG_0x380165BD = 18,
 * _CPED_CONFIG_FLAG_0x07C045C7 = 19,
 * _CPED_CONFIG_FLAG_0x583B5E2D = 20,
 * _CPED_CONFIG_FLAG_0x475EDA58 = 21,
 * _CPED_CONFIG_FLAG_0x8629D05B = 22,
 * _CPED_CONFIG_FLAG_0x1522968B = 23,
 * CPED_CONFIG_FLAG_IgnoreSeenMelee = 24,
 * _CPED_CONFIG_FLAG_0x4CC09C4B = 25,
 * _CPED_CONFIG_FLAG_0x034F3053 = 26,
 * _CPED_CONFIG_FLAG_0xD91BA7CC = 27,
 * _CPED_CONFIG_FLAG_0x5C8DC66E = 28,
 * CPED_CONFIG_FLAG_GetOutUndriveableVehicle = 29,
 * _CPED_CONFIG_FLAG_0x6580B9D2 = 30,
 * _CPED_CONFIG_FLAG_0x0EF7A297 = 31,
 * CPED_CONFIG_FLAG_WillFlyThruWindscreen = 32,
 * CPED_CONFIG_FLAG_DieWhenRagdoll = 33,
 * CPED_CONFIG_FLAG_HasHelmet = 34,
 * CPED_CONFIG_FLAG_UseHelmet = 35,
 * CPED_CONFIG_FLAG_DontTakeOffHelmet = 36,
 * _CPED_CONFIG_FLAG_0xB130D17B = 37,
 * _CPED_CONFIG_FLAG_0x5F071200 = 38,
 * CPED_CONFIG_FLAG_DisableEvasiveDives = 39,
 * _CPED_CONFIG_FLAG_0xC287AAFF = 40,
 * _CPED_CONFIG_FLAG_0x203328CC = 41,
 * CPED_CONFIG_FLAG_DontInfluenceWantedLevel = 42,
 * CPED_CONFIG_FLAG_DisablePlayerLockon = 43,
 * CPED_CONFIG_FLAG_DisableLockonToRandomPeds = 44,
 * CPED_CONFIG_FLAG_AllowLockonToFriendlyPlayers = 45,
 * _CPED_CONFIG_FLAG_0xDB115BFA = 46,
 * CPED_CONFIG_FLAG_PedBeingDeleted = 47,
 * CPED_CONFIG_FLAG_BlockWeaponSwitching = 48,
 * _CPED_CONFIG_FLAG_0xF8E99565 = 49,
 * _CPED_CONFIG_FLAG_0xDD17FEE6 = 50,
 * _CPED_CONFIG_FLAG_0x7ED9B2C9 = 51,
 * _CPED_CONFIG_FLAG_NoCollison = 52,
 * _CPED_CONFIG_FLAG_0x5A6C1F6E = 53,
 * _CPED_CONFIG_FLAG_0xD749FC41 = 54,
 * _CPED_CONFIG_FLAG_0x357F63F3 = 55,
 * _CPED_CONFIG_FLAG_0xC5E60961 = 56,
 * _CPED_CONFIG_FLAG_0x29275C3E = 57,
 * CPED_CONFIG_FLAG_IsFiring = 58,
 * CPED_CONFIG_FLAG_WasFiring = 59,
 * CPED_CONFIG_FLAG_IsStanding = 60,
 * CPED_CONFIG_FLAG_WasStanding = 61,
 * CPED_CONFIG_FLAG_InVehicle = 62,
 * CPED_CONFIG_FLAG_OnMount = 63,
 * CPED_CONFIG_FLAG_AttachedToVehicle = 64,
 * CPED_CONFIG_FLAG_IsSwimming = 65,
 * CPED_CONFIG_FLAG_WasSwimming = 66,
 * CPED_CONFIG_FLAG_IsSkiing = 67,
 * CPED_CONFIG_FLAG_IsSitting = 68,
 * CPED_CONFIG_FLAG_KilledByStealth = 69,
 * CPED_CONFIG_FLAG_KilledByTakedown = 70,
 * CPED_CONFIG_FLAG_Knockedout = 71,
 * _CPED_CONFIG_FLAG_0x3E3C4560 = 72,
 * _CPED_CONFIG_FLAG_0x2994C7B7 = 73,
 * _CPED_CONFIG_FLAG_0x6D59D275 = 74,
 * CPED_CONFIG_FLAG_UsingCoverPoint = 75,
 * CPED_CONFIG_FLAG_IsInTheAir = 76,
 * _CPED_CONFIG_FLAG_0x2D493FB7 = 77,
 * CPED_CONFIG_FLAG_IsAimingGun = 78,
 * _CPED_CONFIG_FLAG_0x14D69875 = 79,
 * _CPED_CONFIG_FLAG_0x40B05311 = 80,
 * _CPED_CONFIG_FLAG_0x8B230BC5 = 81,
 * _CPED_CONFIG_FLAG_0xC74E5842 = 82,
 * _CPED_CONFIG_FLAG_0x9EA86147 = 83,
 * _CPED_CONFIG_FLAG_0x674C746C = 84,
 * _CPED_CONFIG_FLAG_0x3E56A8C2 = 85,
 * _CPED_CONFIG_FLAG_0xC144A1EF = 86,
 * _CPED_CONFIG_FLAG_0x0548512D = 87,
 * _CPED_CONFIG_FLAG_0x31C93909 = 88,
 * _CPED_CONFIG_FLAG_0xA0269315 = 89,
 * _CPED_CONFIG_FLAG_0xD4D59D4D = 90,
 * _CPED_CONFIG_FLAG_0x411D4420 = 91,
 * _CPED_CONFIG_FLAG_0xDF4AEF0D = 92,
 * CPED_CONFIG_FLAG_ForcePedLoadCover = 93,
 * _CPED_CONFIG_FLAG_0x300E4CD3 = 94,
 * _CPED_CONFIG_FLAG_0xF1C5BF04 = 95,
 * _CPED_CONFIG_FLAG_0x89C2EF13 = 96,
 * CPED_CONFIG_FLAG_VaultFromCover = 97,
 * _CPED_CONFIG_FLAG_0x02A852C8 = 98,
 * _CPED_CONFIG_FLAG_0x3D9407F1 = 99,
 * _CPED_CONFIG_FLAG_IsDrunk = 100, // 0x319B4558
 * CPED_CONFIG_FLAG_ForcedAim = 101,
 * _CPED_CONFIG_FLAG_0xB942D71A = 102,
 * _CPED_CONFIG_FLAG_0xD26C55A8 = 103,
 * CPED_CONFIG_FLAG_OpenDoorArmIK = 104,
 * CPED_CONFIG_FLAG_ForceReload = 105,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromVehicleImpact = 106,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromBulletImpact = 107,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromExplosions = 108,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromFire = 109,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromElectrocution = 110,
 * _CPED_CONFIG_FLAG_0x83C0A4BF = 111,
 * _CPED_CONFIG_FLAG_0x0E0FAF8C = 112,
 * CPED_CONFIG_FLAG_KeepWeaponHolsteredUnlessFired = 113,
 * _CPED_CONFIG_FLAG_0x43B80B79 = 114,
 * _CPED_CONFIG_FLAG_0x0D2A9309 = 115,
 * CPED_CONFIG_FLAG_GetOutBurningVehicle = 116,
 * CPED_CONFIG_FLAG_BumpedByPlayer = 117,
 * CPED_CONFIG_FLAG_RunFromFiresAndExplosions = 118,
 * CPED_CONFIG_FLAG_TreatAsPlayerDuringTargeting = 119,
 * CPED_CONFIG_FLAG_IsHandCuffed = 120,
 * CPED_CONFIG_FLAG_IsAnkleCuffed = 121,
 * CPED_CONFIG_FLAG_DisableMelee = 122,
 * CPED_CONFIG_FLAG_DisableUnarmedDrivebys = 123,
 * CPED_CONFIG_FLAG_JustGetsPulledOutWhenElectrocuted = 124,
 * _CPED_CONFIG_FLAG_0x5FED6BFD = 125,
 * CPED_CONFIG_FLAG_WillNotHotwireLawEnforcementVehicle = 126,
 * CPED_CONFIG_FLAG_WillCommandeerRatherThanJack = 127,
 * CPED_CONFIG_FLAG_CanBeAgitated = 128,
 * CPED_CONFIG_FLAG_ForcePedToFaceLeftInCover = 129,
 * CPED_CONFIG_FLAG_ForcePedToFaceRightInCover = 130,
 * CPED_CONFIG_FLAG_BlockPedFromTurningInCover = 131,
 * CPED_CONFIG_FLAG_KeepRelationshipGroupAfterCleanUp = 132,
 * CPED_CONFIG_FLAG_ForcePedToBeDragged = 133,
 * CPED_CONFIG_FLAG_PreventPedFromReactingToBeingJacked = 134,
 * CPED_CONFIG_FLAG_IsScuba = 135,
 * CPED_CONFIG_FLAG_WillArrestRatherThanJack = 136,
 * CPED_CONFIG_FLAG_RemoveDeadExtraFarAway = 137,
 * CPED_CONFIG_FLAG_RidingTrain = 138,
 * CPED_CONFIG_FLAG_ArrestResult = 139,
 * CPED_CONFIG_FLAG_CanAttackFriendly = 140,
 * CPED_CONFIG_FLAG_WillJackAnyPlayer = 141,
 * _CPED_CONFIG_FLAG_0x6901E731 = 142,
 * _CPED_CONFIG_FLAG_0x9EC9BF6C = 143,
 * CPED_CONFIG_FLAG_WillJackWantedPlayersRatherThanStealCar = 144,
 * CPED_CONFIG_FLAG_ShootingAnimFlag = 145,
 * CPED_CONFIG_FLAG_DisableLadderClimbing = 146,
 * CPED_CONFIG_FLAG_StairsDetected = 147,
 * CPED_CONFIG_FLAG_SlopeDetected = 148,
 * _CPED_CONFIG_FLAG_0x1A15670B = 149,
 * CPED_CONFIG_FLAG_CowerInsteadOfFlee = 150,
 * CPED_CONFIG_FLAG_CanActivateRagdollWhenVehicleUpsideDown = 151,
 * CPED_CONFIG_FLAG_AlwaysRespondToCriesForHelp = 152,
 * CPED_CONFIG_FLAG_DisableBloodPoolCreation = 153,
 * CPED_CONFIG_FLAG_ShouldFixIfNoCollision = 154,
 * CPED_CONFIG_FLAG_CanPerformArrest = 155,
 * CPED_CONFIG_FLAG_CanPerformUncuff = 156,
 * CPED_CONFIG_FLAG_CanBeArrested = 157,
 * _CPED_CONFIG_FLAG_0xF7960FF5 = 158,
 * CPED_CONFIG_FLAG_PlayerPreferFrontSeatMP = 159,
 * _CPED_CONFIG_FLAG_0x0C6C3099 = 160,
 * _CPED_CONFIG_FLAG_0x645F927A = 161,
 * _CPED_CONFIG_FLAG_0xA86549B9 = 162,
 * _CPED_CONFIG_FLAG_0x8AAF337A = 163,
 * _CPED_CONFIG_FLAG_0x13BAA6E7 = 164,
 * _CPED_CONFIG_FLAG_0x5FB9D1F5 = 165,
 * CPED_CONFIG_FLAG_IsInjured = 166,
 * CPED_CONFIG_FLAG_DontEnterVehiclesInPlayersGroup = 167,
 * _CPED_CONFIG_FLAG_0xD8072639 = 168,
 * CPED_CONFIG_FLAG_PreventAllMeleeTaunts = 169,
 * CPED_CONFIG_FLAG_ForceDirectEntry = 170,
 * CPED_CONFIG_FLAG_AlwaysSeeApproachingVehicles = 171,
 * CPED_CONFIG_FLAG_CanDiveAwayFromApproachingVehicles = 172,
 * CPED_CONFIG_FLAG_AllowPlayerToInterruptVehicleEntryExit = 173,
 * CPED_CONFIG_FLAG_OnlyAttackLawIfPlayerIsWanted = 174,
 * _CPED_CONFIG_FLAG_0x90008BFA = 175,
 * _CPED_CONFIG_FLAG_0x07C7A910 = 176,
 * CPED_CONFIG_FLAG_PedsJackingMeDontGetIn = 177,
 * _CPED_CONFIG_FLAG_0xCE4E8BE2 = 178,
 * CPED_CONFIG_FLAG_PedIgnoresAnimInterruptEvents = 179,
 * CPED_CONFIG_FLAG_IsInCustody = 180,
 * CPED_CONFIG_FLAG_ForceStandardBumpReactionThresholds = 181,
 * CPED_CONFIG_FLAG_LawWillOnlyAttackIfPlayerIsWanted = 182,
 * CPED_CONFIG_FLAG_IsAgitated = 183,
 * CPED_CONFIG_FLAG_PreventAutoShuffleToDriversSeat = 184,
 * CPED_CONFIG_FLAG_UseKinematicModeWhenStationary = 185,
 * CPED_CONFIG_FLAG_EnableWeaponBlocking = 186,
 * CPED_CONFIG_FLAG_HasHurtStarted = 187,
 * CPED_CONFIG_FLAG_DisableHurt = 188,
 * CPED_CONFIG_FLAG_PlayerIsWeird = 189,
 * _CPED_CONFIG_FLAG_0x32FC208B = 190,
 * _CPED_CONFIG_FLAG_0x0C296E5A = 191,
 * _CPED_CONFIG_FLAG_0xE63B73EC = 192,
 * CPED_CONFIG_FLAG_DoNothingWhenOnFootByDefault = 193,
 * CPED_CONFIG_FLAG_UsingScenario = 194,
 * CPED_CONFIG_FLAG_VisibleOnScreen = 195,
 * _CPED_CONFIG_FLAG_0xD88C58A1 = 196,
 * _CPED_CONFIG_FLAG_0x5A3DCF43 = 197,
 * _CPED_CONFIG_FLAG_0xEA02B420 = 198,
 * CPED_CONFIG_FLAG_DontActivateRagdollOnVehicleCollisionWhenDead = 199,
 * CPED_CONFIG_FLAG_HasBeenInArmedCombat = 200,
 * _CPED_CONFIG_FLAG_0x5E6466F6 = 201,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_All = 202,
 * CPED_CONFIG_FLAG_Avoidance_Ignored_by_All = 203,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_Group1 = 204,
 * CPED_CONFIG_FLAG_Avoidance_Member_of_Group1 = 205,
 * CPED_CONFIG_FLAG_ForcedToUseSpecificGroupSeatIndex = 206,
 * _CPED_CONFIG_FLAG_0x415B26B9 = 207,
 * CPED_CONFIG_FLAG_DisableExplosionReactions = 208,
 * CPED_CONFIG_FLAG_DodgedPlayer = 209,
 * CPED_CONFIG_FLAG_WaitingForPlayerControlInterrupt = 210,
 * CPED_CONFIG_FLAG_ForcedToStayInCover = 211,
 * CPED_CONFIG_FLAG_GeneratesSoundEvents = 212,
 * CPED_CONFIG_FLAG_ListensToSoundEvents = 213,
 * CPED_CONFIG_FLAG_AllowToBeTargetedInAVehicle = 214,
 * CPED_CONFIG_FLAG_WaitForDirectEntryPointToBeFreeWhenExiting = 215,
 * CPED_CONFIG_FLAG_OnlyRequireOnePressToExitVehicle = 216,
 * CPED_CONFIG_FLAG_ForceExitToSkyDive = 217,
 * _CPED_CONFIG_FLAG_0x3C7DF9DF = 218,
 * _CPED_CONFIG_FLAG_0x848FFEF2 = 219,
 * CPED_CONFIG_FLAG_DontEnterLeadersVehicle = 220,
 * CPED_CONFIG_FLAG_DisableExitToSkyDive = 221,
 * _CPED_CONFIG_FLAG_0x84F722FA = 222,
 * _CPED_CONFIG_FLAG_Shrink = 223, // 0xD1B87B1F
 * _CPED_CONFIG_FLAG_0x728AA918 = 224,
 * CPED_CONFIG_FLAG_DisablePotentialToBeWalkedIntoResponse = 225,
 * CPED_CONFIG_FLAG_DisablePedAvoidance = 226,
 * CPED_CONFIG_FLAG_ForceRagdollUponDeath = 227,
 * _CPED_CONFIG_FLAG_0x1EA7225F = 228,
 * CPED_CONFIG_FLAG_DisablePanicInVehicle = 229,
 * CPED_CONFIG_FLAG_AllowedToDetachTrailer = 230,
 * _CPED_CONFIG_FLAG_0xFC3E572D = 231,
 * _CPED_CONFIG_FLAG_0x08E9F9CF = 232,
 * _CPED_CONFIG_FLAG_0x2D3BA52D = 233,
 * _CPED_CONFIG_FLAG_0xFD2F53EA = 234,
 * _CPED_CONFIG_FLAG_0x31A1B03B = 235,
 * CPED_CONFIG_FLAG_IsHoldingProp = 236,
 * CPED_CONFIG_FLAG_BlocksPathingWhenDead = 237,
 * _CPED_CONFIG_FLAG_0xCE57C9A3 = 238,
 * _CPED_CONFIG_FLAG_0x26149198 = 239,
 * CPED_CONFIG_FLAG_ForceSkinCharacterCloth = 240,
 * CPED_CONFIG_FLAG_LeaveEngineOnWhenExitingVehicles = 241,
 * CPED_CONFIG_FLAG_PhoneDisableTextingAnimations = 242,
 * CPED_CONFIG_FLAG_PhoneDisableTalkingAnimations = 243,
 * CPED_CONFIG_FLAG_PhoneDisableCameraAnimations = 244,
 * CPED_CONFIG_FLAG_DisableBlindFiringInShotReactions = 245,
 * CPED_CONFIG_FLAG_AllowNearbyCoverUsage = 246,
 * _CPED_CONFIG_FLAG_0x0C754ACA = 247,
 * CPED_CONFIG_FLAG_CanPlayInCarIdles = 248,
 * CPED_CONFIG_FLAG_CanAttackNonWantedPlayerAsLaw = 249,
 * CPED_CONFIG_FLAG_WillTakeDamageWhenVehicleCrashes = 250,
 * CPED_CONFIG_FLAG_AICanDrivePlayerAsRearPassenger = 251,
 * CPED_CONFIG_FLAG_PlayerCanJackFriendlyPlayers = 252,
 * CPED_CONFIG_FLAG_OnStairs = 253,
 * _CPED_CONFIG_FLAG_0xE1A2F73F = 254,
 * CPED_CONFIG_FLAG_AIDriverAllowFriendlyPassengerSeatEntry = 255,
 * _CPED_CONFIG_FLAG_0xF1EB20A9 = 256,
 * CPED_CONFIG_FLAG_AllowMissionPedToUseInjuredMovement = 257,
 * _CPED_CONFIG_FLAG_0x329DCF1A = 258,
 * _CPED_CONFIG_FLAG_0x8D90DD1B = 259,
 * _CPED_CONFIG_FLAG_0xB8A292B7 = 260,
 * CPED_CONFIG_FLAG_PreventUsingLowerPrioritySeats = 261,
 * _CPED_CONFIG_FLAG_0x2AF558F0 = 262,
 * _CPED_CONFIG_FLAG_0x82251455 = 263,
 * _CPED_CONFIG_FLAG_0x30CF498B = 264,
 * _CPED_CONFIG_FLAG_0xE1CD50AF = 265,
 * _CPED_CONFIG_FLAG_0x72E4AE48 = 266,
 * _CPED_CONFIG_FLAG_0xC2657EA1 = 267,
 * CPED_CONFIG_FLAG_TeleportToLeaderVehicle = 268,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_WeirdPedBuffer = 269,
 * CPED_CONFIG_FLAG_OnStairSlope = 270,
 * _CPED_CONFIG_FLAG_0xA0897933 = 271,
 * CPED_CONFIG_FLAG_DontBlipCop = 272,
 * CPED_CONFIG_FLAG_ClimbedShiftedFence = 273,
 * _CPED_CONFIG_FLAG_0xF7823618 = 274,
 * CPED_CONFIG_FLAG_KillWhenTrapped = 275,
 * CPED_CONFIG_FLAG_EdgeDetected = 276,
 * _CPED_CONFIG_FLAG_0x92B67896 = 277,
 * _CPED_CONFIG_FLAG_0xCAD677C9 = 278,
 * CPED_CONFIG_FLAG_AvoidTearGas = 279,
 * _CPED_CONFIG_FLAG_0x5276AC7B = 280,
 * CPED_CONFIG_FLAG_DisableGoToWritheWhenInjured = 281,
 * CPED_CONFIG_FLAG_OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
 * _CPED_CONFIG_FLAG_0x9139724D = 283,
 * _CPED_CONFIG_FLAG_0xA1457461 = 284,
 * CPED_CONFIG_FLAG_DisableWeirdPedEvents = 285,
 * CPED_CONFIG_FLAG_ShouldChargeNow = 286,
 * CPED_CONFIG_FLAG_RagdollingOnBoat = 287,
 * CPED_CONFIG_FLAG_HasBrandishedWeapon = 288,
 * _CPED_CONFIG_FLAG_0x1B9EE8A1 = 289,
 * _CPED_CONFIG_FLAG_0xF3F5758C = 290,
 * _CPED_CONFIG_FLAG_0x2A9307F1 = 291,
 * _CPED_CONFIG_FLAG_FreezePosition = 292, // 0x7403D216
 * _CPED_CONFIG_FLAG_0xA06A3C6C = 293,
 * CPED_CONFIG_FLAG_DisableShockingEvents = 294,
 * _CPED_CONFIG_FLAG_0xF8DA25A5 = 295,
 * CPED_CONFIG_FLAG_NeverReactToPedOnRoof = 296,
 * _CPED_CONFIG_FLAG_0xB31F1187 = 297,
 * _CPED_CONFIG_FLAG_0x84315402 = 298,
 * CPED_CONFIG_FLAG_DisableShockingDrivingOnPavementEvents = 299,
 * _CPED_CONFIG_FLAG_0xC7829B67 = 300,
 * CPED_CONFIG_FLAG_DisablePedConstraints = 301,
 * CPED_CONFIG_FLAG_ForceInitialPeekInCover = 302,
 * _CPED_CONFIG_FLAG_0x2ADA871B = 303,
 * _CPED_CONFIG_FLAG_0x47BC8A58 = 304,
 * CPED_CONFIG_FLAG_DisableJumpingFromVehiclesAfterLeader = 305,
 * _CPED_CONFIG_FLAG_0x4A133C50 = 306,
 * _CPED_CONFIG_FLAG_0xC58099C3 = 307,
 * _CPED_CONFIG_FLAG_0xF3D76D41 = 308,
 * _CPED_CONFIG_FLAG_0xB0EEE9F2 = 309,
 * CPED_CONFIG_FLAG_IsInCluster = 310,
 * CPED_CONFIG_FLAG_ShoutToGroupOnPlayerMelee = 311,
 * CPED_CONFIG_FLAG_IgnoredByAutoOpenDoors = 312,
 * _CPED_CONFIG_FLAG_0xD4136C22 = 313,
 * CPED_CONFIG_FLAG_ForceIgnoreMeleeActiveCombatant = 314,
 * CPED_CONFIG_FLAG_CheckLoSForSoundEvents = 315,
 * _CPED_CONFIG_FLAG_0xD5C98277 = 316,
 * CPED_CONFIG_FLAG_CanSayFollowedByPlayerAudio = 317,
 * CPED_CONFIG_FLAG_ActivateRagdollFromMinorPlayerContact = 318,
 * _CPED_CONFIG_FLAG_0xD8BE1D54 = 319,
 * CPED_CONFIG_FLAG_ForcePoseCharacterCloth = 320,
 * CPED_CONFIG_FLAG_HasClothCollisionBounds = 321,
 * CPED_CONFIG_FLAG_HasHighHeels = 322,
 * _CPED_CONFIG_FLAG_0x86B01E54 = 323,
 * CPED_CONFIG_FLAG_DontBehaveLikeLaw = 324,
 * _CPED_CONFIG_FLAG_0xC03B736C = 325, // SpawnedAtScenario?
 * CPED_CONFIG_FLAG_DisablePoliceInvestigatingBody = 326,
 * CPED_CONFIG_FLAG_DisableWritheShootFromGround = 327,
 * CPED_CONFIG_FLAG_LowerPriorityOfWarpSeats = 328,
 * CPED_CONFIG_FLAG_DisableTalkTo = 329,
 * CPED_CONFIG_FLAG_DontBlip = 330,
 * CPED_CONFIG_FLAG_IsSwitchingWeapon = 331,
 * CPED_CONFIG_FLAG_IgnoreLegIkRestrictions = 332,
 * _CPED_CONFIG_FLAG_0x150468FD = 333,
 * _CPED_CONFIG_FLAG_0x914EBD6B = 334,
 * _CPED_CONFIG_FLAG_0x79AF3B6D = 335,
 * _CPED_CONFIG_FLAG_0x75C7A632 = 336,
 * _CPED_CONFIG_FLAG_0x52D530E2 = 337,
 * _CPED_CONFIG_FLAG_0xDB2A90E0 = 338,
 * CPED_CONFIG_FLAG_AllowTaskDoNothingTimeslicing = 339,
 * _CPED_CONFIG_FLAG_0x12ADB567 = 340,
 * _CPED_CONFIG_FLAG_0x105C8518 = 341,
 * CPED_CONFIG_FLAG_NotAllowedToJackAnyPlayers = 342,
 * _CPED_CONFIG_FLAG_0xED152C3E = 343,
 * _CPED_CONFIG_FLAG_0xA0EFE6A8 = 344,
 * CPED_CONFIG_FLAG_AlwaysLeaveTrainUponArrival = 345,
 * _CPED_CONFIG_FLAG_0xCDDFE830 = 346,
 * CPED_CONFIG_FLAG_OnlyWritheFromWeaponDamage = 347,
 * CPED_CONFIG_FLAG_UseSloMoBloodVfx = 348,
 * CPED_CONFIG_FLAG_EquipJetpack = 349,
 * CPED_CONFIG_FLAG_PreventDraggedOutOfCarThreatResponse = 350,
 * _CPED_CONFIG_FLAG_0xE13D1F7C = 351,
 * _CPED_CONFIG_FLAG_0x40E25FB9 = 352,
 * _CPED_CONFIG_FLAG_0x930629D9 = 353,
 * _CPED_CONFIG_FLAG_0xECCF0C7F = 354,
 * _CPED_CONFIG_FLAG_0xB6E9613B = 355,
 * CPED_CONFIG_FLAG_ForceDeepSurfaceCheck = 356,
 * CPED_CONFIG_FLAG_DisableDeepSurfaceAnims = 357,
 * CPED_CONFIG_FLAG_DontBlipNotSynced = 358,
 * CPED_CONFIG_FLAG_IsDuckingInVehicle = 359,
 * CPED_CONFIG_FLAG_PreventAutoShuffleToTurretSeat = 360,
 * CPED_CONFIG_FLAG_DisableEventInteriorStatusCheck = 361,
 * CPED_CONFIG_FLAG_HasReserveParachute = 362,
 * CPED_CONFIG_FLAG_UseReserveParachute = 363,
 * CPED_CONFIG_FLAG_TreatDislikeAsHateWhenInCombat = 364,
 * CPED_CONFIG_FLAG_OnlyUpdateTargetWantedIfSeen = 365,
 * CPED_CONFIG_FLAG_AllowAutoShuffleToDriversSeat = 366,
 * _CPED_CONFIG_FLAG_0xD7E07D37 = 367,
 * _CPED_CONFIG_FLAG_0x03C4FD24 = 368,
 * _CPED_CONFIG_FLAG_0x7675789A = 369,
 * _CPED_CONFIG_FLAG_0xB7288A88 = 370,
 * _CPED_CONFIG_FLAG_0xC06B6291 = 371,
 * CPED_CONFIG_FLAG_PreventReactingToSilencedCloneBullets = 372,
 * CPED_CONFIG_FLAG_DisableInjuredCryForHelpEvents = 373,
 * CPED_CONFIG_FLAG_NeverLeaveTrain = 374,
 * CPED_CONFIG_FLAG_DontDropJetpackOnDeath = 375,
 * _CPED_CONFIG_FLAG_0x147F1FFB = 376,
 * _CPED_CONFIG_FLAG_0x4376DD79 = 377,
 * _CPED_CONFIG_FLAG_0xCD3DB518 = 378,
 * _CPED_CONFIG_FLAG_0xFE4BA4B6 = 379,
 * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInBikes = 380,
 * _CPED_CONFIG_FLAG_0xBCD816CD = 381,
 * _CPED_CONFIG_FLAG_0xCF02DD69 = 382,
 * _CPED_CONFIG_FLAG_0xF73AFA2E = 383,
 * _CPED_CONFIG_FLAG_0x80B9A9D0 = 384,
 * _CPED_CONFIG_FLAG_0xF601F7EE = 385,
 * _CPED_CONFIG_FLAG_0xA91350FC = 386,
 * _CPED_CONFIG_FLAG_0x3AB23B96 = 387,
 * CPED_CONFIG_FLAG_IsClimbingLadder = 388,
 * CPED_CONFIG_FLAG_HasBareFeet = 389,
 * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME_2 = 390,
 * CPED_CONFIG_FLAG_GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
 * CPED_CONFIG_FLAG_BlockDroppingHealthSnacksOnDeath = 392,
 * _CPED_CONFIG_FLAG_0xC11D3E8F = 393,
 * CPED_CONFIG_FLAG_ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
 * CPED_CONFIG_FLAG_DontRespondToRandomPedsDamage = 395,
 * CPED_CONFIG_FLAG_AllowContinuousThreatResponseWantedLevelUpdates = 396,
 * CPED_CONFIG_FLAG_KeepTargetLossResponseOnCleanup = 397,
 * CPED_CONFIG_FLAG_PlayersDontDragMeOutOfCar = 398,
 * CPED_CONFIG_FLAG_BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
 * CPED_CONFIG_FLAG_IgnorePedTypeForIsFriendlyWith = 400,
 * CPED_CONFIG_FLAG_TreatNonFriendlyAsHateWhenInCombat = 401,
 * CPED_CONFIG_FLAG_DontLeaveVehicleIfLeaderNotInVehicle = 402,
 * _CPED_CONFIG_FLAG_0x5E5B9591 = 403,
 * CPED_CONFIG_FLAG_AllowMeleeReactionIfMeleeProofIsOn = 404,
 * _CPED_CONFIG_FLAG_0x77840177 = 405,
 * _CPED_CONFIG_FLAG_0x1C7ACAC4 = 406,
 * CPED_CONFIG_FLAG_UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
 * CPED_CONFIG_FLAG_DisableHomingMissileLockForVehiclePedInside = 408,
 * CPED_CONFIG_FLAG_DisableTakeOffScubaGear = 409,
 * CPED_CONFIG_FLAG_IgnoreMeleeFistWeaponDamageMult = 410,
 * CPED_CONFIG_FLAG_LawPedsCanFleeFromNonWantedPlayer = 411,
 * CPED_CONFIG_FLAG_ForceBlipSecurityPedsIfPlayerIsWanted = 412,
 * CPED_CONFIG_FLAG_IsHolsteringWeapon = 413,
 * CPED_CONFIG_FLAG_UseGoToPointForScenarioNavigation = 414,
 * CPED_CONFIG_FLAG_DontClearLocalPassengersWantedLevel = 415,
 * CPED_CONFIG_FLAG_BlockAutoSwapOnWeaponPickups = 416,
 * CPED_CONFIG_FLAG_ThisPedIsATargetPriorityForAI = 417,
 * CPED_CONFIG_FLAG_IsSwitchingHelmetVisor = 418,
 * CPED_CONFIG_FLAG_ForceHelmetVisorSwitch = 419,
 * _CPED_CONFIG_FLAG_0xCFF5F6DE = 420,
 * CPED_CONFIG_FLAG_UseOverrideFootstepPtFx = 421,
 * CPED_CONFIG_FLAG_DisableVehicleCombat = 422,
 * _CPED_CONFIG_FLAG_0xFE401D26 = 423,
 * CPED_CONFIG_FLAG_FallsLikeAircraft = 424,
 * _CPED_CONFIG_FLAG_0x2B42AE82 = 425,
 * CPED_CONFIG_FLAG_UseLockpickVehicleEntryAnimations = 426,
 * CPED_CONFIG_FLAG_IgnoreInteriorCheckForSprinting = 427,
 * CPED_CONFIG_FLAG_SwatHeliSpawnWithinLastSpottedLocation = 428,
 * CPED_CONFIG_FLAG_DisableStartEngine = 429,
 * CPED_CONFIG_FLAG_IgnoreBeingOnFire = 430,
 * CPED_CONFIG_FLAG_DisableTurretOrRearSeatPreference = 431,
 * CPED_CONFIG_FLAG_DisableWantedHelicopterSpawning = 432,
 * CPED_CONFIG_FLAG_UseTargetPerceptionForCreatingAimedAtEvents = 433,
 * CPED_CONFIG_FLAG_DisableHomingMissileLockon = 434,
 * CPED_CONFIG_FLAG_ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
 * CPED_CONFIG_FLAG_StayInDefensiveAreaWhenInVehicle = 436,
 * CPED_CONFIG_FLAG_DontShoutTargetPosition = 437,
 * CPED_CONFIG_FLAG_DisableHelmetArmor = 438,
 * _CPED_CONFIG_FLAG_0xCB7F3A1E = 439,
 * _CPED_CONFIG_FLAG_0x50178878 = 440,
 * CPED_CONFIG_FLAG_PreventVehExitDueToInvalidWeapon = 441,
 * CPED_CONFIG_FLAG_IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
 * CPED_CONFIG_FLAG_DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
 * CPED_CONFIG_FLAG_CheckLockedBeforeWarp = 444,
 * CPED_CONFIG_FLAG_DontShuffleInVehicleToMakeRoom = 445,
 * CPED_CONFIG_FLAG_GiveWeaponOnGetup = 446,
 * CPED_CONFIG_FLAG_DontHitVehicleWithProjectiles = 447,
 * CPED_CONFIG_FLAG_DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
 * CPED_CONFIG_FLAG_FiresDummyRockets = 449,
 * CPED_CONFIG_FLAG_PedIsArresting = 450,
 * CPED_CONFIG_FLAG_IsDecoyPed = 451,
 * CPED_CONFIG_FLAG_HasEstablishedDecoy = 452,
 * CPED_CONFIG_FLAG_BlockDispatchedHelicoptersFromLanding = 453,
 * CPED_CONFIG_FLAG_DontCryForHelpOnStun = 454,
 * _CPED_CONFIG_FLAG_0xB68D3EAB = 455,
 * CPED_CONFIG_FLAG_CanBeIncapacitated = 456,
 * _CPED_CONFIG_FLAG_0x4BD5EBAD = 457,
 * CPED_CONFIG_FLAG_DontChangeTargetFromMelee = 458,
 * };
 *
 * Hash: 0x1913FE4CBF41C463 | Since: 323 | API-Set: unknown
 */
export function setConfigFlag(ped, flagId, value) {
    SetPedConfigFlag(ped, flagId, value);
}
/**
 * teleports ped to coords along with the vehicle ped is in
 *
 * Hash: 0x9AFEFF481A85AB2E | Since: 323 | API-Set: unknown
 */
export function setCoordsKeepVehicle(ped, pos) {
    SetPedCoordsKeepVehicle(ped, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x87052FE446E07247 | Since: 323 | API-Set: unknown
 */
export function setCoordsNoGang(ped, pos) {
    SetPedCoordsNoGang(ped, pos.x, pos.y, pos.z);
}
/**
 * p1: Only "CODE_HUMAN_STAND_COWER" found in the b617d scripts.
 *
 * Hash: 0xA549131166868ED3 | Since: 323 | API-Set: unknown
 */
export function setCowerHash(ped) {
    SetPedCowerHash(ped, undefined);
}
/**
 * Sets Ped Default Clothes
 *
 * Hash: 0x45EEE61580806D63 | Since: 323 | API-Set: unknown
 */
export function setDefaultComponentVariation(ped) {
    SetPedDefaultComponentVariation(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4EF47FE21698A8B6 | Since: 323 | API-Set: unknown
 */
export function setDefensiveAreaAttachedToPed(ped, attachPed) {
    SetPedDefensiveAreaAttachedToPed(ped, attachPed, 0, 0, 0, 0, 0, 0, 0, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x413C6C763A4AFFAD | Since: 323 | API-Set: unknown
 */
export function setDefensiveAreaDirection(ped) {
    SetPedDefensiveAreaDirection(ped, 0, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF9B8F91AAD3B953E | Since: 323 | API-Set: unknown
 */
export function setDefensiveSphereAttachedToPed(ped, target, xOffset, yOffset, zOffset, radius) {
    SetPedDefensiveSphereAttachedToPed(ped, target, xOffset, yOffset, zOffset, radius, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE4723DB6E736CCFF | Since: 323 | API-Set: unknown
 */
export function setDefensiveSphereAttachedToVehicle(ped, target, xOffset, yOffset, zOffset, radius) {
    SetPedDefensiveSphereAttachedToVehicle(ped, target, xOffset, yOffset, zOffset, radius, false);
}
/**
 * No comment provided
 *
 * Hash: 0x95E3D6257B166CF2 | Since: 323 | API-Set: unknown
 */
export function setDensityMultiplierThisFrame(multiplier) {
    SetPedDensityMultiplierThisFrame(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xAA5A7ECE2AA8FE70 | Since: 323 | API-Set: unknown
 */
export function setDesiredHeading(ped, heading) {
    SetPedDesiredHeading(ped, heading);
}
/**
 * No comment provided
 *
 * Hash: 0xEEB64139BA29A7CF | Since: 323 | API-Set: unknown
 */
export function setDiesInstantlyInWater(ped, toggle) {
    SetPedDiesInstantlyInWater(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xD718A22995E2B4BC | Since: 323 | API-Set: unknown
 */
export function setDiesInSinkingVehicle(ped, toggle) {
    SetPedDiesInSinkingVehicle(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x2A30922C90C9B42C | Since: 323 | API-Set: unknown
 */
export function setDiesInVehicle(ped, toggle) {
    SetPedDiesInVehicle(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x56CEF0AC79073BDE | Since: 323 | API-Set: unknown
 */
export function setDiesInWater(ped, toggle) {
    SetPedDiesInWater(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5BA7919BED300023 | Since: 323 | API-Set: unknown
 */
export function setDiesWhenInjured(ped, toggle) {
    SetPedDiesWhenInjured(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xED34AB6C5CB36520 | Since: 323 | API-Set: unknown
 */
export function setDriveByClipsetOverride(ped, clipset) {
    SetPedDriveByClipsetOverride(ped, clipset);
}
/**
 * This is the SET_CHAR_DUCKING from GTA IV, that makes Peds duck. This function does nothing in GTA V. It cannot set the ped as ducking in vehicles, and IS_PED_DUCKING will always return false.
 *
 * Hash: 0x030983CA930B692D | Since: 323 | API-Set: unknown
 */
export function setDucking(ped, toggle) {
    SetPedDucking(ped, toggle);
}
/**
 * intensity: 0.0f - 1.0f
 *
 * This native sets the emissive intensity for the given ped. It is used for different 'glow' levels on illuminated clothing.
 *
 * Hash: 0x4E90D746056E273D | Since: 944 | API-Set: unknown
 */
export function setEmissiveScale(ped, intensity) {
    SetPedEmissiveIntensity(ped, intensity);
}
/**
 * No comment provided
 *
 * Hash: 0xE906EC930F5FE7C8 | Since: 791 | API-Set: unknown
 */
export function setEnableCrewEmblem(ped, toggle) {
    Citizen.invokeNative('0xE906EC930F5FE7C8', ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x97A790315D3831FD | Since: 323 | API-Set: unknown
 */
export function setEnableWeaponBlocking(ped, toggle) {
    SetPedEnableWeaponBlocking(ped, toggle);
}
/**
 * Something related to the environmental effects natives.
 * In the "agency_heist3b" script, p1 - p3 are always under 100 - usually they are {87, 81, 68}. If SET_PED_ENVEFF_SCALE is set to 0.65 (instead of the usual 1.0), they use {74, 69, 60}
 *
 * Hash: 0xD69411AA0CEBF9E9 | Since: 323 | API-Set: unknown
 */
export function setEnveffColorModulator(ped) {
    SetPedEnveffColorModulator(ped, 0, 0, 0);
}
/**
 * In agency_heist3b.c4, its like this 90% of the time:
 *
 * `PED::SET_PED_ENVEFF_CPV_ADD(ped, 0.099);`
 * `PED::SET_PED_ENVEFF_SCALE(ped, 1.0);`
 * `PED::SET_PED_ENVEFF_CPV_ADD(ped, 87, 81, 68);`
 * `PED::SET_ENABLE_PED_ENVEFF_SCALE(ped, 1);`
 *
 * and its like this 10% of the time:
 *
 * `PED::SET_PED_ENVEFF_CPV_ADD(ped, 0.2);`
 * `PED::SET_PED_ENVEFF_SCALE(ped, 0.65);`
 * `PED::SET_PED_ENVEFF_COLOR_MODULATOR(ped, 74, 69, 60);`
 * `PED::SET_ENABLE_PED_ENVEFF_SCALE(ped, 1);`
 *
 * Hash: 0x110F526AB784111F | Since: 323 | API-Set: unknown
 */
export function setEnveffCpvAdd(ped) {
    Citizen.invokeNative('0x110F526AB784111F', ped, 0);
}
/**
 * Values look to be between 0.0 and 1.0
 * From decompiled scripts: 0.0, 0.6, 0.65, 0.8, 1.0
 *
 * You are correct, just looked in IDA it breaks from the function if it's less than 0.0f or greater than 1.0f.
 *
 * Hash: 0xBF29516833893561 | Since: 323 | API-Set: unknown
 */
export function setEnveffScale(ped, value) {
    SetPedEnveffScale(ped, value);
}
/**
 * FIRING_PATTERN_BURST_FIRE = 0xD6FF6D61 ( 1073727030 )
 * FIRING_PATTERN_BURST_FIRE_IN_COVER = 0x026321F1 ( 40051185 )
 * FIRING_PATTERN_BURST_FIRE_DRIVEBY = 0xD31265F2 ( -753768974 )
 * FIRING_PATTERN_FROM_GROUND = 0x2264E5D6 ( 577037782 )
 * FIRING_PATTERN_DELAY_FIRE_BY_ONE_SEC = 0x7A845691 ( 2055493265 )
 * FIRING_PATTERN_FULL_AUTO = 0xC6EE6B4C ( -957453492 )
 * FIRING_PATTERN_SINGLE_SHOT = 0x5D60E4E0 ( 1566631136 )
 * FIRING_PATTERN_BURST_FIRE_PISTOL = 0xA018DB8A ( -1608983670 )
 * FIRING_PATTERN_BURST_FIRE_SMG = 0xD10DADEE ( 1863348768 )
 * FIRING_PATTERN_BURST_FIRE_RIFLE = 0x9C74B406 ( -1670073338 )
 * FIRING_PATTERN_BURST_FIRE_MG = 0xB573C5B4 ( -1250703948 )
 * FIRING_PATTERN_BURST_FIRE_PUMPSHOTGUN = 0x00BAC39B ( 12239771 )
 * FIRING_PATTERN_BURST_FIRE_HELI = 0x914E786F ( -1857128337 )
 * FIRING_PATTERN_BURST_FIRE_MICRO = 0x42EF03FD ( 1122960381 )
 * FIRING_PATTERN_SHORT_BURSTS = 0x1A92D7DF ( 445831135 )
 * FIRING_PATTERN_SLOW_FIRE_TANK = 0xE2CA3A71 ( -490063247 )
 *
 * Firing pattern info: https://pastebin.com/Px036isB
 *
 * Hash: 0x9AC577F5A12AD8A9 | Since: 323 | API-Set: unknown
 */
export function setFiringPattern(ped, patternHash) {
    if (typeof patternHash === 'string')
        patternHash = GetHashKey(patternHash);
    SetPedFiringPattern(ped, patternHash);
}
/**
 * bit 1 (0x2) = use vehicle
 * bit 15 (0x8000) = force cower
 *
 * Hash: 0x70A2D1137C8ED7C9 | Since: 323 | API-Set: unknown
 */
export function setFleeAttributes(ped, attributeFlags, enable) {
    SetPedFleeAttributes(ped, attributeFlags, enable);
}
/**
 * No comment provided
 *
 * Hash: 0x7FB17BA2E7DECA5B | Since: 323 | API-Set: unknown
 */
export function setGeneratesDeadBodyEvents(ped, toggle) {
    SetPedGeneratesDeadBodyEvents(ped, toggle);
}
/**
 * From the scripts:
 * `PED::SET_PED_GESTURE_GROUP(PLAYER::PLAYER_PED_ID(),`
 * "ANIM_GROUP_GESTURE_MISS_FRA0");
 * `PED::SET_PED_GESTURE_GROUP(PLAYER::PLAYER_PED_ID(),`
 * "ANIM_GROUP_GESTURE_MISS_DocksSetup1");
 *
 * Hash: 0xDDF803377F94AAA8 | Since: 323 | API-Set: unknown
 */
export function setGestureGroup(ped, animGroupGesture) {
    SetPedGestureGroup(ped, animGroupGesture);
}
/**
 * No comment provided
 *
 * Hash: 0xBC0ED94165A48BC2 | Since: 323 | API-Set: unknown
 */
export function setGetOutUpsideDownVehicle(ped, toggle) {
    SetPedGetOutUpsideDownVehicle(ped, toggle);
}
/**
 * enable or disable the gravity of a ped
 *
 * Examples:
 * `PED::SET_PED_GRAVITY(PLAYER::PLAYER_PED_ID(), 0x00000001);`
 * `PED::SET_PED_GRAVITY(Local_289[iVar0 \/\*20\*\/], 0x00000001);`
 *
 * Hash: 0x9FF447B6B6AD960A | Since: 323 | API-Set: unknown
 */
export function setGravity(ped, toggle) {
    SetPedGravity(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0BDDB8D9EC6BCF3C | Since: 323 | API-Set: unknown
 */
export function setGroupMemberPassengerIndex(ped, index) {
    SetPedGroupMemberPassengerIndex(ped, index);
}
/**
 * No comment provided
 *
 * Hash: 0x4CFFC65454C93A49 | Since: 323 | API-Set: unknown
 */
export function setHairTint(ped, colorID, highlightColorID) {
    SetPedHairTint(ped, colorID, highlightColorID);
}
/**
 * The "shape" parameters control the shape of the ped's face. The "skin" parameters control the skin tone. ShapeMix and skinMix control how much the first and second IDs contribute,(typically mother and father.) ThirdMix overrides the others in favor of the third IDs. IsParent is set for "children" of the player character's grandparents during old-gen character creation. It has unknown effect otherwise.
 *
 * The IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.
 *
 * !!!Can someone add working example for this???
 *
 * try this:
 * headBlendData headData;
 * GET_PED_HEAD_BLEND_DATA(PLAYER_PED_ID(), &headData);
 *
 * SET_PED_HEAD_BLEND_DATA(PLAYER_PED_ID(), headData.shapeFirst, headData.shapeSecond, headData.shapeThird, headData.skinFirst, headData.skinSecond
 * , headData.skinThird, headData.shapeMix, headData.skinMix, headData.skinThird, 0);
 *
 *
 * For more info please refer to this topic.
 * gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained
 *
 * Hash: 0x9414E18B9434C2FE | Since: 323 | API-Set: unknown
 */
export function setHeadBlendData(ped, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent) {
    SetPedHeadBlendData(ped, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent);
}
/**
 * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
 *
 * overlayID       Part                  Index, to disable
 * 0               Blemishes             0 - 23, 255
 * 1               Facial Hair           0 - 28, 255
 * 2               Eyebrows              0 - 33, 255
 * 3               Ageing                0 - 14, 255
 * 4               Makeup                0 - 74, 255
 * 5               Blush                 0 - 6, 255
 * 6               Complexion            0 - 11, 255
 * 7               Sun Damage            0 - 10, 255
 * 8               Lipstick              0 - 9, 255
 * 9               Moles/Freckles        0 - 17, 255
 * 10              Chest Hair            0 - 16, 255
 * 11              Body Blemishes        0 - 11, 255
 * 12              Add Body Blemishes    0 - 1, 255
 *
 * Hash: 0x48F44967FA05CC1E | Since: 323 | API-Set: unknown
 */
export function setHeadOverlay(ped, overlayID, index, opacity) {
    SetPedHeadOverlay(ped, overlayID, index, opacity);
}
/**
 *
 *
 * ColorType is 1 for eyebrows, beards, and chest hair; 2 for blush and lipstick; and 0 otherwise, though not called in those cases.
 *
 * Called after SET_PED_HEAD_OVERLAY().
 *
 * Hash: 0x497BF74A7B9CB952 | Since: 323 | API-Set: unknown
 */
export function setHeadOverlayTint(ped, overlayID, colorType, colorID, secondColorID) {
    SetPedHeadOverlayColor(ped, overlayID, colorType, colorID, secondColorID);
}
/**
 * No comment provided
 *
 * Hash: 0xB3352E018D6F89DF | Since: 2699 | API-Set: unknown
 */
export function setHealthPendingLastDamageEventOverrideFlag(toggle) {
    Citizen.invokeNative('0xB3352E018D6F89DF', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x33A8F7F7D5F7F33C | Since: 323 | API-Set: unknown
 */
export function setHearingRange(ped, value) {
    SetPedHearingRange(ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0xC1F6EBF9A3D55538 | Since: 323 | API-Set: unknown
 */
export function setHeatscaleOverride(ped, heatScale) {
    SetPedHeatscaleOverride(ped, heatScale);
}
/**
 * No comment provided
 *
 * Hash: 0x560A43136EB58105 | Since: 323 | API-Set: unknown
 */
export function setHelmet(ped, canWearHelmet) {
    SetPedHelmet(ped, canWearHelmet);
}
/**
 * No comment provided
 *
 * Hash: 0xC0E78D5C2CE3EB25 | Since: 323 | API-Set: unknown
 */
export function setHelmetFlag(ped, helmetFlag) {
    SetPedHelmetFlag(ped, helmetFlag);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0x26D83693ED99291C | Since: 323 | API-Set: unknown
 */
export function setHelmetPropIndex(ped, propIndex) {
    SetPedHelmetPropIndex(ped, propIndex, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF1550C4BD22582E2 | Since: 323 | API-Set: unknown
 */
export function setHelmetTextureIndex(ped, textureIndex) {
    SetPedHelmetTextureIndex(ped, textureIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x3F7325574E41B44D | Since: 791 | API-Set: unknown
 */
export function setHelmetVisorPropIndices(ped) {
    SetPedHelmetUnk(ped, false, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x52D59AB61DDC05DD | Since: 323 | API-Set: unknown
 */
export function setHighlyPerceptive(ped, toggle) {
    SetPedHighlyPerceptive(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF107E836A70DCE05 | Since: 323 | API-Set: unknown
 */
export function setIdRange(ped, value) {
    SetPedIdRange(ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x570389D1C3DE3C6B | Since: 323 | API-Set: unknown
 */
export function setIncreasedAvoidanceRadius(ped) {
    SetPedIncreasedAvoidanceRadius(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEC4B4B3B9908052A | Since: 323 | API-Set: unknown
 */
export function setInjuredOnGroundBehaviour(ped) {
    Citizen.invokeNative('0xEC4B4B3B9908052A', ped, 0);
}
/**
 * Ped: The ped to warp.
 * vehicle: The vehicle to warp the ped into.
 * Seat_Index: [-1 is driver seat, -2 first free passenger seat]
 *
 * Moreinfo of Seat Index
 * DriverSeat = -1
 * Passenger = 0
 * Left Rear = 1
 * RightRear = 2
 *
 * Hash: 0xF75B0D629E1C063D | Since: 323 | API-Set: unknown
 */
export function setIntoVehicle(ped, vehicle, seatIndex) {
    SetPedIntoVehicle(ped, vehicle, seatIndex);
}
/**
 * `PED::SET_PED_IN_VEHICLE_CONTEXT(l_128, MISC::GET_HASH_KEY("MINI_PROSTITUTE_LOW_PASSENGER"));`
 * `PED::SET_PED_IN_VEHICLE_CONTEXT(l_128, MISC::GET_HASH_KEY("MINI_PROSTITUTE_LOW_RESTRICTED_PASSENGER"));`
 * `PED::SET_PED_IN_VEHICLE_CONTEXT(l_3212, MISC::GET_HASH_KEY("MISS_FAMILY1_JIMMY_SIT"));`
 * `PED::SET_PED_IN_VEHICLE_CONTEXT(l_3212, MISC::GET_HASH_KEY("MISS_FAMILY1_JIMMY_SIT_REAR"));`
 * `PED::SET_PED_IN_VEHICLE_CONTEXT(l_95, MISC::GET_HASH_KEY("MISS_FAMILY2_JIMMY_BICYCLE"));`
 * `PED::SET_PED_IN_VEHICLE_CONTEXT(num3, MISC::GET_HASH_KEY("MISSFBI2_MICHAEL_DRIVEBY"));`
 * `PED::SET_PED_IN_VEHICLE_CONTEXT(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("MISS_ARMENIAN3_FRANKLIN_TENSE"));`
 * `PED::SET_PED_IN_VEHICLE_CONTEXT(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("MISSFBI5_TREVOR_DRIVING"));`
 *
 * Hash: 0x530071295899A8C6 | Since: 323 | API-Set: unknown
 */
export function setInVehicleContext(ped, context) {
    if (typeof context === 'string')
        context = GetHashKey(context);
    SetPedInVehicleContext(ped, context);
}
/**
 * No comment provided
 *
 * Hash: 0xA9B61A329BFDCBEA | Since: 323 | API-Set: unknown
 */
export function setIsAvoidedByOthers() {
    Citizen.invokeNative('0xA9B61A329BFDCBEA', undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x33A60D8BDD6E508C | Since: 323 | API-Set: unknown
 */
export function setIsIgnoredByAutoOpenDoors(ped) {
    SetPedCanPlayInjuredAnims(ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x971D38760FBC02EF | Since: 323 | API-Set: unknown
 */
export function setKeepTask(ped, toggle) {
    SetPedKeepTask(ped, toggle);
}
/**
 * "IK" stands for "Inverse kinematics." I assume this has something to do with how the ped uses his legs to balance. In the scripts, the second parameter is always an int with a value of 2, 0, or sometimes 1
 *
 * Hash: 0xC396F5B86FF9FEBD | Since: 323 | API-Set: unknown
 */
export function setLegIkMode(ped, mode) {
    SetPedLegIkMode(ped, mode);
}
/**
 * No comment provided
 *
 * Hash: 0xDC2C5C242AAC342B | Since: 323 | API-Set: unknown
 */
export function setLodMultiplier(ped, multiplier) {
    SetPedLodMultiplier(ped, multiplier);
}
/**
 * Sets the maximum health of a ped.
 *
 * Hash: 0xF5F6378C4F3419D3 | Since: 323 | API-Set: unknown
 */
export function setMaxHealth(ped, value) {
    SetPedMaxHealth(ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x433083750C5E064A | Since: 323 | API-Set: unknown
 */
export function setMaxMoveBlendRatio(ped, value) {
    SetPedMaxMoveBlendRatio(ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x43C851690662113D | Since: 323 | API-Set: unknown
 */
export function setMaxTimeInWater(ped, value) {
    SetPedMaxTimeInWater(ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x6BA428C528D9E522 | Since: 323 | API-Set: unknown
 */
export function setMaxTimeUnderwater(ped, value) {
    SetPedMaxTimeUnderwater(ped, value);
}
/**
 * Sets the various freemode face features, e.g. nose length, chin shape. Scale ranges from -1.0 to 1.0.
 *
 *
 *
 * 0 - Nose Width (Thin/Wide)
 *
 * 1 - Nose Peak (Up/Down)
 *
 * 2 - Nose Length (Long/Short)
 *
 * 3 - Nose Bone Curveness (Crooked/Curved)
 *
 * 4 - Nose Tip (Up/Down)
 *
 * 5 - Nose Bone Twist (Left/Right)
 *
 * 6 - Eyebrow (Up/Down)
 *
 * 7 - Eyebrow (In/Out)
 *
 * 8 - Cheek Bones (Up/Down)
 *
 * 9 - Cheek Sideways Bone Size (In/Out)
 *
 * 10 - Cheek Bones Width (Puffed/Gaunt)
 *
 * 11 - Eye Opening (Both) (Wide/Squinted)
 *
 * 12 - Lip Thickness (Both) (Fat/Thin)
 *
 * 13 - Jaw Bone Width (Narrow/Wide)
 *
 * 14 - Jaw Bone Shape (Round/Square)
 *
 * 15 - Chin Bone (Up/Down)
 *
 * 16 - Chin Bone Length (In/Out or Backward/Forward)
 *
 * 17 - Chin Bone Shape (Pointed/Square)
 *
 * 18 - Chin Hole (Chin Bum)
 *
 * 19 - Neck Thickness (Thin/Thick)
 *
 * Hash: 0x71A5C1DBA060049E | Since: 323 | API-Set: unknown
 */
export function setMicroMorph(ped, index, scale) {
    SetPedFaceFeature(ped, index, scale);
}
/**
 * Ped will stay on the ground after being stunned for at lest ms time. (in milliseconds)
 *
 * Hash: 0xFA0675AB151073FA | Since: 323 | API-Set: unknown
 */
export function setMinGroundTimeForStungun(ped, ms) {
    SetPedMinGroundTimeForStungun(ped, ms);
}
/**
 * No comment provided
 *
 * Hash: 0x01A898D26E2333DD | Since: 323 | API-Set: unknown
 */
export function setMinMoveBlendRatio(ped, value) {
    SetPedMinMoveBlendRatio(ped, value);
}
/**
 * Full list of peds by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/peds.json
 *
 * Hash: 0xE163A4BCE4DE6F11 | Since: 323 | API-Set: unknown
 */
export function setModelIsSuppressed(modelHash, toggle) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    SetPedModelIsSuppressed(modelHash, toggle);
}
/**
 * Maximum possible amount of money on MP is 2000. ~JX
 *
 * -----------------------------------------------------------------------------
 *
 * Maximum amount that a ped can theoretically have is 65535 (0xFFFF) since the amount is stored as an unsigned short (uint16_t) value.
 *
 * Hash: 0xA9C8960E8684C1B5 | Since: 323 | API-Set: unknown
 */
export function setMoney(ped, amount) {
    SetPedMoney(ped, amount);
}
/**
 * No comment provided
 *
 * Hash: 0x0A986918B102B448 | Since: 323 | API-Set: unknown
 */
export function setMotionBlur(ped, toggle) {
    SetPedMotionBlur(ped, toggle);
}
/**
 * Found in the b617d scripts:
 * `PED::SET_PED_MOTION_IN_COVER_CLIPSET_OVERRIDE(v_7, "trevor_heist_cover_2h");`
 *
 * Hash: 0x9DBA107B4937F809 | Since: 323 | API-Set: unknown
 */
export function setMotionInCoverClipsetOverride(ped) {
    SetPedCoverClipsetOverride(ped, undefined);
}
/**
 * transitionSpeed is the time in seconds it takes to transition from one movement clipset to another.	ransitionSpeed is usually 1.0f
 *
 * List of movement clipsets:
 * Thanks to elsewhat for list.
 *
 * "ANIM_GROUP_MOVE_BALLISTIC"
 * "ANIM_GROUP_MOVE_LEMAR_ALLEY"
 * "clipset@move@trash_fast_turn"
 * "FEMALE_FAST_RUNNER"
 * "missfbi4prepp1_garbageman"
 * "move_characters@franklin@fire"
 * "move_characters@Jimmy@slow@"
 * "move_characters@michael@fire"
 * "move_f@flee@a"
 * "move_f@scared"
 * "move_f@sexy@a"
 * "move_heist_lester"
 * "move_injured_generic"
 * "move_lester_CaneUp"
 * "move_m@bag"
 * "MOVE_M@BAIL_BOND_NOT_TAZERED"
 * "MOVE_M@BAIL_BOND_TAZERED"
 * "move_m@brave"
 * "move_m@casual@d"
 * "move_m@drunk@moderatedrunk"
 * "MOVE_M@DRUNK@MODERATEDRUNK"
 * "MOVE_M@DRUNK@MODERATEDRUNK_HEAD_UP"
 * "MOVE_M@DRUNK@SLIGHTLYDRUNK"
 * "MOVE_M@DRUNK@VERYDRUNK"
 * "move_m@fire"
 * "move_m@gangster@var_e"
 * "move_m@gangster@var_f"
 * "move_m@gangster@var_i"
 * "move_m@JOG@"
 * "MOVE_M@PRISON_GAURD"
 * "MOVE_P_M_ONE"
 * "MOVE_P_M_ONE_BRIEFCASE"
 * "move_p_m_zero_janitor"
 * "move_p_m_zero_slow"
 * "move_ped_bucket"
 * "move_ped_crouched"
 * "move_ped_mop"
 * "MOVE_M@FEMME@"
 * "MOVE_F@FEMME@"
 * "MOVE_M@GANGSTER@NG"
 * "MOVE_F@GANGSTER@NG"
 * "MOVE_M@POSH@"
 * "MOVE_F@POSH@"
 * "MOVE_M@TOUGH_GUY@"
 * "MOVE_F@TOUGH_GUY@"
 *
 * ~ NotCrunchyTaco
 *
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 *
 * Hash: 0xAF8A94EDE7712BEF | Since: 323 | API-Set: unknown
 */
export function setMovementClipset(ped, clipSet, transitionSpeed) {
    SetPedMovementClipset(ped, clipSet, transitionSpeed);
}
/**
 * No comment provided
 *
 * Hash: 0x9E8C908F41584ECD | Since: 323 | API-Set: unknown
 */
export function setMoveAnimsBlendOut(ped) {
    SetPedMoveAnimsBlendOut(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0B3E35AC043707D9 | Since: 573 | API-Set: unknown
 */
export function setMoveRateInWaterOverride(ped) {
    Citizen.invokeNative('0x0B3E35AC043707D9', ped, 0);
}
/**
 * Min: 0.00
 * Max: 10.00
 *
 * Can be used in combo with fast run cheat.
 *
 * When value is set to 10.00:
 * Sprinting without fast run cheat: 66 m/s
 * Sprinting with fast run cheat: 77 m/s
 *
 * Needs to be looped!
 *
 * Note: According to IDA for the Xbox360 xex, when they check bgt they seem to have the min to 0.0f, but the max set to 1.15f not 10.0f.
 *
 * Hash: 0x085BF80FA50A39D1 | Since: 323 | API-Set: unknown
 */
export function setMoveRateOverride(ped, value) {
    SetPedMoveRateOverride(ped, value);
}
/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 *
 * *untested but char *name could also be a hash for a localized string
 *
 * Hash: 0x98EFA132A4117BE1 | Since: 323 | API-Set: unknown
 */
export function setNameDebug(ped, name) {
    SetPedNameDebug(ped, name);
}
/**
 * No comment provided
 *
 * Hash: 0x3DBFC55D5C9BB447 | Since: 323 | API-Set: unknown
 */
export function setNeverLeavesGroup(ped, toggle) {
    SetPedNeverLeavesGroup(ped, toggle);
}
/**
 * The distance between these points, is the diagonal of a box (remember it's 3D).
 *
 * Hash: 0xEE01041D559983EA | Since: 323 | API-Set: unknown
 */
export function setNonCreationArea(x1, y1, z1, x2, y2, z2) {
    SetPedNonCreationArea(x1, y1, z1, x2, y2, z2);
}
/**
 * No comment provided
 *
 * Hash: 0xA52D5247A4227E14 | Since: 323 | API-Set: unknown
 */
export function setNoTimeDelayBeforeShot() {
    Citizen.invokeNative('0xA52D5247A4227E14', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFE07FF6495D52E2A | Since: 323 | API-Set: unknown
 */
export function setPanicExitScenario() {
    return SetPedPanicExitScenario(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x333FC8DB079B7186 | Since: 323 | API-Set: unknown
 */
export function setParachuteTintIndex(ped, tintIndex) {
    SetPedParachuteTintIndex(ped, tintIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x83A169EABCDB10A2 | Since: 323 | API-Set: unknown
 */
export function setPhonePaletteIdx() {
    SetPedPhonePaletteIdx(undefined, undefined);
}
/**
 * i could be time. Only example in the decompiled scripts uses it as -1.
 *
 * Hash: 0xAAD6D1ACF08F4612 | Since: 323 | API-Set: unknown
 */
export function setPinnedDown(ped, pinned, i) {
    return SetPedPinnedDown(ped, pinned, i);
}
/**
 * This native does absolutely nothing, just a nullsub
 *
 * Hash: 0x94D94BF1A75AED3D | Since: 323 | API-Set: unknown
 */
export function setPlaysHeadOnHornAnimWhenDiesInVehicle(ped, toggle) {
    SetPedPlaysHeadOnHornAnimWhenDiesInVehicle(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8421EB4DA7E391B9 | Since: 323 | API-Set: unknown
 */
export function setPreferredCoverSet(ped, itemSet) {
    SetPedPreferredCoverSet(ped, itemSet);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0x2B16A3BFF1FBCE49 | Since: 323 | API-Set: unknown
 */
export function setPreloadPropData(ped, componentId, drawableId, TextureId) {
    return SetPedPreloadPropData(ped, componentId, drawableId, TextureId);
}
/**
 * from extreme3.c4
 * `PED::SET_PED_PRELOAD_VARIATION_DATA(PLAYER::PLAYER_PED_ID(), 8, PED::GET_PED_DRAWABLE_VARIATION(PLAYER::PLAYER_PED_ID(), 8), PED::GET_PED_TEXTURE_VARIATION(PLAYER::PLAYER_PED_ID(), 8));`
 *
 * p1 is probably componentId
 *
 * Hash: 0x39D55A620FCB6A3A | Since: 323 | API-Set: unknown
 */
export function setPreloadVariationData(ped, slot, drawableId, textureId) {
    return SetPedPreloadVariationData(ped, slot, drawableId, textureId);
}
/**
 * This is only called once in the scripts.
 *
 * sub_1CD9(&l_49, 0, getElem(3, &l_34, 4), "MICHAEL", 0, 1);
 * sub_1CA8("WORLD_HUMAN_SMOKING", 2);
 * `PED::SET_PED_PRIMARY_LOOKAT(getElem(3, &l_34, 4), PLAYER::PLAYER_PED_ID());`
 *
 * Hash: 0xCD17B554996A8D9E | Since: 323 | API-Set: unknown
 */
export function setPrimaryLookat(ped, lookAt) {
    SetPedPrimaryLookat(ped, lookAt);
}
/**
 * ComponentId can be set to various things based on what category you're wanting to set
 * enum PedPropsData
 * {
 * PED_PROP_HATS = 0,
 * PED_PROP_GLASSES = 1,
 * PED_PROP_EARS = 2,
 * PED_PROP_WATCHES = 3,
 * };
 * Usage: SET_PED_PROP_INDEX(playerPed, PED_PROP_HATS, GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS(playerPed, PED_PROP_HATS), GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS(playerPed, PED_PROP_HATS, 0), TRUE);
 *
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0x93376B65A266EB5F | Since: 323 | API-Set: unknown
 */
export function setPropIndex(ped, componentId, drawableId, TextureId, attach) {
    SetPedPropIndex(ped, componentId, drawableId, TextureId, attach, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x01F6594B923B9251 | Since: 323 | API-Set: unknown
 */
export function setRagdollForceFall(ped) {
    SetPedRagdollForceFall(ped);
}
/**
 * Causes Ped to ragdoll on collision with any object (e.g Running into trashcan). If applied to player you will sometimes trip on the sidewalk.
 *
 * Hash: 0xF0A4F1BBF4FA7497 | Since: 323 | API-Set: unknown
 */
export function setRagdollOnCollision(ped, toggle) {
    SetPedRagdollOnCollision(ped, toggle);
}
/**
 * p1 is always 0 in R* scripts.
 *
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0xC8A9481A01E63C28 | Since: 323 | API-Set: unknown
 */
export function setRandomComponentVariation(ped) {
    SetPedRandomComponentVariation(ped, 0);
}
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 *
 * Hash: 0xC44AA05345C992C6 | Since: 323 | API-Set: unknown
 */
export function setRandomProps(ped) {
    SetPedRandomProps(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xADB3F206518799E8 | Since: 323 | API-Set: unknown
 */
export function setRelationshipGroupDefaultHash(ped, hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    SetPedRelationshipGroupDefaultHash(ped, hash);
}
/**
 * No comment provided
 *
 * Hash: 0xC80A74AC829DDD92 | Since: 323 | API-Set: unknown
 */
export function setRelationshipGroupHash(ped, hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    SetPedRelationshipGroupHash(ped, hash);
}
/**
 * No comment provided
 *
 * Hash: 0xE88DA0751C22A2AD | Since: 323 | API-Set: unknown
 */
export function setReserveParachuteTintIndex(ped) {
    SetPedReserveParachuteTintIndex(ped, undefined);
}
/**
 * `PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);`
 * Known values:
 * PRF_PreventGoingIntoStillInVehicleState = 236 *(fanatic2.c)*
 *
 * Hash: 0xC1E8A365BF3B29F2 | Since: 323 | API-Set: unknown
 */
export function setResetFlag(ped, flagId, doReset) {
    SetPedResetFlag(ped, flagId, doReset);
}
/**
 * This native sets a scuba mask for freemode models and an oxygen bottle for player_* models. It works on freemode and player_* models.
 *
 * Hash: 0x36C6984C3ED0C911 | Since: 323 | API-Set: unknown
 */
export function setScubaGearVariation(ped) {
    SetPedScubaGearVariation(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xF29CF591C4BF6CEE | Since: 323 | API-Set: unknown
 */
export function setSeeingRange(ped, value) {
    SetPedSeeingRange(ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x96A05E4FB321B1BA | Since: 323 | API-Set: unknown
 */
export function setShootsAtCoord(ped, pos, toggle) {
    SetPedShootsAtCoord(ped, pos.x, pos.y, pos.z, toggle);
}
/**
 * shootRate 0-1000
 *
 * Hash: 0x614DA022990752DC | Since: 323 | API-Set: unknown
 */
export function setShootRate(ped, shootRate) {
    SetPedShootRate(ped, shootRate);
}
/**
 * No comment provided
 *
 * Hash: 0x425AECF167663F48 | Since: 323 | API-Set: unknown
 */
export function setShouldIgnoreScenarioExitCollisionChecks(ped) {
    Citizen.invokeNative('0x425AECF167663F48', ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5B6010B3CBC29095 | Since: 323 | API-Set: unknown
 */
export function setShouldIgnoreScenarioNavChecks() {
    Citizen.invokeNative('0x5B6010B3CBC29095', undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xEC6935EBE0847B90 | Since: 323 | API-Set: unknown
 */
export function setShouldPlayDirectedNormalScenarioExit() {
    return SetPedShouldPlayDirectedScenarioExit(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEEED8FAFEC331A70 | Since: 323 | API-Set: unknown
 */
export function setShouldPlayFleeScenarioExit(ped) {
    return SetPedShouldPlayFleeScenarioExit(ped, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF1C03A5352243A30 | Since: 323 | API-Set: unknown
 */
export function setShouldPlayImmediateScenarioExit(ped) {
    SetPedShouldPlayImmediateScenarioExit(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xA3A9299C4F2ADB98 | Since: 323 | API-Set: unknown
 */
export function setShouldPlayNormalScenarioExit(ped) {
    SetPedShouldPlayNormalScenarioExit(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCEDA60A74219D064 | Since: 323 | API-Set: unknown
 */
export function setShouldProbeForScenarioExitsInOneFrame() {
    Citizen.invokeNative('0xCEDA60A74219D064', undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x9D3151A373974804 | Since: 323 | API-Set: unknown
 */
export function setSphereDefensiveArea(ped, pos, radius) {
    SetPedSphereDefensiveArea(ped, pos.x, pos.y, pos.z, radius, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xEDF4079F9D54C9A1 | Since: 323 | API-Set: unknown
 */
export function setStayInVehicleWhenJacked(ped, toggle) {
    SetPedStayInVehicleWhenJacked(ped, toggle);
}
/**
 * p1 is usually 0 in the scripts. action is either 0 or a pointer to "DEFAULT_ACTION".
 *
 * Hash: 0x88CBB5CEB96B7BD2 | Since: 323 | API-Set: unknown
 */
export function setStealthMovement(ped, action) {
    SetPedStealthMovement(ped, false, action);
}
/**
 * No comment provided
 *
 * Hash: 0x2016C603D6B8987C | Since: 323 | API-Set: unknown
 */
export function setSteersAroundDeadBodies(ped, toggle) {
    Citizen.invokeNative('0x2016C603D6B8987C', ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1509C089ADC208BF | Since: 323 | API-Set: unknown
 */
export function setSteersAroundObjects(ped, toggle) {
    SetPedSteersAroundObjects(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x46F2193B3AD1D891 | Since: 323 | API-Set: unknown
 */
export function setSteersAroundPeds(ped, toggle) {
    SetPedSteersAroundPeds(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xEB6FB9D48DDE23EC | Since: 323 | API-Set: unknown
 */
export function setSteersAroundVehicles(ped, toggle) {
    SetPedSteersAroundVehicles(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x288DF530C92DAD6F | Since: 323 | API-Set: unknown
 */
export function setSteerBias(ped, value) {
    Citizen.invokeNative('0x288DF530C92DAD6F', ped, value);
}
/**
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 *
 * Hash: 0x29A28F3F8CF6D854 | Since: 323 | API-Set: unknown
 */
export function setStrafeClipset(ped, clipSet) {
    SetPedStrafeClipset(ped, clipSet);
}
/**
 * Ped no longer takes critical damage modifiers if set to FALSE.
 * Example: Headshotting a player no longer one shots them. Instead they will take the same damage as a torso shot.
 *
 * Hash: 0xEBD76F2359F190AC | Since: 323 | API-Set: unknown
 */
export function setSuffersCriticalHits(ped, toggle) {
    SetPedSuffersCriticalHits(ped, toggle);
}
/**
 * Sweat is set to 100.0 or 0.0 in the decompiled scripts.
 *
 * Hash: 0x27B0405F59637D1F | Since: 323 | API-Set: unknown
 */
export function setSweat(ped, sweat) {
    SetPedSweat(ped, sweat);
}
/**
 * enum eTargetLossResponseType
 * {
 * TLR_ExitTask,
 * TLR_NeverLoseTarget,
 * TLR_SearchForTarget
 * };
 *
 * Hash: 0x0703B9079823DA4A | Since: 323 | API-Set: unknown
 */
export function setTargetLossResponse(ped, responseType) {
    SetPedTargetLossResponse(ped, responseType);
}
/**
 * No comment provided
 *
 * Hash: 0x112942C6E708F70B | Since: 323 | API-Set: unknown
 */
export function setToInformRespectedFriends(ped, radius, maxFriends) {
    SetPedToInformRespectedFriends(ped, radius, maxFriends);
}
/**
 * No comment provided
 *
 * Hash: 0x332B562EEDA62399 | Since: 323 | API-Set: unknown
 */
export function setToLoadCover(ped, toggle) {
    SetPedToLoadCover(ped, toggle);
}
/**
 * p4/p5: Unused in TU27
 * Ragdoll Types:
 * **0**: CTaskNMRelax
 * **1**: CTaskNMScriptControl: Hardcoded not to work in networked environments.
 * **Else**: CTaskNMBalance
 * time1- Time(ms) Ped is in ragdoll mode; only applies to ragdoll types 0 and not 1.
 *
 * time2- Unknown time, in milliseconds
 *
 * ragdollType-
 * 0 : Normal ragdoll
 * 1 : Falls with stiff legs/body
 * 2 : Narrow leg stumble(may not fall)
 * 3 : Wide leg stumble(may not fall)
 *
 * p4, p5, p6- No idea. In R*'s scripts they are usually either "true, true, false" or "false, false, false".
 *
 *
 *
 *
 * EDIT 3/11/16: unclear what 'mircoseconds' mean-- a microsecond is 1000x a ms, so time2 must be 1000x time1?  more testing needed.  -sob
 *
 * Edit Mar 21, 2017: removed part about time2 being the microseconds version of time1. this just isn't correct. time2 is in milliseconds, and time1 and time2 don't seem to be connected in any way.
 *
 * Hash: 0xAE99FB955581844A | Since: 323 | API-Set: unknown
 */
export function setToRagdoll(ped, time1, time2, ragdollType) {
    return SetPedToRagdoll(ped, time1, time2, ragdollType, false, false, false);
}
/**
 * Return variable is never used in R*'s scripts.
 *
 * Not sure what p2 does. It seems like it would be a time judging by it's usage in R*'s scripts, but didn't seem to affect anything in my testings.
 *
 * enum eRagdollType
 * {
 * RD_MALE=0,
 * RD_FEMALE = 1,
 * RD_MALE_LARGE = 2,
 * RD_CUSTOM = 3,
 * }
 *
 * x, y, and z are coordinates, most likely to where the ped will fall.
 *
 * p8 to p13 are always 0f in R*'s scripts.
 *
 * (Simplified) Example of the usage of the function from R*'s scripts:
 * `ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);`
 *
 *
 * Hash: 0xD76632D99E4966C8 | Since: 323 | API-Set: unknown
 */
export function setToRagdollWithFall(ped, time, ragdollType, pos, velocity) {
    return SetPedToRagdollWithFall(ped, time, 0, ragdollType, pos.x, pos.y, pos.z, velocity, 0, 0, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x0F62619393661D6E | Since: 877 | API-Set: unknown
 */
export function setTreatedAsFriendly() {
    Citizen.invokeNative('0x0F62619393661D6E', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAFC976FD0580C7B3 | Since: 323 | API-Set: unknown
 */
export function setUpperBodyDamageOnly(ped, toggle) {
    Citizen.invokeNative('0xAFC976FD0580C7B3', ped, toggle);
}
/**
 * p2 is usually -1 in the scripts. action is either 0 or "DEFAULT_ACTION".
 *
 * Hash: 0xD75ACCF5E0FB5367 | Since: 323 | API-Set: unknown
 */
export function setUsingActionMode(ped, action) {
    SetPedUsingActionMode(ped, false, 0, action);
}
/**
 * seatIndex must be <= 2
 *
 * Hash: 0x952F06BEECD775CC | Since: 323 | API-Set: unknown
 */
export function setVehicleForcedSeatUsage(ped, vehicle, seatIndex, flags) {
    SetPedVehicleForcedSeatUsage(ped, vehicle, seatIndex, flags, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3B6405E8AB34A907 | Since: 323 | API-Set: unknown
 */
export function setVisualFieldCenterAngle(ped, angle) {
    SetPedVisualFieldCenterAngle(ped, angle);
}
/**
 * No comment provided
 *
 * Hash: 0x70793BDCA1E854D4 | Since: 323 | API-Set: unknown
 */
export function setVisualFieldMaxAngle(ped, value) {
    SetPedVisualFieldMaxAngle(ped, value);
}
/**
 * This native refers to the field of vision the ped has above them, starting at 0 degrees. 90f would let the ped see enemies directly above of them.
 *
 * Hash: 0x78D0B67629D75856 | Since: 323 | API-Set: unknown
 */
export function setVisualFieldMaxElevationAngle(ped, angle) {
    SetPedVisualFieldMaxElevationAngle(ped, angle);
}
/**
 * No comment provided
 *
 * Hash: 0x2DB492222FB21E26 | Since: 323 | API-Set: unknown
 */
export function setVisualFieldMinAngle(ped, value) {
    SetPedVisualFieldMinAngle(ped, value);
}
/**
 * This native refers to the field of vision the ped has below them, starting at 0 degrees. The angle value should be negative.
 * -90f should let the ped see 90 degrees below them, for example.
 *
 * Hash: 0x7A276EB2C224D70F | Since: 323 | API-Set: unknown
 */
export function setVisualFieldMinElevationAngle(ped, angle) {
    SetPedVisualFieldMinElevationAngle(ped, angle);
}
/**
 * No comment provided
 *
 * Hash: 0x9C74B0BC831B753A | Since: 323 | API-Set: unknown
 */
export function setVisualFieldPeripheralRange(ped, range) {
    SetPedVisualFieldPeripheralRange(ped, range);
}
/**
 * No comment provided
 *
 * Hash: 0x2622E35B77D3ACA2 | Since: 323 | API-Set: unknown
 */
export function setWeaponMovementClipset(ped, clipSet) {
    SetPedWeaponMovementClipset(ped, clipSet);
}
/**
 * No comment provided
 *
 * Hash: 0xAC0BB4D87777CAE2 | Since: 2802 | API-Set: unknown
 */
export function setWetness(ped, wetLevel) {
    Citizen.invokeNative('0xAC0BB4D87777CAE2', ped, wetLevel);
}
/**
 * `combined with PED::SET_PED_WETNESS_HEIGHT(), this native makes the ped drenched in water up to the height specified in the other function`
 *
 * Hash: 0xB5485E4907B53019 | Since: 323 | API-Set: unknown
 */
export function setWetnessEnabledThisFrame(ped) {
    SetPedWetnessEnabledThisFrame(ped);
}
/**
 * It adds the wetness level to the player clothing/outfit. As if player just got out from water surface.
 *
 *
 *
 * Hash: 0x44CB6447D2571AA0 | Since: 323 | API-Set: unknown
 */
export function setWetnessHeight(ped, height) {
    SetPedWetnessHeight(ped, height);
}
/**
 * No comment provided
 *
 * Hash: 0x3E9679C1DFCF422C | Since: 877 | API-Set: unknown
 */
export function setWillOnlyAttackWantedPlayer() {
    Citizen.invokeNative('0x3E9679C1DFCF422C', undefined, undefined);
}
/**
 * Min and max are usually 100.0 and 200.0
 *
 * Hash: 0xD8C3BE3EE94CAF2D | Since: 323 | API-Set: unknown
 */
export function setPopControlSphereThisFrame(pos, min, max) {
    SetPopControlSphereThisFrame(pos.x, pos.y, pos.z, min, max);
}
/**
 * Works for both player and peds,
 *
 * enum eRagdollBlockingFlags
 * {
 * RBF_BULLET_IMPACT = 0,
 * RBF_VEHICLE_IMPACT = 1,
 * RBF_FIRE = 2,
 * RBF_ELECTROCUTION = 3,
 * RBF_PLAYER_IMPACT = 4,
 * RBF_EXPLOSION = 5,0
 * RBF_IMPACT_OBJECT = 6,
 * RBF_MELEE = 7,
 * RBF_RUBBER_BULLET = 8,
 * RBF_FALLING = 9,
 * RBF_WATER_JET = 10,
 * RBF_DROWNING = 11,
 * _0x9F52E2C4 = 12,
 * RBF_PLAYER_BUMP = 13,
 * RBF_PLAYER_RAGDOLL_BUMP = 14,
 * RBF_PED_RAGDOLL_BUMP = 15,
 * RBF_VEHICLE_GRAB = 16,
 * RBF_SMOKE_GRENADE = 17,
 * };
 *
 *
 *
 * Hash: 0x26695EC767728D84 | Since: 323 | API-Set: unknown
 */
export function setRagdollBlockingFlags(ped, blockingFlag) {
    SetRagdollBlockingFlags(ped, blockingFlag);
}
/**
 * Sets the relationship between two groups. This should be called twice (once for each group).
 *
 * Relationship types:
 * 0 = Companion
 * 1 = Respect
 * 2 = Like
 * 3 = Neutral
 * 4 = Dislike
 * 5 = Hate
 * 255 = Pedestrians
 *
 * Example:
 * `PED::SET_RELATIONSHIP_BETWEEN_GROUPS(2, l_1017, 0xA49E591C);`
 * `PED::SET_RELATIONSHIP_BETWEEN_GROUPS(2, 0xA49E591C, l_1017);`
 *
 * Hash: 0xBF25EB89375A37AD | Since: 323 | API-Set: unknown
 */
export function setRelationshipBetweenGroups(relationship, group1, group2) {
    if (typeof group1 === 'string')
        group1 = GetHashKey(group1);
    if (typeof group2 === 'string')
        group2 = GetHashKey(group2);
    SetRelationshipBetweenGroups(relationship, group1, group2);
}
/**
 * No comment provided
 *
 * Hash: 0x5615E0C5EB2BC6E2 | Since: 877 | API-Set: unknown
 */
export function setRelationshipGroupAffectsWantedLevel(group) {
    if (typeof group === 'string')
        group = GetHashKey(group);
    SetRelationshipGroupDontAffectWantedLevel(group, false);
}
/**
 * No comment provided
 *
 * Hash: 0x28157D43CF600981 | Since: 323 | API-Set: unknown
 */
export function setScenariosSpawnInSphereArea(pos, range) {
    SetScenarioPedsSpawnInSphereArea(pos.x, pos.y, pos.z, range, 0);
}
/**
 * Sets a value indicating whether scenario peds should be returned by the next call to a command that returns peds. Eg. GET_CLOSEST_PED.
 *
 * Hash: 0x14F19A8782C8071E | Since: 323 | API-Set: unknown
 */
export function setScenariosToBeReturnedByNextCommand(value) {
    SetScenarioPedsToBeReturnedByNextCommand(value);
}
/**
 * No comment provided
 *
 * Hash: 0x7A556143A1C03898 | Since: 323 | API-Set: unknown
 */
export function setScenarioDensityMultiplierThisFrame() {
    SetScenarioPedDensityMultiplierThisFrame(0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x5917BBA32D06C230 | Since: 323 | API-Set: unknown
 */
export function setScriptedAnimSeatOffset(ped) {
    SetScriptedAnimSeatOffset(ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x5086C7843552CF85 | Since: 323 | API-Set: unknown
 */
export function setScriptedConversionCoordThisFrame(pos) {
    SetScriptedConversionCoordThisFrame(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x394B9CD12435C981 | Since: 323 | API-Set: unknown
 */
export function setSynchronizedSceneHoldLastFrame(sceneID, toggle) {
    SetSynchronizedSceneHoldLastFrame(sceneID, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xD9A897A4C6C2974F | Since: 323 | API-Set: unknown
 */
export function setSynchronizedSceneLoo(sceneID, toggle) {
    SetSynchronizedSceneLooped(sceneID, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6ACF6B7225801CD7 | Since: 323 | API-Set: unknown
 */
export function setSynchronizedSceneOrigin(sceneID, pos, roll, pitch, yaw) {
    SetSynchronizedSceneOrigin(sceneID, pos.x, pos.y, pos.z, roll, pitch, yaw, false);
}
/**
 * No comment provided
 *
 * Hash: 0x734292F4F0ABF6D0 | Since: 323 | API-Set: unknown
 */
export function setSynchronizedScenePhase(sceneID, phase) {
    SetSynchronizedScenePhase(sceneID, phase);
}
/**
 * No comment provided
 *
 * Hash: 0xB6C49F8A5E295A5D | Since: 323 | API-Set: unknown
 */
export function setSynchronizedSceneRate(sceneID, rate) {
    SetSynchronizedSceneRate(sceneID, rate);
}
/**
 * No comment provided
 *
 * Hash: 0x2F3C3D9F50681DE4 | Since: 323 | API-Set: unknown
 */
export function setTreatAsAmbientForDriverLockon(ped) {
    Citizen.invokeNative('0x2F3C3D9F50681DE4', ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFD325494792302D7 | Since: 323 | API-Set: unknown
 */
export function setUseCameraHeadingForDesiredDirectionLockOnTest(ped, toggle) {
    Citizen.invokeNative('0xFD325494792302D7', ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xFEE4A5459472A9F8 | Since: 323 | API-Set: unknown
 */
export function spawnpointsCancelSearch() {
    SpawnpointsCancelSearch();
}
/**
 * No comment provided
 *
 * Hash: 0xA635C11B8C44AFC2 | Since: 323 | API-Set: unknown
 */
export function spawnpointsGetNumSearchResults() {
    return SpawnpointsGetNumSearchResults();
}
/**
 * No comment provided
 *
 * Hash: 0x280C7E3AC7F56E90 | Since: 323 | API-Set: unknown
 */
export function spawnpointsGetSearchResult(randomInt) {
    return SpawnpointsGetSearchResult(randomInt);
}
/**
 * No comment provided
 *
 * Hash: 0xB782F8238512BAD5 | Since: 323 | API-Set: unknown
 */
export function spawnpointsGetSearchResultFlags() {
    return SpawnpointsGetSearchResultFlags(0);
}
/**
 * No comment provided
 *
 * Hash: 0x3C67506996001F5E | Since: 323 | API-Set: unknown
 */
export function spawnpointsIsSearchActive() {
    return SpawnpointsIsSearchActive();
}
/**
 * No comment provided
 *
 * Hash: 0xA586FBEB32A53DBB | Since: 323 | API-Set: unknown
 */
export function spawnpointsIsSearchComplete() {
    return SpawnpointsIsSearchComplete();
}
/**
 * No comment provided
 *
 * Hash: 0xF445DE8DA80A1792 | Since: 323 | API-Set: unknown
 */
export function spawnpointsIsSearchFailed() {
    return SpawnpointsIsSearchFailed();
}
/**
 * No comment provided
 *
 * Hash: 0x2DF9038C90AD5264 | Since: 323 | API-Set: unknown
 */
export function spawnpointsStartSearch(interiorFlags, scale, duration) {
    SpawnpointsStartSearch(0, 0, 0, 0, 0, interiorFlags, scale, duration);
}
/**
 * No comment provided
 *
 * Hash: 0xB2AFF10216DEFA2F | Since: 323 | API-Set: unknown
 */
export function spawnpointsStartSearchInAngledArea(x1, y1, z1, x2, y2, z2, width, interiorFlags, scale, duration) {
    SpawnpointsStartSearchInAngledArea(x1, y1, z1, x2, y2, z2, width, interiorFlags, scale, duration);
}
/**
 * p1 was always 1 (true).
 *
 * Kicks the ped from the current vehicle and keeps the rendering-focus on this ped (also disables its collision). If doing this for your player ped, you'll still be able to drive the vehicle.
 *
 * Hash: 0xF9ACF4A08098EA25 | Since: 323 | API-Set: unknown
 */
export function specialFunctionDoNotUse(ped) {
    SpecialFunctionDoNotUse(ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB47BD05FA66B40CF | Since: 323 | API-Set: unknown
 */
export function stopAnyModelBeingSuppressed() {
    StopAnyPedModelBeingSuppressed();
}
/**
 * No comment provided
 *
 * Hash: 0xC158D28142A34608 | Since: 323 | API-Set: unknown
 */
export function stopWeaponFiringWhenDropped(ped) {
    StopPedWeaponFiringWhenDropped(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5A7F62FDA59759BD | Since: 323 | API-Set: unknown
 */
export function suppressAmbientAggressiveCleanupThisFrame() {
    Citizen.invokeNative('0x5A7F62FDA59759BD');
}
/**
 * No comment provided
 *
 * Hash: 0xCD9CC7E200A52A6F | Since: 323 | API-Set: unknown
 */
export function takeOwnershipOfSynchronizedScene(scene) {
    TakeOwnershipOfSynchronizedScene(scene);
}
/**
 * No comment provided
 *
 * Hash: 0xAD27D957598E49E9 | Since: 1290 | API-Set: unknown
 */
export function tellGroupsInAreaToAttack(ped, hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    Citizen.invokeNative('0xAD27D957598E49E9', ped, undefined, 0, hash, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9A77DFD295E29B09 | Since: 323 | API-Set: unknown
 */
export function toggleScenarioCowerInPlace(ped, toggle) {
    Citizen.invokeNative('0x9A77DFD295E29B09', ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC2EE020F5FB4DB53 | Since: 323 | API-Set: unknown
 */
export function triggerIdleAnimationOn(ped) {
    Citizen.invokeNative('0xC2EE020F5FB4DB53', ped);
}
/**
 * No comment provided
 *
 * Hash: 0x25361A96E0F7E419 | Since: 323 | API-Set: unknown
 */
export function triggerScenarioPanicexittoflee() {
    return Citizen.invokeNative('0x25361A96E0F7E419', undefined, undefined, undefined, undefined);
}
/**
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 *
 * Hash: 0x96B1361D9B24C2FF | Since: 323 | API-Set: unknown
 */
export function unregisterheadshot(id) {
    UnregisterPedheadshot(id);
}
/**
 * See SET_PED_HEAD_BLEND_DATA().
 *
 * Hash: 0x723538F61C647C5A | Since: 323 | API-Set: unknown
 */
export function updateHeadBlendData(ped, shapeMix, skinMix, thirdMix) {
    UpdatePedHeadBlendData(ped, shapeMix, skinMix, thirdMix);
}
/**
 * No comment provided
 *
 * Hash: 0xF9800AA1A771B000 | Since: 323 | API-Set: unknown
 */
export function wasKilledByStealth(ped) {
    return WasPedKilledByStealth(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7F08E26039C7347C | Since: 323 | API-Set: unknown
 */
export function wasKilledByTakedown(ped) {
    return WasPedKilledByTakedown(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x61767F73EACEED21 | Since: 323 | API-Set: unknown
 */
export function wasKnockedOut(ped) {
    return WasPedKnockedOut(ped);
}
/**
 * Despite this function's name, it simply returns whether the specified handle is a Ped.
 *
 * Hash: 0x11B499C1E0FF8559 | Since: 323 | API-Set: unknown
 */
export function wasSkeletonUpdated(ped) {
    return WasPedSkeletonUpdated(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xA32ABFEB2A03B306 | Since: 3095 | API-Set: unknown
 */
export function hasClearLosToEntity(ped, entity, pos) {
    return Citizen.invokeNative('0xA32ABFEB2A03B306', ped, entity, pos.x, pos.y, pos.z, 0, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC73EFFC5E043A8BA | Since: 3258 | API-Set: unknown
 */
export function setBlockAmbientsFromDroppingWeaponsThisFrame() {
    SetBlockAmbientPedsFromDroppingWeaponsThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x100CD221F572F6E1 | Since: 3407 | API-Set: unknown
 */
export function setSurvivesBeingOutOfWater(ped, toggle) {
    return Citizen.invokeNative('0x100CD221F572F6E1', ped, toggle);
}
