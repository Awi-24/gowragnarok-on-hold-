import React from 'react'
import GowTitle from '../../assets/gowtitle.png'
import './title.scss'
function Title() {
  return (
    <div className='title-container'>
        <div className='title'>
          <img src={GowTitle} alt='G' />   
        </div>
        <div className='text'>
            <p>

            </p>
        </div>
    </div>
  )
}

export default Title