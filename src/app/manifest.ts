import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Elite City - التوريد والخدمات المتكاملة",
        short_name: "Elite City",
        description:
            "شركة سعودية رائدة متعددة القطاعات في التوريد والخدمات المتكاملة",
        start_url: "/",
        display: "standalone",
        background_color: "#0A1628",
        theme_color: "#C8A23A",
        dir: "rtl",
        lang: "ar",
        icons: [
            {
                src: "/icon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
}
