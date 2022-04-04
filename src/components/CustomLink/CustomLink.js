import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ borderBottomWidth: match ? "2px" : "0", color: match ? "#4338ca" : '#000000' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
export default CustomLink;