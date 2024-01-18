import { Cabecalho as CabecalhoEstilo } from './styles'
export type Props = {
  children?: string
  fontSize?: number
}
export const Cabecalhos = () => (
  <CabecalhoEstilo>
    <header>
      <h1>EBAC Jobs</h1>
    </header>
  </CabecalhoEstilo>
)
