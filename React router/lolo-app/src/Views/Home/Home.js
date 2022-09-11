import React from 'react'
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>
                Home page
            </h1>
            {/*
     When we click this button the navigate function will change the url to
     `/profile` and render the profile component
      */}
            <button onClick={() => navigate('/profile')}>Navigate to Profile </button>
        </div>
    )
}


export default Home;