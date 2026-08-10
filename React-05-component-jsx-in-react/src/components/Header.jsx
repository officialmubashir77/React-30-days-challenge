import { Link } from "react-router";
import { Menu, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" />
          </div>

          <span className="text-lg">AuthSystem</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>

          <Link
            to="/profile"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Profile
          </Link>

          <Link
            to="/users"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Users
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-5" />

                <span className="sr-only">Open navigation</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>AuthSystem</SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-3">
                <SheetClose asChild>
                  <Link
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                  >
                    Home
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    to="/profile"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                  >
                    Profile
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    to="/users"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                  >
                    Users
                  </Link>
                </SheetClose>

                <div className="mt-4 flex flex-col gap-2">
                  <SheetClose asChild>
                    <Button variant="outline" asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                  </SheetClose>

                  <SheetClose asChild>
                    <Button asChild>
                      <Link to="/register">Register</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
