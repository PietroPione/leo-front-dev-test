import { useState } from "react";
import ChevronDown from './ChevronDown';
import ChevronUp from './ChevronUp';

export default function AccordionCard({ title, description, open, onClick }) {
    return (
        <div
            className={`py-4 cursor-pointer select-none transition-colors duration-300 p-8 border border-blue rounded-2xl ${open ? "bg-[var(--celeste)]" : ""}`}
            onClick={onClick}
            tabIndex={0}
            role="button"
            aria-expanded={open}
            onKeyPress={e => {
                if (e.key === "Enter" || e.key === " ") onClick();
            }}
            style={open ? { outline: "none" } : {}}
        >
            <div className="w-full text-left font-semibold text-lg flex justify-between items-center">
                {title}
                <span className="ml-2">
                    {open ? <ChevronDown /> : <ChevronUp />}
                </span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                    maxHeight: open ? 200 : 0,
                    opacity: open ? 1 : 0,
                }}
            >
                <div className="mt-2 text-gray-700 text-base">
                    {description}
                </div>
            </div>
        </div>
    );
}