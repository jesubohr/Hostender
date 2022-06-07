import { Icon } from "@block/icon";
import { Button } from "@block/button";

export default function Paginate ({ maxPage, page, setPage, prevPage, nextPage }) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 text-lg">
            <Button className="gap-2" onClick={ prevPage }>
                <Icon icon="arrow-left" />
                Previous
            </Button>
            <ul className="flex gap-2 sm:gap-3 h-fit">
                {
                    Array.from({ length: maxPage }, (_, i) => {
                        return (
                            <li
                                key={ i }
                                tabIndex="0"
                                onClick={ () => setPage(i + 1) }
                                className={ "flex justify-center items-center w-8 h-8 border-2 border-black/40 rounded-md text-center tabular-nums cursor-pointer " + (i + 1 === page ? "bg-main/10 text-main border-main font-bold" : "") }
                            >
                                { i + 1 }
                            </li>
                        );
                    })
                }
            </ul>
            <Button className="gap-2" onClick={ nextPage }>
                Next
                <Icon icon="arrow-right" />
            </Button>
        </div>
    );
}
