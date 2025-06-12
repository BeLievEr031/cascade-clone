import clsx from "clsx";
import { useState } from "react";

interface Prop {
    buttonLable: string;
    popoverHeading: string;
    popoverDescription: string;
}
function PopoverBtn({ buttonLable, popoverDescription, popoverHeading }: Prop) {
    const [visible, setVisible] = useState(false);

    const showPopover = () => {
        setVisible(true); // delay in ms
    };

    const hidePopover = () => {
        setVisible(false);
    };
    return (
        <button className="button button-primary cursor-pointer" data-state="closed"
            onMouseEnter={showPopover}
            onMouseLeave={hidePopover}
        >
            {buttonLable}
            <div className={clsx("absolute bottom-0 translate-y-[102%] z-50 w-64 rounded-md border-t border-t-neutral-300 p-4 text-popover-foreground shadow-md outline-none bg-white mt-1 opacity-0 transition-all duration-300 delay-75", {
                "opacity-100": visible
            })}>
                <div className="font-semibold text-left text-[17px] p-2 border-b border-neutral-200">
                    {popoverHeading}
                </div>
                <p className="text-sm p-2 text-left text-neutral-600">
                    {popoverDescription}
                </p>
            </div>
        </button>
    )
}

export default PopoverBtn