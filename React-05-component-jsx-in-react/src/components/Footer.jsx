import { Link } from "react-router";
import { ShieldCheck } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold"
            >
              <ShieldCheck className="size-5" />

              <span>
                AuthSystem
              </span>
            </Link>

            <p className="mt-2 text-sm text-muted-foreground">
              Simple and secure user authentication system.
            </p>
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap gap-5 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="text-muted-foreground hover:text-foreground"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="text-muted-foreground hover:text-foreground"
            >
              Register
            </Link>

            <Link
              to="/profile"
              className="text-muted-foreground hover:text-foreground"
            >
              Profile
            </Link>
          </nav>

        </div>

        <Separator className="my-6" />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 AuthSystem. All rights reserved.
          </p>

          <p>
            Built with React + shadcn/ui
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;