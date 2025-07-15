import React, { FC, PropsWithChildren } from 'react'

type Props = {
    onClick?: () => void
}

const MenuLink: FC<PropsWithChildren<Props>> = ({children, onClick}) => {
  return (
    <div onClick={() => {onClick?.()}} className='px-5 py-4 cursor-ponter hover:bg-gray-100 transition'>
      {children}
    </div>
  )
}

export default MenuLink
