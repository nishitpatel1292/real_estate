const { Flex, Box, Icon, Text } = require("@chakra-ui/react")
const { default: Image } = require("next/image")
const { useRouter } = require("next/router")
const { useState } = require("react")

const Search = () => {
    const [searchFilters, setSearchFilter] = useState('');
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor='pointer'
                bg='gray.400'
                borderBottom='1px'
                borderColor='gray.200'
                p='2'
                fontWeight='black'
                justifyContent='center'
                alignItems='center'
            >

            </Flex>
        </Box>
    )
}
export default Search;