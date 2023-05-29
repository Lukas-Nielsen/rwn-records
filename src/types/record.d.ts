export interface record {
	name: string;
	year: number;
	time: string;
}

export interface age {
	"50"?: record;
	"100": record;
	"200": record;
	"400"?: record;
	"800"?: record;
	"1500"?: record;
	"2500"?: record;
	"5000"?: record;
	"10000"?: record;
	"25000"?: record;
}

export interface stroke {
	"8": age;
	"9": age;
	"10": age;
	"11": age;
	"12": age;
	"13": age;
	"14": age;
	"15": age;
	"16": age;
	open: age;
}

export interface records {
	F: stroke;
	B: stroke;
	R: stroke;
	S: stroke;
	L: stroke;
}
