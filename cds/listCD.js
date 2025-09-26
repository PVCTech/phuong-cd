function cloneBaiHat(bh) {
    return new BaiHat(JSON.parse(JSON.stringify(bh)));
}

var allCD = [];

///////////////////////////////////////////////
var cdHangNgay = [];
for (let i = 2; i < listTruongTranBichSan.length; i++) 
{
    cdHangNgay.push(cloneBaiHat(listTruongTranBichSan[i]));
}

for (let i = 0; i < cdHangNgay.length; i++) 
{
    cdHangNgay[i].trackId = i;
    cdHangNgay[i].mediaId = `music_${i}`;
}
allCD.push(cdHangNgay);




////////////////////////////////////////////////
var cdChaoCo = [];
listNhacLe.forEach(e =>
{
    cdChaoCo.push(cloneBaiHat(e));
});

for (let i = 0; i < cdChaoCo.length; i++) 
{
    cdChaoCo[i].trackId = i;
    cdChaoCo[i].mediaId = `music_${i}`;
}
allCD.push(cdChaoCo);
