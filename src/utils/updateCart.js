const updateCart = ({ sign, cart, id, name, price }) => {
  if (cart.some((item) => item.id === id)) {
    return cart.reduce((arr, c) => {
      if (c.id === id) {
        arr.push({
          id,
          quantity: sign + c.quantity,
          name,
          price,
          totalPrice: (sign + c.quantity) * price
        })
      } else {
        arr.push(c)
      }
      return arr
    }, [])
  } else {
    return [
      ...cart,
      {
        id,
        quantity: 1,
        name,
        price,
        totalPrice: price
      },
    ]
  }
}

export default updateCart