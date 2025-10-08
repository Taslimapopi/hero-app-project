import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';

const Barchart = () => {

    const { id } = useParams();
  const { apps, loading } = useApps();

    return (
        <div>
            Barchart
        </div>
    );
};

export default Barchart;