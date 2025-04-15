import React from 'react'
import {logoIconsList} from "../constants/index.js";
import TitleHeader from "./TitleHeader.jsx";

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    );
};

export const LogoSection = () => {
    return (
        <div id="skills" className="w-full h-full md:px-20 px-5">
            <TitleHeader
                title="My Career TechStack"
                // sub="💼 My Career TechStack"
            />

            <div className="md:my-20 my-10 relative">
                <div className="gradient-edge"/>
                <div className="gradient-edge"/>
                <div className="marquee h-52">
                    <div className="marquee-box md:gap-12 gap-5">

                        {logoIconsList.map((icon, index) => (
                            <LogoIcon key={index} icon={icon}/>
                        ))}

                        {logoIconsList.map((icon, index) => (
                            <LogoIcon key={index} icon={icon}/>
                        ))}
                    </div>

                </div>

            </div>
            </div>
            )
            }
