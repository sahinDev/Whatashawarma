import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Menu = () => {
  const [category, setCategory] = useState('All')

  return <ExploreMenu category={category} setCategory={setCategory} />
}

export default Menu
