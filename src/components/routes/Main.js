import React from 'react';

import Button from '../layout/Button';
import Meme from '../Meme';
import MemeBuilder from '../MemeBuilder';
import MemeFinished from '../MemeFinished';
import Spinner from '../layout/Spinner'

const Main = (props) => {

    let memeList = null;
    if (props.selectTempClick) {
        memeList = (
            <div style={{ backgroundColor: 'rgb(0,0,0,0.6)', color:'whitesmoke', borderRadius: '20px', margin: '10px', padding: '10px', height: '450px', overflow: 'scroll', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', boxShadow: '0px 5px 14px 10px rgba(0,0,0,0.4)' }}>
                {props.memes.map(meme => (
                    <Meme selectTemp={props.selectTemp} key={meme.id} memes={meme} />
                ))}
            </div>
        );
    }
    if (props.loader) {
        memeList = <Spinner />
    }


    return (
        <div style={{ margin: 'auto', width: '90%', textAlign: 'center', }}>
            <Button click={props.click} title='Select a template' text='Select Template' />
            {memeList}
            {props.selected && !props.finished ? <MemeBuilder finishMeme={props.finishMeme} bottomTextVal={props.onBottonChange} topTextVal={props.onTopChange} topText={props.topText} bottomText={props.bottomText} title={props.selected.name} url={props.selected.url} /> : ''}
            {props.finished ? <MemeFinished finishedUrl={props.finished.url} finishedPageUrl={props.finished.page_url} /> : ''}
        </div>
    )
}

export default Main
