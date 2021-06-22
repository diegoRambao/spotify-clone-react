import { Navbar } from 'components/organisms/Navbar'
import styled from 'styled-components'

const Main = styled.main`
    margin-top: 11vh;
    margin-bottom: 4rem;
`
export function AppLayout ({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Main>{children}</Main>
    </>
  )
}
