import { FC, Suspense, useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App: FC = () => {
   const [isLoading, setIsLoading] = useState(false);
   return (
      <>
         <Link to={'/about'}>about</Link>
         <Link to={'/shop'}>shop</Link>

         <div className={classes.aaaaa}>hello{__PLATFORM__}</div>

         <Suspense>
            <Outlet />
         </Suspense>
      </>
   );
};
