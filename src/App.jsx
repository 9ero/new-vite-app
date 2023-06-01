// import { Fragment } from 'react'
import style from './App.module.css'
import Video from './components/Video'
import VideoList from './components/VideoList'
const App = () => (
	<div className={style.container}>
		<VideoList  title={'Lista de videos'}>
			<Video
				title='Titulo'
				duration={2763}
				uploadDate={new Date(2023, 5, 31)}
				description='Esta es la descripcion del video'
			/>
			<Video
				title='Titulo'
				duration={2763}
				uploadDate={new Date(2023, 5, 31)}
				description='Esta es la descripcion del video 2'
			/>
		</VideoList>
        <VideoList  title='Lista vacia'/>
	</div>
	
)
export default App

/* empty tag "<> </>" represents <Fragment> but requires to import Fragment */
