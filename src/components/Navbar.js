import React from 'react';
import Link from 'next/link';

const Navbar = ({ page }) => (
  <ul className='navbar'>
    <li className={`${page === '/' ? 'active' : ''}`}>
      <Link href="/">
        <a>Home Page</a>
      </Link>
    </li>

    <li className={`${page === '/performanceIssue' ? 'active' : ''}`}>
      <Link href="/performanceIssue">
        <a>Performance Issue Page</a>
      </Link>
    </li>


    <style jsx>{`
      .navbar {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
        list-style-type: "none";
        background-color: #f7f9fa;
      }
      li {
        display: inline-block;
        padding: 5px 10px;
        margin-right: 15px;
        border-radius: 4px;
      }
      a {
        text-decoration: none;
        color: #222;
      }
      li.active a {
        color: #000;
        font-weight: 600;
      }
    `}</style>
  </ul>
);

export default Navbar;
