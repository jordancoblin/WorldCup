

$(document).ready( function() {
	var Neymar = 4; $('#pNeymar').html(Neymar);
	var Oscar = 3;$('#pOscar').html(Oscar);
	var Cesar = 2;$('#pCesar').html(Cesar);
	var Balotelli = 2; $('#pBalotelli').html(Balotelli);
	var Marchisio = 2; $('#pMarchisio').html(Marchisio);
	var Ronaldo = 1; $('#pRonaldo').html(Ronaldo);
	var Messi = 4; $('#pMessi').html(Messi);
	var Casillas = 0; $('#pCasillas').html(Casillas);
	var Neuer = 2; $('#pNeuer').html(Neuer);
	var Kompany = 1; $('#pKompany').html(Kompany);
	var Varane = 1; $('#pVarane').html(Varane);
	var Ramos = 0; $('#pRamos').html(Ramos);
	var Pique = 0; $('#pPique').html(Pique);
	var Marcelo = 1; $('#pMarcelo').html(Marcelo);
	var TSilva = 1; $('#pTSilva').html(TSilva);
	var Costa = 0; $('#pCosta').html(Costa);
	var Ozil = 0; $('#pOzil').html(Ozil);
	var Schweinsteiger = 0; $('#pSchweinsteiger').html(Schweinsteiger);
	var Xavi = 0; $('#pXavi').html(Xavi);
	var Iniesta = 0; $('#pIniesta').html(Iniesta);
	var DeBruyne = 1; $('#pDeBruyne').html(DeBruyne);
	var DiMaria = 0; $('#pDiMaria').html(DiMaria);
	var DSilva = 0; $('#pDSilva').html(DSilva);
	var Hummels = 4; $('#pHummels').html(Hummels);
	var Luiz = 1; $('#pLuiz').html(Luiz);
	var Mertesacker = 1; $('#pMertesacker').html(Mertesacker);
	var Toure = 0; $('#pToure').html(Toure);
	var Pirlo = 0; $('#pPirlo').html(Pirlo);
	var Fabregas = 0; $('#pFabregas').html(Fabregas);
	var Chiellini = 0; $('#pChiellini').html(Chiellini);
	var Alba = 0; $('#pAlba').html(Alba);
	var Alves = 1; $('#pAlves').html(Alves);
	var Evra = 1; $('#pEvra').html(Evra);
	var Villa = 0; $('#pVilla').html(Villa);
	var Lahm = 0; $('#pLahm').html(Lahm);
	var Muller = 7; $('#pMuller').html(Muller);
	var Benzema = 8; $('#pBenzema').html(Benzema);
	
	
	var Pat = Neymar + Messi + DiMaria + Ozil + Oscar + DSilva +
	Alba + Varane + Ramos + Alves + Cesar;
	
	var Shonah = Neymar + Messi + Ozil + Schweinsteiger + Iniesta + DSilva +
	Luiz + Pique + Hummels + Alves + Neuer;
	
	var Darnel = Villa + Balotelli + DiMaria + Xavi + Schweinsteiger + Iniesta +
	Hummels + Mertesacker + Pique + Luiz + Neuer;

	var Margit = Muller + Benzema + DiMaria + Lahm + Toure + Pirlo + TSilva +
	Kompany + Pique + Alves + Cesar - 1;

	var Nishi = Neymar + Ronaldo + Ozil + Fabregas + Schweinsteiger + Oscar +
	Marcelo + Chiellini + Ramos + Alves + Casillas;
	
	var TO = Costa + Messi + Ozil + Marchisio + Schweinsteiger + Oscar +
	Marcelo + TSilva + Ramos + Alves + Casillas;
	
	var Connor = Neymar + Messi + DiMaria + Ozil + Schweinsteiger + Iniesta +
	Hummels + Kompany + Ramos + Alves + Casillas;
	
	var Alex = Neymar + Messi + DiMaria + Ozil + Xavi + Iniesta +
	Evra + Mertesacker + Ramos + Alves + Casillas;
	
	var Jordan = Neymar + Messi + DiMaria + DeBruyne + Oscar + DSilva +
	Marcelo + Varane + Ramos + Hummels + Cesar;
	
	$('#pPat').html(Pat);
	$('#pDarnel').html(Darnel);
	$('#pShonah').html(Shonah);
	$('#pMargit').html(Margit);
	$('#pNishi').html(Nishi);
	$('#pTO').html(TO);
	$('#pConnor').html(Connor);
	$('#pAlex').html(Alex);
	$('#pJordan').html(Jordan);
	$('table').tablesorter();
	}
);
