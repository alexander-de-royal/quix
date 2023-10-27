import {cn} from '@/lib/utils'
import {ReactNode} from 'react'
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
const MaxWidthWrapper = ({
                             className,
                             children,
                         }: {
    className?: string
    children: ReactNode
}) => {
    return (
        <div className={cn('mx-auto w-fill max-w-screen-xl px-2.5 md:px-20', className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper