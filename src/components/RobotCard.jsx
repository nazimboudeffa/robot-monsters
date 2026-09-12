import { TYPE_COLORS } from '../data/robots.js'

export default function RobotCard({ robot, onSelect }) {
  return (
    <button className="card" onClick={() => onSelect(robot)}>
      <div
        className="card-image"
        style={{ background: `radial-gradient(circle at 30% 30%, ${TYPE_COLORS[robot.types[0]]}55, #151a24 70%)` }}
      >
        <img src={robot.image} alt={robot.name} />
        <span className="card-id">n°{String(robot.id).padStart(3, '0')}</span>
      </div>
      <div className="card-body">
        <h3>{robot.name}</h3>
        <div className="types">
          {robot.types.map((t) => (
            <span key={t} className="type-badge" style={{ background: TYPE_COLORS[t] }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}