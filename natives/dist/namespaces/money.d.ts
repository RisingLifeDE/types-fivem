import { IPlayer } from '@risinglife/fivem-shared';
/**
 * No comment provided
 *
 * Hash: 0x9777734DAD16992F | Since: 573
 */
export declare function canPayAmountToBoss(amount: number): [boolean, number];
/**
 * Does nothing and always returns false.
 *
 * Hash: 0xE260E0BB9CD995AC | Since: 323
 */
export declare function depositVc(amount: number): boolean;
/**
 * This function is hard-coded to always return 1.
 *
 * Hash: 0xE154B48B68EF72BC | Since: 323
 */
export declare function hasVcWithdrawalCompleted(): boolean;
/**
 * p1 = 0 (always)
 * p2 = 1 (always)
 *
 * Hash: 0x763B4BD305338F19 | Since: 323
 */
export declare function networkBuyAirstrike(cost: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA3EDDAA42411D3B9 | Since: 323
 */
export declare function networkBuyBackupGang(npcProvider: number): void;
/**
 * p1 is just an assumption. p2 was false and p3 was true.
 *
 * Hash: 0x7B718E197453F2D9 | Since: 323
 */
export declare function networkBuyBounty(amount: number, victim: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x30FD873ECE50E9F6 | Since: 757
 */
export declare function networkBuyContrabandMission(p2: number | string): void;
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
export declare function networkBuyFairgroundRide(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD9B067E55253E3DD | Since: 323
 */
export declare function networkBuyHealthcare(cost: number): void;
/**
 * p1 = 0 (always)
 * p2 = 1 (always)
 *
 * Hash: 0x81AA4610E3FD3A69 | Since: 323
 */
export declare function networkBuyHeliStrike(cost: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF0077C797F66A355 | Since: 323
 */
export declare function networkBuyItem(amount: number, item: number | string, item_name: string): void;
/**
 * No comment provided
 *
 * Hash: 0x650A08A280870AF6 | Since: 323
 */
export declare function networkBuyProperty(cost: number, propertyName: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x75AF80E61248EEBD | Since: 323
 */
export declare function networkBuySmokes(): void;
/**
 * No comment provided
 *
 * Hash: 0x3A54E33660DED67F | Since: 323
 */
export declare function networkCanBet(amount: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5D17BE59D2123284 | Since: 323
 */
export declare function networkCanReceivePlayerCash(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1C2473301B1C66BA | Since: 323
 */
export declare function networkCanShareJobCash(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAB3CAA6B422164DA | Since: 323
 */
export declare function networkCanSpend(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7303E27CC6532080 | Since: 323
 */
export declare function networkCanSpend2(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x3BD101471C7F9EEC | Since: 1734
 */
export declare function networkCasinoBuyChips(): boolean;
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
export declare function networkCasinoCanBet(hash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF62F6D9528358FE4 | Since: 1734
 */
export declare function networkCasinoCanBetAmount(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x394DCDB9E836B7A9 | Since: 1734
 */
export declare function networkCasinoCanBetPvc(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8968D4D8C6C40C11 | Since: 1734
 */
export declare function networkCasinoCanBuyChipsPvc(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xED44897CB336F480 | Since: 1734
 */
export declare function networkCasinoSellChips(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA921DED15FDF28F5 | Since: 323
 */
export declare function networkClearCharacterWallet(characterSlot: number): void;
/**
 * No comment provided
 *
 * Hash: 0x18B7AE224B087E26 | Since: 323
 */
export declare function networkDeductCash(amount: number): void;
/**
 * Does nothing (it's a nullsub).
 *
 * Hash: 0xCD0F5B5D932AE473 | Since: 323
 */
export declare function networkDeferCashTransactionsUntilShopSave(): void;
/**
 * Note the 2nd parameters are always 1, 0. I have a feeling it deals with your money, wallet, bank. So when you delete the character it of course wipes the wallet cash at that time. So if that was the case, it would be eg, NETWORK_DELETE_CHARACTER(characterIndex, deleteWalletCash, deleteBankCash);
 *
 * Hash: 0x05A50AF38947EB8D | Since: 323
 */
export declare function networkDeleteCharacter(characterSlot: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0CB1BE0633C024A8 | Since: 573
 */
export declare function networkEarnAgency(): void;
/**
 * No comment provided
 *
 * Hash: 0x38482AD49CB905C7 | Since: 2545
 */
export declare function networkEarnAgencyContract(): void;
/**
 * No comment provided
 *
 * Hash: 0xE29F3D5FA63B1B82 | Since: 2545
 */
export declare function networkEarnAgencyPhone(): void;
/**
 * No comment provided
 *
 * Hash: 0x663B4B9D11742A12 | Since: 2545
 */
export declare function networkEarnAgencySafe(): void;
/**
 * No comment provided
 *
 * Hash: 0xD29334ED1A256DBF | Since: 1868
 */
export declare function networkEarnArcade(): void;
/**
 * No comment provided
 *
 * Hash: 0x0F99F70C61F14619 | Since: 1604
 */
export declare function networkEarnArenaCareerProgression(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE08256F972C7BB2C | Since: 1604
 */
export declare function networkEarnArenaSkillLevelProgression(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x631F1CB8FB4130AA | Since: 1604
 */
export declare function networkEarnArenaWar(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5E7AE8AABE8B7C0D | Since: 1604
 */
export declare function networkEarnArenaWarAssassinateTarget(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA82959062361B259 | Since: 1604
 */
export declare function networkEarnArenaWarEventCargo(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFA700D8A9905F78A | Since: 1604
 */
export declare function networkEarnAssassinateTargetKilled(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x36A7FD5A7194B03E | Since: 2372
 */
export declare function networkEarnAutoshopBusiness(): void;
/**
 * No comment provided
 *
 * Hash: 0xC66D1CF99ED7FE25 | Since: 2372
 */
export declare function networkEarnAutoshopIncome(): void;
/**
 * No comment provided
 *
 * Hash: 0x146D4EB6D22A403F | Since: 2545
 */
export declare function networkEarnAwardContract(): void;
/**
 * No comment provided
 *
 * Hash: 0x88D6C327D6C57C45 | Since: 2545
 */
export declare function networkEarnAwardFixerMission(): void;
/**
 * No comment provided
 *
 * Hash: 0x7397A115030F1BE3 | Since: 2545
 */
export declare function networkEarnAwardPhone(): void;
/**
 * No comment provided
 *
 * Hash: 0x5B4DBDED84D6A420 | Since: 2545
 */
export declare function networkEarnAwardShortTrip(): void;
/**
 * No comment provided
 *
 * Hash: 0xFDD8D2440DAF1590 | Since: 1604
 */
export declare function networkEarnBbEventBonus(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA51338E0DCCD4065 | Since: 2189
 */
export declare function networkEarnBeachPartyLostFound(): void;
/**
 * No comment provided
 *
 * Hash: 0x71BEC32FA466E105 | Since: 2699
 */
export declare function networkEarnBiker(): void;
/**
 * No comment provided
 *
 * Hash: 0x2C5809EB9DF57257 | Since: 2699
 */
export declare function networkEarnBikerShop(): void;
/**
 * No comment provided
 *
 * Hash: 0x08B0CA7A6AB3AC32 | Since: 573
 */
export declare function networkEarnBoss(): void;
/**
 * No comment provided
 *
 * Hash: 0xF6B170F9A02E9E87 | Since: 1493
 */
export declare function networkEarnBountyHunterReward(): void;
/**
 * No comment provided
 *
 * Hash: 0xBC6227792A188E2E | Since: 2372
 */
export declare function networkEarnCarclubMembership(): void;
/**
 * No comment provided
 *
 * Hash: 0x973A9781A34F8DEB | Since: 1734
 */
export declare function networkEarnCasinoAward(amount: number, hash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x83AD64F53F4E9483 | Since: 1734
 */
export declare function networkEarnCasinoCollectableCompletedCollection(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x72E7C7B9615FA3C3 | Since: 1868
 */
export declare function networkEarnCasinoHeist(): void;
/**
 * No comment provided
 *
 * Hash: 0x3EC7471E6909798A | Since: 1868
 */
export declare function networkEarnCasinoHeistAwards(): void;
/**
 * No comment provided
 *
 * Hash: 0x09E8F18641BE2575 | Since: 1734
 */
export declare function networkEarnCasinoMissionParticipation(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x566FD402B25787DE | Since: 1734
 */
export declare function networkEarnCasinoMissionReward(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAC95ED552157E092 | Since: 1734
 */
export declare function networkEarnCasinoStoryMissionReward(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0819DB99FD2FBBD8 | Since: 1734
 */
export declare function networkEarnCasinoTimeTrialWin(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0DD362F14F18942A | Since: 1868
 */
export declare function networkEarnChallenge(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA95CFB4E02390842 | Since: 1868
 */
export declare function networkEarnCollectables(): void;
/**
 * No comment provided
 *
 * Hash: 0x5517F90043466049 | Since: 1734
 */
export declare function networkEarnCollectablesActionFigures(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5C9B198AF5A54FA6 | Since: 2060
 */
export declare function networkEarnCollectableCompletedCollection(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x84FF63BD4966F33D | Since: 1734
 */
export declare function networkEarnCollectableItem(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5128DF14A5BB86FC | Since: 1734
 */
export declare function networkEarnDailyObjectiveEvent(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x533073E8A596008C | Since: 2372
 */
export declare function networkEarnDailyVehicle(): void;
/**
 * No comment provided
 *
 * Hash: 0xFE65AFE7308E32B2 | Since: 2372
 */
export declare function networkEarnDailyVehicleBonus(): void;
/**
 * No comment provided
 *
 * Hash: 0xCAC672087B4A24AB | Since: 1290
 */
export declare function networkEarnDarChallenge(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE2E244AB823B4483 | Since: 2060
 */
export declare function networkEarnDispatchCall(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x128A747F4A230952 | Since: 1290
 */
export declare function networkEarnDoomsdayFinaleBonus(amount: number, vehicleHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x11B0A20C493F7E36 | Since: 1290
 */
export declare function networkEarnFirstTimeBonus(): void;
/**
 * No comment provided
 *
 * Hash: 0xF4A8E57460BF2037 | Since: 2545
 */
export declare function networkEarnFixerAgencyShortTrip(): void;
/**
 * No comment provided
 *
 * Hash: 0xBA154373C5FE51E8 | Since: 2545
 */
export declare function networkEarnFixerFinale(): void;
/**
 * No comment provided
 *
 * Hash: 0x6283E5DE4C4460C6 | Since: 2545
 */
export declare function networkEarnFixerPrep(): void;
/**
 * No comment provided
 *
 * Hash: 0x235D41210B3A1A5E | Since: 2545
 */
export declare function networkEarnFixerRivalDelivery(): void;
/**
 * No comment provided
 *
 * Hash: 0xFFFBA1B1F7C0B6F4 | Since: 1493
 */
export declare function networkEarnFmbbWageBonus(): void;
/**
 * DSPORT
 *
 * Hash: 0x515B4A22E4D3C6D7 | Since: 323
 */
export declare function networkEarnFromAiTargetKill(): void;
/**
 * Example for p1: "AM_DISTRACT_COPS"
 *
 * Hash: 0xFB6DB092FBAE29E6 | Since: 323
 */
export declare function networkEarnFromAmbientJob(): any;
/**
 * No comment provided
 *
 * Hash: 0x61326EE6DF15B0CA | Since: 323
 */
export declare function networkEarnFromBendJob(amount: number, heistHash: string): void;
/**
 * No comment provided
 *
 * Hash: 0x827A5BA1A44ACA6D | Since: 323
 */
export declare function networkEarnFromBetting(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x131BB5DA15453ACF | Since: 323
 */
export declare function networkEarnFromBounty(amount: number): [any, any];
/**
 * No comment provided
 *
 * Hash: 0x42FCE14F50F27291 | Since: 1493
 */
export declare function networkEarnFromBusinessBattle(): void;
/**
 * No comment provided
 *
 * Hash: 0x0B39CF0D53F1C883 | Since: 1493
 */
export declare function networkEarnFromBusinessHubSell(): void;
/**
 * No comment provided
 *
 * Hash: 0x8586789730B10CAF | Since: 877
 */
export declare function networkEarnFromBusinessProduct(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x718FBBF67414FA36 | Since: 1290
 */
export declare function networkEarnFromCashingOut(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2B171E6B2F64D8DF | Since: 323
 */
export declare function networkEarnFromChallengeWin(): any;
/**
 * No comment provided
 *
 * Hash: 0xA75EAC69F59E96E7 | Since: 1493
 */
export declare function networkEarnFromClubManagementParticipation(): void;
/**
 * No comment provided
 *
 * Hash: 0xECA658CE2A4E5A72 | Since: 757
 */
export declare function networkEarnFromContraband(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB1CC1B9EC3007A2A | Since: 323
 */
export declare function networkEarnFromCrateDrop(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFA009A62990671D4 | Since: 1290
 */
export declare function networkEarnFromCriminalMastermind(): void;
/**
 * type either Monthly,Weekly,Daily
 *
 * Hash: 0x6EA318C91C1A8786 | Since: 323
 */
export declare function networkEarnFromDailyObjectives(amount: number, _type: string, characterSlot: number): void;
/**
 * No comment provided
 *
 * Hash: 0x84C0116D012E8FC2 | Since: 757
 */
export declare function networkEarnFromDestroyingContraband(): void;
/**
 * No comment provided
 *
 * Hash: 0x1FDA0AA679C9919B | Since: 1493
 */
export declare function networkEarnFromFmbbBossWork(): void;
/**
 * No comment provided
 *
 * Hash: 0xC5156361F26E2212 | Since: 1493
 */
export declare function networkEarnFromFmbbPhonecallMission(): void;
/**
 * No comment provided
 *
 * Hash: 0xA03D4ACE0A3284CE | Since: 323
 */
export declare function networkEarnFromGangattackPickup(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x31BA138F6304FB9F | Since: 1180
 */
export declare function networkEarnFromHangarTrade(): void;
/**
 * No comment provided
 *
 * Hash: 0x45B8154E077D9E4D | Since: 323
 */
export declare function networkEarnFromHoldups(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF92A014A634442D6 | Since: 323
 */
export declare function networkEarnFromImportExport(amount: number, modelHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xE2BB399D90942091 | Since: 2189
 */
export declare function networkEarnFromIslandHeistDjMission(): void;
/**
 * No comment provided
 *
 * Hash: 0xB2CC4836834E8A98 | Since: 323
 */
export declare function networkEarnFromJob(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDEBBF584665411D0 | Since: 1734
 */
export declare function networkEarnFromJobx2(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6816FB4416760775 | Since: 323
 */
export declare function networkEarnFromJobBonus(): [any, any];
/**
 * No comment provided
 *
 * Hash: 0x4337511FA8221D36 | Since: 323
 */
export declare function networkEarnFromNotBadsport(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3F4D00167E41E0AD | Since: 323
 */
export declare function networkEarnFromPersonalVehicle(): void;
/**
 * No comment provided
 *
 * Hash: 0xED1517D3AF17C698 | Since: 323
 */
export declare function networkEarnFromPickup(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC8407624CEF2354B | Since: 791
 */
export declare function networkEarnFromPremiumJob(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x849648349D77F5C5 | Since: 323
 */
export declare function networkEarnFromProperty(amount: number, propertyName: number | string): void;
/**
 * For the money bags that drop a max of $40,000. Often called 40k bags.
 *
 * Most likely NETWORK_EARN_FROM_ROB***
 *
 * Hash: 0xF514621E8EA463D0 | Since: 323
 */
export declare function networkEarnFromRobArmoredCars(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9251B6ABF2D0A5B4 | Since: 1103
 */
export declare function networkEarnFromSellBunker(amount: number, bunkerHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x6B7E4FB50D5F3D65 | Since: 1180
 */
export declare function networkEarnFromSmugglerWork(): void;
/**
 * No comment provided
 *
 * Hash: 0xB539BD8A4C1EECF8 | Since: 323
 */
export declare function networkEarnFromVehicle(): void;
/**
 * No comment provided
 *
 * Hash: 0xEDEAD9A91EC768B3 | Since: 944
 */
export declare function networkEarnFromVehicleExport(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3E4ADAFF1830F146 | Since: 757
 */
export declare function networkEarnFromWarehouse(amount: number, id: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA9A31475F530DFDA | Since: 1290
 */
export declare function networkEarnGangopsAward(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2597A0D4A4FC2C77 | Since: 1290
 */
export declare function networkEarnGangopsElite(amount: number, actIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1C121FC9545E0D52 | Since: 1290
 */
export declare function networkEarnGangopsFinale(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xED26584F6BDCBBFD | Since: 1290
 */
export declare function networkEarnGangopsPrepParticipation(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA9160796D47A2CF8 | Since: 1290
 */
export declare function networkEarnGangopsSetup(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2DCB19ABAB0380A8 | Since: 1290
 */
export declare function networkEarnGangopsWages(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x15BB2A5C757EB91F | Since: 1290
 */
export declare function networkEarnGangopsWagesBonus(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCDA1C62BE2777802 | Since: 573
 */
export declare function networkEarnGoon(): void;
/**
 * No comment provided
 *
 * Hash: 0xE8815FE993896AD3 | Since: 1493
 */
export declare function networkEarnHackerTruck(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9D4FDBB035229669 | Since: 1290
 */
export declare function networkEarnHeistAward(): void;
/**
 * No comment provided
 *
 * Hash: 0xD21D111C46BA9F15 | Since: 2189
 */
export declare function networkEarnIslandHeist(amount1: number, amount2: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE0F82D68C7039158 | Since: 1493
 */
export declare function networkEarnNightclub(): void;
/**
 * No comment provided
 *
 * Hash: 0xC6E74CF8C884C880 | Since: 1493
 */
export declare function networkEarnNightclubAndWarehouse(): void;
/**
 * No comment provided
 *
 * Hash: 0xB4DEAE67F35E2ACD | Since: 1493
 */
export declare function networkEarnNightclubDancing(): void;
/**
 * No comment provided
 *
 * Hash: 0x55A1E095DB052FA5 | Since: 877
 */
export declare function networkEarnPurchaseClubHouse(): void;
/**
 * No comment provided
 *
 * Hash: 0xDFF49EE984E7AAE8 | Since: 1734
 */
export declare function networkEarnRcTimeTrial(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7A5349B773584675 | Since: 1290
 */
export declare function networkEarnRdrBonus(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0E1E2FF3F4EC11AA | Since: 1290
 */
export declare function networkEarnSellBase(amount: number, baseNameHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x8BCB27A057DF7B7F | Since: 1734
 */
export declare function networkEarnSellPrizeVehicle(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x45087AE480B233AC | Since: 2699
 */
export declare function networkEarnSightseeingReward(): void;
/**
 * No comment provided
 *
 * Hash: 0xDEE612F2D71B0308 | Since: 1180
 */
export declare function networkEarnSmugglerAgency(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x676C48776CACBB5A | Since: 1604
 */
export declare function networkEarnSpinTheWheelCash(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5B669CF2299A271F | Since: 1290
 */
export declare function networkEarnTargetRefund(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB846F547D3792DF6 | Since: 2372
 */
export declare function networkEarnTunerAward(): void;
/**
 * No comment provided
 *
 * Hash: 0xBCB266247193AC61 | Since: 2372
 */
export declare function networkEarnTunerRobbery(): void;
/**
 * No comment provided
 *
 * Hash: 0xD07C7C3F1995108C | Since: 2545
 */
export declare function networkEarnUpgradeAgency(): void;
/**
 * No comment provided
 *
 * Hash: 0x4C3B75694F7E0D9C | Since: 1868
 */
export declare function networkEarnUpgradeArcade(): void;
/**
 * No comment provided
 *
 * Hash: 0xC10322A8D3E061EE | Since: 2372
 */
export declare function networkEarnUpgradeAutoshop(): void;
/**
 * No comment provided
 *
 * Hash: 0x35F8DA0E8A31EF1B | Since: 1180
 */
export declare function networkEarnWagePayment(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x005ACA7100BD101D | Since: 1180
 */
export declare function networkEarnWagePaymentBonus(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDE68E30D89F97132 | Since: 2060
 */
export declare function networkEarnYatchMission(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7C4FCCD2E4DEB394 | Since: 323
 */
export declare function networkEconomyHasFixedCrazyNumbers(): boolean;
/**
 * Returns true if bank balance >= amount.
 *
 * Hash: 0xA31FD6A0865B6D14 | Since: 323
 */
export declare function networkGetCanSpendFromBank(amount: number): boolean;
/**
 * Returns true if bank balance + wallet balance >= amount.
 *
 * Hash: 0xDC18531D7019A535 | Since: 323
 */
export declare function networkGetCanSpendFromBankAndWallet(amount: number, characterSlot: number): boolean;
/**
 * Returns true if wallet balance >= amount.
 *
 * Hash: 0xED5AB8860415BABA | Since: 323
 */
export declare function networkGetCanSpendFromWallet(amount: number, characterSlot: number): boolean;
/**
 * Returns false if amount > wallet balance or daily transfer limit has been hit.
 *
 * Hash: 0x08E8EEADFD0DC4A0 | Since: 323
 */
export declare function networkGetCanTransferCash(amount: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5D1E75F91C07DEE5 | Since: 323
 */
export declare function networkGetEvcBalance(): number;
/**
 * No comment provided
 *
 * Hash: 0xFB2456B2040A6A67 | Since: 323
 */
export declare function networkGetPlayerIsHighEarner(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4F54F3B6C202FB4E | Since: 323
 */
export declare function networkGetPvcBalance(): number;
/**
 * Retturns the same value as NETWORK_GET_REMAINING_TRANSFER_BALANCE.
 *
 * Hash: 0x13A8DE2FD77D04F3 | Since: 323
 */
export declare function networkGetPvcTransferBalance(): number;
/**
 * Returns the same value as NETWORK_GET_PVC_TRANSFER_BALANCE.
 *
 * Hash: 0xEA560AC9EEB1E19B | Since: 323
 */
export declare function networkGetRemainingTransferBalance(): number;
/**
 * No comment provided
 *
 * Hash: 0xA6FA3979BED01B81 | Since: 323
 */
export declare function networkGetStringBankBalance(): string;
/**
 * No comment provided
 *
 * Hash: 0x700AF71AE615E6DD | Since: 323
 */
export declare function networkGetStringBankWalletBalance(character: number): string;
/**
 * No comment provided
 *
 * Hash: 0xF9B10B529DCFB33B | Since: 323
 */
export declare function networkGetStringWalletBalance(characterSlot: number): string;
/**
 * No comment provided
 *
 * Hash: 0x5CBAD97E059E1B94 | Since: 323
 */
export declare function networkGetVcBalance(): number;
/**
 * No comment provided
 *
 * Hash: 0x76EF28DA05EA395A | Since: 323
 */
export declare function networkGetVcBankBalance(): number;
/**
 * No comment provided
 *
 * Hash: 0xA40F9C2623F6A8B5 | Since: 323
 */
export declare function networkGetVcWalletBalance(characterSlot: number): number;
/**
 * No comment provided
 *
 * Hash: 0xFB18DF9CB95E0105 | Since: 323
 */
export declare function networkGivePlayerJobshareCash(amount: number): any;
/**
 * No comment provided
 *
 * Hash: 0x3DA5ECD1A56CBA6D | Since: 323
 */
export declare function networkInitializeCash(wallet: number, bank: number): void;
/**
 * No comment provided
 *
 * Hash: 0x821418C727FCACD7 | Since: 791
 */
export declare function networkManualDeleteCharacter(characterSlot: number): void;
/**
 * No comment provided
 *
 * Hash: 0x81404F3DC124FE5B | Since: 323
 */
export declare function networkMoneyCanBet(amount: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5FD5ED82CBBE9989 | Since: 323
 */
export declare function networkPayEmployeeWage(): void;
/**
 * No comment provided
 *
 * Hash: 0x9346E14F2AF74D46 | Since: 323
 */
export declare function networkPayMatchEntryFee(amount: number, matchId: string): void;
/**
 * No comment provided
 *
 * Hash: 0x56A3B51944C50598 | Since: 323
 */
export declare function networkReceivePlayerJobshareCash(value: number): any;
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
export declare function networkRefundCash(index: number, context: string, reason: string): void;
/**
 * No comment provided
 *
 * Hash: 0x1B882107C23A9022 | Since: 1290
 */
export declare function networkServiceEarnGangopsRivalDelivery(earnedMoney: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1B2120405080125C | Since: 2545
 */
export declare function networkSpendAgency(): void;
/**
 * No comment provided
 *
 * Hash: 0x1254B5B3925EFD3D | Since: 2545
 */
export declare function networkSpendApartmentUtilities(amount: number): any;
/**
 * No comment provided
 *
 * Hash: 0x43AA7FAC4E6D6687 | Since: 1868
 */
export declare function networkSpendArcade(): void;
/**
 * No comment provided
 *
 * Hash: 0xB5B58E24868CB09E | Since: 1868
 */
export declare function networkSpendArcadeMgmt(): void;
/**
 * No comment provided
 *
 * Hash: 0x619496D837EFD920 | Since: 1604
 */
export declare function networkSpendArenaPremium(amount: number): void;
/**
 * type either, 1 for cam spectate, 2 for drone
 *
 * Hash: 0x7049BF858601DC0F | Since: 1604
 */
export declare function networkSpendArenaSpectatorBox(amount: number, _type: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9BEA350D7C48061B | Since: 2372
 */
export declare function networkSpendAutoshopModify(): void;
/**
 * No comment provided
 *
 * Hash: 0x54ABA22FA6371249 | Since: 2189
 */
export declare function networkSpendBeachParty(): void;
/**
 * No comment provided
 *
 * Hash: 0x923AEA8E78F8DF0B | Since: 2699
 */
export declare function networkSpendBikeShop(): void;
/**
 * No comment provided
 *
 * Hash: 0xDBC966A01C02BCA7 | Since: 573
 */
export declare function networkSpendBoss(): void;
/**
 * No comment provided
 *
 * Hash: 0x1BEA0CD93470BB1F | Since: 1493
 */
export declare function networkSpendBountyHunterMission(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x92D1CFDA1227FF1C | Since: 2545
 */
export declare function networkSpendBusinessPropertyFees(): void;
/**
 * No comment provided
 *
 * Hash: 0xEA8CD3C9B3C35884 | Since: 2545
 */
export declare function networkSpendBuyAgency(): void;
/**
 * No comment provided
 *
 * Hash: 0x870289A558348378 | Since: 1868
 */
export declare function networkSpendBuyArcade(): void;
/**
 * No comment provided
 *
 * Hash: 0x40D5DA9550B7CB46 | Since: 1604
 */
export declare function networkSpendBuyArena(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEEB7E5D1FEB20869 | Since: 2372
 */
export declare function networkSpendBuyAutoshop(): void;
/**
 * No comment provided
 *
 * Hash: 0x34A6FC4D06C4DA0F | Since: 1734
 */
export declare function networkSpendBuyCasino(amount: number): any;
/**
 * No comment provided
 *
 * Hash: 0x90CD7C6871FBF1B4 | Since: 2189
 */
export declare function networkSpendBuySub(): void;
/**
 * No comment provided
 *
 * Hash: 0x925227803A0EAA1B | Since: 2372
 */
export declare function networkSpendCarClubBar(): void;
/**
 * No comment provided
 *
 * Hash: 0x1464E17207CD36E2 | Since: 2372
 */
export declare function networkSpendCarClubMembership(amount1: number, amount2: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD1E46824E6FB92B5 | Since: 2372
 */
export declare function networkSpendCarClubTakeover(): void;
/**
 * No comment provided
 *
 * Hash: 0xC991C255AA6D90B2 | Since: 2189
 */
export declare function networkSpendCasinoClub(amount1: number, amount2: number): void;
/**
 * No comment provided
 *
 * Hash: 0x88BF9B612B84D3C3 | Since: 1734
 */
export declare function networkSpendCasinoGeneric(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD30E8392F407C328 | Since: 1868
 */
export declare function networkSpendCasinoHeist(): void;
/**
 * No comment provided
 *
 * Hash: 0x487009DD91D93429 | Since: 1868
 */
export declare function networkSpendCasinoHeistSkipMission(): void;
/**
 * No comment provided
 *
 * Hash: 0xFBBE0570EDF39D46 | Since: 1734
 */
export declare function networkSpendCasinoMembership(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD86581F9E7CDA383 | Since: 2545
 */
export declare function networkSpendCompSuv(): void;
/**
 * Hardcoded to return 0.
 *
 * Hash: 0x9B5016A6433A68C5 | Since: 323
 */
export declare function networkSpendEarnedFromBankAndWallets(amount: number): number;
/**
 * No comment provided
 *
 * Hash: 0x771ADB0E7635B7BF | Since: 1290
 */
export declare function networkSpendGangopsCannon(): void;
/**
 * No comment provided
 *
 * Hash: 0x2A7CEC72C3443BCC | Since: 1290
 */
export declare function networkSpendGangopsRepairCost(): void;
/**
 * No comment provided
 *
 * Hash: 0xDA947AE8880D5C18 | Since: 1290
 */
export declare function networkSpendGangopsSkipMission(): void;
/**
 * No comment provided
 *
 * Hash: 0xA19EC0786E326E06 | Since: 1290
 */
export declare function networkSpendGangopsStartStrand(_type: number, amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5ECE6FD7B4EC8D6A | Since: 1290
 */
export declare function networkSpendGangopsTripSkip(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x08A1B82B91900682 | Since: 573
 */
export declare function networkSpendGoon(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2CEB0E0BC2A77C05 | Since: 2699
 */
export declare function networkSpendGunrunning(): void;
/**
 * No comment provided
 *
 * Hash: 0xBF8793B91EA094A7 | Since: 2545
 */
export declare function networkSpendHidden(): void;
/**
 * No comment provided
 *
 * Hash: 0x93AA4165CB67E925 | Since: 2372
 */
export declare function networkSpendInteractionMenuAbility(): void;
/**
 * No comment provided
 *
 * Hash: 0xE86689E5F82DE429 | Since: 2189
 */
export declare function networkSpendIslandHeist(): void;
/**
 * No comment provided
 *
 * Hash: 0xE5F5A060439C2F5D | Since: 1604
 */
export declare function networkSpendMakeItRain(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x65482BFD0923C8A1 | Since: 1493
 */
export declare function networkSpendNightclubAndWarehouse(): void;
/**
 * No comment provided
 *
 * Hash: 0xDD21B016E4289465 | Since: 1493
 */
export declare function networkSpendNightclubBarDrink(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEAD3D81F2C3A1458 | Since: 1868
 */
export declare function networkSpendPlayArcade(): void;
/**
 * No comment provided
 *
 * Hash: 0xB9F7A469460E7A4A | Since: 2372
 */
export declare function networkSpendSetCommonFields(): void;
/**
 * No comment provided
 *
 * Hash: 0x7E2F4E8F44CAF4E0 | Since: 2699
 */
export declare function networkSpendSetDiscount(): void;
/**
 * No comment provided
 *
 * Hash: 0xD9DF467CBE4398C8 | Since: 2545
 */
export declare function networkSpendSourceBike(): void;
/**
 * No comment provided
 *
 * Hash: 0x9A5BD1D0000B339C | Since: 1604
 */
export declare function networkSpendSpinTheWheelPayment(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6C8BC1488527AAAB | Since: 2189
 */
export declare function networkSpendSubmarine(): void;
/**
 * No comment provided
 *
 * Hash: 0xEBD482B82ACB8BAD | Since: 2545
 */
export declare function networkSpendSupply(): void;
/**
 * No comment provided
 *
 * Hash: 0x61A2DF64ED2D396E | Since: 2545
 */
export declare function networkSpendSuvFstTrvl(): void;
/**
 * No comment provided
 *
 * Hash: 0x6CCA64840589A3B6 | Since: 2545
 */
export declare function networkSpendUpgradeAgency(): void;
/**
 * No comment provided
 *
 * Hash: 0x5574637681911FDA | Since: 1868
 */
export declare function networkSpendUpgradeArcade(): void;
/**
 * No comment provided
 *
 * Hash: 0x037ABB06825D7AB1 | Since: 1604
 */
export declare function networkSpendUpgradeArena(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDD829AA198FDC46C | Since: 2372
 */
export declare function networkSpendUpgradeAutoshop(): void;
/**
 * No comment provided
 *
 * Hash: 0x4740D62BC1B4EBEA | Since: 1734
 */
export declare function networkSpendUpgradeCasino(amount: number): any;
/**
 * No comment provided
 *
 * Hash: 0x89049A84065CE68E | Since: 2189
 */
export declare function networkSpendUpgradeSub(): void;
/**
 * No comment provided
 *
 * Hash: 0x02D24A35A9CC3503 | Since: 2699
 */
export declare function networkSpendVehicleRequested(): void;
/**
 * No comment provided
 *
 * Hash: 0xB162DC95C0A3317B | Since: 323
 */
export declare function networkSpentAmmoDrop(): void;
/**
 * No comment provided
 *
 * Hash: 0x14EAEA58F93B55AF | Since: 1604
 */
export declare function networkSpentArenaJoinSpectator(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x812F5488B1B2A299 | Since: 323
 */
export declare function networkSpentArrestBail(): void;
/**
 * No comment provided
 *
 * Hash: 0x5D97630A8A0EF123 | Since: 1103
 */
export declare function networkSpentBallisticEquipment(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCA230C9682556CF1 | Since: 323
 */
export declare function networkSpentBankInterest(): void;
/**
 * No comment provided
 *
 * Hash: 0x1C436FD11FFA692F | Since: 323
 */
export declare function networkSpentBetting(amount: number, matchId: string): void;
/**
 * No comment provided
 *
 * Hash: 0x524EE43A37232C00 | Since: 323
 */
export declare function networkSpentBoatPickup(): void;
/**
 * No comment provided
 *
 * Hash: 0xFFBE02CD385356BD | Since: 573
 */
export declare function networkSpentBossGoon(amount: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x29B260B84947DFCC | Since: 323
 */
export declare function networkSpentBounty(): void;
/**
 * No comment provided
 *
 * Hash: 0xA6DD8458CE24012C | Since: 323
 */
export declare function networkSpentBullShark(): void;
/**
 * No comment provided
 *
 * Hash: 0x4EA3F425C7744D21 | Since: 1290
 */
export declare function networkSpentBuyBase(): void;
/**
 * No comment provided
 *
 * Hash: 0x12D148D26538D0F9 | Since: 1103
 */
export declare function networkSpentBuyBunker(): void;
/**
 * No comment provided
 *
 * Hash: 0xA628A745E2275C5D | Since: 323
 */
export declare function networkSpentBuyOfftheradar(): void;
/**
 * No comment provided
 *
 * Hash: 0x6D3A430D1A809179 | Since: 323
 */
export declare function networkSpentBuyPassiveMode(): void;
/**
 * No comment provided
 *
 * Hash: 0x6E176F1B18BC0637 | Since: 323
 */
export declare function networkSpentBuyRevealPlayers(): void;
/**
 * No comment provided
 *
 * Hash: 0x0CCE73BC7A11E885 | Since: 1290
 */
export declare function networkSpentBuyTiltrotor(): void;
/**
 * No comment provided
 *
 * Hash: 0xAC272C0AE01B4BD8 | Since: 1103
 */
export declare function networkSpentBuyTruck(): void;
/**
 * No comment provided
 *
 * Hash: 0xE1B13771A843C4F6 | Since: 323
 */
export declare function networkSpentBuyWantedlevel(): any;
/**
 * No comment provided
 *
 * Hash: 0xACDE7185B374177C | Since: 323
 */
export declare function networkSpentCallPlayer(): any;
/**
 * No comment provided
 *
 * Hash: 0x948705F6F9C50824 | Since: 2699
 */
export declare function networkSpentCargoSourcing(): void;
/**
 * No comment provided
 *
 * Hash: 0xEC03C719DB2F4306 | Since: 323
 */
export declare function networkSpentCarwash(): void;
/**
 * No comment provided
 *
 * Hash: 0x289016EC778D60E0 | Since: 323
 */
export declare function networkSpentCashDrop(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5F456788B05FAEAC | Since: 944
 */
export declare function networkSpentChangeAppearance(): void;
/**
 * No comment provided
 *
 * Hash: 0x6B38ECB05A63A685 | Since: 323
 */
export declare function networkSpentCinema(): void;
/**
 * No comment provided
 *
 * Hash: 0x5BBBD92186E1F1C5 | Since: 1290
 */
export declare function networkSpentEmployAssassins(): void;
/**
 * No comment provided
 *
 * Hash: 0x6A445B64ED7ABEB5 | Since: 323
 */
export declare function networkSpentFromRockstar(): void;
/**
 * No comment provided
 *
 * Hash: 0xB1F1346FD57685D7 | Since: 1180
 */
export declare function networkSpentHangarStaffCharges(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB18AC2ECBB15CB6A | Since: 1180
 */
export declare function networkSpentHangarUtilityCharges(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7BF1D73DB2ECA492 | Since: 323
 */
export declare function networkSpentHeliPickup(): void;
/**
 * No comment provided
 *
 * Hash: 0xE7B80E2BF9D80BD6 | Since: 323
 */
export declare function networkSpentHireMercenary(): void;
/**
 * Only used once in a script (am_contact_requests)
 * p1 = 0
 * p2 = 1
 *
 * Hash: 0xE404BFB981665BF0 | Since: 323
 */
export declare function networkSpentHireMugger(): void;
/**
 * No comment provided
 *
 * Hash: 0xD9B86B9872039763 | Since: 323
 */
export declare function networkSpentHoldups(): void;
/**
 * No comment provided
 *
 * Hash: 0xC1952F3773BA18FE | Since: 944
 */
export declare function networkSpentImportExportRepair(): void;
/**
 * No comment provided
 *
 * Hash: 0xEE99784E4467689C | Since: 323
 */
export declare function networkSpentInStripclub(): void;
/**
 * No comment provided
 *
 * Hash: 0x28F174A67B8D0C2F | Since: 323
 */
export declare function networkSpentJobSkip(amount: number, matchId: string): void;
/**
 * No comment provided
 *
 * Hash: 0x5BCDE0F640C773D2 | Since: 877
 */
export declare function networkSpentJukebox(): void;
/**
 * No comment provided
 *
 * Hash: 0xD7CCCBA28C4ECAF0 | Since: 877
 */
export declare function networkSpentMcAbility(): void;
/**
 * No comment provided
 *
 * Hash: 0xCD4D66B43B1DD28D | Since: 2189
 */
export declare function networkSpentMoveSubmarine(): void;
/**
 * No comment provided
 *
 * Hash: 0xE7DF4E0545DFB56E | Since: 573
 */
export declare function networkSpentMoveYacht(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x876056684281655D | Since: 1493
 */
export declare function networkSpentNightclubEntryFee(player: number | string | IPlayer, amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD5BB406F4E04019F | Since: 323
 */
export declare function networkSpentNoCops(): void;
/**
 * No comment provided
 *
 * Hash: 0xE8B0B270B6E7C76E | Since: 757
 */
export declare function networkSpentOrderBodyguardVehicle(): void;
/**
 * No comment provided
 *
 * Hash: 0x05F04155A226FBBF | Since: 757
 */
export declare function networkSpentOrderWarehouseVehicle(): void;
/**
 * No comment provided
 *
 * Hash: 0x0035BB914316F1E3 | Since: 877
 */
export declare function networkSpentPayBusinessSupplies(): void;
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
export declare function networkSpentPayVehicleInsurancePremium(amount: number, vehicleModel: number | string, notBankrupt: boolean, hasTheMoney: boolean): any;
/**
 * No comment provided
 *
 * Hash: 0x0FE8E1FCD2B86B33 | Since: 757
 */
export declare function networkSpentPaHeliPickup(): void;
/**
 * No comment provided
 *
 * Hash: 0xB49ECA122467D05F | Since: 757
 */
export declare function networkSpentPaServiceDancer(): void;
/**
 * No comment provided
 *
 * Hash: 0x112209CE0290C03A | Since: 757
 */
export declare function networkSpentPaServiceHeli(): void;
/**
 * No comment provided
 *
 * Hash: 0xE23ADC6FCB1F29AE | Since: 757
 */
export declare function networkSpentPaServiceImpound(): void;
/**
 * No comment provided
 *
 * Hash: 0x0D30EB83668E63C5 | Since: 757
 */
export declare function networkSpentPaServiceSnack(): void;
/**
 * No comment provided
 *
 * Hash: 0xED5FD7AF10F5E262 | Since: 757
 */
export declare function networkSpentPaServiceVehicle(): void;
/**
 * No comment provided
 *
 * Hash: 0x7C99101F7FCE2EE5 | Since: 323
 */
export declare function networkSpentPlayerHealthcare(): void;
/**
 * No comment provided
 *
 * Hash: 0xB21B89501CFAC79E | Since: 323
 */
export declare function networkSpentProstitutes(): void;
/**
 * No comment provided
 *
 * Hash: 0x6FD97159FE3C971A | Since: 877
 */
export declare function networkSpentPurchaseBusinessProperty(): void;
/**
 * No comment provided
 *
 * Hash: 0x998E18CEB44487FC | Since: 877
 */
export declare function networkSpentPurchaseClubHouse(): void;
/**
 * No comment provided
 *
 * Hash: 0x2A93C46AAB1EACC9 | Since: 1493
 */
export declare function networkSpentPurchaseHackerTruck(): void;
/**
 * No comment provided
 *
 * Hash: 0xCCB339CC970452DA | Since: 1180
 */
export declare function networkSpentPurchaseHangar(): void;
/**
 * No comment provided
 *
 * Hash: 0x33981D6804E62F49 | Since: 944
 */
export declare function networkSpentPurchaseImpexpWarehouseProperty(amount: number): any;
/**
 * No comment provided
 *
 * Hash: 0xED76D195E6E3BF7F | Since: 1493
 */
export declare function networkSpentPurchaseNightclubAndWarehouse(): void;
/**
 * No comment provided
 *
 * Hash: 0xB4C2EC463672474E | Since: 944
 */
export declare function networkSpentPurchaseOfficeGarage(): void;
/**
 * No comment provided
 *
 * Hash: 0x69EF772B192614C1 | Since: 757
 */
export declare function networkSpentPurchaseOfficeProperty(): void;
/**
 * No comment provided
 *
 * Hash: 0xBD0EFB25CCA8F97A | Since: 757
 */
export declare function networkSpentPurchaseWarehouseProperty(): void;
/**
 * No comment provided
 *
 * Hash: 0xE284D46FFDB82E36 | Since: 1493
 */
export declare function networkSpentRdrHatchetBonus(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF6C8A544E4CF14FC | Since: 1493
 */
export declare function networkSpentRehireDj(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFC4EE00A7B3BFB76 | Since: 573
 */
export declare function networkSpentRenameOrganization(): void;
/**
 * No comment provided
 *
 * Hash: 0x9D26502BB97BFE62 | Since: 323
 */
export declare function networkSpentRequestHeist(): void;
/**
 * No comment provided
 *
 * Hash: 0x8204DA7934DF3155 | Since: 323
 */
export declare function networkSpentRequestJob(): void;
/**
 * No comment provided
 *
 * Hash: 0x995A65F15F581359 | Since: 323
 */
export declare function networkSpentRobbedByMugger(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x17C3A7D31EAE39F9 | Since: 323
 */
export declare function networkSpentTaxi(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7FE61782AD94CC09 | Since: 323
 */
export declare function networkSpentTelescope(): void;
/**
 * No comment provided
 *
 * Hash: 0xA51B086B0B2C0F7A | Since: 877
 */
export declare function networkSpentTradeBusinessProperty(): void;
/**
 * No comment provided
 *
 * Hash: 0x2FAB6614CE22E196 | Since: 944
 */
export declare function networkSpentTradeImpexpWarehouseProperty(): void;
/**
 * No comment provided
 *
 * Hash: 0x3DD3F33A5D55EA6F | Since: 1290
 */
export declare function networkSpentUpgradeBase(): void;
/**
 * No comment provided
 *
 * Hash: 0x675D19C6067CAE08 | Since: 877
 */
export declare function networkSpentUpgradeBusinessProperty(): void;
/**
 * No comment provided
 *
 * Hash: 0xFA07759E6FDDD7CF | Since: 877
 */
export declare function networkSpentUpgradeClubHouse(): void;
/**
 * No comment provided
 *
 * Hash: 0x226C284C830D0CA8 | Since: 1493
 */
export declare function networkSpentUpgradeHackerTruck(): void;
/**
 * No comment provided
 *
 * Hash: 0x615EB504B0788DAF | Since: 1180
 */
export declare function networkSpentUpgradeHangar(): void;
/**
 * No comment provided
 *
 * Hash: 0x4128464231E3CA0B | Since: 944
 */
export declare function networkSpentUpgradeImpexpWarehouseProperty(): void;
/**
 * No comment provided
 *
 * Hash: 0x1DC9B749E7AE282B | Since: 1493
 */
export declare function networkSpentUpgradeNightclubAndWarehouse(): void;
/**
 * No comment provided
 *
 * Hash: 0x2AFC2D19B50797F2 | Since: 944
 */
export declare function networkSpentUpgradeOfficeGarage(): void;
/**
 * No comment provided
 *
 * Hash: 0x8E243837643D9583 | Since: 757
 */
export declare function networkSpentUpgradeOfficeProperty(): void;
/**
 * No comment provided
 *
 * Hash: 0x165E135D6DFA2907 | Since: 1290
 */
export declare function networkSpentUpgradeTiltrotor(): void;
/**
 * No comment provided
 *
 * Hash: 0x365E877C61D6988B | Since: 1103
 */
export declare function networkSpentUpgradeTruck(): void;
/**
 * No comment provided
 *
 * Hash: 0xA95F667A755725DA | Since: 757
 */
export declare function networkSpentUpgradeWarehouseProperty(): void;
/**
 * No comment provided
 *
 * Hash: 0x0C82D21A77C22D49 | Since: 1103
 */
export declare function networkSpentUpradeBunker(): void;
/**
 * No comment provided
 *
 * Hash: 0xA75CCF58A60A5FD1 | Since: 944
 */
export declare function networkSpentVehicleExportMods(): void;
/**
 * No comment provided
 *
 * Hash: 0xD99DB210089617FE | Since: 573
 */
export declare function networkSpentWager(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x59498BC8B1C8B15C | Since: 2699
 */
export declare function networkYohanSourceGoods(): void;
/**
 * This isn't a hash collision.
 *
 * Hash: 0x20194D48EAEC9A41 | Since: 323
 */
export declare function processCashGift(): [string, number, number];
/**
 * This function is hard-coded to always return 1.
 *
 * Hash: 0x6FCF8DDEA146C45B | Since: 323
 */
export declare function wasVcWithdrawalSuccessful(): boolean;
/**
 * Does nothing and always returns 0.
 *
 * Hash: 0xF70EFA14FE091429 | Since: 323
 */
export declare function withdrawVc(amount: number): number;
/**
 * No comment provided
 *
 * Hash: 0xE03B9F95556E48E9 | Since: 3095
 */
export declare function networkClearTransactionTelemetryNonce(): void;
/**
 * Used for SERVICE_EARN_AVENGER_OPERATIONS & SERVICE_EARN_AVENGER_OPS_BONUS
 *
 * Hash: 0x55F006B9D4A46C1D | Since: 2944
 */
export declare function networkEarnAvenger(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD1A8165767AD2D23 | Since: 2802
 */
export declare function networkEarnAwardAcidLab(): void;
/**
 * No comment provided
 *
 * Hash: 0xC30650FA74A19D02 | Since: 2802
 */
export declare function networkEarnAwardDailyStash(): void;
/**
 * No comment provided
 *
 * Hash: 0xD01EBAEA1F905EF6 | Since: 2802
 */
export declare function networkEarnAwardDeadDrop(): void;
/**
 * No comment provided
 *
 * Hash: 0xDDF047577F1A02A7 | Since: 2802
 */
export declare function networkEarnAwardJuggaloMission(): void;
/**
 * No comment provided
 *
 * Hash: 0xBEAFBB1B98B7EF55 | Since: 2802
 */
export declare function networkEarnAwardRandomEvent(): void;
/**
 * No comment provided
 *
 * Hash: 0xA914768AD35CD3A5 | Since: 2802
 */
export declare function networkEarnAwardTaxi(): void;
/**
 * No comment provided
 *
 * Hash: 0xDCEF983C24191997 | Since: 2944
 */
export declare function networkEarnBonusObjective(amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCABC9874AFA70D6D | Since: 2802
 */
export declare function networkEarnDailyStashHouseCompleted(): void;
/**
 * No comment provided
 *
 * Hash: 0x9C0C6BD0F94CE391 | Since: 2802
 */
export declare function networkEarnDailyStashHouseParticipation(): void;
/**
 * JUGGALO_PHONE_MISSION...
 *
 * Hash: 0xCE4452AE85F5E252 | Since: 2802
 */
export declare function networkEarnFooliganJob(): void;
/**
 * JUGGALO_PHONE_MISSION_PARTICIPATION...
 *
 * Hash: 0xC376B92D0E060970 | Since: 2802
 */
export declare function networkEarnFooliganJobParticipation(): void;
/**
 * _NETWORK_EARN_G*
 *
 * Hash: 0xBF7B5BB7ED890380 | Since: 3095
 */
export declare function networkEarnGeneric(amount: number, earn: number | string): any;
/**
 * No comment provided
 *
 * Hash: 0xE01D10BA8CD53621 | Since: 2802
 */
export declare function networkEarnJuggaloStoryMission(): void;
/**
 * No comment provided
 *
 * Hash: 0x40FF6CCCC476185C | Since: 2802
 */
export declare function networkEarnJuggaloStoryMissionParticipation(): void;
/**
 * No comment provided
 *
 * Hash: 0xF8332B06F0EECC9C | Since: 2944
 */
export declare function networkEarnProgressHub(): void;
/**
 * No comment provided
 *
 * Hash: 0x79B656937DF6DF5D | Since: 2802
 */
export declare function networkEarnSellAcid(): void;
/**
 * No comment provided
 *
 * Hash: 0xCA3EF9B09A8D76B4 | Since: 2802
 */
export declare function networkEarnSellParticipationAcidLab(): void;
/**
 * No comment provided
 *
 * Hash: 0xE3942D59E8A7F70D | Since: 2802
 */
export declare function networkEarnSetupParticipationAcidLab(): void;
/**
 * No comment provided
 *
 * Hash: 0xDEA273D5F8A9661A | Since: 2944
 */
export declare function networkEarnSmugglerOps(): void;
/**
 * No comment provided
 *
 * Hash: 0x136F11B5DF1B304D | Since: 2802
 */
export declare function networkEarnSourceParticipationAcidLab(): void;
/**
 * No comment provided
 *
 * Hash: 0xA81017EE1324FDFE | Since: 2802
 */
export declare function networkEarnStreetDealer(): void;
/**
 * No comment provided
 *
 * Hash: 0x991E1588FAD9019D | Since: 2802
 */
export declare function networkEarnTaxiJob(): void;
/**
 * No comment provided
 *
 * Hash: 0xF1E26A7924327152 | Since: 2802
 */
export declare function networkSpendBuyAcidLab(): void;
/**
 * No comment provided
 *
 * Hash: 0xA2ED36DCF0FCA413 | Since: 2802
 */
export declare function networkSpendBuyMfgarage(): void;
/**
 * No comment provided
 *
 * Hash: 0xB48185C0CA67B16B | Since: 2802
 */
export declare function networkSpendBuySupplies(): void;
/**
 * No comment provided
 *
 * Hash: 0x842B1C5AF61ACDE9 | Since: 2802
 */
export declare function networkSpendRenameAcidLab(): void;
/**
 * No comment provided
 *
 * Hash: 0x446798F7495DD7D8 | Since: 2802
 */
export declare function networkSpendRenameAcidProduct(): void;
/**
 * No comment provided
 *
 * Hash: 0xA7D541C9ACD63133 | Since: 2802
 */
export declare function networkSpendUpgradeAcidLabArmor(): void;
/**
 * No comment provided
 *
 * Hash: 0x110EE9D486C23126 | Since: 2802
 */
export declare function networkSpendUpgradeAcidLabEquipment(): void;
/**
 * No comment provided
 *
 * Hash: 0x4B99AB08C92C54E4 | Since: 2802
 */
export declare function networkSpendUpgradeAcidLabMines(): void;
/**
 * No comment provided
 *
 * Hash: 0x2940558E05BCC2EC | Since: 2802
 */
export declare function networkSpendUpgradeAcidLabScoop(): void;
/**
 * No comment provided
 *
 * Hash: 0xCF8F346DDDC66643 | Since: 2802
 */
export declare function networkSpendUpgradeMfgarage(): void;
/**
 * No comment provided
 *
 * Hash: 0x8C7E8D6F96C9E948 | Since: 2944
 */
export declare function networkSpentAirFreight(hangarCargoSourcingPrice: number, fromBank: boolean, fromBankAndWallet: boolean, cost: number, warehouseId: number, warehouseSlot: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2803B027479FB640 | Since: 3095
 */
export declare function networkSpentGeneric(price: number, stat: number | string, spent: number | string): any;
/**
 * Hash p3 = MISSILE_JAMMER
 *
 * Hash: 0xD687100F616163F4 | Since: 2944
 */
export declare function networkSpentMissileJammer(amount: number, fromBank: boolean, fromBankAndWallet: boolean, p3: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xED1B407BADA42CEC | Since: 2944
 */
export declare function networkSpentSkipCargoSourceSetup(amount: number, fromBank: boolean, fromBankAndWallet: boolean, cost: number): void;
/**
 * Hash p3 = STEALTH_MODULE
 *
 * Hash: 0x95CE79A6939C537A | Since: 2944
 */
export declare function networkSpentStealthModule(amount: number, fromBank: boolean, fromBankAndWallet: boolean, p3: number | string): void;
