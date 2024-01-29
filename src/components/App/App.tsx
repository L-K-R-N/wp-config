import { FC, Suspense } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import me from '@/assets/3.jpg'




export const App: FC = () => {

    

    return (
        <>
            <Link to={'/about'}>about</Link>
            <Link to={'/shop'}>shop</Link>
            <div className={classes.aaaaa}>
                hello
                {__PLATFORM__}
                {me}
            </div>
            <Suspense>
                <Outlet/>
            </Suspense>
        </>

    )
 }
