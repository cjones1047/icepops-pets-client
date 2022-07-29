import PetsIndex from "./pets/PetsIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props

	return (
		<>
			<h2>See the pets:</h2>
			<PetsIndex msgAlert={ msgAlert }/>
		</>
	)
}

export default Home
