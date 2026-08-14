import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout({ atual, children }) {
  return (
    <>
      <Navbar atual={atual} />
      <main className="container conteudo">{children}</main>
      <Footer />
    </>
  )
}
