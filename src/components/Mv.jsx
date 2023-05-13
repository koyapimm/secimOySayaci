import React from 'react'
import Sayac from './Sayac'
import Adalet from '../assets/adalet.png'
import AdaletBirlik from '../assets/adaletbirlik.png'
import Akp from '../assets/akp.png'
import Anavatan from '../assets/anavatan.png'
import BuyukBirlik from '../assets/buyukbirlik.png'
import Chp from '../assets/chp.jpg'
import GencParti from '../assets/gencparti.png'
import GucBirligi from '../assets/gucbirligi.png'
import HakveOzgurlukler from '../assets/hakveozgurlukler.jpg'
import HalkinKurtulus from '../assets/halkinkurtulus.png'
import IyiParti from '../assets/iyiparti.png'
import Memleket from '../assets/memleket.png'
import Mhp from '../assets/mhp.png'
import Millet from '../assets/milletpartisi.jpg'
import MilliYol from '../assets/milliyol.jpg'
import SolParti from '../assets/solparti.png'
import Tip from '../assets/tip.jpg'
import Tkhareketi from '../assets/tkh.jpg'
import Tkp from '../assets/tkp.png'
import Vatan from '../assets/vatan.png'
import YenidenRefah from '../assets/yenidenrefah.png'
import Yenilik from '../assets/yenilik.png'
import YesilSol from '../assets/yesilsol.png'
import Zafer from '../assets/zafer.png'

