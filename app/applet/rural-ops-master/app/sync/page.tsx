'use client';

import { useEffect } from 'react';

type MessageData = 
  | { type: 'GET_PINS' }
  | { type: 'PIN_ITEM'; itemId: string }
  | { type: 'UNPIN_ITEM'; itemId: string };

export default function SyncPage() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const origin = event.origin;
      
      // Defensive security validation: strict subdomain check
      // Allow localhost for dev testing, but strictly enforce production domains
      const isTrustedOrigin = 
        origin.endsWith('.ruralopstools.com') || 
        origin === 'https://ruralopstools.com' ||
        origin.startsWith('http://localhost:');

      if (!isTrustedOrigin) {
        console.warn('Blocked postMessage from untrusted origin:', origin);
        return;
      }

      const data = event.data as MessageData;
      if (!data || typeof data.type !== 'string') return;

      const getPins = (): string[] => {
        try {
          const stored = localStorage.getItem('pinned_items');
          return stored ? JSON.parse(stored) : [];
        } catch (e) {
          console.error('Failed to read pinned_items from localStorage', e);
          return [];
        }
      };

      const setPins = (pins: string[]) => {
        try {
          localStorage.setItem('pinned_items', JSON.stringify(pins));
        } catch (e) {
          console.error('Failed to save pinned_items to localStorage', e);
        }
      };

      if (data.type === 'GET_PINS') {
        event.source?.postMessage({
          type: 'PINS_UPDATE',
          pins: getPins(),
        }, { targetOrigin: origin });
      } 
      else if (data.type === 'PIN_ITEM' && data.itemId) {
        const currentPins = getPins();
        if (!currentPins.includes(data.itemId)) {
          currentPins.push(data.itemId);
          setPins(currentPins);
        }
        event.source?.postMessage({
          type: 'PINS_UPDATE',
          pins: currentPins,
        }, { targetOrigin: origin });
      } 
      else if (data.type === 'UNPIN_ITEM' && data.itemId) {
        const currentPins = getPins();
        const newPins = currentPins.filter((id) => id !== data.itemId);
        setPins(newPins);
        event.source?.postMessage({
          type: 'PINS_UPDATE',
          pins: newPins,
        }, { targetOrigin: origin });
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Cleanup event listener on unmount to prevent leaks
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Hidden component, purely for cross-origin local storage bridging
  return null;
}
