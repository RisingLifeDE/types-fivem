/**
 * A getter for the accuracy spread of a weapon.
 *
 * Hash: 0x5343721 | Since: unknown | API-Set: client
 */
export function getAccuracySpread(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponAccuracySpread(weaponHash);
}
/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
 *
 * Hash: 0x63ED2E7 | Since: unknown | API-Set: client
 */
export function getAnimationOverride(ped) {
    return GetWeaponAnimationOverride(ped);
}
/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 *
 * Hash: 0xC693E278 | Since: unknown | API-Set: client
 */
export function getComponentAccuracyModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentAccuracyModifier(componentHash);
}
/**
 * A getter for `CameraHash` in a weapon scope component.
 *
 * Hash: 0xACB7E68F | Since: unknown | API-Set: client
 */
export function getComponentCameraHash(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentCameraHash(componentHash);
}
/**
 * A getter for `ClipSize` in a weapon component.
 *
 * Hash: 0xE14CF665 | Since: unknown | API-Set: client
 */
export function getComponentClipSize(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentClipSize(componentHash);
}
/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 *
 * Hash: 0x4A0E3855 | Since: unknown | API-Set: client
 */
export function getComponentDamageModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentDamageModifier(componentHash);
}
/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 *
 * Hash: 0xE134FB8D | Since: unknown | API-Set: client
 */
export function getComponentRangeDamageModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentRangeDamageModifier(componentHash);
}
/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 *
 * Hash: 0x2FD0BC1B | Since: unknown | API-Set: client
 */
export function getComponentRangeModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentRangeModifier(componentHash);
}
/**
 * A getter for `ReticuleHash` in a weapon scope component.
 *
 * Hash: 0xF9AB9297 | Since: unknown | API-Set: client
 */
export function getComponentReticuleHash(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentReticuleHash(componentHash);
}
/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 *
 * Hash: 0xD979143 | Since: unknown | API-Set: client
 */
export function getDamageModifier(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponDamageModifier(weaponHash);
}
/**
 * A getter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x5E1AF5F | Since: unknown | API-Set: client
 */
export function getRecoilShakeAmplitude(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponRecoilShakeAmplitude(weaponHash);
}
/**
 * Disables weapons aim blocking due to environment for local player.
 * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
 *
 * Hash: 0xDFD8F6DE | Since: unknown | API-Set: client
 */
export function setsNoAimBlocking(state) {
    SetWeaponsNoAimBlocking(state);
}
/**
 * Disables the game's built-in auto-reloading.
 *
 * Hash: 0x311150E5 | Since: unknown | API-Set: client
 */
export function setsNoAutoreload(state) {
    SetWeaponsNoAutoreload(state);
}
/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 *
 * Hash: 0x2A7B50E | Since: unknown | API-Set: client
 */
export function setsNoAutoswap(state) {
    SetWeaponsNoAutoswap(state);
}
/**
 * A setter for the accuracy spread of a weapon.
 *
 * Hash: 0x598DD6AE | Since: unknown | API-Set: client
 */
export function setAccuracySpread(weaponHash, spread) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetWeaponAccuracySpread(weaponHash, spread);
}
/**
 * A setter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x9864312F | Since: unknown | API-Set: client
 */
export function setRecoilShakeAmplitude(weaponHash, amplitude) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetWeaponRecoilShakeAmplitude(weaponHash, amplitude);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x78F0424C34306220 | Since: 323 | API-Set: unknown
 */
export function addAmmoToPed(ped, weaponHash, ammo) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    AddAmmoToPed(ped, weaponHash, ammo);
}
/**
 * Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 *
 * Hash: 0x2472622CE1F2D45F | Since: 1103 | API-Set: unknown
 */
export function addPedAmmoByType(ped, ammoTypeHash, ammo) {
    if (typeof ammoTypeHash === 'string')
        ammoTypeHash = GetHashKey(ammoTypeHash);
    AddAmmoToPedByType(ped, ammoTypeHash, ammo);
}
/**
 * this returns if you can use the weapon while using a parachute
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xBC7BE5ABC0879F74 | Since: 323 | API-Set: unknown
 */
