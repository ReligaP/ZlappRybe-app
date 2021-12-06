import React,{useState,useEffect}  from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {Box, Typography} from "@mui/material";
import app from "../../firebase/firebaseconfig";


const ShowRelation = (props) => {

    const [relation, setRelation] = useState([]);

    useEffect(() => {
        const getRelation = async () => {
            const db = getFirestore(app);
            const querySnapshot = await getDocs(collection(db, `/${props.local.localId}`));
            const tab = [];
            querySnapshot.forEach((doc) => {
                tab.push(doc.data());
            });
            setRelation(tab);
        }
        getRelation()
    },[props.local.localId]);

    return (
        (props.email) ?

            (<Box className="showRelationBox">
                <Typography
                    variant="h6"
                    align="center"
                    className="showRelationBox_title"
                >
                    Twoje relacje wędkarskie
                </Typography>
                {
                    relation.length !== 0 ?
                        <Box className="showRelationBox_relations">
                            {
                                relation.map((el,index)=> {
                                    return (
                                        <Box key={index} className="showRelationBox_relations__content">
                                            <Box style={{marginBottom:"10px"}}>
                                                <Typography variant="subtitle2">
                                                    Relacja nr. {index + 1}
                                                </Typography>
                                            </Box>
                                            <Typography variant="subtitle2" gutterBottom={true}>
                                                {el.data}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom={true}>
                                                Godzina rozpoczęcia: {el.start}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom={true}>
                                                Godzina zakończenia: {el.end}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom={true}>
                                                Miejsce: {el.place}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom={true}>
                                                Opis miejsca: {el.text}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom={true}>
                                                Wyniki: {el.fish}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom={true}>
                                                Pogoda podczas wędkowania: {el.weather}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom={true}>
                                                Dodatkowe info: {el.info}
                                            </Typography>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                        :
                        <Box className="showRelationBox_norelations">
                            <Typography className="showRelationBox_norelations__content" variant="subtitle2">
                                Nie masz dodadanych jeszcze żadanych relacji
                            </Typography>
                        </Box>
                }
            </Box>)
            :
            <Box className="noRelationBox">
                <Typography
                    variant="h6"
                    className="noRelationBox_content"
                >
                    Zaloguj się aby zobaczyć swoje relację
                </Typography>
            </Box>

    );
};

export default ShowRelation;