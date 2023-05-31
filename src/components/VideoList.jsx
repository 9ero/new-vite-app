const VideoList = ({ title, children }) => (
	<div>
		<h1>{title}</h1>
		{children || <p>No hay ni mergas</p>}
	</div>
)
export default VideoList
