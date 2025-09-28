import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpg";

interface ListLinkProps {
  href: string;
  children: React.ReactNode;
}

const ListLink = (props: ListLinkProps) => (
  <li className="uppercase font-bold ml-8 my-10 text-lg text-[#353535] 
                 hover:text-black transform transition-transform duration-400 
                 hover:-translate-y-1">
    <Link href={props.href}>
      {props.children}
    </Link>
  </li>
);

const Links = () => (
  <ul className="flex">
    <ListLink href="/about">Meet the Team</ListLink>
    <ListLink href="/support">Support Us</ListLink>
    <ListLink href="/contact">Contact Us</ListLink>
  </ul>
);



export default function Navbar() {
  return (
    <div className="fixed w-full z-50 bg-secondary">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="w-24 float-left ml-2.5 pl-2 shrink-0 mb-0.5">
          <a href="/">
            <Image src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex gap-9">
          <Links />
        </div>
      </div>
    </div>
  );
}