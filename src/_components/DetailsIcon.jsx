'use client'
import { Icon } from "./Icon"

export const DetailsIcon = ({ iconName, text }) => {
    return (
        <div className="flex flex-col items-center gap-4 hover:mx-4">
            <Icon iconName={iconName} />
            <h1 className="text-2xl font-bold ">{text}</h1>
        </div>
    )
}

