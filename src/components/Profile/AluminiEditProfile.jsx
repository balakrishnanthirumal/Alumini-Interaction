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
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import usePreviewImage from "../../CommonHooks/usePreviewImage";
import useEditProfile from "../../CommonHooks/useEditProfile";
import useShowToast from "../../CommonHooks/useShowToast";

const AluminiEditProfile = ({ isOpen, onClose }) => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    domainKnowlege: "",
    designation: "",
    company: "",
    location: "",
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
                      <Avatar size="xl" src={selectedFile || authUser.profilePicURL} border={"2px solid white "} />
                    </Center>
                    <Center w="full">
                      <Button w="full" onClick={() => fileRef.current.click()}>
                        Edit Profile Picture
                      </Button>
                    </Center>

                    <Input type="file" hidden ref={fileRef}  onChange={handleImageChange} />
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Full Name</FormLabel>
                  <Input
                    placeholder={"Full Name"}
                    size={"sm"}
                    type={"text"}
                    value={inputs.name || authUser.name}
                    textColor={"white"}
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
                    value={inputs.username || authUser.username}
                    type={"text"}
                    textColor={"white"}
                    onChange={(e) =>
                      setInputs({ ...inputs, username: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Company Name</FormLabel>
                  <Input
                    placeholder={"Company Name"}
                    size={"sm"}
                    value={inputs.company || authUser.organisationName}
                    type={"text"}
                    textColor={"white"}
                    onChange={(e) =>
                      setInputs({ ...inputs, company: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Designation</FormLabel>
                  <Input
                    placeholder={"Designation"}
                    size={"sm"}
                    type={"text"}
                    value={inputs.designation || authUser.designation}
                    textColor={"white"}
                    onChange={(e) =>
                      setInputs({ ...inputs, designation: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Domain Knowlege</FormLabel>
                  <Input
                    placeholder={"Domain Knowlege"}
                    size={"sm"}
                    type={"text"}
                    value={inputs.domainKnowlege || authUser.domainKnowledge}
                    textColor={"white"}
                    onChange={(e) =>
                      setInputs({ ...inputs, domainKnowlege: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Location</FormLabel>
                  <Input
                    placeholder={"Location"}
                    size={"sm"}
                    value={inputs.location || authUser.location}
                    type={"text"}
                    textColor={"white"}
                    onChange={(e) =>
                      setInputs({ ...inputs, location: e.target.value })
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
                    onClick={handleEditProfile}
                  >
                    {isUpdating? "Loading...": "Submit"}
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

export default AluminiEditProfile;
