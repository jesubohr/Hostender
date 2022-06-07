import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Icon } from "@block/icon";

export default function ListBox ({ options, onOption }) {
    const [option, setOption] = useState(options[0]);

    return (
        <Listbox
            as="div"
            value={ option }
            onChange={ (value) => {
                setOption(value);
                onOption(value);
            } }
            className="relative grow text-lg"
        >
            <Listbox.Button className="flex justify-between py-2 px-4 w-full rounded-lg bg-main text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                <span className="grow">{ option }</span>
                <span className="pointer-events-none">
                    <Icon icon="caret" />
                </span>
            </Listbox.Button>
            <Transition
                as={ Fragment }
                enter="transition ease-out duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options className="absolute mt-1 max-h-80 w-full overflow-auto rounded-md bg-white py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30">
                    {
                        options.map((option, index) => (
                            <Listbox.Option
                                key={ index }
                                value={ option }
                                className={
                                    ({ active }) => `flex justify-between py-2 px-4 text-lg select-none ${active ? 'bg-light text-black' : 'text-dark'} cursor-pointer`
                                }
                            >
                                { ({ selected }) => (
                                    <>
                                        <span className={ `w-fit ${selected ? 'font-semibold' : 'font-normal'}` }>
                                            { option }
                                        </span>
                                        {
                                            selected
                                                ? (
                                                    <span className="flex items-center text-main">
                                                        <Icon icon="check" />
                                                    </span>
                                                ) : null
                                        }
                                    </>
                                ) }
                            </Listbox.Option>
                        ))
                    }
                </Listbox.Options>
            </Transition>
        </Listbox>
    );
}
