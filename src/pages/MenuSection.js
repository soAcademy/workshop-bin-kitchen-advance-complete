import MenuItem from './MenuItem'

const MenuSection = ({
  category,
  menus,
  cart,
  setCart,
  setToggleCartPopup
}) => (
  <div>
    <h4 className='mt-4 mb-2 font-bold'>{category}</h4>
    {
      menus.map((menu) => (
        <MenuItem
          key={menu.name}
          menu={menu}
          cart={cart}
          setCart={setCart}
          setToggleCartPopup={setToggleCartPopup}
        />))
    }
  </div>
)

export default MenuSection