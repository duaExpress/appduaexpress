
export class ExpedienteVerificacion{

  id: string;
	//Valor
	valorFactura: boolean;
	tipoDivisa: boolean;
	incoterm: boolean;
	descuentos: boolean;
	flete: boolean;
	seguro: boolean;
	adicion: boolean;

	//Iva
	mercanciaValor: boolean;
	cifEnEuros: boolean;
	arancel: boolean;
	impuestosEspecales: boolean;
	antidumping: boolean;
	otrosTributos: boolean;
	descarga: boolean;
	t3: boolean;
	serviciosExentos: boolean;
	transporteInterior: boolean;
	otraAdicion: boolean;
	baseIVA: boolean;
	importeGastosIVA: boolean;
	tipoImpositivo: boolean;
	recargoEquivalencia: boolean;
	pagarIVA: boolean;

	//Expediente
	textoCorrecto: boolean;
	importeSup6000: boolean;
	numAuth: boolean;
	firma: boolean;
	copiaAuth: boolean;
	origenMercancia: boolean;
	paisDestino: boolean;
	tipoCertificado: string;
}
