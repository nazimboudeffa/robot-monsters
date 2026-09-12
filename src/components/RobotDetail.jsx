import { TYPE_COLORS } from '../data/robots.js'

export default function RobotDetail({ robot, onClose, onShowList }) {
  const typeColor = TYPE_COLORS[robot.types[0]]

  return (
    <div className="overlay" onClick={onClose}>
      <div className="detail" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>
          ✕
        </button>

        <div
          className="detail-image"
          style={{ background: `radial-gradient(circle at 30% 30%, ${typeColor}55, #10151d 75%)` }}
        >
          <img src={robot.image} alt={robot.name} />
        </div>

        <div className="detail-body">
          <span className="card-id">n°{String(robot.id).padStart(3, '0')}</span>
          <h2>{robot.name}</h2>
          <div className="types">
            {robot.types.map((t) => (
              <span key={t} className="type-badge" style={{ background: TYPE_COLORS[t] }}>
                {t}
              </span>
            ))}
          </div>
          <p className="detail-desc">{robot.description}</p>
          <ul className="detail-stats">
            <li><span>Énergie</span><strong>100</strong></li>
            <li><span>Attaque</span><strong>65</strong></li>
            <li><span>Défense</span><strong>60</strong></li>
            <li><span>Vitesse</span><strong>80</strong></li>
          </ul>
          <div className="detail-nav">
            <button className="btn btn-ghost" onClick={onClose}>
              ← Retour
            </button>
            <button className="btn" style={{ background: typeColor }} onClick={onShowList}>
              Voir tous les robots →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}