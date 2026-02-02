import { Button } from "@/components/ui/button"
import { useRedirect } from "@/hooks/useRedirect"

function About() {

  const redirect = useRedirect()
    return (
        <div className="flex flex-row gap-2">
            <Button  className="w-1/2" onClick={() => redirect("/login")}>
                Iniciar
            </Button>
            <Button variant="outline" className="w-1/2" onClick={() => redirect("/signup")}>
                Registrarse
            </Button>
        </div>
    )
}
export default About