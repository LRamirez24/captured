import React from "react";
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim, lineAnim, fade} from '../animation';
import styled from "styled-components";
import ScrollTop from "../components/scrollTop";

const ContactUs = () => {
    return(
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: "#1b1b1b" }} >
            <Title>
                <Hide>
                    <p>Don't Be Shy</p>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <motion.h2 variants={titleAnim}>Let's Tell Your <br /> Story Together.</motion.h2>
                </Hide>
            </Title>
            <Pattern>
            <motion.svg variants={lineAnim} width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 170.135L1.86421 169.885C6.25057 202.221 20.8666 231.548 44.1143 254.685C80.1295 290.529 131.387 305.481 181.22 294.661L181.627 296.501C131.168 307.461 79.2679 292.322 42.7984 256.026C19.2373 232.577 4.44903 202.876 0 170.135Z" fill="#23D997"/>
<path d="M42.7829 43.8618C101.545 -14.6206 197.167 -14.6206 255.929 43.8618C314.691 102.344 314.691 197.512 255.929 255.995L254.597 254.67C312.623 196.92 312.623 102.937 254.597 45.187C196.572 -12.5626 102.14 -12.5626 44.1145 45.187C26.5847 62.6335 13.6136 84.2896 6.64236 107.801L4.84082 107.271C11.906 83.4632 25.0181 61.5421 42.7829 43.8618Z" fill="#23D997"/>
<path d="M117.758 18.0896C164.16 7.11343 211.971 20.5842 245.652 54.1051L242.989 56.7556C210.248 24.1701 163.752 11.0736 118.635 21.7379L117.758 18.0896Z" fill="#23D997"/>
<path d="M53.0751 54.1052C63.6337 43.5968 75.6962 34.9593 88.9649 28.4266L90.6412 31.7943C77.7484 38.1399 66.0148 46.5435 55.7539 56.7557C7.51951 104.761 3.61878 180.565 46.6678 233.091L43.754 235.461C-0.548266 181.454 3.46213 103.482 53.0751 54.1052Z" fill="#23D997"/>
<path d="M71.8894 256.821C97.0953 274.969 128.16 283.669 159.366 281.33C190.901 278.961 220.587 265.396 242.973 243.117C261.036 225.14 273.427 202.548 278.769 177.79C285.004 148.946 281.307 118.512 268.352 92.1008L271.735 90.4481C285.067 117.608 288.873 148.899 282.451 178.569C276.952 204.03 264.216 227.26 245.621 245.752C222.592 268.67 192.06 282.624 159.617 285.057C127.534 287.458 95.5757 278.508 69.6492 259.846L71.8894 256.821Z" fill="#23D997"/>
<path d="M79.8162 80.7192C118.166 42.5521 180.562 42.5521 218.911 80.7192C234.436 96.17 244.117 115.753 246.905 137.362L243.161 137.845C240.467 117.062 231.162 98.2437 216.232 83.3853C179.355 46.6838 119.356 46.6838 82.4794 83.3853C75.9312 89.9024 70.4169 97.277 66.0618 105.306L62.7407 103.529C67.2681 95.1566 73.0017 87.5013 79.8162 80.7192Z" fill="#23D997"/>
<path d="M51.1012 145.641L54.8766 145.797C53.7174 172.114 63.7903 197.871 82.4794 216.487C95.6542 229.599 112.213 238.47 130.385 242.15L129.633 245.829C110.74 241.994 93.508 232.764 79.8162 219.137C60.3596 199.789 49.895 173.003 51.1012 145.641Z" fill="#23D997"/>
<path d="M160.102 243.46C181.533 241.027 200.942 231.704 216.232 216.503C229.626 203.172 238.618 186.365 242.206 167.921L245.903 168.638C242.174 187.815 232.838 205.293 218.895 219.153C202.995 234.978 182.817 244.66 160.525 247.186L160.102 243.46Z" fill="#23D997"/>
<path d="M91.7534 92.6153C101.121 83.2918 112.714 76.3226 125.278 72.4716L125.826 74.2645C113.544 78.0376 102.218 84.8353 93.0693 93.9405C67.8164 119.073 62.4901 158.176 80.1139 189.031L78.469 189.951C60.4536 158.363 65.9052 118.341 91.7534 92.6153Z" fill="#23D997"/>
<path d="M149.34 68.8699C171.1 68.8699 191.559 77.3047 206.958 92.6152C238.712 124.218 238.712 175.654 206.958 207.257C175.204 238.86 123.523 238.86 91.769 207.257L93.1006 205.932C124.118 236.802 174.609 236.802 205.627 205.932C236.644 175.061 236.644 124.811 205.627 93.9405C190.588 78.973 170.614 70.7408 149.356 70.7408V68.8699H149.34Z" fill="#23D997"/>
<path d="M113.528 114.287C133.283 94.6265 165.428 94.6265 185.183 114.287C204.937 133.947 204.937 165.94 185.183 185.601L182.52 182.95C200.801 164.755 200.801 135.148 182.52 116.937C164.238 98.7425 134.489 98.7425 116.207 116.937C97.9254 135.132 97.9254 164.74 116.207 182.935L113.544 185.585C93.7741 165.925 93.7741 133.947 113.528 114.287Z" fill="#23D997"/>
<path d="M131.544 132.217C141.366 122.441 157.345 122.441 167.152 132.217L165.82 133.542C156.734 124.499 141.961 124.499 132.875 133.542C123.789 142.585 123.789 157.287 132.875 166.33C141.961 175.373 156.734 175.373 165.82 166.33C170.864 161.31 173.293 154.387 172.494 147.325L174.373 147.106C175.235 154.73 172.603 162.23 167.152 167.655C157.329 177.431 141.35 177.431 131.544 167.655C121.737 157.88 121.737 141.992 131.544 132.217Z" fill="#23D997"/>
</motion.svg>
            </Pattern>

            <Hide>
            <Location variants={fade}>
                <h3>Location</h3>
                <p>4522 West 28th Street <br /> Suite 244 <br /> Los Angeles, CA 90022 </p>
                </Location>
                </Hide>

                <Hide>
                    <Location2>
                <div className="business-section">
                    <h3>New Business</h3>
                    <p>Floyd Robertson<br /> +1 212 563 3939<br /> floyd32@gmail.com</p>
                </div>
                <div>
                    <h3>GENERAL INQUIRIES</h3>
                    <p>+1 212 563 3939 <br /> contactLuis@gmail.com</p>
                </div>
                </Location2>
                </Hide>
            

            {/* <div>
                <Hide>
            <Social variants={titleAnim}>
            <Circle />
        <h2>Send Us A Message</h2>
            </Social>
            </Hide>
            <Hide>
            <Social variants={titleAnim}>
            <Circle />
        <h2>Send an email.</h2>
            </Social>
            </Hide>
            <Hide>
            <Social variants={titleAnim}>
            <Circle />
        <h2>Social Media</h2>
            </Social>
            </Hide>
            </div> */}

            <ScrollTop />
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #fff;
    min-height: 90vh;
    @media (max-width: 1300px) {
        padding: 2rem;
        font-size: 1rem;
    }
