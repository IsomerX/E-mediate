import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import LoginBox from "../../components/LoginBox";
import Navbar from "../../components/Navbar";

const Login = () => {
    return (
        <Layout>
            <Head>
                <title>E-Mediate - Login</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="h-screen grid place-items-center text-white text-5xl font-bold">
                <LoginBox />
            </div>
        </Layout>
    );
};

export default Login;
