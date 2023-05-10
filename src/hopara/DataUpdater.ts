import { Row } from "./Row";

export interface DataUpdater {
    name: string;
    source: string;
    updater: (newRow: Row, oldRow: Row, diff: Partial<Row>) => Promise<void>;
}