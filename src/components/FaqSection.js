import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
    const [element, controls] = useScroll();

    return(
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout> 
            <Toggle title='How Do I Start?'>
           
                
                <div className="answer">
                    <p>Contact us through email lrxd2025@gmail.com</p>
                    <p>Signup for the weekly newsletter for deals.</p>
                </div>
                
           
            </Toggle>

          <Toggle title= "Daily Schedule">
           
               
                <div className="answer">
                    <p>Monday-Friday</p>
                    <p>
We are available for meetings every week.
</p>
                </div>
               
            
            </Toggle>

            <Toggle title="Different Payment Methods">
           
               
                <div className="answer">
                    <p>We take debit and credit cards.</p>
                    <p>Have just started accepting crypto.</p>
                </div>
              
            
            </Toggle>

            <Toggle title="What Products do you offer.">
            
             
                <div className="answer">
                    <p>We offer high-quality video shoots and set designs.</p>
                    <p>Contact us to work on a project together or if you have any questions.</p>
                </div>
              
           
            </Toggle>
            </AnimateSharedLayout>

        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: bolder;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;