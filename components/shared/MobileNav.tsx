'use client'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/constants'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <header className='header'>
      <Link href='/'><Image src="/assets/logo-text.svg" width={180} height={20} alt='logo'/></Link>
      <nav className='flex gap-2'>
        <SignedIn>
        <UserButton afterSignOutUrl='/'></UserButton>
        <Sheet>
        <SheetTrigger>
          <Image src='/assets/icons/menu.svg' width={32} height={32} className='cursor-pointer'alt='menu'/>
        </SheetTrigger>
        <SheetContent className='sheet-content sm:w-64'>
          <>
          <Image src="/assets/.svg" width={152} height={23} alt='logo'/>
          <ul className="header-nav_elements">
              {navLinks.map((link)=>{
                const isActive  = link.route === pathname
                return(
                  <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`} >
                    <Link className='sidebar-link cursor-pointer hover:gradient-text' href={link.route}>
                      <Image
                        src = {link.icon}
                        alt='logo'
                        width={24}
                        height={24}
                        ></Image>
                        {link.label}
                    </Link>
                  </li>
                )
              })} </ul>
          </>
        </SheetContent>
      </Sheet>
      </SignedIn>
      <SignedOut>
            <Button asChild className='bg-purple-gradient button bg-cover'>
              <Link href="/sign-in">Login</Link>
            </Button>
      </SignedOut>
      </nav>
      
      <></>
    </header>
  )
}

export default MobileNav