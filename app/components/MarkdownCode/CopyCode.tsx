import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import check from "@/app/assets/icons/check.svg";
import copy from "@/app/assets/icons/copy.svg";
import Image from "next/image";

interface props {
    textCopied: string
}

const CopyCode: React.FC<props> = ({textCopied}) => {
    const [isCopy, setIsCopy] = useState<boolean>(false);
    return  isCopy
    ? <Image className="absolute right-3 top-2" src={check} width="20" height="20" alt=""/>
    :
    <button
        className="absolute right-3 top-2"
    >
        <CopyToClipboard
        text={textCopied}
        onCopy={ async () => {
            setIsCopy(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsCopy(false);
        }}
        >
        <Image src={copy} width="20" height="20" alt=""/>
        </CopyToClipboard>
    </button>
}

export default React.memo(CopyCode)