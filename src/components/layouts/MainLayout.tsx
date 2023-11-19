'use client'
import React from 'react';

const MainLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={'container p-4'}>
            {children}
        </div>
    );
};

export default MainLayout;