`;  

const Title = styled.div`
    margin-bottom: 4rem;
    color: #fff;
    position: relative;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    p{
        font-size: 2rem;
        color: #23d997;
        padding: 1rem 0rem;
    }
    h2{
        font-size: 7rem;
        padding-top: 2rem;
        font-weight: bolder;
    }
    @media (max-width: 1300px) {
     margin-top: 5rem;
    }
`;

const Pattern = styled.div`
    position: absolute;
    right: 10%;
    top: 33%;
    @media (max-width: 1300px) {
    top: 55%;
    }
    @media (max-width: 950px) {
    display: none;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;



const Location = styled(motion.div)`
padding: 4rem 0rem;
min-height: 30vh;
h3{
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}
p{
    font-size: 2.4rem;
    color: #fff;
    padding: 1rem 0rem;
    font-weight: lighter;
}
`;

const Location2 = styled(motion.div)`
padding: 4rem 0rem;
display: flex;
justify-content: space-around;
min-height: 40vh;
h3{
    font-size: 1.1rem;
    letter-spacing: 1px;
    
    text-transform: uppercase;
}
p{
    font-size: 2.4rem;
    color: #fff;
    padding: 1rem 0rem;
    font-weight: lighter;
    
}
@media (max-width: 600px) {
        flex-direction: column;
        .business-section{
            padding-bottom: 8rem;
        }
    }
`;

// const Social = styled(motion.div)`
//     display: flex;
//     align-items: center;
//     h2{
//         margin: 2rem;
//     }
// `;


export default ContactUs;