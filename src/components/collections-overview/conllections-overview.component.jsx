import React from 'react'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collections-overview.styles.scss'
import {selectCollections} from '../../redux/shop/shop.selectors'

const CollectionsOverView = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id, ...rest}) => (
            <CollectionPreview key={id} {...rest} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionsOverView)
