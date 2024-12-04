'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const pathname = usePathname(); // Get the current path
  const [activeLabel, setActiveLabel] = useState<string>('Advisory'); // Default active label

  const goToCrunch = process.env.NEXT_PUBLIC_GO_TO_CRUNCH; // the go to crunch variable

  // Variable of the Socials
  const linkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL;
  const tiktokUrl = process.env.NEXT_PUBLIC_TIKTOK_URL;

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
    <>
      <footer className='container max-w-full flex flex-col pt-24 bg-custom-gradient-2'>
        <div className='lg:px-[6.5rem] flex flex-row lg:flex-col gap-8'>
          <div className='flex flex-row gap-2 lg:hidden'>
            <div className='flex flex-col lg:flex-row lg:justify-between'>
              <div>
                <p className='font-semibold text-primary-100 text-xl'>Strata</p>
              </div>
              <div className='flex flex-col md:flex-row gap-16 text-base p-4 md:p-0'>
                {/* Column 1 */}
                <div className='flex flex-col justify-center space-y-2'>
                  <MenuItem
                    href='/'
                    label='Advisory'
                    isActive={isActive('/')}
                  />
                  <MenuItem
                    href='/technology'
                    label='Technology'
                    isActive={isActive('/technology')}
                  />
                </div>

                {/* Column 2 */}
                <div className='flex flex-col justify-center space-y-2'>
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
                <div className='flex flex-col justify-center space-y-2'>
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
                <div className='flex flex-col justify-center space-y-2'>
                  <MenuItem href={goToCrunch} label='Go to Crunch' />
                  <MenuItem
                    href=''
                    label='Text'
                    isActive={isActive('')}
                    addCss='invisible'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between'>
              <div>
                <p className='font-semibold text-primary-100 text-xl'>Social</p>
              </div>
              <div className='flex flex-col md:flex-row gap-16 text-base p-4 md:p-0'>
                {/* Column 1 */}
                <div className='flex flex-col justify-center space-y-2'>
                  <MenuItem href={linkedInUrl} label='LinkedIn' />{' '}
                  <MenuItem href={tiktokUrl} label='Tiktok' />
                </div>

                {/* Column 2 */}
                <div className='flex flex-col justify-center space-y-2'>
                  <MenuItem href={twitterUrl} label='X (Twitter)' />
                  <MenuItem
                    href='#'
                    label='#'
                    isActive={isActive('#')}
                    addCss='invisible'
                  />
                </div>

                {/* Column 3 */}
                <div className='flex flex-col justify-center space-y-2'>
                  <MenuItem href={instagramUrl} label='Instagram' />{' '}
                  <MenuItem
                    href='/contact'
                    label='Contact'
                    isActive={isActive('/contact')}
                    addCss='invisible'
                  />
                </div>

                {/* Column 4 */}
                <div className='flex flex-col justify-center space-y-2'>
                  <MenuItem href={youtubeUrl} label='Youtube' />{' '}
                  <MenuItem
                    href=''
                    label='Text'
                    isActive={isActive('/contact')}
                    addCss='invisible'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between'>
              <div>
                <p className='font-semibold text-primary-100 text-xl'>Legal</p>
              </div>
              <div className='flex flex-col md:flex-row gap-16 text-base p-4 md:p-0'>
                {/* Column 1 */}
                <div className='flex flex-col justify-center space-y-2'>
                  <MenuItem
                    href='/legal'
                    label='Terms'
                    isActive={isActive('/legal')}
                  />{' '}
                  <MenuItem
                    href='/security'
                    label='Security'
                    isActive={isActive('/security')}
                  />
                </div>

                {/* Column 2 */}
                <div className='flex flex-col justify-center space-y-2'>
                  <MenuItem
                    href='#'
                    label='Privacy Policy'
                    isActive={isActive('#')}
                  />
                  <MenuItem
                    href='#'
                    label='#'
                    isActive={isActive('#')}
                    addCss='invisible'
                  />
                </div>

                {/* Column 3 */}
                <div className='flex flex-col justify-center space-y-2'>
                  <MenuItem
                    href='#'
                    label='Cookie Policy'
                    isActive={isActive('#')}
                  />
                  <MenuItem
                    href='#'
                    label=''
                    isActive={isActive('#')}
                    addCss='invisible'
                  />
                </div>

                {/* Column 4 */}
                <div className='flex flex-col justify-center space-y-2'>
                  <MenuItem
                    href='#'
                    label='System Status'
                    isActive={isActive('#')}
                  />
                  <MenuItem
                    href=''
                    label=''
                    isActive={isActive('/contact')}
                    addCss='invisible'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Large Screen View of the Footer */}
          <div className='hidden lg:flex lg:flex-row lg:justify-between pb-10'>
            <div className='flex flex-col gap-16'>
              <p className='font-semibold text-primary-100 text-xl'>Strata</p>
              <p className='font-semibold text-primary-100 text-xl'>Social</p>
              <p className='font-semibold text-primary-100 text-xl'>Legal</p>
            </div>
            <div className='flex flex-col md:flex-row gap-16 text-base p-4 md:p-0'>
              {/* Column 1 */}
              <div className='flex flex-col justify-center space-y-2'>
                <MenuItem href='/' label='Advisory' isActive={isActive('/')} />
                <MenuItem
                  href='/technology'
                  label='Technology'
                  isActive={isActive('/technology')}
                />
                <MenuItem href={linkedInUrl} label='LinkedIn' addCss='pt-6' />
                <MenuItem href={tiktokUrl} label='TikTok' />
                <MenuItem
                  href='/legal'
                  label='Terms'
                  isActive={isActive('/legal')}
                  addCss='pt-6'
                />
                <MenuItem
                  href='/security'
                  label='Security'
                  isActive={isActive('/security')}
                />
              </div>

              {/* Column 2 */}
              <div className='flex flex-col justify-center space-y-2'>
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
                <MenuItem href={twitterUrl} label='X (Twitter)' addCss='pt-6' />
                <MenuItem
                  href='#'
                  label='Empty'
                  isActive={isActive('#')}
                  addCss='invisible'
                />
                <MenuItem
                  href='#'
                  label='Privacy Policy'
                  isActive={isActive('#')}
                  addCss='pt-6'
                />
                <MenuItem
                  href='#'
                  label='Empty'
                  isActive={isActive('#')}
                  addCss='invisible'
                />
              </div>

              {/* Column 3 */}
              <div className='flex flex-col justify-center space-y-2'>
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

                <MenuItem href={instagramUrl} label='Instagram' addCss='pt-6' />
                <MenuItem
                  href='#'
                  label='Empty'
                  isActive={isActive('#')}
                  addCss='invisible'
                />
                <MenuItem
                  href='#'
                  label='Cookie Policy'
                  isActive={isActive('#')}
                  addCss='pt-6'
                />
                <MenuItem
                  href='#'
                  label='Empty'
                  isActive={isActive('#')}
                  addCss='invisible'
                />
              </div>

              {/* Column 4 */}
              <div className='flex flex-col justify-center space-y-2'>
                <MenuItem href={goToCrunch} label='Go to Crunch' />
                <MenuItem
                  href=''
                  label='Text'
                  isActive={isActive('')}
                  addCss='invisible'
                />
                <MenuItem href={youtubeUrl} label='Youtube' addCss='pt-6' />
                <MenuItem
                  href='#'
                  label='Empty'
                  isActive={isActive('#')}
                  addCss='invisible'
                />
                <MenuItem
                  href='#'
                  label='System Status'
                  isActive={isActive('#')}
                  addCss='pt-6'
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
      </footer>
      <div className='relative bg-custom-gradient-1'>
        <div className='absolute bottom-2 lg:bottom-10 z-10 container flex space-x-4'>
          <span>
            <Image
              src='../../../images/strata-icon.svg'
              alt=''
              width={32}
              height={32}
              className='w-6 h-6 md:w-8 md:h-8'
            />
          </span>
          <p className='font-instrumentsans font-medium text-sm md:text-base text-primary-500'>
            © 2024 Strata Advisory Limited.
          </p>
        </div>
        <Image
          src='../../../icons/footer-bg.svg'
          alt=''
          width={30}
          height={30}
          className='w-full'
        />
      </div>
    </>
  );
};

// Individual menu item with icon visibility logic
interface MenuItemProps {
  href: any;
  label: string;
  isActive?: boolean;
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
  href: any;
  label: string;
  isActive?: boolean;
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

export default Footer;