const Mv = () => {
  return (
    <div className=' text-white sm:mx-2'>
        <ul className='mb-4'>
            <li className=' flex flex-row py-auto sm:py-2 border-gray-400 border-b-2'>
                <img src={Millet} alt="Millet Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Millet Partisi</span>
                <div className=' sm:mr-10 my-auto'>
                    <Sayac/>
                </div>
            </li>
            <li className=' flex flex-row py-auto sm:py-2 border-gray-400 border-b-2'>
                <img src={HakveOzgurlukler} alt="Hak ve Özgürlükler Parti" className=' w-10 sm:w-20 mx-auto pr-1 my-auto border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Hak ve Özgürlükler Partisi</span>
                <div className='sm:mr-10 py-auto'>
                    <Sayac />
                </div>
            </li>
            <div className=' border-white border-2 pl-2 mb-2'>
                <div className='flex justify-between pr-10 border-b-4'>
                    <div className=' text-lg font-bold sm:font-extrabold sm:text-2xl mt-auto mb-0 sm:border-white sm:border-t-2 px-6 py-2'>Sosyalist Güç Birliği İttifakı</div>
                    <div className=' my-auto'>
                        <Sayac />
                    </div>
                </div>
                <li className=' flex flex-row py-auto sm:py-2 border-gray-300 border-b-2'>
                    <img src={Tkp} alt="Türkiye Komünist Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Türkiye Komünist Partisi</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
                <li className=' flex flex-row py-auto sm:py-2 border-gray-300 border-b-2'>
                    <img src={Tkhareketi} alt="Türkiye Komünist Hareketi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Türkiye Komünist Hareketi</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
                <li className=' flex flex-row py-auto sm:py-2 '>
                    <img src={SolParti} alt="Sol Parti" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Sol Parti</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
            </div>
            <li className=' flex flex-row py-auto sm:py-2 border-gray-400 border-b-2'>
                <img src={GencParti} alt="Genç Parti" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Genç Parti</span>
                <div className=' sm:mr-10 my-auto'>
                    <Sayac/>
                </div>
            </li>
            <li className=' flex flex-row py-auto sm:py-2 '>
                <img src={Memleket} alt="Memleket Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Memleket Partisi</span>
                <div className=' sm:mr-10 my-auto'>
                    <Sayac/>
                </div>
            </li>
            <div className=' border-white border-2 pl-2 mt-4'>
                <div className='flex justify-between pr-10 border-b-4'>
                    <div className=' text-lg font-bold sm:font-extrabold sm:text-2xl mt-auto mb-0 sm:border-white sm:border-t-2 px-6 py-2'>Cumhur İttifakı</div>
                    <div className=' my-auto'>
                        <Sayac />
                    </div>
                </div>
                <li className=' flex flex-row py-auto sm:py-2 border-gray-300 border-b-2'>
                    <img src={BuyukBirlik} alt="Büyük Birlik Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Büyük Birlik Partisi</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
                <li className=' flex flex-row py-auto sm:py-2 border-gray-300 border-b-2'>
                    <img src={Akp} alt="AK Parti" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>AK Parti</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
                <li className=' flex flex-row py-auto sm:py-2 border-gray-300 border-b-2'>
                    <img src={YenidenRefah} alt="Yeniden Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Yeniden Refah Partisi</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
                <li className=' flex flex-row py-auto sm:py-2 '>
                    <img src={Mhp} alt="Mhp" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>MHP</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
            </div>
            <li className=' flex flex-row py-auto sm:py-2 border-gray-400 border-b-2'>
                <img src={AdaletBirlik} alt="Adalet Birlik Partisi" className=' w-10 sm:w-20 mx-auto my-auto px-1 border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Adalet Birlik Partisi</span>
                <div className=' sm:mr-10 my-auto'>
                    <Sayac/>
                </div>
            </li>
            <li className=' flex flex-row py-auto sm:py-2 border-gray-400 border-b-2'>
                <img src={Anavatan} alt="Anavatan Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Anavatan Partisi</span>
                <div className=' sm:mr-10 my-auto'>
                    <Sayac/>
                </div>
            </li>
            <li className=' flex flex-row py-auto sm:py-2 border-gray-400 border-b-2'>
                <img src={Yenilik} alt="Yenilik Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Yenilik Partisi</span>
                <div className=' sm:mr-10 my-auto'>
                    <Sayac/>
                </div>
            </li>
            <li className=' flex flex-row py-auto sm:py-2 border-gray-400 border-b-2'>
                <img src={HalkinKurtulus} alt="Halkın Kurtuluş Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Halkın Kurtuluş Partisi</span>
                <div className=' sm:mr-10 my-auto'>
                    <Sayac/>
                </div>
            </li>
            <li className=' flex flex-row py-auto sm:py-2 border-gray-400 border-b-2'>
                <img src={MilliYol} alt="Milli Yol Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Milli Yol Partisi</span>
                <div className=' sm:mr-10 my-auto'>
                    <Sayac/>
                </div>
            </li>
            <li className=' flex flex-row py-auto sm:py-2 border-gray-400 border-b-2'>
                <img src={Vatan} alt="Vatan Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Vatan Partisi</span>
                <div className=' sm:mr-10 my-auto'>
                    <Sayac/>
                </div>
            </li>
            <li className=' flex flex-row py-auto sm:py-2 '>
                <img src={GucBirligi} alt="Güç Birliği Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Güç Birliği Partisi</span>
                <div className=' sm:mr-10 my-auto'>
                    <Sayac/>
                </div>
            </li>
            <div className=' border-white border-2 pl-2 mb-4'>
                <div className='flex justify-between pr-10 border-b-4'>
                    <div className=' text-lg font-bold sm:font-extrabold sm:text-2xl mt-auto mb-0 sm:border-white sm:border-t-2 px-6 py-2'>Millet İttifakı</div>
                    <div className=' my-auto'>
                        <Sayac />
                    </div>
                </div>
                <li className=' flex flex-row py-auto sm:py-2 border-gray-300 border-b-2'>
                    <img src={Chp} alt="CHP" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>CHP</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
                <li className=' flex flex-row py-auto sm:py-2 '>
                    <img src={IyiParti} alt="İyi Parti" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>İyi Parti</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
            </div>
            <div className=' border-white border-2 pl-2'>
                <div className='flex justify-between pr-10 border-b-4'>
                    <div className=' text-lg font-bold sm:font-extrabold sm:text-2xl mt-auto mb-0 sm:border-white sm:border-t-2 px-6 py-2'>Ata İttifakı</div>
                    <div className=' my-auto'>
                        <Sayac />
                    </div>
                </div>
                
                <li className=' flex flex-row py-auto sm:py-2 border-gray-300 border-b-2'>
                    <img src={Adalet} alt="Adalet Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Adalet Partisi</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
                <li className=' flex flex-row py-auto sm:py-2 '>
                    <img src={Zafer} alt="Zafer Partisi" className=' w-10 sm:w-20 mx-auto my-auto pr-1 border-white border-r-2' />
                    <span className=' font-bold text-sm sm:text-xl my-auto sm:pl-3 w-full pl-1'>Zafer Partisi</span>
                    <div className='sm:mr-10 my-auto'>
                        <Sayac />
                    </div>
                </li>
            </div>
        </ul>
    </div>
  )
}

export default Mv