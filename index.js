/*
* JANGAN UBAH-UBAH INFO!!!
* "JANGAN MODAL NAMA DOANG BRO!!!"
* SCRIPT BY ARIS187 ID
* JANGAN MODAL NAMA DOANG BOSQ
* HARGAILAH YG MEMBUAT SCRIPT INI BOSQ
* JANGAN UBAH-UBAH INFO!!!
* ARIS187 ID
* BOLEH UBAH TAPI KECUALI INFO!!!
*/
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]

const config = {
    A187: '*RIZKY BOT*',
    instagram: 'https://instagram.com/_rizkyfadilah8',
    nomer: 'wa.me/6282387804410',
    aktif: 'Tergantung Owner ON',
    youtube: 'Ga Punya Makasi.',
    whatsapp: 'https://chat.whatsapp.com/FROF0hmWUuwD4WKgcyIEH9',
    tanggal: `TANGGAL: ${moment().format('DD')} ${bulan} ${moment().format('YYYY')}`,
    waktu: time
}

const { Rzky, tanggal, waktu, instagram, whatsapp, youtube, nomer, aktif, ontime } = config

const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys")

const {
    help,
    menu1,
    menu2,
    menu3,
    info,
    donate,
    alay,
    artinama,
    corona,
    kbbi,
    downloadImage,
    igStalk,
    jodoh,
    jsholat,
    lirik,
    nulis,
    readTextInImage,
    pantun,
    quotes,
    searchYoutube,
    surah,
    tiktokdl,
    tweetdl,
    wiki,
    ytdl,
    bucin,
    cersex,
    cerpen,
    puisi1,
    puisi2,
    resep,
    namaninja,
    bitly,
    nekonime,
    cektanggal,
    chord,
    zodiak,
    fb,
    simi,
    wikien,
    spamsms,
    spamcall,
    spamgmail,
    covidcountry,
    infoanime,
    gay,
    ytmp3,
    ssweb,
    infogempa,
    indohot,
    loli,
    ttp,
    map,
    waifu
} = require('./lib')

const { animPict, cewePict, cowoPict } = require('./lib/pict')

const { exec } = require("child_process")

const client = new WAConnection()

const { decryptmedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const moment = require('moment-timezone')
const get = require('got')
const fetch = require('node-fetch')
const color = require('./lib/color')
const { spawn, exec } = require('child_process')
const nhentai = require('nhentai-js')
const { api } = require('nhentai-api')
const { liriklagu, quotemaker, randomnimek, fb, sleep, jadwaltv, ss } = require('./lib/functions')
const { help, snk, info, donate, readme, listchannel } = require('./lib/help')
const { stdout } = require('process')
const nsfw_ = json.parse(fs.readfilesync('./lib/nsfw.json'))
const welkom = json.parse(fs.readfilesync('./lib/welcome.json'))
const { removebgresult, removebackgroundfromimagebase64, removebackgroundfromimagefile } = require('remove.bg')

client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] QR code is ready, subscribe Aris187 ID`)
})

client.on('credentials-updated', () => {
   const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)

   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')

client.connect();

// client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log(`${time}: Bot by ig:@aditiaalfians`)

client.on('message-status-update', json => {
   const participant = json.participant ? ' (' + json.participant + ')' : ''
   console.log(`[ ${time} ] => bot by ig:@_sadboy.ig`)
})

client.on('message-new', async (m) => {
   const messageContent = m.message
   const text = m.message.conversation
   const messageType = Object.keys(messageContent)[0]

   const re = /[\#\!\@\/\?\%\$\.]/

   const value = text.split(' ').splice(1).join(' ')

   let id = m.key.remoteJid
   let imageMessage = m.message.imageMessage

   const prefix = messageType === 'imageMessage' ? imageMessage.caption.split(' ')[0].split(re)[1] : text.split(' ')[0].split(re)[1] // multiple prefix

   console.log(`[ ${time} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);

   switch (prefix) {
       case 'help':
           client.sendMessage(id, help.help(id, Rzky, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       case 'menu1':
           client.sendMessage(id, menu1.menu1(id, Rzky, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       case 'menu2':
           client.sendMessage(id, menu2.menu2(id, Rzky, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       case 'menu3':
           client.sendMessage(id, menu3.menu3(id, Rzky, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
      case 'donate':
           client.sendMessage(id, donate.donate(id, Rzky, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break          
      case 'info':
           client.sendMessage(id, info.info(id, Rzky, tanggal, waktu, whatsapp, youtube, instagram,aktif, nomer, ontime), MessageType.text)
           break             
       case 'nulis':
           nulis(value)
               .then(data => {
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, data, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'say':
           await client.sendMessage(id, value, MessageType.text)
           break
       case 'ytmp3':
           ytdl('mp3', value)
               .then(data => {
                   const { judul, size, hasil: link } = data
                   let hasil = `✅ Lagu Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${judul}\n\nUkuran audio: ${size}\n\nLink: ${link}`
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'ytmp4':
           ytdl('mp4', value)
               .then(data => {
                   const { judul, size, hasil: link } = data
                   let hasil = `✅ Video Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${judul}\n\nUkuran audio: ${size}\n\nLink: ${link}`
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'twt':
           tweetdl(value)
               .then(data => {
                    const { size, hasil: link } = data
                    let hasil = `✅ Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\nKlik link dibawah🗡️\n\nSize: ${size}\n\nLink: ${link}`
                    client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                    client.sendMessage(id, hasil ,MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'tiktok':
           tiktokdl(value)
               .then(data => {
                    const { url, nama, durasi, deskripsi } = data
                    let hasil = `✅ Berhasil!!! Silahkan klik link dibawah ini untuk mendownload hasilnya! \nKlik link dibawah🗡️\n\nJudul: ${deskripsi} \n\nDurasi: ${durasi}\n\nNama: ${nama}\n\nUrl: ${url}`;
                    client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'wiki':
           wiki(value)
               .then(data => {
                    const { hasil: res } = data
                    let hasil = `📝Menurut Wikipedia:\n\n${res}`
                    client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'sholat':
           jsholat(value)
               .then(data => {
                   const { Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha } = data
                   let hasil = `Jadwal sholat di *${value}* hari ini adalah\n\n⚡Imsyak : ${Imsyak}\n⚡Subuh : ${Subuh} WIB\n⚡Dzuhur : ${Dzuhur}WIB\n⚡Ashar : ${Ashar} WIB\n⚡Maghrib : ${Maghrib}\n⚡Isya : ${Isya} WIB\n⚡Tengah malam : ${Dhuha} WIB`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'quran':
           surah()
               .then(data => {
                   const re = /{(.*?)}/gi
                   const { acak, surat } = data

                   const keterangan = acak.id.ayat.replace(re, '')
                   const arText = acak.ar.teks
                   const idText = acak.id.teks
                   const surah= surat.nama

                   let hasil = `[${keterangan}]   ${arText}\n\n${idText}(QS.${surah}, Ayat ${keterangan})`;
                   client.sendMessage(id, hasil, MessageType.text);
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pantun':
           pantun()
               .then(data => {
                   client.sendMessage(id, data, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'covid':
           corona()
               .then(data => {
                   const { meninggal, sembuh, positif } = data
                   let hasil = `📌DATA WABAH COVID-19 TERBARU DI INDONESIA\n\n📍Positif ==> ${positif} \n📍Sembuh ==> ${sembuh} \n📍Meninggal ==> ${meninggal}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'quotes':
           quotes()
               .then(data => {
                   const { author, quotes } = data
                   let hasil = `_${quotes}_\n\n~${author}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'nama':
           artinama(value)
               .then(data => {
                   const { result: arti } = data
                   let hasil = `\nArti nama mu adalah\n\n***********************************\n\n       _${value}_ ${arti}\n\n***********************************`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pasangan':
           jodoh(value)
               .then(data => {
                   const { positif, negatif } = data
                   const nama = value.split(/[\&\-\/\+]/)
                   let hasil = `\nKecocokan jodoh\n\n************************************\n\nPasangan 1: *${nama[0].trim()}*\nPasangan 2: *${nama[1].trim()}*\n\nsisi positif: ${positif}\nsisi negatif: ${negatif}\n\n***********************************`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pict':
           switch (value) {
               case 'cewek':
                   cewePict()
                       .then(buffer => {
                           client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                           client.sendMessage(id, buffer, MessageType.image)
                       })
                       .catch(err => {
                           console.log(err)
                       })
                   break
               case 'cowok':
                   cowoPict()
                       .then(buffer => {
                           client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                           client.sendMessage(id, buffer, MessageType.image)
                       })
                       .catch(err => {
                           console.log(err)
                       })
                   break
               default:
                   client.sendMessage(id, 'ulangi dengan  !pict cewek/cowok\n\nMisal: !pict cowok', MessageType.text)
                   break
           }
           break
       case 'animepict':
           animPict()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'lirik':
           lirik(value)
               .then(data => {
                   const { hasil: lirik } = data
                   let hasil = `📍lirik lagu📍 *${value}* \n\n\n${lirik}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'fb':
           fb(value)
               .then(data => {
                   const { resultHD, resultSD } = data
                   let hasil = `Pilih resolusi nya sayang😙 \n\n\n HD ${resultHD} \n\n\n SD ${resultSD}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break       
       case 'alay':
           alay(value)
               .then(data => {
                   const { hasil: alay } = data
                   client.sendMessage(id, alay, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'sticker':
           const image = await client.downloadAndSaveMediaMessage(m)
           exec('cwebp -q 50 ' + image + ' -o temp/' + time + '.webp', (error, stdout, stderr) => {
               let result = fs.readFileSync('temp/' + time + '.webp')
               client.sendMessage(id, result, MessageType.sticker)
           })
           break
       case 'ocr':
           const media = await client.downloadAndSaveMediaMessage(m)
           readTextInImage(media)
               .then(data => {
                   client.sendMessage(id, `*Read Data Text in Image* \n\nHasil: \n\n${data}`, MessageType.text);
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'igstalk':
           igStalk(value)
               .then(data => {
                   const { Username, Jumlah_Followers, Jumlah_Following, Name, Jumlah_Post } = data
                   client.sendMessage(id, '[WAIT] Stalking...⏳', MessageType.text)
                   let hasil = `✨Biodata Instagram _${value}_ \n\n 🧶 *Username* : ${Username}_ \n 🌀 *Nama* : _${Name}_ \n 🌟 *Jumlah Followers* : _${Jumlah_Followers}_ \n 🌠 *Jumlah_Following* : _${Jumlah_Following}_ \n ⭐ *Jumlah_Post* : _${Jumlah_Post}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   client.sendMessage(id, err, MessageType.text)
               })
           break
           case 'cerpen':
           cerpen()
               .then(data => {
                   const { result } = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'puisi1':
           puisi1()
               .then(data => {
                   const { result} = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'puisi2':
           puisi2()
               .then(data => {
                   const { result} = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'infogempa':
           infogempa()
               .then(data => {
                   const { lokasi, kedalaman, koordinat, magnitude, waktu } = data
                   let hasil = `*INFO GEMPA* \n\ *Lokasi* : _${lokasi}_ \n *Kedalaman* : _${kedalaman}_ \n *Koordinat* : _${koordinat}_ \n *Magnitude* : _${magnitude}_ \n *Waktu* : _${waktu}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'chord':
           chord(value)
               .then(data => {
                   const { result } = data
                   let hasil = `Nih chord lagu *${value}* sayang ♥️\n\n  _${result}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
   case 'kbbi':
           kbbi(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*${value}* menurut KBBI ️\n\n  _${result}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break        
           
           case 'zodiak':
 zodiak(value)
               .then(data => {
                   const { lahir, ultah, usia, zodiak } = data
                   let hasil = `*Lahir* : _${lahir}_ n\n *Ultah* : _${ultah}_ \n *Usia* : _${usia}_:\n *Zodiak* : _${zodiak}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'simi':
            simi(value)
               .then(data => {
                   const { result } = data
                   let hasil = ` ${result} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'wikien':
           wikien(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*♻️According to Wikipedia🗿:* \n\n  _${result}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'spamgmail':
           spamgmail()
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'spamcall':
           spamcall()
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'spamsms':
           spamsms()
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'covidcountry':
           covidcountry(value)
               .then(data => {
                   const { country, active, casesPerOneMillion, critical, deathsPerOneMillion, recovered, testPerOneMillion, todayCases, todayDeath, totalCases, totalTest } = data
                   let hasil = `*Negara* : _${country}_ \n\n *Active* : _${active}_ \n *CasesPerOneMillion* : _${casesPerOneMillion}_ \n *Critical* : ${critical}\n *DeathsPerOneMillion* : _${deathsPerOneMillion}_ \n *Recovered* : _${recovered}_ \n *TestPerOneMillion* : _${testPerOneMillion}_ \n *TodayCases* : _${todayCases}_ \n *TodayDeath : _${todayDeath}\n *TotalCases* : _${totalCases}_ \n  *TotalTest* : _${totalTest}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'infoanime':
           infoanime(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*INFO ANIME ${value} :* \n\n _${result}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'gay':
           gay()
               .then(data => {
                   const { desc, persen } = data
                   let hasil = `*${desc} \n\n *Persen Gay Lo Su!!!* _${persen}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'indohot':
           indohot()
               .then(data => {
                   const { judul, genre, durasi, url } = data
                   let hasil = `Sayang ga boleh sini aku aja Sepongin:(* \n\n *Judul* _${judul}_ \n\n *Status* _${genre}_ \n\n *Durasi* _${durasi}_ \n\n *Link Bosq* _${url}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'filmanime':
           filmanime(value)
               .then(data => {
                   const { title, rating, sinopis, video } = data
                   let hasil = `*Film Anime ${value} :* \n\n *Judul* _${title}_ \n\n *Rating* _${rating}_ \n\n *Info* _${sinopsis}_ \n\n *Link Video* _${video}_  `
                   client.sendMessage(id, hasil, MessageType.txext)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'resep':
           resep(value)
               .then(data => {
                   const { title, user,  datePublished, dificulty, times, serving, bahan, tutor } = data
                   let hasil = `*Judul:* ${title}\n*Penulis:* ${user}\n*Rilis:* ${datePublished}\n*Level:* ${dificulty}\n*Waktu:* ${times}\n*Porsi:* ${servings}\n\n*Bahan-bahan:*\n${ingredient}\n\n*Step-by-step:*\n ${step} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'namaninja':
           namaninja(value)
               .then(data => {
                   const { ninja } = data
                   let hasil = `Nama Ninja *${value}*💡:\n\n _${ninja}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'cektanggal':
           cektanggal(value)
               .then(data => {
                   const { tanggal, keterangan } = data
                   let hasil = `Menurut tanggal ${value} adalah\n\n *Tanggal* : _${tanggal}_ \n *Keterangan* : _${keterangan}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'bitly':
           bitly(value)
               .then(data => {
                   const { result } = data
                   let hasil = `Nih kak udah jadi☣️ :) \n\n${result} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
     case 'cersex':
           cersex()
               .then(data => {
                   const { result } = data
                   let hasil = `CERSEX \n\n${result} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
    case 'bucin':
           bucin()
               .then(data => {
                   const { desc } = data
                   let hasil = `_${desc}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'map':
           map()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'waifu':
           waifu()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
      case 'loli':
           loli()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break     
           case 'ssweb':
           ssweb()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
     case 'cooltext':
           cooltext()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break      
           case 'ttp':
           ttp()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'nekonime':
           nekonime()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'ytmp3':
           mp3()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT Sayang🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
          case 'creator':
            client.sendContact(from, '6285722553839@c.us')
            break
      case 'tts':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!tts [id, en, jp, ar] [teks]*, contoh *!tts id halo semua*')
            const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
	    const ttsJp = require('node-gtts')('ja')
            const ttsAr = require('node-gtts')('ar')
            const dataText = body.slice(8)
            if (dataText === '') return client.reply(from, 'Baka?', id)
            if (dataText.length > 500) return client.reply(from, 'Teks terlalu panjang!', id)
            var dataBhs = body.slice(5, 7)
	        if (dataBhs == 'id') {
                ttsId.save('./media/tts/resId.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resId.mp3', id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./media/tts/resEn.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./media/tts/resJp.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resJp.mp3', id)
                })
	    } else if (dataBhs == 'ar') {
                ttsAr.save('./media/tts/resAr.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resAr.mp3', id)
                })
            } else {
                client.reply(from, 'Masukkan data bahasa : [id] untuk indonesia, [en] untuk inggris, [jp] untuk jepang, dan [ar] untuk arab', id)
            }
            break     
      case 'stickergif':
            if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10) {
                    const mediaData = await decryptMedia(message, uaOverride)
                    client.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                    const filename = `./media/aswu.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/output.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                        const gif = await fs.readFileSync('./media/output.gif', { encoding: "base64" })
                        await client.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                    })
                } else (
                    client.reply(from, '[❗] Kirim video dengan caption *!stickerGif* max 10 sec!', id)
                )
            }
            break     
     case 'sticker':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await client.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    client.reply(from, mess.error.Iv, id)
                }
            } else {
                    client.reply(from, mess.error.St, id)
            }
            break       
       default:
           break
   }
})
moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = msgHandler = async (client, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')

        const msgs = (message) => {
            if (command.startsWith('!')) {
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
            }
        }

        const mess = {
            wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
            error: {
                St: '[❗] Kirim gambar dengan caption *!sticker* atau tag gambar yang sudah dikirim',
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan admin group!',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }
        const apiKey = 'API-KEY' // apikey you can get it at https://mhankbarbar.herokuapp.com/api
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const botNumber = await client.getHostNumber()
        const blockNumber = await client.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const ownerNumber = ["6282387804410@c.us","55xxxxx"] // replace with your whatsapp number
        const isOwner = ownerNumber.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        if (!isGroupMsg && command.startsWith('!')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname))
        if (isGroupMsg && command.startsWith('!')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname), 'in', color(formattedTitle))
        //if (!isGroupMsg && !command.startsWith('!')) console.log('\x1b[1;33m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color(body), 'from', color(pushname))
        //if (isGroupMsg && !command.startsWith('!')) console.log('\x1b[1;33m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color(body), 'from', color(pushname), 'in', color(formattedTitle))
        if (isBlocked) return
        //if (!isOwner) return
        switch(command) {
        case '!sticker':
        case '!stiker':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await client.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    client.reply(from, mess.error.Iv, id)
                }
            } else {
                    client.reply(from, mess.error.St, id)
            }
            break
        case '!stickergif':
        case '!stikergif':
        case '!sgif':
            if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10) {
                    const mediaData = await decryptMedia(message, uaOverride)
                    client.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                    const filename = `./media/aswu.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/output.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                        const gif = await fs.readFileSync('./media/output.gif', { encoding: "base64" })
                        await client.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                    })
                } else (
                    client.reply(from, '[❗] Kirim video dengan caption *!stickerGif* max 10 sec!', id)
                )
            }
            break
	    case '!stickernobg':
        case '!stikernobg':
	    if (isMedia) {
                try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/img/noBg.png'
                    // untuk api key kalian bisa dapatkan pada website remove.bg
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'API-KEY', size: 'auto', type: 'auto', outFile })
                    await fs.writeFile(outFile, result.base64img)
                    await client.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                } catch(err) {
                    console.log(err)
                }
            }
            break
        case '!donasi':
        case '!donate':
            client.sendLinkWithAutoPreview(from,'https://trakteer.id/rizkybot', donate)
            break
        case '!tts':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!tts [id, en, jp, ar] [teks]*, contoh *!tts id halo semua*')
            const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
	    const ttsJp = require('node-gtts')('ja')
            const ttsAr = require('node-gtts')('ar')
            const dataText = body.slice(8)
            if (dataText === '') return client.reply(from, 'Baka?', id)
            if (dataText.length > 500) return client.reply(from, 'Teks terlalu panjang!', id)
            var dataBhs = body.slice(5, 7)
	        if (dataBhs == 'id') {
                ttsId.save('./media/tts/resId.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resId.mp3', id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./media/tts/resEn.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./media/tts/resJp.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resJp.mp3', id)
                })
	    } else if (dataBhs == 'ar') {
                ttsAr.save('./media/tts/resAr.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resAr.mp3', id)
                })
            } else {
                client.reply(from, 'Masukkan data bahasa : [id] untuk indonesia, [en] untuk inggris, [jp] untuk jepang, dan [ar] untuk arab', id)
            }
            break
        case '!nulis':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!nulis [teks]*', id)
            const nulis = encodeURIComponent(body.slice(7))
            client.reply(from, mess.wait, id)
            let urlnulis = `https://mhankbarbar.herokuapp.com/nulis?text=${nulis}&apiKey=${apiKey}`
            await fetch(urlnulis, {method: "GET"})
            .then(res => res.json())
            .then(async (json) => {
                await client.sendFileFromUrl(from, json.result, 'Nulis.jpg', 'Nih anjim', id)
            }).catch(e => client.reply(from, "Error: "+ e));
            break
        case '!ytmp3':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!ytmp3 [linkYt]*, untuk contoh silahkan kirim perintah *!readme*')
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const resp = await get.get(`https://mhankbarbar.herokuapp.com/api/yta?url=${args[1]}&apiKey=${apiKey}`).json()
                if (resp.error) {
                    client.reply(from, resp.error, id)
                } else {
                    const { title, thumb, filesize, result } = await resp
                    if (Number(filesize.split(' MB')[0]) >= 30.00) return client.reply(from, 'Maaf durasi video sudah melebihi batas maksimal!', id)
                    client.sendFileFromUrl(from, thumb, 'thumb.jpg', `➸ *Title* : ${title}\n➸ *Filesize* : ${filesize}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await client.sendFileFromUrl(from, result, `${title}.mp3`, '', id).catch(() => client.reply(from, mess.error.Yt3, id))
                    //await client.sendAudio(from, result, id)
                }
            } catch (err) {
                client.sendText(ownerNumber[0], 'Error ytmp3 : '+ err)
                client.reply(from, mess.error.Yt3, id)
            }
            break
        case '!ytmp4':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!ytmp4 [linkYt]*, untuk contoh silahkan kirim perintah *!readme*')
            let isLin = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLin) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const ytv = await get.get(`https://mhankbarbar.herokuapp.com/api/ytv?url=${args[1]}&apiKey=${apiKey}`).json()
                if (ytv.error) {
                    client.reply(from, ytv.error, id)
                } else {
                    if (Number(ytv.filesize.split(' MB')[0]) > 40.00) return client.reply(from, 'Maaf durasi video sudah melebihi batas maksimal!', id)
                    client.sendFileFromUrl(from, ytv.thumb, 'thumb.jpg', `➸ *Title* : ${ytv.title}\n➸ *Filesize* : ${ytv.filesize}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await client.sendFileFromUrl(from, ytv.result, `${ytv.title}.mp4`, '', id).catch(() => client.reply(from, mess.error.Yt4, id))
                }
            } catch (er) {
                client.sendText(ownerNumber[0], 'Error ytmp4 : '+ er)
                client.reply(from, mess.error.Yt4, id)
            }
            break
        case '!wiki':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!wiki [query]*\nContoh : *!wiki asu*', id)
            const query_ = body.slice(6)
            const wiki = await get.get(`https://mhankbarbar.herokuapp.com/api/wiki?q=${query_}&lang=id&apiKey=${apiKey}`).json()
            if (wiki.error) {
                client.reply(from, wiki.error, id)
            } else {
                client.reply(from, `➸ *Query* : ${query_}\n\n➸ *Result* : ${wiki.result}`, id)
            }
            break
        case '!cuaca':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca tangerang', id)
            const tempat = body.slice(7)
            const weather = await get.get(`https://mhankbarbar.herokuapp.com/api/cuaca?q=${tempat}&apiKey=${apiKey}`).json()
            if (weather.error) {
                client.reply(from, weather.error, id)
            } else {
                client.reply(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desk}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, id)
            }
            break
        case '!fb':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!fb [linkFb]* untuk contoh silahkan kirim perintah *!readme*', id)
            if (!args[1].includes('facebook.com')) return client.reply(from, mess.error.Iv, id)
            client.reply(from, mess.wait, id)
            const epbe = await get.get(`https://mhankbarbar.herokuapp.com/api/epbe?url=${args[1]}&apiKey=${apiKey}`).json()
            if (epbe.error) return client.reply(from, epbe.error, id)
            client.sendFileFromUrl(from, epbe.result, 'epbe.mp4', epbe.title, id)
            break
        case '!creator':
            client.sendContact(from, '6282387804410@c.us')
            break
        case '!ig':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!ig [linkIg]* untuk contoh silahkan kirim perintah *!readme*')
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const resp = await get.get(`https://mhankbarbar.herokuapp.com/api/ig?url=${args[1]}&apiKey=${apiKey}`).json()
                if (resp.result.includes('.mp4')) {
                    var ext = '.mp4'
                } else {
                    var ext = '.jpg'
                }
                await client.sendFileFromUrl(from, resp.result, `igeh${ext}`, '', id)
            } catch {
                client.reply(from, mess.error.Ig, id)
                }
            break
        case '!nsfw':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return client.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                nsfw_.push(chat.id)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                client.reply(from, 'NSWF Command berhasil di aktifkan di group ini! kirim perintah *!nsfwMenu* untuk mengetahui menu', id)
            } else if (args[1].toLowerCase() === 'disable') {
                nsfw_.splice(chat.id, 1)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                client.reply(from, 'NSFW Command berhasil di nonaktifkan di group ini!', id)
            } else {
                client.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case '!welcome':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return client.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
            } else {
                client.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case '!nsfwmenu':
            if (!isNsfw) return
            client.reply(from, '1. !randomHentai\n2. !randomNsfwNeko', id)
            break
        case '!igstalk':
            if (args.length === 1)  return client.reply(from, 'Kirim perintah *!igStalk @username*\nConntoh *!igStalk @duar_amjay*', id)
            const stalk = await get.get(`https://mhankbarbar.herokuapp.com/api/stalk?username=${args[1]}&apiKey=${apiKey}`).json()
            if (stalk.error) return client.reply(from, stalk.error, id)
            const { Biodata, Jumlah_Followers, Jumlah_Following, Jumlah_Post, Name, Username, Profile_pic } = stalk
            const caps = `➸ *Nama* : ${Name}\n➸ *Username* : ${Username}\n➸ *Jumlah Followers* : ${Jumlah_Followers}\n➸ *Jumlah Following* : ${Jumlah_Following}\n➸ *Jumlah Postingan* : ${Jumlah_Post}\n➸ *Biodata* : ${Biodata}`
            await client.sendFileFromUrl(from, Profile_pic, 'Profile.jpg', caps, id)
            break
        case '!infogempa':
            const bmkg = await get.get(`https://mhankbarbar.herokuapp.com/api/infogempa?apiKey=${apiKey}`).json()
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg
            const hasil = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            client.sendFileFromUrl(from, map, 'shakemap.jpg', hasil, id)
            break
        case '!anime':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!anime [query]*\nContoh : *!anime darling in the franxx*', id)
            const animek = await get.get(`https://mhankbarbar.herokuapp.com/api/kuso?q=${body.slice(7)}&apiKey=${apiKey}`).json()
            if (animek.error) return client.reply(from, animek.error, id)
            const res_animek = `Title: *${animek.title}*\n\n${animek.info}\n\nSinopsis: ${animek.sinopsis}\n\nLink Download:\n${animek.link_dl}`
            client.sendFileFromUrl(from, animek.thumb, 'kusonime.jpg', res_animek, id)
            break
        case '!nh':
            //if (isGroupMsg) return client.reply(from, 'Sorry this command for private chat only!', id)
            if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                client.reply(from, mess.wait, id)
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        //exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                        client.sendFileFromUrl(from, pic, 'hentod.jpg', teks, id)
                            //client.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, then(() => `${title}.pdf`, '', id)).catch(() => 
                            //client.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id))
                            /*if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)*/
                            //})
                    } catch (err) {
                        client.reply(from, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', id)
                    }
                } else {
                    client.reply(from, '[❗] Kode nuClear Salah!')
                }
            } else {
                client.reply(from, '[ WRONG ] Kirim perintah *!nh [nuClear]* untuk contoh kirim perintah *!readme*')
            }
        	break
        case '!brainly':
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return client.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                client.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            client.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            client.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                client.reply(from, 'Usage :\n!brainly [pertanyaan] [.jumlah]\n\nEx : \n!brainly NKRI .2', id)
            }
            break
        case '!wait':
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                client.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		client.reply(from, 'Maaf, saya tidak tau ini anime apa', id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    client.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        client.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    client.reply(from, 'Error !', id)
                })
            } else {
                client.sendFile(from, './media/img/tutod.jpg', 'Tutor.jpg', 'Neh contoh mhank!', id)
            }
            break
        case '!quotemaker':
            arg = body.trim().split('|')
            if (arg.length >= 4) {
                client.reply(from, mess.wait, id)
                const quotes = encodeURIComponent(arg[1])
                const author = encodeURIComponent(arg[2])
                const theme = encodeURIComponent(arg[3])
                await quotemaker(quotes, author, theme).then(amsu => {
                    client.sendFile(from, amsu, 'quotesmaker.jpg','neh...').catch(() => {
                       client.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                client.reply(from, 'Usage: \n!quotemaker |teks|watermark|theme\n\nEx :\n!quotemaker |ini contoh|bicit|random', id)
            }
            break
        case '!linkgroup':
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (isGroupMsg) {
                const inviteLink = await client.getGroupInviteLink(groupId);
                client.sendLinkWithAutoPreview(from, inviteLink, `\nLink group *${name}*`)
            } else {
            	client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            }
            break
        case '!bc':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
            let msg = body.slice(4)
            const chatz = await client.getAllChatIds()
            for (let ids of chatz) {
                var cvk = await client.getChatById(ids)
                if (!cvk.isReadOnly) await client.sendText(ids, `[ Shinomiya Kaguya BOT Broadcast ]\n\n${msg}`)
            }
            client.reply(from, 'Broadcast Success!', id)
            break
        case '!adminlist':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await client.sendTextWithMentions(from, mimin)
            break
        case '!ownergroup':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const Owner_ = chat.groupMetadata.owner
            await client.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
            break
        case '!mentionall':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const groupMem = await client.getGroupMembers(groupId)
            let hehe = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '╠➥'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '╚═〘 Shinomiya Kaguya BOT 〙'
            await client.sendTextWithMentions(from, hehe)
            break
        case '!kickall':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await client.removeParticipant(groupId, allMem[i].id)
                }
            }
            client.reply(from, 'Succes kick all member', id)
            break
        case '!leaveall':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChats = await client.getAllChatIds()
            const allGroups = await client.getAllGroups()
            for (let gclist of allGroups) {
                await client.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await client.leaveGroup(gclist.contact.id)
            }
            client.reply(from, 'Succes leave all group!', id)
            break
        case '!clearall':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChatz = await client.getAllChats()
            for (let dchat of allChatz) {
                await client.deleteChat(dchat.id)
            }
            client.reply(from, 'Succes clear all chat!', id)
            break
        case '!add':
            const orang = args[1]
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *!add* 628xxxxx', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await client.addParticipant(from,`${orang}@c.us`)
            } catch {
                client.reply(from, mess.error.Ad, id)
            }
            break
        case '!kick':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *!kick* @tagmember', id)
            await client.sendText(from, `Perintah diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return client.reply(from, mess.error.Ki, id)
                await client.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case '!leave':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            await client.sendText(from,'Sayonara').then(() => client.leaveGroup(groupId))
            break
        case '!promote':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *!promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return client.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await client.promoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case '!demote':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *!demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return client.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await client.demoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case '!join':
            //return client.reply(from, 'Jika ingin meng-invite bot ke group anda, silahkan izin ke wa.me/6285892766102', id)
            if (args.length < 2) return client.reply(from, 'Kirim perintah *!join linkgroup key*\n\nEx:\n!join https://chat.whatsapp.com/blablablablablabla abcde\nuntuk key kamu bisa mendapatkannya hanya dengan donasi 5k', id)
            const link = args[1]
            const key = args[2]
            const tGr = await client.getAllGroups()
            const minMem = 30
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            if (key !== 'lGjYt4zA5SQlTDx9z9Ca') return client.reply(from, '*key* salah! silahkan chat owner bot unruk mendapatkan key yang valid', id)
            const check = await client.inviteInfo(link)
            if (!isLink) return client.reply(from, 'Ini link? 👊🤬', id)
            if (tGr.length > 15) return client.reply(from, 'Maaf jumlah group sudah maksimal!', id)
            if (check.size < minMem) return client.reply(from, 'Member group tidak melebihi 30, bot tidak bisa masuk', id)
            if (check.status === 200) {
                await client.joinGroupViaLink(link).then(() => client.reply(from, 'Bot akan segera masuk!'))
            } else {
                client.reply(from, 'Link group tidak valid!', id)
            }
            break
        case '!delete':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!quotedMsg) return client.reply(from, 'Salah!!, kirim perintah *!delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return client.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case '!getses':
            const sesPic = await client.getSnapshot()
            client.sendFile(from, sesPic, 'session.png', 'Neh...', id)
            break
        case '!lirik':
            if (args.length == 1) return client.reply(from, 'Kirim perintah *!lirik [optional]*, contoh *!lirik aku bukan boneka*', id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            client.reply(from, lirik, id)
            break
        case '!chord':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!chord [query]*, contoh *!chord aku bukan boneka*', id)
            const query__ = body.slice(7)
            const chord = await get.get(`https://mhankbarbar.herokuapp.com/api/chord?q=${query__}&apiKey=${apiKey}`).json()
            if (chord.error) return client.reply(from, chord.error, id)
            client.reply(from, chord.result, id)
            break
        case '!listdaerah':
            const listDaerah = await get('https://mhankbarbar.herokuapp.com/daerah').json()
            client.reply(from, listDaerah.result, id)
            break
        case '!listblock':
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            client.sendTextWithMentions(from, hih, id)
            break
        case '!jadwalshalat':
            if (args.length === 1) return client.reply(from, '[❗] Kirim perintah *!jadwalShalat [daerah]*\ncontoh : *!jadwalShalat Tangerang*\nUntuk list daerah kirim perintah *!listDaerah*')
            const daerah = body.slice(14)
            const jadwalShalat = await get.get(`https://mhankbarbar.herokuapp.com/api/jadwalshalat?daerah=${daerah}&apiKey=${apiKey}`).json()
            if (jadwalShalat.error) return client.reply(from, jadwalShalat.error, id)
            const { Imsyak, Subuh, Dhuha, Dzuhur, Ashar, Maghrib, Isya } = await jadwalShalat
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `Jadwal shalat di ${daerah}, ${tgl}-${arrbulan[bln]}-${thn}\n\nImsyak : ${Imsyak}\nSubuh : ${Subuh}\nDhuha : ${Dhuha}\nDzuhur : ${Dzuhur}\nAshar : ${Ashar}\nMaghrib : ${Maghrib}\nIsya : ${Isya}`
            client.reply(from, resultJadwal, id)
            break
        case '!listchannel':
            client.reply(from, listChannel, id)
            break
        case '!jadwaltv':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!jadwalTv [channel]*', id)
            const query = body.slice(10).toLowerCase()
            const jadwal = await jadwalTv(query)
            client.reply(from, jadwal, id)
            break
        case '!jadwaltvnow':
            const jadwalNow = await get.get('https://api.haipbis.xyz/jadwaltvnow').json()
            client.reply(from, `Jam : ${jadwalNow.jam}\n\nJadwalTV : ${jadwalNow.jadwalTV}`, id)
            break
        case '!loli':
            const loli = await get.get('https://mhankbarbar.herokuapp.com/api/randomloli').json()
            client.sendFileFromUrl(from, loli.result, 'loli.jpeg', 'Lolinya om', id)
            break
        case '!waifu':
            const waifu = await get.get(`https://mhankbarbar.herokuapp.com/api/waifu?apiKey=${apiKey}`).json()
            client.sendFileFromUrl(from, waifu.image, 'Waifu.jpg', `➸ Name : ${waifu.name}\n➸ Description : ${waifu.desc}\n\n➸ Source : ${waifu.source}`, id)
            break
        case '!husbu':
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            client.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break
        case '!randomhentai':
            if (isGroupMsg) {
                if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan di group ini!', id)
                const hentai = await randomNimek('hentai')
                if (hentai.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, hentai, `Hentai${ext}`, 'Hentai!', id)
                break
            } else {
                const hentai = await randomNimek('hentai')
                if (hentai.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, hentai, `Hentai${ext}`, 'Hentai!', id)
            }
        case '!randomnsfwneko':
            if (isGroupMsg) {
                if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan di group ini!', id)
                const nsfwneko = await randomNimek('nsfw')
                if (nsfwneko.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, nsfwneko, `nsfwNeko${ext}`, 'Nsfwneko!', id)
            } else {
                const nsfwneko = await randomNimek('nsfw')
                if (nsfwneko.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, nsfwneko, `nsfwNeko${ext}`, 'Nsfwneko!', id)
            }
            break
        case '!randomnekonime':
            const nekonime = await get.get('https://mhankbarbar.herokuapp.com/api/nekonime').json()
            if (nekonime.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            client.sendFileFromUrl(from, nekonime.result, `Nekonime${ext}`, 'Nekonime!', id)
            break
        case '!randomtrapnime':
            const trap = await randomNimek('trap')
            if (trap.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            client.sendFileFromUrl(from, trap, `trapnime${ext}`, 'Trapnime!', id)
            break
        case '!randomanime':
            const nime = await randomNimek('anime')
            if (nime.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            client.sendFileFromUrl(from, nime, `Randomanime${ext}`, 'Randomanime!', id)
            break
        case '!inu':
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            client.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Inu')
            break
        case '!neko':
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            client.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            break
        case '!sendto':
            client.sendFile(from, './msgHndlr.js', 'msgHndlr.js')
            break
        case '!url2img':
            const _query = body.slice(9)
            if (!_query.match(isUrl)) return client.reply(from, mess.error.Iv, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!url2img [web]*\nContoh *!url2img https://google.com*', id)
            const url2img = await get.get(`https://mhankbarbar.herokuapp.com/api/url2image?url=${_query}&apiKey=${apiKey}`).json()
            if (url2img.error) return client.reply(from, url2img.error, id)
            client.sendFileFromUrl(from, url2img.result, 'kyaa.jpg', null, id)
            break
        case '!quote':
        case '!quotes':
            const quotes = await get.get('https://mhankbarbar.herokuapp.com/api/randomquotes').json()
            client.reply(from, `➸ *Quotes* : ${quotes.quotes}\n➸ *Author* : ${quotes.author}`, id)
            break
        case '!quotesnime':
            const skya = await get.get('https://mhankbarbar.herokuapp.com/api/quotesnime/random').json()
            skya_ = skya.data
            client.reply(from, `➸ *Quotes* : ${skya_.quote}\n➸ *Character* : ${skya_.character}\n➸ *Anime* : ${skya_.anime}`, id)
            break
        case '!meme':
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes');
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            client.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`)
            break
        case '!help':
            client.sendText(from, help)
            break
        case '!readme':
            client.reply(from, readme, id)
            break
        case '!info':
            client.sendLinkWithAutoPreview(from, 'https://github.com/mhankbarbar/whatsapp-bot', info)
            break
        case '!snk':
            client.reply(from, snk, id)
            break
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //client.kill().then(a => console.log(a))
    }
}
