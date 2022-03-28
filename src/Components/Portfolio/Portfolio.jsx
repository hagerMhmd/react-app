import React, { useEffect, useState } from 'react'
import Modal from 'react-modal/lib/components/Modal'
import './Portfolio.css'
import cabin from '../imgs/cabin.png'
import cake from '../imgs/cake.png'
import circus from '../imgs/circus.png'
import game from '../imgs/game.png'
import safe from '../imgs/safe.png'
import submarine from '../imgs/submarine.png'
import Scrollbars from 'react-custom-scrollbars-2'
Modal.setAppElement('#root');
// 3shan atgnb Error :  “react-modal: App element is not defined”
//  ariaHideApp={false} ==> prop to your modal to avoid getting a warning that your app element is not specified.
//  Modal.setAppElement ==>  will not embed react-modal into your react app as a descendent component. It will just help boost up the app accessiblity.


export default function Portfolio() {
  const [modalIsOpen, setModalOpen] = React.useState(false)
  const myImgs = [
    { img: cabin, title: 'LOG CABIN' },
    { img: cake, title: 'TASTY CAKE' },
    { img: circus, title: 'CIRCUS TENT' },
    { img: game, title: 'CONTROLLER' },
    { img: safe, title: 'LOCKED SAFE' },
    { img: submarine, title: 'SUBMARINE' }
  ]
  let [index, setIndex] = useState(0)
  useEffect(() => {
    if (index === 0) {
      return
    }
  }, [index])
  return <>
    <div className='App'>
      <section id='portfolio' className='position-relative py-5'>
        <div className="container" >
          <div className="portolio-comtainer d-flex flex-column justify-content-center align-items-center">
            <h1 className='mt-5'>PORTFOLIO</h1>
            <div className="icon-container mb-4">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="row">
              {myImgs.map((img, index) =>
                <div key={index} className="col-md-4 mb-4">
                  <div className="img-container">
                    <div className="img-layer" onClick={() => setIndex(index)} >
                      <i className="fa-solid fa-plus" onClick={() => setModalOpen(true)}></i>
                    </div>
                    <img className='w-100' src={img.img} alt="" />
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      <Modal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={() => setModalOpen(false)} >
        <Scrollbars>
          <div id='lightBox' className="container layer bg-white pt-3 mt-1 d-flex flex-column justify-content-center align-items-center">
            <i className="fa-solid fa-xmark" onClick={() => setModalOpen(false)}></i>
            <h1 className='text-center'>{myImgs[index].title}</h1>
            <div className="icon-container mb-4">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="row">
                <div className="col-md-12 ">
                <img src={myImgs[index].img} className='w-100  rounded-3' alt="" />
                  </div>
            </div>
            <p className='lead text-center w-75 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <button className='btn rounded-3 mb-5' onClick={() => setModalOpen(false)}>X Close Window</button>
          </div>
        </Scrollbars>
      </Modal>
    </div>
  </>
}