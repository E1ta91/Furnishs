import { BedDouble, Handshake, Headphones, SofaIcon } from "lucide-react";

import {  george, workImg1, workImg2, workImg3} from "../assets";

const K = {
    NAVLINKS: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "about"
        },
        {
            name: "Collection",
            path: "collection"
        },
        
        {
            name: "Contact",
            path: "contact-us"
        },
    ],
    SERVICES: [
        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icons: <Handshake/>,
            bgColor: "#F5EBEB",
            iconBg: "#CB9696"
        },
        {
            title: "Quality Furniture",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icons: <BedDouble/>,
            bgColor: "#DCEBDD",
            iconBg: "#8BBD8E"
        },
        {
            title: "Modern Design",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icons: <SofaIcon/>,
            bgColor: "#F5EFD8",
            iconBg: "#D1B54A"
        },
        {
            title: "Best Support",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icons: <Headphones />,
            bgColor: "#F4E6D8",
            iconBg: "#D29A61"
        },
    ],

     WORKS: [
        {
            img: [workImg1],
            title: 'Get A Free Quote',
            description:'Far far away, behind the word mountains, far from the countries Vokalia.',
            number:' 01'
        },
        {
            img: [workImg2],
            title: 'Get A Free Quote',
            description:'Far far away, behind the word mountains, far from the countries Vokalia.',
            number:' 02'
        },
        {
            img:[workImg3],
            title: 'Get A Free Quote',
            description:'Far far away, behind the word mountains, far from the countries Vokalia.',
            number:' 03'
        }
    ],

    CUSTOMERS: [
        {
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            img:  george ,
            name: 'Roger Scott',
            title: 'Marketing manager'
        },
        {
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            img: george,
            name: 'Roger Scott',
            title: 'Marketing manager'
        },
        {
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            img: george,
            name: 'Roger Scott',
            title: 'Marketing manager'
        }




    ]
};

export default K;