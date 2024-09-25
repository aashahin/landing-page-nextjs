'use client';

export function Button({ variant, text, className }) {
    const basicStyle = "rounded-xl px-5 py-3 font-bold";
    const variants = {
        primary: 'bg-black text-white',
        outline: "border border-black shadow-lg hover:shadow-none"
    }
    return (
        <button className={`${basicStyle} ${variants[variant]} ${className}`}>
            {text}
        </button>
    )
}
