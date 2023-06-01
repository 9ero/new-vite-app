import styles from './VideoList.module.css'
const VideoList = ({ title, children }) => (
	<div className={styles.wrapper}>
		<h1>{title}</h1>
		{children || <p>No hay ni mergas</p>}
	</div>
)
export default VideoList
