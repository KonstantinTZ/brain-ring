import React from 'react';
import { Route, Routes } from 'react-router';
import {privateRoutes} from '../../rouer/routers'
import { RouterPage } from '../RouterPage';

export function AppRouter() {
  return (
    
      <Routes>
      {
      privateRoutes.map(route =>
        <Route key={route.path} path={route.path} element={route.component}/>
        ) 
      }

        <Route path="*" element={<RouterPage/>} />
      
    </Routes>
    
    
  );
}
