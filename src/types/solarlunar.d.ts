/**
 * solarLunar
 * https://github.com/yize/solarlunar
 */
declare module 'solarLunar' {
  // 使用する値のみ定義
  interface solarLunarObj {
    cDay: number
    cMonth: number
    cYear: number
    lDay: number
    lMonth: number
    lYear: number
  }

  export const solar2lunar: (y: number, m: number, d: number) => solarLunarObj
  export const lunar2solar: (y: number, m: number, d: number) => solarLunarObj
}
