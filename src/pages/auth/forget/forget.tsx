import { Button } from "@/components/ui/button"
import './Forget.css'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRedirect } from "@/hooks/useRedirect"

type FormData = {
    email: string
}


function Forget() {

    const { register, handleSubmit } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log("email:", data)
    }

      const redirect = useRedirect()

    return (
        <Card className="w-full  max-w-3xl ">
            <div className="w-full justify-center ">
             <img src="./logo.svg" alt="Some textual description of foo.png" />
            </div>
            <div className=" flex flex-col w-full  justify-center gap-6">
                <CardHeader className="gap-3 text-justify">
                    <CardTitle>¿Se te olvido la contraseña?</CardTitle>
                    <CardDescription className=" flex text-justify">
                        No te preocupes solo Ingresa el email de tu cuenta y te enviaremos un correo para restablecer tu contraseña
                    </CardDescription>

                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="flex flex-col gap-6 w-full">

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="jinitd@example.com"
                                    {...register("email", { required: "El email es requerido" })}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Button type="submit" className="w-full">
                                    Enviar
                                </Button>
                                <Button variant="outline" className="w-full" onClick={() => redirect("/login")}>
                                    Regresar
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </div>
        </Card>
    )
}

export default Forget