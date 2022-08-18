import React from "react";
import logo from "../assets/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <>
            <div className="footer">

                <div className="grid grid-cols-4 w-1/2">

                    <div className="col-span-2 flex flex-col items-center justify-around">

                        <div className="flex flex-col items-start">

                            <a className="m-0" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/david-lee-full-stack-dev/"><LinkedInIcon /> <span className="font-bold">D</span>avid</a>
                            <a className="m-0" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/alejo-veron-41bb62168/"><LinkedInIcon /> <span className="font-bold">A</span>lejo</a>
                            <a className="m-0" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/florencia-romano-4ba3481a0/"><LinkedInIcon /> <span className="font-bold">F</span>lor</a>
                            <a className="m-0" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/tomasaybar/"><LinkedInIcon /> <span className="font-bold">T</span>omas</a>
                            <a className="m-0" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/laura-silva-06121a238/"><LinkedInIcon /> <span className="font-bold">L</span>aura</a>
                            <a className="m-0" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/alexis-yusti-6a018423a/"><LinkedInIcon /> <span className="font-bold">A</span>lexis</a>
                            <a className="m-0" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/brayny-palomino-dev/"><LinkedInIcon /> <span className="font-bold">B</span>rayny</a>

                        </div>

                    </div>

                    <div className="col-span-2 flex justify-center items-center flex-col">

                        <div className="logo mb-2">
                            <img src={logo} alt="logo" style={{ "height": "4rem", backgroundColor: "white" }} />
                        </div>

                        <div className="icons mb-2">
                            <InstagramIcon />
                            <TwitterIcon />
                            <FacebookIcon />
                        </div>

                    </div>

                </div>

                {/* COPY */}
                <div className="p">
                    <p>© 2022 MindHub - DAFTLAB. All rights reserved.</p>
                </div>

            </div>
        </>
    )
}
export default Footer;