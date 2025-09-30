function cloneBaiHat(bh) 
{
    return new BaiHat(JSON.parse(JSON.stringify(bh)));
}

var allCD = [];

var cdNhacNen = [];
var cdChaoCo = []; //bao gồm nhạc lễ và nhạc nền
var cdNhacTruongLopEm = [];


///////////////////////////////////////////////
for (let i = 0; i < listTruongTranBichSan.length; i++) 
{
    cdNhacTruongLopEm.push(cloneBaiHat(listTruongTranBichSan[i]));
}

for (let i = 0; i < cdNhacTruongLopEm.length; i++) 
{
    cdNhacTruongLopEm[i].trackId = i;
    cdNhacTruongLopEm[i].mediaId = `music_${i}`;
}





////////////////////////////////////////////////
listNhacLe.forEach(e =>
{
    cdChaoCo.push(cloneBaiHat(e));
});

listNhacNen.forEach(e=>
{
    cdChaoCo.push(cloneBaiHat(e));
});

for (let i = 0; i < cdChaoCo.length; i++) 
{
    cdChaoCo[i].trackId = i;
    cdChaoCo[i].mediaId = `music_${i}`;
}

allCD.push(cdChaoCo);
allCD.push(cdNhacTruongLopEm);