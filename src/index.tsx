import {createRoot} from 'react-dom/client'
import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from '@/pages/about';
import { Shop } from '@/pages/shop';
import { App } from '@/components/App/App';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: 
                <App/>,
        children: [
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/shop",
                element: <Shop/>,
            }
        ]
    }
])
container.render(
    <RouterProvider router={router}/>
)