'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MatrixText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState('');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    useEffect(() => {
        let currentIndex = 0;
        let iterations = 0;
        const maxIterations = 3;

        const interval = setInterval(() => {
            setDisplayText(prev => {
                const arr = prev.split('');

                if (currentIndex < text.length) {
                    if (iterations < maxIterations) {
                        arr[currentIndex] = characters[Math.floor(Math.random() * characters.length)];
                        iterations++;
                    } else {
                        arr[currentIndex] = text[currentIndex];
                        currentIndex++;
                        iterations = 0;
                    }
                }

                return arr.join('');
            });

            if (currentIndex >= text.length && iterations >= maxIterations) {
                clearInterval(interval);
            }
        }, 70);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayText || text.replace(/./g, ' ')}
        </motion.span>
    );
};

export default MatrixText; 