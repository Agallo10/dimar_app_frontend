import { Route, Routes } from "react-router-dom"
import { DimarPage } from "../pages/DimarPage"
import { IndexPage } from "../pages/IndexPage"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/Map" element={<DimarPage />} />
    </Routes>
  )
}
