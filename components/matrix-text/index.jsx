'use client';
import { useState, useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';

const MatrixText = memo(({ text, className }) => {
    const [displayText, setDisplayText] = useState('');
    const [shouldStartAnimation, setShouldStartAnimation] = useState(false);
    const characters = 'abcdefghijklmnopqrstuwxvyz!@#$%^&*()_+-=[]{}|;:,.<>?';
    const STAIR_TRANSITION_DURATION = 1000; // StairTransition'ın tamamlanma süresi (ms)
    const ANIMATION_INTERVAL = 20;
    const RESET_INTERVAL = 10000;

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
        // StairTransition'ın bitmesini bekle
        const timer = setTimeout(() => {
            setShouldStartAnimation(true);
        }, STAIR_TRANSITION_DURATION);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!shouldStartAnimation) return;

        const startAnimation = () => {
            let currentIndex = 0;
            let iterations = 0;
            let timeoutId;

            const animate = () => {
                updateText(currentIndex, iterations);
                iterations++;

                if (iterations > 3) {
                    iterations = 0;
                    currentIndex++;
                }

                if (currentIndex < text.length) {
                    timeoutId = setTimeout(animate, ANIMATION_INTERVAL);
                }
            };

            animate();

            return () => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            };
        };
        let cleanup = startAnimation();
        const resetInterval = setInterval(() => {
            if (cleanup) cleanup();
            setDisplayText('');
            cleanup = startAnimation();
        }, RESET_INTERVAL);

        return () => {
            if (cleanup) cleanup();
            clearInterval(resetInterval);
        };
    }, [text, updateText, shouldStartAnimation]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: STAIR_TRANSITION_DURATION / 1000 }}
        >
            {displayText || text.replace(/./g, ' ')}
        </motion.span>
    );
});

MatrixText.displayName = 'MatrixText';

export default MatrixText; 