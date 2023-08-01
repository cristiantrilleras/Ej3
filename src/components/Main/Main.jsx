import React from 'react'
import { SectionImage } from '../SectionImage/SectionImage'
import { Sectiontext } from '../SectionText/Sectiontext'
import './Main.css';

export const Main = () => {
  return (
    <main className='Mainp'>
      <Sectiontext/>
      <SectionImage/>
    </main>
  )
}
