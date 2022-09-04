import React from 'react'
import GowTitle from '../../assets/gowtitle.png'
import './title.scss'

function Title() {
  return (
    <div className='title-container row g-0 justify-content-center'>
        <div className='title col-10'>
          <img src={GowTitle} alt='' className='img-fluid' />   

            <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet turpis a faucibus vulputate. Etiam vel suscipit nunc, vitae lacinia justo. Sed tincidunt nulla at mauris vehicula cursus. Praesent finibus mauris turpis, a sodales velit aliquam ut. Aliquam a cursus risus. Morbi non diam libero. Donec et diam nec purus dapibus sagittis a et ante. Ut quis nibh at eros luctus congue vel id enim. Pellentesque suscipit, dui quis venenatis tincidunt, erat nunc finibus magna, nec condimentum nunc tellus et elit.
            </p>
        </div>
    </div>
  )
}

export default Title