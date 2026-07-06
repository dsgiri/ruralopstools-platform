import { useState, useEffect, useRef, useCallback } from 'react';

type MessageData = 
  | { type: 'PINS_UPDATE'; pins: string[] }
  | { type: 'GET_PINS' }
  | { type: 'PIN_TOOL'; toolId: string }
  | { type: 'UNPIN_TOOL'; toolId: string };

export function useMasterPins(toolId: string) {
  const [isPinned, setIsPinned] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  
  const targetOrigin = 'https://ruralopstools.com';

  useEffect(() => {
    // 1. Inject hidden iframe for cross-origin communication
    const iframe = document.createElement('iframe');
    iframe.src = `${targetOrigin}/sync`;
    iframe.style.display = 'none';
    
    iframe.onload = () => {
      setIsIframeLoaded(true);
      // 2. Request initial pins once iframe is ready
      iframe.contentWindow?.postMessage({ type: 'GET_PINS' }, targetOrigin);
    };

    document.body.appendChild(iframe);
    iframeRef.current = iframe;

    // 3. Listen for incoming postMessage responses from master site
    const handleMessage = (event: MessageEvent) => {
      // Security check: only accept messages from the trusted origin
      if (event.origin !== targetOrigin) return;
      
      const data = event.data as MessageData;
      if (data && data.type === 'PINS_UPDATE') {
        const pins = data.pins || [];
        setIsPinned(pins.includes(toolId));
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup iframe and event listener on unmount
    return () => {
      window.removeEventListener('message', handleMessage);
      if (iframeRef.current && document.body.contains(iframeRef.current)) {
        document.body.removeChild(iframeRef.current);
      }
      iframeRef.current = null;
    };
  }, [toolId]);

  const pinTool = useCallback(() => {
    if (!isIframeLoaded || !iframeRef.current?.contentWindow) return;
    
    // Optimistic update for immediate UI feedback
    setIsPinned(true);
    iframeRef.current.contentWindow.postMessage({ type: 'PIN_TOOL', toolId }, targetOrigin);
  }, [isIframeLoaded, toolId]);

  const unpinTool = useCallback(() => {
    if (!isIframeLoaded || !iframeRef.current?.contentWindow) return;
    
    // Optimistic update for immediate UI feedback
    setIsPinned(false);
    iframeRef.current.contentWindow.postMessage({ type: 'UNPIN_TOOL', toolId }, targetOrigin);
  }, [isIframeLoaded, toolId]);

  const togglePin = useCallback(() => {
    if (isPinned) {
      unpinTool();
    } else {
      pinTool();
    }
  }, [isPinned, pinTool, unpinTool]);

  return { isPinned, pinTool, unpinTool, togglePin, isReady: isIframeLoaded };
}
