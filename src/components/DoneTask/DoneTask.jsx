
const DoneTask = ({name, id, updateTask}) => {
  return (
    <>
        <li>
            <button onClick={() => updateTask(id)}>{name}</button>
        </li>
    </>
  )
}

export default DoneTask