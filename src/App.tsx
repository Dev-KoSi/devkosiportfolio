// import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <div className="about-page">
            <Header/>

              <About/>
          </div>
        </div>
      )
    },
    {
      path: '/experience',
      element: (
        <div>
          <Header/>

          <div className="experience-page">
            <Experience/>
          </div>
        </div>
      )
    },
    {
      path: '/projects',
      element: (
        <div>
          <Header/>

          <div className="projects-page">
            <Projects/>
          </div>
        </div>
      )
    },
    {
      path: '/contact',
      element: (
        <div>
          <Header/>

          <div className="contact-page">
            <Contact/>
          </div>
        </div>
      )
    }
  ])

  return (
    <div className="portfolio-page">
      <RouterProvider router={router}/>
    </div>
  )
}