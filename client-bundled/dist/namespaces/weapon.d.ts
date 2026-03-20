import { Vector3, IEntity, IPed, IPlayer, IVehicle, IObject } from '@risinglife/fivem-shared';
/**
 * A getter for the accuracy spread of a weapon.
 *
 * Hash: 0x5343721 | Since: unknown | API-Set: client
 */
export declare function getAccuracySpread(weaponHash: number | string): number;
/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
 *
 * Hash: 0x63ED2E7 | Since: unknown | API-Set: client
 */
export declare function getAnimationOverride(ped: number | IPed): number;
/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 *
 * Hash: 0xC693E278 | Since: unknown | API-Set: client
 */
export declare function getComponentAccuracyModifier(componentHash: number | string): number;
/**
 * A getter for `CameraHash` in a weapon scope component.
 *
 * Hash: 0xACB7E68F | Since: unknown | API-Set: client
 */
export declare function getComponentCameraHash(componentHash: number | string): number;
/**
 * A getter for `ClipSize` in a weapon component.
 *
 * Hash: 0xE14CF665 | Since: unknown | API-Set: client
 */
export declare function getComponentClipSize(componentHash: number | string): number;
/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 *
 * Hash: 0x4A0E3855 | Since: unknown | API-Set: client
 */
export declare function getComponentDamageModifier(componentHash: number | string): number;
/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 *
 * Hash: 0xE134FB8D | Since: unknown | API-Set: client
 */
export declare function getComponentRangeDamageModifier(componentHash: number | string): number;
/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 *
 * Hash: 0x2FD0BC1B | Since: unknown | API-Set: client
 */
export declare function getComponentRangeModifier(componentHash: number | string): number;
/**
 * A getter for `ReticuleHash` in a weapon scope component.
 *
 * Hash: 0xF9AB9297 | Since: unknown | API-Set: client
 */
export declare function getComponentReticuleHash(componentHash: number | string): number;
/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 *
 * Hash: 0xD979143 | Since: unknown | API-Set: client
 */
export declare function getDamageModifier(weaponHash: number | string): number;
/**
 * A getter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x5E1AF5F | Since: unknown | API-Set: client
 */
export declare function getRecoilShakeAmplitude(weaponHash: number | string): number;
/**
 * Disables weapons aim blocking due to environment for local player.
 * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
 *
 * Hash: 0xDFD8F6DE | Since: unknown | API-Set: client
 */
export declare function setsNoAimBlocking(state: boolean): void;
/**
 * Disables the game's built-in auto-reloading.
 *
 * Hash: 0x311150E5 | Since: unknown | API-Set: client
 */
export declare function setsNoAutoreload(state: boolean): void;
/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 *
 * Hash: 0x2A7B50E | Since: unknown | API-Set: client
 */
export declare function setsNoAutoswap(state: boolean): void;
/**
 * A setter for the accuracy spread of a weapon.
 *
 * Hash: 0x598DD6AE | Since: unknown | API-Set: client
 */
export declare function setAccuracySpread(weaponHash: number | string, spread: number): void;
/**
 * A setter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x9864312F | Since: unknown | API-Set: client
 */
export declare function setRecoilShakeAmplitude(weaponHash: number | string, amplitude: number): void;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x78F0424C34306220 | Since: 323 | API-Set: unknown
 */
export declare function addAmmoToPed(ped: number | IPed, weaponHash: number | string, ammo: number): void;
/**
 * Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 *
 * Hash: 0x2472622CE1F2D45F | Since: 1103 | API-Set: unknown
 */
export declare function addPedAmmoByType(ped: number | IPed, ammoTypeHash: number | string, ammo: number): void;
/**
 * this returns if you can use the weapon while using a parachute
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xBC7BE5ABC0879F74 | Since: 323 | API-Set: unknown
 */
