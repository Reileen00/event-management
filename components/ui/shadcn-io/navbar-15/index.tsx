'use client';


import * as React from 'react';
import { useId } from 'react';
import {  SearchIcon } from 'lucide-react';

import NotificationMenu from './NotificationMenu';
import SettingsMenu from './SettingsMenu';
import { Input } from '../../input';
import { cn } from "@/lib/utils"


// Types
export interface Navbar15Props extends React.HTMLAttributes<HTMLElement> {
  searchPlaceholder?: string;
  searchValue?: string;
  testMode?: boolean;
  showTestMode?: boolean;
  notifications?: Array<{
    id: string;
    title: string;
    message: string;
    time: string;
    unread?: boolean;
  }>;
  onSearchChange?: (value: string) => void;
  onTestModeChange?: (enabled: boolean) => void;
  onLayoutClick?: () => void;
  onAddClick?: () => void;
  onInfoItemClick?: (item: string) => void;
  onNotificationClick?: (notificationId: string) => void;
  onSettingsItemClick?: (item: string) => void;
}

export const Navbar15 = React.forwardRef<HTMLElement, Navbar15Props>(
  (
    {
      className,
      searchPlaceholder = 'Search...',
      searchValue,
      testMode: controlledTestMode,
      showTestMode = true,
      notifications,
      onSearchChange,
      onTestModeChange,
      onLayoutClick,
      onAddClick,
      onInfoItemClick,
      onNotificationClick,
      onSettingsItemClick,
      ...props
    },
    ref
  ) => {
    const id = useId();
   
    // Use controlled or internal test mode state
    

    return (
      <header
        ref={ref}
        className={cn(
          ' px-4 md:px-6 [&_*]:no-underline',
          className
        )}
        {...(props as any)}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          
          {/* Right side */}
          <div className="flex items-center gap-4">
           
            <div className="flex items-center gap-2">
              {/* Layout button */}
              <div className="relative flex-1">
            <Input
              id={`input-${id}`}
              className="peer h-8 w-full max-w-xs ps-8 pe-2"
              placeholder={searchPlaceholder}
              type="search"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>
          </div>
          </div>
            
           
          </div>
        </div>
      </header>
    );
  }
);

Navbar15.displayName = 'Navbar15';

export {  NotificationMenu, SettingsMenu };