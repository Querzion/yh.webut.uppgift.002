import React from 'react'
import circle from '../assets/Logos/bx-check-circle.svg'
import pil from '../assets/Logos/pil.svg'
import imgRight from '../assets/Logos/sendmoney.svg'
import imgLeft from '../assets/Logos/sendmoney.svg'

import iconCashback from ""
import iconWallet from ""

const MakeMoney = () => {
  return (

        <section className="make-money">
            <div className="container">


                <div className="upper-part">
                    <div className="text-box">
                        <h2>Make your money <br/> transfer simple and clear</h2>
                        
                        <div className="text">
                            <img src={circle} alt="" />
                            <p>Banking transactions are free for you </p>
                        </div>
                        
                        <div className="text">
                            <img src={circle} alt="" />
                            <p>No monthly cash commission</p>
                        </div>
                        
                        <div className="text">
                            <img src={circle} alt="" />
                            <p>Manage payments and transactions online</p>
                        </div>

                        <buttton className="btn btn-primary">Learn More <img src={pil} alt="" /></buttton>
                        
                    </div>
                    <img src={imgRight} className="img-right" alt="" />
                </div>
                <div className="lower-part">
                    <img src={imgLeft} className="img-left" alt="" />

                    <div className="text-box">
                        <h2>Recieve payment from international bank details</h2>
                        <div className="bank-box">
                            <div className="sub-box">
                                <img src={iconCashback} alt="" />
                                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                            </div>
                            <div className="sub-box">
                                <img src={iconWallet} alt="" />
                                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>
                        </div>
                        <buttton className="btn btn-primary">Learn More <img src={pil} alt="" /></buttton>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default MakeMoney