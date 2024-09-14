// const WorkoutDetails = ( workout ) => {
//     return(<div className="workout-details">
//         <h4>{workout.title}</h4>
//         <p><strong>Load (kg): </strong>{workout.load}</p>
//         <p><strong>Reps :</strong>{workout.reps}</p>
//         <p>{workout.createdAt}</p>
//     </div>)
// }


// export default WorkoutDetails
const WorkoutDetails = ({ workout }) => {  // Destructure the workout prop
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps :</strong>{workout.reps}</p>
            <p>{new Date(workout.createdAt).toLocaleString()}</p> {/* Optional: Formatting date */}
        </div>
    )
}

export default WorkoutDetails