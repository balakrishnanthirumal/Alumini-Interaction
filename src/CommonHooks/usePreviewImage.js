import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImage = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const showToast = useShowToast();
    const maxFileSizeInBytes = 2 * 1024 * 1024;

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if(file && file.type.startsWith('image/')) {
            if(file.size > maxFileSizeInBytes) {
                showToast("Error", "File size exceeds the maximum limit of 2MB", "error");
                setSelectedFile(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };
            reader.readAsDataURL(file);
        
    }
    else{
        showToast("Error", "Please select an image file", "error");
        setSelectedFile(null);
        return;
    }
}
return {selectedFile, setSelectedFile, handleImageChange};

}
export default usePreviewImage;
