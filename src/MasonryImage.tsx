import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TemporaryDrawer from './Drawer';
import { CAKE_POP_PHOTOS } from './photos';
import { useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import cake6 from "./assets/cake6.jpeg";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import blurry from "./assets/blurry.jpeg"
import { ImageLoad } from "./ImageLoad"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const photos = CAKE_POP_PHOTOS.map((pop, i) => {
    return {
        img: pop,
        title: 'cake pop $' + i
    }
})

let selectorPhotos = photos.slice(0, 3)
selectorPhotos[0].title = "Cookies"
selectorPhotos[1].title = "Cake Pops"
selectorPhotos[2].title = "Custom"

export default function MasonryImageList() {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    const [isOpen, setIsOpen] = useState(false)
    const [imgSrc, setImgSrc] = useState()
    const [showFirstPage, setShowFirstPage] = useState(true)

    const handleShowDialog = (src) => () => {
        setIsOpen(!isOpen);
        setImgSrc(src)
    };


    return (
        <div style={{ height: window.screen.height }}>
            <Modal
                open={isOpen}
                onClose={handleShowDialog('')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <p style={{ padding: 0 }}>Cherry Flavored Cake Pops</p>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <p style={{ padding: 0 }}>These cake pops are made with a pronminent cherry flavor. They are selling for $50 a dozen, order below!</p>
                    </Typography>
                    {/* @ts-ignore */}
                    <ImageLoad src={`${imgSrc}?w=248&fit=crop&auto=format`}
                    />

                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={handleShowDialog('')} sx={{ backgroundColor: '#FAD900', fontFamily: 'monospace', color: 'black' }} variant="contained">Close</Button>
                    </div>
                </Box>
            </Modal>
            <TemporaryDrawer />
            {showFirstPage &&
                <>
                    <p style={{ position: 'fixed', display: 'flex', justifyContent: 'center', padding: 30, width: window.screen.width, zIndex: 999, backgroundColor: 'white' }}>Select Items</p>
                    <Box >
                        <ImageList sx={{ paddingTop: '80px' }} cols={1} gap={2}>
                            {selectorPhotos.map((item, i) => (
                                <ImageListItem key={item.img}>
                                    {/* @ts-ignore */}
                                    <ImageLoad onClick={() => setShowFirstPage(false)}
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    />

                                    <ImageListItemBar
                                        sx={{
                                            background:
                                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                        }}
                                        title={item.title}
                                        position="top"

                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </>

            }

            {!showFirstPage && <>
                <div onClick={() => setShowFirstPage(true)} style={{ position: 'fixed', top: 15, left: 8, zIndex: 1000 }}><ArrowBackIcon /></div>
                <p style={{ position: 'fixed', display: 'flex', justifyContent: 'center', padding: 30, width: window.screen.width, zIndex: 999, backgroundColor: 'white' }}>Gallery</p>
                <Box>
                    <ImageList sx={{ paddingTop: '80px', paddingBottom: '60px' }} variant="masonry" cols={2} gap={8}>
                        {photos.map((item, i) => (
                            <ImageListItem key={item.img}>
                                {/* @ts-ignore */}
                                <ImageLoad onClick={handleShowDialog(`${item.img}?w=248&fit=crop&auto=format`)}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                />
                                <ImageListItemBar
                                    sx={{
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
                                    title={item.title}
                                    position="top"

                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                {/* <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center' }}> */}
                <div style={{ position: 'fixed', bottom: 0, paddingBottom: 15, paddingTop: 15, display: 'flex', justifyContent: 'center', width: window.screen.width, backgroundColor: 'white' }}>
                    <Link to={"/order"}>
                        <Button sx={{ backgroundColor: '#FAD900', fontFamily: 'monospace', color: 'black' }} variant="contained">Order A Custom Pop</Button>
                    </Link>
                </div></>}
        </div>

    );
}