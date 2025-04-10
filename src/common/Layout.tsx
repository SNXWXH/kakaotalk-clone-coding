import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen w-full bg-gray-100'>
        {children}
      </div>
    </>
  );
}

export default Layout;
