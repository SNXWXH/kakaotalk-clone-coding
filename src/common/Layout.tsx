import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen w-full'>
        {children}
      </div>
    </>
  );
}

export default Layout;
