import { Vector3, IEntity, IPed, IPlayer, IVehicle } from '@risinglife/fivem-shared';
/**
 * No comment provided
 *
 * Hash: 0x2CE544C68FB812A0 | Since: 323
 */
export declare function addRoadNodeSpeedZone(pos: Vector3, radius: number, speed: number): number;
/**
 * No comment provided
 *
 * Hash: 0x54B0F614960F4A5F | Since: 323
 */
export declare function addCombatAngledAvoidanceArea(): number;
/**
 * No comment provided
 *
 * Hash: 0x99AD4CCCB128CBC9 | Since: 323
 */
export declare function addPhoneExplosiveDevice(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x2FA9923062DD396C | Since: 323
 */
export declare function addStuckCheckWithWarp(): void;
/**
 * No comment provided
 *
 * Hash: 0xB72E26D81006005B | Since: 323
 */
export declare function addUpsidedownCheck(vehicle: number | IVehicle): void;
/**
 * This native doesn't seem to do anything, might be a debug-only native.
 *
 * Confirmed, it is a debug native.
 *
 * Hash: 0xB264C4D2F2B0A78B | Since: 323
 */
export declare function allowAmbientsToAvoidAdverseConditions(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x0F3B4D4E43177236 | Since: 323
 */
export declare function allowBoatBoomToAnimate(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x2310A8F9421EBF43 | Since: 2372
 */
export declare function allowTrainToBeRemovedByPopulation(): void;
/**
 * No comment provided
 *
 * Hash: 0x249249D74F813EB2 | Since: 3095
 */
export declare function applyEmpEffect(vehicle: number | IVehicle): void;
/**
 * Appears to return false if any window is broken.
 *
 * Hash: 0x11D862A3E977A9EF | Since: 323
 */
export declare function areAllWindowsIntact(vehicle: number | IVehicle): boolean;
/**
 * Returns false if every seat is occupied.
 *
 * Hash: 0x2D34FC3BC4ADB780 | Since: 323
 */
export declare function areAnySeatsFree(vehicle: number | IVehicle): boolean;
/**
 * Only used with the "akula" and "annihilator2" in the decompiled native scripts.
 *
 * Hash: 0xAEF12960FA943792 | Since: 1290
 */
export declare function areFoldingWingsDeployed(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF78F94D60248C737 | Since: 323
 */
export declare function arePlaneControlPanelsIntact(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x755D6D5267CBBD7E | Since: 323
 */
export declare function arePlanePropellersIntact(plane: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5991A01434CE9677 | Since: 323
 */
export declare function areWingsOfPlaneIntact(plane: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6A98C2ECF57FA5D4 | Since: 323
 */
export declare function attachContainerToHandlerFrameWhenLinedUp(vehicle: number | IVehicle, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xA1DD82F3CCF9A01E | Since: 944
 */
export declare function attachEntityToCargobob(): void;
/**
 * This is the proper way of attaching vehicles to the car carrier, it's what Rockstar uses. Video Demo: https://www.youtube.com/watch?v=2lVEIzf7bgo
 *
 * Hash: 0x16B5E274BDE402F8 | Since: 323
 */
export declare function attachOnToTrailer(vehicle: number | IVehicle, trailer: number | IVehicle, offsetX: number, offsetY: number, offsetZ: number, coordsX: number, coordsY: number, coordsZ: number, rotationX: number, rotationY: number, rotationZ: number, disableCollisions: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4127F1D84E347769 | Since: 323
 */
export declare function attachToCargobob(cargobob: number | IVehicle, vehicle: number | IVehicle, pos: Vector3): void;
/**
 * HookOffset defines where the hook is attached. leave at 0 for default attachment.
 *
 * Hash: 0x29A16F8D621C4508 | Since: 323
 */
export declare function attachToTowTruck(towTruck: number | IVehicle, vehicle: number | IVehicle, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3C7D42D58F770B54 | Since: 323
 */
export declare function attachToTrailer(vehicle: number | IVehicle, trailer: number | IVehicle, radius: number): void;
/**
 * This native makes the vehicle stop immediately, as happens when we enter a MP garage.
 *
 * . distance defines how far it will travel until stopping. Garage doors use 3.0.
 *
 * . If killEngine is set to 1, you cannot resume driving the vehicle once it stops. This looks like is a bitmapped integer.
 *
 * Hash: 0x260BE8F09E326A20 | Since: 323
 */
export declare function bringToHalt(vehicle: number | IVehicle, distance: number, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x26C10ECBDA5D043B | Since: 323
 */
export declare function canAnchorBoatHere(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x24F4121D07579880 | Since: 678
 */
export declare function canAnchorBoatHereIgnorePlayers(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2C1D8B3B19E517CC | Since: 757
 */
export declare function canCargobobPickUpEntity(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x30785D90C956BF35 | Since: 323
 */
export declare function canShuffleSeat(vehicle: number | IVehicle, seatIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE01903C47C7AC89E | Since: 323
 */
export declare function clearLastDriven(): void;
/**
 * No comment provided
 *
 * Hash: 0xC889AE921400E1ED | Since: 3095
 */
export declare function clearNitrous(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x55E1D2758F34E437 | Since: 323
 */
export declare function clearCustomPrimaryColour(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x5FFBDEEC3E8E2009 | Since: 323
 */
export declare function clearCustomSecondaryColour(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x0A436B8643716D14 | Since: 323
 */
export declare function clearGeneratorAreaOfInterest(): void;
/**
 * No comment provided
 *
 * Hash: 0x4419966C9936071A | Since: 463
 */
export declare function clearPetroltankFireCulprit(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xAA3F739ABDDCF21F | Since: 463
 */
export declare function clearPhoneExplosiveDevice(): void;
/**
 * No comment provided
 *
 * Hash: 0x6D6AF961B72728AE | Since: 323
 */
export declare function clearRouteHistory(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x3556041742A0DC74 | Since: 323
 */
export declare function closeBombBayDoors(vehicle: number | IVehicle): void;
/**
 * Works for vehicles with a retractable landing gear
 *
 * Landing gear states:
 *
 * 0: Deployed
 * 1: Closing
 * 2: Opening
 * 3: Retracted
 *
 * Hash: 0xCFC8BE9A5E1FE575 | Since: 323
 */
export declare function controlLandingGear(vehicle: number | IVehicle, state: number): void;
/**
 * Copies sourceVehicle's damage (broken bumpers, broken lights, etc.) to targetVehicle.
 *
 * Hash: 0xE44A982368A4AF23 | Since: 323
 */
export declare function copyDamages(sourceVehicle: number | IVehicle, targetVehicle: number | IVehicle): void;
/**
 * Train models HAVE TO be loaded (requested) before you use this.
 * For variation 15 - request:
 *
 * freight
 * freightcar
 * freightgrain
 * freightcont1
 * freightcont2
 * freighttrailer
 *
 *
 *
 * Hash: 0x63C6CCA8E68AE8C8 | Since: 323
 */
export declare function createMissionTrain(variation: number, pos: Vector3, direction: boolean): number;
/**
 * Drops the Hook/Magnet on a cargobob
 *
 * state
 * enum eCargobobHook
 * {
 * CARGOBOB_HOOK = 0,
 * CARGOBOB_MAGNET = 1,
 * };
 *
 * Hash: 0x7BEB0C7A235F6F3B | Since: 323
 */
export declare function createPickUpRopeForCargobob(cargobob: number | IVehicle, state: number): void;
/**
 * Creates a script vehicle generator at the given coordinates. Most parameters after the model hash are unknown.
 *
 * Parameters:
 * x/y/z - Generator position
 * heading - Generator heading
 * p4 - Unknown (always 5.0)
 * p5 - Unknown (always 3.0)
 * modelHash - Vehicle model hash
 * p7/8/9/10 - Unknown (always -1)
 * p11 - Unknown (usually TRUE, only one instance of FALSE)
 * p12/13 - Unknown (always FALSE)
 * p14 - Unknown (usally FALSE, only two instances of TRUE)
 * p15 - Unknown (always TRUE)
 * p16 - Unknown (always -1)
 *
 * Vector3 coords = GET_ENTITY_COORDS(PLAYER_PED_ID(), 0);    CREATE_SCRIPT_VEHICLE_GENERATOR(coords.x, coords.y, coords.z, 1.0f, 5.0f, 3.0f, GET_HASH_KEY("adder"), -1. -1, -1, -1, -1, true, false, false, false, true, -1);
 *
 * Hash: 0x9DEF883114668116 | Since: 323
 */
export declare function createScriptGenerator(pos: Vector3, heading: number, modelHash: number | string): number;
/**
 * p7 when set to true allows you to spawn vehicles under -100 z.
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0xAF35D0D2583051B0 | Since: 323
 */
export declare function create(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostVeh: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x736A718577F39C7D | Since: 323
 */
export declare function deleteAllTrains(): void;
/**
 * No comment provided
 *
 * Hash: 0x5B76B14AE875C795 | Since: 323
 */
export declare function deleteMissionTrain(train: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x22102C9ABFCF125D | Since: 323
 */
export declare function deleteScriptGenerator(vehicleGenerator: number): void;
/**
 * Deletes a vehicle.
 * The vehicle must be a mission entity to delete, so call this before deleting: SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
 *
 * eg how to use:
 * SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
 * DELETE_VEHICLE(&vehicle);
 *
 * Deletes the specified vehicle, then sets the handle pointed to by the pointer to NULL.
 *
 * Hash: 0xEA386986E786A54F | Since: 323
 */
export declare function deleteVehicle(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x7C0043FDFF6436BC | Since: 323
 */
export declare function detachContainerFromHandlerFrame(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xAF03011701811146 | Since: 678
 */
export declare function detachEntityFromCargobob(cargobob: number | IVehicle, entity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0xADF7BE450512C12F | Since: 323
 */
export declare function detachFromAnyCargobob(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD0E9CE05A1E68CD8 | Since: 323
 */
export declare function detachFromAnyTowTruck(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0E21D3DF1051399D | Since: 323
 */
export declare function detachFromCargobob(vehicle: number | IVehicle, cargobob: number | IVehicle): void;
/**
 * First two parameters swapped. Scripts verify that towTruck is the first parameter, not the second.
 *
 * Hash: 0xC2DB6B6708350ED8 | Since: 323
 */
export declare function detachFromTowTruck(towTruck: number | IVehicle, vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x90532EDF0D2BDD86 | Since: 323
 */
export declare function detachFromTrailer(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xEF49CF0270307CBE | Since: 323
 */
export declare function detonatePhoneExplosiveDevice(): void;
/**
 * No comment provided
 *
 * Hash: 0x500873A45724C863 | Since: 323
 */
export declare function disableIndividualPlanePropeller(vehicle: number | IVehicle, propeller: number): void;
/**
 * No comment provided
 *
 * Hash: 0x23428FC53C60919C | Since: 323
 */
export declare function disablePlaneAileron(vehicle: number | IVehicle): void;
/**
 * Adds some kind of shadow to the vehicle.
 *
 * p1 and p2 use values from 0-255 and both make the shadow darker the lower the value is. -1 disables the effect.
 *
 * Hash: 0xF0E4BA16D1DB546C | Since: 323
 */
export declare function disableVehcileDynamicAmbientScales(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xF25E02CB9C5818F8 | Since: 323
 */
export declare function disableExplosionBreakOffParts(): void;
/**
 * No comment provided
 *
 * Hash: 0x32CAEDF24A583345 | Since: 463
 */
export declare function disableTurretMovementThisFrame(vehicle: number | IVehicle): void;
/**
 * Full list of weapons by DurtyFree (Search for VEHICLE_*): https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0xF4FC6A6F67D8D856 | Since: 323
 */
export declare function disableWeapon(disabled: boolean, weaponHash: number | string, vehicle: number | IVehicle, owner: number | IPed): void;
/**
 * Returns true only when the magnet is active, will return false if the hook is active
 *
 * Hash: 0x6E08BF5B3722BAC9 | Since: 323
 */
export declare function doesCargobobHavePickupMagnet(cargobob: number | IVehicle): boolean;
/**
 * Returns true only when the hook is active, will return false if the magnet is active
 *
 * Hash: 0x1821D91AD4B56108 | Since: 323
 */
export declare function doesCargobobHavePickUpRope(cargobob: number | IVehicle): boolean;
/**
 * Checks via CVehicleModelInfo
 *
 * Hash: 0x1262D55792428154 | Since: 323
 */
export declare function doesExtraExist(vehicle: number | IVehicle, extraId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF6086BC836400876 | Since: 323
 */
export declare function doesScriptGeneratorExist(vehicleGenerator: number): boolean;
/**
 * Returns true if the vehicle has the FLAG_ALLOWS_RAPPEL flag set.
 *
 * Hash: 0x4E417C547182C84D | Since: 757
 */
export declare function doesAllowRappel(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x956B409B984D9BF7 | Since: 323
 */
export declare function doesExistWithDecorator(decorator: string): number;
/**
 * No comment provided
 *
 * Hash: 0x8AC862B0B32C5B80 | Since: 323
 */
export declare function doesHaveRoof(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x99015ED7DBEA5113 | Since: 2189
 */
export declare function doesHaveSearchlight(vehicle: number | IVehicle): boolean;
/**
 * Maximum amount of vehicles with vehicle stuck check appears to be 16.
 *
 * Hash: 0x57E4C39DE5EE8470 | Since: 323
 */
export declare function doesHaveStuckVehicleCheck(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x25ECB9F8017D98E0 | Since: 323
 */
export declare function doesHaveWeapons(vehicle: number | IVehicle): boolean;
/**
 * Remove the weird shadow applied by DISABLE_VEHCILE_DYNAMIC_AMBIENT_SCALES.
 *
 * Hash: 0xF87D9F2301F7D206 | Since: 323
 */
export declare function enableDynamicAmbientScales(vehicle: number | IVehicle): void;
/**
 * Explodes a selected vehicle.
 *
 * Vehicle vehicle = Vehicle you want to explode.
 * BOOL isAudible = If explosion makes a sound.
 * BOOL isInvisible = If the explosion is invisible or not.
 *
 * First BOOL does not give any visual explosion, the vehicle just falls apart completely but slowly and starts to burn.
 *
 * Hash: 0xBA71116ADF5B514C | Since: 323
 */
export declare function explode(vehicle: number | IVehicle, isAudible: boolean, isInvisible: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x786A4EB67B01BF0B | Since: 323
 */
export declare function explodeInCutscene(vehicle: number | IVehicle): void;
/**
 * Finds the vehicle that is carrying this entity with a handler frame.
 * The model of the entity must be prop_contr_03b_ld or the function will return 0.
 *
 * Hash: 0x375E7FC44F21C8AB | Since: 323
 */
export declare function findHandlerContainerIsAttachedTo(entity: number | IEntity): number;
/**
 * Native is significantly more complicated than simply generating a random vector & length.
 * `The 'point' is either 400.0 or 250.0 units away from the Ped's current coordinates; and paths into functions like rage::grcViewport___IsSphereVisible`
 *
 * Hash: 0x8DC9675797123522 | Since: 1290
 */
export declare function findSpawnCoordinatesForHeli(ped: number | IPed): Vector3;
/**
 * windowIndex:
 * 0 = Front Left Window
 * 1 = Front Right Window
 * 2 = Rear Left Window
 * 3 = Rear Right Window
 * 4 = Front Windscreen
 * 5 = Rear Windscreen
 * 6 = Mid Left
 * 7 = Mid Right
 * 8 = Invalid
 *
 * Additional information: FIX_VEHICLE_WINDOW (0x140D0BB88) references an array of bone vehicle indices (0x141D4B3E0) { 2Ah, 2Bh, 2Ch, 2Dh, 2Eh, 2Fh, 28h, 29h } that correspond to: window_lf, window_rf, window_lr, window_rr, window_lm, window_rm, windscreen, windscreen_r. This array is used by most vehwindow natives.
 *
 * Also, this function is coded to not work on vehicles of type: CBike, Bmx, CBoat, CTrain, and CSubmarine.
 *
 * Hash: 0x772282EBEB95E682 | Since: 323
 */
export declare function fixWindow(vehicle: number | IVehicle, windowIndex: number): void;
/**
 * Often called after START_PLAYBACK_RECORDED_VEHICLE and SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE; similar in use to FORCE_ENTITY_AI_AND_ANIMATION_UPDATE.
 *
 * Hash: 0x1F2E4E06DEA8992B | Since: 323
 */
export declare function forcePlaybackRecordedUpdate(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xC67DB108A9ADE3BE | Since: 2189
 */
export declare function forceSubmarineNeurtalBuoyancy(): void;
/**
 * No comment provided
 *
 * Hash: 0x33506883545AC0DF | Since: 323
 */
export declare function forceSubmarineSurfaceMode(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x99CAD8E7AFDB60FA | Since: 323
 */
export declare function forceSubThrottleForTime(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x1A2BCC8C636F9226 | Since: 3095
 */
export declare function fullyChargeNitrous(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xA4822F1CF23F4810 | Since: 323
 */
export declare function generateCreationPosFromPaths(): [boolean, Vector3, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x9B8E1BF04B51F2E8 | Since: 1103
 */
export declare function getAlls(): [number, any];
/**
 * Returns true when the bomb bay doors of this plane are open. False if they're closed.
 *
 * Hash: 0xD0917A423314BBA8 | Since: 1180
 */
export declare function getAreBombBayDoorsOpen(aircraft: number | IVehicle): boolean;
/**
 * Gets the position of the cargobob hook, in world coords.
 *
 * Hash: 0xCBDB9B923CACC92D | Since: 323
 */
export declare function getAttachedPickUpHookPosition(cargobob: number | IVehicle): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x6636C535F6CC2725 | Since: 323
 */
export declare function getBoatBoomPositionRatio(vehicle: number | IVehicle): number;
/**
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0x5AA3F878A178C4FC | Since: 323
 */
export declare function getBoatModelAgility(modelHash: number | string): number;
/**
 * Returns true when both headlights are broken. This does not include extralights.
 *
 * Hash: 0xEC69ADF931AAE0C3 | Since: 505
 */
export declare function getBothHeadlightsDamaged(vehicle: number | IVehicle): boolean;
/**
 * Used in decompiled scripts in combination with GET_VEHICLE_SIZE
 * p7 is usually 2
 * p8 is usually 1
 *
 * Hash: 0x51F30DB60626A20E | Since: 1180
 */
export declare function getCanBePlacedHere(vehicle: number | IVehicle, pos: Vector3, rot: Vector3): boolean;
/**
 * Returns true if the vehicle has the FLAG_JUMPING_CAR flag set.
 *
 * Hash: 0x9078C0C5EF8C19E9 | Since: 944
 */
export declare function getCarHasJump(vehicle: number | IVehicle): boolean;
/**
 * Example usage
 * `VEHICLE::GET_CLOSEST_VEHICLE(x, y, z, radius, hash, unknown leave at 70)`
 *
 * x, y, z: Position to get closest vehicle to.
 * radius: Max radius to get a vehicle.
 * modelHash: Limit to vehicles with this model. 0 for any.
 * flags: The bitwise flags altering the function's behaviour.
 *
 * Does not return police cars or helicopters.
 *
 * It seems to return police cars for me, does not seem to return helicopters, planes or boats for some reason
 *
 * Only returns non police cars and motorbikes with the flag set to 70 and modelHash to 0. ModelHash seems to always be 0 when not a modelHash in the scripts, as stated above.
 *
 * These flags were found in the b617d scripts: 0,2,4,6,7,23,127,260,2146,2175,12294,16384,16386,20503,32768,67590,67711,98309,100359.
 * Converted to binary, each bit probably represents a flag as explained regarding another native here: gtaforums.com/topic/822314-guide-driving-styles
 *
 * Conversion of found flags to binary: https://pastebin.com/kghNFkRi
 *
 * At exactly 16384 which is 0100000000000000 in binary and 4000 in hexadecimal only planes are returned.
 *
 * `It's probably more convenient to use worldGetAllVehicles(int *arr, int arrSize) and check the shortest distance yourself and sort if you want by checking the vehicle type with for example VEHICLE::IS_THIS_MODEL_A_BOAT`
 *
 * -------------------------------------------------------------------------
 *
 * Conclusion: This native is not worth trying to use. Use something like this instead: https://pastebin.com/xiFdXa7h
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0xF73EB622C4F1689B | Since: 323
 */
export declare function getClosest(pos: Vector3, radius: number, modelHash: number | string, flags: number): number;
/**
 * 0 -> up
 * 1 -> lowering down
 * 2 -> down
 * 3 -> raising up
 *
 * Hash: 0xF8C397922FC03F41 | Since: 323
 */
export declare function getConvertibleRoofState(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x42BC05C27A946054 | Since: 323
 */
export declare function getCurrentPlaybackFor(vehicle: number | IVehicle): number;
/**
 * Returns model name of vehicle in all caps. Needs to be displayed through localizing text natives to get proper display name.
 * -----------------------------------------------------------------------------------------------------------------------------------------
 * While often the case, this does not simply return the model name of the vehicle (which could be hashed to return the model hash). Variations of the same vehicle may also use the same display name.
 * -----------------------------------------------------------------------------------------------------------------------------------------
 *
 * Returns "CARNOTFOUND" if the hash doesn't match a vehicle hash.
 *
 * `Using HUD::GET_FILENAME_FOR_AUDIO_CONVERSATION, you can get the localized name.`
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0xB215AAC32D25D019 | Since: 323
 */
export declare function getDisplayNameFromModel(modelHash: number | string): string;
/**
 * Appears to return true if the vehicle has any damage, including cosmetically.
 *
 * Hash: 0xBCDC5017D3CE1E9E | Since: 323
 */
export declare function getDoesHaveDamageDecals(vehicle: number | IVehicle): boolean;
/**
 * Returns true only if the "tombstone" bone is attached to the vehicle, irrespective of "FLAG_HAS_TOMBSTONE" being present or not. Detaching the tombstone will return false.
 *
 * Hash: 0x71AFB258CCED3A27 | Since: 1604
 */
export declare function getDoesHaveTombstone(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2F5A72430E78C8D3 | Since: 2372
 */
export declare function getDriftTyresSet(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x99093F60746708CA | Since: 1103
 */
export declare function getEntityAttachedToCargobob(): number;
/**
 * No comment provided
 *
 * Hash: 0xEFEA18DCF10F8F75 | Since: 323
 */
export declare function getEntityAttachedToTowTruck(towTruck: number | IVehicle): number;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xC0572928C0ABFDA3 | Since: 944
 */
export declare function getEntryPointPosition(vehicle: number | IVehicle, doorId: number): Vector3;
/**
 * Gets the height of the vehicle's suspension.
 * The higher the value the lower the suspension. Each 0.002 corresponds with one more level lowered.
 * 0.000 is the stock suspension.
 * 0.008 is Ultra Suspension.
 *
 * Hash: 0x53952FD2BAA19F17 | Since: 323
 */
export declare function getFakeSuspensionLoweringAmount(vehicle: number | IVehicle): number;
/**
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0xC6AD107DDC9054CC | Since: 323
 */
export declare function getFlyingModelAgility(modelHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xDCA174A42133F08C | Since: 944
 */
export declare function getHasRetractableWheels(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x36D782F68B309BDA | Since: 944
 */
export declare function getHasRocketBoost(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE8718FAF591FD224 | Since: 1604
 */
export declare function getHasBeenHitByShunt(vehicle: number | IVehicle): boolean;
/**
 * Max 1000.
 * At 0 the main rotor will stall.
 *
 * Hash: 0xE4CB7541F413D2C5 | Since: 323
 */
export declare function getHeliMainRotorHealth(vehicle: number | IVehicle): number;
/**
 * Max 1000.
 * At -100 both helicopter rotors will stall.
 *
 * Hash: 0xAC51915D27E4A5F7 | Since: 323
 */
export declare function getHeliTailBoomHealth(vehicle: number | IVehicle): number;
/**
 * Max 1000.
 * At 0 the tail rotor will stall.
 *
 * Hash: 0xAE8CE82A4219AC8C | Since: 323
 */
export declare function getHeliTailRotorHealth(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x0BB5CBDDD0F25AE3 | Since: 2372
 */
export declare function getHydraulicSuspensionRaiseFactor(vehicle: number | IVehicle, wheelId: number): number;
/**
 * No comment provided
 *
 * Hash: 0xA01BC64DD4BFBBAC | Since: 323
 */
export declare function getInClipsetHashForSeat(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xBA91D045575699AD | Since: 877
 */
export declare function getIsBoatCapsized(vehicle: number | IVehicle): boolean;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x645F4B6E8499F632 | Since: 944
 */
export declare function getIsDoorValid(vehicle: number | IVehicle, doorId: number): boolean;
/**
 * From the driver's perspective, is the left headlight broken.
 *
 * Hash: 0x5EF77C9ADD3B11A3 | Since: 323
 */
export declare function getIsLeftHeadlightDamaged(vehicle: number | IVehicle): boolean;
/**
 * From the driver's perspective, is the right headlight broken.
 *
 * Hash: 0xA7ECB73355EB2F20 | Since: 323
 */
export declare function getIsRightHeadlightDamaged(vehicle: number | IVehicle): boolean;
/**
 * Returns whether this vehicle is currently disabled by an EMP mine.
 *
 * Hash: 0x0506ED94363AD905 | Since: 1604
 */
export declare function getIsDisabledByEmp(vehicle: number | IVehicle): boolean;
/**
 * Returns true when in a vehicle, false whilst entering/exiting.
 *
 * Hash: 0xAE31E7DF9B5B132E | Since: 323
 */
export declare function getIsEngineRunning(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF095C0405307B21B | Since: 323
 */
export declare function getIsPrimaryColourCustom(vehicle: number | IVehicle): boolean;
/**
 * Check if Vehicle Secondary is avaliable for customize
 *
 * Hash: 0x910A32E7AAD2656C | Since: 323
 */
export declare function getIsSecondaryColourCustom(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA2459F72C14E2E8D | Since: 1604
 */
export declare function getIsShunting(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1DA0DA9CB3F0C8BF | Since: 944
 */
export declare function getIsWheelsRetracted(vehicle: number | IVehicle): boolean;
/**
 * Landing gear states:
 *
 * 0: Deployed
 * 1: Closing (Retracting)
 * 2: (Landing gear state 2 is never used.)
 * 3: Opening (Deploying)
 * 4: Retracted
 *
 * Returns the current state of the vehicles landing gear.
 *
 * Hash: 0x9B0F3DCA3DB0F4CD | Since: 323
 */
export declare function getLandingGearState(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xB2D06FAEDE65B577 | Since: 323
 */
export declare function getLastDriven(): number;
/**
 * No comment provided
 *
 * Hash: 0x83F969AA1EE2A664 | Since: 323
 */
export declare function getLastPedInSeat(vehicle: number | IVehicle, seatIndex: number): number;
/**
 * Returns last vehicle that was rammed by the given vehicle using the shunt boost.
 *
 * Hash: 0x04F2FA6E234162F7 | Since: 1604
 */
export declare function getLastShunt(vehicle: number | IVehicle): number;
/**
 * Returns the text label of the vehicle's liveryIndex, as specified by the liveryNames section of the vehicle's modkit data in the carcols file.
 *
 * example
 *
 * `int count = VEHICLE::GET_VEHICLE_LIVERY_COUNT(veh);`
 * for (int i = 0; i < count; i++)
 * {
 * `const char* LiveryName = VEHICLE::GET_LIVERY_NAME(veh, i);`
 * }
 *
 *
 * this example will work fine to fetch all names
 * for example for Sanchez we get
 *
 * SANC_LV1
 * SANC_LV2
 * SANC_LV3
 * SANC_LV4
 * SANC_LV5
 *
 *
 * Use GET_FILENAME_FOR_AUDIO_CONVERSATION, to get the localized livery name.
 *
 * Full list of vehicle mod kits and mods by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleModKits.json
 *
 * Hash: 0xB4C7A93837C91A1F | Since: 323
 */
export declare function getLiveryName(vehicle: number | IVehicle, liveryIndex: number): string;
/**
 * Will return a vehicle's manufacturer display label.
 * Returns "CARNOTFOUND" if the hash doesn't match a vehicle hash.
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0xF7AF4F159FF99F97 | Since: 1868
 */
export declare function getMakeNameFromModel(modelHash: number | string): string;
/**
 * Returns the name for the type of vehicle mod(Armour, engine etc)
 *
 *
 * Hash: 0x51F0FEB9F6AE98C0 | Since: 323
 */
export declare function getModSlotName(vehicle: number | IVehicle, modType: number): string;
/**
 * Returns the text label of a mod type for a given vehicle
 *
 * Use GET_FILENAME_FOR_AUDIO_CONVERSATION to get the part name in the game's language
 *
 * Hash: 0x8935624F8C5592CC | Since: 323
 */
export declare function getModTextLabel(vehicle: number | IVehicle, modType: number, modValue: number): string;
/**
 * Returns the total amount of color combinations found in the vehicle's carvariations.meta entry.
 *
 * Hash: 0x3B963160CD65D41E | Since: 323
 */
export declare function getNumberOfColours(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x92922A607497B14D | Since: 463
 */
export declare function getNumberOfDoors(vehicle: number | IVehicle): number;
/**
 * Returns the number of *types* of licence plates, enumerated below in SET_VEHICLE_NUMBER_PLATE_TEXT_INDEX.
 *
 * Hash: 0x4C4D6B2644F458CB | Since: 323
 */
export declare function getNumberOfNumberPlates(): number;
/**
 * paintType:
 * 0: Normal
 * 1: Metallic
 * 2: Pearl
 * 3: Matte
 * 4: Metal
 * 5: Chrome
 * 6: Chameleon
 *
 * Hash: 0xA551BE18C11A476D | Since: 323
 */
export declare function getNumModColors(paintType: number): number;
/**
 * No comment provided
 *
 * Hash: 0x33F2E3FE70EAAE1D | Since: 323
 */
export declare function getNumModKits(vehicle: number | IVehicle): number;
/**
 * Returns how many possible mods a vehicle has for a given mod type
 *
 * Hash: 0xE38E9162A2500646 | Since: 323
 */
export declare function getNumMods(vehicle: number | IVehicle, modType: number): number;
/**
 * No comment provided
 *
 * Hash: 0x9D1224004B3A6707 | Since: 323
 */
export declare function getNumWindowTints(): number;
/**
 * Checks if Chernobog's stabilizers are deployed or not.
 * These are the metal supports that allow it to fire.
 * This native only applies to the Chernobog.
 *
 * Hash: 0x3A9128352EAC9E85 | Since: 1290
 */
export declare function getOutriggersDeployed(vehicle: number | IVehicle): boolean;
/**
 * If there is no ped in the seat, and the game considers the vehicle as ambient population, this will create a random occupant ped in the seat, which may be cleaned up by the game fairly soon if not marked as script-owned mission entity.
 *
 * Seat indexes:
 * -1 = Driver
 * 0 = Front Right Passenger
 * 1 = Back Left Passenger
 * 2 = Back Right Passenger
 * 3 = Further Back Left Passenger (vehicles > 4 seats)
 * 4 = Further Back Right Passenger (vehicles > 4 seats)
 * etc.
 *
 * If p2 is true it uses a different GetOccupant function.
 *
 * Hash: 0xBB40DD2270B65366 | Since: 323
 */
export declare function getPedInSeat(vehicle: number | IVehicle, seatIndex: number): number;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x218297BF0CFD853B | Since: 323
 */
export declare function getPedUsingDoor(vehicle: number | IVehicle, doord: number): number;
/**
 * Distance traveled in the vehicles current recording.
 *
 * Hash: 0x2DACD605FC681475 | Since: 323
 */
export declare function getPositionInRecording(vehicle: number | IVehicle): number;
/**
 * This native does no interpolation between pathpoints. The same position will be returned for all times up to the next pathpoint in the recording.
 *
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0xD242728AA6F0FBA2 | Since: 323
 */
export declare function getPositionOfRecordingAtTime(recording: number, time: number, script: string): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x92523B76657A517D | Since: 323
 */
export declare function getPositionOfRecordingIdAtTime(id: number, time: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xB50807EABE20A8DC | Since: 323
 */
export declare function getRandomBackBumperInSphere(): number;
/**
 * No comment provided
 *
 * Hash: 0xC5574E0AEB86BA68 | Since: 323
 */
export declare function getRandomFrontBumperInSphere(): number;
/**
 * Gets a random vehicle in a sphere at the specified position, of the specified radius.
 *
 * x: The X-component of the position of the sphere.
 * y: The Y-component of the position of the sphere.
 * z: The Z-component of the position of the sphere.
 * radius: The radius of the sphere. Max is 9999.9004.
 * modelHash: The vehicle model to limit the selection to. Pass 0 for any model.
 * flags: The bitwise flags that modifies the behaviour of this function.
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0x386F6CE5BAF6091C | Since: 323
 */
export declare function getRandomInSphere(pos: Vector3, radius: number, modelHash: number | string, flags: number): number;
/**
 * Not present in the retail version! It's just a nullsub.
 *
 * p0 always true (except in one case)
 * successIndicator: 0 if success, -1 if failed
 *
 * Hash: 0x055BF0AC0C34F4FD | Since: 323
 */
export declare function getRandomModelInMemory(): [number, number];
/**
 * This native does no interpolation between pathpoints. The same rotation will be returned for all times up to the next pathpoint in the recording.
 *
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x2058206FBE79A8AD | Since: 323
 */
export declare function getRotationOfRecordingAtTime(recording: number, time: number, script: string): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xF0F2103EFAF8CBA7 | Since: 323
 */
export declare function getRotationOfRecordingIdAtTime(id: number, time: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x3E71D0B300B7AA79 | Since: 2189
 */
export declare function getSubmarineIsUnderDesignDepth(submarine: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x093D6DDCA5B8FBAE | Since: 2189
 */
export declare function getSubmarineNumberOfAirLeaks(submarine: number | IVehicle): number;
/**
 * Can be used with GET_TOTAL_DURATION_OF_VEHICLE_RECORDING{_ID} to compute a percentage.
 *
 * Hash: 0x5746F3A7AB7FE544 | Since: 323
 */
export declare function getTimePositionInRecording(vehicle: number | IVehicle): number;
/**
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x0E48D1C262390950 | Since: 323
 */
export declare function getTotalDurationOfRecording(recording: number, script: string): number;
/**
 * No comment provided
 *
 * Hash: 0x102D125411A7B6E6 | Since: 323
 */
export declare function getTotalDurationOfRecordingId(id: number): number;
/**
 * Corrected p1. it's basically the 'carriage/trailer number'. So if the train has 3 trailers you'd call the native once with a var or 3 times with 1, 2, 3.
 *
 * Hash: 0x08AAFD0814722BC3 | Since: 323
 */
export declare function getTrainCarriage(train: number | IVehicle, trailerNumber: number): number;
/**
 * Usable wheels:
 * 0: wheel_lf
 * 1: wheel_rf
 * 2: wheel_lm1
 * 3: wheel_rm1
 * 4: wheel_lr
 * 5: wheel_rr
 *
 * Hash: 0x55EAB010FAEE9380 | Since: 1868
 */
export declare function getTyreHealth(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Returns the multiplier value from SET_TYRE_WEAR_RATE
 *
 * Usable wheels:
 * 0: wheel_lf
 * 1: wheel_rf
 * 2: wheel_lm1
 * 3: wheel_rm1
 * 4: wheel_lr
 * 5: wheel_rr
 *
 * Hash: 0x6E387895952F4F71 | Since: 2060
 */
export declare function getTyreWearRate(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * static - max acceleration
 *
 * Hash: 0x5DD35C8D074E57AE | Since: 323
 */
export declare function getAcceleration(vehicle: number | IVehicle): number;
/**
 * Returns attached vehicle (Vehicle in parameter must be cargobob)
 *
 * Hash: 0x873B82D42AC2B9E5 | Since: 323
 */
export declare function getAttachedToCargobob(cargobob: number | IVehicle): number;
/**
 * Seems related to vehicle health, like the one in IV.
 * Max 1000, min 0.
 * Vehicle does not necessarily explode or become undrivable at 0.
 *
 * Hash: 0xF271147EB7B40F12 | Since: 323
 */
export declare function getBodyHealth(vehicle: number | IVehicle): number;
/**
 * Gets the amount of bombs that this vehicle has. As far as I know, this does _not_ impact vehicle weapons or the ammo of those weapons in any way, it is just a way to keep track of the amount of bombs in a specific plane.
 *
 * Hash: 0xEA12BD130D7569A1 | Since: 1180
 */
export declare function getBombAmmo(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xA916396DF4154EE3 | Since: 944
 */
export declare function getCanDeployParachute(vehicle: number | IVehicle): boolean;
/**
 * iVar3 = get_vehicle_cause_of_destruction(uLocal_248[iVar2]);
 * if (iVar3 == joaat("weapon_stickybomb"))
 * {
 * func_171(726);
 * iLocal_260 = 1;
 * }
 *
 * Hash: 0xE495D1EF4C91FD20 | Since: 323
 */
export declare function getCauseOfDestruction(vehicle: number | IVehicle): number;
/**
 * Returns an int
 *
 * Vehicle Classes:
 * 0: Compacts
 * 1: Sedans
 * 2: SUVs
 * 3: Coupes
 * 4: Muscle
 * 5: Sports Classics
 * 6: Sports
 * 7: Super
 * 8: Motorcycles
 * 9: Off-road
 * 10: Industrial
 * 11: Utility
 * 12: Vans
 * 13: Cycles
 * 14: Boats
 * 15: Helicopters
 * 16: Planes
 * 17: Service
 * 18: Emergency
 * 19: Military
 * 20: Commercial
 * 21: Trains
 *
 * char buffer[128];
 * `std::sprintf(buffer, "VEH_CLASS_%i", VEHICLE::GET_VEHICLE_CLASS(vehicle));`
 *
 * `const char* className = HUD::GET_FILENAME_FOR_AUDIO_CONVERSATION(buffer);`
 *
 * Hash: 0x29439776AAA00A62 | Since: 323
 */
export declare function getClass(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x00C09F246ABEDD82 | Since: 323
 */
export declare function getClassEstimatedMaxSpeed(vehicleClass: number): number;
/**
 * char buffer[128];
 * `std::sprintf(buffer, "VEH_CLASS_%i", VEHICLE::GET_VEHICLE_CLASS_FROM_NAME (hash));`
 *
 * `const char* className = HUD::GET_FILENAME_FOR_AUDIO_CONVERSATION(buffer);`
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0xDEDF1C8BD47C2200 | Since: 323
 */
export declare function getClassFromName(modelHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x2F83E7E45D9EA7AE | Since: 323
 */
export declare function getClassMaxAcceleration(vehicleClass: number): number;
/**
 * No comment provided
 *
 * Hash: 0x4F930AD022D6DE3B | Since: 323
 */
export declare function getClassMaxAgility(vehicleClass: number): number;
/**
 * No comment provided
 *
 * Hash: 0x4BF54C16EC8FEC03 | Since: 323
 */
export declare function getClassMaxBraking(vehicleClass: number): number;
/**
 * No comment provided
 *
 * Hash: 0xDBC86D85C5059461 | Since: 323
 */
export declare function getClassMaxTraction(vehicleClass: number): number;
/**
 * What's this for? Primary and Secondary RGB have their own natives and this one doesn't seem specific.
 *
 * Hash: 0xF3CC740D36221548 | Since: 323
 */
export declare function getColor(vehicle: number | IVehicle): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xA19435F193E081AC | Since: 323
 */
export declare function getColours(vehicle: number | IVehicle): [number, number];
/**
 * Some kind of flags.
 *
 * Hash: 0xEEBFC7A7EFDC35B4 | Since: 323
 */
export declare function getColoursWhichCanBeSet(vehicle: number | IVehicle): number;
/**
 * Returns the index of the color combination found in the vehicle's carvariations.meta entry.
 *
 * Hash: 0x6A842D197F845D56 | Since: 323
 */
export declare function getColourCombination(vehicle: number | IVehicle): number;
/**
 * Similar to `GET_VEHICLE_BOMB_AMMO`, this gets the amount of countermeasures that are present on this vehicle.
 * Use SET_VEHICLE_COUNTERMEASURE_AMMO to set the current amount.
 *
 * Hash: 0xF846AA63DF56B804 | Since: 1180
 */
export declare function getCountermeasureAmmo(vehicle: number | IVehicle): number;
/**
 * Returns a float value between 0.0 and 3.0 related to its slipstream draft (boost/speedup).
 *
 * Hash: 0x36492C2F0D134C56 | Since: 323
 */
export declare function getCurrentTimeInSlipStream(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xB64CF2CCA9D95F52 | Since: 323
 */
export declare function getCustomPrimaryColour(vehicle: number | IVehicle): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x8389CD56CA8072DC | Since: 323
 */
export declare function getCustomSecondaryColour(vehicle: number | IVehicle): [number, number, number];
/**
 * The only example I can find of this function in the scripts, is this:
 *
 * `struct _s = VEHICLE::GET_VEHICLE_DEFORMATION_AT_POS(rPtr((A_0) + 4), 1.21f, 6.15f, 0.3f);`
 *
 * -----------------------------------------------------------------------------------------------------------------------------------------
 * PC scripts:
 *
 * `v_5\/\*{3}\*\/ = VEHICLE::GET_VEHICLE_DEFORMATION_AT_POS(a_0._f1, 1.21, 6.15, 0.3);`
 *
 * Hash: 0x4EC6CFBC7B2E9536 | Since: 323
 */
export declare function getDeformationAtPos(vehicle: number | IVehicle, offsetX: number, offsetY: number, offsetZ: number): Vector3;
/**
 * Dirt level does not become greater than 15.0
 *
 * Hash: 0x8F17BC8BA08DA62B | Since: 323
 */
export declare function getDirtLevel(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xF6AF6CB341349015 | Since: 323
 */
export declare function getDoorsLockedForPlayer(vehicle: number | IVehicle, player: number | string | IPlayer): boolean;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xFE3F9C29F7B32BD5 | Since: 323
 */
export declare function getDoorAngleRatio(vehicle: number | IVehicle, doorId: number): number;
/**
 * enum VehicleLockStatus = {
 * None = 0,
 * Unlocked = 1,
 * Locked = 2,
 * LockedForPlayer = 3,
 * StickPlayerInside = 4, -- Doesn't allow players to exit the vehicle with the exit vehicle key.
 * CanBeBrokenInto = 7, -- Can be broken into the car. If the glass is broken, the value will be set to 1
 * CanBeBrokenIntoPersist = 8, -- Can be broken into persist
 * CannotBeTriedToEnter = 10, -- Cannot be tried to enter (Nothing happens when you press the vehicle enter key).
 * }
 *
 * Hash: 0x25BC98A59C2EA962 | Since: 323
 */
export declare function getDoorLockStatus(vehicle: number | IVehicle): number;
/**
 * Returns 1000.0 if the function is unable to get the address of the specified vehicle or if it's not a vehicle.
 *
 * Minimum: -4000
 * Maximum: 1000
 *
 * -4000: Engine is destroyed
 * 0 and below: Engine catches fire and health rapidly declines
 * 300: Engine is smoking and losing functionality
 * 1000: Engine is perfect
 *
 * Hash: 0xC45D23BAF168AAB8 | Since: 323
 */
export declare function getEngineHealth(vehicle: number | IVehicle): number;
/**
 * The result is a value from 0-1, where 0 is fresh paint.
 *
 * Hash: 0xA82819CAC9C4C403 | Since: 323
 */
export declare function getEnveffScale(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x53AF99BAA671CA47 | Since: 323
 */
export declare function getEstimatedMaxSpeed(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x3BC4245933A166F7 | Since: 323
 */
export declare function getExtraColours(vehicle: number | IVehicle): [number, number];
/**
 * No comment provided
 *
 * Hash: 0x7D1464D472D32136 | Since: 505
 */
export declare function getExtraColour5(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xB7635E80A5C31BFF | Since: 505
 */
export declare function getExtraColour6(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xDA62027C8BDB326E | Since: 1180
 */
export declare function getFlightNozzlePosition(plane: number | IVehicle): number;
/**
 * Returns true if the vehicle has a HF_HAS_KERS (strHandlingFlags 0x4) handing flag set, for instance the lectro/vindicator bikes or the open wheelers.
 *
 * Hash: 0x50634E348C8D44EF | Since: 372
 */
export declare function getHasKers(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE43701C36CAFF1A4 | Since: 1180
 */
export declare function getHasLandingGear(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBC9CFF381338CB4F | Since: 944
 */
export declare function getHasParachute(vehicle: number | IVehicle): boolean;
/**
 * 0 min 100 max
 * starts at 100
 * Seams to have health zones
 * Front of vehicle when damaged goes from 100-50 and stops at 50.
 * Rear can be damaged from 100-0
 * Only tested with two cars.
 *
 * any idea how this differs from the first one?
 *
 * --
 * May return the vehicle health on a scale of 0.0 - 100.0 (needs to be confirmed)
 *
 * example:
 *
 * `v_F = ENTITY::GET_ENTITY_MODEL(v_3);`
 * if (((v_F == ${tanker}) || (v_F == ${armytanker})) || (v_F == ${tanker2})) {
 * `if (VEHICLE::GET_VEHICLE_HEALTH_PERCENTAGE(v_3) <= 1.0) {`
 * `NETWORK::NETWORK_EXPLODE_VEHICLE(v_3, 1, 1, -1);`
 * }
 * }
 *
 * Hash: 0xB8EF61207C2393A9 | Since: 323
 */
export declare function getHealthPercentage(vehicle: number | IVehicle, maxEngineHealth: number, maxPetrolTankHealth: number, maxBodyHealth: number, maxMainRotorHealth: number, maxTailRotorHealth: number, maxUnkHealth: number): number;
/**
 * No comment provided
 *
 * Hash: 0x6EAAEFC76ACC311F | Since: 757
 */
export declare function getHomingLockedontoState(): number;
/**
 * Returns a value depending on the lock-on state of vehicle weapons.
 * 0: not locked on
 * 1: locking on
 * 2: locked on
 *
 * Hash: 0xE6B0E8CFC3633BF0 | Since: 323
 */
export declare function getHomingLockonState(vehicle: number | IVehicle): number;
/**
 * Returns vehicle door lock state previously set with SET_VEHICLE_INDIVIDUAL_DOORS_LOCKED
 *
 * Hash: 0xCA4AC3EAAE46EC7B | Since: 1103
 */
export declare function getIndividualDoorLockStatus(vehicle: number | IVehicle, doorId: number): number;
/**
 * No comment provided
 *
 * Hash: 0x8533CAFDE1F0F336 | Since: 505
 */
export declare function getIsDummy(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD4C4642CB7F50B5D | Since: 323
 */
export declare function getIsMercenary(vehicle: number | IVehicle): boolean;
/**
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0x28D37D4F71AC5C58 | Since: 323
 */
export declare function getLayoutHash(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xB91B4C20085BD12F | Since: 323
 */
export declare function getLightsState(vehicle: number | IVehicle): [boolean, boolean, boolean];
/**
 * -1 = no livery
 *
 * Hash: 0x2BB9230590DA5E8A | Since: 323
 */
export declare function getLivery(vehicle: number | IVehicle): number;
/**
 * Returns index of the current vehicle's secondary livery. A getter for SET_VEHICLE_LIVERY2.
 *
 * Hash: 0x60190048C0764A26 | Since: 505
 */
export declare function getLivery2(vehicle: number | IVehicle): number;
/**
 * Returns a number of available secondary liveries, or -1 if vehicle has no secondary liveries available.
 *
 * Hash: 0x5ECB40269053C0D4 | Since: 505
 */
export declare function getLivery2Count(vehicle: number | IVehicle): number;
/**
 * Returns -1 if the vehicle has no livery
 *
 * Hash: 0x87B63E25A529D526 | Since: 323
 */
export declare function getLiveryCount(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x8F5EBAB1F260CFCE | Since: 323
 */
export declare function getLockOnTarget(vehicle: number | IVehicle): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xAD7E85FC227197C4 | Since: 323
 */
export declare function getMaxBraking(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xA7C4F2C6E744A550 | Since: 323
 */
export declare function getMaxNumberOfPassengers(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xA132FB5370554DB0 | Since: 323
 */
export declare function getMaxTraction(vehicle: number | IVehicle): number;
/**
 * In b944, there are 50 (0 - 49) mod types. See SET_VEHICLE_MOD for the list.
 *
 * Returns -1 if the vehicle mod is stock
 *
 * Hash: 0x772960298DA26FDB | Since: 323
 */
export declare function getMod(vehicle: number | IVehicle, modType: number): number;
/**
 * Returns the acceleration of the specified model.
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0x8C044C5C84505B6A | Since: 323
 */
export declare function getModelAcceleration(modelHash: number | string): number;
/**
 * 9.8 * thrust if air vehicle, else 0.38 + drive force?
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0x53409B5163D5B846 | Since: 323
 */
export declare function getModelAccelerationMaxMods(modelHash: number | string): number;
/**
 * Returns max speed (without mods) of the specified vehicle model in m/s.
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0xF417C2502FFFED43 | Since: 323
 */
export declare function getModelEstimatedMaxSpeed(modelHash: number | string): number;
/**
 * Returns max braking of the specified vehicle model.
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0xDC53FD41B4ED944C | Since: 323
 */
export declare function getModelMaxBraking(modelHash: number | string): number;
/**
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0xBFBA3BA79CFF7EBF | Since: 323
 */
export declare function getModelMaxBrakingMaxMods(modelHash: number | string): number;
/**
 * Returns max traction of the specified vehicle model.
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0x539DE94D44FDFD0D | Since: 323
 */
export declare function getModelMaxTraction(modelHash: number | string): number;
/**
 * Returns max number of passengers (including the driver) for the specified vehicle model.
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0x2AD93716F184EDA4 | Since: 323
 */
export declare function getModelNumberOfSeats(modelHash: number | string): number;
/**
 * Returns `nMonetaryValue` from handling.meta for specific model.
 *
 * Hash: 0x5873C14A52D74236 | Since: 463
 */
export declare function getModelValue(vehicleModel: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xE8D65CA700C9A693 | Since: 323
 */
export declare function getModColor1(vehicle: number | IVehicle): [number, number, number];
/**
 * Returns a string which is the codename of the vehicle's currently selected primary color
 *
 * p1 is always 0
 *
 * Hash: 0xB45085B721EFD38C | Since: 323
 */
export declare function getModColor1Name(vehicle: number | IVehicle): string;
/**
 * No comment provided
 *
 * Hash: 0x81592BE4E3878728 | Since: 323
 */
export declare function getModColor2(vehicle: number | IVehicle): [number, number];
/**
 * Returns a string which is the codename of the vehicle's currently selected secondary color
 *
 * Hash: 0x4967A516ED23A5A1 | Since: 323
 */
export declare function getModColor2Name(vehicle: number | IVehicle): string;
/**
 * Can be used for IS_DLC_VEHICLE_MOD and GET_DLC_VEHICLE_MOD_LOCK_HASH
 *
 * Hash: 0x4593CF82AA179706 | Since: 323
 */
export declare function getModIdentifierHash(vehicle: number | IVehicle, modType: number, modIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x6325D1A044AE510D | Since: 323
 */
export declare function getModKit(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xFC058F5121E54C32 | Since: 323
 */
export declare function getModKitType(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x90A38E9838E0A8C1 | Since: 323
 */
export declare function getModModifierValue(vehicle: number | IVehicle, modType: number, modIndex: number): number;
/**
 * Only used for wheels(ModType = 23/24) Returns true if the wheels are custom wheels
 *
 * Hash: 0xB3924ECD70E095DC | Since: 323
 */
export declare function getModVariation(vehicle: number | IVehicle, modType: number): number;
/**
 * Gets the color of the neon lights of the specified vehicle.
 *
 * See SET_VEHICLE_NEON_COLOUR (0x8E0A582209A62695) for more information
 *
 * Hash: 0x7619EEE8C886757F | Since: 323
 */
export declare function getNeonColour(vehicle: number | IVehicle): [number, number, number];
/**
 * indices:
 * 0 = Left
 * 1 = Right
 * 2 = Front
 * 3 = Back
 *
 * Hash: 0x8C4B92553E4766A5 | Since: 323
 */
export declare function getNeonEnabled(vehicle: number | IVehicle, index: number): boolean;
/**
 * Gets the number of passengers.
 *
 * This native was modified in b2545 to take two additional parameters, allowing you to include the driver or exclude dead passengers.
 *
 * To keep it working like before b2545, set includeDriver to false and includeDeadOccupants to true.
 *
 * Hash: 0x24CB2137731FFE89 | Since: 323
 */
export declare function getNumberOfPassengers(vehicle: number | IVehicle, includeDriver: boolean, includeDeadOccupants: boolean): number;
/**
 * Returns the license plate text from a vehicle. 8 chars maximum.
 *
 * Hash: 0x7CE1CCB9B293020E | Since: 323
 */
export declare function getNumberPlateText(vehicle: number | IVehicle): string;
/**
 * Returns the PlateType of a vehicle
 * Blue_on_White_1 = 3,
 * Blue_on_White_2 = 0,
 * Blue_on_White_3 = 4,
 * Yellow_on_Blue = 2,
 * Yellow_on_Black = 1,
 * North_Yankton = 5,
 *
 * Hash: 0xF11BC2DD9A3E7195 | Since: 323
 */
export declare function getNumberPlateTextIndex(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x2C8CBFE1EA5FC631 | Since: 323
 */
export declare function getNumOfBrokenLoosenParts(vehicle: number | IVehicle): number;
/**
 * Also includes some "turnOffBones" when vehicle mods are installed.
 *
 * Hash: 0x42A4BEB35D372407 | Since: 323
 */
export declare function getNumOfBrokenOffParts(vehicle: number | IVehicle): number;
/**
 * 1000 is max health
 * Begins leaking gas at around 650 health
 * -999.90002441406 appears to be minimum health, although nothing special occurs
 *
 * Hash: 0x7D5DABE888D2D074 | Since: 323
 */
export declare function getPetrolTankHealth(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x9CCC9525BF2408E0 | Since: 323
 */
export declare function getPlateType(vehicle: number | IVehicle): number;
/**
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x21543C612379DB3C | Since: 323
 */
export declare function getRecordingId(recording: number, script: string): number;
/**
 * Outputs 2 Vector3's.
 * Scripts check if out2.x - out1.x > someshit.x
 * Could be suspension related, as in max suspension height and min suspension height, considering the natives location.
 *
 * Hash: 0xDF7E3EEB29642C38 | Since: 323
 */
export declare function getSize(vehicle: number | IVehicle): [Vector3, Vector3];
/**
 * Gets the trailer of a vehicle and puts it into the trailer parameter.
 *
 * Hash: 0x1CDD6BADC297830D | Since: 323
 */
export declare function getTrailerVehicle(vehicle: number | IVehicle): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x678B9BB8C3F58FEB | Since: 323
 */
export declare function getTyresCanBurst(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB635392A4938B3C3 | Since: 323
 */
export declare function getTyreSmokeColor(vehicle: number | IVehicle): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x8181CE2F25CB9BB7 | Since: 1011
 */
export declare function getWeaponRestrictedAmmo(vehicle: number | IVehicle, weaponIndex: number): number;
/**
 * Returns an int
 *
 * Wheel Types:
 * 0: Sport
 * 1: Muscle
 * 2: Lowrider
 * 3: SUV
 * 4: Offroad
 * 5: Tuner
 * 6: Bike Wheels
 * 7: High End
 * 8: Benny's Originals
 * 9: Benny's Bespoke
 * 10: Racing
 * 11: Street
 * 12: Track
 *
 * Tested in Los Santos Customs
 *
 * Hash: 0xB3ED1BFB4BE636DC | Since: 323
 */
export declare function getWheelType(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x0EE21293DAD47C95 | Since: 323
 */
export declare function getWindowTint(vehicle: number | IVehicle): number;
/**
 * Returns the headlight color index from the vehicle. Value between 0, 12.
 * Use SET_VEHICLE_XENON_LIGHT_COLOR_INDEX to set the headlights color for the vehicle.
 * Must enable xenon headlights before it'll take affect.
 *
 * Returns an int, value between 0-12 or 255 if no color is set.
 *
 * Hash: 0x3DFF319A831E0CDB | Since: 1604
 */
export declare function getXenonLightColorIndex(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x91D6DD290888CBAB | Since: 323
 */
export declare function hasInstantFillPopulationFinished(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x06F43E5175EB6D96 | Since: 323
 */
export declare function hasPreloadModsFinished(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1BBE0523B8DB9A21 | Since: 323
 */
export declare function hasAssetLoaded(vehicleAsset: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5BA68A0840D546AC | Since: 463
 */
export declare function hasPetroltankSetOnFireByEntity(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6ADAABD3068C5235 | Since: 323
 */
export declare function hasPhoneExplosiveDevice(): boolean;
/**
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x300D614A4C785FC4 | Since: 323
 */
export declare function hasRecordingBeenLoaded(recording: number, script: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9A83F5F9963775EF | Since: 323
 */
export declare function haveModsStreamedIn(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6B407F2525E93644 | Since: 2944
 */
export declare function haveRearDoorsBeenBlownOpenByStickybomb(vehicle: number | IVehicle): boolean;
/**
 * Disables detachable bumber from domnator4, dominator5, dominator6, see https://gfycat.com/SecondUnluckyGosling
 *
 * Hash: 0xAE71FB656C600587 | Since: 1604
 */
export declare function hideTombstone(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x48ADC8A773564670 | Since: 323
 */
export declare function instantlyFillPopulation(): void;
/**
 * No comment provided
 *
 * Hash: 0x62CA17B74C435651 | Since: 323
 */
export declare function isAnyEntityAttachedToHandlerFrame(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x291E373D483E7EE7 | Since: 323
 */
export declare function isAnyPedRappellingFromHeli(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x61E1DD6125A3EEE6 | Since: 323
 */
export declare function isAnyNearPoint(pos: Vector3, radius: number): boolean;
/**
 * Returns true if MF_IS_BIG (strModelFlags 0x8) handling model flag is set.
 *
 * Hash: 0x9F243D3919F442FE | Since: 323
 */
export declare function isBig(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB0AD1238A709B1A2 | Since: 573
 */
export declare function isBoatAnchored(vehicle: number | IVehicle): boolean;
/**
 * Usage:
 *
 * public bool isCopInRange(Vector3 Location, float Range)
 * {
 * return Function.Call<bool>(Hash.IS_COP_PED_IN_AREA_3D, Location.X - Range, Location.Y - Range, Location.Z - Range, Location.X + Range, Location.Y + Range, Location.Z + Range);
 * }
 *
 * Hash: 0x7EEF65D5F153E26A | Since: 323
 */
export declare function isCopInArea3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x57715966069157AD | Since: 323
 */
export declare function isEntityAttachedToHandlerFrame(vehicle: number | IVehicle, entity: number | IEntity): boolean;
/**
 * Check if a vehicle seat is accessible. If you park your vehicle near a wall and the ped cannot enter/exit this side, the return value toggles from true (not blocked) to false (blocked).
 *
 * seatIndex  = -1 being the driver seat.
 * Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.
 * side = only relevant for bikes/motorcycles to check if the left (false)/right (true) side is blocked.
 * onEnter = check if you can enter (true) or exit (false) a vehicle.
 *
 * Hash: 0x639431E895B9AA57 | Since: 323
 */
export declare function isEntryPointForSeatClear(ped: number | IPed, vehicle: number | IVehicle, seatIndex: number, side: boolean, onEnter: boolean): boolean;
/**
 * Returns true if specified extra part is broken off. It only works for extras that can break off during collisions, non-breakable extras always return false. Also returns true if the breakable extra is toggled off through script.
 *
 * Hash: 0x534E36D4DB9ECC5D | Since: 1493
 */
export declare function isExtraBrokenOff(vehicle: number | IVehicle, extraId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x89D630CF5EA96D23 | Since: 323
 */
export declare function isHandlerFrameLinedUpWithContainer(vehicle: number | IVehicle, entity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0x634148744F385576 | Since: 323
 */
export declare function isHeliLandingAreaBlocked(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBC74B4BE25EB6C8A | Since: 323
 */
export declare function isHeliPartBroken(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAD464F2E18836BFC | Since: 2372
 */
export declare function isMissionTrain(train: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x491E822B2C464FE4 | Since: 3095
 */
export declare function isNitrousActive(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB09D25E77C33EB3F | Since: 463
 */
export declare function isPedExclusiveDriverOf(ped: number | IPed, vehicle: number | IVehicle): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x4198AB0022B15F87 | Since: 323
 */
export declare function isPlaneLandingGearIntact(plane: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1C8A4C2C19E68EEC | Since: 323
 */
export declare function isPlaybackGoingOnFor(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAEA8FD591FAD4106 | Since: 323
 */
export declare function isPlaybackUsingAiGoingOnFor(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3D34E80EED4AE3BE | Since: 944
 */
export declare function isRocketBoostActive(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF7F203E31F96F6A1 | Since: 323
 */
export declare function isSeatWarpOnly(vehicle: number | IVehicle, seatIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7504C0F113AB50FC | Since: 323
 */
export declare function isTaxiLightOn(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x633F6F44A537EBB6 | Since: 944
 */
export declare function isThisModelAnAmphibiousCar(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA1A9FC1C76A6730D | Since: 1103
 */
export declare function isThisModelAnAmphibiousQuadbike(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBF94DD42F63BDED2 | Since: 323
 */
export declare function isThisModelABicycle(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB50C0B0CEDC6CE84 | Since: 323
 */
export declare function isThisModelABike(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x45A9187928F4B9E3 | Since: 323
 */
export declare function isThisModelABoat(model: number | string): boolean;
/**
 * To check if the model is an amphibious car, use IS_THIS_MODEL_AN_AMPHIBIOUS_CAR.
 *
 * Hash: 0x7F6DB52EEFC96DF8 | Since: 323
 */
export declare function isThisModelACar(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDCE4334788AF94EA | Since: 323
 */
export declare function isThisModelAHeli(model: number | string): boolean;
/**
 * Checks if model is a boat, then checks for FLAG_IS_JETSKI.
 *
 * Hash: 0x9537097412CF75FE | Since: 323
 */
export declare function isThisModelAJetski(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA0948AB42D7BA0DE | Since: 323
 */
export declare function isThisModelAPlane(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x39DAC362EE65FA28 | Since: 323
 */
export declare function isThisModelAQuadbike(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAB935175B22E822B | Since: 323
 */
export declare function isThisModelATrain(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x84B233A8C8FC8AE7 | Since: 323
 */
export declare function isToggleModOn(vehicle: number | IVehicle, modType: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE33FFA906CE74880 | Since: 323
 */
export declare function isTurretSeat(vehicle: number | IVehicle, seatIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4319E335B71FFF34 | Since: 323
 */
export declare function isAlarmActivated(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD40148F22E81A1D9 | Since: 323
 */
export declare function isAttachedToCargobob(cargobob: number | IVehicle, vehicleAttached: number | IVehicle): boolean;
/**
 * Scripts verify that towTruck is the first parameter, not the second.
 *
 * Hash: 0x146DF9EC4C4B9FD4 | Since: 323
 */
export declare function isAttachedToTowTruck(towTruck: number | IVehicle, vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE7CF3C4F9F489F0C | Since: 323
 */
export declare function isAttachedToTrailer(vehicle: number | IVehicle): boolean;
/**
 * Returns true if the vehicle has a convertible roof.
 *
 * p1 is false almost always. However, in launcher_carwash/carwash1/carwash2 scripts, p1 is true and is accompanied by DOES_VEHICLE_HAVE_ROOF. If p1 is true, it seems that every single vehicle will return true irrespective of being a convertible.
 *
 * Hash: 0x52F357A30698BCCE | Since: 323
 */
export declare function isAConvertible(vehicle: number | IVehicle): boolean;
/**
 * Returns true if vehicle is halted by BRING_VEHICLE_TO_HALT
 *
 * Hash: 0xC69BB1D832A710EF | Since: 1493
 */
export declare function isBeingBroughtToHalt(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x27B926779DEB502D | Since: 323
 */
export declare function isBumperBouncing(vehicle: number | IVehicle, frontBumper: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x468056A6BB6F3846 | Since: 323
 */
export declare function isBumperBrokenOff(vehicle: number | IVehicle, frontBumper: boolean): boolean;
/**
 * doorID starts at 0, not seeming to skip any numbers. Four door vehicles intuitively range from 0 to 3.
 *
 * Hash: 0xB8E181E559464527 | Since: 323
 */
export declare function isDoorDamaged(veh: number | IVehicle, doorID: number): boolean;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x3E933CFF7B111C22 | Since: 323
 */
export declare function isDoorFullyOpen(vehicle: number | IVehicle, doorId: number): boolean;
/**
 * p1 is always 0 in the scripts.
 *
 * p1 = check if vehicle is on fire
 *
 * Hash: 0x4C241E39B23DF959 | Since: 323
 */
export declare function isDriveable(vehicle: number | IVehicle, isOnFireCheck: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD2E6822DBFD6C8BD | Since: 323
 */
export declare function isExtraTurnedOn(vehicle: number | IVehicle, extraId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1F25887F3C104278 | Since: 323
 */
export declare function isHighDetail(vehicle: number | IVehicle): boolean;
/**
 * Returns whether the specified vehicle is currently in a burnout.
 *
 *
 * vb.net
 * Public Function isVehicleInBurnout(vh As Vehicle) As Boolean
 * Return Native.Function.Call(Of Boolean)(Hash.IS_VEHICLE_IN_BURNOUT, vh)
 * End Function
 *
 * Hash: 0x1297A88E081430EB | Since: 323
 */
export declare function isInBurnout(vehicle: number | IVehicle): boolean;
/**
 * garageName example "Michael - Beverly Hills"
 *
 * Full list of garages by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/garages.json
 *
 * Hash: 0xCEE4490CD57BB3C2 | Since: 323
 */
export declare function isInGarageArea(garageName: string, vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA77DC70BD689A1E5 | Since: 1290
 */
export declare function isInSubmarineMode(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x423E8DE37D934D89 | Since: 323
 */
export declare function isModel(vehicle: number | IVehicle, model: number | string): boolean;
/**
 * Returns true for any mod part listed in GEN9_EXCLUSIVE_ASSETS_VEHICLES_FILE.
 *
 * Hash: 0x00834EAC4A96E010 | Since: 2699
 */
export declare function isModGen9Exclusive(vehicle: number | IVehicle, modType: number, modIndex: number): boolean;
/**
 * Public Function isVehicleOnAllWheels(vh As Vehicle) As Boolean
 * Return Native.Function.Call(Of Boolean)(Hash.IS_VEHICLE_ON_ALL_WHEELS, vh)
 * End Function
 *
 *
 * Hash: 0xB104CD1BABF302E2 | Since: 323
 */
export declare function isOnAllWheels(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3DE51E9C80B116CF | Since: 1011
 */
export declare function isParachuteDeployed(vehicle: number | IVehicle): boolean;
/**
 * Returns true if the vehicle is being slipstreamed by another vehicle
 *
 * Hash: 0x48C633E94A8142A7 | Since: 877
 */
export declare function isProducingSlipStream(vehicle: number | IVehicle): boolean;
/**
 * Possibly: Returns whether the searchlight (found on police vehicles) is toggled on.
 *
 * @Author Nac
 *
 * Hash: 0xC0F97FCE55094987 | Since: 323
 */
export declare function isSearchlightOn(vehicle: number | IVehicle): boolean;
/**
 * Check if a vehicle seat is free.
 *
 * seatIndex  = -1 being the driver seat.
 * Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.
 * isTaskRunning = on true the function returns already false while a task on the target seat is running (TASK_ENTER_VEHICLE/TASK_SHUFFLE_TO_NEXT_VEHICLE_SEAT) - on false only when a ped is finally sitting in the seat.
 *
 * Hash: 0x22AC59A870E6A669 | Since: 323
 */
export declare function isSeatFree(vehicle: number | IVehicle, seatIndex: number, isTaskRunning: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB5CC40FBCB586380 | Since: 323
 */
export declare function isSirenAudioOn(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4C9BF537BE2634B2 | Since: 323
 */
export declare function isSirenOn(vehicle: number | IVehicle): boolean;
/**
 * Returns false if the vehicle has the FLAG_NO_RESPRAY flag set.
 *
 * Hash: 0x8D474C8FAEFF6CDE | Since: 323
 */
export declare function isSprayable(vehicle: number | IVehicle): boolean;
/**
 * Only returns true if the vehicle was marked as stolen with SET_VEHICLE_IS_STOLEN.
 *
 * Hash: 0x4AF9BD80EEBEB453 | Since: 323
 */
export declare function isStolen(vehicle: number | IVehicle): boolean;
/**
 * Returns true if the vehicle's current speed is less than, or equal to 0.0025f.
 *
 * For some vehicles it returns true if the current speed is <= 0.00039999999.
 *
 * Hash: 0x5721B434AD84D57A | Since: 323
 */
export declare function isStopped(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2959F696AE390A99 | Since: 323
 */
export declare function isStoppedAtTrafficLights(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB497F06B288DCFDF | Since: 323
 */
export declare function isStuckOnRoof(vehicle: number | IVehicle): boolean;
/**
 * p1 can be anywhere from 0 to 3 in the scripts.
 * p2 being how long in milliseconds the vehicle has been stuck
 *
 * Hash: 0x679BE1DAF71DA874 | Since: 323
 */
export declare function isStuckTimerUp(vehicle: number | IVehicle, ms: number): boolean;
/**
 * wheelID used for 4 wheelers seem to be (0, 1, 4, 5)
 * completely - is to check if tire completely gone from rim.
 *
 * '0 = wheel_lf / bike, plane or jet front
 * '1 = wheel_rf
 * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
 * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
 * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
 * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
 * '45 = 6 wheels trailer mid wheel left
 * '47 = 6 wheels trailer mid wheel right
 *
 * Hash: 0xBA291848A0815CA9 | Since: 323
 */
export declare function isTyreBurst(vehicle: number | IVehicle, wheelID: number, completely: boolean): boolean;
/**
 * must be called after TRACK_VEHICLE_VISIBILITY
 *
 * it's not instant so probabilly must pass an 'update' to see correct result.
 *
 * Hash: 0xAA0A52D24FB98293 | Since: 323
 */
export declare function isVisible(vehicle: number | IVehicle): boolean;
/**
 * Full list of weapons by DurtyFree (Search for VEHICLE_*): https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 *
 * Hash: 0x563B65A643ED072E | Since: 1011
 */
export declare function isWeaponDisabled(weaponHash: number | string, vehicle: number | IVehicle, owner: number | IPed): boolean;
/**
 * This will return false if the window is broken, or rolled down.
 * Window indexes:
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 *
 *
 * Those numbers go on for vehicles that have more than 4 doors with windows.
 *
 * Hash: 0x46E571A0E20D01F1 | Since: 323
 */
export declare function isWindowIntact(vehicle: number | IVehicle, windowIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCFD778E7904C255E | Since: 323
 */
export declare function lockDoorsWhenNoLongerNeeded(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xDED51F703D0FA83D | Since: 323
 */
export declare function lowerConvertibleRoof(vehicle: number | IVehicle, instantlyLower: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x923A293361DF44E5 | Since: 2802
 */
export declare function lowerForkliftForks(forklift: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x93A3996368C94158 | Since: 323
 */
export declare function modifyTopSpeed(vehicle: number | IVehicle, value: number): void;
/**
 * Default:1000||This sets a value which is used when NETWORK_ENABLE_EMPTY_CROWDING_VEHICLES_REMOVAL(true) is called each frame.
 *
 * Hash: 0xA4A9A4C40E615885 | Since: 1604
 */
export declare function networkCapEmptyCrowdingsRemoval(): void;
/**
 * No comment provided
 *
 * Hash: 0x51DB102F4A3BA5E0 | Since: 323
 */
export declare function networkEnableEmptyCrowdingsRemoval(toggle: boolean): void;
/**
 * Implemented only for trains.
 *
 * Hash: 0xEC0C1D4922AF9754 | Since: 2372
 */
export declare function networkUseHighPrecisionTrainBlending(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x87E7F24270732CB1 | Since: 323
 */
export declare function openBombBayDoors(vehicle: number | IVehicle): void;
/**
 * Used for helis.
 *
 * Hash: 0x5EE5632F47AE9695 | Since: 463
 */
export declare function overridePlaneDamageThrehsold(vehicle: number | IVehicle, health: number): void;
/**
 * No comment provided
 *
 * Hash: 0x632A689BF42301B1 | Since: 323
 */
export declare function pausePlaybackRecorded(vehicle: number | IVehicle): void;
/**
 * Pops off the "roof" bone in the direction of the specified offset from the vehicle.
 *
 * Hash: 0xE38CB9D7D39FDBCC | Since: 323
 */
export declare function popOffRoofWithImpulse(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * Detaches the vehicle's windscreen.
 * For further information, see : gtaforums.com/topic/859570-glass/#entry1068894566
 *
 * Hash: 0x6D645D59FB5F5AD3 | Since: 323
 */
export declare function popOutWindscreen(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x758F49C24925568A | Since: 323
 */
export declare function preloadMod(vehicle: number | IVehicle, modType: number, modIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8F5FB35D7E88FC70 | Since: 323
 */
export declare function raiseConvertibleRoof(vehicle: number | IVehicle, instantlyRaise: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x445D79F995508307 | Since: 323
 */
export declare function releasePreloadMods(vehicle: number | IVehicle): void;
/**
 * Retracts the hook on the cargobob.
 *
 * Note: after you retract it the natives for dropping the hook no longer work
 *
 * Hash: 0x9768CF648F54C804 | Since: 323
 */
export declare function removePickUpRopeForCargobob(cargobob: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x1033371FC8E842A7 | Since: 323
 */
export declare function removeRoadNodeSpeedZone(speedzone: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x46A1E1A299EC4BBA | Since: 323
 */
export declare function removesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
/**
 * No comment provided
 *
 * Hash: 0xACE699C71AB9DEB5 | Since: 323
 */
export declare function removeAsset(vehicleAsset: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE30524E1871F481D | Since: 323
 */
export declare function removeCombatAvoidanceArea(): void;
/**
 * No comment provided
 *
 * Hash: 0x00689CDE5F7C6787 | Since: 323
 */
export declare function removeHighDetailModel(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x92D619E420858204 | Since: 323
 */
export declare function removeMod(vehicle: number | IVehicle, modType: number): void;
/**
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0xF1160ACCF98A3FC8 | Since: 323
 */
export declare function removeRecording(recording: number, script: string): void;
/**
 * No comment provided
 *
 * Hash: 0x8386BFB614D06749 | Since: 323
 */
export declare function removeStuckCheck(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xC53EB42A499A7E90 | Since: 323
 */
export declare function removeUpsidedownCheck(vehicle: number | IVehicle): void;
/**
 * windowIndex:
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 * 4 = Unknown
 * 5 = Unknown
 * 6 = Windscreen
 * 7 = Rear Windscreen
 *
 * Hash: 0xA711568EEDB43069 | Since: 323
 */
export declare function removeWindow(vehicle: number | IVehicle, windowIndex: number): void;
/**
 * REQUEST_VEHICLE_ASSET(GET_HASH_KEY(cargobob3), 3);
 *
 * vehicle found that have asset's:
 * cargobob3
 * submersible
 * blazer
 *
 * Hash: 0x81A15811460FAB3A | Since: 323
 */
export declare function requestAsset(vehicleHash: number | string, vehicleAsset: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDBA3C090E3D74690 | Since: 323
 */
export declare function requestDial(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xA6E9FDCB2C76785E | Since: 323
 */
export declare function requestHighDetailModel(vehicle: number | IVehicle): void;
/**
 * Request the vehicle recording defined by the lowercase format string "%s%03d.yvr". For example, REQUEST_VEHICLE_RECORDING(1, "FBIs1UBER") corresponds to fbis1uber001.yvr.
 * For all vehicle recording/playback natives, "script" is a common prefix that usually corresponds to the script/mission the recording is used in, "recording" is its int suffix, and "id" (e.g., in native GET_TOTAL_DURATION_OF_VEHICLE_RECORDING_ID) corresponds to a unique identifier within the recording streaming module.
 * Note that only 24 recordings (hardcoded in multiple places) can ever active at a given time before clobbering begins.
 *
 * Hash: 0xAF514CABE74CBF15 | Since: 323
 */
export declare function requestRecording(recording: number, script: string): void;
/**
 * Resets the effect of SET_FORMATION_LEADER
 *
 * Hash: 0xE2F53F172B45EDE1 | Since: 877
 */
export declare function resetFormationLeader(): void;
/**
 * The inner function has a switch on the second parameter. It's the stuck timer index.
 *
 * Here's some pseudo code I wrote for the inner function:
 * void __fastcall NATIVE_RESET_VEHICLE_STUCK_TIMER_INNER(CUnknown* unknownClassInVehicle, int timerIndex)
 * {
 * switch (timerIndex)
 * {
 * case 0:
 * unknownClassInVehicle->FirstStuckTimer = (WORD)0u;
 * case 1:
 * unknownClassInVehicle->SecondStuckTimer = (WORD)0u;
 * case 2:
 * unknownClassInVehicle->ThirdStuckTimer = (WORD)0u;
 * case 3:
 * unknownClassInVehicle->FourthStuckTimer = (WORD)0u;
 * case 4:
 * unknownClassInVehicle->FirstStuckTimer = (WORD)0u;
 * unknownClassInVehicle->SecondStuckTimer = (WORD)0u;
 * unknownClassInVehicle->ThirdStuckTimer = (WORD)0u;
 * unknownClassInVehicle->FourthStuckTimer = (WORD)0u;
 * break;
 * };
 * }
 *
 * Hash: 0xD7591B0065AFAA7A | Since: 323
 */
export declare function resetStuckTimer(vehicle: number | IVehicle, nullAttributes: number): void;
/**
 * No comment provided
 *
 * Hash: 0x21D2E5662C1F6FED | Since: 323
 */
export declare function resetWheels(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * windowIndex:
 * 0 = Front Left Window
 * 1 = Front Right Window
 * 2 = Rear Left Window
 * 3 = Rear Right Window
 * 4 = Front Windscreen
 * 5 = Rear Windscreen
 * 6 = Mid Left
 * 7 = Mid Right
 * 8 = Invalid
 *
 * Hash: 0x7AD9E6CE657D69E3 | Since: 323
 */
export declare function rollDownWindow(vehicle: number | IVehicle, windowIndex: number): void;
/**
 * Roll down all the windows of the vehicle passed through the first parameter.
 *
 * Hash: 0x85796B0549DDE156 | Since: 323
 */
export declare function rollDownWindows(vehicle: number | IVehicle): void;
/**
 * windowIndex:
 * 0 = Front Left Window
 * 1 = Front Right Window
 * 2 = Rear Left Window
 * 3 = Rear Right Window
 * 4 = Front Windscreen
 * 5 = Rear Windscreen
 * 6 = Mid Left
 * 7 = Mid Right
 * 8 = Invalid
 *
 * Hash: 0x602E548F46E24D59 | Since: 323
 */
export declare function rollUpWindow(vehicle: number | IVehicle, windowIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5845066D8A1EA7F7 | Since: 323
 */
export declare function setAdditionalRotationForRecordedPlayback(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xF8B49F5BA7F850E7 | Since: 2060
 */
export declare function setAircraftIgnoreHightmapOptimisation(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xE5810AC70602F2F5 | Since: 323
 */
export declare function setAircraftPilotSkillNoiseScalar(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x80E3357FDEF45C21 | Since: 944
 */
export declare function setAllowRammingSoopOrRamp(): void;
/**
 * No comment provided
 *
 * Hash: 0x3441CAD2F2231923 | Since: 323
 */
export declare function setAllowExplodesOnContact(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x608207E7A8FB787C | Since: 323
 */
export declare function setAllLowPriorityGeneratorsActive(active: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x34AD89078831A4BC | Since: 323
 */
export declare function setAllGeneratorsActive(): void;
/**
 * When p6 is true, vehicle generators are active.
 * p7 seems to always be true in story mode scripts, but it's sometimes false in online scripts.
 *
 * Hash: 0xC12321827687FE4D | Since: 323
 */
export declare function setAllGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x35E0654F4BAD7971 | Since: 323
 */
export declare function setAmbientNeonEnabled(): void;
/**
 * No comment provided
 *
 * Hash: 0x90B6DA738A9A25DA | Since: 323
 */
export declare function setAmbientRangeMultiplierThisFrame(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0205F5365292D2EB | Since: 1290
 */
export declare function setArriveDistanceOverrideForPersuitAttack(vehicle: number | IVehicle): void;
/**
 * When enabled, the player won't fall off the bike when landing from large heights.
 *
 * Hash: 0x73561D4425A021A2 | Since: 791
 */
export declare function setBikeEasyToLand(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Only works on bikes, both X and Y work in the -1 - 1 range.
 *
 * X forces the bike to turn left or right (-1, 1)
 * Y forces the bike to lean to the left or to the right (-1, 1)
 *
 * Example with X -1/Y 1
 * http://i.imgur.com/TgIuAPJ.jpg
 *
 * Hash: 0x9CFA4896C3A53CBB | Since: 323
 */
export declare function setBikeOnStand(vehicle: number | IVehicle, x: number, y: number): void;
/**
 * No comment provided
 *
 * Hash: 0x75DBEC174AEEAD10 | Since: 323
 */
export declare function setBoatAnchor(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0A6A279F3AA4FD70 | Since: 323
 */
export declare function setBoatDisableAvoidance(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xED5EDE9E676643C9 | Since: 944
 */
export declare function setBoatIgnoreLandProbes(): void;
/**
 * No comment provided
 *
 * Hash: 0xE842A9398079BD82 | Since: 323
 */
export declare function setBoatLowLodAnchorDistance(vehicle: number | IVehicle, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE3EBAAE484798530 | Since: 323
 */
export declare function setBoatRemainsAnchoredWhilePlayerIsDriver(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8F719973E1445BA2 | Since: 323
 */
export declare function setBoatSinksWhenWrecked(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBD32E46AA95C1DD2 | Since: 757
 */
export declare function setBoatWrecked(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xA7DCDF4DED40A8F4 | Since: 323
 */
export declare function setCanAdjustGroundClearance(vehicle: number | IVehicle): void;
/**
 * Hardcoded to not work in multiplayer.
 *
 * Hash: 0x52BBA29D5EC69356 | Since: 323
 */
export declare function setCanRespray(vehicle: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1201E8A3290A3B98 | Since: 505
 */
export declare function setCanUseHydraulics(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1F34B0626C594380 | Since: 757
 */
export declare function setCargobobExcludeFromPickupEntity(): void;
/**
 * No comment provided
 *
 * Hash: 0x72BECCF4B829522E | Since: 1103
 */
export declare function setCargobobExtaPickupRange(): void;
/**
 * Stops cargobob from being able to detach the attached vehicle.
 *
 * Hash: 0x571FEB383F629926 | Since: 323
 */
export declare function setCargobobForceDontDetach(cargobob: number | IVehicle, toggle: boolean): void;
/**
 * Won't attract or magnetize to any helicopters or planes of course, but that's common sense.
 *
 * Hash: 0x9A665550F8DA349B | Since: 323
 */
export declare function setCargobobPickupMagnetActive(cargobob: number | IVehicle, isActive: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x56EB5E94318D3FB6 | Since: 323
 */
export declare function setCargobobPickupMagnetEnsurePickupEntityUpright(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xA17BAD153B51547E | Since: 323
 */
export declare function setCargobobPickupMagnetFalloff(cargobob: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x685D5561680D088B | Since: 323
 */
export declare function setCargobobPickupMagnetPullRopeLength(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xED8286F71A819BAA | Since: 323
 */
export declare function setCargobobPickupMagnetPullStrength(cargobob: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x6D8EAC07506291FB | Since: 323
 */
export declare function setCargobobPickupMagnetReducedFalloff(cargobob: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x66979ACF5102FD2F | Since: 323
 */
export declare function setCargobobPickupMagnetReducedStrength(cargobob: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x9BDDC73CC6A115D4 | Since: 323
 */
export declare function setCargobobPickupMagnetSetAmbientMode(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xE301BD63E9E13CF0 | Since: 323
 */
export declare function setCargobobPickupMagnetSetTargetedMode(vehicle: number | IVehicle, cargobob: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xBCBFCD9D1DAC19E2 | Since: 323
 */
export declare function setCargobobPickupMagnetStrength(cargobob: number | IVehicle, strength: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCF1182F682F65307 | Since: 323
 */
export declare function setCargobobPickupRopeDampingMultiplier(): void;
/**
 * No comment provided
 *
 * Hash: 0x0D5F65A8F4EBDAB5 | Since: 1103
 */
export declare function setCargobobPickupRopeType(): void;
/**
 * No comment provided
 *
 * Hash: 0xB9562064627FF9DB | Since: 573
 */
export declare function setCarjackMissionRemovalParameters(): void;
/**
 * Initially used in Max Payne 3, that's why we know the name.
 *
 * Hash: 0xFC40CBF7B90CA77C | Since: 877
 */
export declare function setCarBootOpen(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x84FD40F56075E816 | Since: 323
 */
export declare function setCarHighSpeedBumpSeverityMultiplier(multiplier: number): void;
/**
 * Only used in R* Script fm_content_cargo
 *
 * Hash: 0xEF9D388F8D377F44 | Since: 2699
 */
export declare function setCheckForEnoughRoomForPed(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xB2E0C0D6922D31F2 | Since: 944
 */
export declare function setClearFreezeWaitingOnCollisionOncePlayerEnters(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF39C4F538B5124C2 | Since: 323
 */
export declare function setConvertibleRoof(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x1A78AD3D8240536F | Since: 323
 */
export declare function setConvertibleRoofLatchState(vehicle: number | IVehicle, state: boolean): void;
/**
 * Only used with the "akula" and "annihilator2" in the decompiled native scripts.
 *
 * Hash: 0xB251E0B33E58B424 | Since: 1290
 */
export declare function setDeployFoldingWings(vehicle: number | IVehicle, deploy: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAA653AE61924B0A0 | Since: 1290
 */
export declare function setDipStraightDownWhenCrashingPlane(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets a flag on heli and another vehicle type.
 *
 * Hash: 0x97841634EF7DF1D6 | Since: 1180
 */
export declare function setDisableAutomaticCrashTask(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x26D99D5A82FD18E8 | Since: 463
 */
export declare function setDisableBmxExtraTrickForces(): void;
/**
 * No comment provided
 *
 * Hash: 0xD4196117AF7BB974 | Since: 757
 */
export declare function setDisableDamageWithPickedUpEntity(): boolean;
/**
 * Prevents the vehicle from exploding when taking body damage if it was caused by a collision. Only works for planes.
 *
 * Hash: 0x26E13D440E7F6064 | Since: 1290
 */
export declare function setDisableExplodeFromBodyDamageOnCollision(vehicle: number | IVehicle, disable: boolean): void;
/**
 * Prevents the vehicle from exploding when taking body damage. Only works for helis and planes.
 *
 * Hash: 0xEDBC8405B3895CC9 | Since: 1103
 */
export declare function setDisableHeliExplodeFromBodyDamage(vehicle: number | IVehicle, disable: boolean): void;
/**
 * Disables "wings" for some flying vehicles. Works only for oppressor _2_ and deluxo.
 * For deluxo it just immediately removes vehicle's "wings" and you will be not able to fly up.
 * For oppressor 2 it will remove wings right after you land. And you will not able to fly up anymore too.
 * But for opressor 2 you still can fly if you somehow get back in the air.
 *
 * Hash: 0x2D55FE374D5FDB91 | Since: 1290
 */
export declare function setDisableHoverModeFlight(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Disables collision for this vehicle (maybe it also supports other entities, not sure).
 * Only world/building/fixed world objects will have their collisions disabled, props, peds, or any other entity still collides with the vehicle.
 * Example: https://streamable.com/6n45d5
 * Not sure if there is a native (and if so, which one) that resets the collisions.
 *
 * Hash: 0x75627043C6AA90AD | Since: 1180
 */
export declare function setDisableMapCollision(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x8235F1BEAD557629 | Since: 1180
 */
export declare function setDisablePedStandOnTop(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x25367DE49D64CF16 | Since: 323
 */
export declare function setDisablePretendOccupants(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD4B8E3D1917BC86B | Since: 323
 */
export declare function setDisableRandomTrainsThisFrame(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8F0D5BA1C2CC91D7 | Since: 1604
 */
export declare function setDisableRetractingWeaponBlades(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB088E9A47AE6EDD5 | Since: 323
 */
export declare function setDisableSuperdummy(vehicle: number | IVehicle): void;
/**
 * Disables turret movement when called in a loop. You can still fire and aim. You cannot shoot backwards though.
 *
 * Hash: 0xE615BB7A7752C76A | Since: 1365
 */
export declare function setDisableTurretMovement(vehicle: number | IVehicle, turretId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x91A0BD635321F145 | Since: 323
 */
export declare function setDisableEngineFires(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x143921E45EC44D62 | Since: 1604
 */
export declare function setDisableExplosionsDamage(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x37C8252A7C92D017 | Since: 323
 */
export declare function setDisablePetrolTankDamage(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x465BF26AB9684352 | Since: 323
 */
export declare function setDisablePetrolTankFires(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * True stops vtols from switching modes. Doesn't stop the sound though.
 *
 * Hash: 0xCE2B43770B655F8F | Since: 1290
 */
export declare function setDisableVerticalFlightModeTransition(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x4AD280EB48B2D8E6 | Since: 1868
 */
export declare function setDisableWantedConesResponse(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets some global vehicle related bool
 *
 * Hash: 0x211E95CE9903940C | Since: 1604
 */
export declare function setDisableWeaponBladeForces(toggle: boolean): void;
/**
 * Toggles to render distant vehicles. They may not be vehicles but images to look like vehicles.
 *
 * Hash: 0xF796359A959DF65D | Since: 323
 */
export declare function setDistantCarsEnabled(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDBC631F109350B8C | Since: 323
 */
export declare function setDontAllowPlayerToEnterIfLockedForPlayer(vehicle: number | IVehicle): void;
/**
 * R* used it to "remove" vehicle windows when "nightshark" had some mod, which adding some kind of armored windows. When enabled, you can't break vehicles glass. All your bullets wiil shoot through glass. You also will not able to break the glass with any other way (hitting and etc)
 *
 * Hash: 0x1087BC8EC540DAEB | Since: 1103
 */
export declare function setDontProcessGlass(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x2FA133A4A9D37ED8 | Since: 323
 */
export declare function setDoorAllowedToBeBrokenOff(vehicle: number | IVehicle, doorId: number, isBreakable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5AC79C98C5C17F05 | Since: 2372
 */
export declare function setDriftTyres(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Enable/Disables global slipstream physics
 *
 * Hash: 0xE6C0C80B8C867537 | Since: 323
 */
export declare function setEnableSlipstreaming(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x26324F33423F3CC3 | Since: 323
 */
export declare function setFarDraws(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xA247F9EF01D8082E | Since: 1103
 */
export declare function setFleeingsUseSwitchedOffNodes(): void;
/**
 * No comment provided
 *
 * Hash: 0x887FA38787DE8C72 | Since: 1365
 */
export declare function setForceFixLinkMatrices(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x97CE68CB032583F0 | Since: 323
 */
export declare function setForceHd(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No observed effect.
 *
 * Hash: 0xB28B1FE5BFADD7F5 | Since: 323
 */
export declare function setForceLowLodAnchorMode(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x4D9D109F63FEE1D4 | Since: 323
 */
export declare function setForceEngineDamageByBullet(): void;
/**
 * 0.0 = Lowest 1.0 = Highest. This is best to be used if you wanna pick-up a car since un-realistically on GTA V forklifts can't pick up much of anything due to vehicle mass. If you put this under a car then set it above 0.0 to a 'lifted-value' it will raise the car with no issue lol
 *
 * Hash: 0x37EBBF3117BD6A25 | Since: 323
 */
export declare function setForkliftForkHeight(vehicle: number | IVehicle, height: number): void;
/**
 * No comment provided
 *
 * Hash: 0x428AD3E26C8D9EB0 | Since: 877
 */
export declare function setFormationLeader(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x2AFD795EEAC8D30D | Since: 323
 */
export declare function setGarbageTrucks(toggle: boolean): void;
/**
 * Set state to true to extend the wings, false to retract them.
 *
 * Hash: 0x544996C0081ABDEB | Since: 1103
 */
export declare function setGliderActive(vehicle: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xFAF2A78061FD9EF4 | Since: 323
 */
export declare function setGlobalPositionOffsetForRecordedPlayback(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * Used for GTAO CEO/Associate spawned vehicles.
 *
 * Hash: 0xAB31EF4DE6800CE9 | Since: 573
 */
export declare function setGoonBoss(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x430A7631A84C9BE7 | Since: 1180
 */
export declare function setGroundEffectReducesDrag(toggle: boolean): void;
/**
 * Equivalent of SET_HELI_BLADES_SPEED(vehicleHandle, 1.0f);
 *
 * Hash: 0xA178472EBB8AE60D | Since: 323
 */
export declare function setHeliBladesFullSpeed(vehicle: number | IVehicle): void;
/**
 * Sets the speed of the helicopter blades in percentage of the full speed.
 *
 * vehicleHandle: The helicopter.
 * speed: The speed in percentage, 0.0f being 0% and 1.0f being 100%.
 *
 * Hash: 0xFD280B4D7F3ABC4D | Since: 323
 */
export declare function setHeliBladesSpeed(vehicle: number | IVehicle, speed: number): void;
/**
 * Stops the cargobob from being able to attach any vehicle
 *
 * Hash: 0x94A68DA412C4007D | Since: 1180
 */
export declare function setHeliCanPickupEntityThatHasPickUpDisabled(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0A3F820A9A9A9AC5 | Since: 1180
 */
export declare function setHeliCombatOffset(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * value between 0.0 and 1.0
 *
 * Hash: 0x6E0859B530A365CC | Since: 323
 */
export declare function setHeliControlLaggingRateScalar(helicopter: number | IVehicle, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4056EA1105F5ABD7 | Since: 463
 */
export declare function setHeliMainRotorHealth(vehicle: number | IVehicle, health: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8074CC1886802912 | Since: 2545
 */
export declare function setHeliResistToExplosion(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x3EC8BF18AA453FE9 | Since: 323
 */
export declare function setHeliTailBoomCanBreakOff(vehicle: number | IVehicle, toggle: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFE205F38AAA58E5B | Since: 463
 */
export declare function setHeliTailRotorHealth(vehicle: number | IVehicle, health: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE6F13851780394DA | Since: 323
 */
export declare function setHeliTurbulenceScalar(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x70A252F60A3E036B | Since: 1365
 */
export declare function setHoverModeWingRatio(vehicle: number | IVehicle, ratio: number): void;
/**
 * If false, lowers hydraulics (if raised) and disables hydraulics controls. If true, raises hydraulics and enables hydraulics controls.
 *
 * Only used once in each carmod script, on a car that does not have hydraulics to begin with.
 *
 * Hash: 0x28B18377EB6E25F6 | Since: 505
 */
export declare function setHydraulicsControl(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Works only on vehicles that support hydraulics.
 *
 * Hash: 0x84EA99C62CB3EF0C | Since: 505
 */
export declare function setHydraulicSuspensionRaiseFactor(vehicle: number | IVehicle, wheelId: number, value: number): void;
/**
 * States:
 * 4 = raise
 * 5 = lower
 * 6 = jump
 *
 * Hash: 0x8EA86DF356801C7D | Since: 505
 */
export declare function setHydraulicState(vehicle: number | IVehicle, state: number): void;
/**
 * Sets vehicle wheel hydraulic states transition. Known states:
 * 0 - reset
 * 1 - raise wheel (uses value arg, works just like _SET_VEHICLE_HYDRAULIC_WHEEL_VALUE)
 * 2 - jump using wheel
 *
 * Hash: 0xC24075310A8B9CD1 | Since: 505
 */
export declare function setHydraulicWheelState(vehicle: number | IVehicle, wheelId: number, state: number, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8664170EF165C4A6 | Since: 2189
 */
export declare function setIgnorePlanesSmallPitchChange(): void;
/**
 * No comment provided
 *
 * Hash: 0x2970EAA18FD5E42F | Since: 1604
 */
export declare function setIncreaseWheelCrushDamage(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Inverts vehicle's controls. So INPUT_VEH_ACCELERATE will be INPUT_VEH_BRAKE and vise versa (same for A/D controls)
 * Doesn't work for planes/helis.
 *
 * Hash: 0x5B91B229243351A8 | Since: 791
 */
export declare function setInvertControls(vehicle: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xACFB2463CC22BED2 | Since: 323
 */
export declare function setLastDriven(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xBC3CCA5844452B06 | Since: 323
 */
export declare function setLightsCutoffDistanceTweak(distance: number): void;
/**
 * p1 is always 0
 *
 * Hash: 0xBBE7648349B49BE8 | Since: 323
 */
export declare function setMissionTrainAsNoLongerNeeded(train: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x591CA673AA6AB736 | Since: 323
 */
export declare function setMissionTrainCoords(train: number | IVehicle, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x9E566EA551F4F1A6 | Since: 3407
 */
export declare function setNitrousIsActive(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xCAA15F13EBD417FF | Since: 323
 */
export declare function setNumberOfParkeds(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1B212B26DD3C04DF | Since: 757
 */
export declare function setOpenRearDoorsOnExplosion(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC8E9B6B71B8E660D | Since: 1604
 */
export declare function setOverrideNitrousLevel(vehicle: number | IVehicle, toggle: boolean, level: number, power: number, rechargeTime: number, disableSound: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x66E3AAFACE2D1EB8 | Since: 1103
 */
export declare function setOverrideDoorTorque(): void;
/**
 * No comment provided
 *
 * Hash: 0xEAE6DCC7EEE3DB1D | Since: 323
 */
export declare function setParkedDensityMultiplierThisFrame(multiplier: number): void;
/**
 * Sets some bit and float of vehicle. float is >= 0
 *
 * Hash: 0x59C3757B3B7408E8 | Since: 1493
 */
export declare function setPedsCanFallOffThisFromLargeFallDamage(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * min: 1.9f, max: 100.0f
 *
 * Hash: 0x877C1EAEAC531023 | Since: 323
 */
export declare function setPickupRopeLengthForCargobob(cargobob: number | IVehicle, length1: number, length2: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC0ED6438E6D39BA8 | Since: 944
 */
export declare function setPickupRopeLengthWithoutCreatingRopeForCargobob(): void;
/**
 * No comment provided
 *
 * Hash: 0xDD8A2D3337F04196 | Since: 3407
 */
export declare function setPlaneControlSectionsShouldBreakOffFromExplosions(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Works just like SET_VEHICLE_ENGINE_HEALTH, but only for planes.
 *
 * Hash: 0x2A86A0475B6A1434 | Since: 1103
 */
export declare function setPlaneEngineHealth(vehicle: number | IVehicle, health: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4C815EB175086F84 | Since: 1103
 */
export declare function setPlanePropellerHealth(plane: number | IVehicle, health: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE16142B94664DEFD | Since: 323
 */
export declare function setPlaneResistToExplosion(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0BBB9A7A8FFE931B | Since: 1290
 */
export declare function setPlaneSectionDamageScale(vehicle: number | IVehicle): void;
/**
 * This native sets the turbulence multiplier. It only works for planes.
 * 0.0 = no turbulence at all.
 * 1.0 = heavy turbulence.
 * Works by just calling it once, does not need to be called every tick.
 *
 * Hash: 0xAD2D28A1AFDFF131 | Since: 323
 */
export declare function setPlaneTurbulenceMultiplier(vehicle: number | IVehicle, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6683AB880E427778 | Since: 323
 */
export declare function setPlaybackSpeed(vehicle: number | IVehicle, speed: number): void;
/**
 * Identical to SET_PLAYBACK_TO_USE_AI_TRY_TO_REVERT_BACK_LATER with 0 as arguments for p1 and p3.
 *
 * Hash: 0xA549C3B37EA28131 | Since: 323
 */
export declare function setPlaybackToUseAi(vehicle: number | IVehicle, drivingStyle: number): void;
/**
 * Time is number of milliseconds before reverting, zero for indefinitely.
 *
 * Hash: 0x6E63860BBB190730 | Since: 323
 */
export declare function setPlaybackToUseAiTryToRevertBackLater(vehicle: number | IVehicle, time: number, drivingStyle: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBCDF8BAF56C87B6A | Since: 323
 */
export declare function setPlayersLast(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x4E74E62E0A97E901 | Since: 323
 */
export declare function setPoliceFocusWillTrack(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x796A877E459B99EA | Since: 323
 */
export declare function setPositionOffsetForRecordedPlayback(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x84436EC293B1415F | Since: 323
 */
export declare function setRandomBoats(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDA5E12F728DB30CA | Since: 2372
 */
export declare function setRandomBoatsMp(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x80D9F74197EA47D9 | Since: 323
 */
export declare function setRandomTrains(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB3B3359379FE77D3 | Since: 323
 */
export declare function setRandomDensityMultiplierThisFrame(multiplier: number): void;
/**
 * Lowers the vehicle's stance. Only works for vehicles that have strAdvancedFlags 0x8000 and 0x4000000 set.
 *
 * Hash: 0x3A375167F5782A65 | Since: 2372
 */
export declare function setReducedSuspensionForce(vehicle: number | IVehicle, enable: boolean): void;
/**
 * Makes the train all jumbled up and derailed as it moves on the tracks (though that wont stop it from its normal operations)
 *
 * Hash: 0x317B11A312DF5534 | Since: 323
 */
export declare function setRenderTrainAsDerailed(train: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x81E1552E35DC3839 | Since: 944
 */
export declare function setRocketBoostActive(vehicle: number | IVehicle, active: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xFEB2DDED3509562E | Since: 1103
 */
export declare function setRocketBoostFill(vehicle: number | IVehicle, percentage: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEFC13B1CE30D755D | Since: 944
 */
export declare function setScriptRampImpulseScale(vehicle: number | IVehicle, impulseScale: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE00F2AB100B76E89 | Since: 944
 */
export declare function setScriptRocketBoostRechargeTime(vehicle: number | IVehicle, seconds: number): void;
/**
 * Only called once in the decompiled scripts. Presumably activates the specified generator.
 *
 * Hash: 0xD9D620E0AC6DC4B0 | Since: 323
 */
export declare function setScriptGenerator(vehicleGenerator: number, enabled: boolean): void;
/**
 * Used on helicopters and blimps during the CTaskVehicleLand task. Sets a value on the task to 10f
 *
 * Hash: 0x107A473D7A6647A9 | Since: 1290
 */
export declare function setShortSlowdownForLanding(vehicle: number | IVehicle): void;
/**
 * A vehicle recording playback flag only used in jewelry_heist
 *
 * Hash: 0x063AE2B2CC273588 | Since: 323
 */
export declare function setShouldLerpFromAiToFullRecording(vehicle: number | IVehicle): void;
/**
 * Resets the vehicle's turret to its default position in scripted cameras. Doesn't seem to affect turrets that are occupied by a ped.
 *
 * Hash: 0x78CEEE41F49F421F | Since: 1103
 */
export declare function setShouldResetTurretInScriptedCameras(vehicle: number | IVehicle, shouldReset: boolean): void;
/**
 * Disables the screen effects and sound effects when driving over a slowdown pad.
 *
 * Hash: 0x65B080555EA48149 | Since: 1011
 */
export declare function setSlowDownEffectDisabled(disabled: boolean): void;
/**
 * It will override the ability to transform deluxo. For oppressor it will work just like SET_DISABLE_HOVER_MODE_FLIGHT
 *
 * Hash: 0xF1211889DF15A763 | Since: 1290
 */
export declare function setSpecialFlightModeAllowed(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Used in conjunction with SET_SPECIAL_FLIGHT_MODE_TARGET_RATIO, in Rockstar's scripts. Using this will instantly transform the vehicle into hover mode starting from the given ratio (ranging from 0.0 to 1.0, values greater than 1.0 will put the vehicle into a glitched state.) If this is not used alongside SET_SPECIAL_FLIGHT_MODE_TARGET_RATIO, the vehicle will automatically transform back into car mode.
 *
 * Usable only with the deluxo and other vehicles with deluxo-like hover mode toggle, modded or otherwise. Does nothing when used on oppressor2.
 *
 * Example:
 * `Ped playerPed = PLAYER::PLAYER_PED_ID();`
 * `Vehicle veh = PED::GET_VEHICLE_PED_IS_USING(playerPed);`
 * `VEHICLE::SET_SPECIAL_FLIGHT_MODE_RATIO(veh, 0.7f);`
 * `VEHICLE::SET_SPECIAL_FLIGHT_MODE_TARGET_RATIO(veh, 1.0f);`
 *
 * Hash: 0xD138FA15C9776837 | Since: 1290
 */
export declare function setSpecialFlightModeRatio(vehicle: number | IVehicle, ratio: number): void;
/**
 * Used in conjunction with SET_SPECIAL_FLIGHT_MODE_RATIO, in Rockstar's scripts. The vehicle will transform into the given targetRatio, starting from the vehicle's current hover mode transform ratio (which can also be manually set by SET_SPECIAL_FLIGHT_MODE_RATIO,) i.e. setting targetRatio to 0.0 while the vehicle is in hover mode will transform the vehicle into car mode, likewise setting targetRatio to 1.0 while the vehicle is in car mode will transform the vehicle into hover mode, and if the current transform ratio is set to 0.7 while targetRatio is 1.0 the vehicle will transform into hover mode starting from being already partially transformed.
 *
 * targetRatio is recommended to always be 0.0 or 1.0, otherwise the vehicle will transform into a glitched state.
 *
 * Usable only with the deluxo and other vehicles with deluxo-like hover mode toggle, modded or otherwise. Does nothing when used on oppressor2.
 *
 * Example:
 * `Ped playerPed = PLAYER::PLAYER_PED_ID();`
 * `Vehicle veh = PED::GET_VEHICLE_PED_IS_USING(playerPed);`
 * `VEHICLE::SET_SPECIAL_FLIGHT_MODE_RATIO(veh, 0.7f);`
 * `VEHICLE::SET_SPECIAL_FLIGHT_MODE_TARGET_RATIO(veh, 1.0f);`
 *
 * Hash: 0x438B3D7CA026FE91 | Since: 1290
 */
export declare function setSpecialFlightModeTargetRatio(vehicle: number | IVehicle, targetRatio: number): void;
/**
 * Disables the screen effects and sound effects when driving over a speed boost pad.
 *
 * Hash: 0x7BBE7FF626A591FE | Since: 877
 */
export declare function setSpeedBoostEffectDisabled(disabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC59872A5134879C7 | Since: 323
 */
export declare function setSubmarineCrushDepths(vehicle: number | IVehicle, depth1: number, depth2: number, depth3: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB893215D8D4C015B | Since: 323
 */
export declare function setTaskGotoPlaneMinHeightAboveTerrain(plane: number | IVehicle, height: number): void;
/**
 * This is not tested - it's just an assumption.
 * - Nac
 *
 * Doesn't seem to work.  I'll try with an int instead. --JT
 *
 * Read the scripts, im dumpass.
 *
 * `if (!VEHICLE::IS_TAXI_LIGHT_ON(l_115)) {`
 * `VEHICLE::SET_TAXI_LIGHTS(l_115, 1);`
 * }
 *
 * Hash: 0x598803E85E8448D9 | Since: 323
 */
export declare function setTaxiLights(vehicle: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x2FA2494B47FDD009 | Since: 1103
 */
export declare function setTrailerAttachmentEnabled(): void;
/**
 * No comment provided
 *
 * Hash: 0x2A8F319B392E7B3F | Since: 323
 */
export declare function setTrailerInverseMassScale(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x878C75C09FBDB942 | Since: 1103
 */
export declare function setTrailerLegsLowered(vehicle: number | IVehicle): void;
/**
 * in the decompiled scripts, seems to be always called on the vehicle right after being attached to a trailer.
 *
 * Hash: 0x95CF53B3D687F9FA | Since: 323
 */
export declare function setTrailerLegsRaised(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x16469284DB8C62B5 | Since: 323
 */
export declare function setTrainCruiseSpeed(train: number | IVehicle, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAA0BC91BE0B796E3 | Since: 323
 */
export declare function setTrainSpeed(train: number | IVehicle, speed: number): void;
/**
 * Only called once inside main_persitant with the parameters p0 = 0, p1 = 120000
 *
 * trackIndex: 0 - 26
 * Full list of all train tracks + track nodes by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/traintracks.json
 *
 * Hash: 0x21973BBF8D17EDFA | Since: 323
 */
export declare function setTrainTrackSpawnFrequency(trackIndex: number, frequency: number): void;
/**
 * Affects the playback speed of the submarine car conversion animations. Does not affect hardcoded animations such as the wheels being retracted.
 *
 * Hash: 0x498218259FB7C72D | Since: 1365
 */
export declare function setTransformRateForAnimation(vehicle: number | IVehicle, transformRate: number): void;
/**
 * When set to true, the key to transform a car to submarine mode changes from raise/lower convertible roof (hold H by default) to special vehicle transform (press X by default.)
 *
 * Hash: 0x41B9FB92EDED32A6 | Since: 1365
 */
export declare function setTransformToSubmarineUsesAlternateInput(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Toggles specific flag on turret
 *
 * Hash: 0xC60060EB0D8AC7B1 | Since: 1290
 */
export declare function setTurretHidden(vehicle: number | IVehicle, index: number, toggle: boolean): void;
/**
 * SET_TYRE_WEAR_RATE must be active, otherwise values set to <1000.0f will default to 350.0f
 *
 * Usable wheels:
 * 0: wheel_lf
 * 1: wheel_rf
 * 2: wheel_lm1
 * 3: wheel_rm1
 * 4: wheel_lr
 * 5: wheel_rr
 *
 * Hash: 0x74C68EF97645E79D | Since: 1868
 */
export declare function setTyreHealth(vehicle: number | IVehicle, wheelIndex: number, health: number): void;
/**
 * Controls how much traction the wheel loses.
 *
 * Default values from Rockstar's Open Wheel Race JSON's:
 * "owrtds" (Soft): 0.05
 * "owrtdm" (Medium): 0.45
 * "owrtdh" (Hard): 0.8
 *
 * Usable wheels:
 * 0: wheel_lf
 * 1: wheel_rf
 * 2: wheel_lm1
 * 3: wheel_rm1
 * 4: wheel_lr
 * 5: wheel_rr
 *
 * Hash: 0xC970D0E0FC31D768 | Since: 2060
 */
export declare function setTyreMaximumGripDifferenceDueToWearRate(vehicle: number | IVehicle, wheelIndex: number, multiplier: number): void;
/**
 * Needs to be run for tire wear to work. Multiplier affects the downforce and how fast the tires will wear out, higher values essentially make the vehicle slower on straights and its tires will wear down quicker when cornering. Value must be >0f.
 * Default value in Rockstar's Open Wheel Race JSON's ("owrtws", "owrtwm", "owrtwh") is 1.0
 *
 * Usable wheels:
 * 0: wheel_lf
 * 1: wheel_rf
 * 2: wheel_lm1
 * 3: wheel_rm1
 * 4: wheel_lr
 * 5: wheel_rr
 *
 * Hash: 0x01894E2EDE923CA2 | Since: 1868
 */
export declare function setTyreWearRate(vehicle: number | IVehicle, wheelIndex: number, multiplier: number): void;
/**
 * Controls how fast the tires wear out.
 *
 * Default values from Rockstar's Open Wheel Race JSON's:
 * "owrtss" (Soft): 2.2
 * "owrtsm" (Medium): 1.7
 * "owrtsh" (Hard): 1.2
 *
 * Usable wheels:
 * 0: wheel_lf
 * 1: wheel_rf
 * 2: wheel_lm1
 * 3: wheel_rm1
 * 4: wheel_lr
 * 5: wheel_rr
 *
 * Hash: 0x392183BB9EA57697 | Since: 2060
 */
export declare function setTyreWearRateScale(vehicle: number | IVehicle, wheelIndex: number, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB68CFAF83A02768D | Since: 1290
 */
export declare function setUseDesiredZCruiseSpeedForLanding(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Changes the car jump control to require a double-tap to activate.
 *
 * Hash: 0x5BBCF35BF6E456F7 | Since: 1604
 */
export declare function setUseDoubleClickForCarJump(toggle: boolean): void;
/**
 * Allows vehicles with the FLAG_JUMPING_CAR flag to jump higher (i.e. Ruiner 2000).
 *
 * Hash: 0xF06A16CA55D138D8 | Since: 944
 */
export declare function setUseHigherCarJump(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDFFCEF48E511DB48 | Since: 323
 */
export declare function setActiveDuringPlayback(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x21115BCD6E44656A | Since: 323
 */
export declare function setActiveForPedNavigation(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9BECD4B9FEF3F8A6 | Since: 323
 */
export declare function setActAsIfHasSirenOn(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x1F9FB66F3A3842D2 | Since: 323
 */
export declare function setActAsIfHighSpeedForFragSmashing(vehicle: number | IVehicle): void;
/**
 * Used to be incorrectly named SET_VEHICLE_EXCLUSIVE_DRIVER
 * Toggles a flag related to SET_VEHICLE_EXCLUSIVE_DRIVER, however, doesn't enable that feature (or trigger script events related to it).
 *
 * Hash: 0x41062318F23ED854 | Since: 323
 */
export declare function setAiCanUseExclusiveSeats(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xCDE5E70C1DDB954C | Since: 323
 */
export declare function setAlarm(vehicle: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x7D6F9A3EF26136A0 | Since: 323
 */
export declare function setAllowHomingMissleLockon(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1DDA078D12879EEE | Since: 463
 */
export declare function setAllowHomingMissleLockonSynced(vehicle: number | IVehicle, canBeLockedOn: boolean): void;
/**
 * Makes the vehicle accept no passengers.
 *
 * Hash: 0x5D14D4154BFE7B2C | Since: 323
 */
export declare function setAllowNoPassengersLockon(veh: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8BA6F76BC53A1493 | Since: 323
 */
export declare function setAutomaticallyAttaches(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xD3301660A57C9272 | Since: 757
 */
export declare function setAvoidPlayerVehicleRiotVanMission(): void;
/**
 * No comment provided
 *
 * Hash: 0x9F3F689B814F2599 | Since: 323
 */
export declare function setBlipThrottleRandomly(vehicle: number | IVehicle): void;
/**
 * Controls how fast bobbleheads and tsurikawas move on each axis.
 *
 * p2 is probably z, but changing that value didn't seem to have a noticeable effect.
 *
 * Hash: 0x870B8B7A766615C8 | Since: 505
 */
export declare function setBobbleheadVelocity(x: number, y: number): void;
/**
 * p2 often set to 1000.0 in the decompiled scripts.
 *
 * Hash: 0xB77D05AC8C78AADB | Since: 323
 */
export declare function setBodyHealth(vehicle: number | IVehicle, value: number): void;
/**
 * Sets the amount of bombs that this vehicle has. As far as I know, this does _not_ impact vehicle weapons or the ammo of those weapons in any way, it is just a way to keep track of the amount of bombs in a specific plane.
 *
 * Hash: 0xF4B2ED59DEB5D774 | Since: 1180
 */
export declare function setBombAmmo(vehicle: number | IVehicle, bombCount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE4E2FD323574965C | Since: 757
 */
export declare function setBrake(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x92B35082E0B42F66 | Since: 323
 */
export declare function setBrakeLights(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC361AA040D6637A8 | Since: 323
 */
export declare function setBrokenPartsDontAffectAiHandling(vehicle: number | IVehicle): void;
/**
 * Sets the arm position of a bulldozer. Position must be a value between 0.0 and 1.0. Ignored when `p2` is set to false, instead incrementing arm position by 0.1 (or 10%).
 *
 * Hash: 0xF8EBCCC96ADB9FB7 | Since: 323
 */
export declare function setBulldozerArmPosition(vehicle: number | IVehicle, position: number): void;
/**
 * On accelerating, spins the driven wheels with the others braked, so you don't go anywhere.
 *
 * Hash: 0xFB8794444A7D60FB | Since: 323
 */
export declare function setBurnout(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * This has not yet been tested - it's just an assumption of what the types could be.
 *
 * Hash: 0x3750146A28097A82 | Since: 323
 */
export declare function setCanBeTargetted(vehicle: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x300504B23BD3B711 | Since: 323
 */
export declare function setCanBeUsedByFleeingPeds(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x4C7028F78FFD3681 | Since: 323
 */
export declare function setCanBeVisiblyDamaged(vehicle: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x59BF8C3D52C92F66 | Since: 323
 */
export declare function setCanBreak(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0CDDA42F9E360CA6 | Since: 323
 */
export declare function setCanDeformWheels(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x065D03A9D6B2C6B5 | Since: 463
 */
export declare function setCanEjectPassengersIfLocked(): void;
/**
 * No comment provided
 *
 * Hash: 0x206BC5DC9D1AC70A | Since: 323
 */
export declare function setCanEngineMissfire(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x51BB2D88D31A914B | Since: 323
 */
export declare function setCanLeakOil(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x192547247864DFDD | Since: 323
 */
export declare function setCanLeakPetrol(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x428BACCDF5E26EAD | Since: 323
 */
export declare function setCanSaveInGarage(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9849DE24FCF23CCC | Since: 1604
 */
export declare function setCausesSwerving(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xA46413066687A328 | Since: 323
 */
export declare function setCeilingHeight(vehicle: number | IVehicle, height: number): void;
/**
 * <1.0 - Decreased torque
 * =1.0 - Default torque
 * >1.0 - Increased torque
 *
 * Negative values will cause the vehicle to go backwards instead of forwards while accelerating.
 *
 * value - is between 0.2 and 1.8 in the decompiled scripts.
 *
 * This needs to be called every frame to take effect.
 *
 * Hash: 0xB59E4BD37AE292DB | Since: 323
 */
export declare function setCheatPowerIncrease(vehicle: number | IVehicle, value: number): void;
/**
 * colorPrimary & colorSecondary are the paint index for the vehicle.
 * For a list of valid paint indexes, view: https://pastebin.com/pwHci0xK
 * -------------------------------------------------------------------------
 * Note: minimum color index is 0, maximum color index is (numColorIndices - 1)
 *
 * Full list of vehicle colors by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
 *
 * Hash: 0x4F1D4BE3A7F24601 | Since: 323
 */
export declare function setColours(vehicle: number | IVehicle, colorPrimary: number, colorSecondary: number): void;
/**
 * Sets the selected vehicle's colors to the specified index of the color combination found in the vehicle's carvariations.meta entry.
 *
 * Hash: 0x33E8CD3322E2FE31 | Since: 323
 */
export declare function setColourCombination(vehicle: number | IVehicle, colorCombination: number): void;
/**
 * Does nothing. It's a nullsub.
 *
 * Hash: 0x36DE109527A2C0C4 | Since: 1604
 */
export declare function setCombatMode(toggle: boolean): void;
/**
 * Similar to SET_VEHICLE_BOMB_AMMO, this sets the amount of countermeasures that are present on this vehicle.
 * Use GET_VEHICLE_BOMB_AMMO to get the current amount.
 *
 * Hash: 0x9BDA23BF666F0855 | Since: 1180
 */
export declare function setCountermeasureAmmo(vehicle: number | IVehicle, counterMeasureCount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x182F266C2D9E2BEB | Since: 323
 */
export declare function setCustomPathNodeStreamingRadius(vehicle: number | IVehicle): void;
/**
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 *
 * Hash: 0x7141766F91D15BEA | Since: 323
 */
export declare function setCustomPrimaryColour(vehicle: number | IVehicle, r: number, g: number, b: number): void;
/**
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 *
 * Hash: 0x36CED73BFED89754 | Since: 323
 */
export declare function setCustomSecondaryColour(vehicle: number | IVehicle, r: number, g: number, b: number): void;
/**
 * Apply damage to vehicle at a location. Location is relative to vehicle model (not world).
 *
 * Radius of effect damage applied in a sphere at impact location
 * When `focusOnModel` set to `true`, the damage sphere will travel towards the vehicle from the given point, thus guaranteeing an impact
 *
 * Hash: 0xA1DD317EA8FD4F29 | Since: 323
 */
export declare function setDamage(vehicle: number | IVehicle, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, focusOnModel: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x4E20D2A627011E8E | Since: 757
 */
export declare function setDamageScale(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9640E30A7F395E4B | Since: 1290
 */
export declare function setDamageScales(vehicle: number | IVehicle): void;
/**
 * This fixes the deformation of a vehicle but the vehicle health doesn't improve
 *
 * Hash: 0x953DA1E1B12C0491 | Since: 323
 */
export declare function setDeformationFixed(vehicle: number | IVehicle): void;
/**
 * Use this native inside a looped function.
 * Values:
 * - `0.0` = no vehicles on streets
 * - `1.0` = normal vehicles on streets
 *
 * Hash: 0x245A6883D966D537 | Since: 323
 */
export declare function setDensityMultiplierThisFrame(multiplier: number): void;
/**
 * Does nothing. It's a nullsub.
 *
 * Hash: 0x82E0AC411E41A5B4 | Since: 1604
 */
export declare function setDetonationMode(toggle: boolean): void;
/**
 * You can't use values greater than 15.0
 * Also, R* does (float)(rand() % 15) to get a random dirt level when generating a vehicle.
 *
 * Hash: 0x79D3B596FE44EE8B | Since: 323
 */
export declare function setDirtLevel(vehicle: number | IVehicle, dirtLevel: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAF60E6A2936F982A | Since: 1103
 */
export declare function setDisableCollisionUponCreation(vehicle: number | IVehicle, disable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8AA9180DE2FEDD45 | Since: 323
 */
export declare function setDisableHeightMapAvoidance(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x2B6747FAA9DB9D6B | Since: 323
 */
export declare function setDisableTowing(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x76D26A22750E849E | Since: 1103
 */
export declare function setDontTerminateTaskWhenAchieved(vehicle: number | IVehicle): void;
/**
 * enum eVehicleLockState
 * {
 * VEHICLELOCK_NONE,
 * VEHICLELOCK_UNLOCKED,
 * VEHICLELOCK_LOCKED,
 * VEHICLELOCK_LOCKOUT_PLAYER_ONLY,
 * VEHICLELOCK_LOCKED_PLAYER_INSIDE,
 * VEHICLELOCK_LOCKED_INITIALLY,
 * VEHICLELOCK_FORCE_SHUT_DOORS,
 * VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED,
 * VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED,
 * VEHICLELOCK_LOCKED_NO_PASSENGERS,
 * VEHICLELOCK_CANNOT_ENTER
 * };
 *
 * Hash: 0xB664292EAECF7FA6 | Since: 323
 */
export declare function setDoorsLocked(vehicle: number | IVehicle, doorLockStatus: number): void;
/**
 * After some analysis, I've decided that these are what the parameters are.
 *
 * We can see this being used in R* scripts such as "am_mp_property_int.ysc.c4":
 * `l_11A1 = PED::GET_VEHICLE_PED_IS_IN(PLAYER::PLAYER_PED_ID(), 1);`
 * ...
 * `VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_ALL_PLAYERS(l_11A1, 1);`
 *
 * Hash: 0xA2F80B8D040727CC | Since: 323
 */
export declare function setDoorsLockedForAllPlayers(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x203B527D1B77904C | Since: 1365
 */
export declare function setDoorsLockedForAllTeams(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9737A37136F07E75 | Since: 323
 */
export declare function setDoorsLockedForNonScriptPlayers(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x517AAF684BB50CD1 | Since: 323
 */
export declare function setDoorsLockedForPlayer(vehicle: number | IVehicle, player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB81F6D4A8F5EEBA8 | Since: 323
 */
export declare function setDoorsLockedForTeam(vehicle: number | IVehicle, team: number, toggle: boolean): void;
/**
 * Closes all doors of a vehicle:
 *
 * Hash: 0x781B3D62BB013EF5 | Since: 323
 */
export declare function setDoorsShut(vehicle: number | IVehicle, closeInstantly: boolean): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Usually used alongside other vehicle door natives.
 *
 * Hash: 0x3B458DDB57038F08 | Since: 877
 */
export declare function setDoorAutoLock(vehicle: number | IVehicle, doorId: number, toggle: boolean): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xD4D4F6A4AB575A33 | Since: 323
 */
export declare function setDoorBroken(vehicle: number | IVehicle, doorId: number, deleteDoor: boolean): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xF2BFA0430F0A0FCB | Since: 323
 */
export declare function setDoorControl(vehicle: number | IVehicle, doorId: number, speed: number, angle: number): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xA5A9653A8D2CAF48 | Since: 323
 */
export declare function setDoorLatched(vehicle: number | IVehicle, doorId: number): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x7C65DAC73C35C862 | Since: 323
 */
export declare function setDoorOpen(vehicle: number | IVehicle, doorId: number, loose: boolean, openInstantly: boolean): void;
/**
 * enum eDoorId
 * {
 * VEH_EXT_DOOR_INVALID_ID = -1,
 * VEH_EXT_DOOR_DSIDE_F,
 * VEH_EXT_DOOR_DSIDE_R,
 * VEH_EXT_DOOR_PSIDE_F,
 * VEH_EXT_DOOR_PSIDE_R,
 * VEH_EXT_BONNET,
 * VEH_EXT_BOOT
 * };
 *
 * Hash: 0x93D9BD300D7789E5 | Since: 323
 */
export declare function setDoorShut(vehicle: number | IVehicle, doorId: number, closeInstantly: boolean): void;
/**
 * Money pickups are created around cars when they explode. Only works when the vehicle model is a car. A single pickup is between 1 and 18 dollars in size. All car models seem to give the same amount of money.
 *
 * youtu.be/3arlUxzHl5Y
 * i.imgur.com/WrNpYFs.jpg
 *
 * Hash: 0x068F64F2470F9656 | Since: 323
 */
export declare function setDropsMoneyWhenBlownUp(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x983765856F2564F9 | Since: 323
 */
export declare function setEngineCanDegrade(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * 1000 is max health
 * Begins leaking gas at around 650 health
 * Minimum: -4000
 * Maximum: 1000
 *
 * -4000: Engine is destroyed
 * 0 and below: Engine catches fire and health rapidly declines
 * 300: Engine is smoking and losing functionality
 * 1000: Engine is perfect
 *
 * Hash: 0x45F6D8EEF34ABEF1 | Since: 323
 */
export declare function setEngineHealth(vehicle: number | IVehicle, health: number): void;
/**
 * Starts or stops the engine on the specified vehicle.
 *
 * vehicle: The vehicle to start or stop the engine on.
 * value: true to turn the vehicle on; false to turn it off.
 * instantly: if true, the vehicle will be set to the state immediately; otherwise, the current driver will physically turn on or off the engine.
 * disableAutoStart: If true, the system will prevent the engine from starting when the player got into it.
 *
 * Hash: 0x2497C4717C8B881E | Since: 323
 */
export declare function setEngineOn(vehicle: number | IVehicle, value: boolean, instantly: boolean, disableAutoStart: boolean): void;
/**
 * The parameter fade is a value from 0-1, where 0 is fresh paint.
 *
 * Hash: 0x3AFDC536C3D01674 | Since: 323
 */
export declare function setEnveffScale(vehicle: number | IVehicle, fade: number): void;
/**
 * index: 0 - 1
 *
 * Used to be incorrectly named _SET_VEHICLE_EXCLUSIVE_DRIVER_2
 *
 * Hash: 0xB5C51B5502E85E83 | Since: 323
 */
export declare function setExclusiveDriver(vehicle: number | IVehicle, ped: number | IPed, index: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD565F438137F0E10 | Since: 1103
 */
export declare function setExplodesOnExplosionDamageAtZeroBodyHealth(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets a vehicle to be strongly resistant to explosions. p0 is the vehicle; set p1 to false to toggle the effect on/off.
 *
 * Hash: 0x71B0892EC081D60A | Since: 323
 */
export declare function setExplodesOnHighExplosionDamage(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Max value is 32767
 *
 * Hash: 0x79DF7E806202CE01 | Since: 323
 */
export declare function setExtendedRemovalRange(vehicle: number | IVehicle, range: number): void;
/**
 * Available extraIds are 1-14, however none of the vehicles have extras above 12.
 *
 * Hash: 0x7EE3A3C5E4A40CC9 | Since: 323
 */
export declare function setExtra(vehicle: number | IVehicle, extraId: number, disable: boolean): void;
/**
 * They use the same color indexs as SET_VEHICLE_COLOURS.
 *
 * Hash: 0x2036F561ADD12E33 | Since: 323
 */
export declare function setExtraColours(vehicle: number | IVehicle, pearlescentColor: number, wheelColor: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF40DD601A65F7F19 | Since: 505
 */
export declare function setExtraColour5(vehicle: number | IVehicle, color: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6089CDF6A57F326C | Since: 505
 */
export declare function setExtraColour6(vehicle: number | IVehicle, color: number): void;
/**
 * This fixes a vehicle.
 * If the vehicle's engine's broken then you cannot fix it with this native.
 *
 * Hash: 0x115722B1B9C14C1C | Since: 323
 */
export declare function setFixed(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x30D779DE7C4F6DD3 | Since: 323
 */
export declare function setFlightNozzlePosition(vehicle: number | IVehicle, angleRatio: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9AA47FFF660CB932 | Since: 323
 */
export declare function setFlightNozzlePositionImmediate(vehicle: number | IVehicle, angle: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB055A34527CB8FD7 | Since: 323
 */
export declare function setForceAfterburner(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets some bit of vehicle
 *
 * Hash: 0x8821196D91FA2DE5 | Since: 1290
 */
export declare function setForceInteriorlight(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * SCALE: Setting the speed to 30 would result in a speed of roughly 60mph, according to speedometer.
 *
 * Speed is in meters per second
 * You can convert meters/s to mph here:
 * http://www.calculateme.com/Speed/MetersperSecond/ToMilesperHour.htm
 *
 * Hash: 0xAB54A438726D25D5 | Since: 323
 */
export declare function setForwardSpeed(vehicle: number | IVehicle, speed: number): void;
/**
 * Seems to be identical to SET_VEHICLE_FORWARD_SPEED
 *
 * Hash: 0x6501129C9E0FFA05 | Since: 877
 */
export declare function setForwardSpeedXy(vehicle: number | IVehicle, speed: number): void;
/**
 * Seems to be related to the metal parts, not tyres (like i was expecting lol)
 *
 * Hash: 0x1837AF7C627009BA | Since: 323
 */
export declare function setFrictionOverride(vehicle: number | IVehicle, friction: number): void;
/**
 * It switch to highbeam when p1 is set to true.
 *
 * Hash: 0x8B7FD87F0DDB421E | Since: 323
 */
export declare function setFullbeam(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Allows creation of CEventShockingPlaneFlyby, CEventShockingHelicopterOverhead, and other(?) Shocking events
 *
 * Hash: 0x279D50DE5652D935 | Since: 323
 */
export declare function setGeneratesEngineShockingEvents(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Related to car generators & CPlayerSwitchMgrLong
 *
 * Hash: 0x9A75585FB2E54FAD | Since: 323
 */
export declare function setGeneratorAreaOfInterest(pos: Vector3, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0x89F149B6131E57DA | Since: 323
 */
export declare function setGravity(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x684785568EF26A22 | Since: 323
 */
export declare function setHandbrake(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Use the "AIHandling" string found in handling.meta
 *
 * Hash: 0x10655FAB9915623D | Since: 323
 */
export declare function setHandlingOverride(vehicle: number | IVehicle, hash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x02398B627547189C | Since: 323
 */
export declare function setHasBeenDrivenFlag(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x2B5F9D2AF1F1722D | Since: 323
 */
export declare function setHasBeenOwnedByPlayer(vehicle: number | IVehicle, owned: boolean): void;
/**
 * If set to true, prevents vehicle sirens from having sound, leaving only the lights.
 *
 * Hash: 0xD8050E0EB60CF274 | Since: 323
 */
export declare function setHasMutedSirens(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * if true, axles won't bend.
 *
 * Hash: 0x92F0CF722BC4202F | Since: 323
 */
export declare function setHasStrongAxles(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1AA8A837D2169D94 | Since: 323
 */
export declare function setHasUnbreakableLights(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * p1 can be either 0, 1 or 2.
 *
 * Determines how vehicle lights behave when toggled.
 *
 * 0 = Default (Lights can be toggled between off, normal and high beams)
 * 1 = Lights Disabled (Lights are fully disabled, cannot be toggled)
 * 2 = Always On (Lights can be toggled between normal and high beams)
 *
 * Hash: 0x1FD09E7390A74D54 | Since: 323
 */
export declare function setHeadlightShadows(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x407DC5E97DB1A4D3 | Since: 1493
 */
export declare function setHomingLockedontoState(): void;
/**
 * Seems to copy some values in vehicle
 *
 * Hash: 0x6A973569BA094650 | Since: 1604
 */
export declare function setImpatienceTimer(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x06582AFF74894C75 | Since: 323
 */
export declare function setInactiveDuringPlayback(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets the turn signal enabled for a vehicle.
 * Set turnSignal to 1 for left light, 0 for right light.
 *
 * Hash: 0xB5D45264751B7DF0 | Since: 323
 */
export declare function setIndicatorLights(vehicle: number | IVehicle, turnSignal: number, toggle: boolean): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xBE70724027F85BCD | Since: 323
 */
export declare function setIndividualDoorsLocked(vehicle: number | IVehicle, doorId: number, doorLockStatus: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0AD9E8F87FF7C16F | Since: 323
 */
export declare function setInfluencesWantedLevel(): void;
/**
 * No comment provided
 *
 * Hash: 0xBC2042F090AF6AD3 | Since: 323
 */
export declare function setInteriorlight(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * If set to TRUE, it seems to suppress door noises and doesn't allow the horn to be continuous.
 *
 * Hash: 0x9D44FCCE98450843 | Since: 323
 */
export declare function setInCarModShop(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Setting this to false, makes the specified vehicle to where if you press Y your character doesn't even attempt the animation to enter the vehicle. Hence it's not considered aka ignored.
 *
 * Hash: 0x31B927BBC44156CD | Since: 323
 */
export declare function setIsConsideredByPlayer(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * p1 (toggle) was always 1 (true) except in one case in the b678 scripts.
 *
 * Hash: 0x07116E24E9D1929D | Since: 323
 */
export declare function setIsRacing(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x67B2C79AA7FF5738 | Since: 323
 */
export declare function setIsStolen(vehicle: number | IVehicle, isStolen: boolean): void;
/**
 * Sets the wanted state of this vehicle.
 *
 * Hash: 0xF7EC25A3EBEEC726 | Since: 323
 */
export declare function setIsWanted(vehicle: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB8FBC8B1330CA9B4 | Since: 323
 */
export declare function setKeepEngineOnWhenAbandoned(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x99C82F8A139F3E4E | Since: 323
 */
export declare function setKersAllowed(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * set's if the vehicle has lights or not.
 * not an on off toggle.
 * p1 = 0 ;vehicle normal lights, off then lowbeams, then highbeams
 * p1 = 1 ;vehicle doesn't have lights, always off
 * p1 = 2 ;vehicle has always on lights
 * p1 = 3 ;or even larger like 4,5,... normal lights like =1
 * note1: when using =2 on day it's lowbeam,highbeam
 * but at night it's lowbeam,lowbeam,highbeam
 * note2: when using =0 it's affected by day or night for highbeams don't exist in daytime.
 *
 * Hash: 0x34E710FF01247C5A | Since: 323
 */
export declare function setLights(vehicle: number | IVehicle, state: number): void;
/**
 * multiplier = brightness of head lights.
 * this value isn't capped afaik.
 *
 * multiplier = 0.0 no lights
 * multiplier = 1.0 default game value
 *
 *
 * Hash: 0xB385454F8791F57C | Since: 323
 */
export declare function setLightMultiplier(vehicle: number | IVehicle, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC50CE861B55EAB8B | Since: 323
 */
export declare function setLimitSpeedWhenPlayerInactive(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x60BF608F1B8CD1B6 | Since: 323
 */
export declare function setLivery(vehicle: number | IVehicle, livery: number): void;
/**
 * Used to set the secondary livery (the roof on Tornado Custom being one such example.)
 *
 * Livery value is dependent on the amount of liveries present in the vehicle's texture dictionary, for Tornado Custom this would be 0-6.
 *
 * Hash: 0xA6D3A8750DC73270 | Since: 505
 */
export declare function setLivery2(vehicle: number | IVehicle, livery: number): void;
/**
 * No comment provided
 *
 * Hash: 0x93AE6A61BE015BF1 | Since: 323
 */
export declare function setLodMultiplier(vehicle: number | IVehicle, multiplier: number): void;
/**
 * To reset the max speed, set the `speed` value to `0.0` or lower.
 *
 * Hash: 0xBAA045B4E42F3C06 | Since: 1103
 */
export declare function setMaxSpeed(vehicle: number | IVehicle, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE851E480B814D4BA | Since: 323
 */
export declare function setMayBeUsedByGotoPointAnyMeans(vehicle: number | IVehicle): void;
/**
 * In b944, there are 50 (0 - 49) mod types.
 *
 * Sets the vehicle mod.
 * The vehicle must have a mod kit first.
 *
 * Any out of range ModIndex is stock.
 *
 * #Mod Type
 * Spoilers - 0
 * Front Bumper - 1
 * Rear Bumper - 2
 * Side Skirt - 3
 * Exhaust - 4
 * Frame - 5
 * Grille - 6
 * Hood - 7
 * Fender - 8
 * Right Fender - 9
 * Roof - 10
 * Engine - 11
 * Brakes - 12
 * Transmission - 13
 * Horns - 14 (modIndex from 0 to 51)
 * Suspension - 15
 * Armor - 16
 * Front Wheels - 23
 * Back Wheels - 24 //only for motocycles
 * Plate holders - 25
 * Trim Design - 27
 * Ornaments - 28
 * Dial Design - 30
 * Steering Wheel - 33
 * Shifter Leavers - 34
 * Plaques - 35
 * Hydraulics - 38
 * Livery - 48
 *
 * ENUMS: https://pastebin.com/QzEAn02v
 *
 * Hash: 0x6AF0636DDEDCB6DD | Since: 323
 */
export declare function setMod(vehicle: number | IVehicle, modType: number, modIndex: number, customTires: boolean): void;
/**
 * Makes the vehicle stop spawning naturally in traffic. Here's an essential example:
 *
 * `VEHICLE::SET_VEHICLE_MODEL_IS_SUPPRESSED(MISC::GET_HASH_KEY("taco"), true);`
 *
 * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
 *
 * Hash: 0x0FC2D89AC25A5814 | Since: 323
 */
export declare function setModelIsSuppressed(model: number | string, suppressed: boolean): void;
/**
 * paintType:
 * 0: Normal
 * 1: Metallic
 * 2: Pearl
 * 3: Matte
 * 4: Metal
 * 5: Chrome
 * 6: Chameleon
 *
 * color: number of the color.
 *
 * p3 seems to always be 0.
 *
 * Full list of vehicle colors and vehicle plates by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
 *
 * Hash: 0x43FEB945EE7F85B8 | Since: 323
 */
export declare function setModColor1(vehicle: number | IVehicle, paintType: number, color: number, pearlescentColor: number): void;
/**
 * Changes the secondary paint type and color
 * paintType:
 * 0: Normal
 * 1: Metallic
 * 2: Pearl
 * 3: Matte
 * 4: Metal
 * 5: Chrome
 * 6: Chameleon
 *
 * color: number of the color
 *
 * Full list of vehicle colors and vehicle plates by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
 *
 * Hash: 0x816562BADFDEC83E | Since: 323
 */
export declare function setModColor2(vehicle: number | IVehicle, paintType: number, color: number): void;
/**
 * Set modKit to 0 if you plan to call SET_VEHICLE_MOD. That's what the game does. Most body modifications through SET_VEHICLE_MOD will not take effect until this is set to 0.
 *
 * Full list of vehicle mod kits and mods by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleModKits.json
 *
 * Hash: 0x1F2AA07F00B3217A | Since: 323
 */
export declare function setModKit(vehicle: number | IVehicle, modKit: number): void;
/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 *
 * Hash: 0xBFDF984E2C22B94F | Since: 323
 */
export declare function setNameDebug(vehicle: number | IVehicle, name: string): void;
/**
 * No comment provided
 *
 * Hash: 0xFBA550EA44404EE6 | Since: 323
 */
export declare function setNeedsToBeHotwired(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets the color of the neon lights of the specified vehicle.
 *
 * Hash: 0x8E0A582209A62695 | Since: 323
 */
export declare function setNeonColour(vehicle: number | IVehicle, r: number, g: number, b: number): void;
/**
 * Sets the neon lights of the specified vehicle on/off.
 *
 * Indices:
 * 0 = Left
 * 1 = Right
 * 2 = Front
 * 3 = Back
 *
 * Hash: 0x2AA720E4287BF269 | Since: 323
 */
export declare function setNeonEnabled(vehicle: number | IVehicle, index: number, toggle: boolean): void;
/**
 * Index references CVehicleModelColor
 *
 * Hash: 0xB93B2867F7B479D1 | Since: 1493
 */
export declare function setNeonIndexColour(vehicle: number | IVehicle, index: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAB04325045427AAE | Since: 323
 */
export declare function setNotStealableAmbiently(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x5E569EC46EC21CAE | Since: 323
 */
export declare function setNoExplosionDamageFromDriver(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets a vehicle's license plate text.  8 chars maximum.
 *
 * Example:
 * `Ped playerPed = PLAYER::PLAYER_PED_ID();`
 * `Vehicle veh = PED::GET_VEHICLE_PED_IS_USING(playerPed);`
 * char *plateText = "KING";
 * `VEHICLE::SET_VEHICLE_NUMBER_PLATE_TEXT(veh, plateText);`
 *
 * Hash: 0x95A88F0B409CDA47 | Since: 323
 */
export declare function setNumberPlateText(vehicle: number | IVehicle, plateText: string): void;
/**
 * Plates:
 * Blue/White - 0
 * Yellow/black - 1
 * Yellow/Blue - 2
 * Blue/White2 - 3
 * Blue/White3 - 4
 * Yankton - 5
 *
 * Hash: 0x9088EB5A43FFB0A1 | Since: 323
 */
export declare function setNumberPlateTextIndex(vehicle: number | IVehicle, plateIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x35BB21DE06784373 | Since: 463
 */
export declare function setOccupantsTakeExplosiveDamage(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets a vehicle on the ground on all wheels.  Returns whether or not the operation was successful.
 *
 * sfink: This has an additional param(Vehicle vehicle, float p1) which is always set to 5.0f in the b944 scripts.
 *
 * Hash: 0x49733E92263139D1 | Since: 323
 */
export declare function setOnGroundProperly(vehicle: number | IVehicle): boolean;
/**
 * Tested on the player's current vehicle. Unless you kill the driver, the vehicle doesn't loose control, however, if enabled, explodeOnImpact is still active. The moment you crash, boom.
 *
 * Hash: 0xF19D095E42D430CC | Since: 323
 */
export declare function setOutOfControl(vehicle: number | IVehicle, killDriver: boolean, explodeOnImpact: boolean): void;
/**
 * 1000 is max health
 * Begins leaking gas at around 650 health
 * -999.90002441406 appears to be minimum health, although nothing special occurs
 *
 * Hash: 0x70DB57649FA8D0D8 | Since: 323
 */
export declare function setPetrolTankHealth(vehicle: number | IVehicle, health: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5AFEEDD9BB2899D7 | Since: 323
 */
export declare function setProvidesCover(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xCF9159024555488C | Since: 944
 */
export declare function setReadyForCleanup(): void;
/**
 * Reduces grip significantly so it's hard to go anywhere.
 *
 * Hash: 0x222FF6A823D122E2 | Since: 323
 */
export declare function setReduceGrip(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * val is 0-3
 * Often used in conjunction with: SET_VEHICLE_REDUCE_GRIP
 *
 * Hash: 0x6DEE944E1EE90CFB | Since: 1604
 */
export declare function setReduceGripLevel(vehicle: number | IVehicle, val: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC4B3347BD68BD609 | Since: 573
 */
export declare function setRemoveAggressiveCarjackMission(): void;
/**
 * No comment provided
 *
 * Hash: 0x2311DD7159F00582 | Since: 323
 */
export declare function setRespectsLocksWhenHasDriver(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x09606148B6C71DEF | Since: 323
 */
export declare function setRudderBroken(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Only works during nighttime.
 *
 * Hash: 0x14E85C5EE7A4D542 | Since: 323
 */
export declare function setSearchlight(heli: number | IVehicle, toggle: boolean, canBeUsedByAI: boolean): void;
/**
 * Commands the driver of an armed vehicle (p0) to shoot its weapon at a target (p1). p3, p4 and p5 are the coordinates of the target. Example:
 *
 * `WEAPON::SET_CURRENT_PED_VEHICLE_WEAPON(pilot,MISC::GET_HASH_KEY("VEHICLE_WEAPON_PLANE_ROCKET"));                        VEHICLE::SET_VEHICLE_SHOOT_AT_TARGET(pilot, target, targPos.x, targPos.y, targPos.z);`
 *
 * Hash: 0x74CD9A9327A282EA | Since: 323
 */
export declare function setShootAtTarget(driver: number | IPed, entity: number | IEntity, xTarget: number, yTarget: number, zTarget: number): void;
/**
 * Does nothing. It's a nullsub.
 *
 * Hash: 0x99A05839C46CE316 | Since: 1604
 */
export declare function setShuntOnStick(toggle: boolean): void;
/**
 * Activate siren on vehicle (Only works if the vehicle has a siren).
 *
 * Hash: 0xF4924635A19EB37D | Since: 323
 */
export declare function setSiren(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF051D9BFB6BA39C0 | Since: 877
 */
export declare function setSlipstreamingShouldTimeOut(toggle: boolean): void;
/**
 * Has something to do with trains. Always precedes SET_MISSION_TRAIN_AS_NO_LONGER_NEEDED.
 * May be true that it can be used with trains not sure, but not specifically for trains. Go find Xbox360 decompiled scripts and search for 'func_1333' in freemode.c it isn't used just for trains. Thanks for the info tho.
 *
 * Hash: 0x1CF38D529D7441D9 | Since: 323
 */
export declare function setStaysFrozenWhenCleanedUp(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9007A2F21DC108D4 | Since: 323
 */
export declare function setSteeringBiasScalar(): void;
/**
 * Locks the vehicle's steering to the desired angle, explained below.
 *
 * Requires to be called onTick. Steering is unlocked the moment the function stops being called on the vehicle.
 *
 * Steer bias:
 * -1.0 = full right
 * 0.0 = centered steering
 * 1.0 = full left
 *
 * Hash: 0x42A8EC77D5150CBE | Since: 323
 */
export declare function setSteerBias(vehicle: number | IVehicle, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDCE97BDF8A0EABC8 | Since: 1103
 */
export declare function setSteerForBuildings(vehicle: number | IVehicle): void;
/**
 * sfink: sets bit in vehicle's structure, used by maintransition, fm_mission_controller, mission_race and a couple of other scripts. see dissassembly:
 * CVehicle *__fastcall sub_140CDAA10(signed int a1, char a2)
 * {
 * CVehicle *result; // rax@1
 *
 * result = EntityAsCVehicle(a1);
 * if ( result )
 * {
 * result->field_886 &= 0xEFu;
 * result->field_886 |= 16 * (a2 & 1);
 * }
 * return result;
 * }
 *
 * Hash: 0x6EBFB22D646FFC18 | Since: 323
 */
export declare function setStopInstantlyWhenPlayerInactive(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * If set to true, vehicle will not take crash damage, but is still susceptible to damage from bullets and explosives
 *
 * Hash: 0x3E8C8727991A8A0B | Since: 323
 */
export declare function setStrong(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x6CB5B84B78AC55FE | Since: 3717
 */
export declare function setTailBroken(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5815BD2763178DF4 | Since: 2802
 */
export declare function setTailLights(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x737E398138550FFF | Since: 944
 */
export declare function setTankStationary(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x56B94C6D7127DFBA | Since: 323
 */
export declare function setTankTurretPosition(vehicle: number | IVehicle, position: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2E0A74E1002380B1 | Since: 323
 */
export declare function setTimedExplosion(vehicle: number | IVehicle, ped: number | IPed, toggle: boolean): void;
/**
 * Sets how much the crane on the tow truck is raised, where 0.0 is fully lowered and 1.0 is fully raised.
 *
 * Hash: 0xFE54B92A344583CA | Since: 323
 */
export declare function setTowTruckArmPosition(vehicle: number | IVehicle, position: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1093408B4B9D1146 | Since: 323
 */
export declare function setTurretSpeedThisFrame(vehicle: number | IVehicle, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0581730AB9380412 | Since: 1103
 */
export declare function setTurretTarget(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * Allows you to toggle bulletproof tires.
 *
 * Hash: 0xEB9DC3C7D8596C46 | Since: 323
 */
export declare function setTyresCanBurst(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * `"To burst tyres VEHICLE::SET_VEHICLE_TYRE_BURST(vehicle, 0, true, 1000.0)`
 * to burst all tyres type it 8 times where p1 = 0 to 7.
 *
 * p3 seems to be how much damage it has taken. 0 doesn't deflate them, 1000 completely deflates them.
 *
 * '0 = wheel_lf / bike, plane or jet front
 * '1 = wheel_rf
 * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
 * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
 * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
 * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
 * '45 = 6 wheels trailer mid wheel left
 * '47 = 6 wheels trailer mid wheel right
 *
 * Hash: 0xEC6A202EE4960385 | Since: 323
 */
export declare function setTyreBurst(vehicle: number | IVehicle, index: number, onRim: boolean): void;
/**
 * tyreIndex = 0 to 4 on normal vehicles
 *
 * '0 = wheel_lf / bike, plane or jet front
 * '1 = wheel_rf
 * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
 * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
 * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
 * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
 * '45 = 6 wheels trailer mid wheel left
 * '47 = 6 wheels trailer mid wheel right
 *
 * Hash: 0x6E13FC662B882D1D | Since: 323
 */
export declare function setTyreFixed(vehicle: number | IVehicle, tyreIndex: number): void;
/**
 * Sets the tire smoke's color of this vehicle.
 *
 * vehicle: The vehicle that is the target of this method.
 * r: The red level in the RGB color code.
 * g: The green level in the RGB color code.
 * b: The blue level in the RGB color code.
 *
 * Note: setting r,g,b to 0 will give the car the "Patriot" tire smoke.
 *
 * Hash: 0xB5BA80F839791C0F | Since: 323
 */
export declare function setTyreSmokeColor(vehicle: number | IVehicle, r: number, g: number, b: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8ABA6AF54B942B95 | Since: 323
 */
export declare function setUndriveable(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE05DD0E9707003A3 | Since: 323
 */
export declare function setUsedForPilotSchool(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * vehicle must be a plane
 *
 * Hash: 0xCAC66558B944DA67 | Since: 323
 */
export declare function setUsesLargeRearRamp(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBB2333BB87DDD87F | Since: 757
 */
export declare function setUsesMpPlayerDamageMultiplier(): void;
/**
 * No comment provided
 *
 * Hash: 0x1D97D1E3A70A649F | Since: 323
 */
export declare function setUseAlternateHandling(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Used for blazer5. Changes the quadbike-jetski transformation input from raise/lower convertible roof (hold H by default) to horn (press E by default.)
 *
 * Hash: 0x41290B40FA63E6DA | Since: 1011
 */
export declare function setUseBoostButtonForWheelRetract(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE023E8AC4EF7C117 | Since: 323
 */
export declare function setUseCutsceneWheelCompression(p0: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x88BC673CA9E0AE99 | Since: 323
 */
export declare function setUseMoreRestrictiveSpawnChecks(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xC45C27EF50F36ADC | Since: 323
 */
export declare function setUsePlayerLightSettings(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x86B4B6212CB8B627 | Since: 1011
 */
export declare function setWeaponCanTargetObjects(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x45A561A9421AB6AD | Since: 944
 */
export declare function setWeaponDamageScale(vehicle: number | IVehicle, multiplier: number): boolean;
/**
 * Set vehicle's primary mounted weapon 2 ammo. For example, use it on APC.
 * For example, you can "remove" any vehicle weapon from any vehicle.
 * ammoAmount -1 = infinite ammo (default value for any spawned vehicle tho)
 *
 * Hash: 0x44CD1F493DB2A0A6 | Since: 944
 */
export declare function setWeaponRestrictedAmmo(vehicle: number | IVehicle, weaponIndex: number, capacity: number): void;
/**
 * No comment provided
 *
 * Hash: 0x29B18B4FD460CA8F | Since: 323
 */
export declare function setWheelsCanBreak(vehicle: number | IVehicle, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xA37B9A517B133349 | Since: 323
 */
export declare function setWheelsCanBreakOffWhenBlowUp(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * 0: Sport
 * 1: Muscle
 * 2: Lowrider
 * 3: SUV
 * 4: Offroad
 * 5: Tuner
 * 6: Bike Wheels
 * 7: High End
 * 8: Benny's Originals
 * 9: Benny's Bespoke
 * 10: Racing
 * 11: Street
 * 12: Track
 *
 * Hash: 0x487EB21CC7295BA1 | Since: 323
 */
export declare function setWheelType(vehicle: number | IVehicle, WheelType: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBE5C1255A1830FF5 | Since: 323
 */
export declare function setWillForceOtherVehiclesToStop(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x2C4A1590ABF43E8B | Since: 323
 */
export declare function setWillTellOthersToHurry(vehicle: number | IVehicle): void;
/**
 * enum WindowTints
 * {
 * WINDOWTINT_NONE,
 * WINDOWTINT_PURE_BLACK,
 * WINDOWTINT_DARKSMOKE,
 * WINDOWTINT_LIGHTSMOKE,
 * WINDOWTINT_STOCK,
 * WINDOWTINT_LIMO,
 * WINDOWTINT_GREEN
 * };
 * Full list of all vehicle window tints by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
 *
 * Hash: 0x57C51E6BAD752696 | Since: 323
 */
export declare function setWindowTint(vehicle: number | IVehicle, tint: number): void;
/**
 * `color`: is the paint index for the vehicle.
 * Paint index goes from 0 to 12.
 * Be aware that it only works on xenon lights. Example: https://i.imgur.com/yV3cpG9.png
 * Full list of all vehicle xenon lights by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
 *
 * Hash: 0xE41033B25D003A07 | Since: 1604
 */
export declare function setXenonLightColorIndex(vehicle: number | IVehicle, colorIndex: number): void;
/**
 * Enables/disables the ability to wheelie on motorcycles.
 *
 * Hash: 0x1312DDD8385AEE4E | Since: 1103
 */
export declare function setWheelieEnabled(vehicle: number | IVehicle, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF660602546D27BA8 | Since: 944
 */
export declare function setWheelsExtendedInstantly(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x5335BE58C083E74E | Since: 1011
 */
export declare function setWheelsRetractedInstantly(vehicle: number | IVehicle): void;
/**
 * SET_TIME_POSITION_IN_RECORDING can be emulated by: desired_time - GET_TIME_POSITION_IN_RECORDING(vehicle)
 *
 * Hash: 0x9438F7AD68771A20 | Since: 323
 */
export declare function skipTimeInPlaybackRecorded(vehicle: number | IVehicle, time: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAB8E2EDA0C0A5883 | Since: 323
 */
export declare function skipToEndAndStopPlaybackRecorded(vehicle: number | IVehicle): void;
/**
 * windowIndex:
 * 0 = Front Left Window
 * 1 = Front Right Window
 * 2 = Rear Left Window
 * 3 = Rear Right Window
 * 4 = Front Windscreen
 * 5 = Rear Windscreen
 * 6 = Mid Left
 * 7 = Mid Right
 * 8 = Invalid
 *
 * Hash: 0x9E5B5E4D2CCD2259 | Since: 323
 */
export declare function smashWindow(vehicle: number | IVehicle, windowIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x374706271354CB18 | Since: 323
 */
export declare function stabiliseEntityAttachedToHeli(vehicle: number | IVehicle, entity: number | IEntity): void;
/**
 * `p3 is some flag related to 'trailers' (invokes CVehicle::GetTrailer).`
 *
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x3F878F92B3A7A071 | Since: 323
 */
export declare function startPlaybackRecorded(vehicle: number | IVehicle, recording: number, script: string): void;
/**
 * AI abides by the provided driving style (e.g., stopping at red lights or waiting behind traffic) while executing the specificed vehicle recording.
 *
 * FORCE_PLAYBACK_RECORDED_VEHICLE_UPDATE is a related native that deals with the AI physics for such recordings.
 *
 * Hash: 0x29DE5FA52D00428C | Since: 323
 */
export declare function startPlaybackRecordedUsingAi(vehicle: number | IVehicle, recording: number, script: string, speed: number, drivingStyle: number): void;
/**
 * flags requires further research, e.g., 0x4/0x8 are related to the AI driving task and 0x20 is internally set and interacts with dynamic entity components.
 *
 * time, often zero and capped at 500, is related to SET_PLAYBACK_TO_USE_AI_TRY_TO_REVERT_BACK_LATER
 *
 * Hash: 0x7D80FD645D4DA346 | Since: 323
 */
export declare function startPlaybackRecordedWithFlags(vehicle: number | IVehicle, recording: number, script: string, flags: number, time: number, drivingStyle: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB8FF7AB45305C345 | Since: 323
 */
export declare function startAlarm(vehicle: number | IVehicle): void;
/**
 * Sounds the horn for the specified vehicle.
 *
 * vehicle: The vehicle to activate the horn for.
 * mode: The hash of "NORMAL" or "HELDDOWN". Can be 0.
 * duration: The duration to sound the horn, in milliseconds.
 *
 * Note: If a player is in the vehicle, it will only sound briefly.
 *
 * Hash: 0x9C8C6504B5B63D2C | Since: 323
 */
export declare function startHorn(vehicle: number | IVehicle, duration: number, mode: number | string, forever: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0F87E938BDF29D66 | Since: 323
 */
export declare function stopAllGarageActivity(): void;
/**
 * Stops CTaskBringVehicleToHalt
 *
 * Hash: 0x7C06330BFDDA182E | Since: 1103
 */
export declare function stopBringingToHalt(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x54833611C17ABDEA | Since: 323
 */
export declare function stopPlaybackRecorded(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x83F813570FF519DE | Since: 573
 */
export declare function suppressNeonsOn(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Same call as ALLOW_BOAT_BOOM_TO_ANIMATE
 *
 * Hash: 0xC1F981A6F74F0C23 | Since: 323
 */
export declare function swingBoatBoomFreely(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets the boat boom position for the `TR3` trailer.
 * Ratio value is between `0.0` and `1.0`, where `0.0` is 90 degrees to the left of the boat, and `1.0` is just slightly to the right/back of the boat.
 * To get the current boom position ratio, use GET_BOAT_BOOM_POSITION_RATIO
 *
 * Hash: 0xF488C566413B4232 | Since: 323
 */
export declare function swingBoatBoomToRatio(vehicle: number | IVehicle, ratio: number): void;
/**
 * Toggles whether ambient trains can spawn on the specified track or not
 *
 * `trackId` is the internal id of the train track to switch.
 * `state` is whether ambient trains can spawn or not
 *
 * trackIds
 * 0 (`trains1.dat`) Main track around SA
 * 1 (`trains2.dat`) Davis Quartz Quarry branch
 * 2 (`trains3.dat`) Second track alongside live track along Roy Lewenstein Blv.
 * 3 (`trains4.dat`) Metro track circuit
 * 4 (`trains5.dat`) Branch in Mirror Park Railyard
 * 5 (`trains6.dat`) Branch in Mirror Park Railyard
 * 6 (`trains7.dat`) LS branch to Mirror Park Railyard
 * 7 (`trains8.dat`) Overground part of metro track along Forum Dr.
 * 8 (`trains9.dat`) Branch to Mirror Park Railyard
 * 9 (`trains10.dat`) Yankton train
 * 10 (`trains11.dat`) Part of metro track near mission row
 * 11 (`trains12.dat`) Yankton prologue mission train
 * Full list of all train tracks + track nodes by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/traintracks.json
 *
 * Hash: 0xFD813BB7DB977F20 | Since: 323
 */
export declare function switchTrainTrack(trackId: number, state: boolean): void;
/**
 * Toggles:
 * UNK17 - 17
 * Turbo - 18
 * UNK19 - 19
 * Tire Smoke - 20
 * UNK21 - 21
 * Xenon Headlights - 22
 *
 * Hash: 0x2A1F4F37F95BAD08 | Since: 323
 */
export declare function toggleMod(vehicle: number | IVehicle, modType: number, toggle: boolean): void;
/**
 * in script hook .net
 *
 * Vehicle v = ...;
 * Function.Call(Hash.TRACK_VEHICLE_VISIBILITY, v.Handle);
 *
 * Hash: 0x64473AEFDCF47DCA | Since: 323
 */
export declare function trackVisibility(vehicle: number | IVehicle): void;
/**
 * Transforms the `stormberg`/`toreador` to its "road vehicle" variant. If the vehicle is already in that state then the vehicle transformation audio will still play, but the vehicle won't change at all.
 *
 * Hash: 0x2A69FFD1B42BFF9E | Since: 1290
 */
export declare function transformToCar(vehicle: number | IVehicle, noAnimation: boolean): void;
/**
 * Transforms the `stormberg`/`toreador` to its "submarine" variant. If the vehicle is already in that state then the vehicle transformation audio will still play, but the vehicle won't change at all.
 *
 * Hash: 0xBE4C854FFDB6EEBE | Since: 1365
 */
export declare function transformToSubmarine(vehicle: number | IVehicle, noAnimation: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8879EE09268305D5 | Since: 323
 */
export declare function unpausePlaybackRecorded(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x756AE6E962168A04 | Since: 944
 */
export declare function setEnableNormaliseRampCarVerticalVeloctiy(): void;
/**
 * No comment provided
 *
 * Hash: 0x1BBAC99C0BC53656 | Since: 944
 */
export declare function setEnableRampCarSideImpulse(): void;
/**
 * No comment provided
 *
 * Hash: 0xF3B0E0AED097A3F5 | Since: 1103
 */
export declare function setExtenableSideTargetRatio(): number;
/**
 * No comment provided
 *
 * Hash: 0x9D30687C57BAA0BB | Since: 1011
 */
export declare function setJetWashForceEnabled(): void;
/**
 * No comment provided
 *
 * Hash: 0x0419B167EE128F33 | Since: 1103
 */
export declare function setOverrideExtenableSideRatio(): number;
/**
 * No comment provided
 *
 * Hash: 0xD3E51C0AB8C26EEE | Since: 1103
 */
export declare function setOverrideSideRatio(): number;
/**
 * Parachute models:
 * - sr_prop_specraces_para_s_01
 * - imp_prop_impexp_para_s (SecuroServ; Default)
 * Plus, many more props can be used as vehicle parachutes, like umbrellas (prop_beach_parasol_03), and unlike SET_PLAYER_PARACHUTE_MODEL_OVERRIDE, you won't get stuck mid-air when using an umbrella.
 *
 * Hash: 0x4D610C6B56031351 | Since: 1011
 */
export declare function setParachuteModelOverride(vehicle: number | IVehicle, modelHash: number | string): void;
/**
 * Variations available for the generic parachute (sr_prop_specraces_para_s_01):
 * - 0: Rainbow
 * - 1: Red
 * - 2: White, blue, yellow
 * - 3: Black, red, white
 * - 4: Red, white, blue
 * - 5: Blue
 * - 6: Black
 * - 7: Black, yellow
 *
 * Hash: 0xA74AD2439468C883 | Since: 1011
 */
export declare function setParachuteModelTintIndex(vehicle: number | IVehicle, textureVariation: number): void;
/**
 * No comment provided
 *
 * Hash: 0x28D034A93FE31BF5 | Since: 944
 */
export declare function setRampAndRammingCarsTakeDamage(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0BFFB028B3DD0A97 | Since: 944
 */
export declare function startParachuting(vehicle: number | IVehicle, active: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xEA4743874D515F13 | Since: 2944
 */
export declare function areMissileBaysDeployed(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDC05D2777F855F44 | Since: 3407
 */
export declare function enableIndividualPlanePropeller(vehicle: number | IVehicle, propeller: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1FCB07FE230B6639 | Since: 3258
 */
export declare function getIsElectric(vehicleModel: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7DFAD92A34F09C00 | Since: 3717
 */
export declare function getMissionTrainConfigIndexByName(name: string): number;
/**
 * No comment provided
 *
 * Hash: 0xBEC4B8653462450E | Since: 3095
 */
export declare function getRemainingNitrousDuration(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x613A431BCD5A22EB | Since: 3717
 */
export declare function getAllowHomingMissleLockonSynced(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x56185A25D45A0DCD | Since: 3095
 */
export declare function getCurrentDriveGear(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xF9DDA40BC293A61E | Since: 3095
 */
export declare function getCurrentRevRatio(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xFD8CE53356B5D745 | Since: 3095
 */
export declare function getDesiredDriveGear(vehicle: number | IVehicle): number;
/**
 * Returns the vehicle's drivetrain type.
 *
 * enum eVehicleDrivetrainType
 * {
 * VehicleDrivetrainType_INVALID,
 * VehicleDrivetrainType_FWD,
 * VehicleDrivetrainType_RWD,
 * VehicleDrivetrainType_AWD
 * };
 *
 * _GET_VEHICLE_DE* - _GET_VEHICLE_DI*
 *
 * Hash: 0x1423725069EE1D14 | Since: 3258
 */
export declare function getDrivetrainType(vehicleModel: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xE728F090D538CB18 | Since: 3095
 */
export declare function getExhaustBone(vehicle: number | IVehicle, index: number): [boolean, number, boolean];
/**
 * No comment provided
 *
 * Hash: 0x24910C3D66BA770D | Since: 3095
 */
export declare function getMaxDriveGearCount(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x3EE18B00CD86C54F | Since: 3095
 */
export declare function getMaxExhaustBoneCount(): number;
/**
 * No comment provided
 *
 * Hash: 0x61F02E4E9A7A61EA | Since: 3095
 */
export declare function getModelNumDriveGears(vehicleModel: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x92D96892FC06AF22 | Since: 3095
 */
export declare function getThrottle(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x80D9D32636369C92 | Since: 2802
 */
export declare function getTrailerParentVehicle(trailer: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x6638C0F19DE692FE | Since: 3095
 */
export declare function isGen9ExclusiveModel(vehicleModel: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x71C6302CBCA6CA35 | Since: 3407
 */
export declare function isOnBoostPad(vehicle: number | IVehicle): boolean;
/**
 * _SET_ALLOW_R* - _SET_ALLOW_V*
 *
 * Hash: 0x27D27223E8EF22ED | Since: 3095
 */
export declare function setAllowCollisionWhenIn(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x48BD57D0DD17786A | Since: 3095
 */
export declare function setAttachedToTowTruckArm(towTruck: number | IVehicle, vehicle: number | IVehicle): void;
/**
 * Use the vehicle bounds (instead of viewport) when deciding if a vehicle is sufficiently above the water (waterheight.dat), bypassing wave simulation checks
 *
 * Hash: 0x85FC953F6C6CBDE1 | Since: 2802
 */
export declare function setBoundsAffectWaterProbes(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0C02468829E4AA65 | Since: 2944
 */
export declare function setDeployMissileBays(vehicle: number | IVehicle, deploy: boolean): void;
/**
 * Prevents the vehicle from exploding when taking body damage if the inflictor is an AI-controlled vehicle. Only works for planes.
 *
 * Hash: 0xB0B7DF5CB876FF5E | Since: 3407
 */
export declare function setDisableExplodeFromBodyDamageReceivedByAi(vehicle: number | IVehicle, disable: boolean): void;
/**
 * First two floats relate to rumble, the last is a threshold
 *
 * Hash: 0xDAF4C98C18AC6F06 | Since: 3095
 */
export declare function setDriftSlipAngleLimits(vehicle: number | IVehicle, durationScalar: number, amplitudeScalar: number, slipAngleLimit: number): void;
/**
 * No comment provided
 *
 * Hash: 0x559B6073DB7FFFF9 | Since: 3717
 */
export declare function setMakeTrainScanForBlockingEntities(train: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x16CFBC5E7EB32861 | Since: 3095
 */
export declare function setMinimumTimeBetweenGearShifts(vehicle: number | IVehicle, time: number): void;
/**
 * No comment provided
 *
 * Hash: 0x465EEA70AF251045 | Since: 3095
 */
export declare function setNitrousIsVisible(vehicle: number | IVehicle, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAFD262ACCA64479A | Since: 3095
 */
export declare function setOverrideTractionLossMultiplier(vehicle: number | IVehicle, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBAFB99B304BC52A7 | Since: 3407
 */
export declare function setPlaneAvoidsOthers(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1AD0F63A94E10EFF | Since: 3407
 */
export declare function setRemainingNitrousDuration(vehicle: number | IVehicle, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x337EF33DA3DDB990 | Since: 3095
 */
export declare function setTransmissionReducedGearRatio(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Does not actually return anything.
 *
 * Hash: 0x84D7FFD223CAAFFD | Since: 3407
 */
export declare function setExplosiveDamageScale(vehicle: number | IVehicle, scale: number): any;
/**
 * 0.0f = engine rev minimum
 * 1.0f = engine rev limit
 *
 * Hash: 0x5AE614ECA5FDD423 | Since: 3095
 */
export declare function setMaxLaunchEngineRevs(vehicle: number | IVehicle, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1980F68872CC2C3D | Since: 3095
 */
export declare function setUseHornButtonForNitrous(toggle: boolean): void;
