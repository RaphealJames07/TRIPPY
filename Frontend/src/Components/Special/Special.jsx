import './Special.css'
import Indonesia from '../../assets/special_1 1.png'
import Thailand from '../../assets/special_3 1.png'
import Bali from '../../assets/special_4 1.png'
import France from '../../assets/special_5 1.png'
import India from '../../assets/images 2.png'
import Greece from '../../assets/top_4.jpg.webp'

const Special = () => {
  return (
    <>
      <div className="SpecialBody">
                <div className="SpecialBodyWrap">
                    <div className="SpecialBodyText">
                        <h1>Special Offers</h1>
                        <p>Some special offers that are handpicked for you</p>
                    </div>
                    <div className="SpecialImgDiv">
                        <div className="SpecialImgDivItem1">
                            <img src={France} alt="" />
                        </div>
                        <div className="SpecialImgDivItem1">
                            <img src={India} alt="" />
                        </div>
                        <div className="SpecialImgDivItem1">
                            <img src={Bali} alt="" />
                        </div>
                        <div className="SpecialImgDivItem1">
                            <img src={Thailand} alt="" />
                        </div>
                       <div className="SpecialImgDivItem1">
                            <img src={Indonesia} alt="" />
                        </div>
                        <div className="SpecialImgDivItem1">
                            <img src={Greece} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Special