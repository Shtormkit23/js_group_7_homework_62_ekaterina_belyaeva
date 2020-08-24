import React from 'react';
import Header from "../../components/Header/Header";
import NavBlock from "../../components/NavBlock/NavBlock";
import MainBlock from "../../components/MainBlock/MainBlock";
import Footer from "../../components/Footer/Footer";


const Home = () => {
    return (
        <>
            <Header/>
            <NavBlock/>
            <MainBlock/>
            <Footer/>
        </>
    );
};

export default Home;