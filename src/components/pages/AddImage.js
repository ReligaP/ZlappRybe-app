import { useState } from 'react';
import { getStorage , ref , getDownloadURL , uploadBytesResumable } from "firebase/storage";
import { Box , Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const AddImage = ( props ) => {
    const [progress, setProgress] = useState(0);
    const [success,setSuccess] = useState(false);

    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    };

    const uploadFiles = (file) => {
        if (!file) return;
        const storage=getStorage()
        const storageRef = ref(storage, `/files/${props.local.localId}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
                setSuccess(true)
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                });
            }
        );
    };

    const handleClik = (e) => {
        e.preventDefault();
        setSuccess(false)
    };

    return (
        (props.email) ?
            <Box className="addImageBox">
                <Box className="addImageBox_content">
                    <Typography
                        variant="h6"
                        align="center"
                    >
                        Dodaj swoję zdjecia z wędkowania
                    </Typography>
                    <form
                        onSubmit={formHandler}
                        className="addImageBox_content__form"
                    >
                        <input
                            className="fileInput"
                            type="file"
                        />
                        {
                            (success === false) ?
                                <Button type="submit">
                                    Dodaj
                                </Button>
                                :
                                ""
                        }
                    </form>
                    {
                        (success === true) ?
                            <Box className="addImageBox_content__success">
                                <Typography
                                    variant="body2"
                                    align="center"
                                >
                                    Zdjęcie dodane poprawnie w {progress} %
                                </Typography>
                                <Button onClick={handleClik}>
                                    Dodaj kolejne zdjęcie
                                </Button>
                            </Box>
                            :
                            ""
                    }
                </Box>
            </Box>
            :
            <Box className="noAddImageBox">
                <Typography
                    variant="h6"
                >
                    Zaloguj się aby dodać swoje zdjęcia
                </Typography>
            </Box>
    );
};

export default AddImage;