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

import cake6 from "./assets/cake6.jpeg";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function MasonryImageList() {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    const [isOpen, setIsOpen] = useState(false)

    const handleShowDialog = () => {
        setIsOpen(!isOpen);
        console.log('cliked');
    };




    return (
        <div style={{ height: window.screen.height }}>
            <Modal
                open={isOpen}
                onClose={handleShowDialog}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Here is a sample cake pop
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <img
                        src={cake6}
                        alt={'modal image'}
                    // loading="lazy"
                    />
                </Box>
            </Modal>
            <TemporaryDrawer />

            <p style={{ textAlign: 'center', padding: 30 }}>Gallery</p>
            <Box sx={{ width: window.screen.width, height: window.screen.availHeight - 250, overflowY: 'auto' }}>
                <ImageList variant="masonry" cols={2} gap={8}>
                    {photos.map((item, i) => (
                        <ImageListItem key={item.img}>
                            <img
                                onClick={handleShowDialog}
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
                    <Button variant="contained">Order Now!</Button>
                </Link>
            </div>
        </div>

    );
}