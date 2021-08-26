import React from 'react'
import { Menu } from 'semantic-ui-react'
export default function Categories() {
  function returnHome(){
    window.location.replace('/products')
  }
    return (
        <div>
           <Menu pointing vertical>
        <Menu.Item
          name='home'
          onClick={returnHome}
        />
        <Menu.Item
          name='messages'
        />
        <Menu.Item
          name='friends'
        />
      </Menu>
        </div>
    )
}
