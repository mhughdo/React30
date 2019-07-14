import React from 'react'
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollection} from '../../redux/shop/shop.selectors'
import './collection.styles.scss'

const CollectionPage = ({match}) => <div className='collection-page' />

const mapStateToProps = (state, owenProps) => ({
    collection: selectCollection(owenProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
