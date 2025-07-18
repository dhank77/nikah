import { ButtonComponent } from '@/components/editors/button';
import { Card } from '@/components/editors/card';
import { Container } from '@/components/editors/container';
import { ImageComponent } from '@/components/editors/image';
import { SettingsPanel } from '@/components/editors/settings-panel';
import { Text } from '@/components/editors/text';
import { Toolbox } from '@/components/editors/toolbox';
import { TopBar } from '@/components/editors/topbar';
import { CoupleNames } from '@/components/editors/wedding/couple-names';
import { WeddingDate } from '@/components/editors/wedding/wedding-date';
import { VenueInfo } from '@/components/editors/wedding/venue-info';
import { DecorativeElement } from '@/components/editors/wedding/decorative-element';
import { Editor, Element, Frame } from '@craftjs/core';
import React, { Suspense, useState } from 'react';

const WelcomeEditor: React.FC = () => {
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen flex-col bg-gray-50 transition-colors dark:bg-gray-900">
            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                <Suspense fallback={<div>Loading...</div>}>
                    <Editor resolver={{ Text, Container, ButtonComponent, Card, ImageComponent, CoupleNames, WeddingDate, VenueInfo, DecorativeElement }}>
                        {/* TopBar with Craft.js controls */}
                        <TopBar />

                        {/* Editor Content Area */}
                        <div className="relative flex flex-1">
                            {/* Left Sidebar Toggle */}
                            <div className="absolute top-0 left-0 z-10 flex flex-col border-r border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <button
                                    onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
                                    className="flex h-12 w-12 items-center justify-center border-b border-gray-200 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                                    title="Elements"
                                >
                                    <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l-7 7-7-7m14 18l-7-7-7 7" />
                                    </svg>
                                </button>
                                <button
                                    className="flex h-12 w-12 items-center justify-center border-b border-gray-200 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                                    title="Text"
                                >
                                    <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="flex h-12 w-12 items-center justify-center border-b border-gray-200 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                                    title="Images"
                                >
                                    <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="flex h-12 w-12 items-center justify-center transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                                    title="Shapes"
                                >
                                    <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Left Sidebar Panel */}
                            {leftSidebarOpen && (
                                <div className="z-20 ml-12 w-80 border-r border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                                    <div className="border-b border-gray-200 p-4 dark:border-gray-700">
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Elements</h3>
                                    </div>
                                    <div className="p-4">
                                        <Toolbox />
                                    </div>
                                </div>
                            )}

                            {/* Center Area - CraftJS Canvas */}
                            <div
                                className={`flex-1 bg-gradient-to-br from-gray-100 to-white p-8 transition-all duration-300 dark:from-gray-800 dark:to-gray-900 ${
                                    leftSidebarOpen ? 'ml-0' : 'ml-12'
                                } ${rightSidebarOpen ? 'mr-0' : 'mr-12'}`}
                            >
                                <Frame>
                                    <Element is={Container} padding={10} background="#f4f4f4" canvas>
                                        <div className="flex h-full min-h-[600px] w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900">
                                            <div className="text-center">
                                                <div className="mb-4 text-6xl">💒</div>
                                                <div className="mb-2 text-lg text-gray-400 dark:text-gray-500">Mulai buat undangan pernikahan Anda</div>
                                                <div className="text-sm text-gray-300 dark:text-gray-600">Seret komponen pernikahan dari panel kiri untuk memulai</div>
                                                <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                                                    <p>💡 Tip: Mulai dengan "Nama Pasangan" dan "Tanggal Pernikahan"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Element>
                                </Frame>
                            </div>

                            {/* Right Sidebar Panel */}
                            {rightSidebarOpen && (
                                <div className="z-20 mr-12 w-80 border-l border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                                    <div className="border-b border-gray-200 p-4 dark:border-gray-700">
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Properties</h3>
                                    </div>
                                    <div className="p-4">
                                        <SettingsPanel />
                                    </div>
                                </div>
                            )}

                            {/* Right Sidebar Toggle */}
                            <div className="absolute top-0 right-0 z-10 flex flex-col border-l border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <button
                                    onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
                                    className="flex h-12 w-12 items-center justify-center border-b border-gray-200 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                                    title="Properties"
                                >
                                    <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="flex h-12 w-12 items-center justify-center border-b border-gray-200 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                                    title="Layers"
                                >
                                    <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l-7 7-7-7m14 18l-7-7-7 7" />
                                    </svg>
                                </button>
                                <button
                                    className="flex h-12 w-12 items-center justify-center transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                                    title="History"
                                >
                                    <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Editor>
                </Suspense>
            </div>
        </div>
    );
};

export default WelcomeEditor;
