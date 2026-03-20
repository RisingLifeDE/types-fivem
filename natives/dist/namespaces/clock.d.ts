/**
 * No comment provided
 *
 * Hash: 0xD716F30D8C8980E2 | Since: 323
 */
export declare function addToTime(hours: number, minutes: number, seconds: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC8CA9670B9D83B3B | Since: 323
 */
export declare function advanceTimeTo(hour: number, minute: number, second: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3D10BC92A4DB1D35 | Since: 323
 */
export declare function getDayOfMonth(): number;
/**
 * Gets the current day of the week.
 *
 * 0: Sunday
 * 1: Monday
 * 2: Tuesday
 * 3: Wednesday
 * 4: Thursday
 * 5: Friday
 * 6: Saturday
 *
 * Hash: 0xD972E4BD7AEB235F | Since: 323
 */
export declare function getDayOfWeek(): number;
/**
 * Gets the current ingame hour, expressed without zeros. (09:34 will be represented as 9)
 *
 * Hash: 0x25223CA6B4D20B7F | Since: 323
 */
export declare function getHours(): number;
/**
 * Gets the current ingame clock minute.
 *
 * Hash: 0x13D2B8ADD79640F2 | Since: 323
 */
export declare function getMinutes(): number;
/**
 * No comment provided
 *
 * Hash: 0xBBC72712E80257A1 | Since: 323
 */
export declare function getMonth(): number;
/**
 * Gets the current ingame clock second. Note that ingame clock seconds change really fast since a day in GTA is only 48 minutes in real life.
 *
 * Hash: 0x494E97C2EF27C470 | Since: 323
 */
export declare function getSeconds(): number;
/**
 * No comment provided
 *
 * Hash: 0x961777E64BDAF717 | Since: 323
 */
export declare function getYear(): number;
/**
 * Gets local system time as year, month, day, hour, minute and second.
 *
 * Example usage:
 *
 * int year;
 * int month;
 * int day;
 * int hour;
 * int minute;
 * int second;
 * `or use std::tm struct`
 *
 * `TIME::GET_LOCAL_TIME(&year, &month, &day, &hour, &minute, &second);`
 *
 *
 * Hash: 0x50C7A99057A69748 | Since: 323
 */
export declare function getLocalTime(): [number, number, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x2F8B4D1C595B11DB | Since: 323
 */
export declare function getMillisecondsPerGameMinute(): number;
/**
 * Gets system time as year, month, day, hour, minute and second.
 *
 * Example usage:
 *
 * int year;
 * int month;
 * int day;
 * int hour;
 * int minute;
 * int second;
 *
 * `TIME::GET_POSIX_TIME(&year, &month, &day, &hour, &minute, &second);`
 *
 *
 * Hash: 0xDA488F299A5B164E | Since: 323
 */
export declare function getPosixTime(): [number, number, number, number, number, number];
/**
 * Gets current UTC time
 *
 * Hash: 0x8117E09A19EEF4D3 | Since: 323
 */
export declare function getUtcTime(): [number, number, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x4055E40BD2DBEC1D | Since: 323
 */
export declare function pause(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB096419DF0D06CE7 | Since: 323
 */
export declare function setDate(day: number, month: number, year: number): void;
/**
 * SET_CLOCK_TIME(12, 34, 56);
 *
 * Hash: 0x47C3B5848C3E45D8 | Since: 323
 */
export declare function setTime(hour: number, minute: number, second: number): void;
