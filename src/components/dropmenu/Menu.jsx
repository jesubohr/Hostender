import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Icon } from '../icon';

export default function DropMenu ({ icon, children }) {
    return (
        <Menu as="div" className="relative">
            <Menu.Button className="py-2 px-4 hover:bg-light dark:hover:bg-slate-600">
                <Icon icon={ icon } />
            </Menu.Button>
            <Transition
                as={ Fragment }
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Menu.Items as="ul" className="absolute bg-white dark:bg-dark border z-10">
                    {
                        [children]
                            .flat()
                            .filter(c => c)
                            .map((child, index) => {
                                return (
                                    <Menu.Item
                                        as="li"
                                        key={ index }
                                        className={
                                            ({ active }) => `py-2 px-4 hover:bg-light dark:hover:bg-slate-600 ${active ? 'bg-light dark:bg-slate-600' : ''} cursor-pointer`
                                        }
                                    >
                                        { child }
                                    </Menu.Item>
                                );
                            })
                    }
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
