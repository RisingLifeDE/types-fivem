import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/fivem-shared'

/**
 * No comment provided
 * 
 * Hash: 0x9777734DAD16992F | Since: 573
 */
export function canPayAmountToBoss(amount: number): [boolean, number] {
    return CanPayGoon(0, 0, amount);
}

/**
 * Does nothing and always returns false.
 * 
 * Hash: 0xE260E0BB9CD995AC | Since: 323
 */
export function depositVc(amount: number): boolean {
    return DepositVc(amount);
}

/**
 * This function is hard-coded to always return 1.
 * 
 * Hash: 0xE154B48B68EF72BC | Since: 323
 */
export function hasVcWithdrawalCompleted(): boolean {
    return Citizen.invokeNative('0xE154B48B68EF72BC', undefined);
}

/**
 * p1 = 0 (always)
 * p2 = 1 (always)
 * 
 * Hash: 0x763B4BD305338F19 | Since: 323
 */
export function networkBuyAirstrike(cost: number): void {
    NetworkBuyAirstrike(cost, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA3EDDAA42411D3B9 | Since: 323
 */
export function networkBuyBackupGang(npcProvider: number): void {
    NetworkBuyBackupGang(0, 0, false, false, npcProvider);
}

/**
 * p1 is just an assumption. p2 was false and p3 was true.
 * 
 * Hash: 0x7B718E197453F2D9 | Since: 323
 */
export function networkBuyBounty(amount: number, victim: number | string | IPlayer): void {
    const _victim = victim instanceof IPlayer ? victim.playerId() : victim;
    NetworkBuyBounty(amount, _victim, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x30FD873ECE50E9F6 | Since: 757
 */
export function networkBuyContrabandMission(p2: number | string): void {
    if (typeof p2 === 'string') p2 = GetHashKey(p2)
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
 * Hash: 0x8A7B3952DD64D2B5 | Since: 323
 */
export function networkBuyFairgroundRide(amount: number): void {
    NetworkBuyFairgroundRide(amount, undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD9B067E55253E3DD | Since: 323
 */
export function networkBuyHealthcare(cost: number): void {
    NetworkBuyHealthcare(cost, false, false);
}

/**
 * p1 = 0 (always)
 * p2 = 1 (always)
 * 
 * Hash: 0x81AA4610E3FD3A69 | Since: 323
 */
export function networkBuyHeliStrike(cost: number): void {
    NetworkBuyHeliStrike(cost, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF0077C797F66A355 | Since: 323
 */
export function networkBuyItem(amount: number, item: number | string, item_name: string): void {
    if (typeof item === 'string') item = GetHashKey(item)
    NetworkBuyItem(amount, item, undefined, undefined, false, item_name, undefined, undefined, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x650A08A280870AF6 | Since: 323
 */
export function networkBuyProperty(cost: number, propertyName: number | string): void {
    if (typeof propertyName === 'string') propertyName = GetHashKey(propertyName)
    NetworkBuyProperty(cost, propertyName, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x75AF80E61248EEBD | Since: 323
 */
export function networkBuySmokes(): void {
    NetworkBuySmokes(0, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A54E33660DED67F | Since: 323
 */
export function networkCanBet(amount: number): boolean {
    return NetworkCanBet(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x5D17BE59D2123284 | Since: 323
 */
export function networkCanReceivePlayerCash(): boolean {
    return NetworkCanReceivePlayerCash(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1C2473301B1C66BA | Since: 323
 */
export function networkCanShareJobCash(): boolean {
    return NetworkCanShareJobCash();
}

/**
 * No comment provided
 * 
 * Hash: 0xAB3CAA6B422164DA | Since: 323
 */
export function networkCanSpend(): boolean {
    return NetworkCanSpendMoney(undefined, false, false, false, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7303E27CC6532080 | Since: 323
 */
export function networkCanSpend2(): [boolean, any] {
    return NetworkCanSpendMoney2(undefined, false, false, false, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3BD101471C7F9EEC | Since: 1734
 */
export function networkCasinoBuyChips(): boolean {
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
 * Hash: 0x158C16F5E4CF41F8 | Since: 1734
 */
export function networkCasinoCanBet(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return NetworkCasinoCanUseGamblingType(hash);
}

/**
 * No comment provided
 * 
 * Hash: 0xF62F6D9528358FE4 | Since: 1734
 */
export function networkCasinoCanBetAmount(): boolean {
    return NetworkCasinoCanGamble(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x394DCDB9E836B7A9 | Since: 1734
 */
export function networkCasinoCanBetPvc(): boolean {
    return NetworkCasinoCanPurchaseChipsWithPvc();
}

/**
 * No comment provided
 * 
 * Hash: 0x8968D4D8C6C40C11 | Since: 1734
 */
export function networkCasinoCanBuyChipsPvc(): boolean {
    return NetworkCasinoCanPurchaseChipsWithPvc2();
}

/**
 * No comment provided
 * 
 * Hash: 0xED44897CB336F480 | Since: 1734
 */
export function networkCasinoSellChips(): boolean {
    return NetworkCasinoSellChips(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA921DED15FDF28F5 | Since: 323
 */
export function networkClearCharacterWallet(characterSlot: number): void {
    NetworkClearCharacterWallet(characterSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x18B7AE224B087E26 | Since: 323
 */
export function networkDeductCash(amount: number): void {
    NetworkDeductCash(amount, undefined, undefined, false, false, false);
}

/**
 * Does nothing (it's a nullsub).
 * 
 * Hash: 0xCD0F5B5D932AE473 | Since: 323
 */
export function networkDeferCashTransactionsUntilShopSave(): void {
    Citizen.invokeNative('0xCD0F5B5D932AE473');
}

/**
 * Note the 2nd parameters are always 1, 0. I have a feeling it deals with your money, wallet, bank. So when you delete the character it of course wipes the wallet cash at that time. So if that was the case, it would be eg, NETWORK_DELETE_CHARACTER(characterIndex, deleteWalletCash, deleteBankCash);
 * 
 * Hash: 0x05A50AF38947EB8D | Since: 323
 */
export function networkDeleteCharacter(characterSlot: number): void {
    NetworkDeleteCharacter(characterSlot, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CB1BE0633C024A8 | Since: 573
 */
export function networkEarnAgency(): void {
    NetworkEarnBossAgency(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x38482AD49CB905C7 | Since: 2545
 */
export function networkEarnAgencyContract(): void {
    Citizen.invokeNative('0x38482AD49CB905C7', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE29F3D5FA63B1B82 | Since: 2545
 */
export function networkEarnAgencyPhone(): void {
    Citizen.invokeNative('0xE29F3D5FA63B1B82', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x663B4B9D11742A12 | Since: 2545
 */
export function networkEarnAgencySafe(): void {
    Citizen.invokeNative('0x663B4B9D11742A12', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD29334ED1A256DBF | Since: 1868
 */
export function networkEarnArcade(): void {
    Citizen.invokeNative('0xD29334ED1A256DBF', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0F99F70C61F14619 | Since: 1604
 */
export function networkEarnArenaCareerProgression(amount: number): void {
    NetworkEarnFromArenaCareerProgression(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE08256F972C7BB2C | Since: 1604
 */
export function networkEarnArenaSkillLevelProgression(amount: number): void {
    NetworkEarnFromArenaSkillLevelProgression(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x631F1CB8FB4130AA | Since: 1604
 */
export function networkEarnArenaWar(amount: number): void {
    NetworkEarnFromArenaWar(amount, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5E7AE8AABE8B7C0D | Since: 1604
 */
export function networkEarnArenaWarAssassinateTarget(amount: number): void {
    NetworkEarnFromAssassinateTargetKilled2(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xA82959062361B259 | Since: 1604
 */
export function networkEarnArenaWarEventCargo(amount: number): void {
    NetworkEarnFromBbEventCargo(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA700D8A9905F78A | Since: 1604
 */
export function networkEarnAssassinateTargetKilled(amount: number): void {
    NetworkEarnFromAssassinateTargetKilled(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x36A7FD5A7194B03E | Since: 2372
 */
export function networkEarnAutoshopBusiness(): void {
    NetworkEarnFromAutoshopBusiness(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC66D1CF99ED7FE25 | Since: 2372
 */
export function networkEarnAutoshopIncome(): void {
    NetworkEarnFromAutoshopIncome(undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x146D4EB6D22A403F | Since: 2545
 */
export function networkEarnAwardContract(): void {
    Citizen.invokeNative('0x146D4EB6D22A403F', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x88D6C327D6C57C45 | Since: 2545
 */
export function networkEarnAwardFixerMission(): void {
    Citizen.invokeNative('0x88D6C327D6C57C45', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7397A115030F1BE3 | Since: 2545
 */
export function networkEarnAwardPhone(): void {
    Citizen.invokeNative('0x7397A115030F1BE3', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B4DBDED84D6A420 | Since: 2545
 */
export function networkEarnAwardShortTrip(): void {
    Citizen.invokeNative('0x5B4DBDED84D6A420', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFDD8D2440DAF1590 | Since: 1604
 */
export function networkEarnBbEventBonus(amount: number): void {
    NetworkEarnFromBbEventBonus(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xA51338E0DCCD4065 | Since: 2189
 */
export function networkEarnBeachPartyLostFound(): void {
    Citizen.invokeNative('0xA51338E0DCCD4065', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x71BEC32FA466E105 | Since: 2699
 */
export function networkEarnBiker(): void {
    NetworkEarnFromBikerIncome(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C5809EB9DF57257 | Since: 2699
 */
export function networkEarnBikerShop(): void {
    NetworkEarnFromBikeShopBusiness(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x08B0CA7A6AB3AC32 | Since: 573
 */
export function networkEarnBoss(): void {
    NetworkEarnBoss(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6B170F9A02E9E87 | Since: 1493
 */
export function networkEarnBountyHunterReward(): void {
    NetworkEarnBountyHunterReward(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBC6227792A188E2E | Since: 2372
 */
export function networkEarnCarclubMembership(): void {
    NetworkEarnFromCarclubMembership(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x973A9781A34F8DEB | Since: 1734
 */
export function networkEarnCasinoAward(amount: number, hash: number | string): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    NetworkEarnFromCasinoAward(amount, hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x83AD64F53F4E9483 | Since: 1734
 */
export function networkEarnCasinoCollectableCompletedCollection(amount: number): void {
    NetworkEarnFromCompleteCollection(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x72E7C7B9615FA3C3 | Since: 1868
 */
export function networkEarnCasinoHeist(): void {
    NetworkEarnCasinoHeist(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3EC7471E6909798A | Since: 1868
 */
export function networkEarnCasinoHeistAwards(): void {
    NetworkEarnCasinoHeistBonus(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x09E8F18641BE2575 | Since: 1734
 */
export function networkEarnCasinoMissionParticipation(amount: number): void {
    NetworkEarnFromCasinoMissionParticipation(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x566FD402B25787DE | Since: 1734
 */
export function networkEarnCasinoMissionReward(amount: number): void {
    NetworkEarnFromCasinoMissionReward(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xAC95ED552157E092 | Since: 1734
 */
export function networkEarnCasinoStoryMissionReward(amount: number): void {
    NetworkEarnFromCasinoStoryMissionReward(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x0819DB99FD2FBBD8 | Since: 1734
 */
export function networkEarnCasinoTimeTrialWin(amount: number): void {
    NetworkEarnFromTimeTrialWin(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x0DD362F14F18942A | Since: 1868
 */
export function networkEarnChallenge(amount: number): void {
    Citizen.invokeNative('0x0DD362F14F18942A', amount, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA95CFB4E02390842 | Since: 1868
 */
export function networkEarnCollectables(): void {
    Citizen.invokeNative('0xA95CFB4E02390842', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5517F90043466049 | Since: 1734
 */
export function networkEarnCollectablesActionFigures(amount: number): void {
    NetworkEarnFromCollectablesActionFigures(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x5C9B198AF5A54FA6 | Since: 2060
 */
export function networkEarnCollectableCompletedCollection(amount: number): void {
    NetworkEarnCollectableCompletedCollection(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x84FF63BD4966F33D | Since: 1734
 */
export function networkEarnCollectableItem(amount: number): void {
    NetworkEarnFromCollectionItem(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5128DF14A5BB86FC | Since: 1734
 */
export function networkEarnDailyObjectiveEvent(amount: number): void {
    NetworkEarnFromDailyObjectiveEvent(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x533073E8A596008C | Since: 2372
 */
export function networkEarnDailyVehicle(): void {
    NetworkEarnFromVehicleAutoshop(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFE65AFE7308E32B2 | Since: 2372
 */
export function networkEarnDailyVehicleBonus(): void {
    NetworkEarnFromVehicleAutoshopBonus(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCAC672087B4A24AB | Since: 1290
 */
export function networkEarnDarChallenge(amount: number): void {
    NetworkEarnFromDarChallenge(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE2E244AB823B4483 | Since: 2060
 */
export function networkEarnDispatchCall(amount: number): void {
    Citizen.invokeNative('0xE2E244AB823B4483', amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x128A747F4A230952 | Since: 1290
 */
export function networkEarnDoomsdayFinaleBonus(amount: number, vehicleHash: number | string): void {
    if (typeof vehicleHash === 'string') vehicleHash = GetHashKey(vehicleHash)
    NetworkEarnFromDoomsdayFinaleBonus(amount, vehicleHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x11B0A20C493F7E36 | Since: 1290
 */
export function networkEarnFirstTimeBonus(): void {
    NetworkEarnJobBonusFirstTimeBonus(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF4A8E57460BF2037 | Since: 2545
 */
export function networkEarnFixerAgencyShortTrip(): void {
    Citizen.invokeNative('0xF4A8E57460BF2037', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA154373C5FE51E8 | Since: 2545
 */
export function networkEarnFixerFinale(): void {
    Citizen.invokeNative('0xBA154373C5FE51E8', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6283E5DE4C4460C6 | Since: 2545
 */
export function networkEarnFixerPrep(): void {
    Citizen.invokeNative('0x6283E5DE4C4460C6', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x235D41210B3A1A5E | Since: 2545
 */
export function networkEarnFixerRivalDelivery(): void {
    Citizen.invokeNative('0x235D41210B3A1A5E', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFFBA1B1F7C0B6F4 | Since: 1493
 */
export function networkEarnFmbbWageBonus(): void {
    NetworkEarnFmbbWageBonus(undefined);
}

/**
 * DSPORT
 * 
 * Hash: 0x515B4A22E4D3C6D7 | Since: 323
 */
export function networkEarnFromAiTargetKill(): void {
    NetworkEarnFromAiTargetKill(undefined, undefined);
}

/**
 * Example for p1: "AM_DISTRACT_COPS"
 * 
 * Hash: 0xFB6DB092FBAE29E6 | Since: 323
 */
export function networkEarnFromAmbientJob(): any {
    return NetworkEarnFromAmbientJob(0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x61326EE6DF15B0CA | Since: 323
 */
export function networkEarnFromBendJob(amount: number, heistHash: string): void {
    NetworkEarnFromBendJob(amount, heistHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x827A5BA1A44ACA6D | Since: 323
 */
export function networkEarnFromBetting(amount: number): void {
    NetworkEarnFromBetting(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x131BB5DA15453ACF | Since: 323
 */
export function networkEarnFromBounty(amount: number): [any, any] {
    return NetworkEarnFromBounty(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x42FCE14F50F27291 | Since: 1493
 */
export function networkEarnFromBusinessBattle(): void {
    NetworkEarnFromBusinessBattle(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0B39CF0D53F1C883 | Since: 1493
 */
export function networkEarnFromBusinessHubSell(): void {
    NetworkEarnFromBusinessHubSell(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8586789730B10CAF | Since: 877
 */
export function networkEarnFromBusinessProduct(amount: number): void {
    NetworkEarnFromBusinessProduct(amount, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x718FBBF67414FA36 | Since: 1290
 */
export function networkEarnFromCashingOut(amount: number): void {
    Citizen.invokeNative('0x718FBBF67414FA36', amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x2B171E6B2F64D8DF | Since: 323
 */
export function networkEarnFromChallengeWin(): any {
    return NetworkEarnFromChallengeWin(undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA75EAC69F59E96E7 | Since: 1493
 */
export function networkEarnFromClubManagementParticipation(): void {
    NetworkEarnFromClubManagementParticipation(undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xECA658CE2A4E5A72 | Since: 757
 */
export function networkEarnFromContraband(amount: number): void {
    NetworkEarnFromContraband(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB1CC1B9EC3007A2A | Since: 323
 */
export function networkEarnFromCrateDrop(amount: number): void {
    NetworkEarnFromCrateDrop(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA009A62990671D4 | Since: 1290
 */
export function networkEarnFromCriminalMastermind(): void {
    NetworkEarnFromCriminalMastermindBonus(undefined, undefined, undefined);
}

/**
 * type either Monthly,Weekly,Daily
 * 
 * Hash: 0x6EA318C91C1A8786 | Since: 323
 */
export function networkEarnFromDailyObjectives(amount: number, _type: string, characterSlot: number): void {
    NetworkEarnFromDailyObjectives(amount, _type, characterSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x84C0116D012E8FC2 | Since: 757
 */
export function networkEarnFromDestroyingContraband(): void {
    NetworkEarnFromDestroyingContraband(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1FDA0AA679C9919B | Since: 1493
 */
export function networkEarnFromFmbbBossWork(): void {
    NetworkEarnFromFmbbBossWork(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC5156361F26E2212 | Since: 1493
 */
export function networkEarnFromFmbbPhonecallMission(): void {
    NetworkEarnFromFmbbPhonecallMission(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA03D4ACE0A3284CE | Since: 323
 */
export function networkEarnFromGangattackPickup(amount: number): void {
    NetworkEarnFromGangPickup(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x31BA138F6304FB9F | Since: 1180
 */
export function networkEarnFromHangarTrade(): void {
    Citizen.invokeNative('0x31BA138F6304FB9F', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x45B8154E077D9E4D | Since: 323
 */
export function networkEarnFromHoldups(amount: number): void {
    NetworkEarnFromHoldups(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xF92A014A634442D6 | Since: 323
 */
export function networkEarnFromImportExport(amount: number, modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    NetworkEarnFromImportExport(amount, modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xE2BB399D90942091 | Since: 2189
 */
export function networkEarnFromIslandHeistDjMission(): void {
    Citizen.invokeNative('0xE2BB399D90942091', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2CC4836834E8A98 | Since: 323
 */
export function networkEarnFromJob(amount: number): void {
    NetworkEarnFromJob(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDEBBF584665411D0 | Since: 1734
 */
export function networkEarnFromJobx2(amount: number): void {
    NetworkEarnFromJobX2(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6816FB4416760775 | Since: 323
 */
export function networkEarnFromJobBonus(): [any, any] {
    return NetworkEarnFromJobBonus(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4337511FA8221D36 | Since: 323
 */
export function networkEarnFromNotBadsport(amount: number): void {
    NetworkEarnFromNotBadsport(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F4D00167E41E0AD | Since: 323
 */
export function networkEarnFromPersonalVehicle(): void {
    NetworkEarnFromPersonalVehicle(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xED1517D3AF17C698 | Since: 323
 */
export function networkEarnFromPickup(amount: number): void {
    NetworkEarnFromPickup(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xC8407624CEF2354B | Since: 791
 */
export function networkEarnFromPremiumJob(amount: number): void {
    NetworkEarnFromPremiumJob(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x849648349D77F5C5 | Since: 323
 */
export function networkEarnFromProperty(amount: number, propertyName: number | string): void {
    if (typeof propertyName === 'string') propertyName = GetHashKey(propertyName)
    NetworkEarnFromProperty(amount, propertyName);
}

/**
 * For the money bags that drop a max of $40,000. Often called 40k bags.
 * 
 * Most likely NETWORK_EARN_FROM_ROB***
 * 
 * Hash: 0xF514621E8EA463D0 | Since: 323
 */
export function networkEarnFromRobArmoredCars(amount: number): void {
    NetworkEarnFromArmourTruck(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x9251B6ABF2D0A5B4 | Since: 1103
 */
export function networkEarnFromSellBunker(amount: number, bunkerHash: number | string): void {
    if (typeof bunkerHash === 'string') bunkerHash = GetHashKey(bunkerHash)
    NetworkEarnFromSellBunker(amount, bunkerHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B7E4FB50D5F3D65 | Since: 1180
 */
export function networkEarnFromSmugglerWork(): void {
    Citizen.invokeNative('0x6B7E4FB50D5F3D65', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB539BD8A4C1EECF8 | Since: 323
 */
export function networkEarnFromVehicle(): void {
    NetworkEarnFromVehicle(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEDEAD9A91EC768B3 | Since: 944
 */
export function networkEarnFromVehicleExport(amount: number): void {
    NetworkEarnFromVehicleExport(amount, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E4ADAFF1830F146 | Since: 757
 */
export function networkEarnFromWarehouse(amount: number, id: number): void {
    NetworkEarnFromWarehouse(amount, id);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9A31475F530DFDA | Since: 1290
 */
export function networkEarnGangopsAward(amount: number): void {
    NetworkEarnFromGangopsAwards(amount, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2597A0D4A4FC2C77 | Since: 1290
 */
export function networkEarnGangopsElite(amount: number, actIndex: number): void {
    NetworkEarnFromGangopsElite(amount, undefined, actIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x1C121FC9545E0D52 | Since: 1290
 */
export function networkEarnGangopsFinale(amount: number): void {
    NetworkEarnFromGangopsJobsFinale(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xED26584F6BDCBBFD | Since: 1290
 */
export function networkEarnGangopsPrepParticipation(amount: number): void {
    NetworkEarnFromGangopsJobsPrepParticipation(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9160796D47A2CF8 | Since: 1290
 */
export function networkEarnGangopsSetup(amount: number): void {
    NetworkEarnFromGangopsJobsSetup(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2DCB19ABAB0380A8 | Since: 1290
 */
export function networkEarnGangopsWages(amount: number): void {
    NetworkEarnFromGangopsWages(amount, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x15BB2A5C757EB91F | Since: 1290
 */
export function networkEarnGangopsWagesBonus(amount: number): void {
    NetworkEarnFromGangopsWagesBonus(amount, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xCDA1C62BE2777802 | Since: 573
 */
export function networkEarnGoon(): void {
    NetworkEarnGoon(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE8815FE993896AD3 | Since: 1493
 */
export function networkEarnHackerTruck(amount: number): void {
    NetworkEarnFromHackerTruckMission(undefined, amount, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D4FDBB035229669 | Since: 1290
 */
export function networkEarnHeistAward(): void {
    NetworkEarnJobBonusHeistAward(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD21D111C46BA9F15 | Since: 2189
 */
export function networkEarnIslandHeist(amount1: number, amount2: number): void {
    NetworkEarnIslandHeist(amount1, undefined, undefined, undefined, amount2, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0F82D68C7039158 | Since: 1493
 */
export function networkEarnNightclub(): void {
    Citizen.invokeNative('0xE0F82D68C7039158', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC6E74CF8C884C880 | Since: 1493
 */
export function networkEarnNightclubAndWarehouse(): void {
    Citizen.invokeNative('0xC6E74CF8C884C880', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB4DEAE67F35E2ACD | Since: 1493
 */
export function networkEarnNightclubDancing(): void {
    Citizen.invokeNative('0xB4DEAE67F35E2ACD', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x55A1E095DB052FA5 | Since: 877
 */
export function networkEarnPurchaseClubHouse(): void {
    Citizen.invokeNative('0x55A1E095DB052FA5', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFF49EE984E7AAE8 | Since: 1734
 */
export function networkEarnRcTimeTrial(amount: number): void {
    NetworkEarnFromRcTimeTrial(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A5349B773584675 | Since: 1290
 */
export function networkEarnRdrBonus(amount: number): void {
    NetworkEarnFromRdrBonus(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0E1E2FF3F4EC11AA | Since: 1290
 */
export function networkEarnSellBase(amount: number, baseNameHash: number | string): void {
    if (typeof baseNameHash === 'string') baseNameHash = GetHashKey(baseNameHash)
    NetworkEarnFromSellBase(amount, baseNameHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x8BCB27A057DF7B7F | Since: 1734
 */
export function networkEarnSellPrizeVehicle(amount: number): void {
    NetworkEarnFromSellingVehicle(amount, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x45087AE480B233AC | Since: 2699
 */
export function networkEarnSightseeingReward(): void {
    NetworkEarnFromSightseeing(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDEE612F2D71B0308 | Since: 1180
 */
export function networkEarnSmugglerAgency(amount: number): void {
    NetworkEarnFromSmuggling(amount, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x676C48776CACBB5A | Since: 1604
 */
export function networkEarnSpinTheWheelCash(amount: number): void {
    NetworkEarnFromSpinTheWheelCash(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B669CF2299A271F | Since: 1290
 */
export function networkEarnTargetRefund(amount: number): void {
    NetworkEarnFromTargetRefund(amount, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB846F547D3792DF6 | Since: 2372
 */
export function networkEarnTunerAward(): void {
    NetworkEarnFromTunerAward(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBCB266247193AC61 | Since: 2372
 */
export function networkEarnTunerRobbery(): void {
    NetworkEarnFromTunerFinale(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD07C7C3F1995108C | Since: 2545
 */
export function networkEarnUpgradeAgency(): void {
    Citizen.invokeNative('0xD07C7C3F1995108C', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C3B75694F7E0D9C | Since: 1868
 */
export function networkEarnUpgradeArcade(): void {
    Citizen.invokeNative('0x4C3B75694F7E0D9C', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC10322A8D3E061EE | Since: 2372
 */
export function networkEarnUpgradeAutoshop(): void {
    NetworkEarnFromUpgradeAutoshopLocation(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x35F8DA0E8A31EF1B | Since: 1180
 */
export function networkEarnWagePayment(amount: number): void {
    NetworkEarnFromWagePayment(amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x005ACA7100BD101D | Since: 1180
 */
export function networkEarnWagePaymentBonus(amount: number): void {
    NetworkEarnFromWagePaymentBonus(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE68E30D89F97132 | Since: 2060
 */
export function networkEarnYatchMission(amount: number): void {
    Citizen.invokeNative('0xDE68E30D89F97132', amount, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7C4FCCD2E4DEB394 | Since: 323
 */
export function networkEconomyHasFixedCrazyNumbers(): boolean {
    return Citizen.invokeNative('0x7C4FCCD2E4DEB394');
}

/**
 * Returns true if bank balance >= amount.
 * 
 * Hash: 0xA31FD6A0865B6D14 | Since: 323
 */
export function networkGetCanSpendFromBank(amount: number): boolean {
    return NetworkGetVcBankBalanceIsNotLessThan(amount);
}

/**
 * Returns true if bank balance + wallet balance >= amount.
 * 
 * Hash: 0xDC18531D7019A535 | Since: 323
 */
export function networkGetCanSpendFromBankAndWallet(amount: number, characterSlot: number): boolean {
    return NetworkGetVcBankWalletBalanceIsNotLessThan(amount, characterSlot);
}

/**
 * Returns true if wallet balance >= amount.
 * 
 * Hash: 0xED5AB8860415BABA | Since: 323
 */
export function networkGetCanSpendFromWallet(amount: number, characterSlot: number): boolean {
    return NetworkGetVcWalletBalanceIsNotLessThan(amount, characterSlot);
}

/**
 * Returns false if amount > wallet balance or daily transfer limit has been hit.
 * 
 * Hash: 0x08E8EEADFD0DC4A0 | Since: 323
 */
export function networkGetCanTransferCash(amount: number): boolean {
    return Citizen.invokeNative('0x08E8EEADFD0DC4A0', amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x5D1E75F91C07DEE5 | Since: 323
 */
export function networkGetEvcBalance(): number {
    return NetworkGetEvcBalance();
}

/**
 * No comment provided
 * 
 * Hash: 0xFB2456B2040A6A67 | Since: 323
 */
export function networkGetPlayerIsHighEarner(): boolean {
    return NetworkGetIsHighEarner();
}

/**
 * No comment provided
 * 
 * Hash: 0x4F54F3B6C202FB4E | Since: 323
 */
export function networkGetPvcBalance(): number {
    return NetworkGetPvcBalance();
}

/**
 * Retturns the same value as NETWORK_GET_REMAINING_TRANSFER_BALANCE.
 * 
 * Hash: 0x13A8DE2FD77D04F3 | Since: 323
 */
export function networkGetPvcTransferBalance(): number {
    return NetworkGetPvcTransferBalance();
}

/**
 * Returns the same value as NETWORK_GET_PVC_TRANSFER_BALANCE.
 * 
 * Hash: 0xEA560AC9EEB1E19B | Since: 323
 */
export function networkGetRemainingTransferBalance(): number {
    return NetworkGetRemainingTransferBalance();
}

/**
 * No comment provided
 * 
 * Hash: 0xA6FA3979BED01B81 | Since: 323
 */
export function networkGetStringBankBalance(): string {
    return NetworkGetStringBankBalance();
}

/**
 * No comment provided
 * 
 * Hash: 0x700AF71AE615E6DD | Since: 323
 */
export function networkGetStringBankWalletBalance(character: number): string {
    return NetworkGetStringBankWalletBalance(character);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9B10B529DCFB33B | Since: 323
 */
export function networkGetStringWalletBalance(characterSlot: number): string {
    return NetworkGetStringWalletBalance(characterSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x5CBAD97E059E1B94 | Since: 323
 */
export function networkGetVcBalance(): number {
    return NetworkGetVcBalance();
}

/**
 * No comment provided
 * 
 * Hash: 0x76EF28DA05EA395A | Since: 323
 */
export function networkGetVcBankBalance(): number {
    return NetworkGetVcBankBalance();
}

/**
 * No comment provided
 * 
 * Hash: 0xA40F9C2623F6A8B5 | Since: 323
 */
export function networkGetVcWalletBalance(characterSlot: number): number {
    return NetworkGetVcWalletBalance(characterSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0xFB18DF9CB95E0105 | Since: 323
 */
export function networkGivePlayerJobshareCash(amount: number): any {
    return NetworkGivePlayerJobshareCash(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x3DA5ECD1A56CBA6D | Since: 323
 */
export function networkInitializeCash(wallet: number, bank: number): void {
    NetworkInitializeCash(wallet, bank);
}

/**
 * No comment provided
 * 
 * Hash: 0x821418C727FCACD7 | Since: 791
 */
export function networkManualDeleteCharacter(characterSlot: number): void {
    NetworkManualDeleteCharacter(characterSlot);
}

/**
 * No comment provided
 * 
 * Hash: 0x81404F3DC124FE5B | Since: 323
 */
export function networkMoneyCanBet(amount: number): boolean {
    return NetworkMoneyCanBet(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5FD5ED82CBBE9989 | Since: 323
 */
export function networkPayEmployeeWage(): void {
    NetworkPayEmployeeWage(undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9346E14F2AF74D46 | Since: 323
 */
export function networkPayMatchEntryFee(amount: number, matchId: string): void {
    NetworkPayMatchEntryFee(amount, matchId, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x56A3B51944C50598 | Since: 323
 */
export function networkReceivePlayerJobshareCash(value: number): any {
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
 * Hash: 0xF9C812CD7C46E817 | Since: 323
 */
export function networkRefundCash(index: number, context: string, reason: string): void {
    NetworkRefundCash(index, context, reason, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x1B882107C23A9022 | Since: 1290
 */
export function networkServiceEarnGangopsRivalDelivery(earnedMoney: number): void {
    NetworkRivalDeliveryCompleted(earnedMoney);
}

/**
 * No comment provided
 * 
 * Hash: 0x1B2120405080125C | Since: 2545
 */
export function networkSpendAgency(): void {
    Citizen.invokeNative('0x1B2120405080125C', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1254B5B3925EFD3D | Since: 2545
 */
export function networkSpendApartmentUtilities(amount: number): any {
    return Citizen.invokeNative('0x1254B5B3925EFD3D', amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x43AA7FAC4E6D6687 | Since: 1868
 */
export function networkSpendArcade(): void {
    NetworkSpentArcadeGeneric(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB5B58E24868CB09E | Since: 1868
 */
export function networkSpendArcadeMgmt(): void {
    Citizen.invokeNative('0xB5B58E24868CB09E', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x619496D837EFD920 | Since: 1604
 */
export function networkSpendArenaPremium(amount: number): void {
    NetworkSpentArenaPremium(amount, false, false);
}

/**
 * type either, 1 for cam spectate, 2 for drone
 * 
 * Hash: 0x7049BF858601DC0F | Since: 1604
 */
export function networkSpendArenaSpectatorBox(amount: number, _type: number): void {
    NetworkSpentArenaSpectatorBox(amount, _type, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9BEA350D7C48061B | Since: 2372
 */
export function networkSpendAutoshopModify(): void {
    NetworkSpentAutoshopModifications(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x54ABA22FA6371249 | Since: 2189
 */
export function networkSpendBeachParty(): void {
    NetworkSpentBeachPartyGeneric(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x923AEA8E78F8DF0B | Since: 2699
 */
export function networkSpendBikeShop(): void {
    NetworkSpentBikeShopModify(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDBC966A01C02BCA7 | Since: 573
 */
export function networkSpendBoss(): void {
    NetworkSpentPayBoss(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1BEA0CD93470BB1F | Since: 1493
 */
export function networkSpendBountyHunterMission(amount: number): void {
    NetworkSpentBountyHunterMission(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x92D1CFDA1227FF1C | Since: 2545
 */
export function networkSpendBusinessPropertyFees(): void {
    Citizen.invokeNative('0x92D1CFDA1227FF1C', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEA8CD3C9B3C35884 | Since: 2545
 */
export function networkSpendBuyAgency(): void {
    Citizen.invokeNative('0xEA8CD3C9B3C35884', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x870289A558348378 | Since: 1868
 */
export function networkSpendBuyArcade(): void {
    Citizen.invokeNative('0x870289A558348378', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x40D5DA9550B7CB46 | Since: 1604
 */
export function networkSpendBuyArena(amount: number): void {
    NetworkSpentBuyArena(amount, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEEB7E5D1FEB20869 | Since: 2372
 */
export function networkSpendBuyAutoshop(): void {
    NetworkSpentBuyAutoshop(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x34A6FC4D06C4DA0F | Since: 1734
 */
export function networkSpendBuyCasino(amount: number): any {
    return NetworkSpentBuyCasino(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x90CD7C6871FBF1B4 | Since: 2189
 */
export function networkSpendBuySub(): void {
    Citizen.invokeNative('0x90CD7C6871FBF1B4', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x925227803A0EAA1B | Since: 2372
 */
export function networkSpendCarClubBar(): void {
    NetworkSpentCarclub(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1464E17207CD36E2 | Since: 2372
 */
export function networkSpendCarClubMembership(amount1: number, amount2: number): void {
    NetworkSpentCarclubMembership(amount1, undefined, undefined, amount2, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1E46824E6FB92B5 | Since: 2372
 */
export function networkSpendCarClubTakeover(): void {
    NetworkSpentCarclubTakeover(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC991C255AA6D90B2 | Since: 2189
 */
export function networkSpendCasinoClub(amount1: number, amount2: number): void {
    NetworkSpentCasinoClubGeneric(amount1, undefined, false, undefined, 0, 0, 0, amount2, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x88BF9B612B84D3C3 | Since: 1734
 */
export function networkSpendCasinoGeneric(amount: number): void {
    NetworkSpentCasinoGeneric(amount, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD30E8392F407C328 | Since: 1868
 */
export function networkSpendCasinoHeist(): void {
    NetworkSpentCasinoHeist(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x487009DD91D93429 | Since: 1868
 */
export function networkSpendCasinoHeistSkipMission(): void {
    NetworkSpentCasinoHeistSkipMission(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFBBE0570EDF39D46 | Since: 1734
 */
export function networkSpendCasinoMembership(amount: number): void {
    NetworkSpentCasinoMembership(amount, false, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD86581F9E7CDA383 | Since: 2545
 */
export function networkSpendCompSuv(): void {
    Citizen.invokeNative('0xD86581F9E7CDA383', undefined, undefined, undefined, undefined);
}

/**
 * Hardcoded to return 0.
 * 
 * Hash: 0x9B5016A6433A68C5 | Since: 323
 */
export function networkSpendEarnedFromBankAndWallets(amount: number): number {
    return Citizen.invokeNative('0x9B5016A6433A68C5', amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x771ADB0E7635B7BF | Since: 1290
 */
export function networkSpendGangopsCannon(): void {
    NetworkSpentGangopsCannon(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A7CEC72C3443BCC | Since: 1290
 */
export function networkSpendGangopsRepairCost(): void {
    Citizen.invokeNative('0x2A7CEC72C3443BCC', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA947AE8880D5C18 | Since: 1290
 */
export function networkSpendGangopsSkipMission(): void {
    NetworkSpentGangopsStartMission(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA19EC0786E326E06 | Since: 1290
 */
export function networkSpendGangopsStartStrand(_type: number, amount: number): void {
    NetworkSpentGangopsStartStrand(_type, amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5ECE6FD7B4EC8D6A | Since: 1290
 */
export function networkSpendGangopsTripSkip(amount: number): void {
    NetworkSpentGangopsTripSkip(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x08A1B82B91900682 | Since: 573
 */
export function networkSpendGoon(amount: number): void {
    NetworkSpentPayGoon(0, 0, amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x2CEB0E0BC2A77C05 | Since: 2699
 */
export function networkSpendGunrunning(): void {
    NetworkSpentGunrunningContactService(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF8793B91EA094A7 | Since: 2545
 */
export function networkSpendHidden(): void {
    Citizen.invokeNative('0xBF8793B91EA094A7', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x93AA4165CB67E925 | Since: 2372
 */
export function networkSpendInteractionMenuAbility(): void {
    NetworkSpentImAbility(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE86689E5F82DE429 | Since: 2189
 */
export function networkSpendIslandHeist(): void {
    NetworkSpentIslandHeist(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5F5A060439C2F5D | Since: 1604
 */
export function networkSpendMakeItRain(amount: number): void {
    NetworkSpentMakeItRain(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x65482BFD0923C8A1 | Since: 1493
 */
export function networkSpendNightclubAndWarehouse(): void {
    Citizen.invokeNative('0x65482BFD0923C8A1', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDD21B016E4289465 | Since: 1493
 */
export function networkSpendNightclubBarDrink(amount: number): void {
    NetworkSpentNightclubBarDrink(amount, undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xEAD3D81F2C3A1458 | Since: 1868
 */
export function networkSpendPlayArcade(): void {
    NetworkSpentArcadeGame(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB9F7A469460E7A4A | Since: 2372
 */
export function networkSpendSetCommonFields(): void {
    NetworkSpentFromBank(undefined, undefined, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7E2F4E8F44CAF4E0 | Since: 2699
 */
export function networkSpendSetDiscount(): void {
    NetworkSpentSalesDisplay(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD9DF467CBE4398C8 | Since: 2545
 */
export function networkSpendSourceBike(): void {
    Citizen.invokeNative('0xD9DF467CBE4398C8', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9A5BD1D0000B339C | Since: 1604
 */
export function networkSpendSpinTheWheelPayment(amount: number): void {
    NetworkSpentSpinTheWheelPayment(amount, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C8BC1488527AAAB | Since: 2189
 */
export function networkSpendSubmarine(): void {
    NetworkSpentSubmarine(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEBD482B82ACB8BAD | Since: 2545
 */
export function networkSpendSupply(): void {
    Citizen.invokeNative('0xEBD482B82ACB8BAD', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x61A2DF64ED2D396E | Since: 2545
 */
export function networkSpendSuvFstTrvl(): void {
    Citizen.invokeNative('0x61A2DF64ED2D396E', 0, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6CCA64840589A3B6 | Since: 2545
 */
export function networkSpendUpgradeAgency(): void {
    Citizen.invokeNative('0x6CCA64840589A3B6', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5574637681911FDA | Since: 1868
 */
export function networkSpendUpgradeArcade(): void {
    Citizen.invokeNative('0x5574637681911FDA', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x037ABB06825D7AB1 | Since: 1604
 */
export function networkSpendUpgradeArena(amount: number): void {
    NetworkSpentUpgradeArena(amount, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDD829AA198FDC46C | Since: 2372
 */
export function networkSpendUpgradeAutoshop(): void {
    NetworkSpentUpgradeAutoshop(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4740D62BC1B4EBEA | Since: 1734
 */
export function networkSpendUpgradeCasino(amount: number): any {
    return NetworkSpentUpgradeCasino(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x89049A84065CE68E | Since: 2189
 */
export function networkSpendUpgradeSub(): void {
    NetworkSpentUpgradeSub(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x02D24A35A9CC3503 | Since: 2699
 */
export function networkSpendVehicleRequested(): void {
    NetworkSpentVehicleRequested(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB162DC95C0A3317B | Since: 323
 */
export function networkSpentAmmoDrop(): void {
    NetworkSpentAmmoDrop(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x14EAEA58F93B55AF | Since: 1604
 */
export function networkSpentArenaJoinSpectator(amount: number): void {
    NetworkSpentArenaJoinSpectator(amount, undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x812F5488B1B2A299 | Since: 323
 */
export function networkSpentArrestBail(): void {
    NetworkSpentArrestBail(undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5D97630A8A0EF123 | Since: 1103
 */
export function networkSpentBallisticEquipment(amount: number): void {
    NetworkSpentBallisticEquipment(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA230C9682556CF1 | Since: 323
 */
export function networkSpentBankInterest(): void {
    NetworkSpentBankInterest(0, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x1C436FD11FFA692F | Since: 323
 */
export function networkSpentBetting(amount: number, matchId: string): void {
    NetworkSpentBetting(amount, 0, matchId, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x524EE43A37232C00 | Since: 323
 */
export function networkSpentBoatPickup(): void {
    NetworkSpentBoatPickup(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFBE02CD385356BD | Since: 573
 */
export function networkSpentBossGoon(amount: number): boolean {
    return NetworkSpentBoss(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x29B260B84947DFCC | Since: 323
 */
export function networkSpentBounty(): void {
    NetworkSpentBounty(undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6DD8458CE24012C | Since: 323
 */
export function networkSpentBullShark(): void {
    NetworkSpentBullShark(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4EA3F425C7744D21 | Since: 1290
 */
export function networkSpentBuyBase(): void {
    NetworkSpentBuyBase(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x12D148D26538D0F9 | Since: 1103
 */
export function networkSpentBuyBunker(): void {
    NetworkSpentBuyBunker(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA628A745E2275C5D | Since: 323
 */
export function networkSpentBuyOfftheradar(): void {
    NetworkSpentBuyOfftheradar(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6D3A430D1A809179 | Since: 323
 */
export function networkSpentBuyPassiveMode(): void {
    NetworkSpentBuyPassiveMode(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E176F1B18BC0637 | Since: 323
 */
export function networkSpentBuyRevealPlayers(): void {
    NetworkSpentBuyRevealPlayers(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CCE73BC7A11E885 | Since: 1290
 */
export function networkSpentBuyTiltrotor(): void {
    NetworkSpentBuyTiltrotor(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAC272C0AE01B4BD8 | Since: 1103
 */
export function networkSpentBuyTruck(): void {
    NetworkSpentBuyTruck(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE1B13771A843C4F6 | Since: 323
 */
export function networkSpentBuyWantedlevel(): any {
    return NetworkSpentBuyWantedlevel(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xACDE7185B374177C | Since: 323
 */
export function networkSpentCallPlayer(): any {
    return NetworkSpentCallPlayer(undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x948705F6F9C50824 | Since: 2699
 */
export function networkSpentCargoSourcing(): void {
    NetworkSpentCargoSourcing(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEC03C719DB2F4306 | Since: 323
 */
export function networkSpentCarwash(): void {
    NetworkSpentCarwash(undefined, undefined, undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x289016EC778D60E0 | Since: 323
 */
export function networkSpentCashDrop(amount: number): void {
    NetworkSpentCashDrop(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F456788B05FAEAC | Since: 944
 */
export function networkSpentChangeAppearance(): void {
    Citizen.invokeNative('0x5F456788B05FAEAC', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B38ECB05A63A685 | Since: 323
 */
export function networkSpentCinema(): void {
    NetworkSpentCinema(undefined, undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5BBBD92186E1F1C5 | Since: 1290
 */
export function networkSpentEmployAssassins(): void {
    NetworkSpentEmployAssassins(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6A445B64ED7ABEB5 | Since: 323
 */
export function networkSpentFromRockstar(): void {
    NetworkSpentFromRockstar(0, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB1F1346FD57685D7 | Since: 1180
 */
export function networkSpentHangarStaffCharges(amount: number): void {
    NetworkSpentHangarStaffCharges(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB18AC2ECBB15CB6A | Since: 1180
 */
export function networkSpentHangarUtilityCharges(amount: number): void {
    NetworkSpentHangarUtilityCharges(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7BF1D73DB2ECA492 | Since: 323
 */
export function networkSpentHeliPickup(): void {
    NetworkSpentHeliPickup(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE7B80E2BF9D80BD6 | Since: 323
 */
export function networkSpentHireMercenary(): void {
    NetworkSpentHireMercenary(undefined, false, false, undefined);
}

/**
 * Only used once in a script (am_contact_requests)
 * p1 = 0
 * p2 = 1
 * 
 * Hash: 0xE404BFB981665BF0 | Since: 323
 */
export function networkSpentHireMugger(): void {
    NetworkSpentHireMugger(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD9B86B9872039763 | Since: 323
 */
export function networkSpentHoldups(): void {
    NetworkSpentHoldups(undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC1952F3773BA18FE | Since: 944
 */
export function networkSpentImportExportRepair(): void {
    NetworkSpentImportExportRepair(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE99784E4467689C | Since: 323
 */
export function networkSpentInStripclub(): void {
    NetworkSpentInStripclub(undefined, false, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x28F174A67B8D0C2F | Since: 323
 */
export function networkSpentJobSkip(amount: number, matchId: string): void {
    NetworkSpentJobSkip(amount, matchId, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5BCDE0F640C773D2 | Since: 877
 */
export function networkSpentJukebox(): void {
    NetworkSpentJukebox(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD7CCCBA28C4ECAF0 | Since: 877
 */
export function networkSpentMcAbility(): void {
    NetworkSpentBaService(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCD4D66B43B1DD28D | Since: 2189
 */
export function networkSpentMoveSubmarine(): void {
    Citizen.invokeNative('0xCD4D66B43B1DD28D', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE7DF4E0545DFB56E | Since: 573
 */
export function networkSpentMoveYacht(amount: number): void {
    NetworkSpentMoveYacht(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x876056684281655D | Since: 1493
 */
export function networkSpentNightclubEntryFee(player: number | string | IPlayer, amount: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkSpentNightclubEntryFee(_player, amount, undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD5BB406F4E04019F | Since: 323
 */
export function networkSpentNoCops(): void {
    NetworkSpentNoCops(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE8B0B270B6E7C76E | Since: 757
 */
export function networkSpentOrderBodyguardVehicle(): void {
    NetworkSpentOrderBodyguardVehicle(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x05F04155A226FBBF | Since: 757
 */
export function networkSpentOrderWarehouseVehicle(): void {
    NetworkSpentOrderWarehouseVehicle(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0035BB914316F1E3 | Since: 877
 */
export function networkSpentPayBusinessSupplies(): void {
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
 * Hash: 0x9FF28D88C766E3E8 | Since: 323
 */
export function networkSpentPayVehicleInsurancePremium(amount: number, vehicleModel: number | string, notBankrupt: boolean, hasTheMoney: boolean): any {
    if (typeof vehicleModel === 'string') vehicleModel = GetHashKey(vehicleModel)
    return NetworkSpentPayVehicleInsurancePremium(amount, vehicleModel, notBankrupt, hasTheMoney);
}

/**
 * No comment provided
 * 
 * Hash: 0x0FE8E1FCD2B86B33 | Since: 757
 */
export function networkSpentPaHeliPickup(): void {
    NetworkSpentPaServiceHeliPickup(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB49ECA122467D05F | Since: 757
 */
export function networkSpentPaServiceDancer(): void {
    NetworkSpentPaServiceDancer(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x112209CE0290C03A | Since: 757
 */
export function networkSpentPaServiceHeli(): void {
    Citizen.invokeNative('0x112209CE0290C03A', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE23ADC6FCB1F29AE | Since: 757
 */
export function networkSpentPaServiceImpound(): void {
    Citizen.invokeNative('0xE23ADC6FCB1F29AE', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0D30EB83668E63C5 | Since: 757
 */
export function networkSpentPaServiceSnack(): void {
    Citizen.invokeNative('0x0D30EB83668E63C5', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xED5FD7AF10F5E262 | Since: 757
 */
export function networkSpentPaServiceVehicle(): void {
    Citizen.invokeNative('0xED5FD7AF10F5E262', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7C99101F7FCE2EE5 | Since: 323
 */
export function networkSpentPlayerHealthcare(): void {
    NetworkSpentPlayerHealthcare(0, 0, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB21B89501CFAC79E | Since: 323
 */
export function networkSpentProstitutes(): void {
    NetworkSpentProstitutes(undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x6FD97159FE3C971A | Since: 877
 */
export function networkSpentPurchaseBusinessProperty(): void {
    Citizen.invokeNative('0x6FD97159FE3C971A', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x998E18CEB44487FC | Since: 877
 */
export function networkSpentPurchaseClubHouse(): void {
    Citizen.invokeNative('0x998E18CEB44487FC', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A93C46AAB1EACC9 | Since: 1493
 */
export function networkSpentPurchaseHackerTruck(): void {
    Citizen.invokeNative('0x2A93C46AAB1EACC9', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCCB339CC970452DA | Since: 1180
 */
export function networkSpentPurchaseHangar(): void {
    NetworkSpentPurchaseHangar(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x33981D6804E62F49 | Since: 944
 */
export function networkSpentPurchaseImpexpWarehouseProperty(amount: number): any {
    return NetworkSpentPurchaseWarehouse(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xED76D195E6E3BF7F | Since: 1493
 */
export function networkSpentPurchaseNightclubAndWarehouse(): void {
    Citizen.invokeNative('0xED76D195E6E3BF7F', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB4C2EC463672474E | Since: 944
 */
export function networkSpentPurchaseOfficeGarage(): void {
    Citizen.invokeNative('0xB4C2EC463672474E', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x69EF772B192614C1 | Since: 757
 */
export function networkSpentPurchaseOfficeProperty(): void {
    Citizen.invokeNative('0x69EF772B192614C1', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBD0EFB25CCA8F97A | Since: 757
 */
export function networkSpentPurchaseWarehouseProperty(): void {
    Citizen.invokeNative('0xBD0EFB25CCA8F97A', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE284D46FFDB82E36 | Since: 1493
 */
export function networkSpentRdrHatchetBonus(amount: number): void {
    NetworkSpentRdrhatchetBonus(amount, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6C8A544E4CF14FC | Since: 1493
 */
export function networkSpentRehireDj(amount: number): void {
    NetworkSpentRehireDj(amount, undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xFC4EE00A7B3BFB76 | Since: 573
 */
export function networkSpentRenameOrganization(): void {
    NetworkSpentRenameOrganization(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D26502BB97BFE62 | Since: 323
 */
export function networkSpentRequestHeist(): void {
    NetworkSpentRequestHeist(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8204DA7934DF3155 | Since: 323
 */
export function networkSpentRequestJob(): void {
    NetworkSpentRequestJob(undefined, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x995A65F15F581359 | Since: 323
 */
export function networkSpentRobbedByMugger(amount: number): void {
    NetworkSpentRobbedByMugger(amount, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x17C3A7D31EAE39F9 | Since: 323
 */
export function networkSpentTaxi(amount: number): void {
    NetworkSpentTaxi(amount, false, false, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7FE61782AD94CC09 | Since: 323
 */
export function networkSpentTelescope(): void {
    NetworkSpentTelescope(undefined, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA51B086B0B2C0F7A | Since: 877
 */
export function networkSpentTradeBusinessProperty(): void {
    Citizen.invokeNative('0xA51B086B0B2C0F7A', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2FAB6614CE22E196 | Since: 944
 */
export function networkSpentTradeImpexpWarehouseProperty(): void {
    Citizen.invokeNative('0x2FAB6614CE22E196', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3DD3F33A5D55EA6F | Since: 1290
 */
export function networkSpentUpgradeBase(): void {
    NetworkSpentUpgradeBase(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x675D19C6067CAE08 | Since: 877
 */
export function networkSpentUpgradeBusinessProperty(): void {
    Citizen.invokeNative('0x675D19C6067CAE08', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA07759E6FDDD7CF | Since: 877
 */
export function networkSpentUpgradeClubHouse(): void {
    Citizen.invokeNative('0xFA07759E6FDDD7CF', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x226C284C830D0CA8 | Since: 1493
 */
export function networkSpentUpgradeHackerTruck(): void {
    Citizen.invokeNative('0x226C284C830D0CA8', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x615EB504B0788DAF | Since: 1180
 */
export function networkSpentUpgradeHangar(): void {
    NetworkSpentUpgradeHangar(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4128464231E3CA0B | Since: 944
 */
export function networkSpentUpgradeImpexpWarehouseProperty(): void {
    Citizen.invokeNative('0x4128464231E3CA0B', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1DC9B749E7AE282B | Since: 1493
 */
export function networkSpentUpgradeNightclubAndWarehouse(): void {
    Citizen.invokeNative('0x1DC9B749E7AE282B', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2AFC2D19B50797F2 | Since: 944
 */
export function networkSpentUpgradeOfficeGarage(): void {
    Citizen.invokeNative('0x2AFC2D19B50797F2', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8E243837643D9583 | Since: 757
 */
export function networkSpentUpgradeOfficeProperty(): void {
    Citizen.invokeNative('0x8E243837643D9583', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x165E135D6DFA2907 | Since: 1290
 */
export function networkSpentUpgradeTiltrotor(): void {
    NetworkSpentUpgradeTiltrotor(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x365E877C61D6988B | Since: 1103
 */
export function networkSpentUpgradeTruck(): void {
    NetworkSpentUpgradeTruck(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA95F667A755725DA | Since: 757
 */
export function networkSpentUpgradeWarehouseProperty(): void {
    Citizen.invokeNative('0xA95F667A755725DA', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C82D21A77C22D49 | Since: 1103
 */
export function networkSpentUpradeBunker(): void {
    NetworkSpentUpgradeBunker(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA75CCF58A60A5FD1 | Since: 944
 */
export function networkSpentVehicleExportMods(): void {
    NetworkSpentVehicleExportMods(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD99DB210089617FE | Since: 573
 */
export function networkSpentWager(amount: number): void {
    NetworkSpentWager(undefined, undefined, amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x59498BC8B1C8B15C | Since: 2699
 */
export function networkYohanSourceGoods(): void {
    NetworkEarnFromBusinessHubSource(undefined, undefined, undefined, undefined);
}

/**
 * This isn't a hash collision.
 * 
 * Hash: 0x20194D48EAEC9A41 | Since: 323
 */
export function processCashGift(): [string, number, number] {
    return ProcessCashGift(undefined);
}

/**
 * This function is hard-coded to always return 1.
 * 
 * Hash: 0x6FCF8DDEA146C45B | Since: 323
 */
export function wasVcWithdrawalSuccessful(): boolean {
    return Citizen.invokeNative('0x6FCF8DDEA146C45B', undefined);
}

/**
 * Does nothing and always returns 0.
 * 
 * Hash: 0xF70EFA14FE091429 | Since: 323
 */
export function withdrawVc(amount: number): number {
    return WithdrawVc(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xE03B9F95556E48E9 | Since: 3095
 */
export function networkClearTransactionTelemetryNonce(): void {
    Citizen.invokeNative('0xE03B9F95556E48E9');
}

/**
 * Used for SERVICE_EARN_AVENGER_OPERATIONS & SERVICE_EARN_AVENGER_OPS_BONUS
 * 
 * Hash: 0x55F006B9D4A46C1D | Since: 2944
 */
export function networkEarnAvenger(amount: number): void {
    Citizen.invokeNative('0x55F006B9D4A46C1D', amount, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1A8165767AD2D23 | Since: 2802
 */
export function networkEarnAwardAcidLab(): void {
    Citizen.invokeNative('0xD1A8165767AD2D23', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC30650FA74A19D02 | Since: 2802
 */
export function networkEarnAwardDailyStash(): void {
    Citizen.invokeNative('0xC30650FA74A19D02', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD01EBAEA1F905EF6 | Since: 2802
 */
export function networkEarnAwardDeadDrop(): void {
    Citizen.invokeNative('0xD01EBAEA1F905EF6', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDF047577F1A02A7 | Since: 2802
 */
export function networkEarnAwardJuggaloMission(): void {
    Citizen.invokeNative('0xDDF047577F1A02A7', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBEAFBB1B98B7EF55 | Since: 2802
 */
export function networkEarnAwardRandomEvent(): void {
    Citizen.invokeNative('0xBEAFBB1B98B7EF55', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA914768AD35CD3A5 | Since: 2802
 */
export function networkEarnAwardTaxi(): void {
    Citizen.invokeNative('0xA914768AD35CD3A5', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDCEF983C24191997 | Since: 2944
 */
export function networkEarnBonusObjective(amount: number): void {
    Citizen.invokeNative('0xDCEF983C24191997', amount, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCABC9874AFA70D6D | Since: 2802
 */
export function networkEarnDailyStashHouseCompleted(): void {
    Citizen.invokeNative('0xCABC9874AFA70D6D', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9C0C6BD0F94CE391 | Since: 2802
 */
export function networkEarnDailyStashHouseParticipation(): void {
    Citizen.invokeNative('0x9C0C6BD0F94CE391', undefined, undefined);
}

/**
 * JUGGALO_PHONE_MISSION...
 * 
 * Hash: 0xCE4452AE85F5E252 | Since: 2802
 */
export function networkEarnFooliganJob(): void {
    Citizen.invokeNative('0xCE4452AE85F5E252', undefined, undefined);
}

/**
 * JUGGALO_PHONE_MISSION_PARTICIPATION...
 * 
 * Hash: 0xC376B92D0E060970 | Since: 2802
 */
export function networkEarnFooliganJobParticipation(): void {
    Citizen.invokeNative('0xC376B92D0E060970', undefined, undefined);
}

/**
 * _NETWORK_EARN_G*
 * 
 * Hash: 0xBF7B5BB7ED890380 | Since: 3095
 */
export function networkEarnGeneric(amount: number, earn: number | string): any {
    if (typeof earn === 'string') earn = GetHashKey(earn)
    return Citizen.invokeNative('0xBF7B5BB7ED890380', amount, earn, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE01D10BA8CD53621 | Since: 2802
 */
export function networkEarnJuggaloStoryMission(): void {
    Citizen.invokeNative('0xE01D10BA8CD53621', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x40FF6CCCC476185C | Since: 2802
 */
export function networkEarnJuggaloStoryMissionParticipation(): void {
    Citizen.invokeNative('0x40FF6CCCC476185C', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF8332B06F0EECC9C | Since: 2944
 */
export function networkEarnProgressHub(): void {
    Citizen.invokeNative('0xF8332B06F0EECC9C', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x79B656937DF6DF5D | Since: 2802
 */
export function networkEarnSellAcid(): void {
    Citizen.invokeNative('0x79B656937DF6DF5D', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA3EF9B09A8D76B4 | Since: 2802
 */
export function networkEarnSellParticipationAcidLab(): void {
    Citizen.invokeNative('0xCA3EF9B09A8D76B4', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE3942D59E8A7F70D | Since: 2802
 */
export function networkEarnSetupParticipationAcidLab(): void {
    Citizen.invokeNative('0xE3942D59E8A7F70D', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDEA273D5F8A9661A | Since: 2944
 */
export function networkEarnSmugglerOps(): void {
    Citizen.invokeNative('0xDEA273D5F8A9661A', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x136F11B5DF1B304D | Since: 2802
 */
export function networkEarnSourceParticipationAcidLab(): void {
    Citizen.invokeNative('0x136F11B5DF1B304D', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA81017EE1324FDFE | Since: 2802
 */
export function networkEarnStreetDealer(): void {
    Citizen.invokeNative('0xA81017EE1324FDFE', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x991E1588FAD9019D | Since: 2802
 */
export function networkEarnTaxiJob(): void {
    Citizen.invokeNative('0x991E1588FAD9019D', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF1E26A7924327152 | Since: 2802
 */
export function networkSpendBuyAcidLab(): void {
    Citizen.invokeNative('0xF1E26A7924327152', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA2ED36DCF0FCA413 | Since: 2802
 */
export function networkSpendBuyMfgarage(): void {
    Citizen.invokeNative('0xA2ED36DCF0FCA413', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB48185C0CA67B16B | Since: 2802
 */
export function networkSpendBuySupplies(): void {
    Citizen.invokeNative('0xB48185C0CA67B16B', 0, false, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x842B1C5AF61ACDE9 | Since: 2802
 */
export function networkSpendRenameAcidLab(): void {
    Citizen.invokeNative('0x842B1C5AF61ACDE9', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x446798F7495DD7D8 | Since: 2802
 */
export function networkSpendRenameAcidProduct(): void {
    Citizen.invokeNative('0x446798F7495DD7D8', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7D541C9ACD63133 | Since: 2802
 */
export function networkSpendUpgradeAcidLabArmor(): void {
    Citizen.invokeNative('0xA7D541C9ACD63133', 0, false, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x110EE9D486C23126 | Since: 2802
 */
export function networkSpendUpgradeAcidLabEquipment(): void {
    Citizen.invokeNative('0x110EE9D486C23126', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4B99AB08C92C54E4 | Since: 2802
 */
export function networkSpendUpgradeAcidLabMines(): void {
    Citizen.invokeNative('0x4B99AB08C92C54E4', 0, false, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x2940558E05BCC2EC | Since: 2802
 */
export function networkSpendUpgradeAcidLabScoop(): void {
    Citizen.invokeNative('0x2940558E05BCC2EC', 0, false, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF8F346DDDC66643 | Since: 2802
 */
export function networkSpendUpgradeMfgarage(): void {
    Citizen.invokeNative('0xCF8F346DDDC66643', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8C7E8D6F96C9E948 | Since: 2944
 */
export function networkSpentAirFreight(hangarCargoSourcingPrice: number, fromBank: boolean, fromBankAndWallet: boolean, cost: number, warehouseId: number, warehouseSlot: number): void {
    Citizen.invokeNative('0x8C7E8D6F96C9E948', hangarCargoSourcingPrice, fromBank, fromBankAndWallet, cost, warehouseId, warehouseSlot, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2803B027479FB640 | Since: 3095
 */
export function networkSpentGeneric(price: number, stat: number | string, spent: number | string): any {
    if (typeof stat === 'string') stat = GetHashKey(stat)
    if (typeof spent === 'string') spent = GetHashKey(spent)
    return Citizen.invokeNative('0x2803B027479FB640', price, false, false, stat, spent, undefined, undefined);
}

/**
 * Hash p3 = MISSILE_JAMMER
 * 
 * Hash: 0xD687100F616163F4 | Since: 2944
 */
export function networkSpentMissileJammer(amount: number, fromBank: boolean, fromBankAndWallet: boolean, p3: number | string): void {
    if (typeof p3 === 'string') p3 = GetHashKey(p3)
    Citizen.invokeNative('0xD687100F616163F4', amount, fromBank, fromBankAndWallet, p3);
}

/**
 * No comment provided
 * 
 * Hash: 0xED1B407BADA42CEC | Since: 2944
 */
export function networkSpentSkipCargoSourceSetup(amount: number, fromBank: boolean, fromBankAndWallet: boolean, cost: number): void {
    Citizen.invokeNative('0xED1B407BADA42CEC', amount, fromBank, fromBankAndWallet, cost);
}

/**
 * Hash p3 = STEALTH_MODULE
 * 
 * Hash: 0x95CE79A6939C537A | Since: 2944
 */
export function networkSpentStealthModule(amount: number, fromBank: boolean, fromBankAndWallet: boolean, p3: number | string): void {
    if (typeof p3 === 'string') p3 = GetHashKey(p3)
    Citizen.invokeNative('0x95CE79A6939C537A', amount, fromBank, fromBankAndWallet, p3);
}

