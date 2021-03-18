import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    });

    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> }
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> }
            />
        </div>
    )
}

export default ShopPage;
