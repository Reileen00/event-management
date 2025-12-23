'use client';
import { User } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import * as React from 'react';
import { useId, useState } from 'react';
import { LayoutGridIcon, PlusIcon, SearchIcon } from 'lucide-react';

import NotificationMenu from './NotificationMenu';
import SettingsMenu from './SettingsMenu';
import { Button } from '../../button';
import { Input } from '../../input';
import { Label } from '../../label';
import { Switch } from '../../switch';
import { cn } from "@/lib/utils"


// Types
export interface Navbar14Props extends React.HTMLAttributes<HTMLElement> {
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

export const Navbar14 = React.forwardRef<HTMLElement, Navbar14Props>(
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
          'border-b px-4 md:px-6 [&_*]:no-underline',
          className
        )}
        {...(props as any)}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          Event Management / Events
          
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
              {/* Notification */}
              <NotificationMenu 
                notifications={notifications}
                onNotificationClick={onNotificationClick}
              />
              {/* Settings */}
            </div>
            {/* Add button */}
            <Avatar className="ring-2 ring-green-500 ring-offset-2 ring-offset-background">
          <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        Lionel Messi
           
          </div>
        </div>
      </header>
    );
  }
);

Navbar14.displayName = 'Navbar14';

export {  NotificationMenu, SettingsMenu };