import { useEffect } from 'react';
const Index = () => {
  useEffect(() => {
    // Create and append the Chatway script
    const script = document.createElement('script');
    script.id = 'chatway';
    script.async = true;
    script.src = 'https://cdn.chatway.app/widget.js?id=yOqwTK9Y1CF6';

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
  return;
};
export default Index;