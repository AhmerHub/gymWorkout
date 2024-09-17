import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
// export default WorkoutDetails
const WorkoutDetails = ({ workout }) => {  // Destructure the workout prop
    const { dispatch } = useWorkoutsContext()

    const handleClick = async() => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps :</strong>{workout.reps}</p>
            <p>{new Date(workout.createdAt).toLocaleString()}</p> {/* Optional: Formatting date */}
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails