// src/components/layout/Navbar.tsx
import React from 'react';
import Logo from './Logo';
import SearchInput from './SearchInput';
import MobileMenu from './MobileMenu';
import DesktopBanner from './DesktopBanner';
import PostalButton from './PostalButton';
import NavLinks from './NavLinks';
import UserActions from './UserActions';

interface NavbarProps {
  onMenuClick?: () => void;
  onCartClick?: () => void;
}

export default function Navbar({ onMenuClick, onCartClick }: NavbarProps): JSX.Element {
  return (
    <header className="w-full bg-[#FFF159] lg:bg-[#FFE600] shadow-sm">
      <div className="max-w-screen-xl mx-auto px-2 pt-2 pb-3 h-[90px] lg:h-[100px]">
        <div
          className="
            grid
            grid-cols-[auto_1fr_auto]
            grid-rows-2
            gap-y-1
            mx-4
            items-center
            gap-x-4
            lg:mx-10
            lg:grid-cols-[162px_minmax(340px,700px)_minmax(300px,350px)]
            lg:grid-rows-[40px_28px]
            lg:gap-x-5 lg:gap-y-3
          "
        >
          <Logo />

          <SearchInput />

          <MobileMenu onMenuClick={onMenuClick} onCartClick={onCartClick} />
          <DesktopBanner />

          <PostalButton />

          <NavLinks />

          <UserActions onCartClick={onCartClick} />
        </div>
      </div>
    </header>
  );
}
