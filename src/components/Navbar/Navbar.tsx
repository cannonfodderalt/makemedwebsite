import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpg";

interface ListLinkProps {
  href: string;
  children: React.ReactNode;
}

const ListLink = (props: ListLinkProps) => (
  <li>
    <Link href={props.href} className="uppercase font-bold ml-8 my-10 text-lg text-white hover:text-[#a5cbf1]">
      {props.children}
    </Link>
  </li>
);

{/* Literally copied this stuff from biomod */}
const Links = () => (
  <ul className="flex">
    <ListLink href="/join">Join Us</ListLink>
    <ListLink href="/support">Support Us</ListLink>
    <ListLink href="/sponsors">Sponsors</ListLink>
    <ListLink href="/contact">Contact</ListLink>
    <ListLink href="/about">About Us</ListLink>
  </ul>
);



export default function Navbar() {
  return (
    <div className="fixed w-full z-50 bg-secondary">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="w-24 float-left ml-2.5 pl-2 shrink-0 mb-0.5">
          <a href="/">
            <Image src={logo} alt="logo"/>
          </a>
        </div>
        <div className="flex gap-6">
          <Links />
        </div>
      </div>
    </div>
  );
}
