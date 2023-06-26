import { SafeHtml } from "@angular/platform-browser"

export interface Social {
    mail: String,
    profiles: Array<profile>
};

interface profile {
    href: string,
    label: string,
    svg: SafeHtml
};