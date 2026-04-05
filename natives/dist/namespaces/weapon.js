import { IEntity, IPed, IPlayer, IVehicle, IObject } from '@risinglife/fivem-shared';
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x78F0424C34306220 | Since: 323
 */
export function addAmmoToPed(ped, weaponHash, ammo) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    AddAmmoToPed(_ped, weaponHash, ammo);
}
/**
 * Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 *
 * Hash: 0x2472622CE1F2D45F | Since: 1103
 */
export function addPedAmmoByType(ped, ammoTypeHash, ammo) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof ammoTypeHash === 'string')
        ammoTypeHash = GetHashKey(ammoTypeHash);
    AddAmmoToPedByType(_ped, ammoTypeHash, ammo);
}
/**
 * this returns if you can use the weapon while using a parachute
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xBC7BE5ABC0879F74 | Since: 323
 */
export function canUseOnParachute(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return CanUseWeaponOnParachute(weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0xAC678E40BE7C74D2 | Since: 323
 */
export function clearEntityLastDamage(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ClearEntityLastWeaponDamage(_entity);
}
/**
 * Does NOT seem to work with HAS_PED_BEEN_DAMAGED_BY_WEAPON. Use CLEAR_ENTITY_LAST_WEAPON_DAMAGE and HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON instead.
 *
 * Hash: 0x0E98F88A24C5F4B8 | Since: 323
 */
export function clearPedLastDamage(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedLastWeaponDamage(_ped);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x9DA58CDBF6BDBC08 | Since: 1011
 */
export function createAirDefenceAngledArea(radius, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return CreateAirDefenseArea(0, 0, 0, 0, 0, 0, 0, 0, 0, radius, weaponHash);
}
/**
 * Both coordinates are from objects in the decompiled scripts. Native related to 0xECDC202B25E5CF48 p1 value. The only weapon hash used in the decompiled scripts is weapon_air_defence_gun. These two natives are used by the yacht script, decompiled scripts suggest it and the weapon hash used (valkyrie's rockets) are also used by yachts.
 *
 * Hash: 0x91EF34584710BE99 | Since: 573
 */
export function createAirDefenceSphere(pos, radius, weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return CreateAirDefenseSphere(pos.x, pos.y, pos.z, radius, 0, 0, 0, weaponHash);
}
/**
 * Now has 8 params.
 *
 * Hash: 0x9541D3CF0D398F36 | Since: 323
 */
export function createObject(weaponHash, ammoCount, pos, showWorldModel, scale) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return CreateWeaponObject(weaponHash, ammoCount, pos.x, pos.y, pos.z, showWorldModel, scale, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCD79A550999D7D4F | Since: 678
 */
export function doesAirDefenceSphereExist(zoneId) {
    return DoesAirDefenseZoneExist(zoneId);
}
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x5CEE3DF569CECAB0 | Since: 323
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
 * Hash: 0xC8B46D7727D864AA | Since: 323
 */
export function enableLaserSightRendering(toggle) {
    EnableLaserSightRendering(toggle);
}
/**
 * `WEAPON::EXPLODE_PROJECTILES(PLAYER::PLAYER_PED_ID(), func_221(0x00000003), 0x00000001);`
 *
 * Hash: 0xFC4BD125DE7611E4 | Since: 323
 */
export function explodeProjectiles(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    ExplodeProjectiles(_ped, weaponHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x44F1012B69313374 | Since: 573
 */
export function fireAirDefenceSphereAtPosition(zoneId, pos) {
    FireAirDefenseWeapon(zoneId, pos.x, pos.y, pos.z);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x2E1202248937775C | Since: 323
 */
export function getAmmoInClip(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetAmmoInClip(_ped, weaponHash);
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
 * Hash: 0x015A522136D7F951 | Since: 323
 */
export function getAmmoInPed(ped, weaponhash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponhash === 'string')
        weaponhash = GetHashKey(weaponhash);
    return GetAmmoInPedWeapon(_ped, weaponhash);
}
/**
 * p1 is always 0 in the scripts.
 *
 * Hash: 0x8483E98E8B888AE2 | Since: 323
 */
export function getBestPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetBestPedWeapon(_ped, false);
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
 * Hash: 0x1017582BCD3832DC | Since: 323
 */
export function getCurrentPedVehicle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetCurrentPedVehicleWeapon(_ped);
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
 * Hash: 0x3A87E44BB9A01D54 | Since: 323
 */
export function getCurrentPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetCurrentPedWeapon(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3B390A939AF0B5FC | Since: 323
 */
export function getCurrentPedEntityIndex(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetCurrentPedWeaponEntityIndex(_ped, undefined);
}
/**
 * gadgetHash - was always 0xFBAB5776 ("GADGET_PARACHUTE").
 *
 * Hash: 0xF731332072F5156C | Since: 323
 */
export function getIsPedGadgetEquipped(ped, gadgetHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof gadgetHash === 'string')
        gadgetHash = GetHashKey(gadgetHash);
    return GetIsPedGadgetEquipped(_ped, gadgetHash);
}
/**
 * No comment provided
 *
 * Hash: 0x840F03E9041E2C9C | Since: 323
 */
export function getLockonDistanceOfCurrentPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLockonDistanceOfCurrentPedWeapon(_ped);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xDC16122C7A20C933 | Since: 323
 */
export function getMaxAmmo(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetMaxAmmo(_ped, weaponHash);
}
/**
 * Returns the max ammo for an ammo type. Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 *
 * Hash: 0x585847C5E4E11709 | Since: 1103
 */
export function getMaxAmmoByType(ped, ammoTypeHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof ammoTypeHash === 'string')
        ammoTypeHash = GetHashKey(ammoTypeHash);
    return GetMaxAmmoByType(_ped, ammoTypeHash);
}
/**
 * p2 is mostly 1 in the scripts.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xA38DCFFCEA8962FA | Since: 323
 */
export function getMaxAmmoInClip(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetMaxAmmoInClip(_ped, weaponHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x814C9D19DFD69679 | Since: 323
 */
export function getMaxRangeOfCurrentPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetMaxRangeOfCurrentPedWeapon(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x39D22031557946C1 | Since: 323
 */
export function getPedAmmoByType(ped, ammoTypeHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof ammoTypeHash === 'string')
        ammoTypeHash = GetHashKey(ammoTypeHash);
    return GetPedAmmoByType(_ped, ammoTypeHash);
}
/**
 * Returns the current ammo type of the specified ped's specified weapon.
 * MkII magazines will change the return value, like Pistol MkII returning AMMO_PISTOL without any components and returning AMMO_PISTOL_TRACER after Tracer Rounds component is attached.
 * Use 0xF489B44DD5AF4BD9 if you always want AMMO_PISTOL.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x7FEAD38B326B9F74 | Since: 323
 */
export function getPedAmmoTypeFrom(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetPedAmmoTypeFromWeapon(_ped, weaponHash);
}
/**
 * Pass ped. Pass address of Vector3.
 * The coord will be put into the Vector3.
 * The return will determine whether there was a coord found or not.
 *
 * Hash: 0x6C4D0409BA1A2BC2 | Since: 323
 */
export function getPedLastImpactCoord(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedLastWeaponImpactCoord(_ped);
}
/**
 * Returns the base/default ammo type of the specified ped's specified weapon.
 * Use GET_PED_AMMO_TYPE_FROM_WEAPON if you want current ammo type (like AMMO_MG_INCENDIARY/AMMO_MG_TRACER while using MkII magazines) and use this if you want base ammo type. (AMMO_MG)
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xF489B44DD5AF4BD9 | Since: 1103
 */
export function getPedOriginalAmmoTypeFrom(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetPedAmmoTypeFromWeapon2(_ped, weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0xEFFED78E9011134D | Since: 323
 */
export function getPedtypeInSlot(ped, weaponSlot) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponSlot === 'string')
        weaponSlot = GetHashKey(weaponSlot);
    return GetPedWeapontypeInSlot(_ped, weaponSlot);
}
/**
 * No comment provided
 *
 * Hash: 0xA2C9AC24B4061285 | Since: 1103
 */
export function getPedCamoIndex(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return Citizen.invokeNative('0xA2C9AC24B4061285', _ped, weaponHash);
}
/**
 * Returns -1 if camoComponentHash is invalid/not attached to the weapon.
 * Full list of weapons, components, tint indexes & weapon liveries by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xF0A60040BE558F2D | Since: 1103
 */
export function getPedComponentTintIndex(ped, weaponHash, camoComponentHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof camoComponentHash === 'string')
        camoComponentHash = GetHashKey(camoComponentHash);
    return GetPedWeaponLiveryColor(_ped, weaponHash, camoComponentHash);
}
/**
 * Full list of weapons, components & tint indexes by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x2B9EEDC07BD06B9F | Since: 323
 */
export function getPedTintIndex(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetPedWeaponTintIndex(_ped, weaponHash);
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
 * Hash: 0x0A6DB4965674D243 | Since: 323
 */
export function getSelectedPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetSelectedPedWeapon(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC3287EE3050FB74C | Since: 323
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
 * Hash: 0xF46CDC33180FDA94 | Since: 323
 */
export function gettypeModel(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeapontypeModel(weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0x4215460B9B8B7FA0 | Since: 323
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
 * Hash: 0x583BE370B1EC6EB4 | Since: 323
 */
export function getClipSize(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponClipSize(weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0xB3CAF387AE12E9F8 | Since: 323
 */
export function getComponentHudStats(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentHudStats(componentHash);
}
/**
 * No comment provided
 *
 * Hash: 0x0DB57B41EC1DB083 | Since: 323
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
 * Hash: 0x6558AC7C17BFEF58 | Since: 372
 */
export function getComponentVariantExtraCount(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentVariantExtraComponentCount(componentHash);
}
/**
 * Returns the model hash of the extra component at specified index.
 *
 * Hash: 0x4D1CB8DC40208A17 | Since: 372
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
 * Hash: 0x3133B907D8B32053 | Since: 323
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
 * Hash: 0x3BE0BB12D25FB305 | Since: 323
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
 * Hash: 0xD92C739EE34C9EBA | Since: 323
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
 * Hash: 0xB3EA4FEABF41464B | Since: 1103
 */
export function getObjectComponentTintIndex(weaponObject, camoComponentHash) {
    const _weaponObject = weaponObject instanceof IObject ? weaponObject.handle() : weaponObject;
    if (typeof camoComponentHash === 'string')
        camoComponentHash = GetHashKey(camoComponentHash);
    return GetWeaponObjectLiveryColor(_weaponObject, camoComponentHash);
}
/**
 * Drops the current weapon and returns the object
 *
 * Unknown behavior when unarmed.
 *
 * Hash: 0xCAE1DC9A0E22A16D | Since: 323
 */
export function getObjectFromPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetWeaponObjectFromPed(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xCD183314F7CD2E57 | Since: 323
 */
export function getObjectTintIndex(weapon) {
    const _weapon = weapon instanceof IObject ? weapon.handle() : weapon;
    return GetWeaponObjectTintIndex(_weapon);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x065D2AACAD8CF7A4 | Since: 1290
 */
export function getTimeBetweenShots(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponTimeBetweenShots(weaponHash);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x5DCF6C5CAB2E9BF7 | Since: 323
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
 * Hash: 0xB282DC6EBD803C75 | Since: 323
 */
export function giveDelayedToPed(ped, weaponHash, ammoCount, bForceInHand) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    GiveDelayedWeaponToPed(_ped, weaponHash, ammoCount, bForceInHand);
}
/**
 * Gives the specified loadout to the specified ped.
 * Loadouts are defined in common.rpf\data\ai\loadouts.meta
 *
 * Hash: 0x68F8BE6AF5CDF8A6 | Since: 505
 */
export function giveLoadoutToPed(ped, loadoutHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof loadoutHash === 'string')
        loadoutHash = GetHashKey(loadoutHash);
    GiveLoadoutToPed(_ped, loadoutHash);
}
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xD966D51AA5B28BB9 | Since: 323
 */
export function giveComponentToPed(ped, weaponHash, componentHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    GiveWeaponComponentToPed(_ped, weaponHash, componentHash);
}
/**
 * componentHash:
 * `(use WEAPON::GET_WEAPON_COMPONENT_TYPE_MODEL() to get hash value)`
 * ${component_at_ar_flsh}, ${component_at_ar_supp}, ${component_at_pi_flsh}, ${component_at_scope_large}, ${component_at_ar_supp_02}
 *
 * Hash: 0x33E179436C0B31DB | Since: 323
 */
export function giveComponentToWeaponObject(weaponObject, componentHash) {
    const _weaponObject = weaponObject instanceof IObject ? weaponObject.handle() : weaponObject;
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    GiveWeaponComponentToWeaponObject(_weaponObject, componentHash);
}
/**
 * No comment provided
 *
 * Hash: 0xB1FA61371AF7C4B7 | Since: 323
 */
export function giveObjectToPed(weaponObject, ped) {
    const _weaponObject = weaponObject instanceof IObject ? weaponObject.handle() : weaponObject;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    GiveWeaponObjectToPed(_weaponObject, _ped);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xBF0FD6E56C964FCB | Since: 323
 */
export function giveToPed(ped, weaponHash, ammoCount, isHidden, bForceInHand) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    GiveWeaponToPed(_ped, weaponHash, ammoCount, isHidden, bForceInHand);
}
/**
 * It determines what weapons caused damage:
 *
 * If you want to define only a specific weapon, second parameter=weapon hash code, third parameter=0
 * If you want to define any melee weapon, second parameter=0, third parameter=1.
 * If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x131D401334815E94 | Since: 323
 */
export function hasEntityBeenDamagedBy(entity, weaponHash, weaponType) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return HasEntityBeenDamagedByWeapon(_entity, weaponHash, weaponType);
}
/**
 * It determines what weapons caused damage:
 *
 * If you want to define only a specific weapon, second parameter=weapon hash code, third parameter=0
 * If you want to define any melee weapon, second parameter=0, third parameter=1.
 * If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x2D343D2219CD027A | Since: 323
 */
export function hasPedBeenDamagedBy(ped, weaponHash, weaponType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return HasPedBeenDamagedByWeapon(_ped, weaponHash, weaponType);
}
/**
 * p2 should be FALSE, otherwise it seems to always return FALSE
 *
 * Bool does not check if the weapon is current equipped, unfortunately.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x8DECB02F88F428BC | Since: 323
 */
export function hasPedGot(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return HasPedGotWeapon(_ped, weaponHash, false);
}
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xC593212475FAE340 | Since: 323
 */
export function hasPedGotComponent(ped, weaponHash, componentHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return HasPedGotWeaponComponent(_ped, weaponHash, componentHash);
}
/**
 * Fourth Parameter = unsure, almost always -1
 *
 * Hash: 0x717C8481234E3B88 | Since: 323
 */
export function hasVehicleGotProjectileAttached(driver, vehicle, weaponHash) {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return HasVehicleGotProjectileAttached(_driver, _vehicle, weaponHash, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x36E353271F0E90EE | Since: 323
 */
export function hasAssetLoaded(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return HasWeaponAssetLoaded(weaponHash);
}
/**
 * see DOES_WEAPON_TAKE_WEAPON_COMPONENT for full list of weapons & components
 *
 * Hash: 0x76A18844E743BF91 | Since: 323
 */
export function hasGotWeaponComponent(weapon, componentHash) {
    const _weapon = weapon instanceof IObject ? weapon.handle() : weapon;
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return HasWeaponGotWeaponComponent(_weapon, componentHash);
}
/**
 * Hides the players weapon during a cutscene.
 *
 * Hash: 0x6F6981D2253C208F | Since: 323
 */
export function hidePedForScriptedCutscene(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    HidePedWeaponForScriptedCutscene(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xDAB963831DBFD3F4 | Since: 1103
 */
export function isAirDefenceSphereInArea(pos, radius) {
    return IsAnyAirDefenseZoneInsideSphere(pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x4B7620C47217126C | Since: 323
 */
export function isFlashLightOn(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsFlashLightOn(_ped);
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
 * Hash: 0x475768A975D5AD17 | Since: 323
 */
export function isPedArmed(ped, typeFlags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedArmed(_ped, typeFlags);
}
/**
 * This native returns a true or false value.
 *
 * Ped ped = The ped whose weapon you want to check.
 *
 * Hash: 0x65F0C5AE05943EC7 | Since: 323
 */
export function isPedCurrentSilenced(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedCurrentWeaponSilenced(_ped);
}
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x0D78DE0572D3969E | Since: 323
 */
export function isPedComponentActive(ped, weaponHash, componentHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return IsPedWeaponComponentActive(_ped, weaponHash, componentHash);
}
/**
 * No comment provided
 *
 * Hash: 0xB80CA294F2F26749 | Since: 323
 */
export function isPedReadyToShoot(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedWeaponReadyToShoot(_ped);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x937C71165CF334B3 | Since: 323
 */
export function isValid(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return IsWeaponValid(weaponHash);
}
/**
 * Forces a ped to reload only if they are able to; if they have a full magazine, they will not reload.
 *
 * Hash: 0x20AE33F3AC9C0033 | Since: 323
 */
export function makePedReload(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return MakePedReload(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8C0D57EA686FAD87 | Since: 323
 */
export function refillAmmoInstantly(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return RefillAmmoInstantly(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0ABF535877897560 | Since: 573
 */
export function removeAirDefenceSphere(zoneId) {
    return RemoveAirDefenseZone(zoneId);
}
/**
 * No comment provided
 *
 * Hash: 0x1E45B34ADEBEE48E | Since: 573
 */
export function removeAllAirDefenceSpheres() {
    RemoveAllAirDefenseZones();
}
/**
 * setting the last params to false it does that same so I would suggest its not a toggle
 *
 * Hash: 0xF25DF915FA38C5F3 | Since: 323
 */
export function removeAllPeds(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemoveAllPedWeapons(_ped, false);
}
/**
 * If `explode` true, then removal is done through exploding the projectile. Basically the same as EXPLODE_PROJECTILES but without defining the owner ped.
 *
 * Hash: 0xFC52E0F37E446528 | Since: 323
 */
export function removeAllProjectilesOfType(weaponHash, explode) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    RemoveAllProjectilesOfType(weaponHash, explode);
}
/**
 * No comment provided
 *
 * Hash: 0xAA08EF13F341C8FC | Since: 323
 */
export function removeAsset(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    RemoveWeaponAsset(weaponHash);
}
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x1E8BE90C74FB4C09 | Since: 323
 */
export function removeComponentFromPed(ped, weaponHash, componentHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    RemoveWeaponComponentFromPed(_ped, weaponHash, componentHash);
}
/**
 * see DOES_WEAPON_TAKE_WEAPON_COMPONENT for full list of weapons & components
 *
 * Hash: 0xF7D82B0D66777611 | Since: 323
 */
export function removeComponentFromWeaponObject(_object, componentHash) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    RemoveWeaponComponentFromWeaponObject(__object, componentHash);
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
 * Hash: 0x4899CB088EDF59B8 | Since: 323
 */
export function removeFromPed(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    RemoveWeaponFromPed(_ped, weaponHash);
}
/**
 * Nearly every instance of p1 I found was 31. Nearly every instance of p2 I found was 0.
 *
 * REQUEST_WEAPON_ASSET(iLocal_1888, 31, 26);
 *
 * Hash: 0x5443438F033E29C3 | Since: 323
 */
export function requestAsset(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    RequestWeaponAsset(weaponHash, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x48164DBB970AC3F0 | Since: 323
 */
export function requestHighDetailModel(weaponObject) {
    const _weaponObject = weaponObject instanceof IEntity ? weaponObject.handle() : weaponObject;
    RequestWeaponHighDetailModel(_weaponObject);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xDCD2A934D65CB497 | Since: 323
 */
export function setAmmoInClip(ped, weaponHash, ammo) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return SetAmmoInClip(_ped, weaponHash, ammo);
}
/**
 * Disable all weapons. Does the same as 0xB4771B9AAF4E68E4 except for all weapons.
 *
 * Hash: 0xEFF296097FF1E509 | Since: 1103
 */
export function setCanPedSelectAlls(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetCanPedEquipAllWeapons(_ped, toggle);
}
/**
 * Disables selecting the given weapon. Ped isn't forced to put the gun away. However you can't reselect the weapon if you holster then unholster. Weapon is also grayed out on the weapon wheel.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xB4771B9AAF4E68E4 | Since: 1103
 */
export function setCanPedSelectInventory(ped, weaponHash, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetCanPedEquipWeapon(_ped, weaponHash, toggle);
}
/**
 * Full list of weapons by DurtyFree (Search for VEHICLE_*): https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x75C55983C2C39DAA | Since: 323
 */
export function setCurrentPedVehicle(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return SetCurrentPedVehicleWeapon(_ped, weaponHash);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xADF692B254977C0C | Since: 323
 */
export function setCurrentPed(ped, weaponHash, bForceInHand) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetCurrentPedWeapon(_ped, weaponHash, bForceInHand);
}
/**
 * No comment provided
 *
 * Hash: 0xE4DCEC7FD5B739A5 | Since: 323
 */
export function setEqippedStartSpinningAtFullSpeed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xE4DCEC7FD5B739A5', _ped);
}
/**
 * Enables/disables flashlight on ped's weapon.
 *
 * Hash: 0x988DB6FE9B3AC000 | Since: 2060
 */
export function setFlashLightActiveHistory(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetFlashLightEnabled(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xCEA66DAD478CD39B | Since: 323
 */
export function setFlashLightFadeDistance(distance) {
    return SetFlashLightFadeDistance(distance);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x14E56BC5B5DB6A19 | Since: 323
 */
export function setPedAmmo(ped, weaponHash, ammo) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetPedAmmo(_ped, weaponHash, ammo, false);
}
/**
 * Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 *
 * Hash: 0x5FD1E1F011E76D7E | Since: 323
 */
export function setPedAmmoByType(ped, ammoTypeHash, ammo) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof ammoTypeHash === 'string')
        ammoTypeHash = GetHashKey(ammoTypeHash);
    SetPedAmmoByType(_ped, ammoTypeHash, ammo);
}
/**
 * No comment provided
 *
 * Hash: 0xA4EFEF9440A5B0EF | Since: 323
 */
export function setPedAmmoToDrop(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAmmoToDrop(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8378627201D5497D | Since: 323
 */
export function setPedChanceOfFiringBlanks(ped, xBias, yBias) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedChanceOfFiringBlanks(_ped, xBias, yBias);
}
/**
 * Has 5 parameters since latest patches.
 *
 * Hash: 0x0725A4CCFDED9A70 | Since: 323
 */
export function setPedCurrentVisible(ped, visible, deselectWeapon) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCurrentWeaponVisible(_ped, visible, deselectWeapon, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x50276EF8172F5F12 | Since: 1734
 */
export function setPedCycleVehiclesOnly(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x50276EF8172F5F12', _ped);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x208A1888007FC0E6 | Since: 323
 */
export function setPedDropsInventory(ped, weaponHash, xOffset, yOffset, zOffset, ammoCount) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetPedDropsInventoryWeapon(_ped, weaponHash, xOffset, yOffset, zOffset, ammoCount);
}
/**
 * No comment provided
 *
 * Hash: 0x6B7513D9966FBEC0 | Since: 323
 */
export function setPedDrops(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDropsWeapon(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x476AE72C1D19D1A8 | Since: 323
 */
export function setPedDropssWhenDead(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDropsWeaponsWhenDead(_ped, toggle);
}
/**
 * p1/gadgetHash was always 0xFBAB5776 ("GADGET_PARACHUTE").
 * p2 is always true.
 *
 * Hash: 0xD0D7B1E680ED4A1A | Since: 323
 */
export function setPedGadget(ped, gadgetHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof gadgetHash === 'string')
        gadgetHash = GetHashKey(gadgetHash);
    SetPedGadget(_ped, gadgetHash, false);
}
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x3EDCB0505123623B | Since: 323
 */
export function setPedInfiniteAmmo(ped, toggle, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetPedInfiniteAmmo(_ped, toggle, weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0x183DADC6AA953186 | Since: 323
 */
export function setPedInfiniteAmmoClip(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedInfiniteAmmoClip(_ped, toggle);
}
/**
 * Returns handle of the projectile.
 *
 * Hash: 0xB4C8D77C80C0421E | Since: 323
 */
export function setPedShootOrdnance(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedShootOrdnanceWeapon(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x24C024BA8379A70A | Since: 1868
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
 * Hash: 0x9FE5633880ECD8ED | Since: 1103
 */
export function setPedComponentTintIndex(ped, weaponHash, camoComponentHash, colorIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    if (typeof camoComponentHash === 'string')
        camoComponentHash = GetHashKey(camoComponentHash);
    SetPedWeaponLiveryColor(_ped, weaponHash, camoComponentHash, colorIndex);
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
 * Hash: 0x50969B9B89ED5738 | Since: 323
 */
export function setPedTintIndex(ped, weaponHash, tintIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetPedWeaponTintIndex(_ped, weaponHash, tintIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xE620FD3512A04F18 | Since: 323
 */
export function setPickupAmmoAmountScaler() {
    SetPickupAmmoAmountScaler(0);
}
/**
 * No comment provided
 *
 * Hash: 0xECDC202B25E5CF48 | Since: 573
 */
export function setPlayerTargettableForAirDefenceSphere(player, zoneId, enable) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerAirDefenseZoneFlag(_player, zoneId, enable);
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
 * Hash: 0x1055AC3A667F09D9 | Since: 323
 */
export function setAnimationOverride(ped, animStyle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof animStyle === 'string')
        animStyle = GetHashKey(animStyle);
    SetWeaponAnimationOverride(_ped, animStyle);
}
/**
 * No comment provided
 *
 * Hash: 0x4AE5AC8B852D642C | Since: 2372
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
 * Hash: 0x4757F00BC6323CFE | Since: 505
 */
export function setDamageModifier(weaponHash, damageMultiplier) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetWeaponDamageModifier(weaponHash, damageMultiplier);
}
/**
 * `ex, WEAPON::SET_WEAPON_EFFECT_DURATION_MODIFIER(joaat("vehicle_weapon_mine_slick"), 1.0);`
 *
 * Hash: 0xE6D2CEDD370FF98E | Since: 2372
 */
export function setEffectDurationModifier(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    Citizen.invokeNative('0xE6D2CEDD370FF98E', p0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x977CA98939E82E4B | Since: 1103
 */
export function setObjectCamoIndex(weaponObject) {
    const _weaponObject = weaponObject instanceof IObject ? weaponObject.handle() : weaponObject;
    Citizen.invokeNative('0x977CA98939E82E4B', _weaponObject, 0);
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
 * Hash: 0x5DA825A85D0EA6E6 | Since: 1103
 */
export function setObjectComponentTintIndex(weaponObject, camoComponentHash, colorIndex) {
    const _weaponObject = weaponObject instanceof IObject ? weaponObject.handle() : weaponObject;
    if (typeof camoComponentHash === 'string')
        camoComponentHash = GetHashKey(camoComponentHash);
    SetWeaponObjectLiveryColor(_weaponObject, camoComponentHash, colorIndex);
}
/**
 * Full list of weapons, components & tint indexes by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xF827589017D4E4A9 | Since: 323
 */
export function setObjectTintIndex(weapon, tintIndex) {
    const _weapon = weapon instanceof IObject ? weapon.handle() : weapon;
    SetWeaponObjectTintIndex(_weapon, tintIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x2857938C5D407AFA | Since: 3407
 */
export function getAmmoInVehicleClip(vehicle, seat) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x2857938C5D407AFA', _vehicle, seat);
}
/**
 * No comment provided
 *
 * Hash: 0xC8C6F4B1CDEB40EF | Since: 3407
 */
export function getTimeBeforeVehicleReloadFinishes(vehicle, seat) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0xC8C6F4B1CDEB40EF', _vehicle, seat);
}
/**
 * No comment provided
 *
 * Hash: 0xD0AD348FFD7A6868 | Since: 3407
 */
export function getVehicleReloadTime(vehicle, seat) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0xD0AD348FFD7A6868', _vehicle, seat);
}
/**
 * No comment provided
 *
 * Hash: 0x8062F07153F4446F | Since: 3407
 */
export function hasReloadingInVehicle(vehicle, seat) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x8062F07153F4446F', _vehicle, seat);
}
/**
 * No comment provided
 *
 * Hash: 0x873906720EE842C3 | Since: 3407
 */
export function setAmmoInVehicleClip(vehicle, seat, ammo) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x873906720EE842C3', _vehicle, seat, ammo);
}
/**
 * No comment provided
 *
 * Hash: 0x1091922715B68DF0 | Since: 3095
 */
export function setPedDamageModifier(weapon, damageModifier) {
    if (typeof weapon === 'string')
        weapon = GetHashKey(weapon);
    Citizen.invokeNative('0x1091922715B68DF0', weapon, damageModifier);
}
/**
 * No comment provided
 *
 * Hash: 0x5B1513F27F279A44 | Since: 3407
 */
export function triggerVehicleReload(vehicle, seat, ped) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x5B1513F27F279A44', _vehicle, seat, _ped);
}
