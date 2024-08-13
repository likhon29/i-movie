import clsx from "clsx";

export function cn(...inputs: any[]) {
    return clsx(...inputs);
}

export const makeImgUrl = (path?: string, type?: string, width?: string) => {
    if (path) {
        const url = `https://image.tmdb.org/t/p/${type ?? "w500"}/${path}`;
        return width ? `${url}?${width}` : url;
    }
    return "https://via.placeholder.com/500";
}