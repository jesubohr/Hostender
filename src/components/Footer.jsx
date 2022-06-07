import { Icon } from "./icon";

export default function Footer () {
    return (
        <footer className="flex justify-between items-center px-6 sm:px-16 w-full h-20 bg-main border-t-4 border-black/10 sm:text-lg">
            <p className="grow">
                All Rights Reserved © 2022
            </p>
            <div className="flex items-center gap-1 sm:gap-5">
                <a href="https://www.facebook.com/hostender" target="_blank" className="text-black/60 hover:text-black/100">
                    <Icon icon="facebook" size="30" />
                </a>
                <a href="https://www.instagram.com/hostender" target="_blank" className="text-black/60 hover:text-black/100">
                    <Icon icon="instagram" size="30" />
                </a>
                <a href="https://www.twitter.com/hostender" target="_blank" className="text-black/60 hover:text-black/100">
                    <Icon icon="twitter" size="30" />
                </a>
            </div>
        </footer>
    );
}
