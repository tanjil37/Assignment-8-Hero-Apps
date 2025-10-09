import React from 'react';
import useApps from '../Hooks/useApps';


const Apps = () => {
    const {allApps} = useApps()
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {appsData.map((apps) => (
                <AppCard key={apps.id} apps={apps}></AppCard>
              ))}
            </div>
    );
};

export default Apps;