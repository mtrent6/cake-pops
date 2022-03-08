import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TemporaryDrawer from './Drawer';
import { CAKE_POP_PHOTOS } from './photos';
import { useEffect } from 'react'
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";

const photos = CAKE_POP_PHOTOS.map(pop => {
    return {
        img: pop,
    }
})

export default function MasonryImageList() {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])



    return (
        <div style={{ height: window.screen.height }}>
            <TemporaryDrawer />

            <p style={{ textAlign: 'center', padding: 30 }}>Gallery</p>
            <Box sx={{ width: window.screen.width, height: window.screen.availHeight - 250, overflowY: 'auto' }}>
                <ImageList variant="masonry" cols={2} gap={8}>
                    {photos.map((item, i) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'' + i}
                                loading="lazy"
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