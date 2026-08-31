import "@/styles/ShortcutMenu.css"
import { shortcuts } from "@/data"

function ShortcutMenu() {
  return (
    <section className="shortcut-section">

      <div className="shortcut-container">

        {shortcuts.map((item) => (
          <div className="shortcut-item" key={item.id}>

            <div className="shortcut-image">
              <img src={item.image} alt={item.title} />
            </div>

            <p className="shortcut-title">{item.title}</p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default ShortcutMenu