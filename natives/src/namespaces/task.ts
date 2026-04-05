import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0x45C597097DD7CB81 | Since: 323
 */
export function addCoverBlockingArea(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, blockObjects: boolean, blockVehicles: boolean, blockMap: boolean, blockPlayer: boolean): void {
    AddCoverBlockingArea(startX, startY, startZ, endX, endY, endZ, blockObjects, blockVehicles, blockMap, blockPlayer);
}

/**
 * No comment provided
 * 
 * Hash: 0xD5C12A75C7B9497F | Since: 323
 */
export function addCoverPoint(pos: Vector3, direction: number, usage: number, height: number, arc: number, isPriority: boolean): number {
    return AddCoverPoint(pos.x, pos.y, pos.z, direction, usage, height, arc, isPriority);
}

/**
 * No comment provided
 * 
 * Hash: 0x23083260DEC3A551 | Since: 323
 */
export function addPatrolRouteLink(nodeId1: number, nodeId2: number): void {
    AddPatrolRouteLink(nodeId1, nodeId2);
}

/**
 * Example:
 * `TASK::ADD_PATROL_ROUTE_NODE(2, "WORLD_HUMAN_GUARD_STAND", -193.4915, -2378.864990234375, 10.9719, -193.4915, -2378.864990234375, 10.9719, 3000);`
 * 
 * p0 is between 0 and 4 in the scripts.
 * 
 * p1 is "WORLD_HUMAN_GUARD_STAND" or "StandGuard".
 * 
 * p2, p3 and p4 is only one parameter sometimes in the scripts. Most likely a Vector3 hence p2, p3 and p4 are coordinates.
 * Examples:
 * `TASK::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_739[7\/\*3\*\/], 0.0, 0.0, 0.0, 0);`
 * 
 * `TASK::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_B0[17\/\*44\*\/]._f3, l_B0[17\/\*44\*\/]._f3, 2000);`
 * 
 * p5, p6 and p7 are for example set to: 1599.0406494140625, 2713.392578125, 44.4309.
 * 
 * `p8 is an int, often random set to for example: MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000).`
 * 
 * Hash: 0x8EDF950167586B7C | Since: 323
 */
export function addPatrolRouteNode(nodeId: number, nodeType: string, pos: Vector3, headingX: number, headingY: number, headingZ: number, duration: number): void {
    AddPatrolRouteNode(nodeId, nodeType, pos.x, pos.y, pos.z, headingX, headingY, headingZ, duration);
}

/**
 * No comment provided
 * 
 * Hash: 0x28B7B9BFDAF274AA | Since: 2545
 */
export function addScriptedCoverArea(pos: Vector3, radius: number): void {
    Citizen.invokeNative('0x28B7B9BFDAF274AA', pos.x, pos.y, pos.z, radius);
}

/**
 * x, y, z: offset in world coords from some entity.
 * 
 * Hash: 0x5CF0D8F9BBA0DD75 | Since: 323
 */
