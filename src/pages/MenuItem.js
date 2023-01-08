import updateCart from '../utils/updateCart'

const MenuItem = ({
  menu,
  cart,
  setCart,
  setToggleCartPopup
}) => (
  <div className='flex mb-4'>
    <img src={menu.image} className='object-cover w-20 h-20 rounded-lg' alt='' />
    <div className='ml-2 flex-auto'>
      {menu.name}
      <p className='text-red-500 text-sm'>฿{menu.price}</p>
    </div>
    <div className='ml-2 '>
      <button
        onClick={() => {
          setCart(updateCart({ sign: 1, cart, id: menu.id, name: menu.name, price: menu.price }))
          setToggleCartPopup(true)
        }}
        className='button bg-red-200 active:bg-red-400 px-4 py-2 rounded-lg ml-2'
      >
        เพิ่ม
      </button>
    </div>
  </div>
)

export default MenuItem