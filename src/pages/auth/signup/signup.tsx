import { Button } from "@/components/ui/button"
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
    name: string
    age: number
    city: string
}

function Signup() {
    const { register, handleSubmit } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log("sign:", data)
    }

    const redirect = useRedirect()


    return (
        <Card className="w-full  max-w-3xl ">
            <div className="w-full justify-center ">
                <img src="./logo.svg" alt="Some textual description of foo.png" />
            </div>
            <div className=" flex  flex-col w-full  text-justify gap-2">
                <CardHeader>
                    <CardTitle>Registrate en la APP</CardTitle>
                    <CardDescription>
                        Con pocos datos puedes acceder de inmediato en la aplicacion
                    </CardDescription>

                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-row  gap-2">
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
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" required placeholder="•••••••••"
                                        {...register("password", {
                                            required: "La contraseña es requerida",
                                            minLength: {
                                                value: 6,
                                                message: "Debe tener al menos 6 caracteres",
                                            },
                                        })} />
                                </div>
                            </div>
                            <div className="flex flex-col  gap-2">
                                <Label >Nombres y Apellidos</Label>
                                <Input
                                    id="name"
                                    placeholder="jinitd dmaind"
                                    required
                                    {...register("name", { required: "los nombres es requerido" })}
                                />
                            </div>

                            <div className="flex flex-row  gap-2">
                                <div className="flex flex-col  gap-2 w-full">
                                    <Label >Ciudad</Label>
                                    <Input
                                        id="city"
                                        placeholder="Guayaquil"
                                        required
                                        {...register("city", { required: "La city es requerido" })}
                                    />
                                </div>

                                <div className="flex flex-col  gap-2 w-1/3">
                                    <Label >edad</Label>
                                    <Input
                                        id="nombres"
                                        placeholder="25"
                                        type="number"
                                        required
                                        {...register("email", { required: "El email es requerido" })}
                                    />
                                </div>

                            </div>
                            <div className="flex flex-row gap-0.5">
                                <Button type="submit" className="w-1/2">
                                    Registrar
                                </Button>
                                <Button variant="outline" className="w-1/2" onClick={() => redirect("/login")}>
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
export default Signup