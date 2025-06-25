
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Create and append the Chatway script
    const script = document.createElement('script');
    script.id = 'chatway';
    script.async = true;
    script.src = 'https://cdn.chatway.app/widget.js?id=yOqwTK9Y1CF6';

    // Add configuration to keep chat always open
    script.onload = () => {
      // Wait a bit for the widget to initialize
      setTimeout(() => {
        // Try to find and click the chat widget to open it
        const chatWidget = document.querySelector('[data-chatway-widget]') || 
                          document.querySelector('.chatway-widget') ||
                          document.querySelector('#chatway-widget');
        
        if (chatWidget) {
          // If widget has a click handler, trigger it
          const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
          });
          chatWidget.dispatchEvent(clickEvent);
        }

        // Alternative: Try to find the chat button and click it
        const chatButton = document.querySelector('[data-chatway-trigger]') ||
                          document.querySelector('.chatway-trigger') ||
                          document.querySelector('.chatway-button');
        
        if (chatButton) {
          (chatButton as HTMLElement).click();
        }
      }, 1000);
    };

    // Append to head instead of body for better loading
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById('chatway');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Chatway Live Chat
        </h1>
        <p className="text-lg text-gray-600">
          Your chat support is ready and always available!
        </p>
      </div>
    </div>
  );
};

export default Index;
