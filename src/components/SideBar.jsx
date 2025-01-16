export default function SideBar(props) {
    const { handleToggleModal, data } = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h1>Facts about Mars</h1>
                <h2>2010-2024</h2>
                <h3>
                    <ul>
                        <li>Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to explore the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.</li>
                        <li>The current Martian climate is regulated by seasonal changes of carbon dioxide ice caps, atmospheric movement of large amounts of dust, and water vapor exchange between the surface and atmosphere. One of Mars' most dynamic weather patterns is the generation of dust storms, generally in the southern spring and summer. These storms can grow to encompass the whole planet. Understanding how these storms develop and grow is one science goal.</li>
                        <li>How did Mars become the planet we see today? What accounts for the differences and similarities between Earth and Mars? Studying Mars' geology helps answer these questions.  We work to understand the relative roles of wind, water, volcanism, tectonics, cratering, and other processes in forming and modifying the Martian surface. For example, Mars hosts incredibly large volcanoes, which can be 10 to 100 times larger than those on Earth. One reason for this difference is that the Mars crust doesn't move the way it does on Earth, so the total volume of lava piles up into one very large volcano.</li>
                    </ul>

                </h3>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            
            </div>
        </div>
    )
}