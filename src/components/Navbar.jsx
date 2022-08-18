import { Box, Center, Divider, Heading, HStack, Link, Stack, StackDivider } from "@chakra-ui/react"


export const Navbar = () => {

    const handleClick = (url) => {
        window.location.href = url
    }

    return (
        <Box 
            bg="blue.800"
            color="gray.50"
            w="100vw"
            p={2}
            px={{base: 1, md:20}}        
            position="fixed"
            h="59px"
        >
            <HStack
            >
                <Center 
                        onClick={() => handleClick('#')}
                        cursor="pointer"
                        px={10}
                    >
                            <Heading fontSize={{base: "2xl", md: "4xl"}}>Eric Acosta</Heading>
                </Center>
                <Divider borderColor='gray.300' orientation="vertical" />
                <Stack
                    direction={{base: 'row'}} 
                    spacing='24px' 
                    divider={<StackDivider borderColor='gray.300' /> }
                    display={{base:'none',  md:'flex'}}
                >
                    
                    <Center onClick={() => handleClick('#')} cursor="pointer">       
                        Home
                    </Center>
                    <Center onClick={() => handleClick('#projects')} cursor="pointer">
                        Projects
                    </Center>
                    <Center>
                        Technologies
                    </Center>

                </Stack>

            </HStack>
        </Box>
    )
}