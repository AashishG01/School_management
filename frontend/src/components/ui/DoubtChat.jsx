import { useState, useEffect, useRef } from 'react';

const DoubtChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'ai', text: 'Hi Aryan! What are we studying today? Any doubts?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages(prev => [...prev, { type: 'user', text: input }]);
        const currentInput = input;
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);

            let reply = "That's a great question! Think about what we learned in Chapter 4.";
            const lowerInput = currentInput.toLowerCase();

            if (lowerInput.includes('photosynthesis') || lowerInput.includes('prakhyat')) {
                reply = "Photosynthesis is how plants make their food! They use Sunlight, Water, and Carbon Dioxide to create energy (glucose) and release Oxygen. Does that make sense?";
            } else if (lowerInput.includes('algebra') || lowerInput.includes('math') || lowerInput.includes('solve')) {
                reply = "Ah, algebra! Remember, whatever you do to one side of the equation, you MUST do to the other side. Try applying that to the first step. What do you get?";
            }

            setMessages(prev => [...prev, { type: 'ai', text: reply }]);
        }, 1500);
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
                    width: '60px', height: '60px', borderRadius: '30px',
                    background: 'var(--gold)', color: 'var(--ink)', border: 'none',
                    boxShadow: '0 8px 32px rgba(201, 168, 76, 0.4)',
                    fontSize: '28px', cursor: 'pointer', display: 'grid', placeItems: 'center',
                    transition: 'transform 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                ✨
            </button>
        );
    }

    return (
        <div style={{
            position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
            width: '350px', height: '500px', background: 'white',
            borderRadius: '20px', boxShadow: '0 12px 48px rgba(15,14,12,0.15)',
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
            border: '1px solid var(--border)',
            animation: 'fadeIn 0.2s ease-out'
        }}>
            {/* Header */}
            <div style={{ padding: '16px', background: 'var(--ink)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div style={{ fontWeight: 700, fontSize: '15px' }}>✨ AI Study Buddy</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontFamily: "'JetBrains Mono', monospace" }}>24/7 Homework Help</div>
                </div>
                <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>✕</button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--cream)' }}>
                {messages.map((m, i) => (
                    <div key={i} style={{
                        alignSelf: m.type === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: '85%', padding: '12px 16px',
                        borderRadius: m.type === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                        background: m.type === 'user' ? 'var(--ink)' : 'white',
                        color: m.type === 'user' ? 'white' : 'var(--ink)',
                        border: m.type === 'user' ? 'none' : '1px solid var(--border)',
                        fontSize: '13.5px', lineHeight: 1.5,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                    }}>
                        {m.text}
                    </div>
                ))}
                {isTyping && (
                    <div style={{ alignSelf: 'flex-start', padding: '12px 16px', background: 'white', borderRadius: '16px 16px 16px 0', border: '1px solid var(--border)', display: 'flex', gap: '4px' }}>
                        <div className="dot-typing"></div><div className="dot-typing"></div><div className="dot-typing"></div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} style={{ display: 'flex', padding: '12px', borderTop: '1px solid var(--border)', background: 'white' }}>
                <input
                    value={input} onChange={e => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    style={{ flex: 1, padding: '10px 14px', border: '1px solid var(--border)', borderRadius: '20px', fontSize: '13px', outline: 'none' }}
                />
                <button type="submit" style={{ marginLeft: '8px', width: '40px', height: '40px', borderRadius: '20px', background: 'var(--gold)', border: 'none', color: 'var(--ink)', fontSize: '18px', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
                    ↑
                </button>
            </form>

            <style>{`
        .dot-typing { width: 6px; height: 6px; background: var(--muted); border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; }
        .dot-typing:nth-child(1) { animation-delay: -0.32s; }
        .dot-typing:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
      `}</style>
        </div>
    );
};

export default DoubtChat;
