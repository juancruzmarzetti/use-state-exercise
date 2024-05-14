
const PendientTask = ({name, id, updateTask}) => {
  return (
    <>
        <li>
            <button onClick={() => updateTask(id)}>{name}</button>
        </li>
    </>
  )
}

export default PendientTask