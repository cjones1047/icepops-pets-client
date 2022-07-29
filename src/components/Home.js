import PetsIndex from "./Pets/PetsIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>See the pets:</h2>
			<PetsIndex />
		</>
	)
}

export default Home
