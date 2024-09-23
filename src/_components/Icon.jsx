"use client"

import * as lucideIcons from "lucide-react";

export function Icon({ iconName }) {
    const Icon = lucideIcons[iconName];
    return (
        <div className="bg-black rounded-[40px] p-8 text-white hover:bg-green-600 hover:text-white">
            <Icon className="w-28 h-28" />
        </div>
    )
}