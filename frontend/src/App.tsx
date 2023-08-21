import Layout from "./components/layout/Layout"

import QueryProvider from "./providers/QueryProvider"
import { QueryClient } from "@tanstack/react-query"

import "./App.sass"

const targetQueryClient = new QueryClient()

const App = () => {
  return (
    <QueryProvider
      client={targetQueryClient}>
      <Layout />
    </QueryProvider>
  )
}

export default App