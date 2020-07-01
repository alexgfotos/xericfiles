import React, { Component } from "react";
import { Grid, Typography } from '@material-ui/core';
import "../Explore/explore.css"
import Masonry from 'react-masonry-css'



class Explore extends Component {
    
    state = {
        imageUrl: "",
        imageUrlArray: [
            "https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            "https://desenio.com/bilder/artiklar/zoom/12219_1.jpg",
            "https://cdn11.bigcommerce.com/s-oqm1pc/images/stencil/1280x1280/products/2892/12017/Mammillaria_gracilis_fragilis2__Thimble_Cactus__17194.1581715895.jpg?c=2",
            "https://www.ikea.com/us/en/images/products/cactaceae-potted-plant__0899851_PE594485_S5.JPG",
            "https://cdn.shopify.com/s/files/1/0035/2219/9641/products/Fishhook-3_394x.jpg?v=1547768358",
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/14/14/cactus-7.jpg?w968h681",
            "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/side_image/public/thumbnails/image/Thomas-PPC.JPG",
            "https://www.placestoseeinarizona.com/wp-content/uploads/2014/08/cholla.jpg",
            "https://previews.123rf.com/images/weezybob5/weezybob51802/weezybob5180200372/96454426-purple-prickly-pear-cactus-in-arizona-desert.jpg",
            "https://desertxeriscape.files.wordpress.com/2014/05/totempolecactus.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqsVfbjWNudfZb_UaipCmFNE_AscXvAN9dOA&usqp=CAU",
            "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/04/640/320/Bald-Eagle-2.jpg?ve=1&tl=1"
        ],
      
    }

    render() {

        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, idx) => {

            return (
                <img
                    className="singleImage"
                    src={url}
                    key={idx}
                    onClick={() => this}
                />
            )
        })

        return (
                <Grid container spacing={3} className="backroundColor">
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center" >
                            Explore
                        </Typography>
                    </Grid>
                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {images}
                    </Masonry>
                </Grid>
        )
    }

}
export default Explore