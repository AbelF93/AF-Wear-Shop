import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col
     text-white mt-5 border-t border-cyan-400">
      <div className="flex max-md:flex-col 
        flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start 
        items-start gap-3">
        <Image src="/AF_logo.svg" alt="af logo"
        width={20} height={20} className="object-contain"
        />
        <p className="text-base text-white">AF Rent Car 2023 
        <br /> All rights reserved &copy;</p>
        </div>

        <div className="footer__links">
		{footerLinks.map((link) => (
			<div key={link.title}
			className="footer__link">
				<h3 className="font-bold">
					{link.title}</h3>
					{link.links.map((item) => (
						<Link key={item.title}
						 href={item.url}
						 className="text-white">
							{item.title}
						</Link>
					))}
			</div>
		))}
        </div>
		</div>

		<div className="flex justify-between items-center flex-wrap
		 mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
			<p>@2023 AF Car Rent. All Rights Reserved</p>
			
			<div className="footer__copyrights-links">
				<Link href="/"
				 className="text-gray-200">
					Privacy Policy
				</Link>
				<Link href="/"
				 className="text-gray-200 ml-10">
					Terms of Use
				</Link>
			</div>
		</div>
      

    </footer>
  )
}

export default Footer