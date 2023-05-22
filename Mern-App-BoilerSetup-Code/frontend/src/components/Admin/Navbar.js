import {TopBar, ActionList, Icon, Frame, Text} from '@shopify/polaris';
import {ArrowLeftMinor, QuestionMarkMajor} from '@shopify/polaris-icons';
import {useState, useCallback} from 'react';
import React from 'react';





const Navbar = () => {

    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const toggleIsUserMenuOpen = useCallback(
        () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
        [],
      );
    
      const toggleIsSecondaryMenuOpen = useCallback(
        () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
        [],
      );
    
      const handleSearchResultsDismiss = useCallback(() => {
        setIsSearchActive(false);
        setSearchValue('');
      }, []);
    
      const handleSearchChange = useCallback((value: string) => {
        setSearchValue(value);
        setIsSearchActive(value.length > 0);
      }, []);
    
      const handleNavigationToggle = useCallback(() => {
        console.log('toggle navigation visibility');
      }, []);
    
      const logo = {
        width: 120,
        topBarSource:'https://camo.githubusercontent.com/85cf7e1a8b85221e81ba91cbce29c917b91a7390bb3ca06aa31cfd1eadd7fe60/68747470733a2f2f7777772e337269746563686e6f6c6f676965732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f31312f4d45524e2d537461636b2d547261696e696e672d696e2d50756e652d65313537353032323432373234342e706e67',
          url: '#',
        accessibilityLabel: 'Jaded Pixel',
      };
    
      const userMenuMarkup = (
        <TopBar.UserMenu
          actions={[
            {
              items: [{content: 'Back to Shopify', icon: ArrowLeftMinor}],
            },
            {
              items: [{content: 'Community forums'}],
            },
          ]}
          name="Admin"
          detail="admin"
          initials="A"
          open={isUserMenuOpen}
          onToggle={toggleIsUserMenuOpen}
        />
      );
    
      const searchResultsMarkup = (
        <ActionList
          items={[{content: 'Shopify help center'}, {content: 'Community forums'}]}
        />
      );
    
      const searchFieldMarkup = (
        <TopBar.SearchField
          onChange={handleSearchChange}
          value={searchValue}
          placeholder="Search"
          showFocusBorder
        />
      );
    
      const secondaryMenuMarkup = (
        <TopBar.Menu
          activatorContent={
            <span>
              <Icon source={QuestionMarkMajor} />
              <Text as="span" visuallyHidden>
                Secondary menu
              </Text>
            </span>
          }
          open={isSecondaryMenuOpen}
          onOpen={toggleIsSecondaryMenuOpen}
          onClose={toggleIsSecondaryMenuOpen}
          actions={[
            {
              items: [{content: 'Community forums'}],
            },
          ]}
        />
      );
    
      const topBarMarkup = (
        <TopBar
          showNavigationToggle
          userMenu={userMenuMarkup}
          secondaryMenu={secondaryMenuMarkup}
          searchResultsVisible={isSearchActive}
          searchField={searchFieldMarkup}
          searchResults={searchResultsMarkup}
          onSearchResultsDismiss={handleSearchResultsDismiss}
          onNavigationToggle={handleNavigationToggle}
        />
      );
  
  return (
   

<div style={{height: '250px'}}>
    
      <Frame topBar={topBarMarkup} logo={logo} />
      
    </div>




  )
}


export default Navbar
