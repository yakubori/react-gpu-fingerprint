import React, { useEffect } from "react"

export default ({dataHandler}: {dataHandler: Function}) => {
    let fingerPrint: React.RefObject<any> = React.createRef();

    const getFingerprint = () => {
        let renderer, vendor;
        const context = fingerPrint.current.getContext('webgl');
        const unpackData = context.getExtension("WEBGL_debug_renderer_info");
        if (unpackData != null) {
            renderer = context.getParameter(unpackData.UNMASKED_RENDERER_WEBGL);
            vendor = context.getParameter(unpackData.UNMASKED_VENDOR_WEBGL);
        }
        return {
            vendor,
            renderer,
            browser: {
                vendor: navigator.vendor,
                userAgent: navigator.userAgent,
                language: navigator.language,
                hardwareConcurrency: navigator.hardwareConcurrency,
            }
        }
    }

    useEffect(() => {
        dataHandler(getFingerprint())
    })

    return <canvas ref={fingerPrint} width={1} height={1} style={{display: 'none', width: '1px', height: '1px'}} />
}
