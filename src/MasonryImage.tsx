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
import { WindowRounded } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    opacity: .9,
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
        console.log('cliked');
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
                        Here is a sample cake pop
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        here is a description about the cake pop, it costs $(insert price)
                    </Typography>
                    <img
                        src={imgSrc}
                        alt={'modal image'}
                        loading='lazy'
                    />
                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center' }}>
                        <Link to={"/order"}>
                            <Button variant="contained">Order This CakePop</Button>
                        </Link>
                    </div>
                </Box>
            </Modal>
            <TemporaryDrawer />
            {showFirstPage &&
                <>
                    <p style={{ position: 'fixed', display: 'flex', justifyContent: 'center', padding: 30, width: window.screen.width, zIndex: 999, backgroundColor: 'white' }}>Select Items</p>
                    <Box >
                        <ImageList sx={{paddingTop: '80px'}} cols={1} gap={2}>
                            {selectorPhotos.map((item, i) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        onClick={() => setShowFirstPage(false)}
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={'' + i}
                                    // loading="lazy"
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
                <div onClick={() => setShowFirstPage(true)} style={{ position: 'absolute', top: 15, left: 8 }}><ArrowBackIcon /></div>
                <p style={{ textAlign: 'center', padding: 30 }}>Gallery</p>
                <Box sx={{ width: window.screen.width, height: window.screen.availHeight - 250, overflowY: 'auto' }}>
                    <ImageList variant="masonry" cols={2} gap={8}>
                        {photos.map((item, i) => (
                            <ImageListItem key={item.img}>
                                <img
                                    onClick={handleShowDialog(`${item.img}?w=248&fit=crop&auto=format`)}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'' + i}
                                // loading="lazy"
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
                <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center' }}>
                    <Link to={"/order"}>
                        <Button variant="contained">Order A Custom Pop</Button>
                    </Link>
                </div></>}
        </div>

    );
}