
export type SelectedContentTypes = {
    id?: any;
    session?: string;
    title?: string;
    poster_path?: string;
    backdrop_path?: string;
    name?: string;
    last_episode_to_air?: {
        episode_number: number;
        name: string;
        season_number: number;
    } | null;
    genres?: { id: number; name: string }[];
    adult?: boolean;
    release_date?: string;
    first_air_date?: string;
    vote_average?: number;
};

export type SetSelectedContentTypes = React.Dispatch<
    React.SetStateAction<SelectedContentTypes>
>;