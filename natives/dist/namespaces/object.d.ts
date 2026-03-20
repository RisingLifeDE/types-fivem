import { Vector3, IEntity, IPed, IPlayer, IObject } from '@risinglife/fivem-shared';
/**
 * doorHash has to be unique. scriptDoor false; relies upon getNetworkGameScriptHandler. isLocal On true disables the creation CRequestDoorEvent's in DOOR_SYSTEM_SET_DOOR_STATE.
 * p5 only set to true in single player native scripts.
 * If scriptDoor is true, register the door on the script handler host (note: there's a hardcap on the number of script IDs that can be added to the system at a given time). If scriptDoor and isLocal are both false, the door is considered to be in a "Persists w/o netobj" state.
 *
 * door hashes normally look like PROP_[int]_DOOR_[int] for interior doors and PROP_BUILDING_[int]_DOOR_[int] exterior doors but you can just make up your own hash if you want
 * All doors need to be registered with ADD_DOOR_TO_SYSTEM before they can be manipulated with the door natives and the easiest way to get door models is just find the door in codewalker.
 *
 * Example: AddDoorToSystem("PROP_43_DOOR_0", "hei_v_ilev_fh_heistdoor2", -1456.818, -520.5037, 69.67043, 0, 0, 0)
 *
 * Hash: 0x6F8838D03D1DC226 | Since: 323
 */
export declare function addDoorToSystem(doorHash: number | string, modelHash: number | string, pos: Vector3, scriptDoor: boolean, isLocal: boolean): void;
/**
 * Adds an area that seems to be related to pickup physics behavior.
 * Max amount of areas is 10. Only works in multiplayer.
 *
 * Hash: 0xD4A7A435B3710D05 | Since: 1290
 */
export declare function addExtendedPickupProbeArea(pos: Vector3, radius: number): void;
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0xFDC07C58E8AAB715 | Since: 1734
 */
