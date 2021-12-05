import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {ref,getStorage,getDownloadURL,listAll} from "firebase/storage";
import Typography from "@mui/material/Typography";


const ShowImage = (props) => {

    const [url, setUrl] = useState([]);

    useEffect(() => {
        const storage = getStorage()
        const overviewRef = ref(storage, `files/${props.local.localId}`);
        listAll(overviewRef).then((res) => {
            let promises = res.items.map((imageRef) => getDownloadURL(imageRef));
            Promise.all(promises).then((urls) => {
                setUrl(urls)
            })
        }).catch((err)=> {
            console.log(err)
        })
    }, );
    return (
        (props.email) ?
            <Box className="showImageBox">
                <Typography
                    align="center"
                    variant="h6"
                    className="showImageBox_title"
                    gutterBottom={true}
                >
                    Twoje zdjęcia :
                </Typography>
                <Box className="showImageBox_content">
                    {
                        url.map((url, index) =>{
                            return <img
                                src={url}
                                key={index}
                                alt="user Images"
                                className="showImageBox_content__img"
                            />
                        })
                    }
                </Box>
            </Box>
            :
            <Box className="noAddImageBox">
                <Typography
                    variant="h6"
                    className="noAddImageBox_content"
                >
                    Zaloguj się aby zobaczyć swoje zdjęcia
                </Typography>
            </Box>
    );
};

export default ShowImage;