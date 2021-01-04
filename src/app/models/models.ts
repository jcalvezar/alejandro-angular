export interface JCA_fecha {
	unix: number,
	nro: number,
	dia: string,
	color: string
};

export interface JCA_evento {
	hora: string,
	icono: string,
	titulo: string,
	texto: string,
	checked: boolean
};

export interface JCA_carta {
	icono: string,
	titulo: string,
	texto: string,
	cantidad: number
};