import React, { useRef, FC } from "react";
import contes from "./contes";

interface ContstStateProps {
    cccc: React.ReactNode;
}

const ContstState: FC<ContstStateProps> = ({ cccc }) => {
    const EkAlert = useRef<HTMLDivElement>(null);

    return (
        <contes.Provider value={{ EkAlert }}>
            {cccc}
        </contes.Provider>
    );
};

export default ContstState;
