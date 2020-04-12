import TestPlayground from "./routes/playgrounds/TestPlayground";

interface Route {
    to: string;
    label: string;
    Com: any;
};

export default <Route[]>[
    {
        to: '/test-playground',
        label: 'Test Playground',
        Com: TestPlayground
    }
];