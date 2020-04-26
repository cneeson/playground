import React from 'react';
import { useQuery } from 'react-query'
import Box from '../../layout/Box';
import { posts } from '../../../utils/services/mockApi';
import Pre from '../../Pre';

const ReactQuery = () => {
    const data = useQuery('posts', posts)

    return (
        <Box
            maxWidth='600px'
            margin='0 auto'
            overflow='auto'
            mt={5}
        >
            <Pre>{JSON.stringify(data, undefined, 2)}</Pre>
        </Box>
    );
};

export default ReactQuery;
