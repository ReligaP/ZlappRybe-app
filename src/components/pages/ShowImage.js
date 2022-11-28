import { useEffect , useState } from 'react';
import { ref , getStorage , getDownloadURL , listAll } from "firebase/storage";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const ShowImage = ( props ) => {
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
    });
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
                {
                    url.length !== 0 ?
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
                        :
                        <Box className="showImageBox_noContent">
                            <Typography
                                variant="subtitle2"
                            >
                                Nie masz jeszcze dodanych żadnych zdjęć
                            </Typography>
                        </Box>
                }
            </Box>
            :
            <Box className="noAddImageBox">
                <Typography
                    variant="h6"
                >
                    Zaloguj się aby zobaczyć swoje zdjęcia
                </Typography>
            </Box>
    );
};

export default ShowImage;