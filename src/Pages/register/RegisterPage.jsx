import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Key, Person, Eyeglasses } from 'react-bootstrap-icons';
import "./RegisterPage.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const RegisterPage = () =>{
    const {register, watch, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onBlur"});
    const [captchaImg, setCaptcha] = useState(null);

    useEffect(() => {
        fetch("https://localhost:7091/Helper/Captcha?location=register", 
            {
                method: "GET",
                mode: 'cors',
                credentials: "include"
            })
        .then((respone) => respone.json())
        .then(respone => setCaptcha(respone))
    }, [])


    const test = (event) => {
        
        if(isValid){
            fetch("https://localhost:7091/User/CreateUser",
            {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    Login: event.login,
                    Password: event.password
                })
            }).then((respone) => console.log(respone))
        }
    }

    return <Container>
            <Row className="justify-content-center">
                <Col xs={4} className='gy-5 border block p-4 text-center'>
                    <div className="mb-5">
                        <h1>НОВЫЙ ПОЛЬЗОВАТЕЛЬ</h1>
                    </div>
                    <Form onSubmit={handleSubmit(test)}>

                        <InputGroup>
                            <Person className="border icon p-1"/>
                            <FormControl
                            placeholder="Введите логин" 
                            type="text"
                            {...register("login", 
                                { 
                                    required: {value: true, message: "Поле обязательно к заполнению."}, 
                                    minLength: {value: 5, message: "Минимальная длина 5 символов."} 
                                }
                            )}/>                     
                        </InputGroup>
                        <div className="mb-4"> {errors?.login && <p>{errors?.login?.message || "Произошла непредвиденная ошибка"}</p>} </div> 

                        <InputGroup>
                            <Key className="border icon p-1"/>
                            <FormControl
                            placeholder="Введите пароль"
                            type="password"
                            {...register("password",
                                {
                                    required: {value: true, message: "Поле обязательно к заполнению."},
                                    minLength: {value: 8, message: "Пароль должен содержать минимум 8 символов."},
                                    maxLength: {value: 16, message: "Пароль не может содержать больше 16 символов."},
                                    pattern: {
                                        value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g, 
                                        message: "Пароль должен содержать хотя бы один символ, заглавную букву и состоять из латинских символов."
                                    }
                                }
                            )}/>
                        </InputGroup>
                        <div className="mb-2">{errors?.password && <p>{errors?.password?.message || "Произошла непредвиденная ошибка"}</p>}</div>
                        
                        <InputGroup>
                            <Key className="border icon p-1"/>
                            <FormControl
                            placeholder="Повторите пароль"
                            type="password"
                            {...register("repeatPassword", 
                                {
                                    validate: (value) => value === watch("password") || "Введенные пароли не совпадают."
                                }
                            )}/>
                        </InputGroup>
                        <div className="mb-4">{errors?.repeatPassword && <p>{errors?.repeatPassword?.message || "Произошла непредвиденная ошибка"}</p>}</div>
                        
                        <InputGroup>
                            <Eyeglasses className="border icon p-1"/>
                            <FormControl
                            placeholder="Секретное слово"
                            type="text"
                            {...register("secretword",
                                {
                                    required: {value: true, message: "Поле обязательно к заполнению."},
                                    minLength: {value: 5, message: "Секретное слово должно содержать минимум 5 символов."}
                                }
                            )}/>
                        </InputGroup>
                        <div className="mb-4">{errors?.secretword && <p>{errors?.secretword?.message || "Произошла непредвиденная ошибка"}</p>}</div>

                        <InputGroup>
                            {(captchaImg != null) ? <img src={"data:image/png;base64," + captchaImg} alt="Код"/> : <></>}
                        </InputGroup>

                        <InputGroup>
                            <FormControl
                            placeholder="Введите код с картинки"
                            type="text"
                            {...register("captcha",
                                {
                                    required: {value: true, message: "Введите каптчу."},
                                    minLength: 6,
                                    validate: (value) => {
                                        fetch("https://localhost:7091/Helper/CheckCaptcha?location=register&code=" + value, {credentials: "same-origin"})
                                        .then(respone => respone.json())
                                        .then(respone => console.log(respone))
                                    }
                                }
                            )}/>
                        </InputGroup>
                        <div className="mb-4">{errors?.captcha && <p>{errors?.captcha?.message || "Произошла непредвиденная ошибка"}</p>}</div>

                        <Button type="submit" variant="dark" className="me-2 full-width mb-2 submit-button" disabled={!isValid}>Зарегистрироваться</Button>
                    </Form>
                    <Link to="/login" className="btn btn-secondary full-width mb-2">Есть аккаунт</Link>
                    <Link to="/passwordrecovery" className="btn btn-link">Восстановить пароль</Link>
                </Col>
            </Row>
    </Container>
}