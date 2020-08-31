import React from 'react';
import FilmCard from './filmcard'

export default class FilmList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='type-name'>{this.props.title}</div>
                <div className='film-list'>
                    <FilmCard movieimageurl='https://i.pinimg.com/originals/45/1c/97/451c97801dacffe00eb7314e843ec5e3.jpg' moviename='Captain America: Civil War' movierate='100%' moviedate='Jul 14, 2020' movietype='Action, Adventure, Comedy, Fantasy, Sciene Fiction'></FilmCard>
                    <FilmCard movieimageurl='https://i.pinimg.com/originals/45/1c/97/451c97801dacffe00eb7314e843ec5e3.jpg' moviename='Captain America: Civil War' movierate='100%' moviedate='Jul 14, 2020' movietype='Action, Adventure, Comedy, Fantasy, Sciene Fiction'></FilmCard>
                    <FilmCard movieimageurl='https://i.pinimg.com/originals/45/1c/97/451c97801dacffe00eb7314e843ec5e3.jpg' moviename='Captain America: Civil War' movierate='100%' moviedate='Jul 14, 2020' movietype='Action, Adventure, Comedy, Fantasy, Sciene Fiction'></FilmCard>
                    <FilmCard movieimageurl='https://i.pinimg.com/originals/45/1c/97/451c97801dacffe00eb7314e843ec5e3.jpg' moviename='Captain America: Civil War' movierate='100%' moviedate='Jul 14, 2020' movietype='Action, Adventure, Comedy, Fantasy, Sciene Fiction'></FilmCard>
                    <FilmCard movieimageurl='https://i.pinimg.com/originals/45/1c/97/451c97801dacffe00eb7314e843ec5e3.jpg' moviename='Captain America: Civil War' movierate='100%' moviedate='Jul 14, 2020' movietype='Action, Adventure, Comedy, Fantasy, Sciene Fiction'></FilmCard>
                    <FilmCard movieimageurl='https://i.pinimg.com/originals/45/1c/97/451c97801dacffe00eb7314e843ec5e3.jpg' moviename='Captain America: Civil War' movierate='100%' moviedate='Jul 14, 2020' movietype='Action, Adventure, Comedy, Fantasy, Sciene Fiction'></FilmCard>
                    <FilmCard movieimageurl='https://i.pinimg.com/originals/45/1c/97/451c97801dacffe00eb7314e843ec5e3.jpg' moviename='Captain America: Civil War' movierate='100%' moviedate='Jul 14, 2020' movietype='Action, Adventure, Comedy, Fantasy, Sciene Fiction'></FilmCard>
                </div>
            </div>
        )
    }
}