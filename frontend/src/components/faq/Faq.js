import React from 'react'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import Question from './Question'
import {questions} from './data.js'

const Faq = () => {
  return (
    <section id='faq'>
      <div className='container faq'>
      <div className='u-title'>
          <MdOutlineLibraryBooks  color='orangered' size={30}/>
          <h2>LEARN MORE ABOUT UGPH</h2>
          <p className='u-text-small u-text-dark' >
<h4>
  This is the new Official Page of the University of Ghana Parliament House.
 Get interactive and join us let's breed great leaders for tomorrow.
  </h4>
          </p>
        </div>
        <div className='questions'>
          {
            questions.map((question)=>(

              <Question title={question.title} answer={question.answer} />
            ))
          }
        </div>
      </div>
      
    </section>
  )
}

export default Faq