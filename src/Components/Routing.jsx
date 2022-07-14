import React from "react";
import { Routes, Route } from "react-router-dom";
import { RegisterPage as Register } from "../Pages/register/RegisterPage";
import {Home } from "../Pages/home/Home";
import { LoginPage as Login } from "../Pages/login/LoginPage";
import { RecoveryPasswordPage as RecoveryPassword } from "../Pages/recoverypassword/RecoveryPasswordPage";

export const Routing = () => {

    return <Routes>
    <Route>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="passwordrecovery" element={<RecoveryPassword/>}/>                   
    </Route>
</Routes>
}