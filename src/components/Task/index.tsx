export default function Task() {
  return (
    <li>
      <li>
        <div className="task">
          <div className="task-header">
            <h3>Task name</h3>
            <button className="delete">X</button>
          </div>
          <p>Task description</p>
          <p>End: 2021-09-30 23:59</p>
          <p>Tag: 🧓 Tag A</p>
        </div>
      </li>
    </li>
  )
}
