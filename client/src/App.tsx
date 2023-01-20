import { Container, Header, Title } from "@mantine/core"
import { WalletConnect, WalletInstallation } from "./components"

function App() {
  const { ethereum } = window as any

  return (
    <div className="App">
      <Header height={60} px='xl' sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Title>Infinite tower</Title>
        <WalletConnect />
      </Header>
      {!ethereum ? (
        <Container p='lg'>
          <WalletInstallation />
        </Container>
      ) : null}
    </div>
  )
}

export default App
