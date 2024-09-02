import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div>
      <header class="primary-header container group">

        <h1 class="logo">
          <a href="index.html">Ammaha</a>
        </h1>

        <h3 class="tagline"></h3>

          <nav class="nav primary-nav">
            <ul>
              <li><a href="mailto:contact@ammaha.com">contact</a></li>
            </ul>
          </nav>
      </header>
      <section class="hero container" style="margin-top: 210px;">

        <object data="/static/images/home/logo.svg" type="image/svg+xml">
          <img src="/static/images/home/logo.png" alt="Ammaha logo"/>
        </object>

      </section>
    </div>
  )
}
)

export default app
