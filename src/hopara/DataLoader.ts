import { Row } from "./Row";

export interface DataLoader {
    query: string;
    source: string;
    loader: (filterSet: {filters: any[], limit: number, offset: number}) => Promise<Row[]>;
}