export declare function allowAllPlayersToCollectPickupsOfType(pickupHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xABDABF4E1EDECBFA | Since: 1365
 */
export declare function allowDamageEventsForNonNetworkeds(value: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x834344A414C7C85D | Since: 2372
 */
export declare function allowPickupArrowMarkerWhenUncollectable(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAA059C615DE9DD03 | Since: 1180
 */
export declare function allowPickupByNoneParticipant(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x641F272B52E2F0F8 | Since: 877
 */
export declare function allowPortablePickupToMigrateToNonParticipants(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x85B6C850546FDDE2 | Since: 323
 */
export declare function areEntitiesEntirelyInsideGarage(garageHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8DC39368BDD57755 | Since: 323
 */
export declare function attachPortablePickupToPed(pickupObject: number | IObject, ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x1E3F1B1B891A2AAA | Since: 573
 */
export declare function blockPlayersForAmbientPickup(): void;
/**
 * No comment provided
 *
 * Hash: 0xE7E4C198B0185900 | Since: 323
 */
export declare function breakFragmentChild(p0: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xA2C1F5E92AFE49ED | Since: 323
 */
export declare function clearAllPickupRewardTypeSuppression(): void;
/**
 * Clears all areas created by ADD_EXTENDED_PICKUP_PROBE_AREA
 *
 * Hash: 0xB7C6D80FB371659A | Since: 1290
 */
export declare function clearExtendedPickupProbeAreas(): void;
/**
 * No comment provided
 *
 * Hash: 0xDA05194260CDCDF9 | Since: 678
 */
export declare function clearGarage(garageHash: number | string, isNetwork: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x190428512B240692 | Since: 323
 */
export declare function clearsInsideGarage(garageHash: number | string, vehicles: boolean, peds: boolean, objects: boolean, isNetwork: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x762DB2D380B48D04 | Since: 323
 */
export declare function clearPickupRewardTypeSuppression(rewardType: number): void;
/**
 * Clears the fields sets by 0xC7F29CA00F46350E (1604 retail: 0x1424A7A10, 0x1424A7A11) and iterates over the global CDoor's bucket-list.
 * Related to its "Pre-networked state"?
 *
 * Hash: 0x701FDA1E82076BA4 | Since: 323
 */
export declare function closeAllBarriersForRace(): void;
/**
 * No comment provided
 *
 * Hash: 0x66A49D021870FE88 | Since: 323
 */
export declare function closeSafehouseGarages(): void;
/**
 * returns pickup hash.
 *
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x5EAAD83F8CFB4575 | Since: 323
 */
export declare function convertOldPickupTypeToNew(pickupHash: number | string): number;
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x673966A0C0FD7171 | Since: 323
 */
export declare function createAmbientPickup(pickupHash: number | string, pos: Vector3, flags: number, value: number, modelHash: number | string): number;
/**
 * Spawns one or more money pickups.
 *
 * x: The X-component of the world position to spawn the money pickups at.
 * y: The Y-component of the world position to spawn the money pickups at.
 * z: The Z-component of the world position to spawn the money pickups at.
 * value: The combined value of the pickups (in dollars).
 * amount: The number of pickups to spawn.
 * model: The model to use, or 0 for default money model.
 *
 * Example:
 * CREATE_MONEY_PICKUPS(x, y, z, 1000, 3, 0x684a97ae);
 *
 * Spawns 3 spray cans that'll collectively give $1000 when picked up. (Three spray cans, each giving $334, $334, $332 = $1000).
 *
 * ==============================================
 *
 * Max is 2000 in MP. So if you put the amount to 20, but the value to $400,000 eg. They will only be able to pickup 20 - $2,000 bags. So, $40,000
 *
 * Hash: 0x0589B5E791CE9B2B | Since: 323
 */
export declare function createMoneyPickups(pos: Vector3, value: number, amount: number, model: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x9C93764223E29C50 | Since: 2372
 */
export declare function createNonNetworkedAmbientPickup(pickupHash: number | string, pos: Vector3, flags: number, value: number, modelHash: number | string): number;
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x125494B98A21AAF7 | Since: 323
 */
export declare function createNonNetworkedPortablePickup(pickupHash: number | string, pos: Vector3, placeOnGround: boolean, modelHash: number | string): number;
/**
 * List of object models that can be created without any additional effort like making sure ytyp is loaded etc: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ObjectList.ini
 *
 * Hash: 0x509D5878EB39E842 | Since: 323
 */
export declare function create(modelHash: number | string, pos: Vector3, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
/**
 * List of object models that can be created without any additional effort like making sure ytyp is loaded etc: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ObjectList.ini
 *
 * Hash: 0x9A294B2138ABB884 | Since: 323
 */
export declare function createNoOffset(modelHash: number | string, pos: Vector3, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0xFBA08C503DD5FA58 | Since: 323
 */
export declare function createPickup(pickupHash: number | string, pos: Vector3, value: number, modelHash: number | string): any;
/**
 * flags:
 * 8 (1 << 3): place on ground
 * 512 (1 << 9): spin around
 *
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x891804727E0A98B7 | Since: 323
 */
export declare function createPickupRotate(pickupHash: number | string, pos: Vector3, rot: Vector3, flag: number, amount: number, modelHash: number | string): any;
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x2EAF1FDB2FB55698 | Since: 323
 */
export declare function createPortablePickup(pickupHash: number | string, pos: Vector3, placeOnGround: boolean, modelHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xE05F6AEEFEB0BB02 | Since: 1180
 */
export declare function damageFragmentChild(): void;
/**
 * Deletes the specified object, then sets the handle pointed to by the pointer to NULL.
 *
 * Hash: 0x539E0AE3E6634B9F | Since: 323
 */
export declare function deleteObject(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xCF463D1E9A0AECB1 | Since: 323
 */
export declare function detachPortablePickupFromPed(pickupObject: number | IObject): void;
/**
 * Sets a flag. A valid id is 0x157DC10D
 *
 * Hash: 0x659F9D71F52843F8 | Since: 1290
 */
export declare function disableTidyingUpInGarage(id: number, toggle: boolean): void;
/**
 * p5 is usually 0.
 *
 * Hash: 0xBFA48E2FF417213F | Since: 323
 */
export declare function doesOfTypeExistAtCoords(pos: Vector3, radius: number, hash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAFC1CA75AD4074D1 | Since: 323
 */
export declare function doesPickupExist(pickup: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD9EFB6DBF7DAAEA3 | Since: 323
 */
export declare function doesPickupObjectExist(pickupObject: number | IObject): boolean;
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0xF9C36251F6E48E33 | Since: 323
 */
export declare function doesPickupOfTypeExistInArea(pickupHash: number | string, pos: Vector3, radius: number): boolean;
/**
 * Returns true if a destructible object with this handle exists, false otherwise.
 *
 * Hash: 0x52AF537A0C5B8AAD | Since: 323
 */
export declare function doesRayfireMapExist(_object: number | IObject): boolean;
/**
 * Search radius: 0.5
 *
 * Hash: 0x589F80B325CC82C5 | Since: 323
 */
export declare function doorSystemFindExistingDoor(pos: Vector3, modelHash: number | string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xE851471AEFC3374F | Since: 1868
 */
export declare function doorSystemGetAutomaticDistance(doorHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x4BC2854478F3A749 | Since: 323
 */
export declare function doorSystemGetDoorPendingState(doorHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x160AA1B32F6139B8 | Since: 323
 */
export declare function doorSystemGetDoorState(doorHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xDF97CDD4FC08FD34 | Since: 323
 */
export declare function doorSystemGetIsPhysicsLoaded(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8562FD8AB1E94D39 | Since: 3407
 */
export declare function doorSystemGetIsSpringRemoved(doorHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x65499865FCA6E5EC | Since: 323
 */
export declare function doorSystemGetOpenRatio(doorHash: number | string): number;
/**
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 *
 * Hash: 0x9BA001CB45CBF627 | Since: 323
 */
export declare function doorSystemSetAutomaticDistance(doorHash: number | string, distance: number, requestDoor: boolean, forceUpdate: boolean): void;
/**
 * Includes networking check: ownership vs. or the door itself **isn't** networked.
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 *
 * Hash: 0x03C27E13B42A0E82 | Since: 323
 */
export declare function doorSystemSetAutomaticRate(doorHash: number | string, rate: number, requestDoor: boolean, forceUpdate: boolean): void;
/**
 * Some property related to gates. Native name between ``DOOR_SYSTEM_SET_AUTOMATIC_RATE`` and ``DOOR_SYSTEM_SET_DOOR_STATE``.
 *
 * Hash: 0xA85A21582451E951 | Since: 323
 */
export declare function doorSystemSetDoorOpenForRaces(doorHash: number | string): void;
/**
 * Lockstates not applied and CNetObjDoor's not created until DOOR_SYSTEM_GET_IS_PHYSICS_LOADED returns true.
 * `requestDoor` on true, and when door system is configured to, i.e., "persists w/o netobj", generate a CRequestDoorEvent.
 * `forceUpdate` on true, forces an update on the door system (same path as netObjDoor_applyDoorStuff)
 * Door lock states:
 * 0: UNLOCKED
 * 1: LOCKED
 * 2: DOORSTATE_FORCE_LOCKED_UNTIL_OUT_OF_AREA
 * 3: DOORSTATE_FORCE_UNLOCKED_THIS_FRAME
 * 4: DOORSTATE_FORCE_LOCKED_THIS_FRAME
 * 5: DOORSTATE_FORCE_OPEN_THIS_FRAME
 * 6: DOORSTATE_FORCE_CLOSED_THIS_FRAME
 *
 * Hash: 0x6BAB9442830C7F53 | Since: 323
 */
export declare function doorSystemSetDoorState(doorHash: number | string, state: number, requestDoor: boolean, forceUpdate: boolean): void;
/**
 * Includes networking check: ownership vs. or the door itself **isn't** networked.
 *
 * Hash: 0xD9B71952F78A2640 | Since: 323
 */
export declare function doorSystemSetHoldOpen(doorHash: number | string, toggle: boolean): void;
/**
 * Sets the ajar angle of a door.
 * Ranges from -1.0 to 1.0, and 0.0 is closed / default.
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 *
 * Hash: 0xB6E6FBA95C7324AC | Since: 323
 */
export declare function doorSystemSetOpenRatio(doorHash: number | string, ajar: number, requestDoor: boolean, forceUpdate: boolean): void;
/**
 * Includes networking check: ownership vs. or the door itself **isn't** networked.
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 *
 * Hash: 0xC485E07E4F0B7958 | Since: 323
 */
export declare function doorSystemSetSpringRemoved(doorHash: number | string, removed: boolean, requestDoor: boolean, forceUpdate: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF2E1A7133DD356A6 | Since: 323
 */
export declare function enableSavingInGarage(garageHash: number | string, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF9C1681347C8BD15 | Since: 323
 */
export declare function fixFragment(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x4C134B4DF76025D0 | Since: 1180
 */
export declare function forceActivatePhysicsOnUnfixedPickup(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x758A5C1B3B1E1990 | Since: 1011
 */
export declare function forcePickupRegenerate(): void;
/**
 * No comment provided
 *
 * Hash: 0x394CD08E31313C28 | Since: 944
 */
export declare function forcePickupRotateFaceUp(): void;
/**
 * No comment provided
 *
 * Hash: 0x5CE2E45A5CE2E45A | Since: 2545
 */
export declare function forcePortablePickupLastAccessiblePositionSetting(_object: number | IObject): void;
/**
 * Has 8 params in the latest patches.
 *
 * isMission - if true doesn't return mission objects
 *
 * Hash: 0xE143FA2249364369 | Since: 323
 */
export declare function getClosestOfType(pos: Vector3, radius: number, modelHash: number | string, isMission: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x163F8B586BC95F2A | Since: 323
 */
export declare function getCoordsAndRotationOfClosestOfType(pos: Vector3, radius: number, modelHash: number | string, rotationOrder: number): [boolean, Vector3, Vector3];
/**
 * No comment provided
 *
 * Hash: 0xDB41D07A45A6D4B7 | Since: 323
 */
export declare function getDefaultAmmoForWeaponPickup(pickupHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x2542269291C6AC84 | Since: 1180
 */
export declare function getHasBeenCompletelyDestroyed(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3BD770D281982DB5 | Since: 1604
 */
export declare function getIsArticulatedJointAtMaxAngle(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x43C677F1E1158005 | Since: 1604
 */
export declare function getIsArticulatedJointAtMinAngle(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB6FBFD079B8D0596 | Since: 323
 */
export declare function getFragmentDamageHealth(): number;
/**
 * No comment provided
 *
 * Hash: 0xE84EB93729C5F36A | Since: 757
 */
export declare function getTintIndex(_object: number | IObject): number;
/**
 * No comment provided
 *
 * Hash: 0x163E252DE035A133 | Since: 323
 */
export declare function getOffsetFromCoordAndHeadingInWorldCoords(pos: Vector3, heading: number, xOffset: number, yOffset: number, zOffset: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x225B8B35C88029B3 | Since: 323
 */
export declare function getPickupCoords(pickup: any): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xB3ECA65C7317F174 | Since: 944
 */
export declare function getPickupGenerationRangeMultiplier(): number;
/**
 * No comment provided
 *
 * Hash: 0x5099BC55630B25AE | Since: 323
 */
export declare function getPickup(pickup: any): number;
/**
 * Returns the pickup hash for the given weapon hash
 *
 * Hash: 0xD6429A016084F1A5 | Since: 1290
 */
export declare function getPickupTypeFromWeaponHash(weaponHash: number | string): number;
/**
 * Example:
 * `OBJECT::GET_RAYFIRE_MAP_OBJECT(-809.9619750976562, 170.919, 75.7406997680664, 3.0, "des_tvsmash");`
 *
 * Hash: 0xB48FCED898292E52 | Since: 323
 */
export declare function getRayfireMap(pos: Vector3, radius: number, name: string): number;
/**
 * `object`: The des-object handle to get the animation progress from.
 * Return value is a float between 0.0 and 1.0, 0.0 is the beginning of the animation, 1.0 is the end. Value resets to 0.0 instantly after reaching 1.0.
 *
 * Hash: 0x260EE4FDBDF4DB01 | Since: 323
 */
export declare function getRayfireMapAnimPhase(_object: number | IObject): number;
/**
 * No comment provided
 *
 * Hash: 0x6E16BC2503FF1FF0 | Since: 323
 */
export declare function getSafePickupCoords(pos: Vector3): Vector3;
/**
 * locked is 0 if no door is found
 * locked is 0 if door is unlocked
 * locked is 1 if door is found and unlocked.
 *
 * -------------
 * the locked bool is either 0(unlocked)(false) or 1(locked)(true)
 *
 * Hash: 0xEDC1A5B84AEF33FF | Since: 323
 */
export declare function getStateOfClosestDoorOfType(_type: number | string, pos: Vector3): [boolean, number];
/**
 * Get a destructible object's state.
 * Substract 1 to get the real state.
 * See SET_STATE_OF_RAYFIRE_MAP_OBJECT to see the different states
 * For example, if the object just spawned (state 2), the native will return 3.
 *
 * Hash: 0x899BA936634A322E | Since: 323
 */
export declare function getStateOfRayfireMap(_object: number | IObject): number;
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x08F96CA6C551AD51 | Since: 323
 */
export declare function getWeaponTypeFromPickupType(pickupHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x761B0E69AC4D007E | Since: 323
 */
export declare function hasClosestOfTypeBeenBroken(modelHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x46494A2475701343 | Since: 323
 */
export declare function hasClosestOfTypeBeenCompletelyDestroyed(pos: Vector3, radius: number, modelHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8ABFB70C49CC43E2 | Since: 323
 */
export declare function hasBeenBroken(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x80EC48E6679313F9 | Since: 323
 */
export declare function hasPickupBeenCollected(pickup: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x867458251D47CCB2 | Since: 463
 */
export declare function hidePortablePickupWhenDetached(pickupObject: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x673ED815D6E323B7 | Since: 323
 */
export declare function isAnyEntityEntirelyInsideGarage(garageHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x397DC58FF00298D1 | Since: 323
 */
export declare function isAnyNearPoint(pos: Vector3, range: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC531EE8A1145A149 | Since: 323
 */
export declare function isDoorClosed(doorHash: number | string): boolean;
/**
 * `if (OBJECT::IS_DOOR_REGISTERED_WITH_SYSTEM(doorHash))`
 * {
 * `OBJECT::REMOVE_DOOR_FROM_SYSTEM(doorHash);`
 * }
 *
 * Hash: 0xC153C43EA202C8C1 | Since: 323
 */
export declare function isDoorRegisteredWithSystem(doorHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x90E47239EA1980B8 | Since: 323
 */
export declare function isGarageEmpty(garageHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFC481C641EBBD27D | Since: 1365
 */
export declare function isAPickup(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0378C08504160D0D | Since: 323
 */
export declare function isAPortablePickup(_object: number | IObject): boolean;
/**
 * Despite the name, it does work for any entity type.
 *
 * Hash: 0x372EF6699146A1E4 | Since: 323
 */
export declare function isEntirelyInsideGarage(garageHash: number | string, entity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8C90FE4B381BA60A | Since: 323
 */
export declare function isNearPoint(objectHash: number | string, pos: Vector3, range: number): boolean;
/**
 * Despite the name, it does work for any entity type.
 *
 * Hash: 0xF0EED5A6BC7B237A | Since: 323
 */
export declare function isPartiallyInsideGarage(garageHash: number | string, entity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8B32ACE6326A7546 | Since: 323
 */
export declare function isVisible(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x11D1E53A726891FE | Since: 323
 */
export declare function isPickupWeaponValid(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x024A60DEB0EA69F0 | Since: 323
 */
export declare function isPlayerEntirelyInsideGarage(garageHash: number | string, player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1761DC5D8471CBAA | Since: 323
 */
export declare function isPlayerPartiallyInsideGarage(garageHash: number | string, player: number | string | IPlayer): boolean;
/**
 * An angled area is an X-Z oriented rectangle with three parameters:
 * 1. origin: the mid-point along a base edge of the rectangle;
 * 2. extent: the mid-point of opposite base edge on the other Z;
 * 3. width: the length of the base edge; (named derived from logging strings ``CNetworkRoadNodeWorldStateData``).
 *
 * The oriented rectangle can then be derived from the direction of the two points (``norm(origin - extent)``), its orthonormal, and the width, e.g:
 * 1. golf_mp https://i.imgur.com/JhsQAK9.png
 * 2. am_taxi https://i.imgur.com/TJWCZaT.jpg
 *
 * Hash: 0x2A70BAE8883E4C81 | Since: 323
 */
export declare function isPointInAngledArea(pos: Vector3, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, debug: boolean, includeZ: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xADF084FB8F075D06 | Since: 1604
 */
export declare function isPropLightOverriden(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0xADBE4809F19F927A | Since: 323
 */
export declare function onlyCleanUpWhenOutOfRange(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xC7F29CA00F46350E | Since: 323
 */
export declare function openAllBarriersForRace(): void;
/**
 * No comment provided
 *
 * Hash: 0xD76EEEF746057FD6 | Since: 505
 */
export declare function placeOnGroundOrObjectProperly(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x58A850EAEE20FAA3 | Since: 323
 */
export declare function placeOnGroundProperly(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x006E4B040ED37EC3 | Since: 1868
 */
export declare function playAutoStartAnim(): void;
/**
 * No comment provided
 *
 * Hash: 0x92AEFB5F6E294023 | Since: 323
 */
export declare function preventCollectionOfPortablePickup(_object: number | IObject): void;
/**
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x27F9D613092159CF | Since: 323
 */
export declare function removeAllPickupsOfType(pickupHash: number | string): void;
/**
 * CDoor and CDoorSystemData still internally allocated (and their associations between doorHash, modelHash, and coordinates).
 * Only its NetObj removed and flag ``*(v2 + 192) |= 8u`` (1604 retail) toggled.
 *
 * Hash: 0x464D8E1427156FE4 | Since: 323
 */
export declare function removeDoorFromSystem(doorHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x4A39DB43E47CF3AA | Since: 323
 */
export declare function removeHighDetailModel(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x3288D8ACAECD2AB2 | Since: 323
 */
export declare function removePickup(pickup: any): void;
/**
 * draws circular marker at pos
 * -1 = none
 * 0 = red
 * 1 = green
 * 2 = blue
 * 3 = green larger
 * 4 = nothing
 * 5 = green small
 *
 * Hash: 0x3430676B11CDF21D | Since: 323
 */
export declare function renderFakePickupGlow(pos: Vector3, colorIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAFE24E4D29249E4A | Since: 1734
 */
export declare function rotate(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x406137F8EF90EAF5 | Since: 323
 */
export declare function setActivatePhysicsAsSoonAsItIsUnfrozen(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x826D1EE4D1CAFC78 | Since: 505
 */
export declare function setCustomPickupWeaponHash(pickupHash: number | string, pickup: any): void;
/**
 * Requires a component_at_*_flsh to be attached to the weapon object
 *
 * Hash: 0xBCE595371A5FBAAF | Since: 323
 */
export declare function setCutscenesWeaponFlashlightOnThisFrame(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8CAAB2BD3EA58BD4 | Since: 1011
 */
export declare function setDisableCollisionsBetweenCarsAndCarParachute(): void;
/**
 * Activate the physics to: "xs_prop_arena_{flipper,wall,bollard,turntable,pit}"
 *
 * Hash: 0x911024442F4898F0 | Since: 1604
 */
export declare function setDriveArticulatedJoint(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB20834A7DD3D8896 | Since: 1604
 */
export declare function setDriveArticulatedJointWithInflictor(_object: number | IObject, toggle: boolean, ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xB2D0BDE54F0E8E5A | Since: 323
 */
export declare function setEntityFlagRenderSmallShadow(_object: number | IObject, toggle: boolean): void;
/**
 * Sets entity+38 to C (when false) or 0xFF3f (when true)
 *
 * Hash: 0xD05A3241B9A86F19 | Since: 1180
 */
export declare function setEntityFlagSuppressShadow(entity: number | IEntity, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF538081986E49E9D | Since: 323
 */
export declare function setForceThisFrame(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x1C57C94A6446492A | Since: 1604
 */
export declare function setIsArticulated(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB5B7742424BD4445 | Since: 1604
 */
export declare function setIsBall(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x78857FC65CADB909 | Since: 323
 */
export declare function setLocalPlayerCanCollectPortablePickups(toggle: boolean): void;
/**
 * Maximum amount of pickup models that can be disallowed is 30.
 *
 * Hash: 0x88EAEC617CD26926 | Since: 323
 */
export declare function setLocalPlayerPermittedToCollectPickupsWithModel(modelHash: number | string, toggle: boolean): void;
/**
 * Hardcoded not to work in multiplayer environments.
 * When you set locked to 0 the door open and to 1 the door close
 * `OBJECT::SET_LOCKED_UNSTREAMED_IN_DOOR_OF_TYPE(${prop_gate_prison_01}, 1845.0, 2605.0, 45.0, 0, 0.0, 50.0, 0);  //door open`
 *
 * `OBJECT::SET_LOCKED_UNSTREAMED_IN_DOOR_OF_TYPE(${prop_gate_prison_01}, 1845.0, 2605.0, 45.0, 1, 0.0, 50.0, 0);  //door close`
 *
 * Hash: 0x9B12F9A24FABEDB0 | Since: 323
 */
export declare function setLockedUnstreamedInDoorOfType(modelHash: number | string, pos: Vector3, locked: boolean, xRotMult: number, yRotMult: number, zRotMult: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0BF3B3BD47D79C08 | Since: 323
 */
export declare function setMaxNumPortablePickupsCarriedByPlayer(modelHash: number | string, _number: number): void;
/**
 * Overrides the climbing/blocking flags of the object, used in the native scripts mostly for "prop_dock_bouy_*"
 *
 * Hash: 0x4D89D607CB3DD1D2 | Since: 323
 */
export declare function setAllowLowLodBuoyancy(_object: number | IObject, toggle: boolean): void;
/**
 * Overrides a flag on the object which determines if the object should be avoided by a vehicle in task CTaskVehicleGoToPointWithAvoidanceAutomobile.
 *
 * Hash: 0x77F33F2CCF64B3AA | Since: 323
 */
export declare function setForceVehiclesToAvoid(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x62454A641B41F3C5 | Since: 678
 */
export declare function setGlowInSameTeam(pickup: any): void;
/**
 * No comment provided
 *
 * Hash: 0x734E1714D077DA9A | Since: 1604
 */
export declare function setIsAPressurePlate(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC6033D32241F6FB5 | Since: 323
 */
export declare function setIsSpecialGolfball(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x3B2FD68DB5F8331C | Since: 757
 */
export declare function setIsVisibleInMirrors(_object: number | IObject, toggle: boolean): void;
/**
 * Adjust the physics parameters of a prop, or otherwise known as "object". This is useful for simulated gravity.
 *
 * Other parameters seem to be unknown.
 *
 * p2: seems to be weight and gravity related. Higher value makes the obj fall faster. Very sensitive?
 * p3: seems similar to p2
 * p4: makes obj fall slower the higher the value
 * p5: similar to p4
 *
 * Hash: 0xF6DF6E90DE7DF90F | Since: 323
 */
export declare function setPhysicsParams(_object: number | IObject, weight: number, gravity: number, buoyancy: number): void;
/**
 * No comment provided
 *
 * Hash: 0x96EE0EBA0163DF80 | Since: 791
 */
export declare function setSpeedBoostAmount(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xDF6CA0330F2E737B | Since: 791
 */
export declare function setSpeedBoostDuration(_object: number | IObject, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEB6F1A9B5510A5D2 | Since: 323
 */
export declare function setTakesDamageFromCollidingWithBuildings(): void;
/**
 * No comment provided
 *
 * Hash: 0x8A7391690F5AFD81 | Since: 323
 */
export declare function setTargettable(_object: number | IObject, targettable: boolean): void;
/**
 * enum ObjectPaintVariants
 * {
 * Pacific = 0,
 * Azure = 1,
 * Nautical = 2,
 * Continental = 3,
 * Battleship = 4,
 * Intrepid = 5,
 * Uniform = 6,
 * Classico = 7,
 * Mediterranean = 8,
 * Command = 9,
 * Mariner = 10,
 * Ruby = 11,
 * Vintage = 12,
 * Pristine = 13,
 * Merchant = 14,
 * Voyager = 15
 * };
 *
 * Hash: 0x971DA0055324D033 | Since: 323
 */
export declare function setTintIndex(_object: number | IObject, textureVariation: number): void;
/**
 * No comment provided
 *
 * Hash: 0x31F924B53EADDF65 | Since: 323
 */
export declare function setOnlyAllowAmmoCollectionWhenLow(): void;
/**
 * No comment provided
 *
 * Hash: 0x318516E02DE3ECE2 | Since: 323
 */
export declare function setPickupGenerationRangeMultiplier(multiplier: number): void;
/**
 * p1 is always 0.51. This native is called before SET_PICKUP_REGENERATION_TIME in all occurances.
 *
 * Hash: 0x0596843B34B95CE5 | Since: 505
 */
export declare function setPickupGlowOffset(pickup: any): void;
/**
 * No comment provided
 *
 * Hash: 0x3ED2B83AB2E82799 | Since: 757
 */
export declare function setPickupHiddenWhenUncollectable(pickup: any, toggle: boolean): void;
/**
 * p0 is either 0 or 50 in scripts.
 *
 * Hash: 0x8CFF648FBD7330F1 | Since: 757
 */
export declare function setPickupAlphaWhenTransparent(): void;
/**
 * No comment provided
 *
 * Hash: 0x39A5FB7EAF150840 | Since: 678
 */
export declare function setPickupArrowMarker(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x7813E8B8C4AE4799 | Since: 1734
 */
export declare function setPickupCollectableInVehicle(pickup: any): void;
/**
 * p1 is always -0.2 in scripts and p2 is always true in scripts.
 *
 * Hash: 0xA08FE5E49BDC39DD | Since: 323
 */
export declare function setPickupObjectGlowOffset(pickup: any): void;
/**
 * No comment provided
 *
 * Hash: 0x27F248C3FEBFAAD3 | Since: 2372
 */
export declare function setPickupGlowWhenUncollectable(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8881C98A31117998 | Since: 678
 */
export declare function setPickupObjectTransparentWhenUncollectable(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x78015C9B4B3ECC9D | Since: 323
 */
export declare function setPickupRegenerationTime(pickup: any, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBFFE53AE7E67FCDC | Since: 1290
 */
export declare function setPickupTrackDamageEvents(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x858EC9FD25DE04AA | Since: 757
 */
export declare function setPickupTransparentWhenUncollectable(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1C1B69FAE509BA97 | Since: 757
 */
export declare function setPickupUncollectable(pickup: any, toggle: boolean): void;
/**
 * Disabling/enabling a player from getting pickups. From the scripts:
 *
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);`
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);`
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 1);`
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);`
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_armour_standard}, 0);`
 * `OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_armour_standard}, 1);`
 *
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 *
 * Hash: 0x616093EC6B139DD9 | Since: 323
 */
export declare function setPlayerPermittedToCollectPickupsOfType(player: number | string | IPlayer, pickupHash: number | string, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x46F3ADD1E2D5BAF2 | Since: 877
 */
export declare function setPortablePickupPersist(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x63ECF581BC70E363 | Since: 1365
 */
export declare function setProjectilesShouldExplodeOnContact(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x5F048334B4A4E774 | Since: 1493
 */
export declare function setPropLightColor(_object: number | IObject, r: number, g: number, b: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x31574B1B41268673 | Since: 2189
 */
export declare function setPropTintIndex(): void;
/**
 * Hardcoded to not work in multiplayer.
 *
 *
 * Used to lock/unlock doors to interior areas of the game.
 *
 * (Possible) Door Types:
 *
 * https://pastebin.com/9S2m3qA4
 *
 * Heading is either 1, 0 or -1 in the scripts. Means default closed(0) or opened either into(1) or out(-1) of the interior.
 * Locked means that the heading is locked.
 * p6 is always 0.
 *
 * 225 door types, model names and coords found in stripclub.c4:
 * https://pastebin.com/gywnbzsH
 *
 * get door info: https://pastebin.com/i14rbekD
 *
 * Hash: 0xF82D8F1926A02C3D | Since: 323
 */
export declare function setStateOfClosestDoorOfType(_type: number | string, pos: Vector3, locked: boolean, heading: number): void;
/**
 * Defines the state of a destructible object.
 * Use the GET_RAYFIRE_MAP_OBJECT native to find an object's handle with its name / coords.
 * State 2 == object just spawned
 * State 4 == Beginning of the animation
 * State 6 == Start animation
 * State 9 == End of the animation
 *
 * Hash: 0x5C29F698D404C5E1 | Since: 323
 */
export declare function setStateOfRayfireMap(_object: number | IObject, state: number): void;
/**
 * No comment provided
 *
 * Hash: 0x53E0DF1A2A3CF0CA | Since: 323
 */
export declare function setTeamPickup(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xF12E33034D887F66 | Since: 1103
 */
export declare function setTintIndexClosestBuildingOfType(pos: Vector3, radius: number, modelHash: number | string, textureVariation: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1A6CBB06E2D0D79D | Since: 1604
 */
export declare function setWeaponImpactsApplyGreaterForce(_object: number | IObject): void;
/**
 * Returns true if the object has finished moving.
 *
 * If false, moves the object towards the specified X, Y and Z coordinates with the specified X, Y and Z speed.
 *
 * See also: https://gtagmodding.com/opcode-database/opcode/034E/
 * Has to be looped until it returns true.
 *
 * Hash: 0x2FDFF4107B8C1147 | Since: 323
 */
export declare function slide(_object: number | IObject, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
/**
 * enum ePickupRewardType
 * {
 * PICKUP_REWARD_TYPE_AMMO = (1 << 0),
 * PICKUP_REWARD_TYPE_BULLET_MP = (1 << 1),
 * PICKUP_REWARD_TYPE_MISSILE_MP = (1 << 2),
 * PICKUP_REWARD_TYPE_GRENADE_LAUNCHER_MP = (1 << 3),
 * PICKUP_REWARD_TYPE_ARMOUR = (1 << 4),
 * PICKUP_REWARD_TYPE_HEALTH = (1 << 5),
 * PICKUP_REWARD_TYPE_HEALTH_VARIABLE = PICKUP_REWARD_TYPE_HEALTH,
 * PICKUP_REWARD_TYPE_MONEY_FIXED = (1 << 6),
 * PICKUP_REWARD_TYPE_MONEY_VARIABLE = PICKUP_REWARD_TYPE_MONEY_FIXED,
 * PICKUP_REWARD_TYPE_WEAPON = (1 << 7),
 * PICKUP_REWARD_TYPE_STAT = (1 << 8),
 * PICKUP_REWARD_TYPE_STAT_VARIABLE = PICKUP_REWARD_TYPE_STAT,
 * PICKUP_REWARD_TYPE_VEHICLE_FIX = (1 << 9),
 * PICKUP_REWARD_TYPE_FIREWORK_MP = (1 << 10),
 * };
 *
 * Hash: 0xF92099527DB8E2A7 | Since: 323
 */
export declare function suppressPickupRewardType(rewardType: number, suppress: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8DCA505A5C196F05 | Since: 1180
 */
export declare function suppressPickupSoundForPickup(): void;
/**
 * No comment provided
 *
 * Hash: 0xB252BC036B525623 | Since: 323
 */
export declare function trackVisibility(_object: number | IObject): void;
/**
 * Sets the 34th and 35th object flags related to player peds.
 *
 * Hash: 0xB39F03368DB0CAA2 | Since: 3258
 */
export declare function setTargettableByPlayer(_object: number | IObject, setFlag34: boolean, setFlag35: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x08BD8BA5BDE2C2FA | Since: 3407
 */
export declare function setPickupGlowDisabled(pickup: any, toggle: boolean): void;
