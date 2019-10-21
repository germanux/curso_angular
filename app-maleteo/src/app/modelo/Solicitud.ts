export class Solicitud {

    constructor(
        private nombre: string, 
        private email: string,
        private horario: string,
        private ciudad: string) {
    }
    public getNombre(): string {
        return this.nombre;
    }
}