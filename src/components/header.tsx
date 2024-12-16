import { MenuIcon } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export const Header = () => {
  const navLinks = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Services",
      href: "#",
    },
    {
      label: "Portfolio",
      href: "#",
    },
    {
      label: "About us",
      href: "#",
    },
  ];

  return (
    <header className="py-3 flex justify-between gap-2">
      <a href="/" className="shrink-0">
        <img src="/logo.svg" alt="logo" width={124} height={54} className="h-full" />
      </a>

      <nav className="px-2 hidden md:block">
        <ul className="flex gap-4">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="text-lg font-medium">
                <Button variant="ghost">
                  {link.label}
                </Button>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        <a href="#">
          <Button>
            Contact us
          </Button>
        </a>

        <Sheet>
          <SheetTrigger className="md:hidden" asChild>
            <Button variant="outline">
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="h-screen flex flex-col p-0 px-2 py-5">
            <div className="flex-1">
              <SheetHeader className="mt-2 mb-5 pl-2.5">
                <SheetTitle>
                  <img src="/logo.svg" alt="logo" width={124} height={54} className="h-full" />
                </SheetTitle>
              </SheetHeader>

              <nav>
                <ul className="flex flex-col gap-4">
                  {navLinks.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className="block text-lg font-medium">
                        <Button variant="ghost" className="w-full justify-start h-12">
                          {link.label}
                        </Button>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="space-y-2 mt-auto pl-2.5">
              <h1 className="text-lg font-medium">
                Follow us
              </h1>
              <ul className="flex justify-between gap-2">
                <li className="flex-1">
                  <a href="#" className="block w-full">
                    <Button variant="outline" className="w-full h-12">
                      <FaFacebook size={20} className="text-orange-500" />
                    </Button>
                  </a>
                </li>
                <li className="flex-1">
                  <a href="#" className="block w-full">
                    <Button variant="outline" className="w-full h-12">
                      <FaXTwitter size={20} className="text-orange-500" />
                    </Button>
                  </a>
                </li>
                <li className="flex-1">
                  <a href="#" className="block w-full">
                    <Button variant="outline" className="w-full h-12">
                      <FaInstagram size={20} className="text-orange-500" />
                    </Button>
                  </a>
                </li>
                <li className="flex-1">
                  <a href="#" className="block w-full">
                    <Button variant="outline" className="w-full h-12">
                      <FaLinkedin size={20} className="text-orange-500" />
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </header>
  )
}