export default function Main(props) {
    const { data } = props
    return (
        <div className="imgContainer">
            <img src="mars.png" alt={data.title || 'mars-img'} className="bgImage" />
        </div>
    )
}