import PetsIndex from "./shared/Pets/PetsIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<PetsIndex />
		</>
	)
}

export default Home
