/**
 * No comment provided
 *
 * Hash: 0x9777734DAD16992F | Since: 573 | API-Set: unknown
 */
export function canPayAmountToBoss(amount) {
    return CanPayGoon(0, 0, amount);
}
/**
 * Does nothing and always returns false.
 *
 * Hash: 0xE260E0BB9CD995AC | Since: 323 | API-Set: unknown
 */
export function depositVc(amount) {
    return DepositVc(amount);
}
/**
 * This function is hard-coded to always return 1.
 *
 * Hash: 0xE154B48B68EF72BC | Since: 323 | API-Set: unknown
 */
export function hasVcWithdrawalCompleted() {
    return Citizen.invokeNative('0xE154B48B68EF72BC', undefined);
}
/**
 * p1 = 0 (always)
 * p2 = 1 (always)
 *
 * Hash: 0x763B4BD305338F19 | Since: 323 | API-Set: unknown
 */
export function networkBuyAirstrike(cost) {
    NetworkBuyAirstrike(cost, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA3EDDAA42411D3B9 | Since: 323 | API-Set: unknown
 */
export function networkBuyBackupGang(npcProvider) {
    NetworkBuyBackupGang(0, 0, false, false, npcProvider);
}
/**
 * p1 is just an assumption. p2 was false and p3 was true.
 *
 * Hash: 0x7B718E197453F2D9 | Since: 323 | API-Set: unknown
 */
export function networkBuyBounty(amount, victim) {
    const _victim = typeof victim == 'object' ? victim.playerId() : victim;
    NetworkBuyBounty(amount, _victim, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x30FD873ECE50E9F6 | Since: 757 | API-Set: unknown
 */
export function networkBuyContrabandMission(p2) {
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    NetworkBuyContraband(0, 0, p2, false, false);
}
/**
 * The first parameter is the amount spent which is store in a global when this native is called. The global returns 10. Which is the price for both rides.
 *
 * The last 3 parameters are,
 * 2,0,1 in the am_ferriswheel.c
 * 1,0,1 in the am_rollercoaster.c
 *
 *
 * Hash: 0x8A7B3952DD64D2B5 | Since: 323 | API-Set: unknown
 */
export function networkBuyFairgroundRide(amount) {
    NetworkBuyFairgroundRide(amount, undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD9B067E55253E3DD | Since: 323 | API-Set: unknown
 */
export function networkBuyHealthcare(cost) {
    NetworkBuyHealthcare(cost, false, false);
}
/**
 * p1 = 0 (always)
 * p2 = 1 (always)
 *
 * Hash: 0x81AA4610E3FD3A69 | Since: 323 | API-Set: unknown
 */
export function networkBuyHeliStrike(cost) {
    NetworkBuyHeliStrike(cost, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF0077C797F66A355 | Since: 323 | API-Set: unknown
 */
export function networkBuyItem(amount, item, item_name) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    NetworkBuyItem(amount, item, undefined, undefined, false, item_name, undefined, undefined, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x650A08A280870AF6 | Since: 323 | API-Set: unknown
 */
export function networkBuyProperty(cost, propertyName) {
    if (typeof propertyName === 'string')
        propertyName = GetHashKey(propertyName);
    NetworkBuyProperty(cost, propertyName, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x75AF80E61248EEBD | Since: 323 | API-Set: unknown
 */
export function networkBuySmokes() {
    NetworkBuySmokes(0, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3A54E33660DED67F | Since: 323 | API-Set: unknown
 */
export function networkCanBet(amount) {
    return NetworkCanBet(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x5D17BE59D2123284 | Since: 323 | API-Set: unknown
 */
export function networkCanReceivePlayerCash() {
    return NetworkCanReceivePlayerCash(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1C2473301B1C66BA | Since: 323 | API-Set: unknown
 */
export function networkCanShareJobCash() {
    return NetworkCanShareJobCash();
}
/**
 * No comment provided
 *
 * Hash: 0xAB3CAA6B422164DA | Since: 323 | API-Set: unknown
 */
export function networkCanSpend() {
    return NetworkCanSpendMoney(undefined, false, false, false, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7303E27CC6532080 | Since: 323 | API-Set: unknown
 */
export function networkCanSpend2() {
    return NetworkCanSpendMoney2(undefined, false, false, false, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3BD101471C7F9EEC | Since: 1734 | API-Set: unknown
 */
export function networkCasinoBuyChips() {
    return NetworkCasinoPurchaseChips(0, 0);
}
/**
 * GTAO_CASINO_HOUSE
 * GTAO_CASINO_INSIDETRACK
 * GTAO_CASINO_LUCKYWHEEL
 * GTAO_CASINO_BLACKJACK
 * GTAO_CASINO_ROULETTE
 * GTAO_CASINO_SLOTS
 * GTAO_CASINO_PURCHASE_CHIPS
 *
 * NETWORK_C*
 *
 * Hash: 0x158C16F5E4CF41F8 | Since: 1734 | API-Set: unknown
 */
export function networkCasinoCanBet(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return NetworkCasinoCanUseGamblingType(hash);
}
/**
 * No comment provided
 *
 * Hash: 0xF62F6D9528358FE4 | Since: 1734 | API-Set: unknown
 */
export function networkCasinoCanBetAmount() {
    return NetworkCasinoCanGamble(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x394DCDB9E836B7A9 | Since: 1734 | API-Set: unknown
 */
export function networkCasinoCanBetPvc() {
    return NetworkCasinoCanPurchaseChipsWithPvc();
}
/**
 * No comment provided
 *
 * Hash: 0x8968D4D8C6C40C11 | Since: 1734 | API-Set: unknown
 */
export function networkCasinoCanBuyChipsPvc() {
    return NetworkCasinoCanPurchaseChipsWithPvc2();
}
/**
 * No comment provided
 *
 * Hash: 0xED44897CB336F480 | Since: 1734 | API-Set: unknown
 */
export function networkCasinoSellChips() {
    return NetworkCasinoSellChips(0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA921DED15FDF28F5 | Since: 323 | API-Set: unknown
 */
export function networkClearCharacterWallet(characterSlot) {
    NetworkClearCharacterWallet(characterSlot);
}
/**
 * No comment provided
 *
 * Hash: 0x18B7AE224B087E26 | Since: 323 | API-Set: unknown
 */
export function networkDeductCash(amount) {
    NetworkDeductCash(amount, undefined, undefined, false, false, false);
}
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0xCD0F5B5D932AE473 | Since: 323 | API-Set: unknown
 */
export function networkDeferCashTransactionsUntilShopSave() {
    Citizen.invokeNative('0xCD0F5B5D932AE473');
}
/**
 * Note the 2nd parameters are always 1, 0. I have a feeling it deals with your money, wallet, bank. So when you delete the character it of course wipes the wallet cash at that time. So if that was the case, it would be eg, NETWORK_DELETE_CHARACTER(characterIndex, deleteWalletCash, deleteBankCash);
 *
 * Hash: 0x05A50AF38947EB8D | Since: 323 | API-Set: unknown
 */
export function networkDeleteCharacter(characterSlot) {
    NetworkDeleteCharacter(characterSlot, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x0CB1BE0633C024A8 | Since: 573 | API-Set: unknown
 */
export function networkEarnAgency() {
    NetworkEarnBossAgency(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x38482AD49CB905C7 | Since: 2545 | API-Set: unknown
 */
export function networkEarnAgencyContract() {
    Citizen.invokeNative('0x38482AD49CB905C7', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE29F3D5FA63B1B82 | Since: 2545 | API-Set: unknown
 */
export function networkEarnAgencyPhone() {
    Citizen.invokeNative('0xE29F3D5FA63B1B82', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x663B4B9D11742A12 | Since: 2545 | API-Set: unknown
 */
export function networkEarnAgencySafe() {
    Citizen.invokeNative('0x663B4B9D11742A12', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD29334ED1A256DBF | Since: 1868 | API-Set: unknown
 */
export function networkEarnArcade() {
    Citizen.invokeNative('0xD29334ED1A256DBF', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0F99F70C61F14619 | Since: 1604 | API-Set: unknown
 */
export function networkEarnArenaCareerProgression(amount) {
    NetworkEarnFromArenaCareerProgression(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE08256F972C7BB2C | Since: 1604 | API-Set: unknown
 */
export function networkEarnArenaSkillLevelProgression(amount) {
    NetworkEarnFromArenaSkillLevelProgression(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x631F1CB8FB4130AA | Since: 1604 | API-Set: unknown
 */
export function networkEarnArenaWar(amount) {
    NetworkEarnFromArenaWar(amount, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5E7AE8AABE8B7C0D | Since: 1604 | API-Set: unknown
 */
export function networkEarnArenaWarAssassinateTarget(amount) {
    NetworkEarnFromAssassinateTargetKilled2(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xA82959062361B259 | Since: 1604 | API-Set: unknown
 */
export function networkEarnArenaWarEventCargo(amount) {
    NetworkEarnFromBbEventCargo(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xFA700D8A9905F78A | Since: 1604 | API-Set: unknown
 */
export function networkEarnAssassinateTargetKilled(amount) {
    NetworkEarnFromAssassinateTargetKilled(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x36A7FD5A7194B03E | Since: 2372 | API-Set: unknown
 */
export function networkEarnAutoshopBusiness() {
    NetworkEarnFromAutoshopBusiness(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC66D1CF99ED7FE25 | Since: 2372 | API-Set: unknown
 */
export function networkEarnAutoshopIncome() {
    NetworkEarnFromAutoshopIncome(undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x146D4EB6D22A403F | Since: 2545 | API-Set: unknown
 */
export function networkEarnAwardContract() {
    Citizen.invokeNative('0x146D4EB6D22A403F', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x88D6C327D6C57C45 | Since: 2545 | API-Set: unknown
 */
export function networkEarnAwardFixerMission() {
    Citizen.invokeNative('0x88D6C327D6C57C45', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7397A115030F1BE3 | Since: 2545 | API-Set: unknown
 */
export function networkEarnAwardPhone() {
    Citizen.invokeNative('0x7397A115030F1BE3', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5B4DBDED84D6A420 | Since: 2545 | API-Set: unknown
 */
export function networkEarnAwardShortTrip() {
    Citizen.invokeNative('0x5B4DBDED84D6A420', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFDD8D2440DAF1590 | Since: 1604 | API-Set: unknown
 */
export function networkEarnBbEventBonus(amount) {
    NetworkEarnFromBbEventBonus(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xA51338E0DCCD4065 | Since: 2189 | API-Set: unknown
 */
export function networkEarnBeachPartyLostFound() {
    Citizen.invokeNative('0xA51338E0DCCD4065', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x71BEC32FA466E105 | Since: 2699 | API-Set: unknown
 */
export function networkEarnBiker() {
    NetworkEarnFromBikerIncome(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2C5809EB9DF57257 | Since: 2699 | API-Set: unknown
 */
export function networkEarnBikerShop() {
    NetworkEarnFromBikeShopBusiness(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x08B0CA7A6AB3AC32 | Since: 573 | API-Set: unknown
 */
export function networkEarnBoss() {
    NetworkEarnBoss(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF6B170F9A02E9E87 | Since: 1493 | API-Set: unknown
 */
export function networkEarnBountyHunterReward() {
    NetworkEarnBountyHunterReward(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBC6227792A188E2E | Since: 2372 | API-Set: unknown
 */
export function networkEarnCarclubMembership() {
    NetworkEarnFromCarclubMembership(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x973A9781A34F8DEB | Since: 1734 | API-Set: unknown
 */
export function networkEarnCasinoAward(amount, hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    NetworkEarnFromCasinoAward(amount, hash);
}
/**
 * No comment provided
 *
 * Hash: 0x83AD64F53F4E9483 | Since: 1734 | API-Set: unknown
 */
export function networkEarnCasinoCollectableCompletedCollection(amount) {
    NetworkEarnFromCompleteCollection(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x72E7C7B9615FA3C3 | Since: 1868 | API-Set: unknown
 */
export function networkEarnCasinoHeist() {
    NetworkEarnCasinoHeist(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3EC7471E6909798A | Since: 1868 | API-Set: unknown
 */
export function networkEarnCasinoHeistAwards() {
    NetworkEarnCasinoHeistBonus(undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x09E8F18641BE2575 | Since: 1734 | API-Set: unknown
 */
export function networkEarnCasinoMissionParticipation(amount) {
    NetworkEarnFromCasinoMissionParticipation(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x566FD402B25787DE | Since: 1734 | API-Set: unknown
 */
export function networkEarnCasinoMissionReward(amount) {
    NetworkEarnFromCasinoMissionReward(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xAC95ED552157E092 | Since: 1734 | API-Set: unknown
 */
export function networkEarnCasinoStoryMissionReward(amount) {
    NetworkEarnFromCasinoStoryMissionReward(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x0819DB99FD2FBBD8 | Since: 1734 | API-Set: unknown
 */
export function networkEarnCasinoTimeTrialWin(amount) {
    NetworkEarnFromTimeTrialWin(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x0DD362F14F18942A | Since: 1868 | API-Set: unknown
 */
export function networkEarnChallenge(amount) {
    Citizen.invokeNative('0x0DD362F14F18942A', amount, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA95CFB4E02390842 | Since: 1868 | API-Set: unknown
 */
export function networkEarnCollectables() {
    Citizen.invokeNative('0xA95CFB4E02390842', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5517F90043466049 | Since: 1734 | API-Set: unknown
 */
export function networkEarnCollectablesActionFigures(amount) {
    NetworkEarnFromCollectablesActionFigures(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x5C9B198AF5A54FA6 | Since: 2060 | API-Set: unknown
 */
export function networkEarnCollectableCompletedCollection(amount) {
    NetworkEarnCollectableCompletedCollection(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x84FF63BD4966F33D | Since: 1734 | API-Set: unknown
 */
export function networkEarnCollectableItem(amount) {
    NetworkEarnFromCollectionItem(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5128DF14A5BB86FC | Since: 1734 | API-Set: unknown
 */
export function networkEarnDailyObjectiveEvent(amount) {
    NetworkEarnFromDailyObjectiveEvent(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x533073E8A596008C | Since: 2372 | API-Set: unknown
 */
export function networkEarnDailyVehicle() {
    NetworkEarnFromVehicleAutoshop(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFE65AFE7308E32B2 | Since: 2372 | API-Set: unknown
 */
export function networkEarnDailyVehicleBonus() {
    NetworkEarnFromVehicleAutoshopBonus(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCAC672087B4A24AB | Since: 1290 | API-Set: unknown
 */
export function networkEarnDarChallenge(amount) {
    NetworkEarnFromDarChallenge(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE2E244AB823B4483 | Since: 2060 | API-Set: unknown
 */
export function networkEarnDispatchCall(amount) {
    Citizen.invokeNative('0xE2E244AB823B4483', amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x128A747F4A230952 | Since: 1290 | API-Set: unknown
 */
export function networkEarnDoomsdayFinaleBonus(amount, vehicleHash) {
    if (typeof vehicleHash === 'string')
        vehicleHash = GetHashKey(vehicleHash);
    NetworkEarnFromDoomsdayFinaleBonus(amount, vehicleHash);
}
/**
 * No comment provided
 *
 * Hash: 0x11B0A20C493F7E36 | Since: 1290 | API-Set: unknown
 */
export function networkEarnFirstTimeBonus() {
    NetworkEarnJobBonusFirstTimeBonus(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF4A8E57460BF2037 | Since: 2545 | API-Set: unknown
 */
export function networkEarnFixerAgencyShortTrip() {
    Citizen.invokeNative('0xF4A8E57460BF2037', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBA154373C5FE51E8 | Since: 2545 | API-Set: unknown
 */
export function networkEarnFixerFinale() {
    Citizen.invokeNative('0xBA154373C5FE51E8', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6283E5DE4C4460C6 | Since: 2545 | API-Set: unknown
 */
export function networkEarnFixerPrep() {
    Citizen.invokeNative('0x6283E5DE4C4460C6', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x235D41210B3A1A5E | Since: 2545 | API-Set: unknown
 */
export function networkEarnFixerRivalDelivery() {
    Citizen.invokeNative('0x235D41210B3A1A5E', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFFFBA1B1F7C0B6F4 | Since: 1493 | API-Set: unknown
 */
export function networkEarnFmbbWageBonus() {
    NetworkEarnFmbbWageBonus(undefined);
}
/**
 * DSPORT
 *
 * Hash: 0x515B4A22E4D3C6D7 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromAiTargetKill() {
    NetworkEarnFromAiTargetKill(undefined, undefined);
}
/**
 * Example for p1: "AM_DISTRACT_COPS"
 *
 * Hash: 0xFB6DB092FBAE29E6 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromAmbientJob() {
    return NetworkEarnFromAmbientJob(0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x61326EE6DF15B0CA | Since: 323 | API-Set: unknown
 */
export function networkEarnFromBendJob(amount, heistHash) {
    NetworkEarnFromBendJob(amount, heistHash);
}
/**
 * No comment provided
 *
 * Hash: 0x827A5BA1A44ACA6D | Since: 323 | API-Set: unknown
 */
export function networkEarnFromBetting(amount) {
    NetworkEarnFromBetting(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x131BB5DA15453ACF | Since: 323 | API-Set: unknown
 */
export function networkEarnFromBounty(amount) {
    return NetworkEarnFromBounty(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x42FCE14F50F27291 | Since: 1493 | API-Set: unknown
 */
export function networkEarnFromBusinessBattle() {
    NetworkEarnFromBusinessBattle(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0B39CF0D53F1C883 | Since: 1493 | API-Set: unknown
 */
export function networkEarnFromBusinessHubSell() {
    NetworkEarnFromBusinessHubSell(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8586789730B10CAF | Since: 877 | API-Set: unknown
 */
export function networkEarnFromBusinessProduct(amount) {
    NetworkEarnFromBusinessProduct(amount, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x718FBBF67414FA36 | Since: 1290 | API-Set: unknown
 */
export function networkEarnFromCashingOut(amount) {
    Citizen.invokeNative('0x718FBBF67414FA36', amount);
}
/**
 * No comment provided
 *
 * Hash: 0x2B171E6B2F64D8DF | Since: 323 | API-Set: unknown
 */
export function networkEarnFromChallengeWin() {
    return NetworkEarnFromChallengeWin(undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA75EAC69F59E96E7 | Since: 1493 | API-Set: unknown
 */
export function networkEarnFromClubManagementParticipation() {
    NetworkEarnFromClubManagementParticipation(undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xECA658CE2A4E5A72 | Since: 757 | API-Set: unknown
 */
export function networkEarnFromContraband(amount) {
    NetworkEarnFromContraband(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB1CC1B9EC3007A2A | Since: 323 | API-Set: unknown
 */
export function networkEarnFromCrateDrop(amount) {
    NetworkEarnFromCrateDrop(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xFA009A62990671D4 | Since: 1290 | API-Set: unknown
 */
export function networkEarnFromCriminalMastermind() {
    NetworkEarnFromCriminalMastermindBonus(undefined, undefined, undefined);
}
/**
 * type either Monthly,Weekly,Daily
 *
 * Hash: 0x6EA318C91C1A8786 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromDailyObjectives(amount, _type, characterSlot) {
    NetworkEarnFromDailyObjectives(amount, _type, characterSlot);
}
/**
 * No comment provided
 *
 * Hash: 0x84C0116D012E8FC2 | Since: 757 | API-Set: unknown
 */
export function networkEarnFromDestroyingContraband() {
    NetworkEarnFromDestroyingContraband(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1FDA0AA679C9919B | Since: 1493 | API-Set: unknown
 */
export function networkEarnFromFmbbBossWork() {
    NetworkEarnFromFmbbBossWork(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC5156361F26E2212 | Since: 1493 | API-Set: unknown
 */
export function networkEarnFromFmbbPhonecallMission() {
    NetworkEarnFromFmbbPhonecallMission(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA03D4ACE0A3284CE | Since: 323 | API-Set: unknown
 */
export function networkEarnFromGangattackPickup(amount) {
    NetworkEarnFromGangPickup(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x31BA138F6304FB9F | Since: 1180 | API-Set: unknown
 */
export function networkEarnFromHangarTrade() {
    Citizen.invokeNative('0x31BA138F6304FB9F', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x45B8154E077D9E4D | Since: 323 | API-Set: unknown
 */
export function networkEarnFromHoldups(amount) {
    NetworkEarnFromHoldups(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xF92A014A634442D6 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromImportExport(amount, modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    NetworkEarnFromImportExport(amount, modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0xE2BB399D90942091 | Since: 2189 | API-Set: unknown
 */
export function networkEarnFromIslandHeistDjMission() {
    Citizen.invokeNative('0xE2BB399D90942091', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB2CC4836834E8A98 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromJob(amount) {
    NetworkEarnFromJob(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDEBBF584665411D0 | Since: 1734 | API-Set: unknown
 */
export function networkEarnFromJobx2(amount) {
    NetworkEarnFromJobX2(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6816FB4416760775 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromJobBonus() {
    return NetworkEarnFromJobBonus(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4337511FA8221D36 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromNotBadsport(amount) {
    NetworkEarnFromNotBadsport(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x3F4D00167E41E0AD | Since: 323 | API-Set: unknown
 */
export function networkEarnFromPersonalVehicle() {
    NetworkEarnFromPersonalVehicle(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xED1517D3AF17C698 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromPickup(amount) {
    NetworkEarnFromPickup(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xC8407624CEF2354B | Since: 791 | API-Set: unknown
 */
export function networkEarnFromPremiumJob(amount) {
    NetworkEarnFromPremiumJob(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x849648349D77F5C5 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromProperty(amount, propertyName) {
    if (typeof propertyName === 'string')
        propertyName = GetHashKey(propertyName);
    NetworkEarnFromProperty(amount, propertyName);
}
/**
 * For the money bags that drop a max of $40,000. Often called 40k bags.
 *
 * Most likely NETWORK_EARN_FROM_ROB***
 *
 * Hash: 0xF514621E8EA463D0 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromRobArmoredCars(amount) {
    NetworkEarnFromArmourTruck(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x9251B6ABF2D0A5B4 | Since: 1103 | API-Set: unknown
 */
export function networkEarnFromSellBunker(amount, bunkerHash) {
    if (typeof bunkerHash === 'string')
        bunkerHash = GetHashKey(bunkerHash);
    NetworkEarnFromSellBunker(amount, bunkerHash);
}
/**
 * No comment provided
 *
 * Hash: 0x6B7E4FB50D5F3D65 | Since: 1180 | API-Set: unknown
 */
export function networkEarnFromSmugglerWork() {
    Citizen.invokeNative('0x6B7E4FB50D5F3D65', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB539BD8A4C1EECF8 | Since: 323 | API-Set: unknown
 */
export function networkEarnFromVehicle() {
    NetworkEarnFromVehicle(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEDEAD9A91EC768B3 | Since: 944 | API-Set: unknown
 */
export function networkEarnFromVehicleExport(amount) {
    NetworkEarnFromVehicleExport(amount, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3E4ADAFF1830F146 | Since: 757 | API-Set: unknown
 */
export function networkEarnFromWarehouse(amount, id) {
    NetworkEarnFromWarehouse(amount, id);
}
/**
 * No comment provided
 *
 * Hash: 0xA9A31475F530DFDA | Since: 1290 | API-Set: unknown
 */
export function networkEarnGangopsAward(amount) {
    NetworkEarnFromGangopsAwards(amount, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2597A0D4A4FC2C77 | Since: 1290 | API-Set: unknown
 */
export function networkEarnGangopsElite(amount, actIndex) {
    NetworkEarnFromGangopsElite(amount, undefined, actIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x1C121FC9545E0D52 | Since: 1290 | API-Set: unknown
 */
export function networkEarnGangopsFinale(amount) {
    NetworkEarnFromGangopsJobsFinale(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xED26584F6BDCBBFD | Since: 1290 | API-Set: unknown
 */
export function networkEarnGangopsPrepParticipation(amount) {
    NetworkEarnFromGangopsJobsPrepParticipation(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xA9160796D47A2CF8 | Since: 1290 | API-Set: unknown
 */
export function networkEarnGangopsSetup(amount) {
    NetworkEarnFromGangopsJobsSetup(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2DCB19ABAB0380A8 | Since: 1290 | API-Set: unknown
 */
export function networkEarnGangopsWages(amount) {
    NetworkEarnFromGangopsWages(amount, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x15BB2A5C757EB91F | Since: 1290 | API-Set: unknown
 */
export function networkEarnGangopsWagesBonus(amount) {
    NetworkEarnFromGangopsWagesBonus(amount, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xCDA1C62BE2777802 | Since: 573 | API-Set: unknown
 */
export function networkEarnGoon() {
    NetworkEarnGoon(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE8815FE993896AD3 | Since: 1493 | API-Set: unknown
 */
export function networkEarnHackerTruck(amount) {
    NetworkEarnFromHackerTruckMission(undefined, amount, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9D4FDBB035229669 | Since: 1290 | API-Set: unknown
 */
export function networkEarnHeistAward() {
    NetworkEarnJobBonusHeistAward(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD21D111C46BA9F15 | Since: 2189 | API-Set: unknown
 */
export function networkEarnIslandHeist(amount1, amount2) {
    NetworkEarnIslandHeist(amount1, undefined, undefined, undefined, amount2, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xE0F82D68C7039158 | Since: 1493 | API-Set: unknown
 */
export function networkEarnNightclub() {
    Citizen.invokeNative('0xE0F82D68C7039158', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC6E74CF8C884C880 | Since: 1493 | API-Set: unknown
 */
export function networkEarnNightclubAndWarehouse() {
    Citizen.invokeNative('0xC6E74CF8C884C880', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB4DEAE67F35E2ACD | Since: 1493 | API-Set: unknown
 */
export function networkEarnNightclubDancing() {
    Citizen.invokeNative('0xB4DEAE67F35E2ACD', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x55A1E095DB052FA5 | Since: 877 | API-Set: unknown
 */
export function networkEarnPurchaseClubHouse() {
    Citizen.invokeNative('0x55A1E095DB052FA5', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDFF49EE984E7AAE8 | Since: 1734 | API-Set: unknown
 */
export function networkEarnRcTimeTrial(amount) {
    NetworkEarnFromRcTimeTrial(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x7A5349B773584675 | Since: 1290 | API-Set: unknown
 */
export function networkEarnRdrBonus(amount) {
    NetworkEarnFromRdrBonus(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0E1E2FF3F4EC11AA | Since: 1290 | API-Set: unknown
 */
export function networkEarnSellBase(amount, baseNameHash) {
    if (typeof baseNameHash === 'string')
        baseNameHash = GetHashKey(baseNameHash);
    NetworkEarnFromSellBase(amount, baseNameHash);
}
/**
 * No comment provided
 *
 * Hash: 0x8BCB27A057DF7B7F | Since: 1734 | API-Set: unknown
 */
export function networkEarnSellPrizeVehicle(amount) {
    NetworkEarnFromSellingVehicle(amount, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x45087AE480B233AC | Since: 2699 | API-Set: unknown
 */
export function networkEarnSightseeingReward() {
    NetworkEarnFromSightseeing(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDEE612F2D71B0308 | Since: 1180 | API-Set: unknown
 */
export function networkEarnSmugglerAgency(amount) {
    NetworkEarnFromSmuggling(amount, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x676C48776CACBB5A | Since: 1604 | API-Set: unknown
 */
export function networkEarnSpinTheWheelCash(amount) {
    NetworkEarnFromSpinTheWheelCash(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x5B669CF2299A271F | Since: 1290 | API-Set: unknown
 */
export function networkEarnTargetRefund(amount) {
    NetworkEarnFromTargetRefund(amount, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB846F547D3792DF6 | Since: 2372 | API-Set: unknown
 */
export function networkEarnTunerAward() {
    NetworkEarnFromTunerAward(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBCB266247193AC61 | Since: 2372 | API-Set: unknown
 */
export function networkEarnTunerRobbery() {
    NetworkEarnFromTunerFinale(undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD07C7C3F1995108C | Since: 2545 | API-Set: unknown
 */
export function networkEarnUpgradeAgency() {
    Citizen.invokeNative('0xD07C7C3F1995108C', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4C3B75694F7E0D9C | Since: 1868 | API-Set: unknown
 */
export function networkEarnUpgradeArcade() {
    Citizen.invokeNative('0x4C3B75694F7E0D9C', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC10322A8D3E061EE | Since: 2372 | API-Set: unknown
 */
export function networkEarnUpgradeAutoshop() {
    NetworkEarnFromUpgradeAutoshopLocation(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x35F8DA0E8A31EF1B | Since: 1180 | API-Set: unknown
 */
export function networkEarnWagePayment(amount) {
    NetworkEarnFromWagePayment(amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x005ACA7100BD101D | Since: 1180 | API-Set: unknown
 */
export function networkEarnWagePaymentBonus(amount) {
    NetworkEarnFromWagePaymentBonus(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xDE68E30D89F97132 | Since: 2060 | API-Set: unknown
 */
export function networkEarnYatchMission(amount) {
    Citizen.invokeNative('0xDE68E30D89F97132', amount, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7C4FCCD2E4DEB394 | Since: 323 | API-Set: unknown
 */
export function networkEconomyHasFixedCrazyNumbers() {
    return Citizen.invokeNative('0x7C4FCCD2E4DEB394');
}
/**
 * Returns true if bank balance >= amount.
 *
 * Hash: 0xA31FD6A0865B6D14 | Since: 323 | API-Set: unknown
 */
export function networkGetCanSpendFromBank(amount) {
    return NetworkGetVcBankBalanceIsNotLessThan(amount);
}
/**
 * Returns true if bank balance + wallet balance >= amount.
 *
 * Hash: 0xDC18531D7019A535 | Since: 323 | API-Set: unknown
 */
export function networkGetCanSpendFromBankAndWallet(amount, characterSlot) {
    return NetworkGetVcBankWalletBalanceIsNotLessThan(amount, characterSlot);
}
/**
 * Returns true if wallet balance >= amount.
 *
 * Hash: 0xED5AB8860415BABA | Since: 323 | API-Set: unknown
 */
export function networkGetCanSpendFromWallet(amount, characterSlot) {
    return NetworkGetVcWalletBalanceIsNotLessThan(amount, characterSlot);
}
/**
 * Returns false if amount > wallet balance or daily transfer limit has been hit.
 *
 * Hash: 0x08E8EEADFD0DC4A0 | Since: 323 | API-Set: unknown
 */
export function networkGetCanTransferCash(amount) {
    return Citizen.invokeNative('0x08E8EEADFD0DC4A0', amount);
}
/**
 * No comment provided
 *
 * Hash: 0x5D1E75F91C07DEE5 | Since: 323 | API-Set: unknown
 */
export function networkGetEvcBalance() {
    return NetworkGetEvcBalance();
}
/**
 * No comment provided
 *
 * Hash: 0xFB2456B2040A6A67 | Since: 323 | API-Set: unknown
 */
export function networkGetPlayerIsHighEarner() {
    return NetworkGetIsHighEarner();
}
/**
 * No comment provided
 *
 * Hash: 0x4F54F3B6C202FB4E | Since: 323 | API-Set: unknown
 */
export function networkGetPvcBalance() {
    return NetworkGetPvcBalance();
}
/**
 * Retturns the same value as NETWORK_GET_REMAINING_TRANSFER_BALANCE.
 *
 * Hash: 0x13A8DE2FD77D04F3 | Since: 323 | API-Set: unknown
 */
export function networkGetPvcTransferBalance() {
    return NetworkGetPvcTransferBalance();
}
/**
 * Returns the same value as NETWORK_GET_PVC_TRANSFER_BALANCE.
 *
 * Hash: 0xEA560AC9EEB1E19B | Since: 323 | API-Set: unknown
 */
export function networkGetRemainingTransferBalance() {
    return NetworkGetRemainingTransferBalance();
}
/**
 * No comment provided
 *
 * Hash: 0xA6FA3979BED01B81 | Since: 323 | API-Set: unknown
 */
export function networkGetStringBankBalance() {
    return NetworkGetStringBankBalance();
}
/**
 * No comment provided
 *
 * Hash: 0x700AF71AE615E6DD | Since: 323 | API-Set: unknown
 */
export function networkGetStringBankWalletBalance(character) {
    return NetworkGetStringBankWalletBalance(character);
}
/**
 * No comment provided
 *
 * Hash: 0xF9B10B529DCFB33B | Since: 323 | API-Set: unknown
 */
export function networkGetStringWalletBalance(characterSlot) {
    return NetworkGetStringWalletBalance(characterSlot);
}
/**
 * No comment provided
 *
 * Hash: 0x5CBAD97E059E1B94 | Since: 323 | API-Set: unknown
 */
export function networkGetVcBalance() {
    return NetworkGetVcBalance();
}
/**
 * No comment provided
 *
 * Hash: 0x76EF28DA05EA395A | Since: 323 | API-Set: unknown
 */
export function networkGetVcBankBalance() {
    return NetworkGetVcBankBalance();
}
/**
 * No comment provided
 *
 * Hash: 0xA40F9C2623F6A8B5 | Since: 323 | API-Set: unknown
 */
export function networkGetVcWalletBalance(characterSlot) {
    return NetworkGetVcWalletBalance(characterSlot);
}
/**
 * No comment provided
 *
 * Hash: 0xFB18DF9CB95E0105 | Since: 323 | API-Set: unknown
 */
export function networkGivePlayerJobshareCash(amount) {
    return NetworkGivePlayerJobshareCash(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x3DA5ECD1A56CBA6D | Since: 323 | API-Set: unknown
 */
export function networkInitializeCash(wallet, bank) {
    NetworkInitializeCash(wallet, bank);
}
/**
 * No comment provided
 *
 * Hash: 0x821418C727FCACD7 | Since: 791 | API-Set: unknown
 */
export function networkManualDeleteCharacter(characterSlot) {
    NetworkManualDeleteCharacter(characterSlot);
}
/**
 * No comment provided
 *
 * Hash: 0x81404F3DC124FE5B | Since: 323 | API-Set: unknown
 */
export function networkMoneyCanBet(amount) {
    return NetworkMoneyCanBet(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5FD5ED82CBBE9989 | Since: 323 | API-Set: unknown
 */
export function networkPayEmployeeWage() {
    NetworkPayEmployeeWage(undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x9346E14F2AF74D46 | Since: 323 | API-Set: unknown
 */
export function networkPayMatchEntryFee(amount, matchId) {
    NetworkPayMatchEntryFee(amount, matchId, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x56A3B51944C50598 | Since: 323 | API-Set: unknown
 */
export function networkReceivePlayerJobshareCash(value) {
    return NetworkReceivePlayerJobshareCash(value);
}
/**
 * index
 * -------
 * See function sub_1005 in am_boat_taxi.ysc
 *
 * context
 * ----------
 * "BACKUP_VAGOS"
 * "BACKUP_LOST"
 * "BACKUP_FAMILIES"
 * "HIRE_MUGGER"
 * "HIRE_MERCENARY"
 * "BUY_CARDROPOFF"
 * "HELI_PICKUP"
 * "BOAT_PICKUP"
 * "CLEAR_WANTED"
 * "HEAD_2_HEAD"
 * "CHALLENGE"
 * "SHARE_LAST_JOB"
 * "DEFAULT"
 *
 * reason
 * ---------
 * "NOTREACHTARGET"
 * "TARGET_ESCAPE"
 * "DELIVERY_FAIL"
 * "NOT_USED"
 * "TEAM_QUIT"
 * "SERVER_ERROR"
 * "RECEIVE_LJ_L"
 * "CHALLENGE_PLAYER_LEFT"
 * "DEFAULT"
 *
 * unk
 * -----
 * Unknown bool value
 *
 *
 *
 * Hash: 0xF9C812CD7C46E817 | Since: 323 | API-Set: unknown
 */
export function networkRefundCash(index, context, reason) {
    NetworkRefundCash(index, context, reason, false);
}
/**
 * No comment provided
 *
 * Hash: 0x1B882107C23A9022 | Since: 1290 | API-Set: unknown
 */
export function networkServiceEarnGangopsRivalDelivery(earnedMoney) {
    NetworkRivalDeliveryCompleted(earnedMoney);
}
/**
 * No comment provided
 *
 * Hash: 0x1B2120405080125C | Since: 2545 | API-Set: unknown
 */
export function networkSpendAgency() {
    Citizen.invokeNative('0x1B2120405080125C', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1254B5B3925EFD3D | Since: 2545 | API-Set: unknown
 */
export function networkSpendApartmentUtilities(amount) {
    return Citizen.invokeNative('0x1254B5B3925EFD3D', amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x43AA7FAC4E6D6687 | Since: 1868 | API-Set: unknown
 */
export function networkSpendArcade() {
    NetworkSpentArcadeGeneric(undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB5B58E24868CB09E | Since: 1868 | API-Set: unknown
 */
export function networkSpendArcadeMgmt() {
    Citizen.invokeNative('0xB5B58E24868CB09E', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x619496D837EFD920 | Since: 1604 | API-Set: unknown
 */
export function networkSpendArenaPremium(amount) {
    NetworkSpentArenaPremium(amount, false, false);
}
/**
 * type either, 1 for cam spectate, 2 for drone
 *
 * Hash: 0x7049BF858601DC0F | Since: 1604 | API-Set: unknown
 */
export function networkSpendArenaSpectatorBox(amount, _type) {
    NetworkSpentArenaSpectatorBox(amount, _type, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x9BEA350D7C48061B | Since: 2372 | API-Set: unknown
 */
export function networkSpendAutoshopModify() {
    NetworkSpentAutoshopModifications(undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x54ABA22FA6371249 | Since: 2189 | API-Set: unknown
 */
export function networkSpendBeachParty() {
    NetworkSpentBeachPartyGeneric(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x923AEA8E78F8DF0B | Since: 2699 | API-Set: unknown
 */
export function networkSpendBikeShop() {
    NetworkSpentBikeShopModify(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDBC966A01C02BCA7 | Since: 573 | API-Set: unknown
 */
export function networkSpendBoss() {
    NetworkSpentPayBoss(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1BEA0CD93470BB1F | Since: 1493 | API-Set: unknown
 */
export function networkSpendBountyHunterMission(amount) {
    NetworkSpentBountyHunterMission(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x92D1CFDA1227FF1C | Since: 2545 | API-Set: unknown
 */
export function networkSpendBusinessPropertyFees() {
    Citizen.invokeNative('0x92D1CFDA1227FF1C', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEA8CD3C9B3C35884 | Since: 2545 | API-Set: unknown
 */
export function networkSpendBuyAgency() {
    Citizen.invokeNative('0xEA8CD3C9B3C35884', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x870289A558348378 | Since: 1868 | API-Set: unknown
 */
export function networkSpendBuyArcade() {
    Citizen.invokeNative('0x870289A558348378', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x40D5DA9550B7CB46 | Since: 1604 | API-Set: unknown
 */
export function networkSpendBuyArena(amount) {
    NetworkSpentBuyArena(amount, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEEB7E5D1FEB20869 | Since: 2372 | API-Set: unknown
 */
export function networkSpendBuyAutoshop() {
    NetworkSpentBuyAutoshop(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x34A6FC4D06C4DA0F | Since: 1734 | API-Set: unknown
 */
export function networkSpendBuyCasino(amount) {
    return NetworkSpentBuyCasino(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x90CD7C6871FBF1B4 | Since: 2189 | API-Set: unknown
 */
export function networkSpendBuySub() {
    Citizen.invokeNative('0x90CD7C6871FBF1B4', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x925227803A0EAA1B | Since: 2372 | API-Set: unknown
 */
export function networkSpendCarClubBar() {
    NetworkSpentCarclub(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1464E17207CD36E2 | Since: 2372 | API-Set: unknown
 */
export function networkSpendCarClubMembership(amount1, amount2) {
    NetworkSpentCarclubMembership(amount1, undefined, undefined, amount2, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD1E46824E6FB92B5 | Since: 2372 | API-Set: unknown
 */
export function networkSpendCarClubTakeover() {
    NetworkSpentCarclubTakeover(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC991C255AA6D90B2 | Since: 2189 | API-Set: unknown
 */
export function networkSpendCasinoClub(amount1, amount2) {
    NetworkSpentCasinoClubGeneric(amount1, undefined, false, undefined, 0, 0, 0, amount2, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x88BF9B612B84D3C3 | Since: 1734 | API-Set: unknown
 */
export function networkSpendCasinoGeneric(amount) {
    NetworkSpentCasinoGeneric(amount, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD30E8392F407C328 | Since: 1868 | API-Set: unknown
 */
export function networkSpendCasinoHeist() {
    NetworkSpentCasinoHeist(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x487009DD91D93429 | Since: 1868 | API-Set: unknown
 */
export function networkSpendCasinoHeistSkipMission() {
    NetworkSpentCasinoHeistSkipMission(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFBBE0570EDF39D46 | Since: 1734 | API-Set: unknown
 */
export function networkSpendCasinoMembership(amount) {
    NetworkSpentCasinoMembership(amount, false, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD86581F9E7CDA383 | Since: 2545 | API-Set: unknown
 */
export function networkSpendCompSuv() {
    Citizen.invokeNative('0xD86581F9E7CDA383', undefined, undefined, undefined, undefined);
}
/**
 * Hardcoded to return 0.
 *
 * Hash: 0x9B5016A6433A68C5 | Since: 323 | API-Set: unknown
 */
export function networkSpendEarnedFromBankAndWallets(amount) {
    return Citizen.invokeNative('0x9B5016A6433A68C5', amount);
}
/**
 * No comment provided
 *
 * Hash: 0x771ADB0E7635B7BF | Since: 1290 | API-Set: unknown
 */
export function networkSpendGangopsCannon() {
    NetworkSpentGangopsCannon(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2A7CEC72C3443BCC | Since: 1290 | API-Set: unknown
 */
export function networkSpendGangopsRepairCost() {
    Citizen.invokeNative('0x2A7CEC72C3443BCC', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDA947AE8880D5C18 | Since: 1290 | API-Set: unknown
 */
export function networkSpendGangopsSkipMission() {
    NetworkSpentGangopsStartMission(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA19EC0786E326E06 | Since: 1290 | API-Set: unknown
 */
export function networkSpendGangopsStartStrand(_type, amount) {
    NetworkSpentGangopsStartStrand(_type, amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5ECE6FD7B4EC8D6A | Since: 1290 | API-Set: unknown
 */
export function networkSpendGangopsTripSkip(amount) {
    NetworkSpentGangopsTripSkip(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x08A1B82B91900682 | Since: 573 | API-Set: unknown
 */
export function networkSpendGoon(amount) {
    NetworkSpentPayGoon(0, 0, amount);
}
/**
 * No comment provided
 *
 * Hash: 0x2CEB0E0BC2A77C05 | Since: 2699 | API-Set: unknown
 */
export function networkSpendGunrunning() {
    NetworkSpentGunrunningContactService(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBF8793B91EA094A7 | Since: 2545 | API-Set: unknown
 */
export function networkSpendHidden() {
    Citizen.invokeNative('0xBF8793B91EA094A7', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x93AA4165CB67E925 | Since: 2372 | API-Set: unknown
 */
export function networkSpendInteractionMenuAbility() {
    NetworkSpentImAbility(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE86689E5F82DE429 | Since: 2189 | API-Set: unknown
 */
export function networkSpendIslandHeist() {
    NetworkSpentIslandHeist(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE5F5A060439C2F5D | Since: 1604 | API-Set: unknown
 */
export function networkSpendMakeItRain(amount) {
    NetworkSpentMakeItRain(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x65482BFD0923C8A1 | Since: 1493 | API-Set: unknown
 */
export function networkSpendNightclubAndWarehouse() {
    Citizen.invokeNative('0x65482BFD0923C8A1', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDD21B016E4289465 | Since: 1493 | API-Set: unknown
 */
export function networkSpendNightclubBarDrink(amount) {
    NetworkSpentNightclubBarDrink(amount, undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xEAD3D81F2C3A1458 | Since: 1868 | API-Set: unknown
 */
export function networkSpendPlayArcade() {
    NetworkSpentArcadeGame(undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB9F7A469460E7A4A | Since: 2372 | API-Set: unknown
 */
export function networkSpendSetCommonFields() {
    NetworkSpentFromBank(undefined, undefined, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7E2F4E8F44CAF4E0 | Since: 2699 | API-Set: unknown
 */
export function networkSpendSetDiscount() {
    NetworkSpentSalesDisplay(false);
}
/**
 * No comment provided
 *
 * Hash: 0xD9DF467CBE4398C8 | Since: 2545 | API-Set: unknown
 */
export function networkSpendSourceBike() {
    Citizen.invokeNative('0xD9DF467CBE4398C8', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9A5BD1D0000B339C | Since: 1604 | API-Set: unknown
 */
export function networkSpendSpinTheWheelPayment(amount) {
    NetworkSpentSpinTheWheelPayment(amount, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x6C8BC1488527AAAB | Since: 2189 | API-Set: unknown
 */
export function networkSpendSubmarine() {
    NetworkSpentSubmarine(undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEBD482B82ACB8BAD | Since: 2545 | API-Set: unknown
 */
export function networkSpendSupply() {
    Citizen.invokeNative('0xEBD482B82ACB8BAD', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x61A2DF64ED2D396E | Since: 2545 | API-Set: unknown
 */
export function networkSpendSuvFstTrvl() {
    Citizen.invokeNative('0x61A2DF64ED2D396E', 0, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6CCA64840589A3B6 | Since: 2545 | API-Set: unknown
 */
export function networkSpendUpgradeAgency() {
    Citizen.invokeNative('0x6CCA64840589A3B6', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5574637681911FDA | Since: 1868 | API-Set: unknown
 */
export function networkSpendUpgradeArcade() {
    Citizen.invokeNative('0x5574637681911FDA', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x037ABB06825D7AB1 | Since: 1604 | API-Set: unknown
 */
export function networkSpendUpgradeArena(amount) {
    NetworkSpentUpgradeArena(amount, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDD829AA198FDC46C | Since: 2372 | API-Set: unknown
 */
export function networkSpendUpgradeAutoshop() {
    NetworkSpentUpgradeAutoshop(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4740D62BC1B4EBEA | Since: 1734 | API-Set: unknown
 */
export function networkSpendUpgradeCasino(amount) {
    return NetworkSpentUpgradeCasino(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x89049A84065CE68E | Since: 2189 | API-Set: unknown
 */
export function networkSpendUpgradeSub() {
    NetworkSpentUpgradeSub(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x02D24A35A9CC3503 | Since: 2699 | API-Set: unknown
 */
export function networkSpendVehicleRequested() {
    NetworkSpentVehicleRequested(undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB162DC95C0A3317B | Since: 323 | API-Set: unknown
 */
export function networkSpentAmmoDrop() {
    NetworkSpentAmmoDrop(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x14EAEA58F93B55AF | Since: 1604 | API-Set: unknown
 */
export function networkSpentArenaJoinSpectator(amount) {
    NetworkSpentArenaJoinSpectator(amount, undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x812F5488B1B2A299 | Since: 323 | API-Set: unknown
 */
export function networkSpentArrestBail() {
    NetworkSpentArrestBail(undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5D97630A8A0EF123 | Since: 1103 | API-Set: unknown
 */
export function networkSpentBallisticEquipment(amount) {
    NetworkSpentBallisticEquipment(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xCA230C9682556CF1 | Since: 323 | API-Set: unknown
 */
export function networkSpentBankInterest() {
    NetworkSpentBankInterest(0, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x1C436FD11FFA692F | Since: 323 | API-Set: unknown
 */
export function networkSpentBetting(amount, matchId) {
    NetworkSpentBetting(amount, 0, matchId, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x524EE43A37232C00 | Since: 323 | API-Set: unknown
 */
export function networkSpentBoatPickup() {
    NetworkSpentBoatPickup(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFFBE02CD385356BD | Since: 573 | API-Set: unknown
 */
export function networkSpentBossGoon(amount) {
    return NetworkSpentBoss(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x29B260B84947DFCC | Since: 323 | API-Set: unknown
 */
export function networkSpentBounty() {
    NetworkSpentBounty(undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA6DD8458CE24012C | Since: 323 | API-Set: unknown
 */
export function networkSpentBullShark() {
    NetworkSpentBullShark(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4EA3F425C7744D21 | Since: 1290 | API-Set: unknown
 */
export function networkSpentBuyBase() {
    NetworkSpentBuyBase(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x12D148D26538D0F9 | Since: 1103 | API-Set: unknown
 */
export function networkSpentBuyBunker() {
    NetworkSpentBuyBunker(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA628A745E2275C5D | Since: 323 | API-Set: unknown
 */
export function networkSpentBuyOfftheradar() {
    NetworkSpentBuyOfftheradar(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6D3A430D1A809179 | Since: 323 | API-Set: unknown
 */
export function networkSpentBuyPassiveMode() {
    NetworkSpentBuyPassiveMode(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6E176F1B18BC0637 | Since: 323 | API-Set: unknown
 */
export function networkSpentBuyRevealPlayers() {
    NetworkSpentBuyRevealPlayers(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0CCE73BC7A11E885 | Since: 1290 | API-Set: unknown
 */
export function networkSpentBuyTiltrotor() {
    NetworkSpentBuyTiltrotor(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAC272C0AE01B4BD8 | Since: 1103 | API-Set: unknown
 */
export function networkSpentBuyTruck() {
    NetworkSpentBuyTruck(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE1B13771A843C4F6 | Since: 323 | API-Set: unknown
 */
export function networkSpentBuyWantedlevel() {
    return NetworkSpentBuyWantedlevel(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xACDE7185B374177C | Since: 323 | API-Set: unknown
 */
export function networkSpentCallPlayer() {
    return NetworkSpentCallPlayer(undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x948705F6F9C50824 | Since: 2699 | API-Set: unknown
 */
export function networkSpentCargoSourcing() {
    NetworkSpentCargoSourcing(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEC03C719DB2F4306 | Since: 323 | API-Set: unknown
 */
export function networkSpentCarwash() {
    NetworkSpentCarwash(undefined, undefined, undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x289016EC778D60E0 | Since: 323 | API-Set: unknown
 */
export function networkSpentCashDrop(amount) {
    NetworkSpentCashDrop(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5F456788B05FAEAC | Since: 944 | API-Set: unknown
 */
export function networkSpentChangeAppearance() {
    Citizen.invokeNative('0x5F456788B05FAEAC', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6B38ECB05A63A685 | Since: 323 | API-Set: unknown
 */
export function networkSpentCinema() {
    NetworkSpentCinema(undefined, undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5BBBD92186E1F1C5 | Since: 1290 | API-Set: unknown
 */
export function networkSpentEmployAssassins() {
    NetworkSpentEmployAssassins(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6A445B64ED7ABEB5 | Since: 323 | API-Set: unknown
 */
export function networkSpentFromRockstar() {
    NetworkSpentFromRockstar(0, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB1F1346FD57685D7 | Since: 1180 | API-Set: unknown
 */
export function networkSpentHangarStaffCharges(amount) {
    NetworkSpentHangarStaffCharges(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB18AC2ECBB15CB6A | Since: 1180 | API-Set: unknown
 */
export function networkSpentHangarUtilityCharges(amount) {
    NetworkSpentHangarUtilityCharges(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7BF1D73DB2ECA492 | Since: 323 | API-Set: unknown
 */
export function networkSpentHeliPickup() {
    NetworkSpentHeliPickup(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE7B80E2BF9D80BD6 | Since: 323 | API-Set: unknown
 */
export function networkSpentHireMercenary() {
    NetworkSpentHireMercenary(undefined, false, false, undefined);
}
/**
 * Only used once in a script (am_contact_requests)
 * p1 = 0
 * p2 = 1
 *
 * Hash: 0xE404BFB981665BF0 | Since: 323 | API-Set: unknown
 */
export function networkSpentHireMugger() {
    NetworkSpentHireMugger(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD9B86B9872039763 | Since: 323 | API-Set: unknown
 */
export function networkSpentHoldups() {
    NetworkSpentHoldups(undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC1952F3773BA18FE | Since: 944 | API-Set: unknown
 */
export function networkSpentImportExportRepair() {
    NetworkSpentImportExportRepair(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEE99784E4467689C | Since: 323 | API-Set: unknown
 */
export function networkSpentInStripclub() {
    NetworkSpentInStripclub(undefined, false, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x28F174A67B8D0C2F | Since: 323 | API-Set: unknown
 */
export function networkSpentJobSkip(amount, matchId) {
    NetworkSpentJobSkip(amount, matchId, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5BCDE0F640C773D2 | Since: 877 | API-Set: unknown
 */
export function networkSpentJukebox() {
    NetworkSpentJukebox(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD7CCCBA28C4ECAF0 | Since: 877 | API-Set: unknown
 */
export function networkSpentMcAbility() {
    NetworkSpentBaService(undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCD4D66B43B1DD28D | Since: 2189 | API-Set: unknown
 */
export function networkSpentMoveSubmarine() {
    Citizen.invokeNative('0xCD4D66B43B1DD28D', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE7DF4E0545DFB56E | Since: 573 | API-Set: unknown
 */
export function networkSpentMoveYacht(amount) {
    NetworkSpentMoveYacht(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x876056684281655D | Since: 1493 | API-Set: unknown
 */
export function networkSpentNightclubEntryFee(player, amount) {
    const _player = typeof player == 'object' ? player.playerId() : player;
    NetworkSpentNightclubEntryFee(_player, amount, undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD5BB406F4E04019F | Since: 323 | API-Set: unknown
 */
export function networkSpentNoCops() {
    NetworkSpentNoCops(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE8B0B270B6E7C76E | Since: 757 | API-Set: unknown
 */
export function networkSpentOrderBodyguardVehicle() {
    NetworkSpentOrderBodyguardVehicle(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x05F04155A226FBBF | Since: 757 | API-Set: unknown
 */
export function networkSpentOrderWarehouseVehicle() {
    NetworkSpentOrderWarehouseVehicle(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0035BB914316F1E3 | Since: 877 | API-Set: unknown
 */
export function networkSpentPayBusinessSupplies() {
    NetworkSpentBusiness(undefined, undefined, undefined, undefined);
}
/**
 * According to how I understood this in the freemode script alone,
 * The first parameter is determined by a function named, func_5749 within the freemode script which has a list of all the vehicles and a set price to return which some vehicles deals with globals as well. So the first parameter is basically the set in stone insurance cost it's gonna charge you for that specific vehicle model.
 *
 * The second parameter whoever put it was right, they call GET_ENTITY_MODEL with the vehicle as the paremeter.
 *
 * The third parameter is the network handle as they call their little struct<13> func or atleast how the script decompiled it to look which in lamens terms just returns the network handle of the previous owner based on DECOR_GET_INT(vehicle, "Previous_Owner").
 *
 * The fourth parameter is a bool that returns true/false depending on if your bank balance is greater then 0.
 *
 * The fifth and last parameter is a bool that returns true/false depending on if you have the money for the car based on the cost returned by func_5749. In the freemode script eg,
 * `bool hasTheMoney = MONEY::_GET_BANK_BALANCE() < carCost.`
 *
 * Hash: 0x9FF28D88C766E3E8 | Since: 323 | API-Set: unknown
 */
export function networkSpentPayVehicleInsurancePremium(amount, vehicleModel, notBankrupt, hasTheMoney) {
    if (typeof vehicleModel === 'string')
        vehicleModel = GetHashKey(vehicleModel);
    return NetworkSpentPayVehicleInsurancePremium(amount, vehicleModel, notBankrupt, hasTheMoney);
}
/**
 * No comment provided
 *
 * Hash: 0x0FE8E1FCD2B86B33 | Since: 757 | API-Set: unknown
 */
export function networkSpentPaHeliPickup() {
    NetworkSpentPaServiceHeliPickup(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB49ECA122467D05F | Since: 757 | API-Set: unknown
 */
export function networkSpentPaServiceDancer() {
    NetworkSpentPaServiceDancer(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x112209CE0290C03A | Since: 757 | API-Set: unknown
 */
export function networkSpentPaServiceHeli() {
    Citizen.invokeNative('0x112209CE0290C03A', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE23ADC6FCB1F29AE | Since: 757 | API-Set: unknown
 */
export function networkSpentPaServiceImpound() {
    Citizen.invokeNative('0xE23ADC6FCB1F29AE', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0D30EB83668E63C5 | Since: 757 | API-Set: unknown
 */
export function networkSpentPaServiceSnack() {
    Citizen.invokeNative('0x0D30EB83668E63C5', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xED5FD7AF10F5E262 | Since: 757 | API-Set: unknown
 */
export function networkSpentPaServiceVehicle() {
    Citizen.invokeNative('0xED5FD7AF10F5E262', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7C99101F7FCE2EE5 | Since: 323 | API-Set: unknown
 */
export function networkSpentPlayerHealthcare() {
    NetworkSpentPlayerHealthcare(0, 0, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB21B89501CFAC79E | Since: 323 | API-Set: unknown
 */
export function networkSpentProstitutes() {
    NetworkSpentProstitutes(undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x6FD97159FE3C971A | Since: 877 | API-Set: unknown
 */
export function networkSpentPurchaseBusinessProperty() {
    Citizen.invokeNative('0x6FD97159FE3C971A', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x998E18CEB44487FC | Since: 877 | API-Set: unknown
 */
export function networkSpentPurchaseClubHouse() {
    Citizen.invokeNative('0x998E18CEB44487FC', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2A93C46AAB1EACC9 | Since: 1493 | API-Set: unknown
 */
export function networkSpentPurchaseHackerTruck() {
    Citizen.invokeNative('0x2A93C46AAB1EACC9', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCCB339CC970452DA | Since: 1180 | API-Set: unknown
 */
export function networkSpentPurchaseHangar() {
    NetworkSpentPurchaseHangar(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x33981D6804E62F49 | Since: 944 | API-Set: unknown
 */
export function networkSpentPurchaseImpexpWarehouseProperty(amount) {
    return NetworkSpentPurchaseWarehouse(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xED76D195E6E3BF7F | Since: 1493 | API-Set: unknown
 */
export function networkSpentPurchaseNightclubAndWarehouse() {
    Citizen.invokeNative('0xED76D195E6E3BF7F', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB4C2EC463672474E | Since: 944 | API-Set: unknown
 */
export function networkSpentPurchaseOfficeGarage() {
    Citizen.invokeNative('0xB4C2EC463672474E', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x69EF772B192614C1 | Since: 757 | API-Set: unknown
 */
export function networkSpentPurchaseOfficeProperty() {
    Citizen.invokeNative('0x69EF772B192614C1', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBD0EFB25CCA8F97A | Since: 757 | API-Set: unknown
 */
export function networkSpentPurchaseWarehouseProperty() {
    Citizen.invokeNative('0xBD0EFB25CCA8F97A', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE284D46FFDB82E36 | Since: 1493 | API-Set: unknown
 */
export function networkSpentRdrHatchetBonus(amount) {
    NetworkSpentRdrhatchetBonus(amount, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF6C8A544E4CF14FC | Since: 1493 | API-Set: unknown
 */
export function networkSpentRehireDj(amount) {
    NetworkSpentRehireDj(amount, undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFC4EE00A7B3BFB76 | Since: 573 | API-Set: unknown
 */
export function networkSpentRenameOrganization() {
    NetworkSpentRenameOrganization(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9D26502BB97BFE62 | Since: 323 | API-Set: unknown
 */
export function networkSpentRequestHeist() {
    NetworkSpentRequestHeist(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8204DA7934DF3155 | Since: 323 | API-Set: unknown
 */
export function networkSpentRequestJob() {
    NetworkSpentRequestJob(undefined, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x995A65F15F581359 | Since: 323 | API-Set: unknown
 */
export function networkSpentRobbedByMugger(amount) {
    NetworkSpentRobbedByMugger(amount, false, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x17C3A7D31EAE39F9 | Since: 323 | API-Set: unknown
 */
export function networkSpentTaxi(amount) {
    NetworkSpentTaxi(amount, false, false, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7FE61782AD94CC09 | Since: 323 | API-Set: unknown
 */
export function networkSpentTelescope() {
    NetworkSpentTelescope(undefined, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA51B086B0B2C0F7A | Since: 877 | API-Set: unknown
 */
export function networkSpentTradeBusinessProperty() {
    Citizen.invokeNative('0xA51B086B0B2C0F7A', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2FAB6614CE22E196 | Since: 944 | API-Set: unknown
 */
export function networkSpentTradeImpexpWarehouseProperty() {
    Citizen.invokeNative('0x2FAB6614CE22E196', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3DD3F33A5D55EA6F | Since: 1290 | API-Set: unknown
 */
export function networkSpentUpgradeBase() {
    NetworkSpentUpgradeBase(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x675D19C6067CAE08 | Since: 877 | API-Set: unknown
 */
export function networkSpentUpgradeBusinessProperty() {
    Citizen.invokeNative('0x675D19C6067CAE08', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFA07759E6FDDD7CF | Since: 877 | API-Set: unknown
 */
export function networkSpentUpgradeClubHouse() {
    Citizen.invokeNative('0xFA07759E6FDDD7CF', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x226C284C830D0CA8 | Since: 1493 | API-Set: unknown
 */
export function networkSpentUpgradeHackerTruck() {
    Citizen.invokeNative('0x226C284C830D0CA8', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x615EB504B0788DAF | Since: 1180 | API-Set: unknown
 */
export function networkSpentUpgradeHangar() {
    NetworkSpentUpgradeHangar(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4128464231E3CA0B | Since: 944 | API-Set: unknown
 */
export function networkSpentUpgradeImpexpWarehouseProperty() {
    Citizen.invokeNative('0x4128464231E3CA0B', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1DC9B749E7AE282B | Since: 1493 | API-Set: unknown
 */
export function networkSpentUpgradeNightclubAndWarehouse() {
    Citizen.invokeNative('0x1DC9B749E7AE282B', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2AFC2D19B50797F2 | Since: 944 | API-Set: unknown
 */
export function networkSpentUpgradeOfficeGarage() {
    Citizen.invokeNative('0x2AFC2D19B50797F2', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8E243837643D9583 | Since: 757 | API-Set: unknown
 */
export function networkSpentUpgradeOfficeProperty() {
    Citizen.invokeNative('0x8E243837643D9583', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x165E135D6DFA2907 | Since: 1290 | API-Set: unknown
 */
export function networkSpentUpgradeTiltrotor() {
    NetworkSpentUpgradeTiltrotor(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x365E877C61D6988B | Since: 1103 | API-Set: unknown
 */
export function networkSpentUpgradeTruck() {
    NetworkSpentUpgradeTruck(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA95F667A755725DA | Since: 757 | API-Set: unknown
 */
export function networkSpentUpgradeWarehouseProperty() {
    Citizen.invokeNative('0xA95F667A755725DA', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0C82D21A77C22D49 | Since: 1103 | API-Set: unknown
 */
export function networkSpentUpradeBunker() {
    NetworkSpentUpgradeBunker(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA75CCF58A60A5FD1 | Since: 944 | API-Set: unknown
 */
export function networkSpentVehicleExportMods() {
    NetworkSpentVehicleExportMods(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD99DB210089617FE | Since: 573 | API-Set: unknown
 */
export function networkSpentWager(amount) {
    NetworkSpentWager(undefined, undefined, amount);
}
/**
 * No comment provided
 *
 * Hash: 0x59498BC8B1C8B15C | Since: 2699 | API-Set: unknown
 */
export function networkYohanSourceGoods() {
    NetworkEarnFromBusinessHubSource(undefined, undefined, undefined, undefined);
}
/**
 * This isn't a hash collision.
 *
 * Hash: 0x20194D48EAEC9A41 | Since: 323 | API-Set: unknown
 */
export function processCashGift() {
    return ProcessCashGift(undefined);
}
/**
 * This function is hard-coded to always return 1.
 *
 * Hash: 0x6FCF8DDEA146C45B | Since: 323 | API-Set: unknown
 */
export function wasVcWithdrawalSuccessful() {
    return Citizen.invokeNative('0x6FCF8DDEA146C45B', undefined);
}
/**
 * Does nothing and always returns 0.
 *
 * Hash: 0xF70EFA14FE091429 | Since: 323 | API-Set: unknown
 */
export function withdrawVc(amount) {
    return WithdrawVc(amount);
}
/**
 * No comment provided
 *
 * Hash: 0xE03B9F95556E48E9 | Since: 3095 | API-Set: unknown
 */
export function networkClearTransactionTelemetryNonce() {
    Citizen.invokeNative('0xE03B9F95556E48E9');
}
/**
 * Used for SERVICE_EARN_AVENGER_OPERATIONS & SERVICE_EARN_AVENGER_OPS_BONUS
 *
 * Hash: 0x55F006B9D4A46C1D | Since: 2944 | API-Set: unknown
 */
export function networkEarnAvenger(amount) {
    Citizen.invokeNative('0x55F006B9D4A46C1D', amount, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD1A8165767AD2D23 | Since: 2802 | API-Set: unknown
 */
export function networkEarnAwardAcidLab() {
    Citizen.invokeNative('0xD1A8165767AD2D23', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC30650FA74A19D02 | Since: 2802 | API-Set: unknown
 */
export function networkEarnAwardDailyStash() {
    Citizen.invokeNative('0xC30650FA74A19D02', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD01EBAEA1F905EF6 | Since: 2802 | API-Set: unknown
 */
export function networkEarnAwardDeadDrop() {
    Citizen.invokeNative('0xD01EBAEA1F905EF6', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDDF047577F1A02A7 | Since: 2802 | API-Set: unknown
 */
export function networkEarnAwardJuggaloMission() {
    Citizen.invokeNative('0xDDF047577F1A02A7', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBEAFBB1B98B7EF55 | Since: 2802 | API-Set: unknown
 */
export function networkEarnAwardRandomEvent() {
    Citizen.invokeNative('0xBEAFBB1B98B7EF55', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA914768AD35CD3A5 | Since: 2802 | API-Set: unknown
 */
export function networkEarnAwardTaxi() {
    Citizen.invokeNative('0xA914768AD35CD3A5', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDCEF983C24191997 | Since: 2944 | API-Set: unknown
 */
export function networkEarnBonusObjective(amount) {
    Citizen.invokeNative('0xDCEF983C24191997', amount, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCABC9874AFA70D6D | Since: 2802 | API-Set: unknown
 */
export function networkEarnDailyStashHouseCompleted() {
    Citizen.invokeNative('0xCABC9874AFA70D6D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9C0C6BD0F94CE391 | Since: 2802 | API-Set: unknown
 */
export function networkEarnDailyStashHouseParticipation() {
    Citizen.invokeNative('0x9C0C6BD0F94CE391', undefined, undefined);
}
/**
 * JUGGALO_PHONE_MISSION...
 *
 * Hash: 0xCE4452AE85F5E252 | Since: 2802 | API-Set: unknown
 */
export function networkEarnFooliganJob() {
    Citizen.invokeNative('0xCE4452AE85F5E252', undefined, undefined);
}
/**
 * JUGGALO_PHONE_MISSION_PARTICIPATION...
 *
 * Hash: 0xC376B92D0E060970 | Since: 2802 | API-Set: unknown
 */
export function networkEarnFooliganJobParticipation() {
    Citizen.invokeNative('0xC376B92D0E060970', undefined, undefined);
}
/**
 * _NETWORK_EARN_G*
 *
 * Hash: 0xBF7B5BB7ED890380 | Since: 3095 | API-Set: unknown
 */
export function networkEarnGeneric(amount, earn) {
    if (typeof earn === 'string')
        earn = GetHashKey(earn);
    return Citizen.invokeNative('0xBF7B5BB7ED890380', amount, earn, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE01D10BA8CD53621 | Since: 2802 | API-Set: unknown
 */
export function networkEarnJuggaloStoryMission() {
    Citizen.invokeNative('0xE01D10BA8CD53621', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x40FF6CCCC476185C | Since: 2802 | API-Set: unknown
 */
export function networkEarnJuggaloStoryMissionParticipation() {
    Citizen.invokeNative('0x40FF6CCCC476185C', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF8332B06F0EECC9C | Since: 2944 | API-Set: unknown
 */
export function networkEarnProgressHub() {
    Citizen.invokeNative('0xF8332B06F0EECC9C', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x79B656937DF6DF5D | Since: 2802 | API-Set: unknown
 */
export function networkEarnSellAcid() {
    Citizen.invokeNative('0x79B656937DF6DF5D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCA3EF9B09A8D76B4 | Since: 2802 | API-Set: unknown
 */
export function networkEarnSellParticipationAcidLab() {
    Citizen.invokeNative('0xCA3EF9B09A8D76B4', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE3942D59E8A7F70D | Since: 2802 | API-Set: unknown
 */
export function networkEarnSetupParticipationAcidLab() {
    Citizen.invokeNative('0xE3942D59E8A7F70D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDEA273D5F8A9661A | Since: 2944 | API-Set: unknown
 */
export function networkEarnSmugglerOps() {
    Citizen.invokeNative('0xDEA273D5F8A9661A', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x136F11B5DF1B304D | Since: 2802 | API-Set: unknown
 */
export function networkEarnSourceParticipationAcidLab() {
    Citizen.invokeNative('0x136F11B5DF1B304D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA81017EE1324FDFE | Since: 2802 | API-Set: unknown
 */
export function networkEarnStreetDealer() {
    Citizen.invokeNative('0xA81017EE1324FDFE', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x991E1588FAD9019D | Since: 2802 | API-Set: unknown
 */
export function networkEarnTaxiJob() {
    Citizen.invokeNative('0x991E1588FAD9019D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF1E26A7924327152 | Since: 2802 | API-Set: unknown
 */
export function networkSpendBuyAcidLab() {
    Citizen.invokeNative('0xF1E26A7924327152', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA2ED36DCF0FCA413 | Since: 2802 | API-Set: unknown
 */
export function networkSpendBuyMfgarage() {
    Citizen.invokeNative('0xA2ED36DCF0FCA413', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB48185C0CA67B16B | Since: 2802 | API-Set: unknown
 */
export function networkSpendBuySupplies() {
    Citizen.invokeNative('0xB48185C0CA67B16B', 0, false, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x842B1C5AF61ACDE9 | Since: 2802 | API-Set: unknown
 */
export function networkSpendRenameAcidLab() {
    Citizen.invokeNative('0x842B1C5AF61ACDE9', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x446798F7495DD7D8 | Since: 2802 | API-Set: unknown
 */
export function networkSpendRenameAcidProduct() {
    Citizen.invokeNative('0x446798F7495DD7D8', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA7D541C9ACD63133 | Since: 2802 | API-Set: unknown
 */
export function networkSpendUpgradeAcidLabArmor() {
    Citizen.invokeNative('0xA7D541C9ACD63133', 0, false, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x110EE9D486C23126 | Since: 2802 | API-Set: unknown
 */
export function networkSpendUpgradeAcidLabEquipment() {
    Citizen.invokeNative('0x110EE9D486C23126', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4B99AB08C92C54E4 | Since: 2802 | API-Set: unknown
 */
export function networkSpendUpgradeAcidLabMines() {
    Citizen.invokeNative('0x4B99AB08C92C54E4', 0, false, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2940558E05BCC2EC | Since: 2802 | API-Set: unknown
 */
export function networkSpendUpgradeAcidLabScoop() {
    Citizen.invokeNative('0x2940558E05BCC2EC', 0, false, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xCF8F346DDDC66643 | Since: 2802 | API-Set: unknown
 */
export function networkSpendUpgradeMfgarage() {
    Citizen.invokeNative('0xCF8F346DDDC66643', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8C7E8D6F96C9E948 | Since: 2944 | API-Set: unknown
 */
export function networkSpentAirFreight(hangarCargoSourcingPrice, fromBank, fromBankAndWallet, cost, warehouseId, warehouseSlot) {
    Citizen.invokeNative('0x8C7E8D6F96C9E948', hangarCargoSourcingPrice, fromBank, fromBankAndWallet, cost, warehouseId, warehouseSlot, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2803B027479FB640 | Since: 3095 | API-Set: unknown
 */
export function networkSpentGeneric(price, stat, spent) {
    if (typeof stat === 'string')
        stat = GetHashKey(stat);
    if (typeof spent === 'string')
        spent = GetHashKey(spent);
    return Citizen.invokeNative('0x2803B027479FB640', price, false, false, stat, spent, undefined, undefined);
}
/**
 * Hash p3 = MISSILE_JAMMER
 *
 * Hash: 0xD687100F616163F4 | Since: 2944 | API-Set: unknown
 */
export function networkSpentMissileJammer(amount, fromBank, fromBankAndWallet, p3) {
    if (typeof p3 === 'string')
        p3 = GetHashKey(p3);
    Citizen.invokeNative('0xD687100F616163F4', amount, fromBank, fromBankAndWallet, p3);
}
/**
 * No comment provided
 *
 * Hash: 0xED1B407BADA42CEC | Since: 2944 | API-Set: unknown
 */
export function networkSpentSkipCargoSourceSetup(amount, fromBank, fromBankAndWallet, cost) {
    Citizen.invokeNative('0xED1B407BADA42CEC', amount, fromBank, fromBankAndWallet, cost);
}
/**
 * Hash p3 = STEALTH_MODULE
 *
 * Hash: 0x95CE79A6939C537A | Since: 2944 | API-Set: unknown
 */
export function networkSpentStealthModule(amount, fromBank, fromBankAndWallet, p3) {
    if (typeof p3 === 'string')
        p3 = GetHashKey(p3);
    Citizen.invokeNative('0x95CE79A6939C537A', amount, fromBank, fromBankAndWallet, p3);
}
