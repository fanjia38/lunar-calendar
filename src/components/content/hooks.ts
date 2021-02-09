import { useState, useMemo } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import solarLunar from 'solarLunar'
import { format, addYears, getYear, getMonth, getDate } from 'date-fns'

interface useCalendarReturnType {
  selectDate: string
  lunarMessage: string
  solarMessage: string
  setSelectDate: Dispatch<SetStateAction<string>>
}
export const useCalendar = (): useCalendarReturnType => {
    const [selectDate, setSelectDate] = useState(format(addYears(new Date(), -20), "yyyy-MM-dd"))

    const lunarDateObject = useMemo(() => {
        const dateTime = new Date(selectDate)

        const year = getYear(dateTime)
        const month = getMonth(dateTime) + 1
        const date = getDate(dateTime)

        return solarLunar.solar2lunar(year, month, date)
    }, [selectDate])

    const solarDateObject = useMemo(() => {
        return solarLunar.lunar2solar(getYear(new Date()), lunarDateObject.lMonth, lunarDateObject.lDay);
    }, [lunarDateObject])

    const lunarMessage = useMemo(() => {
        return `${lunarDateObject.cYear}年${lunarDateObject.cMonth}月${lunarDateObject.cDay}日は、旧暦 ${lunarDateObject.lYear}年${lunarDateObject.lMonth}月${lunarDateObject.lDay}日 です。`
    }, [lunarDateObject])

    const solarMessage = useMemo(() => {
        return `今年の旧暦${solarDateObject.lMonth}月${solarDateObject.lDay}は、${solarDateObject.cYear}年${solarDateObject.cMonth}月${solarDateObject.cDay}日です。`
    }, [solarDateObject])

    return {
        selectDate,
        lunarMessage,
        solarMessage,
        setSelectDate
    }
}
