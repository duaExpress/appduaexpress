import { ExpedienteVerificacion } from './expedienteVerificacion';

import { ExpedienteTipo } from './global.enum';
import { ExpedienteSubTipo } from './global.enum';

export class Expediente{

	//Todos
	id: string;
	numExpediente: string;
	referencia: string;
	numConocimiento: string;
	empresa: string;
	fecha: string;

	ExpedienteTipo: ExpedienteTipo;
	ExpedienteSubTipo: ExpedienteSubTipo;

	//Algunos
	impresionEtiq: boolean;
	bultos: number;
	peso: number;
	partida: string ;

	//Despacho aereo exportación
	fechaVuelo: string;
	mercanciaEtiq: boolean;
	llevaEur1: boolean;
	paraduanero: boolean;
	soivre: boolean;
	cites: boolean;
	fito: boolean;
	sanidad: boolean;
	sanidadAnimal: boolean;
	farmacia: boolean;
	dae: boolean;

	//Recogida Documentación
	almacenRecogida: string;

	//Despacho aereo importación
	numPrecinto: string;
	destinoMercancia: string;
	cpDestino: number;

	//DAE
	numDAE: string;

	//Revisión Física
	numDUA: string

	//Despacho marítimo export
	numFactura: string;
	closingTime: string;
	fechaSalida: string;
	exportador: string;
	buqueFecha: string;
	carpetaFecha: string;
	bandera: string;
	ubicacion: string;
	destino: string;
	consignatario: string;
	contenedores: string;
  mercancia: string;

  instrucciones: string;

	ExpedienteVerificacion: ExpedienteVerificacion;

}
