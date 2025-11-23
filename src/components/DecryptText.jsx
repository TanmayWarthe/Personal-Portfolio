import { useEffect, useState, useRef } from 'react';

const DecryptText = ({ values = ['Empty'], delay = 3000 }) => {
  const [result, setResult] = useState(values[0] || '');
  const intervalRef = useRef(null);
  const decryptIntervalRef = useRef(null);

  useEffect(() => {
    if (values.length <= 1) {
      setResult(values[0] || '');
      return;
    }

    let i = 1;
    
    const startCycle = () => {
      const targetText = values[i];
      
      // Clear any existing decrypt animation
      if (decryptIntervalRef.current) {
        clearInterval(decryptIntervalRef.current);
      }
      
      // Decrypt animation
      let decryptIndex = 0;
      const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
      
      decryptIntervalRef.current = setInterval(() => {
        if (decryptIndex < targetText.length) {
          const partial = targetText.substring(0, decryptIndex) + 
            randomChars[Math.floor(Math.random() * randomChars.length)];
          setResult(partial);
          decryptIndex++;
        } else {
          setResult(targetText);
          clearInterval(decryptIntervalRef.current);
          decryptIntervalRef.current = null;
        }
      }, 30);

      i = i === values.length - 1 ? 0 : i + 1;
    };

    // Start immediately
    startCycle();
    
    // Then cycle through
    intervalRef.current = setInterval(startCycle, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (decryptIntervalRef.current) {
        clearInterval(decryptIntervalRef.current);
      }
    };
  }, [values, delay]);

  return <>{result}</>;
};

export default DecryptText;
