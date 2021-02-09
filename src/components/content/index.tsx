import { ChangeEvent } from 'react'
import { Box, Text, Input } from "@chakra-ui/react"
import { useCalendar } from './hooks'

const Content = () => {
    const { selectDate, lunarMessage, solarMessage, setSelectDate } = useCalendar()

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => setSelectDate(event.target.value)

    return (
        <Box p="4">
            <Text fontSize="sm">誕生日など、旧暦の日付を調べたい年月日を入力してください</Text>
            <Box p="2" width="190px">
                <Input
                    type="date"
                    value={selectDate}
                    backgroundColor="white"
                    color="#364f53"
                    onChange={handleOnChange}
                />
            </Box>
            <Text marginTop="4" fontSize="sm">{lunarMessage}<br/>{solarMessage}</Text>
        </Box>
    )
}
export default Content