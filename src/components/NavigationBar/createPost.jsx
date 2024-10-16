import {
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
  ModalHeader,
  CloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoMdImage } from "react-icons/io";
import usePreviewImage from "../../CommonHooks/usePreviewImage";
import useShowToast from "../../CommonHooks/useShowToast";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../store/postStore";
import { addPost } from "../../store/userProfileStore";
import { addDoc, arrayUnion, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [caption, setCaption] = useState("");
  const imageRef = useRef();
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImage();
  const {isLoading, handleCreatePost} = useCreatePost();
  const showToast = useShowToast();
  const handlePostCreation  = async () => {

    try {
        await handleCreatePost(selectedFile, caption);
        onClose();
        setCaption("");
        setSelectedFile(null);
    } catch (error) {
        showToast("Error", error.message, "error");
    }
  }

  return (
    <>
      <div onClick={onOpen}>
        <FaRegPlusSquare className="text-2xl" />
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent bg={"black"} border={"1px solid gray"}>
          <ModalHeader textColor={"white"}>Create Post</ModalHeader>
          <ModalCloseButton textColor={"white"} />
          <ModalBody pb={6}>
            <Textarea
              placeholder="Post caption..."
              border={"1px solid gray"}
              textColor={"white"}
              onChange={(e) => setCaption(e.target.value)}
            />

            <Input
              type="file"
              hidden
              ref={imageRef}
              onChange={handleImageChange}
            />

            <IoMdImage
              style={{
                marginTop: "15px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
              size={16}
              color="#fff"
              onClick={() => imageRef.current.click()}
            />
            {selectedFile && (
              <Flex mt={5} position={"relative"} justifyContent={"center"}>
                <img src={selectedFile} alt="post" />
                <CloseButton
                  onClick={() => setSelectedFile(null)}
                  position={"absolute"}
                  top={2}
                  right={2}
                />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            <Button mr={3}
            onClick={handlePostCreation}
            >{isLoading ? "Posting..." : "Post"}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;

function useCreatePost() {
	const showToast = useShowToast();
	const [isLoading, setIsLoading] = useState(false);
	const authUser = useSelector((state) => state.auth.user);
    const userProfile = useSelector((state) => state.profile.userProfile);
    const dispatch = useDispatch();

	const handleCreatePost = async (selectedFile, caption) => {
		if (isLoading) return;
		setIsLoading(true);
		const newPost = {
			caption: caption,
			likes: [],
			comments: [],
			createdAt: Date.now(),
			createdBy: authUser.uid,
            imageURL: null,
		};

		try {
			const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
			const userDocRef = doc(firestore, "user", authUser.uid);
			const imageRef = ref(storage, `posts/${postDocRef.id}`);

			await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
			await uploadString(imageRef, selectedFile, "data_url");
			const downloadURL = await getDownloadURL(imageRef);

			await updateDoc(postDocRef, {imageURL: downloadURL });

			newPost.imageURL = downloadURL;

			dispatch(createPost({ ...newPost, id: postDocRef.id }));

            dispatch(addPost({ ...newPost, id: postDocRef.id }));

			showToast("Success", "Post created successfully", "success");
		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, handleCreatePost };
}

