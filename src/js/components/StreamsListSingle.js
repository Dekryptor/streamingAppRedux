import React, { PropTypes } from 'react';
import Radium from 'radium';
import { GridTile } from 'material-ui/GridList'; // http://www.material-ui.com/#/components/grid-list
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
/*>>>>>>=============================================<<<<<<*/

const styles = {
    views: {
        color: 'white',
        paddingRight: '25px',
        paddingLeft: '5px'
    }
};

const StreamsListSingle = (props) => {
    const { preview, game, channel, viewers } = props;
    const { name } = channel;
    return (
        <GridTile
            titleBackground="linear-gradient(
                to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%
            )"
            title={name}
            subtitle={<span>play <b>{game}</b></span>}
            actionIcon={
                <div>
                    <RemoveRedEye color="white"/>
                    <span style={styles.views}>{viewers}</span>
                </div>
            }>
            <img src={preview.medium} alt={name}/>
        </GridTile>
    );
};

//StreamsListSingle.propTypes = {
//    const { streams } = this.props,
//    streams: PropTypes.array.isRequired
//};

export default Radium(StreamsListSingle);