export function canUseOnParachute(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return CanUseWeaponOnParachute(weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0xAC678E40BE7C74D2 | Since: 323 | API-Set: unknown
 */
export function clearEntityLastDamage(entity) {
    ClearEntityLastWeaponDamage(entity);
}
/**
 * Does NOT seem to work with HAS_PED_BEEN_DAMAGED_BY_WEAPON. Use CLEAR_ENTITY_LAST_WEAPON_DAMAGE and HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON instead.
 *
 * Hash: 0x0E98F88A24C5F4B8 | Since: 323 | API-Set: unknown
 */
export function clearPedLastDamage(ped) {
    ClearPedLastWeaponDamage(ped);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x9DA58CDBF6BDBC08 | Since: 1011 | API-Set: unknown
 */
export function createAirDefenceAngledArea(radius, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return CreateAirDefenseArea(0, 0, 0, 0, 0, 0, 0, 0, 0, radius, weaponHash);
}
/**
 * Both coordinates are from objects in the decompiled scripts. Native related to 0xECDC202B25E5CF48 p1 value. The only weapon hash used in the decompiled scripts is weapon_air_defence_gun. These two natives are used by the yacht script, decompiled scripts suggest it and the weapon hash used (valkyrie's rockets) are also used by yachts.
 *
 * Hash: 0x91EF34584710BE99 | Since: 573 | API-Set: unknown
 */
export function createAirDefenceSphere(pos, radius, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return CreateAirDefenseSphere(pos.x, pos.y, pos.z, radius, 0, 0, 0, weaponHash);
}
/**
 * Now has 8 params.
 *
 * Hash: 0x9541D3CF0D398F36 | Since: 323 | API-Set: unknown
 */
export function createObject(weaponHash, ammoCount, pos, showWorldModel, scale) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return CreateWeaponObject(weaponHash, ammoCount, pos.x, pos.y, pos.z, showWorldModel, scale, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCD79A550999D7D4F | Since: 678 | API-Set: unknown
 */
export function doesAirDefenceSphereExist(zoneId) {
    return DoesAirDefenseZoneExist(zoneId);
}
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x5CEE3DF569CECAB0 | Since: 323 | API-Set: unknown
 */
export function doesTakeWeaponComponent(weaponHash, componentHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return DoesWeaponTakeWeaponComponent(weaponHash, componentHash);
}
/**
 * Enables laser sight on any weapon.
 *
 * It doesn't work. Neither on tick nor OnKeyDown
 *
 * Hash: 0xC8B46D7727D864AA | Since: 323 | API-Set: unknown
 */
export function enableLaserSightRendering(toggle) {
    EnableLaserSightRendering(toggle);
}
/**
 * `WEAPON::EXPLODE_PROJECTILES(PLAYER::PLAYER_PED_ID(), func_221(0x00000003), 0x00000001);`
 *
 * Hash: 0xFC4BD125DE7611E4 | Since: 323 | API-Set: unknown
 */
export function explodeProjectiles(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    ExplodeProjectiles(ped, weaponHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x44F1012B69313374 | Since: 573 | API-Set: unknown
 */
export function fireAirDefenceSphereAtPosition(zoneId, pos) {
    FireAirDefenseWeapon(zoneId, pos.x, pos.y, pos.z);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x2E1202248937775C | Since: 323 | API-Set: unknown
 */
export function getAmmoInClip(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetAmmoInClip(ped, weaponHash);
}
/**
 * `WEAPON::GET_AMMO_IN_PED_WEAPON(PLAYER::PLAYER_PED_ID(), a_0)`
 *
 * From decompiled scripts
 * Returns total ammo in weapon
 *
 * GTALua Example :
 * natives.WEAPON.GET_AMMO_IN_PED_WEAPON(plyPed, WeaponHash)
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x015A522136D7F951 | Since: 323 | API-Set: unknown
 */
export function getAmmoInPed(ped, weaponhash) {
    if (typeof weaponhash === 'string')
        weaponhash = GetHashKey(weaponhash);
    return GetAmmoInPedWeapon(ped, weaponhash);
}
/**
 * p1 is always 0 in the scripts.
 *
 * Hash: 0x8483E98E8B888AE2 | Since: 323 | API-Set: unknown
 */
export function getBestPed(ped) {
    return GetBestPedWeapon(ped, false);
}
/**
 * Example in VB
 *
 * Public Shared Function GetVehicleCurrentWeapon(Ped As Ped) As Integer
 * Dim arg As New OutputArgument()
 * Native.Function.Call(Hash.GET_CURRENT_PED_VEHICLE_WEAPON, Ped, arg)
 * Return arg.GetResult(Of Integer)()
 * End Function
 *
 * Usage:
 * If GetVehicleCurrentWeapon(Game.Player.Character) = -821520672 Then ...Do something
 * Note: -821520672 = VEHICLE_WEAPON_PLANE_ROCKET
 *
 * Hash: 0x1017582BCD3832DC | Since: 323 | API-Set: unknown
 */
export function getCurrentPedVehicle(ped) {
    return GetCurrentPedVehicleWeapon(ped);
}
/**
 * The return value seems to indicate returns true if the hash of the weapon object weapon equals the weapon hash.
 * p2 seems to be 1 most of the time.
 *
 *
 *
 *
 *
 * p2 is not implemented
 *
 * disassembly said that?
 *
 *
 * Hash: 0x3A87E44BB9A01D54 | Since: 323 | API-Set: unknown
 */
export function getCurrentPed(ped) {
    return GetCurrentPedWeapon(ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3B390A939AF0B5FC | Since: 323 | API-Set: unknown
 */
export function getCurrentPedEntityIndex(ped) {
    return GetCurrentPedWeaponEntityIndex(ped, undefined);
}
/**
 * gadgetHash - was always 0xFBAB5776 ("GADGET_PARACHUTE").
 *
 * Hash: 0xF731332072F5156C | Since: 323 | API-Set: unknown
 */
export function getIsPedGadgetEquipped(ped, gadgetHash) {
    if (typeof gadgetHash === 'string')
        gadgetHash = GetHashKey(gadgetHash);
    return GetIsPedGadgetEquipped(ped, gadgetHash);
}
/**
 * No comment provided
 *
 * Hash: 0x840F03E9041E2C9C | Since: 323 | API-Set: unknown
 */
export function getLockonDistanceOfCurrentPed(ped) {
    return GetLockonDistanceOfCurrentPedWeapon(ped);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xDC16122C7A20C933 | Since: 323 | API-Set: unknown
 */
export function getMaxAmmo(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetMaxAmmo(ped, weaponHash);
}
/**
 * Returns the max ammo for an ammo type. Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 *
 * Hash: 0x585847C5E4E11709 | Since: 1103 | API-Set: unknown
 */
export function getMaxAmmoByType(ped, ammoTypeHash) {
    if (typeof ammoTypeHash === 'string')
        ammoTypeHash = GetHashKey(ammoTypeHash);
    return GetMaxAmmoByType(ped, ammoTypeHash);
}
/**
 * p2 is mostly 1 in the scripts.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xA38DCFFCEA8962FA | Since: 323 | API-Set: unknown
 */
export function getMaxAmmoInClip(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetMaxAmmoInClip(ped, weaponHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x814C9D19DFD69679 | Since: 323 | API-Set: unknown
 */
export function getMaxRangeOfCurrentPed(ped) {
    return GetMaxRangeOfCurrentPedWeapon(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x39D22031557946C1 | Since: 323 | API-Set: unknown
 */
export function getPedAmmoByType(ped, ammoTypeHash) {
    if (typeof ammoTypeHash === 'string')
        ammoTypeHash = GetHashKey(ammoTypeHash);
    return GetPedAmmoByType(ped, ammoTypeHash);
}
/**
 * Returns the current ammo type of the specified ped's specified weapon.
 * MkII magazines will change the return value, like Pistol MkII returning AMMO_PISTOL without any components and returning AMMO_PISTOL_TRACER after Tracer Rounds component is attached.
 * Use 0xF489B44DD5AF4BD9 if you always want AMMO_PISTOL.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x7FEAD38B326B9F74 | Since: 323 | API-Set: unknown
 */
export function getPedAmmoTypeFrom(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetPedAmmoTypeFromWeapon(ped, weaponHash);
}
/**
 * Pass ped. Pass address of Vector3.
 * The coord will be put into the Vector3.
 * The return will determine whether there was a coord found or not.
 *
 * Hash: 0x6C4D0409BA1A2BC2 | Since: 323 | API-Set: unknown
 */
export function getPedLastImpactCoord(ped) {
    return GetPedLastWeaponImpactCoord(ped);
}
/**
 * Returns the base/default ammo type of the specified ped's specified weapon.
 * Use GET_PED_AMMO_TYPE_FROM_WEAPON if you want current ammo type (like AMMO_MG_INCENDIARY/AMMO_MG_TRACER while using MkII magazines) and use this if you want base ammo type. (AMMO_MG)
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xF489B44DD5AF4BD9 | Since: 1103 | API-Set: unknown
 */
export function getPedOriginalAmmoTypeFrom(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetPedAmmoTypeFromWeapon2(ped, weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0xEFFED78E9011134D | Since: 323 | API-Set: unknown
 */
export function getPedtypeInSlot(ped, weaponSlot) {
    if (typeof weaponSlot === 'string')
        weaponSlot = GetHashKey(weaponSlot);
    return GetPedWeapontypeInSlot(ped, weaponSlot);
}
/**
 * No comment provided
 *
 * Hash: 0xA2C9AC24B4061285 | Since: 1103 | API-Set: unknown
 */
export function getPedCamoIndex(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return Citizen.invokeNative('0xA2C9AC24B4061285', ped, weaponHash);
}
/**
 * Returns -1 if camoComponentHash is invalid/not attached to the weapon.
 * Full list of weapons, components, tint indexes & weapon liveries by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xF0A60040BE558F2D | Since: 1103 | API-Set: unknown
 */
export function getPedComponentTintIndex(ped, weaponHash, camoComponentHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof camoComponentHash === 'string')
        camoComponentHash = GetHashKey(camoComponentHash);
    return GetPedWeaponLiveryColor(ped, weaponHash, camoComponentHash);
}
/**
 * Full list of weapons, components & tint indexes by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x2B9EEDC07BD06B9F | Since: 323 | API-Set: unknown
 */
export function getPedTintIndex(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetPedWeaponTintIndex(ped, weaponHash);
}
/**
 * Returns the hash of the weapon.
 *
 * `var num7 = WEAPON::GET_SELECTED_PED_WEAPON(num4);`
 * sub_27D3(num7);
 * switch (num7)
 * {
 * case 0x24B17070:
 *
 * `Also see WEAPON::GET_CURRENT_PED_WEAPON. Difference?`
 *
 * -------------------------------------------------------------------------
 *
 * The difference is that GET_SELECTED_PED_WEAPON simply returns the ped's current weapon hash but GET_CURRENT_PED_WEAPON also checks the weapon object and returns true if the hash of the weapon object equals the weapon hash
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x0A6DB4965674D243 | Since: 323 | API-Set: unknown
 */
export function getSelectedPed(ped) {
    return GetSelectedPedWeapon(ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC3287EE3050FB74C | Since: 323 | API-Set: unknown
 */
export function gettypeGroup(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeapontypeGroup(weaponHash);
}
/**
 * Returns the model of any weapon.
 *
 * Can also take an ammo hash?
 * `sub_6663a(&l_115B, WEAPON::GET_WEAPONTYPE_MODEL(${ammo_rpg}));`
 *
 * Hash: 0xF46CDC33180FDA94 | Since: 323 | API-Set: unknown
 */
export function gettypeModel(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeapontypeModel(weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0x4215460B9B8B7FA0 | Since: 323 | API-Set: unknown
 */
export function gettypeSlot(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeapontypeSlot(weaponHash);
}
/**
 * // Returns the size of the default weapon component clip.
 *
 * Use it like this:
 *
 * char cClipSize[32];
 * Hash cur;
 * `if (WEAPON::GET_CURRENT_PED_WEAPON(playerPed, &cur, 1))`
 * {
 * `if (WEAPON::IS_WEAPON_VALID(cur))`
 * {
 * `int iClipSize = WEAPON::GET_WEAPON_CLIP_SIZE(cur);`
 * sprintf_s(cClipSize, "ClipSize: %.d", iClipSize);
 * vDrawString(cClipSize, 0.5f, 0.5f);
 * }
 * }
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x583BE370B1EC6EB4 | Since: 323 | API-Set: unknown
 */
export function getClipSize(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponClipSize(weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0xB3CAF387AE12E9F8 | Since: 323 | API-Set: unknown
 */
export function getComponentHudStats(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentHudStats(componentHash);
}
/**
 * No comment provided
 *
 * Hash: 0x0DB57B41EC1DB083 | Since: 323 | API-Set: unknown
 */
export function getComponentTypeModel(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentTypeModel(componentHash);
}
/**
 * Returns the amount of extra components the specified component has.
 * Returns -1 if the component isn't of type CWeaponComponentVariantModel.
 *
 * Hash: 0x6558AC7C17BFEF58 | Since: 372 | API-Set: unknown
 */
export function getComponentVariantExtraCount(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentVariantExtraComponentCount(componentHash);
}
/**
 * Returns the model hash of the extra component at specified index.
 *
 * Hash: 0x4D1CB8DC40208A17 | Since: 372 | API-Set: unknown
 */
export function getComponentVariantExtraModel(componentHash, extraComponentIndex) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentVariantExtraComponentModel(componentHash, extraComponentIndex);
}
/**
 * This native does not return damages of weapons from the melee and explosive group.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x3133B907D8B32053 | Since: 323 | API-Set: unknown
 */
export function getDamage(weaponHash, componentHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponDamage(weaponHash, componentHash);
}
/**
 * enum class eDamageType
 * {
 * UNKNOWN = 0,
 * NONE = 1,
 * MELEE = 2,
 * BULLET = 3,
 * BULLET_RUBBER = 4,
 * EXPLOSIVE = 5,
 * FIRE = 6,
 * COLLISION = 7,
 * FALL = 8,
 * DROWN = 9,
 * ELECTRIC = 10,
 * BARBED_WIRE = 11,
 * FIRE_EXTINGUISHER = 12,
 * SMOKE = 13,
 * WATER_CANNON = 14,
 * TRANQUILIZER = 15,
 * };
 *
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x3BE0BB12D25FB305 | Since: 323 | API-Set: unknown
 */
export function getDamageType(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponDamageType(weaponHash);
}
/**
 * struct WeaponHudStatsData
 * {
 * BYTE hudDamage; // 0x0000
 * char _0x0001[0x7]; // 0x0001
 * BYTE hudSpeed; // 0x0008
 * char _0x0009[0x7]; // 0x0009
 * BYTE hudCapacity; // 0x0010
 * char _0x0011[0x7]; // 0x0011
 * BYTE hudAccuracy; // 0x0018
 * char _0x0019[0x7]; // 0x0019
 * BYTE hudRange; // 0x0020
 * };
 *
 * Usage:
 *
 * WeaponHudStatsData data;
 * if (GET_WEAPON_HUD_STATS(weaponHash, (int *)&data))
 * {
 * // BYTE damagePercentage = data.hudDamage and so on
 * }
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xD92C739EE34C9EBA | Since: 323 | API-Set: unknown
 */
export function getHudStats(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponHudStats(weaponHash);
}
/**
 * Returns -1 if camoComponentHash is invalid/not attached to the weapon object.
 * Full list of weapons, components, tint indexes & weapon liveries by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xB3EA4FEABF41464B | Since: 1103 | API-Set: unknown
 */
export function getObjectComponentTintIndex(weaponObject, camoComponentHash) {
    if (typeof camoComponentHash === 'string')
        camoComponentHash = GetHashKey(camoComponentHash);
    return GetWeaponObjectLiveryColor(weaponObject, camoComponentHash);
}
/**
 * Drops the current weapon and returns the object
 *
 * Unknown behavior when unarmed.
 *
 * Hash: 0xCAE1DC9A0E22A16D | Since: 323 | API-Set: unknown
 */
export function getObjectFromPed(ped) {
    return GetWeaponObjectFromPed(ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xCD183314F7CD2E57 | Since: 323 | API-Set: unknown
 */
export function getObjectTintIndex(weapon) {
    return GetWeaponObjectTintIndex(weapon);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x065D2AACAD8CF7A4 | Since: 1290 | API-Set: unknown
 */
export function getTimeBetweenShots(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponTimeBetweenShots(weaponHash);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x5DCF6C5CAB2E9BF7 | Since: 323 | API-Set: unknown
 */
export function getTintCount(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponTintCount(weaponHash);
}
/**
 * Gives a weapon to PED with a delay, example:
 *
 * `WEAPON::GIVE_DELAYED_WEAPON_TO_PED(PED::PLAYER_PED_ID(), MISC::GET_HASH_KEY("WEAPON_PISTOL"), 1000, false)`
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xB282DC6EBD803C75 | Since: 323 | API-Set: unknown
 */
export function giveDelayedToPed(ped, weaponHash, ammoCount, bForceInHand) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    GiveDelayedWeaponToPed(ped, weaponHash, ammoCount, bForceInHand);
}
/**
 * Gives the specified loadout to the specified ped.
 * Loadouts are defined in common.rpf\data\ai\loadouts.meta
 *
 * Hash: 0x68F8BE6AF5CDF8A6 | Since: 505 | API-Set: unknown
 */
export function giveLoadoutToPed(ped, loadoutHash) {
    if (typeof loadoutHash === 'string')
        loadoutHash = GetHashKey(loadoutHash);
    GiveLoadoutToPed(ped, loadoutHash);
}
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xD966D51AA5B28BB9 | Since: 323 | API-Set: unknown
 */
export function giveComponentToPed(ped, weaponHash, componentHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    GiveWeaponComponentToPed(ped, weaponHash, componentHash);
}
/**
 * componentHash:
 * `(use WEAPON::GET_WEAPON_COMPONENT_TYPE_MODEL() to get hash value)`
 * ${component_at_ar_flsh}, ${component_at_ar_supp}, ${component_at_pi_flsh}, ${component_at_scope_large}, ${component_at_ar_supp_02}
 *
 * Hash: 0x33E179436C0B31DB | Since: 323 | API-Set: unknown
 */
export function giveComponentToWeaponObject(weaponObject, componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    GiveWeaponComponentToWeaponObject(weaponObject, componentHash);
}
/**
 * No comment provided
 *
 * Hash: 0xB1FA61371AF7C4B7 | Since: 323 | API-Set: unknown
 */
export function giveObjectToPed(weaponObject, ped) {
    GiveWeaponObjectToPed(weaponObject, ped);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xBF0FD6E56C964FCB | Since: 323 | API-Set: unknown
 */
export function giveToPed(ped, weaponHash, ammoCount, isHidden, bForceInHand) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    GiveWeaponToPed(ped, weaponHash, ammoCount, isHidden, bForceInHand);
}
/**
 * It determines what weapons caused damage:
 *
 * If you want to define only a specific weapon, second parameter=weapon hash code, third parameter=0
 * If you want to define any melee weapon, second parameter=0, third parameter=1.
 * If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x131D401334815E94 | Since: 323 | API-Set: unknown
 */
export function hasEntityBeenDamagedBy(entity, weaponHash, weaponType) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return HasEntityBeenDamagedByWeapon(entity, weaponHash, weaponType);
}
/**
 * It determines what weapons caused damage:
 *
 * If you want to define only a specific weapon, second parameter=weapon hash code, third parameter=0
 * If you want to define any melee weapon, second parameter=0, third parameter=1.
 * If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x2D343D2219CD027A | Since: 323 | API-Set: unknown
 */
export function hasPedBeenDamagedBy(ped, weaponHash, weaponType) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return HasPedBeenDamagedByWeapon(ped, weaponHash, weaponType);
}
/**
 * p2 should be FALSE, otherwise it seems to always return FALSE
 *
 * Bool does not check if the weapon is current equipped, unfortunately.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x8DECB02F88F428BC | Since: 323 | API-Set: unknown
 */
export function hasPedGot(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return HasPedGotWeapon(ped, weaponHash, false);
}
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xC593212475FAE340 | Since: 323 | API-Set: unknown
 */
export function hasPedGotComponent(ped, weaponHash, componentHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return HasPedGotWeaponComponent(ped, weaponHash, componentHash);
}
/**
 * Fourth Parameter = unsure, almost always -1
 *
 * Hash: 0x717C8481234E3B88 | Since: 323 | API-Set: unknown
 */
export function hasVehicleGotProjectileAttached(driver, vehicle, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return HasVehicleGotProjectileAttached(driver, vehicle, weaponHash, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x36E353271F0E90EE | Since: 323 | API-Set: unknown
 */
export function hasAssetLoaded(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return HasWeaponAssetLoaded(weaponHash);
}
/**
 * see DOES_WEAPON_TAKE_WEAPON_COMPONENT for full list of weapons & components
 *
 * Hash: 0x76A18844E743BF91 | Since: 323 | API-Set: unknown
 */
export function hasGotWeaponComponent(weapon, componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return HasWeaponGotWeaponComponent(weapon, componentHash);
}
/**
 * Hides the players weapon during a cutscene.
 *
 * Hash: 0x6F6981D2253C208F | Since: 323 | API-Set: unknown
 */
export function hidePedForScriptedCutscene(ped, toggle) {
    HidePedWeaponForScriptedCutscene(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xDAB963831DBFD3F4 | Since: 1103 | API-Set: unknown
 */
export function isAirDefenceSphereInArea(pos, radius) {
    return IsAnyAirDefenseZoneInsideSphere(pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x4B7620C47217126C | Since: 323 | API-Set: unknown
 */
export function isFlashLightOn(ped) {
    return IsFlashLightOn(ped);
}
/**
 * Checks if the ped is currently equipped with a weapon matching a bit specified using a bitwise-or in typeFlags.
 *
 * Type flag bit values:
 * 1 = Melee weapons
 * 2 = Explosive weapons
 * 4 = Any other weapons
 *
 * Not specifying any bit will lead to the native *always* returning 'false', and for example specifying '4 | 2' will check for any weapon except fists and melee weapons.
 * 7 returns true if you are equipped with any weapon except your fists.
 * 6 returns true if you are equipped with any weapon except melee weapons.
 * 5 returns true if you are equipped with any weapon except the Explosives weapon group.
 * 4 returns true if you are equipped with any weapon except Explosives weapon group AND melee weapons.
 * 3 returns true if you are equipped with either Explosives or Melee weapons (the exact opposite of 4).
 * 2 returns true only if you are equipped with any weapon from the Explosives weapon group.
 * 1 returns true only if you are equipped with any Melee weapon.
 * 0 never returns true.
 *
 * Note: When I say "Explosives weapon group", it does not include the Jerry can and Fire Extinguisher.
 *
 * Hash: 0x475768A975D5AD17 | Since: 323 | API-Set: unknown
 */
export function isPedArmed(ped, typeFlags) {
    return IsPedArmed(ped, typeFlags);
}
/**
 * This native returns a true or false value.
 *
 * Ped ped = The ped whose weapon you want to check.
 *
 * Hash: 0x65F0C5AE05943EC7 | Since: 323 | API-Set: unknown
 */
export function isPedCurrentSilenced(ped) {
    return IsPedCurrentWeaponSilenced(ped);
}
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x0D78DE0572D3969E | Since: 323 | API-Set: unknown
 */
export function isPedComponentActive(ped, weaponHash, componentHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return IsPedWeaponComponentActive(ped, weaponHash, componentHash);
}
/**
 * No comment provided
 *
 * Hash: 0xB80CA294F2F26749 | Since: 323 | API-Set: unknown
 */
export function isPedReadyToShoot(ped) {
    return IsPedWeaponReadyToShoot(ped);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x937C71165CF334B3 | Since: 323 | API-Set: unknown
 */
export function isValid(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return IsWeaponValid(weaponHash);
}
/**
 * Forces a ped to reload only if they are able to; if they have a full magazine, they will not reload.
 *
 * Hash: 0x20AE33F3AC9C0033 | Since: 323 | API-Set: unknown
 */
export function makePedReload(ped) {
    return MakePedReload(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8C0D57EA686FAD87 | Since: 323 | API-Set: unknown
 */
export function refillAmmoInstantly(ped) {
    return RefillAmmoInstantly(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0ABF535877897560 | Since: 573 | API-Set: unknown
 */
export function removeAirDefenceSphere(zoneId) {
    return RemoveAirDefenseZone(zoneId);
}
/**
 * No comment provided
 *
 * Hash: 0x1E45B34ADEBEE48E | Since: 573 | API-Set: unknown
 */
export function removeAllAirDefenceSpheres() {
    RemoveAllAirDefenseZones();
}
/**
 * setting the last params to false it does that same so I would suggest its not a toggle
 *
 * Hash: 0xF25DF915FA38C5F3 | Since: 323 | API-Set: unknown
 */
export function removeAllPeds(ped) {
    RemoveAllPedWeapons(ped, false);
}
/**
 * If `explode` true, then removal is done through exploding the projectile. Basically the same as EXPLODE_PROJECTILES but without defining the owner ped.
 *
 * Hash: 0xFC52E0F37E446528 | Since: 323 | API-Set: unknown
 */
export function removeAllProjectilesOfType(weaponHash, explode) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    RemoveAllProjectilesOfType(weaponHash, explode);
}
/**
 * No comment provided
 *
 * Hash: 0xAA08EF13F341C8FC | Since: 323 | API-Set: unknown
 */
export function removeAsset(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    RemoveWeaponAsset(weaponHash);
}
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x1E8BE90C74FB4C09 | Since: 323 | API-Set: unknown
 */
export function removeComponentFromPed(ped, weaponHash, componentHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    RemoveWeaponComponentFromPed(ped, weaponHash, componentHash);
}
/**
 * see DOES_WEAPON_TAKE_WEAPON_COMPONENT for full list of weapons & components
 *
 * Hash: 0xF7D82B0D66777611 | Since: 323 | API-Set: unknown
 */
export function removeComponentFromWeaponObject(_object, componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    RemoveWeaponComponentFromWeaponObject(_object, componentHash);
}
/**
 * This native removes a specified weapon from your selected ped.
 *
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
 *
 * C++:
 * `WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);`
 *
 * The code above removes the knife from the player.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x4899CB088EDF59B8 | Since: 323 | API-Set: unknown
 */
export function removeFromPed(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    RemoveWeaponFromPed(ped, weaponHash);
}
/**
 * Nearly every instance of p1 I found was 31. Nearly every instance of p2 I found was 0.
 *
 * REQUEST_WEAPON_ASSET(iLocal_1888, 31, 26);
 *
 * Hash: 0x5443438F033E29C3 | Since: 323 | API-Set: unknown
 */
export function requestAsset(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    RequestWeaponAsset(weaponHash, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x48164DBB970AC3F0 | Since: 323 | API-Set: unknown
 */
export function requestHighDetailModel(weaponObject) {
    RequestWeaponHighDetailModel(weaponObject);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xDCD2A934D65CB497 | Since: 323 | API-Set: unknown
 */
export function setAmmoInClip(ped, weaponHash, ammo) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return SetAmmoInClip(ped, weaponHash, ammo);
}
/**
 * Disable all weapons. Does the same as 0xB4771B9AAF4E68E4 except for all weapons.
 *
 * Hash: 0xEFF296097FF1E509 | Since: 1103 | API-Set: unknown
 */
export function setCanPedSelectAlls(ped, toggle) {
    SetCanPedEquipAllWeapons(ped, toggle);
}
/**
 * Disables selecting the given weapon. Ped isn't forced to put the gun away. However you can't reselect the weapon if you holster then unholster. Weapon is also grayed out on the weapon wheel.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xB4771B9AAF4E68E4 | Since: 1103 | API-Set: unknown
 */
export function setCanPedSelectInventory(ped, weaponHash, toggle) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetCanPedEquipWeapon(ped, weaponHash, toggle);
}
/**
 * Full list of weapons by DurtyFree (Search for VEHICLE_*): https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x75C55983C2C39DAA | Since: 323 | API-Set: unknown
 */
export function setCurrentPedVehicle(ped, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return SetCurrentPedVehicleWeapon(ped, weaponHash);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xADF692B254977C0C | Since: 323 | API-Set: unknown
 */
export function setCurrentPed(ped, weaponHash, bForceInHand) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetCurrentPedWeapon(ped, weaponHash, bForceInHand);
}
/**
 * No comment provided
 *
 * Hash: 0xE4DCEC7FD5B739A5 | Since: 323 | API-Set: unknown
 */
export function setEqippedStartSpinningAtFullSpeed(ped) {
    Citizen.invokeNative('0xE4DCEC7FD5B739A5', ped);
}
/**
 * Enables/disables flashlight on ped's weapon.
 *
 * Hash: 0x988DB6FE9B3AC000 | Since: 2060 | API-Set: unknown
 */
export function setFlashLightActiveHistory(ped, toggle) {
    SetFlashLightEnabled(ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xCEA66DAD478CD39B | Since: 323 | API-Set: unknown
 */
export function setFlashLightFadeDistance(distance) {
    return SetFlashLightFadeDistance(distance);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x14E56BC5B5DB6A19 | Since: 323 | API-Set: unknown
 */
export function setPedAmmo(ped, weaponHash, ammo) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetPedAmmo(ped, weaponHash, ammo, false);
}
/**
 * Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 *
 * Hash: 0x5FD1E1F011E76D7E | Since: 323 | API-Set: unknown
 */
export function setPedAmmoByType(ped, ammoTypeHash, ammo) {
    if (typeof ammoTypeHash === 'string')
        ammoTypeHash = GetHashKey(ammoTypeHash);
    SetPedAmmoByType(ped, ammoTypeHash, ammo);
}
/**
 * No comment provided
 *
 * Hash: 0xA4EFEF9440A5B0EF | Since: 323 | API-Set: unknown
 */
export function setPedAmmoToDrop(ped) {
    SetPedAmmoToDrop(ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8378627201D5497D | Since: 323 | API-Set: unknown
 */
export function setPedChanceOfFiringBlanks(ped, xBias, yBias) {
    SetPedChanceOfFiringBlanks(ped, xBias, yBias);
}
/**
 * Has 5 parameters since latest patches.
 *
 * Hash: 0x0725A4CCFDED9A70 | Since: 323 | API-Set: unknown
 */
export function setPedCurrentVisible(ped, visible, deselectWeapon) {
    SetPedCurrentWeaponVisible(ped, visible, deselectWeapon, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x50276EF8172F5F12 | Since: 1734 | API-Set: unknown
 */
export function setPedCycleVehiclesOnly(ped) {
    Citizen.invokeNative('0x50276EF8172F5F12', ped);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x208A1888007FC0E6 | Since: 323 | API-Set: unknown
 */
export function setPedDropsInventory(ped, weaponHash, xOffset, yOffset, zOffset, ammoCount) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetPedDropsInventoryWeapon(ped, weaponHash, xOffset, yOffset, zOffset, ammoCount);
}
/**
 * No comment provided
 *
 * Hash: 0x6B7513D9966FBEC0 | Since: 323 | API-Set: unknown
 */
export function setPedDrops(ped) {
    SetPedDropsWeapon(ped);
}
/**
 * No comment provided
 *
 * Hash: 0x476AE72C1D19D1A8 | Since: 323 | API-Set: unknown
 */
export function setPedDropssWhenDead(ped, toggle) {
    SetPedDropsWeaponsWhenDead(ped, toggle);
}
/**
 * p1/gadgetHash was always 0xFBAB5776 ("GADGET_PARACHUTE").
 * p2 is always true.
 *
 * Hash: 0xD0D7B1E680ED4A1A | Since: 323 | API-Set: unknown
 */
export function setPedGadget(ped, gadgetHash) {
    if (typeof gadgetHash === 'string')
        gadgetHash = GetHashKey(gadgetHash);
    SetPedGadget(ped, gadgetHash, false);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x3EDCB0505123623B | Since: 323 | API-Set: unknown
 */
export function setPedInfiniteAmmo(ped, toggle, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetPedInfiniteAmmo(ped, toggle, weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0x183DADC6AA953186 | Since: 323 | API-Set: unknown
 */
export function setPedInfiniteAmmoClip(ped, toggle) {
    SetPedInfiniteAmmoClip(ped, toggle);
}
/**
 * Returns handle of the projectile.
 *
 * Hash: 0xB4C8D77C80C0421E | Since: 323 | API-Set: unknown
 */
export function setPedShootOrdnance(ped) {
    return SetPedShootOrdnanceWeapon(ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x24C024BA8379A70A | Since: 1868 | API-Set: unknown
 */
export function setPedStunGunFiniteAmmo() {
    Citizen.invokeNative('0x24C024BA8379A70A', undefined, undefined);
}
/**
 * Colors:
 * 0 = Gray
 * 1 = Dark Gray
 * 2 = Black
 * 3 = White
 * 4 = Blue
 * 5 = Cyan
 * 6 = Aqua
 * 7 = Cool Blue
 * 8 = Dark Blue
 * 9 = Royal Blue
 * 10 = Plum
 * 11 = Dark Purple
 * 12 = Purple
 * 13 = Red
 * 14 = Wine Red
 * 15 = Magenta
 * 16 = Pink
 * 17 = Salmon
 * 18 = Hot Pink
 * 19 = Rust Orange
 * 20 = Brown
 * 21 = Earth
 * 22 = Orange
 * 23 = Light Orange
 * 24 = Dark Yellow
 * 25 = Yellow
 * 26 = Light Brown
 * 27 = Lime Green
 * 28 = Olive
 * 29 = Moss
 * 30 = Turquoise
 * 31 = Dark Green
 * Full list of weapons, components, tint indexes & weapon liveries by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x9FE5633880ECD8ED | Since: 1103 | API-Set: unknown
 */
export function setPedComponentTintIndex(ped, weaponHash, camoComponentHash, colorIndex) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof camoComponentHash === 'string')
        camoComponentHash = GetHashKey(camoComponentHash);
    SetPedWeaponLiveryColor(ped, weaponHash, camoComponentHash, colorIndex);
}
/**
 * tintIndex can be the following:
 *
 * 0 - Normal
 * 1 - Green
 * 2 - Gold
 * 3 - Pink
 * 4 - Army
 * 5 - LSPD
 * 6 - Orange
 * 7 - Platinum
 * Full list of weapons, components & tint indexes by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x50969B9B89ED5738 | Since: 323 | API-Set: unknown
 */
export function setPedTintIndex(ped, weaponHash, tintIndex) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetPedWeaponTintIndex(ped, weaponHash, tintIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xE620FD3512A04F18 | Since: 323 | API-Set: unknown
 */
export function setPickupAmmoAmountScaler() {
    SetPickupAmmoAmountScaler(0);
}
/**
 * No comment provided
 *
 * Hash: 0xECDC202B25E5CF48 | Since: 573 | API-Set: unknown
 */
export function setPlayerTargettableForAirDefenceSphere(player, zoneId, enable) {
    SetPlayerAirDefenseZoneFlag(player, zoneId, enable);
}
/**
 * Changes the selected ped aiming animation style.
 * Note : You must use GET_HASH_KEY!
 *
 * Strings to use with GET_HASH_KEY :
 *
 * "Ballistic",
 * "Default",
 * "Fat",
 * "Female",
 * "FirstPerson",
 * "FirstPersonAiming",
 * "FirstPersonFranklin",
 * "FirstPersonFranklinAiming",
 * "FirstPersonFranklinRNG",
 * "FirstPersonFranklinScope",
 * "FirstPersonMPFemale",
 * "FirstPersonMichael",
 * "FirstPersonMichaelAiming",
 * "FirstPersonMichaelRNG",
 * "FirstPersonMichaelScope",
 * "FirstPersonRNG",
 * "FirstPersonScope",
 * "FirstPersonTrevor",
 * "FirstPersonTrevorAiming",
 * "FirstPersonTrevorRNG",
 * "FirstPersonTrevorScope",
 * "Franklin",
 * "Gang",
 * "Gang1H",
 * "GangFemale",
 * "Hillbilly",
 * "MP_F_Freemode",
 * "Michael",
 * "SuperFat",
 * "Trevor"
 *
 * Hash: 0x1055AC3A667F09D9 | Since: 323 | API-Set: unknown
 */
export function setAnimationOverride(ped, animStyle) {
    if (typeof animStyle === 'string')
        animStyle = GetHashKey(animStyle);
    SetWeaponAnimationOverride(ped, animStyle);
}
/**
 * No comment provided
 *
 * Hash: 0x4AE5AC8B852D642C | Since: 2372 | API-Set: unknown
 */
export function setAoeModifier(weaponHash, multiplier) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetWeaponExplosionRadiusMultiplier(weaponHash, multiplier);
}
/**
 * Changes the weapon damage output by the given multiplier value. Must be run every frame.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x4757F00BC6323CFE | Since: 505 | API-Set: unknown
 */
export function setDamageModifier(weaponHash, damageMultiplier) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetWeaponDamageModifier(weaponHash, damageMultiplier);
}
/**
 * `ex, WEAPON::SET_WEAPON_EFFECT_DURATION_MODIFIER(joaat("vehicle_weapon_mine_slick"), 1.0);`
 *
 * Hash: 0xE6D2CEDD370FF98E | Since: 2372 | API-Set: unknown
 */
export function setEffectDurationModifier(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    Citizen.invokeNative('0xE6D2CEDD370FF98E', p0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x977CA98939E82E4B | Since: 1103 | API-Set: unknown
 */
export function setObjectCamoIndex(weaponObject) {
    Citizen.invokeNative('0x977CA98939E82E4B', weaponObject, 0);
}
/**
 * Colors:
 * 0 = Gray
 * 1 = Dark Gray
 * 2 = Black
 * 3 = White
 * 4 = Blue
 * 5 = Cyan
 * 6 = Aqua
 * 7 = Cool Blue
 * 8 = Dark Blue
 * 9 = Royal Blue
 * 10 = Plum
 * 11 = Dark Purple
 * 12 = Purple
 * 13 = Red
 * 14 = Wine Red
 * 15 = Magenta
 * 16 = Pink
 * 17 = Salmon
 * 18 = Hot Pink
 * 19 = Rust Orange
 * 20 = Brown
 * 21 = Earth
 * 22 = Orange
 * 23 = Light Orange
 * 24 = Dark Yellow
 * 25 = Yellow
 * 26 = Light Brown
 * 27 = Lime Green
 * 28 = Olive
 * 29 = Moss
 * 30 = Turquoise
 * 31 = Dark Green
 * Full list of weapons, components, tint indexes & weapon liveries by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x5DA825A85D0EA6E6 | Since: 1103 | API-Set: unknown
 */
export function setObjectComponentTintIndex(weaponObject, camoComponentHash, colorIndex) {
    if (typeof camoComponentHash === 'string')
        camoComponentHash = GetHashKey(camoComponentHash);
    SetWeaponObjectLiveryColor(weaponObject, camoComponentHash, colorIndex);
}
/**
 * Full list of weapons, components & tint indexes by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xF827589017D4E4A9 | Since: 323 | API-Set: unknown
 */
export function setObjectTintIndex(weapon, tintIndex) {
    SetWeaponObjectTintIndex(weapon, tintIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x2857938C5D407AFA | Since: 3407 | API-Set: unknown
 */
export function getAmmoInVehicleClip(vehicle, seat) {
    return Citizen.invokeNative('0x2857938C5D407AFA', vehicle, seat);
}
/**
 * No comment provided
 *
 * Hash: 0xC8C6F4B1CDEB40EF | Since: 3407 | API-Set: unknown
 */
export function getTimeBeforeVehicleReloadFinishes(vehicle, seat) {
    return Citizen.invokeNative('0xC8C6F4B1CDEB40EF', vehicle, seat);
}
/**
 * No comment provided
 *
 * Hash: 0xD0AD348FFD7A6868 | Since: 3407 | API-Set: unknown
 */
export function getVehicleReloadTime(vehicle, seat) {
    return Citizen.invokeNative('0xD0AD348FFD7A6868', vehicle, seat);
}
/**
 * No comment provided
 *
 * Hash: 0x8062F07153F4446F | Since: 3407 | API-Set: unknown
 */
export function hasReloadingInVehicle(vehicle, seat) {
    return Citizen.invokeNative('0x8062F07153F4446F', vehicle, seat);
}
/**
 * No comment provided
 *
 * Hash: 0x873906720EE842C3 | Since: 3407 | API-Set: unknown
 */
export function setAmmoInVehicleClip(vehicle, seat, ammo) {
    return Citizen.invokeNative('0x873906720EE842C3', vehicle, seat, ammo);
}
/**
 * No comment provided
 *
 * Hash: 0x1091922715B68DF0 | Since: 3095 | API-Set: unknown
 */
export function setPedDamageModifier(weapon, damageModifier) {
    if (typeof weapon === 'string')
        weapon = GetHashKey(weapon);
    Citizen.invokeNative('0x1091922715B68DF0', weapon, damageModifier);
}
/**
 * No comment provided
 *
 * Hash: 0x5B1513F27F279A44 | Since: 3407 | API-Set: unknown
 */
export function triggerVehicleReload(vehicle, seat, ped) {
    return Citizen.invokeNative('0x5B1513F27F279A44', vehicle, seat, ped);
}
