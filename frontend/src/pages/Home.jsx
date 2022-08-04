import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SuperF from "../components/SuperF";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/styleHome.css";
// import required modules
import { Autoplay } from "swiper";
//grid
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textalign: "center",
  color: theme.palette.text.secondary,
}));


const Home = () => {
  return (
    <>
      <div className="carouselHome">
        
        <SuperF/>
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/17f592ba-2059-427e-9130-39b08ab8bdb8/nike-sportswear.jpg"
              alt="f1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esAR/Images/originals-ss22-parley-launch-hp-mh-large-GV7616-d_tcm216-854476.jpg"
              alt="img2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220624_jd_p1_bg.gif"
              alt="img3"
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
      <div className="containerPopulares">
        <div className="titleDivPopular">
          <h1 className="titlePopular">POPULAR RIGHT NOW</h1>
        </div>

        <div className="containerBoxPupular">
          <div className="containerBP">
            <div className="imgbox">
              <img
                src="https://i.ibb.co/t8w4YyL/nike.png"
                alt="Nike Air Max 270"
                title="Nike Air Max 270"
              />
            </div>

          </div>
          <div className="containerBP">
            <div className="imgbox imgbox2">
              <img
                src="https://media.discordapp.net/attachments/998602282113445979/999392011771715644/adidas-removebg-preview.png"
                alt="Nike Air Max 270"
                title="Nike Air Max 270"
              />
            </div>

          </div>

          <div className="containerBP">
            <div className="imgbox imgbox3">
              <img
                src="https://reactsport.herokuapp.com/img/productImages/shoe_newbalance_01.png"
                title="Nike Air Max 270"
                alt="img3"
              />
            </div>

          </div>

        </div>
      </div>
      <div className="containerGaleria">
        {/* <h1>Galeria</h1> */}

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Item className="gridImg1"></Item>
            </Grid>
            <Grid item xs={6} md={6}>
              <Item className="gridImg2"></Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item className="gridImg3"></Item>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item className="gridImg4"></Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div></div>


      <div className="footerLogo">
        <div className="containerLogos">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/ADIDAS_136x136.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/ASICS_136x136_2_1_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/converse_136x136_1_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/CROCS_logo_136x136.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/FILA_136x136_2.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/new_balance_136X136.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/NIKE_136x136_2_1_1_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/PUMA_136X136.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/reebok_logo_136x136_1_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/Timberland_136x136_1_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="logosImg"
                src="https://thesneakershopgp.com/media/catalog/category/Vans_136X136_1_.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>


        </div>
      </div>
    </>
  );
};
export default Home;
