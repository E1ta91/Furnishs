import { BedDouble, Handshake } from "lucide-react";

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
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icons: <BedDouble/>,
            bgColor: "#DCEBDD",
            iconBg: "#CB9696"
        },
        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            // Icons: <Handshake/>,
            bgColor: "#F5EFD8",
            iconBg: "#CB9696"
        },
        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            // Icons: <Handshake/>,
            bgColor: "#F4E6D8",
            iconBg: "#CB9696"
        },
    ]
};

export default K;