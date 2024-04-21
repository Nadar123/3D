import React, { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <div className='page-layout'>{children}</div>;
};

export default PageLayout;