export declare function canUseOnParachute(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAC678E40BE7C74D2 | Since: 323 | API-Set: unknown
 */
export declare function clearEntityLastDamage(entity: number | IEntity): void;
/**
 * Does NOT seem to work with HAS_PED_BEEN_DAMAGED_BY_WEAPON. Use CLEAR_ENTITY_LAST_WEAPON_DAMAGE and HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON instead.
 *
 * Hash: 0x0E98F88A24C5F4B8 | Since: 323 | API-Set: unknown
 */
export declare function clearPedLastDamage(ped: number | IPed): void;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x9DA58CDBF6BDBC08 | Since: 1011 | API-Set: unknown
 */
export declare function createAirDefenceAngledArea(radius: number, weaponHash: number | string): number;
/**
 * Both coordinates are from objects in the decompiled scripts. Native related to 0xECDC202B25E5CF48 p1 value. The only weapon hash used in the decompiled scripts is weapon_air_defence_gun. These two natives are used by the yacht script, decompiled scripts suggest it and the weapon hash used (valkyrie's rockets) are also used by yachts.
 *
 * Hash: 0x91EF34584710BE99 | Since: 573 | API-Set: unknown
 */
export declare function createAirDefenceSphere(pos: Vector3, radius: number, weaponHash: number | string): number;
/**
 * Now has 8 params.
 *
 * Hash: 0x9541D3CF0D398F36 | Since: 323 | API-Set: unknown
 */
export declare function createObject(weaponHash: number | string, ammoCount: number, pos: Vector3, showWorldModel: boolean, scale: number): number;
/**
 * No comment provided
 *
 * Hash: 0xCD79A550999D7D4F | Since: 678 | API-Set: unknown
 */
export declare function doesAirDefenceSphereExist(zoneId: number): boolean;
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x5CEE3DF569CECAB0 | Since: 323 | API-Set: unknown
 */
export declare function doesTakeWeaponComponent(weaponHash: number | string, componentHash: number | string): boolean;
/**
 * Enables laser sight on any weapon.
 *
 * It doesn't work. Neither on tick nor OnKeyDown
 *
 * Hash: 0xC8B46D7727D864AA | Since: 323 | API-Set: unknown
 */
export declare function enableLaserSightRendering(toggle: boolean): void;
/**
 * `WEAPON::EXPLODE_PROJECTILES(PLAYER::PLAYER_PED_ID(), func_221(0x00000003), 0x00000001);`
 *
 * Hash: 0xFC4BD125DE7611E4 | Since: 323 | API-Set: unknown
 */
export declare function explodeProjectiles(ped: number | IPed, weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x44F1012B69313374 | Since: 573 | API-Set: unknown
 */
export declare function fireAirDefenceSphereAtPosition(zoneId: number, pos: Vector3): void;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x2E1202248937775C | Since: 323 | API-Set: unknown
 */
export declare function getAmmoInClip(ped: number | IPed, weaponHash: number | string): [boolean, number];
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
export declare function getAmmoInPed(ped: number | IPed, weaponhash: number | string): number;
/**
 * p1 is always 0 in the scripts.
 *
 * Hash: 0x8483E98E8B888AE2 | Since: 323 | API-Set: unknown
 */
export declare function getBestPed(ped: number | IPed): number;
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
export declare function getCurrentPedVehicle(ped: number | IPed): [boolean, number];
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
export declare function getCurrentPed(ped: number | IPed): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x3B390A939AF0B5FC | Since: 323 | API-Set: unknown
 */
export declare function getCurrentPedEntityIndex(ped: number | IPed): number;
/**
 * gadgetHash - was always 0xFBAB5776 ("GADGET_PARACHUTE").
 *
 * Hash: 0xF731332072F5156C | Since: 323 | API-Set: unknown
 */
export declare function getIsPedGadgetEquipped(ped: number | IPed, gadgetHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x840F03E9041E2C9C | Since: 323 | API-Set: unknown
 */
export declare function getLockonDistanceOfCurrentPed(ped: number | IPed): number;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xDC16122C7A20C933 | Since: 323 | API-Set: unknown
 */
export declare function getMaxAmmo(ped: number | IPed, weaponHash: number | string): [boolean, number];
/**
 * Returns the max ammo for an ammo type. Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 *
 * Hash: 0x585847C5E4E11709 | Since: 1103 | API-Set: unknown
 */
export declare function getMaxAmmoByType(ped: number | IPed, ammoTypeHash: number | string): [boolean, number];
/**
 * p2 is mostly 1 in the scripts.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xA38DCFFCEA8962FA | Since: 323 | API-Set: unknown
 */
export declare function getMaxAmmoInClip(ped: number | IPed, weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x814C9D19DFD69679 | Since: 323 | API-Set: unknown
 */
export declare function getMaxRangeOfCurrentPed(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x39D22031557946C1 | Since: 323 | API-Set: unknown
 */
export declare function getPedAmmoByType(ped: number | IPed, ammoTypeHash: number | string): number;
/**
 * Returns the current ammo type of the specified ped's specified weapon.
 * MkII magazines will change the return value, like Pistol MkII returning AMMO_PISTOL without any components and returning AMMO_PISTOL_TRACER after Tracer Rounds component is attached.
 * Use 0xF489B44DD5AF4BD9 if you always want AMMO_PISTOL.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x7FEAD38B326B9F74 | Since: 323 | API-Set: unknown
 */
export declare function getPedAmmoTypeFrom(ped: number | IPed, weaponHash: number | string): number;
/**
 * Pass ped. Pass address of Vector3.
 * The coord will be put into the Vector3.
 * The return will determine whether there was a coord found or not.
 *
 * Hash: 0x6C4D0409BA1A2BC2 | Since: 323 | API-Set: unknown
 */
export declare function getPedLastImpactCoord(ped: number | IPed): [boolean, Vector3];
/**
 * Returns the base/default ammo type of the specified ped's specified weapon.
 * Use GET_PED_AMMO_TYPE_FROM_WEAPON if you want current ammo type (like AMMO_MG_INCENDIARY/AMMO_MG_TRACER while using MkII magazines) and use this if you want base ammo type. (AMMO_MG)
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xF489B44DD5AF4BD9 | Since: 1103 | API-Set: unknown
 */
export declare function getPedOriginalAmmoTypeFrom(ped: number | IPed, weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xEFFED78E9011134D | Since: 323 | API-Set: unknown
 */
export declare function getPedtypeInSlot(ped: number | IPed, weaponSlot: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xA2C9AC24B4061285 | Since: 1103 | API-Set: unknown
 */
export declare function getPedCamoIndex(ped: number | IPed, weaponHash: number | string): number;
/**
 * Returns -1 if camoComponentHash is invalid/not attached to the weapon.
 * Full list of weapons, components, tint indexes & weapon liveries by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xF0A60040BE558F2D | Since: 1103 | API-Set: unknown
 */
export declare function getPedComponentTintIndex(ped: number | IPed, weaponHash: number | string, camoComponentHash: number | string): number;
/**
 * Full list of weapons, components & tint indexes by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x2B9EEDC07BD06B9F | Since: 323 | API-Set: unknown
 */
export declare function getPedTintIndex(ped: number | IPed, weaponHash: number | string): number;
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
export declare function getSelectedPed(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xC3287EE3050FB74C | Since: 323 | API-Set: unknown
 */
export declare function gettypeGroup(weaponHash: number | string): number;
/**
 * Returns the model of any weapon.
 *
 * Can also take an ammo hash?
 * `sub_6663a(&l_115B, WEAPON::GET_WEAPONTYPE_MODEL(${ammo_rpg}));`
 *
 * Hash: 0xF46CDC33180FDA94 | Since: 323 | API-Set: unknown
 */
export declare function gettypeModel(weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x4215460B9B8B7FA0 | Since: 323 | API-Set: unknown
 */
export declare function gettypeSlot(weaponHash: number | string): number;
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
export declare function getClipSize(weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xB3CAF387AE12E9F8 | Since: 323 | API-Set: unknown
 */
export declare function getComponentHudStats(componentHash: number | string): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x0DB57B41EC1DB083 | Since: 323 | API-Set: unknown
 */
export declare function getComponentTypeModel(componentHash: number | string): number;
/**
 * Returns the amount of extra components the specified component has.
 * Returns -1 if the component isn't of type CWeaponComponentVariantModel.
 *
 * Hash: 0x6558AC7C17BFEF58 | Since: 372 | API-Set: unknown
 */
export declare function getComponentVariantExtraCount(componentHash: number | string): number;
/**
 * Returns the model hash of the extra component at specified index.
 *
 * Hash: 0x4D1CB8DC40208A17 | Since: 372 | API-Set: unknown
 */
export declare function getComponentVariantExtraModel(componentHash: number | string, extraComponentIndex: number): number;
/**
 * This native does not return damages of weapons from the melee and explosive group.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x3133B907D8B32053 | Since: 323 | API-Set: unknown
 */
export declare function getDamage(weaponHash: number | string, componentHash: number | string): number;
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
export declare function getDamageType(weaponHash: number | string): number;
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
export declare function getHudStats(weaponHash: number | string): [boolean, any];
/**
 * Returns -1 if camoComponentHash is invalid/not attached to the weapon object.
 * Full list of weapons, components, tint indexes & weapon liveries by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xB3EA4FEABF41464B | Since: 1103 | API-Set: unknown
 */
export declare function getObjectComponentTintIndex(weaponObject: number | IObject, camoComponentHash: number | string): number;
/**
 * Drops the current weapon and returns the object
 *
 * Unknown behavior when unarmed.
 *
 * Hash: 0xCAE1DC9A0E22A16D | Since: 323 | API-Set: unknown
 */
export declare function getObjectFromPed(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xCD183314F7CD2E57 | Since: 323 | API-Set: unknown
 */
export declare function getObjectTintIndex(weapon: number | IObject): number;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x065D2AACAD8CF7A4 | Since: 1290 | API-Set: unknown
 */
export declare function getTimeBetweenShots(weaponHash: number | string): number;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x5DCF6C5CAB2E9BF7 | Since: 323 | API-Set: unknown
 */
export declare function getTintCount(weaponHash: number | string): number;
/**
 * Gives a weapon to PED with a delay, example:
 *
 * `WEAPON::GIVE_DELAYED_WEAPON_TO_PED(PED::PLAYER_PED_ID(), MISC::GET_HASH_KEY("WEAPON_PISTOL"), 1000, false)`
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xB282DC6EBD803C75 | Since: 323 | API-Set: unknown
 */
export declare function giveDelayedToPed(ped: number | IPed, weaponHash: number | string, ammoCount: number, bForceInHand: boolean): void;
/**
 * Gives the specified loadout to the specified ped.
 * Loadouts are defined in common.rpf\data\ai\loadouts.meta
 *
 * Hash: 0x68F8BE6AF5CDF8A6 | Since: 505 | API-Set: unknown
 */
export declare function giveLoadoutToPed(ped: number | IPed, loadoutHash: number | string): void;
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xD966D51AA5B28BB9 | Since: 323 | API-Set: unknown
 */
export declare function giveComponentToPed(ped: number | IPed, weaponHash: number | string, componentHash: number | string): void;
/**
 * componentHash:
 * `(use WEAPON::GET_WEAPON_COMPONENT_TYPE_MODEL() to get hash value)`
 * ${component_at_ar_flsh}, ${component_at_ar_supp}, ${component_at_pi_flsh}, ${component_at_scope_large}, ${component_at_ar_supp_02}
 *
 * Hash: 0x33E179436C0B31DB | Since: 323 | API-Set: unknown
 */
export declare function giveComponentToWeaponObject(weaponObject: number | IObject, componentHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xB1FA61371AF7C4B7 | Since: 323 | API-Set: unknown
 */
export declare function giveObjectToPed(weaponObject: number | IObject, ped: number | IPed): void;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xBF0FD6E56C964FCB | Since: 323 | API-Set: unknown
 */
export declare function giveToPed(ped: number | IPed, weaponHash: number | string, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void;
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
export declare function hasEntityBeenDamagedBy(entity: number | IEntity, weaponHash: number | string, weaponType: number): boolean;
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
export declare function hasPedBeenDamagedBy(ped: number | IPed, weaponHash: number | string, weaponType: number): boolean;
/**
 * p2 should be FALSE, otherwise it seems to always return FALSE
 *
 * Bool does not check if the weapon is current equipped, unfortunately.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x8DECB02F88F428BC | Since: 323 | API-Set: unknown
 */
export declare function hasPedGot(ped: number | IPed, weaponHash: number | string): boolean;
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xC593212475FAE340 | Since: 323 | API-Set: unknown
 */
export declare function hasPedGotComponent(ped: number | IPed, weaponHash: number | string, componentHash: number | string): boolean;
/**
 * Fourth Parameter = unsure, almost always -1
 *
 * Hash: 0x717C8481234E3B88 | Since: 323 | API-Set: unknown
 */
export declare function hasVehicleGotProjectileAttached(driver: number | IPed, vehicle: number | IVehicle, weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x36E353271F0E90EE | Since: 323 | API-Set: unknown
 */
export declare function hasAssetLoaded(weaponHash: number | string): boolean;
/**
 * see DOES_WEAPON_TAKE_WEAPON_COMPONENT for full list of weapons & components
 *
 * Hash: 0x76A18844E743BF91 | Since: 323 | API-Set: unknown
 */
export declare function hasGotWeaponComponent(weapon: number | IObject, componentHash: number | string): boolean;
/**
 * Hides the players weapon during a cutscene.
 *
 * Hash: 0x6F6981D2253C208F | Since: 323 | API-Set: unknown
 */
export declare function hidePedForScriptedCutscene(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDAB963831DBFD3F4 | Since: 1103 | API-Set: unknown
 */
export declare function isAirDefenceSphereInArea(pos: Vector3, radius: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x4B7620C47217126C | Since: 323 | API-Set: unknown
 */
export declare function isFlashLightOn(ped: number | IPed): boolean;
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
export declare function isPedArmed(ped: number | IPed, typeFlags: number): boolean;
/**
 * This native returns a true or false value.
 *
 * Ped ped = The ped whose weapon you want to check.
 *
 * Hash: 0x65F0C5AE05943EC7 | Since: 323 | API-Set: unknown
 */
export declare function isPedCurrentSilenced(ped: number | IPed): boolean;
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x0D78DE0572D3969E | Since: 323 | API-Set: unknown
 */
export declare function isPedComponentActive(ped: number | IPed, weaponHash: number | string, componentHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB80CA294F2F26749 | Since: 323 | API-Set: unknown
 */
export declare function isPedReadyToShoot(ped: number | IPed): boolean;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x937C71165CF334B3 | Since: 323 | API-Set: unknown
 */
export declare function isValid(weaponHash: number | string): boolean;
/**
 * Forces a ped to reload only if they are able to; if they have a full magazine, they will not reload.
 *
 * Hash: 0x20AE33F3AC9C0033 | Since: 323 | API-Set: unknown
 */
export declare function makePedReload(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8C0D57EA686FAD87 | Since: 323 | API-Set: unknown
 */
export declare function refillAmmoInstantly(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0ABF535877897560 | Since: 573 | API-Set: unknown
 */
export declare function removeAirDefenceSphere(zoneId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1E45B34ADEBEE48E | Since: 573 | API-Set: unknown
 */
export declare function removeAllAirDefenceSpheres(): void;
/**
 * setting the last params to false it does that same so I would suggest its not a toggle
 *
 * Hash: 0xF25DF915FA38C5F3 | Since: 323 | API-Set: unknown
 */
export declare function removeAllPeds(ped: number | IPed): void;
/**
 * If `explode` true, then removal is done through exploding the projectile. Basically the same as EXPLODE_PROJECTILES but without defining the owner ped.
 *
 * Hash: 0xFC52E0F37E446528 | Since: 323 | API-Set: unknown
 */
export declare function removeAllProjectilesOfType(weaponHash: number | string, explode: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAA08EF13F341C8FC | Since: 323 | API-Set: unknown
 */
export declare function removeAsset(weaponHash: number | string): void;
/**
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x1E8BE90C74FB4C09 | Since: 323 | API-Set: unknown
 */
export declare function removeComponentFromPed(ped: number | IPed, weaponHash: number | string, componentHash: number | string): void;
/**
 * see DOES_WEAPON_TAKE_WEAPON_COMPONENT for full list of weapons & components
 *
 * Hash: 0xF7D82B0D66777611 | Since: 323 | API-Set: unknown
 */
export declare function removeComponentFromWeaponObject(_object: number | IObject, componentHash: number | string): void;
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
export declare function removeFromPed(ped: number | IPed, weaponHash: number | string): void;
/**
 * Nearly every instance of p1 I found was 31. Nearly every instance of p2 I found was 0.
 *
 * REQUEST_WEAPON_ASSET(iLocal_1888, 31, 26);
 *
 * Hash: 0x5443438F033E29C3 | Since: 323 | API-Set: unknown
 */
export declare function requestAsset(weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x48164DBB970AC3F0 | Since: 323 | API-Set: unknown
 */
export declare function requestHighDetailModel(weaponObject: number | IEntity): void;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xDCD2A934D65CB497 | Since: 323 | API-Set: unknown
 */
export declare function setAmmoInClip(ped: number | IPed, weaponHash: number | string, ammo: number): boolean;
/**
 * Disable all weapons. Does the same as 0xB4771B9AAF4E68E4 except for all weapons.
 *
 * Hash: 0xEFF296097FF1E509 | Since: 1103 | API-Set: unknown
 */
export declare function setCanPedSelectAlls(ped: number | IPed, toggle: boolean): void;
/**
 * Disables selecting the given weapon. Ped isn't forced to put the gun away. However you can't reselect the weapon if you holster then unholster. Weapon is also grayed out on the weapon wheel.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xB4771B9AAF4E68E4 | Since: 1103 | API-Set: unknown
 */
export declare function setCanPedSelectInventory(ped: number | IPed, weaponHash: number | string, toggle: boolean): void;
/**
 * Full list of weapons by DurtyFree (Search for VEHICLE_*): https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x75C55983C2C39DAA | Since: 323 | API-Set: unknown
 */
export declare function setCurrentPedVehicle(ped: number | IPed, weaponHash: number | string): boolean;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xADF692B254977C0C | Since: 323 | API-Set: unknown
 */
export declare function setCurrentPed(ped: number | IPed, weaponHash: number | string, bForceInHand: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE4DCEC7FD5B739A5 | Since: 323 | API-Set: unknown
 */
export declare function setEqippedStartSpinningAtFullSpeed(ped: number | IPed): void;
/**
 * Enables/disables flashlight on ped's weapon.
 *
 * Hash: 0x988DB6FE9B3AC000 | Since: 2060 | API-Set: unknown
 */
export declare function setFlashLightActiveHistory(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xCEA66DAD478CD39B | Since: 323 | API-Set: unknown
 */
export declare function setFlashLightFadeDistance(distance: number): boolean;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x14E56BC5B5DB6A19 | Since: 323 | API-Set: unknown
 */
export declare function setPedAmmo(ped: number | IPed, weaponHash: number | string, ammo: number): void;
/**
 * Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 *
 * Hash: 0x5FD1E1F011E76D7E | Since: 323 | API-Set: unknown
 */
export declare function setPedAmmoByType(ped: number | IPed, ammoTypeHash: number | string, ammo: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA4EFEF9440A5B0EF | Since: 323 | API-Set: unknown
 */
export declare function setPedAmmoToDrop(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8378627201D5497D | Since: 323 | API-Set: unknown
 */
export declare function setPedChanceOfFiringBlanks(ped: number | IPed, xBias: number, yBias: number): void;
/**
 * Has 5 parameters since latest patches.
 *
 * Hash: 0x0725A4CCFDED9A70 | Since: 323 | API-Set: unknown
 */
export declare function setPedCurrentVisible(ped: number | IPed, visible: boolean, deselectWeapon: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x50276EF8172F5F12 | Since: 1734 | API-Set: unknown
 */
export declare function setPedCycleVehiclesOnly(ped: number | IPed): void;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x208A1888007FC0E6 | Since: 323 | API-Set: unknown
 */
export declare function setPedDropsInventory(ped: number | IPed, weaponHash: number | string, xOffset: number, yOffset: number, zOffset: number, ammoCount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6B7513D9966FBEC0 | Since: 323 | API-Set: unknown
 */
export declare function setPedDrops(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x476AE72C1D19D1A8 | Since: 323 | API-Set: unknown
 */
export declare function setPedDropssWhenDead(ped: number | IPed, toggle: boolean): void;
/**
 * p1/gadgetHash was always 0xFBAB5776 ("GADGET_PARACHUTE").
 * p2 is always true.
 *
 * Hash: 0xD0D7B1E680ED4A1A | Since: 323 | API-Set: unknown
 */
export declare function setPedGadget(ped: number | IPed, gadgetHash: number | string): void;
/**
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x3EDCB0505123623B | Since: 323 | API-Set: unknown
 */
export declare function setPedInfiniteAmmo(ped: number | IPed, toggle: boolean, weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x183DADC6AA953186 | Since: 323 | API-Set: unknown
 */
export declare function setPedInfiniteAmmoClip(ped: number | IPed, toggle: boolean): void;
/**
 * Returns handle of the projectile.
 *
 * Hash: 0xB4C8D77C80C0421E | Since: 323 | API-Set: unknown
 */
export declare function setPedShootOrdnance(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x24C024BA8379A70A | Since: 1868 | API-Set: unknown
 */
export declare function setPedStunGunFiniteAmmo(): void;
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
export declare function setPedComponentTintIndex(ped: number | IPed, weaponHash: number | string, camoComponentHash: number | string, colorIndex: number): void;
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
export declare function setPedTintIndex(ped: number | IPed, weaponHash: number | string, tintIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE620FD3512A04F18 | Since: 323 | API-Set: unknown
 */
export declare function setPickupAmmoAmountScaler(): void;
/**
 * No comment provided
 *
 * Hash: 0xECDC202B25E5CF48 | Since: 573 | API-Set: unknown
 */
export declare function setPlayerTargettableForAirDefenceSphere(player: number | string | IPlayer, zoneId: number, enable: boolean): void;
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
export declare function setAnimationOverride(ped: number | IPed, animStyle: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x4AE5AC8B852D642C | Since: 2372 | API-Set: unknown
 */
export declare function setAoeModifier(weaponHash: number | string, multiplier: number): void;
/**
 * Changes the weapon damage output by the given multiplier value. Must be run every frame.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x4757F00BC6323CFE | Since: 505 | API-Set: unknown
 */
export declare function setDamageModifier(weaponHash: number | string, damageMultiplier: number): void;
/**
 * `ex, WEAPON::SET_WEAPON_EFFECT_DURATION_MODIFIER(joaat("vehicle_weapon_mine_slick"), 1.0);`
 *
 * Hash: 0xE6D2CEDD370FF98E | Since: 2372 | API-Set: unknown
 */
export declare function setEffectDurationModifier(p0: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x977CA98939E82E4B | Since: 1103 | API-Set: unknown
 */
export declare function setObjectCamoIndex(weaponObject: number | IObject): void;
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
export declare function setObjectComponentTintIndex(weaponObject: number | IObject, camoComponentHash: number | string, colorIndex: number): void;
/**
 * Full list of weapons, components & tint indexes by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xF827589017D4E4A9 | Since: 323 | API-Set: unknown
 */
export declare function setObjectTintIndex(weapon: number | IObject, tintIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2857938C5D407AFA | Since: 3407 | API-Set: unknown
 */
export declare function getAmmoInVehicleClip(vehicle: number | IVehicle, seat: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xC8C6F4B1CDEB40EF | Since: 3407 | API-Set: unknown
 */
export declare function getTimeBeforeVehicleReloadFinishes(vehicle: number | IVehicle, seat: number): number;
/**
 * No comment provided
 *
 * Hash: 0xD0AD348FFD7A6868 | Since: 3407 | API-Set: unknown
 */
export declare function getVehicleReloadTime(vehicle: number | IVehicle, seat: number): number;
/**
 * No comment provided
 *
 * Hash: 0x8062F07153F4446F | Since: 3407 | API-Set: unknown
 */
export declare function hasReloadingInVehicle(vehicle: number | IVehicle, seat: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x873906720EE842C3 | Since: 3407 | API-Set: unknown
 */
export declare function setAmmoInVehicleClip(vehicle: number | IVehicle, seat: number, ammo: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1091922715B68DF0 | Since: 3095 | API-Set: unknown
 */
export declare function setPedDamageModifier(weapon: number | string, damageModifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5B1513F27F279A44 | Since: 3407 | API-Set: unknown
 */
export declare function triggerVehicleReload(vehicle: number | IVehicle, seat: number, ped: number | IPed): boolean;
