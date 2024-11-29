'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Get the current path
  const [activeLabel, setActiveLabel] = useState<string>('Advisory'); // Default active label
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Mobile menu state

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
      <div className='md:container max-w-full px-4 md:px-0'>
        <div className='flex items-center justify-between py-10'>
          {/* Left: Logo and Active Label */}
          <div className='flex items-center space-x-4'>
            <Link href='/'>
              <Image src={'logo.svg'} alt='wave' width={117.37} height={30} />
            </Link>
            <div className='flex items-center gap-1'>
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

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute z-40 top-20 w-full h-full bg-[#D6E5EF] md:static md:block md:w-auto`}
          >
            <div className='flex flex-col md:flex-row gap-8 text-base p-4 md:p-0'>
              {/* Column 1 */}
              <div className='flex flex-col justify-center space-y-1'>
                <MenuItem href='/' label='Advisory' isActive={isActive('/')} />
                <MenuItem
                  href='/technology'
                  label='Technology'
                  isActive={isActive('/technology')}
                />
              </div>

              {/* Column 2 */}
              <div className='flex flex-col justify-center space-y-1 lg:px-4'>
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

              {/* Column 3 */}
              <div className='flex flex-col justify-center space-y-1'>
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

              {/* Column 4 */}
              <div className='flex flex-col justify-center space-y-1'>
                <MenuItem
                  href='#'
                  label='Go to Crunch'
                  isActive={isActive('#')}
                  addCss='lg:pl-8'
                />
                <MenuItem
                  href='#'
                  label='Empty'
                  isActive={isActive('#')}
                  addCss='invisible'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Individual menu item with icon visibility logic
interface MenuItemProps {
  href: string;
  label: string;
  isActive: boolean;
  addCss?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  href,
  label,
  isActive,
  addCss,
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
      <NavLink href={href} label={label} isActive={isActive} addCss={addCss} />
    </div>
  );
};

// NavLink Component for individual links
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  addCss?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive, addCss }) => {
  return (
    <Link
      href={href}
      className={`${addCss} text-base ${
        isActive ? 'text-primary-100 font-semibold' : 'text-primary-200'
      } hover:text-blue-600`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
