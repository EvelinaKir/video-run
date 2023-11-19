import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import MainLayout from "@/components/layouts/MainLayout";
import ReduxProvider from "@/services/providers/ReduxProvider";
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/assets/index.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Video',
    description: 'timestamps',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ReduxProvider>
            <MainLayout>
                {children}
            </MainLayout>
        </ReduxProvider>
        </body>
        </html>
    )
}
