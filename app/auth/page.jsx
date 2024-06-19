"use client"
import { useRouter } from "next/navigation"

const AuthPage = () => {
    const router = useRouter()
  return router.push("/auth/sign-in")
}

export default AuthPage