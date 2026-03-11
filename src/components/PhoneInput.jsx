import React, { useState } from 'react';

const countryCodes = [
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+1', name: 'USA/Canada', flag: '🇺🇸' },
    { code: '+44', name: 'UK', flag: '🇬🇧' },
    { code: '+971', name: 'UAE', flag: '🇦🇪' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+65', name: 'Singapore', flag: '🇸🇬' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+974', name: 'Qatar', flag: '🇶🇦' },
    { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
    { code: '+9Om', name: 'Oman', flag: '🇴🇲' }, 
];

const PhoneInput = ({ value, onChange, placeholder, required }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Parse initial value
    const getInitialParts = () => {
        if (!value) return { code: '+91', number: '' };
        const match = value.match(/^(\+\d+)\s*(.*)$/);
        if (match) {
            return { code: match[1], number: match[2] };
        }
        return { code: '+91', number: value };
    };

    const initialParts = getInitialParts();
    const [selectedCode, setSelectedCode] = useState(initialParts.code);
    const [phoneNumber, setPhoneNumber] = useState(initialParts.number);

    const handleCodeChange = (code) => {
        setSelectedCode(code);
        setIsOpen(false);
        onChange(`${code} ${phoneNumber}`);
    };

    const handleNumberChange = (e) => {
        const val = e.target.value.replace(/\D/g, ''); // Only digits
        setPhoneNumber(val);
        onChange(`${selectedCode} ${val}`);
    };

    return (
        <div className="relative flex w-full">
            {/* Country Code Dropdown */}
            <div className="relative h-full">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 h-full bg-white/5 border border-white/10 rounded-l-xl px-3 py-3 text-white cursor-pointer hover:bg-white/10 transition-all border-r-0"
                >
                    <span className="text-sm font-medium">{selectedCode}</span>
                    <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {isOpen && (
                    <>
                        <div className="fixed inset-0 z-[100]" onClick={() => setIsOpen(false)}></div>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl z-[101] overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-xl">
                            <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                {countryCodes.map((c) => (
                                    <div
                                        key={c.code + c.name}
                                        onClick={() => handleCodeChange(c.code)}
                                        className={`px-4 py-2.5 text-sm cursor-pointer flex items-center gap-3 transition-colors ${selectedCode === c.code ? 'bg-[#f4103f]/20 text-[#f4103f]' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
                                    >
                                        <span>{c.flag}</span>
                                        <span className="flex-1">{c.name}</span>
                                        <span className="text-white/30 text-[10px]">{c.code}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Phone Number Input */}
            <input
                type="tel"
                required={required}
                value={phoneNumber}
                onChange={handleNumberChange}
                placeholder={placeholder || "00000 00000"}
                className="flex-1 bg-white/5 border border-white/10 rounded-r-xl px-4 py-3 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/10 transition-all text-sm placeholder:text-white/20 shadow-sm border-l-0"
            />
        </div>
    );
};

export default PhoneInput;
