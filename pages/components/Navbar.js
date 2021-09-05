import Link from 'next/link';
import Image from 'next/image';
 
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/images/gambar1.png" width={40} height={30} className="logo-gambar"/>
        <h1>Ninja List</h1>
        
      </div>
      {/* <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/brands/"><a>Brand Listing</a></Link> */}

        <ul>
           <li><a href="/" className="navlink">Home</a></li>
           <li><a href="/about" className="navlink">About</a></li>
           <li><a href="/brands/" className="navlink">Brand Listing</a></li>
        </ul>
    </nav>
);
}
 
export default Navbar;