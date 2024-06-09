import React from 'react'
import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'

const Searchbox = () => {
    return (
        <div className='searchbox-container'>
            <div className="w-full max-w-md px-4">
                <Field>
                    <Label className="text-sm/6 font-medium font-bold">Destination</Label>
                    <Input
                        className={clsx(
                            'block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        placeholder='What is your destination?'
                    />
                </Field>
            </div>
        </div>
    )
}

export default Searchbox