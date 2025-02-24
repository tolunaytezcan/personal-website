'use client';
import { useState, useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';

const MatrixText = memo(({ text, className }) => {
    const [displayText, setDisplayText] = useState('');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    const updateText = useCallback((currentIndex, iterations) => {
        setDisplayText(prev => {
            const arr = prev.split('');
            
            if (currentIndex < text.length) {
                if (iterations < 3) {
                    arr[currentIndex] = characters[Math.floor(Math.random() * characters.length)];
                } else {
                    arr[currentIndex] = text[currentIndex];
                }
            }
            
            return arr.join('');
        });
    }, [text, characters]);

    useEffect(() => {
        let currentIndex = 0;
        let iterations = 0;
        let animationFrame;

        const animate = () => {
            updateText(currentIndex, iterations);
            iterations++;

            if (iterations > 3) {
                iterations = 0;
                currentIndex++;
            }

            if (currentIndex < text.length) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [text, updateText]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {displayText || text.replace(/./g, ' ')}
        </motion.span>
    );
});

MatrixText.displayName = 'MatrixText';

export default MatrixText; 