export function addVehicleSubAttackCoord(ped: number | IPed, pos: Vector3): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AddVehicleSubtaskAttackCoord(_ped, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x85F462BADC7DA47F | Since: 323
 */
export function addVehicleSubAttackPed(ped: number | IPed, target: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    AddVehicleSubtaskAttackPed(_ped, _target);
}

/**
 * No comment provided
 * 
 * Hash: 0x60F9A4393A21F741 | Since: 323
 */
export function assistedMovementIsRouteLoaded(route: string): boolean {
    return AssistedMovementIsRouteLoaded(route);
}

/**
 * No comment provided
 * 
 * Hash: 0x13945951E16EF912 | Since: 323
 */
export function assistedMovementOverrideLoadDistanceThisFrame(dist: number): void {
    AssistedMovementOverrideLoadDistanceThisFrame(dist);
}

/**
 * No comment provided
 * 
 * Hash: 0x3548536485DD792B | Since: 323
 */
export function assistedMovementRemoveRoute(route: string): void {
    AssistedMovementRemoveRoute(route);
}

/**
 * Routes: "1_FIBStairs", "2_FIBStairs", "3_FIBStairs", "4_FIBStairs", "5_FIBStairs", "5_TowardsFire", "6a_FIBStairs", "7_FIBStairs", "8_FIBStairs", "Aprtmnt_1", "AssAfterLift", "ATM_1", "coroner2", "coroner_stairs", "f5_jimmy1", "fame1", "family5b", "family5c", "Family5d", "family5d", "FIB_Glass1", "FIB_Glass2", "FIB_Glass3", "finaBroute1A", "finalb1st", "finalB1sta", "finalbround", "finalbroute2", "Hairdresser1", "jan_foyet_ft_door", "Jo_3", "Lemar1", "Lemar2", "mansion_1", "Mansion_1", "pols_1", "pols_2", "pols_3", "pols_4", "pols_5", "pols_6", "pols_7", "pols_8", "Pro_S1", "Pro_S1a", "Pro_S2", "Towards_case", "trev_steps", "tunrs1", "tunrs2", "tunrs3", "Wave01457s"
 * 
 * Hash: 0x817268968605947A | Since: 323
 */
export function assistedMovementRequestRoute(route: string): void {
    AssistedMovementRequestRoute(route);
}

/**
 * No comment provided
 * 
 * Hash: 0xD5002D78B7162E1B | Since: 323
 */
export function assistedMovementSetRouteProperties(route: string, props: number): void {
    AssistedMovementSetRouteProperties(route, props);
}

/**
 * No comment provided
 * 
 * Hash: 0x6100B3CEFD43452E | Since: 2189
 */
export function clearDefaultPrimary(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x6100B3CEFD43452E', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xC35B5CDB2824CF69 | Since: 323
 */
export function clearDrivebyUnderneathDrivingTask(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearDrivebyTaskUnderneathDrivingTask(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6DC48E56BE1243A | Since: 3407
 */
export function clearPedScriptIfRunningThreatResponseNonTempTask(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xF6DC48E56BE1243A', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x176CECF6F920D707 | Since: 323
 */
export function clearPedSecondary(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedSecondaryTask(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xE1EF3C1216AFF2CD | Since: 323
 */
export function clearPeds(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedTasks(_ped);
}

/**
 * Immediately stops the pedestrian from whatever it's doing. They stop fighting, animations, etc. they forget what they were doing.
 * 
 * Hash: 0xAAA34F8A7CB32098 | Since: 323
 */
export function clearPedsImmediately(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedTasksImmediately(_ped);
}

/**
 * This native is very useful when switching the player to a ped inside a vehicle that has a task assigned prior to the player switch.
 * It is necessary to clear the ped's tasks AND call this native with the vehicle the player is switching into in order to allow the player to control the vehicle after the player switches.
 * 
 * Hash: 0xDBBC7A2432524127 | Since: 1290
 */
export function clearPrimaryVehicle(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ClearVehicleTasks(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3841422E9C488D8C | Since: 323
 */
export function clearSequence(): number {
    return ClearSequenceTask();
}

/**
 * No comment provided
 * 
 * Hash: 0x53DDC75BC3AC0A90 | Since: 1290
 */
export function clearVehicleCrash(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x53DDC75BC3AC0A90', _vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB043ECA801B8CBC1 | Since: 323
 */
export function closePatrolRoute(): void {
    ClosePatrolRoute();
}

/**
 * No comment provided
 * 
 * Hash: 0x39E72BC99E6360CB | Since: 323
 */
export function closeSequence(taskSequenceId: number): void {
    CloseSequenceTask(taskSequenceId);
}

/**
 * Forces the ped to use the mounted weapon.
 * Returns false if task is not possible.
 * 
 * Hash: 0xDCFE42068FE0135A | Since: 323
 */
export function controlMountedWeapon(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return ControlMountedWeapon(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xAF8A443CCC8018DC | Since: 323
 */
export function createPatrolRoute(): void {
    CreatePatrolRoute();
}

/**
 * From the b617d scripts:
 * 
 * `TASK::DELETE_PATROL_ROUTE("miss_merc0");`
 * `TASK::DELETE_PATROL_ROUTE("miss_merc1");`
 * `TASK::DELETE_PATROL_ROUTE("miss_merc2");`
 * `TASK::DELETE_PATROL_ROUTE("miss_dock");`
 * 
 * Hash: 0x7767DD9D65E91319 | Since: 323
 */
export function deletePatrolRoute(patrolRoute: string): void {
    DeletePatrolRoute(patrolRoute);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A59271FFADD33C1 | Since: 323
 */
export function doesScenarioExistInArea(pos: Vector3, radius: number, mustBeFree: boolean): boolean {
    return DoesScenarioExistInArea(pos.x, pos.y, pos.z, radius, mustBeFree);
}

/**
 * Full list of scenario groups used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenarioGroupNames.json
 * Occurrences in the b617d scripts:
 * 
 * "ARMY_GUARD",
 * "ARMY_HELI",
 * "Cinema_Downtown",
 * "Cinema_Morningwood",
 * "Cinema_Textile",
 * "City_Banks",
 * "Countryside_Banks",
 * "DEALERSHIP",
 * "GRAPESEED_PLANES",
 * "KORTZ_SECURITY",
 * "LOST_BIKERS",
 * "LSA_Planes",
 * "LSA_Planes",
 * "MP_POLICE",
 * "Observatory_Bikers",
 * "POLICE_POUND1",
 * "POLICE_POUND2",
 * "POLICE_POUND3",
 * "POLICE_POUND4",
 * "POLICE_POUND5"
 * "QUARRY",
 * "SANDY_PLANES",
 * "SCRAP_SECURITY",
 * "SEW_MACHINE",
 * "SOLOMON_GATE",
 * "Triathlon_1_Start",
 * "Triathlon_2_Start",
 * "Triathlon_3_Start"
 * 
 * Sometimes used with IS_SCENARIO_GROUP_ENABLED:
 * `if (TASK::DOES_SCENARIO_GROUP_EXIST("Observatory_Bikers") && (!TASK::IS_SCENARIO_GROUP_ENABLED("Observatory_Bikers"))) {`
 * `else if (TASK::IS_SCENARIO_GROUP_ENABLED("BLIMP")) {`
 * 
 * 
 * Hash: 0xF9034C136C9E00D3 | Since: 323
 */
export function doesScenarioGroupExist(scenarioGroup: string): boolean {
    return DoesScenarioGroupExist(scenarioGroup);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A9D0C2A3BBC86C1 | Since: 323
 */
export function doesScenarioOfTypeExistInArea(pos: Vector3, scenarioName: string, radius: number, mustBeFree: boolean): boolean {
    return DoesScenarioOfTypeExistInArea(pos.x, pos.y, pos.z, scenarioName, radius, mustBeFree);
}

/**
 * Checks if there is a cover point at position
 * 
 * Hash: 0xA98B8E3C088E5A31 | Since: 323
 */
export function doesScriptedCoverPointExistAtCoords(pos: Vector3): boolean {
    return DoesScriptedCoverPointExistAtCoords(pos.x, pos.y, pos.z);
}

/**
 * https://alloc8or.re/gta5/doc/enums/eVehicleMissionType.txt
 * 
 * Hash: 0x534AEBA6E5ED4CAB | Since: 323
 */
export function getActiveVehicleMissionType(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetActiveVehicleMissionType(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A8CADC7D37AACC5 | Since: 323
 */
export function getClipSetForScriptedGun(gunTaskType: number): string {
    return GetClipSetForScriptedGunTask(gunTaskType);
}

/**
 * Task index enum: https://alloc8or.re/gta5/doc/enums/eTaskTypeIndex.txt
 * 
 * Hash: 0xB0760331C7AA4155 | Since: 323
 */
export function getIsActive(ped: number | IPed, taskIndex: number): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetIsTaskActive(_ped, taskIndex);
}

/**
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * 
 * Hash: 0xCB4E8BE8A0063C5D | Since: 323
 */
export function getIsWaypointRecordingLoaded(name: string): boolean {
    return GetIsWaypointRecordingLoaded(name);
}

/**
 * Looks like the last parameter returns true if the path has been calculated, while the first returns the remaining distance to the end of the path.
 * Return value of native is the same as GET_NAVMESH_ROUTE_RESULT
 * Looks like the native returns an int for the path's state:
 * 1 - ???
 * 2 - ???
 * 3 - Finished Generating
 * 
 * Hash: 0xC6F5C0BCDC74D62D | Since: 323
 */
export function getNavmeshRouteDistanceRemaining(ped: number | IPed): [number, number, boolean] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetNavmeshRouteDistanceRemaining(_ped);
}

/**
 * See GET_NAVMESH_ROUTE_DISTANCE_REMAINING for more details.
 * 
 * Hash: 0x632E831F382A0FA8 | Since: 323
 */
export function getNavmeshRouteResult(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetNavmeshRouteResult(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x52F734CEBE20DFBA | Since: 2545
 */
export function getPatrolInfo(ped: number | IPed): [boolean, number, number] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x52F734CEBE20DFBA', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x8517D4A6CA8513ED | Since: 323
 */
export function getPedDesiredMoveBlendRatio(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDesiredMoveBlendRatio(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xE6A877C64CAF1BC5 | Since: 323
 */
export function getPedWaypointDistance(): number {
    return GetPedWaypointDistance(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2720AAA75001E094 | Since: 323
 */
export function getPedWaypointProgress(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedWaypointProgress(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x47619ABE8B268C60 | Since: 323
 */
export function getPhoneGestureAnimCurrentTime(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPhoneGestureAnimCurrentTime(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x1EE0F68A7C25DEC6 | Since: 323
 */
export function getPhoneGestureAnimTotalTime(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPhoneGestureAnimTotalTime(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x594A1028FC2A3E85 | Since: 323
 */
export function getScriptedCoverPointCoords(coverpoint: number): Vector3 {
    return new Vector3(GetScriptedCoverPointCoords(coverpoint));
}

/**
 * Gets the status of a script-assigned task.
 * taskHash: https://alloc8or.re/gta5/doc/enums/eScriptTaskHash.txt
 * 
 * Hash: 0x77F1BEB8863288D5 | Since: 323
 */
export function getScriptStatus(ped: number | IPed, taskHash: number | string): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof taskHash === 'string') taskHash = GetHashKey(taskHash)
    return GetScriptTaskStatus(_ped, taskHash);
}

/**
 * returned values:
 * 0 to 7 = task that's currently in progress, 0 meaning the first one.
 * -1 no task sequence in progress.
 * 
 * Hash: 0x00A9010CFE1E3533 | Since: 323
 */
export function getSequenceProgress(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetSequenceProgress(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xB4F47213DF45A64C | Since: 323
 */
export function getMoveNetworkEvent(ped: number | IPed, eventName: string): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTaskMoveNetworkEvent(_ped, eventName);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7FFBA498E4AAF67 | Since: 323
 */
export function getMoveNetworkSignalBool(ped: number | IPed, signalName: string): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTaskMoveNetworkSignalBool(_ped, signalName);
}

/**
 * No comment provided
 * 
 * Hash: 0x44AB0B3AFECCE242 | Since: 1493
 */
export function getMoveNetworkSignalFloat(ped: number | IPed, signalName: string): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTaskMoveNetworkSignalFloat(_ped, signalName);
}

/**
 * No comment provided
 * 
 * Hash: 0x717E4D1F2048376D | Since: 323
 */
export function getMoveNetworkState(ped: number | IPed): string {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTaskMoveNetworkState(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D252648778160DF | Since: 1868
 */
export function getRappelDownWallState(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x9D252648778160DF', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x9824CFF8FC66E159 | Since: 323
 */
export function getVehicleWaypointProgress(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWaypointProgress(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x416B62AC8B9E5BBD | Since: 323
 */
export function getVehicleWaypointTargetPoint(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWaypointTargetPoint(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA5B769058763E497 | Since: 323
 */
export function getWaypointDistanceAlongRoute(name: string, point: number): number {
    return GetWaypointDistanceAlongRoute(name, point);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E38E28A1D80DDF6 | Since: 323
 */
export function isControlledVehicleUnableToGetToRoad(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x3E38E28A1D80DDF6', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x8785E6E40C7A8818 | Since: 323
 */
export function isDrivebyUnderneathDrivingTask(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsDrivebyTaskUnderneathDrivingTask(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xA320EF046186FA3B | Since: 323
 */
export function isMountedWeaponUnderneathDrivingTask(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsMountedWeaponTaskUnderneathDrivingTask(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xD4D8636C0199A939 | Since: 323
 */
export function isMoveBlendRatioRunning(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsMoveBlendRatioRunning(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x24A2AD74FA9814E2 | Since: 323
 */
export function isMoveBlendRatioSprinting(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsMoveBlendRatioSprinting(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x349CE7B56DAFD95C | Since: 323
 */
export function isMoveBlendRatioStill(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsMoveBlendRatioStill(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xF133BBBE91E1691F | Since: 323
 */
export function isMoveBlendRatioWalking(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsMoveBlendRatioWalking(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA135F9482C82CC3 | Since: 323
 */
export function isPedActiveInScenario(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedActiveInScenario(_ped);
}

/**
 * This function is hard-coded to always return 0.
 * 
 * Hash: 0x90A09F3A45FED688 | Since: 323
 */
export function isPedBeingArrested(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedBeingArrested(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x74E559B3BC910685 | Since: 323
 */
export function isPedCuffed(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedCuffed(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A74E1D5F2F00EEC | Since: 323
 */
export function isPedGettingUp(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedGettingUp(_ped);
}

/**
 * This native checks if a ped is on the ground, in pain from a (gunshot) wound.
 * Returns `true` if the ped is in writhe, `false` otherwise.
 * 
 * Hash: 0xDEB6D52126E7D640 | Since: 323
 */
export function isPedInWrithe(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInWrithe(_ped);
}

/**
 * Used only once (am_mp_property_int)
 * 
 * ped was PLAYER_PED_ID()
 * 
 * Related to CTaskAmbientClips.
 * 
 * Hash: 0x621C6E4729388E41 | Since: 323
 */
export function isPedPlayingBaseClipInScenario(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedPlayingBaseClipInScenario(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xC5286FFC176F28A2 | Since: 323
 */
export function isPedRunning(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRunning(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x3DC52677769B4AE0 | Since: 323
 */
export function isPedRunningArrest(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRunningArrestTask(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x57E457CD2C0FC168 | Since: 323
 */
export function isPedSprinting(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedSprinting(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xAC29253EEF8F0180 | Since: 323
 */
export function isPedStill(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedStill(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xE45B7F222DE47E09 | Since: 323
 */
export function isPedStrafing(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedStrafing(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE4C184B2B9B071A | Since: 323
 */
export function isPedWalking(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedWalking(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xB8EBB1E9D3588C10 | Since: 323
 */
export function isPlayingPhoneGestureAnim(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPlayingPhoneGestureAnim(_ped);
}

/**
 * Full list of scenario groups used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenarioGroupNames.json
 * Occurrences in the b617d scripts:
 * 
 * "ARMY_GUARD",
 * "ARMY_HELI",
 * "BLIMP",
 * "Cinema_Downtown",
 * "Cinema_Morningwood",
 * "Cinema_Textile",
 * "City_Banks",
 * "Countryside_Banks",
 * "DEALERSHIP",
 * "KORTZ_SECURITY",
 * "LSA_Planes",
 * "MP_POLICE",
 * "Observatory_Bikers",
 * "POLICE_POUND1",
 * "POLICE_POUND2",
 * "POLICE_POUND3",
 * "POLICE_POUND4",
 * "POLICE_POUND5",
 * "Rampage1",
 * "SANDY_PLANES",
 * "SCRAP_SECURITY",
 * "SEW_MACHINE",
 * "SOLOMON_GATE"
 * 
 * Sometimes used with DOES_SCENARIO_GROUP_EXIST:
 * `if (TASK::DOES_SCENARIO_GROUP_EXIST("Observatory_Bikers") &&   (!TASK::IS_SCENARIO_GROUP_ENABLED("Observatory_Bikers"))) {`
 * `else if (TASK::IS_SCENARIO_GROUP_ENABLED("BLIMP")) {`
 * 
 * Hash: 0x367A09DED4E05B99 | Since: 323
 */
export function isScenarioGroupEnabled(scenarioGroup: string): boolean {
    return IsScenarioGroupEnabled(scenarioGroup);
}

/**
 * No comment provided
 * 
 * Hash: 0x788756D73AC2E07C | Since: 323
 */
export function isScenarioOccupied(pos: Vector3, maxRange: number, onlyUsersActuallyAtScenario: boolean): boolean {
    return IsScenarioOccupied(pos.x, pos.y, pos.z, maxRange, onlyUsersActuallyAtScenario);
}

/**
 * Full list of scenario types used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
 * Occurrences in the b617d scripts:
 * "PROP_HUMAN_SEAT_CHAIR",
 * "WORLD_HUMAN_DRINKING",
 * "WORLD_HUMAN_HANG_OUT_STREET",
 * "WORLD_HUMAN_SMOKING",
 * "WORLD_MOUNTAIN_LION_WANDER",
 * "WORLD_HUMAN_DRINKING"
 * 
 * `Sometimes used together with MISC::IS_STRING_NULL_OR_EMPTY in the scripts.`
 * 
 * `scenarioType could be the same as scenarioName, used in for example TASK::TASK_START_SCENARIO_AT_POSITION.`
 * 
 * 
 * Hash: 0x3A815DB3EA088722 | Since: 323
 */
export function isScenarioTypeEnabled(scenarioType: string): boolean {
    return IsScenarioTypeEnabled(scenarioType);
}

/**
 * No comment provided
 * 
 * Hash: 0x921CE12C489C4C41 | Since: 323
 */
export function isMoveNetworkActive(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsTaskMoveNetworkActive(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x30ED88D5E0C56A37 | Since: 323
 */
export function isMoveNetworkReadyForTransition(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsTaskMoveNetworkReadyForTransition(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xE03B3F2D3DC59B64 | Since: 323
 */
export function isWaypointPlaybackGoingOnForPed(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsWaypointPlaybackGoingOnForPed(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xF5134943EA29868C | Since: 323
 */
export function isWaypointPlaybackGoingOnForVehicle(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsWaypointPlaybackGoingOnForVehicle(_vehicle);
}

/**
 * patrolRoutes found in the b617d scripts:
 * "miss_Ass0",
 * "miss_Ass1",
 * "miss_Ass2",
 * "miss_Ass3",
 * "miss_Ass4",
 * "miss_Ass5",
 * "miss_Ass6",
 * "MISS_PATROL_6",
 * "MISS_PATROL_7",
 * "MISS_PATROL_8",
 * "MISS_PATROL_9",
 * "miss_Tower_01",
 * "miss_Tower_02",
 * "miss_Tower_03",
 * "miss_Tower_04",
 * "miss_Tower_05",
 * "miss_Tower_06",
 * "miss_Tower_07",
 * "miss_Tower_08",
 * "miss_Tower_10"
 * 
 * Hash: 0xA36BFB5EE89F3D82 | Since: 323
 */
export function openPatrolRoute(patrolRoute: string): void {
    OpenPatrolRoute(patrolRoute);
}

/**
 * No comment provided
 * 
 * Hash: 0xE8854A4326B9E12B | Since: 323
 */
export function openSequence(): number {
    return OpenSequenceTask();
}

/**
 * No comment provided
 * 
 * Hash: 0x295E3CCEC879CCD7 | Since: 323
 */
export function pedHasUseScenario(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return PedHasUseScenarioTask(_ped);
}

/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0x748040460F8DF5DC | Since: 323
 */
export function playAnimOnRunningScenario(ped: number | IPed, animDict: string, animName: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayAnimOnRunningScenario(_ped, animDict, animName);
}

/**
 * No comment provided
 * 
 * Hash: 0x77A1EEC547E7FCF1 | Since: 323
 */
export function playEntityScriptedAnim(entity: number | IEntity, blendInDelta: number, blendOutDelta: number): [number, number, number] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return PlayEntityScriptedAnim(_entity, blendInDelta, blendOutDelta);
}

/**
 * No comment provided
 * 
 * Hash: 0xDB6708C0B46F56D8 | Since: 323
 */
export function removeAllCoverBlockingAreas(): void {
    RemoveAllCoverBlockingAreas();
}

/**
 * No comment provided
 * 
 * Hash: 0xFA83CA6776038F64 | Since: 1493
 */
export function removeCoverBlockingAreasAtPosition(pos: Vector3): void {
    Citizen.invokeNative('0xFA83CA6776038F64', pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xAE287C923D891715 | Since: 323
 */
export function removeCoverPoint(coverpoint: number): void {
    RemoveCoverPoint(coverpoint);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F351CF1C6475734 | Since: 505
 */
export function removeSpecificCoverBlockingAreas(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, blockObjects: boolean, blockVehicles: boolean, blockMap: boolean, blockPlayer: boolean): void {
    Citizen.invokeNative('0x1F351CF1C6475734', startX, startY, startZ, endX, endY, endZ, blockObjects, blockVehicles, blockMap, blockPlayer);
}

/**
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * 
 * Hash: 0xFF1B8B4AA1C25DC8 | Since: 323
 */
export function removeWaypointRecording(name: string): void {
    RemoveWaypointRecording(name);
}

/**
 * No comment provided
 * 
 * Hash: 0xD01015C7316AE176 | Since: 323
 */
export function requestMoveNetworkStateTransition(ped: number | IPed, name: string): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return RequestTaskMoveNetworkStateTransition(_ped, name);
}

/**
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * For a full list of the points, see here: goo.gl/wIH0vn
 * 
 * Max number of loaded recordings is 32.
 * 
 * Hash: 0x9EEFB62EB27B5792 | Since: 323
 */
export function requestWaypointRecording(name: string): void {
    RequestWaypointRecording(name);
}

/**
 * No comment provided
 * 
 * Hash: 0x4202BBCB8684563D | Since: 323
 */
export function resetExclusiveScenarioGroup(): void {
    ResetExclusiveScenarioGroup();
}

/**
 * No comment provided
 * 
 * Hash: 0xDD902D0349AFAD3A | Since: 323
 */
export function resetScenarioGroupsEnabled(): void {
    ResetScenarioGroupsEnabled();
}

/**
 * No comment provided
 * 
 * Hash: 0x0D40EE2A7F2B2D6D | Since: 323
 */
export function resetScenarioTypesEnabled(): void {
    ResetScenarioTypesEnabled();
}

/**
 * No comment provided
 * 
 * Hash: 0x70033C3CC29A1FF4 | Since: 323
 */
export function setAnimLooped(entity: number | IEntity, looped: boolean, priority: number, secondary: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetAnimLooped(_entity, looped, priority, secondary);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDF3CB5A0A4C0B49 | Since: 2372
 */
export function setAnimPhase(entity: number | IEntity, phase: number, priority: number, secondary: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetAnimPhase(_entity, phase, priority, secondary);
}

/**
 * No comment provided
 * 
 * Hash: 0x032D49C5E359C847 | Since: 323
 */
export function setAnimRate(entity: number | IEntity, rate: number, priority: number, secondary: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetAnimRate(_entity, rate, priority, secondary);
}

/**
 * No comment provided
 * 
 * Hash: 0x207F1A47C0342F48 | Since: 323
 */
export function setAnimWeight(entity: number | IEntity, weight: number, priority: number, index: number, secondary: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetAnimWeight(_entity, weight, priority, index, secondary);
}

/**
 * For p1 & p2 (Ped, Vehicle). I could be wrong, as the only time this native is called in scripts is once and both are 0, but I assume this native will work like SET_MOUNTED_WEAPON_TARGET in which has the same exact amount of parameters and the 1st and last 3 parameters are right and the same for both natives.
 * 
 * Hash: 0xE5B302114D8162EE | Since: 323
 */
export function setDrivebyTarget(shootingPed: number | IPed, targetPed: number | IPed, targetVehicle: number | IVehicle, pos: Vector3): void {
    const _shootingPed = shootingPed instanceof IPed ? shootingPed.handle() : shootingPed;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    SetDrivebyTaskTarget(_shootingPed, _targetPed, _targetVehicle, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x5C9B84BD7D31D908 | Since: 323
 */
export function setDriveCruiseSpeed(driver: number | IPed, cruiseSpeed: number): void {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    SetDriveTaskCruiseSpeed(_driver, cruiseSpeed);
}

/**
 * This native is used to set the driving style for specific ped.
 * 
 * Driving styles id seems to be:
 * 786468
 * 262144
 * 786469
 * 
 * http://gtaforums.com/topic/822314-guide-driving-styles/
 * 
 * Hash: 0xDACE1BE37D88AF67 | Since: 323
 */
export function setDriveDrivingStyle(ped: number | IPed, drivingStyle: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetDriveTaskDrivingStyle(_ped, drivingStyle);
}

/**
 * No comment provided
 * 
 * Hash: 0x404A5AA9B9F0B746 | Since: 323
 */
export function setDriveMaxCruiseSpeed(ped: number | IPed, speed: number, updateBaseTask: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetDriveTaskMaxCruiseSpeed(_ped, speed, updateBaseTask);
}

/**
 * Full list of scenario groups used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenarioGroupNames.json
 * Groups found in the scripts used with this native:
 * 
 * "AMMUNATION",
 * "QUARRY",
 * "Triathlon_1",
 * "Triathlon_2",
 * "Triathlon_3"
 * 
 * Hash: 0x535E97E1F7FC0C6A | Since: 323
 */
export function setExclusiveScenarioGroup(scenarioGroup: string): void {
    SetExclusiveScenarioGroup(scenarioGroup);
}

/**
 * Used only once in the scripts (fm_mission_controller) like so:
 * 
 * `TASK::SET_EXPECTED_CLONE_NEXT_TASK_MOVE_NETWORK_STATE(iLocal_3160, "Cutting");`
 * 
 * Hash: 0xAB13A5565480B6D9 | Since: 323
 */
export function setExpectedCloneNextMoveNetworkState(ped: number | IPed, state: string): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xAB13A5565480B6D9', _ped, state);
}

/**
 * Needs to be looped! And yes, it does work and is not a hash collision.
 * Birds will try to reach the given height.
 * 
 * Hash: 0x6C6B148586F934F7 | Since: 323
 */
export function setGlobalMinBirdFlightHeight(height: number): void {
    SetGlobalMinBirdFlightHeight(height);
}

/**
 * Makes the ped ragdoll like when falling from a great height
 * 
 * Hash: 0x8C825BDC7741D37C | Since: 323
 */
export function setHighFall(ped: number | IPed, minTime: number, maxTime: number, entryType: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetHighFallTask(_ped, minTime, maxTime, entryType);
}

/**
 * Note: Look in decompiled scripts and the times that p1 and p2 aren't 0. They are filled with vars. If you look through out that script what other natives those vars are used in, you can tell p1 is a ped and p2 is a vehicle. Which most likely means if you want the mounted weapon to target a ped set targetVehicle to 0 or vice-versa.
 * 
 * Hash: 0xCCD892192C6D2BB9 | Since: 323
 */
export function setMountedWeaponTarget(shootingPed: number | IPed, targetPed: number | IPed, targetVehicle: number | IVehicle, pos: Vector3, taskMode: number, ignoreTargetVehDeadCheck: boolean): void {
    const _shootingPed = shootingPed instanceof IPed ? shootingPed.handle() : shootingPed;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    SetMountedWeaponTarget(_shootingPed, _targetPed, _targetVehicle, pos.x, pos.y, pos.z, taskMode, ignoreTargetVehDeadCheck);
}

/**
 * This native does absolutely nothing, just a nullsub
 * 
 * R* Comment:
 * SET_NEXT_DESIRED_MOVE_STATE - Function is deprecated - do not use anymore
 * 
 * Hash: 0xF1B9F16E89E2C93A | Since: 323
 */
export function setNextDesiredMoveState(nextMoveState: number): void {
    SetNextDesiredMoveState(nextMoveState);
}

/**
 * No comment provided
 * 
 * Hash: 0xC313379AF0FCEDA7 | Since: 323
 */
export function setParachuteTarget(ped: number | IPed, pos: Vector3): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetParachuteTaskTarget(_ped, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x0729BAC1B8C64317 | Since: 323
 */
export function setParachuteThrust(ped: number | IPed, thrust: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetParachuteTaskThrust(_ped, thrust);
}

/**
 * Appears only in fm_mission_controller and used only 3 times.
 * 
 * ped was always PLAYER_PED_ID()
 * p1 was always true
 * p2 was always true
 * 
 * Hash: 0x8FD89A6240813FD0 | Since: 323
 */
export function setPedCanPlayAmbientIdles(ped: number | IPed, blockIdleClips: boolean, removeIdleClipIfPlaying: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanPlayAmbientIdles(_ped, blockIdleClips, removeIdleClipIfPlaying);
}

/**
 * No comment provided
 * 
 * Hash: 0x1E982AC8716912C5 | Since: 323
 */
export function setPedDesiredMoveBlendRatio(ped: number | IPed, newMoveBlendRatio: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDesiredMoveBlendRatio(_ped, newMoveBlendRatio);
}

/**
 * No comment provided
 * 
 * Hash: 0x4455517B28441E60 | Since: 323
 */
export function setPedPathAvoidFire(ped: number | IPed, avoidFire: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathAvoidFire(_ped, avoidFire);
}

/**
 * No comment provided
 * 
 * Hash: 0xE361C5C71C431A4F | Since: 323
 */
export function setPedPathCanDropFromHeight(ped: number | IPed, Toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathCanDropFromHeight(_ped, Toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8E06A6FE76C9EFF4 | Since: 323
 */
export function setPedPathCanUseClimbovers(ped: number | IPed, Toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathCanUseClimbovers(_ped, Toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x77A5B103C87F476E | Since: 323
 */
export function setPedPathCanUseLadders(ped: number | IPed, Toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathCanUseLadders(_ped, Toggle);
}

/**
 * Default modifier is 1.0, minimum is 0.0 and maximum is 10.0.
 * 
 * Hash: 0x88E32DB8C1A4AA4B | Since: 323
 */
export function setPedPathClimbCostModifier(ped: number | IPed, modifier: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathClimbCostModifier(_ped, modifier);
}

/**
 * No comment provided
 * 
 * Hash: 0xF35425A4204367EC | Since: 323
 */
export function setPedPathMayEnterWater(ped: number | IPed, mayEnterWater: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathMayEnterWater(_ped, mayEnterWater);
}

/**
 * No comment provided
 * 
 * Hash: 0x38FE1EC73743793C | Since: 323
 */
export function setPedPathPreferToAvoidWater(ped: number | IPed, avoidWater: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathPreferToAvoidWater(_ped, avoidWater);
}

/**
 * No comment provided
 * 
 * Hash: 0x686ECCD99D4E61BB | Since: 3570
 */
export function setPedWaypointProgress(ped: number | IPed, progress: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x686ECCD99D4E61BB', _ped, progress);
}

/**
 * No comment provided
 * 
 * Hash: 0xED98E10B0AFCE4B4 | Since: 323
 */
export function setPedWaypointRouteOffset(ped: number | IPed, pos: Vector3): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedWaypointRouteOffset(_ped, pos.x, pos.y, pos.z);
}

/**
 * Full list of scenario groups used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenarioGroupNames.json
 * Occurrences in the b617d scripts: https://pastebin.com/Tvg2PRHU
 * 
 * Hash: 0x02C8E5B49848664E | Since: 323
 */
export function setScenarioGroupEnabled(scenarioGroup: string, enabled: boolean): void {
    SetScenarioGroupEnabled(scenarioGroup, enabled);
}

/**
 * Full list of scenario types used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
 * seems to enable/disable specific scenario-types from happening in the game world.
 * 
 * Here are some scenario types from the scripts:
 * "WORLD_MOUNTAIN_LION_REST"
 * "WORLD_MOUNTAIN_LION_WANDER"
 * "DRIVE"
 * "WORLD_VEHICLE_POLICE_BIKE"
 * "WORLD_VEHICLE_POLICE_CAR"
 * "WORLD_VEHICLE_POLICE_NEXT_TO_CAR"
 * "WORLD_VEHICLE_DRIVE_SOLO"
 * "WORLD_VEHICLE_BIKER"
 * "WORLD_VEHICLE_DRIVE_PASSENGERS"
 * "WORLD_VEHICLE_SALTON_DIRT_BIKE"
 * "WORLD_VEHICLE_BICYCLE_MOUNTAIN"
 * "PROP_HUMAN_SEAT_CHAIR"
 * "WORLD_VEHICLE_ATTRACTOR"
 * "WORLD_HUMAN_LEANING"
 * "WORLD_HUMAN_HANG_OUT_STREET"
 * "WORLD_HUMAN_DRINKING"
 * "WORLD_HUMAN_SMOKING"
 * "WORLD_HUMAN_GUARD_STAND"
 * "WORLD_HUMAN_CLIPBOARD"
 * "WORLD_HUMAN_HIKER"
 * "WORLD_VEHICLE_EMPTY"
 * "WORLD_VEHICLE_BIKE_OFF_ROAD_RACE"
 * "WORLD_HUMAN_PAPARAZZI"
 * "WORLD_VEHICLE_PARK_PERPENDICULAR_NOSE_IN"
 * "WORLD_VEHICLE_PARK_PARALLEL"
 * "WORLD_VEHICLE_CONSTRUCTION_SOLO"
 * "WORLD_VEHICLE_CONSTRUCTION_PASSENGERS"
 * "WORLD_VEHICLE_TRUCK_LOGS"
 * 
 * `scenarioType could be the same as scenarioName, used in for example TASK::TASK_START_SCENARIO_AT_POSITION.`
 * 
 * Hash: 0xEB47EC4E34FB7EE1 | Since: 323
 */
export function setScenarioTypeEnabled(scenarioType: string, toggle: boolean): void {
    SetScenarioTypeEnabled(scenarioType, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF5D1F489147CB683 | Since: 3570
 */
export function setSequencePreventMigration(taskSequenceId: number): void {
    Citizen.invokeNative('0xF5D1F489147CB683', taskSequenceId);
}

/**
 * No comment provided
 * 
 * Hash: 0x58C70CF3A41E4AE7 | Since: 323
 */
export function setSequenceToRepeat(taskSequenceId: number, repeat: boolean): void {
    SetSequenceToRepeat(taskSequenceId, repeat);
}

/**
 * No comment provided
 * 
 * Hash: 0x8423541E8B3A1589 | Since: 1493
 */
export function setMoveNetworkAnimSet(ped: number | IPed, clipSet: number | string, variableClipSet: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof clipSet === 'string') clipSet = GetHashKey(clipSet)
    if (typeof variableClipSet === 'string') variableClipSet = GetHashKey(variableClipSet)
    Citizen.invokeNative('0x8423541E8B3A1589', _ped, clipSet, variableClipSet);
}

/**
 * Doesn't actually return anything.
 * 
 * Hash: 0x0FFB3C758E8C07B9 | Since: 2060
 */
export function setMoveNetworkEnableCollisionOnNetworkCloneWhenFixed(ped: number | IPed, enable: boolean): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x0FFB3C758E8C07B9', _ped, enable);
}

/**
 * No comment provided
 * 
 * Hash: 0xB0A6CFD2C69C1088 | Since: 323
 */
export function setMoveNetworkSignalBool(ped: number | IPed, signalName: string, value: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetTaskMoveNetworkSignalBool(_ped, signalName, value);
}

/**
 * signalName - "Phase", "Wobble", "x_axis","y_axis","introphase","speed".
 * p2 - From what i can see it goes up to 1f (maybe).
 * 
 * `Example: TASK::SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT(PLAYER::PLAYER_PED_ID(), "Phase", 0.5);`
 * 
 * Hash: 0xD5BB4025AE449A4E | Since: 323
 */
export function setMoveNetworkSignalFloat(ped: number | IPed, signalName: string, value: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetTaskMoveNetworkSignalFloat(_ped, signalName, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x8634CEF2522D987B | Since: 1493
 */
export function setMoveNetworkSignalFloatLerpRate(ped: number | IPed, signalName: string, value: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x8634CEF2522D987B', _ped, signalName, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x373EF409B82697A3 | Since: 1493
 */
export function setMoveNetworkSignalLocalFloat(ped: number | IPed, signalName: string, value: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetTaskMoveNetworkSignalFloat2(_ped, signalName, value);
}

/**
 * Flag 8: Medium-aggressive boxing tactic with a bit of PIT
 * Flag 1: Aggressive ramming of suspect
 * Flag 2: Ram attempts
 * Flag 32: Stay back from suspect, no tactical contact. Convoy-like.
 * Flag 16: Ramming, seems to be slightly less aggressive than 1-2.
 * 
 * Hash: 0xCC665AAC360D31E7 | Since: 323
 */
export function setVehicleChaseBehaviorFlag(ped: number | IPed, flag: number, _set: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetTaskVehicleChaseBehaviorFlag(_ped, flag, _set);
}

/**
 * No comment provided
 * 
 * Hash: 0x639B642FACBE4EDD | Since: 323
 */
export function setVehicleChaseIdealPursuitDistance(ped: number | IPed, distance: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetTaskVehicleChaseIdealPursuitDistance(_ped, distance);
}

/**
 * Looks like p1 may be a flag, still need to do some research, though.
 * 
 * Hash: 0xEE08C992D238C5D1 | Since: 323
 */
export function stopAnimPlayback(entity: number | IEntity, priority: number, secondary: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    StopAnimPlayback(_entity, priority, secondary);
}

/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0x97FF36A1D40EA00A | Since: 323
 */
export function stopAnim(entity: number | IEntity, animDictionary: string, animationName: string, blendDelta: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    StopAnimTask(_entity, animDictionary, animationName, blendDelta);
}

/**
 * Makes the specified ped achieve the specified heading.
 * 
 * pedHandle: The handle of the ped to assign the task to.
 * heading: The desired heading.
 * timeout: The time, in milliseconds, to allow the task to complete. If the task times out, it is cancelled, and the ped will stay at the heading it managed to reach in the time.
 * 
 * Hash: 0x93B93A37987F1F3D | Since: 323
 */
export function achieveHeading(ped: number | IPed, heading: number, timeout: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskAchieveHeading(_ped, heading, timeout);
}

/**
 * No comment provided
 * 
 * Hash: 0x19D1B791CB3670FE | Since: 877
 */
export function agitatedActionConfrontResponse(ped: number | IPed, ped2: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    TaskAgitatedAction(_ped, _ped2);
}

/**
 * No comment provided
 * 
 * Hash: 0x6671F3EEC681BDA1 | Since: 323
 */
export function aimGunAtCoord(ped: number | IPed, pos: Vector3, time: number, instantBlendToAim: boolean, playAnimIntro: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskAimGunAtCoord(_ped, pos.x, pos.y, pos.z, time, instantBlendToAim, playAnimIntro);
}

/**
 * duration: the amount of time in milliseconds to do the task.  -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 * 
 * Hash: 0x9B53BB6E8943AF53 | Since: 323
 */
export function aimGunAtEntity(ped: number | IPed, entity: number | IEntity, duration: number, instantBlendToAim: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskAimGunAtEntity(_ped, _entity, duration, instantBlendToAim);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A192BE16D373D00 | Since: 323
 */
export function aimGunScripted(ped: number | IPed, scriptTask: number | string, disableBlockingClip: boolean, instantBlendToAim: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof scriptTask === 'string') scriptTask = GetHashKey(scriptTask)
    TaskAimGunScripted(_ped, scriptTask, disableBlockingClip, instantBlendToAim);
}

/**
 * No comment provided
 * 
 * Hash: 0x8605AF0DE8B3A5AC | Since: 323
 */
export function aimGunScriptedWithTarget(ped: number | IPed, target: number | IPed, pos: Vector3, gunTaskType: number, disableBlockingClip: boolean, forceAim: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskAimGunScriptedWithTarget(_ped, _target, pos.x, pos.y, pos.z, gunTaskType, disableBlockingClip, forceAim);
}

/**
 * Example from "me_amanda1.ysc.c4":
 * `TASK::TASK_ARREST_PED(l_19F \/\* This is a Ped \*\/ , PLAYER::PLAYER_PED_ID());`
 * 
 * Example from "armenian1.ysc.c4":
 * `if (!PED::IS_PED_INJURED(l_B18[0\/\*1\*\/])) {`
 * `TASK::TASK_ARREST_PED(l_B18[0\/\*1\*\/], PLAYER::PLAYER_PED_ID());`
 * }
 * 
 * I would love to have time to experiment to see if a player Ped can arrest another Ped. Might make for a good cop mod.
 * 
 * 
 * Looks like only the player can be arrested this way. Peds react and try to arrest you if you task them, but the player charater doesn't do anything if tasked to arrest another ped.
 * 
 * Hash: 0xF3B9A78A178572B1 | Since: 323
 */
export function arrestPed(ped: number | IPed, target: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskArrestPed(_ped, _target);
}

/**
 * `You need to call PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS after TASK_BOAT_MISSION in order for the task to execute.`
 * 
 * Working example
 * `float vehicleMaxSpeed = VEHICLE::GET_VEHICLE_ESTIMATED_MAX_SPEED(ENTITY::GET_ENTITY_MODEL(pedVehicle));`
 * `TASK::TASK_BOAT_MISSION(pedDriver, pedVehicle, 0, 0, waypointCoord.x, waypointCoord.y, waypointCoord.z, 4, vehicleMaxSpeed, 786469, -1.0, 7);`
 * `PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS(pedDriver, 1);`
 * 
 * P8 appears to be driving style flag - see gtaforums.com/topic/822314-guide-driving-styles/ for documentation
 * 
 * Hash: 0x15C86013127CE63F | Since: 323
 */
export function boatMission(pedDriver: number | IPed, vehicle: number | IVehicle, targetVehicle: number | IVehicle, targetPed: number | IPed, pos: Vector3, mission: number, maxSpeed: number, drivingStyle: number, targetReached: number, boatFlags: any): void {
    const _pedDriver = pedDriver instanceof IPed ? pedDriver.handle() : pedDriver;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskBoatMission(_pedDriver, _vehicle, _targetVehicle, _targetPed, pos.x, pos.y, pos.z, mission, maxSpeed, drivingStyle, targetReached, boatFlags);
}

/**
 * p2 tend to be 16, 17 or 1
 * p3 to p7 tend to be 0.0
 * 
 * Hash: 0x8C338E0263E4FD19 | Since: 323
 */
export function chatToPed(ped: number | IPed, target: number | IPed, flags: number, goToLocationX: number, goToLocationY: number, goToLocationZ: number, headingDegs: number, idleTime: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskChatToPed(_ped, _target, flags, goToLocationX, goToLocationY, goToLocationZ, headingDegs, idleTime);
}

/**
 * No comment provided
 * 
 * Hash: 0x95A6C46A31D1917D | Since: 323
 */
export function clearDefensiveArea(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskClearDefensiveArea(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x0F804F1DB19B9689 | Since: 323
 */
export function clearLookAt(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskClearLookAt(_ped);
}

/**
 * Climbs or vaults the nearest thing.
 * usePlayerLaunchForce is unused.
 * 
 * Hash: 0x89D9FCC2435112F1 | Since: 323
 */
export function climb(ped: number | IPed, usePlayerLaunchForce: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskClimb(_ped, usePlayerLaunchForce);
}

/**
 * No comment provided
 * 
 * Hash: 0xB6C987F9285A3814 | Since: 323
 */
export function climbLadder(ped: number | IPed, fast: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskClimbLadder(_ped, fast);
}

/**
 * Despite its name, it only attacks ONE hated target. The one closest hated target.
 * 
 * p2 seems to be always 0
 * 
 * Hash: 0x7BF835BB9E2698C8 | Since: 323
 */
export function combatHatedTargetsAroundPed(ped: number | IPed, radius: number, combatFlags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCombatHatedTargetsAroundPed(_ped, radius, combatFlags);
}

/**
 * No comment provided
 * 
 * Hash: 0x2BBA30B854534A0C | Since: 323
 */
export function combatHatedTargetsAroundPedTimed(ped: number | IPed, radius: number, time: number, combatFlags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCombatHatedTargetsAroundPedTimed(_ped, radius, time, combatFlags);
}

/**
 * Despite its name, it only attacks ONE hated target. The one closest to the specified position.
 * 
 * Hash: 0x4CF5F55DAC3280A0 | Since: 323
 */
export function combatHatedTargetsInArea(ped: number | IPed, pos: Vector3, radius: number, combatFlags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCombatHatedTargetsInArea(_ped, pos.x, pos.y, pos.z, radius, combatFlags);
}

/**
 * Makes the specified ped attack the target ped.
 * p2 should be 0
 * p3 should be 16
 * 
 * Hash: 0xF166E48407BAC484 | Since: 323
 */
export function combatPed(ped: number | IPed, targetPed: number | IPed, combatFlags: number, threatResponseFlags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskCombatPed(_ped, _targetPed, combatFlags, threatResponseFlags);
}

/**
 * No comment provided
 * 
 * Hash: 0x944F30DCB7096BDE | Since: 323
 */
export function combatPedTimed(ped: number | IPed, target: number | IPed, time: number, flags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskCombatPedTimed(_ped, _target, time, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x3EB1FE9E8E908E15 | Since: 323
 */
export function cower(ped: number | IPed, duration: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCower(_ped, duration);
}

/**
 * Example:
 * 
 * `TASK::TASK_DRIVE_BY(l_467[1\/\*22\*\/], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});`
 * 
 * 
 * 
 * 
 * Needs working example. Doesn't seem to do anything.
 * 
 * I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
 * I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
 * I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
 * 
 * Hash: 0x2F8AF0E82773A171 | Since: 323
 */
export function driveBy(driverPed: number | IPed, targetPed: number | IPed, targetVehicle: number | IVehicle, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, pushUnderneathDrivingTaskIfDriving: boolean, firingPattern: number | string): void {
    const _driverPed = driverPed instanceof IPed ? driverPed.handle() : driverPed;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskDriveBy(_driverPed, _targetPed, _targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, pushUnderneathDrivingTaskIfDriving, firingPattern);
}

/**
 * speed 1.0 = walk, 2.0 = run
 * p5 1 = normal, 3 = teleport to vehicle, 16 = teleport directly into vehicle
 * p6 is always 0
 * 
 * Usage of seat
 * -1 = driver
 * 0 = passenger
 * 1 = left back seat
 * 2 = right back seat
 * 3 = outside left
 * 4 = outside right
 * 
 * Hash: 0xC20E50AA46D09CA8 | Since: 323
 */
export function enterVehicle(ped: number | IPed, vehicle: number | IVehicle, timeout: number, seat: number, speed: number, flag: number, overrideEntryClipsetName: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskEnterVehicle(_ped, _vehicle, timeout, seat, speed, flag, overrideEntryClipsetName);
}

/**
 * No comment provided
 * 
 * Hash: 0x7F93691AB4B92272 | Since: 323
 */
export function everyoneLeaveVehicle(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskEveryoneLeaveVehicle(_vehicle);
}

/**
 * p1 is 1, 2, or 3 in scripts
 * 
 * Hash: 0x79B258E397854D29 | Since: 323
 */
export function exitCover(ped: number | IPed, exitType: number, pos: Vector3): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskExitCover(_ped, exitType, pos.x, pos.y, pos.z);
}

/**
 * MulleKD19: Adds a new point to the current point route. Call TASK_FLUSH_ROUTE before the first call to this. Call TASK_FOLLOW_POINT_ROUTE to make the Ped go the route.
 * 
 * A maximum of 8 points can be added.
 * 
 * Hash: 0x1E7889778264843A | Since: 323
 */
export function extendRoute(pos: Vector3): void {
    TaskExtendRoute(pos.x, pos.y, pos.z);
}

/**
 * MulleKD19: Clears the current point route. Call this before TASK_EXTEND_ROUTE and TASK_FOLLOW_POINT_ROUTE.
 * 
 * Hash: 0x841142A1376E9006 | Since: 323
 */
export function flushRoute(): void {
    TaskFlushRoute();
}

/**
 * If no timeout, set timeout to -1.
 * 
 * Hash: 0x15D3A79D4E44B913 | Since: 323
 */
export function followNavMeshToCoord(ped: number | IPed, pos: Vector3, moveBlendRatio: number, time: number, targetRadius: number, flags: number, targetHeading: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFollowNavMeshToCoord(_ped, pos.x, pos.y, pos.z, moveBlendRatio, time, targetRadius, flags, targetHeading);
}

/**
 * No comment provided
 * 
 * Hash: 0x17F58B88D085DBAC | Since: 323
 */
export function followNavMeshToCoordAdvanced(ped: number | IPed, pos: Vector3, moveBlendRatio: number, time: number, targetRadius: number, flags: number, slideToCoordHeading: number, maxSlopeNavigable: number, clampMaxSearchDistance: number, targetHeading: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFollowNavMeshToCoordAdvanced(_ped, pos.x, pos.y, pos.z, moveBlendRatio, time, targetRadius, flags, slideToCoordHeading, maxSlopeNavigable, clampMaxSearchDistance, targetHeading);
}

/**
 * MulleKD19: Makes the ped go on the created point route.
 * 
 * ped: The ped to give the task to.
 * speed: The speed to move at in m/s.
 * int: Unknown. Can be 0, 1, 2 or 3.
 * 
 * Example:
 * TASK_FLUSH_ROUTE();
 * TASK_EXTEND_ROUTE(0f, 0f, 70f);
 * TASK_EXTEND_ROUTE(10f, 0f, 70f);
 * TASK_EXTEND_ROUTE(10f, 10f, 70f);
 * TASK_FOLLOW_POINT_ROUTE(GET_PLAYER_PED(), 1f, 0);
 * 
 * Hash: 0x595583281858626E | Since: 323
 */
export function followPointRoute(ped: number | IPed, speed: number, mode: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFollowPointRoute(_ped, speed, mode);
}

/**
 * p6 always -1
 * p7 always 10.0
 * p8 always 1
 * 
 * Hash: 0x304AE42E357B8C7E | Since: 323
 */
export function followToOffsetOfEntity(ped: number | IPed, entity: number | IEntity, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number, timeout: number, stoppingRange: number, persistFollowing: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskFollowToOffsetOfEntity(_ped, _entity, offsetX, offsetY, offsetZ, movementSpeed, timeout, stoppingRange, persistFollowing);
}

/**
 * No comment provided
 * 
 * Hash: 0x0759591819534F7B | Since: 323
 */
export function followWaypointRecording(ped: number | IPed, name: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFollowWaypointRecording(_ped, name, 0, 0, 0);
}

/**
 * p2 always false
 * 
 * [30/03/2017] ins1de :
 * 
 * See FORCE_PED_MOTION_STATE
 * 
 * Hash: 0x4F056E1AFFEF17AB | Since: 323
 */
export function forceMotionState(ped: number | IPed, state: number | string, forceRestart: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof state === 'string') state = GetHashKey(state)
    TaskForceMotionState(_ped, state, forceRestart);
}

/**
 * No comment provided
 * 
 * Hash: 0x9C00E77AF14B2DFF | Since: 323
 */
export function getOffBoat(ped: number | IPed, boat: number | IVehicle): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _boat = boat instanceof IVehicle ? boat.handle() : boat;
    TaskGetOffBoat(_ped, _boat);
}

/**
 * eg
 * 
 * `TASK::TASK_GOTO_ENTITY_AIMING(v_2, PLAYER::PLAYER_PED_ID(), 5.0, 25.0);`
 * 
 * ped = Ped you want to perform this task.
 * target = the Entity they should aim at.
 * distanceToStopAt = distance from the target, where the ped should stop to aim.
 * StartAimingDist = distance where the ped should start to aim.
 * 
 * Hash: 0xA9DA48FAB8A76C12 | Since: 323
 */
export function gotoEntityAiming(ped: number | IPed, target: number | IEntity, distanceToStopAt: number, StartAimingDist: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IEntity ? target.handle() : target;
    TaskGotoEntityAiming(_ped, _target, distanceToStopAt, StartAimingDist);
}

/**
 * enum ESEEK_ENTITY_OFFSET_FLAGS
 * {
 * ESEEK_OFFSET_ORIENTATES_WITH_ENTITY = 0x01,
 * ESEEK_KEEP_TO_PAVEMENTS = 0x02
 * };
 * 
 * Hash: 0xE39B4FF4FDEBDE27 | Since: 323
 */
export function gotoEntityOffset(ped: number | IPed, entity: number | IEntity, time: number, seekRadius: number, seekAngleDeg: number, moveBlendRatio: number, gotoEntityOffsetFlags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskGotoEntityOffset(_ped, _entity, time, seekRadius, seekAngleDeg, moveBlendRatio, gotoEntityOffsetFlags);
}

/**
 * No comment provided
 * 
 * Hash: 0x338E7EF52B6095A9 | Since: 323
 */
export function gotoEntityOffsetXy(ped: number | IPed, entity: number | IEntity, duration: number, targetRadius: number, offsetX: number, offsetY: number, moveBlendRatio: number, gotoEntityOffsetFlags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskGotoEntityOffsetXy(_ped, _entity, duration, targetRadius, offsetX, offsetY, moveBlendRatio, gotoEntityOffsetFlags);
}

/**
 * No comment provided
 * 
 * Hash: 0xD76B57B44F1E6F8B | Since: 323
 */
export function goStraightToCoord(ped: number | IPed, pos: Vector3, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGoStraightToCoord(_ped, pos.x, pos.y, pos.z, speed, timeout, targetHeading, distanceToSlide);
}

/**
 * No comment provided
 * 
 * Hash: 0x61E360B7E040D12E | Since: 323
 */
export function goStraightToCoordRelativeToEntity(ped: number | IPed, entity: number | IEntity, pos: Vector3, moveBlendRatio: number, time: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskGoStraightToCoordRelativeToEntity(_ped, _entity, pos.x, pos.y, pos.z, moveBlendRatio, time);
}

/**
 * The ped will walk or run towards goToLocation, aiming towards goToLocation or focusLocation (depending on the aimingFlag) and shooting if shootAtEnemies = true to any enemy in his path.
 * 
 * If the ped is closer than noRoadsDistance, the ped will ignore pathing/navmesh and go towards goToLocation directly. This could cause the ped to get stuck behind tall walls if the goToLocation is on the other side. To avoid this, use 0.0f and the ped will always use pathing/navmesh to reach his destination.
 * 
 * If the speed is set to 0.0f, the ped will just stand there while aiming, if set to 1.0f he will walk while aiming, 2.0f will run while aiming.
 * 
 * The ped will stop aiming when he is closer than distanceToStopAt to goToLocation.
 * 
 * I still can't figure out what unkTrue is used for. I don't notice any difference if I set it to false but in the decompiled scripts is always true.
 * 
 * I think that unkFlag, like the driving styles, could be a flag that "work as a list of 32 bits converted to a decimal integer. Each bit acts as a flag, and enables or disables a function". What leads me to this conclusion is the fact that in the decompiled scripts, unkFlag takes values like: 0, 1, 5 (101 in binary) and 4097 (4096 + 1 or 1000000000001 in binary). For now, I don't know what behavior enable or disable this possible flag so I leave it at 0.
 * 
 * Note: After some testing, using unkFlag = 16 (0x10) enables the use of sidewalks while moving towards goToLocation.
 * 
 * The aimingFlag takes 2 values: 0 to aim at the focusLocation, 1 to aim at where the ped is heading (goToLocation).
 * 
 * Example:
 * 
 * enum AimFlag
 * {
 * AimAtFocusLocation,
 * AimAtGoToLocation
 * };
 * 
 * Vector3 goToLocation1 = { 996.2867f, 0, -2143.044f, 0, 28.4763f, 0 }; // remember the padding.
 * 
 * Vector3 goToLocation2 = { 990.2867f, 0, -2140.044f, 0, 28.4763f, 0 }; // remember the padding.
 * 
 * Vector3 focusLocation = { 994.3478f, 0, -2136.118f, 0, 29.2463f, 0 }; // the coord z should be a little higher, around +1.0f to avoid aiming at the ground
 * 
 * // 1st example
 * `TASK::TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD(pedHandle, goToLocation1.x, goToLocation1.y, goToLocation1.z, focusLocation.x, focusLocation.y, focusLocation.z, 2.0f \/\*run\*\/, true \/\*shoot\*\/, 3.0f \/\*stop at\*\/, 0.0f \/\*noRoadsDistance\*\/, true \/\*always true\*\/, 0 \/\*possible flag\*\/, AimFlag::AimAtGoToLocation, -957453492 \/\*FullAuto pattern\*\/);`
 * 
 * // 2nd example
 * `TASK::TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD(pedHandle, goToLocation2.x, goToLocation2.y, goToLocation2.z, focusLocation.x, focusLocation.y, focusLocation.z, 1.0f \/\*walk\*\/, false \/\*don't shoot\*\/, 3.0f \/\*stop at\*\/, 0.0f \/\*noRoadsDistance\*\/, true \/\*always true\*\/, 0 \/\*possible flag\*\/, AimFlag::AimAtFocusLocation, -957453492 \/\*FullAuto pattern\*\/);`
 * 
 * 
 * 1st example: The ped (pedhandle) will run towards goToLocation1. While running and aiming towards goToLocation1, the ped will shoot on sight to any enemy in his path, using "FullAuto" firing pattern. The ped will stop once he is closer than distanceToStopAt to goToLocation1.
 * 
 * 2nd example: The ped will walk towards goToLocation2. This time, while walking towards goToLocation2 and aiming at focusLocation, the ped will point his weapon on sight to any enemy in his path without shooting. The ped will stop once he is closer than distanceToStopAt to goToLocation2.
 * 
 * Hash: 0xA55547801EB331FC | Since: 323
 */
export function goToCoordAndAimAtHatedEntitiesNearCoord(pedHandle: number | IPed, goToLocationX: number, goToLocationY: number, goToLocationZ: number, focusLocationX: number, focusLocationY: number, focusLocationZ: number, speed: number, shootAtEnemies: boolean, distanceToStopAt: number, noRoadsDistance: number, useNavMesh: boolean, navFlags: number, taskFlags: number, firingPattern: number | string): void {
    const _pedHandle = pedHandle instanceof IPed ? pedHandle.handle() : pedHandle;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskGoToCoordAndAimAtHatedEntitiesNearCoord(_pedHandle, goToLocationX, goToLocationY, goToLocationZ, focusLocationX, focusLocationY, focusLocationZ, speed, shootAtEnemies, distanceToStopAt, noRoadsDistance, useNavMesh, navFlags, taskFlags, firingPattern);
}

/**
 * example from fm_mission_controller
 * 
 * `TASK::TASK_GO_TO_COORD_ANY_MEANS(l_649, sub_f7e86(-1, 0), 1.0, 0, 0, 786603, 0xbf800000);`
 * 
 * 
 * Hash: 0x5BC448CB78FA3E88 | Since: 323
 */
export function goToCoordAnyMeans(ped: number | IPed, pos: Vector3, moveBlendRatio: number, vehicle: number | IVehicle, useLongRangeVehiclePathing: boolean, drivingFlags: number, maxRangeToShootTargets: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskGoToCoordAnyMeans(_ped, pos.x, pos.y, pos.z, moveBlendRatio, _vehicle, useLongRangeVehiclePathing, drivingFlags, maxRangeToShootTargets);
}

/**
 * No comment provided
 * 
 * Hash: 0x1DD45F9ECFDB1BC9 | Since: 323
 */
export function goToCoordAnyMeansExtraParams(ped: number | IPed, pos: Vector3, moveBlendRatio: number, vehicle: number | IVehicle, useLongRangeVehiclePathing: boolean, drivingFlags: number, maxRangeToShootTargets: number, extraVehToTargetDistToPreferVehicle: number, driveStraightLineDistance: number, extraFlags: number, warpTimerMS: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskGoToCoordAnyMeansExtraParams(_ped, pos.x, pos.y, pos.z, moveBlendRatio, _vehicle, useLongRangeVehiclePathing, drivingFlags, maxRangeToShootTargets, extraVehToTargetDistToPreferVehicle, driveStraightLineDistance, extraFlags, warpTimerMS);
}

/**
 * No comment provided
 * 
 * Hash: 0xB8ECD61F531A7B02 | Since: 323
 */
export function goToCoordAnyMeansExtraParamsWithCruiseSpeed(ped: number | IPed, pos: Vector3, moveBlendRatio: number, vehicle: number | IVehicle, useLongRangeVehiclePathing: boolean, drivingFlags: number, maxRangeToShootTargets: number, extraVehToTargetDistToPreferVehicle: number, driveStraightLineDistance: number, extraFlags: number, cruiseSpeed: number, targetArriveDist: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(_ped, pos.x, pos.y, pos.z, moveBlendRatio, _vehicle, useLongRangeVehiclePathing, drivingFlags, maxRangeToShootTargets, extraVehToTargetDistToPreferVehicle, driveStraightLineDistance, extraFlags, cruiseSpeed, targetArriveDist);
}

/**
 * movement_speed: mostly 2f, but also 1/1.2f, etc.
 * p8: always false
 * p9: 2f
 * p10: 0.5f
 * p11: true
 * p12: 0 / 512 / 513, etc.
 * p13: 0
 * firing_pattern: ${firing_pattern_full_auto}, 0xC6EE6B4C
 * 
 * Hash: 0x11315AB3385B8AC0 | Since: 323
 */
export function goToCoordWhileAimingAtCoord(ped: number | IPed, pos: Vector3, aimAtX: number, aimAtY: number, aimAtZ: number, moveBlendRatio: number, shoot: boolean, targetRadius: number, slowDistance: number, useNavMesh: boolean, navFlags: number, instantBlendToAim: boolean, firingPattern: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskGoToCoordWhileAimingAtCoord(_ped, pos.x, pos.y, pos.z, aimAtX, aimAtY, aimAtZ, moveBlendRatio, shoot, targetRadius, slowDistance, useNavMesh, navFlags, instantBlendToAim, firingPattern);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2A16444EAD9AE47 | Since: 323
 */
export function goToCoordWhileAimingAtEntity(ped: number | IPed, pos: Vector3, aimAtID: number | IEntity, moveBlendRatio: number, shoot: boolean, targetRadius: number, slowDistance: number, useNavMesh: boolean, navFlags: number, instantBlendToAim: boolean, firingPattern: number | string, time: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _aimAtID = aimAtID instanceof IEntity ? aimAtID.handle() : aimAtID;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskGoToCoordWhileAimingAtEntity(_ped, pos.x, pos.y, pos.z, _aimAtID, moveBlendRatio, shoot, targetRadius, slowDistance, useNavMesh, navFlags, instantBlendToAim, firingPattern, time);
}

/**
 * The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
 * 
 * Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
 * 
 * `Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)`
 * 
 * Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
 * 
 * enum EGOTO_ENTITY_SCRIPT_FLAGS
 * {
 * EGOTO_ENTITY_NEVER_SLOW_FOR_PATH_LENGTH = 0x01,
 * };
 * 
 * Hash: 0x6A071245EB0D1882 | Since: 323
 */
export function goToEntity(entity: number | IEntity, target: number | IEntity, duration: number, distance: number, moveBlendRatio: number, slowDownDistance: number, flags: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _target = target instanceof IEntity ? target.handle() : target;
    TaskGoToEntity(_entity, _target, duration, distance, moveBlendRatio, slowDownDistance, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x04701832B739DCE5 | Since: 323
 */
export function goToEntityWhileAimingAtCoord(ped: number | IPed, entity: number | IEntity, aimX: number, aimY: number, aimZ: number, moveBlendRatio: number, shoot: boolean, targetRadius: number, slowDistance: number, useNavMesh: boolean, instantBlendToAim: boolean, firingPattern: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskGoToEntityWhileAimingAtCoord(_ped, _entity, aimX, aimY, aimZ, moveBlendRatio, shoot, targetRadius, slowDistance, useNavMesh, instantBlendToAim, firingPattern);
}

/**
 * shootatEntity:
 * If true, peds will shoot at Entity till it is dead.
 * If false, peds will just walk till they reach the entity and will cease shooting.
 * 
 * Hash: 0x97465886D35210E9 | Since: 323
 */
export function goToEntityWhileAimingAtEntity(ped: number | IPed, entityToWalkTo: number | IEntity, entityToAimAt: number | IEntity, speed: number, shootatEntity: boolean, targetRadius: number, slowDistance: number, useNavMesh: boolean, instantBlendToAim: boolean, firingPattern: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entityToWalkTo = entityToWalkTo instanceof IEntity ? entityToWalkTo.handle() : entityToWalkTo;
    const _entityToAimAt = entityToAimAt instanceof IEntity ? entityToAimAt.handle() : entityToAimAt;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskGoToEntityWhileAimingAtEntity(_ped, _entityToWalkTo, _entityToAimAt, speed, shootatEntity, targetRadius, slowDistance, useNavMesh, instantBlendToAim, firingPattern);
}

/**
 * No comment provided
 * 
 * Hash: 0xD2A207EEBDF9889B | Since: 323
 */
export function guardAssignedDefensiveArea(ped: number | IPed, pos: Vector3, heading: number, maxPatrolProximity: number, timer: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGuardAssignedDefensiveArea(_ped, pos.x, pos.y, pos.z, heading, maxPatrolProximity, timer);
}

/**
 * From re_prisonvanbreak:
 * 
 * `TASK::TASK_GUARD_CURRENT_POSITION(l_DD, 35.0, 35.0, 1);`
 * 
 * Hash: 0x4A58A47A72E3FCB4 | Since: 323
 */
export function guardCurrentPosition(ped: number | IPed, maxPatrolProximity: number, defensiveAreaRadius: number, setDefensiveArea: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGuardCurrentPosition(_ped, maxPatrolProximity, defensiveAreaRadius, setDefensiveArea);
}

/**
 * No comment provided
 * 
 * Hash: 0xC946FE14BE0EB5E2 | Since: 323
 */
export function guardSphereDefensiveArea(ped: number | IPed, defendPositionX: number, defendPositionY: number, defendPositionZ: number, heading: number, maxPatrolProximity: number, time: number, pos: Vector3, defensiveAreaRadius: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGuardSphereDefensiveArea(_ped, defendPositionX, defendPositionY, defendPositionZ, heading, maxPatrolProximity, time, pos.x, pos.y, pos.z, defensiveAreaRadius);
}

/**
 * In the scripts, p3 was always -1.
 * 
 * p3 seems to be duration or timeout of turn animation.
 * Also facingPed can be 0 or -1 so ped will just raise hands up.
 * 
 * Hash: 0xF2EAB31979A7F910 | Since: 323
 */
export function handsUp(ped: number | IPed, duration: number, facingPed: number | IPed, timeToFacePed: number, flags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _facingPed = facingPed instanceof IPed ? facingPed.handle() : facingPed;
    TaskHandsUp(_ped, duration, _facingPed, timeToFacePed, flags);
}

/**
 * Ped pilot should be in a heli.
 * EntityToFollow can be a vehicle or Ped.
 * 
 * x,y,z appear to be how close to the EntityToFollow the heli should be. Scripts use 0.0, 0.0, 80.0. Then the heli tries to position itself 80 units above the EntityToFollow. If you reduce it to -5.0, it tries to go below (if the EntityToFollow is a heli or plane)
 * 
 * 
 * NOTE: If the pilot finds enemies, it will engage them, then remain there idle, not continuing to chase the Entity given.
 * 
 * Hash: 0xAC83B1DB38D0ADA0 | Since: 323
 */
export function heliChase(pilot: number | IPed, entityToFollow: number | IEntity, pos: Vector3): void {
    const _pilot = pilot instanceof IPed ? pilot.handle() : pilot;
    const _entityToFollow = entityToFollow instanceof IEntity ? entityToFollow.handle() : entityToFollow;
    TaskHeliChase(_pilot, _entityToFollow, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xB385523325077210 | Since: 1290
 */
export function heliEscortHeli(pilot: number | IPed, heli1: number | IVehicle, heli2: number | IVehicle, offsetX: number, offsetY: number, offsetZ: number): void {
    const _pilot = pilot instanceof IPed ? pilot.handle() : pilot;
    const _heli1 = heli1 instanceof IVehicle ? heli1.handle() : heli1;
    const _heli2 = heli2 instanceof IVehicle ? heli2.handle() : heli2;
    TaskHeliEscortHeli(_pilot, _heli1, _heli2, offsetX, offsetY, offsetZ);
}

/**
 * Must have targetVehicle, targetPed, OR destination X/Y/Z set
 * Will follow targeted vehicle/ped, or fly to destination
 * Set whichever is not being used to 0
 * 
 * 
 * Mission mode type:
 * - 4, 7: Forces heli to snap to the heading if set, flies to destination or tracks specified entity (mode 4 only works for coordinates, 7 works for coordinates OR ped/vehicle)
 * - 6: Attacks the target ped/vehicle with mounted weapons. If radius is set, will maintain that distance from target.
 * - 8: Makes the heli flee from the ped/vehicle/coordinate
 * - 9: Circles around target ped/vehicle, snaps to angle if set. Behavior flag (last parameter) of 2048 switches from counter-clockwise to clockwise circling. Does not work with coordinate destination.
 * - 10, 11: Follows ped/vehicle target and imitates target heading. Only works with ped/vehicle target, not coord target
 * - 19: Heli lands at specified coordinate, ignores heading (lands facing whatever direction it is facing when the task is started)
 * - 20: Makes the heli land when near target ped. It won't resume chasing.
 * - 21: Emulates a helicopter crash
 * - 23: makes the heli circle erratically around ped
 * 
 * 
 * Heli will fly at maxSpeed (up to actual maximum speed defined by the model's handling config)
 * You can use SET_DRIVE_TASK_CRUISE_SPEED to modulate the speed based on distance to the target without having to re-invoke the task native. Setting to 8.0 when close to the destination results in a much smoother approach.
 * 
 * If minHeight and maxHeight are set, heli will fly between those specified elevations, relative to ground level and any obstructions/buildings below. You can specify -1 for either if you only want to specify one. Usually it is easiest to leave maxHeight at -1, and specify a reasonable minHeight to ensure clearance over any obstacles. Note this MUST be passed as an INT, not a FLOAT.
 * 
 * Radius affects how closely the heli will follow tracked ped/vehicle, and when circling (mission type 9) sets the radius (in meters) that it will circle the target from
 * 
 * Heading is -1.0 for default behavior, which will point the nose of the helicopter towards the destination. Set a heading and the heli will lock to that direction when near its destination/target, but may still turn towards the destination when flying at higher speed from a further distance.
 * 
 * Behavior Flags is a bitwise value that modifies the AI behavior. Not clear what all flags do, but here are some guesses/notes:
 * 1: Forces heading to face E
 * 2: Unknown
 * 4: Tight circles around coordinate destination
 * 8: Unknown
 * 16: Circles around coordinate destination facing towards destination
 * 32: Flys to normally, then lands at coordinate destination and stays on the ground (using mission type 4)
 * 64: Ignores obstacles when flying, will follow at specified minHeight above ground level but will not avoid buildings, vehicles, etc.
 * 128: Unknown
 * 256: Unknown
 * 512: Unknown
 * 1024: Unknown
 * 2048: Reverses direction of circling (mission type 9) to clockwise
 * 4096: Hugs closer to the ground, maintains minHeight from ground generally, but barely clears buildings and dips down more between buildings instead of taking a more efficient/safe route
 * 8192: Unknown
 * 
 * Unk3 is a float value, you may see -1082130432 for this value in decompiled native scripts, this is the equivalent to -1.0f. Seems to affect acceleration/aggressiveness, but not sure exactly how it works. Higher value seems to result in lower acceleration/less aggressive flying. Almost always -1.0 in native scripts, occasionally 20.0 or 50.0. Setting to 400.0 seems to work well for making the pilot not overshoot the destination when using coordinate destination.
 * 
 * Notes updated by PNWParksFan, May 2021
 * 
 * 
 * Hash: 0xDAD029E187A2BEB4 | Since: 323
 */
export function heliMission(pilot: number | IPed, aircraft: number | IVehicle, targetVehicle: number | IVehicle, targetPed: number | IPed, destinationX: number, destinationY: number, destinationZ: number, missionFlag: number, maxSpeed: number, radius: number, targetHeading: number, maxHeight: number, minHeight: number, slowDownDistance: number, behaviorFlags: number): void {
    const _pilot = pilot instanceof IPed ? pilot.handle() : pilot;
    const _aircraft = aircraft instanceof IVehicle ? aircraft.handle() : aircraft;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskHeliMission(_pilot, _aircraft, _targetVehicle, _targetPed, destinationX, destinationY, destinationZ, missionFlag, maxSpeed, radius, targetHeading, maxHeight, minHeight, slowDownDistance, behaviorFlags);
}

/**
 * Definition is wrong. This has 4 parameters (Not sure when they were added. v350 has 2, v678 has 4).
 * 
 * v350: Ped ped, bool unused
 * v678: Ped ped, bool unused, bool flag1, bool flag2
 * 
 * flag1 = super jump, flag2 = do nothing if flag1 is false and doubles super jump height if flag1 is true.
 * 
 * Hash: 0x0AE4086104E067B1 | Since: 323
 */
export function jump(ped: number | IPed, usePlayerLaunchForce: boolean, doSuperJump: boolean, useFullSuperJumpForce: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskJump(_ped, usePlayerLaunchForce, doSuperJump, useFullSuperJumpForce);
}

/**
 * Flags are the same flags used in TASK_LEAVE_VEHICLE
 * 
 * Hash: 0x504D54DF3F6F2247 | Since: 323
 */
export function leaveAnyVehicle(ped: number | IPed, delayTime: number, flags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskLeaveAnyVehicle(_ped, delayTime, flags);
}

/**
 * Flags from decompiled scripts:
 * 0 = normal exit and closes door.
 * 1 = normal exit and closes door.
 * 16 = teleports outside, door kept closed.
 * 64 = normal exit and closes door, maybe a bit slower animation than 0.
 * 256 = normal exit but does not close the door.
 * 4160 = ped is throwing himself out, even when the vehicle is still.
 * 262144 = ped moves to passenger seat first, then exits normally
 * 
 * Others to be tried out: 320, 512, 131072.
 * 
 * Hash: 0xD3DBCE61A490BE02 | Since: 323
 */
export function leaveVehicle(ped: number | IPed, vehicle: number | IVehicle, flags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskLeaveVehicle(_ped, _vehicle, flags);
}

/**
 * enum eScriptLookatFlags
 * {
 * SLF_SLOW_TURN_RATE            = 1,    // turn the head toward the target slowly
 * SLF_FAST_TURN_RATE            = 2,    // turn the head toward the target quickly
 * SLF_EXTEND_YAW_LIMIT        = 4,    // wide yaw head limits
 * SLF_EXTEND_PITCH_LIMIT        = 8,    // wide pitch head limit
 * SLF_WIDEST_YAW_LIMIT        = 16,   // widest yaw head limit
 * SLF_WIDEST_PITCH_LIMIT        = 32,   // widest pitch head limit
 * SLF_NARROW_YAW_LIMIT        = 64,   // narrow yaw head limits
 * SLF_NARROW_PITCH_LIMIT        = 128,  // narrow pitch head limit
 * SLF_NARROWEST_YAW_LIMIT        = 256,  // narrowest yaw head limit
 * SLF_NARROWEST_PITCH_LIMIT    = 512,  // narrowest pitch head limit
 * SLF_USE_TORSO                = 1024, // use the torso aswell as the neck and head (currently disabled)
 * SLF_WHILE_NOT_IN_FOV        = 2048, // keep tracking the target even if they are not in the hard coded FOV
 * SLF_USE_CAMERA_FOCUS        = 4096, // use the camera as the target
 * SLF_USE_EYES_ONLY            = 8192, // only track the target with the eyes
 * SLF_USE_LOOK_DIR            = 16384, // use information in look dir DOF
 * SLF_FROM_SCRIPT                = 32768, // internal use only
 * SLF_USE_REF_DIR_ABSOLUTE    = 65536  // use absolute reference direction mode for solver
 * };
 * 
 * Hash: 0x6FA46612594F7973 | Since: 323
 */
export function lookAtCoord(entity: number | IEntity, pos: Vector3, duration: number, flags: number, priority: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskLookAtCoord(_entity, pos.x, pos.y, pos.z, duration, flags, priority);
}

/**
 * For flags, please refer to TASK_LOOK_AT_COORD.
 * 
 * Hash: 0x69F4BE8C8CC4796C | Since: 323
 */
export function lookAtEntity(ped: number | IPed, lookAt: number | IEntity, duration: number, flags: number, priority: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _lookAt = lookAt instanceof IEntity ? lookAt.handle() : lookAt;
    TaskLookAtEntity(_ped, _lookAt, duration, flags, priority);
}

/**
 * Example:
 * `TASK::TASK_MOVE_NETWORK_ADVANCED_BY_NAME(PLAYER::PLAYER_PED_ID(), "minigame_tattoo_michael_parts", 324.13f, 181.29f, 102.6f, 0.0f, 0.0f, 22.32f, 2, 0, false, 0, 0);`
 * 
 * Hash: 0xD5B35BEA41919ACB | Since: 323
 */
export function moveNetworkAdvancedByName(ped: number | IPed, network: string, pos: Vector3, rot: Vector3, rotOrder: number, blendDuration: number, allowOverrideCloneUpdate: boolean, animDict: string, flags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskMoveNetworkAdvancedByName(_ped, network, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, rotOrder, blendDuration, allowOverrideCloneUpdate, animDict, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x29682E2CCF21E9B5 | Since: 1868
 */
export function moveNetworkAdvancedByNameWithInitParams(ped: number | IPed, network: string, pos: Vector3, rot: Vector3, rotOrder: number, blendDuration: number, allowOverrideCloneUpdate: boolean, dictionary: string, flags: number): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x29682E2CCF21E9B5', _ped, network, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, rotOrder, blendDuration, allowOverrideCloneUpdate, dictionary, flags);
}

/**
 * Example:
 * `TASK::TASK_MOVE_NETWORK_BY_NAME(PLAYER::PLAYER_PED_ID(), "arm_wrestling_sweep_paired_a_rev3", 0.0f, true, "mini@arm_wrestling", 0);`
 * 
 * Hash: 0x2D537BA194896636 | Since: 323
 */
export function moveNetworkByName(ped: number | IPed, task: string, multiplier: number, allowOverrideCloneUpdate: boolean, animDict: string, flags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskMoveNetworkByName(_ped, task, multiplier, allowOverrideCloneUpdate, animDict, flags);
}

/**
 * Used only once in the scripts (am_mp_nightclub)
 * 
 * Hash: 0x3D45B0B355C5E0C9 | Since: 1493
 */
export function moveNetworkByNameWithInitParams(ped: number | IPed, network: string, blendDuration: number, allowOverrideCloneUpdate: boolean, animDict: string, flags: number): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskMoveNetworkByNameWithInitParams(_ped, network, blendDuration, allowOverrideCloneUpdate, animDict, flags);
}

/**
 * The given ped will try to open the nearest door to 'seat'.
 * Example: telling the ped to open the door for the driver seat does not necessarily mean it will open the driver door, it may choose to open the passenger door instead if that one is closer.
 * 
 * Hash: 0x965791A9A488A062 | Since: 323
 */
export function openVehicleDoor(ped: number | IPed, vehicle: number | IVehicle, timeOut: number, seat: number, speed: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskOpenVehicleDoor(_ped, _vehicle, timeOut, seat, speed);
}

/**
 * Second parameter is unused.
 * 
 * second parameter was for jetpack in the early stages of gta and the hard coded code is now removed
 * 
 * Hash: 0xD2F1C53C97EE81AB | Since: 323
 */
export function parachute(ped: number | IPed, giveParachuteItem: boolean, instant: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskParachute(_ped, giveParachuteItem, instant);
}

/**
 * `makes ped parachute to coords x y z. Works well with PATHFIND::GET_SAFE_COORD_FOR_PED`
 * 
 * Hash: 0xB33E291AFA6BD03A | Since: 323
 */
export function parachuteToTarget(ped: number | IPed, pos: Vector3): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskParachuteToTarget(_ped, pos.x, pos.y, pos.z);
}

/**
 * After looking at some scripts the second parameter seems to be an id of some kind. Here are some I found from some R* scripts:
 * 
 * "miss_Tower_01" (this went from 01 - 10)
 * "miss_Ass0" (0, 4, 6, 3)
 * "MISS_PATROL_8"
 * 
 * I think they're patrol routes, but I'm not sure. And I believe the 3rd parameter is a BOOL, but I can't confirm other than only seeing 0 and 1 being passed.
 * 
 * 
 * As far as I can see the patrol routes names such as "miss_Ass0" have been defined earlier in the scripts. This leads me to believe we can defined our own new patrol routes by following the same approach.
 * From the scripts
 * 
 * `TASK::OPEN_PATROL_ROUTE("miss_Ass0");`
 * `TASK::ADD_PATROL_ROUTE_NODE(0, "WORLD_HUMAN_GUARD_STAND", l_738[0\/\*3\*\/], -139.4076690673828, -993.4732055664062, 26.2754, MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000));`
 * `TASK::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_738[1\/\*3\*\/], -116.1391830444336, -987.4984130859375, 26.38541030883789, MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000));`
 * `TASK::ADD_PATROL_ROUTE_NODE(2, "WORLD_HUMAN_GUARD_STAND", l_738[2\/\*3\*\/], -128.46847534179688, -979.0340576171875, 26.2754, MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000));`
 * `TASK::ADD_PATROL_ROUTE_LINK(0, 1);`
 * `TASK::ADD_PATROL_ROUTE_LINK(1, 2);`
 * `TASK::ADD_PATROL_ROUTE_LINK(2, 0);`
 * `TASK::CLOSE_PATROL_ROUTE();`
 * `TASK::CREATE_PATROL_ROUTE();`
 * 
 * 
 * 
 * Hash: 0xBDA5DF49D080FE4E | Since: 323
 */
export function patrol(ped: number | IPed, patrolRouteName: string, alertState: number, canChatToPeds: boolean, useHeadLookAt: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPatrol(_ped, patrolRouteName, alertState, canChatToPeds, useHeadLookAt);
}

/**
 * Stand still (?)
 * 
 * Hash: 0xE73A266DB0CA9042 | Since: 323
 */
export function pause(ped: number | IPed, ms: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPause(_ped, ms);
}

/**
 * No comment provided
 * 
 * Hash: 0xD04FE6765D990A06 | Since: 323
 */
export function pedSlideToCoord(ped: number | IPed, pos: Vector3, heading: number, speed: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPedSlideToCoord(_ped, pos.x, pos.y, pos.z, heading, speed);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A4A6A6D3DC64F52 | Since: 323
 */
export function pedSlideToCoordHdgRate(ped: number | IPed, pos: Vector3, heading: number, speed: number, headingChangeRate: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPedSlideToCoordHdgRate(_ped, pos.x, pos.y, pos.z, heading, speed, headingChangeRate);
}

/**
 * No comment provided
 * 
 * Hash: 0x5ABA3986D90D8A3B | Since: 323
 */
export function performSequence(ped: number | IPed, taskSequenceId: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPerformSequence(_ped, taskSequenceId);
}

/**
 * No comment provided
 * 
 * Hash: 0x89221B16730234F0 | Since: 323
 */
export function performSequenceFromProgress(ped: number | IPed, taskIndex: number, progress1: number, progress2: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPerformSequenceFromProgress(_ped, taskIndex, progress1, progress2);
}

/**
 * No comment provided
 * 
 * Hash: 0x8C33220C8D78CA0D | Since: 944
 */
export function performSequenceLocally(ped: number | IPed, taskSequenceId: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPerformSequenceLocally(_ped, taskSequenceId);
}

/**
 * No comment provided
 * 
 * Hash: 0x2D2386F273FF7A25 | Since: 323
 */
export function planeChase(pilot: number | IPed, entityToFollow: number | IEntity, pos: Vector3): void {
    const _pilot = pilot instanceof IPed ? pilot.handle() : pilot;
    const _entityToFollow = entityToFollow instanceof IEntity ? entityToFollow.handle() : entityToFollow;
    TaskPlaneChase(_pilot, _entityToFollow, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xF7F9DCCA89E7505B | Since: 1290
 */
export function planeGotoPreciseVtol(ped: number | IPed, vehicle: number | IVehicle, pos: Vector3, flightHeight: number, minHeightAboveTerrain: number, useDesiredOrientation: boolean, desiredOrientation: number, autopilot: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskPlaneGotoPreciseVtol(_ped, _vehicle, pos.x, pos.y, pos.z, flightHeight, minHeightAboveTerrain, useDesiredOrientation, desiredOrientation, autopilot);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF19721FA34D32C0 | Since: 323
 */
export function planeLand(pilot: number | IPed, plane: number | IVehicle, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number, runwayEndY: number, runwayEndZ: number): void {
    const _pilot = pilot instanceof IPed ? pilot.handle() : pilot;
    const _plane = plane instanceof IVehicle ? plane.handle() : plane;
    TaskPlaneLand(_pilot, _plane, runwayStartX, runwayStartY, runwayStartZ, runwayEndX, runwayEndY, runwayEndZ);
}

/**
 * EXAMPLE USAGE:
 * 
 * Fly around target (Precautiously, keeps high altitude):
 * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, 200f);
 * 
 * Fly around target (Dangerously, keeps VERY low altitude):
 * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, -500f);
 * 
 * Fly directly into target:
 * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, -5000f);
 * 
 * EXPANDED INFORMATION FOR ADVANCED USAGE (custom pilot)
 * 
 * 'physicsSpeed': (THIS IS NOT YOUR ORDINARY SPEED PARAMETER: READ!!)
 * Think of this -first- as a radius value, not a true speed value.  The ACTUAL effective speed of the plane will be that of the maximum speed permissible to successfully fly in a -circle- with a radius of 'physicsSpeed'.  This also means that the plane must complete a circle before it can begin its "bombing run", its straight line pass towards the target.  p9 appears to influence the angle at which a "bombing run" begins, although I can't confirm yet.
 * 
 * VERY IMPORTANT: A "bombing run" will only occur if a plane can successfully determine a possible navigable route (the slower the value of 'physicsSpeed', the more precise the pilot can be due to less influence of physics on flightpath).  Otherwise, the pilot will continue to patrol around Destination (be it a dynamic Entity position vector or a fixed world coordinate vector.)
 * 
 * 0 = Plane's physics are almost entirely frozen, plane appears to "orbit" around precise destination point
 * 1-299 = Blend of "frozen, small radius" vs. normal vs. "accelerated, hyperfast, large radius"
 * 300+ =  Vehicle behaves entirely like a normal gameplay plane.
 * 
 * 'patrolBlend' (The lower the value, the more the Destination is treated as a "fly AT" rather than a "fly AROUND point".)
 * 
 * Scenario: Destination is an Entity on ground level, wide open field
 * -5000 = Pilot kamikazes directly into Entity
 * -1000 = Pilot flies extremely low -around- Entity, very prone to crashing
 * -200 = Pilot flies lower than average around Entity.
 * 0 = Pilot flies around Entity, normal altitude
 * 200 = Pilot flies an extra eighty units or so higher than 0 while flying around Destination (this doesn't seem to correlate directly into distance units.)
 * 
 * -- Valid mission types found in the exe: --
 * 
 * 0 = None
 * 1 = Unk
 * 2 = CTaskVehicleRam
 * 3 = CTaskVehicleBlock
 * 4 = CTaskVehicleGoToPlane
 * 5 = CTaskVehicleStop
 * 6 = CTaskVehicleAttack
 * 7 = CTaskVehicleFollow
 * 8 = CTaskVehicleFleeAirborne
 * 9= CTaskVehicleCircle
 * 10 = CTaskVehicleEscort
 * 15 = CTaskVehicleFollowRecording
 * 16 = CTaskVehiclePoliceBehaviour
 * 17 = CTaskVehicleCrash
 * 
 * Hash: 0x23703CD154E83B88 | Since: 323
 */
export function planeMission(pilot: number | IPed, aircraft: number | IVehicle, targetVehicle: number | IVehicle, targetPed: number | IPed, destinationX: number, destinationY: number, destinationZ: number, missionFlag: number, angularDrag: number, targetReached: number, targetHeading: number, maxZ: number, minZ: number, precise: boolean): void {
    const _pilot = pilot instanceof IPed ? pilot.handle() : pilot;
    const _aircraft = aircraft instanceof IVehicle ? aircraft.handle() : aircraft;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskPlaneMission(_pilot, _aircraft, _targetVehicle, _targetPed, destinationX, destinationY, destinationZ, missionFlag, angularDrag, targetReached, targetHeading, maxZ, minZ, precise);
}

/**
 * No comment provided
 * 
 * Hash: 0x92C360B5F15D2302 | Since: 1103
 */
export function planeTaxi(pilot: number | IPed, aircraft: number | IVehicle, pos: Vector3, cruiseSpeed: number, targetReached: number): void {
    const _pilot = pilot instanceof IPed ? pilot.handle() : pilot;
    const _aircraft = aircraft instanceof IVehicle ? aircraft.handle() : aircraft;
    TaskPlaneTaxi(_pilot, _aircraft, pos.x, pos.y, pos.z, cruiseSpeed, targetReached);
}

/**
 * No comment provided
 * 
 * Hash: 0x965FEC691D55E9BF | Since: 323
 */
export function plantBomb(ped: number | IPed, pos: Vector3, heading: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPlantBomb(_ped, pos.x, pos.y, pos.z, heading);
}

/**
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * float speed > normal speed is 8.0f
 * ----------------------
 * 
 * float speedMultiplier > multiply the playback speed
 * ----------------------
 * 
 * int duration: time in millisecond
 * ----------------------
 * -1 _ _ _ _ _ _ _> Default (see flag)
 * 0 _ _ _ _ _ _ _ > Not play at all
 * Small value _ _ > Slow down animation speed
 * Other _ _ _ _ _ > freeze player control until specific time (ms) has
 * _ _ _ _ _ _ _ _ _ passed. (No effect if flag is set to be
 * _ _ _ _ _ _ _ _ _ controllable.)
 * 
 * int flag:
 * ----------------------
 * enum eAnimationFlags
 * {
 * ANIM_FLAG_NORMAL = 0,
 * ANIM_FLAG_REPEAT = 1,
 * ANIM_FLAG_STOP_LAST_FRAME = 2,
 * ANIM_FLAG_UPPERBODY = 16,
 * ANIM_FLAG_ENABLE_PLAYER_CONTROL = 32,
 * ANIM_FLAG_CANCELABLE = 120,
 * };
 * Odd number : loop infinitely
 * Even number : Freeze at last frame
 * Multiple of 4: Freeze at last frame but controllable
 * 
 * 01 to 15 > Full body
 * 10 to 31 > Upper body
 * 32 to 47 > Full body > Controllable
 * 48 to 63 > Upper body > Controllable
 * ...
 * 001 to 255 > Normal
 * 256 to 511 > Garbled
 * ...
 * 
 * playbackRate:
 * 
 * values are between 0.0 and 1.0
 * 
 * 
 * lockX:
 * 
 * 0 in most cases 1 for rcmepsilonism8 and rcmpaparazzo_3
 * > 1 for mini@sprunk
 * 
 * 
 * lockY:
 * 
 * 0 in most cases
 * 1 for missfam5_yoga, missfra1mcs_2_crew_react
 * 
 * 
 * lockZ:
 * 
 * 0 for single player
 * Can be 1 but only for MP
 * 
 * Hash: 0xEA47FE3719165B94 | Since: 323
 */
export function playAnim(ped: number | IPed, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPlayAnim(_ped, animDictionary, animationName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, lockX, lockY, lockZ);
}

/**
 * It's similar to TASK_PLAY_ANIM, except the first 6 floats let you specify the initial position and rotation of the task. (Ped gets teleported to the position).
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0x83CDB10EA29B370B | Since: 323
 */
export function playAnimAdvanced(ped: number | IPed, animDict: string, animName: string, pos: Vector3, rot: Vector3, animEnterSpeed: number, animExitSpeed: number, duration: number, flag: any, animTime: number, rotOrder: number, ikFlags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPlayAnimAdvanced(_ped, animDict, animName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, animEnterSpeed, animExitSpeed, duration, flag, animTime, rotOrder, ikFlags);
}

/**
 * Example from the scripts:
 * `TASK::TASK_PLAY_PHONE_GESTURE_ANIMATION(PLAYER::PLAYER_PED_ID(), v_3, v_2, v_4, 0.25, 0.25, 0, 0);`
 * 
 * =========================================================
 * ^^ No offense, but Idk how that would really help anyone.
 * 
 * As for the animDict & animation, they're both store in a global in all 5 scripts. So if anyone would be so kind as to read that global and comment what strings they use. Thanks.
 * 
 * Known boneMaskTypes'
 * "BONEMASK_HEADONLY"
 * "BONEMASK_HEAD_NECK_AND_ARMS"
 * "BONEMASK_HEAD_NECK_AND_L_ARM"
 * "BONEMASK_HEAD_NECK_AND_R_ARM"
 * 
 * p4 known args - 0.0f, 0.5f, 0.25f
 * p5 known args - 0.0f, 0.25f
 * p6 known args - 1 if a global if check is passed.
 * p7 known args - 1 if a global if check is passed.
 * 
 * The values found above, I found within the 5 scripts this is ever called in. (fmmc_launcher, fm_deathmatch_controller, fm_impromptu_dm_controller, fm_mission_controller, and freemode).
 * =========================================================
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0x8FBB6758B3B3E9EC | Since: 323
 */
export function playPhoneGestureAnimation(ped: number | IPed, animDict: string, animation: string, boneMaskType: string, blendInDuration: number, blendOutDuration: number, isLooping: boolean, holdLastFrame: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPlayPhoneGestureAnimation(_ped, animDict, animation, boneMaskType, blendInDuration, blendOutDuration, isLooping, holdLastFrame);
}

/**
 * No comment provided
 * 
 * Hash: 0x4172393E6BE1FECE | Since: 323
 */
export function putPedDirectlyIntoCover(ped: number | IPed, pos: Vector3, time: number, allowPeekingAndFiring: boolean, blendInDuration: number, forceInitialFacingDirection: boolean, forceFaceLeft: boolean, identifier: number, doEntry: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPutPedDirectlyIntoCover(_ped, pos.x, pos.y, pos.z, time, allowPeekingAndFiring, blendInDuration, forceInitialFacingDirection, forceFaceLeft, identifier, doEntry);
}

/**
 * from armenian3.c4
 * 
 * `TASK::TASK_PUT_PED_DIRECTLY_INTO_MELEE(PlayerPed, armenianPed, 0.0, -1.0, 0.0, 0);`
 * 
 * 
 * Hash: 0x1C6CD14A876FFE39 | Since: 323
 */
export function putPedDirectlyIntoMelee(ped: number | IPed, meleeTarget: number | IPed, blendInDuration: number, timeInMelee: number, strafePhaseSync: number, aiCombatFlags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _meleeTarget = meleeTarget instanceof IPed ? meleeTarget.handle() : meleeTarget;
    TaskPutPedDirectlyIntoMelee(_ped, _meleeTarget, blendInDuration, timeInMelee, strafePhaseSync, aiCombatFlags);
}

/**
 * Attaches a ped to a rope and allows player control to rappel down a wall. Disables all collisions while on the rope.
 * p10: Usually 1 in the scripts, clipSet: Clipset to use for the task, minZ: Minimum Z that the player can descend to, ropeHandle: Rope to attach this task to created with ADD_ROPE
 * 
 * Hash: 0xEAF66ACDDC794793 | Since: 1868
 */
export function rappelDownWallUsingClipsetOverride(ped: number | IPed, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, minZ: number, ropeHandle: number, clipSet: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskRappelDownWall(_ped, x1, y1, z1, x2, y2, z2, minZ, ropeHandle, clipSet, undefined, undefined);
}

/**
 * minHeightAboveGround: the minimum height above ground the heli must be at before the ped can start rappelling
 * 
 * Only appears twice in the scripts.
 * 
 * `TASK::TASK_RAPPEL_FROM_HELI(PLAYER::PLAYER_PED_ID(), 10.0f);`
 * `TASK::TASK_RAPPEL_FROM_HELI(a_0, 10.0f);`
 * 
 * Hash: 0x09693B0312F91649 | Since: 323
 */
export function rappelFromHeli(ped: number | IPed, minHeightAboveGround: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskRappelFromHeli(_ped, minHeightAboveGround);
}

/**
 * No comment provided
 * 
 * Hash: 0x72C896464915D1B1 | Since: 323
 */
export function reactAndFleePed(ped: number | IPed, fleeTarget: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _fleeTarget = fleeTarget instanceof IPed ? fleeTarget.handle() : fleeTarget;
    TaskReactAndFleePed(_ped, _fleeTarget);
}

/**
 * The 2nd param (drawWeapon) is not implemented.
 * 
 * -----------------------------------------------------------------------
 * 
 * The only occurrence I found in a R* script ("assassin_construction.ysc.c4"):
 * 
 * `if (((v_3 < v_4) && (TASK::GET_SCRIPT_TASK_STATUS(PLAYER::PLAYER_PED_ID(), 0x6a67a5cc) != 1)) && (v_5 > v_3)) {`
 * `TASK::TASK_RELOAD_WEAPON(PLAYER::PLAYER_PED_ID(), 1);`
 * }
 * 
 * Hash: 0x62D2916F56B9CD2D | Since: 323
 */
export function reloadWeapon(ped: number | IPed, drawWeapon: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskReloadWeapon(_ped, drawWeapon);
}

/**
 * From fm_mission_controller.c:
 * reserve_network_mission_objects(get_num_reserved_mission_objects(0) + 1);
 * vVar28 = {0.094f, 0.02f, -0.005f};
 * vVar29 = {-92.24f, 63.64f, 150.24f};
 * func_253(&uVar30, joaat("prop_ld_case_01"), Global_1592429.imm_34757[iParam1 <268>], 1, 1, 0, 1);
 * set_entity_lod_dist(net_to_ent(uVar30), 500);
 * attach_entity_to_entity(net_to_ent(uVar30), iParam0, get_ped_bone_index(iParam0, 28422), vVar28, vVar29, 1, 0, 0, 0, 2, 1);
 * Var31.imm_4 = 1065353216;
 * Var31.imm_5 = 1065353216;
 * Var31.imm_9 = 1065353216;
 * Var31.imm_10 = 1065353216;
 * Var31.imm_14 = 1065353216;
 * Var31.imm_15 = 1065353216;
 * Var31.imm_17 = 1040187392;
 * Var31.imm_18 = 1040187392;
 * Var31.imm_19 = -1;
 * Var32.imm_4 = 1065353216;
 * Var32.imm_5 = 1065353216;
 * Var32.imm_9 = 1065353216;
 * Var32.imm_10 = 1065353216;
 * Var32.imm_14 = 1065353216;
 * Var32.imm_15 = 1065353216;
 * Var32.imm_17 = 1040187392;
 * Var32.imm_18 = 1040187392;
 * Var32.imm_19 = -1;
 * Var31 = 1;
 * Var31.imm_1 = "weapons@misc@jerrycan@mp_male";
 * Var31.imm_2 = "idle";
 * Var31.imm_20 = 1048633;
 * Var31.imm_4 = 0.5f;
 * Var31.imm_16 = get_hash_key("BONEMASK_ARMONLY_R");
 * task_scripted_animation(iParam0, &Var31, &Var32, &Var32, 0f, 0.25f);
 * set_model_as_no_longer_needed(joaat("prop_ld_case_01"));
 * remove_anim_dict("anim@heists@biolab@");
 * 
 * Hash: 0x126EF75F1E17ABE5 | Since: 323
 */
export function scriptedAnimation(ped: number | IPed, blendInDelta: number, blendOutDelta: number): [number, number, number] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskScriptedAnimation(_ped, blendInDelta, blendOutDelta);
}

/**
 * No comment provided
 * 
 * Hash: 0x84D32B3BEC531324 | Since: 323
 */
export function seekCoverFromPed(ped: number | IPed, target: number | IPed, duration: number, allowPeekingAndFiring: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskSeekCoverFromPed(_ped, _target, duration, allowPeekingAndFiring);
}

/**
 * No comment provided
 * 
 * Hash: 0x75AC2B60386D89F2 | Since: 323
 */
export function seekCoverFromPos(ped: number | IPed, pos: Vector3, duration: number, allowPeekingAndFiring: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSeekCoverFromPos(_ped, pos.x, pos.y, pos.z, duration, allowPeekingAndFiring);
}

/**
 * p8 causes the ped to take the shortest route to the cover position. It may have something to do with navmesh or pathfinding mechanics.
 * 
 * from michael2:
 * `TASK::TASK_SEEK_COVER_TO_COORDS(ped, 967.5164794921875, -2121.603515625, 30.479299545288086, 978.94677734375, -2125.84130859375, 29.4752, -1, 1);`
 * 
 * 
 * appears to be shorter variation
 * from michael3:
 * `TASK::TASK_SEEK_COVER_TO_COORDS(ped, -2231.011474609375, 263.6326599121094, 173.60195922851562, -1, 0);`
 * 
 * Hash: 0x39246A6958EF072C | Since: 323
 */
export function seekCoverToCoords(ped: number | IPed, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, timeout: number, shortRoute: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSeekCoverToCoords(_ped, x1, y1, z1, x2, y2, z2, timeout, shortRoute);
}

/**
 * p5 is always -1
 * 
 * Hash: 0xD43D95C7A869447F | Since: 323
 */
export function seekCoverToCoverPoint(ped: number | IPed, coverpoint: number, pos: Vector3, time: number, allowPeekingAndFiring: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSeekCoverToCoverPoint(_ped, coverpoint, pos.x, pos.y, pos.z, time, allowPeekingAndFiring);
}

/**
 * I cant believe I have to define this, this is one of the best natives.
 * 
 * It makes the ped ignore basically all shocking events around it. Occasionally the ped may comment or gesture, but other than that they just continue their daily activities. This includes shooting and wounding the ped. And - most importantly - they do not flee.
 * 
 * Since it is a task, every time the native is called the ped will stop for a moment.
 * 
 * Hash: 0x90D2156198831D69 | Since: 323
 */
export function setBlockingOfNonTemporaryEvents(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSetBlockingOfNonTemporaryEvents(_ped, toggle);
}

/**
 * p1 is always GET_HASH_KEY("empty") in scripts, for the rare times this is used
 * 
 * Hash: 0xEB8517DDA73720DA | Since: 323
 */
export function setDecisionMaker(ped: number | IPed, decisionMakerId: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof decisionMakerId === 'string') decisionMakerId = GetHashKey(decisionMakerId)
    TaskSetDecisionMaker(_ped, decisionMakerId);
}

/**
 * No comment provided
 * 
 * Hash: 0x933C06518B52A9A4 | Since: 323
 */
export function setSphereDefensiveArea(ped: number | IPed, pos: Vector3, radius: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSetSphereDefensiveArea(_ped, pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x60A19CF85FF4CEFA | Since: 3407
 */
export function sharkCircleCoord(ped: number | IPed, pos: Vector3, moveBlendRatio: number, radius: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x60A19CF85FF4CEFA', _ped, pos.x, pos.y, pos.z, moveBlendRatio, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x452419CBD838065B | Since: 323
 */
export function shockingEventReact(ped: number | IPed, eventHandle: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskShockingEventReact(_ped, eventHandle);
}

/**
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * 
 * Hash: 0x46A6CC01E0826106 | Since: 323
 */
export function shootAtCoord(ped: number | IPed, pos: Vector3, duration: number, firingPattern: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskShootAtCoord(_ped, pos.x, pos.y, pos.z, duration, firingPattern);
}

/**
 * //this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
 * Entity aimedentity;
 * `Player player = PLAYER::PLAYER_ID();`
 * `PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);`
 * 
 * //bg is an array of peds
 * `TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));`
 * 
 * in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
 * 
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * 
 * Hash: 0x08DA95E8298AE772 | Since: 323
 */
export function shootAtEntity(entity: number | IEntity, target: number | IEntity, duration: number, firingPattern: number | string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _target = target instanceof IEntity ? target.handle() : target;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskShootAtEntity(_entity, _target, duration, firingPattern);
}

/**
 * Makes the specified ped shuffle to the next vehicle seat.
 * The ped MUST be in a vehicle and the vehicle parameter MUST be the ped's current vehicle.
 * 
 * Hash: 0x7AA80209BDA643EB | Since: 323
 */
export function shuffleToNextVehicleSeat(ped: number | IPed, vehicle: number | IVehicle, useAlternateShuffle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskShuffleToNextVehicleSeat(_ped, _vehicle, useAlternateShuffle);
}

/**
 * No comment provided
 * 
 * Hash: 0x601736CFE536B0A0 | Since: 323
 */
export function skyDive(ped: number | IPed, instant: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSkyDive(_ped, instant);
}

/**
 * Makes the specified ped flee the specified distance from the specified position.
 * 
 * Hash: 0x94587F17E9C365D5 | Since: 323
 */
export function smartFleeCoord(ped: number | IPed, pos: Vector3, distance: number, time: number, preferPavements: boolean, quitIfOutOfRange: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSmartFleeCoord(_ped, pos.x, pos.y, pos.z, distance, time, preferPavements, quitIfOutOfRange);
}

/**
 * Makes a ped run away from another ped (fleeTarget).
 * 
 * distance = ped will flee this distance.
 * fleeTime = ped will flee for this amount of time, set to "-1" to flee forever
 * 
 * Hash: 0x22B0D0E37CCB840D | Since: 323
 */
export function smartFleePed(ped: number | IPed, fleeTarget: number | IPed, safeDistance: number, fleeTime: number, preferPavements: boolean, updateToNearestHatedPed: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _fleeTarget = fleeTarget instanceof IPed ? fleeTarget.handle() : fleeTarget;
    TaskSmartFleePed(_ped, _fleeTarget, safeDistance, fleeTime, preferPavements, updateToNearestHatedPed);
}

/**
 * scenarioName example: "WORLD_HUMAN_GUARD_STAND"
 * 
 * Hash: 0xAE032F8BBA959E90 | Since: 323
 */
export function standGuard(ped: number | IPed, pos: Vector3, heading: number, scenarioName: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskStandGuard(_ped, pos.x, pos.y, pos.z, heading, scenarioName);
}

/**
 * Makes the specified ped stand still for (time) milliseconds.
 * 
 * Hash: 0x919BE13EED931959 | Since: 323
 */
export function standStill(ped: number | IPed, time: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskStandStill(_ped, time);
}

/**
 * Full list of ped scenarios by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
 * 
 * `Also a few more listed at TASK::TASK_START_SCENARIO_IN_PLACE just above.`
 * ---------------
 * The first parameter in every scenario has always been a Ped of some sort. The second like TASK_START_SCENARIO_IN_PLACE is the name of the scenario.
 * 
 * The next 4 parameters were harder to decipher. After viewing "hairdo_shop_mp.ysc.c4", and being confused from seeing the case in other scripts, they passed the first three of the arguments as one array from a function, and it looked like it was obviously x, y, and z.
 * 
 * I haven't seen the sixth parameter go to or over 360, making me believe that it is rotation, but I really can't confirm anything.
 * 
 * I have no idea what the last 3 parameters are, but I'll try to find out.
 * 
 * -going on the last 3 parameters, they appear to always be "0, 0, 1"
 * 
 * p6 -1 also used in scrips
 * 
 * p7 used for sitting scenarios
 * 
 * p8 teleports ped to position
 * 
 * Hash: 0xFA4EFC79F69D4F07 | Since: 323
 */
export function startScenarioAtPosition(ped: number | IPed, scenarioName: string, pos: Vector3, heading: number, duration: number, sittingScenario: boolean, teleport: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskStartScenarioAtPosition(_ped, scenarioName, pos.x, pos.y, pos.z, heading, duration, sittingScenario, teleport);
}

/**
 * Plays a scenario on a Ped at their current location.
 * 
 * unkDelay - Usually 0 or -1, doesn't seem to have any effect. Might be a delay between sequences.
 * playEnterAnim - Plays the "Enter" anim if true, otherwise plays the "Exit" anim. Scenarios that don't have any "Enter" anims won't play if this is set to true.
 * 
 * ----
 * 
 * From "am_hold_up.ysc.c4" at line 339:
 * 
 * `TASK::TASK_START_SCENARIO_IN_PLACE(NETWORK::NET_TO_PED(l_8D._f4), sub_adf(), 0, 1);`
 * 
 * I'm unsure of what the last two parameters are, however sub_adf() randomly returns 1 of 3 scenarios, those being:
 * WORLD_HUMAN_SMOKING
 * WORLD_HUMAN_HANG_OUT_STREET
 * WORLD_HUMAN_STAND_MOBILE
 * 
 * This makes sense, as these are what I commonly see when going by a liquor store.
 * -------------------------
 * List of scenarioNames: https://pastebin.com/6mrYTdQv
 * (^ Thank you so fucking much for this)
 * 
 * Also these:
 * WORLD_FISH_FLEE
 * DRIVE
 * WORLD_HUMAN_HIKER
 * WORLD_VEHICLE_ATTRACTOR
 * WORLD_VEHICLE_BICYCLE_MOUNTAIN
 * WORLD_VEHICLE_BIKE_OFF_ROAD_RACE
 * WORLD_VEHICLE_BIKER
 * WORLD_VEHICLE_CONSTRUCTION_PASSENGERS
 * WORLD_VEHICLE_CONSTRUCTION_SOLO
 * WORLD_VEHICLE_DRIVE_PASSENGERS
 * WORLD_VEHICLE_DRIVE_SOLO
 * WORLD_VEHICLE_EMPTY
 * WORLD_VEHICLE_PARK_PARALLEL
 * WORLD_VEHICLE_PARK_PERPENDICULAR_NOSE_IN
 * WORLD_VEHICLE_POLICE_BIKE
 * WORLD_VEHICLE_POLICE_CAR
 * WORLD_VEHICLE_POLICE_NEXT_TO_CAR
 * WORLD_VEHICLE_SALTON_DIRT_BIKE
 * WORLD_VEHICLE_TRUCK_LOGS
 * 
 * Full list of ped scenarios by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
 * 
 * Hash: 0x142A02425FF02BD9 | Since: 323
 */
export function startScenarioInPlace(ped: number | IPed, scenarioName: string, unkDelay: number, playEnterAnim: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskStartScenarioInPlace(_ped, scenarioName, unkDelay, playEnterAnim);
}

/**
 * Makes the ped run to take cover
 * 
 * Hash: 0xE5DA8615A6180789 | Since: 323
 */
export function stayInCover(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskStayInCover(_ped);
}

/**
 * known "killTypes" are: "AR_stealth_kill_knife" and "AR_stealth_kill_a".
 * 
 * Hash: 0xAA5DC05579D60BD9 | Since: 323
 */
export function stealthKill(killer: number | IPed, target: number | IPed, stealthKillActionResultHash: number | string, desiredMoveBlendRatio: number, stealthFlags: number): void {
    const _killer = killer instanceof IPed ? killer.handle() : killer;
    const _target = target instanceof IPed ? target.handle() : target;
    if (typeof stealthKillActionResultHash === 'string') stealthKillActionResultHash = GetHashKey(stealthKillActionResultHash)
    TaskStealthKill(_killer, _target, stealthKillActionResultHash, desiredMoveBlendRatio, stealthFlags);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FA00D4F4641BFAE | Since: 323
 */
export function stopPhoneGestureAnimation(ped: number | IPed, blendOutOverride: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskStopPhoneGestureAnimation(_ped, blendOutOverride);
}

/**
 * Used in am_vehicle_spawn.ysc and am_mp_submarine.ysc.
 * 
 * p0 is always 0, p5 is always 1
 * 
 * p1 is the vehicle handle of the submarine. Submarine must have a driver, but the ped handle is not passed to the native.
 * 
 * Speed can be set by calling SET_DRIVE_TASK_CRUISE_SPEED after
 * 
 * Hash: 0xC22B40579A498CA4 | Since: 2189
 */
export function submarineGotoAndStop(ped: number | IPed, submarine: number | IVehicle, pos: Vector3, autopilot: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _submarine = submarine instanceof IVehicle ? submarine.handle() : submarine;
    TaskSubmarineGotoAndStop(_ped, _submarine, pos.x, pos.y, pos.z, autopilot);
}

/**
 * No comment provided
 * 
 * Hash: 0xA21C51255B205245 | Since: 323
 */
export function swapWeapon(ped: number | IPed, drawWeapon: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSwapWeapon(_ped, drawWeapon);
}

/**
 * This function is called on peds in vehicles.
 * 
 * anim: animation name
 * p2, p3, p4: "sweep_low", "sweep_med" or "sweep_high"
 * p5: no idea what it does but is usually -1
 * 
 * Hash: 0x2047C02158D6405A | Since: 323
 */
export function sweepAimEntity(ped: number | IPed, animDict: string, lowAnimName: string, medAnimName: string, hiAnimName: string, runtime: number, targetEntity: number | IEntity, turnRate: number, blendInDuration: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    TaskSweepAimEntity(_ped, animDict, lowAnimName, medAnimName, hiAnimName, runtime, _targetEntity, turnRate, blendInDuration);
}

/**
 * No comment provided
 * 
 * Hash: 0x7AFE8FDC10BC07D2 | Since: 323
 */
export function sweepAimPosition(ped: number | IPed, animDict: string, lowAnimName: string, medAnimName: string, hiAnimName: string, runtime: number, pos: Vector3, turnRate: number, blendInDuration: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSweepAimPosition(_ped, animDict, lowAnimName, medAnimName, hiAnimName, runtime, pos.x, pos.y, pos.z, turnRate, blendInDuration);
}

/**
 * `TASK::TASK_SYNCHRONIZED_SCENE(ped, scene, "creatures@rottweiler@in_vehicle@std_car", "get_in", 1000.0, -8.0, 4, 0, 0x447a0000, 0);`
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Hash: 0xEEA929141F699854 | Since: 323
 */
export function synchronizedScene(ped: number | IPed, scene: number, animDictionary: string, animationName: string, blendIn: number, blendOut: number, flags: number, ragdollBlockingFlags: number, moverBlendDelta: number, ikFlags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSynchronizedScene(_ped, scene, animDictionary, animationName, blendIn, blendOut, flags, ragdollBlockingFlags, moverBlendDelta, ikFlags);
}

/**
 * In every case of this native, I've only seen the first parameter passed as 0, although I believe it's a Ped after seeing tasks around it using 0. That's because it's used in a Sequence Task.
 * 
 * The last 3 parameters are definitely coordinates after seeing them passed in other scripts, and even being used straight from the player's coordinates.
 * ---
 * It seems that - in the decompiled scripts - this native was used on a ped who was in a vehicle to throw a projectile out the window at the player. This is something any ped will naturally do if they have a throwable and they are doing driveby-combat (although not very accurately).
 * It is possible, however, that this is how SWAT throws smoke grenades at the player when in cover.
 * ----------------------------------------------------
 * The first comment is right it definately is the ped as if you look in script finale_heist2b.c line 59628 in Xbox Scripts atleast you will see task_throw_projectile and the first param is Local_559[2 <14>] if you look above it a little bit line 59622 give_weapon_to_ped uses the same exact param Local_559[2 <14>] and we all know the first param of that native is ped. So it guaranteed has to be ped. 0 just may mean to use your ped by default for some reason.
 * 
 * Hash: 0x7285951DBF6B5A51 | Since: 323
 */
export function throwProjectile(ped: number | IPed, pos: Vector3, ignoreCollisionEntityIndex: number, createInvincibleProjectile: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskThrowProjectile(_ped, pos.x, pos.y, pos.z, ignoreCollisionEntityIndex, createInvincibleProjectile);
}

/**
 * used in sequence task
 * 
 * both parameters seems to be always 0
 * 
 * Hash: 0xAC96609B9995EDF8 | Since: 323
 */
export function toggleDuck(ped: number | IPed, toggleType: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskToggleDuck(_ped, toggleType);
}

/**
 * duration in milliseconds
 * 
 * Hash: 0x1DDA930A0AC38571 | Since: 323
 */
export function turnPedToFaceCoord(ped: number | IPed, pos: Vector3, duration: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskTurnPedToFaceCoord(_ped, pos.x, pos.y, pos.z, duration);
}

/**
 * duration: the amount of time in milliseconds to do the task. -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 * 
 * Hash: 0x5AD23D40115353AC | Since: 323
 */
export function turnPedToFaceEntity(ped: number | IPed, entity: number | IEntity, duration: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskTurnPedToFaceEntity(_ped, _entity, duration);
}

/**
 * Actually has 3 params, not 2.
 * 
 * p0: Ped
 * p1: int (or bool?)
 * p2: int
 * 
 * Hash: 0xBD2A8EC3AF4DE7DB | Since: 323
 */
export function useMobilePhone(ped: number | IPed, usePhone: boolean, desiredPhoneMode: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseMobilePhone(_ped, usePhone, desiredPhoneMode);
}

/**
 * No comment provided
 * 
 * Hash: 0x5EE02954A14C69DB | Since: 323
 */
export function useMobilePhoneTimed(ped: number | IPed, duration: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseMobilePhoneTimed(_ped, duration);
}

/**
 * p5 is always 0 in scripts
 * 
 * Hash: 0x9FDA1B3D7E7028B3 | Since: 323
 */
export function useNearestScenarioChainToCoord(ped: number | IPed, pos: Vector3, maxRange: number, timeToLeave: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseNearestScenarioChainToCoord(_ped, pos.x, pos.y, pos.z, maxRange, timeToLeave);
}

/**
 * p5 is always -1 or 0 in scripts
 * 
 * Hash: 0x97A28E63F0BA5631 | Since: 323
 */
export function useNearestScenarioChainToCoordWarp(ped: number | IPed, pos: Vector3, radius: number, timeToLeave: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseNearestScenarioChainToCoordWarp(_ped, pos.x, pos.y, pos.z, radius, timeToLeave);
}

/**
 * Updated variables
 * 
 * `An alternative to TASK::TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP. Makes the ped walk to the scenario instead.`
 * 
 * Hash: 0x277F471BA9DB000B | Since: 323
 */
export function useNearestScenarioToCoord(ped: number | IPed, pos: Vector3, distance: number, duration: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseNearestScenarioToCoord(_ped, pos.x, pos.y, pos.z, distance, duration);
}

/**
 * No comment provided
 * 
 * Hash: 0x58E2E0F23F6B76C3 | Since: 323
 */
export function useNearestScenarioToCoordWarp(ped: number | IPed, pos: Vector3, radius: number, timeToLeave: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseNearestScenarioToCoordWarp(_ped, pos.x, pos.y, pos.z, radius, timeToLeave);
}

/**
 * No comment provided
 * 
 * Hash: 0x447C1E9EF844BC0F | Since: 323
 */
export function vehicleAimAtCoord(ped: number | IPed, pos: Vector3): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskVehicleAimAtCoord(_ped, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xE41885592B08B097 | Since: 323
 */
export function vehicleAimAtPed(ped: number | IPed, target: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskVehicleAimAtPed(_ped, _target);
}

/**
 * chases targetEnt fast and aggressively
 * --
 * Makes ped (needs to be in vehicle) chase targetEnt.
 * 
 * Hash: 0x3C08A8E30363B353 | Since: 323
 */
export function vehicleChase(driver: number | IPed, targetEnt: number | IEntity): void {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    const _targetEnt = targetEnt instanceof IEntity ? targetEnt.handle() : targetEnt;
    TaskVehicleChase(_driver, _targetEnt);
}

/**
 * info about driving modes: https://gtaforums.com/topic/822314-guide-driving-styles/
 * 
 * Hash: 0xE2A2AA2F659D77A7 | Since: 323
 */
export function vehicleDriveToCoord(ped: number | IPed, vehicle: number | IVehicle, pos: Vector3, speed: number, vehicleModel: number | string, drivingMode: number, stopRange: number, straightLineDistance: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof vehicleModel === 'string') vehicleModel = GetHashKey(vehicleModel)
    TaskVehicleDriveToCoord(_ped, _vehicle, pos.x, pos.y, pos.z, speed, undefined, vehicleModel, drivingMode, stopRange, straightLineDistance);
}

/**
 * No comment provided
 * 
 * Hash: 0x158BB33F920D360C | Since: 323
 */
export function vehicleDriveToCoordLongrange(ped: number | IPed, vehicle: number | IVehicle, pos: Vector3, speed: number, driveMode: number, stopRange: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleDriveToCoordLongrange(_ped, _vehicle, pos.x, pos.y, pos.z, speed, driveMode, stopRange);
}

/**
 * No comment provided
 * 
 * Hash: 0x480142959D337D00 | Since: 323
 */
export function vehicleDriveWander(ped: number | IPed, vehicle: number | IVehicle, speed: number, drivingStyle: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleDriveWander(_ped, _vehicle, speed, drivingStyle);
}

/**
 * Makes a ped follow the targetVehicle with <minDistance> in between.
 * 
 * note: minDistance is ignored if drivingstyle is avoiding traffic, but Rushed is fine.
 * 
 * Mode: The mode defines the relative position to the targetVehicle. The ped will try to position its vehicle there.
 * -1 = behind
 * 0 = ahead
 * 1 = left
 * 2 = right
 * 3 = back left
 * 4 = back right
 * 
 * if the target is closer than noRoadsDistance, the driver will ignore pathing/roads and follow you directly.
 * 
 * Driving Styles guide: gtaforums.com/topic/822314-guide-driving-styles/
 * 
 * Hash: 0x0FA6E4B75F302400 | Since: 323
 */
export function vehicleEscort(ped: number | IPed, vehicle: number | IVehicle, targetVehicle: number | IVehicle, mode: number, speed: number, drivingStyle: number, minDistance: number, minHeightAboveTerrain: number, noRoadsDistance: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    TaskVehicleEscort(_ped, _vehicle, _targetVehicle, mode, speed, drivingStyle, minDistance, minHeightAboveTerrain, noRoadsDistance);
}

/**
 * Makes a ped in a vehicle follow an entity (ped, vehicle, etc.)
 * 
 * drivingStyle: http://gtaforums.com/topic/822314-guide-driving-styles/
 * 
 * Hash: 0xFC545A9F0626E3B6 | Since: 323
 */
export function vehicleFollow(driver: number | IPed, vehicle: number | IVehicle, targetEntity: number | IEntity, speed: number, drivingStyle: number, minDistance: number): void {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    TaskVehicleFollow(_driver, _vehicle, _targetEntity, speed, drivingStyle, minDistance);
}

/**
 * 
 * 
 * p2 = Waypoint recording string (found in update\update.rpf\x64\levels\gta5\waypointrec.rpf
 * p3 = 786468
 * p4 = 0
 * p5 = 16
 * p6 = -1 (angle?)
 * p7/8/9 = usually v3.zero
 * p10 = bool (repeat?)
 * p11 = 1073741824
 * 
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * 
 * Hash: 0x3123FAA6DB1CF7ED | Since: 323
 */
export function vehicleFollowWaypointRecording(ped: number | IPed, vehicle: number | IVehicle, WPRecording: string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleFollowWaypointRecording(_ped, _vehicle, WPRecording, 0, 0, 0, 0, 0, false, 0);
}

/**
 * Differs from TASK_VEHICLE_DRIVE_TO_COORDS in that it will pick the shortest possible road route without taking one-way streets and other "road laws" into consideration.
 * 
 * WARNING:
 * A behaviorFlag value of 0 will result in a clunky, stupid driver!
 * 
 * Recommended settings:
 * speed = 30.0f,
 * behaviorFlag = 156,
 * stoppingRange = 5.0f;
 * 
 * If you simply want to have your driver move to a fixed location, call it only once, or, when necessary in the event of interruption.
 * 
 * If using this to continually follow a Ped who is on foot:  You will need to run this in a tick loop.  Call it in with the Ped's updated coordinates every 20 ticks or so and you will have one hell of a smart, fast-reacting NPC driver -- provided he doesn't get stuck.  If your update frequency is too fast, the Ped may not have enough time to figure his way out of being stuck, and thus, remain stuck.  One way around this would be to implement an "anti-stuck" mechanism, which allows the driver to realize he's stuck, temporarily pause the tick, unstuck, then resume the tick.
 * 
 * EDIT:  This is being discussed in more detail at http://gtaforums.com/topic/818504-any-idea-on-how-to-make-peds-clever-and-insanely-fast-c/
 * 
 * Hash: 0x195AEEB13CEFE2EE | Since: 323
 */
export function vehicleGotoNavmesh(ped: number | IPed, vehicle: number | IVehicle, pos: Vector3, speed: number, behaviorFlag: number, stoppingRange: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleGotoNavmesh(_ped, _vehicle, pos.x, pos.y, pos.z, speed, behaviorFlag, stoppingRange);
}

/**
 * pilot, vehicle and altitude are rather self-explanatory.
 * 
 * p4: is unused variable in the function.
 * 
 * entityToFollow: you can provide a Vehicle entity or a Ped entity, the heli will protect them.
 * 
 * 'targetSpeed':  The pilot will dip the nose AS MUCH AS POSSIBLE so as to reach this value AS FAST AS POSSIBLE.  As such, you'll want to modulate it as opposed to calling it via a hard-wired, constant #.
 * 
 * 'radius' isn't just "stop within radius of X of target" like with ground vehicles.  In this case, the pilot will fly an entire circle around 'radius' and continue to do so.
 * 
 * NOT CONFIRMED:  p7 appears to be a FlyingStyle enum.  Still investigating it as of this writing, but playing around with values here appears to result in different -behavior- as opposed to offsetting coordinates, altitude, target speed, etc.
 * 
 * NOTE: If the pilot finds enemies, it will engage them until it kills them, but will return to protect the ped/vehicle given shortly thereafter.
 * 
 * Hash: 0x1E09C32048FEFD1C | Since: 323
 */
export function vehicleHeliProtect(pilot: number | IPed, vehicle: number | IVehicle, entityToFollow: number | IEntity, targetSpeed: number, drivingFlags: number, radius: number, altitude: number, heliFlags: number): void {
    const _pilot = pilot instanceof IPed ? pilot.handle() : pilot;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _entityToFollow = entityToFollow instanceof IEntity ? entityToFollow.handle() : entityToFollow;
    TaskVehicleHeliProtect(_pilot, _vehicle, _entityToFollow, targetSpeed, drivingFlags, radius, altitude, heliFlags);
}

/**
 * missionType: https://alloc8or.re/gta5/doc/enums/eVehicleMissionType.txt
 * 
 * Hash: 0x659427E0EF36BCDE | Since: 323
 */
export function vehicleMission(driver: number | IPed, vehicle: number | IVehicle, vehicleTarget: number | IVehicle, missionType: number, cruiseSpeed: number, drivingStyle: number, targetReached: number, straightLineDistance: number, DriveAgainstTraffic: boolean): void {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _vehicleTarget = vehicleTarget instanceof IVehicle ? vehicleTarget.handle() : vehicleTarget;
    TaskVehicleMission(_driver, _vehicle, _vehicleTarget, missionType, cruiseSpeed, drivingStyle, targetReached, straightLineDistance, DriveAgainstTraffic);
}

/**
 * See TASK_VEHICLE_MISSION
 * 
 * Hash: 0xF0AF20AA7731F8C3 | Since: 323
 */
export function vehicleMissionCoorsTarget(ped: number | IPed, vehicle: number | IVehicle, pos: Vector3, mission: number, cruiseSpeed: number, drivingStyle: number, targetReached: number, straightLineDistance: number, DriveAgainstTraffic: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleMissionCoorsTarget(_ped, _vehicle, pos.x, pos.y, pos.z, mission, cruiseSpeed, drivingStyle, targetReached, straightLineDistance, DriveAgainstTraffic);
}

/**
 * See TASK_VEHICLE_MISSION
 * 
 * Hash: 0x9454528DF15D657A | Since: 323
 */
export function vehicleMissionPedTarget(ped: number | IPed, vehicle: number | IVehicle, pedTarget: number | IPed, missionType: number, maxSpeed: number, drivingStyle: number, minDistance: number, straightLineDistance: number, DriveAgainstTraffic: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _pedTarget = pedTarget instanceof IPed ? pedTarget.handle() : pedTarget;
    TaskVehicleMissionPedTarget(_ped, _vehicle, _pedTarget, missionType, maxSpeed, drivingStyle, minDistance, straightLineDistance, DriveAgainstTraffic);
}

/**
 * Modes:
 * 0 - ignore heading
 * 1 - park forward
 * 2 - park backwards
 * 
 * Depending on the angle of approach, the vehicle can park at the specified heading or at its exact opposite (-180) angle.
 * 
 * Radius seems to define how close the vehicle has to be -after parking- to the position for this task considered completed. If the value is too small, the vehicle will try to park again until it's exactly where it should be. 20.0 Works well but lower values don't, like the radius is measured in centimeters or something.
 * 
 * Hash: 0x0F3E34E968EA374E | Since: 323
 */
export function vehiclePark(ped: number | IPed, vehicle: number | IVehicle, pos: Vector3, heading: number, mode: number, radius: number, keepEngineOn: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehiclePark(_ped, _vehicle, pos.x, pos.y, pos.z, heading, mode, radius, keepEngineOn);
}

/**
 * Most probably plays a specific animation on vehicle. For example getting chop out of van etc...
 * 
 * Here's how its used -
 * 
 * `TASK::TASK_VEHICLE_PLAY_ANIM(l_325, "rcmnigel1b", "idle_speedo");`
 * 
 * `TASK::TASK_VEHICLE_PLAY_ANIM(l_556[0\/\*1\*\/], "missfra0_chop_drhome", "InCar_GetOutofBack_Speedo");`
 * 
 * FYI : Speedo is the name of van in which chop was put in the mission.
 * 
 * Hash: 0x69F5C3BD0F3EBD89 | Since: 323
 */
export function vehiclePlayAnim(vehicle: number | IVehicle, animationSet: string, animationName: string): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehiclePlayAnim(_vehicle, animationSet, animationName);
}

/**
 * No comment provided
 * 
 * Hash: 0x5190796ED39C9B6D | Since: 323
 */
export function vehicleShootAtCoord(ped: number | IPed, pos: Vector3, fireTolerance: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskVehicleShootAtCoord(_ped, pos.x, pos.y, pos.z, fireTolerance);
}

/**
 * No comment provided
 * 
 * Hash: 0x10AB107B887214D8 | Since: 323
 */
export function vehicleShootAtPed(ped: number | IPed, target: number | IPed, fireTolerance: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskVehicleShootAtPed(_ped, _target, fireTolerance);
}

/**
 * '1 - brake
 * '3 - brake + reverse
 * '4 - turn left 90 + braking
 * '5 - turn right 90 + braking
 * '6 - brake strong (handbrake?) until time ends
 * '7 - turn left + accelerate
 * '8 - turn right + accelerate
 * '9 - weak acceleration
 * '10 - turn left + restore wheel pos to center in the end
 * '11 - turn right + restore wheel pos to center in the end
 * '13 - turn left + go reverse
 * '14 - turn left + go reverse
 * '16 - crash the game after like 2 seconds :)
 * '17 - keep actual state, game crashed after few tries
 * '18 - game crash
 * '19 - strong brake + turn left/right
 * '20 - weak brake + turn left then turn right
 * '21 - weak brake + turn right then turn left
 * '22 - brake + reverse
 * '23 - accelerate fast
 * '24 - brake
 * '25 - brake turning left then when almost stopping it turns left more
 * '26 - brake turning right then when almost stopping it turns right more
 * '27 - brake until car stop or until time ends
 * '28 - brake + strong reverse acceleration
 * '30 - performs a burnout (brake until stop + brake and accelerate)
 * '31 - accelerate + handbrake
 * '32 - accelerate very strong
 * 
 * Seems to be this:
 * Works on NPCs, but overrides their current task. If inside a task sequence (and not being the last task), "time" will work, otherwise the task will be performed forever until tasked with something else
 * 
 * Hash: 0xC429DCEEB339E129 | Since: 323
 */
export function vehicleTempAction(driver: number | IPed, vehicle: number | IVehicle, action: number, time: number): void {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleTempAction(_driver, _vehicle, action, time);
}

/**
 * No comment provided
 * 
 * Hash: 0xE054346CA3A0F315 | Since: 323
 */
export function wanderInArea(ped: number | IPed, pos: Vector3, radius: number, minimalLength: number, timeBetweenWalks: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskWanderInArea(_ped, pos.x, pos.y, pos.z, radius, minimalLength, timeBetweenWalks);
}

/**
 * No comment provided
 * 
 * Hash: 0x6919A2F136426098 | Since: 1868
 */
export function wanderSpecific(ped: number | IPed, conditionalAnimGroupStr: string, conditionalAnimStr: string, heading: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskWanderSpecific(_ped, conditionalAnimGroupStr, conditionalAnimStr, heading);
}

/**
 * Makes ped walk around the area.
 * 
 * set p1 to 10.0f and p2 to 10 if you want the ped to walk anywhere without a duration.
 * 
 * Hash: 0xBB9CE077274F6A1B | Since: 323
 */
export function wanderStandard(ped: number | IPed, heading: number, flags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskWanderStandard(_ped, heading, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E01E9E8D89F8276 | Since: 2545
 */
export function warpPedDirectlyIntoCover(ped: number | IPed, time: number, allowPeekingAndFiring: boolean, forceInitialFacingDirection: boolean, forceFaceLeft: boolean, identifier: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskWarpPedDirectlyIntoCover(_ped, time, allowPeekingAndFiring, forceInitialFacingDirection, forceFaceLeft, identifier);
}

/**
 * Seat Numbers
 * -------------------------------
 * Driver = -1
 * Any = -2
 * Left-Rear = 1
 * Right-Front = 0
 * Right-Rear = 2
 * Extra seats = 3-14(This may differ from vehicle type e.g. Firetruck Rear Stand, Ambulance Rear)
 * 
 * Hash: 0x9A7D091411C5F684 | Since: 323
 */
export function warpPedIntoVehicle(ped: number | IPed, vehicle: number | IVehicle, seat: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskWarpPedIntoVehicle(_ped, _vehicle, seat);
}

/**
 * EX: Function.Call(Ped1, Ped2, Time, 0);
 * 
 * The last parameter is always 0 for some reason I do not know. The first parameter is the pedestrian who will writhe to the pedestrian in the other parameter. The third paremeter is how long until the Writhe task ends. When the task ends, the ped will die. If set to -1, he will not die automatically, and the task will continue until something causes it to end. This can be being touched by an entity, being shot, explosion, going into ragdoll, having task cleared. Anything that ends the current task will kill the ped at this point.
 * 
 * 
 * 
 * Third parameter does not appear to be time. The last parameter is not implemented (It's not used, regardless of value).
 * 
 * Hash: 0xCDDC2B77CE54AC6E | Since: 323
 */
export function writhe(ped: number | IPed, target: number | IPed, minFireLoops: number, startState: number, forceShootOnGround: boolean, shootFromGroundTimer: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskWrithe(_ped, _target, minFireLoops, startState, forceShootOnGround, shootFromGroundTimer);
}

/**
 * No comment provided
 * 
 * Hash: 0x67406F2C8F87FC4F | Since: 323
 */
export function uncuffPed(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    UncuffPed(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x9724FB59A3E72AD0 | Since: 323
 */
export function updateAimGunScriptedTarget(ped: number | IPed, target: number | IPed, pos: Vector3, disableBlockingClip: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    UpdateTaskAimGunScriptedTarget(_ped, _target, pos.x, pos.y, pos.z, disableBlockingClip);
}

/**
 * No comment provided
 * 
 * Hash: 0xA98FCAFD7893C834 | Since: 323
 */
export function updateHandsUpDuration(ped: number | IPed, duration: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    UpdateTaskHandsUpDuration(_ped, duration);
}

/**
 * No comment provided
 * 
 * Hash: 0xE4973DBDBE6E44B3 | Since: 323
 */
export function updateSweepAimEntity(ped: number | IPed, entity: number | IEntity): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    UpdateTaskSweepAimEntity(_ped, _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xBB106883F5201FC4 | Since: 323
 */
export function updateSweepAimPosition(ped: number | IPed, pos: Vector3): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    UpdateTaskSweepAimPosition(_ped, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A353B8E6B1095B5 | Since: 323
 */
export function useWaypointRecordingAsAssistedMovementRoute(name: string): void {
    UseWaypointRecordingAsAssistedMovementRoute(name, false, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE435D3539EFDCD1B | Since: 3570
 */
export function vehicleWaypointPlaybackGetIsPaused(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0xE435D3539EFDCD1B', _vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x121F0593E0A431D7 | Since: 323
 */
export function vehicleWaypointPlaybackOverrideSpeed(vehicle: number | IVehicle, speed: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    VehicleWaypointPlaybackOverrideSpeed(_vehicle, speed);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A4E6AC373666BC5 | Since: 323
 */
export function vehicleWaypointPlaybackPause(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    VehicleWaypointPlaybackPause(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC04FCAA7839D492 | Since: 323
 */
export function vehicleWaypointPlaybackResume(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    VehicleWaypointPlaybackResume(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5CEB25A7D2848963 | Since: 323
 */
export function vehicleWaypointPlaybackUseDefaultSpeed(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    VehicleWaypointPlaybackUseDefaultSpeed(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x701375A7D43F01CB | Since: 323
 */
export function waypointPlaybackGetIsPaused(): boolean {
    return WaypointPlaybackGetIsPaused(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D7D2B47FA788E85 | Since: 323
 */
export function waypointPlaybackOverrideSpeed(): void {
    WaypointPlaybackOverrideSpeed(undefined, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0F342546AA06FED5 | Since: 323
 */
export function waypointPlaybackPause(): void {
    WaypointPlaybackPause(undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x244F70C84C547D2D | Since: 323
 */
export function waypointPlaybackResume(): void {
    WaypointPlaybackResume(undefined, false, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8968400D900ED8B3 | Since: 323
 */
export function waypointPlaybackStartAimingAtCoord(ped: number | IPed, pos: Vector3): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    WaypointPlaybackStartAimingAtCoord(_ped, pos.x, pos.y, pos.z, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x20E330937C399D29 | Since: 323
 */
export function waypointPlaybackStartAimingAtPed(ped: number | IPed, target: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    WaypointPlaybackStartAimingAtPed(_ped, _target, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x057A25CFCC9DB671 | Since: 323
 */
export function waypointPlaybackStartShootingAtCoord(ped: number | IPed, pos: Vector3, firingPattern: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    WaypointPlaybackStartShootingAtCoord(_ped, pos.x, pos.y, pos.z, false, firingPattern);
}

/**
 * No comment provided
 * 
 * Hash: 0xE70BA7B90F8390DC | Since: 323
 */
export function waypointPlaybackStartShootingAtPed(ped: number | IPed, ped2: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    WaypointPlaybackStartShootingAtPed(_ped, _ped2, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x47EFA040EBB8E2EA | Since: 323
 */
export function waypointPlaybackStopAimingOrShooting(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    WaypointPlaybackStopAimingOrShooting(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x6599D834B12D0800 | Since: 323
 */
export function waypointPlaybackUseDefaultSpeed(): void {
    WaypointPlaybackUseDefaultSpeed(undefined);
}

/**
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * For a full list of the points, see here: goo.gl/wIH0vn
 * 
 * Hash: 0xB629A298081F876F | Since: 323
 */
export function waypointRecordingGetClosestWaypoint(name: string, pos: Vector3): [boolean, number] {
    return WaypointRecordingGetClosestWaypoint(name, pos.x, pos.y, pos.z);
}

/**
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * For a full list of the points, see here: goo.gl/wIH0vn
 * 
 * Hash: 0x2FB897405C90B361 | Since: 323
 */
export function waypointRecordingGetCoord(name: string, point: number): [boolean, Vector3] {
    return WaypointRecordingGetCoord(name, point);
}

/**
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * For a full list of the points, see here: goo.gl/wIH0vn
 * 
 * Hash: 0x5343532C01A07234 | Since: 323
 */
export function waypointRecordingGetNumPoints(name: string): [boolean, number] {
    return WaypointRecordingGetNumPoints(name);
}

/**
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * 
 * Hash: 0x005622AEBC33ACA9 | Since: 323
 */
export function waypointRecordingGetSpeedAtPoint(name: string, point: number): number {
    return WaypointRecordingGetSpeedAtPoint(name, point);
}

/**
 * No comment provided
 * 
 * Hash: 0x0EFE4834A2F40563 | Since: 3570
 */
export function setAmbientPedEnableCollisionOnNetworkCloneWhenFixed(ped: number | IPed, enable: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x0EFE4834A2F40563', _ped, enable);
}

/**
 * No comment provided
 * 
 * Hash: 0x32F6EEF031F943DC | Since: 3095
 */
export function setScriptEnableCollisionOnNetworkCloneWhenFixed(ped: number | IPed, enable: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x32F6EEF031F943DC', _ped, enable);
}

