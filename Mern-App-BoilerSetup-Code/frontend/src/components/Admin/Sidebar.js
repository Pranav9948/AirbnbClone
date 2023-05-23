
import {Frame, Navigation} from '@shopify/polaris';
import {HomeMinor, OrdersMinor, ProductsMinor} from '@shopify/polaris-icons';
import React from 'react';


const Sidebar = () => {
  return (
    <div className="-mt-48">
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
            url: '/view-bookings',
            label: 'View-bookings',
            icon: HomeMinor,
          },
          {
            url: 'add-rooms',
            excludePaths: ['#'],
            label: 'Add Rooms',
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
        style={{ marginBottom: '20px' }}
      />
    </Navigation>
  </Frame>
</div>

  )
}

export default Sidebar

