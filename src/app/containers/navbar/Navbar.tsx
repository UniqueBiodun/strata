'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Get the current path
  const [activeLabel, setActiveLabel] = useState<string>('Advisory'); // Default active label
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Mobile menu state

  const goToCrunch: any = process.env.NEXT_PUBLIC_GO_TO_CRUNCH; // the go to crunch variable

  useEffect(() => {
    // Map of paths to labels
    const pathToLabelMap: Record<string, string> = {
      '/': 'Advisory',
      '/technology': 'Technology',
      '/papers': 'Papers',
      '/about': 'About',
      '/crunch': 'Crunch',
      '/contact': 'Contact',
      '/legal': 'Legal',
      '/security': 'Security',
    };

    // Update the active label
    const currentLabel = pathToLabelMap[pathname] || 'Advisory';
    setActiveLabel(currentLabel);
  }, [pathname]);

  // Function to check if a route is active
  const isActive = (path: string): boolean => pathname === path;

  return (
    <nav className='bg-[#D6E5EF]'>
      <div className={`container max-w-full`}>
        <div className='flex items-center justify-between py-10'>
          {/* Left: Logo and Active Label */}
          <div className='flex items-center space-x-4'>
            <Link href='/'>
              <Image src={'logo.svg'} alt='wave' width={117.37} height={30} />
            </Link>
            <div className='hidden md:flex items-center gap-1'>
              <Image
                src={'/icons/greater-than.svg'}
                alt='gt'
                width={16}
                height={16}
              />
              <span className='text-primary-100 font-semibold text-lg'>
                {activeLabel}
              </span>
            </div>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className='text-primary-100 focus:outline-none'
            >
              <Image
                src={isMenuOpen ? '/icons/close.svg' : '/icons/hamburger.svg'}
                alt='menu-toggle'
                width={30}
                height={30}
              />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex md:items-center md:gap-8 text-base`}>
            <div className='flex flex-col space-y-1'>
              <MenuItem href='/' label='Advisory' isActive={isActive('/')} />
              <MenuItem
                href='/technology'
                label='Technology'
                isActive={isActive('/technology')}
              />
            </div>
            <div className='flex flex-col space-y-1 lg:px-4'>
              <MenuItem
                href='/papers'
                label='Papers'
                isActive={isActive('/papers')}
              />
              <MenuItem
                href='/about'
                label='About'
                isActive={isActive('/about')}
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <MenuItem
                href='/crunch'
                label='Crunch'
                isActive={isActive('/crunch')}
              />
              <MenuItem
                href='/contact'
                label='Contact'
                isActive={isActive('/contact')}
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <MenuItem
                href={goToCrunch} //check here
                label='Go to Crunch'
                addCss='lg:pl-8'
              />
              <MenuItem href='#' label='Empty' addCss='invisible' />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='absolute z-40 top-20 pt-10 w-full h-full bg-[#D6E5EF] md:hidden'>
          <div className='px-6'>
            <div className='flex flex-col gap-8 text-base p-4'>
              <div className='flex flex-col justify-center space-y-1'>
                <MenuItem
                  href='/'
                  label='Advisory'
                  isActive={isActive('/')}
                  onClick={() => setIsMenuOpen(false)}
                />
                <MenuItem
                  href='/technology'
                  label='Technology'
                  isActive={isActive('/technology')}
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <div className='flex flex-col justify-center space-y-1 lg:px-4'>
                <MenuItem
                  href='/papers'
                  label='Papers'
                  isActive={isActive('/papers')}
                  onClick={() => setIsMenuOpen(false)}
                />
                <MenuItem
                  href='/about'
                  label='About'
                  isActive={isActive('/about')}
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <div className='flex flex-col justify-center space-y-1'>
                <MenuItem
                  href='/crunch'
                  label='Crunch'
                  isActive={isActive('/crunch')}
                  onClick={() => setIsMenuOpen(false)}
                />
                <MenuItem
                  href='/contact'
                  label='Contact'
                  isActive={isActive('/contact')}
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <div className='flex flex-col justify-center space-y-1'>
                <MenuItem
                  href={goToCrunch} // check here
                  label='Go to Crunch'
                  addCss='lg:pl-8'
                  onClick={() => setIsMenuOpen(false)}
                />
                <MenuItem
                  href='#'
                  label='Empty'
                  addCss='invisible'
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Individual menu item with icon visibility logic
interface MenuItemProps {
  href: any;
  label: string;
  isActive?: boolean;
  addCss?: string;
  onClick?: () => void; // New onClick prop
}

const MenuItem: React.FC<MenuItemProps> = ({
  href,
  label,
  isActive,
  addCss,
  onClick,
}) => {
  return (
    <div className='flex items-center gap-[0.375rem]'>
      {isActive && (
        <Image
          src={'/icons/active-icon.svg'}
          alt='logo-cut'
          width={8}
          height={8}
          className='-ml-4'
        />
      )}
      <NavLink
        href={href}
        label={label}
        isActive={isActive}
        addCss={addCss}
        onClick={onClick} // Pass onClick to NavLink
      />
    </div>
  );
};

// NavLink Component for individual links
interface NavLinkProps {
  href: any;
  label: string;
  isActive?: boolean;
  addCss?: string;
  onClick?: () => void; // New onClick prop
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive,
  addCss,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={`${addCss} text-base ${
        isActive ? 'text-primary-100 font-semibold' : 'text-primary-200'
      } hover:text-blue-600`}
      onClick={onClick} // Attach onClick
    >
      {label}
    </Link>
  );
};

export default Navbar;
