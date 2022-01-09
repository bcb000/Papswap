import React, { useEffect } from 'react'
import { Button } from 'reactstrap';
import "../Styles/styles.css"
import Aos from 'aos';
import "aos/dist/aos.css"
import screenshotHome from '../assets/Screenshot-home.png'
import screenshotA from "../assets/ScreenshotA.png"
import PolicyMaker from "../assets/policyMaker.svg"


export const Landing = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function Banner({ written }) {
    return (
      <>
        <div
          data-aos="fade-up"
          className='col col-5 col-lg-3 my-2 mx-2
            card fs-5'>
          {written}
        </div>
      </>
    )
  };

  return (
    <>

      {/** -----first layer-------*/}
      <div className='row m-2 mx-md-5 my-md-4 py-5' style={{
        borderRadius: "40px",
        background: "linear-gradient(104deg, rgba(140,247,149,1) 0%, rgba(141,240,220,0.981127485173757) 25%, rgba(144,167,240,1) 50%, rgba(247,170,255,1) 75%, rgba(165,120,250,1) 100%)",
        backgroundSize: "400% 400%",
        animation: "gradient 40s ease infinite",
        margin: "auto",
        minHeight: "85vh"
      }}>
        <div className='col col-10 col-md-6 my-auto px-3'>
          <div className='mx-4 mx-md-5'>
            <div className='display-2 fw-bold accent-color lh-1'>
              Instant paptokens with just a swap
            </div>
            <div className="fs-4 accent-color my-2 my-md-3">
              No clueless redemption codes or wallets
            </div>
            <Button href="https://play.google.com/store/apps/details?id=in.papswap.android.app" target="_blank" className='accent-color-background px-4 py-3 button'><i class="fab fa-google-play"></i> Get App</Button>
          </div>
        </div>

        <div className='d-none d-md-block col-md-6'
          style={{
            position: "relative"
          }}>

          <div
            data-aos="fade-down"
            className="mt-5"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "30%",
              background: "linear-gradient(45deg,#F13030,#FF9F1C)",
              position: "absolute",
              top: "40px"
            }}>
          </div>

          <div
            data-aos="fade-down"
            data-aos-duration="500"
            className="mx-3"
            style={{
              height: "250px",
              width: "250px",
              borderRadius: "50%",
              background: "linear-gradient(303deg, rgba(237,184,159,0.981127485173757) 0%, rgba(230,0,255,1) 100%)",
              position: "absolute",
              top: "20px",
              right: "80px"
            }} />


          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "40%",
              background: "linear-gradient(90deg, rgba(237,229,159,0.981127485173757) 0%, rgba(255,145,0,1) 100%)",
              position: "absolute",
              top: "300px",
              left: "100px"
            }}>
          </div>

          <div
            data-aos="fade-up"
            className="mx-3" style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              background: "linear-gradient(45deg,#F15050,#EEBF8C)",
              position: "absolute",
              top: "300px",
              right: "40px"
            }} />

        </div>

      </div>

      {/** -----Second layer-------*/}

      <div className="row mx-2 mx-md-5 my-5 py-5" style={{
        borderRadius: "40px",
        background: "linear-gradient(to right bottom, #ca7ca9, #c383b9, #b88cc8, #ab94d4, #9c9dde, #8da9ea, #7bb4f3, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
        backgroundSize: "400% 400%",
        animation: "gradient 30s ease infinite",
        margin: "auto"
      }}>
        <div className="col col-12 px-lg-4 col-md-6 col-xl-4">
          <img
            src={screenshotHome}
            data-aos="fade-down"
            className="mx-2 mx-sm-3" style={{
              height: "255px",
              marginTop: "50px",
              padding: "0"
            }} />
          <img
            src={screenshotA}
            data-aos="fade-up"
            className="mx-3" style={{
              height: "255px",
              marginTop: "-50px",
              padding: "0"
            }} />
        </div>
        <div className="col col-12 col-md-5 col-xl-7 px-1 py-3">
          <div data-aos="fade-left"
            className='px-3'>
            <div className='display-3 display-lg-2 fw-bold accent-color'>
              Rethink policies and commenting.
            </div>
            <div className="fs-5 fs-lg-3 accent-color my-3">
              papswap your lifestyle app for movie tickets, offers, and knowledge which gives you to be actively involved in policymaking.
            </div>
          </div>
        </div>
      </div>

      {/** -----Third layer-------*/}

      <div className="row mx-2 mx-md-5 my-5 py-5" style={{
        borderRadius: "40px",
        background: "linear-gradient(66deg, rgba(157,237,233,1) 0%, rgba(242,202,243,1) 100%)",
        backgroundSize: "400% 400%",
        animation: "gradient 40s ease infinite",
        margin: "auto"
      }}>
        <div
          data-aos="zoom-out-up"
          className="col col-12 my-5 py-3">
          <div className='row'>
            <div className='d-flex justify-content-center offset-1 offset-lg-3 col col-6 display-4 display-lg-2 fw-bold accent-color'>
              Why papSwap?
            </div>
          </div>
          <div className='row'>
            <div className='offset-1 col col-10 '>
              <div className="d-flex justify-content-center fs-4 fs-10 accent-color">
                Our breakthrough tech allows you to Earn Digital Tokens(PAPs) hassle-free by just sharing content on our network without any complex mining algorithm and proof of work, as crypto-mining does. To earn at your speed and comfort, sign up now.
                We at PapSwap makes earning easy.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** -----forth layer-------*/}

      <div className="row m-md-5 p-md-4">
        <div className="col col-12 col-lg-4 px-4 px-md-5">
          <div data-aos="fade-right">
            <div className='display-1 fw-bold mx-4'>
              Policies over Politics
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-8">
          <div className='row m-3'>
            <Banner written={"Swap n Earn"} />
            <Banner written={"Rethink and comment on Policies"} />
            <Banner written={"Ministries on one tap"} />
            <Banner written={"Harness Citizens Charter"} />
          </div>
        </div>
      </div>
      {/** -----fifth layer-------*/}

      <div className="row mx-2 mx-md-5 my-5 py-5" style={{
        borderRadius: "40px",
        background: "linear-gradient(66deg, rgba(141,151,240,1) 0%, rgba(177,249,255,1) 100%)",
        backgroundSize: "400% 400%",
        animation: "gradient 45s ease infinite",
        margin: "auto"
      }}>
        <div className="col col-12 col-lg-8 p-4">
          <div data-aos="zoom-in-right">
            <div className='display-3 display-lg-2 fw-bold accent-color d-flex justify-content-center'>
              Are you a policymaker?
            </div>
            <div className="fs-5 fs-lg-3 accent-color my-3 d-flex justify-content-center">
              Harness the power of citizens charter.
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-4">
          <img
            src={PolicyMaker}
            data-aos="flip-left"
            className="mx-3" style={{
              height: "250px"
            }} />
        </div>
      </div>
    </>
  )
}
