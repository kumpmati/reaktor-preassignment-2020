import React from 'react';
import {v4 as uuid} from 'uuid';

function PackageView(props) {

    const packageList = props.data.package.sort();
    return (
    <div id="package_view">
        <h1>Packages:</h1>
        {packageList.map(packageName => {
            return <li key={uuid()} className="package-link"><a href={"/"+packageName}>{packageName}</a></li>
        })}
    </div>
    );
}

export default PackageView;