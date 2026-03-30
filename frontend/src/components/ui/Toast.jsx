import { useState, useEffect, createContext, useContext, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3500);
    }, []);

    return (
        <ToastContext.Provider value={addToast}>
            {children}
            <div className="toast-container">
                {toasts.map(t => (
                    <div className={`toast toast-${t.type}`} key={t.id}>
                        <span className="toast-icon">
                            {t.type === 'success' ? '✅' : t.type === 'error' ? '❌' : 'ℹ️'}
                        </span>
                        <span className="toast-msg">{t.message}</span>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
