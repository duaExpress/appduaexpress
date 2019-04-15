export enum Profile {
  User = 'U',
  Administrator = 'A',
  Superadministrator = 'S'
}

export enum ExpedienteTipo {
  Maritimo = 'M',
  Aereo = 'A'
}

export enum ExpedienteSubTipo {
  //Aereo
  DocEntega = 'DE',
  DespachoAereoExportacion = 'AEX',
  DespachoAereoImportacion = "AIM",
  DocRecogida = "DR",
  DAE = "DAE",
  RevisionParaduanera = "RP",
  //Marítimo
  DespachoMaritimoExportacion = "MEX"
}
