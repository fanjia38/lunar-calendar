import { Box, Container, Heading, Text } from "@chakra-ui/react"
import Content from '../src/components/content'

const Index = (): React.ReactElement => {
    return (
        <Box height="100vh" backgroundColor="#caaca7" color="#364f53">
            <Box backgroundColor="#364f53" color="#caaca7" p="4">
                <Heading>Lunar Calendar</Heading>
                <Text>旧歴の日付を調べる</Text>
            </Box>
            <Content />
            <Container marginTop="8" p="4" border="1px solid #364f53" borderRadius="8px">
                <Text fontSize="sm">
                    これは、中国の太陰太陽暦を計算するためのライブラリを使用しているため、日本の天保暦や新暦旧暦の対照表とは異なる日付が表示される可能性があります。
                </Text>
            </Container>
        </Box>
    )
}
export default Index
