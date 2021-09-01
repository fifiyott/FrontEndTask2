import Link from 'next/link';
 
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      {/* <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/brands/"><a>Brand Listing</a></Link> */}

        <ul>
           <li><a href="/">Home</a></li>
           <li><a href="/about">About</a></li>
           <li><a href="/brands/">Brand Listing</a></li>
        </ul>
    </nav>
);
}
 
export default Navbar;