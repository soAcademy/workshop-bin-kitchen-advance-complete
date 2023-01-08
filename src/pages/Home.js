import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Banner from '../assets/banner.jpg'
import MenuSection from './MenuSection'
import CartPopup from '../components/CartPopup'

export const Home = () => {
  const getMenuUrl = 'http://localhost:3001/get-menus'

  const [toggleCartPopup, setToggleCartPopup] = useState(false)
  const [cart, setCart] = useState([])
  const [tableId, setTableId] = useState(1)
  const [foodMenus, setFoodMenus] = useState([])
  const [foodCategories, setFoodCategories] = useState([])

  useEffect(() => {
    const fetchMenus = async () => {
      const result = await axios.post(getMenuUrl);
      setFoodMenus(result.data);
      setFoodCategories(foodCategories => [...new Set(result.data.map(item => item.category))])
    }

    fetchMenus()
  }, [])

  return (
    <main className='relative'>
      <div className='px-4'>
        <h1 className='text-3xl text-center mt-4'>ร้านอาหารครัวคุณบิน</h1>
        <p className='mt-2'>
          ร้านอาหารครัวคุณบินปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
          เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
          อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
          เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
          กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ
        </p>
        <img src={Banner} className='w-full mt-4 rounded-lg'  alt='' />
        {
          // Generate uniq category from food menus
          foodCategories.map((category) => (
            <MenuSection
              key={category}
              // Filter only match food categories to render each section
              menus={foodMenus.filter((menu) => menu.category === category)}
              category={category}
              cart={cart}
              setCart={setCart}
              setToggleCartPopup={setToggleCartPopup}
            />
          ))
        }
      </div>
      {
        toggleCartPopup &&
        <CartPopup
          cart={cart}
          setCart={setCart}
          tableId={tableId}
          setTableId={setTableId}
          toggleCartPopup={toggleCartPopup}
          setToggleCartPopup={setToggleCartPopup}
        />
      }
    </main>
  )
}