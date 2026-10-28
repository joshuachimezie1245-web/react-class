function Workshops() {
    return (
        <main className="container">
            <h1>Upcoming Workshop</h1>

            <div className="grid">
                <section className="card">
                    <h2>Intro To React</h2>
                    <p className="level">Beginner - 2 hours</p>
                    <p>Components, JSX and props, built from scratch</p>
                    <button className="btn btn-primary">Register</button>
                </section>

                <section className="card">
                    <h2>Reacrt State and Events</h2>
                    <p className="level">Beginner - 3 hours</p>
                    <p>Make your interface respond to click and typing...</p>
                    <button className="btn btn-primary">Register</button>
                </section>

                <section className="card">
                    <h2>Deploying React Apps</h2>
                    <p className="level">Intermediate - 1.5 hours</p>
                    <p>Put your Project Online with a live link</p>
                    <button className="btn btn-primary">Join wiatlist</button>
                </section>
            </div>

            <div className="actions">
                <button className="btn btn-outline">View all workshops</button>
            </div>
        </main >
    )
}
export default Workshops;