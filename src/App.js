import logo from "./logo.svg";
import "./App.css";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Button,
  Heading,
  Text,
  VStack,
  Stack,
  Flex,
  Spacer,
  Link,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Image
} from "@chakra-ui/react";
import { Background } from "./components/Background";
import Iframe from "react-iframe";
import { useEffect, useState } from "react";
import { Desktop, DeviceMobile, MagicWand, Book } from "phosphor-react";

function App() {
  const gameURL =
    "http://hallpass-citation.s3-website.us-east-2.amazonaws.com/";
  const [play, setPlay] = useState("");

  const playGame = () => {
    console.log("playing the game");
    setPlay(gameURL);
  };

  return (
    <Box>
      <Box className="background">
        <Background />
      </Box>
      <Center mt={600}>
        <VStack
          spacing={0}
          style={{ zIndex: "999" }}
          bg="blackAlpha.800"
          padding={10}
        >
          <Box maxW="32rem" textStyle="h1" color="white">
            Citation
          </Box>
          <Box>
            <Heading align="center" mb={5} color="yellow.100" as="h1">
              a tiny game about academic integrity
            </Heading>
            <Text align="center" fontSize="2xl" mb={10} color="white">
              Citation is an episodic mobile and desktop web game. You play as a
              fledgling, if not forgetful scholar of magic on a hunt for your
              lost notes. In the process, you’ll absorb some common-sense
              knowledge about what it means to be an ethical scholar.
            </Text>
          </Box>
          <AspectRatio w="100%" ratio={633 / 292} p={10}>
            <Iframe
              url={play}
              width="100%"
              height="100%"
              className="game"
              display="initial"
              allowFullScreen
            />
          </AspectRatio>
          <Box w="100%" bg="black">
            <Center>
              <VStack>
                <Stack direction="row" m={5} spacing={4}>
                  <Button
                    leftIcon={<Desktop />}
                    w="200px"
                    size="lg"
                    colorScheme="yellow"
                    onClick={playGame}
                  >
                    PLAY (DESKTOP)
                  </Button>
                  <Link href={gameURL} isExternal>
                    <Button
                      leftIcon={<DeviceMobile />}
                      w="200px"
                      size="lg"
                      colorScheme="blue"
                    >
                      PLAY (MOBILE)
                    </Button>
                  </Link>
                </Stack>
              </VStack>
            </Center>
            <Flex mt={20}>
              <Box w="60%" bg="black" p={5} >
                <Box color='white' fontSize="2xl" mb={10}  >
                  <Text bgGradient='linear(to-l, white, #7928CA)' fontSize='6xl' p={2}>ABOUT</Text>
                  <Text mt={5} fontSize="2xl">Welcome to the world of <i>Dream School</i>, one of the world's premiere school of magic, where tests are games and games are tests. You play as a fledgling scholar on the eve of a <i>SUPER IMPORTANT</i> test.</Text>
                  <Text mt={5}>Unfortunately, you can't seem to find your notes. Without them, you'll surely fail...</Text>  
                  <Text mt={5} color='yellow'><b>人民请注意!</b> The first episode requires that you've read the Bean King v. Dream School Case. You can do so in-game, or on our website.</Text>
                  <Link href='https://www.hallpass.games/2021/10/18/bean-king-v-dream-school-case-description/' isExternal>
                    <Button leftIcon={<Book />} mt={5} variant='outline' p={10} colorScheme="pink">Read the case</Button>
                  </Link>   
                </Box>
                <Box color='white' fontSize="2xl">
                  <Text bgGradient='linear(to-l, white, #7928CA)' fontSize='6xl' p={2}>CREDITS</Text>
                  <Text mt={5} fontSize="2xl">
                  <i>Citation</i> was made over a summer by a small group of  
                    <Link color='violet' href='https://ima.shanghai.nyu.edu/node/5' isExternal> NYU Emerging Media students </Link> who wanted to to work together on a game that pushed the limits of what a game on the web could be. 
                  </Text>
                    <List  mt={5} spacing={3}>
                    <ListItem><ListIcon as={MagicWand} color='#FD6FFF' />Art: Andrew Liu, Hatim Behnsain, Soojin Lee</ListItem>
                    <ListItem><ListIcon as={MagicWand} color='#FD6FFF' />Story, Programming: Christian Grewell, Zane Fadul</ListItem>
                    <ListItem><ListIcon as={MagicWand} color='#FD6FFF' />Design: Soojin Lee</ListItem>
                    <ListItem><ListIcon as={MagicWand} color='#FD6FFF' />Music: Zane Fadul</ListItem>
                  </List>
                </Box>
              </Box>
              <Spacer />
              <Box w="40%"p={5} bg="black">
                <AspectRatio m={2} ratio={16 / 9} p={10}>
                  <Iframe
                    url="https://www.youtube.com/embed/cjIv7ut14Wk"
                    className="myClassname"
                    display="initial"
                  />
                </AspectRatio>
                <AspectRatio m={5}  ratio={16 / 9} >
                <Image
                  src='../images/character_select.png'
                  alt='character selection screen'
                />
                </AspectRatio>
                <AspectRatio m={5}  ratio={16 / 9} >
                <Image
                  src='../images/dorm.png'
                  alt='dorm'
                />
                </AspectRatio>
                <AspectRatio m={5}  ratio={16 / 9} >
                <Image
                  src='../images/shade.png'
                  alt='dorm'
                />
                </AspectRatio>
                <AspectRatio m={5}  ratio={16 / 9} >
                <Image
                  src='../images/ratio.png'
                  alt='dorm'
                />
                </AspectRatio>
              </Box>
            </Flex>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
}

export default App;