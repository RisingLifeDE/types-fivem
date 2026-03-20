import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0xFCD5C8E06E502F5A | Since: 323 | API-Set: unknown
 */
export function addNavmeshBlockingObject(): number {
    return AddNavmeshBlockingObject(0, 0, 0, 0, 0, 0, 0, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x387EAD7EE42F6685 | Since: 323 | API-Set: unknown
 */
export function addNavmeshRequiredRegion(x: number, y: number, radius: number): void {
    AddNavmeshRequiredRegion(x, y, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA76052DDA9BFC3E | Since: 323 | API-Set: unknown
 */
export function adjustAmbientPedSpawnDensitiesThisFrame(): void {
    Citizen.invokeNative('0xAA76052DDA9BFC3E', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8415D95B194A3AEA | Since: 323 | API-Set: unknown
 */
export function areAllNavmeshRegionsLoaded(): boolean {
    return AreAllNavmeshRegionsLoaded();
}

/**
 * No comment provided
 * 
 * Hash: 0xF7B79A50B905A30D | Since: 323 | API-Set: unknown
 */
export function areNodesLoadedForArea(x1: number, y1: number, x2: number, y2: number): boolean {
    return AreNodesLoadedForArea(x1, y1, x2, y2);
}

/**
 * Calculates the travel distance between a set of points.
 * 
 * Doesn't seem to correlate with distance on gps sometimes.
 * This function returns the value 100000.0 over long distances, seems to be a failure mode result, potentially occurring when not all path nodes are loaded into pathfind.
 * 
 * Hash: 0xADD95C7005C4A197 | Since: 323 | API-Set: unknown
 */
export function calculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
    return CalculateTravelDistanceBetweenPoints(x1, y1, z1, x2, y2, z2);
}

/**
 * Clears a disabled GPS route area from a certain index previously set using `SET_GPS_DISABLED_ZONE_AT_INDEX`.
 * 
 * Hash: 0x2801D0012266DF07 | Since: 323 | API-Set: unknown
 */
export function clearGpsDisabledZoneAtIndex(index: number): void {
    ClearGpsDisabledZoneAtIndex(index);
}

/**
 * Set toggle true to disable navmesh.
 * Set toggle false to enable navmesh.
 * 
 * Hash: 0x4C8872D8CDBE1B8B | Since: 323 | API-Set: unknown
 */
export function disableNavmeshInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, toggle: boolean): void {
    DisableNavmeshInArea(x1, y1, z1, x2, y2, z2, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0EAEB0DB4B132399 | Since: 323 | API-Set: unknown
 */
export function doesNavmeshBlockingObjectExist(): boolean {
    return DoesNavmeshBlockingObjectExist(undefined);
}

/**
 * p3 is 0 in the only game script occurrence (trevor3) but 1 doesn't seem to make a difference
 * 
 * distToNxJunction seems to be the distance in metres * 10.0f
 * 
 * direction:
 * 0 = This happens randomly during the drive for seemingly no reason but if you consider that this native is only used in trevor3, it seems to mean "Next frame, stop whatever's being said and tell the player the direction."
 * 1 = Route is being calculated or the player is going in the wrong direction
 * 2 = Please Proceed the Highlighted Route
 * 3 = In (distToNxJunction) Turn Left
 * 4 = In (distToNxJunction) Turn Right
 * 5 = In (distToNxJunction) Keep Straight
 * 6 = In (distToNxJunction) Turn Sharply To The Left
 * 7 = In (distToNxJunction) Turn Sharply To The Right
 * 8 = Route is being recalculated or the navmesh is confusing. This happens randomly during the drive but consistently at {2044.0358, 2996.6116, 44.9717} if you face towards the bar and the route needs you to turn right. In that particular case, it could be a bug with how the turn appears to be 270 deg. CCW instead of "right." Either way, this seems to be the engine saying "I don't know the route right now."
 * 
 * return value set to 0 always
 * 
 * Hash: 0xF90125F1F79ECDF8 | Since: 323 | API-Set: unknown
 */
export function generateDirectionsToCoord(pos: Vector3): [number, number, number, number] {
    return GenerateDirectionsToCoord(pos.x, pos.y, pos.z, false);
}

/**
 * Returns CGameWorldHeightMap's minimum Z among all grid nodes that intersect with the specified rectangle.
 * 
 * Hash: 0x3599D741C9AC6310 | Since: 323 | API-Set: unknown
 */
export function getApproxFloorForArea(x1: number, y1: number, x2: number, y2: number): number {
    return GetHeightmapBottomZForArea(x1, y1, x2, y2);
}

/**
 * Returns CGameWorldHeightMap's minimum Z value at specified point (grid node).
 * 
 * Hash: 0x336511A34F2E5185 | Since: 323 | API-Set: unknown
 */
export function getApproxFloorForPoint(x: number, y: number): number {
    return GetHeightmapBottomZForPosition(x, y);
}

/**
 * Returns CGameWorldHeightMap's maximum Z among all grid nodes that intersect with the specified rectangle.
 * 
 * Hash: 0x8ABE8608576D9CE3 | Since: 323 | API-Set: unknown
 */
export function getApproxHeightForArea(x1: number, y1: number, x2: number, y2: number): number {
    return GetHeightmapTopZForArea(x1, y1, x2, y2);
}

/**
 * Returns CGameWorldHeightMap's maximum Z value at specified point (grid node).
 * 
 * Hash: 0x29C24BFBED8AB8FB | Since: 323 | API-Set: unknown
 */
export function getApproxHeightForPoint(x: number, y: number): number {
    return GetHeightmapTopZForPosition(x, y);
}

/**
 * Get the closest vehicle node to a given position.
 * 
 * Hash: 0x2EABE3B06F58C1BE | Since: 323 | API-Set: unknown
 */
export function getClosestMajorVehicleNode(pos: Vector3, unknown1: number, unknown2: number): [boolean, Vector3] {
    return GetClosestMajorVehicleNode(pos.x, pos.y, pos.z, unknown1, unknown2);
}

/**
 * p1 seems to be always 1.0f in the scripts
 * 
 * Hash: 0x132F52BBA570FE92 | Since: 323 | API-Set: unknown
 */
export function getClosestRoad(pos: Vector3): [boolean, Vector3, Vector3, any, any, number] {
    return GetClosestRoad(pos.x, pos.y, pos.z, 0, 0, false);
}

/**
 * https://gtaforums.com/topic/843561-pathfind-node-types
 * 
 * Hash: 0x240A18690AE96513 | Since: 323 | API-Set: unknown
 */
export function getClosestVehicleNode(pos: Vector3, nodeFlags: number): [boolean, Vector3] {
    return GetClosestVehicleNode(pos.x, pos.y, pos.z, nodeFlags, 0, 0);
}

/**
 * p5, p6 and p7 seems to be about the same as p4, p5 and p6 for GET_CLOSEST_VEHICLE_NODE. p6 and/or p7 has something to do with finding a node on the same path/road and same direction(at least for this native, something to do with the heading maybe). Edit this when you find out more.
 * 
 * nodeType: 0 = main roads, 1 = any dry path, 3 = water
 * p6 is always 3.0
 * p7 is always 0
 * 
 * gtaforums.com/topic/843561-pathfind-node-types
 * 
 * Example of usage, moving vehicle to closest path/road:
 * `Vector3 coords = ENTITY::GET_ENTITY_COORDS(playerVeh, true);`
 * Vector3 closestVehicleNodeCoords;
 * float roadHeading;
 * `PATHFIND::GET_CLOSEST_VEHICLE_NODE_WITH_HEADING(coords.x, coords.y, coords.z, &closestVehicleNodeCoords, &roadHeading, 1, 3, 0);`
 * `ENTITY::SET_ENTITY_HEADING(playerVeh, roadHeading);`
 * `ENTITY::SET_ENTITY_COORDS(playerVeh, closestVehicleNodeCoords.x, closestVehicleNodeCoords.y, closestVehicleNodeCoords.z, 1, 0, 0, 1);`
 * `VEHICLE::SET_VEHICLE_ON_GROUND_PROPERLY(playerVeh);`
 * 
 * ------------------------------------------------------------------
 * C# Example (ins1de) : https://pastebin.com/fxtMWAHD
 * 
 * Hash: 0xFF071FB798B803B0 | Since: 323 | API-Set: unknown
 */
export function getClosestVehicleNodeWithHeading(pos: Vector3, nodeType: number): [boolean, Vector3, number] {
    return GetClosestVehicleNodeWithHeading(pos.x, pos.y, pos.z, nodeType, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x869DAACBBE9FA006 | Since: 323 | API-Set: unknown
 */
export function getGpsBlipRouteFound(): boolean {
    return GetGpsBlipRouteFound();
}

/**
 * No comment provided
 * 
 * Hash: 0xBBB45C3CF5C8AA85 | Since: 323 | API-Set: unknown
 */
export function getGpsBlipRouteLength(): number {
    return GetGpsBlipRouteLength();
}

/**
 * Gets the next zone that has been disabled using SET_GPS_DISABLED_ZONE_AT_INDEX.
 * 
 * Hash: 0xD3A6A0EF48823A8C | Since: 323 | API-Set: unknown
 */
export function getNextGpsDisabledZoneIndex(): number {
    return GetNextGpsDisabledZoneIndex();
}

/**
 * No comment provided
 * 
 * Hash: 0xE50E52416CCF948B | Since: 323 | API-Set: unknown
 */
export function getNthClosestVehicleNode(pos: Vector3, nthClosest: number, nodeFlags: number, unknown1: number, unknown2: number): [boolean, Vector3] {
    return GetNthClosestVehicleNode(pos.x, pos.y, pos.z, nthClosest, nodeFlags, unknown1, unknown2);
}

/**
 * See gtaforums.com/topic/843561-pathfind-node-types for node type info. 0 = paved road only, 1 = any road, 3 = water
 * 
 * p10 always equals 3.0
 * p11 always equals 0
 * 
 * Hash: 0x45905BE8654AE067 | Since: 323 | API-Set: unknown
 */
export function getNthClosestVehicleNodeFavourDirection(pos: Vector3, desiredX: number, desiredY: number, desiredZ: number, nthClosest: number, nodeFlags: number): [boolean, Vector3, number] {
    return GetNthClosestVehicleNodeFavourDirection(pos.x, pos.y, pos.z, desiredX, desiredY, desiredZ, nthClosest, nodeFlags, 0, 0);
}

/**
 * Returns the id.
 * 
 * Hash: 0x22D7275A79FE8215 | Since: 323 | API-Set: unknown
 */
export function getNthClosestVehicleNodeId(pos: Vector3, nth: number, nodeFlags: number): number {
    return GetNthClosestVehicleNodeId(pos.x, pos.y, pos.z, nth, nodeFlags, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x6448050E9C2A7207 | Since: 323 | API-Set: unknown
 */
export function getNthClosestVehicleNodeIdWithHeading(pos: Vector3, nthClosest: number, nodeFlags: number): [number, Vector3, number] {
    return GetNthClosestVehicleNodeIdWithHeading(pos.x, pos.y, pos.z, nthClosest, nodeFlags, 0, 0);
}

/**
 * Get the nth closest vehicle node and its heading.
 * 
 * Hash: 0x80CA6A8B6C094CC4 | Since: 323 | API-Set: unknown
 */
export function getNthClosestVehicleNodeWithHeading(pos: Vector3, nthClosest: number, nodeFlags: number, unknown3: number, unknown4: number): [boolean, Vector3, number, number] {
    return GetNthClosestVehicleNodeWithHeading(pos.x, pos.y, pos.z, nthClosest, nodeFlags, unknown3, unknown4);
}

/**
 * No comment provided
 * 
 * Hash: 0x01708E8DD3FF8C65 | Since: 323 | API-Set: unknown
 */
export function getNumNavmeshesExistingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
    return GetNumNavmeshesExistingInArea(x1, y1, z1, x2, y2, z2);
}

/**
 * No comment provided
 * 
 * Hash: 0x16F46FB18C8009E4 | Since: 323 | API-Set: unknown
 */
export function getPositionBySideOfRoad(pos: Vector3): [boolean, Vector3] {
    return GetPointOnRoadSide(pos.x, pos.y, pos.z, 0);
}

/**
 * p3 can be 0, 1 or 2.
 * 
 * Hash: 0xF3162836C28F9DA5 | Since: 505 | API-Set: unknown
 */
export function getPosAlongGpsTypeRoute(): [boolean, Vector3] {
    return GetPosAlongGpsTypeRoute(false, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x93E0DB8440B73A7D | Since: 323 | API-Set: unknown
 */
export function getRandomVehicleNode(pos: Vector3, radius: number): [boolean, Vector3, number] {
    return GetRandomVehicleNode(pos.x, pos.y, pos.z, radius, false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA0F8A7517A273C05 | Since: 463 | API-Set: unknown
 */
export function getRoadBoundaryUsingHeading(pos: Vector3, heading: number): [boolean, Vector3] {
    return GetRoadBoundaryUsingHeading(pos.x, pos.y, pos.z, heading);
}

/**
 * Flags are:
 * 1 = 1 = B02_IsFootpath
 * 2 = 4 = !B15_InteractionUnk
 * 4 = 0x20 = !B14_IsInterior
 * 8 = 0x40 = !B07_IsWater
 * 16 = 0x200 = B17_IsFlatGround
 * When onGround == true outPosition is a position located on the nearest pavement.
 * 
 * When a safe coord could not be found the result of a function is false and outPosition == Vector3.Zero.
 * 
 * In the scripts these flags are used: 0, 14, 12, 16, 20, 21, 28. 0 is most commonly used, then 16.
 * 
 * 16 works for me, 0 crashed the script.
 * 
 * Hash: 0xB61C8E878A4199CA | Since: 323 | API-Set: unknown
 */
export function getSafeCoordForPed(pos: Vector3, onGround: boolean, flags: number): [boolean, Vector3] {
    return GetSafeCoordForPed(pos.x, pos.y, pos.z, onGround, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x809549AFC7AEC597 | Since: 2944 | API-Set: unknown
 */
export function getSpawnCoordsForVehicleNode(nodeAddress: number, towardsCoorsX: number, towardsCoorsY: number, towardsCoorsZ: number): [Vector3, number] {
    return Citizen.invokeNative('0x809549AFC7AEC597', nodeAddress, towardsCoorsX, towardsCoorsY, towardsCoorsZ);
}

/**
 * Determines the name of the street which is the closest to the given coordinates.
 * 
 * x,y,z - the coordinates of the street
 * streetName - returns a hash to the name of the street the coords are on
 * crossingRoad - if the coordinates are on an intersection, a hash to the name of the crossing road
 * 
 * `Note: the names are returned as hashes, the strings can be returned using the function HUD::GET_STREET_NAME_FROM_HASH_KEY.`
 * 
 * Hash: 0x2EB41072B4C1E4C0 | Since: 323 | API-Set: unknown
 */
export function getStreetNameAtCoord(pos: Vector3): [number, number] {
    return GetStreetNameAtCoord(pos.x, pos.y, pos.z);
}

/**
 * Returns false for nodes that aren't used for GPS routes.
 * Example:
 * Nodes in Fort Zancudo and LSIA are false
 * 
 * Hash: 0xA2AE5C478B96E3B6 | Since: 323 | API-Set: unknown
 */
export function getVehicleNodeIsGpsAllowed(nodeID: number): boolean {
    return GetVehicleNodeIsGpsAllowed(nodeID);
}

/**
 * Returns true when the node is Offroad. Alleys, some dirt roads, and carparks return true.
 * Normal roads where plenty of Peds spawn will return false
 * 
 * Hash: 0x4F5070AA58F69279 | Since: 323 | API-Set: unknown
 */
export function getVehicleNodeIsSwitchedOff(nodeID: number): boolean {
    return GetVehicleNodeIsSwitchedOff(nodeID);
}

/**
 * Calling this with an invalid node id, will crash the game.
 * Note that IS_VEHICLE_NODE_ID_VALID simply checks if nodeId is not zero. It does not actually ensure that the id is valid.
 * Eg. IS_VEHICLE_NODE_ID_VALID(1) will return true, but will crash when calling GET_VEHICLE_NODE_POSITION().
 * 
 * Hash: 0x703123E5E7D429C2 | Since: 323 | API-Set: unknown
 */
export function getVehicleNodePosition(nodeId: number): Vector3 {
    return GetVehicleNodePosition(nodeId);
}

/**
 * Gets the density and flags of the closest node to the specified position.
 * Density is a value between 0 and 15, indicating how busy the road is.
 * Flags is a bit field.
 * 
 * Hash: 0x0568566ACBB5DEDC | Since: 323 | API-Set: unknown
 */
export function getVehicleNodeProperties(pos: Vector3): [boolean, number, number] {
    return GetVehicleNodeProperties(pos.x, pos.y, pos.z);
}

/**
 * Returns whether navmesh for the region is loaded. The region is a rectangular prism defined by it's top left deepest corner to it's bottom right shallowest corner.
 * 
 * If you can re-word this so it makes more sense, please do. I'm horrible with words sometimes...
 * 
 * Hash: 0xF813C7E63F9062A5 | Since: 323 | API-Set: unknown
 */
export function isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean {
    return IsNavmeshLoadedInArea(x1, y1, z1, x2, y2, z2);
}

/**
 * No comment provided
 * 
 * Hash: 0x705A844002B39DC0 | Since: 944 | API-Set: unknown
 */
export function isNavmeshRequiredRegionInUse(): boolean {
    return IsNavmeshRequiredRegionOwnedByAnyThread();
}

/**
 * Gets a value indicating whether the specified position is on a road.
 * The vehicle parameter is not implemented (ignored).
 * 
 * Hash: 0x125BF4ABFC536B09 | Since: 323 | API-Set: unknown
 */
export function isPointOnRoad(pos: Vector3, vehicle: number | IVehicle): boolean {
    return IsPointOnRoad(pos.x, pos.y, pos.z, vehicle);
}

/**
 * Returns true if the id is non zero.
 * 
 * Hash: 0x1EAF30FCFBF5AF74 | Since: 323 | API-Set: unknown
 */
export function isVehicleNodeIdValid(vehicleNodeId: number): boolean {
    return IsVehicleNodeIdValid(vehicleNodeId);
}

/**
 * No comment provided
 * 
 * Hash: 0xC2AB6BFE34E92F8B | Since: 2802 | API-Set: unknown
 */
export function loadAllPathNodes(_set: boolean): boolean {
    return Citizen.invokeNative('0xC2AB6BFE34E92F8B', _set);
}

/**
 * No comment provided
 * 
 * Hash: 0x46399A7895957C0E | Since: 323 | API-Set: unknown
 */
export function removeNavmeshBlockingObject(): void {
    RemoveNavmeshBlockingObject(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x916F0A3CDEC3445E | Since: 323 | API-Set: unknown
 */
export function removeNavmeshRequiredRegions(): void {
    RemoveNavmeshRequiredRegions();
}

/**
 * Used internally for long range tasks
 * 
 * Hash: 0x07FB139B592FA687 | Since: 323 | API-Set: unknown
 */
export function requestPathNodesInAreaThisFrame(x1: number, y1: number, x2: number, y2: number): boolean {
    return RequestPathsPreferAccurateBoundingstruct(x1, y1, x2, y2);
}

/**
 * Activates Cayo Perico path nodes if passed `1`. GPS navigation will start working, maybe more stuff will change, not sure. It seems if you try to unload (pass `0`) when close to the island, your game might crash.
 * 
 * Hash: 0xF74B1FFA4A15FBEA | Since: 2189 | API-Set: unknown
 */
export function setAllowStreamHeistIslandNodes(_type: number): void {
    SetAiGlobalPathNodesType(_type);
}

/**
 * No comment provided
 * 
 * Hash: 0x228E5C6AD4D74BFD | Since: 323 | API-Set: unknown
 */
export function setAllowStreamPrologueNodes(toggle: boolean): void {
    SetAllPathsCacheBoundingstruct(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0B919E1FB47CC4E0 | Since: 323 | API-Set: unknown
 */
export function setAmbientPedRangeMultiplierThisFrame(multiplier: number): void {
    SetAmbientPedRangeMultiplierThisFrame(multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC20483CD3DD5201 | Since: 323 | API-Set: unknown
 */
export function setGpsDisabledZone(x1: number, y1: number, z1: number, x2: number, y2: number, z3: number): void {
    SetGpsDisabledZone(x1, y1, z1, x2, y2, z3);
}

/**
 * Disables the GPS route displayed on the minimap while within a certain zone (area). When in a disabled zone and creating a waypoint, the GPS route is not shown on the minimap until you are outside of the zone. When disabled, the direct distance is shown on minimap opposed to distance to travel. Seems to only work before setting a waypoint.
 * You can clear the disabled zone with CLEAR_GPS_DISABLED_ZONE_AT_INDEX.
 * 
 * <strong>Setting a waypoint at the same coordinate:</strong>
 * Disabled Zone: https://i.imgur.com/P9VUuxM.png
 * Enabled Zone (normal): https://i.imgur.com/BPi24aw.png
 * 
 * Hash: 0xD0BC1C6FB18EE154 | Since: 323 | API-Set: unknown
 */
export function setGpsDisabledZoneAtIndex(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, index: number): void {
    SetGpsDisabledZoneAtIndex(x1, y1, z1, x2, y2, z2, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x72751156E7678833 | Since: 323 | API-Set: unknown
 */
export function setIgnoreNoGpsFlag(toggle: boolean): void {
    SetIgnoreNoGpsFlag(toggle);
}

/**
 * See: SET_BLIP_ROUTE
 * 
 * Hash: 0x1FC289A0C3FF470F | Since: 323 | API-Set: unknown
 */
export function setIgnoreNoGpsFlagUntilFirstNormalNode(toggle: boolean): void {
    SetIgnoreSecondaryRouteNodes(toggle);
}

/**
 * p6 is always 0
 * 
 * Hash: 0xE04B48F2CC926253 | Since: 323 | API-Set: unknown
 */
export function setPedPathsBackToOriginal(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void {
    SetPedPathsBackToOriginal(x1, y1, z1, x2, y2, z2, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x34F060F4BF92E018 | Since: 323 | API-Set: unknown
 */
export function setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void {
    SetPedPathsInArea(x1, y1, z1, x2, y2, z2, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1EE7063B80FFC77C | Since: 323 | API-Set: unknown
 */
export function setRoadsBackToOriginal(): void {
    SetRoadsBackToOriginal(0, 0, 0, 0, 0, 0, undefined);
}

/**
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * bool p7 - always 1
 * 
 * Hash: 0x0027501B9F3B407E | Since: 323 | API-Set: unknown
 */
export function setRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): void {
    SetRoadsBackToOriginalInAngledArea(x1, y1, z1, x2, y2, z2, width, undefined);
}

/**
 * unknown3 is related to `SEND_SCRIPT_WORLD_STATE_EVENT > CNetworkRoadNodeWorldStateData` in networked environments.
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * 
 * Hash: 0x1A5AA1208AF5DB59 | Since: 323 | API-Set: unknown
 */
export function setRoadsInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, unknown1: boolean, unknown2: boolean, unknown3: boolean): void {
    SetRoadsInAngledArea(x1, y1, z1, x2, y2, z2, width, unknown1, unknown2, unknown3);
}

/**
 * When nodeEnabled is set to false, all nodes in the area get disabled.
 * `GET_VEHICLE_NODE_IS_SWITCHED_OFF` returns true afterwards.
 * If it's true, `GET_VEHICLE_NODE_IS_SWITCHED_OFF` returns false.
 * 
 * Hash: 0xBF1A602B5BA52FEE | Since: 323 | API-Set: unknown
 */
export function setRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, nodeEnabled: boolean, unknown2: boolean): void {
    SetRoadsInArea(x1, y1, z1, x2, y2, z2, nodeEnabled, unknown2);
}

/**
 * No comment provided
 * 
 * Hash: 0x109E99373F290687 | Since: 323 | API-Set: unknown
 */
export function updateNavmeshBlockingObject(): void {
    UpdateNavmeshBlockingObject(undefined, 0, 0, 0, 0, 0, 0, 0, undefined);
}

