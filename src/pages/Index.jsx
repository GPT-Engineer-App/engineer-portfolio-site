import { Container, VStack, Heading, Text, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2}>John Doe</Heading>
          <Text fontSize="xl">Electrical Engineer</Text>
          <Image src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTU0ODMyMTN8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" mt={4} mb={4} alt="John Doe" />
          <Text>With over 10 years of experience in the field of electrical engineering, specializing in power systems and renewable energy solutions.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2}>Projects</Heading>
          <VStack spacing={4}>
            <Text fontWeight="bold">Smart Grid Implementation</Text>
            <Text>Led the design and implementation of a smart grid solution that improved energy distribution efficiency by 30%.</Text>
            <Text fontWeight="bold">Renewable Energy Systems</Text>
            <Text>Developed multiple solar and wind power projects that have supplied power to over 10,000 homes.</Text>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2}>Contact</Heading>
          <VStack spacing={4}>
            <Link href="https://linkedin.com/in/johndoe" isExternal>
              <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/johndoe" isExternal>
              <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
                GitHub
              </Button>
            </Link>
            <Link href="mailto:johndoe@example.com">
              <Button leftIcon={<FaEnvelope />} colorScheme="red" variant="solid">
                Email Me
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
