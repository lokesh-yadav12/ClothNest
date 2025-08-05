import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>jow hterioh puig ruiygsuifgsui sgsgigfuhshdsif digi gf gueg hisdg gig s ofyowe hoyr wfgiti gitriwywo ruiwetrwi it hs h</p>
            <p>jsdfh hisohf g gfig ssdigff fig njfsh uiurhuirh huhruwhuirhuirh  hruo rhifg fsdif gfgyufg fgfyg fyugfyu gfygf fgfg g78eiu rwirywer ywuiagfu gsdfysdu ifysduk gfgfsdyutf uifgsduifguifts fgyj</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>jow hterioh puig ruiygsuifgsui sgsgigfuhshdsi uiawea aegeyg gg igaeg 8 rta78ye s ofyowe hoyr wfgiti gitriwywo ruiwetrwi it hs h jow hterioh puig ruiygsuifgsui sgsgigfuhshdsif digi gf gueg hisdg gig s ofyowe hoyr wfgiti gitriwywo ruiwetrwi it hs h </p>
          </div>
      </div>

      <div className='text-4xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row tet-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>jow hterio sgsgigfuhshdsif digi gf gueg hisdg gig s ofyowe hoyr wfgiti gitriwywo ruiwetrwi it hs h jow hterioh igi gf gueg hisdg gig s ofyowe</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>jow hterioh puig ruiygsuifgsui sgsgigfuhshdsif digi gf gueg hisdg gig s ofyowe hoyr gfuhshdsif digi gf gueg hisdg gig s ofyowe</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>jow hterioh puig ruiygsuifgsui sgsgigfuhshdsif digi gf gueg hiso ruiwetrwi it hs h jow uifgsui sgsgigfuhshdg gig s ofyowe</p>
          </div>
      </div>
      <NewsletterBox/>

    </div>
  )
}

export default About