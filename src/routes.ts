import ReactQuery from "./routes/playgrounds/ReactQuery";

interface Route {
    to: string;
    label: string;
    description?: string;
    Com: any;
};

export default [
    {
        to: '/react-query',
        label: 'React Query',
        description: 'A few experiments with the react-query library.',
        Com: ReactQuery
    }
] as Route[];