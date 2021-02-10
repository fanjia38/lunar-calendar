/**
 * solarLunar
 * https://github.com/yize/solarlunar
 */
declare module 'solarlunar' {
  // 使用する値のみ定義
  interface solarlunarObj {
    cDay: number
    cMonth: number
    cYear: number
    lDay: number
    lMonth: number
    lYear: number
  }

  export const solar2lunar: (y: number, m: number, d: number) => solarlunarObj
  export const lunar2solar: (y: number, m: number, d: number) => solarlunarObj
}
