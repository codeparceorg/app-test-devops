import { Button } from "@/components/ui/button"
import './Login.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRedirect } from "@/hooks/useRedirect"
import { useForm } from "react-hook-form"

type FormData = {
  email: string
  password: string
}


function Login() {

  const { register, handleSubmit} = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log("Login:", data)
  }

  const redirect = useRedirect()

  return (
    <Card className="w-full  max-w-3xl ">
      <div className="w-full justify-center ">
        <img src="./logo.svg" alt="Some textual description of foo.png" />
      </div>
      <div className=" flex  flex-col w-full  justify-center">
        <CardHeader>
          <CardTitle>Inicia sesion</CardTitle>
          <CardDescription>
            Ingresa con tus credenciales
          </CardDescription>

        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-6 w-full">

              <div className="flex flex-col  gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jinitd@example.com"
                  required
                  {...register("email", { required: "El email es requerido" })}
                />
              </div>
              <div className="flex flex-col  gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <button className="ml-auto inline-block underline-offset-4 hover:underline forgot-link"
                    onClick={() => redirect("/forget")}>¿Se te olvido la contraseña?</button>
                </div>
                <Input id="password" type="password" required placeholder="•••••••••"
                  {...register("password", {
                    required: "La contraseña es requerida",
                    minLength: {
                      value: 6,
                      message: "Debe tener al menos 6 caracteres",
                    },
                  })} />
              </div>
              <div className="flex flex-row gap-0.5">
                <Button type="submit" className="w-1/2">
                  Iniciar
                </Button>
                <Button variant="outline" className="w-1/2" onClick={() => redirect("/signup")}>
                  Registrarse
                </Button>
              </div>
            </div>

          </form>
        </CardContent>
      </div>

    </Card>

  )
}
export default Login