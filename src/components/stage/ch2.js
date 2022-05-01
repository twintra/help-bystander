
import { Button, Fade, Grid, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FailedScreen from "../failedScreen";
import GotItemScreen from "../gotItemScreen";
import LoadingScreen from "./loadingScreen";

export default function Ch2(props) {

    
    
    const [scene, setScene] = useState(-1);
    const [modalOpen, setModalOpen] = useState(false);
    const public_path = process.env.PUBLIC_URL
    const [gotItem, setGotItem] = useState(false);
    const [inventoryData, setInventoryData] = useState({})

    const sceneImage = [
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_Page1.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/chapter2_page2.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/chapter2_page3.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_Page4.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/chapter2_Page5.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_Page6.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_Page7.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_Page8_question.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/chapter2_Page9.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/chapter2_Page10.png`,
        `${public_path}/assets/Element/Chapter_Manga/Chapter2/Chapter2_good_answer_scene.jpg`,
    ]
    console.log(scene)

    useEffect(() => {
        console.log("apple")
        sceneImage.forEach((image) => {
            new Image().src = image;
        })
        setInventoryData(JSON.parse(localStorage.getItem("inventory")))
        
        
    }, [])

    const nextScene = () => {
        setScene(scene + 1);
    }

    const onChapterFailed = () => {
        setScene(-2);
    }

    const onClickLastStep = () => {
        if (gotItem) {
            nextScene();
        } else {
            props.onNext();
        }

    }
    const onShowGotItem = () => {
        
        localStorage.setItem("inventory", JSON.stringify(inventoryData))
        setScene(-3)
    }

    const onOpenQuestion = () => {
        setModalOpen(true);
    }

    const onBestAnswer = () => {
        const temp = {...inventoryData}
        temp.chapter2 = true
        setInventoryData(temp)
        setGotItem(true);
        nextScene()
    }

    const onWrongAnswer = () => {
        onChapterFailed()
    }

    const onNormalAnswer = () => {
        nextScene()
    }

    function sceneControl() {
        switch (scene) {
            case -3:
                return <GotItemScreen onNext={props.onNext} />
            case -2:
                return <FailedScreen onNext={props.onNext} />
            case -1:

                return <LoadingScreen nextScene={nextScene} chapter={2} />
            case 0:
                return (

                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[0]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 1:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[1]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 2:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[2]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 3:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[3]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 4:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[4]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 5:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[5]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 6:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[6]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 7:
                return (
                    <>
                        <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                            <img src={sceneImage[7]} width="100%" onClick={() => onOpenQuestion()} />
                        </Fade>
                        <Modal
                            open={modalOpen}
                        >
                            <Grid
                                container
                                direction={"column"}
                                alignItems="center"
                                justifyContent={"center"}
                                sx={{

                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <Grid item style={{ margin: "10px" }}>
                                    <Typography fontSize={"32px"} color="#AD1A68">
                                        คุณจะทำอย่างไรกับสถานการณ์นี้
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Grid
                                        container
                                        alignItems={"center"}
                                        justifyContent="center"
                                        sx={{
                                            ":hover": {
                                                cursor: "pointer"
                                            },
                                            margin: "10px",
                                            height: "160px",
                                            width: "600px",
                                            // padding: "50px",
                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-2.png)`,
                                            backgroundSize: "cover",

                                        }}
                                        onClick={onBestAnswer}
                                    >


                                        ตะโกนบอกให้ระวัง

                                    </Grid>
                                </Grid>
                                <Grid item >
                                    <Grid
                                        container
                                        alignItems={"center"}
                                        justifyContent="center"
                                        sx={{
                                            ":hover": {
                                                cursor: "pointer"
                                            },
                                            margin: "10px",
                                            height: "160px",
                                            width: "600px",
                                            // padding: "50px",
                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-2.png)`,
                                            backgroundSize: "cover",

                                        }}
                                        onClick={onWrongAnswer}
                                    >

                                        ยืนอยู่เฉย ๆ รอให้คนอื่นเข้าไปช่วย

                                    </Grid>
                                </Grid>
                                <Grid item >
                                    <Grid
                                        container
                                        alignItems={"center"}
                                        justifyContent="center"
                                        sx={{
                                            ":hover": {
                                                cursor: "pointer"
                                            },
                                            margin: "10px",
                                            height: "160px",
                                            width: "600px",
                                            
                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Element/Loading_page/Loading_Element-2.png)`,
                                            backgroundSize: "cover",

                                        }}
                                        onClick={onNormalAnswer}
                                    >

                                        เข้าไปดึงตัวออกมา

                                    </Grid>
                                </Grid>
                            </Grid>


                        </Modal>
                    </>

                )

            case 8:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[8]} width="100%" onClick={() => nextScene()} />
                    </Fade>
                )
            case 9:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[9]} width="100%" onClick={onClickLastStep} />
                    </Fade>
                )
            case 10:
                return (
                    <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
                        <img src={sceneImage[10]} width="100%" onClick={onShowGotItem} />
                    </Fade>
                )

            default:
                break;

        }
    }

    return sceneControl()
}