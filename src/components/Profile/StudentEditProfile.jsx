import {
  Avatar,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const StudentEditProfile = ({ isOpen, onClose }) => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",

    domain: "",
  });
  const fileRef = useRef(null);
  const {selectedFile, setSelectedFile, handleImageChange } = usePreviewImage();
  const authUser = useSelector((state) => state.auth.user);
  const {editProfile, isUpdating} = useEditProfile();
  const showToast = useShowToast();
  const handleEditProfile = async() => {
    try {
        await editProfile(inputs, selectedFile);
        setSelectedFile(null);
        onClose();
    } catch (error) {
        showToast("Error", error.message, "error");
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={"black"}
          boxShadow={"xl"}
          border={"1px solid gray"}
          mx={3}
        >
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            {/* Container Flex */}
            <Flex bg={"black"}>
              <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                bg={"black"}
                p={6}
                my={0}
              >
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                  Edit Profile
                </Heading>
                <FormControl>
                  <Stack direction={["column", "row"]} spacing={6}>
                    <Center>
                      <Avatar size="xl" src={""} border={"2px solid white "} />
                    </Center>
                    <Center w="full">
                      <Button w="full">Edit Profile Picture</Button>
                    </Center>
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"} textColor={"white"}>
                    Full Name
                  </FormLabel>
                  <Input
                    placeholder={"Full Name"}
                    size={"sm"}
                    type={"text"}
                    textColor={"white"}
                    value={inputs.name || authUser.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Username</FormLabel>
                  <Input
                    placeholder={"Username"}
                    size={"sm"}
                    type={"text"}
                    textColor={"white"}
                    value={inputs.username || authUser.username}
                    onChange={(e) =>
                      setInputs({ ...inputs, username: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Interested Domain</FormLabel>
                  <Input
                    placeholder={"Bio"}
                    size={"sm"}
                    type={"text"}
                    textColor={"white"}
                    value={inputs.domain || authUser.domainKnowledge}
                    onChange={(e) =>
                      setInputs({ ...inputs, domain: e.target.value })
                    }
                  />
                </FormControl>

                <Stack spacing={6} direction={["column", "row"]}>
                  <Button
                    bg={"red.400"}
                    color={"white"}
                    w="full"
                    size="sm"
                    _hover={{ bg: "red.500" }}
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    size="sm"
                    w="full"
                    _hover={{ bg: "blue.500" }}
                    
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StudentEditProfile;
