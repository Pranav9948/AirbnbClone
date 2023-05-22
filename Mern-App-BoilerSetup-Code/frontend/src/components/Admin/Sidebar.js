
import {Frame, Navigation} from '@shopify/polaris';
import {HomeMinor, OrdersMinor, ProductsMinor} from '@shopify/polaris-icons';
import React from 'react';


const Sidebar = () => {
  return (
    <div className='-mt-48'>
        <Frame>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: '/admin',
              label: 'Home',
              icon: HomeMinor,
            },
            {
                url: '/view-admin',
                label: 'View',
                icon: HomeMinor,
              },
            {
              url: 'add-product',
              excludePaths: ['#'],
              label: 'Add Product',
              icon: OrdersMinor,
              badge: '15',
            },

            {
              url: 'add-store',
              excludePaths: ['#'],
              label: 'Add Store',
              icon: OrdersMinor,
              badge: '3',
            },
           
          ]}
        />
      </Navigation>
    </Frame>
    </div>
  )
}

export default Sidebar

